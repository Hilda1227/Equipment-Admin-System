<template>
  <div class="borrow-dev">
    <ul class="nav-3">
      <router-link tag="li" :to="{name: 'borrowing'}">借用中</router-link>
      <router-link tag="li" :to="{name: 'hasTimeoutReturn'}">已逾期</router-link>
      <router-link tag="li" :to="{name: 'checking'}">审核中</router-link>
      <router-link tag="li" :to="{name: 'waitComfirmReturn'}">待确认</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import { Tab, TabItem } from 'vux';
export default {
  components: {
    Tab,
    TabItem
  }
}
</script>

