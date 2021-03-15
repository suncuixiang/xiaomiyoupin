<template>
  <div id="app">
    <div class="view">
        <!-- <router-view></router-view> -->
        <router-view></router-view>
    </div>
    <router-view name="Footer"></router-view>
    <!-- <Menu></Menu> -->
  </div>
</template>

<script>
// import Menu from './components/Menu';
// export default {
//   components:{
//     Menu
//   }
// }
</script>

<style lang="less">
#app{
  width: 100%;
  height: 100%;
  display: flex;//*
  flex-direction: column;
  .view{
    overflow-x: hidden;
  }
  .view::-webkit-scrollbar { 
    display: none;
    // width: 0;
    // height: 0; 
  }
}
</style>
