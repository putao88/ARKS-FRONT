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
        <template v-for="(item, index) in cardInfo">
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
    />
  </v-container>
</template>
<script>
  import MyItemModal from '@/components/MyItemModal'
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
        cardInfo: new Array(8),
      }
    },
    mounted () {
    },
    methods: {
      filterData (tab) {
        this.active = tab
      },
      openItemModal () {
        this.showItemModal = true
      },
      closeItemModal () {
        this.showItemModal = false
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
