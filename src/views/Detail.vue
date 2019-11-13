<template>
    <div>
        <!-- 详情
        <button @click="handleClick">加入购物车</button>
        <router-link to="/classify"><button>返回</button></router-link> -->
        <router-link to="/classify" tag="div" class="detail">back</router-link>
        <mt-header fixed title="商品详情"></mt-header>
        <swiper :options="options" v-if="looplist.length" style="margin-top: .54rem;" >
      <div class="swiper-slide" v-for="data in looplist" :key="data.id">
        <!-- <img :src="data.appImg" /> -->{{data}}
      </div>
    </swiper>
      <p class="discount">【限时优惠】 长白山人参东北吉林特产 <span>￥99</span></p>
      <ul>
        <li>【品 牌】 大人参</li>
        <li>【产 地】 长白山</li>
        <li>【净含量】 约250g(8-10条)</li>
        <li>【注意事项】 约250g(8-10条)</li>
        <li>【注意事项】 约250g(8-10条)</li>
        <li>【注意事项】 约250g(8-10条)</li>
        <li>【注意事项】 约250g(8-10条)</li>
      </ul>
      <img src="https://p2.maiyaole.com/img/item/201904/22/380_20190422130654430.jpg" alt="">
      <img src="https://p2.maiyaole.com/img/item/201904/22/380_20190422130654430.jpg" alt="">
      <img src="https://p2.maiyaole.com/img/item/201904/22/380_20190422130654430.jpg" alt="">
      <img src="https://p2.maiyaole.com/img/item/201904/22/380_20190422130654430.jpg" alt="">
      <h3>用户评论:</h3>
      <div class="pinglun">
        <img src="https://p2.maiyaole.com/img/category/201806/1528880258288.png?60777" alt=""> <span>何仙姑</span>
        <p>大补元气、复脉固脱、补脾益肺、安神益智</p>
      </div>
       <div class="pinglun">
        <img src="https://p2.maiyaole.com/img/category/201806/1528880258288.png?60777" alt=""> <span>何仙姑</span>
        <p>大补元气、复脉固脱、补脾益肺、安神益智</p>
      </div>
    </div>
</template>
<script>
import swiper from '@/components/swiper'
import { Header } from 'mint-ui';
export default {
  beforeMount() {
    this.$store.commit("hideTabbar");
  },
  beforeDestroy() {
    this.$store.commit("showTabbar");
  },
  components: {
    swiper
  },
  data() {
    return {
      looplist:['1','2','3','4'],

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
  methods: {
    handleClick () {
      router.push({ path: `/cart/${userId}` })
    }
  },
  
}
</script>
<style lang="scss" scoped>
  header{
    background: white;
    color: black;
    border: 1px solid #ccc;
    width: 100%;
    font-size: 0.18rem;
    height: .54rem;
    position: relative;
  }
  .detail{
    position: absolute;
    top: 0.2rem;
    z-index: 99
  }
  .swiper-slide{
    width:100%;
    height: 1.51rem;
  }
  /deep/.swiper-pagination{
    text-align: center;
}
.discount{
  position: relative;
  height: .35rem;
  line-height: .35rem;
  margin-bottom: .2rem;
  span{
    position: absolute;
    right:0.2rem;
    color: red;
    font-weight: bold
  }
}
li{
  float: left;
  height:.4rem;
  line-height: .4rem;
  font-weight: bold;
  margin-right: .2rem
}
h3{
  height: .4rem;
  line-height: .4rem;
  border-bottom:1px solid #ccc 
}
.pinglun{
  height:1.5rem;
  border-bottom:1px solid #ccc ;
  position: relative;
img{
  padding: 0.1rem;
  width: .7rem;
}
span{
   position: absolute;
  left: 0.7rem;
  top: .2rem
}
p{
  padding: .2rem;
  height:1rem
}
}

</style>