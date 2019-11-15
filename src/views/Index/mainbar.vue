<template>
    <div class="yangsheng" ref="yangsheng">
        <h3> <span>养生贴士</span> <span class="more">更多></span></h3>
        <div v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-immediate-check="false" infinite-scroll-distance="10">
          <dl v-for="item of datalist" :key="item.ID" @click="linkHandle(item.guid)">
            <dd>
              <img :src="'http:'+item.post_image" alt="">
            </dd>
            <dt>
              <h4>{{item.post_name}}</h4>
              <p>
                  <span v-for="data of item.tags" :key="data.term_id">
                    {{data.name}}
                  </span>
              </p>
              <div>
                {{item.views}}已读
              </div>
            </dt>
          </dl>
        </div>

    </div>
</template>
<script>
  import Axios from 'axios'
  export default {
      data(){
          return {
            datalist:[],
              page:1,
              loading:false,
              count:0
          }
      },
      mounted() {
          Axios.get(`/zixun/?rest_route=%2FgetCatTop%2FgetCatTop&cid=46&page=${this.page}&t=1573706706`).then(res => {
              let {list} = res.data.result;
              this.datalist = list;
          })
          window.onscroll = () => {
              if (this.$refs.yangsheng.getBoundingClientRect().top <= 45){
                  this.$refs.yangsheng.children[0].style.position='fixed'
                  this.$refs.yangsheng.children[0].style.top=45+'px'
                  this.$refs.yangsheng.children[0].style.backgroundColor='#fff'
                  this.$refs.yangsheng.children[0].style.width='100%'
              }else{
                  this.$refs.yangsheng.children[0].style.position='initial'
              }
          }
      },
      destroyed(){
          window.onscroll = null
      },
      methods:{
          loadMore(){
              this.loading = true
              this.page++
              Axios.get(`/zixun/?rest_route=%2FgetCatTop%2FgetCatTop&cid=46&page=${this.page}&t=1573706706`).then(res => {
                  let {list} = res.data.result;
                  if (list.length === 0){
                      return;
                  }
                  this.datalist=[...this.datalist,...list]
                  this.loading=false
              })
          },
          linkHandle(link){
              console.log(link)
              location.href = `https://www.zk120.com${link}`
          }
      }
  }
</script>
<style lang="scss" scoped>
  div.yangsheng{
    margin-top: .2rem;
    border-top: 0.05rem solid #dedede;
    margin-bottom: .5rem;
  }
  h3{
    height: .4rem;
    line-height: .4rem;
    span {
      border-left: .03rem solid rgb(192, 163, 34);
      margin-left: .15rem;
      box-sizing: border-box;
      width: 50%;
      padding-left: .06rem;
      /*position: initial;*/
    }
    .more{
      border: none;
      font-size: .13rem;
      color: #c0a322;
      float: right;
      width: .5rem;
      margin-right: .1rem;
    }
  }
    dl{
        height:1rem;
        width: 100%;
        dd{
            float:left;
            height:.5rem;
            width: 1rem;
            margin-left: .1rem;
            margin-top: .2rem;
            img{
              width: 100%;
            }
        }
        dt{
            float:left;
            height: 1rem;
            width: 2.5rem;
            float: right;
            h4{
                margin-bottom: .1rem;
                margin-top: .15rem;
                padding-right: .1rem;
            }
            p{
              width: 1.5rem;
              float: left;
              span{
                color: #777;
              }
            }
          div{
            margin: 0;
            border: none;
            float: right;
            width: .8rem;
            font-size: .12rem;
            color: #777;
          }
        }
    }
    .last{
        margin-bottom: .5rem;
    }
</style>
