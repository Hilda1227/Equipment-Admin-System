import Vue       from 'vue' 
import router from '../router'
import axios from 'axios'
import {serialize} from '../../util.js'
export default {
  
    register({ commit, state }, payload) {
      axios.post('/api/user/register', payload)
      .then((res) => {
        const result = res.data;
        if(result.user_id && !result.inv_code){
          const user = {user: true, user_id: result.user_id}
          commit('set_login', user); router.push('/index');
        }
        else
          {commit('set_alert', {value: true, title: '', content: '注册码验证失败'})}
      })
      .catch((err) => {commit('set_alert', {value: true, title: '', content: '注册码验证失败',})})
    }, 

    login({ commit, state }, payload) {
      return  axios.post('/api/user/login', payload)
      .then(res => {
        if(res.data.user_id){
          console.log("login1")
          commit('set_login', res.data); router.push({path:'/index/list'})
        } else {
          commit('set_alert', {value: true, title: '认证失败', content: '您输入的账号或密码有误，请确认后重新输入'})
        }
      })
     
    }, 
    
    getIndexList({ commit, state }, payload) {
      let query = serialize(payload);
      return axios.post('/api/list'+ query)
      .then((res) => { commit('set_indexList', res.data); console.log(res.data)})
      .catch((err) => {console.log(err) })
    },

    getDevDetail({commit, state}, equ_id) {
      return axios.get('/api/equ/' + equ_id)
      .then((res) => { commit('set_devDetail', res.data)})
      .catch((err) => {console.log(err) })
    },

    getClubDev({commit, state}, equ_id) {
      return axios.get('/api/user/<user_id>/borrow_equipmengts' + equ_id)
      .then((res) => { commit('set_devDetail', res.data)})
      .catch((err) => {console.log(err) })
    },

    addClubDev({commit, state}, payload) {
      console.log(payload)
      // return axios.post('/api/equ')
      // .then((res) => { })
      // .catch((err) => {console.log(err) })
    },
}