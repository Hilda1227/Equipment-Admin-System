<template>
  <div class = "search">

    <search
      @on-focus = "clickSearch"
      position="absolute"
      auto-scroll-to-top top = "46px"
      ref="search">
    </search>   

    <div v-for = "item in searchList" class = "weui-panel weui-panel_access">
      <div  class = "weui-panel__bd">
        <a href="javascript:void(0);" class = "weui-media-box weui-media-box_appmsg">
          <div class = "weui-media-box__hd">
            <div class = "preview" :style = "{backgroundImage: 'url(' + item.pic_url + ')'}"></div>
          </div>
          <div class = "weui-media-box__bd list_item item_info">
              <h4 class = "weui-media-box__title">{{ item.name }}</h4>
              <p class = "weui-media-box__desc"> {{ item.soc_name }}</p>
              <p class = "weui-media-box__desc"><span class = "count">{{ item.surplus }}</span>个剩余</p>
          </div>
          <x-button @click.native="() => toDetail(item.surplus > 0 ? 'canLend' : 'hasLend', item.id)" mini plain type="primary" >
            {{ item.surplus > 0 ? '可借' : '已借出' }}
          </x-button>
        </a>
      </div>           
    </div>
    <p v-if = "!searchList.length" class = "result-0">未查询到您需要的设备~</p>   
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
    toDetail(type, id) {
      this.$router.push({name: 'devDetail', params: {type, equ_id: id }})
    }
  }
}
</script>

<style lang="scss" scope>
.search{
  position: relative;
}
.vux-search-box, .vux-search-fixed{
  position: relative !important;
  top: 0px !important;   
  .vux-search_show{
    color: #666;
  }
}
.preview{
  width: 4rem;
  height: 4rem;
  background-size: cover;
  background-position: center;
  margin-right: 1rem;
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
.result-0{
  display: inline-block;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 15rem;
  text-align: center;
  color: #a4a4a6;
}
</style>