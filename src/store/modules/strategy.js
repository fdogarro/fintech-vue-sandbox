const state = {
  chartData: null,
  strategyGridParams: null,
  pieChartVals:null
};

const getters = {
  allChartData: state => state.chartData,
  strategyGridParams: state => state.strategyGridParams,
  allPieVals: state => state.pieChartVals
};

const actions = {
  getParamsData({commit, state}, params){
      console.log("Strategy Grid", state, params)
    commit('setChartParams', params);
  },
  strategyGridReady({commit, state}, params){
    commit('setStrategyGrid', params);
  }
};

const mutations = {
  setChartParams(state, params){
    state.chartData = params;
  },
  setStrategyGrid(state, params){
    state.strategyGridParams = params;
  },
  updateStrategyData(state){
      let itemsToUpdate = [];
  }

};

export default{
  state,
  mutations,
  actions,
  getters
}
