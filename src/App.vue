<template>
  <div id="app">
    <router-view></router-view>
    <loading :show="loading.show" :text="loading.text"></loading>
    <alert :value="alert.value" :content="alert.content" :title="alert.title"></alert>
    <toast :value="toast.value" :type="toast.type" :is-show-mask="toast['is-show-mask']" :text="toast.text"></Toast>
  </div>
</template>

<script>
import { Loading, Alert, Toast } from 'vux'
import { mapState } from 'vuex'

export default {
  components: {
    Loading,
    Alert,
    Toast
  },
  computed: {
    ...mapState([
      'loading',
      'alert',
      'toast'
    ])
  }
}
</script>

<style lang="scss">

#app {
  width: 100%;
  height: 100%;
  overflow: scroll;
}

</style>

<style lang="less">
@import '~vux/src/styles/reset.less';
</style>
