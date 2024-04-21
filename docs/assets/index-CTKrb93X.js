import{C as le,d as Z,r as ye,a as S,_ as A,u as q,b as Q,w as ee,c as h,o as d,e as b,f as m,g as v,F as N,h as H,t as T,i as Se,j as _,k as w,l as xe,m as Ee,n as ke,E as ce,p as g,q as P,s as $,v as M,x as Ce,y as Ae,z as Te,A as K,B as $e,D as Me,G as J,H as z,T as ue,I as de,J as fe,K as Fe,L as Ie,M as Pe,N as Re,O as _e,R as Ve,P as De,Q as ze}from"./index-B1CGmCDa.js";const Ne=()=>localStorage.getItem(le.SIDEBAR_STATUS),G=n=>{localStorage.setItem(le.SIDEBAR_STATUS,n)},L={Mobile:0,Desktop:1},j=Z("app",()=>{const n=ye({opened:Ne()!=="closed",withoutAnimation:!1}),e=S(L.Desktop);return{device:e,sidebar:n,toggleSidebar:o=>{n.opened=!n.opened,n.withoutAnimation=o,n.opened?G("opened"):G("closed")},toggleDevice:o=>{e.value=o},closeSidebar:o=>{n.opened=!1,n.withoutAnimation=o,G("closed")}}}),F={showSettings:!0,showTagsView:!0,fixedHeader:!0,fixedFooter:!0,showSidebarLogo:!0,showNotify:!0,showThemeSwitch:!0,showScreenfull:!0,showGreyMode:!1,showColorWeakness:!1},te=Z("settings",()=>{const n=S(F.fixedHeader),e=S(F.fixedFooter),t=S(F.showSettings),r=S(F.showTagsView),s=S(F.showSidebarLogo),o=S(F.showNotify),a=S(F.showThemeSwitch),i=S(F.showScreenfull),c=S(F.showGreyMode),f=S(F.showColorWeakness);return{fixedHeader:n,fixedFooter:e,showSettings:t,showTagsView:r,showSidebarLogo:s,showNotify:o,showThemeSwitch:a,showScreenfull:i,showGreyMode:c,showColorWeakness:f}});function Le(n){for(var e=[],t=0;t<n.length;){var r=n[t];if(r==="*"||r==="+"||r==="?"){e.push({type:"MODIFIER",index:t,value:n[t++]});continue}if(r==="\\"){e.push({type:"ESCAPED_CHAR",index:t++,value:n[t++]});continue}if(r==="{"){e.push({type:"OPEN",index:t,value:n[t++]});continue}if(r==="}"){e.push({type:"CLOSE",index:t,value:n[t++]});continue}if(r===":"){for(var s="",o=t+1;o<n.length;){var a=n.charCodeAt(o);if(a>=48&&a<=57||a>=65&&a<=90||a>=97&&a<=122||a===95){s+=n[o++];continue}break}if(!s)throw new TypeError("Missing parameter name at ".concat(t));e.push({type:"NAME",index:t,value:s}),t=o;continue}if(r==="("){var i=1,c="",o=t+1;if(n[o]==="?")throw new TypeError('Pattern cannot start with "?" at '.concat(o));for(;o<n.length;){if(n[o]==="\\"){c+=n[o++]+n[o++];continue}if(n[o]===")"){if(i--,i===0){o++;break}}else if(n[o]==="("&&(i++,n[o+1]!=="?"))throw new TypeError("Capturing groups are not allowed at ".concat(o));c+=n[o++]}if(i)throw new TypeError("Unbalanced pattern at ".concat(t));if(!c)throw new TypeError("Missing pattern at ".concat(t));e.push({type:"PATTERN",index:t,value:c}),t=o;continue}e.push({type:"CHAR",index:t,value:n[t++]})}return e.push({type:"END",index:t,value:""}),e}function Be(n,e){e===void 0&&(e={});for(var t=Le(n),r=e.prefixes,s=r===void 0?"./":r,o="[^".concat(qe(e.delimiter||"/#?"),"]+?"),a=[],i=0,c=0,f="",u=function(V){if(c<t.length&&t[c].type===V)return t[c++].value},l=function(V){var O=u(V);if(O!==void 0)return O;var re=t[c],be=re.type,we=re.index;throw new TypeError("Unexpected ".concat(be," at ").concat(we,", expected ").concat(V))},p=function(){for(var V="",O;O=u("CHAR")||u("ESCAPED_CHAR");)V+=O;return V};c<t.length;){var x=u("CHAR"),E=u("NAME"),y=u("PATTERN");if(E||y){var k=x||"";s.indexOf(k)===-1&&(f+=k,k=""),f&&(a.push(f),f=""),a.push({name:E||i++,prefix:k,suffix:"",pattern:y||o,modifier:u("MODIFIER")||""});continue}var U=x||u("ESCAPED_CHAR");if(U){f+=U;continue}f&&(a.push(f),f="");var ve=u("OPEN");if(ve){var k=p(),ne=u("NAME")||"",X=u("PATTERN")||"",ge=p();l("CLOSE"),a.push({name:ne||(X?i++:""),pattern:ne&&!X?o:X,prefix:k,suffix:ge,modifier:u("MODIFIER")||""});continue}l("END")}return a}function He(n,e){return Oe(Be(n,e),e)}function Oe(n,e){e===void 0&&(e={});var t=Ue(e),r=e.encode,s=r===void 0?function(c){return c}:r,o=e.validate,a=o===void 0?!0:o,i=n.map(function(c){if(typeof c=="object")return new RegExp("^(?:".concat(c.pattern,")$"),t)});return function(c){for(var f="",u=0;u<n.length;u++){var l=n[u];if(typeof l=="string"){f+=l;continue}var p=c?c[l.name]:void 0,x=l.modifier==="?"||l.modifier==="*",E=l.modifier==="*"||l.modifier==="+";if(Array.isArray(p)){if(!E)throw new TypeError('Expected "'.concat(l.name,'" to not repeat, but got an array'));if(p.length===0){if(x)continue;throw new TypeError('Expected "'.concat(l.name,'" to not be empty'))}for(var y=0;y<p.length;y++){var k=s(p[y],l);if(a&&!i[u].test(k))throw new TypeError('Expected all "'.concat(l.name,'" to match "').concat(l.pattern,'", but got "').concat(k,'"'));f+=l.prefix+k+l.suffix}continue}if(typeof p=="string"||typeof p=="number"){var k=s(String(p),l);if(a&&!i[u].test(k))throw new TypeError('Expected "'.concat(l.name,'" to match "').concat(l.pattern,'", but got "').concat(k,'"'));f+=l.prefix+k+l.suffix;continue}if(!x){var U=E?"an array":"a string";throw new TypeError('Expected "'.concat(l.name,'" to be ').concat(U))}}return f}}function qe(n){return n.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1")}function Ue(n){return n&&n.sensitive?"":"i"}const je={key:0,class:"no-redirect"},Xe=["onClick"],Ge={__name:"index",setup(n){const e=q(),t=Q(),r=S([]),s=()=>{r.value=e.matched.filter(i=>i.meta&&i.meta.title&&i.meta.breadcrumb!==!1)},o=i=>{const{params:c}=e;return He(i)(c)},a=i=>{const{redirect:c,path:f}=i;if(c){t.push(c);return}t.push(o(f))};return ee(()=>e.path,i=>{i.startsWith("/redirect/")||s()}),s(),(i,c)=>{const f=h("el-breadcrumb-item"),u=h("el-breadcrumb");return d(),b(u,{class:"app-breadcrumb"},{default:m(()=>[(d(!0),v(N,null,H(r.value,(l,p)=>(d(),b(f,{key:l.path},{default:m(()=>[l.redirect==="noredirect"||p===r.value.length-1?(d(),v("span",je,T(l.meta.title),1)):(d(),v("a",{key:1,onClick:Se(x=>a(l),["prevent"]),href:""},T(l.meta.title),9,Xe))]),_:2},1024))),128))]),_:1})}}},We=A(Ge,[["__scopeId","data-v-8b0dda9c"]]),Ke={__name:"index",props:{isActive:{type:Boolean,default:!1}},emits:["toggle-click"],setup(n,{emit:e}){const t=n,r=e,s=()=>{r("toggle-click")};return(o,a)=>{const i=h("el-icon");return d(),v("div",{onClick:s},[_(i,{size:20,class:"icon"},{default:m(()=>[t.isActive?(d(),b(w(xe),{key:0})):(d(),b(w(Ee),{key:1}))]),_:1})])}}},oe=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],R=(()=>{if(typeof document>"u")return!1;const n=oe[0],e={};for(const t of oe)if((t==null?void 0:t[1])in document){for(const[s,o]of t.entries())e[n[s]]=o;return e}return!1})(),se={change:R.fullscreenchange,error:R.fullscreenerror};let C={request(n=document.documentElement,e){return new Promise((t,r)=>{const s=()=>{C.off("change",s),t()};C.on("change",s);const o=n[R.requestFullscreen](e);o instanceof Promise&&o.then(s).catch(r)})},exit(){return new Promise((n,e)=>{if(!C.isFullscreen){n();return}const t=()=>{C.off("change",t),n()};C.on("change",t);const r=document[R.exitFullscreen]();r instanceof Promise&&r.then(t).catch(e)})},toggle(n,e){return C.isFullscreen?C.exit():C.request(n,e)},onchange(n){C.on("change",n)},onerror(n){C.on("error",n)},on(n,e){const t=se[n];t&&document.addEventListener(t,e,!1)},off(n,e){const t=se[n];t&&document.removeEventListener(t,e,!1)},raw:R};Object.defineProperties(C,{isFullscreen:{get:()=>!!document[R.fullscreenElement]},element:{enumerable:!0,get:()=>document[R.fullscreenElement]??void 0},isEnabled:{enumerable:!0,get:()=>!!document[R.fullscreenEnabled]}});R||(C={isEnabled:!1});const D=C,Je={__name:"index",props:{element:{type:String,default:"html"},openTips:{type:String,default:"全屏"},exitTips:{type:String,default:"退出全屏"}},setup(n){const e=n,t=S(e.openTips),r=S(!1),s=()=>{const a=document.querySelector(e.element)||void 0;if(!D.isEnabled){ce.warning("您的浏览器无法工作");return}D.toggle(a)},o=()=>{r.value=D.isFullscreen,t.value=D.isFullscreen?e.exitTips:e.openTips};return D.on("change",o),ke(()=>{D.isEnabled&&D.off("change",o)}),(a,i)=>{const c=h("svg-icon"),f=h("el-tooltip");return d(),v("div",{onClick:s},[_(f,{effect:"dark",content:t.value,placement:"bottom"},{default:m(()=>[_(c,{name:r.value?"fullscreen-exit":"fullscreen"},null,8,["name"])]),_:1},8,["content"])])}}},me=A(Je,[["__scopeId","data-v-5655a87c"]]),Ye={class:"card-header"},Ze={class:"card-title"},Qe={class:"card-time"},et={key:0,class:"card-avatar"},tt=["src"],nt={class:"card-body"},rt={__name:"NotifyList",props:{list:{type:Object,required:!0}},setup(n){const e=n;return(t,r)=>{const s=h("el-empty"),o=h("el-tag"),a=h("el-card");return e.list.length===0?(d(),b(s,{key:0})):(d(!0),v(N,{key:1},H(e.list,(i,c)=>(d(),b(a,{key:c,shadow:"never",class:"card-container"},{header:m(()=>[g("div",Ye,[g("div",null,[g("span",null,[g("span",Ze,T(i.title),1),i.extra?(d(),b(o,{key:0,type:i.status,effect:"plain",size:"small"},{default:m(()=>[P(T(i.extra),1)]),_:2},1032,["type"])):$("",!0)]),g("div",Qe,T(i.datetime),1)]),i.avatar?(d(),v("div",et,[g("img",{src:i.avatar,width:"34",alt:"NotifyFreeIcon"},null,8,tt)])):$("",!0)])]),default:m(()=>[g("div",nt,T(i.description??"No Data"),1)]),_:2},1024))),128))}}},ot=A(rt,[["__scopeId","data-v-f29226a4"]]),st=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"Notify组件完成",datetime:"一个月前",description:"mock数据配合el-card遍历挂载到页面上去,使用Vue的computed钩子函数计算角标值,以组件方式引入ElementPlus@icon里的图标。"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"Screenfull组件完成",datetime:"两个月前",description:"利用插件screenfull.js配合el-tooltip进行放大全屏功能,配合封装svg-icon来实现图标的切换。"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"SvgIcon组件完成",datetime:"四个月前",description:"iconfont官网下载svg图标,封装svgicon组件便于各个组件之间交互使用svg图标。"}],at=[{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"Star Wars",description:"May the Force be with you.",datetime:"2023-10-1"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"Casablanca",description:"Here's looking at you, kid",datetime:"2023-11-11"},{avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"Forrest Gump",description:"Life is like a box of chocolates, you never know what you're gonna get",datetime:"2024-4-7"}],it=[{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"未开始",status:"info"},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"进行中",status:""},{title:"任务名称",description:"这家伙很懒，什么都没留下",extra:"已超时",status:"danger"}],lt={class:"notify"},ct={class:"notify-history"},ae=99,ut=350,dt={__name:"index",setup(n){const e=M(()=>{let o=0;for(let a=0;a<r.value.length;a++)o+=r.value[a].list.length;return o}),t=S("通知"),r=S([{name:"通知",type:"primary",list:st},{name:"消息",type:"danger",list:at},{name:"待办",type:"warning",list:it}]),s=()=>{ce.success(`跳转到${t.value}历史页面`)};return(o,a)=>{const i=h("el-icon"),c=h("el-tooltip"),f=h("el-badge"),u=h("el-scrollbar"),l=h("el-tab-pane"),p=h("el-tabs"),x=h("el-button"),E=h("el-popover");return d(),v("div",lt,[_(E,{placement:"bottom",width:ut,trigger:"click"},{reference:m(()=>[_(f,{value:e.value,max:ae,hidden:e.value===0},{default:m(()=>[_(c,{effect:"dark",content:"消息通知",placement:"bottom"},{default:m(()=>[_(i,{size:20},{default:m(()=>[_(w(Ce))]),_:1})]),_:1})]),_:1},8,["value","hidden"])]),default:m(()=>[_(p,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=y=>t.value=y),class:"demo-tabs",stretch:""},{default:m(()=>[(d(!0),v(N,null,H(r.value,(y,k)=>(d(),b(l,{name:y.name,key:k},{label:m(()=>[P(T(y.name)+" ",1),_(f,{value:y.list.length,max:ae,type:y.type},null,8,["value","type"])]),default:m(()=>[_(u,{height:"400px"},{default:m(()=>[_(ot,{list:y.list},null,8,["list"])]),_:2},1024)]),_:2},1032,["name"]))),128))]),_:1},8,["modelValue"]),g("div",ct,[_(x,{link:"",onClick:s},{default:m(()=>[P("查看"+T(t.value)+"历史",1)]),_:1})])]),_:1})])}}},ft=A(dt,[["__scopeId","data-v-eab12092"]]),_t={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",class:"icon",viewBox:"0 0 1024 1024"},mt=g("path",{d:"M64 512c0 195.2 124.8 361.6 300.8 422.4 22.4 6.4 19.2-9.6 19.2-22.4v-76.8c-134.4 16-140.8-73.6-150.4-89.6-19.2-32-60.8-38.4-48-54.4 32-16 64 3.2 99.2 57.6 25.6 38.4 76.8 32 105.6 25.6 6.4-22.4 19.2-44.8 35.2-60.8C281.6 691.2 224 604.8 224 502.4c0-48 16-96 48-131.2-22.4-60.8 0-115.2 3.2-121.6 57.6-6.4 118.4 41.6 124.8 44.8 32-9.6 70.4-12.8 112-12.8s80 6.4 112 12.8c12.8-9.6 67.2-48 121.6-44.8 3.2 6.4 25.6 57.6 6.4 118.4 32 38.4 48 83.2 48 131.2 0 102.4-57.6 188.8-201.6 214.4 22.4 22.4 38.4 54.4 38.4 92.8v112c0 9.6 0 19.2 16 19.2C832 876.8 960 710.4 960 512c0-246.4-201.6-448-448-448S64 265.6 64 512"},null,-1),pt=[mt];function ht(n,e){return d(),v("svg",_t,[...pt])}const vt={render:ht},gt={xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",class:"icon",viewBox:"0 0 1024 1024"},bt=g("path",{fill:"#D81E06",d:"M512 960C265.6 960 64 758.4 64 512S265.6 64 512 64s448 201.6 448 448-201.6 448-448 448"},null,-1),wt=g("path",{fill:"#FFF",d:"M721.664 467.968h-235.52a22.27 22.27 0 0 0-20.736 20.736v51.776c0 10.368 10.368 20.736 20.736 20.736H628.48c10.368 0 20.736 10.304 20.736 20.672v10.368c0 33.664-28.48 62.08-62.144 62.08H392.896a22.27 22.27 0 0 1-20.672-20.672V436.928c0-33.664 28.48-62.08 62.08-62.08h287.36a22.27 22.27 0 0 0 20.736-20.736v-51.84a22.27 22.27 0 0 0-20.736-20.672h-287.36A152.96 152.96 0 0 0 281.6 434.368v287.36c0 10.304 10.368 20.672 20.736 20.672h302.848c75.072 0 137.216-62.08 137.216-137.216v-116.48a22.27 22.27 0 0 0-20.736-20.736"},null,-1),yt=[bt,wt];function St(n,e){return d(),v("svg",gt,[...yt])}const xt={render:St},Et={xmlns:"http://www.w3.org/2000/svg",width:"23.375",height:"16",class:"icon",viewBox:"0 0 1496 1024"},kt=g("path",{d:"M329.563 659.126c43.157-39.233 62.774-94.16 58.85-149.088 3.924-43.157-11.77-86.314-39.233-117.7-23.54-19.618-51.004-31.388-82.39-31.388q41.195-17.655 58.85-58.85c19.617-35.31 31.387-78.468 31.387-121.625 3.923-51.004-11.77-102.008-47.08-141.241C270.712 11.77 223.631 0 176.551 0H0v721.9h180.475c54.927 3.924 109.855-19.616 149.088-62.774M58.851 58.851h117.7c66.698 0 117.702 54.927 117.702 121.624 0 39.234-15.694 82.39-35.31 113.778-19.617 27.463-51.004 39.234-82.391 35.31H58.85zm31.387 329.563h90.237c94.161 0 149.088 51.004 149.088 121.624 0 31.387-11.77 62.774-31.387 90.238-27.463 35.31-74.544 58.85-117.7 58.85H62.773V388.414zM478.65 0h58.85v721.9h-58.85zm482.575 655.203c39.234-51.004 54.927-109.854 54.927-172.628 3.924-62.774-15.693-125.548-51.004-176.552-31.387-43.157-82.39-66.697-137.318-62.774-54.927-3.923-109.854 23.54-145.164 66.697-39.234 51.004-58.85 113.778-54.928 176.552-3.923 62.774 15.694 125.548 51.004 176.552 35.31 43.157 86.314 66.697 137.318 62.774 58.85-3.924 109.855-27.464 145.165-70.62M686.59 478.651c-3.923-47.08 11.77-94.16 35.31-133.394 23.54-27.464 62.774-47.08 102.008-47.08s74.544 15.693 98.084 47.08c47.08 82.39 47.08 184.398 0 266.789-23.54 31.387-58.85 47.08-98.084 47.08s-74.544-15.693-98.084-47.08c-31.387-39.234-43.157-86.314-39.234-133.395m804.291 270.713V239.326h-58.85v58.85c-27.464-43.157-78.468-66.697-129.472-58.85-51.003-3.924-105.93 19.617-137.318 58.85-39.233 51.004-58.85 113.778-58.85 180.475 0 54.928 23.54 109.855 58.85 149.088 27.464 39.234 70.621 58.851 117.702 58.851 51.003 3.923 102.007-15.693 133.394-58.85l15.694-31.388v149.089c0 39.233-11.77 78.467-27.464 113.777l-35.31 43.157c-66.698 39.234-153.012 39.234-219.71 0-113.777-54.927-333.486-51.003-372.72 90.238L835.679 1024c19.617-39.234 51.004-70.62 90.238-90.238 23.54-11.77 141.241 3.924 188.322 23.54 11.77 7.847 27.463 11.77 43.157 15.694h7.846c27.464 7.847 58.851 15.694 90.238 15.694 149.088 0 235.402-58.85 235.402-239.326m-94.16-168.705c-27.464 27.464-62.775 47.08-102.008 51.004-39.234-3.924-74.544-19.617-102.008-51.004-23.54-31.387-35.31-70.62-31.387-109.854-3.923-43.157 7.847-86.315 35.31-125.548 23.54-31.387 62.774-47.08 98.085-47.08s74.544 11.77 102.007 35.31c19.617 35.31 31.387 74.544 35.31 113.777v31.387c0 39.234-11.77 74.544-35.31 102.008"},null,-1),Ct=[kt];function At(n,e){return d(),v("svg",Et,[...Ct])}const Tt={render:At},$t={xmlns:"http://www.w3.org/2000/svg",width:"21.035",height:"20",class:"icon",viewBox:"0 0 1077 1024"},Mt=g("path",{d:"M652.235 701.152c8.679 0 15.677 7.033 15.677 15.712v67.544c0 29.502-23.91 53.48-53.274 53.48H239.386c-29.364 0-53.274-24.012-53.274-53.48V239.592c0-29.502 23.91-53.48 53.274-53.48h375.183c29.364 0 53.274 24.012 53.274 53.48v58.934a15.711 15.711 0 1 1-31.32 0v-58.9a22.023 22.023 0 0 0-21.954-22.023H239.386a22.023 22.023 0 0 0-21.955 22.023v544.817c0 12.143 9.88 22.023 21.955 22.023h375.252c12.075 0 21.954-9.88 21.954-22.023v-67.545c0-8.679 6.998-15.711 15.643-15.711zm212.822-197.9a15.78 15.78 0 0 1 0 22.264l-124.18 124.592a15.574 15.574 0 0 1-22.127 0 15.78 15.78 0 0 1 0-22.229l102.638-103.015H446.994a15.711 15.711 0 0 1 0-31.457H810.96L715.594 397.7a15.78 15.78 0 0 1 0-22.23 15.643 15.643 0 0 1 22.16 0z"},null,-1),Ft=[Mt];function It(n,e){return d(),v("svg",$t,[...Ft])}const Pt={render:It},Rt={class:"navigation-bar"},Vt={class:"right-menu"},Dt={class:"right-menu-avatar"},zt={target:"_blank",href:"https://yaozongbin.gitee.io/yaozongbin/"},Nt={target:"_blank",href:"https://github.com/yaozongbin"},Lt={target:"_blank",href:"https://gitee.com/yaozongbin"},Bt={style:{display:"block"}},Ht={__name:"index",setup(n){const e=j(),t=Ae(),r=Q(),s=M(()=>e.sidebar),o=()=>{e.toggleSidebar(!1)},a=()=>{t.logout(),r.push("/login")};return(i,c)=>{const f=h("el-avatar"),u=h("el-dropdown-item"),l=h("el-dropdown-menu"),p=h("el-dropdown");return d(),v("div",Rt,[_(Ke,{"is-active":s.value.opened,class:"hamburger",onToggleClick:o},null,8,["is-active"]),_(We,{class:"breadcrumb"}),g("div",Vt,[_(me),_(ft),_(p,{class:"right-menu-item"},{dropdown:m(()=>[_(l,null,{default:m(()=>[g("a",zt,[_(u,null,{default:m(()=>[_(w(Tt)),P("  博客")]),_:1})]),g("a",Nt,[_(u,null,{default:m(()=>[_(w(vt)),P("  Github ")]),_:1})]),g("a",Lt,[_(u,null,{default:m(()=>[_(w(xt)),P("  Gitee ")]),_:1})]),_(u,{divided:"",onClick:a},{default:m(()=>[g("span",Bt,[_(w(Pt),{style:{"vertical-align":"middle",margin:"0 0 3px 0"}}),P(" 退出登录 ")])]),_:1})]),_:1})]),default:m(()=>[g("div",Dt,[_(f,{icon:w(Te),size:30},null,8,["icon"]),g("span",null,T(w(t).username),1)])]),_:1})])])}}},Ot=A(Ht,[["__scopeId","data-v-2536d570"]]),Y=n=>/^(https?:|mailto:|tel:)/.test(n),qt=["href"],Ut={__name:"SidebarItemLink",props:{to:{type:String,required:!0}},setup(n){const e=n;return(t,r)=>{const s=h("router-link");return w(Y)(e.to)?(d(),v("a",{key:0,href:e.to,target:"_blank",rel:"noopener"},[K(t.$slots,"default")],8,qt)):(d(),b(s,{key:1,to:e.to},{default:m(()=>[K(t.$slots,"default")]),_:3},8,["to"]))}}};function I(n){if(typeof n!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(n))}function ie(n,e){for(var t="",r=0,s=-1,o=0,a,i=0;i<=n.length;++i){if(i<n.length)a=n.charCodeAt(i);else{if(a===47)break;a=47}if(a===47){if(!(s===i-1||o===1))if(s!==i-1&&o===2){if(t.length<2||r!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){var c=t.lastIndexOf("/");if(c!==t.length-1){c===-1?(t="",r=0):(t=t.slice(0,c),r=t.length-1-t.lastIndexOf("/")),s=i,o=0;continue}}else if(t.length===2||t.length===1){t="",r=0,s=i,o=0;continue}}e&&(t.length>0?t+="/..":t="..",r=2)}else t.length>0?t+="/"+n.slice(s+1,i):t=n.slice(s+1,i),r=i-s-1;s=i,o=0}else a===46&&o!==-1?++o:o=-1}return t}function jt(n,e){var t=e.dir||e.root,r=e.base||(e.name||"")+(e.ext||"");return t?t===e.root?t+r:t+n+r:r}var B={resolve:function(){for(var e="",t=!1,r,s=arguments.length-1;s>=-1&&!t;s--){var o;s>=0?o=arguments[s]:(r===void 0&&(r=process.cwd()),o=r),I(o),o.length!==0&&(e=o+"/"+e,t=o.charCodeAt(0)===47)}return e=ie(e,!t),t?e.length>0?"/"+e:"/":e.length>0?e:"."},normalize:function(e){if(I(e),e.length===0)return".";var t=e.charCodeAt(0)===47,r=e.charCodeAt(e.length-1)===47;return e=ie(e,!t),e.length===0&&!t&&(e="."),e.length>0&&r&&(e+="/"),t?"/"+e:e},isAbsolute:function(e){return I(e),e.length>0&&e.charCodeAt(0)===47},join:function(){if(arguments.length===0)return".";for(var e,t=0;t<arguments.length;++t){var r=arguments[t];I(r),r.length>0&&(e===void 0?e=r:e+="/"+r)}return e===void 0?".":B.normalize(e)},relative:function(e,t){if(I(e),I(t),e===t||(e=B.resolve(e),t=B.resolve(t),e===t))return"";for(var r=1;r<e.length&&e.charCodeAt(r)===47;++r);for(var s=e.length,o=s-r,a=1;a<t.length&&t.charCodeAt(a)===47;++a);for(var i=t.length,c=i-a,f=o<c?o:c,u=-1,l=0;l<=f;++l){if(l===f){if(c>f){if(t.charCodeAt(a+l)===47)return t.slice(a+l+1);if(l===0)return t.slice(a+l)}else o>f&&(e.charCodeAt(r+l)===47?u=l:l===0&&(u=0));break}var p=e.charCodeAt(r+l),x=t.charCodeAt(a+l);if(p!==x)break;p===47&&(u=l)}var E="";for(l=r+u+1;l<=s;++l)(l===s||e.charCodeAt(l)===47)&&(E.length===0?E+="..":E+="/..");return E.length>0?E+t.slice(a+u):(a+=u,t.charCodeAt(a)===47&&++a,t.slice(a))},_makeLong:function(e){return e},dirname:function(e){if(I(e),e.length===0)return".";for(var t=e.charCodeAt(0),r=t===47,s=-1,o=!0,a=e.length-1;a>=1;--a)if(t=e.charCodeAt(a),t===47){if(!o){s=a;break}}else o=!1;return s===-1?r?"/":".":r&&s===1?"//":e.slice(0,s)},basename:function(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');I(e);var r=0,s=-1,o=!0,a;if(t!==void 0&&t.length>0&&t.length<=e.length){if(t.length===e.length&&t===e)return"";var i=t.length-1,c=-1;for(a=e.length-1;a>=0;--a){var f=e.charCodeAt(a);if(f===47){if(!o){r=a+1;break}}else c===-1&&(o=!1,c=a+1),i>=0&&(f===t.charCodeAt(i)?--i===-1&&(s=a):(i=-1,s=c))}return r===s?s=c:s===-1&&(s=e.length),e.slice(r,s)}else{for(a=e.length-1;a>=0;--a)if(e.charCodeAt(a)===47){if(!o){r=a+1;break}}else s===-1&&(o=!1,s=a+1);return s===-1?"":e.slice(r,s)}},extname:function(e){I(e);for(var t=-1,r=0,s=-1,o=!0,a=0,i=e.length-1;i>=0;--i){var c=e.charCodeAt(i);if(c===47){if(!o){r=i+1;break}continue}s===-1&&(o=!1,s=i+1),c===46?t===-1?t=i:a!==1&&(a=1):t!==-1&&(a=-1)}return t===-1||s===-1||a===0||a===1&&t===s-1&&t===r+1?"":e.slice(t,s)},format:function(e){if(e===null||typeof e!="object")throw new TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return jt("/",e)},parse:function(e){I(e);var t={root:"",dir:"",base:"",ext:"",name:""};if(e.length===0)return t;var r=e.charCodeAt(0),s=r===47,o;s?(t.root="/",o=1):o=0;for(var a=-1,i=0,c=-1,f=!0,u=e.length-1,l=0;u>=o;--u){if(r=e.charCodeAt(u),r===47){if(!f){i=u+1;break}continue}c===-1&&(f=!1,c=u+1),r===46?a===-1?a=u:l!==1&&(l=1):a!==-1&&(l=-1)}return a===-1||c===-1||l===0||l===1&&a===c-1&&a===i+1?c!==-1&&(i===0&&s?t.base=t.name=e.slice(1,c):t.base=t.name=e.slice(i,c)):(i===0&&s?(t.name=e.slice(1,a),t.base=e.slice(1,c)):(t.name=e.slice(i,a),t.base=e.slice(i,c)),t.ext=e.slice(a,c)),i>0?t.dir=e.slice(0,i-1):s&&(t.dir="/"),t},sep:"/",delimiter:":",win32:null,posix:null};B.posix=B;var Xt=B;const pe=$e(Xt),Gt={key:2},Wt={__name:"SidebarItem",props:{item:{type:Object,required:!0},isCollapse:{type:Boolean,default:!1},isFirstLevel:{type:Boolean,default:!0},basePath:{type:String,default:""}},setup(n){const e=n,t=M(()=>e.item.children?e.item.children.filter(a=>!(a.meta&&a.meta.hidden)).length:0),r=M(()=>{if(t.value>1)return null;if(e.item.children){for(const o of e.item.children)if(!o.meta||!o.meta.hidden)return o}return{...e.item,path:""}}),s=o=>Y(o)?o:Y(e.basePath)?e.basePath:pe.resolve(e.basePath,o);return(o,a)=>{var l;const i=h("svg-icon"),c=h("el-menu-item"),f=h("sidebar-item",!0),u=h("el-sub-menu");return(l=e.item.meta)!=null&&l.hidden?$("",!0):(d(),v("div",{key:0,class:z({"simple-mode":e.isCollapse,"first-level":e.isFirstLevel})},[r.value&&!r.value.children?(d(),v(N,{key:0},[r.value.meta?(d(),b(Ut,{key:0,to:s(r.value.path)},{default:m(()=>[_(c,{index:s(r.value.path)},Me({default:m(()=>[r.value.meta.svgIcon?(d(),b(i,{key:0,name:r.value.meta.svgIcon},null,8,["name"])):r.value.meta.elIcon?(d(),b(J(r.value.meta.elIcon),{key:1,class:"el-icon"})):$("",!0)]),_:2},[r.value.meta.title?{name:"title",fn:m(()=>[P(T(r.value.meta.title),1)]),key:"0"}:void 0]),1032,["index"])]),_:1},8,["to"])):$("",!0)],64)):(d(),b(u,{key:1,index:s(e.item.path),teleported:""},{title:m(()=>[e.item.meta&&e.item.meta.svgIcon?(d(),b(i,{key:0,name:e.item.meta.svgIcon},null,8,["name"])):e.item.meta&&e.item.meta.elIcon?(d(),b(J(e.item.meta.elIcon),{key:1,class:"el-icon"})):$("",!0),e.item.meta&&e.item.meta.title?(d(),v("span",Gt,T(e.item.meta.title),1)):$("",!0)]),default:m(()=>[e.item.children?(d(!0),v(N,{key:0},H(e.item.children,p=>(d(),b(f,{key:p.path,item:p,"is-collapse":e.isCollapse,"is-first-level":!1,"base-path":s(p.path)},null,8,["item","is-collapse","base-path"]))),128)):$("",!0)]),_:1},8,["index"]))],2))}}},Kt=A(Wt,[["__scopeId","data-v-13976170"]]),Jt=""+new URL("logo-BY3URNHQ.png",import.meta.url).href,Yt=""+new URL("logo-text-1-CHuEm79x.png",import.meta.url).href,he=n=>(de("data-v-fe4be8c5"),n=n(),fe(),n),Zt=he(()=>g("img",{src:Jt,class:"sidebar-logo"},null,-1)),Qt=he(()=>g("img",{src:Yt,class:"sidebar-logo-text"},null,-1)),en={__name:"SidebarLogo",props:{collapse:{type:Boolean,default:!0}},setup(n){const e=n;return(t,r)=>{const s=h("router-link");return d(),v("div",{class:z(["sidebar-logo-container",{collapse:e.collapse}])},[_(ue,{name:"sidebar-logo-fade"},{default:m(()=>[e.collapse?(d(),b(s,{key:"collapse",to:"/"},{default:m(()=>[Zt]),_:1})):(d(),b(s,{key:"expand",to:"/"},{default:m(()=>[Qt]),_:1}))]),_:1})],2)}}},tn=A(en,[["__scopeId","data-v-fe4be8c5"]]),W=n=>{let e="";try{e=getComputedStyle(document.documentElement).getPropertyValue(n)}catch(t){console.error(t)}return e},nn={__name:"index",setup(n){const e=W("--v3-sidebar-menu-bg-color"),t=W("--v3-sidebar-menu-text-color"),r=W("--v3-sidebar-menu-active-text-color"),s=q(),o=j(),a=Fe(),i=te(),{showSidebarLogo:c}=Ie(i),f=M(()=>{const{meta:l,path:p}=s;return l!=null&&l.activeMenu?l.activeMenu:p}),u=M(()=>!o.sidebar.opened);return(l,p)=>{const x=h("el-menu"),E=h("el-scrollbar");return d(),v("div",{class:z({"has-logo":w(c)})},[w(c)?(d(),b(tn,{key:0,collapse:u.value},null,8,["collapse"])):$("",!0),_(E,{"wrap-class":"scrollbar-wrapper"},{default:m(()=>[_(x,{"default-active":f.value,collapse:u.value,"background-color":w(e),"text-color":w(t),"active-text-color":w(r),"unique-opened":!0,"collapse-transition":!1,mode:"vertical"},{default:m(()=>[(d(!0),v(N,null,H(w(a).routes,y=>(d(),b(Kt,{key:y.path,item:y,"base-path":y.path,"is-collapse":u.value},null,8,["item","base-path","is-collapse"]))),128))]),_:1},8,["default-active","collapse","background-color","text-color","active-text-color"])]),_:1})],2)}}},rn=A(nn,[["__scopeId","data-v-d1da17ff"]]),on={class:"app-main"},sn={class:"app-scrollabr"},an={__name:"AppMain",setup(n){const e=q(),t=M(()=>e.path);return(r,s)=>{const o=h("router-view"),a=h("el-backtop");return d(),v("section",on,[g("div",sn,[_(o,null,{default:m(({Component:i})=>[_(ue,{name:"fade-transform",mode:"out-in"},{default:m(()=>[(d(),b(Pe,null,[(d(),b(J(i),{key:t.value,class:"app-container-grow"}))],1024))]),_:2},1024)]),_:1})]),_(a,{right:50,bottom:50})])}}},ln=A(an,[["__scopeId","data-v-26ad996b"]]),cn=Z("tags-view",()=>{const n=S([]),e=S([]);return{visitedViews:n,cachedViews:e,addVisitedView:s=>{n.value.some((o,a)=>{if(o.path===s.path)return o.fullPath!==s.fullPath&&(n.value[a]=Object.assign({},s)),!0})||n.value.push(Object.assign({},s))},addCachedView:s=>{var o;typeof s.name=="string"&&(e.value.includes(s.name)||(o=s.meta)!=null&&o.keepAlive&&e.value.push(s.name))}}}),un={class:"scroll-container"},dn={__name:"ScrollPane",props:{tagRefs:{type:Object,required:!0}},setup(n){S();const e=S(),t=te(),r=M(()=>t.showScreenfull);return(s,o)=>(d(),v("div",un,[g("div",{ref_key:"scrollbarContentRef",ref:e,class:"scrollbar-content"},[K(s.$slots,"default",{},void 0,!0)],512),r.value?(d(),b(me,{key:0,element:".app-main",class:"screenfull",openTips:"内容区域全屏"})):$("",!0)]))}},fn=A(dn,[["__scopeId","data-v-db723500"]]),_n={class:"tags-view-container"},mn={__name:"index",setup(n){const e=q();Q();const t=cn(),r=Re(),s=S([]);let o=[];const a=u=>u.path===e.path,i=(u,l="/")=>{let p=[];return u.forEach(x=>{var E;if((E=x.meta)!=null&&E.affix){const y=pe.resolve(l,x.path);p.push({fullPath:y,path:y,name:x.name,meta:{...x.meta}})}}),p},c=()=>{o=i(r.routes);for(const u of o)u.name&&t.addVisitedView(u)},f=()=>{e.name&&(t.addVisitedView(e),t.addCachedView(e))};return ee(e,()=>{f()},{deep:!0}),_e(()=>{c(),f()}),(u,l)=>(d(),v("div",_n,[_(fn,{class:"tags-view-wrapper",tagRefs:s.value},{default:m(()=>[(d(!0),v(N,null,H(w(t).visitedViews,p=>(d(),b(w(Ve),{ref_for:!0,ref_key:"tagRefs",ref:s,key:p.path,class:z([a(p)?"active":"","tags-view-item"]),to:{path:p.path,query:p.query}},{default:m(()=>{var x;return[P(T((x=p.meta)==null?void 0:x.title),1)]}),_:2},1032,["class","to"]))),128))]),_:1},8,["tagRefs"])]))}},pn=A(mn,[["__scopeId","data-v-ba3f0ca9"]]),hn=992,vn=()=>{const n=q(),e=j(),t=()=>document.body.getBoundingClientRect().width-1<hn,r=()=>{if(!document.hidden){const s=t();e.toggleDevice(s?L.Mobile:L.Desktop),s&&e.closeSidebar(!0)}};ee(()=>n.name,()=>{e.device===L.Mobile&&e.sidebar.opened&&e.closeSidebar(!1)}),De(()=>{window.addEventListener("resize",r)}),_e(()=>{t()&&(e.toggleDevice(L.Mobile),e.closeSidebar(!0))}),ze(()=>{window.removeEventListener("resize",r)})};var gn={VITE_BASE_API:"https://mock.mengxuegu.com/mock/63218b5fb4c53348ed2bc212/api/v1",VITE_ROUTER_HISTORY:"hash",VITE_PUBLIC_PATH:"/v3-vite-admin-js-master/",VITE_USER_NODE_ENV:"production",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const bn=n=>(de("data-v-d8bd8609"),n=n(),fe(),n),wn={class:"layout-footer"},yn=bn(()=>g("a",{href:"https://github.com/yaozongbin/v3-vite-admin-js-master"}," MIT © 2023-PRESENT @yaozongbin ",-1)),Sn=[yn],xn={__name:"index",setup(n){const e=gn.VITE_APP_TITLE;return console.log(" MIT © 2023-PRESENT @yaozongbin "+e),(t,r)=>(d(),v("footer",wn,Sn))}},En=A(xn,[["__scopeId","data-v-d8bd8609"]]),kn={class:"main-container"},Cn={__name:"index",setup(n){const e=j(),t=te();vn();const r=M(()=>({hideSidebar:!e.sidebar.opened,openSidebar:e.sidebar.opened,withoutAnimation:e.sidebar.withoutAnimation,mobile:e.device===L.Mobile})),s=M(()=>t.fixedHeader),o=M(()=>t.fixedHeader),a=()=>{e.closeSidebar(!1)};return(i,c)=>(d(),v("div",{class:z([r.value,"app-wrapper"])},[r.value.mobile&&r.value.openSidebar?(d(),v("div",{key:0,class:"drawer-bg",onClick:a})):$("",!0),_(w(rn),{class:"sidebar-container"}),g("div",kn,[g("div",{class:z({"fixed-header":s.value})},[_(w(Ot)),_(w(pn))],2),_(w(ln)),_(En,{class:z({"fixed-footer":o.value})},null,8,["class"])])],2))}},Tn=A(Cn,[["__scopeId","data-v-95688401"]]);export{Tn as default};