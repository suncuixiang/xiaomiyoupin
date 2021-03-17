<template>
  <div class="login-box">
    <div class="title">欢迎登录小米有品</div>
    <van-form class="form" @submit="onSubmit">
      <van-field
        v-model="username"
        name="username"
        placeholder="邮箱/手机号码/小米ID"
        :rules="[{ required: true, message: '请填写邮箱/手机号码/小米ID' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
        right-icon="eye"
      />
      <van-button class="submit" round block type="info" native-type="submit"
        >登录</van-button
      >
    </van-form>
    <van-button class="changeM" round block type="info"
      >手机短信登录/注册</van-button
    >
    <div class="forget"><span>立即注册</span> | <span>忘记密码？</span></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    onSubmit(values) {
      this.$store.dispatch("user/USER_LOGIN", values).then(() => {
        let isLogin = this.$store.state.user.token;
        console.log(this.$store.state.user);
        if (isLogin) {
          this.$notify({ type: "success", message: "登录成功" });
          setTimeout(() => {
            this.$router.go(-1);
          }, 500);
        } else {
          this.$notify({
            type: "danger",
            message: "账号/密码输入错误，请重新输入",
          });
        }
      });
    },
  },
};
</script>

<style lang="less">
.login-box {
  background: url("https://shop.io.mi-img.com/app/shop/img?id=shop_dfa89d9b977aa2f32346a1e2e3ecb838.png&w=750&h=1334")
    no-repeat;
  background-size: 100% 100%;
  padding: 2rem 0.6rem;
  margin: auto;
  text-align: center;
  .title {
    font-size: 0.56rem;
    color: #666;
    margin-bottom: 1rem;
  }
  .form {
    .van-cell {
      height: 1.2rem;
    }
    .van-cell::after {
      border-bottom: 0.01rem solid #777;
    }
    .van-icon-eye {
      color: #4d4d4d;
    }
    input::-webkit-input-placeholder {
      color: rgb(51, 51, 51);
    }
    .submit {
      margin: 0.6rem auto;
      width: 5.4rem;
      background: #d7ae73;
      border: none;
      font-size: 0.4rem;
      font-weight: 600;
    }
  }
  .changeM {
    margin: 0.6rem auto;
    width: 5.4rem;
    background: #f0f0f0;
    color: #666;
    border: none;
    font-size: 0.36rem;
    font-weight: 600;
  }
  .forget {
    color: #777;
    font-size: 0.38rem;
    margin: 0.8rem 0;
  }
}
</style>
