export default {
    state: {
        loading: false
    },
    mutations: {
        toggle (state, toggleType) {
            state[toggleType] = !state[toggleType]
        }
    },
    actions: {
        toggle ({ commit }, toggleType) {
            commit('toggle', toggleType)
        }
    }
}
