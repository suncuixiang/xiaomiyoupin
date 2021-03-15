<template>
    <div class="login-box">
        <div class="title">欢迎登录小米有品</div>
        <van-form class="form" @submit="onSubmit">
            <van-field
                v-model="username"
                name="用户名"
                placeholder="邮箱/手机号码/小米ID"
                :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
                v-model="password"
                type="password"
                name="密码"
                placeholder="密码"
                :rules="[{ required: true, message: '请填写密码' }]"
                right-icon="eye"
            />
            <van-button class="submit" round block type="info" native-type="submit">登录</van-button>
        </van-form>
        <van-button class="changeM" round block type="info">手机短信登录/注册</van-button>
        <div class="forget">
            <span>立即注册</span> | <span>忘记密码？</span>
        </div>
        <!-- <div class="other">
            <van-divider>其他方式登录</van-divider>
            <div></div>
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
}
</script>

<style lang="less">
.login-box{
    background: url('https://shop.io.mi-img.com/app/shop/img?id=shop_dfa89d9b977aa2f32346a1e2e3ecb838.png&w=750&h=1334') no-repeat;
    background-size: 100% 100%;
    padding: 2rem .6rem;
    margin: auto;
    text-align: center;
    .title{
        font-size: .56rem;
        color: #666;
        margin-bottom: 1rem;
    }
    .form{
        .van-cell{
            height: 1.2rem;
        }
        .van-cell::after{
            border-bottom: .01rem solid #777;
        }
        .van-field__control{

        }
        .van-icon-eye{
            color: #4D4D4D;
        }
        input::-webkit-input-placeholder {
            color: rgb(51, 51, 51);
        }
        .submit{
            margin: .6rem auto;
            width: 5.4rem;
            background: #D7AE73;
            border: none;
            font-size: .4rem;
            font-weight: 600;
        }
    }
    .changeM{
            margin: .6rem auto;
            width: 5.4rem;
            background: #F0F0F0;
            color: #666;
            border: none;
            font-size: .36rem;
            font-weight: 600;
    }
    .forget{
        color: #777;
        font-size: .38rem;
        margin: .8rem 0;
    }
    /* .van-divider{
        color: #333;
    }
    .other{
        div{
            background: url('https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png');
        }
    } */
}
</style>