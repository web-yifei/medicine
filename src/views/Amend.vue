<template>
  <div>
    <div class="login-form" :style="{ height: indexHeight }">
      <h1>修改密码</h1>
      <div class="txtb">
        <input
          type="password"
          ref="psw"
          @focus="txtbFocusPsw"
          @blur="txtBlurPsw"
          v-model="oldpsw"
        />
        <span data-placeholder="旧密码"></span>
      </div>
      <div class="txtb">
        <input
          type="password"
          ref="newpsw"
          @focus="txtbFocusnewPsw"
          @blur="txtBlurnewPsw"
          v-model="newpsw"
        />
        <span data-placeholder="新密码"></span>
      </div>
      <div class="txtb">
        <input
          type="password"
          ref="renewpsw"
          @focus="txtbFocusrenewPsw"
          @blur="txtBlurrenewPsw"
          v-model="newpsw2"
        />
        <span data-placeholder="确认新密码"></span>
      </div>
      <div v-show="isShow" class="warn">两次密码不一致</div>
      <input type="submit" class="logbtn" value="确认修改" @click="changeHandle"/>
    </div>
  </div>
</template>
<script>
import Axios from 'axios'
import { MessageBox } from 'mint-ui'
export default {
    data() {
        return {
            oldpsw:'',
            newpsw:'',
            newpsw2:'',
            indexHeight:'0',
            isShow:false
        }
    },
    mounted() {
    this.indexHeight = document.documentElement.clientHeight - 50 + 'px'

  },
  methods: {
      changeHandle(){
          if(this.newpsw !== this.newpsw2){
              MessageBox.alert('两次密码不一致');
          }else{
              Axios({url:'/api/users/edit',method:'post',data:{id:this.$route.params.userId,oldpsw:this.oldpsw,newpsw:this.newpsw}}).then(res => {
                  console.log(res.data);
              })
          }
      },
    txtbFocusPsw() {
      this.$refs.psw.classList.add("focus");
    },
    txtBlurPsw() {
      if (this.$refs.psw.value === "") {
        this.$refs.psw.classList.remove("focus");
      }
    },
    txtbFocusnewPsw() {
      this.$refs.newpsw.classList.add("focus");
    },
    txtBlurnewPsw() {
      if (this.$refs.newpsw.value === "") {
        this.$refs.newpsw.classList.remove("focus");
      }
    },
    txtbFocusrenewPsw() {
      this.$refs.renewpsw.classList.add("focus");
    },
    txtBlurrenewPsw() {
      if (this.$refs.renewpsw.value === "") {
        this.$refs.renewpsw.classList.remove("focus");
      }
      if(this.newpsw !== this.newpsw2){
          this.isShow = true
      }else{
          this.isShow = false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.warn{
    color:red;
}
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
    // height: 100%;
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


