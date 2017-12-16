// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

// import 'keen-ui/dist/keen-ui.css'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false


sync(store, router)

/* eslint-disable no-new */
new Vue({
    store,
    router,
    ...App
}).$mount('#app')
