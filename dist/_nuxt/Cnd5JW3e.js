import{d as m,r as p,T as d,F as v,t as f,v as E,O as h,U as u,V as e}from"./BAhZI9jA.js";const g=["innerHTML"],T=m({__name:"nuxt-icon",props:{name:{},filled:{type:Boolean,default:!1}},async setup(l){let r,n;const i=l,a=p("");let _=!1;async function c(){try{const o=await Object.assign({"/assets/icons/checked-list.svg":()=>e(()=>import("./DlEk6cXt.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/chevron-bottom.svg":()=>e(()=>import("./RsVKTAmY.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/chevron-left.svg":()=>e(()=>import("./CF_Glvb2.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/chevron-right.svg":()=>e(()=>import("./DEXem6oP.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/chevron-up.svg":()=>e(()=>import("./B55DwkOs.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/facebook.svg":()=>e(()=>import("./B5Wt86qn.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/instagram.svg":()=>e(()=>import("./Bs9Q_xKn.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/logo.svg":()=>e(()=>import("./DmTppqOe.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/pro-badge.svg":()=>e(()=>import("./CdRXCS6S.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/quotation.svg":()=>e(()=>import("./CkMlsAy3.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/users.svg":()=>e(()=>import("./ODaxg8ql.js"),[],import.meta.url).then(t=>t.default),"/assets/icons/verified.svg":()=>e(()=>import("./C-EvqWSB.js"),[],import.meta.url).then(t=>t.default)})[`/assets/icons/${i.name}.svg`]();o.includes("stroke")&&(_=!0),a.value=o}catch{console.error(`[nuxt-icons] Icon '${i.name}' doesn't exist in 'assets/icons'`)}}return[r,n]=d(()=>c()),await r,n(),v(c),(s,o)=>(f(),E("span",{class:h(["nuxt-icon",{"nuxt-icon--fill":!s.filled,"nuxt-icon--stroke":u(_)&&!s.filled}]),innerHTML:u(a)},null,10,g))}});export{T as _};