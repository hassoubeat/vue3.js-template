import { createStore } from 'vuex'

const store = createStore({
  state: {
    isLogin: false
  },
  mutations: {
    changeIsLogin(state, isLogin){
      state.isLogin = isLogin;
    }
  }
});

export default store