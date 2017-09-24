<template>
  <div class=" wrap add-dev">
    <group>
      <x-input title="社团设备" placeholder="完整名称" required v-model="name"></x-input>
      <x-input title="设备型号" placeholder="选填" v-model="model"></x-input>
      <x-input title="设备数量" placeholder="可借用设备数量" type="number" required v-model="count"></x-input>
      <x-input title="负责人" is-type="china-name" placeholder="负责人姓名" required v-model="person"></x-input>
      <x-input title="手机" is-type="china-mobile" placeholder="输入手机" required v-model="mobile"></x-input>
      <x-input title="QQ" placeholder="输入QQ" required v-model="qq"></x-input>     
      <x-input title="存放地点" placeholder="" required v-model="place"></x-input>
      <x-textarea title="注意事项" :height="30" :max="200" v-model="careful"></x-textarea>
      <div class="dev-img">
          <label for="upload">设备图片</label >
          <div id="choose-img"><img src="../../../../assets/img/add_dev.png"/><input @change="chooseImg()" id="upload" type="file"></input></div>
      </div>
    </group>
    <x-switch title="设备不可借" v-model="cant_lend"></x-switch>
    <x-button @click.native="submit()" class="lend-btn" type="primary">保存</x-button>
  </div>
</template>
<script>
import { XButton, Group, XInput, XTextarea, XSwitch} from 'vux'
import { mapActions, mapState } from 'vuex'
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
      dev_id: this.$route.params.dev_id, 
      name: '',
      model: '',
      count: void 0,
      person: '',    
      mobile: null,
      qq: null,
      place: '',
      careful: '',
      pic_url: '',
      cant_lend: false
    }
  },
  created(){
    console.log(this.type, this.dev_id)
  },
  methods: {
    ...mapActions(['addClubDev']),
    // 选择图片预览
    chooseImg() {
      let upload = document.querySelector('#upload'),
          preview = document.querySelector('img'),
          file = upload.files[0],          
          reader  = new FileReader();

      this.pic_url = upload.value;
      reader.addEventListener("load", function () {
        preview.src = reader.result;
      }, false);
      
      if (file) reader.readAsDataURL(file);
    },
    submit() {
      const info = {name: this.name, model: this.model, count: this.count, person: this.person, mobile: this.mobile, qq: this.qq, place: this.place, careful: this.careful, pic_url: this.pic_url};
      this.addClubDev(info);
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
    #choose-img{
      display: inline-block;
      height :4rem;
      width: 4rem;
      position: relative; 
      img{
        width: 100%;
        height: 100%;
        z-index: 1;
        position: absolute;
      }     
        #upload{
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

