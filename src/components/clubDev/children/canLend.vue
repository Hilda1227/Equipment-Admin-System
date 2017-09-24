<template>
  <div class=" wrap can-lend">
    <panel :list="list" :type="type"></panel>
    <div class="add-dev">
      <img src="../../../assets/img/add.png"></img>
      <x-button @click.native="$router.push({name: 'addDev', params:{type: 'add', dev_id:'add'}})" mini plain type="primary">添加设备</x-button>
    </div>
  </div>
</template>
<script>
import { Panel, XButton } from 'vux'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    Panel,
    XButton
  },
  data() {
    return {
      type: '5',
      list: [
        {
          src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568257903,195274429&fm=27&gp=0.jpg",
          title: '标题一',
          desc: '库存',
          url: "/addDev/modify/5"
        }
      ],
    }
  },
}
</script>
<style lang="scss" scoped>
.add-dev{
  width:100%;
  height: 90px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  img{
    width: 60px;
    height: 60px;
    margin-left: 15px;
  }
  .weui-btn_mini{
    margin-left: 15px;
    padding:0 0.3rem;
  }
}
</style>

