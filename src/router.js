import Vue from 'vue';
import VueRouter from 'vue-router';

/* Views */
import home from '@/views/home';
import about from '@/views/about';
import notFound from '@/views/404';

/* Initiate vue-router on instance */
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: home },
        { path: '/about', component: about },
        { path: '/404', component: notFound },
        { path: '*', redirect: '/404' },
    ],
});
