import axios from "axios";
const TOKEN_KEY = 'jwt-token'

const state = {
    token: localStorage.getItem(TOKEN_KEY),
    email: '',
}

const actions = {
    async login({ commit }, payload) {
        try {
            const {data} = await axios.post('/api/auth/login', payload)
            commit('setToken', data.access_token);
        } catch (e) {
            console.log(e)
        }
    },
}

const mutations = {
    setToken(state, token) {
        state.token = token;
        localStorage.setItem(TOKEN_KEY, token);
    },

    logout(state) {
        state.token = null;
        localStorage.removeItem(TOKEN_KEY);
    }
}

const getters = {
    token: (state) => {
        return state.token
    },
    isAuth: (_, getters) => {
        return !!getters.token
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
  