<template>
  <div class="mine">
    <ul class="nav-1">
      <router-link tag="li" :to="{name: 'clubDev'}">社团设备</router-link>
      <router-link tag="li" :to="{name: 'borrowDev'}">借入设备</router-link>
      <router-link tag="li" :to="{name: 'msgCheck'}">消息审核</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  import {mapActions} from 'vuex'
  import { Tab, TabItem } from 'vux'
  export default {
    data() {
      return {
        
      }
    },
    components: {
      Tab,
      TabItem
    },
    methods: {
      
    }
  }
</script>
<style lang="scss" scoped>
.mine{
  flex-grow: 1;
   white-space: nowrap;
   position: relative;
  
}
.nav-1{
  position: relative;
  height: 40px;
  display: flex;
  justify-content: space-around;
  background-color: #00be2f;
  color:#86d893;
  li{
    line-height: 40px;
  }
  .router-link-active{
    color: #fff;
  }
}
.vux-tab{
  background-color: #00be2f;
}
</style>

