import axios from 'axios'
import { progressUrl } from '../../http/index'
import { calendaDetail } from '../../http/homeApi'
export default module = {
  state: {
    count: 1,
    list: []
  },
  mutations: {
    INCRE_MENT(state, componentData) {
      // 变更状态
      state.count = state.count += componentData
    },
    updateState(state, componentData) {
      state.list = componentData
    }
  },
  actions: {
    // actions一般是处理异步逻辑
    async incrementData({ commit }, componentData) {
      const result = await axios.post(progressUrl + calendaDetail, {
        parentEntId: componentData.cid,
        filterDate: '2021-05-01',
        openId: componentData.openId,
      });
      commit('updateState', result.data);
    },
  }
}
