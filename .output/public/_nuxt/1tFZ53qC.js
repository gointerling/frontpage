import{_ as r}from"./4QMAxoic.js";import{G as m,o as n,c as o,a as e,b as i,t as p,n as d,v as f}from"./Csvhc2Mt.js";const x={class:"flex gap-2 px-4 sm:px-6 lg:px-36 items-center sm:justify-between justify-between sm:mb-12"},b=e("span",{class:"hidden sm:block"}," Back ",-1),u={class:"text-center sm:text-left text-xl sm:text-4xl font-semibold uppercase text-primary sm:mt-0"},_={key:0,class:"flex gap-2 opacity-0"},k=e("span",{class:"hidden sm:block"}," Back ",-1),v={__name:"Banner",props:{isTitleVisible:{type:Boolean,default:!1},bannerTitle:{type:String,default:"Facilitators"},isLinearGradient:{type:Boolean,default:!1},isHistoricalBack:{type:Boolean,default:!1}},setup(t){const l=m(),c=()=>{l.go(-1)};return(y,s)=>{const a=r;return n(),o("div",{class:f(["-mt-16 pt-36 pb-12",t.isLinearGradient?"banner-container-linear":"banner-container"])},[e("div",x,[e("button",{class:"flex gap-2 cursor-pointer",onClick:s[0]||(s[0]=B=>c())},[i(a,{name:"back",filled:"",class:"text-2xl"}),b]),e("h6",u,p(t.bannerTitle),1),t.isTitleVisible?(n(),o("div",_,[i(a,{name:"back",filled:"",class:"text-2xl opacity-0"}),k])):d("",!0)])],2)}}};export{v as _};
