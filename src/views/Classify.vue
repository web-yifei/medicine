<template>
  <div :style="clientHeight">

    <mt-header fixed title="分类"></mt-header>
    <ClassifyBar></ClassifyBar>
    <router-view></router-view>
  </div>
</template>
<script>
import ClassifyBar from "@/views/ClassifyBar";
export default {
  data() {
    return {
      clientHeight: {
        height: "",
      }
    };
  },
  components: { ClassifyBar },
  mounted() {
    this.clientHeight.height =
      document.documentElement.innerHeight - 1.4 + "rem";
  },
  updated() {
  }
};
</script>
<style lang="scss" scoped>
header {
  background: #c0a322;
  width: 100%;
  font-size: 0.18rem;
  height: 0.5rem;
}
</style>