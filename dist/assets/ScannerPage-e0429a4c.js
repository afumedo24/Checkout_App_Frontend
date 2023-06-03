import{_ as F,g as C,h as W,I as q,a as z,i as J,c as X,m as G,r as d,o as Q,d as K,w as b,e as v}from"./index-2e344053.js";import{S as O}from"./Scanner-7318dadf.js";function Z(){if(typeof process>"u"){var n=typeof window<"u"?window:{},r=5e3,t=Date.now(),e=!1;n.document.addEventListener("deviceready",function(){console.log("Ionic Native: deviceready event fired after "+(Date.now()-t)+" ms"),e=!0}),setTimeout(function(){!e&&n.cordova&&console.warn("Ionic Native: deviceready did not fire within "+r+"ms. This can happen when plugins are in an inconsistent state. Try removing plugins from plugins/ and reinstalling them.")},r)}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var S=function(n,r){return S=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var i in e)e.hasOwnProperty(i)&&(t[i]=e[i])},S(n,r)};function T(n,r){S(n,r);function t(){this.constructor=n}n.prototype=r===null?Object.create(r):(t.prototype=r.prototype,new t)}function g(n){return typeof n=="function"}var I=!1,l={Promise:void 0,set useDeprecatedSynchronousErrorHandling(n){if(n){var r=new Error;""+r.stack}I=n},get useDeprecatedSynchronousErrorHandling(){return I}};function y(n){setTimeout(function(){throw n},0)}var w={closed:!0,next:function(n){},error:function(n){if(l.useDeprecatedSynchronousErrorHandling)throw n;y(n)},complete:function(){}},B=function(){return Array.isArray||function(n){return n&&typeof n.length=="number"}}();function N(n){return n!==null&&typeof n=="object"}var j=function(){function n(r){return Error.call(this),this.message=r?r.length+` errors occurred during unsubscription:
`+r.map(function(t,e){return e+1+") "+t.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=r,this}return n.prototype=Object.create(Error.prototype),n}(),_=j,nn=function(){function n(r){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,r&&(this._ctorUnsubscribe=!0,this._unsubscribe=r)}return n.prototype.unsubscribe=function(){var r;if(!this.closed){var t=this,e=t._parentOrParents,i=t._ctorUnsubscribe,o=t._unsubscribe,u=t._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,e instanceof n)e.remove(this);else if(e!==null)for(var s=0;s<e.length;++s){var c=e[s];c.remove(this)}if(g(o)){i&&(this._unsubscribe=void 0);try{o.call(this)}catch(E){r=E instanceof _?x(E.errors):[E]}}if(B(u))for(var s=-1,f=u.length;++s<f;){var a=u[s];if(N(a))try{a.unsubscribe()}catch(m){r=r||[],m instanceof _?r=r.concat(x(m.errors)):r.push(m)}}if(r)throw new _(r)}},n.prototype.add=function(r){var t=r;if(!r)return n.EMPTY;switch(typeof r){case"function":t=new n(r);case"object":if(t===this||t.closed||typeof t.unsubscribe!="function")return t;if(this.closed)return t.unsubscribe(),t;if(!(t instanceof n)){var e=t;t=new n,t._subscriptions=[e]}break;default:throw new Error("unrecognized teardown "+r+" added to Subscription.")}var i=t._parentOrParents;if(i===null)t._parentOrParents=this;else if(i instanceof n){if(i===this)return t;t._parentOrParents=[i,this]}else if(i.indexOf(this)===-1)i.push(this);else return t;var o=this._subscriptions;return o===null?this._subscriptions=[t]:o.push(t),t},n.prototype.remove=function(r){var t=this._subscriptions;if(t){var e=t.indexOf(r);e!==-1&&t.splice(e,1)}},n.EMPTY=function(r){return r.closed=!0,r}(new n),n}();function x(n){return n.reduce(function(r,t){return r.concat(t instanceof _?t.errors:t)},[])}var P=function(){return typeof Symbol=="function"?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),p=function(n){T(r,n);function r(t,e,i){var o=n.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=w;break;case 1:if(!t){o.destination=w;break}if(typeof t=="object"){t instanceof r?(o.syncErrorThrowable=t.syncErrorThrowable,o.destination=t,t.add(o)):(o.syncErrorThrowable=!0,o.destination=new A(o,t));break}default:o.syncErrorThrowable=!0,o.destination=new A(o,t,e,i);break}return o}return r.prototype[P]=function(){return this},r.create=function(t,e,i){var o=new r(t,e,i);return o.syncErrorThrowable=!1,o},r.prototype.next=function(t){this.isStopped||this._next(t)},r.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},r.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},r.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,n.prototype.unsubscribe.call(this))},r.prototype._next=function(t){this.destination.next(t)},r.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},r.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},r.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},r}(nn),A=function(n){T(r,n);function r(t,e,i,o){var u=n.call(this)||this;u._parentSubscriber=t;var s,c=u;return g(e)?s=e:e&&(s=e.next,i=e.error,o=e.complete,e!==w&&(c=Object.create(e),g(c.unsubscribe)&&u.add(c.unsubscribe.bind(c)),c.unsubscribe=u.unsubscribe.bind(u))),u._context=c,u._next=s,u._error=i,u._complete=o,u}return r.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;!l.useDeprecatedSynchronousErrorHandling||!e.syncErrorThrowable?this.__tryOrUnsub(this._next,t):this.__tryOrSetError(e,this._next,t)&&this.unsubscribe()}},r.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,i=l.useDeprecatedSynchronousErrorHandling;if(this._error)!i||!e.syncErrorThrowable?(this.__tryOrUnsub(this._error,t),this.unsubscribe()):(this.__tryOrSetError(e,this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)i?(e.syncErrorValue=t,e.syncErrorThrown=!0):y(t),this.unsubscribe();else{if(this.unsubscribe(),i)throw t;y(t)}}},r.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var i=function(){return t._complete.call(t._context)};!l.useDeprecatedSynchronousErrorHandling||!e.syncErrorThrowable?(this.__tryOrUnsub(i),this.unsubscribe()):(this.__tryOrSetError(e,i),this.unsubscribe())}else this.unsubscribe()}},r.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(i){if(this.unsubscribe(),l.useDeprecatedSynchronousErrorHandling)throw i;y(i)}},r.prototype.__tryOrSetError=function(t,e,i){if(!l.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,i)}catch(o){return l.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=o,t.syncErrorThrown=!0,!0):(y(o),!0)}return!1},r.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},r}(p);function rn(n){for(;n;){var r=n,t=r.closed,e=r.destination,i=r.isStopped;if(t||i)return!1;e&&e instanceof p?n=e:n=null}return!0}function tn(n,r,t){if(n){if(n instanceof p)return n;if(n[P])return n[P]()}return!n&&!r&&!t?new p(w):new p(n,r,t)}var en=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}();function on(n){return n}function un(n){return n.length===0?on:n.length===1?n[0]:function(t){return n.reduce(function(e,i){return i(e)},t)}}var D=function(){function n(r){this._isScalar=!1,r&&(this._subscribe=r)}return n.prototype.lift=function(r){var t=new n;return t.source=this,t.operator=r,t},n.prototype.subscribe=function(r,t,e){var i=this.operator,o=tn(r,t,e);if(i?o.add(i.call(o,this.source)):o.add(this.source||l.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),l.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},n.prototype._trySubscribe=function(r){try{return this._subscribe(r)}catch(t){l.useDeprecatedSynchronousErrorHandling&&(r.syncErrorThrown=!0,r.syncErrorValue=t),rn(r)?r.error(t):console.warn(t)}},n.prototype.forEach=function(r,t){var e=this;return t=R(t),new t(function(i,o){var u;u=e.subscribe(function(s){try{r(s)}catch(c){o(c),u&&u.unsubscribe()}},o,i)})},n.prototype._subscribe=function(r){var t=this.source;return t&&t.subscribe(r)},n.prototype[en]=function(){return this},n.prototype.pipe=function(){for(var r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];return r.length===0?this:un(r)(this)},n.prototype.toPromise=function(r){var t=this;return r=R(r),new r(function(e,i){var o;t.subscribe(function(u){return o=u},function(u){return i(u)},function(){return e(o)})})},n.create=function(r){return new n(r)},n}();function R(n){if(n||(n=Promise),!n)throw new Error("no Promise impl found");return n}function sn(n,r){return function(e){if(typeof n!="function")throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return e.lift(new cn(n,r))}}var cn=function(){function n(r,t){this.project=r,this.thisArg=t}return n.prototype.call=function(r,t){return t.subscribe(new an(r,this.project,this.thisArg))},n}(),an=function(n){T(r,n);function r(t,e,i){var o=n.call(this,t)||this;return o.project=e,o.count=0,o.thisArg=i||o,o}return r.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(i){this.destination.error(i);return}this.destination.next(e)},r}(p);function H(n,r,t,e){return g(t)&&(e=t,t=void 0),e?H(n,r,t).pipe(sn(function(i){return B(i)?e.apply(void 0,i):e(i)})):new D(function(i){function o(u){arguments.length>1?i.next(Array.prototype.slice.call(arguments)):i.next(u)}U(n,r,o,i,t)})}function U(n,r,t,e,i){var o;if(hn(n)){var u=n;n.addEventListener(r,t,i),o=function(){return u.removeEventListener(r,t,i)}}else if(ln(n)){var s=n;n.on(r,t),o=function(){return s.off(r,t)}}else if(fn(n)){var c=n;n.addListener(r,t),o=function(){return c.removeListener(r,t)}}else if(n&&n.length)for(var f=0,a=n.length;f<a;f++)U(n[f],r,t,e,i);else throw new TypeError("Invalid event target");e.add(o)}function fn(n){return n&&typeof n.addListener=="function"&&typeof n.removeListener=="function"}function ln(n){return n&&typeof n.on=="function"&&typeof n.off=="function"}function hn(n){return n&&typeof n.addEventListener=="function"&&typeof n.removeEventListener=="function"}var pn={error:"cordova_not_available"},dn={error:"plugin_not_installed"};function M(n){var r=function(){if(Promise)return new Promise(function(o,u){n(o,u)});console.error("No Promise support or polyfill found. To enable Ionic Native support, please add the es6-promise polyfill before this script, or run with a library like Angular or on a recent browser.")};if(typeof window<"u"&&window.angular){var t=window.document,e=window.angular.element(t.querySelector("[ng-app]")||t.body).injector();if(e){var i=e.get("$q");return i(function(o,u){n(o,u)})}console.warn("Angular 1 was detected but $q couldn't be retrieved. This is usually when the app is not bootstrapped on the html or body tag. Falling back to native promises which won't trigger an automatic digest when promises resolve.")}return r()}function yn(n,r,t,e){e===void 0&&(e={});var i,o,u=M(function(s,c){e.destruct?i=h(n,r,t,e,function(){for(var f=[],a=0;a<arguments.length;a++)f[a]=arguments[a];return s(f)},function(){for(var f=[],a=0;a<arguments.length;a++)f[a]=arguments[a];return c(f)}):i=h(n,r,t,e,s,c),o=c});return i&&i.error&&(u.catch(function(){}),typeof o=="function"&&o(i.error)),u}function bn(n,r,t,e){return e===void 0&&(e={}),M(function(i,o){var u=h(n,r,t,e);u?u.error?o(u.error):u.then&&u.then(i).catch(o):o({error:"unexpected_error"})})}function vn(n,r,t,e){return e===void 0&&(e={}),new D(function(i){var o;return e.destruct?o=h(n,r,t,e,function(){for(var u=[],s=0;s<arguments.length;s++)u[s]=arguments[s];return i.next(u)},function(){for(var u=[],s=0;s<arguments.length;s++)u[s]=arguments[s];return i.error(u)}):o=h(n,r,t,e,i.next.bind(i),i.error.bind(i)),o&&o.error&&(i.error(o.error),i.complete()),function(){try{if(e.clearFunction)return e.clearWithArgs?h(n,e.clearFunction,t,e,i.next.bind(i),i.error.bind(i)):h(n,e.clearFunction,[])}catch(u){console.warn("Unable to clear the previous observable watch for",n.constructor.getPluginName(),r),console.warn(u)}}})}function _n(n,r){return r=typeof window<"u"&&r?V(window,r):r||(typeof window<"u"?window:{}),H(r,n)}function Y(n,r,t){var e,i,o;return typeof n=="string"?e=n:(e=n.constructor.getPluginRef(),t=n.constructor.getPluginName(),o=n.constructor.getPluginInstallName()),i=$(e),!i||r&&typeof i[r]>"u"?typeof window>"u"||!window.cordova?(En(t,r),pn):(wn(t,o,r),dn):!0}function gn(n,r,t,e){if(r===void 0&&(r={}),r.sync)return n;if(r.callbackOrder==="reverse")n.unshift(e),n.unshift(t);else if(r.callbackStyle==="node")n.push(function(s,c){s?e(s):t(c)});else if(r.callbackStyle==="object"&&r.successName&&r.errorName){var i={};i[r.successName]=t,i[r.errorName]=e,n.push(i)}else if(typeof r.successIndex<"u"||typeof r.errorIndex<"u"){var o=function(){r.successIndex>n.length?n[r.successIndex]=t:n.splice(r.successIndex,0,t)},u=function(){r.errorIndex>n.length?n[r.errorIndex]=e:n.splice(r.errorIndex,0,e)};r.successIndex>r.errorIndex?(u(),o()):(o(),u())}else n.push(t),n.push(e);return n}function h(n,r,t,e,i,o){e===void 0&&(e={}),t=gn(t,e,i,o);var u=Y(n,r);if(u===!0){var s=$(n.constructor.getPluginRef());return s[r].apply(s,t)}else return u}function $(n){return typeof window<"u"?V(window,n):null}function V(n,r){for(var t=r.split("."),e=n,i=0;i<t.length;i++){if(!e)return null;e=e[t[i]]}return e}function wn(n,r,t){console.warn(t?"Native: tried calling "+n+"."+t+", but the "+n+" plugin is not installed.":"Native: tried accessing the "+n+" plugin but it's not installed."),r&&console.warn("Install the "+n+" plugin: 'ionic cordova plugin add "+r+"'")}function En(n,r){typeof process>"u"&&console.warn(r?"Native: tried calling "+n+"."+r+", but Cordova is not available. Make sure to include cordova.js or run in a device/simulator":"Native: tried accessing the "+n+" plugin but Cordova is not available. Make sure to include cordova.js or run in a device/simulator")}var mn=function(n,r,t){return t===void 0&&(t={}),function(){for(var e=[],i=0;i<arguments.length;i++)e[i]=arguments[i];return t.sync?h(n,r,e,t):t.observable?vn(n,r,e,t):t.eventObservable&&t.event?_n(t.event,t.element):t.otherPromise?bn(n,r,e,t):yn(n,r,e,t)}};function Sn(n,r){for(var t=r.split("."),e=n,i=0;i<t.length;i++){if(!e)return null;e=e[t[i]]}return e}var Pn=function(){function n(){}return n.installed=function(){var r=Y(this.pluginRef)===!0;return r},n.getPlugin=function(){return typeof window<"u"?Sn(window,this.pluginRef):null},n.getPluginName=function(){var r=this.pluginName;return r},n.getPluginRef=function(){var r=this.pluginRef;return r},n.getPluginInstallName=function(){var r=this.plugin;return r},n.getSupportedPlatforms=function(){var r=this.platforms;return r},n.pluginName="",n.pluginRef="",n.plugin="",n.repo="",n.platforms=[],n.install="",n}();function k(n,r,t,e){return mn(n,r,t).apply(this,e)}Z();var Tn=globalThis&&globalThis.__extends||function(){var n=function(r,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,i){e.__proto__=i}||function(e,i){for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])},n(r,t)};return function(r,t){n(r,t);function e(){this.constructor=r}r.prototype=t===null?Object.create(t):(e.prototype=t.prototype,new e)}}(),In=function(n){Tn(r,n);function r(){var t=n!==null&&n.apply(this,arguments)||this;return t.Encode={TEXT_TYPE:"TEXT_TYPE",EMAIL_TYPE:"EMAIL_TYPE",PHONE_TYPE:"PHONE_TYPE",SMS_TYPE:"SMS_TYPE"},t}return r.prototype.scan=function(t){return k(this,"scan",{callbackOrder:"reverse"},arguments)},r.prototype.encode=function(t,e){return k(this,"encode",{},arguments)},r.pluginName="BarcodeScanner",r.plugin="phonegap-plugin-barcodescanner",r.pluginRef="cordova.plugins.barcodeScanner",r.repo="https://github.com/phonegap/phonegap-plugin-barcodescanner",r.platforms=["Android","BlackBerry 10","Browser","iOS","Windows"],r}(Pn),L=new In;const xn={components:{Scanner:O,IonButtons:C,IonButton:W,IonContent:q,IonHeader:z,IonIcon:J,IonToolbar:X,modalController:G,BarcodeScanner:L},methods:{async scanBarcode(){try{const n=await L.scan();alert(`Scanned barcode: ${n.text}`)}catch(n){console.error(n)}}}};function An(n,r,t,e,i,o){const u=d("ion-icon"),s=d("ion-fab-button"),c=d("ion-fab"),f=d("ion-content"),a=d("ion-page");return Q(),K(a,null,{default:b(()=>[v(f,{class:"ion-padding"},{default:b(()=>[v(c,{vertical:"bottom",horizontal:"end",slot:"fixed"},{default:b(()=>[v(s,{onClick:o.scanBarcode},{default:b(()=>[v(u,{name:"scan"})]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1})}const Ln=F(xn,[["render",An]]);export{Ln as default};
