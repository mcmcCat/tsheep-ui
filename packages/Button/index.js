import tyButton from "./index.vue";

tyButton.install = (app) => {
  // 全局注册组件
  app.component(tyButton.name, tyButton);
};

export default tyButton;
