(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7278],{2594:function(t,e,r){"use strict";var n=r(64666);Object.defineProperty(e,"__esModule",{value:!0}),e.BroadcastChannel=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"nextauth.message";return{receive:function(e){var r=function(r){if(r.key===t){var n,o=JSON.parse(null!==(n=r.newValue)&&void 0!==n?n:"{}");(null==o?void 0:o.event)==="session"&&null!=o&&o.data&&e(o)}};return window.addEventListener("storage",r),function(){return window.removeEventListener("storage",r)}},post:function(e){if("undefined"!=typeof window)try{localStorage.setItem(t,JSON.stringify(c(c({},e),{},{timestamp:f()})))}catch(t){}}}},e.apiBaseUrl=l,e.fetchData=function(t,e,r){return s.apply(this,arguments)},e.now=f;var o=n(r(41102)),a=n(r(9089)),u=n(r(16752));function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach(function(e){(0,a.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}function s(){return(s=(0,u.default)(o.default.mark(function t(e,r,n){var a,u,i,s,f,p,d,v,h,y=arguments;return o.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u=(a=y.length>3&&void 0!==y[3]?y[3]:{}).ctx,s=void 0===(i=a.req)?null==u?void 0:u.req:i,f="".concat(l(r),"/").concat(e),t.prev=2,d={headers:c({"Content-Type":"application/json"},null!=s&&null!==(p=s.headers)&&void 0!==p&&p.cookie?{cookie:s.headers.cookie}:{})},null!=s&&s.body&&(d.body=JSON.stringify(s.body),d.method="POST"),t.next=7,fetch(f,d);case 7:return v=t.sent,t.next=10,v.json();case 10:if(h=t.sent,v.ok){t.next=13;break}throw h;case 13:return t.abrupt("return",Object.keys(h).length>0?h:null);case 16:return t.prev=16,t.t0=t.catch(2),n.error("CLIENT_FETCH_ERROR",{error:t.t0,url:f}),t.abrupt("return",null);case 20:case"end":return t.stop()}},t,null,[[2,16]])}))).apply(this,arguments)}function l(t){return"undefined"==typeof window?"".concat(t.baseUrlServer).concat(t.basePathServer):t.basePath}function f(){return Math.floor(Date.now()/1e3)}},93531:function(t,e,r){"use strict";var n=r(64666);Object.defineProperty(e,"__esModule",{value:!0}),e.UnsupportedStrategy=e.UnknownError=e.OAuthCallbackError=e.MissingSecret=e.MissingAuthorize=e.MissingAdapterMethods=e.MissingAdapter=e.MissingAPIRoute=e.InvalidCallbackUrl=e.AccountNotLinkedError=void 0,e.adapterErrorHandler=function(t,e){if(t)return Object.keys(t).reduce(function(r,n){return r[n]=(0,a.default)(o.default.mark(function r(){var a,u,i,c,s,l=arguments;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:for(r.prev=0,u=Array(a=l.length),i=0;i<a;i++)u[i]=l[i];return e.debug("adapter_".concat(n),{args:u}),c=t[n],r.next=6,c.apply(void 0,u);case 6:return r.abrupt("return",r.sent);case 9:throw r.prev=9,r.t0=r.catch(0),e.error("adapter_error_".concat(n),r.t0),(s=new v(r.t0)).name="".concat(S(n),"Error"),s;case 15:case"end":return r.stop()}},r,null,[[0,9]])})),r},{})},e.capitalize=S,e.eventsErrorHandler=function(t,e){return Object.keys(t).reduce(function(r,n){return r[n]=(0,a.default)(o.default.mark(function r(){var a,u=arguments;return o.default.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,a=t[n],r.next=4,a.apply(void 0,u);case 4:return r.abrupt("return",r.sent);case 7:r.prev=7,r.t0=r.catch(0),e.error("".concat(E(n),"_EVENT_ERROR"),r.t0);case 10:case"end":return r.stop()}},r,null,[[0,7]])})),r},{})},e.upperSnake=E;var o=n(r(41102)),a=n(r(16752)),u=n(r(46328)),i=n(r(9089)),c=n(r(40225)),s=n(r(69474)),l=n(r(98835)),f=n(r(76333)),p=n(r(8761));function d(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var r,n=(0,p.default)(t);return r=e?Reflect.construct(n,arguments,(0,p.default)(this).constructor):n.apply(this,arguments),(0,f.default)(this,r)}}var v=function(t){(0,l.default)(r,t);var e=d(r);function r(t){var n,o;return(0,c.default)(this,r),(o=e.call(this,null!==(n=null==t?void 0:t.message)&&void 0!==n?n:t)).name="UnknownError",o.code=t.code,t instanceof Error&&(o.stack=t.stack),o}return(0,s.default)(r,[{key:"toJSON",value:function(){return{name:this.name,message:this.message,stack:this.stack}}}]),r}((0,n(r(5002)).default)(Error));e.UnknownError=v;var h=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","OAuthCallbackError"),t}return(0,s.default)(r)}(v);e.OAuthCallbackError=h;var y=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","AccountNotLinkedError"),t}return(0,s.default)(r)}(v);e.AccountNotLinkedError=y;var g=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","MissingAPIRouteError"),(0,i.default)((0,u.default)(t),"code","MISSING_NEXTAUTH_API_ROUTE_ERROR"),t}return(0,s.default)(r)}(v);e.MissingAPIRoute=g;var b=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","MissingSecretError"),(0,i.default)((0,u.default)(t),"code","NO_SECRET"),t}return(0,s.default)(r)}(v);e.MissingSecret=b;var x=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","MissingAuthorizeError"),(0,i.default)((0,u.default)(t),"code","CALLBACK_CREDENTIALS_HANDLER_ERROR"),t}return(0,s.default)(r)}(v);e.MissingAuthorize=x;var w=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","MissingAdapterError"),(0,i.default)((0,u.default)(t),"code","EMAIL_REQUIRES_ADAPTER_ERROR"),t}return(0,s.default)(r)}(v);e.MissingAdapter=w;var _=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","MissingAdapterMethodsError"),(0,i.default)((0,u.default)(t),"code","MISSING_ADAPTER_METHODS_ERROR"),t}return(0,s.default)(r)}(v);e.MissingAdapterMethods=_;var m=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","UnsupportedStrategyError"),(0,i.default)((0,u.default)(t),"code","CALLBACK_CREDENTIALS_JWT_ERROR"),t}return(0,s.default)(r)}(v);e.UnsupportedStrategy=m;var O=function(t){(0,l.default)(r,t);var e=d(r);function r(){var t;(0,c.default)(this,r);for(var n=arguments.length,o=Array(n),a=0;a<n;a++)o[a]=arguments[a];return t=e.call.apply(e,[this].concat(o)),(0,i.default)((0,u.default)(t),"name","InvalidCallbackUrl"),(0,i.default)((0,u.default)(t),"code","INVALID_CALLBACK_URL_ERROR"),t}return(0,s.default)(r)}(v);function E(t){return t.replace(/([A-Z])/g,"_$1").toUpperCase()}function S(t){return"".concat(t[0].toUpperCase()).concat(t.slice(1))}e.InvalidCallbackUrl=O},37278:function(t,e,r){"use strict";var n,o,a,u,i,c=r(28070),s=r(64666),l=r(93278);Object.defineProperty(e,"__esModule",{value:!0});var f={SessionContext:!0,useSession:!0,getSession:!0,getCsrfToken:!0,getProviders:!0,signIn:!0,signOut:!0,SessionProvider:!0};e.SessionContext=void 0,e.SessionProvider=function(t){if(!L)throw Error("React Context is unavailable in Server Components");var e,r,n,o,a,u,i=t.children,c=t.basePath,s=t.refetchInterval,l=t.refetchWhenOffline;c&&(j.basePath=c);var f=void 0!==t.session;j._lastSync=f?(0,x.now)():0;var d=y.useState(function(){return f&&(j._session=t.session),t.session}),g=(0,h.default)(d,2),b=g[0],_=g[1],m=y.useState(!f),O=(0,h.default)(m,2),E=O[0],S=O[1];y.useEffect(function(){return j._getSession=(0,v.default)(p.default.mark(function t(){var e,r,n=arguments;return p.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e=(n.length>0&&void 0!==n[0]?n[0]:{}).event,t.prev=1,!((r="storage"===e)||void 0===j._session)){t.next=10;break}return j._lastSync=(0,x.now)(),t.next=7,R({broadcast:!r});case 7:return j._session=t.sent,_(j._session),t.abrupt("return");case 10:if(!(!e||null===j._session||(0,x.now)()<j._lastSync)){t.next=12;break}return t.abrupt("return");case 12:return j._lastSync=(0,x.now)(),t.next=15,R();case 15:j._session=t.sent,_(j._session),t.next=22;break;case 19:t.prev=19,t.t0=t.catch(1),P.error("CLIENT_SESSION_ERROR",t.t0);case 22:return t.prev=22,S(!1),t.finish(22);case 25:case"end":return t.stop()}},t,null,[[1,19,22,25]])})),j._getSession(),function(){j._lastSync=0,j._session=void 0,j._getSession=function(){}}},[]),y.useEffect(function(){var t=k.receive(function(){return j._getSession({event:"storage"})});return function(){return t()}},[]),y.useEffect(function(){var e=t.refetchOnWindowFocus,r=void 0===e||e,n=function(){r&&"visible"===document.visibilityState&&j._getSession({event:"visibilitychange"})};return document.addEventListener("visibilitychange",n,!1),function(){return document.removeEventListener("visibilitychange",n,!1)}},[t.refetchOnWindowFocus]);var M=(e=y.useState("undefined"!=typeof navigator&&navigator.onLine),n=(r=(0,h.default)(e,2))[0],o=r[1],a=function(){return o(!0)},u=function(){return o(!1)},y.useEffect(function(){return window.addEventListener("online",a),window.addEventListener("offline",u),function(){window.removeEventListener("online",a),window.removeEventListener("offline",u)}},[]),n),T=!1!==l||M;y.useEffect(function(){if(s&&T){var t=setInterval(function(){j._session&&j._getSession({event:"poll"})},1e3*s);return function(){return clearInterval(t)}}},[s,T]);var U=y.useMemo(function(){return{data:b,status:E?"loading":b?"authenticated":"unauthenticated",update:function(t){return(0,v.default)(p.default.mark(function e(){var r;return p.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(E||!b)){e.next=2;break}return e.abrupt("return");case 2:return S(!0),e.t0=x.fetchData,e.t1=j,e.t2=P,e.next=8,A();case 8:return e.t3=e.sent,e.t4=t,e.t5={csrfToken:e.t3,data:e.t4},e.t6={body:e.t5},e.t7={req:e.t6},e.next=15,(0,e.t0)("session",e.t1,e.t2,e.t7);case 15:return r=e.sent,S(!1),r&&(_(r),k.post({event:"session",data:{trigger:"getSession"}})),e.abrupt("return",r);case 19:case"end":return e.stop()}},e)}))()}}},[b,E]);return(0,w.jsx)(L.Provider,{value:U,children:i})},e.getCsrfToken=A,e.getProviders=U,e.getSession=R,e.signIn=function(t,e,r){return N.apply(this,arguments)},e.signOut=function(t){return I.apply(this,arguments)},e.useSession=function(t){if(!L)throw Error("React Context is unavailable in Server Components");var e=y.useContext(L),r=null!=t?t:{},n=r.required,o=r.onUnauthenticated,a=n&&"unauthenticated"===e.status;return(y.useEffect(function(){if(a){var t="/api/auth/signin?".concat(new URLSearchParams({error:"SessionRequired",callbackUrl:window.location.href}));o?o():window.location.href=t}},[a,o]),a)?{data:e.data,update:e.update,status:"loading"}:e};var p=s(r(41102)),d=s(r(9089)),v=s(r(16752)),h=s(r(94281)),y=O(r(15082)),g=O(r(37201)),b=s(r(17302)),x=r(2594),w=r(76136),_=r(30689);function m(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(m=function(t){return t?r:e})(t)}function O(t,e){if(!e&&t&&t.__esModule)return t;if(null===t||"object"!==l(t)&&"function"!=typeof t)return{default:t};var r=m(e);if(r&&r.has(t))return r.get(t);var n={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var u=o?Object.getOwnPropertyDescriptor(t,a):null;u&&(u.get||u.set)?Object.defineProperty(n,a,u):n[a]=t[a]}return n.default=t,r&&r.set(t,n),n}function E(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function S(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?E(Object(r),!0).forEach(function(e){(0,d.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):E(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}Object.keys(_).forEach(function(t){!("default"===t||"__esModule"===t||Object.prototype.hasOwnProperty.call(f,t))&&(t in e&&e[t]===_[t]||Object.defineProperty(e,t,{enumerable:!0,get:function(){return _[t]}}))});var j={baseUrl:(0,b.default)(null!==(n=c.env.NEXTAUTH_URL)&&void 0!==n?n:c.env.VERCEL_URL).origin,basePath:(0,b.default)(c.env.NEXTAUTH_URL).path,baseUrlServer:(0,b.default)(null!==(o=null!==(a=c.env.NEXTAUTH_URL_INTERNAL)&&void 0!==a?a:c.env.NEXTAUTH_URL)&&void 0!==o?o:c.env.VERCEL_URL).origin,basePathServer:(0,b.default)(null!==(u=c.env.NEXTAUTH_URL_INTERNAL)&&void 0!==u?u:c.env.NEXTAUTH_URL).path,_lastSync:0,_session:void 0,_getSession:function(){}},k=(0,x.BroadcastChannel)(),P=(0,g.proxyLogger)(g.default,j.basePath),L=null===(i=y.createContext)||void 0===i?void 0:i.call(y,void 0);function R(t){return M.apply(this,arguments)}function M(){return(M=(0,v.default)(p.default.mark(function t(e){var r,n;return p.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,x.fetchData)("session",j,P,e);case 2:return n=t.sent,(null===(r=null==e?void 0:e.broadcast)||void 0===r||r)&&k.post({event:"session",data:{trigger:"getSession"}}),t.abrupt("return",n);case 5:case"end":return t.stop()}},t)}))).apply(this,arguments)}function A(t){return T.apply(this,arguments)}function T(){return(T=(0,v.default)(p.default.mark(function t(e){var r;return p.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,x.fetchData)("csrf",j,P,e);case 2:return r=t.sent,t.abrupt("return",null==r?void 0:r.csrfToken);case 4:case"end":return t.stop()}},t)}))).apply(this,arguments)}function U(){return C.apply(this,arguments)}function C(){return(C=(0,v.default)(p.default.mark(function t(){return p.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,x.fetchData)("providers",j,P);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}))).apply(this,arguments)}function N(){return(N=(0,v.default)(p.default.mark(function t(e,r,n){var o,a,u,i,c,s,l,f,d,v,h,y,g,b,w,_,m;return p.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return u=void 0===(a=(o=null!=r?r:{}).callbackUrl)?window.location.href:a,c=void 0===(i=o.redirect)||i,s=(0,x.apiBaseUrl)(j),t.next=4,U();case 4:if(l=t.sent){t.next=8;break}return window.location.href="".concat(s,"/error"),t.abrupt("return");case 8:if(!(!e||!(e in l))){t.next=11;break}return window.location.href="".concat(s,"/signin?").concat(new URLSearchParams({callbackUrl:u})),t.abrupt("return");case 11:return f="credentials"===l[e].type,d="email"===l[e].type,v=f||d,h="".concat(s,"/").concat(f?"callback":"signin","/").concat(e),y="".concat(h).concat(n?"?".concat(new URLSearchParams(n)):""),t.t0=fetch,t.t1=y,t.t2={"Content-Type":"application/x-www-form-urlencoded"},t.t3=URLSearchParams,t.t4=S,t.t5=S({},r),t.t6={},t.next=25,A();case 25:return t.t7=t.sent,t.t8=u,t.t9={csrfToken:t.t7,callbackUrl:t.t8,json:!0},t.t10=(0,t.t4)(t.t5,t.t6,t.t9),t.t11=new t.t3(t.t10),t.t12={method:"post",headers:t.t2,body:t.t11},t.next=33,(0,t.t0)(t.t1,t.t12);case 33:return g=t.sent,t.next=36,g.json();case 36:if(b=t.sent,!(c||!v)){t.next=42;break}return _=null!==(w=b.url)&&void 0!==w?w:u,window.location.href=_,_.includes("#")&&window.location.reload(),t.abrupt("return");case 42:if(m=new URL(b.url).searchParams.get("error"),!g.ok){t.next=46;break}return t.next=46,j._getSession({event:"storage"});case 46:return t.abrupt("return",{error:m,status:g.status,ok:g.ok,url:m?null:b.url});case 47:case"end":return t.stop()}},t)}))).apply(this,arguments)}function I(){return(I=(0,v.default)(p.default.mark(function t(e){var r,n,o,a,u,i,c,s,l;return p.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o=void 0===(n=(null!=e?e:{}).callbackUrl)?window.location.href:n,a=(0,x.apiBaseUrl)(j),t.t0={"Content-Type":"application/x-www-form-urlencoded"},t.t1=URLSearchParams,t.next=6,A();case 6:return t.t2=t.sent,t.t3=o,t.t4={csrfToken:t.t2,callbackUrl:t.t3,json:!0},t.t5=new t.t1(t.t4),u={method:"post",headers:t.t0,body:t.t5},t.next=13,fetch("".concat(a,"/signout"),u);case 13:return i=t.sent,t.next=16,i.json();case 16:if(c=t.sent,k.post({event:"session",data:{trigger:"signout"}}),!(null===(r=null==e?void 0:e.redirect)||void 0===r||r)){t.next=23;break}return l=null!==(s=c.url)&&void 0!==s?s:o,window.location.href=l,l.includes("#")&&window.location.reload(),t.abrupt("return");case 23:return t.next=25,j._getSession({event:"storage"});case 25:return t.abrupt("return",c);case 26:case"end":return t.stop()}},t)}))).apply(this,arguments)}e.SessionContext=L},30689:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0})},37201:function(t,e,r){"use strict";var n=r(64666);Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,e.proxyLogger=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,e=arguments.length>1?arguments[1]:void 0;try{if("undefined"==typeof window)return t;var r={},n=function(t){r[t]=function(r,n){c[t](r,n),"error"===t&&(n=i(n)),n.client=!0;var a="".concat(e,"/_log"),s=new URLSearchParams(function(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach(function(e){(0,o.default)(t,e,r[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))})}return t}({level:t,code:r},n));return navigator.sendBeacon?navigator.sendBeacon(a,s):fetch(a,{method:"POST",body:s,keepalive:!0})}};for(var a in t)n(a);return r}catch(t){return c}},e.setLogger=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0;e||(c.debug=function(){}),t.error&&(c.error=t.error),t.warn&&(c.warn=t.warn),t.debug&&(c.debug=t.debug)};var o=n(r(9089)),a=r(93531);function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function i(t){var e;return t instanceof Error&&!(t instanceof a.UnknownError)?{message:t.message,stack:t.stack,name:t.name}:(null!=t&&t.error&&(t.error=i(t.error),t.message=null!==(e=t.message)&&void 0!==e?e:t.error.message),t)}var c={error:function(t,e){e=i(e),console.error("[next-auth][error][".concat(t,"]"),"\nhttps://next-auth.js.org/errors#".concat(t.toLowerCase()),e.message,e)},warn:function(t){console.warn("[next-auth][warn][".concat(t,"]"),"\nhttps://next-auth.js.org/warnings#".concat(t.toLowerCase()))},debug:function(t,e){console.log("[next-auth][debug][".concat(t,"]"),e)}};e.default=c},17302:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){var e;let r=new URL("http://localhost:3000/api/auth");t&&!t.startsWith("http")&&(t=`https://${t}`);let n=new URL(null!==(e=t)&&void 0!==e?e:r),o=("/"===n.pathname?r.pathname:n.pathname).replace(/\/$/,""),a=`${n.origin}${o}`;return{origin:n.origin,host:n.host,path:o,base:a,toString:()=>a}}},60368:function(t){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=Array(e);r<e;r++)n[r]=t[r];return n},t.exports.__esModule=!0,t.exports.default=t.exports},40285:function(t){t.exports=function(t){if(Array.isArray(t))return t},t.exports.__esModule=!0,t.exports.default=t.exports},46328:function(t){t.exports=function(t){if(void 0===t)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return t},t.exports.__esModule=!0,t.exports.default=t.exports},16752:function(t){function e(t,e,r,n,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void r(t)}i.done?e(c):Promise.resolve(c).then(n,o)}t.exports=function(t){return function(){var r=this,n=arguments;return new Promise(function(o,a){var u=t.apply(r,n);function i(t){e(u,o,a,i,c,"next",t)}function c(t){e(u,o,a,i,c,"throw",t)}i(void 0)})}},t.exports.__esModule=!0,t.exports.default=t.exports},40225:function(t){t.exports=function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")},t.exports.__esModule=!0,t.exports.default=t.exports},54549:function(t,e,r){var n=r(46749),o=r(27595);t.exports=function(t,e,r){if(n())return Reflect.construct.apply(null,arguments);var a=[null];a.push.apply(a,e);var u=new(t.bind.apply(t,a));return r&&o(u,r.prototype),u},t.exports.__esModule=!0,t.exports.default=t.exports},69474:function(t,e,r){var n=r(56365);function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,n(o.key),o)}}t.exports=function(t,e,r){return e&&o(t.prototype,e),r&&o(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t},t.exports.__esModule=!0,t.exports.default=t.exports},9089:function(t,e,r){var n=r(56365);t.exports=function(t,e,r){return(e=n(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t},t.exports.__esModule=!0,t.exports.default=t.exports},8761:function(t){function e(r){return t.exports=e=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},98835:function(t,e,r){var n=r(27595);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&n(t,e)},t.exports.__esModule=!0,t.exports.default=t.exports},64666:function(t){t.exports=function(t){return t&&t.__esModule?t:{default:t}},t.exports.__esModule=!0,t.exports.default=t.exports},14200:function(t){t.exports=function(t){try{return -1!==Function.toString.call(t).indexOf("[native code]")}catch(e){return"function"==typeof t}},t.exports.__esModule=!0,t.exports.default=t.exports},46749:function(t){function e(){try{var r=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch(t){}return(t.exports=e=function(){return!!r},t.exports.__esModule=!0,t.exports.default=t.exports)()}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},67079:function(t){t.exports=function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,u,i=[],c=!0,s=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;c=!1}else for(;!(c=(n=a.call(r)).done)&&(i.push(n.value),i.length!==e);c=!0);}catch(t){s=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw o}}return i}},t.exports.__esModule=!0,t.exports.default=t.exports},13689:function(t){t.exports=function(){throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},t.exports.__esModule=!0,t.exports.default=t.exports},76333:function(t,e,r){var n=r(93278).default,o=r(46328);t.exports=function(t,e){if(e&&("object"==n(e)||"function"==typeof e))return e;if(void 0!==e)throw TypeError("Derived constructors may only return object or undefined");return o(t)},t.exports.__esModule=!0,t.exports.default=t.exports},65217:function(t,e,r){var n=r(93278).default;function o(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */t.exports=o=function(){return r},t.exports.__esModule=!0,t.exports.default=t.exports;var e,r={},a=Object.prototype,u=a.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},c="function"==typeof Symbol?Symbol:{},s=c.iterator||"@@iterator",l=c.asyncIterator||"@@asyncIterator",f=c.toStringTag||"@@toStringTag";function p(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{p({},"")}catch(t){p=function(t,e,r){return t[e]=r}}function d(t,r,n,o){var a,u,c=Object.create((r&&r.prototype instanceof x?r:x).prototype);return i(c,"_invoke",{value:(a=new R(o||[]),u=h,function(r,o){if(u===y)throw Error("Generator is already running");if(u===g){if("throw"===r)throw o;return{value:e,done:!0}}for(a.method=r,a.arg=o;;){var i=a.delegate;if(i){var c=function t(r,n){var o=n.method,a=r.iterator[o];if(a===e)return n.delegate=null,"throw"===o&&r.iterator.return&&(n.method="return",n.arg=e,t(r,n),"throw"===n.method)||"return"!==o&&(n.method="throw",n.arg=TypeError("The iterator does not provide a '"+o+"' method")),b;var u=v(a,r.iterator,n.arg);if("throw"===u.type)return n.method="throw",n.arg=u.arg,n.delegate=null,b;var i=u.arg;return i?i.done?(n[r.resultName]=i.value,n.next=r.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,b):i:(n.method="throw",n.arg=TypeError("iterator result is not an object"),n.delegate=null,b)}(i,a);if(c){if(c===b)continue;return c}}if("next"===a.method)a.sent=a._sent=a.arg;else if("throw"===a.method){if(u===h)throw u=g,a.arg;a.dispatchException(a.arg)}else"return"===a.method&&a.abrupt("return",a.arg);u=y;var s=v(t,n,a);if("normal"===s.type){if(u=a.done?g:"suspendedYield",s.arg===b)continue;return{value:s.arg,done:a.done}}"throw"===s.type&&(u=g,a.method="throw",a.arg=s.arg)}})}),c}function v(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}r.wrap=d;var h="suspendedStart",y="executing",g="completed",b={};function x(){}function w(){}function _(){}var m={};p(m,s,function(){return this});var O=Object.getPrototypeOf,E=O&&O(O(M([])));E&&E!==a&&u.call(E,s)&&(m=E);var S=_.prototype=x.prototype=Object.create(m);function j(t){["next","throw","return"].forEach(function(e){p(t,e,function(t){return this._invoke(e,t)})})}function k(t,e){var r;i(this,"_invoke",{value:function(o,a){function i(){return new e(function(r,i){!function r(o,a,i,c){var s=v(t[o],t,a);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==n(f)&&u.call(f,"__await")?e.resolve(f.__await).then(function(t){r("next",t,i,c)},function(t){r("throw",t,i,c)}):e.resolve(f).then(function(t){l.value=t,i(l)},function(t){return r("throw",t,i,c)})}c(s.arg)}(o,a,r,i)})}return r=r?r.then(i,i):i()}})}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function L(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function R(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function M(t){if(t||""===t){var r=t[s];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(u.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}throw TypeError(n(t)+" is not iterable")}return w.prototype=_,i(S,"constructor",{value:_,configurable:!0}),i(_,"constructor",{value:w,configurable:!0}),w.displayName=p(_,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===w||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,_):(t.__proto__=_,p(t,f,"GeneratorFunction")),t.prototype=Object.create(S),t},r.awrap=function(t){return{__await:t}},j(k.prototype),p(k.prototype,l,function(){return this}),r.AsyncIterator=k,r.async=function(t,e,n,o,a){void 0===a&&(a=Promise);var u=new k(d(t,e,n,o),a);return r.isGeneratorFunction(e)?u:u.next().then(function(t){return t.done?t.value:u.next()})},j(S),p(S,f,"Generator"),p(S,s,function(){return this}),p(S,"toString",function(){return"[object Generator]"}),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=M,R.prototype={constructor:R,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(L),!t)for(var r in this)"t"===r.charAt(0)&&u.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function n(n,o){return i.type="throw",i.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=u.call(a,"catchLoc"),s=u.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!s)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,b):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),b},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),L(r),b}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;L(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:M(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),b}},r}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},27595:function(t){function e(r,n){return t.exports=e=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r,n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},94281:function(t,e,r){var n=r(40285),o=r(67079),a=r(53518),u=r(13689);t.exports=function(t,e){return n(t)||o(t,e)||a(t,e)||u()},t.exports.__esModule=!0,t.exports.default=t.exports},41609:function(t,e,r){var n=r(93278).default;t.exports=function(t,e){if("object"!=n(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!=n(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)},t.exports.__esModule=!0,t.exports.default=t.exports},56365:function(t,e,r){var n=r(93278).default,o=r(41609);t.exports=function(t){var e=o(t,"string");return"symbol"==n(e)?e:e+""},t.exports.__esModule=!0,t.exports.default=t.exports},93278:function(t){function e(r){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(r)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},53518:function(t,e,r){var n=r(60368);t.exports=function(t,e){if(t){if("string"==typeof t)return n(t,e);var r=({}).toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}},t.exports.__esModule=!0,t.exports.default=t.exports},5002:function(t,e,r){var n=r(8761),o=r(27595),a=r(14200),u=r(54549);function i(e){var r="function"==typeof Map?new Map:void 0;return t.exports=i=function(t){if(null===t||!a(t))return t;if("function"!=typeof t)throw TypeError("Super expression must either be null or a function");if(void 0!==r){if(r.has(t))return r.get(t);r.set(t,e)}function e(){return u(t,arguments,n(this).constructor)}return e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),o(e,t)},t.exports.__esModule=!0,t.exports.default=t.exports,i(e)}t.exports=i,t.exports.__esModule=!0,t.exports.default=t.exports},41102:function(t,e,r){var n=r(65217)();t.exports=n;try{regeneratorRuntime=n}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=n:Function("r","regeneratorRuntime = r")(n)}}}]);