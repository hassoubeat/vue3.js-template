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

import { useEnhancer } from "./enhancer";
 
export default {
  setup() {
    return useEnhancer();
  }
}
</script>
 
<style lang="scss" scoped>
  body, h1{
    margin: 0;
  }
</style>