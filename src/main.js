import Vue from "vue";
import App from "./App.vue";
import Vue3 from "@vue/composition-api";
Vue.use(Vue3);

/**
 * event bus is initiated as a prototype so that any component/page can simpley use it as "this.$eventBus" (in Vue 2.x) or "context.root.$eventBus" in (Vue 3.x)
 */
Vue.prototype.$eventBus = new Vue();

/**
 * if we want to use all of the algo-components without having to import them in each page of this app, uncomment the next two LoC
 */
// import AlgoComps from "../../algo-components";
// Vue.use(AlgoComps);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
