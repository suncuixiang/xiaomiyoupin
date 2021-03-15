<template>
    <div class="cart-box">
        <div class="no-login">
            <div class="head-box">
                <van-cell class="head" title="购物车" is-link arrow-direction="left" to="my" />
                <van-cell ref="fixhead" class="fix-head" title="购物车" is-link arrow-direction="left" to="my" />
            </div>
            <div class="empty">
                <img src="https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/no_result/no_result_cart.png" alt="">
                <p>登陆后才能看到商品哦~</p>
                <van-button round to="login">立即登录</van-button>
            </div>
        </div>
        <div class="recommend">
            <div class="title">
                <img src="https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/common/recheader_left.png" alt="">
                <span>为你推荐</span>
                <img src="https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/common/recheader_right.png" alt="">
            </div>
            <prod-list :data='recommendList'></prod-list>
        </div>
    </div>
</template>

<script>
import prodList from '../../components/ProdList'
// import {getRecommendList} from '../../api/cart'
import { getProdList } from '../../api/home';
export default {
    data(){
        return {
            recommendList: []
        }
    },
    components:{
        prodList
    },
    methods:{
        isFixHeadShow(e){
            let scrolltop = e.target.scrollTop;
            if(scrolltop < 100){
                this.$refs.fixhead.style.display='none';
            }
            if(scrolltop > 100 && scrolltop < 200){
                this.$refs.fixhead.style.display='flex';
            }
        }
    },
    mounted(){
        window.addEventListener('scroll',this.isFixHeadShow,true);
    },
    created(){
        // getRecommendList().then(res=>{
        //     this.recommendList = res;
        // })
        getProdList().then(res=>{
            // console.log(res);
            this.recommendList=res;
        })
    }
}
</script>

<style lang="less">
.cart-box{
    margin-bottom: 1.6rem;
    .no-login{
        .van-cell.head,.van-cell.fix-head{
            display: flex;
            flex-direction: row-reverse;
            align-items: center;
            .van-cell__title{
                text-align: center;
            }
        }
        .van-cell.head{
            background: url('https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/common/bg_page_header.png') no-repeat;
            background-size: 100%;
            height: 2rem;
            .van-cell__title{
                color: #fff;
                font-size: .5rem;
                font-weight: 600;
                // text-align: center;
            }
            .van-icon-arrow-left{
                color: #fff;
            }
        }
        .van-cell.fix-head{
            position: fixed;
            top: 0;
            left: 0;
            display: none;
            // display: flex;
            z-index: 100;
        }

        .empty{
            padding: .8rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            img{
                width: 2rem;
            }
            p{
                font-size: .3rem;
                color: #777;
                margin: .24rem 0;
            }
            .van-button{
                border: .01rem solid #777;
                border-radius: .3rem;
                height: .7rem;
                .van-button__text{
                    color: #777;
                    font-size: .1rem;
                }
            }
        }
    }
    .recommend{
        margin: 0 auto;
        text-align: center;
        .title{
            img{
                width: .5rem;
            }
            span{
                font-size: .3rem;
                font-weight: 600;
            }
        }
    }
}
</style>