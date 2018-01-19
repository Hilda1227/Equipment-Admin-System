<template>
  <div class="wrap borrowing">
    <dev-list :list="checking"></dev-list>
  </div>
</template>

<script>
import devList from '../../common/devList.vue';
import { mapActions, mapState, mapGetters } from 'vuex';
export default {
  components: {
    devList
  },
  computed: {
    ...mapGetters(['checking'])
  },
  created () {
    this.getBorrowDev({ key: 3 })
  },
  methods: {
    ...mapActions(['getBorrowDev'])
  }
}
</script>

