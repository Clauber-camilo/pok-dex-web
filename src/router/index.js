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
            component: Pokedex,
            redirect: { name: 'poke-list' },
            children: [
                {
                    name: 'poke-list',
                    path: '/pokemon/:page?',
                    component: () => import('_components/PokeList.vue')
                }
            ]
        }
    ]
})
