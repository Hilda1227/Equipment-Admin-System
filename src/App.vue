<template>
  <div id="app">
    <router-view></router-view>
    <loading v-model="isLoading"></loading>
    <alert :value="alert.value" :content="alert.content" :title="alert.title"></alert>
  </div>
</template>

<script>
import { Loading, Alert } from 'vux'
import { mapState } from 'vuex'

export default {
  components: {
    Loading,
    Alert
  },
  computed: {
    ...mapState([
      'isLoading',
      'alert'
    ])
  }
}
</script>

<style lang="scss">

#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

</style>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
