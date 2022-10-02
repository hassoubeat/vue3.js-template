<template>
  <router-link to="/html" v-slot="{navigate}">
    <button v-on:click="navigate">to MainPage /html</button>
  </router-link>
  <router-link to="/html/sub" v-slot="{navigate}">
    <button v-on:click="navigate">to SubPage /html/sub</button>
  </router-link>
  <router-link to="/html/users" v-slot="{navigate}">
    <button v-on:click="navigate">to UserListPage /html/users</button>
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
      goBack
    }
  }
}
</script>
 
<style>
body, h1{
  margin: 0;
}
</style>