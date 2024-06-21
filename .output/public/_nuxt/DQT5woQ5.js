import{u as j}from"./CEcrQ7c2.js";import{M as q,N as S,_ as w,E as C,O,P as V,K as I,D as n,r as N,H as P,o as r,c as a,a as h,n as s,U as l,a4 as i,V as t,F as o,d,t as p,q as m,ak as D}from"./JKjsIVvW.js";const G={wrapper:"",inner:"",label:{wrapper:"flex content-center items-center justify-between",base:"block font-medium text-gray-700 dark:text-gray-200",required:"after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400"},size:{"2xs":"text-xs",xs:"text-xs",sm:"text-sm",md:"text-sm",lg:"text-sm",xl:"text-base"},container:"mt-1 relative",description:"text-gray-500 dark:text-gray-400",hint:"text-gray-500 dark:text-gray-400",help:"mt-2 text-gray-500 dark:text-gray-400",error:"mt-2 text-red-500 dark:text-red-400",default:{size:"sm"}},g=q(S.ui.strategy,S.ui.formGroup,G),A=C({inheritAttrs:!1,props:{name:{type:String,default:null},size:{type:String,default:null,validator(e){return Object.keys(g.size).includes(e)}},label:{type:String,default:null},description:{type:String,default:null},required:{type:Boolean,default:!1},help:{type:String,default:null},error:{type:[String,Boolean],default:null},hint:{type:String,default:null},class:{type:[String,Object,Array],default:()=>""},ui:{type:Object,default:()=>({})},eagerValidation:{type:Boolean,default:!1}},setup(e){const{ui:f,attrs:b}=O("formGroup",V(e,"ui"),g,V(e,"class")),u=I("form-errors",null),y=n(()=>{var z,v;return e.error&&typeof e.error=="string"||typeof e.error=="boolean"?e.error:(v=(z=u==null?void 0:u.value)==null?void 0:z.find(B=>B.path===e.name))==null?void 0:v.message}),k=n(()=>f.value.size[e.size??g.default.size]),$=N(j("$K7dDJpdOWE"));return P("form-group",{error:y,inputId:$,name:n(()=>e.name),size:n(()=>e.size),eagerValidation:n(()=>e.eagerValidation)}),{ui:f,attrs:b,inputId:$,size:k,error:y}}}),E=["for"];function F(e,f,b,u,y,k){return r(),a("div",t({class:e.ui.wrapper},e.attrs),[h("div",{class:s(e.ui.inner)},[e.label||e.$slots.label?(r(),a("div",{key:0,class:s([e.ui.label.wrapper,e.size])},[h("label",{for:e.inputId,class:s([e.ui.label.base,e.required?e.ui.label.required:""])},[e.$slots.label?l(e.$slots,"label",i(t({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(o,{key:1},[d(p(e.label),1)],64))],10,E),e.hint||e.$slots.hint?(r(),a("span",{key:0,class:s([e.ui.hint])},[e.$slots.hint?l(e.$slots,"hint",i(t({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(o,{key:1},[d(p(e.hint),1)],64))],2)):m("",!0)],2)):m("",!0),e.description||e.$slots.description?(r(),a("p",{key:1,class:s([e.ui.description,e.size])},[e.$slots.description?l(e.$slots,"description",i(t({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(o,{key:1},[d(p(e.description),1)],64))],2)):m("",!0)],2),h("div",{class:s([e.label?e.ui.container:""])},[l(e.$slots,"default",i(D({error:e.error}))),typeof e.error=="string"&&e.error||e.$slots.error?(r(),a("p",{key:0,class:s([e.ui.error,e.size])},[e.$slots.error?l(e.$slots,"error",i(t({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(o,{key:1},[d(p(e.error),1)],64))],2)):e.help||e.$slots.help?(r(),a("p",{key:1,class:s([e.ui.help,e.size])},[e.$slots.help?l(e.$slots,"help",i(t({key:0},{error:e.error,label:e.label,name:e.name,hint:e.hint,description:e.description,help:e.help}))):(r(),a(o,{key:1},[d(p(e.help),1)],64))],2)):m("",!0)],2)],16)}const U=w(A,[["render",F]]);export{U as _};
