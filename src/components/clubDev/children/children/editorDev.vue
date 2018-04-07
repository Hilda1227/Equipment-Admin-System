<template>
  <div class = "wrap editor-dev">
    <form  @submit.prevent = 'click' id = "editor-equ">
      <m-input label-text = '社团设备' type = "text" placeholder = "完整名称" :required = "true" v-model = "equ.name" ></m-input>

      <m-input label-text = "设备型号" placeholder = "选填" v-model = "equ.model"></m-input>

      <m-input label-text = "设备数量" type = "number" placeholder = "可借用设备数量" :required = "true" v-model = "equ.count"></m-input>

      <m-input label-text = "负责人" type = "text" placeholder = "负责人姓名" :required = "true" v-model = "equ.resp_person"></m-input>

      <m-input label-text = "手机" type = 'tel'  placeholder = "输入手机" :required = "true" v-model = "equ.phone_num"></m-input>

      <m-input label-text = "QQ" type = 'number' placeholder = "输入QQ" :required = "true" v-model = "equ.qq_num"></m-input>

      <m-input label-text = "存放地点" type = "text" placeholder = "存放地点" :required = "true" v-model = "equ.place"></m-input>

      <m-textarea label-text = "注意事项"  :required = 'true' :rows = '3' v-model = "equ.notice" :maxlength = "100"></m-textarea>
      <div class = "dev-img">
          <label for = "upload">设备图片</label >
          <div class="choose-img" 
            :style = "{backgroundImage: `url(${equ.pic_url ? equ.pic_url : require('../../../../assets/img/add_dev.png')})`}">
            <input @change = "chooseImg()" class="upload" type = "file"></input>
          </div>
      </div>
    </form>
    <x-switch title = "设备不可借" v-model = "equ.status"></x-switch>
    <m-button type = 'submit' text = '保存' form = 'editor-equ' marginTop = '0.5rem'></m-button>
  </div>
</template>
<script>
import { XButton, Group, XTextarea, XSwitch} from 'vux';
import MInput from '../../../common/MInput.vue';
import MButton from '../../../common/MButton.vue';
import MTextarea from '../../../common/MTextarea.vue';
import { mapActions, mapState } from 'vuex';
import { debounce } from '../../../../util.js';
export default {
  components: {
    XButton,
    MInput,
    MButton,
    Group,
    MTextarea,
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
        notice: '',      
      }
    }
  },
  computed: {
    ...mapState(['devDetail'])
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
    },
    click() {
      let submit = debounce((e) => {
        
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
      submit();
    }
  }
}
</script>

<style lang="scss" scoped>
.editor-dev{
  position: relative;
  // display: flex;
  // align-items: center;
  // flex-direction: column;
}
form{
  width: 100%;
  background: #fff;
  margin-top: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.dev-img{
    padding-bottom: 10px;
    padding-top: 10px;
    display: flex;
    align-items: flex-start;
    position: relative;
    border-top: 1px solid #D9D9D9;
    width: 95%;
    label{
      width: 30%;
      display: inline-block;
    }
    &::before{
        content: " ";
        position: absolute;
        top: 0;
        right: 0;
        height: 1px;
        
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
}

</style>

