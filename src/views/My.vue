<template>
    <div>
        个人中心
       <router-link to="/login"><button>登录/注销11111111</button></router-link>
       <button @click="feedback">反馈</button>
       <router-link to="/amend"><button>修改密码</button></router-link>

    </div>
</template>
<script>
export default {
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
