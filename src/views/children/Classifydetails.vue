<template>
  <div>
    <mt-header fixed title="分类"></mt-header>
    <Classify-bar></Classify-bar>

    <div class="all">
      <ul>
        <h3>气血不足</h3>
        <li v-for="(data,index) in datalist" :key="index" @click="listClick(index)">
          <img src="https://p4.maiyaole.com/img/category/201806/1528860819332.png?46268" />
          <span>{{data}}</span>
        </li>
      </ul>
    </div>
    <router-link to="/index"><button>返回</button></router-link>
  </div>
  
</template>
<script>
import ClassifyBar from "@/views/ClassifyBar";
export default {
  beforeMount () { 
     this.$store.commit('hideTabbar')
  },
  beforeDestroy() {
    this.$store.commit("showTabbar");
  },
  data() {
    return {
      datalist: ["weq", "qwr", "wqr", "ttt", "ooo", "lll"]
    };
  },
  methods: {
    listClick(index) {
      console.log("---");
    }
  },
  components: {
    ClassifyBar
  }
};
</script>
<style lang="scss" scoped>
div {
  position: relative;
}
div > .all {
  top: 0.55rem;
  // height: 6.1rem;
  width: 2.5rem;
  position: absolute;
  right: 0.1rem;
  // background: yellowgreen;
}
.all > ul {
  padding-left: 0.15rem;
  padding-right: 0.15rem;
}
h3 {
  height: 0.58rem;
  line-height: 0.48rem;
}
li {
    height: 0.8rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    float: left;
}
img {
  width: 0.5rem;
  height: 0.5rem;
}
span {
  display: block;
  text-align: center;
}
header{
    background: #C0A322 ;
    width: 100%;
    font-size: 0.18rem;
    height: .54rem;
  }
  button{
   position: absolute;
  //  bottom: 0;
  z-index: 9;
    width: .5rem;
    height: .3rem
  }
</style>