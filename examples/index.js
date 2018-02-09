// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import hekrComponents from '@hekr/hekr-components'
import Auto from '../src'
import ui from './data/ui'
import i18n from './data/i18n'
import protocol from './data/protocol'

Vue.config.productionTip = false

Vue.use(hekrComponents, {
  lang: 'en-US'
})
console.log(hekrComponents)

Vue.use(Auto, {
  protocol,
  send () {
    console.log(arguments)
  },
  ui,
  i18n,
  lang: 'en-US'
})
console.log(Auto)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
