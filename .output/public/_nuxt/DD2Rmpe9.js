import{_ as ae}from"./BHO3yzBf.js";import{g as W,r as l,o as i,c as m,a as e,b as s,q as k,t as L,V as oe,i as Y,w as u,Y as R,a1 as T,l as j,k as O,d as _,s as se,B as ne}from"./ct8VcvXC.js";import{h as le}from"./BRN4NVlb.js";import{P as ie}from"./DVqzkp6y.js";import{_ as H}from"./D3dNVb0o.js";import{_ as re}from"./ODKmlZxb.js";import{_ as ce}from"./C_bOvxh8.js";import{_ as ue}from"./C0dTRZbU.js";import{u as de,_ as pe}from"./jwN-tVWg.js";import{_ as me}from"./Ct-sFCJu.js";import{c as A,a as G}from"./M1_3KTZr.js";import{u as J}from"./BLEH2nsw.js";import"./BMpDn7BD.js";import"./vIvX9kO9.js";import"./Dt3SGzuy.js";import"./BVMW-ZxH.js";import"./CK1nzSYs.js";const _e={class:"file-upload"},fe=["accept"],he={key:0,class:"px-4 py-2 border border-primary rounded hover:bg-primary flex items-center gap-1 group transition duration-200"},ve=e("span",{class:"text-primary group-hover:text-white transition duration-200"}," Uploading... ",-1),be=[ve],xe={key:1},ge=e("span",{class:"text-primary group-hover:text-white transition duration-200"}," Upload File ",-1),ye=e("span",{class:"text-red-800 group-hover:text-white transition duration-200"}," Cancel ",-1),ke={key:2,class:"mt-2 text-gray-700 text-xs"},Fe={key:3,class:"mt-2 text-red-500 text-xs"},$e={__name:"FileUpload",props:{title:{type:String,default:"File"},accept:{type:String,default:""},maxSize:{type:Number,default:0}},emits:["fileUploaded"],setup(U,{emit:C}){const{uploadFile:M,deleteFile:F}=de(),r=U,t=W(),f=C,h=l(null),c=l(""),v=l(""),g=l(null),y=l(!1),$=()=>{h.value.click()},b=()=>{const a=h.value.files[0];a&&(c.value=a.name,r.maxSize&&a.size>r.maxSize?(v.value=`File size exceeds the limit of ${P(r.maxSize/1024/1024,2)} MB.`,c.value=""):(v.value="",N(a,`${r.title}_${a.name}`)))},V=()=>{h.value.value=null,c.value="",v.value="",z(g.value)},P=(a,d)=>+(Math.round(a+"e"+d)+"e-"+d),N=(a,d)=>{y.value=!0,M(a,d).then(p=>{y.value=!1,g.value=p.data.data.fileRecord,q(p.data.data.fileRecord.url),t.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"File uploaded successfully!"})}).catch(p=>{console.error(p),t.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-exclamation-triangle",description:I(p.response.data.error)})})},z=a=>{F(a.id).then(()=>{q(""),t.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"File deleted successfully!"})}).catch(d=>{console.error(d),t.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-exclamation-triangle",description:I(d.response.data.error)})})},q=a=>{f("fileUploaded",a)},I=a=>a.errors?a.errors[Object.keys(a.errors)[0]][0]:a.message;return(a,d)=>{const p=H;return i(),m("div",_e,[e("input",{ref_key:"fileInput",ref:h,type:"file",accept:U.accept,class:"hidden",onChange:b},null,40,fe),y.value?(i(),m("button",he,be)):(i(),m("div",xe,[c.value?k("",!0):(i(),m("button",{key:0,onClick:$,class:"px-4 py-2 border border-primary rounded hover:bg-primary flex items-center gap-1 group transition duration-200"},[s(p,{name:"file-upload",class:"text-primary group-hover:text-white transition duration-200"}),ge])),c.value?(i(),m("button",{key:1,onClick:V,class:"px-4 py-2 border border-red-800 rounded hover:bg-red-800 flex items-center gap-1 group transition duration-200"},[s(p,{name:"circle-x",class:"text-red-800 group-hover:text-white transition duration-200 mb-0 pb-0"}),ye])):k("",!0)])),c.value?(i(),m("p",ke," Selected file: "+L(c.value),1)):k("",!0),v.value?(i(),m("p",Fe,L(v.value),1)):k("",!0)])}}},we={class:"h-full"},Se=e("h6",{class:"text-2xl font-semibold text-primary max-w-sm py-3"},[_(" Welcome Our New "),e("br"),e("b",{class:"text-accent text-3xl"},"Facilitators"),_("! ")],-1),Ue=e("p",{class:"text-sm text-gray-700 pb-3"},[_(" Please fill in the form below to get started "),e("br"),_(" to be a Gointerling facilitator. ")],-1),Ce=e("p",{class:"text-sm text-gray-700 pb-3"},[_(" Please fill in the form below to get started "),e("br"),_(" to be a Gointerling facilitator. ")],-1),Me=e("p",{class:"text-sm text-gray-700 pb-3"},[_(" Please fill in the form below to get started "),e("br"),_(" to be a Gointerling facilitator. ")],-1),Ve=e("p",{class:"text-sm text-gray-700 pb-3"},[_(" Please fill in the form below to get started "),e("br"),_(" to be a Gointerling facilitator. ")],-1),Pe={class:"flex gap-2 mt-4"},Ne={class:"flex items-center gap-2"},Be={class:"flex items-center gap-2"},ze=e("span",null,"Selanjutnya",-1),qe={class:"flex items-center gap-2"},Ie={__name:"MerchantForm",props:{merchant_id:{type:Number,required:!0}},setup(U){const{updateMyMerchant:C,setupMyMerchantService:M}=J(),F=U,r=A({type:A().required(),bank:G().required(),bank_account:G().required(),cv_url:G().required()}),t=l(1),f=oe(),h=W(),c=[{id:"translator",name:"Translator"},{id:"interpreter",name:"Interpreter"}],v=[{id:"bca",name:"BCA"},{id:"bni",name:"BNI"},{id:"bri",name:"BRI"},{id:"mandiri",name:"Mandiri"}],g=l(c.find(o=>o.id==="translator")||c[0]),y=l(!1);l(null);const $=l(null),b=l(null),V=l(null),P=l([]),N=l([]),z=o=>{(o===-1||I(t.value))&&(t.value=t.value+o),f.push({query:{step:t.value}})},q={1:{conditions:[{check:()=>!g.value,message:"Please select a type"}]},2:{conditions:[{check:()=>!b.value,message:"Please select a valid bank"},{check:()=>!$.value,message:"Please fill in the bank account number"}]},3:{conditions:[{check:()=>!V.value,message:"Please upload your CV"}]}},I=o=>{const n=q[o];if(!n)return!1;let w=!0;return n.conditions.forEach(B=>{B.check()&&(a(B.message),w=!1,y.value=!0),y.value=!1}),w},a=o=>{h.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-x-circle",description:o||"Please fill in the form correctly!"})},d=o=>{f.push(o)},p=o=>{V.value=o},K=o=>{P.value=o},Q=o=>{N.value=o},X=async()=>{const o={type:g.value.id,bank_id:b.value.id,bank:b.value.name,bank_account:`${$.value}`,cv_url:V.value,portfolios:P.value,certificates:N.value,merchant_id:F.merchant_id};try{await C(o),h.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"Merchant setup successfully!"}),d("/my/merchant/status")}catch(n){h.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-x-circle",description:n.response.data.error.message})}};return Y(async()=>{b.value=v[0]}),(o,n)=>{const w=H,B=re,S=ce,Z=ue,ee=$e,D=pe,E=se,te=me;return i(),m("div",we,[s(te,{"validation-schema":O(r),onSubmit:o.handleRegister,class:"h-full flex flex-col justify-between"},{default:u(()=>[e("div",null,[s(w,{name:"logo",filled:"",class:"text-4xl"}),Se,R(e("div",null,[Ue,s(S,{name:"type",label:"Tipe Fasilitator",class:"mb-2"},{default:u(()=>[s(B,{modelValue:g.value,"onUpdate:modelValue":n[0]||(n[0]=x=>g.value=x),options:c,placeholder:"Pilih Tipe Fasilitator",by:"id","option-attribute":"name","search-attributes":["name"]},null,8,["modelValue"])]),_:1})],512),[[T,t.value===1]]),R(e("div",null,[Ce,s(S,{name:"bank",label:"Nama Bank",class:"mb-2"},{default:u(()=>[s(B,{modelValue:b.value,"onUpdate:modelValue":n[1]||(n[1]=x=>b.value=x),options:v,placeholder:"Pilih Nama Bank",by:"id","option-attribute":"name","search-attributes":["name"]},null,8,["modelValue"])]),_:1}),s(S,{name:"bank_account",label:"No Rekening",class:"mb-2"},{default:u(()=>[s(Z,{type:"number",modelValue:$.value,"onUpdate:modelValue":n[2]||(n[2]=x=>$.value=x),required:"",placeholder:"Masukkan No Rekening",class:"w-full",color:y.value?"red":"gray"},null,8,["modelValue","color"])]),_:1})],512),[[T,t.value===2]]),R(e("div",null,[Me,s(S,{name:"bank",label:"File CV (Max 6MB)",class:"mb-4"},{default:u(()=>[s(ee,{title:"CV",accept:"application/pdf","max-size":"6291456",onFileUploaded:p})]),_:1})],512),[[T,t.value===3]]),R(e("div",null,[Ve,s(S,{name:"portfolios",label:"Portfolios",class:"mb-2"},{default:u(()=>[s(D,{title:"Portfolio",accept:"application/pdf","max-size":"6291456",onFileUploaded:K})]),_:1}),s(S,{name:"certificates",label:"Certificates ",class:"mb-2"},{default:u(()=>[s(D,{title:"Certificate",accept:"application/pdf","max-size":"6291456",onFileUploaded:Q})]),_:1})],512),[[T,t.value===4]])]),e("div",Pe,[t.value>1?(i(),j(E,{key:0,class:"bg-accent",onClick:n[3]||(n[3]=x=>z(-1))},{default:u(()=>[e("div",Ne,[s(w,{name:"chevron-left"})])]),_:1})):k("",!0),t.value<4?(i(),j(E,{key:1,onClick:n[4]||(n[4]=x=>z(1))},{default:u(()=>[e("div",Be,[ze,s(w,{name:"chevron-right"})])]),_:1})):k("",!0),t.value===4?(i(),j(E,{key:2,onClick:n[5]||(n[5]=x=>X())},{default:u(()=>[e("div",qe,[e("span",null,L(P.value.length>0||N.value.length>0?"Finish Setup":"Skip for Now"),1)])]),_:1})):k("",!0)])]),_:1},8,["validation-schema","onSubmit"])])}}},Re={key:1,class:"w-full h-screen flex items-center justify-center bg-slate-200"},Te={class:"flex gap-4 p-4 h-full"},je={class:"flex align-middle justify-center items-center"},Oe=["src"],Ee={class:"px-6 min-w-[400px]"},nt={__name:"onboarding",setup(U){const{getMyMerchants:C}=J(),M=l(!0),F=l(null);return Y(async()=>{await C().then(r=>{const t=r.data.data.user.merchants[0].status,f=r.data.data.user.merchants[0].is_first_time;console.log(f),ne("token").value.user.merchant_status=t,F.value=r.data.data.user.merchants[0].id,M.value=!1})}),(r,t)=>{const f=ae;return i(),m("div",null,[O(M)?(i(),j(ie,{key:0})):(i(),m("div",Re,[s(f,{ui:{body:{padding:"p-0",base:"h-full"}},class:"min-w-[750px] min-h-[400px] flex items-center justify-center"},{default:u(()=>[e("div",Te,[e("div",je,[e("img",{src:O(le),width:"300px"},null,8,Oe)]),e("div",Ee,[s(Ie,{merchant_id:O(F)},null,8,["merchant_id"])])])]),_:1})]))])}}};export{nt as default};
