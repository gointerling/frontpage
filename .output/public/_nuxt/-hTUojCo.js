import{$ as P,a2 as F,N as $,O as x,a0 as I,ad as T,Z as M,F as k,i as L}from"./BOxkNff_.js";function ie(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}let N=Symbol("headlessui.useid"),D=0;function ae(){return F(N,()=>`${++D}`)()}function ue(e){P(N,e)}function v(e){var t;if(e==null||e.value==null)return null;let n=(t=e.value.$el)!=null?t:e.value;return n instanceof Node?n:null}function g(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,g),r}var H=Object.defineProperty,U=(e,t,n)=>t in e?H(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,E=(e,t,n)=>(U(e,typeof t!="symbol"?t+"":t,n),n);let R=class{constructor(){E(this,"current",this.detect()),E(this,"currentId",0)}set(t){this.current!==t&&(this.currentId=0,this.current=t)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}},_=new R;function C(e){if(_.isServer)return null;if(e instanceof Node)return e.ownerDocument;if(e!=null&&e.hasOwnProperty("value")){let t=v(e);if(t)return t.ownerDocument}return document}let w=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var W=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(W||{}),K=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(K||{}),G=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(G||{});function V(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(w)).sort((t,n)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER)))}var q=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(q||{});function se(e,t=0){var n;return e===((n=C(e))==null?void 0:n.body)?!1:g(t,{0(){return e.matches(w)},1(){let r=e;for(;r!==null;){if(r.matches(w))return!0;r=r.parentElement}return!1}})}var B=(e=>(e[e.Keyboard=0]="Keyboard",e[e.Mouse=1]="Mouse",e))(B||{});typeof window<"u"&&typeof document<"u"&&(document.addEventListener("keydown",e=>{e.metaKey||e.altKey||e.ctrlKey||(document.documentElement.dataset.headlessuiFocusVisible="")},!0),document.addEventListener("click",e=>{e.detail===1?delete document.documentElement.dataset.headlessuiFocusVisible:e.detail===0&&(document.documentElement.dataset.headlessuiFocusVisible="")},!0));let X=["textarea","input"].join(",");function Y(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,X))!=null?n:!1}function Z(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),a=t(r);if(o===null||a===null)return 0;let i=o.compareDocumentPosition(a);return i&Node.DOCUMENT_POSITION_FOLLOWING?-1:i&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function de(e,t,{sorted:n=!0,relativeTo:r=null,skipElements:o=[]}={}){var a;let i=(a=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e==null?void 0:e.ownerDocument)!=null?a:document,u=Array.isArray(e)?n?Z(e):e:V(e);o.length>0&&u.length>1&&(u=u.filter(l=>!o.includes(l))),r=r??i.activeElement;let h=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),d=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,u.indexOf(r))-1;if(t&4)return Math.max(0,u.indexOf(r))+1;if(t&8)return u.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),m=t&32?{preventScroll:!0}:{},f=0,p=u.length,c;do{if(f>=p||f+p<=0)return 0;let l=d+f;if(t&16)l=(l+p)%p;else{if(l<0)return 3;if(l>=p)return 1}c=u[l],c==null||c.focus(m),f+=h}while(c!==i.activeElement);return t&6&&Y(c)&&c.select(),2}function O(e,t){if(e)return e;let n=t??"button";if(typeof n=="string"&&n.toLowerCase()==="button")return"button"}function ce(e,t){let n=$(O(e.value.type,e.value.as));return x(()=>{n.value=O(e.value.type,e.value.as)}),I(()=>{var r;n.value||v(t)&&v(t)instanceof HTMLButtonElement&&!((r=v(t))!=null&&r.hasAttribute("type"))&&(n.value="button")}),n}var z=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(z||{}),J=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(J||{});function Q({visible:e=!0,features:t=0,ourProps:n,theirProps:r,...o}){var a;let i=A(r,n),u=Object.assign(o,{props:i});if(e||t&2&&i.static)return y(u);if(t&1){let h=(a=i.unmount)==null||a?0:1;return g(h,{0(){return null},1(){return y({...o,props:{...i,hidden:!0,style:{display:"none"}}})}})}return y(u)}function y({props:e,attrs:t,slots:n,slot:r,name:o}){var a,i;let{as:u,...h}=ee(e,["unmount","static"]),d=(a=n.default)==null?void 0:a.call(n,r),m={};if(r){let f=!1,p=[];for(let[c,l]of Object.entries(r))typeof l=="boolean"&&(f=!0),l===!0&&p.push(c);f&&(m["data-headlessui-state"]=p.join(" "))}if(u==="template"){if(d=j(d??[]),Object.keys(h).length>0||Object.keys(t).length>0){let[f,...p]=d??[];if(!te(f)||p.length>0)throw new Error(['Passing props on "template"!',"",`The current component <${o} /> is rendering a "template".`,"However we need to passthrough the following props:",Object.keys(h).concat(Object.keys(t)).map(s=>s.trim()).filter((s,b,S)=>S.indexOf(s)===b).sort((s,b)=>s.localeCompare(b)).map(s=>`  - ${s}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "template".',"Render a single element as the child so that we can forward the props onto that element."].map(s=>`  - ${s}`).join(`
`)].join(`
`));let c=A((i=f.props)!=null?i:{},h,m),l=T(f,c,!0);for(let s in c)s.startsWith("on")&&(l.props||(l.props={}),l.props[s]=c[s]);return l}return Array.isArray(d)&&d.length===1?d[0]:d}return M(u,Object.assign({},h,m),{default:()=>d})}function j(e){return e.flatMap(t=>t.type===k?j(t.children):[t])}function A(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...a){let i=n[r];for(let u of i){if(o instanceof Event&&o.defaultPrevented)return;u(o,...a)}}});return t}function fe(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function ee(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function te(e){return e==null?!1:typeof e.type=="string"||typeof e.type=="object"||typeof e.type=="function"}var ne=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(ne||{});let pe=L({name:"Hidden",props:{as:{type:[Object,String],default:"div"},features:{type:Number,default:1}},setup(e,{slots:t,attrs:n}){return()=>{var r;let{features:o,...a}=e,i={"aria-hidden":(o&2)===2?!0:(r=a["aria-hidden"])!=null?r:void 0,hidden:(o&4)===4?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(o&4)===4&&(o&2)!==2&&{display:"none"}}};return Q({ourProps:i,theirProps:a,slot:{},attrs:n,slots:t,name:"Hidden"})}}});var re=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(re||{});export{Q as A,fe as E,ae as I,z as N,Z as O,de as P,ee as T,g as a,re as b,K as c,W as d,_ as e,pe as f,q as h,C as i,ue as l,v as o,ce as s,ie as t,ne as u,se as w};
