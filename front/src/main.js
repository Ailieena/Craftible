import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import cookies from 'vue-cookies'

var store = {
    userId: null,
    token: null,
    login: null
}

// const $cookies = vue.$cookies.inject('$cookies');
const app = createApp(App)

// app.config.globalProperties.store = store
app.config.globalProperties.store = store

app
.use(cookies)
.use(router)
.mount('#app')
