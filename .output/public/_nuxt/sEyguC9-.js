import{P as Z}from"./8Dp3EZOO.js";import{_ as ee}from"./BtXf7Omx.js";import{_ as te}from"./DEvyVJwO.js";import{_ as se}from"./Ck8IaxLf.js";import{z as oe,g as le,L as ae,M as O,r as d,I as S,h as ne,i as ie,c as i,m as re,a as s,b as t,d as p,j as f,w as a,T as ce,o as n,t as A,A as N,s as de}from"./Ba_SD_ms.js";import{_ as ue}from"./DQbzlWbA.js";import{_ as me}from"./D8-7vCBC.js";import{w as ge,l as D}from"./GEtotvee.js";import{c as I,a as w,b as pe}from"./M1_3KTZr.js";import{useTokenClient as fe}from"./DZSWvbh5.js";import"./dae4aEUn.js";import"./CXDT6qt3.js";const _e=()=>{const{$axios:m}=oe();return{login(g){return m.post("/auth/login",g)},register(g){return m.post("/auth/register",g)},logout(){return m.post("/auth/logout")},getUser(){return m.get("/auth/user")},getTestData(){return m.get("/test")},verifyGoogleToken(g){return m.post("/auth/sso/google/verify",g)}}},he={key:1,class:"flex justify-center items-center min-h-screen background p-4 md:p-0"},ve={class:"bg-white rounded-lg shadow-md w-full md:w-auto grid grid-cols-1 md:grid-cols-2 gap-2"},xe={class:"flex flex-col justify-between bg-accent rounded-t-lg md:rounded-l-lg md:rounded-tr-none"},ye={class:"grow w-full flex flex-col items-center justify-center p-4"},we=["src"],be={class:"relative w-full px-3"},ke={key:"login",class:"px-4 md:px-10 py-8"},Ve=["src"],qe={class:"text-2xl font-bold my-6 text-primary text-center md:text-left"},Ce={class:"relative"},Pe={key:0,class:"flex items-center gap-1"},Le={key:1,class:"flex items-center gap-1"},Se=["disabled"],Ue={class:"mt-4 flex justify-between text-sm text-gray-600"},Te={key:"register",class:"px-4 md:px-10 py-8"},je=["src"],Ee={class:"text-2xl font-bold my-6 text-primary text-center md:text-left"},Re={class:"relative"},$e={key:0,class:"flex items-center gap-1"},Be={key:1,class:"flex items-center gap-1"},Fe={class:"relative"},Ge={key:0,class:"flex items-center gap-1"},Oe={key:1,class:"flex items-center gap-1"},Ae=["disabled"],Ne={class:"mt-4 flex justify-between text-sm text-gray-600"},st={__name:"login",setup(m){const{login:g,register:M,verifyGoogleToken:Y}=_e(),_=le(),V=ae();O();const{as:b,type:z}=O().query,h=d(""),v=d(""),C=d(""),P=d("");S("token");const q=d("login"),U=d(!0),r=d(!1),u=d(!1),H=I().shape({email:w().email("Invalid email").required("Email is required"),password:w().required("Password is required")}),J=I().shape({fullname:w().required("Full name is required"),email:w().email("Invalid email").required("Email is required"),password:w().required("Password is required"),confirmPassword:w().oneOf([pe("password"),null],"Passwords must match").required("Confirm password is required")}),T=o=>{q.value=o,V.push({query:{as:b,type:o}})},j=async()=>{r.value=!0;const o={email:h.value,password:v.value};await g(o).then(e=>{const k=S("token");k.value=e.data.data,r.value=!1,_.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"You have successfully logged in!"}),V.push("/")}).catch(e=>{console.error(e),_.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-exclamation-triangle",description:e.response.data.error}),r.value=!1})},K=async()=>{r.value=!0;const o={fullname:P.value,email:h.value,password:v.value,password_confirmation:C.value,as:b==="facilitator"?"facilitator":"client"};await M(o).then(e=>{_.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"You have successfully registered!"}),j()}).catch(e=>{r.value=!1,console.error(e),_.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-exclamation-triangle",description:Q(e.response.data.error)})})},Q=o=>{for(const e in o)if(o[e].length>0)return o[e][0];return null},W=o=>{V.push(o)},L=()=>{u.value=!u.value},X=async o=>{await Y({token:o,as:b}).then(e=>{console.log("Google Token:",e);const k=S("token");k.value=e.data.data,r.value=!1,_.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"You have successfully logged in!"}),V.push("/")}).catch(e=>{console.error(e),_.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-exclamation-triangle",description:e.response.data.error}),r.value=!1})},E=fe({onSuccess:async o=>{const{access_token:e}=o;console.log("Access Token",e),await X(e)},onError:()=>{console.error("Login failed")}}),R=async()=>{E.login()},$=d(E.isReady);return ne(()=>z,o=>{o==="register"?q.value="register":q.value="login"},{immediate:!0}),ie(()=>{U.value=!1}),(o,e)=>{const k=Z,c=ee,x=te,y=se,B=de,F=ue,G=me;return n(),i("div",null,[U.value?(n(),re(k,{key:0})):(n(),i("div",he,[s("div",ve,[s("div",xe,[s("button",{class:"flex gap-2 items-center justify-start mx-8 mt-8 text-white",onClick:e[0]||(e[0]=l=>W("/"))},[t(c,{name:"back",class:"text-white"}),p(" Back ")]),s("div",ye,[s("img",{src:f(ge),class:"w-full max-w-[300px] hidden md:flex"},null,8,we)])]),s("div",be,[t(ce,{name:"fade",mode:"out-in"},{default:a(()=>[q.value==="login"?(n(),i("div",ke,[s("img",{src:f(D),class:"my-4 w-32 mx-auto md:mx-0"},null,8,Ve),s("h1",qe," Login "+A(f(b)==="facilitator"?"as Facilitator":""),1),t(F,{"validation-schema":f(H),onSubmit:j},{default:a(()=>[t(y,{name:"email",label:"Email",class:"mb-2"},{default:a(()=>[t(x,{type:"email",modelValue:h.value,"onUpdate:modelValue":e[1]||(e[1]=l=>h.value=l),required:"",class:"w-full"},null,8,["modelValue"])]),_:1}),t(y,{name:"password",label:"Password",class:"mb-2"},{default:a(()=>[s("div",Ce,[t(x,{type:u.value?"text":"password",modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=l=>v.value=l),required:"",class:"w-full"},null,8,["type","modelValue"]),s("button",{type:"button",onClick:L,class:"absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"},[u.value?(n(),i("span",Pe,[t(c,{name:"eye-off",filled:"",class:"text-lg"})])):(n(),i("span",Le,[t(c,{name:"eye",filled:"",class:"text-lg"})]))])])]),_:1}),t(B,{type:"submit",loading:r.value,block:"",class:"w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"},{default:a(()=>[p(" Login ")]),_:1},8,["loading"])]),_:1},8,["validation-schema"]),t(G,{label:"OR",class:"py-2 mt-4"}),s("button",{class:"w-full bg-white py-2 rounded-md flex gap-2 justify-center items-center border-2 border-gray-100",disabled:!$.value,onClick:e[3]||(e[3]=()=>R())},[t(c,{name:"google",filled:""}),p(" Continue with Google ")],8,Se),s("p",Ue,[p(" Don't have an account? "),s("a",{href:"#",onClick:e[4]||(e[4]=N(l=>T("register"),["prevent"])),class:"text-blue-500 hover:underline"}," Register ")])])):(n(),i("div",Te,[s("img",{src:f(D),class:"my-4 w-32 mx-auto md:mx-0"},null,8,je),s("h1",Ee," Register "+A(f(b)==="facilitator"?"as Facilitator":""),1),t(F,{"validation-schema":f(J),onSubmit:K},{default:a(()=>[t(y,{name:"fullname",label:"Full Name",class:"mb-2"},{default:a(()=>[t(x,{modelValue:P.value,"onUpdate:modelValue":e[5]||(e[5]=l=>P.value=l),required:"",class:"w-full"},null,8,["modelValue"])]),_:1}),t(y,{name:"email",label:"Email",class:"mb-2"},{default:a(()=>[t(x,{type:"email",modelValue:h.value,"onUpdate:modelValue":e[6]||(e[6]=l=>h.value=l),required:"",class:"w-full"},null,8,["modelValue"])]),_:1}),t(y,{name:"password",label:"Password",class:"mb-2"},{default:a(()=>[s("div",Re,[t(x,{type:u.value?"text":"password",modelValue:v.value,"onUpdate:modelValue":e[7]||(e[7]=l=>v.value=l),required:"",class:"w-full"},null,8,["type","modelValue"]),s("button",{type:"button",onClick:L,class:"absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"},[u.value?(n(),i("span",$e,[t(c,{name:"eye-off",filled:"",class:"text-lg"})])):(n(),i("span",Be,[t(c,{name:"eye",filled:"",class:"text-lg"})]))])])]),_:1}),t(y,{name:"confirmPassword",label:"Confirm Password",class:"mb-2"},{default:a(()=>[s("div",Fe,[t(x,{type:u.value?"text":"password",modelValue:C.value,"onUpdate:modelValue":e[8]||(e[8]=l=>C.value=l),required:"",class:"w-full"},null,8,["type","modelValue"]),s("button",{type:"button",onClick:L,class:"absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"},[u.value?(n(),i("span",Ge,[t(c,{name:"eye-off",filled:"",class:"text-lg"})])):(n(),i("span",Oe,[t(c,{name:"eye",filled:"",class:"text-lg"})]))])])]),_:1}),t(B,{type:"submit",loading:r.value,block:"",class:"w-full bg-blue-500 text-white text-center py-2 rounded-md hover:bg-blue-600"},{default:a(()=>[p(" Sign Up ")]),_:1},8,["loading"])]),_:1},8,["validation-schema"]),t(G,{label:"OR",class:"py-2 mt-4"}),s("button",{class:"w-full bg-white py-2 rounded-md flex gap-2 justify-center items-center border-2 border-gray-100",disabled:!$.value,onClick:e[9]||(e[9]=()=>R())},[t(c,{name:"google",filled:""}),p(" Continue with Google ")],8,Ae),s("p",Ne,[p(" Already have an account? "),s("a",{href:"#",onClick:e[10]||(e[10]=N(l=>T("login"),["prevent"])),class:"text-blue-500 hover:underline"}," Login ")])]))]),_:1})])])]))])}}};export{st as default};
