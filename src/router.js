import Vue from 'vue';
import VueRouter from 'vue-router';

/* Views */
import service from '@/views/service';
import notFound from '@/views/404';

/* Initiate vue-router on instance */
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: service },
        { path: '/404', component: notFound },
        { path: '*', redirect: '/404' },
    ],
});
