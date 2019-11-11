<template>
    <div>
        购物车
       <button @click="handleClick">返回</button>
       <router-link to="/calc"><button>结算</button></router-link>
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
