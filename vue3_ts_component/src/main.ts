import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "@/assets/scss/index.scss";

// import "element-plus/dist/index.css";

const app = createApp(App);

app.use(router);
app.mount("#app");
