import{_ as C}from"./B52gz1F6.js";import{x as D,D as z,r,j as B,B as u,c as T,X as g,Y as p,a as e,b as s,w as U,t as h,d as m,U as $,l as N,q as P,s as V,v as A,o as x}from"./REdEvUJb.js";import{S as j}from"./DSRULzDw.js";import{P as I}from"./CiKglmt2.js";import"./C0epL_Xs.js";const L={class:"flex"},M={class:"flex flex-col w-full bg-slate-100"},R={class:"p-6 w-full flex justify-between"},q={class:"flex gap-3 items-center"},E={class:"font-semibold"},F={class:"mx-2"},H={class:"absolute right-0 z-10 mt-10 w-48 py-1 bg-white rounded-lg shadow-lg"},O={class:"w-full"},W={__name:"admin",setup(X){D();const d=z(),c=r(!0),n=r({fullname:"",photo:""}),a=r(!1),i=r(!1),_=()=>{a.value=!a.value,localStorage.setItem("sidenav-closed",a.value)},b=[{label:"Dashboard",icon:"i-heroicons-home",to:"/admin/dashboard"},{label:"Transactions",icon:"i-heroicons-chart-bar",to:"/admin/transactions"},{label:"Merchants",icon:"i-heroicons-building-storefront",to:"/admin/merchants"},{label:"Users",icon:"i-heroicons-users",to:"/admin/users"}],w=async()=>{try{n.value=u("token").value.user||null}catch(t){console.error("Fetching user failed:",t)}},y=()=>{const t=u("token");t.value=null,i.value=!1,d.push("/auth/login")},f=t=>{d.push(t)};return B(async()=>{a.value=localStorage.getItem("sidenav-closed")==="true",u("token").value&&await w(),c.value=!1,window.scrollTo({top:0,behavior:"smooth"})}),(t,o)=>{const l=C,S=V,k=A;return x(),T("div",null,[g(e("div",L,[s(j,{navs:b,isSmallSize:a.value,title:"Admin"},null,8,["isSmallSize"]),e("div",M,[e("nav",R,[e("div",q,[s(S,{class:"p-2 bg-gray-300",onClick:_},{default:U(()=>[s(l,{name:"sidebar",class:"text-white"})]),_:1}),e("span",E,h(t.menuTitle||"Admin Dashboard"),1)]),e("button",{onClick:o[0]||(o[0]=v=>i.value=!i.value),class:"flex items-center align-middle text-sm font-medium text-gray-900 rounded-full focus:outline-none focus:shadow-outline"},[s(k,{alt:n.value.fullname??"",src:n.value.photo,size:"sm"},null,8,["alt","src"]),e("span",F,h(n.value.fullname??""),1),s(l,{name:"chevron-simple-down",class:"mx-4",filled:""})]),g(e("div",H,[e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:o[1]||(o[1]=v=>f({name:"profile"}))},[s(l,{name:"user-circle",class:"text-2xl"}),m(" Profile ")]),e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:o[2]||(o[2]=v=>f({name:"index"}))},[s(l,{name:"home",class:"text-2xl"}),m(" Home ")]),e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",href:"#",onClick:y},[s(l,{name:"logout",class:"text-2xl"}),m(" Sign out ")])],512),[[p,i.value]])]),e("div",O,[$(t.$slots,"default")])])],512),[[p,!c.value]]),c.value?(x(),N(I,{key:0})):P("",!0)])}}};export{W as default};
