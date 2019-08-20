// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import VueMoment from 'vue-moment'
import 'es6-promise/auto'
import * as Sentry from '@sentry/browser'
import * as Integrations from '@sentry/integrations'

Vue.component('placeholder-boxes', require('@/components/elements/placeholder-boxes'))

import vueSeo from '@deveodk/vue-seo'
Vue.use(vueSeo)

Vue.use(VueAxios, axios)
axios.defaults.baseURL = process.env.API_URL

Vue.use(VueMoment)
require('moment/locale/da')

import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'
Vue.use(VueToastr, {
    defaultPosition: 'toast-bottom-right',
    defaultType: 'info',
    defaultTimeout: 5000
})

if (process.env.NODE_ENV === 'production') {
    Sentry.init({
        dsn: 'https://a5fb7f577b8247fa8ec1d159372fdb86@sentry.io/1536303',
        integrations: [new Integrations.Vue({Vue, attachProps: true})]
    })
}

Vue.router = router

Vue.use(require('@websanova/vue-auth'), {
  auth: require('@/auth/bearer_driver.js'),
  http: require('@websanova/vue-auth/drivers/http/axios.1.x.js'),
  router: require('@websanova/vue-auth/drivers/router/vue-router.2.x.js'),
  parseUserData: function (data) {
      return data
  },
  authRedirect: {path: '/login'}
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
