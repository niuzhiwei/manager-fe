import {
    createApp
} from 'vue'
import router from './router'
import store from './store'
//引入element-ui
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import request from './utils/request';
import storage from './utils/storage';
import api from './api'
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$request = request;//挂载全局
app.config.globalProperties.$api = api;
app.config.globalProperties.$storage = storage;//挂载全局
app.use(router).use(store).use(ElementPlus).mount('#app')