import { createStore, createLogger } from 'vuex'
import Admin from './modules/admin/admin-store'
import Events from './modules/events/events-store'
import Enrollers from './modules/enrollers/enrollers-store'


const plugins = []

if(process.env.NODE_ENV === 'development'){
    plugins.push(createLogger())
}


export default createStore({
    plugins: [],
    state: {},
    mutations: {},
    actions: {},
    modules: {
        Admin,
        Events,
        Enrollers,
    },
  })
  