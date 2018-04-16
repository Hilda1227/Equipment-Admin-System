<template>
  <div class="dev-list-panel">
      <div class="dev-item-box" v-for="item in list" @click="goto(item.url)">
        <div class="dev-item">
            <div class="dev-item-img" :style = "{backgroundImage: 'url(' + item.pic_url + ')'}"></div>

            <ul class="dev-item-info">
              <li class="dev-item-info-title">
                <span class="dev-item-info-left">{{item.equ_name}}</span>
                <span class="dev-item-info-right">{{item.state}}</span>
                </li>
              <li>
                <span class="dev-item-info-left">社团名称</span>
                <span class="dev-item-info-right">{{item.in_soc_name}}</span>
                </li>
              <li>
                <span class="dev-item-info-left">借用日期</span>
                <span class="dev-item-info-right">{{item.start_datetime}}</span>
                </li>
              <li>
                <span class="dev-item-info-left">归还日期</span>
                <span class="dev-item-info-right">{{item.end_date}}</span>
                </li>
            </ul>
            <img id="fresh" src="../../assets/img/refresh.png"
              @click.stop="freshCode({br_id: item.br_id})" 
              v-if="$route.name === 'borrowing'"/>
         </div> 
      </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  props: ['list'],
  methods: {
    ...mapActions(['freshCode']),
    goto(url) {
      this.$router.push(url);
    },
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
        height: 70px;
        flex-shrink: 0;
        background-size: cover;
        background-position: center;
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
            margin-right: 1rem;
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

