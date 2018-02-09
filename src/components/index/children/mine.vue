<template>
  <div class="mine">

    <ul class="nav-1">
      <router-link tag="li" :to="{name: 'clubDev'}">社团设备</router-link>
      <router-link tag="li" :to="{name: 'borrowDev'}">借入设备</router-link>
      <router-link tag="li" :to="{name: 'msgCheck'}">消息审核</router-link>
    </ul>

    <router-view></router-view>

    <router-link to="/systemFeedback" tag="div"  class="feedback"></router-link to="">    
  </div>
</template>
<script>
  import {mapActions} from 'vuex';
  import { Tab, TabItem } from 'vux';
  export default {
    components: {
      Tab,
      TabItem
    },
  }
</script>
<style lang="scss" scoped>
.mine{
  flex-grow: 1;
   white-space: nowrap;
   position: relative;
   overflow: hidden;
   display: flex;
   flex-direction: column;
}
.nav-1{
  // position: relative;
  // height: 40px;
  // display: flex;
  // justify-content: space-around;
  // background-color: #49afa1;
  // color:#a7d4cd;
  // flex-shrink: 0;
    position: relative;
    height: 40px;
    display: flex;
    justify-content: space-around;
    background-color: #00be2f;
    color:#86d893;
    flex-shrink: 0;
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
.feedback{
  width: 3.1rem;
  height: 3.1rem;
  border-radius: 50%;
  background-color: #898888;
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  z-index: 12;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before{
    content: '';
    height: 5px;
    width: 40%;
    border-radius: 2.5px;
    background-color: #fff;    
  }
  &::after{
    content: '';
    position: absolute;
    height: 40%;
    width: 5px;
    border-radius: 2.5px;
    background-color: #fff;    
  }
}
</style>

