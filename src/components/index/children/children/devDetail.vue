<template>
  <div class = " wrap can-lend-detail">
    <ul class = "detail-info">      
      <li>
        <li>
        <span class = "title">社团</span>
        <span class = "value">{{ devDetail.equ_msg.soc_name }}</span>
        </li>     
      <li>
        <div class = "dev">
          <span class  = "title">设备</span>
          <div class = "dev-info">
            <span class = "value">{{ devDetail.equ_msg.name }}</span>
            <div class="preview" :style = "{backgroundImage: 'url(' + devDetail.equ_msg.pic_url + ')'}"></div>
          </div>
        </div>
        </li>     
      <li>
        <span class = "title">库存</span>
        <span class = "value count">{{ devDetail.equ_msg.count }}</span>
        </li>
      <li>
        <span class = "title">存放地点</span>
        <span class = "value">{{ devDetail.equ_msg.place }}</span>
        </li>
      <li class = "careful">
        <span class = "title">注意事项</span>
        <span class = "value"></span>
        </li>
      <li>
        <span class = "title">负责人员</span>
        <span class = "value">{{ devDetail.equ_msg.resp_person }}</span>
        </li>
      <li>
        <span class = "title">QQ</span>
        <span class = "value">{{ devDetail.equ_msg.qq_num }}</span>
        </li>
      <li>
        <span class = "title">手机</span>
        <span class = "value">{{ devDetail.equ_msg.phone_num }}</span>
        </li>      
      <li @click = "showLendRecord = !showLendRecord">
        <span class = "title">在借记录</span>
        <span class = "value" v-if = 'devDetail.br_list.length' :style = "{ color: '#3dc83b' }">
          {{`${devDetail.br_list[0].soc_name} | ${devDetail.br_list[0].count} | ${devDetail.br_list[0].end_date}`}}
        </span>
        <span class = "value" v-else>无</span>
        </li>
    </ul> 

    <div v-transfer-dom class = "record-dialog">
      <x-dialog v-model="showLendRecord">
        <p class = "dialog-title">在借记录</p>
        <div class = "img-box">
          <p v-for="item in devDetail.br_list">
            {{`${item.soc_name}-借了${item.count}-${item.end_date}归还`}}
          </p>
        </div>
        <div @click = "showLendRecord = false">
          <span class = "vux-close"></span>
        </div>
      </x-dialog>
    </div>

    <x-button class = "lend-btn"
      v-if = "this.type === 'canLend'"
      @click.native="$router.push({name: 'fillBorrowApply', params: {equ_id}})" 
      type="primary">我要借
    </x-button>
    <x-button class = "lend-btn"
      v-else  
      disabled = true     
      type="primary">不可借
    </x-button>
  </div>
</template>
<script>
import { XDialog,  TransferDomDirective as TransferDom, XButton } from 'vux';
import { mapActions, mapState } from 'vuex';
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
      equ_id: this.$route.params.equ_id,
      type: this.$route.params.type,
      showLendRecord: false,
    }
  },
  watch: {
    equ_id(to, from) {
      this.getDevDetail(to);
    }
  },
  computed: {
    ...mapState(['devDetail'])
  },
  created() {
      this.getDevDetail(this.equ_id)   
  },
  methods: {
    ...mapActions(['getDevDetail']),
  }
  
}
</script>
<style lang = "less" scoped>
  @import '~vux/src/styles/close';
</style>

<style lang = "scss" scoped>
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
      height: 100%;
      top: 0px;
      display: inline-block;
    }
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
    display: flex ;
    justify-content: flex-start;
    align-items: flex-start;
    .dev-info{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-shrink: 0;
      .preview{
        width: 4.5rem;
        height: 4.5rem;
        background-size: cover;
        background-position: center;
        flex-shrink: 0;
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
    height:100px;
    padding:15px 0;
    overflow:scroll;
    -webkit-overflow-scrolling:touch;
  }
  .vux-close {
    margin-top: 8px;
    margin-bottom: 8px;
  }
}
</style>

