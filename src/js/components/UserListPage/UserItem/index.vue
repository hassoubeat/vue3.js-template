<template>
    <div class="user_object">
      <router-link :to="href">
        {{ user.name }}( {{ user.sex }} )
      </router-link>
    </div>
</template>
 
<script>

import { ROUTING_PATH } from "../../../const";
 
export default {
  props: ["user"],
  computed: {
    href() {
      return ROUTING_PATH.USER_DETAIL_OUT_ID + this.user.id;
    }
  },
}
</script>
 
<style>
</style>