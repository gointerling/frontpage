import{_ as L}from"./ql45LMiY.js";import{_ as K}from"./CtwwHmML.js";import{_ as Q}from"./CBpr_1ee.js";import{_ as R}from"./B67_pXFU.js";import{g as W,r as c,h as G,i as X,c as y,b as o,w as s,j as Y,o as g,a as n,t as l,k as Z,d as ee,l as A,q as I,v as te,s as ae}from"./BibinpE1.js";import{_ as ne,a as oe}from"./aKxvx1p3.js";import{_ as se}from"./cALa0p1z.js";import{_ as le}from"./DUrqJfQ1.js";import{u as ce}from"./CaMWDsQ8.js";import{u as ie}from"./DyxNb_FK.js";import"./VdzOdji6.js";import"./BfD_9lfG.js";import"./Dsh6w22e.js";import"./4pCdTD5_.js";import"./CM0GqOAk.js";import"./DNt8FBdZ.js";const re={class:"w-full pt-0 p-6 flex flex-col gap-2"},ue={class:"flex gap-2"},me={key:0,class:"flex flex-col gap-1 items-start capitalize"},de={class:"text-primary"},pe={key:1,class:"text-gray-300"},_e={class:"text-primary"},ge={class:"text-primary"},fe={class:"flex gap-3 items-center"},ve={class:"flex flex-col"},he={class:"font-semibold text-primary"},ye={class:"text-sm text-gray-600"},xe={class:"flex gap-3 items-center"},be={class:"flex flex-col"},Pe={class:"font-semibold text-primary"},ke={class:"text-sm text-gray-600"},Ce={class:"flex gap-1"},Ve="Transactions List",Je={__name:"transactions",setup(Se){const{getMerchants:M,updateMerchantStatus:Ue}=ce(),{getAllOrders:N,updateClientOrderStatus:T}=ie(),x=W(),h=c(!1),b=c({title:"",message:"",callback:null}),B=c([]),P=c([]),i=c({label:"All",value:"all"}),p=c(""),u=c(1),_=c({page:1,totalPage:1,totalItems:0,itemsPerPage:10}),k=async()=>{try{await M({page:u.value,per_page:_.value.itemsPerPage,status:i.value.value==="all"?"":i.value.value,search:p.value}).then(a=>{B.value=a.data.data.data.map(e=>({user:{id:e.id,fullname:e.fullname,email:e.email},phone:e.phone,type:e.merchants[0].type,bank:{bank:e.merchants[0].bank,bankAccount:e.merchants[0].bank_account},CV:e.merchants[0].cv_url,portfolio:JSON.parse(e.merchants[0].portfolios),certificate:JSON.parse(e.merchants[0].certificates),status:e.merchants[0].status})),_.value={page:a.data.data.current_page,totalPage:a.data.data.last_page,totalItems:a.data.data.total,itemsPerPage:a.data.data.per_page}})}catch(a){console.error("Error fetching facilitators:",a)}},C=async()=>{try{await N({page:u.value,per_page:_.value.itemsPerPage,status:i.value.value==="all"?"":i.value.value,search:p.value}).then(a=>{P.value=a.data.data.orders.map((e,m)=>({no:m+1,service:{id:e.service.id,name:e.merchant.type,type:e.service.type},buyer:{id:e.user.id,fullname:e.user.fullname,email:e.user.email},facilitator:{id:e.merchant_user.id,fullname:e.merchant_user.fullname,email:e.merchant_user.email},languages:{language_source:e.language_source,language_destination:e.language_destination},price:e.price,status:e.order_status,actions:{id:e.id,status:e.order_status}}))})}catch(a){console.error("Error fetching merchant orders:",a)}};G(u,k);const V=()=>{k(u.value,i.value.value,p.value)},$=w(()=>{V()},500);function w(a,e,m){let r;return function(){const d=this,f=arguments,v=function(){r=null,a.apply(d,f)};clearTimeout(r),r=setTimeout(v,e)}}const D=a=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(a),S=(a,e,m,r,d)=>{b.value={title:a,content:e,confirmText:m,cancelText:r,callback:d},h.value=!0},F=async a=>{await T(a,"paid").then(()=>{h.value=!1,x.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"Payment status updated!"}),C()}).catch(e=>{console.error("Error updating payment status:",e),x.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-x-circle",description:"Error updating payment status!"})})},U=a=>{switch(a){case"completed":return{color:"green",text:"Completed"};case"paid":return{color:"blue",text:"In Progress By Facilitator"};case"pending":return{color:"violet",text:"Pending"};case"waitingpaid":return{color:"orange",text:"Waiting Payment"};case"failed":return{color:"red",text:"Failed"};default:return{color:"gray",text:"Unknown"}}};return X(()=>{C()}),(a,e)=>{const m=L,r=K,d=Q,f=R,v=te,O=ae,z=ne,E=se,j=oe,q=Y,H=le;return g(),y("div",null,[o(q,{name:"admin"},{default:s(()=>[n("div",re,[o(d,{ui:{body:{base:"flex justify-between items-center",background:"",padding:"p-2 sm:p-4"}}},{default:s(()=>[n("h6",{class:"font-semibold"},l(Ve)),n("div",ue,[o(m,{options:[{label:"All",value:"all",color:"gray"},{label:"Verified",value:"verified",color:"blue"},{label:"Pending",value:"pending",color:"orange"}],modelValue:i.value,"onUpdate:modelValue":e[0]||(e[0]=t=>i.value=t),placeholder:"Pilih Status",by:"value","option-attribute":"label","search-attributes":["label"],onChange:V,class:"max-w-[180px]"},null,8,["modelValue"]),o(r,{icon:"i-heroicons-magnifying-glass-20-solid",size:"sm",color:"white",trailing:!1,placeholder:"Search Facilitator",modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=t=>p.value=t),onInput:e[2]||(e[2]=t=>Z($)())},null,8,["modelValue"])])]),_:1}),o(d,{ui:{body:{base:"flex flex-col gap-4"}}},{default:s(()=>[o(E,{rows:P.value},{"service-data":s(({row:t})=>[t.service?(g(),y("div",me,[n("span",de,l(t.service.name)+" Service ",1),o(f,{variant:"soft",color:"orange",class:"capitalize"},{default:s(()=>[ee(l(t.service.type),1)]),_:2},1024)])):(g(),y("span",pe," Kosong "))]),"price-data":s(({row:t})=>[n("span",_e,l(D(t.price)),1)]),"languages-data":s(({row:t})=>[n("span",ge,l(t.languages.language_source.name)+" -> "+l(t.languages.language_destination.name),1)]),"buyer-data":s(({row:t})=>[n("div",fe,[o(v,{src:t.buyer.photo,alt:t.buyer.fullname,size:"sm",variant:"rounded-full",imgClass:"object-cover"},null,8,["src","alt"]),n("div",ve,[n("span",he,l(t.buyer.fullname),1),n("span",ye,l(t.buyer.email),1)])])]),"facilitator-data":s(({row:t})=>[n("div",xe,[o(v,{src:t.facilitator.photo,alt:t.facilitator.fullname,size:"sm",variant:"rounded-full",imgClass:"object-cover"},null,8,["src","alt"]),n("div",be,[n("span",Pe,l(t.facilitator.fullname),1),n("span",ke,l(t.facilitator.email),1)])])]),"status-data":s(({row:t})=>[o(f,{size:"xs",label:U(t.status).text,color:U(t.status).color,variant:"subtle",class:"capitalize"},null,8,["label","color"])]),"actions-data":s(({row:t})=>[n("div",Ce,[t.actions.status==="pending"?(g(),A(z,{key:0,text:"Accept Order"},{default:s(()=>[o(O,{icon:"i-heroicons-check",size:"2xs",color:"green",variant:"outline",ui:{rounded:"rounded-full"},square:"",onClick:J=>S("Hang On","Are you sure you want to deactivate this facilitator?","Deactivate","Cancel",()=>{a.updateUserStatus(t.user.id,"inactive")})},null,8,["onClick"])]),_:2},1024)):I("",!0),t.actions.status==="waitingpaid"?(g(),A(z,{key:1,text:"Verify Payment"},{default:s(()=>[o(O,{icon:"i-heroicons-check",size:"2xs",color:"blue",variant:"outline",ui:{rounded:"rounded-full"},square:"",onClick:J=>S("Hang On","Are you sure you want to accept this payment?","Accept Payment","Cancel",()=>{F(t.actions.id)})},null,8,["onClick"])]),_:2},1024)):I("",!0)])]),_:1},8,["rows"]),o(j,{modelValue:u.value,"onUpdate:modelValue":e[3]||(e[3]=t=>u.value=t),max:5,"page-count":_.value.itemsPerPage,total:_.value.totalPage},null,8,["modelValue","page-count","total"])]),_:1})])]),_:1}),o(H,{isOpen:h.value,data:b.value},null,8,["isOpen","data"])])}}};export{Je as default};
