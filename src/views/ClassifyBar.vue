<template>
    <ul class="list">
      <router-link :to="{path:'/classify/show',query:{name:'全部'}}" tag="li">全部</router-link>
      <router-link :to="{path:'/classify/show',query:{name:'常用药材'}}" tag="li">常用药材</router-link>
      <router-link :to="{path:'/classify/show',query:{name:'花类'}}" tag="li">花类</router-link>
      <router-link :to="{path:'/classify/show',query:{name:'叶类'}}" tag="li">叶类</router-link>
      <router-link :to="{path:'/classify/show',query:{name:'全草类'}}" tag="li">全草类</router-link>
      <router-link :to="{path:'/classify/show',query:{name:'根茎类'}}" tag="li">根茎类</router-link>
      <router-link :to="{path:'/classify/show',query:{name:'藤木类'}}" tag="li">藤木类</router-link>
      <router-link :to="{path:'/classify/show',query:{name:'树脂类'}}" tag="li">树脂类</router-link>
      <router-link :to="{path:'/classify/show',query:{name:'果实种子类'}}" tag="li">果实种子类</router-link>
      <router-link :to="{path:'/classify/show',query:{name:'动物类'}}" tag="li">动物类</router-link>
      <router-link :to="{path:'/classify/show',query:{name:'矿物类'}}" tag="li">矿物类</router-link>
      <router-link :to="{path:'/classify/show',query:{name:'其他加工类'}}" tag="li">其他加工类</router-link>
    </ul>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    ul.list{
    margin-top: .5rem;
    flex-direction: column;
    width: 25%;
    height: 5.8rem;
    position: fixed;
    display: flex;
    flex-direction: column;
    li{
      flex: 1;
      text-align: center;
      line-height: .42rem;
      background-color: #fff;
      color:#3e3e3e;
    }
    li.router-link-exact-active{
      background-color: #f3f3f3;
    }
  }
</style>