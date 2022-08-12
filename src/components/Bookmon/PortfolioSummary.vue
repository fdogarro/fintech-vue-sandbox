<template>
  <v-container fluid class="portfolio-summary-container">
   <v-layout row wrap>
     <v-flex d-flex xs12 sm6 md4>
         <v-layout row wrap>
           <v-flex d-flex>
             <v-layout row wrap>
               <v-flex
                 v-for="item in longColData"
                 :key="item.header"
                 d-flex
                 xs12>
               <v-card dark>
                 <v-card-text><h3 class="portfolio-summary-grid-headers">{{ item.header }}</h3></v-card-text>
                 <ag-grid-vue
                              :gridOptions="fundsOptions"
                              :getContextMenuItems="getFundContextItems"
                              :getMainMenuItems="getFundColumnItems"
                              :toolPanelSuppressSideButtons="true"
                              class="ag-theme-balham-dark portfolio-summary-grid">
                 </ag-grid-vue>
               </v-card>
               </v-flex>
             </v-layout>
           </v-flex>
         </v-layout>
    </v-flex>
    <v-flex d-flex xs12 sm6 md4>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row wrap>
              <v-flex
                v-for="item in shortColData"
                :key="item.header"
                d-flex
                xs12>
              <v-card dark>
                <v-card-text><h3 class="portfolio-summary-grid-headers">{{ item.header }}</h3></v-card-text>
                <ag-grid-vue
                             :gridOptions="fundsOptions"
                             :gridReady="onGridReady"
                             :getContextMenuItems="getFundContextItems"
                             :getMainMenuItems="getFundColumnItems"
                             :toolPanelSuppressSideButtons="true"
                             class="ag-theme-balham-dark portfolio-summary-grid">
                </ag-grid-vue>
              </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
   </v-flex>

   <v-flex d-flex xs12 sm6 md3>
      <v-card dark>
        <v-card-text><h3 class="portfolio-summary-grid-headers">Portfolio Summary</h3></v-card-text>
        <ag-grid-vue
                     :gridOptions="fundsOptions"
                     :getContextMenuItems="getFundContextItems"
                     :getMainMenuItems="getFundColumnItems"
                     :toolPanelSuppressSideButtons="true"
                     class="ag-theme-balham-dark portfolio-summary-grid">
        </ag-grid-vue>
      </v-card>
    </v-flex>
   </v-layout>
 </v-container>
</template>

<script>
/* eslint-disable */
import {AgGridVue} from "ag-grid-vue";
import {gridConfigMixins} from '../../ag-mixins.js';
export default {
  components:{
    'ag-grid-vue': AgGridVue
  },
  mixins:[gridConfigMixins],
  data () {
    return {
      longColData:[
        {
          header: 'Best Long'
        },
        {
          header:'Worst Long'
        },
        {
          header: 'Largest Long Exp'
        },
        {
          header: 'Largest Long % Chg'
        },
        {
          header: 'Top Industry P&L'
        }
      ],
      shortColData:[
        {
          header: 'Best Short'
        },
        {
          header:'Worst Short'
        },
        {
          header: 'Largest Short Exp'
        },
        {
          header: 'Largest Short % Chg Exp'
        },
        {
          header: 'Top MarketCap P&L'
        }
      ]
   }
  },
  methods: {
    onGridReady(params){
      this.gridApi = params.api;
      this.gridColumnApi = params.columnApi;

    },
    getFundContextItems(params){
      let self = this;
      let result = [];
      return result;
    }
  },
  computed:{
    fundsOptions(){
      let gridOptions = {};
      gridOptions.rowData = this.summaryData();
      gridOptions.columnDefs = this.summaryColDef();
      gridOptions.rowHeight = 35;
      gridOptions.enableFilter = false;
      gridOptions.defaultColDef = { width: 100};
      return gridOptions;
    }
  }
}
</script>

<style scoped>
  .portfolio-summary-container{
    border:1px solid #212121;
    background:#424242;
  }
  .portfolio-summary-grid-headers{
    text-align:center;
    color:#eee;
    margin-top:0px;
  }
  .portfolio-summary-grid{
    width: 100%;
    height: 85px;
  }
</style>
