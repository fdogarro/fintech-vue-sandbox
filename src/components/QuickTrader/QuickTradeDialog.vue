<template>

  <!-- break components down && combined logic with trade ticket-->
 <v-container class="fluid grid-list-md blue-grey darken-4 quick-trader-container">
   <v-dialog v-model="dialog2" width="225px" persistent>
   <v-toolbar color="blue-grey darken-3" height="30">
     <h5 style="font-weight:normal">Selected Ticker - {{ symbolData }}</h5>
     <v-spacer></v-spacer>
     <v-btn icon dark @click.native="closeTradeTicket">
       <v-icon>close</v-icon>
     </v-btn>
   </v-toolbar>

   <v-layout row wrap>
     <!-- break off into component -->
       <v-flex xs12>
         <v-card class="blue-grey darken-4">
           <v-btn flat small
             :disabled="button.disable"
             :class="button.type"
             v-for="button in primaryButtons"
             @click.stop.prevent="onTradingAction"
             :key="button.id"
            id="quick-trader-trading-btns">{{ button.name }}</v-btn>

           <v-btn outline small
             class="blue-grey lighten-2 quick-trader-hotkeys"
             v-for="item in secondaryButtons"
             @click.stop.prevent="onHotKey"
             :disabled="item.disable"
             :key="item.id">{{ item.value }}</v-btn>

           <v-btn color="green darken-1 quick-trader-trade-actions" dark  @click.stop="tradeConfirm">{{tradeActions.send}}</v-btn>
           <v-btn color="red darken-4 quick-trader-trade-actions" dark @click="resetAction">{{tradeActions.clear}}</v-btn>
         </v-card>
       </v-flex>

       <!-- break off into component -->
       <v-dialog v-model="tradeConfirmModel" max-width="250px">
        <v-card style="background:#FFFFFF">
          <v-card-title>
            <span style="color:black">Are you sure you want to {{ quantHotKey }} {{ symbolData }} at {{ quantityVal }}?</span>
            <v-spacer></v-spacer>
            <v-menu bottom left>
              <v-btn slot="activator" icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
              <v-list>

              </v-list>
            </v-menu>
          </v-card-title>
          <v-card-actions>
            <v-btn color="primary" flat @click.stop.prevent="sendAction">Yes</v-btn>
            <v-btn color="primary" flat @click.stop.prevent="tradeConfirm">No</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
     </v-layout>
     </v-dialog>
 </v-container>
</template>

<script>
import DetailsPosition from './DetailsPosition.vue';
import DetailsFormFields from './DetailsFormFields.vue';
import DetailsGroups from './DetailsGroups.vue';
import UserSettingsDialog from '../UserSettings/UserSettingsDialog.vue';
import _ from 'lodash';
import { mapGetters } from 'vuex';
import {tradeDialogMixins} from '../../trade-dialog-mixin.js';

export default {
 props:['dialog2', 'symbolData', 'sendAction', 'resetAction',
 'tradeConfirmModel', 'tradeConfirm', 'closeTradeTicket', 'primaryButtons', 'secondaryButtons',
'onTradingAction', 'onHotKey', 'quantHotKey', 'quantityVal'],
 components: {
   'User-Settings-Dialog': UserSettingsDialog,
   'Details-Form-Fields': DetailsFormFields,
   'Details-Position': DetailsPosition,
   'Details-Groups': DetailsGroups
 },
 mixins:[tradeDialogMixins],
 data () {
   return {
     dialogVal: null,
     dialog:false,
     disableTradeAction:false,
     text:'left',
     selectedPosition:'',
     showTradeExecuted:false,
     tradeConfirmDialog: false,
     tradeOptions:{
       tradeType:null,
     },
     tradeMap:{}

   }
 },
 computed:{
   ...mapGetters({
     allGridData:'allGridData',
     gridParams: 'gridParams'
   })
   // symbolData(){
   //   let messageObj = '';
   //   fin.desktop.InterApplicationBus.subscribe("Bookmon", "position row click",
   //       (message, uuid, name) => {
   //         this.selectedPosition = message;
   //         console.log("Message", message, uuid, name);
   //       })
   //       return this.selectedPosition;
   // }
 },
 methods: {
   launchDesk(){
     //TODO refactor to one open fin func
     this.initNewFinApp("deskblotter", "Desk Blotter").then(function(res){
       console.log("child res")
     })
   },
   launchChildApp(){
     //TODO refactor to one open fin func
     this.initNewFinApp("pmblotter", "PM Blotter").then(function(res){
       console.log("child res")
     })
   },
   tradeConfirmation(){
     this.tradeConfirmDialog = false;
     this.resetTradeTicket()
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
                defaultWidth: 1130,
                defaultHeight: 300,
                maxWidth:1130,
                maxHeight:300,
                url: window.location.origin + '/' + path,
                name:name
              })

            })
              resolve()
        }, 500)
     })
   },
   launchAllocationRatio(){
     //TODO refactor to one open fin func
     console.log("Launch Ratio")
     this.initNewFinApp("allocationratio", "Allocation based on Ratio").then(function(res){
       console.log("child res", res)
     })
   }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 .quick-trader-container{
   padding:0px !important;
 }
 .quick-trade-header{
   font-weight:normal;
 }
 #quick-trader-trading-btns{
   margin-right:-7px;
   min-width:48px;
   max-width:48px;
   font-size:10px;
   color: black;
   border:1px solid #ccc !important;
   height:25px;
 }
 .quick-trader-hotkeys{
   margin-right:-8px;
   min-width:65px;
   max-width:65px;
   margin-top:-3px;
   font-size:12px;
 }
 .quick-trader-trade-actions{
   margin-right:-8px;
   width:35%;
   font-size:12px;
   color:black !important;
   border:1px solid #ccc !important;
   margin-top:-3px;
   height:25px;
   min-width: 95px;
 }
</style>
