<template>
    <nav>
         <ul>
          <router-link to="/index" tag="li" >
          <i class="iconfont icon-favorite"></i>
          <span>首页</span>
          </router-link>

          <router-link to="/classify" tag="li" >
          <i class="iconfont icon-viewgallery"></i>
           <span>分类</span>
          </router-link>
         <router-link to="/message" tag="li" >
          <i class="iconfont icon-imagetext"></i>
          <span>问诊</span>
         </router-link>
          <router-link to="/my" tag="li" >
          <i class="iconfont icon-account"></i>
          <span>我的</span>
         </router-link>
        </ul>
    </nav>
</template>
<style lang="scss" scoped>
    nav{
        position: fixed;
        bottom: 0px;
        left: 0px;
        width: 100%;
        height: .5rem;
        border-top: 1px solid #ccc;
        background: white;
        z-index: 999;
        ul{
            display: flex;
            li{
                flex: 1;
                height: .5rem;
                line-height: .5rem;
                text-align: center;
                span{
                    display: block;
                    height: .2rem;
                    line-height: .2rem;
                }
                i{
                    display: block;
                    height: .3rem;
                    line-height: .3rem;
                }
            }
        }
    }
</style>
