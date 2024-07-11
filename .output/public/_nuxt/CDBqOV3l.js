import{P as J}from"./Cz7ufH-W.js";import{_ as K}from"./BmZ1ThBO.js";import{_ as Q}from"./D9Tq0se6.js";import{_ as W}from"./7QM56ELz.js";import{y as X,g as Z,z as ee,A as E,r as c,B as F,h as te,i as se,c as i,l as le,a as s,b as t,d as m,k as p,w as o,T as ae,o as n,t as T,C as A,s as oe}from"./BqGgLAbD.js";import{_ as ne}from"./CU0igqJf.js";import{_ as ie}from"./CiJWYD_i.js";import{w as re,l as N}from"./CwB-luOM.js";import{c as O,a as x,b as ue}from"./M1_3KTZr.js";import"./Gzy-iuwg.js";import"./Cu9O3nsD.js";const ce=()=>{const{$axios:f}=X();return{login(y){return f.post("/auth/login",y)},register(y){return f.post("/auth/register",y)},logout(){return f.post("/auth/logout")},getUser(){return f.get("/auth/user")},getTestData(){return f.get("/test")}}},de={key:1,class:"flex justify-center items-center h-screen background"},me={class:"bg-white rounded-lg shadow-md grid grid-cols-2 gap-2"},pe={class:"flex flex-col justify-between bg-accent rounded-l-lg"},fe={class:"w-full h-full flex justify-center"},ge=["src"],_e={class:"relative w-full px-3"},he={key:"login",class:"px-10 py-8"},ve=["src"],xe={class:"text-2xl font-bold my-6 text-primary"},ye={class:"relative"},we={key:0,class:"flex items-center gap-1"},be={key:1,class:"flex items-center gap-1"},ke={class:"w-full bg-white py-2 rounded-md flex gap-2 justify-center items-center border-2 border-gray-100"},Ve={class:"mt-4 flex justify-between text-sm text-gray-600"},qe={key:"register",class:"px-10 py-8"},Pe=["src"],Ce={class:"text-2xl font-bold my-6 text-primary"},Ue={class:"relative"},Se={key:0,class:"flex items-center gap-1"},$e={key:1,class:"flex items-center gap-1"},je={class:"relative"},Be={key:0,class:"flex items-center gap-1"},Le={key:1,class:"flex items-center gap-1"},Re={class:"w-full bg-white py-2 rounded-md flex gap-2 justify-center items-center border-2 border-gray-100"},Ee={class:"mt-4 flex justify-between text-sm text-gray-600"},He={__name:"login",setup(f){const{login:y,register:D}=ce(),w=Z(),V=ee();E();const{as:b,type:I}=E().query,g=c("clinton@example.com"),_=c("12345678"),q=c(""),P=c("Sir Alex");F("token");const k=c("login"),S=c(!0),d=c(!1),u=c(!1),M=O().shape({email:x().email("Invalid email").required("Email is required"),password:x().required("Password is required")}),G=O().shape({fullname:x().required("Full name is required"),email:x().email("Invalid email").required("Email is required"),password:x().required("Password is required"),confirmPassword:x().oneOf([ue("password"),null],"Passwords must match").required("Confirm password is required")}),$=l=>{k.value=l,V.push({query:{as:b,type:l}})},j=async()=>{d.value=!0;const l={email:g.value,password:_.value};await y(l).then(e=>{const U=F("token");U.value=e.data.data,d.value=!1,w.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"You have successfully logged in!"}),V.push("/")}).catch(e=>{console.error(e),w.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-exclamation-triangle",description:e.response.data.error}),d.value=!1})},Y=async()=>{d.value=!0;const l={fullname:P.value,email:g.value,password:_.value,password_confirmation:q.value,as:b==="facilitator"?"facilitator":"client"};await D(l).then(e=>{w.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"You have successfully registered!"}),j()}).catch(e=>{d.value=!1,console.error(e),w.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-exclamation-triangle",description:z(e.response.data.error)})})},z=l=>{for(const e in l)if(l[e].length>0)return l[e][0];return null},H=l=>{V.push(l)},C=()=>{u.value=!u.value};return te(()=>I,l=>{l==="register"?k.value="register":k.value="login"},{immediate:!0}),se(()=>{S.value=!1}),(l,e)=>{const U=J,r=K,h=Q,v=W,B=oe,L=ne,R=ie;return n(),i("div",null,[S.value?(n(),le(U,{key:0})):(n(),i("div",de,[s("div",me,[s("div",pe,[s("button",{class:"flex gap-2 items-center justify-start mx-8 mt-8 text-white",onClick:e[0]||(e[0]=a=>H("/"))},[t(r,{name:"back",class:"text-white"}),m(" Back ")]),s("div",fe,[s("img",{src:p(re),class:"px-4 w-[300px] h-full"},null,8,ge)])]),s("div",_e,[t(ae,{name:"fade",mode:"out-in"},{default:o(()=>[k.value==="login"?(n(),i("div",he,[s("img",{src:p(N),class:"my-4 w-32"},null,8,ve),s("h1",xe," Login "+T(p(b)==="facilitator"?"as Facilitator":""),1),t(L,{"validation-schema":p(M),onSubmit:j},{default:o(()=>[t(v,{name:"email",label:"Email",class:"mb-2"},{default:o(()=>[t(h,{type:"email",modelValue:g.value,"onUpdate:modelValue":e[1]||(e[1]=a=>g.value=a),required:"",class:"w-full"},null,8,["modelValue"])]),_:1}),t(v,{name:"password",label:"Password",class:"mb-2"},{default:o(()=>[s("div",ye,[t(h,{type:u.value?"text":"password",modelValue:_.value,"onUpdate:modelValue":e[2]||(e[2]=a=>_.value=a),required:"",class:"w-full"},null,8,["type","modelValue"]),s("button",{type:"button",onClick:C,class:"absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"},[u.value?(n(),i("span",we,[t(r,{name:"eye-off",filled:"",class:"text-lg"})])):(n(),i("span",be,[t(r,{name:"eye",filled:"",class:"text-lg"})]))])])]),_:1}),t(B,{type:"submit",loading:d.value,block:"",class:"w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"},{default:o(()=>[m(" Login ")]),_:1},8,["loading"])]),_:1},8,["validation-schema"]),t(R,{label:"OR",class:"py-2 mt-4"}),s("button",ke,[t(r,{name:"google",filled:""}),m(" Continue with Google ")]),s("p",Ve,[m(" Don't have an account? "),s("a",{href:"#",onClick:e[3]||(e[3]=A(a=>$("register"),["prevent"])),class:"text-blue-500 hover:underline"}," Register ")])])):(n(),i("div",qe,[s("div",null,[s("img",{src:p(N),class:"my-4 w-32"},null,8,Pe),s("h1",Ce," Register "+T(p(b)==="facilitator"?"as Facilitator":""),1),t(L,{"validation-schema":p(G),onSubmit:Y},{default:o(()=>[t(v,{name:"fullname",label:"Full Name",class:"mb-2"},{default:o(()=>[t(h,{modelValue:P.value,"onUpdate:modelValue":e[4]||(e[4]=a=>P.value=a),required:"",class:"w-full"},null,8,["modelValue"])]),_:1}),t(v,{name:"email",label:"Email",class:"mb-2"},{default:o(()=>[t(h,{type:"email",modelValue:g.value,"onUpdate:modelValue":e[5]||(e[5]=a=>g.value=a),required:"",class:"w-full"},null,8,["modelValue"])]),_:1}),t(v,{name:"password",label:"Password",class:"mb-2"},{default:o(()=>[s("div",Ue,[t(h,{type:u.value?"text":"password",modelValue:_.value,"onUpdate:modelValue":e[6]||(e[6]=a=>_.value=a),required:"",class:"w-full"},null,8,["type","modelValue"]),s("button",{type:"button",onClick:C,class:"absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"},[u.value?(n(),i("span",Se,[t(r,{name:"eye-off",filled:"",class:"text-lg"})])):(n(),i("span",$e,[t(r,{name:"eye",filled:"",class:"text-lg"})]))])])]),_:1}),t(v,{name:"confirmPassword",label:"Confirm Password",class:"mb-2"},{default:o(()=>[s("div",je,[t(h,{type:u.value?"text":"password",modelValue:q.value,"onUpdate:modelValue":e[7]||(e[7]=a=>q.value=a),required:"",class:"w-full"},null,8,["type","modelValue"]),s("button",{type:"button",onClick:C,class:"absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"},[u.value?(n(),i("span",Be,[t(r,{name:"eye-off",filled:"",class:"text-lg"})])):(n(),i("span",Le,[t(r,{name:"eye",filled:"",class:"text-lg"})]))])])]),_:1}),t(B,{type:"submit",loading:d.value,block:"",class:"w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"},{default:o(()=>[m(" Sign Up ")]),_:1},8,["loading"])]),_:1},8,["validation-schema"]),t(R,{label:"OR",class:"py-2 mt-4"}),s("button",Re,[t(r,{name:"google",filled:""}),m(" Continue with Google ")]),s("p",Ee,[m(" Already have an account? "),s("a",{href:"#",onClick:e[8]||(e[8]=A(a=>$("login"),["prevent"])),class:"text-blue-500 hover:underline"}," Login ")])])]))]),_:1})])])]))])}}};export{He as default};