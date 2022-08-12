<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
         <ag-grid-vue class="ag-theme-balham-dark position-grid"
                      :gridOptions="gridOptions"
                      :gridReady="onReady"
                      :rowClicked="onPositionRowClicked"
                      :getContextMenuItems="getPositionMenuItems"
                      :toolPanelSuppressSideButtons="true">
         </ag-grid-vue>
       </v-flex>
     </v-layout>

       <quick-trader
        :symbolData="tickerData"
        :dialog2="dialog"
        :sendAction="sendTrade"
        :tradeConfirm="tradeDialog"
        :tradeConfirmModel="tradeConfirmDialog"
        :closeTradeTicket="closeDialog"
        :primaryButtons="quickTradePrimary"
        :secondaryButtons="quickTradeSecondary"
        :onTradingAction="onQuickTradeActions"
        :onHotKey="onQuickTradeHotKey"
        :resetAction="onQuickTradeReset"
        :quantHotKey="quickTradeHotKey"
        :quantityVal="quickTradeQuantity">
      </quick-trader>

        <trade-ticket
          :launchTicketDialog="launchTrade"
          :tradeClosed="closeTradeTicketDialog"
          :primaryButtons="mainButtons"
          :secondaryButtons="quantityButtons"
          :tradeDialogConfirm="tradeTicketConfirm"
          :confirmationModel="tradeTicketConfirmModel"
          :tradeDialogReset="resetTradeForm"
          :quantHotKey="ticketHotKey"
          :tradeMap="ticketMapping"
          :tradeOptions="ticketOptions"
          :onHotKey="onHotKeySelect"
          :onTradingAction="onTradingActionSelect"
          :symbolItems="symbolButtons"
          :getSymbolData="onSymbolKey"
          :getSelectedBlotter="testBlotter"
          :launchDeskBlotter="launchSelectBlotter"
          :tradeSubmissionData="deskBlotterOpts"
          :deskBlotterClosed="onDeskBlotterClose"
          :onDeskBlotterGrid="onReadyDeskBlotterGrid"
          :onSelectBlotterApp="deskBlotterSelect"
          :detailGroupSelect="detailGroupSelectedBlotter">
        </trade-ticket>

  </div>

</template>

<script>
import {AgGridVue} from 'ag-grid-vue';
import {gridConfigMixins} from '../../ag-mixins.js';
import {portfolioSectionMixins} from '../../portfolio-section-mixins.js';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import QuickTrader from '../QuickTrader/QuickTradeDialog.vue';
import TradeTicket from '../TradeTicket/TradeTicketDialog.vue';


