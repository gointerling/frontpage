import{y as u}from"./ct8VcvXC.js";const g=()=>{const{$axios:n}=u();return{getLanguages(e){return e={page:1,per_page:10,...e},Object.keys(e).forEach(t=>{(e[t]===null||e[t]===""||e[t]===void 0)&&delete e[t]}),n.get("/languages",{params:e})}}},i=()=>{const{$axios:n}=u();return{getSkills(e){return e={page:1,per_page:10,...e},Object.keys(e).forEach(t=>{(e[t]===null||e[t]===""||e[t]===void 0)&&delete e[t]}),n.get("/skills",{params:e})}}};export{i as a,g as u};
