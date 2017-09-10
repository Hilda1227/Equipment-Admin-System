import Vue       from 'vue'
import Vuex      from 'vuex'
import states    from './states.js'
import getters   from './getters.js'
import mutations from './mutations.js'
import actions   from './actions.js'
import axios     from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  states,
  getters,
  mutations,
  actions
})
export default store
