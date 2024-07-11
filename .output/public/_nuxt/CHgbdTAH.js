import{_ as ae}from"./4QMAxoic.js";import{g as se,H as le,G as oe,r as n,O as ne,h as W,i as ie,I as P,c as i,m as A,b as s,a as e,F as S,x as U,j as ce,t as o,d as v,w as c,n as h,o as l,v as re,q as de,s as ue,E as _e,y as me}from"./Csvhc2Mt.js";import{_ as pe}from"./DCBHic0n.js";import{_ as fe}from"./CqZ_JdIK.js";import{_ as ve}from"./C_5G3v2K.js";import{_ as he}from"./B39ZclTV.js";import{P as ge}from"./kDG0i-hN.js";import{_ as xe}from"./DWfowwCF.js";import"./CC_f2ncF.js";import{u as ye}from"./BszPQP2Y.js";import{u as be}from"./Bb6D4igt.js";import"./-TVL0Fdd.js";import"./DT8P4fqL.js";import"./Bfvy6ACv.js";import"./2Bn5WqkC.js";const we={key:1,class:"w-full flex flex-col items-center"},ke={class:"flex flex-col md:flex-row justify-between items-stretch w-11/12 my-16 gap-8 px-4 md:px-8 pt-16"},Ce={class:"w-full md:w-3/12"},Ve=e("h6",{class:"font-semibold"},"Client Dashboard",-1),je={class:"flex flex-col items-start mt-4"},Ae={class:"text-md text-primary"},Fe={class:"w-full md:w-9/12"},De={key:0,class:"w-full"},Pe={class:"font-semibold mb-3"},Se={class:"flex flex-col md:flex-row gap-2 mb-4 justify-between"},Ue={key:0,class:"flex w-full justify-center items-center py-4"},Le={key:1},Me={class:"flex flex-col gap-4"},Ie={class:"flex justify-between items-center"},ze={class:"flex items-center gap-2 capitalize"},Ne={class:"font-semibold"},Be={class:"flex justify-between items-center gap-2"},Oe={class:"capitalize"},Te={class:"flex flex-col md:flex-row gap-3 justify-between items-center"},$e={class:"flex gap-3"},Ee={class:""},He={class:"flex flex-col"},qe={class:"font-semibold text-primary"},Re={class:"flex flex-wrap gap-2 text-xs text-gray-700"},We=e("span",null,"x 1",-1),Ge={class:"font-semibold text-primary text-md"},Qe={key:0,class:"flex flex-col"},Je=e("div",{class:"flex flex-col items-center justify-center"},[e("span",{class:"text-gray-400"},"No orders found")],-1),Ke=[Je],Xe={key:1,class:"flex flex-col"},Ye={key:1,class:"w-full"},Ze={class:"font-semibold mb-3"},et={class:"flex flex-col md:flex-row gap-2 mb-4 justify-between"},tt={key:0,class:"flex w-full justify-center items-center py-4"},at={key:1},st={class:"flex flex-col gap-4"},lt={class:"flex justify-between items-center"},ot={class:"flex items-center gap-2 capitalize"},nt={class:"font-semibold"},it={class:"flex justify-between items-center gap-2"},ct={class:"capitalize"},rt={class:"flex flex-col md:flex-row gap-3 justify-between items-center"},dt={class:"flex gap-3"},ut={class:""},_t={class:"flex flex-col"},mt={class:"font-semibold text-primary"},pt={class:"flex flex-wrap gap-2 text-xs text-gray-700"},ft=e("span",null,"x 1",-1),vt={class:"font-semibold text-primary text-md"},ht={key:0,class:"flex flex-col"},gt=e("div",{class:"flex flex-col items-center justify-center"},[e("span",{class:"text-gray-400"},"No advertisements found")],-1),xt=[gt],yt={key:1,class:"flex flex-col"},Nt={__name:"index",setup(bt){se();const G=le(),L=oe(),{getMyOrders:Q}=ye(),{getMyAds:J}=be();n(null);const K=[{key:"order-history",label:"Order History",icon:"user-circle",scope:"all"},{key:"ads-history",label:"Ads History",icon:"ads-report",scope:"all"}];n({title:"",content:"",confirmText:"",cancelText:"",callback:null});const M=n(!0);n(!1);const g=n(!1),x=n(!1),d=n("order-history"),f=n({fullname:"",photo:"",email:"",phone:"",address:"",role:"",personal_description:"",main_skills:[],additional_skills:[],is_admin:!1,is_facilitator:!1}),F=n([]),D=n([]),y=n(5),b=n(!1),k=n(0),u=n({label:"All",value:"",color:"gray"}),_=n(""),X=ne(()=>{if(!f.value)return[];const a=f.value.is_admin??!1,r=f.value.is_facilitator??!1;return K.filter(m=>m.scope==="all"||m.scope==="admin"&&a||m.scope==="merchant"&&r)}),I=a=>{switch(a){case"completed":return{color:"green",text:"Completed"};case"active":return{color:"blue",text:"Active"};case"paid":return{color:"blue",text:"In Progress"};case"pending":return{color:"orange",text:"Pending"};case"waitingpaid":return{color:"orange",text:"Waiting Payment & Verication"};case"failed":return{color:"red",text:"Failed"};default:return{color:"gray",text:"Unknown"}}},z=a=>{L.push(a)},Y=()=>{console.log("Logging out..."),P("token").value=null,f.value={fullname:"",photo:"",email:"",phone:"",address:"",role:"",personal_description:"",main_skills:[],additional_skills:[],is_admin:!1,is_facilitator:!1}},N=a=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(a),B=async()=>{g.value=!0,y.value=y.value+5,C()},C=async()=>{d.value==="order-history"&&await O(),d.value==="ads-history"&&await T()},Z=()=>{_.value="",y.value=5,b.value=!1,u.value={label:"All",value:"",color:"gray"}},ee=async a=>{d.value=a,L.push({query:{section:a}}),x.value=!0,Z(),C()},te=async()=>{try{f.value=P("token").value.user||null}catch(a){console.error("Fetching user failed:",a)}},O=async()=>{try{const{data:a}=await Q({page:1,per_page:y.value,order_status:u.value.value,search:_.value});F.value=a.data.orders.data,b.value=a.data.orders.current_page===a.data.orders.last_page,k.value=a.data.orders.total}catch(a){console.error("Fetching orders failed:",a)}finally{g.value=!1,x.value=!1}},T=async()=>{try{const{data:a}=await J({page:1,per_page:y.value,search:_.value,status:u.value.value});D.value=a.data.advertisements.data,b.value=a.data.advertisements.current_page===a.data.advertisements.last_page,k.value=a.data.advertisements.total}catch(a){console.error("Fetching orders failed:",a)}finally{g.value=!1,x.value=!1}};return W(u,async a=>{C()}),W(_,de(async()=>{C()},300),{immediate:!0}),ie(async()=>{d.value=G.query.section??"order-history",P("token").value&&(await te(),d.value==="order-history"&&await O(),d.value==="ads-history"&&await T()),M.value=!1,window.scrollTo({top:0,behavior:"smooth"})}),(a,r)=>{const m=ae,p=ue,$=pe,E=fe,V=_e,H=ve,q=me,j=he;return l(),i("div",null,[M.value?(l(),A(ge,{key:0})):(l(),i("div",we,[s(xe,{user:f.value,onLogout:Y,class:"w-full"},null,8,["user"]),e("div",ke,[e("div",Ce,[Ve,e("div",je,[(l(!0),i(S,null,U(ce(X),(t,w)=>(l(),A(p,{key:w,block:"",class:re(["py-3 px-3.5 flex justify-start bg-white hover:bg-[#FDF1EE] shadow-none",d.value===t.key?"bg-[#FDF1EE]":"bg-white"]),onClick:R=>ee(t.key)},{default:c(()=>[s(m,{name:t.icon,class:"text-2xl text-primary"},null,8,["name"]),e("span",Ae,o(t.label),1)]),_:2},1032,["class","onClick"]))),128))])]),e("div",Fe,[d.value==="order-history"?(l(),i("div",De,[e("h6",Pe," My Order History ("+o(k.value??0)+") ",1),e("div",Se,[s($,{options:[{label:"All",value:"",color:"gray"},{label:"Completed",value:"completed",color:"blue"},{label:"In Progress",value:"paid",color:"green"},{label:"Waiting Payment & Verication",value:"waitingpaid",color:"orange"},{label:"Pending",value:"pending",color:"violet"},{label:"Failed",value:"failed",color:"red"}],modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=t=>u.value=t),placeholder:"Status",by:"value","option-attribute":"label","search-attributes":["label"],onChange:a.filterFacilitators,class:"max-w-[180px]"},null,8,["modelValue","onChange"]),s(E,{icon:"i-heroicons-magnifying-glass-20-solid",size:"sm",color:"white",trailing:!1,placeholder:"Search Facilitator",modelValue:_.value,"onUpdate:modelValue":r[1]||(r[1]=t=>_.value=t)},null,8,["modelValue"])]),x.value?(l(),i("div",Ue,[s(V,{name:"i-ph-rocket-launch",dynamic:"",class:"text-xl text-gray-600"}),v(" Loading Data... ")])):(l(),i("div",Le,[s(j,null,{default:c(()=>[e("div",Me,[(l(!0),i(S,null,U(F.value,(t,w)=>(l(),A(j,{key:w,ui:{header:{padding:"px-4 py-2 sm:px-3"},body:{padding:"px-4 py-0  sm:p-3"}}},{header:c(()=>[e("div",Ie,[e("div",ze,[s(V,{name:"i-heroicons-language"}),e("span",Ne,o(t.merchant.type),1)]),e("div",Be,[s(H,{variant:"soft",color:I(t.order_status).color},{default:c(()=>[e("span",Oe,o(I(t.order_status).text),1)]),_:2},1032,["color"]),s(p,{variant:"link"},{default:c(()=>[s(m,{name:"dots",class:"text-md text-primary"})]),_:1})])])]),default:c(()=>[e("div",Te,[e("div",$e,[e("div",Ee,[s(q,{alt:t.merchant_user.fullname,src:t.merchant_user.photo,size:"lg",imgClass:"object-cover"},null,8,["alt","src"])]),e("div",He,[e("span",qe,o(t.merchant_user.fullname),1),e("div",Re,[e("span",null,o(t.service.name),1),e("span",null,"("+o(t.language_source.name)+" - "+o(t.language_destination.name)+")",1),We]),e("span",Ge,o(N(t.price)),1)])]),s(p,{color:"primary",class:"text-white mr-4",onClick:R=>z({name:"my-client-orders-id",params:{id:t.id}})},{default:c(()=>[v(" Show Detail ")]),_:2},1032,["onClick"])])]),_:2},1024))),128)),F.value.length===0?(l(),i("div",Qe,Ke)):h("",!0),b.value?h("",!0):(l(),i("div",Xe,[s(p,{block:"",onClick:B,class:"mt-4 bg-accent",loading:g.value},{default:c(()=>[v(" Load More ")]),_:1},8,["loading"])]))])]),_:1})]))])):h("",!0),d.value==="ads-history"?(l(),i("div",Ye,[e("h6",Ze," My Ads History ("+o(k.value??0)+") ",1),e("div",et,[s($,{options:[{label:"All",value:"",color:"gray"},{label:"Active",value:"active",color:"blue"},{label:"Pending",value:"pending",color:"orange"},{label:"Inactive",value:"inactive",color:"red"}],modelValue:u.value,"onUpdate:modelValue":r[2]||(r[2]=t=>u.value=t),placeholder:"Status",by:"value","option-attribute":"label","search-attributes":["label"],onChange:a.filterFacilitators,class:"max-w-[180px]"},null,8,["modelValue","onChange"]),s(E,{icon:"i-heroicons-magnifying-glass-20-solid",size:"sm",color:"white",trailing:!1,placeholder:"Search Ads",modelValue:_.value,"onUpdate:modelValue":r[3]||(r[3]=t=>_.value=t)},null,8,["modelValue"])]),x.value?(l(),i("div",tt,[s(V,{name:"i-ph-rocket-launch",dynamic:"",class:"text-xl text-gray-600"}),v(" Loading Data... ")])):(l(),i("div",at,[s(j,null,{default:c(()=>[e("div",st,[(l(!0),i(S,null,U(D.value,(t,w)=>(l(),A(j,{key:w,ui:{header:{padding:"px-4 py-2 sm:px-3"},body:{padding:"px-4 py-0  sm:p-3"}}},{header:c(()=>[e("div",lt,[e("div",ot,[s(V,{name:"i-heroicons-language"}),e("span",nt,o(t.type),1)]),e("div",it,[s(H,{variant:"soft",color:a.resolveAdvertisementStatus(t.ad_status).color},{default:c(()=>[e("span",ct,o(a.resolveAdvertisementStatus(t.ad_status).text),1)]),_:2},1032,["color"]),s(p,{variant:"link"},{default:c(()=>[s(m,{name:"dots",searchclass:"text-md text-primary"})]),_:1})])])]),default:c(()=>[e("div",rt,[e("div",dt,[e("div",ut,[s(q,{alt:t.merchant_user.fullname,src:t.merchant_user.photo,size:"lg",imgClass:"object-cover"},null,8,["alt","src"])]),e("div",_t,[e("span",mt,o(t.merchant_user.fullname),1),e("div",pt,[e("span",null,o(t.service.name),1),e("span",null,"("+o(t.language_source.name)+" - "+o(t.language_destination.name)+")",1),ft]),e("span",vt,o(N(t.price)),1)])]),s(p,{color:"primary",class:"text-white mr-4",onClick:R=>z({name:"my-client-ads-id",params:{id:t.id}})},{default:c(()=>[v(" Show Detail ")]),_:2},1032,["onClick"])])]),_:2},1024))),128)),D.value.length===0?(l(),i("div",ht,xt)):h("",!0),b.value?h("",!0):(l(),i("div",yt,[s(p,{block:"",onClick:B,class:"mt-4 bg-accent",loading:g.value},{default:c(()=>[v(" Load More ")]),_:1},8,["loading"])]))])]),_:1})]))])):h("",!0)])])]))])}}};export{Nt as default};
