export default {
    /**
     * Get the number of pins that still stands this turn.
     * @param {*} state
     */
    getRemainingPins(state) {
        // If game is over or Ninth turn had a strike or spare it should return 10.
        // Else it returns 10 - number of pins knocked down.
        if (
            state.turn > 9 ||
            (state.turn === 9 && state.turnScores[state.turn].first === 10) ||
            state.turnScores[state.turn].second === 10 ||
            state.turnScores[state.turn].first +
                state.turnScores[state.turn].second ===
                10
        )
            return 10;

        return 10 - state.turnScores[state.turn].first;
    },

    /**
     * @param {*} state
     * @return {Boolean}
     */
    prevTurnWasStrike(state) {
        return state.turn > 0 && state.turnScores[state.turn - 1].first === 10;
    },

    /**
     * @param {*} state
     * @return {Boolean}
     */
    prevTurnWasSpare(state) {
        return (
            state.turn > 0 &&
            state.turnScores[state.turn - 1].first !== 10 &&
            state.turnScores[state.turn - 1].first +
                state.turnScores[state.turn - 1].second ===
                10
        );
    },

    /**
     * @param {*} state
     * @return {Boolean}
     */
    prevTwoWasStrike(state) {
        return (
            state.turn > 1 &&
            state.turnScores[state.turn - 1].first === 10 &&
            state.turnScores[state.turn - 2].first === 10
        );
    },

    /**
     * @param {*} state
     * @return {Boolean}
     */
    isNoSpare(state) {
        return (
            state.turnScores[state.turn].first +
                state.turnScores[state.turn].second !==
                10 &&
            !(state.turn === 9 && state.turnScores[state.turn].first === 10)
        );
    },

    /**
     * @param {*} state
     * @return {Boolean}
     */
    shouldGoToNextTurn(state) {
        return (
            state.turn !== 9 ||
            (state.turn === 9 &&
                state.turnScores[state.turn].first +
                    state.turnScores[state.turn].second !==
                    10 &&
                state.turnScores[state.turn].second !== 10 &&
                state.turnScores[state.turn].first !== 10)
        );
    },

    /**
     * @param {*} state
     * @return {Boolean}
     */
    isLastRoll(state) {
        return !!(
            state.turnScores[state.turn].first &&
            state.turnScores[state.turn].second
        );
    },
};
