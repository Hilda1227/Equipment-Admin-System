<template>
  <div class="borrow-dev">
    <tab active-color="#eb6100" defaultColor="#a9a9a9">
      <tab-item selected @on-item-click="$router.push({name: 'borrowing'})">借用中</tab-item>
      <tab-item @on-item-click="$router.push({name: 'checking'})">已逾期</tab-item>
      <tab-item @on-item-click="$router.push({name: 'hasTimeoutReturn'})">审核中</tab-item>
      <tab-item @on-item-click="$router.push({name: 'waitComfirmReturn'})">待确认</tab-item>
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
<style lang="scss" scoped>

</style>

