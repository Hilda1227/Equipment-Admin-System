<template>
  <div class="wrap has-timeout-return">
    <dev-list :list="hasTimeoutReturn"></dev-list>
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
    ...mapGetters(['hasTimeoutReturn'])
  },
  created () {
    this.getBorrowDev({ key: 2 })
  },
  methods: {
    ...mapActions(['getBorrowDev'])
  }
}
</script>

