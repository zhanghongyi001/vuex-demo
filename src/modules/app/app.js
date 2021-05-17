import axios from 'axios';
export default module = {
  state: {
    page: ''
  },
  mutations: {
    PAGE(state, componentData) {
      state.page = componentData
      // 变更状态
      // state.count = state.count + componentData
    },
    AXIOS_PAGE(state, ticket) {
      axios.defaults.headers.ticket = ticket ? ticket : 'cf4878d8-d6bf-4e5a-ad09-51a62e3dbd2f'
      axios.defaults.retry = 5
      axios.defaults.retryDelay = 5000
    }
  },
  actions: {
    // actions一般是处理异步逻辑
    getUrlpage(context, componentData) {
      context.commit('PAGE', componentData);
      context.commit('AXIOS_PAGE', componentData.ticket)
    }
  }
}
