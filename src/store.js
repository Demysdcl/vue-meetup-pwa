import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        id: 1,
        name: "Tagôre",
        company: "DroneMapp",
        img: "https://cdn.vuetifyjs.com/images/cards/desert.jpg"
      },
      {
        id: 2,
        name: "Demys",
        company: "Contabilizei",
        img: "https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      }
    ]
  },
  mutations: {},
  actions: {}
});
