<template>
  <div class="msg-check">
    <tab active-color="#eb6100" defaultColor="#a9a9a9">
      <tab-item selected @on-item-click="$router.push({name: 'lendApply'})">借出申请</tab-item>
      <tab-item @on-item-click="$router.push({name: 'borrowApply'})">借用申请</tab-item>
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

