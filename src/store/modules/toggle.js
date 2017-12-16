export default {
    state: {
        confirm: false
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
        toggleModal (context, toggle) {
            context.commit('toggleModal', toggle)

            return context.state[toggle]
        },
        setToggleModal ({ commit }, data) {
            commit('setModal', data)
        }
    }
}
