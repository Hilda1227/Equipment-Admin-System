<template>
  <div class = "dev-list-panel-2">
    <div class = "dev-item-box" v-for = "item in list" @click = "goto(item.url)">
      <div class = "dev-item">
        <div class = "preview" :style = "{backgroundImage: 'url(' + item.src + ')'}"></div>
        <div class = "info">
            <span class = "equ_name">{{ item.title }}</span>
            <span>库存<span>{{ item.count }}</span></span>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
export default {
  props: ['list'],
  methods: {
    goto(url) {
      this.$router.push(url);
    },
    fresh() {
      console.log("刷新二维码")
    }
  }
}
</script>

<style lang="scss" scoped>
.dev-list-panel-2{
  width: 100%;
  height: auto;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  .dev-item-box{
    height: 100px;
    width: 100%;
    position: relative;
    &::after{
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #E5E5E5;
      color: #E5E5E5;
      transform-origin: 0 0;
      transform: scaleY(0.5);
      left: 15px;
    }
    .dev-item{
      width: 94%;
      height: 62px;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .preview{
        width: 4.5rem;
        height: 4.5rem;
        background-size: cover;
        background-position: center;
        margin-right: 15px;
        flex-shrink: 0;
      }
      .info{
          height: 4.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          align-items: flex-start;
          .count{
              color:#189f17;
          }
      }

  }
}
}
</style>

