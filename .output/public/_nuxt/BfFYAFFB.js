import{z as u}from"./XjqdB_R7.js";const o=()=>{const{$axios:r}=u();return{getUsers(e){return e={page:1,per_page:10,...e},Object.keys(e).forEach(t=>{(e[t]===null||e[t]===""||e[t]===void 0)&&delete e[t]}),r.get("/users",{params:e})},getUserDetails(e,t){return r.get(`/users/${e}`,{params:t})},updateMyProfile(e){return r.put("/profile",e)},updateMyPassword(e){return r.put("/profile/password",e)}}};export{o as u};