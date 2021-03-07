<template>
    <div>
        <header class="header-box">
            <img class="logo" src="../../assets/navi_title_v6.png" alt="">
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
    props:['value']
}
</script>

<style lang="less">
.header-box{
    height: 1.1rem;
    background: #845D32;
    display: flex;
    align-items: center;
    .logo{
        margin-left: .2rem;
        height: .6rem;
        width: .7rem;
    }
    .van-search{
        height: 100%;
        width: 10rem;
        .van-search__content{
            height: .6rem;
            .van-icon{
                font-size: .4rem;
                color: #C9C7C7;
                margin-top: -.1rem;
            }
            .van-field__control{
                font-size: .1rem;
                margin-top: -.1rem;
            }
            input::-webkit-input-placeholder {
                color: rgb(51, 51, 51);
            }
        }
    }
}
</style>