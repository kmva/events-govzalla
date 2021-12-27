const state = {
    events: []
}

const actions = {
    fetchEvents({ commit }) {
        // добавить event в БД
        const res = [
            {
                id: 1,
                title: 'Мероприятие 1',
                format: 'семинар',
                date: '20 января',
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
                date: '20 января',
                location: 'Лермонтова, 2',
                speakers: ['', ''],
                description: '',
                target_audience: '',
                participants_number: 0,
            },
        ];
        commit('setEvents', res)
    },

    addEventToDB({ commit }, event) {
        // добавить event в БД 
        // добавить event в state
        console.log(event);
        commit('addEvent', event)
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
  