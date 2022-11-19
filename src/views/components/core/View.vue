<template>
  <v-content class="content-wrap">
    <router-view />

    <dashboard-core-footer />
  </v-content>
</template>

<script>
  export default {
    name: 'DashboardCoreView',

    components: {
      DashboardCoreFooter: () => import('./Footer'),
    },
  }
</script>
<style lang="scss" scoped>
// .content-wrap {
//   background: linear-gradient(135deg, #DFD5EC, #eee);
//   background-size: 400% 400%;
//   animation: gradient 5s ease infinite;
// }
// @keyframes gradient {
//   0% {
//       background-position: 0% 50%;
//   }

//   50% {
//       background-position: 100% 50%;
//   }

//   100% {
//       background-position: 0% 50%;
//   }
// }
</style>
