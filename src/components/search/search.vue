<template>
  <div class="search">
    <search
    @result-click="resultClick"
    @on-change="getResult"
    :results="results"
    v-model="value"
    position="absolute"
    auto-scroll-to-top top="46px"
    @on-focus="onFocus"
    @on-cancel="onCancel"
    @on-submit="onSubmit"
    ref="search"></search>
    <div class="clear" v-show="results.length">清除搜索历史</div>
  </div>
  
</template>

<script>
import { Search, XButton, Group, Cell} from 'vux'

export default {
  components: {
    Search,
    XButton,
    Group,
    Cell
  },
  mounted() {
     this.$nextTick(this.setFocus)
  },
  methods: {
    setFocus () {
      this.$refs.search.setFocus()
    },
    resultClick (item) {
      window.alert('you click the result item: ' + JSON.stringify(item))
    },
    getResult (val) {
      this.results = val ? getResult(this.value) : []
    },
    onSubmit () {
      this.$refs.search.setBlur()
      this.$vux.toast.show({
        type: 'text',
        position: 'top',
        text: 'on submit'
      })
    },
    onFocus () {
      console.log('on focus')
    },
    onCancel () {
      console.log('on cancel')
    }
  },
  data () {
    return {
      results: [],
      value: ''
    }
  }
}

function getResult (val) {
  let rs = []
  for (let i = 0; i < 20; i++) {
    rs.push({
      title: `${val} result: ${i + 1} `,
      other: i
    })
  }
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