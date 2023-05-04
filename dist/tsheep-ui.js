import { computed as r, openBlock as l, createElementBlock as c, normalizeClass as p, unref as d, createElementVNode as _, renderSlot as i } from "vue";
const m = (t, e) => {
  const n = t.__vccOpts || t;
  for (const [o, a] of e)
    n[o] = a;
  return n;
}, f = {
  name: "tyButton"
}, y = /* @__PURE__ */ Object.assign(f, {
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  setup(t) {
    const e = t, n = r(() => [
      "ty-button",
      e.type == "" ? "" : `ty-button-${e.type}`
    ]);
    return (o, a) => (l(), c("div", {
      class: p(d(n))
    }, [
      _("button", null, [
        i(o.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), s = /* @__PURE__ */ m(y, [["__scopeId", "data-v-25ffb706"]]);
s.install = (t) => {
  t.component(s.name, s);
};
const v = { class: "" }, b = ["value"], g = {
  name: "tyInput"
}, u = /* @__PURE__ */ Object.assign(g, {
  props: {
    modelValue: String | Number
  },
  emits: ["update:modelValue"],
  setup(t, { emit: e }) {
    const n = (o) => {
      e("update:modelValue", o.target.value);
    };
    return (o, a) => (l(), c("div", v, [
      _("input", {
        type: "text",
        value: t.modelValue,
        onInput: n
      }, null, 40, b)
    ]));
  }
});
u.install = (t) => {
  t.component(u.name, u);
};
const x = (t) => {
  t.use(s), t.use(u);
}, I = {
  install: x
};
export {
  I as default,
  s as tyButton,
  u as tyInput
};
