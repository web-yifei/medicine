<template>
  <div>
    <div class="top">
      <!-- <router-link to="/city">
        <button>城市</button>
      </router-link> -->
      <mt-search  cancel-text="取消" placeholder="输入你想搜索的关键字">
        
      </mt-search>
    </div>
    
    <swiper :options="options" :key="looplist.length">
      <div class="swiper-slide" v-for="data in looplist" :key="data.id">
        <img :src="data.appImg" alt />
      </div>
    </swiper>
    
     <aside>
         <ul>
          <router-link to="" tag="li">
          <div></div>
          <span>热销药材</span>
          </router-link>

        </ul>
     </aside>
    <!-- <router-view></router-view> -->
 
  </div>
</template>
<script>
import swiper from "@/components/swiper";
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
      options: {
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
    swiper
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
aside{
        border-bottom: 3px solid #ccc;
        width: 100%;
        height: .8rem;
        background: white;
        ul{
            display: flex;
            li{
                flex: 1;
                height: .5rem;
                line-height: .5rem;
                text-align: center;
                span{
                    display: block;
                    height: .2rem;
                    line-height: .2rem;
                }
                i{
                    display: block;
                    height: .3rem;
                    line-height: .3rem;
                }
            }
        }
    }
</style>
