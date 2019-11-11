<template>
    <mt-header fixed :title="title" :style="style"></mt-header>
</template>
<script>
import { Header } from 'mint-ui';
import Vue from 'vue'
Vue.component(Header.name, Header);
export default {
    data() {
        return {
            title:this.options.content,
            style:this.options.style
        }
    },
    methods: {
        
    },
    props:{
        options: Object
    }
}
</script>
<style lang="scss" scoped>
    
</style>