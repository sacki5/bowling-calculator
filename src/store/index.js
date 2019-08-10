import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

Vue.use(Vuex);

const getDefaultState = () => {
    return {
        gameStarted: false,
        name: null,
        score: 0,
        turn: 0,
        turnScores: [
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, total: null },
            { first: null, second: null, third: null, total: null },
        ],
    };
};

export default new Vuex.Store({
    state: getDefaultState(),
    getters,
    mutations: {
        resetState(state) {
            Object.assign(state, getDefaultState());
        },
        ...mutations,
    },
    actions,
});
