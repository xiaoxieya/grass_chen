<template>
  <div class="reg">
    <input type="text" placeholder="邮箱" v-model="email">
    <input type="password" placeholder="密码" v-model="password">
    <input type="password" placeholder="确认密码" v-model="repass" @blur="leaveFoucus" @focus="getFoucus">
    <input class="vcode" type="text" placeholder="验证码" v-model.number="vcode">
    <button class="getvcode" @click="send" v-if="isSend"><i v-if="isSend">获取验证码</i></button>
    <button class="getvcodes" v-if="!isSend" disabled><i v-if="!isSend">已发送({{time}}s)</i></button>
    <button class="register" @click="register">注册</button>
  </div>
</template>

<script>
import axios from "axios";
import md5 from "md5";
export default {
  name: "Register",
  data() {
    return {
      email: "",
      password: "",
      repass:'',
      vcode: "",
      isSend:true,
      time:30
    };
  },
  methods: {
    // 注册按钮
    register() {
      console.log(md5(this.vcode));
      if(this.email===''||this.password===''||this.repass==='' || this.password!=this.repass){
        return alert('请认真填写哦！')
      }
      if (md5(this.vcode) === localStorage.getItem("vcode")) {
        // alert("注册成功！");
        axios.get('http://127.0.0.1:8090/registed',{
          params:{
            email:this.email,
            password:md5(this.password)
          }
        }).then((res)=>{
          if(res.data.status===200){
            // 跳转到主页面
            alert('注册成功')
          }else if(res.data.status===302){
            if(confirm('用户已经存在,是否登录')){
              //跳转到登录页面
              this.$router.push({
                name:'login',
                query:{
                  remail:this.email
                }
              })
            }
          }else{
            alert('未知错误')
          }
        })
      }else{
        alert('请输入验证码')
      }
    },
    // 发送验证码
    send(e) {
      if(this.email==""){
        return alert('请填写邮箱哦~')
      }
      console.log('点击了')
      axios.get("http://127.0.0.1:8090/register", {
          params: {
            email: this.email,
          },
      }).then((res) => {
        localStorage.setItem("vcode", res.data.vcode);
          // console.log(res.data)
        this.tid=setInterval(() => {
          if(this.time===30){
            this.isSend=false
          }
          this.time--
          if(this.time===0){
            clearInterval(this.tid)
            this.isSend=true
            this.time=30
          }
        }, 1000);
      });

    },
    leaveFoucus(e){
      if(this.password!==this.repass){
        e.target.type='text'
        e.target.value='两次密码输入不一致'
        e.target.style='border: 1px solid red;'
      }else{
              e.target.style=''
      }
    },
    getFoucus(e){
      e.target.type='password'
      e.target.value=''
      e.target.style='border: 2px solid rgb(146, 214, 169);'
    }
  },
};
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
    border-radius: 7px;
    margin-bottom: 13px;
    padding-left: 0px;
    padding-right: 0px;
    text-indent: 10px;
    border: 1px solid rgb(148,148,148);
  }
  input:hover{
    border: 1px solid rgb(173,223,162);
  }
  input:focus{
    border: 0px;
    outline: none;
    border: 2px solid rgb(173,223,162);
  }
  .vcode{
    width: 70%;
    border-radius: 7px 0 0 7px;
  }
  .getvcode{
    width: 30%;
    padding: 0;
    height: 39px;
    background-color: white;
    border: 1px solid rgb(148,148,148);
    border-radius: 0 7px 7px 0;
    outline: none;
    position: absolute;
    border-left: none;
  }
  .getvcode:hover{
      outline: none;
      border: none;
      border: 1px solid rgb(148,148,148);
      border-left: none;
      background-color: rgb(173,223,162);
      color: white;
  }
  .getvcode:active{
    background-color: rgb(173,223,162);
    color: white;
  }
  .getvcode i{
    display: block;
    font-size: 12px;
    transform: scale(0.8);
  }
  .getvcode:hover i{
    color:white
  }
  .getvcodes{
  width: 30%;
  padding: 0;
  height: 39px;
  background-color: white;
  border: 1px solid rgb(148,148,148);
  border-radius: 0 7px 7px 0;
  outline: none;
  position: absolute;
  border-left: none;
}
  .getvcodes i{
    display: block;
    font-size: 12px;
    transform: scale(0.8);
  }
  .register{
    width: 100%;
    border: none;
    padding: 0;
    height: 35px;
    border-radius: 10px;
    background-color: rgb(195, 238, 209);
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .register:hover{
    background-color: rgb(173,223,162);
    color:white
  }
</style>