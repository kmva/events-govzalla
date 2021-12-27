import { createRouter, createWebHistory } from 'vue-router'

import Events from './views/Events'
import AddEvent from './views/Admin/AddEvent'
import Enroll from './views/Enroll'

import Main from './layout/Main.vue'
import Admin from './layout/Admin.vue'

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Events,
        meta: {
            layout: Main,
        },
    },
    {
        path: '/enroll',
        name: 'Enroll',
        component: Enroll,
        meta: {
            layout: Main,
        }
    },
    {
        path: '/addevent',
        name: 'AddEvent',
        component: AddEvent,
        meta: {
            layout: Admin,
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
  })

/* router.beforeEach(async (to, from, next) => {
    console.log(to, from, next)
}) */
  
export default router