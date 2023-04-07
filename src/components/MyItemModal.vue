<template>
  <div>
    <v-dialog
      v-model="showModal"
      width="600"
      :persistent="true"
    >
      <v-card>
        <v-card-title class="text-left white--text primary pb-4">
          <span class="text-h3">
            My Items
          </span>
          <v-icon
            size="20"
            color="white"
            @click="closeDailog"
          >
            mdi-close
          </v-icon>
        </v-card-title>
        <v-card-text class="item-content-wrap">
          <v-row
            class="pa-4"
            justify="space-between"
          >
            <v-col
              cols="12"
              sm="12"
              md="6"
              lg="6"
              :class="{'text-center': ['xs', 'sm'].includes($vuetify.breakpoint.name)}"
            >
              <v-btn
                rounded
                class="mr-10"
                :color="active === 'RWA' ? 'primary':'grey'"
                @click="filterData('RWA')"
              >
                RWA
              </v-btn>
              <v-btn
                rounded
                :color="active === 'ND' ? 'primary':'grey'"
                @click="filterData('ND')"
              >
                ND
              </v-btn>
            </v-col>
            <v-col
              cols="12"
              sm="12"
              md="6"
              lg="6"
            >
              <v-select
                :items="sortConditions"
                label="Sort"
              />
            </v-col>
          </v-row>
          <v-row>
            <template v-for="(item, index) in tokenId">
              <v-col
                :key="index"
                cols="12"
                md="4"
                lg="4"
              >
                <div
                  class="pointer rounded-lg overflow-hidden elevation-10"
                  @click="openSellModal(item)"
                >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    src="@/assets/img/nft.png"
                  />
                  <div class="card-bottom-div">
                    <span>Price:</span>
                    <span>98.00</span>
                  </div>
                </div>
              </v-col>
            </template>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <sell-modal
      :show-modal="showSellModall"
      @close-sell-modal="closeSellModal"
      @cell-shop="setCellShop"
    />
  </div>
</template>

<script>
  import SellModal from '@/components/SellModal'
  import Web3 from 'web3'
  import { mapState } from 'vuex'

  // import ARKSMain from '@/abi/ARKSMain.json'
  import ARKSNFT from '@/abi/ARKSNFT.json'
  import { nftAddress } from '@/abi/contractdata'
  // import { getPriceValue } from '@/utils/tools'

  export default {
    name: 'MyItemModal',
    components: {
      SellModal,
    },
    props: {
      showModal: {
        type: Boolean,
        default: false,
        nftContract: null,
        targetTokenId: '',
      },
    },
    data () {
      return {
        active: 'RWA',
        sortConditions: ['Highest Price', 'Lowest Price', 'Highest Value', 'Lowest Value'],
        tokenId: new Array(8),
        showSellModall: false,
      }
    },
    computed: {
      ...mapState(['address']),
    },
    async mounted () {
      if (this.address) {
        const web3 = new Web3(window.web3.currentProvider)
        this.nftContract = new web3.eth.Contract(
          ARKSNFT,
          nftAddress,
        )
        const res = await this.getApproved()
        if (res) {
          // 已授权
          this.getCellShop()
        } else {
          // 未授权
        }
      }
    },
    methods: {
      filterData (tab) {
        this.active = tab
      },
      closeDailog () {
        this.$emit('close-item-modal')
      },
      openSellModal (val) {
        this.targetTokenId = val
        this.showSellModall = true
      },
      closeSellModal () {
        this.showSellModall = false
      },
      getApproved () {
        // 获取授权权限
        // this.nftContract.methods.isApprovedForAll(this.address).call()
      },
      setApproved () {
        // 授权的操作(address operator, bool _approved)(ARKS: Marketplace的合约地址，true)
        // this.nftContract.methods.isApprovedForAll(this.address, true).call().then(res => {
        //   console.log(res, '1')
        // })
      },
      getCellShop () {
        console.log(this.address)
        this.nftContract.methods.tokensOfOwner(this.address).call().then(res => {
          this.tokenId = res || []
          console.log(res, '2')
        })
      },
      setCellShop (price) {
        // var p = String(price)
        // p = p.replace('.', '').length
        // var pri = price
        // Marketplace.createMarketItem.call(nftAddress, this.targetTokenId, price).then(resl => {
        //   console.log(res, '3')
        // })
      },
    },
  }
</script>
<style lang="scss" scoped>
.item-content-wrap {
  height: calc(100vh - 200px);
  overflow: auto;
}
.data-item {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card-bottom-div {
  height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  background-color: var(--color-primary)
}
</style>
