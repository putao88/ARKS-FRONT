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
        <v-col
          cols="12"
          sm="6"
          lg="3"
        >
          <base-material-stats-card
            color="primary"
            icon="mdi-twitter"
            title="Assets Amount"
            value="19"
            sub-icon="mdi-clock"
            sub-text="Just Updated"
          />
          <!-- <div class="elevation-4 rounded-lg pa-4 p-relative">
            <div>
              <div
                class="primary rounded d-flex align-center justify-center elevation-4 p-absolute icon-wrap"
              >
                <v-icon
                  color="white"
                  class="fs-30"
                >
                  mdi-twitter
                </v-icon>
              </div>
              <div class="bt-1 mb-3 text-right">
                <p class="grey--text text-subtitle-1 mb-1">
                  Assets Amount
                </p>
                <p class="text-h3 font-weight-light text--primary">
                  31
                </p>
              </div>
            </div>
            <div>
              <v-icon
                color="grey--text"
                class="mr-1"
              >
                mdi-clock
              </v-icon>
              <span class="grey--text text-body-2">Just Updated</span>
            </div>
          </div> -->
        </v-col>

        <v-col
          cols="12"
          sm="6"
          lg="3"
        >
          <base-material-stats-card
            color="primary"
            icon="mdi-poll"
            title="Assets(USD)"
            value="6,731,098"
            sub-icon="mdi-tag"
            sub-text="Last 24 Hours"
          />
        </v-col>

        <v-col
          cols="12"
          sm="6"
          lg="3"
        >
          <base-material-stats-card
            color="primary"
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
                    :card-detail="n"
                    @to-detail="toDetail(n.id)"
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
  import { houseInfo } from '@/data/index'
  export default {
    name: 'Home',
    components: {
      Card,
    },
    data () {
      return {
        curCard: 0,
        allCardsData: houseInfo,
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
      toDetail (id) {
        if (id === '0') {
          this.$router.push(`/government-bond-detail?id=${id}`)
        } else {
          this.$router.push(`/propeties-detail?id=${id}`)
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
.icon-wrap {
  width: 70px;
  height: 70px;
}
.p-relative {
  position: relative;
}
.p-absolute {
  position: absolute;
  left: 10px;
  top: -20px;
}
.fs-30 {
  font-size: 30px;
}
.bt-1 {
  border-bottom: 1px solid #eee;
}
</style>
