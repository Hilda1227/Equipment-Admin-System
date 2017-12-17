import Vue       from 'vue' 
import router from '../router'
import axios from 'axios'
import {serialize, formData} from '../util.js'
export default { 
    register ({ commit, state }, payload) {
      axios.post('/api/user/register', formData(payload))
      .then((res) => {
        const result = res.data;
        if(result.user_id && !result.inv_code){
          commit('set_login', res.data.user_id); router.push('/index');
        }
        else  commit('set_alert', {value: true, title: '', content: '注册码验证失败'});
      })
      .catch((err) => {commit('set_alert', { value: true, title: '', content: '注册码验证失败'})})
    }, 

    login ({ commit, state }, payload) {
      return  axios.post('/api/user/login/', formData(payload))
      .then(res => {
        if(res.data.user_id){
          commit('set_login', res.data.user_id); 
          router.push({path:'/index'})
        } else {
          commit('set_alert', {value: true, title: '认证失败', content: '您输入的账号或密码有误，请确认后重新输入'})
        }
      })
     
    }, 
    // 获取主页设备信息列表
    getIndexList ({ commit, state }, payload) {
      commit('set_loading', {show: true, text: "加载中"})
      let query = serialize(payload);
      return axios.get('/api/list'+ query)
      .then((res) => {
        commit('set_indexList', res.data)
        commit('set_loading', {show: false})
      })
      .catch((err) => {console.log(err) })
    },

    // 获取搜索结果列表
    getSearchList ({ commit, state }, payload) {
      commit('set_loading', {show: true, text: "加载中"})
      return axios.post('/api/search/'+ payload.key)
      .then((res) => {
        commit('set_searchList', res.data); console.log(res.data);
        commit('set_loading', {show: false})
      })
      .catch((err) => {console.log(err) })
    },

    // 获取单个设备信息列表
    getDevDetail ({commit, state}, equ_id) {
      commit('set_loading', {show: true, text: "加载中"})
      return axios.get('/api/equ/' + equ_id + '/')
      .then((res) => {
        console.log(res.data);
        commit('set_devDetail', res.data);
        commit('set_loading', {show: false})
      })
      .catch((err) => {console.log(err) })
    },

    // 创建新的借用申请
    esBorrowApply ({commit, state}, payload) {
      return axios.post('/api/operation/borrow/', formData(payload))
      .then((res) => {
        if(res.data.br_id){
          commit('set_toast',{value: true, type: 'success', 'is-show-mask': true, text: '提交成功',});
          setTimeout(() => {router.push({name: 'list'})}, 2000)          
        }
      })
      .catch((err) => {
        commit('set_toast',{value: true, type: 'text', 'is-show-mask': false, text: '出错了，稍后再试下吧~',})
      })
    },

    // 获取用户所属社团借用情况
    getClubDev ({commit, state}, payload) {
      commit('set_loading', {show: true, text: "加载中"});
      let query = serialize(payload),
          types = ['canLend', 'hasLend', 'hasTimeout', 'waitComfirm',];
      return axios.get(`/api/user/${state.user_id}/manage_equipments` + query)
        .then((res) => {
          let key = payload.key ;
          commit(`set_${types[key-1]}`, res.data.message_list);
          commit('set_loading', { show: false });
          return res.data.message_list;
        })
        .catch((err) => {
          console.log(err)
        })
    },

    getBorrowDev ({commit, state}, payload) {
      commit('set_loading', {show: true, text: "加载中"});
      let query = serialize(payload),
          types = ['borrowing', 'checking', 'hasTimeoutReturn', 'hasTimeoutReturn'];
      return axios.get(`/api/user/${state.user_id}/borrowed_equipments` + query)
        .then((res) => {
          console.log(res.data)
          commit(`set_${types[payload.key-1]}`, res.data.message_list);
          commit('set_loading', { show: false });
        })
        .catch((err) => {console.log(err) })
    },

    getMsgCheck ({commit, state}, payload) {
      commit('set_loading', {show: true, text: "加载中"});
      let query = serialize(payload),
          types = ['lendApply','borrowApply'];
      return axios.get(`/api/user/${state.user_id}/message` + query)
        .then((res) => {
          console.log(res.data)
          commit(`set_${types[payload.key-1]}`, res.data.message_list);
          commit('set_loading', { show: false });
        })
        .catch((err) => {console.log(err) })
    },

    getFeedBack ({commit, state}, payload) {
      return axios.get(`/api/operation/${payload.br_id}/back_msg`)
      .then(res => {
        console.log(res.data);
        commit('set_feedBack', res.data)
      })
    },

    getlendApplyDetail ({commit, state}, payload) {
      return axios.get(`/api/operation/${payload.br_id}/detail`)
      .then(res => {
        console.log(res.data);
        commit('set_lendApplyDetail', res.data)
      })
    },

    confirmApply ({commit, state}, payload) {
      return axios.post(`api/operation/${payload.br_id}/confirm`, formData(payload.params))
      .then(res => {
        console.log(res.data);
        commit('set_lendApplyDetail', res.data)
      })
    },

    addClubDev({commit, state}, payload) {
      console.log(payload)
      // return axios.post('/api/equ')
      // .then((res) => { })
      // .catch((err) => {console.log(err) })
    },
}