<template>
    <div>
        <!-- 医生列表
         <button @click="handleClick">doctor_img</button>
         <button @click="handleClick2">返回</button> -->
         
    </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.router.push({ path: `/docdetail/${doctorId}` })
    },
    handleClick2 () {
      this.router.go(-1)
    }

  }
}
</script>
