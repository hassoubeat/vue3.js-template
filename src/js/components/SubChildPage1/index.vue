<template>
  <div>
    <span class="green">{{ message }}</span><br>
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
  .green {
    color: green;
  }
</style>