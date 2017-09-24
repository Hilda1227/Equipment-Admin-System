<template>
  <div class=" wrap feedback">
      <ul class="fill-feedback">
        <li class="head">xxx社团</li>
        <li class="content" :readonly="type==='see'"><x-textarea :height="200"> </x-textarea></li>
        <li class="tail">2017.x.x.  xxx社团</li>
      </ul>
      <x-button v-if="type === 'fill'" type="primary">提交</x-button> 
  </div>
</template>
<script>
import { XButton, XTextarea} from 'vux'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    XButton,   
    XTextarea,
  },
  data() {
    return {
      type: this.$route.params.type,
    }
  },
  created() {
     
  },
  methods: {
   
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

