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
          name: 'Pool',
          path: 'pool',
          component: () => import('@/views/pool'),
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
          name: 'Government Bond Detail',
          path: 'government-bond-detail',
          component: () => import('@/views/propeties/GovernmentBondDetail.vue'),
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
          name: 'Account',
          path: 'account',
          component: () => import('@/views/Account'),
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
