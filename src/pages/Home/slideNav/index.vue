<template>
  <div class="slide-nav">
    <div class="nav" v-if="navList" ref="vanTab">
      <van-tabs class="tabs-box">
        <van-tab
          v-for="(item, index) in navList"
          :title="item.title"
          :key="index"
        >
          <prod-list :data="prdData"></prod-list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import ProdList from "../../../components/ProdList";
import { getProdList } from "../../../api/home";
export default {
  props: ["navList"],
  components: {
    ProdList,
  },
  data() {
    return {
      prdData: null,
    };
  },
  methods: {
    isLoad(e) {
      try {
        let winH =
            document.documentElement.clientHeight || document.body.clientHeight,
          scrollT = e.target.scrollTop,
          tabH = this.$refs.vanTab.clientHeight;
        if (winH + scrollT + 200 >= tabH) {
          getProdList().then((res) => {
            this.prdData = [...this.prdData, ...res];
          });
        }
      } catch (error) {}
    },
  },
  created() {
    getProdList().then((res) => {
      this.prdData = res;
    });
  },
  mounted() {
    window.addEventListener("scroll", this.isLoad, true);
  },
};
</script>

<style lang="less">
.slide-nav {
  margin: 0.3rem 0;
  .tabs-box {
    .van-tabs__wrap {
      height: 0.6rem;
      .van-tabs__nav {
        background: #f4f4f4;
        .van-tab {
          color: black;
          font-size: 0.3rem;
          font-weight: 600;
          width: 1.9rem;
          border-right: 0.01rem solid rgba(0, 0, 0, 0.1);
        }
        .van-tab--active {
          color: #c30d23;
          font-size: 0.32rem;
        }
        .van-tabs__line {
          background: #c30d23;
          width: 0.46rem;
        }
      }
    }
  }
}
</style>
