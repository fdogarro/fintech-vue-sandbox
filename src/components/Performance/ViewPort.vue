  <template>
  <v-container fluid grid-list-md>
    <ag-grid-vue style="width: 100%; height: 450px;" class="ag-fresh"
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
import {MockServer} from './SecondMockServer.js';
import {ViewportDatasource} from './viewDataSource.js';
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
          {
           headerName: "Account Number",
           width: 50,
           cellRenderer: "rowIdRenderer"
         },
         {
           headerName: "Position Code",
           field: "code",
           width: 70,
           editable:true
         },
         {
           headerName: "Account",
           field: "name",
           width: 300
         },
         {
           headerName: "Price",
           field: "bid",
           width: 150,
           cellClass: "cell-number",
           cellRenderer: "agAnimateShowChangeCellRenderer"
         },
         {
           headerName: "Mid",
           field: "mid",
           width: 150,
           cellClass: "cell-number",
           cellRenderer: "agAnimateShowChangeCellRenderer"
         },
         {
           headerName: "Ask",
           field: "ask",
           width: 150,
           cellClass: "cell-number",
           cellRenderer: "agAnimateShowChangeCellRenderer"
         },
         {
           headerName: "Volume",
           field: "volume",
           width: 150,
           cellClass: "cell-number",
           cellRenderer: "agAnimateSlideCellRenderer"
         }
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
         server.init(data);
         let dataSource = new ViewportDatasource(server, params);
         // console.log("Server and Params", server)
         params.api.setViewportDatasource(dataSource);
       };
       // updateData(combined);

       axios.get('https://rawgit.com/ag-grid/ag-grid-docs/master/src/stocks.json')
         .then(function(res){
           console.log("Response", res.data[0])
           updateData(res.data)
         })
     }
    },
    beforeMount() {
        this.gridOptions = {
          enableFilter: true,
          columnDefs: this.createColumnDefs(),
          enableServerSideSorting: true,
          enableServerSideFilter: true,
          rowModelType:'viewport',
          defaultColDef: {
            suppressFilter: true,
            width: 100
          },
        };
    }
}



</script>
