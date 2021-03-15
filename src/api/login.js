import axios from './axios'

/* 
{
  transformRequest: function (data) {
    // 对 data 进行任意转换处理
    return JSON.stringify(data);;
  }，
  headers: {
        'Content-Type': 'application/json;charset=UTF-8'
  }
}
*/
const config = {
    transformRequest: function (data) {
      // 对 data 进行任意转换处理
    //   return JSON.stringify(data);
        let result = ``;
        for (let attr in data) {
            result += `&${attr}=${data[attr]}`;
        }
        return result.substring(1);
    },
    headers: {
        //   'Content-Type': 'application/json;charset=UTF-8'
          'Content-Type': 'application/x-www-form-urlencoded'
    }
  }

export function login(params){
    return axios.post('/server/user/login',params,config).then(res=>{
        console.log(res);
        let {code,codeText,data} = res;
        if(code == 0){
            return data;
        }else{
            return Promise.reject(codeText);
        }
    })
} 