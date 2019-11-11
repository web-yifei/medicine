<template>
    <ul>
        <li>问诊记录</li>
        <li @click="feedClick">问诊反馈</li>
        <li>订单记录</li>
        <li @click="amendClick">修改密码</li>
    </ul>
</template>
<script>
import Axios from 'axios'
export default {
    methods: {
        async feedClick(){
            let res =await Axios({url:'',headers:{Authorization: localStorage.getItem('token')}})
            console.log(res.data);
        },
        async amendClick(){
            let res=await Axios({url:'',headers:{Authorization: localStorage.getItem('token')}})
            console.log(res.data);
        }
    },
}
</script>
<style lang="scss" scoped>
    
</style>