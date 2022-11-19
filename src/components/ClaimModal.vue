<template>
  <div>
    <v-dialog
      v-model="showModal"
      width="450"
      :persistent="true"
    >
      <v-card>
        <v-card-title class="text-left white--text primary pb-4">
          <span class="text-h3">
            Claim Rewards
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
          <div class="mb-4">
            <div class="text-h4">
              Interest
            </div>
            <div class="d-flex justify-space-between">
              <span class="text-h3 font-weight-bold">$9,346.95</span>
              <v-btn color="primary">
                Claim
              </v-btn>
            </div>
          </div>
          <div class="mb-4">
            <div class="text-h4">
              Referral Rewards
            </div>
            <div class="d-flex justify-space-between">
              <span class="text-h3 font-weight-bold">$9,346.95</span>
              <v-btn color="primary">
                Claim
              </v-btn>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  export default {
    name: 'ClaimModal',
    props: {
      showModal: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
      }
    },
    methods: {
      closeDailog () {
        this.$emit('close-claim-dailog')
      },
    },
  }
</script>
