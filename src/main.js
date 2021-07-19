import {
    createApp
} from 'vue'
import router from './router'
//引入element-ui
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import request from './utils/request';
import App from './App.vue'

const app = createApp(App)
app.config.globalProperties.$request = request;//挂载全局
app.use(router).use(ElementPlus).mount('#app')