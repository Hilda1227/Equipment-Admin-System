<template>
  <div class=" wrap comfirm-receive">
    <group :title="title" titleColor="#000">
      <x-input readonly title="社团" placeholder="完整名称" v-model="name"></x-input>
      <x-input readonly title="设备" placeholder="选填" v-model="model"></x-input>
      <x-input readonly title="借出" placeholder="可借用设备数量" type="number" v-model="count"></x-input>
      <x-input readonly title="日期" is-type="china-name" placeholder="负责人姓名" v-model="person"></x-input>
      <x-input readonly title="用途" is-type="china-mobile" placeholder="输入手机" v-model="mobile"></x-input>          
      <x-input readonly title="现存地点" placeholder="" v-model="place"></x-input>
      <x-input readonly title="负责人员" placeholder="" v-model="place"></x-input>
      <x-input readonly title="QQ" placeholder="输入QQ" v-model="qq"></x-input> 
      <x-input readonly title="手机" placeholder="输入手机" v-model="qq"></x-input>       
      <x-textarea readonly title="注意事项" :height="30" :max="100" v-model="careful"></x-textarea>
    </group>
    <x-button @click.native="active()" :disabled="type==='checking' || type==='waitComfirmReturn'" class="btn" type="primary">{{btn_text}}</x-button>
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
      type: this.$route.params.type,
      dev_id: this.$route.params.dev_id,
      title:'',
      btn_text: '',
      name: '',
      model: '',
      count: void 0,
      person: '',    
      mobile: null,
      qq: null,
      place: '',
      careful: '',
      pic_url: '',
    }
  },
  created() {
    console.log(this.type, this.dev_id);
    switch(this.type)
    {
	  case "borrowing":
	    this.title = "借用时间，剩余n天"; this.btn_text = "提前还";
		break;
	  case "hasTimeoutReturn":
        this.title = "归还时间 已逾期n天"; this.btn_text = "归还";
        break;
      case "checking":
		this.title = "等待通过审核"; this.btn_text = "审核中";
		break;
      case "waitComfirmReturn":
        this.title = "已移交于借出社团"; this.btn_text = "正在途中";
		break;
	}	
  },
  methods: {
    active() {}
  }
}
</script>
<style lang="scss" scoped>

</style>

