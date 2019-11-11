<template>
    <div class="login-form" :style="{height:indexHeight}">
        <h1>Register</h1>
        <div class="txtb">
            <input type="text" ref="user" @focus="txtbFocusUser" @blur="txtBlurUser" v-model="user">
            <span data-placeholder='Username'></span>
        </div>
        <div class="txtb">
            <input type="password" ref="psw"  @focus="txtbFocusPsw" @blur="txtBlurPsw" v-model="psw">
            <span data-placeholder="Password"></span>
        </div>
        <div class="txtb">
            <input type="password" ref="repsw"  @focus="txtbFocusrePsw" @blur="txtBlurrePsw" v-model="repsw">
            <span data-placeholder="Password"></span>
        </div>
        <div class="txtb">
            <input type="text" ref="tel"  @focus="txtbFocusTel" @blur="txtBlurTel" v-model="tel">
            <span data-placeholder="telephone"></span>
        </div>
        <div class="txtb gender">
            <input type="radio" ref="sex" name="sex" value=1 v-model="gender">男
            <input type="radio" ref="sex" name="sex" value=0 v-model="gender">女
        </div>
        <input type="submit" class="logbtn" value='Register' @click="submitClick">
        <div class="bottom-text">
            <router-link to="/login">Come back</router-link>
        </div>
    </div>
</template>
<script>
import { Field } from 'mint-ui'
import Axios from 'axios'
export default {
  data() {
    return {
      indexHeight:'0',
      gender:'',
      user:'',
      psw:'',
      repsw:'',
      tel:''
    }
  },
  mounted() {
    this.indexHeight = document.documentElement.clientHeight - 50 + 'px'
  },
  methods: {
      submitClick(){
        let [username, psw, tel, sex] = [this.user, this.psw, this.tel, this.gender];
        Axios({
            url:'/api/register',
            method: 'post',
            data:{
                username: username,
                password: psw,
                tel: tel,
                sex: sex
            }
        }).then(res => {
            console.log(res.data);
            if(res.data.register === 1 ){
                this.$router.push('/login')
            }
        })
      },
    txtbFocusPsw(){
      this.$refs.psw.classList.add('focus')
    },
    txtBlurPsw(){
        if(this.$refs.psw.value === ''){
            this.$refs.psw.classList.remove('focus')
        }
    },
    txtbFocusUser(){
      this.$refs.user.classList.add('focus')
    },
    txtBlurUser(){
        if(this.$refs.user.value === ''){
            this.$refs.user.classList.remove('focus')
        }
    },
    txtbFocusrePsw(){
        this.$refs.repsw.classList.add('focus')
    },
    txtBlurrePsw(){
        if(this.$refs.repsw.value === ''){
            this.$refs.repsw.classList.remove('focus')
        }
    },
    txtbFocusTel(){
        this.$refs.tel.classList.add('focus')
    },
    txtBlurTel(){
        if(this.$refs.tel.value === ''){
            this.$refs.tel.classList.remove('focus')
        }
    }
  }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
    text-decoration: none;
    font-family: montserrat;
    box-sizing: border-box;
}
.login-form{
    width: 100%;
    background: #f7f7f7;
    height: 100%;
    padding: .8rem .4rem;
    /* border-radius: 10px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%); */
}

.login-form h1{
    text-align: center;
    margin-bottom: .6rem;
}

.txtb{
    border-bottom: .02rem solid #adadad;
    position: relative;
    margin: .3rem 0;
}

.txtb input{
    font-size: .15rem;
    color: #3e3e3e;
    border: none;
    width: 100%;
    outline: none;
    background: none;
    padding: 0 .05rem;
    height: .4rem;
}

.txtb span::before{
    content:attr(data-placeholder);
    position: absolute;
    top: 50%;
    left: .05rem;
    color: #aaaaaa;
    transform: translateY(-50%);
    z-index: 1;
    transition: .5s;
}

.txtb span::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: -.02rem;
    width: 0%;
    height: .02rem;
    background: linear-gradient(120deg,cyan,orange);
    transition: .5s;
}

.gender{
    border: none;
}
.gender input{
    width: 10%;
    height: .2rem;
    text-align: left
}

.focus + span::before{
    top: -.05rem;
}

.focus + span::after{
    width: 100%;
}

.logbtn{
  display: block;
  width: 100%;
  height: .5rem;
  border: none;
  background: linear-gradient(120deg,cyan,orange);
  color: #fff;
  transition: .5s
}

.bottom-text{
    text-align: right;
    padding-top: .1rem;
    padding-right: .2rem;
}
</style>
