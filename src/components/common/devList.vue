<template>
  <div class="dev-list-panel">
      <div class="dev-item-box" v-for="item in list" @click="goto(item.url)">
         <div class="dev-item">
           <img class="dev-item-img" :src="item.src"/>
           <ul class="dev-item-info">
              <li class="dev-item-info-title"><span class="dev-item-info-left">{{item.devName}}</span><span class="dev-item-info-right">{{item.state}}</span></li>
              <li><span class="dev-item-info-left">社团名称</span><span class="dev-item-info-right">{{item.clubName}}</span></li>
              <li><span class="dev-item-info-left">借用日期</span><span class="dev-item-info-right">{{item.borrowDate}}</span></li>
              <li><span class="dev-item-info-left">归还日期</span><span class="dev-item-info-right">{{item.returnDate}}</span></li>
           </ul>
           <img @click.stop="fresh()" v-if="$route.name === 'borrowing'" id="fresh" src="../../assets/img/refresh.png">
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
.dev-list-panel{
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
      height: 72px;
      position: absolute;
      margin: auto;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      display: flex;
      justify-content: flex-start;
      .dev-item-img{
        width: 70px;
        margin-right: 15px;
      }
      .dev-item-info{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        font-size: 0.8rem;
        color: #a9a9a9;
        .dev-item-info-title{
          color: #000;
          font-size: 1rem;
          .dev-item-info-left{
            margin-right: 3rem;
          }
        }
        .dev-item-info-left{
          margin-right: 1rem;
        }
      }
      
    }
  }
}
#fresh{
  width: 2rem;
  height: 2rem; 
  position: absolute;
  right: 0;
  bottom: 0;
  :hover{
    opacity: 0.8;
  }
}
</style>

