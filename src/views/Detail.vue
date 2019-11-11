<template>
    <div>
        详情
        <button @click="handleClick">加入购物车</button>
        <router-link to="/classify"><button>返回</button></router-link>
    </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      router.push({ path: `/cart/${userId}` })
    }
  }
}
</script>
