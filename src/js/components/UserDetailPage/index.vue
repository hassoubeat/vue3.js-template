<template>
    <h1>{{h1Text}}</h1>
    選択したユーザのIDは{{ id }}です。
</template>
 
<script>
 
export default {
  props: ["id"],
  created() {
    console.log("created " + this.h1Text + "【UserID】" + this.id);
  },
  data(){
    return {
      h1Text: "Vue3.js KichenSink User Detail Page",
    }
  }
}
</script>
 
<style lang="scss" scoped>
</style>