import Vue from "vue";
import "./plugins/vuetify";
import UrlData from "./plugins/urlData";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import i18n from "./i18n";

Vue.config.productionTip = false;
Vue.use(UrlData);

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
