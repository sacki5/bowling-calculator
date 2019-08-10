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
     * @param {{offset: number, score: number}} payload
     */
    saveScore(state, { offset, score }) {
        state.turnScores[state.turn - offset].total = state.score + score;
        state.score = state.turnScores[state.turn - offset].total;
    },

    /**
     * Save roll on the current turn. SAve its on either first second or third roll.
     * @param {*} state
     * @param {{ roll: 'first' | 'second' | 'third', amount: number}} payload
     */
    saveRoll(state, { roll, amount }) {
        state.turnScores[state.turn][roll] = amount;
    },
};
