
<template>
  <div class="search">
    <search
    @on-focus="clickSearch"
    position="absolute"
    auto-scroll-to-top top="46px"
    ref="search"></search>   
  </div> 
  <!-- <div v-for="item in indexList.content" class="weui-panel weui-panel_access">
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
    </div>  -->
</template>

<script>
import { Search} from 'vux'

export default {
  components: {
    Search,
  },
  data () {
    return {
      key: this.$route.params.key,
    }
  },
  methods: {
    clickSearch() {
      this.$router.push({name: 'search'})
    },
  }
}


</script>
<style lang="scss" scope>
  .vux-search-box, .vux-search-fixed{
    position: relative !important;
    top: 0px !important;   
    .vux-search_show{
      color: #666;
    }
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

</style>