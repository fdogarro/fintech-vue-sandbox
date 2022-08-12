 <template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-toolbar :height="55" color="grey darken-3">
        <v-menu offset-y>
         <v-btn slot="activator" color="grey darken-3" dark>Select a View</v-btn>
         <v-list>
           <v-list-tile v-for="(item, index) in items" :key="index" @click="selectedView($event)">
             <v-list-tile-title>{{ item.text }}</v-list-tile-title>
           </v-list-tile>
         </v-list>
       </v-menu>
       <v-btn color="success" @click="buildGraph">Go</v-btn>

      </v-toolbar>

        <v-flex d-flex xs12 sm2 md3>
          <v-layout row wrap>
            <v-flex d-flex>
              <v-layout row wrap>
                  <v-flex
                    v-for="item in formData"
                    :key="item.name"
                    d-flex
                    xs12>
                    <v-card color="grey darken-3" dark>
                      <v-flex xs12>
                        <v-select
                         :items="item.fields"
                         v-model="item.selectedValue"
                         :label="item.name"
                         class="input-group--focused"
                         autocomplete
                         item-value="text"></v-select>
                       </v-flex>
                    </v-card>
                  </v-flex>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>

        <v-flex d-flex xs12 sm6 md5>
          <v-card color="grey darken-4" dark>
            <lp-chart :dataModel="lineChartData" :chartLayout="pieLayout2" :propID="pieID"></lp-chart>
          </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
import LPChart from '../../common/LPChart.vue';
import Plotly from 'plotly.js/dist/plotly';
import { AgGridVue } from 'ag-grid-vue';
import { mapGetters, mapActions, mapMutations } from 'vuex';
import {gridConfigMixins} from '../../../ag-mixins.js';
import _ from 'lodash';

