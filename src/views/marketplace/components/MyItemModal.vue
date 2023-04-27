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
          <v-btn
            v-if="!isApproved"
            class="primary rounded-pill"
            width="100%"
            @click="setApproved"
          >
            APPROVE
          </v-btn>
          <v-row
            v-else
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
            <template
              v-for="(i, index) in dataUrl"
            >
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
                    min-height="125px"
                    :aspect-ratio="29/50"
                    :src="i"
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
  import { readContract, prepareWriteContract, writeContract } from '@wagmi/core'
  import SellModal from './SellModal'
  import { mapState, mapMutations } from 'vuex'
  import marketplaceABI from '@/abi/marketplaceABI.json'
  import nftABI from '@/abi/nftABI.json'
  import { nftAddress, marketplaceAddress } from '@/abi/contractdata'
  import { getPriceValue } from '@/utils/tools'
  import { Base64 } from 'js-base64'

  export default {
    name: 'MyItemModal',
    components: {
      SellModal,
    },
    props: {
      showModal: {
        type: Boolean,
        default: false,
      },
      isApproved: {
        type: Boolean,
        default: false,
      },
      dataUrl: {
        type: Array,
        default: [],
      },

    },
    data () {
      return {
        active: 'RWA',
        sortConditions: ['Highest Price', 'Lowest Price', 'Highest Value', 'Lowest Value'],
        showSellModall: false,
        targetTokenId: '',
      }
    },
    computed: {
      ...mapState(['address']),
    },
    methods: {
      ...mapMutations({
        setSnackbar: 'SET_SNACKBAR',
      }),
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
      setApproved () {
        this.$emit('set-approved')
      },
      async setCellShop (price) {
        const config = await prepareWriteContract({
          address: marketplaceAddress,
          abi: marketplaceABI,
          functionName: 'createMarketItem',
          args: [nftAddress, this.targetTokenId, price],
        })
        writeContract(config).then(res => {
          console.log('createMarketItem:', res)
          this.showSellModall = false
        }).catch(err => {
          this.setSnackbar({
            visible: true,
            text: err.message,
            color: 'error',
            timeout: 2000,
          })
        })
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
