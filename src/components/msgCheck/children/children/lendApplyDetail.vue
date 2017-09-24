<template>
  <div class=" wrap lendApplyDetail">
    <group>
      <x-input readonly title="申请单位" ></x-input>
      <x-input readonly title="申请数量" ></x-input>
      <x-input readonly title="申请人" ></x-input>
      <x-input readonly title="手机" ></x-input>
      <x-input readonly title="QQ" ></x-input>          
      <x-input readonly title="使用地点" ></x-input>
      <x-input readonly title="归还日期"></x-input>
      <x-textarea readonly title="申请事由" :height="30" :max="200"></x-textarea>
    </group>   
    <div class="operation">
      <check-icon :value.sync="pass" @click.native="reject=false">通过</check-icon>  
      <check-icon :value.sync="reject" @click.native="pass=false">否决</check-icon> 
      <x-button @click.native="$router.push({name: 'feedback', params: {type, dev_id}})" mini plain type="primary">填写反馈</x-button> 
    </div>
    <x-button  type="primary">提交</x-button> 
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
      dev_id: this.$route.params.dev_id,
      type: 'fill',
      pass: false,
      reject: true
    }
  },
  created() {
      console.log(this.$route, this.$router)
  },
  methods: {
    active() {}
  }
}
</script>
<style lang="scss" scoped>
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

