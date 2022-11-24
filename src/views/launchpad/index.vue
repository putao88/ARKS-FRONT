<template>
  <v-container
    id="launchpad"
    fluid
    tag="section"
  >
    <v-card class="pa-8">
      <v-row
        class="mx-1"
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
            My Assets Value
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
            16
          </p>
          <p class="text-h4 grey--text">
            My Assets Amount
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
            $187
          </p>
          <p class="text-h4 grey--text">
            My Claimed Value
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
      <v-row justify="space-around">
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
        >
          <v-card
            class="mx-auto rounded-lg rounded-xl pa-4"
          >
            <v-list-item
              three-line
              class="px-0"
            >
              <v-list-item-avatar
                tile
                size="80"
                class="rounded"
              >
                <v-img src="@/assets/img/rwa.png" />
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h2 font-weight-bold">
                $2,135,397
              </v-list-item-title>
              <v-list-item-subtitle class="text-h3">
                RWA
              </v-list-item-subtitle>
              <p class="text-h4 my-2 d-flex justify-space-between">
                <span>Total Sold Value</span>
                <span>$71,634</span>
              </p>
              <p class="text-h4 my-2 d-flex justify-space-between">
                <span>Pool APR
                  <v-icon size="18">
                    mdi-alert-circle-outline
                  </v-icon>
                </span>
                <span>7.63%</span>
              </p>
            </v-list-item-content>

            <v-card-actions>
              <v-btn
                class="primary mx-auto"
                width="100%"
                rounded
                @click="toDetail"
              >
                Buy
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
        >
          <v-card
            class="mx-auto rounded-xl pa-4"
          >
            <v-list-item
              three-line
              class="px-0"
            >
              <v-list-item-avatar
                tile
                size="80"
                class="rounded"
              >
                <v-img src="@/assets/img/nd.png" />
              </v-list-item-avatar>
            </v-list-item>
            <v-list-item-content>
              <v-list-item-title class="text-h2 font-weight-bold">
                $2,135,397
              </v-list-item-title>
              <v-list-item-subtitle class="text-h3">
                ND
              </v-list-item-subtitle>
              <p class="text-h4 my-2 d-flex justify-space-between">
                <span>Total Sold Value</span>
                <span>$71,634</span>
              </p>
              <p class="text-h4 my-2 d-flex justify-space-between">
                <span>Pool APR
                  <v-icon size="18">
                    mdi-alert-circle-outline
                  </v-icon>
                </span>
                <span>7.63%</span>
              </p>
            </v-list-item-content>

            <v-card-actions>
              <v-btn
                rounded
                class="primary mx-auto"
                width="100%"
                @click="toDetail"
              >
                Coming Soon
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>

  export default {
    name: 'Launchpad',
    data () {
      return {
      }
    },
    methods: {
      toAccount () {
        this.$router.push('/myAccount')
      },
      toDetail () {
        this.$router.push('/launchpad-detail')
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
