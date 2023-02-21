import Vue from "vue";
import store from "./store";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "./utils/veeValiadate";

import { ValidationProvider, ValidationObserver } from "vee-validate";

// Register it globally
// main.js or any entry file.
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
