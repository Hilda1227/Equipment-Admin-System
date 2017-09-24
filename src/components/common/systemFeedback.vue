<template>
  <div class=" wrap feedback">
    <group>
      <x-textarea placeholder="请在此写下您对设备管理系统的建议或疑问"  :height="250"> </x-textarea>
       <x-input title="联系电话" placeholder="方便我们联系你" is-type="china-mobile"></x-input>
    </group>
      <x-button  type="primary">提交</x-button> 
  </div>
</template>
<script>
import {Group, XButton, XTextarea, XInput} from 'vux'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    XButton,   
    XTextarea,
    XInput,
    Group
  },
  data() {
    return {
  
    }
  },
  created() {
     
  },
  methods: {
   
  }
}
</script>
<style lang="scss" scoped>
.weui-btn,.weui-btn_primary{
  margin-top: 4rem !important;
}
</style>

