<template>
  <div class="club-dev">
    <ul class="nav-3">
      <router-link tag="li" :to="{name: 'canLend'}">未借出</router-link>
      <router-link tag="li" :to="{name: 'hasLend'}">已借出</router-link>
      <router-link tag="li" :to="{name: 'hasTimeout'}">已逾期</router-link>
      <router-link tag="li" :to="{name: 'waitComfirm'}">待确认</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
export default {
  components: {
    Tab,
    TabItem
  }
}
</script>
<style lang="scss" >

</style>

