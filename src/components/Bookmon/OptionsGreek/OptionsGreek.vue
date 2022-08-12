<template>
  <v-layout row wrap>
    <v-flex xs12>
       <ag-grid-vue style="width: 100%; height:400px; " class="ag-theme-balham-dark" id="positions-grid"
                    :gridOptions="gridOptions"
                    :gridReady="onReady"
                    :rowClicked="onPositionRowClicked"
                    :getContextMenuItems="getPositionMenuItems"
                    :toolPanelSuppressSideButtons="true">
       </ag-grid-vue>
     </v-flex>
   </v-layout>
</template>

<script>
/* eslint-disable */
import {AgGridVue} from "ag-grid-vue";
import {gridConfigMixins} from '../../../ag-mixins.js';
export default {
  name: 'Portfoliio',
  components:{
    'ag-grid-vue': AgGridVue
  },
  mixins:[gridConfigMixins],
  data () {
    return {

   }
  },
  methods: {
    onReady(params){
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      // setInterval(this.positionGridUpdate, 5000);
    },
    onPositionRowClicked(event) {
      console.log("Position Row", event);
    },
    getPositionMenuItems(params){
      let self = this;
      let result = [
        {
          name: "Launch Trade Ticket",
          action(){
            self.launchTradeTicket()
          }
        },
        {
          name:"Launch Select View",
          action(){
            self.launchVisualization()
          }
        },
        "export",
        "separator",
        "copy",
        "copyWithHeaders"
      ]
      return result;
    }
  },
  computed:{
    gridOptions: function(){
      let gridOptions = {};
      gridOptions.rowData = this.rowData;
      gridOptions.columnDefs = this.secondColDef();
      gridOptions.enableFilter = true;
      gridOptions.enableSorting = true;
      gridOptions.singleClickEdit = true;
      gridOptions.rowBuffer = 50;
      gridOptions.rowSelection = 'single';
      gridOptions.defaultColDef = { width: 125, enableRowGroup: true}
      return gridOptions;
    }
},
created(){
  this.rowData = [];
  for(let i = 0; i < 1000; i++){
    this.rowData.push({
      twentyAdv: _.sample(["0.00%", "0.01%", "0.03%", "0.04%", "0.05%"]),
      pm: _.sample(["TMT1_LS", "HCR1_LS", "GSQL_LS"]),
      ticker: _.sample(["GPS", "TSLA", "TAP", "DISCA", "SNI", "CSCO", "ANET", "PANW"]),
      exp: Math.floor(Math.random() * 2000000),
      side: _.sample(["SHORT", "LONG"]),
      grossExp: Math.floor(Math.random() * 10000),
      netExp: Math.floor(Math.random() * 10000),
      threeWKBetaNetExp: Math.floor(Math.random() * 10000),
      sixMDBetaNetExp: Math.floor(Math.random() * 10000),
      twoYWBetaNetExp: Math.floor(Math.random() * 10000),
      livePL: Math.floor(Math.random() * 10000),
      longPL: Math.floor(Math.random() * 10000),
      dayPNL: Math.floor(Math.random() * 10000),
      perUO: Math.floor(Math.random() * 10000),
      UO: Math.floor(Math.random() * 10000)
    })
  }
}
}

</script>

<style scoped>

</style>
