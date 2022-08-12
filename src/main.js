// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import { store } from './store/store.js'
import router from './router'
import Vuetify from 'vuetify'
import { LicenseManager } from 'ag-grid-enterprise/main'
import apiKeys from '../config/api-keys.js'
import '../node_modules/ag-grid/dist/styles/ag-grid.css'
import '../node_modules/ag-grid/dist/styles/ag-theme-fresh.css'
import '../node_modules/ag-grid/dist/styles/ag-theme-dark.css'
import '../node_modules/ag-grid/dist/styles/ag-theme-material.css'
import '../node_modules/ag-grid/dist/styles/ag-theme-balham.css'
import '../node_modules/ag-grid/dist/styles/ag-theme-balham-dark.css'
import colors from 'vuetify/es5/util/colors'
import 'vuetify/dist/vuetify.min.css'
// import './assets/stylus/main.styl'
import {ExcelApi} from './extensions/openfin.excel/ExcelApi.js';
import {ExcelApplication} from './extensions/openfin.excel/ExcelApplication.js';
import * as Excel from './extensions/openfin.excel/ExcelApi.js';
LicenseManager.setLicenseKey(apiKeys.agGrid);

(function(){
  window.addEventListener('DOMContentLoaded', () => {
    if(typeof fin !== undefined){
      fin.desktop.main(() => {
        fin.desktop.Excel = Excel;
      })
    }
  })
}());


Vue.config.productionTip = false

Vue.use(Vuex)

Vue.use(Vuetify, {
  theme: {
    primary: colors.indigo.base,
    secondary: '#b0bec5'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
