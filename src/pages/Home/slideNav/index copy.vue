<template>
    <div class="slide-nav">
        <div class="nav" v-if="navList">
            <van-swipe class="swipe" :loop="false" :show-indicators="false">
                <van-swipe-item class="swipe-item" v-for="(item,index) in navList" :key="index">
                    <p class="title" v-text="item.title"></p>
                </van-swipe-item>
            </van-swipe>
        </div>
        <prod-list :data='prdData'></prod-list>
    </div>
</template>

<script>
import ProdList from '../../../components/ProdList'
import { getProdList } from '../../../api/home';
export default({
    props:['navList'],
    components:{
        ProdList
    },
    data(){
        return {
            prdData:null
        }
    },
    methods:{
        isLoad(){
            // 当浏览器滚动条卷曲的高度+浏览器可视区的高度>=body真实高度，说明滚动条到底了
        }
    },
    created(){
        getProdList().then(res=>{
            // console.log(res);
            this.prdData=res;
        })
    },
    mounted(){
        window.addEventListener('scroll',this.isLoad);
    }
    /* 
    function isLoad() {
    let winH = utils.win("clientHeight");
    let winT = utils.win("scrollTop");
    let bodyH = utils.win("scrollHeight");
    // 当滚动条即将要跑到底部后，马上请求去拿到下一页的数据
    if (winH + winT + 100 >= bodyH) {
        page += 1;
        getData(page);
    }
    }
     */
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
