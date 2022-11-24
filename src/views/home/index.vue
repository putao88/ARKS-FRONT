<template>
  <v-container
    id="home"
    fluid
    tag="section"
  >
    <v-card class="pa-8">
      <div>
        <p class="text-h3 font-weight-bold text-center">
          Connecting The Crypto World with The Real World
        </p>
        <p class="text-subtitle-2 text-center">
          ARKS provides high-quality real estate investment opportunities for crypto users and enables real estate to circulate safely in the crypto world at low fees.
        </p>
      </div>
      <div class="my-6 text-center">
        <v-btn
          class="mr-14"
          rounded
          color="primary"
        >
          Learn More
        </v-btn>
        <v-btn
          color="primary"
          to="/launchpad"
          rounded
        >
          Buy Now
        </v-btn>
      </div>
      <v-row
        justify="space-around"
        class="my-8"
      >
        <!-- <v-col
          cols="12"
          lg="3"
        >
          <div class="elevation-4 pa-3 rounded-lg">
            <p class="text-body-2">
              Assets Amount
            </p>
            <p class="text-h3">
              31
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="3"
        >
          <div class="elevation-4 pa-3 rounded-lg">
            <p class="text-body-2">
              Assets Value(USD)
            </p>
            <p class="text-h3">
              $2,135,397
            </p>
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="3"
        >
          <div class="elevation-4 pa-3 rounded-lg">
            <p class="text-body-2">
              Users Amount
            </p>
            <p class="text-h3">
              1,578
            </p>
          </div>
        </v-col> -->
        <v-col
          cols="12"
          sm="6"
          lg="3"
        >
          <base-material-stats-card
            color="info"
            icon="mdi-twitter"
            title="Assets Amount"
            value="31"
            sub-icon="mdi-clock"
            sub-text="Just Updated"
          />
        </v-col>

        <v-col
          cols="12"
          sm="6"
          lg="3"
        >
          <base-material-stats-card
            color="orange"
            icon="mdi-poll"
            title="Assets Value(USD)"
            value="$2,135,397"
            sub-icon="mdi-tag"
            sub-text="Tracked from Google Analytics"
          />
        </v-col>

        <v-col
          cols="12"
          sm="6"
          lg="3"
        >
          <base-material-stats-card
            color="success"
            icon="mdi-store"
            title="Users Amount"
            value="1,578"
            sub-icon="mdi-calendar"
            sub-text="Last 24 Hours"
          />
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
                    :key="index"
                    @to-detail="toDetail"
                  />
                </div>
              </v-col>
            </template>
          </v-row>
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <v-container />
  </v-container>
</template>

<script>
  import Card from '@/components/Card.vue'
  export default {
    name: 'Home',
    components: {
      Card,
    },
    data () {
      return {
        curCard: 0,
        allCardsData: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        carouselItems: [],
      }
    },
    mounted () {
      this.init()
    },

    methods: {
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
      previous () {},
      next () {},
      formatArray (data, num) {
        const carouseArray = []
        for (var i = 0, len = data.length; i < len; i += num) {
          carouseArray.push(data.slice(i, i + num))
        }
        return carouseArray
      },
      toDetail () {
        this.$router.push('/propeties-detail')
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
