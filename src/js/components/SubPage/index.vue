<template>
  <div>
    <h1>{{h1_text}}</h1>
    <router-link to="/html/sub/children1" v-slot="{navigate}">
      <button v-on:click="navigate">to SubChildren1Page /html/sub/children1</button>
    </router-link>
    <router-link to="/html/sub/children2" v-slot="{navigate}">
      <button v-on:click="navigate">to SubChildren2Page /html/sub/children2(require login)</button>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    created() {
      console.log("created " + this.h1_text);
    },
    data() {
      return {
        h1_text: "Vue3.js KichenSink Sub Page",
      }
    }
  };
</script>

<style scoped>
  .red {
    color: red;
  }
</style>