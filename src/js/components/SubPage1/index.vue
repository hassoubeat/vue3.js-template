<template>
  <div>
    <span class="green">{{ message }}</span><br>
  </div>
</template>

<script>
  export default {
    created: function () {
      console.log("created " + this.h1_text);
    },
    data: function() {
      return {
        h1_text: "Vue3.js KichenSink Sub Children1 Page",
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