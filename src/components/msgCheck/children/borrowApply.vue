<template>
  <div class=" wrap borrow-apply">
    <div class="borrow-apply-item">
      <span class="club-name">月芽</span>
      <span class="dev">借用投影仪</span>
      <span class="result">否决</span>
      <div class="arrow"></div>
    </div>
  </div>
</template>
<script>

export default {
 
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
    }
    .dev{
      color:#a9a9a9;
      // margin: auto 2.6rem;
    }
    .result{
      color:#e60012;
      position: relative;
      // margin-right: 2.6rem;
     
    }
    .arrow{
        display: inline-block;
        height: 6px;
        width: 6px;
        border-width: 2px 2px 0 0;
        border-color: #c8c8cd;
        border-style: solid;
        transform: rotate(45deg);
    }
  }
</style>



