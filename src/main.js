import Vue from 'vue'
import App from './App.vue'
import router from './router'


import mock from '../src/mock-data.js'

Vue.config.productionTip = false

let data = {
  events: mock,
  calendar: [],
}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')

