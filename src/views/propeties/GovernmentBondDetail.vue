<template>
  <v-container
    id="detail"
    fluid
    tag="section"
    class="white"
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
        lg="6"
      >
        <v-img
          :src="cardDetail.coverImg"
          height="300px"
        />
      </v-col>
      <template v-for="(img,imgIndex) in cardDetail.introduceImg">
        <v-col
          :key="imgIndex"
          cols="12"
          sm="12"
          lg="6"
        >
          <v-img
            :src="img"
            height="300px"
          />
        </v-col>
      </template>
      <v-col
        cols="12"
        sm="12"
        lg="12"
      >
        <p class="text-h4 font-weight-medium mb-2">
          Investing in a US Treasury bills ETF is an ultra-low risk investment option that offers exposure to the beta of the financial market. With stable and predictable returns and exceptional liquidity, it is the ideal choice for investors seeking safety, stability, and liquidity.
        </p>
        <p class="text-h4 font-weight-medium mb-2">
          Compared to typical DeFi products, this investment option offers a real yield with high certainty and transparency, making it more suitable for long-term investors looking for stable and robust investment opportunities.
        </p>
        <p class="text-h4 font-weight-medium mb-2">
          The significant majority of this portfolio will be in the iShares Short Treasury Bond ETF (NASDAQ: SHV). There is also a small portion of USDT and USD for liquidity purposes.
        </p>
        <p class="text-h4 font-weight-medium mb-2">
          Distributions are automatically reinvested in the underlying assets to compound your revenue.
        </p>
        <p class="text-h4 font-weight-medium mb-2">
          Fund management fees: 0.15% per year.
        </p>
        <p class="text-h4 font-weight-medium mb-2">
          ETF management fees: 0.15% per year.
        </p>
      </v-col>
    </v-row>
    <div class="text-h2 font-weight-bold mt-4 mb-2">
      ETF Details
    </div>
    <div class="d-flex justify-start py-3 border-bottom">
      <a
        class="text-h4 font-weight-medium mr-6 pointer no-underline"
        target="_blank"
        href="https://www.ishares.com/us/products/239466/ishares-short-treasury-bond-etf"
      >
        <span>ETF Product Page</span>
        <v-icon
          class="mdi mdi-arrow-top-right"
          size="18"
          color="primary"
        />
      </a>
      <a
        class="text-h4 font-weight-medium mr-6 pointer no-underline"
        target="_blank"
        href="https://www.ishares.com/us/literature/fact-sheet/shv-ishares-short-treasury-bond-etf-fund-fact-sheet-en-us.pdf"
      >
        <span>ETF Fact Sheet</span>
        <v-icon
          class="mdi mdi-arrow-top-right"
          color="primary"
          size="18"
        />
      </a>
      <div class="text-h4 mr-6">
        Last updated on: Mar 1, 2023
      </div>
    </div>
    <div class="d-flex justify-start py-3 border-bottom">
      <div class="d-flex align-center width-half">
        <span class="text-h4 mr-1">Estimated Yield to Maturity</span>
        <tooltips tip-text="The Estimated Yield to Maturity is the discount rate that equates the ETF's aggregate cash flows to a given ETF price. The cash flows are based on the yield-to-worst methodology in which a bond's cash flows are assumed to occur at the call date (if applicable) or maturity, whichever results in the lowest yield for that bond holding." />
      </div>
      <div class="text-h4 font-weight-medium">
        4.94%
      </div>
    </div>
    <div class="d-flex justify-start py-3 border-bottom">
      <div class="d-flex align-center width-half">
        <span class="text-h4 mr-1">30 Day SEC Yield</span>
        <tooltips tip-text="The 30 day SEC yield is a measure of the yield. It is calculated according to a set of rules established by the Securities and Exchange Commission (SEC)." />
      </div>
      <div class="text-h4 font-weight-medium">
        4.48%
      </div>
    </div>
    <div class="d-flex justify-start py-3 border-bottom">
      <div class="d-flex align-center width-half">
        <span class="text-h4 mr-1">Total Assets</span>
        <tooltips tip-text="The TVL of the ETF." />
      </div>
      <div class="text-h4 font-weight-medium">
        $23.68b
      </div>
    </div>
    <div class="d-flex justify-start py-3 border-bottom">
      <div class="d-flex align-center width-half">
        <span class="text-h4 mr-1">Liquidity</span>
        <tooltips
          tip-text="The dollar value of the shares traded, averaged over the past 30 trading days."
        />
      </div>
      <div class="text-h4 font-weight-medium">
        $529m of daily trading volume
      </div>
    </div>
    <div class="d-flex justify-start py-3 border-bottom">
      <div class="d-flex align-center width-half">
        <span class="text-h4 mr-1">Weighted Average Maturity</span>
        <tooltips tip-text="The Weighted Average Maturity (WAM) measures the average length of time until the principal of bonds are due to be repaid." />
      </div>
      <div class="text-h4 font-weight-medium">
        0.29 years
      </div>
    </div>
    <div class="d-flex justify-start py-3 border-bottom">
      <div class="d-flex align-center width-half">
        <span class="text-h4 mr-1">Credit Quality (S&P)</span>
        <tooltips tip-text="Holdings within the ETF are rated by a Credit Rating Agency. Credit Ratings allow investors understand the risk level of their investment." />
      </div>
      <div class="text-h4 font-weight-medium">
        <div>24.10% • AAA Rated</div>
        <div>75.90% • Cash and/or Derivatives</div>
      </div>
    </div>
    <div class="d-flex justify-start py-3 border-bottom">
      <div class="d-flex align-center width-half">
        <span class="text-h4 mr-1">Standard Deviation (Annualized)</span>
        <tooltips tip-text="Standard Deviation measures the volatility of the returns. A high Standard Deviation indicates that the returns are fluctuating significantly over time." />
      </div>
      <div class="text-h4 font-weight-medium">
        0.47%
      </div>
    </div>
    <div class="text-h2 font-weight-bold mt-4 mb-2">
      On-Chain Addresses
    </div>
    <div class="d-flex justify-start py-3 border-bottom">
      <div class="d-flex align-center width-half">
        <span class="text-h4 font-weight-medium mr-1">OUSG</span>
      </div>
      <div class="text-h4 font-weight-medium d-flex justify-space-between width-half">
        <div class="mr-2">
          0x1b..ee92
        </div>
        <div>
          <v-btn
            icon
            outlined
            small
            color="primary"
            class="mr-2"
            @click="copy('0x1b19c19393e2d034d8ff31ff34c81252fcbbee92')"
          >
            <v-icon size="14">
              mdi-content-copy
            </v-icon>
          </v-btn>
          <v-btn
            icon
            outlined
            small
            color="primary"
            class="mr-2"
            href="https://etherscan.io/token/0x1b19c19393e2d034d8ff31ff34c81252fcbbee92"
            target="_blank"
          >
            <v-icon
              size="14"
            >
              mdi-arrow-top-right-bold-box-outline
            </v-icon>
          </v-btn>
        </div>
      </div>
    </div>
    <div class="d-flex justify-start py-3 border-bottom">
      <div class="d-flex align-center width-half">
        <span class="text-h4 font-weight-medium mr-1">Coinbase Prime</span>
        <tooltips tip-text="Used for USDC deposits" />
      </div>
      <div class="text-h4 font-weight-medium d-flex justify-space-between width-half">
        <div>
          <span class="mr-2">0xf6..856c</span>
          <span class="grey--text mr-2">OUSG.eth</span>
        </div>
        <span>
          <v-btn
            icon
            outlined
            small
            color="primary"
            class="mr-2"
            @click="copy('0xf67416a2c49f6a46fee1c47681c5a3832cf8856c')"
          >
            <v-icon size="14">mdi-content-copy</v-icon>
          </v-btn>
          <v-btn
            icon
            outlined
            small
            color="primary"
            class="mr-2"
            href="https://etherscan.io/address/0xf67416a2c49f6a46fee1c47681c5a3832cf8856c"
            target="_blank"
          >
            <v-icon
              size="14"
            >mdi-arrow-top-right-bold-box-outline</v-icon></v-btn>
        </span>
      </div>
    </div>
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
  import Tooltips from '@/components/Tooltips'
  import { houseInfo } from '@/data/index'
  export default {
    name: 'Detail',
    components: {
      Card,
      Tooltips,
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
          this.cardDetail = houseInfo.filter(item => item.id === id)[0]
        } else {
          this.$router.push(`/propeties-detail?id=${id}`)
        }
      },
      copy (str) {
        const input = document.createElement('input')
        document.body.appendChild(input)
        input.setAttribute('value', str)
        input.select()
        if (document.execCommand('copy')) {
          document.execCommand('copy')
        }
        document.body.removeChild(input)
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
.img-col {
  height: 300px;
}
.border-bottom {
  border-bottom: 1px solid var(--color-border-grey);
}
.width-half {
  width: 50%;
}
.no-underline {
  text-decoration: none;
}
</style>
