import{z as n}from"./CTp9NOr1.js";const r=()=>{const{$axios:t}=n();return{getSetting(){return t.get("/settings")},getSettingBank(){return t.get("/settings/bank")},updateSetting(e){return t.put("/settings",e)}}};export{r as u};
