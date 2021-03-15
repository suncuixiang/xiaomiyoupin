<template>
    <div class="link-map" v-if='mapList'>
        <div class="part-one" ref="one">
        </div>
        <!-- <div class="part-two" ref="two">
        </div> -->
    </div>
</template>
<script>
import {getMapList} from '../../api/home';
export default {
    data(){
        return {
            mapList:null
        }
    },
    watch:{
        mapList(val){
            // console.log(val);
            // console.log(this.$refs);
            // console.log(this.mapList);
            if(!this.mapList) return;
            this.$refs.one.style.backgroundImage = `url("${val[0].image}")`;
            // this.$refs.two.style.backgroundImage = `url("${val[1].image}")`;
        }
    },
    created(){
        getMapList().then(res=>{
            this.mapList = res;
        })
    }
}
</script>

<style lang="less">
.link-map{
    // background: green;
    // height: 4.4rem;
    .part-one,.part-two{
        background: no-repeat;
        // background-size: contain;
        background-size: 105% 100%;
        background-position-x: -.2rem;
        display: flex;
    }
    .part-one{
        // height: 1.8rem;
        flex-direction: column;
        div{
            flex: 1;
        }
    }
    // .part-two{
    //     margin-top: .12rem;
    //     height: 2.5rem;
    //     div{
    //         flex: 1;
    //     }
    // }
}
</style>