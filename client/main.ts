import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";

import i18nConf from "./i18n/index";
const i18n = createI18n(i18nConf);

const app = createApp(App);

app.use(router);
app.use(i18n);

app.mount("#app");
