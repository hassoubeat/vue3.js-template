<template>
  <router-link tag="button" to="/html">to Main</router-link>
  <router-link tag="button" to="/html/sub">to Sub</router-link>
  <router-link tag="button" to="/html/users">to Users</router-link>
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