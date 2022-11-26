<template>
  <div>
    <v-dialog
      v-model="showModal"
      width="500"
      :persistent="true"
    >
      <v-card class="rounded-lg">
        <v-card-title class="text-left white--text primary pb-4">
          <span class="text-h3">
            Confirm Purchase
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
          <v-select
            v-model="planLength"
            :items="planLengthItems"
            label="Length of Plan"
          />
          <v-card class="pa-4">
            <div class="d-flex justify-space-between align-center mb-2">
              <span class="text-h3">Transaction Details</span>

              <v-icon
                @click="show = !show"
              >
                {{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
              </v-icon>
            </div>
            <v-expand-transition>
              <div
                v-show="show"
              >
                <v-divider />
                <div
                  class="mt-2"
                  style="font-size: 14px"
                >
                  <div class="d-flex justify-space-between">
                    <span class="d-flex align-center">
                      <span class="mr-1">Original Purchase Price</span>
                      <tooltips tip-text="xxx" />
                    </span>
                    <span>100USDT</span>
                  </div>
                  <div class="d-flex justify-space-between">
                    <span class="d-flex align-center">
                      <span class="mr-1">Interest Fee</span>
                      <tooltips tip-text="xxx" />
                    </span>
                    <span>
                      100USDT
                      <span class="grey--text">(10%)</span>
                    </span>
                  </div>
                  <div class="d-flex justify-space-between">
                    <span class="d-flex align-center">
                      <span class="mr-1">Down Payment Amount</span>
                      <tooltips tip-text="xxx" />
                    </span>
                    <span>
                      100USDT
                      <span class="grey--text">(10%)</span>
                    </span>
                  </div>
                  <div class="d-flex justify-space-between">
                    <span class="d-flex align-center">
                      <span class="mr-1">Monthly Payments</span>
                      <tooltips tip-text="xxx" />
                    </span>
                    <span>
                      100USDT
                      <span class="grey--text">(10%)</span>
                    </span>
                  </div>
                  <div class="d-flex justify-space-between">
                    <span class="d-flex align-center">
                      <span class="mr-1">Length of Plan</span>
                      <tooltips tip-text="xxx" />
                    </span>
                    <span>{{ planLengthEnum[planLength] }}</span>
                  </div>
                  <div class="d-flex justify-space-between">
                    <span class="d-flex align-center">
                      <span class="mr-1">Total Purchase Amount</span>
                      <tooltips tip-text="xxx" />
                    </span>
                    <span>100USDT</span>
                  </div>
                </div>
              </div>
            </v-expand-transition>
          </v-card>
          <!-- <v-card class="pa-4 my-4">
            <span class="text-h3">Transaction Details Explain</span>
            <v-divider />
            <div>xxxxxxxxxxx</div>
          </v-card> -->
          <v-card class="pa-4 my-4">
            <div class="d-flex justify-space-between align-center mb-2">
              <span class="text-h3">Transaction Details Explain</span>

              <v-icon
                @click="showExplain = !showExplain"
              >
                {{ showExplain ? 'mdi-chevron-up' : 'mdi-chevron-down' }}
              </v-icon>
            </div>
            <v-expand-transition>
              <div
                v-show="showExplain"
              >
                <v-divider />
                <div
                  class="mt-2"
                  style="font-size: 14px"
                >
                  xxxx
                </div>
              </div>
            </v-expand-transition>
          </v-card>
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
  import Tooltips from '@/components/Tooltips'

  export default {
    name: 'PurchaseModal',
    components: { Tooltips },
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
        show: true,
        showExplain: true,
        planLength: 3,
        planLengthEnum: {
          0: 'None',
          3: '3 month',
          5: '5 month',
          8: '8 month',
        },
        planLengthItems: [
          { text: 'None', value: 0 },
          { text: '3 month', value: 3 },
          { text: '5 month', value: 5 },
          { text: '8 month', value: 8 },
        ],
      }
    },
    mounted () {
    },
    methods: {
      closeDailog () {
        this.$emit('close-purchase-modal')
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
