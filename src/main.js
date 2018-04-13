// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue    from 'vue'
import Vuex from 'vuex'
import App    from './App'
import router from './router'
import store  from './store'
import axios from 'axios'
import        './assets/css/index.scss'

Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
})


// 未登录拦截
// 刷新页面 store 数据总会被清空
// router.beforeEach((to, from, next) => {
//   if(to.path !=='/login' && to.path !=='/register' && store.state.user.user_id === void 0) {
//     next({path: '/login'});
//   }
//   else next();
// })

router.afterEach(function (to) {
  store.commit('updateLoadingStatus', {isLoading: false})
})

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
