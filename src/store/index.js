import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    projects: [
      {
        title: "Message App",
        description:
          "A working message app complete with sign in and authentication",
        tech: ["Vue", "Vuex", "Vue-router"],
        progress: "Ongoing",
        url: "https://conclavemessaging.netlify.app/home"
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    getProjects(state) {
      return state.projects;
    }
  },
  modules: {}
});
