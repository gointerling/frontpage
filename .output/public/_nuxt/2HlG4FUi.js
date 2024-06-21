import{aa as Y,_ as S,L as P,M as m,D as T,N as V,O,G as k,W as Z,X as x,o as l,c as g,S as C,d as N,t as D,U as c,a7 as _,r as ee,n as $,b as te,w as I,a as L,q as B,F as W,m as K,l as z,T as ae,s as X,ab as ne}from"./CLq9dtKI.js";import{u as se}from"./Dog-sPf1.js";const oe={base:"inline-flex items-center justify-center text-gray-900 dark:text-white",padding:"px-1",size:{xs:"h-4 min-w-[16px] text-[10px]",sm:"h-5 min-w-[20px] text-[11px]",md:"h-6 min-w-[24px] text-[12px]"},rounded:"rounded",font:"font-medium font-sans",background:"bg-gray-100 dark:bg-gray-800",ring:"ring-1 ring-gray-300 dark:ring-gray-700 ring-inset",default:{size:"sm"}},ie={wrapper:"flex items-center -space-x-px",base:"",rounded:"first:rounded-s-md last:rounded-e-md",default:{size:"sm",activeButton:{color:"primary"},inactiveButton:{color:"white"},firstButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-double-left-20-solid"},lastButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-double-right-20-solid"},prevButton:{color:"white",class:"rtl:[&_span:first-child]:rotate-180",icon:"i-heroicons-chevron-left-20-solid"},nextButton:{color:"white",class:"rtl:[&_span:last-child]:rotate-180",icon:"i-heroicons-chevron-right-20-solid"}}},re={wrapper:"relative inline-flex",container:"z-20 group",width:"max-w-xs",background:"bg-white dark:bg-gray-900",color:"text-gray-900 dark:text-white",shadow:"shadow",rounded:"rounded",ring:"ring-1 ring-gray-200 dark:ring-gray-800",base:"[@media(pointer:coarse)]:hidden h-6 px-2 py-1 text-xs font-normal truncate relative",shortcuts:"hidden md:inline-flex flex-shrink-0 gap-0.5",middot:"mx-1 text-gray-700 dark:text-gray-200",transition:{enterActiveClass:"transition ease-out duration-200",enterFromClass:"opacity-0 translate-y-1",enterToClass:"opacity-100 translate-y-0",leaveActiveClass:"transition ease-in duration-150",leaveFromClass:"opacity-100 translate-y-0",leaveToClass:"opacity-0 translate-y-1"},popper:{strategy:"fixed"},default:{openDelay:0,closeDelay:0},arrow:{...Y,base:"[@media(pointer:coarse)]:hidden invisible before:visible before:block before:rotate-45 before:z-[-1] before:w-2 before:h-2"}},F=P(m.ui.strategy,m.ui.kbd,oe),le=T({inheritAttrs:!1,props:{value:{type:String,default:null},size:{type:String,default:()=>F.default.size,validator(e){return Object.keys(F.size).includes(e)}},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:n,attrs:b}=V("kbd",O(e,"ui"),F),f=k(()=>Z(x(n.value.base,n.value.size[e.size],n.value.padding,n.value.rounded,n.value.font,n.value.background,n.value.ring),e.class));return{ui:n,attrs:b,kbdClass:f}}});function ue(e,n,b,f,i,p){return l(),g("kbd",c({class:e.kbdClass},e.attrs),[C(e.$slots,"default",{},()=>[N(D(e.value),1)])],16)}const H=S(le,[["render",ue]]),A=P(m.ui.strategy,m.ui.tooltip,re),de=T({components:{UKbd:H},inheritAttrs:!1,props:{text:{type:String,default:null},prevent:{type:Boolean,default:!1},shortcuts:{type:Array,default:()=>[]},openDelay:{type:Number,default:()=>A.default.openDelay},closeDelay:{type:Number,default:()=>A.default.closeDelay},popper:{type:Object,default:()=>({})},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},setup(e){const{ui:n,attrs:b}=V("tooltip",O(e,"ui"),A,O(e,"class")),f=k(()=>_({},e.popper,n.value.popper)),[i,p]=se(f.value),s=ee(!1);let t=null,o=null;function w(){o&&(clearTimeout(o),o=null),!s.value&&(t=t||setTimeout(()=>{s.value=!0,t=null},e.openDelay))}function j(){t&&(clearTimeout(t),t=null),s.value&&(o=o||setTimeout(()=>{s.value=!1,o=null},e.closeDelay))}return{ui:n,attrs:b,popper:f,trigger:i,container:p,open:s,onMouseEnter:w,onMouseLeave:j}}});function fe(e,n,b,f,i,p){const s=H;return l(),g("div",c({ref:"trigger",class:e.ui.wrapper},e.attrs,{onMouseenter:n[0]||(n[0]=(...t)=>e.onMouseEnter&&e.onMouseEnter(...t)),onMouseleave:n[1]||(n[1]=(...t)=>e.onMouseLeave&&e.onMouseLeave(...t))}),[C(e.$slots,"default",{open:e.open},()=>[N(" Hover ")]),e.open&&!e.prevent?(l(),g("div",{key:0,ref:"container",class:$([e.ui.container,e.ui.width])},[te(ae,c({appear:""},e.ui.transition),{default:I(()=>{var t;return[L("div",null,[e.popper.arrow?(l(),g("div",{key:0,"data-popper-arrow":"",class:$(Object.values(e.ui.arrow))},null,2)):B("",!0),L("div",{class:$([e.ui.base,e.ui.background,e.ui.color,e.ui.rounded,e.ui.shadow,e.ui.ring])},[C(e.$slots,"text",{},()=>[N(D(e.text),1)]),(t=e.shortcuts)!=null&&t.length?(l(),g("span",{key:0,class:$(e.ui.shortcuts)},[L("span",{class:$(e.ui.middot)},"·",2),(l(!0),g(W,null,K(e.shortcuts,o=>(l(),z(s,{key:o,size:"xs"},{default:I(()=>[N(D(o),1)]),_:2},1024))),128))],2)):B("",!0)],2)])]}),_:3},16)],2)):B("",!0)],16)}const ge=S(de,[["render",fe]]),y=P(m.ui.strategy,m.ui.pagination,ie),pe=P(m.ui.strategy,m.ui.button,ne),ce=T({components:{UButton:X},inheritAttrs:!1,props:{modelValue:{type:Number,required:!0},pageCount:{type:Number,default:10},total:{type:Number,required:!0},max:{type:Number,default:7,validate(e){return e>=5&&e<Number.MAX_VALUE}},disabled:{type:Boolean,default:!1},size:{type:String,default:()=>y.default.size,validator(e){return Object.keys(pe.size).includes(e)}},to:{type:Function,default:null},activeButton:{type:Object,default:()=>y.default.activeButton},inactiveButton:{type:Object,default:()=>y.default.inactiveButton},showFirst:{type:Boolean,default:!1},showLast:{type:Boolean,default:!1},firstButton:{type:Object,default:()=>y.default.firstButton},lastButton:{type:Object,default:()=>y.default.lastButton},prevButton:{type:Object,default:()=>y.default.prevButton},nextButton:{type:Object,default:()=>y.default.nextButton},divider:{type:String,default:"…"},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(e,{emit:n}){const{ui:b,attrs:f}=V("pagination",O(e,"ui"),y,O(e,"class")),i=k({get(){return e.modelValue},set(r){n("update:modelValue",r)}}),p=k(()=>Array.from({length:Math.ceil(e.total/e.pageCount)},(r,d)=>d+1)),s=k(()=>{const r=p.value.length,d=i.value,G=Math.max(e.max,5),v=Math.floor((Math.min(G,r)-5)/2),U=d-v,M=d+v,E=U-1>1,q=M+1<r,a=[];if(r<=G){for(let u=1;u<=r;u++)a.push(u);return a}if(a.push(1),E&&a.push(e.divider),!q){const u=d+v+2-r;for(let h=d-v-u;h<=d-v-1;h++)a.push(h)}for(let u=Math.max(2,U);u<=Math.min(r,M);u++)a.push(u);if(!E){const u=1-(d-v-2);for(let h=d+v+1;h<=d+v+u;h++)a.push(h)}return q&&a.push(e.divider),M<r&&a.push(r),a.length>=3&&a[1]===e.divider&&a[2]===3&&(a[1]=2),a.length>=3&&a[a.length-2]===e.divider&&a[a.length-1]===a.length&&(a[a.length-2]=a.length-1),a}),t=k(()=>i.value>1),o=k(()=>i.value<p.value.length);function w(){t.value&&(i.value=1)}function j(){o.value&&(i.value=p.value.length)}function J(r){typeof r!="string"&&(i.value=r)}function R(){t.value&&i.value--}function Q(){o.value&&i.value++}return{ui:b,attrs:f,currentPage:i,pages:p,displayedPages:s,canGoLastOrNext:o,canGoFirstOrPrev:t,onClickPrev:R,onClickNext:Q,onClickPage:J,onClickFirst:w,onClickLast:j}}});function be(e,n,b,f,i,p){const s=X;return l(),g("div",c({class:e.ui.wrapper},e.attrs),[C(e.$slots,"first",{onClick:e.onClickFirst},()=>[e.firstButton&&e.showFirst?(l(),z(s,c({key:0,size:e.size,disabled:!e.canGoFirstOrPrev||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.firstButton||{},...e.firstButton},{ui:{rounded:""},"aria-label":"First",onClick:e.onClickFirst}),null,16,["size","disabled","class","onClick"])):B("",!0)]),C(e.$slots,"prev",{onClick:e.onClickPrev},()=>[e.prevButton?(l(),z(s,c({key:0,size:e.size,disabled:!e.canGoFirstOrPrev||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.prevButton||{},...e.prevButton},{ui:{rounded:""},"aria-label":"Prev",onClick:e.onClickPrev}),null,16,["size","disabled","class","onClick"])):B("",!0)]),(l(!0),g(W,null,K(e.displayedPages,(t,o)=>{var w;return l(),z(s,c({key:`${t}-${o}`,to:typeof t=="number"?(w=e.to)==null?void 0:w.call(e,t):null,size:e.size,disabled:e.disabled,label:`${t}`,ref_for:!0},t===e.currentPage?{...e.ui.default.activeButton||{},...e.activeButton}:{...e.ui.default.inactiveButton||{},...e.inactiveButton},{class:[{"pointer-events-none":typeof t=="string","z-[1]":t===e.currentPage},e.ui.base,e.ui.rounded],ui:{rounded:""},onClick:()=>e.onClickPage(t)}),null,16,["to","size","disabled","label","class","onClick"])}),128)),C(e.$slots,"next",{onClick:e.onClickNext},()=>[e.nextButton?(l(),z(s,c({key:0,size:e.size,disabled:!e.canGoLastOrNext||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.nextButton||{},...e.nextButton},{ui:{rounded:""},"aria-label":"Next",onClick:e.onClickNext}),null,16,["size","disabled","class","onClick"])):B("",!0)]),C(e.$slots,"last",{onClick:e.onClickLast},()=>[e.lastButton&&e.showLast?(l(),z(s,c({key:0,size:e.size,disabled:!e.canGoLastOrNext||e.disabled,class:[e.ui.base,e.ui.rounded]},{...e.ui.default.lastButton||{},...e.lastButton},{ui:{rounded:""},"aria-label":"Last",onClick:e.onClickLast}),null,16,["size","disabled","class","onClick"])):B("",!0)])],16)}const me=S(ce,[["render",be]]);export{ge as _,me as a};