export default {
  name: 'Portfoliio',
  components:{
    'ag-grid-vue': AgGridVue,
    'quick-trader': QuickTrader,
    'trade-ticket': TradeTicket
  },
  mixins:[gridConfigMixins, portfolioSectionMixins],
  data () {
    return {

   }
  },
  methods: {
    detailGroupSelectedBlotter(evt){
      const selectedBlotter = evt.target.innerHTML;
      this.launchTrade = false;
      this.launchSelectBlotter = true;
      console.log("Detail Group", evt);
    },
    deskBlotterSelect(evt){
      const selected = evt.target.innerHTML;
      if(selected === 'Trade Ticket'){
        this.launchTrade = true;
      }

      // else{
      //   this.dialog = true;
      //   this.tickerData = params.node.data.ticker;
      //   this.quickTradeVals['symbol'] = params.node.data.ticker;
      // }
      this.launchSelectBlotter = false;
      console.log("Blotter App", selected)
    },
    onReadyDeskBlotterGrid(params){
      this.deskBlotterGridApi = params.api;
    },
    addTradeData(newTrade){
      this.deskBlotterGridApi.updateRowData({ add: newTrade})
    },
    testBlotter(evt){
      console.log("Select Blotter", this.launchSelectBlotter);
      this.launchTrade = false;
      this.launchSelectBlotter = true;
      // let selectedBlotter = evt.target.innerText;
      // if(selectedBlotter === 'PM Blotter'){
      //   this.launchTrade = true;
      //   // this.dialog2 = true;
      //   // this.launchChildApp()
      // }else if(selectedBlotter === 'Desk Blotter'){
      //   this.launchDesk()
      // }


    },
    onDeskBlotterClose(){
      this.launchSelectBlotter = false;
    },
    onQuickTradeActions(evt){
      console.log("Quick Trade Actions")
        const button = evt.target.innerHTML;
        this.quickTradeHotKey = evt.target.innerText.toLowerCase();
        this.quickTradeVals['type'] = button.toUpperCase();
        this.quickTradePrimary.forEach((item)=>{
          if(item.name === button){
            item.disable = true;
          }else{
            item.disable = false;
          }
        })

        console.log("Quick Trade Actions___", button, this.quickTradeHotKey)
    },
    onQuickTradeHotKey(evt){
      const button = _.toNumber(evt.target.innerHTML);
      this.quickTradeQuantity = button;
        this.quickTradeSecondary.forEach((item)=>{
          if(item.value === button){
            item.disable = true;
          }else{
            item.disable = false;
          }
        })
      this.quickTradeVals['quantity'] = button;
      console.log("Quick Trade Hot Key", button)
    },
    onQuickTradeReset(evt){
      console.log("Quick Trade Reset");
        this.quickTradeHotKey = '';
        this.quickTradeQuantity = null;
        this.quickTradeVals = Object.assign({
          symbol:'',
          dest:'LP',
          user:'jon.withaar',
          time: Date.now(),
          route:'EMSX',
          portfolio:'ASIA_FOCUS'
        })
        this.quickTradeSecondary.forEach((item)=> item.disable = false)
        this.quickTradePrimary.forEach((item)=> item.disable = false)
    },
    onSymbolKey(evt){
     const symbol = evt.target.innerText.toUpperCase();
     const symbolObj = _.find(this.symbolButtons, (obj) => obj.symbol === symbol);
     this.ticketMapping = Object.assign(symbolObj);
   },
    onHotKeySelect(evt){
      console.log("Hot Selected", this.ticketMapping, this.ticketOptions, this.ticketHotKey);
      this.ticketHotKey = evt.target.innerText;
      this.ticketMapping['quantity'] = evt.target.innerText;
    },
    onTradingActionSelect(evt){
      this.ticketOptions['type'] = evt.target.innerText;
      this.ticketMapping['type'] = evt.target.innerText;
    },
    tradeTicketConfirm(evt){
      // this.ticketMapping = Object.assign(this.ticketOptions, this.symbolObj);
      const selected = evt.target.innerText;
      // this.confirmationMap = [];
      this.tradeTicketConfirmModel = true;
      if(selected === 'NO'){
        this.tradeTicketConfirmModel = false;
      }else if(selected === 'YES'){
        this.tradeTicketConfirmModel = false;
        this.launchTrade = false;
        // this.confirmationMap.push(this.ticketMapping)
        this.addTradeData([this.ticketMapping])
        this.launchSelectBlotter = true;
        console.log("Trade Confirmation", this.ticketMapping, this.confirmationMap);
        this.resetTradeForm()
      }


    },
    closeTradeTicketDialog(){
      this.launchTrade = false;
    },
    closeDialog(){
      this.dialog = false;
    },
    tradeDialog(evt){
      const selectedBtn = evt.target.innerText;
      this.tradeConfirmDialog = true;
      if(selectedBtn === "NO"){
        this.tradeConfirmDialog = false;
      }
    },
    sendTrade(){
      this.tradeConfirmDialog = false;
      this.dialog = false;
      // this.quickTradeVals['symbol'] =
      this.addTradeData([this.quickTradeVals])
      this.onQuickTradeReset()
      this.launchSelectBlotter = true;
      console.log("Confirmed")
    },
    resetTradeForm(){
      console.log("Reset Form");
      this.ticketHotKey = '';
      this.ticketMapping = Object.assign({
        symbol:'',
        dest:'LP',
        user:'jon.withaar',
        time: Date.now()
      });
      this.ticketOptions = { type:null };
    },
    refreshSortAndFilter(){
      this.gridApi.refreshInMemoryRowModel("sort");
      this.gridApi.refreshInMemoryRowModel("filter");
    },
    onReady(params){
      console.log("Params", params)
      this.gridApi = params.api;
      this.positionsApi = params.api;
      this.$store.dispatch('gridOnReady', params)
      // setInterval(this.positionGridUpdate, 1200);
    },
    initNewFinChildApp(path, name){
      const childApp = null;
      return new Promise(function(resolve, reject){
        try{
          fin.desktop.main(function(){
            new fin.desktop.Window({
              alwaysOnTop: true,
              autoShow: true,
              defaultCentered: false,
              defaultWidth: 275,
              defaultHeight: 275,
              maxWidth:275,
              maxHeight:275,
              minWidth:275,
              minHeight:275,
              url: window.location.origin + '/' + path,
              name:name
            })
            resolve()
          })
        }catch(err){
          console.log("Promise Rejected");
        }
      })
    },
    initNewFinApp(path, name){
      const childApp = null;
      return new Promise(function(resolve, reject){
        try{
          fin.desktop.main(function(){
            new fin.desktop.Window({
              alwaysOnTop: true,
              autoShow: true,
              defaultCentered: false,
              defaultWidth: 1000,
              defaultHeight: 290,
              maxWidth:1000,
              maxHeight:290,
              minWidth:1000,
              minHeight:290,
              url: window.location.origin + '/' + path,
              name:name
            })
             resolve()
          })
        }catch(err){
          console.log("Promise Rejected");
        }
      })
    },
    positionGridUpdate(){
      // this.onResetGrid()
      const itemsToUpdate = [];
      this.gridApi.forEachNodeAfterFilterAndSort((rowNode, index) => {


        const data = rowNode.data;
        for(const column in data){
          if(data.hasOwnProperty(column) && column !== 'side' && column !== 'ticker'
          && column !== 'securityType' && column !== 'baseCCY' && column !== 'riskCCY'
          && column !== 'adminSettleCCY' && column !== 'pm' && column !== 'sector' && column !== 'industryGroup' && column !== 'industry'
        ){
            switch(column){
              case 'sector':
                data[column] = _.sample(["Non Corporate", "Consumer Staples", "Industrials", "Consumer Discretionary", "Materials", "Health Care", "Information Technology"]);
                break;
              case 'ticker':
                data[column] = _.sample(["GPS", "TSLA", "TAP", "DISCA", "SNI", "CSCO", "ANET", "PANW"]);
                break;
              case 'securityType':
                data[column] = _.sample(["CASH", "ETP", "EQUITY SWAP", "COMMON STOCK", "ADR", "PHYSICAL INDEX FUTURE"]);
                break;
              case 'baseCCY':
                data[column] =  _.sample(["AUD", "CAD", "EUR", "GBP", "HKD", "JPY", "NZD", "SGD", "USD"]);
                break;
              case 'riskCCY':
                data[column] =  _.sample(["AUD", "CAD", "EUR", "GBP", "HKD", "JPY", "NZD", "SGD", "USD"]);
                break;
              case 'adminSettleCCY':
                data[column] =  _.sample(["AUD", "CAD", "EUR", "GBP", "HKD", "JPY", "NZD", "SGD", "USD"]);
                break;
              case 'pm':
                data[column] = _.sample(["TMT1_LS", "HCR1_LS", "GSQL_LS"]);
                break;
              case 'perUO':
                  data[column] = _.sample(["0.04%", "0.02%", "0.23%", "0.38%", "0.15%", "1.18%"]);
                break;
              default:
                 data[column] = Math.floor(Math.random() * 4000000 + 4500000);
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
      // let newRows = [this.createRowData(), this.createRowData(), this.createRowData()];
      // this.gridApi.updateRowData({ add: newRows });
      // this.refreshSortAndFilter()
    },
    onPositionRowClicked(event) {

      // this.tickerData = event.data.ticker;
      // this.dialog = true;
      // console.log("Row Clicked", event.data.ticker)

      //   this.positionGridUpdate()
      // console.log("Position Row", event, this.gridApi, this.gridOptions.columnDefs);
    },
    createChartData(){

    },
    launchDeskBlotter(params){
      this.tickerData = params.node.data.ticker;
      this.quickTradeVals['symbol'] = params.node.data.ticker;
      this.launchSelectBlotter = true;
    },
    launchTradeTicket(params){
      console.log("Trade Params", params)
      this.launchTrade = true;
      this.ticketMapping['symbol'] = params.node.data.ticker;
      // this.initNewFinApp("tradeticket", "Trade Ticket").then(function(res){
      //   console.log("child res")
      // })

      // let strWindowFeatures = 'width=880, height=600';
      // let url = window.location.href + 'tradeticket';
      //
      // window.open(url, 'New Trade Ticket', [strWindowFeatures])
    },
    launchQuickTrade(params){
      this.tickerData = params.node.data.ticker;
      this.quickTradeVals['symbol'] = params.node.data.ticker;
      this.dialog = true;
      console.log("Row Clicked", params)
    },
    launchVisualization(){
      this.initNewFinApp("charts", "Select View").then(function(res){
        console.log("child res")
      })
      // let strWindowFeatures = 'width=880, height=600';
      // let url = window.location.href + 'charts';
      // window.open(url, 'New Trade Ticket', [strWindowFeatures])
    },
    getPositionMenuItems(params){
      const self = this;
      console.log("Params", params.node.data.ticker)
      const result = [
        {
          name: "Trade Ticket",
          action(){
            self.launchTradeTicket(params)
          }
        },
        {
          name: "Quick Trade",
          action(){
            self.launchQuickTrade(params)
          }
        },
        {
          name: "Desk Blotter",
          action(){
            self.launchDeskBlotter(params)
          }
        },
        {
          name:"Select View",
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
    }
  },
  computed:{
    ...mapGetters({
        allGridData:'allGridData',
        gridParams: 'gridParams'
    }),
    deskBlotterOpts(){
      let gridOptions = {};
      gridOptions.rowData = this.confirmationMap;
      gridOptions.columnDefs = this.deskBlotterColDef();
      gridOptions.rowHeight = 35;
      gridOptions.defaultColDef = { width: 80 };
      return gridOptions;
    }
  },
  beforeMount(){
    // this.allGridData,
    this.gridOptions = {
      rowData: this.positionsExample(),
      columnDefs: this.positionsColDef(),
      enableFilter: true,
      enableSorting: true,
      singleClickEdit: true,
      rowBuffer: 50,
      rowSelection:'single',
      rowGroupPanelShow: 'always',
      defaultColDef:{
        width: 125,
        enableRowGroup: true,
        tooltip:(obj) =>{
          return obj.value;
              // console.log("Value", value)
        }
      }
    }
 }
}

</script>

<style scoped>
  .position-grid{
    width: 100%;
    height: 400px;
  }
</style>
