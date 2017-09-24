<template>
  <div class=" wrap can-lend-detail">
    <ul class="detail-info">
      <li><div class="dev"><span class="title">设备</span> <div class="dev-info"><span class="value">投影仪</span> <img/></div></div></li>
      <li><span class="title">库存</span><span class="value count">23</span></li>
      <li><span class="title">社团</span><span class="value"></span></li>     
      <li><span class="title">使用地点</span><span class="value"></span></li>
      <li><span class="title">用途</span><span class="value">dd</span></li>
      <li><span class="title">负责人员</span><span class="value"></span></li>
      <li><span class="title">QQ</span><span class="value"></span></li>
      <li><span class="title">手机</span><span class="value"></span></li>
      <li  class="careful"><span class="title">注意事项</span><span class="value"></span></li>
      <li @click="showLendRecord=!showLendRecord"><span class="title">在借记录</span><span class="value"></span></li>
    </ul>
     <div v-transfer-dom calss="record-dialog">
      <x-dialog v-model="showLendRecord">
        <p class="dialog-title">在借记录</p>
        <div class="img-box" style="height:100px;padding:15px 0;overflow:scroll;-webkit-overflow-scrolling:touch;">
          <p v-for="i in 20">{{i}}</p>
        </div>
        <div @click="showLendRecord=false">
          <span class="vux-close"></span>
        </div>
      </x-dialog>
    </div>
     <x-button v-if="type === 'canLend'" class="lend-btn" type="primary">我要借</x-button>
  </div>
</template>
<script>
import { XDialog,  TransferDomDirective as TransferDom, XButton } from 'vux'
import { mapActions, mapState } from 'vuex'
export default {
  directives: {
    TransferDom
  },
  components: {
    XDialog,
    XButton
  },
  data() {
    return {
      dev_id: this.$route.params.dev_id,
      type: this.$route.params.type,
      showLendRecord: false,
    }
  },
  watch: {
    dev_id(to, from) {
      this.getDevDetail(to);
    }
  },
  computed: {
    ...mapState(['devDetail'])
  },
  created() {
      this.getDevDetail(this.dev_id)   
  },
  methods: {
    ...mapActions(['getDevDetail']),
  }
  
}
</script>
<style lang="less" scoped>
  @import '~vux/src/styles/close';
</style>
<style lang="scss" scoped>
.detail-info{
  width: 100%;
  margin-top: 0.9rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  li{
    padding: 0.5rem 0;
    margin-left: 1rem;
    border-bottom: 1px solid #E5E5E5;
    .title{
      font-size: 1rem;
      color: #000;
      width: 30%;
      // height: 100%;
      top: 0px;
      display: inline-block;
    }
    .value{
      color: #bfbfbf;
      padding-top: 0;
    }
    .count{
      font-size: 1.1rem;
      color: #3dc83b;
      font-weight: bold;
    }
    .dev{
      display: flex !important;
      flex-direction: row;
      align-items: flex-start;
      .dev-info{
        display: flex;
        flex-direction: column;       
      }
      img{
        height: 3.5rem;
        width: 3.5rem;
        margin-top: 5px;
      }
    }
  }
}
  .careful{
    display: flex;
    align-items: flex-start;
    .value{
      height: 3rem;
      display: inline-block;
    }
  }
.borrow-info{
  padding: 0.2rem 1rem;
  span{
    margin-right: 1rem;
  }
}
.lend-btn{
  margin-top: 2.5rem;
  width: 90%;
  overflow: hidden;  
}


.weui-dialog{
    border-radius: 8px;
    padding-bottom: 8px;
  }
  .dialog-title {
    line-height: 30px;
    color: #666;
  }
  .img-box {
    height: 350px;
    overflow: hidden;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
</style>

