<template>
  <v-container
    id="propeties"
    fluid
    tag="section"
  >
    <v-card class="pa-8">
      <div class="propeties-container">
        <p class="text-h3 font-weight-bold text-center">
          Properties
          <v-btn
            to="/launchpad-detail"
            rounded
            small
            color="primary"
          >
            BUY
          </v-btn>
        </p>
        <p class="text-subtitle-2 text-center mb-10">
          We will purchase these real estate assets step by step and operate these assets in a very compliant way to ensure a stable rental income.
        </p>
        <v-row>
          <template v-for="(item, index) in cardInfo">
            <v-col
              :key="index"
              cols="12"
              lg="3"
            >
              <card
                :card-detail="n"
                @to-detail="toDetail(item.id)"
              />
            </v-col>
          </template>
        </v-row>
      </div>
    </v-card>
  </v-container>
</template>

<script>
  import Card from '../../components/Card.vue'
  import { houseInfo } from '@/data/index'
  export default {
    name: 'Propeties',
    components: {
      Card,
    },
    data () {
      return {
        cardInfo: houseInfo,
      }
    },
    methods: {
      toDetail (id) {
        this.$router.push(`/propeties-detail?id=${id}`)
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>
