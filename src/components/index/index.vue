<template>
  <div>
    <router-view></router-view>
    <tabbar>     
      <tabbar-item selected link="/index/list">
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

</style>