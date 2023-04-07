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
          <v-tab href="#Assets">
            Assets
          </v-tab>

          <v-tab href="#Referrals">
            Referrals
          </v-tab>

          <v-tab href="#Liquidity">
            Liquidity
          </v-tab>
        </v-row>
      </v-tabs>

      <v-tabs-items v-model="tab">
        <v-tab-item
          value="Assets"
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
                ${{ getPriceValue(interestValue) }}
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
              v-for="(i, index) in dataUrl"
            >
              <v-col
                :key="index"
                cols="12"
                sm="12"
                lg="3"
              >
                <v-card class="rounded-lg pointer">
                  <v-img
                    class="white--text align-end"
                    height="220px"
                    :src="i"
                  />
                </v-card>
              </v-col>
            </template>
          </v-row>
        </v-tab-item>
        <v-tab-item
          value="Referrals"
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
                ${{ getPriceValue(rewardValue) }}
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
                  v-model="myReferrals"
                  disabled="true"
                />
              </div>
              <v-btn
                width="100px"
                color="primary"
                rounded
                @click="copy(myReferrals)"
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
                ${{ getPriceValue(referrals.value) }}
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
                Lv {{ referrals.level }}
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
                {{ referrals.rate }}%
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
                ${{ getPriceValue(referrals.reward) }}
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
          value="Liquidity"
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
                {{ getPriceValue(liquidity.token) }}
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
                ${{ getPriceValue(liquidity.value) }}
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
                {{ getPriceValue(liquidity.yield) }}
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
            <v-tab href="#Deposit">
              Deposit
            </v-tab>

            <v-tab href="#Widthdrew">
              Widthdrew
            </v-tab>
          </v-tabs>
          <v-tabs-items v-model="liquidityTab">
            <v-tab-item
              value="Deposit"
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
                      v-model="depositVal"
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
                    deposit
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
              value="Widthdrew"
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
                      v-model="widthdrewVal"
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
  import Web3 from 'web3'
  import { mapState } from 'vuex'

  import ARKSMain from '@/abi/ARKSMain.json'
  import ARKSNFT from '@/abi/ARKSNFT.json'
  import { mainAddress, nftAddress } from '../../abi/contractdata'
  import { getPriceValue } from '@/utils/tools'
  import { copy } from '@/utils/common'
  import { Base64 } from 'js-base64'
  export default {
    name: 'Account',
    data () {
      return {
        tab: null,
        liquidityTab: 'Widthdrew',
        myReferrals: 'https://app.arkslabs.io/',
        depositVal: null,
        widthdrewVal: null,
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
        interestValue: 0,
        rewardValue: 0,
        referrals: {
          value: 0,
          level: 0,
          rate: 0,
          reward: 0,
        },
        liquidity: {
          token: 0,
          value: 0,
          yield: 0,
        },
        dataUrl: [],
        mainContract: null,
        nftContract: null,
        // web3: null,
      }
    },
    computed: {
      ...mapState(['address']),
    },
    async mounted () {
      if (this.address) {
        const web3 = new Web3(window.web3.currentProvider)
        this.mainContract = new web3.eth.Contract(
          ARKSMain,
          mainAddress,
        )
        this.nftContract = new web3.eth.Contract(
          ARKSNFT,
          nftAddress,
        )
        this.getAssets()
        this.getReferral()
        this.getLiquidity()
        this.myReferrals = `https://app.arkslabs.io/&ref=${this.address}`
      }
      this.init()
    },
    methods: {
      getPriceValue: getPriceValue,
      copy: copy,
      init () {
        this.hint = `Balance: ${97}`
        this.openTab()
      },
      openTab () {
        const tab = this.$route.query.tab
        if (tab) {
          const tabArray = tab.split('-')
          console.log(tabArray)
          this.tab = tabArray[0]
          if (tabArray[0] === 'Liquidity' && tabArray.length > 1) {
            this.liquidityTab = tabArray[1]
          }
        }
      },
      getAssets () {
        this.mainContract.methods.getAddressUnclaimedRewardRent(this.address).call().then(res => {
          this.interestValue = res
        })
        this.nftContract.methods.tokensOfOwner(this.address).call().then(res => {
          const dataToken = res
          // const tempUrl = []
          dataToken.forEach(item => {
            this.nftContract.methods.tokenURI(item).call().then(res => {
              const data = res.split('data:application/json;base64,')[1]
              const obj = JSON.parse(Base64.decode(data))
              this.dataUrl.push(obj.image)
            })
          })
        })
      },
      getReferral () {
        this.mainContract.methods.getAddressUnclaimedRewardRef(this.address).call().then(res => {
          this.rewardValue = res
        })
        this.mainContract.methods.getAddressInfoRef(this.address).call().then(res => {
          this.referrals.value = res[0]
          this.referrals.level = res[1]
          this.referrals.rate = res[2]
          this.referrals.reward = res[3]
        })
        this.mainContract.methods.getAddressInfoRefDetails(this.address).call().then(res => {
          if (res.length) {
            this.desserts = []
            const temp = []
            res.forEach(item => {
              const date = new Date(item[1])
              const year = date.getFullYear()
              let month = date.getMonth() + 1
              let day = date.getDate()
              month = month < 10 ? ('0' + month) : month
              day = day < 10 ? ('0' + day) : day
              const obj = {
                Address: item[0],
                Date: `${year}-${month}-${day}`,
                Value: getPriceValue(item[2]) + ' USDT',
                Rate: getPriceValue(item[3]) + '%',
                Rewards: item[4] + ' USDT',
              }
              temp.push(obj)
            })
            this.desserts = temp
          }
          console.log(res, '5')
        })
      },
      getLiquidity () {
        this.mainContract.methods.getAddressInfoLiquidity(this.address).call().then(res => {
          console.log(res, '6')
          this.liquidity.token = res[0]
          this.liquidity.value = res[1]
          this.liquidity.yield = res[2]
        })
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
