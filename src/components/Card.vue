<template>
  <div
    v-ripple="{ class: 'indigo--text' }"
    class="card-container pointer rounded-lg elevation-10 pa-2"
    @click="toDetail"
  >
    <v-img
      class="white--text align-end rounded-lg"
      height="150px"
      src="@/assets/img/nft.png"
    />
    <div class="card-content py-4">
      <div class="d-flex justify-space-between">
        <span>EXPECTED INCOME</span>
        <span class="d-flex align-center">
          <span class="mr-1">10.25%</span>
          <tooltips tip-text="xxx" />
        </span>
      </div>
      <div class="d-flex justify-space-between">
        <span>CAPITAL ROI</span>
        <div class="d-flex align-center">
          <span class="mr-1">+13.33%</span>
          <tooltips tip-text="xxx" />
        </div>
      </div>
      <div class="d-flex justify-space-between font-weight-bold primary--text">
        <span>TOTAL</span>
        <div class="d-flex align-center">
          <span class="mr-1">+23.58%</span>
          <tooltips tip-text="xxx" />
        </div>
      </div>
    </div>
    <div class="card-footer text-h4  rounded-lg font-weight-bold primary white--text">
      18983 Alcoy Ave
    </div>
  </div>
</template>

<script>
  import Tooltips from '@/components/Tooltips'
  export default {
    name: 'Card',
    components: { Tooltips },
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
  .card-content {
    font-size: 13px;
  }
  .card-footer {
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
}
</style>
