(()=>{"use strict";var t={208:(t,e,n)=>{n.d(e,{A:()=>c});var r=n(601),o=n.n(r),i=n(314),a=n.n(i)()(o());a.push([t.id,"#container {\n  display: grid;\n  grid-template: 1fr / 0.2fr 1fr;\n}\n\n#project-container {\n  grid-column: 1 / 2;\n  background-color: lightblue;\n}\n\n#task-container {\n  grid-column: 2 / 3;\n\n  display: grid;\n  grid-template: 1fr / 1fr 1fr 1fr;\n  justify-items: center;\n  align-content: center;\n  align-items: center;\n  gap: 10px;\n}\n\n#add-new-task button {\n  font-size: 40px;\n}\n\n.task {\n  background-color: lightcyan;\n  width: 300px;\n}\n\n.task-description {\n  color: pink; /* placeholder effect */\n}\n",""]);const c=a},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},601:t=>{t.exports=function(t){return t[1]}},72:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],d=r.base?s[0]+r.base:s[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=n(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}a.push(u)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var s=r(t,o),d=0;d<i.length;d++){var l=n(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},659:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(72),e=n.n(t),r=n(825),o=n.n(r),i=n(659),a=n.n(i),c=n(56),s=n.n(c),d=n(540),l=n.n(d),u=n(113),p=n.n(u),f=n(208),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=a().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.A,m),f.A&&f.A.locals&&f.A.locals;class h{constructor(t,e,n,r,o,i,a){this.title=t,this.description=e,this.dueDate=n,this.priority=r,this.notes=o,this.checklist=i,this.id=a}}class v{constructor(t,e,n){this.title=t,this.task=e,this.id=n}}const g=[];let y=0,k=0;function E(t){const e=new h("Your task.","Description...","",1,"Notes...",!1,k);k+=1,t.task.push(e)}function b(){const t=new v("Your project.",[],y);y+=1,E(t),g.push(t)}b();let I=g[0];function x(t,e){const n=document.createElement("input");n.type="date";const r=document.createElement("input");r.type="checkbox",t.innerHTML=`\n  <h1 id="title-${e.id}">${e.title}</h1>\n  ${r.outerHTML};\n  <p id="description-${e.id}" class="task-description">${e.description}</p>\n  <p id="notes-${e.id}">${e.notes}</p>\n  <label>Due Date:</label>\n  ${n.outerHTML};\n  <p>Priority:${e.priority}<p>\n`}function $(t){const e=document.getElementById(`title-${t.id}`),n=document.getElementById(`description-${t.id}`),r=document.getElementById(`notes-${t.id}`),o=document.getElementById(`task-${t.id}`);e.addEventListener("click",(()=>{!function(t){const e=t,n=prompt("Write your task title (1-24 characters).");n.length>1&&n.length<24?e.title=n:alert("Invalid title. Please try again.")}(t),x(o,t),$(t)})),n.addEventListener("click",(()=>{!function(t){const e=t,n=prompt("Write your description (1-200 characters).");n.length>1&&n.length<200?e.description=n:alert("Invalid description. Please try again.")}(t),x(o,t),$(t)})),r.addEventListener("click",(()=>{!function(t){const e=t,n=prompt("Write your notes (1-40 characters).");n.length>1&&n.length<40?e.notes=n:alert("Invalid notes. Please try again.")}(t),x(o,t),$(t)}))}function w(t){!function(t){const e=document.getElementById("task-container"),n=document.getElementById("add-new-task"),r=document.createElement("div");r.classList.add("task"),r.setAttribute("id",`task-${t.id}`),e.insertBefore(r,n),x(document.getElementById(`task-${t.id}`),t)}(t),$(t)}function B(t){const e=document.getElementById("project-container"),n=document.getElementById("add-new-project"),r=document.createElement("div");r.classList.add("project"),r.setAttribute("id",`project-${t.id}`),r.innerHTML=`\n    <p>${t.title}</p>\n  `,e.insertBefore(r,n),function(t,e){t.addEventListener("click",(()=>{!function(){const t=document.getElementById("task-container").getElementsByClassName("task");for(let e=t.length-1;e>=0;e-=1){const n=t[e];n.parentNode.removeChild(n)}}(),I=g[e],function(){for(let t=0;I.task.length>t;t+=1)w(I.task[t])}()}))}(r,t.id)}document.getElementById("add-new-task").addEventListener("click",(()=>{E(I),w(I.task[I.task.length-1])})),w(I.task[0]),document.getElementById("add-new-project").addEventListener("click",(()=>{b(),B(g[g.length-1])})),B(I)})()})();