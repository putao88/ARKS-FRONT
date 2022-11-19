<template>
  <v-container
    id="propeties"
    fluid
    tag="section"
  >
    <div class="propeties-container">
      <p class="text-h3 font-weight-bold text-center">
        Properties
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
            <card />
          </v-col>
        </template>
      </v-row>
    </div>
  </v-container>
</template>

<script>
  import Card from '../../components/Card.vue'
  export default {
    name: 'Propeties',
    components: {
      Card,
    },
    data () {
      return {
        cardInfo: new Array(8),
      }
    },
  }
</script>

<style lang="scss" scoped>

</style>
