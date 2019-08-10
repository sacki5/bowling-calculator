import store from '..';

describe('Actions', () => {
    test('Test strike + spare + 4|0 equals 38', () => {
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 9);
        store.dispatch('addRoll', 1);
        store.dispatch('addRoll', 4);
        store.dispatch('addRoll', 0);

        expect(store.state.score).toBe(38);
    });

    test('Twelve strikes equals 300 in score', () => {
        store.commit('resetState');
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);

        expect(store.state.score).toBe(300);
    });

    test('Test roll with both spare ands strikes', () => {
        store.commit('resetState');
        store.dispatch('addRoll', 5);
        store.dispatch('addRoll', 4);
        store.dispatch('addRoll', 5);
        store.dispatch('addRoll', 5);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 5);
        store.dispatch('addRoll', 4);

        expect(store.state.score).toBe(57);
    });
});

describe('getters', () => {
    test('Get remaining pins returns correct when knowcking down 4', () => {
        store.commit('resetState');
        store.dispatch('addRoll', 4);

        expect(store.getters.getRemainingPins).toBe(6);
    });

    test('Get remaining pins returns correct when strike', () => {
        store.commit('resetState');
        store.dispatch('addRoll', 10);

        expect(store.getters.getRemainingPins).toBe(10);
    });

    test('Get remaining pins returns correct when strike on last turn', () => {
        store.commit('resetState');
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        store.dispatch('addRoll', 10);
        expect(store.getters.getRemainingPins).toBe(10);
    });
});
