import{s as store,g as getMeta,c as config}from"./store-ef4b0379.js";window.WebComponents={root:"/lib/webcomponents/"},
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
function(){var e,t=!1,n=[],o=!1;function r(){window.WebComponents.ready=!0,document.dispatchEvent(new CustomEvent("WebComponentsReady",{bubbles:!0}))}function i(){window.customElements&&customElements.polyfillWrapFlushCallback&&customElements.polyfillWrapFlushCallback((function(t){e=t,o&&e()}))}function a(){window.HTMLTemplateElement&&HTMLTemplateElement.bootstrap&&HTMLTemplateElement.bootstrap(window.document),t=!0,c().then(r)}function c(){o=!1;var t=n.map((function(e){return e instanceof Function?e():e}));return n=[],Promise.all(t).then((function(){o=!0,e&&e()})).catch((function(e){console.error(e)}))}window.WebComponents=window.WebComponents||{},window.WebComponents.ready=window.WebComponents.ready||!1,window.WebComponents.waitFor=window.WebComponents.waitFor||function(e){e&&(n.push(e),t&&c())},window.WebComponents._batchCustomElements=i;var l="webcomponents-loader.js",s=[];(!("attachShadow"in Element.prototype&&"getRootNode"in Element.prototype)||window.ShadyDOM&&window.ShadyDOM.force)&&s.push("sd"),window.customElements&&!window.customElements.forcePolyfill||s.push("ce");var d=function(){var e=document.createElement("template");if(!("content"in e))return!0;if(!(e.content.cloneNode()instanceof DocumentFragment))return!0;var t=document.createElement("template");t.content.appendChild(document.createElement("div")),e.content.appendChild(t);var n=e.cloneNode(!0);return 0===n.content.childNodes.length||0===n.content.firstChild.content.childNodes.length}();if(window.Promise&&Array.from&&window.URL&&window.Symbol&&!d||(s=["sd-ce-pf"]),s.length){var w,u="bundles/webcomponents-"+s.join("-")+".js";if(window.WebComponents.root)w=window.WebComponents.root+u;else{var m=document.querySelector('script[src*="'+l+'"]');w=m.src.replace(l,u)}var p=document.createElement("script");p.src=w,"loading"===document.readyState?(p.setAttribute("onload","window.WebComponents._batchCustomElements()"),document.write(p.outerHTML),document.addEventListener("DOMContentLoaded",a)):(p.addEventListener("load",(function(){i(),a()})),p.addEventListener("error",(function(){throw new Error("Could not load polyfill bundle"+w)})),document.head.appendChild(p))}else"complete"===document.readyState?(t=!0,r()):(window.addEventListener("load",a),window.addEventListener("DOMContentLoaded",(function(){window.removeEventListener("load",a),a()})))}();const seen={};window._import=e=>{e.startsWith("./")&&(e=e.substr(2));const t=seen[e];if(void 0!==t)return t;const n=new Promise((t,n)=>{const o=Object.assign(document.createElement("script"),{src:`/${e}`,type:"module",onload:()=>t(),onerror:n});document.head.append(o)});return seen[e]=n,n};const domparser=new DOMParser;async function loadEntrypoint(e){return window._import("./default-dae74b29.js")}async function getPage(e){const t=new Headers;t.set("X-Document","1");const n=await fetch(e,{headers:t});if(!n.ok&&404!==n.status)throw n.status;const o=await n.text();return domparser.parseFromString(o,"text/html")}function normalizeUrl(e){const t=new URL(e,window.location);let n=t.pathname;return n.endsWith("/index.html")?n=n.slice(0,-"index.html".length):n.endsWith("/")||(n=`${e}/`),n+t.search}function forceFocus(e){e&&(e.hasAttribute("tabindex")?e.focus():(e.tabIndex=-1,e.focus(),e.classList.add("w-force-focus"),e.addEventListener("blue",t=>{e.removeAttribute("tabindex"),e.classList.remove("w-force-focus")},{once:!0})))}async function swapContent(e){let t=window.location.pathname+window.location.search;const n=loadEntrypoint(),o=normalizeUrl(t);if(o&&(window.history.replaceState(null,null,o+window.location.hash),t=window.location.pathname+window.location.search),e)return void await n;store.setState({isPageLoading:!0});const r=document.querySelector("main");let i,a;try{if(null===(a=(i=await getPage(t)).querySelector("#content")))throw new Error(`no #content found: ${t}`);await n}finally{store.setState({isPageLoading:!1,currentUrl:t})}r.querySelector("#content").remove(),r.appendChild(i.querySelector("#content")),document.title=i.title;const c=i.querySelector("meta[name=description]"),l=c?c.content:"";document.querySelector("meta[name=description]").content=l,forceFocus(a.querySelector("h1, h2, h3, h4, h5, h6")||a);const s=Boolean(getMeta("offline",i));store.setState({isPageLoading:!1,isOffline:s})}let globalHandler,recentActiveUrl;function getUrl(){return window.location.pathname+window.location.search}function scrollOnFrame(e){e instanceof Element?e.scrollIntoView({block:"center"}):document.documentElement.scrollTop=+e||0}function onReplaceState(e){recentActiveUrl=getUrl()}function onPopState(e){const t=getUrl();if(recentActiveUrl===t)return;recentActiveUrl=t;const n=window.history.state;globalHandler().then(e=>{e&&scrollOnFrame(n?n.scrollTop:0)})}function onDedupScroll(){const e={scrollTop:document.documentElement.scrollTop};window.history.replaceState(e,null,null)}function onClick(e){if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button||e.defaultPrevented)return;const t=e.target.closest("a[href]");!t||t.target||t.host!==location.host||t.pathname.match(/\.(jpg|png|gif|svg|webp)$/)||route(t.href)&&e.preventDefault()}function listen(e){if(!e)throw new Error("need handler");listen=()=>{throw new Error("listen can only be called once")};let t=Promise.resolve(),n=0;globalHandler=()=>{const o=++n;return t=t.then(async()=>o===n&&(await e(),!0)).catch(e=>{throw window.location.href=window.location.href,e})},window.addEventListener("replacestate",onReplaceState),window.addEventListener("popstate",onPopState),window.addEventListener("click",onClick);let o=0;window.addEventListener("scroll",()=>{window.clearTimeout(o),o=window.setTimeout(onDedupScroll,250)},{passive:!0}),recentActiveUrl=getUrl(),e(!0)}function route(e){if(!globalHandler)throw new Error("listen() not called");const t=new URL(e,window.location),n=t.pathname+t.search;return(n!==getUrl()||!t.hash)&&(recentActiveUrl=n,window.history.pushState(null,null,t.toString()),globalHandler().then(e=>{if(e){return scrollOnFrame(document.getElementById(t.hash.substr(1))||0)}}),!0)}function reload(){globalHandler()}console.info("llighter.github.io",config.version),WebComponents.waitFor(async()=>{document.body.classList.remove("unresolved"),listen(swapContent),window.addEventListener("online",()=>{const{isOffline:e}=store.getState();e&&reload()})}),"serviceWorker"in navigator&&navigator.serviceWorker.register("/sw.js");
//# sourceMappingURL=bootstrap.js.map