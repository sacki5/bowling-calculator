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

            return;
        }

        // If it's the first roll this turn
        if (!context.state.turnScores[context.state.turn].first) {
            // If two last turns was a strike save score.
            if (
                context.state.turn > 1 &&
                context.state.turnScores[context.state.turn - 1].second ===
                    10 &&
                context.state.turnScores[context.state.turn - 2].second === 10
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
                    context.state.turnScores[context.state.turn - 1].second ===
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

            return;
        }

        // Code runs when it's the second roll this turn
        context.commit('saveRoll', { roll: 'second', amount });

        // If no spare it saves the total score to this turns score.
        if (
            context.state.turnScores[context.state.turn].first +
                context.state.turnScores[context.state.turn].second !==
                10 &&
            !(
                context.state.turn === 9 &&
                context.state.turnScores[context.state.turn].first === 10
            )
        ) {
            context.commit('saveScore', {
                offset: 0,
                score:
                    context.state.turnScores[context.state.turn].first +
                    context.state.turnScores[context.state.turn].second,
            });
        }

        // If last turn was a strike and save score on last turns total.
        if (
            context.state.turn > 0 &&
            context.state.turnScores[context.state.turn - 1].second === 10
        ) {
            context.commit('saveScore', {
                offset: 1,
                score:
                    10 +
                    context.state.turnScores[context.state.turn].first +
                    context.state.turnScores[context.state.turn].second,
            });
        }

        // If it's not the last turn or it is the last turn and no strike or spare is made go to next turn.
        if (
            context.state.turn !== 9 ||
            (context.state.turn === 9 &&
                context.state.turnScores[context.state.turn].first +
                    context.state.turnScores[context.state.turn].second !==
                    10 &&
                context.state.turnScores[context.state.turn].second !== 10 &&
                context.state.turnScores[context.state.turn].first !== 10)
        )
            context.commit('nextTurn');
    },
};
