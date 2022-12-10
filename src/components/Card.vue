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
    <div class="card-content py-4">
      <div class="d-flex justify-space-between">
        <span>EXPECTED INCOME</span>
        <span class="d-flex align-center">
          <span class="mr-1">{{ cardDetail.rentalReturn }}</span>
          <tooltips tip-text="xxx" />
        </span>
      </div>
      <div class="d-flex justify-space-between">
        <span>CAPITAL ROI</span>
        <div class="d-flex align-center">
          <span class="mr-1">+{{ cardDetail.appreciation }}</span>
          <tooltips tip-text="xxx" />
        </div>
      </div>
      <div class="d-flex justify-space-between font-weight-bold primary--text">
        <span>TOTAL</span>
        <div class="d-flex align-center">
          <span class="mr-1">+{{ parseFloat(cardDetail.rentalReturn)+ parseFloat(cardDetail.appreciation) }}%</span>
          <tooltips tip-text="xxx" />
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
