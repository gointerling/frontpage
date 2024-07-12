import{_ as G}from"./CQCnuzJg.js";import{_ as J}from"./DPrGr4PQ.js";import{_ as X}from"./B6HtL2if.js";import{_ as Y}from"./DTEu5KMv.js";import{g as Z,r,h as ee,i as ae,c as P,b as o,w as l,j as s,k as te,o as u,a as n,t as m,l as x,m as b,d as B,s as oe,y as le}from"./CTp9NOr1.js";import{_ as ne,a as se}from"./BYFQQkDu.js";import{_ as ie}from"./D8RMtJiE.js";import{_ as re}from"./fsN-8Zj2.js";import{_ as ce}from"./DFthbEqv.js";import{u as I}from"./CZ1aqtJZ.js";import"./dOnAVzHB.js";import"./DxDM_Ypi.js";import"./lHgXMHFR.js";import"./CmoM7MgI.js";import"./CyMfnTt5.js";const ue={class:"w-full pt-0 p-6 flex flex-col gap-2"},de={class:"flex gap-2"},pe={key:1,class:"text-gray-300"},me={class:"flex gap-3 items-center"},_e={class:"flex flex-col"},fe={class:"font-semibold text-primary"},ge={class:"text-sm text-gray-600"},ve={class:"text-gray-600 max-w-48 text-sm truncate cursor-pointer"},he={key:1,class:"text-gray-300"},xe={class:"flex gap-1"},be="Users List",Oe={__name:"users",setup(ye){const{getMerchants:Ue,updateMerchantStatus:L}=I(),{getUsers:O}=I(),w=Z(),A=r(!0),y=r(!1),S=r({title:"",message:"",callback:null}),$=r([]),_=r({label:"All",value:"all"}),f=r({label:"All",value:"all"}),v=r(""),d=r(1),U=r({page:1,totalPage:1,totalItems:0,itemsPerPage:10}),h=async()=>{try{await O({page:d.value,per_page:U.value.itemsPerPage,status:_.value.value==="all"?"":_.value.value,is_admin:f.value.value==="all"?null:f.value.value,search:v.value}).then(t=>{$.value=t.data.data.users.data.map((a,i)=>({no:i+1,user:{id:a.id,fullname:a.fullname,email:a.email,photo:a.photo},phone:E(a.phone??""),address:a.address,admin:a.is_admin,status:a.status,actions:{id:a.id,status:a.status}})),U.value={page:t.data.data.users.current_page,totalPage:t.data.data.users.last_page,totalItems:t.data.data.users.total,itemsPerPage:t.data.data.users.per_page}})}catch(t){console.error("Error fetching users:",t)}finally{A.value=!1}},E=t=>(t=t.replace(/\D/g,""),t.startsWith("0")?`62${t.slice(1)}`:t);ee(d,h);const k=()=>{d.value=1,h()},N=R(()=>{k()},500);function R(t,a,i){let c;return function(){const p=this,V=arguments,g=function(){c=null,t.apply(p,V)};clearTimeout(c),c=setTimeout(g,a)}}const j=t=>{window.open(t,"_blank")},q=t=>t==="verified"?"blue":t==="active"?"green":t==="pending"?"orange":"gray",z=(t,a,i,c,p)=>{S.value={title:t,content:a,confirmText:i,cancelText:c,callback:p},y.value=!0},D=async(t,a)=>{await L(t,a).then(()=>{y.value=!1,w.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"User status updated successfully!"}),h()}).catch(i=>{console.error("Error updating user status:",i),w.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-x-circle",description:"Error updating user status!"})})};return ae(async()=>{await h()}),(t,a)=>{const i=G,c=J,p=X,V=Y,g=oe,K=le,C=ne,T=ie,H=re,Q=se,W=te,F=ce;return u(),P("div",null,[o(W,{name:"admin"},{default:l(()=>[n("div",ue,[o(p,{ui:{body:{base:"flex justify-between items-center",background:"",padding:"p-2 sm:p-4"}}},{default:l(()=>[n("h6",{class:"font-semibold"},m(be)),n("div",de,[o(i,{options:[{label:"All Role",value:"all",color:"gray"},{label:"Admin",value:"1",color:"blue"},{label:"User",value:"0",color:"orange"}],modelValue:s(f),"onUpdate:modelValue":a[0]||(a[0]=e=>x(f)?f.value=e:null),placeholder:"Pilih Role",by:"value","option-attribute":"label","search-attributes":["label"],onChange:k,class:"max-w-[180px]"},null,8,["modelValue"]),o(i,{options:[{label:"All Status",value:"all",color:"gray"},{label:"Verified",value:"verified",color:"blue"},{label:"Pending",value:"pending",color:"orange"},{label:"Active",value:"active",color:"green"},{label:"Inactive",value:"inactive",color:"gray"}],modelValue:s(_),"onUpdate:modelValue":a[1]||(a[1]=e=>x(_)?_.value=e:null),placeholder:"Pilih Status",by:"value","option-attribute":"label","search-attributes":["label"],onChange:k,class:"max-w-[180px]"},null,8,["modelValue"]),o(c,{icon:"i-heroicons-magnifying-glass-20-solid",size:"sm",color:"white",trailing:!1,placeholder:"Search User",modelValue:s(v),"onUpdate:modelValue":a[2]||(a[2]=e=>x(v)?v.value=e:null),onInput:a[3]||(a[3]=e=>s(N)())},null,8,["modelValue"])])]),_:1}),o(p,{ui:{body:{base:"flex flex-col gap-4"}}},{default:l(()=>[o(H,{rows:s($),loading:s(A),"loading-state":{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."}},{"phone-data":l(({row:e})=>[e.phone?(u(),b(g,{key:0,target:"_blank",size:"sm",color:"green",trailing:!1,onClick:M=>j(`https://wa.me/${e.phone}`)},{default:l(()=>[o(V,{name:"whatsapp",class:"text-white"}),B(" "+m(e.phone),1)]),_:2},1032,["onClick"])):(u(),P("span",pe," Kosong "))]),"user-data":l(({row:e})=>[n("div",me,[o(K,{src:e.user.photo,alt:e.user.fullname,size:"sm",variant:"rounded-full",imgClass:"object-cover"},null,8,["src","alt"]),n("div",_e,[n("span",fe,m(e.user.fullname),1),n("span",ge,m(e.user.email),1)])])]),"address-data":l(({row:e})=>[n("div",null,[e.address?(u(),b(C,{key:0,text:e.address,popper:{arrow:!0},ui:{base:"[@media(pointer:coarse)]:hidden h-full px-2 py-1 text-xs font-normal text-wrap text-center"}},{default:l(()=>[n("p",ve,m(e.address),1)]),_:2},1032,["text"])):(u(),P("span",he," Kosong "))])]),"admin-data":l(({row:e})=>[n("div",null,[o(T,{size:"xs",label:e.admin?"Admin":"User",color:e.admin?"blue":"orange",variant:"subtle",class:"capitalize"},{default:l(()=>[B(m(e.admin?"Admin":"User"),1)]),_:2},1032,["label","color"])])]),"status-data":l(({row:e})=>[o(T,{size:"xs",label:e.status,color:q(e.status),variant:"subtle",class:"capitalize"},null,8,["label","color"])]),"actions-data":l(({row:e})=>[n("div",xe,[e.status==="verified"?(u(),b(C,{key:0,text:"Deactive"},{default:l(()=>[o(g,{icon:"i-heroicons-trash",size:"2xs",color:"orange",variant:"outline",ui:{rounded:"rounded-full"},square:"",onClick:M=>{z("Hang On","Are you sure you want to deactivate this user?","Deactivate","Cancel",()=>{D(e.user.id,"inactive")})}},null,8,["onClick"])]),_:2},1024)):(u(),b(C,{key:1,text:"Verify"},{default:l(()=>[o(g,{icon:"i-heroicons-check",size:"2xs",color:"emerald",variant:"outline",ui:{rounded:"rounded-full"},square:"",onClick:M=>{z("Verify User","Are you sure you want to verify this user?","Verify","Cancel",()=>{D(e.user.id,"verified")})}},null,8,["onClick"])]),_:2},1024))])]),_:1},8,["rows","loading"]),o(Q,{modelValue:s(d),"onUpdate:modelValue":a[4]||(a[4]=e=>x(d)?d.value=e:null),"page-count":1,total:s(U).totalPage},null,8,["modelValue","total"])]),_:1})])]),_:1}),o(F,{isOpen:s(y),data:s(S)},null,8,["isOpen","data"])])}}};export{Oe as default};
