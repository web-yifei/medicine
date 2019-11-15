<template>
  <div>
      <mt-header fixed title="问诊"></mt-header>
      <swiper
        :options="options"
        v-if="looplist.length"
        style="margin-top: .5rem;
    width: 100%; background:pink;"
    >
      <div class="swiper-slide" v-for="(data, index) in looplist" :key="index">
        <!-- <img :src="data.appImg" /> -->
        <img :src="data.pic" alt="" class="img" />
      </div>
    </swiper>

    <DignoseBar></DignoseBar>

    <div class="line"></div>

    <Tuijian></Tuijian>
  </div>
</template>
<script>
import swiper from "@/components/swiper";
import { Header } from "mint-ui";
import Vue from "vue";
import Axios from "axios";
import DignoseBar from "@/views/Dignose/DignoseBar";
import Tuijian from "@/views/Dignose/Tuijian";
import {Indicator} from 'mint-ui'
Vue.component(Header.name, Header);
export default {
  data() {
    return {
      looplist: [],
      options: {
        // direction: 'vertical',
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  components: {
    swiper,
    DignoseBar,
    Tuijian
  },
    mounted(){
      Indicator.open({
          text: "加载中...",
          spinnerType: "fading-circle"
      });
      Axios.get('/api/docSwiper/swiper').then(res => {
          let {pic} = res.data
          this.looplist = pic;
          Indicator.close();
      })
    },

  // handleClick(id){

  // }
};
</script>
<style lang="scss" scoped>
.img {
  width: 100%;
}
header {
  background: #c0a322;
  width: 100%;
  font-size: 0.18rem;
  height: 0.5rem;
}

.line {
  left: 11px;
  top: 437px;

  border: 1px solid rgba(187, 187, 187, 1);
  height: 1px;
  margin-left: 0.1rem;
  margin-right: 0.1rem;
}
.recommend {
  width: 100%;
  height: 20px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
  text-align: center;
  font-family: PingFangSC-regular;
  margin: 0.27rem 0rem 0.2rem;
  span {
    display: inline-block;
    width: 0.59rem;
    height: 0.01rem;
    background: #bbbbbb;
    vertical-align: middle;
    margin: 0rem 0.05rem;
  }
}

main {
  width: 100%;
  height: 100%;
  margin-bottom: 0.5rem;
  ul {
    display: flex;

    div:first-child {
      margin-left: 0.05rem;
    }

    div {
      background: pink;
      width: 33.333%;
      height: 175px;
      line-height: 20px;
      text-align: center;
      border: 1px solid rgba(187, 187, 187, 1);
      margin: 0 0.05rem 0 0;
      li {
        width: 100%;
        img {
          display: block;
          width: 100%;
          height: 0.8rem;
          background: lightblue;
        }
      }
    }
  }
}
</style>
