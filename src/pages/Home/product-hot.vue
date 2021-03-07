<template>
    <div class="product-hot-box">
        <div class="head">
            <span class="title"></span>
            <a href="" class="more"></a>
        </div>
        <van-swipe :loop="false" :width="300">
            <van-swipe-item>1</van-swipe-item>
            <van-swipe-item>2</van-swipe-item>
            <van-swipe-item>3</van-swipe-item>
            <van-swipe-item>4</van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.product-hot-box{
    background: green;
    height: 3.6rem;
}
</style>
