<template>
  <div class=" wrap borrow-apply">
    <div 
       v-for = 'item in borrowApplay' 
       @click="$router.push({name: 'feedback', params: {type: 'view', br_id: item.br_id}})" 
       class="borrow-apply-item"
    >
      <span class="club-name">{{ item.soc_name }}</span>
      <span class="dev">{{ item.equ_name }}</span>
      <span class="result">否决</span>
      <div class="arrow"></div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
export default {
 computed: {
   ...mapState(['borrowApplay'])
 },
 created() {
      this.getMsgCheck({key: 2})   
 },
 methods: {
   ...mapActions(['getMsgCheck']),
 }
}
</script>
<style lang="scss" scope>
  .borrow-apply-item{
    position: relative;
    padding: 0px .8rem;
    width: 100%;
    height: 4rem;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    span{
      display: inline-block;
      text-overflow: ellipsis; 
			white-space: nowrap; 
			overflow: hidden;
      text-align: center;
    }
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
    .club-name{
      color: #000;
      width: 30%;
    }
    .dev{
      color:#a9a9a9;
      text-align: left;
      width: 30%;
    }
    .result{
      color:#e60012;
      width: 15%;
      position: relative;
     
    }
    .arrow{
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #c8c8cd;
        border-style: solid;
        transform: rotate(45deg);
        margin-right: 1rem;
    }
  }
</style>



