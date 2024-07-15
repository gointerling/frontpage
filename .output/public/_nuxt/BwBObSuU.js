import{_ as w}from"./BtXf7Omx.js";import{g as D,r as n,o as r,c as i,a as h,b as y,t as f,n as p,v as $}from"./Ba_SD_ms.js";import{u as E}from"./B9ELUJNf.js";const I=["accept"],M={key:0,class:"px-4 py-2 border border-primary rounded-lg hover:bg-primary flex items-center gap-1 group transition duration-200"},O=h("span",{class:"text-primary group-hover:text-white transition duration-200"}," Uploading... ",-1),V=[O],R={key:1},j={class:"text-primary group-hover:text-white transition duration-200"},P=h("span",{class:"text-red-800 group-hover:text-white transition duration-200"}," Cancel ",-1),T={key:2,class:"mt-2 text-gray-700 text-xs"},q={key:3,class:"mt-2 text-red-500 text-xs"},J={__name:"FileUpload",props:{title:{type:String,default:"File"},accept:{type:String,default:""},maxSize:{type:Number,default:0},isDisplayFile:{type:Boolean,default:!0},center:{type:Boolean,default:!1}},emits:["fileUploaded"],setup(l,{emit:_}){const{uploadFile:b,deleteFile:F}=E(),c=l,d=D(),k=_,u=n(null),a=n(""),s=n(""),g=n(null),m=n(!1),S=()=>{u.value.click()},U=()=>{const e=u.value.files[0];e&&(a.value=e.name,c.maxSize&&e.size>c.maxSize?(s.value=`File size exceeds the limit of ${C(c.maxSize/1024/1024,2)} MB.`,a.value=""):(s.value="",B(e,`${c.title}_${e.name}`)))},z=()=>{u.value.value=null,a.value="",s.value="",N(g.value)},C=(e,t)=>+(Math.round(e+"e"+t)+"e-"+t),B=(e,t)=>{m.value=!0,b(e,t).then(o=>{m.value=!1,g.value=o.data.data.fileRecord,x(o.data.data.fileRecord.url),d.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"File uploaded successfully!"})}).catch(o=>{console.error(o),d.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-exclamation-triangle",description:v(o.response.data.error)})})},N=e=>{F(e.id).then(()=>{x(""),d.add({title:"Success!",color:"green",icon:"i-heroicons-check-circle",description:"File deleted successfully!"})}).catch(t=>{console.error(t),d.add({title:"Uh Oh!",color:"red",icon:"i-heroicons-exclamation-triangle",description:v(t.response.data.error)})})},x=e=>{k("fileUploaded",e)},v=e=>e.errors?e.errors[Object.keys(e.errors)[0]][0]:e.message;return(e,t)=>{const o=w;return r(),i("div",{class:$(["file-upload",l.center?"flex flex-col items-center":""])},[h("input",{ref_key:"fileInput",ref:u,type:"file",accept:l.accept,class:"hidden",onChange:U},null,40,I),m.value?(r(),i("button",M,V)):(r(),i("div",R,[a.value?p("",!0):(r(),i("button",{key:0,onClick:S,class:"px-4 py-2 border border-primary rounded-lg hover:bg-primary flex items-center gap-1 group transition duration-200"},[y(o,{name:"file-upload",class:"text-primary group-hover:text-white transition duration-200"}),h("span",j," Upload "+f(l.title),1)])),a.value?(r(),i("button",{key:1,onClick:z,class:"px-4 py-2 border border-red-800 rounded-lg hover:bg-red-800 flex items-center gap-1 group transition duration-200"},[y(o,{name:"circle-x",class:"text-red-800 group-hover:text-white transition duration-200 mb-0 pb-0"}),P])):p("",!0)])),a.value&&l.isDisplayFile?(r(),i("p",T," Selected file: "+f(a.value),1)):p("",!0),s.value?(r(),i("p",q,f(s.value),1)):p("",!0)],2)}}};export{J as _};