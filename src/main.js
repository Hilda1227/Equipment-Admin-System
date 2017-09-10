// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue    from 'vue'
import App    from './App'
import router from './router'
import store  from './store'
import weui   from 'weui.js'
import        './assets/css/index.scss'

// 将weui挂载在Vue原型上，方便全局引用
Vue.prototype.weui = weui;  

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
