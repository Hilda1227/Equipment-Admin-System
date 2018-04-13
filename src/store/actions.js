import Vue       from 'vue';
import router from '../router';
import axios from 'axios';
import {serialize, formData} from '../util.js';
export default {
  register ({ commit, state }, payload) {
    axios.post('/api/user/register', formData(payload))
    .then((res) => {
      const result = res.data;
      if(result.user_id && !result.inv_code){
        commit('set_login', res.data); router.push('/index');
      }
    })
  },

  login ({ commit, state }, payload) {
    return  axios.post('/api/user/login/', formData(payload))
    .then(res => {
      if(res.data.user_id){
        commit('set_login', res.data);
        router.push({path:'/index'})
      }
    })
  },
  // 获取主页设备信息列表
  getIndexList ({ commit, state }, payload) {
    let query = serialize(payload);
    return axios.get('/api/list'+ query)
    .then((res) => {
      commit('set_indexList', {isInit: payload.isInit, list: res.data.content});
      return res.data.has_next;
    })
  },

  // 获取搜索结果列表
  getSearchList ({ commit, state }, payload) {
    return axios.get('/api/search/'+ payload.key)
    .then((res) => {
      commit('set_searchList', res.data.content);
    })
  },

  // 获取单个设备信息列表
  getDevDetail ({commit, state}, equ_id) {
    return axios.get('/api/equ/' + equ_id + '/')
    .then((res) => {
      console.log("收到",res.data);
      commit('set_devDetail', res.data);
    })
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
  },

  // 获取用户所属社团借用情况
  getClubDev ({commit, state}, payload) {
    let query = serialize(payload),
        types = ['canLend', 'hasLend', 'hasTimeout', 'waitComfirm',];
    let user_id = state.user.user_id ? state.user.user_id : localStorage.getItem('user_id')
    return axios.get(`/api/user/${user_id}/manage_equipments` + query)
      .then((res) => {
        let key = payload.key ;
        commit(`set_${types[key-1]}`, res.data.message_list);
        return res.data.message_list;
      })

  },

  getBorrowDev ({commit, state}, payload) {
    let query = serialize(payload),
        types = ['borrowing', 'hasTimeoutReturn', 'checking', 'hasTimeoutReturn'];
    let user_id = state.user.user_id ? state.user.user_id : localStorage.getItem('user_id')
    return axios.get(`/api/user/${user_id}/borrowed_equipments` + query)
    .then((res) => {
      commit(`set_${types[payload.key-1]}`, res.data.message_list);
      return res.data.message_list;
    })
  },

  priorReturn ({commit, state}, payload) {
    return axios.get(`/api/operation/${payload.br_id}/return`)
    .then((res) => {
      commit('set_toast',{value: true, type: 'success', 'is-show-mask': true, text: '归还成功',});
      setTimeout(() => {
        router.push({ name: 'borrowing' })
      }, 2000)
    })
  },

  getMsgCheck ({commit, state}, payload) {
    let query = serialize(payload),
        types = ['lendApply','borrowApply'];
    let user_id = state.user.user_id ? state.user.user_id : localStorage.getItem('user_id')
    return axios.get(`/api/user/${user_id}/message` + query)
    .then((res) => {
      commit(`set_${types[payload.key-1]}`, res.data.message_list);
    })
  },

  getFeedBack ({commit, state}, payload) {
    return axios.get(`/api/operation/${payload.br_id}/back_msg`)
    .then(res => {
      commit('set_feedBack', res.data)
    })
  },

  getOperationDetail ({commit, state}, payload) {
    return axios.get(`/api/operation/${payload.br_id}/detail/?type=${payload.type}`)
    .then(res => {
      commit('set_operationDetail', res.data)
    })
  },

  confirmApply ({commit, state}, payload) {
    return axios.post(`api/operation/${payload.br_id}/confirm`, formData(payload.params))
    .then(res => {
      if (Number(res.data.error) === 0) {
        commit('set_toast', { value: true, type: 'success', 'is-show-mask': true, text: '提交成功', });
        setTimeout(() => {
          router.push({ name: 'lendApply' })
        }, 2000)
      }
      if(res.data.status){
        commit('set_toast',{value: true, type: 'text', 'is-show-mask': true, text: '请求已被处理过',});
      }
    })
  },

  upload({commit, state}, payload) {
    return axios.post('api/upload/', formData(payload))
    .then(res => {
      return res.data;
    })
  },

  modifyInfo({commit, state}, payload) {
    return axios.post('api/equ/' + payload.equ_id + '/', formData(payload.equ))
    .then(res => {
      commit('set_toast',{value: true, type: 'success', 'is-show-mask': true, text: '提交成功',});
      setTimeout(() => {router.push({name: 'canLend'})}, 2000)
    })
  },

  addClubDev({commit, state}, payload) {
    return axios.post('api/equ/', formData(payload))
    .then(res => {
      commit('set_toast',{value: true, type: 'success', 'is-show-mask': true, text: '提交成功',});
      setTimeout(() => {router.push({name: 'canLend'})}, 2000)
    })
  },

  systemFeedback({commit, state}, payload) {
    let date = new Date();
    let user_id = state.user.user_id ? state.user.user_id : localStorage.getItem('user_id')
    payload.commit_id = Number(user_id);
    payload.commit_time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
    return axios.post('/feedback', payload)
    .then(res => {
      commit('set_toast',{value: true, type: 'success', 'is-show-mask': true, text: '提交成功',});
      setTimeout(() => {router.push({name: 'mine'})}, 2000)
    })
  },

  freshCode({commit, state}, payload) {
    commit('set_loading', {show: true, text: "正在刷新"});
    return axios.delete(`/api/operation/${payload.br_id}/qrcode`)
    .then(res => {
      commit('set_toast',{value: true, type: 'success', 'is-show-mask': true, text: '已成功刷新',});
    })
  },

  confirmReturn({commit, state}, payload) {
    commit('set_loading', {show: true, text: "正在确认"});
    return axios.get(`/api/operation/${payload.br_id}/confirm_return`)
    .then(res => {
      commit('set_toast',{value: true, type: 'success', 'is-show-mask': true, text: '已确认',});
    })
  },
}
