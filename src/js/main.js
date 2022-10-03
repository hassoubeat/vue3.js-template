import { createApp } from 'vue';
import App from "~/components/app.vue";
import store from "~/store";
import router from "~/router";

// 共通CSS
import "../sass/common.scss";

var app = createApp(App);
app.use(store);
app.use(router);
app.mount('#vue-mount-position');