<template>
    <div class="swiper">
        <van-swipe class="my-swipe" :loop="true" :autoplay="2000"  indicator-color="white">
            <van-swipe-item v-for="item in bannerData" :key="item.id">
                <!-- <router-link :to="{path:`/detail/${item.id}`}">
                    <img :src="item.image" alt="">
                </router-link> -->
                <img :src="item.item.pic_url" alt="">
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    props:['bannerData']
}
</script>

<style lang="less">
.my-swipe .van-swipe-item {
    color: #fff;
    height: 3.2rem;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;

    img{
        display: block;
        width: 100%;
        height: 100%;
    }
}

.swiper {
    .van-swipe__indicators{
        left: 85%;
        align-items: flex-end;
        .van-swipe__indicator{
            background: #fff;
            border-radius: 0;
            width: .2rem;
            height: .1rem;
            margin-right: 3px;
            opacity: 1;
        }
        .van-swipe__indicator--active{ 
            height: .3rem;
            width: .2rem;
        }
    }
}
</style>