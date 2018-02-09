<template>
  <div class = "list">

    <search @on-focus = "clickSearch"></search> 
    <div ref = "equs" class = "list_wrap">
      <div ref = "slide" class = "wrap">
        <div v-for = "item in indexList" class = "weui-panel weui-panel_access">
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
        <div class="load_more">
          <div v-if = 'is_loading' class = "loading"><span class="icon"></span><span>正在加载...</span></div>
          <span v-if = '!has_next'>--暂无更多--</span>
        </div>
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
        number: 10,
        is_loading: true,
        has_next: true,
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
      this.getIndexList({
        page: this.page, 
        number: this.number
      })
      .then(has_next => {
        if(!has_next) this.has_next = has_next;
        this.is_loading = false; this.page++;
      });
    },
    mounted () {
      
      this.$refs.equs.addEventListener('scroll', this.loadMore, false);
    },
    beforeDestroy () {
      this.$refs.equs.removeEventListener('scroll', this.loadMore);
    },
    methods: {
      ...mapActions(['getIndexList', 'login']),
      clickSearch() {
        this.$router.push({name: 'search'})
      },
      toDetail(id) {
        this.$router.push({
          name: 'devDetail', 
          params: {
            equ_id: id, 
            type: 'canLend'
          }
        })
      },
      loadMore () {
        if((this.$refs.equs.scrollHeight - this.$refs.equs.scrollTop - 20 <= this.$refs.equs.clientHeight)
           && this.has_next
           && !this.is_loading
        ){
          this.is_loading = true;
          this.getIndexList({
            page: this.page, 
            number: this.number
          })
          .then(has_next => {
            if(!has_next) {
              this.has_next = has_next;
              this.is_loading = false;
            }
            this.page++;
          });
        }
      }

    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

.list{
  flex-grow: 1;
  white-space: nowrap;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
a.weui-media-box{
  position: relative !important;
}
.weui-panel__bd{
  height: 7rem !important;
}
.weui-panel{
  flex-shrink: 0;
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
.vux-search-box{
  position: fixed;
}
.list_wrap{
  display: flex;
  flex-grow: 1;
  overflow: auto;
  .wrap{
    display: flex;
    flex-direction: column;  
    width: 100%; 
    position: relative;
    top: 0px;
  }
}
.load_more{
  height: 4rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #9d9c9f;
  flex-shrink: 0;
  .loading{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon{
      height: 1.5rem;
      width: 1.5rem;
      background: url(../../../assets/img/load_more.png);
      background-position: center;
      background-size: cover;
      display: inline-block;
      margin-right: 1rem;
      animation: loading 800ms ease 0ms infinite;
    }
  }
} 

@keyframes loading{
  0%{
    transform: rotateZ(0deg);   
  }
  100%{
    transform: rotateZ(360deg);
  }
}
</style>
