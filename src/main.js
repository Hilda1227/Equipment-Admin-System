// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue    from 'vue'
import App    from './App'
import router from './router'
import store  from './store'
import        './assets/css/index.scss'

Vue.config.productionTip = false

/* eslint-disable no-new */

router.beforeEach(function (to, from, next) {
  store.commit('updateLoadingStatus', {isLoading: true})
  next()
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
