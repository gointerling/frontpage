import{_ as C}from"./bn60Kvah.js";import{_ as D,H as z,G as B,r,i as $,I as c,c as _,a as e,b as s,w as I,t as h,B as P,a4 as T,d as u,a0 as N,m as U,s as V,y as j,o as d}from"./BV1IPB9a.js";import{S as F}from"./BOJE8SZA.js";import{P as H}from"./v9KQlySo.js";import"./yxizJKZB.js";import"./qWxa958e.js";const L={class:"h-[0px]"},O={key:0,class:"flex h-screen"},R={class:"sticky top-0 h-screen"},A={class:"flex flex-col w-full bg-slate-100"},E={class:"p-6 w-full flex justify-between"},G={class:"flex gap-3 items-center"},M={class:"font-semibold"},q={class:"mx-2"},J={class:"absolute right-0 z-10 mt-10 w-48 py-1 bg-white rounded-lg shadow-lg"},K={class:"w-full h-full"},Q={__name:"merchant",setup(W){const g=z(),m=B(),f=r(!0),n=r({fullname:"",photo:""}),a=r(!1),i=r(!1),x=()=>{a.value=!a.value,localStorage.setItem("sidenav-closed",a.value)};g.params.id;const y=[{label:"Dashboard",icon:"i-heroicons-home",to:"/my/merchant/dashboard"},{label:"Orders",icon:"i-heroicons-building-storefront",to:"/my/merchant/orders"}],b=async()=>{try{n.value=c("token").value.user||null}catch(t){console.error("Fetching user failed:",t)}finally{f.value=!1}},p=t=>{m.push(t)},w=()=>{const t=c("token");t.value=null,i.value=!1,m.push("/auth/login")};return $(async()=>{a.value=localStorage.getItem("sidenav-closed")==="true",c("token").value&&await b(),window.scrollTo({top:0,behavior:"smooth"})}),(t,o)=>{const l=C,k=V,S=j;return d(),_("div",L,[f.value?(d(),U(H,{key:1})):(d(),_("div",O,[e("div",R,[s(F,{navs:y,isSmallSize:a.value,title:"Dash"},null,8,["isSmallSize"])]),e("div",A,[e("nav",E,[e("div",G,[s(k,{class:"p-2 bg-gray-300",onClick:x},{default:I(()=>[s(l,{name:"sidebar",class:"text-white"})]),_:1}),e("span",M,h(t.menuTitle||"Facilitator Dashboard"),1)]),e("button",{onClick:o[0]||(o[0]=v=>i.value=!i.value),class:"flex items-center align-middle text-sm font-medium text-gray-900 rounded-full focus:outline-none focus:shadow-outline"},[s(S,{alt:n.value.fullname??"",src:n.value.photo,size:"sm",imgClass:"object-cover"},null,8,["alt","src"]),e("span",q,h(n.value.fullname??""),1),s(l,{name:"chevron-simple-down",class:"mx-4",filled:""})]),P(e("div",J,[e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:o[1]||(o[1]=v=>p({name:"profile"}))},[s(l,{name:"user-circle",class:"text-2xl"}),u(" Profile ")]),e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:o[2]||(o[2]=v=>p({name:"index"}))},[s(l,{name:"home",class:"text-2xl"}),u(" Home ")]),e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:w},[s(l,{name:"logout",class:"text-2xl"}),u(" Sign out ")])],512),[[T,i.value]])]),e("div",K,[N(t.$slots,"default",{},void 0,!0)])])]))])}}},oe=D(Q,[["__scopeId","data-v-c6eedd3f"]]);export{oe as default};
