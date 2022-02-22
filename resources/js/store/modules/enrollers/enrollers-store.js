import axios from "axios";

const state = {
    enrollers: JSON.parse(localStorage.getItem('enrollers')) ?? [],
}

const actions = {
    async fetchEnrollers({ commit }) {
        try {
            const res = await axios.get('/api/enrollers')
            commit('setEnrollers', res.data)
        } catch (e) {
            console.log(e)
        }
    },

    async enrollEvent({ commit }, enroller) {
        try {
            const res = await axios.post('/api/enrollers', enroller)
            commit('enrollEvent', enroller)
        } catch (e) {
            console.log(e)
        }
    }
}

const mutations = {
    setEnrollers(state, enrollers) {
        state.enrollers = enrollers;
        localStorage.setItem('enrollers', JSON.stringify(res.data))
    },
    enrollEvent(state, enroller) {
        state.enrollers = [...state.enrollers, enroller];
        localStorage.setItem('enrollers', JSON.stringify([...state.enrollers, enroller]))
    }
}

const getters = {
    enrollers: (state) => {
        return state.enrollers
    },

    enrollersByEventId: (_, getters) => eventId => {
        return getters.enrollers.filter(enroller => enroller.event_id == eventId);
    }
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
  