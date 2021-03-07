<template>
  <div id="app">
    <router-view></router-view>
    <Menu></Menu>
  </div>
</template>

<script>
import Menu from './components/Menu';
export default {
  components:{
    Menu
  }
}
</script>

<style lang="less" scoped>

</style>
