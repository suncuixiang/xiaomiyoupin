<template>
  <div class="king-box">
    <div class="part" v-for="(item, index) in btnList" :key="index">
      <img :src="item.item.pic_url" alt="" />
      <span v-text="item.item.title"></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["btnList"],
};
</script>

<style lang="less" scoped>
.king-box {
  height: 3.4rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 0.2rem;
  .part {
    margin: 0 0.1rem;
    width: 1.2rem;
    height: 1.7rem;
    display: flex;
    flex-direction: column;
    img {
      height: 1rem;
      width: 1rem;
    }
    span {
      margin-top: 0.1rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 0.2rem;
    }
  }
}
</style>
