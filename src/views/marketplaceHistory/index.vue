<template>
  <v-container
    id="MarketplaceHistory"
    fluid
    tag="section"
  >
    <!-- <div class="text-h3 primary--text text-center font-weight-bold">
      Marketplace History
    </div> -->
    <v-card class="pa-8">
      <base-material-card
        icon="mdi-clipboard-text"
        title="Marketplace History"
        color="primary"
        class="elevation-0"
      >
        <v-data-table
          :headers="headers"
          :items="desserts"
          :items-per-page="5"
        />
      </base-material-card>
    </v-card>
  </v-container>
</template>

<script>
  export default {
    index: 'MarketplaceHistory',
    data () {
      return {
        headers: [
          { text: 'No.', align: 'start', sortable: false, value: 'index', class: 'primary--text' },
          { text: 'Time', value: 'time', class: 'primary--text' },
          { text: 'TokenId', value: 'tokenId', class: 'primary--text' },
          { text: 'Value', value: 'value', class: 'primary--text' },
          { text: 'Buy/Sell', value: 'buy', class: 'primary--text' },
        ],
        desserts: [
          {
            index: 1,
            time: 159,
            tokenId: 6.0,
            value: 24,
            buy: 4.0,
            iron: '1%',
          },
          {
            index: 2,
            time: 237,
            tokenId: 9.0,
            value: 37,
            buy: 4.3,
            iron: '1%',
          },
          {
            index: 3,
            time: 262,
            tokenId: 16.0,
            value: 23,
            buy: 6.0,
            iron: '7%',
          },
          {
            index: 4,
            time: 305,
            tokenId: 3.7,
            value: 67,
            buy: 4.3,
            iron: '8%',
          },
          {
            index: 5,
            time: 356,
            tokenId: 16.0,
            value: 49,
            buy: 3.9,
            iron: '16%',
          },
          {
            index: 6,
            time: 375,
            tokenId: 0.0,
            value: 94,
            buy: 0.0,
            iron: '0%',
          },
          {
            index: 7,
            time: 392,
            tokenId: 0.2,
            value: 98,
            buy: 0,
            iron: '2%',
          },
          {
            index: 8,
            time: 408,
            tokenId: 3.2,
            value: 87,
            buy: 6.5,
            iron: '45%',
          },
          {
            index: 9,
            time: 452,
            tokenId: 25.0,
            value: 51,
            buy: 4.9,
            iron: '22%',
          },
          {
            index: 10,
            time: 518,
            tokenId: 26.0,
            value: 65,
            buy: 7,
            iron: '6%',
          },
        ],
      }
    },
  }
</script>
<style lang="scss" scoped>
</style>
