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
import Raven from 'raven-js'
import RavenVue from 'raven-js/plugins/vue'
Raven
    // .config(' --- ADD SENTRY DSN HERE --- ')
    .addPlugin(RavenVue, Vue)
    .install()
Vue.prototype.$raven = Raven

import vueSeo from '@deveodk/vue-seo'
Vue.use(vueSeo)

Vue.use(VueAxios, axios)
axios.defaults.baseURL = ''

import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'
Vue.use(VueToastr, {
    defaultPosition: 'toast-bottom-right',
    defaultType: 'info',
    defaultTimeout: 5000
})

import errorTracker from '@deveodk/vue-error-tracker'
Vue.use(errorTracker, {
    HttpDriver: require('@deveodk/vue-error-tracker/drivers/http/axios.js'),
    NotificationDriver: require('@deveodk/vue-error-tracker/drivers/notification/deveoToastr.js'),
    ReportDriver: require('@deveodk/vue-error-tracker/drivers/report/sentry.js'),
    HttpErrorCodes: {
        401: {
            title: 'Ingen adgang',
            message: 'Du har ikke adgang til at se dette',
            type: 'error'
        },
        400: {
            title: 'Ukendt fejl',
            message: 'Noget gik galt',
            type: 'error'
        },

        500: {
            title: 'Server fejl',
            message: 'Åhh nej noget er gået galt',
            type: 'error'
        }
    }
})

Vue.use(VueMoment)
require('moment/locale/da')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
