<template>
  <div class="grey darken-4">
    <ag-grid-vue style="width: 100%; height: 250px;"
                 :gridOptions="darkOptions"
                 :rowClicked="onRowClicked"
                 :getContextMenuItems="getStrategyMenuItems"
                 :treeData="true"
                 :animateRows="true"
                 :getDataPath="getDataPath"
                 :enableColResize="true"
                 :enableFilter="false"
                 :enableSorting="false"
                 rowSelection="multiple"
                 :toolPanelSuppressSideButtons="true"
                 :gridReady="onGridReady"
                 row
                 class="ag-theme-balham-dark">
    </ag-grid-vue>
    <v-layout>

    </v-layout>
    <position-toolbar/>
    <lp-tabs :tabConfig="tabConfig"/>
  </div>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue'
import _ from 'lodash';
import XLSX from 'xlsx';
import {ExcelContainer} from '../../OpenFinHelpers/export-excel.js';
import {ExcelApplication} from '../../extensions/openfin.excel/ExcelApplication.js';
import {gridConfigMixins} from '../../ag-mixins.js';
import LPTabs from '../common/LPTabs.vue';
import PositionToolbar from './PositionToolbar.vue'
import { mapGetters, mapActions, mapMutations } from 'vuex';

export default {
  name: 'strategy-section',
  components: {
    'ag-grid-vue': AgGridVue,
    'lp-tabs': LPTabs,
    'position-toolbar':PositionToolbar
  },
  mixins:[gridConfigMixins],
  data () {
    return {
      autoGroupColumnDef:{
        headerName: "Group Name",
        field: "orgHierarchy",
        width: 200,
        cellRenderer: "agGroupCellRenderer",
        cellRendererParams: { checkbox: true }
      },
      tabConfig:[
        { name:'main', value: 'Main'},
        { name:'details', value: 'Portfolio Details'},
        { name:'summary', value: 'Portfolio Summary'},
        { name:'matrix', value: 'Portfolio Matrix'},
        { name:'hedgeview', value: 'Ccy Hedge View'},
        { name:'technical', value: 'Portfolio Technical'}
        // { name:'optionsgreek', value: 'Options Greek'},
        // { name:'metrics', value: 'Portfolio Metrics'},
        // { name:'charting', value: 'Charting'}
      ],
      tradeTicketApp:null,
      content:null,
      tickerSelected:null,
      dataNode:null,
      strategyVal: '',
      fundVal:'',
      tickers: ["GPS", "TSLA", "TAP", "DISCA", "SNI", "CSCO", "ANET", "PANW"]
    }
  },
  methods: {
    getDataPath: function (data) {
      return data.orgHierarchy
    },
    onRowClicked(event){
      this.$store.dispatch('getParamsData', event.node.data)
      if(window.location.pathname === '/'){
        this.positionGridUpdate();
        console.log("Metrics");
      }else if(window.location.pathname === '/metrics'){
        // launchChartView()
        this.$router.push('/metrics')
      }else{
        console.log("Other Screen");
      }

      let strategyNode = event.node.data.orgHierarchy;
      if(strategyNode.length >= 2){
          this.strategyVal = ` - ( Positions for ${strategyNode[strategyNode.length - 1]} in ${strategyNode[0]} )`;
      }else if(strategyNode.length === 1){
          this.strategyVal = ` - ( Positions for ${strategyNode[0]} )`;
      }else{
          this.strategyVal = '';
      }
    },
    onGridReady(params){
      this.gridApi = params.api;
      this.$store.dispatch('strategyGridReady', this.gridApi);
      this.gridColumnApi = params.columnApi;
      // this.gridChanges()
      setInterval(this.gridChanges, 3000);
    },
    refreshSortAndFilter(){
      this.gridApi.refreshInMemoryRowModel("sort");
      this.gridApi.refreshInMemoryRowModel("filter");
    },
    gridChanges(){
      let itemsToUpdate = [];
      this.gridApi.forEachNodeAfterFilterAndSort((rowNode, index) => {
      // if (index >= 15) return;
        let data = rowNode.data;
        for(let column in data){
          // console.log(column, data)
          if(data.hasOwnProperty(column) && column !== 'orgHierarchy'){
            switch(column){
              case 'shortChange':
                data[column] = _.sample(["-0.71%", "0.00%"]);
                break;
              case 'long % chg':
                data[column] = _.sample(["-1.48%", "-1.45%", "-1.46%"]);
                break;
              case 'longpl':
                data[column] = _.sample([1042827, 1042927, 1041951]);
                break;
              case 'livepl':
                data[column] = _.sample([631037, 631555, 631782]);
                break;
              case 'day':
                data[column] = _.sample([631037, 631555, 631782, 631779, 640331, 642820]);
                break;
              case 'shortPL':
                data[column] = _.sample([404170, 404149, 400110]);
                break;
              default:
                 data[column] =  _.sample([13127469, 41124629, 9121322, 10120945, 8932145, 12714628, 4871142, 2185283]);
            }
          }
        }
        // data.dayPNL = Math.floor(Math.random() * 8000000 + 8500000);
        // data.perUO = Math.floor(Math.random() * 4000000 + 4500000);
        // data.UO = Math.floor(Math.random() * 7000000 + 4500000);
        itemsToUpdate.push(data);
      });
      // data.ticker =  _.sample(["GPS", "TSLA", "TAP", "DISCA", "SNI", "CSCO", "ANET", "PANW"])
      let res = this.gridApi.updateRowData({ update: itemsToUpdate });
      this.refreshSortAndFilter()
    },
    changeBinary(b64Data, contentType){
      var sliceSize = 512;
      var byteCharacters = atob(b64Data);
      var byteArrays = [];

   for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
       var slice = byteCharacters.slice(offset, offset + sliceSize);

       var byteNumbers = new Array(slice.length);
       for (var i = 0; i < slice.length; i++) {
           byteNumbers[i] = slice.charCodeAt(i);
       }

       var byteArray = new Uint8Array(byteNumbers);

       byteArrays.push(byteArray);
   }

   var blob = new Blob(byteArrays, {type: contentType});
   return blob;
    },
    onExportExcel(){
      // this.startExcelService()
      // let params = {
      //   // fileName: document.querySelector("#fileName").value
      // }
      // // this.gridApi.exportDataAsExcel();
      // let data = this.gridApi.getDataAsExcel();
      // let workbook = XLSX.read(data, { type: "binary" });
      // let xlsxContent = XLSX.write(workbook, {
      //   bookType: "xlsx",
      //   type: "base64"
      // });
      //
      //
      //
      // this.onDownload(params, xlsxContent)



      // console.log("Blob", xlsxContent)
      // console.log("File Name", data, workbook);
    },
    onDownload(params, content){
      let finApp = fin.desktop.Application.getCurrent();
      var fileNamePresent = params && params.fileName && params.fileName.length !== 0;
      var fileName = fileNamePresent ? params.fileName : params.fileName;
      let blob = this.changeBinary(content, "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet");
      if(window.navigator.msSaveOrOpenBlob){
        window.navigator.msSaveOrOpenBlob(blob, fileName)
      }else{
        var downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = fileName;

        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
      }
      // console.log("Params and Content", params, content, finApp, blob);
    },
    initNewFinApp(path, name){
      let childApp;
      return new Promise(function(resolve, reject){
        try{
          fin.desktop.main(function(){
            new fin.desktop.Window({
              alwaysOnTop: false,
              autoShow: true,
              defaultWidth:880,
              defaultHeight:600,
              defaultCentered: false,
              url: window.location.origin + "/" + path,
              name:name
            })
          })
        }catch(err){
          console.log("Promise Rejected");
        }
      })
    },
    onPositionRowClicked(event) {
      console.log("Position Row", event);
    },
    launchTradeTicket(){
      this.initNewFinApp("tradeticket", "Trade Ticket").then(function(res){
        console.log("child res")
      })
    },
    launchListTrader(){
      this.initNewFinApp("listtrader", "List Trader").then(function(res){
        console.log("child res")
      })
    },
    onResetGrid(){
      this.gridParams.api.setFilterModel(null);
      this.gridParams.api.onFilterChanged();
      this.gridParams.api.setSortModel(null);
      this.tickerSelected = null;
    },
    launchVisualization(){
      this.initNewFinApp("charts", "Select View").then(function(res){
        console.log("child res")
      })
    },
    launchChartView(rowData){
        this.$store.dispatch('getParamsData', rowData)
      if(window.location.pathname === '/metrics'){

        console.log("Metrics");
      }else{
        console.log("Other Screen");
      }
      console.log("Row Data", rowData)
      this.$router.push('/metrics')
      // this.$destroy()
    },
    positionGridUpdate(){
        console.log("Grid Params", this.gridParams)
      let itemsToUpdate = [];
      this.gridParams.api.forEachNodeAfterFilterAndSort((rowNode, index) => {
      if (index >= 15) return;
        let data = rowNode.data;
        for(let column in data){
          if(data.hasOwnProperty(column) && column !== 'orgHierarchy'){
            switch(column){
              case 'side':
                data[column] = _.sample(["SHORT", "LONG"]);
                break;
              case 'ticker':
                data[column] = _.sample(["@CASHAUD", "@CASHCAD", "@CASHEUR", "@CASHGBP", "@CASHHKD", "@CASHJPY", "@CASHNZD", "@CASHSGD"]);
                break;
              case 'pm':
                data[column] = _.sample(["TMT1_LS", "HCR1_LS", "GSQL_LS"]);
                break;
              case 'day || livePL':
                  data[column] = _.sample(["-631,037", "-631,555", "-631,782"]);
                break;
              default:
                 data[column] = Math.floor(Math.random() * 4000000 + 4500000);
            }
          }
        }
        itemsToUpdate.push(data);
      });
      let res = this.gridParams.api.updateRowData({ update: itemsToUpdate });
    },
    getStrategyMenuItems(params){
      this.dataNode = params.node.data;
      this.$store.dispatch('gridOnReady', params.node.data)
      // this.$store.dispatch('getParamsData', this.dataNode)
      console.log("Grid Params", params.node.data)
      let self = this;
      let result = [
      {
        name: "List Trader",
        action(){
          self.launchListTrader()
        },
      },
      {
        name:"Select View",
        action(){
          self.launchVisualization()
        }
      },
      {
        name:"Chart View",
        action(){
          self.launchChartView(params.node.data)
        }
      },

        "export",
        "separator",
        "copy",
        "copyWithHeaders"
      ]
      return result;
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
    },
    deployAddIn(){
      return new Promise((resolve, reject) => {
            console.log('Deploying Add-In');
            fin.desktop.System.launchExternalProcess({
                uuid: 'trade-ticket',
                arguments: '',
                listener: function (args) {
                    console.log('Installer script completed! ' + args.exitCode);
                    resolve();
                }
            });
        });
    },
    startExcelService(){
      let excelApp = new ExcelApplication("886834D1-4651-4872-996C-7B2578E953B9");
      excelApp.init()
      excelApp.run()
    }

  },
  computed: {
    ...mapGetters({
        allGridData:'allGridData',
        gridParams: 'gridParams'
    }),
    darkOptions: function () {
      let gridOptions = {}
      gridOptions.rowData = this.strategyMockData();;
      gridOptions.columnDefs = this.quickViewColDef();
      gridOptions.enableFilter = false;
      gridOptions.autoGroupColumnDef = {
        headerName:"Group Name",
        width:200,
        cellRendererParams: {
         suppressCount: true,
         padding: 20
       }
      };
      gridOptions.defaultColDef = {
        width: 120,
        headerTooltip:true,
        tooltip:(obj) =>{
          return obj.value;
        }

      };
      return gridOptions
    }
  }
}
</script>

<style scoped>
</style>
