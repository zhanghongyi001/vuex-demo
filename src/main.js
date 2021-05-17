import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuex from 'vuex'
import 'amfe-flexible/index.js'
import { modules } from '@/store'
Vue.use(Vuex)
Vue.config.productionTip = false
const store = new Vuex.Store(modules);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
