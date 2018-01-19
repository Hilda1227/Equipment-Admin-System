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
      return axios.get('/api/search/'+ payload.key)
      .then((res) => {
        commit('set_searchList', res.data.content);
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
      commit('set_loading', {show: true, text: "正在提交"});
      return axios.post('/api/operation/borrow/', formData(payload))
      .then((res) => {
        if(res.data.br_id){
          commit('set_loading', { show: false });
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
          types = ['borrowing', 'hasTimeoutReturn', 'checking', 'hasTimeoutReturn'];
      return axios.get(`/api/user/${state.user_id}/borrowed_equipments` + query)
        .then((res) => {
          console.log(`set_${types[payload.key-1]}`,res.data.message_list)
          commit(`set_${types[payload.key-1]}`, res.data.message_list);
          commit('set_loading', { show: false });
          return res.data.message_list;
        })
        .catch((err) => {console.log(err) })
    },

    priorReturn ({commit, state}, payload) {
      commit('set_loading', {show: true, text: "正在提交"});
      return axios.get(`/api/operation/${payload.br_id}/return`)
        .then((res) => {
          commit('set_loading', { show: false });
          commit('set_toast',{value: true, type: 'success', 'is-show-mask': true, text: '提交成功',});
        })
        .catch((err) => {
          console.log(err) 
          commit('set_loading', { show: false });
          commit('set_toast',{value: true, type: 'warn', 'is-show-mask': true, text: '设备当前状态不支持归还',});
        })
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

    getOperationDetail ({commit, state}, payload) {
      return axios.get(`/api/operation/${payload.br_id}/detail/?type=${payload.type}`)
      .then(res => {
        commit('set_operationDetail', res.data)
      })
    },

    confirmApply ({commit, state}, payload) {
      return axios.post(`api/operation/${payload.br_id}/confirm`, formData(payload.params))
      .then(res => {
        if(res.data.confirm){
          commit('set_toast',{value: true, type: 'success', 'is-show-mask': true, text: '提交成功',});
          setTimeout(() => {router.push({name: 'lendApply'})}, 2000)
        }
        if(res.data.status){
          commit('set_toast',{value: true, type: 'text', 'is-show-mask': true, text: '请求已被处理过',});
        }
      })
    },

    upload({commit, state}, payload) {
      return axios.post('api/upload/', formData(payload))
      .then(res => {
        console.log(res.data);
        return res.data;
      })
    },

    modifyInfo({commit, state}, payload) {
      commit('set_loading', {show: true, text: "正在提交"});
      console.log(payload)
      return axios.post('api/equ/' + payload.equ_id + '/', formData(payload.equ))
      .then(res => {
        commit('set_loading', {show: false});
        commit('set_toast',{value: true, type: 'success', 'is-show-mask': true, text: '提交成功',});
        setTimeout(() => {router.push({name: 'canLend'})}, 2000) 
      })
      .catch(err => console.log(err))
    },

    addClubDev({commit, state}, payload) {
      console.log(payload)
      return axios.post('api/equ/', formData(payload))
      .then(res => {
        commit('set_toast',{value: true, type: 'success', 'is-show-mask': true, text: '提交成功',});
        setTimeout(() => {router.push({name: 'canLend'})}, 2000)
      })
      .catch(err => console.log(err))
    },

    systemFeedback({commit, state}, payload) {
      commit('set_loading', {show: true, text: "正在提交"});
      let date = new Date();
      payload.commit_id = state.user_id;
      payload.commit_time = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}--${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
      return axios.post('/feedback', payload)
      .then(res => {
        commit('set_loading', {show: false});
        commit('set_toast',{value: true, type: 'success', 'is-show-mask': true, text: '提交成功',});
        setTimeout(() => {router.push({name: 'mine'})}, 2000)
      })
      .catch(err => console.log(err))
    },

    freshCode({commit, state}, payload) {
      commit('set_loading', {show: true, text: "正在刷新"});      
      return axios.delete(`/api/operation/${payload.br_id}/qrcode`)
      .then(res => {
        commit('set_loading', {show: false});
        commit('set_toast',{value: true, type: 'success', 'is-show-mask': true, text: '已成功刷新',});
      })
      .catch(err => console.log(err))
    },
}