import{_ as ee}from"./B6HtL2if.js";import{r as n,G as te,g as ae,i as E,o as c,c as q,b as a,w as l,a as e,B as g,a4 as x,m as y,n as N,t as oe,j as k,d as i,s as se,I as L}from"./CTp9NOr1.js";import{h as ne}from"./DPsxuqC9.js";import{P as le}from"./Dp8eTrYD.js";import{_ as ie}from"./DTEu5KMv.js";import{_ as re}from"./CQCnuzJg.js";import{_ as ce}from"./vtUo5fcr.js";import{_ as ue}from"./DPrGr4PQ.js";import{_ as me}from"./CfahSgby.js";import{_ as de}from"./2ZSvW2_A.js";import{_ as pe}from"./DDG8YSGx.js";import{c as z,a as T}from"./M1_3KTZr.js";import{u as O}from"./DoETXJnC.js";import"./dOnAVzHB.js";import"./DxDM_Ypi.js";import"./lHgXMHFR.js";import"./CmoM7MgI.js";import"./BWXqFDQv.js";const _e={class:"h-full"},fe=e("h6",{class:"text-2xl font-semibold text-primary max-w-sm py-3"},[i(" Welcome Our New "),e("br"),e("b",{class:"text-accent text-3xl"},"Facilitators"),i("! ")],-1),he=e("p",{class:"text-sm text-gray-700 pb-3"},[i(" Please fill in the form below to get started "),e("br"),i(" to be a Gointerling facilitator. ")],-1),ve=e("p",{class:"text-sm text-gray-700 pb-3"},[i(" Please fill in the form below to get started "),e("br"),i(" to be a Gointerling facilitator. ")],-1),be=e("p",{class:"text-sm text-gray-700 pb-3"},[i(" Please fill in the form below to get started "),e("br"),i(" to be a Gointerling facilitator. ")],-1),ge=e("p",{class:"text-sm text-gray-700 pb-3"},[i(" Please fill in the form below to get started "),e("br"),i(" to be a Gointerling facilitator. ")],-1),xe={class:"flex gap-2 mt-4"},ye={class:"flex items-center gap-2"},ke={class:"flex items-center gap-2"},we=e("span",null,"Selanjutnya",-1),Ve={class:"flex items-center gap-2"},Pe={__name:"MerchantForm",props:{merchant_id:{type:Number,required:!0}},setup(j){const{updateMyMerchant:w,setupMyMerchantService:V}=O(),h=j,u=z({type:z().required(),bank:T().required(),bank_account:T().required(),cv_url:T().required()}),s=n(1),m=te(),P=n(!1),C=ae(),M=[{id:"translator",name:"Translator"},{id:"interpreter",name:"Interpreter"}],I=[{id:"bca",name:"BCA"},{id:"bni",name:"BNI"},{id:"bri",name:"BRI"},{id:"mandiri",name:"Mandiri"}],v=n(M.find(t=>t.id==="translator")||M[0]),$=n(!1);n(null);const b=n(null),d=n(null),F=n(null),B=n([]),S=n([]),R=t=>{(t===-1||A(s.value))&&(s.value=s.value+t),m.push({query:{step:s.value}})},D={1:{conditions:[{check:()=>!v.value,message:"Please select a type"}]},2:{conditions:[{check:()=>!d.value,message:"Please select a valid bank"},{check:()=>!b.value,message:"Please fill in the bank account number"}]},3:{conditions:[{check:()=>!F.value,message:"Please upload your CV"}]}},A=t=>{const o=D[t];if(!o)return!1;let p=!0;return o.conditions.forEach(f=>{f.check()&&(W(f.message),p=!1,$.value=!0),$.value=!1}),p},W=t=>{C.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-x-circle",description:t||"Please fill in the form correctly!"})},H=t=>{F.value=t},J=t=>{B.value=t},K=t=>{S.value=t},Q=async()=>{P.value=!0;const t={type:v.value.id,bank_id:d.value.id,bank:d.value.name,bank_account:`${b.value}`,cv_url:F.value,portfolios:B.value,certificates:S.value,merchant_id:h.merchant_id};try{await w(t),C.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"Merchant setup successfully!"}),m.push({name:"my-merchant-status"})}catch(o){C.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-x-circle",description:o.response.data.error.message})}finally{P.value=!1}};return E(async()=>{d.value=I[0]}),(t,o)=>{const p=ie,f=re,_=ce,X=ue,Y=me,G=de,U=se,Z=pe;return c(),q("div",_e,[a(Z,{"validation-schema":k(u),onSubmit:t.handleRegister,class:"h-full flex flex-col justify-between"},{default:l(()=>[e("div",null,[a(p,{name:"logo",filled:"",class:"text-4xl"}),fe,g(e("div",null,[he,a(_,{name:"type",label:"Tipe Fasilitator",class:"mb-2"},{default:l(()=>[a(f,{modelValue:v.value,"onUpdate:modelValue":o[0]||(o[0]=r=>v.value=r),options:M,placeholder:"Pilih Tipe Fasilitator",by:"id","option-attribute":"name","search-attributes":["name"]},null,8,["modelValue"])]),_:1})],512),[[x,s.value===1]]),g(e("div",null,[ve,a(_,{name:"bank",label:"Nama Bank",class:"mb-2"},{default:l(()=>[a(f,{modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=r=>d.value=r),options:I,placeholder:"Pilih Nama Bank",by:"id","option-attribute":"name","search-attributes":["name"]},null,8,["modelValue"])]),_:1}),a(_,{name:"bank_account",label:"No Rekening",class:"mb-2"},{default:l(()=>[a(X,{type:"number",modelValue:b.value,"onUpdate:modelValue":o[2]||(o[2]=r=>b.value=r),required:"",placeholder:"Masukkan No Rekening",class:"w-full",color:$.value?"red":"gray"},null,8,["modelValue","color"])]),_:1})],512),[[x,s.value===2]]),g(e("div",null,[be,a(_,{name:"bank",label:"File CV (Max 6MB)",class:"mb-4"},{default:l(()=>[a(Y,{title:"CV",accept:"application/pdf","max-size":"6291456",onFileUploaded:H})]),_:1})],512),[[x,s.value===3]]),g(e("div",null,[ge,a(_,{name:"portfolios",label:"Portfolios",class:"mb-2"},{default:l(()=>[a(G,{title:"Portfolio",accept:"application/pdf","max-size":"6291456",onFileUploaded:J})]),_:1}),a(_,{name:"certificates",label:"Certificates ",class:"mb-2"},{default:l(()=>[a(G,{title:"Certificate",accept:"application/pdf","max-size":"6291456",onFileUploaded:K})]),_:1})],512),[[x,s.value===4]])]),e("div",xe,[s.value>1?(c(),y(U,{key:0,class:"bg-accent",onClick:o[3]||(o[3]=r=>R(-1))},{default:l(()=>[e("div",ye,[a(p,{name:"chevron-left"})])]),_:1})):N("",!0),s.value<4?(c(),y(U,{key:1,onClick:o[4]||(o[4]=r=>R(1))},{default:l(()=>[e("div",ke,[we,a(p,{name:"chevron-right"})])]),_:1})):N("",!0),s.value===4?(c(),y(U,{key:2,onClick:o[5]||(o[5]=r=>Q()),loading:P.value},{default:l(()=>[e("div",Ve,[e("span",null,oe(B.value.length>0||S.value.length>0?"Finish Setup":"Skip for Now"),1)])]),_:1},8,["loading"])):N("",!0)])]),_:1},8,["validation-schema","onSubmit"])])}}},Ce={key:1,class:"w-full h-screen flex items-center justify-center bg-slate-200"},Me={class:"flex gap-4 p-4 h-full"},$e={class:"flex align-middle justify-center items-center"},Fe=["src"],Be={class:"px-6 min-w-[400px]"},Ke={__name:"onboarding",setup(j){const{getMyMerchants:w}=O(),V=n(!0),h=n(null);return E(async()=>{await w().then(u=>{const s=u.data.data.user.merchants[0].status,m=u.data.data.user.merchants[0].is_first_time;L("token").value.user.merchant_status=s,L("token").value.user.is_first_time=m,h.value=u.data.data.user.merchants[0].id,V.value=!1})}),(u,s)=>{const m=ee;return c(),q("div",null,[k(V)?(c(),y(le,{key:0})):(c(),q("div",Ce,[a(m,{ui:{body:{padding:"p-0",base:"h-full"}},class:"min-w-[750px] min-h-[400px] flex items-center justify-center"},{default:l(()=>[e("div",Me,[e("div",$e,[e("img",{src:k(ne),width:"300px"},null,8,Fe)]),e("div",Be,[a(Pe,{merchant_id:k(h)},null,8,["merchant_id"])])])]),_:1})]))])}}};export{Ke as default};
