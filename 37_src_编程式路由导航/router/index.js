import VueRouter from 'vue-router'

import About from '../pages/About'
import Home from '../pages/Home'
import Message from '../pages/Message'
import News from '../pages/News'
import Detail from '../pages/Detail'

export default new VueRouter({
    routes:[
        {
            path:'/about',
            component:About
        },
        {
            path:'/home',
            component:Home,
            children:[
                {
                    path:'news',
                    component:News
                },
                {
                    path:'message',
                    component:Message,
                    children:[
                        {
                            name:'xiangqin',
                            path:'detail/:id/:title',
                            component:Detail,
                            // props的第一种写法 对象,该对象中的所有key-value都会以props的形式传给Details组件
                            // props:{
                            //     a:1,
                            //     b:'hello'
                            // }

                            // 第二种写法 布尔值 若布尔为真，就会把该路由收到的所有params参数，以props的形式传给Detail组件
                            // props:true

                            // 第三种写法 函数 返回值会以props传给Detail组件
                            props($route){
                                return {
                                    ...$route.query
                                }
                            }
                        }
                    ]
                }
            ]
        }
    ]
})