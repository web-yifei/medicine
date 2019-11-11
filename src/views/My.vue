<template>
    <div>
        个人中心
       <router-link to="/login"><button>登录/注销</button></router-link>
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
  }
}
</script>
