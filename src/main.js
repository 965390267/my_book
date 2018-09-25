// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import { Collapse, CollapseItem, Loading, Message } from 'element-ui';
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Loading.directive);
Vue.prototype.$loading = Loading.service;
Vue.prototype.$message = Message;
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-light.css' // 使用 carbon 主题
import '../src/assets/css/common.css'
import '../src/assets/iconfont/iconfont.css'
Vue.use(MuseUI);

// 超时时间
axios.defaults.timeout = 5000
    // http请求拦截器
var loadinginstace;
axios.interceptors.request.use(config => {
        // element ui Loading方法
        loadinginstace = Loading.service({
            fullscreen: true,
            text: "拼命加载中",
            spinner: "el-icon-loading",
            background: "rgba(0, 0, 0, 0.2)"
        })
        return config
    }, error => {
        loadinginstace.close()
        Message.error({
            message: '加载超时'
        })
        return Promise.reject(error)
    })
    // http响应拦截器
axios.interceptors.response.use(data => { // 响应成功关闭loading
    loadinginstace.close()
    return data
}, error => {
    loadinginstace.close()
    Message.error({
        message: '加载失败'
    })
    return Promise.reject(error)
})


// Vue.prototype.$http=axios;
window.axios = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})