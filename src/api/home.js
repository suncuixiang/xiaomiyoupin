import axios from './axios';

/* export function getBannerList(){
    return axios.get('/server/product/banner').then(res=>{
        console.log(res);
        let {code,codeText,data} = res;
        if(code == 0){
            return data;
        }else{
            return Promise.reject(codeText);
        }
    })
} */

export function getBannerList(){
    return axios.get('/mi/homepage/main/v1005?platform=m').then(res=>{
        // console.log(res);
        if(res.code == 0){
            return res.data.homepage.floors[1].data.items;
        }else{
            return Promise.reject(res.message);
        }
    })
}

export function getBtnList(){
    return axios.get('/mi/homepage/main/v1005?platform=m').then(res=>{
        // console.log(res);
        if(res.code == 0){
            return res.data.homepage.floors[2].data.items;
        }else{
            return Promise.reject(res.message);
        }
    })
}

export function getMapList(){
    return axios.get('/mi/homepage/main/v1005?platform=m').then(res=>{
        console.log(res);
        if(res.code == 0){
            let temp = res.data.homepage.floors;
            return [
                temp[3].data['_hotspot'],
                temp[4].data['_hotspot']
            ];
        }else{
            return Promise.reject(res.message);
        }
    })
}