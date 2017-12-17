import PokemonService from '_services/pokemon'

export default {
    state: {
        list: null
    },
    mutations: {
        setList (state, data) {
            state.list = data
        },
        updateValue (state, poke) {
            const index = state.list.findIndex(el => el.name === poke.name)
            state.list[index] = poke
        },
        resetList (state) {
            state.list = []
        }
    },
    actions: {
        getPokemons ({ commit }, page) {
            PokemonService.list(page)
                .then(response => {
                    commit('setList', response.results)
                    response.results.map(
                        poke => PokemonService.getOne(poke.url)
                            .then(res => {
                                commit('updateValue', res)
                            })
                    )
                })
                .catch(() => {
                    commit('resetList')
                })
        }
    }
}
