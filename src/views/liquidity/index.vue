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
            $91,346
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
            $1,346
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
            $90,000
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
            <span class="text-h4 font-weight-bold">$50</span>
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
            <span class="text-h4 font-weight-bold">{{ detail.usdt }}</span>
          </div>
          <v-btn
            rounded
            width="100%"
            height="60"
            color="primary"
            class="mt-10"
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
        @de-borrow="deBorrow"
        @close-item-modal="closeItemModal"
      />
    </v-card>
  </v-container>
</template>
<script>
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
          usdt: '0.0',
          interest: '0.0%',
        },
      }
    },
    methods: {
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
        // const { src, usdt, interest } = param
        Object.assign(this.detail, param)
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
.data-item {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
