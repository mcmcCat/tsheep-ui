import { computed as x, openBlock as u, createElementBlock as r, normalizeClass as $, unref as d, createElementVNode as i, renderSlot as b, getCurrentInstance as k, toDisplayString as h, pushScopeId as O, popScopeId as C, ref as D, onMounted as N, watch as j, Fragment as B, renderList as T, createBlock as q, reactive as w, toRefs as L, withDirectives as M, createVNode as y } from "vue";
const _ = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, c] of s)
    t[n] = c;
  return t;
}, E = {
  name: "tyButton"
}, F = /* @__PURE__ */ Object.assign(E, {
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const s = e, t = x(() => [
      "ty-button",
      s.type == "" ? "" : `ty-button-${s.type}`
    ]);
    return (n, c) => (u(), r("div", {
      class: $(d(t))
    }, [
      i("button", null, [
        b(n.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), p = /* @__PURE__ */ _(F, [["__scopeId", "data-v-25ffb706"]]);
p.install = (e) => {
  e.component(p.name, p);
};
const A = { class: "" }, z = ["value"], H = {
  name: "tyInput"
}, f = /* @__PURE__ */ Object.assign(H, {
  props: {
    modelValue: String | Number
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const t = (n) => {
      s("update:modelValue", n.target.value);
    };
    return (n, c) => (u(), r("div", A, [
      i("input", {
        type: "text",
        value: e.modelValue,
        onInput: t
      }, null, 40, z)
    ]));
  }
});
f.install = (e) => {
  e.component(f.name, f);
};
const P = (e) => (O("data-v-58c4a7f2"), e = e(), C(), e), R = { class: "selector-input" }, U = {
  class: "placeholder",
  for: "input"
}, Y = ["value"], G = /* @__PURE__ */ P(() => /* @__PURE__ */ i("span", { class: "iconfont icon-s-xiajiantou" }, null, -1)), J = {
  name: "SelectorInput"
}, K = /* @__PURE__ */ Object.assign(J, {
  props: {
    placeholder: {
      type: String,
      default: "请选择"
    },
    value: {
      type: String,
      default: ""
    }
  },
  emits: ["searchOptions"],
  setup(e, { emit: s }) {
    const t = k(), n = (a) => {
      console.log(a.target.value), s("searchOptions", a.target.value);
    }, c = (a) => {
      console.log(`之前选中的option:${a}`);
      const o = t.refs.inputValue;
      o.value.length > 0 && (o.value = a);
    };
    return (a, o) => (u(), r("div", R, [
      i("label", U, h(e.placeholder), 1),
      i("input", {
        ref: "inputValue",
        type: "text",
        class: "input",
        value: e.value,
        onInput: o[0] || (o[0] = (l) => n(l)),
        onFocus: o[1] || (o[1] = (l) => n(l)),
        onBlur: o[2] || (o[2] = (l) => c(e.value)),
        id: "input"
      }, null, 40, Y),
      G
    ]));
  }
}), g = /* @__PURE__ */ _(K, [["__scopeId", "data-v-58c4a7f2"]]);
const Q = {
  name: "NoDataTip"
}, W = { class: "no-data-tip" };
function X(e, s, t, n, c, a) {
  return u(), r("div", W, " - 没有搜索到数据 - ");
}
const I = /* @__PURE__ */ _(Q, [["render", X], ["__scopeId", "data-v-f720f1f5"]]);
const Z = { class: "selector-menu" }, ee = ["onClick"], te = {
  name: "SelectorMenu",
  components: {
    NoDataTip: I
  }
}, ne = /* @__PURE__ */ Object.assign(te, {
  props: {
    data: {
      type: Array,
      default: () => [
        {
          id: 1,
          value: "1",
          text: "选项1"
        },
        {
          id: 2,
          value: "2",
          text: "选项2"
        },
        {
          id: 3,
          value: "3",
          text: "选项3"
        }
      ]
    },
    searchValue: {
      type: String,
      default: ""
    }
  },
  emits: ["setItemValue"],
  setup(e, { emit: s }) {
    const t = e, n = D([]);
    function c(o) {
      s("setItemValue", o);
    }
    const a = (o) => {
      n.value = t.data.filter((l) => l.text.toLowerCase().includes(t.searchValue.toLowerCase()));
    };
    return N(() => {
      n.value = t.data;
    }), j(() => t.searchValue, (o) => {
      a();
    }), (o, l) => (u(), r("div", Z, [
      n.value.length > 0 ? (u(!0), r(B, { key: 0 }, T(n.value, (m, S) => (u(), r("div", {
        class: "menu-item",
        key: S,
        onClick: (ue) => c(m)
      }, h(m.text), 9, ee))), 128)) : (u(), q(I, { key: 1 }))
    ]));
  }
}), V = /* @__PURE__ */ _(ne, [["__scopeId", "data-v-edc6401e"]]), se = {
  mounted(e) {
    const s = e.querySelector(".selector-input"), t = e.querySelector(".selector-menu"), n = s.querySelector("input"), c = s.querySelector("label"), a = s.querySelector("span");
    n.addEventListener(
      "focus",
      function() {
        c.style.display = "none", a.className = "iconfont icon-sousuo", setTimeout(() => {
          t.style.display = "block";
        }, 200);
      },
      !1
    ), n.addEventListener(
      "blur",
      function() {
        a.className = "iconfont icon-s-xiajiantou", setTimeout(() => {
          t.style.display = "none", this.value.length === 0 && (c.style.display = "block");
        }, 200);
      },
      !1
    );
  }
};
const oe = { class: "selector" }, ae = {
  name: "tySelector",
  components: {
    SelectorInput: g,
    SelectorMenu: V
  }
}, ce = /* @__PURE__ */ Object.assign(ae, {
  props: {
    placeholder: {
      type: String,
      default: ""
    },
    data: {
      type: Array
    }
  },
  emits: ["setItemValue"],
  setup(e, { emit: s }) {
    const t = w({
      inputValue: "",
      searchValue: ""
    }), n = (l) => {
      t.inputValue = l.text, s("setItemValue", l.text);
    }, c = (l) => {
      t.searchValue = l;
    }, { inputValue: a, searchValue: o } = L(t);
    return (l, m) => M((u(), r("div", oe, [
      y(g, {
        placeholder: e.placeholder,
        value: d(a),
        onSearchOptions: c
      }, null, 8, ["placeholder", "value"]),
      y(V, {
        data: e.data,
        onSetItemValue: n,
        searchValue: d(o)
      }, null, 8, ["data", "searchValue"])
    ])), [
      [d(se)]
    ]);
  }
}), v = /* @__PURE__ */ _(ce, [["__scopeId", "data-v-16de97d0"]]);
v.install = (e) => {
  e.component(v.name, v);
};
const le = (e) => {
  e.use(p), e.use(f), e.use(v);
}, ie = {
  install: le
};
export {
  ie as default,
  p as tyButton,
  f as tyInput,
  v as tySelector
};
