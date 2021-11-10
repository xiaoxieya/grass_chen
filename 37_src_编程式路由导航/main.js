// 导入Vue
import Vue from 'vue'
// 导入App
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index'
// 关闭生产提示
Vue.use(VueRouter)
Vue.config.productionTip=false
// 创建Vue实例
new Vue({
    el:'#app',
    render:h=>h(App),
    router:router
})