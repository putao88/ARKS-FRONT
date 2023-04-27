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
        :bro-nft-info="broNftInfo"
      />
      <my-item-modal
        :show-modal="showItemModal"
        :token-data="myNftData"
        @close-item-modal="closeItemModal"
        @click-nft-call-back="clickNftCallBack"
      />
    </v-card>
  </v-container>
</template>
<script>
  import { readContract, prepareWriteContract, writeContract } from '@wagmi/core'
  import { mapState, mapMutations } from 'vuex'

  import mainABI from '@/abi/mainABI.json'
  import nftABI from '@/abi/nftABI.json'
  import { nftAddress, mainAddress } from '@/abi/contractdata'
  import { getPriceValue } from '@/utils/tools'
  import { Base64 } from 'js-base64'

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
        myNftData: [],
        broNftInfo:[],
      }
    },
    computed: {
      ...mapState(['address']),
    },
    async mounted () {
      if (this.address) {
        this.getValue()
      }
    },
    methods: {
      ...mapMutations({
        setSnackbar: 'SET_SNACKBAR',
      }),
      getPriceValue: getPriceValue,
      openPositionModal () {
        this.showPositionModal = true
        this.getBroNftInfo()
      },
      closePositionModal () {
        this.showPositionModal = false
      },
      openItemModal () {
        this.showItemModal = true
        this.getOwnNftInfo()
      },
      closeItemModal () {
        this.showItemModal = false
      },
      clickNftCallBack (param) {
        const { tokenId, interest, total, src } = param
        this.detail.tokenId = tokenId
        this.detail.interest = interest
        this.detail.total = total
        this.detail.src = src
        this.showItemModal = false
      },
      async borrowNft () {
        try {
          const config = await prepareWriteContract({
            address: mainAddress,
            abi: mainABI,
            functionName: 'depositeNFT',
            args: [nftAddress, Number(this.detail.tokenId)],
          })
          writeContract(config).then(res => {
            this.setSnackbar({
              visible: true,
              color: 'success',
              text: 'borrow success!',
            })
          })
        }  catch (err) {
          this.setSnackbar({
            visible: true,
            color: 'error',
            text: err.message,
          })
        }
      },
      getValue () {
        readContract({
          address: mainAddress,
          abi: mainABI,
          functionName: 'getVaultInfo',
        }).then(res => {
          console.log('getVaultInfo:', res[0].toString(), res[1].toString(),res[2].toString(),res[3].toString(),)
          this.priceValue = {
            totalValue: res[0] || 0,
            nftValue: res[1] || 0,
            usdtValue: res[2] || 0,
          }

        })
      },
      getOwnNftInfo () {
        readContract({
          address: nftAddress,
          abi: nftABI,
          functionName: 'tokensOfOwner',
          args: [this.address]
        }).then(res => {
          console.log('tokensOfOwner:', res)
          const dataToken = res
          const myNftList = []
          dataToken.forEach(async item => {
            const preCollateral = await readContract({
              address: mainAddress,
              abi: mainABI,
              functionName: 'getTokenIdInfoPreCollateral',
              args: [item, this.address]
            })
            console.log('getTokenIdInfoPreCollateral:', preCollateral)
            const imgUrlJson = await readContract({
              address: nftAddress,
              abi: nftABI,
              functionName: 'tokenURI',
              args: [item]
            })
            console.log('tokenURI:', imgUrlJson)
            const imgUrl = imgUrlJson ? JSON.parse(Base64.decode(
              imgUrlJson.split('data:application/json;base64,')[1])
            ) : ''
            myNftList.push({
              tokenId: item,
              interest: preCollateral[0],
              total: preCollateral[1],
              src: imgUrl
            })
          })
          this.myNftData = myNftList
        })
      },
      getBroNftInfo () {
        let myBroNftList = []
        readContract({
          address: mainAddress,
          abi: mainABI,
          functionName: 'getAddressCollateral',
          args: [this.address]
        }).then(async res => {
          console.log('getAddressCollateral', res)
          const dataToken = res
           dataToken.forEach(async item => {
            const imgUrlJson = await readContract({
              address: nftAddress,
              abi: nftABI,
              functionName: 'tokenURI',
              args: [item]
            })
            console.log('tokenURI:', imgUrlJson)
            const imgUrl = imgUrlJson ? JSON.parse(Base64.decode(
              imgUrlJson.split('data:application/json;base64,')[1])
            ) : ''
            myBroNftList.push({
              tokenId: item,
              price: item || 0,
              src: imgUrl
            })
          })
          this.broNftInfo = myBroNftList
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
.data-item {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
