import { createApp } from "vue";
import App from "./App.vue";
import TYUI from "tsheep-ui";
import "../dist/style.css";

const app = createApp(App);
app.use(TYUI);
app.mount("#app");
