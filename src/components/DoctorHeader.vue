<template>
    <div class="body">
      <div v-for="item of datalist" :key="item._id">
          <div class="head" >
              <div class="img">
                  <img :src="'http://localhost:3000'+item.img" alt="">
              </div>
              <div class="intro">
                  <p>{{item.doctorname}}</p>
                  <div> <span>{{item.level}}</span> <span>{{item.tag}}</span></div>
              </div>
          </div>
          <div class="content">
              <div>
                  <ul>
                      <li>{{item.content}}</li>
                  </ul>
              </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            datalist:[]
        }
    },
    mounted(){
      // console.log(this.info)
        this.datalist = this.info
        console.log(this.datalist)
    },
    methods: {

    },
    props:['info','xxx']
}
</script>
<style lang="scss" scoped>
    .body{
        background: #fff;
        position: relative;
        div.head{
            height: .9rem;
            display: flex;
            align-items: center;
            justify-content: space-around;
            border-bottom: .01rem solid #ccc;
          margin-top: -.02rem;
            .img{
                height: .72rem;
                width: .72rem;
                img{
                    width: 100%;
                  height: 100%;
                    border-radius: 50%;
                }
            }
            .intro{
                justify-self: flex-start;
                display: flex;
                flex-direction: column;
                margin-left: -1rem;
                p{
                width: 1.8rem;
                align-self: flex-start;
                }
                div{
                    display: flex;
                    span{
                        flex: 1
                    }
                }
            }
        }
        div.content{
            padding: .15rem .25rem;
            div{
                padding:.15rem 0;
                border: .01rem solid #ccc;
                text-align: center;
            }
        }


    }
</style>
