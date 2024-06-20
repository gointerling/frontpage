import{_ as X}from"./ODKmlZxb.js";import{_ as Y}from"./C0dTRZbU.js";import{_ as Z}from"./BHO3yzBf.js";import{_ as ee}from"./D3dNVb0o.js";import{g as te,r as m,h as ae,i as oe,c as s,b as o,w as n,j as ne,o as l,a as i,t as u,k as le,l as g,d as V,n as O,F as B,m as F,q as I,s as se,v as ie}from"./ct8VcvXC.js";import{_ as ce}from"./DlP493rU.js";import{_ as re,a as ue}from"./DfctCW2O.js";import{_ as pe}from"./Q_tkSB2n.js";import{_ as de}from"./zeDpmU5c.js";import{u as me}from"./BLEH2nsw.js";import"./BMpDn7BD.js";import"./vIvX9kO9.js";import"./Dt3SGzuy.js";import"./BVMW-ZxH.js";import"./CK1nzSYs.js";import"./g4SUXz1a.js";const _e={class:"w-full pt-0 p-6 flex flex-col gap-2"},fe={class:"flex gap-2"},ge={key:1,class:"text-gray-300"},he={class:"flex gap-3 items-center"},ve={class:"flex flex-col"},ye={class:"font-semibold text-primary"},ke={class:"text-sm text-gray-600"},xe={key:0,class:"flex gap-1 flex-col"},be={class:"flex gap-1 items-center"},Ce={class:"font-semibold text-primary"},Ve={key:1,class:"text-gray-300"},Pe={key:1,class:"text-gray-300"},Ue={key:0,class:"text-gray-300"},ze={key:1,class:"text-gray-300"},$e={key:0,class:"text-gray-300"},Ne={key:1,class:"text-gray-300"},Se={class:"flex gap-1"},Te="Transactions List",Ge={__name:"transactions",setup(Ae){const{getMerchants:j,updateMerchantStatus:D}=me(),P=te(),U=m(!1),z=m({title:"",message:"",callback:null}),$=m([]),h=m({label:"All",value:"all"}),k=m(""),v=m(1),x=m({page:1,totalPage:1,totalItems:0,itemsPerPage:10}),w=[[{key:"completed",label:"Completed",icon:"i-heroicons-check",callback:()=>{console.log("completed")}}],[{key:"uncompleted",label:"In Progress",icon:"i-heroicons-arrow-path",callback:()=>{console.log("uncompleted")}}]],b=async()=>{try{await j({page:v.value,per_page:x.value.itemsPerPage,status:h.value.value==="all"?"":h.value.value,search:k.value}).then(a=>{$.value=a.data.data.data.map(t=>({user:{id:t.id,fullname:t.fullname,email:t.email},phone:t.phone,type:t.merchants[0].type,bank:{bank:t.merchants[0].bank,bankAccount:t.merchants[0].bank_account},CV:t.merchants[0].cv_url,portfolio:JSON.parse(t.merchants[0].portfolios),certificate:JSON.parse(t.merchants[0].certificates),status:t.merchants[0].status,actions:w})),x.value={page:a.data.data.current_page,totalPage:a.data.data.last_page,totalItems:a.data.data.total,itemsPerPage:a.data.data.per_page}})}catch(a){console.error("Error fetching facilitators:",a)}};ae(v,b);const N=()=>{b(v.value,h.value.value,k.value)},E=L(()=>{N()},500);function L(a,t,_){let p;return function(){const f=this,d=arguments,c=function(){p=null,a.apply(f,d)};clearTimeout(p),p=setTimeout(c,t)}}const C=a=>{window.open(a,"_blank")},q=a=>{navigator.clipboard.writeText(a),P.add({title:"Copied!",color:"green",icon:"i-heroicons-check-circle",description:"No Rekening copied to clipboard!"})},J=a=>a==="verified"?"blue":a==="pending"?"orange":"gray",S=(a,t,_,p,f)=>{z.value={title:a,content:t,confirmText:_,cancelText:p,callback:f},U.value=!0},T=async(a,t)=>{await D(a,t).then(()=>{U.value=!1,P.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"User status updated successfully!"}),b()}).catch(_=>{console.error("Error updating user status:",_),P.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-x-circle",description:"Error updating user status!"})})};return oe(()=>{b()}),(a,t)=>{const _=X,p=Y,f=Z,d=ee,c=se,K=ie,A=ce,M=re,H=pe,Q=ue,R=ne,G=de;return l(),s("div",null,[o(R,{name:"admin"},{default:n(()=>[i("div",_e,[o(f,{ui:{body:{base:"flex justify-between items-center",background:"",padding:"p-2 sm:p-4"}}},{default:n(()=>[i("h6",{class:"font-semibold"},u(Te)),i("div",fe,[o(_,{options:[{label:"All",value:"all",color:"gray"},{label:"Verified",value:"verified",color:"blue"},{label:"Pending",value:"pending",color:"orange"}],modelValue:h.value,"onUpdate:modelValue":t[0]||(t[0]=e=>h.value=e),placeholder:"Pilih Status",by:"value","option-attribute":"label","search-attributes":["label"],onChange:N,class:"max-w-[180px]"},null,8,["modelValue"]),o(p,{icon:"i-heroicons-magnifying-glass-20-solid",size:"sm",color:"white",trailing:!1,placeholder:"Search Facilitator",modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=e=>k.value=e),onInput:t[2]||(t[2]=e=>le(E)())},null,8,["modelValue"])])]),_:1}),o(f,{ui:{body:{base:"flex flex-col gap-4"}}},{default:n(()=>[o(H,{rows:$.value},{"phone-data":n(({row:e})=>[e.phone?(l(),g(c,{key:0,target:"_blank",size:"sm",color:"green",trailing:!1,onClick:r=>C(`https://wa.me/${e.phone}`)},{default:n(()=>[o(d,{name:"whatsapp",class:"text-white"}),V(" "+u(e.phone),1)]),_:2},1032,["onClick"])):(l(),s("span",ge," Kosong "))]),"user-data":n(({row:e})=>[i("div",he,[o(K,{src:e.user.photo,alt:e.user.fullname,size:"sm",variant:"rounded-full",imgClass:"object-cover"},null,8,["src","alt"]),i("div",ve,[i("span",ye,u(e.user.fullname),1),i("span",ke,u(e.user.email),1)])])]),"bank-data":n(({row:e})=>[e.bank.bank?(l(),s("div",xe,[i("div",be,[i("span",Ce," Bank "+u(e.bank.bank),1),o(c,{size:"xs",variant:"outline",color:"blue",onClick:r=>q(e.bank.bankAccount),class:""},{default:n(()=>[o(d,{name:"copy",class:"text-xs"})]),_:2},1032,["onClick"])]),i("span",null,u(e.bank.bankAccount),1)])):(l(),s("span",Ve," Kosong "))]),"status-data":n(({row:e})=>[o(A,{size:"xs",label:e.status,color:J(e.status),variant:"subtle",class:"capitalize"},null,8,["label","color"])]),"type-data":n(({row:e})=>[o(A,{size:"xs",label:e.type,color:e.type==="interpreter"?"emerald":"blue",variant:"subtle",class:"capitalize"},null,8,["label","color"])]),"CV-data":n(({row:e})=>[e.CV?(l(),g(c,{key:0,size:"sm",color:"primary",trailing:!1,onClick:r=>C(e.CV)},{default:n(()=>[o(d,{name:"file",class:"text-white"}),V(" Open CV ")]),_:2},1032,["onClick"])):(l(),s("span",Pe," No CV "))]),"portfolio-data":n(({row:e})=>[e.portfolio?(l(),s("div",{key:0,class:O(["flex gap-1 flex-col justify-center",e.portfolio.length===0?"items-start":"items-center"])},[(l(!0),s(B,null,F(e.portfolio,(r,y)=>(l(),g(c,{key:y,size:"sm",color:"primary",trailing:!1,onClick:W=>C(r)},{default:n(()=>[o(d,{name:"file",class:"text-white"}),V(" Portfolio "+u(y+1),1)]),_:2},1032,["onClick"]))),128)),e.portfolio.length===0?(l(),s("span",Ue," No Portfolio ")):I("",!0)],2)):(l(),s("span",ze," No Portfolio "))]),"certificate-data":n(({row:e})=>[e.certificate?(l(),s("div",{key:0,class:O(["flex gap-1 flex-col justify-center",e.certificate.length===0?"items-start":"items-center"])},[(l(!0),s(B,null,F(e.certificate,(r,y)=>(l(),g(c,{key:y,size:"sm",color:"primary",trailing:!1,onClick:W=>C(r)},{default:n(()=>[o(d,{name:"file",class:"text-white"}),V(" Certificate "+u(y+1),1)]),_:2},1032,["onClick"]))),128)),e.certificate.length===0?(l(),s("span",$e," No Certificate ")):I("",!0)],2)):(l(),s("span",Ne," No Certificate "))]),"actions-data":n(({row:e})=>[i("div",Se,[e.status==="verified"?(l(),g(M,{key:0,text:"Deactive"},{default:n(()=>[o(c,{icon:"i-heroicons-trash",size:"2xs",color:"orange",variant:"outline",ui:{rounded:"rounded-full"},square:"",onClick:r=>S("Hang On","Are you sure you want to deactivate this facilitator?","Deactivate","Cancel",()=>{T(e.user.id,"inactive")})},null,8,["onClick"])]),_:2},1024)):(l(),g(M,{key:1,text:"Verify"},{default:n(()=>[o(c,{icon:"i-heroicons-check",size:"2xs",color:"emerald",variant:"outline",ui:{rounded:"rounded-full"},square:"",onClick:r=>S("Verify Facilitator","Are you sure you want to verify this facilitator?","Verify","Cancel",()=>{T(e.user.id,"verified")})},null,8,["onClick"])]),_:2},1024))])]),_:1},8,["rows"]),o(Q,{modelValue:v.value,"onUpdate:modelValue":t[3]||(t[3]=e=>v.value=e),max:5,"page-count":x.value.itemsPerPage,total:x.value.totalPage},null,8,["modelValue","page-count","total"])]),_:1})])]),_:1}),o(G,{isOpen:U.value,data:z.value},null,8,["isOpen","data"])])}}};export{Ge as default};
