<template>
    <div class="body">
        <div>
            <h4>气血不足</h4>
            <ul>
                <li v-for="item of datalist" :key="item.id" @click="detailClick(item.id)">
                  <img :src="item.pic" alt="">
                    <p>{{item.shop_name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
  import Axios from 'axios'
  import {Indicator} from 'mint-ui'
export default {
      data(){
          return {
              datalist:[]
          }
      },
    mounted() {
        Indicator.open({
            text: "加载中...",
            spinnerType: "fading-circle"
        });
        Axios.get('/api/shop/shoplist').then(res => {
            this.datalist = res.data
            Indicator.close();
        })
    },
    methods:{
      detailClick(id){
          this.$router.push(`/detail/${id}`)
      }
    },
    watch: {
        $route(){
            Indicator.open({
                text: "加载中...",
                spinnerType: "fading-circle"
            });
            let { name } = this.$route.query;
            if (name === '全部' || name === '常用药材'){
                Axios.get('/api/shop/shoplist').then(res => {
                    this.datalist = res.data
                    Indicator.close();
                })
            }else{
                Axios.get('/api/shop/shoplist',{params:{name}}).then(res => {
                    this.datalist = res.data
                    Indicator.close();
                })
            }
        }
    },
    props:{
        query:String
    },
}
</script>
<style lang="scss" scoped>
    div.body{
        margin-top: .5rem;
        width: 75%;
        float: right;
        box-sizing: border-box;
        padding: .1rem;
        background-color: #f3f3f3;
        height: 100%;
        div{
            background-color: #fff;
            padding:.05rem;
            border-bottom: 1px solid #aaa;
            border-radius: .05rem;
            h4{
                margin-top: .1rem;
            }
            ul{
                margin-top: .2rem;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                li{
                    width: 30%;
                    height: .85rem;
                    margin-bottom: .15rem;
                    img{
                        width: 100%;
                        height: 80%;
                        background-color: pink;
                    }
                    p{
                        text-align: center;
                        margin-top: .07rem;
                    }
                }
            }
        }
    }
</style>
