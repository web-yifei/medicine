<template>
    <div :style="clientHeight" class="body">
        <mt-header fixed title="医师反馈" class="header">
          <router-link to="/my" slot="left">
            <mt-button icon="back"></mt-button>
          </router-link>
        </mt-header>
        <Title class="title"></Title>
        <DoctorHeader class="doctor" :info="info" xxx="xx" v-if="info.length"></DoctorHeader>
        <mt-button type="default" size="large" class="btn" @click="backHandle()">返回首页</mt-button>
        <mt-button type="danger" size="large" class="btn" @click="saveHandle">抓药</mt-button>
    </div>
</template>
<script>
import Title from '@/views/My/Title'
import DoctorHeader from '@/components/DoctorHeader'
import Axios from 'axios'
export default {
  data() {
    return {
      clientHeight:{
        height:''
      },
        info:[]
    }
  },
  components: { Title, DoctorHeader },
  mounted() {
    this.clientHeight.height=document.documentElement.innerHeight-0.5+'rem'
      Axios.get('/api/feedback/list',{params:{id:this.$store.state.my_title.Id}}).then(res => {
          this.info = res.data
      })
  },
  methods: {
    backHandle(){
      this.$router.push('/')
    },
    saveHandle(){

    }
  },

}
</script>
<style lang="scss" scoped>
div{
  .title{
    margin-top: .4rem;
    background-color: #fff;
    border-bottom: .01rem solid #ccc;
  }
  .header{
    box-shadow: 0 0.01rem 0.03rem;
    background-color: #fff;
    color: #3e3e3e;
  }
  .btn{
    width: 85%;
    height: .3rem;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    margin-bottom: .13rem;
    font-size: .15rem
  }
  .doctor{
    border-top: .01rem solid #ccc;
  }
}

</style>
