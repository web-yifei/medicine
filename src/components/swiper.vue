<template>
       <div class="swiper-container cyf" >
              <div class="swiper-wrapper">
                <slot></slot>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
          </div>
</template>
<script>
import Swiper from 'swiper'//swiper js
import 'swiper/css/swiper.min.css'//引入css
export default {
    mounted() {
    /* eslint-disable no-new */
    // console.log(this.classname);
    // console.log(this.options);
    
     new Swiper(this.classname?'.'+this.classname:'.cyf',this.options)
    },
    props:['options','classname']
}
</script>
<style lang="scss" scoped>
    .swiper-container{
 
        img{
            height: 100%
        }
    }
    .swiper-pagination{
        text-align: right;
    }
</style>