import axios from 'axios'

const state = {
    events: []
}

const actions = {
    async fetchEvents({ commit }) {
        // добавить event в БД
        try {
            const res = await axios.get('api/events');
            commit('setEvents', res.data);
        } catch {
            //временный консоль
            console.log('error with req events');
        }
    },

    async addEventToDB({ commit }, event) {
        // добавить event в БД 
        // добавить event в state
        try {
            const res = await axios.post('api/events', event);
            console.log(res.data)
            commit('addEvent', event)
        } catch {
            //временный консоль
            console.log('error with req events');
        }
    }
}

const mutations = {
    setEvents(state, events) {
        state.events = events;
    },
    addEvent(state, event) {
        state.events = [...state.events, event];
    }
}

const getters = {
    events: (state) => {
        return state.events
    },
}

const modules = {}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters,
    modules,
}
  