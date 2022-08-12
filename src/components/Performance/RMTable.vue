<template>
  <v-container fluid grid-list-md>
    <ag-grid-vue style="width: 100%; height: 300px;" class="ag-fresh"
                 :gridOptions="gridOptions"
                 :gridReady="onReady"
                 :rowSelected="onRowSelected">
    </ag-grid-vue>
  </v-container>
</template>

<script>
import Vue from 'vue';
import {AgGridVue} from 'ag-grid-vue';
// import {tableMixins} from './mixins.js';
import {DataSource, MockServer} from './MockServer.js';
import axios from 'axios';
import {randomizeBlotterMixin} from '../../mixins.js';

export default {
  data(){
    return{
      gridOptions:null
    }
  },
  components:{
    'ag-grid-vue': AgGridVue
  },
  mixins: [randomizeBlotterMixin],
  methods: {
      createColumnDefs() {
        return [
         { headerName: 'Account', field: 'account', enableRowGroup:true },
         { headerName: 'Trader', field: 'trader', enableRowGroup:true },
         { headerName: 'Strategy', field: 'strategy', enableRowGroup: true, rowGroup: true},
         { headerName: 'Counterparty', field: 'counterparty', enableRowGroup: true, rowGroup: true},
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
      ]

    },
    onRowSelected(){
      console.log("Row Selected");
      // this.openTradeTicket();
    },
    openTradeTicket () {
      var strWindowFeatures = 'width=880, height=600'
      window.open('http://localhost:8080/tradeticket', 'New Trade Ticket', [strWindowFeatures])
    },
    onReady(params){
      let newData = this.mock500k();
      let secondSet = this.mock500k();
      let combined = newData.concat(secondSet);
       const updateData = data => {
         let server = new MockServer(data);
         let dataSource = new DataSource(server, params);
         console.log("Server and Params", server, params)
         params.api.setEnterpriseDatasource(dataSource);
       };
       updateData(combined);

       // axios.get('https://rawgit.com/fdogarro/aefffd59a68a3f7cf844d8dc190151bd/raw/72a152fa5cffead31b46c734b57d996ebde27513/finance.json')
       //   .then(function(res){
       //     console.log("Response", res.data[0])
       //     updateData(res.data)
       //   })
     }
    },
    beforeMount() {
        this.gridOptions = {
          enableFilter: true,
          columnDefs: this.createColumnDefs(),
          enableServerSideSorting: true,
          enableServerSideFilter: true,
          rowModelType:'enterprise',
          defaultColDef: {
            suppressFilter: true,
            width: 100
          },
        };
    }
}



</script>
