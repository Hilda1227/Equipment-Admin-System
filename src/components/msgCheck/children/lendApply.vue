<template>
  <div class=" wrap lend-apply">
    <div class="lend-apply-item" 
      v-for = 'item in  lendApply'
      @click = "$router.push({name: 'lendApplyDetail', params: {br_id: item.br_id}})"     
    >
      <span class="club-name">{{ item.soc_name }}</span>
      <span class="dev">{{ item.equ_name }}</span>
      <x-button mini plain type="primary">查阅</x-button>
    </div>
  </div>
</template>
<script>
import {XButton} from 'vux';
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    XButton
  },
  methods: {
    check(br_id) {
      this.$router.push({name: 'lendApplyDetail', params: {br_id}})
    }
  },
  computed: {
   ...mapState(['lendApply'])
 },
  created() {
      this.getMsgCheck({ key: 1 })   
 },
  methods: {
   ...mapActions(['getMsgCheck']),
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

