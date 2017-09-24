<template>
  <div class=" wrap ">
    <group>
      <x-input title="申请单位" placeholder="社团名字" required v-model="clubName"></x-input>
      <x-input title="申请数量" placeholder="借用数量(最高为当前库存）" v-model="count"></x-input>
      <x-input title="申请人" placeholder="申请人姓名"  required v-model="person"></x-input>
      <x-input title="手机"  required ></x-input>
      <x-input title="QQ" placeholder="输入QQ" required v-model="qq"></x-input> 
      <x-input title="使用地点" placeholder="设备使用地点" required v-model="place"></x-input>
      <x-input title="归还日期"  placeholder="" required v-model="re_date"></x-input>                 
      <x-textarea title="申请事由" placeholder="使用设备事由" :height="30" :max="200" v-model="apl_reason"></x-textarea>
    </group>
    <x-button @click.native="submit()" type="primary">提交</x-button>
  </div>
</template>
<script>
import { XButton, Group, XInput, XTextarea} from 'vux'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    XButton,
    XInput,
    Group,
    XTextarea
  },
  data() {
    return {
      dev_id: this.$route.params.dev_id,
      name: '',
      count: void 0,
      person: '',    
      mobile: null,
      qq: null,
      place: '',
      re_date: '',
      apl_reason: ''
    }
  },
  methods: {
    submit() {},
  }
}
</script>
<style lang="scss" scoped>
.comfirm-btn{
  margin-top: 1.5rem;
  width: 90%;
  overflow: hidden; 
}
</style>

