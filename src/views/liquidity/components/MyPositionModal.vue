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
        <v-card-text>
          <v-row>
            <template v-for="(item, index) in cardInfo">
              <v-col
                :key="index"
                cols="12"
                lg="4"
              >
                <v-card class="rounded-lg">
                  <v-card-text>
                    <div
                      class="data-item mt-6"
                    >
                      <span class="text-h4">interest:</span>
                      <span class="text-h4 font-weight-bold">11.5%</span>
                    </div>
                    <div
                      class="data-item"
                    >
                      <span class="text-h4">Total:</span>
                      <span class="text-h4 font-weight-bold">32.5</span>
                    </div>
                    <v-btn
                      width="100%"
                      height="40"
                      color="primary"
                      class="mt-6"
                      rounded
                    >
                      Borrow
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
  export default {
    name: 'MyPositionModal',
    props: {
      showModal: {
        type: Boolean,
        default: false,
      },
    },
    data () {
      return {
        cardInfo: new Array(8),
      }
    },
    methods: {
      closeDailog () {
        this.$emit('close-position-modal')
      },
    },
  }
</script>
<style lang="scss" scoped>
.data-item {
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
