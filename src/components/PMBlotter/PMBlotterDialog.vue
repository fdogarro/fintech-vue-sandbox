<template>
    <v-container class="fluid grid-list-md">
      <v-toolbar color="grey darken-4">
        <v-toolbar-title
          class="white--text title">
          Pending
        </v-toolbar-title>
        <v-icon class="deskblotter-settings">settings</v-icon>
        <v-checkbox
            v-for="status in statusBoxes"
            class="deskblotter-checkbox"
           :label="status.label"
           :key="status.label"
           v-model="status.model"
         ></v-checkbox>
           <v-menu offset-y>
             <v-btn
               slot="activator"
               color="grey darken-4"
               dark>
               Trade Tickets
             </v-btn>
             <v-list>
               <v-list-tile
                 v-for="(item, index) in tradeOptions"
                 :key="index"
                 v-on:click="selectBlotterApp"
               >
                 <v-list-tile-title>{{ item.title }}</v-list-tile-title>
               </v-list-tile>
             </v-list>
           </v-menu>
           <v-btn small icon dark @click.stop.prevent="closeDeskBlotter">
             <v-icon>close</v-icon>
           </v-btn>

      </v-toolbar>
      <v-card class="grey darken-4">
        <ag-grid-vue style="width: 100%; height: 150px;"
                     :gridOptions="gridData"
                     :gridReady="deskBlotterReady"
                     :toolPanelSuppressSideButtons="true"
                     class="ag-theme-balham-dark">
        </ag-grid-vue>
      </v-card>
      <v-toolbar color="grey darken-4">
        <v-toolbar-title class="white--text title">Working</v-toolbar-title>
        <v-spacer></v-spacer>

      </v-toolbar>
      <v-card class="grey darken-4">
        <ag-grid-vue style="width: 100%; height: 150px;"
                     :gridOptions="fundsOptions"
                     :gridReady="onGridReady"
                     :toolPanelSuppressSideButtons="true"
                     class="ag-theme-balham-dark">
        </ag-grid-vue>
      </v-card>
      <v-toolbar color="grey darken-4">
        <v-toolbar-title class="white--text title">Completed</v-toolbar-title>
        <v-spacer></v-spacer>

      </v-toolbar>
      <v-card class="grey darken-4">
        <ag-grid-vue style="width: 100%; height:150px"
                     :gridOptions="fundsOptions"
                     :gridReady="onGridReady"
                     :toolPanelSuppressSideButtons="true"
                     class="ag-theme-balham-dark">
        </ag-grid-vue>
      </v-card>
    </v-container>

</template>

<script>
import _ from 'lodash';
import MainToolbar from '../MainToolbar';
import { AgGridVue } from 'ag-grid-vue';
import {gridConfigMixins} from '../../ag-mixins.js';
import { mapGetters } from 'vuex';

export default {
  props:['gridData', 'closeDeskBlotter', 'deskBlotterReady', 'selectBlotterApp'],
  components: {
      'Main-Toolbar': MainToolbar,
      'ag-grid-vue': AgGridVue
  },
  mixins:[gridConfigMixins],
  data () {
    return {
      statusBoxes:[
       {
         label: 'Pending',
         model: true
       },
       {
         label:'Working',
         model:false
       },
       {
         label:'Completed',
         model:false
       }
     ],
     tradeOptions: [
      { title: 'Trade Ticket' },
      { title: 'Quick Trade' }
     ]
    }
  },
  computed:{
    ...mapGetters({
        tradeData:'tradeData'
    }),
    fundsOptions(){
      let gridOptions = {};
      gridOptions.rowData = this.deskBlotterMock();
      gridOptions.columnDefs = this.deskBlotterColDef();
      gridOptions.rowHeight = 35;
      gridOptions.enableFilter = false;
      gridOptions.defaultColDef = {
        width: 90,
        tooltip:(obj) =>{
          return obj.value;
          // console.log("Value", value)
        }
      };
      return gridOptions;
    }
  },
  methods: {
    onGridReady(params){
      // this.gridApi = params.api;
      // console.log("Desk Blotter ", params);
      // setInterval(this.onTBD, 1000)
    }
  },
  created(){
    fin.desktop.InterApplicationBus.subscribe("main-dash", "trade ticket row", (message, uuid, name) =>{
      console.log("Trade Loaded", message, uuid, name);
    })
    console.log("Fin", fin.desktop)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .deskblotter-settings{
    margin-left:35px;
    margin-right:25px;
  }
  .deskblotter-checkbox{
    margin-top:30px;
    margin-left:45px;
  }
</style>
