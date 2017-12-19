import PokemonService from '_services/pokemon'

export default {
    state: {
        list: null,
        selectedPoke: null,
        count: null
    },
    mutations: {
        setList (state, data) {
            state.list = data
        },
        setPoke (state, poke) {
            state.selectedPoke = poke
        },
        setCount (state, count) {
            state.count = count
        }
    },
    actions: {
        getPokemons ({ commit }, page) {
            PokemonService.list(page)
                .then(response => {
                    commit('setList', response.results)
                    commit('setCount', response.count)
                })
        },
        setPoke ({ commit }, poke) {
            return PokemonService.getOne(poke.url)
                .then(response => {
                    commit('setPoke', response)
                })
        }
    }
}
