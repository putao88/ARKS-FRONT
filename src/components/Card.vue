<template>
  <div
    v-ripple="{ class: 'indigo--text' }"
    class="card-container pointer rounded-lg elevation-10 pa-2"
    @click="toDetail"
  >
    <v-img
      class="white--text align-end rounded-lg"
      height="150px"
      :src="cardDetail.coverImg"
    />
    <div
      v-if="cardDetail.id === '0'"
      class="card-content py-4 font-weight-bold primary--text"
      style="margin-top: 40px"
    >
      <div class="d-flex justify-space-between">
        <span>Estimated Yield to Maturity</span>
        <span class="d-flex align-center">
          <span class="mr-1">{{ cardDetail.estimated }}</span>
          <tooltips tip-text="The Estimated Yield to Maturity is the discount rate that equates the ETF's aggregate cash flows to a given ETF price. The cash flows are based on the yield-to-worst methodology in which a bond's cash flows are assumed to occur at the call date (if applicable) or maturity, whichever results in the lowest yield for that bond holding." />
        </span>
      </div>
    </div>
    <div
      v-else
      class="card-content py-4"
    >
      <div class="d-flex justify-space-between">
        <span>EXPECTED INCOME</span>
        <span class="d-flex align-center">
          <span class="mr-1">{{ cardDetail.rentalReturn }}</span>
          <tooltips tip-text="Expected Income is calculated as RWA Net Income / Total Investment. The RWA Income includes rent, operating income, and any others. It does not include the potential return to token holders from capital appreciation on the asset itself." />
        </span>
      </div>
      <div class="d-flex justify-space-between">
        <span>CAPITAL ROI</span>
        <div class="d-flex align-center">
          <span class="mr-1">+{{ cardDetail.appreciation }}</span>
          <tooltips tip-text="The Capital ROI here is the annual percentage change determined by Percent Change in Total Investment/Years Since Prior Valuation.This value represents the nominal increase in value to the NFT-holder based on the value of the NFT received." />
        </div>
      </div>
      <div class="d-flex justify-space-between font-weight-bold primary--text">
        <span>TOTAL</span>
        <div class="d-flex align-center">
          <span class="mr-1">+{{ parseFloat(cardDetail.rentalReturn)+ parseFloat(cardDetail.appreciation) }}%</span>
          <tooltips tip-text="This is the sum of Expected Income + Capital Return on Investment (derived from the increase in NFT value). This figure is an estimate based on historical conditions, which is only used to measure excess performance or evaluate investment results, and does not represent a yield commitment." />
        </div>
      </div>
    </div>
    <div class="card-footer text-h4  rounded-lg font-weight-bold primary white--text">
      {{ cardDetail.address }}
    </div>
  </div>
</template>

<script>
  import Tooltips from '@/components/Tooltips'
  export default {
    name: 'Card',
    components: { Tooltips },
    props: {
      cardDetail: {
        type: Object,
        default: () => ({
          id: '1',
          coverImg: require('@/assets/house/1/cover.png'),
        }),
      },
    },
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
    padding: 0 20px;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>
