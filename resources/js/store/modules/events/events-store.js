import axios from 'axios'
import { toRaw } from 'vue'

const state = {
    events: [] ?? JSON.parse(localStorage.getItem('events')),
}

const actions = {
    async fetchEvents({ commit }) {
        // добавить event в БД
        try {
            const res = await axios.get('/api/events');
            commit('setEvents', res.data);
            localStorage.setItem('events', JSON.stringify(res.data));
        } catch (e) {
            console.log(e)
        }
    },

    async fetchEventById({ commit }, id) {
        try {
            const res = await axios.get(`/api/events/${id}`);
            commit('setCurrentEvent', res.data);
            localStorage.setItem('currentEvent', JSON.stringify(res.data));
            return res.data;
        } catch (e) {
            console.log(e)
        }
    },

    async addEventToDB({ commit }, event) {
        try {
            const res = await axios.post('/api/events', event);
            commit('addEvent', event)
        } catch (e) {
            console.log(e)
        }
    },

    async editEvent({ state, commit }, payload) {
        try {
            await axios.put(`/api/events/${payload.id}`, payload);
            const events = JSON.parse(localStorage.getItem('events'))
            const index = events.findIndex(event => event.id == payload.id)
            events[index] = payload;
            localStorage.setItem('events', JSON.stringify(events))
        } catch (e) {
            console.log(e)
        }
    },
    
    async deleteEvent({ commit }, id) {
        try {
            console.log('delete', id)
            const res = await axios.delete(`/api/events/${id}`);
            /* commit('deleteEvent', id) */
        } catch (e) {
            console.log(e)
        }
    },
}

const mutations = {
    setEvents(state, events) {
        state.events = events;
    },
    setCurrentEvent(state, event) {
        state.currentEvent = event;
    },
    addEvent(state, event) {
        state.events = [...state.events, event];
    },
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
  