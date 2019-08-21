import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/404',
      name: '404',
      component: require('@/pages/common/404')
    },
    {
      path: '*',
      redirect: '404'
    },
    {
      path: '/',
      name: 'Index',
      component: require('@/pages/common/index'),
      meta: {
        auth: true
      }
    },
    {
      path: '/about',
      name: 'About',
      component: require('@/pages/about/index'),
      meta: {
        auth: true
      }
    },
    {
      path: '/contact',
      name: 'Contact',
      component: require('@/pages/contact/index'),
      meta: {
        auth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: require('@/components/core/login'),
      meta: {
        auth: false
      }
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: require('@/components/core/forgot-password'),
      meta: {
        auth: false
      }
    },
    {
      path: '/set-new-password',
      name: 'SetNewPassword',
      component: require('@/components/core/create-password'),
      meta: {
        auth: false
      }
    }
  ]
})
