import{_ as N}from"./DTEu5KMv.js";import{_ as B}from"./CQCnuzJg.js";import{_ as M}from"./vtUo5fcr.js";import{_ as P}from"./CfahSgby.js";import{H as Y,G,g as R,P as h,r as y,h as v,o as $,m as z,w as r,b as n,a as t,t as c,d as w,s as A}from"./CTp9NOr1.js";import{_ as E}from"./B6HtL2if.js";import{_ as H}from"./CyMfnTt5.js";import{u as K}from"./Dv-Xg3xh.js";const q={class:"flex justify-between items-center w-full border-b border-1 pb-4"},J=t("h3",{class:"text-lg font-semibold w-full flex justify-center text-primary"}," Your Order ",-1),Q={class:"flex flex-col justify-between pt-4 pb-10 h-full"},W={class:"flex flex-col justify-start gap-4 items-center"},X={class:"flex flex-col w-full"},Z={class:"text-primary uppercase"},ee={class:"text-xl font-semibold text-primary"},te={class:"flex flex-col w-full"},ae=t("label",{class:"text-primary"},"Category",-1),oe={class:"text-xl font-semibold text-primary capitalize"},le={class:"w-full border-t border-b border-1 pt-4 pb-8 flex flex-col gap-4"},ne={class:"flex justify-end space-x-2 px-4"},se={class:"flex flex-col items-center w-full gap-2"},fe={__name:"OrderSidebar",props:{isOpen:{type:Boolean,default:!1},data:{type:Object,default:()=>({title:"Sidebar Title",content:"Sidebar Content",confirmText:"Continue",cancelText:"Cancel",callback:()=>{}})}},emits:["update:isOpen"],setup(f,{emit:O}){const{setMyOrder:U}=K();Y();const k=G(),p=R(),a=f,C=h(()=>a.data.language_sources.filter(e=>e.id!==o.value.to.id)),V=h(()=>a.data.language_destinations.filter(e=>e.id!==o.value.from.id)),o=y({price:0,type:"Translator",from:{},to:{},file_url:""}),g=O,i=y(a.isOpen);v(()=>a.isOpen,e=>{i.value=e,e||_()}),v(i,e=>{g("update:isOpen",e)});const _=()=>{i.value=!1,g("hide")},F=e=>{o.value.file_url=e},S=()=>{a.data.callback(!1),i.value=!1},x=e=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e),T=()=>{const e={service_id:a.data.id,merchant_id:a.data.merchants[0].id,merchant_user_id:a.data.merchants[0].users[0].id,language_source:o.value.from,language_destination:o.value.to,user_file_url:o.value.file_url},s=l=>l==null||l==="",m={service_id:"Service ID",merchant_id:"Merchant ID",merchant_user_id:"Merchant User ID",language_source:"Source Language",language_destination:"Destination Language",user_file_url:"Upload File"},u=["service_id","merchant_id","merchant_user_id","language_source","language_destination","user_file_url"];for(const l of u)if(s(e[l]))return p.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-exclamation-triangle",description:`${m[l]} cannot be empty`}),null;return e},I=async()=>{try{const{data:e}=await U(T());p.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"Your order have been successfully listed!"}),_(),k.push({name:"my-client-orders-id",params:{id:e.data.order.id}})}catch(e){console.error("Creating order failed:",e),p.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-exclamation-triangle",description:e.response.data.message})}};return(e,s)=>{const m=N,u=B,l=M,L=P,b=A,D=E,j=H;return $(),z(j,{modelValue:i.value,"onUpdate:modelValue":s[2]||(s[2]=d=>i.value=d),fullscreen:"","prevent-close":"",ui:{base:"w-full lg:w-[500px] absolute top-0 right-0 h-screen bg-white dark:bg-gray-800 lg:rounded-l-3xl",rounded:"rounded-none lg:rounded-l-3xl"}},{default:r(()=>[n(D,{ui:{base:"h-full",ring:"",divide:"divide-y divide-gray-100 dark:divide-gray-800",rounded:"rounded-none lg:rounded-l-3xl",body:{base:"h-full",padding:"px-6 py-5 sm:p-10"},header:{padding:"px-6 py-5 sm:px-8"},footer:{padding:"px-6 py-4 sm:px-10"}}},{default:r(()=>[t("div",q,[t("button",{onClick:_},[n(m,{name:"back",class:"text-2xl text-primary dark:text-gray-300"})]),J]),t("div",Q,[t("div",W,[t("div",X,[t("label",Z,c(a.data.type)+" PACKAGE",1),t("span",ee,c(x(a.data.price)),1)]),t("div",te,[ae,t("span",oe,c(a.data.merchants[0].type),1)]),t("div",le,[n(l,{label:"From",class:"w-full"},{default:r(()=>[n(u,{placeholder:"Find Your Language",options:C.value,modelValue:o.value.from,"onUpdate:modelValue":s[0]||(s[0]=d=>o.value.from=d),by:"id","option-attribute":"name","search-attributes":["name"]},null,8,["options","modelValue"])]),_:1}),n(l,{label:"To",class:"w-full"},{default:r(()=>[n(u,{placeholder:"Find Your Language",options:V.value,modelValue:o.value.to,"onUpdate:modelValue":s[1]||(s[1]=d=>o.value.to=d),by:"id","option-attribute":"name","search-attributes":["name"]},null,8,["options","modelValue"])]),_:1})]),n(l,{label:"Upload File",class:"w-full"},{default:r(()=>[n(L,{title:"Order",accept:"*","max-size":"52428800",onFileUploaded:F})]),_:1})]),t("div",ne,[t("div",se,[n(b,{onClick:I,block:"",class:"px-4 py-2 bg-accent text-white hover:bg-accent-700 rounded-full"},{default:r(()=>[w(" Continue ("+c(x(a.data.price))+") ",1)]),_:1}),n(b,{onClick:S,color:"orange",variant:"link"},{default:r(()=>[w(c(f.data.cancelText),1)]),_:1})])])])]),_:1})]),_:1},8,["modelValue"])}}};export{fe as _};
