<template>
  <div>
      <tabbar></tabbar>
      <router-view></router-view>
  </div>
</template>
<script>
import Vue from 'vue'
import Axios from 'axios'
import tabbar from '@/components/tabbar'
Vue.component('tabbar', tabbar)
export default {

}
</script>
<style lang="scss">
body,h1,h2,h3,h4,h5,h6,p,a,img,ul,li,ol,dl,dt,dd,input,i{
    padding: 0;
    margin: 0;
}
  *{
    box-sizing: border-box;
}
body {
    font-size: .14rem;
    color: #333;
    font-family: "微软雅黑";
}
body,
html {
    height: 100%;
}
html{
		font-size: 26.67vw;
	}
  ul{
        li{
            list-style: none;
        }
    }
    .router-link-exact-active,.router-link-active{
        color: rgb(192, 163, 34)
    }
  input{
       outline: none;
    }
  img{
    display: block;
  }
  .iconfont{
    font-size: .16rem;
  }
  .mint-search{
    margin: 0 auto;
    flex: 70%;
  }
  .mint-searchbar{
      padding:3px 4px !important;
      border-radius:.06rem;
      top: .07rem;
    }
</style>
