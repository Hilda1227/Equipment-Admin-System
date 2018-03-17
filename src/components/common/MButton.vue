<template>
  <button 
    :type = 'type || "submit"' 
    :form = 'form'
    :style="{marginTop: marginTop}"
  >
      {{ text }}
  </button>
</template>

<script>
export default {
  props: ['type', 'text', 'form','marginTop'],
  methods: {
      submit (e) {
          console.log("zi")
        // e.preventDefault();
        this.$emit('submit')
      }
  }
}

</script>

<style lang="scss" scoped>
button{
    content: " ";
    width: 95%;
    height: 2.3rem;
    background: #09bb07;
    border-radius: 10px;
    color: #fff;
    border: none;
    margin-top: 1.5rem;
    outline: 0;
}
</style>





