<template>
  <v-container
    id="poll"
    fluid
    tag="section"
  >
    <v-row
      justify="space-around"
      align="stretch"
    >
      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="3"
      >
        <v-card
          class="rounded-lg pa-4 grey lighten-5 d-flex flex-column justify-space-between"
          style="height: 100%"
        >
          <div>
            <div class="text-h4 font-weight-bold mb-4">
              U.S. Treasuries Pool
            </div>
            <div class="font-weight-bold">
              <span class="rounded-pill amber py-1 px-2">4.32% APY</span>
              <span class="rounded-lg green darken-2 py-1 px-2 ml-2 white--text">S</span>
            </div>
          </div>
          <div class="mt-10">
            <v-icon
              size="36"
              class="mdi mdi-arrow-right-thin-circle-outline float-right pointer"
            />
          </div>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="3"
      >
        <v-card
          class="rounded-lg pa-4 indigo accent-4 d-flex flex-column justify-space-between"
          style="height: 100%"
        >
          <div>
            <div class="text-h4 font-weight-bold mb-4 white--text">
              ARKS Global Real Estate NFT Liquidity Pool
            </div>
            <div class="font-weight-bold">
              <span class="rounded-pill amber py-1 px-2">5-7% APY</span>
              <span class="rounded-lg green darken-2 py-1 px-2 ml-2 white--text">S</span>
            </div>
          </div>
          <div class="mt-10">
            <v-icon
              size="36"
              color="white"
              class="mdi mdi-arrow-right-thin-circle-outline float-right pointer"
            />
          </div>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="3"
      >
        <v-card
          class="rounded-lg pa-4 purple accent-4 d-flex flex-column justify-space-between"
          style="height: 100%"
        >
          <div>
            <div class="text-h4 font-weight-bold mb-4 white--text">
              ARKS Global Real Estate NFT Pool
            </div>
            <div class="font-weight-bold">
              <span class="rounded-pill amber py-1 px-2">11-20% APY</span>
              <span class="rounded-lg green darken-2 py-1 px-2 ml-2 white--text">A</span>
            </div>
          </div>
          <div class="mt-10">
            <v-icon
              size="36"
              color="white"
              class="mdi mdi-arrow-right-thin-circle-outline float-right pointer"
            />
          </div>
        </v-card>
      </v-col>

      <v-col
        cols="12"
        sm="12"
        md="6"
        lg="3"
      >
        <v-card
          class="rounded-lg pa-4 black lighten-5 d-flex flex-column justify-space-between"
          style="height: 100%"
        >
          <div>
            <div class="text-h4 font-weight-bold mb-4 white--text">
              ARKS Structured Credit NFT Pool
            </div>
            <div class="text-h4 font-weight-medium mb-1">
              Junior Yield
            </div>
            <div class="font-weight-bold">
              <span class="rounded-pill amber py-1 px-2">15-300% APY</span>
            </div>
            <div class="font-weight-bold mb-4 mt-2">
              <span class="rounded-lg lime py-1 px-2 mr-2 white--text">A</span>
              <span class="rounded-lg amber py-1 px-2 mr-2 white--text">B</span>
              <span class="rounded-lg orange py-1 px-2 mr-2 white--text">C</span>
              <span class="rounded-lg deep-orange py-1 px-2 mr-2 white--text">D</span>
            </div>
            <div class="text-h4 font-weight-medium mb-1">
              Senior Yield
            </div>
            <div class="font-weight-bold">
              <span class="rounded-pill amber py-1 px-2">4-8% APY</span>
              <span class="rounded-lg green darken-2 py-1 px-2 ml-2 white--text">S</span>
            </div>
          </div>
          <div class="mt-10">
            <v-icon
              size="36"
              color="white"
              class="mdi mdi-arrow-right-thin-circle-outline float-right pointer"
            />
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Pool',
    data () {
      return {
      }
    },
    methods: {
      toAccount () {
        this.$router.push('/account')
      },
      toDetail () {
        this.$router.push('/launchpad-detail')
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
