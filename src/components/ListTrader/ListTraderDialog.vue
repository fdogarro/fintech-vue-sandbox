<template>
  <!-- <v-layout>
    <v-flex md8 l8 xl8> -->
    <v-container>
      <v-jumbotron
      src="https://preview.ibb.co/g4mpPx/list_trader.jpg"
      :gradient="gradient"
      dark
    >
     </v-jumbotron>

      <!-- <v-toolbar style="margin-top: 25px;" color="grey darken-3">
        <v-toolbar-title class="white--text title">List Trader</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon class="white--text">close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card>
        <v-card-text class="grey darken-2">
          <Details-Position/>
        </v-card-text>
        <v-layout>
          <v-flex md12 l12 xl12>
            <Details-Form-Fields/>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex md8 l8 xl8>
            <!-- <v-container> -->
              <!-- <v-btn class="primary" v-for="button in buttons" :key="button.id">{{ button.name }}</v-btn>
            <!-- </v-container> -->
          <!-- </v-flex>
          <v-flex md4 l4 xl4>
            <v-card-actions>
              <!-- <v-spacer></v-spacer> -->
              <!-- <div class="mb-2"> -->
                <!-- <v-btn block color="grey darken-2">Save Ticket</v-btn>
                <v-btn block color="blue darken-1" dark>Submit Ticket</v-btn> -->
              <!-- </div> -->
            <!-- </v-card-actions>
          </v-flex>
        </v-layout>
      </v-card> -->
    </v-container>
    <!-- </v-flex>
  </v-layout> -->
</template>

<script>
import DetailsPosition from './DetailsPosition.vue'
import DetailsFormFields from './DetailsFormFields.vue'
export default {
  name: 'trade-ticket-dialog',
  components: {
    'Details-Form-Fields': DetailsFormFields,
    'Details-Position': DetailsPosition
  },
  data () {
    return {
      buttons: [
        { name: 'Buy' },
        { name: 'Sell' },
        { name: 'Cover' },
        { name: 'Short' }
      ]
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
