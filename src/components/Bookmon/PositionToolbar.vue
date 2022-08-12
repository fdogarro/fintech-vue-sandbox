<template>
  <div>
    <v-toolbar :height="70" class="grey darken-4">
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
      <v-btn small color="grey darken-4" @click="dialog3 = true">Launch Chart</v-btn>
      <v-btn small color="grey darken-4" @click="onResetGrid">Reset Positions</v-btn>
      <v-btn small color="grey darken-4" @click="startExcelService">Launch Excel</v-btn>
    </v-toolbar>

    <v-dialog v-model="dialog3" max-width="1000px">
       <v-card>
         <charting/>
       </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex';
import {ExcelApplication} from '../../extensions/openfin.excel/ExcelApplication.js';
import Charting from './Charting/Charting.vue';

export default {
  components:{
    charting:Charting
  },
  data () {
    return {
      tickerSelected:null,
      tickers: ["@CASHAUD", "@CASHCAD", "@CASHEUR", "@CASHGBP", "@CASHHKD", "@CASHJPY", "@CASHNZD", "@CASHSGD"],
      dialog3:false
    }
  },
  computed:{
    ...mapGetters({
        allGridData:'allGridData',
        gridParams: 'gridParams'
    }),
  },
  methods: {
    onResetGrid(){
      console.log("Grid Params", this.gridParams)
      this.gridParams.api.setFilterModel(null);
      this.gridParams.api.onFilterChanged();
      this.gridParams.api.setSortModel(null);
      this.gridParams.columnApi.resetColumnGroupState();
      this.tickerSelected = null;
    },
    startExcelService(){
      if(typeof fin !== undefined){
        let excelApp = new ExcelApplication("886834D1-4651-4872-996C-7B2578E953B9");
        excelApp.init()
        excelApp.run()
      }

    }
  },
  watch:{
    tickerSelected:function(data){
      this.gridParams.api.setQuickFilter(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
