<template>
    <div class="user_object">
      <router-link :to="href">
        {{ user.name }}( {{ user.sex }} )
      </router-link>
    </div>
</template>
 
<script>
 
export default {
  props: ["user"],
  computed: {
    href: function() {
      return "/html/users/" + this.user.id;
    }
  },
}
</script>
 
<style>
</style>