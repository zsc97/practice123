import Vue from 'vue'
import App from './App.vue'

import vueRouter from 'vue-router'
Vue.use(vueRouter)
import router from './router'

import axios from 'axios'
import vueaxios from 'vue-axios'
// Vue.prototype.$axios = axios;
Vue.use(vueaxios,axios)

Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
  axios,
}).$mount('#app')

