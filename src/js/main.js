import { createApp } from 'vue';
import App from "~/components/app.vue";
import store from "~/store";
import router from "~/router";

var app = createApp(App);
app.use(store);
app.use(router);
app.mount('#main-content');