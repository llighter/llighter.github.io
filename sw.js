class Store{constructor(e="keyval-store",i="keyval"){this.storeName=i,this._dbp=new Promise((r,o)=>{const a=indexedDB.open(e,1);a.onerror=()=>o(a.error),a.onsuccess=()=>r(a.result),a.onupgradeneeded=()=>{a.result.createObjectStore(i)}})}_withIDBStore(e,i){return this._dbp.then(r=>new Promise((o,a)=>{const n=r.transaction(this.storeName,e);n.oncomplete=()=>o(),n.onabort=n.onerror=()=>a(n.error),i(n.objectStore(this.storeName))}))}}let store;function getDefaultStore(){return store||(store=new Store),store}function get(e,i=getDefaultStore()){let r;return i._withIDBStore("readonly",i=>{r=i.get(e)}).then(()=>r.result)}function set(e,i,r=getDefaultStore()){return r._withIDBStore("readwrite",r=>{r.put(i,e)})}var manifest=[{url:"images/authors/llighter.jpg",revision:"0d89acff3b49ad6682767bb5963216f3"},{url:"images/desert.jpg",revision:"74e81f00e5ebd0196a96a5eba524e0c6"},{url:"images/favicon@2x.png",revision:"74d9ed308bd4befd1d3c893212fef201"},{url:"images/future_web.svg",revision:"e6af2eefb8caae9b4b19dbff22069a9d"},{url:"images/icon-128x128.png",revision:"52785d388c59b660e9436766eea956ef"},{url:"images/icon-144x144.png",revision:"f3b77230b5510514a6607992922ea283"},{url:"images/icon-152x152.png",revision:"a57db740c3e0d481c7774f95a43e6f73"},{url:"images/icon-192x192.png",revision:"a16d2845e4a22fef5e63c8b6c85d28fa"},{url:"images/icon-384x384.png",revision:"d5b1fe326bb0cc100668966202fc3e91"},{url:"images/icon-512x512.png",revision:"75c58c1352e510238e9eff12860e2023"},{url:"images/icon-72x72.png",revision:"4be44d56dbcac2b25f9257aea1013405"},{url:"images/icon-96x96.png",revision:"9d0507c2d3f97e28e6aaaf001203c09b"},{url:"images/logo.png",revision:"075e0ac4d8dc22079bd2de5c1dfc43c1"},{url:"images/logo.svg",revision:"68a73f4dac8638fec407dd652f188b52"},{url:"images/social.png",revision:"b0ad88011019cd634a114340eb594c7f"},{url:"images/touchicon-180.png",revision:"38921cec30aebee98a8c5491d68394f4"},{url:"app.css",revision:"10b9e9ff0ac8c7d2a23d962410d9a1f8"},{url:"index.html",revision:"83d345f56f1e64b3e0f52742d8935993"},{url:"offline/index.html",revision:"08c92eb539b4bb281d4ccdaf800eee8f"},{url:"images/authors/llighter.jpg",revision:"0d89acff3b49ad6682767bb5963216f3"},{url:"images/desert.jpg",revision:"74e81f00e5ebd0196a96a5eba524e0c6"},{url:"images/favicon@2x.png",revision:"74d9ed308bd4befd1d3c893212fef201"},{url:"images/future_web.svg",revision:"e6af2eefb8caae9b4b19dbff22069a9d"},{url:"images/icon-128x128.png",revision:"52785d388c59b660e9436766eea956ef"},{url:"images/icon-144x144.png",revision:"f3b77230b5510514a6607992922ea283"},{url:"images/icon-152x152.png",revision:"a57db740c3e0d481c7774f95a43e6f73"},{url:"images/icon-192x192.png",revision:"a16d2845e4a22fef5e63c8b6c85d28fa"},{url:"images/icon-384x384.png",revision:"d5b1fe326bb0cc100668966202fc3e91"},{url:"images/icon-512x512.png",revision:"75c58c1352e510238e9eff12860e2023"},{url:"images/icon-72x72.png",revision:"4be44d56dbcac2b25f9257aea1013405"},{url:"images/icon-96x96.png",revision:"9d0507c2d3f97e28e6aaaf001203c09b"},{url:"images/logo.png",revision:"075e0ac4d8dc22079bd2de5c1dfc43c1"},{url:"images/logo.svg",revision:"68a73f4dac8638fec407dd652f188b52"},{url:"images/social.png",revision:"b0ad88011019cd634a114340eb594c7f"},{url:"images/touchicon-180.png",revision:"38921cec30aebee98a8c5491d68394f4"}];const serviceWorkerArchitecture="v2",normalizeIndexCacheKeyPlugin={cacheKeyWillBeUsed:({request:e,mode:i})=>e.url.endsWith("/")?e.url+"index.html":e};importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");let replacingPreviousServiceWorker=!1;self.addEventListener("install",e=>{self.registration.active&&(replacingPreviousServiceWorker=!0),e.waitUntil(self.skipWaiting())}),self.addEventListener("activate",e=>{const i=Promise.resolve().then(async()=>{const e=await get("arch");if(void 0===e&&replacingPreviousServiceWorker);else if(!replacingPreviousServiceWorker||"v2"===e)return;console.debug("web.dev SW upgrade from",e,"to arch","v2"),await self.clients.claim(),(await self.clients.matchAll({includeUncontrolled:!0,type:"window"})).map(e=>e.navigate(e.url)),await set("arch","v2")});e.waitUntil(i)}),workbox.googleAnalytics.initialize(),workbox.routing.registerRoute(/^https:\/\/fonts\.googleapis\.com/,new workbox.strategies.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets"})),workbox.routing.registerRoute(/^https:\/\/fonts\.gstatic\.com/,new workbox.strategies.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new workbox.cacheableResponse.Plugin({statuses:[0,200]}),new workbox.expiration.Plugin({maxAgeSeconds:31536e3,maxEntries:30})]})),workbox.precaching.precacheAndRoute(manifest);const contentPageRe=new RegExp("/([\\w-]+/)*(|index.html)$"),untrailedContentPageRe=new RegExp("^(/[\\w-]+)+$");workbox.routing.registerRoute(contentPageRe,new workbox.strategies.StaleWhileRevalidate({plugins:[normalizeIndexCacheKeyPlugin]})),workbox.routing.registerRoute(new RegExp("/images/.*"),new workbox.strategies.StaleWhileRevalidate),self.addEventListener("fetch",e=>{const i=new URL(e.request.url);if(!untrailedContentPageRe.exec(i.pathname)||self.location.host!==i.host)return;const r=Promise.resolve().then(async()=>{const r=workbox.precaching.getCacheKeyForURL(i.pathname+"/index.html");if(!await caches.match(r))try{return await fetch(e.request)}catch(e){}const o=new Headers;return o.append("Location",e.request.url+"/"),new Response("",{status:301,headers:o})});e.respondWith(r)}),workbox.routing.setCatchHandler(async({event:e})=>{if("document"===e.request.destination||e.request.headers.get("X-Document")){const e=workbox.precaching.getCacheKeyForURL("/offline/index.html");return e?caches.match(e):caches.match("/offline/index.html",{ignoreSearch:!0})}});
//# sourceMappingURL=sw.js.map