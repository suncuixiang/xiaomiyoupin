<template>
  <div class="home-box">
    <Header :value="search"></Header>
    <Swiper :bannerData="bannerList"></Swiper>
    <div class="content">
      <king-kong :btnList="btnList"></king-kong>
      <div class="plaza-box">
        <img
          v-for="(item, index) in plazaList"
          :key="index"
          :src="item.item.pic_url"
        />
      </div>
      <product-hot :prdData="productHot"></product-hot>
      <slide-nav :navList="slideNavList"></slide-nav>
    </div>
  </div>
</template>

<script>
import Header from "./header";
import Swiper from "./swiper";
import KingKong from "./kingkong";
import ProductHot from "./product-hot";
import SlideNav from "./slideNav";
import { getData } from "../../api/home";
export default {
  components: {
    Header,
    Swiper,
    KingKong,
    ProductHot,
    SlideNav,
  },
  data() {
    return {
      search: "",
      bannerList: null,
      btnList: null,
      plazaList: null,
      productHot: null,
      slideNavList: null,
    };
  },
  created() {
    getData().then((res) => {
      this.bannerList = res.bannerData;
      this.btnList = res.kingKong;
      this.plazaList = res.plazaData;
      this.productHot = res.productHot;
      this.slideNavList = res.slideTitle;
    });
  },
};
</script>

<style lang="less">
.home-box {
  padding: 1.1rem 0 1rem;
  .content {
    padding: 0 0.2rem;
    .plaza-box {
      height: 2.4rem;
      display: flex;
      justify-content: space-around;
      img {
        flex: 1;
        margin: 0.1rem 0.06rem;
        height: 2.2rem;
      }
    }
  }
}
</style>
