<template>
    <div>
        分类
        <router-link to="/index"><button>返回</button></router-link>
        <button @click="handleClick">人参</button>
    </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.router.push({ path: `/detail/${shopId}` })
    }
  }
}
</script>
