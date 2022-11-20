<template>
  <v-container
    id="Liquidity"
    fluid
    tag="section"
  >
    <v-row
      class="elevation-10 my-4 rounded-lg rounded-xl pa-4"
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
      class="elevation-10 my-10 rounded-lg rounded-xl pa-4"
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
            class="rounded-xl ml-4"
            color="primary"
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
          height="100%"
          min-height="150"
          elevation="2"
          dark
          color="primary"
        >
          <v-icon large>
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
          <span class="text-h4 font-weight-bold">11.5%</span>
        </div>
        <div
          class="data-item"
        >
          <span class="text-h4">Borrow USDT</span>
          <span class="text-h4 font-weight-bold">32.5</span>
        </div>
        <v-btn
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
  </v-container>
</template>
<script>
  import MyPositionModal from './components/MyPositionModal'
  export default {
    name: 'Liquidity',
    components: {
      MyPositionModal,
    },
    data () {
      return {
        showPositionModal: false,
      }
    },
    methods: {
      openPositionModal () {
        this.showPositionModal = true
      },
      closePositionModal () {
        this.showPositionModal = false
      },
    },
  }
</script>
<style lang="scss" scoped>
.border-lg-lr {
  border-right: 1px solid var(--color-grey-light);
  border-left: 1px solid var(--color-grey-light);
}
.border-col-bt {
  border-top: 1px solid var(--color-grey-light);
  border-bottom: 1px solid var(--color-grey-light);
}
.data-item {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
