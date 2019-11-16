<template>
    <div class="body">
        <div class="img">
            <img :src="'http://10.2.153.48:3000'+$store.state.my_title.headPic" alt="">
        </div>
        <p>{{$store.state.my_title.headName}}</p>
        <mt-button size="small" type="danger" class="btn" @click="logoutClick">注销</mt-button>
    </div>
</template>
<script>
import {Button} from 'mint-ui'
import Vue from 'vue'
import Axios from 'axios'
Vue.component(Button.name, Button);
export default {
    mounted() {
        if(this.$store.state.my_title.headName === '' || this.$store.state.my_title.headPic === ''){
            this.$store.dispatch('getMyInfoAction')
        }else{
            console.log('使用缓存');
        }
    },
    methods: {
        logoutClick(id){
            localStorage.removeItem('token')
            this.$store.commit('deleteInfo')
            this.$router.push('/login')
        }
    },
}
</script>
<style lang="scss" scoped>
    .body{
        display: flex;
        height: .9rem;
        align-items: center;
        justify-content: space-around;
        background: #fff;
        .img{
            height: .72rem;
            width: .72rem;
            margin-left: .2rem;
            img{
                width: 100%;
              height: 100%;
                border-radius: 50%;
            }
        }
        p{
            width: 1.8rem;
        }
        .btn{
            width: .7065rem;
            height: .2536rem;
          margin-left: -.2rem;
        }
    }
</style>
