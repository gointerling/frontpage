import{u as ot}from"./CEcrQ7c2.js";import{e as qe,i as ee,f as Te,u as Se,A as N,S as x,o as E,t as Ge,a as Y,P as de,d as U,c as it,I as De,N as $e,b as ut,g as V,T as st,l as dt}from"./Bhi7jYCv.js";import{I as R,r as v,E as D,D as f,i as C,J as H,G as T,F as ft,h as z,am as ct,H as k,K as A,an as vt,ao as pt,ap as mt,ac as gt,n as X,M as ht,N as Me,_ as yt,O as bt,P as Ne,R as ie,o as je,l as Ie,w as _,b as he,V as ye,a as be,q as wt,U as Et}from"./JKjsIVvW.js";import{a as Tt,b as Ue,c as St,o as fe,l as ze,i as F,w as $t,s as Lt,t as Ft}from"./mwPykaTH.js";const Ct={wrapper:"relative z-50",inner:"fixed inset-0 overflow-y-auto",container:"flex min-h-full items-end sm:items-center justify-center text-center",padding:"p-4 sm:p-0",margin:"sm:my-8",base:"relative text-left rtl:text-right flex flex-col",overlay:{base:"fixed inset-0 transition-opacity",background:"bg-gray-200/75 dark:bg-gray-800/75",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0"}},background:"bg-white dark:bg-gray-900",ring:"",rounded:"rounded-lg",shadow:"shadow-xl",width:"w-full sm:max-w-lg",height:"",fullscreen:"w-screen h-screen",transition:{enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"}};function Ke(e,t,l,a){qe.isServer||R(n=>{e=e??window,e.addEventListener(t,l,a),n(()=>e.removeEventListener(t,l,a))})}var Z=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Z||{});function Pt(){let e=v(0);return Tt("keydown",t=>{t.key==="Tab"&&(e.value=t.shiftKey?1:0)}),e}function _e(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let l of e.value){let a=E(l);a instanceof HTMLElement&&t.add(a)}return t}var Je=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Je||{});let J=Object.assign(D({name:"FocusTrap",props:{as:{type:[Object,String],default:"div"},initialFocus:{type:Object,default:null},features:{type:Number,default:30},containers:{type:[Object,Function],default:v(new Set)}},inheritAttrs:!1,setup(e,{attrs:t,slots:l,expose:a}){let n=v(null);a({el:n,$el:n});let r=f(()=>ee(n)),o=v(!1);C(()=>o.value=!0),H(()=>o.value=!1),Dt({ownerDocument:r},f(()=>o.value&&!!(e.features&16)));let i=Ot({ownerDocument:r,container:n,initialFocus:f(()=>e.initialFocus)},f(()=>o.value&&!!(e.features&2)));Bt({ownerDocument:r,container:n,containers:e.containers,previousActiveElement:i},f(()=>o.value&&!!(e.features&8)));let u=Pt();function s(g){let m=E(n);m&&(w=>w())(()=>{Y(u.value,{[Z.Forwards]:()=>{de(m,U.First,{skipElements:[g.relatedTarget]})},[Z.Backwards]:()=>{de(m,U.Last,{skipElements:[g.relatedTarget]})}})})}let d=v(!1);function b(g){g.key==="Tab"&&(d.value=!0,requestAnimationFrame(()=>{d.value=!1}))}function c(g){if(!o.value)return;let m=_e(e.containers);E(n)instanceof HTMLElement&&m.add(E(n));let w=g.relatedTarget;w instanceof HTMLElement&&w.dataset.headlessuiFocusGuard!=="true"&&(Qe(m,w)||(d.value?de(E(n),Y(u.value,{[Z.Forwards]:()=>U.Next,[Z.Backwards]:()=>U.Previous})|U.WrapAround,{relativeTo:g.target}):g.target instanceof HTMLElement&&x(g.target)))}return()=>{let g={},m={ref:n,onKeydown:b,onFocusout:c},{features:w,initialFocus:y,containers:M,...S}=e;return T(ft,[!!(w&4)&&T(Te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:Se.Focusable}),N({ourProps:m,theirProps:{...t,...S},slot:g,attrs:t,slots:l,name:"FocusTrap"}),!!(w&4)&&T(Te,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:s,features:Se.Focusable})])}}}),{features:Je});function At(e){let t=v(Ue.slice());return z([e],([l],[a])=>{a===!0&&l===!1?Ge(()=>{t.value.splice(0)}):a===!1&&l===!0&&(t.value=Ue.slice())},{flush:"post"}),()=>{var l;return(l=t.value.find(a=>a!=null&&a.isConnected))!=null?l:null}}function Dt({ownerDocument:e},t){let l=At(t);C(()=>{R(()=>{var a,n;t.value||((a=e.value)==null?void 0:a.activeElement)===((n=e.value)==null?void 0:n.body)&&x(l())},{flush:"post"})}),H(()=>{t.value&&x(l())})}function Ot({ownerDocument:e,container:t,initialFocus:l},a){let n=v(null),r=v(!1);return C(()=>r.value=!0),H(()=>r.value=!1),C(()=>{z([t,l,a],(o,i)=>{if(o.every((s,d)=>(i==null?void 0:i[d])===s)||!a.value)return;let u=E(t);u&&Ge(()=>{var s,d;if(!r.value)return;let b=E(l),c=(s=e.value)==null?void 0:s.activeElement;if(b){if(b===c){n.value=c;return}}else if(u.contains(c)){n.value=c;return}b?x(b):de(u,U.First|U.NoScroll)===it.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),n.value=(d=e.value)==null?void 0:d.activeElement})},{immediate:!0,flush:"post"})}),n}function Bt({ownerDocument:e,container:t,containers:l,previousActiveElement:a},n){var r;Ke((r=e.value)==null?void 0:r.defaultView,"focus",o=>{if(!n.value)return;let i=_e(l);E(t)instanceof HTMLElement&&i.add(E(t));let u=a.value;if(!u)return;let s=o.target;s&&s instanceof HTMLElement?Qe(i,s)?(a.value=s,x(s)):(o.preventDefault(),o.stopPropagation(),x(u)):x(a.value)},!0)}function Qe(e,t){for(let l of e)if(l.contains(t))return!0;return!1}function Rt(e){let t=ct(e.getSnapshot());return H(e.subscribe(()=>{t.value=e.getSnapshot()})),t}function Ht(e,t){let l=e(),a=new Set;return{getSnapshot(){return l},subscribe(n){return a.add(n),()=>a.delete(n)},dispatch(n,...r){let o=t[n].call(l,...r);o&&(l=o,a.forEach(i=>i()))}}}function kt(){let e;return{before({doc:t}){var l;let a=t.documentElement;e=((l=t.defaultView)!=null?l:window).innerWidth-a.clientWidth},after({doc:t,d:l}){let a=t.documentElement,n=a.clientWidth-a.offsetWidth,r=e-n;l.style(a,"paddingRight",`${r}px`)}}}function Mt(){return St()?{before({doc:e,d:t,meta:l}){function a(n){return l.containers.flatMap(r=>r()).some(r=>r.contains(n))}t.microTask(()=>{var n;if(window.getComputedStyle(e.documentElement).scrollBehavior!=="auto"){let i=fe();i.style(e.documentElement,"scrollBehavior","auto"),t.add(()=>t.microTask(()=>i.dispose()))}let r=(n=window.scrollY)!=null?n:window.pageYOffset,o=null;t.addEventListener(e,"click",i=>{if(i.target instanceof HTMLElement)try{let u=i.target.closest("a");if(!u)return;let{hash:s}=new URL(u.href),d=e.querySelector(s);d&&!a(d)&&(o=d)}catch{}},!0),t.addEventListener(e,"touchstart",i=>{if(i.target instanceof HTMLElement)if(a(i.target)){let u=i.target;for(;u.parentElement&&a(u.parentElement);)u=u.parentElement;t.style(u,"overscrollBehavior","contain")}else t.style(i.target,"touchAction","none")}),t.addEventListener(e,"touchmove",i=>{if(i.target instanceof HTMLElement){if(i.target.tagName==="INPUT")return;if(a(i.target)){let u=i.target;for(;u.parentElement&&u.dataset.headlessuiPortal!==""&&!(u.scrollHeight>u.clientHeight||u.scrollWidth>u.clientWidth);)u=u.parentElement;u.dataset.headlessuiPortal===""&&i.preventDefault()}else i.preventDefault()}},{passive:!1}),t.add(()=>{var i;let u=(i=window.scrollY)!=null?i:window.pageYOffset;r!==u&&window.scrollTo(0,r),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}:{}}function Nt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function jt(e){let t={};for(let l of e)Object.assign(t,l(t));return t}let W=Ht(()=>new Map,{PUSH(e,t){var l;let a=(l=this.get(e))!=null?l:{doc:e,count:0,d:fe(),meta:new Set};return a.count++,a.meta.add(t),this.set(e,a),this},POP(e,t){let l=this.get(e);return l&&(l.count--,l.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:l}){let a={doc:e,d:t,meta:jt(l)},n=[Mt(),kt(),Nt()];n.forEach(({before:r})=>r==null?void 0:r(a)),n.forEach(({after:r})=>r==null?void 0:r(a))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});W.subscribe(()=>{let e=W.getSnapshot(),t=new Map;for(let[l]of e)t.set(l,l.documentElement.style.overflow);for(let l of e.values()){let a=t.get(l.doc)==="hidden",n=l.count!==0;(n&&!a||!n&&a)&&W.dispatch(l.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",l),l.count===0&&W.dispatch("TEARDOWN",l)}});function It(e,t,l){let a=Rt(W),n=f(()=>{let r=e.value?a.value.get(e.value):void 0;return r?r.count>0:!1});return z([e,t],([r,o],[i],u)=>{if(!r||!o)return;W.dispatch("PUSH",r,l);let s=!1;u(()=>{s||(W.dispatch("POP",i??r,l),s=!0)})},{immediate:!0}),n}let we=new Map,Q=new Map;function Ve(e,t=v(!0)){R(l=>{var a;if(!t.value)return;let n=E(e);if(!n)return;l(function(){var o;if(!n)return;let i=(o=Q.get(n))!=null?o:1;if(i===1?Q.delete(n):Q.set(n,i-1),i!==1)return;let u=we.get(n);u&&(u["aria-hidden"]===null?n.removeAttribute("aria-hidden"):n.setAttribute("aria-hidden",u["aria-hidden"]),n.inert=u.inert,we.delete(n))});let r=(a=Q.get(n))!=null?a:0;Q.set(n,r+1),r===0&&(we.set(n,{"aria-hidden":n.getAttribute("aria-hidden"),inert:n.inert}),n.setAttribute("aria-hidden","true"),n.inert=!0)})}function Ut({defaultContainers:e=[],portals:t,mainTreeNodeRef:l}={}){let a=v(null),n=ee(a);function r(){var o,i,u;let s=[];for(let d of e)d!==null&&(d instanceof HTMLElement?s.push(d):"value"in d&&d.value instanceof HTMLElement&&s.push(d.value));if(t!=null&&t.value)for(let d of t.value)s.push(d);for(let d of(o=n==null?void 0:n.querySelectorAll("html > *, body > *"))!=null?o:[])d!==document.body&&d!==document.head&&d instanceof HTMLElement&&d.id!=="headlessui-portal-root"&&(d.contains(E(a))||d.contains((u=(i=E(a))==null?void 0:i.getRootNode())==null?void 0:u.host)||s.some(b=>d.contains(b))||s.push(d));return s}return{resolveContainers:r,contains(o){return r().some(i=>i.contains(o))},mainTreeNodeRef:a,MainTreeNode(){return l!=null?null:T(Te,{features:Se.Hidden,ref:a})}}}let Xe=Symbol("ForcePortalRootContext");function Vt(){return A(Xe,!1)}let We=D({name:"ForcePortalRoot",props:{as:{type:[Object,String],default:"template"},force:{type:Boolean,default:!1}},setup(e,{slots:t,attrs:l}){return k(Xe,e.force),()=>{let{force:a,...n}=e;return N({theirProps:n,ourProps:{},slot:{},slots:t,attrs:l,name:"ForcePortalRoot"})}}}),Ze=Symbol("StackContext");var Le=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(Le||{});function Wt(){return A(Ze,()=>{})}function xt({type:e,enabled:t,element:l,onUpdate:a}){let n=Wt();function r(...o){a==null||a(...o),n(...o)}C(()=>{z(t,(o,i)=>{o?r(0,e,l):i===!0&&r(1,e,l)},{immediate:!0,flush:"sync"})}),H(()=>{t.value&&r(1,e,l)}),k(Ze,r)}let Yt=Symbol("DescriptionContext");function qt({slot:e=v({}),name:t="Description",props:l={}}={}){let a=v([]);function n(r){return a.value.push(r),()=>{let o=a.value.indexOf(r);o!==-1&&a.value.splice(o,1)}}return k(Yt,{register:n,slot:e,name:t,props:l}),f(()=>a.value.length>0?a.value.join(" "):void 0)}function Gt(e){let t=ee(e);if(!t){if(e===null)return null;throw new Error(`[Headless UI]: Cannot find ownerDocument for contextElement: ${e}`)}let l=t.getElementById("headlessui-portal-root");if(l)return l;let a=t.createElement("div");return a.setAttribute("id","headlessui-portal-root"),t.body.appendChild(a)}const Fe=new WeakMap;function zt(e){var t;return(t=Fe.get(e))!=null?t:0}function xe(e,t){let l=t(zt(e));return l<=0?Fe.delete(e):Fe.set(e,l),l}let Kt=D({name:"Portal",props:{as:{type:[Object,String],default:"div"}},setup(e,{slots:t,attrs:l}){let a=v(null),n=f(()=>ee(a)),r=Vt(),o=A(et,null),i=v(r===!0||o==null?Gt(a.value):o.resolveTarget());i.value&&xe(i.value,c=>c+1);let u=v(!1);C(()=>{u.value=!0}),R(()=>{r||o!=null&&(i.value=o.resolveTarget())});let s=A(Ce,null),d=!1,b=mt();return z(a,()=>{if(d||!s)return;let c=E(a);c&&(H(s.register(c),b),d=!0)}),H(()=>{var c,g;let m=(c=n.value)==null?void 0:c.getElementById("headlessui-portal-root");!m||i.value!==m||xe(i.value,w=>w-1)||i.value.children.length>0||(g=i.value.parentElement)==null||g.removeChild(i.value)}),()=>{if(!u.value||i.value===null)return null;let c={ref:a,"data-headlessui-portal":""};return T(vt,{to:i.value},N({ourProps:c,theirProps:e,slot:{},attrs:l,slots:t,name:"Portal"}))}}}),Ce=Symbol("PortalParentContext");function _t(){let e=A(Ce,null),t=v([]);function l(r){return t.value.push(r),e&&e.register(r),()=>a(r)}function a(r){let o=t.value.indexOf(r);o!==-1&&t.value.splice(o,1),e&&e.unregister(r)}let n={register:l,unregister:a,portals:t};return[t,D({name:"PortalWrapper",setup(r,{slots:o}){return k(Ce,n),()=>{var i;return(i=o.default)==null?void 0:i.call(o)}}})]}let et=Symbol("PortalGroupContext"),Jt=D({name:"PortalGroup",props:{as:{type:[Object,String],default:"template"},target:{type:Object,default:null}},setup(e,{attrs:t,slots:l}){let a=pt({resolveTarget(){return e.target}});return k(et,a),()=>{let{target:n,...r}=e;return N({theirProps:r,ourProps:{},slot:{},attrs:t,slots:l,name:"PortalGroup"})}}});var Qt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Qt||{});let Pe=Symbol("DialogContext");function tt(e){let t=A(Pe,null);if(t===null){let l=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,tt),l}return t}let ue="DC8F892D-2EBD-447C-A4C8-A03058436FF4",Xt=D({name:"Dialog",inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},open:{type:[Boolean,String],default:ue},initialFocus:{type:Object,default:null},id:{type:String,default:null},role:{type:String,default:"dialog"}},emits:{close:e=>!0},setup(e,{emit:t,attrs:l,slots:a,expose:n}){var r,o;let i=(r=e.id)!=null?r:`headlessui-dialog-${De()}`,u=v(!1);C(()=>{u.value=!0});let s=!1,d=f(()=>e.role==="dialog"||e.role==="alertdialog"?e.role:(s||(s=!0,console.warn(`Invalid role [${d}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)),"dialog")),b=v(0),c=ze(),g=f(()=>e.open===ue&&c!==null?(c.value&F.Open)===F.Open:e.open),m=v(null),w=f(()=>ee(m));if(n({el:m,$el:m}),!(e.open!==ue||c!==null))throw new Error("You forgot to provide an `open` prop to the `Dialog`.");if(typeof g.value!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${g.value===ue?void 0:e.open}`);let y=f(()=>u.value&&g.value?0:1),M=f(()=>y.value===0),S=f(()=>b.value>1),j=A(Pe,null)!==null,[te,le]=_t(),{resolveContainers:q,mainTreeNodeRef:ae,MainTreeNode:ne}=Ut({portals:te,defaultContainers:[f(()=>{var p;return(p=G.panelRef.value)!=null?p:m.value})]}),ve=f(()=>S.value?"parent":"leaf"),re=f(()=>c!==null?(c.value&F.Closing)===F.Closing:!1),pe=f(()=>j||re.value?!1:M.value),me=f(()=>{var p,h,$;return($=Array.from((h=(p=w.value)==null?void 0:p.querySelectorAll("body > *"))!=null?h:[]).find(L=>L.id==="headlessui-portal-root"?!1:L.contains(E(ae))&&L instanceof HTMLElement))!=null?$:null});Ve(me,pe);let P=f(()=>S.value?!0:M.value),K=f(()=>{var p,h,$;return($=Array.from((h=(p=w.value)==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?h:[]).find(L=>L.contains(E(ae))&&L instanceof HTMLElement))!=null?$:null});Ve(K,P),xt({type:"Dialog",enabled:f(()=>y.value===0),element:m,onUpdate:(p,h)=>{if(h==="Dialog")return Y(p,{[Le.Add]:()=>b.value+=1,[Le.Remove]:()=>b.value-=1})}});let O=qt({name:"DialogDescription",slot:f(()=>({open:g.value}))}),B=v(null),G={titleId:B,panelRef:v(null),dialogState:y,setTitleId(p){B.value!==p&&(B.value=p)},close(){t("close",!1)}};k(Pe,G);let Re=f(()=>!(!M.value||S.value));$t(q,(p,h)=>{p.preventDefault(),G.close(),gt(()=>h==null?void 0:h.focus())},Re);let He=f(()=>!(S.value||y.value!==0));Ke((o=w.value)==null?void 0:o.defaultView,"keydown",p=>{He.value&&(p.defaultPrevented||p.key===ut.Escape&&(p.preventDefault(),p.stopPropagation(),G.close()))});let ke=f(()=>!(re.value||y.value!==0||j));return It(w,ke,p=>{var h;return{containers:[...(h=p.containers)!=null?h:[],q]}}),R(p=>{if(y.value!==0)return;let h=E(m);if(!h)return;let $=new ResizeObserver(L=>{for(let ge of L){let oe=ge.target.getBoundingClientRect();oe.x===0&&oe.y===0&&oe.width===0&&oe.height===0&&G.close()}});$.observe(h),p(()=>$.disconnect())}),()=>{let{open:p,initialFocus:h,...$}=e,L={...l,ref:m,id:i,role:d.value,"aria-modal":y.value===0?!0:void 0,"aria-labelledby":B.value,"aria-describedby":O.value},ge={open:y.value===0};return T(We,{force:!0},()=>[T(Kt,()=>T(Jt,{target:m.value},()=>T(We,{force:!1},()=>T(J,{initialFocus:h,containers:q,features:M.value?Y(ve.value,{parent:J.features.RestoreFocus,leaf:J.features.All&~J.features.FocusLock}):J.features.None},()=>T(le,{},()=>N({ourProps:L,theirProps:{...$,...l},slot:ge,attrs:l,slots:a,visible:y.value===0,features:$e.RenderStrategy|$e.Static,name:"Dialog"})))))),T(ne)])}}}),Zt=D({name:"DialogPanel",props:{as:{type:[Object,String],default:"div"},id:{type:String,default:null}},setup(e,{attrs:t,slots:l,expose:a}){var n;let r=(n=e.id)!=null?n:`headlessui-dialog-panel-${De()}`,o=tt("DialogPanel");a({el:o.panelRef,$el:o.panelRef});function i(u){u.stopPropagation()}return()=>{let{...u}=e,s={id:r,ref:o.panelRef,onClick:i};return N({ourProps:s,theirProps:u,slot:{open:o.dialogState.value===0},attrs:t,slots:l,name:"DialogPanel"})}}});function el(e){let t={called:!1};return(...l)=>{if(!t.called)return t.called=!0,e(...l)}}function Ee(e,...t){e&&t.length>0&&e.classList.add(...t)}function se(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Ae=(e=>(e.Finished="finished",e.Cancelled="cancelled",e))(Ae||{});function tl(e,t){let l=fe();if(!e)return l.dispose;let{transitionDuration:a,transitionDelay:n}=getComputedStyle(e),[r,o]=[a,n].map(i=>{let[u=0]=i.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,d)=>d-s);return u});return r!==0?l.setTimeout(()=>t("finished"),r+o):t("finished"),l.add(()=>t("cancelled")),l.dispose}function Ye(e,t,l,a,n,r){let o=fe(),i=r!==void 0?el(r):()=>{};return se(e,...n),Ee(e,...t,...l),o.nextFrame(()=>{se(e,...l),Ee(e,...a),o.add(tl(e,u=>(se(e,...a,...t),Ee(e,...n),i(u))))}),o.add(()=>se(e,...t,...l,...a,...n)),o.add(()=>i("cancelled")),o.dispose}function I(e=""){return e.split(/\s+/).filter(t=>t.length>1)}let Oe=Symbol("TransitionContext");var ll=(e=>(e.Visible="visible",e.Hidden="hidden",e))(ll||{});function al(){return A(Oe,null)!==null}function nl(){let e=A(Oe,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}function rl(){let e=A(Be,null);if(e===null)throw new Error("A <TransitionChild /> is used but it is missing a parent <TransitionRoot />.");return e}let Be=Symbol("NestingContext");function ce(e){return"children"in e?ce(e.children):e.value.filter(({state:t})=>t==="visible").length>0}function lt(e){let t=v([]),l=v(!1);C(()=>l.value=!0),H(()=>l.value=!1);function a(r,o=V.Hidden){let i=t.value.findIndex(({id:u})=>u===r);i!==-1&&(Y(o,{[V.Unmount](){t.value.splice(i,1)},[V.Hidden](){t.value[i].state="hidden"}}),!ce(t)&&l.value&&(e==null||e()))}function n(r){let o=t.value.find(({id:i})=>i===r);return o?o.state!=="visible"&&(o.state="visible"):t.value.push({id:r,state:"visible"}),()=>a(r,V.Unmount)}return{children:t,register:n,unregister:a}}let at=$e.RenderStrategy,nt=D({props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:a,expose:n}){let r=v(0);function o(){r.value|=F.Opening,t("beforeEnter")}function i(){r.value&=~F.Opening,t("afterEnter")}function u(){r.value|=F.Closing,t("beforeLeave")}function s(){r.value&=~F.Closing,t("afterLeave")}if(!al()&&Lt())return()=>T(rt,{...e,onBeforeEnter:o,onAfterEnter:i,onBeforeLeave:u,onAfterLeave:s},a);let d=v(null),b=f(()=>e.unmount?V.Unmount:V.Hidden);n({el:d,$el:d});let{show:c,appear:g}=nl(),{register:m,unregister:w}=rl(),y=v(c.value?"visible":"hidden"),M={value:!0},S=De(),j={value:!1},te=lt(()=>{!j.value&&y.value!=="hidden"&&(y.value="hidden",w(S),s())});C(()=>{let P=m(S);H(P)}),R(()=>{if(b.value===V.Hidden&&S){if(c.value&&y.value!=="visible"){y.value="visible";return}Y(y.value,{hidden:()=>w(S),visible:()=>m(S)})}});let le=I(e.enter),q=I(e.enterFrom),ae=I(e.enterTo),ne=I(e.entered),ve=I(e.leave),re=I(e.leaveFrom),pe=I(e.leaveTo);C(()=>{R(()=>{if(y.value==="visible"){let P=E(d);if(P instanceof Comment&&P.data==="")throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")}})});function me(P){let K=M.value&&!g.value,O=E(d);!O||!(O instanceof HTMLElement)||K||(j.value=!0,c.value&&o(),c.value||u(),P(c.value?Ye(O,le,q,ae,ne,B=>{j.value=!1,B===Ae.Finished&&i()}):Ye(O,ve,re,pe,ne,B=>{j.value=!1,B===Ae.Finished&&(ce(te)||(y.value="hidden",w(S),s()))})))}return C(()=>{z([c],(P,K,O)=>{me(O),M.value=!1},{immediate:!0})}),k(Be,te),Ft(f(()=>Y(y.value,{visible:F.Open,hidden:F.Closed})|r.value)),()=>{let{appear:P,show:K,enter:O,enterFrom:B,enterTo:G,entered:Re,leave:He,leaveFrom:ke,leaveTo:p,...h}=e,$={ref:d},L={...h,...g.value&&c.value&&qe.isServer?{class:X([l.class,h.class,...le,...q])}:{}};return N({theirProps:L,ourProps:$,slot:{},slots:a,attrs:l,features:at,visible:y.value==="visible",name:"TransitionChild"})}}}),ol=nt,rt=D({inheritAttrs:!1,props:{as:{type:[Object,String],default:"div"},show:{type:[Boolean],default:null},unmount:{type:[Boolean],default:!0},appear:{type:[Boolean],default:!1},enter:{type:[String],default:""},enterFrom:{type:[String],default:""},enterTo:{type:[String],default:""},entered:{type:[String],default:""},leave:{type:[String],default:""},leaveFrom:{type:[String],default:""},leaveTo:{type:[String],default:""}},emits:{beforeEnter:()=>!0,afterEnter:()=>!0,beforeLeave:()=>!0,afterLeave:()=>!0},setup(e,{emit:t,attrs:l,slots:a}){let n=ze(),r=f(()=>e.show===null&&n!==null?(n.value&F.Open)===F.Open:e.show);R(()=>{if(![!0,!1].includes(r.value))throw new Error('A <Transition /> is used but it is missing a `:show="true | false"` prop.')});let o=v(r.value?"visible":"hidden"),i=lt(()=>{o.value="hidden"}),u=v(!0),s={show:r,appear:f(()=>e.appear||!u.value)};return C(()=>{R(()=>{u.value=!1,r.value?o.value="visible":ce(i)||(o.value="hidden")})}),k(Be,i),k(Oe,s),()=>{let d=st(e,["show","appear","unmount","onBeforeEnter","onBeforeLeave","onAfterEnter","onAfterLeave"]),b={unmount:e.unmount};return N({ourProps:{...b,as:"template"},theirProps:{},slot:{},slots:{...a,default:()=>[T(ol,{onBeforeEnter:()=>t("beforeEnter"),onAfterEnter:()=>t("afterEnter"),onBeforeLeave:()=>t("beforeLeave"),onAfterLeave:()=>t("afterLeave"),...l,...b,...d},a.default)]},attrs:{},features:at,visible:o.value==="visible",name:"Transition"})}}});const il=ht(Me.ui.strategy,Me.ui.modal,Ct),ul=D({components:{HDialog:Xt,HDialogPanel:Zt,TransitionRoot:rt,TransitionChild:nt},inheritAttrs:!1,props:{modelValue:{type:Boolean,default:!1},appear:{type:Boolean,default:!1},overlay:{type:Boolean,default:!0},transition:{type:Boolean,default:!0},preventClose:{type:Boolean,default:!1},fullscreen:{type:Boolean,default:!1},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue","close","close-prevented","after-leave"],setup(e,{emit:t}){const{ui:l,attrs:a}=bt("modal",Ne(e,"ui"),il,Ne(e,"class")),n=f({get(){return e.modelValue},set(u){t("update:modelValue",u)}}),r=f(()=>e.transition?{...l.value.transition}:{});function o(u){if(e.preventClose){t("close-prevented");return}n.value=u,t("close")}const i=()=>{t("after-leave")};return dt(()=>ot("$HAJMhYDoe7")),{ui:l,attrs:a,isOpen:n,transitionClass:r,onAfterLeave:i,close:o}}});function sl(e,t,l,a,n,r){const o=ie("TransitionChild"),i=ie("HDialogPanel"),u=ie("HDialog"),s=ie("TransitionRoot");return je(),Ie(s,{appear:e.appear,show:e.isOpen,as:"template",onAfterLeave:e.onAfterLeave},{default:_(()=>[he(u,ye({class:e.ui.wrapper},e.attrs,{onClose:e.close}),{default:_(()=>[e.overlay?(je(),Ie(o,ye({key:0,as:"template",appear:e.appear},e.ui.overlay.transition),{default:_(()=>[be("div",{class:X([e.ui.overlay.base,e.ui.overlay.background])},null,2)]),_:1},16,["appear"])):wt("",!0),be("div",{class:X(e.ui.inner)},[be("div",{class:X([e.ui.container,!e.fullscreen&&e.ui.padding])},[he(o,ye({as:"template",appear:e.appear},e.transitionClass),{default:_(()=>[he(i,{class:X([e.ui.base,e.ui.background,e.ui.ring,e.ui.shadow,e.fullscreen?e.ui.fullscreen:[e.ui.width,e.ui.height,e.ui.rounded,e.ui.margin]])},{default:_(()=>[Et(e.$slots,"default")]),_:3},8,["class"])]),_:3},16,["appear"])],2)],2)]),_:3},16,["class","onClose"])]),_:3},8,["appear","show","onAfterLeave"])}const pl=yt(ul,[["render",sl]]);export{pl as _};
