import BaseService from '_services/base'

class PokemonService extends BaseService {

    constructor () {
        super()
    }

    getUrl () {
        return `${super.getUrl()}pokemon/`
    }

    list (page = null) {
        const params = page ? { limit: 20, offset: 20 * (page - 1) } : null
        return this.request(this.getUrl(), params)
            .then(response => response)
            .catch(err => {
                throw err
            })
    }

    getOne (url) {
        return this.request(url)
            .then(response => response)
    }
}

export default new PokemonService()
