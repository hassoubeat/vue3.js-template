<template>
  <div>
    <span class="blue">{{ message }}</span><br>
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
        h1_text: "Vue.js KichenSink Sub Children2 Page",
        message: "this page url is /html/sub/children2( with rooting guard )"
      }
    }
  };
</script>

<style scoped>
  .blue {
    color: blue;
  }
</style>