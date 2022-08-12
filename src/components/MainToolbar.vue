 <template>
      <!-- break components down -->
   <div class="">
     <v-toolbar :height="55" class="grey darken-4">
       <lp-list :items="exchangeList"/>
       <v-checkbox
           class="closed-position"
          :label="`Closed Positions`"
          v-model="closedPosition"
          @change="onCheckboxChange"
        ></v-checkbox>
       <v-btn small color="grey darken-4" @click='collapseGrid'>Collapse</v-btn>
       <!-- <User-Settings-Dialog/> -->
       <v-btn small color="grey darken-4" @click="launchTradeDialog">Trade Ticket</v-btn>
       <v-menu bottom offset-y>
         <v-btn small slot="activator">Select View</v-btn>
         <v-list>
           <v-list-tile v-for="(item, i) in items" @click="selectViewSelected($event)":key="i">
             <v-list-tile-title>{{ item.title }}</v-list-tile-title>
           </v-list-tile>
         </v-list>
       </v-menu>
     </v-toolbar>
     <quick-trader
      :symbolData="tickerData"
      :dialog2="quickTradeDialog"
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
        :launchTicketDialog="launchDialog"
        :tradeClosed="closeTicket"
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
        :tradeSubmissionData="deskBlotterOpts"
        :launchDeskBlotter="deskBlotterDialog"
        :deskBlotterClosed="onDeskBlotterClose"
        :onDeskBlotterGrid="onReadyDeskBlotterGrid"
        :onSelectBlotterApp="deskBlotterSelect"
        :detailGroupSelect="onDetailGroupSelect"
        :launchPMBlotter="pmBlotterDialog">
     </trade-ticket>
   </div>

</template>

