import axios from './axios';

export function getData(){
    return axios.get('/mi/homepage/main/v1005?platform=m').then(res=>{
        // console.log(res);
        res=res.data;
        if(res.code == 0){
            let homepage = res.data.homepage.floors,
            bannerData,
            kingKong,
            plazaData,
            productHot,
            slideTitle,
            key;
            homepage.forEach(item => {
                key = item.module_key;
                switch (key) {
                    case "declare_banner_new":
                      bannerData = item.data.items;
                      break;
                    case "kingkong_new":
                        kingKong = item.data.items;
                      break;
                    case "plaza_new":
                        plazaData = item.data.rows[0].items;
                      break;
                    case "product_hot_new":
                        productHot={
                            items:item.data.items,
                            title:item.data.title,
                        };
                      break;
                    case "slide_flow":
                        slideTitle = item.data.items;
                  }
            });
            return {
                bannerData,
                kingKong,
                plazaData,
                productHot,
                slideTitle
            };
        }else{
            return Promise.reject(res.message);
        }
    })
}

export function getMapList(){
    return axios.get('/mi/homepage/main/v1005?platform=m').then(res=>{
        // console.log(res);
        res=res.data;
        if(res.code == 0){
            let temp = res.data.homepage.floors,
            mapList;
            temp.forEach(item=>{
                if(item.module_key == 'image_link_map'){
                    mapList = item[3].data['_hotspot']
                }
            })
            return mapList;
        }else{
            return Promise.reject(res.message);
        }
    })
}

export function getProdList(){
    return axios.get('/mi/homepage/main/v1005?platform=m').then(res=>{
        // console.log(res);
        res=res.data;
        if(res.code == 0){
            return res.data.feeds.items;
        }else{
            return Promise.reject(res.message);
        }
    })
}