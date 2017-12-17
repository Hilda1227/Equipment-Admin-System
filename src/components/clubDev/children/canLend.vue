<template>
  <div class=" wrap can-lend">
    <panel :list = "list" type = "5"></panel>
    <div class="add-dev">
      <img src="../../../assets/img/add.png"></img>
      <x-button @click.native="$router.push({name: 'editorDev', params:{type: 'add', dev_id:'add'}})" mini plain type="primary">添加设备</x-button>
    </div>
  </div>
</template>
<script>
import { Panel, XButton } from 'vux';
import { mapActions, mapState } from 'vuex';
import devList from '../../common/devList.vue';

function list (equ_list) {
  let list = [];
  for(let i = 0; i < equ_list.length; i++){
    let equ = equ_list[i];
    list.push({
      src: equ.pic_url,
      title: equ.name,
      desc: `库存<span class='count'>${equ.count}</span>`,
      url: `/editorDev/modify/${equ.id}`
    })
  }
  return list;
}

export default {
  components: {
    Panel,
    XButton,
    devList
  },
  data() {
    return {
      list: [],
    }
  },
  computed: {
    ...mapState(['canLend'])
  },
  created() {
    this.getClubDev({key: 1})
    .then((equ_list) => {
      this.list = list(equ_list);
    })
  },
  methods: {
    ...mapActions(['getClubDev']),
  }
}
</script>
<style lang="scss">
.can-lend{
  .count{
    color: #189f17 !important;
    font-weight: bold !important;
    font-size: 120% !important;
    margin-left: 4px !important; 
  }
  .add-dev{
    width:100%;
    height: 90px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: #fff;
    img{
      width: 60px;
      height: 60px;
      margin-left: 15px;
    }
    .weui-btn_mini{
      margin-left: 15px;
      padding:0 0.3rem;
    }    
  }
}



</style>

