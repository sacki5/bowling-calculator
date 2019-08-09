import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const getDefaultState = () => {
    return {
        score: 0,
        turn: 0,
        turnScores: [
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, third: null, total: null },
        ],
    };
};

export default new Vuex.Store({
    state: getDefaultState(),
    mutations: {
        resetState(state) {
            Object.assign(state, getDefaultState());
        },

        /**
         * Increments the turn
         * @param {*} state
         */
        nextTurn(state) {
            state.turn += 1;
        },

        /**
         * Save the total score on the turn and updates the score
         * @param {*} state
         * @param {{offset: number, score: number}} Payload
         */
        saveScore(state, { offset, score }) {
            state.turnScores[state.turn - offset].total = state.score + score;
            state.score = state.turnScores[state.turn - offset].total;
        },

        saveRoll(state, { roll, amount }) {
            state.turnScores[state.turn][roll] = amount;
        },
    },
    actions: {
        /**
         * @param context
         * @param {number} amount - Amount of pins knocked down.
         */
        addRoll(context, amount) {
            if (
                context.state.turnScores[context.state.turn].first &&
                context.state.turnScores[context.state.turn].second
            ) {
                context.commit('saveRoll', { roll: 'third', amount });
                context.commit('saveScore', {
                    offset: 0,
                    score:
                        context.state.turnScores[context.state.turn].first +
                        context.state.turnScores[context.state.turn].second +
                        context.state.turnScores[context.state.turn].third,
                });
                context.commit('nextTurn');
            } else if (!context.state.turnScores[context.state.turn].first) {
                // If two last turns was a strike save score.
                if (
                    context.state.turn > 1 &&
                    context.state.turnScores[context.state.turn - 1].second ===
                        10 &&
                    context.state.turnScores[context.state.turn - 2].second ===
                        10
                ) {
                    context.commit('saveScore', {
                        offset: 2,
                        score: 10 + 10 + amount,
                    });
                }

                // If last turn was a spare save score to last turn
                if (
                    context.state.turn > 0 &&
                    context.state.turnScores[context.state.turn - 1].second !==
                        10 &&
                    context.state.turnScores[context.state.turn - 1].first +
                        context.state.turnScores[context.state.turn - 1]
                            .second ===
                        10
                ) {
                    context.commit('saveScore', {
                        offset: 1,
                        score: 10 + amount,
                    });
                }

                // If strike save to second roll and go to next turn. Else save to first roll.
                if (amount === 10 && context.state.turn !== 9) {
                    context.commit('saveRoll', { roll: 'second', amount });
                    context.commit('nextTurn');
                } else {
                    context.commit('saveRoll', { roll: 'first', amount });
                }
            } else {
                // Save second roll result
                context.commit('saveRoll', { roll: 'second', amount });

                // Save turn score if it was no spare
                if (
                    context.state.turnScores[context.state.turn].first +
                        context.state.turnScores[context.state.turn].second !==
                        10 &&
                    !(
                        context.state.turn === 9 &&
                        context.state.turnScores[context.state.turn].first ===
                            10
                    )
                ) {
                    context.commit('saveScore', {
                        offset: 0,
                        score:
                            context.state.turnScores[context.state.turn].first +
                            context.state.turnScores[context.state.turn].second,
                    });
                }

                // If last turn was a strike and Commit score.
                if (
                    context.state.turn > 0 &&
                    context.state.turnScores[context.state.turn - 1].second ===
                        10
                ) {
                    context.commit('saveScore', {
                        offset: 1,
                        score:
                            10 +
                            context.state.turnScores[context.state.turn].first +
                            context.state.turnScores[context.state.turn].second,
                    });
                }

                // Go to next turn if no spare or strike on last turn
                // If last turn and no spare or strike is made go to next turn.
                if (
                    context.state.turn !== 9 ||
                    (context.state.turn === 9 &&
                        context.state.turnScores[context.state.turn].first +
                            context.state.turnScores[context.state.turn]
                                .second !==
                            10 &&
                        context.state.turnScores[context.state.turn].second !==
                            10 &&
                        context.state.turnScores[context.state.turn].first !==
                            10)
                )
                    context.commit('nextTurn');
            }
        },
    },
    getters: {
        getRemainingPins(state) {
            if (
                state.turn > 9 ||
                (state.turn === 9 &&
                    state.turnScores[state.turn].first === 10) ||
                state.turnScores[state.turn].second === 10 ||
                state.turnScores[state.turn].first +
                    state.turnScores[state.turn].second ===
                    10
            )
                return 10;
            return 10 - state.turnScores[state.turn].first;
        },
    },
});
