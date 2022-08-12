<template>
  <v-container fluid style="padding:0">
   <v-layout row wrap>
     <v-flex xs6>
       <h1 style="font-size:50px; color:white;">Stock Charting</h1>
      <lp-chart :dataModel="lineChartData" :chartLayout="pieLayout2" :propID="pieID"></lp-chart>
    </v-flex>

     <ag-grid-vue style="width: 15%; height: 560px;"
                  :gridOptions="stockGridOptions"
                  :rowClicked="onRowXColumnClick"
                  :toolPanelSuppressSideButtons="true"
                  rowSelection="multiple"
                  rowMultiSelectWithClick="true"
                  :onGridReady="onGridReady"
                  class="ag-theme-balham-dark">
     </ag-grid-vue>
   </v-layout>
  </v-container>
</template>

<script>
import LPChart from '../../common/LPChart.vue';
import Plotly from 'plotly.js/dist/plotly';
import { AgGridVue } from 'ag-grid-vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import {gridConfigMixins} from '../../../ag-mixins.js';
import _ from 'lodash';

export default {
  components:{
    'lp-chart': LPChart,
    'ag-grid-vue': AgGridVue
  },
  mixins:[gridConfigMixins],
  data () {
    return {
      selected:[],
      selectedX:'',
      selectedY:'',
      selectedChart:'',
      checkboxSelected:[],
      mainChartData:[],
      pieID:'',
      lineChartData:[],
      pieVals:{
        y: [],
        x: [],
        mode: 'markers',
        type:'scatter'
      },
      pieLayout2:{
        height: 430,
        width: 630,
        mode: 'markers',
        type:'scatter',
        title:"Exposure Summary"
      }
   }
  },
  mounted(){
    this.drawLineChart()
  },
  computed:{
    ...mapGetters({
        allChartData:'allChartData',
        strategyGridParams:'strategyGridParams',
        gridParams: 'gridParams'
    }),
    drawLineChart(){


      Plotly.newPlot(
        "pieID",
        this.lineChartData,
        this.pieLayout2,
        {displayModeBar:this.displayBar}
      )
    },
    stockGridOptions(){
      let gridOptions = {};
      gridOptions.rowData = this.mainChartData;
      gridOptions.columnDefs = this.chartingColDef();
      gridOptions.rowHeight = 35;
      gridOptions.enableFilter = false;
      gridOptions.defaultColDef = {
        width: 125,
        tooltip:(obj) =>{
          return obj.value;
          // console.log("Value", value)
        }
      };
      return gridOptions;
    },
    fundsYOptions(){
      let gridOptions = {};
      gridOptions.rowData = this.mainChartData;
      gridOptions.columnDefs = this.chartingColDef();
      gridOptions.rowHeight = 35;
      gridOptions.enableFilter = false;
      gridOptions.defaultColDef = {
        width: 125,
        tooltip:(obj) =>{
          return obj.value;
          // console.log("Value", value)
        }
      };
      return gridOptions;
    },
    chartOptions(){
      let gridOptions = {};
      gridOptions.rowData = this.chartTypeData();
      gridOptions.columnDefs = this.chartTypeColDef();
      gridOptions.rowHeight = 35;
      gridOptions.enableFilter = false;
      gridOptions.defaultColDef = {
        width: 125,
        tooltip:(obj) =>{
          return obj.value;
          // console.log("Value", value)
        }
      };
      return gridOptions;
    }
  },
  methods:{
    selectedView(event){
      console.log("Event", event);
    },
    radioBtnClicked(){

    },
    onRowSelected(event){
      console.log("Row Selected", event)
    },
    onGridReady(params){
      this.gridApi = params.api;
    },
    onRowXColumnClick(event){

      let positionGridApi = this.gridParams.api;
      this.selectedX = event.node.data.chartData;
      // this.selectedY =
      let first = [];
      let second = [];
      positionGridApi.forEachNodeAfterFilterAndSort((rowNode, index) =>{
        let data = rowNode.data;
        for(let column in data){
          if(data.hasOwnProperty(column) && column === this.selectedX){
            // first.push(data[column])
            // console.log("Row Data", first)
          }
        }
        // console.log("Row Data", rowNode.data, index)
      })
      console.log("Get Selected")
      // let sum = first.reduce((a, b) => a + b, 0);
      //
      console.log("Row Column Clicked", this.selectedX, this.selectedY);

    },
    onRowYColumnClick(event){
      let selectedGrid = event.api.getSelectedNodes();
      let positionGridApi = this.gridParams.api;
      this.selectedY = event.node.data.chartData;
      let first = [];
      let second = [];
      positionGridApi.forEachNodeAfterFilterAndSort((rowNode, index) =>{
        let data = rowNode.data;
        for(let column in data){
          if(data.hasOwnProperty(column)){

          }
        }
        // console.log("Row Data", rowNode.data, index)
      })
    let nodes = event.node.selectionController.selectedNodes;
    let nodeMap = _.map(selectedGrid, 'data.chartData');
    // selectedGrid
    // for(let item in nodes){
    //   if(nodes.hasOwnProperty(item) && nodes[item].data.chartData){
    //     console.log("Items", nodes[item].data.chartData);
    //   }
    //
    // }
    // let nodesArr = _.map(nodes, data);
      console.log("Row Column Clicked", this.selectedX, this.selectedY, this.selectedChart, event, selectedGrid, nodeMap);

    },
    buildGraph(){
      let self = this;
      let positionGridApi = this.gridParams.api;
      let xAxis = [];
      let yAxis = [];
      let sumArr = [];
      let sums = null;
      let positionArr = [];
      let chartVals = {};
      let tbd = [];
      let main = [];
      self.pieVals.x = [];
      self.pieVals.y = [];
      self.pieVals.values = [];
      self.pieVals.labels = [];
      positionGridApi.forEachNodeAfterFilterAndSort((rowNode, index) =>{
        let data = rowNode.data;
        let positionObj = {};
        let itemArr = [];
        positionObj[this.selectedX] = data[this.selectedX];
        positionObj[this.selectedY] = data[this.selectedY];
        positionObj['columnSum'] = [];
        positionArr.push(positionObj);
      })
      console.log("Positions Arr", positionArr)

      let grouped = _.groupBy(positionArr, this.selectedX);
      for(let column in grouped){
        if(grouped.hasOwnProperty(column)){
          let sumObj = {};
           console.log("Column", column, grouped[column]);
           // groupedArr.push(grouped[column])
          sums = _.sumBy(grouped[column], this.selectedY);
          sumObj['sum'] = sums;
          sumObj['field'] = column;
          sumArr.push(sumObj);


        }
      }

      sumArr.forEach(function(item, index){
        if(self.selectedChart === 'pie'){
          self.pieVals.values.push(item.sum);
          self.pieVals.labels.push(item.field);
        }else{
          self.pieVals.x.push(item.field);
          self.pieVals.y.push(item.sum);
        }
        console.log("Items", item, index, main);
      })
        self.pieVals.type = self.selectedChart;
        self.lineChartData = [self.pieVals];


        Plotly.newPlot(this.pieID, this.lineChartData, this.pieLayout2);




      console.log("Sums", sums, sumArr, self.pieVals, chartVals)



      console.log("Build Graph", this.selectedX, this.selectedY, this.selectedChart, positionGridApi, positionArr, grouped, xAxis, main);
    },
    onRowClicked(event){
      this.selectedChart = event.node.data.day;
      console.log("Row Clicked", this.selectedX, this.selectedY, this.selectedChart);
    }
  },
  watch:{
    allChartData(data){
      // console.log("Line Chart Data",  data)
      // let parent = data.orgHierarchy;
      // if(parent.length >= 2){
      //   this.pieLayout2.title = parent[0] + ' in ' + parent[parent.length - 1] + ' Day & P & L';
      // }else if(parent.length === 1){
      //   this.pieLayout2.title = parent[0] + ' Day & P & L';
      // }
      // this.pieLayout2.title = data.orgHierarchy[0] + ' Day & P & L';
      // Chart1
      // this.pieVals.values = [data.shortPL, data.livepl, data.longpl];
      // this.pieVals.values.push(data.day, data.livepl, data.longpl);
      // this.lineChartData = [this.pieVals];

      //Chart2
      // this.pieLayout.title = parent[0] + ' Exposure Summary'
      // this.pieVals2.values = [data.longExp, data.shortExp, data.netExp, data.grossExp];
      // this.pieChartData = [this.pieVals2];

      //Chart3
      // this.pieLayout3.title = parent[0] + ' Return Trends'
      // this.pieVal3.values = []
      // this.pieVals3.values = [data.day, data.mtd, data.ytd];
      // this.pieChartData3 = [this.pieVals3];


      // // this.pieVals.values.push(data.day, data.livepl, data.longpl);
      // Plotly.newPlot(this.pieID, this.lineChartData, this.pieLayout2);
      // Plotly.newPlot(this.secondPie, this.pieChartData, this.pieLayout);

      // console.log("All Chart Data", data, this.pieVals)
    }
  },
  created(){
    let positions = this.positionsColDef();

    this.mainChartData = positions.map(obj =>{
      let newObj = {};
      newObj['chartData'] = obj.field;
      return newObj;
    });

    console.log("Chart Data", this.mainChartData)
    this.pieID = "plotly-item";
    this.secondPie = "plotly-item2";
    this.thirdPie = "plotly-item3";
    this.pieChartData = [this.pieVals2];
    this.pieChartData3 = [this.pieVals3];
    // this.pieVals = {};
  }
}
</script>

<style scoped>


</style>
