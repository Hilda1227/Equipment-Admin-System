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
    br_list: [], 
    equ_msg: {
      name: '',
      model: '',
      count: '',
      resp_person: '',
      phone_num: '',
      qq_num: '',
      place: '',
      pic_url: '',
      status: 1, 
      notice: ''
    }
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
  feedBack: {
    back_msg: '', 
    confirm_time: '', 
    in_soc_name: '', 
    out_soc_name: ''
  },
  operationDetail: {},

}