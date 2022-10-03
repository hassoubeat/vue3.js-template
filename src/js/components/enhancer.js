
import { computed } from "vue";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { ROUTING_PATH } from "~/js/const";
 
export function useEnhancer() {
  const store = useStore();
  const router = useRouter();

  const isLogin = computed(() => {
    return store.state.isLogin;
  })

  const login = () => {
    store.commit("changeIsLogin", true);
    console.log("loggined:" + store.state.isLogin);
  };

  const logout = () => {
    store.commit("changeIsLogin", false);
    console.log("loggined:" + store.state.isLogin);
  };

  const goBack = () => {
    window.history.length > 1
      ? router.go(-1)
      : router.push('/')
  }

  return {
    isLogin,
    login,
    logout,
    goBack,
    ROUTING_PATH
  }
}