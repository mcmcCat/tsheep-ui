import tyButton from "./Button/index.js";
import tyInput from "./Input/index.js";

const install = (app) => {
  app.use(tyButton);
  app.use(tyInput);
};
const TYUI = {
  install,
};

export { tyButton, tyInput }; //分别导出，按需引入时用到 import { tyButton,tyInput } from 'TUI'
export default TYUI; // 全局导出
