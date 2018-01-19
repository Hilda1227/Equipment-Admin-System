<template>
  <div class = " wrap can-lend">
    <equList2 :list = "canLend" type = "5"/>
    <div class = "add-dev">
      <img src = "../../../assets/img/add.png"></img>
      <x-button 
        @click.native = "$router.push({name: 'editorDev', params:{type: 'add', dev_id:'add'}})"
        mini plain type = "primary">添加设备
      </x-button>
    </div>
    
  </div>
</template>
<script>
import { Panel, XButton } from 'vux';
import { mapActions, mapGetters } from 'vuex';
import equList2 from '../../common/equList2.vue';
export default {
  components: {
    XButton,
    equList2
  },
  computed: {
    ...mapGetters(['canLend'])
  },
  created() {
    this.getClubDev({key: 1})
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

