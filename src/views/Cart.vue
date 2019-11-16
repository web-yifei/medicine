<template>
    <div>

      <header>
       <span @click="handleClick" class="iconfont icon-back"></span>
       <!-- <router-link to="/calc"><button>结算</button></router-link> -->
      </header>
        <h4>购物车</h4>
        <h4 class="thing">共{{shopList.length}}件物品</h4>
      <nav>
      <main v-for="(data,index) in shopList" :key="data._id" >
        <input type="checkbox" @change="changeOne" v-model="checkarr" :value="data">
        <button class="del iconfont icon-close"  @click="delClick(data.id,index)"></button>
        <div>
           <img :src="data.pic" alt="">
           <p>{{data.shop_name}}</p>
            <p class="prop">{{data.prop | filterProp}}</p>
           <span>{{data.price | filterPrice}}</span>
           <div>
           <button class="dec" @click="dec(data)">-</button>
           <span>{{data.num}}</span>
           <button class="add" @click="add(data)">+</button>
           </div>
        </div>
      </main>

      </nav>
      <footer>
          <div>
             <input type="checkbox" v-model="checkAll" @change="change">
             <span>全选</span>
          </div>
          <p>合计： <span>￥</span>{{sum()}}</p>
          <router-link to="/calc" tag="button">结算</router-link>
      </footer>
    </div>
</template>
<script>
  import Axios from 'axios'
