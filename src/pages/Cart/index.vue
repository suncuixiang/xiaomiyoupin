<template>
  <div class="cart-box">
    <div class="content">
      <div class="head-box">
        <van-cell
          class="head"
          title="购物车"
          is-link
          arrow-direction="left"
          to="my"
        />
      </div>
      <div v-if="!isLogin" class="empty">
        <img
          src="https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/no_result/no_result_cart.png"
          alt=""
        />
        <p>登陆后才能看到商品哦~</p>
        <van-button round to="login">立即登录</van-button>
      </div>
      <div v-if="isLogin" class="login">
        <div v-if="goods.length == 0" class="empty-box">
          <van-empty
            class="custom-image"
            image="https://img01.yzcdn.cn/vant/custom-empty-image.png"
            description="购物车还是空的"
          />
          <van-button class="look" round block to="home">随便看看</van-button>
        </div>
        <div v-else class="full-box">
          <van-card
            v-for="(item, index) in goods"
            :key="index"
            :price="item.price"
            desc=""
            :title="item.title"
            :thumb="item.pic"
          >
            <template #num>
              <span @click="minus" :index="index">-</span>
              <span v-text="item.num"></span>
              <span @click="plus" :index="index">+</span>
            </template>
          </van-card>
          <van-submit-bar
            :price="total"
            button-text="提交订单"
            @submit="onSubmit"
          />
        </div>
      </div>
    </div>
    <div class="recommend">
      <div class="title">
        <img
          src="https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/common/recheader_left.png"
          alt=""
        />
        <span>为你推荐</span>
        <img
          src="https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/common/recheader_right.png"
          alt=""
        />
      </div>
      <prod-list :data="recommendList"></prod-list>
    </div>
  </div>
</template>

<script>
import prodList from "../../components/ProdList";
import { getProdList } from "../../api/home";
export default {
  data() {
    return {
      recommendList: [],
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.user.token;
    },
    goods() {
      return this.$store.state.cart.goodsList;
    },
    total() {
      if (this.goods.length != 0) {
        return this.goods.reduce((prev, cur) => {
          return cur.num * cur.price * 100 + prev;
        }, 0);
      }
      return 0;
    },
  },
  components: {
    prodList,
  },
  methods: {
    onSubmit() {},
    minus(e) {
      let index = e.target.attributes.index.value;
      let item = this.goods[index];
      if (item.num <= 1) return;
      this.$store.dispatch("cart/CHANGE_GOODS", {
        title: item.title,
        num: item.num - 1,
        type: "cart",
      });
    },
    plus(e) {
      let index = e.target.attributes.index.value;
      let item = this.goods[index];
      this.$store.dispatch("cart/CHANGE_GOODS", {
        title: item.title,
        num: item.num + 1,
        type: "cart",
      });
    },
  },
  created() {
    getProdList().then((res) => {
      this.recommendList = res;
    });
  },
};
</script>

<style lang="less">
.cart-box {
  margin-bottom: 1.6rem;
  .content {
    .van-cell.head,
    .van-cell.fix-head {
      display: flex;
      flex-direction: row-reverse;
      align-items: center;
      .van-cell__title {
        text-align: center;
      }
    }
    .van-cell.head {
      background: url("https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/common/bg_page_header.png")
        no-repeat;
      background-size: 100%;
      height: 2rem;
      .van-cell__title {
        color: #fff;
        font-size: 0.5rem;
        font-weight: 600;
      }
      .van-icon-arrow-left {
        color: #fff;
      }
    }
    .empty {
      padding: 0.8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        width: 2rem;
      }
      p {
        font-size: 0.3rem;
        color: #777;
        margin: 0.24rem 0;
      }
      .van-button {
        border: 0.01rem solid #777;
        border-radius: 0.3rem;
        height: 0.7rem;
        .van-button__text {
          color: #777;
          font-size: 0.1rem;
        }
      }
    }
    .empty-box {
      .van-empty__image {
        width: 2rem;
        height: 2rem;
        margin: auto;
      }
      .look {
        background: #fff;
        color: rgba(184, 184, 184);
        border: 0.01rem solid rgba(184, 184, 184, 0.6);
        width: 30%;
        height: 0.8rem;
        margin: -0.3rem auto 0.2rem;
      }
    }
    .full-box {
      .van-card {
        .van-card__title {
          font-size: 0.4rem;
          margin-top: 0.24rem;
        }
        .van-card__bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .van-card__price {
            color: red;
            font-size: 0.2rem;
          }
          .van-card__num {
            display: flex;
            justify-content: space-between;
            align-items: center;
            span {
              width: 0.4rem;
              height: 0.4rem;
              text-align: center;
              font-size: 0.4rem;
              margin-left: 0.1rem;
              background: #f2f3f5;
            }
          }
        }
      }
    }
  }
  .recommend {
    margin: 0 auto;
    text-align: center;
    .title {
      img {
        width: 0.5rem;
      }
      span {
        font-size: 0.3rem;
        font-weight: 600;
      }
    }
  }
}
</style>
