import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/layout/index'),
      children: [
        {
          name: 'Home',
          path: '',
          component: () => import('@/views/home'),
        },
        {
          name: 'Launchpad',
          path: 'launchpad',
          component: () => import('@/views/launchpad'),
        },
        {
          name: 'Propeties',
          path: 'propeties',
          component: () => import('@/views/propeties'),
        },
        {
          name: 'myAccount',
          path: 'myAccount',
          component: () => import('@/views/myAccount'),
        },
        {
          name: 'Marketplace',
          path: 'marketplace',
          component: () => import('@/views/marketplace'),
        },
        {
          name: 'Liquidity',
          path: 'liquidity',
          component: () => import('@/views/liquidity'),
        },
        {
          name: 'Boardroom',
          path: 'boardroom',
          component: () => import('@/views/boardroom'),
        },
      ],
    },
  ],
})
