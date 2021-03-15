import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Cart from '../pages/Cart';
import My from '../pages/My';
import Login from '../pages/Login'
import Menu from "../components/Menu"

Vue.use(VueRouter);

const router = new VueRouter({
    mode:'hash',
    routes:[
        {
            path:'/',
            redirect:'/home'
        },
        {
            path:'/home',
            name:'home',
            // component:Home
            components: {
                default:Home,
                Footer: Menu
            }
        },
        {
            path:'/categories',
            name:'categories',
            // component:Categories
            components: {
                default:Categories,
                Footer: Menu
            }
        },
        {
            path:'/cart',
            name:'cart',
            // component:Cart
            components: {
                default:Cart,
                Footer: Menu
            }
        },
        {
            path:'/my',
            name:'my',
            // component:My
            components: {
                default:My,
                Footer: Menu
            }
        },
        {
            path:'/login',
            name:'login',
            component:Login
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
})

export default router;