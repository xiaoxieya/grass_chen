<template>
    <div class="right">
        <div class></div>
        <div class="userinfo">
            <img src="../assets/3.jpeg" alt="">
            <div class="user">
                <a href="">小谢吖</a>
                <span>
                    <p>10月1日</p>
                    <i class="iconfont">&#xe661;</i>
                    54655
                </span>
            </div>
            <button>
                关注
            </button>
        </div>
        <div class="works">
            <h2>心之所向</h2>
            <p>这是一个简介</p>
            <ul class="clearfix">
                <li>#原创</li>
                <li>#唯美</li>
                <li>#甜系</li>
            </ul>
        </div>
        <div class="comment">
            <div class="mycomment">
                <!-- 头像 -->
                <img src="../assets/4.jpeg" alt="">
                <textarea placeholder="留下自己的想法吧~"></textarea>    
            </div>
            <div class="info">
                <p>您的评论就是对作者最大的肯定</p>
                <a href="">评论</a>
            </div>
            <ul class="othercomment">
                <li>
                    <img src="../assets/1.jpeg" alt="">
                    <!-- 昵称 -->
                    <a>早啊啊</a>
                    <!-- 内容 -->
                    <p class="content">content</p>
                    <p class="time">10月17日</p>
                    <i class="iconfont">&#xe651;</i>
                </li>
                 <li>
                    <img src="../assets/2.jpg" alt="">
                    <!-- 昵称 -->
                    <a>小张</a>
                    <!-- 内容 -->
                    <p class="content">好喜欢这样的小姐姐</p>
                    <p class="time">10月18日</p>
                    <i class="iconfont">&#xe651;</i>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:'Right'
}
</script>

<style scoped>
@import '//at.alicdn.com/t/font_2919348_uwxa39nrnkr.css';
    .right{
        width: 15%;
        height: 100vh;
        background-color: black;
        color: white;
        border-left: 1px solid rgb(28,29,30);
        position: absolute;
        top: 0;
        right: 0;
    }
    .right .userinfo{
        display: flex;
        margin-top:60px ;
        padding: 10px 0;
        border-bottom: 1px solid rgb(28,29,30);
        border-top: 1px solid rgb(28,29,30);
    }
    .right button{
        margin: auto;
        width: 65px;
        height: 30px;
        background-color: black;
        border: 1px solid rgb(201,154,5);
        color: rgb(201,154,5);
    }
    .right .userinfo img{
        margin-left: 10px;
        border-radius: 50% 50%;
        width: 20%;
    }
    .right .user{
        margin: auto;
        margin-left: 10px;
    }
    .right .user a{
        display: block;
        color: white;
        margin-bottom: 10px;
        text-decoration: none;
    }
    .right .user span{
        display: flex;
        align-items: center;
        font-size: 12px;
    }
    .right .user span p,
    .right .user span i{
        margin-right: 5px;
        color: rgb(128,128,128);
    }
    .works{
        /* height:10% ; */
        background-color: black;
        font-size: 15px;
        border-bottom: 1px solid rgb(28,29,30);
    }
    .works h2,
    .works p{
        padding-bottom: 12px;
        padding-left:10px ;
    }
    .clearfix::after{
        content: '';
        display: table;
        clear: both;
    }
    .works h2{
        padding-top: 20px;
    }
    .works p{
        /* text-indent: 2em; */
        font-size: 13px;
    }
    .works ul{
        padding-bottom: 20px;
        padding-left:10px ;
        font-size: 13px;
    }
    .works ul li{
        float: left;
        margin-right: 8px;
    }
    .right .comment .mycomment{
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        align-items: center;
    }
    .right .comment .mycomment img{
        width: 40px;
        height: 40px;
        border-radius: 50% 50%;
        margin-left: 10px;
        margin-right: 10px;
    }
    .right .comment .mycomment textarea{
        background-color: rgb(28,29,30);
        border: none;
        width: 70%;
        height: 70px;
        color:white;
    }
    .right .comment .mycomment textarea:focus{
        border: none;
    }
    .right .comment .info{
        padding-bottom: 20px;
        margin-bottom: 20px;
        border-bottom:1px solid rgb(28,29,30) ;
    }
    .right .comment .info p{
        margin-left: 60px;
        font-size: 12px;
        display: inline;
        color: rgb(61, 63, 65);
    }
    .right .comment .info a{
        text-decoration: none;
        color: rgb(201,154,5);
        margin-left: 80%;
    }
    .right .comment .othercomment{
        background-color: black;
    }
    .right .comment .othercomment li{
        margin: 20px 0;
        padding: 20px 0;
        position: relative;
        align-items: center;
    }
    .right .comment .othercomment img{
        width: 40px;
        height: 40px;
        border-radius: 50% 50%;
        margin-left: 10px;
    }
    .right .comment .othercomment a{
        position: absolute;
        left: 60px;
        top: 25px;
    }
    .right .comment .othercomment .content{
        position: absolute;
        left: 60px;
        top: 45px;
        margin-top: 5px;
        font-size: 14px;
    }
    .right .comment .othercomment .time{
        position: absolute;
        font-size: 12px;
        left: 60px;
        bottom: 0px;
        color: rgb(176,181,184);
    }
    .right .comment .othercomment i{
        position: absolute;
        margin-left: 70%;
        bottom: 0px;
        cursor: pointer;
        color: rgb(176,181,184);
    }
</style>