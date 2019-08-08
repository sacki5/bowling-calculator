import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        hdcpScore: 0,
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
        rolls: [],
    },
    mutations: {
        addScore(state, amount) {
            if (!state.turnScores[state.turn].first) {
                if (
                    state.turn > 1 &&
                    state.turnScores[state.turn - 1].second === 10 &&
                    state.turnScores[state.turn - 2].second === 10
                ) {
                    state.turnScores[state.turn - 2].total = 10 + 10 + amount;
                }

                if (
                    state.turn > 0 &&
                    state.turnScores[state.turn - 1].second !== 10 &&
                    state.turnScores[state.turn - 1].first +
                        state.turnScores[state.turn - 1].second ===
                        10
                ) {
                    state.turnScores[state.turn - 1].total = 10 + amount;
                }

                if (amount === 10) {
                    state.turnScores[state.turn].second = 10;
                    state.turn += 1;
                } else {
                    state.turnScores[state.turn].first = amount;
                }
            } else {
                state.turnScores[state.turn].second = amount;

                if (
                    state.turnScores[state.turn].first +
                        state.turnScores[state.turn].second !==
                    10
                ) {
                    state.turnScores[state.turn].total =
                        state.turnScores[state.turn].first +
                        state.turnScores[state.turn].second;
                }

                if (
                    state.turn > 0 &&
                    state.turnScores[state.turn - 1].second === 10
                ) {
                    state.turnScores[state.turn - 1].total =
                        10 +
                        state.turnScores[state.turn].first +
                        state.turnScores[state.turn].second;
                }

                state.turn += 1;
            }
        },
    },
    getters: {
        getRemainingPins(state) {
            return 10 - state.turnScores[state.turn].first;
        },
    },
});
