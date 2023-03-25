<template>
  <v-container
    id="detail"
    fluid
    tag="section"
  >
    <p class="text-h3 font-weight-bold">
      {{ cardDetail.address }}
      <v-btn
        to="/launchpad-detail"
        rounded
        small
        color="primary"
      >
        BUY
      </v-btn>
    </p>
    <v-row>
      <v-col
        cols="12"
        sm="12"
        lg="7"
      >
        <v-img
          height="300px"
          :src="cardDetail.coverImg"
        />
      </v-col>
      <v-col
        cols="12"
        sm="12"
        lg="5"
        class="d-flex flex-wrap justify-space-between align-content-space-around
"
      >
        <template v-for="(img,imgIndex) in cardDetail.introduceImg">
          <v-img
            :key="imgIndex"
            class="mr-2 mb-1"
            width="48%"
            height="140px"
            :src="img"
          />
        </template>
      </v-col>
      <v-col
        cols="12"
        sm="12"
        lg="12"
        class="text-h4 font-weight-bold"
      >
        TOTAL INVESTMENT: {{ cardDetail.totalInvestment }}
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
          {{ cardDetail.description }}
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
            <span>- Address: </span><span>{{ cardDetail.address }}</span>
          </p>
          <p class="mb-2">
            <span>- Total Investment: </span><span>{{ cardDetail.totalInvestment }}</span>
          </p>
          <p class="mb-2">
            <span>- Offering Percent (of Total Tokens): </span><span>{{ cardDetail.offeringPercent }}</span>
          </p>
          <p class="mb-2">
            <span>- Type: </span><span>{{ cardDetail.type }}</span>
          </p>
          <p class="mb-2">
            <span>- Type of Investment: </span><span>{{ cardDetail.typeOfInvestment }}</span>
          </p>
          <p class="mb-2">
            <span>- Average Annual Appreciation of Real Estate(Historical ): </span><span>{{ cardDetail.totalInvestment }}</span>
          </p>
          <p class="mb-2">
            <span>- Average Annual Rental Return(Historical ): </span><span>{{ cardDetail.totalInvestmentRate }}</span>
          </p>
          <p class="mb-2">
            <span>- Construction Year: </span><span>{{ cardDetail.constructionYear }}</span>
          </p>
          <p class="mb-2">
            <span>- Rooms: </span><span>{{ cardDetail.bedrooms+cardDetail.bathrooms }}</span>
          </p>
          <p class="mb-2">
            <span>- Size(sqft): </span><span>{{ cardDetail.sizeUnits }}</span>
          </p>
          <p class="mb-2">
            <span>- Garage: </span><span>{{ cardDetail.garage }}</span>
          </p>
          <p class="mb-2">
            <span>- Air Conditioner / Heater: </span><span>{{ cardDetail.heater }}</span>
          </p>
          <p class="mb-2">
            <span>- Rented: </span><span>{{ cardDetail.rented }}</span>
          </p>
          <p class="mb-2">
            <span>- Renovation: </span><span>{{ cardDetail.renovation }}</span>
          </p>
        </div>
      </v-col>
    </v-row>
    <v-carousel
      v-model="curCard"
      hide-delimiters
      height="350"
    >
      <v-carousel-item
        v-for="(item,i) in carouselItems"
        :key="i"
      >
        <v-row
          class="carousel-item-wrap"
          justify="space-around"
          align="center"
        >
          <template v-for="(n,index) in item">
            <v-col
              :key="index"
              cols="12"
              sm="12"
              md="4"
              lg="3"
              xl="3"
            >
              <div class="card-wrap">
                <card
                  :card-detail="n"
                  @to-detail="toDetail(n.id)"
                />
              </div>
            </v-col>
          </template>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</template>

<script>
  import Card from '@/components/Card.vue'
  import { houseInfo } from '@/data/index'
  export default {
    name: 'Detail',
    components: {
      Card,
    },
    data () {
      return {
        curCard: 0,
        allCardsData: houseInfo,
        carouselItems: [],
        cardDetail: {},
      }
    },
    mounted () {
      this.init()
      this.getDetail()
    },
    methods: {
      getDetail () {
        const id = this.$route.query.id
        this.cardDetail = houseInfo.filter(item => item.id === id)[0]
      },
      init () {
        var screenModel = this.$vuetify.breakpoint.name
        if (['lg', 'xl'].includes(screenModel)) {
          this.carouselItems = this.formatArray(this.allCardsData, 4)
        } else if (['md'].includes(screenModel)) {
          this.carouselItems = this.formatArray(this.allCardsData, 3)
        } else {
          this.carouselItems = this.formatArray(this.allCardsData, 1)
        }
      },
      formatArray (data, num) {
        const carouseArray = []
        for (var i = 0, len = data.length; i < len; i += num) {
          carouseArray.push(data.slice(i, i + num))
        }
        return carouseArray
      },
      toDetail (id) {
        if (id === '0') {
          this.$router.push(`/government-bond-detail?id=${id}`)
        } else {
          this.cardDetail = houseInfo.filter(item => item.id === id)[0]
        }
      },
    },
  }
</script>

<style lang="scss" scoped>
.carousel-item-wrap {
  height: 100%;
}
.card-wrap {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
