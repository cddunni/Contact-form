import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const vuexPersistence = new VuexPersistence({
  storage: localStorage,
});

export default new Vuex.Store({
  state: {
    users: [],
  },
  getters: {
    getUsers: (state) => state.users,
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
  },
  actions: {},
  plugins: [vuexPersistence.plugin],
});
