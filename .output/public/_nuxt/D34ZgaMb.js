import{_ as x}from"./qvAIM2h3.js";import{_ as v}from"./XYK8Oa3q.js";import{r as y,h as c,o as b,m as g,w as i,b as h,a as e,t as n}from"./CjOD9Ua6.js";const C={class:"flex flex-col justify-center items-center"},k={class:"text-lg font-semibold"},O={class:"p-4"},T={class:"text-center text-gray-700"},V={class:"flex justify-end space-x-2 px-4"},j={__name:"ConfirmationModal",props:{isOpen:{type:Boolean,default:!1},data:{type:Object,default:()=>({title:"Modal Title",content:"Modal Content",confirmText:"Confirm",cancelText:"Cancel",callback:()=>{}})}},emits:["update:isOpen"],setup(a,{emit:d}){const s=a,r=d,t=y(s.isOpen);c(()=>s.isOpen,o=>{t.value=o}),c(t,o=>{r("update:isOpen",o)});const u=()=>{s.data.callback(!0),t.value=!1},m=()=>{t.value=!1};return(o,l)=>{const p=x,f=v;return b(),g(f,{modelValue:t.value,"onUpdate:modelValue":l[0]||(l[0]=_=>t.value=_)},{default:i(()=>[h(p,{ui:{ring:"",divide:"divide-y divide-gray-100 dark:divide-gray-800"}},{default:i(()=>[e("div",C,[e("h3",k,n(a.data.title),1),e("div",O,[e("p",T,n(a.data.content),1)]),e("div",V,[e("button",{onClick:m,class:"px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"},n(a.data.cancelText),1),e("button",{onClick:u,class:"px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"},n(a.data.confirmText),1)])])]),_:1})]),_:1},8,["modelValue"])}}};export{j as _};
