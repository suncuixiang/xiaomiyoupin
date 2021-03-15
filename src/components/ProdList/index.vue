<template>
    <div class="prod-list" v-if='data'>
        <div class="inner" v-for="(item,i) in data" :key="i">
            <img :src="item.data.goods && item.data.goods.picUrl" alt=""/>
            <div class="title">{{item.data.goods&&item.data.goods.name}}</div>
            <div class="des">{{item.data.goods&&item.data.goods.summary}}</div>
            <div class="price">
                <span class="now">￥{{item.data.goods&&item.data.goods.priceMin}}</span>
                <span class="old" v-if="item.data.goods&&item.data.goods.prePrice">￥{{item.data.goods&&item.data.goods.prePrice}}</span>
            </div>
        </div>
    </div>
</template>

<script>
export default({
    props:['data']
})
</script>

<style lang="less">
.prod-list{
    // background: #f4f4f4;
    padding-top: .2rem;
    .inner{
        background: #fff;
        display: inline-block;
        margin-right: .1rem;
        margin-left: .1rem;
        vertical-align: top;
        width: calc((100% - .5rem) / 2);
        border-radius: 1px;
        margin-bottom: .1rem;
        img{
            width: 100%;
        }
        .title{
            font-size: .3rem;
            color: #333;
            margin-left: .1rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .des{
            font-size: .2rem;
            color: #999;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-left: .1rem;
        }
        .price{
            margin-top: -.3rem;
            .now{
                font-size: .36rem;
                color: rgba(227,13,13);
                // margin-left: .2rem;
                margin-bottom: .1rem;
            }
            .old{
                font-size: .36rem;
                color: rgba(153, 153, 153);
                text-decoration: line-through;
                margin-left: .1rem;
            }
        }
    }
}
</style>