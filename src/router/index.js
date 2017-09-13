import Vue    from 'vue'
import Router from 'vue-router'

import login    from '../components/login/login'
import register from '../components/login/register'

import index from '../components/index/index'
import list  from '../components/index/children/list.vue'
import mine  from '../components/index/children/mine.vue'
import search  from '../components/search/search.vue'

import clubDev  from '../components/clubDev/clubDev.vue'
import canLend  from '../components/clubDev/children/canLend.vue'
import hasLend  from '../components/clubDev/children/hasLend.vue'
import hasTimeout  from '../components/clubDev/children/hasTimeout.vue'
import waitComfirm  from '../components/clubDev/children/waitComfirm.vue'

import borrowDev  from '../components/borrowDev/borrowDev.vue'
import borrowing  from '../components/borrowDev/children/borrowing.vue'
import checking  from '../components/borrowDev/children/checking.vue'
import hasTimeoutReturn  from '../components/borrowDev/children/hasTimeoutReturn.vue'
import waitComfirmReturn  from '../components/borrowDev/children/waitComfirmReturn.vue'


import msgCheck  from '../components/msgCheck/msgCheck.vue'
import borrowApply  from '../components/msgCheck/children/borrowApply.vue'
import lendApply  from '../components/msgCheck/children/lendApply.vue'


Vue.use(Router);
export default new Router({
    routes: [
      // { path: '/', },
      { path: '/login', name: "login", component: login},
      { path: '/register', name: "register", component: register},
      { path: '/index', redirect: {name: 'list'}, name: "index", component: index,
        children: [
          { path: 'list', name: 'list', component: list},
          { path: 'mine', redirect: {name: 'clubDev'}, name: 'mine', component: mine,
            children: [
              { path: 'clubDev', name: 'clubDev', component: clubDev, redirect: {name: 'canLend'},
                children: [
                  {path: 'canLend', name: 'canLend', component: canLend},
                  {path: 'hasLend', name: 'hasLend', component: hasLend},
                  {path: 'hasTimeout', name: 'hasTimeout', component: hasTimeout},
                  {path: 'waitComfirm', name: 'waitComfirm', component: waitComfirm},
                ]
              },
              {path: 'borrowDev', redirect: {name: 'borrowing'}, name: 'borrowDev', component: borrowDev,
                children: [
                  {path: 'borrowing', name: 'borrowing', component: borrowing},
                  {path: 'checking', name: 'checking', component: checking},
                  {path: 'hasTimeoutReturn', name: 'hasTimeoutReturn', component: hasTimeoutReturn},
                  {path: 'waitComfirmReturn', name: 'waitComfirmReturn', component: waitComfirmReturn},
                ]
              },
              {path: 'msgCheck', redirect: {name: 'lendApply'}, name: 'msgCheck', component: msgCheck,
                children: [                 
                  {path: 'lendApply', name: 'lendApply', component: lendApply},
                  {path: 'borrowApply', name: 'borrowApply', component: borrowApply}
                ]
              }, 
            ]
          }
        ]
      },
      { path: '/search', name: "search", component: search},
    ]
})

