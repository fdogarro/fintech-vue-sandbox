<template>
  <v-layout row wrap>
    <v-flex xs12>
      <ag-grid-vue
                   :gridOptions="gridOptions"
                   :animateRows="true"
                   :enableColResize="true"
                   :enableFilter="true"
                   :enableSorting="true"
                   rowSelection="single"
                   :toolPanelSuppressSideButtons="true"
                   :autoGroupColumnDef="autoGroupColumnDef"
                   class="ag-theme-balham-dark portfolio-details-grid">
      </ag-grid-vue>
    </v-flex>
  </v-layout>
</template>

<script>
import { AgGridVue } from 'ag-grid-vue';
import {gridConfigMixins} from '../../../ag-mixins.js';

export default {
  components: {
    'ag-grid-vue': AgGridVue
  },
  mixins:[gridConfigMixins],
  data () {
    return {
      autoGroupColumnDef: {
       headerName: "Side",
       width: 125
     }
    }
  },
  computed: {
    gridOptions: function () {
      let gridOptions = {}
      gridOptions.rowData = this.portfolioDetMock();
      gridOptions.columnDefs = this.portDetailsColDef();
      gridOptions.defaultColDef = { width: 120 };
      return gridOptions;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .portfolio-details-grid{
    width: 100%;
    height: 400px;
  }

</style>
