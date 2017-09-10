<template>
  <div class="register">
    <div class="weui-cells weui-cells_form">  

      <div class="weui-cell">
        <div class="weui-cell__hd">
            <label class="weui-label">账号</label>
        </div>
        <div class="weui-cell__bd">
            <input class="weui-input" v-model='name' type="tel" required placeholder="输入"/>
        </div>
        <div class="weui-cell__ft"><i class="weui-icon-warn"></i></div>
      </div> 

      <div class="weui-cell">
        <div class="weui-cell__hd">
            <label class="weui-label">密码</label>
        </div>
        <div class="weui-cell__bd">
            <input class="weui-input" v-model='password' type="tel" required placeholder="输入"/>
        </div>
        <div class="weui-cell__ft"><i class="weui-icon-warn"></i></div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd">
            <label class="weui-label">所属</label>
        </div>
        <div class="weui-cell__bd">
            <input class="weui-input" type="tel" required placeholder="输入"/>
        </div>
        <div class="weui-cell__ft"><i class="weui-icon-warn"></i></div>
      </div>

      <div class="weui-cell">
        <div class="weui-cell__hd">
            <label class="weui-label">邀请码</label>
        </div>
        <div class="weui-cell__bd">
            <input class="weui-input" v-model='inv_code' type="tel" required placeholder="输入"/>
        </div>
        <div class="weui-cell__ft"><i class="weui-icon-warn"></i></div>
      </div>

    </div>  
    <div class="weui-btn-area">
        <a @click="submit" href="javascript:" class="weui-btn weui-btn_primary">提交</a>
    </div>  
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  export default {
    data() {
      return {
        password: '',
        inv_code: '',
        name: ''
      }
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
