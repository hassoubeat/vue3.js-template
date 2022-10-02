<template>
  <div class="fruit-item">
    <span class="ja-name">{{ fruit.jaName }}</span> (英名：<span class="enName">{{ fruit.enName }}</span>)
    <div class="detail">説明：{{ fruit.description }}</div>
    <div class="detail">オブジェクト内容：<slot></slot></div>
  </div>
</template>

<script>
  export default {
    props: ["fruit"],
  };
</script>

<style lang="scss" scoped>

  .fruit-item {
    background-color: white;
    border: solid 2px;
    border-radius: 10px;
    padding: 15px;
    margin: 10px;
    color: dimgray;

    .ja-name {
      text-shadow: 1px 2px 3px #808080;
    }

    .detail {
      font-size: 0.8rem;
      margin: 10px 0px;
    }
  }
</style>