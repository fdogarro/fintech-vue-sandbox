<template>
   <v-layout row wrap>
       <v-flex md4>
         <lp-chart :dataModel="lineChartData" :chartLayout="pieLayout2" :propID="pieID"></lp-chart>
       </v-flex>
       <v-flex md4>
         <lp-chart :dataModel="pieChartData" :chartLayout="pieLayout" :propID="secondPie"></lp-chart>
       </v-flex>
       <v-flex md4>
         <lp-chart :dataModel="pieChartData3" :chartLayout="pieLayout3" :propID="thirdPie"></lp-chart>
       </v-flex>
   </v-layout>
</template>

<script>
import LPChart from '../../common/LPChart.vue';
import Plotly from 'plotly.js/dist/plotly';
import { mapGetters, mapActions, mapMutations } from 'vuex';
export default {
  components:{
    'lp-chart': LPChart
  },
  data () {
    return {
      pieID:'',
      secondPie:'',
      thirdPie:'',
      lineChartData:[],
      pieChartData:[],
      pieChartData3:[],
      pieVals:{
        values: [404149, 631037, 1041951],
        labels: ['Short PL', 'Live PL', 'Long PL'],
        type:'pie'
      },
      pieVals2:{
        values: [41124629, 1271473, 8932145, 2185763],
        labels: ['Long Exp', 'Short Exp', 'Net Exp', 'Gross Exp'],
        type:'pie'
      },
      pieVals3:{
        values: [3787494, 3983203, 3737832],
        labels: ['Day', 'MTD', 'YTD'],
        type:'pie'
      },
      pieLayout:{
        height: 315,
        width: 415,
        title:"Day & P & L",
        titlefont:{
          size:12
        }
      },
      pieLayout2:{
        height: 315,
        width: 415,
        title:"Exposure Summary",
        titlefont:{
          size:12
        }
      },
      pieLayout3:{
        height: 315,
        width: 415,
        title:"Return Trends",
        titlefont:{
          size:12
        }
      }

   }
  },
  mounted(){
    // this.drawLineChart()
  },
  computed:{
    ...mapGetters({
        allChartData:'allChartData',
        strategyGridParams:'strategyGridParams'
    }),
    drawLineChart(){


      Plotly.newPlot(
        "pieID",
        this.lineChartData,
        this.pieLayout2,
        {displayModeBar:this.displayBar}
      )
    }
  },
  watch:{
    allChartData(data){
      console.log("Line Chart Data",  data)
      let parent = data.orgHierarchy;
      if(parent.length >= 2){
        this.pieLayout2.title = parent[0] + ' in ' + parent[parent.length - 1] + ' Day & P & L';
      }else if(parent.length === 1){
        this.pieLayout2.title = parent[0] + ' Day & P & L';
      }

      //Todo refactor and make resuable
      // this.pieLayout2.title = data.orgHierarchy[0] + ' Day & P & L';
      // Chart1
      this.pieVals.values = [data.shortPL, data.livepl, data.longpl];
      // this.pieVals.values.push(data.day, data.livepl, data.longpl);
      this.lineChartData = [this.pieVals];

      //Chart2
      this.pieLayout.title = parent[0] + ' Exposure Summary'
      this.pieVals2.values = [data.longExp, data.shortExp, data.netExp, data.grossExp];
      this.pieChartData = [this.pieVals2];

      //Chart3
      this.pieLayout3.title = parent[0] + ' Return Trends'
      // this.pieVal3.values = []
      this.pieVals3.values = [data.day, data.mtd, data.ytd];
      this.pieChartData3 = [this.pieVals3];


      // // this.pieVals.values.push(data.day, data.livepl, data.longpl);
      Plotly.newPlot(this.pieID, this.lineChartData, this.pieLayout2);
      Plotly.newPlot(this.secondPie, this.pieChartData, this.pieLayout);
      Plotly.newPlot(this.thirdPie, this.pieChartData3, this.pieLayout3);
      console.log("All Chart Data", data, this.pieVals)
    }
  },
  beforeUpdate(){
    console.log("Before Update")
  },
  updated(){
    console.log("Updated")
  },
  created(){
    this.pieID = "plotly-item";
    this.secondPie = "plotly-item2";
    this.thirdPie = "plotly-item3";
    this.pieChartData = [this.pieVals2];
    this.pieChartData3 = [this.pieVals3];

    // this.pieLayout2.title = this.allChartData.orgHierarchy[0] + ' Day & P & L';
    // this.pieVals.values.push(this.allChartData.day, this.allChartData.livepl, this.allChartData.longpl);
    this.lineChartData = [this.pieVals];
    console.log("Chart Data", this.allChartData)
  }
}
</script>

<style scoped>


</style>
