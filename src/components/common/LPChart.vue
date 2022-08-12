<template>
  <div style="width:100%; height:100%">
    <div v-bind:id="propID"></div>
  </div>
</template>

<script>
import Plotly from 'plotly.js/dist/plotly';

export default {
  props:['dataModel', 'propID', 'chartLayout', 'displayBar'],
  data () {
    return {

    }
  },
  mounted(){
    this.drawChart()
  },
  watch:{

  },
  methods:{
    drawChart(){
      Plotly.newPlot(
        this.propID,
        this.dataModel,
        this.chartLayout,
        {displayModeBar:this.displayBar}
      )
    }

  },
  created(){

  },
  computed:{

  }
}
</script>

<style>
</style>
