<template>
  <div>
    <span class="blue">{{ message }}</span><br>
  </div>
</template>

<script>
  export default {
    created() {
      console.log("created " + this.h1_text);
    },
    data() {
      return {
        h1_text: "Vue3.js KichenSink Sub Children2 Page",
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