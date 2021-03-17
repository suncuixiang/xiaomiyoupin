import * as TYPES from "../store-types";

const state = {
  goodsList: [],
};
const getters = {};
const mutations = {
  [TYPES.ADD_GOODS]: (state, payload) => {
    let flag = true;
    state.goodsList.map((item) => {
      if (item.title == payload.title) {
        flag = false;
        item.num = payload.num;
      }
      return item;
    });
    if (flag) {
      state.goodsList.push(payload);
    }
  },
  [TYPES.CHANGE_GOODS]: (state, payload) => {
    state.goodsList.map((item) => {
      if (item.title == payload.title) {
        item.num = payload.num;
      }
      return item;
    });
  },
};
const actions = {
  [TYPES.ADD_GOODS]: ({ commit }, payload) => {
    commit("ADD_GOODS", payload);
  },
  [TYPES.CHANGE_GOODS]: ({ commit }, payload) => {
    commit("CHANGE_GOODS", payload);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
