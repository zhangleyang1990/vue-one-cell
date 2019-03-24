// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js' // 阿里的适配
import axios from './http' // 配置的axios
import store from './vuex/store' // vuex
import ElementUI from 'element-ui'; // element-ui
import 'element-ui/lib/theme-chalk/index.css'; // element-ui
import Component from './components/index.js' // 全局组件

Vue.use(Component) // 把组件挂载到全局组
Vue.use(ElementUI) // 挂载element - ui

Vue.config.productionTip = true // 启动时候是否产生提示
Vue.prototype.$axios = axios  // 挂载axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
