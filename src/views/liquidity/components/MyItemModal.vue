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
            My Position
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
          <v-row class="my-4">
            <template v-for="(item, index) in cardInfo">
              <v-col
                :key="index"
                cols="12"
                lg="4"
              >
                <v-card class="rounded-lg">
                  <v-card-text>
                    <v-img
                      class="white--text align-end rounded-lg mb-4"
                      height="150px"
                      src="@/assets/img/nft.png"
                    />
                    <div
                      class="data-item"
                    >
                      <span>interest:</span>
                      <span class="font-weight-bold">11.5%</span>
                    </div>
                    <div
                      class="data-item"
                    >
                      <span>Total:</span>
                      <span class="font-weight-bold">32.5</span>
                    </div>
                    <v-btn
                      width="100%"
                      height="40"
                      color="primary"
                      class="mt-2"
                      rounded
                      @click="deBorrow"
                    >
                      DeBorrow
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </template>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
    <sell-modal
      :show-modal="showSellModall"
      @close-sell-modal="closeSellModal"
    />
  </div>
</template>

<script>
  import SellModal from '@/components/SellModal'

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
    },
    data () {
      return {
        active: 'RWA',
        sortConditions: ['Highest Price', 'Lowest Price', 'Highest Value', 'Lowest Value'],
        cardInfo: new Array(8),
        showSellModall: false,
      }
    },
    methods: {
      filterData (tab) {
        this.active = tab
      },
      closeDailog () {
        this.$emit('close-item-modal')
      },
      openSellModal () {
        this.showSellModall = true
      },
      closeSellModal () {
        this.showSellModall = false
      },
      deBorrow () {
        this.$emit('de-borrow', { src: 'nft.png', interest: '11.5%', usdt: 32.5 })
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
