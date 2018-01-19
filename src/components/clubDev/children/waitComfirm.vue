<template>
  <div class="wrap wait-comfirm">
    <dev-list :list = "waitComfirm"></dev-list>
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
    this.getClubDev({key: 4})
  },
  computed: {
    ...mapGetters(['waitComfirm'])
  },
  methods: {
    ...mapActions(['getClubDev']),
  }
}
</script>

