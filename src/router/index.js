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
      component: require('@/pages/common/index')
    },
    {
      path: '/about',
      name: 'About',
      component: require('@/pages/about/index')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: require('@/pages/contact/index')
    },
    {
      path: '/login',
      redirect: '/'
    },
    {
      path: '/forgot-password',
      name: 'ForgotPassword',
      component: require('@/components/core/forgot-password')
    },
    {
      path: '/set-new-password',
      name: 'SetNewPassword',
      component: require('@/components/core/create-password')
    }
  ]
})
