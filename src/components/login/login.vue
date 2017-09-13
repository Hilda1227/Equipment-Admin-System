<template>
  <div class="login">
    <div class="weui-cells weui-cells_form">

      <div class="weui-cell">
        <div class="weui-cell__hd">
            <label class="weui-label">账号</label>
        </div>
        <div class="weui-cell__bd">
            <input class="weui-input" v-model='acount' type="tel" required placeholder="请输入输账号"/>
        </div>
        <div class="weui-cell__ft"><i class="weui-icon-warn"></i></div>
      </div> 

      <div class="weui-cell">
        <div class="weui-cell__hd">
            <label class="weui-label">密码</label>
        </div>
        <div class="weui-cell__bd">
            <input class="weui-input" v-model='password' type="tel" required placeholder="请输入密码"/>
        </div>
        <div class="weui-cell__ft"><i class="weui-icon-warn"></i></div>
      </div>

      <div class="weui-cell weui-cell_switch">
        <div class="weui-cell__bd">记住账号</div>
        <div class="weui-cell__ft">
          <input class="weui-switch" type="checkbox"/>
        </div>
      </div>

    </div>  
    <div class="weui-btn-area">
        <a @click="submit" href="javascript:" class="weui-btn weui-btn_primary">登录</a>
    </div>   
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        acount: '',
        password: ''
      }
    },
    methods: {
      ...mapActions(['login']),
      submit() {
        const user = {acount: this.acount, password: this.password}
        this.login(user)
      }
    }
  }
</script>
