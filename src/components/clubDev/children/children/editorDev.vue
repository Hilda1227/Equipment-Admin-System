<template>
  <div class = " wrap editor-dev">
    <group>
      <x-input title = "社团设备" placeholder = "完整名称" :required = "true" v-model = "equ.name"></x-input>

      <x-input title = "设备型号" placeholder = "选填" v-model = "equ.model"></x-input>

      <x-input title = "设备数量" placeholder = "可借用设备数量" is-type = "number" :required = "true" v-model = "equ.count"></x-input>

      <x-input title = "负责人" is-type = "china-name" placeholder = "负责人姓名" :required = "true" v-model = "equ.resp_person"></x-input>

      <x-input title = "手机" type="tel" placeholder = "输入手机" :required = "true" v-model = "equ.phone_num"></x-input>

       <x-input title = "QQ" placeholder = "输入QQ" :required = "true" v-model = "equ.qq_num"></x-input>

      <x-input title = "存放地点" placeholder = "存放地点" :required = "true" v-model = "equ.place"></x-input>

      <x-textarea title = "注意事项" :height="30" :max="100" v-model = "equ.notice"></x-textarea>

      <div class = "dev-img">
          <label for = "upload">设备图片</label >
          <div class="choose-img" 
            :style = "{backgroundImage: `url(${equ.pic_url ? equ.pic_url : require('../../../../assets/img/add_dev.png')})`}">
            <input @change = "chooseImg()" class="upload" type = "file"></input>
          </div>
      </div>
      <x-switch title = "设备不可借" v-model = "equ.status"></x-switch>
    <x-button @click.native = "click()" class = "lend-btn" type = "primary">保存</x-button>
    </group>

    
  </div>
</template>
<script>
import { XButton, Group, XInput, XTextarea, XSwitch} from 'vux';
import { mapActions, mapState } from 'vuex';
import { debounce } from '../../../../util.js';
export default {
  components: {
    XButton,
    XInput,
    Group,
    XTextarea,
    XSwitch,
  },
  data() {    
    return {
      type: this.$route.params.type,
      equ_id: this.$route.params.dev_id, 
      equ: {
        name: '',
        model: '',
        count: '',
        resp_person: '',
        phone_num: '',
        qq_num: '',
        place: '',
        pic_url: '',
        status: false, 
        notice: ''       
      }
    }
  },
  computed: {
    ...mapState(['devDetail'])
  },
  mounted () {
    this.click = debounce(() => {
      if(this.type == 'modify'){
        this.modifyInfo({
          equ_id: this.equ_id,
          equ: {
            ...this.equ, 
            status: this.equ.status === false ? 1 : 0,
          }
        })
      }
      if(this.type == 'add'){
        this.addClubDev(this.equ)
      }
    }, 2500, true)
  },
  created(){
    if(this.type == 'modify'){
      this.getDevDetail(this.equ_id)
      .then(() => {
        this.equ = this.devDetail.equ_msg;
      })
    }
  },
  methods: {
    ...mapActions(['addClubDev', 'getDevDetail', 'upload', 'modifyInfo', 'addClubDev']),
    // 选择图片预览
    chooseImg() {
      let upload  = document.querySelector('.upload'),
          file    = upload.files[0],          
          reader  = new FileReader();
      this.pic_url = upload.value;
      
      reader.addEventListener("load", () => {
        this.upload({file}).then(url => {this.equ.pic_url = url.pic_url;})
      }, false);      
      if (file) reader.readAsDataURL(file);
    }
  }
}
</script>
<style lang="scss" scoped>
.dev-img{
    padding: 10px 15px;
    display: flex;
    align-items: flex-start;
    position: relative;
    &::before{
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        height: 1px;
        border-top: 1px solid #D9D9D9;
        transform: scaleY(0.5);
        left: 15px;
    }
    .choose-img{
      display: inline-block;
      height :4rem;
      width: 4rem;
      position: relative;  
      background-size: cover;
      background-position: center;  
      .upload{
          height: 100%;
          width: 100%;
          opacity: 0;
          z-index: 2;
          position: absolute;
      }
    }
    label{
        width: 5rem;
        display: inline-block;
    }   
}
.lend-btn{
  margin-top: 0.5rem !important;
  width: 90%;
  overflow: hidden; 
}
</style>

