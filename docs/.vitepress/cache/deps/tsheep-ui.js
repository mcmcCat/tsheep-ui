import {
  Fragment,
  computed,
  createBaseVNode,
  createBlock,
  createElementBlock,
  createVNode,
  getCurrentInstance,
  normalizeClass,
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
  watch,
  withDirectives
} from "./chunk-R647EDCJ.js";

// node_modules/tsheep-ui/dist/tsheep-ui.js
var _ = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [n, c] of s)
    t[n] = c;
  return t;
};
var E = {
  name: "tyButton"
};
var F = Object.assign(E, {
  props: {
    type: {
      type: String,
      default: ""
    }
  },
  setup(e) {
    const s = e, t = computed(() => [
      "ty-button",
      s.type == "" ? "" : `ty-button-${s.type}`
    ]);
    return (n, c) => (openBlock(), createElementBlock("div", {
      class: normalizeClass(unref(t))
    }, [
      createBaseVNode("button", null, [
        renderSlot(n.$slots, "default", {}, void 0, true)
      ])
    ], 2));
  }
});
var p = _(F, [["__scopeId", "data-v-25ffb706"]]);
p.install = (e) => {
  e.component(p.name, p);
};
var A = { class: "" };
var z = ["value"];
var H = {
  name: "tyInput"
};
var f = Object.assign(H, {
  props: {
    modelValue: String | Number
  },
  emits: ["update:modelValue"],
  setup(e, { emit: s }) {
    const t = (n) => {
      s("update:modelValue", n.target.value);
    };
    return (n, c) => (openBlock(), createElementBlock("div", A, [
      createBaseVNode("input", {
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
var P = (e) => (pushScopeId("data-v-58c4a7f2"), e = e(), popScopeId(), e);
var R = { class: "selector-input" };
var U = {
  class: "placeholder",
  for: "input"
};
var Y = ["value"];
var G = P(() => createBaseVNode("span", { class: "iconfont icon-s-xiajiantou" }, null, -1));
var J = {
  name: "SelectorInput"
};
var K = Object.assign(J, {
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
    const t = getCurrentInstance(), n = (a) => {
      console.log(a.target.value), s("searchOptions", a.target.value);
    }, c = (a) => {
      console.log(`之前选中的option:${a}`);
      const o = t.refs.inputValue;
      o.value.length > 0 && (o.value = a);
    };
    return (a, o) => (openBlock(), createElementBlock("div", R, [
      createBaseVNode("label", U, toDisplayString(e.placeholder), 1),
      createBaseVNode("input", {
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
});
var g = _(K, [["__scopeId", "data-v-58c4a7f2"]]);
var Q = {
  name: "NoDataTip"
};
var W = { class: "no-data-tip" };
function X(e, s, t, n, c, a) {
  return openBlock(), createElementBlock("div", W, " - 没有搜索到数据 - ");
}
var I = _(Q, [["render", X], ["__scopeId", "data-v-f720f1f5"]]);
var Z = { class: "selector-menu" };
var ee = ["onClick"];
var te = {
  name: "SelectorMenu",
  components: {
    NoDataTip: I
  }
};
var ne = Object.assign(te, {
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
    const t = e, n = ref([]);
    function c(o) {
      s("setItemValue", o);
    }
    const a = (o) => {
      n.value = t.data.filter((l) => l.text.toLowerCase().includes(t.searchValue.toLowerCase()));
    };
    return onMounted(() => {
      n.value = t.data;
    }), watch(() => t.searchValue, (o) => {
      a();
    }), (o, l) => (openBlock(), createElementBlock("div", Z, [
      n.value.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(n.value, (m, S) => (openBlock(), createElementBlock("div", {
        class: "menu-item",
        key: S,
        onClick: (ue) => c(m)
      }, toDisplayString(m.text), 9, ee))), 128)) : (openBlock(), createBlock(I, { key: 1 }))
    ]));
  }
});
var V = _(ne, [["__scopeId", "data-v-edc6401e"]]);
var se = {
  mounted(e) {
    const s = e.querySelector(".selector-input"), t = e.querySelector(".selector-menu"), n = s.querySelector("input"), c = s.querySelector("label"), a = s.querySelector("span");
    n.addEventListener(
      "focus",
      function() {
        c.style.display = "none", a.className = "iconfont icon-sousuo", setTimeout(() => {
          t.style.display = "block";
        }, 200);
      },
      false
    ), n.addEventListener(
      "blur",
      function() {
        a.className = "iconfont icon-s-xiajiantou", setTimeout(() => {
          t.style.display = "none", this.value.length === 0 && (c.style.display = "block");
        }, 200);
      },
      false
    );
  }
};
var oe = { class: "selector" };
var ae = {
  name: "tySelector",
  components: {
    SelectorInput: g,
    SelectorMenu: V
  }
};
var ce = Object.assign(ae, {
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
    const t = reactive({
      inputValue: "",
      searchValue: ""
    }), n = (l) => {
      t.inputValue = l.text, s("setItemValue", l.text);
    }, c = (l) => {
      t.searchValue = l;
    }, { inputValue: a, searchValue: o } = toRefs(t);
    return (l, m) => withDirectives((openBlock(), createElementBlock("div", oe, [
      createVNode(g, {
        placeholder: e.placeholder,
        value: unref(a),
        onSearchOptions: c
      }, null, 8, ["placeholder", "value"]),
      createVNode(V, {
        data: e.data,
        onSetItemValue: n,
        searchValue: unref(o)
      }, null, 8, ["data", "searchValue"])
    ])), [
      [unref(se)]
    ]);
  }
});
var v = _(ce, [["__scopeId", "data-v-16de97d0"]]);
v.install = (e) => {
  e.component(v.name, v);
};
var le = (e) => {
  e.use(p), e.use(f), e.use(v);
};
var ie = {
  install: le
};
export {
  ie as default,
  p as tyButton,
  f as tyInput,
  v as tySelector
};
//# sourceMappingURL=tsheep-ui.js.map
