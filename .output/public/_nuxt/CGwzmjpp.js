import{y as o}from"./BqGgLAbD.js";const i=()=>{const{$axios:r}=o();return{uploadFile(e,a){const t=new FormData;return t.append("file",e),t.append("file_name",a),r.post("/files",t)},deleteFile(e){return r.delete(`/files/${e}`)}}};export{i as u};
