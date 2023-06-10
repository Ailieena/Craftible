import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'

var store = {
    userId: null,
    token: null,
    login: null
}

const app = createApp(App)

app.config.globalProperties.store = store

app
.use(router)
.mount('#app')
