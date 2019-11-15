<template>
    <div>

        <mt-header title="城市">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <mt-index-list :style="{height:indexHeight}">
            
            <mt-index-section :index="data.type" v-for="data in datalist" :key="data.type">
                <mt-cell :title="item.name" v-for="item in data.city" :key="item.cityId" @click.native="handleClick(item)"></mt-cell>
            </mt-index-section>
        </mt-index-list>

    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return{
            datalist:[],
            indexHeight:'0',

        }
    },
    components:{
    
    },
    mounted(){
        this.indexHeight = document.documentElement.clientHeight - 50+"px"
        Axios({
            url:'https://m.maizuo.com/gateway?k=4032893',
            headers:{
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15724280543165390897551"}',
                'X-Host': 'mall.film-ticket.city.list'
            }
        }).then(res=>{
            // console.log(res.data.data.cities);
            for(var i=0;i<res.data.data.cities.length; i++){
                var a = res.data.data.cities[i].cityId 
                // console.log(a);                     
            this.datalist = this.handleCity(res.data.data.cities)
            }
        })
    },
      methods: {
          handleClick(item){
            console.log(item.name);
            localStorage.setItem("name",item.name);
            this.$router.back();
          },
        handleCity(cities){
            var charArr = [];
            for(var i=65;i<91;i++){
                charArr.push(String.fromCharCode(i))
            }

            var newcities = []
            for(var j=0;j<charArr.length;j++){
                var newlist = cities.filter(item=>item.pinyin.substring(0,1).toUpperCase()===charArr[j])
              if(newlist.length){
                    newcities.push({
                    type:charArr[j],
                    city:newlist
                })
              }
            }
            return newcities
        }
    }
}
</script>
<style lang="scss" scoped>
    .mint-header{
        background: white;
        color: black;
        border-bottom: 1px solid #ccc;
    }
</style>
