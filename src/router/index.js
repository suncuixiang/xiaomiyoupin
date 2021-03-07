import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../pages/Home';
import Categories from '../pages/Categories';
import Cart from '../pages/Cart';
import My from '../pages/My';

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
            component:Home
        },
        {
            path:'/categories',
            name:'categories',
            component:Categories
        },
        {
            path:'/cart',
            name:'cart',
            component:Cart
        },
        {
            path:'/my',
            name:'my',
            component:My
        },
        {
            path:'*',
            redirect:'/home'
        }
    ]
})

export default router;