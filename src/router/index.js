import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";
import Categories from "../pages/Categories";
import Cart from "../pages/Cart";
import My from "../pages/My";
import Login from "../pages/Login";
import Menu from "../components/Menu";
import Detail from "../pages/Detail";
import SignOut from "../pages/SignOut";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  routes: [
    {
      path: "/",
      redirect: "/home",
    },
    {
      path: "/home",
      name: "home",
      components: {
        default: Home,
        Footer: Menu,
      },
    },
    {
      path: "/categories",
      name: "categories",
      components: {
        default: Categories,
        Footer: Menu,
      },
    },
    {
      path: "/cart",
      name: "cart",
      components: {
        default: Cart,
        Footer: Menu,
      },
    },
    {
      path: "/my",
      name: "my",
      components: {
        default: My,
        Footer: Menu,
      },
    },
    {
      path: "/detail",
      name: "detail",
      component: Detail,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/signout",
      name: "signout",
      component: SignOut,
    },
    {
      path: "*",
      redirect: "/home",
    },
  ],
});

export default router;
