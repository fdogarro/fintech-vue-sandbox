<template>
  <!-- <v-jumbotron>
      <v-container fill-height>
        <v-layout align-center>
          <v-flex> -->
            <!-- <lp-chart :dataModel="lineChartData" :propID="lineChartID" :chartLayout="pieLayout"></lp-chart> -->
          <!-- </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron> -->
  <!-- <v-layout>
    <v-flex md8 l8 xl8> -->
    <div>
      <lp-chart :dataModel="lineChartData" :propID="lineChartID" :chartLayout="pieLayout"></lp-chart>
    </div>
    <!-- </v-flex>
  </v-layout> -->
</template>

<script>
import LPChart from '../common/LPChart.vue'


export default {
  name: 'line-chart-dialog',
  components: {
    'lp-chart': LPChart
  },
  data () {
    return {
      lineChartID: '',
      lineChartData:[],
      trace1:{
        x: [0, 1, 2, 3, 4, 5],
        y: [1.5, 1, 1.3, 0.7, 0.8, 0.9],
        type: 'scatter'
      },
      trace2:{
        x: [0, 1, 2, 3, 4, 5],
        y: [1, 0.5, 0.7,  0.3, 0.4],
        type: 'bar'
      },
      pieLayout:{
        title:"Bookmon Chart View",
        height:550,
        width:875
      }
    }
  },
  methods: {
  },
  created(){
    this.lineChartID = 'line-chart'
    this.lineChartData = [this.trace1, this.trace2];
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
