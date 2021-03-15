import axios from './axios'

export function getRecommendList(){
    return axios.post('/micart/mtop/arch/metis/cart',[
        {},
        {
            "offset":0,
            "count":20,
            "params":{"gid_list":""}
        }
    ]).then(res=>{
        console.log(res);
        if(res.code == 0){
            return res.data.recommendResponseList;
        }else{
            return Promise.reject(res.message);
        }
    })
}