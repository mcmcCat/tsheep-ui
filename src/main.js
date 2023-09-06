import { createApp } from "vue";
import App from "./App.vue";
import TYUI from "tsheep-ui"; //开发新组件记得把这个tsheep-ui 改为 "../packages/index.js",发布npm后改回tsheep-ui测试一下
import "../dist/style.css";
import './assets/icon/iconfont.css';


const app = createApp(App);
app.use(TYUI);
app.mount("#app");
