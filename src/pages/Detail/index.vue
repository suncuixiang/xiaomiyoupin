<template>
  <div class="detail-box" v-if="bannerList">
    <div class="backBtn" @click="$router.go(-1)">
      <van-icon name="arrow-left" />
    </div>
    <div class="swipe">
      <van-swipe :autoplay="2000">
        <van-swipe-item v-for="(item, index) in bannerList" :key="index">
          <img :src="item.url" alt="" />
        </van-swipe-item>
        <template #indicator>
          <div class="custom-indicator">
            {{ current + 1 }}/{{ bannerList.length }}
          </div>
        </template>
      </van-swipe>
    </div>
    <div class="prd-desc">
      <div class="title">
        <span v-text="title"></span>
        <div class="star">
          <van-icon
            name="https://m.xiaomiyoupin.com/youpin/static/m/res/images/product/icon_product_unfavor.png"
          />
        </div>
      </div>
      <div class="desc" v-text="desc"></div>
      <div class="prd-link">
        <span v-text="staticWords"></span>
        <span v-text="linkWords"></span>
      </div>
    </div>
    <div class="goods-bar">
      <van-goods-action>
        <van-goods-action-icon icon="shop-o" text="店铺" dot />
        <van-goods-action-icon icon="cart-o" text="购物车" :badge="selectedNum" />
        <van-goods-action-button @click="show=true" type="warning" text="加入购物车" />
        <van-goods-action-button type="danger" text="立即购买" />
      </van-goods-action>
    </div>
    <div class="sku-box">
      <van-sku
        v-model="show"
        :sku="sku"
        :goods="goods"
        @buy-clicked="onBuyClicked"
        @add-cart="onAddCartClicked"
      />
    </div>
  </div>
</template>

<script>
import { getPrdDetail } from "../../api/cart";
export default {
  data() {
    return {
      current: 0,
      bannerList: null,
      desc: "",
      title: "",
      staticWords: "",
      linkWords: "",
      show: false,
      selectedNum:'',
      sku: {
        tree: [],
        list: [],
        price: "1.00",
        stock_num: 227,
        collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
        none_sku: true, // 是否无规格商品
      },
      goods: {
        picture: "",
      },
    };
  },
  methods: {
    onAddCartClicked(skuData){
      // console.log(skuData);
      this.show=false;

      let isLogin = this.$store.state.user.token;
      if(!isLogin){
        this.$toast('请登录!');
        return;
      }
      this.selectedNum=skuData.selectedNum;

      this.$store.dispatch('cart/ADD_GOODS',{
        title:this.title,
        price:this.sku.price,
        num:this.selectedNum,
        pic:this.goods.picture,
        type:'detail'
      })
    },
    onBuyClicked(){
      this.show=false;
    }
  },
  created() {
    getPrdDetail(this.$route.query.gid).then((res) => {
        // console.log(res);
      //   console.log(res.operation.wzl);
      let goodsInfo = res.goods,
        wzl = res.operation.wzl;
      this.bannerList = goodsInfo.carouselMapList;
      this.bannerList.shift();
      this.desc = goodsInfo.shareInfo.poster.desc;
      this.title = goodsInfo.shareInfo.poster.title;
      this.staticWords = wzl && wzl.staticWords;
      this.linkWords = wzl && wzl.hyperlinkWords;
      this.goods.picture=goodsInfo.goodsInfo.picUrl;
      // this.sku.price = goodsInfo.goodsInfo.priceMin;
      this.sku.price = goodsInfo.goodsInfo.priceMin/100;
    });
  },
};
</script>

<style lang="less">
.detail-box {
  margin-bottom: 2rem;
  .backBtn {
    cursor: pointer;
    position: absolute;
    top: 0.2rem;
    left: 0.2rem;
    z-index: 100;
    background: rgba(184, 184, 184, 0.6);
    padding: 0.1rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .van-icon {
      color: #fff;
      font-size: 0.4rem;
    }
  }
  .swipe {
    img {
      height: 8rem;
    }
    .custom-indicator {
      position: absolute;
      right: 0.4rem;
      bottom: 0.6rem;
      padding: 0.04rem 0.12rem;
      border-radius: 0.5rem;
      font-size: 0.2rem;
      color: #fff;
      background: rgba(184, 184, 184, 0.6);
    }
  }
  .prd-desc {
    .title {
      font-size: 0.4rem;
      font-weight: 600;
      display: flex;
      justify-content: space-around;
      align-items: center;
      padding: 0.1rem 0.2rem;
      .star {
        font-size: 1rem;
      }
    }
    .desc,
    .prd-link {
      font-size: 0.2rem;
      padding: 0.1rem 0.2rem;
      color: #777;
    }
    .prd-link {
      font-size: 0.3rem;
      span:nth-child(2) {
        color: #b4731f;
      }
    }
  }
}
</style>
