<template>
  <div class=" wrap feedback">
      <ul class="fill-feedback">
        <li class="head">{{ data.in_soc_name }}</li>
        <li class="content">
          <x-textarea :height="200" :readonly = "type === 'view'" v-model="data.back_msg"></x-textarea>
        </li>
        <li class="tail">{{ data.confirm_time + ' ' + data.out_soc_name }}</li>
      </ul>
      <x-button v-if = "type === 'fill'" type = "primary">提交</x-button> 
  </div>
</template>
<script>
import { XButton, XTextarea} from 'vux';
import { mapActions, mapState } from 'vuex';
export default {
  components: {
    XButton,   
    XTextarea,
  },
  data() {
    return {
      type: this.$route.params.type,
      br_id: this.$route.params.br_id,
      data: this.$route.params.type == 'view' ? this.feedBack : {}
    }
  },
  computed: {
    ...mapState(['feedBack'])
  },
  created() {
    this.getFeedBack({ br_id: this.br_id })
  },
  methods: {
   ...mapActions(['getFeedBack'])
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

