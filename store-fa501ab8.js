var config={prod:!0,version:"v202001051526"};function n(n,t){for(var e in t)n[e]=t[e];return n}function createStore(t){var e=[];function r(n){for(var t=[],r=0;r<e.length;r++)e[r]===n?n=null:t.push(e[r]);e=t}function i(r,i,o){t=i?r:n(n({},t),r);for(var a=e,u=0;u<a.length;u++)a[u](t,o)}return t=t||{},{action:function(n){function e(t){i(t,!1,n)}return function(){for(var r=arguments,i=[t],o=0;o<arguments.length;o++)i.push(r[o]);var a=n.apply(this,i);if(null!=a)return a.then?a.then(e):e(a)}},setState:i,subscribe:function(n){return e.push(n),function(){r(n)}},unsubscribe:r,getState:function(){return t}}}function getMeta(n,t=document){const e=t.head.querySelector(`meta[name="${n}"]`);return e?e.getAttribute("content")||e.getAttribute("value"):null}const initialState={checkingSignedInState:!0,isSignedIn:Boolean(window.localStorage.yunhaind_isSignedIn),user:null,currentUrl:window.location.pathname,isOffline:Boolean(getMeta("offline")),isSideNavExpanded:!1,isSearchExpanded:!1,isPageLoading:!1};let store;store=createStore(initialState);export{config as c,getMeta as g,store as s};
//# sourceMappingURL=store-fa501ab8.js.map