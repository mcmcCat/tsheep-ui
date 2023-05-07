import tySelector from "./index.vue";

tySelector.install = (app) => {
  // 全局注册组件
  app.component(tySelector.name, tySelector);
};

export default tySelector;
