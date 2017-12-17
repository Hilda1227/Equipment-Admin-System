<template>
  <div class="register">
    <group>
      <x-input title="账号" v-model='name' type="text" placeholder="输入" required></x-input>
      <x-input title="密码" v-model="password" type="password" placeholder="输入" required></x-input>  
      <x-input title="邀请码" v-model="inv_code" type="text" placeholder="输入" required></x-input>     
    </group>
    <div class="weui-btn-area">
        <a @click="submit" href="javascript:" class="weui-btn weui-btn_primary">提交</a>
    </div>  
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import {Group, CheckIcon, XInput} from 'vux'
  export default {
    data() {
      return {
        password: '',
        inv_code: '',
        name: ''
      }
    },
    components: {
      CheckIcon,
      XInput,
      Group
    },
    methods: {
      ...mapActions(["register"]),
      submit() {
        const info = {password: this.password, inv_code: this.inv_code, name: this.name}
        this.register(info)
      }
    }
  }
</script>
