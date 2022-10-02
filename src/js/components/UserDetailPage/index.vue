<template>
    <h1>{{h1_text}}</h1>
    選択したユーザのIDは{{ id }}です。
</template>
 
<script>
 
export default {
  props: ["id"],
  created() {
    console.log("created " + this.h1_text + "【UserID】" + this.id);
  },
  data(){
    return {
      h1_text: "Vue3.js KichenSink User Detail Page",
    }
  }
}
</script>
 
<style>
</style>