import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button } from 'vant';
import { Switch,Checkbox,CheckboxGroup,Overlay  } from 'vant';
Vue.config.productionTip = false;
Vue.use(Button).use(Switch).use(Checkbox).use(CheckboxGroup).use(Overlay);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
