import{G as m,H as d,g,r as t,i as p,I as a,c as i,j as r,m as f,b as h,a5 as _,o as s}from"./BSKzHnPj.js";import{_ as x}from"./CbfY5llE.js";import{P as k}from"./DO5yl_m3.js";import{_ as v}from"./CIZVXV85.js";import"./DpvUxtYC.js";import"./dSNV757c.js";const y=""+new URL("filter.Dr-iEePe.png",import.meta.url).href,w={class:"min-h-screen flex flex-col"},b={key:1,class:"flex flex-col h-screen"},P=_('<div class="flex-grow px-6 py-10 sm:px-10 lg:px-20 pt-24"><ol class="list-decimal list-inside text-lg space-y-6"><b style="font-size:32px;">Cara memilih kategori tertentu</b><li>Kunjungi laman Gointerling di <a href="https://www.gointerling.com/" target="_blank" class="text-blue-500 underline">gointerling.com</a>.</li><li> Pada menu awal klik tombol <span class="font-bold">&quot;Let&#39;s Start Translation&quot;</span>. <div class="mt-4 flex justify-center"><img src="'+x+'" alt="Sign In Image" class="rounded-lg shadow-lg" style="width:750px;height:auto;"></div></li><li> Pada menu pemilihan translation terdapat filter disebelah kiri. <div class="mt-4 flex justify-center"><img src="'+y+'" alt="Sign In Image" class="rounded-lg shadow-lg" style="width:750px;height:auto;"></div></li><li> Pilih translator yang sesuai pada menu filter. </li></ol></div>',1),E={__name:"category",setup(I){m();const n=d();g(),t(n.params.id);const l=t(!0),e=t(null),c=async()=>{try{e.value=a("token").value.user||null}catch(o){console.error("Fetching user failed:",o)}},u=()=>{a("token").value=null,e.value=null};return p(async()=>{a("token").value&&await c(),l.value=!1}),(o,L)=>(s(),i("div",w,[r(l)?(s(),f(k,{key:0})):(s(),i("div",b,[h(v,{user:r(e),onLogout:u},null,8,["user"]),P]))]))}};export{E as default};