<template>
  <div class=" wrap comfirm-receive">
    <group :title="title" titleColor="#000">
      <x-input title="社团" placeholder="完整名称" required v-model="name"></x-input>
      <x-input title="设备" placeholder="选填" v-model="model"></x-input>
      <x-input title="借出" placeholder="可借用设备数量" type="number" required v-model="count"></x-input>
      <x-input title="日期" is-type="china-name" placeholder="" required v-model="person"></x-input>
      <x-input title="用途" is-type="china-mobile" placeholder="" required v-model="mobile"></x-input>          
      <x-input title="现存地点" placeholder="" required v-model="place"></x-input>
      <x-input title="负责人员" placeholder="负责人姓名" required v-model="place"></x-input>
      <x-input title="QQ" placeholder="输入QQ" required v-model="qq"></x-input> 
      <x-input title="手机" placeholder="输入手机" required v-model="qq"></x-input>       
      <x-textarea title="注意事项" :height="30" :max="100" v-model="careful"></x-textarea>
    </group>
    <x-button @click.native="comfirm()" v-if="type === 'waitComfirm'" class="comfirm-btn" type="primary">已收到设备</x-button>
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
				case "waitComfirm":
				  this.title = "已归还，请确认设备";
				  break;
				case "hasLend":
				  this.title = "归还时间，n天后";
				  break;
				case "hasTimeout":
          this.title = "已逾期，n天";
				  break;
			}	
  },
  methods: {
    comfirm() {},
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

