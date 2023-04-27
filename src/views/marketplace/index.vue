<template>
  <v-container
    id="Marketplace"
    fluid
    tag="section"
  >
    <v-card class="pa-8">
      <v-row
        class="ma-1 pa-4"
      >
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
          class="text-center"
        >
          <p class="text-h2 mb-1">
            $91,346
          </p>
          <p class="text-h4 grey--text">
            Total Volume
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
            Total Items Sold
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
            187
          </p>
          <p class="text-h4 grey--text">
            Total Item Listed
          </p>
        </v-col>
      </v-row>
      <v-row
        class="pa-4"
        justify="space-between"
      >
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
        >
          <v-select
            v-model="liabilityVal"
            :items="liabilityConditions"
            label="Liability"
          />
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
        >
          <v-select
            v-model="filterVal"
            :items="filterConditions"
            label="Filter"
          />
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="4"
          lg="4"
        >
          <v-select
            :items="sortConditions"
            label="Sort"
          />
        </v-col>
      </v-row>
      <v-row>
        <template v-for="(item, index) in marketplaceItems">
          <v-col
            :key="index"
            cols="12"
            md="3"
            lg="3"
          >
            <div
              v-if="index === 0"
              class="add-btn-wrap elevation-10 rounded-lg"
            >
              <v-btn
                width="100%"
                height="100%"
                min-height="200"
                elevation="2"
                rounded-lg
                dark
                color="primary"
                class="rounded-lg"
                @click="openItemModal"
              >
                <v-icon large>
                  mdi-plus
                </v-icon>
              </v-btn>
            </div>
            <div
              v-else
              class="pointer rounded-lg overflow-hidden elevation-10"
            >
              <v-img
                class="white--text align-end"
                height="200px"
                src="@/assets/img/nft.png"
              />
                <!-- :src="item" -->
              <div class="card-bottom-div">
                <span>Price:</span>
                <span>98.00</span>
              </div>
            </div>
          </v-col>
        </template>
      </v-row>
    </v-card>
    <my-item-modal
      :show-modal="showItemModal"
      @close-item-modal="closeItemModal"
      @set-approved="setApproved"
      :is-approved="isApproved"
      :data-url="dataUrl"
    />
  </v-container>
</template>
<script>
  import { readContract, prepareWriteContract, writeContract } from '@wagmi/core'
  import { mapState, mapMutations } from 'vuex'

  import marketplaceABI from '@/abi/marketplaceABI.json'
  import nftABI from '@/abi/nftABI.json'
  import { nftAddress, marketplaceAddress } from '@/abi/contractdata'

  import MyItemModal from './components/MyItemModal'
  import { Base64 } from 'js-base64'
  export default {
    name: 'Marketplace',
    components: {
      MyItemModal,
    },
    data () {
      return {
        active: 'RWA',
        sortConditions: ['Highest Price', 'Lowest Price', 'Highest Value', 'Lowest Value'],
        filterConditions: ['RWA', 'ND'],
        filterVal: 'RWA',
        liabilityConditions: ['Liability', 'No Liabilities'],
        liabilityVal: 'No Liabilities',
        showItemModal: false,
        marketplaceItems: new Array(8),
        isApproved: false,
        dataUrl: [],
      }
    },
    computed: {
      ...mapState(['address']),
    },
    mounted () {
      if (this.address) {
        this.getMarketplaceInfo()
        this.getMarketplaceItems()
      }
    },
    methods: {
      ...mapMutations({
        setSnackbar: 'SET_SNACKBAR',
      }),
      filterData (tab) {
        this.active = tab
      },
      openItemModal () {
        this.showItemModal = true
        this.openMyNftModal()
      },
      closeItemModal () {
        this.showItemModal = false
      },
      getMarketplaceInfo() {
        readContract({
          address: marketplaceAddress,
          abi: marketplaceABI,
          functionName: 'getMarketplaceInfo',
          args: [this.address]
        }).then(res => {
          console.log('getMarketplaceInfo:', res)
          this.depositHint = `Balance: ${getPriceValue(res)}`
        })
      },
      getMarketplaceItems () {
        readContract({
          address: nftAddress,
          abi: nftABI,
          functionName: 'tokensOfOwner',
          args: [this.address]
        }).then(res => {
          const dataToken = res
          // const tempUrl = []
          dataToken.forEach(item => {
            readContract({
              address: nftAddress,
              abi: nftABI,
              functionName: 'tokenURI',
              args: [item]
            }).then(res => {
              const data = res.split('data:application/json;base64,')[1]
              const obj = JSON.parse(Base64.decode(data))
              this.marketplaceItems.push(obj.image)
            })
          })
        })
      },
      async openMyNftModal() {
        if (this.address) {
          await this.getApproved()
          if (this.isApproved) {
            // 已授权
            this.getTokenInfo()
          } else {
            // 未授权
          }
        }
      },
      getApproved () {
        // 获取授权权限
        return new Promise((resolve, reject) =>{
          readContract({
            address: nftAddress,
            abi: nftABI,
            functionName: 'isApprovedForAll',
            args: [this.address, marketplaceAddress]
          }).then(res => {
            console.log('isApprovedForAll', res)
            this.isApproved = res
            resolve(true)
          }).catch(err => {
            this.setSnackbar({
              visible: true,
              text: err.message,
              color: 'error',
              timeout: 2000,
            })
            resolve(false)
          })
        })
      },
      async setApproved () {
        const config = await prepareWriteContract({
          address: nftAddress,
          abi: nftABI,
          functionName: 'setApprovalForAll',
          args: [this.address, true],
        })
        writeContract(config).then(res => {
          console.log('setApprovalForAll:', res)
          this.isApproved = true
        }).catch(err => {
          this.setSnackbar({
            visible: true,
            text: err.message,
            color: 'error',
            timeout: 2000,
          })
        })
      },
      getTokenInfo () {
        readContract({
          address: nftAddress,
          abi: nftABI,
          functionName: 'tokensOfOwner',
          args: [this.address]
        }).then(res => {
          const dataToken = res
          dataToken.forEach(item => {
            readContract({
              address: nftAddress,
              abi: nftABI,
              functionName: 'tokenURI',
              args: [item]
            }).then(res => {
              const data = res.split('data:application/json;base64,')[1]
              const obj = JSON.parse(Base64.decode(data))
              this.dataUrl.push(obj.image)
            })
            
          })
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
.sort-select-wrap {
  max-width: 250px;
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
.add-btn-wrap {
  height: 100%;
}
</style>
