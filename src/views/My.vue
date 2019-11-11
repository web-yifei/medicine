<template>
    <div class="body" :style="clientHeight">
      <Header :options="options"></Header>
        个人中心
       <router-link to="/login"><button>登录/注销11111111</button></router-link>
       <button @click="feedback">反馈</button>
       <router-link to="/amend"><button>修改密码</button></router-link>
    </div>
</template>
<script>
import Header from '@/components/Header'
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
  components:{Header},
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
    background-color: #ccc;
  }
</style>
