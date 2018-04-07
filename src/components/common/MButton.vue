<template>
  <div class = 'm-button'>
    <button 
      :type = 'type || "submit"' 
      :form = 'form'
      :style="{marginTop: marginTop}"
    >
        {{ text }}
    </button>
    </div>
</template>

<script>
export default {
  props: ['type', 'text', 'form','marginTop'],
  methods: {
      submit (e) {
        this.$emit('submit')
      }
  },
}

</script>

<style lang="scss" scoped>
.m-button{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
button{
    width: 95%;
    height: 2.4rem;
    font-size: 1rem;
    background: #09bb07;
    border-radius: 10px;
    color: #fff;
    border: none;
    margin-top: 1.5rem;
    outline: 0;
}
</style>





