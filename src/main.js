import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'animate.css';
import './assets/main.css'
import 'aos/dist/aos.css'

import i18n from '@/plugins/i18n';

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
