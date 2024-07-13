import{_ as re}from"./DTEu5KMv.js";import{g as ce,H as de,G as ue,r as f,P as R,h as _e,i as me,I as D,c as d,B as pe,a4 as fe,a as e,b as s,F as S,x as I,j as V,w as i,n as _,m as v,s as he,o as n,t as u,v as T,d as h,E as xe,y as ve}from"./CTp9NOr1.js";import{_ as ge}from"./D8RMtJiE.js";import{_ as ye}from"./B6HtL2if.js";import{_ as be}from"./BCVn87SH.js";import{_ as ke}from"./DFthbEqv.js";import{P as we}from"./Dp8eTrYD.js";import{_ as Ce}from"./CF1Q1FUs.js";import{_ as E}from"./CfahSgby.js";import{u as Fe}from"./Dv-Xg3xh.js";import"./CmoM7MgI.js";import"./CyMfnTt5.js";import"./dOnAVzHB.js";import"./lHgXMHFR.js";import"./BWXqFDQv.js";const De={class:"w-100 flex flex-col items-center"},$e={class:"flex justify-between items-stretch w-10/12 my-16 gap-16 px-8 pt-16"},Oe={class:"w-2/12"},je=e("h6",{class:"font-semibold"},"Client Dashboard",-1),Ue={class:"flex flex-col items-start mt-4"},Pe={class:"text-md text-primary"},Se={key:0,class:"w-10/12"},Ie={class:"flex gap-2 items-center mb-3"},Te=e("h6",{class:"font-semibold"},"Detail Order",-1),ze={class:"flex justify-between items-center"},Me={class:"flex items-center gap-2 capitalize"},Ne={class:"font-semibold"},Ae={class:"flex justify-between items-center gap-2"},Be={class:"capitalize"},Le={class:"flex gap-3 justify-between items-center px-2"},Re={class:"flex gap-3 w-7/12"},Ve={class:"flex flex-col gap-1"},Ee={class:"font-semibold text-primary"},He={class:""},Ye={class:"text-sm text-gray-700"},Ge=e("br",null,null,-1),Je={class:"text-sm text-gray-700"},We={key:0},qe={key:0,class:"mt-4 flex flex-col items-end gap-2"},Ke=e("span",{class:"font-semibold text-sm pb-1"}," Download Result ",-1),Qe={key:1,class:"mt-4 flex flex-col items-end gap-2"},Xe=e("span",{class:"font-semibold text-sm pb-1"},"Meeting Link",-1),Ze={key:1,class:"flex flex-col text-right items-end"},et=e("span",{class:"font-thin text-primary text-sm"}," Amount to be transfer : ",-1),tt={class:"font-semibold text-primary text-lg my-1"},st=e("span",{class:"font-thin text-primary text-sm"}," Gointering Account ",-1),ot={class:"font-bold text-primary text-md text-xl py-2 flex gap-2 items-center"},at={class:"font-thin text-primary text-sm mb-2"},lt={key:2,class:"flex flex-col text-right items-end"},nt=e("span",{class:"font-semibold text-xl pb-2"},"Work In Progress",-1),it=e("p",{class:"w-7/12 text-gray-600 text-sm"}," Your order has been received and is now being processed. Thank you for your trust in using our services. ",-1),rt={key:0,class:"mt-4 flex flex-col gap-2"},ct=e("span",{class:"font-semibold text-sm pb-1"},"Meeting Link",-1),dt={key:0,class:"mt-6"},ut=e("h6",{class:"font-semibold mb-2"},"Discussions",-1),_t={key:0,class:"pb-4"},mt={class:"flex gap-2 items-center"},pt={class:"flex flex-col items-start gap-1"},ft={class:"font-semibold"},ht=e("span",{class:"capitalize"}," Faciliator ",-1),xt={class:"flex text-gray-700 my-3 text-sm"},vt={class:"text-gray-700 text-sm"},gt={key:1,class:"pb-4"},yt={class:"flex gap-2 items-center"},bt=e("div",{class:"flex flex-col items-start gap-1"},[e("span",{class:"font-semibold text-primary"}," You ")],-1),kt={class:"flex text-gray-700 my-3 text-sm"},wt={class:"text-gray-700 text-sm"},Ct={class:"flex justify-end border-t border-1 pt-2 gap-2"},Rt={__name:"[id]",setup(Ft){const g=ce(),z=de(),M=ue(),{getDetailOrder:H,updateMyOrder:N}=Fe(),Y=[{key:"order-history",label:"Order History",icon:"user-circle",scope:"all"}],G=f({title:"",content:"",confirmText:"",cancelText:"",callback:null}),$=f(!0),J=f(!1),O=f(!1),C=f("order-history"),p=f({fullname:"",photo:"",email:"",phone:"",address:"",role:"",personal_description:"",main_skills:[],additional_skills:[],is_admin:!1,is_facilitator:!1}),A=f([]),j=f(3),k=f([]),y=f({user:{fullname:"You",photo:"/images/avatar.jpg"},message:"",time:new Date().toISOString(),file_url:"",other_link:"",is_facilitator:!1}),W=R(()=>{if(!p.value)return[];const o=p.value.is_admin??!1,a=p.value.is_facilitator??!1;return Y.filter(c=>c.scope==="all"||c.scope==="admin"&&o||c.scope==="merchant"&&a)}),q=R(()=>k.value.slice(-(j.value??3))),B=o=>{switch(o){case"completed":return{color:"green",text:"Completed"};case"paid":return{color:"blue",text:"In Progress"};case"pending":return{color:"violet",text:"Pending"};case"waitingpaid":return{color:"orange",text:"Waiting Payment & Verification"};case"failed":return{color:"red",text:"Failed"};default:return{color:"gray",text:"Unknown"}}},K=o=>{navigator.clipboard.writeText(o),g.add({title:"Copied!",color:"green",icon:"i-heroicons-check-circle",description:"No Rekening copied to clipboard!"})},w=o=>{window.open(o,"_blank")},Q=o=>{M.push(o)},L=o=>{const a=new Date,c=new Date(o),r=Math.floor((a-c)/1e3),m={year:31536e3,month:2592e3,week:604800,day:86400,hour:3600,minute:60,second:1};for(const b in m){const x=Math.floor(r/m[b]);if(x>=1)return x===1?`${x} ${b} ago`:`${x} ${b}s ago`}return"just now"},X=()=>{console.log("Logging out..."),D("token").value=null,p.value={fullname:"",photo:"",email:"",phone:"",address:"",role:"",personal_description:"",main_skills:[],additional_skills:[],is_admin:!1,is_facilitator:!1}},Z=o=>{try{return JSON.parse(o)}catch{return o}},ee=o=>new Intl.NumberFormat("id-ID",{style:"currency",currency:"IDR"}).format(o),U=async()=>{const o=z.params.id;try{const{data:a}=await H(o);A.value=[a.data.order],k.value=Z(a.data.order.comment_json)??[]}catch(a){console.error("Fetching orders failed:",a)}},te=o=>{console.log("File uploaded:",o),y.value.file_url=o};_e(()=>C.value,o=>{o==="service"&&D("token").value.user.merchant_status==="pending"&&M.push({name:"my-merchant-status"})});const se=async()=>{try{p.value=D("token").value.user||null,y.value.user={fullname:p.value.fullname,photo:p.value.photo}}catch(o){console.error("Fetching user failed:",o)}},oe=async(o,a)=>{const c=k.value??[];if(!a.message&&a.file_url&&(a.message="Here I attached a file."),!a.message&&!a.file_url){g.add({title:"Failed!",color:"red",icon:"i-heroicons-x-circle",description:"Comment message is required!"});return}c.push(a);try{const{data:r}=await N(o,{comment_json:c});g.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"Order updated successfully!"}),await U(),y.value={user:{fullname:p.value.fullname,photo:p.value.photo},message:"",time:new Date().toISOString(),file_url:"",other_link:"",is_facilitator:!1}}catch(r){console.error("Updating order failed:",r),g.add({title:"Failed!",color:"red",icon:"i-heroicons-x-circle",description:"Failed to update order!"})}},ae=async o=>{const a=z.params.id;try{const{data:c}=await N(a,{payment_file_url:o});g.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"Order updated successfully!"}),await U()}catch(c){console.error("Updating order failed:",c),g.add({title:"Failed!",color:"red",icon:"i-heroicons-x-circle",description:"Failed to update order!"})}};return me(async()=>{D("token").value&&(await se(),await U()),$.value=!1,window.scrollTo({top:0,behavior:"smooth"})}),(o,a)=>{const c=re,r=he,m=xe,b=ge,x=ve,F=ye,le=be,ne=ke;return n(),d("div",null,[pe(e("div",De,[s(Ce,{user:p.value,onLogout:X,class:"w-full"},null,8,["user"]),e("div",$e,[e("div",Oe,[je,e("div",Ue,[(n(!0),d(S,null,I(V(W),(t,P)=>(n(),v(r,{key:P,block:"",class:T(["py-3 px-3.5 flex justify-start bg-white hover:bg-[#FDF1EE] shadow-none",C.value===t.key?"bg-[#FDF1EE]":"bg-white"]),onClick:l=>C.value=t.key},{default:i(()=>[s(c,{name:t.icon,class:"text-2xl text-primary"},null,8,["name"]),e("span",Pe,u(t.label),1)]),_:2},1032,["class","onClick"]))),128))])]),C.value==="order-history"?(n(),d("div",Se,[e("div",Ie,[s(r,{variant:"link",onClick:a[0]||(a[0]=t=>Q({name:"my-client-orders"}))},{default:i(()=>[s(c,{name:"chevron-left"})]),_:1}),Te]),(n(!0),d(S,null,I(A.value,(t,P)=>(n(),v(F,{key:P,ui:{header:{padding:"px-4 py-2 sm:px-3"},body:{padding:"px-4 py-0  sm:p-3"}},class:"p-2"},{header:i(()=>[e("div",ze,[e("div",Me,[s(m,{name:"i-heroicons-language"}),e("span",Ne,u(t.merchant.type),1)]),e("div",Ae,[s(b,{variant:"soft",color:B(t.order_status).color},{default:i(()=>[e("span",Be,u(B(t.order_status).text),1)]),_:2},1032,["color"]),s(r,{variant:"link"},{default:i(()=>[s(c,{name:"dots",class:"text-md text-primary"})]),_:1})])])]),default:i(()=>[e("div",Le,[e("div",Re,[e("div",Ve,[s(x,{alt:t.merchant_user.fullname,src:t.merchant_user.photo,size:"xl",imgClass:"object-cover",class:"mb-2"},null,8,["alt","src"]),e("span",Ee,u(t.merchant_user.fullname),1),e("div",He,[e("span",Ye,[h(u(t.service.name)+" Service ",1),Ge]),e("span",Je," ("+u(t.language_source.name)+" - "+u(t.language_destination.name)+") ",1)])])]),t.order_status==="completed"?(n(),d("div",We,[t.result_file_url?(n(),d("div",qe,[Ke,s(r,{color:"primary",class:"text-white",onClick:l=>w(t.result_file_url)},{default:i(()=>[s(m,{name:"i-heroicons-arrow-down-tray"}),h(" Download ")]),_:2},1032,["onClick"])])):_("",!0),t.meet_url?(n(),d("div",Qe,[Xe,s(r,{color:"primary",onClick:l=>w(t.meet_url)},{default:i(()=>[s(m,{name:"i-heroicons-video-camera"}),h(" Open Meeting Url ")]),_:2},1032,["onClick"])])):_("",!0)])):_("",!0),t.order_status==="waitingpaid"?(n(),d("div",Ze,[et,e("h6",tt,u(ee(t.price)),1),st,e("h6",ot,[h(u(t.merchant.bank_account)+" (BCA) ",1),s(r,{size:"xs",variant:"outline",color:"blue",onClick:l=>K(t.merchant.bank_account),class:""},{default:i(()=>[s(c,{name:"copy",class:"text-lg"})]),_:2},1032,["onClick"])]),e("span",at,u(t.payment_file_url?"Re":"")+" Upload Proof of Payment ",1),O.value||!t.payment_file_url?(n(),v(E,{key:0,title:"Proof of Payment",accept:"*",center:!0,"max-size":"6291456",onFileUploaded:ae})):_("",!0),!O.value&&t.payment_file_url?(n(),v(r,{key:1,color:"primary",class:"text-white",onClick:a[1]||(a[1]=l=>O.value=!0)},{default:i(()=>[s(m,{name:"i-heroicons-arrow-path"}),h(" Reupload ")]),_:1})):_("",!0)])):_("",!0),t.order_status==="paid"?(n(),d("div",lt,[nt,it,t.meet_url?(n(),d("div",rt,[ct,s(r,{color:"primary",onClick:l=>w(t.meet_url)},{default:i(()=>[s(m,{name:"i-heroicons-video-camera"}),h(" Open Meeting Url ")]),_:2},1032,["onClick"])])):_("",!0)])):_("",!0)]),t.order_status==="paid"||t.order_status==="completed"?(n(),d("div",dt,[ut,j.value<k.value.length?(n(),v(r,{key:0,block:"",color:"primary",variant:"soft",class:"my-4 bg-blue-100 hover:bg-blue-200",onClick:a[2]||(a[2]=l=>j.value=k.value.length)},{default:i(()=>[s(m,{name:"i-heroicons-chat-bubble-oval-left-ellipsis"}),h(" Load Previous Comments ")]),_:1})):_("",!0),(n(!0),d(S,null,I(V(q),l=>(n(),d("div",{key:l},[l.is_facilitator?(n(),d("div",_t,[s(F,{ui:{body:{base:"w-full",padding:"p-4 sm:p-4"}},class:"flex gap-4 items-center w-full"},{default:i(()=>[e("div",mt,[s(x,{alt:l.user.fullname,src:l.user.photo,size:"md",imgClass:"object-cover"},null,8,["alt","src"]),e("div",pt,[e("span",ft,u(l.user.fullname),1),s(b,{variant:"soft",size:"xs",color:"blue"},{default:i(()=>[ht]),_:1})])]),e("div",xt,u(l.message),1),e("div",{class:T(["flex items-center",l.file_url?"justify-between":"justify-end"])},[l.file_url?(n(),v(r,{key:0,color:"green",variant:"soft",onClick:ie=>w(l.file_url)},{default:i(()=>[s(m,{name:"i-heroicons-arrow-down-tray"}),h(" Attached File ")]),_:2},1032,["onClick"])):_("",!0),e("span",vt,u(L(new Date(l.time))),1)],2)]),_:2},1024)])):(n(),d("div",gt,[s(F,{ui:{body:{base:"w-full",padding:"p-4 sm:p-4"}},class:"flex gap-4 items-center w-ful bg-blue-50"},{default:i(()=>[e("div",yt,[s(x,{alt:l.user.fullname,src:l.user.photo,size:"md",imgClass:"object-cover"},null,8,["alt","src"]),bt]),e("div",kt,u(l.message),1),e("div",{class:T(["flex items-center",l.file_url?"justify-between":"justify-end"])},[l.file_url?(n(),v(r,{key:0,color:"green",variant:"soft",onClick:ie=>w(l.file_url)},{default:i(()=>[s(m,{name:"i-heroicons-arrow-down-tray"}),h(" Attached File ")]),_:2},1032,["onClick"])):_("",!0),e("span",wt,u(L(new Date(l.time),{addSuffix:!0})),1)],2)]),_:2},1024)]))]))),128)),s(F,{ui:{body:{base:"w-full",padding:"p-4 sm:p-2"}},class:"flex gap-4 items-center w-full"},{default:i(()=>[s(le,{modelValue:y.value.message,"onUpdate:modelValue":a[3]||(a[3]=l=>y.value.message=l),class:"w-full mb-2",placeholder:"Add Comment...",variant:"none"},null,8,["modelValue"]),e("div",Ct,[s(E,{"is-display-file":!1,accept:"*","max-size":"6291456",onFileUploaded:te}),s(r,{color:"primary",onClick:l=>oe(t.id,y.value)},{default:i(()=>[s(m,{name:"i-heroicons-paper-airplane"}),h(" Send ")]),_:2},1032,["onClick"])])]),_:2},1024)])):_("",!0)]),_:2},1024))),128))])):_("",!0)])],512),[[fe,!$.value]]),$.value?(n(),v(we,{key:0})):_("",!0),s(ne,{isOpen:J.value,data:G.value},null,8,["isOpen","data"])])}}};export{Rt as default};