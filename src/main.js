import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import icons from "@/plugins/icons"
import "@/assets/style.scss"
import "@/utils/globalComponents"


Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  icons,
  render: (h) => h(App),
}).$mount("#app");
