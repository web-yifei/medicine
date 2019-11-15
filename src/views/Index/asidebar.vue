<template>
  <aside>
    <ul>
      <div>
        <router-link to="/hot" tag="li">
          <span class="iconfont icon-remen"></span>
        </router-link>
        <span>热销药材</span>
      </div>

      <div>
        <router-link to="" tag="li">
          <span class="iconfont icon-jiankangbaike"></span>
        </router-link>
        <span>药材百科</span>
      </div>

      <div>
        <router-link to="" tag="li">
          <span class="iconfont icon-rediantance"></span>
        </router-link>
        <span>药材热点</span>
      </div>

      <div>
        <router-link to="" tag="li">
          <span class="iconfont icon-zixun"></span>
        </router-link>
        <span>药材咨询</span>
      </div>
    </ul>
  </aside>
</template>
<script>

export default {};
</script>
<style lang="scss" scoped>
aside {
  border-bottom: 0.05rem solid #dedede;
  width: 100%;
  height: 0.8rem;
  background: white;
  ul {
    height: 0.8rem;
    display: flex;
    div {
      float: left;
      flex: 1;
      margin-top: 0.05rem;
      li {
        border-radius: 50%;
        background: rgb(192, 163, 34);
        width: 0.5rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        padding-top: 0.05rem;
        margin: 0 auto;
        span {
          display: block;
          height: 0.3rem;
          color: #ffffff;
          font-size: .3rem;
          line-height: .3rem;
          margin-top: .05rem;
        }
      }
    }
    span {
      display: block;
      height: 0.2rem;
      line-height: 0.2rem;
      text-align: center;
      font-size: 0.12rem;
    }
  }
}
.icon {
  color: white;
  font-size: 0.3rem;
}
</style>
