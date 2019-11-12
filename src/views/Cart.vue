<template>
    <div>
      
      <header>
       <span @click="handleClick" class="iconfont icon-back"></span>
       <!-- <router-link to="/calc"><button>结算</button></router-link> -->
      </header>
      <main>
        <input type="radio">
        <div></div>
      </main>

      <footer></footer>
    </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
        this.$router.back();
    }
  }
}
</script>
<style lang="scss" scoped>
    header{
      height: 1.5rem;
      background: rgb(236, 84, 89);
      overflow: hidden;
      span{
        display: block;
        width: .3rem;
        height: .3rem;
        color: white;
        font-size: .3rem !important;
        margin-top: .1rem;
        margin-left: .1rem;
      }
    }
    main{
      height: 1.5rem;
      width: 90%;
      margin: 0 auto;
      background: #f0f;
      position: fixed;
      top: 1rem;
      left: .18rem;
      border-radius: .1rem;
      input{
        border: 0;
        position: absolute;
        left: .2rem;
        top: .7rem;
        background: white;
      }
      div{
        width:2.5rem;
        height: 100%;
        background: #0ff; 
        float: right;
      }
    }
    footer{
      height: .5rem;
      border-top: 1px solid #ccc;
    }
</style>
