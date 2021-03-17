import axios from './axios'

export function login(options){
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
    if (res.data.code == 0) {
      return res.data;
    } else {
      return Promise.reject(res.message);
    }
  });
};