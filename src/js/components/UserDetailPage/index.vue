<template>
    <h1>{{h1Text}}</h1>
    選択したユーザのIDは{{ id }}です。
</template>
 
<script>
  import { useEnhancer } from "./enhancer";

  export default {
    props: {
      id: {
        type: Number,
        required: true
      }
    },
    setup(props) { 
      const enhanceProps = useEnhancer(props);
      console.log("created " + enhanceProps.h1Text.value);

      return enhanceProps;
    }
  };
</script>
 
<style lang="scss" scoped>
</style>