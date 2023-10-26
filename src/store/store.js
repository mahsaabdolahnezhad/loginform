// store.js

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: sessionStorage.getItem("username") || "", 
    password: sessionStorage.getItem("password") || "", 
    firstName: sessionStorage.getItem("firstName") || "",
    lastName: sessionStorage.getItem("lastName") || "",
  },
  mutations: {
    setUsername(state, username) {
      state.username = username;
      sessionStorage.setItem("username", username);
    },
    setPassword(state, password) {
      state.password = password;
      sessionStorage.setItem("password", password); 
    },
    setFirstName(state, firstName) {
      state.firstName = firstName;
      sessionStorage.setItem("firstName", firstName);
    },
    setLastName(state, lastName) {
      state.lastName = lastName;
      sessionStorage.setItem("lastName", lastName);
    },
  },
});
