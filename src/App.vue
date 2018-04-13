<template>
  <div id="app">
    <router-view></router-view>
    <loading :show="loading.show" :text="loading.text"></loading>
    <alert @on-hide="onHide" :value="alert.value" :content="alert.content" :title="alert.title"></alert>
    <toast :value="toast.value" :type="toast.type || 'text'" :is-show-mask="toast['is-show-mask']" :text="toast.text"></Toast>
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
    ]),
  },
  methods: {
    onHide () {
      let content
      try {
        content = this.alert.content.trim()
      } catch (e) {
        console.log('App.vue', e)
      }
      switch (content) {
        case '未登陆':
          this.$router.push({ name: 'login' })
          break
        case '用户不存在':
          this.$router.push({ name: 'login' })
          break
        default:
          this.$router.go(-1)
      }
    }
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
