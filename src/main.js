import {
    createApp
} from 'vue'
import router from './router'
//引入element-ui
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

import axios from 'axios'
import config from './config'
axios.get(config.mockApi + '/login').then(res=>{
    console.log(res)
})
// console.log(import.meta.env)
import App from './App.vue'

const app = createApp(App)
app.use(router).use(ElementPlus).mount('#app')