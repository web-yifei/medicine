<template>
  <aside>
    <ul>
      <div>
        <router-link
          :to="{ path: '/doctors', query: { name: '男科' } }"
          tag="li"
        >
          <span class="iconfont icon-nankeke"></span>
        </router-link>
        <span>男科</span>
      </div>
      <div>
        <router-link
          :to="{ path: '/doctors', query: { name: '妇科' } }"
          tag="li"
        >
          <span class="iconfont icon-nv"></span>
        </router-link>
        <span>妇科</span>
      </div>

      <div>
        <router-link
          :to="{ path: '/doctors', query: { name: '儿科' } }"
          tag="li"
        >
          <span class="iconfont icon-erke"></span>
        </router-link>
        <span>儿科</span>
      </div>

      <div>
        <router-link
          :to="{ path: '/doctors', query: { name: '皮肤科' } }"
          tag="li"
        >
          <span class="iconfont icon-pifuke"></span>
        </router-link>
        <span>皮肤科</span>
      </div>

      <div>
        <router-link
          :to="{ path: '/doctors', query: { name: '呼吸科' } }"
          tag="li"
        >
          <span class="iconfont icon-fei"></span>
          
        </router-link>
        <span>呼吸科</span>
      </div>

      <div>
        <router-link
          :to="{ path: '/doctors', query: { name: '内分泌科' } }"
          tag="li"
        >
          <span class="iconfont icon-shenjing"></span>
        </router-link>
        <span>内分泌科</span>
      </div>

      <div>
        <router-link
          :to="{ path: '/doctors', query: { name: '消化科' } }"
          tag="li"
        >
          <span class="iconfont icon-xiaohua"></span>
        </router-link>
        <span>消化科</span>
      </div>

      <div>
        <router-link
          :to="{ path: '/doctors', query: { name: '心血管科' } }"
          tag="li"
        >
          <span class="iconfont icon-xinxieguan"></span>
        </router-link>
        <span>心血管科</span>
      </div>
    </ul>
  </aside>
</template>

<script>
export default {
  name: "DignoseBar"
};
</script>

<style scoped lang="scss">
.iconfont {
  color: #ffffff;
  line-height: .35rem;
  font-size: 0.35rem;
}

aside {
  width: 100%;
  height: 1.6rem;
  background: white;

  ul {
    height: 1.6rem;
    display: flex;
    flex-wrap: wrap;

    div {
      // float: left;
      width: 25%;
      margin-top: 0.05rem;

      li {
        border-radius: 50%;
        background: #c0a322;
        width: 0.5rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        padding-top: 0.05rem;
        margin: 0 auto;
        border: 1px solid #bbbbbb;
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

</style>
