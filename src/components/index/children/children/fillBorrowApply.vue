<template>
  <div>
    <form id = 'apply-form' @submit.prevent = "submit">
      <m-input label-text = "申请单位" :disabled="true" v-model = 'user.soc_name'></m-input>

      <popup-picker title = "申请数量" placeholder = "请选择" :data = 'choose_count' v-model = 'count'></popup-picker>  

      <m-input label-text = "申请人" placeholder = "申请人姓名"  :required = 'true' v-model = "user_name"></m-input>

      <m-input label-text = "手机" placeholder = "申请人电话" pattern = '^1[0-9]{10}$' :required = 'true' v-model = "phone_num"></m-input>

      <m-input label-text = "QQ" placeholder = "输入QQ" :required = 'true' v-model = "qq_num"></m-input> 

      <m-input label-text = "使用地点" placeholder = "设备使用地点" :required = 'true' v-model = "place"></m-input>

      <datetime title = "归还日期" v-model = 'end_date' :start-date = 'startTime' placeholder = "请选择"></datetime>      

      <m-textarea label-text = "申请事由" placeholder = "使用设备事由" :required = 'true' :rows = '3' v-model = "usage" :maxlength = "100"></m-textarea>

    </form>
    <m-button type = 'submit' text = '提交' form = 'apply-form'></m-button>   
  </div>
</template>
<script>
import {XTextarea, Datetime, PopupPicker, Cell} from 'vux';
import MInput from '../../../common/MInput.vue';
import MButton from '../../../common/MButton.vue';
import MTextarea from '../../../common/MTextarea.vue';
import { mapActions, mapState } from 'vuex';
import { debounce } from '../../../../util.js';
export default {
  components: {
    MInput,
    MButton,
    XTextarea,
    MTextarea,
    PopupPicker,
    Datetime,
    Cell,  
  },
  data() {
    return {
      equ_id: this.$route.params.equ_id,
      name: '',
      count: [1],
      user_name: '',    
      phone: null,
      qq_num: null,
      phone_num: null,
      place: '',
      end_date: '',
      usage: '',      
    }
  },
  computed: {
    ...mapState(['devDetail', 'user']),
    choose_count () {
      let choose = [], count = this.devDetail.equ_msg.count;
      for (let i = 1; i <=count; i++) {
        choose.push({name: i + '', value: i});
      }
      return [choose];
    },
    startTime () {
      let date  = new Date();
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, 0)}-${String(date.getDate()).padStart(2, 0)}`;
    }
  },
  methods: {
    ...mapActions(['esBorrowApply']),
    submit () {
      let fn = debounce(() => {
        let form = {
          user_id: this.user.user_id, 
          equ_id: this.equ_id, 
          count: this.count[0],
          usage: this.usage, 
          use_place: this.place, 
          end_date: this.end_date,
          qq_num: this.qq_num, 
          phone_num: this.phone_num, 
          user_name: this.user_name
        };
        this.esBorrowApply(form);
      }, 2000, true)
      fn();
    }
  }
}
</script>
<style lang="scss" scoped>
.comfirm-btn{
  margin-top: 1.5rem;
  width: 90%;
  overflow: hidden; 
}
form{
  background: #fff;
  margin-top: 0.7rem;
}
textarea.weui-textarea{
  padding-left: 20px;
}
</style>

