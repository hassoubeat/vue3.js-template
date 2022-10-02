export default {
  created: function () {
    console.log("created mixin " + this.h1_text);
  },
  data: function() {
    return {
      h1_text: "mixin default"
    }
  },
  computed: {
    is_login: function() {
      return this.$store.state.isLogin
    }
  },
  methods: {
    login () {
      this.$store.commit("changeIsLogin", true);
      console.log("loggined:" + this.is_login);
    },
    logout() {
      this.$store.commit("changeIsLogin", false);
      console.log("loggined" + this.is_login);
    },
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}