<template>
  <div class = " wrap operationDetail">
    <group>
      <x-input readonly title = "申请单位" v-model = 'operationDetail.soc_name'></x-input>

      <x-input readonly title = "申请数量" v-model = 'operationDetail.count'></x-input>

      <x-input readonly title = "申请人" v-model = 'operationDetail.user_name'></x-input>
      
      <x-input readonly title = "手机" v-model = 'operationDetail.phone_num'></x-input>
      
      <x-input readonly title = "QQ" v-model = 'operationDetail.qq_num'></x-input>
                
      <x-input readonly title = "使用地点" v-model = 'operationDetail.place'></x-input>
      
      <x-input readonly title = "归还日期" v-model = 'operationDetail.end_date'></x-input>
      
      <x-textarea readonly title = "申请事由" :height = "30" :max = "200" v-model = 'operationDetail.usage'></x-textarea>
    </group>  

    <div class = "operation">
      <check-icon :value.sync = "pass" @click.native = "() => {pass = true; reject = false}">通过</check-icon>  
      <check-icon :value.sync = "reject" @click.native = "() => {pass = false; reject = true}" >否决</check-icon> 
      <x-button @click.native = "$router.push({ name: 'feedback', params: {type: 'fill', br_id} })" mini plain type = "primary">填写反馈</x-button> 
    </div>
    <x-button  type = "primary" @click.native = "submit">提交</x-button> 
  </div>

</template>

<script>
import { XButton, Group, XInput, XTextarea, CheckIcon} from 'vux';
import { mapActions, mapState } from 'vuex';
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
      pass: false,
      reject: true
    }
  },
  computed: {
    ...mapState(['operationDetail', 'feedBack']),
  },
  created() {
    this.getOperationDetail({br_id: this.br_id, type: "out"});
  },
  methods: {
    ...mapActions(['getOperationDetail', 'confirmApply']),   
    submit () {    
      this.confirmApply({
        br_id: this.br_id, 
        params: {
          confirm_status: this.pass ? 1 : 2, 
          back_msg: this.feedBack.back_msg,         
        }
      })
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

