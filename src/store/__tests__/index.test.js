import store from '..';

test('Test strike + spare + 4|0 equals 38', () => {
    store.commit('addScore', 10);
    store.commit('addScore', 9);
    store.commit('addScore', 1);
    store.commit('addScore', 4);
    store.commit('addScore', 0);

    expect(store.state.hdcpScore).toBe(38);
});

test('Test strike + spare + 4|0 equals 38', () => {
    store.commit('addScore', 10);
    store.commit('addScore', 9);
    store.commit('addScore', 1);
    store.commit('addScore', 4);
    store.commit('addScore', 0);

    expect(store.state.hdcpScore).toBe(38);
});
