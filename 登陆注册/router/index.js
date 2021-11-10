import VueRouter from 'vue-router'

import Register from '../pages/Register.vue'
import Login from '../pages/Login.vue'

export default new VueRouter({
    routes:[
        {
            name:'register',
            path:'/register',
            component:Register
        },
        {
            name:'login',
            path:'/login',
            component:Login,
            props($route){
                return {
                    ...$route.query
                }
            }
        }
    ]
})