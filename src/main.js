import { createApp } from "vue";
import App from "./App.vue";
import TYUI from "tsheep-ui"; //开发新组件记得把这个tsheep-ui 改为 "../packages/index.js"
import "../dist/style.css";

const app = createApp(App);
app.use(TYUI);
app.mount("#app");
