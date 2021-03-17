<template>
  <div>
    <header class="header-box">
      <img class="logo" src="../../assets/navi_title_v6.png" alt="" />
      <van-search
        v-model="value"
        shape="round"
        background="#845D32"
        placeholder="搜一搜"
      />
    </header>
  </div>
</template>

<script>
export default {
  props: ["value"],
};
</script>

<style lang="less">
.header-box {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  height: 1.1rem;
  background: #845d32;
  display: flex;
  align-items: center;
  .logo {
    margin-left: 0.2rem;
    height: 0.6rem;
    width: 0.7rem;
  }
  .van-search {
    height: 100%;
    width: 6.6rem;
    .van-search__content {
      height: 0.6rem;
      .van-icon {
        font-size: 0.4rem;
        color: #c9c7c7;
        margin-top: -0.1rem;
      }
      .van-field__control {
        font-size: 0.1rem;
        margin-top: -0.1rem;
      }
      input::-webkit-input-placeholder {
        color: rgb(51, 51, 51);
      }
    }
  }
}
</style>
