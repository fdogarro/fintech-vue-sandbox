<template>
    <v-container fluid grid-list-md>
        <ag-grid-vue style="width: 100%; height: 350px;" class="ag-fresh"
                     :gridOptions="gridOptions"
                     :gridReady="onReady"
                     :rowSelected="onRowSelected">
        </ag-grid-vue>
        <rm-table />
        <!-- <view-port/> -->

    </v-container>

    </div>
</template>

<script>
  import Vue from 'vue';
  import {AgGridVue} from 'ag-grid-vue';
  import axios from 'axios';
  import RMTable from './RMTable';
  import ViewPort from './ViewPort';
  import {randomizeBlotterMixin} from '../../mixins.js';

  export default {
      name:'InfiniteTable',
      data() {
          return {
              gridOptions: null,
              text: null
          }
      },
      components: {
          'ag-grid-vue': AgGridVue,
          'rm-table': RMTable,
          'view-port': ViewPort
      },
      mixins: [randomizeBlotterMixin],
      methods: {
          createColumnDefs() {
            return [
             { headerName: 'Account', field: 'account'},
             { headerName: 'Trader', field: 'trader'},
             { headerName: 'Strategy', field: 'strategy'},
             { headerName: 'Counterparty', field: 'counterparty'},
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
          onRowSelected(event){

          },
          onReady(params){
            let newData = this.mock500k();
            let secondSet = this.mock500k();
            let combined = newData.concat(secondSet);
             const updateData = data => {
               let dataSource = {
                 rowCount: null,
                 getRows: function(params){
                   setTimeout(function() {
                     var rows = data.slice(params.startRow, params.endRow);
                     var lastRow = -1;
                     if (data.length <= params.endRow) {
                       lastRow = data.length;
                     }
                     params.successCallback(rows, lastRow);
                   }, 500);
                 }
               };
               params.api.setDatasource(dataSource);
             };
             axios.get('https://rawgit.com/fdogarro/aefffd59a68a3f7cf844d8dc190151bd/raw/72a152fa5cffead31b46c734b57d996ebde27513/finance.json')
               .then(function(res){
                 // let responseData = res;
                 // let updatedData = res.concat(newData);
                 console.log("Response", res.data[0])

               })

            updateData(combined)

          }
      },
      beforeMount() {
        this.gridOptions = {
          enableFilter: true,
          columnDefs: this.createColumnDefs(),
          enableServerSideSorting: true,
          enableServerSideFilter: true,
          rowModelType:'infinite'
        };
    }
  }
</script>

<style>
</style>
