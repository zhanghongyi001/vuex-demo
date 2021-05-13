export default module = {
  state: {
    page: ''
  },
  mutations: {
    page(state, componentData) {
      state.page = componentData
      // 变更状态
      // state.count = state.count + componentData
    }
  },
  actions: {
    // actions一般是处理异步逻辑
    getUrlpage(context, componentData) {
      console.log(componentData, '----componentData---')
      context.commit('page', componentData);
    }
  }
}
