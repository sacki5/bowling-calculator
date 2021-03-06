/* eslint-disable no-new */
import Vue from 'vue';
import App from './app.vue';
import store from './store';

/* Mount vue instance on #app element */
new Vue({
    el: '#app',
    store,
    render: h => h(App),
});
