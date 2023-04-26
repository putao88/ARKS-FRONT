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
                @click="claimInterest"
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
                ${{ assetsValue }}
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
                {{ apr }}%
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
                ${{ dailyReturn }}/d
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
                <v-card
                  elevation="0"
                  class="rounded-lg pointer"
                >
                  <v-img
                    class="white--text align-end"
                    min-height="250px"
                    :aspect-ratio="29/50"
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
                @click="claimRewardRef"
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
                  :disabled="true"
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
                      :hint="depositHint"
                      persistent-hint
                    />
                  </div>
                  <v-btn
                    class="mt-4"
                    color="primary"
                    rounded
                    @click="depositBalance"
                  >
                    deposit
                  </v-btn>
                </v-col>
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
                      :hint="widthdrewHint"
                      persistent-hint
                    />
                  </div>
                  <v-btn
                    class="mt-4"
                    color="primary"
                    rounded
                    @click="widthdrewBalance"
                  >
                    widthdrew
                  </v-btn>
                </v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
          <v-row>
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
    </v-card>
  </v-container>
</template>

<script>
  import { readContract, prepareWriteContract, writeContract } from '@wagmi/core'
  import { mapState, mapMutations } from 'vuex'
  import mainABI from '@/abi/mainABI.json'
  import nftABI from '@/abi/nftABI.json'
  import testusdtABI from '@/abi/testusdtABI.json'
  import vaulttokenABI from '@/abi/vaulttokenABI.json'
  import { mainAddress, nftAddress, testUSDTAddress, vaultTokenAddress } from '@/abi/contractdata'
  import { getPriceValue } from '@/utils/tools'
  import { copy } from '@/utils/common'
  import { Base64 } from 'js-base64'
  import BigNumber from 'bignumber.js'
  export default {
    name: 'Account',
    data () {
      return {
        tab: null,
        liquidityTab: 'Widthdrew',
        myReferrals: 'https://app.arkslabs.io',
        depositVal: null,
        widthdrewVal: null,
        widthdrewHint: 'Balance',
        depositHint: 'Balance',
        headers: [
          { text: 'Address', align: 'start', sortable: false, value: 'Address', class: 'primary--text' },
          { text: 'Date', value: 'Date', class: 'primary--text' },
          { text: 'Value', value: 'Value', class: 'primary--text' },
          { text: 'Rate', value: 'Rate', class: 'primary--text' },
          { text: 'Rewards', value: 'Rewards', class: 'primary--text' },
        ],
        desserts: [],
        interestValue: 0,
        assetsValue: 0,
        apr: 0,
        dailyReturn: 0,
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
      }
    },
    computed: {
      ...mapState(['address']),
    },
    async mounted () {
      if (this.address) {
        this.getAssets()
        this.getReferral()
        this.getLiquidity()
        this.myReferrals = `https://app.arkslabs.io?ref=${this.address}`
      }
      this.openTab()
    },
    methods: {
      ...mapMutations({
        setSnackbar: 'SET_SNACKBAR',
      }),
      getPriceValue: getPriceValue,
      copy: copy,
      openTab () {
        const tab = this.$route.query.tab
        if (tab) {
          const tabArray = tab.split('-')
          this.tab = tabArray[0]
          if (tabArray[0] === 'Liquidity' && tabArray.length > 1) {
            this.liquidityTab = tabArray[1]
          }
        }
      },
      async getAssets () {
        this.getAddressUnclaimedRewardRent()
        this.tokensOfOwner()
        await this.getAddressTotalValue()
        await this.getLastRewardRate()
        this.getDailyReturn()
      },
      getAddressUnclaimedRewardRent () {
        readContract({
          address: mainAddress,
          abi: mainABI,
          functionName: 'getAddressUnclaimedRewardRent',
          args: [this.address]
        }).then(res => {
          console.log('getAddressUnclaimedRewardRent:', res)
          this.interestValue = res
        })
      },
      tokensOfOwner () {
        readContract({
          address: nftAddress,
          abi: nftABI,
          functionName: 'tokensOfOwner',
          args: [this.address]
        }).then(res => {
          console.log('tokensOfOwner:', res)
          const dataToken = res
          // const tempUrl = []
          dataToken.forEach(item => {
            readContract({
              address: nftAddress,
              abi: nftABI,
              functionName: 'tokenURI',
              args: [item]
            }).then(res => {
              console.log('tokenURI:', res)
              const data = res.split('data:application/json;base64,')[1]
              const obj = JSON.parse(Base64.decode(data))
              console.log(obj.image)
              this.dataUrl.push(obj.image)
            })
          })
        })
      },
      getAddressTotalValue () {
        return new Promise((resolve, reject) => {
          readContract({
            address: mainAddress,
            abi: mainABI,
            functionName: 'getAddressTotalValue',
            args: [this.address]
          }).then(res => {
            console.log('getAddressTotalValue:', res)
            this.assetsValue = getPriceValue(res)
            resolve(true)
          })
        })
      },
      getLastRewardRate () {
        return new Promise((resolve, reject) => {
          readContract({
            address: mainAddress,
            abi: mainABI,
            functionName: 'getLastRewardRate',
          }).then(res => {
            console.log('getLastRewardRate:', res)
            this.apr = res * 12 / 100
            resolve(true)
          })
        })
      },
      getDailyReturn () {
        this.dailyReturn = new BigNumber(this.assetsValue).times(new BigNumber(this.apr).dividedBy(100)).dividedBy(30).toFormat()
      },
      getReferral () {
        this.getAddressUnclaimedRewardRef()
        this.getAddressInfoRef()
        this.getAddressInfoRefDetails()
      },
      getAddressUnclaimedRewardRef () {
        readContract({
          address: mainAddress,
          abi: mainABI,
          functionName: 'getAddressUnclaimedRewardRef',
          args: [this.address]
        }).then(res => {
          console.log('getAddressUnclaimedRewardRef:', res)
          this.rewardValue = res
        })
      },
      getAddressInfoRef () {
        readContract({
          address: mainAddress,
          abi: mainABI,
          functionName: 'getAddressInfoRef',
          args: [this.address]
        }).then(res => {
          console.log('getAddressInfoRef:', res)
          this.referrals.value = res[0]
          this.referrals.level = res[1]
          this.referrals.rate = res[2]
          this.referrals.reward = res[3]
        })
      },
      getAddressInfoRefDetails () {
        readContract({
          address: mainAddress,
          abi: mainABI,
          functionName: 'getAddressInfoRefDetails',
          args: [this.address]
        }).then(res => {
          console.log('getAddressInfoRefDetails', res)
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
        })
      },
      getLiquidity () {
        this.getAddressInfoLiquidity()
        this.getDepositBalance()
        this.getWidthdrewBalance()
      },
      getAddressInfoLiquidity () {
        readContract({
          address: mainAddress,
          abi: mainABI,
          functionName: 'getAddressInfoLiquidity',
          args: [this.address]
        }).then(res => {
          console.log('getAddressInfoLiquidity', res)
          this.liquidity.token = res[0]
          this.liquidity.value = res[1]
          this.liquidity.yield = res[2]
        })
      },
      getDepositBalance () {
        readContract({
          address: testUSDTAddress,
          abi: testusdtABI,
          functionName: 'balanceOf',
          args: [this.address]
        }).then(res => {
          console.log('balanceOf:', res)
          this.depositHint = `Balance: ${getPriceValue(res)}`
        })
      },
      getWidthdrewBalance () {
        readContract({
          address: vaultTokenAddress,
          abi: vaulttokenABI,
          functionName: 'balanceOf',
          args: [this.address]
        }).then(res => {
          console.log('balanceOf:', res)
          this.widthdrewHint = `Balance: ${getPriceValue(res)}`
        })
      },
      async depositBalance () {
        try {
          const config = await prepareWriteContract({
            address: mainAddress,
            abi: mainABI,
            functionName: 'depositeUSDT',
            args: [this.depositVal],
          })
          writeContract(config).then(res => {
            console.log('depositeUSDT:', res)
            this.getDepositBalance()
          })
        }  catch (err) {
          this.setSnackbar({
            visible: true,
            color: 'error',
            text: err.message,
          })
        }
      },
     async widthdrewBalance () {
        try {
          const config = await prepareWriteContract({
            address: mainAddress,
            abi: mainABI,
            functionName: 'withdrawUSDT',
            args: [this.widthdrewVal],
          })
          writeContract(config).then(res => {
            console.log('withdrawUSDT:', res)
            this.getWidthdrewBalance()
          })
        }  catch (err) {
          this.setSnackbar({
            visible: true,
            color: 'error',
            text: err.message,
          })
        }
      },
      async claimInterest () {
        try {
          const config = await prepareWriteContract({
            address: mainAddress,
            abi: mainABI,
            functionName: 'claimRewardRent',
            args: [],
          })
          writeContract(config).then(res => {
            console.log('claimRewardRent:', res)
            this.getAddressUnclaimedRewardRent()
          })
        }  catch (err) {
          this.setSnackbar({
            visible: true,
            color: 'error',
            text: err.message,
          })
        }
      },
      async claimRewardRef () {
        try {
          const config = await prepareWriteContract({
            address: mainAddress,
            abi: mainABI,
            functionName: 'claimRewardRef',
            args: [],
          })
          writeContract(config).then(res => {
            console.log('claimRewardRef:', res)
            this.getAddressUnclaimedRewardRef()
          })
        }  catch (err) {
          this.setSnackbar({
            visible: true,
            color: 'error',
            text: err.message,
          })
        }
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
