<template>
  <div id="app">
    <router-view></router-view>
    <loading v-model="isLoading"></loading>
  </div>
</template>

<script>
import { Loading } from 'vux'
import { mapState } from 'vuex'

export default {
  components: {
    Loading
  },
  computed: {
    ...mapState({
      isLoading: state => state.vux.isLoading
    })
  }
}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}

</style>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
