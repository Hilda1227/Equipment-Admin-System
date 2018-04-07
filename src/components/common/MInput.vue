<template>
  <div class="m-input">
    <label>
      <span :style="{width: leftWidth}">
        {{labelText}}
      </span>
      <input :type = 'type'
          :pattern = 'pattern'
          :required = 'required'
          :placeholder = 'placeholder'
          :value = 'value'
          :disabled = 'disabled'
          @input="updateValue($event.target.value)"
          ref = 'input'
      />
    </label>
  </div>
</template>

<script>
export default {
  props: ['type', 'labelText', 'placeholder', 'required', 'pattern', 'value', 'disabled', 'leftWidth'],
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  },
  mounted () {
    if(this.type === 'tel'){
      let el = this.$refs.input;
      el.addEventListener("input", (event) => {
        if (!eval('/' + this.pattern + '/').test(this.value)) {
          el.setCustomValidity("请输入正确的电话号码");
        } else {
          el.setCustomValidity('');
        }
      });
      
      el.form.addEventListener("submit", function (event) {
        if (!eval('/' + this.pattern + '/').test(this.value)) {
          el.setCustomValidity("请输入正确的电话号码");
        } else {
          el.setCustomValidity('');
        }
      }, false);
    }
  }
}
</script>

<style lang="scss" scoped>
.m-input{
  width: 100%;
  height: 2.8rem;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1rem;
  label{
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    width: 95%;
    height: 100%;
    border-top: 1px solid #e5e5e5;
    span{
      text-align: left;
      color: #000;
      line-height: 1.6;
      font-family: -apple-system-font, "Helvetica Neue", sans-serif;
      width: 30%;
    }
    input{
      height: 90%;
      border: none;
      font-family: inherit;
      font-size: inherit;
      flex-grow: 1;
      color:#c8c8c8;
      outline: 0;
      &::placeholder{
        font-family: inherit;
        font-size: inherit;
        width: 70%;
        color:#c8c8c8;
        outline: 0;
      }
      &:disabled{
        background: #fff;
        color: #000;
      }
    }
  }
}
</style>





