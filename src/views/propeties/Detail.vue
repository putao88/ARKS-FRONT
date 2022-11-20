<template>
  <v-container
    id="detail"
    fluid
    tag="section"
  >
    <p class="text-h3 font-weight-bold">
      8003 S Ingleside Ave, Chicago, IL 60619
    </p>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        lg="7"
      >
        <v-img
          height="300px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        lg="5"
        class="d-flex flex-wrap justify-space-between align-content-space-around
"
      >
        <v-img
          class="mr-2 mb-1"
          width="48%"
          height="140px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />
        <v-img
          class="mb-1"
          width="48%"
          height="140px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />
        <v-img
          class="mr-2"
          width="48%"
          height="140px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />
        <v-img
          width="48%"
          height="140px"
          src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
        />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        lg="12"
        class="text-h4 font-weight-bold"
      >
        TOTAL INVESTMENT: $ 1,012,800.00
      </v-col>
      <v-col
        cols="12"
        sm="12"
        lg="12"
      >
        <p class="text-h5 font-weight-bold mb-1">
          Property Description
        </p>
        <p class="text-body-2">
          Using display utilities you can turn any element into a flexbox container transforming direct children elements into flex items. Using additional flex property utilities, you can customize their interaction even further.
        </p>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        lg="12"
      >
        <p class="text-h4 font-weight-bold">
          Property Details
        </p>
        <div class="text-body-2">
          <p class="mb-2">
            <span>- Address: </span><span>xx Road, Jingan District, Shanghai</span>
          </p>
          <p class="mb-2">
            <span>- Total Investment: </span><span>$600,000</span>
          </p>
          <p class="mb-2">
            <span>- Offering Percent (of Total Tokens): </span><span>100%</span>
          </p>
          <p class="mb-2">
            <span>- Type: </span><span>商铺</span>
          </p>
          <p class="mb-2">
            <span>- 投资方式: </span><span>股权收购/资产收购/Distressed收购</span>
          </p>
          <p class="mb-2">
            <span>- 历史平均升值: </span><span>每年不少于2-4%</span>
          </p>
          <p class="mb-2">
            <span>- 历史平均租金回报: </span><span>每年不少于4-7%</span>
          </p>
          <p class="mb-2">
            <span>- Construction Year: </span><span>2001</span>
          </p>
          <p class="mb-2">
            <span>- Rooms: </span><span>×1</span>
          </p>
          <p class="mb-2">
            <span>- Size(sqft): </span><span>100</span>
          </p>
          <p class="mb-2">
            <span>- Garage: </span><span>1</span>
          </p>
          <p class="mb-2">
            <span>- 空调和暖气: </span><span>中央空调+地暖×1</span>
          </p>
          <p class="mb-2">
            <span>- Rented: </span><span>Fully rented</span>
          </p>
          <p class="mb-2">
            <span>- 翻修: </span><span>不需要</span>
          </p>
        </div>
      </v-col>
    </v-row>
    <!-- <v-row justify="space-between">
      <v-icon
        class="pointer ma-auto"
        size="30"
        color="primary"
        @click="previous"
      >
        {{ ['sm', 'xs'].includes($vuetify.breakpoint.name) ? 'mdi-arrow-up-circle-outline' : 'mdi-arrow-left-circle-outline' }}
      </v-icon>
      <template v-for="i in 3">
        <v-col
          :key="i"
          cols="12"
          lg="3"
        >
          <card />
        </v-col>
      </template>
      <v-icon
        class="pointer ma-auto"
        size="30"
        color="primary"
        @click="next"
      >
        {{ ['sm', 'xs'].includes($vuetify.breakpoint.name) ? 'mdi-arrow-down-circle-outline' : 'mdi-arrow-right-circle-outline' }}
      </v-icon>
    </v-row> -->
    <v-carousel
      v-model="curCard"
      height="350"
    >
      <v-carousel-item
        v-for="i in 3"
        :key="i"
      >
        <card />
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
  import Card from '@/components/Card.vue'
  export default {
    name: 'Detail',
    components: {
      Card,
    },
    data () {
      return {
        curCard: 1,
      }
    },
    methods: {
      previous () {},
      next () {},
    },
  }
</script>

<style lang="scss" scoped>

</style>
