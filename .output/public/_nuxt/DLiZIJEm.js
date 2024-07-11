import{_ as W}from"./DCBHic0n.js";import{_ as K}from"./CqZ_JdIK.js";import{_ as Q}from"./B39ZclTV.js";import{_ as R}from"./C_5G3v2K.js";import{g as G,r as i,h as x,i as J,c as f,b as o,w as n,k as X,o as c,a as s,t as l,d as T,m as b,n as $,q as Y,y as Z,s as ee}from"./Csvhc2Mt.js";import{_ as ae}from"./4QMAxoic.js";import{_ as te,a as oe}from"./D7xW5OxI.js";import{_ as ne}from"./vY42ZLtw.js";import{_ as se}from"./COT7bSr_.js";import{u as le}from"./BszPQP2Y.js";import"./-TVL0Fdd.js";import"./DT8P4fqL.js";import"./Bfvy6ACv.js";import"./2Bn5WqkC.js";import"./Hs4Jj2D-.js";const ie={class:"w-full pt-0 p-6 flex flex-col gap-2"},ce={class:"flex gap-2"},re={key:0,class:"flex flex-col gap-1 items-start capitalize"},ue={class:"text-primary"},de={key:1,class:"text-gray-300"},me={class:"text-primary"},pe={class:"text-primary"},_e={class:"flex gap-3 items-center"},ge={class:"flex flex-col"},fe={class:"font-semibold text-primary"},ve={class:"text-sm text-gray-600"},ye={class:"flex gap-3 items-center"},he={class:"flex flex-col"},xe={class:"font-semibold text-primary"},be={class:"text-sm text-gray-600"},ke={key:1,class:"text-gray-300"},Pe={class:"flex gap-1"},Ce="Transactions List",Fe={__name:"transactions",setup(Ue){const{getAllOrders:D,updateClientOrderStatus:I}=le(),k=G(),P=i(!0),v=i(!1),C=i({title:"",message:"",callback:null});i([]);const U=i([]),r=i({label:"All",value:"all"}),m=i(""),p=i(1),_=i({page:1,totalPage:1,totalItems:0,itemsPerPage:10}),N=[{label:"All",value:"all",color:"gray"},{label:"Completed",value:"completed",color:"orange"},{label:"Paid",value:"paid",color:"blue"},{label:"Pending",value:"pending",color:"orange"},{label:"Waiting Payment",value:"waitingpaid",color:"orange"},{label:"Failed",value:"failed",color:"orange"}],u=async()=>{try{await D({page:p.value,per_page:_.value.itemsPerPage,order_status:r.value.value==="all"?"":r.value.value,search:m.value}).then(t=>{U.value=t.data.data.orders.data.map((a,d)=>({no:d+1,service:{id:a.service.id,name:a.merchant.type,type:a.service.type},buyer:{id:a.user.id,fullname:a.user.fullname,email:a.user.email,photo:a.user.photo},facilitator:{id:a.merchant_user.id,fullname:a.merchant_user.fullname,email:a.merchant_user.email,photo:a.merchant_user.photo},languages:{language_source:a.language_source,language_destination:a.language_destination},price:a.price,payment:a.payment_file_url,status:a.order_status,actions:{id:a.id,status:a.order_status}})),_.value.totalPage=t.data.data.orders.last_page,_.value.totalItems=t.data.data.orders.total})}catch(t){console.error("Error fetching merchant orders:",t)}finally{P.value=!1}};x(p,u),x(r,()=>{u()},{deep:!0}),x(m,Y(()=>{u()},300),{deep:!0});const B=t=>{window.open(t,"_blank")},L=t=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t),V=(t,a,d,y,g)=>{C.value={title:t,content:a,confirmText:d,cancelText:y,callback:g},v.value=!0},M=async t=>{await I(t,"paid").then(()=>{v.value=!1,k.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"Payment status updated!"}),u()}).catch(a=>{console.error("Error updating payment status:",a),k.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-x-circle",description:"Error updating payment status!"})})},O=t=>{switch(t){case"completed":return{color:"green",text:"Completed"};case"paid":return{color:"blue",text:"Paid"};case"pending":return{color:"violet",text:"Pending"};case"waitingpaid":return{color:"orange",text:"Waiting Payment"};case"failed":return{color:"red",text:"Failed"};default:return{color:"gray",text:"Unknown"}}};return J(()=>{u()}),(t,a)=>{const d=W,y=K,g=Q,z=R,S=Z,E=ae,h=ee,w=te,F=ne,j=oe,q=X,H=se;return c(),f("div",null,[o(q,{name:"admin"},{default:n(()=>[s("div",ie,[o(g,{ui:{body:{base:"flex justify-between items-center",background:"",padding:"p-2 sm:p-4"}}},{default:n(()=>[s("h6",{class:"font-semibold"},l(Ce)),s("div",ce,[o(d,{options:N,modelValue:r.value,"onUpdate:modelValue":a[0]||(a[0]=e=>r.value=e),placeholder:"Pilih Status",by:"value","option-attribute":"label","search-attributes":["label"],class:"max-w-[180px]"},null,8,["modelValue"]),o(y,{icon:"i-heroicons-magnifying-glass-20-solid",size:"sm",color:"white",trailing:!1,placeholder:"Search Transactions",modelValue:m.value,"onUpdate:modelValue":a[1]||(a[1]=e=>m.value=e)},null,8,["modelValue"])])]),_:1}),o(g,{ui:{body:{base:"flex flex-col gap-4"}}},{default:n(()=>[o(F,{rows:U.value,loading:P.value,"loading-state":{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."}},{"service-data":n(({row:e})=>[e.service?(c(),f("div",re,[s("span",ue,l(e.service.name)+" Service ",1),o(z,{variant:"soft",color:"orange",class:"capitalize"},{default:n(()=>[T(l(e.service.type),1)]),_:2},1024)])):(c(),f("span",de," Kosong "))]),"price-data":n(({row:e})=>[s("span",me,l(L(e.price)),1)]),"languages-data":n(({row:e})=>[s("span",pe,l(e.languages.language_source.name)+" -> "+l(e.languages.language_destination.name),1)]),"buyer-data":n(({row:e})=>[s("div",_e,[o(S,{src:e.buyer.photo,alt:e.buyer.fullname,size:"sm",variant:"rounded-full",imgClass:"object-cover"},null,8,["src","alt"]),s("div",ge,[s("span",fe,l(e.buyer.fullname),1),s("span",ve,l(e.buyer.email),1)])])]),"facilitator-data":n(({row:e})=>[s("div",ye,[o(S,{src:e.facilitator.photo,alt:e.facilitator.fullname,size:"sm",variant:"rounded-full",imgClass:"object-cover"},null,8,["src","alt"]),s("div",he,[s("span",xe,l(e.facilitator.fullname),1),s("span",be,l(e.facilitator.email),1)])])]),"payment-data":n(({row:e})=>[e.payment?(c(),b(h,{key:0,size:"sm",color:"primary",trailing:!1,onClick:A=>B(e.payment)},{default:n(()=>[o(E,{name:"file",class:"text-white"}),T(" Proof of Payment ")]),_:2},1032,["onClick"])):(c(),f("span",ke," No Payment Uploaded "))]),"status-data":n(({row:e})=>[o(z,{size:"xs",label:O(e.status).text,color:O(e.status).color,variant:"subtle",class:"capitalize"},null,8,["label","color"])]),"actions-data":n(({row:e})=>[s("div",Pe,[e.actions.status==="pending"?(c(),b(w,{key:0,text:"Accept Order"},{default:n(()=>[o(h,{icon:"i-heroicons-check",size:"2xs",color:"green",variant:"outline",ui:{rounded:"rounded-full"},square:"",onClick:A=>V("Hang On","Are you sure you want to deactivate this facilitator?","Deactivate","Cancel",()=>{t.updateUserStatus(e.user.id,"inactive")})},null,8,["onClick"])]),_:2},1024)):$("",!0),e.actions.status==="waitingpaid"?(c(),b(w,{key:1,text:"Verify Payment"},{default:n(()=>[o(h,{icon:"i-heroicons-check",size:"2xs",color:"blue",variant:"outline",ui:{rounded:"rounded-full"},square:"",onClick:A=>V("Hang On","Are you sure you want to accept this payment?","Accept Payment","Cancel",()=>{M(e.actions.id)})},null,8,["onClick"])]),_:2},1024)):$("",!0)])]),_:1},8,["rows","loading"]),o(j,{modelValue:p.value,"onUpdate:modelValue":a[2]||(a[2]=e=>p.value=e),"page-count":1,total:_.value.totalPage},null,8,["modelValue","total"])]),_:1})])]),_:1}),o(H,{isOpen:v.value,data:C.value},null,8,["isOpen","data"])])}}};export{Fe as default};
