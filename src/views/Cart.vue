<template>
    <div>
      
      <header>
       <span @click="handleClick" class="iconfont icon-back"></span>
       <!-- <router-link to="/calc"><button>结算</button></router-link> -->
      </header>
        <h4>购物车</h4>
        <h4 class="thing">共{{shopList.length}}件物品</h4>
      <nav>
      <main v-for="(data,index) in shopList" :key="index" >
        <input type="checkbox" @change="changeOne" v-model="checkarr" :value="data">
        <button class="del iconfont icon-close"  @click="delClick(index)"></button>
        <div>
           <img src="" alt="">
           <p>{{data.name}}</p>
           <span>￥{{data.price}}</span>
           <div>
           <button class="dec" @click="dec(data)">-</button>
           <span>{{data.count}}</span>
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
export default {
  data() {
    return {
      checkAll:false,
      isshow:true,
      checkarr:[],
      shopList:[
        {
          "id":1,
          "name":"长白山人参东北吉林特产长白山人参东北吉林特产",
          "count":4,
          "price":99,
          "img":"",
        },
        {
          "id":2,
          "name":"长白山人参东北吉林特产长白山人参东北吉林特产",
          "count":2,
          "price":99,
          "img":"",

        }
      ]
    }
  },
  methods: {
    handleClick () {
        this.$router.back();
    },
    delClick(index){
      // console.log(this.shopList[index]);
      this.shopList.splice(this.shopList[index],1);
      
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
      data.count++;
    },
    dec(data){
      data.count--;
      if(data.count <= 0){
        data.count =1;
      }
    },
    sum(){
      var sum = 0;
      for(let i in this.checkarr){
        sum += this.checkarr[i].count * this.checkarr[i].price;
      }
      return sum;
    }
  },
  mounted() {
    this.$store.commit('hideTabbar')
    console.log('cart mounted');
  },
  destroyed () { 
     this.$store.commit('showTabbar')
    console.log('cart beforeDestroyed');
    
  },
 
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
