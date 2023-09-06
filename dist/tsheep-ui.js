import { computed as w, openBlock as u, createElementBlock as r, normalizeClass as S, unref as p, createElementVNode as d, renderSlot as j, getCurrentInstance as B, toDisplayString as V, pushScopeId as F, popScopeId as q, ref as f, onMounted as L, watch as k, Fragment as z, renderList as A, createBlock as C, reactive as E, toRefs as P, withDirectives as M, createVNode as b, Transition as Z, withCtx as H, normalizeStyle as R, createTextVNode as U, vShow as Y, createApp as G } from "vue";
const _ = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, c] of n)
    t[s] = c;
  return t;
}, J = {
  name: "tyButton"
}, K = /* @__PURE__ */ Object.assign(J, {
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const n = e, t = w(() => [
      "ty-button",
      n.type == "" ? "" : `ty-button-${n.type}`
    ]);
    return (s, c) => (u(), r("div", {
      class: S(p(t))
    }, [
      d("button", null, [
        j(s.$slots, "default", {}, void 0, !0)
      ])
    ], 2));
  }
}), h = /* @__PURE__ */ _(K, [["__scopeId", "data-v-25ffb706"]]);
h.install = (e) => {
  e.component(h.name, h);
};
const Q = { class: "" }, W = ["value"], X = {
  name: "tyInput"
}, g = /* @__PURE__ */ Object.assign(X, {
  props: {
    modelValue: String | Number
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = (s) => {
      n("update:modelValue", s.target.value);
    };
    return (s, c) => (u(), r("div", Q, [
      d("input", {
        type: "text",
        value: e.modelValue,
        onInput: t
      }, null, 40, W)
    ]));
  }
});
g.install = (e) => {
  e.component(g.name, g);
};
const ee = (e) => (F("data-v-a9322952"), e = e(), q(), e), te = { class: "selector-input" }, ne = {
  class: "placeholder",
  for: "input"
}, se = ["value"], oe = /* @__PURE__ */ ee(() => /* @__PURE__ */ d("span", { class: "iconfont icon-s-xiajiantou" }, null, -1)), ae = {
  name: "SelectorInput"
}, ce = /* @__PURE__ */ Object.assign(ae, {
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
  setup(e, { emit: n }) {
    const t = B(), s = (o) => {
      console.log(o.target.value), n("searchOptions", o.target.value);
    }, c = (o) => {
      console.log(`之前选中的option:${o}`);
      const a = t.refs.inputValue;
      a.value.length > 0 && (a.value = o);
    };
    return (o, a) => (u(), r("div", te, [
      d("label", ne, V(e.placeholder), 1),
      d("input", {
        ref: "inputValue",
        type: "text",
        class: "input",
        value: e.value,
        onInput: a[0] || (a[0] = (l) => s(l)),
        onFocus: a[1] || (a[1] = (l) => s(l)),
        onBlur: a[2] || (a[2] = (l) => c(e.value)),
        id: "input"
      }, null, 40, se),
      oe
    ]));
  }
}), O = /* @__PURE__ */ _(ce, [["__scopeId", "data-v-a9322952"]]);
const le = {
  name: "NoDataTip"
}, ue = { class: "no-data-tip" };
function re(e, n, t, s, c, o) {
  return u(), r("div", ue, " - 没有搜索到数据 - ");
}
const N = /* @__PURE__ */ _(le, [["render", re], ["__scopeId", "data-v-f720f1f5"]]);
const ie = { class: "selector-menu" }, de = ["onClick"], _e = {
  name: "SelectorMenu",
  components: {
    NoDataTip: N
  }
}, pe = /* @__PURE__ */ Object.assign(_e, {
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
  setup(e, { emit: n }) {
    const t = e, s = f([]);
    function c(a) {
      n("setItemValue", a);
    }
    const o = (a) => {
      s.value = t.data.filter((l) => l.text.toLowerCase().includes(t.searchValue.toLowerCase()));
    };
    return L(() => {
      s.value = t.data;
    }), k(() => t.searchValue, (a) => {
      o();
    }), (a, l) => (u(), r("div", ie, [
      s.value.length > 0 ? (u(!0), r(z, { key: 0 }, A(s.value, (i, I) => (u(), r("div", {
        class: "menu-item",
        key: I,
        onClick: ($) => c(i)
      }, V(i.text), 9, de))), 128)) : (u(), C(N, { key: 1 }))
    ]));
  }
}), D = /* @__PURE__ */ _(pe, [["__scopeId", "data-v-edc6401e"]]), fe = {
  mounted(e) {
    const n = e.querySelector(".selector-input"), t = e.querySelector(".selector-menu"), s = n.querySelector("input"), c = n.querySelector("label"), o = n.querySelector("span");
    s.addEventListener(
      "focus",
      function() {
        c.style.display = "none", o.className = "iconfont icon-sousuo", setTimeout(() => {
          t.style.display = "block";
        }, 200);
      },
      !1
    ), s.addEventListener(
      "blur",
      function() {
        o.className = "iconfont icon-s-xiajiantou", setTimeout(() => {
          t.style.display = "none", this.value.length === 0 && (c.style.display = "block");
        }, 200);
      },
      !1
    );
  }
};
const me = { class: "selector" }, ve = {
  name: "tySelector",
  components: {
    SelectorInput: O,
    SelectorMenu: D
  }
}, ye = /* @__PURE__ */ Object.assign(ve, {
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
  setup(e, { emit: n }) {
    const t = E({
      inputValue: "",
      searchValue: ""
    }), s = (l) => {
      t.inputValue = l.text, n("setItemValue", l.text);
    }, c = (l) => {
      t.searchValue = l;
    }, { inputValue: o, searchValue: a } = P(t);
    return (l, i) => M((u(), r("div", me, [
      b(O, {
        placeholder: e.placeholder,
        value: p(o),
        onSearchOptions: c
      }, null, 8, ["placeholder", "value"]),
      b(D, {
        data: e.data,
        onSetItemValue: s,
        searchValue: p(a)
      }, null, 8, ["data", "searchValue"])
    ])), [
      [p(fe)]
    ]);
  }
}), x = /* @__PURE__ */ _(ye, [["__scopeId", "data-v-16de97d0"]]);
x.install = (e) => {
  e.component(x.name, x);
};
const he = {
  __name: "index",
  props: {
    type: {
      type: String,
      default: "success"
    },
    message: {
      type: String,
      default: "success~"
    }
  },
  setup(e, { expose: n }) {
    const t = e, s = f(!1);
    let c = null;
    const o = f(20), a = f(999), l = ["message", t.type], i = w(() => t.type === "success" ? ["iconfont", "icon-ok-block"] : t.type === "warning" ? ["iconfont", "icon-exclamation-point-block"] : ["iconfont", "icon-close-block"]);
    function I(v) {
      return new Promise((y) => {
        s.value = v, c = setTimeout(() => {
          clearTimeout(c), c = null, y("fade动画执行完成");
        }, 300);
      });
    }
    function $(v, y) {
      o.value = v, a.value = y;
    }
    return n({
      setIsShow: I,
      setTop: $,
      height: 30,
      // 信息框的高度
      consTop: 20,
      // 信息框的固定间距
      consZIndex: 999
      // 最低层级
    }), (v, y) => (u(), C(Z, { name: "message-fade" }, {
      default: H(() => [
        M(d("div", {
          style: R({ "margin-top": o.value + "px", "z-index": a.value }),
          class: S(l)
        }, [
          d("i", {
            class: S(p(i))
          }, null, 2),
          U(" " + V(e.message), 1)
        ], 4), [
          [Y, s.value]
        ])
      ]),
      _: 1
    }));
  }
}, ge = /* @__PURE__ */ _(he, [["__scopeId", "data-v-9ff24a88"]]), xe = function(e) {
  const n = G(
    ge,
    e
    // 传给Message组件的props
  );
  Ie(n, e.duration);
}, m = f([]), Ie = function(e, n) {
  const t = document.createDocumentFragment(), s = e.mount(t);
  m.value.push(s), document.body.appendChild(t), T(s), s.setIsShow(!0), k(m, () => {
    T(s);
  }), Se(e, s, n);
}, Se = function(e, n, t) {
  n.timer = setTimeout(async () => {
    await n.setIsShow(!1), e.unmount(), m.value = m.value.filter((s) => s !== n), clearTimeout(n.timer), n.timer = null;
  }, t ?? 3e3);
}, T = function(e) {
  const { setTop: n, height: t, consTop: s, consZIndex: c } = e, o = m.value.findIndex((i) => i === e), a = t * o + (o + 1) * s, l = o + c;
  n(a, l);
}, Ve = (e, n) => (e.install = (t) => {
  e._context = t._context, t.config.globalProperties[n] = e;
}, e), $e = Ve(xe, "$message"), be = (e) => {
  e.use(h), e.use(g), e.use(x), e.use($e);
}, we = {
  install: be
};
export {
  we as default,
  h as tyButton,
  g as tyInput,
  $e as tyMessage,
  x as tySelector
};
