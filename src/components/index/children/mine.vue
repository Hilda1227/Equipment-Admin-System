<template>
  <div class="mine">
    <!-- <tab active-color="#fff" defaultColor="#8eda99" :line-width=0>
      <tab-item selected @on-item-click="$router.push({name: 'clubDev'})">社团设备</tab-item>
      <tab-item @on-item-click="$router.push({name: 'borrowDev'})">借入设备</tab-item>
      <tab-item @on-item-click="$router.push({name: 'msgCheck'})">消息审核</tab-item>
    </tab> -->
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

