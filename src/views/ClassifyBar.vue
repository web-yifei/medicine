<template>
  <ul>
    <li v-for="(data,index) in datalist " :key="index" @click="ClassifyClick(index)" :class="index===currentIndex?'active':''">{{data}}</li>
  </ul>
</template>
<script>
export default {
  data() {
    return {
      currentIndex:0,
      datalist: ["1111", "2222", "3333", "44444"]
    };
  },
  methods: {
    ClassifyClick(index) {
      console.log("---");
      if(this.currentIndex!== index){
        // console.log(this.currentIndex)
         this.$router.push(`/classifydetails/${index}`);
       }else{

       }
     
       this.currentIndex = index;
    }
  },
  
};
</script>

<style lang="scss" scoped>
ul {
  position: absolute;
  top: 0.5rem;
}
li {
  background: white;
  width: 1.1rem;
  height: 0.52rem;
  border: 1px solid #ffffff;
  text-align: center;
  line-height: 0.52rem;
}
.active{
    background: red;
  }
</style>