<template>
  <body>
    <div v-if="info">
      <!-- 详情
        <button @click="handleClick">加入购物车</button>
        <router-link to="/classify"><button>返回</button></router-link> -->
      <mt-header title="商品详情">
        <router-link to slot="left">
          <mt-button icon="back" @click="$router.go(-1)"></mt-button>
        </router-link>
      </mt-header>

      <swiper :options="options" v-if="looplist.length">
        <div class="swiper-slide" v-for="data in looplist" :key="data._id">
           <img :src="data.pic" />
        </div>
      </swiper>
      <section>
        <ul>
          <li>
            <div>{{info.price}}</div>
          </li>
          <li>
            <div>[限时优惠] {{info.shop_name}}</div>
            <div>{{info.eName}}</div>
          </li>
          <li>
            <div>
              <p>商品详情<i></i></p>
              <p>药材形状:</p>
              <span>{{info.shape}}</span>
              <p>性味:</p>
              <span>{{info.note}}</span>
              <p>用量:</p>
              <span>一次{{info.weight}}</span>
              <p>储藏方式:</p>
              <span>{{info.store}}</span>
              <p>产地:</p>
              <span>{{info.producingArea}}</span>
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
        <button @click="cartClick()">加入购物车</button>
        <button @click="buyClick()">立刻购买</button>
      </aside>
    </div>
  </body>
</template>
<script>
import swiper from "@/components/swiper";
import Axios from 'axios'
import {Indicator} from 'mint-ui'
import { MessageBox } from 'mint-ui'
export default {
  mounted() {
      Indicator.open({
          text: "加载中...",
          spinnerType: "fading-circle"
      });
    this.$store.commit("hideTabbar");
    console.log(this.$route.params.shopid)
    Axios.get("/api/shop/shopDetail",{params:{id:this.$route.params.shopid}}).then(res => {
        this.info = res.data[0]
        console.log(this.info)
        Indicator.close()
    })
      Axios.get("/api/shop/shopSwiper",{params:{id:this.$route.params.shopid}}).then(res => {
          console.log(res.data,4565)
          this.looplist = res.data
      })
  },
  destroyed() {
    this.$store.commit("showTabbar");
  },
  components: {
    swiper
  },
  data() {
    return {
      looplist: [],
        info:"",
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
    },
      cartClick(){
          if (!localStorage.getItem("token")){
              MessageBox.alert('请先登录').then(iii=>{
                  localStorage.removeItem("token")
                  this.$router.push('/login')
              })
          }else {
              Axios.get("/api/token/validate",{headers:{Authorization: localStorage.getItem('token')}}).then(res=>{
                  if (res.data.validate === 0){
                      MessageBox.alert('请先登录').then(iii=>{
                          localStorage.removeItem("token")
                          this.$router.push('/login')
                      })
                  }else{
                      console.log(res.data.id)
                      console.log(this.$route.params.shopid)
                      console.log()
                      Axios({
                          url:'/api/cart/insert',
                          method:'post',
                          data:{
                              shopId:this.$route.params.shopid,
                              userId:res.data.id
                          }
                      }).then(res => {
                          if (res.data.insert === 1){
                              MessageBox.alert('添加成功~')
                          }
                      })
                  }
              })
          }
      },
      buyClick(){
        if (!localStorage.getItem("token")){
            MessageBox.alert('请先登录').then(iii=>{
                localStorage.removeItem("token")
                this.$router.push('/login')
            })
        }else {
            Axios.get("/api/token/validate",{headers:{Authorization: localStorage.getItem('token')}}).then(res=>{
                if (res.data.validate === 0){
                    MessageBox.alert('请先登录').then(iii=>{
                        localStorage.removeItem("token")
                        this.$router.push('/login')
                    })
                }else{
                    this.$router.push(`/cart/${res.data.id}`)
                }
            })
        }
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
  height: 2rem;
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
    font-size: 0.20rem;
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
        margin-bottom: .05rem;
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
  height: 40px;
  display: flex;
  button:nth-child(1){
    border-right:.02rem solid #ffffff;
  }
  button {
    background: rgb(250, 90, 90);
    color: #ffffff;
    flex: 1;
    text-align: center;
    font-size: 0.16rem;
    line-height: 0.4rem;
    outline: none;
    border: 1px solid transparent;
    border-radius: .05rem;
  }
}
</style>
