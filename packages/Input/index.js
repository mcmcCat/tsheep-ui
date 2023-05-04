import tyInput from "./index.vue";

tyInput.install = (app) => {
  app.component(tyInput.name, tyInput);
};

export default tyInput;
