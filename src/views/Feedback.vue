<template>
    <div>
        问卷反馈
        <button @click="handleClick">返回</button>
        <router-link to="/index"><button>返回首页</button></router-link>
        <router-link to="/classify"><button>去抓药</button></router-link>

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
