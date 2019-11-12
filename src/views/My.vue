<template>
    <div class="body" :style="clientHeight">
      <Header :options="options"></Header>
      <Title class="title"></Title>
      <Item></Item>  
    </div>
</template>
<script>
import Axios from 'axios'
import Header from '@/components/Header'
import Title from '@/views/My/Title'
import Item from '@/views/My/Item'
export default {
  data() {
    return {
      clientHeight:{
        height:''
      },
      options:{
        content:'我的',
        style:{
          fontWeight:'bold',
          backgroundColor:'#fff',
          color:'black',
          height:'.5rem',
          marginBotton:'.1rem'
        }
      }
    }
  },
  components:{Header,Title,Item},
  mounted() {
    this.clientHeight.height=document.documentElement.innerHeight-0.5+'rem'
  },
  beforeRouteEnter(to,from,next){
    if(!localStorage.getItem('token')){
      next('/login')
    }else{
      Axios({url:'/api/token/validate',headers:{Authorization: localStorage.getItem('token')}}).then(res => {
        if(res.data.validate === 0) next('/login')
        next()
      })
    }
  }
}
</script>
<style lang="scss" scoped>
  .body{
    background-color: #f8f8f8;
    overflow: hidden;
  }
  .title{
    margin-top: .55rem;
    background-color: #fff
  }
</style>
