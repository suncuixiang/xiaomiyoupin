<template>
  <div class="category-box">
    <div class="header-box">
      <span class="title">分类</span>
      <van-icon name="search" class="search" />
    </div>
    <div class="menu-wrap" v-if="menuList">
      <van-sidebar v-model="activeKey" class="van-sidebar" @change="onChange">
        <van-sidebar-item
          v-for="(item, i) in menuList"
          :key="i"
          :title="item.name"
        />
      </van-sidebar>
      <div class="right" v-if="menuDetail">
        <img :src="menuDetail.banner" />
        <div class="proInner" v-for="(item, i) in menuDetail.children" :key="i">
          <div class="name">{{ item.name }}</div>
          <div class="pro-box">
            <div class="pro" v-for="(pro, index) in item.children" :key="index">
              <img :src="pro.smallImgCard.img" />
              <span class="text">{{ pro.smallImgCard.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getMarketList, getMarketDetail } from "../../api/categories";
export default {
  data() {
    return {
      activeKey: 0,
      menuList: null,
      menuDetail: null,
    };
  },
  methods: {
    onChange(index) {
      let id = this.menuList[index].id;
      this.getMenuDetail(id);
    },
    getMenuDetail(id) {
      getMarketDetail({}, { catId: id }).then((res) => {
        this.menuDetail = res;
      });
    },
  },
  created() {
    getMarketList().then((res) => {
      this.menuList = res;
      let id = this.menuList[this.activeKey].id;
      this.getMenuDetail(id);
    });
  },
};
</script>

<style lang="less">
.category-box {
  margin-bottom: 1.4rem;
  .header-box {
    margin-bottom: 1rem;
    background: #fff;
    width: 100%;
    height: 1rem;
    position: fixed;
    top: 0;
    left: 0;
    .title {
      font-size: 0.4rem;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .search {
      position: absolute;
      right: 0.4rem;
      font-size: 0.5rem;
    }
  }
  .van-sidebar {
    position: fixed;
    height: 100%;
    overflow: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    .van-sidebar-item {
      color: #777;
      background-color: #fff;
      padding: 0.3rem 0.16rem;
      text-align: center;
      font-size: 0.3rem;
    }
    .van-sidebar-item--select {
      color: #fff;
      &::before {
        display: none;
      }
      .van-sidebar-item__text {
        border-radius: 9px;
        width: 100%;
        background: linear-gradient(
          to right,
          rgba(230, 170, 92),
          rgba(208, 139, 48)
        ) !important;
      }
    }
  }
  .right {
    margin-top: 1rem;
    margin-left: 1.8rem;
    background-color: #f4f4f4;
    padding: 0.26rem;
    img {
      width: 100%;
      border-radius: 0.2rem;
    }
    .proInner {
      background-color: #fff;
      padding: 0.2rem;
      border-radius: 0.2rem;
      margin-top: 0.1rem;
      .name {
        font-size: 0.3rem;
        margin-bottom: 0.1rem;
      }
      .pro-box {
        display: flex;
        flex-wrap: wrap;
        .pro {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 0.2rem 0.16rem;
          width: 1.2rem;
          img {
            width: 1.2rem;
            background: #f8f8f8;
          }
          .text {
            font-size: 0.2rem;
            color: #777;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>
