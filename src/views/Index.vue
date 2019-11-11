<template>
    <div>
    <swiper :options= 'options'>
        <div class="swiper-slide" >
            <!-- <img :src="data.img" alt=""> -->
        </div>
    </swiper>
    <router-link to="/city"><button>城市</button></router-link>
    </div>
</template>
<script>
import swiper from '@/components/swiper'
// import Axios from 'axios'
export default {
  data () {
    return {
      looplist: [],
      options: {
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  components:{
      swiper,
  },
  // mounted() {
  //     Axios.get('http://localhost:3000/posts/1').then(res=>{
  //         console.log(res.data);
  //         this.looplist = res.data
  //     })
  // },

}
</script>
