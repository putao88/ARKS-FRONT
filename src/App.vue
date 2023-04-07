<template>
  <router-view />
</template>

<script>
  export default {
    name: 'App',
    beforeCreate () {
      console.log('registerWeb3 Action dispatched from app.vue')
      this.$store.dispatch('getLoginAddress')
    },
  }
</script>
<style lang="scss">
::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 8px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 2px;
}
::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(97, 184, 179, 0.1);
  background: var(--color-primary);
}
::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(87, 175, 187, 0.1);
  border-radius: 10px;
  background: #ededed;
}
</style>
