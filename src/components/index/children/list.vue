<template>
  <div class = "list">

    <search @on-focus = "clickSearch"></search> 

    <div v-for="item in indexList.content" class = "weui-panel weui-panel_access">
      <div @click="toDetail(item.id)" class = "weui-panel__bd">
        <a href="javascript:void(0);" class = "weui-media-box weui-media-box_appmsg">

          <div class = "preview" :style = "{backgroundImage: 'url(' + item.pic_url + ')'}"></div>

          <div class = "weui-media-box__bd list_item item_info">
              <h4 class = "weui-media-box__title">{{ item.name }}</h4>
              <p class = "weui-media-box__desc"> {{ item.soc_name }}</p>
              <p class = "weui-media-box__desc"><span class = "count">{{ item.count }}</span>个剩余</p>
          </div>

          <x-button  mini plain type="primary">{{ item.count ? '' : '不' }}可借</x-button>

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
        number: 10
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
    },
    methods: {
      ...mapActions(['getIndexList', 'login']),
      clickSearch() {
        this.$router.push({name: 'search'})
      },
      toDetail(id) {
        this.$router.push({name: 'devDetail', params: {equ_id: id, type: 'canLend'}})
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
.preview{
  width: 5rem;
  height: 5rem;
  background-size: cover;
  background-position: center;
  margin-right: 1rem;
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
