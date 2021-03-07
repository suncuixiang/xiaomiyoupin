<template>
    <div class="home-box">
        <Header :value="search"></Header>
        <Swiper :bannerData="bannerList"></Swiper>
        <king-kong :btnList="btnList"></king-kong>
        <image-map></image-map>
    </div>
</template>

<script>
import Header from './header'
import Swiper from './swiper'
import KingKong from './kingkong'
import ImageMap from './image-map' 
import {getBannerList,getBtnList} from '../../api/home';
export default {
    components:{
        Header,
        Swiper,
        KingKong,
        ImageMap
    },
    data(){
        return {
            search:'',
            bannerList:null,
            btnList:null
        }
    },
    created(){
        getBannerList().then(res=>{
            this.bannerList = res;
        })
        getBtnList().then(res=>{
            this.btnList = res;
        })
    }
}
</script>

<style lang="less" scoped>
.home-box{  
    padding-bottom: 1rem;
}
</style>