import{y as o}from"./CLq9dtKI.js";const u=()=>{const{$axios:t}=o();return{getMyOrders(e){return e={page:1,per_page:10,...e},Object.keys(e).forEach(r=>{(e[r]===null||e[r]===""||e[r]===void 0)&&delete e[r]}),t.get("/my/orders",{params:e})},getDetailOrder(e){return t.get(`/orders/${e}`)},setMyOrder(e){return t.post("/my/orders",e)}}};export{u};