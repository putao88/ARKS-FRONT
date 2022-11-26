<template>
  <v-tooltip
    top
    black
  >
    <template v-slot:activator="{ on, attrs }">
      <v-icon
        v-bind="attrs"
        :size="size"
        class="pointer"
        v-on="on"
      >
        mdi-alert-circle-outline
      </v-icon>
    </template>
    <span>{{ tipText }}</span>
  </v-tooltip>
</template>

<script>

  export default {
    name: 'Tooltips',
    props: {
      size: {
        type: String,
        default: '16',
      },
      tipText: {
        type: String,
        default: 'Tooltip',
      },
    },
    data () {
      return {
      }
    },
    computed: {
    },
    mounted () {
    },
    methods: {
    },
  }
</script>
<style lang="scss" scoped>
</style>
