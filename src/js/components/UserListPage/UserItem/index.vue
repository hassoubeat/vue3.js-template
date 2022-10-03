<template>
    <div class="user_object">
      <router-link v-bind:to="href">
        {{ user.name }}( {{ user.sex }} )
      </router-link>
    </div>
</template>
 
<script>
  import { useEnhancer } from "./enhancer";

  export default {
    props: {
      user: {
        type: Object,
        required: true
      }
    },
    setup(props) { 
      return useEnhancer(props);
    }
  };
</script>
 
<style lang="scss" scoped>
</style>