<template>
  <v-container
    id="account"
    fluid
    tag="section"
  >
    <v-card>
      <v-tabs
        v-model="tab"
        centered
        light
        icons-and-text
      >
        <v-tabs-slider />

        <v-tab href="#tab-1">
          Assets
        </v-tab>

        <v-tab href="#tab-2">
          Referrals
        </v-tab>

        <v-tab href="#tab-3">
          Liquidity
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          value="tab-1"
        >
          <v-row
            class="elevation-3 my-8 rounded-lg"
            justify="center"
            align="center"
          >
            <v-col
              cols="12"
              sm="6"
              lg="4"
              class="text-center"
            >
              <p class="text-h4 font-weight-bold">
                Interest
              </p>
              <p class="text-h2">
                $9,346.95
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="6"
              lg="4"
              class="text-center"
            >
              <v-btn
                large
                width="200px"
                class="rounded-lg"
                color="primary"
                dark
              >
                Claim
              </v-btn>
            </v-col>
          </v-row>
          <v-row
            class="elevation-10 my-8 rounded-lg rounded-xl pa-10"
          >
            <v-col
              cols="12"
              sm="12"
              lg="12"
            >
              <p class="text-h3 font-weight-bold text-center mb-8">
                My Account
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              lg="4"
              class="text-center"
            >
              <p class="text-h2 mb-1">
                $9,346
              </p>
              <p class="text-h4">
                Assets Value
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              lg="4"
              class="text-center"
              :class="{'border-lg-lr': ['lg', 'xl'].includes($vuetify.breakpoint.name)}"
            >
              <p class="text-h2 mb-1">
                7.36%
              </p>
              <p class="text-h4">
                APR
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              lg="4"
              class="text-center"
            >
              <p class="text-h2 mb-1">
                $1.95/d
              </p>
              <p class="text-h4">
                Daily Return
              </p>
            </v-col>
            <template
              v-for="i in 8"
            >
              <v-col
                :key="i"
                cols="12"
                sm="12"
                lg="3"
              >
                <v-card class="rounded-xl pointer">
                  <v-img
                    class="white--text align-end"
                    height="220px"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                  />
                </v-card>
              </v-col>
            </template>
          </v-row>
        </v-tab-item>
        <v-tab-item
          value="tab-2"
        >
          <div>123</div>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    name: 'Account',
    data () {
      return {
        tab: null,
      }
    },
  }
</script>

<style lang="scss" scoped>
.border-lg-lr {
  border-right: 1px solid var(--color-primary);
  border-left: 1px solid var(--color-primary);
}
.border-col-bt {
  border-top: 1px solid var(--color-primary);
  border-bottom: 1px solid var(--color-primary);
}
</style>
