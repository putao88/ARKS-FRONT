<template>
  <div
    v-ripple="{ class: 'indigo--text' }"
    class="card-container pointer"
    @click="toDetail"
  >
    <div class="primary--text text-h3 font-weight-bold py-1 d-flex align-center justify-center">
      <span class="mr-1">+23.58%</span>
      <v-icon>mdi-alert-circle-outline</v-icon>
    </div>
    <div class="rounded elevation-10">
      <div class="pa-2">
        <div class="d-flex justify-space-between my-1">
          <span>EXPECTED INCOME</span>
          <span class="d-flex align-center">
            <span class="mr-1">10.25%</span>
            <v-icon size="16">mdi-alert-circle-outline</v-icon>
          </span>
        </div>
        <div class="d-flex justify-space-between my-1">
          <span>CAPITAL ROI</span>
          <div class="d-flex align-center">
            <span class="mr-1">+13.33%</span>
            <v-icon size="16">mdi-alert-circle-outline</v-icon>
          </div>
        </div>
      </div>
      <v-img
        class="white--text align-end"
        height="150px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      />
      <div class="card-footer primary rounded-b text-h4 white--text">
        18983 Alcoy Ave
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Card',
    data () {
      return {

      }
    },
    methods: {
      toDetail () {
        this.$emit('to-detail')
      },
    },
  }
</script>

<style lang="scss">
.card-container {
  width: 100%;
  .sub-title {
    .lh-24 {
      line-height: 24px;
    }
  }
  .card-footer {
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
}
</style>
