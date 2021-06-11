import {createStore} from 'vuex'

export default createStore({
  state: {
    // 存储token
    Authorization: localStorage.getItem('Authorization'),
    indexData:{}
  },

  mutations: {
    // 修改token，并将token存入localStorage
    changeLogin(state, user) {
      state.Authorization = user.Authorization;
      localStorage.removeItem('Authorization');
      localStorage.setItem('Authorization', user.Authorization);
    },
    changeIndexData(state,indexData){
      state.indexData = indexData
    }

  },
  actions: {},
  modules: {}
})
