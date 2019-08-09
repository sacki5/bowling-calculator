export default {
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
};
