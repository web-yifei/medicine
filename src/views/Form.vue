<template>
    <div class="body">
        <mt-header fixed title="问诊表">
                <mt-button icon="back" slot="left" @click="handleClick"></mt-button>
        </mt-header>
  
         <div class="head">
            <div class="img">
                <img :src="'http://localhost:3000'+$store.state.my_title.headPic" alt="">
            </div>
            <div class="intro">
                <p>陈亦霏</p>
                <div> <span>职业中医师</span> <span>疑难病儿科</span></div>
            </div>
        </div>

        <el-form :label-position="labelPosition" label-width="80px" :model="form">
          <el-form-item label="姓名:" >
            <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
          </el-form-item>

          <el-form-item label="年龄:" >
            <el-input v-model="form.age" placeholder="请输入年龄"></el-input>
          </el-form-item>

          <el-form-item label="性别:">
            <el-radio-group v-model="form.sex" >
              <el-radio label="男"></el-radio>
              <el-radio label="女"></el-radio>
            </el-radio-group>
          </el-form-item>

          <el-form-item label="病史:">
            <el-input type="textarea" v-model="form.history" placeholder="病历"></el-input>
          </el-form-item>

          <el-form-item label="寒热:" >
            <el-input v-model="form.feel" placeholder="是否感觉冷热"></el-input>
          </el-form-item>

          <el-form-item label="出汗情况:" >
            <el-input v-model="form.perspire" placeholder="昼夜出汗情况"></el-input>
          </el-form-item>

          <el-form-item label="疼痛部位:">
            <el-input type="textarea" v-model="form.hurt" placeholder="疼痛部位及部位的其他症状"></el-input>
          </el-form-item>

          <el-form-item label="二便:">
            <el-input type="textarea" v-model="form.shit" placeholder="大小便排便情况"></el-input>
          </el-form-item>

           <el-form-item label="烟酒情况:">
            <el-checkbox-group v-model="form.smoke">
              <el-checkbox label="饮酒" smoke="type"></el-checkbox>
              <el-checkbox label="吸烟" smoke="type"></el-checkbox>
              <el-checkbox label="二者都不" smoke="type"></el-checkbox>
              <el-checkbox label="二者都有" smoke="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>

          <el-form-item label="饮食习惯:">
            <el-input type="textarea" v-model="form.habit" placeholder="喜好的饮食，厌恶的饮食"></el-input>
          </el-form-item>

          <el-form-item label="是否胸闷:">
            <el-radio-group v-model="form.chest" >
              <el-radio label="是"></el-radio>
              <el-radio label="否"></el-radio>
            </el-radio-group>
          </el-form-item>

          
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-success="handleSuccess"
            :on-remove="handleRemove"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            v-model="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
      </el-form>
        <button class="commit" @click="getAll">提交</button>
   
    </div>

 
</template>
<script>
export default {
  data() {
      return {
       labelPosition: 'right',
        form: {
          name: '',
          age: '',
          sex:'',
          history:'',
          feel:'',
          perspire:'',
          hurt:"",
          shit:"",
          smoke:[],
          habit:"",
          chest:"",
        },
         fileList: []
      }
    },
  methods: {
    handleClick () {
      this.router.back();
    },
    getAll(){
      console.log(this.fileList);
      
    },
    handleRemove(file, fileList) {
      this.fileList.remove(file);
      console.log(this.fileList);
    },
    handleSuccess(response, file, fileList) {
      this.fileList.push(file);
      console.log(this.fileList);

    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    }
     
  },
  beforeMount () { 
     this.$store.commit('hideTabbar')
  },
  beforeDestroy () { 
     this.$store.commit('showTabbar')
  },
}
</script>
<style lang="scss">
  .el-message-box{
      width: 3.35rem !important;
   }
  .body{
     background: #fff;
      position: relative;
    .commit{
      width: 100%;
      height: .5rem;
      background:rgb(236, 84, 89);
      padding: 0;
      border: 0;
      position: fixed;
      bottom: 0;
      left: 0;
      border-radius: .1rem;
      color: white;
      font-size: .16rem;
    }
    div.head{
        height: .9rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        border-bottom: .01rem solid #ccc;
        margin-top: .4rem;
        .img{
            height: .72rem;
            width: .72rem;
            img{
                width: 100%;
                border-radius: 50%;
            }
        }
        .intro{
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
     .mint-header{
        background: white;
        color: black;
        border-bottom: 1px solid #ccc;
    }
    form{
      width: 90%;
      height:10.5rem;
      border-radius: 5px;
      border: 1px solid #ccc;
      margin: 0 auto;
      margin-top: .1rem;
      margin-bottom: .6rem;
        /deep/.el-form-item__label{
          padding: 0;
          text-align: center;
        }
        /deep/.el-form-item{
          margin-bottom:.15rem;
        }
        /deep/.el-input__inner{
          height: .25rem;
          line-height: .25rem;
          width: 90%;
        }
        /deep/.el-textarea__inner{
            width:90%;
            height: 1rem;
        }
        /deep/.el-checkbox__inner{
          position: static;
        }
        /deep/.upload-demo{
          width: 90%;
          margin: 0 auto;
        }  
        /deep/.el-button--primary{
          background:rgb(236, 84, 89);
          border: 0;

        }
    }
  }
   
  
</style>
