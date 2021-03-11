<template>
    <div class="slide-nav">
        <div class="nav" v-if="navList">
            <van-swipe class="swipe" :loop="false" :show-indicators="false">
                <van-swipe-item class="swipe-item" v-for="(item,index) in navList" :key="index">
                    <p class="title" v-text="item.title"></p>
                </van-swipe-item>
            </van-swipe>
        </div>
        <prod-list></prod-list>
    </div>
</template>

<script>
import ProdList from '../../../components/ProdList'
export default({
    props:['navList'],
    components:{
        ProdList
    }
})
</script>

<style lang="less">
.slide-nav{
    // background: green;
    // height: 6rem;
    margin: .3rem 0;
    .nav{
        .swipe{
            // background: pink;
            .van-swipe-item{
                width: 1.8rem !important;
                height: .8rem !important; 
                display: flex;
                justify-content: space-around;
                align-items: center;
                .title{
                    font-weight: 600;
                    font-size: .34rem;
                    text-align: center;
                    color: #333;
                    flex: 1;
                    border-right: .01rem solid rgba(0, 0, 0, .2);

                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
            .swipe-item:last-child{
                .title{
                    border-right: none;
                }
            }
        }
    }
}
</style>
