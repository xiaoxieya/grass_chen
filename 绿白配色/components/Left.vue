<template>
    <div class="left" @mousewheel.prevent>
        <div class="header">
            <i class="iconfont rr">&#xe668;</i>
            <i class="iconfont r">&#xe600;</i>
            <i class="iconfont l">&#xe601;</i>
            11/32
        </div>
        <div class="main">
            <div href="" class="imageleft"><i class="iconfont">&#xe633;</i></div>
            <div class="image"><img src="../assets/1.jpeg" alt=""></div>
            <div href="" class="imageright"><i class="iconfont">&#xe634;</i></div>
        </div>
        <div class="preview">
            <!-- <ul>
                <li><img src="../assets/2.jpg" alt=""></li>
                <li><img src="../assets/3.jpeg" alt=""></li>
                <li><img src="../assets/4.jpeg" alt=""></li>
                <li><img src="../assets/1.jpeg" alt=""></li>
            </ul> -->
                <img src="../assets/2.jpg" alt="">
                <img src="../assets/3.jpeg" alt="">
                <img src="../assets/4.jpeg" alt="">
                <img src="../assets/1.jpeg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name:'Left'
}
</script>

<style scoped>
    @import "//at.alicdn.com/t/font_2919348_er5qgpwsaf.css";
    .left{
        width: 82%;
        height: 100vh;
        background-color:white;
        position: fixed;
        top: 0;
        left: 0;
    }
    .left .header{
        background-color: white;
        font-size: 22px;
        color: rgb(153,153,153);
        line-height: 60px;
        text-align: center;
        border-bottom: 1px solid rgb(243, 238, 238);
    }
    .left .header i{
        font-size: 25px;
        font-weight: bold;
        cursor: pointer;
    }
    .left .header .l{
        margin-left:20px ;
        float: left;
    }
    .left .header .r,
    .left .header .rr{
        float: right;
        margin-right: 25px;
    }
    .left .main{
        height: 75%;
        display: flex;
        border: 1px solid rgb(243, 238, 238);
    }
    .left .main .imageleft,
    .left .main .imageright{
        width: 10%;
        height: 100%;
        text-align: center;
        background-color: white;
        display: flex;
        cursor: pointer;
    }
    .left .main .imageleft:hover,
    .left .main .imageright:hover{
        background-color: rgb(243, 238, 238);
    }
    .left .main .imageleft i,
    .left .main .imageright i{
        font-size: 50px;
        color: rgb(65, 62, 62);
        opacity: 0.3;
        margin: auto;
    }
    .left .main .image{
        width: 100%;
        height: 100%;
        background-color: white;
        overflow: hidden;
        text-align: center;
        display: flex;
    }
    .left .main .image img{
        /* width: 90%; */
        height: 95%;
        margin: auto;
    }
    /* .left .preview{
        margin-top: 30px;
        width: 100%;
        height: 10%;
        background-color: white;
        position: relative;
        overflow: hidden;
    }
    .left .preview ul{
        margin-left:40% ;
        display: flex;
        height: 100%;
    }
    .left .preview ul li{
        margin-right: 10px;
        cursor: pointer;
        border: 1px solid rgb(153,153,153);
    }
    .left .preview img{
        height: 100%;
    } */
    .left .preview{
        margin-top: 20px;
        width: 100%;
        height: 10%;
        overflow: hidden;
        text-align: center;
    }
    .left .preview img{
        height: 100%;
        margin-right:10px ;
        border: 1px solid rgb(153,153,153);
        cursor: pointer;
    }
</style>