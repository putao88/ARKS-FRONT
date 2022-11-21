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
        <v-card-text>
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
            <template v-for="(item, index) in cardInfo">
              <v-col
                :key="index"
                cols="12"
                md="4"
                lg="4"
              >
                <div
                  class="pointer rounded-lg overflow-hidden elevation-10"
                  @click="openSellModal"
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
        sortConditions: ['Highest Price', 'Lowest Price', 'Highest Discount Rate', 'Lowest Discount Rate'],
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
    },
  }
</script>
<style lang="scss" scoped>
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
