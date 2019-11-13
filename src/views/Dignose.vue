
<template>
  <!-- <div>
        问诊
         <router-link to="/doctors"><button>医生列表1111111</button></router-link>
         <button @click="handleClick">doctor_img</button>
    </div> -->
  <div>
    <mt-header fixed title="问诊"></mt-header>
    <swiper
      :options="options"
      v-if="looplist.length"
      style="margin-top: .5rem;height: 1.69rem;
    width: 100%; background:pink;"
    >
      <div class="swiper-slide" v-for="data in looplist" :key="data.id">
        <!-- <img :src="data.appImg" /> -->
        {{ data }}
      </div>
    </swiper>

    <aside>
      <ul>
        <div>
          <router-link to="/doctors" tag="li">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon" style="color:darkred"></use>
            </svg>
          </router-link>
          <span>内科</span>
        </div>

        <div>
          <router-link to="/doctors" tag="li">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-haizi"></use>
            </svg>
          </router-link>
          <span>儿科</span>
        </div>

        <div>
          <router-link to="/doctors" tag="li">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-icon1" style="color:lightcoral"></use>
            </svg>
          </router-link>
          <span>皮肤科</span>
        </div>

        <div>
          <router-link to="/doctors" tag="li">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fei"></use>
            </svg>
          </router-link>
          <span>呼吸科</span>
        </div>
        <div>
          <router-link to="/doctors" tag="li">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-kouqiang"></use>
            </svg>
          </router-link>
          <span>口腔科</span>
        </div>

        <div>
          <router-link to="/doctors" tag="li">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-shenjing"></use>
            </svg>
          </router-link>
          <span>神经科</span>
        </div>

        <div>
          <router-link to="/doctors" tag="li">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xiaohua"></use>
            </svg>
          </router-link>
          <span>消化科</span>
        </div>

        <div>
          <router-link to="/doctors" tag="li">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-xinxieguan"></use>
            </svg>
          </router-link>
          <span>心血管科</span>
        </div>
      </ul>
    </aside>

    <div class="line"></div>

    <div class="recommend">
      <span></span>
      推荐医生
      <span></span>
    </div>
    <main>
      <ul>
        <div>
          <router-link to="" tag="li" @click="handleclick()">
<<<<<<< HEAD
            <img src="" alt="" />
=======
            <img src="" alt="">

>>>>>>> ad731658a648d003a02fd9df376921fd7eee7b2a
          </router-link>
          <span class="firstspan">儿科：何仙姑</span>
          <span>感冒、咳嗽</span>
          <router-link to="" tag="span" @click="handleclick()">
            <p>立即留言<i>》</i></p>
          </router-link>
        </div>
        <div>
          <router-link to="" tag="li" @click="handleclick()">
<<<<<<< HEAD
            <img src="" alt="" />
=======
            <img src="" alt="">

>>>>>>> ad731658a648d003a02fd9df376921fd7eee7b2a
          </router-link>
          <span class="firstspan">儿科：何仙姑</span>
          <span>感冒、咳嗽</span>
          <router-link to="" tag="span" @click="handleclick()">
            <p>立即留言<i>》</i></p>
          </router-link>
        </div>
        <div>
          <router-link to="" tag="li" @click="handleclick()">
            <img src="" alt="" />
          </router-link>
          <span class="firstspan">儿科：何仙姑</span>
          <span>感冒、咳嗽</span>
          <router-link to="" tag="span" @click="handleclick()">
            <p>立即留言<i>》</i></p>
          </router-link>
        </div>
      </ul>
    </main>
  </div>
</template>
<script>
import swiper from "@/components/swiper";
import { Header } from "mint-ui";
import Vue from "vue";
Vue.component(Header.name, Header);
export default {
  data() {
    return {
      looplist: [1, 2, 3],
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
    swiper
  },
  methods: {
    handleClick() {
      this.router.push({ path: `/doctor/${doctorId}` });
    }
  }
};
</script>
<style lang="scss" scoped>
header {
  background: #c0a322;
  width: 100%;
  font-size: 0.18rem;
  height: 0.5rem;
}
aside {
  width: 100%;
  height: 1.6rem;
  background: white;
  ul {
    height: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    div {
      // float: left;
      width: 25%;
      margin-top: 0.05rem;

      li {
        border-radius: 50%;
        background: #ffffff;
        width: 0.5rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        padding-top: 0.05rem;
        margin: 0 auto;
        border: 1px solid #bbbbbb;
        svg {
          
          use {
            display: block;
            height: 0.3rem;
            line-height: 0.3rem;
            margin-top: 0.05rem;
            
          }
        }
      }
    }
    span {
      display: block;
      height: 0.2rem;
      line-height: 0.2rem;
      text-align: center;
      font-size: 0.12rem;
    }
  }
}
.icon {
  color: #bbbbbb;
  font-size: 0.35rem;
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
  height: 1.75rem;
  ul {
    display: flex;

<<<<<<< HEAD
    div:first-child {
      margin-left: 0.05rem;
=======
    div:first-child{
      margin-left:.05rem;
>>>>>>> ad731658a648d003a02fd9df376921fd7eee7b2a
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
<<<<<<< HEAD
=======

>>>>>>> ad731658a648d003a02fd9df376921fd7eee7b2a
        }
      }

      span {
        display: block;
        margin: 0.02rem 0;
        p {
          color: #101010;
          font-size: 0.12rem;
          display: inline;
        }
        i {
          display: inline;
          color: #ff9800;
        }
      }
      .firstspan {
        margin-top: 0.2rem;
      }
    }
  }
}
</style>
