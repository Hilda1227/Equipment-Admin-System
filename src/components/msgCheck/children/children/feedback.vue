<template>
  <div class=" wrap feedback">
      <ul class="fill-feedback">
        <li class="head">{{ feedBack.in_soc_name }}</li>
        <li class="content">
          <x-textarea v-if = "type === 'view'" :height = "200" :readonly = "true" v-model = "feedBack.back_msg"></x-textarea>
          <x-textarea v-else :height="200" v-model =" back_msg"></x-textarea>
        </li>
        <li class="tail">{{ feedBack.confirm_time + ' ' + feedBack.out_soc_name }}</li>
      </ul>
      <x-button 
        v-if = "type === 'fill'" 
        @click.native = "submit"
        type = "primary">提交
      </x-button> 
  </div>
</template>
<script>
import { XButton, XTextarea} from 'vux';
import { mapActions, mapState, mapMutations } from 'vuex';
export default {
  components: {
    XButton,   
    XTextarea,
  },
  data() {
    return {
      type: this.$route.params.type,
      br_id: this.$route.params.br_id,
      back_msg: ''
    }
  },
  computed: {
    ...mapState(['feedBack'])
  },
  created() {
    if(this.type === 'view'){
      this.getFeedBack({ br_id: this.br_id });
    }
  },
  methods: {
   ...mapActions(['getFeedBack']),
   ...mapMutations(['set_feedBack']),
   submit() {
     this.set_feedBack({back_msg:this.back_msg});
     this.$router.push({name: 'lendApplyDetail', params: {br_id: this.br_id}});
   }
  }
}
</script>
<style lang="scss" scoped>
.fill-feedback{
    .head, .tail{
        padding:0.5rem 1rem;
    }
    .content, .tail{
        background-color: #fff;
    }
    .tail{
        text-align: right;
        position: relative;
        &::before{
            content: " ";
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            height: 1px;
            border-top: 1px solid #D9D9D9;
            color: #D9D9D9;
            -webkit-transform-origin: 0 0;
            transform-origin: 0 0;
            -webkit-transform: scaleY(0.5);
            transform: scaleY(0.5);
            left: 15px;
        }
    }
}
</style>

