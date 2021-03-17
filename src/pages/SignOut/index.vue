<template>
  <div class="signout-box">
    <div class="head">
      <van-cell
        class="back"
        is-link
        arrow-direction="left"
        title="设置"
        to="mime"
      />
    </div>
    <div class="account">
      <span class="desc">账号管理</span>
      <van-cell title="个人资料" is-link to="" />
      <van-cell title="收货地址" is-link to="" />
    </div>
    <div class="private">
      <span class="desc">隐私</span>
      <van-cell title="权限管理" is-link to="" />
      <van-cell title="隐私政策" is-link to="" />
    </div>
    <van-button round block type="info" @click="signOut">退出账号</van-button>
  </div>
</template>

<script>
export default {
  methods: {
    signOut() {
      this.$store
        .dispatch("user/USER_SIGNOUT")
        .then(() => {
          this.$notify({ type: "success", message: "退出登录成功" });
          setTimeout(() => {
            this.$router.push({ name: "my" });
          }, 500);
        })
        .catch((err) => {
          console.log(err);
          this.$notify({ type: "danger", message: "服务器繁忙请稍后重试" });
        });
    },
  },
};
</script>

<style lang="less">
.signout-box {
  .back {
    display: flex;
    flex-direction: row-reverse;
  }
  .account,
  .private {
    .desc {
      font-size: 0.36rem;
      padding: 0 0.4rem;
    }
    .van-cell {
      font-size: 0.2rem;
    }
  }
  .van-button {
    background: #fff;
    color: #777;
    border: none;
    width: 90%;
    margin: 0.4rem auto;
  }
}
</style>
