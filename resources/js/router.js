import { createRouter, createWebHistory } from 'vue-router'

import Events from './views/Events';

const routes = [
    {
        path: '/',
        component: Events
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  })

/* router.beforeEach(async (to, from, next) => {
    console.log(to, from, next)
}) */
  
export default router