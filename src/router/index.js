import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/app/views/Hello'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        }
    ]
})
