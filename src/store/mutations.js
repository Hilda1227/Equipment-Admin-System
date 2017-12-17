export default {
  set_loading (state, payload) {
    state.loading = payload;
  },
  set_toast (state, payload) {
    state.toast = payload;
  },
  set_login (state, payload) {
    state.user_id = payload;
    localStorage.setItem('user_id', payload);
  },
  set_indexList (state, payload) {
    state.indexList = payload;
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
  set_hasTimeoutReturn (state, payload) {
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
  set_lendApplyDetail (state, payload) {
    state.lendApplyDetail = payload;
  }
}