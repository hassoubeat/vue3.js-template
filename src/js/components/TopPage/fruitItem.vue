<template>
  <div class="fruit_object">
    <span class="ja_name">{{ fruit.ja_name }}</span> (英名：<span class="en_name">{{ fruit.en_name }}</span>)
    <div class="fruit_description">説明：{{ fruit.description }}</div>
    <div class="fruit_object_detail">オブジェクト内容：<slot></slot></div>
  </div>
</template>

<script>
  export default {
    props: ["fruit"],
  };
</script>

<style scoped>
  .green {
    color: green;
  }
</style>