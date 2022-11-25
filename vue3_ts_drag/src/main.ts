import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { key, store } from "./store";
import installElementPlus from "./plugins";
import installSpecialPanel from "./components/BasicLayout/CustomPanel/Specials";
import "./assets/styles/index.scss";


export const storageKey = "record";

const app = createApp(App);

installElementPlus(app);
installSpecialPanel(app);

app.use(store, key).use(router).mount("#root");
