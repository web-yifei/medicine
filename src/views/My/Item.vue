<template>
    <ul>
        <li>问诊记录 <span class="iconfont icon-more"></span></li>
        <li @click="feedClick">问诊反馈 <span class="iconfont icon-more"></span></li>
        <li>订单记录 <span class="iconfont icon-more"></span></li>
        <li @click="amendClick">修改密码 <span class="iconfont icon-more"></span></li>
    </ul>
</template>
<script>
import Axios from 'axios'
export default {
    methods: {
        async feedClick(){
            let res =await Axios({url:'/api/token/validate',headers:{Authorization: localStorage.getItem('token')}})
            console.log(res.data)
            let {id} = res.data
            this.$router.push(`/feedback/${id}`)
        },
        async amendClick(){
            let res=await Axios({url:'/api/token/validate',headers:{Authorization: localStorage.getItem('token')}})
            console.log(res.data);
            let { id } = res.data
            this.$router.push(`/amend/${id}`)
        }
    },
}
</script>
<style lang="scss" scoped>
    ul{
        width: 100%;
        li{
            width: 100%;
            height: .3986rem;
            padding: 0 .3rem;
            line-height: .3986rem;
            margin-top: .04rem;
            margin-bottom: .04rem;
            background: #fff;
            position: relative;
            span{
                position: absolute;
                right: .2rem;
                font-weight: 800;
            }
        }
    }
</style>