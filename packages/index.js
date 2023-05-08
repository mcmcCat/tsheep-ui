import tyButton from "./Button/index.js";
import tyInput from "./Input/index.js";
import tySelector from "./Selector/index.js";

const install = (app) => {
  app.use(tyButton);
  app.use(tyInput);
  app.use(tySelector);
};
const TYUI = {
  install,
};

export { tyButton, tyInput, tySelector }; //分别导出，按需引入时 main.js 里用到 import { tyButton,tyInput } from 'TYUI'
export default TYUI; // 全局导出
