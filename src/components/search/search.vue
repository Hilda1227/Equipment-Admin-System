<template>
  <div class="search">
    <search
    @on-result-click="resultClick"
    @on-change="getResult(value)"
    :results="results"
    v-model="value"
    position="absolute"
    auto-scroll-to-top top="46px"
    @on-focus="onFocus"
    @on-cancel="onCancel"
    ref="search"></search>
    <div class="clear" v-show="results.length">清除搜索历史</div>
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
    resultClick (value) {
      console.log(value)
      // console.log(localStorage.getItem('searchResult'))
      let record = JSON.parse(localStorage.getItem('searchResult')).push({key: value});
      localStorage.setItem("searchResult", JSON.stringify(record));
      this.$router.push({name: 'searchResult', params:{key: value}})
    },
    getResult (val) {
      this.results = getResult (val);
       console.log(this.results)
    },
   
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  },

}

function getResult (val) {
  let rs = [], reg = new RegExp(val, 'g');
  if(!localStorage.searchResult){  
    localStorage.setItem("searchResult", JSON.stringify([]));
  }
  // console.log(localStorage.getItem('searchResult'))
  rs.push({key: val});
  JSON.parse(localStorage.getItem('searchResult')).every((item) => {
    if(reg.test(item.key)) rs.push(item)
  })
console.log(rs);
  return rs
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