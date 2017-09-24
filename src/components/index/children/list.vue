<template>
  <div class="list">

    <search @on-focus="clickSearch"></search>
    
    <div v-for="item in indexList.content" class="weui-panel weui-panel_access">
      <div class="weui-panel__bd">
        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" :src="item.pic_url">
          </div>
          <div class="weui-media-box__bd list_item item_info">
              <h4 class="weui-media-box__title">{{item.name}}</h4>
              <p class="weui-media-box__desc"> {{item.soc_name}}</p>
              <p class="weui-media-box__desc"><span class="count">{{item.count}}</span>个剩余</p>
          </div>
          <x-button @click.native="toDetail(item.status, item.id)" mini plain type="primary" >{{item.status ? '可借' : '已借出'}}</x-button>
        </a>
      </div>     
    </div> 
    
     
  </div>
</template>
<script>
  import { mapActions, mapState } from 'vuex'
  import { Search, XButton } from 'vux'
  export default {
    data() {
      return {
        page: 1,
        number: 5
      }
    },
    components: {
      Search,
      XButton
    },
    computed: {
      ...mapState(['indexList'])
    },
    created() {
      this.getIndexList({page: this.page, number: this.number})
      // .then(() => {this.indexList.content[1].pic_url="http://img.hb.aicdn.com/9abd7ddf407f32c2273c359ff3327d2bbf02d2536426-56HKXf_sq320"})    
    },
    methods: {
      ...mapActions(['getIndexList', 'login']),
      clickSearch() {
        this.$router.push({name: 'search'})
      },
      toDetail(status, id) {
        this.$router.push({name: status ? 'canLend' : 'rejectLend', params: {dev_id: id}})
      }
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>
.list{
  flex-grow: 1;
  white-space: nowrap;
  position: relative;
  overflow: auto;
}
    a.weui-media-box{
      position: relative !important;
    }
    .weui-panel__bd{
      height: 7rem !important;
    }
    .weui-media-box__hd{
      width: 5rem;
      height: 5rem;
    }
    .item_info{
      height: 5rem;
    }
    p{
      margin-top: 6px;
    }
    .count{
       color: #189f17;
       font-weight: bold;
       font-size: 140%;
       margin-right: 4px;
    }
    .weui-btn{
      position: absolute;
      bottom: 15px;
      right: 15px;
    }
  
</style>
