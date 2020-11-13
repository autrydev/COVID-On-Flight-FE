import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import axios from 'axios'

Vue.config.productionTip = false

axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;

new Vue({
  axios,
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
