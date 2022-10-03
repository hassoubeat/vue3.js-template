<template>
  <div>
      <h1>{{h1Text}}</h1>
      <input-search-word
        v-bind:searchWord="searchWord"
        v-bind:updateSearchWord="updateSearchWord"
      />
      <fruit-item
        v-for="(fruit, index) in filterFruitList" 
        v-bind:key="index"
        v-bind:fruit="fruit"
      >
        {{ fruit }}
      </fruit-item>
  </div>
</template>

<script>
  import { useEnhancer } from "./enhancer";

  import InputSearchWord from './InputSearchWord/index.vue';
  import FruitItem from './FruitItem/index.vue';

  export default {
    setup() {
      return useEnhancer();
    },
    // ローカルコンポーネント登録
    components: {
      'input-search-word': InputSearchWord,
      'fruit-item': FruitItem,
    }
  };
</script>

<style lang="scss" scoped>
</style>