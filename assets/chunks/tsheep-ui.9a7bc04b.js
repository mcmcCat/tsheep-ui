import{h as m,o as u,c as i,z as p,ah as D,w,l as N,r as L,n as V,b as v,ai as q,aj as z,ak as O,G as T,t as b,p as A,F,L as M,A as j,B as E,H as P,a as Z,al as G,T as H,M as J,N as K,m as Q}from"./framework.d51f5171.js";const d=(e,a)=>{const t=e.__vccOpts||e;for(const[s,l]of a)t[s]=l;return t},R={name:"tyButton"},W=Object.assign(R,{props:{type:{type:String,default:""}},setup(e){const a=e,t=N(()=>["ty-button",a.type==""?"":`ty-button-${a.type}`]);return(s,l)=>(u(),i("div",{class:V(v(t))},[p("button",null,[L(s.$slots,"default",{},void 0,!0)])],2))}}),S=d(W,[["__scopeId","data-v-25ffb706"]]);S.install=e=>{e.component(S.name,S)};const X={class:""},U=["value"],Y={name:"tyInput"},I=Object.assign(Y,{props:{modelValue:String|Number},emits:["update:modelValue"],setup(e,{emit:a}){const t=s=>{a("update:modelValue",s.target.value)};return(s,l)=>(u(),i("div",X,[p("input",{type:"text",value:e.modelValue,onInput:t},null,40,U)]))}});I.install=e=>{e.component(I.name,I)};const ee=e=>(J("data-v-a9322952"),e=e(),K(),e),te={class:"selector-input"},ae={class:"placeholder",for:"input"},se=["value"],ne=ee(()=>p("span",{class:"iconfont icon-s-xiajiantou"},null,-1)),oe={name:"SelectorInput"},le=Object.assign(oe,{props:{placeholder:{type:String,default:"请选择"},value:{type:String,default:""}},emits:["searchOptions"],setup(e,{emit:a}){const t=Q(),s=n=>{console.log(n.target.value),a("searchOptions",n.target.value)},l=n=>{console.log(`之前选中的option:${n}`);const o=t.refs.inputValue;o.value.length>0&&(o.value=n)};return(n,o)=>(u(),i("div",te,[p("label",ae,b(e.placeholder),1),p("input",{ref:"inputValue",type:"text",class:"input",value:e.value,onInput:o[0]||(o[0]=c=>s(c)),onFocus:o[1]||(o[1]=c=>s(c)),onBlur:o[2]||(o[2]=c=>l(e.value)),id:"input"},null,40,se),ne]))}}),C=d(le,[["__scopeId","data-v-a9322952"]]),ce={name:"NoDataTip"},ue={class:"no-data-tip"};function ie(e,a,t,s,l,n){return u(),i("div",ue," - 没有搜索到数据 - ")}const $=d(ce,[["render",ie],["__scopeId","data-v-f720f1f5"]]),re={class:"selector-menu"},pe=["onClick"],de={name:"SelectorMenu",components:{NoDataTip:$}},me=Object.assign(de,{props:{data:{type:Array,default:()=>[{id:1,value:"1",text:"选项1"},{id:2,value:"2",text:"选项2"},{id:3,value:"3",text:"选项3"}]},searchValue:{type:String,default:""}},emits:["setItemValue"],setup(e,{emit:a}){const t=e,s=m([]);function l(o){a("setItemValue",o)}const n=o=>{s.value=t.data.filter(c=>c.text.toLowerCase().includes(t.searchValue.toLowerCase()))};return A(()=>{s.value=t.data}),w(()=>t.searchValue,o=>{n()}),(o,c)=>(u(),i("div",re,[s.value.length>0?(u(!0),i(F,{key:0},M(s.value,(r,g)=>(u(),i("div",{class:"menu-item",key:g,onClick:_=>l(r)},b(r.text),9,pe))),128)):(u(),j($,{key:1}))]))}}),B=d(me,[["__scopeId","data-v-edc6401e"]]),ve={mounted(e){const a=e.querySelector(".selector-input"),t=e.querySelector(".selector-menu"),s=a.querySelector("input"),l=a.querySelector("label"),n=a.querySelector("span");s.addEventListener("focus",function(){l.style.display="none",n.className="iconfont icon-sousuo",setTimeout(()=>{t.style.display="block"},200)},!1),s.addEventListener("blur",function(){n.className="iconfont icon-s-xiajiantou",setTimeout(()=>{t.style.display="none",this.value.length===0&&(l.style.display="block")},200)},!1)}},fe={class:"selector"},ye={name:"tySelector",components:{SelectorInput:C,SelectorMenu:B}},he=Object.assign(ye,{props:{placeholder:{type:String,default:""},data:{type:Array}},emits:["setItemValue"],setup(e,{emit:a}){const t=q({inputValue:"",searchValue:""}),s=c=>{t.inputValue=c.text,a("setItemValue",c.text)},l=c=>{t.searchValue=c},{inputValue:n,searchValue:o}=z(t);return(c,r)=>O((u(),i("div",fe,[T(C,{placeholder:e.placeholder,value:v(n),onSearchOptions:l},null,8,["placeholder","value"]),T(B,{data:e.data,onSetItemValue:s,searchValue:v(o)},null,8,["data","searchValue"])])),[[v(ve)]])}}),x=d(he,[["__scopeId","data-v-16de97d0"]]);x.install=e=>{e.component(x.name,x)};const ge={__name:"index",props:{type:{type:String,default:"success"},message:{type:String,default:"success~"}},setup(e,{expose:a}){const t=e,s=m(!1);let l=null;const n=m(20),o=m(999),c=["message",t.type],r=N(()=>t.type==="success"?["iconfont","icon-ok-block"]:t.type==="warning"?["iconfont","icon-exclamation-point-block"]:["iconfont","icon-close-block"]);function g(y){return new Promise(h=>{s.value=y,l=setTimeout(()=>{clearTimeout(l),l=null,h("fade动画执行完成")},300)})}function _(y,h){n.value=y,o.value=h}return a({setIsShow:g,setTop:_,height:30,consTop:20,consZIndex:999}),(y,h)=>(u(),j(H,{name:"message-fade"},{default:E(()=>[O(p("div",{style:P({"margin-top":n.value+"px","z-index":o.value}),class:V(c)},[p("i",{class:V(v(r))},null,2),Z(" "+b(e.message),1)],4),[[G,s.value]])]),_:1}))}},Se=d(ge,[["__scopeId","data-v-9ff24a88"]]),Ie=function(e){const a=D(Se,e);xe(a,e.duration)},f=m([]),xe=function(e,a){const t=document.createDocumentFragment(),s=e.mount(t);f.value.push(s),document.body.appendChild(t),k(s),s.setIsShow(!0),w(f,()=>{k(s)}),Ve(e,s,a)},Ve=function(e,a,t){a.timer=setTimeout(async()=>{await a.setIsShow(!1),e.unmount(),f.value=f.value.filter(s=>s!==a),clearTimeout(a.timer),a.timer=null},t??3e3)},k=function(e){const{setTop:a,height:t,consTop:s,consZIndex:l}=e,n=f.value.findIndex(r=>r===e),o=t*n+(n+1)*s,c=n+l;a(o,c)},be=(e,a)=>(e.install=t=>{e._context=t._context,t.config.globalProperties[a]=e},e),Te=be(Ie,"$message");export{Te as $,S as h,x};
