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
            Sell
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
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          />
          <v-text-field
            label="Append"
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
        hint: 'Balance',
      }
    },
    mounted () {
      this.init()
    },
    methods: {
      init () {
        this.hint = `Balance: ${97}`
      },
      closeDailog () {
        this.$emit('close-sell-modal')
      },
    },
  }
</script>
<style lang="scss" scoped>
</style>
