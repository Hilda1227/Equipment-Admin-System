<template>
  <div class="wrap has-time-out">
    <dev-list :list = "hasTimeout"></dev-list>
  </div>
</template>
<script>
import devList from '../../common/devList.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  components: {
    devList
  },
  created() {
    this.getClubDev({key: 3})
  },
  computed: {
    ...mapGetters(['hasTimeout'])
  },
  methods: {
    ...mapActions(['getClubDev']),
  }
}
</script>

