/* eslint-disable no-new */
import Vue from 'vue';
import App from './App.vue';
import router from './router';

/* Mount vue instance on #app element */
new Vue({
    el: '#app',
    router,
    render: h => h(App),
});
