<template>
     <aside>
         <ul>
           <div>
          <router-link to="" tag="li">
            <i class="iconfont icon-account icon"></i>
          </router-link>
          <span>热销药材</span>
          </div>

         <div>
          <router-link to="" tag="li">
            <i class="iconfont icon-account icon"></i>
          </router-link>
          <span>药材百科</span>
          </div>

           <div>
          <router-link to="" tag="li">
            <i class="iconfont icon-account icon" ></i>
          </router-link>
          <span>药材热点</span>
          </div>

           <div>
          <router-link to="" tag="li">
            <i class="iconfont icon-account icon"></i>
          </router-link>
          <span>药材咨询</span>
          </div>
        </ul>
     </aside>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
    aside{
        border-bottom: .05rem solid #dedede;
        width: 100%;
        height: .8rem;
        background: white;
        ul{
            height: .8rem;
            display: flex;
            div{
              float: left;
              flex: 1;
              margin-top: .05rem;
            li{
                border-radius: 50%;
                background: rgb(192, 163, 34);
                width: .5rem;
                height: .5rem;
                line-height: .5rem;
                text-align: center;
                padding-top: .05rem;
                margin: 0 auto;
                i{
                    display: block;
                    height: .3rem;
                    line-height: .3rem;
                    margin-top: .05rem;

                }
                }
            }
            span{
              display: block;
              height: .2rem;
              line-height: .2rem;
              text-align: center;
              font-size: .12rem;
            }

        }
    }
    .icon{
      color: white;
      font-size: .22rem;
    }

</style>
