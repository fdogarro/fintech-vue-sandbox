<template>
  <div>
    <v-layout>
      <v-toolbar flat>
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <v-select
              :items="tickers"
              v-model="tickerSelected"
              prepend-icon="search"
              label="Search"
              autocomplete
            ></v-select>
          </v-flex>
        </v-layout>
        <v-spacer></v-spacer>
        <v-btn small
          color="primary" dark
          v-on:click="onResetGrid">Reset Positions
        </v-btn>
        <v-btn
          small
          color="primary" dark
          v-on:click="onExportExcel">Export to Excel
        </v-btn>
      </v-toolbar>
    </v-layout>
    <div class="">
      <ag-grid-vue style="width: 100%; height: 350px;" class="ag-dark"
                   :gridOptions="gridOptions"
                   :gridReady="onReady"
                   :rowClicked="onRowClicked">
      </ag-grid-vue>
    </div>
  </div>
</template>


<script>
/* eslint-disable */
import {AgGridVue} from "ag-grid-vue";
import _ from 'lodash';
// import TradeTicketDialog from './TradeTicket/TradeTicketDialog.vue'
// import positionData from '../assets/positionMockData.json'

export default {
  name: 'position-section',
  components:{
    'ag-grid-vue': AgGridVue
  },
  data () {
    return {
     tickerSelected:null,
     tickers: ["GPS", "TSLA", "TAP", "DISCA", "SNI", "CSCO", "ANET", "PANW"],
     columnDefDark:[
        {field: "Side"},
        {field: "Ticker"},
        {field: "Start Qty"},
        {field: "Current Qty"},
        {field: "Exp USD"},
        {field: "Exp Base CCY"},
        {field: "Risk Ccy Exp"},
        {field: "6Md BETA Exp"},
        {field: "Admins SOD Px"},
        {field: "Last Px Base"},
        {field: "Last USD"},
        {field: "EndFX r2$"},
        {field: "Base CCY"},
        {field: "Risk CCY"},
        {field: "EndFx B2R"},
        {field: "Px Chg"},
        {field: "Px Chg %"},
        {field: "Cost Basis"},
        {field: "Trade P/L"},
        {field: "DayPnL"},
        {field: "U/O %"},
        {field: "U/O $"},
        {field: "P/L bps"},
        {field: "MTD P/L"},
        {field: "YTD P/L"},
        {field: "PM"},
        {field: "Sub-strategy1"},
        {field: "Sub-strategy2"},
        {field: "Start Fx r2$ Admin"},
        {field: "6Md Beta"},
        {field: "Sector"},
        {field: "Industry Group"},
        {field: "Industry"},
        {field: "SubIndustry"},
        {field: "Product"},
        {field: "PMStrategy"},
        {field: "Portfolio Target"},
        {field: "Live Price"},
        {field: "Live DTD P/L"},
        {field: "Max Premium"},
        {field: "2Yw Beta"},
        {field: "2Yw BETA Exp"},
        {field: "ExDate"},
        {field: "Earning Date"},
        {field: "Pos.Exp"},
        {field: "Delta"},
        {field: "3Wk Beta"},
        {field: "3Wk BETA Exp"},
        {field: "Security Name"},
        {field: "Risk Country"},
        {field: "Mkt Cap"},
        {field: "Market Cap"},
        {field: "Gross Exp"},
        {field: "20d Adv%"}
      ],
      columnDefsAg: [
        { headerName: 'Account', field: 'account' },
        { headerName: 'Trader', field: 'trader' },
        { headerName: 'Strategy', field: 'strategy' },
        { headerName: 'Counterparty', field: 'counterparty' },
        { headerName: 'CID', field: 'cid' },
        { headerName: 'Ticker', field: 'ticker' },
        { headerName: 'RIC', field: 'ric' },
        { headerName: 'BBG', field: 'bbg' },
        { headerName: 'Type', field: 'type' },
        { headerName: 'Order ID', field: 'orderId' },
        { headerName: 'Quantity', field: 'quantity' },
        { headerName: 'Price', field: 'price' },
        { headerName: 'Filled', field: 'filled' },
        { headerName: 'Open', field: 'open' },
        { headerName: 'Limit Price', field: 'limitPrice' },
        { headerName: 'Filled Price', field: 'filledPrice' },
        { headerName: 'Venue', field: 'venue' },
        { headerName: 'Gateway', field: 'gateway' },
        { headerName: 'Currency', field: 'currency' },
        { headerName: 'Side', field: 'side' },
        { headerName: 'Original Order ID', field: 'originalOrderId' },
        { headerName: 'Rejected', field: 'rejected' },
        { headerName: 'Rejected Reason', field: 'rejectedReason' },
        { headerName: 'State', field: 'state' },
        { headerName: 'Entry Method', field: 'entryMethod' },
        { headerName: 'Transact Time', field: 'transactTime' },
        { headerName: 'Placement Time', field: 'placementTime' },
        { headerName: 'Ems Time', field: 'emsTime' }
      ],
      columnDef:[
       {field: "side"},
       {field: "ticker", headerName:"Ticker"},
       {field: "twentyAdv", headerName: "20d Adv%"},
       {field: "pm", headerName:"PM", editable:true},
       {field: "exp", editable: true },
       {field: "grossExp"},
       {field: "netExp"},
       {field: "threeWKBetaNetExp", headerName: "3wkBetaNetExp"},
       {field: "sixMDBetaNetExp", headerName:"6mdBetaNetExp"},
       {field: "twoYWBetaNetExp", headerName: "2YwBetaNetExp"},
       {field: "livePL", headerName: "liveP/L"},
       {field: "longPL", headerName: "longP/L"}
     ]
   }
  },
  methods:{
    onReady(params){
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      const updateData = data => {
        console.log("Update Data", params);
      };

    //   updateData()
    // this.dataChanges(this.rowData);
    // setInterval(this.secUpdates, 1000);
    },

    onExportExcel(){
      this.gridApi.exportDataAsExcel()
    },
    onRowClicked(event) {
      var strWindowFeatures = 'width=880, height=600'
      window.open('http://localhost:8080/tradeticket', 'New Trade Ticket', [strWindowFeatures])
      console.log('onRowClicked: ' + event.node.data.side);
    },
    onResetGrid(){
      this.gridApi.setFilterModel(null);
      this.gridApi.onFilterChanged();
      this.gridApi.setSortModel(null);
      this.tickerSelected = null;

    },
    dataChanges(rowData){
      for(let i = 0; i < 5; i++){
        let index = Math.floor(rowData.length * Math.random());
        let dataItem = rowData[index];

        rowData.push({
          rowIndex: index,
          columnId: 'grossExp',
          newValue: dataItem.grossExp
        });

      }
      console.log("Row Data", rowData)
    },
    secUpdates(){
      let updatedItems = [];
      if(this.gridApi){
        // this.gridApi.forEachNodeAfterFilterAndSort(function(rowNode, index){
        //   let data = rowNode.data;
        //   data.grossExp = Math.floor(Math.random() * 10000);
        //   updatedItems.push(data);
        //   this.gridApi.updateRowData({update: updatedItems});
          // console.log("Row Node + Index", index)
        // })
      }

    }
  },
  computed:{
    gridOptions: function(){
      let gridOptions = {};
      gridOptions.rowData = this.rowData;
      gridOptions.columnDefs = this.columnDef;
      gridOptions.enableFilter = true;
      gridOptions.enableSorting = true;
      gridOptions.singleClickEdit = true;
      gridOptions.rowBuffer = 50;
      gridOptions.rowSelection = 'single';
      return gridOptions;
    }
  },
  created(){
    this.rowData = [];
    for(let i = 0; i < 10; i++){
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
        longPL: Math.floor(Math.random() * 10000)
      })
    }
  },
  watch:{
    tickerSelected:function(data){
      this.gridApi.setQuickFilter(data);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
