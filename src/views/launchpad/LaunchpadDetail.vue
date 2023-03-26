<template>
  <v-container
    id="LaunchpadDetail"
    fluid
    tag="section"
  >
    <v-card class="pa-8">
      <v-row justify="space-between">
        <v-col
          class="elevation-4 rounded-xl white pa-0 overflow-hidden"
          cols="12"
          sm="12"
          md="4"
          lg="4"
        >
          <v-img
            width="100%"
            height="100%"
            src="@/assets/img/nft.png"
          />
        </v-col>
        <v-col
          class="elevation-4 pa-4 rounded-xl white"
          cols="12"
          sm="12"
          md="4"
          lg="6"
        >
          <div class="amount-wrap primary rounded-lg">
            <div class="mr-10 d-flex align-center">
              <v-img
                width="32"
                height="30"
                class="mr-2"
                src="@/assets/img/usdt.png"
              />
              <span class="white--text font-weight-bold">USDT</span>
            </div>
            <div class="select-wrap">
              <v-select
                v-model="type"
                :items="amountItems"
                label="Type"
                color="white"
              />
            </div>
          </div>
          <div>
            <div class="text-h4 my-2 d-flex justify-space-between">
              <span>Amount</span>
              <div class="number-wrap">
                <v-btn
                  small
                  color="primary"
                  class="mr-0"
                  @click="reduce"
                >
                  <v-icon>mdi-minus</v-icon>
                </v-btn>
                <div class="number-div">
                  {{ amount }}
                </div>
                <v-btn
                  small
                  color="primary"
                  class="mr-0"
                  @click="add"
                >
                  <v-icon>mdi-plus</v-icon>
                </v-btn>
              </div>
            </div>

            <p class="text-h4 my-2 d-flex justify-space-between">
              <span>Blockchain</span><span>Polygon</span>
            </p>
            <p class="text-h4 my-2 d-flex justify-space-between">
              <span>Contract Address</span>
              <a
                href="https://etherscan.io/address/"
                class="addressStyle"
              >{{ nftAddress }}</a>
            </p>
            <p class="text-h4 my-2 d-flex justify-space-between">
              <span>APR</span><span>7.63%</span>
            </p>
            <!-- <p class="text-h4 my-2 d-flex justify-space-between">
              <span>Total</span><span>500USDT</span>
            </p> -->
          </div>
          <v-btn
            v-if="isApproved"
            class="primary rounded-pill"
            width="100%"
            @click="openBuyModal"
          >
            Buy
          </v-btn>
          <v-btn
            v-else
            class="primary rounded-pill"
            width="100%"
            @click="Approve"
          >
            Approve
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        class="my-8 rounded-lg rounded-xl pa-6 white"
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
      <purchase-modal
        v-if="showPurchaseModall"
        :show-modal="showPurchaseModall"
        :amount="amount"
        :type="type"
        @close-purchase-modal="closePurchaseModal"
      />
    </v-card>
  </v-container>
</template>

<script>
  import Web3 from 'web3'
  import ARKSMain from '@/abi/ARKSMain.json'
  import ARKSTestUSDT from '@/abi/ARKSTestUSDT.json'
  import { mainAddress, testUSDTAddress, nftAddress } from '@/abi/contractdata'
  import PurchaseModal from './components/PurchaseModal'
  import { maxUnit256 } from '@/utils/tools'
  export default {
    name: 'LaunchpadDetail',
    components: {
      PurchaseModal,
    },
    data () {
      return {
        fromAddress: null,
        isApproved: true,
        amountItems: [
          { text: 50, value: 0 },
          { text: 100, value: 1 },
          { text: 500, value: 2 },
          { text: 1000, value: 3 },
          { text: 5000, value: 4 },
          { text: 10000, value: 5 },
          { text: 100000, value: 6 },
        ],
        type: 0,
        showPurchaseModall: false,
        amount: 1,
        nftAddress: nftAddress,
      }
    },
    async mounted () {
      if (window.ethereum) {
        const web3 = new Web3(window.web3.currentProvider)
        this.fromAddress = await web3.eth.getAccounts()
        this.mainContract = new web3.eth.Contract(
          ARKSMain,
          mainAddress,
        )
        this.testContract = new web3.eth.Contract(
          ARKSTestUSDT,
          testUSDTAddress,
        )
        this.getDetail()
      }
    },
    methods: {
      toAccount () {
        this.$router.push('/account')
      },
      Approve () {
        if (window.ethereum) {
          this.testContract.methods.approve(mainAddress, maxUnit256()).call().then(res => {
            console.log(res, 'approve')
            this.isApproved = true
          })
        }
      },
      openBuyModal () {
        this.showPurchaseModall = true
      },
      closePurchaseModal () {
        this.showPurchaseModall = false
      },
      reduce () {
        if (this.amount > 1) {
          this.amount--
        }
      },
      add () {
        if (this.amount < 5) {
          this.amount++
        }
      },
      getDetail () {
        this.testContract.methods.allowance(this.fromAddress[0], mainAddress).call().then(res => {
          console.log(res, 'allowance')
          // if (res > maxUnit256() / 2) {
          //   this.isApproved = true
          // } else {
          //   this.isApproved = false
          // }
        })
        // this.mainContract.methods.getAddressInfoMain(this.fromAddress[0]).call().then(res => {
        //   console.log(res, '1')
        // })
      },
    },
  }
</script>

<style lang="scss" scoped>
.amount-wrap {
  padding: 16px;
  display: flex;
  justify-content: space-between;
}
.number-wrap {
  display: flex;
  align-items: center;
}
.number-div {
  margin: 0 16px;
  padding: 0 16px;
  border-bottom: 1px solid #eee;
}
.select-wrap {
  max-width: 200px;
}
.addressStyle {
  max-width: 120px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow:ellipsis;
}
</style>
