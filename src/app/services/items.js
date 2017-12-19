import BaseService from '_services/base'

class ItemService extends BaseService {

    constructor () {
        super()
    }

    getUrl () {
        return `${super.getUrl()}item/`
    }

    list (page = null) {
        const params = page ? { limit: 20, offset: 20 * (page - 1) } : null
        return this.request(this.getUrl(), params)
            .then(response => response)
            .catch(err => {
                throw err
            })
    }
}

export default new ItemService()
