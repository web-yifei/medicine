<template>
    <div class="body">
        <div>
            <h4>气血不足</h4>
            <ul>
                <li v-for="item of datalist" :key="item.id">
                  <img :src="item.pic" alt="">
                    <p>{{item.shop_name}}</p>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
  import Axios from 'axios'
export default {
      data(){
          return {
              datalist:[]
          }
      },
    mounted() {
    },
    watch: {
        $route(){
            let { name } = this.$route.query;
            Axios.get('/api/shop/shoplist',{params:{name}}).then(res => {
                this.datalist = res.data
            })
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
