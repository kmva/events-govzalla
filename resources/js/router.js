import { createRouter, createWebHistory } from 'vue-router'
import store from './store'

import Events from './views/Events'
import Event from './views/Event'

import Auth from './views/Admin/Auth'
import AddEvent from './views/Admin/AddEvent'
import EditEvent from './views/Admin/EditEvent'
import Enrollers from './views/Admin/Enrollers'


import Main from './layout/Main'
import Admin from './layout/Admin'

let computedLayout = Main;

const routes = [
    {
        path: '/',
        name: 'Main',
        component: Events,
    },
    {
        path: '/event/:id',
        name: 'Event',
        component: Event,
    },
    {
        path: '/auth',
        name: 'Auth',
        component: Auth,
    },
    {
        path: '/addevent',
        name: 'AddEvent',
        component: AddEvent,
        meta: {
            auth: true,
        }
    },
    {
        path: '/editevent/:id',
        name: 'EditEvent',
        component: EditEvent,
        meta: {
            auth: true,
        }
    },
    {
        path: '/enrollers',
        name: 'Enrollers',
        component: Enrollers,
        meta: {
            auth: true,
        }
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
    linkActiveClass: 'active',
    linkExactActiveClass: 'active',
  })

router.beforeEach((to, from, next) => {
    if(store.getters['Admin/isAuth']) {
        computedLayout = Admin
    } else {
        computedLayout = Main
    }
    to.meta.layout = computedLayout 

    if(to.meta.auth && store.getters['Admin/isAuth']){
        next()
    } else if (to.meta.auth && !store.getters['Admin/isAuth']){
        next('/auth')
    } else {
        next()
    }
})
  
export default router