export default {
  set_loading (state, payload) {
    state.loading = payload;
  },
  set_toast (state, payload) {
    state.toast = payload;
    setTimeout(() => {
      state.toast.value = false;
    } ,2000)
  },
  set_login (state, payload) {
    state.user = payload;
    localStorage.setItem('user_id', payload.user_id);
  },
  set_indexList (state, payload) {
    if(payload.isInit){
      state.indexList = payload.list;
    }
    else {
      state.indexList = state.indexList.concat(payload.list);
    }
  },
  set_searchList (state, payload) {
    state.searchList = payload;
  },
  set_alert (state, payload) {
    state.alert = payload;
  },
  set_devDetail (state, payload) {
    state.devDetail = payload;
  },

  // 社团设备
  set_canLend (state, payload) {
    state.canLend = payload;
  },
  set_hasLend (state, payload) {
    state.hasLend = payload;
  },
  set_hasTimeout (state, payload) {
    state.hasTimeout = payload;
  },
  set_waitComfirm (state, payload) {
    state.waitComfirm = payload;
  },
  set_devDetail (state, payload) {
    state.devDetail = payload;
    let status = payload.equ_msg.status === 0 ? true : false;
    state.devDetail.equ_msg.status = status;
  },

  // 借入设备
  set_borrowing (state, payload) {
    state.borrowing = payload;
  },
  set_checking (state, payload) {
    state.checking = payload;
  },
  set_hasTimeoutReturn (state, payload) {
    state.hasTimeoutReturn = payload;
  },
  set_waitComfirmReturn (state, payload) {
    state.waitComfirmReturn = payload;
  },

  // 消息审核
  set_borrowApply (state, payload) {
    state.borrowApplay = payload;
  },
  set_lendApply (state, payload) {
    state.lendApply = payload;
  },
  set_feedBack (state, payload) {
    state.feedBack = payload;
  },
  set_operationDetail (state, payload) {
    state.operationDetail = payload;
  }
}