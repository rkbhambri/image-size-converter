(this["webpackJsonpimage-size-converter"]=this["webpackJsonpimage-size-converter"]||[]).push([[0],[,,,,function(e,t,a){e.exports=a(11)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(3),o=a.n(r),l=(a(9),a(10),a(1)),c=function(e){return i.a.createElement("div",null,i.a.createElement("h2",null,"Click on the button below to upload image"),i.a.createElement("label",{htmlFor:"file-input"},i.a.createElement("span",{className:"upload-button"},"Upload Image")),i.a.createElement("input",{id:"file-input",type:"file",accept:"image/*",style:{display:"none"},onChange:function(t){return e.compress(t)}}),i.a.createElement("br",null))},m=function(e){return i.a.createElement("div",{className:"image",key:e.item.imageUrl},i.a.createElement("h3",null,"Image with dimension ",e.item.width," x ",e.item.height),i.a.createElement("img",{className:"image",src:e.item.imageUrl,alt:"Rk bhambri"}))},s=function(e){return JSON.parse(e)},u=function(e){return localStorage.getItem(e)},h=function(e,t){return localStorage.setItem(e,t)},g=function(e){return i.a.createElement("div",{className:"images"},s(u("images")).map((function(e,t){return i.a.createElement(m,{item:e,key:t})})))},d=function(e){var t=Object(n.useState)(),a=Object(l.a)(t,2)[1],r=Object(n.useState)([{width:"755",height:"450"},{width:"365",height:"450"},{width:"365",height:"212"},{width:"380",height:"380"}]),o=Object(l.a)(r,1)[0];return u("images")||h("images",JSON.stringify([])),i.a.createElement("div",{className:"app"},i.a.createElement(c,{compress:function(e){return function(e){if(e.target.files[0]){var t=o.length,n=new FileReader;n.readAsDataURL(e.target.files[0]),n.onload=function(e){var n=new Image;n.src=e.target.result,n.onload=function(){if(1024===n.width&&1024===n.height)for(var e=0;e<t;e++){var i=document.createElement("canvas");i.width=o[e].width,i.height=o[e].height,i.getContext("2d").drawImage(n,0,0,o[e].width,o[e].height,0,0,1024,1024);var r=s(u("images"));r.push({height:o[e].height,width:o[e].width,imageUrl:i.toDataURL()}),h("images",JSON.stringify(r)),a(i.toDataURL())}else alert("Please upload the image of dimension 1024 x 1024");return n.onload}}}}(e)}}),s(u("images")).length>0&&i.a.createElement(g,null))},f=function(e){return i.a.createElement(d,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.9e7b9382.chunk.js.map