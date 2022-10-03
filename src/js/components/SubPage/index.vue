<template>
  <div>
    <h1>{{h1Text}}</h1>
    <router-link :to="ROUTING_PATH.SUB_CHILD1" v-slot="{navigate}">
      <button v-on:click="navigate">to SubChildren1Page {{ ROUTING_PATH.SUB_CHILD1 }}</button>
    </router-link>
    <router-link :to="ROUTING_PATH.SUB_CHILD2" v-slot="{navigate}">
      <button v-on:click="navigate">to SubChildren2Page {{ ROUTING_PATH.SUB_CHILD2 }}(require login)</button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  import { useEnhancer } from "./enhancer";

  export default {
    setup() {
      const enhanceProps = useEnhancer();
      console.log("created " + enhanceProps.h1Text.value);

      return enhanceProps;
    }
  };
</script>

<style lang="scss" scoped>
</style>