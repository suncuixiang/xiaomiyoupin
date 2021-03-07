<template>
    <div class="menu-box">
        <van-tabbar route>
            <van-tabbar-item
                v-for="(item,index) in tabbars"
                :key="index"
                replace 
                :to="item.path"
            >
                <span :class="currIndex == index ? active:''">{{item.title}}</span>
                <template slot="icon" slot-scope="props">
                    <img :src="props.active ? item.active : item.normal">
                </template>
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tabbars: [
                {
                    name: "home",
                    path:'/home',
                    title: "首页",
                    normal: require("../../assets/icon/home.png"),
                    active: require("../../assets/icon/home_fill.png")
                },
                {
                    name: "category",
                    path:'/categories',
                    title: "分类",
                    normal: require("../../assets/icon/news_hot.png"),
                    active: require("../../assets/icon/news_hot_fill.png")
                },
                {
                    name: "cart",
                    path:'/cart',
                    title: "购物车",
                    normal: require("../../assets/icon/cart.png"),
                    active: require("../../assets/icon/cart_fill.png")
                },
                {
                    name: "mine",
                    path:'/my',
                    title: "我的",
                    normal: require("../../assets/icon/people.png"),
                    active: require("../../assets/icon/people_fill.png")
                }
            ]
        };
    },
}
</script>

<style lang="less">
.menu-box{
    .van-tabbar-item--active{
        color: rgb(132, 95, 63);
    }
    .van-tabbar-item__icon{
        img{
            height: .6rem;
            width: .6rem;
        }
    }
}
</style>