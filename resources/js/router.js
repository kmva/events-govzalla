import vueRouter from 'vue-router';
import Vue from 'vue';

import Events from './components/Event';

Vue.use(vueRouter);

const routes = [
    {
        path: '/',
        component: 'Event'
    },
    {},
];

export default vueRouter({
    mode: 'history',
    routes,
});