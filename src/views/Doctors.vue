<template>
  <div>
    <!-- 医生列表
         <button @click="handleClick">doctor_img</button>
         <button @click="handleClick2">返回</button> -->
    <mt-header title="医师列表">
      <router-link to="/" slot="left">
        <mt-button icon="back" ></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>
<script>
import { Header } from "mint-ui";
import Vue from 'vue'
Vue.component(Header.name, Header);

export default {
  methods: {
    handleClick() {
      this.router.push({ path: `/docdetail/${doctorId}` });
    },
    handleClick2() {
      this.router.go(-1);
    }
  }
};
</script>
