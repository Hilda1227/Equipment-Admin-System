<template>
  <div class = "login">
    <group>
      <x-input title = "账号" v-model = 'user_name' type="text" placeholder = "请输入输账号" required></x-input>
      <x-input title = "密码" v-model = "password" type="password" placeholder = "请输入密码" required></x-input>     
    </group>  
    <check-icon :value.sync = "remember">记住账号</check-icon>  
    <div class = "weui-btn-area">
        <a @click = "submit" href = "javascript:" class = "weui-btn weui-btn_primary">登录</a>
    </div>   
  </div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import {Group, CheckIcon, XInput} from 'vux'
  export default {
    data() {
      return {
        user_name: '',
        password: '',
        remember: false
      }
    },
    components: {
      CheckIcon,
      XInput,
      Group
    },
    computed: {
      ...mapState(['user'])

    },
    created() {
      if(localStorage.user_name){
        this.user_name = localStorage.getItem('user_name');
        this.remember = true;
      }      
    },
    methods: {
      ...mapActions(['login']),
      submit() {
        if(this.remember){ localStorage.setItem('user_name', this.user_name)}
        else {delete localStorage.user_name;}
        const user = {user_name: this.user_name, password: this.password}
        this.login(user)
      }
    }
  }
</script>
<style lang="scss" scope>
  .vux-check-icon{
    margin: 1rem 0 0 .5rem;
  }
</style>
