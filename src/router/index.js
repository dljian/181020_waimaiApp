import Vue from 'vue'
import VueRouter from 'vue-router'

import msiteTemp from '../pages/Msite/Msite'
import orderTemp from '../pages/Order/Order'
import profileTemp from '../pages/Profile/Profile'
import searchTemp from '../pages/Search/Search'
import loginTemp from '../pages/login/login'
import messageLogin from '../pages/login/messageLogin'
import passwordLogin from '../pages/login/passwordLogin'

Vue.use(VueRouter)

export default new VueRouter({
    mode:"history",
    routes:[
        {
            path:'/',
            redirect:'/msite',
        },
        {
            path:'/msite',
            component:msiteTemp,
            meta:{
                showFoot:true
            }
        },
        {
            path:'/order',
            component:orderTemp,
            meta:{
                showFoot:true
            }
        },
        {
            path:'/profile',
            component:profileTemp,
            meta:{
                showFoot:true
            }
        },
        {
            path:'/search',
            component:searchTemp,
            meta:{
                showFoot:true
            }
        },
        {
            path:'/login',
            component:loginTemp,
            children:[
                {path:'/login',redirect:'/messageLogin'},
                {path:"/messageLogin",component:messageLogin},
                {path:"/passwordLogin",component:passwordLogin},
            ],
        }
    ],
    linkActiveClass:'active'
})