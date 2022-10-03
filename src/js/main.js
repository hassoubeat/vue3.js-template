import { createApp } from 'vue';
import App from "~/js/components/app.vue";
import store from "~/js/store";
import router from "~/js/router";

// 共通CSS(JSにバンドルするためにここでimportしておく)
import "~/sass/common.scss";

var app = createApp(App);
app.use(store);
app.use(router);
app.mount('#vue-mount-position');