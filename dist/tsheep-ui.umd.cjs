(function(i,e){typeof exports=="object"&&typeof module<"u"?e(exports,require("vue")):typeof define=="function"&&define.amd?define(["exports","vue"],e):(i=typeof globalThis<"u"?globalThis:i||self,e(i["tsheep-ui"]={},i.Vue))})(this,function(i,e){"use strict";const H="",_=(t,o)=>{const n=t.__vccOpts||t;for(const[s,l]of o)n[s]=l;return n},d=_(Object.assign({name:"tyButton"},{props:{type:{type:String,default:""}},setup(t){const o=t,n=e.computed(()=>["ty-button",o.type==""?"":`ty-button-${o.type}`]);return(s,l)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(e.unref(n))},[e.createElementVNode("button",null,[e.renderSlot(s.$slots,"default",{},void 0,!0)])],2))}}),[["__scopeId","data-v-25ffb706"]]);d.install=t=>{t.component(d.name,d)};const B={class:""},b=["value"],p=Object.assign({name:"tyInput"},{props:{modelValue:String|Number},emits:["update:modelValue"],setup(t,{emit:o}){const n=s=>{o("update:modelValue",s.target.value)};return(s,l)=>(e.openBlock(),e.createElementBlock("div",B,[e.createElementVNode("input",{type:"text",value:t.modelValue,onInput:n},null,40,b)]))}});p.install=t=>{t.component(p.name,p)};const G="",J="",T=t=>(e.pushScopeId("data-v-a9322952"),t=t(),e.popScopeId(),t),w={class:"selector-input"},E={class:"placeholder",for:"input"},N=["value"],C=T(()=>e.createElementVNode("span",{class:"iconfont icon-s-xiajiantou"},null,-1)),x=_(Object.assign({name:"SelectorInput"},{props:{placeholder:{type:String,default:"请选择"},value:{type:String,default:""}},emits:["searchOptions"],setup(t,{emit:o}){const n=e.getCurrentInstance(),s=a=>{console.log(a.target.value),o("searchOptions",a.target.value)},l=a=>{console.log(`之前选中的option:${a}`);const c=n.refs.inputValue;c.value.length>0&&(c.value=a)};return(a,c)=>(e.openBlock(),e.createElementBlock("div",w,[e.createElementVNode("label",E,e.toDisplayString(t.placeholder),1),e.createElementVNode("input",{ref:"inputValue",type:"text",class:"input",value:t.value,onInput:c[0]||(c[0]=r=>s(r)),onFocus:c[1]||(c[1]=r=>s(r)),onBlur:c[2]||(c[2]=r=>l(t.value)),id:"input"},null,40,N),C]))}}),[["__scopeId","data-v-a9322952"]]),W="",M={name:"NoDataTip"},D={class:"no-data-tip"};function O(t,o,n,s,l,a){return e.openBlock(),e.createElementBlock("div",D," - 没有搜索到数据 - ")}const I=_(M,[["render",O],["__scopeId","data-v-f720f1f5"]]),X="",j={class:"selector-menu"},v=["onClick"],S=_(Object.assign({name:"SelectorMenu",components:{NoDataTip:I}},{props:{data:{type:Array,default:()=>[{id:1,value:"1",text:"选项1"},{id:2,value:"2",text:"选项2"},{id:3,value:"3",text:"选项3"}]},searchValue:{type:String,default:""}},emits:["setItemValue"],setup(t,{emit:o}){const n=t,s=e.ref([]);function l(c){o("setItemValue",c)}const a=c=>{s.value=n.data.filter(r=>r.text.toLowerCase().includes(n.searchValue.toLowerCase()))};return e.onMounted(()=>{s.value=n.data}),e.watch(()=>n.searchValue,c=>{a()}),(c,r)=>(e.openBlock(),e.createElementBlock("div",j,[s.value.length>0?(e.openBlock(!0),e.createElementBlock(e.Fragment,{key:0},e.renderList(s.value,(u,g)=>(e.openBlock(),e.createElementBlock("div",{class:"menu-item",key:g,onClick:k=>l(u)},e.toDisplayString(u.text),9,v))),128)):(e.openBlock(),e.createBlock(I,{key:1}))]))}}),[["__scopeId","data-v-edc6401e"]]),F={mounted(t){const o=t.querySelector(".selector-input"),n=t.querySelector(".selector-menu"),s=o.querySelector("input"),l=o.querySelector("label"),a=o.querySelector("span");s.addEventListener("focus",function(){l.style.display="none",a.className="iconfont icon-sousuo",setTimeout(()=>{n.style.display="block"},200)},!1),s.addEventListener("blur",function(){a.className="iconfont icon-s-xiajiantou",setTimeout(()=>{n.style.display="none",this.value.length===0&&(l.style.display="block")},200)},!1)}},ne="",q={class:"selector"},f=_(Object.assign({name:"tySelector",components:{SelectorInput:x,SelectorMenu:S}},{props:{placeholder:{type:String,default:""},data:{type:Array}},emits:["setItemValue"],setup(t,{emit:o}){const n=e.reactive({inputValue:"",searchValue:""}),s=r=>{n.inputValue=r.text,o("setItemValue",r.text)},l=r=>{n.searchValue=r},{inputValue:a,searchValue:c}=e.toRefs(n);return(r,u)=>e.withDirectives((e.openBlock(),e.createElementBlock("div",q,[e.createVNode(x,{placeholder:t.placeholder,value:e.unref(a),onSearchOptions:l},null,8,["placeholder","value"]),e.createVNode(S,{data:t.data,onSetItemValue:s,searchValue:e.unref(c)},null,8,["data","searchValue"])])),[[e.unref(F)]])}}),[["__scopeId","data-v-16de97d0"]]);f.install=t=>{t.component(f.name,f)};const ae="",z=_({__name:"index",props:{type:{type:String,default:"success"},message:{type:String,default:"success~"}},setup(t,{expose:o}){const n=t,s=e.ref(!1);let l=null;const a=e.ref(20),c=e.ref(999),r=["message",n.type],u=e.computed(()=>n.type==="success"?["iconfont","icon-ok-block"]:n.type==="warning"?["iconfont","icon-exclamation-point-block"]:["iconfont","icon-close-block"]);function g(y){return new Promise(h=>{s.value=y,l=setTimeout(()=>{clearTimeout(l),l=null,h("fade动画执行完成")},300)})}function k(y,h){a.value=y,c.value=h}return o({setIsShow:g,setTop:k,height:30,consTop:20,consZIndex:999}),(y,h)=>(e.openBlock(),e.createBlock(e.Transition,{name:"message-fade"},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("div",{style:e.normalizeStyle({"margin-top":a.value+"px","z-index":c.value}),class:e.normalizeClass(r)},[e.createElementVNode("i",{class:e.normalizeClass(e.unref(u))},null,2),e.createTextVNode(" "+e.toDisplayString(t.message),1)],4),[[e.vShow,s.value]])]),_:1}))}},[["__scopeId","data-v-9ff24a88"]]),L=function(t){const o=e.createApp(z,t);A(o,t.duration)},m=e.ref([]),A=function(t,o){const n=document.createDocumentFragment(),s=t.mount(n);m.value.push(s),document.body.appendChild(n),V(s),s.setIsShow(!0),e.watch(m,()=>{V(s)}),P(t,s,o)},P=function(t,o,n){o.timer=setTimeout(async()=>{await o.setIsShow(!1),t.unmount(),m.value=m.value.filter(s=>s!==o),clearTimeout(o.timer),o.timer=null},n??3e3)},V=function(t){const{setTop:o,height:n,consTop:s,consZIndex:l}=t,a=m.value.findIndex(u=>u===t),c=n*a+(a+1)*s,r=a+l;o(c,r)},$=((t,o)=>(t.install=n=>{t._context=n._context,n.config.globalProperties[o]=t},t))(L,"$message"),Z={install:t=>{t.use(d),t.use(p),t.use(f),t.use($)}};i.default=Z,i.tyButton=d,i.tyInput=p,i.tyMessage=$,i.tySelector=f,Object.defineProperties(i,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})});
