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
          name: 'Propeties',
          path: 'propeties',
          component: () => import('@/views/propeties'),
        },
        {
          name: 'Propeties Detail',
          path: 'propeties-detail',
          component: () => import('@/views/propeties/Detail.vue'),
        },
        {
          name: 'Launchpad',
          path: '/launchpad',
          component: () => import('@/views/launchpad'),
        },
        {
          name: 'Launchpad Detail',
          path: 'launchpad-detail',
          component: () => import('@/views/launchpad/LaunchpadDetail'),
        },
        {
          name: 'MyAccount',
          path: 'myAccount',
          component: () => import('@/views/myAccount'),
        },
        {
          name: 'Marketplace',
          path: 'marketplace',
          component: () => import('@/views/marketplace'),
        },
        {
          name: 'Marketplace History',
          path: 'marketplace-history',
          component: () => import('@/views/marketplaceHistory'),
        },
        {
          name: 'Liquidity',
          path: 'liquidity',
          component: () => import('@/views/liquidity'),
        },
      ],
    },
  ],
})
