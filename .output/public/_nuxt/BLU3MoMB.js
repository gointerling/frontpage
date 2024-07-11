import{_ as B}from"./BmZ1ThBO.js";import{_ as M}from"./DL153v74.js";import{_ as Y}from"./7QM56ELz.js";import{_ as P}from"./FiNmAi7i.js";import{x as R,L as $,g as z,D as h,r as y,h as v,o as A,l as E,w as r,b as s,a as t,t as c,k as w,d as O,s as G}from"./BqGgLAbD.js";import{_ as K}from"./fMf9s-QS.js";import{_ as q}from"./CG0a7XMq.js";import{u as H}from"./CFC3nTEj.js";const J={class:"flex justify-between items-center w-full border-b border-1 pb-4"},Q=t("h3",{class:"text-lg font-semibold w-full flex justify-center text-primary"}," Your Order ",-1),W={class:"flex flex-col justify-between pt-4 pb-10 h-full"},X={class:"flex flex-col justify-start gap-4 items-center"},Z={class:"flex flex-col w-full"},ee={class:"text-primary uppercase"},te={class:"text-xl font-semibold text-primary"},ae={class:"flex flex-col w-full"},oe=t("label",{class:"text-primary"},"Category",-1),ne={class:"text-xl font-semibold text-primary capitalize"},se={class:"w-full border-t border-b border-1 pt-4 pb-8 flex flex-col gap-4"},le={class:"flex justify-end space-x-2 px-4"},re={class:"flex flex-col items-center w-full gap-2"},xe={__name:"OrderSidebar",props:{isOpen:{type:Boolean,default:!1},data:{type:Object,default:()=>({title:"Sidebar Title",content:"Sidebar Content",confirmText:"Continue",cancelText:"Cancel",callback:()=>{}})}},emits:["update:isOpen"],setup(f,{emit:k}){const{setMyOrder:U}=H();R();const C=$(),p=z(),a=f,V=h(()=>a.data.language_sources.filter(e=>e.id!==o.value.to.id)),F=h(()=>a.data.language_destinations.filter(e=>e.id!==o.value.from.id)),o=y({price:0,type:"Translator",from:{},to:{},file_url:""}),x=k,i=y(a.isOpen);v(()=>a.isOpen,e=>{i.value=e,e||_()}),v(i,e=>{x("update:isOpen",e)});const _=()=>{i.value=!1,x("hide")},L=e=>{o.value.file_url=e},S=()=>{a.data.callback(!1),i.value=!1},g=e=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(e),T=()=>{const e={service_id:a.data.id,merchant_id:a.data.merchants[0].id,merchant_user_id:a.data.merchants[0].users[0].id,language_source:o.value.from,language_destination:o.value.to,user_file_url:o.value.file_url},l=n=>n==null||n==="",m={service_id:"Service ID",merchant_id:"Merchant ID",merchant_user_id:"Merchant User ID",language_source:"Source Language",language_destination:"Destination Language",user_file_url:"Upload File"},u=["service_id","merchant_id","merchant_user_id","language_source","language_destination","user_file_url"];for(const n of u)if(l(e[n]))return p.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-exclamation-triangle",description:`${m[n]} cannot be empty`}),null;return e},D=async()=>{try{const{data:e}=await U(T());p.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"Your order have been successfully listed!"}),_(),C.push({name:"my-client-orders-id",params:{id:e.data.order.id}})}catch(e){console.error("Creating order failed:",e),p.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-exclamation-triangle",description:e.response.data.message})}};return(e,l)=>{const m=B,u=M,n=Y,I=P,b=G,j=K,N=q;return A(),E(N,{modelValue:i.value,"onUpdate:modelValue":l[2]||(l[2]=d=>i.value=d),fullscreen:"","prevent-close":"",ui:{base:"!w-[500px] absolute top-0 right-0 h-screen bg-white dark:bg-gray-800 rounded-l-3xl",rounded:"rounded-l-3xl rounded-r-0"}},{default:r(()=>[s(j,{ui:{base:"h-full",ring:"",divide:"divide-y divide-gray-100 dark:divide-gray-800",rounded:"rounded-l-3xl rounded-r-0",body:{base:"h-full",padding:"px-6 py-5 sm:p-10"},header:{padding:"px-6 py-5 sm:px-8"},footer:{padding:"px-6 py-4 sm:px-10"}}},{default:r(()=>[t("div",J,[t("button",{onClick:_},[s(m,{name:"back",class:"text-2xl text-primary dark:text-gray-300"})]),Q]),t("div",W,[t("div",X,[t("div",Z,[t("label",ee,c(a.data.type)+" PACKAGE",1),t("span",te,c(g(a.data.price)),1)]),t("div",ae,[oe,t("span",ne,c(a.data.merchants[0].type),1)]),t("div",se,[s(n,{label:"From",class:"w-full"},{default:r(()=>[s(u,{placeholder:"Find Your Language",options:w(V),modelValue:o.value.from,"onUpdate:modelValue":l[0]||(l[0]=d=>o.value.from=d),by:"id","option-attribute":"name","search-attributes":["name"]},null,8,["options","modelValue"])]),_:1}),s(n,{label:"To",class:"w-full"},{default:r(()=>[s(u,{placeholder:"Find Your Language",options:w(F),modelValue:o.value.to,"onUpdate:modelValue":l[1]||(l[1]=d=>o.value.to=d),by:"id","option-attribute":"name","search-attributes":["name"]},null,8,["options","modelValue"])]),_:1})]),s(n,{label:"Upload File",class:"w-full"},{default:r(()=>[s(I,{title:"Order",accept:"*","max-size":"52428800",onFileUploaded:L})]),_:1})]),t("div",le,[t("div",re,[s(b,{onClick:D,block:"",class:"px-4 py-2 bg-accent text-white hover:bg-accent-700 rounded-full"},{default:r(()=>[O(" Continue ("+c(g(a.data.price))+") ",1)]),_:1}),s(b,{onClick:S,color:"orange",variant:"link"},{default:r(()=>[O(c(f.data.cancelText),1)]),_:1})])])])]),_:1})]),_:1},8,["modelValue"])}}};export{xe as _};