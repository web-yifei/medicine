<template>
       <div class="swiper-container" >
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
     new Swiper('.swiper-container',this.options)
    },
    props:['options']
}
</script>
<style lang="scss" scoped>
    .swiper-container{
        margin-top: .5rem;
        img{
            height: 150%
        }
    }
    .swiper-pagination{
        text-align: right;
    }
</style>