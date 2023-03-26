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
            My items
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
            class="mt-2"
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
            <template v-for="(item, index) in tokenData">
              <v-col
                :key="index"
                cols="12"
                lg="4"
              >
                <v-card
                  class="rounded-lg"
                  @click="deBorrow(item)"
                >
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
                      <span class="font-weight-bold">{{ item.interest / 100 }}%</span>
                    </div>
                    <div
                      class="data-item"
                    >
                      <span>Total:</span>
                      <span class="font-weight-bold">{{ getPriceValue(item.total) }}</span>
                    </div>
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
  import { getPriceValue } from '@/utils/tools'

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
      tokenData: {
        type: Array,
        default () {
          return []
        },
      },
    },
    data () {
      return {
        active: 'RWA',
        sortConditions: ['Highest Price', 'Lowest Price', 'Highest Value', 'Lowest Value'],
        // cardInfo: new Array(8),
        showSellModall: false,
      }
    },
    methods: {
      getPriceValue: getPriceValue,
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
      deBorrow (value) {
        this.$emit('de-borrow', value)
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
