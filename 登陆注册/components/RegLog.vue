<template>
  <div class="out">
    <h1><i class="iconfont" style="font-size:25px;margin-right:5px">&#xe617;</i>草忱</h1>
      <ul class="nav">
        <li>
          <router-link to='/register' active-class="active">用户注册</router-link>
        </li>
        <li>
          <router-link to='/login' active-class="active">账号登录</router-link>
        </li>
      </ul>
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
    name:'RegLog'
}
</script>

<style scoped>

  @import "//at.alicdn.com/t/font_2911984_n6g3zsk2e0h.css";

  *{
    text-decoration: none;
  }
  h1{
    margin: 30px 0 20px 0;
    font-size: 25px;
    font-weight: bold;
    text-align: center;
    color: rgb(173,223,162);
  }
  .out{
    border: 1px solid rgb(173,223,162);
    box-shadow: 2px 2px 2px rgb(173,223,162);
    width: 270px;
    border-radius: 5px;
  }
  .nav{
    width:100%;
    line-height: 40px;
    margin-bottom: 10px;
    display: flex;
    font-weight: bolder;
    justify-content: space-around;
  }
  .nav a{
    color:rgb(148,148,148);
  }
  .active{
    border-bottom:3px solid rgb(173,223,162);
  }
</style>