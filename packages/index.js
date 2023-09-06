import tyButton from "./Button/index.js";
import tyInput from "./Input/index.js";
import tySelector from "./Selector/index.js";
import tyMessage from "./Message/index.js"

const install = (app) => {
  app.use(tyButton);
  app.use(tyInput);
  app.use(tySelector);
  app.use(tyMessage);
};
const TYUI = {
  install,
};



export { tyButton, tyInput, tySelector,tyMessage }; //分别导出，这样能够实现按需引入，在需要用到的组件中或者在 main.js 中 import { tyMessage } from '../packages/index.js'
export default TYUI; // 全局导出
