<template>
  <div>
    <div class="top">
      <router-link to="/city" tag="li" class="city ">
        <i class="iconfont icon-compass"></i>
        <span>{{name}}</span>
      </router-link>
      <input type="text" placeholder="搜索" class="search" v-model="find" @input="searchAll">
      <button class="iconfont icon-search"></button>

      <router-link to="/my" tag="li" class="city ">
        <i class="iconfont icon-comments"></i>
        <span>消息</span>
      </router-link>
    </div>

    <ul id="search">
      <li v-for="item of datalist" :key="item._id" @click="jumpClick(item.id)">
        <img :src="item.pic" alt="">
        <h4>{{item.shop_name}}</h4>
        <span>{{item.prop | filter}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
    import {Indicator} from "mint-ui";
    import Axios from 'axios'
    export default {
        data() {
            return {
                name: '',
                find: '',
                prev:'',
                timer:'',
                datalist:[]
            }
        },
        mounted() {
            if (!localStorage.getItem("name")) {
                this.name = "定位中.."
            } else {
                var a = localStorage.getItem("name");
                console.log(a);
                this.name = a;
            }
        },
        filters:{
          filter(value){
              return value.split('、').slice(0,1).join("")
          }
        },
        methods:{
            searchAll(){
                if (this.prev && Date.now()-this.prev<500){
                    this.prev = Date.now()
                    clearTimeout(this.timer)
                    this.timer = setTimeout(()=>{
                      Axios.get('/api/shop/search',{params:{name:this.find}}).then(res => {
                          console.log(res.data)
                          this.datalist = res.data
                      })
                    },500)
                }else{
                    this.prev = Date.now()
                    this.timer = setTimeout(()=>{
                        Axios.get('/api/shop/search',{params:{name:this.find}}).then(res => {
                            console.log(res.data)
                            this.datalist = res.data
                        })
                    },500)
                }
            },
            jumpClick(id){
                this.$router.push(`/detail/${id}`)
            }
        }
    }
</script>
<style lang="scss" scoped>
  .top {
    position: fixed;
    left: 0;
    top: 0;
    background: white;
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    z-index: 999;
    text-align: center;
    background: rgb(192, 163, 34);
    display: flex;
  }

  .mint-searchbar {
    height: .5rem;
  }

  .mint-search {
    height: 100%;
    overflow: hidden;
  }

  .search {
    border-radius: .1rem;
    border: 0;
    padding: 0;
    height: .3rem;
    width: 2.3rem;
    margin: 0 auto;
    margin-top: .1rem;
    padding: .1rem;
    font-size: .12rem;
    border: 1px solid #ccc;
    color: #999;
  }

  .icon-search {
    position: fixed;
    right: .9rem;
    top: .15rem;
    border: 0;
    background: none;
    padding: 0;
  }

  .city {
    width: .3rem;
    height: 100%;
    flex: 10%;
    color: white;
    font-size: .12rem;
    display: flex;
    flex-direction: column;

    i {
      display: block;
      width: .3rem;
      height: .2rem;
      line-height: .2rem;
      margin: 0 auto;
      margin-top: .1rem;
    }

    span {
      display: block;
      height: .2rem;
      line-height: .2rem;
      text-align: center;
    }
  }

  #search {
    margin-top: .5rem;

    li {
      width: 100%;
      height: .8rem;
      //    background: #ccc;
      border-bottom: 1px solid #ccc;
      margin: 0 auto;
      position: relative;

      img {
        width: .5rem;
        height: .5rem;
        background: #000;
        float: left;
        margin-left: .8rem;
        margin-top: .15rem;
      }

      h4 {
        float: left;
        margin-top: .12rem;
        margin-left: .3rem;
      }

      span {
        display: block;
        position: absolute;
        top: .35rem;
        left: 1.6rem;
      }
    }

  }
</style>