<script>
import QuickTrader from './QuickTrader/QuickTradeDialog.vue';
import TradeTicketDialog from './TradeTicket/TradeTicketDialog.vue';
import UserSettingsDialog from './UserSettings/UserSettingsDialog.vue';
import {gridConfigMixins} from '../ag-mixins.js';
import {portfolioSectionMixins} from '../portfolio-section-mixins.js';
import LPList from './common/LPList.vue';
import _ from 'lodash';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'main-toolbar',
  components: {
    'trade-ticket': TradeTicketDialog,
    'User-Settings-Dialog': UserSettingsDialog,
    'lp-list': LPList,
    'quick-trader': QuickTrader
  },
  mixins:[gridConfigMixins, portfolioSectionMixins],
  data () {
    return {
      deskBlotterGridApi:null,
      deskBlotterDialog:false,
      pmBlotterDialog:false,
      quickTradeDialog:false,
      ticketHotKey:'',
      tradeTicketConfirmModel:false,
      gridOptions:null,
      dialog: false,
      tickerData:'',
      tradeConfirmDialog:false,
      launchTrade:false,
      launchDialog:false,
      selectLoading:false,
      exchangeList:[
        {
          title: 'S & P',
          value:'0.28%'
        },
        {
          title: 'Dow',
          value:'0.03%'
        },
        {
          title: 'NASDAQ',
          value:'0.15%'
        },
        {
          title: 'Russell',
          value:'0.42%'
        }
      ],
      closedPosition: false,
      items: [
        {
          title: 'Bookmon Chart View'
        },
        {
          title: 'Bookmon Client Summary View'
        }
      ],
      selectedItem:'',
      mainButtons: [
        { name: 'Buy', type: 'blue lighten-1', id:1},
        { name: 'Cover', type: 'green darken-1', id:3},
        { name: 'Sell', type: 'red darken-4', id:2 },
        { name: 'Short', type: 'yellow darken-2', id:4}
      ],
      quantityButtons: [
        { name: 'Buy', type: 'blue lighten-1', id:5, value:150},
        { name: 'Cover', type: 'green darken-1', id:6, value:250},
        { name: 'Sell', type: 'red darken-4', id:7, value:550},
        { name: 'Short', type: 'yellow darken-2', id:8, value:1500},
        { name: 'Buy', type: 'blue lighten-1', id:9, value:2500},
        { name: 'Cover', type: 'green darken-1', id:10, value:5500},
        { name: 'Sell', type: 'red darken-4', id:11, value:50000},
        { name: 'Short', type: 'yellow darken-2', id:12, value:''},
        { name: 'Buy', type: 'blue lighten-1', id:13, value:''},
        { name: 'Cover', type: 'green darken-1', id:14, value:''},
        { name: 'Sell', type: 'red darken-4', id:15, value:''},
        { name: 'Short', type: 'yellow darken-2', id:16, value:''}
      ],
      deskBlotterDialog:false
    }
  },
  computed:{
      ...mapGetters({
          strategyGridParams:'strategyGridParams',
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
  methods: {
    onDetailGroupSelect(evt){
      const selectedBlotter = evt.target.innerText;
      // if(selectedBlotter === 'PM Blotter'){
      //   this.pmBlotterDialog = true;
      // }else{
      //   this.deskBlotterDialog = true;
      //
      // }
      this.deskBlotterDialog = true;
      this.launchDialog = false;
      console.log("On Selected", evt, selectedBlotter)
    },
    deskBlotterSelect(evt){
      const selectedTicket = evt.target.innerText;
      if(selectedTicket === 'Trade Ticket'){
        this.launchDialog = true;
      }else{
        this.quickTradeDialog = true;
        console.log("Quick Trade")
      }
      this.deskBlotterDialog = false;
      console.log("Desk Blotter", evt, selectedTicket, this.quickTradeDialog)
    },
    onSymbolKey(evt){
     let symbol = evt.target.innerText.toUpperCase();
     let symbolObj = _.find(this.symbolButtons, (obj) => obj.symbol === symbol);
     this.ticketMapping = Object.assign(symbolObj);
   },
    onHotKeySelect(evt){
      console.log("Hot Selected", this.ticketMapping, this.ticketOptions);
      this.ticketHotKey = evt.target.innerText;
      this.ticketMapping['quantity'] = evt.target.innerText;
    },
    onTradingActionSelect(evt){
      console.log("On Trading Select", this.ticketOptions, evt)
      this.ticketOptions['type'] = evt.target.innerText;
      this.ticketMapping['type'] = evt.target.innerText
    },
    tradeTicketConfirm(evt){
      // send trade ticket confirmation

      const selected = evt.target.innerText;
      this.tradeTicketConfirmModel = true;
      if(selected === 'NO'){
        this.tradeTicketConfirmModel = false;
      }else if(selected === 'YES'){
        this.tradeTicketConfirmModel = false;
        this.launchDialog = false;
        console.log("Add Trade", this.ticketMapping)
        this.addTradeData([this.ticketMapping])
        this.resetTradeForm()
        this.deskBlotterDialog = true;
      }

      console.log("Trade Confirmation");
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
    sendTrade(){
      this.tradeConfirmDialog = false;
      this.closeTicket()
      this.resetTradeForm()
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
    closeTicket(){
      this.launchDialog = false;
    },
    launchTradeDialog(){
      this.launchDialog = true;
    },
    collapseGrid(){
        this.strategyGridParams.collapseAll();
    },
    onCheckboxChange(){
      this.closedPosSelected()
    },
    closedPosSelected(){
        console.log("Closed Position Selected", this.strategyGridParams)
        let itemsToUpdate = [];
        this.gridParams.api.forEachNodeAfterFilterAndSort((rowNode, index) => {
          console.log("Grid Params", rowNode);
        // if (index >= 15) return;
          let data = rowNode.data;
          for(let column in data){
            // console.log(column, data)
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
                   data[column] =  _.sample(["13,127,469", "41,124,629", "-9,121,322", "-10,120,945", "8,932,145", "12,714,628", "-4,871,142", "2,185,283"]);
              }
            }
          }
          itemsToUpdate.push(data);
        });
        let res = this.gridParams.api.updateRowData({ update: itemsToUpdate });
    },
    initNewFinApp(path, name){
      this.selectLoading = true;
      return new Promise((resolve, reject) =>{
         setTimeout(() => {
           fin.desktop.main(function(){
             new fin.desktop.Window({
                 backgroundColor:"#fff",
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

             })
               resolve()
         }, 500)
      })

    },
    openTradeTicket (evt) {
      try{
        if(fin){
          this.initNewFinApp("tradeticket", "Trade Ticket Application")
        }
      }catch(err){
        var strWindowFeatures = 'width=1100, height=290'
        let url = window.location.href + 'tradeticket';
        window.open(url, 'New Trade Ticket', [strWindowFeatures])
        // console.log("Error", err);
      }

      // let selectOption = evt.innerText;
      // if(selectOption === 'Trade Ticket'){
      // }
    },
    openSelectView () {
      this.initNewFinApp("charts", "Select View").then(function(res){
        console.log("child res")
      })
    },
    selectViewSelected(evt){
      this.selectedItem = evt.target.innerText;
      if(this.selectedItem === 'Bookmon Chart View'){
        this.openSelectView()
      }else if(this.selectedItem === 'Bookmon Client Summary View'){
        this.$router.push('/')
      }
    },
    updateExchangeList(){
      this.exchangeList.forEach(item =>
        item.value = _.sample(["0.95%", "6.56%", "3.40%", "0.04%", "0.07%"])
      )
    },
    onDeskBlotterClose(){
      this.deskBlotterDialog = false;
    },
    onReadyDeskBlotterGrid(params){
      this.deskBlotterGridApi = params.api;
      console.log("Desk Ready", params, this.deskBlotterGridApi)
    },
    addTradeData(newTrade){
      this.deskBlotterGridApi.updateRowData({ add: newTrade})
    },
    sendTrade(){
      this.tradeConfirmDialog = false;
      this.quickTradeDialog = false;
      this.addTradeData([this.quickTradeVals])
      this.onQuickTradeReset()
      this.deskBlotterDialog = true;
      // this.launchSelectBlotter = true;
      console.log("Confirmed")
    }
  },
  mounted(){
    let exchangeTime = _.sample([1000, 3000, 1500, 2000])
    setInterval(this.updateExchangeList, exchangeTime);
  }
}
</script>
<style lang="stylus" scoped>
  .toolbar-header
    text-decoration none
  .title
    color #FFF
  .tickers li
    display inline-block
  .closed-position
    margin-top 30px
    margin-left 35px
</style>
