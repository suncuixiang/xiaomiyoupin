import axios from './axios';

export function getData(){
    return axios.get('/mi/homepage/main/v1005?platform=m').then(res=>{
        console.log(res);
        if(res.code == 0){
            let homepage = res.data.homepage.floors;
            return {
                bannerData:homepage[1].data.items,
                kingKong:homepage[2].data.items,
                plazaData:homepage[5].data.rows[0].items,
                productHot:{
                    items:homepage[6].data.items,
                    title:homepage[6].data.title,
                },
                slideTitle:homepage[11].data.items
            };
        }else{
            return Promise.reject(res.message);
        }
    })
}

export function getMapList(){
    return axios.get('/mi/homepage/main/v1005?platform=m').then(res=>{
        // console.log(res);
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