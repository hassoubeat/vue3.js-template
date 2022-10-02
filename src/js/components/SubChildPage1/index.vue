<template>
  <div>
    <span class="green">{{ message }}</span><br>
  </div>
</template>

<script>
  import { ROUTING_PATH } from "~/const";

  export default {
    created () {
      console.log("created " + this.h1Text);
    },
    data() {
      return {
        h1Text: "Vue3.js KichenSink Sub Children1 Page",
        message: `this page url is ${ROUTING_PATH.SUB_CHILD1}`
      }
    }
  };
</script>

<style scoped>
  .green {
    color: green;
  }
</style>