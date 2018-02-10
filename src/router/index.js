import Vue    from 'vue';
import Router from 'vue-router';

const  login     = () => import('../components/login/login');
const  register  = () => import('../components/login/register');

const  index  = () => import('../components/index/index');
const  list   = () => import('../components/index/children/list.vue');
const  mine   = () => import('../components/index/children/mine.vue');
const  search   = () => import('../components/search/search.vue');
const  searchResult   = () => import('../components/search/searchResult.vue');
const  devDetail  = () => import('../components/index/children/children/devDetail.vue');
const  fillBorrowApply  = () => import('../components/index/children/children/fillBorrowApply.vue');

const  clubDev   = () => import('../components/clubDev/clubDev.vue');
const  canLend   = () => import('../components/clubDev/children/canLend.vue');
const  hasLend   = () => import('../components/clubDev/children/hasLend.vue');
const  hasTimeout   = () => import('../components/clubDev/children/hasTimeout.vue');
const  waitComfirm   = () => import('../components/clubDev/children/waitComfirm.vue');
const  editorDev  = () => import('../components/clubDev/children/children/editorDev.vue');
const  clubDevDetail  = () => import('../components/clubDev/children/children/clubDevDetail.vue');

const  borrowDev   = () => import('../components/borrowDev/borrowDev.vue');
const  borrowing   = () => import('../components/borrowDev/children/borrowing.vue');
const  checking   = () => import('../components/borrowDev/children/checking.vue');
const  hasTimeoutReturn   = () => import('../components/borrowDev/children/hasTimeoutReturn.vue');
const  waitComfirmReturn   = () => import('../components/borrowDev/children/waitComfirmReturn.vue');
const  borrowDevDetail  = () => import('../components/borrowDev/children/children/borrowDevDetail.vue');

const  msgCheck   = () => import('../components/msgCheck/msgCheck.vue');
const  borrowApply   = () => import('../components/msgCheck/children/borrowApply.vue');
const  lendApply   = () => import('../components/msgCheck/children/lendApply.vue');
const  lendApplyDetail  = () => import('../components/msgCheck/children/children/lendApplyDetail.vue');
const  feedback  = () => import('../components/msgCheck/children/children/feedback.vue');

const  systemFeedback   = () => import('../components/common/systemFeedback.vue');

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

