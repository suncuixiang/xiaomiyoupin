<template>
    <div class="my-box">
        <van-cell class="info" :title="userInfo.name" is-link :to="userInfo.to">
            <template #icon>
                <van-icon :name="userInfo.icon" class="user-icon" />
            </template>
        </van-cell>

        <van-cell title="我的订单" is-link to="index" />

        <div class="focus-box">
            <div class="focus-item" v-for="(item,index) in focusList" :key="index">
                <img :src="item.img" alt="">
                <p v-text="item.name"></p>
            </div>
        </div>

        <van-cell class="tabs-box" v-for="(item,index) in tabList" :key="index" :title="item.name" is-link :to="item.to">
            <template #icon>
                <van-icon :name="item.icon" class="suffix-icon" />
            </template>
        </van-cell>
    </div>
</template>

<script>
export default {
    data(){
        return {
            userInfo:{
                icon:'https://img.youpin.mi-img.com/shopcenter/415b0fd8150f58ee2b85caa2ee9cef8f.png',
                name:'请登录',
                to:''
            },
            focusList:[
                {
                    img:'https://img.youpin.mi-img.com/shopcenter/1su4kcv21eg_22212270231600948691418.png',
                    name:'待付款'
                },
                {
                    img:'https://img.youpin.mi-img.com/shopcenter/2rsi345c8a_22212270231600948691450.png',
                    name:'待收货'
                },
                {
                    img:'https://img.youpin.mi-img.com/shopcenter/n9q7tuhs6ao_22212270231600948691455.png',
                    name:'评价'
                },
                {
                    img:'https://img.youpin.mi-img.com/shopcenter/q69ib1u9teg_22212270231600948691439.png',
                    name:'退款/售后'
                },
            ],
            tabList:[
                {
                    icon:'https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_icon_myassets.png',
                    name:'我的权益',
                    to:'index'
                },
                {
                    icon:'https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_icon_coupon_new.png',
                    name:'优惠券',
                    to:'index'
                },
                {
                    icon:'https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_icon_collection.png',
                    name:'我的收藏',
                    to:'index'
                },
                {
                    icon:'https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_icon_address.png',
                    name:'地址管理',
                    to:'index'
                },
                {
                    icon:'https://shop.io.mi-img.com/app/shop/img?id=shop_0556651f21ebb90fd2094de25cfeeeff.png&w=114&h=114',
                    name:'资质证照',
                    to:'index'
                },
                {
                    icon:'https://shop.io.mi-img.com/app/shop/img?id=shop_eec55569c325c1641e1cd47ba572b83b.png&w=114&h=114',
                    name:'协议规则',
                    to:'index'
                },
                {
                    icon:'https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_icon_feedback.png',
                    name:'帮助与反馈',
                    to:'index'
                },
            ]
        }
    }
}
</script>

<style lang="less">
.my-box{
    .info{
        // background: #845F3F;
        background: url('https://m.xiaomiyoupin.com/youpin/static/m/res/images/ucenter/ucenter_bg_top.png')  no-repeat;
        background-size: 100%;
        display: flex;
        align-items: center;
        padding: .4rem;
        &::after{
            border-bottom: none;
        }
        .user-icon{
            width: 1.2rem;
            height: 1.2rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .van-cell__title{
            color: #fff;
            font-size: .2rem;
            margin-left: .3rem;
        }
        .van-icon-arrow{
            font-size: .5rem;
        }
    }
    .van-cell__title{
        font-size: .2rem;
    }
    .focus-box{
        margin-bottom: .16rem;
        background: #fff;
        padding: 0 .2rem .1rem;
        display: flex;
        justify-content: space-around;
        align-items: center;
        .focus-item{
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: .8rem;
            }
            p{
                font-size: .2rem;
                color: #777;
            }
        }
    }
    .tabs-box{
        display: flex;
        align-items: center;
        height: 1rem;
        .suffix-icon{
            width: .7rem;
            height: .7rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>