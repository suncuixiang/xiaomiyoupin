<template>
    <div class="menu-box">
        <router-link to="/home">
            <i class="iconfont icon-cangchucangku"></i>
            <span>首页</span>
        </router-link>
        <router-link to="/categories">
            <i class="iconfont icon-fuwuqi"></i>
            <span>分类</span>
        </router-link>
        <router-link to="/cart">
            <i class="iconfont icon-maijiagouwuche"></i>
            <span>购物车</span>
        </router-link>
        <router-link to="/my">
            <i class="iconfont icon-user"></i>
            <span>我的</span>
        </router-link>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less">
.menu-box{
    z-index: 1;
    width: 100%;
    height: 1rem;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a{
        color: #666;
        font-size: .1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        i{
            font-size: .6rem;
        }
    }
}

.router-link-active{
    color: rgb(132, 95, 63) !important;
}
</style>