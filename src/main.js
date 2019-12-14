import Vue from 'vue'
import App from './App.vue'

import vueRouter from 'vue-router'
Vue.use(vueRouter)
import router from './router'

import axios from 'axios'
import vueaxios from 'vue-axios'
// Vue.prototype.$axios = axios;
Vue.use(vueaxios,axios)

import Vuelidate from 'vuelidate'
import * as rules from 'vuelidate/lib/validators'
Vue.prototype.$rules = {};
Object.keys(rules).forEach(key => {
  Vue.prototype.$rules[key] = rules[key];
});
Vue.use(Vuelidate);

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  axios,
}).$mount('#app')

