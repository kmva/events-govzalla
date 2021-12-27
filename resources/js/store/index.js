import { createStore } from 'vuex'
import Events from './modules/events/events-store'
import Enrollers from './modules/enrollers/enrollers-store'

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        Events,
        Enrollers,
    },
  })
  