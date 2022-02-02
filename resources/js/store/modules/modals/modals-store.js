import axios from 'axios'
import { toRaw } from 'vue'

const state = {
    enrollEventModal: false,
    deleteEventModal: false,
}

const actions = {
}

const mutations = {
    openModal(state, modalName) {
        state[modalName]= true;
    },

    closeModal(state, modalName) {
        state[modalName]= false;
    },
}

const getters = {
    enrollEventModal: (state) => {
        return state.enrollEventModal
    },

    deleteEventModal: (state) => {
        return state.deleteEventModal
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
  