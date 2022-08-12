import positions from '../../api/positions-api'

const state = {
  gridData: positions.createRowData(),
  gridParams: null
};

const getters = {
  allGridData: state => state.gridData,
  gridParams: state => state.gridParams
};

const actions = {
  gridOnReady({commit, state}, params){
    commit('setGridParams', params);
  },
  getGridData(){
    positions.createRowData()
  }
};

const mutations = {
  setGridData(state, data){
    state.gridData = data
  },
  setGridParams(state, params){
    state.gridParams = params
  }
};

export default{
  state,
  mutations,
  actions,
  getters
}
