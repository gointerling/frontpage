import{r as $,E as J,D as c,a8 as V,H as $e,i as ue,h as re,G as ve,F as me,J as Be,I as De,ac as E,K as Re,M as ye,ae as Ve,N as U,af as Te,_ as Fe,a0 as he,v as Oe,O as ce,P as ie,a6 as Pe,ag as He,W as ze,X as G,ah as je,ai as qe,a7 as Ne,R as Ee,o as S,l as z,w as W,c as B,n as b,q as H,aj as Q,U as j,a as q,V as oe,b as Z,t as K,T as Ue,m as We,S as Ge,d as pe}from"./JKjsIVvW.js";import{u as Qe}from"./CEcrQ7c2.js";import{d as Ke,f as Je,c as A,e as Xe,a as Ye,l as Ze,n as xe,b as _e,r as ea,i as aa,u as la}from"./Cj4LDjRn.js";import{o as w,a as N,w as ta,h as na,f as ia,E as oa,u as ua,A as ee,T as ra,I as se,N as fe,O as sa,b as I,l as da}from"./Bhi7jYCv.js";import{w as va,t as ca,i as _,l as pa}from"./mwPykaTH.js";import{s as fa}from"./CBEI3uCD.js";import{u as ba}from"./-17ej8q4.js";let be=/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;function ge(e){var s,p;let i=(s=e.innerText)!=null?s:"",u=e.cloneNode(!0);if(!(u instanceof HTMLElement))return i;let d=!1;for(let y of u.querySelectorAll('[hidden],[aria-hidden],[role="img"]'))y.remove(),d=!0;let a=d?(p=u.innerText)!=null?p:"":i;return be.test(a)&&(a=a.replace(be,"")),a}function ga(e){let s=e.getAttribute("aria-label");if(typeof s=="string")return s.trim();let p=e.getAttribute("aria-labelledby");if(p){let i=p.split(" ").map(u=>{let d=document.getElementById(u);if(d){let a=d.getAttribute("aria-label");return typeof a=="string"?a.trim():ge(d).trim()}return null}).filter(Boolean);if(i.length>0)return i.join(", ")}return ge(e).trim()}function ma(e){let s=$(""),p=$("");return()=>{let i=w(e);if(!i)return"";let u=i.innerText;if(s.value===u)return p.value;let d=ga(i).trim().toLowerCase();return s.value=u,p.value=d,d}}function ya(e,s){return e===s}var ha=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(ha||{}),Oa=(e=>(e[e.Single=0]="Single",e[e.Multi=1]="Multi",e))(Oa||{}),Sa=(e=>(e[e.Pointer=0]="Pointer",e[e.Other=1]="Other",e))(Sa||{});function Ma(e){requestAnimationFrame(()=>requestAnimationFrame(e))}let Se=Symbol("ListboxContext");function ae(e){let s=Re(Se,null);if(s===null){let p=new Error(`<${e} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(p,ae),p}return s}let Ca=J({name:"Listbox",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>ya},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},form:{type:String,optional:!0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(e,{slots:s,attrs:p,emit:i}){let u=$(1),d=$(null),a=$(null),y=$(null),f=$([]),g=$(""),m=$(null),n=$(1);function t(l=o=>o){let o=m.value!==null?f.value[m.value]:null,r=sa(l(f.value.slice()),C=>w(C.dataRef.domRef)),v=o?r.indexOf(o):null;return v===-1&&(v=null),{options:r,activeOptionIndex:v}}let k=c(()=>e.multiple?1:0),[h,L]=Ke(c(()=>e.modelValue),l=>i("update:modelValue",l),c(()=>e.defaultValue)),D=c(()=>h.value===void 0?N(k.value,{1:[],0:void 0}):h.value),M={listboxState:u,value:D,mode:k,compare(l,o){if(typeof e.by=="string"){let r=e.by;return(l==null?void 0:l[r])===(o==null?void 0:o[r])}return e.by(l,o)},orientation:c(()=>e.horizontal?"horizontal":"vertical"),labelRef:d,buttonRef:a,optionsRef:y,disabled:c(()=>e.disabled),options:f,searchQuery:g,activeOptionIndex:m,activationTrigger:n,closeListbox(){e.disabled||u.value!==1&&(u.value=1,m.value=null)},openListbox(){e.disabled||u.value!==0&&(u.value=0)},goToOption(l,o,r){if(e.disabled||u.value===1)return;let v=t(),C=Je(l===A.Specific?{focus:A.Specific,id:o}:{focus:l},{resolveItems:()=>v.options,resolveActiveIndex:()=>v.activeOptionIndex,resolveId:P=>P.id,resolveDisabled:P=>P.dataRef.disabled});g.value="",m.value=C,n.value=r??1,f.value=v.options},search(l){if(e.disabled||u.value===1)return;let o=g.value!==""?0:1;g.value+=l.toLowerCase();let r=(m.value!==null?f.value.slice(m.value+o).concat(f.value.slice(0,m.value+o)):f.value).find(C=>C.dataRef.textValue.startsWith(g.value)&&!C.dataRef.disabled),v=r?f.value.indexOf(r):-1;v===-1||v===m.value||(m.value=v,n.value=1)},clearSearch(){e.disabled||u.value!==1&&g.value!==""&&(g.value="")},registerOption(l,o){let r=t(v=>[...v,{id:l,dataRef:o}]);f.value=r.options,m.value=r.activeOptionIndex},unregisterOption(l){let o=t(r=>{let v=r.findIndex(C=>C.id===l);return v!==-1&&r.splice(v,1),r});f.value=o.options,m.value=o.activeOptionIndex,n.value=1},theirOnChange(l){e.disabled||L(l)},select(l){e.disabled||L(N(k.value,{0:()=>l,1:()=>{let o=V(M.value.value).slice(),r=V(l),v=o.findIndex(C=>M.compare(r,V(C)));return v===-1?o.push(r):o.splice(v,1),o}}))}};va([a,y],(l,o)=>{var r;M.closeListbox(),ta(o,na.Loose)||(l.preventDefault(),(r=w(a))==null||r.focus())},c(()=>u.value===0)),$e(Se,M),ca(c(()=>N(u.value,{0:_.Open,1:_.Closed})));let T=c(()=>{var l;return(l=w(a))==null?void 0:l.closest("form")});return ue(()=>{re([T],()=>{if(!T.value||e.defaultValue===void 0)return;function l(){M.theirOnChange(e.defaultValue)}return T.value.addEventListener("reset",l),()=>{var o;(o=T.value)==null||o.removeEventListener("reset",l)}},{immediate:!0})}),()=>{let{name:l,modelValue:o,disabled:r,form:v,...C}=e,P={open:u.value===0,disabled:r,value:D.value};return ve(me,[...l!=null&&D.value!=null?Xe({[l]:D.value}).map(([X,le])=>ve(ia,oa({features:ua.Hidden,key:X,as:"input",type:"hidden",hidden:!0,readOnly:!0,form:v,disabled:r,name:X,value:le}))):[],ee({ourProps:{},theirProps:{...p,...ra(C,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:P,slots:s,attrs:p,name:"Listbox"})])}}}),Ia=J({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"},id:{type:String,default:null}},setup(e,{attrs:s,slots:p,expose:i}){var u;let d=(u=e.id)!=null?u:`headlessui-listbox-button-${se()}`,a=ae("ListboxButton");i({el:a.buttonRef,$el:a.buttonRef});function y(n){switch(n.key){case I.Space:case I.Enter:case I.ArrowDown:n.preventDefault(),a.openListbox(),E(()=>{var t;(t=w(a.optionsRef))==null||t.focus({preventScroll:!0}),a.value.value||a.goToOption(A.First)});break;case I.ArrowUp:n.preventDefault(),a.openListbox(),E(()=>{var t;(t=w(a.optionsRef))==null||t.focus({preventScroll:!0}),a.value.value||a.goToOption(A.Last)});break}}function f(n){switch(n.key){case I.Space:n.preventDefault();break}}function g(n){a.disabled.value||(a.listboxState.value===0?(a.closeListbox(),E(()=>{var t;return(t=w(a.buttonRef))==null?void 0:t.focus({preventScroll:!0})})):(n.preventDefault(),a.openListbox(),Ma(()=>{var t;return(t=w(a.optionsRef))==null?void 0:t.focus({preventScroll:!0})})))}let m=fa(c(()=>({as:e.as,type:s.type})),a.buttonRef);return()=>{var n,t;let k={open:a.listboxState.value===0,disabled:a.disabled.value,value:a.value.value},{...h}=e,L={ref:a.buttonRef,id:d,type:m.value,"aria-haspopup":"listbox","aria-controls":(n=w(a.optionsRef))==null?void 0:n.id,"aria-expanded":a.listboxState.value===0,"aria-labelledby":a.labelRef.value?[(t=w(a.labelRef))==null?void 0:t.id,d].join(" "):void 0,disabled:a.disabled.value===!0?!0:void 0,onKeydown:y,onKeyup:f,onClick:g};return ee({ourProps:L,theirProps:h,slot:k,attrs:s,slots:p,name:"ListboxButton"})}}}),La=J({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0},id:{type:String,default:null}},setup(e,{attrs:s,slots:p,expose:i}){var u;let d=(u=e.id)!=null?u:`headlessui-listbox-options-${se()}`,a=ae("ListboxOptions"),y=$(null);i({el:a.optionsRef,$el:a.optionsRef});function f(n){switch(y.value&&clearTimeout(y.value),n.key){case I.Space:if(a.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),a.search(n.key);case I.Enter:if(n.preventDefault(),n.stopPropagation(),a.activeOptionIndex.value!==null){let t=a.options.value[a.activeOptionIndex.value];a.select(t.dataRef.value)}a.mode.value===0&&(a.closeListbox(),E(()=>{var t;return(t=w(a.buttonRef))==null?void 0:t.focus({preventScroll:!0})}));break;case N(a.orientation.value,{vertical:I.ArrowDown,horizontal:I.ArrowRight}):return n.preventDefault(),n.stopPropagation(),a.goToOption(A.Next);case N(a.orientation.value,{vertical:I.ArrowUp,horizontal:I.ArrowLeft}):return n.preventDefault(),n.stopPropagation(),a.goToOption(A.Previous);case I.Home:case I.PageUp:return n.preventDefault(),n.stopPropagation(),a.goToOption(A.First);case I.End:case I.PageDown:return n.preventDefault(),n.stopPropagation(),a.goToOption(A.Last);case I.Escape:n.preventDefault(),n.stopPropagation(),a.closeListbox(),E(()=>{var t;return(t=w(a.buttonRef))==null?void 0:t.focus({preventScroll:!0})});break;case I.Tab:n.preventDefault(),n.stopPropagation();break;default:n.key.length===1&&(a.search(n.key),y.value=setTimeout(()=>a.clearSearch(),350));break}}let g=pa(),m=c(()=>g!==null?(g.value&_.Open)===_.Open:a.listboxState.value===0);return()=>{var n,t;let k={open:a.listboxState.value===0},{...h}=e,L={"aria-activedescendant":a.activeOptionIndex.value===null||(n=a.options.value[a.activeOptionIndex.value])==null?void 0:n.id,"aria-multiselectable":a.mode.value===1?!0:void 0,"aria-labelledby":(t=w(a.buttonRef))==null?void 0:t.id,"aria-orientation":a.orientation.value,id:d,onKeydown:f,role:"listbox",tabIndex:0,ref:a.optionsRef};return ee({ourProps:L,theirProps:h,slot:k,attrs:s,slots:p,features:fe.RenderStrategy|fe.Static,visible:m.value,name:"ListboxOptions"})}}}),ka=J({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},setup(e,{slots:s,attrs:p,expose:i}){var u;let d=(u=e.id)!=null?u:`headlessui-listbox-option-${se()}`,a=ae("ListboxOption"),y=$(null);i({el:y,$el:y});let f=c(()=>a.activeOptionIndex.value!==null?a.options.value[a.activeOptionIndex.value].id===d:!1),g=c(()=>N(a.mode.value,{0:()=>a.compare(V(a.value.value),V(e.value)),1:()=>V(a.value.value).some(l=>a.compare(V(l),V(e.value)))})),m=c(()=>N(a.mode.value,{1:()=>{var l;let o=V(a.value.value);return((l=a.options.value.find(r=>o.some(v=>a.compare(V(v),V(r.dataRef.value)))))==null?void 0:l.id)===d},0:()=>g.value})),n=ma(y),t=c(()=>({disabled:e.disabled,value:e.value,get textValue(){return n()},domRef:y}));ue(()=>a.registerOption(d,t)),Be(()=>a.unregisterOption(d)),ue(()=>{re([a.listboxState,g],()=>{a.listboxState.value===0&&g.value&&N(a.mode.value,{1:()=>{m.value&&a.goToOption(A.Specific,d)},0:()=>{a.goToOption(A.Specific,d)}})},{immediate:!0})}),De(()=>{a.listboxState.value===0&&f.value&&a.activationTrigger.value!==0&&E(()=>{var l,o;return(o=(l=w(y))==null?void 0:l.scrollIntoView)==null?void 0:o.call(l,{block:"nearest"})})});function k(l){if(e.disabled)return l.preventDefault();a.select(e.value),a.mode.value===0&&(a.closeListbox(),E(()=>{var o;return(o=w(a.buttonRef))==null?void 0:o.focus({preventScroll:!0})}))}function h(){if(e.disabled)return a.goToOption(A.Nothing);a.goToOption(A.Specific,d)}let L=Ye();function D(l){L.update(l)}function M(l){L.wasMoved(l)&&(e.disabled||f.value||a.goToOption(A.Specific,d,0))}function T(l){L.wasMoved(l)&&(e.disabled||f.value&&a.goToOption(A.Nothing))}return()=>{let{disabled:l}=e,o={active:f.value,selected:g.value,disabled:l},{value:r,disabled:v,...C}=e,P={id:d,ref:y,role:"option",tabIndex:l===!0?void 0:-1,"aria-disabled":l===!0?!0:void 0,"aria-selected":g.value,disabled:void 0,onClick:k,onFocus:h,onPointerenter:D,onMouseenter:D,onPointermove:M,onMousemove:M,onPointerleave:T,onMouseleave:T};return ee({ourProps:P,theirProps:C,slot:o,attrs:p,slots:s,name:"ListboxOption"})}}});const F=ye(U.ui.strategy,U.ui.select,Ve),x=ye(U.ui.strategy,U.ui.selectMenu,Te),wa=J({components:{HCombobox:Ze,HComboboxButton:xe,HComboboxOptions:_e,HComboboxOption:ea,HComboboxInput:aa,HListbox:Ca,HListboxButton:Ia,HListboxOptions:La,HListboxOption:ka,UIcon:he,UAvatar:Oe},inheritAttrs:!1,props:{modelValue:{type:[String,Number,Object,Array,Boolean],default:""},query:{type:String,default:null},by:{type:String,default:void 0},options:{type:Array,default:()=>[]},id:{type:String,default:null},name:{type:String,default:null},required:{type:Boolean,default:!1},icon:{type:String,default:null},loadingIcon:{type:String,default:()=>F.default.loadingIcon},leadingIcon:{type:String,default:null},trailingIcon:{type:String,default:()=>F.default.trailingIcon},trailing:{type:Boolean,default:!1},leading:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},selectedIcon:{type:String,default:()=>x.default.selectedIcon},disabled:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1},searchable:{type:[Boolean,Function],default:!1},searchablePlaceholder:{type:String,default:"Search..."},searchableLazy:{type:Boolean,default:!1},clearSearchOnClose:{type:Boolean,default:()=>x.default.clearSearchOnClose},debounce:{type:Number,default:200},creatable:{type:Boolean,default:!1},showCreateOptionWhen:{type:String,default:()=>x.default.showCreateOptionWhen},placeholder:{type:String,default:null},padded:{type:Boolean,default:!0},size:{type:String,default:null,validator(e){return Object.keys(F.size).includes(e)}},color:{type:String,default:()=>F.default.color,validator(e){return[...U.ui.colors,...Object.keys(F.color)].includes(e)}},variant:{type:String,default:()=>F.default.variant,validator(e){return[...Object.keys(F.variant),...Object.values(F.color).flatMap(s=>Object.keys(s))].includes(e)}},optionAttribute:{type:String,default:"label"},valueAttribute:{type:String,default:null},searchAttributes:{type:Array,default:null},popper:{type:Object,default:()=>({})},selectClass:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},uiMenu:{type:Object,default:()=>({})}},emits:["update:modelValue","update:query","open","close","change"],setup(e,{emit:s,slots:p}){const{ui:i,attrs:u}=ce("select",ie(e,"ui"),F,ie(e,"class")),{ui:d}=ce("selectMenu",ie(e,"uiMenu"),x),a=c(()=>Pe({},e.popper,d.value.popper)),[y,f]=la(a.value),{size:g,rounded:m}=He({ui:i,props:e}),{emitFormBlur:n,emitFormChange:t,inputId:k,color:h,size:L,name:D}=ba(e,F),M=c(()=>g.value||L.value),T=$(""),l=c({get(){return e.query??T.value},set(O){T.value=O,s("update:query",O)}}),o=c(()=>{if(e.multiple)return Array.isArray(e.modelValue)&&e.modelValue.length?`${e.modelValue.length} selected`:null;if(e.modelValue!==void 0&&e.modelValue!==null)if(e.valueAttribute){const O=e.options.find(R=>R[e.valueAttribute]===e.modelValue);return O?O[e.optionAttribute]:null}else return["string","number"].includes(typeof e.modelValue)?e.modelValue:e.modelValue[e.optionAttribute];return null}),r=c(()=>{var R,Y;const O=((Y=(R=i.value.color)==null?void 0:R[h.value])==null?void 0:Y[e.variant])||i.value.variant[e.variant];return ze(G(i.value.base,d.value.select,m.value,i.value.size[M.value],i.value.gap[M.value],e.padded?i.value.padding[M.value]:"p-0",O==null?void 0:O.replaceAll("{color}",h.value),(v.value||p.leading)&&i.value.leading.padding[M.value],(C.value||p.trailing)&&i.value.trailing.padding[M.value]),e.placeholder&&!e.modelValue&&i.value.placeholder,e.selectClass)}),v=c(()=>e.icon&&e.leading||e.icon&&!e.trailing||e.loading&&!e.trailing||e.leadingIcon),C=c(()=>e.icon&&e.trailing||e.loading&&e.trailing||e.trailingIcon),P=c(()=>e.loading?e.loadingIcon:e.leadingIcon||e.icon),X=c(()=>e.loading&&!v.value?e.loadingIcon:e.trailingIcon||e.icon),le=c(()=>G(i.value.icon.leading.wrapper,i.value.icon.leading.pointer,i.value.icon.leading.padding[M.value])),Me=c(()=>G(i.value.icon.base,h.value&&U.ui.colors.includes(h.value)&&i.value.icon.color.replaceAll("{color}",h.value),i.value.icon.size[M.value],e.loading&&i.value.icon.loading)),Ce=c(()=>G(i.value.icon.trailing.wrapper,i.value.icon.trailing.pointer,i.value.icon.trailing.padding[M.value])),Ie=c(()=>G(i.value.icon.base,h.value&&U.ui.colors.includes(h.value)&&i.value.icon.color.replaceAll("{color}",h.value),i.value.icon.size[M.value],e.loading&&!v.value&&i.value.icon.loading)),de=typeof e.searchable=="function"?je(e.searchable,e.debounce):void 0,te=qe(async()=>e.searchable&&de?await de(l.value):l.value===""?e.options:e.options.filter(O=>{var R;return((R=e.searchAttributes)!=null&&R.length?e.searchAttributes:[e.optionAttribute]).some(Y=>{if(["string","number"].includes(typeof O))return String(O).search(new RegExp(l.value,"i"))!==-1;const ne=Ne(O,Y);return ne!=null&&String(ne).search(new RegExp(l.value,"i"))!==-1})}),[],{lazy:e.searchableLazy}),Le=c(()=>l.value===""||e.showCreateOptionWhen==="empty"&&te.value.length||e.showCreateOptionWhen==="always"&&te.value.find(R=>["string","number"].includes(typeof R)?R===l.value:R[e.optionAttribute]===l.value)?null:["string","number"].includes(typeof e.modelValue)?l.value:{[e.optionAttribute]:l.value});function ke(){e.clearSearchOnClose&&(l.value="")}re(f,O=>{O?s("open"):(ke(),s("close"),n())});function we(O){s("update:modelValue",O),s("change",O),t()}function Ae(O){l.value=O.target.value}return da(()=>Qe("$YMH7mn4R4k")),{ui:i,uiMenu:d,attrs:u,name:D,inputId:k,popper:a,trigger:y,container:f,label:o,isLeading:v,isTrailing:C,selectClass:r,leadingIconName:P,leadingIconClass:Me,leadingWrapperIconClass:le,trailingIconName:X,trailingIconClass:Ie,trailingWrapperIconClass:Ce,filteredOptions:te,createOption:Le,query:l,onUpdate:we,onQueryChange:Ae}}}),Aa=["value","required"],$a=["id","disabled"],Ba={class:"truncate"};function Da(e,s,p,i,u,d){const a=he,y=Ee("HComboboxInput"),f=Oe;return S(),z(Q(e.searchable?"HCombobox":"HListbox"),{by:e.by,name:e.name,"model-value":e.modelValue,multiple:e.multiple,disabled:e.disabled,as:"div",class:b(e.ui.wrapper),"onUpdate:modelValue":e.onUpdate},{default:W(({open:g})=>[e.required?(S(),B("input",{key:0,value:e.modelValue,required:e.required,class:b(e.uiMenu.required),tabindex:"-1","aria-hidden":"true"},null,10,Aa)):H("",!0),(S(),z(Q(e.searchable?"HComboboxButton":"HListboxButton"),{ref:"trigger",as:"div",role:"button",class:b(e.uiMenu.trigger)},{default:W(()=>[j(e.$slots,"default",{open:g,disabled:e.disabled,loading:e.loading},()=>[q("button",oe({id:e.inputId,class:e.selectClass,disabled:e.disabled,type:"button"},e.attrs),[e.isLeading&&e.leadingIconName||e.$slots.leading?(S(),B("span",{key:0,class:b(e.leadingWrapperIconClass)},[j(e.$slots,"leading",{disabled:e.disabled,loading:e.loading},()=>[Z(a,{name:e.leadingIconName,class:b(e.leadingIconClass)},null,8,["name","class"])])],2)):H("",!0),j(e.$slots,"label",{},()=>[e.label?(S(),B("span",{key:0,class:b(e.uiMenu.label)},K(e.label),3)):(S(),B("span",{key:1,class:b(e.uiMenu.label)},K(e.placeholder||" "),3))]),e.isTrailing&&e.trailingIconName||e.$slots.trailing?(S(),B("span",{key:1,class:b(e.trailingWrapperIconClass)},[j(e.$slots,"trailing",{disabled:e.disabled,loading:e.loading},()=>[Z(a,{name:e.trailingIconName,class:b(e.trailingIconClass),"aria-hidden":"true"},null,8,["name","class"])])],2)):H("",!0)],16,$a)])]),_:2},1032,["class"])),g?(S(),B("div",{key:1,ref:"container",class:b([e.uiMenu.container,e.uiMenu.width])},[Z(Ue,oe({appear:""},e.uiMenu.transition),{default:W(()=>[q("div",null,[e.popper.arrow?(S(),B("div",{key:0,"data-popper-arrow":"",class:b(Object.values(e.uiMenu.arrow))},null,2)):H("",!0),(S(),z(Q(e.searchable?"HComboboxOptions":"HListboxOptions"),{static:"",class:b([e.uiMenu.base,e.uiMenu.ring,e.uiMenu.rounded,e.uiMenu.shadow,e.uiMenu.background,e.uiMenu.padding,e.uiMenu.height])},{default:W(()=>{var m,n;return[e.searchable?(S(),z(y,{key:0,"display-value":()=>e.query,name:"q",placeholder:e.searchablePlaceholder,autofocus:"",autocomplete:"off",class:b(e.uiMenu.input),onChange:e.onQueryChange},null,8,["display-value","placeholder","class","onChange"])):H("",!0),(S(!0),B(me,null,We(e.filteredOptions,(t,k)=>(S(),z(Q(e.searchable?"HComboboxOption":"HListboxOption"),{key:k,as:"template",value:e.valueAttribute?t[e.valueAttribute]:t,disabled:t.disabled},{default:W(({active:h,selected:L,disabled:D})=>[q("li",{class:b([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,h?e.uiMenu.option.active:e.uiMenu.option.inactive,L&&e.uiMenu.option.selected,D&&e.uiMenu.option.disabled])},[q("div",{class:b(e.uiMenu.option.container)},[j(e.$slots,"option",{option:t,active:h,selected:L},()=>[t.icon?(S(),z(a,{key:0,name:t.icon,class:b([e.uiMenu.option.icon.base,h?e.uiMenu.option.icon.active:e.uiMenu.option.icon.inactive,t.iconClass]),"aria-hidden":"true"},null,8,["name","class"])):t.avatar?(S(),z(f,oe({key:1,ref_for:!0},{size:e.uiMenu.option.avatar.size,...t.avatar},{class:e.uiMenu.option.avatar.base,"aria-hidden":"true"}),null,16,["class"])):t.chip?(S(),B("span",{key:2,class:b(e.uiMenu.option.chip.base),style:Ge({background:`#${t.chip}`})},null,6)):H("",!0),q("span",Ba,K(["string","number"].includes(typeof t)?t:t[e.optionAttribute]),1)])],2),L?(S(),B("span",{key:0,class:b([e.uiMenu.option.selectedIcon.wrapper,e.uiMenu.option.selectedIcon.padding])},[Z(a,{name:e.selectedIcon,class:b(e.uiMenu.option.selectedIcon.base),"aria-hidden":"true"},null,8,["name","class"])],2)):H("",!0)],2)]),_:2},1032,["value","disabled"]))),128)),e.creatable&&e.createOption?(S(),z(Q(e.searchable?"HComboboxOption":"HListboxOption"),{key:1,value:e.createOption,as:"template"},{default:W(({active:t,selected:k})=>[q("li",{class:b([e.uiMenu.option.base,e.uiMenu.option.rounded,e.uiMenu.option.padding,e.uiMenu.option.size,e.uiMenu.option.color,t?e.uiMenu.option.active:e.uiMenu.option.inactive])},[q("div",{class:b(e.uiMenu.option.container)},[j(e.$slots,"option-create",{option:e.createOption,active:t,selected:k},()=>[q("span",{class:b(e.uiMenu.option.create)},'Create "'+K(e.createOption[e.optionAttribute])+'"',3)])],2)],2)]),_:3},8,["value"])):e.searchable&&e.query&&!((m=e.filteredOptions)!=null&&m.length)?(S(),B("p",{key:2,class:b(e.uiMenu.option.empty)},[j(e.$slots,"option-empty",{query:e.query},()=>[pe(' No results for "'+K(e.query)+'". ',1)])],2)):(n=e.filteredOptions)!=null&&n.length?H("",!0):(S(),B("p",{key:3,class:b(e.uiMenu.empty)},[j(e.$slots,"empty",{query:e.query},()=>[pe(" No options. ")])],2))]}),_:3},8,["class"]))])]),_:3},16)],2)):H("",!0)]),_:3},8,["by","name","model-value","multiple","disabled","class","onUpdate:modelValue"])}const ja=Fe(wa,[["render",Da]]);export{ja as _};
