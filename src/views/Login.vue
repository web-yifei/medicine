<template>
    <div class="login-form" :style="{height:indexHeight}">
        <h1>Login</h1>
        <div class="txtb">
            <input type="text" ref="user" @focus="txtbFocusUser" @blur="txtBlurUser" v-model="user">
            <span data-placeholder='Username'></span>
        </div>
        <div class="txtb">
            <input type="password" ref="psw"  @focus="txtbFocusPsw" @blur="txtBlurPsw" v-model="psw">
            <span data-placeholder="Password"></span>
        </div>
        <input type="submit" class="logbtn" value='Login' @click="submitClick">
        <div class="bottom-text">
            Don't have account? <router-link to="/register">Sign up</router-link>
        </div>
    </div>
</template>
<script>
import { MessageBox } from 'mint-ui'
import Axios from 'axios'
export default {
  data() {
    return {
      indexHeight:'0',
        user:'',
        psw:''
    }
  },
  mounted() {
    this.indexHeight = document.documentElement.clientHeight - 50 + 'px'
  },
  methods: {
    submitClick(){
        console.log(this.user,this.psw)
      Axios({
        url: '/api/login/validate',
        method: 'post',
        data: {
          tel: this.user,
          password: this.psw
        }
      }).then(res => {
          console.log(res)
        if(res.data.login === 0){
            MessageBox.alert('账号或密码不正确');
        }else{
          localStorage.setItem('token',res.data.token)
          this.$router.push('/my')
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
</style>
