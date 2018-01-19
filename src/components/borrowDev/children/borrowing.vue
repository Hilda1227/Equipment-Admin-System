<template>
  <div class="wrap borrowing">
    <dev-list :list="borrowing"></dev-list>
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
    ...mapGetters(['borrowing'])
  },
  created () {
    this.getBorrowDev({ key: 1 })
  },
  methods: {
    ...mapActions(['getBorrowDev'])
  }
}
</script>

