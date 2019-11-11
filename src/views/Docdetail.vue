<template>
    <div>
        医生详情
        <button @click="handleClick">返回</button>
        <button @click="liuyan">立即留言</button>
    </div>
</template>
<script>
export default {
  methods: {
    handleClick () {
      this.router.go(-1)
    },
    liuyan () {
      this.router.push({ path: `/docdetail/${doctorId}/form` })
    }
  }
}
</script>
