<template>
  <div class="body">
    <div><span class="iconfont icon-selected"></span>提交成功!</div>
    <router-link to="/index"><button class="index">返回首页</button></router-link> 
    <router-link to="/classify"><button>去抓药</button></router-link> 
  </div>
</template>
<script>
export default {
    beforeMount() {
    this.$store.commit("hideTabbar");
  },
  beforeDestroy() {
    this.$store.commit("showTabbar");
  },
}
</script>
<style lang="scss" scoped>
  .body{
      width: 90%;
      height: 2.5rem;
    //   background: #ccc;
      margin: 0 auto;
      margin-top: 1.5rem;
      text-align: center;
      position: relative;
      overflow: hidden;
      div{
          width: 90%;
          height: 1rem;
          margin: 0 auto;
          margin-top: .7rem;
          font-size: .4rem;
          color:rgb(236, 84, 89);
          font-weight: 700;
          line-height: 1rem;
          float: left;
          
              .icon-selected{
                  font-size: .8rem;
                  margin-left: .4rem;
                  display: block;
                  float: left;
                  text-align: right;
              }
          }
      button{
          border-radius: .08rem;
          background: rgb(236, 84, 89);
          color: white;
          padding: 0;
          border: 0;
          width: 90%;
          height: .4rem;
          font-size: .16rem;
          position: absolute;
          bottom: 0;
          left: .18rem;
          
      }
      .index{
          background: #ccc;
          border-radius: .08rem;
          color: white;
          padding: 0;
          border: 0;
          width: 90%;
          height: .4rem;
          font-size: .16rem;
          position: absolute;
          bottom: .5rem;
          left: .18rem;
      }
  }
</style>