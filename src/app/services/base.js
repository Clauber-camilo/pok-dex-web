import config from '@/config'
import axios from 'axios'

class BaseService {
    getUrl () {
        return config.API_URL
    }

    request (url = this.getUrl(), data = null, method = 'get', responseType = null) {
        const params = (method === 'get') ? data : {}

        return axios({ method, url, data, params, responseType })
            .then(response => response.data)
            .catch(this.handleError)
    }

    handleError (error) {
        throw error
    }
}

export default BaseService
