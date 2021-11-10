<template>
   <div>
        <ul>
            <li v-for="m in messageList" :key="m.id">
                <!-- 第一种params参数写法，模板字符串形式 -->
                <!-- <router-link :to="`/home/message/detail/id=${m.id}/title=${m.title}`">{{m.title}}</router-link>&nbsp;&nbsp; -->

                <!-- 第二种params参数写法，对象形式 -->
                <router-link :to="{
                    name:'xiangqin',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">
                    {{m.title}}
                <button @click="pushShow(m)">push查看</button>
                <button @click="replaceShow(m)">replace查看</button>
                </router-link>&nbsp;&nbsp;
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name:'Message',
    data() {
        return {
            messageList:[
                {id:'001',title:'消息1'},
                {id:'002',title:'消息2'},
                {id:'003',title:'消息3'}
            ]
        }
    },
    methods: {
        pushShow(m){
            this.$router.push({
                name:'xiangqin',
                query:{
                    id:m.id,
                    title:m.title
                }
            })
        },
        replaceShow(m){
            this.$router.replace({
                name:'xiangqin',
                query:{
                    id:m.id,
                    title:m.title
                }
            })
        }
    },
}
</script>

<style>

</style>