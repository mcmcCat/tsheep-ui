// 使用并扩展默认主题 DefaultTheme
import DefaultTheme from "vitepress/theme";
import "../../../dist/style.css"; //以后换成 tsheep-ui 组件库的样式
import { tySelector,tyMessage } from "tsheep-ui"; //以后换成引入 tsheep-ui

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(tySelector);
    app.use(tyMessage);
  },
};
