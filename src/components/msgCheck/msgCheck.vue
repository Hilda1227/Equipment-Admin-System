<template>
  <div class="msg-check">
    <ul class="nav-3">
      <router-link tag="li" :to="{name: 'lendApply'}">借出申请</router-link>
      <router-link tag="li" :to="{name: 'borrowApply'}">借用申请</router-link>
    </ul>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<style lang="scss" scoped>
.msg-check{
    flex-grow: 1;
    white-space: nowrap;
    position: relative;
    overflow: scroll;
    .wrap{
      flex-grow: 1;
      white-space: nowrap;
      position: relative;
      overflow: scroll;
    }
}
</style>



    