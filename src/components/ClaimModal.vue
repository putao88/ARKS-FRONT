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
  import Web3 from 'web3'
  import { mapState } from 'vuex'

  import ARKSMain from '@/abi/ARKSMain.json'
  import ARKSNFT from '@/abi/ARKSNFT.json'
  import { mainAddress, nftAddress } from '@/abi/contractdata'
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
        const web3 = new Web3(window.web3.currentProvider)
        this.mainContract = new web3.eth.Contract(
          ARKSMain,
          mainAddress,
        )
        this.nftContract = new web3.eth.Contract(
          ARKSNFT,
          nftAddress,
        )
        this.getData()
      }
      this.init()
    },
    methods: {
      getPriceValue: getPriceValue,
      closeDailog () {
        this.$emit('close-claim-modal')
      },
      getData () {
        this.mainContract.methods.getAddressUnclaimedRewardRent(this.address).call().then(res => {
          this.interestValue = res
        })
        this.mainContract.methods.getAddressUnclaimedRewardRef(this.address).call().then(res => {
          this.rewardValue = res
        })
      },
      claimInterest () {
        this.mainContract.methods.claimRewardRent().call().then(res => {
          this.getData()
        })
      },
      claimRewardRef () {
        this.mainContract.methods.claimRewardRef().call().then(res => {
          this.getData()
        })
      },
    },
  }
</script>
