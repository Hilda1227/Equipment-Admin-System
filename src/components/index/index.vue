<template>
  <div class="index-wrap">
    <router-view></router-view>
    <tabbar style="height: 3.5rem">     
      <tabbar-item link="/index/list">
        <img slot="icon-active" src="../../assets/img/home_hover.png">
        <img slot="icon" src="../../assets/img/home.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item on-item-click="isHome=false" link="/index/mine">
        <img  slot="icon-active" src="../../assets/img/mine_hover.png">
        <img  slot="icon" src="../../assets/img/mine.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem} from 'vux'

export default {
  components: {
    Tabbar,
    TabbarItem,
  },
  data() {
    return {
      isHome: true
    }
  },
  methods: {
    test() {
      alert("ddd")
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
.weui-tabbar{
  position: relative;
  flex-shrink: 0;
  flex-grow: 0;
  bottom: 0px;
  display: flex;
  align-items: center;
}
</style>