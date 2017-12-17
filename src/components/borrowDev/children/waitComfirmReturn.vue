<template>
  <div class="wrap wait-comfirm-return">
    <dev-list :list="list"></dev-list>
  </div>
</template>
<script>
import devList from '../../common/devList.vue';
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    devList
  },
  data() {
    return {
      list: [
        {
          src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568257903,195274429&fm=27&gp=0.jpg",
          devName: "展板",
          state: "归还中，等待确认",
          clubName: '比特工场',
          borrowDate: '2017年2月10日',
          returnDate: '2017年2月13日',
          url: '/borrowDevDetail/waitComfirmReturn/1'
        },
        {
          src: "https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3568257903,195274429&fm=27&gp=0.jpg",
          devName: "展板",
          state: "归还中，等待确认",
          clubName: '比特工场',
          borrowDate: '2017年2月10日',
          returnDate: '2017年2月13日',
          url: '/borrowDevDetail/waitComfirmReturn/2'
        }
      ]
    }
  },
   computed: {
    ...mapState(['waitComfirmReturn'])
  },
  created () {
    this.getBorrowDev({ key: 4 })
  },
  methods: {
    ...mapActions(['getBorrowDev'])
  }
}
</script>
<style lang="scss" scoped>

</style>

