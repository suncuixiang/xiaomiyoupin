import Vue from 'vue'
import Vant from 'vant'

import "./mock";

import App from './App.vue'
import router from './router'
import store from './store'

/* 导入公共样式 */
import './assets/reset.min.css';
// import './assets/font/iconfont.css';

/* 导入UI库中所有的组件和对应的样式 */
import 'vant/lib/index.css'
Vue.use(Vant);//移动端ui框架

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
