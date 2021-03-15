import axios from './axios'

// const miPost = axios.create({
//     headers:{
//         'Content-Type':'application/json'
//     }
// })

export function getMarketList(){
    return axios.post('/mi/mtop/market/cat/list',[{},{}]).then(res=>{
        // console.log(res.data.data);
        if(res.data.code == 0){
            return res.data.data;
        }else{
            return Promise.reject(res.message);
        }
    })
}
export function getMarketDetail(...params){
    // console.log(params);
    return axios.post('/mi/mtop/market/cat/detail',params).then(res=>{
        // console.log(res);
        if(res.data.code == 0){
            // console.log(res.data.data);
            return res.data.data;
        }else{
            return Promise.reject(res.message);
        }
    })
}