import PokemonService from '_services/pokemon'

export default {
    state: {
        list: null,
        selectedPoke: null
    },
    mutations: {
        setList (state, data) {
            state.list = data
        },
        setPoke (state, poke) {
            state.selectedPoke = poke
        }
    },
    actions: {
        getPokemons ({ commit }, page) {
            PokemonService.list(page)
                .then(response => {
                    commit('setList', response.results)
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
