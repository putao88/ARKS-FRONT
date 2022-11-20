<template>
  <v-container
    id="launchpad-detail"
    fluid
    tag="section"
  >
    <v-row justify="space-between">
      <v-col
        class="elevation-4 rounded-xl white pa-0"
        cols="12"
        sm="12"
        md="4"
        lg="4"
      >
        <v-img
          class="white--text align-end rounded-xl"
          height="300px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />
      </v-col>
      <v-col
        class="pa-4 rounded-xl white"
        cols="12"
        sm="12"
        md="4"
        lg="6"
      >
        <div class="d-flex">
          <span>BNB</span>
          <v-select
            :items="items"
            full-width
            label="Outlined style"
            dense
            outlined
          />
        </div>
        <div>
          <p class="text-h4 my-2 d-flex justify-space-between">
            <span>Amount</span><span />
          </p>
          <p class="text-h4 my-2 d-flex justify-space-between">
            <span>Blockchain</span><span>Polygon</span>
          </p>
          <p class="text-h4 my-2 d-flex justify-space-between">
            <span>Contract Address</span><span>0x59bF...17E6B6</span>
          </p>
          <p class="text-h4 my-2 d-flex justify-space-between">
            <span>APR</span><span>7.63%</span>
          </p>
          <p class="text-h4 my-2 d-flex justify-space-between">
            <span>Total</span><span>500USDT</span>
          </p>
        </div>
        <v-btn
          class="primary rounded-pill"
          width="100%"
          @click="toDetail"
        >
          Buy
        </v-btn>
      </v-col>
    </v-row>
    <v-row
      class="elevation-4 my-8 rounded-lg rounded-xl pa-6 white"
    >
      <v-col
        cols="12"
        sm="12"
        lg="12"
      >
        <p class="text-h3 primary--text font-weight-bold text-center mb-8">
          My Account
        </p>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        class="text-center"
      >
        <p class="text-h2 mb-1">
          $9,346
        </p>
        <p class="text-h4 grey--text">
          Assets Value
        </p>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        class="text-center"
        :class="{'border-lg-lr': ['lg', 'xl'].includes($vuetify.breakpoint.name)}"
      >
        <p class="text-h2 mb-1">
          7.36%
        </p>
        <p class="text-h4 grey--text">
          APR
        </p>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        md="4"
        lg="4"
        class="text-center"
      >
        <p class="text-h2 mb-1">
          $1.95/d
        </p>
        <p class="text-h4 grey--text">
          Daily Return
        </p>
      </v-col>
      <v-col class="text-center">
        <v-btn
          class="rounded-pill"
          color="primary"
          width="60%"
          @click="toAccount"
        >
          Go to My Account
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'LaunchpadDetail',
    data () {
      return {
      }
    },
    methods: {
      toAccount () {
        this.$router.push('/myAccount')
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
