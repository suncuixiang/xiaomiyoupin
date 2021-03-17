import axios from "./axios";

export function getMarketList() {
  return axios.post("/mi/mtop/market/cat/list", [{}, {}]).then((res) => {
    if (res.data.code == 0) {
      return res.data.data;
    } else {
      return Promise.reject(res.message);
    }
  });
}
export function getMarketDetail(...params) {
  return axios.post("/mi/mtop/market/cat/detail", params).then((res) => {
    if (res.data.code == 0) {
      return res.data.data;
    } else {
      return Promise.reject(res.message);
    }
  });
}