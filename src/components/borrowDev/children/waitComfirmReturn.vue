<template>
  <div class="wrap wait-comfirm-return">
    <dev-list :list="waitComfirmReturn"></dev-list>
  </div>
</template>

<script>
import devList from '../../common/devList.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    devList
  },
   computed: {
    ...mapGetters(['waitComfirmReturn'])
  },
  created () {
    this.getBorrowDev({ key: 4 })
  },
  methods: {
    ...mapActions(['getBorrowDev'])
  }
}
</script>


