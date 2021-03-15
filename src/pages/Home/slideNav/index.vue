<template>
    <div class="slide-nav">
        <div class="nav" v-if="navList" ref="vanTab">
            <van-tabs class="tabs-box">
                <van-tab v-for="(item,index) in navList" :title="item.title" :key='index'>
                    <prod-list :data='prdData'></prod-list>
                </van-tab>
            </van-tabs>
            <!-- <van-swipe class="swipe" :loop="false" :show-indicators="false">
                <van-swipe-item class="swipe-item" v-for="(item,index) in navList" :key="index">
                    <p class="title" v-text="item.title"></p>
                </van-swipe-item>
            </van-swipe> -->
        </div>
        <!-- <prod-list :data='prdData'></prod-list> -->
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
        isLoad(e){
            try {
                let winH = document.documentElement.clientHeight || document.body.clientHeight,
                scrollT = e.target.scrollTop,
                tabH = this.$refs.vanTab.clientHeight;
                if (winH + scrollT + 200 >= tabH) {
                    getProdList().then(res=>{
                        this.prdData=[
                            ...this.prdData,
                            ...res
                        ];
                    })
                }
            } catch (error) {
                
            }
        }
    },
    created(){
        getProdList().then(res=>{
            // console.log(res);
            this.prdData=res;
        })
    },
    mounted(){
        window.addEventListener('scroll',this.isLoad,true);
    }
})
</script>

<style lang="less">
.slide-nav{
    margin: .3rem 0;
    .tabs-box{
        .van-tabs__wrap{
            height: .6rem;
            .van-tabs__nav{
                background: #F4F4F4;
                .van-tab{
                    color: black;
                    font-size: .3rem;
                    font-weight: 600;
                    width: 1.9rem;
                    border-right: .01rem solid rgba(0, 0, 0, .1);
                }
                .van-tab--active{
                    color: #C30D23;
                    font-size: .32rem;
                }
                .van-tabs__line{
                    background: #C30D23;
                    width: .46rem;
                }
            }
        }
        
    }
}
// .slide-nav{
//     // background: green;
//     // height: 6rem;
//     margin: .3rem 0;
//     .nav{
//         .swipe{
//             // background: pink;
//             .van-swipe-item{
//                 width: 1.8rem !important;
//                 height: .8rem !important; 
//                 display: flex;
//                 justify-content: space-around;
//                 align-items: center;
//                 .title{
//                     font-weight: 600;
//                     font-size: .34rem;
//                     text-align: center;
//                     color: #333;
//                     flex: 1;
//                     border-right: .01rem solid rgba(0, 0, 0, .2);

//                     overflow: hidden;
//                     text-overflow: ellipsis;
//                     white-space: nowrap;
//                 }
//             }
//             .swipe-item:last-child{
//                 .title{
//                     border-right: none;
//                 }
//             }
//         }
//     }
// }
</style>
