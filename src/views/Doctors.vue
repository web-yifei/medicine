<template>
  <div>
    <!-- 医生列表
         <button @click="handleClick">doctor_img</button>
         <button @click="handleClick2">返回</button> -->
    <mt-header title="医师列表" class="title">
      <router-link to="/message" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <main>
      <ul>
        <li v-for="item of datalist" :key="item.id">
          <dl>
            <dt><img :src="item.pic" alt=""></dt>
            <dd>
              <p>{{item.name}}</p>
              <p>{{item.level}}</p>
              <p>问诊费：<span>￥{{item.price}}元/次</span></p>
            </dd>
          </dl>
        </li>
      </ul>
    </main>

  </div>
</template>
<script>
import { Header } from "mint-ui";
import Vue from "vue";
import Axios from 'axios';
Vue.component(Header.name, Header);

export default {
    data(){
        return {
            datalist:[],
            clientHeight:{
                height:""
            }
        }
    },
  methods: {

  },
    mounted() {
        this.$store.commit("hideTabbar");
        this.clientHeight.height=document.documentElement.offsetHeight-70+'px';
        let {name} = this.$route.query
        let result = name.replace(/科/g,"");
        console.log(result)
        Axios.get('/api/doctor/list/classify',{params:{name:result}}).then(res => {
            console.log(res.data.list)
            this.datalist = res.data.list
        })
    },
    destroyed() {
        this.$store.commit("showTabbar")
    }
};
</script>
<style lang="scss" scoped>
  .title{
    position: fixed;
    top: 0;
  }
header {
  width: 100%;
  height: .54rem;
  line-height: .2rem;
  text-align: center;
  box-shadow: 0px 2px 8px -1px rgba(204, 204, 204, 1);
  border: 1px solid rgba(255, 0, 0, 0);
  background: #ffffff;
  color: #101010 ;
  font-size: .18rem;
  .mint-header-button{
    color: #959595 ;

  }
}

main{
  height: 100%;
  margin-top: .55rem;
  ul{
    width: 100%;
    li{
      width: 100%;
      height: 1rem;
      background: #FAF8EC ;
      margin-top: .08rem;
      display: block;
      dl{
        width: 100%;
        height: 1rem;
        dt{
          float: left;
          width: 1.32rem;
          height: 1rem;
          padding-top:.05rem;

          img{
            width: .9rem;
            height: .9rem;
            background: lightpink;
            border-radius: 50%;
            margin-left: .42rem;
          }
        }
        dd{
          float: left;
          width: 1.6rem;
          height: .78rem;
          margin: .11rem .2rem 0 .11rem;
          p{
            font-size: .14rem;
            color: #101010;
            margin-bottom: .09rem;
            span{
              color: #E83F42 ;
            }
          }
        }
      }
    }
  }
}
</style>
