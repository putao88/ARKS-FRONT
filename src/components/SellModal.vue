<template>
  <div>
    <v-dialog
      v-model="showModal"
      width="400"
      :persistent="true"
    >
      <v-card>
        <v-card-title class="text-left white--text primary pb-4">
          <span class="text-h3">
            SELL
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
          <v-img
            class="white--text align-end"
            width="100%"
            src="@/assets/img/nft.png"
          />
          <v-text-field
            v-model="price"
            label="Amount"
            suffix="USDT"
            class="mb-4 mt-4"
            :hint="hint"
            persistent-hint
          />
          <!-- <div class="text-right mb-4">
            <span>Balance: </span>
            <span>97</span>
          </div> -->
          <v-btn
            width="100%"
            color="primary"
            rounded
            @click="cellShop"
          >
            SELL
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>

  export default {
    name: 'SellModal',
    props: {
      showModal: {
        type: Boolean,
        default: false,
      },
      cardDetail: {
        type: Object,
        default: null,
      },
    },
    data () {
      return {
        balance: 97,
        price: '',
      }
    },
    computed: {
      hint () {
        return `Balance: ${this.balance}`
      },
    },
    mounted () {
    },
    methods: {
      closeDailog () {
        this.$emit('close-sell-modal')
      },
      cellShop () {
        const price = Number(this.price)
        if (!!price && typeof price === 'number') {
          console.log(price)
          this.$emit('cell-shop', price)
        }
      },
    },
  }
</script>
<style lang="scss" scoped>
</style>
