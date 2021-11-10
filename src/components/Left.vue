<template>
    <div class="left" @mousewheel.prevent>
        <div class="header">
            <a :href="imgPath" :download="imgPath"><i class="iconfont rr">&#xe668;</i></a>
            <i class="iconfont r" @click="fullScreen">&#xe600;</i>
            <i class="iconfont l">&#xe601;</i>
            <span>{{this.imgId+1}}/{{path.length}}</span>
        </div>
        <div class="main">
            <div href="" class="imageleft" @click="turnLeft"><i class="iconfont">&#xe633;</i></div>
            <div class="image" @dblclick="fullScreen"><img :src="imgPath" alt=""></div>
            <div href="" class="imageright" @click="turnRight"><i class="iconfont">&#xe634;</i></div>
        </div>
        <div class="preview" ref="preview">
            <img 
                :class="{imgFocus:imgId==index}" 
                v-for="(item,index) in path" 
                :key="item.id" 
                :src="item.path" 
                @click="selectImg(item.path,index)"
            >
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:'Left',
    data() {
        return {
            path:[],
            imgPath:'',
            imgId:0,
            imgFocus:''
        }
    },
    mounted(){
        axios.get('http://127.0.0.1:8090/image')
        .then((res)=>{
            console.log(res.data)
            for(let i=0;i<res.data.length;i++){
                this.path.push(
                    {
                        id:res.data[i].id,
                        path:`http://127.0.0.1:8090/${res.data[i].path}`
                    }
                )
            }
            console.log(this.path)
            this.imgPath=this.path[0].path
        })
    },
    computed:{
        imgAdd(){
            return 45-this.imgId*11
        }    
    },
    methods:{
        selectImg(path,index){
            this.imgPath=path
            this.imgId=index
            // this.imgFocus='imgFocus'
            this.$refs.preview.style.marginLeft=`${this.imgAdd}%`
        },
        turnLeft(){
            if(this.imgId-- <= 0){
                this.imgId=0
            }
            this.imgPath=this.path[this.imgId].path
            this.$refs.preview.style.marginLeft=`${this.imgAdd}%`
        },
        turnRight(){
            if(this.imgId++ >= this.path.length-1){
                this.imgId=this.path.length-1
            }
            this.imgPath=this.path[this.imgId].path
            this.$refs.preview.style.marginLeft=`${this.imgAdd}%`
        },
        fullScreen(){
            document.documentElement.webkitRequestFullScreen()
        }
    }
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
    .left .header a{
        color: rgb(153,153,153);
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
    .left .header span{
        margin-left: 50px;
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
        /* cursor: zoom-in ; */
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
    .left .preview{
        transition: 0.7s;
        margin-top: 20px;
        margin-left: 45%;
        width: 100%;
        height: 10%;
        /* flex-wrap: nowrap; */
        /* display: flex; */
        /* overflow: hidden; */
        white-space: nowrap;
    }
    .left .preview img{
        object-fit:cover ;
        width: 10%;
        height: 110%;
        margin-right:15px ;
        border: 1px solid rgb(173, 223, 162);
        opacity: 0.5;
        cursor: pointer;
    }
    .imgFocus{
        opacity: 1 !important;
        border: 2px solid rgb(173, 223, 162) !important;
        transform: scale(1.1);
    }
</style>