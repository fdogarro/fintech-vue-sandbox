<template>
   <v-layout row wrap class="grey darken-4">
     <v-flex xs12>
       <div>
         <ag-grid-vue
                      :gridOptions="fundsOptions"
                      :gridReady="onGridReady"
                      :toolPanelSuppressSideButtons="true"
                      rowHeight="35"
                      enableFilter="false"
                      class="ag-theme-balham-dark fund-grid">
         </ag-grid-vue>
       </div>
     </v-flex>
   </v-layout>
</template>

<script>
/* eslint-disable */
import {AgGridVue} from "ag-grid-vue";
import _ from 'lodash';
import {gridConfigMixins} from '../../ag-mixins.js';
export default {
  name: 'fund-section',
  components:{
    'ag-grid-vue': AgGridVue
  },
  mixins:[gridConfigMixins],
  data () {
    return {
      selectedFund: null,
      fundGridRowStyles:{
        background: '#FFFDE7',
        color: 'black'
      }
   }
  },
  methods: {
    onGridReady(params){
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;
      setInterval(this.modelUpdated, 3000)
    },
    modelUpdated(){
      let itemsToUpdate = [];
      this.gridApi.forEachNodeAfterFilterAndSort((rowNode, index) => {
      let data = rowNode.data;
      for(let column in data){
        if(data.hasOwnProperty(column)){
            switch(column){
              case 'day':
                data[column] = _.sample(["-653,477", "-662,350", "658,784", "657,899"]);
                break;
              case 'longPL':
                data[column] = _.sample(["1,127,469", "1,124,629", "-1,121,322", "-1,120,945"]);
                break;
             case 'shortPL':
                data[column] = _.sample(["470,797", "-470,194", "-469,813", "-470,156"]);
                break;
             case 'NET Exp':
                data[column] = _.sample(["14,653,477", "14,662,350", "14,658,784", "14,657,899"]);
                break;
            case 'Long Exp':
                data[column] = _.sample(["71,127,469", "72,124,629", "70,121,322", "71,120,945"]);
                break;
            case 'Short Exp':
                data[column] = _.sample(["57,319,221", "57,319,054", "57,319,658", "57,319,018"]);
                break;
            case 'Short Exp':
                data[column] = _.sample(["129,031,672", "129,031,606", "128,031,470", "127,111,385"]);
                break;
              default:
                 data[column] = _.sample(["13,127,469", "41,124,629", "-9,121,322", "-10,120,945", "8,932,145", "12,714,628", "-4,871,142", "2,185,283"]);
            }
          }
        }

      itemsToUpdate.push(data);
    });
    let res = this.gridApi.updateRowData({ update: itemsToUpdate });
    },
    getFundContextItems(params){
      let self = this;
      let result = []
      return result;
    }
  },
  computed:{
    fundsOptions(){
      let gridOptions = {};
      gridOptions.rowData = this.fundMockData();
      gridOptions.columnDefs = this.fundColDef();
      // gridOptions.rowStyle = this.fundGridRowStyles;
      gridOptions.defaultColDef = {
        width: 120,
        tooltip:(obj) =>{
          return obj.value;
        }
      };
      return gridOptions;
    }
  }
}
</script>

<style>
  .fund-container{
    background:black;
  }
  .fund-grid{
    width: 100%;
    height: 85px;
  }
</style>
