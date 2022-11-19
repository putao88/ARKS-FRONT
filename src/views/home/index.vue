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
        <p class="text-subtitle-2 text-center">
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
        <v-btn
          color="primary"
          to="/launchpad"
        >
          Buy Now
        </v-btn>
      </div>
      <v-row
        justify="space-around"
        class="my-8"
      >
        <!-- <v-col
          cols="12"
          lg="3"
        >
          <div class="elevation-4 pa-3 rounded-lg">
            <p class="text-body-2">
              Assets Amount
            </p>
            <p class="text-h3">
              31
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="3"
        >
          <div class="elevation-4 pa-3 rounded-lg">
            <p class="text-body-2">
              Assets Value(USD)
            </p>
            <p class="text-h3">
              $2,135,397
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="3"
        >
          <div class="elevation-4 pa-3 rounded-lg">
            <p class="text-body-2">
              Users Amount
            </p>
            <p class="text-h3">
              1,578
            </p>
          </div>
        </v-col> -->
        <v-col
          cols="12"
          sm="6"
          lg="3"
        >
          <base-material-stats-card
            color="info"
            icon="mdi-twitter"
            title="Assets Amount"
            value="31"
            sub-icon="mdi-clock"
            sub-text="Just Updated"
          />
        </v-col>

        <v-col
          cols="12"
          sm="6"
          lg="3"
        >
          <base-material-stats-card
            color="orange"
            icon="mdi-poll"
            title="Assets Value(USD)"
            value="$2,135,397"
            sub-icon="mdi-tag"
            sub-text="Tracked from Google Analytics"
          />
        </v-col>

        <v-col
          cols="12"
          sm="6"
          lg="3"
        >
          <base-material-stats-card
            color="success"
            icon="mdi-store"
            title="Users Amount"
            value="1,578"
            sub-icon="mdi-calendar"
            sub-text="Last 24 Hours"
          />
        </v-col>
      </v-row>
      <v-row>
        <template v-for="(item, index) in cardInfo">
          <v-col
            :key="index"
            cols="12"
            lg="3"
          >
            <card />
          </v-col>
        </template>
      </v-row>
    </div>
    <v-container />
  </v-container>
</template>

<script>
  import Card from '@/components/Card.vue'
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
</style>
