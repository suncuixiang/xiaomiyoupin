<template>
    <div class="product-hot-box" v-if="prdData">
        <div class="head">
            <span class="title" v-text="prdData.title"></span>
            <a href="" class="more">更多></a>
        </div>
        <!-- :width="100" -->
        <van-swipe class="swipe" :loop="false" :show-indicators="false">
            <van-swipe-item class="swipe-item" v-for="(item,index) in prdData.items" :key="index">
                <img :src="item.item.pic_url" alt="">
                <p class="name" v-text="item.item.name"></p>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
export default {
    props:['prdData']
}
</script>

<style lang="less">
.product-hot-box{
    background: #fff;
    // height: 6rem;
    padding: .14rem;
    display: flex;
    flex-direction: column;
    .head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: .6rem;
        .title{
            font-size: .38rem;
            color: rgb(51, 51, 51);
        }
        .more{
            font-size: .2rem;
            color: rgb(153, 153, 153);
        }
    }
    .swipe{
        // background: pink;
        margin-top: .1rem;
        .van-swipe-item{
            width: 1.9rem !important;
            margin-right: .1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                height: 1.8rem;
                width: 1.8rem;
            }
            .name{
                font-size: .2rem;
                padding: 0 .14rem;
                box-sizing: border-box;
                text-align: center;
            }
        }
        .swipe-item:nth-child(1){
            background: #EDF6F8;
        }
        .swipe-item:nth-child(2){
            background: #FCF7F1;
        }
    }
}
</style>
