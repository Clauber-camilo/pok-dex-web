import ItemService from '_services/items'

export default {
    state: {
        list: null,
        count: null
    },
    mutations: {
        setItemList (state, data) {
            state.list = data
        },
        setItemCount (state, count) {
            state.count = count
        }
    },
    actions: {
        getItems ({ commit }, page) {
            ItemService.list(page)
                .then(response => {
                    commit('setItemList', response.results)
                    commit('setItemCount', response.count)
                })
        }
    }
}
