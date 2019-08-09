export default {
    getRemainingPins(state) {
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
