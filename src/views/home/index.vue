<template>
  <v-container
    id="home"
    fluid
    tag="section"
  >
    <div class="home-container">
      <div>
        <p class="text-h3 font-weight-bold text-center">
          Connecting The Crypto World with The Real World
        </p>
        <p class="text-subtitle-2 text-center plr-200">
          ARKS provides high-quality real estate investment opportunities for crypto users and enables real estate to circulate safely in the crypto world at low fees.
        </p>
      </div>
      <div class="my-6 text-center">
        <v-btn
          class="mr-14"
          color="primary"
        >
          Learn More
        </v-btn>
        <v-btn color="primary">
          Buy Now
        </v-btn>
      </div>
      <div class="d-flex justify-space-around my-10">
        <div class="elevation-4 w-220 pa-3 rounded-xl">
          <p class="text-body-2">
            Assets Amount
          </p>
          <p class="text-h3">
            31
          </p>
        </div>
        <div class="elevation-4 w-220 pa-3 rounded-xl">
          <p class="text-body-2">
            Assets Value(USD)
          </p>
          <p class="text-h3">
            $2,135,397
          </p>
        </div>
        <div class="elevation-4 w-220 pa-3 rounded-xl">
          <p class="text-body-2">
            Users Amount
          </p>
          <p class="text-h3">
            1,578
          </p>
        </div>
      </div>
      <div class="d-flex justify-space-between">
        <template v-for="(item, index) in cardInfo">
          <card
            :key="index"
            style="width: 22%"
          />
        </template>
      </div>
    </div>
    <v-container />
  </v-container>
</template>

<script>
  import Card from '../../components/Card.vue'
  export default {
    name: 'Home',
    components: {
      Card,
    },
    data () {
      return {
        cardInfo: new Array(4),
      }
    },

    methods: {
    },
  }
</script>

<style lang="scss" scoped>
.plr-200 {
  padding: 0 200px;
}
.w-220 {
  width: 220px;
}
</style>
