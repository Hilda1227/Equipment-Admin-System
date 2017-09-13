<template>
  <div class="club-dev">
    <tab active-color="#eb6100" defaultColor="#a9a9a9">
      <tab-item selected @on-item-click="$router.push({name: 'canLend'})">未借出</tab-item>
      <tab-item @on-item-click="$router.push({name: 'hasLend'})">已借出</tab-item>
      <tab-item @on-item-click="$router.push({name: 'hasTimeout'})">已逾期</tab-item>
      <tab-item @on-item-click="$router.push({name: 'waitComfirm'})">待确认</tab-item>
    </tab>
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

