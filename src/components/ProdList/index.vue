<template>
  <div class="prod-list" v-if="data">
    <div class="inner" v-for="(item, i) in data" :key="i">
      <router-link
        :to="{ name: 'detail', query: { gid: data[i].data.goods.gid } }"
      >
        <img :src="item.data.goods && item.data.goods.picUrl" alt="" />
        <div class="title">{{ item.data.goods && item.data.goods.name }}</div>
        <div class="des">{{ item.data.goods && item.data.goods.summary }}</div>
        <div class="price">
          <span class="now"
            >￥{{ item.data.goods && item.data.goods.priceMin }}</span
          >
          <span class="old" v-if="item.data.goods && item.data.goods.prePrice"
            >￥{{ item.data.goods && item.data.goods.prePrice }}</span
          >
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style lang="less">
.prod-list {
  padding-top: 0.2rem;
  .inner {
    background: #fff;
    display: inline-block;
    margin-right: 0.1rem;
    margin-left: 0.1rem;
    vertical-align: top;
    width: calc((100% - 0.5rem) / 2);
    border-radius: 1px;
    margin-bottom: 0.1rem;
    img {
      width: 100%;
    }
    .title {
      font-size: 0.3rem;
      color: #333;
      margin-left: 0.1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .des {
      font-size: 0.2rem;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      margin-left: 0.1rem;
    }
    .price {
      margin-top: -0.3rem;
      .now {
        font-size: 0.36rem;
        color: rgba(227, 13, 13);
        margin-bottom: 0.1rem;
      }
      .old {
        font-size: 0.36rem;
        color: rgba(153, 153, 153);
        text-decoration: line-through;
        margin-left: 0.1rem;
      }
    }
  }
}
</style>