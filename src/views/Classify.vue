<template>
  <div :style="clientHeight">
    <mt-header fixed title="分类" class="header">
      <router-link to="/index" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
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
.header {
  box-shadow: 0 0.01rem 0.03rem;
  background-color: #fff;
  color: #3e3e3e;
}
</style>