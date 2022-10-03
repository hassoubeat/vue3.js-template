<template>
    <h1>{{h1Text}}</h1>
    <user-item 
      v-for="(user, index) in users" 
      v-bind:key="index"
      v-bind:user="user" 
    />
</template>
 
<script>

import { useEnhancer } from "./enhancer";
import UserItem from './UserItem/index.vue';
 
export default {
  setup() {
    const enhanceProps = useEnhancer();
    console.log("created " + enhanceProps.h1Text.value);

    return enhanceProps;
  },
  components: {
    "user-item": UserItem
  }
}
</script>
 
<style lang="scss" scoped>
</style>