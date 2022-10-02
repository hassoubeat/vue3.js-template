import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
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