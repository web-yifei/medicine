<template>
    <div>
        表单
          <button @click="handleClick">返回</button>
          <router-link to="/index"><button>返回首页</button></router-link>
    </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.router.go(-1)
    }
  }
}
</script>
