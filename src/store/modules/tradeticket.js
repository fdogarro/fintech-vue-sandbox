const state = {
  tradeData: null
};

const getters = {
  tradeData: state => state.tradeData
};

const actions = {
  getTradeData({commit, state}, params){
    commit('setTradeData', params);
  }
};

const mutations = {
  setTradeData(state, data){
    state.tradeData = data
  }

  
};

export default{
  state,
  mutations,
  actions,
  getters
}
