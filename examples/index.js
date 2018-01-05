// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import hekrComponents from '@hekr/hekr-components'
import AutoComponents from '../src'

Vue.config.productionTip = false

Vue.use(hekrComponents, {
  lang: 'en-US'
})
console.log(hekrComponents)
Vue.use(AutoComponents)
console.log(AutoComponents)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
