import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Maska from 'maska'
import VMoney from 'v-money3'
import './assets/scss/app.scss'

createApp(App).use(router).use(Maska).use(VMoney).mount('#app')
