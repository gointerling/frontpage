import{_ as j}from"./BmZ1ThBO.js";import{_ as B}from"./Cv-5lGWN.js";import{x as M,L as C,r,i as T,B as u,c as f,k as s,b as n,w as p,l as U,o as m,a,n as F,t as P,d as h,s as R}from"./BqGgLAbD.js";import{_ as z}from"./fMf9s-QS.js";import{h as L}from"./D2PmVeZP.js";import{P as N}from"./Cz7ufH-W.js";import{u as V}from"./Dn3voqrv.js";const $={key:0,class:"w-full h-screen flex items-center justify-center bg-slate-200"},A={class:"flex gap-4 p-4 h-full"},D={class:"flex align-middle justify-center items-center"},E=["src"],G={class:"px-6 min-w-[400px] py-4"},I=a("h6",{class:"text-2xl font-semibold text-primary max-w-sm py-3"},[h(" Greets our "),a("br"),a("b",{class:"text-accent text-3xl"},"Facilitators"),h("! ")],-1),q=a("h5",{class:"text-xl font-bold text-gray-800 mb-2"}," Status Pengajuan ",-1),H={class:"text-gray-600 text-sm leading-relaxed max-w-xs py-4"},J=a("span",null," Menu Utama ",-1),te={__name:"status",setup(K){M();const l=C(),{getMyMerchants:g}=V(),d=r(!0),_=r(!0),x=r(null),t=r({}),v=async()=>{const{data:e}=await g(),o=e.data.user.merchants[0].is_first_time===1,i=e.data.user.merchants[0].status==="verified",c=e.data.user.merchants[0].status;u("token").value.user.merchant_status=c,i&&l.push({name:"my-merchant-dashboard"}),o&&l.push({name:"my-merchant-onboarding"}),y(e.data.user.merchants[0].status),_.value=!1},y=e=>{e=="pending"&&(t.value={label:"pending",color:"orange",message:"Status pengajuan anda sedang dalam proses verifikasi oleh tim kami. Mohon tunggu hingga proses verifikasi selesai."}),e=="inactive"&&(t.value={label:"inactive",color:"gray",message:"Status anda sedang di non-aktifkan, mohon hubungi tim kami untuk informasi lebih lanjut."}),e=="verified"&&(t.value={label:"verified",color:"blue",message:"Selamat! Status pengajuan anda telah diverifikasi oleh tim kami. Anda dapat menggunakan layanan kami sekarang."})},k=async()=>{try{x.value=u("token").value.user||null}catch(e){console.error("Fetching user failed:",e)}finally{d.value=!1}},b=e=>{l.push(e)};return T(async()=>{await v(),_.value||u("token").value&&await k(),window.scrollTo({top:0,behavior:"smooth"})}),(e,o)=>{const i=j,c=B,w=R,S=z;return m(),f("div",null,[s(d)?(m(),U(N,{key:1})):(m(),f("div",$,[n(S,{ui:{body:{padding:"p-0",base:"h-full"}},class:"min-w-[750px] min-h-[400px] flex items-center justify-center"},{default:p(()=>[a("div",A,[a("div",D,[a("img",{src:s(L),width:"300px"},null,8,E)]),a("div",G,[n(i,{name:"logo",filled:"",class:"text-4xl"}),I,q,n(c,{label:s(t).label,color:s(t).color,variant:"soft",size:"md",class:F(["capitalize",s(t).color==="gray"?"bg-slate-50 text-gray-700":""])},null,8,["label","color","class"]),a("p",H,P(s(t).message),1),n(w,{onClick:o[0]||(o[0]=O=>b("/"))},{default:p(()=>[n(i,{name:"chevron-left"}),J]),_:1})])])]),_:1})]))])}}};export{te as default};
