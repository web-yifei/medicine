<template>
    <div>
        分类
        <router-link to="/index"><button>返回</button></router-link>
        <button @click="handleClick">人参</button>
        <Classify-bar class="ClassifyBar"></Classify-bar>
    </div>
</template>
<script>
import ClassifyBar from './ClassifyBar'
export default {
  methods: {
    handleClick () {
      this.router.push({ path: `/detail/${shopId}` })
    }
  },
  components:{
    ClassifyBar
  }
}
</script>
<style lang="scss" scoped>
    div{
      position: relative;
    }
    
</style>
