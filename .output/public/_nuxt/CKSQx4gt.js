import{_ as ee}from"./CQCnuzJg.js";import{_ as te}from"./DPrGr4PQ.js";import{g as ae,G as oe,r as u,h as ne,i as le,c as s,b as o,w as n,k as se,o as l,a as c,t as d,j as ie,d as y,m as f,v as B,F,x as I,n as L,s as ce,y as re}from"./CTp9NOr1.js";import{_ as ue}from"./B6HtL2if.js";import{_ as de}from"./DTEu5KMv.js";import{_ as pe}from"./D8RMtJiE.js";import{_ as me,a as _e}from"./BYFQQkDu.js";import{_ as fe}from"./fsN-8Zj2.js";import{_ as ge}from"./DFthbEqv.js";import{u as he}from"./DoETXJnC.js";import"./dOnAVzHB.js";import"./DxDM_Ypi.js";import"./lHgXMHFR.js";import"./CmoM7MgI.js";import"./CyMfnTt5.js";const ve={class:"w-full pt-0 p-6 flex flex-col gap-2"},ye={class:"flex gap-2"},ke={key:1,class:"text-gray-300"},xe={class:"flex gap-3 items-center"},be={class:"flex flex-col"},Ce={class:"font-semibold text-primary"},Ve={class:"text-sm text-gray-600"},Pe={key:0,class:"flex gap-1 flex-col"},ze={class:"flex gap-1 items-center"},Ue={class:"font-semibold text-primary"},$e={key:1,class:"text-gray-300"},Se={key:1,class:"text-gray-300"},Ne={key:0,class:"text-gray-300"},Te={key:1,class:"text-gray-300"},Ae={key:0,class:"text-gray-300"},Me={key:1,class:"text-gray-300"},Oe={class:"flex gap-1"},Be="Service List",Ye={__name:"index",setup(Fe){const{getMerchants:j,updateMerchantStatus:w}=he(),P=ae(),D=oe(),U=u(!0),z=u(!1),$=u({title:"",message:"",callback:null}),S=u([]),g=u({label:"All",value:"all"}),k=u(""),h=u(1),x=u({page:1,totalPage:1,totalItems:0,itemsPerPage:10}),E=[[{key:"completed",label:"Completed",icon:"i-heroicons-check",callback:()=>{console.log("completed")}}],[{key:"uncompleted",label:"In Progress",icon:"i-heroicons-arrow-path",callback:()=>{console.log("uncompleted")}}]],b=async()=>{try{await j({page:h.value,per_page:x.value.itemsPerPage,status:g.value.value==="all"?"":g.value.value,search:k.value}).then(a=>{S.value=a.data.data.data.map(t=>({user:{id:t.id,fullname:t.fullname,email:t.email},phone:t.phone,type:t.merchants[0].type,bank:{bank:t.merchants[0].bank,bankAccount:t.merchants[0].bank_account},CV:t.merchants[0].cv_url,portfolio:JSON.parse(t.merchants[0].portfolios),certificate:JSON.parse(t.merchants[0].certificates),status:t.merchants[0].status,actions:E})),x.value={page:a.data.data.current_page,totalPage:a.data.data.last_page,totalItems:a.data.data.total,itemsPerPage:a.data.data.per_page}})}catch(a){console.error("Error fetching facilitators:",a)}finally{U.value=!1}};ne(h,b);const N=()=>{b(h.value,g.value.value,k.value)},q=J(()=>{N()},500);function J(a,t,_){let p;return function(){const i=this,V=arguments,m=function(){p=null,a.apply(i,V)};clearTimeout(p),p=setTimeout(m,t)}}const K=a=>{D.push(a)},C=a=>{window.open(a,"_blank")},R=a=>{navigator.clipboard.writeText(a),P.add({title:"Copied!",color:"green",icon:"i-heroicons-check-circle",description:"No Rekening copied to clipboard!"})},G=a=>a==="verified"?"blue":a==="pending"?"orange":"gray",T=(a,t,_,p,i)=>{$.value={title:a,content:t,confirmText:_,cancelText:p,callback:i},z.value=!0},A=async(a,t)=>{await w(a,t).then(()=>{z.value=!1,P.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"User status updated successfully!"}),b()}).catch(_=>{console.error("Error updating user status:",_),P.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-x-circle",description:"Error updating user status!"})})};return le(()=>{b()}),(a,t)=>{const _=ee,p=te,i=ce,V=ue,m=de,H=re,M=pe,O=me,Q=fe,W=_e,X=se,Y=ge;return l(),s("div",null,[o(X,{name:"merchant"},{default:n(()=>[c("div",ve,[o(V,{ui:{body:{base:"flex justify-between items-center",background:"",padding:"p-2 sm:p-4"}}},{default:n(()=>[c("h6",{class:"font-semibold"},d(Be)),c("div",ye,[o(_,{options:[{label:"All",value:"all",color:"gray"},{label:"Verified",value:"verified",color:"blue"},{label:"Pending",value:"pending",color:"orange"}],modelValue:g.value,"onUpdate:modelValue":t[0]||(t[0]=e=>g.value=e),placeholder:"Pilih Status",by:"value","option-attribute":"label","search-attributes":["label"],onChange:N,class:"max-w-[180px]"},null,8,["modelValue"]),o(p,{icon:"i-heroicons-magnifying-glass-20-solid",size:"sm",color:"white",trailing:!1,placeholder:"Search Facilitator",modelValue:k.value,"onUpdate:modelValue":t[1]||(t[1]=e=>k.value=e),onInput:t[2]||(t[2]=e=>ie(q)())},null,8,["modelValue"]),o(i,{size:"sm",color:"primary",onClick:t[3]||(t[3]=e=>K({name:"my-merchant-services-add"}))},{default:n(()=>[y(" Add Service ")]),_:1})])]),_:1}),o(V,{ui:{body:{base:"flex flex-col gap-4"}}},{default:n(()=>[o(Q,{rows:S.value,loading:U.value,"loading-state":{icon:"i-heroicons-arrow-path-20-solid",label:"Loading..."}},{"phone-data":n(({row:e})=>[e.phone?(l(),f(i,{key:0,target:"_blank",size:"sm",color:"green",trailing:!1,onClick:r=>C(`https://wa.me/${e.phone}`)},{default:n(()=>[o(m,{name:"whatsapp",class:"text-white"}),y(" "+d(e.phone),1)]),_:2},1032,["onClick"])):(l(),s("span",ke," Kosong "))]),"user-data":n(({row:e})=>[c("div",xe,[o(H,{src:e.user.photo,alt:e.user.fullname,size:"sm",variant:"rounded-full",imgClass:"object-cover"},null,8,["src","alt"]),c("div",be,[c("span",Ce,d(e.user.fullname),1),c("span",Ve,d(e.user.email),1)])])]),"bank-data":n(({row:e})=>[e.bank.bank?(l(),s("div",Pe,[c("div",ze,[c("span",Ue," Bank "+d(e.bank.bank),1),o(i,{size:"xs",variant:"outline",color:"blue",onClick:r=>R(e.bank.bankAccount),class:""},{default:n(()=>[o(m,{name:"copy",class:"text-xs"})]),_:2},1032,["onClick"])]),c("span",null,d(e.bank.bankAccount),1)])):(l(),s("span",$e," Kosong "))]),"status-data":n(({row:e})=>[o(M,{size:"xs",label:e.status,color:G(e.status),variant:"subtle",class:"capitalize"},null,8,["label","color"])]),"type-data":n(({row:e})=>[o(M,{size:"xs",label:e.type,color:e.type==="interpreter"?"emerald":"blue",variant:"subtle",class:"capitalize"},null,8,["label","color"])]),"CV-data":n(({row:e})=>[e.CV?(l(),f(i,{key:0,size:"sm",color:"primary",trailing:!1,onClick:r=>C(e.CV)},{default:n(()=>[o(m,{name:"file",class:"text-white"}),y(" Open CV ")]),_:2},1032,["onClick"])):(l(),s("span",Se," No CV "))]),"portfolio-data":n(({row:e})=>[e.portfolio?(l(),s("div",{key:0,class:B(["flex gap-1 flex-col justify-center",e.portfolio.length===0?"items-start":"items-center"])},[(l(!0),s(F,null,I(e.portfolio,(r,v)=>(l(),f(i,{key:v,size:"sm",color:"primary",trailing:!1,onClick:Z=>C(r)},{default:n(()=>[o(m,{name:"file",class:"text-white"}),y(" Portfolio "+d(v+1),1)]),_:2},1032,["onClick"]))),128)),e.portfolio.length===0?(l(),s("span",Ne," No Portfolio ")):L("",!0)],2)):(l(),s("span",Te," No Portfolio "))]),"certificate-data":n(({row:e})=>[e.certificate?(l(),s("div",{key:0,class:B(["flex gap-1 flex-col justify-center",e.certificate.length===0?"items-start":"items-center"])},[(l(!0),s(F,null,I(e.certificate,(r,v)=>(l(),f(i,{key:v,size:"sm",color:"primary",trailing:!1,onClick:Z=>C(r)},{default:n(()=>[o(m,{name:"file",class:"text-white"}),y(" Certificate "+d(v+1),1)]),_:2},1032,["onClick"]))),128)),e.certificate.length===0?(l(),s("span",Ae," No Certificate ")):L("",!0)],2)):(l(),s("span",Me," No Certificate "))]),"actions-data":n(({row:e})=>[c("div",Oe,[e.status==="verified"?(l(),f(O,{key:0,text:"Deactive"},{default:n(()=>[o(i,{icon:"i-heroicons-trash",size:"2xs",color:"orange",variant:"outline",ui:{rounded:"rounded-full"},square:"",onClick:r=>T("Hang On","Are you sure you want to deactivate this facilitator?","Deactivate","Cancel",()=>{A(e.user.id,"inactive")})},null,8,["onClick"])]),_:2},1024)):(l(),f(O,{key:1,text:"Verify"},{default:n(()=>[o(i,{icon:"i-heroicons-check",size:"2xs",color:"emerald",variant:"outline",ui:{rounded:"rounded-full"},square:"",onClick:r=>T("Verify Facilitator","Are you sure you want to verify this facilitator?","Verify","Cancel",()=>{A(e.user.id,"verified")})},null,8,["onClick"])]),_:2},1024))])]),_:1},8,["rows","loading"]),o(W,{modelValue:h.value,"onUpdate:modelValue":t[4]||(t[4]=e=>h.value=e),max:5,"page-count":x.value.itemsPerPage,total:x.value.totalPage},null,8,["modelValue","page-count","total"])]),_:1})])]),_:1}),o(Y,{isOpen:z.value,data:$.value},null,8,["isOpen","data"])])}}};export{Ye as default};
