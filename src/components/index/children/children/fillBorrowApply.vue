<template>
  <div>
    <group>
      <x-input title = "申请单位" :value = 'user.soc_name'  :readonly = 'true' ></x-input>

      <popup-picker title = "申请数量" placeholder = "请选择" :data = 'choose_count' v-model = 'count'></popup-picker>  

      <x-input title = "申请人" placeholder = "申请人姓名"  required v-model = "user_name"></x-input>

      <x-input title = "手机" type = "tel" required  v-model = "phone_num"></x-input>

      <x-input title = "QQ" placeholder = "输入QQ" required v-model = "qq_num"></x-input> 

      <x-input title = "使用地点" placeholder = "设备使用地点" required v-model = "place"></x-input>

      <datetime title = "归还日期" v-model = 'end_date' placeholder = "请选择"></datetime>      

      <x-textarea title = "申请事由" placeholder = "使用设备事由" :height="30" :max="200" v-model = "usage"></x-textarea>

    </group>
      <x-button @click.native="submit" type = "primary">提交</x-button>    
  </div>
</template>
<script>
import { XButton, Group, XInput, XTextarea, Datetime, PopupPicker, Cell} from 'vux';
import { mapActions, mapState } from 'vuex';
import { debounce } from '../../../../util.js';
export default {
  components: {
    XButton,
    XInput,
    Group,
    XTextarea,
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
  },
  mounted () {
    this.submit = debounce(() => {
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
  },
  methods: {
    ...mapActions(['esBorrowApply']),
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

