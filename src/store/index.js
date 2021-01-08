import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from "vuex-persistedstate";
// import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  // plugins: [createPersistedState()],
  state: {
    // todoItem: null,
    // todoLists: []
  },
  mutations: {
    // createTodo(state, payload) {
    //   state.todoItem = payload;
    // },
    // upDateTodo(state, payload) {
    //   state.todoLists.todo = payload;
    // },
  },
  actions: {
    // getTodoLists({ commit })
  },
  modules: {
  }
})
