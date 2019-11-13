<template>
  <div>
    <!-- 医生详情
    <button @click="handleClick">返回</button>
    <button @click="liuyan">立即留言</button> -->
    <!-- <img src="https://p2.maiyaole.com/img/category/201806/1528880258288.png?60777" alt=""> -->
    <Dcodetail-bar></Dcodetail-bar>
<div class="Indications">
  <h3>主治</h3>
  <ul>
    <li v-for="(data,index) in datalist" :key="index">{{data}}</li>
  </ul>
  </div>
<div class="briefIntroduction">
  <h3>简介</h3>
  {{briefIntroduction}}
  </div>
<div class="DoctorServices">
  <h3>医生服务</h3>
  <p>问诊开方<span>￥30元/次</span></p>
  
  {{DoctorServices}}
  </div>
<div class="Notice">
  <h3>公告</h3>
  {{Notice}}
  </div>
  </div>
</template>
<script>
import DcodetailBar from './Docdetail/DocdetailBar'
export default {
   beforeMount() {
    this.$store.commit("hideTabbar");
  },
  beforeDestroy() {
    this.$store.commit("showTabbar");
  },
  components: {
    DcodetailBar
  },
  data() {
    return {
      datalist:  ["1", "2", "3", "4",'5','6'],
briefIntroduction:'毕业于大连医科大学，曾是从伤寒大家郝万山，及国内，辽宁省内诸多名老中医大家！业医二十余年，临床经验丰富，现就职于北京同仁堂大连中医医院，荣华双西国医固安，勤研中',
DoctorServices:'留言详细说明病人病情症状',
Notice:'全天9：00～17：00均可留言(所填内容需真实客观，其将用'

    };
  },
  methods: {
    handleClick() {
      this.router.go(-1);
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
    width: .5rem;
    background: red;
    border-radius: .1rem;
    margin:.07rem;
  }
  .DoctorServices span{
    color: red;
    padding-left:.2rem;
    
  }
</style>