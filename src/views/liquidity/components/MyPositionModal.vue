<template>
  <div>
    <v-dialog
      v-model="showModal"
      width="600"
      :persistent="true"
    >
      <v-card>
        <v-card-title class="text-left white--text primary pb-4">
          <span class="text-h3">
            My Position
          </span>
          <v-icon
            size="20"
            color="white"
            @click="closeDailog"
          >
            mdi-close
          </v-icon>
        </v-card-title>
        <v-card-text class="item-content-wrap">
          <v-row class="my-4">
            <template v-for="(item, index) in broNftInfo">
              <v-col
                :key="index"
                cols="12"
                lg="4"
              >
                <v-card class="rounded-lg">
                  <v-card-text>
                    <!-- <v-img
                      class="white--text align-end rounded-lg mb-4"
                      height="150px"
                      src="@/assets/img/nft.png"
                    /> -->
                    <v-img
                      class="white--text align-end white--text align-end rounded-lg mb-4"
                      min-height="250px"
                      :aspect-ratio="29/50"
                      :src="item.src"
                    />
                    <!-- <div
                      class="data-item"
                    >
                      <span>interest:</span>
                      <span class="font-weight-bold">11.5%</span>
                    </div>
                    <div
                      class="data-item"
                    >
                      <span>Total:</span>
                      <span class="font-weight-bold">{{ getPriceValue(item.total) }}</span>
                    </div> -->
                    <div
                      class="data-item"
                    >
                      <span>Price:</span>
                      <span class="font-weight-bold">{{ getPriceValue(item.price) }}</span>
                    </div>
                    <v-btn
                      width="100%"
                      height="40"
                      color="primary"
                      class="mt-2"
                      rounded
                      @click="deBorrow(item)"
                    >
                      DEborrow
                    </v-btn>
                  </v-card-text>
                </v-card>
              </v-col>
            </template>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import { readContract, prepareWriteContract, writeContract } from '@wagmi/core'
  import { mapState, mapMutations } from 'vuex'
  import mainABI from '@/abi/mainABI.json'
  import nftABI from '@/abi/nftABI.json'
  import { nftAddress, mainAddress } from '@/abi/contractdata'

  import { getPriceValue } from '@/utils/tools'


  export default {
    name: 'MyPositionModal',
    props: {
      showModal: {
        type: Boolean,
        default: false,
      },
      broNftInfo: {
        type: Array,
        default: [],
      }
    },
    data () {
      return {
      }
    },
    methods: {
      ...mapMutations({
        setSnackbar: 'SET_SNACKBAR',
      }),
      getPriceValue: getPriceValue,
      closeDailog () {
        this.$emit('close-position-modal')
      },
      async deBorrow (param) {
        const { tokenId, interest, total } = param
        try {
          const config = await prepareWriteContract({
            address: mainAddress,
            abi: mainABI,
            functionName: 'withdrawNFT',
            args: [nftAddress, Number(tokenId)],
          })
          writeContract(config).then(res => {
            this.setSnackbar({
              visible: true,
              color: 'success',
              text: 'Deborrow success!',
            })
            this.closeDailog()
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
<style lang="scss" scoped>
.item-content-wrap {
  height: calc(100vh - 200px);
  overflow: auto;
}
.data-item {
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
