import Vue from 'vue';
import Vuex from 'vuex';
import positions from './modules/positions';
import strategy from './modules/strategy';
import tradeticket from './modules/tradeticket'

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules:{
    positions,
    strategy,
    tradeticket
  }
});
