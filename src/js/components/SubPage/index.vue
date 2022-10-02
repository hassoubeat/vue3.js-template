<template>
  <div>
    <h1>{{h1_text}}</h1>
    <span class="red">{{ message }}</span><br>
    <router-link tag="button" to="/html/sub/children1">to Sub Children1</router-link>
    <router-link tag="button" to="/html/sub/children2">to Sub Children2(reqired login)</router-link>
    <router-view></router-view>
    <br>
    <button v-on:click="goBack()">back</button>
  </div>
</template>

<script>
  import Mixin from './mixin';

  export default {
    mixins: [Mixin],
    created: function () {
      console.log("created " + this.h1_text);
    },
    data: function() {
      return {
        h1_text: "Vue.js KichenSink Sub Page",
        message: "this page is .vue file"
      }
    }
  };
</script>

<style scoped>
  .red {
    color: red;
  }
</style>