import Vue from 'vue'
import Router from 'vue-router'
import Product from './product'
import User from './user'
import Order from './order'
import store from '@/vuex/store'

Vue.use(Router)
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}

const route = new Router({
  routes: [
    ...Product,
    ...User,
    ...Order
  ]
})

route.beforeEach((to, from, next) => {
  if(to.meta.title){
    document.title=to.meta.title
  }
  if (to.matched.some(r => r.meta.required)) {
    console.log(to.fullPath)
    if (store.state.token) {
      // 添加axios头部Authorized
      axiosWrap.defaults.auth = {
        username: store.state.token,
        password: store.state.token
      }
      next()
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    }
  }
  next()
})

export default route



