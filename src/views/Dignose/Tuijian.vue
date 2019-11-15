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

.recommend {
  width: 100%;
  height: 20px;
  color: rgba(16, 16, 16, 1);
  font-size: 14px;
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
  height: 100%;
  margin-bottom: 0.5rem;
  ul {
    display: flex;

    div:first-child {
      margin-left: 0.05rem;
    }

    div {
      background: #ffffff;
      width: 33.333%;
      height: 175px;
      line-height: 20px;
      text-align: center;
      border: 1px solid rgba(187, 187, 187, 1);
      margin: 0 0.05rem 0 0;
      box-shadow: .0 .0 .05rem #cccccc;
      li {
        width: 100%;
        img {
          display: block;
          width: 100%;
          padding: .05rem;
          
        }
      }
      i{
        color: #FF9800 ;
      }
    }
  }
}






</style>
