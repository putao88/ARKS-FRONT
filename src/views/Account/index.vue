<template>
  <v-container
    id="Account"
    fluid
    tag="section"
  >
    <v-card class="pa-8">
      <v-tabs
        v-model="tab"
        centered
        light
        icons-and-text
        show-arrows
      >
        <v-row
          justify="center"
        >
          <!-- <v-col
            cols="12"
            sm="12"
            md="12"
            lg="12"
          > -->
          <v-tab href="#tab-1">
            Assets
          </v-tab>

          <v-tab href="#tab-2">
            Referrals
          </v-tab>

          <v-tab href="#tab-3">
            Liquidity
          </v-tab>
          <!-- </v-col> -->
        </v-row>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          value="tab-1"
        >
          <v-row
            class="mt-4"
            justify="center"
            align="center"
          >
            <v-col
              cols="12"
              sm="6"
              md="4"
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
              md="4"
              lg="4"
              class="text-center"
            >
              <v-btn
                large
                width="200px"
                color="primary"
                dark
                rounded
              >
                Claim
              </v-btn>
            </v-col>
          </v-row>
          <v-row>
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
            <template
              v-for="i in 8"
            >
              <v-col
                :key="i"
                cols="12"
                sm="12"
                lg="3"
              >
                <v-card class="rounded-lg pointer">
                  <v-img
                    class="white--text align-end"
                    height="220px"
                    src="@/assets/img/nft.png"
                  />
                </v-card>
              </v-col>
            </template>
          </v-row>
        </v-tab-item>
        <v-tab-item
          value="tab-2"
        >
          <v-row
            class="mt-4"
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
                Rewards
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
                color="primary"
                rounded
              >
                Claim
              </v-btn>
            </v-col>
          </v-row>
          <v-row
            justify="center"
          >
            <v-col
              cols="12"
              sm="12"
              lg="12"
            >
              <p class="text-h3 primary--text font-weight-bold text-center mb-8">
                My Referrals
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              lg="12"
              class="d-flex justify-center text-center px-10"
            >
              <div class="wp-50 mr-8">
                <v-text-field
                  v-model="referralsValue"
                  disabled="true"
                />
              </div>
              <v-btn
                width="100px"
                color="primary"
                rounded
              >
                COPY
              </v-btn>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              lg="3"
              class="text-center"
            >
              <p class="text-h2 mb-1">
                $9,346
              </p>
              <p class="text-h4">
                Total Referrals Value
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              lg="3"
              class="text-center"
            >
              <p class="text-h2 mb-1">
                Lv 3
              </p>
              <p class="text-h4">
                Referral Level
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              lg="3"
              class="text-center"
            >
              <p class="text-h2 mb-1">
                10%
              </p>
              <p class="text-h4">
                Current Rate
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              lg="3"
              class="text-center"
            >
              <p class="text-h2 mb-1">
                $146
              </p>
              <p class="text-h4">
                Claimed Rewards
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              lg="12"
            >
              <v-data-table
                :headers="headers"
                :items="desserts"
                :items-per-page="5"
              />
            </v-col>
          </v-row>
        </v-tab-item>
        <v-tab-item
          value="tab-3"
        >
          <v-row
            class="mt-4"
          >
            <v-col
              cols="12"
              sm="12"
              lg="12"
            >
              <p class="text-h3 primary--text font-weight-bold text-center mb-8">
                My Liquidity
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              lg="4"
              class="text-center"
            >
              <p class="text-h2 mb-1">
                17.95
              </p>
              <p class="text-h4">
                My Liquidity Token
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
                $91,346
              </p>
              <p class="text-h4">
                My Liquidity Value
              </p>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              lg="4"
              class="text-center"
            >
              <p class="text-h2 mb-1">
                7.12%
              </p>
              <p class="text-h4">
                Estimated Yield
              </p>
            </v-col>
          </v-row>
          <v-tabs
            v-model="liquidityTab"
            centered
            light
            icons-and-text
          >
            <v-tab href="#deposite">
              Deposite
            </v-tab>

            <v-tab href="#widthdrew">
              Widthdrew
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="liquidityTab">
            <v-tab-item
              value="deposite"
            >
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  lg="12"
                  class="d-flex justify-center text-center px-10"
                >
                  <div class="wp-50 mr-8">
                    <v-text-field
                      v-model="referralsValue"
                      class="mb-4 mt-4"
                      :hint="hint"
                      persistent-hint
                    />
                  </div>
                  <v-btn
                    class="mt-4"
                    color="primary"
                    rounded
                  >
                    deposite
                  </v-btn>
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
                    <v-card class="rounded-lg pointer">
                      <v-img
                        class="white--text align-end"
                        height="220px"
                        src="@/assets/img/nft.png"
                      />
                    </v-card>
                  </v-col>
                </template>
              </v-row>
            </v-tab-item>
            <v-tab-item
              value="widthdrew"
            >
              <v-row>
                <v-col
                  cols="12"
                  sm="12"
                  lg="12"
                  class="d-flex justify-center text-center px-10"
                >
                  <div class="wp-50 mr-8">
                    <v-text-field
                      v-model="referralsValue"
                      class="mb-4 mt-4"
                      :hint="hint"
                      persistent-hint
                    />
                  </div>
                  <v-btn
                    class="mt-4"
                    color="primary"
                    rounded
                  >
                    widthdrew
                  </v-btn>
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
                    <v-card class="rounded-lg pointer">
                      <v-img
                        class="white--text align-end"
                        height="220px"
                        src="@/assets/img/nft.png"
                      />
                    </v-card>
                  </v-col>
                </template>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
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
        liquidityTab: 'widthdrew',
        referralsValue: 'https://arkslabs.io&ref=0x68E..5894',
        hint: 'Balance',
        headers: [
          { text: 'Address', align: 'start', sortable: false, value: 'Address', class: 'primary--text' },
          { text: 'Date', value: 'Date', class: 'primary--text' },
          { text: 'Value', value: 'Value', class: 'primary--text' },
          { text: 'Rate', value: 'Rate', class: 'primary--text' },
          { text: 'Rewards', value: 'Rewards', class: 'primary--text' },
        ],
        desserts: [
          {
            Address: 'Frozen Yogurt',
            Date: '2022-09-11',
            Value: '159 USDT',
            Rate: '10%',
            Rewards: '6 USDT',
          },
          {
            Address: 'Frozen Yogurt',
            Date: '2022-09-11',
            Value: '159 USDT',
            Rate: '10%',
            Rewards: '6 USDT',
          },
          {
            Address: 'Frozen Yogurt',
            Date: '2022-09-11',
            Value: '159 USDT',
            Rate: '10%',
            Rewards: '6 USDT',
          },
          {
            Address: 'Frozen Yogurt',
            Date: '2022-09-11',
            Value: '159 USDT',
            Rate: '10%',
            Rewards: '6 USDT',
          },
        ],
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        this.hint = `Balance: ${97}`
      },
    },
  }
</script>

<style lang="scss" scoped>
.border-lg-lr {
  border-right: 1px solid var(--color-border-grey);
  border-left: 1px solid var(--color-border-grey);
}
.border-col-bt {
  border-top: 1px solid var(--color-border-grey);
  border-bottom: 1px solid var(--color-border-grey);
}
.wp-80 {
  width: 100%;
}
.wp-50 {
  width: 50%;
}
</style>
