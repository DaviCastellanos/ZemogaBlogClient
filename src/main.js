import store from './store'
import router from './router'
import "bootstrap/dist/css/bootstrap.css"
import axios from 'axios';
import VueAxios from 'vue-axios'
import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.use(VueAxios,axios)
app.use(store)
app.use(router)
app.config.globalProperties.$msalInstance = {};

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"