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

if(localStorage.getItem('user_id')){
  store.commit('set_login', localStorage.getItem('user_id'))
}

// 未登录拦截
router.beforeEach((to, from, next) => {
  if(to.path !=='/login' && store.state.user_id === void 0) {
    next({path: '/login'});
  }
  else next();
})

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
