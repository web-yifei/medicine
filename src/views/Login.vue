<template>
    <div>
        登录
        <button @click="handleClick">注册</button>
    </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.$router.push('register')
    }
  }
}
</script>
