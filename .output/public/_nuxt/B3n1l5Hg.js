import{_ as Y}from"./CGyI2hQu.js";import{g as G,L as H,r as C,o as c,c as m,a as e,b as s,w as f,d as i,l as $,q as p,n as N,k as x,t as L,Y as B,a2 as S,B as R,e as A,v as E,s as M}from"./BTSDszUJ.js";import{_ as P}from"./CDkhUFr5.js";const I={class:"relative px-24 top-6"},J={class:"bg-white rounded-full shadow min-w-full"},K={class:"flex justify-between h-16 px-8"},Q={class:"flex"},W={class:"flex-shrink-0 flex items-center align-middle"},X=e("span",{class:"text-primary ml-2"},"gointerling",-1),Z={class:"hidden sm:ml-6 sm:flex sm:space-x-8"},ee={key:0,class:"hidden sm:ml-6 sm:flex sm:items-center gap-2"},te={key:1,class:"py-4"},se={class:"sm:ml-6 sm:flex sm:items-center"},ne={class:"relative flex gap-1"},oe={class:"flex align-middle items-center gap-6 mr-4"},ae={class:"mx-2 capitalize"},le={class:"absolute right-0 z-10 mt-12 w-58 py-1 bg-white rounded-lg shadow-lg"},ie={class:"absolute right-20 z-10 mt-12 w-96 py-1 bg-white rounded-lg shadow-lg"},re={class:"flex justify-between px-4 items-center border-b border-gray-200"},ce=e("span",{class:"uppercase text-primary font-semibold"}," Notifications ",-1),de=e("button",{class:"w-full flex justify-start gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200",href:"#"}," Your order has been received and is now being processed. Thank you for choosing Gointering! ",-1),ue=e("button",{class:"w-full flex justify-start gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200",href:"#"}," Your order has been received and is now being processed. Thank you for choosing Gointering! ",-1),fe={__name:"Navbar",props:{user:{type:Object,default:null}},emits:["update"],setup(a,{emit:j}){const z=G(),g=H(),d=C(!1),r=C(!1),T=j,o=u=>{g.push(u)},q=()=>{r.value=!r.value,d.value=!1},O=()=>{d.value=!d.value,r.value=!1},U=()=>{const u=R("token");u.value=null,d.value=!1,T("logout"),z.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"Successfully signed out!"}),g.currentRoute.value.name!=="index"&&g.push({name:"auth-login"})};return(u,t)=>{var y,h,v,_,k,w;const n=Y,b=A,V=E,D=P,F=M;return c(),m("div",I,[e("nav",J,[e("div",K,[e("div",Q,[s(b,{to:{name:"index"},class:"flex-shrink-0 flex items-center align-middle"},{default:f(()=>[e("div",W,[s(n,{name:"logo",class:"text-primary text-3xl"}),X])]),_:1}),e("div",Z,[s(b,{to:{name:"facilitators"},class:"inline-flex items-center px-1 pt-1 font-semibold border-primary text-sm leading-5 text-gray-900 focus:outline-none focus:border-blue-900 transition duration-150 ease-in-out"},{default:f(()=>[i(" Facilitators List ")]),_:1})])]),a.user?(c(),m("div",te,[e("div",se,[e("div",ne,[e("div",oe,[e("button",{onClick:t[2]||(t[2]=l=>o({name:"admin-dashboard",query:{as:"admin"}}))},[a.user.is_admin===1?(c(),$(n,{key:0,name:"admin",class:"text-2xl",filled:""})):p("",!0)]),e("button",{onClick:t[3]||(t[3]=l=>o({name:"notification"}))},[s(n,{name:"badge",class:"text-2xl",filled:""})]),e("button",{onClick:t[4]||(t[4]=l=>o({name:"my-client-orders"}))},[s(n,{name:"order",class:"text-2xl",filled:""})]),e("button",{onClick:q,class:N(x(r)?"bg-primary text-white p-2 rounded-full":"p-2")},[s(n,{name:"notification",class:N(["text-xl",x(r)?"text-white":"text-primary"])},null,8,["class"])],2)]),e("button",{onClick:O,class:"flex items-center align-middle text-sm font-medium text-gray-900 rounded-full focus:outline-none focus:shadow-outline"},[s(V,{alt:(y=a.user)==null?void 0:y.fullname,src:(h=a.user)==null?void 0:h.photo,size:"sm",imgClass:"object-cover"},null,8,["alt","src"]),e("span",ae,L((v=a.user)==null?void 0:v.fullname),1),s(n,{name:"chevron-simple-down",class:"mx-4",filled:""})]),B(e("div",le,[e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:t[5]||(t[5]=l=>o({name:"profile"}))},[s(n,{name:"user-circle",class:"text-2xl"}),i(" Profile ")]),e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:t[6]||(t[6]=l=>o({name:"index"}))},[s(n,{name:"home",class:"text-2xl"}),i(" Home ")]),e("button",{onClick:t[7]||(t[7]=l=>o({name:"my-client-orders"})),class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},[s(n,{name:"history",class:"text-2xl"}),i(" Order History ")]),(_=a.user)!=null&&_.is_facilitator?(c(),m("button",{key:0,class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:t[8]||(t[8]=l=>o({name:"my-merchant-dashboard"}))},[s(n,{name:"merchant",class:"text-2xl"}),i(" Facilitator "),((k=a.user)==null?void 0:k.merchant_status)==="pending"?(c(),$(D,{key:0,color:"orange",label:(w=a.user)==null?void 0:w.merchant_status,variant:"soft",class:"uppercase"},null,8,["label"])):p("",!0)])):p("",!0),e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",href:"#",onClick:U},[s(n,{name:"logout",class:"text-2xl"}),i(" Sign out ")])],512),[[S,x(d)]]),B(e("div",ie,[e("div",re,[ce,s(F,{variant:"link",color:"red",class:""},{default:f(()=>[i(" Mark all as read ")]),_:1})]),de,ue],512),[[S,x(r)]])])])])):(c(),m("div",ee,[e("button",{class:"px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out",onClick:t[0]||(t[0]=l=>o({name:"auth-login",query:{as:"user"}}))}," Sign in as User "),e("button",{class:"px-4 py-2 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out",onClick:t[1]||(t[1]=l=>o({name:"auth-login",query:{as:"facilitator"}}))}," Sign in as Facilitator ")]))])])])}}};export{fe as _};
