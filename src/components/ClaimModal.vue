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
              <span class="text-h3 font-weight-bold">${{ getPriceValue(interestValue) }}</span>
              <v-btn
                color="primary"
                rounded
                @click="claimInterest"
              >
                Claim
              </v-btn>
            </div>
          </div>
          <div class="mb-4">
            <div class="text-h4">
              Referral Rewards
            </div>
            <div class="d-flex justify-space-between">
              <span class="text-h3 font-weight-bold">${{ getPriceValue(rewardValue) }}</span>
              <v-btn
                color="primary"
                rounded
                @click="claimRewardRef"
              >
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
  import { readContract, prepareWriteContract, writeContract } from '@wagmi/core'
  import { mapState, mapMutations } from 'vuex'
  import mainABI from '@/abi/mainABI.json'
  import { mainAddress } from '@/abi/contractdata'
  import { getPriceValue } from '@/utils/tools'
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
        interestValue: 0,
        rewardValue: 0,
      }
    },
    computed: {
      ...mapState(['address']),
    },
    async mounted () {
      if (this.address) {
        this.getData()
      }
    },
    methods: {
      ...mapMutations({
        setSnackbar: 'SET_SNACKBAR',
      }),
      getPriceValue: getPriceValue,
      closeDailog () {
        this.$emit('close-claim-modal')
      },
      getData () {
        readContract({
          address: mainAddress,
          abi: mainABI,
          functionName: 'getAddressUnclaimedRewardRent',
          args: [this.address]
        }).then(res => {
          this.interestValue = res
        })
        readContract({
          address: mainAddress,
          abi: mainABI,
          functionName: 'getAddressUnclaimedRewardRef',
        }).then(res => {
          this.rewardValue = res
        })
      },
      async claimInterest () {
        try {
          const config = await prepareWriteContract({
            address: mainAddress,
            abi: mainABI,
            functionName: 'claimRewardRent',
            args: [],
          })
          writeContract(config).then(res => {
            this.getData()
          })
        }  catch (err) {
          this.setSnackbar({
            visible: true,
            color: 'error',
            text: err.message,
          })
        }
      },
      async claimRewardRef () {
        try {
          const config = await prepareWriteContract({
            address: mainAddress,
            abi: mainABI,
            functionName: 'claimRewardRef',
            args: [],
          })
          writeContract(config).then(res => {
            this.getData()
          })
        }  catch (err) {
          this.setSnackbar({
            visible: true,
            color: 'error',
            text: err.message,
          })
        }
      },
    },
  }
</script>
