import store from '_store'
import axios from 'axios'

const axiosInterceptor = () => {

    axios.interceptors.request.use(config => {
        if (!store.state.toggle.loading) {
            store.dispatch('toggle', 'loading')
        }
        return config
    })

    axios.interceptors.response.use(response => {
        if (store.state.toggle.loading) {
            store.dispatch('toggle', 'loading')
        }
        return response
    }, err => {
        if (store.state.toggle.loading) {
            store.dispatch('toggle', 'loading')
        }
        return Promise.reject(err)
    })
}

export default axiosInterceptor
