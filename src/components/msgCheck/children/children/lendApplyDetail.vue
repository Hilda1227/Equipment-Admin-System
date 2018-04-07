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
      <div class="radios">
        <check-icon :value.sync = "pass" @click.native = "() => {pass = true; reject = false}">通过</check-icon>  
        <check-icon :value.sync = "reject" @click.native = "() => {pass = false; reject = true}" >否决</check-icon> 
      </div>
      <button class="fill"
        @click = "$router.push({ name: 'feedback', params: {type: 'fill', br_id}, query: {soc_name: operationDetail.soc_name}})" 
        type = "primary">填写反馈
      </button> 
    </div>
    <x-button  type = "primary" @click.native = "click">提交</x-button> 
  </div>
</template>

<script>
import { XButton, Group, XInput, XTextarea, CheckIcon} from 'vux';
import { mapActions, mapState } from 'vuex';
import { debounce } from '../../../../util.js';

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
  mounted () {
    this.click = debounce(() => {
      this.confirmApply({
        br_id: this.br_id, 
        params: {
          confirm_status: this.pass ? 1 : 2, 
          back_msg: this.feedBack.back_msg,         
        }
      })
    }, 2500, true)
  },
  methods: {
    ...mapActions(['getOperationDetail', 'confirmApply']),   
  }
}
</script>
<style lang = "scss" scoped>
.operationDetail{
  display: flex;
  flex-direction: column;
}
.operation{
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    width: 95%;
    align-items: center;
    margin-left: 2.5%;
    .vux-check-icon{
        margin: 0 1.5rem 0 0;
    }
    .radios{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      
    }
    
}
.fill{
  border: none;
  background: transparent;
  width: 4rem;
  height: 1.8rem;
  display: inline-block;
  border: #1AAD19;
  border-radius: 3px;
  border: 1px solid #1AAD19;
  color: #1AAD19; 
}
</style>