export default {
  data() {
    return {
      checkAll:false,
      isshow:true,
      checkarr:[],
      shopList:[],
        prev:"",
        timeId:""
    }
  },
    filters:{
        filterPrice(value){
            return value.replace(/\/500g/i,'')
        },
        filterProp(value){
            return value.split("、").slice(0,2).join("、")
        }
    },
  methods: {
    handleClick () {
        this.$router.back();
    },
    delClick(id){
      // console.log(this.shopList[index]);

        console.log(id)
        Axios({
            method:'delete',
            url:'/api/cart/delete',
            data:{
                id:id
            }
        }).then(res => {
            console.log(res.data)
            if (res.data === 1){
                this.shopList.splice(index,1);
            }
        })
    },
    changeOne(){

      if(this.checkarr.length === this.shopList.length){
        this.checkAll = true;
      }else{
        this.checkAll= false;
      }
    },
    change(){
      if(this.checkAll){
        this.checkarr = this.shopList
      }else{
        this.checkarr = [];
      }
    },
    add(data){
      data.num++;

      if (this.prev && Date.now()-this.prev<1000){
          this.prev = Date.now()
          clearTimeout(this.timeid)
          this.timeid = setTimeout(()=>{
              Axios({
                  method:'post',
                  url:'/api/cart/update',
                  data:{
                      userId:this.$route.params.userid,
                      shopid:data.id,
                      num:data.num
                  }
              }).then(res => {
                  console.log(res.data)
              })
          },1000)
      }else{
          this.prev = Date.now()
          this.timeid = setTimeout(()=>{
            console.log(111)
              Axios({
                  method:'post',
                  url:'/api/cart/update',
                  data:{
                      userId:this.$route.params.userid,
                      shopid:data.id,
                      num:data.num
                  }
              }).then(res => {
                  console.log(res.data)
              })
          },1000)
      }


    },
    dec(data){
      data.num--;
      if(data.count <= 0){
        data.count =1;
      }
    },
    sum(){
      var sum = 0;
      console.log(this.checkarr)
      for(let i in this.checkarr){
          let price = this.checkarr[i].price.split('/')[0].split('￥')[1]
        sum += this.checkarr[i].num * price;
      }
      return sum;
    }
  },
  mounted() {
    this.$store.commit('hideTabbar')
      // console.log(this.$route.params.userid)
    Axios({
        url:'/api/cart/list',
        method:'post',
        data:{
            userId:this.$route.params.userid
        }
    }).then(res => {
        let {data} = res;
        for(let i=0;i<data[0].length;i++){
            for (let j=0;j<data[1].length;j++){
                if (data[0][i].shopId == data[1][j].id){
                    data[1][j].num = data[0][i].num
                }
            }
        }
        this.shopList = data[1]
    })
  },
  destroyed () {
     this.$store.commit('showTabbar')
  }

}
</script>
<style lang="scss" scoped>

   body{
      position: relative;

    header{
      height: 1.5rem;
      background: rgb(236, 84, 89);
      overflow: hidden;
      span{
        display: block;
        width: .3rem;
        height: .3rem;
        color: white;
        font-size: .3rem !important;
        margin-top: .1rem;
        margin-left: .1rem;
      }
    }

    footer{
      height: .5rem;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: white;
      border-top: 1px solid #ccc;
      div{
        float: left;
        width: 1rem;
        height: .5rem;
         input{
          position: absolute;
          left: .4rem;
          top: .2rem;
         }
         span{
           display: block;
           position: absolute;
           left: .6rem;
           top: .16rem;
         }
      }
      p{
        float: left;
        width: 1rem;
        height: .5rem;
        text-align: center;
        line-height: .5rem;
        margin-left: .8rem;
        span{
          color: rgb(236, 84, 89);
        }
      }
      button{
        float: right;
        width: .74rem;
        height: .3rem;
        text-align: center;
        line-height: .3rem;
        margin-right: .2rem;
        margin-top: .10rem;
        padding: 0;
        border: 0;
        border-radius: .08rem;
        color: white;
        font-size: .15rem;
        background: rgb(236, 84, 89);
      }
    }
    h4{
      position: absolute;
      top:.3rem;
      right: .3rem;
      color: white;
    }
    .thing{
      top: .6rem;
    }

    nav{
      position: fixed;
      // background: #ccc;
      width:90%;
      top: 1rem;
      left: .18rem;
      .del{
        position: absolute;
        top: .1rem;
        left: .16rem;
        color: rgb(236, 84, 89);
        font-weight: 900;
        padding: 0;
        border: 0;
        background: none;
        outline: none;
      }
      main{
        height: 1.5rem;
        width: 100%;
        margin: 0 auto;
        margin-bottom: .2rem;
        background: white;
        border-radius: .1rem;
        border: 1px solid #ccc;
        position: relative;

      input{
        border: 0;
        position: absolute;
        left: .2rem;
        top: .7rem;
        background: white;
        }
        div{
        width:2.5rem;
        height: 100%;
        // background: #0ff;
        float: right;
        position: relative;
          img{
            width: .6rem;
            height: .6rem;
            background: #000;
            position: absolute;
            top: .2rem;
            left: 0;
          }
          p{
            position: absolute;
            top: .2rem;
            left: .7rem;
          }
          .prop{
            top: .5rem;
          }
          span{
            color: rgb(236, 84, 89);
            position: absolute;
            top: .9rem;
            left: 0;
            font-size: .16rem;
          }
         div{
           width: 1.3rem;
           height: .3rem;
           position: absolute;
           bottom: .2rem;
           right: .6rem;
           text-align: center;
           line-height: .3rem;
           .dec{
             position: relative;
             left: 0;
             top: 0;
             display: block;
             width: .5rem;
             height: .3rem;
             line-height: .3rem;
             border: 0;
             border-top: 1px solid #ccc;
             border-left: 1px solid #ccc;
             border-bottom: 1px solid #ccc;
             padding: 0;
             font-size: .2rem;
             border-top-left-radius: .1rem;
             border-bottom-left-radius: .1rem;
             background: white;
             color: black;
           }
            span{
            position: absolute;
            left: .5rem;
            top: 0;
            padding: 0;
            margin: 0;
            outline: none;
            border: 0;
            border: 1px solid #ccc;
            width: .3rem;
            height: .3rem;
            background: white;
             color: black;

          }
          .add{
             position: relative;
             left: .8rem;
             top: -.3rem;
             display: block;
             width: .5rem;
             height: .3rem;
             line-height: .3rem;
             border: 0;
             border-top: 1px solid #ccc;
             border-bottom: 1px solid #ccc;
             border-right: 1px solid #ccc;
             padding: 0;
             text-align: center;
             border-bottom-right-radius: .1rem;
             border-top-right-radius: .1rem;
             background: white;
             color: black;
             font-size: .15rem;

          }
         }
      }
      }
    }
  }
</style>
