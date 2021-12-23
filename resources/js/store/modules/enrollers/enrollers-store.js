const state = {
    enrollers: []
}

const actions = {
    fetchEnrollers({ commit }) {
        // добавить event в БД
        const res = [
            {
                id: 1,
                title: 'Мероприятие 1',
                format: 'семинар',
                date: '20 января, 2022',
                location: 'Лермонтова, 2',
                speakers: ['', ''],
                description: '',
                target_audience: '',
                participants_number: 0,
            },
            {
                id: 2,
                title: 'Мероприятие 2',
                format: 'конференция',
                date: '20 января, 2022',
                location: 'Лермонтова, 2',
                speakers: ['', ''],
                description: '',
                target_audience: '',
                participants_number: 0,
            },
        ];
        commit('setEnrollers', res)
    },

    enrollEvent({ commit }, enroller) {
        // добавить enroller в БД 
        // добавить enroller в state
        commit('enrollEvent', enroller)
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
    getter: (state) => {
        return state.data
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
  