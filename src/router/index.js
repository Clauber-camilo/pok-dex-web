import Vue from 'vue'
import Router from 'vue-router'
import Pokedex from '_views/Pokedex'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            redirect: { name: 'poke-list' }
        },
        {
            path: '/pokemon/:page?',
            name: 'poke-list',
            component: Pokedex
        }
    ]
})
