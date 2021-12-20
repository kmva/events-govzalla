const state = {
    events: []
}

const actions = {
    fetchEvents({ commit }) {
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
                visitor_numbers: 0,
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
                visitor_numbers: 0,
            },
        ];
        commit('setEvents', res)
    },
}

const mutations = {
    setEvents(state, events) {
        state.events = events;
    },
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
  