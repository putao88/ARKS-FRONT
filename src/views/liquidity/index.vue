<template>
  <v-container
    id="Liquidity"
    fluid
    tag="section"
  >
    <v-card class="pa-8">
      <v-row
        class="pa-4"
      >
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
          class="text-center"
        >
          <p class="text-h2 mb-1">
            $ {{ getPriceValue(priceValue.totalValue) }}
          </p>
          <p class="text-h4 grey--text">
            Total Value
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
            ${{ getPriceValue(priceValue.nftValue) }}
          </p>
          <p class="text-h4 grey--text">
            Total NFT Value
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
            ${{ getPriceValue(priceValue.usdtValue) }}
          </p>
          <p class="text-h4 grey--text">
            Total USDT Value
          </p>
        </v-col>
      </v-row>

      <v-row
        class="rounded-lg pa-4"
      >
        <v-col
          cols="12"
          sm="12"
          lg="12"
        >
          <div class="d-flex align-center">
            <span class="text-h2">Borrow</span>
            <v-btn
              small
              class="ml-4"
              color="primary"
              rounded
              @click="openPositionModal"
            >
              My Position
            </v-btn>
          </div>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
        >
          <v-btn
            width="100%"
            max-width="100%"
            height="220"
            elevation="2"
            dark
            color="primary"
            class="rounded-lg overflow-hidden"
            @click="openItemModal"
          >
            <v-img
              v-if="detail.src"
              class="white--text rounded-lg"
              width="100%"
              height="220"
              src="@/assets/img/nft.png"
            />
            <v-icon
              v-else
              large
            >
              mdi-plus
            </v-icon>
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
          offset-md="1"
          offset-lg="1"
        >
          <div
            class="data-item"
          >
            <span class="text-h4">Token Value</span>
            <span class="text-h4 font-weight-bold">{{ detail.tokenId }}</span>
          </div>
          <div
            class="data-item"
          >
            <span class="text-h4">interest</span>
            <span class="text-h4 font-weight-bold">{{ detail.interest }}</span>
          </div>
          <div
            class="data-item"
          >
            <span class="text-h4">Borrow USDT</span>
            <span class="text-h4 font-weight-bold">{{ detail.total }}</span>
          </div>
          <v-btn
            rounded
            width="100%"
            height="60"
            color="primary"
            class="mt-10"
            @click="borrowNft"
          >
            Borrow
          </v-btn>
        </v-col>
      </v-row>
      <my-position-modal
        :show-modal="showPositionModal"
        @close-position-modal="closePositionModal"
      />
      <my-item-modal
        :show-modal="showItemModal"
        :token-data="tokenData"
        @de-borrow="deBorrow"
        @close-item-modal="closeItemModal"
      />
    </v-card>
    <v-alert
      :type="alert.type"
      :value="alert.show"
    >
      {{ alert.value }}
    </v-alert>
  </v-container>
</template>
<script>
  import Web3 from 'web3'
  import { mapState } from 'vuex'

  import ARKSMain from '@/abi/ARKSMain.json'
  import ARKSNFT from '@/abi/ARKSNFT.json'
  import { nftAddress, mainAddress } from '@/abi/contractdata'
  import { getPriceValue } from '@/utils/tools'

  import MyPositionModal from './components/MyPositionModal'
  import MyItemModal from './components/MyItemModal'

  export default {
    name: 'Liquidity',
    components: {
      MyPositionModal,
      MyItemModal,
    },
    data () {
      return {
        showPositionModal: false,
        showItemModal: false,
        detail: {
          src: '',
          tokenId: '',
          total: '0.0',
          interest: '0.0%',
        },
        priceValue: {
          totalValue: 0,
          nftValue: 0,
          usdtValue: 0,
        },
        alert: {
          type: 'success',
          show: false,
          value: '',
        },
        nftContract: null,
        mainContract: null,
        tokenData: [],
        tokenId: '',
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
        this.getValue()
        this.getNftInfo()
        this.getBroNftInfo()
      }
    },
    methods: {
      getPriceValue: getPriceValue,
      openPositionModal () {
        this.showPositionModal = true
      },
      closePositionModal () {
        this.showPositionModal = false
      },
      openItemModal () {
        this.showItemModal = true
      },
      closeItemModal () {
        this.showItemModal = false
      },
      deBorrow (param) {
        const { tokenId, interest, total } = param
        this.detail.tokenId = tokenId
        this.detail.interest = interest
        this.detail.total = total
        this.detail.src = 'nft.png'
        this.showItemModal = false
      },
      borrowNft () {
        // 写操作
        this.mainContract.methods.depositeNFT(nftAddress, Number(this.detail.tokenId)).call().then(res => {
          this.alert.show = true
          this.alert.value = '租借成功'
          console.log(res, this.alert, '7')
        })
      },
      getValue () {
        this.mainContract.methods.getVaultInfo().call().then(res => {
          this.priceValue.totalValue = res[0] || 0
          this.priceValue.nftValue = res[1] || 0
          this.priceValue.usdtValue = res[2] || 0
          console.log(res, '1')
        })
      },
      getNftInfo () {
        this.nftContract.methods.tokensOfOwner(this.address).call().then(res => {
          const dataToken = res
          // const tempUrl = []
          dataToken.forEach(item => {
            this.mainContract.methods.getTokenIdInfoPreCollateral(item, this.address).call().then(resl => {
              this.tokenData.push({
                tokenId: item,
                interest: resl[0],
                total: resl[1],
              })
              console.log(resl, '3')
            })
          })
          this.tokenId = res || []
          console.log(res, '2')
        })
      },
      getBroNftInfo () {
        // this.mainContract.methods.getAddressCollateral(this.address).call().then(res => {
        //   console.log(res, '9999')
        //   // res.forEach(item => {
        //   //   this.broNftInfo.push({
        //   //     tokenId: item[0],
        //   //     total: res[1],
        //   //   })
        //   // })
        // })
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
.data-item {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
