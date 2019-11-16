<template>
  <div class="body">
    <mt-header title="问诊记录">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <ul>
      <li v-for="item of datalist" :key="item._id" @click="handleClick(item.userId)">
        <header><h5>{{item.name}}</h5></header>
        <div>
          <p>年龄:<span>{{item.age}}</span></p>
          <p>性别:<span>{{item.sex}}</span></p>
          <p>病史:<span>{{item.history}}</span></p>
          <p>冷热:<span>{{item.feel}}</span></p>
          <p>出汗情况:<span>{{item.perspire}}</span></p>
          <nav>已回复</nav>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
    import Axios from 'axios'

    export default {
        data() {
            return {
                datalist: []
            }
        },
        mounted() {
            this.$store.commit('hideTabbar')
            Axios.get('/api/question/info/list', {params: {id: this.$store.state.my_title.Id}}).then(res => {
                console.log(res.data)
                this.datalist = res.data
            })
        },
        methods:{
          handleClick(id){
              this.$router.push(`/feedback/${id}`)
          }
        },
        destroyed() {
            this.$store.commit('showTabbar')
        },
    }
</script>
<style lang="scss" scoped>
  .body {
    background: rgb(235, 234, 234);

    ul {
      li {
        width: 100%;
        height: 2rem;
        background: white;
        margin-top: .2rem;
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;

        header {
          border-bottom: 1px solid #ccc;
          height: .3rem;

          h5 {
            height: .3rem;
            line-height: .3rem;
            margin-left: .5rem;
            font-size: .15rem;
            color: #f60;
          }
        }

        div {
          position: relative;

          p {
            margin-left: .5rem;
            margin-top: .1rem;
            color: black;

            span {
              color: #f60;
              margin: .05rem;
            }
          }

          nav {
            position: absolute;
            top: .2rem;
            right: .4rem;
            border-radius: 50%;
            width: .7rem;
            height: .7rem;
            line-height: .7rem;
            background: white;
            border: 1px solid #ccc;
            text-align: center;
            font-weight: 900;
            color: rgb(236, 84, 89);
            transform: rotate(30deg);
          }
        }
      }
    }
  }

  .mint-header {
    background: white;
    color: black;
    border-bottom: 1px solid #ccc;
  }

  a {
    text-decoration: none;
  }

  /deep/ body {
    background: rgb(235, 234, 234);
  }
</style>