export default {
  components:{
    'lp-chart': LPChart,
    'ag-grid-vue': AgGridVue
  },
  mixins:[gridConfigMixins],
  data () {
    return {
      d3: Plotly.d3,
      items: [
        { text: 'Dynamic Chart' },
        { text: 'Scatter Chart' }
      ],
      formData:[
        {
          name:'X Value',
          formName:'xValue',
          fields:[],
          selectedValue: null
        },
        {
          name:'Y Value',
          formName:'yValue',
          fields:[],
          selectedValue: null
        },
        {
          name:'Chart Type',
          formName:'chartType',
          fields:['line', 'bar'],
          selectedValue: null
        }
      ],
      showStockView: false,
      selectedViewOpt:'',
      selected:[],
      selectedX:'',
      selectedY:'',
      selectedChart:'',
      checkboxSelected:[],
      mainChartData:[],
      pieID:'',
      secondPie:'',
      thirdPie:'',
      lineChartData:[],
      pieChartData:[],
      pieChartData3:[],
      pieVals:{
        values: [3787494, 3983203, 3737832],
        labels: ['Day', 'MTD', 'YTD'],
        type:'scatter'
      },
      pieVals2:{
        x: [],
        y: [],
        type:'pie'
      },
      pieVals3:{
        values: [3787494, 3983203, 3737832],
        labels: ['Day', 'MTD', 'YTD'],
        type:'pie'
      },
      pieLayout:{
        height: 315,
        width: 415,
        title:"Day & P & L",
        titlefont:{
          size:12
        }
      },
      pieLayout2:{
        height: 430,
        width: 630,
        paper_bgcolor: '#424242',
        plot_bgcolor: '#424242',
        title:"Position Grid Summary",
        colorscale: 'Viridis',
        font:{
          color:'white'
        },
        xaxis:{
          tickfont: {
            size: 10
          }
        },
        yaxis:{
          tickfont: {
            size: 14
          }
        }
      },
      pieLayout3:{
        height: 315,
        width: 515,
        title:"Return Trends",
        titlefont:{
          size:12
        }
      }

   }
  },
  mounted(){
    // this.drawLineChart()
  },
  computed:{
    ...mapGetters({
        allChartData:'allChartData',
        strategyGridParams:'strategyGridParams',
        gridParams: 'gridParams'
    }),
    // drawLineChart(){
    //
    //
    //   Plotly.newPlot(
    //     "pieID",
    //     this.lineChartData,
    //     this.pieLayout2,
    //     {displayModeBar:this.displayBar}
    //   )
    // }
  },
  methods:{
    selectedView(event){
      this.selectedViewOpt = event.target.innerText;
      if(this.selectedViewOpt === 'Portfolio'){
        this.showStockView = false;
        this.$router.push('/charting')
        console.log("Portfolio")
      }else if(this.selectedViewOpt === 'Individual Stocks'){
        console.log("Individual Stock");
        this.showStockView = true;
        this.$router.push('/stockcharting')

      }
      console.log("Event", event);
    },
    onRowSelected(event){
      console.log("Row Selected", event)
    },
    onGridReady(params){
      this.gridApi = params.api;
    },
    buildGraph(){

      console.log("Form Data", this.formData);
      const self = this;
      const positionGridApi = this.gridParams.api;


      let sumArr = [];
      let sums = null;
      let positionArr = [];
      let main = [];
      self.pieVals.x = [];
      self.pieVals.y = [];
      self.pieVals.values = [];
      self.pieVals.labels = [];

      this.selectedX = this.formData[0].selectedValue;
      this.selectedY = this.formData[1].selectedValue;
      this.selectedChart = this.formData[2].selectedValue;


      console.log("Form Data", this.formData[0].selectedValue, this.formData[1].selectedValue, this.formData[2].selectedValue)

      // .forEach(form => {
      //   console.log("Form Data", form, form[0]);
      // })

      //iterate and find vals for
      positionGridApi.forEachNodeAfterFilterAndSort((rowNode, index) =>{
        if(index < 10){
          console.log("Row Node and Index", rowNode.data, index, self.formData)
        }
        let data = rowNode.data;
        let positionObj = {};
        let itemArr = [];
        positionObj[this.selectedX] = data[this.selectedX];
        positionObj[this.selectedY] = data[this.selectedY];
        positionObj['columnSum'] = [];
        positionArr.push(positionObj);
      })
      console.log("Positions Arr", positionArr)

      // items are grouped by x values

      let grouped = _.groupBy(positionArr, this.selectedX);
      console.log("Grouped", grouped)

    // iterate through x values
      for(let column in grouped){
        if(grouped.hasOwnProperty(column)){
          let sumObj = {};
           console.log("Column", column, grouped[column], grouped);
           // groupedArr.push(grouped[column])
          sums = _.sumBy(grouped[column], this.selectedY);
          sumObj['sum'] = sums;
          sumObj['field'] = column;
          sumArr.push(sumObj);


        }
      }

      console.log("Sum Arr", sumArr, self.selectedChart)

      sumArr.forEach(function(item, index){
        if(self.selectedChart === 'pie'){
          self.pieVals.values.push(item.sum);
          self.pieVals.labels.push(item.field);
        }else{
          self.pieVals.x.push(item.field);
          self.pieVals.y.push(item.sum);
        }
        console.log("Items", item, index, main);
      })
        self.pieVals.type = self.selectedChart;
        self.lineChartData = [self.pieVals];


        Plotly.newPlot(this.pieID, this.lineChartData, this.pieLayout2);




      console.log("Sums", sums, sumArr, self.pieVals)



      console.log("Build Graph", this.selectedX, this.selectedY, this.selectedChart, positionGridApi, positionArr, grouped, main);
    }
  },
  created(){
    //id and initial data for chart
    this.pieID = "plotly-item";
    this.lineChartData = [this.pieVals];
      //variables and map for ag-grid column headers
    const positions = this.positionsColDef();
    const positionsMap = positions.map(item => item.field);
    // const namedFields = this.namedFields();
    console.log("Positions Map", positionsMap)
    this.mainChartData = this.formData.map(item => {
      if(item.formName !== 'chartType'){
        if(item.formName === 'xValue'){
          item.fields = this.namedFields();
        }else{
          item.fields = this.numberedFields();
        }
      }
       return this.formData;
    })

  }
}
</script>

<style scoped>


</style>
