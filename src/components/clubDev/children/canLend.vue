<template>
  <div class=" wrap can-lend">
    <panel :list="list" :type="type"></panel>
    <div class="add-dev">
      <img></img>
      <x-button mini plain type="primary">添加设备</x-button>
    </div>
  </div>
</template>
<script>
import { Panel, XButton } from 'vux'
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
          url: '/'
        },
        {
          src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568257903,195274429&fm=27&gp=0.jpg",
          title: '标题二',
          desc: '库存',
          url: '/'
        }
      ],
    }
  }
  
}
</script>
<style lang="scss" scoped>
// .can-lend{
//   margin-top: 0.8rem;
// }
</style>

