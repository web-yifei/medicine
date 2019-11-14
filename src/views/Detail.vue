<template>
  <body>
    <div>
      <!-- 详情
        <button @click="handleClick">加入购物车</button>
        <router-link to="/classify"><button>返回</button></router-link> -->
      <mt-header title="人参|商品详情">
        <router-link to="/classify" slot="left">
          <mt-button icon="back"></mt-button>
        </router-link>
      </mt-header>

      <swiper :options="options" v-if="looplist.length">
        <div class="swiper-slide" v-for="data in looplist" :key="data.id">
          <!-- <img :src="data.appImg" /> -->{{ data }}
        </div>
      </swiper>
      <section>
        <ul>
          <li>
            <div>￥99</div>
          </li>
          <li>
            <div>[限时优惠] 长白山人参东北吉林特产</div>
            <div>Changbai mountain ginseng northeast jilin specialty</div>
          </li>
          <li>
            <div>
              <p>商品详情<i></i></p>

              <p>药材形状:</p>
              <span
                >啧啧啧啧啧啧做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做做</span
              >
              <p>性味</p>
              <span
                >开发技术大闺女觉得发多少胜读十年书女警加父史蒂芬霍金收到回复会计师少时诵诗书所所所所所所所所所</span
              >
              <p>用量</p>
              <span
                >计划分开始放假的室内空间富家大室客户反馈副书记的看法和肯定健身房发送到付款计划少时诵诗书所所所所所所所所所</span
              >
              <p>储藏方式</p>
              <span
                >发你的苏菲的世界法律的及时了解到了数据绿地少时诵诗书所所所所所所所所所</span
              >
              <p>产地</p>
              <span
                >但是厉害把大家来看V领空吗把酷酷的就是覅角度讲法律的数据库抵抗力差
                少时诵诗书所所所所所所所所所</span
              >
            </div>
          </li>
        </ul>
      </section>
      <main>
        <h3>用户评论:</h3>
        <div class="big">
          <div class="pinglun">
            <span>何仙姑</span>
            <p>大补元气、复脉固脱、补脾益肺、安神益智</p>
          </div>
          <div class="pinglun">
            <span>何仙姑</span>
            <p>大补元气、复脉固脱、补脾益肺、安神益智</p>
          </div>
          <div class="pinglun">
            <span>何仙姑</span>
            <p>大补元气、复脉固脱、补脾益肺、安神益智</p>
          </div>
          <div class="pinglun">
            <span>何仙姑</span>
            <p>大补元气、复脉固脱、补脾益肺、安神益智</p>
          </div>
          <div class="pinglun">
            <span>何仙姑</span>
            <p>大补元气、复脉固脱、补脾益肺、安神益智</p>
          </div>
          <div class="pinglun">
            <span>何仙姑</span>
            <p>
              大补元气、复脉固脱、补脾益肺、安神益智大补元气、复脉固脱、补脾益肺、安神益智大补元气、复脉固脱、补脾益肺、安神益智大补元气、复脉固脱、补脾益肺、安神益智大补元气、复脉固脱、补脾益肺、安神益智大补元气、复脉固脱、补脾益肺、安神益智
            </p>
          </div>
        </div>
      </main>
      <aside>
        <router-link to="/cart/${userId}" tag="button">加入购物车</router-link>
        <router-link to="/cart/${userId}" tag="button">立刻购买</router-link>
      </aside>
    </div>
  </body>
</template>
<script>
import swiper from "@/components/swiper";
import { Header } from "mint-ui";
import Vue from "vue";
export default {
  mounted() {
    this.$store.commit("hideTabbar");
    console.log("detail beforeCreate");
  },
  destroyed() {
    this.$store.commit("showTabbar");
    console.log("detail destoryed");
  },
  components: {
    swiper
  },
  data() {
    return {
      looplist: ["1", "2", "3", "4"],

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
  methods: {
    handleClick() {
      router.push({ path: `/cart/${userId}` });
    }
  }
};
</script>
<style lang="scss" scoped>
header {
  background: white;
  color: black;
  border: 1px solid #ccc;
  width: 100%;
  font-size: 0.18rem;
  height: 0.54rem;
  position: relative;
}
.swiper-slide {
  width: 100%;
  height: 1.51rem;
  background: lightblue;
}
/deep/.swiper-pagination {
  text-align: center;
}
body {
  background: #f7f5f5;
  height: 100%;
  margin-bottom: 0.5rem;
}
ul {
  width: 100%;
  // background: lightpink;
  li:first-child {
    font-size: 0.25rem;
    color: rgb(255, 0, 0);
    font-weight: bold;
    margin-bottom: 0rem;
  }
  li:nth-child(2) {
    font-weight: bold;
    div:nth-child(1) {
      font-size: 0.18rem;
    }
  }
  li:nth-child(3) {
    div {
      p {
        padding-top: 0.2rem;
        font-weight: 700;
        border-bottom: #ccc;
        line-height: 0.2rem;
        i {
          width: 0.4rem;
          height: 0.02rem;
          background: #c0a322;
          display: block;
          margin: auto;
        }
      }

      p:nth-child(1) {
        text-align: center;
        border-bottom: 1px solid #cccccc;
        display: block;
      }
      p:nth-child(2) {
        width: 100%;
      }
    }
  }
  li {
    width: 100%;
    // background: lightgoldenrodyellow;
    margin-bottom: 0.2rem;
    background: #ffffff;
    padding-left: 0.1rem;
    padding-right: 0.1rem;
  }
}
main {
  h3{
    line-height: .35rem;
  }
  padding-left: 0.1rem;
  padding-right: 0.1rem;
  height: 100%;
  background: #ffffff;
  .big {
    border: 0.01rem solid #cccccc;
    .pinglun {
      border-bottom: 0.01rem solid #cccccc;
      margin-left: 0.1rem;
      margin-right: 0.1rem;
      margin-bottom: 0.1rem;
      span {
        line-height: 0.3rem;
        font-weight: 1000;
      }
      p {
        line-height: 0.22rem;
      }
    }
  }
}
aside {
  position: fixed;
  bottom: 0;
  background: #ffffff;
  width: 100%;
  height: 0.5rem;
  display: flex;
  button:nth-child(1){
    border-right:.02rem solid #ffffff;
  }
  button {
    background: rgb(250, 90, 90);
    color: #ffffff;
    flex: 1;
    text-align: center;
    font-size: 0.2rem;
    line-height: 0.5rem;
    outline: none; 
    border: 1px solid transparent;
    border-radius: .05rem;
  }
}
</style>
