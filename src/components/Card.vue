<template>
  <div
    v-ripple="{ class: 'indigo--text' }"
    class="card-container pointer"
    @click="toDetail"
  >
    <div class="deep-purple--text text-center text-h3 font-weight-bold pt-1 pb-1">
      +23.58%
    </div>
    <div class="rounded elevation-6">
      <div class="sub-title pa-2 black--text">
        <div class="lh-24 d-flex justify-space-between text-subtitle-2">
          <span>EXPECTED INCOME</span>
          <span class="font-weight-bold">10.25%</span>
        </div>
        <div class="lh-24 d-flex justify-space-between text-subtitle-2">
          <span>CAPITAL ROI</span>
          <span class="font-weight-bold">+13.33%</span>
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
