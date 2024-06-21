import{_ as Q}from"./DrJ7tiV1.js";import{_ as R}from"./B_NMm9Qw.js";import{_ as W}from"./ChJs9Bjv.js";import{_ as G}from"./BFXRxRsm.js";import{g as X,r as i,h as Y,i as Z,c as h,b as o,w as n,j as ee,o as c,a as s,t as r,k as te,d as $,l as y,q as ae,v as oe,s as ne}from"./BryKqlfZ.js";import{_ as se}from"./vIeE2Lqx.js";import{_ as le,a as ie}from"./BzOz-8SU.js";import{_ as ce}from"./CpznoVNi.js";import{_ as re}from"./E-OrZhLo.js";import{u as ue}from"./DottjknV.js";import{u as de}from"./DeP8cZZq.js";import"./B5Kju58Z.js";import"./DpFyDaYR.js";import"./CU90saBV.js";import"./z1PXjQNm.js";const pe={class:"w-full pt-0 p-6 flex flex-col gap-2"},me={class:"flex gap-2"},_e={key:0,class:"flex flex-col gap-1 items-start capitalize"},fe={class:"text-primary"},ge={key:1,class:"text-gray-300"},ve={class:"text-primary"},he={class:"text-primary"},ye={class:"flex gap-3 items-center"},xe={class:"flex flex-col"},be={class:"font-semibold text-primary"},ke={class:"text-sm text-gray-600"},Ce={key:1,class:"text-gray-300"},Pe={class:"flex gap-1"},Ue="Order List",je={__name:"orders",setup(Ve){const{getMerchants:A,updateMerchantStatus:I}=ue(),{getMyMerchantOrders:N}=de(),O=X(),x=i(!1),S=i({title:"",message:"",callback:null}),F=i([]),w=i([]),u=i({label:"All",value:"all"}),_=i(""),p=i(1),f=i({page:1,totalPage:1,totalItems:0,itemsPerPage:10}),b=async()=>{try{await A({page:p.value,per_page:f.value.itemsPerPage,status:u.value.value==="all"?"":u.value.value,search:_.value}).then(a=>{F.value=a.data.data.data.map(e=>({user:{id:e.id,fullname:e.fullname,email:e.email},phone:e.phone,type:e.merchants[0].type,bank:{bank:e.merchants[0].bank,bankAccount:e.merchants[0].bank_account},CV:e.merchants[0].cv_url,portfolio:JSON.parse(e.merchants[0].portfolios),certificate:JSON.parse(e.merchants[0].certificates),status:e.merchants[0].status})),f.value={page:a.data.data.current_page,totalPage:a.data.data.last_page,totalItems:a.data.data.total,itemsPerPage:a.data.data.per_page}})}catch(a){console.error("Error fetching facilitators:",a)}},D=async()=>{try{await N({page:p.value,per_page:f.value.itemsPerPage,status:u.value.value==="all"?"":u.value.value,search:_.value}).then(a=>{w.value=a.data.data.orders.data.map((e,l)=>({no:l+1,service:{id:e.service.id,name:e.merchant.type,type:e.service.type},buyer:{id:e.user.id,fullname:e.user.fullname,email:e.user.email},languages:{language_source:e.language_source,language_destination:e.language_destination},price:e.price,status:e.order_status,file:e.user_file_url,actions:{id:e.id,status:e.order_status}}))})}catch(a){console.error("Error fetching merchant orders:",a)}};Y(p,b);const M=()=>{b(p.value,u.value.value,_.value)},T=B(()=>{M()},500);function B(a,e,l){let d;return function(){const m=this,g=arguments,P=function(){d=null,a.apply(m,g)};clearTimeout(d),d=setTimeout(P,e)}}const E=a=>{window.open(a,"_blank")},q=a=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(a),k=(a,e,l,d,m)=>{S.value={title:a,content:e,confirmText:l,cancelText:d,callback:m},x.value=!0},C=async(a,e)=>{await I(a,e).then(()=>{x.value=!1,O.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"User status updated successfully!"}),b()}).catch(l=>{console.error("Error updating user status:",l),O.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-x-circle",description:"Error updating user status!"})})},z=a=>{switch(a){case"completed":return{color:"green",text:"Completed"};case"paid":return{color:"blue",text:"In Progress"};case"pending":return{color:"violet",text:"Pending"};case"waitingpaid":return{color:"orange",text:"Approved"};case"failed":return{color:"red",text:"Failed"};default:return{color:"gray",text:"Unknown"}}};return Z(()=>{D()}),(a,e)=>{const l=Q,d=R,m=W,g=G,P=oe,j=se,v=ne,U=le,L=ce,H=ie,J=ee,K=re;return c(),h("div",null,[o(J,{name:"merchant"},{default:n(()=>[s("div",pe,[o(m,{ui:{body:{base:"flex justify-between items-center",background:"",padding:"p-2 sm:p-4"}}},{default:n(()=>[s("h6",{class:"font-semibold"},r(Ue)),s("div",me,[o(l,{options:[{label:"All",value:"all",color:"gray"},{label:"Verified",value:"verified",color:"blue"},{label:"Pending",value:"pending",color:"orange"}],modelValue:u.value,"onUpdate:modelValue":e[0]||(e[0]=t=>u.value=t),placeholder:"Pilih Status",by:"value","option-attribute":"label","search-attributes":["label"],onChange:M,class:"max-w-[180px]"},null,8,["modelValue"]),o(d,{icon:"i-heroicons-magnifying-glass-20-solid",size:"sm",color:"white",trailing:!1,placeholder:"Search Facilitator",modelValue:_.value,"onUpdate:modelValue":e[1]||(e[1]=t=>_.value=t),onInput:e[2]||(e[2]=t=>te(T)())},null,8,["modelValue"])])]),_:1}),o(m,{ui:{body:{base:"flex flex-col gap-4"}}},{default:n(()=>[o(L,{rows:w.value},{"service-data":n(({row:t})=>[t.service?(c(),h("div",_e,[s("span",fe,r(t.service.name)+" Service ",1),o(g,{variant:"soft",color:"orange",class:"capitalize"},{default:n(()=>[$(r(t.service.type),1)]),_:2},1024)])):(c(),h("span",ge," Kosong "))]),"price-data":n(({row:t})=>[s("span",ve,r(q(t.price)),1)]),"languages-data":n(({row:t})=>[s("span",he,r(t.languages.language_source.name)+" -> "+r(t.languages.language_destination.name),1)]),"buyer-data":n(({row:t})=>[s("div",ye,[o(P,{src:t.buyer.photo,alt:t.buyer.fullname,size:"sm",variant:"rounded-full",imgClass:"object-cover"},null,8,["src","alt"]),s("div",xe,[s("span",be,r(t.buyer.fullname),1),s("span",ke,r(t.buyer.email),1)])])]),"status-data":n(({row:t})=>[o(g,{size:"xs",label:z(t.status).text,color:z(t.status).color,variant:"subtle",class:"capitalize"},null,8,["label","color"])]),"file-data":n(({row:t})=>[t.file?(c(),y(v,{key:0,size:"sm",color:"primary",trailing:!1,onClick:V=>E(t.file)},{default:n(()=>[o(j,{name:"file",class:"text-white"}),$(" Open Client File ")]),_:2},1032,["onClick"])):(c(),h("span",Ce," No File Uploaded "))]),"actions-data":n(({row:t})=>[s("div",Pe,[t.actions.status==="pending"?(c(),y(U,{key:0,text:"Accept Order"},{default:n(()=>[o(v,{icon:"i-heroicons-check",size:"2xs",color:"green",variant:"outline",ui:{rounded:"rounded-full"},square:"",onClick:V=>k("Hang On","Are you sure you want to deactivate this facilitator?","Deactivate","Cancel",()=>{C(t.user.id,"inactive")})},null,8,["onClick"])]),_:2},1024)):ae("",!0),t.actions.status==="waitingpaid"?(c(),y(U,{key:1,text:"Upload Works"},{default:n(()=>[o(v,{icon:"i-heroicons-arrow-up-tray",size:"2xs",color:"green",variant:"outline",ui:{rounded:"rounded-full"},square:"",onClick:V=>k("Hang On","Are you sure you want to deactivate this facilitator?","Deactivate","Cancel",()=>{C(t.user.id,"inactive")})},null,8,["onClick"])]),_:2},1024)):(c(),y(U,{key:2,text:"Verify"},{default:n(()=>[o(v,{icon:"i-heroicons-check",size:"2xs",color:"emerald",variant:"outline",ui:{rounded:"rounded-full"},square:"",onClick:V=>k("Verify Facilitator","Are you sure you want to verify this facilitator?","Verify","Cancel",()=>{C(t.user.id,"verified")})},null,8,["onClick"])]),_:2},1024))])]),_:1},8,["rows"]),o(H,{modelValue:p.value,"onUpdate:modelValue":e[3]||(e[3]=t=>p.value=t),max:5,"page-count":f.value.itemsPerPage,total:f.value.totalPage},null,8,["modelValue","page-count","total"])]),_:1})])]),_:1}),o(K,{isOpen:x.value,data:S.value},null,8,["isOpen","data"])])}}};export{je as default};