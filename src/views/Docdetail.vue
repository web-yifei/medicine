<template>
  <div>
      <mt-header fixed title="医生详情">
            <mt-button icon="back" slot="left" @click="handleClick()"></mt-button>
      </mt-header>
    <DocdetailBar></DocdetailBar>
    <div class="Indications">
      <ul>
      <h3>主治</h3>
        <li v-for="(data,index) in fourthlist" :key="index">{{data}}</li>
      </ul>
    </div>
    <div class="briefIntroduction">
      <h3>简介</h3>
      <p>{{data.introduction}}</p>
    </div>
    <div class="DoctorServices">
      <h3>医生服务</h3>
      <p>问诊开方<span>￥30元/次</span></p> 
      <p>
      留言详细说明病人病情症状
      </p>  
      <p>并附上病人面照，舌苔照（有条件者可附上病人过往病历）</p>
    </div>
    <div class="Notice">
      <h3>公告</h3>
      <p>全天9：00～17：00均可留言(所填内容需真实客观,其将用于中医辨证分型及处方用药)</p>
    </div>
        <button class="commit">立即留言</button>

  </div>
</template>
<script>
import DocdetailBar from '@/views/Docdetail/DocdetailBar';
import Axios from 'axios';
export default {
  destroyed() {
    this.$store.commit("showTabbar");
  },
  components: {
    DocdetailBar,
  },
  data() {
    return {
      datalist: [],
      fourthlist:[],
      data:'',

    };
  },
  mounted() {
    this.$store.commit("hideTabbar");
    Axios.get("/api/doctor/list",{params:{id:this.$route.params.doctorId}}).then(res=>{
      console.log(res.data);
      this.data = res.data.data[0];
      this.datalist = this.data.tags.split("、").slice(0,12);
      this.fourth(this.datalist);
    })
  },
  methods: {
    fourth(list){
      var newlist = list.map(item=>item.substring(0,4))
      console.log(newlist);
      this.fourthlist = Array.from(newlist)
    },
    handleClick() {
    this.$router.back();
    
      console.log('111');
      
    },
    liuyan() {
      this.router.push({ path: `/docdetail/${doctorId}/form` });
    }
  }
};
</script>
<style lang="scss" scoped>
.Indications,
.briefIntroduction,
.DoctorServices,
.Notice{
    height: 1.5rem;
    padding-left: .2rem
  }
  h3{
    height: .4rem;
    line-height: .4rem;
  }
  li{
    text-align: center;
    float: left;
    width: .7rem;
    background: white;
    color: #000;
    border-radius: .1rem;
    margin:.07rem;
    border: 1px solid #ccc;
  }
  .DoctorServices span{
    color: red;
    padding-left:.2rem;
    
  }
   .mint-header{
        background: white;
        color: black;
        border-bottom: 1px solid #ccc;
    }
    .commit{
      width: 100%;
      height: .5rem;
      background:rgb(236, 84, 89);
      padding: 0;
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      border-radius: .1rem;
      color: white;
      font-size: .16rem;
    }
    .briefIntroduction>p{
      height: 25px;
      line-height: 25px;
    }
    .Indications ul{
      margin: 0 auto;
      height: 1.5rem;
      width: 100%;
    }
    .DoctorServices>p{
      height: 25px;
      line-height: 25px;
    }
    .Notice>p{
       height: 25px;
      line-height: 25px;
    }
</style>