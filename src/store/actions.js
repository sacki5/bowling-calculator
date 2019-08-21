export default {
    /**
     * @param {*} context
     */
    reset(context) {
        context.commit('resetState');
    },

    /**
     * @param {*} context
     * @param {String} name
     */
    saveName(context, name) {
        context.commit('saveName', name);
    },

    /**
     * @param {*} context
     * @param {*} amount
     */
    startGame(context) {
        context.commit('setGameStarted', true);
    },

    /**
     * @param context
     * @param {number} amount - Amount of pins knocked down.
     */
    addRoll(context, amount) {
        // When the third roll is rolled on the ninth turn Save roll and score.
        if (context.getters.isLastRoll) {
            context.commit('saveRoll', { roll: 'third', amount });
            context.commit('saveScore', {
                offset: 0,
                score:
                    context.state.turnScores[context.state.turn].first +
                    context.state.turnScores[context.state.turn].second +
                    context.state.turnScores[context.state.turn].third,
            });
            context.commit('nextTurn');

            return;
        }

        if (!context.state.turnScores[context.state.turn].first) {
            context.commit('saveRoll', { roll: 'first', amount });

            if (context.getters.prevTwoWasStrike) {
                context.commit('saveScore', {
                    offset: 2,
                    score: 10 + 10 + amount,
                });
            }

            if (context.getters.prevTurnWasSpare) {
                context.commit('saveScore', {
                    offset: 1,
                    score: 10 + amount,
                });
            }

            if (amount === 10 && context.state.turn !== 9) {
                context.commit('nextTurn');
            }

            return;
        }

        context.commit('saveRoll', { roll: 'second', amount });

        if (context.getters.isSpare) {
            context.commit('saveScore', {
                offset: 0,
                score:
                    context.state.turnScores[context.state.turn].first +
                    context.state.turnScores[context.state.turn].second,
            });
        }

        if (context.getters.prevTurnWasStrike) {
            context.commit('saveScore', {
                offset: 1,
                score:
                    10 +
                    context.state.turnScores[context.state.turn].first +
                    context.state.turnScores[context.state.turn].second,
            });
        }

        if (context.getters.shouldGoToNextTurn) context.commit('nextTurn');
    },
};
