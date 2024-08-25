import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import router from './router'

//@ts-ignore
import dataV from '@jiaminghi/data-view'


import PublicComponent from '../src/components/componentInstall';
const app = createApp(App)
app.use(PublicComponent)
app.use(router)
app.use(dataV)
app.mount('#app')
