<template>
  <div class=" wrap ">
    <group>
      <x-input readonly title = "借用社团" :value = "club"></x-input>
      <x-input readonly title = "借用设备" :value = "dev"></x-input>
      <x-input readonly title = "借用数量" :value = "count"></x-input>
    </group>   
    <x-button  type = "primary">确认移交设备</x-button> 
  </div>
</template>
<script>
import { XButton, Group, XInput} from 'vux'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    XButton,
    XInput,
    Group,
  },
  data() {
    return {
      br_id: this.$route.params.br_id,
      club: '',
      dev: '',
      count: ''
    }
  },
  created() {
    
  },
  methods: {
    active() {}
  }
}
</script>
<style lang = "scss" scoped>

</style>

