<template>
  <div class="reg">
    <input type="text" placeholder="邮箱" v-model="email">
    <input type="password" placeholder="密码" v-model="password">
    <button class="login" @click="login">登录</button>
  </div>
</template>

<script>
import axios from 'axios'
import md5 from "md5";
export default {
  name:'Login',
  props:['remail'],
  data() {
    return {
      email:'',
      password:''
    }
  },
  mounted(){
    // 获取从注册组件传过来的邮箱号
    this.email=this.remail || ''
  },
  methods:{
    login(){
      if(this.email==='' ||this.password===''){
        return alert('邮箱或密码不得为空')
      }
      axios.post('http://127.0.0.1:8090/login',{
        email:this.email,
        password:md5(this.password)
      }).then((res)=>{
        if(res.data.status===200){
          // 登陆成功，页面跳转到主页
          alert('登录成功')
        }else{
          alert('账号或密码错误，请重试！')
        }
      })
    }
  }
}
</script>

<style scoped>
  *{
    color: rgb(148,148,148);
  }
  .reg{
    margin: 0 30px;
    position: relative;
  }
  input{
    width: 100%;
    height: 35px;
    margin-bottom: 13px;
    padding-left:0px ;
    padding-right: 0px;
    text-indent: 10px;
    border: 1px solid rgb(148,148,148);
    border-radius: 7px;
  }
  input:hover{
    border: 1px solid rgb(173,223,162);
  }
  input:focus{
    border: 0px;
    outline: none;
    border: 2px solidrgb(173,223,162);
  }
  .login{
    width: 100%;
    border: none;
    padding: 0;
    height: 35px;
    border-radius: 10px;
    background-color: rgb(195, 238, 209);
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .login:hover{
    background-color:rgb(173,223,162);
    color:white
  }
</style>