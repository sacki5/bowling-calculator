import store from '..';

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
