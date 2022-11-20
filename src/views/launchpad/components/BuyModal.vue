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
            BUY
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
          <div class="text-field-wrap">
            <v-text-field
              label="Wallet"
              suffix="USDT"
              class="mb-4 mt-4"
              :hint="walletHint"
              persistent-hint
            />
            <v-btn
              color="primary ml-4"
              small
              class="mr-0"
            >
              MAX
            </v-btn>
          </div>
          <div class="text-center">
            <v-icon
              large
              color="primary"
            >
              mdi-plus-box
            </v-icon>
          </div>
          <div class="text-field-wrap">
            <v-text-field
              label="Liquidity Pool"
              suffix="USDT"
              class="mb-4 mt-4"
              :hint="liquidityPoolHint"
              persistent-hint
            />
            <v-btn
              color="primary ml-4"
              small
              class="mr-0"
            >
              MAX
            </v-btn>
          </div>
          <v-btn
            width="100%"
            color="primary"
            rounded
          >
            BUY
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
        balance: 0,
        availBalance: 0,
      }
    },
    computed: {
      walletHint () {
        return `Balance: ${this.balance}`
      },
      liquidityPoolHint () {
        return `Available Balance: ${this.availBalance}`
      },
    },
    mounted () {
    },
    methods: {
      closeDailog () {
        this.$emit('close-sell-modal')
      },
    },
  }
</script>
<style lang="scss" scoped>
.text-field-wrap {
  display: flex;
  align-items: center;
}
</style>
