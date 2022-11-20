<template>
  <v-container
    id="Marketplace"
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
        md="4"
        lg="4"
      >
        <v-select
          :items="sortConditions"
          label="Sort"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  // import MyPositionModal from './components/MyPositionModal'
  export default {
    name: 'Marketplace',
    // components: {
    //   MyPositionModal,
    // },
    data () {
      return {
        active: 'RWA',
        sortConditions: ['Highest Price', 'Lowest Price', 'Highest Discount Rate', 'Lowest Discount Rate'],
        showPositionModal: false,
      }
    },
    mounted () {
    },
    methods: {
      filterData (tab) {
        this.active = tab
      },
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
</style>
