import{_ as A}from"./4QMAxoic.js";import{g as I,G as W,r as v,i as J,o as i,c as d,a as e,b as s,w as h,j as c,m as f,n as m,v as g,t as K,d as r,B as V,a3 as H,I as Q,e as X,y as Z,s as ee}from"./Csvhc2Mt.js";import{_ as te}from"./C_5G3v2K.js";const se={class:"absolute px-4 sm:px-24 top-6 w-full z-50"},ne={class:"bg-white rounded-full shadow min-w-full"},ae={class:"flex justify-between h-16 px-8 sm:px-8"},oe={class:"flex gap-4 items-center"},le={class:"flex-shrink-0 flex items-center align-middle"},ie=e("span",{class:"text-primary ml-2"},"gointerling",-1),re=e("span",{class:"text-gray-900"}," Facilitators List ",-1),ce={class:"md:hidden flex items-center gap-3"},ue={class:"hidden md:flex sm:items-center sm:space-x-8 justify-between"},de={key:0,class:"flex items-center gap-2"},me={key:1,class:"flex items-center gap-2"},xe={class:"mx-2 capitalize"},ge={key:0,class:"md:hidden bg-white rounded-lg mt-2 z-50 shadow-md"},fe={class:"px-2 pt-2 pb-3 space-y-1 rounded-none"},ye={key:0,class:"flex flex-col space-y-2"},pe={key:1,class:"flex flex-col space-y-2"},be={class:"flex justify-between px-4 items-center border-b border-gray-200"},ve=e("span",{class:"uppercase text-primary font-semibold"},"Notifications",-1),he=e("button",{class:"w-full flex justify-start gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200",href:"#"}," Your order has been received and is now being processed. Thank you for choosing Gointering! ",-1),ke=e("button",{class:"w-full flex justify-start gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 border-b border-gray-200",href:"#"}," Your order has been received and is now being processed. Thank you for choosing Gointering! ",-1),$e={__name:"Navbar",props:{user:{type:Object,default:null}},emits:["update"],setup(l,{emit:D}){const G=I(),k=W(),x=v(!1),u=v(!1),y=v(!1),p=v(!1),L=D,a=b=>{k.push(b)},_=()=>{u.value=!u.value,y.value=!1,x.value=!1},E=()=>{x.value=!x.value,u.value=!1},P=()=>{y.value=!y.value,x.value=!1,u.value=!1},C=()=>{const b=Q("token");b.value=null,x.value=!1,L("logout"),G.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"Successfully signed out!"}),k.currentRoute.value.name!=="index"&&k.push({name:"auth-login"})},$=()=>{p.value=window.innerWidth<900};return J(()=>{$(),window.addEventListener("resize",$)}),(b,t)=>{var z,q,j,N,B,M,F,O,T,U;const n=A,w=X,R=Z,S=te,Y=ee;return i(),d("div",se,[e("nav",ne,[e("div",ae,[e("div",oe,[s(w,{to:{name:"index"},class:"flex-shrink-0 flex items-center align-middle"},{default:h(()=>[e("div",le,[s(n,{name:"logo",class:"text-primary text-3xl"}),ie])]),_:1}),c(p)?m("",!0):(i(),f(w,{key:0,to:{name:"facilitators"},class:"inline-flex items-center px-1 font-semibold border-primary text-gray-900 focus:outline-none focus:border-blue-900 transition duration-150 ease-in-out"},{default:h(()=>[re]),_:1}))]),e("div",ce,[e("button",{onClick:t[0]||(t[0]=o=>a({name:"admin-dashboard",query:{as:"admin"}}))},[((z=l.user)==null?void 0:z.is_admin)===1?(i(),f(n,{key:0,name:"admin",class:"text-2xl",filled:""})):m("",!0)]),e("button",{onClick:t[1]||(t[1]=o=>a({name:"packages"}))},[s(n,{name:"badge",class:"text-2xl",filled:""})]),e("button",{onClick:t[2]||(t[2]=o=>a({name:"my-client-orders",query:{section:"order-history"}}))},[s(n,{name:"order",class:"text-2xl",filled:""})]),e("button",{onClick:_,class:g(c(u)?"bg-primary text-white p-2 rounded-full":"p-2")},[s(n,{name:"notification",class:g(["text-xl",c(u)?"text-white":"text-primary"])},null,8,["class"])],2),e("button",{onClick:P,class:"text-gray-900 focus:outline-none"},[s(n,{name:"menu",class:"text-lg text-primary"})])]),e("div",ue,[l.user?(i(),d("div",me,[e("button",{class:"p-2 rounded-full",onClick:t[5]||(t[5]=o=>a({name:"admin-dashboard",query:{as:"admin"}}))},[l.user.is_admin===1?(i(),f(n,{key:0,name:"admin",class:"text-2xl",filled:""})):m("",!0)]),e("button",{class:"p-2 rounded-full",onClick:t[6]||(t[6]=o=>a({name:"packages"}))},[s(n,{name:"badge",class:"text-2xl",filled:""})]),e("button",{class:"p-2 rounded-full",onClick:t[7]||(t[7]=o=>a({name:"my-client-orders",query:{section:"order-history"}}))},[s(n,{name:"order",class:"text-2xl",filled:""})]),e("button",{onClick:_,class:g(c(u)?"bg-primary text-white p-2 rounded-full":"p-2")},[s(n,{name:"notification",class:g(["text-2xl",c(u)?"text-white":"text-primary"])},null,8,["class"])],2),e("button",{onClick:E,class:"flex items-center text-sm font-medium text-gray-900 rounded-full focus:outline-none focus:shadow-outline"},[s(R,{alt:(q=l.user)==null?void 0:q.fullname,src:(j=l.user)==null?void 0:j.photo,size:"sm",imgClass:"object-cover"},null,8,["alt","src"]),e("span",xe,K((N=l.user)==null?void 0:N.fullname),1),s(n,{name:"chevron-simple-down",class:"mx-4",filled:""})])])):(i(),d("div",de,[e("button",{class:"px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out",onClick:t[3]||(t[3]=o=>a({name:"auth-login",query:{as:"user"}}))}," Sign in as User "),e("button",{class:"px-4 py-2 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out",onClick:t[4]||(t[4]=o=>a({name:"auth-login",query:{as:"facilitator"}}))}," Sign in as Facilitator ")]))])])]),c(y)?(i(),d("div",ge,[e("div",fe,[l.user?(i(),d("div",pe,[s(w,{to:{name:"facilitators"},class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},{default:h(()=>[s(n,{name:"user-group",class:"text-2xl"}),r(" Facilitators List ")]),_:1}),e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:t[10]||(t[10]=o=>a({name:"profile"}))},[s(n,{name:"user-circle",class:"text-2xl"}),r(" Profile ")]),e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:t[11]||(t[11]=o=>a({name:"index"}))},[s(n,{name:"home",class:"text-2xl"}),r(" Home ")]),e("button",{onClick:t[12]||(t[12]=o=>a({name:"my-client-orders",query:{section:"order-history"}})),class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},[s(n,{name:"history",class:"text-2xl"}),r(" Order History ")]),(B=l.user)!=null&&B.is_facilitator?(i(),d("button",{key:0,class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:t[13]||(t[13]=o=>a({name:"my-merchant-dashboard"}))},[s(n,{name:"merchant",class:"text-2xl"}),r(" Facilitator "),((M=l.user)==null?void 0:M.merchant_status)==="pending"?(i(),f(S,{key:0,color:"orange",label:(F=l.user)==null?void 0:F.merchant_status,variant:"soft",class:"uppercase"},null,8,["label"])):m("",!0)])):m("",!0),e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",href:"#",onClick:C},[s(n,{name:"logout",class:"text-2xl"}),r(" Sign out ")])])):(i(),d("div",ye,[e("button",{class:"px-4 py-2 text-sm font-medium text-white bg-accent rounded-lg hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out",onClick:t[8]||(t[8]=o=>a({name:"auth-login",query:{as:"user"}}))}," Sign in as User "),e("button",{class:"px-4 py-2 text-sm font-medium text-accent border border-accent rounded-lg hover:bg-accent-700 focus:outline-none focus:bg-accent-500 transition duration-150 ease-in-out",onClick:t[9]||(t[9]=o=>a({name:"auth-login",query:{as:"facilitator"}}))}," Sign in as Facilitator ")]))])])):m("",!0),V(e("div",{class:g(c(p)?"mt-2 bg-white rounded-lg shadow-lg z-10":"absolute right-24 z-10 mt-2 w-96 py-1 bg-white rounded-lg shadow-lg")},[e("div",be,[ve,s(Y,{variant:"link",color:"red"},{default:h(()=>[r("Mark all as read")]),_:1})]),he,ke],2),[[H,c(u)]]),V(e("div",{class:g(c(p)?"z-10 mt-2 w-58 py-1 bg-white rounded-lg shadow-lg":" absolute right-24 z-12  w-58 py-1 bg-white rounded-lg shadow-lg")},[e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:t[14]||(t[14]=o=>a({name:"profile"}))},[s(n,{name:"user-circle",class:"text-2xl"}),r(" Profile ")]),e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:t[15]||(t[15]=o=>a({name:"index"}))},[s(n,{name:"home",class:"text-2xl"}),r(" Home ")]),e("button",{onClick:t[16]||(t[16]=o=>a({name:"my-client-orders",query:{section:"order-history"}})),class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"},[s(n,{name:"history",class:"text-2xl"}),r(" Order History ")]),(O=l.user)!=null&&O.is_facilitator?(i(),d("button",{key:0,class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",onClick:t[17]||(t[17]=o=>a({name:"my-merchant-dashboard"}))},[s(n,{name:"merchant",class:"text-2xl"}),r(" Facilitator "),((T=l.user)==null?void 0:T.merchant_status)==="pending"?(i(),f(S,{key:0,color:"orange",label:(U=l.user)==null?void 0:U.merchant_status,variant:"soft",class:"uppercase"},null,8,["label"])):m("",!0)])):m("",!0),e("button",{class:"w-full flex gap-2 align-middle items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",href:"#",onClick:C},[s(n,{name:"logout",class:"text-2xl"}),r(" Sign out ")])],2),[[H,c(x)]])])}}};export{$e as _};
