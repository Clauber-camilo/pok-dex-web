export default {
    state: {
        base: false
    },
    mutations: {
        toggleModal (state, toggle) {
            state[toggle] = !state[toggle]
        },
        setModal (state, { type, bool }) {
            state[type] = bool
        }
    },
    actions: {
        toggleModal ({ commit }, toggle) {
            commit('toggleModal', toggle)
        },
        setToggleModal ({ commit }, data) {
            commit('setModal', data)
        }
    }
}
