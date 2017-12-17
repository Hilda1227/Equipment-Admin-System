<template>
  <div class="wrap has-lend">
    <dev-list :list="list"></dev-list>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex';
import devList from '../../common/devList.vue';
function list (equ_list) {
  return equ_list.map(item => {
    return {
      src: item.pic_url,
      devName: item.name,
      state: item.status,
      clubName: item.belong_soc,
      borrowDate: '2017年2月10日',
      returnDate: '2017年2月13日',
      url: '/clubDevDetail/hasLend/1'
    }
  })
}
export default {
  components: {
    devList
  },
  data() {
    return {
      list: []
    }
  },
  created() {
    this.getClubDev({key: 2})
    .then((equ_list) => {
      console.log('已借出',equ_list)
      this.list = list(equ_list);
    })
  },
  methods: {
    ...mapActions(['getClubDev']),
  }
}
</script>

<style lang="scss" scoped>

</style>

