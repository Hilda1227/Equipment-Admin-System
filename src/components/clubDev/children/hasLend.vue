<template>
  <div class="wrap has-lend">
    <dev-list :list = "hasLend"></dev-list>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import devList from '../../common/devList.vue';
export default {
  components: {
    devList
  },
  computed: {
    ...mapGetters(['hasLend'])
  },
  created() {
    this.getClubDev({key: 2})
  },
  methods: {
    ...mapActions(['getClubDev']),
  }
}
</script>
