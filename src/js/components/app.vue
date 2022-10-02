<template>
  <router-link :to="ROUTING_PATH.TOP" v-slot="{navigate}">
    <button v-on:click="navigate">to MainPage {{ ROUTING_PATH.TOP }}</button>
  </router-link>
  <router-link :to="ROUTING_PATH.SUB" v-slot="{navigate}">
    <button v-on:click="navigate">to SubPage {{ ROUTING_PATH.SUB }}</button>
  </router-link>
  <router-link :to="ROUTING_PATH.USER_LIST" v-slot="{navigate}">
    <button v-on:click="navigate">to UserListPage {{ ROUTING_PATH.USER_LIST }}</button>
  </router-link>
  <button v-if="!isLogin" v-on:click="login">login</button>
  <button v-if="isLogin" v-on:click="logout">logout</button>
  <button v-on:click="goBack()">back</button>
  <router-view></router-view>
</template>
 
<script>

import { computed } from "vue";
import { useStore } from 'vuex'
import { useRouter } from 'vue-router';
import { ROUTING_PATH } from "~/const";
 
export default {
  setup() {
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
}
</script>
 
<style lang="scss" scoped>
  body, h1{
    margin: 0;
  }
</style>