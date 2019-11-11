<template>
  <div>
    <div class="top">
      <!-- <router-link to="/city">
        <button>城市</button>
      </router-link> -->
      <mt-search  cancel-text="取消" placeholder="输入你想搜索的关键字">
        
      </mt-search>
    </div>
    
    <swiper :options="loopoptions" v-if="looplist.length" style="margin-top: .5rem;" >
      <div class="swiper-slide" v-for="data in looplist" :key="data.id">
        <img :src="data.appImg" />
      </div>
    </swiper>
    
    <asidebar></asidebar>
 
    <h3>今日推荐</h3>
    <swiper :options="navoptions" v-if="swiperlist.length">
           <div class="swiper-slide nav" v-for="(data,index) in swiperlist" :key="index">
                <img :src="data.icon">
          </div>
    </swiper>

    <mainbar></mainbar>
  </div>
</template>
<script>
import swiper from "@/components/swiper";
import asidebar from '@/components/asidebar';
import mainbar from '@/components/mainbar';
import Axios from "axios";
// import { Indicator } from "mint-ui";
import { Search } from "mint-ui";
import Vue from 'vue';
import { Tabbar, TabItem } from 'mint-ui';

Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Search.name, Search);
export default {
  data() {
    return {
      looplist: [],
      swiperlist:[],
      loopoptions: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: ".swiper-pagination"
        }
      },
      navoptions:{
        slidesPerView: 3,
        spaceBetween: 3,
        freeMode: true,
      }
    }
  },
  components: {
    swiper,
    asidebar,
    mainbar,
  },
  mounted() {
    Axios({
      url: "/front/handle/control.do",
      method: "post",
      data: {
        biz_module: "herbBannerService",
        biz_method: "queryBannerList",
        biz_param: { type: 1 },
        version: "3.10.0"
      },
      headers: {
        "mg-client": "H5",
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json;charset=UTF-8"
      }
    }).then(res => {
      // console.log(res.data.biz_result)
      this.looplist = res.data.biz_result.list;
      console.log(this.looplist);
    });

    Axios({
      url:'/front/handle/control.do',
      method:'post',
      data:{
        biz_module: "breedService", biz_method: "hotDrugPropertiesInfo", 
        biz_param: {pn: 1, pSize: 10},
        biz_method: "hotDrugPropertiesInfo",
        biz_module: "breedService",
        biz_param: {pn: 1, pSize: 10},
        version: "3.10.0"
      },
      headers: {
        "mg-client": "H5",
        "X-Requested-With": "XMLHttpRequest",
        "Content-Type": "application/json;charset=UTF-8"
      }
      }).then(res => {
      // console.log(res.data.biz_result)
          this.swiperlist = res.data.biz_result.list;
          console.log(this.swiperlist);
        }
     );
  }
};
</script>
<style lang="scss" scoped>
.top {
  position: fixed;
  left: 0px;
  top: 0px;
  background: white;
  width: 100%;
  height: 50px;
  line-height: 50px;
  z-index: 999;
  text-align: center;
}
.mint-searchbar{
    height: 50px;
}
.mint-search{
  height: 100%;
  overflow: hidden;
}
   .swiper-wrapper{
      margin-top: 0;
    }
    .nav{
        width: 1rem;
        height: 1rem;
      img{
        width: 1rem;
        height: 1rem;

      }
    }
</style>
