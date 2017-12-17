import Vue       from 'vue';
export default {
  loading: {
    show: false,
    text: '加载中'
  },
  alert: {
    value: false,
    title: '',
    content: '',
  },
  toast: {
    value: false,
    type: 'success',
    'is-show-mask': false,
    text: '',
  },
  user_id: void 0,
  indexList: [],
  searchList: [],
  devDetail: {

  },
  // 社团设备
  canLend: [],
  hasLend: [],
  hasTimeout: [],
  waitComfirm: [],

  // 借入设备
  borrowing: [],
  checking: [],
  hasTimeoutReturn: [],
  waitComfirmReturn: [],

  // 消息审核
  borrowApplay: [],
  lendApply: [],
  feedBack: [],
  lendApplyDetail: {}
}