import axios from "./axios";

export function getPrdDetail(gid) {
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
      if (res.data.code == 0) {
        return res.data.data;
      } else {
        return Promise.reject(res.message);
      }
    });
}
