import axios from "./axios";

export function getRecommendList() {
  return axios
    .post("/micart/mtop/arch/metis/cart", [
      {},
      {
        offset: 0,
        count: 20,
        params: { gid_list: "" },
      },
    ])
    .then((res) => {
      console.log(res);
      if (res.code == 0) {
        return res.data.recommendResponseList;
      } else {
        return Promise.reject(res.message);
      }
    });
}

export function getPrdDetail(gid) {
  // console.log(gid);
  return axios
    .post("/mi/api/gateway/detail", {
      groupName: "details",
      groupParams: [[gid]],
      methods: [],
      version: "1.0.0",
      debug: false,
      channel: "",
    })
    .then((res) => {
    //   console.log(res);
      // data.goods.carouselMapList
      if (res.data.code == 0) {
        return res.data.data;
      } else {
        return Promise.reject(res.message);
      }
    });
}
