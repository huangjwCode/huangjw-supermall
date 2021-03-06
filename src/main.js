import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store";
import Toast from "components/common/toast/index.js";
import VueLazyLoad from "vue-lazyload";
import FastClick from 'fastclick'



Vue.config.productionTip = false

//Vue实例有$on,$emit等方法，所以可以作为$bus的事件总线
Vue.prototype.$bus = new Vue();
Vue.use(Toast);
Vue.use(VueLazyLoad, {
  loading: require("assets/img/common/placeholder.png")
});

FastClick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
