<template>
  <input 
    type="text"
    class="search-word"
    v-focus
    v-bind:value="searchWord"
    v-on:input="updateSearchWord($event.target.value)"
    placeholder="検索ワードを入力してください。"
  >
  <button 
    class="btn"
    v-bind:class="!isEmptySearchWord && 'active'"
    v-bind:disabled="isEmptySearchWord"
    v-on:click="resetSearchWord()"
  >
    reset
  </button>
</template>

<script>
  import { useEnhancer } from "./enhancer";

  export default {
    props: {
      searchWord: {
        type: String,
        required: true,
      },
      updateSearchWord: {
        type: Function,
        required: true
      }
    },
    setup(props) { 
      return useEnhancer(props);
    },
    // 独自ディレクティブ定義
    directives: {
      focus: {
        mounted: function (el) {
          el.focus()
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  .search-word {
    padding: 5px;
    margin: 10px;
    width: 80%;
    border-radius: 10px;
    border: none;
  }
</style>