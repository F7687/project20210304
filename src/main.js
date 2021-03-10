import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { Button } from 'vant';
import { Switch,Checkbox,CheckboxGroup,Overlay,Col, Row   } from 'vant';
Vue.config.productionTip = false;
Vue.use(Button).use(Switch).use(Checkbox).use(CheckboxGroup).use(Overlay).use(Col).use(Row);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
