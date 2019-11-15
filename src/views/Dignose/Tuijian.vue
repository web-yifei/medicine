<template>
  <div class="body">
    <div class="recommend">
      <span></span>
      推荐医生
      <span></span>
    </div>
    <main>
      <ul>
        <div v-for="item of datalist" :key="item.id">
          <li>
            <img :src="item.pic" alt="" @click="handleClick(item.id)"/>
          </li>
          <span class="firstspan">{{item.department | filter2}}：{{item.name}}</span>
          <span>{{item.tags | filter}}</span>
          <span >
            <p @click="handleClick(item.id)">立即留言<i>》</i></p>
          </span>
        </div>
      </ul>
    </main>
  </div>

</template>

<script>
  import Axios from 'axios'
    export default {
        name: "tuijian",
        data(){
            return {
                datalist:[]
            }
        },
        methods:{
            handleClick(doctorId) {
              console.log(doctorId);
              
                this.$router.push({ path: `/docdetail/${doctorId}` });
                console.log("999");
            }
        },
        filters:{
          filter(value){
              return value.split("、").slice(0,2).join("、")
          },
            filter2(value){
              return value.split("、").slice(0,1).join("")
            }
        },
        mounted() {
            Axios.get('/api/doctor/list',{params:{limit:3}}).then(res => {
                console.log(res.data.data);
                this.datalist = res.data.data
            })
        }
    }
</script>

<style scoped lang="scss">
  div.body{
    background-color: #fafafa;
  }
  .recommend {
    width: 100%;
    height: .2rem;
    color: rgba(16, 16, 16, 1);
    font-size: .14rem;
    text-align: center;
    font-family: PingFangSC-regular;
    margin: 0.27rem 0rem 0.2rem;
    span {
      display: inline-block;
      width: 0.59rem;
      height: 0.01rem;
      background: #bbbbbb;
      vertical-align: middle;
      margin: 0rem 0.05rem;
    }
  }

  main {
    width: 100%;
    height: 1.75rem;

    ul {
      display: flex;

      div:first-child {
        margin-left: 0.05rem;
      }

      div.loop {
        box-shadow: .01rem .01rem .07rem #ccc;
        box-shadow: -.01rem .01rem .07rem #ccc;
        background: #fff;
        width: 33.333%;
        height: 1.95rem;
        line-height: 20px;
        text-align: center;
        border: 1px solid rgba(187, 187, 187, 1);
        margin: 0 0.05rem 0 0;
        position: relative;
        li {
          width: 100%;
          position: relative;
          img {
            display: block;
            width: 90%;
            position: absolute;
            left: 50%;
            transform: translate(-50%);
            /*height: 0.8rem;*/
            background: lightblue;
            top: .05rem;
          }
        }
        .content{
          position: absolute;
          width: 95%;
          left: 50%;
          transform: translate(-50%);
          text-align: center;
          bottom: .12rem;
        }
        span {
          display: block;
          margin: 0.02rem 0;
          p {
            color: #101010;
            font-size: 0.12rem;
            display: inline;
          }
          i {
            display: inline;
            color: #ff9800;
          }
        }
        .firstspan {
          margin-top: 0.1rem;
        }
      }
    }
  }
</style>
