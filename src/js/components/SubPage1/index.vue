<template>
  <div>
    <span class="green">{{ message }}</span><br>
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
        h1_text: "Vue.js KichenSink Sub Children1 Page",
        message: "this page url is /html/sub/children1"
      }
    }
  };
</script>

<style scoped>
  .green {
    color: green;
  }
</style>