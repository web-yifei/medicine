<template>
    <div class="body" :style="clientHeight">
      <Header :options="options"></Header>
      <Title class="title"></Title>
      <Item></Item>  
    </div>
</template>
<script>
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
          backgroundColor:'#fff',
          color:'black',
          height:'.5rem',
          marginBotton:'.1rem'
        }
      }
    }
  },
  components:{Header,Title},
  mounted() {
    this.clientHeight.height=document.documentElement.clientHeight-0.5+'rem'
  },
  methods: {
    feedback () {
      this.router.push({ path: `/feedback/${userId}` })
    }
  },
  beforeRouteEnter(to,from,next){
    console.log('111');
    if(!localStorage.getItem('token')){
      next('/login')
    }else{
      next()
    }
  }
}
</script>
<style lang="scss" scoped>
  .body{
    background-color: #eee;
    overflow: hidden;
  }
  .title{
    margin-top: .55rem;
    background-color: #fff
  }
</style>
