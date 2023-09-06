import {
  Fragment,
  Transition,
  computed,
  createApp,
  createBaseVNode,
  createBlock,
  createElementBlock,
  createTextVNode,
  createVNode,
  getCurrentInstance,
  normalizeClass,
  normalizeStyle,
  onMounted,
  openBlock,
  popScopeId,
  pushScopeId,
  reactive,
  ref,
  renderList,
  renderSlot,
  toDisplayString,
  toRefs,
  unref,
  vShow,
  watch,
  withCtx,
  withDirectives
} from "./chunk-R647EDCJ.js";

// node_modules/tsheep-ui/dist/tsheep-ui.js
var _ = (e, n) => {
  const t = e.__vccOpts || e;
  for (const [s, c] of n)
    t[s] = c;
  return t;
};
var J = {
  name: "tyButton"
};
var K = Object.assign(J, {
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const n = e, t = computed(() => [
      "ty-button",
      n.type == "" ? "" : `ty-button-${n.type}`
    ]);
    return (s, c) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(t))
    }, [
      createBaseVNode("button", null, [
        renderSlot(s.$slots, "default", {}, void 0, true)
      ])
    ], 2));
  }
});
var h = _(K, [["__scopeId", "data-v-25ffb706"]]);
h.install = (e) => {
  e.component(h.name, h);
};
var Q = { class: "" };
var W = ["value"];
var X = {
  name: "tyInput"
};
var g = Object.assign(X, {
  props: {
    modelValue: String | Number
  },
  emits: ["update:modelValue"],
  setup(e, { emit: n }) {
    const t = (s) => {
      n("update:modelValue", s.target.value);
    };
    return (s, c) => (openBlock(), createElementBlock("div", Q, [
      createBaseVNode("input", {
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
var ee = (e) => (pushScopeId("data-v-a9322952"), e = e(), popScopeId(), e);
var te = { class: "selector-input" };
var ne = {
  class: "placeholder",
  for: "input"
};
var se = ["value"];
var oe = ee(() => createBaseVNode("span", { class: "iconfont icon-s-xiajiantou" }, null, -1));
var ae = {
  name: "SelectorInput"
};
var ce = Object.assign(ae, {
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
    const t = getCurrentInstance(), s = (o) => {
      console.log(o.target.value), n("searchOptions", o.target.value);
    }, c = (o) => {
      console.log(`之前选中的option:${o}`);
      const a = t.refs.inputValue;
      a.value.length > 0 && (a.value = o);
    };
    return (o, a) => (openBlock(), createElementBlock("div", te, [
      createBaseVNode("label", ne, toDisplayString(e.placeholder), 1),
      createBaseVNode("input", {
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
});
var O = _(ce, [["__scopeId", "data-v-a9322952"]]);
var le = {
  name: "NoDataTip"
};
var ue = { class: "no-data-tip" };
function re(e, n, t, s, c, o) {
  return openBlock(), createElementBlock("div", ue, " - 没有搜索到数据 - ");
}
var N = _(le, [["render", re], ["__scopeId", "data-v-f720f1f5"]]);
var ie = { class: "selector-menu" };
var de = ["onClick"];
var _e = {
  name: "SelectorMenu",
  components: {
    NoDataTip: N
  }
};
var pe = Object.assign(_e, {
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
    const t = e, s = ref([]);
    function c(a) {
      n("setItemValue", a);
    }
    const o = (a) => {
      s.value = t.data.filter((l) => l.text.toLowerCase().includes(t.searchValue.toLowerCase()));
    };
    return onMounted(() => {
      s.value = t.data;
    }), watch(() => t.searchValue, (a) => {
      o();
    }), (a, l) => (openBlock(), createElementBlock("div", ie, [
      s.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(s.value, (i, I) => (openBlock(), createElementBlock("div", {
        class: "menu-item",
        key: I,
        onClick: ($) => c(i)
      }, toDisplayString(i.text), 9, de))), 128)) : (openBlock(), createBlock(N, { key: 1 }))
    ]));
  }
});
var D = _(pe, [["__scopeId", "data-v-edc6401e"]]);
var fe = {
  mounted(e) {
    const n = e.querySelector(".selector-input"), t = e.querySelector(".selector-menu"), s = n.querySelector("input"), c = n.querySelector("label"), o = n.querySelector("span");
    s.addEventListener(
      "focus",
      function() {
        c.style.display = "none", o.className = "iconfont icon-sousuo", setTimeout(() => {
          t.style.display = "block";
        }, 200);
      },
      false
    ), s.addEventListener(
      "blur",
      function() {
        o.className = "iconfont icon-s-xiajiantou", setTimeout(() => {
          t.style.display = "none", this.value.length === 0 && (c.style.display = "block");
        }, 200);
      },
      false
    );
  }
};
var me = { class: "selector" };
var ve = {
  name: "tySelector",
  components: {
    SelectorInput: O,
    SelectorMenu: D
  }
};
var ye = Object.assign(ve, {
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
    const t = reactive({
      inputValue: "",
      searchValue: ""
    }), s = (l) => {
      t.inputValue = l.text, n("setItemValue", l.text);
    }, c = (l) => {
      t.searchValue = l;
    }, { inputValue: o, searchValue: a } = toRefs(t);
    return (l, i) => withDirectives((openBlock(), createElementBlock("div", me, [
      createVNode(O, {
        placeholder: e.placeholder,
        value: unref(o),
        onSearchOptions: c
      }, null, 8, ["placeholder", "value"]),
      createVNode(D, {
        data: e.data,
        onSetItemValue: s,
        searchValue: unref(a)
      }, null, 8, ["data", "searchValue"])
    ])), [
      [unref(fe)]
    ]);
  }
});
var x = _(ye, [["__scopeId", "data-v-16de97d0"]]);
x.install = (e) => {
  e.component(x.name, x);
};
var he = {
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
    const t = e, s = ref(false);
    let c = null;
    const o = ref(20), a = ref(999), l = ["message", t.type], i = computed(() => t.type === "success" ? ["iconfont", "icon-ok-block"] : t.type === "warning" ? ["iconfont", "icon-exclamation-point-block"] : ["iconfont", "icon-close-block"]);
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
    }), (v, y) => (openBlock(), createBlock(Transition, { name: "message-fade" }, {
      default: withCtx(() => [
        withDirectives(createBaseVNode("div", {
          style: normalizeStyle({ "margin-top": o.value + "px", "z-index": a.value }),
          class: normalizeClass(l)
        }, [
          createBaseVNode("i", {
            class: normalizeClass(unref(i))
          }, null, 2),
          createTextVNode(" " + toDisplayString(e.message), 1)
        ], 4), [
          [vShow, s.value]
        ])
      ]),
      _: 1
    }));
  }
};
var ge = _(he, [["__scopeId", "data-v-9ff24a88"]]);
var xe = function(e) {
  const n = createApp(
    ge,
    e
    // 传给Message组件的props
  );
  Ie(n, e.duration);
};
var m = ref([]);
var Ie = function(e, n) {
  const t = document.createDocumentFragment(), s = e.mount(t);
  m.value.push(s), document.body.appendChild(t), T(s), s.setIsShow(true), watch(m, () => {
    T(s);
  }), Se(e, s, n);
};
var Se = function(e, n, t) {
  n.timer = setTimeout(async () => {
    await n.setIsShow(false), e.unmount(), m.value = m.value.filter((s) => s !== n), clearTimeout(n.timer), n.timer = null;
  }, t ?? 3e3);
};
var T = function(e) {
  const { setTop: n, height: t, consTop: s, consZIndex: c } = e, o = m.value.findIndex((i) => i === e), a = t * o + (o + 1) * s, l = o + c;
  n(a, l);
};
var Ve = (e, n) => (e.install = (t) => {
  e._context = t._context, t.config.globalProperties[n] = e;
}, e);
var $e = Ve(xe, "$message");
var be = (e) => {
  e.use(h), e.use(g), e.use(x), e.use($e);
};
var we = {
  install: be
};
export {
  we as default,
  h as tyButton,
  g as tyInput,
  $e as tyMessage,
  x as tySelector
};
//# sourceMappingURL=tsheep-ui.js.map
