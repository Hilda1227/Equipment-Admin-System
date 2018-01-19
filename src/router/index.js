import Vue    from 'vue';
import Router from 'vue-router';

import login    from '../components/login/login';
import register from '../components/login/register';

import index from '../components/index/index';
import list  from '../components/index/children/list.vue';
import mine  from '../components/index/children/mine.vue';
import search  from '../components/search/search.vue';
import searchResult  from '../components/search/searchResult.vue';
import devDetail from '../components/index/children/children/devDetail.vue';
import fillBorrowApply from '../components/index/children/children/fillBorrowApply.vue';

import clubDev  from '../components/clubDev/clubDev.vue';
import canLend  from '../components/clubDev/children/canLend.vue';
import hasLend  from '../components/clubDev/children/hasLend.vue';
import hasTimeout  from '../components/clubDev/children/hasTimeout.vue';
import waitComfirm  from '../components/clubDev/children/waitComfirm.vue';
import editorDev from '../components/clubDev/children/children/editorDev.vue';
import clubDevDetail from '../components/clubDev/children/children/clubDevDetail.vue';

import borrowDev  from '../components/borrowDev/borrowDev.vue';
import borrowing  from '../components/borrowDev/children/borrowing.vue';
import checking  from '../components/borrowDev/children/checking.vue';
import hasTimeoutReturn  from '../components/borrowDev/children/hasTimeoutReturn.vue';
import waitComfirmReturn  from '../components/borrowDev/children/waitComfirmReturn.vue';
import borrowDevDetail from '../components/borrowDev/children/children/borrowDevDetail.vue';

import msgCheck  from '../components/msgCheck/msgCheck.vue';
import borrowApply  from '../components/msgCheck/children/borrowApply.vue';
import lendApply  from '../components/msgCheck/children/lendApply.vue';
import lendApplyDetail from '../components/msgCheck/children/children/lendApplyDetail.vue';
import feedback from '../components/msgCheck/children/children/feedback.vue';

import systemFeedback  from '../components/common/systemFeedback.vue';

Vue.use(Router);
export default new Router({
    routes: [
      { path: '/', redirect: {name: 'index'}},
      { path: '/login', name: "login", component: login},
      { path: '/register', name: "register", component: register},
      // 首页
      { path: '/index', redirect: {name: 'list'}, name: "index", component: index,
        children: [
          // 主页设备列表
          { path: 'list', name: 'list', component: list},
          // 我的部分
          { path: 'mine', redirect: {name: 'clubDev'}, name: 'mine', component: mine,
            children: [
              // 社团设备模块
              { path: 'clubDev', name: 'clubDev', component: clubDev, redirect: {name: 'canLend'},
                children: [
                  {path: 'canLend', name: 'canLend', component: canLend},
                  {path: 'hasLend', name: 'hasLend', component: hasLend},
                  {path: 'hasTimeout', name: 'hasTimeout', component: hasTimeout},
                  {path: 'waitComfirm', name: 'waitComfirm', component: waitComfirm},
                ]
              },
              // 借入设备模块
              {path: 'borrowDev', redirect: {name: 'borrowing'}, name: 'borrowDev', component: borrowDev,
                children: [
                  {path: 'borrowing', name: 'borrowing', component: borrowing},
                  {path: 'checking', name: 'checking', component: checking},
                  {path: 'hasTimeoutReturn', name: 'hasTimeoutReturn', component: hasTimeoutReturn},
                  {path: 'waitComfirmReturn', name: 'waitComfirmReturn', component: waitComfirmReturn},
                ]
              },
              // 消息审核模块
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
      // 设备详细信息
      // type: 1.'canLend'：可借，2.'rejectLend': 不可借
      { path: '/devDetail/:type/:equ_id', name: 'devDetail',component: devDetail},
      
      // 填写借用申请页
      { path: '/fillBorrowApply/:equ_id', name: 'fillBorrowApply', component: fillBorrowApply},

      // 搜索模块
      { path: '/search', name: "search", component: search},
      { path: '/searchResult/:key', name: "searchResult", component: searchResult},
      
      // 社团设备模块详情页
      { path: '/clubDevDetail/:type/:br_id', name: "clubDevDetail", component: clubDevDetail},
      { path: '/editorDev/:type/:dev_id', name: "editorDev", component: editorDev},
      
      // 借入设备模块详情页
      { path: '/borrowDevDetail/:type/:br_id', name: "borrowDevDetail", component: borrowDevDetail},
      
      // 消息审核模块详情页
      { path: '/lendApplyDetail/:br_id', name: "lendApplyDetail", component: lendApplyDetail},
      { path: '/feedback/:type/:br_id', name: "feedback", component: feedback},

      // 系统反馈
      { path: '/systemFeedback', name: "systemFeedback", component: systemFeedback},
    ]
})

