<template>
    <v-container class="fluid grid-list-md" style="padding:0px;">
        <ag-grid-vue style="width: 100%; height: 85px;"
                     :gridOptions="fundsOptions"
                     :gridReady="onGridReady"
                     :getContextMenuItems="getFundContextItems"
                     :getMainMenuItems="getFundColumnItems"
                     :toolPanelSuppressSideButtons="true"
                     class="ag-theme-balham-dark">
        </ag-grid-vue>
        <ag-grid-vue style="width: 100%; height: 160px;"
                     :gridOptions="fundsGroupOptions"
                     :treeData="true"
                     :animateRows="true"
                     :getDataPath="getDataPath"
                     :enableColResize="true"
                     :enableFilter="false"
                     :enableSorting="false"
                     rowSelection="multiple"
                     :toolPanelSuppressSideButtons="true"
                     class="ag-theme-balham-dark">
        </ag-grid-vue>
    </v-container>
</template>

<script>
import _ from 'lodash';
import { AgGridVue } from 'ag-grid-vue';
import {gridConfigMixins} from '../../ag-mixins.js';


export default {
  components: {
    'ag-grid-vue': AgGridVue
  },
  mixins:[gridConfigMixins],
  data () {
    return {
      autoGroupColumnDef:{
        headerName:"Parent",
        width:200,
        cellRendererParams: {
         suppressCount: true,
         padding: 20
       }
     }
    }
  },
  computed:{
    fundsOptions(){
      let gridOptions = {};
      gridOptions.rowData = this.fundMockData();
      gridOptions.columnDefs = this.allocColDef();
      gridOptions.rowHeight = 35;
      gridOptions.autoGroupColumnDef =
      // gridOptions.rowStyle = {
      //   background: '#FFF',
      //   color: '#383838'
      // };
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
    fundsGroupOptions(){
      let gridOptions = {};
      gridOptions.rowData = this.allocGroupData();
      gridOptions.columnDefs = this.allocGroupColDef();
      gridOptions.rowHeight = 35;
      gridOptions.autoGroupColumnDef = this.autoGroupColumnDef;
      // gridOptions.rowStyle = {
      //   background: '#FFF',
      //   color: '#383838'
      // };
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
  methods: {
    getDataPath: function (data) {
      console.log("Allocation", data)
      return data.parent;
    }
  },
  created(){
    fin.desktop.InterApplicationBus.subscribe("main-dash", "trade ticket row", (message, uuid, name) =>{
      console.log("Trade Loaded", message, uuid, name)
    })
    console.log("Fin", fin.desktop)
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
</style>
