<template>
  <div class = " wrap comfirm-receive">
    <group :title = "title "  titleColor="#000">
      <x-input title = "社团" required v-model = "operationDetail.soc_name" :readonly = "true"></x-input>

      <x-input title = "设备" v-model = "operationDetail.equ_name" :readonly = "true"></x-input>

      <x-input title = "借出" type="number" required v-model = "operationDetail.count" :readonly = "true"></x-input>

      <x-input title = "日期"  required v-model = "operationDetail.start_time" :readonly = "true"></x-input>

      <x-input title = "用途"  required v-model = "operationDetail.usage" :readonly = "true"></x-input>

      <x-input title = "现存地点" required v-model = "operationDetail.place" :readonly = "true"></x-input>

      <x-input title = "负责人员" required v-model = "operationDetail.user_name" :readonly = "true"></x-input>

      <x-input title = "QQ" required v-model = "operationDetail.qq_num" :readonly = "true"></x-input> 

      <x-input title = "手机" required v-model = "operationDetail.phone_num" :readonly = "true"></x-input>   

      <x-textarea title = "注意事项" :height = "30" :max = "100" v-model = "operationDetail.notice"></x-textarea>
    </group>

    <x-button class = "btn" type="primary"
      @click.native = "click " 
      :disabled = "type === 'checking' || type === 'waitComfirmReturn'" >{{ btn_text }}
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
  mounted () {
    this.click = debounce(function () {
      this.priorReturn({ br_id: this.br_id })
    }, 2500, true)
  },
  computed: {
    ...mapState(['operationDetail'])
  },
  created() {
    switch(this.type){
      case 'borrowing':       
	      this.title   = `借用时间，剩余${this.$route.query.surplus_day}天`; 
        this.btn_text = '提前还'; 
        break;
      case 'hasTimeoutReturn':
        this.title   = '归还时间 已逾期n天'; 
        this.btn_text = '归还'; 
        break;
      case 'checking':
        this.title   = '等待通过审核'; 
        this.btn_text = '审核中'; 
        break;
      case 'waitComfirmReturn':
        this.title   = '已移交于借出社团'; 
        this.btn_text = '正在途中'; 
        break;
    }
    this.getOperationDetail({br_id: this.br_id, type: 'in'});
  },
  methods: {
    ...mapActions(['getOperationDetail', 'priorReturn']),
  }
}
</script>
