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
};
