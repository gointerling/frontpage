import{_ as K}from"./CGyI2hQu.js";import{g as X,x as Y,L as Z,r as l,D as ee,h as V,i as te,B as y,c as u,l as b,b as s,a as e,F as M,m as D,k as ae,t as r,w as c,q as w,o as n,n as se,d as O,s as oe,a0 as le,v as ne}from"./BTSDszUJ.js";import{_ as re}from"./DvumrKrj.js";import{_ as ie}from"./DGrq4f1g.js";import{_ as ce}from"./CDkhUFr5.js";import{_ as ue}from"./G_bPuirm.js";import{_ as de}from"./B9XNv89N.js";import{P as _e}from"./BrzK7Ufc.js";import{_ as me}from"./B3n1l5Hg.js";import"./BnrmU16V.js";import{u as pe}from"./ONxWT7kH.js";import"./ZcxYWiyP.js";import"./QMTWwr3q.js";import"./BzSNmRo5.js";import"./P5m1VOJr.js";import"./7ZUwepPQ.js";import"./BYiaUImn.js";const fe={key:1,class:"w-100 flex flex-col items-center"},he={class:"flex justify-between items-stretch w-10/12 my-16 gap-16 px-8"},ge={class:"w-2/12"},xe=e("h6",{class:"font-semibold"},"Client Dashboard",-1),ve={class:"flex flex-col items-start mt-4"},ye={class:"text-md text-primary"},be={key:0,class:"w-10/12"},we={class:"font-semibold mb-3"},ke={class:"flex gap-2 mb-4 justify-between"},Ce={class:"flex flex-col gap-4"},Fe={class:"flex justify-between items-center"},Pe={class:"flex items-center gap-2 capitalize"},Ue={class:"font-semibold"},Ve={class:"flex justify-between items-center gap-2"},Me={class:"capitalize"},De={class:"flex gap-3 justify-between items-center"},Oe={class:"flex gap-3"},Te={class:""},je={class:"flex flex-col"},Ie={class:"font-semibold text-primary"},Le={class:"flex gap-2 text-xs text-gray-700"},Be=e("span",null,"x 1",-1),Ne={class:"font-semibold text-primary text-md"},Se={key:0,class:"flex flex-col"},$e={class:"flex flex-col items-center justify-center"},ze=e("span",{class:"text-gray-400"},"No orders found",-1),Ee={key:1,class:"flex flex-col"},nt={__name:"index",setup(Ae){X(),Y();const T=Z(),{getMyOrders:j}=pe();l(null);const I=[{key:"order-history",label:"Order History",icon:"user-circle",scope:"all"}],L=l({title:"",content:"",confirmText:"",cancelText:"",callback:null}),k=l(!0),B=l(!1),g=l("order-history"),d=l({fullname:"",photo:"",email:"",phone:"",address:"",role:"",personal_description:"",main_skills:[],additional_skills:[],is_admin:!1,is_facilitator:!1}),m=l([]),C=l(5),F=l(!1),p=l({label:"All",value:"",color:"gray"}),f=l(""),N=ee(()=>{if(!d.value)return[];const t=d.value.is_admin??!1,i=d.value.is_facilitator??!1;return I.filter(o=>o.scope==="all"||o.scope==="admin"&&t||o.scope==="merchant"&&i)}),P=t=>{switch(t){case"completed":return{color:"green",text:"Completed"};case"paid":return{color:"blue",text:"In Progress"};case"pending":return{color:"violet",text:"Pending"};case"waitingpaid":return{color:"orange",text:"Waiting Payment"};case"failed":return{color:"red",text:"Failed"};default:return{color:"gray",text:"Unknown"}}},S=t=>{T.push(t)},$=()=>{console.log("Logging out..."),y("token").value=null,d.value={fullname:"",photo:"",email:"",phone:"",address:"",role:"",personal_description:"",main_skills:[],additional_skills:[],is_admin:!1,is_facilitator:!1}},z=t=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(t),E=async()=>{C.value++,await h()},A=async()=>{try{d.value=y("token").value.user||null}catch(t){console.error("Fetching user failed:",t)}},h=async()=>{try{const{data:t}=await j({page:1,per_page:C.value,order_status:p.value.value,search:f.value});m.value=t.data.orders.data,F.value=t.data.orders.current_page===t.data.orders.last_page}catch(t){console.error("Fetching orders failed:",t)}},R=(t,i)=>{let o;return function(..._){const x=this;clearTimeout(o),o=setTimeout(()=>{o=null,t.apply(x,_)},i)}};return V(p,async t=>{await h()}),V(f,R(async()=>{await h()},500),{immediate:!0}),te(async()=>{y("token").value&&(await A(),await h()),k.value=!1,window.scrollTo({top:0,behavior:"smooth"})}),(t,i)=>{const o=K,_=oe,x=re,H=ie,W=le,q=ce,Q=ne,U=ue,G=de;return n(),u("div",null,[k.value?(n(),b(_e,{key:0})):(n(),u("div",fe,[s(me,{user:d.value,onLogout:$,class:"w-full"},null,8,["user"]),e("div",he,[e("div",ge,[xe,e("div",ve,[(n(!0),u(M,null,D(ae(N),(a,v)=>(n(),b(_,{key:v,block:"",class:se(["py-3 px-3.5 flex justify-start bg-white hover:bg-[#FDF1EE] shadow-none",g.value===a.key?"bg-[#FDF1EE]":"bg-white"]),onClick:J=>g.value=a.key},{default:c(()=>[s(o,{name:a.icon,class:"text-2xl text-primary"},null,8,["name"]),e("span",ye,r(a.label),1)]),_:2},1032,["class","onClick"]))),128))])]),g.value==="order-history"?(n(),u("div",be,[e("h6",we," My Order History ("+r(m.value.length??0)+") ",1),e("div",ke,[s(x,{options:[{label:"All",value:"",color:"gray"},{label:"Completed",value:"completed",color:"blue"},{label:"In Progress",value:"paid",color:"green"},{label:"Waiting Payment",value:"waitingpaid",color:"orange"},{label:"Pending",value:"pending",color:"violet"},{label:"Failed",value:"failed",color:"red"}],modelValue:p.value,"onUpdate:modelValue":i[0]||(i[0]=a=>p.value=a),placeholder:"Status",by:"value","option-attribute":"label","search-attributes":["label"],onChange:t.filterFacilitators,class:"max-w-[180px]"},null,8,["modelValue","onChange"]),s(H,{icon:"i-heroicons-magnifying-glass-20-solid",size:"sm",color:"white",trailing:!1,placeholder:"Search Facilitator",modelValue:f.value,"onUpdate:modelValue":i[1]||(i[1]=a=>f.value=a)},null,8,["modelValue"])]),s(U,null,{default:c(()=>[e("div",Ce,[(n(!0),u(M,null,D(m.value,(a,v)=>(n(),b(U,{key:v,ui:{header:{padding:"px-4 py-2 sm:px-3"},body:{padding:"px-4 py-0  sm:p-3"}}},{header:c(()=>[e("div",Fe,[e("div",Pe,[s(W,{name:"i-heroicons-language"}),e("span",Ue,r(a.merchant.type),1)]),e("div",Ve,[s(q,{variant:"soft",color:P(a.order_status).color},{default:c(()=>[e("span",Me,r(P(a.order_status).text),1)]),_:2},1032,["color"]),s(_,{variant:"link"},{default:c(()=>[s(o,{name:"dots",class:"text-md text-primary"})]),_:1})])])]),default:c(()=>[e("div",De,[e("div",Oe,[e("div",Te,[s(Q,{alt:a.merchant_user.fullname,src:a.merchant_user.photo,size:"lg",imgClass:"object-cover"},null,8,["alt","src"])]),e("div",je,[e("span",Ie,r(a.merchant_user.fullname),1),e("div",Le,[e("span",null,r(a.service.name),1),e("span",null,"("+r(a.language_source.name)+" - "+r(a.language_destination.name)+")",1),Be]),e("span",Ne,r(z(a.price)),1)])]),s(_,{color:"primary",class:"text-white mr-4",onClick:J=>S({name:"my-client-orders-id",params:{id:a.id}})},{default:c(()=>[O(" Show Detail ")]),_:2},1032,["onClick"])])]),_:2},1024))),128)),m.value.length===0?(n(),u("div",Se,[e("div",$e,[s(o,{name:"search",class:"text-4xl text-gray-400"}),ze])])):w("",!0),F.value?w("",!0):(n(),u("div",Ee,[s(_,{block:"",onClick:E,class:"mt-4 bg-accent"},{default:c(()=>[O(" Load More ")]),_:1})]))])]),_:1})])):w("",!0)])])),s(G,{isOpen:B.value,data:L.value},null,8,["isOpen","data"])])}}};export{nt as default};
