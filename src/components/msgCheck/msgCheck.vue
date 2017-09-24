<template>
  <div class="msg-check">
    <ul class="nav-3">
      <router-link tag="li" :to="{name: 'lendApply'}">借出申请</router-link>
      <router-link tag="li" :to="{name: 'borrowApply'}">借用申请</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>

</style>

