<template>
    <div class="body">
        <div class="img">
            <img src="" alt="">
        </div>
        <p>何仙姑</p>
        <mt-button size="small" type="danger" class="btn">注销</mt-button>
    </div>
</template>
<script>
import {Button} from 'mint-ui'
import Vue from 'vue'
Vue.component(Button.name, Button);
export default {
    
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
            border-radius: 50%;
        }
        p{
            width: 1.8rem;
        }
        .btn{
            width: .7065rem;
            height: .2536rem;
        }
    }
</style>