import Vue       from 'vue';
import Vuex      from 'vuex';
import state    from './states.js';
import getters   from './getters.js';
import mutations from './mutations.js';
import actions   from './actions.js';
import axios from 'axios';

Vue.use(Vuex)
axios.defaults.baseURL = 'http://equipments.stuzone.com';
axios.defaults.withCredentials = true;

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

// 注册一个module来保存状态
store.registerModule('vux', { 
  state: {
    isLoading: false
  },
  mutations: {
    updateLoadingStatus (state, payload) {
      state.isLoading = payload.isLoading
    }
  }
})

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  store.commit('set_loading', { show: true });
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

axios.interceptors.response.use(res => {// 响应成功关闭loading
  store.commit('set_loading', { show: false });
  console.log("hehe",res.data.error)
  if(String(res.data.error) !== "0" && typeof res.data.error !== 'undefined'){
    store.commit('set_alert', {value: true, title: '', content:  res.data.error});
    return Promise.reject(res)
  }
  return Promise.resolve(res)
 }, err => {
  if(err) {
    if(String(err.error) !== "0" && typeof err.error !== 'undefined'){
      store.commit('set_alert', {value: true, title: '', content:  err.error});
    }
     store.commit('set_loading', { show: false });  
     store.commit('set_toast', {value: true, text: '系统错误', type: 'text'})
  }
  return Promise.reject(err)
})


export default store;
