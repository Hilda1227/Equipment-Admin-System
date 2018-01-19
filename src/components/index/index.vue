<template>
  <div class="index-wrap">

    <keep-alive><router-view></router-view></keep-alive>

    <div class="foot-nav">
       <router-link @click.native="isHome=true" to="/index/list" tag="div" class="nav-item">
          <img v-if="isHome" src="../../assets/img/home_hover.png"/>
          <img v-else src="../../assets/img/home.png">
          <span :class="{active: isHome}">首页</span>
       </router-link>

       <router-link @click.native="isHome=false" to="/index/mine" tag="div" class="nav-item">
          <img v-if="!isHome" src="../../assets/img/mine_hover.png">
          <img v-else src="../../assets/img/mine.png">
          <span :class="{active: !isHome}">我的</span>
       </router-link>
    </div>
    <div class="bottom"></div>
    
  </div>
</template>

<script>
import { Tabbar, TabbarItem} from 'vux';
export default {
  components: {
    Tabbar,
    TabbarItem,
  },
  data() {
    return {
      isHome: this.$route.name === 'list'
    }
  }
}
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
.index-wrap{
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  position: relative;

}
.foot-nav{
  height: 3.5rem;
  width: 100%;
  position: fixed;
  flex-shrink: 0;
  flex-grow: 0;
  bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  .nav-item{
    height: 100%;
    width: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img{
      width: 1.6rem;
    }
    span{
      text-align: center;
      color: #999;
      font-size: 0.8rem;
      line-height: 0.8rem;
      margin-top: 0.2rem;    
    }
  }
}
.bottom{
  height: 3.5rem;
  width: 100%;
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  bottom: 0px;
   z-index: 9;
}
span.active{
  color: #189f17 !important;
}
</style>