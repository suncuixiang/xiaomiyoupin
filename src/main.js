import Vue from "vue";
import Vant from "vant";
import "./mock";
import App from "./App.vue";
import router from "./router";
import store from "./store";

/* 导入公共样式 */
import "./assets/reset.min.css";

/* 导入UI库中所有的组件和对应的样式 */
import "vant/lib/index.css";
Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
