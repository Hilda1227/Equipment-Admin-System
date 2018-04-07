<template>
  <div class = "search">
    <search
      @on-result-click = "resultClick"
      @input.native = "getResult(value)"
      @on-submit = "resultClick"
      @on-focus = "getResult(value)"
      @on-cancel = "$router.push({name: 'list'})"
      :results = "results"
      v-model = "value"
      position = "absolute"
      auto-scroll-to-top top = "46px"
      ref = "search">
    </search>
    <div class = "clear" 
      ref = 'clear'
      v-show = "results.length"
      @click = 'clear'>清除搜索历史
    </div>
  </div> 
</template>
<script>
import { Search} from 'vux'
export default {
  components: {
    Search
  },
  data () {
    return {
      results: [],
      value: ''
    }
  },
  mounted() {
     this.$nextTick(this.setFocus)
  },
  methods: {
    setFocus () {
      this.$refs.search.setFocus()
    },

    resultClick (item) {
      let record = JSON.parse(localStorage.getItem('searchKeys')),
          val = item && item.key || this.value;
          console.log(val)
      if(!record.find(i => i === val)){
        record.push(val);
        localStorage.setItem('searchKeys', JSON.stringify(record));
      }  
      this.$router.replace({ name: 'searchResult', params:{key: val} })
    },

    getResult (val) {
      let rs = [], reg = new RegExp(val);
      if( localStorage.getItem('searchKeys') === null ){
        localStorage.setItem('searchKeys', '[]');
      }
      JSON.parse( localStorage.getItem('searchKeys') ).map((item) => {
        if( reg.test(item) ) rs.push(item);
      })
      rs = rs.map((item) => {
        return{ title: item, key: item };
      })
      this.results = rs;
    },
    
    clear() {
      localStorage.setItem('searchKeys', '[]');
      this.results = [];
    }
  },

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
  &::after{
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #E5E5E5;
    color: #E5E5E5;
    transform-origin: 0 0;
    transform: scaleY(0.5);
    left: 15px;
  }
}
</style>