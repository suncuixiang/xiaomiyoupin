import Cookies from "js-cookie";
import * as TYPES from "../store-types";
import { login, signOut } from "../../api/login";

const state = {
  token: "",
  name: "",
  avatar: "",
};

const mutations = {
  [TYPES.USER_LOGIN]: (state, payload) => {
    let { token, name, avatar } = payload;
    state.token = token;
    state.name = name;
    state.avatar = avatar;
  },
  [TYPES.USER_SIGNOUT]: (state) => {
    state.token = "";
    state.name = "";
    state.avatar = "";
  },
};

const actions = {
  [TYPES.USER_LOGIN]: ({ commit }, payload) => {
    return login(payload).then((res) => {
      let { token, name, avatar } = res;
      commit(TYPES.USER_LOGIN, res);
      Cookies.set("token", token);
      sessionStorage.setItem("name", name);
      sessionStorage.setItem("avatar", avatar);
    });
  },
  [TYPES.USER_SIGNOUT]: ({ commit }) => {
    return signOut().then(() => {
      commit(TYPES.USER_SIGNOUT);
      Cookies.remove("token");
      sessionStorage.removeItem("name");
      sessionStorage.removeItem("avatar");
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
