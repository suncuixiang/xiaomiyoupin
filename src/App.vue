<template>
  <div id="app">
    <div class="view">
      <router-view></router-view>
    </div>
    <router-view name="Footer"></router-view>
  </div>
</template>

<style lang="less">
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .view {
    overflow-x: hidden;
  }
  .view::-webkit-scrollbar {
    display: none;
  }
}
</style>
