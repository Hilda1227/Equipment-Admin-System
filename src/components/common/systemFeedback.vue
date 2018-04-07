<template>
  <div class = " wrap feedback">
    <form id = "feed_back" @submit.prevent = "submit">
      <m-textarea 
        v-model = "val" 
        placeholder = "请在此写下您对设备管理系统的建议或疑问" 
        :maxlength = "100" 
        :rows = '10'
        :left-width = "0"
        :required = "true"
        > 
      </m-textarea>   
      <m-input label-text = "联系电话" placeholder = "方便我们联系你" left-width="25%" pattern = '^0{0,1}(13[0-9]|15[7-9]|153|156|18[7-9])[0-9]{8}$' v-model = "tel"></m-input>
    </form>
    <m-button type = 'submit' text = '提交' form = 'feed_back'></m-button> 
  </div>
</template>

<script>
import MInput from './MInput.vue';
import MButton from './MButton.vue';
import MTextarea from './MTextarea.vue';
import { mapActions, mapState } from 'vuex';
import { debounce } from '../../util.js';
export default {
  components: {
    MButton,   
    MTextarea,
    MInput,
  },
  data() {
    return {
      val: '',
      tel: ''
    }
  },
  methods: {
    ...mapActions(['systemFeedback']),
    submit () {
      let fn = debounce(() => {
          this.systemFeedback({
            body: this.val,
            tel: this.tel
          })
        }, 2000, true) 
      fn();
     }
  }
}
</script>

<style lang="scss" scoped>
.weui-btn,.weui-btn_primary{
  margin-top: 4rem !important;
}

</style>

