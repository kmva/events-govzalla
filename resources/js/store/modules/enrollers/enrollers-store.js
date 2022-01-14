import axios from "axios";

const state = {
    enrollers: []
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
        console.log('enroller', enroller)
        try {
            const res = await axios.post('/api/enrollers', enroller);
            console.log('enroll res', res)
            commit('setEnrollers', enroller)
        } catch (e) {
            console.log(e)
        }
    }
}

const mutations = {
    setEnrollers(state, enrollers) {
        state.enrollers = enrollers;
    },
    enrollEvent(state, event) {
        state.enrollers = [...state.events, event];
    }
}

const getters = {
    enrollers: (state) => {
        return state.enrollers
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
  