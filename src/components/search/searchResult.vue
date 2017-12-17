
<template>
  <div class="search">
    <search
    @on-focus="clickSearch"
    position="absolute"
    auto-scroll-to-top top="46px"
    ref="search"></search>   
    <div v-for="item in searchList.content" class="weui-panel weui-panel_access">
      <div  class="weui-panel__bd">
        <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
          <div class="weui-media-box__hd">
            <img class="weui-media-box__thumb" :src="item.pic_url">
          </div>
          <div class="weui-media-box__bd list_item item_info">
              <h4 class="weui-media-box__title">{{item.name}}</h4>
              <p class="weui-media-box__desc"> {{item.soc_name}}</p>
              <p class="weui-media-box__desc"><span class="count">{{item.count}}</span>个剩余</p>
          </div>
          <x-button @click.native="toDetail(item.count > 0 && item.status ? true : false, item.id)" mini plain type="primary" >
            {{item.count > 0 && item.status ? '可借' : '已借出'}}
          </x-button>
        </a>
      </div>     
    </div> 
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import { Search, XButton} from 'vux';

export default {
  components: {
    Search,
    XButton
  },
  data () {
    return {
      key: this.$route.params.key,
    }
  },
  computed: {
    ...mapState(['searchList']),
  },
  created() {
    this.getSearchList({key: this.key})
  },
  methods: {
    ...mapActions(['getSearchList']),
    clickSearch() {
      this.$router.replace({name: 'search'})
    },
    toDetail(status, id) {
      this.$router.push({name: 'devDetail', params: {type: status ? 'canLend' : 'rejectLend',dev_id: id}})
    }
  }
}


</script>
<style lang="scss" scope>

  .search{
    
  }
  .vux-search-box, .vux-search-fixed{
    position: relative !important;
    top: 0px !important;   
    .vux-search_show{
      color: #666;
    }
  }
  .weui-media-box__hd{
    height: 60px !important;
    width: 60px;
  }
  .clear{
    position: relative;
    top: 0px;
    text-align: center;
    padding: 6px;
    width: 100%;
    background-color: #fff;
    color: #666;
  }
  .count{
    color: #189f17;
       font-weight: bold;
       font-size: 140%;
       margin-right: 4px;
  }

</style>