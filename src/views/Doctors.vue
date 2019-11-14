<template>
  <div>
    <!-- 医生列表
         <button @click="handleClick">doctor_img</button>
         <button @click="handleClick2">返回</button> -->
    <mt-header title="医师列表">
      <router-link to="/message" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>

    <main>
      <ul>
        <li>
          <dl>
            <dt><img src="" alt=""></dt>
            <dd>
              <p>何仙姑</p>
              <p>执业中医师   疑难病儿科</p>
              <p>问诊费：<span>￥30元/次</span></p>
            </dd>
          </dl>
        </li>
      </ul>
      <ul>
        <li>
          <dl>
            <dt><img src="" alt=""></dt>
            <dd>
              <p>何仙姑</p>
              <p>执业中医师   疑难病儿科</p>
              <p>问诊费：<span>￥30元/次</span></p>
            </dd>
          </dl>
        </li>
      </ul>
      <ul>
        <li>
          <dl>
            <dt><img src="" alt=""></dt>
            <dd>
              <p>何仙姑</p>
              <p>执业中医师   疑难病儿科</p>
              <p>问诊费：<span>￥30元/次</span></p>
            </dd>
          </dl>
        </li>
      </ul>
      <ul>
        <li>
          <dl>
            <dt><img src="" alt=""></dt>
            <dd>
              <p>何仙姑</p>
              <p>执业中医师   疑难病儿科</p>
              <p>问诊费：<span>￥30元/次</span></p>
            </dd>
          </dl>
        </li>
      </ul>
      <ul>
        <li>
          <dl>
            <dt><img src="" alt=""></dt>
            <dd>
              <p>何仙姑</p>
              <p>执业中医师   疑难病儿科</p>
              <p>问诊费：<span>￥30元/次</span></p>
            </dd>
          </dl>
        </li>
      </ul>
      <ul>
        <li>
          <dl>
            <dt><img src="" alt=""></dt>
            <dd>
              <p>何仙姑</p>
              <p>执业中医师   疑难病儿科</p>
              <p>问诊费：<span>￥30元/次</span></p>
            </dd>
          </dl>
        </li>
      </ul>
      <ul>
        <li>
          <dl>
            <dt><img src="" alt=""></dt>
            <dd>
              <p>何仙姑</p>
              <p>执业中医师   疑难病儿科</p>
              <p>问诊费：<span>￥30元/次</span></p>
            </dd>
          </dl>
        </li>
      </ul>
      <ul>
        <li>
          <dl>
            <dt><img src="" alt=""></dt>
            <dd>
              <p>何仙姑</p>
              <p>执业中医师   疑难病儿科</p>
              <p>问诊费：<span>￥30元/次</span></p>
            </dd>
          </dl>
        </li>
      </ul>
    </main>

  </div>
</template>
<script>
import { Header } from "mint-ui";
import Vue from "vue";
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
<style lang="scss" scoped>
header {
  width: 100%;
  height: .54rem;
  line-height: .2rem;
  text-align: center;
  box-shadow: 0px 2px 8px -1px rgba(204, 204, 204, 1);
  border: 1px solid rgba(255, 0, 0, 0);
  background: #ffffff;
  color: #101010 ;
  font-size: .18rem;
  .mint-header-button{
    color: #959595 ;

  }
}

main{
  widows: 100%;
   margin-bottom: .5rem;
   height: 100%;
  ul{
    width: 100%;
    li{
      width: 100%;
      height: 1rem;
      background: #FAF8EC ;
      margin-top: .18rem;
      display: block;
      dl{
        width: 100%;
        height: 1rem;
        dt{
          float: left;
          width: 1.32rem;
          height: 1rem;
          padding-top:.05rem; 

          img{
            width: .9rem;
            height: .9rem;
            background: lightpink;
            border-radius: 50%;
            margin-left: .42rem;
          }
        }
        dd{
          float: left;
          width: 1.6rem;
          height: .78rem;
          margin: .11rem .2rem 0 .11rem;
          p{
            font-size: .14rem;
            color: #101010;
            margin-bottom: .09rem;  
            span{
              color: #E83F42 ;
            }
          }
        }
      }
    }
  }
}
</style>
