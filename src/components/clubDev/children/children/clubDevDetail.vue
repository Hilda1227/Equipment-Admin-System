<template>
  <div class=" wrap comfirm-receive">
    <group :title = "title"  titleColor="#000">
      <x-input title = "社团" required v-model = "operationDetail.soc_name" :readonly = "true"></x-input>

      <x-input title = "设备" v-model = "operationDetail.equ_name" :readonly = "true"></x-input>

      <x-input title = "借出" type="number" required v-model = "operationDetail.count" :readonly = "true"></x-input>

      <x-input title = "日期" required v-model = "operationDetail.start_time" :readonly = "true"></x-input>

      <x-input title = "用途" is-type="china-mobile" required v-model = "operationDetail.usage" :readonly = "true"></x-input>  

      <x-input title = "现存地点" required v-model = "operationDetail.place" :readonly = "true"></x-input>

      <x-input title = "负责人员" required v-model = "operationDetail.user_name" :readonly = "true"></x-input>

      <x-input title = "QQ" required v-model = "operationDetail.qq_num" :readonly = "true"></x-input> 

      <x-input title = "手机" required v-model = "operationDetail.phone_num" :readonly = "true"></x-input>    

      <x-textarea title = "注意事项" :height="30" :max="100" v-model = "operationDetail.notice"></x-textarea>
    </group>

    <x-button class = "comfirm-btn" type = "primary"
      @click.native = "click" 
      v-if = "type === 'waitComfirm'" >已收到设备
    </x-button>
  </div>
</template>
<script>
import { XButton, Group, XInput, XTextarea} from 'vux';
import { mapActions, mapState } from 'vuex';
import { debounce } from '../../../../util.js';
export default {
  components: {
    XButton,
    XInput,
    Group,
    XTextarea
  },
  data() {
    return {
      type: this.$route.params.type,
      br_id: this.$route.params.br_id,
    }
  },
  computed: {
    ...mapState(['operationDetail'])
  },
  mounted () {
    this.click = debounce(function () {
      this.confirmReturn({ br_id: this.br_id })
    }, 2500, true)
  },
  created() {
    switch(this.type)
    {
      case "waitComfirm":
        this.title = "已归还，请确认设备";
        break;			  
      case "hasLend":
        this.title = `归还时间，${this.$route.query.surplus_day}天后`;
        break;
      case "hasTimeout":
        this.title = `已逾期，${this.$route.query.surplus_day}天`;
        break;
    }	
    this.getOperationDetail({br_id: this.br_id, type: "out"});
  },
  methods: {
    ...mapActions(['getOperationDetail', 'confirmReturn'])
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

