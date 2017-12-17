<template>
  <div class = " wrap lendApplyDetail">
    <group>
      <x-input readonly title = "申请单位" v-model = 'lendApplyDetail.soc_name'></x-input>
      <x-input readonly title = "申请数量" v-model = 'lendApplyDetail.count'></x-input>
      <x-input readonly title = "申请人" v-model = 'lendApplyDetail.user_name'></x-input>
      <x-input readonly title = "手机" v-model = 'lendApplyDetail.phone_num'></x-input>
      <x-input readonly title = "QQ" v-model = 'lendApplyDetail.qq_num'></x-input>          
      <x-input readonly title = "使用地点" v-model = 'lendApplyDetail.place'></x-input>
      <x-input readonly title = "归还日期" v-model = 'lendApplyDetail.end_date'></x-input>
      <x-textarea readonly title = "申请事由" :height = "30" :max = "200" v-model = 'lendApplyDetail.usage'></x-textarea>
    </group>   
    <div class = "operation">
      <check-icon :value.sync = "pass" @click.native = "pass = true">通过</check-icon>  
      <check-icon :value.sync = "pass" @click.native = "pass = false">否决</check-icon> 
      <x-button @click.native = "$router.push({ name: 'feedback', params: {type, br_id} })" mini plain type = "primary">填写反馈</x-button> 
    </div>
    <x-button  type = "primary" @click.native = 'submit'>提交</x-button> 
  </div>
</template>
<script>
import { XButton, Group, XInput, XTextarea, CheckIcon} from 'vux'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    XButton,
    XInput,
    Group,
    XTextarea,
    CheckIcon
  },
  data() {
    return {
      br_id: this.$route.params.br_id,
      type: 'fill',
      pass: false,
    }
  },
  computed: {
    ...mapState(['lendApplyDetail'])
  },
  created() {
    this.getlendApplyDetail({ br_id: this.br_id})
  },
  methods: {
   ...mapActions(['getlendApplyDetail', 'confirmApply']),
   submit () {
     this.confirmApply({ br_id: this.br_id, params: {confirm_status: 1} })
   }
  }
}
</script>
<style lang = "scss" scoped>
.operation{
    display: flex;
    justify-content: space-around;
    margin-top: 0.5rem;
    padding-left: 10px;
    .vux-check-icon{
        margin-right: 1rem;
    }
}
</style>

