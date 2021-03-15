<template>
    <div class="home-box">
        <Header :value="search"></Header>
        <Swiper :bannerData="bannerList"></Swiper>
        <div class="content">
            <king-kong :btnList="btnList"></king-kong>
            <!-- <image-map></image-map> -->
            <div class="plaza-box">
                <img v-for="(item,index) in plazaList"  :key="index" :src="item.item.pic_url">
            </div>
            <product-hot :prdData="productHot"></product-hot>
            <slide-nav :navList="slideNavList"></slide-nav>
        </div>
    </div>
</template>

<script>
import Header from './header'
import Swiper from './swiper'
import KingKong from './kingkong'
// import ImageMap from './image-map' 
import ProductHot from './product-hot'
import SlideNav from './slideNav'
import { getData } from '../../api/home';
export default {
    components:{
        Header,
        Swiper,
        KingKong,
        // ImageMap,
        ProductHot,
        SlideNav
    },
    data(){
        return {
            search:'',
            bannerList:null,
            btnList:null,
            plazaList:null,
            productHot:null,
            slideNavList:null
        }
    },
    created(){
        getData().then(res=>{
            // console.log(res);
            this.bannerList = res.bannerData;
            this.btnList = res.kingKong;
            this.plazaList = res.plazaData;
            this.productHot = res.productHot;
            this.slideNavList = res.slideTitle
        })
    }
}
</script>

<style lang="less">
.home-box{
    padding: 1.1rem 0 1rem;
    .content{
        padding: 0 .2rem;
        .plaza-box{
        // background: green;
        height: 2.4rem;
        display: flex;
        justify-content: space-around;
        // align-items: center;
        img{
            flex: 1;
            margin: .1rem .06rem;
            height: 2.2rem;
        }
    }
    }
}
// .home-box::-webkit-scrollbar { width: 0px ;height: 0px; }
// .home-box::-webkit-scrollbar { width: 0 !important }
// .home-box::-webkit-scrollbar {
//     display: none;
// }
</style>