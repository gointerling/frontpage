import{_ as ae}from"./DTEu5KMv.js";import{g as le,H as oe,G as ne,r as o,P as ie,h as G,i as ce,I as U,c as n,m as A,b as a,a as e,F as L,x as M,j as re,t as i,d as v,w as c,n as h,o as l,v as de,q as ue,s as _e,E as me,y as pe}from"./CTp9NOr1.js";import{_ as fe}from"./CQCnuzJg.js";import{_ as ve}from"./DPrGr4PQ.js";import{_ as he}from"./D8RMtJiE.js";import{_ as ge}from"./B6HtL2if.js";import{P as xe}from"./Dp8eTrYD.js";import{_ as ye}from"./CF1Q1FUs.js";import"./Bc-OQLbW.js";import{u as be}from"./Dv-Xg3xh.js";import{u as we}from"./uwaV5RB_.js";import"./dOnAVzHB.js";import"./DxDM_Ypi.js";import"./lHgXMHFR.js";import"./CmoM7MgI.js";const ke={key:1,class:"w-full flex flex-col items-center"},Ce={class:"flex flex-col md:flex-row justify-between items-stretch w-11/12 my-16 gap-8 px-4 md:px-8 pt-16"},Ve={class:"w-full md:w-3/12"},je=e("h6",{class:"font-semibold"},"Client Dashboard",-1),Fe={class:"flex flex-col items-start mt-4"},Ae={class:"text-md text-primary"},Pe={class:"w-full md:w-9/12"},De={key:0,class:"w-full"},Ue={class:"font-semibold mb-3"},Le={class:"flex flex-col md:flex-row gap-2 mb-4 justify-between"},Me={key:0,class:"flex w-full justify-center items-center py-4"},Ie={key:1},ze={class:"flex flex-col gap-4"},Se={class:"flex justify-between items-center"},Ne={class:"flex items-center gap-2 capitalize"},Be={class:"font-semibold"},Te={class:"flex justify-between items-center gap-2"},$e={class:"capitalize"},Ee={class:"flex flex-row gap-3 justify-between items-center py-2"},Oe={class:"flex gap-3"},He={class:""},qe={class:"flex flex-col"},Re={class:"font-semibold text-primary"},We={class:"flex flex-wrap gap-2 text-xs text-gray-700"},Ge={class:"hidden md:block"},Qe=e("span",{class:"hidden md:block"},"x 1",-1),Je={class:"font-semibold text-primary text-md"},Ke={key:0,class:"flex flex-col"},Xe=e("div",{class:"flex flex-col items-center justify-center"},[e("span",{class:"text-gray-400"},"No orders found")],-1),Ye=[Xe],Ze={key:1,class:"flex flex-col"},et={key:1,class:"w-full"},tt={class:"font-semibold mb-3"},st={class:"flex flex-col md:flex-row gap-2 mb-4 justify-between"},at={key:0,class:"flex w-full justify-center items-center py-4"},lt={key:1},ot={class:"flex flex-col gap-4"},nt={class:"flex justify-between items-center"},it={class:"flex items-center gap-2 capitalize"},ct={class:"font-semibold"},rt={class:"flex justify-between items-center gap-2"},dt={class:"capitalize"},ut={class:"flex flex-row gap-3 justify-between items-center py-2"},_t={class:"flex gap-3"},mt={class:""},pt={class:"flex flex-col"},ft={class:"font-semibold text-primary"},vt={class:"flex flex-wrap gap-2 text-xs text-gray-700"},ht=e("span",null,"x 1",-1),gt={class:"font-semibold text-primary text-md"},xt={key:0,class:"flex flex-col"},yt=e("div",{class:"flex flex-col items-center justify-center"},[e("span",{class:"text-gray-400"},"No advertisements found")],-1),bt=[yt],wt={key:1,class:"flex flex-col"},Tt={__name:"index",setup(kt){le();const Q=oe(),I=ne(),{getMyOrders:J}=be(),{getMyAds:K}=we();o(null);const X=[{key:"order-history",label:"Order History",icon:"user-circle",scope:"all"},{key:"ads-history",label:"Ads History",icon:"ads-report",scope:"all"}];o({title:"",content:"",confirmText:"",cancelText:"",callback:null});const z=o(!0);o(!1);const g=o(!1),m=o(!1),d=o("order-history"),p=o({fullname:"",photo:"",email:"",phone:"",address:"",role:"",personal_description:"",main_skills:[],additional_skills:[],is_admin:!1,is_facilitator:!1}),P=o([]),D=o([]),f=o(5),x=o(!1),C=o(0),u=o({label:"All",value:"",color:"gray"}),_=o(""),Y=ie(()=>{if(!p.value)return[];const s=p.value.is_admin??!1,r=p.value.is_facilitator??!1;return X.filter(b=>b.scope==="all"||b.scope==="admin"&&s||b.scope==="merchant"&&r)}),V=s=>{switch(s){case"completed":return{color:"green",text:"Completed"};case"active":return{color:"blue",text:"Active"};case"paid":return{color:"blue",text:"In Progress"};case"pending":return{color:"orange",text:"Pending"};case"waitingpaid":return{color:"orange",text:"Waiting Payment & Verication"};case"failed":return{color:"red",text:"Failed"};default:return{color:"gray",text:"Unknown"}}},S=s=>{I.push(s)},Z=()=>{console.log("Logging out..."),U("token").value=null,p.value={fullname:"",photo:"",email:"",phone:"",address:"",role:"",personal_description:"",main_skills:[],additional_skills:[],is_admin:!1,is_facilitator:!1}},N=s=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(s),B=async()=>{g.value=!0,f.value=f.value+5,y()},y=async()=>{d.value==="order-history"&&await $(),d.value==="ads-history"&&await E()},T=async()=>{m.value=!0,f.value=5,y()},ee=()=>{_.value="",f.value=5,x.value=!1,u.value={label:"All",value:"",color:"gray"}},te=async s=>{d.value=s,I.push({query:{section:s}}),m.value=!0,ee(),y()},se=async()=>{try{p.value=U("token").value.user||null}catch(s){console.error("Fetching user failed:",s)}},$=async()=>{try{const{data:s}=await J({page:1,per_page:f.value,order_status:u.value.value,search:_.value});P.value=s.data.orders.data,x.value=s.data.orders.current_page===s.data.orders.last_page,C.value=s.data.orders.total}catch(s){console.error("Fetching orders failed:",s)}finally{g.value=!1,m.value=!1}},E=async()=>{try{const{data:s}=await K({page:1,per_page:f.value,search:_.value,status:u.value.value});D.value=s.data.advertisements.data,x.value=s.data.advertisements.current_page===s.data.advertisements.last_page,C.value=s.data.advertisements.total}catch(s){console.error("Fetching orders failed:",s)}finally{g.value=!1,m.value=!1}};return G(u,async s=>{y()}),G(_,ue(async()=>{y()},300),{immediate:!0}),ce(async()=>{d.value=Q.query.section??"order-history",U("token").value&&(await se(),d.value==="order-history"&&await $(),d.value==="ads-history"&&await E()),z.value=!1,window.scrollTo({top:0,behavior:"smooth"})}),(s,r)=>{const b=ae,w=_e,O=fe,H=ve,j=me,q=he,R=pe,F=ge;return l(),n("div",null,[z.value?(l(),A(xe,{key:0})):(l(),n("div",ke,[a(ye,{user:p.value,onLogout:Z,class:"w-full"},null,8,["user"]),e("div",Ce,[e("div",Ve,[je,e("div",Fe,[(l(!0),n(L,null,M(re(Y),(t,k)=>(l(),A(w,{key:k,block:"",class:de(["py-3 px-3.5 flex justify-start bg-white hover:bg-[#FDF1EE] shadow-none",d.value===t.key?"bg-[#FDF1EE]":"bg-white"]),onClick:W=>te(t.key)},{default:c(()=>[a(b,{name:t.icon,class:"text-2xl text-primary"},null,8,["name"]),e("span",Ae,i(t.label),1)]),_:2},1032,["class","onClick"]))),128))])]),e("div",Pe,[d.value==="order-history"?(l(),n("div",De,[e("h6",Ue," My Order History ("+i(C.value??0)+") ",1),e("div",Le,[a(O,{options:[{label:"All",value:"",color:"gray"},{label:"Completed",value:"completed",color:"blue"},{label:"In Progress",value:"paid",color:"green"},{label:"Waiting Payment & Verication",value:"waitingpaid",color:"orange"},{label:"Pending",value:"pending",color:"violet"},{label:"Failed",value:"failed",color:"red"}],modelValue:u.value,"onUpdate:modelValue":r[0]||(r[0]=t=>u.value=t),placeholder:"Status",by:"value","option-attribute":"label","search-attributes":["label"],onChange:T,class:"max-w-[180px]"},null,8,["modelValue"]),a(H,{icon:"i-heroicons-magnifying-glass-20-solid",size:"sm",color:"white",trailing:!1,placeholder:"Search Facilitator",modelValue:_.value,"onUpdate:modelValue":r[1]||(r[1]=t=>_.value=t)},null,8,["modelValue"])]),m.value?(l(),n("div",Me,[a(j,{name:"i-ph-rocket-launch",dynamic:"",class:"text-xl text-gray-600"}),v(" Loading Data... ")])):(l(),n("div",Ie,[a(F,null,{default:c(()=>[e("div",ze,[(l(!0),n(L,null,M(P.value,(t,k)=>(l(),A(F,{key:k,ui:{header:{padding:"px-4 py-2 sm:px-3"},body:{padding:"px-4 py-0  sm:p-3"}}},{header:c(()=>[e("div",Se,[e("div",Ne,[a(j,{name:"i-heroicons-language"}),e("span",Be,i(t.merchant.type),1)]),e("div",Te,[a(q,{variant:"soft",color:V(t.order_status).color},{default:c(()=>[e("span",$e,i(V(t.order_status).text),1)]),_:2},1032,["color"])])])]),default:c(()=>[e("div",Ee,[e("div",Oe,[e("div",He,[a(R,{alt:t.merchant_user.fullname,src:t.merchant_user.photo,size:"lg",imgClass:"object-cover"},null,8,["alt","src"])]),e("div",qe,[e("span",Re,i(t.merchant_user.fullname),1),e("div",We,[e("span",Ge,i(t.service.name),1),e("span",null," ("+i(t.language_source.name)+" - "+i(t.language_destination.name)+") ",1),Qe]),e("span",Je,i(N(t.price)),1)])]),a(w,{color:"primary",class:"text-white mr-4",onClick:W=>S({name:"my-client-orders-id",params:{id:t.id}})},{default:c(()=>[v(" Detail ")]),_:2},1032,["onClick"])])]),_:2},1024))),128)),P.value.length===0?(l(),n("div",Ke,Ye)):h("",!0),x.value?h("",!0):(l(),n("div",Ze,[a(w,{block:"",onClick:B,class:"mt-4 bg-accent",loading:g.value},{default:c(()=>[v(" Load More ")]),_:1},8,["loading"])]))])]),_:1})]))])):h("",!0),d.value==="ads-history"?(l(),n("div",et,[e("h6",tt," My Ads History ("+i(C.value??0)+") ",1),e("div",st,[a(O,{options:[{label:"All",value:"",color:"gray"},{label:"Active",value:"active",color:"blue"},{label:"Pending",value:"pending",color:"orange"},{label:"Inactive",value:"inactive",color:"red"}],modelValue:u.value,"onUpdate:modelValue":r[2]||(r[2]=t=>u.value=t),placeholder:"Status",by:"value","option-attribute":"label","search-attributes":["label"],onChange:T,class:"max-w-[180px]"},null,8,["modelValue"]),a(H,{icon:"i-heroicons-magnifying-glass-20-solid",size:"sm",color:"white",trailing:!1,placeholder:"Search Ads",modelValue:_.value,"onUpdate:modelValue":r[3]||(r[3]=t=>_.value=t)},null,8,["modelValue"])]),m.value?(l(),n("div",at,[a(j,{name:"i-ph-rocket-launch",dynamic:"",class:"text-xl text-gray-600"}),v(" Loading Data... ")])):(l(),n("div",lt,[a(F,null,{default:c(()=>[e("div",ot,[(l(!0),n(L,null,M(D.value,(t,k)=>(l(),A(F,{key:k,ui:{header:{padding:"px-4 py-2 sm:px-3"},body:{padding:"px-4 py-0  sm:p-3"}}},{header:c(()=>[e("div",nt,[e("div",it,[a(j,{name:"i-heroicons-megaphone"}),e("span",ct,i(t.package.name),1)]),e("div",rt,[a(q,{variant:"soft",color:V(t.status).color},{default:c(()=>[e("span",dt,i(V(t.status).text),1)]),_:2},1032,["color"])])])]),default:c(()=>[e("div",ut,[e("div",_t,[e("div",mt,[a(R,{alt:t.name,src:t.image_url,size:"lg",imgClass:"object-cover"},null,8,["alt","src"])]),e("div",pt,[e("span",ft,i(t.name),1),e("div",vt,[e("span",null,i(t.tagline),1),ht]),e("span",gt,i(N(t.package.price)),1)])]),a(w,{color:"primary",class:"text-white mr-4",onClick:W=>S({name:"ads-setup",query:{transaction_id:t.id,section:"payment"}})},{default:c(()=>[v(" Detail ")]),_:2},1032,["onClick"])])]),_:2},1024))),128)),D.value.length===0?(l(),n("div",xt,bt)):h("",!0),x.value?h("",!0):(l(),n("div",wt,[a(w,{block:"",onClick:B,class:"mt-4 bg-accent",loading:g.value},{default:c(()=>[v(" Load More ")]),_:1},8,["loading"])]))])]),_:1})]))])):h("",!0)])])]))])}}};export{Tt as default};
