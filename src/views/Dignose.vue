<template>
    <!-- <div>
        问诊
         <router-link to="/doctors"><button>医生列表</button></router-link>
         <button @click="handleClick">doctor_img</button>
    </div> -->
<div>
<mt-header fixed title="问诊"></mt-header>
    <swiper :options="options" v-if="looplist.length" style="margin-top: .5rem;" >
      <div class="swiper-slide" v-for="data in looplist" :key="data.id">
        <!-- <img :src="data.appImg" /> -->
      </div>
    </swiper>
 </div>
</template>
<script>
import swiper from '@/components/swiper'
import { Header } from 'mint-ui';
import Vue from 'vue'
Vue.component(Header.name, Header);
export default {
  data() {
    return {
            
      looplist: [1,2,3],
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

    }
  },
  components:{
    swiper,
  },
  methods: {
    handleClick () {
      this.router.push({ path: `/doctor/${doctorId}` })
    }

  }
}
</script>
<style lang="scss" scoped>
  header{
    background: #C0A322 ;
    width: 100%;
    font-size: 0.18rem;
    height: .54rem;
  }
</style>