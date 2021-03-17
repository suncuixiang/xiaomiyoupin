<template>
  <div class="product-hot-box" v-if="prdData">
    <div class="head">
      <span class="title" v-text="prdData.title"></span>
      <a href="" class="more">更多></a>
    </div>
    <van-tabs class="tabs-box">
      <van-tab
        class="tab-box"
        v-for="(item, index) in prdData.items"
        :key="index"
      >
        <template #title>
          <img :src="item.item.pic_url" alt="" />
          <p class="name" v-text="item.item.name"></p>
        </template>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  props: ["prdData"],
};
</script>

<style lang="less">
.product-hot-box {
  background: #fff;
  padding: 0.14rem;
  display: flex;
  flex-direction: column;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 0.6rem;
    .title {
      font-size: 0.38rem;
      color: rgb(51, 51, 51);
    }
    .more {
      font-size: 0.2rem;
      color: rgb(153, 153, 153);
    }
  }
  .tabs-box {
    margin-top: 0.1rem;
    .van-tabs__wrap {
      height: 2.7rem;
      .van-tab {
        width: 1.9rem;
        margin-right: 0.1rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        img {
          height: 1.8rem;
          width: 1.8rem;
        }
        .name {
          font-size: 0.18rem;
          padding: -0.1rem 0.1rem;
          box-sizing: border-box;
          text-align: center;
        }
        &:nth-child(1) {
          background: #edf6f8;
        }
        &:nth-child(2) {
          background: #fcf7f1;
        }
      }
    }
    .van-tabs__line {
      display: none;
    }
  }
}
</style>
