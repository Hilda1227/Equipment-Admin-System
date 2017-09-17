export default {
  set_login(state, payload) {
    state.user = payload;
  },
  set_indexList(state, payload) {
    state.indexList = payload;
  },
  set_alert(state, payload) {
    state.alert = payload;
  }
}