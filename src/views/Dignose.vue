<template>
    <div>
        问诊
         <router-link to="/doctors"><button>医生列表</button></router-link>
         <button @click="handleClick">doctor_img</button>
    </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.router.push({ path: `/doctor/${doctorId}` })
    }

  }
}
</script>
