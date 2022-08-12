<template>
  <div>
    <v-btn outline small color="blue-grey lighten-5" v-for="button in buttonConfig" @click="onSymbolUpdate" style="margin-right:-6px; font-size:11px;" >{{ button.symbol }}</v-btn>
    <span style="margin-left:15px;">
    <!-- <v-tooltip bottom>
      <v-icon slot="activator" dark color="grey darken-2" @click="launchPM">create</v-icon>
      <span>PM Blotter</span>
    </v-tooltip> -->
    <v-menu bottom offset-y>
      <v-icon slot="activator" dark color="grey darken-2" @click="launchPM">create</v-icon>
      <v-list>
        <v-list-tile v-for="(item, i) in blotters" @click="selectBlotter($event)":key="i">
          <v-list-tile-title>{{ item.name }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>


    <!-- <User-Settings-Dialog/> -->
    <v-chip label color="green" text-color="white" v-show="tradeExecuted === true"> Trade Executed
        <!-- <v-icon left>label</v-icon>Trade sub -->
      </v-chip>
    <!-- <v-tooltip bottom>
      <v-icon slot="activator" dark color="grey darken-2" @click="launchDeskBlotter">insert_chart</v-icon>
      <span>Desk Blotter</span>
    </v-tooltip> -->
  </span>

  </div>
</template>

<script>
import UserSettingsDialog from '../UserSettings/UserSettingsDialog.vue';

export default {
  components: {
    'User-Settings-Dialog': UserSettingsDialog
  },
  props: ['buttonConfig', 'onSymbolUpdate', 'selectBlotter', 'tradeExecuted'],
  data () {
    return {
      blotters: [
        {
          name: 'PM Blotter'
        },
        {
          name: 'Desk Blotter'
        }
      ],
      selectedBlotter:''
    }
  },
  methods:{
    // selectBlotter(evt){
    //   this.selectedBlotter = evt.target.innerText;
    //   if(selectedBlotter === )
    //   console.log("Select Blotter", evt);
    // }
  }
}
</script>

<style>
</style>
