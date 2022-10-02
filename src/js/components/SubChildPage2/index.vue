<template>
  <div>
    <span class="blue">{{ message }}</span><br>
  </div>
</template>

<script>
  import { ROUTING_PATH } from "~/const";

  export default {
    created() {
      console.log("created " + this.h1Text);
    },
    data() {
      return {
        h1Text: "Vue3.js KichenSink Sub Children2 Page",
        message: `this page url is ${ROUTING_PATH.SUB_CHILD2}( with rooting guard )`
      }
    }
  };
</script>

<style scoped>
  .blue {
    color: blue;
  }
</style>