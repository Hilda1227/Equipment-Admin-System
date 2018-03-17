<template>
  <div class="m-textarea">
    <label>
      <span :style="{width: leftWidth}">
        {{labelText}}
      </span>
      <textarea :required = 'required'
          :placeholder = 'placeholder'
          :value = 'value'
          :disabled = 'disabled'
          :maxlength = 'maxlength'
          :height = 'height'
          @input="updateValue($event.target.value)"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: ['labelText', 'placeholder', 'required', 'value', 'height', 'disabled', 'maxlength','leftWidth'],
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="scss" scoped>
.m-textarea{
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 1rem;
  label{
    display: inline-flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 95%;
    height: 100%;
    border-top: 1px solid #e5e5e5;
    padding-top: 0.5rem;
    text-align: left;
    color: #000;
    span{
        width: 30%;
    }
    textarea{
      border: none;
      font-family: inherit;
      font-size: inherit;
      flex-grow: 1;
      color:#c8c8c8;
      outline: 0;
      height: 200px;
      font-family: -apple-system-font, "Helvetica Neue", sans-serif;
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





