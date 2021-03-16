import axios from './axios'

export function login(options){
  // console.log(options);
  return axios.post("/mockapi/login", options).then(res => {
    console.log(res.data);
    if (res.data.code == 0) {
      return res.data;
    } else {
      return Promise.reject(res.message);
    }
  });
};

export function signOut(){
  return axios.post("/mockapi/signout").then(res => {
    // console.log(res);
    if (res.data.code == 0) {
      // return res;
      // console.log(11111111);
    } else {
      return Promise.reject(res.message);
    }
  });
};
