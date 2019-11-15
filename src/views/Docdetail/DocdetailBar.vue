<template>
    <div class="body">
        <div class="head">
            
            <!-- <router-link to="/message" tag="span"><span class="message"></span></router-link> -->
            <div class="img">
                <img :src="info.pic" alt="">
            </div>
            <div class="intro">
                <p>{{info.name}}</p>
                <div> <span>{{info.level}}</span> <span>{{info.department}}</span></div>
            </div>
        </div>
        
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    methods: {
        
    },
    data() {
        return {
            info:""
        }
    },
      mounted() {
    console.log()
    Axios.get("/api/doctor/list",{params:{id:this.$route.params.doctorId}}).then(res=>{
      
      this.info = res.data.data[0]
        console.log(this.info);
        
    //   this.datalist = data;
    //   console.log(datalist);
      
    //   this.name = data[0].name;
    //   this.level= data[0].level;
    //   this.department = data[0].department;
    //   this.src = data[0].pic;
    //   console.log(this.src);
      
    })
  },

}
</script>
<style lang="scss" scoped>
    .body{
        background: #fff;
        // position: relative;
        div.head{
            height: .9rem;
            // display: flex;
            // align-items: center;
            // justify-content: space-around;
            border-bottom: .01rem solid #ccc;
            .img{
                margin-right: 1rem;
                height: .72rem;
                width: .72rem;
                img{
                    width: 100%;
                    border-radius: 50%;
                }
            }
            .intro{
                // flex: 1;
                justify-self: flex-start;
                display: flex;
                flex-direction: column;
                margin-left: -1rem;
                p{
                width: 1.8rem;
                align-self: flex-start;
                }
                div{
                    display: flex;
                    span{
                        flex: 1
                    }
                }
            }
        }
        div.content{
            padding: .15rem .25rem;
            div{
                padding:.15rem 0;
                border: .01rem solid #ccc;
                text-align: center;
            }
        }
        
        
    }
   
</style>