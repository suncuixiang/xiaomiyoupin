<template>
    <div class="cart-box">
        <div class="content">
            <div class="head-box">
                <van-cell class="head" title="购物车" is-link arrow-direction="left" to="my" />
                <van-cell ref="fixhead" class="fix-head" title="购物车" is-link arrow-direction="left" to="my" />
            </div>
            <div v-if="!isLogin"  class="empty">
                <img src="https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/no_result/no_result_cart.png" alt="">
                <p>登陆后才能看到商品哦~</p>
                <van-button round to="login">立即登录</van-button>
            </div>
            <div v-if="isLogin" class="login">
                <div class="empty-box">
                    <van-empty
                    class="custom-image"
                    image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
                    description="购物车还是空的"
                    />
                    <van-button class="look" round block to="home" >随便看看</van-button>
                </div>
                <div class="full-box">
                    <!-- <van-card
                    price="2.00"
                    desc=""
                    title="商品标题"
                    thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
                    >
                    <template #num>
                        <van-stepper v-model="num" />
                    </template>
                    </van-card>
                    <van-submit-bar :price="31050" button-text="提交订单" @submit="onSubmit" /> -->
                    <van-card
                    v-for='(item,index) in goods'
                    :key="index"
                    :price="item.price"
                    desc=""
                    :title="item.title"
                    :thumb="item.pic"
                    >
                    <template #num>
                        <!-- <van-stepper v-model="item.num" /> -->
                        <!-- <van-stepper :value="item.num" @change="onChange" /> -->
                        <span @click="minus">-</span>
                        <span v-text="item.num"></span>
                        <span>+</span>
                    </template>
                    </van-card>
                    <van-submit-bar :price="31050" button-text="提交订单" @submit="onSubmit" />
                </div>
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
            recommendList: [],
        }
    },
     computed: {
        isLogin() {
        return this.$store.state.user.token;
        },
        goods(){
            // console.log(this.$store.state.cart.goodsList);
            return this.$store.state.cart.goodsList;
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
        },
        onSubmit(){},
        /* onChange(value) {
            console.log(value);
            // this.$store.dispatch('cart/CHANGE_GOODS',{
            //     title:this.title,
            //     num:this.selectedNum,
            //     type:'cart'
            // })
        }, */
        minus(e){
            console.log(e);
        }
    },
    mounted(){
        window.addEventListener('scroll',this.isFixHeadShow,true);
    },
    created(){
        /* getRecommendList().then(res=>{
            this.recommendList = res;
        }) */
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
    .content{
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
        .empty-box{
            .van-empty__image{
                width: 2rem;
                height: 2rem;
                margin: auto;
            }
            .look{
                background: #fff;
                color: rgba(184, 184, 184);
                border: .01rem solid rgba(184, 184, 184, .6);
                width: 30%;
                height: .8rem;
                margin: -.3rem auto .2rem;
            }
        }
        .full-box{
            .van-card{
                .van-card__title{
                    font-size: .4rem;
                    margin-top: .24rem;
                }
                .van-card__bottom{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    .van-card__price{
                    color: red;
                    font-size: .2rem;
                    }
                    .van-card__num{

                    }
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