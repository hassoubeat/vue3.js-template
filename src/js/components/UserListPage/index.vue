<template>
    <h1>{{h1Text}}</h1>
    <user-item v-for="(user, index) in users" v-bind:user="user" :key="index"></user-item>
</template>
 
<script>

import UserItem from './UserItem/index.vue';
 
export default {
  created() {
    console.log("created " + this.h1Text);
  },
  data(){
    return {
      h1Text: "Vue3.js KichenSink User List Page",
      users: [
        {
          id: 1,
          name: "ジョン",
          sex: "male"
        },
        {
          id: 2,
          name: "ケイト",
          sex: "female"
        },
        {
          id: 3,
          name: "ハリー",
          sex: "male"
        },
      ]
    }
  },
  components: {
    'user-item': UserItem,
  },
}
</script>
 
<style>
</style>