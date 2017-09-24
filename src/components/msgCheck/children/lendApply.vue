<template>
  <div class=" wrap lend-apply">
    <div class="lend-apply-item" @click="check(3)">
      <span class="club-name">月芽</span>
      <span class="dev">借用投影仪</span>
      <x-button mini plain type="primary">可借</x-button>
    </div>
  </div>
</template>
<script>
import {XButton} from 'vux'
export default {
  components: {
    XButton
  },
  methods: {
    check(dev_id) {
      this.$router.push({name: 'lendApplyDetail', params: {dev_id}})
    }
  }
}
</script>
<style lang="scss" scope>
  .lend-apply-item{
    position: relative;
    width: 100%;
    height: 4rem;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    &::after{
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #E5E5E5;
      color: #E5E5E5;
      transform-origin: 0 0;
      transform: scaleY(0.5);
      left: 15px;
    }
    button{
      margin: 0;
    }
    .club-name{
      color: #000;
    }
    .dev{
      color:#a9a9a9;
    }
  }
</style>

