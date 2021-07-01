var serviceWorkerOption = {"assets":["/0.0dfe8680f00530703366.chunk.js","/1.6c3fadf6044c994fffec.chunk.js","/1.726f909dcf7aac6d7720.chunk.worker.js","/12.97b502387d9753fd2e18.chunk.js","/13.d70d69663d2d3fe1c741.chunk.js","/14.22d727882f3b651fa94c.chunk.js","/15.320fb0da8b23393b55f4.chunk.js","/16.b046b5a10cd488bcffd4.chunk.js","/17.e9648ee4450b2fd6b651.chunk.js","/18.320f2f171afd3bacd4c8.chunk.js","/19.5274366846aed97dc0e0.chunk.js","/2.b3d935bcbef7a4bc04ba.chunk.js","/20.5239a7ed97d20f858367.chunk.js","/21.dd347ee283e5810f83cc.chunk.js","/22.6e726d6da062fbd3870f.chunk.js","/23.814e436c39965aa8bbe4.chunk.js","/24.0a3f8334566f6dcc9693.chunk.js","/25.fa3e89ff352cfbe2b675.chunk.js","/26.935ffb1fad6585a07c1e.chunk.js","/27.bf921c377b7fad6dda13.chunk.js","/28.28f4228ca8dbc25e7c10.chunk.js","/29.aecd65bd99599564d16c.chunk.js","/3.69cccf44444f89f4e9e4.chunk.js","/30.fb71d8251dd404dc43b3.chunk.js","/4.11bc182eae0c6b698eb5.chunk.js","/5.6bcf7631b03ee151e337.chunk.js","/6.b3d2ae22d29925fbda3c.chunk.js","/7.933b6e92294f24e1231a.chunk.js","/8.f666b6894dd26c3d29c5.chunk.js","/9.163a2655451e94610bc5.chunk.js","/main.2fcdcb357cb7dddab221.bundle.js","/main.c994c5dfeac40aab101b.css","/mtproto.worker.f524c1bf42e4b9392a32.bundle.worker.js","/npm.qr-code-styling.6a880b17d2f948307667.chunk.js","/rlottie.worker.86bed2789739b353d39d.bundle.worker.js","/style-desktop.9d7b485ed526720a3aad.css","/webp.worker.eafb4e17dc09d5858dc8.bundle.worker.js"]};
        
        !function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),n.d(t,"log",(function(){return J})),n.d(t,"deferredPromises",(function(){return Y}));var o={test:location.search.indexOf("test=1")>0,debug:location.search.indexOf("debug=1")>0,http:!1,ssl:!0,multipleConnections:!0,asServiceWorker:!1};const r=o.debug;"undefined"!=typeof window?window:self;var i,s=r;!function(e){e[e.None=0]="None",e[e.Error=1]="Error",e[e.Warn=2]="Warn",e[e.Log=4]="Log",e[e.Debug=8]="Debug"}(i||(i={}));const a=[i.None,i.Error,i.Warn,i.Log,i.Debug],c=Date.now();function l(){return"["+((Date.now()-c)/1e3).toFixed(3)+"]"}function u(e,t=i.Log|i.Warn|i.Error){function n(...n){return t&i.Log&&console.log(l(),e,...n)}return s||(t=i.Error),n.warn=function(...n){return t&i.Warn&&console.warn(l(),e,...n)},n.info=function(...n){return t&i.Log&&console.info(l(),e,...n)},n.error=function(...n){return t&i.Error&&console.error(l(),e,...n)},n.trace=function(...n){return t&i.Log&&console.trace(l(),e,...n)},n.debug=function(...n){return t&i.Debug&&console.debug(l(),e,...n)},n.setPrefix=function(t){e="["+t+"]:"},n.setPrefix(e),n.setLevel=function(e){t=a.slice(0,e+1).reduce((e,t)=>e|t,0)},n}var h=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};const d=self;function f(e){return e.ok&&200===e.status}function g(e,t){return new Promise(n=>{const o=new FileReader;o.addEventListener("loadend",e=>n(e.target.result)),o[t](e)})}function p(e){return function(e){return g(e,"readAsArrayBuffer")}(e).then(e=>new Uint8Array(e))}function m(e,t=""){let n;const o=function(e){if(-1===["image/jpeg","image/png","image/gif","image/webp","image/bmp","video/mp4","video/webm","video/quicktime","audio/ogg","audio/mpeg","audio/mp4","application/json","application/pdf"].indexOf(e))return"application/octet-stream";return e}(t);try{n=new Blob(e,{type:o})}catch(t){let r=new BlobBuilder;e.forEach(e=>{r.append(e)}),n=r.getBlob(o)}return n}const v="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope,b="undefined"!=typeof ServiceWorkerGlobalScope&&self instanceof ServiceWorkerGlobalScope,y=(e,...t)=>{self.clients.matchAll({includeUncontrolled:!1,type:"window"}).then(n=>{n.length&&n.slice(e?0:-1).forEach(e=>{e.postMessage(...t)})})},w=(...e)=>{self.postMessage(...e)},S=()=>{},P=b?y.bind(null,!1):v?w:S;b&&y.bind(null,!0);const O=navigator?navigator.userAgent:null,A=(navigator.userAgent.search(/OS X|iPhone|iPad|iOS/i),navigator.userAgent.toLowerCase().indexOf("android"),/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),"undefined"!=typeof window?window:self),_=((/iPad|iPhone|iPod/.test(navigator.platform)||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1)&&A.MSStream,!!("safari"in A)||!(!O||!(/\b(iPad|iPhone|iPod)\b/.test(O)||O.match("Safari")&&!O.match("Chrome")))),T=navigator.userAgent.toLowerCase().indexOf("firefox")>-1;navigator.maxTouchPoints>0&&navigator.userAgent.search(/iOS|iPhone OS|Android|BlackBerry|BB10|Series ?[64]0|J2ME|MIDP|opera mini|opera mobi|mobi.+Gecko|Windows Phone/i);var x=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};var E=new class{constructor(){this.blobSupported=!0;try{m([],"")}catch(e){this.blobSupported=!1}}isAvailable(){return this.blobSupported}write(e,t){return t instanceof Blob?p(t).then(t=>e.write(t)):e.write(t)}getFakeFileWriter(e,t){const n=[];return{write:e=>x(this,void 0,void 0,(function*(){if(!this.blobSupported)throw!1;n.push(e)})),truncate:()=>{n.length=0},finalize:(o=!0)=>{const r=m(n,e);return o&&t&&t(r),r}}}},C=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};class D{constructor(e){this.dbName=e,this.useStorage=!0,o.test&&(this.dbName+="_test"),D.STORAGES.length&&(this.useStorage=D.STORAGES[0].useStorage),this.openDatabase(),D.STORAGES.push(this)}openDatabase(){var e;return null!==(e=this.openDbPromise)&&void 0!==e?e:this.openDbPromise=caches.open(this.dbName)}delete(e){return this.timeoutOperation(t=>t.delete("/"+e))}deleteAll(){return caches.delete(this.dbName)}get(e){return this.timeoutOperation(t=>t.match("/"+e))}save(e,t){return this.timeoutOperation(n=>n.put("/"+e,t))}getFile(e,t="blob"){return this.get(e).then(e=>{if(!e)throw"NO_ENTRY_FOUND";return e[t]()})}saveFile(e,t){t instanceof Blob||(t=m(t));const n=new Response(t,{headers:{"Content-Length":""+t.size}});return this.save(e,n).then(()=>t)}timeoutOperation(e){return this.useStorage?new Promise((t,n)=>C(this,void 0,void 0,(function*(){let o=!1;const r=setTimeout(()=>{n(),o=!0},15e3);try{const n=yield this.openDatabase();if(!n)throw this.useStorage=!1,this.openDbPromise=void 0,"no cache?";const r=yield e(n);if(o)return;t(r)}catch(e){n(e)}clearTimeout(r)}))):Promise.reject("STORAGE_OFFLINE")}getFileWriter(e,t){const n=E.getFakeFileWriter(t,t=>this.saveFile(e,t).catch(()=>t));return Promise.resolve(n)}static toggleStorage(e){return Promise.all(this.STORAGES.map(t=>{if(t.useStorage=e,!e)return t.deleteAll()}))}}D.STORAGES=[];const j=new D("cachedStreamChunks");setInterval(()=>j.timeoutOperation(e=>e.keys().then(t=>{const n=new Map,o=Date.now()/1e3|0;for(const e of t){const t=e.url.match(/\/(\d+?)\?/);t&&!n.has(t[1])&&n.set(t[1],e)}const r=[];for(const[t,i]of n){const n=e.match(i).then(n=>{if(+n.headers.get("Time-Cached")+86400<=o)return J("will delete stream chunk:",t),e.delete(i,{ignoreSearch:!0,ignoreVary:!0})});r.push(n)}return Promise.all(r)})),18e5);const k=new Map;class F{constructor(e){this.info=e,this.loadedOffsets=new Set,this.destroy=()=>{k.delete(this.id)},this.id=F.getId(e),k.set(this.id,this),this.limitPart=e.size>78643200?N:R,this.destroyDebounced=function(e,t,n=!0,o=!0){let r=null;return(...i)=>{r?(clearTimeout(r),r=null):n&&e(...i),r=setTimeout(()=>{o&&e(...i),r=null},t)}}(this.destroy,15e4,!1,!0)}requestFilePartFromWorker(e,t,n=!1){const o={type:"requestFilePart",payload:[this.info.dcId,this.info.location,e,t]},r=JSON.stringify(o);o.id=r;let i=Y[r];if(i)return i.then(e=>e.bytes);P(o),this.loadedOffsets.add(e),i=Y[r]=function(){let e={isFulfilled:!1,isRejected:!1,notify:()=>{},notifyAll:(...t)=>{e.lastNotify=t,e.listeners.forEach(e=>e(...t))},lastNotify:void 0,listeners:[],addNotifyListener:t=>{e.lastNotify&&t(...e.lastNotify),e.listeners.push(t)}},t=new Promise((n,o)=>{e.resolve=e=>{t.isFulfilled||(t.isFulfilled=!0,n(e))},e.reject=(...e)=>{t.isRejected||(t.isRejected=!0,o(...e))}});return t.finally(()=>{t.notify=null,t.listeners.length=0,t.lastNotify=null,t.cancel&&(t.cancel=()=>{})}),Object.assign(t,e),t}();const s=i.then(e=>e.bytes);return this.saveChunkToCache(s,e,t),!n&&this.preloadChunks(e,e+15*this.limitPart),s}requestFilePartFromCache(e,t,n){const o=this.getChunkKey(e,t);return j.getFile(o).then(e=>n?new Uint8Array:p(e),e=>{})}requestFilePart(e,t,n){return this.requestFilePartFromCache(e,t,n).then(o=>o||this.requestFilePartFromWorker(e,t,n))}saveChunkToCache(e,t,n){return e.then(e=>{const o=this.getChunkKey(t,n),r=new Response(e,{headers:{"Content-Length":""+e.length,"Content-Type":"application/octet-stream","Time-Cached":""+(Date.now()/1e3|0)}});return j.save(o,r)})}preloadChunks(e,t){for(t>this.info.size&&(t=this.info.size);e<t;e+=this.limitPart)this.loadedOffsets.has(e)||(this.loadedOffsets.add(e),this.requestFilePart(e,this.limitPart,!0))}requestRange(e){this.destroyDebounced();const t=function(e,t,n){if(0===e[0]&&1===e[1])return new Response(new Uint8Array(2).buffer,{status:206,statusText:"Partial Content",headers:{"Accept-Ranges":"bytes","Content-Range":"bytes 0-1/"+(n||"*"),"Content-Length":"2","Content-Type":t||"video/mp4"}});return null}(e,this.info.mimeType,this.info.size);if(t)return t;const[n,o]=e,r=o&&o<this.limitPart?function(e){return Math.pow(2,Math.ceil(Math.log(e)/Math.log(2)))}(o-n+1):this.limitPart,i=function(e,t=2048){return e-e%t}(n,r);return this.requestFilePart(i,r).then(e=>{const t={"Accept-Ranges":"bytes","Content-Range":`bytes ${i}-${i+e.byteLength-1}/${this.info.size||"*"}`,"Content-Length":""+e.byteLength};return this.info.mimeType&&(t["Content-Type"]=this.info.mimeType),_&&(e=e.slice(n-i,o-i+1),t["Content-Range"]=`bytes ${n}-${n+e.byteLength-1}/${this.info.size||"*"}`,t["Content-Length"]=""+e.byteLength),new Response(e,{status:206,statusText:"Partial Content",headers:t})})}getChunkKey(e,t){return this.id+"?offset="+e+"&limit="+t}static get(e){var t;return null!==(t=k.get(this.getId(e)))&&void 0!==t?t:new F(e)}static getId(e){return e.location.id}}const R=524288,N=1048576;var L={name:"tweb",version:7,stores:[{name:"session"},{name:"stickerSets"},{name:"users"},{name:"chats"},{name:"dialogs"},{name:"messages"}]};class W{constructor(e,t){this.storageIsAvailable=!0,function(e,t){if(t)for(let n in t)void 0!==t[n]&&(e[n]=t[n])}(this,e),o.test&&(this.name+="_test"),this.storeName=t,this.log=u("IDB-"+this.storeName),this.openDatabase(!0),W.STORAGES.push(this)}static closeDatabases(e){this.STORAGES.forEach(t=>{if(e&&e===t)return;const n=t.db;n&&(n.onclose=()=>{},n.close())})}isAvailable(){return this.storageIsAvailable}openDatabase(e=!1){if(this.openDbPromise&&!e)return this.openDbPromise;try{var t=indexedDB.open(this.name,this.version);if(!t)return Promise.reject()}catch(e){return this.log.error("error opening db",e.message),this.storageIsAvailable=!1,Promise.reject(e)}let n=!1;return setTimeout(()=>{n||t.onerror({type:"IDB_CREATE_TIMEOUT"})},3e3),this.openDbPromise=new Promise((e,o)=>{t.onsuccess=r=>{n=!0;const i=t.result;let s=!1;this.log("Opened"),i.onerror=e=>{this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),o(e)},i.onclose=e=>{this.log.error("closed:",e),!s&&this.openDatabase()},i.onabort=e=>{this.log.error("abort:",e);const t=e.target;this.openDatabase(s=!0),t.onerror&&t.onerror(e),i.close()},i.onversionchange=e=>{this.log.error("onversionchange, lol?")},e(this.db=i)},t.onerror=e=>{n=!0,this.storageIsAvailable=!1,this.log.error("Error creating/accessing IndexedDB database",e),o(e)},t.onupgradeneeded=e=>{n=!0,this.log.warn("performing idb upgrade from",e.oldVersion,"to",e.newVersion);var t=e.target.result;this.stores.forEach(e=>{t.objectStoreNames.contains(e.name)||((e,t)=>{var n;const o=e.createObjectStore(t.name);if(null===(n=t.indexes)||void 0===n?void 0:n.length)for(const e of t.indexes)o.createIndex(e.indexName,e.keyPath,e.objectParameters)})(t,e)})}})}delete(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readwrite",t=>e.map(e=>t.delete(e)),"")}clear(e){return this.getObjectStore("readwrite",e=>e.clear(),"",e)}save(e,t){return Array.isArray(e)||(e=[].concat(e),t=[].concat(t)),this.getObjectStore("readwrite",n=>e.map((e,o)=>n.put(t[o],e)),"")}saveFile(e,t){return t instanceof Blob||(t=m([t])),this.save(e,t)}get(e){return Array.isArray(e)||(e=[].concat(e)),this.getObjectStore("readonly",t=>e.map(e=>t.get(e)),"")}getObjectStore(e,t,n,o=this.storeName){let r;return n&&(r=performance.now(),this.log(n+": start")),this.openDatabase().then(i=>new Promise((s,a)=>{const c=i.transaction([o],e);c.onerror=e=>{clearTimeout(l),a(c.error)},c.oncomplete=e=>{clearTimeout(l),n&&this.log(n+": end",performance.now()-r);const t=d.map(e=>e.result);s(h?t:t[0])};const l=setTimeout(()=>{this.log.error("transaction not finished",c)},1e4),u=t(c.objectStore(o)),h=Array.isArray(u),d=h?u:[].concat(u)}))}getAll(){return this.getObjectStore("readonly",e=>e.getAll(),"")}}W.STORAGES=[];var q=function(e,t,n,o){return new(n||(n=Promise))((function(r,i){function s(e){try{c(o.next(e))}catch(e){i(e)}}function a(e){try{c(o.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((o=o.apply(e,t||[])).next())}))};const I=self,M=location.protocol+"//"+location.hostname+location.pathname.split("/").slice(0,-1).join("/")+"/";const B=new class{constructor(e,t,n){this.defaults=n,this.cache={},this.storage=new W(e,t)}get(e){return q(this,void 0,void 0,(function*(){if(void 0!==this.cache[e])return this.cache[e];let t;try{t=yield this.storage.get(e)}catch(e){}if(void 0!==this.cache[e])return this.cache[e];if(void 0===t){const n=this.defaults[e];t="function"==typeof n?n():n}return this.cache[e]=t}))}set(e,t){return q(this,void 0,void 0,(function*(){this.cache[e]=t;try{this.storage.save(e,t)}catch(e){}}))}}(L,"session",{push_mute_until:0,push_last_alive:0,push_lang:{},push_settings:{}});I.addEventListener("push",e=>{const t=e.data.json();J("push",t);let n=!1;const o=Promise.all([B.get("push_mute_until"),B.get("push_last_alive"),I.clients.matchAll({type:"window"})]).then(e=>{const[o,r,i]=e;if(J("matched clients",i),n=i.length>0,n)throw"Supress notification because some instance is alive";const s=Date.now();if(V()&&o&&s<o)throw`Supress notification because mute for ${Math.ceil((o-s)/6e4)} min`;if(!t.badge)throw"No badge?"});o.catch(e=>{J(e)});const r=o.then(()=>Promise.all([B.get("push_settings"),B.get("push_lang")])).then(e=>function(e,t,n){const o="assets/img/logo_filled_rounded.png";let r,i=e.title||"Telegram",s=e.description||"";e.custom&&(r=e.custom.channel_id?-e.custom.channel_id:e.custom.chat_id?-e.custom.chat_id:+e.custom.from_id||0);e.custom.peerId=""+r;let a="peer"+r;t&&t.nopreview&&(i="Telegram",s=n.push_message_nopreview||"You have a new message",a="unknown_peer");J("show notify",i,s,o,e);const c=[{action:"mute1d",title:n.push_action_mute1d||"Mute for 24H"}];return I.registration.showNotification(i,{body:s,icon:o,tag:a,data:e,actions:c}).then(e=>{var t;e&&e.notification&&(t=e.notification,U.has(t)||(U.add(t),t.onclose=$))}).catch(e=>{J.error("Show notification promise",e)})}(t,e[0],e[1])).catch(()=>(J("Closing all notifications on push",n),V()||n?z():I.registration.showNotification("Telegram",{tag:"unknown_peer"}).then(()=>{if(n)return z();setTimeout(()=>z(),n?0:100)}).catch(e=>{J.error("Show notification error",e)})));e.waitUntil(r)}),I.addEventListener("notificationclick",e=>{const t=e.notification;J("On notification click: ",t.tag),t.close();const n=e.action;if("mute1d"===n&&V())return J("[SW] mute for 1d"),void B.set("push_mute_until",Date.now()+864e5);const o=t.data;if(!o)return;const r=I.clients.matchAll({type:"window"}).then(e=>{o.action=n,G={type:"push_click",payload:o};for(let t=0;t<e.length;t++){const n=e[t];if("focus"in n)return n.focus(),n.postMessage(G),void(G=void 0)}if(I.clients.openWindow)return B.get("push_settings").then(e=>I.clients.openWindow(e.baseUrl||M))}).catch(e=>{J.error("Clients.matchAll error",e)});e.waitUntil(r)}),I.addEventListener("notificationclose",$);let G,U=new Set;function $(e){var t;t=e.notification,U.delete(t)}function z(){for(const e of U)try{e.close()}catch(e){}let e;return e="getNotifications"in I.registration?I.registration.getNotifications({}).then(e=>{for(let t=0,n=e.length;t<n;++t)try{e[t].close()}catch(e){}}).catch(e=>{J.error("Offline register SW error",e)}):Promise.resolve(),U.clear(),e}function V(){return T}const J=u("SW",i.Error|i.Debug|i.Log|i.Warn),K=self,Y={},H={notifications_clear:()=>{z()},ping:(e,t)=>{!function(e,t){const n=t.ports&&t.ports[0]||t.source,o=e.payload;o.localNotifications&&B.set("push_last_alive",Date.now()),G&&n&&"postMessage"in n&&(n.postMessage(G,[]),G=void 0),o.lang&&B.set("push_lang",o.lang),o.settings&&B.set("push_settings",o.settings)}(e,t)},requestFilePart:e=>{const t=Y[e.id];e.error?t.reject(e.error):t.resolve(e.payload),delete Y[e.id]},toggleStorage:e=>{D.toggleStorage(e.payload)}};K.addEventListener("message",e=>{const t=e.data,n=H[t.type];n&&n(t,e)});const X=e=>{if(0===e.request.url.indexOf(location.origin+"/")&&e.request.url.match(/\.(js|css|jpe?g|json|wasm|png|mp3|svg|tgs|ico|woff2?|ttf|webmanifest?)(?:\?.*)?$/))return e.respondWith(function(e){return h(this,void 0,void 0,(function*(){try{const t=yield d.caches.open("cachedAssets"),n=yield t.match(e.request,{ignoreVary:!0});if(n&&f(n))return n;const o={Vary:"*"};let r=yield fetch(e.request,{headers:o});if(f(r))t.put(e.request,r.clone());else if(304===r.status){const n=e.request.url.replace(/\?.+$/,"")+"?"+(1e5*Math.random()|0);r=yield fetch(n,{headers:o}),f(r)&&t.put(e.request,r.clone())}return r}catch(t){return fetch(e.request)}}))}(e));try{const[,t,n,o]=/http[:s]+\/\/.*?(\/(.*?)(?:$|\/(.*)$))/.exec(e.request.url)||[];switch(n){case"stream":!function(e,t){const n=function(e){if(!e)return[0,0];const[,t]=e.split("="),n=t.split(", "),[o,r]=n[0].split("-");return[+o,+r||0]}(e.request.headers.get("Range")),o=JSON.parse(decodeURIComponent(t)),r=F.get(o);var i;e.respondWith(Promise.race([(i=45e3,new Promise(e=>{setTimeout(()=>{e(new Response("",{status:408,statusText:"Request timed out."}))},i)})),r.requestRange(n)]))}(e,o)}}catch(t){e.respondWith(new Response("",{status:500,statusText:"Internal Server Error"}))}},Q=()=>{K.onfetch=X};K.addEventListener("install",e=>{J("installing"),e.waitUntil(K.skipWaiting())}),K.addEventListener("activate",e=>{J("activating",K),e.waitUntil(K.caches.delete("cachedAssets")),e.waitUntil(K.clients.claim())}),K.onerror=e=>{J.error("error:",e)},K.onunhandledrejection=e=>{J.error("onunhandledrejection:",e)},K.onoffline=K.ononline=Q,Q()}]);
//# sourceMappingURL=sw.js.map