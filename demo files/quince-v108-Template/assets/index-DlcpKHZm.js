(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var nt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ht(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function IS(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),r}var PS={exports:{}},cu={},ES={exports:{}},Le={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ks=Symbol.for("react.element"),qj=Symbol.for("react.portal"),Gj=Symbol.for("react.fragment"),Kj=Symbol.for("react.strict_mode"),Jj=Symbol.for("react.profiler"),Qj=Symbol.for("react.provider"),Zj=Symbol.for("react.context"),Yj=Symbol.for("react.forward_ref"),Xj=Symbol.for("react.suspense"),e8=Symbol.for("react.memo"),t8=Symbol.for("react.lazy"),dv=Symbol.iterator;function r8(e){return e===null||typeof e!="object"?null:(e=dv&&e[dv]||e["@@iterator"],typeof e=="function"?e:null)}var $S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},NS=Object.assign,kS={};function qi(e,t,r){this.props=e,this.context=t,this.refs=kS,this.updater=r||$S}qi.prototype.isReactComponent={};qi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};qi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function MS(){}MS.prototype=qi.prototype;function Xg(e,t,r){this.props=e,this.context=t,this.refs=kS,this.updater=r||$S}var ep=Xg.prototype=new MS;ep.constructor=Xg;NS(ep,qi.prototype);ep.isPureReactComponent=!0;var fv=Array.isArray,AS=Object.prototype.hasOwnProperty,tp={current:null},DS={key:!0,ref:!0,__self:!0,__source:!0};function RS(e,t,r){var n,o={},i=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)AS.call(t,n)&&!DS.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:ks,type:e,key:i,ref:a,props:o,_owner:tp.current}}function n8(e,t){return{$$typeof:ks,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function rp(e){return typeof e=="object"&&e!==null&&e.$$typeof===ks}function o8(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var gv=/\/+/g;function Sd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?o8(""+e.key):t.toString(36)}function Hl(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case ks:case qj:a=!0}}if(a)return a=e,o=o(a),e=n===""?"."+Sd(a,0):n,fv(o)?(r="",e!=null&&(r=e.replace(gv,"$&/")+"/"),Hl(o,t,r,"",function(u){return u})):o!=null&&(rp(o)&&(o=n8(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(gv,"$&/")+"/")+e)),t.push(o)),1;if(a=0,n=n===""?".":n+":",fv(e))for(var s=0;s<e.length;s++){i=e[s];var c=n+Sd(i,s);a+=Hl(i,t,r,c,o)}else if(c=r8(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=n+Sd(i,s++),a+=Hl(i,t,r,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function ol(e,t,r){if(e==null)return e;var n=[],o=0;return Hl(e,n,"","",function(i){return t.call(r,i,o++)}),n}function i8(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Kt={current:null},Ul={transition:null},a8={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:Ul,ReactCurrentOwner:tp};function LS(){throw Error("act(...) is not supported in production builds of React.")}Le.Children={map:ol,forEach:function(e,t,r){ol(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return ol(e,function(){t++}),t},toArray:function(e){return ol(e,function(t){return t})||[]},only:function(e){if(!rp(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Le.Component=qi;Le.Fragment=Gj;Le.Profiler=Jj;Le.PureComponent=Xg;Le.StrictMode=Kj;Le.Suspense=Xj;Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=a8;Le.act=LS;Le.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=NS({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=tp.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)AS.call(t,c)&&!DS.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:ks,type:e.type,key:o,ref:i,props:n,_owner:a}};Le.createContext=function(e){return e={$$typeof:Zj,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qj,_context:e},e.Consumer=e};Le.createElement=RS;Le.createFactory=function(e){var t=RS.bind(null,e);return t.type=e,t};Le.createRef=function(){return{current:null}};Le.forwardRef=function(e){return{$$typeof:Yj,render:e}};Le.isValidElement=rp;Le.lazy=function(e){return{$$typeof:t8,_payload:{_status:-1,_result:e},_init:i8}};Le.memo=function(e,t){return{$$typeof:e8,type:e,compare:t===void 0?null:t}};Le.startTransition=function(e){var t=Ul.transition;Ul.transition={};try{e()}finally{Ul.transition=t}};Le.unstable_act=LS;Le.useCallback=function(e,t){return Kt.current.useCallback(e,t)};Le.useContext=function(e){return Kt.current.useContext(e)};Le.useDebugValue=function(){};Le.useDeferredValue=function(e){return Kt.current.useDeferredValue(e)};Le.useEffect=function(e,t){return Kt.current.useEffect(e,t)};Le.useId=function(){return Kt.current.useId()};Le.useImperativeHandle=function(e,t,r){return Kt.current.useImperativeHandle(e,t,r)};Le.useInsertionEffect=function(e,t){return Kt.current.useInsertionEffect(e,t)};Le.useLayoutEffect=function(e,t){return Kt.current.useLayoutEffect(e,t)};Le.useMemo=function(e,t){return Kt.current.useMemo(e,t)};Le.useReducer=function(e,t,r){return Kt.current.useReducer(e,t,r)};Le.useRef=function(e){return Kt.current.useRef(e)};Le.useState=function(e){return Kt.current.useState(e)};Le.useSyncExternalStore=function(e,t,r){return Kt.current.useSyncExternalStore(e,t,r)};Le.useTransition=function(){return Kt.current.useTransition()};Le.version="18.3.1";ES.exports=Le;var P=ES.exports;const ae=ht(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var s8=P,l8=Symbol.for("react.element"),c8=Symbol.for("react.fragment"),u8=Object.prototype.hasOwnProperty,d8=s8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f8={key:!0,ref:!0,__self:!0,__source:!0};function FS(e,t,r){var n,o={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)u8.call(t,n)&&!f8.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:l8,type:e,key:i,ref:a,props:o,_owner:d8.current}}cu.Fragment=c8;cu.jsx=FS;cu.jsxs=FS;PS.exports=cu;var l=PS.exports,_S={exports:{}},Sr={},BS={exports:{}},zS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,z){var V=_.length;_.push(z);e:for(;0<V;){var Q=V-1>>>1,H=_[Q];if(0<o(H,z))_[Q]=z,_[V]=H,V=Q;else break e}}function r(_){return _.length===0?null:_[0]}function n(_){if(_.length===0)return null;var z=_[0],V=_.pop();if(V!==z){_[0]=V;e:for(var Q=0,H=_.length,G=H>>>1;Q<G;){var Z=2*(Q+1)-1,W=_[Z],R=Z+1,O=_[R];if(0>o(W,V))R<H&&0>o(O,W)?(_[Q]=O,_[R]=V,Q=R):(_[Q]=W,_[Z]=V,Q=Z);else if(R<H&&0>o(O,V))_[Q]=O,_[R]=V,Q=R;else break e}}return z}function o(_,z){var V=_.sortIndex-z.sortIndex;return V!==0?V:_.id-z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],u=[],d=1,f=null,g=3,p=!1,m=!1,h=!1,x=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,y=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function C(_){for(var z=r(u);z!==null;){if(z.callback===null)n(u);else if(z.startTime<=_)n(u),z.sortIndex=z.expirationTime,t(c,z);else break;z=r(u)}}function T(_){if(h=!1,C(_),!m)if(r(c)!==null)m=!0,Y(N);else{var z=r(u);z!==null&&k(T,z.startTime-_)}}function N(_,z){m=!1,h&&(h=!1,v($),$=-1),p=!0;var V=g;try{for(C(z),f=r(c);f!==null&&(!(f.expirationTime>z)||_&&!L());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,g=f.priorityLevel;var H=Q(f.expirationTime<=z);z=e.unstable_now(),typeof H=="function"?f.callback=H:f===r(c)&&n(c),C(z)}else n(c);f=r(c)}if(f!==null)var G=!0;else{var Z=r(u);Z!==null&&k(T,Z.startTime-z),G=!1}return G}finally{f=null,g=V,p=!1}}var j=!1,I=null,$=-1,w=5,U=-1;function L(){return!(e.unstable_now()-U<w)}function q(){if(I!==null){var _=e.unstable_now();U=_;var z=!0;try{z=I(!0,_)}finally{z?K():(j=!1,I=null)}}else j=!1}var K;if(typeof y=="function")K=function(){y(q)};else if(typeof MessageChannel<"u"){var B=new MessageChannel,J=B.port2;B.port1.onmessage=q,K=function(){J.postMessage(null)}}else K=function(){x(q,0)};function Y(_){I=_,j||(j=!0,K())}function k(_,z){$=x(function(){_(e.unstable_now())},z)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,Y(N))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var z=3;break;default:z=g}var V=g;g=z;try{return _()}finally{g=V}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,z){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var V=g;g=_;try{return z()}finally{g=V}},e.unstable_scheduleCallback=function(_,z,V){var Q=e.unstable_now();switch(typeof V=="object"&&V!==null?(V=V.delay,V=typeof V=="number"&&0<V?Q+V:Q):V=Q,_){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=V+H,_={id:d++,callback:z,priorityLevel:_,startTime:V,expirationTime:H,sortIndex:-1},V>Q?(_.sortIndex=V,t(u,_),r(c)===null&&_===r(u)&&(h?(v($),$=-1):h=!0,k(T,V-Q))):(_.sortIndex=H,t(c,_),m||p||(m=!0,Y(N))),_},e.unstable_shouldYield=L,e.unstable_wrapCallback=function(_){var z=g;return function(){var V=g;g=z;try{return _.apply(this,arguments)}finally{g=V}}}})(zS);BS.exports=zS;var g8=BS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var p8=P,br=g8;function ue(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var HS=new Set,is={};function Qo(e,t){ki(e,t),ki(e+"Capture",t)}function ki(e,t){for(is[e]=t,e=0;e<t.length;e++)HS.add(t[e])}var kn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Of=Object.prototype.hasOwnProperty,m8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pv={},mv={};function h8(e){return Of.call(mv,e)?!0:Of.call(pv,e)?!1:m8.test(e)?mv[e]=!0:(pv[e]=!0,!1)}function v8(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function x8(e,t,r,n){if(t===null||typeof t>"u"||v8(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Jt(e,t,r,n,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$t[e]=new Jt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$t[t]=new Jt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$t[e]=new Jt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$t[e]=new Jt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$t[e]=new Jt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$t[e]=new Jt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$t[e]=new Jt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$t[e]=new Jt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$t[e]=new Jt(e,5,!1,e.toLowerCase(),null,!1,!1)});var np=/[\-:]([a-z])/g;function op(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(np,op);$t[t]=new Jt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(np,op);$t[t]=new Jt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(np,op);$t[t]=new Jt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$t[e]=new Jt(e,1,!1,e.toLowerCase(),null,!1,!1)});$t.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$t[e]=new Jt(e,1,!1,e.toLowerCase(),null,!0,!0)});function ip(e,t,r,n){var o=$t.hasOwnProperty(t)?$t[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(x8(t,r,o,n)&&(r=null),n||o===null?h8(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var _n=p8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,il=Symbol.for("react.element"),ci=Symbol.for("react.portal"),ui=Symbol.for("react.fragment"),ap=Symbol.for("react.strict_mode"),If=Symbol.for("react.profiler"),US=Symbol.for("react.provider"),VS=Symbol.for("react.context"),sp=Symbol.for("react.forward_ref"),Pf=Symbol.for("react.suspense"),Ef=Symbol.for("react.suspense_list"),lp=Symbol.for("react.memo"),Hn=Symbol.for("react.lazy"),WS=Symbol.for("react.offscreen"),hv=Symbol.iterator;function ha(e){return e===null||typeof e!="object"?null:(e=hv&&e[hv]||e["@@iterator"],typeof e=="function"?e:null)}var lt=Object.assign,Cd;function Aa(e){if(Cd===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);Cd=t&&t[1]||""}return`
`+Cd+e}var wd=!1;function jd(e,t){if(!e||wd)return"";wd=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{wd=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?Aa(e):""}function y8(e){switch(e.tag){case 5:return Aa(e.type);case 16:return Aa("Lazy");case 13:return Aa("Suspense");case 19:return Aa("SuspenseList");case 0:case 2:case 15:return e=jd(e.type,!1),e;case 11:return e=jd(e.type.render,!1),e;case 1:return e=jd(e.type,!0),e;default:return""}}function $f(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ui:return"Fragment";case ci:return"Portal";case If:return"Profiler";case ap:return"StrictMode";case Pf:return"Suspense";case Ef:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case VS:return(e.displayName||"Context")+".Consumer";case US:return(e._context.displayName||"Context")+".Provider";case sp:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case lp:return t=e.displayName||null,t!==null?t:$f(e.type)||"Memo";case Hn:t=e._payload,e=e._init;try{return $f(e(t))}catch{}}return null}function b8(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $f(t);case 8:return t===ap?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function co(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function qS(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function S8(e){var t=qS(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){n=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function al(e){e._valueTracker||(e._valueTracker=S8(e))}function GS(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=qS(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function sc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Nf(e,t){var r=t.checked;return lt({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function vv(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=co(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function KS(e,t){t=t.checked,t!=null&&ip(e,"checked",t,!1)}function kf(e,t){KS(e,t);var r=co(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Mf(e,t.type,r):t.hasOwnProperty("defaultValue")&&Mf(e,t.type,co(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function xv(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Mf(e,t,r){(t!=="number"||sc(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Da=Array.isArray;function ji(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+co(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Af(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(ue(91));return lt({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function yv(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(ue(92));if(Da(r)){if(1<r.length)throw Error(ue(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:co(r)}}function JS(e,t){var r=co(t.value),n=co(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function bv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function QS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Df(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?QS(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var sl,ZS=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(sl=sl||document.createElement("div"),sl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=sl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function as(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var Ba={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},C8=["Webkit","ms","Moz","O"];Object.keys(Ba).forEach(function(e){C8.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Ba[t]=Ba[e]})});function YS(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||Ba.hasOwnProperty(e)&&Ba[e]?(""+t).trim():t+"px"}function XS(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=YS(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var w8=lt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Rf(e,t){if(t){if(w8[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(ue(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(ue(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(ue(61))}if(t.style!=null&&typeof t.style!="object")throw Error(ue(62))}}function Lf(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ff=null;function cp(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _f=null,Ti=null,Oi=null;function Sv(e){if(e=Ds(e)){if(typeof _f!="function")throw Error(ue(280));var t=e.stateNode;t&&(t=pu(t),_f(e.stateNode,e.type,t))}}function e2(e){Ti?Oi?Oi.push(e):Oi=[e]:Ti=e}function t2(){if(Ti){var e=Ti,t=Oi;if(Oi=Ti=null,Sv(e),t)for(e=0;e<t.length;e++)Sv(t[e])}}function r2(e,t){return e(t)}function n2(){}var Td=!1;function o2(e,t,r){if(Td)return e(t,r);Td=!0;try{return r2(e,t,r)}finally{Td=!1,(Ti!==null||Oi!==null)&&(n2(),t2())}}function ss(e,t){var r=e.stateNode;if(r===null)return null;var n=pu(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(ue(231,t,typeof r));return r}var Bf=!1;if(kn)try{var va={};Object.defineProperty(va,"passive",{get:function(){Bf=!0}}),window.addEventListener("test",va,va),window.removeEventListener("test",va,va)}catch{Bf=!1}function j8(e,t,r,n,o,i,a,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(d){this.onError(d)}}var za=!1,lc=null,cc=!1,zf=null,T8={onError:function(e){za=!0,lc=e}};function O8(e,t,r,n,o,i,a,s,c){za=!1,lc=null,j8.apply(T8,arguments)}function I8(e,t,r,n,o,i,a,s,c){if(O8.apply(this,arguments),za){if(za){var u=lc;za=!1,lc=null}else throw Error(ue(198));cc||(cc=!0,zf=u)}}function Zo(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function i2(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cv(e){if(Zo(e)!==e)throw Error(ue(188))}function P8(e){var t=e.alternate;if(!t){if(t=Zo(e),t===null)throw Error(ue(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return Cv(o),e;if(i===n)return Cv(o),t;i=i.sibling}throw Error(ue(188))}if(r.return!==n.return)r=o,n=i;else{for(var a=!1,s=o.child;s;){if(s===r){a=!0,r=o,n=i;break}if(s===n){a=!0,n=o,r=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===r){a=!0,r=i,n=o;break}if(s===n){a=!0,n=i,r=o;break}s=s.sibling}if(!a)throw Error(ue(189))}}if(r.alternate!==n)throw Error(ue(190))}if(r.tag!==3)throw Error(ue(188));return r.stateNode.current===r?e:t}function a2(e){return e=P8(e),e!==null?s2(e):null}function s2(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=s2(e);if(t!==null)return t;e=e.sibling}return null}var l2=br.unstable_scheduleCallback,wv=br.unstable_cancelCallback,E8=br.unstable_shouldYield,$8=br.unstable_requestPaint,ut=br.unstable_now,N8=br.unstable_getCurrentPriorityLevel,up=br.unstable_ImmediatePriority,c2=br.unstable_UserBlockingPriority,uc=br.unstable_NormalPriority,k8=br.unstable_LowPriority,u2=br.unstable_IdlePriority,uu=null,wn=null;function M8(e){if(wn&&typeof wn.onCommitFiberRoot=="function")try{wn.onCommitFiberRoot(uu,e,void 0,(e.current.flags&128)===128)}catch{}}var Yr=Math.clz32?Math.clz32:R8,A8=Math.log,D8=Math.LN2;function R8(e){return e>>>=0,e===0?32:31-(A8(e)/D8|0)|0}var ll=64,cl=4194304;function Ra(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function dc(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,a=r&268435455;if(a!==0){var s=a&~o;s!==0?n=Ra(s):(i&=a,i!==0&&(n=Ra(i)))}else a=r&~o,a!==0?n=Ra(a):i!==0&&(n=Ra(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Yr(t),o=1<<r,n|=e[r],t&=~o;return n}function L8(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function F8(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Yr(i),s=1<<a,c=o[a];c===-1?(!(s&r)||s&n)&&(o[a]=L8(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function Hf(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function d2(){var e=ll;return ll<<=1,!(ll&4194240)&&(ll=64),e}function Od(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Ms(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Yr(t),e[t]=r}function _8(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Yr(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function dp(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Yr(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var Ue=0;function f2(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var g2,fp,p2,m2,h2,Uf=!1,ul=[],Qn=null,Zn=null,Yn=null,ls=new Map,cs=new Map,Vn=[],B8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jv(e,t){switch(e){case"focusin":case"focusout":Qn=null;break;case"dragenter":case"dragleave":Zn=null;break;case"mouseover":case"mouseout":Yn=null;break;case"pointerover":case"pointerout":ls.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":cs.delete(t.pointerId)}}function xa(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ds(t),t!==null&&fp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function z8(e,t,r,n,o){switch(t){case"focusin":return Qn=xa(Qn,e,t,r,n,o),!0;case"dragenter":return Zn=xa(Zn,e,t,r,n,o),!0;case"mouseover":return Yn=xa(Yn,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return ls.set(i,xa(ls.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,cs.set(i,xa(cs.get(i)||null,e,t,r,n,o)),!0}return!1}function v2(e){var t=$o(e.target);if(t!==null){var r=Zo(t);if(r!==null){if(t=r.tag,t===13){if(t=i2(r),t!==null){e.blockedOn=t,h2(e.priority,function(){p2(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Vl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=Vf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ff=n,r.target.dispatchEvent(n),Ff=null}else return t=Ds(r),t!==null&&fp(t),e.blockedOn=r,!1;t.shift()}return!0}function Tv(e,t,r){Vl(e)&&r.delete(t)}function H8(){Uf=!1,Qn!==null&&Vl(Qn)&&(Qn=null),Zn!==null&&Vl(Zn)&&(Zn=null),Yn!==null&&Vl(Yn)&&(Yn=null),ls.forEach(Tv),cs.forEach(Tv)}function ya(e,t){e.blockedOn===t&&(e.blockedOn=null,Uf||(Uf=!0,br.unstable_scheduleCallback(br.unstable_NormalPriority,H8)))}function us(e){function t(o){return ya(o,e)}if(0<ul.length){ya(ul[0],e);for(var r=1;r<ul.length;r++){var n=ul[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Qn!==null&&ya(Qn,e),Zn!==null&&ya(Zn,e),Yn!==null&&ya(Yn,e),ls.forEach(t),cs.forEach(t),r=0;r<Vn.length;r++)n=Vn[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Vn.length&&(r=Vn[0],r.blockedOn===null);)v2(r),r.blockedOn===null&&Vn.shift()}var Ii=_n.ReactCurrentBatchConfig,fc=!0;function U8(e,t,r,n){var o=Ue,i=Ii.transition;Ii.transition=null;try{Ue=1,gp(e,t,r,n)}finally{Ue=o,Ii.transition=i}}function V8(e,t,r,n){var o=Ue,i=Ii.transition;Ii.transition=null;try{Ue=4,gp(e,t,r,n)}finally{Ue=o,Ii.transition=i}}function gp(e,t,r,n){if(fc){var o=Vf(e,t,r,n);if(o===null)Rd(e,t,n,gc,r),jv(e,n);else if(z8(o,e,t,r,n))n.stopPropagation();else if(jv(e,n),t&4&&-1<B8.indexOf(e)){for(;o!==null;){var i=Ds(o);if(i!==null&&g2(i),i=Vf(e,t,r,n),i===null&&Rd(e,t,n,gc,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else Rd(e,t,n,null,r)}}var gc=null;function Vf(e,t,r,n){if(gc=null,e=cp(n),e=$o(e),e!==null)if(t=Zo(e),t===null)e=null;else if(r=t.tag,r===13){if(e=i2(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return gc=e,null}function x2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(N8()){case up:return 1;case c2:return 4;case uc:case k8:return 16;case u2:return 536870912;default:return 16}default:return 16}}var qn=null,pp=null,Wl=null;function y2(){if(Wl)return Wl;var e,t=pp,r=t.length,n,o="value"in qn?qn.value:qn.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===o[i-n];n++);return Wl=o.slice(e,1<n?1-n:void 0)}function ql(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function dl(){return!0}function Ov(){return!1}function Cr(e){function t(r,n,o,i,a){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?dl:Ov,this.isPropagationStopped=Ov,this}return lt(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=dl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=dl)},persist:function(){},isPersistent:dl}),t}var Gi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},mp=Cr(Gi),As=lt({},Gi,{view:0,detail:0}),W8=Cr(As),Id,Pd,ba,du=lt({},As,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ba&&(ba&&e.type==="mousemove"?(Id=e.screenX-ba.screenX,Pd=e.screenY-ba.screenY):Pd=Id=0,ba=e),Id)},movementY:function(e){return"movementY"in e?e.movementY:Pd}}),Iv=Cr(du),q8=lt({},du,{dataTransfer:0}),G8=Cr(q8),K8=lt({},As,{relatedTarget:0}),Ed=Cr(K8),J8=lt({},Gi,{animationName:0,elapsedTime:0,pseudoElement:0}),Q8=Cr(J8),Z8=lt({},Gi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Y8=Cr(Z8),X8=lt({},Gi,{data:0}),Pv=Cr(X8),e4={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t4={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},r4={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n4(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=r4[e])?!!t[e]:!1}function hp(){return n4}var o4=lt({},As,{key:function(e){if(e.key){var t=e4[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ql(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?t4[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hp,charCode:function(e){return e.type==="keypress"?ql(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ql(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),i4=Cr(o4),a4=lt({},du,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ev=Cr(a4),s4=lt({},As,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hp}),l4=Cr(s4),c4=lt({},Gi,{propertyName:0,elapsedTime:0,pseudoElement:0}),u4=Cr(c4),d4=lt({},du,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),f4=Cr(d4),g4=[9,13,27,32],vp=kn&&"CompositionEvent"in window,Ha=null;kn&&"documentMode"in document&&(Ha=document.documentMode);var p4=kn&&"TextEvent"in window&&!Ha,b2=kn&&(!vp||Ha&&8<Ha&&11>=Ha),$v=" ",Nv=!1;function S2(e,t){switch(e){case"keyup":return g4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function C2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var di=!1;function m4(e,t){switch(e){case"compositionend":return C2(t);case"keypress":return t.which!==32?null:(Nv=!0,$v);case"textInput":return e=t.data,e===$v&&Nv?null:e;default:return null}}function h4(e,t){if(di)return e==="compositionend"||!vp&&S2(e,t)?(e=y2(),Wl=pp=qn=null,di=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return b2&&t.locale!=="ko"?null:t.data;default:return null}}var v4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!v4[e.type]:t==="textarea"}function w2(e,t,r,n){e2(n),t=pc(t,"onChange"),0<t.length&&(r=new mp("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Ua=null,ds=null;function x4(e){A2(e,0)}function fu(e){var t=pi(e);if(GS(t))return e}function y4(e,t){if(e==="change")return t}var j2=!1;if(kn){var $d;if(kn){var Nd="oninput"in document;if(!Nd){var Mv=document.createElement("div");Mv.setAttribute("oninput","return;"),Nd=typeof Mv.oninput=="function"}$d=Nd}else $d=!1;j2=$d&&(!document.documentMode||9<document.documentMode)}function Av(){Ua&&(Ua.detachEvent("onpropertychange",T2),ds=Ua=null)}function T2(e){if(e.propertyName==="value"&&fu(ds)){var t=[];w2(t,ds,e,cp(e)),o2(x4,t)}}function b4(e,t,r){e==="focusin"?(Av(),Ua=t,ds=r,Ua.attachEvent("onpropertychange",T2)):e==="focusout"&&Av()}function S4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return fu(ds)}function C4(e,t){if(e==="click")return fu(t)}function w4(e,t){if(e==="input"||e==="change")return fu(t)}function j4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var rn=typeof Object.is=="function"?Object.is:j4;function fs(e,t){if(rn(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!Of.call(t,o)||!rn(e[o],t[o]))return!1}return!0}function Dv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Rv(e,t){var r=Dv(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Dv(r)}}function O2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?O2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function I2(){for(var e=window,t=sc();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=sc(e.document)}return t}function xp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function T4(e){var t=I2(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&O2(r.ownerDocument.documentElement,r)){if(n!==null&&xp(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Rv(r,i);var a=Rv(r,n);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var O4=kn&&"documentMode"in document&&11>=document.documentMode,fi=null,Wf=null,Va=null,qf=!1;function Lv(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;qf||fi==null||fi!==sc(n)||(n=fi,"selectionStart"in n&&xp(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Va&&fs(Va,n)||(Va=n,n=pc(Wf,"onSelect"),0<n.length&&(t=new mp("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=fi)))}function fl(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var gi={animationend:fl("Animation","AnimationEnd"),animationiteration:fl("Animation","AnimationIteration"),animationstart:fl("Animation","AnimationStart"),transitionend:fl("Transition","TransitionEnd")},kd={},P2={};kn&&(P2=document.createElement("div").style,"AnimationEvent"in window||(delete gi.animationend.animation,delete gi.animationiteration.animation,delete gi.animationstart.animation),"TransitionEvent"in window||delete gi.transitionend.transition);function gu(e){if(kd[e])return kd[e];if(!gi[e])return e;var t=gi[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in P2)return kd[e]=t[r];return e}var E2=gu("animationend"),$2=gu("animationiteration"),N2=gu("animationstart"),k2=gu("transitionend"),M2=new Map,Fv="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function mo(e,t){M2.set(e,t),Qo(t,[e])}for(var Md=0;Md<Fv.length;Md++){var Ad=Fv[Md],I4=Ad.toLowerCase(),P4=Ad[0].toUpperCase()+Ad.slice(1);mo(I4,"on"+P4)}mo(E2,"onAnimationEnd");mo($2,"onAnimationIteration");mo(N2,"onAnimationStart");mo("dblclick","onDoubleClick");mo("focusin","onFocus");mo("focusout","onBlur");mo(k2,"onTransitionEnd");ki("onMouseEnter",["mouseout","mouseover"]);ki("onMouseLeave",["mouseout","mouseover"]);ki("onPointerEnter",["pointerout","pointerover"]);ki("onPointerLeave",["pointerout","pointerover"]);Qo("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Qo("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Qo("onBeforeInput",["compositionend","keypress","textInput","paste"]);Qo("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Qo("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Qo("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),E4=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function _v(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,I8(n,t,void 0,e),e.currentTarget=null}function A2(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==i&&o.isPropagationStopped())break e;_v(o,s,u),i=c}else for(a=0;a<n.length;a++){if(s=n[a],c=s.instance,u=s.currentTarget,s=s.listener,c!==i&&o.isPropagationStopped())break e;_v(o,s,u),i=c}}}if(cc)throw e=zf,cc=!1,zf=null,e}function Ye(e,t){var r=t[Zf];r===void 0&&(r=t[Zf]=new Set);var n=e+"__bubble";r.has(n)||(D2(t,e,2,!1),r.add(n))}function Dd(e,t,r){var n=0;t&&(n|=4),D2(r,e,n,t)}var gl="_reactListening"+Math.random().toString(36).slice(2);function gs(e){if(!e[gl]){e[gl]=!0,HS.forEach(function(r){r!=="selectionchange"&&(E4.has(r)||Dd(r,!1,e),Dd(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gl]||(t[gl]=!0,Dd("selectionchange",!1,t))}}function D2(e,t,r,n){switch(x2(t)){case 1:var o=U8;break;case 4:o=V8;break;default:o=gp}r=o.bind(null,t,r,e),o=void 0,!Bf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Rd(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=n.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;s!==null;){if(a=$o(s),a===null)return;if(c=a.tag,c===5||c===6){n=i=a;continue e}s=s.parentNode}}n=n.return}o2(function(){var u=i,d=cp(r),f=[];e:{var g=M2.get(e);if(g!==void 0){var p=mp,m=e;switch(e){case"keypress":if(ql(r)===0)break e;case"keydown":case"keyup":p=i4;break;case"focusin":m="focus",p=Ed;break;case"focusout":m="blur",p=Ed;break;case"beforeblur":case"afterblur":p=Ed;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Iv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=G8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=l4;break;case E2:case $2:case N2:p=Q8;break;case k2:p=u4;break;case"scroll":p=W8;break;case"wheel":p=f4;break;case"copy":case"cut":case"paste":p=Y8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ev}var h=(t&4)!==0,x=!h&&e==="scroll",v=h?g!==null?g+"Capture":null:g;h=[];for(var y=u,C;y!==null;){C=y;var T=C.stateNode;if(C.tag===5&&T!==null&&(C=T,v!==null&&(T=ss(y,v),T!=null&&h.push(ps(y,T,C)))),x)break;y=y.return}0<h.length&&(g=new p(g,m,null,r,d),f.push({event:g,listeners:h}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",g&&r!==Ff&&(m=r.relatedTarget||r.fromElement)&&($o(m)||m[Mn]))break e;if((p||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,p?(m=r.relatedTarget||r.toElement,p=u,m=m?$o(m):null,m!==null&&(x=Zo(m),m!==x||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(h=Iv,T="onMouseLeave",v="onMouseEnter",y="mouse",(e==="pointerout"||e==="pointerover")&&(h=Ev,T="onPointerLeave",v="onPointerEnter",y="pointer"),x=p==null?g:pi(p),C=m==null?g:pi(m),g=new h(T,y+"leave",p,r,d),g.target=x,g.relatedTarget=C,T=null,$o(d)===u&&(h=new h(v,y+"enter",m,r,d),h.target=C,h.relatedTarget=x,T=h),x=T,p&&m)t:{for(h=p,v=m,y=0,C=h;C;C=ri(C))y++;for(C=0,T=v;T;T=ri(T))C++;for(;0<y-C;)h=ri(h),y--;for(;0<C-y;)v=ri(v),C--;for(;y--;){if(h===v||v!==null&&h===v.alternate)break t;h=ri(h),v=ri(v)}h=null}else h=null;p!==null&&Bv(f,g,p,h,!1),m!==null&&x!==null&&Bv(f,x,m,h,!0)}}e:{if(g=u?pi(u):window,p=g.nodeName&&g.nodeName.toLowerCase(),p==="select"||p==="input"&&g.type==="file")var N=y4;else if(kv(g))if(j2)N=w4;else{N=S4;var j=b4}else(p=g.nodeName)&&p.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(N=C4);if(N&&(N=N(e,u))){w2(f,N,r,d);break e}j&&j(e,g,u),e==="focusout"&&(j=g._wrapperState)&&j.controlled&&g.type==="number"&&Mf(g,"number",g.value)}switch(j=u?pi(u):window,e){case"focusin":(kv(j)||j.contentEditable==="true")&&(fi=j,Wf=u,Va=null);break;case"focusout":Va=Wf=fi=null;break;case"mousedown":qf=!0;break;case"contextmenu":case"mouseup":case"dragend":qf=!1,Lv(f,r,d);break;case"selectionchange":if(O4)break;case"keydown":case"keyup":Lv(f,r,d)}var I;if(vp)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else di?S2(e,r)&&($="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&($="onCompositionStart");$&&(b2&&r.locale!=="ko"&&(di||$!=="onCompositionStart"?$==="onCompositionEnd"&&di&&(I=y2()):(qn=d,pp="value"in qn?qn.value:qn.textContent,di=!0)),j=pc(u,$),0<j.length&&($=new Pv($,e,null,r,d),f.push({event:$,listeners:j}),I?$.data=I:(I=C2(r),I!==null&&($.data=I)))),(I=p4?m4(e,r):h4(e,r))&&(u=pc(u,"onBeforeInput"),0<u.length&&(d=new Pv("onBeforeInput","beforeinput",null,r,d),f.push({event:d,listeners:u}),d.data=I))}A2(f,t)})}function ps(e,t,r){return{instance:e,listener:t,currentTarget:r}}function pc(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=ss(e,r),i!=null&&n.unshift(ps(e,i,o)),i=ss(e,t),i!=null&&n.push(ps(e,i,o))),e=e.return}return n}function ri(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bv(e,t,r,n,o){for(var i=t._reactName,a=[];r!==null&&r!==n;){var s=r,c=s.alternate,u=s.stateNode;if(c!==null&&c===n)break;s.tag===5&&u!==null&&(s=u,o?(c=ss(r,i),c!=null&&a.unshift(ps(r,c,s))):o||(c=ss(r,i),c!=null&&a.push(ps(r,c,s)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var $4=/\r\n?/g,N4=/\u0000|\uFFFD/g;function zv(e){return(typeof e=="string"?e:""+e).replace($4,`
`).replace(N4,"")}function pl(e,t,r){if(t=zv(t),zv(e)!==t&&r)throw Error(ue(425))}function mc(){}var Gf=null,Kf=null;function Jf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qf=typeof setTimeout=="function"?setTimeout:void 0,k4=typeof clearTimeout=="function"?clearTimeout:void 0,Hv=typeof Promise=="function"?Promise:void 0,M4=typeof queueMicrotask=="function"?queueMicrotask:typeof Hv<"u"?function(e){return Hv.resolve(null).then(e).catch(A4)}:Qf;function A4(e){setTimeout(function(){throw e})}function Ld(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),us(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);us(t)}function Xn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Uv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Ki=Math.random().toString(36).slice(2),Cn="__reactFiber$"+Ki,ms="__reactProps$"+Ki,Mn="__reactContainer$"+Ki,Zf="__reactEvents$"+Ki,D4="__reactListeners$"+Ki,R4="__reactHandles$"+Ki;function $o(e){var t=e[Cn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Mn]||r[Cn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Uv(e);e!==null;){if(r=e[Cn])return r;e=Uv(e)}return t}e=r,r=e.parentNode}return null}function Ds(e){return e=e[Cn]||e[Mn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function pi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(ue(33))}function pu(e){return e[ms]||null}var Yf=[],mi=-1;function ho(e){return{current:e}}function et(e){0>mi||(e.current=Yf[mi],Yf[mi]=null,mi--)}function Qe(e,t){mi++,Yf[mi]=e.current,e.current=t}var uo={},Ht=ho(uo),or=ho(!1),Bo=uo;function Mi(e,t){var r=e.type.contextTypes;if(!r)return uo;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function ir(e){return e=e.childContextTypes,e!=null}function hc(){et(or),et(Ht)}function Vv(e,t,r){if(Ht.current!==uo)throw Error(ue(168));Qe(Ht,t),Qe(or,r)}function R2(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(ue(108,b8(e)||"Unknown",o));return lt({},r,n)}function vc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||uo,Bo=Ht.current,Qe(Ht,e),Qe(or,or.current),!0}function Wv(e,t,r){var n=e.stateNode;if(!n)throw Error(ue(169));r?(e=R2(e,t,Bo),n.__reactInternalMemoizedMergedChildContext=e,et(or),et(Ht),Qe(Ht,e)):et(or),Qe(or,r)}var Pn=null,mu=!1,Fd=!1;function L2(e){Pn===null?Pn=[e]:Pn.push(e)}function L4(e){mu=!0,L2(e)}function vo(){if(!Fd&&Pn!==null){Fd=!0;var e=0,t=Ue;try{var r=Pn;for(Ue=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Pn=null,mu=!1}catch(o){throw Pn!==null&&(Pn=Pn.slice(e+1)),l2(up,vo),o}finally{Ue=t,Fd=!1}}return null}var hi=[],vi=0,xc=null,yc=0,Pr=[],Er=0,zo=null,En=1,$n="";function jo(e,t){hi[vi++]=yc,hi[vi++]=xc,xc=e,yc=t}function F2(e,t,r){Pr[Er++]=En,Pr[Er++]=$n,Pr[Er++]=zo,zo=e;var n=En;e=$n;var o=32-Yr(n)-1;n&=~(1<<o),r+=1;var i=32-Yr(t)+o;if(30<i){var a=o-o%5;i=(n&(1<<a)-1).toString(32),n>>=a,o-=a,En=1<<32-Yr(t)+o|r<<o|n,$n=i+e}else En=1<<i|r<<o|n,$n=e}function yp(e){e.return!==null&&(jo(e,1),F2(e,1,0))}function bp(e){for(;e===xc;)xc=hi[--vi],hi[vi]=null,yc=hi[--vi],hi[vi]=null;for(;e===zo;)zo=Pr[--Er],Pr[Er]=null,$n=Pr[--Er],Pr[Er]=null,En=Pr[--Er],Pr[Er]=null}var vr=null,gr=null,rt=!1,qr=null;function _2(e,t){var r=Nr(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function qv(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,vr=e,gr=Xn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,vr=e,gr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=zo!==null?{id:En,overflow:$n}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Nr(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,vr=e,gr=null,!0):!1;default:return!1}}function Xf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function eg(e){if(rt){var t=gr;if(t){var r=t;if(!qv(e,t)){if(Xf(e))throw Error(ue(418));t=Xn(r.nextSibling);var n=vr;t&&qv(e,t)?_2(n,r):(e.flags=e.flags&-4097|2,rt=!1,vr=e)}}else{if(Xf(e))throw Error(ue(418));e.flags=e.flags&-4097|2,rt=!1,vr=e}}}function Gv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;vr=e}function ml(e){if(e!==vr)return!1;if(!rt)return Gv(e),rt=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Jf(e.type,e.memoizedProps)),t&&(t=gr)){if(Xf(e))throw B2(),Error(ue(418));for(;t;)_2(e,t),t=Xn(t.nextSibling)}if(Gv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(ue(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){gr=Xn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}gr=null}}else gr=vr?Xn(e.stateNode.nextSibling):null;return!0}function B2(){for(var e=gr;e;)e=Xn(e.nextSibling)}function Ai(){gr=vr=null,rt=!1}function Sp(e){qr===null?qr=[e]:qr.push(e)}var F4=_n.ReactCurrentBatchConfig;function Sa(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(ue(309));var n=r.stateNode}if(!n)throw Error(ue(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(ue(284));if(!r._owner)throw Error(ue(290,e))}return e}function hl(e,t){throw e=Object.prototype.toString.call(t),Error(ue(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kv(e){var t=e._init;return t(e._payload)}function z2(e){function t(v,y){if(e){var C=v.deletions;C===null?(v.deletions=[y],v.flags|=16):C.push(y)}}function r(v,y){if(!e)return null;for(;y!==null;)t(v,y),y=y.sibling;return null}function n(v,y){for(v=new Map;y!==null;)y.key!==null?v.set(y.key,y):v.set(y.index,y),y=y.sibling;return v}function o(v,y){return v=no(v,y),v.index=0,v.sibling=null,v}function i(v,y,C){return v.index=C,e?(C=v.alternate,C!==null?(C=C.index,C<y?(v.flags|=2,y):C):(v.flags|=2,y)):(v.flags|=1048576,y)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,y,C,T){return y===null||y.tag!==6?(y=Wd(C,v.mode,T),y.return=v,y):(y=o(y,C),y.return=v,y)}function c(v,y,C,T){var N=C.type;return N===ui?d(v,y,C.props.children,T,C.key):y!==null&&(y.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Hn&&Kv(N)===y.type)?(T=o(y,C.props),T.ref=Sa(v,y,C),T.return=v,T):(T=Xl(C.type,C.key,C.props,null,v.mode,T),T.ref=Sa(v,y,C),T.return=v,T)}function u(v,y,C,T){return y===null||y.tag!==4||y.stateNode.containerInfo!==C.containerInfo||y.stateNode.implementation!==C.implementation?(y=qd(C,v.mode,T),y.return=v,y):(y=o(y,C.children||[]),y.return=v,y)}function d(v,y,C,T,N){return y===null||y.tag!==7?(y=Ro(C,v.mode,T,N),y.return=v,y):(y=o(y,C),y.return=v,y)}function f(v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return y=Wd(""+y,v.mode,C),y.return=v,y;if(typeof y=="object"&&y!==null){switch(y.$$typeof){case il:return C=Xl(y.type,y.key,y.props,null,v.mode,C),C.ref=Sa(v,null,y),C.return=v,C;case ci:return y=qd(y,v.mode,C),y.return=v,y;case Hn:var T=y._init;return f(v,T(y._payload),C)}if(Da(y)||ha(y))return y=Ro(y,v.mode,C,null),y.return=v,y;hl(v,y)}return null}function g(v,y,C,T){var N=y!==null?y.key:null;if(typeof C=="string"&&C!==""||typeof C=="number")return N!==null?null:s(v,y,""+C,T);if(typeof C=="object"&&C!==null){switch(C.$$typeof){case il:return C.key===N?c(v,y,C,T):null;case ci:return C.key===N?u(v,y,C,T):null;case Hn:return N=C._init,g(v,y,N(C._payload),T)}if(Da(C)||ha(C))return N!==null?null:d(v,y,C,T,null);hl(v,C)}return null}function p(v,y,C,T,N){if(typeof T=="string"&&T!==""||typeof T=="number")return v=v.get(C)||null,s(y,v,""+T,N);if(typeof T=="object"&&T!==null){switch(T.$$typeof){case il:return v=v.get(T.key===null?C:T.key)||null,c(y,v,T,N);case ci:return v=v.get(T.key===null?C:T.key)||null,u(y,v,T,N);case Hn:var j=T._init;return p(v,y,C,j(T._payload),N)}if(Da(T)||ha(T))return v=v.get(C)||null,d(y,v,T,N,null);hl(y,T)}return null}function m(v,y,C,T){for(var N=null,j=null,I=y,$=y=0,w=null;I!==null&&$<C.length;$++){I.index>$?(w=I,I=null):w=I.sibling;var U=g(v,I,C[$],T);if(U===null){I===null&&(I=w);break}e&&I&&U.alternate===null&&t(v,I),y=i(U,y,$),j===null?N=U:j.sibling=U,j=U,I=w}if($===C.length)return r(v,I),rt&&jo(v,$),N;if(I===null){for(;$<C.length;$++)I=f(v,C[$],T),I!==null&&(y=i(I,y,$),j===null?N=I:j.sibling=I,j=I);return rt&&jo(v,$),N}for(I=n(v,I);$<C.length;$++)w=p(I,v,$,C[$],T),w!==null&&(e&&w.alternate!==null&&I.delete(w.key===null?$:w.key),y=i(w,y,$),j===null?N=w:j.sibling=w,j=w);return e&&I.forEach(function(L){return t(v,L)}),rt&&jo(v,$),N}function h(v,y,C,T){var N=ha(C);if(typeof N!="function")throw Error(ue(150));if(C=N.call(C),C==null)throw Error(ue(151));for(var j=N=null,I=y,$=y=0,w=null,U=C.next();I!==null&&!U.done;$++,U=C.next()){I.index>$?(w=I,I=null):w=I.sibling;var L=g(v,I,U.value,T);if(L===null){I===null&&(I=w);break}e&&I&&L.alternate===null&&t(v,I),y=i(L,y,$),j===null?N=L:j.sibling=L,j=L,I=w}if(U.done)return r(v,I),rt&&jo(v,$),N;if(I===null){for(;!U.done;$++,U=C.next())U=f(v,U.value,T),U!==null&&(y=i(U,y,$),j===null?N=U:j.sibling=U,j=U);return rt&&jo(v,$),N}for(I=n(v,I);!U.done;$++,U=C.next())U=p(I,v,$,U.value,T),U!==null&&(e&&U.alternate!==null&&I.delete(U.key===null?$:U.key),y=i(U,y,$),j===null?N=U:j.sibling=U,j=U);return e&&I.forEach(function(q){return t(v,q)}),rt&&jo(v,$),N}function x(v,y,C,T){if(typeof C=="object"&&C!==null&&C.type===ui&&C.key===null&&(C=C.props.children),typeof C=="object"&&C!==null){switch(C.$$typeof){case il:e:{for(var N=C.key,j=y;j!==null;){if(j.key===N){if(N=C.type,N===ui){if(j.tag===7){r(v,j.sibling),y=o(j,C.props.children),y.return=v,v=y;break e}}else if(j.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Hn&&Kv(N)===j.type){r(v,j.sibling),y=o(j,C.props),y.ref=Sa(v,j,C),y.return=v,v=y;break e}r(v,j);break}else t(v,j);j=j.sibling}C.type===ui?(y=Ro(C.props.children,v.mode,T,C.key),y.return=v,v=y):(T=Xl(C.type,C.key,C.props,null,v.mode,T),T.ref=Sa(v,y,C),T.return=v,v=T)}return a(v);case ci:e:{for(j=C.key;y!==null;){if(y.key===j)if(y.tag===4&&y.stateNode.containerInfo===C.containerInfo&&y.stateNode.implementation===C.implementation){r(v,y.sibling),y=o(y,C.children||[]),y.return=v,v=y;break e}else{r(v,y);break}else t(v,y);y=y.sibling}y=qd(C,v.mode,T),y.return=v,v=y}return a(v);case Hn:return j=C._init,x(v,y,j(C._payload),T)}if(Da(C))return m(v,y,C,T);if(ha(C))return h(v,y,C,T);hl(v,C)}return typeof C=="string"&&C!==""||typeof C=="number"?(C=""+C,y!==null&&y.tag===6?(r(v,y.sibling),y=o(y,C),y.return=v,v=y):(r(v,y),y=Wd(C,v.mode,T),y.return=v,v=y),a(v)):r(v,y)}return x}var Di=z2(!0),H2=z2(!1),bc=ho(null),Sc=null,xi=null,Cp=null;function wp(){Cp=xi=Sc=null}function jp(e){var t=bc.current;et(bc),e._currentValue=t}function tg(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Pi(e,t){Sc=e,Cp=xi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(nr=!0),e.firstContext=null)}function Fr(e){var t=e._currentValue;if(Cp!==e)if(e={context:e,memoizedValue:t,next:null},xi===null){if(Sc===null)throw Error(ue(308));xi=e,Sc.dependencies={lanes:0,firstContext:e}}else xi=xi.next=e;return t}var No=null;function Tp(e){No===null?No=[e]:No.push(e)}function U2(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Tp(t)):(r.next=o.next,o.next=r),t.interleaved=r,An(e,n)}function An(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Un=!1;function Op(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function V2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Nn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function eo(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,ze&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,An(e,r)}return o=n.interleaved,o===null?(t.next=t,Tp(n)):(t.next=o.next,o.next=t),n.interleaved=t,An(e,r)}function Gl(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,dp(e,r)}}function Jv(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=a:i=i.next=a,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Cc(e,t,r,n){var o=e.updateQueue;Un=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,u=c.next;c.next=null,a===null?i=u:a.next=u,a=c;var d=e.alternate;d!==null&&(d=d.updateQueue,s=d.lastBaseUpdate,s!==a&&(s===null?d.firstBaseUpdate=u:s.next=u,d.lastBaseUpdate=c))}if(i!==null){var f=o.baseState;a=0,d=u=c=null,s=i;do{var g=s.lane,p=s.eventTime;if((n&g)===g){d!==null&&(d=d.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,h=s;switch(g=t,p=r,h.tag){case 1:if(m=h.payload,typeof m=="function"){f=m.call(p,f,g);break e}f=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,g=typeof m=="function"?m.call(p,f,g):m,g==null)break e;f=lt({},f,g);break e;case 2:Un=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else p={eventTime:p,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},d===null?(u=d=p,c=f):d=d.next=p,a|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(d===null&&(c=f),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Uo|=a,e.lanes=a,e.memoizedState=f}}function Qv(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(ue(191,o));o.call(n)}}}var Rs={},jn=ho(Rs),hs=ho(Rs),vs=ho(Rs);function ko(e){if(e===Rs)throw Error(ue(174));return e}function Ip(e,t){switch(Qe(vs,t),Qe(hs,e),Qe(jn,Rs),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Df(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Df(t,e)}et(jn),Qe(jn,t)}function Ri(){et(jn),et(hs),et(vs)}function W2(e){ko(vs.current);var t=ko(jn.current),r=Df(t,e.type);t!==r&&(Qe(hs,e),Qe(jn,r))}function Pp(e){hs.current===e&&(et(jn),et(hs))}var at=ho(0);function wc(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var _d=[];function Ep(){for(var e=0;e<_d.length;e++)_d[e]._workInProgressVersionPrimary=null;_d.length=0}var Kl=_n.ReactCurrentDispatcher,Bd=_n.ReactCurrentBatchConfig,Ho=0,st=null,xt=null,bt=null,jc=!1,Wa=!1,xs=0,_4=0;function Dt(){throw Error(ue(321))}function $p(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!rn(e[r],t[r]))return!1;return!0}function Np(e,t,r,n,o,i){if(Ho=i,st=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Kl.current=e===null||e.memoizedState===null?U4:V4,e=r(n,o),Wa){i=0;do{if(Wa=!1,xs=0,25<=i)throw Error(ue(301));i+=1,bt=xt=null,t.updateQueue=null,Kl.current=W4,e=r(n,o)}while(Wa)}if(Kl.current=Tc,t=xt!==null&&xt.next!==null,Ho=0,bt=xt=st=null,jc=!1,t)throw Error(ue(300));return e}function kp(){var e=xs!==0;return xs=0,e}function bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?st.memoizedState=bt=e:bt=bt.next=e,bt}function _r(){if(xt===null){var e=st.alternate;e=e!==null?e.memoizedState:null}else e=xt.next;var t=bt===null?st.memoizedState:bt.next;if(t!==null)bt=t,xt=e;else{if(e===null)throw Error(ue(310));xt=e,e={memoizedState:xt.memoizedState,baseState:xt.baseState,baseQueue:xt.baseQueue,queue:xt.queue,next:null},bt===null?st.memoizedState=bt=e:bt=bt.next=e}return bt}function ys(e,t){return typeof t=="function"?t(e):t}function zd(e){var t=_r(),r=t.queue;if(r===null)throw Error(ue(311));r.lastRenderedReducer=e;var n=xt,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var s=a=null,c=null,u=i;do{var d=u.lane;if((Ho&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=f,a=n):c=c.next=f,st.lanes|=d,Uo|=d}u=u.next}while(u!==null&&u!==i);c===null?a=n:c.next=s,rn(n,t.memoizedState)||(nr=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,st.lanes|=i,Uo|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function Hd(e){var t=_r(),r=t.queue;if(r===null)throw Error(ue(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);rn(i,t.memoizedState)||(nr=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function q2(){}function G2(e,t){var r=st,n=_r(),o=t(),i=!rn(n.memoizedState,o);if(i&&(n.memoizedState=o,nr=!0),n=n.queue,Mp(Q2.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||bt!==null&&bt.memoizedState.tag&1){if(r.flags|=2048,bs(9,J2.bind(null,r,n,o,t),void 0,null),St===null)throw Error(ue(349));Ho&30||K2(r,t,o)}return o}function K2(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=st.updateQueue,t===null?(t={lastEffect:null,stores:null},st.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function J2(e,t,r,n){t.value=r,t.getSnapshot=n,Z2(t)&&Y2(e)}function Q2(e,t,r){return r(function(){Z2(t)&&Y2(e)})}function Z2(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!rn(e,r)}catch{return!0}}function Y2(e){var t=An(e,1);t!==null&&Xr(t,e,1,-1)}function Zv(e){var t=bn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ys,lastRenderedState:e},t.queue=e,e=e.dispatch=H4.bind(null,st,e),[t.memoizedState,e]}function bs(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=st.updateQueue,t===null?(t={lastEffect:null,stores:null},st.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function X2(){return _r().memoizedState}function Jl(e,t,r,n){var o=bn();st.flags|=e,o.memoizedState=bs(1|t,r,void 0,n===void 0?null:n)}function hu(e,t,r,n){var o=_r();n=n===void 0?null:n;var i=void 0;if(xt!==null){var a=xt.memoizedState;if(i=a.destroy,n!==null&&$p(n,a.deps)){o.memoizedState=bs(t,r,i,n);return}}st.flags|=e,o.memoizedState=bs(1|t,r,i,n)}function Yv(e,t){return Jl(8390656,8,e,t)}function Mp(e,t){return hu(2048,8,e,t)}function eC(e,t){return hu(4,2,e,t)}function tC(e,t){return hu(4,4,e,t)}function rC(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nC(e,t,r){return r=r!=null?r.concat([e]):null,hu(4,4,rC.bind(null,t,e),r)}function Ap(){}function oC(e,t){var r=_r();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&$p(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function iC(e,t){var r=_r();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&$p(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function aC(e,t,r){return Ho&21?(rn(r,t)||(r=d2(),st.lanes|=r,Uo|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,nr=!0),e.memoizedState=r)}function B4(e,t){var r=Ue;Ue=r!==0&&4>r?r:4,e(!0);var n=Bd.transition;Bd.transition={};try{e(!1),t()}finally{Ue=r,Bd.transition=n}}function sC(){return _r().memoizedState}function z4(e,t,r){var n=ro(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},lC(e))cC(t,r);else if(r=U2(e,t,r,n),r!==null){var o=Gt();Xr(r,e,n,o),uC(r,t,n)}}function H4(e,t,r){var n=ro(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(lC(e))cC(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,r);if(o.hasEagerState=!0,o.eagerState=s,rn(s,a)){var c=t.interleaved;c===null?(o.next=o,Tp(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}r=U2(e,t,o,n),r!==null&&(o=Gt(),Xr(r,e,n,o),uC(r,t,n))}}function lC(e){var t=e.alternate;return e===st||t!==null&&t===st}function cC(e,t){Wa=jc=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function uC(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,dp(e,r)}}var Tc={readContext:Fr,useCallback:Dt,useContext:Dt,useEffect:Dt,useImperativeHandle:Dt,useInsertionEffect:Dt,useLayoutEffect:Dt,useMemo:Dt,useReducer:Dt,useRef:Dt,useState:Dt,useDebugValue:Dt,useDeferredValue:Dt,useTransition:Dt,useMutableSource:Dt,useSyncExternalStore:Dt,useId:Dt,unstable_isNewReconciler:!1},U4={readContext:Fr,useCallback:function(e,t){return bn().memoizedState=[e,t===void 0?null:t],e},useContext:Fr,useEffect:Yv,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Jl(4194308,4,rC.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Jl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Jl(4,2,e,t)},useMemo:function(e,t){var r=bn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=bn();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=z4.bind(null,st,e),[n.memoizedState,e]},useRef:function(e){var t=bn();return e={current:e},t.memoizedState=e},useState:Zv,useDebugValue:Ap,useDeferredValue:function(e){return bn().memoizedState=e},useTransition:function(){var e=Zv(!1),t=e[0];return e=B4.bind(null,e[1]),bn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=st,o=bn();if(rt){if(r===void 0)throw Error(ue(407));r=r()}else{if(r=t(),St===null)throw Error(ue(349));Ho&30||K2(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,Yv(Q2.bind(null,n,i,e),[e]),n.flags|=2048,bs(9,J2.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=bn(),t=St.identifierPrefix;if(rt){var r=$n,n=En;r=(n&~(1<<32-Yr(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=xs++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=_4++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},V4={readContext:Fr,useCallback:oC,useContext:Fr,useEffect:Mp,useImperativeHandle:nC,useInsertionEffect:eC,useLayoutEffect:tC,useMemo:iC,useReducer:zd,useRef:X2,useState:function(){return zd(ys)},useDebugValue:Ap,useDeferredValue:function(e){var t=_r();return aC(t,xt.memoizedState,e)},useTransition:function(){var e=zd(ys)[0],t=_r().memoizedState;return[e,t]},useMutableSource:q2,useSyncExternalStore:G2,useId:sC,unstable_isNewReconciler:!1},W4={readContext:Fr,useCallback:oC,useContext:Fr,useEffect:Mp,useImperativeHandle:nC,useInsertionEffect:eC,useLayoutEffect:tC,useMemo:iC,useReducer:Hd,useRef:X2,useState:function(){return Hd(ys)},useDebugValue:Ap,useDeferredValue:function(e){var t=_r();return xt===null?t.memoizedState=e:aC(t,xt.memoizedState,e)},useTransition:function(){var e=Hd(ys)[0],t=_r().memoizedState;return[e,t]},useMutableSource:q2,useSyncExternalStore:G2,useId:sC,unstable_isNewReconciler:!1};function Ur(e,t){if(e&&e.defaultProps){t=lt({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function rg(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:lt({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var vu={isMounted:function(e){return(e=e._reactInternals)?Zo(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Gt(),o=ro(e),i=Nn(n,o);i.payload=t,r!=null&&(i.callback=r),t=eo(e,i,o),t!==null&&(Xr(t,e,o,n),Gl(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Gt(),o=ro(e),i=Nn(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=eo(e,i,o),t!==null&&(Xr(t,e,o,n),Gl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Gt(),n=ro(e),o=Nn(r,n);o.tag=2,t!=null&&(o.callback=t),t=eo(e,o,n),t!==null&&(Xr(t,e,n,r),Gl(t,e,n))}};function Xv(e,t,r,n,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,a):t.prototype&&t.prototype.isPureReactComponent?!fs(r,n)||!fs(o,i):!0}function dC(e,t,r){var n=!1,o=uo,i=t.contextType;return typeof i=="object"&&i!==null?i=Fr(i):(o=ir(t)?Bo:Ht.current,n=t.contextTypes,i=(n=n!=null)?Mi(e,o):uo),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=vu,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function e0(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&vu.enqueueReplaceState(t,t.state,null)}function ng(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},Op(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Fr(i):(i=ir(t)?Bo:Ht.current,o.context=Mi(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(rg(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&vu.enqueueReplaceState(o,o.state,null),Cc(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Li(e,t){try{var r="",n=t;do r+=y8(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ud(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function og(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var q4=typeof WeakMap=="function"?WeakMap:Map;function fC(e,t,r){r=Nn(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Ic||(Ic=!0,pg=n),og(e,t)},r}function gC(e,t,r){r=Nn(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){og(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){og(e,t),typeof n!="function"&&(to===null?to=new Set([this]):to.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function t0(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new q4;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=a6.bind(null,e,t,r),t.then(e,e))}function r0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function n0(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Nn(-1,1),t.tag=2,eo(r,t,1))),r.lanes|=1),e)}var G4=_n.ReactCurrentOwner,nr=!1;function qt(e,t,r,n){t.child=e===null?H2(t,null,r,n):Di(t,e.child,r,n)}function o0(e,t,r,n,o){r=r.render;var i=t.ref;return Pi(t,o),n=Np(e,t,r,n,i,o),r=kp(),e!==null&&!nr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dn(e,t,o)):(rt&&r&&yp(t),t.flags|=1,qt(e,t,n,o),t.child)}function i0(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!Hp(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,pC(e,t,i,n,o)):(e=Xl(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(r=r.compare,r=r!==null?r:fs,r(a,n)&&e.ref===t.ref)return Dn(e,t,o)}return t.flags|=1,e=no(i,n),e.ref=t.ref,e.return=t,t.child=e}function pC(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(fs(i,n)&&e.ref===t.ref)if(nr=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(nr=!0);else return t.lanes=e.lanes,Dn(e,t,o)}return ig(e,t,r,n,o)}function mC(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Qe(bi,fr),fr|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Qe(bi,fr),fr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,Qe(bi,fr),fr|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,Qe(bi,fr),fr|=n;return qt(e,t,o,r),t.child}function hC(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ig(e,t,r,n,o){var i=ir(r)?Bo:Ht.current;return i=Mi(t,i),Pi(t,o),r=Np(e,t,r,n,i,o),n=kp(),e!==null&&!nr?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Dn(e,t,o)):(rt&&n&&yp(t),t.flags|=1,qt(e,t,r,o),t.child)}function a0(e,t,r,n,o){if(ir(r)){var i=!0;vc(t)}else i=!1;if(Pi(t,o),t.stateNode===null)Ql(e,t),dC(t,r,n),ng(t,r,n,o),n=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=Fr(u):(u=ir(r)?Bo:Ht.current,u=Mi(t,u));var d=r.getDerivedStateFromProps,f=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";f||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==n||c!==u)&&e0(t,a,n,u),Un=!1;var g=t.memoizedState;a.state=g,Cc(t,n,a,o),c=t.memoizedState,s!==n||g!==c||or.current||Un?(typeof d=="function"&&(rg(t,r,d,n),c=t.memoizedState),(s=Un||Xv(t,r,s,n,g,c,u))?(f||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),a.props=n,a.state=c,a.context=u,n=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,V2(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Ur(t.type,s),a.props=u,f=t.pendingProps,g=a.context,c=r.contextType,typeof c=="object"&&c!==null?c=Fr(c):(c=ir(r)?Bo:Ht.current,c=Mi(t,c));var p=r.getDerivedStateFromProps;(d=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==f||g!==c)&&e0(t,a,n,c),Un=!1,g=t.memoizedState,a.state=g,Cc(t,n,a,o);var m=t.memoizedState;s!==f||g!==m||or.current||Un?(typeof p=="function"&&(rg(t,r,p,n),m=t.memoizedState),(u=Un||Xv(t,r,u,n,g,m,c)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,m,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,m,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=m),a.props=n,a.state=m,a.context=c,n=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return ag(e,t,r,n,i,o)}function ag(e,t,r,n,o,i){hC(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return o&&Wv(t,r,!1),Dn(e,t,i);n=t.stateNode,G4.current=t;var s=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Di(t,e.child,null,i),t.child=Di(t,null,s,i)):qt(e,t,s,i),t.memoizedState=n.state,o&&Wv(t,r,!0),t.child}function vC(e){var t=e.stateNode;t.pendingContext?Vv(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Vv(e,t.context,!1),Ip(e,t.containerInfo)}function s0(e,t,r,n,o){return Ai(),Sp(o),t.flags|=256,qt(e,t,r,n),t.child}var sg={dehydrated:null,treeContext:null,retryLane:0};function lg(e){return{baseLanes:e,cachePool:null,transitions:null}}function xC(e,t,r){var n=t.pendingProps,o=at.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Qe(at,o&1),e===null)return eg(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,i?(n=t.mode,i=t.child,a={mode:"hidden",children:a},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=bu(a,n,0,null),e=Ro(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=lg(r),t.memoizedState=sg,e):Dp(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return K4(e,t,a,n,s,o,r);if(i){i=n.fallback,a=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:n.children};return!(a&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=no(o,c),n.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=no(s,i):(i=Ro(i,a,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,a=e.child.memoizedState,a=a===null?lg(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~r,t.memoizedState=sg,n}return i=e.child,e=i.sibling,n=no(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Dp(e,t){return t=bu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function vl(e,t,r,n){return n!==null&&Sp(n),Di(t,e.child,null,r),e=Dp(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function K4(e,t,r,n,o,i,a){if(r)return t.flags&256?(t.flags&=-257,n=Ud(Error(ue(422))),vl(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=bu({mode:"visible",children:n.children},o,0,null),i=Ro(i,o,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&Di(t,e.child,null,a),t.child.memoizedState=lg(a),t.memoizedState=sg,i);if(!(t.mode&1))return vl(e,t,a,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var s=n.dgst;return n=s,i=Error(ue(419)),n=Ud(i,n,void 0),vl(e,t,a,n)}if(s=(a&e.childLanes)!==0,nr||s){if(n=St,n!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,An(e,o),Xr(n,e,o,-1))}return zp(),n=Ud(Error(ue(421))),vl(e,t,a,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=s6.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,gr=Xn(o.nextSibling),vr=t,rt=!0,qr=null,e!==null&&(Pr[Er++]=En,Pr[Er++]=$n,Pr[Er++]=zo,En=e.id,$n=e.overflow,zo=t),t=Dp(t,n.children),t.flags|=4096,t)}function l0(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),tg(e.return,t,r)}function Vd(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function yC(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(qt(e,t,n.children,r),n=at.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&l0(e,r,t);else if(e.tag===19)l0(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Qe(at,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&wc(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Vd(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&wc(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Vd(t,!0,r,null,i);break;case"together":Vd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Ql(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Dn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Uo|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(ue(153));if(t.child!==null){for(e=t.child,r=no(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=no(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function J4(e,t,r){switch(t.tag){case 3:vC(t),Ai();break;case 5:W2(t);break;case 1:ir(t.type)&&vc(t);break;case 4:Ip(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Qe(bc,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Qe(at,at.current&1),t.flags|=128,null):r&t.child.childLanes?xC(e,t,r):(Qe(at,at.current&1),e=Dn(e,t,r),e!==null?e.sibling:null);Qe(at,at.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return yC(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Qe(at,at.current),n)break;return null;case 22:case 23:return t.lanes=0,mC(e,t,r)}return Dn(e,t,r)}var bC,cg,SC,CC;bC=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};cg=function(){};SC=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,ko(jn.current);var i=null;switch(r){case"input":o=Nf(e,o),n=Nf(e,n),i=[];break;case"select":o=lt({},o,{value:void 0}),n=lt({},n,{value:void 0}),i=[];break;case"textarea":o=Af(e,o),n=Af(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=mc)}Rf(r,n);var a;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(is.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var c=n[u];if(s=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(r||(r={}),r[a]=c[a])}else r||(i||(i=[]),i.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(is.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Ye("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};CC=function(e,t,r,n){r!==n&&(t.flags|=4)};function Ca(e,t){if(!rt)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Rt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Q4(e,t,r){var n=t.pendingProps;switch(bp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rt(t),null;case 1:return ir(t.type)&&hc(),Rt(t),null;case 3:return n=t.stateNode,Ri(),et(or),et(Ht),Ep(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(ml(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,qr!==null&&(vg(qr),qr=null))),cg(e,t),Rt(t),null;case 5:Pp(t);var o=ko(vs.current);if(r=t.type,e!==null&&t.stateNode!=null)SC(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(ue(166));return Rt(t),null}if(e=ko(jn.current),ml(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[Cn]=t,n[ms]=i,e=(t.mode&1)!==0,r){case"dialog":Ye("cancel",n),Ye("close",n);break;case"iframe":case"object":case"embed":Ye("load",n);break;case"video":case"audio":for(o=0;o<La.length;o++)Ye(La[o],n);break;case"source":Ye("error",n);break;case"img":case"image":case"link":Ye("error",n),Ye("load",n);break;case"details":Ye("toggle",n);break;case"input":vv(n,i),Ye("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Ye("invalid",n);break;case"textarea":yv(n,i),Ye("invalid",n)}Rf(r,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?n.textContent!==s&&(i.suppressHydrationWarning!==!0&&pl(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&pl(n.textContent,s,e),o=["children",""+s]):is.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Ye("scroll",n)}switch(r){case"input":al(n),xv(n,i,!0);break;case"textarea":al(n),bv(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=mc)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=QS(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[Cn]=t,e[ms]=n,bC(e,t,!1,!1),t.stateNode=e;e:{switch(a=Lf(r,n),r){case"dialog":Ye("cancel",e),Ye("close",e),o=n;break;case"iframe":case"object":case"embed":Ye("load",e),o=n;break;case"video":case"audio":for(o=0;o<La.length;o++)Ye(La[o],e);o=n;break;case"source":Ye("error",e),o=n;break;case"img":case"image":case"link":Ye("error",e),Ye("load",e),o=n;break;case"details":Ye("toggle",e),o=n;break;case"input":vv(e,n),o=Nf(e,n),Ye("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=lt({},n,{value:void 0}),Ye("invalid",e);break;case"textarea":yv(e,n),o=Af(e,n),Ye("invalid",e);break;default:o=n}Rf(r,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?XS(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&ZS(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&as(e,c):typeof c=="number"&&as(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(is.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Ye("scroll",e):c!=null&&ip(e,i,c,a))}switch(r){case"input":al(e),xv(e,n,!1);break;case"textarea":al(e),bv(e);break;case"option":n.value!=null&&e.setAttribute("value",""+co(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?ji(e,!!n.multiple,i,!1):n.defaultValue!=null&&ji(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=mc)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Rt(t),null;case 6:if(e&&t.stateNode!=null)CC(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(ue(166));if(r=ko(vs.current),ko(jn.current),ml(t)){if(n=t.stateNode,r=t.memoizedProps,n[Cn]=t,(i=n.nodeValue!==r)&&(e=vr,e!==null))switch(e.tag){case 3:pl(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&pl(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Cn]=t,t.stateNode=n}return Rt(t),null;case 13:if(et(at),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(rt&&gr!==null&&t.mode&1&&!(t.flags&128))B2(),Ai(),t.flags|=98560,i=!1;else if(i=ml(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(ue(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(ue(317));i[Cn]=t}else Ai(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Rt(t),i=!1}else qr!==null&&(vg(qr),qr=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||at.current&1?yt===0&&(yt=3):zp())),t.updateQueue!==null&&(t.flags|=4),Rt(t),null);case 4:return Ri(),cg(e,t),e===null&&gs(t.stateNode.containerInfo),Rt(t),null;case 10:return jp(t.type._context),Rt(t),null;case 17:return ir(t.type)&&hc(),Rt(t),null;case 19:if(et(at),i=t.memoizedState,i===null)return Rt(t),null;if(n=(t.flags&128)!==0,a=i.rendering,a===null)if(n)Ca(i,!1);else{if(yt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=wc(e),a!==null){for(t.flags|=128,Ca(i,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Qe(at,at.current&1|2),t.child}e=e.sibling}i.tail!==null&&ut()>Fi&&(t.flags|=128,n=!0,Ca(i,!1),t.lanes=4194304)}else{if(!n)if(e=wc(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Ca(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!rt)return Rt(t),null}else 2*ut()-i.renderingStartTime>Fi&&r!==1073741824&&(t.flags|=128,n=!0,Ca(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(r=i.last,r!==null?r.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=ut(),t.sibling=null,r=at.current,Qe(at,n?r&1|2:r&1),t):(Rt(t),null);case 22:case 23:return Bp(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?fr&1073741824&&(Rt(t),t.subtreeFlags&6&&(t.flags|=8192)):Rt(t),null;case 24:return null;case 25:return null}throw Error(ue(156,t.tag))}function Z4(e,t){switch(bp(t),t.tag){case 1:return ir(t.type)&&hc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ri(),et(or),et(Ht),Ep(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Pp(t),null;case 13:if(et(at),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(ue(340));Ai()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return et(at),null;case 4:return Ri(),null;case 10:return jp(t.type._context),null;case 22:case 23:return Bp(),null;case 24:return null;default:return null}}var xl=!1,Ft=!1,Y4=typeof WeakSet=="function"?WeakSet:Set,Ce=null;function yi(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){ct(e,t,n)}else r.current=null}function ug(e,t,r){try{r()}catch(n){ct(e,t,n)}}var c0=!1;function X4(e,t){if(Gf=fc,e=I2(),xp(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var a=0,s=-1,c=-1,u=0,d=0,f=e,g=null;t:for(;;){for(var p;f!==r||o!==0&&f.nodeType!==3||(s=a+o),f!==i||n!==0&&f.nodeType!==3||(c=a+n),f.nodeType===3&&(a+=f.nodeValue.length),(p=f.firstChild)!==null;)g=f,f=p;for(;;){if(f===e)break t;if(g===r&&++u===o&&(s=a),g===i&&++d===n&&(c=a),(p=f.nextSibling)!==null)break;f=g,g=f.parentNode}f=p}r=s===-1||c===-1?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Kf={focusedElem:e,selectionRange:r},fc=!1,Ce=t;Ce!==null;)if(t=Ce,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Ce=e;else for(;Ce!==null;){t=Ce;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var h=m.memoizedProps,x=m.memoizedState,v=t.stateNode,y=v.getSnapshotBeforeUpdate(t.elementType===t.type?h:Ur(t.type,h),x);v.__reactInternalSnapshotBeforeUpdate=y}break;case 3:var C=t.stateNode.containerInfo;C.nodeType===1?C.textContent="":C.nodeType===9&&C.documentElement&&C.removeChild(C.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ue(163))}}catch(T){ct(t,t.return,T)}if(e=t.sibling,e!==null){e.return=t.return,Ce=e;break}Ce=t.return}return m=c0,c0=!1,m}function qa(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&ug(t,r,i)}o=o.next}while(o!==n)}}function xu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function dg(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function wC(e){var t=e.alternate;t!==null&&(e.alternate=null,wC(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Cn],delete t[ms],delete t[Zf],delete t[D4],delete t[R4])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function jC(e){return e.tag===5||e.tag===3||e.tag===4}function u0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jC(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function fg(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=mc));else if(n!==4&&(e=e.child,e!==null))for(fg(e,t,r),e=e.sibling;e!==null;)fg(e,t,r),e=e.sibling}function gg(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(gg(e,t,r),e=e.sibling;e!==null;)gg(e,t,r),e=e.sibling}var It=null,Wr=!1;function zn(e,t,r){for(r=r.child;r!==null;)TC(e,t,r),r=r.sibling}function TC(e,t,r){if(wn&&typeof wn.onCommitFiberUnmount=="function")try{wn.onCommitFiberUnmount(uu,r)}catch{}switch(r.tag){case 5:Ft||yi(r,t);case 6:var n=It,o=Wr;It=null,zn(e,t,r),It=n,Wr=o,It!==null&&(Wr?(e=It,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):It.removeChild(r.stateNode));break;case 18:It!==null&&(Wr?(e=It,r=r.stateNode,e.nodeType===8?Ld(e.parentNode,r):e.nodeType===1&&Ld(e,r),us(e)):Ld(It,r.stateNode));break;case 4:n=It,o=Wr,It=r.stateNode.containerInfo,Wr=!0,zn(e,t,r),It=n,Wr=o;break;case 0:case 11:case 14:case 15:if(!Ft&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&ug(r,t,a),o=o.next}while(o!==n)}zn(e,t,r);break;case 1:if(!Ft&&(yi(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){ct(r,t,s)}zn(e,t,r);break;case 21:zn(e,t,r);break;case 22:r.mode&1?(Ft=(n=Ft)||r.memoizedState!==null,zn(e,t,r),Ft=n):zn(e,t,r);break;default:zn(e,t,r)}}function d0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Y4),t.forEach(function(n){var o=l6.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function Hr(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:It=s.stateNode,Wr=!1;break e;case 3:It=s.stateNode.containerInfo,Wr=!0;break e;case 4:It=s.stateNode.containerInfo,Wr=!0;break e}s=s.return}if(It===null)throw Error(ue(160));TC(i,a,o),It=null,Wr=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){ct(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)OC(t,e),t=t.sibling}function OC(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Hr(t,e),gn(e),n&4){try{qa(3,e,e.return),xu(3,e)}catch(h){ct(e,e.return,h)}try{qa(5,e,e.return)}catch(h){ct(e,e.return,h)}}break;case 1:Hr(t,e),gn(e),n&512&&r!==null&&yi(r,r.return);break;case 5:if(Hr(t,e),gn(e),n&512&&r!==null&&yi(r,r.return),e.flags&32){var o=e.stateNode;try{as(o,"")}catch(h){ct(e,e.return,h)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=r!==null?r.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&KS(o,i),Lf(s,a);var u=Lf(s,i);for(a=0;a<c.length;a+=2){var d=c[a],f=c[a+1];d==="style"?XS(o,f):d==="dangerouslySetInnerHTML"?ZS(o,f):d==="children"?as(o,f):ip(o,d,f,u)}switch(s){case"input":kf(o,i);break;case"textarea":JS(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?ji(o,!!i.multiple,p,!1):g!==!!i.multiple&&(i.defaultValue!=null?ji(o,!!i.multiple,i.defaultValue,!0):ji(o,!!i.multiple,i.multiple?[]:"",!1))}o[ms]=i}catch(h){ct(e,e.return,h)}}break;case 6:if(Hr(t,e),gn(e),n&4){if(e.stateNode===null)throw Error(ue(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(h){ct(e,e.return,h)}}break;case 3:if(Hr(t,e),gn(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{us(t.containerInfo)}catch(h){ct(e,e.return,h)}break;case 4:Hr(t,e),gn(e);break;case 13:Hr(t,e),gn(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Fp=ut())),n&4&&d0(e);break;case 22:if(d=r!==null&&r.memoizedState!==null,e.mode&1?(Ft=(u=Ft)||d,Hr(t,e),Ft=u):Hr(t,e),gn(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Ce=e,d=e.child;d!==null;){for(f=Ce=d;Ce!==null;){switch(g=Ce,p=g.child,g.tag){case 0:case 11:case 14:case 15:qa(4,g,g.return);break;case 1:yi(g,g.return);var m=g.stateNode;if(typeof m.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(h){ct(n,r,h)}}break;case 5:yi(g,g.return);break;case 22:if(g.memoizedState!==null){g0(f);continue}}p!==null?(p.return=g,Ce=p):g0(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=f.stateNode,c=f.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=YS("display",a))}catch(h){ct(e,e.return,h)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(h){ct(e,e.return,h)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Hr(t,e),gn(e),n&4&&d0(e);break;case 21:break;default:Hr(t,e),gn(e)}}function gn(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(jC(r)){var n=r;break e}r=r.return}throw Error(ue(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(as(o,""),n.flags&=-33);var i=u0(e);gg(e,i,o);break;case 3:case 4:var a=n.stateNode.containerInfo,s=u0(e);fg(e,s,a);break;default:throw Error(ue(161))}}catch(c){ct(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function e6(e,t,r){Ce=e,IC(e)}function IC(e,t,r){for(var n=(e.mode&1)!==0;Ce!==null;){var o=Ce,i=o.child;if(o.tag===22&&n){var a=o.memoizedState!==null||xl;if(!a){var s=o.alternate,c=s!==null&&s.memoizedState!==null||Ft;s=xl;var u=Ft;if(xl=a,(Ft=c)&&!u)for(Ce=o;Ce!==null;)a=Ce,c=a.child,a.tag===22&&a.memoizedState!==null?p0(o):c!==null?(c.return=a,Ce=c):p0(o);for(;i!==null;)Ce=i,IC(i),i=i.sibling;Ce=o,xl=s,Ft=u}f0(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,Ce=i):f0(e)}}function f0(e){for(;Ce!==null;){var t=Ce;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ft||xu(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ft)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Ur(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Qv(t,i,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Qv(t,a,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&us(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ue(163))}Ft||t.flags&512&&dg(t)}catch(g){ct(t,t.return,g)}}if(t===e){Ce=null;break}if(r=t.sibling,r!==null){r.return=t.return,Ce=r;break}Ce=t.return}}function g0(e){for(;Ce!==null;){var t=Ce;if(t===e){Ce=null;break}var r=t.sibling;if(r!==null){r.return=t.return,Ce=r;break}Ce=t.return}}function p0(e){for(;Ce!==null;){var t=Ce;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{xu(4,t)}catch(c){ct(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(c){ct(t,o,c)}}var i=t.return;try{dg(t)}catch(c){ct(t,i,c)}break;case 5:var a=t.return;try{dg(t)}catch(c){ct(t,a,c)}}}catch(c){ct(t,t.return,c)}if(t===e){Ce=null;break}var s=t.sibling;if(s!==null){s.return=t.return,Ce=s;break}Ce=t.return}}var t6=Math.ceil,Oc=_n.ReactCurrentDispatcher,Rp=_n.ReactCurrentOwner,Dr=_n.ReactCurrentBatchConfig,ze=0,St=null,mt=null,Et=0,fr=0,bi=ho(0),yt=0,Ss=null,Uo=0,yu=0,Lp=0,Ga=null,rr=null,Fp=0,Fi=1/0,In=null,Ic=!1,pg=null,to=null,yl=!1,Gn=null,Pc=0,Ka=0,mg=null,Zl=-1,Yl=0;function Gt(){return ze&6?ut():Zl!==-1?Zl:Zl=ut()}function ro(e){return e.mode&1?ze&2&&Et!==0?Et&-Et:F4.transition!==null?(Yl===0&&(Yl=d2()),Yl):(e=Ue,e!==0||(e=window.event,e=e===void 0?16:x2(e.type)),e):1}function Xr(e,t,r,n){if(50<Ka)throw Ka=0,mg=null,Error(ue(185));Ms(e,r,n),(!(ze&2)||e!==St)&&(e===St&&(!(ze&2)&&(yu|=r),yt===4&&Wn(e,Et)),ar(e,n),r===1&&ze===0&&!(t.mode&1)&&(Fi=ut()+500,mu&&vo()))}function ar(e,t){var r=e.callbackNode;F8(e,t);var n=dc(e,e===St?Et:0);if(n===0)r!==null&&wv(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&wv(r),t===1)e.tag===0?L4(m0.bind(null,e)):L2(m0.bind(null,e)),M4(function(){!(ze&6)&&vo()}),r=null;else{switch(f2(n)){case 1:r=up;break;case 4:r=c2;break;case 16:r=uc;break;case 536870912:r=u2;break;default:r=uc}r=DC(r,PC.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function PC(e,t){if(Zl=-1,Yl=0,ze&6)throw Error(ue(327));var r=e.callbackNode;if(Ei()&&e.callbackNode!==r)return null;var n=dc(e,e===St?Et:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ec(e,n);else{t=n;var o=ze;ze|=2;var i=$C();(St!==e||Et!==t)&&(In=null,Fi=ut()+500,Do(e,t));do try{o6();break}catch(s){EC(e,s)}while(!0);wp(),Oc.current=i,ze=o,mt!==null?t=0:(St=null,Et=0,t=yt)}if(t!==0){if(t===2&&(o=Hf(e),o!==0&&(n=o,t=hg(e,o))),t===1)throw r=Ss,Do(e,0),Wn(e,n),ar(e,ut()),r;if(t===6)Wn(e,n);else{if(o=e.current.alternate,!(n&30)&&!r6(o)&&(t=Ec(e,n),t===2&&(i=Hf(e),i!==0&&(n=i,t=hg(e,i))),t===1))throw r=Ss,Do(e,0),Wn(e,n),ar(e,ut()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(ue(345));case 2:To(e,rr,In);break;case 3:if(Wn(e,n),(n&130023424)===n&&(t=Fp+500-ut(),10<t)){if(dc(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Gt(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Qf(To.bind(null,e,rr,In),t);break}To(e,rr,In);break;case 4:if(Wn(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var a=31-Yr(n);i=1<<a,a=t[a],a>o&&(o=a),n&=~i}if(n=o,n=ut()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*t6(n/1960))-n,10<n){e.timeoutHandle=Qf(To.bind(null,e,rr,In),n);break}To(e,rr,In);break;case 5:To(e,rr,In);break;default:throw Error(ue(329))}}}return ar(e,ut()),e.callbackNode===r?PC.bind(null,e):null}function hg(e,t){var r=Ga;return e.current.memoizedState.isDehydrated&&(Do(e,t).flags|=256),e=Ec(e,t),e!==2&&(t=rr,rr=r,t!==null&&vg(t)),e}function vg(e){rr===null?rr=e:rr.push.apply(rr,e)}function r6(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!rn(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Wn(e,t){for(t&=~Lp,t&=~yu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Yr(t),n=1<<r;e[r]=-1,t&=~n}}function m0(e){if(ze&6)throw Error(ue(327));Ei();var t=dc(e,0);if(!(t&1))return ar(e,ut()),null;var r=Ec(e,t);if(e.tag!==0&&r===2){var n=Hf(e);n!==0&&(t=n,r=hg(e,n))}if(r===1)throw r=Ss,Do(e,0),Wn(e,t),ar(e,ut()),r;if(r===6)throw Error(ue(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,To(e,rr,In),ar(e,ut()),null}function _p(e,t){var r=ze;ze|=1;try{return e(t)}finally{ze=r,ze===0&&(Fi=ut()+500,mu&&vo())}}function Vo(e){Gn!==null&&Gn.tag===0&&!(ze&6)&&Ei();var t=ze;ze|=1;var r=Dr.transition,n=Ue;try{if(Dr.transition=null,Ue=1,e)return e()}finally{Ue=n,Dr.transition=r,ze=t,!(ze&6)&&vo()}}function Bp(){fr=bi.current,et(bi)}function Do(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,k4(r)),mt!==null)for(r=mt.return;r!==null;){var n=r;switch(bp(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&hc();break;case 3:Ri(),et(or),et(Ht),Ep();break;case 5:Pp(n);break;case 4:Ri();break;case 13:et(at);break;case 19:et(at);break;case 10:jp(n.type._context);break;case 22:case 23:Bp()}r=r.return}if(St=e,mt=e=no(e.current,null),Et=fr=t,yt=0,Ss=null,Lp=yu=Uo=0,rr=Ga=null,No!==null){for(t=0;t<No.length;t++)if(r=No[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var a=i.next;i.next=o,n.next=a}r.pending=n}No=null}return e}function EC(e,t){do{var r=mt;try{if(wp(),Kl.current=Tc,jc){for(var n=st.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}jc=!1}if(Ho=0,bt=xt=st=null,Wa=!1,xs=0,Rp.current=null,r===null||r.return===null){yt=1,Ss=t,mt=null;break}e:{var i=e,a=r.return,s=r,c=t;if(t=Et,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=s,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var p=r0(a);if(p!==null){p.flags&=-257,n0(p,a,s,i,t),p.mode&1&&t0(i,u,t),t=p,c=u;var m=t.updateQueue;if(m===null){var h=new Set;h.add(c),t.updateQueue=h}else m.add(c);break e}else{if(!(t&1)){t0(i,u,t),zp();break e}c=Error(ue(426))}}else if(rt&&s.mode&1){var x=r0(a);if(x!==null){!(x.flags&65536)&&(x.flags|=256),n0(x,a,s,i,t),Sp(Li(c,s));break e}}i=c=Li(c,s),yt!==4&&(yt=2),Ga===null?Ga=[i]:Ga.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=fC(i,c,t);Jv(i,v);break e;case 1:s=c;var y=i.type,C=i.stateNode;if(!(i.flags&128)&&(typeof y.getDerivedStateFromError=="function"||C!==null&&typeof C.componentDidCatch=="function"&&(to===null||!to.has(C)))){i.flags|=65536,t&=-t,i.lanes|=t;var T=gC(i,s,t);Jv(i,T);break e}}i=i.return}while(i!==null)}kC(r)}catch(N){t=N,mt===r&&r!==null&&(mt=r=r.return);continue}break}while(!0)}function $C(){var e=Oc.current;return Oc.current=Tc,e===null?Tc:e}function zp(){(yt===0||yt===3||yt===2)&&(yt=4),St===null||!(Uo&268435455)&&!(yu&268435455)||Wn(St,Et)}function Ec(e,t){var r=ze;ze|=2;var n=$C();(St!==e||Et!==t)&&(In=null,Do(e,t));do try{n6();break}catch(o){EC(e,o)}while(!0);if(wp(),ze=r,Oc.current=n,mt!==null)throw Error(ue(261));return St=null,Et=0,yt}function n6(){for(;mt!==null;)NC(mt)}function o6(){for(;mt!==null&&!E8();)NC(mt)}function NC(e){var t=AC(e.alternate,e,fr);e.memoizedProps=e.pendingProps,t===null?kC(e):mt=t,Rp.current=null}function kC(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=Z4(r,t),r!==null){r.flags&=32767,mt=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{yt=6,mt=null;return}}else if(r=Q4(r,t,fr),r!==null){mt=r;return}if(t=t.sibling,t!==null){mt=t;return}mt=t=e}while(t!==null);yt===0&&(yt=5)}function To(e,t,r){var n=Ue,o=Dr.transition;try{Dr.transition=null,Ue=1,i6(e,t,r,n)}finally{Dr.transition=o,Ue=n}return null}function i6(e,t,r,n){do Ei();while(Gn!==null);if(ze&6)throw Error(ue(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(ue(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(_8(e,i),e===St&&(mt=St=null,Et=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||yl||(yl=!0,DC(uc,function(){return Ei(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=Dr.transition,Dr.transition=null;var a=Ue;Ue=1;var s=ze;ze|=4,Rp.current=null,X4(e,r),OC(r,e),T4(Kf),fc=!!Gf,Kf=Gf=null,e.current=r,e6(r),$8(),ze=s,Ue=a,Dr.transition=i}else e.current=r;if(yl&&(yl=!1,Gn=e,Pc=o),i=e.pendingLanes,i===0&&(to=null),M8(r.stateNode),ar(e,ut()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Ic)throw Ic=!1,e=pg,pg=null,e;return Pc&1&&e.tag!==0&&Ei(),i=e.pendingLanes,i&1?e===mg?Ka++:(Ka=0,mg=e):Ka=0,vo(),null}function Ei(){if(Gn!==null){var e=f2(Pc),t=Dr.transition,r=Ue;try{if(Dr.transition=null,Ue=16>e?16:e,Gn===null)var n=!1;else{if(e=Gn,Gn=null,Pc=0,ze&6)throw Error(ue(331));var o=ze;for(ze|=4,Ce=e.current;Ce!==null;){var i=Ce,a=i.child;if(Ce.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(Ce=u;Ce!==null;){var d=Ce;switch(d.tag){case 0:case 11:case 15:qa(8,d,i)}var f=d.child;if(f!==null)f.return=d,Ce=f;else for(;Ce!==null;){d=Ce;var g=d.sibling,p=d.return;if(wC(d),d===u){Ce=null;break}if(g!==null){g.return=p,Ce=g;break}Ce=p}}}var m=i.alternate;if(m!==null){var h=m.child;if(h!==null){m.child=null;do{var x=h.sibling;h.sibling=null,h=x}while(h!==null)}}Ce=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,Ce=a;else e:for(;Ce!==null;){if(i=Ce,i.flags&2048)switch(i.tag){case 0:case 11:case 15:qa(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,Ce=v;break e}Ce=i.return}}var y=e.current;for(Ce=y;Ce!==null;){a=Ce;var C=a.child;if(a.subtreeFlags&2064&&C!==null)C.return=a,Ce=C;else e:for(a=y;Ce!==null;){if(s=Ce,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:xu(9,s)}}catch(N){ct(s,s.return,N)}if(s===a){Ce=null;break e}var T=s.sibling;if(T!==null){T.return=s.return,Ce=T;break e}Ce=s.return}}if(ze=o,vo(),wn&&typeof wn.onPostCommitFiberRoot=="function")try{wn.onPostCommitFiberRoot(uu,e)}catch{}n=!0}return n}finally{Ue=r,Dr.transition=t}}return!1}function h0(e,t,r){t=Li(r,t),t=fC(e,t,1),e=eo(e,t,1),t=Gt(),e!==null&&(Ms(e,1,t),ar(e,t))}function ct(e,t,r){if(e.tag===3)h0(e,e,r);else for(;t!==null;){if(t.tag===3){h0(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(to===null||!to.has(n))){e=Li(r,e),e=gC(t,e,1),t=eo(t,e,1),e=Gt(),t!==null&&(Ms(t,1,e),ar(t,e));break}}t=t.return}}function a6(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Gt(),e.pingedLanes|=e.suspendedLanes&r,St===e&&(Et&r)===r&&(yt===4||yt===3&&(Et&130023424)===Et&&500>ut()-Fp?Do(e,0):Lp|=r),ar(e,t)}function MC(e,t){t===0&&(e.mode&1?(t=cl,cl<<=1,!(cl&130023424)&&(cl=4194304)):t=1);var r=Gt();e=An(e,t),e!==null&&(Ms(e,t,r),ar(e,r))}function s6(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),MC(e,r)}function l6(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(ue(314))}n!==null&&n.delete(t),MC(e,r)}var AC;AC=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||or.current)nr=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return nr=!1,J4(e,t,r);nr=!!(e.flags&131072)}else nr=!1,rt&&t.flags&1048576&&F2(t,yc,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Ql(e,t),e=t.pendingProps;var o=Mi(t,Ht.current);Pi(t,r),o=Np(null,t,n,e,o,r);var i=kp();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ir(n)?(i=!0,vc(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Op(t),o.updater=vu,t.stateNode=o,o._reactInternals=t,ng(t,n,e,r),t=ag(null,t,n,!0,i,r)):(t.tag=0,rt&&i&&yp(t),qt(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Ql(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=u6(n),e=Ur(n,e),o){case 0:t=ig(null,t,n,e,r);break e;case 1:t=a0(null,t,n,e,r);break e;case 11:t=o0(null,t,n,e,r);break e;case 14:t=i0(null,t,n,Ur(n.type,e),r);break e}throw Error(ue(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ur(n,o),ig(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ur(n,o),a0(e,t,n,o,r);case 3:e:{if(vC(t),e===null)throw Error(ue(387));n=t.pendingProps,i=t.memoizedState,o=i.element,V2(e,t),Cc(t,n,null,r);var a=t.memoizedState;if(n=a.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Li(Error(ue(423)),t),t=s0(e,t,n,r,o);break e}else if(n!==o){o=Li(Error(ue(424)),t),t=s0(e,t,n,r,o);break e}else for(gr=Xn(t.stateNode.containerInfo.firstChild),vr=t,rt=!0,qr=null,r=H2(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Ai(),n===o){t=Dn(e,t,r);break e}qt(e,t,n,r)}t=t.child}return t;case 5:return W2(t),e===null&&eg(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,Jf(n,o)?a=null:i!==null&&Jf(n,i)&&(t.flags|=32),hC(e,t),qt(e,t,a,r),t.child;case 6:return e===null&&eg(t),null;case 13:return xC(e,t,r);case 4:return Ip(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Di(t,null,n,r):qt(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ur(n,o),o0(e,t,n,o,r);case 7:return qt(e,t,t.pendingProps,r),t.child;case 8:return qt(e,t,t.pendingProps.children,r),t.child;case 12:return qt(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,Qe(bc,n._currentValue),n._currentValue=a,i!==null)if(rn(i.value,a)){if(i.children===o.children&&!or.current){t=Dn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var c=s.firstContext;c!==null;){if(c.context===n){if(i.tag===1){c=Nn(-1,r&-r),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),tg(i.return,r,t),s.lanes|=r;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(ue(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),tg(a,r,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}qt(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Pi(t,r),o=Fr(o),n=n(o),t.flags|=1,qt(e,t,n,r),t.child;case 14:return n=t.type,o=Ur(n,t.pendingProps),o=Ur(n.type,o),i0(e,t,n,o,r);case 15:return pC(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Ur(n,o),Ql(e,t),t.tag=1,ir(n)?(e=!0,vc(t)):e=!1,Pi(t,r),dC(t,n,o),ng(t,n,o,r),ag(null,t,n,!0,e,r);case 19:return yC(e,t,r);case 22:return mC(e,t,r)}throw Error(ue(156,t.tag))};function DC(e,t){return l2(e,t)}function c6(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nr(e,t,r,n){return new c6(e,t,r,n)}function Hp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function u6(e){if(typeof e=="function")return Hp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===sp)return 11;if(e===lp)return 14}return 2}function no(e,t){var r=e.alternate;return r===null?(r=Nr(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Xl(e,t,r,n,o,i){var a=2;if(n=e,typeof e=="function")Hp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case ui:return Ro(r.children,o,i,t);case ap:a=8,o|=8;break;case If:return e=Nr(12,r,t,o|2),e.elementType=If,e.lanes=i,e;case Pf:return e=Nr(13,r,t,o),e.elementType=Pf,e.lanes=i,e;case Ef:return e=Nr(19,r,t,o),e.elementType=Ef,e.lanes=i,e;case WS:return bu(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case US:a=10;break e;case VS:a=9;break e;case sp:a=11;break e;case lp:a=14;break e;case Hn:a=16,n=null;break e}throw Error(ue(130,e==null?e:typeof e,""))}return t=Nr(a,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Ro(e,t,r,n){return e=Nr(7,e,n,t),e.lanes=r,e}function bu(e,t,r,n){return e=Nr(22,e,n,t),e.elementType=WS,e.lanes=r,e.stateNode={isHidden:!1},e}function Wd(e,t,r){return e=Nr(6,e,null,t),e.lanes=r,e}function qd(e,t,r){return t=Nr(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function d6(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Od(0),this.expirationTimes=Od(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Od(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Up(e,t,r,n,o,i,a,s,c){return e=new d6(e,t,r,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Nr(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Op(i),e}function f6(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ci,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function RC(e){if(!e)return uo;e=e._reactInternals;e:{if(Zo(e)!==e||e.tag!==1)throw Error(ue(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(ir(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(ue(171))}if(e.tag===1){var r=e.type;if(ir(r))return R2(e,r,t)}return t}function LC(e,t,r,n,o,i,a,s,c){return e=Up(r,n,!0,e,o,i,a,s,c),e.context=RC(null),r=e.current,n=Gt(),o=ro(r),i=Nn(n,o),i.callback=t??null,eo(r,i,o),e.current.lanes=o,Ms(e,o,n),ar(e,n),e}function Su(e,t,r,n){var o=t.current,i=Gt(),a=ro(o);return r=RC(r),t.context===null?t.context=r:t.pendingContext=r,t=Nn(i,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=eo(o,t,a),e!==null&&(Xr(e,o,a,i),Gl(e,o,a)),a}function $c(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function v0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Vp(e,t){v0(e,t),(e=e.alternate)&&v0(e,t)}function g6(){return null}var FC=typeof reportError=="function"?reportError:function(e){console.error(e)};function Wp(e){this._internalRoot=e}Cu.prototype.render=Wp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(ue(409));Su(e,t,null,null)};Cu.prototype.unmount=Wp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Vo(function(){Su(null,e,null,null)}),t[Mn]=null}};function Cu(e){this._internalRoot=e}Cu.prototype.unstable_scheduleHydration=function(e){if(e){var t=m2();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Vn.length&&t!==0&&t<Vn[r].priority;r++);Vn.splice(r,0,e),r===0&&v2(e)}};function qp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function wu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function x0(){}function p6(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=$c(a);i.call(u)}}var a=LC(t,n,e,0,null,!1,!1,"",x0);return e._reactRootContainer=a,e[Mn]=a.current,gs(e.nodeType===8?e.parentNode:e),Vo(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var u=$c(c);s.call(u)}}var c=Up(e,0,!1,null,null,!1,!1,"",x0);return e._reactRootContainer=c,e[Mn]=c.current,gs(e.nodeType===8?e.parentNode:e),Vo(function(){Su(t,c,r,n)}),c}function ju(e,t,r,n,o){var i=r._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var c=$c(a);s.call(c)}}Su(t,a,e,o)}else a=p6(r,t,e,o,n);return $c(a)}g2=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ra(t.pendingLanes);r!==0&&(dp(t,r|1),ar(t,ut()),!(ze&6)&&(Fi=ut()+500,vo()))}break;case 13:Vo(function(){var n=An(e,1);if(n!==null){var o=Gt();Xr(n,e,1,o)}}),Vp(e,1)}};fp=function(e){if(e.tag===13){var t=An(e,134217728);if(t!==null){var r=Gt();Xr(t,e,134217728,r)}Vp(e,134217728)}};p2=function(e){if(e.tag===13){var t=ro(e),r=An(e,t);if(r!==null){var n=Gt();Xr(r,e,t,n)}Vp(e,t)}};m2=function(){return Ue};h2=function(e,t){var r=Ue;try{return Ue=e,t()}finally{Ue=r}};_f=function(e,t,r){switch(t){case"input":if(kf(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=pu(n);if(!o)throw Error(ue(90));GS(n),kf(n,o)}}}break;case"textarea":JS(e,r);break;case"select":t=r.value,t!=null&&ji(e,!!r.multiple,t,!1)}};r2=_p;n2=Vo;var m6={usingClientEntryPoint:!1,Events:[Ds,pi,pu,e2,t2,_p]},wa={findFiberByHostInstance:$o,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},h6={bundleType:wa.bundleType,version:wa.version,rendererPackageName:wa.rendererPackageName,rendererConfig:wa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:_n.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=a2(e),e===null?null:e.stateNode},findFiberByHostInstance:wa.findFiberByHostInstance||g6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var bl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!bl.isDisabled&&bl.supportsFiber)try{uu=bl.inject(h6),wn=bl}catch{}}Sr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=m6;Sr.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qp(t))throw Error(ue(200));return f6(e,t,null,r)};Sr.createRoot=function(e,t){if(!qp(e))throw Error(ue(299));var r=!1,n="",o=FC;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Up(e,1,!1,null,null,r,!1,n,o),e[Mn]=t.current,gs(e.nodeType===8?e.parentNode:e),new Wp(t)};Sr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(ue(188)):(e=Object.keys(e).join(","),Error(ue(268,e)));return e=a2(t),e=e===null?null:e.stateNode,e};Sr.flushSync=function(e){return Vo(e)};Sr.hydrate=function(e,t,r){if(!wu(t))throw Error(ue(200));return ju(null,e,t,!0,r)};Sr.hydrateRoot=function(e,t,r){if(!qp(e))throw Error(ue(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",a=FC;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=LC(t,null,e,1,r??null,o,!1,i,a),e[Mn]=t.current,gs(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new Cu(t)};Sr.render=function(e,t,r){if(!wu(t))throw Error(ue(200));return ju(null,e,t,!1,r)};Sr.unmountComponentAtNode=function(e){if(!wu(e))throw Error(ue(40));return e._reactRootContainer?(Vo(function(){ju(null,null,e,!1,function(){e._reactRootContainer=null,e[Mn]=null})}),!0):!1};Sr.unstable_batchedUpdates=_p;Sr.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!wu(r))throw Error(ue(200));if(e==null||e._reactInternals===void 0)throw Error(ue(38));return ju(e,t,r,!1,n)};Sr.version="18.3.1-next-f1338f8080-20240426";function _C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_C)}catch(e){console.error(e)}}_C(),_S.exports=Sr;var Tu=_S.exports;const BC=ht(Tu);var zC,y0=Tu;zC=y0.createRoot,y0.hydrateRoot;var HC={exports:{}},Ve={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jt=typeof Symbol=="function"&&Symbol.for,Gp=jt?Symbol.for("react.element"):60103,Kp=jt?Symbol.for("react.portal"):60106,Ou=jt?Symbol.for("react.fragment"):60107,Iu=jt?Symbol.for("react.strict_mode"):60108,Pu=jt?Symbol.for("react.profiler"):60114,Eu=jt?Symbol.for("react.provider"):60109,$u=jt?Symbol.for("react.context"):60110,Jp=jt?Symbol.for("react.async_mode"):60111,Nu=jt?Symbol.for("react.concurrent_mode"):60111,ku=jt?Symbol.for("react.forward_ref"):60112,Mu=jt?Symbol.for("react.suspense"):60113,v6=jt?Symbol.for("react.suspense_list"):60120,Au=jt?Symbol.for("react.memo"):60115,Du=jt?Symbol.for("react.lazy"):60116,x6=jt?Symbol.for("react.block"):60121,y6=jt?Symbol.for("react.fundamental"):60117,b6=jt?Symbol.for("react.responder"):60118,S6=jt?Symbol.for("react.scope"):60119;function wr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Gp:switch(e=e.type,e){case Jp:case Nu:case Ou:case Pu:case Iu:case Mu:return e;default:switch(e=e&&e.$$typeof,e){case $u:case ku:case Du:case Au:case Eu:return e;default:return t}}case Kp:return t}}}function UC(e){return wr(e)===Nu}Ve.AsyncMode=Jp;Ve.ConcurrentMode=Nu;Ve.ContextConsumer=$u;Ve.ContextProvider=Eu;Ve.Element=Gp;Ve.ForwardRef=ku;Ve.Fragment=Ou;Ve.Lazy=Du;Ve.Memo=Au;Ve.Portal=Kp;Ve.Profiler=Pu;Ve.StrictMode=Iu;Ve.Suspense=Mu;Ve.isAsyncMode=function(e){return UC(e)||wr(e)===Jp};Ve.isConcurrentMode=UC;Ve.isContextConsumer=function(e){return wr(e)===$u};Ve.isContextProvider=function(e){return wr(e)===Eu};Ve.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Gp};Ve.isForwardRef=function(e){return wr(e)===ku};Ve.isFragment=function(e){return wr(e)===Ou};Ve.isLazy=function(e){return wr(e)===Du};Ve.isMemo=function(e){return wr(e)===Au};Ve.isPortal=function(e){return wr(e)===Kp};Ve.isProfiler=function(e){return wr(e)===Pu};Ve.isStrictMode=function(e){return wr(e)===Iu};Ve.isSuspense=function(e){return wr(e)===Mu};Ve.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ou||e===Nu||e===Pu||e===Iu||e===Mu||e===v6||typeof e=="object"&&e!==null&&(e.$$typeof===Du||e.$$typeof===Au||e.$$typeof===Eu||e.$$typeof===$u||e.$$typeof===ku||e.$$typeof===y6||e.$$typeof===b6||e.$$typeof===S6||e.$$typeof===x6)};Ve.typeOf=wr;HC.exports=Ve;var Qp=HC.exports;function C6(e){function t(H,G,Z,W,R){for(var O=0,b=0,F=0,M=0,ee,ie,de=0,ce=0,fe,Se=fe=ee=0,le=0,pe=0,me=0,ye=0,be=Z.length,xe=be-1,je,he="",Oe="",ke="",Ze="",Ge;le<be;){if(ie=Z.charCodeAt(le),le===xe&&b+M+F+O!==0&&(b!==0&&(ie=b===47?10:47),M=F=O=0,be++,xe++),b+M+F+O===0){if(le===xe&&(0<pe&&(he=he.replace(g,"")),0<he.trim().length)){switch(ie){case 32:case 9:case 59:case 13:case 10:break;default:he+=Z.charAt(le)}ie=59}switch(ie){case 123:for(he=he.trim(),ee=he.charCodeAt(0),fe=1,ye=++le;le<be;){switch(ie=Z.charCodeAt(le)){case 123:fe++;break;case 125:fe--;break;case 47:switch(ie=Z.charCodeAt(le+1)){case 42:case 47:e:{for(Se=le+1;Se<xe;++Se)switch(Z.charCodeAt(Se)){case 47:if(ie===42&&Z.charCodeAt(Se-1)===42&&le+2!==Se){le=Se+1;break e}break;case 10:if(ie===47){le=Se+1;break e}}le=Se}}break;case 91:ie++;case 40:ie++;case 34:case 39:for(;le++<xe&&Z.charCodeAt(le)!==ie;);}if(fe===0)break;le++}switch(fe=Z.substring(ye,le),ee===0&&(ee=(he=he.replace(f,"").trim()).charCodeAt(0)),ee){case 64:switch(0<pe&&(he=he.replace(g,"")),ie=he.charCodeAt(1),ie){case 100:case 109:case 115:case 45:pe=G;break;default:pe=Y}if(fe=t(G,pe,fe,ie,R+1),ye=fe.length,0<_&&(pe=r(Y,he,me),Ge=s(3,fe,pe,G,K,q,ye,ie,R,W),he=pe.join(""),Ge!==void 0&&(ye=(fe=Ge.trim()).length)===0&&(ie=0,fe="")),0<ye)switch(ie){case 115:he=he.replace(j,a);case 100:case 109:case 45:fe=he+"{"+fe+"}";break;case 107:he=he.replace(y,"$1 $2"),fe=he+"{"+fe+"}",fe=J===1||J===2&&i("@"+fe,3)?"@-webkit-"+fe+"@"+fe:"@"+fe;break;default:fe=he+fe,W===112&&(fe=(Oe+=fe,""))}else fe="";break;default:fe=t(G,r(G,he,me),fe,W,R+1)}ke+=fe,fe=me=pe=Se=ee=0,he="",ie=Z.charCodeAt(++le);break;case 125:case 59:if(he=(0<pe?he.replace(g,""):he).trim(),1<(ye=he.length))switch(Se===0&&(ee=he.charCodeAt(0),ee===45||96<ee&&123>ee)&&(ye=(he=he.replace(" ",":")).length),0<_&&(Ge=s(1,he,G,H,K,q,Oe.length,W,R,W))!==void 0&&(ye=(he=Ge.trim()).length)===0&&(he="\0\0"),ee=he.charCodeAt(0),ie=he.charCodeAt(1),ee){case 0:break;case 64:if(ie===105||ie===99){Ze+=he+Z.charAt(le);break}default:he.charCodeAt(ye-1)!==58&&(Oe+=o(he,ee,ie,he.charCodeAt(2)))}me=pe=Se=ee=0,he="",ie=Z.charCodeAt(++le)}}switch(ie){case 13:case 10:b===47?b=0:1+ee===0&&W!==107&&0<he.length&&(pe=1,he+="\0"),0<_*V&&s(0,he,G,H,K,q,Oe.length,W,R,W),q=1,K++;break;case 59:case 125:if(b+M+F+O===0){q++;break}default:switch(q++,je=Z.charAt(le),ie){case 9:case 32:if(M+O+b===0)switch(de){case 44:case 58:case 9:case 32:je="";break;default:ie!==32&&(je=" ")}break;case 0:je="\\0";break;case 12:je="\\f";break;case 11:je="\\v";break;case 38:M+b+O===0&&(pe=me=1,je="\f"+je);break;case 108:if(M+b+O+B===0&&0<Se)switch(le-Se){case 2:de===112&&Z.charCodeAt(le-3)===58&&(B=de);case 8:ce===111&&(B=ce)}break;case 58:M+b+O===0&&(Se=le);break;case 44:b+F+M+O===0&&(pe=1,je+="\r");break;case 34:case 39:b===0&&(M=M===ie?0:M===0?ie:M);break;case 91:M+b+F===0&&O++;break;case 93:M+b+F===0&&O--;break;case 41:M+b+O===0&&F--;break;case 40:if(M+b+O===0){if(ee===0)switch(2*de+3*ce){case 533:break;default:ee=1}F++}break;case 64:b+F+M+O+Se+fe===0&&(fe=1);break;case 42:case 47:if(!(0<M+O+F))switch(b){case 0:switch(2*ie+3*Z.charCodeAt(le+1)){case 235:b=47;break;case 220:ye=le,b=42}break;case 42:ie===47&&de===42&&ye+2!==le&&(Z.charCodeAt(ye+2)===33&&(Oe+=Z.substring(ye,le+1)),je="",b=0)}}b===0&&(he+=je)}ce=de,de=ie,le++}if(ye=Oe.length,0<ye){if(pe=G,0<_&&(Ge=s(2,Oe,pe,H,K,q,ye,W,R,W),Ge!==void 0&&(Oe=Ge).length===0))return Ze+Oe+ke;if(Oe=pe.join(",")+"{"+Oe+"}",J*B!==0){switch(J!==2||i(Oe,2)||(B=0),B){case 111:Oe=Oe.replace(T,":-moz-$1")+Oe;break;case 112:Oe=Oe.replace(C,"::-webkit-input-$1")+Oe.replace(C,"::-moz-$1")+Oe.replace(C,":-ms-input-$1")+Oe}B=0}}return Ze+Oe+ke}function r(H,G,Z){var W=G.trim().split(x);G=W;var R=W.length,O=H.length;switch(O){case 0:case 1:var b=0;for(H=O===0?"":H[0]+" ";b<R;++b)G[b]=n(H,G[b],Z).trim();break;default:var F=b=0;for(G=[];b<R;++b)for(var M=0;M<O;++M)G[F++]=n(H[M]+" ",W[b],Z).trim()}return G}function n(H,G,Z){var W=G.charCodeAt(0);switch(33>W&&(W=(G=G.trim()).charCodeAt(0)),W){case 38:return G.replace(v,"$1"+H.trim());case 58:return H.trim()+G.replace(v,"$1"+H.trim());default:if(0<1*Z&&0<G.indexOf("\f"))return G.replace(v,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+G}function o(H,G,Z,W){var R=H+";",O=2*G+3*Z+4*W;if(O===944){H=R.indexOf(":",9)+1;var b=R.substring(H,R.length-1).trim();return b=R.substring(0,H).trim()+b+";",J===1||J===2&&i(b,1)?"-webkit-"+b+b:b}if(J===0||J===2&&!i(R,1))return R;switch(O){case 1015:return R.charCodeAt(10)===97?"-webkit-"+R+R:R;case 951:return R.charCodeAt(3)===116?"-webkit-"+R+R:R;case 963:return R.charCodeAt(5)===110?"-webkit-"+R+R:R;case 1009:if(R.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+R+R;case 978:return"-webkit-"+R+"-moz-"+R+R;case 1019:case 983:return"-webkit-"+R+"-moz-"+R+"-ms-"+R+R;case 883:if(R.charCodeAt(8)===45)return"-webkit-"+R+R;if(0<R.indexOf("image-set(",11))return R.replace(L,"$1-webkit-$2")+R;break;case 932:if(R.charCodeAt(4)===45)switch(R.charCodeAt(5)){case 103:return"-webkit-box-"+R.replace("-grow","")+"-webkit-"+R+"-ms-"+R.replace("grow","positive")+R;case 115:return"-webkit-"+R+"-ms-"+R.replace("shrink","negative")+R;case 98:return"-webkit-"+R+"-ms-"+R.replace("basis","preferred-size")+R}return"-webkit-"+R+"-ms-"+R+R;case 964:return"-webkit-"+R+"-ms-flex-"+R+R;case 1023:if(R.charCodeAt(8)!==99)break;return b=R.substring(R.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+b+"-webkit-"+R+"-ms-flex-pack"+b+R;case 1005:return m.test(R)?R.replace(p,":-webkit-")+R.replace(p,":-moz-")+R:R;case 1e3:switch(b=R.substring(13).trim(),G=b.indexOf("-")+1,b.charCodeAt(0)+b.charCodeAt(G)){case 226:b=R.replace(N,"tb");break;case 232:b=R.replace(N,"tb-rl");break;case 220:b=R.replace(N,"lr");break;default:return R}return"-webkit-"+R+"-ms-"+b+R;case 1017:if(R.indexOf("sticky",9)===-1)break;case 975:switch(G=(R=H).length-10,b=(R.charCodeAt(G)===33?R.substring(0,G):R).substring(H.indexOf(":",7)+1).trim(),O=b.charCodeAt(0)+(b.charCodeAt(7)|0)){case 203:if(111>b.charCodeAt(8))break;case 115:R=R.replace(b,"-webkit-"+b)+";"+R;break;case 207:case 102:R=R.replace(b,"-webkit-"+(102<O?"inline-":"")+"box")+";"+R.replace(b,"-webkit-"+b)+";"+R.replace(b,"-ms-"+b+"box")+";"+R}return R+";";case 938:if(R.charCodeAt(5)===45)switch(R.charCodeAt(6)){case 105:return b=R.replace("-items",""),"-webkit-"+R+"-webkit-box-"+b+"-ms-flex-"+b+R;case 115:return"-webkit-"+R+"-ms-flex-item-"+R.replace($,"")+R;default:return"-webkit-"+R+"-ms-flex-line-pack"+R.replace("align-content","").replace($,"")+R}break;case 973:case 989:if(R.charCodeAt(3)!==45||R.charCodeAt(4)===122)break;case 931:case 953:if(U.test(H)===!0)return(b=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?o(H.replace("stretch","fill-available"),G,Z,W).replace(":fill-available",":stretch"):R.replace(b,"-webkit-"+b)+R.replace(b,"-moz-"+b.replace("fill-",""))+R;break;case 962:if(R="-webkit-"+R+(R.charCodeAt(5)===102?"-ms-"+R:"")+R,Z+W===211&&R.charCodeAt(13)===105&&0<R.indexOf("transform",10))return R.substring(0,R.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+R}return R}function i(H,G){var Z=H.indexOf(G===1?":":"{"),W=H.substring(0,G!==3?Z:10);return Z=H.substring(Z+1,H.length-1),z(G!==2?W:W.replace(w,"$1"),Z,G)}function a(H,G){var Z=o(G,G.charCodeAt(0),G.charCodeAt(1),G.charCodeAt(2));return Z!==G+";"?Z.replace(I," or ($1)").substring(4):"("+G+")"}function s(H,G,Z,W,R,O,b,F,M,ee){for(var ie=0,de=G,ce;ie<_;++ie)switch(ce=k[ie].call(d,H,de,Z,W,R,O,b,F,M,ee)){case void 0:case!1:case!0:case null:break;default:de=ce}if(de!==G)return de}function c(H){switch(H){case void 0:case null:_=k.length=0;break;default:if(typeof H=="function")k[_++]=H;else if(typeof H=="object")for(var G=0,Z=H.length;G<Z;++G)c(H[G]);else V=!!H|0}return c}function u(H){return H=H.prefix,H!==void 0&&(z=null,H?typeof H!="function"?J=1:(J=2,z=H):J=0),u}function d(H,G){var Z=H;if(33>Z.charCodeAt(0)&&(Z=Z.trim()),Q=Z,Z=[Q],0<_){var W=s(-1,G,Z,Z,K,q,0,0,0,0);W!==void 0&&typeof W=="string"&&(G=W)}var R=t(Y,Z,G,0,0);return 0<_&&(W=s(-2,R,Z,Z,K,q,R.length,0,0,0),W!==void 0&&(R=W)),Q="",B=0,q=K=1,R}var f=/^\0+/g,g=/[\0\r\f]/g,p=/: */g,m=/zoo|gra/,h=/([,: ])(transform)/g,x=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,C=/::(place)/g,T=/:(read-only)/g,N=/[svh]\w+-[tblr]{2}/,j=/\(\s*(.*)\s*\)/g,I=/([\s\S]*?);/g,$=/-self|flex-/g,w=/[^]*?(:[rp][el]a[\w-]+)[^]*/,U=/stretch|:\s*\w+\-(?:conte|avail)/,L=/([^-])(image-set\()/,q=1,K=1,B=0,J=1,Y=[],k=[],_=0,z=null,V=0,Q="";return d.use=c,d.set=u,e!==void 0&&u(e),d}var w6={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function j6(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var T6=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,b0=j6(function(e){return T6.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Zp=Qp,O6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},I6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},P6={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},VC={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Yp={};Yp[Zp.ForwardRef]=P6;Yp[Zp.Memo]=VC;function S0(e){return Zp.isMemo(e)?VC:Yp[e.$$typeof]||O6}var E6=Object.defineProperty,$6=Object.getOwnPropertyNames,C0=Object.getOwnPropertySymbols,N6=Object.getOwnPropertyDescriptor,k6=Object.getPrototypeOf,w0=Object.prototype;function WC(e,t,r){if(typeof t!="string"){if(w0){var n=k6(t);n&&n!==w0&&WC(e,n,r)}var o=$6(t);C0&&(o=o.concat(C0(t)));for(var i=S0(e),a=S0(t),s=0;s<o.length;++s){var c=o[s];if(!I6[c]&&!(r&&r[c])&&!(a&&a[c])&&!(i&&i[c])){var u=N6(t,c);try{E6(e,c,u)}catch{}}}}return e}var M6=WC;const Nc=ht(M6);var Or={};function Gr(){return(Gr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var j0=function(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r},xg=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Qp.typeOf(e)},kc=Object.freeze([]),oo=Object.freeze({});function _i(e){return typeof e=="function"}function T0(e){return e.displayName||e.name||"Component"}function Xp(e){return e&&typeof e.styledComponentId=="string"}var Bi=typeof process<"u"&&Or!==void 0&&(Or.REACT_APP_SC_ATTR||Or.SC_ATTR)||"data-styled",em=typeof window<"u"&&"HTMLElement"in window,A6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Or!==void 0&&(Or.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Or.REACT_APP_SC_DISABLE_SPEEDY!==""?Or.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Or.REACT_APP_SC_DISABLE_SPEEDY:Or.SC_DISABLE_SPEEDY!==void 0&&Or.SC_DISABLE_SPEEDY!==""&&Or.SC_DISABLE_SPEEDY!=="false"&&Or.SC_DISABLE_SPEEDY)),D6={};function Wo(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var R6=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}var t=e.prototype;return t.indexOfGroup=function(r){for(var n=0,o=0;o<r;o++)n+=this.groupSizes[o];return n},t.insertRules=function(r,n){if(r>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;r>=a;)(a<<=1)<0&&Wo(16,""+r);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(r+1),u=0,d=n.length;u<d;u++)this.tag.insertRule(c,n[u])&&(this.groupSizes[r]++,c++)},t.clearGroup=function(r){if(r<this.length){var n=this.groupSizes[r],o=this.indexOfGroup(r),i=o+n;this.groupSizes[r]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(r){var n="";if(r>=this.length||this.groupSizes[r]===0)return n;for(var o=this.groupSizes[r],i=this.indexOfGroup(r),a=i+o,s=i;s<a;s++)n+=this.tag.getRule(s)+`/*!sc*/
`;return n},e}(),ec=new Map,Mc=new Map,Ja=1,Sl=function(e){if(ec.has(e))return ec.get(e);for(;Mc.has(Ja);)Ja++;var t=Ja++;return ec.set(e,t),Mc.set(t,e),t},L6=function(e){return Mc.get(e)},F6=function(e,t){t>=Ja&&(Ja=t+1),ec.set(e,t),Mc.set(t,e)},_6="style["+Bi+'][data-styled-version="5.3.11"]',B6=new RegExp("^"+Bi+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),z6=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},H6=function(e,t){for(var r=(t.textContent||"").split(`/*!sc*/
`),n=[],o=0,i=r.length;o<i;o++){var a=r[o].trim();if(a){var s=a.match(B6);if(s){var c=0|parseInt(s[1],10),u=s[2];c!==0&&(F6(u,c),z6(e,u,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(a)}}},U6=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},qC=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(s){for(var c=s.childNodes,u=c.length;u>=0;u--){var d=c[u];if(d&&d.nodeType===1&&d.hasAttribute(Bi))return d}}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Bi,"active"),n.setAttribute("data-styled-version","5.3.11");var a=U6();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},V6=function(){function e(r){var n=this.element=qC(r);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,s=i.length;a<s;a++){var c=i[a];if(c.ownerNode===o)return c}Wo(17)}(n),this.length=0}var t=e.prototype;return t.insertRule=function(r,n){try{return this.sheet.insertRule(n,r),this.length++,!0}catch{return!1}},t.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.getRule=function(r){var n=this.sheet.cssRules[r];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),W6=function(){function e(r){var n=this.element=qC(r);this.nodes=n.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(r,n){if(r<=this.length&&r>=0){var o=document.createTextNode(n),i=this.nodes[r];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),q6=function(){function e(r){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(r,n){return r<=this.length&&(this.rules.splice(r,0,n),this.length++,!0)},t.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),O0=em,G6={isServer:!em,useCSSOMInjection:!A6},Ac=function(){function e(r,n,o){r===void 0&&(r=oo),n===void 0&&(n={}),this.options=Gr({},G6,{},r),this.gs=n,this.names=new Map(o),this.server=!!r.isServer,!this.server&&em&&O0&&(O0=!1,function(i){for(var a=document.querySelectorAll(_6),s=0,c=a.length;s<c;s++){var u=a[s];u&&u.getAttribute(Bi)!=="active"&&(H6(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(r){return Sl(r)};var t=e.prototype;return t.reconstructWithOptions=function(r,n){return n===void 0&&(n=!0),new e(Gr({},this.options,{},r),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,i=n.useCSSOMInjection,a=n.target,r=o?new q6(a):i?new V6(a):new W6(a),new R6(r)));var r,n,o,i,a},t.hasNameForId=function(r,n){return this.names.has(r)&&this.names.get(r).has(n)},t.registerName=function(r,n){if(Sl(r),this.names.has(r))this.names.get(r).add(n);else{var o=new Set;o.add(n),this.names.set(r,o)}},t.insertRules=function(r,n,o){this.registerName(r,n),this.getTag().insertRules(Sl(r),o)},t.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.clearRules=function(r){this.getTag().clearGroup(Sl(r)),this.clearNames(r)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(r){for(var n=r.getTag(),o=n.length,i="",a=0;a<o;a++){var s=L6(a);if(s!==void 0){var c=r.names.get(s),u=n.getGroup(a);if(c&&u&&c.size){var d=Bi+".g"+a+'[id="'+s+'"]',f="";c!==void 0&&c.forEach(function(g){g.length>0&&(f+=g+",")}),i+=""+u+d+'{content:"'+f+`"}/*!sc*/
`}}}return i}(this)},e}(),K6=/(a)(d)/gi,I0=function(e){return String.fromCharCode(e+(e>25?39:97))};function yg(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=I0(t%52)+r;return(I0(t%52)+r).replace(K6,"$1-$2")}var Si=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},GC=function(e){return Si(5381,e)};function KC(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(_i(r)&&!Xp(r))return!1}return!0}var J6=GC("5.3.11"),Q6=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&KC(t),this.componentId=r,this.baseHash=Si(J6,r),this.baseStyle=n,Ac.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,r,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=qo(this.rules,t,r,n).join(""),s=yg(Si(this.baseHash,a)>>>0);if(!r.hasNameForId(o,s)){var c=n(a,"."+s,void 0,o);r.insertRules(o,s,c)}i.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,d=Si(this.baseHash,n.hash),f="",g=0;g<u;g++){var p=this.rules[g];if(typeof p=="string")f+=p;else if(p){var m=qo(p,t,r,n),h=Array.isArray(m)?m.join(""):m;d=Si(d,h+g),f+=h}}if(f){var x=yg(d>>>0);if(!r.hasNameForId(o,x)){var v=n(f,"."+x,void 0,o);r.insertRules(o,x,v)}i.push(x)}}return i.join(" ")},e}(),Z6=/^\s*\/\/.*$/gm,Y6=[":","[",".","#"];function X6(e){var t,r,n,o,i=oo,a=i.options,s=a===void 0?oo:a,c=i.plugins,u=c===void 0?kc:c,d=new C6(s),f=[],g=function(h){function x(v){if(v)try{h(v+"}")}catch{}}return function(v,y,C,T,N,j,I,$,w,U){switch(v){case 1:if(w===0&&y.charCodeAt(0)===64)return h(y+";"),"";break;case 2:if($===0)return y+"/*|*/";break;case 3:switch($){case 102:case 112:return h(C[0]+y),"";default:return y+(U===0?"/*|*/":"")}case-2:y.split("/*|*/}").forEach(x)}}}(function(h){f.push(h)}),p=function(h,x,v){return x===0&&Y6.indexOf(v[r.length])!==-1||v.match(o)?h:"."+t};function m(h,x,v,y){y===void 0&&(y="&");var C=h.replace(Z6,""),T=x&&v?v+" "+x+" { "+C+" }":C;return t=y,r=x,n=new RegExp("\\"+r+"\\b","g"),o=new RegExp("(\\"+r+"\\b){2,}"),d(v||!x?"":x,T)}return d.use([].concat(u,[function(h,x,v){h===2&&v.length&&v[0].lastIndexOf(r)>0&&(v[0]=v[0].replace(n,p))},g,function(h){if(h===-2){var x=f;return f=[],x}}])),m.hash=u.length?u.reduce(function(h,x){return x.name||Wo(15),Si(h,x.name)},5381).toString():"",m}var JC=ae.createContext();JC.Consumer;var QC=ae.createContext(),eT=(QC.Consumer,new Ac),bg=X6();function ZC(){return P.useContext(JC)||eT}function YC(){return P.useContext(QC)||bg}var XC=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=bg);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.toString=function(){return Wo(12,String(n.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=r}return e.prototype.getName=function(t){return t===void 0&&(t=bg),this.name+t.hash},e}(),tT=/([A-Z])/,rT=/([A-Z])/g,nT=/^ms-/,oT=function(e){return"-"+e.toLowerCase()};function P0(e){return tT.test(e)?e.replace(rT,oT).replace(nT,"-ms-"):e}var E0=function(e){return e==null||e===!1||e===""};function qo(e,t,r,n){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)(o=qo(e[a],t,r,n))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(E0(e))return"";if(Xp(e))return"."+e.styledComponentId;if(_i(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var c=e(t);return qo(c,t,r,n)}var u;return e instanceof XC?r?(e.inject(r,n),e.getName(n)):e:xg(e)?function d(f,g){var p,m,h=[];for(var x in f)f.hasOwnProperty(x)&&!E0(f[x])&&(Array.isArray(f[x])&&f[x].isCss||_i(f[x])?h.push(P0(x)+":",f[x],";"):xg(f[x])?h.push.apply(h,d(f[x],x)):h.push(P0(x)+": "+(p=x,(m=f[x])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||p in w6||p.startsWith("--")?String(m).trim():m+"px")+";"));return g?[g+" {"].concat(h,["}"]):h}(e):e.toString()}var $0=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function tm(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return _i(e)||xg(e)?$0(qo(j0(kc,[e].concat(r)))):r.length===0&&e.length===1&&typeof e[0]=="string"?e:$0(qo(j0(e,r)))}var ew=function(e,t,r){return r===void 0&&(r=oo),e.theme!==r.theme&&e.theme||t||r.theme},iT=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,aT=/(^-|-$)/g;function Gd(e){return e.replace(iT,"-").replace(aT,"")}var rm=function(e){return yg(GC(e)>>>0)};function Cl(e){return typeof e=="string"&&!0}var Sg=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},sT=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function lT(e,t,r){var n=e[r];Sg(t)&&Sg(n)?tw(n,t):e[r]=t}function tw(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var o=0,i=r;o<i.length;o++){var a=i[o];if(Sg(a))for(var s in a)sT(s)&&lT(e,a[s],s)}return e}var Cs=ae.createContext();Cs.Consumer;function cT(e){var t=P.useContext(Cs),r=P.useMemo(function(){return function(n,o){if(!n)return Wo(14);if(_i(n)){var i=n(o);return i}return Array.isArray(n)||typeof n!="object"?Wo(8):o?Gr({},o,{},n):n}(e.theme,t)},[e.theme,t]);return e.children?ae.createElement(Cs.Provider,{value:r},e.children):null}var Kd={};function rw(e,t,r){var n=Xp(e),o=!Cl(e),i=t.attrs,a=i===void 0?kc:i,s=t.componentId,c=s===void 0?function(y,C){var T=typeof y!="string"?"sc":Gd(y);Kd[T]=(Kd[T]||0)+1;var N=T+"-"+rm("5.3.11"+T+Kd[T]);return C?C+"-"+N:N}(t.displayName,t.parentComponentId):s,u=t.displayName,d=u===void 0?function(y){return Cl(y)?"styled."+y:"Styled("+T0(y)+")"}(e):u,f=t.displayName&&t.componentId?Gd(t.displayName)+"-"+t.componentId:t.componentId||c,g=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,p=t.shouldForwardProp;n&&e.shouldForwardProp&&(p=t.shouldForwardProp?function(y,C,T){return e.shouldForwardProp(y,C,T)&&t.shouldForwardProp(y,C,T)}:e.shouldForwardProp);var m,h=new Q6(r,f,n?e.componentStyle:void 0),x=h.isStatic&&a.length===0,v=function(y,C){return function(T,N,j,I){var $=T.attrs,w=T.componentStyle,U=T.defaultProps,L=T.foldedComponentIds,q=T.shouldForwardProp,K=T.styledComponentId,B=T.target,J=function(W,R,O){W===void 0&&(W=oo);var b=Gr({},R,{theme:W}),F={};return O.forEach(function(M){var ee,ie,de,ce=M;for(ee in _i(ce)&&(ce=ce(b)),ce)b[ee]=F[ee]=ee==="className"?(ie=F[ee],de=ce[ee],ie&&de?ie+" "+de:ie||de):ce[ee]}),[b,F]}(ew(N,P.useContext(Cs),U)||oo,N,$),Y=J[0],k=J[1],_=function(W,R,O,b){var F=ZC(),M=YC(),ee=R?W.generateAndInjectStyles(oo,F,M):W.generateAndInjectStyles(O,F,M);return ee}(w,I,Y),z=j,V=k.$as||N.$as||k.as||N.as||B,Q=Cl(V),H=k!==N?Gr({},N,{},k):N,G={};for(var Z in H)Z[0]!=="$"&&Z!=="as"&&(Z==="forwardedAs"?G.as=H[Z]:(q?q(Z,b0,V):!Q||b0(Z))&&(G[Z]=H[Z]));return N.style&&k.style!==N.style&&(G.style=Gr({},N.style,{},k.style)),G.className=Array.prototype.concat(L,K,_!==K?_:null,N.className,k.className).filter(Boolean).join(" "),G.ref=z,P.createElement(V,G)}(m,y,C,x)};return v.displayName=d,(m=ae.forwardRef(v)).attrs=g,m.componentStyle=h,m.displayName=d,m.shouldForwardProp=p,m.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):kc,m.styledComponentId=f,m.target=n?e.target:e,m.withComponent=function(y){var C=t.componentId,T=function(j,I){if(j==null)return{};var $,w,U={},L=Object.keys(j);for(w=0;w<L.length;w++)$=L[w],I.indexOf($)>=0||(U[$]=j[$]);return U}(t,["componentId"]),N=C&&C+"-"+(Cl(y)?y:Gd(T0(y)));return rw(y,Gr({},T,{attrs:g,componentId:N}),r)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(y){this._foldedDefaultProps=n?tw({},e.defaultProps,y):y}}),Object.defineProperty(m,"toString",{value:function(){return"."+m.styledComponentId}}),o&&Nc(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var S=function(e){return function t(r,n,o){if(o===void 0&&(o=oo),!Qp.isValidElementType(n))return Wo(1,String(n));var i=function(){return r(n,o,tm.apply(void 0,arguments))};return i.withConfig=function(a){return t(r,n,Gr({},o,{},a))},i.attrs=function(a){return t(r,n,Gr({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(rw,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){S[e]=S(e)});var uT=function(){function e(r,n){this.rules=r,this.componentId=n,this.isStatic=KC(r),Ac.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(r,n,o,i){var a=i(qo(this.rules,n,o,i).join(""),""),s=this.componentId+r;o.insertRules(s,s,a)},t.removeStyles=function(r,n){n.clearRules(this.componentId+r)},t.renderStyles=function(r,n,o,i){r>2&&Ac.registerId(this.componentId+r),this.removeStyles(r,o),this.createStyles(r,n,o,i)},e}();function dT(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=tm.apply(void 0,[e].concat(r)),i="sc-global-"+rm(JSON.stringify(o)),a=new uT(o,i);function s(u){var d=ZC(),f=YC(),g=P.useContext(Cs),p=P.useRef(d.allocateGSInstance(i)).current;return d.server&&c(p,u,d,g,f),P.useLayoutEffect(function(){if(!d.server)return c(p,u,d,g,f),function(){return a.removeStyles(p,d)}},[p,u,d,g,f]),null}function c(u,d,f,g,p){if(a.isStatic)a.renderStyles(u,D6,f,p);else{var m=Gr({},d,{theme:ew(d,g,s.defaultProps)});a.renderStyles(u,m,f,p)}}return ae.memo(s)}function nw(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=tm.apply(void 0,[e].concat(r)).join(""),i=rm(o);return new XC(i,o)}const fT=dT`
* {
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
    }
:root                  { box-sizing: border-box; }
*, *::before, *::after { box-sizing: inherit; }

:root, body {
  margin: 0;
  padding: 0;
  border: initial;
}

.modal-open {
    overflow: hidden;
    /* Optional: prevents "jitter" if the scrollbar disappears */
    padding-right: var(--scrollbar-width, 0px); 
  }

    /*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  overflow: -moz-scrollbars-vertical; 
  overflow-y: scroll;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
}



/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0; 
   height:calc(100vh-50px); 
  /* overscroll-behavior: none; */
   /* overflow: hidden;
   width: 100vw;
  height: 100vh; */
}

/**
 * Render the main element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on 'h1' elements within 'section' and
 * 'article' contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
  display: inline !important;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd 'em' font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent 'sub' and 'sup' elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from 'fieldset' elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    'fieldset' elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to 'inherit' in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}


/***********************************
  FOOTER CSS
 *******************************************************************************/
footer { 
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  background: #ececec; 
}

/***********************************
  PRESORT CSS
 *******************************************************************************/

  /* to speed up react beautiful dnd */
[data-rbd-draggable-id] { will-change: transform, opacity }
/*
[data-rbd-draggable-id] { left: auto !important; top: auto !important; }
*/
  .dragObject {
    -webkit-user-select: none;
    user-select: none;
    display: flex;
  }


  .Overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }
/* Overlay fade */
.OverlayFade {
  opacity: 0;
  transition: opacity 0.3s ease;
  background: rgba(0,0,0,0.5);
}

.OverlayFade.ReactModal__Overlay--after-open {
  opacity: 1;
}

.OverlayFade.ReactModal__Overlay--before-close {
  opacity: 0;
}

/* Modal content fade */
.ModalContentFade {
  opacity: 0;
  transform: scale(0.98);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.ModalContentFade.ReactModal__Content--after-open {
  opacity: 1;
  transform: scale(1);
}

.ModalContentFade.ReactModal__Content--before-close {
  opacity: 0;
  transform: scale(0.98);
}

.react-responsive-modal-modal {
  background: white;
  max-width: 700px;
  width: 95vw;
  height: auto;
  max-height: 80vh;
  padding: 15px;
  border-radius: 10px;
  padding-bottom: 20px;
  overflow-y: auto;
  /* overscroll-behavior: contain; */
  -webkit-overflow-scrolling:touch;
}

.modal-open {
    overflow: hidden;
    /* Optional: prevents "jitter" if the scrollbar disappears */
    padding-right: var(--scrollbar-width, 0px); 
  }

@media (max-width: 768px) {
  .react-responsive-modal-container {
    position: fixed;
    max-width: 100dvw;
    height: 100dvh;
    top: 0px;
    left: 0px;
    bottom: 0px;
    overflow: scroll;
    height: -webkit-fill-available;
    -webkit-overflow-scrolling: touch;
}
}

@media (max-width: 768px) {
  .react-responsive-modal-modal {
    width: 95vw;
    padding: 8px;
    min-height: 70vh;
    padding-bottom: 20px;
    /* overflow-y: auto;   */
    /* -webkit-overflow-scrolling:touch; */
    /* Add or override other styles for mobile here */
  }

}

  #cardsDiv{
    grid-column-start: 3;
    overflow: hidden;
    align-self: end;
    height: 275x;
  }
  
  #cards{
    max-height: 200px;
    min-height:140px;
    overflow: hidden;
  }
  
  #completionRatio {
    grid-row-start: 1;
    grid-column-start: 4;
    text-align: center;
    font-weight: bold;
  }

  #negDiv{
    grid-row-start: 3;
    grid-column-start: 2;
    overflow-y: auto;
    background-color: #fee2e2;
    min-height: 300px;
    height: 56vh;
    padding-top: 0px;
    border-top-left-radius: 3px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border: 1px solid lightgray;

    ::-webkit-scrollbar {
      // Width of vertical scroll bar
      width: 10px;
      // Height of horizontal scroll bar
      height: 10px;

    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: gray;
    }
  }
  

  #neutralDiv{
    grid-row-start: 3;
    grid-column-start: 3;
    overflow-y: auto;
    background-color: #fef3c7;
    min-height: 300px;
    height: 56vh;
    padding-top: 0px;
    border: 1px solid lightgray;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;

    ::-webkit-scrollbar {
      // Width of vertical scroll bar
      width: 10px;
      // Height of horizontal scroll bar
      height: 10px;

    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: gray;
    }

  }

  #posDiv{
    grid-row-start: 3;
    grid-column-start: 4;
    overflow-y: auto;
    background-color: #dcfce7;
    height: 56vh;
    padding-top: 0px;
    border-top-right-radius: 8px;
    border-top-left-radius: 8px;
    border-bottom-right-radius: 3px;
    border: 1px solid lightgray;

    ::-webkit-scrollbar {
      // Width of vertical scroll bar
      width: 10px;
      // Height of horizontal scroll bar
      height: 10px;

    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: gray;
    }
  }

  #pos{
    min-height: 52vh;
    border-radius: 3px;
  }

  #neutral{
    min-height: 52vh;
    border-radius: 3px;
  }

  #neg{
    min-height: 52vh;
    border-radius: 3px;
  }
}



/***********************************
  PRESORT CSS  ** IMAGES ** 
 *******************************************************************************/
  #presortFinishedModal  {
  max-width: 380px !important;
  margin-right: 10px !important;
}


#imageGrid .cardsDivImg{
    grid-column-start: 3;
    overflow: hidden;
    padding-top: 10px;
  }



 #imageGrid .cardsDivImg  img {
    width: 100%;
  }

  
  #imageGrid #cards{
    min-height:34vh;
   overflow: hidden;
  }
  

  #imageGrid #completionRatioImg {
    grid-row-start: 1;
    grid-column-start: 4;
    text-align: center;
    font-weight: bold;
  }

  #imageEnlargeInstructionsDiv {
    grid-row-start: 1;
    grid-column-start: 2;
    text-align: center;
  }

  #imageGrid .negDivImg{
    grid-row-start: 3;
    grid-column-start: 2;
    overflow-y: auto;
    background-color: white;
    min-height: 300px;
    height: 50vh;
    padding-top: 5px;
    border-top-left-radius: 3px;
    overflow-x: hidden;
    border-bottom-left-radius: 3px;
    border: 1px solid #aeaeae;

    ::-webkit-scrollbar {
      // Width of vertical scroll bar
      width: 3px;
      // Height of horizontal scroll bar
      height: 10px;

    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: gray;
    }
  }
  

  #imageGrid .neutralDivImg{
    grid-row-start: 3;
    grid-column-start: 3;
    overflow-y: auto;
    background-color: white;
    min-height: 300px;
    height: 50vh;
    padding-top: 5px;
    overflow-x: hidden;
    border: 1px solid #aeaeae;

    ::-webkit-scrollbar {
      // Width of vertical scroll bar
      width: 3px;
      // Height of horizontal scroll bar
      height: 10px;

    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: gray;
    }

  }

  #imageGrid .posDivImg{
    grid-row-start: 3;
    grid-column-start: 4;
    overflow-y: auto;
    background-color: white;
    height: 50vh;
    padding-top: 5px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 1px solid #aeaeae;
    overflow-x: hidden;

    ::-webkit-scrollbar {
      // Width of vertical scroll bar
      width: 3px;
      // Height of horizontal scroll bar
      height: 10px;

    }
    ::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background: gray;
    }
  }

  .pos{
    min-height: 25vh;
    border-radius: 3px;
  }

  .neutral{
    min-height: 38vh;
    border-radius: 3px;
  }

  .neg{
    min-height: 38vh;
    border-radius: 3px;
  }

  #imageGrid .cards{
    border-radius: 3px;
    
  }
  
  #imageGrid .cards > :not(:first-child) {
    opacity: 0;
    }
  

/***********************************
  THINNING REFINE - CSS
 *******************************************************************************/
.custom-move-all-modal-height {
      height: 300px; /* Or any desired height, e.g., 80vh for viewport height */
      min-height: 20vh;
    }


/***********************************
  SORT CSS
 *******************************************************************************/
.sortContainer {
  display: flex;
  flex-direction: column;
  margin: 5px;
  background: rgba(0, 0, 0, 0.1);
  min-height: 400px;
  max-height: 800px;
  overflow: auto;
}

.rootDiv {
  background-color: whitesmoke;
  /* background-color: #6a9bc3; */
  padding: 0px, 0px, 10px, 10px;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  -webkit-user-select: none;
  -webkit-touch-callout: none;
}

.headersContainer {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: flex-start;
  height: 50px;
  flex-direction: "row-reverse";
}

.greenSortCard {
  display: flex;
  justify-content: center;
  background: lightgreen;
  border: 2px solid gray;
}

.pinkSortCard {
  display: flex;
  justify-content: center;
  background-color: rgba(255, 182, 193, 0.4);
  border: 2px solid gray;
}

.yellowSortCard {
  display: flex;
  justify-content: center;
  background-color: lightgray;
  border: 2px solid gray;
}

/* 
.isPositiveStatement {
  background-color: rgba(199, 246, 199, 0.6);
} */

.sortFooter {
  display: flex;
  flex-direction: row;
  background: #e4e4e4;
  position: fixed;
  left: 0px;
  bottom: 50px !important;
  width: 100%;
  height: 150px;
}

.footerMessageBox {
  flex-basis: 100px;
  padding-right: 5px;
  padding-left: 5px;
  width: 100px;
  height: 100px;
  border: 2px solid lightgray;
  text-align: center;
}

.footerMessageBox p {
  padding: 0px;
  margin-top: 10px;
  font-size: 10px;
  color: #3273dc;
}

.sortEndButton {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 10px;
}

.cardSlider {
  width: 100vw;
  overflow: hidden;
  display: flex;
  align-items: right;
}

.placeholder {
  width: 100px;
  -webkit-animation: placeholderAnimate 3s ease-in;
}

/*

#DroppableContainer > img {
  width: 23.5vw !important;
  height: auto;
}

.imageModal {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);

  img {
  width: 100%;
  height: auto;
  }
}
*/

/***********************************
  POST SORT 
 *******************************************************************************/
.dropdown-heading-value {
  padding-top: 5px;
  min-height: 30px;
}



/***********************************
  IMAGE MODAL CSS
 *******************************************************************************/


  .postSortImageModal169 {
    background: black;
    width: 70vw;
    max-width: none;
   }


  .postSortImageModal43 {
    background: black;
    width: 30vw;
    max-width: none;
   }


   .dualImageModal {
    background: black;
    width: 85vw;
    max-width: none;
   }

   .dualImageOverlay {
    background: black;
    opacity: 0.85;
  }

  /***********************************
  LANDING MODAL CSS
 *******************************************************************************/


  /*
  spinner css
  */

  #loading {
  display: inline-block;
  width: 100px;
  margin-top: 40px;
  height: 100px;
  border: 10px solid lightgray;
  border-radius: 50%;
  border-top-color: #337ab7;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}
@-webkit-keyframes spin {
  to { -webkit-transform: rotate(360deg); }
}


@keyframes opacity {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}


@-webkit-keyframes slide {
    100% { left: 0; }
}

@keyframes slide {
    100% { left: 0; }
}

@-webkit-keyframes placeholderAnimate {
  100% {
    width: 100%;
  }
  0% {
    width: 0px;
  }
}

`,nm=()=>{let e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},ow=()=>{let e=nm(),t;return e?t=l.jsx(mT,{children:"Loading"}):t=l.jsx(pT,{children:"Loading"}),l.jsxs(gT,{children:[t,l.jsx("div",{children:l.jsx("div",{id:"loading"})})]})},gT=S.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  align-items: center;
`,pT=S.div`
  font-size: 88px;
  font-style: italic;
  font-weight: bold;
  align-self: center;
  margin-right: 70px;
  margin-top: 40px;
`,mT=S.div`
  font-size: 44px;
  font-style: italic;
  font-weight: bold;
  align-self: center;
  margin-right: 30px;
  margin-top: 40px;
`;function Cg(e,t){return Cg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},Cg(e,t)}function Br(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Cg(e,t)}var iw={exports:{}},hT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",vT=hT,xT=vT;function aw(){}function sw(){}sw.resetWarningCache=aw;var yT=function(){function e(n,o,i,a,s,c){if(c!==xT){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:sw,resetWarningCache:aw};return r.PropTypes=r,r};iw.exports=yT();var om=iw.exports;const er=ht(om);function we(){return we=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},we.apply(null,arguments)}function wl(e){return e.charAt(0)==="/"}function Jd(e,t){for(var r=t,n=r+1,o=e.length;n<o;r+=1,n+=1)e[r]=e[n];e.pop()}function bT(e,t){t===void 0&&(t="");var r=e&&e.split("/")||[],n=t&&t.split("/")||[],o=e&&wl(e),i=t&&wl(t),a=o||i;if(e&&wl(e)?n=r:r.length&&(n.pop(),n=n.concat(r)),!n.length)return"/";var s;if(n.length){var c=n[n.length-1];s=c==="."||c===".."||c===""}else s=!1;for(var u=0,d=n.length;d>=0;d--){var f=n[d];f==="."?Jd(n,d):f===".."?(Jd(n,d),u++):u&&(Jd(n,d),u--)}if(!a)for(;u--;u)n.unshift("..");a&&n[0]!==""&&(!n[0]||!wl(n[0]))&&n.unshift("");var g=n.join("/");return s&&g.substr(-1)!=="/"&&(g+="/"),g}var ST="Invariant failed";function Tn(e,t){throw new Error(ST)}function Qa(e){return e.charAt(0)==="/"?e:"/"+e}function N0(e){return e.charAt(0)==="/"?e.substr(1):e}function CT(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function lw(e,t){return CT(e,t)?e.substr(t.length):e}function cw(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function wT(e){var t=e||"/",r="",n="",o=t.indexOf("#");o!==-1&&(n=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return i!==-1&&(r=t.substr(i),t=t.substr(0,i)),{pathname:t,search:r==="?"?"":r,hash:n==="#"?"":n}}function Xt(e){var t=e.pathname,r=e.search,n=e.hash,o=t||"/";return r&&r!=="?"&&(o+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(o+=n.charAt(0)==="#"?n:"#"+n),o}function pr(e,t,r,n){var o;typeof e=="string"?(o=wT(e),o.state=t):(o=we({},e),o.pathname===void 0&&(o.pathname=""),o.search?o.search.charAt(0)!=="?"&&(o.search="?"+o.search):o.search="",o.hash?o.hash.charAt(0)!=="#"&&(o.hash="#"+o.hash):o.hash="",t!==void 0&&o.state===void 0&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return r&&(o.key=r),n?o.pathname?o.pathname.charAt(0)!=="/"&&(o.pathname=bT(o.pathname,n.pathname)):o.pathname=n.pathname:o.pathname||(o.pathname="/"),o}function im(){var e=null;function t(a){return e=a,function(){e===a&&(e=null)}}function r(a,s,c,u){if(e!=null){var d=typeof e=="function"?e(a,s):e;typeof d=="string"?typeof c=="function"?c(d,u):u(!0):u(d!==!1)}else u(!0)}var n=[];function o(a){var s=!0;function c(){s&&a.apply(void 0,arguments)}return n.push(c),function(){s=!1,n=n.filter(function(u){return u!==c})}}function i(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];n.forEach(function(u){return u.apply(void 0,s)})}return{setPrompt:t,confirmTransitionTo:r,appendListener:o,notifyListeners:i}}var uw=!!(typeof window<"u"&&window.document&&window.document.createElement);function dw(e,t){t(window.confirm(e))}function jT(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function TT(){return window.navigator.userAgent.indexOf("Trident")===-1}function OT(){return window.navigator.userAgent.indexOf("Firefox")===-1}function IT(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var k0="popstate",M0="hashchange";function A0(){try{return window.history.state||{}}catch{return{}}}function PT(e){e===void 0&&(e={}),uw||Tn();var t=window.history,r=jT(),n=!TT(),o=e,i=o.forceRefresh,a=i===void 0?!1:i,s=o.getUserConfirmation,c=s===void 0?dw:s,u=o.keyLength,d=u===void 0?6:u,f=e.basename?cw(Qa(e.basename)):"";function g(z){var V=z||{},Q=V.key,H=V.state,G=window.location,Z=G.pathname,W=G.search,R=G.hash,O=Z+W+R;return f&&(O=lw(O,f)),pr(O,H,Q)}function p(){return Math.random().toString(36).substr(2,d)}var m=im();function h(z){we(_,z),_.length=t.length,m.notifyListeners(_.location,_.action)}function x(z){IT(z)||C(g(z.state))}function v(){C(g(A0()))}var y=!1;function C(z){if(y)y=!1,h();else{var V="POP";m.confirmTransitionTo(z,V,c,function(Q){Q?h({action:V,location:z}):T(z)})}}function T(z){var V=_.location,Q=j.indexOf(V.key);Q===-1&&(Q=0);var H=j.indexOf(z.key);H===-1&&(H=0);var G=Q-H;G&&(y=!0,U(G))}var N=g(A0()),j=[N.key];function I(z){return f+Xt(z)}function $(z,V){var Q="PUSH",H=pr(z,V,p(),_.location);m.confirmTransitionTo(H,Q,c,function(G){if(G){var Z=I(H),W=H.key,R=H.state;if(r)if(t.pushState({key:W,state:R},null,Z),a)window.location.href=Z;else{var O=j.indexOf(_.location.key),b=j.slice(0,O+1);b.push(H.key),j=b,h({action:Q,location:H})}else window.location.href=Z}})}function w(z,V){var Q="REPLACE",H=pr(z,V,p(),_.location);m.confirmTransitionTo(H,Q,c,function(G){if(G){var Z=I(H),W=H.key,R=H.state;if(r)if(t.replaceState({key:W,state:R},null,Z),a)window.location.replace(Z);else{var O=j.indexOf(_.location.key);O!==-1&&(j[O]=H.key),h({action:Q,location:H})}else window.location.replace(Z)}})}function U(z){t.go(z)}function L(){U(-1)}function q(){U(1)}var K=0;function B(z){K+=z,K===1&&z===1?(window.addEventListener(k0,x),n&&window.addEventListener(M0,v)):K===0&&(window.removeEventListener(k0,x),n&&window.removeEventListener(M0,v))}var J=!1;function Y(z){z===void 0&&(z=!1);var V=m.setPrompt(z);return J||(B(1),J=!0),function(){return J&&(J=!1,B(-1)),V()}}function k(z){var V=m.appendListener(z);return B(1),function(){B(-1),V()}}var _={length:t.length,action:"POP",location:N,createHref:I,push:$,replace:w,go:U,goBack:L,goForward:q,block:Y,listen:k};return _}var D0="hashchange",ET={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+N0(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:N0,decodePath:Qa},slash:{encodePath:Qa,decodePath:Qa}};function fw(e){var t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function ja(){var e=window.location.href,t=e.indexOf("#");return t===-1?"":e.substring(t+1)}function $T(e){window.location.hash=e}function Qd(e){window.location.replace(fw(window.location.href)+"#"+e)}function NT(e){e===void 0&&(e={}),uw||Tn();var t=window.history;OT();var r=e,n=r.getUserConfirmation,o=n===void 0?dw:n,i=r.hashType,a=i===void 0?"slash":i,s=e.basename?cw(Qa(e.basename)):"",c=ET[a],u=c.encodePath,d=c.decodePath;function f(){var V=d(ja());return s&&(V=lw(V,s)),pr(V)}var g=im();function p(V){we(z,V),z.length=t.length,g.notifyListeners(z.location,z.action)}var m=!1,h=null;function x(V,Q){return V.pathname===Q.pathname&&V.search===Q.search&&V.hash===Q.hash}function v(){var V=ja(),Q=u(V);if(V!==Q)Qd(Q);else{var H=f(),G=z.location;if(!m&&x(G,H)||h===Xt(H))return;h=null,y(H)}}function y(V){if(m)m=!1,p();else{var Q="POP";g.confirmTransitionTo(V,Q,o,function(H){H?p({action:Q,location:V}):C(V)})}}function C(V){var Q=z.location,H=I.lastIndexOf(Xt(Q));H===-1&&(H=0);var G=I.lastIndexOf(Xt(V));G===-1&&(G=0);var Z=H-G;Z&&(m=!0,L(Z))}var T=ja(),N=u(T);T!==N&&Qd(N);var j=f(),I=[Xt(j)];function $(V){var Q=document.querySelector("base"),H="";return Q&&Q.getAttribute("href")&&(H=fw(window.location.href)),H+"#"+u(s+Xt(V))}function w(V,Q){var H="PUSH",G=pr(V,void 0,void 0,z.location);g.confirmTransitionTo(G,H,o,function(Z){if(Z){var W=Xt(G),R=u(s+W),O=ja()!==R;if(O){h=W,$T(R);var b=I.lastIndexOf(Xt(z.location)),F=I.slice(0,b+1);F.push(W),I=F,p({action:H,location:G})}else p()}})}function U(V,Q){var H="REPLACE",G=pr(V,void 0,void 0,z.location);g.confirmTransitionTo(G,H,o,function(Z){if(Z){var W=Xt(G),R=u(s+W),O=ja()!==R;O&&(h=W,Qd(R));var b=I.indexOf(Xt(z.location));b!==-1&&(I[b]=W),p({action:H,location:G})}})}function L(V){t.go(V)}function q(){L(-1)}function K(){L(1)}var B=0;function J(V){B+=V,B===1&&V===1?window.addEventListener(D0,v):B===0&&window.removeEventListener(D0,v)}var Y=!1;function k(V){V===void 0&&(V=!1);var Q=g.setPrompt(V);return Y||(J(1),Y=!0),function(){return Y&&(Y=!1,J(-1)),Q()}}function _(V){var Q=g.appendListener(V);return J(1),function(){J(-1),Q()}}var z={length:t.length,action:"POP",location:j,createHref:$,push:w,replace:U,go:L,goBack:q,goForward:K,block:k,listen:_};return z}function R0(e,t,r){return Math.min(Math.max(e,t),r)}function kT(e){e===void 0&&(e={});var t=e,r=t.getUserConfirmation,n=t.initialEntries,o=n===void 0?["/"]:n,i=t.initialIndex,a=i===void 0?0:i,s=t.keyLength,c=s===void 0?6:s,u=im();function d($){we(I,$),I.length=I.entries.length,u.notifyListeners(I.location,I.action)}function f(){return Math.random().toString(36).substr(2,c)}var g=R0(a,0,o.length-1),p=o.map(function($){return typeof $=="string"?pr($,void 0,f()):pr($,void 0,$.key||f())}),m=Xt;function h($,w){var U="PUSH",L=pr($,w,f(),I.location);u.confirmTransitionTo(L,U,r,function(q){if(q){var K=I.index,B=K+1,J=I.entries.slice(0);J.length>B?J.splice(B,J.length-B,L):J.push(L),d({action:U,location:L,index:B,entries:J})}})}function x($,w){var U="REPLACE",L=pr($,w,f(),I.location);u.confirmTransitionTo(L,U,r,function(q){q&&(I.entries[I.index]=L,d({action:U,location:L}))})}function v($){var w=R0(I.index+$,0,I.entries.length-1),U="POP",L=I.entries[w];u.confirmTransitionTo(L,U,r,function(q){q?d({action:U,location:L,index:w}):d()})}function y(){v(-1)}function C(){v(1)}function T($){var w=I.index+$;return w>=0&&w<I.entries.length}function N($){return $===void 0&&($=!1),u.setPrompt($)}function j($){return u.appendListener($)}var I={length:p.length,action:"POP",location:p[g],index:g,entries:p,createHref:m,push:h,replace:x,go:v,goBack:y,goForward:C,canGo:T,block:N,listen:j};return I}var Ji={exports:{}},MT=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},Dc=MT;Ji.exports=mw;Ji.exports.parse=am;Ji.exports.compile=RT;Ji.exports.tokensToFunction=gw;Ji.exports.tokensToRegExp=pw;var AT=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function am(e,t){for(var r=[],n=0,o=0,i="",a=t&&t.delimiter||"/",s;(s=AT.exec(e))!=null;){var c=s[0],u=s[1],d=s.index;if(i+=e.slice(o,d),o=d+c.length,u){i+=u[1];continue}var f=e[o],g=s[2],p=s[3],m=s[4],h=s[5],x=s[6],v=s[7];i&&(r.push(i),i="");var y=g!=null&&f!=null&&f!==g,C=x==="+"||x==="*",T=x==="?"||x==="*",N=g||a,j=m||h,I=g||(typeof r[r.length-1]=="string"?r[r.length-1]:"");r.push({name:p||n++,prefix:g||"",delimiter:N,optional:T,repeat:C,partial:y,asterisk:!!v,pattern:j?_T(j):v?".*":DT(N,I)})}return o<e.length&&(i+=e.substr(o)),i&&r.push(i),r}function DT(e,t){return!t||t.indexOf(e)>-1?"[^"+Mo(e)+"]+?":Mo(t)+"|(?:(?!"+Mo(t)+")[^"+Mo(e)+"])+?"}function RT(e,t){return gw(am(e,t),t)}function LT(e){return encodeURI(e).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function FT(e){return encodeURI(e).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function gw(e,t){for(var r=new Array(e.length),n=0;n<e.length;n++)typeof e[n]=="object"&&(r[n]=new RegExp("^(?:"+e[n].pattern+")$",lm(t)));return function(o,i){for(var a="",s=o||{},c=i||{},u=c.pretty?LT:encodeURIComponent,d=0;d<e.length;d++){var f=e[d];if(typeof f=="string"){a+=f;continue}var g=s[f.name],p;if(g==null)if(f.optional){f.partial&&(a+=f.prefix);continue}else throw new TypeError('Expected "'+f.name+'" to be defined');if(Dc(g)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(g)+"`");if(g.length===0){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var m=0;m<g.length;m++){if(p=u(g[m]),!r[d].test(p))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(p)+"`");a+=(m===0?f.prefix:f.delimiter)+p}continue}if(p=f.asterisk?FT(g):u(g),!r[d].test(p))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+p+'"');a+=f.prefix+p}return a}}function Mo(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function _T(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function sm(e,t){return e.keys=t,e}function lm(e){return e&&e.sensitive?"":"i"}function BT(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return sm(e,t)}function zT(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(mw(e[o],t,r).source);var i=new RegExp("(?:"+n.join("|")+")",lm(r));return sm(i,t)}function HT(e,t,r){return pw(am(e,r),t,r)}function pw(e,t,r){Dc(t)||(r=t||r,t=[]),r=r||{};for(var n=r.strict,o=r.end!==!1,i="",a=0;a<e.length;a++){var s=e[a];if(typeof s=="string")i+=Mo(s);else{var c=Mo(s.prefix),u="(?:"+s.pattern+")";t.push(s),s.repeat&&(u+="(?:"+c+u+")*"),s.optional?s.partial?u=c+"("+u+")?":u="(?:"+c+"("+u+"))?":u=c+"("+u+")",i+=u}}var d=Mo(r.delimiter||"/"),f=i.slice(-d.length)===d;return n||(i=(f?i.slice(0,-d.length):i)+"(?:"+d+"(?=$))?"),o?i+="$":i+=n&&f?"":"(?="+d+"|$)",sm(new RegExp("^"+i,lm(r)),t)}function mw(e,t,r){return Dc(t)||(r=t||r,t=[]),r=r||{},e instanceof RegExp?BT(e,t):Dc(e)?zT(e,t,r):HT(e,t,r)}var UT=Ji.exports;const VT=ht(UT);function Rn(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var Zd=1073741823,L0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function WT(){var e="__global_unique_id__";return L0[e]=(L0[e]||0)+1}function qT(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function GT(e){var t=[];return{on:function(n){t.push(n)},off:function(n){t=t.filter(function(o){return o!==n})},get:function(){return e},set:function(n,o){e=n,t.forEach(function(i){return i(e,o)})}}}function KT(e){return Array.isArray(e)?e[0]:e}function JT(e,t){var r,n,o="__create-react-context-"+WT()+"__",i=function(s){Br(c,s);function c(){for(var d,f=arguments.length,g=new Array(f),p=0;p<f;p++)g[p]=arguments[p];return d=s.call.apply(s,[this].concat(g))||this,d.emitter=GT(d.props.value),d}var u=c.prototype;return u.getChildContext=function(){var f;return f={},f[o]=this.emitter,f},u.componentWillReceiveProps=function(f){if(this.props.value!==f.value){var g=this.props.value,p=f.value,m;qT(g,p)?m=0:(m=typeof t=="function"?t(g,p):Zd,m|=0,m!==0&&this.emitter.set(f.value,m))}},u.render=function(){return this.props.children},c}(ae.Component);i.childContextTypes=(r={},r[o]=er.object.isRequired,r);var a=function(s){Br(c,s);function c(){for(var d,f=arguments.length,g=new Array(f),p=0;p<f;p++)g[p]=arguments[p];return d=s.call.apply(s,[this].concat(g))||this,d.observedBits=void 0,d.state={value:d.getValue()},d.onUpdate=function(m,h){var x=d.observedBits|0;x&h&&d.setState({value:d.getValue()})},d}var u=c.prototype;return u.componentWillReceiveProps=function(f){var g=f.observedBits;this.observedBits=g??Zd},u.componentDidMount=function(){this.context[o]&&this.context[o].on(this.onUpdate);var f=this.props.observedBits;this.observedBits=f??Zd},u.componentWillUnmount=function(){this.context[o]&&this.context[o].off(this.onUpdate)},u.getValue=function(){return this.context[o]?this.context[o].get():e},u.render=function(){return KT(this.props.children)(this.state.value)},c}(ae.Component);return a.contextTypes=(n={},n[o]=er.object,n),{Provider:i,Consumer:a}}var QT=ae.createContext||JT,hw=function(t){var r=QT();return r.displayName=t,r},ZT=hw("Router-History"),fo=hw("Router"),Ru=function(e){Br(t,e),t.computeRootMatch=function(o){return{path:"/",url:"/",params:{},isExact:o==="/"}};function t(n){var o;return o=e.call(this,n)||this,o.state={location:n.history.location},o._isMounted=!1,o._pendingLocation=null,n.staticContext||(o.unlisten=n.history.listen(function(i){o._pendingLocation=i})),o}var r=t.prototype;return r.componentDidMount=function(){var o=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(i){o._isMounted&&o.setState({location:i})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},r.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},r.render=function(){return ae.createElement(fo.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},ae.createElement(ZT.Provider,{children:this.props.children||null,value:this.props.history}))},t}(ae.Component);ae.Component;var YT=function(e){Br(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},r.componentDidUpdate=function(o){this.props.onUpdate&&this.props.onUpdate.call(this,this,o)},r.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},r.render=function(){return null},t}(ae.Component);function XT(e){var t=e.message,r=e.when,n=r===void 0?!0:r;return ae.createElement(fo.Consumer,null,function(o){if(o||Tn(),!n||o.staticContext)return null;var i=o.history.block;return ae.createElement(YT,{onMount:function(s){s.release=i(t)},onUpdate:function(s,c){c.message!==t&&(s.release(),s.release=i(t))},onUnmount:function(s){s.release()},message:t})})}var F0={},eO=1e4,_0=0;function tO(e,t){var r=""+t.end+t.strict+t.sensitive,n=F0[r]||(F0[r]={});if(n[e])return n[e];var o=[],i=VT(e,o,t),a={regexp:i,keys:o};return _0<eO&&(n[e]=a,_0++),a}function cm(e,t){t===void 0&&(t={}),(typeof t=="string"||Array.isArray(t))&&(t={path:t});var r=t,n=r.path,o=r.exact,i=o===void 0?!1:o,a=r.strict,s=a===void 0?!1:a,c=r.sensitive,u=c===void 0?!1:c,d=[].concat(n);return d.reduce(function(f,g){if(!g&&g!=="")return null;if(f)return f;var p=tO(g,{end:i,strict:s,sensitive:u}),m=p.regexp,h=p.keys,x=m.exec(e);if(!x)return null;var v=x[0],y=x.slice(1),C=e===v;return i&&!C?null:{path:g,url:g==="/"&&v===""?"/":v,isExact:C,params:h.reduce(function(T,N,j){return T[N.name]=y[j],T},{})}},null)}function rO(e){return ae.Children.count(e)===0}var Fe=function(e){Br(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var o=this;return ae.createElement(fo.Consumer,null,function(i){i||Tn();var a=o.props.location||i.location,s=o.props.computedMatch?o.props.computedMatch:o.props.path?cm(a.pathname,o.props):i.match,c=we({},i,{location:a,match:s}),u=o.props,d=u.children,f=u.component,g=u.render;return Array.isArray(d)&&rO(d)&&(d=null),ae.createElement(fo.Provider,{value:c},c.match?d?typeof d=="function"?d(c):d:f?ae.createElement(f,c):g?g(c):null:typeof d=="function"?d(c):null)})},t}(ae.Component);function um(e){return e.charAt(0)==="/"?e:"/"+e}function nO(e,t){return e?we({},t,{pathname:um(e)+t.pathname}):t}function oO(e,t){if(!e)return t;var r=um(e);return t.pathname.indexOf(r)!==0?t:we({},t,{pathname:t.pathname.substr(r.length)})}function B0(e){return typeof e=="string"?e:Xt(e)}function Yd(e){return function(){Tn()}}function z0(){}ae.Component;var Ta=function(e){Br(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var o=this;return ae.createElement(fo.Consumer,null,function(i){i||Tn();var a=o.props.location||i.location,s,c;return ae.Children.forEach(o.props.children,function(u){if(c==null&&ae.isValidElement(u)){s=u;var d=u.props.path||u.props.from;c=d?cm(a.pathname,we({},u.props,{path:d})):i.match}}),c?ae.cloneElement(s,{location:a,computedMatch:c}):null})},t}(ae.Component);function Qi(e){var t="withRouter("+(e.displayName||e.name)+")",r=function(o){var i=o.wrappedComponentRef,a=Rn(o,["wrappedComponentRef"]);return ae.createElement(fo.Consumer,null,function(s){return s||Tn(),ae.createElement(e,we({},a,s,{ref:i}))})};return r.displayName=t,r.WrappedComponent=e,Nc(r,e)}ae.useContext;ae.Component;var Oa=function(e){Br(t,e);function t(){for(var n,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i))||this,n.history=NT(n.props),n}var r=t.prototype;return r.render=function(){return ae.createElement(Ru,{history:this.history,children:this.props.children})},t}(ae.Component),wg=function(t,r){return typeof t=="function"?t(r):t},jg=function(t,r){return typeof t=="string"?pr(t,null,null,r):t},dm=function(t){return t},zi=ae.forwardRef;typeof zi>"u"&&(zi=dm);function iO(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var aO=zi(function(e,t){var r=e.innerRef,n=e.navigate,o=e.onClick,i=Rn(e,["innerRef","navigate","onClick"]),a=i.target,s=we({},i,{onClick:function(u){try{o&&o(u)}catch(d){throw u.preventDefault(),d}!u.defaultPrevented&&u.button===0&&(!a||a==="_self")&&!iO(u)&&(u.preventDefault(),n())}});return dm!==zi?s.ref=t||r:s.ref=r,ae.createElement("a",s)}),sO=zi(function(e,t){var r=e.component,n=r===void 0?aO:r,o=e.replace,i=e.to,a=e.innerRef,s=Rn(e,["component","replace","to","innerRef"]);return ae.createElement(fo.Consumer,null,function(c){c||Tn();var u=c.history,d=jg(wg(i,c.location),c.location),f=d?u.createHref(d):"",g=we({},s,{href:f,navigate:function(){var m=wg(i,c.location),h=Xt(c.location)===Xt(jg(m)),x=o||h?u.replace:u.push;x(m)}});return dm!==zi?g.ref=t||a:g.innerRef=a,ae.createElement(n,g)})}),vw=function(t){return t},Rc=ae.forwardRef;typeof Rc>"u"&&(Rc=vw);function lO(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(function(n){return n}).join(" ")}Rc(function(e,t){var r=e["aria-current"],n=r===void 0?"page":r,o=e.activeClassName,i=o===void 0?"active":o,a=e.activeStyle,s=e.className,c=e.exact,u=e.isActive,d=e.location,f=e.sensitive,g=e.strict,p=e.style,m=e.to,h=e.innerRef,x=Rn(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return ae.createElement(fo.Consumer,null,function(v){v||Tn();var y=d||v.location,C=jg(wg(m,y),y),T=C.pathname,N=T&&T.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),j=N?cm(y.pathname,{path:N,exact:c,sensitive:f,strict:g}):null,I=!!(u?u(j,y):j),$=typeof s=="function"?s(I):s,w=typeof p=="function"?p(I):p;I&&($=lO($,i),w=we({},w,a));var U=we({"aria-current":I&&n||null,className:$,style:w,to:C},x);return vw!==Rc?U.ref=t||h:U.innerRef=h,ae.createElement(sO,U)})});var xw={},fm={},gm={};Object.defineProperty(gm,"__esModule",{value:!0});gm.default=fO;var H0="html",U0="head",jl="body",cO=/<([a-zA-Z]+[0-9]?)/,V0=/<head[^]*>/i,W0=/<body[^]*>/i,Lc=function(e,t){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},Tg=function(e,t){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},q0=typeof window=="object"&&window.DOMParser;if(typeof q0=="function"){var uO=new q0,dO="text/html";Tg=function(e,t){return t&&(e="<".concat(t,">").concat(e,"</").concat(t,">")),uO.parseFromString(e,dO)},Lc=Tg}if(typeof document=="object"&&document.implementation){var Tl=document.implementation.createHTMLDocument();Lc=function(e,t){if(t){var r=Tl.documentElement.querySelector(t);return r&&(r.innerHTML=e),Tl}return Tl.documentElement.innerHTML=e,Tl}}var Ol=typeof document=="object"&&document.createElement("template"),Og;Ol&&Ol.content&&(Og=function(e){return Ol.innerHTML=e,Ol.content.childNodes});function fO(e){var t,r,n=e.match(cO),o=n&&n[1]?n[1].toLowerCase():"";switch(o){case H0:{var i=Tg(e);if(!V0.test(e)){var a=i.querySelector(U0);(t=a==null?void 0:a.parentNode)===null||t===void 0||t.removeChild(a)}if(!W0.test(e)){var a=i.querySelector(jl);(r=a==null?void 0:a.parentNode)===null||r===void 0||r.removeChild(a)}return i.querySelectorAll(H0)}case U0:case jl:{var s=Lc(e).querySelectorAll(o);return W0.test(e)&&V0.test(e)?s[0].parentNode.childNodes:s}default:{if(Og)return Og(e);var a=Lc(e,jl).querySelector(jl);return a.childNodes}}}var Lu={},pm={},mm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0;var t;(function(n){n.Root="root",n.Text="text",n.Directive="directive",n.Comment="comment",n.Script="script",n.Style="style",n.Tag="tag",n.CDATA="cdata",n.Doctype="doctype"})(t=e.ElementType||(e.ElementType={}));function r(n){return n.type===t.Tag||n.type===t.Script||n.type===t.Style}e.isTag=r,e.Root=t.Root,e.Text=t.Text,e.Directive=t.Directive,e.Comment=t.Comment,e.Script=t.Script,e.Style=t.Style,e.Tag=t.Tag,e.CDATA=t.CDATA,e.Doctype=t.Doctype})(mm);var Re={},xo=nt&&nt.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Za=nt&&nt.__assign||function(){return Za=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Za.apply(this,arguments)};Object.defineProperty(Re,"__esModule",{value:!0});Re.cloneNode=Re.hasChildren=Re.isDocument=Re.isDirective=Re.isComment=Re.isText=Re.isCDATA=Re.isTag=Re.Element=Re.Document=Re.CDATA=Re.NodeWithChildren=Re.ProcessingInstruction=Re.Comment=Re.Text=Re.DataNode=Re.Node=void 0;var sr=mm,hm=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(t){this.parent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(t){this.prev=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(t){this.next=t},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(t){return t===void 0&&(t=!1),vm(this,t)},e}();Re.Node=hm;var Fu=function(e){xo(t,e);function t(r){var n=e.call(this)||this;return n.data=r,n}return Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(r){this.data=r},enumerable:!1,configurable:!0}),t}(hm);Re.DataNode=Fu;var yw=function(e){xo(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=sr.ElementType.Text,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(Fu);Re.Text=yw;var bw=function(e){xo(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=sr.ElementType.Comment,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(Fu);Re.Comment=bw;var Sw=function(e){xo(t,e);function t(r,n){var o=e.call(this,n)||this;return o.name=r,o.type=sr.ElementType.Directive,o}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(Fu);Re.ProcessingInstruction=Sw;var _u=function(e){xo(t,e);function t(r){var n=e.call(this)||this;return n.children=r,n}return Object.defineProperty(t.prototype,"firstChild",{get:function(){var r;return(r=this.children[0])!==null&&r!==void 0?r:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(r){this.children=r},enumerable:!1,configurable:!0}),t}(hm);Re.NodeWithChildren=_u;var Cw=function(e){xo(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=sr.ElementType.CDATA,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(_u);Re.CDATA=Cw;var ww=function(e){xo(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=sr.ElementType.Root,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(_u);Re.Document=ww;var jw=function(e){xo(t,e);function t(r,n,o,i){o===void 0&&(o=[]),i===void 0&&(i=r==="script"?sr.ElementType.Script:r==="style"?sr.ElementType.Style:sr.ElementType.Tag);var a=e.call(this,o)||this;return a.name=r,a.attribs=n,a.type=i,a}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(r){this.name=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var r=this;return Object.keys(this.attribs).map(function(n){var o,i;return{name:n,value:r.attribs[n],namespace:(o=r["x-attribsNamespace"])===null||o===void 0?void 0:o[n],prefix:(i=r["x-attribsPrefix"])===null||i===void 0?void 0:i[n]}})},enumerable:!1,configurable:!0}),t}(_u);Re.Element=jw;function Tw(e){return(0,sr.isTag)(e)}Re.isTag=Tw;function Ow(e){return e.type===sr.ElementType.CDATA}Re.isCDATA=Ow;function Iw(e){return e.type===sr.ElementType.Text}Re.isText=Iw;function Pw(e){return e.type===sr.ElementType.Comment}Re.isComment=Pw;function Ew(e){return e.type===sr.ElementType.Directive}Re.isDirective=Ew;function $w(e){return e.type===sr.ElementType.Root}Re.isDocument=$w;function gO(e){return Object.prototype.hasOwnProperty.call(e,"children")}Re.hasChildren=gO;function vm(e,t){t===void 0&&(t=!1);var r;if(Iw(e))r=new yw(e.data);else if(Pw(e))r=new bw(e.data);else if(Tw(e)){var n=t?Xd(e.children):[],o=new jw(e.name,Za({},e.attribs),n);n.forEach(function(c){return c.parent=o}),e.namespace!=null&&(o.namespace=e.namespace),e["x-attribsNamespace"]&&(o["x-attribsNamespace"]=Za({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(o["x-attribsPrefix"]=Za({},e["x-attribsPrefix"])),r=o}else if(Ow(e)){var n=t?Xd(e.children):[],i=new Cw(n);n.forEach(function(u){return u.parent=i}),r=i}else if($w(e)){var n=t?Xd(e.children):[],a=new ww(n);n.forEach(function(u){return u.parent=a}),e["x-mode"]&&(a["x-mode"]=e["x-mode"]),r=a}else if(Ew(e)){var s=new Sw(e.name,e.data);e["x-name"]!=null&&(s["x-name"]=e["x-name"],s["x-publicId"]=e["x-publicId"],s["x-systemId"]=e["x-systemId"]),r=s}else throw new Error("Not implemented yet: ".concat(e.type));return r.startIndex=e.startIndex,r.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(r.sourceCodeLocation=e.sourceCodeLocation),r}Re.cloneNode=vm;function Xd(e){for(var t=e.map(function(n){return vm(n,!0)}),r=1;r<t.length;r++)t[r].prev=t[r-1],t[r-1].next=t[r];return t}(function(e){var t=nt&&nt.__createBinding||(Object.create?function(s,c,u,d){d===void 0&&(d=u);var f=Object.getOwnPropertyDescriptor(c,u);(!f||("get"in f?!c.__esModule:f.writable||f.configurable))&&(f={enumerable:!0,get:function(){return c[u]}}),Object.defineProperty(s,d,f)}:function(s,c,u,d){d===void 0&&(d=u),s[d]=c[u]}),r=nt&&nt.__exportStar||function(s,c){for(var u in s)u!=="default"&&!Object.prototype.hasOwnProperty.call(c,u)&&t(c,s,u)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var n=mm,o=Re;r(Re,e);var i={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},a=function(){function s(c,u,d){this.dom=[],this.root=new o.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof u=="function"&&(d=u,u=i),typeof c=="object"&&(u=c,c=void 0),this.callback=c??null,this.options=u??i,this.elementCB=d??null}return s.prototype.onparserinit=function(c){this.parser=c},s.prototype.onreset=function(){this.dom=[],this.root=new o.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},s.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},s.prototype.onerror=function(c){this.handleCallback(c)},s.prototype.onclosetag=function(){this.lastNode=null;var c=this.tagStack.pop();this.options.withEndIndices&&(c.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(c)},s.prototype.onopentag=function(c,u){var d=this.options.xmlMode?n.ElementType.Tag:void 0,f=new o.Element(c,u,void 0,d);this.addNode(f),this.tagStack.push(f)},s.prototype.ontext=function(c){var u=this.lastNode;if(u&&u.type===n.ElementType.Text)u.data+=c,this.options.withEndIndices&&(u.endIndex=this.parser.endIndex);else{var d=new o.Text(c);this.addNode(d),this.lastNode=d}},s.prototype.oncomment=function(c){if(this.lastNode&&this.lastNode.type===n.ElementType.Comment){this.lastNode.data+=c;return}var u=new o.Comment(c);this.addNode(u),this.lastNode=u},s.prototype.oncommentend=function(){this.lastNode=null},s.prototype.oncdatastart=function(){var c=new o.Text(""),u=new o.CDATA([c]);this.addNode(u),c.parent=u,this.lastNode=c},s.prototype.oncdataend=function(){this.lastNode=null},s.prototype.onprocessinginstruction=function(c,u){var d=new o.ProcessingInstruction(c,u);this.addNode(d)},s.prototype.handleCallback=function(c){if(typeof this.callback=="function")this.callback(c,this.dom);else if(c)throw c},s.prototype.addNode=function(c){var u=this.tagStack[this.tagStack.length-1],d=u.children[u.children.length-1];this.options.withStartIndices&&(c.startIndex=this.parser.startIndex),this.options.withEndIndices&&(c.endIndex=this.parser.endIndex),u.children.push(c),d&&(c.prev=d,d.next=c),c.parent=u,this.lastNode=null},s}();e.DomHandler=a,e.default=a})(pm);var Nw={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES=void 0,e.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES.reduce(function(t,r){return t[r.toLowerCase()]=r,t},{})})(Nw);Object.defineProperty(Lu,"__esModule",{value:!0});Lu.formatAttributes=kw;Lu.formatDOM=Mw;var Il=pm,pO=Nw;function mO(e){return pO.CASE_SENSITIVE_TAG_NAMES_MAP[e]}function kw(e){for(var t={},r=0,n=e.length;r<n;r++){var o=e[r];t[o.name]=o.value}return t}function hO(e){e=e.toLowerCase();var t=mO(e);return t||e}function Mw(e,t,r){t===void 0&&(t=null);for(var n=[],o,i=0,a=e.length;i<a;i++){var s=e[i];switch(s.nodeType){case 1:{var c=hO(s.nodeName);o=new Il.Element(c,kw(s.attributes)),o.children=Mw(c==="template"?s.content.childNodes:s.childNodes,o);break}case 3:o=new Il.Text(s.nodeValue);break;case 8:o=new Il.Comment(s.nodeValue);break;default:continue}var u=n[i-1]||null;u&&(u.next=o),o.parent=t,o.prev=u,o.next=null,n.push(o)}return r&&(o=new Il.ProcessingInstruction(r.substring(0,r.indexOf(" ")).toLowerCase(),r),o.next=n[0]||null,o.parent=t,n.unshift(o),n[1]&&(n[1].prev=n[0])),n}var vO=nt&&nt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fm,"__esModule",{value:!0});fm.default=SO;var xO=vO(gm),yO=Lu,bO=/<(![a-zA-Z\s]+)>/;function SO(e){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];var t=e.match(bO),r=t?t[1]:void 0;return(0,yO.formatDOM)((0,xO.default)(e),null,r)}var Bu={},nn={},zu={},CO=0;zu.SAME=CO;var wO=1;zu.CAMELCASE=wO;zu.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};const Aw=0,yo=1,Hu=2,Uu=3,xm=4,Dw=5,Rw=6;function jO(e){return Nt.hasOwnProperty(e)?Nt[e]:null}function Qt(e,t,r,n,o,i,a){this.acceptsBooleans=t===Hu||t===Uu||t===xm,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}const Nt={},TO=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];TO.forEach(e=>{Nt[e]=new Qt(e,Aw,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([e,t])=>{Nt[e]=new Qt(e,yo,!1,t,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(e=>{Nt[e]=new Qt(e,Hu,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(e=>{Nt[e]=new Qt(e,Hu,!1,e,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(e=>{Nt[e]=new Qt(e,Uu,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(e=>{Nt[e]=new Qt(e,Uu,!0,e,null,!1,!1)});["capture","download"].forEach(e=>{Nt[e]=new Qt(e,xm,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(e=>{Nt[e]=new Qt(e,Rw,!1,e,null,!1,!1)});["rowSpan","start"].forEach(e=>{Nt[e]=new Qt(e,Dw,!1,e.toLowerCase(),null,!1,!1)});const ym=/[\-\:]([a-z])/g,bm=e=>e[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(e=>{const t=e.replace(ym,bm);Nt[t]=new Qt(t,yo,!1,e,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(e=>{const t=e.replace(ym,bm);Nt[t]=new Qt(t,yo,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(e=>{const t=e.replace(ym,bm);Nt[t]=new Qt(t,yo,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(e=>{Nt[e]=new Qt(e,yo,!1,e.toLowerCase(),null,!1,!1)});const OO="xlinkHref";Nt[OO]=new Qt("xlinkHref",yo,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(e=>{Nt[e]=new Qt(e,yo,!1,e.toLowerCase(),null,!0,!0)});const{CAMELCASE:IO,SAME:PO,possibleStandardNames:G0}=zu,EO=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",$O=EO+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",NO=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+$O+"]*$")),kO=Object.keys(G0).reduce((e,t)=>{const r=G0[t];return r===PO?e[t]=t:r===IO?e[t.toLowerCase()]=t:e[t]=r,e},{});nn.BOOLEAN=Uu;nn.BOOLEANISH_STRING=Hu;nn.NUMERIC=Dw;nn.OVERLOADED_BOOLEAN=xm;nn.POSITIVE_NUMERIC=Rw;nn.RESERVED=Aw;nn.STRING=yo;nn.getPropertyInfo=jO;nn.isCustomAttribute=NO;nn.possibleStandardNames=kO;var Sm={},Cm={},K0=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,MO=/\n/g,AO=/^\s*/,DO=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,RO=/^:\s*/,LO=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,FO=/^[;\s]*/,_O=/^\s+|\s+$/g,BO=`
`,J0="/",Q0="*",Eo="",zO="comment",HO="declaration",UO=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var r=1,n=1;function o(m){var h=m.match(MO);h&&(r+=h.length);var x=m.lastIndexOf(BO);n=~x?m.length-x:n+m.length}function i(){var m={line:r,column:n};return function(h){return h.position=new a(m),u(),h}}function a(m){this.start=m,this.end={line:r,column:n},this.source=t.source}a.prototype.content=e;function s(m){var h=new Error(t.source+":"+r+":"+n+": "+m);if(h.reason=m,h.filename=t.source,h.line=r,h.column=n,h.source=e,!t.silent)throw h}function c(m){var h=m.exec(e);if(h){var x=h[0];return o(x),e=e.slice(x.length),h}}function u(){c(AO)}function d(m){var h;for(m=m||[];h=f();)h!==!1&&m.push(h);return m}function f(){var m=i();if(!(J0!=e.charAt(0)||Q0!=e.charAt(1))){for(var h=2;Eo!=e.charAt(h)&&(Q0!=e.charAt(h)||J0!=e.charAt(h+1));)++h;if(h+=2,Eo===e.charAt(h-1))return s("End of comment missing");var x=e.slice(2,h-2);return n+=2,o(x),e=e.slice(h),n+=2,m({type:zO,comment:x})}}function g(){var m=i(),h=c(DO);if(h){if(f(),!c(RO))return s("property missing ':'");var x=c(LO),v=m({type:HO,property:Z0(h[0].replace(K0,Eo)),value:x?Z0(x[0].replace(K0,Eo)):Eo});return c(FO),v}}function p(){var m=[];d(m);for(var h;h=g();)h!==!1&&(m.push(h),d(m));return m}return u(),p()};function Z0(e){return e?e.replace(_O,Eo):Eo}var VO=nt&&nt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(Cm,"__esModule",{value:!0});Cm.default=qO;var WO=VO(UO);function qO(e,t){var r=null;if(!e||typeof e!="string")return r;var n=(0,WO.default)(e),o=typeof t=="function";return n.forEach(function(i){if(i.type==="declaration"){var a=i.property,s=i.value;o?t(a,s,i):s&&(r=r||{},r[a]=s)}}),r}var Vu={};Object.defineProperty(Vu,"__esModule",{value:!0});Vu.camelCase=void 0;var GO=/^--[a-zA-Z0-9-]+$/,KO=/-([a-z])/g,JO=/^[^-]+$/,QO=/^-(webkit|moz|ms|o|khtml)-/,ZO=/^-(ms)-/,YO=function(e){return!e||JO.test(e)||GO.test(e)},XO=function(e,t){return t.toUpperCase()},Y0=function(e,t){return"".concat(t,"-")},e7=function(e,t){return t===void 0&&(t={}),YO(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(ZO,Y0):e=e.replace(QO,Y0),e.replace(KO,XO))};Vu.camelCase=e7;var t7=nt&&nt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},r7=t7(Cm),n7=Vu;function Ig(e,t){var r={};return!e||typeof e!="string"||(0,r7.default)(e,function(n,o){n&&o&&(r[(0,n7.camelCase)(n,t)]=o)}),r}Ig.default=Ig;var o7=Ig;(function(e){var t=nt&&nt.__importDefault||function(d){return d&&d.__esModule?d:{default:d}};Object.defineProperty(e,"__esModule",{value:!0}),e.returnFirstArg=e.canTextBeChildOfNode=e.ELEMENTS_WITH_NO_TEXT_CHILDREN=e.PRESERVE_CUSTOM_ATTRIBUTES=void 0,e.isCustomComponent=i,e.setStyleProp=s;var r=P,n=t(o7),o=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function i(d,f){return d.includes("-")?!o.has(d):!!(f&&typeof f.is=="string")}var a={reactCompat:!0};function s(d,f){if(typeof d=="string"){if(!d.trim()){f.style={};return}try{f.style=(0,n.default)(d,a)}catch{f.style={}}}}e.PRESERVE_CUSTOM_ATTRIBUTES=Number(r.version.split(".")[0])>=16,e.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var c=function(d){return!e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(d.name)};e.canTextBeChildOfNode=c;var u=function(d){return d};e.returnFirstArg=u})(Sm);Object.defineProperty(Bu,"__esModule",{value:!0});Bu.default=l7;var Fa=nn,X0=Sm,i7=["checked","value"],a7=["input","select","textarea"],s7={reset:!0,submit:!0};function l7(e,t){e===void 0&&(e={});var r={},n=!!(e.type&&s7[e.type]);for(var o in e){var i=e[o];if((0,Fa.isCustomAttribute)(o)){r[o]=i;continue}var a=o.toLowerCase(),s=e1(a);if(s){var c=(0,Fa.getPropertyInfo)(s);switch(i7.includes(s)&&a7.includes(t)&&!n&&(s=e1("default"+a)),r[s]=i,c&&c.type){case Fa.BOOLEAN:r[s]=!0;break;case Fa.OVERLOADED_BOOLEAN:i===""&&(r[s]=!0);break}continue}X0.PRESERVE_CUSTOM_ATTRIBUTES&&(r[o]=i)}return(0,X0.setStyleProp)(e.style,r),r}function e1(e){return Fa.possibleStandardNames[e]}var wm={},c7=nt&&nt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(wm,"__esModule",{value:!0});wm.default=Lw;var ef=P,u7=c7(Bu),Ya=Sm,d7={cloneElement:ef.cloneElement,createElement:ef.createElement,isValidElement:ef.isValidElement};function Lw(e,t){t===void 0&&(t={});for(var r=[],n=typeof t.replace=="function",o=t.transform||Ya.returnFirstArg,i=t.library||d7,a=i.cloneElement,s=i.createElement,c=i.isValidElement,u=e.length,d=0;d<u;d++){var f=e[d];if(n){var g=t.replace(f,d);if(c(g)){u>1&&(g=a(g,{key:g.key||d})),r.push(o(g,f,d));continue}}if(f.type==="text"){var p=!f.data.trim().length;if(p&&f.parent&&!(0,Ya.canTextBeChildOfNode)(f.parent)||t.trim&&p)continue;r.push(o(f.data,f,d));continue}var m=f,h={};f7(m)?((0,Ya.setStyleProp)(m.attribs.style,m.attribs),h=m.attribs):m.attribs&&(h=(0,u7.default)(m.attribs,m.name));var x=void 0;switch(f.type){case"script":case"style":f.children[0]&&(h.dangerouslySetInnerHTML={__html:f.children[0].data});break;case"tag":f.name==="textarea"&&f.children[0]?h.defaultValue=f.children[0].data:f.children&&f.children.length&&(x=Lw(f.children,t));break;default:continue}u>1&&(h.key=d),r.push(o(s(f.name,h,x),f,d))}return r.length===1?r[0]:r}function f7(e){return Ya.PRESERVE_CUSTOM_ATTRIBUTES&&e.type==="tag"&&(0,Ya.isCustomComponent)(e.name,e.attribs)}(function(e){var t=nt&&nt.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0}),e.htmlToDOM=e.domToReact=e.attributesToProps=e.Text=e.ProcessingInstruction=e.Element=e.Comment=void 0,e.default=s;var r=t(fm);e.htmlToDOM=r.default;var n=t(Bu);e.attributesToProps=n.default;var o=t(wm);e.domToReact=o.default;var i=pm;Object.defineProperty(e,"Comment",{enumerable:!0,get:function(){return i.Comment}}),Object.defineProperty(e,"Element",{enumerable:!0,get:function(){return i.Element}}),Object.defineProperty(e,"ProcessingInstruction",{enumerable:!0,get:function(){return i.ProcessingInstruction}}),Object.defineProperty(e,"Text",{enumerable:!0,get:function(){return i.Text}});var a={lowerCaseAttributeNames:!1};function s(c,u){if(typeof c!="string")throw new TypeError("First argument must be a string");return c?(0,o.default)((0,r.default)(c,(u==null?void 0:u.htmlparser2)||a),u):[]}})(xw);const t1=ht(xw),A=t1.default||t1,D=e=>{if(e==null)return"";try{if(e.includes("{{{")===!0){let r=`${e}`;const n=/&amp;/gi,o=/{{{/gi,i=/}}}/gi,a=/&quot;/gi,s=/&apos;/gi;return`<div>${r.replace(o,"<").replace(s,"'").replace(i,">").replace(a,'"').replace(n,"&")}</div>`}else return e}catch(t){console.log("There was an error decoding into HTML"),console.error(t)}};function g7(e){var t=(r,n=2)=>("00"+r).slice(-n);return t(e/36e5|0)+":"+t(e%36e5/6e4|0)+":"+t(e%6e4/1e3|0)}const jm=()=>{const e=new Date,t=e.getDate(),r=e.getMonth(),n=e.getFullYear(),o=e.getHours();let i=e.getMinutes(),a=e.getSeconds();return a<10&&(a="0"+a),i<10&&(i="0"+i),n+"/"+(r+1)+"/"+t+"@"+o+":"+i+":"+a};function p7(e){var t=(r,n=2)=>("00"+r).slice(-n);return t(e/36e5|0)+"hr, "+t(e%36e5/6e4|0)+"min, "+t(e%6e4/1e3|0)+"sec"}const jr=(e,t,r)=>{const n=`cumulative${t}Duration`,o=`timeOn${r}`,i=`lastAccess${r}`,a=`CumulativeTime${r}`;let s=localStorage.getItem(n)||0;s===void 0&&(s=0);const c=+s;let d=Date.now()-e+c;localStorage.setItem(n,d);const f=jm();localStorage.setItem(i,f);const g=g7(d);localStorage.setItem(o,g),localStorage.setItem(a,p7(d))};var Fw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var i="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(i=o(i,n(s)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var s in i)t.call(i,s)&&i[s]&&(a=o(a,s));return a}function o(i,a){return a?i?i+" "+a:i+a:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(Fw);var m7=Fw.exports;const _a=ht(m7);function h7(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}else return Array.from(e)}var Tm=!1;if(typeof window<"u"){var r1={get passive(){Tm=!0}};window.addEventListener("testPassive",null,r1),window.removeEventListener("testPassive",null,r1)}var _w=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),Kn=[],Fc=!1,Bw=-1,Xa=void 0,es=void 0,zw=function(t){return Kn.some(function(r){return!!(r.options.allowTouchMove&&r.options.allowTouchMove(t))})},_c=function(t){var r=t||window.event;return zw(r.target)||r.touches.length>1?!0:(r.preventDefault&&r.preventDefault(),!1)},v7=function(t){if(es===void 0){var r=!!t&&t.reserveScrollBarGap===!0,n=window.innerWidth-document.documentElement.clientWidth;r&&n>0&&(es=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}Xa===void 0&&(Xa=document.body.style.overflow,document.body.style.overflow="hidden")},x7=function(){es!==void 0&&(document.body.style.paddingRight=es,es=void 0),Xa!==void 0&&(document.body.style.overflow=Xa,Xa=void 0)},y7=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},b7=function(t,r){var n=t.targetTouches[0].clientY-Bw;return zw(t.target)?!1:r&&r.scrollTop===0&&n>0||y7(r)&&n<0?_c(t):(t.stopPropagation(),!0)},S7=function(t,r){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!Kn.some(function(o){return o.targetElement===t})){var n={targetElement:t,options:r||{}};Kn=[].concat(h7(Kn),[n]),_w?(t.ontouchstart=function(o){o.targetTouches.length===1&&(Bw=o.targetTouches[0].clientY)},t.ontouchmove=function(o){o.targetTouches.length===1&&b7(o,t)},Fc||(document.addEventListener("touchmove",_c,Tm?{passive:!1}:void 0),Fc=!0)):v7(r)}},C7=function(t){if(!t){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}Kn=Kn.filter(function(r){return r.targetElement!==t}),_w?(t.ontouchstart=null,t.ontouchmove=null,Fc&&Kn.length===0&&(document.removeEventListener("touchmove",_c,Tm?{passive:!1}:void 0),Fc=!1)):Kn.length||x7()};function w7(e=null){let[t,r]=ae.useState(e);const{current:n}=ae.useRef({current:t});return Object.defineProperty(n,"current",{get:()=>t,set:o=>{Object.is(t,o)||(t=o,r(o))}}),n}function j7(e,t={isStateful:!0}){const r=w7(null),n=P.useRef(null),o=t.isStateful?r:n;return ae.useEffect(()=>{!e||(typeof e=="function"?e(o.current):e.current=o.current)}),o}function Bc(){return Bc=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Bc.apply(this,arguments)}var T7=function(t){var r=t.classes,n=t.classNames,o=t.styles,i=t.id,a=t.closeIcon,s=t.onClick;return ae.createElement("button",{id:i,className:_a(r.closeButton,n==null?void 0:n.closeButton),style:o==null?void 0:o.closeButton,onClick:s,"data-testid":"close-button"},a||ae.createElement("svg",{className:n==null?void 0:n.closeIcon,style:o==null?void 0:o.closeIcon,width:28,height:28,viewBox:"0 0 36 36","data-testid":"close-icon"},ae.createElement("path",{d:"M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"})))},tc=typeof window<"u",Hw=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'];function O7(e){return e.offsetParent===null||getComputedStyle(e).visibility==="hidden"}function I7(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]}function P7(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!0;var t=e.form||e.ownerDocument,r=t.querySelectorAll('input[type="radio"][name="'+e.name+'"]'),n=I7(r,e.form);return n===e||n===void 0&&r[0]===e}function Uw(e){for(var t=document.activeElement,r=e.querySelectorAll(Hw.join(",")),n=[],o=0;o<r.length;o++){var i=r[o];(t===i||!i.disabled&&$7(i)>-1&&!O7(i)&&P7(i))&&n.push(i)}return n}function E7(e,t){if(!(!e||e.key!=="Tab")){if(!t||!t.contains)return process,!1;if(!t.contains(e.target))return!1;var r=Uw(t),n=r[0],o=r[r.length-1];return e.shiftKey&&e.target===n?(o.focus(),e.preventDefault(),!0):!e.shiftKey&&e.target===o?(n.focus(),e.preventDefault(),!0):!1}}function $7(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?N7(e)?0:e.tabIndex:t}function N7(e){return e.getAttribute("contentEditable")}var k7=function(t){var r=t.container,n=t.initialFocusRef,o=P.useRef();return P.useEffect(function(){var i=function(u){r!=null&&r.current&&E7(u,r.current)};if(tc&&document.addEventListener("keydown",i),tc&&(r!=null&&r.current)){var a=function(){Hw.findIndex(function(u){var d;return(d=document.activeElement)==null?void 0:d.matches(u)})!==-1&&(o.current=document.activeElement)};if(n)a(),requestAnimationFrame(function(){var c;(c=n.current)==null||c.focus()});else{var s=Uw(r.current);s[0]&&(a(),s[0].focus())}}return function(){if(tc){var c;document.removeEventListener("keydown",i),(c=o.current)==null||c.focus()}}},[r,n]),null},ni=[],Pg={add:function(t){ni.push(t)},remove:function(t){ni=ni.filter(function(r){return r!==t})},isTopModal:function(t){return!!ni.length&&ni[ni.length-1]===t}};function M7(e,t){P.useEffect(function(){return t&&Pg.add(e),function(){Pg.remove(e)}},[t,e])}var A7=function(t,r,n,o,i){var a=P.useRef(null);P.useEffect(function(){return r&&t.current&&o&&(a.current=t.current,S7(t.current,{reserveScrollBarGap:i})),function(){a.current&&(C7(a.current),a.current=null)}},[r,n,t,o,i])},pn={root:"react-responsive-modal-root",overlay:"react-responsive-modal-overlay",overlayAnimationIn:"react-responsive-modal-overlay-in",overlayAnimationOut:"react-responsive-modal-overlay-out",modalContainer:"react-responsive-modal-container",modalContainerCenter:"react-responsive-modal-containerCenter",modal:"react-responsive-modal-modal",modalAnimationIn:"react-responsive-modal-modal-in",modalAnimationOut:"react-responsive-modal-modal-out",closeButton:"react-responsive-modal-closeButton"},_e=ae.forwardRef(function(e,t){var r,n,o,i,a=e.open,s=e.center,c=e.blockScroll,u=c===void 0?!0:c,d=e.closeOnEsc,f=d===void 0?!0:d,g=e.closeOnOverlayClick,p=g===void 0?!0:g,m=e.container,h=e.showCloseIcon,x=h===void 0?!0:h,v=e.closeIconId,y=e.closeIcon,C=e.focusTrapped,T=C===void 0?!0:C,N=e.initialFocusRef,j=N===void 0?void 0:N,I=e.animationDuration,$=I===void 0?300:I,w=e.classNames,U=e.styles,L=e.role,q=L===void 0?"dialog":L,K=e.ariaDescribedby,B=e.ariaLabelledby,J=e.containerId,Y=e.modalId,k=e.onClose,_=e.onEscKeyDown,z=e.onOverlayClick,V=e.onAnimationEnd,Q=e.children,H=e.reserveScrollBarGap,G=j7(t),Z=P.useRef(null),W=P.useRef(null),R=P.useRef(null);R.current===null&&tc&&(R.current=document.createElement("div"));var O=P.useState(!1),b=O[0],F=O[1];M7(Z,a),A7(Z,a,b,u,H);var M=function(){R.current&&!m&&!document.body.contains(R.current)&&document.body.appendChild(R.current),document.addEventListener("keydown",ie)},ee=function(){R.current&&!m&&document.body.contains(R.current)&&document.body.removeChild(R.current),document.removeEventListener("keydown",ie)},ie=function(ye){ye.keyCode!==27||!Pg.isTopModal(Z)||(_==null||_(ye),f&&k())};P.useEffect(function(){return function(){b&&ee()}},[b]),P.useEffect(function(){a&&!b&&(F(!0),M())},[a]);var de=function(ye){if(W.current===null&&(W.current=!0),!W.current){W.current=null;return}z==null||z(ye),p&&k(),W.current=null},ce=function(){W.current=!1},fe=function(){a||F(!1),V==null||V()},Se=m||R.current,le=a?(r=w==null?void 0:w.overlayAnimationIn)!=null?r:pn.overlayAnimationIn:(n=w==null?void 0:w.overlayAnimationOut)!=null?n:pn.overlayAnimationOut,pe=a?(o=w==null?void 0:w.modalAnimationIn)!=null?o:pn.modalAnimationIn:(i=w==null?void 0:w.modalAnimationOut)!=null?i:pn.modalAnimationOut;return b&&Se?BC.createPortal(ae.createElement("div",{className:_a(pn.root,w==null?void 0:w.root),style:U==null?void 0:U.root,"data-testid":"root"},ae.createElement("div",{className:_a(pn.overlay,w==null?void 0:w.overlay),"data-testid":"overlay","aria-hidden":!0,style:Bc({animation:le+" "+$+"ms"},U==null?void 0:U.overlay)}),ae.createElement("div",{ref:Z,id:J,className:_a(pn.modalContainer,s&&pn.modalContainerCenter,w==null?void 0:w.modalContainer),style:U==null?void 0:U.modalContainer,"data-testid":"modal-container",onClick:de},ae.createElement("div",{ref:G,className:_a(pn.modal,w==null?void 0:w.modal),style:Bc({animation:pe+" "+$+"ms"},U==null?void 0:U.modal),onMouseDown:ce,onMouseUp:ce,onClick:ce,onAnimationEnd:fe,id:Y,role:q,"aria-modal":"true","aria-labelledby":B,"aria-describedby":K,"data-testid":"modal",tabIndex:-1},T&&ae.createElement(k7,{container:G,initialFocusRef:j}),Q,x&&ae.createElement(T7,{classes:pn,classNames:w,styles:U,closeIcon:y,onClick:k,id:v})))),Se):null});function D7(e){let t;const r=new Set,n=(u,d)=>{const f=typeof u=="function"?u(t):u;if(f!==t){const g=t;t=d?f:Object.assign({},t,f),r.forEach(p=>p(t,g))}},o=()=>t,i=(u,d=o,f=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let g=d(t);function p(){const m=d(t);if(!f(g,m)){const h=g;u(g=m,h)}}return r.add(p),()=>r.delete(p)},c={setState:n,getState:o,subscribe:(u,d,f)=>d||f?i(u,d,f):(r.add(u),()=>r.delete(u)),destroy:()=>r.clear()};return t=e(n,o,c),c}const R7=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),n1=R7?P.useEffect:P.useLayoutEffect;function Om(e){const t=typeof e=="function"?D7(e):e,r=(n=t.getState,o=Object.is)=>{const[,i]=P.useReducer(x=>x+1,0),a=t.getState(),s=P.useRef(a),c=P.useRef(n),u=P.useRef(o),d=P.useRef(!1),f=P.useRef();f.current===void 0&&(f.current=n(a));let g,p=!1;(s.current!==a||c.current!==n||u.current!==o||d.current)&&(g=n(a),p=!o(f.current,g)),n1(()=>{p&&(f.current=g),s.current=a,c.current=n,u.current=o,d.current=!1});const m=P.useRef(a);n1(()=>{const x=()=>{try{const y=t.getState(),C=c.current(y);u.current(f.current,C)||(s.current=y,f.current=C,i())}catch{d.current=!0,i()}},v=t.subscribe(x);return t.getState()!==m.current&&x(),v},[]);const h=p?g:f.current;return P.useDebugValue(h),h};return Object.assign(r,t),r[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[r,t];return{next(){const o=n.length<=0;return{value:n.shift(),done:o}}}},r}const L7=e=>({configObj:{},surveyQuestionObjArray:[],requiredAnswersObj:{},setConfigObj:t=>{e(()=>({configObj:t}))},setSurveyQuestionObjArray:t=>{e(()=>({surveyQuestionObjArray:t}))},setRequiredAnswersObj:t=>{e(()=>({requiredAnswersObj:t}))}}),F7=e=>({langObj:{},setLangObj:t=>{e(()=>({langObj:t}))}}),_7=e=>({mapObj:{},setMapObj:t=>{e(()=>({mapObj:t}))}}),B7=e=>({statementsObj:{},columnStatements:{},resetColumnStatements:{},setStatementsObj:t=>{e(()=>({statementsObj:t}))},setColumnStatements:t=>{e(()=>({columnStatements:t}))},setResetColumnStatements:t=>{e(()=>({resetColumnStatements:t}))}}),X=Om((e,t)=>({...L7(e),...F7(e),..._7(e),...B7(e)})),z7=e=>({displayLocalPartIdWarning1:!1,displayLocalPartIdWarning2:!1,triggerLocalDeleteModal:!1,localParticipantName:"",setLocalParticipantName:t=>{e(()=>({localParticipantName:t}))},setLocalPartIdWarning1:t=>{e(()=>({displayLocalPartIdWarning1:t}))},setLocalPartIdWarning2:t=>{e(()=>({displayLocalPartIdWarning2:t}))},setLocalDeleteModal:t=>{e(()=>({triggerLocalDeleteModal:t}))}}),H7=e=>({triggerPresortModal:!0,presortNoReturn:!1,presortPosCards:[],presortNeuCards:[],presortNegCards:[],presortCards:[],presortSortedStatementsNumInitial:0,presortFinished:!1,triggerPresortFinishedModal:!1,triggerPresortPreventNavModal:!1,results:{},m_PresortResults:[],triggerMobilePresortFinishedModal:!1,mobilePresortFontSize:2,mobilePresortViewSize:42,triggerMobilePresortRedoModal:!1,triggerMobilePresortHelpModal:!0,triggerMobilePresortPreventNavModal:!1,setTriggerMobilePresortPreventNavModal:t=>{e(()=>({triggerMobilePresortPreventNavModal:t}))},setTriggerMobilePresortHelpModal:t=>{e(()=>({triggerMobilePresortHelpModal:t}))},setTriggerMobilePresortRedoModal:t=>{e(()=>({triggerMobilePresortRedoModal:t}))},setm_PresortStatementCount:t=>{e(()=>({m_PresortStatementCount:t}))},setMobilePresortViewSize:t=>{e(()=>({mobilePresortViewSize:t}))},setMobilePresortFontSize:t=>{e(()=>({mobilePresortFontSize:t}))},setTriggerMobilePresortFinishedModal:t=>{e(()=>({triggerMobilePresortFinishedModal:t}))},setm_PresortResults:t=>{e(()=>({m_PresortResults:t}))},setPresortNoReturn:t=>{e(()=>({presortNoReturn:t}))},setPresortPosCards:t=>{e(()=>({presortPosCards:t}))},setPresortNeuCards:t=>{e(()=>({presortNeuCards:t}))},setPresortNegCards:t=>{e(()=>({presortNegCards:t}))},setPresortCards:t=>{e(()=>({presortCards:t}))},setPresortSortedStatementsNumInitial:t=>{e(()=>({presortSortedStatementsNumInitial:t}))},setPresortFinished:t=>{e(()=>({presortFinished:t}))},setTriggerPresortFinishedModal:t=>{e(()=>({triggerPresortFinishedModal:t}))},setTriggerPresortPreventNavModal:t=>{e(()=>({triggerPresortPreventNavModal:t}))},setResults:t=>{e(()=>({results:t}))},setTriggerPresortModal:t=>{e(()=>({triggerPresortModal:t}))}}),U7=e=>({dataLoaded:!1,isLoggedIn:!1,triggerLandingModal:!1,triggerConsentModal:!1,usercode:"",urlUsercode:"not set",partId:"not required",localUsercode:"",displayAccessCodeWarning:!1,userInputAccessCode:"",displayLandingContent:!1,triggerSaveBeforeDeleteModal:!1,userInputPartId:"",displayPartIdWarning:!1,displayMobileHelpButton:!0,setDisplayMobileHelpButton:t=>{e(()=>({displayMobileHelpButton:t}))},setTriggerConsentModal:t=>{e(()=>({triggerConsentModal:t}))},setUrlUsercode:t=>{e(()=>({urlUsercode:t}))},setDisplayPartIdWarning:t=>{e(()=>({displayPartIdWarning:t}))},setUserInputPartId:t=>{e(()=>({userInputPartId:t}))},setTriggerSaveBeforeDeleteModal:t=>{e(()=>({triggerSaveBeforeDeleteModal:t}))},setDataLoaded:t=>{e(()=>({dataLoaded:t}))},setIsLoggedIn:t=>{e(()=>({isLoggedIn:t}))},setTriggerLandingModal:t=>{e(()=>({triggerLandingModal:t}))},setUsercode:t=>{e(()=>({usercode:t}))},setPartId:t=>{e(()=>({partId:t}))},setLocalUsercode:t=>{e(()=>({localUsercode:t}))},setDisplayAccessCodeWarning:t=>{e(()=>({displayAccessCodeWarning:t}))},setUserInputAccessCode:t=>{e(()=>({userInputAccessCode:t}))},setDisplayLandingContent:t=>{e(()=>({displayLandingContent:t}))}}),V7=e=>({cardFontSizePresort:5,cardFontSizeSort:5,cardFontSizePostsort:5,currentPage:"landing",progressScore:10,progressScoreAdditional:0,progressScoreAdditionalSort:0,displayNextButton:!1,minCardHeightSort:40,minCardHeightPostsort:40,setMinCardHeightPostsort:t=>{e(()=>({minCardHeightPostsort:t}))},setMinCardHeightSort:t=>{e(()=>({minCardHeightSort:t}))},setCardFontSizePostsort:t=>{e(()=>({cardFontSizePostsort:t}))},setCardFontSizeSort:t=>{e(()=>({cardFontSizeSort:t}))},setCardFontSizePresort:t=>{e(()=>({cardFontSizePresort:t}))},setCurrentPage:t=>{e(()=>({currentPage:t}))},setProgressScore:t=>{e(()=>({progressScore:t}))},setProgressScoreAdditional:t=>{e(()=>({progressScoreAdditional:t}))},setProgressScoreAdditionalSort:t=>{e(()=>({progressScoreAdditionalSort:t}))},setDisplayNextButton:t=>{e(()=>({displayNextButton:t}))}}),W7=e=>({cardHeightSort:120,cardHeightPostsort:120,columnWidth:100,draggingOverColumnId:"",hasOverloadedColumn:!1,isSortingCards:!0,isSortingFinished:!1,overloadedColumn:"",sortCompleted:!1,sortFinished:!1,sortFinishedModalHasBeenShown:!1,sortCharacteristics:{},topMargin:50,triggerSortModal:!0,triggerSortPreventNavModal:!1,triggerSortOverloadedColumnModal:!1,triggerSortingFinishedModal:!1,sortGridResults:{},bypassSort:!1,bypassPresort:!1,mobileSortFontSize:2,mobileSortViewSize:42,triggerMobileSortSwapModal:!1,triggerMobileSortHelpModal:!0,triggerMobileSortScrollBottomModal:!1,hasScrolledToBottomSort:!1,setHasScrolledToBottomSort:t=>{e(()=>({hasScrolledToBottomSort:t}))},setTriggerMobileSortScrollBottomModal:t=>{e(()=>({triggerMobileSortScrollBottomModal:t}))},setTriggerMobileSortHelpModal:t=>{e(()=>({triggerMobileSortHelpModal:t}))},setTriggerMobileSortSwapModal:t=>{e(()=>({triggerMobileSortSwapModal:t}))},setMobileSortViewSize:t=>{e(()=>({mobileSortViewSize:t}))},setMobileSortFontSize:t=>{e(()=>({mobileSortFontSize:t}))},setBypassPresort:t=>{e(()=>({bypassPresort:t}))},setBypassSort:t=>{e(()=>({bypassSort:t}))},setDraggingOverColumnId:t=>{e(()=>({draggingOverColumnId:t}))},setOverloadedColumn:t=>{e(()=>({overloadedColumn:t}))},setTriggerSortingFinishedModal:t=>{e(()=>({triggerSortingFinishedModal:t}))},setSortGridResults:t=>{e(()=>({sortGridResults:t}))},setColumnWidth:t=>{e(()=>({columnWidth:t}))},setTopMargin:t=>{e(()=>({topMargin:t}))},setIsSortingCards:t=>{e(()=>({isSortingCards:t}))},setSortCompleted:t=>{e(()=>({sortCompleted:t}))},setSortFinished:t=>{e(()=>({sortFinished:t}))},setSortFinishedModalHasBeenShown:t=>{e(()=>({sortFinishedModalHasBeenShown:t}))},setSortCharacteristics:t=>{e(()=>({sortCharacteristics:t}))},setCardHeightSort:t=>{e(()=>({cardHeightSort:t}))},setCardHeightPostsort:t=>{e(()=>({cardHeightPostsort:t}))},setTriggerSortModal:t=>{e(()=>({triggerSortModal:t}))},setIsSortingFinished:t=>{e(()=>({isSortingFinished:t}))},setHasOverloadedColumn:t=>{e(()=>({hasOverloadedColumn:t}))},setTriggerSortPreventNavModal:t=>{e(()=>({triggerSortPreventNavModal:t}))},setTriggerSortOverloadedColumnModal:t=>{e(()=>({triggerSortOverloadedColumnModal:t}))}}),q7=e=>({resultsPostsort:{},statementCommentsObj:{},triggerPostsortModal:!0,postsortCommentCheckObj:{},showPostsortCommentHighlighting:!1,triggerPostsortPreventNavModal:!1,triggerMobilePostsortPreventNavModal:!1,postsortDualImageArray:[],mobilePostsortFontSize:2,mobilePostsortViewSize:72,triggerMobilePostsortHelpModal:!0,setTriggerMobilePostsortHelpModal:t=>{e(()=>({triggerMobilePostsortHelpModal:t}))},setTriggerMobilePostsortPreventNavModal:t=>{e(()=>({triggerMobilePostsortPreventNavModal:t}))},setMobilePostsortViewSize:t=>{e(()=>({mobilePostsortViewSize:t}))},setMobilePostsortFontSize:t=>{e(()=>({mobilePostsortFontSize:t}))},setPostsortDualImageArray:t=>{e(()=>({postsortDualImageArray:t}))},setResultsPostsort:t=>{e(()=>({resultsPostsort:t}))},setStatementCommentsObj:t=>{e(()=>({statementCommentsObj:t}))},setTriggerPostsortModal:t=>{e(()=>({triggerPostsortModal:t}))},setPostsortCommentCheckObj:t=>{e(()=>({postsortCommentCheckObj:t}))},setShowPostsortCommentHighlighting:t=>{e(()=>({showPostsortCommentHighlighting:t}))},setTriggerPostsortPreventNavModal:t=>{e(()=>({triggerPostsortPreventNavModal:t}))}}),G7=e=>({disableRefreshCheck:!1,displaySubmitFallback:!1,displayGoodbyeMessage:!1,triggerLocalSubmitSuccessModal:!1,triggerTransmissionOKModal:!1,triggerTransmissionFailModal:!1,submitFailNumber:0,transmittingData:!1,checkInternetConnection:!1,displayBelowButtonText:!1,setDisplayBelowButtonText:t=>{e(()=>({displayBelowButtonText:t}))},setDisableRefreshCheck:t=>{e(()=>({disableRefreshCheck:t}))},setCheckInternetConnection:t=>{e(()=>({checkInternetConnection:t}))},setTransmittingData:t=>{e(()=>({transmittingData:t}))},setTriggerTransmissionFailModal:t=>{e(()=>({triggerTransmissionFailModal:t}))},setTriggerTransmissionOKModal:t=>{e(()=>({triggerTransmissionOKModal:t}))},setTriggerLocalSubmitSuccessModal:t=>{e(()=>({triggerLocalSubmitSuccessModal:t}))},setDisplaySubmitFallback:t=>{e(()=>({displaySubmitFallback:t}))},setDisplayGoodbyeMessage:t=>{e(()=>({displayGoodbyeMessage:t}))}}),K7=e=>({triggerSurveyModal:!0,resultsSurvey:{},triggerSurveyPreventNavModal:!1,checkRequiredQuestionsComplete:!1,requiredAnswersObj:{},answersStorage:{},triggerMobileSurveyHelpModal:!0,mobileSurveyViewSize:72,setMobileSurveyViewSize:t=>{e(()=>({mobileSurveyViewSize:t}))},setTriggerMobileSurveyHelpModal:t=>{e(()=>({triggerMobileSurveyHelpModal:t}))},setAnswersStorage:t=>{e(()=>({answersStorage:t}))},setTriggerSurveyModal:t=>{e(()=>({triggerSurveyModal:t}))},setResultsSurvey:t=>{e(()=>({resultsSurvey:t}))},setTriggerSurveyPreventNavModal:t=>{e(()=>({triggerSurveyPreventNavModal:t}))},setCheckRequiredQuestionsComplete:t=>{e(()=>({checkRequiredQuestionsComplete:t}))},setRequiredAnswersObj:t=>{e(()=>({requiredAnswersObj:t}))}}),J7=e=>({thinningSide:"rightSide",showConfirmButton:!0,previousColInfo:[],isThinningFinished:!1,isConfirmationFinished:!1,triggerThinningPreventNavModal:!1,triggerConfirmationFinishedModal:!1,isLeftSideFinished:!1,isRightSideFinished:!1,currentSelectMaxValue:0,posSorted:[],negSorted:[],instructionObj:{},targetArray:[],isRightBelowThreshold:!1,isLeftBelowThreshold:!1,currentRightIteration:0,currentLeftIteration:0,isTargetArrayFilled:!1,triggerMobileThinMoveTopModal:!1,triggerMobileThinHelpModal:!0,mobileThinFontSize:2,mobileThinViewSize:68,triggerMobileThinPreventNavModal:!1,triggerMobileThinGuidanceModal:!1,triggerMobileThinScrollBottomModal:!1,triggerThinHelpModal:!0,cardFontSizeThin:12,cardHeightThin:150,setCardHeightThin:t=>{e(()=>({cardHeightThin:t}))},setCardFontSizeThin:t=>{e(()=>({cardFontSizeThin:t}))},setTriggerThinHelpModal:t=>{e(()=>({triggerThinHelpModal:t}))},setTriggerMobileThinScrollBottomModal:t=>{e(()=>({triggerMobileThinScrollBottomModal:t}))},setTriggerMobileThinGuidanceModal:t=>{e(()=>({triggerMobileThinGuidanceModal:t}))},setTriggerMobileThinPreventNavModal:t=>{e(()=>({triggerMobileThinPreventNavModal:t}))},setTriggerMobileThinHelpModal:t=>{e(()=>({triggerMobileThinHelpModal:t}))},setMobileThinViewSize:t=>{e(()=>({mobileThinViewSize:t}))},setMobileThinFontSize:t=>{e(()=>({mobileThinFontSize:t}))},setTriggerMobileThinMoveTopModal:t=>{e(()=>({triggerMobileThinMoveTopModal:t}))},setIsTargetArrayFilled:t=>{e(()=>({isTargetArrayFilled:t}))},setCurrentLeftIteration:t=>{e(()=>({currentLeftIteration:t}))},setCurrentRightIteration:t=>{e(()=>({currentRightIteration:t}))},setIsLeftBelowThreshold:t=>{e(()=>({isLeftBelowThreshold:t}))},setIsRightBelowThreshold:t=>{e(()=>({isRightBelowThreshold:t}))},setTargetArray:t=>{e(()=>({targetArray:t}))},setInstructionObj:t=>{e(()=>({instructionObj:t}))},setPosSorted:t=>{e(()=>({posSorted:t}))},setNegSorted:t=>{e(()=>({negSorted:t}))},setCurrentSelectMaxValue:t=>{e(()=>({currentSelectMaxValue:t}))},setIsLeftSideFinished:t=>{e(()=>({isLeftSideFinished:t}))},setIsRightSideFinished:t=>{e(()=>({isRightSideFinished:t}))},setTriggerConfirmationFinishedModal:t=>{e(()=>({triggerConfirmationModal:t}))},setIsConfirmationFinished:t=>{e(()=>({isConfirmationFinished:t}))},setTriggerThinningPreventNavModal:t=>{e(()=>({triggerThinningPreventNavModal:t}))},setIsThinningFinished:t=>{e(()=>({isThinningFinished:t}))},setPreviousColInfo:t=>{e(()=>({previousColInfo:t}))},setShowConfirmButton:t=>{e(()=>({showConfirmButton:t}))},setThinningSide:t=>{e(()=>({thinningSide:t}))}}),Q7=e=>({m_hasScrolledBottom:!1,setM_hasScrolledBottom:t=>{e(()=>({m_hasScrolledBottom:t}))}}),E=Om((e,t)=>({...J7(e),...V7(e),...z7(e),...U7(e),...H7(e),...W7(e),...q7(e),...G7(e),...K7(e),...Q7(e)})),Z7=e=>e.langObj,Y7=e=>e.triggerLandingModal,X7=e=>e.setTriggerLandingModal,eI=()=>{const e=X(Z7),t=E(Y7),r=E(X7),n=A(D(e.landingHelpModalHead))||"",o=A(D(e.landingHelpModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(tI,{children:n}),l.jsx("hr",{}),l.jsx(rI,{children:o})]})},tI=S.div`
  font-size: 28px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,rI=S.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,nI=e=>e.langObj,Zi=e=>{const t=X(nI),r=A(D(t.loginSubmitButtonText))||"";return l.jsx(oI,{tabindex:"0",type:"submit",onClick:e.onClick,size:e.size,width:e.width,height:e.height,children:r})},oI=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: ${e=>e.size}; // 1.5em;
  width: ${e=>e.width}; // 200px;
  height: ${e=>e.height}; // 50px;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  justify-self: right;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,iI=e=>e.langObj,aI=e=>e.configObj,sI=e=>e.displayAccessCodeWarning,lI=e=>e.displayPartIdWarning,cI=e=>e.setUserInputPartId,uI=e=>e.setUserInputAccessCode,dI=e=>e.userInputPartId,fI=e=>e.userInputAccessCode,gI=e=>e.setDisplayLandingContent,pI=e=>e.setPartId,mI=e=>e.setDisplayNextButton,hI=e=>e.setIsLoggedIn,vI=e=>e.setDisplayAccessCodeWarning,xI=e=>e.setDisplayPartIdWarning,yI=()=>{const e=X(iI),t=X(aI),r=E(sI),n=E(lI),o=E(cI),i=E(uI),a=E(dI),s=E(fI),c=E(gI),u=E(pI),d=E(mI),f=E(hI),g=E(vI),p=E(xI),m=A(D(e.loginWelcomeText))||"",h=A(D(e.loginHeaderText))||"",x=A(D(e.loginPartIdText))||"",v=A(D(e.partIdWarning))||"",y=A(D(e.accessCodeWarning))||"",C=A(D(e.accessInputText))||"",T=I=>{o(I.target.value)},N=I=>{i(I.target.value)};P.useEffect(()=>{d(!1);const I=$=>{if($.key==="Enter")try{let w=!1,U=!1;const L=t.accessCode;a.length>1?w=!0:w=!1,s===L&&(U=!0),U&&w?(c(!0),u(a),localStorage.setItem("partId",a),d(!0),f(!0)):U===!1?(console.log("no access code"),g(!0),d(!1),setTimeout(()=>{g(!1)},5e3)):w===!1&&(p(!0),d(!1),console.log("no id"),setTimeout(()=>{p(!1)},5e3))}catch(w){console.log(w)}};return window.addEventListener("keyup",I),()=>window.removeEventListener("keyup",I)},[c,d,f,t.accessCode,g,s,u,p,a]);const j=()=>{try{let I=!1,$=!1;const w=t.accessCode;a.length>1?I=!0:I=!1,s===w&&($=!0),$&&I?(c(!0),u(a),localStorage.setItem("partId",a),d(!0),f(!0)):$===!1?(console.log("no access code"),g(!0),d(!1),setTimeout(()=>{g(!1)},5e3)):I===!1&&(p(!0),d(!1),console.log("no id"),setTimeout(()=>{p(!1)},5e3))}catch(I){console.log(I)}};return l.jsxs(ae.Fragment,{children:[l.jsx(SI,{children:m}),l.jsxs(bI,{children:[l.jsxs("div",{children:[l.jsx("h2",{children:h}),l.jsx(CI,{})]}),l.jsxs("div",{children:[l.jsx("h3",{children:x}),l.jsxs(i1,{children:[l.jsx(o1,{onChange:T,type:"text",autoFocus:!0,autoCapitalize:"none"}),n&&l.jsx(tf,{children:v})]})]}),l.jsxs("div",{children:[l.jsx("h3",{children:C}),l.jsxs(i1,{children:[l.jsx(o1,{onChange:N,type:"text",autoCapitalize:"none"}),r&&l.jsx(tf,{children:y})]})]}),l.jsx(Zi,{onClick:j,size:"1.5em",width:"200px",height:"50px"})]}),l.jsx(tf,{})]})},bI=S.div`
  display: grid;
  grid-template-rows: 23% 28% 28% 1fr;
  margin-top: 50px;
  width: 800px;
  padding: 20px;
  min-height: 400px;
  margin-bottom: 200px;
  border: 2px solid black;
  justify-self: center;
  background-color: whitesmoke;
`,SI=S.div`
  width: 900px;
  font-size: 25px;
  line-height: 1.3em;
  padding-left: 35px;
`,CI=S.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,o1=S.input`
  margin-top: 5px;
  width: 400px;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,i1=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,tf=S.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,wI=e=>e.langObj,jI=e=>e.configObj,TI=e=>e.displayAccessCodeWarning,OI=e=>e.displayPartIdWarning,II=e=>e.setUserInputPartId,PI=e=>e.setUserInputAccessCode,EI=e=>e.userInputPartId,$I=e=>e.userInputAccessCode,NI=e=>e.setDisplayLandingContent,kI=e=>e.setPartId,MI=e=>e.setDisplayNextButton,AI=e=>e.setIsLoggedIn,DI=e=>e.setDisplayAccessCodeWarning,RI=e=>e.setDisplayPartIdWarning,LI=()=>{const e=X(wI),t=X(jI),r=E(TI),n=E(OI),o=E(II),i=E(PI),a=E(EI),s=E($I),c=E(NI),u=E(kI),d=E(MI),f=E(AI),g=E(DI),p=E(RI),m=A(D(e.loginWelcomeText))||"",h=A(D(e.loginHeaderText))||"",x=A(D(e.loginPartIdText))||"",v=A(D(e.partIdWarning))||"",y=A(D(e.accessCodeWarning))||"",C=A(D(e.accessInputText))||"",T=I=>{o(I.target.value)},N=I=>{i(I.target.value)};P.useEffect(()=>{const I=$=>{if($.key==="Enter")try{let w=!1,U=!1;const L=t.accessCode;a.length>1?w=!0:w=!1,s===L&&(U=!0),U&&w?(c(!0),u(a),localStorage.setItem("partId",a),d(!0),f(!0)):U===!1?(console.log("no access code"),g(!0),d(!1),setTimeout(()=>{g(!1)},5e3)):w===!1&&(p(!0),d(!1),console.log("no id"),setTimeout(()=>{p(!1)},5e3))}catch(w){console.log(w)}};return window.addEventListener("keyup",I),()=>window.removeEventListener("keyup",I)},[c,d,f,t.accessCode,g,s,u,p,a]);const j=()=>{try{let I=!1,$=!1;const w=t.accessCode;a.length>1?I=!0:I=!1,s===w&&($=!0),$&&I?(c(!0),u(a),localStorage.setItem("partId",a),d(!0),f(!0)):$===!1?(console.log("no access code"),g(!0),d(!1),setTimeout(()=>{g(!1)},5e3)):I===!1&&(p(!0),d(!1),console.log("no id"),setTimeout(()=>{p(!1)},5e3))}catch(I){console.log(I)}};return l.jsxs(ae.Fragment,{children:[l.jsx(_I,{children:m}),l.jsxs(FI,{children:[l.jsxs("div",{children:[l.jsx(zI,{children:h}),l.jsx(BI,{})]}),l.jsxs(HI,{children:[l.jsx(l1,{children:x}),l.jsxs(s1,{children:[l.jsx(a1,{onChange:T,type:"text",autoCapitalize:"none",autoFocus:!0}),n&&l.jsx(rf,{children:v})]})]}),l.jsxs(UI,{children:[l.jsx(l1,{children:C}),l.jsxs(s1,{children:[l.jsx(a1,{onChange:N,type:"text",autoCapitalize:"none"}),r&&l.jsx(rf,{children:y})]})]}),l.jsx(Zi,{size:"1.0em",width:"120px",height:"30px",onClick:j})]}),l.jsx(rf,{})]})},FI=S.div`
  display: grid;
  grid-template-rows: 23% 28% 28% 1fr;
  margin-top: 30px;
  width: 96vw;
  padding: 20px;
  /* min-height: 400px; */
  margin-bottom: 10px;
  border: 2px solid black;
  justify-self: center;
  border-radius: 5px;
  background-color: whitesmoke;
`,_I=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  font-size: 16px;
  line-height: 1.3em;
  /* border: 2px solid red; */
  padding: 10px;
  /* padding-left: 35px; */
`,BI=S.hr`
  margin-top: 5px;
  margin-bottom: 5px;
`,a1=S.input`
  margin-top: 5px;
  width: 80vw;
  height: 30px;
  font-size: 1em;
  padding-left: 5px;
`,s1=S.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`,rf=S.div`
  color: red;
  font-weight: bold;
  font-size: 1em;
  margin-left: 10px;
`,zI=S.span`
  font-size: 1.1em;
  font-weight: bold;
`,l1=S.span`
  font-size: 0.8em;
  font-weight: bold;
`,HI=S.div`
  height: 140px;
`,UI=S.div`
  margin-top: 10px;
  height: 80px;
`,VI=e=>e.langObj,WI=e=>e.displayPartIdWarning,qI=e=>e.setUserInputPartId,GI=e=>e.userInputPartId,KI=e=>e.setDisplayLandingContent,JI=e=>e.setPartId,QI=e=>e.setDisplayNextButton,ZI=e=>e.setIsLoggedIn,YI=e=>e.setDisplayPartIdWarning,XI=()=>{const e=X(VI),t=E(WI),r=E(qI),n=E(GI),o=E(KI),i=E(JI),a=E(QI),s=E(ZI),c=E(YI),u=A(D(e.loginHeaderText))||"",d=A(D(e.loginPartIdText))||"",f=A(D(e.partIdWarning))||"",g=m=>{r(m.target.value)};P.useEffect(()=>{a(!1);const m=h=>{if(h.key==="Enter"){console.log("Enter");let x=!1;n.length>0&&(x=!0,o(!0),i(n),localStorage.setItem("partId",n),a(!0),s(!0)),x===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))}};return window.addEventListener("keyup",m),()=>window.removeEventListener("keyup",m)},[o,i,a,s,n,c]);const p=m=>{let h=!1;n.length>0&&(h=!0,o(!0),i(n),localStorage.setItem("partId",n),a(!0),s(!0)),h===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))};return l.jsxs(eP,{children:[l.jsxs("div",{children:[l.jsx(aP,{children:u}),l.jsx(tP,{})]}),l.jsxs("div",{children:[l.jsx(iP,{children:d}),l.jsxs(nP,{children:[l.jsx(rP,{onChange:g,type:"text",autoFocus:!0,autoCapitalize:"none"}),t&&l.jsx(oP,{children:f})]})]}),l.jsx(Zi,{onClick:p,size:"1.0em",width:"100px",height:"30px"})]})},eP=S.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 50px;
  width: 90vw;
  padding: 1.5vw;
  min-height: 300px;
  margin-bottom: 100px;
  border: 2px solid black;
  justify-self: center;
  background-color: whitesmoke;
  border-radius: 5px;
`,tP=S.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,rP=S.input`
  margin-top: 5px;
  width: 85vw;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,nP=S.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`,oP=S.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,iP=S.span`
  font-size: 0.9em;
  font-weight: bold;
`,aP=S.span`
  font-size: 1.5em;
  font-weight: bold;
`,sP=e=>e.langObj,lP=e=>e.configObj,cP=e=>e.displayAccessCodeWarning,uP=e=>e.userInputAccessCode,dP=e=>e.setDisplayLandingContent,fP=e=>e.setDisplayNextButton,gP=e=>e.setIsLoggedIn,pP=e=>e.setUserInputAccessCode,mP=e=>e.setDisplayAccessCodeWarning,hP=()=>{const e=X(sP),t=X(lP),r=E(cP),n=E(uP),o=E(dP),i=E(fP),a=E(gP),s=E(pP),c=E(mP),u=A(D(e.loginHeaderText))||"",d=A(D(e.accessInputText))||"",f=A(D(e.accessCodeWarning))||"",g=m=>{s(m.target.value)};P.useEffect(()=>{i(!1);const m=h=>{if(h.key==="Enter"){let x=!1;const v=t.accessCode;n===v&&(x=!0,o(!0),i(!0),a(!0)),x===!1&&(c(!0),setTimeout(()=>{c(!1)},3e3))}};return window.addEventListener("keyup",m),()=>window.removeEventListener("keyup",m)},[o,i,a,t.accessCode,c,n]);const p=()=>{let m=!1;const h=t.accessCode;n===h&&(m=!0,o(!0),i(!0),a(!0)),m===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))};return l.jsxs(vP,{children:[l.jsxs("div",{children:[l.jsx(wP,{children:u}),l.jsx(xP,{})]}),l.jsxs("div",{children:[l.jsx(CP,{children:d}),l.jsx("form",{autoComplete:"none",children:l.jsxs(bP,{children:[l.jsx(yP,{onChange:g,type:"text",autoFocus:!0,autoCapitalize:"none"}),r&&l.jsx(SP,{children:f})]})})]}),l.jsx(Zi,{onClick:p,size:"1em",width:"100px",height:"30px"})]})},vP=S.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 50px;
  width: 90vw;
  padding: 1.5vw;
  min-height: 300px;
  margin-bottom: 200px;
  border: 2px solid black;
  justify-self: center;
  background-color: whitesmoke;
  border-radius: 5px;
`,xP=S.hr`
  margin-top: 5px;
  margin-bottom: 30px;
  width: 80vw;
`,yP=S.input`
  margin-top: 5px;
  width: 85vw;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,bP=S.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`,SP=S.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,CP=S.span`
  font-size: 0.9em;
  font-weight: bold;
`,wP=S.span`
  font-size: 1.4em;
  font-weight: bold;
`,jP=e=>e.langObj,TP=e=>e.displayPartIdWarning,OP=e=>e.setUserInputPartId,IP=e=>e.userInputPartId,PP=e=>e.setDisplayLandingContent,EP=e=>e.setPartId,$P=e=>e.setDisplayNextButton,NP=e=>e.setIsLoggedIn,kP=e=>e.setDisplayPartIdWarning,MP=()=>{const e=X(jP),t=E(TP),r=E(OP),n=E(IP),o=E(PP),i=E(EP),a=E($P),s=E(NP),c=E(kP),u=A(D(e.loginHeaderText))||"",d=A(D(e.loginPartIdText))||"",f=A(D(e.partIdWarning))||"",g=m=>{r(m.target.value)};P.useEffect(()=>{const m=h=>{if(h.key==="Enter"){console.log("Enter");let x=!1;n.length>0&&(x=!0,o(!0),i(n),localStorage.setItem("partId",n),a(!0),s(!0)),x===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))}};return window.addEventListener("keyup",m),()=>window.removeEventListener("keyup",m)},[o,i,a,s,n,c]);const p=()=>{let m=!1;n.length>0&&(m=!0,o(!0),i(n),localStorage.setItem("partId",n),a(!0),s(!0)),m===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))};return l.jsxs(AP,{children:[l.jsxs("div",{children:[l.jsx("h2",{children:u}),l.jsx(DP,{})]}),l.jsxs("div",{children:[l.jsx("h3",{children:d}),l.jsxs(LP,{children:[l.jsx(RP,{onChange:g,type:"text",autoFocus:!0}),t&&l.jsx(FP,{children:f})]})]}),l.jsx(Zi,{onClick:p,size:"1.5em",width:"200px",height:"50px"})]})},AP=S.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 50px;
  width: 50vw;
  padding: 1.5vw;
  min-height: 300px;
  margin-bottom: 200px;
  border: 2px solid black;
  justify-self: center;
  background-color: whitesmoke;
`,DP=S.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,RP=S.input`
  margin-top: 5px;
  width: 400px;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,LP=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,FP=S.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,_P=e=>e.langObj,BP=e=>e.configObj,zP=e=>e.displayAccessCodeWarning,HP=e=>e.userInputAccessCode,UP=e=>e.setDisplayLandingContent,VP=e=>e.setDisplayNextButton,WP=e=>e.setIsLoggedIn,qP=e=>e.setUserInputAccessCode,GP=e=>e.setDisplayAccessCodeWarning,KP=()=>{const e=X(_P),t=X(BP),r=E(zP),n=E(HP),o=E(UP),i=E(VP),a=E(WP),s=E(qP),c=E(GP),u=A(D(e.loginHeaderText))||"",d=A(D(e.accessInputText))||"",f=A(D(e.accessCodeWarning))||"",g=m=>{s(m.target.value)};P.useEffect(()=>{i(!1);const m=h=>{if(h.key==="Enter"){let x=!1;const v=t.accessCode;n===v&&(x=!0,o(!0),i(!0),a(!0)),x===!1&&(c(!0),setTimeout(()=>{c(!1)},3e3))}};return window.addEventListener("keyup",m),()=>window.removeEventListener("keyup",m)},[o,i,a,t.accessCode,c,n]);const p=()=>{let m=!1;const h=t.accessCode;n===h&&(m=!0,o(!0),i(!0),a(!0)),m===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))};return l.jsxs(JP,{children:[l.jsxs("div",{children:[l.jsx("h2",{children:u}),l.jsx(QP,{})]}),l.jsxs("div",{children:[l.jsx("h3",{children:d}),l.jsxs(YP,{children:[l.jsx(ZP,{onChange:g,type:"text",autoFocus:!0,"data-testid":"accessCodeInputDiv"}),r&&l.jsx(XP,{children:f})]})]}),l.jsx(Zi,{"data-testid":"submitButtonAccess",onClick:p,size:"1.5em",width:"200px",height:"50px"})]})},JP=S.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  margin-top: 50px;
  width: 50vw;
  padding: 1.5vw;
  min-height: 300px;
  margin-bottom: 200px;
  border: 2px solid black;
  justify-self: center;
  background-color: whitesmoke;
`,QP=S.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,ZP=S.input`
  margin-top: 5px;
  width: 400px;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,YP=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,XP=S.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`;function eE(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return!0;var r=e.indexOf("Trident/");return r>0}const tE=()=>eE(),rE=e=>e.langObj,nE=()=>{const e=X(rE),t=A(D(e.ieWarningHeaderText))||"",r=A(D(e.ieWarningText))||"";return l.jsxs(oE,{children:[l.jsx("div",{children:l.jsxs("center",{children:[l.jsx("h2",{"data-testid":"warningTextDiv",children:t}),l.jsx(iE,{})]})}),l.jsx("div",{children:l.jsx(aE,{"data-testid":"warningTextDiv2",children:l.jsx("h3",{children:r})})})]})},oE=S.div`
  //  display: grid;
  //   grid-template-rows: 1fr 1fr 1fr;
  margin-top: 50px;
  width: 50vw;
  padding: 2vw;
  min-height: 250px;
  margin-bottom: 20px;
  border: 2px solid black;
  justify-self: center;
  background-color: lightgoldenrodyellow;
  border-radius: 50px;
`,iE=S.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,aE=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
`,Vw=(e="")=>{let t;return e.includes("?")?e.split("=")[1]:t},sE=e=>e.langObj,lE=e=>e.localParticipantName,cE=e=>e.localUsercode,uE=e=>e.setLocalParticipantName,dE=e=>e.setLocalUsercode,fE=e=>e.setLocalPartIdWarning1,gE=e=>e.setLocalPartIdWarning2,pE=e=>e.setTriggerLocalSubmitSuccessModal,mE=e=>e.setResults,hE=e=>e.results,vE=e=>{const t=X(sE),r=E(lE),n=E(cE),o=E(uE),i=E(dE);let a=E(fE),s=E(gE);const c=E(pE),u=E(mE),d=E(hE),f=A(D(t.localStartButtonText))||"",g=P.useCallback(()=>{let T=!1,N,j;return r.length===0?(N=!1,a(!0)):(a(!1),N=!0,localStorage.setItem("localParticipantName",r)),n.length===0?(j=!1,s(!0)):(s(!1),j=!0,localStorage.setItem("localUsercode",n)),N===!0&&j===!0?T=!0:T=!1,T},[a,s,r,n]),{history:p,location:m,match:h,staticContext:x,to:v,onClick:y,...C}=e;return P.useEffect(()=>{const T=N=>{u(d),N.key==="Enter"&&g()&&p.push("/presort")};return window.addEventListener("keyup",T),()=>window.removeEventListener("keyup",T)},[p,g,d,u]),P.useEffect(()=>{o(""),i(""),a(!1),s(!1)},[a,s,o,i]),l.jsx(yE,{...C,onClick:T=>{y&&y(T),g()&&p.push(v),c(!1)},tabindex:"3",children:f})},xE=Qi(vE),yE=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  justify-self: right;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,bE=e=>e.langObj,SE=e=>{const t=X(bE),r=A(D(t.localDeleteButtonText))||"";return l.jsx(CE,{tabindex:"0",type:"submit",onClick:e.onClick,children:r})},CE=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: 200px;
  height: 50px;
  justify-self: right;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,wE=e=>e.langObj,jE=e=>{const t=X(wE),r=A(D(t.localDownloadButtonText))||"";return l.jsx(TE,{tabindex:"0",type:"submit",onClick:e.onClick,children:r})},TE=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  justify-self: right;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`;var OE=Object.defineProperty,c1=Object.getOwnPropertySymbols,IE=Object.prototype.hasOwnProperty,PE=Object.prototype.propertyIsEnumerable,u1=(e,t,r)=>t in e?OE(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,oi=(e,t)=>{for(var r in t||(t={}))IE.call(t,r)&&u1(e,r,t[r]);if(c1)for(var r of c1(t))PE.call(t,r)&&u1(e,r,t[r]);return e};const zc=e=>t=>{try{const r=e(t);return r instanceof Promise?r:{then(n){return zc(n)(r)},catch(n){return this}}}catch(r){return{then(n){return this},catch(n){return zc(n)(r)}}}},EE=(e,t)=>(r,n,o)=>{let i=oi({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:x=>x,version:0,merge:(x,v)=>oi(oi({},v),x)},t);(i.blacklist||i.whitelist)&&console.warn(`The ${i.blacklist?"blacklist":"whitelist"} option is deprecated and will be removed in the next version. Please use the 'partialize' option instead.`);let a=!1;const s=new Set,c=new Set;let u;try{u=i.getStorage()}catch{}if(u)u.removeItem||console.warn(`[zustand persist middleware] The given storage for item '${i.name}' does not contain a 'removeItem' method, which will be required in v4.`);else return e((...x)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),r(...x)},n,o);const d=zc(i.serialize),f=()=>{const x=i.partialize(oi({},n()));i.whitelist&&Object.keys(x).forEach(C=>{var T;!((T=i.whitelist)!=null&&T.includes(C))&&delete x[C]}),i.blacklist&&i.blacklist.forEach(C=>delete x[C]);let v;const y=d({state:x,version:i.version}).then(C=>u.setItem(i.name,C)).catch(C=>{v=C});if(v)throw v;return y},g=o.setState;o.setState=(x,v)=>{g(x,v),f()};const p=e((...x)=>{r(...x),f()},n,o);let m;const h=()=>{var x;if(!u)return;a=!1,s.forEach(y=>y(n()));const v=((x=i.onRehydrateStorage)==null?void 0:x.call(i,n()))||void 0;return zc(u.getItem.bind(u))(i.name).then(y=>{if(y)return i.deserialize(y)}).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==i.version){if(i.migrate)return i.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var C;return m=i.merge(y,(C=n())!=null?C:p),r(m,!0),f()}).then(()=>{v==null||v(m,void 0),a=!0,c.forEach(y=>y(m))}).catch(y=>{v==null||v(void 0,y)})};return o.persist={setOptions:x=>{i=oi(oi({},i),x),x.getStorage&&(u=x.getStorage())},clearStorage:()=>{var x;(x=u==null?void 0:u.removeItem)==null||x.call(u,i.name)},rehydrate:()=>h(),hasHydrated:()=>a,onHydrate:x=>(s.add(x),()=>{s.delete(x)}),onFinishHydration:x=>(c.add(x),()=>{c.delete(x)})},h(),m||p},io=Om(EE(e=>({localStoredQsorts:{},hasDownloadedQsorts:!1,setHasDownloadedQsorts:t=>{e(()=>({hasDownloadedQsorts:t}))},setLocalStoredQsorts:t=>{e(()=>({localStoredQsorts:t}))}}),{name:"sorts-storage"})),$E=e=>e.langObj,NE=e=>e.setLocalDeleteModal,kE=e=>e.localStoredQsorts,ME=e=>e.setLocalStoredQsorts,AE=e=>{const t=E(NE),r=X($E),n=io(ME),o=io(kE),i=A(D(r.localDeleteButtonText))||"",a=()=>{console.log("deleted localStorage");const s=`${new Date().getTime()}`;localStorage.setItem(s,JSON.stringify(o)),n({}),t(!1)};return l.jsx(DE,{tabindex:"0",type:"submit",onClick:a,children:i})},DE=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: 200px;
  height: 50px;
  justify-self: right;
  align-self: end;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: red;

  &:hover {
  }

  &:focus {
  }
`,RE=e=>e.langObj,LE=e=>e.triggerLocalDeleteModal,FE=e=>e.setLocalDeleteModal,_E=()=>{const e=X(RE),t=E(LE),r=E(FE),n=A(D(e.localDeleteModalHead))||"",o=A(D(e.localDeleteModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(BE,{children:n}),l.jsx("hr",{}),l.jsx(zE,{children:o}),l.jsx(HE,{children:l.jsx(AE,{})})]})},BE=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,zE=S.div`
  margin-top: 15px;
`,HE=S.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`,UE=e=>e.langObj,VE=e=>e.triggerSaveBeforeDeleteModal,WE=e=>e.setTriggerSaveBeforeDeleteModal,qE=()=>{const e=X(UE),t=E(VE),r=E(WE),n=A(D(e.localSaveBeforeDeleteModalHeader))||"",o=A(D(e.localSaveBeforeDeleteModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(GE,{children:n}),l.jsx("hr",{}),l.jsx(KE,{children:o})]})},GE=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,KE=S.div`
  margin-top: 15px;
`;function JE(e,t){console.log("download called");var r="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),n=document.createElement("a");n.setAttribute("href",r),n.setAttribute("download",t+".json"),document.body.appendChild(n),n.click(),n.remove()}const QE=e=>e.displayLocalPartIdWarning1,ZE=e=>e.setLocalPartIdWarning1,YE=e=>e.displayLocalPartIdWarning2,XE=e=>e.setLocalPartIdWarning2,e$=e=>e.setLocalDeleteModal,t$=e=>e.langObj,r$=e=>e.configObj,n$=e=>e.setLocalParticipantName,o$=e=>e.setLocalUsercode,i$=e=>e.localStoredQsorts,a$=e=>e.setHasDownloadedQsorts,s$=e=>e.hasDownloadedQsorts,l$=e=>e.setTriggerSaveBeforeDeleteModal,c$=()=>{const e=X(t$),t=X(r$),r=E(QE),n=E(ZE),o=E(YE),i=E(XE),a=E(e$),s=E(n$),c=E(o$),u=io(i$),d=io(s$),f=io(a$),g=E(l$),p=A(D(e.localHeader))||"",m=A(D(e.partIdText))||"",h=A(D(e.partIdWarning))||"",x=A(D(e.usercodeText))||"",v=A(D(e.localParticipantsText))||"",C=`${A(D(e.storedQsortsHeaderText))||""}: ${Object.keys(u).length} ${v}`,T=$=>{s($.target.value),n(!1)},N=$=>{c($.target.value),localStorage.setItem("urlUsercode",""),i(!1)},j=$=>{d?a(!0):g(!0)},I=$=>{const w=t.studyTitle,U=new Date,L=("0"+U.getFullYear()).slice(-2)+"-"+("0"+(U.getMonth()+1)).slice(-2)+"-"+U.getDate()+"_"+("0"+U.getHours()).slice(-2)+"-"+("0"+U.getMinutes()).slice(-2)+"-"+("0"+U.getSeconds()).slice(-2),q=w+"_"+L;Object.keys(u).length>0&&JE(u,q),f(!0)};return l.jsxs(l.Fragment,{children:[l.jsxs(u$,{children:[l.jsx(_E,{}),l.jsx(qE,{}),l.jsxs("div",{children:[l.jsx("h2",{children:p}),l.jsx(f$,{})]}),l.jsxs("div",{children:[l.jsx("h3",{children:m}),l.jsxs(f1,{children:[l.jsx(d1,{tabindex:"0",onChange:T,type:"text"}),r&&l.jsx(g1,{children:h})]})]}),l.jsxs("div",{children:[" ",l.jsx("h3",{children:x}),l.jsxs(f1,{children:[l.jsx(d1,{tabindex:"1",onChange:N,type:"text"}),o&&l.jsx(g1,{children:h})]})]}),l.jsx(xE,{tabindex:"3",to:"/presort"})]}),l.jsxs(d$,{children:[l.jsx(g$,{children:l.jsx("div",{children:C})}),l.jsxs(p$,{children:[l.jsx(SE,{onClick:j,children:"Delete"}),l.jsx(jE,{onClick:I,children:"Download"})]})]})]})},u$=S.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  margin-top: 10px;
  width: 70vw;
  padding: 1.5vw;
  min-height: 350px;
  margin-bottom: 0px;
  border: 2px solid black;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  justify-self: center;
  background-color: whitesmoke;
`,d$=S.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  margin-top: 0px;
  width: 70vw;
  padding: 1.5vw;
  min-height: 100px;
  margin-bottom: 100px;
  border-right: 2px solid black;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  justify-self: center;
  background-color: whitesmoke;
`,f$=S.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,d1=S.input`
  margin-top: 5px;
  width: 400px;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,f1=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,g1=S.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,g$=S.div`
  font-size: 25px;
  font-weight: bold;
`,p$=S.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,m$=e=>e.length===0?void 0:Math.ceil((e.length-3)/2);function h$(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),r=r>o?o:r,r<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+t];return i}var Im=h$,v$=/\s/;function x$(e){for(var t=e.length;t--&&v$.test(e.charAt(t)););return t}var y$=x$,b$=y$,S$=/^\s+/;function C$(e){return e&&e.slice(0,b$(e)+1).replace(S$,"")}var w$=C$;function j$(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var bo=j$,T$=typeof nt=="object"&&nt&&nt.Object===Object&&nt,Ww=T$,O$=Ww,I$=typeof self=="object"&&self&&self.Object===Object&&self,P$=O$||I$||Function("return this")(),on=P$,E$=on,$$=E$.Symbol,Yi=$$,p1=Yi,qw=Object.prototype,N$=qw.hasOwnProperty,k$=qw.toString,Ia=p1?p1.toStringTag:void 0;function M$(e){var t=N$.call(e,Ia),r=e[Ia];try{e[Ia]=void 0;var n=!0}catch{}var o=k$.call(e);return n&&(t?e[Ia]=r:delete e[Ia]),o}var A$=M$,D$=Object.prototype,R$=D$.toString;function L$(e){return R$.call(e)}var F$=L$,m1=Yi,_$=A$,B$=F$,z$="[object Null]",H$="[object Undefined]",h1=m1?m1.toStringTag:void 0;function U$(e){return e==null?e===void 0?H$:z$:h1&&h1 in Object(e)?_$(e):B$(e)}var Ls=U$;function V$(e){return e!=null&&typeof e=="object"}var Yo=V$,W$=Ls,q$=Yo,G$="[object Symbol]";function K$(e){return typeof e=="symbol"||q$(e)&&W$(e)==G$}var Wu=K$,J$=w$,v1=bo,Q$=Wu,x1=NaN,Z$=/^[-+]0x[0-9a-f]+$/i,Y$=/^0b[01]+$/i,X$=/^0o[0-7]+$/i,eN=parseInt;function tN(e){if(typeof e=="number")return e;if(Q$(e))return x1;if(v1(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=v1(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=J$(e);var r=Y$.test(e);return r||X$.test(e)?eN(e.slice(2),r?2:8):Z$.test(e)?x1:+e}var Gw=tN,rN=Gw,y1=1/0,nN=17976931348623157e292;function oN(e){if(!e)return e===0?e:0;if(e=rN(e),e===y1||e===-y1){var t=e<0?-1:1;return t*nN}return e===e?e:0}var iN=oN,aN=iN;function sN(e){var t=aN(e),r=t%1;return t===t?r?t-r:t:0}var Kw=sN,lN=Im,cN=Kw;function uN(e,t,r){var n=e==null?0:e.length;return n?(t=r||t===void 0?1:cN(t),t=n-t,lN(e,t<0?0:t,n)):[]}var dN=uN;const fN=ht(dN);var gN=Im,pN=Kw;function mN(e,t,r){return e&&e.length?(t=r||t===void 0?1:pN(t),gN(e,0,t<0?0:t)):[]}var hN=mN;const vN=ht(hN),xN=(e,t)=>{let r=fN(e,t),n=vN(e,t);return r.reverse(),[n,r]},yN=(e,t)=>{let r=[];return e.forEach((n,o)=>{let i=[];i.push(`column${n}`),i.push(t[o]),r.push(i)}),r};function So(){const[e,t]=P.useState(window.screen.orientation.type);return P.useEffect(()=>{const r=()=>t(window.screen.orientation.type);return window.addEventListener("orientationchange",r),()=>window.removeEventListener("orientationchange",r)},[]),e}function bN(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}var Jw=bN,SN=Math.floor,CN=Math.random;function wN(e,t){return e+SN(CN()*(t-e+1))}var jN=wN,TN=jN;function ON(e,t){var r=-1,n=e.length,o=n-1;for(t=t===void 0?n:t;++r<t;){var i=TN(r,o),a=e[i];e[i]=e[r],e[r]=a}return e.length=t,e}var Qw=ON,IN=Jw,PN=Qw;function EN(e){return PN(IN(e))}var $N=EN;function NN(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var Zw=NN,kN=Zw;function MN(e,t){return kN(t,function(r){return e[r]})}var AN=MN;function DN(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var RN=DN,LN=Ls,FN=Yo,_N="[object Arguments]";function BN(e){return FN(e)&&LN(e)==_N}var zN=BN,b1=zN,HN=Yo,Yw=Object.prototype,UN=Yw.hasOwnProperty,VN=Yw.propertyIsEnumerable,WN=b1(function(){return arguments}())?b1:function(e){return HN(e)&&UN.call(e,"callee")&&!VN.call(e,"callee")},Pm=WN,qN=Array.isArray,zr=qN,Hc={exports:{}};function GN(){return!1}var KN=GN;Hc.exports;(function(e,t){var r=on,n=KN,o=t&&!t.nodeType&&t,i=o&&!0&&e&&!e.nodeType&&e,a=i&&i.exports===o,s=a?r.Buffer:void 0,c=s?s.isBuffer:void 0,u=c||n;e.exports=u})(Hc,Hc.exports);var Em=Hc.exports,JN=9007199254740991,QN=/^(?:0|[1-9]\d*)$/;function ZN(e,t){var r=typeof e;return t=t??JN,!!t&&(r=="number"||r!="symbol"&&QN.test(e))&&e>-1&&e%1==0&&e<t}var $m=ZN,YN=9007199254740991;function XN(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=YN}var Nm=XN,ek=Ls,tk=Nm,rk=Yo,nk="[object Arguments]",ok="[object Array]",ik="[object Boolean]",ak="[object Date]",sk="[object Error]",lk="[object Function]",ck="[object Map]",uk="[object Number]",dk="[object Object]",fk="[object RegExp]",gk="[object Set]",pk="[object String]",mk="[object WeakMap]",hk="[object ArrayBuffer]",vk="[object DataView]",xk="[object Float32Array]",yk="[object Float64Array]",bk="[object Int8Array]",Sk="[object Int16Array]",Ck="[object Int32Array]",wk="[object Uint8Array]",jk="[object Uint8ClampedArray]",Tk="[object Uint16Array]",Ok="[object Uint32Array]",Xe={};Xe[xk]=Xe[yk]=Xe[bk]=Xe[Sk]=Xe[Ck]=Xe[wk]=Xe[jk]=Xe[Tk]=Xe[Ok]=!0;Xe[nk]=Xe[ok]=Xe[hk]=Xe[ik]=Xe[vk]=Xe[ak]=Xe[sk]=Xe[lk]=Xe[ck]=Xe[uk]=Xe[dk]=Xe[fk]=Xe[gk]=Xe[pk]=Xe[mk]=!1;function Ik(e){return rk(e)&&tk(e.length)&&!!Xe[ek(e)]}var Pk=Ik;function Ek(e){return function(t){return e(t)}}var km=Ek,Uc={exports:{}};Uc.exports;(function(e,t){var r=Ww,n=t&&!t.nodeType&&t,o=n&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===n,a=i&&r.process,s=function(){try{var c=o&&o.require&&o.require("util").types;return c||a&&a.binding&&a.binding("util")}catch{}}();e.exports=s})(Uc,Uc.exports);var Mm=Uc.exports,$k=Pk,Nk=km,S1=Mm,C1=S1&&S1.isTypedArray,kk=C1?Nk(C1):$k,Xw=kk,Mk=RN,Ak=Pm,Dk=zr,Rk=Em,Lk=$m,Fk=Xw,_k=Object.prototype,Bk=_k.hasOwnProperty;function zk(e,t){var r=Dk(e),n=!r&&Ak(e),o=!r&&!n&&Rk(e),i=!r&&!n&&!o&&Fk(e),a=r||n||o||i,s=a?Mk(e.length,String):[],c=s.length;for(var u in e)(t||Bk.call(e,u))&&!(a&&(u=="length"||o&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Lk(u,c)))&&s.push(u);return s}var e5=zk,Hk=Object.prototype;function Uk(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||Hk;return e===r}var Am=Uk;function Vk(e,t){return function(r){return e(t(r))}}var t5=Vk,Wk=t5,qk=Wk(Object.keys,Object),Gk=qk,Kk=Am,Jk=Gk,Qk=Object.prototype,Zk=Qk.hasOwnProperty;function Yk(e){if(!Kk(e))return Jk(e);var t=[];for(var r in Object(e))Zk.call(e,r)&&r!="constructor"&&t.push(r);return t}var Xk=Yk,e9=Ls,t9=bo,r9="[object AsyncFunction]",n9="[object Function]",o9="[object GeneratorFunction]",i9="[object Proxy]";function a9(e){if(!t9(e))return!1;var t=e9(e);return t==n9||t==o9||t==r9||t==i9}var r5=a9,s9=r5,l9=Nm;function c9(e){return e!=null&&l9(e.length)&&!s9(e)}var Dm=c9,u9=e5,d9=Xk,f9=Dm;function g9(e){return f9(e)?u9(e):d9(e)}var Xi=g9,p9=AN,m9=Xi;function h9(e){return e==null?[]:p9(e,m9(e))}var n5=h9;const li=ht(n5);var v9=Qw,x9=n5;function y9(e){return v9(x9(e))}var b9=y9,S9=$N,C9=b9,w9=zr;function j9(e){var t=w9(e)?S9:C9;return t(e)}var T9=j9;const qu=ht(T9);var Pl,O9=new Uint8Array(16);function I9(){if(!Pl&&(Pl=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Pl))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Pl(O9)}const P9=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function E9(e){return typeof e=="string"&&P9.test(e)}var Ot=[];for(var nf=0;nf<256;++nf)Ot.push((nf+256).toString(16).substr(1));function $9(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=(Ot[e[t+0]]+Ot[e[t+1]]+Ot[e[t+2]]+Ot[e[t+3]]+"-"+Ot[e[t+4]]+Ot[e[t+5]]+"-"+Ot[e[t+6]]+Ot[e[t+7]]+"-"+Ot[e[t+8]]+Ot[e[t+9]]+"-"+Ot[e[t+10]]+Ot[e[t+11]]+Ot[e[t+12]]+Ot[e[t+13]]+Ot[e[t+14]]+Ot[e[t+15]]).toLowerCase();if(!E9(r))throw TypeError("Stringified UUID is invalid");return r}function te(e,t,r){e=e||{};var n=e.random||(e.rng||I9)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,$9(n)}const N9=e=>e.langObj,k9=e=>e.configObj,M9=e=>e.dataLoaded,A9=e=>e.setCurrentPage,D9=e=>e.setProgressScore,R9=e=>e.setUrlUsercode,L9=e=>e.displayLandingContent,F9=e=>e.setDisplayNextButton,_9=e=>e.mapObj,B9=e=>e.setPostsortCommentCheckObj,z9=e=>e.setCardFontSizeSort,H9=e=>e.setCardFontSizePostsort,U9=e=>e.setMinCardHeightSort,V9=e=>e.setCardHeightSort,W9=e=>e.setMinCardHeightPostsort,q9=e=>e.statementsObj,El=()=>{var k;const e=X(N9),t=X(k9),r=X(_9),n=E(M9),o=E(A9),i=E(D9),a=E(R9);let s=E(L9);const c=E(F9),u=E(B9),d=t.headerBarColor,f=E(z9),g=E(H9),p=E(U9),m=E(V9),h=E(W9),x=A(D(e.landingHead))||"",v=A(D(e.welcomeText))||"",y=X(q9),C=A(D(e==null?void 0:e.mobileWelcomeText))||"",T=A(D(e.screenOrientationText))||"";if(localStorage.getItem("currentPage")==="landing"){localStorage.removeItem("columns"),localStorage.removeItem("sortColumns"),localStorage.removeItem("columnStatements"),localStorage.removeItem("presortSortedCards"),localStorage.removeItem("HC-requiredCommentsObj"),localStorage.removeItem("LC-requiredCommentsObj"),localStorage.removeItem("HC2-requiredCommentsObj"),localStorage.removeItem("LC2-requiredCommentsObj"),localStorage.removeItem("cumulativelandingPageDuration"),localStorage.removeItem("cumulativepostsortPageDuration"),localStorage.removeItem("cumulativepresortPageDuration"),localStorage.removeItem("cumulativesortPageDuration"),localStorage.removeItem("cumulativethinningPageDuration"),localStorage.removeItem("cumulativesurveyPageDuration"),localStorage.removeItem("cumulativethinPageDuration"),localStorage.removeItem("cumulativesubmitPageDuration"),localStorage.removeItem("lastAccesslandingPage"),localStorage.removeItem("lastAccesspresortPage"),localStorage.removeItem("lastAccesssortPage"),localStorage.removeItem("lastAccesspostsortPage"),localStorage.removeItem("lastAccesssurveyPage"),localStorage.removeItem("timeOnlandingPage"),localStorage.removeItem("timeOnpresortPage"),localStorage.removeItem("timeOnthinningPage"),localStorage.removeItem("timeOnsortPage"),localStorage.removeItem("timeOnpostsortPage"),localStorage.removeItem("timeOnsurveyPage"),localStorage.removeItem("resultsPresort"),localStorage.removeItem("resultsSort"),localStorage.removeItem("resultsPostsort"),localStorage.removeItem("resultsSurvey"),localStorage.removeItem("postsortCommentCardCount"),localStorage.removeItem("allCommentsObj"),localStorage.removeItem("newCols"),localStorage.removeItem("posSortedLocal"),localStorage.removeItem("negSortedLocal"),localStorage.removeItem("currentLeftIteration"),localStorage.removeItem("currentRightIteration"),localStorage.removeItem("isNotReload"),localStorage.removeItem("posSorted"),localStorage.removeItem("negSorted"),localStorage.removeItem("selectedPosItems"),localStorage.removeItem("selectedNegItems"),localStorage.removeItem("m_PresortStatementCount"),localStorage.removeItem("presortArray2"),localStorage.removeItem("thinDisplayControllerArray"),localStorage.removeItem("mobilePresortFontSize"),localStorage.removeItem("m_SortArray1"),localStorage.removeItem("selectedPosItems"),localStorage.removeItem("selectedNegItems"),localStorage.removeItem("columnStatements"),localStorage.removeItem("m_FontSizeObject"),localStorage.removeItem("m_ViewSizeObject"),localStorage.removeItem("m_FinalThinCols"),localStorage.removeItem("m_NegRequiredStatesObj"),localStorage.removeItem("m_PosRequiredStatesObj"),localStorage.removeItem("CumulativeTimelandingPage"),localStorage.removeItem("CumulativeTimepresortPage"),localStorage.removeItem("CumulativeTimethinningPage"),localStorage.removeItem("CumulativeTimesortPage"),localStorage.removeItem("CumulativeTimepostsortPage"),localStorage.removeItem("CumulativeTimesurveyPage"),localStorage.removeItem("m_ThinDisplayStatements"),localStorage.removeItem("m_HasDisplayedFirstThinModal"),localStorage.removeItem("m_PostSortResultsObj"),localStorage.removeItem("m_PresortResults"),localStorage.removeItem("m_SortCharacteristicsArray"),localStorage.removeItem("m_ThinningFinished"),localStorage.removeItem("m_PresortFinished"),localStorage.removeItem("m_MinWordCountPostsortObject"),localStorage.removeItem("m_UnforcedPattern"),localStorage.removeItem("randomId"),localStorage.removeItem("m_ThinScrollBottom"),localStorage.removeItem("m_ViewedBottomSort"),localStorage.removeItem("m_NeedsToScroll");for(let _=0;_<y.totalStatements;_++){let z=`m_PostsortComment(s${_+1})`;localStorage.removeItem(z)}t.requiredAnswersObj!==void 0&&(localStorage.setItem("resultsSurvey",JSON.stringify(t.requiredAnswersObj)),Object.keys(t.requiredAnswersObj).forEach((z,V)=>{let Q=`itemNum${V+1}`;localStorage.removeItem(Q),localStorage.removeItem(z)}))}const j=P.useMemo(()=>[...r.qSortHeaders],[r.qSortHeaders]),I=P.useMemo(()=>[...r.qSortPattern],[r.qSortPattern]);let $=Math.max(...I),w=(window.innerHeight-150)/$;localStorage.setItem("cardHeightSort",w),m(w),localStorage.setItem("m_FontSizeObject",JSON.stringify({presort:2,thin:2,sort:2,postsort:2})),localStorage.setItem("m_ViewSizeObject",JSON.stringify({presort:42,thin:68,sort:72,postsort:72,survey:72})),localStorage.setItem("m_ThinDisplayStatements",JSON.stringify({display:!0})),localStorage.setItem("m_PresortDisplayStatements",JSON.stringify({display:!0})),localStorage.setItem("randomId",te().substring(0,12)),localStorage.setItem("m_FinalThinCols",JSON.stringify([]));let U=y.columnStatements;localStorage.setItem("newCols",JSON.stringify(U));let L=nm(),q=So();const K=P.useRef(null);P.useEffect(()=>(K.current=Date.now(),i(10),o("landing"),localStorage.setItem("currentPage","landing"),()=>{jr(K.current,"landingPage","landingPage")}),[o,i]),P.useEffect(()=>{localStorage.setItem("currentLeftIteration",0),localStorage.setItem("currentRightIteration",0),localStorage.setItem("isNotReload","true"),localStorage.setItem("thinningSide","rightSide"),localStorage.setItem("m_PresortResults","");const _=m$(I);let z=yN(j,I);localStorage.setItem("finalSortColData",JSON.stringify(z));let V=xN([...z],_),Q=[...V[1]],H=[...V[0]];localStorage.setItem("sortRightArrays",JSON.stringify(Q)),localStorage.setItem("sortLeftArrays",JSON.stringify(H)),t.initialScreen==="anonymous"&&c(!0),(t.setDefaultFontSizePresort==="true"||t.setDefaultFontSizePresort===!0)&&localStorage.setItem("fontSizePresort",t.defaultFontSizePresort),(t.setDefaultFontSizeSort==="true"||t.setDefaultFontSizeSort===!0)&&localStorage.setItem("fontSizeSort",t.defaultFontSizeSort),(t.setMinCardHeightSort==="true"||t.setMinCardHeightSort===!0)&&localStorage.setItem("cardHeightSort",t.minCardHeightSort),(t.setDefaultFontSizePostsort==="true"||t.setDefaultFontSizePostsort===!0)&&(g(t.defaultFontSizePostsort),localStorage.setItem("fontSizePostsort",t.defaultFontSizePostsort)),(t.setMinCardHeightPostsort==="true"||t.setMinCardHeightPostsort===!0)&&(h(t.minCardHeightPostsort),localStorage.setItem("cardHeightPostsort",t.minCardHeightPostsort));let G=Vw(window.location.href);if(G==null){let Z=localStorage.getItem("urlUsercode");Z==null||Z==="undefined"?(console.log("no url usercode in storage"),a("not_set"),localStorage.setItem("urlUsercode","not_set")):(console.log("URL usercode from storage: ",Z),a(Z==="not_set"?"not_set":`${Z} (stored)`))}else{let Z=G;Z=Z.replace(/\/|#/g,""),console.log("URL usercode: ",Z),a(Z),localStorage.setItem("urlUsercode",Z)}},[t,r,c,a,f,g,p,h,j,I,y,$,m]),P.useEffect(()=>{let _=Object.keys(r.qSortPattern),z=Math.max(..._),V=Math.min(..._),Q=z-1,H=V+1,G=r.qSortPattern[z],Z=r.qSortPattern[Q],W=r.qSortPattern[V],R=r.qSortPattern[H],O=t.showSecondPosColumn,b=t.showSecondNegColumn;const F={};for(let M=0;M<G;M++){let ee=`hc-${M}`;F[ee]=!1}for(let M=0;M<W;M++){let ee=`lc-${M}`;F[ee]=!1}if(O==="true"||O===!0)for(let M=0;M<Z;M++){let ee=`hc2-${M}`;F[ee]=!1}if(b==="true"||b===!0)for(let M=0;M<R;M++){let ee=`lc2-${M}`;F[ee]=!1}u(F)},[r,t,u]);let B=!1,J=!1,Y=!1;if(L&&q==="landscape-primary")return l.jsx(Y9,{children:l.jsx("h1",{children:T})});if(t.setupTarget==="local")return l.jsx(l.Fragment,{children:n&&l.jsx(w1,{children:l.jsx(c$,{})})});{const _=t.initialScreen;_==="anonymous"&&(s=!0),_==="partId-access"&&s===!1&&(B=!0),_==="partId"&&s===!1&&(J=!0),_==="access"&&s===!1&&(Y=!0);let z=tE();return z&&(s=!1,B=!1,Y=!1,J=!1),(t.useMobileMode===!0||t.useMobileMode==="true")&&(localStorage.setItem("presortArray",JSON.stringify(qu((k=y==null?void 0:y.columnStatements)==null?void 0:k.statementList))),L)?(console.log("Mobile detected"),l.jsx(ae.Fragment,{children:n&&l.jsxs(ae.Fragment,{children:[l.jsx(Z9,{background:d,children:x}),l.jsxs(G9,{children:[B&&l.jsx(LI,{}),J&&l.jsx(XI,{}),Y&&l.jsx(hP,{}),s&&l.jsx(J9,{children:l.jsx("div",{children:C})})]})]})})):l.jsx(ae.Fragment,{children:n&&l.jsxs(ae.Fragment,{children:[l.jsx(Q9,{background:d,children:x}),l.jsx(eI,{}),l.jsxs(w1,{children:[z&&l.jsx(nE,{}),B&&l.jsx(yI,{}),J&&l.jsx(MP,{}),Y&&l.jsx(KP,{}),s&&l.jsx(K9,{children:l.jsx("div",{children:v})})]})]})})}},o5=nw`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,i5=nw`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,w1=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  padding-top: 50px;
  transition: 0.3s ease all;
  margin-top: 50px;

  img {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  iframe {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`,G9=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 70px;
  padding-top: 50px;
  transition: 0.3s ease all;
  margin-top: 20px;
  /* border: 2px solid red; */
  color: ${e=>e.theme.mobileText};

  img {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  iframe {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`,K9=S.div`
  display: flex;
  width: 75vw;
  font-size: 1.25em;
  visibility: ${e=>e.view?"hidden":"visible"};
  animation: ${e=>e.view?i5:o5} 0.5s linear;
  transition: visibility 0.5s linear;
  justify-content: center;
  align-items: center;
`,J9=S.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  height: 100%;
  font-size: 4.1vw;
  visibility: ${e=>e.view?"hidden":"visible"};
  animation: ${e=>e.view?i5:o5} 0.5s linear;
  transition: visibility 0.5s linear;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.mobileText};

  iframe {
    width: 84vw;
    height: 47.2vw;
  }
`,Q9=S.div`
  width: 100vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 8px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 28px;
  position: fixed;
  top: 0;
`,Z9=S.div`
  width: 100vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 8px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 18px;
  position: fixed;
  top: 0;
`,Y9=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.mobileText};
  width: 100vw;
  height: 100vh;
`,kt=e=>{try{let t=String(e);return t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;").replace(/\//g,"&#x2F;").replace(/[\x00-\x09\x0B-\x0C\x0E-\x1F\x7F]/g,""),t}catch(t){console.log("There was an error sanitizing User Input"),console.error(t)}};function Ee(e,t){const[r,n]=P.useState(()=>{try{const i=window.localStorage.getItem(e);return i===null?(window.localStorage.setItem(e,JSON.stringify(t)),t):JSON.parse(i)}catch(i){return console.log(i),t}});return[r,i=>{try{const a=i instanceof Function?i(r):i;n(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(a){console.log(a)}}]}const kr=e=>P.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("g",{clipPath:"url(#clip0_3_23)"},P.createElement("path",{d:"M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),P.createElement("path",{d:"M31.9444 55.5556C35.7798 55.5556 38.8889 51.2028 38.8889 45.8333C38.8889 40.4639 35.7798 36.1111 31.9444 36.1111C28.1091 36.1111 25 40.4639 25 45.8333C25 51.2028 28.1091 55.5556 31.9444 55.5556Z",fill:"#664500"}),P.createElement("path",{d:"M68.0556 55.5556C71.8909 55.5556 75 51.2028 75 45.8333C75 40.4639 71.8909 36.1111 68.0556 36.1111C64.2202 36.1111 61.1111 40.4639 61.1111 45.8333C61.1111 51.2028 64.2202 55.5556 68.0556 55.5556Z",fill:"#664500"}),P.createElement("path",{d:"M65.2361 77.4417C65.2055 77.3194 62.0555 65.2778 50 65.2778C37.9444 65.2778 34.7944 77.3194 34.7639 77.4417C34.6167 78.0333 34.8861 78.6389 35.4083 78.9528C35.9305 79.2639 36.6111 79.1917 37.0639 78.7861C37.0889 78.7639 39.8778 76.3889 50 76.3889C59.9722 76.3889 62.825 78.6944 62.9333 78.7861C63.1972 79.0361 63.5417 79.1667 63.8889 79.1667C64.1222 79.1667 64.3583 79.1083 64.5722 78.9889C65.1167 78.6778 65.3889 78.0472 65.2361 77.4417Z",fill:"#664500"})),P.createElement("defs",null,P.createElement("clipPath",{id:"clip0_3_23"},P.createElement("rect",{width:100,height:100,fill:"white"})))),Rr=e=>P.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("g",{clipPath:"url(#clip0_2_11)"},P.createElement("path",{d:"M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),P.createElement("path",{d:"M70.7917 82.9972C70.6667 82.5 67.5472 70.8333 50 70.8333C32.45 70.8333 29.3333 82.5 29.2083 82.9972C29.0556 83.6 29.3278 84.225 29.8667 84.5361C30.4083 84.8389 31.0861 84.7556 31.5333 84.3222C31.5861 84.2694 36.9611 79.1667 50 79.1667C63.0389 79.1667 68.4167 84.2694 68.4667 84.3194C68.7333 84.5833 69.0889 84.7222 69.4444 84.7222C69.6778 84.7222 69.9139 84.6639 70.1278 84.5444C70.6722 84.2333 70.9444 83.6028 70.7917 82.9972ZM43.6305 48.0361C34.5889 38.9944 20.0583 38.8889 19.4444 38.8889C17.9111 38.8889 16.6694 40.1306 16.6694 41.6611C16.6667 43.1944 17.9083 44.4389 19.4417 44.4444C19.5222 44.4444 24.7889 44.5056 30.5056 46.4917C28.8583 48.2694 27.7778 51.0306 27.7778 54.1667C27.7778 59.5389 30.8861 63.8889 34.7222 63.8889C38.5583 63.8889 41.6667 59.5389 41.6667 54.1667C41.6667 53.6833 41.6139 53.2222 41.5639 52.7583C41.6 52.7583 41.6333 52.7778 41.6667 52.7778C42.3778 52.7778 43.0889 52.5056 43.6305 51.9639C44.7167 50.8778 44.7167 49.1222 43.6305 48.0361ZM80.5556 38.8889C79.9417 38.8889 65.4139 38.9944 56.3694 48.0361C55.2833 49.1222 55.2833 50.8778 56.3694 51.9639C56.9111 52.5056 57.6222 52.7778 58.3333 52.7778C58.3694 52.7778 58.4 52.7583 58.4333 52.7583C58.3889 53.2222 58.3333 53.6833 58.3333 54.1667C58.3333 59.5389 61.4417 63.8889 65.2778 63.8889C69.1139 63.8889 72.2222 59.5389 72.2222 54.1667C72.2222 51.0306 71.1417 48.2694 69.4944 46.4917C75.2111 44.5056 80.4778 44.4444 80.5611 44.4444C82.0917 44.4389 83.3333 43.1944 83.3306 41.6611C83.3278 40.1306 82.0889 38.8889 80.5556 38.8889Z",fill:"#664500"})),P.createElement("defs",null,P.createElement("clipPath",{id:"clip0_2_11"},P.createElement("rect",{width:100,height:100,fill:"white"})))),go=e=>P.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("g",{clipPath:"url(#clip0_1_3)"},P.createElement("path",{d:"M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z",fill:"#DA2F47",stroke:"black",strokeWidth:5}),P.createElement("path",{d:"M70.7917 82.9972C70.6667 82.5 67.5472 70.8333 50 70.8333C32.45 70.8333 29.3333 82.5 29.2083 82.9972C29.0556 83.6 29.3278 84.225 29.8667 84.5361C30.4083 84.8389 31.0861 84.7556 31.5333 84.3222C31.5861 84.2694 36.9611 79.1667 50 79.1667C63.0389 79.1667 68.4167 84.2694 68.4667 84.3194C68.7333 84.5833 69.0889 84.7222 69.4445 84.7222C69.6778 84.7222 69.9139 84.6639 70.1278 84.5444C70.6722 84.2333 70.9445 83.6028 70.7917 82.9972ZM43.6306 48.0361C34.5889 38.9944 20.0583 38.8889 19.4444 38.8889C17.9111 38.8889 16.6694 40.1306 16.6694 41.6611C16.6667 43.1944 17.9083 44.4389 19.4417 44.4444C19.5222 44.4444 24.7889 44.5056 30.5056 46.4917C28.8583 48.2694 27.7778 51.0306 27.7778 54.1667C27.7778 59.5389 30.8861 63.8889 34.7222 63.8889C38.5583 63.8889 41.6667 59.5389 41.6667 54.1667C41.6667 53.6833 41.6139 53.2222 41.5639 52.7583C41.6 52.7583 41.6333 52.7778 41.6667 52.7778C42.3778 52.7778 43.0889 52.5056 43.6306 51.9639C44.7167 50.8778 44.7167 49.1222 43.6306 48.0361ZM80.5556 38.8889C79.9417 38.8889 65.4139 38.9944 56.3694 48.0361C55.2833 49.1222 55.2833 50.8778 56.3694 51.9639C56.9111 52.5056 57.6222 52.7778 58.3333 52.7778C58.3694 52.7778 58.4 52.7583 58.4333 52.7583C58.3889 53.2222 58.3333 53.6833 58.3333 54.1667C58.3333 59.5389 61.4417 63.8889 65.2778 63.8889C69.1139 63.8889 72.2222 59.5389 72.2222 54.1667C72.2222 51.0306 71.1417 48.2694 69.4944 46.4917C75.2111 44.5056 80.4778 44.4444 80.5611 44.4444C82.0917 44.4389 83.3333 43.1944 83.3306 41.6611C83.3278 40.1306 82.0889 38.8889 80.5556 38.8889Z",fill:"#292F33"})),P.createElement("defs",null,P.createElement("clipPath",{id:"clip0_1_3"},P.createElement("rect",{width:100,height:100,fill:"white"})))),Fs=e=>{const t=/[\u4E00-\u9FFF\u3400-\u4DBF\u3040-\u309F\u30A0-\u30FF\uFF66-\uFF9F]/g,r=e.match(t)||[],n=e.split(" ")||[],o=n.length+r.length;return{cjk:r.length,nonCJK:n.length,totalWords:o}},X9=e=>e.postsortCommentCheckObj,eM=e=>e.setPostsortCommentCheckObj,tM=e=>e.configObj,rM=e=>e.showPostsortCommentHighlighting,nM=e=>e.postsortDualImageArray,oM=e=>e.setPostsortDualImageArray,iM=e=>e.mapObj,aM=e=>{const t={async setItem(b,F){return await null,localStorage.setItem(b,F)}},[r,n]=P.useState(!1),[o,i]=P.useState(""),[a,s]=P.useState(!1),c=JSON.parse(localStorage.getItem("sortColumns")),[u,d]=Ee("LC-requiredCommentsObj",{}),f=E(X9),g=E(eM),p=X(tM),m=E(rM),h=E(nM),x=E(oM),v=X(iM),{height:y,width:C,cardFontSize:T,disagreeObj:N}=e,j=c.vCols[N.columnDisplay];let{placeholder:I,placedOn:$}=N,w=N.columnDisplay,U=p.useImages;U==="false"&&(U=!1),U==="true"&&(U=!0);let L=p.minWordCountValuePostsort||0,q=p.requireMinCommentLength||!1,K="";v.colTextLabelsArray&&(K=[...v.colTextLabelsArray][0]);let B="";if(v.useColLabelNumsPostsort){let b=[...v.qSortHeaderNumbers];B=`${$} ${b[0]}`}const J=b=>{if(b[0]==="emoji5Array")return l.jsx(go,{},"emojiN5");if(b[0]==="emoji4Array")return l.jsx(go,{},"emojiN5");if(b[0]==="emoji3Array")return l.jsx(Rr,{},"emojiN3");if(b[0]==="emoji2Array")return l.jsx(kr,{},"emojiN2")},k=[...v.columnHeadersColorsArray][0];let _,z=v.useColLabelNumsPostsort[0];(z!==void 0||z!==null)&&(z===!1||z==="false"?_=!1:_=!0);let V,Q=v.useColLabelTextPostsort[0];(Q!==void 0||Q!==null)&&(Q===!1||Q==="false"?V=!1:V=!0);let H,G=v.useColLabelEmojiPostsort[0];(G!==void 0||G!==null)&&(G===!1||G==="false"?H=!1:H=!0);let Z=l.jsxs(fM,{children:[H&&l.jsx(T1,{children:J(v.emojiArrayType)}),V&&l.jsx(gM,{children:K}),_&&l.jsx(pM,{children:B}),H&&l.jsx(T1,{children:J(v.emojiArrayType)})]}),W=[];e.lowCards.forEach((b,F)=>{let M=`${w}_${F}: ${b.id}`;W.push(M)}),localStorage.setItem("noResponseCheckArrayLC1",JSON.stringify(W));const R=(b,F)=>{b.detail===2&&(b.shiftKey?(h.push(b.target.src),x(h),h.length===2&&s(!0)):(i(b.target.src),n(!0)))},O=(b,F)=>{const M=JSON.parse(localStorage.getItem("resultsPostsort"))||{};let ee=JSON.parse(localStorage.getItem("allCommentsObj"))||{};b.target.value.length>0?(f[`lc-${F}`]=!0,g(f)):(f[`lc-${F}`]=!1,g(f));const de=c.vCols[N.columnDisplay],ce=b.target.id,fe=b.target.value,Se=`${w}_${F}`;de.map(le=>{if(le.id===ce){const ye=fe.replace(/\n/g," ").replace(/,/g," ").trim();let be=kt(ye);le.comment=be;let xe=0;if(be.length>0){const je=Fs(fe);xe=je.totalWords,console.log(je),M[Se]=`(${le.id}): ${be}`,ee[Se]=`(${le.id}): ${be}`,ee[`textArea-${w}_${F+1}`]=`${be}`,q?xe>L?d(he=>({...he,[`lc-${F}`]:!0})):d(he=>({...he,[`lc-${F}`]:!1})):d(he=>({...he,[`lc-${F}`]:!0}))}else le.comment="",M[Se]=`(${le.id}): no response`,ee[Se]=`(${le.id}): no response`,ee[`textArea-${w}_${F+1}`]="",d(je=>({...je,[`lc-${F}`]:!1}))}return le}),t.setItem("allCommentsObj",JSON.stringify(ee)),t.setItem("resultsPostsort",JSON.stringify(M))};return j.map((b,F)=>{let M=A(`<div>${D(b.statement)}</div>`),ie=(JSON.parse(localStorage.getItem("allCommentsObj"))||{})[`textArea-${w}_${+F+1}`]||"";p.useImages===!0&&(M=A(`<img src="${b.element.props.src}" style="pointer-events: all" alt=${b.element.props.alt} />`));let de=!0;return(p.postsortCommentsRequired==="true"||p.postsortCommentsRequired===!0)&&m===!0&&(de=u[`lc-${F}`]),l.jsxs(sM,{children:[l.jsx(_e,{open:r,center:!0,onClose:()=>n(!1),classNames:{modal:`${p.imageFormat}`,overlay:"dualImageOverlay"},children:l.jsx("img",{src:o,width:"100%",height:"auto",alt:"modalImage"})}),l.jsxs(_e,{open:a,center:!0,onClose:()=>{s(!1),x([])},classNames:{overlay:"dualImageOverlay",modal:"dualImageModal"},children:[l.jsx("img",{src:h[0],width:"49.5%",height:"auto",alt:"modalImage"}),l.jsx("img",{src:h[1],width:"49.5%",height:"auto",style:{marginLeft:"1%"},alt:"modalImage2"})]}),l.jsx(lM,{cardFontSize:T,backgroundColor:k,children:Z}),l.jsxs(cM,{children:[U?l.jsx(j1,{cardFontSize:T,width:C,height:y,cardColor:b.cardColor,onClick:ce=>R(ce,b.element.props.src),children:M}):l.jsx(j1,{cardFontSize:T,width:C,height:y,cardColor:b.cardColor,children:M}),l.jsx(dM,{children:l.jsx(uM,{bgColor:de,border:de,"data-gramm_editor":"false",height:y,cardFontSize:T,id:b.id,placeholder:I,defaultValue:ie,onChange:ce=>{O(ce,F)}})})]})]},b.statement)})},sM=S.div`
  width: 90vw;
  max-width: 1100px;
  margin-top: 50px;
  border-radius: 3px;
  border: 1px solid darkgray;
`,lM=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${e=>`${e.backgroundColor}`};
  color: black;
  text-align: center;
  font-size: ${e=>`${e.cardFontSize}px`};
  height: 1.5em;
`,cM=S.div`
  display: flex;
  align-content: center;
  background: rgb(224, 224, 224);
  width: 100%;
`,uM=S.textarea`
  padding: 10px;
  margin-top: 2px;
  background-color: ${e=>e.bgColor?"whitesmoke":"rgba(253, 224, 71, .5)"};
  height: ${e=>`${e.height}px;`};
  font-size: ${e=>`${e.cardFontSize}px`};
  width: calc(100% - 6px);
  border: 2px solid darkgray;
  border-radius: 3px;
  outline: ${e=>e.border?"none":"dashed 3px black"};
`,dM=S.div`
  padding-top: 3px;
  width: 100%;
`,j1=S.div`
  user-select: "none";
  padding: 0 2px 0 2px;
  margin: 5px 5px 5px 5px;
  line-height: 1em;
  height: ${e=>`${e.height}px;`};
  width: 35vw;
  // max-width: ${e=>`${e.width}px;`};
  border-radius: 5px;
  font-size: ${e=>`${e.cardFontSize}px`};
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
  border: 2px solid black;
  background-color: #f6f6f6;
  text-align: center;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`,T1=S.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,fM=S.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,gM=S.div`
  display: flex;
  padding-top: 3px;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: bold;
  text-align: center;
  /* font-size: 1vw; */
  font-size: clamp(1rem, 1vw, 1.5rem);
  text-align: center;
  line-height: 0.8rem;
`,pM=S.span`
  font-weight: bold;
  padding-top: 3px;

  font-size: clamp(1rem, 1vw, 1.5rem);
  /* font-size: 16px; */
  line-height: 1;
`,Kr=e=>P.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("g",{clipPath:"url(#clip0_3_18)"},P.createElement("path",{d:"M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),P.createElement("path",{d:"M31.9444 55.5556C35.7798 55.5556 38.8889 51.2028 38.8889 45.8333C38.8889 40.4639 35.7798 36.1111 31.9444 36.1111C28.1091 36.1111 25 40.4639 25 45.8333C25 51.2028 28.1091 55.5556 31.9444 55.5556Z",fill:"#664500"}),P.createElement("path",{d:"M68.0555 55.5556C71.8908 55.5556 75 51.2028 75 45.8333C75 40.4639 71.8908 36.1111 68.0555 36.1111C64.2202 36.1111 61.1111 40.4639 61.1111 45.8333C61.1111 51.2028 64.2202 55.5556 68.0555 55.5556Z",fill:"#664500"}),P.createElement("path",{d:"M33.3333 77.7778C38.8889 63.8889 69.4445 63.8889 69.4445 69.4444C69.4445 72.2222 47.2222 66.6667 33.3333 77.7778Z",fill:"#664500"})),P.createElement("defs",null,P.createElement("clipPath",{id:"clip0_3_18"},P.createElement("rect",{width:100,height:100,fill:"white"})))),mM=e=>e.postsortCommentCheckObj,hM=e=>e.setPostsortCommentCheckObj,vM=e=>e.configObj,xM=e=>e.showPostsortCommentHighlighting,yM=e=>e.postsortDualImageArray,bM=e=>e.setPostsortDualImageArray,SM=e=>e.mapObj,CM=e=>{const t={async setItem(b,F){return await null,localStorage.setItem(b,F)}},[r,n]=P.useState(!1),[o,i]=P.useState(""),[a,s]=P.useState(!1),c=JSON.parse(localStorage.getItem("sortColumns")),[u,d]=Ee("LC2-requiredCommentsObj",{}),f=E(mM),g=E(hM),p=X(vM),m=E(xM),h=E(yM),x=E(bM),v=X(SM),{height:y,width:C,cardFontSize:T,disagreeObj:N}=e,j=c.vCols[N.columnDisplay2];let{placeholder:I,placedOn:$}=N;const w=N.columnDisplay2;let U=p.useImages;U==="false"&&(U=!1),U==="true"&&(U=!0);let L=p.minWordCountValuePostsort||0,q=p.requireMinCommentLength||!1,K="";v.colTextLabelsArray&&(K=[...v.colTextLabelsArray][1]);let B="";if(v.useColLabelNumsPostsort){let b=[...v.qSortHeaderNumbers];B=`${$} ${b[1]}`}const J=b=>{if(b[0]==="emoji5Array")return l.jsx(Rr,{},"emojiN3");if(b[0]==="emoji4Array")return l.jsx(Rr,{},"emojiN3");if(b[0]==="emoji3Array")return l.jsx(kr,{},"emojiN2");if(b[0]==="emoji2Array")return l.jsx(Kr,{},"emojiN1")},k=[...v.columnHeadersColorsArray][1];let _,z=v.useColLabelNumsPostsort[0];(z!==void 0||z!==null)&&(z===!1||z==="false"?_=!1:_=!0);let V,Q=v.useColLabelTextPostsort[0];(Q!==void 0||Q!==null)&&(Q===!1||Q==="false"?V=!1:V=!0);let H,G=v.useColLabelEmojiPostsort[0];(G!==void 0||G!==null)&&(G===!1||G==="false"?H=!1:H=!0);let Z=l.jsxs(PM,{children:[H&&l.jsx(I1,{children:J(v.emojiArrayType)}),V&&l.jsx(EM,{children:K}),_&&l.jsx($M,{children:B}),H&&l.jsx(I1,{children:J(v.emojiArrayType)})]}),W=[];e.lowCards2.forEach((b,F)=>{let M=`${w}_${F}: ${b.id}`;W.push(M)}),localStorage.setItem("noResponseCheckArrayLC2",JSON.stringify(W));const R=(b,F)=>{b.detail===2&&(b.shiftKey?(h.push(b.target.src),x(h),h.length===2&&s(!0)):(i(b.target.src),n(!0)))},O=(b,F)=>{const M=JSON.parse(localStorage.getItem("resultsPostsort"))||{};let ee=JSON.parse(localStorage.getItem("allCommentsObj"))||{};b.target.value.length>0?(f[`lc2-${F}`]=!0,g(f)):(f[`lc2-${F}`]=!1,g(f));const de=[...c.vCols[N.columnDisplay2]],ce=b.target.id,fe=b.target.value,Se=`${w}_${F}`;de.map(le=>{if(le.id===ce){const ye=fe.replace(/\n/g," ").replace(/,/g," ").trim();let be=kt(ye);le.comment=be;let xe=0;if(be.length>0){const je=Fs(fe);xe=je.totalWords,console.log(je),M[Se]=`(${le.id}): ${be}`,ee[Se]=`(${le.id}): ${be}`,ee[`textArea-${w}_${F+1}`]=`${be}`,q?xe>L?d(he=>({...he,[`lc-${F}`]:!0})):d(he=>({...he,[`lc-${F}`]:!1})):d(he=>({...he,[`lc-${F}`]:!0}))}else le.comment="",M[Se]=`(${le.id}): no response`,ee[Se]=`(${le.id}): no response`,ee[`textArea-${w}_${F+1}`]="",d(je=>({...je,[`lc-${F}`]:!1}))}return le}),t.setItem("allCommentsObj",JSON.stringify(ee)),t.setItem("resultsPostsort",JSON.stringify(M))};return j.map((b,F)=>{let M=A(`<div>${D(b.statement)}</div>`),ie=(JSON.parse(localStorage.getItem("allCommentsObj"))||{})[`textArea-${w}_${+F+1}`]||"";p.useImages===!0&&(M=A(`<img src="${b.element.props.src}" style="pointer-events: all" alt=${b.element.props.alt} />`));let de=!0;return(p.postsortCommentsRequired==="true"||p.postsortCommentsRequired===!0)&&m===!0&&(de=u[`lc2-${F}`]),l.jsxs(wM,{children:[l.jsx(_e,{open:r,center:!0,onClose:()=>n(!1),classNames:{modal:`${p.imageFormat}`,overlay:"dualImageOverlay"},children:l.jsx("img",{src:o,width:"100%",height:"auto",alt:"modalImage"})}),l.jsxs(_e,{open:a,center:!0,onClose:()=>{s(!1),x([])},classNames:{overlay:"dualImageOverlay",modal:"dualImageModal"},children:[l.jsx("img",{src:h[0],width:"49.5%",height:"auto",alt:"modalImage"}),l.jsx("img",{src:h[1],width:"49.5%",height:"auto",style:{marginLeft:"1%"},alt:"modalImage2"})]}),l.jsx(jM,{cardFontSize:T,backgroundColor:k,children:Z}),l.jsxs(TM,{children:[U?l.jsx(O1,{cardFontSize:T,width:C,height:y,cardColor:b.cardColor,onClick:ce=>R(ce,b.element.props.src),children:M}):l.jsx(O1,{cardFontSize:T,width:C,height:y,cardColor:b.cardColor,children:M}),l.jsx(IM,{children:l.jsx(OM,{bgColor:de,border:de,"data-gramm_editor":"false",id:b.id,height:y,cardFontSize:T,className:"commentTextArea",placeholder:I,defaultValue:ie,onChange:ce=>{O(ce,F)}})})]})]},b.statement)})},wM=S.div`
  width: 90vw;
  max-width: 1100px;
  margin-top: 50px;
  border-radius: 3px;
  border: 1px solid darkgray;
`,jM=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: lightpink;
  font-size: ${e=>`${e.cardFontSize}px`};
  color: black;
  text-align: center;
  height: 1.5em;
`,TM=S.div`
  display: flex;
  align-content: center;
  background: rgb(224, 224, 224);
  width: 100%;
`,OM=S.textarea`
  padding: 10px;
  background-color: ${e=>e.bgColor?"whitesmoke":"rgba(253, 224, 71, .5)"};
  height: ${e=>`${e.height}px;`};
  font-size: ${e=>`${e.cardFontSize}px`};
  width: calc(100% - 6px);
  border: 2px solid darkgray;
  border-radius: 3px;
  outline: ${e=>e.border?"none":"dashed 3px black"};
`,IM=S.div`
  padding-top: 3px;
  width: 100%;
`,O1=S.div`
  user-select: "none";
  padding: 0 2px 0 2px;
  margin: 5px 5px 5px 5px;
  line-height: 1em;
  height: ${e=>`${e.height}px;`};
  width: 35vw;
  border-radius: 5px;
  font-size: ${e=>`${e.cardFontSize}px`};
  display: flex;
  user-select: none;
  align-items: center;
  justify-content: center;
  border: 2px solid black;
  background-color: #f6f6f6;
  text-align: center;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`,I1=S.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,PM=S.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,EM=S.div`
  display: flex;
  padding-top: 3px;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: bold;
  text-align: center;
  /* font-size: 1vw; */
  font-size: clamp(1rem, 1vw, 1.5rem);
  text-align: center;
  line-height: 0.8rem;
`,$M=S.span`
  font-weight: bold;
  padding-top: 3px;

  font-size: clamp(1rem, 1vw, 1.5rem);
  /* font-size: 16px; */
  line-height: 1;
`,Mr=e=>P.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("g",{clipPath:"url(#clip0_3_33)"},P.createElement("path",{d:"M50 2.5C76.2332 2.5 97.5 23.7668 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7668 97.5 2.5 76.2332 2.5 50C2.5 23.7668 23.7668 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),P.createElement("path",{d:"M19.4444 63.8889C27.1151 63.8889 33.3333 57.6706 33.3333 50C33.3333 42.3294 27.1151 36.1111 19.4444 36.1111C11.7738 36.1111 5.55556 42.3294 5.55556 50C5.55556 57.6706 11.7738 63.8889 19.4444 63.8889Z",fill:"#FF7892"}),P.createElement("path",{d:"M80.5555 63.8889C88.2262 63.8889 94.4444 57.6706 94.4444 50C94.4444 42.3294 88.2262 36.1111 80.5555 36.1111C72.8849 36.1111 66.6667 42.3294 66.6667 50C66.6667 57.6706 72.8849 63.8889 80.5555 63.8889Z",fill:"#FF7892"}),P.createElement("path",{d:"M75.9306 60.0805C75.4361 59.6333 74.6972 59.6055 74.1667 60C74.0583 60.0805 63.2722 68.0555 50 68.0555C36.7611 68.0555 25.9389 60.0805 25.8333 60C25.3028 59.6055 24.5639 59.6389 24.0695 60.0805C23.5778 60.525 23.4667 61.2583 23.8083 61.825C24.1667 62.4222 32.7445 76.3889 50 76.3889C67.2556 76.3889 75.8361 62.4222 76.1917 61.825C76.5333 61.2555 76.425 60.525 75.9306 60.0805ZM22.2195 41.6667C21.8028 41.6667 21.3778 41.5722 20.9806 41.3722C19.6083 40.6861 19.0528 39.0167 19.7389 37.6444C19.8833 37.3555 23.4 30.5555 33.3333 30.5555C43.2695 30.5555 46.7833 37.3583 46.9278 37.6472C47.6139 39.0194 47.0583 40.6889 45.6861 41.375C44.3195 42.0555 42.6722 41.5111 41.975 40.1639C41.8556 39.9417 39.6695 36.1111 33.3333 36.1111C26.8972 36.1111 24.725 40.0917 24.7056 40.1305C24.2195 41.1055 23.2389 41.6667 22.2195 41.6667ZM77.7806 41.6667C76.7611 41.6667 75.7806 41.1055 75.2917 40.1305C75.2222 40.0028 73.0528 36.1111 66.6667 36.1111C60.2806 36.1111 58.1111 40.0028 58.0222 40.1667C57.3 41.5028 55.6361 42.0278 54.2861 41.3333C52.9389 40.6333 52.3917 39.0028 53.0695 37.6444C53.2139 37.3583 56.7306 30.5555 66.6667 30.5555C76.6028 30.5555 80.1195 37.3583 80.2639 37.6472C80.95 39.0194 80.3945 40.6889 79.0222 41.375C78.6222 41.5722 78.1972 41.6667 77.7806 41.6667Z",fill:"#664500"})),P.createElement("defs",null,P.createElement("clipPath",{id:"clip0_3_33"},P.createElement("rect",{width:100,height:100,fill:"white"})))),en=e=>P.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("g",{clipPath:"url(#clip0_3_38)"},P.createElement("path",{d:"M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),P.createElement("path",{d:"M31.9444 50C35.7798 50 38.8889 43.1599 38.8889 34.7222C38.8889 26.2846 35.7798 19.4445 31.9444 19.4445C28.1091 19.4445 25 26.2846 25 34.7222C25 43.1599 28.1091 50 31.9444 50Z",fill:"#664500"}),P.createElement("path",{d:"M68.0556 50C71.8909 50 75 43.1599 75 34.7222C75 26.2846 71.8909 19.4445 68.0556 19.4445C64.2202 19.4445 61.1111 26.2846 61.1111 34.7222C61.1111 43.1599 64.2202 50 68.0556 50Z",fill:"#664500"}),P.createElement("path",{d:"M50 61.1111C39.9361 61.1111 33.2583 59.9389 25 58.3333C23.1139 57.9694 19.4445 58.3333 19.4445 63.8889C19.4445 75 32.2083 88.8889 50 88.8889C67.7889 88.8889 80.5556 75 80.5556 63.8889C80.5556 58.3333 76.8861 57.9666 75 58.3333C66.7417 59.9389 60.0639 61.1111 50 61.1111Z",fill:"#664500"}),P.createElement("path",{d:"M25 63.8889C25 63.8889 33.3333 66.6667 50 66.6667C66.6667 66.6667 75 63.8889 75 63.8889C75 63.8889 69.4444 75 50 75C30.5556 75 25 63.8889 25 63.8889Z",fill:"white"})),P.createElement("defs",null,P.createElement("clipPath",{id:"clip0_3_38"},P.createElement("rect",{width:100,height:100,fill:"white"})))),Ln=e=>P.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("g",{clipPath:"url(#clip0_3_49)"},P.createElement("path",{d:"M50 2.5C76.2332 2.5 97.5 23.7668 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7668 97.5 2.5 76.2332 2.5 50C2.5 23.7668 23.7668 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),P.createElement("path",{d:"M50 58.3333C39.9361 58.3333 33.2583 57.1611 25 55.5555C23.1139 55.1917 19.4445 55.5555 19.4445 61.1111C19.4445 72.2222 32.2083 86.1111 50 86.1111C67.7889 86.1111 80.5556 72.2222 80.5556 61.1111C80.5556 55.5555 76.8861 55.1889 75 55.5555C66.7417 57.1611 60.0639 58.3333 50 58.3333Z",fill:"#664500"}),P.createElement("path",{d:"M25 61.1111C25 61.1111 33.3333 63.8889 50 63.8889C66.6667 63.8889 75 61.1111 75 61.1111C75 61.1111 69.4444 72.2222 50 72.2222C30.5556 72.2222 25 61.1111 25 61.1111Z",fill:"white"}),P.createElement("path",{d:"M43.5611 12.2583L30.9445 14.4833L24.4445 2.66945C23.7278 1.36667 22.2556 0.66945 20.8 0.925005C19.3361 1.18334 18.1972 2.34445 17.9695 3.81112L15.9 17.1361L3.28335 19.3611C1.79724 19.6222 0.650013 20.8195 0.447235 22.3167C0.244458 23.8139 1.03335 25.2695 2.40001 25.9195L13.7056 31.2861L11.6278 44.6528C11.3972 46.1417 12.1528 47.6083 13.4972 48.2889C13.9945 48.5389 14.5278 48.6583 15.0583 48.6583C15.9667 48.6583 16.8639 48.3028 17.5333 47.625L27.2889 37.7333L39.8389 43.6917C41.2 44.3361 42.8222 44.0333 43.8556 42.9361C44.8889 41.8389 45.0945 40.2028 44.3695 38.8833L37.8472 27.0278L46.6389 18.1167C47.7 17.0417 47.9417 15.4028 47.2417 14.0639C46.5361 12.725 45.0389 12 43.5611 12.2583ZM56.4389 12.2583L69.0556 14.4833L75.5556 2.66945C76.2722 1.36667 77.7445 0.66945 79.2 0.925005C80.6611 1.18334 81.8 2.34445 82.0278 3.81112L84.0972 17.1361L96.7139 19.3611C98.2028 19.6222 99.35 20.8167 99.55 22.3139C99.75 23.8111 98.9639 25.2667 97.5972 25.9167L86.2917 31.2833L88.3695 44.65C88.6 46.1389 87.8445 47.6056 86.5 48.2861C86.0028 48.5361 85.4695 48.6556 84.9389 48.6556C84.0306 48.6556 83.1333 48.3 82.4639 47.6222L72.7083 37.7306L60.1583 43.6889C58.7972 44.3333 57.175 44.0306 56.1417 42.9333C55.1083 41.8361 54.9028 40.2 55.6278 38.8806L62.15 27.0278L53.3583 18.1167C52.2972 17.0417 52.0556 15.4028 52.7556 14.0639C53.4639 12.725 54.9611 12 56.4389 12.2583Z",fill:"#E95F28"})),P.createElement("defs",null,P.createElement("clipPath",{id:"clip0_3_49"},P.createElement("rect",{width:100,height:100,fill:"white"})))),NM=e=>e.postsortCommentCheckObj,kM=e=>e.setPostsortCommentCheckObj,MM=e=>e.configObj,AM=e=>e.mapObj,DM=e=>e.showPostsortCommentHighlighting,RM=e=>e.postsortDualImageArray,LM=e=>e.setPostsortDualImageArray,FM=e=>{const t={async setItem(F,M){return await null,localStorage.setItem(F,M)}},[r,n]=P.useState(!1),[o,i]=P.useState(""),[a,s]=P.useState(!1),c=JSON.parse(localStorage.getItem("sortColumns")),[u,d]=Ee("HC-requiredCommentsObj",{}),f=E(NM),g=E(kM),p=X(MM),m=X(AM),h=E(DM),x=E(RM),v=E(LM),{agreeObj:y,cardFontSize:C,width:T,height:N}=e,j=c==null?void 0:c.vCols[y.columnDisplay];let{placeholder:I,placedOn:$}=y,w=y.columnDisplay,U=p.useImages;U==="false"&&(U=!1),U==="true"&&(U=!0);let L=p.minWordCountValuePostsort||0,q=p.requireMinCommentLength||!1,K="";if(m.colTextLabelsArray){let F=[...m.colTextLabelsArray];K=F[F.length-1]}let B="";if(m.useColLabelNumsPostsort){let F=[...m.qSortHeaderNumbers];B=`${$} +${F[F.length-1]}`}const J=F=>{if(F[0]==="emoji5Array")return l.jsx(Ln,{},"emoji5");if(F[0]==="emoji4Array")return l.jsx(Ln,{},"emoji5");if(F[0]==="emoji3Array")return l.jsx(en,{},"emoji3");if(F[0]==="emoji2Array")return l.jsx(Mr,{},"emoji2")},Y=[...m.columnHeadersColorsArray],k=Y[Y.length-1];let _=!0,z,V=m.useColLabelNumsPostsort[0];(V!==void 0||V!==null)&&(V===!1||V==="false"?z=!1:z=!0);let Q,H=m.useColLabelTextPostsort[0];(H!==void 0||H!==null)&&(H===!1||H==="false"?Q=!1:Q=!0);let G,Z=m.useColLabelEmojiPostsort[0];(Z!==void 0||Z!==null)&&(Z===!1||Z==="false"?G=!1:G=!0);let W=l.jsxs(VM,{children:[G&&l.jsx(E1,{children:J(m.emojiArrayType)}),Q&&l.jsx(WM,{children:K}),z&&l.jsx(qM,{children:B}),G&&l.jsx(E1,{children:J(m.emojiArrayType)})]}),R=[];e.highCards.forEach((F,M)=>{let ee=`${w}_${M}: ${F.id}`;R.push(ee)}),localStorage.setItem("noResponseCheckArrayHC1",JSON.stringify(R));const O=F=>{console.log(F),F.target&&F.detail===2&&(F.shiftKey?(x.push(F.target.src),v(x),x.length===2&&s(!0)):(i(F.target.src),n(!0)))},b=(F,M)=>{F.preventDefault();const ee=JSON.parse(localStorage.getItem("resultsPostsort"))||{};let ie=JSON.parse(localStorage.getItem("allCommentsObj"))||{};F.target.value.length>0?(f[`hc-${M}`]=!0,g(f)):(f[`hc-${M}`]=!1,g(f));const ce=c.vCols[y.columnDisplay],fe=F.target.id,Se=F.target.value,le=`${w}_${+M}`;ce.map(pe=>{if(pe.id===fe){let be=Se.replace(/\n/g," ").replace(/,/g," ").trim(),xe=kt(be);pe.comment=xe;let je=0;if(xe.length>0){const he=Fs(Se);je=he.totalWords,console.log(he),ee[le]=`(${pe.id}): ${xe}`,ie[le]=`(${pe.id}): ${xe}`,ie[`textArea-${w}_${M+1}`]=`${xe}`,q?je>L?d(Oe=>({...Oe,[`hc-${M}`]:!0})):d(Oe=>({...Oe,[`hc-${M}`]:!1})):d(Oe=>({...Oe,[`hc-${M}`]:!0}))}else pe.comment="",ee[le]=`(${pe.id}): no response`,ie[le]=`(${pe.id}): no response`,ie[`textArea-${w}_${M+1}`]="",d(he=>({...he,[`hc-${M}`]:!1}))}return pe}),t.setItem("allCommentsObj",JSON.stringify(ie)),t.setItem("resultsPostsort",JSON.stringify(ee))};return j.map((F,M)=>{let ee=A(`<div>${D(F.statement)}</div>`),de=(JSON.parse(localStorage.getItem("allCommentsObj"))||{})[`textArea-${w}_${+M+1}`];return p.useImages===!0&&(ee=A(`<img src="${F.element.props.src}" style="pointer-events: all" alt=${F.element.props.alt} />`)),(p.postsortCommentsRequired==="true"||p.postsortCommentsRequired===!0)&&h===!0&&(_=u[`hc-${M}`]),l.jsxs(_M,{id:"postSortImageModal",children:[l.jsx(_e,{open:r,center:!0,onClose:()=>n(!1),classNames:{modal:`${p.imageFormat}`,overlay:"dualImageOverlay"},children:l.jsx("img",{src:o,width:"100%",height:"auto",alt:"modalImage"})}),l.jsxs(_e,{open:a,center:!0,onClose:()=>{s(!1),v([])},classNames:{overlay:"dualImageOverlay",modal:"dualImageModal"},children:[l.jsx("img",{src:x[0],width:"49.5%",height:"auto",alt:"modalImage"}),l.jsx("img",{src:x[1],width:"49.5%",height:"auto",style:{marginLeft:"1%"},alt:"modalImage2"})]}),l.jsxs(BM,{cardFontSize:C,backgroundColor:k,children:[W," "]}),l.jsxs(zM,{children:[U?l.jsx(P1,{cardFontSize:C,width:T,height:N,cardColor:F.cardColor,onClick:ce=>O(ce,F.element.props.src),children:ee}):l.jsx(P1,{cardFontSize:C,width:T,height:N,cardColor:F.cardColor,children:ee}),l.jsx(UM,{children:l.jsx(HM,{bgColor:_,border:_,"data-gramm_editor":"false",height:N,cardFontSize:C,id:F.id,placeholder:I,defaultValue:de,onChange:ce=>{b(ce,M)}})})]})]},F.statement)})},_M=S.div`
  width: 90vw;
  max-width: 1100px;
  margin-top: 50px;
  border-radius: 3px;
  border: 1px solid darkgray;
`,BM=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* padding-top: 3px; */
  width: 100%;
  background: ${e=>`${e.backgroundColor}`};
  font-size: ${e=>`${e.cardFontSize}px`};
  color: black;
  text-align: center;
  height: 1.5em;
`,zM=S.div`
  display: flex;
  align-content: center;
  background: rgb(224, 224, 224);
  width: 100%;
`,HM=S.textarea`
  padding: 10px;
  margin-top: 2px;
  background-color: ${e=>e.bgColor?"whitesmoke":"rgba(253, 224, 71, .5)"};
  height: ${e=>`${e.height}px;`};
  font-size: ${e=>`${e.cardFontSize}px`};
  width: calc(100% - 6px);
  border: 2px solid darkgray;
  border-radius: 3px;
  outline: ${e=>e.border?"none":"dashed 3px black"};
`,UM=S.div`
  padding-top: 3px;
  width: 100%;
`,P1=S.div`
  user-select: "none";
  padding: 0 2px 0 2px;
  margin: 5px 5px 5px 5px;
  line-height: 1em;
  height: ${e=>`${e.height}px;`};
  width: 35vw;
  //max-width: ${e=>e.useImages?"none":`${e.width}px;`};
  border-radius: 5px;
  font-size: ${e=>`${e.cardFontSize}px`};
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
  border: 2px solid darkslategray;
  background-color: #f6f6f6;
  text-align: center;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`,E1=S.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,VM=S.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,WM=S.div`
  display: flex;
  padding-top: 3px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-weight: bold;
  font-size: clamp(1rem, 1vw, 1.5rem);
  user-select: none;

  text-align: center;
  line-height: 0.8rem;
`,qM=S.span`
  font-weight: bold;
  padding-top: 3px;
  font-size: clamp(1rem, 1vw, 1.5rem);
  line-height: 1;
`,Jr=e=>P.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("g",{clipPath:"url(#clip0_3_28)"},P.createElement("path",{d:"M50 2.5C76.2335 2.5 97.5 23.7665 97.5 50C97.5 76.2335 76.2335 97.5 50 97.5C23.7665 97.5 2.5 76.2335 2.5 50C2.5 23.7665 23.7665 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),P.createElement("path",{d:"M29.2083 65.6139C29.3333 66.1111 32.4528 77.7778 50 77.7778C67.55 77.7778 70.6667 66.1111 70.7917 65.6139C70.9444 65.0111 70.6722 64.3861 70.1333 64.075C69.5917 63.7667 68.9139 63.8583 68.4667 64.2889C68.4139 64.3417 63.0389 69.4444 50 69.4444C36.9611 69.4444 31.5833 64.3417 31.5333 64.2917C31.2667 64.0278 30.9111 63.8889 30.5556 63.8889C30.3222 63.8889 30.0861 63.9472 29.8722 64.0667C29.3278 64.3778 29.0556 65.0083 29.2083 65.6139Z",fill:"#664500"}),P.createElement("path",{d:"M33.3333 47.2222C37.1686 47.2222 40.2778 42.8694 40.2778 37.5C40.2778 32.1306 37.1686 27.7778 33.3333 27.7778C29.498 27.7778 26.3889 32.1306 26.3889 37.5C26.3889 42.8694 29.498 47.2222 33.3333 47.2222Z",fill:"#664500"}),P.createElement("path",{d:"M66.6667 47.2222C70.502 47.2222 73.6111 42.8694 73.6111 37.5C73.6111 32.1306 70.502 27.7778 66.6667 27.7778C62.8314 27.7778 59.7222 32.1306 59.7222 37.5C59.7222 42.8694 62.8314 47.2222 66.6667 47.2222Z",fill:"#664500"})),P.createElement("defs",null,P.createElement("clipPath",{id:"clip0_3_28"},P.createElement("rect",{width:100,height:100,fill:"white"})))),GM=e=>e.postsortCommentCheckObj,KM=e=>e.setPostsortCommentCheckObj,JM=e=>e.configObj,QM=e=>e.showPostsortCommentHighlighting,ZM=e=>e.postsortDualImageArray,YM=e=>e.setPostsortDualImageArray,XM=e=>e.mapObj,eA=e=>{const t={async setItem(b,F){return await null,localStorage.setItem(b,F)}},[r,n]=P.useState(!1),[o,i]=P.useState(""),[a,s]=P.useState(!1),c=JSON.parse(localStorage.getItem("sortColumns")),[u,d]=Ee("HC2-requiredCommentsObj",{}),f=E(GM),g=E(KM),p=X(JM),m=E(QM),h=E(ZM),x=E(YM),v=X(XM),{height:y,width:C,agreeObj:T,cardFontSize:N}=e,j=c.vCols[T.columnDisplay2];let{placeholder:I,placedOn:$}=T,w=T.columnDisplay2,U=p.useImages;U==="false"&&(U=!1),U==="true"&&(U=!0);let L=p.minWordCountValuePostsort||0,q=p.requireMinCommentLength||!1,K="";if(v.colTextLabelsArray){let b=[...v.colTextLabelsArray];K=b[b.length-2]}let B="";if(v.useColLabelNumsPostsort){let b=[...v.qSortHeaderNumbers];B=`${$} +${b[b.length-2]}`}const J=b=>{if(b[0]==="emoji5Array")return l.jsx(Ln,{},"emoji5");if(b[0]==="emoji4Array")return l.jsx(en,{},"emoji3");if(b[0]==="emoji3Array")return l.jsx(Mr,{},"emoji2");if(b[0]==="emoji2Array")return l.jsx(Jr,{},"emoji1")},Y=[...v.columnHeadersColorsArray],k=Y[Y.length-2];let _,z=v.useColLabelNumsPostsort[0];(z!==void 0||z!==null)&&(z===!1||z==="false"?_=!1:_=!0);let V,Q=v.useColLabelTextPostsort[0];(Q!==void 0||Q!==null)&&(Q===!1||Q==="false"?V=!1:V=!0);let H,G=v.useColLabelEmojiPostsort[0];(G!==void 0||G!==null)&&(G===!1||G==="false"?H=!1:H=!0);let Z=l.jsxs(aA,{children:[H&&l.jsx(N1,{children:J(v.emojiArrayType)}),V&&l.jsx(sA,{children:K}),_&&l.jsx(lA,{children:B}),H&&l.jsx(N1,{children:J(v.emojiArrayType)})]}),W=[];e.highCards2.forEach((b,F)=>{let M=`${w}_${F}: ${b.id}`;W.push(M)}),localStorage.setItem("noResponseCheckArrayHC2",JSON.stringify(W));const R=b=>{b.detail===2&&(b.shiftKey?(h.push(b.target.src),x(h),h.length===2&&s(!0)):(i(b.target.src),n(!0)))},O=(b,F)=>{const M=JSON.parse(localStorage.getItem("resultsPostsort"))||{};let ee=JSON.parse(localStorage.getItem("allCommentsObj"))||{};b.target.value.length>0?(f[`hc2-${F}`]=!0,g(f)):(f[`hc2-${F}`]=!1,g(f));const de=c==null?void 0:c.vCols[T.columnDisplay2],ce=b.target.id,fe=b.target.value,Se=`${w}_${+F}`;de.map(le=>{if(le.id===ce){const ye=fe.replace(/\n/g," ").replace(/,/g," ").trim();let be=kt(ye);le.comment=be;let xe=0;if(be.length>0){const je=Fs(be);let he=je.totalWords,Oe=je.totalCJK;xe=he+Oe,M[Se]=`(${le.id}): ${be}`,ee[Se]=`(${le.id}): ${be}`,ee[`textArea-${w}_${F+1}`]=`${be}`,q?xe>L?d(ke=>({...ke,[`hc-${F}`]:!0})):d(ke=>({...ke,[`hc-${F}`]:!1})):d(ke=>({...ke,[`hc-${F}`]:!0}))}else le.comment="",M[Se]=`(${le.id}): no response`,ee[Se]=`(${le.id}): no response`,ee[`textArea-${w}_${F+1}`]="",d(je=>({...je,[`hc-${F}`]:!1}))}return le}),t.setItem("allCommentsObj",JSON.stringify(ee)),t.setItem("resultsPostsort",JSON.stringify(M))};return j.map((b,F)=>{let M=A(`<div>${D(b.statement)}</div>`),ie=(JSON.parse(localStorage.getItem("allCommentsObj"))||{})[`textArea-${w}_${+F+1}`]||"";p.useImages===!0&&(M=A(`<img src="${b.element.props.src}" style="pointer-events: all" alt=${b.element.props.alt} />`));let de=!0;return(p.postsortCommentsRequired==="true"||p.postsortCommentsRequired===!0)&&m===!0&&(de=u[`hc2-${F}`]),l.jsxs(tA,{children:[l.jsx(_e,{open:r,center:!0,onClose:()=>n(!1),classNames:{modal:`${p.imageFormat}`,overlay:"dualImageOverlay"},children:l.jsx("img",{src:o,width:"100%",height:"auto",alt:"modalImage"})}),l.jsxs(_e,{open:a,center:!0,onClose:()=>{s(!1),x([])},classNames:{overlay:"dualImageOverlay",modal:"dualImageModal"},children:[l.jsx("img",{src:h[0],width:"49.5%",height:"auto",alt:"modalImage"}),l.jsx("img",{src:h[1],width:"49.5%",height:"auto",style:{marginLeft:"1%"},alt:"modalImage2"})]}),l.jsx(rA,{cardFontSize:N,backgroundColor:k,children:Z}),l.jsxs(nA,{children:[U?l.jsx($1,{cardFontSize:N,width:C,height:y,cardColor:b.cardColor,onClick:ce=>R(ce,b.element.props.src),children:M}):l.jsx($1,{cardFontSize:N,width:C,height:y,cardColor:b.cardColor,children:M}),l.jsx(iA,{children:l.jsx(oA,{bgColor:de,border:de,"data-gramm_editor":"false",height:y,cardFontSize:N,id:b.id,placeholder:I,defaultValue:ie,onChange:ce=>{O(ce,F)}})})]})]},b.statement)})},tA=S.div`
  width: 90vw;
  max-width: 1100px;
  margin-top: 50px;
  border-radius: 3px;
  border: 1px solid darkgray;
`,rA=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${e=>`${e.backgroundColor}`};
  color: black;
  text-align: center;
  font-size: ${e=>`${e.cardFontSize}px`};
  height: 1.5em;
`,nA=S.div`
  display: flex;
  align-content: center;
  background: rgb(224, 224, 224);
  width: 100%;
`,oA=S.textarea`
  padding: 10px;
  margin-top: 2px;
  background-color: ${e=>e.bgColor?"whitesmoke":"rgba(253, 224, 71, .5)"};
  height: ${e=>`${e.height}px;`};
  font-size: ${e=>`${e.cardFontSize}px`};
  width: calc(100% - 6px);
  border: 2px solid darkgray;
  border-radius: 3px;
  outline: ${e=>e.border?"none":"dashed 3px black"};
`,iA=S.div`
  padding-top: 3px;
  width: 100%;
`,$1=S.div`
  user-select: "none";
  padding: 0 2px 0 2px;
  margin: 5px 5px 5px 5px;
  line-height: 1em;
  height: ${e=>`${e.height}px;`};
  width: 35vw;
  // max-width: ${e=>`${e.width}px;`};
  border-radius: 5px;
  font-size: ${e=>`${e.cardFontSize}px`};
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
  border: 2px solid black;
  background-color: #f6f6f6;
  text-align: center;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }
`,N1=S.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,aA=S.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,sA=S.div`
  display: flex;
  padding-top: 3px;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: bold;
  text-align: center;
  font-size: clamp(1rem, 1vw, 1.5rem);
  text-align: center;
  line-height: 0.8rem;
`,lA=S.span`
  font-weight: bold;
  padding-top: 3px;
  font-size: clamp(1rem, 1vw, 1.5rem);
  line-height: 1;
`,cA=e=>e.langObj,uA=e=>e.triggerPostsortModal,dA=e=>e.setTriggerPostsortModal,fA=()=>{const e=X(cA),t=E(uA),r=E(dA),n=A(D(e.postsortModalHead))||"",o=A(D(e.postsortModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(gA,{children:n}),l.jsx("hr",{}),l.jsx(pA,{children:o})]})},gA=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,pA=S.div`
  margin-top: 15px;
`,Fn=()=>{P.useEffect(()=>(window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}),[]);const e=t=>{var r="o/";return(t||window.event).returnValue=r,r};return l.jsx(ae.Fragment,{children:l.jsx(XT,{when:!1,message:()=>"Are you sure you want to leave this page?"})})},mA=e=>e.langObj,hA=e=>e.triggerPostsortPreventNavModal,vA=e=>e.setTriggerPostsortPreventNavModal,xA=()=>{const e=X(mA),t=E(hA),r=E(vA),n=A(D(e.postsortPreventNavModalHead))||"",o=A(D(e.postsortPreventNavModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(yA,{children:n}),l.jsx("hr",{}),l.jsx(bA,{children:o})]})},yA=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;
  color: ${e=>e.theme.mobileText};

  hr {
    color: black;
  }
`,bA=S.div`
  margin-top: 15px;
  color: ${e=>e.theme.mobileText};
`,SA=e=>e.langObj,CA=e=>e.configObj,wA=e=>e.mapObj,jA=e=>e.setProgressScore,TA=e=>e.cardHeightPostsort,OA=e=>e.cardFontSizePostsort,IA=e=>e.setCurrentPage,PA=e=>e.setDisplayNextButton,k1=()=>{const e=P.useRef(null),t=X(SA),r=X(wA),n=X(CA),o=E(jA);let i=E(TA),a=E(OA);const s=E(IA),c=E(PA),u=JSON.parse(localStorage.getItem("columnStatements"));let d=+JSON.parse(localStorage.getItem("fontSizePostsort")),f=+JSON.parse(localStorage.getItem("cardHeightPostsort"));d&&(a=d),f&&(i=f),c(!0);const g=n.headerBarColor,p=A(D(t.postsortInstructions))||"";P.useEffect(()=>{const H=e.current.childNodes.length;localStorage.setItem("postsortCommentCardCount",H-1)});const m=P.useRef(null);P.useEffect(()=>(m.current=Date.now(),(async()=>{await s("postsort"),localStorage.setItem("currentPage","postsort"),await o(50)})(),()=>{jr(m.current,"postsortPage","postsortPage")}),[s,o]);const h=250,x=A(D(t.postsortHeader))||"",v=A(D(t.postsortAgreement))||"",y=A(D(t.postsortPlacedOn))||"",C=A(D(t.postsortDisagreement))||"",T=t.placeholder,N=Object.keys(r.postsortConvertObj),j=N.pop(),I=N.pop(),$=N.shift(),w=N.shift(),U=j,L=I,q=n.showSecondPosColumn,K=$,B=w,J=n.showSecondNegColumn,Y={};Y.agreeText=v,Y.columnDisplay=[U],Y.columnDisplay2=[L],Y.displaySecondColumn=q,Y.placeholder=T,Y.placedOn=y;const k={};k.disagreeText=C,k.columnDisplay=[K],k.columnDisplay2=[B],k.displaySecondColumn=J,k.placeholder=T,k.placedOn=y;const _=u==null?void 0:u.vCols[Y.columnDisplay],z=u==null?void 0:u.vCols[Y.columnDisplay2],V=u==null?void 0:u.vCols[k.columnDisplay],Q=u==null?void 0:u.vCols[k.columnDisplay2];return l.jsxs("div",{children:[l.jsx(Fn,{}),l.jsx(fA,{}),l.jsx(xA,{}),l.jsx($A,{background:g,children:x}),l.jsxs(EA,{ref:e,children:[l.jsx(NA,{children:p}),l.jsx(FM,{agreeObj:Y,height:i,cardFontSize:a,width:h,highCards:_}),Y.displaySecondColumn&&l.jsx(eA,{agreeObj:Y,height:i,cardFontSize:a,width:h,highCards2:z}),k.displaySecondColumn&&l.jsx(CM,{disagreeObj:k,height:i,cardFontSize:a,width:h,lowCards2:Q}),l.jsx(aM,{disagreeObj:k,height:i,cardFontSize:a,width:h,lowCards:V})]})]})},EA=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 150px;
  margin-top: 50px;
`,$A=S.div`
  width: 100vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  color: white;
  font-weight: bold;
  font-size: 28px;
  position: fixed;
  top: 0;
`,NA=S.div`
  display: flex;
  justify-self: center;
  align-self: center;
  margin-top: 30px;
  text-align: center;
  user-select: none;
  color: black;
  font-size: 2vh;
  font-weight: normal;
  max-width: 1100px;
`;function kA(){this.__data__=[],this.size=0}var MA=kA;function AA(e,t){return e===t||e!==e&&t!==t}var Rm=AA,DA=Rm;function RA(e,t){for(var r=e.length;r--;)if(DA(e[r][0],t))return r;return-1}var Gu=RA,LA=Gu,FA=Array.prototype,_A=FA.splice;function BA(e){var t=this.__data__,r=LA(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():_A.call(t,r,1),--this.size,!0}var zA=BA,HA=Gu;function UA(e){var t=this.__data__,r=HA(t,e);return r<0?void 0:t[r][1]}var VA=UA,WA=Gu;function qA(e){return WA(this.__data__,e)>-1}var GA=qA,KA=Gu;function JA(e,t){var r=this.__data__,n=KA(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}var QA=JA,ZA=MA,YA=zA,XA=VA,eD=GA,tD=QA;function ea(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ea.prototype.clear=ZA;ea.prototype.delete=YA;ea.prototype.get=XA;ea.prototype.has=eD;ea.prototype.set=tD;var Ku=ea,rD=Ku;function nD(){this.__data__=new rD,this.size=0}var oD=nD;function iD(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var aD=iD;function sD(e){return this.__data__.get(e)}var lD=sD;function cD(e){return this.__data__.has(e)}var uD=cD,dD=on,fD=dD["__core-js_shared__"],gD=fD,of=gD,M1=function(){var e=/[^.]+$/.exec(of&&of.keys&&of.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function pD(e){return!!M1&&M1 in e}var mD=pD,hD=Function.prototype,vD=hD.toString;function xD(e){if(e!=null){try{return vD.call(e)}catch{}try{return e+""}catch{}}return""}var a5=xD,yD=r5,bD=mD,SD=bo,CD=a5,wD=/[\\^$.*+?()[\]{}|]/g,jD=/^\[object .+?Constructor\]$/,TD=Function.prototype,OD=Object.prototype,ID=TD.toString,PD=OD.hasOwnProperty,ED=RegExp("^"+ID.call(PD).replace(wD,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function $D(e){if(!SD(e)||bD(e))return!1;var t=yD(e)?ED:jD;return t.test(CD(e))}var ND=$D;function kD(e,t){return e==null?void 0:e[t]}var MD=kD,AD=ND,DD=MD;function RD(e,t){var r=DD(e,t);return AD(r)?r:void 0}var Xo=RD,LD=Xo,FD=on,_D=LD(FD,"Map"),Lm=_D,BD=Xo,zD=BD(Object,"create"),Ju=zD,A1=Ju;function HD(){this.__data__=A1?A1(null):{},this.size=0}var UD=HD;function VD(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var WD=VD,qD=Ju,GD="__lodash_hash_undefined__",KD=Object.prototype,JD=KD.hasOwnProperty;function QD(e){var t=this.__data__;if(qD){var r=t[e];return r===GD?void 0:r}return JD.call(t,e)?t[e]:void 0}var ZD=QD,YD=Ju,XD=Object.prototype,eR=XD.hasOwnProperty;function tR(e){var t=this.__data__;return YD?t[e]!==void 0:eR.call(t,e)}var rR=tR,nR=Ju,oR="__lodash_hash_undefined__";function iR(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=nR&&t===void 0?oR:t,this}var aR=iR,sR=UD,lR=WD,cR=ZD,uR=rR,dR=aR;function ta(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ta.prototype.clear=sR;ta.prototype.delete=lR;ta.prototype.get=cR;ta.prototype.has=uR;ta.prototype.set=dR;var fR=ta,D1=fR,gR=Ku,pR=Lm;function mR(){this.size=0,this.__data__={hash:new D1,map:new(pR||gR),string:new D1}}var hR=mR;function vR(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var xR=vR,yR=xR;function bR(e,t){var r=e.__data__;return yR(t)?r[typeof t=="string"?"string":"hash"]:r.map}var Qu=bR,SR=Qu;function CR(e){var t=SR(this,e).delete(e);return this.size-=t?1:0,t}var wR=CR,jR=Qu;function TR(e){return jR(this,e).get(e)}var OR=TR,IR=Qu;function PR(e){return IR(this,e).has(e)}var ER=PR,$R=Qu;function NR(e,t){var r=$R(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}var kR=NR,MR=hR,AR=wR,DR=OR,RR=ER,LR=kR;function ra(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ra.prototype.clear=MR;ra.prototype.delete=AR;ra.prototype.get=DR;ra.prototype.has=RR;ra.prototype.set=LR;var Fm=ra,FR=Ku,_R=Lm,BR=Fm,zR=200;function HR(e,t){var r=this.__data__;if(r instanceof FR){var n=r.__data__;if(!_R||n.length<zR-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new BR(n)}return r.set(e,t),this.size=r.size,this}var UR=HR,VR=Ku,WR=oD,qR=aD,GR=lD,KR=uD,JR=UR;function na(e){var t=this.__data__=new VR(e);this.size=t.size}na.prototype.clear=WR;na.prototype.delete=qR;na.prototype.get=GR;na.prototype.has=KR;na.prototype.set=JR;var _m=na;function QR(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var ZR=QR,YR=Xo,XR=function(){try{var e=YR(Object,"defineProperty");return e({},"",{}),e}catch{}}(),eL=XR,R1=eL;function tL(e,t,r){t=="__proto__"&&R1?R1(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Bm=tL,rL=Bm,nL=Rm,oL=Object.prototype,iL=oL.hasOwnProperty;function aL(e,t,r){var n=e[t];(!(iL.call(e,t)&&nL(n,r))||r===void 0&&!(t in e))&&rL(e,t,r)}var s5=aL,sL=s5,lL=Bm;function cL(e,t,r,n){var o=!r;r||(r={});for(var i=-1,a=t.length;++i<a;){var s=t[i],c=n?n(r[s],e[s],s,r,e):void 0;c===void 0&&(c=e[s]),o?lL(r,s,c):sL(r,s,c)}return r}var Zu=cL,uL=Zu,dL=Xi;function fL(e,t){return e&&uL(t,dL(t),e)}var gL=fL;function pL(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var mL=pL,hL=bo,vL=Am,xL=mL,yL=Object.prototype,bL=yL.hasOwnProperty;function SL(e){if(!hL(e))return xL(e);var t=vL(e),r=[];for(var n in e)n=="constructor"&&(t||!bL.call(e,n))||r.push(n);return r}var CL=SL,wL=e5,jL=CL,TL=Dm;function OL(e){return TL(e)?wL(e,!0):jL(e)}var zm=OL,IL=Zu,PL=zm;function EL(e,t){return e&&IL(t,PL(t),e)}var $L=EL,Vc={exports:{}};Vc.exports;(function(e,t){var r=on,n=t&&!t.nodeType&&t,o=n&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===n,a=i?r.Buffer:void 0,s=a?a.allocUnsafe:void 0;function c(u,d){if(d)return u.slice();var f=u.length,g=s?s(f):new u.constructor(f);return u.copy(g),g}e.exports=c})(Vc,Vc.exports);var NL=Vc.exports;function kL(e,t){for(var r=-1,n=e==null?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}var ML=kL;function AL(){return[]}var l5=AL,DL=ML,RL=l5,LL=Object.prototype,FL=LL.propertyIsEnumerable,L1=Object.getOwnPropertySymbols,_L=L1?function(e){return e==null?[]:(e=Object(e),DL(L1(e),function(t){return FL.call(e,t)}))}:RL,Hm=_L,BL=Zu,zL=Hm;function HL(e,t){return BL(e,zL(e),t)}var UL=HL;function VL(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}var Um=VL,WL=t5,qL=WL(Object.getPrototypeOf,Object),c5=qL,GL=Um,KL=c5,JL=Hm,QL=l5,ZL=Object.getOwnPropertySymbols,YL=ZL?function(e){for(var t=[];e;)GL(t,JL(e)),e=KL(e);return t}:QL,u5=YL,XL=Zu,eF=u5;function tF(e,t){return XL(e,eF(e),t)}var rF=tF,nF=Um,oF=zr;function iF(e,t,r){var n=t(e);return oF(e)?n:nF(n,r(e))}var d5=iF,aF=d5,sF=Hm,lF=Xi;function cF(e){return aF(e,lF,sF)}var f5=cF,uF=d5,dF=u5,fF=zm;function gF(e){return uF(e,fF,dF)}var pF=gF,mF=Xo,hF=on,vF=mF(hF,"DataView"),xF=vF,yF=Xo,bF=on,SF=yF(bF,"Promise"),CF=SF,wF=Xo,jF=on,TF=wF(jF,"Set"),OF=TF,IF=Xo,PF=on,EF=IF(PF,"WeakMap"),$F=EF,Eg=xF,$g=Lm,Ng=CF,kg=OF,Mg=$F,g5=Ls,oa=a5,F1="[object Map]",NF="[object Object]",_1="[object Promise]",B1="[object Set]",z1="[object WeakMap]",H1="[object DataView]",kF=oa(Eg),MF=oa($g),AF=oa(Ng),DF=oa(kg),RF=oa(Mg),Oo=g5;(Eg&&Oo(new Eg(new ArrayBuffer(1)))!=H1||$g&&Oo(new $g)!=F1||Ng&&Oo(Ng.resolve())!=_1||kg&&Oo(new kg)!=B1||Mg&&Oo(new Mg)!=z1)&&(Oo=function(e){var t=g5(e),r=t==NF?e.constructor:void 0,n=r?oa(r):"";if(n)switch(n){case kF:return H1;case MF:return F1;case AF:return _1;case DF:return B1;case RF:return z1}return t});var Yu=Oo,LF=Object.prototype,FF=LF.hasOwnProperty;function _F(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&FF.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var BF=_F,zF=on,HF=zF.Uint8Array,p5=HF,U1=p5;function UF(e){var t=new e.constructor(e.byteLength);return new U1(t).set(new U1(e)),t}var Vm=UF,VF=Vm;function WF(e,t){var r=t?VF(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var qF=WF,GF=/\w*$/;function KF(e){var t=new e.constructor(e.source,GF.exec(e));return t.lastIndex=e.lastIndex,t}var JF=KF,V1=Yi,W1=V1?V1.prototype:void 0,q1=W1?W1.valueOf:void 0;function QF(e){return q1?Object(q1.call(e)):{}}var ZF=QF,YF=Vm;function XF(e,t){var r=t?YF(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var e_=XF,t_=Vm,r_=qF,n_=JF,o_=ZF,i_=e_,a_="[object Boolean]",s_="[object Date]",l_="[object Map]",c_="[object Number]",u_="[object RegExp]",d_="[object Set]",f_="[object String]",g_="[object Symbol]",p_="[object ArrayBuffer]",m_="[object DataView]",h_="[object Float32Array]",v_="[object Float64Array]",x_="[object Int8Array]",y_="[object Int16Array]",b_="[object Int32Array]",S_="[object Uint8Array]",C_="[object Uint8ClampedArray]",w_="[object Uint16Array]",j_="[object Uint32Array]";function T_(e,t,r){var n=e.constructor;switch(t){case p_:return t_(e);case a_:case s_:return new n(+e);case m_:return r_(e,r);case h_:case v_:case x_:case y_:case b_:case S_:case C_:case w_:case j_:return i_(e,r);case l_:return new n;case c_:case f_:return new n(e);case u_:return n_(e);case d_:return new n;case g_:return o_(e)}}var O_=T_,I_=bo,G1=Object.create,P_=function(){function e(){}return function(t){if(!I_(t))return{};if(G1)return G1(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),E_=P_,$_=E_,N_=c5,k_=Am;function M_(e){return typeof e.constructor=="function"&&!k_(e)?$_(N_(e)):{}}var A_=M_,D_=Yu,R_=Yo,L_="[object Map]";function F_(e){return R_(e)&&D_(e)==L_}var __=F_,B_=__,z_=km,K1=Mm,J1=K1&&K1.isMap,H_=J1?z_(J1):B_,U_=H_,V_=Yu,W_=Yo,q_="[object Set]";function G_(e){return W_(e)&&V_(e)==q_}var K_=G_,J_=K_,Q_=km,Q1=Mm,Z1=Q1&&Q1.isSet,Z_=Z1?Q_(Z1):J_,Y_=Z_,X_=_m,eB=ZR,tB=s5,rB=gL,nB=$L,oB=NL,iB=Jw,aB=UL,sB=rF,lB=f5,cB=pF,uB=Yu,dB=BF,fB=O_,gB=A_,pB=zr,mB=Em,hB=U_,vB=bo,xB=Y_,yB=Xi,bB=zm,SB=1,CB=2,wB=4,m5="[object Arguments]",jB="[object Array]",TB="[object Boolean]",OB="[object Date]",IB="[object Error]",h5="[object Function]",PB="[object GeneratorFunction]",EB="[object Map]",$B="[object Number]",v5="[object Object]",NB="[object RegExp]",kB="[object Set]",MB="[object String]",AB="[object Symbol]",DB="[object WeakMap]",RB="[object ArrayBuffer]",LB="[object DataView]",FB="[object Float32Array]",_B="[object Float64Array]",BB="[object Int8Array]",zB="[object Int16Array]",HB="[object Int32Array]",UB="[object Uint8Array]",VB="[object Uint8ClampedArray]",WB="[object Uint16Array]",qB="[object Uint32Array]",Je={};Je[m5]=Je[jB]=Je[RB]=Je[LB]=Je[TB]=Je[OB]=Je[FB]=Je[_B]=Je[BB]=Je[zB]=Je[HB]=Je[EB]=Je[$B]=Je[v5]=Je[NB]=Je[kB]=Je[MB]=Je[AB]=Je[UB]=Je[VB]=Je[WB]=Je[qB]=!0;Je[IB]=Je[h5]=Je[DB]=!1;function rc(e,t,r,n,o,i){var a,s=t&SB,c=t&CB,u=t&wB;if(r&&(a=o?r(e,n,o,i):r(e)),a!==void 0)return a;if(!vB(e))return e;var d=pB(e);if(d){if(a=dB(e),!s)return iB(e,a)}else{var f=uB(e),g=f==h5||f==PB;if(mB(e))return oB(e,s);if(f==v5||f==m5||g&&!o){if(a=c||g?{}:gB(e),!s)return c?sB(e,nB(a,e)):aB(e,rB(a,e))}else{if(!Je[f])return o?e:{};a=fB(e,f,s)}}i||(i=new X_);var p=i.get(e);if(p)return p;i.set(e,a),xB(e)?e.forEach(function(x){a.add(rc(x,t,r,x,e,i))}):hB(e)&&e.forEach(function(x,v){a.set(v,rc(x,t,r,v,e,i))});var m=u?c?cB:lB:c?bB:yB,h=d?void 0:m(e);return eB(h||e,function(x,v){h&&(v=x,x=e[v]),tB(a,v,rc(x,t,r,v,e,i))}),a}var GB=rc,KB=GB,JB=1,QB=4;function ZB(e){return KB(e,JB|QB)}var YB=ZB;const Wm=ht(YB),XB=()=>{const e=u=>u.langObj,t=u=>u.triggerPresortModal,r=u=>u.setTriggerPresortModal,n=X(e),o=E(t),i=E(r),a=()=>{i(!1)},s=A(D(n.presortModalHead))||"",c=A(D(n.presortModalText))||"";return l.jsxs(_e,{className:"customModal",open:o,onClose:a,center:!0,children:[l.jsx(ez,{children:s}),l.jsx("hr",{}),l.jsx(tz,{children:c})]})},ez=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,tz=S.div`
  margin-top: 15px;
`;function ws(e){"@babel/helpers - typeof";return ws=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ws(e)}function rz(e,t){if(ws(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(ws(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function nz(e){var t=rz(e,"string");return ws(t)=="symbol"?t:t+""}function oz(e,t,r){return(t=nz(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function Y1(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function X1(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Y1(Object(r),!0).forEach(function(n){oz(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Y1(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Yt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var ex=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),af=function(){return Math.random().toString(36).substring(7).split("").join(".")},tx={INIT:"@@redux/INIT"+af(),REPLACE:"@@redux/REPLACE"+af(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+af()}};function iz(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function x5(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(Yt(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(Yt(1));return r(x5)(e,t)}if(typeof e!="function")throw new Error(Yt(2));var o=e,i=t,a=[],s=a,c=!1;function u(){s===a&&(s=a.slice())}function d(){if(c)throw new Error(Yt(3));return i}function f(h){if(typeof h!="function")throw new Error(Yt(4));if(c)throw new Error(Yt(5));var x=!0;return u(),s.push(h),function(){if(x){if(c)throw new Error(Yt(6));x=!1,u();var y=s.indexOf(h);s.splice(y,1),a=null}}}function g(h){if(!iz(h))throw new Error(Yt(7));if(typeof h.type>"u")throw new Error(Yt(8));if(c)throw new Error(Yt(9));try{c=!0,i=o(i,h)}finally{c=!1}for(var x=a=s,v=0;v<x.length;v++){var y=x[v];y()}return h}function p(h){if(typeof h!="function")throw new Error(Yt(10));o=h,g({type:tx.REPLACE})}function m(){var h,x=f;return h={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(Yt(11));function C(){y.next&&y.next(d())}C();var T=x(C);return{unsubscribe:T}}},h[ex]=function(){return this},h}return g({type:tx.INIT}),n={dispatch:g,subscribe:f,getState:d,replaceReducer:p},n[ex]=m,n}function rx(e,t){return function(){return t(e.apply(this,arguments))}}function nx(e,t){if(typeof e=="function")return rx(e,t);if(typeof e!="object"||e===null)throw new Error(Yt(16));var r={};for(var n in e){var o=e[n];typeof o=="function"&&(r[n]=rx(o,t))}return r}function y5(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function az(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var o=n.apply(void 0,arguments),i=function(){throw new Error(Yt(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(c){return c(a)});return i=y5.apply(void 0,s)(o.dispatch),X1(X1({},o),{},{dispatch:i})}}}var b5=ae.createContext(null);function sz(e){e()}var S5=sz,lz=function(t){return S5=t},cz=function(){return S5};function uz(){var e=cz(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e(function(){for(var o=t;o;)o.callback(),o=o.next})},get:function(){for(var o=[],i=t;i;)o.push(i),i=i.next;return o},subscribe:function(o){var i=!0,a=r={callback:o,next:null,prev:r};return a.prev?a.prev.next=a:t=a,function(){!i||t===null||(i=!1,a.next?a.next.prev=a.prev:r=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}var ox={notify:function(){},get:function(){return[]}};function C5(e,t){var r,n=ox;function o(f){return c(),n.subscribe(f)}function i(){n.notify()}function a(){d.onStateChange&&d.onStateChange()}function s(){return!!r}function c(){r||(r=t?t.addNestedSub(a):e.subscribe(a),n=uz())}function u(){r&&(r(),r=void 0,n.clear(),n=ox)}var d={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:a,isSubscribed:s,trySubscribe:c,tryUnsubscribe:u,getListeners:function(){return n}};return d}var w5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?P.useLayoutEffect:P.useEffect;function dz(e){var t=e.store,r=e.context,n=e.children,o=P.useMemo(function(){var s=C5(t);return{store:t,subscription:s}},[t]),i=P.useMemo(function(){return t.getState()},[t]);w5(function(){var s=o.subscription;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),i!==t.getState()&&s.notifyNestedSubs(),function(){s.tryUnsubscribe(),s.onStateChange=null}},[o,i]);var a=r||b5;return ae.createElement(a.Provider,{value:o},n)}var j5={exports:{}},qe={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu=60103,ed=60106,_s=60107,Bs=60108,zs=60114,Hs=60109,Us=60110,Vs=60112,Ws=60113,qm=60120,qs=60115,Gs=60116,T5=60121,O5=60122,I5=60117,P5=60129,E5=60131;if(typeof Symbol=="function"&&Symbol.for){var Tt=Symbol.for;Xu=Tt("react.element"),ed=Tt("react.portal"),_s=Tt("react.fragment"),Bs=Tt("react.strict_mode"),zs=Tt("react.profiler"),Hs=Tt("react.provider"),Us=Tt("react.context"),Vs=Tt("react.forward_ref"),Ws=Tt("react.suspense"),qm=Tt("react.suspense_list"),qs=Tt("react.memo"),Gs=Tt("react.lazy"),T5=Tt("react.block"),O5=Tt("react.server.block"),I5=Tt("react.fundamental"),P5=Tt("react.debug_trace_mode"),E5=Tt("react.legacy_hidden")}function an(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xu:switch(e=e.type,e){case _s:case zs:case Bs:case Ws:case qm:return e;default:switch(e=e&&e.$$typeof,e){case Us:case Vs:case Gs:case qs:case Hs:return e;default:return t}}case ed:return t}}}var fz=Hs,gz=Xu,pz=Vs,mz=_s,hz=Gs,vz=qs,xz=ed,yz=zs,bz=Bs,Sz=Ws;qe.ContextConsumer=Us;qe.ContextProvider=fz;qe.Element=gz;qe.ForwardRef=pz;qe.Fragment=mz;qe.Lazy=hz;qe.Memo=vz;qe.Portal=xz;qe.Profiler=yz;qe.StrictMode=bz;qe.Suspense=Sz;qe.isAsyncMode=function(){return!1};qe.isConcurrentMode=function(){return!1};qe.isContextConsumer=function(e){return an(e)===Us};qe.isContextProvider=function(e){return an(e)===Hs};qe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xu};qe.isForwardRef=function(e){return an(e)===Vs};qe.isFragment=function(e){return an(e)===_s};qe.isLazy=function(e){return an(e)===Gs};qe.isMemo=function(e){return an(e)===qs};qe.isPortal=function(e){return an(e)===ed};qe.isProfiler=function(e){return an(e)===zs};qe.isStrictMode=function(e){return an(e)===Bs};qe.isSuspense=function(e){return an(e)===Ws};qe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===_s||e===zs||e===P5||e===Bs||e===Ws||e===qm||e===E5||typeof e=="object"&&e!==null&&(e.$$typeof===Gs||e.$$typeof===qs||e.$$typeof===Hs||e.$$typeof===Us||e.$$typeof===Vs||e.$$typeof===I5||e.$$typeof===T5||e[0]===O5)};qe.typeOf=an;j5.exports=qe;var Cz=j5.exports,wz=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],jz=["reactReduxForwardedRef"],Tz=[],Oz=[null,null];function Iz(e,t){var r=e[1];return[t.payload,r+1]}function ix(e,t,r){w5(function(){return e.apply(void 0,t)},r)}function Pz(e,t,r,n,o,i,a){e.current=n,t.current=o,r.current=!1,i.current&&(i.current=null,a())}function Ez(e,t,r,n,o,i,a,s,c,u){if(e){var d=!1,f=null,g=function(){if(!d){var h=t.getState(),x,v;try{x=n(h,o.current)}catch(y){v=y,f=y}v||(f=null),x===i.current?a.current||c():(i.current=x,s.current=x,a.current=!0,u({type:"STORE_UPDATED",payload:{error:v}}))}};r.onStateChange=g,r.trySubscribe(),g();var p=function(){if(d=!0,r.tryUnsubscribe(),r.onStateChange=null,f)throw f};return p}}var $z=function(){return[null,0]};function Nz(e,t){t===void 0&&(t={});var r=t,n=r.getDisplayName,o=n===void 0?function(C){return"ConnectAdvanced("+C+")"}:n,i=r.methodName,a=i===void 0?"connectAdvanced":i,s=r.renderCountProp,c=s===void 0?void 0:s,u=r.shouldHandleStateChanges,d=u===void 0?!0:u,f=r.storeKey,g=f===void 0?"store":f;r.withRef;var p=r.forwardRef,m=p===void 0?!1:p,h=r.context,x=h===void 0?b5:h,v=Rn(r,wz),y=x;return function(T){var N=T.displayName||T.name||"Component",j=o(N),I=we({},v,{getDisplayName:o,methodName:a,renderCountProp:c,shouldHandleStateChanges:d,storeKey:g,displayName:j,wrappedComponentName:N,WrappedComponent:T}),$=v.pure;function w(B){return e(B.dispatch,I)}var U=$?P.useMemo:function(B){return B()};function L(B){var J=P.useMemo(function(){var me=B.reactReduxForwardedRef,ye=Rn(B,jz);return[B.context,me,ye]},[B]),Y=J[0],k=J[1],_=J[2],z=P.useMemo(function(){return Y&&Y.Consumer&&Cz.isContextConsumer(ae.createElement(Y.Consumer,null))?Y:y},[Y,y]),V=P.useContext(z),Q=!!B.store&&!!B.store.getState&&!!B.store.dispatch;V&&V.store;var H=Q?B.store:V.store,G=P.useMemo(function(){return w(H)},[H]),Z=P.useMemo(function(){if(!d)return Oz;var me=C5(H,Q?null:V.subscription),ye=me.notifyNestedSubs.bind(me);return[me,ye]},[H,Q,V]),W=Z[0],R=Z[1],O=P.useMemo(function(){return Q?V:we({},V,{subscription:W})},[Q,V,W]),b=P.useReducer(Iz,Tz,$z),F=b[0],M=F[0],ee=b[1];if(M&&M.error)throw M.error;var ie=P.useRef(),de=P.useRef(_),ce=P.useRef(),fe=P.useRef(!1),Se=U(function(){return ce.current&&_===de.current?ce.current:G(H.getState(),_)},[H,M,_]);ix(Pz,[de,ie,fe,_,Se,ce,R]),ix(Ez,[d,H,W,G,de,ie,fe,ce,R,ee],[H,W,G]);var le=P.useMemo(function(){return ae.createElement(T,we({},Se,{ref:k}))},[k,T,Se]),pe=P.useMemo(function(){return d?ae.createElement(z.Provider,{value:O},le):le},[z,le,O]);return pe}var q=$?ae.memo(L):L;if(q.WrappedComponent=T,q.displayName=L.displayName=j,m){var K=ae.forwardRef(function(J,Y){return ae.createElement(q,we({},J,{reactReduxForwardedRef:Y}))});return K.displayName=j,K.WrappedComponent=T,Nc(K,T)}return Nc(q,T)}}function ax(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function sf(e,t){if(ax(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!ax(e[r[o]],t[r[o]]))return!1;return!0}function kz(e,t){var r={},n=function(a){var s=e[a];typeof s=="function"&&(r[a]=function(){return t(s.apply(void 0,arguments))})};for(var o in e)n(o);return r}function Gm(e){return function(r,n){var o=e(r,n);function i(){return o}return i.dependsOnOwnProps=!1,i}}function sx(e){return e.dependsOnOwnProps!==null&&e.dependsOnOwnProps!==void 0?!!e.dependsOnOwnProps:e.length!==1}function $5(e,t){return function(n,o){o.displayName;var i=function(s,c){return i.dependsOnOwnProps?i.mapToProps(s,c):i.mapToProps(s)};return i.dependsOnOwnProps=!0,i.mapToProps=function(s,c){i.mapToProps=e,i.dependsOnOwnProps=sx(e);var u=i(s,c);return typeof u=="function"&&(i.mapToProps=u,i.dependsOnOwnProps=sx(u),u=i(s,c)),u},i}}function Mz(e){return typeof e=="function"?$5(e):void 0}function Az(e){return e?void 0:Gm(function(t){return{dispatch:t}})}function Dz(e){return e&&typeof e=="object"?Gm(function(t){return kz(e,t)}):void 0}const Rz=[Mz,Az,Dz];function Lz(e){return typeof e=="function"?$5(e):void 0}function Fz(e){return e?void 0:Gm(function(){return{}})}const _z=[Lz,Fz];function Bz(e,t,r){return we({},r,e,t)}function zz(e){return function(r,n){n.displayName;var o=n.pure,i=n.areMergedPropsEqual,a=!1,s;return function(u,d,f){var g=e(u,d,f);return a?(!o||!i(g,s))&&(s=g):(a=!0,s=g),s}}}function Hz(e){return typeof e=="function"?zz(e):void 0}function Uz(e){return e?void 0:function(){return Bz}}const Vz=[Hz,Uz];var Wz=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function qz(e,t,r,n){return function(i,a){return r(e(i,a),t(n,a),a)}}function Gz(e,t,r,n,o){var i=o.areStatesEqual,a=o.areOwnPropsEqual,s=o.areStatePropsEqual,c=!1,u,d,f,g,p;function m(C,T){return u=C,d=T,f=e(u,d),g=t(n,d),p=r(f,g,d),c=!0,p}function h(){return f=e(u,d),t.dependsOnOwnProps&&(g=t(n,d)),p=r(f,g,d),p}function x(){return e.dependsOnOwnProps&&(f=e(u,d)),t.dependsOnOwnProps&&(g=t(n,d)),p=r(f,g,d),p}function v(){var C=e(u,d),T=!s(C,f);return f=C,T&&(p=r(f,g,d)),p}function y(C,T){var N=!a(T,d),j=!i(C,u,T,d);return u=C,d=T,N&&j?h():N?x():j?v():p}return function(T,N){return c?y(T,N):m(T,N)}}function Kz(e,t){var r=t.initMapStateToProps,n=t.initMapDispatchToProps,o=t.initMergeProps,i=Rn(t,Wz),a=r(e,i),s=n(e,i),c=o(e,i),u=i.pure?Gz:qz;return u(a,s,c,e,i)}var Jz=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function lf(e,t,r){for(var n=t.length-1;n>=0;n--){var o=t[n](e);if(o)return o}return function(i,a){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+a.wrappedComponentName+".")}}function Qz(e,t){return e===t}function Zz(e){var t=e===void 0?{}:e,r=t.connectHOC,n=r===void 0?Nz:r,o=t.mapStateToPropsFactories,i=o===void 0?_z:o,a=t.mapDispatchToPropsFactories,s=a===void 0?Rz:a,c=t.mergePropsFactories,u=c===void 0?Vz:c,d=t.selectorFactory,f=d===void 0?Kz:d;return function(p,m,h,x){x===void 0&&(x={});var v=x,y=v.pure,C=y===void 0?!0:y,T=v.areStatesEqual,N=T===void 0?Qz:T,j=v.areOwnPropsEqual,I=j===void 0?sf:j,$=v.areStatePropsEqual,w=$===void 0?sf:$,U=v.areMergedPropsEqual,L=U===void 0?sf:U,q=Rn(v,Jz),K=lf(p,i,"mapStateToProps"),B=lf(m,s,"mapDispatchToProps"),J=lf(h,u,"mergeProps");return n(f,we({methodName:"connect",getDisplayName:function(k){return"Connect("+k+")"},shouldHandleStateChanges:!!p,initMapStateToProps:K,initMapDispatchToProps:B,initMergeProps:J,pure:C,areStatesEqual:N,areOwnPropsEqual:I,areStatePropsEqual:w,areMergedPropsEqual:L},q))}}const N5=Zz();lz(Tu.unstable_batchedUpdates);function Yz(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function k5(e,t){var r=P.useState(function(){return{inputs:t,result:e()}})[0],n=P.useRef(!0),o=P.useRef(r),i=n.current||!!(t&&o.current.inputs&&Yz(t,o.current.inputs)),a=i?o.current:{inputs:t,result:e()};return P.useEffect(function(){n.current=!1,o.current=a},[a]),a.result}function Xz(e,t){return k5(function(){return e},t)}var Be=k5,Te=Xz,Qr=function(t){var r=t.top,n=t.right,o=t.bottom,i=t.left,a=n-i,s=o-r,c={top:r,right:n,bottom:o,left:i,width:a,height:s,x:i,y:r,center:{x:(n+i)/2,y:(o+r)/2}};return c},Km=function(t,r){return{top:t.top-r.top,left:t.left-r.left,bottom:t.bottom+r.bottom,right:t.right+r.right}},lx=function(t,r){return{top:t.top+r.top,left:t.left+r.left,bottom:t.bottom-r.bottom,right:t.right-r.right}},eH=function(t,r){return{top:t.top+r.y,left:t.left+r.x,bottom:t.bottom+r.y,right:t.right+r.x}},cf={top:0,right:0,bottom:0,left:0},Jm=function(t){var r=t.borderBox,n=t.margin,o=n===void 0?cf:n,i=t.border,a=i===void 0?cf:i,s=t.padding,c=s===void 0?cf:s,u=Qr(Km(r,o)),d=Qr(lx(r,a)),f=Qr(lx(d,c));return{marginBox:u,borderBox:Qr(r),paddingBox:d,contentBox:f,margin:o,border:a,padding:c}},Tr=function(t){var r=t.slice(0,-2),n=t.slice(-2);if(n!=="px")return 0;var o=Number(r);return isNaN(o)&&Tn(),o},tH=function(){return{x:window.pageXOffset,y:window.pageYOffset}},Wc=function(t,r){var n=t.borderBox,o=t.border,i=t.margin,a=t.padding,s=eH(n,r);return Jm({borderBox:s,border:o,margin:i,padding:a})},qc=function(t,r){return r===void 0&&(r=tH()),Wc(t,r)},M5=function(t,r){var n={top:Tr(r.marginTop),right:Tr(r.marginRight),bottom:Tr(r.marginBottom),left:Tr(r.marginLeft)},o={top:Tr(r.paddingTop),right:Tr(r.paddingRight),bottom:Tr(r.paddingBottom),left:Tr(r.paddingLeft)},i={top:Tr(r.borderTopWidth),right:Tr(r.borderRightWidth),bottom:Tr(r.borderBottomWidth),left:Tr(r.borderLeftWidth)};return Jm({borderBox:t,margin:n,padding:o,border:i})},A5=function(t){var r=t.getBoundingClientRect(),n=window.getComputedStyle(t);return M5(r,n)},cx=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function rH(e,t){return!!(e===t||cx(e)&&cx(t))}function nH(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!rH(e[r],t[r]))return!1;return!0}function Ct(e,t){t===void 0&&(t=nH);var r,n=[],o,i=!1;function a(){for(var s=[],c=0;c<arguments.length;c++)s[c]=arguments[c];return i&&r===this&&t(s,n)||(o=e.apply(this,s),i=!0,r=this,n=s),o}return a}var js=function(t){var r=[],n=null,o=function(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];r=s,!n&&(n=requestAnimationFrame(function(){n=null,t.apply(void 0,r)}))};return o.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},o};function D5(e,t){}D5.bind(null,"warn");D5.bind(null,"error");function ao(){}function oH(e,t){return we({},e,{},t)}function Ar(e,t,r){var n=t.map(function(o){var i=oH(r,o.options);return e.addEventListener(o.eventName,o.fn,i),function(){e.removeEventListener(o.eventName,o.fn,i)}});return function(){n.forEach(function(i){i()})}}var iH="Invariant failed";function Gc(e){this.message=e}Gc.prototype.toString=function(){return this.message};function ge(e,t){throw new Gc(iH)}var aH=function(e){Br(t,e);function t(){for(var n,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i))||this,n.callbacks=null,n.unbind=ao,n.onWindowError=function(s){var c=n.getCallbacks();c.isDragging()&&c.tryAbort();var u=s.error;u instanceof Gc&&s.preventDefault()},n.getCallbacks=function(){if(!n.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return n.callbacks},n.setCallbacks=function(s){n.callbacks=s},n}var r=t.prototype;return r.componentDidMount=function(){this.unbind=Ar(window,[{eventName:"error",fn:this.onWindowError}])},r.componentDidCatch=function(o){if(o instanceof Gc){this.setState({});return}throw o},r.componentWillUnmount=function(){this.unbind()},r.render=function(){return this.props.children(this.setCallbacks)},t}(ae.Component),sH=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,Kc=function(t){return t+1},lH=function(t){return`
  You have lifted an item in position `+Kc(t.source.index)+`
`},R5=function(t,r){var n=t.droppableId===r.droppableId,o=Kc(t.index),i=Kc(r.index);return n?`
      You have moved the item from position `+o+`
      to position `+i+`
    `:`
    You have moved the item from position `+o+`
    in list `+t.droppableId+`
    to list `+r.droppableId+`
    in position `+i+`
  `},L5=function(t,r,n){var o=r.droppableId===n.droppableId;return o?`
      The item `+t+`
      has been combined with `+n.draggableId:`
      The item `+t+`
      in list `+r.droppableId+`
      has been combined with `+n.draggableId+`
      in list `+n.droppableId+`
    `},cH=function(t){var r=t.destination;if(r)return R5(t.source,r);var n=t.combine;return n?L5(t.draggableId,t.source,n):"You are over an area that cannot be dropped on"},ux=function(t){return`
  The item has returned to its starting position
  of `+Kc(t.index)+`
`},uH=function(t){if(t.reason==="CANCEL")return`
      Movement cancelled.
      `+ux(t.source)+`
    `;var r=t.destination,n=t.combine;return r?`
      You have dropped the item.
      `+R5(t.source,r)+`
    `:n?`
      You have dropped the item.
      `+L5(t.draggableId,t.source,n)+`
    `:`
    The item has been dropped while not over a drop area.
    `+ux(t.source)+`
  `},nc={dragHandleUsageInstructions:sH,onDragStart:lH,onDragUpdate:cH,onDragEnd:uH},wt={x:0,y:0},Pt=function(t,r){return{x:t.x+r.x,y:t.y+r.y}},mr=function(t,r){return{x:t.x-r.x,y:t.y-r.y}},so=function(t,r){return t.x===r.x&&t.y===r.y},ia=function(t){return{x:t.x!==0?-t.x:0,y:t.y!==0?-t.y:0}},Go=function(t,r,n){var o;return n===void 0&&(n=0),o={},o[t]=r,o[t==="x"?"y":"x"]=n,o},Ts=function(t,r){return Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2))},dx=function(t,r){return Math.min.apply(Math,r.map(function(n){return Ts(t,n)}))},F5=function(t){return function(r){return{x:t(r.x),y:t(r.y)}}},dH=function(e,t){var r=Qr({top:Math.max(t.top,e.top),right:Math.min(t.right,e.right),bottom:Math.min(t.bottom,e.bottom),left:Math.max(t.left,e.left)});return r.width<=0||r.height<=0?null:r},Ks=function(t,r){return{top:t.top+r.y,left:t.left+r.x,bottom:t.bottom+r.y,right:t.right+r.x}},fx=function(t){return[{x:t.left,y:t.top},{x:t.right,y:t.top},{x:t.left,y:t.bottom},{x:t.right,y:t.bottom}]},fH={top:0,right:0,bottom:0,left:0},gH=function(t,r){return r?Ks(t,r.scroll.diff.displacement):t},pH=function(t,r,n){if(n&&n.increasedBy){var o;return we({},t,(o={},o[r.end]=t[r.end]+n.increasedBy[r.line],o))}return t},mH=function(t,r){return r&&r.shouldClipSubject?dH(r.pageMarginBox,t):Qr(t)},Hi=function(e){var t=e.page,r=e.withPlaceholder,n=e.axis,o=e.frame,i=gH(t.marginBox,o),a=pH(i,n,r),s=mH(a,o);return{page:t,withPlaceholder:r,active:s}},Qm=function(e,t){e.frame||ge();var r=e.frame,n=mr(t,r.scroll.initial),o=ia(n),i=we({},r,{scroll:{initial:r.scroll.initial,current:t,diff:{value:n,displacement:o},max:r.scroll.max}}),a=Hi({page:e.subject.page,withPlaceholder:e.subject.withPlaceholder,axis:e.axis,frame:i}),s=we({},e,{frame:i,subject:a});return s};function Jc(e){return Object.values?Object.values(e):Object.keys(e).map(function(t){return e[t]})}function Zm(e,t){if(e.findIndex)return e.findIndex(t);for(var r=0;r<e.length;r++)if(t(e[r]))return r;return-1}function Co(e,t){if(e.find)return e.find(t);var r=Zm(e,t);if(r!==-1)return e[r]}function _5(e){return Array.prototype.slice.call(e)}var B5=Ct(function(e){return e.reduce(function(t,r){return t[r.descriptor.id]=r,t},{})}),z5=Ct(function(e){return e.reduce(function(t,r){return t[r.descriptor.id]=r,t},{})}),td=Ct(function(e){return Jc(e)}),hH=Ct(function(e){return Jc(e)}),aa=Ct(function(e,t){var r=hH(t).filter(function(n){return e===n.descriptor.droppableId}).sort(function(n,o){return n.descriptor.index-o.descriptor.index});return r});function Ym(e){return e.at&&e.at.type==="REORDER"?e.at.destination:null}function rd(e){return e.at&&e.at.type==="COMBINE"?e.at.combine:null}var nd=Ct(function(e,t){return t.filter(function(r){return r.descriptor.id!==e.descriptor.id})}),vH=function(e){var t=e.isMovingForward,r=e.draggable,n=e.destination,o=e.insideDestination,i=e.previousImpact;if(!n.isCombineEnabled)return null;var a=Ym(i);if(!a)return null;function s(h){var x={type:"COMBINE",combine:{draggableId:h,droppableId:n.descriptor.id}};return we({},i,{at:x})}var c=i.displaced.all,u=c.length?c[0]:null;if(t)return u?s(u):null;var d=nd(r,o);if(!u){if(!d.length)return null;var f=d[d.length-1];return s(f.descriptor.id)}var g=Zm(d,function(h){return h.descriptor.id===u});g===-1&&ge();var p=g-1;if(p<0)return null;var m=d[p];return s(m.descriptor.id)},sa=function(e,t){return e.descriptor.droppableId===t.descriptor.id},H5={point:wt,value:0},Os={invisible:{},visible:{},all:[]},xH={displaced:Os,displacedBy:H5,at:null},Lr=function(e,t){return function(r){return e<=r&&r<=t}},U5=function(e){var t=Lr(e.top,e.bottom),r=Lr(e.left,e.right);return function(n){var o=t(n.top)&&t(n.bottom)&&r(n.left)&&r(n.right);if(o)return!0;var i=t(n.top)||t(n.bottom),a=r(n.left)||r(n.right),s=i&&a;if(s)return!0;var c=n.top<e.top&&n.bottom>e.bottom,u=n.left<e.left&&n.right>e.right,d=c&&u;if(d)return!0;var f=c&&a||u&&i;return f}},yH=function(e){var t=Lr(e.top,e.bottom),r=Lr(e.left,e.right);return function(n){var o=t(n.top)&&t(n.bottom)&&r(n.left)&&r(n.right);return o}},Xm={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},V5={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},bH=function(e){return function(t){var r=Lr(t.top,t.bottom),n=Lr(t.left,t.right);return function(o){return e===Xm?r(o.top)&&r(o.bottom):n(o.left)&&n(o.right)}}},SH=function(t,r){var n=r.frame?r.frame.scroll.diff.displacement:wt;return Ks(t,n)},CH=function(t,r,n){return r.subject.active?n(r.subject.active)(t):!1},wH=function(t,r,n){return n(r)(t)},eh=function(t){var r=t.target,n=t.destination,o=t.viewport,i=t.withDroppableDisplacement,a=t.isVisibleThroughFrameFn,s=i?SH(r,n):r;return CH(s,n,a)&&wH(s,o,a)},jH=function(t){return eh(we({},t,{isVisibleThroughFrameFn:U5}))},W5=function(t){return eh(we({},t,{isVisibleThroughFrameFn:yH}))},TH=function(t){return eh(we({},t,{isVisibleThroughFrameFn:bH(t.destination.axis)}))},OH=function(t,r,n){if(typeof n=="boolean")return n;if(!r)return!0;var o=r.invisible,i=r.visible;if(o[t])return!1;var a=i[t];return a?a.shouldAnimate:!0};function IH(e,t){var r=e.page.marginBox,n={top:t.point.y,right:0,bottom:0,left:t.point.x};return Qr(Km(r,n))}function Is(e){var t=e.afterDragging,r=e.destination,n=e.displacedBy,o=e.viewport,i=e.forceShouldAnimate,a=e.last;return t.reduce(function(c,u){var d=IH(u,n),f=u.descriptor.id;c.all.push(f);var g=jH({target:d,destination:r,viewport:o,withDroppableDisplacement:!0});if(!g)return c.invisible[u.descriptor.id]=!0,c;var p=OH(f,a,i),m={draggableId:f,shouldAnimate:p};return c.visible[f]=m,c},{all:[],visible:{},invisible:{}})}function PH(e,t){if(!e.length)return 0;var r=e[e.length-1].descriptor.index;return t.inHomeList?r:r+1}function gx(e){var t=e.insideDestination,r=e.inHomeList,n=e.displacedBy,o=e.destination,i=PH(t,{inHomeList:r});return{displaced:Os,displacedBy:n,at:{type:"REORDER",destination:{droppableId:o.descriptor.id,index:i}}}}function Qc(e){var t=e.draggable,r=e.insideDestination,n=e.destination,o=e.viewport,i=e.displacedBy,a=e.last,s=e.index,c=e.forceShouldAnimate,u=sa(t,n);if(s==null)return gx({insideDestination:r,inHomeList:u,displacedBy:i,destination:n});var d=Co(r,function(h){return h.descriptor.index===s});if(!d)return gx({insideDestination:r,inHomeList:u,displacedBy:i,destination:n});var f=nd(t,r),g=r.indexOf(d),p=f.slice(g),m=Is({afterDragging:p,destination:n,displacedBy:i,last:a,viewport:o.frame,forceShouldAnimate:c});return{displaced:m,displacedBy:i,at:{type:"REORDER",destination:{droppableId:n.descriptor.id,index:s}}}}function po(e,t){return!!t.effected[e]}var EH=function(e){var t=e.isMovingForward,r=e.destination,n=e.draggables,o=e.combine,i=e.afterCritical;if(!r.isCombineEnabled)return null;var a=o.draggableId,s=n[a],c=s.descriptor.index,u=po(a,i);return u?t?c:c-1:t?c+1:c},$H=function(e){var t=e.isMovingForward,r=e.isInHomeList,n=e.insideDestination,o=e.location;if(!n.length)return null;var i=o.index,a=t?i+1:i-1,s=n[0].descriptor.index,c=n[n.length-1].descriptor.index,u=r?c:c+1;return a<s||a>u?null:a},NH=function(e){var t=e.isMovingForward,r=e.isInHomeList,n=e.draggable,o=e.draggables,i=e.destination,a=e.insideDestination,s=e.previousImpact,c=e.viewport,u=e.afterCritical,d=s.at;if(d||ge(),d.type==="REORDER"){var f=$H({isMovingForward:t,isInHomeList:r,location:d.destination,insideDestination:a});return f==null?null:Qc({draggable:n,insideDestination:a,destination:i,viewport:c,last:s.displaced,displacedBy:s.displacedBy,index:f})}var g=EH({isMovingForward:t,destination:i,displaced:s.displaced,draggables:o,combine:d.combine,afterCritical:u});return g==null?null:Qc({draggable:n,insideDestination:a,destination:i,viewport:c,last:s.displaced,displacedBy:s.displacedBy,index:g})},kH=function(e){var t=e.displaced,r=e.afterCritical,n=e.combineWith,o=e.displacedBy,i=!!(t.visible[n]||t.invisible[n]);return po(n,r)?i?wt:ia(o.point):i?o.point:wt},MH=function(e){var t=e.afterCritical,r=e.impact,n=e.draggables,o=rd(r);o||ge();var i=o.draggableId,a=n[i].page.borderBox.center,s=kH({displaced:r.displaced,afterCritical:t,combineWith:i,displacedBy:r.displacedBy});return Pt(a,s)},q5=function(t,r){return r.margin[t.start]+r.borderBox[t.size]/2},AH=function(t,r){return r.margin[t.end]+r.borderBox[t.size]/2},th=function(t,r,n){return r[t.crossAxisStart]+n.margin[t.crossAxisStart]+n.borderBox[t.crossAxisSize]/2},px=function(t){var r=t.axis,n=t.moveRelativeTo,o=t.isMoving;return Go(r.line,n.marginBox[r.end]+q5(r,o),th(r,n.marginBox,o))},mx=function(t){var r=t.axis,n=t.moveRelativeTo,o=t.isMoving;return Go(r.line,n.marginBox[r.start]-AH(r,o),th(r,n.marginBox,o))},DH=function(t){var r=t.axis,n=t.moveInto,o=t.isMoving;return Go(r.line,n.contentBox[r.start]+q5(r,o),th(r,n.contentBox,o))},RH=function(e){var t=e.impact,r=e.draggable,n=e.draggables,o=e.droppable,i=e.afterCritical,a=aa(o.descriptor.id,n),s=r.page,c=o.axis;if(!a.length)return DH({axis:c,moveInto:o.page,isMoving:s});var u=t.displaced,d=t.displacedBy,f=u.all[0];if(f){var g=n[f];if(po(f,i))return mx({axis:c,moveRelativeTo:g.page,isMoving:s});var p=Wc(g.page,d.point);return mx({axis:c,moveRelativeTo:p,isMoving:s})}var m=a[a.length-1];if(m.descriptor.id===r.descriptor.id)return s.borderBox.center;if(po(m.descriptor.id,i)){var h=Wc(m.page,ia(i.displacedBy.point));return px({axis:c,moveRelativeTo:h,isMoving:s})}return px({axis:c,moveRelativeTo:m.page,isMoving:s})},Ag=function(e,t){var r=e.frame;return r?Pt(t,r.scroll.diff.displacement):t},LH=function(t){var r=t.impact,n=t.draggable,o=t.droppable,i=t.draggables,a=t.afterCritical,s=n.page.borderBox.center,c=r.at;return!o||!c?s:c.type==="REORDER"?RH({impact:r,draggable:n,draggables:i,droppable:o,afterCritical:a}):MH({impact:r,draggables:i,afterCritical:a})},od=function(e){var t=LH(e),r=e.droppable,n=r?Ag(r,t):t;return n},G5=function(e,t){var r=mr(t,e.scroll.initial),n=ia(r),o=Qr({top:t.y,bottom:t.y+e.frame.height,left:t.x,right:t.x+e.frame.width}),i={frame:o,scroll:{initial:e.scroll.initial,max:e.scroll.max,current:t,diff:{value:r,displacement:n}}};return i};function hx(e,t){return e.map(function(r){return t[r]})}function FH(e,t){for(var r=0;r<t.length;r++){var n=t[r].visible[e];if(n)return n}return null}var _H=function(e){var t=e.impact,r=e.viewport,n=e.destination,o=e.draggables,i=e.maxScrollChange,a=G5(r,Pt(r.scroll.current,i)),s=n.frame?Qm(n,Pt(n.frame.scroll.current,i)):n,c=t.displaced,u=Is({afterDragging:hx(c.all,o),destination:n,displacedBy:t.displacedBy,viewport:a.frame,last:c,forceShouldAnimate:!1}),d=Is({afterDragging:hx(c.all,o),destination:s,displacedBy:t.displacedBy,viewport:r.frame,last:c,forceShouldAnimate:!1}),f={},g={},p=[c,u,d];c.all.forEach(function(h){var x=FH(h,p);if(x){g[h]=x;return}f[h]=!0});var m=we({},t,{displaced:{all:c.all,invisible:f,visible:g}});return m},BH=function(e,t){return Pt(e.scroll.diff.displacement,t)},rh=function(e){var t=e.pageBorderBoxCenter,r=e.draggable,n=e.viewport,o=BH(n,t),i=mr(o,r.page.borderBox.center);return Pt(r.client.borderBox.center,i)},K5=function(e){var t=e.draggable,r=e.destination,n=e.newPageBorderBoxCenter,o=e.viewport,i=e.withDroppableDisplacement,a=e.onlyOnMainAxis,s=a===void 0?!1:a,c=mr(n,t.page.borderBox.center),u=Ks(t.page.borderBox,c),d={target:u,destination:r,withDroppableDisplacement:i,viewport:o};return s?TH(d):W5(d)},zH=function(e){var t=e.isMovingForward,r=e.draggable,n=e.destination,o=e.draggables,i=e.previousImpact,a=e.viewport,s=e.previousPageBorderBoxCenter,c=e.previousClientSelection,u=e.afterCritical;if(!n.isEnabled)return null;var d=aa(n.descriptor.id,o),f=sa(r,n),g=vH({isMovingForward:t,draggable:r,destination:n,insideDestination:d,previousImpact:i})||NH({isMovingForward:t,isInHomeList:f,draggable:r,draggables:o,destination:n,insideDestination:d,previousImpact:i,viewport:a,afterCritical:u});if(!g)return null;var p=od({impact:g,draggable:r,droppable:n,draggables:o,afterCritical:u}),m=K5({draggable:r,destination:n,newPageBorderBoxCenter:p,viewport:a.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(m){var h=rh({pageBorderBoxCenter:p,draggable:r,viewport:a});return{clientSelection:h,impact:g,scrollJumpRequest:null}}var x=mr(p,s),v=_H({impact:g,viewport:a,destination:n,draggables:o,maxScrollChange:x});return{clientSelection:c,impact:v,scrollJumpRequest:x}},Wt=function(t){var r=t.subject.active;return r||ge(),r},HH=function(e){var t=e.isMovingForward,r=e.pageBorderBoxCenter,n=e.source,o=e.droppables,i=e.viewport,a=n.subject.active;if(!a)return null;var s=n.axis,c=Lr(a[s.start],a[s.end]),u=td(o).filter(function(f){return f!==n}).filter(function(f){return f.isEnabled}).filter(function(f){return!!f.subject.active}).filter(function(f){return U5(i.frame)(Wt(f))}).filter(function(f){var g=Wt(f);return t?a[s.crossAxisEnd]<g[s.crossAxisEnd]:g[s.crossAxisStart]<a[s.crossAxisStart]}).filter(function(f){var g=Wt(f),p=Lr(g[s.start],g[s.end]);return c(g[s.start])||c(g[s.end])||p(a[s.start])||p(a[s.end])}).sort(function(f,g){var p=Wt(f)[s.crossAxisStart],m=Wt(g)[s.crossAxisStart];return t?p-m:m-p}).filter(function(f,g,p){return Wt(f)[s.crossAxisStart]===Wt(p[0])[s.crossAxisStart]});if(!u.length)return null;if(u.length===1)return u[0];var d=u.filter(function(f){var g=Lr(Wt(f)[s.start],Wt(f)[s.end]);return g(r[s.line])});return d.length===1?d[0]:d.length>1?d.sort(function(f,g){return Wt(f)[s.start]-Wt(g)[s.start]})[0]:u.sort(function(f,g){var p=dx(r,fx(Wt(f))),m=dx(r,fx(Wt(g)));return p!==m?p-m:Wt(f)[s.start]-Wt(g)[s.start]})[0]},vx=function(t,r){var n=t.page.borderBox.center;return po(t.descriptor.id,r)?mr(n,r.displacedBy.point):n},UH=function(t,r){var n=t.page.borderBox;return po(t.descriptor.id,r)?Ks(n,ia(r.displacedBy.point)):n},VH=function(e){var t=e.pageBorderBoxCenter,r=e.viewport,n=e.destination,o=e.insideDestination,i=e.afterCritical,a=o.filter(function(s){return W5({target:UH(s,i),destination:n,viewport:r.frame,withDroppableDisplacement:!0})}).sort(function(s,c){var u=Ts(t,Ag(n,vx(s,i))),d=Ts(t,Ag(n,vx(c,i)));return u<d?-1:d<u?1:s.descriptor.index-c.descriptor.index});return a[0]||null},Js=Ct(function(t,r){var n=r[t.line];return{value:n,point:Go(t.line,n)}}),WH=function(t,r,n){var o=t.axis;if(t.descriptor.mode==="virtual")return Go(o.line,r[o.line]);var i=t.subject.page.contentBox[o.size],a=aa(t.descriptor.id,n),s=a.reduce(function(d,f){return d+f.client.marginBox[o.size]},0),c=s+r[o.line],u=c-i;return u<=0?null:Go(o.line,u)},J5=function(t,r){return we({},t,{scroll:we({},t.scroll,{max:r})})},Q5=function(t,r,n){var o=t.frame;sa(r,t)&&ge(),t.subject.withPlaceholder&&ge();var i=Js(t.axis,r.displaceBy).point,a=WH(t,i,n),s={placeholderSize:i,increasedBy:a,oldFrameMaxScroll:t.frame?t.frame.scroll.max:null};if(!o){var c=Hi({page:t.subject.page,withPlaceholder:s,axis:t.axis,frame:t.frame});return we({},t,{subject:c})}var u=a?Pt(o.scroll.max,a):o.scroll.max,d=J5(o,u),f=Hi({page:t.subject.page,withPlaceholder:s,axis:t.axis,frame:d});return we({},t,{subject:f,frame:d})},qH=function(t){var r=t.subject.withPlaceholder;r||ge();var n=t.frame;if(!n){var o=Hi({page:t.subject.page,axis:t.axis,frame:null,withPlaceholder:null});return we({},t,{subject:o})}var i=r.oldFrameMaxScroll;i||ge();var a=J5(n,i),s=Hi({page:t.subject.page,axis:t.axis,frame:a,withPlaceholder:null});return we({},t,{subject:s,frame:a})},GH=function(e){var t=e.previousPageBorderBoxCenter,r=e.moveRelativeTo,n=e.insideDestination,o=e.draggable,i=e.draggables,a=e.destination,s=e.viewport,c=e.afterCritical;if(!r){if(n.length)return null;var u={displaced:Os,displacedBy:H5,at:{type:"REORDER",destination:{droppableId:a.descriptor.id,index:0}}},d=od({impact:u,draggable:o,droppable:a,draggables:i,afterCritical:c}),f=sa(o,a)?a:Q5(a,o,i),g=K5({draggable:o,destination:f,newPageBorderBoxCenter:d,viewport:s.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return g?u:null}var p=t[a.axis.line]<=r.page.borderBox.center[a.axis.line],m=function(){var x=r.descriptor.index;return r.descriptor.id===o.descriptor.id||p?x:x+1}(),h=Js(a.axis,o.displaceBy);return Qc({draggable:o,insideDestination:n,destination:a,viewport:s,displacedBy:h,last:Os,index:m})},KH=function(e){var t=e.isMovingForward,r=e.previousPageBorderBoxCenter,n=e.draggable,o=e.isOver,i=e.draggables,a=e.droppables,s=e.viewport,c=e.afterCritical,u=HH({isMovingForward:t,pageBorderBoxCenter:r,source:o,droppables:a,viewport:s});if(!u)return null;var d=aa(u.descriptor.id,i),f=VH({pageBorderBoxCenter:r,viewport:s,destination:u,insideDestination:d,afterCritical:c}),g=GH({previousPageBorderBoxCenter:r,destination:u,draggable:n,draggables:i,moveRelativeTo:f,insideDestination:d,viewport:s,afterCritical:c});if(!g)return null;var p=od({impact:g,draggable:n,droppable:u,draggables:i,afterCritical:c}),m=rh({pageBorderBoxCenter:p,draggable:n,viewport:s});return{clientSelection:m,impact:g,scrollJumpRequest:null}},xr=function(e){var t=e.at;return t?t.type==="REORDER"?t.destination.droppableId:t.combine.droppableId:null},JH=function(t,r){var n=xr(t);return n?r[n]:null},QH=function(e){var t=e.state,r=e.type,n=JH(t.impact,t.dimensions.droppables),o=!!n,i=t.dimensions.droppables[t.critical.droppable.id],a=n||i,s=a.axis.direction,c=s==="vertical"&&(r==="MOVE_UP"||r==="MOVE_DOWN")||s==="horizontal"&&(r==="MOVE_LEFT"||r==="MOVE_RIGHT");if(c&&!o)return null;var u=r==="MOVE_DOWN"||r==="MOVE_RIGHT",d=t.dimensions.draggables[t.critical.draggable.id],f=t.current.page.borderBoxCenter,g=t.dimensions,p=g.draggables,m=g.droppables;return c?zH({isMovingForward:u,previousPageBorderBoxCenter:f,draggable:d,destination:a,draggables:p,viewport:t.viewport,previousClientSelection:t.current.client.selection,previousImpact:t.impact,afterCritical:t.afterCritical}):KH({isMovingForward:u,previousPageBorderBoxCenter:f,draggable:d,isOver:a,draggables:p,droppables:m,viewport:t.viewport,afterCritical:t.afterCritical})};function Io(e){return e.phase==="DRAGGING"||e.phase==="COLLECTING"}function Z5(e){var t=Lr(e.top,e.bottom),r=Lr(e.left,e.right);return function(o){return t(o.y)&&r(o.x)}}function ZH(e,t){return e.left<t.right&&e.right>t.left&&e.top<t.bottom&&e.bottom>t.top}function YH(e){var t=e.pageBorderBox,r=e.draggable,n=e.candidates,o=r.page.borderBox.center,i=n.map(function(a){var s=a.axis,c=Go(a.axis.line,t.center[s.line],a.page.borderBox.center[s.crossAxisLine]);return{id:a.descriptor.id,distance:Ts(o,c)}}).sort(function(a,s){return s.distance-a.distance});return i[0]?i[0].id:null}function XH(e){var t=e.pageBorderBox,r=e.draggable,n=e.droppables,o=td(n).filter(function(i){if(!i.isEnabled)return!1;var a=i.subject.active;if(!a||!ZH(t,a))return!1;if(Z5(a)(t.center))return!0;var s=i.axis,c=a.center[s.crossAxisLine],u=t[s.crossAxisStart],d=t[s.crossAxisEnd],f=Lr(a[s.crossAxisStart],a[s.crossAxisEnd]),g=f(u),p=f(d);return!g&&!p?!0:g?u<c:d>c});return o.length?o.length===1?o[0].descriptor.id:YH({pageBorderBox:t,draggable:r,candidates:o}):null}var Y5=function(t,r){return Qr(Ks(t,r))},eU=function(e,t){var r=e.frame;return r?Y5(t,r.scroll.diff.value):t};function X5(e){var t=e.displaced,r=e.id;return!!(t.visible[r]||t.invisible[r])}function tU(e){var t=e.draggable,r=e.closest,n=e.inHomeList;return r?n&&r.descriptor.index>t.descriptor.index?r.descriptor.index-1:r.descriptor.index:null}var rU=function(e){var t=e.pageBorderBoxWithDroppableScroll,r=e.draggable,n=e.destination,o=e.insideDestination,i=e.last,a=e.viewport,s=e.afterCritical,c=n.axis,u=Js(n.axis,r.displaceBy),d=u.value,f=t[c.start],g=t[c.end],p=nd(r,o),m=Co(p,function(x){var v=x.descriptor.id,y=x.page.borderBox.center[c.line],C=po(v,s),T=X5({displaced:i,id:v});return C?T?g<=y:f<y-d:T?g<=y+d:f<y}),h=tU({draggable:r,closest:m,inHomeList:sa(r,n)});return Qc({draggable:r,insideDestination:o,destination:n,viewport:a,last:i,displacedBy:u,index:h})},nU=4,oU=function(e){var t=e.draggable,r=e.pageBorderBoxWithDroppableScroll,n=e.previousImpact,o=e.destination,i=e.insideDestination,a=e.afterCritical;if(!o.isCombineEnabled)return null;var s=o.axis,c=Js(o.axis,t.displaceBy),u=c.value,d=r[s.start],f=r[s.end],g=nd(t,i),p=Co(g,function(h){var x=h.descriptor.id,v=h.page.borderBox,y=v[s.size],C=y/nU,T=po(x,a),N=X5({displaced:n.displaced,id:x});return T?N?f>v[s.start]+C&&f<v[s.end]-C:d>v[s.start]-u+C&&d<v[s.end]-u-C:N?f>v[s.start]+u+C&&f<v[s.end]+u-C:d>v[s.start]+C&&d<v[s.end]-C});if(!p)return null;var m={displacedBy:c,displaced:n.displaced,at:{type:"COMBINE",combine:{draggableId:p.descriptor.id,droppableId:o.descriptor.id}}};return m},e3=function(e){var t=e.pageOffset,r=e.draggable,n=e.draggables,o=e.droppables,i=e.previousImpact,a=e.viewport,s=e.afterCritical,c=Y5(r.page.borderBox,t),u=XH({pageBorderBox:c,draggable:r,droppables:o});if(!u)return xH;var d=o[u],f=aa(d.descriptor.id,n),g=eU(d,c);return oU({pageBorderBoxWithDroppableScroll:g,draggable:r,previousImpact:i,destination:d,insideDestination:f,afterCritical:s})||rU({pageBorderBoxWithDroppableScroll:g,draggable:r,destination:d,insideDestination:f,last:i.displaced,viewport:a,afterCritical:s})},nh=function(e,t){var r;return we({},e,(r={},r[t.descriptor.id]=t,r))},iU=function(t){var r=t.previousImpact,n=t.impact,o=t.droppables,i=xr(r),a=xr(n);if(!i||i===a)return o;var s=o[i];if(!s.subject.withPlaceholder)return o;var c=qH(s);return nh(o,c)},aU=function(e){var t=e.draggable,r=e.draggables,n=e.droppables,o=e.previousImpact,i=e.impact,a=iU({previousImpact:o,impact:i,droppables:n}),s=xr(i);if(!s)return a;var c=n[s];if(sa(t,c)||c.subject.withPlaceholder)return a;var u=Q5(c,t,r);return nh(a,u)},ts=function(e){var t=e.state,r=e.clientSelection,n=e.dimensions,o=e.viewport,i=e.impact,a=e.scrollJumpRequest,s=o||t.viewport,c=n||t.dimensions,u=r||t.current.client.selection,d=mr(u,t.initial.client.selection),f={offset:d,selection:u,borderBoxCenter:Pt(t.initial.client.borderBoxCenter,d)},g={selection:Pt(f.selection,s.scroll.current),borderBoxCenter:Pt(f.borderBoxCenter,s.scroll.current),offset:Pt(f.offset,s.scroll.diff.value)},p={client:f,page:g};if(t.phase==="COLLECTING")return we({phase:"COLLECTING"},t,{dimensions:c,viewport:s,current:p});var m=c.draggables[t.critical.draggable.id],h=i||e3({pageOffset:g.offset,draggable:m,draggables:c.draggables,droppables:c.droppables,previousImpact:t.impact,viewport:s,afterCritical:t.afterCritical}),x=aU({draggable:m,impact:h,previousImpact:t.impact,draggables:c.draggables,droppables:c.droppables}),v=we({},t,{current:p,dimensions:{draggables:c.draggables,droppables:x},impact:h,viewport:s,scrollJumpRequest:a||null,forceShouldAnimate:a?!1:null});return v};function sU(e,t){return e.map(function(r){return t[r]})}var t3=function(e){var t=e.impact,r=e.viewport,n=e.draggables,o=e.destination,i=e.forceShouldAnimate,a=t.displaced,s=sU(a.all,n),c=Is({afterDragging:s,destination:o,displacedBy:t.displacedBy,viewport:r.frame,forceShouldAnimate:i,last:a});return we({},t,{displaced:c})},r3=function(e){var t=e.impact,r=e.draggable,n=e.droppable,o=e.draggables,i=e.viewport,a=e.afterCritical,s=od({impact:t,draggable:r,draggables:o,droppable:n,afterCritical:a});return rh({pageBorderBoxCenter:s,draggable:r,viewport:i})},n3=function(e){var t=e.state,r=e.dimensions,n=e.viewport;t.movementMode!=="SNAP"&&ge();var o=t.impact,i=n||t.viewport,a=r||t.dimensions,s=a.draggables,c=a.droppables,u=s[t.critical.draggable.id],d=xr(o);d||ge();var f=c[d],g=t3({impact:o,viewport:i,destination:f,draggables:s}),p=r3({impact:g,draggable:u,droppable:f,draggables:s,viewport:i,afterCritical:t.afterCritical});return ts({impact:g,clientSelection:p,state:t,dimensions:a,viewport:i})},lU=function(e){return{index:e.index,droppableId:e.droppableId}},o3=function(e){var t=e.draggable,r=e.home,n=e.draggables,o=e.viewport,i=Js(r.axis,t.displaceBy),a=aa(r.descriptor.id,n),s=a.indexOf(t);s===-1&&ge();var c=a.slice(s+1),u=c.reduce(function(p,m){return p[m.descriptor.id]=!0,p},{}),d={inVirtualList:r.descriptor.mode==="virtual",displacedBy:i,effected:u},f=Is({afterDragging:c,destination:r,displacedBy:i,last:null,viewport:o.frame,forceShouldAnimate:!1}),g={displaced:f,displacedBy:i,at:{type:"REORDER",destination:lU(t.descriptor)}};return{impact:g,afterCritical:d}},cU=function(e,t){return{draggables:e.draggables,droppables:nh(e.droppables,t)}},uU=function(e){var t=e.draggable,r=e.offset,n=e.initialWindowScroll,o=Wc(t.client,r),i=qc(o,n),a=we({},t,{placeholder:we({},t.placeholder,{client:o}),client:o,page:i});return a},dU=function(e){var t=e.frame;return t||ge(),t},fU=function(e){var t=e.additions,r=e.updatedDroppables,n=e.viewport,o=n.scroll.diff.value;return t.map(function(i){var a=i.descriptor.droppableId,s=r[a],c=dU(s),u=c.scroll.diff.value,d=Pt(o,u),f=uU({draggable:i,offset:d,initialWindowScroll:n.scroll.initial});return f})},gU=function(e){var t=e.state,r=e.published,n=r.modified.map(function(C){var T=t.dimensions.droppables[C.droppableId],N=Qm(T,C.scroll);return N}),o=we({},t.dimensions.droppables,{},B5(n)),i=z5(fU({additions:r.additions,updatedDroppables:o,viewport:t.viewport})),a=we({},t.dimensions.draggables,{},i);r.removals.forEach(function(C){delete a[C]});var s={droppables:o,draggables:a},c=xr(t.impact),u=c?s.droppables[c]:null,d=s.draggables[t.critical.draggable.id],f=s.droppables[t.critical.droppable.id],g=o3({draggable:d,home:f,draggables:a,viewport:t.viewport}),p=g.impact,m=g.afterCritical,h=u&&u.isCombineEnabled?t.impact:p,x=e3({pageOffset:t.current.page.offset,draggable:s.draggables[t.critical.draggable.id],draggables:s.draggables,droppables:s.droppables,previousImpact:h,viewport:t.viewport,afterCritical:m}),v=we({phase:"DRAGGING"},t,{phase:"DRAGGING",impact:x,onLiftImpact:p,dimensions:s,afterCritical:m,forceShouldAnimate:!1});if(t.phase==="COLLECTING")return v;var y=we({phase:"DROP_PENDING"},v,{phase:"DROP_PENDING",reason:t.reason,isWaiting:!1});return y},Dg=function(t){return t.movementMode==="SNAP"},uf=function(t,r,n){var o=cU(t.dimensions,r);return!Dg(t)||n?ts({state:t,dimensions:o}):n3({state:t,dimensions:o})};function df(e){return e.isDragging&&e.movementMode==="SNAP"?we({phase:"DRAGGING"},e,{scrollJumpRequest:null}):e}var xx={phase:"IDLE",completed:null,shouldFlush:!1},pU=function(e,t){if(e===void 0&&(e=xx),t.type==="FLUSH")return we({},xx,{shouldFlush:!0});if(t.type==="INITIAL_PUBLISH"){e.phase!=="IDLE"&&ge();var r=t.payload,n=r.critical,o=r.clientSelection,i=r.viewport,a=r.dimensions,s=r.movementMode,c=a.draggables[n.draggable.id],u=a.droppables[n.droppable.id],d={selection:o,borderBoxCenter:c.client.borderBox.center,offset:wt},f={client:d,page:{selection:Pt(d.selection,i.scroll.initial),borderBoxCenter:Pt(d.selection,i.scroll.initial),offset:Pt(d.selection,i.scroll.diff.value)}},g=td(a.droppables).every(function(ee){return!ee.isFixedOnPage}),p=o3({draggable:c,home:u,draggables:a.draggables,viewport:i}),m=p.impact,h=p.afterCritical,x={phase:"DRAGGING",isDragging:!0,critical:n,movementMode:s,dimensions:a,initial:f,current:f,isWindowScrollAllowed:g,impact:m,afterCritical:h,onLiftImpact:m,viewport:i,scrollJumpRequest:null,forceShouldAnimate:null};return x}if(t.type==="COLLECTION_STARTING"){if(e.phase==="COLLECTING"||e.phase==="DROP_PENDING")return e;e.phase!=="DRAGGING"&&ge();var v=we({phase:"COLLECTING"},e,{phase:"COLLECTING"});return v}if(t.type==="PUBLISH_WHILE_DRAGGING")return e.phase==="COLLECTING"||e.phase==="DROP_PENDING"||ge(),gU({state:e,published:t.payload});if(t.type==="MOVE"){if(e.phase==="DROP_PENDING")return e;Io(e)||ge();var y=t.payload.client;return so(y,e.current.client.selection)?e:ts({state:e,clientSelection:y,impact:Dg(e)?e.impact:null})}if(t.type==="UPDATE_DROPPABLE_SCROLL"){if(e.phase==="DROP_PENDING"||e.phase==="COLLECTING")return df(e);Io(e)||ge();var C=t.payload,T=C.id,N=C.newScroll,j=e.dimensions.droppables[T];if(!j)return e;var I=Qm(j,N);return uf(e,I,!1)}if(t.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(e.phase==="DROP_PENDING")return e;Io(e)||ge();var $=t.payload,w=$.id,U=$.isEnabled,L=e.dimensions.droppables[w];L||ge(),L.isEnabled===U&&ge();var q=we({},L,{isEnabled:U});return uf(e,q,!0)}if(t.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(e.phase==="DROP_PENDING")return e;Io(e)||ge();var K=t.payload,B=K.id,J=K.isCombineEnabled,Y=e.dimensions.droppables[B];Y||ge(),Y.isCombineEnabled===J&&ge();var k=we({},Y,{isCombineEnabled:J});return uf(e,k,!0)}if(t.type==="MOVE_BY_WINDOW_SCROLL"){if(e.phase==="DROP_PENDING"||e.phase==="DROP_ANIMATING")return e;Io(e)||ge(),e.isWindowScrollAllowed||ge();var _=t.payload.newScroll;if(so(e.viewport.scroll.current,_))return df(e);var z=G5(e.viewport,_);return Dg(e)?n3({state:e,viewport:z}):ts({state:e,viewport:z})}if(t.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!Io(e))return e;var V=t.payload.maxScroll;if(so(V,e.viewport.scroll.max))return e;var Q=we({},e.viewport,{scroll:we({},e.viewport.scroll,{max:V})});return we({phase:"DRAGGING"},e,{viewport:Q})}if(t.type==="MOVE_UP"||t.type==="MOVE_DOWN"||t.type==="MOVE_LEFT"||t.type==="MOVE_RIGHT"){if(e.phase==="COLLECTING"||e.phase==="DROP_PENDING")return e;e.phase!=="DRAGGING"&&ge();var H=QH({state:e,type:t.type});return H?ts({state:e,impact:H.impact,clientSelection:H.clientSelection,scrollJumpRequest:H.scrollJumpRequest}):e}if(t.type==="DROP_PENDING"){var G=t.payload.reason;e.phase!=="COLLECTING"&&ge();var Z=we({phase:"DROP_PENDING"},e,{phase:"DROP_PENDING",isWaiting:!0,reason:G});return Z}if(t.type==="DROP_ANIMATE"){var W=t.payload,R=W.completed,O=W.dropDuration,b=W.newHomeClientOffset;e.phase==="DRAGGING"||e.phase==="DROP_PENDING"||ge();var F={phase:"DROP_ANIMATING",completed:R,dropDuration:O,newHomeClientOffset:b,dimensions:e.dimensions};return F}if(t.type==="DROP_COMPLETE"){var M=t.payload.completed;return{phase:"IDLE",completed:M,shouldFlush:!1}}return e},mU=function(t){return{type:"BEFORE_INITIAL_CAPTURE",payload:t}},hU=function(t){return{type:"LIFT",payload:t}},vU=function(t){return{type:"INITIAL_PUBLISH",payload:t}},xU=function(t){return{type:"PUBLISH_WHILE_DRAGGING",payload:t}},yU=function(){return{type:"COLLECTION_STARTING",payload:null}},bU=function(t){return{type:"UPDATE_DROPPABLE_SCROLL",payload:t}},SU=function(t){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:t}},CU=function(t){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:t}},i3=function(t){return{type:"MOVE",payload:t}},wU=function(t){return{type:"MOVE_BY_WINDOW_SCROLL",payload:t}},jU=function(t){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:t}},TU=function(){return{type:"MOVE_UP",payload:null}},OU=function(){return{type:"MOVE_DOWN",payload:null}},IU=function(){return{type:"MOVE_RIGHT",payload:null}},PU=function(){return{type:"MOVE_LEFT",payload:null}},oh=function(){return{type:"FLUSH",payload:null}},EU=function(t){return{type:"DROP_ANIMATE",payload:t}},ih=function(t){return{type:"DROP_COMPLETE",payload:t}},a3=function(t){return{type:"DROP",payload:t}},$U=function(t){return{type:"DROP_PENDING",payload:t}},s3=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},NU=function(e){return function(t){var r=t.getState,n=t.dispatch;return function(o){return function(i){if(i.type!=="LIFT"){o(i);return}var a=i.payload,s=a.id,c=a.clientSelection,u=a.movementMode,d=r();d.phase==="DROP_ANIMATING"&&n(ih({completed:d.completed})),r().phase!=="IDLE"&&ge(),n(oh()),n(mU({draggableId:s,movementMode:u}));var f={shouldPublishImmediately:u==="SNAP"},g={draggableId:s,scrollOptions:f},p=e.startPublishing(g),m=p.critical,h=p.dimensions,x=p.viewport;n(vU({critical:m,dimensions:h,clientSelection:c,movementMode:u,viewport:x}))}}}},kU=function(e){return function(){return function(t){return function(r){r.type==="INITIAL_PUBLISH"&&e.dragging(),r.type==="DROP_ANIMATE"&&e.dropping(r.payload.completed.result.reason),(r.type==="FLUSH"||r.type==="DROP_COMPLETE")&&e.resting(),t(r)}}}},ah={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},Ps={opacity:{drop:0,combining:.7},scale:{drop:.75}},sh={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},wo=sh.outOfTheWay+"s "+ah.outOfTheWay,rs={fluid:"opacity "+wo,snap:"transform "+wo+", opacity "+wo,drop:function(t){var r=t+"s "+ah.drop;return"transform "+r+", opacity "+r},outOfTheWay:"transform "+wo,placeholder:"height "+wo+", width "+wo+", margin "+wo},yx=function(t){return so(t,wt)?null:"translate("+t.x+"px, "+t.y+"px)"},Rg={moveTo:yx,drop:function(t,r){var n=yx(t);return n?r?n+" scale("+Ps.scale.drop+")":n:null}},Lg=sh.minDropTime,l3=sh.maxDropTime,MU=l3-Lg,bx=1500,AU=.6,DU=function(e){var t=e.current,r=e.destination,n=e.reason,o=Ts(t,r);if(o<=0)return Lg;if(o>=bx)return l3;var i=o/bx,a=Lg+MU*i,s=n==="CANCEL"?a*AU:a;return Number(s.toFixed(2))},RU=function(e){var t=e.impact,r=e.draggable,n=e.dimensions,o=e.viewport,i=e.afterCritical,a=n.draggables,s=n.droppables,c=xr(t),u=c?s[c]:null,d=s[r.descriptor.droppableId],f=r3({impact:t,draggable:r,draggables:a,afterCritical:i,droppable:u||d,viewport:o}),g=mr(f,r.client.borderBox.center);return g},LU=function(e){var t=e.draggables,r=e.reason,n=e.lastImpact,o=e.home,i=e.viewport,a=e.onLiftImpact;if(!n.at||r!=="DROP"){var s=t3({draggables:t,impact:a,destination:o,viewport:i,forceShouldAnimate:!0});return{impact:s,didDropInsideDroppable:!1}}if(n.at.type==="REORDER")return{impact:n,didDropInsideDroppable:!0};var c=we({},n,{displaced:Os});return{impact:c,didDropInsideDroppable:!0}},FU=function(e){var t=e.getState,r=e.dispatch;return function(n){return function(o){if(o.type!=="DROP"){n(o);return}var i=t(),a=o.payload.reason;if(i.phase==="COLLECTING"){r($U({reason:a}));return}if(i.phase!=="IDLE"){var s=i.phase==="DROP_PENDING"&&i.isWaiting;s&&ge(),i.phase==="DRAGGING"||i.phase==="DROP_PENDING"||ge();var c=i.critical,u=i.dimensions,d=u.draggables[i.critical.draggable.id],f=LU({reason:a,lastImpact:i.impact,afterCritical:i.afterCritical,onLiftImpact:i.onLiftImpact,home:i.dimensions.droppables[i.critical.droppable.id],viewport:i.viewport,draggables:i.dimensions.draggables}),g=f.impact,p=f.didDropInsideDroppable,m=p?Ym(g):null,h=p?rd(g):null,x={index:c.draggable.index,droppableId:c.droppable.id},v={draggableId:d.descriptor.id,type:d.descriptor.type,source:x,reason:a,mode:i.movementMode,destination:m,combine:h},y=RU({impact:g,draggable:d,dimensions:u,viewport:i.viewport,afterCritical:i.afterCritical}),C={critical:i.critical,afterCritical:i.afterCritical,result:v,impact:g},T=!so(i.current.client.offset,y)||!!v.combine;if(!T){r(ih({completed:C}));return}var N=DU({current:i.current.client.offset,destination:y,reason:a}),j={newHomeClientOffset:y,dropDuration:N,completed:C};r(EU(j))}}}},c3=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function _U(e){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(r){r.target!==window&&r.target!==window.document||e()}}}function BU(e){var t=e.onWindowScroll;function r(){t(c3())}var n=js(r),o=_U(n),i=ao;function a(){return i!==ao}function s(){a()&&ge(),i=Ar(window,[o])}function c(){a()||ge(),n.cancel(),i(),i=ao}return{start:s,stop:c,isActive:a}}var zU=function(t){return t.type==="DROP_COMPLETE"||t.type==="DROP_ANIMATE"||t.type==="FLUSH"},HU=function(e){var t=BU({onWindowScroll:function(n){e.dispatch(wU({newScroll:n}))}});return function(r){return function(n){!t.isActive()&&n.type==="INITIAL_PUBLISH"&&t.start(),t.isActive()&&zU(n)&&t.stop(),r(n)}}},UU=function(e){var t=!1,r=!1,n=setTimeout(function(){r=!0}),o=function(a){t||r||(t=!0,e(a),clearTimeout(n))};return o.wasCalled=function(){return t},o},VU=function(){var e=[],t=function(i){var a=Zm(e,function(u){return u.timerId===i});a===-1&&ge();var s=e.splice(a,1),c=s[0];c.callback()},r=function(i){var a=setTimeout(function(){return t(a)}),s={timerId:a,callback:i};e.push(s)},n=function(){if(e.length){var i=[].concat(e);e.length=0,i.forEach(function(a){clearTimeout(a.timerId),a.callback()})}};return{add:r,flush:n}},WU=function(t,r){return t==null&&r==null?!0:t==null||r==null?!1:t.droppableId===r.droppableId&&t.index===r.index},qU=function(t,r){return t==null&&r==null?!0:t==null||r==null?!1:t.draggableId===r.draggableId&&t.droppableId===r.droppableId},GU=function(t,r){if(t===r)return!0;var n=t.draggable.id===r.draggable.id&&t.draggable.droppableId===r.draggable.droppableId&&t.draggable.type===r.draggable.type&&t.draggable.index===r.draggable.index,o=t.droppable.id===r.droppable.id&&t.droppable.type===r.droppable.type;return n&&o},Pa=function(t,r){r()},$l=function(t,r){return{draggableId:t.draggable.id,type:t.droppable.type,source:{droppableId:t.droppable.id,index:t.draggable.index},mode:r}},ff=function(t,r,n,o){if(!t){n(o(r));return}var i=UU(n),a={announce:i};t(r,a),i.wasCalled()||n(o(r))},KU=function(e,t){var r=VU(),n=null,o=function(g,p){n&&ge(),Pa("onBeforeCapture",function(){var m=e().onBeforeCapture;if(m){var h={draggableId:g,mode:p};m(h)}})},i=function(g,p){n&&ge(),Pa("onBeforeDragStart",function(){var m=e().onBeforeDragStart;m&&m($l(g,p))})},a=function(g,p){n&&ge();var m=$l(g,p);n={mode:p,lastCritical:g,lastLocation:m.source,lastCombine:null},r.add(function(){Pa("onDragStart",function(){return ff(e().onDragStart,m,t,nc.onDragStart)})})},s=function(g,p){var m=Ym(p),h=rd(p);n||ge();var x=!GU(g,n.lastCritical);x&&(n.lastCritical=g);var v=!WU(n.lastLocation,m);v&&(n.lastLocation=m);var y=!qU(n.lastCombine,h);if(y&&(n.lastCombine=h),!(!x&&!v&&!y)){var C=we({},$l(g,n.mode),{combine:h,destination:m});r.add(function(){Pa("onDragUpdate",function(){return ff(e().onDragUpdate,C,t,nc.onDragUpdate)})})}},c=function(){n||ge(),r.flush()},u=function(g){n||ge(),n=null,Pa("onDragEnd",function(){return ff(e().onDragEnd,g,t,nc.onDragEnd)})},d=function(){if(n){var g=we({},$l(n.lastCritical,n.mode),{combine:null,destination:null,reason:"CANCEL"});u(g)}};return{beforeCapture:o,beforeStart:i,start:a,update:s,flush:c,drop:u,abort:d}},JU=function(e,t){var r=KU(e,t);return function(n){return function(o){return function(i){if(i.type==="BEFORE_INITIAL_CAPTURE"){r.beforeCapture(i.payload.draggableId,i.payload.movementMode);return}if(i.type==="INITIAL_PUBLISH"){var a=i.payload.critical;r.beforeStart(a,i.payload.movementMode),o(i),r.start(a,i.payload.movementMode);return}if(i.type==="DROP_COMPLETE"){var s=i.payload.completed.result;r.flush(),o(i),r.drop(s);return}if(o(i),i.type==="FLUSH"){r.abort();return}var c=n.getState();c.phase==="DRAGGING"&&r.update(c.critical,c.impact)}}}},QU=function(e){return function(t){return function(r){if(r.type!=="DROP_ANIMATION_FINISHED"){t(r);return}var n=e.getState();n.phase!=="DROP_ANIMATING"&&ge(),e.dispatch(ih({completed:n.completed}))}}},ZU=function(e){var t=null,r=null;function n(){r&&(cancelAnimationFrame(r),r=null),t&&(t(),t=null)}return function(o){return function(i){if((i.type==="FLUSH"||i.type==="DROP_COMPLETE"||i.type==="DROP_ANIMATION_FINISHED")&&n(),o(i),i.type==="DROP_ANIMATE"){var a={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var c=e.getState();c.phase==="DROP_ANIMATING"&&e.dispatch(s3())}};r=requestAnimationFrame(function(){r=null,t=Ar(window,[a])})}}}},YU=function(e){return function(){return function(t){return function(r){(r.type==="DROP_COMPLETE"||r.type==="FLUSH"||r.type==="DROP_ANIMATE")&&e.stopPublishing(),t(r)}}}},XU=function(e){var t=!1;return function(){return function(r){return function(n){if(n.type==="INITIAL_PUBLISH"){t=!0,e.tryRecordFocus(n.payload.critical.draggable.id),r(n),e.tryRestoreFocusRecorded();return}if(r(n),!!t){if(n.type==="FLUSH"){t=!1,e.tryRestoreFocusRecorded();return}if(n.type==="DROP_COMPLETE"){t=!1;var o=n.payload.completed.result;o.combine&&e.tryShiftRecord(o.draggableId,o.combine.draggableId),e.tryRestoreFocusRecorded()}}}}}},eV=function(t){return t.type==="DROP_COMPLETE"||t.type==="DROP_ANIMATE"||t.type==="FLUSH"},tV=function(e){return function(t){return function(r){return function(n){if(eV(n)){e.stop(),r(n);return}if(n.type==="INITIAL_PUBLISH"){r(n);var o=t.getState();o.phase!=="DRAGGING"&&ge(),e.start(o);return}r(n),e.scroll(t.getState())}}}},rV=function(e){return function(t){return function(r){if(t(r),r.type==="PUBLISH_WHILE_DRAGGING"){var n=e.getState();n.phase==="DROP_PENDING"&&(n.isWaiting||e.dispatch(a3({reason:n.reason})))}}}},nV=y5,oV=function(e){var t=e.dimensionMarshal,r=e.focusMarshal,n=e.styleMarshal,o=e.getResponders,i=e.announce,a=e.autoScroller;return x5(pU,nV(az(kU(n),YU(t),NU(t),FU,QU,ZU,rV,tV(a),HU,XU(r),JU(o,i))))},gf=function(){return{additions:{},removals:{},modified:{}}};function iV(e){var t=e.registry,r=e.callbacks,n=gf(),o=null,i=function(){o||(r.collectionStarting(),o=requestAnimationFrame(function(){o=null;var d=n,f=d.additions,g=d.removals,p=d.modified,m=Object.keys(f).map(function(v){return t.draggable.getById(v).getDimension(wt)}).sort(function(v,y){return v.descriptor.index-y.descriptor.index}),h=Object.keys(p).map(function(v){var y=t.droppable.getById(v),C=y.callbacks.getScrollWhileDragging();return{droppableId:v,scroll:C}}),x={additions:m,removals:Object.keys(g),modified:h};n=gf(),r.publish(x)}))},a=function(d){var f=d.descriptor.id;n.additions[f]=d,n.modified[d.descriptor.droppableId]=!0,n.removals[f]&&delete n.removals[f],i()},s=function(d){var f=d.descriptor;n.removals[f.id]=!0,n.modified[f.droppableId]=!0,n.additions[f.id]&&delete n.additions[f.id],i()},c=function(){o&&(cancelAnimationFrame(o),o=null,n=gf())};return{add:a,remove:s,stop:c}}var u3=function(e){var t=e.scrollHeight,r=e.scrollWidth,n=e.height,o=e.width,i=mr({x:r,y:t},{x:o,y:n}),a={x:Math.max(0,i.x),y:Math.max(0,i.y)};return a},d3=function(){var e=document.documentElement;return e||ge(),e},f3=function(){var e=d3(),t=u3({scrollHeight:e.scrollHeight,scrollWidth:e.scrollWidth,width:e.clientWidth,height:e.clientHeight});return t},aV=function(){var e=c3(),t=f3(),r=e.y,n=e.x,o=d3(),i=o.clientWidth,a=o.clientHeight,s=n+i,c=r+a,u=Qr({top:r,left:n,right:s,bottom:c}),d={frame:u,scroll:{initial:e,current:e,max:t,diff:{value:wt,displacement:wt}}};return d},sV=function(e){var t=e.critical,r=e.scrollOptions,n=e.registry,o=aV(),i=o.scroll.current,a=t.droppable,s=n.droppable.getAllByType(a.type).map(function(f){return f.callbacks.getDimensionAndWatchScroll(i,r)}),c=n.draggable.getAllByType(t.draggable.type).map(function(f){return f.getDimension(i)}),u={draggables:z5(c),droppables:B5(s)},d={dimensions:u,critical:t,viewport:o};return d};function Sx(e,t,r){if(r.descriptor.id===t.id||r.descriptor.type!==t.type)return!1;var n=e.droppable.getById(r.descriptor.droppableId);return n.descriptor.mode==="virtual"}var lV=function(e,t){var r=null,n=iV({callbacks:{publish:t.publishWhileDragging,collectionStarting:t.collectionStarting},registry:e}),o=function(p,m){e.droppable.exists(p)||ge(),r&&t.updateDroppableIsEnabled({id:p,isEnabled:m})},i=function(p,m){r&&(e.droppable.exists(p)||ge(),t.updateDroppableIsCombineEnabled({id:p,isCombineEnabled:m}))},a=function(p,m){r&&(e.droppable.exists(p)||ge(),t.updateDroppableScroll({id:p,newScroll:m}))},s=function(p,m){r&&e.droppable.getById(p).callbacks.scroll(m)},c=function(){if(r){n.stop();var p=r.critical.droppable;e.droppable.getAllByType(p.type).forEach(function(m){return m.callbacks.dragStopped()}),r.unsubscribe(),r=null}},u=function(p){r||ge();var m=r.critical.draggable;p.type==="ADDITION"&&Sx(e,m,p.value)&&n.add(p.value),p.type==="REMOVAL"&&Sx(e,m,p.value)&&n.remove(p.value)},d=function(p){r&&ge();var m=e.draggable.getById(p.draggableId),h=e.droppable.getById(m.descriptor.droppableId),x={draggable:m.descriptor,droppable:h.descriptor},v=e.subscribe(u);return r={critical:x,unsubscribe:v},sV({critical:x,registry:e,scrollOptions:p.scrollOptions})},f={updateDroppableIsEnabled:o,updateDroppableIsCombineEnabled:i,scrollDroppable:s,updateDroppableScroll:a,startPublishing:d,stopPublishing:c};return f},g3=function(e,t){return e.phase==="IDLE"?!0:e.phase!=="DROP_ANIMATING"||e.completed.result.draggableId===t?!1:e.completed.result.reason==="DROP"},cV=function(e){window.scrollBy(e.x,e.y)},uV=Ct(function(e){return td(e).filter(function(t){return!(!t.isEnabled||!t.frame)})}),dV=function(t,r){var n=Co(uV(r),function(o){return o.frame||ge(),Z5(o.frame.pageMarginBox)(t)});return n},fV=function(e){var t=e.center,r=e.destination,n=e.droppables;if(r){var o=n[r];return o.frame?o:null}var i=dV(t,n);return i},lo={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(t){return Math.pow(t,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},gV=function(e,t){var r=e[t.size]*lo.startFromPercentage,n=e[t.size]*lo.maxScrollAtPercentage,o={startScrollingFrom:r,maxScrollValueAt:n};return o},p3=function(e){var t=e.startOfRange,r=e.endOfRange,n=e.current,o=r-t;if(o===0)return 0;var i=n-t,a=i/o;return a},lh=1,pV=function(e,t){if(e>t.startScrollingFrom)return 0;if(e<=t.maxScrollValueAt)return lo.maxPixelScroll;if(e===t.startScrollingFrom)return lh;var r=p3({startOfRange:t.maxScrollValueAt,endOfRange:t.startScrollingFrom,current:e}),n=1-r,o=lo.maxPixelScroll*lo.ease(n);return Math.ceil(o)},Cx=lo.durationDampening.accelerateAt,wx=lo.durationDampening.stopDampeningAt,mV=function(e,t){var r=t,n=wx,o=Date.now(),i=o-r;if(i>=wx)return e;if(i<Cx)return lh;var a=p3({startOfRange:Cx,endOfRange:n,current:i}),s=e*lo.ease(a);return Math.ceil(s)},jx=function(e){var t=e.distanceToEdge,r=e.thresholds,n=e.dragStartTime,o=e.shouldUseTimeDampening,i=pV(t,r);return i===0?0:o?Math.max(mV(i,n),lh):i},Tx=function(e){var t=e.container,r=e.distanceToEdges,n=e.dragStartTime,o=e.axis,i=e.shouldUseTimeDampening,a=gV(t,o),s=r[o.end]<r[o.start];return s?jx({distanceToEdge:r[o.end],thresholds:a,dragStartTime:n,shouldUseTimeDampening:i}):-1*jx({distanceToEdge:r[o.start],thresholds:a,dragStartTime:n,shouldUseTimeDampening:i})},hV=function(e){var t=e.container,r=e.subject,n=e.proposedScroll,o=r.height>t.height,i=r.width>t.width;return!i&&!o?n:i&&o?null:{x:i?0:n.x,y:o?0:n.y}},vV=F5(function(e){return e===0?0:e}),m3=function(e){var t=e.dragStartTime,r=e.container,n=e.subject,o=e.center,i=e.shouldUseTimeDampening,a={top:o.y-r.top,right:r.right-o.x,bottom:r.bottom-o.y,left:o.x-r.left},s=Tx({container:r,distanceToEdges:a,dragStartTime:t,axis:Xm,shouldUseTimeDampening:i}),c=Tx({container:r,distanceToEdges:a,dragStartTime:t,axis:V5,shouldUseTimeDampening:i}),u=vV({x:c,y:s});if(so(u,wt))return null;var d=hV({container:r,subject:n,proposedScroll:u});return d?so(d,wt)?null:d:null},xV=F5(function(e){return e===0?0:e>0?1:-1}),ch=function(){var e=function(r,n){return r<0?r:r>n?r-n:0};return function(t){var r=t.current,n=t.max,o=t.change,i=Pt(r,o),a={x:e(i.x,n.x),y:e(i.y,n.y)};return so(a,wt)?null:a}}(),h3=function(t){var r=t.max,n=t.current,o=t.change,i={x:Math.max(n.x,r.x),y:Math.max(n.y,r.y)},a=xV(o),s=ch({max:i,current:n,change:a});return!s||a.x!==0&&s.x===0||a.y!==0&&s.y===0},uh=function(t,r){return h3({current:t.scroll.current,max:t.scroll.max,change:r})},yV=function(t,r){if(!uh(t,r))return null;var n=t.scroll.max,o=t.scroll.current;return ch({current:o,max:n,change:r})},dh=function(t,r){var n=t.frame;return n?h3({current:n.scroll.current,max:n.scroll.max,change:r}):!1},bV=function(t,r){var n=t.frame;return!n||!dh(t,r)?null:ch({current:n.scroll.current,max:n.scroll.max,change:r})},SV=function(e){var t=e.viewport,r=e.subject,n=e.center,o=e.dragStartTime,i=e.shouldUseTimeDampening,a=m3({dragStartTime:o,container:t.frame,subject:r,center:n,shouldUseTimeDampening:i});return a&&uh(t,a)?a:null},CV=function(e){var t=e.droppable,r=e.subject,n=e.center,o=e.dragStartTime,i=e.shouldUseTimeDampening,a=t.frame;if(!a)return null;var s=m3({dragStartTime:o,container:a.pageMarginBox,subject:r,center:n,shouldUseTimeDampening:i});return s&&dh(t,s)?s:null},Ox=function(e){var t=e.state,r=e.dragStartTime,n=e.shouldUseTimeDampening,o=e.scrollWindow,i=e.scrollDroppable,a=t.current.page.borderBoxCenter,s=t.dimensions.draggables[t.critical.draggable.id],c=s.page.marginBox;if(t.isWindowScrollAllowed){var u=t.viewport,d=SV({dragStartTime:r,viewport:u,subject:c,center:a,shouldUseTimeDampening:n});if(d){o(d);return}}var f=fV({center:a,destination:xr(t.impact),droppables:t.dimensions.droppables});if(f){var g=CV({dragStartTime:r,droppable:f,subject:c,center:a,shouldUseTimeDampening:n});g&&i(f.descriptor.id,g)}},wV=function(e){var t=e.scrollWindow,r=e.scrollDroppable,n=js(t),o=js(r),i=null,a=function(d){i||ge();var f=i,g=f.shouldUseTimeDampening,p=f.dragStartTime;Ox({state:d,scrollWindow:n,scrollDroppable:o,dragStartTime:p,shouldUseTimeDampening:g})},s=function(d){i&&ge();var f=Date.now(),g=!1,p=function(){g=!0};Ox({state:d,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:p,scrollDroppable:p}),i={dragStartTime:f,shouldUseTimeDampening:g},g&&a(d)},c=function(){i&&(n.cancel(),o.cancel(),i=null)};return{start:s,stop:c,scroll:a}},jV=function(e){var t=e.move,r=e.scrollDroppable,n=e.scrollWindow,o=function(u,d){var f=Pt(u.current.client.selection,d);t({client:f})},i=function(u,d){if(!dh(u,d))return d;var f=bV(u,d);if(!f)return r(u.descriptor.id,d),null;var g=mr(d,f);r(u.descriptor.id,g);var p=mr(d,g);return p},a=function(u,d,f){if(!u||!uh(d,f))return f;var g=yV(d,f);if(!g)return n(f),null;var p=mr(f,g);n(p);var m=mr(f,p);return m},s=function(u){var d=u.scrollJumpRequest;if(d){var f=xr(u.impact);f||ge();var g=i(u.dimensions.droppables[f],d);if(g){var p=u.viewport,m=a(u.isWindowScrollAllowed,p,g);m&&o(u,m)}}};return s},TV=function(e){var t=e.scrollDroppable,r=e.scrollWindow,n=e.move,o=wV({scrollWindow:r,scrollDroppable:t}),i=jV({move:n,scrollWindow:r,scrollDroppable:t}),a=function(u){if(u.phase==="DRAGGING"){if(u.movementMode==="FLUID"){o.scroll(u);return}u.scrollJumpRequest&&i(u)}},s={scroll:a,start:o.start,stop:o.stop};return s},Ui="data-rbd",Vi=function(){var e=Ui+"-drag-handle";return{base:e,draggableId:e+"-draggable-id",contextId:e+"-context-id"}}(),Fg=function(){var e=Ui+"-draggable";return{base:e,contextId:e+"-context-id",id:e+"-id"}}(),OV=function(){var e=Ui+"-droppable";return{base:e,contextId:e+"-context-id",id:e+"-id"}}(),Ix={contextId:Ui+"-scroll-container-context-id"},IV=function(t){return function(r){return"["+r+'="'+t+'"]'}},Ea=function(t,r){return t.map(function(n){var o=n.styles[r];return o?n.selector+" { "+o+" }":""}).join(" ")},PV="pointer-events: none;",EV=function(e){var t=IV(e),r=function(){var s=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:t(Vi.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:s,dragging:PV,dropAnimating:s}}}(),n=function(){var s=`
      transition: `+rs.outOfTheWay+`;
    `;return{selector:t(Fg.contextId),styles:{dragging:s,dropAnimating:s,userCancel:s}}}(),o={selector:t(OV.contextId),styles:{always:"overflow-anchor: none;"}},i={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},a=[n,r,o,i];return{always:Ea(a,"always"),resting:Ea(a,"resting"),dragging:Ea(a,"dragging"),dropAnimating:Ea(a,"dropAnimating"),userCancel:Ea(a,"userCancel")}},yr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?P.useLayoutEffect:P.useEffect,pf=function(){var t=document.querySelector("head");return t||ge(),t},Px=function(t){var r=document.createElement("style");return t&&r.setAttribute("nonce",t),r.type="text/css",r};function $V(e,t){var r=Be(function(){return EV(e)},[e]),n=P.useRef(null),o=P.useRef(null),i=Te(Ct(function(f){var g=o.current;g||ge(),g.textContent=f}),[]),a=Te(function(f){var g=n.current;g||ge(),g.textContent=f},[]);yr(function(){!n.current&&!o.current||ge();var f=Px(t),g=Px(t);return n.current=f,o.current=g,f.setAttribute(Ui+"-always",e),g.setAttribute(Ui+"-dynamic",e),pf().appendChild(f),pf().appendChild(g),a(r.always),i(r.resting),function(){var p=function(h){var x=h.current;x||ge(),pf().removeChild(x),h.current=null};p(n),p(o)}},[t,a,i,r.always,r.resting,e]);var s=Te(function(){return i(r.dragging)},[i,r.dragging]),c=Te(function(f){if(f==="DROP"){i(r.dropAnimating);return}i(r.userCancel)},[i,r.dropAnimating,r.userCancel]),u=Te(function(){o.current&&i(r.resting)},[i,r.resting]),d=Be(function(){return{dragging:s,dropping:c,resting:u}},[s,c,u]);return d}var v3=function(e){return e&&e.ownerDocument?e.ownerDocument.defaultView:window};function id(e){return e instanceof v3(e).HTMLElement}function NV(e,t){var r="["+Vi.contextId+'="'+e+'"]',n=_5(document.querySelectorAll(r));if(!n.length)return null;var o=Co(n,function(i){return i.getAttribute(Vi.draggableId)===t});return!o||!id(o)?null:o}function kV(e){var t=P.useRef({}),r=P.useRef(null),n=P.useRef(null),o=P.useRef(!1),i=Te(function(g,p){var m={id:g,focus:p};return t.current[g]=m,function(){var x=t.current,v=x[g];v!==m&&delete x[g]}},[]),a=Te(function(g){var p=NV(e,g);p&&p!==document.activeElement&&p.focus()},[e]),s=Te(function(g,p){r.current===g&&(r.current=p)},[]),c=Te(function(){n.current||o.current&&(n.current=requestAnimationFrame(function(){n.current=null;var g=r.current;g&&a(g)}))},[a]),u=Te(function(g){r.current=null;var p=document.activeElement;p&&p.getAttribute(Vi.draggableId)===g&&(r.current=g)},[]);yr(function(){return o.current=!0,function(){o.current=!1;var g=n.current;g&&cancelAnimationFrame(g)}},[]);var d=Be(function(){return{register:i,tryRecordFocus:u,tryRestoreFocusRecorded:c,tryShiftRecord:s}},[i,u,c,s]);return d}function MV(){var e={draggables:{},droppables:{}},t=[];function r(f){return t.push(f),function(){var p=t.indexOf(f);p!==-1&&t.splice(p,1)}}function n(f){t.length&&t.forEach(function(g){return g(f)})}function o(f){return e.draggables[f]||null}function i(f){var g=o(f);return g||ge(),g}var a={register:function(g){e.draggables[g.descriptor.id]=g,n({type:"ADDITION",value:g})},update:function(g,p){var m=e.draggables[p.descriptor.id];m&&m.uniqueId===g.uniqueId&&(delete e.draggables[p.descriptor.id],e.draggables[g.descriptor.id]=g)},unregister:function(g){var p=g.descriptor.id,m=o(p);m&&g.uniqueId===m.uniqueId&&(delete e.draggables[p],n({type:"REMOVAL",value:g}))},getById:i,findById:o,exists:function(g){return!!o(g)},getAllByType:function(g){return Jc(e.draggables).filter(function(p){return p.descriptor.type===g})}};function s(f){return e.droppables[f]||null}function c(f){var g=s(f);return g||ge(),g}var u={register:function(g){e.droppables[g.descriptor.id]=g},unregister:function(g){var p=s(g.descriptor.id);p&&g.uniqueId===p.uniqueId&&delete e.droppables[g.descriptor.id]},getById:c,findById:s,exists:function(g){return!!s(g)},getAllByType:function(g){return Jc(e.droppables).filter(function(p){return p.descriptor.type===g})}};function d(){e.draggables={},e.droppables={},t.length=0}return{draggable:a,droppable:u,subscribe:r,clean:d}}function AV(){var e=Be(MV,[]);return P.useEffect(function(){return function(){requestAnimationFrame(e.clean)}},[e]),e}var fh=ae.createContext(null),Zc=function(){var e=document.body;return e||ge(),e},DV={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},RV=function(t){return"rbd-announcement-"+t};function LV(e){var t=Be(function(){return RV(e)},[e]),r=P.useRef(null);P.useEffect(function(){var i=document.createElement("div");return r.current=i,i.id=t,i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true"),we(i.style,DV),Zc().appendChild(i),function(){setTimeout(function(){var c=Zc();c.contains(i)&&c.removeChild(i),i===r.current&&(r.current=null)})}},[t]);var n=Te(function(o){var i=r.current;if(i){i.textContent=o;return}},[]);return n}var FV=0,_V={separator:"::"};function gh(e,t){return t===void 0&&(t=_V),Be(function(){return""+e+t.separator+FV++},[t.separator,e])}function BV(e){var t=e.contextId,r=e.uniqueId;return"rbd-hidden-text-"+t+"-"+r}function zV(e){var t=e.contextId,r=e.text,n=gh("hidden-text",{separator:"-"}),o=Be(function(){return BV({contextId:t,uniqueId:n})},[n,t]);return P.useEffect(function(){var a=document.createElement("div");return a.id=o,a.textContent=r,a.style.display="none",Zc().appendChild(a),function(){var c=Zc();c.contains(a)&&c.removeChild(a)}},[o,r]),o}var ad=ae.createContext(null);function x3(e){var t=P.useRef(e);return P.useEffect(function(){t.current=e}),t}function HV(){var e=null;function t(){return!!e}function r(a){return a===e}function n(a){e&&ge();var s={abandon:a};return e=s,s}function o(){e||ge(),e=null}function i(){e&&(e.abandon(),o())}return{isClaimed:t,isActive:r,claim:n,release:o,tryAbandon:i}}var UV=9,VV=13,ph=27,y3=32,WV=33,qV=34,GV=35,KV=36,JV=37,QV=38,ZV=39,YV=40,Nl,XV=(Nl={},Nl[VV]=!0,Nl[UV]=!0,Nl),b3=function(e){XV[e.keyCode]&&e.preventDefault()},sd=function(){var e="visibilitychange";if(typeof document>"u")return e;var t=[e,"ms"+e,"webkit"+e,"moz"+e,"o"+e],r=Co(t,function(n){return"on"+n in document});return r||e}(),S3=0,Ex=5;function eW(e,t){return Math.abs(t.x-e.x)>=Ex||Math.abs(t.y-e.y)>=Ex}var $x={type:"IDLE"};function tW(e){var t=e.cancel,r=e.completed,n=e.getPhase,o=e.setPhase;return[{eventName:"mousemove",fn:function(a){var s=a.button,c=a.clientX,u=a.clientY;if(s===S3){var d={x:c,y:u},f=n();if(f.type==="DRAGGING"){a.preventDefault(),f.actions.move(d);return}f.type!=="PENDING"&&ge();var g=f.point;if(eW(g,d)){a.preventDefault();var p=f.actions.fluidLift(d);o({type:"DRAGGING",actions:p})}}}},{eventName:"mouseup",fn:function(a){var s=n();if(s.type!=="DRAGGING"){t();return}a.preventDefault(),s.actions.drop({shouldBlockNextClick:!0}),r()}},{eventName:"mousedown",fn:function(a){n().type==="DRAGGING"&&a.preventDefault(),t()}},{eventName:"keydown",fn:function(a){var s=n();if(s.type==="PENDING"){t();return}if(a.keyCode===ph){a.preventDefault(),t();return}b3(a)}},{eventName:"resize",fn:t},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){n().type==="PENDING"&&t()}},{eventName:"webkitmouseforcedown",fn:function(a){var s=n();if(s.type==="IDLE"&&ge(),s.actions.shouldRespectForcePress()){t();return}a.preventDefault()}},{eventName:sd,fn:t}]}function rW(e){var t=P.useRef($x),r=P.useRef(ao),n=Be(function(){return{eventName:"mousedown",fn:function(f){if(!f.defaultPrevented&&f.button===S3&&!(f.ctrlKey||f.metaKey||f.shiftKey||f.altKey)){var g=e.findClosestDraggableId(f);if(g){var p=e.tryGetLock(g,a,{sourceEvent:f});if(p){f.preventDefault();var m={x:f.clientX,y:f.clientY};r.current(),u(p,m)}}}}}},[e]),o=Be(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(f){if(!f.defaultPrevented){var g=e.findClosestDraggableId(f);if(g){var p=e.findOptionsForDraggable(g);p&&(p.shouldRespectForcePress||e.canGetLock(g)&&f.preventDefault())}}}}},[e]),i=Te(function(){var f={passive:!1,capture:!0};r.current=Ar(window,[o,n],f)},[o,n]),a=Te(function(){var d=t.current;d.type!=="IDLE"&&(t.current=$x,r.current(),i())},[i]),s=Te(function(){var d=t.current;a(),d.type==="DRAGGING"&&d.actions.cancel({shouldBlockNextClick:!0}),d.type==="PENDING"&&d.actions.abort()},[a]),c=Te(function(){var f={capture:!0,passive:!1},g=tW({cancel:s,completed:a,getPhase:function(){return t.current},setPhase:function(m){t.current=m}});r.current=Ar(window,g,f)},[s,a]),u=Te(function(f,g){t.current.type!=="IDLE"&&ge(),t.current={type:"PENDING",point:g,actions:f},c()},[c]);yr(function(){return i(),function(){r.current()}},[i])}var ii;function nW(){}var oW=(ii={},ii[qV]=!0,ii[WV]=!0,ii[KV]=!0,ii[GV]=!0,ii);function iW(e,t){function r(){t(),e.cancel()}function n(){t(),e.drop()}return[{eventName:"keydown",fn:function(i){if(i.keyCode===ph){i.preventDefault(),r();return}if(i.keyCode===y3){i.preventDefault(),n();return}if(i.keyCode===YV){i.preventDefault(),e.moveDown();return}if(i.keyCode===QV){i.preventDefault(),e.moveUp();return}if(i.keyCode===ZV){i.preventDefault(),e.moveRight();return}if(i.keyCode===JV){i.preventDefault(),e.moveLeft();return}if(oW[i.keyCode]){i.preventDefault();return}b3(i)}},{eventName:"mousedown",fn:r},{eventName:"mouseup",fn:r},{eventName:"click",fn:r},{eventName:"touchstart",fn:r},{eventName:"resize",fn:r},{eventName:"wheel",fn:r,options:{passive:!0}},{eventName:sd,fn:r}]}function aW(e){var t=P.useRef(nW),r=Be(function(){return{eventName:"keydown",fn:function(i){if(i.defaultPrevented||i.keyCode!==y3)return;var a=e.findClosestDraggableId(i);if(!a)return;var s=e.tryGetLock(a,d,{sourceEvent:i});if(!s)return;i.preventDefault();var c=!0,u=s.snapLift();t.current();function d(){c||ge(),c=!1,t.current(),n()}t.current=Ar(window,iW(u,d),{capture:!0,passive:!1})}}},[e]),n=Te(function(){var i={passive:!1,capture:!0};t.current=Ar(window,[r],i)},[r]);yr(function(){return n(),function(){t.current()}},[n])}var mf={type:"IDLE"},sW=120,lW=.15;function cW(e){var t=e.cancel,r=e.getPhase;return[{eventName:"orientationchange",fn:t},{eventName:"resize",fn:t},{eventName:"contextmenu",fn:function(o){o.preventDefault()}},{eventName:"keydown",fn:function(o){if(r().type!=="DRAGGING"){t();return}o.keyCode===ph&&o.preventDefault(),t()}},{eventName:sd,fn:t}]}function uW(e){var t=e.cancel,r=e.completed,n=e.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(i){var a=n();if(a.type!=="DRAGGING"){t();return}a.hasMoved=!0;var s=i.touches[0],c=s.clientX,u=s.clientY,d={x:c,y:u};i.preventDefault(),a.actions.move(d)}},{eventName:"touchend",fn:function(i){var a=n();if(a.type!=="DRAGGING"){t();return}i.preventDefault(),a.actions.drop({shouldBlockNextClick:!0}),r()}},{eventName:"touchcancel",fn:function(i){if(n().type!=="DRAGGING"){t();return}i.preventDefault(),t()}},{eventName:"touchforcechange",fn:function(i){var a=n();a.type==="IDLE"&&ge();var s=i.touches[0];if(s){var c=s.force>=lW;if(c){var u=a.actions.shouldRespectForcePress();if(a.type==="PENDING"){u&&t();return}if(u){if(a.hasMoved){i.preventDefault();return}t();return}i.preventDefault()}}}},{eventName:sd,fn:t}]}function dW(e){var t=P.useRef(mf),r=P.useRef(ao),n=Te(function(){return t.current},[]),o=Te(function(p){t.current=p},[]),i=Be(function(){return{eventName:"touchstart",fn:function(p){if(!p.defaultPrevented){var m=e.findClosestDraggableId(p);if(m){var h=e.tryGetLock(m,s,{sourceEvent:p});if(h){var x=p.touches[0],v=x.clientX,y=x.clientY,C={x:v,y};r.current(),f(h,C)}}}}}},[e]),a=Te(function(){var p={capture:!0,passive:!1};r.current=Ar(window,[i],p)},[i]),s=Te(function(){var g=t.current;g.type!=="IDLE"&&(g.type==="PENDING"&&clearTimeout(g.longPressTimerId),o(mf),r.current(),a())},[a,o]),c=Te(function(){var g=t.current;s(),g.type==="DRAGGING"&&g.actions.cancel({shouldBlockNextClick:!0}),g.type==="PENDING"&&g.actions.abort()},[s]),u=Te(function(){var p={capture:!0,passive:!1},m={cancel:c,completed:s,getPhase:n},h=Ar(window,uW(m),p),x=Ar(window,cW(m),p);r.current=function(){h(),x()}},[c,n,s]),d=Te(function(){var p=n();p.type!=="PENDING"&&ge();var m=p.actions.fluidLift(p.point);o({type:"DRAGGING",actions:m,hasMoved:!1})},[n,o]),f=Te(function(p,m){n().type!=="IDLE"&&ge();var h=setTimeout(d,sW);o({type:"PENDING",point:m,actions:p,longPressTimerId:h}),u()},[u,n,o,d]);yr(function(){return a(),function(){r.current();var m=n();m.type==="PENDING"&&(clearTimeout(m.longPressTimerId),o(mf))}},[n,a,o]),yr(function(){var p=Ar(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return p},[])}var fW={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function C3(e,t){if(t==null)return!1;var r=!!fW[t.tagName.toLowerCase()];if(r)return!0;var n=t.getAttribute("contenteditable");return n==="true"||n===""?!0:t===e?!1:C3(e,t.parentElement)}function gW(e,t){var r=t.target;return id(r)?C3(e,r):!1}var pW=function(e){return Qr(e.getBoundingClientRect()).center};function mW(e){return e instanceof v3(e).Element}var hW=function(){var e="matches";if(typeof document>"u")return e;var t=[e,"msMatchesSelector","webkitMatchesSelector"],r=Co(t,function(n){return n in Element.prototype});return r||e}();function w3(e,t){return e==null?null:e[hW](t)?e:w3(e.parentElement,t)}function vW(e,t){return e.closest?e.closest(t):w3(e,t)}function xW(e){return"["+Vi.contextId+'="'+e+'"]'}function yW(e,t){var r=t.target;if(!mW(r))return null;var n=xW(e),o=vW(r,n);return!o||!id(o)?null:o}function bW(e,t){var r=yW(e,t);return r?r.getAttribute(Vi.draggableId):null}function SW(e,t){var r="["+Fg.contextId+'="'+e+'"]',n=_5(document.querySelectorAll(r)),o=Co(n,function(i){return i.getAttribute(Fg.id)===t});return!o||!id(o)?null:o}function CW(e){e.preventDefault()}function kl(e){var t=e.expected,r=e.phase,n=e.isLockActive;return e.shouldWarn,!(!n()||t!==r)}function j3(e){var t=e.lockAPI,r=e.store,n=e.registry,o=e.draggableId;if(t.isClaimed())return!1;var i=n.draggable.findById(o);return!(!i||!i.options.isEnabled||!g3(r.getState(),o))}function wW(e){var t=e.lockAPI,r=e.contextId,n=e.store,o=e.registry,i=e.draggableId,a=e.forceSensorStop,s=e.sourceEvent,c=j3({lockAPI:t,store:n,registry:o,draggableId:i});if(!c)return null;var u=o.draggable.getById(i),d=SW(r,u.descriptor.id);if(!d||s&&!u.options.canDragInteractiveElements&&gW(d,s))return null;var f=t.claim(a||ao),g="PRE_DRAG";function p(){return u.options.shouldRespectForcePress}function m(){return t.isActive(f)}function h(j,I){kl({expected:j,phase:g,isLockActive:m,shouldWarn:!0})&&n.dispatch(I())}var x=h.bind(null,"DRAGGING");function v(j){function I(){t.release(),g="COMPLETED"}g!=="PRE_DRAG"&&(I(),g!=="PRE_DRAG"&&ge()),n.dispatch(hU(j.liftActionArgs)),g="DRAGGING";function $(w,U){if(U===void 0&&(U={shouldBlockNextClick:!1}),j.cleanup(),U.shouldBlockNextClick){var L=Ar(window,[{eventName:"click",fn:CW,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(L)}I(),n.dispatch(a3({reason:w}))}return we({isActive:function(){return kl({expected:"DRAGGING",phase:g,isLockActive:m,shouldWarn:!1})},shouldRespectForcePress:p,drop:function(U){return $("DROP",U)},cancel:function(U){return $("CANCEL",U)}},j.actions)}function y(j){var I=js(function(w){x(function(){return i3({client:w})})}),$=v({liftActionArgs:{id:i,clientSelection:j,movementMode:"FLUID"},cleanup:function(){return I.cancel()},actions:{move:I}});return we({},$,{move:I})}function C(){var j={moveUp:function(){return x(TU)},moveRight:function(){return x(IU)},moveDown:function(){return x(OU)},moveLeft:function(){return x(PU)}};return v({liftActionArgs:{id:i,clientSelection:pW(d),movementMode:"SNAP"},cleanup:ao,actions:j})}function T(){var j=kl({expected:"PRE_DRAG",phase:g,isLockActive:m,shouldWarn:!0});j&&t.release()}var N={isActive:function(){return kl({expected:"PRE_DRAG",phase:g,isLockActive:m,shouldWarn:!1})},shouldRespectForcePress:p,fluidLift:y,snapLift:C,abort:T};return N}var jW=[rW,aW,dW];function TW(e){var t=e.contextId,r=e.store,n=e.registry,o=e.customSensors,i=e.enableDefaultSensors,a=[].concat(i?jW:[],o||[]),s=P.useState(function(){return HV()})[0],c=Te(function(y,C){y.isDragging&&!C.isDragging&&s.tryAbandon()},[s]);yr(function(){var y=r.getState(),C=r.subscribe(function(){var T=r.getState();c(y,T),y=T});return C},[s,r,c]),yr(function(){return s.tryAbandon},[s.tryAbandon]);for(var u=Te(function(v){return j3({lockAPI:s,registry:n,store:r,draggableId:v})},[s,n,r]),d=Te(function(v,y,C){return wW({lockAPI:s,registry:n,contextId:t,store:r,draggableId:v,forceSensorStop:y,sourceEvent:C&&C.sourceEvent?C.sourceEvent:null})},[t,s,n,r]),f=Te(function(v){return bW(t,v)},[t]),g=Te(function(v){var y=n.draggable.findById(v);return y?y.options:null},[n.draggable]),p=Te(function(){s.isClaimed()&&(s.tryAbandon(),r.getState().phase!=="IDLE"&&r.dispatch(oh()))},[s,r]),m=Te(s.isClaimed,[s]),h=Be(function(){return{canGetLock:u,tryGetLock:d,findClosestDraggableId:f,findOptionsForDraggable:g,tryReleaseLock:p,isLockClaimed:m}},[u,d,f,g,p,m]),x=0;x<a.length;x++)a[x](h)}var OW=function(t){return{onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragEnd:t.onDragEnd,onDragUpdate:t.onDragUpdate}};function $a(e){return e.current||ge(),e.current}function IW(e){var t=e.contextId,r=e.setCallbacks,n=e.sensors,o=e.nonce,i=e.dragHandleUsageInstructions,a=P.useRef(null),s=x3(e),c=Te(function(){return OW(s.current)},[s]),u=LV(t),d=zV({contextId:t,text:i}),f=$V(t,o),g=Te(function(w){$a(a).dispatch(w)},[]),p=Be(function(){return nx({publishWhileDragging:xU,updateDroppableScroll:bU,updateDroppableIsEnabled:SU,updateDroppableIsCombineEnabled:CU,collectionStarting:yU},g)},[g]),m=AV(),h=Be(function(){return lV(m,p)},[m,p]),x=Be(function(){return TV(we({scrollWindow:cV,scrollDroppable:h.scrollDroppable},nx({move:i3},g)))},[h.scrollDroppable,g]),v=kV(t),y=Be(function(){return oV({announce:u,autoScroller:x,dimensionMarshal:h,focusMarshal:v,getResponders:c,styleMarshal:f})},[u,x,h,v,c,f]);a.current=y;var C=Te(function(){var w=$a(a),U=w.getState();U.phase!=="IDLE"&&w.dispatch(oh())},[]),T=Te(function(){var w=$a(a).getState();return w.isDragging||w.phase==="DROP_ANIMATING"},[]),N=Be(function(){return{isDragging:T,tryAbort:C}},[T,C]);r(N);var j=Te(function(w){return g3($a(a).getState(),w)},[]),I=Te(function(){return Io($a(a).getState())},[]),$=Be(function(){return{marshal:h,focus:v,contextId:t,canLift:j,isMovementAllowed:I,dragHandleUsageInstructionsId:d,registry:m}},[t,h,d,v,j,I,m]);return TW({contextId:t,store:y,registry:m,customSensors:n,enableDefaultSensors:e.enableDefaultSensors!==!1}),P.useEffect(function(){return C},[C]),ae.createElement(ad.Provider,{value:$},ae.createElement(dz,{context:fh,store:y},e.children))}var PW=0;function EW(){return Be(function(){return""+PW++},[])}function ld(e){var t=EW(),r=e.dragHandleUsageInstructions||nc.dragHandleUsageInstructions;return ae.createElement(aH,null,function(n){return ae.createElement(IW,{nonce:e.nonce,contextId:t,setCallbacks:n,dragHandleUsageInstructions:r,enableDefaultSensors:e.enableDefaultSensors,sensors:e.sensors,onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragUpdate:e.onDragUpdate,onDragEnd:e.onDragEnd},e.children)})}var T3=function(t){return function(r){return t===r}},$W=T3("scroll"),NW=T3("auto"),Nx=function(t,r){return r(t.overflowX)||r(t.overflowY)},kW=function(t){var r=window.getComputedStyle(t),n={overflowX:r.overflowX,overflowY:r.overflowY};return Nx(n,$W)||Nx(n,NW)},MW=function(){return!1},AW=function e(t){return t==null?null:t===document.body?MW()?t:null:t===document.documentElement?null:kW(t)?t:e(t.parentElement)},_g=function(e){return{x:e.scrollLeft,y:e.scrollTop}},DW=function e(t){if(!t)return!1;var r=window.getComputedStyle(t);return r.position==="fixed"?!0:e(t.parentElement)},RW=function(e){var t=AW(e),r=DW(e);return{closestScrollable:t,isFixedOnPage:r}},LW=function(e){var t=e.descriptor,r=e.isEnabled,n=e.isCombineEnabled,o=e.isFixedOnPage,i=e.direction,a=e.client,s=e.page,c=e.closest,u=function(){if(!c)return null;var p=c.scrollSize,m=c.client,h=u3({scrollHeight:p.scrollHeight,scrollWidth:p.scrollWidth,height:m.paddingBox.height,width:m.paddingBox.width});return{pageMarginBox:c.page.marginBox,frameClient:m,scrollSize:p,shouldClipSubject:c.shouldClipSubject,scroll:{initial:c.scroll,current:c.scroll,max:h,diff:{value:wt,displacement:wt}}}}(),d=i==="vertical"?Xm:V5,f=Hi({page:s,withPlaceholder:null,axis:d,frame:u}),g={descriptor:t,isCombineEnabled:n,isFixedOnPage:o,axis:d,isEnabled:r,client:a,page:s,frame:u,subject:f};return g},FW=function(t,r){var n=A5(t);if(!r||t!==r)return n;var o=n.paddingBox.top-r.scrollTop,i=n.paddingBox.left-r.scrollLeft,a=o+r.scrollHeight,s=i+r.scrollWidth,c={top:o,right:s,bottom:a,left:i},u=Km(c,n.border),d=Jm({borderBox:u,margin:n.margin,border:n.border,padding:n.padding});return d},_W=function(e){var t=e.ref,r=e.descriptor,n=e.env,o=e.windowScroll,i=e.direction,a=e.isDropDisabled,s=e.isCombineEnabled,c=e.shouldClipSubject,u=n.closestScrollable,d=FW(t,u),f=qc(d,o),g=function(){if(!u)return null;var m=A5(u),h={scrollHeight:u.scrollHeight,scrollWidth:u.scrollWidth};return{client:m,page:qc(m,o),scroll:_g(u),scrollSize:h,shouldClipSubject:c}}(),p=LW({descriptor:r,isEnabled:!a,isCombineEnabled:s,isFixedOnPage:n.isFixedOnPage,direction:i,client:d,page:f,closest:g});return p},BW={passive:!1},zW={passive:!0},kx=function(e){return e.shouldPublishImmediately?BW:zW};function Yc(e){var t=P.useContext(e);return t||ge(),t}var Ml=function(t){return t&&t.env.closestScrollable||null};function HW(e){var t=P.useRef(null),r=Yc(ad),n=gh("droppable"),o=r.registry,i=r.marshal,a=x3(e),s=Be(function(){return{id:e.droppableId,type:e.type,mode:e.mode}},[e.droppableId,e.mode,e.type]),c=P.useRef(s),u=Be(function(){return Ct(function(T,N){t.current||ge();var j={x:T,y:N};i.updateDroppableScroll(s.id,j)})},[s.id,i]),d=Te(function(){var T=t.current;return!T||!T.env.closestScrollable?wt:_g(T.env.closestScrollable)},[]),f=Te(function(){var T=d();u(T.x,T.y)},[d,u]),g=Be(function(){return js(f)},[f]),p=Te(function(){var T=t.current,N=Ml(T);T&&N||ge();var j=T.scrollOptions;if(j.shouldPublishImmediately){f();return}g()},[g,f]),m=Te(function(T,N){t.current&&ge();var j=a.current,I=j.getDroppableRef();I||ge();var $=RW(I),w={ref:I,descriptor:s,env:$,scrollOptions:N};t.current=w;var U=_W({ref:I,descriptor:s,env:$,windowScroll:T,direction:j.direction,isDropDisabled:j.isDropDisabled,isCombineEnabled:j.isCombineEnabled,shouldClipSubject:!j.ignoreContainerClipping}),L=$.closestScrollable;return L&&(L.setAttribute(Ix.contextId,r.contextId),L.addEventListener("scroll",p,kx(w.scrollOptions))),U},[r.contextId,s,p,a]),h=Te(function(){var T=t.current,N=Ml(T);return T&&N||ge(),_g(N)},[]),x=Te(function(){var T=t.current;T||ge();var N=Ml(T);t.current=null,N&&(g.cancel(),N.removeAttribute(Ix.contextId),N.removeEventListener("scroll",p,kx(T.scrollOptions)))},[p,g]),v=Te(function(T){var N=t.current;N||ge();var j=Ml(N);j||ge(),j.scrollTop+=T.y,j.scrollLeft+=T.x},[]),y=Be(function(){return{getDimensionAndWatchScroll:m,getScrollWhileDragging:h,dragStopped:x,scroll:v}},[x,m,h,v]),C=Be(function(){return{uniqueId:n,descriptor:s,callbacks:y}},[y,s,n]);yr(function(){return c.current=C.descriptor,o.droppable.register(C),function(){t.current&&x(),o.droppable.unregister(C)}},[y,s,x,C,i,o.droppable]),yr(function(){t.current&&i.updateDroppableIsEnabled(c.current.id,!e.isDropDisabled)},[e.isDropDisabled,i]),yr(function(){t.current&&i.updateDroppableIsCombineEnabled(c.current.id,e.isCombineEnabled)},[e.isCombineEnabled,i])}function hf(){}var Mx={width:0,height:0,margin:fH},UW=function(t){var r=t.isAnimatingOpenOnMount,n=t.placeholder,o=t.animate;return r||o==="close"?Mx:{height:n.client.borderBox.height,width:n.client.borderBox.width,margin:n.client.margin}},VW=function(t){var r=t.isAnimatingOpenOnMount,n=t.placeholder,o=t.animate,i=UW({isAnimatingOpenOnMount:r,placeholder:n,animate:o});return{display:n.display,boxSizing:"border-box",width:i.width,height:i.height,marginTop:i.margin.top,marginRight:i.margin.right,marginBottom:i.margin.bottom,marginLeft:i.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:o!=="none"?rs.placeholder:null}};function WW(e){var t=P.useRef(null),r=Te(function(){t.current&&(clearTimeout(t.current),t.current=null)},[]),n=e.animate,o=e.onTransitionEnd,i=e.onClose,a=e.contextId,s=P.useState(e.animate==="open"),c=s[0],u=s[1];P.useEffect(function(){return c?n!=="open"?(r(),u(!1),hf):t.current?hf:(t.current=setTimeout(function(){t.current=null,u(!1)}),r):hf},[n,c,r]);var d=Te(function(g){g.propertyName==="height"&&(o(),n==="close"&&i())},[n,i,o]),f=VW({isAnimatingOpenOnMount:c,animate:e.animate,placeholder:e.placeholder});return ae.createElement(e.placeholder.tagName,{style:f,"data-rbd-placeholder-context-id":a,onTransitionEnd:d,ref:e.innerRef})}var qW=ae.memo(WW),mh=ae.createContext(null),GW=function(e){Br(t,e);function t(){for(var n,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i))||this,n.state={isVisible:!!n.props.on,data:n.props.on,animate:n.props.shouldAnimate&&n.props.on?"open":"none"},n.onClose=function(){n.state.animate==="close"&&n.setState({isVisible:!1})},n}t.getDerivedStateFromProps=function(o,i){return o.shouldAnimate?o.on?{isVisible:!0,data:o.on,animate:"open"}:i.isVisible?{isVisible:!0,data:i.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!o.on,data:o.on,animate:"none"}};var r=t.prototype;return r.render=function(){if(!this.state.isVisible)return null;var o={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(o)},t}(ae.PureComponent),Ax={dragging:5e3,dropAnimating:4500},KW=function(t,r){return r?rs.drop(r.duration):t?rs.snap:rs.fluid},JW=function(t,r){return t?r?Ps.opacity.drop:Ps.opacity.combining:null},QW=function(t){return t.forceShouldAnimate!=null?t.forceShouldAnimate:t.mode==="SNAP"};function ZW(e){var t=e.dimension,r=t.client,n=e.offset,o=e.combineWith,i=e.dropping,a=!!o,s=QW(e),c=!!i,u=c?Rg.drop(n,a):Rg.moveTo(n),d={position:"fixed",top:r.marginBox.top,left:r.marginBox.left,boxSizing:"border-box",width:r.borderBox.width,height:r.borderBox.height,transition:KW(s,i),transform:u,opacity:JW(a,c),zIndex:c?Ax.dropAnimating:Ax.dragging,pointerEvents:"none"};return d}function YW(e){return{transform:Rg.moveTo(e.offset),transition:e.shouldAnimateDisplacement?null:"none"}}function XW(e){return e.type==="DRAGGING"?ZW(e):YW(e)}function eq(e,t,r){r===void 0&&(r=wt);var n=window.getComputedStyle(t),o=t.getBoundingClientRect(),i=M5(o,n),a=qc(i,r),s={client:i,tagName:t.tagName.toLowerCase(),display:n.display},c={x:i.marginBox.width,y:i.marginBox.height},u={descriptor:e,placeholder:s,displaceBy:c,client:i,page:a};return u}function tq(e){var t=gh("draggable"),r=e.descriptor,n=e.registry,o=e.getDraggableRef,i=e.canDragInteractiveElements,a=e.shouldRespectForcePress,s=e.isEnabled,c=Be(function(){return{canDragInteractiveElements:i,shouldRespectForcePress:a,isEnabled:s}},[i,s,a]),u=Te(function(p){var m=o();return m||ge(),eq(r,m,p)},[r,o]),d=Be(function(){return{uniqueId:t,descriptor:r,options:c,getDimension:u}},[r,u,c,t]),f=P.useRef(d),g=P.useRef(!0);yr(function(){return n.draggable.register(f.current),function(){return n.draggable.unregister(f.current)}},[n.draggable]),yr(function(){if(g.current){g.current=!1;return}var p=f.current;f.current=d,n.draggable.update(d,p)},[d,n.draggable])}function rq(e){e.preventDefault()}function nq(e){var t=P.useRef(null),r=Te(function(w){t.current=w},[]),n=Te(function(){return t.current},[]),o=Yc(ad),i=o.contextId,a=o.dragHandleUsageInstructionsId,s=o.registry,c=Yc(mh),u=c.type,d=c.droppableId,f=Be(function(){return{id:e.draggableId,index:e.index,type:u,droppableId:d}},[e.draggableId,e.index,u,d]),g=e.children,p=e.draggableId,m=e.isEnabled,h=e.shouldRespectForcePress,x=e.canDragInteractiveElements,v=e.isClone,y=e.mapped,C=e.dropAnimationFinished;if(!v){var T=Be(function(){return{descriptor:f,registry:s,getDraggableRef:n,canDragInteractiveElements:x,shouldRespectForcePress:h,isEnabled:m}},[f,s,n,x,h,m]);tq(T)}var N=Be(function(){return m?{tabIndex:0,role:"button","aria-describedby":a,"data-rbd-drag-handle-draggable-id":p,"data-rbd-drag-handle-context-id":i,draggable:!1,onDragStart:rq}:null},[i,a,p,m]),j=Te(function(w){y.type==="DRAGGING"&&y.dropping&&w.propertyName==="transform"&&C()},[C,y]),I=Be(function(){var w=XW(y),U=y.type==="DRAGGING"&&y.dropping?j:null,L={innerRef:r,draggableProps:{"data-rbd-draggable-context-id":i,"data-rbd-draggable-id":p,style:w,onTransitionEnd:U},dragHandleProps:N};return L},[i,N,p,y,j,r]),$=Be(function(){return{draggableId:f.id,type:f.type,source:{index:f.index,droppableId:f.droppableId}}},[f.droppableId,f.id,f.index,f.type]);return g(I,y.snapshot,$)}var O3=function(e,t){return e===t},I3=function(e){var t=e.combine,r=e.destination;return r?r.droppableId:t?t.droppableId:null},oq=function(t){return t.combine?t.combine.draggableId:null},iq=function(t){return t.at&&t.at.type==="COMBINE"?t.at.combine.draggableId:null};function aq(){var e=Ct(function(o,i){return{x:o,y:i}}),t=Ct(function(o,i,a,s,c){return{isDragging:!0,isClone:i,isDropAnimating:!!c,dropAnimation:c,mode:o,draggingOver:a,combineWith:s,combineTargetFor:null}}),r=Ct(function(o,i,a,s,c,u,d){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:c,combineWith:u,mode:i,offset:o,dimension:a,forceShouldAnimate:d,snapshot:t(i,s,c,u,null)}}}),n=function(i,a){if(i.isDragging){if(i.critical.draggable.id!==a.draggableId)return null;var s=i.current.client.offset,c=i.dimensions.draggables[a.draggableId],u=xr(i.impact),d=iq(i.impact),f=i.forceShouldAnimate;return r(e(s.x,s.y),i.movementMode,c,a.isClone,u,d,f)}if(i.phase==="DROP_ANIMATING"){var g=i.completed;if(g.result.draggableId!==a.draggableId)return null;var p=a.isClone,m=i.dimensions.draggables[a.draggableId],h=g.result,x=h.mode,v=I3(h),y=oq(h),C=i.dropDuration,T={duration:C,curve:ah.drop,moveTo:i.newHomeClientOffset,opacity:y?Ps.opacity.drop:null,scale:y?Ps.scale.drop:null};return{mapped:{type:"DRAGGING",offset:i.newHomeClientOffset,dimension:m,dropping:T,draggingOver:v,combineWith:y,mode:x,forceShouldAnimate:null,snapshot:t(x,p,v,y,T)}}}return null};return n}function P3(e){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:e,combineWith:null}}var sq={mapped:{type:"SECONDARY",offset:wt,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:P3(null)}};function lq(){var e=Ct(function(a,s){return{x:a,y:s}}),t=Ct(P3),r=Ct(function(a,s,c){return s===void 0&&(s=null),{mapped:{type:"SECONDARY",offset:a,combineTargetFor:s,shouldAnimateDisplacement:c,snapshot:t(s)}}}),n=function(s){return s?r(wt,s,!0):null},o=function(s,c,u,d){var f=u.displaced.visible[s],g=!!(d.inVirtualList&&d.effected[s]),p=rd(u),m=p&&p.draggableId===s?c:null;if(!f){if(!g)return n(m);if(u.displaced.invisible[s])return null;var h=ia(d.displacedBy.point),x=e(h.x,h.y);return r(x,m,!0)}if(g)return n(m);var v=u.displacedBy.point,y=e(v.x,v.y);return r(y,m,f.shouldAnimate)},i=function(s,c){if(s.isDragging)return s.critical.draggable.id===c.draggableId?null:o(c.draggableId,s.critical.draggable.id,s.impact,s.afterCritical);if(s.phase==="DROP_ANIMATING"){var u=s.completed;return u.result.draggableId===c.draggableId?null:o(c.draggableId,u.result.draggableId,u.impact,u.afterCritical)}return null};return i}var cq=function(){var t=aq(),r=lq(),n=function(i,a){return t(i,a)||r(i,a)||sq};return n},uq={dropAnimationFinished:s3},dq=N5(cq,uq,null,{context:fh,pure:!0,areStatePropsEqual:O3})(nq);function E3(e){var t=Yc(mh),r=t.isUsingCloneFor;return r===e.draggableId&&!e.isClone?null:ae.createElement(dq,e)}function Qs(e){var t=typeof e.isDragDisabled=="boolean"?!e.isDragDisabled:!0,r=!!e.disableInteractiveElementBlocking,n=!!e.shouldRespectForcePress;return ae.createElement(E3,we({},e,{isClone:!1,isEnabled:t,canDragInteractiveElements:r,shouldRespectForcePress:n}))}function fq(e){var t=P.useContext(ad);t||ge();var r=t.contextId,n=t.isMovementAllowed,o=P.useRef(null),i=P.useRef(null),a=e.children,s=e.droppableId,c=e.type,u=e.mode,d=e.direction,f=e.ignoreContainerClipping,g=e.isDropDisabled,p=e.isCombineEnabled,m=e.snapshot,h=e.useClone,x=e.updateViewportMaxScroll,v=e.getContainerForClone,y=Te(function(){return o.current},[]),C=Te(function(L){o.current=L},[]);Te(function(){return i.current},[]);var T=Te(function(L){i.current=L},[]),N=Te(function(){n()&&x({maxScroll:f3()})},[n,x]);HW({droppableId:s,type:c,mode:u,direction:d,isDropDisabled:g,isCombineEnabled:p,ignoreContainerClipping:f,getDroppableRef:y});var j=ae.createElement(GW,{on:e.placeholder,shouldAnimate:e.shouldAnimatePlaceholder},function(L){var q=L.onClose,K=L.data,B=L.animate;return ae.createElement(qW,{placeholder:K,onClose:q,innerRef:T,animate:B,contextId:r,onTransitionEnd:N})}),I=Be(function(){return{innerRef:C,placeholder:j,droppableProps:{"data-rbd-droppable-id":s,"data-rbd-droppable-context-id":r}}},[r,s,j,C]),$=h?h.dragging.draggableId:null,w=Be(function(){return{droppableId:s,type:c,isUsingCloneFor:$}},[s,$,c]);function U(){if(!h)return null;var L=h.dragging,q=h.render,K=ae.createElement(E3,{draggableId:L.draggableId,index:L.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(B,J){return q(B,J,L)});return BC.createPortal(K,v())}return ae.createElement(mh.Provider,{value:w},a(I,m),U())}var vf=function(t,r){return t===r.droppable.type},Dx=function(t,r){return r.draggables[t.draggable.id]},gq=function(){var t={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},r=we({},t,{shouldAnimatePlaceholder:!1}),n=Ct(function(a){return{draggableId:a.id,type:a.type,source:{index:a.index,droppableId:a.droppableId}}}),o=Ct(function(a,s,c,u,d,f){var g=d.descriptor.id,p=d.descriptor.droppableId===a;if(p){var m=f?{render:f,dragging:n(d.descriptor)}:null,h={isDraggingOver:c,draggingOverWith:c?g:null,draggingFromThisWith:g,isUsingPlaceholder:!0};return{placeholder:d.placeholder,shouldAnimatePlaceholder:!1,snapshot:h,useClone:m}}if(!s)return r;if(!u)return t;var x={isDraggingOver:c,draggingOverWith:g,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:d.placeholder,shouldAnimatePlaceholder:!0,snapshot:x,useClone:null}}),i=function(s,c){var u=c.droppableId,d=c.type,f=!c.isDropDisabled,g=c.renderClone;if(s.isDragging){var p=s.critical;if(!vf(d,p))return r;var m=Dx(p,s.dimensions),h=xr(s.impact)===u;return o(u,f,h,h,m,g)}if(s.phase==="DROP_ANIMATING"){var x=s.completed;if(!vf(d,x.critical))return r;var v=Dx(x.critical,s.dimensions);return o(u,f,I3(x.result)===u,xr(x.impact)===u,v,g)}if(s.phase==="IDLE"&&s.completed&&!s.shouldFlush){var y=s.completed;if(!vf(d,y.critical))return r;var C=xr(y.impact)===u,T=!!(y.impact.at&&y.impact.at.type==="COMBINE"),N=y.critical.droppable.id===u;return C?T?t:r:N?t:r}return r};return i},pq={updateViewportMaxScroll:jU};function mq(){return document.body||ge(),document.body}var hq={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:mq},la=N5(gq,pq,null,{context:fh,pure:!0,areStatePropsEqual:O3})(fq);la.defaultProps=hq;const Bg=(e,t,r,n)=>{var o,i,a,s,c,u,d,f;try{let g=r.length,p=n.length,m=Math.max(g,p),h=[];for(let x=0;x<m;x++){let v={},y={};+((o=r==null?void 0:r[x])==null?void 0:o[1])<e&&(v={targetCol:(i=r==null?void 0:r[x])==null?void 0:i[0],maxNum:+((a=r==null?void 0:r[x])==null?void 0:a[1]),side:"right",iteration:x+1},h.push(v),e=e-((s=r==null?void 0:r[x])==null?void 0:s[1])),+((c=n==null?void 0:n[x])==null?void 0:c[1])<t&&(y={targetCol:(u=n==null?void 0:n[x])==null?void 0:u[0],maxNum:+((d=n==null?void 0:n[x])==null?void 0:d[1]),side:"left",iteration:x+1},h.push(y),t=t-((f=n==null?void 0:n[x])==null?void 0:f[1]))}return h}catch(g){console.error(g),alert("There was an error calculating the thin display controller array. Please contact the developer")}},cd=e=>P.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("g",{clipPath:"url(#clip0_1_6)"},P.createElement("path",{d:"M50 2.5C76.2332 2.5 97.5 23.7668 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7668 97.5 2.5 76.2332 2.5 50C2.5 23.7668 23.7668 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),P.createElement("path",{d:"M55.5583 36.1111C55.4055 36.1111 55.2555 36.1 55.1 36.0722C53.5861 35.8194 52.5639 34.3889 52.8167 32.875C53.9083 26.3083 59.9555 13.8889 75 13.8889C76.5361 13.8889 77.7778 15.1333 77.7778 16.6667C77.7778 18.2 76.5361 19.4444 75 19.4444C60.8472 19.4444 58.3917 33.2056 58.2944 33.7917C58.0694 35.1472 56.8917 36.1111 55.5583 36.1111ZM44.4417 36.1111C43.1111 36.1111 41.9361 35.1528 41.7055 33.7972C41.6028 33.2139 39.0528 19.4444 25 19.4444C23.4667 19.4444 22.2222 18.2 22.2222 16.6667C22.2222 15.1333 23.4667 13.8889 25 13.8889C40.0444 13.8889 46.0889 26.3083 47.1833 32.875C47.4361 34.3889 46.4139 35.8194 44.9 36.0722C44.7472 36.1 44.5917 36.1111 44.4417 36.1111ZM31.6944 49.7C25.2083 49.7 20.9444 46.9306 20.6833 46.7556C19.4083 45.9056 19.0639 44.1806 19.9139 42.9028C20.7639 41.625 22.4861 41.2778 23.7667 42.1333C24.0417 42.3111 30.9944 46.6778 40.4278 41.9611C41.8028 41.275 43.4694 41.8333 44.1555 43.2028C44.8417 44.575 44.2861 46.2444 42.9139 46.9306C38.7611 49.0028 34.9472 49.7 31.6944 49.7ZM68.3083 49.7C65.0528 49.7 61.2389 49.0028 57.0917 46.9278C55.7194 46.2417 55.1639 44.5722 55.85 43.2C56.5389 41.8278 58.2055 41.2722 59.5778 41.9583C69.0222 46.6806 75.9639 42.3083 76.2555 42.1222C77.5333 41.2944 79.2583 41.65 80.0944 42.925C80.9333 44.2 80.5917 45.9083 79.3222 46.7556C79.0555 46.9306 74.7917 49.7 68.3083 49.7ZM72.225 75C71.3778 75 70.5472 74.6167 70 73.8889C69.9306 73.7944 62.2722 63.8889 50 63.8889C37.7305 63.8889 30.0722 73.7944 29.9944 73.8972C29.0694 75.1139 27.325 75.3556 26.1055 74.4361C24.8833 73.5139 24.6361 71.7806 25.5555 70.5556C25.9305 70.0556 34.8944 58.3333 50 58.3333C65.1055 58.3333 74.0694 70.0583 74.4444 70.5556C75.3667 71.7806 75.1167 73.5222 73.8889 74.4417C73.3889 74.8194 72.8055 75 72.225 75Z",fill:"#664500"}),P.createElement("path",{d:"M42.7528 55.7778C41.4944 55.2361 40.0333 55.7028 39.3111 56.8611L25.4222 79.0833C24.8889 79.9417 24.8583 81.0194 25.35 81.9028C25.8389 82.7861 26.7667 83.3333 27.7778 83.3333H36.1111C37.3861 83.3333 38.4972 82.4667 38.8055 81.2278L44.3611 59.0056C44.6917 57.6833 44.0111 56.3111 42.7528 55.7778ZM74.5778 79.0833L60.6889 56.8611C59.9611 55.7 58.5028 55.2389 57.25 55.7778C55.9917 56.3111 55.3083 57.6833 55.6417 59.0056L61.1972 81.2278C61.5055 82.4667 62.6139 83.3333 63.8889 83.3333H72.2222C73.2305 83.3333 74.1611 82.7861 74.6528 81.9C75.1417 81.0194 75.1139 79.9389 74.5778 79.0833Z",fill:"#F5F8FA"}),P.createElement("path",{d:"M88.8389 83.8278C88.8472 83.6611 88.8889 83.5028 88.8889 83.3333C88.8889 78.7333 85.1556 75 80.5556 75C77.7028 75 75.1889 76.4389 73.6861 78.625C72.3806 78.0833 70.9472 77.7778 69.4444 77.7778C63.3083 77.7778 58.3333 82.7528 58.3333 88.8889C58.3333 95.025 63.3083 100 69.4444 100C73.2361 100 76.5778 98.0917 78.5833 95.1917C79.9167 98.025 82.7722 100 86.1111 100C90.7139 100 94.4445 96.2694 94.4445 91.6667C94.4445 88.0222 92.0945 84.9611 88.8389 83.8278ZM30.5556 77.7778C29.05 77.7778 27.6222 78.0833 26.3139 78.625C24.8111 76.4389 22.2972 75 19.4444 75C14.8444 75 11.1111 78.7333 11.1111 83.3333C11.1111 83.5028 11.15 83.6611 11.1611 83.8278C7.90556 84.9611 5.55556 88.0222 5.55556 91.6667C5.55556 96.2694 9.28611 100 13.8889 100C17.2278 100 20.0861 98.025 21.4139 95.1917C23.4222 98.0917 26.7611 100 30.5556 100C36.6917 100 41.6667 95.025 41.6667 88.8889C41.6667 82.7528 36.6917 77.7778 30.5556 77.7778Z",fill:"#E1E8ED"})),P.createElement("defs",null,P.createElement("clipPath",{id:"clip0_1_6"},P.createElement("rect",{width:100,height:100,fill:"white"})))),Zr=e=>P.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("g",{clipPath:"url(#clip0_3_14)"},P.createElement("path",{d:"M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),P.createElement("path",{d:"M31.9444 55.5556C35.7798 55.5556 38.8889 51.2028 38.8889 45.8333C38.8889 40.4639 35.7798 36.1111 31.9444 36.1111C28.1091 36.1111 25 40.4639 25 45.8333C25 51.2028 28.1091 55.5556 31.9444 55.5556Z",fill:"#664500"}),P.createElement("path",{d:"M68.0556 55.5556C71.8909 55.5556 75 51.2028 75 45.8333C75 40.4639 71.8909 36.1111 68.0556 36.1111C64.2202 36.1111 61.1111 40.4639 61.1111 45.8333C61.1111 51.2028 64.2202 55.5556 68.0556 55.5556Z",fill:"#664500"})),P.createElement("defs",null,P.createElement("clipPath",{id:"clip0_3_14"},P.createElement("rect",{width:100,height:100,fill:"white"})))),ud=e=>P.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("g",{clipPath:"url(#clip0_3_44)"},P.createElement("path",{d:"M50 2.5C76.2335 2.5 97.5 23.7665 97.5 50C97.5 76.2335 76.2335 97.5 50 97.5C23.7665 97.5 2.5 76.2335 2.5 50C2.5 23.7665 23.7665 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),P.createElement("path",{d:"M44.4444 47.1056C43.2806 47.1056 42.1972 46.3695 41.8083 45.2056C41.2444 43.5417 38.9806 38.7722 36.1111 38.7722C33.1611 38.7722 30.8667 43.8472 30.4139 45.2056C29.9278 46.6583 28.3639 47.45 26.9 46.9611C25.4444 46.4778 24.6583 44.9028 25.1444 43.4472C25.4917 42.4 28.7667 33.2139 36.1139 33.2139C43.4611 33.2139 46.7333 42.4 47.0833 43.4472C47.5694 44.9028 46.7833 46.4778 45.3278 46.9611C45.0333 47.0611 44.7361 47.1056 44.4444 47.1056ZM72.2222 47.1056C71.0583 47.1056 69.975 46.3695 69.5889 45.2056C69.025 43.5417 66.7583 38.7722 63.8889 38.7722C60.9389 38.7722 58.6417 43.8472 58.1889 45.2056C57.7028 46.6583 56.1444 47.45 54.675 46.9611C53.2222 46.4778 52.4333 44.9028 52.9194 43.4472C53.2667 42.4 56.5417 33.2139 63.8861 33.2139C71.2306 33.2139 74.5056 42.4 74.8528 43.4472C75.3389 44.9028 74.5528 46.4778 73.0972 46.9611C72.8083 47.0611 72.5139 47.1056 72.2222 47.1056ZM75.9306 57.475C75.4361 57.0278 74.6972 57 74.1667 57.3945C74.0583 57.475 63.2722 65.45 50 65.45C36.7611 65.45 25.9389 57.475 25.8333 57.3945C25.3028 57 24.5639 57.0333 24.0694 57.475C23.5778 57.9195 23.4667 58.6528 23.8083 59.2195C24.1667 59.8167 32.7444 73.7833 50 73.7833C67.2556 73.7833 75.8361 59.8167 76.1917 59.2195C76.5333 58.65 76.425 57.9222 75.9306 57.475Z",fill:"#664500"}),P.createElement("path",{d:"M58.9695 10.9639C58.9695 11.6306 59.0528 12.275 59.1972 12.8972C60.3778 20.2389 68.5417 27.9833 74.3917 30.1111C79.0167 28.4306 85.075 23.2333 87.9972 17.5028C82.1945 10.725 74.6111 5.51945 65.9722 2.60834C61.9945 3.32223 58.9695 6.78056 58.9695 10.9639ZM38.175 80.7722C38.3333 80.1 38.425 79.4 38.425 78.6778C38.425 73.5861 34.2972 69.4583 29.2056 69.4583C26.1139 69.4583 23.3889 70.9833 21.7139 73.3167C20.0417 70.9861 17.3139 69.4583 14.2222 69.4583C10.775 69.4583 7.80278 71.3722 6.22223 74.175C11.2889 83.3278 19.1389 90.7222 28.6333 95.2139C33.1806 91.4611 37.3306 86.0278 38.175 80.7722ZM95.2806 71.2278C94.4972 68.5889 92.0806 66.6528 89.1861 66.6528C87.0445 66.6528 85.1556 67.7083 83.9972 69.325C82.8389 67.7083 80.95 66.6528 78.8083 66.6528C75.2806 66.6528 72.4222 69.5111 72.4222 73.0389C72.4222 73.5389 72.4861 74.0222 72.5945 74.4889C73.4472 79.7806 79.1167 85.3111 83.4528 87.1583C88.3861 82.7139 92.4278 77.3056 95.2806 71.2278Z",fill:"#FFAC33"}),P.createElement("path",{d:"M93.4028 9.08055C93.4028 4.38055 89.5917 0.57222 84.8945 0.57222C82.0417 0.57222 79.525 1.98055 77.9806 4.13333C76.4361 1.98055 73.9194 0.57222 71.0667 0.57222C66.3667 0.57222 62.5583 4.38055 62.5583 9.08055C62.5583 9.74722 62.6417 10.3917 62.7861 11.0139C63.9695 18.3556 72.1306 26.1 77.9806 28.2278C83.8306 26.1 91.9917 18.3556 93.1722 11.0167C93.3195 10.3917 93.4028 9.74722 93.4028 9.08055ZM33.9111 78.9111C33.9111 73.8195 29.7833 69.6917 24.6917 69.6917C21.6 69.6917 18.875 71.2167 17.2 73.55C15.5278 71.2167 12.8 69.6917 9.70834 69.6917C4.61667 69.6917 0.488892 73.8195 0.488892 78.9111C0.488892 79.6333 0.580558 80.3306 0.736114 81.0056C2.01667 88.9583 10.8583 97.35 17.1972 99.6556C23.5361 97.3528 32.3778 88.9611 33.6583 81.0083C33.8194 80.3306 33.9111 79.6306 33.9111 78.9111ZM99.8556 72.575C99.8556 69.0472 96.9972 66.1889 93.4695 66.1889C91.3278 66.1889 89.4389 67.2444 88.2806 68.8611C87.1222 67.2444 85.2333 66.1889 83.0917 66.1889C79.5639 66.1889 76.7056 69.0472 76.7056 72.575C76.7056 73.075 76.7695 73.5583 76.8778 74.025C77.7639 79.5333 83.8889 85.3472 88.2806 86.9417C92.6695 85.3472 98.7972 79.5333 99.6806 74.025C99.7917 73.5583 99.8556 73.075 99.8556 72.575Z",fill:"#DD2E44"})),P.createElement("defs",null,P.createElement("clipPath",{id:"clip0_3_44"},P.createElement("rect",{width:100,height:100,fill:"white"})))),vq=e=>e.langObj,xq=e=>e.configObj,yq=e=>e.mapObj,bq=e=>e.statementsObj,Sq=e=>e.columnStatements,Cq=e=>e.presortSortedStatementsNumInitial,wq=e=>e.setPresortFinished,jq=e=>e.setTriggerPresortFinishedModal,Tq=e=>e.results,Oq=e=>e.setResults,Iq=e=>e.setProgressScoreAdditional,Pq=e=>e.setPosSorted,Eq=e=>e.setNegSorted;function $q(e){const t=X(vq),r=X(xq),n=X(yq),o=X(bq),i=X(Sq),a=E(Cq),s=E(wq),c=E(jq),u=E(Tq),d=E(Oq),f=E(Iq),g=E(Pq),p=E(Eq),m=A(D(t.presortStatements))||"",h=A(D(t.presortDisagreement))||"",x=A(D(t.presortAgreement))||"",v=A(D(t.presortNeutral))||"",y=A(D(t.presortOnPageInstructions))||"",C=[l.jsx(go,{},"emojiN5"),l.jsx(cd,{},"emojiN4"),l.jsx(Rr,{},"emojiN3"),l.jsx(kr,{},"emojiN2"),l.jsx(Kr,{},"emojiN1"),l.jsx(Zr,{},"emoji0"),l.jsx(Jr,{},"emoji1"),l.jsx(Mr,{},"emoji2"),l.jsx(en,{},"emoji3"),l.jsx(ud,{},"emoji4"),l.jsx(Ln,{},"emoji5")];let T=n.useColLabelEmojiPresort[0];T===!1||T==="false"?T=!1:T=!0;let[N,j]=P.useState(a);const I=`${e.cardFontSize}px`;let $=r.defaultFontColor,w=i.statementList.length;const U=180,[L,q]=Ee("columns",{cards:{name:m,items:[...e.statements],id:"cards"},neg:{name:h,items:[],id:"neg"},neutral:{name:v,items:[],id:"neutral"},pos:{name:x,id:"pos",items:[]}});let K=333,B=111;r.sortDirection==="negative"&&(K=111,B=333);const J=P.useCallback((k,_,z)=>{if(!k.destination||k.destination.droppableId==="cards")return;const{source:V,destination:Q}=k,H=[...i.statementList],G=k.destination.droppableId,Z=k.draggableId;for(let W=0;W<H.length;W++)H[W].id===Z&&(G==="neg"&&(H[W].divColor="isNegativeStatement",H[W].cardColor="pinkSortCard",H[W].pinkChecked=!0,H[W].yellowChecked=!1,H[W].greenChecked=!1,H[W].sortValue=K,H[W].psValue=-2),G==="neutral"&&(H[W].divColor="isUncertainStatement",H[W].cardColor="yellowSortCard",H[W].pinkChecked=!1,H[W].yellowChecked=!0,H[W].greenChecked=!1,H[W].psValue=0,H[W].sortValue=222),G==="pos"&&(H[W].divColor="isPositiveStatement",H[W].cardColor="greenSortCard",H[W].pinkChecked=!1,H[W].yellowChecked=!1,H[W].greenChecked=!0,H[W].sortValue=B,H[W].psValue=2));for(let W=0;W<H.length;W++)H[W].listIndex=W+1;if(i.statementList=[...H],localStorage.setItem("columnStatements",JSON.stringify(i)),V.droppableId!==Q.droppableId)try{const W=_[V.droppableId],R=_[Q.droppableId],O=[...W.items],b=[...R.items],[F]=O.splice(V.index,1);R.id==="pos"&&(F.backgroundColor=r.greenCardColor),R.id==="neg"&&(F.backgroundColor=r.pinkCardColor),R.id==="neutral"&&(F.backgroundColor=r.yellowCardColor),b.splice(Q.index,0,F),z({..._,[V.droppableId]:{...W,items:O},[Q.droppableId]:{...R,items:b}});let M;if(W.id==="cards"){M=o.totalStatements-W.items.length+1,j(M);const ie=(M/o.totalStatements*30).toFixed();f(ie)}}catch(W){console.log(W)}else try{const W=_[V.droppableId],R=[...W.items],[O]=R.splice(V.index,1);R.splice(Q.index,0,O),z({..._,[V.droppableId]:{...W,items:R}})}catch(W){console.log(W)}},[r,i,o,f,B,K]);P.useEffect(()=>{const k=_=>{let z;if(_.key==="1"||_.key===1)z="neg";else if(_.key==="2"||_.key===2)z="neutral";else if(_.key==="3"||_.key===3)z="pos";else return;if(L.cards.items.length>0){const Q={draggableId:L.cards.items[0].id,type:"DEFAULT",source:{index:0,droppableId:"cards"},reason:"DROP",mode:"FLUID",destination:{droppableId:z,index:0},combine:null};J(Q,L,q)}};return window.addEventListener("keyup",k),()=>window.removeEventListener("keyup",k)},[J,q,L]),P.useEffect(()=>{let k="",_="",z="";L.pos.items.forEach(Q=>{L.pos.items[0]&&(k+=Q.statementNum+",")}),L.neutral.items[0]&&L.neutral.items.forEach(Q=>{_+=Q.statementNum+","}),L.neg.items[0]&&L.neg.items.forEach(Q=>{z+=Q.statementNum+","});let V=u;V.npos=L.pos.items.length,V.posStateNums=k,V.nneu=L.neutral.items.length,V.neuStateNums=_,V.nneg=L.neg.items.length,V.negStateNums=z,d(V),localStorage.setItem("resultsPresort",JSON.stringify(V))},[L,u,d]),P.useEffect(()=>{if(L.cards.items.length===0){s(!0),c(!0);let k=JSON.parse(localStorage.getItem("columnStatements"));localStorage.setItem("newCols",JSON.stringify(k));let _=[],z=[],V=[];if(k!==null){V=[...k.statementList],V.forEach(R=>(R.selected=!1,R.selectedPos=!1,R.selectedNeg=!1,R)),_=V.filter(R=>R.sortValue===111),g(_),localStorage.setItem("posSorted",JSON.stringify([..._])),z=V.filter(R=>R.sortValue===333),p(z),localStorage.setItem("negSorted",JSON.stringify([...z]));let Q=JSON.parse(localStorage.getItem("sortRightArrays")),H=JSON.parse(localStorage.getItem("sortLeftArrays")),G=_.length,Z=z.length,W=Bg(G,Z,Q,H);localStorage.setItem("thinDisplayControllerArray",JSON.stringify(W))}}},[L.cards.items.length,s,c,g,p]);const Y=(k,_)=>{switch(k){case"cards":return _?"#e6f3ff":"#f8fafc";case"neg":return _?"#fef7f7":"#fee2e2";case"neutral":return _?"#fefdf8":"#fef3c7";case"pos":return _?"#f7fef7":"#dcfce7";default:return"#ffffff"}};return l.jsxs(Aq,{id:"statementsGrid",children:[l.jsx(_q,{id:"imageEnlargeInstructionsDiv",children:l.jsx("div",{children:y})}),l.jsxs(Fq,{id:"completionRatio",children:[N,"/",w]}),l.jsxs(Nq,{id:"negColumnHeader",children:[l.jsxs("div",{id:"negHeader",children:[T?l.jsx(ai,{children:C[+n.presortEmojiNegativeIndex]}):null,L.neg.name,T?l.jsx(ai,{children:C[+n.presortEmojiNegativeIndex]}):null]}),l.jsx(xf,{children:l.jsx("div",{children:t.press1})})]}),l.jsxs(kq,{id:"neutralColumnHeader",children:[l.jsxs("div",{id:"neuHeader",children:[T?l.jsx(ai,{children:C[+n.presortEmojiNeutralIndex]}):null,L.neutral.name,T?l.jsx(ai,{children:C[+n.presortEmojiNeutralIndex]}):null]}),l.jsx(xf,{children:l.jsx("div",{children:t.press2})})]}),l.jsxs(Mq,{id:"posColumnHeader",children:[l.jsxs("div",{id:"posHeader",children:[T?l.jsx(ai,{children:C[+n.presortEmojiPositiveIndex]}):null,L.pos.name,T?l.jsx(ai,{children:C[+n.presortEmojiPositiveIndex]}):null]}),l.jsx(xf,{children:l.jsx("div",{children:t.press3})})]}),l.jsx(ld,{onDragEnd:k=>J(k,L,q),children:Object.entries(L).map(([k,_])=>l.jsx(Bq,{id:`${k}Div`,className:`${k}Div`,children:l.jsx(Lq,{children:l.jsx(la,{droppableId:k,className:k,children:(z,V)=>l.jsxs(Dq,{...z.droppableProps,ref:z.innerRef,id:k,className:k,columnType:k,isDraggingOver:V.isDraggingOver,style:{background:Y(k,V.isDraggingOver)},children:[_.items.map((Q,H)=>{const G=A(`<div>${D(Q.statement)}</div>`);return l.jsx(Qs,{id:Q.id,draggableId:Q.id,index:H,className:"dragObject",children:(Z,W)=>l.jsx(Rq,{ref:Z.innerRef,...Z.draggableProps,...Z.dragHandleProps,style:{userSelect:"none",padding:6,margin:"0 0 8px 0",width:"100%",height:U,overflow:"hidden",fontSize:I,filter:W.isDragging?"brightness(0.85)":"brightness(1.00)",backgroundColor:(W.isDragging,Q.backgroundColor),color:$,...Z.draggableProps.style},children:G})},Q.id)}),z.placeholder]})},k)})},k))})]})}const Nq=S.div`
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  grid-row-start: 2;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  #negHeader {
    display: flex;
    gap: 10px;
    outline: 1px solid #fca5a5;
    justify-content: center;
    align-items: center;
    /* background: linear-gradient(135deg, #fecaca, #f87171); */
    background: #fee2e2;
    color: #7f1d1d;
    min-width: 60%;
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(239, 68, 68, 0.2);
  }
`,kq=S.div`
  display: flex;
  flex-direction: column;

  align-self: center;
  grid-column-start: 3;
  grid-row-start: 2;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  #neuHeader {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    outline: 1px solid #fbbf24;
    /* background: linear-gradient(135deg, #fde68a, #fbbf24); */
    background: #fef3c7;
    color: #78350f;
    min-width: 60%;
    padding: 8px 12px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(245, 158, 11, 0.2);
  }
`,Mq=S.div`
  display: flex;
  flex-direction: column;
  grid-column-start: 4;
  grid-row-start: 2;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  #posHeader {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    /* background: linear-gradient(135deg, #bbf7d0, #34d399); */
    background: #dcfce7;
    color: #064e3b;
    min-width: 60%;
    padding: 8px 12px;
    border-radius: 8px;
    outline: 1px solid #34d399;
    box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);
  }
`,Aq=S.div`
  padding-top: 0px;
  margin-top: 0px;
  margin-bottom: 55px;
  display: grid;
  min-height: calc(100vh-100px);
  grid-template-rows: 30vh 85px 58vh;
  grid-template-columns: 0.25fr 1.5fr 1.5fr 1.5fr 0.25fr;
  row-gap: 3px;
  column-gap: 15px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`,Dq=S.div`
  padding: 12px;
  width: 100%;
  min-height: 400px;
  border-radius: 12px;
  transition: all 0.2s ease;
  position: relative;

  ${e=>e.columnType==="cards"&&`
    box-shadow: inset 0 0 20px rgba(59, 130, 246, 0.05);
  `}

  ${e=>e.columnType==="neg"&&`
    box-shadow: inset 0 0 20px rgba(239, 68, 68, 0.05);
  `}
  
  ${e=>e.columnType==="neutral"&&`
    box-shadow: inset 0 0 20px rgba(245, 158, 11, 0.05);
  `}
  
  ${e=>e.columnType==="pos"&&`
    box-shadow: inset 0 0 20px rgba(16, 185, 129, 0.05);
  `}
`,Rq=S.div`
  background-color: "#83cafe";
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  width: 27.8vw;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    transform: translateY(-1px);
  }
`,Lq=S.div`
  margin: 4px;
  img {
    max-width: 98%;
    max-height: 98%;
    padding: 0px;
  }
`,Fq=S.div`
  display: flex;
  justify-content: center;
  align-items: end;
  padding-bottom: 60px;
  font-size: 60px;
  font-weight: bold;
  padding-left: 3px;
  padding-right: 3px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,_q=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: end;
  margin-bottom: 16px;
  font-size: 16px;
  padding: 10px;
  padding-bottom: 15px;
  width: 100%;
  /* height: 19.8vh; */
  height: 180px;
  /* background: linear-gradient(135deg, #f0f9ff, #e0f2fe); */
  border-radius: 12px;
  // border-left: 4px solid #0ea5e9;
  color: #0c4a6e;
  /* box-shadow: 0 2px 4px rgba(14, 165, 233, 0.1); */
`,Bq=S.div`
  margin: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
`,xf=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding-top: 2px;
  background-color: #f2f2f2;
  border-radius: 5px;
  font-size: 12px;
  border: 1px solid darkgray;
  width: 150px;
  text-align: center;
  height: 20px;
`,ai=S.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,zq=e=>e.langObj,Hq=e=>e.triggerPresortPreventNavModal,Uq=e=>e.setTriggerPresortPreventNavModal,Vq=()=>{const e=X(zq),t=E(Hq),r=E(Uq),n=A(D(e.presortPreventNavModalHead))||"",o=A(D(e.presortPreventNavModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(Wq,{children:n}),l.jsx("hr",{}),l.jsx(qq,{children:o})]})},Wq=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,qq=S.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,Gq=e=>e.langObj,Kq=e=>e.triggerPresortFinishedModal,Jq=e=>e.setTriggerPresortFinishedModal,Qq=()=>{const e=X(Gq),t=E(Kq),r=E(Jq),n=A(D(e.presortFinishedModalHead))||"",o=A(D(e.presortFinishedModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(Zq,{children:n}),l.jsx("hr",{}),l.jsx(Yq,{children:o})]})},Zq=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,Yq=S.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,Xq=e=>e.langObj,eG=e=>e.configObj,tG=e=>e.setCurrentPage,rG=()=>{const e=X(Xq),t=X(eG),r=E(tG),n=t.headerBarColor,o=A(D(e.stepCompleteMessage))||"",i=A(D(e.titleBarText))||"";return P.useEffect(()=>{r("presort")},[r]),l.jsxs(ae.Fragment,{children:[l.jsx(nG,{background:n,children:i}),l.jsx(oG,{children:l.jsx(iG,{children:o})})]})},nG=S.div`
  width: calc(100vw-4px);
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 28px;
`,oG=S.div`
  display: flex;
  width: calc(100vw-4px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,iG=S.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 50vw;
  justify-content: center;
  align-items: center;
  font-size: calc(14px + 1.5vw);
  text-align: center;
  color: black;
`,aG=e=>e.langObj,sG=e=>e.configObj,lG=e=>e.setCurrentPage,$3=()=>{const e=X(aG),t=X(sG),r=E(lG),n=t.headerBarColor,o=A(D(e.logInFirst)),i=A(D(e.titleBarText));return P.useEffect(()=>{r("presort")},[r]),l.jsxs(ae.Fragment,{children:[l.jsx(cG,{background:n,children:i}),l.jsx(uG,{children:l.jsx(dG,{children:o})})]})},cG=S.div`
  width: calc(100vw-4px);
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 28px;
`,uG=S.div`
  display: flex;
  min-height: 800px;
  width: calc(100vw-4px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,dG=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2em;
  width: 85vw;
  font-size: 1.35em;
  padding: 25px;
  align-self: center;
`,fG=e=>e.langObj,gG=e=>e.configObj,pG=e=>e.statementsObj,mG=e=>e.columnStatements,hG=e=>e.setPresortFinished,vG=e=>e.setTriggerPresortFinishedModal,xG=e=>e.results,yG=e=>e.setResults,bG=e=>e.setProgressScoreAdditional;function SG(e){const t=X(fG),r=X(gG),n=X(pG),o=X(mG),i=E(hG),a=E(vG),s=E(xG),c=E(yG),u=E(bG);let d="24vw";r.imageFormat==="postSortImageModal43"&&(d="20vw");const f=A(D(t.presortStatements))||"",g=A(D(t.presortDisagreement))||"",p=A(D(t.presortAgreement))||"",m=A(D(t.presortNeutral))||"",h=A(D(t.presortImageSortInstructions))||"";let[x,v]=Ee("presortSortedCards",0);const[y,C]=P.useState(!1),[T,N]=P.useState(""),[j,I]=P.useState([]),[$,w]=P.useState(!1),U=z=>{z.detail===2&&(z.shiftKey?(j.push(z.target.src),I(j),j.length===2&&w(!0)):(N(z.target.src),C(!0)))};let L=o.imagesList.length;const q=`${e.cardFontSize}px`;let K=r.defaultFontColor;const[B,J]=Ee("columns",{cards:{name:f,items:[...o.imagesList],id:"cards"},neg:{name:g,items:[],id:"neg"},neutral:{name:m,items:[],id:"neutral"},pos:{name:p,id:"pos",items:[]}});let Y=333,k=111;r.sortDirection==="negative"&&(Y=111,k=333);const _=P.useCallback((z,V,Q)=>{if(!z.destination||z.destination.droppableId==="cards")return;const{source:H,destination:G}=z,Z=[...o.imagesList],W=z.destination.droppableId,R=z.draggableId;for(let O=0;O<Z.length;O++)Z[O].id===R&&(W==="neg"&&(Z[O].divColor="isNegativeStatement",Z[O].cardColor="pinkSortCard",Z[O].pinkChecked=!0,Z[O].yellowChecked=!1,Z[O].greenChecked=!1,Z[O].sortValue=Y),W==="neutral"&&(Z[O].divColor="isUncertainStatement",Z[O].cardColor="yellowSortCard",Z[O].pinkChecked=!1,Z[O].yellowChecked=!0,Z[O].greenChecked=!1,Z[O].sortValue=222),W==="pos"&&(Z[O].divColor="isPositiveStatement",Z[O].cardColor="greenSortCard",Z[O].pinkChecked=!1,Z[O].yellowChecked=!1,Z[O].greenChecked=!0,Z[O].sortValue=k));for(let O=0;O<Z.length;O++)Z[O].listIndex=O+1;if(o.imagesList=[...Z],localStorage.setItem("columnStatements",JSON.stringify(o)),H.droppableId!==G.droppableId)try{const O=V[H.droppableId],b=V[G.droppableId],F=[...O.items],M=[...b.items],[ee]=F.splice(H.index,1);b.id==="pos"&&(ee.backgroundColor=r.greenCardColor),b.id==="neg"&&(ee.backgroundColor=r.pinkCardColor),b.id==="neutral"&&(ee.backgroundColor=r.yellowCardColor),M.splice(G.index,0,ee),Q({...V,[H.droppableId]:{...O,items:F},[G.droppableId]:{...b,items:M}});let ie;if(O.id==="cards"){ie=L-O.items.length+1,v(ie);const ce=(ie/n.totalStatements*30).toFixed();u(ce)}}catch(O){console.log(O)}else try{const O=V[H.droppableId],b=[...O.items],[F]=b.splice(H.index,1);b.splice(G.index,0,F),Q({...V,[H.droppableId]:{...O,items:b}})}catch(O){console.log(O)}},[r,o,n,u,L,k,Y,v]);return P.useEffect(()=>{const z=V=>{let Q;if(V.key==="1"||V.key===1)Q="neg";else if(V.key==="2"||V.key===2)Q="neutral";else if(V.key==="3"||V.key===3)Q="pos";else return;if(B.cards.items.length>0){const G={draggableId:B.cards.items[0].id,type:"DEFAULT",source:{index:0,droppableId:"cards"},reason:"DROP",mode:"FLUID",destination:{droppableId:Q,index:0},combine:null};_(G,B,J)}};return window.addEventListener("keyup",z),()=>window.removeEventListener("keyup",z)},[_,B,J]),P.useEffect(()=>{let z="",V="",Q="";B.pos.items.forEach(G=>{B.pos.items[0]&&(z+=G.statementNum+",")}),B.neutral.items[0]&&B.neutral.items.forEach(G=>{V+=G.statementNum+","}),B.neg.items[0]&&B.neg.items.forEach(G=>{Q+=G.statementNum+","});let H=s;H.npos=B.pos.items.length,H.posStateNums=z,H.nneu=B.neutral.items.length,H.neuStateNums=V,H.nneg=B.neg.items.length,H.negStateNums=Q,c(H),localStorage.setItem("resultsPresort",JSON.stringify(H))},[B,s,c]),P.useEffect(()=>{B.cards.items.length===0&&(i(!0),a(!0))},[B.cards.items.length,i,a]),l.jsxs(TG,{id:"imageGrid",children:[l.jsx(EG,{id:"imageEnlargeInstructionsDiv",children:l.jsx("div",{children:h})}),l.jsxs(PG,{id:"completionRatioImg",children:[x,"/",L]}),l.jsx(CG,{id:"negDivImg",children:l.jsx("div",{children:B.neg.name})}),l.jsx(wG,{id:"negDivImg",children:l.jsx("div",{children:B.neutral.name})}),l.jsx(jG,{id:"negDivImg",children:l.jsx("div",{children:B.pos.name})}),l.jsx(_e,{open:y,center:!0,onClose:()=>C(!1),classNames:{modal:`${r.imageFormat}`,overlay:"dualImageOverlay"},children:l.jsx("img",{src:T,width:"100%",height:"auto",alt:"modalImage"})}),l.jsxs(_e,{open:$,center:!0,onClose:()=>{w(!1),I([])},classNames:{overlay:"dualImageOverlay",modal:"dualImageModal"},children:[l.jsx("img",{src:j[0],width:"49.5%",height:"auto",alt:"modalImage"}),l.jsx("img",{src:j[1],width:"49.5%",height:"auto",style:{marginLeft:"1%"},alt:"modalImage2"})]}),l.jsx(ld,{onDragEnd:z=>_(z,B,J),children:Object.entries(B).map(([z,V])=>l.jsx($G,{id:`${z}Div`,className:`${z}DivImg`,children:l.jsx(IG,{children:l.jsx(la,{droppableId:z,className:z,children:(Q,H)=>l.jsxs("div",{...Q.droppableProps,ref:Q.innerRef,id:z,className:z,style:{background:H.isDraggingOver?"lightblue":"white",padding:4,width:"100%",height:"auto"},children:[V.items.map((G,Z)=>l.jsx(Qs,{id:G.id,draggableId:G.id,index:Z,className:"dragObject",children:(W,R)=>l.jsx(OG,{id:"DroppableContainer",ref:W.innerRef,...W.draggableProps,...W.dragHandleProps,imageWidth:d,style:{userSelect:"none",padding:2,margin:"0 0 8px 0",overflow:"hidden",fontSize:q,filter:R.isDragging?"brightness(0.85)":"brightness(1.00)",backgroundColor:(R.isDragging,G.backgroundColor),color:K,...W.draggableProps.style},onClick:O=>U(O,G.element.props.src),children:l.jsx("img",{src:G.element.props.src,alt:G.element.props.alt})})},G.id)),Q.placeholder]})},z)})},z))})]})}const CG=S.div`
  display: flex;
  grid-column-start: 2;
  grid-row-start: 2;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  div {
    display: flex;
    outline: 1px solid #a8a8a8;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 182, 193, 0.4);
    min-width: 50%;
    padding: 2px;
    border-radius: 5px;
  }
`,wG=S.div`
  display: flex;
  align-self: center;
  grid-column-start: 3;
  grid-row-start: 2;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    outline: 1px solid #a8a8a8;
    background-color: lightgray;
    min-width: 50%;
    padding: 2px;
    border-radius: 5px;
  }
`,jG=S.div`
  display: flex;
  grid-column-start: 4;
  grid-row-start: 2;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: bold;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(199, 246, 199, 0.6);
    min-width: 50%;
    padding: 2px;
    border-radius: 5px;
    outline: 1px solid #a8a8a8;
  }
`,TG=S.div`
  padding-top: 10px;
  margin-top: 25px;
  margin-bottom: 55px;
  display: grid;
  height: calc(100vh-100px);
  grid-template-rows: 34h 25px 1fr;
  grid-template-columns: 0.25fr 1.5fr 1.5fr 1.5fr 0.25fr;
  row-gap: 3px;
  column-gap: 15px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`,OG=S.div`
  background-color: "#83cafe";
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 2px;
  width: 27.8vw;
  // margin-left: 15px;
  // border: 1px solid #a8a8a8;
  img {
    width: ${e=>e.imageWidth} !important;
    height: auto;
    border: 1px solid black;
  }
`,IG=S.div`
  margin: 4px;
  border: 2px solid green;
  img {
    object-fit: contain;
    padding: 0px;
  }
`,PG=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-size: 60px;
  font-weight: bold;
  padding-left: 3px;
  padding-right: 3px;
`,EG=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-size: 16px;
  padding-left: 3px;
  padding-right: 3px;
  width: 100%;
`,$G=S.div`
  display: flex;
  flex-direction: "column";
  margin: 4px;
  width: 100%;
  border: 2px solid blue;
`,NG=e=>e.langObj,kG=e=>e.configObj,MG=e=>e.statementsObj,AG=e=>e.cardFontSizePresort,DG=e=>e.isLoggedIn,RG=e=>e.setCurrentPage,LG=e=>e.setProgressScore,FG=e=>e.presortNoReturn,_G=e=>e.resetColumnStatements,BG=e=>e.setDisplayNextButton,Rx=()=>{const e=X(NG),t=X(kG),r=X(MG);let n=E(AG);const o=X(DG),i=E(RG),a=E(LG),s=E(FG),c=X(_G),u=E(BG),d=+localStorage.getItem("fontSizePresort");d&&(n=d),u(!0);const f=P.useRef(null);P.useEffect(()=>(f.current=Date.now(),(async()=>{await i("presort"),localStorage.setItem("currentPage","presort"),await a(15)})(),()=>{jr(f.current,"presortPage","presortPage")}),[i,a]);let g=r.columnStatements;t.setupTarget==="local"&&(g=JSON.parse(JSON.stringify(c)));const p=t.headerBarColor,m=t.initialScreen,h=Wm(g.statementList),x=t.useImages,v=A(D(e.titleBarText))||"";return m!=="anonymous"&&o===!1?l.jsx($3,{}):s?l.jsx(rG,{}):l.jsxs(ae.Fragment,{children:[l.jsx(Fn,{}),l.jsx(XB,{}),l.jsx(Qq,{}),l.jsx(Vq,{}),l.jsx(zG,{background:p,children:v}),x?l.jsx(SG,{cardFontSize:n}):l.jsx($q,{statements:h,cardFontSize:n})]})},zG=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  min-height: 50px;
  background-color: ${e=>e.background};
  color: white;
  font-weight: bold;
  font-size: 28px;
  position: fixed;
  z-index: 999;
  top: 0;
`;var HG="__lodash_hash_undefined__";function UG(e){return this.__data__.set(e,HG),this}var VG=UG;function WG(e){return this.__data__.has(e)}var qG=WG,GG=Fm,KG=VG,JG=qG;function Xc(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new GG;++t<r;)this.add(e[t])}Xc.prototype.add=Xc.prototype.push=KG;Xc.prototype.has=JG;var QG=Xc;function ZG(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var YG=ZG;function XG(e,t){return e.has(t)}var eK=XG,tK=QG,rK=YG,nK=eK,oK=1,iK=2;function aK(e,t,r,n,o,i){var a=r&oK,s=e.length,c=t.length;if(s!=c&&!(a&&c>s))return!1;var u=i.get(e),d=i.get(t);if(u&&d)return u==t&&d==e;var f=-1,g=!0,p=r&iK?new tK:void 0;for(i.set(e,t),i.set(t,e);++f<s;){var m=e[f],h=t[f];if(n)var x=a?n(h,m,f,t,e,i):n(m,h,f,e,t,i);if(x!==void 0){if(x)continue;g=!1;break}if(p){if(!rK(t,function(v,y){if(!nK(p,y)&&(m===v||o(m,v,r,n,i)))return p.push(y)})){g=!1;break}}else if(!(m===h||o(m,h,r,n,i))){g=!1;break}}return i.delete(e),i.delete(t),g}var N3=aK;function sK(e){var t=-1,r=Array(e.size);return e.forEach(function(n,o){r[++t]=[o,n]}),r}var lK=sK;function cK(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var uK=cK,Lx=Yi,Fx=p5,dK=Rm,fK=N3,gK=lK,pK=uK,mK=1,hK=2,vK="[object Boolean]",xK="[object Date]",yK="[object Error]",bK="[object Map]",SK="[object Number]",CK="[object RegExp]",wK="[object Set]",jK="[object String]",TK="[object Symbol]",OK="[object ArrayBuffer]",IK="[object DataView]",_x=Lx?Lx.prototype:void 0,yf=_x?_x.valueOf:void 0;function PK(e,t,r,n,o,i,a){switch(r){case IK:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case OK:return!(e.byteLength!=t.byteLength||!i(new Fx(e),new Fx(t)));case vK:case xK:case SK:return dK(+e,+t);case yK:return e.name==t.name&&e.message==t.message;case CK:case jK:return e==t+"";case bK:var s=gK;case wK:var c=n&mK;if(s||(s=pK),e.size!=t.size&&!c)return!1;var u=a.get(e);if(u)return u==t;n|=hK,a.set(e,t);var d=fK(s(e),s(t),n,o,i,a);return a.delete(e),d;case TK:if(yf)return yf.call(e)==yf.call(t)}return!1}var EK=PK,Bx=f5,$K=1,NK=Object.prototype,kK=NK.hasOwnProperty;function MK(e,t,r,n,o,i){var a=r&$K,s=Bx(e),c=s.length,u=Bx(t),d=u.length;if(c!=d&&!a)return!1;for(var f=c;f--;){var g=s[f];if(!(a?g in t:kK.call(t,g)))return!1}var p=i.get(e),m=i.get(t);if(p&&m)return p==t&&m==e;var h=!0;i.set(e,t),i.set(t,e);for(var x=a;++f<c;){g=s[f];var v=e[g],y=t[g];if(n)var C=a?n(y,v,g,t,e,i):n(v,y,g,e,t,i);if(!(C===void 0?v===y||o(v,y,r,n,i):C)){h=!1;break}x||(x=g=="constructor")}if(h&&!x){var T=e.constructor,N=t.constructor;T!=N&&"constructor"in e&&"constructor"in t&&!(typeof T=="function"&&T instanceof T&&typeof N=="function"&&N instanceof N)&&(h=!1)}return i.delete(e),i.delete(t),h}var AK=MK,bf=_m,DK=N3,RK=EK,LK=AK,zx=Yu,Hx=zr,Ux=Em,FK=Xw,_K=1,Vx="[object Arguments]",Wx="[object Array]",Al="[object Object]",BK=Object.prototype,qx=BK.hasOwnProperty;function zK(e,t,r,n,o,i){var a=Hx(e),s=Hx(t),c=a?Wx:zx(e),u=s?Wx:zx(t);c=c==Vx?Al:c,u=u==Vx?Al:u;var d=c==Al,f=u==Al,g=c==u;if(g&&Ux(e)){if(!Ux(t))return!1;a=!0,d=!1}if(g&&!d)return i||(i=new bf),a||FK(e)?DK(e,t,r,n,o,i):RK(e,t,c,r,n,o,i);if(!(r&_K)){var p=d&&qx.call(e,"__wrapped__"),m=f&&qx.call(t,"__wrapped__");if(p||m){var h=p?e.value():e,x=m?t.value():t;return i||(i=new bf),o(h,x,r,n,i)}}return g?(i||(i=new bf),LK(e,t,r,n,o,i)):!1}var HK=zK,UK=HK,Gx=Yo;function k3(e,t,r,n,o){return e===t?!0:e==null||t==null||!Gx(e)&&!Gx(t)?e!==e&&t!==t:UK(e,t,r,n,k3,o)}var hh=k3,VK=hh;function WK(e,t){return VK(e,t)}var qK=WK;const GK=ht(qK),KK=(e,t,r,n,o)=>{if(t===!0){const a=[];e.forEach(function(s,c){if(+s>+n[c])return a.push(o[c]),E.setState({sortCompleted:!1}),E.setState({overloadedColumn:o[c]}),E.setState({hasOverloadedColumn:!0}),E.setState({isSortingCards:!0}),null}),a.length===0&&(E.setState({hasOverloadedColumn:!1}),E.setState({isSortingCards:!1}))}const i=e.reduce(function(a,s){return a+s});E.setState({numSortedStatements:i}),t===!1&&(i===r?(E.setState({sortCompleted:!0}),E.setState({isSortingCards:!1})):(E.setState({sortCompleted:!1}),E.setState({isSortingCards:!0})))},M3=(e,t,r,n,o,i,a,s,c)=>{const{qSortPattern:u,qSortHeaders:d,forcedSorts:f}=a,g=[...t],[p]=e.splice(r.index,1);t.splice(n.index,0,p),e[r.droppableId]=[p],t[n.droppableId]=[...g];const m={};m[r.droppableId]=[...e],m[n.droppableId]=[...t],E.setState({result:m});const h=[];for(let C=0;C<d.length;C++){const T=o.vCols[`column${d[C]}`];h.push(T.length)}const x=[...u].map(C=>+C),v=[...h],y=GK(h,x);return KK(v,f,i,u,c),s===!1?y===!0?(E.setState({hasOverloadedColumn:!1}),E.setState({sortCompleted:!0}),console.log("sorting complete"),E.setState({isSortingCards:!1}),E.setState({isSortingFinished:!0})):(E.setState({hasOverloadedColumn:!0}),E.setState({sortCompleted:!1}),E.setState({isSortingCards:!0}),o.statementList.length===0?E.setState({isSortingFinished:!0}):E.setState({isSortingFinished:!1})):e.length===0?(E.setState({hasOverloadedColumn:!1}),E.setState({sortCompleted:!0}),console.log("sorting complete"),E.setState({isSortingCards:!1}),E.setState({isSortingFinished:!0})):(E.setState({sortCompleted:!1}),E.setState({isSortingCards:!0}),E.setState({hasOverloadedColumn:!1}),E.setState({isSortingFinished:!1})),null},A3=(e,t,r,n)=>{try{if(e==="statements")return n;const i=[...n.vCols[e]],[a]=i.splice(t,1);return i.splice(r,0,a),n.vCols[e]=[...i],{...n}}catch(o){console.error(o)}},JK=(e,t,r,n,o,i,a,s,c,u)=>({userSelect:"none",padding:"5px",margin:"1px",lineHeight:"1.3em",fontSize:o,color:u,height:n,width:r,display:"flex",justifyContent:"center",alignItems:"center",borderBottom:"1.5px solid darkgray",filter:e?"brightness(0.85)":"brightness(1.00)",zIndex:"-1",textAlign:"center",background:e?"#ffffff":"transparent",...t}),QK=(e,t,r,n,o)=>{let i;return r===!0?i=t.columnStatementsArray.length<=t.maxCards:i=!0,e&&E.setState({draggingOverColumnId:t.columnId}),{background:e?"lightblue":i?o:"#F4BB44",maxWidth:n,marginTop:0,marginRight:0,marginBottom:0,paddingBottom:0,minHeight:t.minHeight-12,borderRadius:"2px",borderTop:"0px solid lightgray",borderRight:i?"1px solid lightgray":"3px dashed black",borderLeft:i?"1px solid lightgray":"3px dashed black",borderBottom:i?"1px solid whitesmoke":"3px dashed black"}},ZK=e=>{const{forcedSorts:t,columnWidth:r,cardHeight:n,columnId:o,sortValue:i,columnStatementsArray:a,columnColor:s,cardFontSize:c,greenCardColor:u,yellowCardColor:d,pinkCardColor:f,fontColor:g}=e;return l.jsx(XK,{id:"sortColumnsDiv",children:l.jsx(la,{id:"ColDroppable",droppableId:o,direction:"vertical",children:(p,m)=>(m.isDraggingOver&&(E.setState({draggingOverColumnId:o}),E.setState({currentSortValue:i})),l.jsxs(eJ,{id:"DroppableColDiv",ref:p.innerRef,style:QK(m.isDraggingOver,e,t,r,s),children:[a.map((h,x)=>{const v=A(`<div>${D(h.statement)}</div>`);return l.jsx(Qs,{draggableId:h.id,cardColor:h.cardColor,index:x,children:(y,C)=>l.jsx(tJ,{id:"StatementDiv",ref:y.innerRef,...y.draggableProps,...y.dragHandleProps,style:JK(C.isDragging,y.draggableProps.style,r,n,c,`${h.cardColor}`,u,d,f,g),children:v})},h.id)}),p.placeholder]}))})})},YK=ae.memo(ZK),XK=S.div`
  display: flex;
  flex-direction: column;
`,eJ=S.div`
  justify-items: center;
`,tJ=S.div`
  display: flex;
  width: 96%;
  margin-left: 2%;
  margin-bottom: 5px !important;
  height: ${e=>`${e.cardHeight}px`};
  font-size: calc(${e=>e.fontSize}px + 1.3vw);
  justify-content: center;
`,rJ=(e,t,r,n,o)=>{try{let i=!0,a=!1;if(e.destination!==null){const s=/column/gi,c=/N/gi;let u=e.destination.droppableId;u=u.replace(s,""),u=u.replace(c,"-");const d=parseInt(u,10);o[e.draggableId]=d,Object.keys(o).length;const g={};return g.isSortingFinished=i,g.results=r,g.sortFinishedModalHasBeenShown=n,g.triggerSortingFinishedModal=a,g.sortGridResults=o,g}}catch(i){console.error(i),console.log("there was an error in calculateDragResults")}},nJ=e=>e.configObj,oJ=e=>e.mapObj,iJ=e=>e.statementsObj,aJ=e=>e.setIsSortingCards,sJ=e=>e.setSortCompleted,lJ=e=>e.setProgressScoreAdditionalSort,cJ=e=>e.results,uJ=e=>e.sortFinishedModalHasBeenShown,dJ=e=>e.sortGridResults,fJ=e=>e.setIsSortingFinished,gJ=e=>e.setResults,pJ=e=>e.setTriggerSortingFinishedModal,mJ=e=>e.setSortGridResults,hJ=e=>{const t=X(nJ),r=X(oJ),n=X(iJ),o=E(aJ),i=E(sJ),a=E(lJ),s=E(cJ),c=E(uJ),u=E(dJ),d=E(fJ),f=E(gJ),g=E(pJ),p=E(mJ),m=t.greenCardColor,h=t.yellowCardColor,x=t.pinkCardColor,v=[...r.qSortHeaders],y=[...r.qSortHeaderNumbers],C=[...r.columnColorsArray],T=[...r.columnHeadersColorsArray],N=[...r.qSortPattern],j=e.cardHeight;let I=JSON.parse(localStorage.getItem("columnStatements"));I===null&&(I=[]);const[$,w]=Ee("sortColumns",I),U=+n.totalStatements,L={};L.qSortPattern=[...r.qSortPattern],L.qSortHeaders=[...r.qSortHeaders],L.forcedSorts=t.warnOverloadedColumn,L.qSortHeaderNumbers=[...r.qSortHeaderNumbers];const q=L,K=t.allowUnforcedSorts,B=_=>{try{const z=rJ({..._},U,s,c,u);d(z.sortFinished),f(z.results),p(z.sortGridResults);const{source:V,destination:Q}=_;if(!Q)return;if(V.droppableId===Q.droppableId){let H=A3(V.droppableId,V.index,Q.index,$);w(H)}else{let H,G;V.droppableId==="statements"?H=$.statementList:H=$.vCols[V.droppableId],Q.droppableId==="statements"?G=$.statementList:G=$.vCols[Q.droppableId],M3(H,G,V,Q,$,U,q,K,y),w($);const R=localStorage.getItem("hasShownSortFinModal");$.statementList.length===0?(o(!1),i(!0),R==="false"&&(localStorage.setItem("hasShownSortFinModal",!0),g(!0))):(localStorage.setItem("hasShownSortFinModal",!1),o(!0),i(!1));const O=n.totalStatements,b=$.statementList.length,ee=((O-b)/O*30).toFixed();a(ee)}}catch(z){console.log(z.message)}},J=e.cardFontSize,Y=e.fontColor,k=v.map((_,z)=>{const V=`column${v[z]}`,Q=y[z],H=C[z];return l.jsx(YK,{minHeight:N[z]*(+j+8),maxCards:N[z],columnId:V,columnStatementsArray:$.vCols[V],forcedSorts:t.warnOverloadedColumn,columnWidth:e.columnWidth,cardHeight:+j,sortValue:Q,columnColor:H,cardFontSize:J,qSortHeaderNumber:y[z],columnHeadersColor:T[z],greenCardColor:m,yellowCardColor:h,pinkCardColor:x,fontColor:Y},V)});return l.jsx(ld,{onDragEnd:B,children:l.jsx("div",{className:"rootDiv",children:k})})},vJ=(e,t,r,n,o,i,a,s,c,u)=>{let d;return i==="greenSortCard"&&(d=a),i==="yellowSortCard"&&(d=s),i==="pinkSortCard"&&(d=c),{userSelect:"none",lineHeight:"1.3em",fontSize:o,maxHeight:n,color:u,borderRadius:"5px",filter:e?"brightness(0.85)":"brightness(1.00)",zIndex:"-1",textAlign:"center",background:e?d:"whitesmoke",...t}},xJ=(e,t,r,n,o,i)=>{let a;return r===!0?a=t.columnStatementsArray.length<=t.maxCards:a=!0,e&&E.setState({draggingOverColumnId:t.columnId}),{background:e?"lightblue":a?o:"orange",padding:"5px 0px 0px 0px",justifyContent:"center",width:n+13,marginTop:0,marginRight:0,minHeight:t.minHeight-10,borderRadius:"2px",outline:a?"1px solid #d8d8d8":"2px dashed black",outlineOffset:"-1px"}},yJ=e=>{const{forcedSorts:t,columnWidth:r,cardHeight:n,columnId:o,sortValue:i,columnStatementsArray:a,columnColor:s,cardFontSize:c,greenCardColor:u,yellowCardColor:d,pinkCardColor:f,fontColor:g,handleOpenImageModal:p}=e;return l.jsx(SJ,{id:"sortColumnsDiv",children:l.jsx(la,{id:"ColDroppable",droppableId:o,direction:"vertical",children:(m,h)=>(h.isDraggingOver&&(E.setState({draggingOverColumnId:o}),E.setState({currentSortValue:i})),l.jsxs(CJ,{id:"DroppableColDiv",ref:m.innerRef,style:xJ(h.isDraggingOver,e,t,r,s),children:[a.map((x,v)=>l.jsx(Qs,{draggableId:x.id,cardColor:x.cardColor,index:v,children:(y,C)=>l.jsx(wJ,{id:"imageDiv",ref:y.innerRef,...y.draggableProps,...y.dragHandleProps,onClick:T=>p(T,x.element.props.src),style:vJ(C.isDragging,y.draggableProps.style,r,n,c,`${x.cardColor}`,u,d,f,g),children:l.jsx("img",{src:x.element.props.src,alt:x.element.props.alt,style:{border:"1px solid black"}})})},x.id)),m.placeholder]}))})})},bJ=ae.memo(yJ),SJ=S.div`
  display: flex;
  flex-direction: column;
`,CJ=S.div`
  justify-items: center;
`,wJ=S.div`
  display: flex;
  width: 96%;
  margin-left: 2%;
  margin-bottom: 5px !important;
  height: ${e=>`${e.cardHeight}px`};
  justify-content: center;

  img {
    max-width: 96%;
    max-height: 96%;
    object-fit: contain;
  }
`,jJ=(e,t,r)=>({background:e?"lightblue":"#e4e4e4",display:"flex",flexDirection:"row",flexWrap:"nowrap",width:"100vw",paddingRight:"20px",minHeight:t,overflowX:"scroll",direction:r,scrollBehavior:"smooth"}),TJ=(e,t,r,n,o,i,a,s,c,u,d)=>{let f=r,g=n;return isNaN(+f)&&(f=999),(g==="undefined"||g==="yellowSortCard")&&(g=c),g==="pinkSortCard"&&(g=u),g==="greenSortCard"&&(g=s),{userSelect:"none",WebkitUserSelect:"none",lineHeight:"1.3em",fontSize:a,color:d,height:i,minWidth:o,maxWidth:o,paddingRight:2,paddingLeft:2,borderRadius:"5px",touchAction:"manipulation",marginBottom:5,marginTop:5,marginRight:"2px",marginLeft:"2px",display:"flex",alignItems:"center",textAlign:"center",order:f,filter:e?"brightness(0.85)":"brightness(1.00)",background:g,...t}},OJ=(e,t,r,n,o)=>{try{let i=!1,a=!1;if(e.destination!==null){const s=/column/gi,c=/N/gi;let u=e.destination.droppableId;u=u.replace(s,""),u=u.replace(c,"-");const d=parseInt(u,10);o[e.draggableId]=d;const f=Object.keys(o);let g=!1;if(f.length===t){let m="";for(let h=0;h<t;h++){let x=`image${h+1}`,v=o[x];isNaN(v)&&(g=!0),m+=`${v}|`}g===!0?i=!1:(i=!0,m.charAt(m.length-1)==="|"&&(m=m.substring(0,m.length-1)),r.sort=m,localStorage.setItem("resultsSort",JSON.stringify(m)),n===!1&&(n=!0,a=!0))}const p={};return p.isSortingFinished=i,p.results=r,p.sortFinishedModalHasBeenShown=n,p.triggerSortingFinishedModal=a,p.sortGridResults=o,p}}catch(i){console.error(i),console.log("there was an error in calculateDragResults")}},IJ=e=>e.configObj,PJ=e=>e.mapObj,EJ=e=>e.setIsSortingCards,$J=e=>e.setSortCompleted,NJ=e=>e.setProgressScoreAdditionalSort,kJ=e=>e.results,MJ=e=>e.sortFinishedModalHasBeenShown,AJ=e=>e.sortGridResults,DJ=e=>e.setIsSortingFinished,RJ=e=>e.setResults,LJ=e=>e.setTriggerSortingFinishedModal,FJ=e=>e.setSortGridResults,_J=e=>{const t=X(IJ),r=X(PJ),n=E(EJ),o=E($J),i=E(NJ),a=E(kJ),s=E(MJ),c=E(AJ),u=E(DJ),d=E(RJ),f=E(LJ),g=E(FJ),p=t.greenCardColor,m=t.yellowCardColor,h=t.pinkCardColor,x=[...r.qSortHeaders],v=[...r.qSortHeaderNumbers],y=[...r.columnColorsArray],C=[...r.columnHeadersColorsArray],T=[...r.qSortPattern];let N=JSON.parse(localStorage.getItem("columnStatements"));N===null&&(N=[]);const[j,I]=P.useState(!1),[$,w]=P.useState(""),[U,L]=P.useState([]),[q,K]=P.useState(!1),[B,J]=Ee("sortColumns",N);let Y=e.columnWidth;const k=+t.numImages,_={};_.qSortPattern=[...r.qSortPattern],_.qSortHeaders=[...r.qSortHeaders],_.forcedSorts=t.warnOverloadedColumn,_.qSortHeaderNumbers=[...r.qSortHeaderNumbers];const z=_,V=t.allowUnforcedSorts;let Q="rtl";t.sortDirection==="negative"&&(Q="ltr");const H=(M,ee)=>{M.detail===2&&(M.shiftKey?(U.push(M.target.src),L(U),U.length===2&&K(!0)):(w(M.target.src),I(!0)))},G=M=>{try{const ee=OJ({...M},k,a,s,c);u(ee.sortFinished),d(ee.results),g(ee.sortGridResults);const{source:ie,destination:de}=M;if(!de)return;if(ie.droppableId===de.droppableId){let ce=A3(ie.droppableId,ie.index,de.index,B);J(ce)}else{let ce,fe;ie.droppableId==="statements"?ce=B.imagesList:ce=B.vCols[ie.droppableId],de.droppableId==="statements"?fe=B.imagesList:fe=B.vCols[de.droppableId],M3(ce,fe,ie,de,B,k,z,V,v),J(B);const pe=localStorage.getItem("hasShownSortFinModal");B.imagesList.length===0?(n(!1),o(!0),pe==="false"&&(localStorage.setItem("hasShownSortFinModal",!0),f(!0))):(localStorage.setItem("hasShownSortFinModal",!1),n(!0),o(!1));const me=t.numImages,ye=B.imagesList.length,je=((me-ye)/me*30).toFixed();i(je)}}catch(ee){console.log(ee.message)}},Z=e.cardFontSize,W=e.fontColor;let R=50;const O=B.imagesList,b=x.map((M,ee,ie)=>{const de=`column${x[ee]}`,ce=v[ee],fe=y[ee];return l.jsx(bJ,{minHeight:T[ee]*(+e.cardHeight+8),maxCards:T[ee],columnId:de,columnStatementsArray:B.vCols[de],forcedSorts:t.warnOverloadedColumn,columnWidth:e.columnWidth,cardHeight:+e.cardHeight,sortValue:ce,columnColor:fe,cardFontSize:Z,qSortHeaderNumber:v[ee],columnHeadersColor:C[ee],greenCardColor:p,yellowCardColor:m,pinkCardColor:h,fontColor:W,handleOpenImageModal:H},de)}),F=ae.memo(M=>M.statements.map((ie,de)=>l.jsx(Qs,{draggableId:ie.id,index:de,sortValue:ie.sortValue,cardColor:ie.cardColor,className:"droppableCards",children:(ce,fe)=>l.jsxs(l.Fragment,{children:[l.jsx(UJ,{ref:ce.innerRef,className:`${ie.cardColor}`,...ce.draggableProps,...ce.dragHandleProps,onClick:Se=>H(Se,ie.element.props.src),style:TJ(fe.isDragging,ce.draggableProps.style,`${ie.sortValue}`,`${ie.cardColor}`,Y,M.cardHeight,Z,p,m,h,W),children:l.jsx("img",{src:ie.element.props.src,alt:ie.element.props.alt})}),ce.placeholder]})},ie.id)));return l.jsxs(l.Fragment,{children:[l.jsx(_e,{open:j,center:!0,onClose:()=>I(!1),classNames:{modal:`${t.imageFormat}`,overlay:"dualImageOverlay"},children:l.jsx("img",{src:$,width:"100%",height:"auto",alt:"modalImage"})}),l.jsxs(_e,{open:q,center:!0,onClose:()=>{K(!1),L([])},classNames:{overlay:"dualImageOverlay",modal:"dualImageModal"},children:[l.jsx("img",{src:U[0],width:"49.5%",height:"auto",alt:"modalImage"}),l.jsx("img",{src:U[1],width:"49.5%",height:"auto",style:{marginLeft:"1%"},alt:"modalImage2"})]}),l.jsx(ld,{onDragEnd:G,children:l.jsxs("div",{className:"rootDiv",children:[b,l.jsx(BJ,{id:"SortFooterDiv",children:l.jsx(zJ,{id:"CardSlider",children:l.jsx(la,{id:"Droppable",droppableId:"statements",direction:"horizontal",style:{maxWidth:"100vw"},children:(M,ee)=>l.jsxs(HJ,{id:"HorizontalFeederDiv",ref:M.innerRef,style:jJ(ee.isDraggingOver,R,Q),children:[l.jsx(F,{statements:O,cardHeight:e.cardHeight,provided:M}),l.jsxs("span",{style:{display:"none"},children:[" ",M.placeholder]})]})})})})]})})]})},BJ=S.div`
  background: #e4e4e4;
  padding-right: 10px;
  position: fixed;
  left: 0px;
  bottom: 50px;
  width: 100vw;
  height: ${e=>`${+e.cardHeight+20}px;`};
`,zJ=S.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
`,HJ=S.div``,UJ=S.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,VJ=e=>e.langObj,WJ=e=>e.triggerSortModal,qJ=e=>e.setTriggerSortModal,GJ=()=>{const e=X(VJ),t=E(WJ),r=E(qJ),n=A(D(e.sortHelpModalHead)),o=A(D(e.sortHelpModalText)),i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(KJ,{children:n}),l.jsx("hr",{}),l.jsx(JJ,{children:o})]})},KJ=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,JJ=S.div`
  margin-top: 15px;
`,QJ=e=>e.langObj,ZJ=e=>e.triggerSortingFinishedModal,YJ=e=>e.setTriggerSortingFinishedModal,XJ=()=>{const e=X(QJ),t=E(ZJ),r=E(YJ),n=A(D(e.sortingCompleteModalHead))||"",o=A(D(e.sortingCompleteModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(eQ,{children:n}),l.jsx("hr",{}),l.jsx(tQ,{children:o})]})},eQ=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,tQ=S.div`
  margin-top: 15px;
`,rQ=e=>e.langObj,nQ=e=>e.triggerSortPreventNavModal,oQ=e=>e.setTriggerSortPreventNavModal,iQ=()=>{const e=X(rQ),t=E(nQ),r=E(oQ),n=A(D(e.sortPreventNavModalHead))||"",o=A(D(e.sortPreventNavModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(aQ,{children:n}),l.jsx("hr",{}),l.jsx(sQ,{children:o})]})},aQ=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,sQ=S.div`
  margin-top: 15px;
`,lQ=e=>e.langObj,cQ=e=>e.triggerSortOverloadedColumnModal,uQ=e=>e.setTriggerSortOverloadedColumnModal,dQ=()=>{const e=X(lQ),t=E(cQ),r=E(uQ),n=A(D(e.sortOverloadedColumnModalHead))||"",o=A(D(e.sortOverloadedColumnModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(fQ,{children:n}),l.jsx("hr",{}),l.jsx(gQ,{children:o})]})},fQ=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,gQ=S.div`
  margin-top: 15px;
`,pQ=e=>e.mapObj,mQ=e=>{const t=X(pQ),r=[l.jsx(go,{},te()),l.jsx(cd,{},te()),l.jsx(Rr,{},te()),l.jsx(kr,{},te()),l.jsx(Kr,{},te()),l.jsx(Zr,{},te()),l.jsx(Jr,{},te()),l.jsx(Mr,{},te()),l.jsx(en,{},te()),l.jsx(ud,{},te()),l.jsx(Ln,{},te())],n=[l.jsx(go,{},te()),l.jsx(Rr,{},te()),l.jsx(kr,{},te()),l.jsx(Kr,{},te()),l.jsx(Zr,{},te()),l.jsx(Jr,{},te()),l.jsx(Mr,{},te()),l.jsx(en,{},te()),l.jsx(Ln,{},te())],o=[l.jsx(Rr,{},te()),l.jsx(kr,{},te()),l.jsx(Kr,{},te()),l.jsx(Zr,{},te()),l.jsx(Jr,{},te()),l.jsx(Mr,{},te()),l.jsx(en,{},te())],i=[l.jsx(kr,{},te()),l.jsx(Kr,{},te()),l.jsx(Zr,{},te()),l.jsx(Jr,{},te()),l.jsx(Mr,{},te())];let a=[];t.emojiArrayType&&(t.emojiArrayType[0]==="emoji5Array"&&(a=[...r]),t.emojiArrayType[0]==="emoji4Array"&&(a=[...n]),t.emojiArrayType[0]==="emoji3Array"&&(a=[...o]),t.emojiArrayType[0]==="emoji2Array"&&(a=[...i]));const s=[...t.qSortHeaderNumbers],c=[...t.columnHeadersColorsArray];let u=+e.columnWidth;const d=[...t.colTextLabelsArray];let f,g=t.useColLabelNums[0];(g!==void 0||g!==null)&&(g===!1||g==="false"?f=!1:f=!0);let p,m=t.useColLabelText[0];(m!==void 0||m!==null)&&(m===!1||m==="false"?p=!1:p=!0);let h,x=t.useColLabelEmoji[0];return(x!==void 0||x!==null)&&(x===!1||x==="false"?h=!1:h=!0),l.jsx(hQ,{id:"colorBarDivContainer",children:s.map((v,y)=>l.jsx(vQ,{width:u,color:c[y],count:c.length,children:l.jsxs(xQ,{children:[h&&l.jsx(Kx,{children:a[y]}),l.jsxs(SQ,{children:[f&&l.jsx(yQ,{children:v}),p&&l.jsx(bQ,{children:d[y]})]}),h&&l.jsx(Kx,{children:a[y]})]})},te()))})},hQ=S.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  /* background-color: #d8d8d8; */
  margin-bottom: 0px;
  /* border-right: 1px solid whitesmoke;
  border-left: 1px solid whitesmoke; */
  height: 28px;
`,vQ=S.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* gap: 6px; */
  padding-right: 4px;
  padding-left: 4px;
  background-color: ${e=>e.color};
  width: ${e=>+e.width}px;
  /* width: calc(99.1vw / ${e=>e.count}); */
  border-right: 1px solid lightgray;
  border-left: 1px solid lightgray;
  height: 50px;
  border-bottom: 1.5px solid black;
`,xQ=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;
  padding-right: 2px;
  padding-left: 2px;
  /* height: 100%; */
`,yQ=S.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
`,Kx=S.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* svg {
    width: 100%;
    height: 100%;
  } */
`,bQ=S.div`
  display: flex;
  padding-top: 2px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: 0.75vw;
  text-align: center;
  line-height: 0.95rem;
`,SQ=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* outline: 1px solid blue; */
  width: 96%;
  /* max-width: 80%; */
`;function CQ(e,t){let r;return()=>{clearTimeout(r),r=setTimeout(()=>{r=null,e.apply(this,arguments)},t)}}const wQ=e=>e.langObj,jQ=e=>e.configObj,TQ=e=>e.mapObj,OQ=e=>e.cardFontSizeSort,IQ=e=>e.topMargin,PQ=e=>e.setPresortNoReturn,EQ=e=>e.setCurrentPage,$Q=e=>e.setTopMargin,NQ=e=>e.setDisplayNextButton;let kQ=e=>e.cardHeightSort;const Jx=()=>{const e=X(wQ),t=X(TQ),r=X(jQ),n=r.useImages;let o=E(OQ);const i=E(IQ),a=E(PQ),s=E(EQ),c=E($Q),u=E(NQ),d=[...t.qSortPattern];let f=E(kQ);const g=+localStorage.getItem("cardHeightSort"),p=+localStorage.getItem("fontSizeSort");g&&(f=g),p&&(o=p);const[m,h]=P.useState({height:window.innerHeight,width:document.body.clientWidth}),[x,v]=P.useState(150);u(!0);const y=r.headerBarColor,C=r.defaultFontColor,T=A(D(e.sortDisagreement))||"",N=A(D(e.sortAgreement))||"",j=A(D(e.condOfInst))||"",I=d.length,$=P.useMemo(()=>{if(I>12)return 170;if(I>10)return 145;if(I>8)return 120;if(I>6)return 96;if(I>0)return 70},[I]);P.useEffect(()=>{const U=m.width/d.length;v(U);const L=CQ(function(){h({height:window.innerHeight,width:document.body.clientWidth})},200);return window.addEventListener("resize",L),()=>{window.removeEventListener("resize",L)}},[m,d.length,$]),P.useEffect(()=>{const U=+JSON.parse(localStorage.getItem("sortGridMarginTop"));let L=document.getElementById("sortTitleBarContainer").clientHeight+20;L=+JSON.stringify(L),setTimeout(()=>{U!==L?(c(L),localStorage.setItem("sortGridMarginTop",JSON.stringify(L))):c(+U)},50)});const w=P.useRef(null);return P.useEffect(()=>(w.current=Date.now(),(async()=>{await a(!0),await s("sort"),localStorage.setItem("currentPage","sort")})(),()=>{jr(w.current,"sortPage","sortPage")}),[a,s]),l.jsxs(ae.Fragment,{children:[l.jsx(Fn,{}),l.jsx(GJ,{}),l.jsx(iQ,{}),l.jsx(XJ,{}),l.jsx(dQ,{}),l.jsxs(MQ,{id:"sortTitleBarContainer",children:[l.jsxs(AQ,{id:"sortTitleBar",background:y,children:[l.jsx(LQ,{children:T}),l.jsx(DQ,{fontSize:r.condOfInstFontSize,children:j}),l.jsx(RQ,{children:N})]}),l.jsx(mQ,{columnWidth:x})]}),l.jsxs(FQ,{marginTop:i,children:[n?l.jsx(_J,{id:"sortGridImages",dimensions:m,cardFontSize:o,fontColor:C,columnWidth:x,cardHeight:f}):l.jsx(hJ,{id:"sortGridDiv",dimensions:m,cardFontSize:o,fontColor:C,columnWidth:x,cardHeight:f}),";"]})]})},MQ=S.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: fixed;
  top: 0;

  z-index: 999;
`,AQ=S.div`
  width: 100vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-bottom: 5px;
  display: inline-grid;
  grid-template-columns: 15% 1fr 15%;
  color: black;
  font-weight: bold;
  background-color: ${e=>e.background};
`,DQ=S.div`
  color: white;
  max-width: 80vw;
  font-size: ${e=>`${e.fontSize}px`};
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  align-self: end;
`,RQ=S.div`
  font-size: 22px;
  align-self: end;
  justify-self: end;
  color: white;
  padding-bottom: 5px;
  margin-right: 20px;
`,LQ=S.div`
  font-size: 22px;
  align-self: end;
  justify-self: start;
  color: white;
  padding-bottom: 5px;
`,FQ=S.div`
  margin-top: ${e=>`${e.marginTop}px`};
  margin-bottom: 250px;
  /* background-color: #83cafe; */
`,_Q=(e,t,r)=>{const n={},o=t.qSortPattern,i=t.qSortHeaders,a=+o[o.length-1],s=+i[i.length-1],c=+o[o.length-2],u=+i[i.length-2],d=+o[0],f=i[0],g=+o[1],p=i[1];let m=JSON.parse(localStorage.getItem("noResponseCheckArrayHC1"))||[],h=JSON.parse(localStorage.getItem("noResponseCheckArrayHC2"))||[],x=JSON.parse(localStorage.getItem("noResponseCheckArrayLC1"))||[],y=[...JSON.parse(localStorage.getItem("noResponseCheckArrayLC2"))||[],...x,...h,...m],C={};y.forEach(I=>{let $=I.split(":"),w=$[0].trim(),U=$[1].trim();C[w]=U});const T=a;for(let I=0;I<T;I++){let $=`column${s}_${I}`;Object.prototype.hasOwnProperty.call(e,$)||(e[$]=`(${C[$]}): no response`)}if(r.showSecondPosColumn===!0){const I=c;for(let $=0;$<I;$++){let w=`column${u}_${$}`;Object.prototype.hasOwnProperty.call(e,w)||(e[w]=`(${C[w]}): no response`)}}if(r.showSecondNegColumn===!0){const I=g;for(let $=0;$<I;$++){let w=`column${p}_${$}`;Object.prototype.hasOwnProperty.call(e,w)||(e[w]=`(${C[w]}): no response`)}}const N=d;for(let I=0;I<N;I++){let $=`column${f}_${I}`;Object.prototype.hasOwnProperty.call(e,$)||(e[$]=`(${C[$]}): no response`)}let j=Object.keys(e);j.sort();for(let I=0;I<j.length;I++)n[j[I]]=e[j[I]];return n},BQ=e=>e.langObj,zQ=e=>e.triggerTransmissionOKModal,HQ=e=>e.setTriggerTransmissionOKModal,UQ=e=>e.setDisplayGoodbyeMessage,vh=()=>{const e=X(BQ),t=E(zQ),r=E(HQ),n=E(UQ),o=A(D(e.transferOkModalHeader))||"",i=A(D(e.transferOkModalText))||"",a=()=>{r(!1),n(!0)};return l.jsxs(_e,{className:"customModal",open:t,onClose:a,center:!0,children:[l.jsx(VQ,{children:o}),l.jsx("hr",{}),l.jsx(WQ,{children:i})]})},VQ=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;
  text-align: center;
  margin-top: 25px;

  hr {
    color: black;
  }
`,WQ=S.div`
  margin-top: 15px;
  text-align: center;
`,qQ=e=>e.langObj,GQ=e=>e.triggerTransmissionFailModal,KQ=e=>e.setTriggerTransmissionFailModal,xh=()=>{const e=X(qQ),t=E(GQ),r=E(KQ),n=A(D(e.transferFailModalHeader))||"",o=A(D(e.transferFailModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(JQ,{children:n}),l.jsx("hr",{}),l.jsx(QQ,{children:o})]})},JQ=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,QQ=S.div`
  margin-top: 15px;
`,ZQ=e=>e.setLocalStoredQsorts,YQ=e=>e.localStoredQsorts,XQ=e=>e.setHasDownloadedQsorts,eZ=e=>e.setTriggerLocalSubmitSuccessModal,tZ=e=>e.surveyQuestionObjArray,rZ=e=>e.langObj,nZ=e=>{console.log("props.results",e.results);const t=X(rZ),r=io(ZQ);let n=io(YQ);const o=io(XQ),i=E(eZ),a=X(tZ);console.log("surveyQuestionObjArray",a);const s=A(D(t.localSaveDataButton))||"",c=u=>{u.preventDefault(),u.target.disabled=!0;try{let d=localStorage.getItem("localParticipantName"),f=localStorage.getItem("localUsercode");const g=JSON.parse(JSON.stringify(e.results));g.partId=d,g.usercode=f;const m=te().substring(0,8);n[m]=g,r(n),localStorage.removeItem("cumulativelandingPageDuration"),localStorage.removeItem("cumulativepresortPageDuration"),localStorage.removeItem("cumulativesortPageDuration"),localStorage.removeItem("cumulativepostsortPageDuration"),localStorage.removeItem("cumulativesurveyPageDuration"),localStorage.removeItem("lastAccesslandingPage"),localStorage.removeItem("lastAccesspresortPage"),localStorage.removeItem("lastAccesssortPage"),localStorage.removeItem("lastAccesspostsortPage"),localStorage.removeItem("lastAccesssurveyPage"),localStorage.removeItem("timeOnlandingPage"),localStorage.removeItem("timeOnpresortPage"),localStorage.removeItem("timeOnsortPage"),localStorage.removeItem("timeOnpostsortPage"),localStorage.removeItem("timeOnsurveyPage"),localStorage.removeItem("resultsSurvey"),localStorage.removeItem("resultsSort"),localStorage.removeItem("resultsPresort"),localStorage.removeItem("resultsPostsort"),localStorage.removeItem("HC-requiredCommentsObj"),localStorage.removeItem("HC2-requiredCommentsObj"),localStorage.removeItem("LC-requiredCommentsObj"),localStorage.removeItem("LC2-requiredCommentsObj"),localStorage.removeItem("postsortCommentCardCount"),localStorage.removeItem("allCommentsObj"),localStorage.removeItem("localParticipantName"),localStorage.removeItem("localUsercode"),a.forEach(h=>{localStorage.removeItem(h.id)}),i(!0),o(!1)}catch{u.target.disabled=!1}};return l.jsxs(ae.Fragment,{children:[l.jsx(vh,{}),l.jsx(xh,{}),l.jsx(oZ,{tabindex:"0",onClick:u=>c(u),children:s})]})},oZ=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  justify-self: right;
  margin-right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,iZ=e=>e.langObj,aZ=e=>e.setPresortNoReturn,sZ=e=>e.setColumnStatements,lZ=e=>e.resetColumnStatements,cZ=e=>{const t=X(iZ),r=E(aZ),n=X(sZ),o=X(lZ),i=Wm(o),a=A(D(t.returnToLocalPanelButtonText))||"",{history:s,onClick:c}=e;let u=async function(d){await new Promise((f,g)=>window.location.reload())};return l.jsx(ae.Fragment,{children:l.jsx(dZ,{onClick:d=>{c&&c(d),r(!1),n(i),s.push("/"),u()},children:a})})},uZ=Qi(cZ),dZ=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  justify-self: right;
  margin-right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,fZ=e=>e.langObj,gZ=e=>e.triggerLocalSubmitSuccessModal,pZ=()=>{const e=X(fZ),t=E(gZ),r=A(D(e.localSubmitSuccessModalHeader))||"",n=A(D(e.localSubmitSuccessModalText))||"",o=()=>{};return l.jsxs(_e,{className:"customModal",open:t,onClose:o,center:!0,children:[l.jsx(mZ,{children:r}),l.jsx("hr",{}),l.jsx(hZ,{children:n}),l.jsx(vZ,{children:l.jsx(uZ,{})})]})},mZ=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,hZ=S.div`
  margin-top: 15px;
`,vZ=S.div`
  display: flex;
  justify-content: flex-end;
`,D3=(e,t,r)=>{if(e.length===0||e===void 0)return;let n=Object.keys(e.vCols);const o=[];let i,a,s;if(t!==void 0){let d=t==null?void 0:t.posStateNums,f=t==null?void 0:t.neuStateNums,g=t==null?void 0:t.negStateNums;i=d.split(","),a=f.split(","),s=g.split(","),i=i.filter(p=>p),s=s.filter(p=>p),a=a.filter(p=>p)}for(let d=0;d<n.length;d++){let f=e==null?void 0:e.vCols[n[d]],g,p=n[d];const m=/column/gi,h=/N/gi;p=p.replace(m,""),p=p.replace(h,"-");const x=parseInt(p,10);for(let v=0;v<f.length;v++){let y={},C=f[v].statementNum.toString(),T=parseInt(f[v].statementNum,10);y.statement=T,y.sortValue=x,i.includes(C)&&(g="p"),a.includes(C)&&(g="u"),s.includes(C)&&(g="n"),y.presortVal=g,o.push(y)}}o.sort((d,f)=>d.statement-f.statement);let c="",u="";for(let d=0;d<o.length;d++)c+=`${o[d].sortValue}|`,u+=`${o[d].statement}*${o[d].presortVal}*${o[d].sortValue}|`;return c.charAt(c.length-1)==="|"&&(c=c.substring(0,c.length-1)),u.charAt(u.length-1)==="|"&&(u=u.substring(0,u.length-1)),r===!0||r==="true"?{sort:c,presortTrace:u}:{sort:c}},xZ=e=>{if((e==null?void 0:e.length)===0||e===void 0)return;let t=Object.keys(e.vCols);const r=[];for(let i=0;i<t.length;i++){let a=e==null?void 0:e.vCols[t[i]],s,c=t[i];const u=/column/gi,d=/N/gi;c=c.replace(u,""),c=c.replace(d,"-");const f=parseInt(c,10);for(let g=0;g<a.length;g++){let p={},m=parseInt(a[g].statementNum,10);p.statement=m,p.sortValue=f,a[g].psValue>0&&(s="p"),a[g].psValue===0&&(s="u"),a[g].psValue<0&&(s="n"),p.presortVal=s,r.push(p)}}r.sort((i,a)=>i.statement-a.statement);let n="",o="";for(let i=0;i<r.length;i++)n+=`${r[i].sortValue}|`,o+=`${r[i].statement}*${r[i].presortVal}*${r[i].sortValue}|`;return n.charAt(n.length-1)==="|"&&(n=n.substring(0,n.length-1)),o.charAt(o.length-1)==="|"&&(o=o.substring(0,o.length-1)),{r20:`sort: ${n}`,r21:`presortTrace: ${o}`}},yZ=()=>{try{const e=JSON.parse(localStorage.getItem("resultsPresort")),t={};let r=e==null?void 0:e.npos;isNaN(r)&&(r=0);let n=e==null?void 0:e.nneu;isNaN(n)&&(n=0);let o=e==null?void 0:e.nneg;return isNaN(o)&&(o=0),t.npos=r,t.posStateNums=(e==null?void 0:e.posStateNums)||[],t.nneu=n,t.neuStateNums=(e==null?void 0:e.neuStateNums)||[],t.nneg=o,t.negStateNums=(e==null?void 0:e.negStateNums)||[],t}catch(e){console.log(e);return}};function R3(e,t){return function(){return e.apply(t,arguments)}}const{toString:bZ}=Object.prototype,{getPrototypeOf:yh}=Object,{iterator:dd,toStringTag:L3}=Symbol,fd=(e=>t=>{const r=bZ.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),sn=e=>(e=e.toLowerCase(),t=>fd(t)===e),gd=e=>t=>typeof t===e,{isArray:ca}=Array,Es=gd("undefined");function SZ(e){return e!==null&&!Es(e)&&e.constructor!==null&&!Es(e.constructor)&&lr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const F3=sn("ArrayBuffer");function CZ(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&F3(e.buffer),t}const wZ=gd("string"),lr=gd("function"),_3=gd("number"),pd=e=>e!==null&&typeof e=="object",jZ=e=>e===!0||e===!1,oc=e=>{if(fd(e)!=="object")return!1;const t=yh(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(L3 in e)&&!(dd in e)},TZ=sn("Date"),OZ=sn("File"),IZ=sn("Blob"),PZ=sn("FileList"),EZ=e=>pd(e)&&lr(e.pipe),$Z=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||lr(e.append)&&((t=fd(e))==="formdata"||t==="object"&&lr(e.toString)&&e.toString()==="[object FormData]"))},NZ=sn("URLSearchParams"),[kZ,MZ,AZ,DZ]=["ReadableStream","Request","Response","Headers"].map(sn),RZ=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Zs(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),ca(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const i=r?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(n=0;n<a;n++)s=i[n],t.call(null,e[s],s,e)}}function B3(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const Ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,z3=e=>!Es(e)&&e!==Ao;function zg(){const{caseless:e}=z3(this)&&this||{},t={},r=(n,o)=>{const i=e&&B3(t,o)||o;oc(t[i])&&oc(n)?t[i]=zg(t[i],n):oc(n)?t[i]=zg({},n):ca(n)?t[i]=n.slice():t[i]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&Zs(arguments[n],r);return t}const LZ=(e,t,r,{allOwnKeys:n}={})=>(Zs(t,(o,i)=>{r&&lr(o)?e[i]=R3(o,r):e[i]=o},{allOwnKeys:n}),e),FZ=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),_Z=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},BZ=(e,t,r,n)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!n||n(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=r!==!1&&yh(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},zZ=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},HZ=e=>{if(!e)return null;if(ca(e))return e;let t=e.length;if(!_3(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},UZ=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&yh(Uint8Array)),VZ=(e,t)=>{const n=(e&&e[dd]).call(e);let o;for(;(o=n.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},WZ=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},qZ=sn("HTMLFormElement"),GZ=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),Qx=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),KZ=sn("RegExp"),H3=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Zs(r,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(n[i]=a||o)}),Object.defineProperties(e,n)},JZ=e=>{H3(e,(t,r)=>{if(lr(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(lr(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},QZ=(e,t)=>{const r={},n=o=>{o.forEach(i=>{r[i]=!0})};return ca(e)?n(e):n(String(e).split(t)),r},ZZ=()=>{},YZ=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function XZ(e){return!!(e&&lr(e.append)&&e[L3]==="FormData"&&e[dd])}const eY=e=>{const t=new Array(10),r=(n,o)=>{if(pd(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;const i=ca(n)?[]:{};return Zs(n,(a,s)=>{const c=r(a,o+1);!Es(c)&&(i[s]=c)}),t[o]=void 0,i}}return n};return r(e,0)},tY=sn("AsyncFunction"),rY=e=>e&&(pd(e)||lr(e))&&lr(e.then)&&lr(e.catch),U3=((e,t)=>e?setImmediate:t?((r,n)=>(Ao.addEventListener("message",({source:o,data:i})=>{o===Ao&&i===r&&n.length&&n.shift()()},!1),o=>{n.push(o),Ao.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",lr(Ao.postMessage)),nY=typeof queueMicrotask<"u"?queueMicrotask.bind(Ao):typeof process<"u"&&process.nextTick||U3,oY=e=>e!=null&&lr(e[dd]),oe={isArray:ca,isArrayBuffer:F3,isBuffer:SZ,isFormData:$Z,isArrayBufferView:CZ,isString:wZ,isNumber:_3,isBoolean:jZ,isObject:pd,isPlainObject:oc,isReadableStream:kZ,isRequest:MZ,isResponse:AZ,isHeaders:DZ,isUndefined:Es,isDate:TZ,isFile:OZ,isBlob:IZ,isRegExp:KZ,isFunction:lr,isStream:EZ,isURLSearchParams:NZ,isTypedArray:UZ,isFileList:PZ,forEach:Zs,merge:zg,extend:LZ,trim:RZ,stripBOM:FZ,inherits:_Z,toFlatObject:BZ,kindOf:fd,kindOfTest:sn,endsWith:zZ,toArray:HZ,forEachEntry:VZ,matchAll:WZ,isHTMLForm:qZ,hasOwnProperty:Qx,hasOwnProp:Qx,reduceDescriptors:H3,freezeMethods:JZ,toObjectSet:QZ,toCamelCase:GZ,noop:ZZ,toFiniteNumber:YZ,findKey:B3,global:Ao,isContextDefined:z3,isSpecCompliantForm:XZ,toJSONObject:eY,isAsyncFn:tY,isThenable:rY,setImmediate:U3,asap:nY,isIterable:oY};function $e(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}oe.inherits($e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:oe.toJSONObject(this.config),code:this.code,status:this.status}}});const V3=$e.prototype,W3={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{W3[e]={value:e}});Object.defineProperties($e,W3);Object.defineProperty(V3,"isAxiosError",{value:!0});$e.from=(e,t,r,n,o,i)=>{const a=Object.create(V3);return oe.toFlatObject(e,a,function(c){return c!==Error.prototype},s=>s!=="isAxiosError"),$e.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const iY=null;function Hg(e){return oe.isPlainObject(e)||oe.isArray(e)}function q3(e){return oe.endsWith(e,"[]")?e.slice(0,-2):e}function Zx(e,t,r){return e?e.concat(t).map(function(o,i){return o=q3(o),!r&&i?"["+o+"]":o}).join(r?".":""):t}function aY(e){return oe.isArray(e)&&!e.some(Hg)}const sY=oe.toFlatObject(oe,{},null,function(t){return/^is[A-Z]/.test(t)});function md(e,t,r){if(!oe.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=oe.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,x){return!oe.isUndefined(x[h])});const n=r.metaTokens,o=r.visitor||d,i=r.dots,a=r.indexes,c=(r.Blob||typeof Blob<"u"&&Blob)&&oe.isSpecCompliantForm(t);if(!oe.isFunction(o))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(oe.isDate(m))return m.toISOString();if(!c&&oe.isBlob(m))throw new $e("Blob is not supported. Use a Buffer instead.");return oe.isArrayBuffer(m)||oe.isTypedArray(m)?c&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function d(m,h,x){let v=m;if(m&&!x&&typeof m=="object"){if(oe.endsWith(h,"{}"))h=n?h:h.slice(0,-2),m=JSON.stringify(m);else if(oe.isArray(m)&&aY(m)||(oe.isFileList(m)||oe.endsWith(h,"[]"))&&(v=oe.toArray(m)))return h=q3(h),v.forEach(function(C,T){!(oe.isUndefined(C)||C===null)&&t.append(a===!0?Zx([h],T,i):a===null?h:h+"[]",u(C))}),!1}return Hg(m)?!0:(t.append(Zx(x,h,i),u(m)),!1)}const f=[],g=Object.assign(sY,{defaultVisitor:d,convertValue:u,isVisitable:Hg});function p(m,h){if(!oe.isUndefined(m)){if(f.indexOf(m)!==-1)throw Error("Circular reference detected in "+h.join("."));f.push(m),oe.forEach(m,function(v,y){(!(oe.isUndefined(v)||v===null)&&o.call(t,v,oe.isString(y)?y.trim():y,h,g))===!0&&p(v,h?h.concat(y):[y])}),f.pop()}}if(!oe.isObject(e))throw new TypeError("data must be an object");return p(e),t}function Yx(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function bh(e,t){this._pairs=[],e&&md(e,this,t)}const G3=bh.prototype;G3.append=function(t,r){this._pairs.push([t,r])};G3.toString=function(t){const r=t?function(n){return t.call(this,n,Yx)}:Yx;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function lY(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function K3(e,t,r){if(!t)return e;const n=r&&r.encode||lY;oe.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let i;if(o?i=o(t,r):i=oe.isURLSearchParams(t)?t.toString():new bh(t,r).toString(n),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Xx{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){oe.forEach(this.handlers,function(n){n!==null&&t(n)})}}const J3={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},cY=typeof URLSearchParams<"u"?URLSearchParams:bh,uY=typeof FormData<"u"?FormData:null,dY=typeof Blob<"u"?Blob:null,fY={isBrowser:!0,classes:{URLSearchParams:cY,FormData:uY,Blob:dY},protocols:["http","https","file","blob","url","data"]},Sh=typeof window<"u"&&typeof document<"u",Ug=typeof navigator=="object"&&navigator||void 0,gY=Sh&&(!Ug||["ReactNative","NativeScript","NS"].indexOf(Ug.product)<0),pY=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",mY=Sh&&window.location.href||"http://localhost",hY=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Sh,hasStandardBrowserEnv:gY,hasStandardBrowserWebWorkerEnv:pY,navigator:Ug,origin:mY},Symbol.toStringTag,{value:"Module"})),_t={...hY,...fY};function vY(e,t){return md(e,new _t.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,i){return _t.isNode&&oe.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function xY(e){return oe.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function yY(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}function Q3(e){function t(r,n,o,i){let a=r[i++];if(a==="__proto__")return!0;const s=Number.isFinite(+a),c=i>=r.length;return a=!a&&oe.isArray(o)?o.length:a,c?(oe.hasOwnProp(o,a)?o[a]=[o[a],n]:o[a]=n,!s):((!o[a]||!oe.isObject(o[a]))&&(o[a]=[]),t(r,n,o[a],i)&&oe.isArray(o[a])&&(o[a]=yY(o[a])),!s)}if(oe.isFormData(e)&&oe.isFunction(e.entries)){const r={};return oe.forEachEntry(e,(n,o)=>{t(xY(n),o,r,0)}),r}return null}function bY(e,t,r){if(oe.isString(e))try{return(t||JSON.parse)(e),oe.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(0,JSON.stringify)(e)}const Ys={transitional:J3,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,i=oe.isObject(t);if(i&&oe.isHTMLForm(t)&&(t=new FormData(t)),oe.isFormData(t))return o?JSON.stringify(Q3(t)):t;if(oe.isArrayBuffer(t)||oe.isBuffer(t)||oe.isStream(t)||oe.isFile(t)||oe.isBlob(t)||oe.isReadableStream(t))return t;if(oe.isArrayBufferView(t))return t.buffer;if(oe.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return vY(t,this.formSerializer).toString();if((s=oe.isFileList(t))||n.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return md(s?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(r.setContentType("application/json",!1),bY(t)):t}],transformResponse:[function(t){const r=this.transitional||Ys.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(oe.isResponse(t)||oe.isReadableStream(t))return t;if(t&&oe.isString(t)&&(n&&!this.responseType||o)){const a=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?$e.from(s,$e.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_t.classes.FormData,Blob:_t.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};oe.forEach(["delete","get","head","post","put","patch"],e=>{Ys.headers[e]={}});const SY=oe.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),CY=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),r=a.substring(0,o).trim().toLowerCase(),n=a.substring(o+1).trim(),!(!r||t[r]&&SY[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},ey=Symbol("internals");function Na(e){return e&&String(e).trim().toLowerCase()}function ic(e){return e===!1||e==null?e:oe.isArray(e)?e.map(ic):String(e)}function wY(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const jY=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function Sf(e,t,r,n,o){if(oe.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!oe.isString(t)){if(oe.isString(n))return t.indexOf(n)!==-1;if(oe.isRegExp(n))return n.test(t)}}function TY(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function OY(e,t){const r=oe.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,i,a){return this[n].call(this,t,o,i,a)},configurable:!0})})}class cr{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function i(s,c,u){const d=Na(c);if(!d)throw new Error("header name must be a non-empty string");const f=oe.findKey(o,d);(!f||o[f]===void 0||u===!0||u===void 0&&o[f]!==!1)&&(o[f||c]=ic(s))}const a=(s,c)=>oe.forEach(s,(u,d)=>i(u,d,c));if(oe.isPlainObject(t)||t instanceof this.constructor)a(t,r);else if(oe.isString(t)&&(t=t.trim())&&!jY(t))a(CY(t),r);else if(oe.isObject(t)&&oe.isIterable(t)){let s={},c,u;for(const d of t){if(!oe.isArray(d))throw TypeError("Object iterator must return a key-value pair");s[u=d[0]]=(c=s[u])?oe.isArray(c)?[...c,d[1]]:[c,d[1]]:d[1]}a(s,r)}else t!=null&&i(r,t,n);return this}get(t,r){if(t=Na(t),t){const n=oe.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return wY(o);if(oe.isFunction(r))return r.call(this,o,n);if(oe.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Na(t),t){const n=oe.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||Sf(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function i(a){if(a=Na(a),a){const s=oe.findKey(n,a);s&&(!r||Sf(n,n[s],s,r))&&(delete n[s],o=!0)}}return oe.isArray(t)?t.forEach(i):i(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const i=r[n];(!t||Sf(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const r=this,n={};return oe.forEach(this,(o,i)=>{const a=oe.findKey(n,i);if(a){r[a]=ic(o),delete r[i];return}const s=t?TY(i):String(i).trim();s!==i&&delete r[i],r[s]=ic(o),n[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return oe.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&oe.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[ey]=this[ey]={accessors:{}}).accessors,o=this.prototype;function i(a){const s=Na(a);n[s]||(OY(o,a),n[s]=!0)}return oe.isArray(t)?t.forEach(i):i(t),this}}cr.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);oe.reduceDescriptors(cr.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});oe.freezeMethods(cr);function Cf(e,t){const r=this||Ys,n=t||r,o=cr.from(n.headers);let i=n.data;return oe.forEach(e,function(s){i=s.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function Z3(e){return!!(e&&e.__CANCEL__)}function ua(e,t,r){$e.call(this,e??"canceled",$e.ERR_CANCELED,t,r),this.name="CanceledError"}oe.inherits(ua,$e,{__CANCEL__:!0});function Y3(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new $e("Request failed with status code "+r.status,[$e.ERR_BAD_REQUEST,$e.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function IY(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function PY(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),d=n[i];a||(a=u),r[o]=c,n[o]=u;let f=i,g=0;for(;f!==o;)g+=r[f++],f=f%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const p=d&&u-d;return p?Math.round(g*1e3/p):void 0}}function EY(e,t){let r=0,n=1e3/t,o,i;const a=(u,d=Date.now())=>{r=d,o=null,i&&(clearTimeout(i),i=null),e.apply(null,u)};return[(...u)=>{const d=Date.now(),f=d-r;f>=n?a(u,d):(o=u,i||(i=setTimeout(()=>{i=null,a(o)},n-f)))},()=>o&&a(o)]}const eu=(e,t,r=3)=>{let n=0;const o=PY(50,250);return EY(i=>{const a=i.loaded,s=i.lengthComputable?i.total:void 0,c=a-n,u=o(c),d=a<=s;n=a;const f={loaded:a,total:s,progress:s?a/s:void 0,bytes:c,rate:u||void 0,estimated:u&&s&&d?(s-a)/u:void 0,event:i,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(f)},r)},ty=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},ry=e=>(...t)=>oe.asap(()=>e(...t)),$Y=_t.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,_t.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(_t.origin),_t.navigator&&/(msie|trident)/i.test(_t.navigator.userAgent)):()=>!0,NY=_t.hasStandardBrowserEnv?{write(e,t,r,n,o,i){const a=[e+"="+encodeURIComponent(t)];oe.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),oe.isString(n)&&a.push("path="+n),oe.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function kY(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function MY(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function X3(e,t,r){let n=!kY(t);return e&&(n||r==!1)?MY(e,t):t}const ny=e=>e instanceof cr?{...e}:e;function Ko(e,t){t=t||{};const r={};function n(u,d,f,g){return oe.isPlainObject(u)&&oe.isPlainObject(d)?oe.merge.call({caseless:g},u,d):oe.isPlainObject(d)?oe.merge({},d):oe.isArray(d)?d.slice():d}function o(u,d,f,g){if(oe.isUndefined(d)){if(!oe.isUndefined(u))return n(void 0,u,f,g)}else return n(u,d,f,g)}function i(u,d){if(!oe.isUndefined(d))return n(void 0,d)}function a(u,d){if(oe.isUndefined(d)){if(!oe.isUndefined(u))return n(void 0,u)}else return n(void 0,d)}function s(u,d,f){if(f in t)return n(u,d);if(f in e)return n(void 0,u)}const c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,d,f)=>o(ny(u),ny(d),f,!0)};return oe.forEach(Object.keys(Object.assign({},e,t)),function(d){const f=c[d]||o,g=f(e[d],t[d],d);oe.isUndefined(g)&&f!==s||(r[d]=g)}),r}const ej=e=>{const t=Ko({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:s}=t;t.headers=a=cr.from(a),t.url=K3(X3(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&a.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let c;if(oe.isFormData(r)){if(_t.hasStandardBrowserEnv||_t.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((c=a.getContentType())!==!1){const[u,...d]=c?c.split(";").map(f=>f.trim()).filter(Boolean):[];a.setContentType([u||"multipart/form-data",...d].join("; "))}}if(_t.hasStandardBrowserEnv&&(n&&oe.isFunction(n)&&(n=n(t)),n||n!==!1&&$Y(t.url))){const u=o&&i&&NY.read(i);u&&a.set(o,u)}return t},AY=typeof XMLHttpRequest<"u",DY=AY&&function(e){return new Promise(function(r,n){const o=ej(e);let i=o.data;const a=cr.from(o.headers).normalize();let{responseType:s,onUploadProgress:c,onDownloadProgress:u}=o,d,f,g,p,m;function h(){p&&p(),m&&m(),o.cancelToken&&o.cancelToken.unsubscribe(d),o.signal&&o.signal.removeEventListener("abort",d)}let x=new XMLHttpRequest;x.open(o.method.toUpperCase(),o.url,!0),x.timeout=o.timeout;function v(){if(!x)return;const C=cr.from("getAllResponseHeaders"in x&&x.getAllResponseHeaders()),N={data:!s||s==="text"||s==="json"?x.responseText:x.response,status:x.status,statusText:x.statusText,headers:C,config:e,request:x};Y3(function(I){r(I),h()},function(I){n(I),h()},N),x=null}"onloadend"in x?x.onloadend=v:x.onreadystatechange=function(){!x||x.readyState!==4||x.status===0&&!(x.responseURL&&x.responseURL.indexOf("file:")===0)||setTimeout(v)},x.onabort=function(){x&&(n(new $e("Request aborted",$e.ECONNABORTED,e,x)),x=null)},x.onerror=function(){n(new $e("Network Error",$e.ERR_NETWORK,e,x)),x=null},x.ontimeout=function(){let T=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const N=o.transitional||J3;o.timeoutErrorMessage&&(T=o.timeoutErrorMessage),n(new $e(T,N.clarifyTimeoutError?$e.ETIMEDOUT:$e.ECONNABORTED,e,x)),x=null},i===void 0&&a.setContentType(null),"setRequestHeader"in x&&oe.forEach(a.toJSON(),function(T,N){x.setRequestHeader(N,T)}),oe.isUndefined(o.withCredentials)||(x.withCredentials=!!o.withCredentials),s&&s!=="json"&&(x.responseType=o.responseType),u&&([g,m]=eu(u,!0),x.addEventListener("progress",g)),c&&x.upload&&([f,p]=eu(c),x.upload.addEventListener("progress",f),x.upload.addEventListener("loadend",p)),(o.cancelToken||o.signal)&&(d=C=>{x&&(n(!C||C.type?new ua(null,e,x):C),x.abort(),x=null)},o.cancelToken&&o.cancelToken.subscribe(d),o.signal&&(o.signal.aborted?d():o.signal.addEventListener("abort",d)));const y=IY(o.url);if(y&&_t.protocols.indexOf(y)===-1){n(new $e("Unsupported protocol "+y+":",$e.ERR_BAD_REQUEST,e));return}x.send(i||null)})},RY=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,o;const i=function(u){if(!o){o=!0,s();const d=u instanceof Error?u:this.reason;n.abort(d instanceof $e?d:new ua(d instanceof Error?d.message:d))}};let a=t&&setTimeout(()=>{a=null,i(new $e(`timeout ${t} of ms exceeded`,$e.ETIMEDOUT))},t);const s=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:c}=n;return c.unsubscribe=()=>oe.asap(s),c}},LY=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},FY=async function*(e,t){for await(const r of _Y(e))yield*LY(r,t)},_Y=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},oy=(e,t,r,n)=>{const o=FY(e,t);let i=0,a,s=c=>{a||(a=!0,n&&n(c))};return new ReadableStream({async pull(c){try{const{done:u,value:d}=await o.next();if(u){s(),c.close();return}let f=d.byteLength;if(r){let g=i+=f;r(g)}c.enqueue(new Uint8Array(d))}catch(u){throw s(u),u}},cancel(c){return s(c),o.return()}},{highWaterMark:2})},hd=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",tj=hd&&typeof ReadableStream=="function",BY=hd&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),rj=(e,...t)=>{try{return!!e(...t)}catch{return!1}},zY=tj&&rj(()=>{let e=!1;const t=new Request(_t.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),iy=64*1024,Vg=tj&&rj(()=>oe.isReadableStream(new Response("").body)),tu={stream:Vg&&(e=>e.body)};hd&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!tu[t]&&(tu[t]=oe.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new $e(`Response type '${t}' is not supported`,$e.ERR_NOT_SUPPORT,n)})})})(new Response);const HY=async e=>{if(e==null)return 0;if(oe.isBlob(e))return e.size;if(oe.isSpecCompliantForm(e))return(await new Request(_t.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(oe.isArrayBufferView(e)||oe.isArrayBuffer(e))return e.byteLength;if(oe.isURLSearchParams(e)&&(e=e+""),oe.isString(e))return(await BY(e)).byteLength},UY=async(e,t)=>{const r=oe.toFiniteNumber(e.getContentLength());return r??HY(t)},VY=hd&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:c,responseType:u,headers:d,withCredentials:f="same-origin",fetchOptions:g}=ej(e);u=u?(u+"").toLowerCase():"text";let p=RY([o,i&&i.toAbortSignal()],a),m;const h=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let x;try{if(c&&zY&&r!=="get"&&r!=="head"&&(x=await UY(d,n))!==0){let N=new Request(t,{method:"POST",body:n,duplex:"half"}),j;if(oe.isFormData(n)&&(j=N.headers.get("content-type"))&&d.setContentType(j),N.body){const[I,$]=ty(x,eu(ry(c)));n=oy(N.body,iy,I,$)}}oe.isString(f)||(f=f?"include":"omit");const v="credentials"in Request.prototype;m=new Request(t,{...g,signal:p,method:r.toUpperCase(),headers:d.normalize().toJSON(),body:n,duplex:"half",credentials:v?f:void 0});let y=await fetch(m);const C=Vg&&(u==="stream"||u==="response");if(Vg&&(s||C&&h)){const N={};["status","statusText","headers"].forEach(w=>{N[w]=y[w]});const j=oe.toFiniteNumber(y.headers.get("content-length")),[I,$]=s&&ty(j,eu(ry(s),!0))||[];y=new Response(oy(y.body,iy,I,()=>{$&&$(),h&&h()}),N)}u=u||"text";let T=await tu[oe.findKey(tu,u)||"text"](y,e);return!C&&h&&h(),await new Promise((N,j)=>{Y3(N,j,{data:T,headers:cr.from(y.headers),status:y.status,statusText:y.statusText,config:e,request:m})})}catch(v){throw h&&h(),v&&v.name==="TypeError"&&/Load failed|fetch/i.test(v.message)?Object.assign(new $e("Network Error",$e.ERR_NETWORK,e,m),{cause:v.cause||v}):$e.from(v,v&&v.code,e,m)}}),Wg={http:iY,xhr:DY,fetch:VY};oe.forEach(Wg,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const ay=e=>`- ${e}`,WY=e=>oe.isFunction(e)||e===null||e===!1,nj={getAdapter:e=>{e=oe.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let i=0;i<t;i++){r=e[i];let a;if(n=r,!WY(r)&&(n=Wg[(a=String(r)).toLowerCase()],n===void 0))throw new $e(`Unknown adapter '${a}'`);if(n)break;o[a||"#"+i]=n}if(!n){const i=Object.entries(o).map(([s,c])=>`adapter ${s} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(ay).join(`
`):" "+ay(i[0]):"as no adapter specified";throw new $e("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return n},adapters:Wg};function wf(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new ua(null,e)}function sy(e){return wf(e),e.headers=cr.from(e.headers),e.data=Cf.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),nj.getAdapter(e.adapter||Ys.adapter)(e).then(function(n){return wf(e),n.data=Cf.call(e,e.transformResponse,n),n.headers=cr.from(n.headers),n},function(n){return Z3(n)||(wf(e),n&&n.response&&(n.response.data=Cf.call(e,e.transformResponse,n.response),n.response.headers=cr.from(n.response.headers))),Promise.reject(n)})}const oj="1.9.0",vd={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{vd[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const ly={};vd.transitional=function(t,r,n){function o(i,a){return"[Axios v"+oj+"] Transitional option '"+i+"'"+a+(n?". "+n:"")}return(i,a,s)=>{if(t===!1)throw new $e(o(a," has been removed"+(r?" in "+r:"")),$e.ERR_DEPRECATED);return r&&!ly[a]&&(ly[a]=!0,console.warn(o(a," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,a,s):!0}};vd.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function qY(e,t,r){if(typeof e!="object")throw new $e("options must be an object",$e.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],a=t[i];if(a){const s=e[i],c=s===void 0||a(s,i,e);if(c!==!0)throw new $e("option "+i+" must be "+c,$e.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new $e("Unknown option "+i,$e.ERR_BAD_OPTION)}}const ac={assertOptions:qY,validators:vd},mn=ac.validators;class Lo{constructor(t){this.defaults=t||{},this.interceptors={request:new Xx,response:new Xx}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?i&&!String(n.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+i):n.stack=i}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=Ko(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:i}=r;n!==void 0&&ac.assertOptions(n,{silentJSONParsing:mn.transitional(mn.boolean),forcedJSONParsing:mn.transitional(mn.boolean),clarifyTimeoutError:mn.transitional(mn.boolean)},!1),o!=null&&(oe.isFunction(o)?r.paramsSerializer={serialize:o}:ac.assertOptions(o,{encode:mn.function,serialize:mn.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),ac.assertOptions(r,{baseUrl:mn.spelling("baseURL"),withXsrfToken:mn.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let a=i&&oe.merge(i.common,i[r.method]);i&&oe.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),r.headers=cr.concat(a,i);const s=[];let c=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(r)===!1||(c=c&&h.synchronous,s.unshift(h.fulfilled,h.rejected))});const u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});let d,f=0,g;if(!c){const m=[sy.bind(this),void 0];for(m.unshift.apply(m,s),m.push.apply(m,u),g=m.length,d=Promise.resolve(r);f<g;)d=d.then(m[f++],m[f++]);return d}g=s.length;let p=r;for(f=0;f<g;){const m=s[f++],h=s[f++];try{p=m(p)}catch(x){h.call(this,x);break}}try{d=sy.call(this,p)}catch(m){return Promise.reject(m)}for(f=0,g=u.length;f<g;)d=d.then(u[f++],u[f++]);return d}getUri(t){t=Ko(this.defaults,t);const r=X3(t.baseURL,t.url,t.allowAbsoluteUrls);return K3(r,t.params,t.paramsSerializer)}}oe.forEach(["delete","get","head","options"],function(t){Lo.prototype[t]=function(r,n){return this.request(Ko(n||{},{method:t,url:r,data:(n||{}).data}))}});oe.forEach(["post","put","patch"],function(t){function r(n){return function(i,a,s){return this.request(Ko(s||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Lo.prototype[t]=r(),Lo.prototype[t+"Form"]=r(!0)});class Ch{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(o=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](o);n._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{n.subscribe(s),i=s}).then(o);return a.cancel=function(){n.unsubscribe(i)},a},t(function(i,a,s){n.reason||(n.reason=new ua(i,a,s),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new Ch(function(o){t=o}),cancel:t}}}function GY(e){return function(r){return e.apply(null,r)}}function KY(e){return oe.isObject(e)&&e.isAxiosError===!0}const qg={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(qg).forEach(([e,t])=>{qg[t]=e});function ij(e){const t=new Lo(e),r=R3(Lo.prototype.request,t);return oe.extend(r,Lo.prototype,t,{allOwnKeys:!0}),oe.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return ij(Ko(e,o))},r}const tt=ij(Ys);tt.Axios=Lo;tt.CanceledError=ua;tt.CancelToken=Ch;tt.isCancel=Z3;tt.VERSION=oj;tt.toFormData=md;tt.AxiosError=$e;tt.Cancel=tt.CanceledError;tt.all=function(t){return Promise.all(t)};tt.spread=GY;tt.isAxiosError=KY;tt.mergeConfig=Ko;tt.AxiosHeaders=cr;tt.formToJSON=e=>Q3(oe.isHTMLForm(e)?new FormData(e):e);tt.getAdapter=nj.getAdapter;tt.HttpStatusCode=qg;tt.default=tt;const JY=e=>e.langObj,ru=e=>{const t=X(JY),r=A(D(t.copiedText))||"",n=A(D(t.copyTextError))||"",[o,i]=P.useState("");async function a(){try{let c="";if(e.type==="results")for(const[u,d]of Object.entries(e.content))c=c+`${u}: ${d} * `;else c=e.content;console.log("formattedResults: "+c),await navigator.clipboard.writeText(c),i("success")}catch(c){i("error"),console.error("Failed to copy: ",c)}finally{setTimeout(()=>i(""),3e3)}}const s=()=>{a(e.content).then(()=>{console.log("copied to clipboard")})};return l.jsx(ae.Fragment,{children:l.jsxs(ZY,{children:[l.jsx(QY,{tabindex:"1",onClick:c=>s(),children:e.text}),l.jsxs(YY,{children:[o==="success"&&r,o==="error"&&n]})]})})},QY=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: 220px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 0px;
  background-color: ${({theme:e})=>e.primary};
  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }
`,ZY=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid #2e6da4; */
`,YY=S.div`
  grid-area: c;
  font-size: 1.5em;
  font-weight: bold;
  height: 50px;
  min-width: 200px;
  margin-top: 0.2em;
  /* border: 1px solid #2e6da4; */
`,XY=e=>e.langObj,eX=e=>e.configObj,tX=e=>e.setDisableRefreshCheck,rX=e=>{const t=X(XY),r=X(eX),n=E(tX),o=A(D(t.defaultEmailClientFail))||"",i=A(D(t.submitFailMessage))||"",[a,s]=P.useState(i),[c,u]=P.useState(!1),d=e.results,f=r.emailAddress,g=A(D(t.btnTransferEmail))||"",p=h=>{h.preventDefault();const x=Object.entries(e.results).map(([T,N])=>`${T}: ${N}`).join(`
`),v=new Blob([x],{type:"text/plain"}),y=URL.createObjectURL(v),C=document.createElement("a");C.href=y,C.download="my_Q-sort_results.txt",document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(y)},m=h=>{h.preventDefault(),s(o);let x="";for(const[v,y]of Object.entries(e.results))x=x+`${v}:| ${y} | `;console.log("formattedResults: "+x),console.log(JSON.stringify(x,null,2)),navigator.userAgent.toLowerCase().indexOf("chrome")>-1?(window.open(`mailto:${r.emailAddress}?subject=${t.emailSubjectText}&body=${t.emailBodyMessage} %0D%0A%0D%0AMy Results:%0D%0A${x}`),u(!0)):(window.location.href=`mailto:${r.emailAddress}?subject=${t.emailSubjectText}&body=${t.emailBodyMessage} %0D%0A%0D%0AMy Results:%0D%0A${x}`,u(!0))};return P.useEffect(()=>{n(!0)},[n]),console.log("urlUsercode: ",e.results.urlUsercode),l.jsxs(uX,{children:[l.jsxs(oX,{children:[l.jsx(nX,{tabindex:"0",onClick:h=>m(h),children:g}),l.jsx(iX,{children:a})]}),c?l.jsx(sX,{children:l.jsxs(lX,{children:[l.jsx(ru,{type:"email",content:f,text:t.clipboardEmail}),l.jsx(ru,{type:"results",content:d,text:t.clipboardResults}),l.jsx(dX,{children:l.jsx(cX,{onClick:h=>p(h),children:t.downloadResultsButtonText})})]})}):l.jsx(aX,{})]})},nX=S.button`
  display: flex;
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};
  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }
  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,oX=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
`,iX=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2em;
  width: 65vw;
  font-size: 1.35em;
  align-self: center;
`,aX=S.div`
  height: 300px;
`,sX=S.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,lX=S.div`
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  height: 180px;
  gap: 30px;
  justify-content: center;
  align-items: center;
`,cX=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: 220px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
  background-color: ${({theme:e})=>e.primary};
  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }
`,uX=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`,dX=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid #2e6da4; */
`,fX=e=>e.langObj,gX=e=>e.transmittingData,pX=e=>e.setTransmittingData,mX=e=>e.checkInternetConnection,hX=e=>e.setCheckInternetConnection,vX=e=>e.configObj,xX=e=>e.setTriggerTransmissionOKModal,yX=e=>e.setDisplayGoodbyeMessage,bX=e=>e.setDisplayBelowButtonText,SX=e=>{const t=X(fX);let r=E(gX);const n=E(pX);let o=E(mX);const i=E(hX),a=X(vX),s=E(xX),c=E(yX),u=A(D(t.checkInternetMessage))||"",d=E(bX),f=A(D(t.btnTransfer))||"",[g,p]=P.useState(0),m=h=>{h.preventDefault(),h.target.disabled=!0,d(!0),n(!0),i(!1),setTimeout(()=>{n(!1),i(!0),d(!1)},1e4),console.log(JSON.stringify(e.results,null,2));let x=a.baserowToken,v=a.baserowDatabaseIdNumber;if(x==null){console.log("Baserow token is not set");return}tt({method:"POST",url:`https://api.baserow.io/api/database/rows/table/${v}/?user_field_names=true`,headers:{Authorization:`Token ${x}`,"Content-Type":"application/json"},data:e.results}).then(y=>{console.log(y),y.status===200&&(n(!1),i(!1),c(!0),s(!0))}).catch(y=>{console.log(y),setTimeout(()=>{p(g+1)},1e4)}),console.log("submission processed")};return console.log("failureCount: ",g),g>1&&i(!1),l.jsxs(ae.Fragment,{children:[l.jsx(Fn,{}),l.jsx(vh,{}),l.jsx(xh,{}),r?l.jsx(wX,{}):l.jsx(CX,{tabindex:"0",onClick:h=>m(h),children:f}),o&&l.jsx(jX,{children:u}),g>1&&l.jsx(TX,{children:l.jsx(rX,{results:e.results})})]})},CX=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  justify-self: right;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,wX=S.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-top: 30px;
  margin-bottom: 20px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #337ab7;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`,jX=S.div`
  display: flex;
  padding-top: 30px;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  font-size: 1.2em;
  text-align: center;
  background-color: #ffc067;
  padding: 5px;
  margin-bottom: 30px;
  border-radius: 10px;
  font-weight: bold;
`,TX=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  font-size: 0.8em;
  text-align: center;
  background-color: #ffc067;
  margin-bottom: 30px;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
`,aj=()=>{try{const e=JSON.parse(localStorage.getItem("resultsPresort")),t={};let r=e==null?void 0:e.npos;isNaN(r)&&(r=0);let n=e==null?void 0:e.nneu;isNaN(n)&&(n=0);let o=e==null?void 0:e.nneg;return isNaN(o)&&(o=0),t.r14=`(numPos): ${r}`,t.r15=`(numNeu): ${n}`,t.r16=`(numNeg): ${o}`,t.r17=`(pos): ${(e==null?void 0:e.posStateNums)||[]}`,t.r18=`(neu): ${(e==null?void 0:e.neuStateNums)||[]}`,t.r19=`(neg): ${(e==null?void 0:e.negStateNums)||[]}`,t}catch(e){console.log(e);return}},OX=e=>e.langObj,IX=e=>e.configObj,PX=e=>e.mapObj,EX=e=>e.setCurrentPage,$X=e=>e.displayGoodbyeMessage,NX=e=>e.displayBelowButtonText,cy=()=>{let e={},t={};const r=X(OX),n=X(IX),o=X(PX),i=E(EX),a=E($X),s=localStorage.getItem("urlUsercode")||"",c=E(NX);let u=JSON.parse(localStorage.getItem("resultsSurvey"));u===void 0&&(u={});const[d,f]=P.useState({consent:"00:00:00",landing:"00:00:00",presort:"00:00:00",thinning:"00:00:00",sort:"00:00:00",postsort:"00:00:00",survey:"00:00:00"});P.useEffect(()=>{const w=(L,q="00:00:00")=>{const K=localStorage.getItem(L);return K!==null?K:q},U={consent:w("timeOnconsentPage"),landing:w("timeOnlandingPage"),presort:w("timeOnpresortPage"),thinning:w("timeOnthinningPage"),sort:w("timeOnsortPage"),postsort:w("timeOnpostsortPage"),survey:w("timeOnsurveyPage")};(n.showConsentPage===!1||n.showConsentPage==="false")&&(U.consent="n/a"),(n.showPostsort===!1||n.showPostsort==="false")&&(U.postsort="n/a"),(n.showSurvey===!1||n.showSurvey==="false")&&(U.survey="n/a"),f(U)},[n]),P.useEffect(()=>{i("submit"),localStorage.setItem("currentPage","submit")},[i]);const g=A(D(r.transferTextAbove))||"",p=A(D(r.transferTextBelow))||"",m=A(D(r.goodbyeMessage))||"",h=A(D(r.linkedProjectMessage))||"",x=D(r.linkedProjectBtnMessage)||"",v=A(D(r.transferHead))||"",y=JSON.parse(localStorage.getItem("resultsPresort"))||{},C=JSON.parse(localStorage.getItem("sortColumns"))||{},T=n.headerBarColor,N=jm();try{let w=localStorage.getItem("randomId")||te(),U=localStorage.getItem("partId")||"no part ID",L=localStorage.getItem("usercode")||"no usercode set",q=n.creationDate||"unknown date";e.projectName=n.studyTitle,e.partId=U,e.randomId=w,e.urlUsercode=L,t.r1=n.studyTitle?`(projectName): ${n.studyTitle} - ${q}`:`(projectName): my Q study - ${q}`,t.r2=`(randomId): ${w}`,t.r3=`(partId): ${U}`,t.r4=`(urlUsercode): ${L}`}catch(w){console.log(w),alert("1: "+w.message)}try{t.r5=`(dateTime): ${N}`,t.r6="(desktop/mobile): desktop",t.r7=`(timeOnConsentPage): ${d.consent}`,t.r8=`(timeOnWelcomePage): ${d.landing}`,t.r9=`(timeOnPresortPage): ${d.presort}`,t.r10=`(timeOnRefinePage): ${d.thinning}`,t.r11=`(timeOnSortPage): ${d.sort}`,t.r12=`(timeOnPostsortPage): ${d.postsort}`,t.r13=`(timeOnSurveyPage): ${d.survey}`}catch(w){console.log(w),alert("2: "+w.message)}try{const w=yZ(),U=aj();e={...e,...w},t={...t,...U}}catch(w){console.log(w),alert("4: "+w.message)}let j=22;try{if(n.showPostsort){const w=JSON.parse(localStorage.getItem("resultsPostsort"))||{},U=_Q(w,o,n),L=Object.fromEntries(Object.entries(U).sort(([K],[B])=>K.localeCompare(B))),q=Object.keys(L);for(let K=0;K<q.length;K++){let B=q[K].split("_");e[B[0]]=L[q[K]],t[`r${j}`]=`${B[0]}: ${L[q[K]]}`,j++}}}catch(w){console.log(w),alert("5: "+w.message)}try{if(n.showSurvey&&u!==void 0){e={...e,...u};const w=Object.keys(u);for(let U=0;U<w.length;U++)t[`r${j}`]=`${w[U]}: ${u[w[U]]}`,j++}}catch(w){console.log(w),alert("6: "+w.message)}let I,$;try{Object.keys(C).length!==0&&C!==void 0&&Object.keys(y).length!==0&&y!==void 0&&(I=D3({...C},{...y},n.traceSorts),$=xZ({...C},{...y}))}catch(w){console.log(w),alert("7: "+w.message)}try{e={...e,...I},t={...t,...$}}catch(w){console.log(w),alert("8: "+w.message)}try{for(const w in e)(e[w]===null||e[w]===void 0)&&(e[w]="no data")}catch(w){console.log(w),alert("9: "+w.message)}return a===!0?n.linkToSecondProject===!0?l.jsxs(gy,{children:[h,l.jsx("a",{id:"secondProjectLink",href:`${n.secondProjectUrl}/#/?usercode=${s}`,style:{targetNew:"tab",textDecoration:"none"},children:l.jsx(kX,{children:x})})]}):l.jsx(ae.Fragment,{children:l.jsx(gy,{children:m})}):n.setupTarget==="local"?l.jsxs(ae.Fragment,{children:[l.jsx(uy,{background:T,children:v}),l.jsx(pZ,{}),l.jsx(dy,{children:l.jsx(nZ,{results:e})})]}):l.jsxs(ae.Fragment,{children:[l.jsx(uy,{background:T,children:v}),l.jsxs(dy,{children:[l.jsx(fy,{children:g}),l.jsx(SX,{results:t}),c&&l.jsx(fy,{children:p})]})]})},uy=S.div`
  width: calc(100vw-4px);
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 28px;
`,dy=S.div`
  display: flex;
  min-height: 600px;
  width: calc(100vw-4px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,fy=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  line-height: 1.2em;
  width: 75vw;
  font-size: 1.35em;
  padding: 25px;
  align-self: center;
`,gy=S.div`
  display: flex;
  width: calc(100vw -20px);
  height: calc(100vh - 50px);
  font-size: 22px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,kX=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.5em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 75px;
  justify-self: right;
  margin-right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
  a {
    text-decoration: none;
  }
`,MX=e=>{var p,m,h;const t={async setItem(x,v){return await null,localStorage.setItem(x,v)}};let r=`itemNum${e.opts.itemNum}`;const n=e.check,o=A(D((p=e==null?void 0:e.opts)==null?void 0:p.label))||"",i=A(D((m=e==null?void 0:e.opts)==null?void 0:m.placeholder))||"",a=A(D((h=e==null?void 0:e.opts)==null?void 0:h.note))||"";let s=!0;(a.length<1||a==="")&&(s=!1);const[c,u]=Ee(r,""),[d,f]=P.useState({bgColor:"whitesmoke",border:"none"}),g=x=>{const v=JSON.parse(localStorage.getItem("resultsSurvey"));let y=x.target.value,C=y.length;if((e.opts.restricted==="true"||e.opts.restricted===!0)&&(y=y.replace(/\D/g,"")),(e.opts.limited==="true"||e.opts.limited===!0)&&y.length>+e.opts.limitLength&&(y=y.substring(0,+e.opts.limitLength)),u(y),C>0){let T=kt(y);v[`itemNum${e.opts.itemNum}`]=T}else e.opts.required===!0||e.opts.required==="true"?v[`itemNum${e.opts.itemNum}`]="no-*?*-response":v[`itemNum${e.opts.itemNum}`]="no response";t.setItem("resultsSurvey",JSON.stringify(v))};return P.useEffect(()=>{let x=!1;c.length>0&&c!==""&&(x=!0),n===!0&&x<1&&e.opts.required===!0?f({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):f({bgColor:"whitesmoke",border:"none"})},[n,c,e]),s?l.jsxs(py,{bgColor:d.bgColor,border:d.border,children:[l.jsx(my,{children:l.jsx("div",{children:o})}),l.jsx(AX,{id:"noteText",children:l.jsx("div",{children:a})}),l.jsx(hy,{type:"text",value:c,placeholder:i,onChange:g})]}):l.jsxs(py,{bgColor:d.bgColor,border:d.border,children:[l.jsx(my,{children:l.jsx("div",{children:o})}),l.jsx(hy,{type:"text",value:c,placeholder:i,onChange:g})]})},py=S.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,my=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  min-height: 50px;
  font-size: 18px;
  text-align: center;
  width: 100%;
  border-radius: 3px;
  background-color: lightgray;
`,AX=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,hy=S.input`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  height: 50px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding-left: 5px;
  padding-right: 5px;
`,DX=e=>{const t={async setItem(m,h){return await null,localStorage.setItem(m,h)}},r=`itemNum${e.opts.itemNum}`,n=e.check,o=A(D(e.opts.label))||"",i=A(D(e.opts.note))||"",a=A(D(e.opts.placeholder))||"";let s=!0;(i.length<1||i==="")&&(s=!1);const[c,u]=Ee(r,""),[d,f]=P.useState({bgColor:"whitesmoke",border:"none"}),g=m=>{const h=JSON.parse(localStorage.getItem("resultsSurvey"));let x=m.target.value;if(u(x),x.length>0){let v=kt(x);h[`itemNum${e.opts.itemNum}`]=v}else e.opts.required===!0||e.opts.required==="true"?h[`itemNum${e.opts.itemNum}`]="no-*?*-response":h[`itemNum${e.opts.itemNum}`]="no response";t.setItem("resultsSurvey",JSON.stringify(h))};let p=!1;return c.length>0&&c!==""&&(p=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&n===!0&&p<1?f({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):f({bgColor:"whitesmoke",border:"none"})},[n,c,p,e.opts.required]),s?l.jsxs(vy,{bgColor:d.bgColor,border:d.border,children:[l.jsx(xy,{children:l.jsx("div",{children:o})}),l.jsx(RX,{children:i}),l.jsx(yy,{value:c,placeholder:a,onChange:g})]}):l.jsxs(vy,{bgColor:d.bgColor,border:d.border,children:[l.jsx(xy,{children:l.jsx("div",{children:o})}),l.jsx(yy,{value:c,placeholder:a,onChange:g})]})},vy=S.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: whitesmoke;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,xy=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,RX=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,yy=S.textarea`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 0px;
  height: 150px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding: 5px;
`,LX=e=>{const t=I=>{let $=I.split(";;;");return $=$.filter(function(w){return w}),$=$.map(w=>w.trim()),$};let r=e.opts.id;const n=e.check,o=A(D(e.opts.label))||"",i=A(D(e.opts.note))||"",a=t(e.opts.options);let s=!0;(i.length<1||i==="")&&(s=!1);let c=e.opts.other;c==="true"||c===!0?c=!0:c=!1;const u=a.length-1;let[d,f]=Ee(r,""),[g,p]=P.useState(!0),[m,h]=P.useState("no input");const[x,v]=P.useState({bgColor:"whitesmoke",border:"none"}),y=({label:I,value:$,checked:w,setter:U})=>l.jsx("label",{children:l.jsxs(_X,{children:[l.jsx("input",{type:"radio",checked:w===$,onChange:()=>U($),value:$}),l.jsx(FX,{children:l.jsx("div",{children:I})})]})}),C=I=>{const $=JSON.parse(localStorage.getItem("resultsSurvey"));+I.target.value==+u&&c===!0?m===""?$[`itemNum${e.opts.itemNum}`]=`${+I.target.value+1}-no input`:$[`itemNum${e.opts.itemNum}`]=`${+I.target.value+1}-${m}`:$[`itemNum${e.opts.itemNum}`]=+I.target.value+1,+I.target.value==+u?p(!1):p(!0),localStorage.setItem("resultsSurvey",JSON.stringify($))},T=I=>{const $=JSON.parse(localStorage.getItem("resultsSurvey"));I.target.value===""?$[`itemNum${e.opts.itemNum}`]=`${+u+1}-no input`:$[`itemNum${e.opts.itemNum}`]=`${+u+1}-${kt(I.target.value.trim())}`,h(kt(I.target.value.trim())),localStorage.setItem("resultsSurvey",JSON.stringify($))};let N=!1;d.length===0&&(N=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&n===!0&&N?v({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):v({bgColor:"whitesmoke",border:"none"})},[n,N,e.opts.required]);const j=()=>{const I=a.map(($,w)=>l.jsx("div",{children:l.jsx(y,{value:w,checked:d,label:$,setter:f})},te()));return l.jsx("div",{children:I})};return s?l.jsxs(by,{bgColor:x.bgColor,border:x.border,children:[l.jsx(Sy,{children:l.jsx("div",{children:o})}),l.jsx(BX,{children:l.jsx("div",{children:i})}),l.jsxs(Cy,{children:[l.jsx("div",{onChange:I=>C(I),children:l.jsx(j,{})}),c&&l.jsx(wy,{disabled:g,onChange:I=>T(I)})]})]}):l.jsxs(by,{bgColor:x.bgColor,border:x.border,children:[l.jsx(Sy,{children:l.jsx("div",{children:o})}),l.jsxs(Cy,{onChange:I=>C(I),children:[l.jsx(j,{}),c&&l.jsx(wy,{onChange:I=>T(I)})]})]})},by=S.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Sy=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,Cy=S.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 0px 20px 20px 20px;
  vertical-align: center;
  margin-top: 0px;
  min-height: 100px;
  font-size: 16px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,FX=S.div`
  padding-left: 5px;
`,_X=S.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`,BX=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,wy=S.input`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  height: 50px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding-left: 5px;
  padding-right: 5px;
`;function zX(e,{insertAt:t}={}){if(typeof document>"u")return;let r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t==="top"&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}zX(`.rmsc{--rmsc-main: #4285f4;--rmsc-hover: #f1f3f5;--rmsc-selected: #e2e6ea;--rmsc-border: #ccc;--rmsc-gray: #aaa;--rmsc-bg: #fff;--rmsc-p: 10px;--rmsc-radius: 4px;--rmsc-h: 38px}.rmsc *{box-sizing:border-box;transition:all .2s ease}.rmsc .gray{color:var(--rmsc-gray)}.rmsc .dropdown-content{position:absolute;z-index:1;top:100%;width:100%;padding-top:8px}.rmsc .dropdown-content .panel-content{overflow:hidden;border-radius:var(--rmsc-radius);background:var(--rmsc-bg);box-shadow:0 0 0 1px #0000001a,0 4px 11px #0000001a}.rmsc .dropdown-container{position:relative;outline:0;background-color:var(--rmsc-bg);border:1px solid var(--rmsc-border);border-radius:var(--rmsc-radius)}.rmsc .dropdown-container[aria-disabled=true]:focus-within{box-shadow:var(--rmsc-gray) 0 0 0 1px;border-color:var(--rmsc-gray)}.rmsc .dropdown-container:focus-within{box-shadow:var(--rmsc-main) 0 0 0 1px;border-color:var(--rmsc-main)}.rmsc .dropdown-heading{position:relative;padding:0 var(--rmsc-p);display:flex;align-items:center;width:100%;height:var(--rmsc-h);cursor:default;outline:0}.rmsc .dropdown-heading .dropdown-heading-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.rmsc .clear-selected-button{cursor:pointer;background:none;border:0;padding:0;display:flex}.rmsc .options{max-height:260px;overflow-y:auto;margin:0;padding-left:0}.rmsc .options li{list-style:none;margin:0}.rmsc .select-item{box-sizing:border-box;cursor:pointer;display:block;padding:var(--rmsc-p);outline-offset:-1px;outline-color:var(--rmsc-primary)}.rmsc .select-item:hover{background:var(--rmsc-hover)}.rmsc .select-item.selected{background:var(--rmsc-selected)}.rmsc .no-options{padding:var(--rmsc-p);text-align:center;color:var(--rmsc-gray)}.rmsc .search{width:100%;position:relative;border-bottom:1px solid var(--rmsc-border)}.rmsc .search input{background:none;height:var(--rmsc-h);padding:0 var(--rmsc-p);width:100%;outline:0;border:0;font-size:1em}.rmsc .search input:focus{background:var(--rmsc-hover)}.rmsc .search-clear-button{cursor:pointer;position:absolute;top:0;right:0;bottom:0;background:none;border:0;padding:0 calc(var(--rmsc-p) / 2)}.rmsc .search-clear-button [hidden]{display:none}.rmsc .item-renderer{display:flex;align-items:baseline}.rmsc .item-renderer input{margin:0 5px 0 0}.rmsc .item-renderer.disabled{opacity:.5}.rmsc .spinner{animation:rotate 2s linear infinite}.rmsc .spinner .path{stroke:var(--rmsc-border);stroke-width:4px;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{to{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}
`);var HX={allItemsAreSelected:"All items are selected.",clearSearch:"Clear Search",clearSelected:"Clear Selected",noOptions:"No options",search:"Search",selectAll:"Select All",selectAllFiltered:"Select All (Filtered)",selectSomeItems:"Select...",create:"Create"},UX={value:[],hasSelectAll:!0,className:"multi-select",debounceDuration:200,options:[]},sj=ae.createContext({}),VX=({props:e,children:t})=>{let[r,n]=P.useState(e.options),o=i=>{var a;return((a=e.overrideStrings)==null?void 0:a[i])||HX[i]};return P.useEffect(()=>{n(e.options)},[e.options]),l.jsx(sj.Provider,{value:{t:o,...UX,...e,options:r,setOptions:n},children:t})},xd=()=>ae.useContext(sj);function WX(e,t){let r=P.useRef(!1);P.useEffect(()=>{r.current?e():r.current=!0},t)}var qX={when:!0,eventTypes:["keydown"]};function nu(e,t,r){let n=P.useMemo(()=>Array.isArray(e)?e:[e],[e]),o=Object.assign({},qX,r),{when:i,eventTypes:a}=o,s=P.useRef(t),{target:c}=o;P.useEffect(()=>{s.current=t});let u=P.useCallback(d=>{n.some(f=>d.key===f||d.code===f)&&s.current(d)},[n]);P.useEffect(()=>{if(i&&typeof window<"u"){let d=c?c.current:window;return a.forEach(f=>{d&&d.addEventListener(f,u)}),()=>{a.forEach(f=>{d&&d.removeEventListener(f,u)})}}},[i,a,n,c,t])}var tr={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",ENTER:"Enter",ESCAPE:"Escape",SPACE:"Space"},GX=(e,t)=>{let r;return function(...n){clearTimeout(r),r=setTimeout(()=>{e.apply(null,n)},t)}};function KX(e,t){return t?e.filter(({label:r,value:n})=>r!=null&&n!=null&&r.toLowerCase().includes(t.toLowerCase())):e}var lj=()=>l.jsxs("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-search-clear-icon gray",children:[l.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),l.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),JX=({checked:e,option:t,onClick:r,disabled:n})=>l.jsxs("div",{className:`item-renderer ${n?"disabled":""}`,children:[l.jsx("input",{type:"checkbox",onChange:r,checked:e,tabIndex:-1,disabled:n}),l.jsx("span",{children:t.label})]}),QX=JX,ZX=({itemRenderer:e=QX,option:t,checked:r,tabIndex:n,disabled:o,onSelectionChanged:i,onClick:a})=>{let s=P.useRef(),c=f=>{u(),f.preventDefault()},u=()=>{o||i(!r)},d=f=>{u(),a(f)};return nu([tr.ENTER,tr.SPACE],c,{target:s}),l.jsx("label",{className:`select-item ${r?"selected":""}`,role:"option","aria-selected":r,tabIndex:n,ref:s,children:l.jsx(e,{option:t,checked:r,onClick:d,disabled:o})})},cj=ZX,YX=({options:e,onClick:t,skipIndex:r})=>{let{disabled:n,value:o,onChange:i,ItemRenderer:a}=xd(),s=(c,u)=>{n||i(u?[...o,c]:o.filter(d=>d.value!==c.value))};return l.jsx(l.Fragment,{children:e.map((c,u)=>{let d=u+r;return l.jsx("li",{children:l.jsx(cj,{tabIndex:d,option:c,onSelectionChanged:f=>s(c,f),checked:!!o.find(f=>f.value===c.value),onClick:f=>t(f,d),itemRenderer:a,disabled:c.disabled||n})},(c==null?void 0:c.key)||u)})})},XX=YX,eee=()=>{let{t:e,onChange:t,options:r,setOptions:n,value:o,filterOptions:i,ItemRenderer:a,disabled:s,disableSearch:c,hasSelectAll:u,ClearIcon:d,debounceDuration:f,isCreatable:g,onCreateOption:p}=xd(),m=P.useRef(),h=P.useRef(),[x,v]=P.useState(""),[y,C]=P.useState(r),[T,N]=P.useState(""),[j,I]=P.useState(0),$=P.useCallback(GX(W=>N(W),f),[]),w=P.useMemo(()=>{let W=0;return c||(W+=1),u&&(W+=1),W},[c,u]),U={label:e(x?"selectAllFiltered":"selectAll"),value:""},L=W=>{let R=y.filter(O=>!O.disabled).map(O=>O.value);if(W){let O=[...o.map(b=>b.value),...R];return(i?y:r).filter(b=>O.includes(b.value))}return o.filter(O=>!R.includes(O.value))},q=W=>{let R=L(W);t(R)},K=W=>{$(W.target.value),v(W.target.value),I(0)},B=()=>{var W;N(""),v(""),(W=h==null?void 0:h.current)==null||W.focus()},J=W=>I(W),Y=W=>{switch(W.code){case tr.ARROW_UP:V(-1);break;case tr.ARROW_DOWN:V(1);break;default:return}W.stopPropagation(),W.preventDefault()};nu([tr.ARROW_DOWN,tr.ARROW_UP],Y,{target:m});let k=()=>{I(0)},_=async()=>{let W={label:x,value:x,__isNew__:!0};p&&(W=await p(x)),n([W,...r]),B(),t([...o,W])},z=async()=>i?await i(r,T):KX(r,T),V=W=>{let R=j+W;R=Math.max(0,R),R=Math.min(R,r.length+Math.max(w-1,0)),I(R)};P.useEffect(()=>{var W,R;(R=(W=m==null?void 0:m.current)==null?void 0:W.querySelector(`[tabIndex='${j}']`))==null||R.focus()},[j]);let[Q,H]=P.useMemo(()=>{let W=y.filter(R=>!R.disabled);return[W.every(R=>o.findIndex(O=>O.value===R.value)!==-1),W.length!==0]},[y,o]);P.useEffect(()=>{z().then(C)},[T,r]);let G=P.useRef();nu([tr.ENTER],_,{target:G});let Z=g&&x&&!y.some(W=>(W==null?void 0:W.value)===x);return l.jsxs("div",{className:"select-panel",role:"listbox",ref:m,children:[!c&&l.jsxs("div",{className:"search",children:[l.jsx("input",{placeholder:e("search"),type:"text","aria-describedby":e("search"),onChange:K,onFocus:k,value:x,ref:h,tabIndex:0}),l.jsx("button",{type:"button",className:"search-clear-button",hidden:!x,onClick:B,"aria-label":e("clearSearch"),children:d||l.jsx(lj,{})})]}),l.jsxs("ul",{className:"options",children:[u&&H&&l.jsx(cj,{tabIndex:w===1?0:1,checked:Q,option:U,onSelectionChanged:q,onClick:()=>J(1),itemRenderer:a,disabled:s}),y.length?l.jsx(XX,{skipIndex:w,options:y,onClick:(W,R)=>J(R)}):Z?l.jsx("li",{onClick:_,className:"select-item creatable",tabIndex:1,ref:G,children:`${e("create")} "${x}"`}):l.jsx("li",{className:"no-options",children:e("noOptions")})]})]})},tee=eee,ree=({expanded:e})=>l.jsx("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-heading-dropdown-arrow gray",children:l.jsx("path",{d:e?"M18 15 12 9 6 15":"M6 9L12 15 18 9"})}),nee=()=>{let{t:e,value:t,options:r,valueRenderer:n}=xd(),o=t.length===0,i=t.length===r.length,a=n&&n(t,r);return o?l.jsx("span",{className:"gray",children:a||e("selectSomeItems")}):l.jsx("span",{children:a||(i?e("allItemsAreSelected"):t.map(s=>s.label).join(", "))})},oee=({size:e=24})=>l.jsx("span",{style:{width:e,marginRight:"0.2rem"},children:l.jsx("svg",{width:e,height:e,className:"spinner",viewBox:"0 0 50 50",style:{display:"inline",verticalAlign:"middle"},children:l.jsx("circle",{cx:"25",cy:"25",r:"20",fill:"none",className:"path"})})}),iee=()=>{let{t:e,onMenuToggle:t,ArrowRenderer:r,shouldToggleOnHover:n,isLoading:o,disabled:i,onChange:a,labelledBy:s,value:c,isOpen:u,defaultIsOpen:d,ClearSelectedIcon:f,closeOnChangedValue:g}=xd();P.useEffect(()=>{g&&x(!1)},[c]);let[p,m]=P.useState(!0),[h,x]=P.useState(d),[v,y]=P.useState(!1),C=r||ree,T=P.useRef();WX(()=>{t&&t(h)},[h]),P.useEffect(()=>{d===void 0&&typeof u=="boolean"&&(m(!1),x(u))},[u]);let N=K=>{var B;["text","button"].includes(K.target.type)&&[tr.SPACE,tr.ENTER].includes(K.code)||(p&&(K.code===tr.ESCAPE?(x(!1),(B=T==null?void 0:T.current)==null||B.focus()):x(!0)),K.preventDefault())};nu([tr.ENTER,tr.ARROW_DOWN,tr.SPACE,tr.ESCAPE],N,{target:T});let j=K=>{p&&n&&x(K)},I=()=>!v&&y(!0),$=K=>{!K.currentTarget.contains(K.relatedTarget)&&p&&(y(!1),x(!1))},w=()=>j(!0),U=()=>j(!1),L=()=>{p&&x(o||i?!1:!h)},q=K=>{K.stopPropagation(),a([]),p&&x(!1)};return l.jsxs("div",{tabIndex:0,className:"dropdown-container","aria-labelledby":s,"aria-expanded":h,"aria-readonly":!0,"aria-disabled":i,ref:T,onFocus:I,onBlur:$,onMouseEnter:w,onMouseLeave:U,children:[l.jsxs("div",{className:"dropdown-heading",onClick:L,children:[l.jsx("div",{className:"dropdown-heading-value",children:l.jsx(nee,{})}),o&&l.jsx(oee,{}),c.length>0&&f!==null&&l.jsx("button",{type:"button",className:"clear-selected-button",onClick:q,disabled:i,"aria-label":e("clearSelected"),children:f||l.jsx(lj,{})}),l.jsx(C,{expanded:h})]}),h&&l.jsx("div",{className:"dropdown-content",children:l.jsx("div",{className:"panel-content",children:l.jsx(tee,{})})})]})},aee=iee,see=e=>l.jsx(VX,{props:e,children:l.jsx("div",{className:`rmsc ${e.className||"multi-select"}`,children:l.jsx(aee,{})})}),ou=see,jy=Yi,lee=Pm,cee=zr,Ty=jy?jy.isConcatSpreadable:void 0;function uee(e){return cee(e)||lee(e)||!!(Ty&&e&&e[Ty])}var dee=uee,fee=Um,gee=dee;function uj(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=gee),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?uj(s,t-1,r,n,o):fee(o,s):n||(o[o.length]=s)}return o}var pee=uj,mee=pee;function hee(e){var t=e==null?0:e.length;return t?mee(e,1):[]}var vee=hee;const Ut=ht(vee),xee=e=>{const t=m=>{let h=m.split(";;;");return h=h.filter(function(v){return v}),h.map(v=>{v.replace(/\s/g,"");const y={};return y.label=A(D(v)),y.value=v,y})},r=e.check;let n=e.opts.id;const o=A(D(e.opts.label))||"";let i=e.opts.options.split(";;;")||[];i=i.map(m=>A(D(m.trim())));const a=A(D(e.opts.note))||"";let s=!0;(a.length<1||a==="")&&(s=!1);let[c,u]=Ee(n,[]);const[d,f]=P.useState({bgColor:"whitesmoke",border:"none"}),g=m=>{const h=JSON.parse(localStorage.getItem("resultsSurvey"))||{};u(m);let x=Ut(i);if(m.length!==0){let v="";for(let y=0;y<m.length;y++){let C=m[y].value.trim(),T=x.indexOf(C);y===0?v+=T+1:v+=","+(T+1)}h[`itemNum${e.opts.itemNum}`]=v}else e.opts.required===!0||e.opts.required==="true"?h[`itemNum${e.opts.itemNum}`]="no-*?*-response":h[`itemNum${e.opts.itemNum}`]="no response";localStorage.setItem("resultsSurvey",JSON.stringify(h))};let p=!1;return c.length>0&&(p=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&r===!0&&p===!1?f({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):f({bgColor:"whitesmoke",border:"none"})},[r,p,e.opts.required]),s?l.jsxs(Oy,{bgColor:d.bgColor,border:d.border,children:[l.jsx(Iy,{children:l.jsx("div",{children:o})}),l.jsx(yee,{id:"noteText",children:l.jsx("div",{children:a})}),l.jsx(ou,{className:"multiselect",options:t(e.opts.options),labelledBy:"Select",onChange:g,value:c})]}):l.jsxs(Oy,{bgColor:d.bgColor,border:d.border,children:[l.jsx(Iy,{children:l.jsx("div",{children:o})}),l.jsx(ou,{className:"multiselect",options:t(e.opts.options),labelledBy:"Select",onChange:g,value:c})]})},Oy=S.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 125px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;

  .multiselect {
    font-size: 16px;
    line-height: 1.1em;
  }
`,Iy=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,yee=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`;function bee(e,t,r,n){for(var o=-1,i=e==null?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}var See=bee;function Cee(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var c=a[e?s:++o];if(r(i[c],c,i)===!1)break}return t}}var wee=Cee,jee=wee,Tee=jee(),Oee=Tee,Iee=Oee,Pee=Xi;function Eee(e,t){return e&&Iee(e,t,Pee)}var $ee=Eee,Nee=Dm;function kee(e,t){return function(r,n){if(r==null)return r;if(!Nee(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&n(a[i],i,a)!==!1;);return r}}var Mee=kee,Aee=$ee,Dee=Mee,Ree=Dee(Aee),Lee=Ree,Fee=Lee;function _ee(e,t,r,n){return Fee(e,function(o,i,a){t(n,o,r(o),a)}),n}var Bee=_ee,zee=_m,Hee=hh,Uee=1,Vee=2;function Wee(e,t,r,n){var o=r.length,i=o,a=!n;if(e==null)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){s=r[o];var c=s[0],u=e[c],d=s[1];if(a&&s[2]){if(u===void 0&&!(c in e))return!1}else{var f=new zee;if(n)var g=n(u,d,c,e,t,f);if(!(g===void 0?Hee(d,u,Uee|Vee,n,f):g))return!1}}return!0}var qee=Wee,Gee=bo;function Kee(e){return e===e&&!Gee(e)}var dj=Kee,Jee=dj,Qee=Xi;function Zee(e){for(var t=Qee(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,Jee(o)]}return t}var Yee=Zee;function Xee(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}var fj=Xee,ete=qee,tte=Yee,rte=fj;function nte(e){var t=tte(e);return t.length==1&&t[0][2]?rte(t[0][0],t[0][1]):function(r){return r===e||ete(r,e,t)}}var ote=nte,ite=zr,ate=Wu,ste=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,lte=/^\w*$/;function cte(e,t){if(ite(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||ate(e)?!0:lte.test(e)||!ste.test(e)||t!=null&&e in Object(t)}var wh=cte,gj=Fm,ute="Expected a function";function jh(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(ute);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(jh.Cache||gj),r}jh.Cache=gj;var dte=jh,fte=dte,gte=500;function pte(e){var t=fte(e,function(n){return r.size===gte&&r.clear(),n}),r=t.cache;return t}var mte=pte,hte=mte,vte=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,xte=/\\(\\)?/g,yte=hte(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(vte,function(r,n,o,i){t.push(o?i.replace(xte,"$1"):n||r)}),t}),bte=yte,Py=Yi,Ste=Zw,Cte=zr,wte=Wu,jte=1/0,Ey=Py?Py.prototype:void 0,$y=Ey?Ey.toString:void 0;function pj(e){if(typeof e=="string")return e;if(Cte(e))return Ste(e,pj)+"";if(wte(e))return $y?$y.call(e):"";var t=e+"";return t=="0"&&1/e==-jte?"-0":t}var Tte=pj,Ote=Tte;function Ite(e){return e==null?"":Ote(e)}var Pte=Ite,Ete=zr,$te=wh,Nte=bte,kte=Pte;function Mte(e,t){return Ete(e)?e:$te(e,t)?[e]:Nte(kte(e))}var Th=Mte,Ate=Wu,Dte=1/0;function Rte(e){if(typeof e=="string"||Ate(e))return e;var t=e+"";return t=="0"&&1/e==-Dte?"-0":t}var Xs=Rte,Lte=Th,Fte=Xs;function _te(e,t){t=Lte(t,e);for(var r=0,n=t.length;e!=null&&r<n;)e=e[Fte(t[r++])];return r&&r==n?e:void 0}var Oh=_te,Bte=Oh;function zte(e,t,r){var n=e==null?void 0:Bte(e,t);return n===void 0?r:n}var Hte=zte;function Ute(e,t){return e!=null&&t in Object(e)}var Vte=Ute,Wte=Th,qte=Pm,Gte=zr,Kte=$m,Jte=Nm,Qte=Xs;function Zte(e,t,r){t=Wte(t,e);for(var n=-1,o=t.length,i=!1;++n<o;){var a=Qte(t[n]);if(!(i=e!=null&&r(e,a)))break;e=e[a]}return i||++n!=o?i:(o=e==null?0:e.length,!!o&&Jte(o)&&Kte(a,o)&&(Gte(e)||qte(e)))}var Yte=Zte,Xte=Vte,ere=Yte;function tre(e,t){return e!=null&&ere(e,t,Xte)}var rre=tre,nre=hh,ore=Hte,ire=rre,are=wh,sre=dj,lre=fj,cre=Xs,ure=1,dre=2;function fre(e,t){return are(e)&&sre(t)?lre(cre(e),t):function(r){var n=ore(r,e);return n===void 0&&n===t?ire(r,e):nre(t,n,ure|dre)}}var gre=fre;function pre(e){return e}var mre=pre;function hre(e){return function(t){return t==null?void 0:t[e]}}var vre=hre,xre=Oh;function yre(e){return function(t){return xre(t,e)}}var bre=yre,Sre=vre,Cre=bre,wre=wh,jre=Xs;function Tre(e){return wre(e)?Sre(jre(e)):Cre(e)}var Ore=Tre,Ire=ote,Pre=gre,Ere=mre,$re=zr,Nre=Ore;function kre(e){return typeof e=="function"?e:e==null?Ere:typeof e=="object"?$re(e)?Pre(e[0],e[1]):Ire(e):Nre(e)}var mj=kre,Mre=See,Are=Bee,Dre=mj,Rre=zr;function Lre(e,t){return function(r,n){var o=Rre(r)?Mre:Are,i=t?t():{};return o(r,e,Dre(n),i)}}var Fre=Lre,_re=Bm,Bre=Fre,zre=Object.prototype,Hre=zre.hasOwnProperty,Ure=Bre(function(e,t,r){Hre.call(e,r)?++e[r]:_re(e,r,1)}),Vre=Ure;const ur=ht(Vre),Wre=e=>{const t=L=>{let q=L.split(";;;");return q=q.filter(function(K){return K}),q.map(K=>!1),q},r=e.check,n=t(e.opts.options),o=n.length,i=`question${e.opts.itemNum}`;let a=e.opts.id;const s=A(D(e.opts.label))||"",c=A(D(e.opts.note))||"";let u=!0;(c.length<1||c==="")&&(u=!1);let d=e.opts.other;d==="true"||d===!0?d=!0:d=!1;let[f,g]=Ee(a,new Array(n.length).fill(!1));const[p,m]=P.useState({bgColor:"whitesmoke",border:"none"});let[h,x]=P.useState("no input"),[v,y]=P.useState(!0),[C,T]=P.useState([]);const N=L=>{const q=JSON.parse(localStorage.getItem("resultsSurvey"));L=parseInt(L,10),L===+o-1?y(!1):y(!0);const K=f.map((Y,k)=>k===L?!Y:Y);g(K);let B=K.reduce((Y="",k,_)=>k===!0?Y+(_+1).toString()+",":Y,"");B.charAt(B.length-1)===","&&(B=B.substr(0,B.length-1)),T(B);let J=B.split(",");+J[J.length-1]==+o&&d===!0?h!==""?q[`itemNum${e.opts.itemNum}`]=`${B}-${h}`:q[`itemNum${e.opts.itemNum}`]=`${B}-no input`:q[`itemNum${e.opts.itemNum}`]=B,B===""&&(e.opts.required===!0||e.opts.required==="true"?q[`itemNum${e.opts.itemNum}`]="no-*?*-response":q[`itemNum${e.opts.itemNum}`]="no response"),localStorage.setItem("resultsSurvey",JSON.stringify(q))},j=L=>{const q=JSON.parse(localStorage.getItem("resultsSurvey"));let K="no input";if(L.target.value!==""){K=kt(L.target.value.trim());const B=`${C}-${K}`;q[`itemNum${e.opts.itemNum}`]=B}else{const B=`${C}-no input`;q[`itemNum${e.opts.itemNum}`]=B}x(()=>kt(L.target.value.trim())),localStorage.setItem("resultsSurvey",JSON.stringify(q))};let I=!1,$=Ut([...f]);return(ur($)[!0]||0)===0&&(I=!0),P.useEffect(()=>((e.opts.required===!0||e.opts.required==="true")&&r===!0&&I?m({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):m({bgColor:"whitesmoke",border:"none"}),()=>{}),[r,I,e.opts.required,o,h,e.opts.itemNum]),u?l.jsxs(Ny,{bgColor:p.bgColor,border:p.border,children:[l.jsx(ky,{children:l.jsx("div",{children:s})}),l.jsx(qre,{id:"noteText",children:l.jsx("div",{children:c})}),l.jsxs(My,{children:[n.map((L,q)=>l.jsxs("div",{children:[l.jsx("input",{id:`${L}-${q}`,type:"checkbox",value:L,name:i,checked:f[q],onChange:()=>N(q)}),l.jsx("label",{htmlFor:`${L}-${q}`,children:L})]},te())),d&&l.jsx(Ay,{disabled:v,onChange:L=>j(L)})]})]}):l.jsxs(Ny,{bgColor:p.bgColor,border:p.border,children:[l.jsx(ky,{children:l.jsx("div",{children:s})}),l.jsxs(My,{children:[n.map((L,q)=>l.jsxs("div",{children:[l.jsx("input",{id:`${L}-${q}`,type:"checkbox",value:L,name:i,checked:f[q],onChange:()=>N(q)}),l.jsx("label",{htmlFor:`${L}-${q}`,children:L})]},te())),d&&l.jsx(Ay,{disabled:v,onChange:L=>j(L)})]})]})},Ny=S.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 150px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,ky=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,My=S.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  min-height: 120px;
  font-size: 16px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,qre=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,Ay=S.input`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  height: 50px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding-left: 5px;
  padding-right: 5px;
`,Gre=e=>{const t=N=>{let j=N.split(";;;");return j=j.filter(function(I){return I}),j.length===0&&(j=["",""]),j},r=t(e.opts.options),n=e.check,o=r.length,i=`itemNum${e.opts.itemNum}`,a=A(D(e.opts.label))||"",s=A(D(e.opts.note))||"";let c=!0;(s.length<1||s==="")&&(c=!1);let[u,d]=Ee(i,Array.from({length:o},()=>Array.from({length:2},()=>!1)));const[f,g]=P.useState({bgColor:"whitesmoke",border:"none"}),p=t(e.opts.scale),m=(N,j)=>{const I=JSON.parse(localStorage.getItem("resultsSurvey")),$=[],w=u.map(function(J,Y){return N===Y?(J.map(function(k,_){return j===_?($.push(!0),null):($.push(!1),null)}),$):J});d(w);let U=u.length,L=Ut([...w]),K=ur(L)[!0]||0,B="";w.forEach((J,Y)=>{let k=J[0]?"1":"2";J.includes(!0)||(k="nr"),Y===0?B+=k:B+=","+k}),I[`itemNum${e.opts.itemNum}`]=B,K!==U&&(e.opts.required===!0||e.opts.required==="true")&&(I[`itemNum${e.opts.itemNum}`]="no-*?*-response"),localStorage.setItem("resultsSurvey",JSON.stringify(I))};let h=!1,x=u.length,v=Ut([...u]);(ur(v)[!0]||0)<x&&(h=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&n===!0&&h?g({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):g({bgColor:"whitesmoke",border:"none"})},[n,h,e.opts.required]);const T=()=>{const N=r.map((j,I)=>{const $=A(D(j))||"";return l.jsxs(Kre,{indexVal:I,children:[l.jsx(Jre,{children:$},te()),l.jsx(_y,{id:`Q-${I}`,type:"radio",value:1,name:`itemNum${e.opts.itemNum}-${I+1}`,onChange:w=>m(I,0),checked:u[I][0]},te()),l.jsx(_y,{id:`Q2-${I}`,type:"radio",value:2,name:`itemNum${e.opts.itemNum}-${I+1}`,onChange:w=>m(I,1),checked:u[I][1]},te())]},te())});return l.jsx("div",{children:N})};return c?l.jsxs(Dy,{bgColor:f.bgColor,border:f.border,children:[l.jsx(Ry,{children:l.jsx("div",{children:a})}),l.jsx(Qre,{id:"noteText",children:l.jsx("div",{children:s})}),l.jsxs(Ly,{children:[l.jsxs(Fy,{children:[l.jsx("div",{}),l.jsx(Dl,{children:l.jsx("div",{children:A(D(p[0]))})}),l.jsx(Dl,{children:l.jsx("div",{children:A(D(p[1]))})})]}),l.jsx(T,{})]})]}):l.jsxs(Dy,{bgColor:f.bgColor,border:f.border,children:[l.jsx(Ry,{children:l.jsx("div",{children:a})}),l.jsxs(Ly,{children:[l.jsxs(Fy,{children:[l.jsx("div",{}),l.jsx(Dl,{children:l.jsx("div",{children:A(D(p[0]))})}),l.jsx(Dl,{children:l.jsx("div",{children:A(D(p[1]))})})]}),l.jsx(T,{})]})]})},Dy=S.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Ry=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,Ly=S.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 16px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,Kre=S.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 100px 100px 1fr;
  margin-bottom: 17px;
  padding-left: 5px;
  padding-bottom: 8px;
  height: 40px;
  align-items: end;
  justify-items: left;
  // align-items: left;
  background-color: ${e=>e.indexVal%2?"white":"#ececec"};
  &:hover {
    background-color: rgba(131, 202, 254, 0.4);
  }
`,Fy=S.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 100px 100px 1fr;
  margin-bottom: 7px;
`,Dl=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,_y=S.input`
  display: flex;
  justify-self: center;
  align-self: center;
  border: 0px;
  width: 28px;
  height: 1.4em;
  justify-items: center;
  align-items: center;
`,Jre=S.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,Qre=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,Zre=e=>{const r=(T=>{let N=T.split(";;;");return N=N.filter(function(j){return j}),N})(e.opts.options),n=r.length,o=`itemNum${e.opts.itemNum}`,i=e.check,a=A(D(e.opts.note))||"";let s=!0;(a.length<1||a==="")&&(s=!1);const c=A(D(e.opts.label))||"";let[u,d]=Ee(o,Array.from({length:n},()=>Array.from({length:5},()=>!1)));const[f,g]=P.useState({bgColor:"whitesmoke",border:"none"}),p=(T,N)=>{const j=JSON.parse(localStorage.getItem("resultsSurvey")),I=[],$=u.map(function(B,J){return T===J?(B.map(function(Y,k){return N===k?(I.push(!0),null):(I.push(!1),null)}),I):B});d($);let w=u.length,U=Ut([...$]),q=ur(U)[!0]||0,K="";$.forEach((B,J)=>{let Y=$[J].indexOf(!0)+1;B.includes(!0)||(Y="nr"),J===0?K+=Y:K+=","+Y}),j[`itemNum${e.opts.itemNum}`]=K,q!==w&&(e.opts.required===!0||e.opts.required==="true")&&(j[`itemNum${e.opts.itemNum}`]="no-*?*-response"),localStorage.setItem("resultsSurvey",JSON.stringify(j))};let m=!1,h=u.length,x=Ut([...u]);(ur(x)[!0]||0)<h&&(m=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&i===!0&&m?g({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):g({bgColor:"whitesmoke",border:"none"})},[i,m,e.opts.required]);const C=()=>{const T=r.map((N,j)=>{const I=A(D(N));return l.jsxs(Yre,{indexVal:j,children:[l.jsx(Xre,{children:I},te()),l.jsx(ka,{id:`Q-${j}`,type:"radio",value:1,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,0),checked:u[j][0]},te()),l.jsx(ka,{id:`Q2-${j}`,type:"radio",value:2,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,1),checked:u[j][1]},te()),l.jsx(ka,{id:`Q3-${j}`,type:"radio",value:3,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,2),checked:u[j][2]},te()),l.jsx(ka,{id:`Q4-${j}`,type:"radio",value:4,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,3),checked:u[j][3]},te()),l.jsx(ka,{id:`Q5-${j}`,type:"radio",value:5,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,4),checked:u[j][4]},te())]},te())});return l.jsx("div",{children:T})};return s?l.jsxs(By,{bgColor:f.bgColor,border:f.border,children:[l.jsx(zy,{children:l.jsx("div",{children:c})}),l.jsx(ene,{id:"noteText",children:l.jsx("div",{children:a})}),l.jsxs(Hy,{children:[l.jsxs(Uy,{children:[l.jsx("div",{}),l.jsx(hn,{children:"1"}),l.jsx(hn,{children:"2"}),l.jsx(hn,{children:"3"}),l.jsx(hn,{children:"4"}),l.jsx(hn,{children:"5"})]}),l.jsx(C,{})]})]}):l.jsxs(By,{bgColor:f.bgColor,border:f.border,children:[l.jsx(zy,{children:l.jsx("div",{children:c})}),l.jsxs(Hy,{children:[l.jsxs(Uy,{children:[l.jsx("div",{}),l.jsx(hn,{children:"1"}),l.jsx(hn,{children:"2"}),l.jsx(hn,{children:"3"}),l.jsx(hn,{children:"4"}),l.jsx(hn,{children:"5"})]}),l.jsx(C,{})]})]})},By=S.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,zy=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,Hy=S.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,Yre=S.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 50px 50px 50px 50px 50px 1fr;
  margin-bottom: 17px;
  padding-bottom: 8px;
  height: 40px;
  background-color: ${e=>e.indexVal%2?"white":"#ececec"};
  font-size: 16px;
  align-items: end;
  &:hover {
    background-color: rgba(131, 202, 254, 0.4);
  }
`,Uy=S.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 50px 50px 50px 50px 50px 1fr;
  margin-bottom: 7px;
  align-items: end;
`,ka=S.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 0px;
  width: 25px;
  height: 1.4em;
`,hn=S.div`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
`,Xre=S.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,ene=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,tne=e=>{const r=(T=>{let N=T.split(";;;");return N=N.filter(function(j){return j}),N})(e.opts.options),n=r.length,o=`itemNum${e.opts.itemNum}`,i=e.check,a=A(D(e.opts.label))||"",s=A(D(e.opts.note))||"";let c=!0;(s.length<1||s==="")&&(c=!1);const[u,d]=Ee(o,Array.from({length:n},()=>Array.from({length:10},()=>!1))),[f,g]=P.useState({bgColor:"whitesmoke",border:"none"}),p=(T,N)=>{const j=JSON.parse(localStorage.getItem("resultsSurvey")),I=[],$=u.map(function(B,J){return T===J?(B.map(function(Y,k){return N===k?(I.push(!0),null):(I.push(!1),null)}),I):B});d($);let w=u.length,U=Ut([...$]),q=ur(U)[!0]||0,K="";$.forEach((B,J)=>{let Y=$[J].indexOf(!0)+1;B.includes(!0)||(Y="nr"),J===0?K+=Y:K+=","+Y}),j[`itemNum${e.opts.itemNum}`]=K,q!==w&&(e.opts.required===!0||e.opts.required==="true")&&(j[`itemNum${e.opts.itemNum}`]="no-*?*-response"),localStorage.setItem("resultsSurvey",JSON.stringify(j))};let m=!1,h=u.length,x=Ut([...u]);(ur(x)[!0]||0)<h&&(m=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&i===!0&&m?g({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):g({bgColor:"whitesmoke",border:"none"})},[i,m,e.opts.required]);const C=()=>{const T=r.map((N,j)=>{const I=A(D(N));return l.jsxs(rne,{indexVal:j,children:[l.jsx(nne,{children:I},te()),l.jsx(vn,{id:`Q-${j}`,type:"radio",value:1,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,0),checked:u[j][0]},te()),l.jsx(vn,{id:`Q2-${j}`,type:"radio",value:2,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,1),checked:u[j][1]},te()),l.jsx(vn,{id:`Q3-${j}`,type:"radio",value:3,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,2),checked:u[j][2]},te()),l.jsx(vn,{id:`Q4-${j}`,type:"radio",value:4,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,3),checked:u[j][3]},te()),l.jsx(vn,{id:`Q5-${j}`,type:"radio",value:5,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,4),checked:u[j][4]},te()),l.jsx(vn,{id:`Q6-${j}`,type:"radio",value:6,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,5),checked:u[j][5]},te()),l.jsx(vn,{id:`Q7-${j}`,type:"radio",value:7,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,6),checked:u[j][6]},te()),l.jsx(vn,{id:`Q8-${j}`,type:"radio",value:8,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,7),checked:u[j][7]},te()),l.jsx(vn,{id:`Q9-${j}`,type:"radio",value:9,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,8),checked:u[j][8]},te()),l.jsx(vn,{id:`Q10-${j}`,type:"radio",value:10,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,9),checked:u[j][9]},te())]},te())});return l.jsx("div",{children:T})};return c?l.jsxs(Vy,{bgColor:f.bgColor,border:f.border,children:[l.jsx(Wy,{children:l.jsx("div",{children:a})}),l.jsx(one,{id:"noteText",children:l.jsx("div",{children:s})}),l.jsxs(qy,{children:[l.jsxs(Gy,{children:[l.jsx("div",{}),l.jsx(gt,{children:"1"}),l.jsx(gt,{children:"2"}),l.jsx(gt,{children:"3"}),l.jsx(gt,{children:"4"}),l.jsx(gt,{children:"5"}),l.jsx(gt,{children:"6"}),l.jsx(gt,{children:"7"}),l.jsx(gt,{children:"8"}),l.jsx(gt,{children:"9"}),l.jsx(gt,{children:"10"})]}),l.jsx(C,{})]})]}):l.jsxs(Vy,{bgColor:f.bgColor,border:f.border,children:[l.jsx(Wy,{children:l.jsx("div",{children:a})}),l.jsxs(qy,{children:[l.jsxs(Gy,{children:[l.jsx("div",{}),l.jsx(gt,{children:"1"}),l.jsx(gt,{children:"2"}),l.jsx(gt,{children:"3"}),l.jsx(gt,{children:"4"}),l.jsx(gt,{children:"5"}),l.jsx(gt,{children:"6"}),l.jsx(gt,{children:"7"}),l.jsx(gt,{children:"8"}),l.jsx(gt,{children:"9"}),l.jsx(gt,{children:"10"})]}),l.jsx(C,{})]})]})},Vy=S.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Wy=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,qy=S.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,rne=S.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 1fr;
  margin-bottom: 17px;
  font-size: 16px;
  align-items: end;
  padding-bottom: 8px;
  height: 40px;
  background-color: ${e=>e.indexVal%2?"white":"#ececec"};
  border-radius: 3px;
  &:hover {
    background-color: rgba(131, 202, 254, 0.4);
  }
`,Gy=S.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 1fr;
  margin-bottom: 7px;
  align-items: end;
`,gt=S.div`
  display: flex;
  justify-self: center;
  align-items: center;
  text-align: center;
`,vn=S.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 0px;
  width: 28px;
  height: 1.4em;
  padding-left: 3px;
`,nne=S.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,one=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,ine=e=>{const t=e.check,r=`itemNum${e.opts.itemNum}`,n=A(D(e.opts.label))||"";let[o,i]=Ee(r,"");const[a,s]=P.useState({bgColor:"whitesmoke",border:"none"}),u=(h=>h.split(";;;"))(e.opts.scale),d=h=>{const x=JSON.parse(localStorage.getItem("resultsSurvey"));x[`itemNum${e.opts.itemNum}`]=+h.target.value+1,localStorage.setItem("resultsSurvey",JSON.stringify(x))};let f=!1;o.length===0&&(f=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&t===!0&&f?s({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):s({bgColor:"whitesmoke",border:"none"})},[t,f,e.opts.required]);const g=u.map(h=>l.jsx(dne,{children:l.jsx("div",{children:A(D(h))})},te())),p=({value:h,checked:x,setter:v})=>l.jsx(l.Fragment,{children:l.jsx("input",{type:"radio",checked:x===h,onChange:()=>v(h),value:h})}),m=()=>{const h=u.map((x,v)=>l.jsx(fne,{className:"radioButtons",onChange:y=>d(y),children:l.jsx(p,{className:"radioInput",value:v,checked:o,setter:i})},te()));return l.jsx(cne,{className:"buttonContainer",cols:u.length,children:h})};return l.jsxs(ane,{bgColor:a.bgColor,border:a.border,children:[l.jsx(sne,{children:l.jsx("div",{children:n})}),l.jsxs(lne,{className:"radioContainer",children:[l.jsx(une,{className:"ratingTitle",cols:u.length,children:g}),l.jsx(m,{})]})]})},ane=S.div`
  width: 90vw;
  padding: 12px 20px 0px 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 170px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,sne=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 18px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,lne=S.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 10px 20px 0px 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 16px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  label {
    margin-left: 8px;
  }
`,cne=S.div`
  display: inline-grid;
  grid-template-columns: ${e=>`repeat(${e.cols}, ${100/e.cols}%)`};
  margin-bottom: 3px;
  justify-items: center;
  align-items: center;
`,une=S.div`
  display: inline-grid;
  grid-template-columns: ${e=>`repeat(${e.cols}, ${100/e.cols}%)`};
`,dne=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`,fne=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  margin-bottom: 5px;
  padding: 5px;
  width: 25px;
  input {
    height: 1.5em;
    width: 20px;
  }
`,gne=e=>{P.useEffect(()=>{const r=JSON.parse(localStorage.getItem("resultsSurvey"));r[`itemNum${e.opts.itemNum}`]="info. - na"},[e.opts.itemNum]);const t=A(D(e.opts.options))||"";return l.jsx(pne,{children:l.jsx(mne,{backgroundColor:e.opts.background,children:l.jsx("div",{children:t})})})},pne=S.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  background-color: whitesmoke;
  min-height: 50px;
`,mne=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  min-height: 50px;
  font-size: 18px;
  text-align: center;
  background-color: ${e=>e.backgroundColor||"lightgray"};
  width: 100%;
  border-radius: 3px;
`,hne=e=>e.langObj,vne=e=>e.triggerSurveyPreventNavModal,xne=e=>e.setTriggerSurveyPreventNavModal,yne=()=>{const e=X(hne),t=E(vne),r=E(xne),n=A(D(e.surveyPreventNavModalHead))||"",o=A(D(e.surveyPreventNavModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(bne,{children:n}),l.jsx("hr",{}),l.jsx(Sne,{children:o})]})},bne=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,Sne=S.div`
  margin-top: 15px;
`,Cne=e=>e.langObj,wne=e=>e.triggerSurveyModal,jne=e=>e.setTriggerSurveyModal,Tne=()=>{const e=X(Cne),t=E(wne),r=E(jne),n=A(D(e.surveyModalHead))||"",o=A(D(e.surveyModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(One,{children:n}),l.jsx("hr",{}),l.jsx(Ine,{children:o})]})},One=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,Ine=S.div`
  margin-top: 15px;
  font-weight: normal;
`,Pne=e=>e.langObj,Ene=e=>e.configObj,$ne=e=>e.surveyQuestionObjArray,Nne=e=>e.requiredAnswersObj,kne=e=>e.setRequiredAnswersObj,Mne=e=>e.setCurrentPage,Ane=e=>e.checkRequiredQuestionsComplete,Dne=e=>e.setDisplayNextButton,Ky=()=>{const e=X(Ene),t=X(Pne),r=X(Nne),n=X($ne),o=X(kne),i=E(Mne),a=E(Ane),s=E(Dne),c=e.headerBarColor,u=n,d=A(D(t.surveyHeader))||"";s(!0),P.useEffect(()=>{let p=Object.keys(r);for(let m=0;m<p.length;m++)r[p[m]]="no response";o(r)},[o,r]);const f=P.useRef(null);P.useEffect(()=>(f.current=Date.now(),(async()=>{await i("survey"),localStorage.setItem("currentPage","survey")})(),()=>{jr(f.current,"surveyPage","surveyPage")}),[i]);const g=()=>u?u.map(m=>m.type==="text"?l.jsx(MX,{check:a,opts:m},te()):m.type==="textarea"?l.jsx(DX,{check:a,opts:m},te()):m.type==="radio"?l.jsx(LX,{check:a,opts:m},te()):m.type==="select"?l.jsx(xee,{check:a,opts:m},te()):m.type==="checkbox"?l.jsx(Wre,{check:a,opts:m},te()):m.type==="rating2"?l.jsx(Gre,{check:a,opts:m},te()):m.type==="likert"?l.jsx(ine,{check:a,opts:m},te()):m.type==="rating5"?l.jsx(Zre,{check:a,opts:m},te()):m.type==="rating10"?l.jsx(tne,{check:a,opts:m},te()):m.type==="information"?l.jsx(gne,{opts:m},te()):null):l.jsx(Fne,{children:"No questions added."});return l.jsxs(ae.Fragment,{children:[l.jsx(Fn,{}),l.jsx(Tne,{}),l.jsx(yne,{}),l.jsx(Lne,{background:c,children:d}),l.jsx(Rne,{children:l.jsx(g,{})})]})},Rne=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
  margin-top: 50px;
`,Lne=S.div`
  width: 100vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 28px;
  position: fixed;
  top: 0;
  z-index: 9999;
`,Fne=S.div`
  margin-top: 50px;
  font-size: 24px;
  font-weight: bold;
`;function _ne(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var Bne=_ne,zne=Oh,Hne=Im;function Une(e,t){return t.length<2?e:zne(e,Hne(t,0,-1))}var Vne=Une,Wne=Th,qne=Bne,Gne=Vne,Kne=Xs;function Jne(e,t){return t=Wne(t,e),e=Gne(e,t),e==null||delete e[Kne(qne(t))]}var Qne=Jne,Zne=Qne,Yne=$m,Xne=Array.prototype,eoe=Xne.splice;function toe(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;Yne(o)?eoe.call(e,o,1):Zne(e,o)}}return e}var roe=toe,noe=mj,ooe=roe;function ioe(e,t){var r=[];if(!(e&&e.length))return r;var n=-1,o=[],i=e.length;for(t=noe(t);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return ooe(e,o),r}var aoe=ioe;const Fo=ht(aoe),hj=(e,t)=>{e.statementList=qu(e.statementList);let r=e.statementList.filter(f=>f.pinkChecked===!0),n=e.statementList.filter(f=>f.yellowChecked===!0),o=e.statementList.filter(f=>f.greenChecked===!0),i=0,a=0,s=0,c=0,u=0,d=0;for(;r.length>0&&i<50;)t.forEach(f=>{const g=f[0],p=f[1];if(e.vCols[g].length<p)do{if(r.length>0){let m=r.pop();if(m){let h=m.id;e.vCols[g].unshift(m),Fo(e.statementList,x=>x.id===h)}}a=a+1}while(r.length>0&&e.vCols[g].length<p&&a<50);i=i+1});for(;n.length>0&&s<50;)t.forEach(f=>{const g=f[0],p=f[1];if(e.vCols[g].length<p)do{if(n.length>0){let m=n.pop();if(m){let h=m.id;e.vCols[g].push(m),Fo(e.statementList,x=>x.id===h)}}c=c+1}while(n.length>0&&e.vCols[g].length<p&&c<50);s=s+1});for(;o.length>0&&u<50;)t.forEach(f=>{const g=f[0],p=f[1];if(e.vCols[g].length<p)do{if(o.length>0){let m=o.pop();if(m){let h=m.id;e.vCols[g].unshift(m),Fo(e.statementList,x=>x.id===h)}}d=d+1}while(o.length>0&&e.vCols[g].length<p&&d<50);u=u+1});return e},soe=e=>e.langObj,loe=e=>e.triggerConfirmationFinishedModal,coe=e=>e.setTriggerConfirmationFinishedModal,Jy=()=>{const e=X(soe),t=E(loe),r=E(coe),n=A(D(e.thinningConfirmModalHead))||"",o=A(D(e.thinningConfirmModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(uoe,{children:n}),l.jsx("hr",{}),l.jsx(doe,{children:o})]})},uoe=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,doe=S.div`
  margin-top: 15px;
`,foe=e=>e.langObj,goe=e=>e.triggerThinningPreventNavModal,poe=e=>e.setTriggerThinningPreventNavModal,Qy=()=>{const e=X(foe),t=E(goe),r=E(poe),n=A(D(e.thinningPreventNavModalHead))||"",o=A(D(e.thinningPreventNavModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(moe,{children:n}),l.jsx("hr",{}),l.jsx(hoe,{children:o})]})},moe=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,hoe=S.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,voe=e=>e.langObj,xoe=e=>{const t=X(voe),r=A(D(t.numStatementsToSelect))||"",n=A(D(t.currentlySelectedNumber))||"";return l.jsxs(yoe,{children:[l.jsxs(Coe,{children:[e.part1,e.part2,e.part3]}),l.jsxs(boe,{maxNum:e.maxNum,selectedNum:e.selectedNum,children:[`${r}: ${e.maxNum}`," "]}),l.jsxs(Soe,{maxNum:e.maxNum,selectedNum:e.selectedNum,children:[`${n}: ${e.selectedNum}`," "]})]})},yoe=S.div`
  display: flex;
  flex-direction: column;
  width: 54vw;
  font-size: clamp(1.6rem, 1.35vw, 5rem);

  justify-content: center;
  align-items: center;
  // font-size: 1.6vw;
  font-weight: normal;
  text-align: center;
  color: black;
`,boe=S.span`
  width: 40vw;
  background-color: ${e=>e.selectedNum===e.maxNum?"white":"rgb(249, 249, 0)"};
  padding: 5px;
  margin-top: 30px;
  font-style: italic;
  font-size: clamp(1.3rem, 1.35vw, 5rem);

  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`,Soe=S.span`
  width: 40vw;
  background-color: ${e=>e.selectedNum===e.maxNum?"white":e.selectedNum>e.maxNum?"#ff8080":"rgb(249, 249, 0)"};
  padding: 5px;
  margin-top: 0px;
  font-style: italic;
  font-size: clamp(1.3rem, 1.35vw, 5rem);

  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`,Coe=S.div`
  display: flex;
  flex-direction: column;
  word-wrap: break-word;
  word-break: break-word;
  overflow-wrap: break-word;
  gap: 30px;
  width: 54vw;
  justify-content: center;
  align-items: center;
  font-size: clamp(1.6rem, 1.35vw, 5rem);
  font-weight: normal;
  text-align: center;
  color: black;

  div {
    width: 50vw;
    word-wrap: break-word;
    word-break: break-word;
    overflow-wrap: break-word;
  }
`,woe=e=>{let t=JSON.parse(localStorage.getItem("newCols"));e.forEach(r=>{let n=r.id,o=r.targetcol;t.statementList.forEach(i=>{i.id===n&&(t.vCols[o].push(i),Fo(t.statementList,a=>a.id===n))})}),localStorage.setItem("newCols",JSON.stringify(t))},joe=e=>{let t=JSON.parse(localStorage.getItem("newCols"));e.forEach(r=>{let n=r.id,o=r.targetcol;t.statementList.forEach(i=>{i.id===n&&(t.vCols[o].push(i),Fo(t.statementList,a=>a.id===n))})}),localStorage.setItem("newCols",JSON.stringify(t))},Toe=e=>e.langObj,Ooe=e=>e.triggerThinHelpModal,Ioe=e=>e.setTriggerThinHelpModal,Zy=()=>{const e=X(Toe),t=E(Ooe),r=E(Ioe),n=A(D(e.thinningHelpModalHead)),o=A(D(e.thinningHelpModalText)),i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(Poe,{children:n}),l.jsx("hr",{}),l.jsx(Eoe,{children:o})]})},Poe=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,Eoe=S.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,$oe=e=>e.langObj,Noe=e=>e.configObj,koe=e=>e.setProgressScore,Moe=e=>e.setCurrentPage,Aoe=e=>e.setDisplayNextButton,Doe=e=>e.setIsThinningFinished,Roe=e=>e.isLeftSideFinished,Loe=e=>e.isRightSideFinished,Foe=e=>e.cardFontSizeThin,_oe=e=>e.cardHeightThin,Yy=()=>{var Y,k,_,z,V,Q,H,G,Z;const e=X($oe),t=X(Noe),r=E(koe),n=E(Moe),o=E(Aoe),i=E(Doe),a=E(Roe),s=E(Loe),c=E(Foe),u=E(_oe);let d=A(D(e.initialInstructionPart1))||"",f=A(D(e.initialInstructionPartNeg1))||"",g=A(D(e.initialInstructionPartNeg2))||"",p=A(D(e.initialInstructionPart2))||"",m=A(D(e.initialInstructionPart3))||"",h=A(D(e.thinPageTitle))||"",x=A(D(e.thinPageSubmitButton))||"",v=A(D(e.finalInstructions))||"";P.useEffect(()=>{const W=R=>{(s===!1||a===!1)&&(R.preventDefault(),R.returnValue="")};return window.addEventListener("beforeunload",W),()=>{window.removeEventListener("beforeunload",W)}},[a,s]);let y=!0,[C,T]=Ee("selectedNegItems",JSON.parse(localStorage.getItem("negSorted"))),[N,j]=Ee("selectedPosItems",JSON.parse(localStorage.getItem("posSorted"))),[I,$]=Ee("thinDisplayControllerArray",JSON.parse(localStorage.getItem("thinDisplayControllerArray"))),w=P.useRef({part1:"",part2:"",part3:""}),U;if(((Y=I[0])==null?void 0:Y.side)==="right"&&(((k=I[0])==null?void 0:k.iteration)===1&&(w.current={part1:d,part2:"",part3:m}),((_=I[0])==null?void 0:_.iteration)>1&&(w.current={part1:"",part2:p,part3:m}),U=[...N]),((z=I[0])==null?void 0:z.side)==="left"&&(((V=I[0])==null?void 0:V.iteration)===1&&(w.current={part1:f,part2:"",part3:m}),((Q=I[0])==null?void 0:Q.iteration)>1&&(w.current={part1:"",part2:g,part3:m}),U=[...C]),I.length===0){y=!1,setTimeout(()=>{i(!0)},50);let W=JSON.parse(localStorage.getItem("finalSortColData")),R=JSON.parse(localStorage.getItem("newCols")),O=hj(R,W);localStorage.setItem("columnStatements",JSON.stringify(O))}const L=W=>{var O,b;let R=W.target.getAttribute("data-targetcol");U.forEach(F=>{F.id===W.target.dataset.id&&(F.targetcol=R,F.selected=!F.selected)}),((O=I[0])==null?void 0:O.side)==="right"&&j([...U]),((b=I[0])==null?void 0:b.side)==="left"&&T([...U])},q=()=>{var W,R;if(((W=I[0])==null?void 0:W.side)==="right"){let O=N.filter(F=>F.selected===!0),b=N.filter(F=>F.selected!==!0);localStorage.setItem("posSorted",JSON.stringify(b)),joe(O),I.shift(),$([...I]),j([...b]);return}if(((R=I[0])==null?void 0:R.side)==="left"){let O=C.filter(F=>F.selected===!0),b=C.filter(F=>F.selected!==!0);woe(O),I.shift(),$([...I]),T([...b]);return}};o(!0);let K=0;const B=P.useRef(null);P.useEffect(()=>(B.current=Date.now(),(async()=>{await n("thin"),localStorage.setItem("currentPage","thin"),await r(35)})(),()=>{jr(B.current,"thinningPage","thinningPage")}),[n,r]);let J=(U||[]).map(W=>{var R,O,b;return W.selected===!0&&(K=K+1),l.jsx(Voe,{onClick:L,id:W.id,side:(R=I[0])==null?void 0:R.side,fontSize:c,cardHeight:u,color:W.color,selected:W.selected,"data-targetcol":(O=I[0])==null?void 0:O.targetCol,"data-max":(b=I[0])==null?void 0:b.maxNum,"data-selected":W.selected,"data-id":W.id,children:W.statement},te())});return y===!0?l.jsxs(l.Fragment,{children:[l.jsx(Fn,{}),l.jsx(Jy,{}),l.jsx(Qy,{}),l.jsx(Zy,{}),l.jsx(Xy,{background:t.headerBarColor,children:l.jsx(eb,{children:h})}),l.jsx(tb,{children:l.jsxs(Boe,{children:[l.jsxs(zoe,{children:[l.jsx(xoe,{part1:w.current.part1,part2:w.current.part2,part3:w.current.part3,maxNum:(H=I[0])==null?void 0:H.maxNum,selectedNum:K}),l.jsx(Hoe,{onClick:q,disabled:K!==((G=I[0])==null?void 0:G.maxNum),isActive:K===((Z=I[0])==null?void 0:Z.maxNum),children:x})]}),l.jsx(Uoe,{children:J})]})})]}):l.jsxs(l.Fragment,{children:[l.jsx(Fn,{}),l.jsx(Jy,{}),l.jsx(Qy,{}),l.jsx(Zy,{}),l.jsx(Xy,{background:t.headerBarColor,children:l.jsx(eb,{children:h})}),l.jsx(tb,{children:l.jsx(Woe,{children:l.jsx(qoe,{children:v})})})]})},Xy=S.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${e=>e.background};
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    box-shadow: 0 1px 10px rgba(0, 0, 0, 0.05);
  }
`,eb=S.h1`
  color: white;
  font-weight: 700;
  font-size: clamp(1.2rem, 4vw, 1.75rem);
  margin: 0;
  padding: 1rem 1.5rem;
  text-align: center;
  letter-spacing: -0.025em;

  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
  }
`,tb=S.main`
  padding-top: 60px; /* Account for fixed header */
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`,Boe=S.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
    gap: 1.5rem;
  }
`,zoe=S.section`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(226, 232, 240, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
    border-radius: 12px;
  }
`,Hoe=S.button`
  background: ${e=>e.isActive?"linear-gradient(135deg, #3b82f6 0%, #1e40af 100%)":"linear-gradient(135deg, #e5e7eb 0%, #d1d5db 100%)"};
  color: ${e=>e.isActive?"white":"#6b7280"};
  border: none;
  border-radius: 12px;
  padding: 0.75rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: ${e=>e.isActive?"pointer":"not-allowed"};
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  min-width: 140px;
  box-shadow: ${e=>e.isActive?"0 4px 14px 0 rgba(59, 130, 246, 0.25)":"0 2px 4px 0 rgba(0, 0, 0, 0.05)"};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: ${e=>e.isActive?"0 8px 25px 0 rgba(59, 130, 246, 0.35)":"0 4px 12px 0 rgba(0, 0, 0, 0.1)"};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.625rem 1.5rem;
    font-size: 1rem;
    min-width: 120px;
  }
`,Uoe=S.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 0;
  margin-bottom: 100px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 0.75rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 0.5rem;
  }
`,Voe=S.div`
  background: ${e=>e.selected?"rgb(249, 249, 0)":e.side==="right"?"linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%)":e.side==="left"?"linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)":"linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)"};
  border: ${e=>e.selected?"4px solid darkgray":e.side==="right"?"1px solid #22c55e":e.side==="left"?"1px solid #ef6944":"#e2e8f0"};
  border-radius: 12px;
  padding: 1rem;
  height: ${e=>Math.max(e.cardHeight||120,120)}px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  font-size: ${e=>e.fontSize||14}px;
  font-weight: 500;
  color: #1f2937;
  line-height: 1.4;
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: ${e=>e.selected&&e.side==="right"?"rgba(34, 197, 94, 0.05)":e.selected&&e.side==="left"?"rgba(239, 68, 68, 0.05)":"transparent"};
    border-radius: 10px;
    transition: all 0.2s ease;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    border-color: ${e=>e.selected&&e.side==="right"?"#16a34a":e.selected&&e.side==="left"?"#dc2626":"#94a3b8"};
  }

  &:active {
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.75rem;
    height: ${e=>Math.max((e.cardHeight||120)*.9,100)}px;
    border-radius: 8px;

    &:hover {
      transform: translateY(-2px);
    }
  }
`,Woe=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,qoe=S.div`
  background: white;
  border-radius: 16px;
  padding: 3rem;
  max-width: 600px;
  width: 100%;
  text-align: center;
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: #1f2937;
  line-height: 1.6;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(226, 232, 240, 0.8);

  @media (max-width: 768px) {
    padding: 2rem;
    border-radius: 12px;
  }
`;class Rl extends ae.Component{render(){return l.jsxs(Goe,{children:[" ",l.jsx("h1",{children:"404"})," ",l.jsx("p",{children:"Page doesn't exist"})]})}}const Goe=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`,Koe=e=>{var d,f,g,p,m,h,x,v,y,C,T,N,j,I,$,w,U,L,q,K,B,J,Y,k,_,z,V,Q,H,G,Z,W,R,O,b,F,M,ee,ie,de,ce,fe,Se,le,pe,me,ye,be,xe,je,he,Oe,ke,Ze,Ge,We,ot,Mt,At,un,dt,Vt,dr,ga,pa,ma,Me,He,it,ft,Ke,Zt,dn,Bn,ei,ti,fn,Rh,Lh,Fh,_h,Bh,zh,Hh,Uh,Vh,Wh,qh,Gh,Kh,Jh,Qh,Zh,Yh,Xh,ev,tv,rv,nv,ov,iv,av,sv,lv,cv,uv;const t=e.elements[0].elements,r={};let n,i=t.find(On=>On.attributes.id==="configFileVersion").elements[0].text;r.mapFileVersion=i;let a=[];for(let On=0;On<t.length;On++){let se,ne=t[On],vt=t[On].attributes.id;vt==="survey"&&a.push([...t[On].elements]),"elements"in ne&&(se=(f=(d=t[On])==null?void 0:d.elements[0])==null?void 0:f.text,vt!=="survey"&&(vt==="columnHeadersColorsArray"||vt==="columnColorsArray"||vt==="qSortHeaderNumbers"||vt==="qSortHeaders"||vt==="qSortPattern"?console.log("input skip"):(se==="true"?se=!0:se==="false"?se=!1:isNaN(se)||(se=+se),r[vt]=se)))}const s={};if(a.length>0){n=[];for(let se=0;se<a.length;se++){let ne={},vt=a[se][0].attributes.type;if(vt==="information"){ne.id=`itemNum${se+1}`,ne.itemNum=se+1,ne.type="information",ne.background=a[se][1].attributes.bg;try{ne.options=(p=(g=a[se][1])==null?void 0:g.elements[0])==null?void 0:p.text}catch(Ae){console.log(Ae),ne.options=""}s[`itemNum${se+1}`]="info - n.a.",n.push(ne)}if(vt==="text"){ne.id=`itemNum${se+1}`;let Ae=JSON.parse((h=(m=a[se][0])==null?void 0:m.attributes)==null?void 0:h.required);Ae==="true"||Ae===!0?(Ae=!0,s[`itemNum${se+1}`]="no-*?*-response"):s[`itemNum${se+1}`]="no response",ne.itemNum=se+1,ne.type="text",ne.required=Ae;try{ne.label=(v=(x=a[se][1])==null?void 0:x.elements[0])==null?void 0:v.text}catch(ve){console.log(ve),ne.label=""}try{ne.note=(C=(y=a[se][2])==null?void 0:y.elements[0])==null?void 0:C.text}catch(ve){console.log(ve),ne.note=""}try{if(a[se][0].attributes.limitLength===void 0)ne.limitLength=JSON.parse((N=(T=a[se][0])==null?void 0:T.attributes)==null?void 0:N.limitLength);else{let ve=JSON.parse((I=(j=a[se][0])==null?void 0:j.attributes)==null?void 0:I.limitLength);ne.limitLength=ve}}catch(ve){console.log(ve),ne.limitLength="999"}try{ne.restricted=(w=($=a[se][0])==null?void 0:$.attributes)==null?void 0:w.restricted}catch(ve){console.log(ve),ne.restricted="false"}try{ne.limited=(L=(U=a[se][0])==null?void 0:U.attributes)==null?void 0:L.limited}catch(ve){console.log(ve),ne.limited="false"}try{ne.placeholder=(K=(q=a[se][3])==null?void 0:q.elements[0])==null?void 0:K.text}catch(ve){console.log(ve),ne.placeholder=""}ne.hasBeenAnswered=!1,n.push(ne)}if(vt==="textarea"){ne.id=`itemNum${se+1}`;let Ae=JSON.parse((J=(B=a[se][0])==null?void 0:B.attributes)==null?void 0:J.required);Ae==="true"||Ae===!0?(Ae=!0,s[`itemNum${se+1}`]="no-*?*-response"):s[`itemNum${se+1}`]="no response",ne.itemNum=se+1,ne.type="textarea";try{ne.required=(k=(Y=a[se][0])==null?void 0:Y.attributes)==null?void 0:k.required}catch(ve){console.log(ve),ne.required=!1}try{ne.label=(z=(_=a[se][1])==null?void 0:_.elements[0])==null?void 0:z.text}catch(ve){console.log(ve),ne.label=""}try{ne.note=(Q=(V=a[se][2])==null?void 0:V.elements[0])==null?void 0:Q.text}catch(ve){console.log(ve),ne.note=""}try{ne.placeholder=(G=(H=a[se][3])==null?void 0:H.elements[0])==null?void 0:G.text}catch(ve){console.log(ve),ne.placeholder=""}ne.hasBeenAnswered=!1,n.push(ne)}if(vt==="radio"){ne.id=`itemNum${se+1}`;let Ae=JSON.parse((W=(Z=a[se][0])==null?void 0:Z.attributes)==null?void 0:W.required);Ae==="true"||Ae===!0?(Ae=!0,s[`itemNum${se+1}`]="no-*?*-response"):s[`itemNum${se+1}`]="no response",ne.itemNum=se+1,ne.type="radio";try{ne.required=JSON.parse((O=(R=a[se][0])==null?void 0:R.attributes)==null?void 0:O.required)}catch(ve){console.log(ve),ne.required="false"}try{ne.other=JSON.parse((F=(b=a[se][0])==null?void 0:b.attributes)==null?void 0:F.other)}catch(ve){console.log(ve),ne.other="false"}try{ne.label=(ee=(M=a[se][1])==null?void 0:M.elements[0])==null?void 0:ee.text}catch(ve){console.log(ve),ne.label=""}try{ne.note=(de=(ie=a[se][2])==null?void 0:ie.elements[0])==null?void 0:de.text}catch(ve){console.log(ve),ne.note=""}try{ne.options=(fe=(ce=a[se][0])==null?void 0:ce.elements[0])==null?void 0:fe.text}catch(ve){console.log(ve),ne.options=""}ne.hasBeenAnswered=!1,n.push(ne)}if(vt==="select"){ne.id=`itemNum${se+1}`;let Ae=JSON.parse((le=(Se=a[se][0])==null?void 0:Se.attributes)==null?void 0:le.required);Ae==="true"||Ae===!0?(Ae=!0,s[`itemNum${se+1}`]="no-*?*-response"):s[`itemNum${se+1}`]="no response",ne.itemNum=se+1,ne.type="select";try{ne.required=(me=(pe=a[se][0])==null?void 0:pe.attributes)==null?void 0:me.required}catch(ve){console.log(ve),ne.required="false"}try{ne.label=(be=(ye=a[se][1])==null?void 0:ye.elements[0])==null?void 0:be.text}catch(ve){console.log(ve),ne.label=""}try{ne.options=(je=(xe=a[se][0])==null?void 0:xe.elements[0])==null?void 0:je.text}catch(ve){console.log(ve),ne.options=""}try{ne.note=(Oe=(he=a[se][2])==null?void 0:he.elements[0])==null?void 0:Oe.text}catch(ve){console.log(ve),ne.note=""}ne.hasBeenAnswered=!1,n.push(ne)}if(vt==="checkbox"){ne.id=`itemNum${se+1}`;let Ae=JSON.parse((Ze=(ke=a[se][0])==null?void 0:ke.attributes)==null?void 0:Ze.required);Ae==="true"||Ae===!0?(Ae=!0,s[`itemNum${se+1}`]="no-*?*-response"):s[`itemNum${se+1}`]="no response",ne.itemNum=se+1,ne.type="checkbox";try{ne.required=JSON.parse((We=(Ge=a[se][0])==null?void 0:Ge.attributes)==null?void 0:We.required)}catch(ve){console.log(ve),ne.required="false"}try{ne.other=JSON.parse((Mt=(ot=a[se][0])==null?void 0:ot.attributes)==null?void 0:Mt.other)}catch(ve){console.log(ve),ne.other="false"}try{ne.label=(un=(At=a[se][1])==null?void 0:At.elements[0])==null?void 0:un.text}catch(ve){console.log(ve),ne.label=""}try{ne.options=(Vt=(dt=a[se][0])==null?void 0:dt.elements[0])==null?void 0:Vt.text}catch(ve){console.log(ve),ne.options=""}try{ne.note=(ga=(dr=a[se][2])==null?void 0:dr.elements[0])==null?void 0:ga.text}catch(ve){console.log(ve),ne.note=""}ne.hasBeenAnswered=!1,n.push(ne)}if(vt==="rating2"){ne.id=`itemNum${se+1}`;let Ae=JSON.parse((ma=(pa=a[se][0])==null?void 0:pa.attributes)==null?void 0:ma.required);Ae==="true"||Ae===!0?(Ae=!0,s[`itemNum${se+1}`]="no-*?*-response"):s[`itemNum${se+1}`]="no response",ne.itemNum=se+1,ne.type="rating2";try{ne.required=(He=(Me=a[se][0])==null?void 0:Me.attributes)==null?void 0:He.required}catch(ve){console.log(ve),ne.required="false"}try{ne.label=(ft=(it=a[se][1])==null?void 0:it.elements[0])==null?void 0:ft.text}catch(ve){console.log(ve),ne.label=""}try{ne.scale=(Zt=(Ke=a[se][0])==null?void 0:Ke.attributes)==null?void 0:Zt.scale}catch(ve){console.log(ve),ne.scale="Yes;;;No"}try{ne.options=(Bn=(dn=a[se][0])==null?void 0:dn.elements[0])==null?void 0:Bn.text}catch(ve){console.log(ve),ne.options=""}try{ne.note=(ti=(ei=a[se][2])==null?void 0:ei.elements[0])==null?void 0:ti.text}catch(ve){console.log(ve),ne.note=""}ne.hasBeenAnswered=!1,n.push(ne)}if(vt==="likert"){ne.id=`itemNum${se+1}`;let Ae=JSON.parse((Rh=(fn=a[se][0])==null?void 0:fn.attributes)==null?void 0:Rh.required);Ae==="true"||Ae===!0?(Ae=!0,s[`itemNum${se+1}`]="no-*?*-response"):s[`itemNum${se+1}`]="no response",ne.itemNum=se+1,ne.type="likert";try{ne.required=(Fh=(Lh=a[se][0])==null?void 0:Lh.attributes)==null?void 0:Fh.required}catch(ve){console.log(ve),ne.required="false"}try{ne.label=(Bh=(_h=a[se][1])==null?void 0:_h.elements[0])==null?void 0:Bh.text}catch(ve){console.log(ve),ne.label=""}try{ne.scale=(Hh=(zh=a[se][0])==null?void 0:zh.attributes)==null?void 0:Hh.scale}catch(ve){console.log(ve),ne.scale="Strongly Disagree;;;Disagree;;;Neutral;;;Agree;;;Strongly Agree"}try{ne.options=(Vh=(Uh=a[se][0])==null?void 0:Uh.elements[0])==null?void 0:Vh.text}catch(ve){console.log(ve),ne.options=""}ne.hasBeenAnswered=!1,n.push(ne)}if(vt==="rating5"){ne.id=`itemNum${se+1}`;let Ae=JSON.parse((qh=(Wh=a[se][0])==null?void 0:Wh.attributes)==null?void 0:qh.required);Ae==="true"||Ae===!0?(Ae=!0,s[`itemNum${se+1}`]="no-*?*-response"):s[`itemNum${se+1}`]="no response",ne.itemNum=se+1,ne.type="rating5";try{ne.required=(Kh=(Gh=a[se][0])==null?void 0:Gh.attributes)==null?void 0:Kh.required}catch(ve){console.log(ve),ne.required="false"}try{ne.label=(Qh=(Jh=a[se][1])==null?void 0:Jh.elements[0])==null?void 0:Qh.text}catch(ve){console.log(ve),ne.label=""}try{ne.options=(Yh=(Zh=a[se][0])==null?void 0:Zh.elements[0])==null?void 0:Yh.text}catch(ve){console.log(ve),ne.options=""}try{ne.note=(ev=(Xh=a[se][2])==null?void 0:Xh.elements[0])==null?void 0:ev.text}catch(ve){console.log("rating 5 note error"),console.log(ve),ne.note=""}ne.hasBeenAnswered=!1,n.push(ne)}if(vt==="rating10"){ne.id=`itemNum${se+1}`;let Ae=JSON.parse((rv=(tv=a[se][0])==null?void 0:tv.attributes)==null?void 0:rv.required);Ae==="true"||Ae===!0?(Ae=!0,s[`itemNum${se+1}`]="no-*?*-response"):s[`itemNum${se+1}`]="no response",ne.itemNum=se+1,ne.type="rating10";try{ne.required=(ov=(nv=a[se][0])==null?void 0:nv.attributes)==null?void 0:ov.required}catch(ve){console.log(ve),ne.required="false"}try{ne.label=(av=(iv=a[se][1])==null?void 0:iv.elements[0])==null?void 0:av.text}catch(ve){console.log(ve),ne.label=""}try{ne.options=(lv=(sv=a[se][0])==null?void 0:sv.elements[0])==null?void 0:lv.text}catch(ve){console.log(ve),ne.options=""}try{ne.note=(uv=(cv=a[se][2])==null?void 0:cv.elements[0])==null?void 0:uv.text}catch(ve){console.log(ve),ne.note=""}ne.hasBeenAnswered=!1,n.push(ne)}}JSON.parse(localStorage.getItem("resultsSurvey"))||(localStorage.setItem("resultsSurvey",JSON.stringify(s)),localStorage.setItem("resultsSurveyArchive",JSON.stringify(s))),r.requiredAnswersObj=s}let c={},u=r==null?void 0:r.shuffleCards;return c.requiredAnswersObj=s,c.configObj=r,c.surveyQuestionObjArray=n,c.shuffleCards=u,c},Joe=e=>{const t={},r=e.map,n={};let i=e.map.info.find(p=>p._attributes.id==="mapFileVersion");t.mapFileVersion=i._text;for(let p=0;p<r.column.length;p++){let m,h=r.column[p]._attributes.id,x=parseInt(h,10);x<0?(m=`columnN${Math.abs(x)}`,n[m]=[]):(m=`column${x}`,n[m]=[]);let v={};v.colNum=p+1,v.label=h,v.colour=`#${r.column[p]._attributes.colour}`,v.numCards=r.column[p]._text}const a=e.map.item;let s=[];s=a.find(p=>p._attributes.id==="qSortPattern")._text.split(",").map(p=>+p),t.qSortPattern=s;for(let p=0;p<r.item.length;p++){let m=[],h=r.item[p]._text,x=r.item[p]._attributes.id;h==null?h="":h.includes(",")?(m=h.split(","),t[x]=m):t[x]=[h]}const d={},f=[...t.qSortHeaders];for(let p=0;p<f.length;p++){let m=`column${f[p]}`;d[m]=t.qSortHeaderNumbers[p]}t.postsortConvertObj=d,E.setState({vColsObj:n});const g={};return g.vColsObj=n,g.mapObj=t,g},Qoe=e=>{try{const t=e.language.item;let r=e.language.info;const n={};let i=r.find(a=>a._attributes.id==="languageFileVersion")._text;n.langFileVersion=i;for(let a=0;a<t.length;a++)n[t[a]._attributes.id]=t[a]._text,E.setState({[t[a]._attributes.id]:t[a]._text});return n}catch(t){console.log("there was a language import error"),console.log(t)}},Zoe=(e,t,r)=>{const n=e.statements.statement;let o=[];for(let c=0;c<n.length;c++){let u={};u.id=`s${n[c]._attributes.id}`,u.statementNum=n[c]._attributes.id,u.divColor="isUncertainStatement",u.cardColor="yellowSortCard",u.pinkChecked=!1,u.yellowChecked=!0,u.greenChecked=!1,u.sortValue=222,u.backgroundColor="#e0e0e0",u.statement=n[c]._text.trim(),o.push(u)}t===!0&&(o=[...qu(o)]);let i=o.length;const a={};a.vCols=r,a.statementList=o,localStorage.setItem("hasBeenLoaded",!0);const s={};return s.columnStatements=a,s.totalStatements=i,s},Yoe=e=>e.configObj,Xoe=e=>e.presortFinished,eie=e=>e.setTriggerPresortPreventNavModal,tie=e=>e.currentPage,rie=e=>e.setCheckRequiredQuestionsComplete,nie=e=>e.setTriggerSurveyPreventNavModal,oie=e=>e.isSortingFinished,iie=e=>e.hasOverloadedColumn,aie=e=>e.setTriggerSortPreventNavModal,sie=e=>e.setTriggerSortOverloadedColumnModal,lie=e=>e.columnStatements,cie=e=>e.setResults,uie=e=>e.setShowPostsortCommentHighlighting,die=e=>e.setTriggerPostsortPreventNavModal,fie=e=>e.isThinningFinished,gie=e=>e.setTriggerThinningPreventNavModal,vj=e=>{let t;const r=X(Yoe),n=E(Xoe),o=E(eie),i=E(tie),a=E(rie),s=E(nie),c=E(oie),u=E(iie),d=E(aie),f=E(sie),g=X(lie),p=E(cie),m=E(uie),h=E(die),x=E(fie),v=E(gie),y=r.allowUnforcedSorts,C=r.postsortCommentsRequired;let T=[];try{T=JSON.parse(localStorage.getItem("sortColumns"))||[]}catch(U){console.error("JSON parsing failed:",U.message);return}const{history:N,to:j="/",onClick:I=()=>{},...$}=e,w=(U,L)=>{var K;let q=D3(g);if(i==="presort")return L===!1?(o(!0),!1):!0;if(i==="thin")return x===!1?(console.log("thin"),v(!0),!1):!0;if(i==="sort")return c===!1?((K=T==null?void 0:T.imagesList)==null?void 0:K.length)===0?U===!0?(p(q),d(!1),!0):u===!0?(d(!1),f(!0),!1):(p(q),d(!1),!0):(d(!0),!1):U===!0?(d(!1),!0):u===!0?(d(!1),f(!0),!1):(d(!1),!0);if(i==="postsort"){let B=+localStorage.getItem("postsortCommentCardCount");const J=li(JSON.parse(localStorage.getItem("HC-requiredCommentsObj")))||[],Y=li(JSON.parse(localStorage.getItem("HC2-requiredCommentsObj")))||[],k=li(JSON.parse(localStorage.getItem("LC-requiredCommentsObj")))||[],_=li(JSON.parse(localStorage.getItem("LC2-requiredCommentsObj")))||[],z=[...J,...Y,...k,..._];return(z.includes("false")||z.includes(!1)||z.length<B)&&C===!0?(m(!0),h(!0),!1):!0}if(i==="survey"){let B=JSON.parse(localStorage.getItem("resultsSurvey"));return li(B).includes("no-*?*-response")?(a(!0),s(!0),!1):!0}return!0};return l.jsx(mie,{...$,onClick:U=>{I&&I(U),t=w(y,n),t&&N.push(j)},tabindex:"0"})},pie=Qi(vj);vj.propTypes={to:er.string,onClick:er.func,history:er.object.isRequired,location:er.object,match:er.object,staticContext:er.object,rest:er.object};const mie=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 0.8em;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  justify-self: right;
  margin-right: 35px;
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,hie=e=>e.langObj,vie=e=>e.cardFontSizeSort,xie=e=>e.setCardFontSizeSort,yie=e=>e.cardFontSizePresort,bie=e=>e.setCardFontSizePresort,Sie=e=>e.cardFontSizePostsort,Cie=e=>e.setCardFontSizePostsort,wie=e=>e.currentPage,jie=e=>e.setCardFontSizeThin,Tie=e=>e.cardFontSizeThin,Oie=()=>{const e=X(hie);let t=E(vie),r=E(Sie),n=E(yie);const o=A(D(e.fontSizeText))||"",i=E(xie),a=E(wie),s=+localStorage.getItem("fontSizeSort"),c=+localStorage.getItem("fontSizePostsort"),u=+localStorage.getItem("fontSizePresort"),d=E(Cie),f=E(bie),g=E(jie),p=E(Tie);u&&a==="presort"&&(n=u),s&&a==="sort"&&(t=s),c&&a==="postsort"&&(r=c);const m=()=>{if(a==="presort"){const v=n+1;localStorage.setItem("fontSizePresort",JSON.stringify(v)),f(v)}if(a==="thin"){const v=p+1;localStorage.setItem("fontSizeThin",JSON.stringify(v)),g(v)}if(a==="sort"){const v=t+1;localStorage.setItem("fontSizeSort",JSON.stringify(v)),i(v)}if(a==="postsort"){const v=r+1;localStorage.setItem("fontSizePostsort",JSON.stringify(v)),d(v)}},h=()=>{if(console.log("decreaseFontSize"),a==="presort"){let v=n-1;v<1&&(v=1),localStorage.setItem("fontSizePresort",JSON.stringify(v)),f(v)}if(a==="thin"){let v=p-1;v<1&&(v=1),localStorage.setItem("fontSizeThin",JSON.stringify(v)),g(v)}if(a==="sort"){let v=t-1;v<1&&(v=1),localStorage.setItem("fontSizeSort",JSON.stringify(v)),i(v)}if(a==="postsort"){let v=r-1;v<1&&(v=1),localStorage.setItem("fontSizePostsort",JSON.stringify(v)),d(v)}};return l.jsxs(Iie,{"data-testid":"FooterFontSizerDiv",children:[l.jsx(Pie,{children:o}),l.jsx(rb,{"data-testid":"FooterFontSizerNeg",padBottom:"0.4em",onClick:h,children:"-"}),l.jsx(rb,{"data-testid":"FooterFontSizerPos",padBottom:"0.25em",onClick:m,children:"+"})]})},rb=S.button`
  background: #337ab7;
  border-color: #2e6da4;
  color: white;
  font-size: 1.4em;
  font-weight: bold;
  margin: 0 3px 0 3px;
  padding: 0.25em 0.5em;
  padding-bottom: ${e=>e.padBottom};
  height: 30px;
  width: 35px;

  border-radius: 3px;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  user-select: none;
`,Iie=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`,Pie=S.div`
  font-size: 16px;
  user-select: none;
`,Eie=e=>e.langObj,$ie=e=>e.cardHeightSort,Nie=e=>e.setCardHeightSort,kie=e=>e.cardHeightPostsort,Mie=e=>e.setCardHeightPostsort,Aie=e=>e.currentPage,Die=e=>e.setCardHeightThin,Rie=e=>e.cardHeightThin,Lie=()=>{const e=X(Eie);let t=E($ie);const r=localStorage.getItem("cardHeightSort");let n=E(kie);const o=localStorage.getItem("cardHeightPostsort"),i=E(Aie),a=E(Nie),s=E(Mie),c=E(Die);let u=E(Rie),d=localStorage.getItem("cardHeightThin");d&&(u=d),r&&(t=r),o&&(n=o);const f=A(D(e.cardHeightText))||"",g=()=>{if(i==="thin"){const h=+u+5;localStorage.setItem("cardHeightThin",JSON.stringify(h)),c(h)}if(i==="sort"){const h=+t+2;localStorage.setItem("cardHeightSort",JSON.stringify(h)),a(h)}if(i==="postsort"){const h=+n+2;localStorage.setItem("cardHeightPostsort",JSON.stringify(h)),s(h)}},p=()=>{if(i==="thin"){let h=+u-5;h<10&&(h=10),localStorage.setItem("cardHeightThin",JSON.stringify(h)),c(h)}if(i==="sort"){let h=+t-2;h<10&&(h=10),localStorage.setItem("cardHeightSort",JSON.stringify(h)),a(h)}if(i==="postsort"){let h=+n-2;h<10&&(h=10),localStorage.setItem("cardHeightPostsort",JSON.stringify(h)),s(h)}};return l.jsxs(Fie,{"data-testid":"CardHeightSizerDiv",children:[l.jsx(_ie,{children:f}),l.jsx(nb,{"data-testid":"cardHeightSizerNeg",padBottom:"0.4em",onClick:p,children:"-"}),l.jsx(nb,{"data-testid":"cardHeightSizerPlus",padBottom:"0.25em",onClick:g,children:"+"})]})},nb=S.button`
  background: #337ab7;
  border-color: #2e6da4;
  color: white;
  font-size: 1.4em;
  font-weight: bold;
  margin: 0 3px 0 3px;
  padding: 0.25em 0.5em;
  padding-bottom: ${e=>e.padBottom};
  height: 30px;
  width: 35px;
  border-radius: 3px;
  text-decoration: none;
  user-select: none;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
`,Fie=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 15px;
`,_ie=S.div`
  font-size: 16px;
  user-select: none;
`;var xj={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=P;function r(a){if(a&&a.__esModule)return a;var s=Object.create(null);return a&&Object.keys(a).forEach(function(c){if(c!=="default"){var u=Object.getOwnPropertyDescriptor(a,c);Object.defineProperty(s,c,u.get?u:{enumerable:!0,get:function(){return a[c]}})}}),s.default=a,Object.freeze(s)}var n=r(t);/*! *****************************************************************************
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
	***************************************************************************** */var o=function(){return o=Object.assign||function(s){for(var c,u=1,d=arguments.length;u<d;u++){c=arguments[u];for(var f in c)Object.prototype.hasOwnProperty.call(c,f)&&(s[f]=c[f])}return s},o.apply(this,arguments)},i=function(a){var s=a.bgColor,c=s===void 0?"#6a1b9a":s,u=a.height,d=u===void 0?"20px":u,f=a.width,g=f===void 0?"100%":f,p=a.borderRadius,m=p===void 0?"50px":p,h=a.labelAlignment,x=h===void 0?"right":h,v=a.baseBgColor,y=v===void 0?"#e0e0de":v,C=a.labelColor,T=C===void 0?"#fff":C,N=a.labelSize,j=N===void 0?"15px":N,I=a.isLabelVisible,$=I===void 0?!0:I,w=a.dir,U=w===void 0?"ltr":w,L=a.ariaValuemin,q=L===void 0?0:L,K=a.ariaValuemax,B=K===void 0?100:K,J=a.ariaValuetext,Y=J===void 0?null:J,k=a.maxCompleted,_=k===void 0?100:k,z=a.animateOnRender,V=z===void 0?!1:z,Q=a.initCompletedOnAnimation,H=Q===void 0?0:Q,G=a.isIndeterminate,Z=G===void 0?!1:G,W=a.completed,R=a.margin,O=a.padding,b=a.customLabelStyles,F=a.transitionDuration,M=a.transitionTimingFunction,ee=a.className,ie=a.customLabel,de=a.barContainerClassName,ce=a.completedClassName,fe=a.labelClassName,Se=function(ot){return ot==="left"?"flex-start":ot==="center"?"center":ot==="right"?"flex-end":null},le=Se(x),pe=typeof H=="number"?"".concat(H,"%"):H,me=function(ot,Mt){if(ot){var At=Number(Mt)/ot;return At>1?"100%":"".concat(At*100,"%")}return pe},ye=me(_,W),be=n.useState(pe),xe=be[0],je=be[1],he={height:d,background:y,borderRadius:m,padding:O,width:g,margin:R,overflow:"hidden"},Oe={height:d,width:Z?"100%":V?xe:ye,background:c,transition:Z?"none":"width ".concat(F||"1s"," ").concat(M||"ease-in-out"),borderRadius:"inherit",display:"flex",alignItems:"center",justifyContent:x!=="outside"&&le?le:"normal",animation:Z?"indeterminate 1.5s infinite linear":"none"},ke=o({padding:x==="outside"?"0 0 0 5px":"5px",color:T,fontWeight:"bold",fontSize:j,display:$?"initial":"none"},b),Ze={display:x==="outside"?"flex":"initial",alignItems:x==="outside"?"center":"initial"},Ge=typeof W=="number"?"".concat(W,"%"):"".concat(W),We=ie||Ge;return n.useEffect(function(){V&&!Z&&requestAnimationFrame(function(){return je(ye)})},[ye,V,Z]),n.createElement("div",{style:ee?void 0:Ze,className:ee,dir:U,role:"progressbar","aria-valuenow":Z?void 0:parseFloat(We),"aria-valuemin":q,"aria-valuemax":B,"aria-valuetext":"".concat(Y===null?We:Y)},n.createElement("div",{style:de?void 0:he,className:de},n.createElement("div",{style:ce?void 0:Oe,className:ce},x!=="outside"&&n.createElement("span",{style:fe?void 0:ke,className:fe},We))),x==="outside"&&n.createElement("span",{style:fe?void 0:ke,className:fe},We),n.createElement("style",null,`
          @keyframes indeterminate {
            0% {
              width: 30%;
              transform: translateX(-50%);
            }
            50% {
              width: 30%;
              transform: translateX(250%);
            }
            100% {
              width: 30%;
              transform: translateX(-50%);
            }
          }
        `))};e.default=i})(xj);const Bie=ht(xj),zie=e=>{let t;if(e==="landing")return t=10,t;if(e==="consent")return t=15,t;if(e==="presort")return t=20,t;if(e==="thin")return t=40,t;if(e==="sort")return t=60,t;if(e==="postsort")return t=80,t;if(e==="survey")return t=90,t;if(e==="submit")return t=100,t},Hie=e=>e.langObj,Uie=e=>e.configObj,Vie=e=>e.currentPage,Wie=e=>e.setTriggerLandingModal,qie=e=>e.setTriggerPresortModal,Gie=e=>e.setTriggerSortModal,Kie=e=>e.setTriggerPostsortModal,Jie=e=>e.setTriggerSurveyModal,Qie=e=>e.setTriggerSubmitModal,Zie=e=>e.setTriggerConsentModal,Yie=e=>e.setTriggerThinHelpModal,Xie=()=>{const e=X(Hie),t=X(Uie),r=E(Vie),n=E(Wie),o=E(qie),i=E(Gie),a=E(Kie),s=E(Jie),c=E(Qie),u=E(Zie),d=E(Yie);let f=A(D(e.btnHelp))||"";r==="landing"&&(f=A(D(e.btnHelpLanding))||""),r==="consent"&&(f=A(D(e.btnHelpConsent))||"");const g=()=>{console.log("currentPage",r),r==="landing"&&n(!0),r==="consent"&&u(!0),r==="presort"&&o(!0),r==="thin"&&d(!0),r==="sort"&&i(!0),r==="postsort"&&a(!0),r==="survey"&&s(!0),r==="submit"&&c(!0)};return r==="consent"?t.showConsentPageHelpModal===!0?l.jsx(ob,{"data-testid":"helpButtonDiv",tabindex:"0",onClick:g,children:f}):null:l.jsx(ob,{"data-testid":"helpButtonDiv",tabindex:"0",onClick:g,children:f})},ob=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 0.8em;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  justify-self: right;
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,yj=(e,t,r,n,o)=>e==="consent"?n===!0?"/landing":"/presort":e==="landing"?"/presort":e==="presort"?o===!0?"/thin":"/sort":e==="thin"?"/sort":e==="sort"?t===!0?"/postsort":r===!0?"/survey":"/submit":e==="postsort"?r===!0?"/survey":"/submit":e==="survey"?"/submit":e==="submit"?"/":"/nopagefound",eae=e=>{const{history:t,to:r,onClick:n,...o}=e;return l.jsx(rae,{...o,onClick:i=>{n&&n(i),t.push(r)},tabindex:"0"})},tae=Qi(eae),rae=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 0.8em;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  justify-self: right;
  margin-right: 35px;
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,nae=e=>e.langObj,oae=e=>e.configObj,iae=e=>e.displayNextButton,aae=e=>e.currentPage,sae=e=>e.localUsercode,ib=()=>{const e=X(nae),t=X(oae);let r=E(iae);const n=E(aae),o=E(sae);let i=!0,a=!0,s=!0,c=!0,u,d=e.postsortBackButtonText;n==="postsort"&&t.showBackButton?u=!0:u=!1;let f=A(D('{{{center}}}{{{img src="./logo/logo.png" height="40" width="250" /}}}{{{/center}}}')),g;if(n==="landing"?g=A(D(e.btnNextLanding))||"":n==="consent"?g=A(D(e.btnNextConsent))||"":g=A(D(e.btnNext))||"",n==="sort"&&t.setupTarget==="local"){const j=o,I=t.studyTitle,$=new Date,w=$.getFullYear()+"-"+($.getMonth()+1)+"-"+$.getDate(),U=$.getHours()+":"+$.getMinutes()+":"+$.getSeconds(),L=w+" "+U;f=`${j} - ${I} - ${L}`}const p=t.showPostsort,m=t.showSurvey,h=t.useImages,x=t.showConsentPage,v=t.useThinProcess;let y=!0;const C=zie(n);n==="consent"?y=!1:y=!0,n==="submit"&&(r=!1),t.setupTarget==="local"&&n==="landing"&&(r=!1,s=!1),n==="submit"&&(s=!1),n==="presort"&&(t.useImages===!0?(i=!1,a=!1):(i=!0,a=!1)),n==="sort"&&(h===!0?(i=!0,a=!0,c=!1):(i=!0,a=!0,c=!0)),(n==="landing"||n==="survey"||n==="submit"||n==="consent")&&(i=!1);let T=l.jsxs(ae.Fragment,{children:[s&&l.jsx(Xie,{}),i&&l.jsxs(cae,{children:[c&&l.jsx(Oie,{"data-testid":"fontSizer"}),a&&l.jsx(Lie,{"data-testid":"cardHeightSizer"})]}),l.jsx(uae,{children:y&&l.jsx(Bie,{completed:C,width:"100px",bgColor:"#337ab7",labelColor:"#f0f0f0",baseBgColor:"lightgray"})})]});const N=yj(n,p,m,x,v);return l.jsxs(lae,{children:[l.jsx(dae,{children:f}),l.jsx(fae,{children:T}),l.jsxs(gae,{children:[u&&l.jsx(tae,{to:"/sort",children:d}),r&&l.jsx(pie,{"data-testid":"nextButton",to:N,children:g})]})]})},lae=S.footer`
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top: 1px solid lightgray;

  display: inline-grid;
  grid-template-columns: 16% 1fr 16%;
  align-items: center;
`,cae=S.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
`,uae=S.div`
  align-self: center;
  justify-self: center;
  margin-left: 25px;
`,dae=S.div`
  padding-top: 5px;
  padding-left: 5px;
  display: flex;
  justify-self: start;
  align-self: center;
  text-align: center;
`,fae=S.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`,gae=S.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;var bj={};const pae={},mae=Object.freeze(Object.defineProperty({__proto__:null,default:pae},Symbol.toStringTag,{value:"Module"})),ab=IS(mae);(function(e){(function(t){t.parser=function(O,b){return new n(O,b)},t.SAXParser=n,t.SAXStream=d,t.createStream=u,t.MAX_BUFFER_LENGTH=64*1024;var r=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function n(O,b){if(!(this instanceof n))return new n(O,b);var F=this;i(F),F.q=F.c="",F.bufferCheckPosition=t.MAX_BUFFER_LENGTH,F.opt=b||{},F.opt.lowercase=F.opt.lowercase||F.opt.lowercasetags,F.looseCase=F.opt.lowercase?"toLowerCase":"toUpperCase",F.tags=[],F.closed=F.closedRoot=F.sawRoot=!1,F.tag=F.error=null,F.strict=!!O,F.noscript=!!(O||F.opt.noscript),F.state=w.BEGIN,F.strictEntities=F.opt.strictEntities,F.ENTITIES=F.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),F.attribList=[],F.opt.xmlns&&(F.ns=Object.create(h)),F.opt.unquotedAttributeValues===void 0&&(F.opt.unquotedAttributeValues=!O),F.trackPosition=F.opt.position!==!1,F.trackPosition&&(F.position=F.line=F.column=0),L(F,"onready")}Object.create||(Object.create=function(O){function b(){}b.prototype=O;var F=new b;return F}),Object.keys||(Object.keys=function(O){var b=[];for(var F in O)O.hasOwnProperty(F)&&b.push(F);return b});function o(O){for(var b=Math.max(t.MAX_BUFFER_LENGTH,10),F=0,M=0,ee=r.length;M<ee;M++){var ie=O[r[M]].length;if(ie>b)switch(r[M]){case"textNode":K(O);break;case"cdata":q(O,"oncdata",O.cdata),O.cdata="";break;case"script":q(O,"onscript",O.script),O.script="";break;default:J(O,"Max buffer length exceeded: "+r[M])}F=Math.max(F,ie)}var de=t.MAX_BUFFER_LENGTH-F;O.bufferCheckPosition=de+O.position}function i(O){for(var b=0,F=r.length;b<F;b++)O[r[b]]=""}function a(O){K(O),O.cdata!==""&&(q(O,"oncdata",O.cdata),O.cdata=""),O.script!==""&&(q(O,"onscript",O.script),O.script="")}n.prototype={end:function(){Y(this)},write:R,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){a(this)}};var s;try{s=ab.Stream}catch{s=function(){}}s||(s=function(){});var c=t.EVENTS.filter(function(O){return O!=="error"&&O!=="end"});function u(O,b){return new d(O,b)}function d(O,b){if(!(this instanceof d))return new d(O,b);s.apply(this),this._parser=new n(O,b),this.writable=!0,this.readable=!0;var F=this;this._parser.onend=function(){F.emit("end")},this._parser.onerror=function(M){F.emit("error",M),F._parser.error=null},this._decoder=null,c.forEach(function(M){Object.defineProperty(F,"on"+M,{get:function(){return F._parser["on"+M]},set:function(ee){if(!ee)return F.removeAllListeners(M),F._parser["on"+M]=ee,ee;F.on(M,ee)},enumerable:!0,configurable:!1})})}d.prototype=Object.create(s.prototype,{constructor:{value:d}}),d.prototype.write=function(O){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(O)){if(!this._decoder){var b=ab.StringDecoder;this._decoder=new b("utf8")}O=this._decoder.write(O)}return this._parser.write(O.toString()),this.emit("data",O),!0},d.prototype.end=function(O){return O&&O.length&&this.write(O),this._parser.end(),!0},d.prototype.on=function(O,b){var F=this;return!F._parser["on"+O]&&c.indexOf(O)!==-1&&(F._parser["on"+O]=function(){var M=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);M.splice(0,0,O),F.emit.apply(F,M)}),s.prototype.on.call(F,O,b)};var f="[CDATA[",g="DOCTYPE",p="http://www.w3.org/XML/1998/namespace",m="http://www.w3.org/2000/xmlns/",h={xml:p,xmlns:m},x=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,v=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,y=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,C=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function T(O){return O===" "||O===`
`||O==="\r"||O==="	"}function N(O){return O==='"'||O==="'"}function j(O){return O===">"||T(O)}function I(O,b){return O.test(b)}function $(O,b){return!I(O,b)}var w=0;t.STATE={BEGIN:w++,BEGIN_WHITESPACE:w++,TEXT:w++,TEXT_ENTITY:w++,OPEN_WAKA:w++,SGML_DECL:w++,SGML_DECL_QUOTED:w++,DOCTYPE:w++,DOCTYPE_QUOTED:w++,DOCTYPE_DTD:w++,DOCTYPE_DTD_QUOTED:w++,COMMENT_STARTING:w++,COMMENT:w++,COMMENT_ENDING:w++,COMMENT_ENDED:w++,CDATA:w++,CDATA_ENDING:w++,CDATA_ENDING_2:w++,PROC_INST:w++,PROC_INST_BODY:w++,PROC_INST_ENDING:w++,OPEN_TAG:w++,OPEN_TAG_SLASH:w++,ATTRIB:w++,ATTRIB_NAME:w++,ATTRIB_NAME_SAW_WHITE:w++,ATTRIB_VALUE:w++,ATTRIB_VALUE_QUOTED:w++,ATTRIB_VALUE_CLOSED:w++,ATTRIB_VALUE_UNQUOTED:w++,ATTRIB_VALUE_ENTITY_Q:w++,ATTRIB_VALUE_ENTITY_U:w++,CLOSE_TAG:w++,CLOSE_TAG_SAW_WHITE:w++,SCRIPT:w++,SCRIPT_ENDING:w++},t.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},t.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(t.ENTITIES).forEach(function(O){var b=t.ENTITIES[O],F=typeof b=="number"?String.fromCharCode(b):b;t.ENTITIES[O]=F});for(var U in t.STATE)t.STATE[t.STATE[U]]=U;w=t.STATE;function L(O,b,F){O[b]&&O[b](F)}function q(O,b,F){O.textNode&&K(O),L(O,b,F)}function K(O){O.textNode=B(O.opt,O.textNode),O.textNode&&L(O,"ontext",O.textNode),O.textNode=""}function B(O,b){return O.trim&&(b=b.trim()),O.normalize&&(b=b.replace(/\s+/g," ")),b}function J(O,b){return K(O),O.trackPosition&&(b+=`
Line: `+O.line+`
Column: `+O.column+`
Char: `+O.c),b=new Error(b),O.error=b,L(O,"onerror",b),O}function Y(O){return O.sawRoot&&!O.closedRoot&&k(O,"Unclosed root tag"),O.state!==w.BEGIN&&O.state!==w.BEGIN_WHITESPACE&&O.state!==w.TEXT&&J(O,"Unexpected end"),K(O),O.c="",O.closed=!0,L(O,"onend"),n.call(O,O.strict,O.opt),O}function k(O,b){if(typeof O!="object"||!(O instanceof n))throw new Error("bad call to strictFail");O.strict&&J(O,b)}function _(O){O.strict||(O.tagName=O.tagName[O.looseCase]());var b=O.tags[O.tags.length-1]||O,F=O.tag={name:O.tagName,attributes:{}};O.opt.xmlns&&(F.ns=b.ns),O.attribList.length=0,q(O,"onopentagstart",F)}function z(O,b){var F=O.indexOf(":"),M=F<0?["",O]:O.split(":"),ee=M[0],ie=M[1];return b&&O==="xmlns"&&(ee="xmlns",ie=""),{prefix:ee,local:ie}}function V(O){if(O.strict||(O.attribName=O.attribName[O.looseCase]()),O.attribList.indexOf(O.attribName)!==-1||O.tag.attributes.hasOwnProperty(O.attribName)){O.attribName=O.attribValue="";return}if(O.opt.xmlns){var b=z(O.attribName,!0),F=b.prefix,M=b.local;if(F==="xmlns")if(M==="xml"&&O.attribValue!==p)k(O,"xml: prefix must be bound to "+p+`
Actual: `+O.attribValue);else if(M==="xmlns"&&O.attribValue!==m)k(O,"xmlns: prefix must be bound to "+m+`
Actual: `+O.attribValue);else{var ee=O.tag,ie=O.tags[O.tags.length-1]||O;ee.ns===ie.ns&&(ee.ns=Object.create(ie.ns)),ee.ns[M]=O.attribValue}O.attribList.push([O.attribName,O.attribValue])}else O.tag.attributes[O.attribName]=O.attribValue,q(O,"onattribute",{name:O.attribName,value:O.attribValue});O.attribName=O.attribValue=""}function Q(O,b){if(O.opt.xmlns){var F=O.tag,M=z(O.tagName);F.prefix=M.prefix,F.local=M.local,F.uri=F.ns[M.prefix]||"",F.prefix&&!F.uri&&(k(O,"Unbound namespace prefix: "+JSON.stringify(O.tagName)),F.uri=M.prefix);var ee=O.tags[O.tags.length-1]||O;F.ns&&ee.ns!==F.ns&&Object.keys(F.ns).forEach(function(xe){q(O,"onopennamespace",{prefix:xe,uri:F.ns[xe]})});for(var ie=0,de=O.attribList.length;ie<de;ie++){var ce=O.attribList[ie],fe=ce[0],Se=ce[1],le=z(fe,!0),pe=le.prefix,me=le.local,ye=pe===""?"":F.ns[pe]||"",be={name:fe,value:Se,prefix:pe,local:me,uri:ye};pe&&pe!=="xmlns"&&!ye&&(k(O,"Unbound namespace prefix: "+JSON.stringify(pe)),be.uri=pe),O.tag.attributes[fe]=be,q(O,"onattribute",be)}O.attribList.length=0}O.tag.isSelfClosing=!!b,O.sawRoot=!0,O.tags.push(O.tag),q(O,"onopentag",O.tag),b||(!O.noscript&&O.tagName.toLowerCase()==="script"?O.state=w.SCRIPT:O.state=w.TEXT,O.tag=null,O.tagName=""),O.attribName=O.attribValue="",O.attribList.length=0}function H(O){if(!O.tagName){k(O,"Weird empty close tag."),O.textNode+="</>",O.state=w.TEXT;return}if(O.script){if(O.tagName!=="script"){O.script+="</"+O.tagName+">",O.tagName="",O.state=w.SCRIPT;return}q(O,"onscript",O.script),O.script=""}var b=O.tags.length,F=O.tagName;O.strict||(F=F[O.looseCase]());for(var M=F;b--;){var ee=O.tags[b];if(ee.name!==M)k(O,"Unexpected close tag");else break}if(b<0){k(O,"Unmatched closing tag: "+O.tagName),O.textNode+="</"+O.tagName+">",O.state=w.TEXT;return}O.tagName=F;for(var ie=O.tags.length;ie-- >b;){var de=O.tag=O.tags.pop();O.tagName=O.tag.name,q(O,"onclosetag",O.tagName);var ce={};for(var fe in de.ns)ce[fe]=de.ns[fe];var Se=O.tags[O.tags.length-1]||O;O.opt.xmlns&&de.ns!==Se.ns&&Object.keys(de.ns).forEach(function(le){var pe=de.ns[le];q(O,"onclosenamespace",{prefix:le,uri:pe})})}b===0&&(O.closedRoot=!0),O.tagName=O.attribValue=O.attribName="",O.attribList.length=0,O.state=w.TEXT}function G(O){var b=O.entity,F=b.toLowerCase(),M,ee="";return O.ENTITIES[b]?O.ENTITIES[b]:O.ENTITIES[F]?O.ENTITIES[F]:(b=F,b.charAt(0)==="#"&&(b.charAt(1)==="x"?(b=b.slice(2),M=parseInt(b,16),ee=M.toString(16)):(b=b.slice(1),M=parseInt(b,10),ee=M.toString(10))),b=b.replace(/^0+/,""),isNaN(M)||ee.toLowerCase()!==b?(k(O,"Invalid character entity"),"&"+O.entity+";"):String.fromCodePoint(M))}function Z(O,b){b==="<"?(O.state=w.OPEN_WAKA,O.startTagPosition=O.position):T(b)||(k(O,"Non-whitespace before first tag."),O.textNode=b,O.state=w.TEXT)}function W(O,b){var F="";return b<O.length&&(F=O.charAt(b)),F}function R(O){var b=this;if(this.error)throw this.error;if(b.closed)return J(b,"Cannot write after close. Assign an onready handler.");if(O===null)return Y(b);typeof O=="object"&&(O=O.toString());for(var F=0,M="";M=W(O,F++),b.c=M,!!M;)switch(b.trackPosition&&(b.position++,M===`
`?(b.line++,b.column=0):b.column++),b.state){case w.BEGIN:if(b.state=w.BEGIN_WHITESPACE,M==="\uFEFF")continue;Z(b,M);continue;case w.BEGIN_WHITESPACE:Z(b,M);continue;case w.TEXT:if(b.sawRoot&&!b.closedRoot){for(var ee=F-1;M&&M!=="<"&&M!=="&";)M=W(O,F++),M&&b.trackPosition&&(b.position++,M===`
`?(b.line++,b.column=0):b.column++);b.textNode+=O.substring(ee,F-1)}M==="<"&&!(b.sawRoot&&b.closedRoot&&!b.strict)?(b.state=w.OPEN_WAKA,b.startTagPosition=b.position):(!T(M)&&(!b.sawRoot||b.closedRoot)&&k(b,"Text data outside of root node."),M==="&"?b.state=w.TEXT_ENTITY:b.textNode+=M);continue;case w.SCRIPT:M==="<"?b.state=w.SCRIPT_ENDING:b.script+=M;continue;case w.SCRIPT_ENDING:M==="/"?b.state=w.CLOSE_TAG:(b.script+="<"+M,b.state=w.SCRIPT);continue;case w.OPEN_WAKA:if(M==="!")b.state=w.SGML_DECL,b.sgmlDecl="";else if(!T(M))if(I(x,M))b.state=w.OPEN_TAG,b.tagName=M;else if(M==="/")b.state=w.CLOSE_TAG,b.tagName="";else if(M==="?")b.state=w.PROC_INST,b.procInstName=b.procInstBody="";else{if(k(b,"Unencoded <"),b.startTagPosition+1<b.position){var ie=b.position-b.startTagPosition;M=new Array(ie).join(" ")+M}b.textNode+="<"+M,b.state=w.TEXT}continue;case w.SGML_DECL:if(b.sgmlDecl+M==="--"){b.state=w.COMMENT,b.comment="",b.sgmlDecl="";continue}b.doctype&&b.doctype!==!0&&b.sgmlDecl?(b.state=w.DOCTYPE_DTD,b.doctype+="<!"+b.sgmlDecl+M,b.sgmlDecl=""):(b.sgmlDecl+M).toUpperCase()===f?(q(b,"onopencdata"),b.state=w.CDATA,b.sgmlDecl="",b.cdata=""):(b.sgmlDecl+M).toUpperCase()===g?(b.state=w.DOCTYPE,(b.doctype||b.sawRoot)&&k(b,"Inappropriately located doctype declaration"),b.doctype="",b.sgmlDecl=""):M===">"?(q(b,"onsgmldeclaration",b.sgmlDecl),b.sgmlDecl="",b.state=w.TEXT):(N(M)&&(b.state=w.SGML_DECL_QUOTED),b.sgmlDecl+=M);continue;case w.SGML_DECL_QUOTED:M===b.q&&(b.state=w.SGML_DECL,b.q=""),b.sgmlDecl+=M;continue;case w.DOCTYPE:M===">"?(b.state=w.TEXT,q(b,"ondoctype",b.doctype),b.doctype=!0):(b.doctype+=M,M==="["?b.state=w.DOCTYPE_DTD:N(M)&&(b.state=w.DOCTYPE_QUOTED,b.q=M));continue;case w.DOCTYPE_QUOTED:b.doctype+=M,M===b.q&&(b.q="",b.state=w.DOCTYPE);continue;case w.DOCTYPE_DTD:M==="]"?(b.doctype+=M,b.state=w.DOCTYPE):M==="<"?(b.state=w.OPEN_WAKA,b.startTagPosition=b.position):N(M)?(b.doctype+=M,b.state=w.DOCTYPE_DTD_QUOTED,b.q=M):b.doctype+=M;continue;case w.DOCTYPE_DTD_QUOTED:b.doctype+=M,M===b.q&&(b.state=w.DOCTYPE_DTD,b.q="");continue;case w.COMMENT:M==="-"?b.state=w.COMMENT_ENDING:b.comment+=M;continue;case w.COMMENT_ENDING:M==="-"?(b.state=w.COMMENT_ENDED,b.comment=B(b.opt,b.comment),b.comment&&q(b,"oncomment",b.comment),b.comment=""):(b.comment+="-"+M,b.state=w.COMMENT);continue;case w.COMMENT_ENDED:M!==">"?(k(b,"Malformed comment"),b.comment+="--"+M,b.state=w.COMMENT):b.doctype&&b.doctype!==!0?b.state=w.DOCTYPE_DTD:b.state=w.TEXT;continue;case w.CDATA:M==="]"?b.state=w.CDATA_ENDING:b.cdata+=M;continue;case w.CDATA_ENDING:M==="]"?b.state=w.CDATA_ENDING_2:(b.cdata+="]"+M,b.state=w.CDATA);continue;case w.CDATA_ENDING_2:M===">"?(b.cdata&&q(b,"oncdata",b.cdata),q(b,"onclosecdata"),b.cdata="",b.state=w.TEXT):M==="]"?b.cdata+="]":(b.cdata+="]]"+M,b.state=w.CDATA);continue;case w.PROC_INST:M==="?"?b.state=w.PROC_INST_ENDING:T(M)?b.state=w.PROC_INST_BODY:b.procInstName+=M;continue;case w.PROC_INST_BODY:if(!b.procInstBody&&T(M))continue;M==="?"?b.state=w.PROC_INST_ENDING:b.procInstBody+=M;continue;case w.PROC_INST_ENDING:M===">"?(q(b,"onprocessinginstruction",{name:b.procInstName,body:b.procInstBody}),b.procInstName=b.procInstBody="",b.state=w.TEXT):(b.procInstBody+="?"+M,b.state=w.PROC_INST_BODY);continue;case w.OPEN_TAG:I(v,M)?b.tagName+=M:(_(b),M===">"?Q(b):M==="/"?b.state=w.OPEN_TAG_SLASH:(T(M)||k(b,"Invalid character in tag name"),b.state=w.ATTRIB));continue;case w.OPEN_TAG_SLASH:M===">"?(Q(b,!0),H(b)):(k(b,"Forward-slash in opening tag not followed by >"),b.state=w.ATTRIB);continue;case w.ATTRIB:if(T(M))continue;M===">"?Q(b):M==="/"?b.state=w.OPEN_TAG_SLASH:I(x,M)?(b.attribName=M,b.attribValue="",b.state=w.ATTRIB_NAME):k(b,"Invalid attribute name");continue;case w.ATTRIB_NAME:M==="="?b.state=w.ATTRIB_VALUE:M===">"?(k(b,"Attribute without value"),b.attribValue=b.attribName,V(b),Q(b)):T(M)?b.state=w.ATTRIB_NAME_SAW_WHITE:I(v,M)?b.attribName+=M:k(b,"Invalid attribute name");continue;case w.ATTRIB_NAME_SAW_WHITE:if(M==="=")b.state=w.ATTRIB_VALUE;else{if(T(M))continue;k(b,"Attribute without value"),b.tag.attributes[b.attribName]="",b.attribValue="",q(b,"onattribute",{name:b.attribName,value:""}),b.attribName="",M===">"?Q(b):I(x,M)?(b.attribName=M,b.state=w.ATTRIB_NAME):(k(b,"Invalid attribute name"),b.state=w.ATTRIB)}continue;case w.ATTRIB_VALUE:if(T(M))continue;N(M)?(b.q=M,b.state=w.ATTRIB_VALUE_QUOTED):(b.opt.unquotedAttributeValues||J(b,"Unquoted attribute value"),b.state=w.ATTRIB_VALUE_UNQUOTED,b.attribValue=M);continue;case w.ATTRIB_VALUE_QUOTED:if(M!==b.q){M==="&"?b.state=w.ATTRIB_VALUE_ENTITY_Q:b.attribValue+=M;continue}V(b),b.q="",b.state=w.ATTRIB_VALUE_CLOSED;continue;case w.ATTRIB_VALUE_CLOSED:T(M)?b.state=w.ATTRIB:M===">"?Q(b):M==="/"?b.state=w.OPEN_TAG_SLASH:I(x,M)?(k(b,"No whitespace between attributes"),b.attribName=M,b.attribValue="",b.state=w.ATTRIB_NAME):k(b,"Invalid attribute name");continue;case w.ATTRIB_VALUE_UNQUOTED:if(!j(M)){M==="&"?b.state=w.ATTRIB_VALUE_ENTITY_U:b.attribValue+=M;continue}V(b),M===">"?Q(b):b.state=w.ATTRIB;continue;case w.CLOSE_TAG:if(b.tagName)M===">"?H(b):I(v,M)?b.tagName+=M:b.script?(b.script+="</"+b.tagName,b.tagName="",b.state=w.SCRIPT):(T(M)||k(b,"Invalid tagname in closing tag"),b.state=w.CLOSE_TAG_SAW_WHITE);else{if(T(M))continue;$(x,M)?b.script?(b.script+="</"+M,b.state=w.SCRIPT):k(b,"Invalid tagname in closing tag."):b.tagName=M}continue;case w.CLOSE_TAG_SAW_WHITE:if(T(M))continue;M===">"?H(b):k(b,"Invalid characters in closing tag");continue;case w.TEXT_ENTITY:case w.ATTRIB_VALUE_ENTITY_Q:case w.ATTRIB_VALUE_ENTITY_U:var de,ce;switch(b.state){case w.TEXT_ENTITY:de=w.TEXT,ce="textNode";break;case w.ATTRIB_VALUE_ENTITY_Q:de=w.ATTRIB_VALUE_QUOTED,ce="attribValue";break;case w.ATTRIB_VALUE_ENTITY_U:de=w.ATTRIB_VALUE_UNQUOTED,ce="attribValue";break}if(M===";"){var fe=G(b);b.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(fe)?(b.entity="",b.state=de,b.write(fe)):(b[ce]+=fe,b.entity="",b.state=de)}else I(b.entity.length?C:y,M)?b.entity+=M:(k(b,"Invalid character in entity name"),b[ce]+="&"+b.entity+M,b.entity="",b.state=de);continue;default:throw new Error(b,"Unknown state: "+b.state)}return b.position>=b.bufferCheckPosition&&o(b),b}/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */String.fromCodePoint||function(){var O=String.fromCharCode,b=Math.floor,F=function(){var M=16384,ee=[],ie,de,ce=-1,fe=arguments.length;if(!fe)return"";for(var Se="";++ce<fe;){var le=Number(arguments[ce]);if(!isFinite(le)||le<0||le>1114111||b(le)!==le)throw RangeError("Invalid code point: "+le);le<=65535?ee.push(le):(le-=65536,ie=(le>>10)+55296,de=le%1024+56320,ee.push(ie,de)),(ce+1===fe||ee.length>M)&&(Se+=O.apply(null,ee),ee.length=0)}return Se};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:F,configurable:!0,writable:!0}):String.fromCodePoint=F}()})(e)})(bj);var Ih={isArray:function(e){return Array.isArray?Array.isArray(e):Object.prototype.toString.call(e)==="[object Array]"}},hae=Ih.isArray,Ph={copyOptions:function(e){var t,r={};for(t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r},ensureFlagExists:function(e,t){(!(e in t)||typeof t[e]!="boolean")&&(t[e]=!1)},ensureSpacesExists:function(e){(!("spaces"in e)||typeof e.spaces!="number"&&typeof e.spaces!="string")&&(e.spaces=0)},ensureAlwaysArrayExists:function(e){(!("alwaysArray"in e)||typeof e.alwaysArray!="boolean"&&!hae(e.alwaysArray))&&(e.alwaysArray=!1)},ensureKeyExists:function(e,t){(!(e+"Key"in t)||typeof t[e+"Key"]!="string")&&(t[e+"Key"]=t.compact?"_"+e:e)},checkFnExists:function(e,t){return e+"Fn"in t}},vae=bj,Ne=Ph,$i=Ih.isArray,re,Ie;function xae(e){return re=Ne.copyOptions(e),Ne.ensureFlagExists("ignoreDeclaration",re),Ne.ensureFlagExists("ignoreInstruction",re),Ne.ensureFlagExists("ignoreAttributes",re),Ne.ensureFlagExists("ignoreText",re),Ne.ensureFlagExists("ignoreComment",re),Ne.ensureFlagExists("ignoreCdata",re),Ne.ensureFlagExists("ignoreDoctype",re),Ne.ensureFlagExists("compact",re),Ne.ensureFlagExists("alwaysChildren",re),Ne.ensureFlagExists("addParent",re),Ne.ensureFlagExists("trim",re),Ne.ensureFlagExists("nativeType",re),Ne.ensureFlagExists("nativeTypeAttributes",re),Ne.ensureFlagExists("sanitize",re),Ne.ensureFlagExists("instructionHasAttributes",re),Ne.ensureFlagExists("captureSpacesBetweenElements",re),Ne.ensureAlwaysArrayExists(re),Ne.ensureKeyExists("declaration",re),Ne.ensureKeyExists("instruction",re),Ne.ensureKeyExists("attributes",re),Ne.ensureKeyExists("text",re),Ne.ensureKeyExists("comment",re),Ne.ensureKeyExists("cdata",re),Ne.ensureKeyExists("doctype",re),Ne.ensureKeyExists("type",re),Ne.ensureKeyExists("name",re),Ne.ensureKeyExists("elements",re),Ne.ensureKeyExists("parent",re),Ne.checkFnExists("doctype",re),Ne.checkFnExists("instruction",re),Ne.checkFnExists("cdata",re),Ne.checkFnExists("comment",re),Ne.checkFnExists("text",re),Ne.checkFnExists("instructionName",re),Ne.checkFnExists("elementName",re),Ne.checkFnExists("attributeName",re),Ne.checkFnExists("attributeValue",re),Ne.checkFnExists("attributes",re),re}function Sj(e){var t=Number(e);if(!isNaN(t))return t;var r=e.toLowerCase();return r==="true"?!0:r==="false"?!1:e}function el(e,t){var r;if(re.compact){if(!Ie[re[e+"Key"]]&&($i(re.alwaysArray)?re.alwaysArray.indexOf(re[e+"Key"])!==-1:re.alwaysArray)&&(Ie[re[e+"Key"]]=[]),Ie[re[e+"Key"]]&&!$i(Ie[re[e+"Key"]])&&(Ie[re[e+"Key"]]=[Ie[re[e+"Key"]]]),e+"Fn"in re&&typeof t=="string"&&(t=re[e+"Fn"](t,Ie)),e==="instruction"&&("instructionFn"in re||"instructionNameFn"in re)){for(r in t)if(t.hasOwnProperty(r))if("instructionFn"in re)t[r]=re.instructionFn(t[r],r,Ie);else{var n=t[r];delete t[r],t[re.instructionNameFn(r,n,Ie)]=n}}$i(Ie[re[e+"Key"]])?Ie[re[e+"Key"]].push(t):Ie[re[e+"Key"]]=t}else{Ie[re.elementsKey]||(Ie[re.elementsKey]=[]);var o={};if(o[re.typeKey]=e,e==="instruction"){for(r in t)if(t.hasOwnProperty(r))break;o[re.nameKey]="instructionNameFn"in re?re.instructionNameFn(r,t,Ie):r,re.instructionHasAttributes?(o[re.attributesKey]=t[r][re.attributesKey],"instructionFn"in re&&(o[re.attributesKey]=re.instructionFn(o[re.attributesKey],r,Ie))):("instructionFn"in re&&(t[r]=re.instructionFn(t[r],r,Ie)),o[re.instructionKey]=t[r])}else e+"Fn"in re&&(t=re[e+"Fn"](t,Ie)),o[re[e+"Key"]]=t;re.addParent&&(o[re.parentKey]=Ie),Ie[re.elementsKey].push(o)}}function Cj(e){if("attributesFn"in re&&e&&(e=re.attributesFn(e,Ie)),(re.trim||"attributeValueFn"in re||"attributeNameFn"in re||re.nativeTypeAttributes)&&e){var t;for(t in e)if(e.hasOwnProperty(t)&&(re.trim&&(e[t]=e[t].trim()),re.nativeTypeAttributes&&(e[t]=Sj(e[t])),"attributeValueFn"in re&&(e[t]=re.attributeValueFn(e[t],t,Ie)),"attributeNameFn"in re)){var r=e[t];delete e[t],e[re.attributeNameFn(t,e[t],Ie)]=r}}return e}function yae(e){var t={};if(e.body&&(e.name.toLowerCase()==="xml"||re.instructionHasAttributes)){for(var r=/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g,n;(n=r.exec(e.body))!==null;)t[n[1]]=n[2]||n[3]||n[4];t=Cj(t)}if(e.name.toLowerCase()==="xml"){if(re.ignoreDeclaration)return;Ie[re.declarationKey]={},Object.keys(t).length&&(Ie[re.declarationKey][re.attributesKey]=t),re.addParent&&(Ie[re.declarationKey][re.parentKey]=Ie)}else{if(re.ignoreInstruction)return;re.trim&&(e.body=e.body.trim());var o={};re.instructionHasAttributes&&Object.keys(t).length?(o[e.name]={},o[e.name][re.attributesKey]=t):o[e.name]=e.body,el("instruction",o)}}function bae(e,t){var r;if(typeof e=="object"&&(t=e.attributes,e=e.name),t=Cj(t),"elementNameFn"in re&&(e=re.elementNameFn(e,Ie)),re.compact){if(r={},!re.ignoreAttributes&&t&&Object.keys(t).length){r[re.attributesKey]={};var n;for(n in t)t.hasOwnProperty(n)&&(r[re.attributesKey][n]=t[n])}!(e in Ie)&&($i(re.alwaysArray)?re.alwaysArray.indexOf(e)!==-1:re.alwaysArray)&&(Ie[e]=[]),Ie[e]&&!$i(Ie[e])&&(Ie[e]=[Ie[e]]),$i(Ie[e])?Ie[e].push(r):Ie[e]=r}else Ie[re.elementsKey]||(Ie[re.elementsKey]=[]),r={},r[re.typeKey]="element",r[re.nameKey]=e,!re.ignoreAttributes&&t&&Object.keys(t).length&&(r[re.attributesKey]=t),re.alwaysChildren&&(r[re.elementsKey]=[]),Ie[re.elementsKey].push(r);r[re.parentKey]=Ie,Ie=r}function Sae(e){re.ignoreText||!e.trim()&&!re.captureSpacesBetweenElements||(re.trim&&(e=e.trim()),re.nativeType&&(e=Sj(e)),re.sanitize&&(e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),el("text",e))}function Cae(e){re.ignoreComment||(re.trim&&(e=e.trim()),el("comment",e))}function wae(e){var t=Ie[re.parentKey];re.addParent||delete Ie[re.parentKey],Ie=t}function jae(e){re.ignoreCdata||(re.trim&&(e=e.trim()),el("cdata",e))}function Tae(e){re.ignoreDoctype||(e=e.replace(/^ /,""),re.trim&&(e=e.trim()),el("doctype",e))}function Oae(e){e.note=e}var wj=function(e,t){var r=vae.parser(!0,{}),n={};if(Ie=n,re=xae(t),r.opt={strictEntities:!0},r.onopentag=bae,r.ontext=Sae,r.oncomment=Cae,r.onclosetag=wae,r.onerror=Oae,r.oncdata=jae,r.ondoctype=Tae,r.onprocessinginstruction=yae,r.write(e).close(),n[re.elementsKey]){var o=n[re.elementsKey];delete n[re.elementsKey],n[re.elementsKey]=o,delete n.text}return n},sb=Ph,Iae=wj;function Pae(e){var t=sb.copyOptions(e);return sb.ensureSpacesExists(t),t}var Eae=function(e,t){var r,n,o,i;return r=Pae(t),n=Iae(e,r),i="compact"in r&&r.compact?"_parent":"parent","addParent"in r&&r.addParent?o=JSON.stringify(n,function(a,s){return a===i?"_":s},r.spaces):o=JSON.stringify(n,null,r.spaces),o.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")},De=Ph,$ae=Ih.isArray,Bt,zt;function Nae(e){var t=De.copyOptions(e);return De.ensureFlagExists("ignoreDeclaration",t),De.ensureFlagExists("ignoreInstruction",t),De.ensureFlagExists("ignoreAttributes",t),De.ensureFlagExists("ignoreText",t),De.ensureFlagExists("ignoreComment",t),De.ensureFlagExists("ignoreCdata",t),De.ensureFlagExists("ignoreDoctype",t),De.ensureFlagExists("compact",t),De.ensureFlagExists("indentText",t),De.ensureFlagExists("indentCdata",t),De.ensureFlagExists("indentAttributes",t),De.ensureFlagExists("indentInstruction",t),De.ensureFlagExists("fullTagEmptyElement",t),De.ensureFlagExists("noQuotesForNativeAttributes",t),De.ensureSpacesExists(t),typeof t.spaces=="number"&&(t.spaces=Array(t.spaces+1).join(" ")),De.ensureKeyExists("declaration",t),De.ensureKeyExists("instruction",t),De.ensureKeyExists("attributes",t),De.ensureKeyExists("text",t),De.ensureKeyExists("comment",t),De.ensureKeyExists("cdata",t),De.ensureKeyExists("doctype",t),De.ensureKeyExists("type",t),De.ensureKeyExists("name",t),De.ensureKeyExists("elements",t),De.checkFnExists("doctype",t),De.checkFnExists("instruction",t),De.checkFnExists("cdata",t),De.checkFnExists("comment",t),De.checkFnExists("text",t),De.checkFnExists("instructionName",t),De.checkFnExists("elementName",t),De.checkFnExists("attributeName",t),De.checkFnExists("attributeValue",t),De.checkFnExists("attributes",t),De.checkFnExists("fullTagEmptyElement",t),t}function Sn(e,t,r){return(!r&&e.spaces?`
`:"")+Array(t+1).join(e.spaces)}function yd(e,t,r){if(t.ignoreAttributes)return"";"attributesFn"in t&&(e=t.attributesFn(e,zt,Bt));var n,o,i,a,s=[];for(n in e)e.hasOwnProperty(n)&&e[n]!==null&&e[n]!==void 0&&(a=t.noQuotesForNativeAttributes&&typeof e[n]!="string"?"":'"',o=""+e[n],o=o.replace(/"/g,"&quot;"),i="attributeNameFn"in t?t.attributeNameFn(n,o,zt,Bt):n,s.push(t.spaces&&t.indentAttributes?Sn(t,r+1,!1):" "),s.push(i+"="+a+("attributeValueFn"in t?t.attributeValueFn(o,n,zt,Bt):o)+a));return e&&Object.keys(e).length&&t.spaces&&t.indentAttributes&&s.push(Sn(t,r,!1)),s.join("")}function jj(e,t,r){return Bt=e,zt="xml",t.ignoreDeclaration?"":"<?xml"+yd(e[t.attributesKey],t,r)+"?>"}function Tj(e,t,r){if(t.ignoreInstruction)return"";var n;for(n in e)if(e.hasOwnProperty(n))break;var o="instructionNameFn"in t?t.instructionNameFn(n,e[n],zt,Bt):n;if(typeof e[n]=="object")return Bt=e,zt=o,"<?"+o+yd(e[n][t.attributesKey],t,r)+"?>";var i=e[n]?e[n]:"";return"instructionFn"in t&&(i=t.instructionFn(i,n,zt,Bt)),"<?"+o+(i?" "+i:"")+"?>"}function Oj(e,t){return t.ignoreComment?"":"<!--"+("commentFn"in t?t.commentFn(e,zt,Bt):e)+"-->"}function Ij(e,t){return t.ignoreCdata?"":"<![CDATA["+("cdataFn"in t?t.cdataFn(e,zt,Bt):e.replace("]]>","]]]]><![CDATA[>"))+"]]>"}function Pj(e,t){return t.ignoreDoctype?"":"<!DOCTYPE "+("doctypeFn"in t?t.doctypeFn(e,zt,Bt):e)+">"}function Eh(e,t){return t.ignoreText?"":(e=""+e,e=e.replace(/&amp;/g,"&"),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"textFn"in t?t.textFn(e,zt,Bt):e)}function kae(e,t){var r;if(e.elements&&e.elements.length)for(r=0;r<e.elements.length;++r)switch(e.elements[r][t.typeKey]){case"text":if(t.indentText)return!0;break;case"cdata":if(t.indentCdata)return!0;break;case"instruction":if(t.indentInstruction)return!0;break;case"doctype":case"comment":case"element":return!0;default:return!0}return!1}function Mae(e,t,r){Bt=e,zt=e.name;var n=[],o="elementNameFn"in t?t.elementNameFn(e.name,e):e.name;n.push("<"+o),e[t.attributesKey]&&n.push(yd(e[t.attributesKey],t,r));var i=e[t.elementsKey]&&e[t.elementsKey].length||e[t.attributesKey]&&e[t.attributesKey]["xml:space"]==="preserve";return i||("fullTagEmptyElementFn"in t?i=t.fullTagEmptyElementFn(e.name,e):i=t.fullTagEmptyElement),i?(n.push(">"),e[t.elementsKey]&&e[t.elementsKey].length&&(n.push(Ej(e[t.elementsKey],t,r+1)),Bt=e,zt=e.name),n.push(t.spaces&&kae(e,t)?`
`+Array(r+1).join(t.spaces):""),n.push("</"+o+">")):n.push("/>"),n.join("")}function Ej(e,t,r,n){return e.reduce(function(o,i){var a=Sn(t,r,n&&!o);switch(i.type){case"element":return o+a+Mae(i,t,r);case"comment":return o+a+Oj(i[t.commentKey],t);case"doctype":return o+a+Pj(i[t.doctypeKey],t);case"cdata":return o+(t.indentCdata?a:"")+Ij(i[t.cdataKey],t);case"text":return o+(t.indentText?a:"")+Eh(i[t.textKey],t);case"instruction":var s={};return s[i[t.nameKey]]=i[t.attributesKey]?i:i[t.instructionKey],o+(t.indentInstruction?a:"")+Tj(s,t,r)}},"")}function $j(e,t,r){var n;for(n in e)if(e.hasOwnProperty(n))switch(n){case t.parentKey:case t.attributesKey:break;case t.textKey:if(t.indentText||r)return!0;break;case t.cdataKey:if(t.indentCdata||r)return!0;break;case t.instructionKey:if(t.indentInstruction||r)return!0;break;case t.doctypeKey:case t.commentKey:return!0;default:return!0}return!1}function Aae(e,t,r,n,o){Bt=e,zt=t;var i="elementNameFn"in r?r.elementNameFn(t,e):t;if(typeof e>"u"||e===null||e==="")return"fullTagEmptyElementFn"in r&&r.fullTagEmptyElementFn(t,e)||r.fullTagEmptyElement?"<"+i+"></"+i+">":"<"+i+"/>";var a=[];if(t){if(a.push("<"+i),typeof e!="object")return a.push(">"+Eh(e,r)+"</"+i+">"),a.join("");e[r.attributesKey]&&a.push(yd(e[r.attributesKey],r,n));var s=$j(e,r,!0)||e[r.attributesKey]&&e[r.attributesKey]["xml:space"]==="preserve";if(s||("fullTagEmptyElementFn"in r?s=r.fullTagEmptyElementFn(t,e):s=r.fullTagEmptyElement),s)a.push(">");else return a.push("/>"),a.join("")}return a.push(Nj(e,r,n+1,!1)),Bt=e,zt=t,t&&a.push((o?Sn(r,n,!1):"")+"</"+i+">"),a.join("")}function Nj(e,t,r,n){var o,i,a,s=[];for(i in e)if(e.hasOwnProperty(i))for(a=$ae(e[i])?e[i]:[e[i]],o=0;o<a.length;++o){switch(i){case t.declarationKey:s.push(jj(a[o],t,r));break;case t.instructionKey:s.push((t.indentInstruction?Sn(t,r,n):"")+Tj(a[o],t,r));break;case t.attributesKey:case t.parentKey:break;case t.textKey:s.push((t.indentText?Sn(t,r,n):"")+Eh(a[o],t));break;case t.cdataKey:s.push((t.indentCdata?Sn(t,r,n):"")+Ij(a[o],t));break;case t.doctypeKey:s.push(Sn(t,r,n)+Pj(a[o],t));break;case t.commentKey:s.push(Sn(t,r,n)+Oj(a[o],t));break;default:s.push(Sn(t,r,n)+Aae(a[o],i,t,r,$j(a[o],t)))}n=n&&!s.length}return s.join("")}var kj=function(e,t){t=Nae(t);var r=[];return Bt=e,zt="_root_",t.compact?r.push(Nj(e,t,0,!0)):(e[t.declarationKey]&&r.push(jj(e[t.declarationKey],t,0)),e[t.elementsKey]&&e[t.elementsKey].length&&r.push(Ej(e[t.elementsKey],t,0,!r.length))),r.join("")},Dae=kj,Rae=function(e,t){e instanceof Buffer&&(e=e.toString());var r=null;if(typeof e=="string")try{r=JSON.parse(e)}catch{throw new Error("The JSON structure is invalid")}else r=e;return Dae(r,t)},Lae=wj,Fae=Eae,_ae=kj,Bae=Rae,zae={xml2js:Lae,xml2json:Fae,js2xml:_ae,json2xml:Bae};const Ll=ht(zae),Hae=e=>e.langObj,Uae=e=>e.triggerConsentModal,Vae=e=>e.setTriggerConsentModal,Wae=()=>{const e=X(Hae),t=E(Uae),r=E(Vae),n=A(D(e.consentHelpModalHead))||"",o=A(D(e.consentHelpModalText))||"",i=()=>{r(!1)};return l.jsxs(_e,{className:"customModal",open:t,onClose:i,center:!0,"data-testid":"consentModalDiv",children:[l.jsx(qae,{children:n}),l.jsx("hr",{}),l.jsx(Gae,{children:o})]})},qae=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,Gae=S.div`
  margin-top: 15px;
`,Kae=e=>e.langObj,Jae=e=>e.configObj,Qae=()=>{const e=X(Kae),r=X(Jae).headerBarColor,n=A(D(e.consentTitleBarText))||"";return l.jsx(Zae,{"data-testid":"ConsentTitleBarDiv",background:r,children:n})},Zae=S.div`
  width: 100%;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 50px;
  background-color: ${e=>e.background};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 28px;
  position: fixed;
  top: 0;
`,Yae=e=>e.langObj,Xae=e=>e.configObj,ese=e=>e.setProgressScore,tse=e=>e.setCurrentPage,rse=e=>e.setDisplayNextButton,nse=e=>e.setUrlUsercode,lb=()=>{const e=X(Yae),t=X(Xae),r=E(ese),n=E(tse),o=E(rse),i=E(nse),a=A(D(e.consentText))||"",s=P.useRef(null);return P.useEffect(()=>(o(!0),s.current=Date.now(),(async()=>{await n("consent"),localStorage.setItem("currentPage","consent"),await r(15)})(),()=>{jr(s.current,"consentPage","consentPage")}),[n,r,o]),P.useEffect(()=>{let c=Vw(window.location.href);if(c==null){let u=localStorage.getItem("urlUsercode");u==null||u==="undefined"?(console.log("no url usercode in storage"),i("not_set"),localStorage.setItem("urlUsercode","not_set")):(console.log("URL usercode from storage: ",u),i(u==="not_set"?"not_set":`${u} (stored)`))}else{let u=c;u=u.replace(/\/|#/g,""),console.log("URL usercode: ",u),i(u),localStorage.setItem("urlUsercode",u)}},[i,t]),l.jsxs(l.Fragment,{children:[l.jsx(Wae,{}),l.jsx(Fn,{}),l.jsx(Qae,{}),l.jsx(ose,{"data-testid":"ConsentPageDiv",children:l.jsx("div",{children:a})})]})},ose=S.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  padding-bottom: 90px;
  margin-bottom: 70px;
  transition: 0.3s ease all;
  margin-top: 70px;
  overflow-y: auto;
  width: 98vw;
  font-size: 1.2em;
  height: calc(100vh - 80px);
  /* border: 3px solid red; */
  -webkit-overflow-scrolling: touch;

  img {
    margin-top: 20px;
    margin-bottom: 20px;
  }
  iframe {
    margin-top: 20px;
    margin-bottom: 20px;
  }
`,ise=e=>e.configObj,ase=e=>e.presortFinished,sse=e=>e.setTriggerMobilePresortPreventNavModal,lse=e=>e.currentPage,cse=e=>e.setCheckRequiredQuestionsComplete,use=e=>e.setTriggerSurveyPreventNavModal,dse=e=>e.setShowPostsortCommentHighlighting,fse=e=>e.setTriggerMobilePostsortPreventNavModal,gse=e=>e.setTriggerMobileThinPreventNavModal,pse=e=>e.hasScrolledToBottomSort,mse=e=>e.setTriggerMobileSortScrollBottomModal,hse=e=>{let t;const r=X(ise);E(ase);const n=E(sse),o=E(lse),i=E(cse),a=E(use),s=E(dse),c=E(fse),u=E(gse),d=E(pse),f=E(mse);r.allowUnforcedSorts;const g=r.postsortCommentsRequired,{history:p,to:m,onClick:h,...x}=e,v=()=>{let y=localStorage.getItem("m_PresortFinished");if(o==="presort")return y==="true"||y===!0?(n(!1),localStorage.setItem("m_PresortDisplayStatements",JSON.stringify({display:!1})),!0):(n(!0),!1);if(o==="thin")return localStorage.getItem("m_ThinningFinished")==="true"?!0:(u(!0),!1);if(o==="sort")return d===!1?(f(!0),!1):!0;if(o==="postsort"){let C=JSON.parse(localStorage.getItem("m_MinWordCountPostsortObject"));return Object.values(C).includes(!1)&&g===!0?(s(!0),c(!0),!1):!0}if(o==="survey"){let C=JSON.parse(localStorage.getItem("resultsSurvey"));return li(C).includes("no-*?*-response")?(i(!0),a(!0),!1):!0}return!0};return l.jsx(xse,{...x,width:e.width,onClick:y=>{h&&h(y),t=v(),t&&p.push(m)},tabindex:"0"})},vse=Qi(hse),xse=S.button`
  display: flex;
  justify-content: center;
  border-color: #2e6da4;
  color: white;
  font-size: 1.5vh;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 3px;
  text-decoration: none;
  width: ${e=>`${e.width}px;`};
  height: 28px;
  /* margin-right: 2vw; */
  align-items: center;
  user-select: none;

  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  /* &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  } */
`,yse=e=>e.langObj,bse=e=>e.currentPage,Sse=e=>e.setMobilePresortFontSize,Cse=e=>e.setMobileThinFontSize,wse=e=>e.setMobileSortFontSize,jse=e=>e.setMobilePostsortFontSize,Tse=()=>{const e=X(yse),t=E(bse),r=E(Sse),n=E(Cse),o=E(wse),i=E(jse);let[a,s]=Ee("m_FontSizeObject",{presort:2,thin:2,sort:2,postsort:2});const c=A(D(e.mobileTextSize))||"",u=()=>{if(t==="presort"){let g=+a.presort+.1;g=g.toPrecision(2);let p={...a,presort:g};s(p),r(g)}if(t==="thin"){let g=+a.thin+.1;g=g.toPrecision(2);let p={...a,thin:g};s(p),n(g)}if(t==="sort"){let g=+a.sort+.1;g=g.toPrecision(2);let p={...a,sort:g};s(p),o(g)}if(t==="postsort"){let g=+a.postsort+.1;g=g.toPrecision(2);let p={...a,postsort:g};s(p),i(g)}},d=()=>{if(t==="presort"){let g=+a.presort-.1;g=g.toPrecision(2);let p={...a,presort:g};s(p),r(g)}if(t==="thin"){let g=+a.thin-.1;g=g.toPrecision(2);let p={...a,thin:g};s(p),n(g)}if(t==="sort"){let g=+a.sort-.1;g=g.toPrecision(2);let p={...a,sort:g};s(p),o(g)}if(t==="postsort"){let g=+a.postsort-.1;g=g.toPrecision(2);let p={...a,postsort:g};s(p),i(g)}};return l.jsxs(Pse,{children:[l.jsx(Ise,{padBottom:"0.3em",onClick:d,children:"-"}),l.jsx(Ese,{children:c}),l.jsx(Ose,{padBottom:"0.25em",onClick:u,children:"+"})]})},Ose=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #337ab7;
  border-color: #2e6da4;
  /* font-weight: bold; */
  color: white;
  /* color: black; */
  font-size: 1.4em;
  padding: 0.25em 0.5em;
  padding-bottom: ${e=>e.padBottom};
  height: 26px;
  width: 30px;
  outline: 1px solid #36454f;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  user-select: none;
  border: 0px;
  text-decoration: none;
  &:active {
    background: #286090;
  }
`,Ise=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #337ab7;
  border-color: #2e6da4;
  color: white;
  font-weight: bold;
  /* color: black; */
  font-size: 1.4em;
  /* font-weight: bold; */
  padding: 0.25em 0.5em;
  padding-bottom: ${e=>e.padBottom};
  height: 26px;
  width: 30px;
  outline: 1px solid #36454f;
  user-select: none;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 0px;
  text-decoration: none;
  &:active {
    background: #286090;
  }
`,Pse=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
`,Ese=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  background: #337ab7;
  border-color: #2e6da4;
  /* font-weight: bold; */
  color: white;
  font-size: 12px;
  text-align: center;
  padding: 5px;
  outline: 1px solid #36454f;
  width: 60px;
`,$se=e=>e.langObj,Nse=e=>e.currentPage,kse=e=>e.setMobilePresortViewSize,Mse=e=>e.setMobileThinViewSize,Ase=e=>e.setMobileSortViewSize,Dse=e=>e.setMobilePostsortViewSize,Rse=e=>e.setMobileSurveyViewSize,Lse=()=>{const e=X($se),t=E(Nse),r=E(kse),n=E(Mse),o=E(Ase),i=E(Dse),a=E(Rse);let[s,c]=Ee("m_ViewSizeObject",{presort:42,thin:68,sort:72,postsort:42,survey:72});const u=A(D(e.mobileViewSize))||"",d=()=>{if(t==="presort"){let p=+s.presort+2;p=p.toPrecision(4);let m={...s,presort:p};c(m),r(p)}if(t==="thin"){let p=+s.thin+2;p=p.toPrecision(4);let m={...s,thin:p};c(m),n(p)}if(t==="sort"){let p=+s.sort+2;p=p.toPrecision(4);let m={...s,sort:p};c(m),o(p)}if(t==="postsort"){let p=+s.postsort+2;p=p.toPrecision(4);let m={...s,postsort:p};c(m),i(p)}if(t==="survey"){let p=+s.survey+2;p=p.toPrecision(4);let m={...s,survey:p};c(m),a(p)}},f=()=>{if(t==="presort"){let p=+s.presort-2;p=p.toPrecision(4);let m={...s,presort:p};c(m),r(p)}if(t==="thin"){let p=+s.thin-2;p=p.toPrecision(4);let m={...s,thin:p};c(m),n(p)}if(t==="sort"){let p=+s.sort-2;p=p.toPrecision(4);let m={...s,sort:p};c(m),o(p)}if(t==="postsort"){let p=+s.postsort-2;p=p.toPrecision(4);let m={...s,postsort:p};c(m),i(p)}if(t==="survey"){let p=+s.survey-2;p=p.toPrecision(4);let m={...s,survey:p};c(m),a(p)}};return l.jsxs(Bse,{children:[l.jsx(_se,{padBottom:"0.3em",onClick:f,children:"-"}),l.jsx(zse,{children:u}),l.jsx(Fse,{padBottom:"0.25em",onClick:d,children:"+"})]})},Fse=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #337ab7;
  border-color: #2e6da4;
  /* font-weight: bold; */
  color: white;
  /* color: black; */
  font-size: 1.4em;
  padding: 0.25em 0.5em;
  padding-bottom: ${e=>e.padBottom};
  height: 26px;
  width: 35px;
  outline: 1px solid #36454f;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  user-select: none;
  border: 0px;
  text-decoration: none;
  &:active {
    background: #286090;
  }
`,_se=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #337ab7;
  border-color: #2e6da4;
  font-weight: bold;
  color: white;
  /* color: black; */
  font-size: 1.4em;
  /* font-weight: bold; */
  padding: 0.25em 0.5em;
  padding-bottom: ${e=>e.padBottom};
  height: 26px;
  width: 35px;
  outline: 1px solid #36454f;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  border: 0px;
  user-select: none;
  text-decoration: none;
  &:active {
    background: #286090;
  }
`,Bse=S.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  user-select: none;
`,zse=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 26px;
  background: #337ab7;
  border-color: #2e6da4;
  /* font-weight: bold; */
  color: white;
  font-size: 14px;
  text-align: center;
  padding: 5px;
  outline: 1px solid #36454f;
  user-select: none;
`,Hse=e=>{const{history:t,location:r,match:n,staticContext:o,to:i,onClick:a,...s}=e;return l.jsx(Vse,{...s,onClick:c=>{a&&a(c),t.push(i)},tabindex:"0"})},Use=Qi(Hse),Vse=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 0.7em;
  font-weight: bold;
  padding: 0.5em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  padding-right: 0.8em;
  padding-left: 0.8em;
  justify-self: right;
  display: flex;
  align-items: center;
  user-select: none;
  justify-content: center;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,Wse=e=>e.langObj,qse=e=>e.configObj,Gse=e=>e.currentPage,Kse=e=>e.localUsercode,Jse=e=>e.displayNextButton,cb=()=>{const e=X(Wse),t=X(qse),r=E(Gse),n=E(Kse);let o=E(Jse),i=!0,a=!1,s=!0,c=!1,u=60,d="";const f=t.showPostsort,g=t.showSurvey,p=t.showConsentPage,m=t.useThinProcess;let h=So(),x=A(D('{{{center}}}{{{img src="./logo/logo.png" height="20" width="125" /}}}{{{/center}}}'));r==="landing"?(u=60,d=A(D(e.btnNextLanding))||""):r==="consent"?(u=180,d=A(D(e.btnNextConsent))||""):d=A(D(e.btnNext))||"";let v=A(D(e.postsortBackButtonText))||"";if(r==="sort"&&t.setupTarget==="local"){const T=n,N=t.studyTitle,j=new Date,I=j.getFullYear()+"-"+(j.getMonth()+1)+"-"+j.getDate(),$=j.getHours()+":"+j.getMinutes()+":"+j.getSeconds(),w=I+" "+$;x=`${T} - ${N} - ${w}`}(r==="submit"||r==="landing"||r==="consent")&&(a=!0),(r==="landing"||r==="consent"||r==="thin"||r==="postsort"||r==="survey"||r==="sort"||r==="presort")&&(c=!0);let y=!1;r==="survey"&&(y=!0),t.setupTarget==="local"&&r==="landing"&&(c=!1),r==="landing"&&(c=o),(r==="submit"||r==="landing"||r==="consent")&&(i=!1,s=!1),r==="survey"&&(i=!1,s=!0),r==="postsort"&&(a=!1);const C=yj(r,f,g,p,m);return h==="landscape-primary"?null:l.jsxs(Qse,{"data-testid":"mobileFooterDiv",children:[a&&l.jsx(Zse,{"data-testid":"logoDiv",children:x}),y&&l.jsx(Use,{to:"/postsort",children:v}),i&&l.jsx(Tse,{"data-testid":"mobileFooterFontSizerComp"}),s&&l.jsx(Lse,{"data-testid":"mobileFooterViewSizerComp"}),c&&l.jsx(vse,{"data-testid":"mobileFooterNextButton",width:u,to:C,children:d})]})},Qse=S.footer`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top: 1px solid lightgray;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  user-select: none;
`,Zse=S.div`
  padding-top: 5px;
  padding-left: 5px;
  display: flex;
  justify-self: start;
  align-self: center;
  text-align: center;
`,Yse=e=>e.mobilePresortFontSize,Xse=e=>e.langObj,$h=e=>{const t=E(Yse),r=X(Xse);let n=A(D(r==null?void 0:r.mobilePresortEvaluationsComplete))||"",o=e.statement||n;return o==null&&(o=r==null?void 0:r.mobilePresortEvaluationsComplete),l.jsx(ele,{"data-testid":"MobileStatementBoxDiv",color:e.backgroundColor,fontSize:+t,children:o})};$h.propTypes={backgroundColor:er.string.isRequired,fontSize:er.number.isRequired,statement:er.string};const ele=S.div`
  display: flex;
  align-self: center;
  justify-self: center;
  background-color: ${e=>e.color};
  width: 80vw;
  height: fit-content;
  min-height: 14vh;
  font-size: ${e=>`${e.fontSize}vh`};
  color: ${e=>e.theme.mobileText};
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  text-align: center;
  padding: 15px 10px 15px 10px;
  border: 1px solid #36454f;
`,$r=e=>l.jsx(tle,{color:e.color,value:e.value,text:e.text,onTouchStart:e.onClick,child:e.child,children:e.child}),tle=S.div`
  display: flex;
  background-color: ${e=>e.color};
  width: 80vw;
  height: 8vw;
  font-size: 6vw;
  font-weight: bold;
  padding-top: 2px;
  padding-bottom: 1px;
  padding-right: 0px;
  color: ${e=>e.theme.mobileText};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  outline: 1px solid #36454f;
  border-radius: 1.5px;
  user-select: none;
  &:active {
    /* background-color: #36454f; */
    opacity: 0.5;
    outline: 1px solid #36454f;
  }
`,rle=e=>P.createElement("svg",{width:115,height:100,viewBox:"0 0 115 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("path",{d:"M24 50C24 41.891 26.4046 33.964 30.9097 27.2216C35.4149 20.4792 41.8182 15.2241 49.31 12.1209C56.8017 9.01775 65.0455 8.20581 72.9987 9.7878C80.9519 11.3698 88.2574 15.2747 93.9914 21.0086C99.7253 26.7426 103.63 34.0481 105.212 42.0013C106.794 49.9545 105.982 58.1983 102.879 65.69C99.7759 73.1818 94.5208 79.5851 87.7784 84.0903C81.036 88.5954 73.109 91 65 91",stroke:"#999999",strokeWidth:18,strokeLinecap:"round"}),P.createElement("path",{d:"M28 75L52.2487 36.8182H3.75129L28 75Z",fill:"#999999"})),nle=e=>e.mobilePresortFontSize,ole=e=>e.mobilePresortViewSize,ile=e=>{let t=E(nle);const r=JSON.parse(localStorage.getItem("m_FontSizeObject")).presort,n=JSON.parse(localStorage.getItem("m_ViewSizeObject")).presort,o=E(ole);let i=e.statements.map(a=>l.jsx(sle,{fontSize:t===+r?+t:+r,color:a.color,children:l.jsxs("div",{children:[l.jsx(lle,{"data-id":a.id,"data-statement":a.statement,onClick:e.onClick,children:l.jsx(rle,{style:{float:"left",height:"14px",width:"14px",pointerEvents:"none"}})}),a.statement]})},te()));return l.jsx(ale,{viewSize:o===+n?o:n,children:i})},ale=S.div`
  display: flex;
  align-self: top;
  justify-self: center;
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #e5e5e5;
  width: 90vw;
  height: ${e=>`${e.viewSize}vh`};
  font-size: 1.1vh;
  align-items: center;
  gap: 15px;
  justify-content: center;
  border-radius: 3px;
  text-align: center;
  overflow-x: none;
  overflow-y: auto;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 5px;
  border: 1px solid #36454f;
  color: ${e=>e.theme.mobileText};
`,sle=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.color};
  width: 80vw;
  min-height: 8vh;
  font-size: ${e=>`${e.fontSize}vh`};
  border-radius: 3px;
  text-align: center;
  outline: 1px solid #36454f;
  padding: 5px;
`,lle=S.div`
  float: left;
  width: 14px;
  height: 14px;
  margin-right: 5px;
`,Gg=e=>{if(e===4)return"#31C48D";if(e===3)return"#84E1BC";if(e===2)return"#BCF0DA";if(e===1)return"#DEF7EC";if(e===0)return"#F3F4F6";if(e===-1)return"#FDE8E8";if(e===-2)return"#FBD5D5";if(e===-3)return"#F8B4B4";if(e===-4)return"#F98080"};var Kg={exports:{}},Jo={},Jg={exports:{}},ln={},Qg={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=d;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var r="none",n="contents",o=/^(input|select|textarea|button|object|iframe)$/;function i(f,g){return g.getPropertyValue("overflow")!=="visible"||f.scrollWidth<=0&&f.scrollHeight<=0}function a(f){var g=f.offsetWidth<=0&&f.offsetHeight<=0;if(g&&!f.innerHTML)return!0;try{var p=window.getComputedStyle(f),m=p.getPropertyValue("display");return g?m!==n&&i(f,p):m===r}catch{return console.warn("Failed to inspect element style"),!1}}function s(f){for(var g=f,p=f.getRootNode&&f.getRootNode();g&&g!==document.body;){if(p&&g===p&&(g=p.host.parentNode),a(g))return!1;g=g.parentNode}return!0}function c(f,g){var p=f.nodeName.toLowerCase(),m=o.test(p)&&!f.disabled||p==="a"&&f.href||g;return m&&s(f)}function u(f){var g=f.getAttribute("tabindex");g===null&&(g=void 0);var p=isNaN(g);return(p||g>=0)&&c(f,!p)}function d(f){var g=[].slice.call(f.querySelectorAll("*"),0).reduce(function(p,m){return p.concat(m.shadowRoot?d(m.shadowRoot):[m])},[]);return g.filter(u)}e.exports=t.default})(Qg,Qg.exports);var Mj=Qg.exports;Object.defineProperty(ln,"__esModule",{value:!0});ln.resetState=fle;ln.log=gle;ln.handleBlur=$s;ln.handleFocus=Ns;ln.markForFocusLater=ple;ln.returnFocus=mle;ln.popWithoutFocus=hle;ln.setupScopedFocus=vle;ln.teardownScopedFocus=xle;var cle=Mj,ule=dle(cle);function dle(e){return e&&e.__esModule?e:{default:e}}var Wi=[],Ci=null,Zg=!1;function fle(){Wi=[]}function gle(){}function $s(){Zg=!0}function Ns(){if(Zg){if(Zg=!1,!Ci)return;setTimeout(function(){if(!Ci.contains(document.activeElement)){var e=(0,ule.default)(Ci)[0]||Ci;e.focus()}},0)}}function ple(){Wi.push(document.activeElement)}function mle(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Wi.length!==0&&(t=Wi.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function hle(){Wi.length>0&&Wi.pop()}function vle(e){Ci=e,window.addEventListener?(window.addEventListener("blur",$s,!1),document.addEventListener("focus",Ns,!0)):(window.attachEvent("onBlur",$s),document.attachEvent("onFocus",Ns))}function xle(){Ci=null,window.addEventListener?(window.removeEventListener("blur",$s),document.removeEventListener("focus",Ns)):(window.detachEvent("onBlur",$s),document.detachEvent("onFocus",Ns))}var Yg={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=Mj,n=o(r);function o(s){return s&&s.__esModule?s:{default:s}}function i(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return s.activeElement.shadowRoot?i(s.activeElement.shadowRoot):s.activeElement}function a(s,c){var u=(0,n.default)(s);if(!u.length){c.preventDefault();return}var d=void 0,f=c.shiftKey,g=u[0],p=u[u.length-1],m=i();if(s===m){if(!f)return;d=p}if(p===m&&!f&&(d=g),g===m&&f&&(d=p),d){c.preventDefault(),d.focus();return}var h=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),x=h!=null&&h[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(x){var v=u.indexOf(m);if(v>-1&&(v+=f?-1:1),d=u[v],typeof d>"u"){c.preventDefault(),d=f?p:g,d.focus();return}c.preventDefault(),d.focus()}}e.exports=t.default})(Yg,Yg.exports);var yle=Yg.exports,cn={},ble=function(){},Sle=ble,tn={},Aj={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),r={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=r:window.ExecutionEnvironment=r})()})(Aj);var Cle=Aj.exports;Object.defineProperty(tn,"__esModule",{value:!0});tn.canUseDOM=tn.SafeNodeList=tn.SafeHTMLCollection=void 0;var wle=Cle,jle=Tle(wle);function Tle(e){return e&&e.__esModule?e:{default:e}}var bd=jle.default,Ole=bd.canUseDOM?window.HTMLElement:{};tn.SafeHTMLCollection=bd.canUseDOM?window.HTMLCollection:{};tn.SafeNodeList=bd.canUseDOM?window.NodeList:{};tn.canUseDOM=bd.canUseDOM;tn.default=Ole;Object.defineProperty(cn,"__esModule",{value:!0});cn.resetState=Nle;cn.log=kle;cn.assertNodeList=Dj;cn.setElement=Mle;cn.validateElement=Nh;cn.hide=Ale;cn.show=Dle;cn.documentNotReadyOrSSRTesting=Rle;var Ile=Sle,Ple=$le(Ile),Ele=tn;function $le(e){return e&&e.__esModule?e:{default:e}}var Ir=null;function Nle(){Ir&&(Ir.removeAttribute?Ir.removeAttribute("aria-hidden"):Ir.length!=null?Ir.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(Ir).forEach(function(e){return e.removeAttribute("aria-hidden")})),Ir=null}function kle(){}function Dj(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function Mle(e){var t=e;if(typeof t=="string"&&Ele.canUseDOM){var r=document.querySelectorAll(t);Dj(r,t),t=r}return Ir=t||Ir,Ir}function Nh(e){var t=e||Ir;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,Ple.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Ale(e){var t=!0,r=!1,n=void 0;try{for(var o=Nh(e)[Symbol.iterator](),i;!(t=(i=o.next()).done);t=!0){var a=i.value;a.setAttribute("aria-hidden","true")}}catch(s){r=!0,n=s}finally{try{!t&&o.return&&o.return()}finally{if(r)throw n}}}function Dle(e){var t=!0,r=!1,n=void 0;try{for(var o=Nh(e)[Symbol.iterator](),i;!(t=(i=o.next()).done);t=!0){var a=i.value;a.removeAttribute("aria-hidden")}}catch(s){r=!0,n=s}finally{try{!t&&o.return&&o.return()}finally{if(r)throw n}}}function Rle(){Ir=null}var da={};Object.defineProperty(da,"__esModule",{value:!0});da.resetState=Lle;da.log=Fle;var ns={},os={};function ub(e,t){e.classList.remove(t)}function Lle(){var e=document.getElementsByTagName("html")[0];for(var t in ns)ub(e,ns[t]);var r=document.body;for(var n in os)ub(r,os[n]);ns={},os={}}function Fle(){}var _le=function(t,r){return t[r]||(t[r]=0),t[r]+=1,r},Ble=function(t,r){return t[r]&&(t[r]-=1),r},zle=function(t,r,n){n.forEach(function(o){_le(r,o),t.add(o)})},Hle=function(t,r,n){n.forEach(function(o){Ble(r,o),r[o]===0&&t.remove(o)})};da.add=function(t,r){return zle(t.classList,t.nodeName.toLowerCase()=="html"?ns:os,r.split(" "))};da.remove=function(t,r){return Hle(t.classList,t.nodeName.toLowerCase()=="html"?ns:os,r.split(" "))};var fa={};Object.defineProperty(fa,"__esModule",{value:!0});fa.log=Vle;fa.resetState=Wle;function Ule(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Rj=function e(){var t=this;Ule(this,e),this.register=function(r){t.openInstances.indexOf(r)===-1&&(t.openInstances.push(r),t.emit("register"))},this.deregister=function(r){var n=t.openInstances.indexOf(r);n!==-1&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(r){t.subscribers.push(r)},this.emit=function(r){t.subscribers.forEach(function(n){return n(r,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},iu=new Rj;function Vle(){console.log("portalOpenInstances ----------"),console.log(iu.openInstances.length),iu.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function Wle(){iu=new Rj}fa.default=iu;var kh={};Object.defineProperty(kh,"__esModule",{value:!0});kh.resetState=Jle;kh.log=Qle;var qle=fa,Gle=Kle(qle);function Kle(e){return e&&e.__esModule?e:{default:e}}var Lt=void 0,Vr=void 0,_o=[];function Jle(){for(var e=[Lt,Vr],t=0;t<e.length;t++){var r=e[t];r&&r.parentNode&&r.parentNode.removeChild(r)}Lt=Vr=null,_o=[]}function Qle(){console.log("bodyTrap ----------"),console.log(_o.length);for(var e=[Lt,Vr],t=0;t<e.length;t++){var r=e[t],n=r||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")}function db(){_o.length!==0&&_o[_o.length-1].focusContent()}function Zle(e,t){!Lt&&!Vr&&(Lt=document.createElement("div"),Lt.setAttribute("data-react-modal-body-trap",""),Lt.style.position="absolute",Lt.style.opacity="0",Lt.setAttribute("tabindex","0"),Lt.addEventListener("focus",db),Vr=Lt.cloneNode(),Vr.addEventListener("focus",db)),_o=t,_o.length>0?(document.body.firstChild!==Lt&&document.body.insertBefore(Lt,document.body.firstChild),document.body.lastChild!==Vr&&document.body.appendChild(Vr)):(Lt.parentElement&&Lt.parentElement.removeChild(Lt),Vr.parentElement&&Vr.parentElement.removeChild(Vr))}Gle.default.subscribe(Zle);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(B){for(var J=1;J<arguments.length;J++){var Y=arguments[J];for(var k in Y)Object.prototype.hasOwnProperty.call(Y,k)&&(B[k]=Y[k])}return B},n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(B){return typeof B}:function(B){return B&&typeof Symbol=="function"&&B.constructor===Symbol&&B!==Symbol.prototype?"symbol":typeof B},o=function(){function B(J,Y){for(var k=0;k<Y.length;k++){var _=Y[k];_.enumerable=_.enumerable||!1,_.configurable=!0,"value"in _&&(_.writable=!0),Object.defineProperty(J,_.key,_)}}return function(J,Y,k){return Y&&B(J.prototype,Y),k&&B(J,k),J}}(),i=P,a=om,s=N(a),c=ln,u=T(c),d=yle,f=N(d),g=cn,p=T(g),m=da,h=T(m),x=tn,v=N(x),y=fa,C=N(y);function T(B){if(B&&B.__esModule)return B;var J={};if(B!=null)for(var Y in B)Object.prototype.hasOwnProperty.call(B,Y)&&(J[Y]=B[Y]);return J.default=B,J}function N(B){return B&&B.__esModule?B:{default:B}}function j(B,J){if(!(B instanceof J))throw new TypeError("Cannot call a class as a function")}function I(B,J){if(!B)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J&&(typeof J=="object"||typeof J=="function")?J:B}function $(B,J){if(typeof J!="function"&&J!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof J);B.prototype=Object.create(J&&J.prototype,{constructor:{value:B,enumerable:!1,writable:!0,configurable:!0}}),J&&(Object.setPrototypeOf?Object.setPrototypeOf(B,J):B.__proto__=J)}var w={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},U=function(J){return J.code==="Tab"||J.keyCode===9},L=function(J){return J.code==="Escape"||J.keyCode===27},q=0,K=function(B){$(J,B);function J(Y){j(this,J);var k=I(this,(J.__proto__||Object.getPrototypeOf(J)).call(this,Y));return k.setOverlayRef=function(_){k.overlay=_,k.props.overlayRef&&k.props.overlayRef(_)},k.setContentRef=function(_){k.content=_,k.props.contentRef&&k.props.contentRef(_)},k.afterClose=function(){var _=k.props,z=_.appElement,V=_.ariaHideApp,Q=_.htmlOpenClassName,H=_.bodyOpenClassName,G=_.parentSelector,Z=G&&G().ownerDocument||document;H&&h.remove(Z.body,H),Q&&h.remove(Z.getElementsByTagName("html")[0],Q),V&&q>0&&(q-=1,q===0&&p.show(z)),k.props.shouldFocusAfterRender&&(k.props.shouldReturnFocusAfterClose?(u.returnFocus(k.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),k.props.onAfterClose&&k.props.onAfterClose(),C.default.deregister(k)},k.open=function(){k.beforeOpen(),k.state.afterOpen&&k.state.beforeClose?(clearTimeout(k.closeTimer),k.setState({beforeClose:!1})):(k.props.shouldFocusAfterRender&&(u.setupScopedFocus(k.node),u.markForFocusLater()),k.setState({isOpen:!0},function(){k.openAnimationFrame=requestAnimationFrame(function(){k.setState({afterOpen:!0}),k.props.isOpen&&k.props.onAfterOpen&&k.props.onAfterOpen({overlayEl:k.overlay,contentEl:k.content})})}))},k.close=function(){k.props.closeTimeoutMS>0?k.closeWithTimeout():k.closeWithoutTimeout()},k.focusContent=function(){return k.content&&!k.contentHasFocus()&&k.content.focus({preventScroll:!0})},k.closeWithTimeout=function(){var _=Date.now()+k.props.closeTimeoutMS;k.setState({beforeClose:!0,closesAt:_},function(){k.closeTimer=setTimeout(k.closeWithoutTimeout,k.state.closesAt-Date.now())})},k.closeWithoutTimeout=function(){k.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},k.afterClose)},k.handleKeyDown=function(_){U(_)&&(0,f.default)(k.content,_),k.props.shouldCloseOnEsc&&L(_)&&(_.stopPropagation(),k.requestClose(_))},k.handleOverlayOnClick=function(_){k.shouldClose===null&&(k.shouldClose=!0),k.shouldClose&&k.props.shouldCloseOnOverlayClick&&(k.ownerHandlesClose()?k.requestClose(_):k.focusContent()),k.shouldClose=null},k.handleContentOnMouseUp=function(){k.shouldClose=!1},k.handleOverlayOnMouseDown=function(_){!k.props.shouldCloseOnOverlayClick&&_.target==k.overlay&&_.preventDefault()},k.handleContentOnClick=function(){k.shouldClose=!1},k.handleContentOnMouseDown=function(){k.shouldClose=!1},k.requestClose=function(_){return k.ownerHandlesClose()&&k.props.onRequestClose(_)},k.ownerHandlesClose=function(){return k.props.onRequestClose},k.shouldBeClosed=function(){return!k.state.isOpen&&!k.state.beforeClose},k.contentHasFocus=function(){return document.activeElement===k.content||k.content.contains(document.activeElement)},k.buildClassName=function(_,z){var V=(typeof z>"u"?"undefined":n(z))==="object"?z:{base:w[_],afterOpen:w[_]+"--after-open",beforeClose:w[_]+"--before-close"},Q=V.base;return k.state.afterOpen&&(Q=Q+" "+V.afterOpen),k.state.beforeClose&&(Q=Q+" "+V.beforeClose),typeof z=="string"&&z?Q+" "+z:Q},k.attributesFromObject=function(_,z){return Object.keys(z).reduce(function(V,Q){return V[_+"-"+Q]=z[Q],V},{})},k.state={afterOpen:!1,beforeClose:!1},k.shouldClose=null,k.moveFromContentToOverlay=null,k}return o(J,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(k,_){this.props.isOpen&&!k.isOpen?this.open():!this.props.isOpen&&k.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!_.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var k=this.props,_=k.appElement,z=k.ariaHideApp,V=k.htmlOpenClassName,Q=k.bodyOpenClassName,H=k.parentSelector,G=H&&H().ownerDocument||document;Q&&h.add(G.body,Q),V&&h.add(G.getElementsByTagName("html")[0],V),z&&(q+=1,p.hide(_)),C.default.register(this)}},{key:"render",value:function(){var k=this.props,_=k.id,z=k.className,V=k.overlayClassName,Q=k.defaultStyles,H=k.children,G=z?{}:Q.content,Z=V?{}:Q.overlay;if(this.shouldBeClosed())return null;var W={ref:this.setOverlayRef,className:this.buildClassName("overlay",V),style:r({},Z,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},R=r({id:_,ref:this.setContentRef,style:r({},G,this.props.style.content),className:this.buildClassName("content",z),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),O=this.props.contentElement(R,H);return this.props.overlayElement(W,O)}}]),J}(i.Component);K.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},K.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(v.default),s.default.instanceOf(x.SafeHTMLCollection),s.default.instanceOf(x.SafeNodeList),s.default.arrayOf(s.default.instanceOf(v.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=K,e.exports=t.default})(Jg,Jg.exports);var Yle=Jg.exports;function Lj(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Fj(e){function t(r){var n=this.constructor.getDerivedStateFromProps(e,r);return n??null}this.setState(t.bind(this))}function _j(e,t){try{var r=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,n)}finally{this.props=r,this.state=n}}Lj.__suppressDeprecationWarning=!0;Fj.__suppressDeprecationWarning=!0;_j.__suppressDeprecationWarning=!0;function Xle(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var r=null,n=null,o=null;if(typeof t.componentWillMount=="function"?r="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(r="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?n="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(n="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?o="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(o="UNSAFE_componentWillUpdate"),r!==null||n!==null||o!==null){var i=e.displayName||e.name,a=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+i+" uses "+a+" but also contains the following legacy lifecycles:"+(r!==null?`
  `+r:"")+(n!==null?`
  `+n:"")+(o!==null?`
  `+o:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Lj,t.componentWillReceiveProps=Fj),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=_j;var s=t.componentDidUpdate;t.componentDidUpdate=function(u,d,f){var g=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:f;s.call(this,u,d,g)}}return e}const ece=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Xle},Symbol.toStringTag,{value:"Module"})),tce=IS(ece);Object.defineProperty(Jo,"__esModule",{value:!0});Jo.bodyOpenClassName=Jo.portalClassName=void 0;var fb=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},rce=function(){function e(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Bj=P,au=tl(Bj),nce=Tu,su=tl(nce),oce=om,Pe=tl(oce),ice=Yle,gb=tl(ice),ace=cn,sce=cce(ace),Jn=tn,pb=tl(Jn),lce=tce;function cce(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function tl(e){return e&&e.__esModule?e:{default:e}}function uce(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function mb(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function dce(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var fce=Jo.portalClassName="ReactModalPortal",gce=Jo.bodyOpenClassName="ReactModal__Body--open",Po=Jn.canUseDOM&&su.default.createPortal!==void 0,hb=function(t){return document.createElement(t)},vb=function(){return Po?su.default.createPortal:su.default.unstable_renderSubtreeIntoContainer};function Fl(e){return e()}var rl=function(e){dce(t,e);function t(){var r,n,o,i;uce(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return i=(n=(o=mb(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this].concat(s))),o),o.removePortal=function(){!Po&&su.default.unmountComponentAtNode(o.node);var u=Fl(o.props.parentSelector);u&&u.contains(o.node)?u.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},o.portalRef=function(u){o.portal=u},o.renderPortal=function(u){var d=vb(),f=d(o,au.default.createElement(gb.default,fb({defaultStyles:t.defaultStyles},u)),o.node);o.portalRef(f)},n),mb(o,i)}return rce(t,[{key:"componentDidMount",value:function(){if(Jn.canUseDOM){Po||(this.node=hb("div")),this.node.className=this.props.portalClassName;var n=Fl(this.props.parentSelector);n.appendChild(this.node),!Po&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(n){var o=Fl(n.parentSelector),i=Fl(this.props.parentSelector);return{prevParent:o,nextParent:i}}},{key:"componentDidUpdate",value:function(n,o,i){if(Jn.canUseDOM){var a=this.props,s=a.isOpen,c=a.portalClassName;n.portalClassName!==c&&(this.node.className=c);var u=i.prevParent,d=i.nextParent;d!==u&&(u.removeChild(this.node),d.appendChild(this.node)),!(!n.isOpen&&!s)&&!Po&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!Jn.canUseDOM||!this.node||!this.portal)){var n=this.portal.state,o=Date.now(),i=n.isOpen&&this.props.closeTimeoutMS&&(n.closesAt||o+this.props.closeTimeoutMS);i?(n.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,i-o)):this.removePortal()}}},{key:"render",value:function(){if(!Jn.canUseDOM||!Po)return null;!this.node&&Po&&(this.node=hb("div"));var n=vb();return n(au.default.createElement(gb.default,fb({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(n){sce.setElement(n)}}]),t}(Bj.Component);rl.propTypes={isOpen:Pe.default.bool.isRequired,style:Pe.default.shape({content:Pe.default.object,overlay:Pe.default.object}),portalClassName:Pe.default.string,bodyOpenClassName:Pe.default.string,htmlOpenClassName:Pe.default.string,className:Pe.default.oneOfType([Pe.default.string,Pe.default.shape({base:Pe.default.string.isRequired,afterOpen:Pe.default.string.isRequired,beforeClose:Pe.default.string.isRequired})]),overlayClassName:Pe.default.oneOfType([Pe.default.string,Pe.default.shape({base:Pe.default.string.isRequired,afterOpen:Pe.default.string.isRequired,beforeClose:Pe.default.string.isRequired})]),appElement:Pe.default.oneOfType([Pe.default.instanceOf(pb.default),Pe.default.instanceOf(Jn.SafeHTMLCollection),Pe.default.instanceOf(Jn.SafeNodeList),Pe.default.arrayOf(Pe.default.instanceOf(pb.default))]),onAfterOpen:Pe.default.func,onRequestClose:Pe.default.func,closeTimeoutMS:Pe.default.number,ariaHideApp:Pe.default.bool,shouldFocusAfterRender:Pe.default.bool,shouldCloseOnOverlayClick:Pe.default.bool,shouldReturnFocusAfterClose:Pe.default.bool,preventScroll:Pe.default.bool,parentSelector:Pe.default.func,aria:Pe.default.object,data:Pe.default.object,role:Pe.default.string,contentLabel:Pe.default.string,shouldCloseOnEsc:Pe.default.bool,overlayRef:Pe.default.func,contentRef:Pe.default.func,id:Pe.default.string,overlayElement:Pe.default.func,contentElement:Pe.default.func};rl.defaultProps={isOpen:!1,portalClassName:fce,bodyOpenClassName:gce,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,r){return au.default.createElement("div",t,r)},contentElement:function(t,r){return au.default.createElement("div",t,r)}};rl.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,lce.polyfill)(rl);Jo.default=rl;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Jo,n=o(r);function o(i){return i&&i.__esModule?i:{default:i}}t.default=n.default,e.exports=t.default})(Kg,Kg.exports);var pce=Kg.exports;const Mh=ht(pce);var mce=on,hce=function(){return mce.Date.now()},vce=hce,xce=bo,jf=vce,xb=Gw,yce="Expected a function",bce=Math.max,Sce=Math.min;function Cce(e,t,r){var n,o,i,a,s,c,u=0,d=!1,f=!1,g=!0;if(typeof e!="function")throw new TypeError(yce);t=xb(t)||0,xce(r)&&(d=!!r.leading,f="maxWait"in r,i=f?bce(xb(r.maxWait)||0,t):i,g="trailing"in r?!!r.trailing:g);function p(j){var I=n,$=o;return n=o=void 0,u=j,a=e.apply($,I),a}function m(j){return u=j,s=setTimeout(v,t),d?p(j):a}function h(j){var I=j-c,$=j-u,w=t-I;return f?Sce(w,i-$):w}function x(j){var I=j-c,$=j-u;return c===void 0||I>=t||I<0||f&&$>=i}function v(){var j=jf();if(x(j))return y(j);s=setTimeout(v,h(j))}function y(j){return s=void 0,g&&n?p(j):(n=o=void 0,a)}function C(){s!==void 0&&clearTimeout(s),u=0,n=c=o=s=void 0}function T(){return s===void 0?a:y(jf())}function N(){var j=jf(),I=x(j);if(n=arguments,o=this,c=j,I){if(s===void 0)return m(c);if(f)return clearTimeout(s),s=setTimeout(v,t),p(c)}return s===void 0&&(s=setTimeout(v,t)),a}return N.cancel=C,N.flush=T,N}var wce=Cce;const Ah=ht(wce),jce=e=>e.setM_hasScrolledBottom,Tce=e=>e.m_hasScrolledBottom,hr=e=>{const t=e.trigger,r=e.setTrigger,n=E(jce),o=E(Tce),i=P.useRef(null),a=e.head,s=e.text;let c=20;const u=P.useCallback(Ah(g=>{const p=g.target,m=Math.ceil(p.scrollTop+p.clientHeight);Math.ceil(p.scrollHeight)-m<=c?o||n(!0):o&&n(!1)},50),[o,n,c]),d=()=>{r(!1),n(!1)},f={content:{position:"absolute",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",padding:"0",border:"none",background:"transparent",width:"90%",maxWidth:"500px",height:"auto",maxHeight:"85vh",display:"flex",flexDirection:"column",overflow:"visible"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.75)",zIndex:1e3}};return l.jsx(Mh,{id:"presortHelpModal",isOpen:t,onClose:d,style:f,ariaHideApp:!1,bodyOpenClassName:"modal-open",children:l.jsxs(Oce,{children:[l.jsx(Mce,{children:l.jsx(kce,{onClick:d,children:"X"})}),l.jsxs(Ice,{children:[a,l.jsx("hr",{})]}),l.jsxs(Pce,{children:[l.jsxs(Ece,{ref:i,onScroll:u,children:[s,l.jsx($ce,{})]}),l.jsx(Nce,{$isAtBottom:o})]})]})})},Oce=S.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border-radius: 12px;
  width: 100%;

  /* This ensures the container shrinks to fit short text, 
     but stops growing at the max-height set by ReactModal */
  height: 100%;
  max-height: 85vh;

  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  position: relative;
`,Ice=S.div`
  flex-shrink: 0;
  width: 100%;
  padding: 5px 20px 15px 20px;
  color: black;
  font-weight: 600;
  font-size: 20px;

  hr {
    margin-top: 15px;
    border: 0;
    border-top: 1px solid #eee;
  }
`,Pce=S.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 0; /* CRITICAL: Allows flex child to scroll properly */
  flex-grow: 1; /* Fills the rest of the modal height */
`,Ece=S.div`
  /* We removed position: absolute. 
     Now it acts like a normal block that overflows when it gets too big */
  overflow-y: auto;
  padding: 0 20px;

  /* Mobile momentum scrolling */
  -webkit-overflow-scrolling: touch;
  overscroll-behavior: contain;
  overscroll-behavior-y: contain;
  -webkit-overflow-scrolling: touch;

  color: ${e=>e.theme.mobileText||"#444"};
  line-height: 1.6;

  /* Hide scrollbars */
  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`,$ce=S.div`
  height: 60px; /* Ensures the last line of text isn't hidden behind the fade */
  width: 100%;
  flex-shrink: 0;
`,Nce=S.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
  pointer-events: none;
  transition: opacity 0.3s ease-in-out;
  opacity: ${e=>e.$isAtBottom?0:1};
  z-index: 2;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`,kce=S.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-bottom-left-radius: 12px;
  width: 50px;
  height: 44px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background-color: #cc0000;
  }
`,Mce=S.div`
  flex-shrink: 0;
  display: flex;
  justify-content: flex-end;
  width: 100%;
`,Ace=e=>e.langObj,Dce=e=>e.mapObj,Rce=e=>e.triggerMobilePresortRedoModal,Lce=e=>e.setTriggerMobilePresortRedoModal,Fce=e=>e.mobilePresortFontSize,zj=e=>{const t=X(Ace),r=X(Dce),n=E(Rce),o=E(Lce),i=A(D(t.mobilePresortRedoModalHead))||"",a=E(Fce),s=r.useColLabelEmojiPresort;let c="",[u,d]=P.useState({backgroundColor:"#e5e5e5",value:0});const f=()=>{d({backgroundColor:"#BCF0DA",value:2})},g=()=>{d({backgroundColor:"#FBD5D5",value:-2})},p=()=>{d({backgroundColor:"#F3F4F6",value:0})},m=A(D(t.mobilePresortRedoModalConfirmButton))||"",h=A(D(t.mobileModalButtonCancel))||"",x=A(D(t.mobilePresortAssignLeft))||"",v=A(D(t.mobilePresortAssignRight))||"",y=()=>{d({backgroundColor:"#e5e5e5",value:0}),o(!1)},C=s[0]==="true"?l.jsxs(bb,{children:[l.jsx($r,{id:"-2",value:-2,color:"#FBD5D5",onClick:g,child:l.jsxs(Tf,{children:[" ",l.jsx(Rr,{})," "]})}),l.jsx($r,{id:"0",value:0,color:"#F3F4F6",onClick:p,child:l.jsxs(Tf,{children:[" ",l.jsx(Zr,{})," "]})}),l.jsx($r,{id:"2",value:2,color:"#BCF0DA",onClick:f,child:l.jsxs(Tf,{children:[" ",l.jsx(en,{})," "]})})]}):l.jsxs(bb,{children:[l.jsx($r,{id:"-2",value:-2,color:"#FBD5D5",child:l.jsx("div",{children:"-"}),onClick:g}),l.jsx($r,{id:"0",value:0,child:l.jsx("div",{children:"?"}),color:"#F3F4F6",onClick:p}),l.jsx($r,{id:"2",value:2,child:l.jsx("div",{children:"+"}),color:"#BCF0DA",onClick:f})]}),T={content:{display:"flex",justifySelf:"center",flexDirection:"column",alignItems:"center",backgroundColor:"#ffffff",borderRadius:"10px",padding:"0px",paddingBottom:"10px",width:"90vw",maxHeight:"60vh",overflowY:"scroll",WebkitOverflowScrolling:"touch"}};return l.jsxs(Mh,{isOpen:n,onClose:y,center:!0,style:T,overlayClassName:"Overlay",children:[l.jsx(Vce,{children:l.jsx(Uce,{onClick:y,children:"X"})}),l.jsx(_ce,{children:i}),l.jsx("hr",{}),l.jsx(Bce,{children:c}),l.jsx($h,{backgroundColor:u.backgroundColor,statement:e.statement.current.statement,fontSize:+a}),l.jsxs(Hce,{children:[l.jsx(Sb,{children:x}),l.jsx(Sb,{children:v})]}),C,l.jsxs(zce,{children:[l.jsx(yb,{onClick:y,children:h}),l.jsx(yb,{onClick:()=>{e.clickFunction(u.value),y()},children:m})]})]})};zj.propTypes={clickFunction:er.func.isRequired,statement:er.object.isRequired};const _ce=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,Bce=S.div`
  margin-top: 15px;
`,zce=S.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  margin-top: 30px;
  button {
    width: 100px;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #d3d3d3;
    background-color: white;
    color: ${e=>e.theme.mobileText};
    font-weight: bold;
    font-size: 1.2rem;
  }
`,yb=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #d3d3d3;
  background-color: #dedede;
  color: ${e=>e.theme.mobileText};
  font-weight: bold;
  font-size: 1.2rem;
`,Hce=S.div`
  display: flex;
  justify-self: center;
  justify-content: space-between;
  width: 85vw;
  min-height: 6vh;
  margin-top: 5px;
  align-items: flex-end;
  font-size: 2.5vh;
`,bb=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 20px;
  width: 85vw;
  height: 30px;
  justify-self: center;
`,Sb=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  width: 28vw;
`,Uce=S.button`
  background-color: red;
  float: right;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  width: 40px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`,Vce=S.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0px;
`,Tf=S.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,nl=e=>P.createElement("svg",{width:150,height:155,viewBox:"0 0 150 155",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("circle",{cx:75,cy:76,r:70,stroke:"white",strokeWidth:10}),P.createElement("mask",{id:"path-2-outside-1_320_30",maskUnits:"userSpaceOnUse",x:48,y:28,width:56,height:98,fill:"black"},P.createElement("rect",{fill:"white",x:48,y:28,width:56,height:98}),P.createElement("path",{d:"M67.8182 97.8182V97.2727C67.8788 91.4848 68.4848 86.8788 69.6364 83.4545C70.7879 80.0303 72.4242 77.2576 74.5455 75.1364C76.6667 73.0152 79.2121 71.0606 82.1818 69.2727C83.9697 68.1818 85.5758 66.8939 87 65.4091C88.4242 63.8939 89.5455 62.1515 90.3636 60.1818C91.2121 58.2121 91.6364 56.0303 91.6364 53.6364C91.6364 50.6667 90.9394 48.0909 89.5455 45.9091C88.1515 43.7273 86.2879 42.0455 83.9545 40.8636C81.6212 39.6818 79.0303 39.0909 76.1818 39.0909C73.697 39.0909 71.303 39.6061 69 40.6364C66.697 41.6667 64.7727 43.2879 63.2273 45.5C61.6818 47.7121 60.7879 50.6061 60.5455 54.1818H49.0909C49.3333 49.0303 50.6667 44.6212 53.0909 40.9545C55.5455 37.2879 58.7727 34.4848 62.7727 32.5454C66.803 30.6061 71.2727 29.6364 76.1818 29.6364C81.5152 29.6364 86.1515 30.697 90.0909 32.8182C94.0606 34.9394 97.1212 37.8485 99.2727 41.5454C101.455 45.2424 102.545 49.4545 102.545 54.1818C102.545 57.5151 102.03 60.5303 101 63.2273C100 65.9242 98.5455 68.3333 96.6364 70.4545C94.7576 72.5758 92.4849 74.4545 89.8182 76.0909C87.1515 77.7576 85.0152 79.5152 83.4091 81.3636C81.803 83.1818 80.6364 85.3485 79.9091 87.8636C79.1818 90.3788 78.7879 93.5152 78.7273 97.2727V97.8182H67.8182ZM73.6364 124.727C71.3939 124.727 69.4697 123.924 67.8636 122.318C66.2576 120.712 65.4545 118.788 65.4545 116.545C65.4545 114.303 66.2576 112.379 67.8636 110.773C69.4697 109.167 71.3939 108.364 73.6364 108.364C75.8788 108.364 77.803 109.167 79.4091 110.773C81.0152 112.379 81.8182 114.303 81.8182 116.545C81.8182 118.03 81.4394 119.394 80.6818 120.636C79.9545 121.879 78.9697 122.879 77.7273 123.636C76.5152 124.364 75.1515 124.727 73.6364 124.727Z"})),P.createElement("path",{d:"M67.8182 97.8182V97.2727C67.8788 91.4848 68.4848 86.8788 69.6364 83.4545C70.7879 80.0303 72.4242 77.2576 74.5455 75.1364C76.6667 73.0152 79.2121 71.0606 82.1818 69.2727C83.9697 68.1818 85.5758 66.8939 87 65.4091C88.4242 63.8939 89.5455 62.1515 90.3636 60.1818C91.2121 58.2121 91.6364 56.0303 91.6364 53.6364C91.6364 50.6667 90.9394 48.0909 89.5455 45.9091C88.1515 43.7273 86.2879 42.0455 83.9545 40.8636C81.6212 39.6818 79.0303 39.0909 76.1818 39.0909C73.697 39.0909 71.303 39.6061 69 40.6364C66.697 41.6667 64.7727 43.2879 63.2273 45.5C61.6818 47.7121 60.7879 50.6061 60.5455 54.1818H49.0909C49.3333 49.0303 50.6667 44.6212 53.0909 40.9545C55.5455 37.2879 58.7727 34.4848 62.7727 32.5454C66.803 30.6061 71.2727 29.6364 76.1818 29.6364C81.5152 29.6364 86.1515 30.697 90.0909 32.8182C94.0606 34.9394 97.1212 37.8485 99.2727 41.5454C101.455 45.2424 102.545 49.4545 102.545 54.1818C102.545 57.5151 102.03 60.5303 101 63.2273C100 65.9242 98.5455 68.3333 96.6364 70.4545C94.7576 72.5758 92.4849 74.4545 89.8182 76.0909C87.1515 77.7576 85.0152 79.5152 83.4091 81.3636C81.803 83.1818 80.6364 85.3485 79.9091 87.8636C79.1818 90.3788 78.7879 93.5152 78.7273 97.2727V97.8182H67.8182ZM73.6364 124.727C71.3939 124.727 69.4697 123.924 67.8636 122.318C66.2576 120.712 65.4545 118.788 65.4545 116.545C65.4545 114.303 66.2576 112.379 67.8636 110.773C69.4697 109.167 71.3939 108.364 73.6364 108.364C75.8788 108.364 77.803 109.167 79.4091 110.773C81.0152 112.379 81.8182 114.303 81.8182 116.545C81.8182 118.03 81.4394 119.394 80.6818 120.636C79.9545 121.879 78.9697 122.879 77.7273 123.636C76.5152 124.364 75.1515 124.727 73.6364 124.727Z",fill:"white"}),P.createElement("path",{d:"M67.8182 97.8182H66.8182V98.8182H67.8182V97.8182ZM67.8182 97.2727L66.8182 97.2623V97.2727H67.8182ZM69.6364 83.4545L68.6885 83.1358L68.6885 83.1358L69.6364 83.4545ZM74.5455 75.1364L75.2526 75.8435L75.2526 75.8435L74.5455 75.1364ZM82.1818 69.2727L82.6976 70.1295L82.7027 70.1264L82.1818 69.2727ZM87 65.4091L87.7217 66.1013L87.7286 66.094L87 65.4091ZM90.3636 60.1818L89.4451 59.7862L89.4401 59.7982L90.3636 60.1818ZM69 40.6364L68.5916 39.7235L68.5916 39.7235L69 40.6364ZM63.2273 45.5L64.047 46.0727L64.047 46.0727L63.2273 45.5ZM60.5455 54.1818V55.1818H61.48L61.5432 54.2495L60.5455 54.1818ZM49.0909 54.1818L48.092 54.1348L48.0427 55.1818H49.0909V54.1818ZM53.0909 40.9545L52.2599 40.3983L52.2567 40.403L53.0909 40.9545ZM62.7727 32.5454L62.3391 31.6443L62.3365 31.6456L62.7727 32.5454ZM90.0909 32.8182L89.6168 33.6987L89.6196 33.7002L90.0909 32.8182ZM99.2727 41.5454L98.4084 42.0484L98.4115 42.0537L99.2727 41.5454ZM101 63.2273L100.066 62.8704L100.062 62.8796L101 63.2273ZM96.6364 70.4545L95.893 69.7856L95.8878 69.7915L96.6364 70.4545ZM89.8182 76.0909L89.2952 75.2386L89.2882 75.2429L89.8182 76.0909ZM83.4091 81.3636L84.1586 82.0257L84.164 82.0195L83.4091 81.3636ZM78.7273 97.2727L77.7274 97.2566L77.7273 97.2647V97.2727H78.7273ZM78.7273 97.8182V98.8182H79.7273V97.8182H78.7273ZM67.8636 122.318L68.5707 121.611L68.5707 121.611L67.8636 122.318ZM67.8636 110.773L68.5707 111.48L68.5707 111.48L67.8636 110.773ZM80.6818 120.636L79.828 120.116L79.8233 120.123L79.8188 120.131L80.6818 120.636ZM77.7273 123.636L78.2418 124.494L78.2479 124.49L77.7273 123.636ZM68.8182 97.8182V97.2727H66.8182V97.8182H68.8182ZM68.8181 97.2832C68.8782 91.5451 69.48 87.0567 70.5842 83.7733L68.6885 83.1358C67.4897 86.7008 66.8794 91.4246 66.8182 97.2623L68.8181 97.2832ZM70.5842 83.7733C71.6965 80.4658 73.2606 77.8355 75.2526 75.8435L73.8383 74.4293C71.5879 76.6797 69.8793 79.5948 68.6885 83.1358L70.5842 83.7733ZM75.2526 75.8435C77.3082 73.7878 79.787 71.8817 82.6976 70.1294L81.666 68.416C78.6372 70.2395 76.0251 72.2425 73.8383 74.4293L75.2526 75.8435ZM82.7027 70.1264C84.5628 68.9913 86.2367 67.6495 87.7217 66.1013L86.2783 64.7169C84.9148 66.1384 83.3765 67.3723 81.661 68.4191L82.7027 70.1264ZM87.7286 66.094C89.2376 64.4887 90.4239 62.6436 91.2871 60.5654L89.4401 59.7982C88.667 61.6595 87.6109 63.2992 86.2714 64.7242L87.7286 66.094ZM91.282 60.5774C92.1903 58.469 92.6364 56.1505 92.6364 53.6364H90.6364C90.6364 55.9101 90.234 57.9552 89.4452 59.7862L91.282 60.5774ZM92.6364 53.6364C92.6364 50.5046 91.8993 47.7359 90.3882 45.3707L88.7028 46.4475C89.9795 48.4459 90.6364 50.8287 90.6364 53.6364H92.6364ZM90.3882 45.3707C88.8969 43.0365 86.8976 41.2333 84.4064 39.9715L83.5027 41.7557C85.6782 42.8576 87.4062 44.418 88.7028 46.4475L90.3882 45.3707ZM84.4064 39.9715C81.9208 38.7126 79.173 38.0909 76.1818 38.0909V40.0909C78.8876 40.0909 81.3216 40.651 83.5027 41.7557L84.4064 39.9715ZM76.1818 38.0909C73.554 38.0909 71.0211 38.6367 68.5916 39.7235L69.4084 41.5492C71.585 40.5754 73.8399 40.0909 76.1818 40.0909V38.0909ZM68.5916 39.7235C66.1116 40.833 64.0493 42.5774 62.4075 44.9273L64.047 46.0727C65.4962 43.9984 67.2823 42.5003 69.4084 41.5492L68.5916 39.7235ZM62.4075 44.9273C60.7291 47.3297 59.7985 50.4149 59.5477 54.1142L61.5432 54.2495C61.7772 50.7973 62.6345 48.0945 64.047 46.0727L62.4075 44.9273ZM60.5455 53.1818H49.0909V55.1818H60.5455V53.1818ZM50.0898 54.2288C50.3252 49.2257 51.6162 44.9982 53.9251 41.5061L52.2567 40.403C49.7171 44.2443 48.3414 48.8349 48.092 54.1348L50.0898 54.2288ZM53.9219 41.5108C56.2769 37.9928 59.3675 35.3078 63.209 33.4453L62.3365 31.6456C58.178 33.6619 54.814 36.5829 52.2599 40.3983L53.9219 41.5108ZM63.2063 33.4465C67.0886 31.5784 71.408 30.6364 76.1818 30.6364V28.6364C71.1374 28.6364 66.5175 29.6337 62.3391 31.6443L63.2063 33.4465ZM76.1818 30.6364C81.3814 30.6364 85.8487 31.6697 89.6168 33.6986L90.565 31.9377C86.4543 29.7243 81.649 28.6364 76.1818 28.6364V30.6364ZM89.6196 33.7002C93.4346 35.7387 96.3552 38.5204 98.4084 42.0484L100.137 41.0425C97.8872 37.1766 94.6866 34.1401 90.5622 31.9362L89.6196 33.7002ZM98.4115 42.0537C100.493 45.5814 101.545 49.6147 101.545 54.1818H103.545C103.545 49.2944 102.416 44.9034 100.134 41.0372L98.4115 42.0537ZM101.545 54.1818C101.545 57.4118 101.046 60.3035 100.066 62.8704L101.934 63.5841C103.014 60.7571 103.545 57.6185 103.545 54.1818H101.545ZM100.062 62.8796C99.1059 65.4591 97.717 67.759 95.8931 69.7856L97.3797 71.1235C99.3739 68.9077 100.894 66.3893 101.938 63.5749L100.062 62.8796ZM95.8878 69.7915C94.0808 71.8316 91.8864 73.6485 89.2952 75.2386L90.3412 76.9432C93.0833 75.2606 95.4343 73.3199 97.385 71.1176L95.8878 69.7915ZM89.2882 75.2429C86.56 76.948 84.3407 78.7667 82.6542 80.7078L84.164 82.0195C85.6896 80.2636 87.743 78.5671 90.3482 76.9389L89.2882 75.2429ZM82.6596 80.7016C80.948 82.6393 79.7135 84.94 78.9484 87.5859L80.8697 88.1414C81.5592 85.7569 82.6581 83.7244 84.1586 82.0257L82.6596 80.7016ZM78.9484 87.5859C78.1885 90.2142 77.7889 93.4454 77.7274 97.2566L79.7271 97.2889C79.7869 93.5849 80.1752 90.5434 80.8697 88.1414L78.9484 87.5859ZM77.7273 97.2727V97.8182H79.7273V97.2727H77.7273ZM78.7273 96.8182H67.8182V98.8182H78.7273V96.8182ZM73.6364 123.727C71.663 123.727 69.992 123.032 68.5707 121.611L67.1565 123.025C68.9474 124.816 71.1249 125.727 73.6364 125.727V123.727ZM68.5707 121.611C67.1495 120.19 66.4545 118.519 66.4545 116.545H64.4545C64.4545 119.057 65.3656 121.234 67.1565 123.025L68.5707 121.611ZM66.4545 116.545C66.4545 114.572 67.1495 112.901 68.5707 111.48L67.1565 110.066C65.3656 111.857 64.4545 114.034 64.4545 116.545H66.4545ZM68.5707 111.48C69.992 110.059 71.663 109.364 73.6364 109.364V107.364C71.1249 107.364 68.9474 108.275 67.1565 110.066L68.5707 111.48ZM73.6364 109.364C75.6098 109.364 77.2807 110.059 78.702 111.48L80.1162 110.066C78.3253 108.275 76.1478 107.364 73.6364 107.364V109.364ZM78.702 111.48C80.1232 112.901 80.8182 114.572 80.8182 116.545H82.8182C82.8182 114.034 81.9071 111.857 80.1162 110.066L78.702 111.48ZM80.8182 116.545C80.8182 117.851 80.4879 119.033 79.828 120.116L81.5356 121.157C82.3908 119.754 82.8182 118.21 82.8182 116.545H80.8182ZM79.8188 120.131C79.176 121.229 78.3095 122.11 77.2067 122.783L78.2479 124.49C79.6299 123.647 80.7331 122.528 81.5448 121.142L79.8188 120.131ZM77.2128 122.779C76.1673 123.406 74.9838 123.727 73.6364 123.727V125.727C75.3192 125.727 76.863 125.321 78.2418 124.494L77.2128 122.779Z",fill:"white",mask:"url(#path-2-outside-1_320_30)"})),Wce=e=>e.langObj,qce=e=>e.configObj,Gce=e=>e.mapObj,Kce=e=>e.statementsObj,Jce=e=>e.isLoggedIn,Qce=e=>e.setCurrentPage,Zce=e=>e.setProgressScore,Yce=e=>e.resetColumnStatements,Xce=e=>e.setTriggerMobilePresortFinishedModal,eue=e=>e.setPresortFinished,tue=e=>e.mobilePresortFontSize,rue=e=>e.setTriggerMobilePresortRedoModal,nue=e=>e.setTriggerMobilePresortHelpModal,oue=e=>e.triggerMobilePresortHelpModal,iue=e=>e.triggerMobilePresortFinishedModal,aue=e=>e.setTriggerMobilePresortFinishedModal,Cb=()=>{var ye;const e=X(Wce),t=X(qce),r=X(Gce),n=X(Kce),o=X(Jce),i=E(Qce),a=E(Zce),s=X(Yce),c=E(eue),u=E(tue),d=E(rue),f=E(Xce),g=E(oue),p=E(nue),m=be=>be.triggerMobilePresortPreventNavModal,h=be=>be.setTriggerMobilePresortPreventNavModal,x=E(iue),v=E(aue),y=r.useColLabelEmojiPresort,C=[l.jsx(go,{},"emojiN5"),l.jsx(cd,{},"emojiN4"),l.jsx(Rr,{},"emojiN3"),l.jsx(kr,{},"emojiN2"),l.jsx(Kr,{},"emojiN1"),l.jsx(Zr,{},"emoji0"),l.jsx(Jr,{},"emoji1"),l.jsx(Mr,{},"emoji2"),l.jsx(en,{},"emoji3"),l.jsx(ud,{},"emoji4"),l.jsx(Ln,{},"emoji5")],T=A(D(e.mobilePresortConditionsOfInstruction))||"",N=A(D(e.mobilePresortCompletedLabel))||"",j=A(D(e.mobilePresortAssignLeft))||"",I=A(D(e.mobilePresortAssignRight))||"",$=A(D(e.mobilePresortProcessCompleteMessage))||"",w=A(D(e.screenOrientationText))||"",U=A(D(e.expandViewMessage))||"",L=A(D(e.mobilePresortHelpModalHead))||"",q=A(D(e.mobilePresortHelpModalText))||"",K=E(m),B=E(h),J=A(D(e.mobilePresortPreventNavModalHead))||"",Y=A(D(e.mobilePresortPreventNavModalText))||"",k=A(D(e.mobilePresortFinishedModalHead))||"",_=A(D(e.mobilePresortFinishedModalText))||"";let[z,V]=Ee("presortArray2",[...JSON.parse(localStorage.getItem("presortArray"))]),[Q,H]=Ee("m_PresortStatementCount",0),[G,Z]=Ee("m_PresortResults",[]),W=So(),R=P.useRef({id:"",statement:""});const O=P.useRef(null);P.useEffect(()=>(O.current=Date.now(),(async()=>{await i("presort"),localStorage.setItem("currentPage","presort"),await a(20)})(),()=>{jr(O.current,"presortPage","presortPage")}),[i,a]);let b=n.columnStatements;t.setupTarget==="local"&&(b=JSON.parse(JSON.stringify(s)));const F=t.initialScreen,M=()=>{p(!0)},ee=be=>{d(!0),R.current.id=be.target.dataset.id,R.current.statement=be.target.dataset.statement},ie=()=>{Se(-2),navigator.vibrate&&navigator.vibrate(100)},de=()=>{Se(0),navigator.vibrate&&navigator.vibrate(100)},ce=()=>{Se(2),navigator.vibrate&&navigator.vibrate(100)},fe=be=>{d(!1);let xe=G.find(We=>We.id===R.current.id);xe.psValue=be,xe.color=Gg(be),be>0?(xe.pinkChecked=!1,xe.yellowChecked=!1,xe.greenChecked=!0):be<0?(xe.pinkChecked=!0,xe.yellowChecked=!1,xe.greenChecked=!1):(xe.pinkChecked=!1,xe.yellowChecked=!0,xe.greenChecked=!1),G.sort((We,ot)=>{let Mt=+We.id.slice(1),At=+ot.id.slice(1);return We.psValue===ot.psValue?Mt-At:ot.psValue-We.psValue}),Z([...G]);let je=G.filter(We=>+We.psValue>0),he=G.filter(We=>+We.psValue<0);localStorage.setItem("selectedPosItems",JSON.stringify(je)),localStorage.setItem("selectedNegItems",JSON.stringify(he));let Oe=JSON.parse(localStorage.getItem("sortRightArrays")),ke=JSON.parse(localStorage.getItem("sortLeftArrays")),Ze=je.length,Ge=he.length;Bg(Ze,Ge,Oe,ke)},Se=P.useCallback(be=>{try{if(z.length>0){let xe=z.shift(),je=Q+1;V(z),H(je),be>0?(xe.pinkChecked=!1,xe.yellowChecked=!1,xe.greenChecked=!0):be<0?(xe.pinkChecked=!0,xe.yellowChecked=!1,xe.greenChecked=!1):(xe.pinkChecked=!1,xe.yellowChecked=!0,xe.greenChecked=!1),xe.psValue=be,xe.color=Gg(be),G.push({...xe}),G.sort((ke,Ze)=>{let Ge=+ke.id.slice(1),We=+Ze.id.slice(1);return ke.psValue===Ze.psValue?Ge-We:Ze.psValue-ke.psValue}),Z(G);let he=G.filter(ke=>+ke.psValue>0),Oe=G.filter(ke=>+ke.psValue<0);if(localStorage.setItem("selectedPosItems",JSON.stringify(he)),localStorage.setItem("selectedNegItems",JSON.stringify(Oe)),z.length===0){let ke=JSON.parse(localStorage.getItem("sortRightArrays")),Ze=JSON.parse(localStorage.getItem("sortLeftArrays")),Ge=JSON.parse(localStorage.getItem("newCols")),We=he.length,ot=Oe.length,Mt=Bg(We,ot,ke,Ze);localStorage.setItem("thinDisplayControllerArray",JSON.stringify(Mt)),Ge.statementList=G,localStorage.setItem("newCols",JSON.stringify(Ge)),f(!0),localStorage.setItem("m_PresortFinished","true")}}}catch(xe){console.error(xe)}});if(P.useEffect(()=>{const be=xe=>{if(xe.key==="1"||xe.key===1)Se(-2);else if(xe.key==="2"||xe.key===2)Se(0);else if(xe.key==="3"||xe.key===3)Se(2);else return};return window.addEventListener("keyup",be),()=>window.removeEventListener("keyup",be)},[Se]),z.length===0&&setTimeout(()=>{c(!0)},100),F!=="anonymous"&&o===!1)return l.jsx($3,{});if(W==="landscape-primary")return l.jsx(uue,{children:l.jsx("h1",{children:w})});let le=b.statementList.length,pe=JSON.parse(localStorage.getItem("m_PresortDisplayStatements"));const me=y[0]==="true"?l.jsxs(wb,{children:[l.jsx($r,{id:"-2",value:-2,color:"#FBD5D5",onClick:ie,"data-testid":"value-button-neg1",child:l.jsx(si,{children:l.jsx(si,{children:C[+r.presortEmojiNegativeIndex]})})}),l.jsx($r,{id:"0",value:0,color:"#F3F4F6",onClick:de,"data-testid":"value-button-neu1",child:l.jsx(si,{children:l.jsx(si,{children:C[+r.presortEmojiNeutralIndex]})})}),l.jsx($r,{id:"2",value:2,color:"#BCF0DA",onClick:ce,"data-testid":"value-button-pos1",child:l.jsx(si,{children:l.jsx(si,{children:C[+r.presortEmojiPositiveIndex]})})})]}):l.jsxs(wb,{children:[l.jsx($r,{id:"-2",value:-2,color:"#FBD5D5",child:l.jsx("div",{children:"-"}),onClick:ie,"data-testid":"value-button-neg2"}),l.jsx($r,{id:"0",value:0,child:l.jsx("div",{children:"?"}),color:"#F3F4F6",onClick:de,"data-testid":"value-button-neu2"}),l.jsx($r,{id:"2",value:2,child:l.jsx("div",{children:"+"}),color:"#BCF0DA",onClick:ce,"data-testid":"value-button-pos2"})]});return l.jsxs(lue,{children:[l.jsxs(hue,{children:[l.jsx(hr,{head:L,text:q,trigger:g,setTrigger:p,showArrow:!0,height:"450px"}),l.jsx(zj,{clickFunction:fe,statement:R}),l.jsx(hr,{head:J,text:Y,trigger:K,setTrigger:B,showArrow:!1,height:"150px"}),l.jsx(hr,{head:k,text:_,trigger:x,setTrigger:v,showArrow:!1,height:"300px"})]}),l.jsxs(sue,{background:t.headerBarColor,children:[T,l.jsx(gue,{onClick:M,children:l.jsx(nl,{})})]}),pe.display?l.jsxs(l.Fragment,{children:[l.jsx($h,{fontSize:+u,statement:(ye=z==null?void 0:z[0])==null?void 0:ye.statement,backgroundColor:"#e5e5e5"}),l.jsxs(due,{children:[l.jsx(jb,{children:j}),l.jsx(fue,{children:`${Q} / ${le}`}),l.jsx(jb,{children:I})]}),me,l.jsx(cue,{children:N}),l.jsx(ile,{statements:G,onClick:ee}),l.jsx(mue,{children:U})]}):l.jsx(pue,{children:l.jsx("p",{children:$})})]})},sue=S.div`
  display: flex;
  width: 100vw;
  padding-left: 10px;
  padding-right: 1.5vw;
  padding-top: 5px;
  padding-bottom: 5px;
  min-height: 30px;
  background-color: ${e=>e.background};
  justify-content: space-between;
  align-items: center;
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  user-select: none;
  margin-bottom: 10px;
`,lue=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  user-select: none;
  background-color: #f3f4f6;
`,wb=S.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 20px;
  width: 85vw;
  height: 30px;
  justify-self: center;
`,cue=S.div`
  display: flex;
  justify-content: left;
  align-items: flex-end;
  font-size: 2.5vh;
  padding-left: 2.5vw;
  color: ${e=>e.theme.mobileText};
`,uue=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`,due=S.div`
  display: flex;
  justify-self: center;
  justify-content: space-between;
  width: 85vw;
  min-height: 6vh;
  margin-top: 5px;
  align-items: flex-end;
  font-size: 2.5vh;
`,jb=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  width: 28vw;
`,fue=S.div`
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  width: 28vw;
  height: 7vh;
  color: ${e=>e.theme.mobileText};
`,gue=S.div`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  margin-left: 5px;
  align-items: center;
  padding-bottom: 5px;
  width: 20px;
  height: 20px;
  color: black;
  font-size: 2.5vh;
  font-weight: bold;
  user-select: none;
`,pue=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 3.5vh;
  font-weight: bold;
  min-height: 30vh;
  margin-top: 30px;
  width: 80vw;
  color: ${e=>e.theme.mobileText};
  font-size: 22px;
`,mue=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
  user-select: none;
`,hue=S.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,si=S.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,Hj=e=>P.createElement("svg",{width:25,height:41,viewBox:"0 0 25 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("path",{d:"M25 27L12.6289 40.4021L1.90735e-06 27L5.92784 27L12.6289 33.701L19.0722 27H25Z",fill:"#899499",fillOpacity:.5}),P.createElement("path",{d:"M25 18L12.6289 31.4021L1.90735e-06 18L5.92784 18L12.6289 24.701L19.0722 18H25Z",fill:"#899499",fillOpacity:.4}),P.createElement("path",{d:"M25 9.00001L12.6289 22.4021L1.90735e-06 9.00001L5.92784 9.00001L12.6289 15.701L19.0722 9.00001H25Z",fill:"#899499",fillOpacity:.3}),P.createElement("path",{d:"M25 7.62939e-06L12.6289 13.4021L1.90735e-06 7.62939e-06L5.92784 7.62939e-06L12.6289 6.70104L19.0722 7.62939e-06H25Z",fill:"#899499",fillOpacity:.2})),Uj=e=>P.createElement("svg",{width:25,height:41,viewBox:"0 0 25 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("path",{d:"M0 13.4021L12.3711 0L25 13.4021H19.0722L12.3711 6.70103L5.92783 13.4021H0Z",fill:"#899499",fillOpacity:.5}),P.createElement("path",{d:"M0 22.4021L12.3711 9L25 22.4021H19.0722L12.3711 15.701L5.92783 22.4021H0Z",fill:"#899499",fillOpacity:.4}),P.createElement("path",{d:"M0 31.4021L12.3711 18L25 31.4021H19.0722L12.3711 24.701L5.92783 31.4021H0Z",fill:"#899499",fillOpacity:.3}),P.createElement("path",{d:"M0 40.4021L12.3711 27L25 40.4021H19.0722L12.3711 33.701L5.92783 40.4021H0Z",fill:"#899499",fillOpacity:.2})),vue=e=>e.langObj,xue=e=>{const t=X(vue);let r=A(D(t.mobileThinSelectedText))||"",n=e.selected||0,o=e.required||0;return l.jsx(yue,{selected:n,required:o,children:l.jsx("p",{children:`${r}: ${n} / ${o}`})})},yue=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 34px;
  padding: 0.25em 0.5em;
  border-radius: 5px;
  border: 0.5px solid #d3d3d3;
  user-select: none;
  font-size: 1.2em;
  color: ${e=>e.theme.mobileText};

  p {
    font-size: 1.2rem;
    color: ${e=>e.theme.mobileText};
    font-weight: normal;
  }
  background-color: ${e=>e.selected===e.required&&e.selected>0?"#BCF0DA":e.selected>e.required?"#FFC5D3":"white"};
`,bue=e=>e.langObj,Sue=e=>e.triggerMobileThinMoveTopModal,Cue=e=>e.setTriggerMobileThinMoveTopModal,wue=({onClick:e})=>{const t=X(bue),r=E(Sue),n=E(Cue),o=A(D(t.moveTopMobileHead))||"",i=A(D(t.moveAllTopMobileText))||"",a=A(D(t.moveTopMobileButtonOK))||"",s=A(D(t.mobileModalButtonCancel))||"",c=()=>{n(!1)},u=()=>{e==null||e(),c()},d=l.jsx(Mue,{children:l.jsx(Aue,{onClick:c,"aria-label":"Close modal",children:"×"})});return l.jsx(_e,{open:r,onClose:c,center:!0,closeIcon:d,classNames:{modal:"custom-move-all-modal-height",overlay:"mobile-thin-modal-overlay"},styles:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center"}},children:l.jsxs(jue,{"data-testid":"mobileThinMoveTopModalDiv",children:[l.jsxs(Tue,{children:[l.jsx(Oue,{children:o}),l.jsx(Iue,{})]}),l.jsxs(Pue,{children:[l.jsx(Eue,{children:i}),l.jsxs($ue,{children:[l.jsx(Nue,{onClick:c,children:s}),l.jsx(kue,{onClick:u,children:a})]})]})]})})},jue=S.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  height: 100%;
  max-height: 40vh;
  min-height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,Tue=S.header`
  padding: 16px 20px 0 20px;
  text-align: center;
  background: white;
  flex-shrink: 0;
`,Oue=S.h2`
  margin: 0 0 12px 0;
  font-size: clamp(1.1rem, 4vw, 1.3rem);
  font-weight: 600;
  color: #1f2937;
  line-height: 1.3;
`,Iue=S.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
  margin: 0 -20px;
`,Pue=S.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 20px 20px;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  min-height: 0;
`,Eue=S.div`
  font-size: clamp(1rem, 3.5vw, 1.125rem);
  line-height: 1.6;
  color: #4b5563;
  text-align: center;
  margin: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,$ue=S.div`
  display: flex;
  gap: 12px;
  width: 100%;
  max-width: 280px;
`,Vj=S.button`
  flex: 1;
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  &:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`,Nue=S(Vj)`
  background: #f3f4f6;
  color: #6b7280;
  border: 1px solid #d1d5db;

  &:hover:not(:disabled) {
    background: #e5e7eb;
    color: #4b5563;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,kue=S(Vj)`
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
  }
`,Mue=S.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`,Aue=S.div`
  background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
  color: white;
  border: none;
  width: 44px;
  height: 44px;
  font-size: 24px;
  font-weight: 300;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 8px;
  border-top-right-radius: 12px;
  transition: all 0.2s ease-in-out;
  box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);

  &:hover {
    background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(239, 68, 68, 0.4);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: 2px solid #fca5a5;
    outline-offset: 2px;
  }
`,Due=(e,t)=>(e.forEach(r=>{let n=r.id,o=r.targetcol;t.statementList.forEach(i=>{i.id===n&&(t.vCols[o].push(i),Fo(t.statementList,a=>a.id===n))})}),t),Rue=(e,t)=>(e.forEach(r=>{let n=r.id,o=r.targetcol;t.statementList.forEach(i=>{i.id===n&&(t.vCols[o].push(i),Fo(t.statementList,a=>a.id===n))})}),t);function Tb({nativeEvent:e}){return window.TouchEvent?e instanceof TouchEvent:"touches"in e}function Ob(e){return e.nativeEvent instanceof MouseEvent}function Lue(e,t={}){const{threshold:r=400,onStart:n,onFinish:o,onCancel:i}=t,a=P.useRef(!1),s=P.useRef(!1),c=P.useRef();return P.useMemo(()=>{if(typeof e!="function")return{};const u=p=>{!Ob(p)&&!Tb(p)||(n&&n(p),s.current=!0,c.current=setTimeout(()=>{e(p),a.current=!0},r))},d=p=>{!Ob(p)&&!Tb(p)||(a.current?o&&o(p):s.current&&i&&i(p),a.current=!1,s.current=!1,c.current&&window.clearTimeout(c.current))};return{...{onMouseDown:u,onMouseUp:d,onMouseLeave:d},...{onTouchStart:u,onTouchEnd:d}}},[e,r,i,o,n])}const Fue=e=>e.langObj,_ue=e=>e.configObj,Bue=e=>e.showConfirmButton,zue=e=>e.setCurrentPage,Hue=e=>e.setProgressScore,Uue=e=>e.setTriggerMobileThinMoveTopModal,Vue=e=>e.mobileThinFontSize,Wue=e=>e.mobileThinViewSize,que=e=>e.setTriggerMobileThinHelpModal,Gue=e=>e.setTriggerMobileThinGuidanceModal,Kue=e=>e.setTriggerMobileThinScrollBottomModal,Jue=e=>e.triggerMobileThinHelpModal,Que=e=>e.setTriggerMobileThinHelpModal,Zue=e=>e.triggerMobileThinPreventNavModal,Yue=e=>e.setTriggerMobileThinPreventNavModal,Xue=e=>e.triggerMobileThinScrollBottomModal,ede=e=>e.setTriggerMobileThinScrollBottomModal,tde=e=>e.triggerMobileThinGuidanceModal,rde=e=>e.setTriggerMobileThinGuidanceModal,Ib=()=>{var ot,Mt,At,un,dt,Vt,dr,ga,pa,ma;const e=X(Fue),t=X(_ue),r=E(Bue),n=E(zue),o=E(Hue),i=E(Uue),a=E(Vue),s=E(Wue),c=E(que),u=E(Gue),d=t.thinGuidanceModalMaxIterations,f=E(Kue),g=A(D(e.mobileThinHelpModalText))||"",p=E(Jue),m=E(Que),h=E(Zue),x=E(Yue),v=E(Xue),y=E(ede),C=E(tde),T=E(rde),N=A(D(e.mobileThinProcessCompleteMessage))||"",j=A(D(e.mobileGuidanceModalRight1Header))||"",I=A(D(e.mobileGuidanceModalRight1Text))||"",$=A(D(e.mobileGuidanceModalRight2Header))||"",w=A(D(e.mobileGuidanceModalRight2Text))||"",U=A(D(e.mobileGuidanceModalLeft1Header))||"",L=A(D(e.mobileGuidanceModalLeft1Text))||"",q=A(D(e.mobileGuidanceModalLeft2Header))||"",K=A(D(e.mobileGuidanceModalLeft2Text))||"",B=A(D(e.mobileThinConditionsOfInstruction))||"",J=A(D(e.screenOrientationText))||"",Y=A(D(e.mobileThinSubmitButtonText))||"",k=A(D(e.expandViewMessage))||"",_=A(D(e.thinningPreventNavModalHead))||"",z=A(D(e.thinningPreventNavModalText))||"",V=A(D(e.mobileThinScrollBottomModalHead))||"",Q=A(D(e.mobileThinScrollBottomModalText))||"";let[H,G]=Ee("selectedNegItems",JSON.parse(localStorage.getItem("selectedNegItems"))),[Z,W]=Ee("selectedPosItems",JSON.parse(localStorage.getItem("selectedPosItems"))),[R,O]=Ee("thinDisplayControllerArray",JSON.parse(localStorage.getItem("thinDisplayControllerArray")));const[b,F]=P.useState(!1);let M=P.useRef({id:"",statement:"",color:"",direction:""}),ee=P.useRef(null),ie=P.useRef({header:"",text:""}),de=So();const ce=P.useRef(null);P.useEffect(()=>(ce.current=Date.now(),(async()=>{await n("thin"),localStorage.setItem("currentPage","thin"),await o(20)})(),()=>{jr(ce.current,"thinningPage","thinningPage")}),[n,o]),P.useEffect(()=>{ee.current&&(ee.current.scrollTop=0)},[]);const fe=Lue(Me=>{M.current={id:Me.target.dataset.id,statement:Me.target.dataset.statement,color:Me.target.dataset.color,direction:Me.target.dataset.direction},i(!0)},{threshold:1e3});let Se=150;const le=P.useCallback(Ah(Me=>{const He=Me.target,it=He.scrollTop,ft=He.scrollHeight,Ke=He.clientHeight;ft-(it+Ke)<=Se&&F(!0)},100),[Se]);let pe,me=0;if(((ot=R[0])==null?void 0:ot.side)==="right"&&(((Mt=R[0])==null?void 0:Mt.iteration)===1&&(ie.current={header:j,text:I}),((At=R[0])==null?void 0:At.iteration)>1&&(ie.current={header:$,text:w}),pe=[...Z]),((un=R[0])==null?void 0:un.side)==="left"&&(((dt=R[0])==null?void 0:dt.iteration)===1&&(ie.current={header:U,text:L}),((Vt=R[0])==null?void 0:Vt.iteration)>1&&(ie.current={header:q,text:K}),pe=[...H]),R.length===0){pe=[];let Me=JSON.parse(localStorage.getItem("newCols")),He=JSON.parse(localStorage.getItem("finalSortColData")),it=hj(Me,He),Ke=JSON.parse(localStorage.getItem("finalSortColData")).reverse(),Zt=[];Ke.forEach(dn=>{let Bn=it.vCols[dn[0]];Zt.push(...Bn)}),Zt.forEach(dn=>{dn.selected=!1}),localStorage.setItem("m_ThinDisplayStatements",JSON.stringify({display:!1})),localStorage.setItem("m_ThinningFinished","true"),localStorage.setItem("m_FinalThinCols",JSON.stringify(Zt)),localStorage.setItem("columnStatements",JSON.stringify(it))}const ye=JSON.parse(localStorage.getItem("m_ViewSizeObject")).thin,be=JSON.parse(localStorage.getItem("m_FontSizeObject")).thin,xe=()=>{c(!0)},je=Me=>{var it,ft;let He=Me.target.getAttribute("data-targetcol");pe.forEach(Ke=>{Ke.id===Me.target.dataset.id&&(Ke.targetcol=He,Ke.selected=!Ke.selected),Ke.selected===!0?Ke.color="lightyellow":Ke.color=Gg(+Ke.psValue)}),((it=R[0])==null?void 0:it.side)==="right"&&W([...pe]),((ft=R[0])==null?void 0:ft.side)==="left"&&G([...pe])},he=Me=>{var ft,Ke;let He=pe.findIndex(Zt=>Zt.id===Me.target.dataset.id);if(He===0)return;const it=pe[He];pe[He]=pe[He-1],pe[He-1]=it,((ft=R[0])==null?void 0:ft.side)==="right"&&W([...pe]),((Ke=R[0])==null?void 0:Ke.side)==="left"&&G([...pe])},Oe=Me=>{var ft,Ke;let He=pe.findIndex(Zt=>Zt.id===Me.target.dataset.id);if(He>=pe.length-1)return;const it=pe[He];pe[He]=pe[He+1],pe[He+1]=it,((ft=R[0])==null?void 0:ft.side)==="right"&&W([...pe]),((Ke=R[0])==null?void 0:Ke.side)==="left"&&G([...pe])},ke=()=>{var it,ft,Ke,Zt;const Me=ee.current;let He;if(Me&&(He=Me.scrollHeight>Me.clientHeight),He===!0&&b===!1){f(!0);return}if(F(!1),((it=R[0])==null?void 0:it.side)==="right"){let dn=Z.filter(fn=>fn.selected===!0),Bn=Z.filter(fn=>fn.selected!==!0),ei=JSON.parse(localStorage.getItem("newCols"));const ti=Due(dn,ei);localStorage.setItem("newCols",JSON.stringify(ti)),R.shift(),O([...R]),W([...Bn]),((ft=R[0])==null?void 0:ft.iteration)<=d&&u(!0);return}if(((Ke=R[0])==null?void 0:Ke.side)==="left"){let dn=H.filter(fn=>fn.selected===!0),Bn=H.filter(fn=>fn.selected!==!0),ei=JSON.parse(localStorage.getItem("newCols"));const ti=Rue(dn,ei);localStorage.setItem("newCols",JSON.stringify(ti)),R.shift(),O([...R]),G([...Bn]),((Zt=R[0])==null?void 0:Zt.iteration)<=d&&u(!0);return}},Ze=()=>{pe.forEach((Me,He)=>{var it,ft;if(Me.selected===!0){let Ke=pe.splice(He,1);pe.unshift(Ke[0])}((it=R[0])==null?void 0:it.side)==="right"&&W([...pe]),((ft=R[0])==null?void 0:ft.side)==="left"&&G([...pe])}),i(!1)};if(de==="landscape-primary")return l.jsx(pde,{children:l.jsx("h1",{children:J})});let Ge=(pe||[]).map(Me=>{var He,it;return Me.selected===!0&&me++,l.jsxs(ude,{children:[l.jsx(cde,{"data-id":Me.id,"data-statement":Me.statement,"data-color":Me.color,"data-direction":"down",onClick:Oe,children:l.jsx(Hj,{style:{pointerEvents:"none",opacity:"0.75"}})}),l.jsx(sde,{onClick:je,id:Me.id,color:Me.color,fontSize:a===+be?a:be,"data-targetcol":(He=R[0])==null?void 0:He.targetCol,"data-max":(it=R[0])==null?void 0:it.maxNum,"data-selected":Me.selected,"data-id":Me.id,"data-direction":"allTop",children:Me.statement},te()),l.jsx(lde,{"data-id":Me.id,...fe,"data-statement":Me.statement,"data-color":Me.color,"data-direction":"up",onClick:he,children:l.jsx(Uj,{style:{pointerEvents:"none",opacity:"0.75"}})})]},te())}),We=JSON.parse(localStorage.getItem("m_ThinDisplayStatements"));return l.jsxs(ide,{children:[l.jsx(wue,{cardId:M,onClick:Ze}),l.jsx(hr,{head:ie.current.header,text:ie.current.text,trigger:C,setTrigger:T,showArrow:!1,height:"250px"}),l.jsx(hr,{head:ie.current.header,text:g,trigger:p,setTrigger:m,showArrow:!0,height:"450px"}),l.jsx(hr,{head:V,text:Q,trigger:v,setTrigger:y,showArrow:!1,height:"150px"}),l.jsx(hr,{head:_,text:z,trigger:h,setTrigger:x,showArrow:!1,height:"150px"}),l.jsxs(ode,{background:t.headerBarColor,children:[B,l.jsx(fde,{onClick:xe,children:l.jsx(nl,{})})]}),l.jsxs(dde,{children:[l.jsx(xue,{selected:me,required:(dr=R[0])==null?void 0:dr.maxNum}),r&&l.jsx(ade,{onClick:ke,disabled:me!==((ga=R[0])==null?void 0:ga.maxNum),fontColor:me===((pa=R[0])==null?void 0:pa.maxNum)?"white":"#3645f",color:me===((ma=R[0])==null?void 0:ma.maxNum)?"#337ab7":"#d3d3d3",children:Y})]}),We.display?l.jsxs(l.Fragment,{children:[l.jsx(nde,{onScroll:le,ref:ee,viewSize:s===+ye?s:ye,children:Ge}),l.jsx(mde,{children:k})]}):l.jsx(gde,{children:l.jsx("div",{children:N})})]})},nde=S.div`
  display: flex;
  align-self: top;
  justify-self: center;
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background-color: #e5e5e5;
  width: 96vw;
  height: ${e=>`${e.viewSize}vh`};
  border-radius: 3px;
  text-align: center;
  color: ${e=>e.theme.mobileText};
  overflow-x: none;
  overflow-y: auto;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 5px;
  border: 1px solid darkgray;
  user-select: none;
`,ode=S.div`
  display: flex;
  width: 100vw;
  padding-left: 10px;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 30px;
  margin-bottom: 10px;
  background-color: ${e=>e.background};
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  user-select: none;
`,ide=S.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  /* gap: 5px; */
  align-items: center;
  width: 100vw;
  height: 100vh;
`,ade=S.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.color};
  color: ${e=>e.fontColor};
  font-size: 1.2em;
  font-weight: normal;
  padding: 0.25em 0.5em;
  height: 34px;
  min-width: 115px;
  text-decoration: none;
  border: 0px;
  border: 1px solid gray;
  border-radius: 3px;
  user-select: none;
`,sde=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.color};
  width: 86%;
  min-height: 8vh;
  font-size: ${e=>`${e.fontSize}vh`};
  text-align: center;
  border: 1px solid black;
  border-radius: 8px;
  padding: 5px;
`,lde=S.button`
  display: flex;
  width: 10vw;
  background-color: #e5e5e5;
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
  border: 0px;
  cursor: pointer;
`,cde=S.button`
  width: 10vw;
  background-color: #e5e5e5;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
  border: 0px;
  cursor: pointer;
`,ude=S.div`
  display: flex;
  align-items: stretch;
  min-height: 10vh;
  flex-direction: row;
  width: 96%;
`,dde=S.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  height: 50px;
  gap: 55px;
  user-select: none;
`,fde=S.div`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  align-items: center;
  padding-bottom: 5px;
  width: 20px;
  height: 20px;
  color: black;
  font-size: 2.5vh;
  font-weight: bold;
  user-select: none;
`,gde=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 3.5vh;
  font-weight: bold;
  min-height: 30vh;
  margin-top: 30px;
  width: 80vw;
  color: ${e=>e.theme.mobileText};
  font-size: 22px;
`,pde=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: ${e=>e.theme.mobileText};
`,mde=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
  user-select: none;
`,hde=e=>P.createElement("svg",{width:143,height:143,viewBox:"0 0 143 143",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},P.createElement("path",{d:"M104.535 38.0672C113.35 46.8814 118.301 58.8361 118.301 71.3013C118.301 83.7664 113.35 95.7211 104.535 104.535",stroke:"black",strokeWidth:6}),P.createElement("path",{d:"M93.7758 27.6163L99.5194 47.5916L113.947 32.6298L93.7758 27.6163Z",fill:"black"}),P.createElement("path",{d:"M35.2972 101.512C27.2848 91.9633 23.3937 79.6226 24.4802 67.2049C25.5666 54.7871 31.5414 43.3096 41.0903 35.2971",stroke:"black",strokeWidth:6}),P.createElement("path",{d:"M45.1049 112.861L41.1241 92.4613L25.4477 106.109L45.1049 112.861Z",fill:"black"})),Dh=e=>{const t=P.useMemo(()=>{const n=[l.jsx(go,{},te()),l.jsx(cd,{},te()),l.jsx(Rr,{},te()),l.jsx(kr,{},te()),l.jsx(Kr,{},te()),l.jsx(Zr,{},te()),l.jsx(Jr,{},te()),l.jsx(Mr,{},te()),l.jsx(en,{},te()),l.jsx(ud,{},te()),l.jsx(Ln,{},te())],o=[l.jsx(go,{},te()),l.jsx(Rr,{},te()),l.jsx(kr,{},te()),l.jsx(Kr,{},te()),l.jsx(Zr,{},te()),l.jsx(Jr,{},te()),l.jsx(Mr,{},te()),l.jsx(en,{},te()),l.jsx(Ln,{},te())],i=[l.jsx(Rr,{},te()),l.jsx(kr,{},te()),l.jsx(Kr,{},te()),l.jsx(Zr,{},te()),l.jsx(Jr,{},te()),l.jsx(Mr,{},te()),l.jsx(en,{},te())],a=[l.jsx(kr,{},te()),l.jsx(Kr,{},te()),l.jsx(Zr,{},te()),l.jsx(Jr,{},te()),l.jsx(Mr,{},te())];return{emoji5Array:n,emoji4Array:o,emoji3Array:i,emoji2Array:a}},[]);return{displayArray:P.useMemo(()=>{var o;const n=(o=e==null?void 0:e.emojiArrayType)==null?void 0:o[0];return n?t[n]||[]:[]},[e,t])}},vde=e=>e.langObj,xde=e=>e.mapObj,yde=e=>e.triggerMobileSortSwapModal,bde=e=>e.setTriggerMobileSortSwapModal,Sde=e=>{var w,U,L,q,K,B,J,Y,k,_,z,V,Q,H;const t=X(vde),r=X(xde),n=E(yde),o=E(bde),i=[...r.qSortHeaderNumbers],{displayArray:a}=Dh(r),[s,c]=P.useState(!1),u=A(D(t.mobileSortSwapModalHead))||"",d=A(D(t.mobileSortSwapModalConfirmButton))||"",f=A(D(t.mobileModalButtonCancel))||"",g=A(D(t.mobileSortSwapModalSuccessMessage))||"";let p=[...e.targetArray];if(p.length===0||p===void 0)return;let m,h=r.useColLabelNums[0];(h!==void 0||h!==null)&&(h===!1||h==="false"?m=!1:m=!0);let x,v=r.useColLabelText[0];(v!==void 0||v!==null)&&(v===!1||v==="false"?x=!1:x=!0);let y,C=r.useColLabelEmoji[0];(C!==void 0||C!==null)&&(C===!1||C==="false"?y=!1:y=!0);let T=null,N=null;if(p.length===2){p.sort((F,M)=>M.groupNumber-F.groupNumber);let G=p[0],Z=p[1],W=G==null?void 0:G.groupNumber,R=Z==null?void 0:Z.groupNumber;W=W.replace("+",""),R=R.replace("+","");let O=i.indexOf(W),b=i.indexOf(R);T=a[O],N=a[b]}(p==null?void 0:p.length)>0&&+((w=p==null?void 0:p[0])==null?void 0:w.index)>+((U=p==null?void 0:p[1])==null?void 0:U.index)&&(p=p.reverse());const j=()=>{o(!1),e.clearSelected(),c(!1)},I=()=>{e.handleStatementSwap(p[0].index,p[1].index),c(!0),setTimeout(()=>{j()},2e3)},$={content:{display:"flex",justifySelf:"center",flexDirection:"column",alignItems:"center",backgroundColor:"#ffffff",borderRadius:"10px",padding:"0px",width:"90vw",height:"fit-content",maxHeight:"80vh",paddingBottom:"10px",WebkitOverflowScrolling:"touch"}};return l.jsx(Ode,{children:l.jsxs(Mh,{id:"sortSwapModal",isOpen:n,onClose:j,style:$,overlayClassName:"Overlay",ariaHideApp:!1,children:[l.jsx(Tde,{children:l.jsx(jde,{onClick:j,children:"X"})}),l.jsx(Pde,{children:s?l.jsx(Ide,{children:g}):l.jsxs(l.Fragment,{children:[l.jsxs(Cde,{children:[u,l.jsx("hr",{})]}),l.jsxs(Eb,{color:(L=p[0])==null?void 0:L.color,fontSize:(q=p[0])==null?void 0:q.fontSize,children:[l.jsx($b,{children:l.jsxs(kb,{children:[y&&l.jsx(_l,{children:T}),m&&l.jsx(Mb,{children:(K=p[0])==null?void 0:K.groupNumber}),x&&l.jsx(Ab,{children:(B=p[0])==null?void 0:B.header}),y&&l.jsx(_l,{children:T})]})}),l.jsx(Nb,{color:(J=p[0])==null?void 0:J.color,children:(Y=p[0])==null?void 0:Y.statement})]}),l.jsx(hde,{style:{display:"flex",justifySelf:"center",height:"50px"}}),l.jsxs(Eb,{id:"StatementBox",color:(k=p[1])==null?void 0:k.color,fontSize:(_=p[1])==null?void 0:_.fontSize,children:[l.jsx($b,{id:"NumberContainer",children:l.jsxs(kb,{id:"ContentWrapper",children:[y&&l.jsx(_l,{children:N}),m&&l.jsx(Mb,{children:(z=p[1])==null?void 0:z.groupNumber}),x&&l.jsx(Ab,{children:(V=p[1])==null?void 0:V.header}),y&&l.jsx(_l,{children:N})]})}),l.jsx(Nb,{id:"CardDiv",color:(Q=p[1])==null?void 0:Q.color,children:(H=p[1])==null?void 0:H.statement})]}),l.jsxs(wde,{children:[l.jsx(Pb,{color:"#FBD5D5",onClick:j,children:f}),l.jsx(Pb,{color:"#BCF0DA",onClick:I,children:d})]})]})})]})})},Cde=S.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 20px 0px 10px 0px;
  margin-bottom: 20px;
  padding-left: 5px;
  padding-right: 5px;
  color: ${e=>e.theme.mobileText};
  hr {
    color: black;
  }
`,wde=S.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  margin-top: 30px;
  border-radius: 3px;
`,Pb=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 40px;
  border-radius: 5px;
  color: ${e=>e.theme.mobileText};
  background: #337ab7;
  border-color: #2e6da4;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;
`,Eb=S.div`
  display: flex;
  align-self: center;
  justify-self: center;
  position: relative;
  /* background-color: #e5e5e5; */
  background-color: ${e=>e.color};
  width: 80vw;
  height: fit-content;
  min-height: 14vh;
  font-size: ${e=>`${e.fontSize}vh`};
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  text-align: center;
  /* padding: 15px 10px 15px 10px; */
  border: 1px solid black;
`,$b=S.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
  padding-left: 5px;
  padding-right: 5px;
  padding-top: 4px;
  padding-bottom: 5px;
  /* color: ${e=>e.theme.mobileText}; */
  background-color: ${e=>e.color};

  height: 25px;
  font-size: 14px;
  padding-bottom: 3px;
  outline: 1px solid black;
`,Nb=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 78px;
  margin-top: 25px;
  background-color: ${e=>e.color};
  border-radius: 3px;
  text-align: center;
  padding: 15px 10px 15px 10px;
`,jde=S.button`
  background-color: red;
  float: right;
  color: white;
  border: none;
  border-bottom-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 10px;
  width: 40px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #555;
  }
`,Tde=S.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0px;
`,Ode=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`,kb=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;
  padding-right: 2px;
  padding-left: 2px;
  /* height: 100%; */
`,_l=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 2.5px;
  width: 20px;
  height: 20px;
  /* svg {
    width: 100%;
    height: 100%;
  } */
`,Mb=S.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
`,Ab=S.div`
  display: flex;
  padding-top: 2px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: clamp(1rem, 1vw, 1.5rem);
  text-align: center;
  line-height: 0.8rem;
`,Ide=S.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: clamp(1rem, 6vw, 10rem);
  /* font-size: 6vw; */
  text-align: center;
  line-height: 1.4rem;
  margin-top: 30px;
  margin-bottom: 30px;
`,Pde=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`,Ede=({background:e,conditionsOfInstruction:t,onHelpClick:r})=>l.jsxs($de,{background:e,children:[t,l.jsx(Nde,{onClick:r,children:l.jsx(nl,{})})]}),$de=S.div`
  display: flex;
  width: 100vw;
  padding-left: 10px;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 30px;
  background-color: ${e=>e.background};
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  user-select: none;
`,Nde=S.div`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  align-items: center;
  padding-bottom: 5px;
  width: 20px;
  height: 20px;
  color: black;
  font-size: 2.5vh;
  font-weight: bold;
  user-select: none;
`,kde=({item:e,fontSize:t,onCardSelected:r,onClickUp:n,onClickDown:o})=>l.jsxs(Mde,{children:[l.jsx(Rde,{id:e.id,onClick:o,color:e.characteristics.color,children:l.jsx(Hj,{style:{pointerEvents:"none",opacity:"0.95"}})}),l.jsx(Ade,{onClick:r,id:e.id,fontSize:t,color:e.selected?"lightyellow":e.characteristics.color,children:l.jsx("div",{"data-index":e.externalIndex,"data-id":e.id,"data-color":e.characteristics.color,"data-group_num":e.characteristics.value,"data-statement_text":e.statement,"data-font_size":t,"data-header":e.characteristics.header,children:e.statement})},te()),l.jsx(Dde,{id:e.id,onClick:n,color:e.characteristics.color,children:l.jsx(Uj,{style:{pointerEvents:"none",opacity:"0.95"}})})]},te()),Mde=S.div`
  display: flex;
  align-items: stretch;
  min-height: 10vh;
  flex-direction: row;
  user-select: none;
  width: 96%;
`,Ade=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${e=>e.color};
  position: relative;
  width: 80%;
  min-height: 10vh;
  font-size: ${e=>`${e.fontSize}vh`};
  text-align: center;
  color: ${e=>e.theme.mobileText};
  border: 1px solid #36454f;
  border-radius: 8px;
  padding: 5px;
  -webkit-transition: background-color 300ms linear;
  -moz-transition: background-color 300ms linear;
  -o-transition: background-color 300ms linear;
  -ms-transition: background-color 300ms linear;
  transition: all 300ms linear;
  user-select: none;
`,Dde=S.button`
  display: flex;
  width: 10vw;
  background-color: ${e=>e.color};
  border-top-right-radius: 3px;
  border-bottom-right-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
  border: 0px;
  cursor: pointer;
`,Rde=S.button`
  width: 10vw;
  background-color: ${e=>e.color};
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2vh;
  border: 0px;
  cursor: pointer;
`,Lde=({items:e,header:t,color:r,mobileSortFontSize:n,persistedMobileSortFontSize:o,onCardSelected:i,onClickUp:a,onClickDown:s})=>{const c=e.map(u=>l.jsx(kde,{item:u,fontSize:n===+o?n:o,onCardSelected:i,onClickUp:a,onClickDown:s},te()));return l.jsxs(Fde,{color:r,children:[l.jsx(Db,{margins:{top:10,bottom:0},children:t}),c,l.jsx(Db,{margins:{top:0,bottom:10},children:t})]})},Fde=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  align-items: center;
  width: 100%;
  min-height: 80px;
  background-color: ${e=>e.color};
  border-radius: 3px;
  text-align: center;
  border: 0.5px solid black;
`,Db=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: bold;
  margin-top: ${e=>`${e.margins.top}px`};
  margin-bottom: ${e=>`${e.margins.bottom}px`};
  padding: 5px;
  width: 90%;
  min-height: 20px;
  font-size: 20px;
  color: ${e=>e.theme.mobileText};
  border-radius: 5px;
`,_de=({partitionArray:e,characteristicsArray:t,mobileColHeaders:r,mobileSortFontSize:n,mobileSortViewSize:o,persistedMobileSortFontSize:i,persistedMobileSortViewSize:a,onCardSelected:s,onClickUp:c,onClickDown:u,onScroll:d})=>{let f=[],g=-1;return(e||[]).map((p,m)=>{var x;const h=(p||[]).map(v=>(g++,{...v,externalIndex:g,characteristics:t[g]}));f.push(l.jsx(Lde,{items:h,header:r[m],color:(x=t[g])==null?void 0:x.color,mobileSortFontSize:n,persistedMobileSortFontSize:i,onCardSelected:s,onClickUp:c,onClickDown:u},te()))}),l.jsx(Bde,{onScroll:d,viewSize:o===+a?o:a,children:f})},Bde=S.div`
  display: flex;
  align-self: top;
  justify-self: center;
  margin-top: 10px;
  margin-bottom: 20px;
  flex-direction: row;
  flex-wrap: wrap;
  width: 96vw;
  height: ${e=>`${e.viewSize}vh`};
  align-items: center;
  gap: 15px;
  justify-content: space-between;
  border-radius: 3px;
  text-align: center;
  overflow-x: none;
  overflow-y: auto;
`,zde=({text:e})=>l.jsx(Hde,{children:l.jsx("h1",{children:e})}),Hde=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`,Ude=({text:e})=>l.jsx(Vde,{children:e}),Vde=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
  user-select: none;
`,Wde=({color:e,shouldDisplayEmojis:t,shouldDisplayNums:r,shouldDisplayText:n,emoji:o=null,value:i,textHeader:a})=>l.jsx(qde,{color:e,children:l.jsxs(Gde,{children:[t&&l.jsx(Rb,{children:o}),l.jsxs(Qde,{children:[r&&l.jsx(Kde,{children:i}),n&&l.jsx(Jde,{children:a})]}),t&&l.jsx(Rb,{children:o})]})}),qde=S.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 4px;
  padding-left: 4px;
  background-color: ${e=>e.color};
  width: 100%;
`,Gde=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-right: 2px;
  padding-left: 2px;
`,Kde=S.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
`,Rb=S.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Jde=S.div`
  display: flex;
  padding-top: 2px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: 4vw;
  text-align: center;
  line-height: 0.8rem;
`,Qde=S.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`,Zde=e=>e.setTriggerMobileSortSwapModal,Yde=(e,t,r)=>{const n=E(Zde),o=P.useRef([]),i=r.allowUnforcedSorts,[a,s]=Ee("m_SortArray1",[...JSON.parse(localStorage.getItem("m_FinalThinCols"))]),[c,u]=Ee("m_UnforcedPattern",[...e.qSortPattern.reverse().map(T=>+T)]),d=P.useMemo(()=>i?[...c]:[...e.qSortPattern].reverse().map(T=>+T),[i,c,e]),f=P.useMemo(()=>{const T=[...d],N=[];let j=0,I=[...a];return T.forEach($=>{N.push(I.slice(j,j+$)),j+=$}),N},[d,a]),g=P.useMemo(()=>{let T=[...e.qSortHeaderNumbers].reverse();return T=T.map(N=>N>0?`+${N}`:N),T},[e]),p=P.useMemo(()=>{const T=[...e.columnHeadersColorsArray].reverse(),N=[...e.colTextLabelsArray].reverse(),j=[...d],I=[];return j.forEach(($,w)=>{const U={};for(let L=0;L<$;L++)U.color=T[w],U.value=g[w],U.header=N[w],I.push({...U})}),localStorage.setItem("m_SortCharacteristicsArray",JSON.stringify(I)),I},[e,g,d]),m=P.useMemo(()=>{var L,q,K,B,J,Y;const T=[...e.qSortHeaderNumbers],N=[...e.columnHeadersColorsArray],j=[...e.colTextLabelsArray],I=((L=e.useColLabelNums)==null?void 0:L[0])!==!1&&((q=e.useColLabelNums)==null?void 0:q[0])!=="false",$=((K=e.useColLabelText)==null?void 0:K[0])!==!1&&((B=e.useColLabelText)==null?void 0:B[0])!=="false",w=((J=e.useColLabelEmoji)==null?void 0:J[0])!==!1&&((Y=e.useColLabelEmoji)==null?void 0:Y[0])!=="false";return T.map((k,_)=>l.jsx(Wde,{color:N[_],shouldDisplayEmojis:w,shouldDisplayNums:I,shouldDisplayText:$,emoji:t[_],value:k,textHeader:j[_]},te())).reverse()},[e,t]);return{sortArray1:a,targetArray:o,partitionArray:f,characteristicsArray:p,mobileColHeaders:m,handleCardSelected:T=>{var N;try{if(o.length===2||T.target.dataset.id===void 0)return;if(a.forEach(I=>{I.id===T.target.dataset.id&&(I.selected=!I.selected)}),s([...a]),((N=o.current[0])==null?void 0:N.id)===T.target.dataset.id){o.current=[];return}let j={id:T.target.dataset.id,statement:T.target.dataset.statement_text,color:T.target.dataset.color,index:T.target.dataset.index,groupNumber:T.target.dataset.group_num,fontSize:T.target.dataset.font_size,header:T.target.dataset.header};o.current=[...o.current,j],o.current.length>=2&&n(!0)}catch(j){console.error(j)}},handleStatementSwap:(T,N)=>{[a[T],a[N]]=[a[N],a[T]],s([...a])},clearSelected:()=>{a.forEach(T=>{T.selected=!1}),s([...a]),o.current=[]},handleOnClickUp:T=>{let N=a.findIndex($=>$.id===T.target.id);if(N===0)return;const j=f.findIndex($=>$.some(w=>w.id===T.target.id)),I=f[j].findIndex($=>$.id===T.target.id);if(i&&I===0)c[j-1]=c[j-1]+1,c[j]=c[j]-1,u([...c]);else{const $=a[N];a[N]=a[N-1],a[N-1]=$}s([...a])},handleOnClickDown:T=>{let N=a.findIndex($=>$.id===T.target.id);if(N>=a.length-1)return;const j=f.findIndex($=>$.some(w=>w.id===T.target.id)),I=f[j].findIndex($=>$.id===T.target.id);if(i&&I===f[j].length-1)c[j+1]=c[j+1]+1,c[j]=c[j]-1,u([...c]);else{const $=a[N];a[N]=a[N+1],a[N+1]=$}s([...a])}}},Xde=e=>P.useMemo(()=>({conditionsOfInstruction:A(D(e.mobileSortConditionsOfInstruction))||"",screenOrientationText:A(D(e.screenOrientationText))||"",expandViewMessage:A(D(e.expandViewMessage))||"",helpModalHead:A(D(e.mobileSortHelpModalHead))||"",helpModalText:A(D(e.mobileSortHelpModalText))||"",scrollBottomModalHead:A(D(e.mobileSortScrollBottomModalHead))||"",scrollBottomModalText:A(D(e.mobileSortScrollBottomModalText))||""}),[e]),efe=e=>e.setCurrentPage,tfe=e=>e.setProgressScore,rfe=e=>e.mapObj,nfe=e=>e.configObj,ofe=e=>e.mobileSortFontSize,ife=e=>e.mobileSortViewSize,afe=e=>e.langObj,sfe=e=>e.setTriggerMobileSortHelpModal,lfe=e=>e.setHasScrolledToBottomSort,cfe=e=>e.triggerMobileSortHelpModal,ufe=e=>e.setTriggerMobileSortHelpModal,dfe=e=>e.triggerMobileSortScrollBottomModal,ffe=e=>e.setTriggerMobileSortScrollBottomModal,Lb=()=>{const e=E(efe),t=E(tfe),r=X(rfe),n=X(afe),o=X(nfe),i=E(ofe),a=E(ife),s=E(sfe),c=E(lfe),u=E(cfe),d=E(ufe),f=E(dfe),g=E(ffe),p=So(),{displayArray:m}=Dh(r),h=Xde(n),{sortArray1:x,targetArray:v,partitionArray:y,characteristicsArray:C,mobileColHeaders:T,handleCardSelected:N,handleStatementSwap:j,clearSelected:I,handleOnClickUp:$,handleOnClickDown:w}=Yde(r,m,o),U=JSON.parse(localStorage.getItem("m_FontSizeObject")).sort,L=JSON.parse(localStorage.getItem("m_ViewSizeObject")).sort,q=P.useRef(null);P.useEffect(()=>(q.current=Date.now(),(async()=>{await e("sort"),localStorage.setItem("currentPage","sort"),await t(20)})(),()=>{jr(q.current,"sortPage","sortPage")}),[e,t]);const K=()=>{s(!0)},B=P.useCallback(Ah(J=>{const Y=J.target,k=Y.scrollTop,_=Y.scrollHeight,z=Y.clientHeight;_-(k+z)<=100&&c(!0)},100),[c]);return p==="landscape-primary"?l.jsx(zde,{text:h.screenOrientationText}):l.jsxs(gfe,{children:[l.jsx(Ede,{background:o.headerBarColor,conditionsOfInstruction:h.conditionsOfInstruction,onHelpClick:K}),l.jsx(hr,{head:h.helpModalHead,text:h.helpModalText,trigger:u,setTrigger:d,showArrow:!0,height:"450px"}),l.jsx(hr,{head:h.scrollBottomModalHead,text:h.scrollBottomModalText,trigger:f,setTrigger:g,showArrow:!1,height:"150px"}),l.jsx(Sde,{clearSelected:I,targetArray:v.current,handleStatementSwap:j}),l.jsx(_de,{partitionArray:y,characteristicsArray:C,mobileColHeaders:T,sortArray1:x,mobileSortFontSize:i,mobileSortViewSize:a,persistedMobileSortFontSize:U,persistedMobileSortViewSize:L,onCardSelected:N,onClickUp:$,onClickDown:w,onScroll:B}),l.jsx(Ude,{text:h.expandViewMessage})]})},gfe=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  user-select: none;
  background-color: #f3f4f6;
`,pfe=e=>{const t={async setItem(p,m){return await null,localStorage.setItem(p,m)}};let r=`itemNum${e.opts.itemNum}`;const n=e.check,o=A(D(e.opts.label))||"",i=A(D(e.opts.placeholder))||"",a=A(D(e.opts.note))||"";let s=!0;(a.length<1||a==="")&&(s=!1);const[c,u]=Ee(r,""),[d,f]=P.useState({bgColor:"whitesmoke",border:"none"}),g=p=>{const m=JSON.parse(localStorage.getItem("resultsSurvey"));let h=p.target.value,x=h.length;if((e.opts.restricted==="true"||e.opts.restricted===!0)&&(h=h.replace(/\D/g,"")),(e.opts.limited==="true"||e.opts.limited===!0)&&h.length>+e.opts.limitLength&&(h=h.substring(0,+e.opts.limitLength)),u(h),x>0){let v=kt(h);m[`itemNum${e.opts.itemNum}`]=v}else e.opts.required===!0||e.opts.required==="true"?m[`itemNum${e.opts.itemNum}`]="no-*?*-response":m[`itemNum${e.opts.itemNum}`]="no response";t.setItem("resultsSurvey",JSON.stringify(m))};return P.useEffect(()=>{let p=!1;c.length>0&&c!==""&&(p=!0),n===!0&&p<1&&e.opts.required===!0?f({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):f({bgColor:"whitesmoke",border:"none"})},[n,c,e]),s?l.jsxs(Fb,{bgColor:d.bgColor,border:d.border,children:[l.jsx(_b,{children:l.jsx("div",{children:o})}),l.jsx(mfe,{id:"noteText",children:l.jsx("div",{children:a})}),l.jsx(Bb,{type:"text",value:c,placeholder:i,onChange:g})]}):l.jsxs(Fb,{bgColor:d.bgColor,border:d.border,children:[l.jsx(_b,{children:l.jsx("div",{children:o})}),l.jsx(Bb,{type:"text",value:c,placeholder:i,onChange:g})]})},Fb=S.div`
  width: 98%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  max-width: 1300px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
  color: ${e=>e.theme.mobileText};
`,_b=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  min-height: 30px;
  font-size: 12px;
  text-align: center;
  width: 100%;
  border-radius: 3px;
  background-color: lightgray;
`,mfe=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  min-height: 30px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,Bb=S.input`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  height: 30px;
  font-size: 12px;
  background-color: white;
  color: ${e=>e.theme.mobileText};
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding-left: 5px;
  padding-right: 5px;
`,hfe=e=>{const t={async setItem(m,h){return await null,localStorage.setItem(m,h)}},r=`itemNum${e.opts.itemNum}`,n=e.check,o=A(D(e.opts.label))||"",i=A(D(e.opts.note))||"",a=A(D(e.opts.placeholder))||"";let s=!0;(i.length<1||i==="")&&(s=!1);const[c,u]=Ee(r,""),[d,f]=P.useState({bgColor:"whitesmoke",border:"none"}),g=m=>{const h=JSON.parse(localStorage.getItem("resultsSurvey"));let x=m.target.value;if(u(x),x.length>0){let v=kt(x);h[`itemNum${e.opts.itemNum}`]=v}else e.opts.required===!0||e.opts.required==="true"?h[`itemNum${e.opts.itemNum}`]="no-*?*-response":h[`itemNum${e.opts.itemNum}`]="no response";t.setItem("resultsSurvey",JSON.stringify(h))};let p=!1;return c.length>0&&c!==""&&(p=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&n===!0&&p<1?f({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):f({bgColor:"whitesmoke",border:"none"})},[n,c,p,e.opts.required]),s?l.jsxs(zb,{bgColor:d.bgColor,border:d.border,children:[l.jsx(Hb,{children:l.jsx("div",{children:o})}),l.jsx(vfe,{children:i}),l.jsx(Ub,{value:c,placeholder:a,onChange:g})]}):l.jsxs(zb,{bgColor:d.bgColor,border:d.border,children:[l.jsx(Hb,{children:l.jsx("div",{children:o})}),l.jsx(Ub,{value:c,placeholder:a,onChange:g,height:"350"})]})},zb=S.div`
  width: 98%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: whitesmoke;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Hb=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,vfe=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  min-height: 30px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,Ub=S.textarea`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 0px;
  min-height: 120px;
  font-size: 12px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding: 5px;
`,xfe=e=>{const t=I=>{let $=I.split(";;;");return $=$.filter(function(w){return w}),$=$.map(w=>w.trim()),$};let r=e.opts.id;const n=e.check,o=A(D(e.opts.label))||"",i=A(D(e.opts.note))||"",a=t(e.opts.options);let s=!0;(i.length<1||i==="")&&(s=!1);let c=e.opts.other;c==="true"||c===!0?c=!0:c=!1;const u=a.length-1;let[d,f]=Ee(r,""),[g,p]=P.useState(!0),[m,h]=P.useState("no input");const[x,v]=P.useState({bgColor:"whitesmoke",border:"none"}),y=({label:I,value:$,checked:w,setter:U})=>l.jsx("label",{children:l.jsxs(bfe,{children:[l.jsx("input",{type:"radio",checked:w===$,onChange:()=>U($),value:$}),l.jsx(yfe,{children:l.jsx("div",{children:I})})]})}),C=I=>{const $=JSON.parse(localStorage.getItem("resultsSurvey"));+I.target.value==+u&&c===!0?m===""?$[`itemNum${e.opts.itemNum}`]=`${+I.target.value+1}-no input`:$[`itemNum${e.opts.itemNum}`]=`${+I.target.value+1}-${m}`:$[`itemNum${e.opts.itemNum}`]=+I.target.value+1,+I.target.value==+u?p(!1):p(!0),localStorage.setItem("resultsSurvey",JSON.stringify($))},T=I=>{const $=JSON.parse(localStorage.getItem("resultsSurvey"));I.target.value===""?$[`itemNum${e.opts.itemNum}`]=`${+u+1}-no input`:$[`itemNum${e.opts.itemNum}`]=`${+u+1}-${kt(I.target.value.trim())}`,h(kt(I.target.value.trim())),localStorage.setItem("resultsSurvey",JSON.stringify($))};let N=!1;d.length===0&&(N=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&n===!0&&N?v({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):v({bgColor:"whitesmoke",border:"none"})},[n,N,e.opts.required]);const j=()=>{const I=a.map(($,w)=>l.jsx("div",{children:l.jsx(y,{value:w,checked:d,label:$,setter:f})},te()));return l.jsx("div",{children:I})};return s?l.jsxs(Vb,{bgColor:x.bgColor,border:x.border,children:[l.jsx(Wb,{children:l.jsx("div",{children:o})}),l.jsx(Sfe,{children:l.jsx("div",{children:i})}),l.jsxs(qb,{children:[l.jsx(Cfe,{onChange:I=>C(I),children:l.jsx(j,{})}),c&&l.jsx(Gb,{disabled:g,onChange:I=>T(I)})]})]}):l.jsxs(Vb,{bgColor:x.bgColor,border:x.border,children:[l.jsx(Wb,{children:l.jsx("div",{children:o})}),l.jsxs(qb,{onChange:I=>C(I),children:[l.jsx(j,{}),c&&l.jsx(Gb,{onChange:I=>T(I)})]})]})},Vb=S.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Wb=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,qb=S.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 0px 20px 20px 20px;
  vertical-align: center;
  margin-top: 0px;
  min-height: 100px;
  font-size: 12px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 2px;
  }

  label {
    margin-left: 8px;
  }
`,yfe=S.div`
  padding-left: 5px;
`,bfe=S.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  height: 15px;
`,Sfe=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  min-height: 30px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,Gb=S.input`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  height: 40px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding-left: 5px;
  padding-right: 5px;
`,Cfe=S.div`
  margin-bottom: 5px;
`,wfe=e=>{const t=m=>{let h=m.split(";;;");return h=h.filter(function(v){return v}),h.map(v=>{v.replace(/\s/g,"");const y={};return y.label=A(D(v)),y.value=v,y})},r=e.check;let n=e.opts.id;const o=A(D(e.opts.label))||"";let i=e.opts.options.split(";;;")||[];i=i.map(m=>A(D(m.trim())));const a=A(D(e.opts.note))||"";let s=!0;(a.length<1||a==="")&&(s=!1);let[c,u]=Ee(n,[]);const[d,f]=P.useState({bgColor:"whitesmoke",border:"none"}),g=m=>{const h=JSON.parse(localStorage.getItem("resultsSurvey"))||{};u(m);let x=Ut(i);if(m.length!==0){let v="";for(let y=0;y<m.length;y++){let C=m[y].value.trim(),T=x.indexOf(C);y===0?v+=T+1:v+=","+(T+1)}h[`itemNum${e.opts.itemNum}`]=v}else e.opts.required===!0||e.opts.required==="true"?h[`itemNum${e.opts.itemNum}`]="no-*?*-response":h[`itemNum${e.opts.itemNum}`]="no response";localStorage.setItem("resultsSurvey",JSON.stringify(h))};let p=!1;return c.length>0&&(p=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&r===!0&&p===!1?f({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):f({bgColor:"whitesmoke",border:"none"})},[r,p,e.opts.required]),s?l.jsxs(Kb,{bgColor:d.bgColor,border:d.border,children:[l.jsx(Jb,{children:l.jsx("div",{children:o})}),l.jsx(jfe,{id:"noteText",children:l.jsx("div",{children:a})}),l.jsx(ou,{className:"multiselect",options:t(e.opts.options),labelledBy:"Select",onChange:g,value:c})]}):l.jsxs(Kb,{bgColor:d.bgColor,border:d.border,children:[l.jsx(Jb,{children:l.jsx("div",{children:o})}),l.jsx(ou,{className:"multiselect",options:t(e.opts.options),labelledBy:"Select",onChange:g,value:c})]})},Kb=S.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 125px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;

  .multiselect {
    font-size: 12px;
    line-height: 1.1em;
  }
`,Jb=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,jfe=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,Tfe=e=>{const t=L=>{let q=(L||"").split(";;;");return q=q.filter(function(K){return K}),(q||[]).map(K=>!1),q},r=e.check,n=t(e.opts.options),o=n.length,i=`question${e.opts.itemNum}`;let a=e.opts.id;const s=A(D(e.opts.label))||"",c=A(D(e.opts.note))||"";let u=!0;(c.length<1||c==="")&&(u=!1);let d=e.opts.other;d==="true"||d===!0?d=!0:d=!1;let[f,g]=Ee(a,new Array(n.length).fill(!1));const[p,m]=P.useState({bgColor:"whitesmoke",border:"none"});let[h,x]=P.useState("no input"),[v,y]=P.useState(!0),[C,T]=P.useState([]);const N=L=>{const q=JSON.parse(localStorage.getItem("resultsSurvey"));L=parseInt(L,10),L===+o-1?y(!1):y(!0);const K=f.map((Y,k)=>k===L?!Y:Y);g(K);let B=K.reduce((Y="",k,_)=>k===!0?Y+(_+1).toString()+",":Y,"");B.charAt(B.length-1)===","&&(B=B.substr(0,B.length-1)),T(B);let J=B.split(",");+J[J.length-1]==+o&&d===!0?h!==""?q[`itemNum${e.opts.itemNum}`]=`${B}-${h}`:q[`itemNum${e.opts.itemNum}`]=`${B}-no input`:q[`itemNum${e.opts.itemNum}`]=B,B===""&&(e.opts.required===!0||e.opts.required==="true"?q[`itemNum${e.opts.itemNum}`]="no-*?*-response":q[`itemNum${e.opts.itemNum}`]="no response"),localStorage.setItem("resultsSurvey",JSON.stringify(q))},j=L=>{const q=JSON.parse(localStorage.getItem("resultsSurvey"));let K="no input";if(L.target.value!==""){K=kt(L.target.value.trim());const B=`${C}-${K}`;q[`itemNum${e.opts.itemNum}`]=B}else{const B=`${C}-no input`;q[`itemNum${e.opts.itemNum}`]=B}x(()=>kt(L.target.value.trim())),localStorage.setItem("resultsSurvey",JSON.stringify(q))};let I=!1,$=Ut([...f]);return(ur($)[!0]||0)===0&&(I=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&r===!0&&I?m({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):m({bgColor:"whitesmoke",border:"none"})},[r,I,e.opts.required]),u?l.jsxs(Qb,{bgColor:p.bgColor,border:p.border,children:[l.jsx(Zb,{children:l.jsx("div",{children:s})}),l.jsx(Ofe,{id:"noteText",children:l.jsx("div",{children:c})}),l.jsxs(Yb,{children:[n.map((L,q)=>l.jsxs("div",{children:[l.jsx("input",{id:`${L}-${q}`,type:"checkbox",value:L,name:i,checked:f[q],onChange:()=>N(q)}),l.jsx("label",{htmlFor:`${L}-${q}`,children:L})]},te())),d&&l.jsx(Xb,{disabled:v,onChange:L=>j(L)})]})]}):l.jsxs(Qb,{bgColor:p.bgColor,border:p.border,children:[l.jsx(Zb,{children:l.jsx("div",{children:s})}),l.jsxs(Yb,{children:[n.map((L,q)=>l.jsxs("div",{children:[l.jsx("input",{id:`${L}-${q}`,type:"checkbox",value:L,name:i,checked:f[q],onChange:()=>N(q)}),l.jsx("label",{htmlFor:`${L}-${q}`,children:L})]},te())),d&&l.jsx(Xb,{disabled:v,onChange:L=>j(L)})]})]})},Qb=S.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Zb=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,Yb=S.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  min-height: 120px;
  font-size: 12px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,Ofe=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,Xb=S.input`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  height: 40px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;
  padding-left: 5px;
  padding-right: 5px;
`,Ife=e=>{const t=N=>{let j=N.split(";;;");return j=j.filter(function(I){return I}),j.length===0&&(j=["",""]),j},r=t(e.opts.options),n=e.check,o=r.length,i=`itemNum${e.opts.itemNum}`,a=A(D(e.opts.label))||"",s=A(D(e.opts.note))||"";let c=!0;(s.length<1||s==="")&&(c=!1);let[u,d]=Ee(i,Array.from({length:o},()=>Array.from({length:2},()=>!1)));const[f,g]=P.useState({bgColor:"whitesmoke",border:"none"}),p=t(e.opts.scale),m=(N,j)=>{const I=JSON.parse(localStorage.getItem("resultsSurvey")),$=[],w=u.map(function(J,Y){return N===Y?(J.map(function(k,_){return j===_?($.push(!0),null):($.push(!1),null)}),$):J});d(w);let U=u.length,L=Ut([...w]),K=ur(L)[!0]||0,B="";w.forEach((J,Y)=>{let k=J[0]?"1":"2";J.includes(!0)||(k="nr"),Y===0?B+=k:B+=","+k}),I[`itemNum${e.opts.itemNum}`]=B,K!==U&&(e.opts.required===!0||e.opts.required==="true")&&(I[`itemNum${e.opts.itemNum}`]="no-*?*-response"),localStorage.setItem("resultsSurvey",JSON.stringify(I))};let h=!1,x=u.length,v=Ut([...u]);(ur(v)[!0]||0)<x&&(h=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&n===!0&&h?g({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):g({bgColor:"whitesmoke",border:"none"})},[n,h,e.opts.required]);const T=()=>{const N=r.map((j,I)=>{const $=A(D(j))||"";return l.jsxs(Pfe,{indexVal:I,children:[l.jsx(Efe,{children:$},te()),l.jsx(oS,{id:`Q-${I}`,type:"radio",value:1,name:`itemNum${e.opts.itemNum}-${I+1}`,onChange:w=>m(I,0),checked:u[I][0]},te()),l.jsx(oS,{id:`Q2-${I}`,type:"radio",value:2,name:`itemNum${e.opts.itemNum}-${I+1}`,onChange:w=>m(I,1),checked:u[I][1]},te())]},te())});return l.jsx("div",{children:N})};return c?l.jsxs(eS,{bgColor:f.bgColor,border:f.border,children:[l.jsx(tS,{children:l.jsx("div",{children:a})}),l.jsx($fe,{id:"noteText",children:l.jsx("div",{children:s})}),l.jsxs(rS,{children:[l.jsxs(nS,{children:[l.jsx("div",{}),l.jsx(Bl,{children:l.jsx("div",{children:A(D(p[0]))})}),l.jsx(Bl,{children:l.jsx("div",{children:A(D(p[1]))})})]}),l.jsx(T,{})]})]}):l.jsxs(eS,{bgColor:f.bgColor,border:f.border,children:[l.jsx(tS,{children:l.jsx("div",{children:a})}),l.jsxs(rS,{children:[l.jsxs(nS,{children:[l.jsx("div",{}),l.jsx(Bl,{children:l.jsx("div",{children:A(D(p[0]))})}),l.jsx(Bl,{children:l.jsx("div",{children:A(D(p[1]))})})]}),l.jsx(T,{})]})]})},eS=S.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,tS=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,rS=S.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 30px;
  font-size: 12px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,Pfe=S.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 60px 60px 1fr;
  margin-bottom: 17px;
  padding-left: 5px;
  padding-top: 8px;
  padding-bottom: 8px;
  height: auto;
  align-items: end;
  justify-items: left;
  // align-items: left;
  background-color: ${e=>e.indexVal%2?"white":"#ececec"};
  &:hover {
    background-color: rgba(131, 202, 254, 0.4);
  }
`,nS=S.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 60px 60px 1fr;
  margin-bottom: 7px;
`,Bl=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,oS=S.input`
  display: flex;
  justify-self: center;
  align-self: center;
  border: 0px;
  width: 28px;
  height: 1.4em;
  justify-items: center;
  align-items: center;
`,Efe=S.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,$fe=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 16px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,Nfe=e=>{const r=(T=>{let N=T.split(";;;");return N=N.filter(function(j){return j}),N})(e.opts.options),n=r.length,o=`itemNum${e.opts.itemNum}`,i=e.check,a=A(D(e.opts.note))||"";let s=!0;(a.length<1||a==="")&&(s=!1);const c=A(D(e.opts.label))||"";let[u,d]=Ee(o,Array.from({length:n},()=>Array.from({length:5},()=>!1)));const[f,g]=P.useState({bgColor:"whitesmoke",border:"none"}),p=(T,N)=>{const j=JSON.parse(localStorage.getItem("resultsSurvey")),I=[],$=u.map(function(B,J){return T===J?(B.map(function(Y,k){return N===k?(I.push(!0),null):(I.push(!1),null)}),I):B});d($);let w=u.length,U=Ut([...$]),q=ur(U)[!0]||0,K="";$.forEach((B,J)=>{let Y=$[J].indexOf(!0)+1;B.includes(!0)||(Y="nr"),J===0?K+=Y:K+=","+Y}),j[`itemNum${e.opts.itemNum}`]=K,q!==w&&(e.opts.required===!0||e.opts.required==="true")&&(j[`itemNum${e.opts.itemNum}`]="no-*?*-response"),localStorage.setItem("resultsSurvey",JSON.stringify(j))};let m=!1,h=u.length,x=Ut([...u]);(ur(x)[!0]||0)<h&&(m=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&i===!0&&m?g({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):g({bgColor:"whitesmoke",border:"none"})},[i,m,e.opts.required]);const C=()=>{const T=r.map((N,j)=>{const I=A(D(N));return l.jsxs(kfe,{indexVal:j,children:[l.jsx(Mfe,{children:I},te()),l.jsx(Ma,{id:`Q-${j}`,type:"radio",value:1,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,0),checked:u[j][0]},te()),l.jsx(Ma,{id:`Q2-${j}`,type:"radio",value:2,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,1),checked:u[j][1]},te()),l.jsx(Ma,{id:`Q3-${j}`,type:"radio",value:3,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,2),checked:u[j][2]},te()),l.jsx(Ma,{id:`Q4-${j}`,type:"radio",value:4,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,3),checked:u[j][3]},te()),l.jsx(Ma,{id:`Q5-${j}`,type:"radio",value:5,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,4),checked:u[j][4]},te())]},te())});return l.jsx("div",{children:T})};return s?l.jsxs(iS,{bgColor:f.bgColor,border:f.border,children:[l.jsx(aS,{children:l.jsx("div",{children:c})}),l.jsx(Afe,{id:"noteText",children:l.jsx("div",{children:a})}),l.jsxs(sS,{children:[l.jsxs(lS,{children:[l.jsx("div",{}),l.jsx(xn,{children:"1"}),l.jsx(xn,{children:"2"}),l.jsx(xn,{children:"3"}),l.jsx(xn,{children:"4"}),l.jsx(xn,{children:"5"})]}),l.jsx(C,{})]})]}):l.jsxs(iS,{bgColor:f.bgColor,border:f.border,children:[l.jsx(aS,{children:l.jsx("div",{children:c})}),l.jsxs(sS,{children:[l.jsxs(lS,{children:[l.jsx("div",{}),l.jsx(xn,{children:"1"}),l.jsx(xn,{children:"2"}),l.jsx(xn,{children:"3"}),l.jsx(xn,{children:"4"}),l.jsx(xn,{children:"5"})]}),l.jsx(C,{})]})]})},iS=S.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,aS=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,sS=S.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 12px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,kfe=S.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 30px 30px 30px 30px 30px 1fr;
  margin-bottom: 17px;
  padding-bottom: 8px;
  padding-top: 8px;
  height: 40px;
  background-color: ${e=>e.indexVal%2?"white":"#ececec"};
  font-size: 12px;
  height: auto;
  align-items: end;
  &:hover {
    background-color: rgba(131, 202, 254, 0.4);
  }
`,lS=S.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 30px 30px 30px 30px 30px 1fr;
  margin-bottom: 7px;
  align-items: end;
`,Ma=S.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 0px;
  width: 25px;
  height: 1.4em;
`,xn=S.div`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
`,Mfe=S.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,Afe=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 50px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,Dfe=e=>{const r=(T=>{let N=T.split(";;;");return N=N.filter(function(j){return j}),N})(e.opts.options),n=r.length,o=`itemNum${e.opts.itemNum}`,i=e.check,a=A(D(e.opts.label))||"",s=A(D(e.opts.note))||"";let c=!0;(s.length<1||s==="")&&(c=!1);const[u,d]=Ee(o,Array.from({length:n},()=>Array.from({length:10},()=>!1))),[f,g]=P.useState({bgColor:"whitesmoke",border:"none"}),p=(T,N)=>{const j=JSON.parse(localStorage.getItem("resultsSurvey")),I=[],$=u.map(function(B,J){return T===J?(B.map(function(Y,k){return N===k?(I.push(!0),null):(I.push(!1),null)}),I):B});d($);let w=u.length,U=Ut([...$]),q=ur(U)[!0]||0,K="";$.forEach((B,J)=>{let Y=$[J].indexOf(!0)+1;B.includes(!0)||(Y="nr"),J===0?K+=Y:K+=","+Y}),j[`itemNum${e.opts.itemNum}`]=K,q!==w&&(e.opts.required===!0||e.opts.required==="true")&&(j[`itemNum${e.opts.itemNum}`]="no-*?*-response"),localStorage.setItem("resultsSurvey",JSON.stringify(j))};let m=!1,h=u.length,x=Ut([...u]);(ur(x)[!0]||0)<h&&(m=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&i===!0&&m?g({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):g({bgColor:"whitesmoke",border:"none"})},[i,m,e.opts.required]);const C=()=>{const T=r.map((N,j)=>{const I=A(D(N));return l.jsxs(Rfe,{indexVal:j,children:[l.jsx(Lfe,{children:I},te()),l.jsx(yn,{id:`Q-${j}`,type:"radio",value:1,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,0),checked:u[j][0]},te()),l.jsx(yn,{id:`Q2-${j}`,type:"radio",value:2,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,1),checked:u[j][1]},te()),l.jsx(yn,{id:`Q3-${j}`,type:"radio",value:3,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,2),checked:u[j][2]},te()),l.jsx(yn,{id:`Q4-${j}`,type:"radio",value:4,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,3),checked:u[j][3]},te()),l.jsx(yn,{id:`Q5-${j}`,type:"radio",value:5,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,4),checked:u[j][4]},te()),l.jsx(yn,{id:`Q6-${j}`,type:"radio",value:6,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,5),checked:u[j][5]},te()),l.jsx(yn,{id:`Q7-${j}`,type:"radio",value:7,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,6),checked:u[j][6]},te()),l.jsx(yn,{id:`Q8-${j}`,type:"radio",value:8,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,7),checked:u[j][7]},te()),l.jsx(yn,{id:`Q9-${j}`,type:"radio",value:9,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,8),checked:u[j][8]},te()),l.jsx(yn,{id:`Q10-${j}`,type:"radio",value:10,name:`itemNum${e.opts.itemNum}-${j+1}`,onChange:$=>p(j,9),checked:u[j][9]},te())]},te())});return l.jsx("div",{children:T})};return c?l.jsxs(cS,{bgColor:f.bgColor,border:f.border,children:[l.jsx(uS,{children:l.jsx("div",{children:a})}),l.jsx(Ffe,{id:"noteText",children:l.jsx("div",{children:s})}),l.jsxs(dS,{children:[l.jsxs(fS,{children:[l.jsx("div",{}),l.jsx(pt,{children:"1"}),l.jsx(pt,{children:"2"}),l.jsx(pt,{children:"3"}),l.jsx(pt,{children:"4"}),l.jsx(pt,{children:"5"}),l.jsx(pt,{children:"6"}),l.jsx(pt,{children:"7"}),l.jsx(pt,{children:"8"}),l.jsx(pt,{children:"9"}),l.jsx(pt,{children:"10"})]}),l.jsx(C,{})]})]}):l.jsxs(cS,{bgColor:f.bgColor,border:f.border,children:[l.jsx(uS,{children:l.jsx("div",{children:a})}),l.jsxs(dS,{children:[l.jsxs(fS,{children:[l.jsx("div",{}),l.jsx(pt,{children:"1"}),l.jsx(pt,{children:"2"}),l.jsx(pt,{children:"3"}),l.jsx(pt,{children:"4"}),l.jsx(pt,{children:"5"}),l.jsx(pt,{children:"6"}),l.jsx(pt,{children:"7"}),l.jsx(pt,{children:"8"}),l.jsx(pt,{children:"9"}),l.jsx(pt,{children:"10"})]}),l.jsx(C,{})]})]})},cS=S.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,uS=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 30px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,dS=S.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 18px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  input {
    margin-top: 8px;
  }

  label {
    margin-left: 8px;
  }
`,Rfe=S.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 14px 14px 14px 14px 14px 14px 14px 14px 14px 14px 1fr;
  margin-bottom: 17px;
  font-size: 9.5px;
  align-items: end;
  padding-bottom: 8px;
  padding-top: 8px;
  height: auto;
  background-color: ${e=>e.indexVal%2?"white":"#ececec"};
  border-radius: 3px;
  &:hover {
    background-color: rgba(131, 202, 254, 0.4);
  }
  span {
    font-size: 12px;
  }
`,fS=S.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 14px 14px 14px 14px 14px 14px 14px 14px 14px 14px 1fr;
  margin-bottom: 7px;
  align-items: end;
  font-size: 11px;
`,pt=S.div`
  display: flex;
  justify-self: center;
  align-items: center;
  text-align: center;
  font-size: 8px;
`,yn=S.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 0px;
  width: 28px;
  height: 1.4em;
  padding-left: 3px;
`,Lfe=S.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,Ffe=S.div`
  display: flex;
  justify-content: left;
  align-items: center;
  vertical-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
  height: 30px;
  font-size: 12px;
  text-align: center;
  background-color: whitesmoke;
  width: 100%;
  border-radius: 3px;
`,_fe=e=>{const t=e.check,r=`itemNum${e.opts.itemNum}`,n=A(D(e.opts.label))||"";let[o,i]=Ee(r,"");const[a,s]=P.useState({bgColor:"whitesmoke",border:"none"}),u=(h=>h.split(";;;"))(e.opts.scale),d=h=>{const x=JSON.parse(localStorage.getItem("resultsSurvey"));x[`itemNum${e.opts.itemNum}`]=+h.target.value+1,localStorage.setItem("resultsSurvey",JSON.stringify(x))};let f=!1;o.length===0&&(f=!0),P.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&t===!0&&f?s({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):s({bgColor:"whitesmoke",border:"none"})},[t,f,e.opts.required]);const g=u.map(h=>l.jsx(Wfe,{children:l.jsx("div",{children:A(D(h))})},te())),p=({value:h,checked:x,setter:v})=>l.jsx(l.Fragment,{children:l.jsx("input",{type:"radio",checked:x===h,onChange:()=>v(h),value:h})}),m=()=>{const h=u.map((x,v)=>l.jsx(qfe,{className:"radioButtons",onChange:y=>d(y),children:l.jsx(p,{className:"radioInput",value:v,checked:o,setter:i})},te()));return l.jsx(Ufe,{className:"buttonContainer",cols:u.length,children:h})};return l.jsxs(Bfe,{bgColor:a.bgColor,border:a.border,children:[l.jsx(zfe,{children:l.jsx("div",{children:n})}),l.jsxs(Hfe,{className:"radioContainer",children:[l.jsx(Vfe,{className:"ratingTitle",cols:u.length,children:g}),l.jsx(m,{})]})]})},Bfe=S.div`
  width: 90%;
  padding: 12px 20px 0px 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 170px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,zfe=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 50px;
  padding: 5px;
  font-size: 12px;
  text-align: center;
  background-color: lightgray;
  width: 100%;
  border-radius: 3px;
`,Hfe=S.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: left;
  padding: 10px 20px 0px 20px;
  vertical-align: center;
  margin-top: 0px;
  height: auto;
  min-height: 50px;
  font-size: 12px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid lightgray;

  label {
    margin-left: 8px;
  }
`,Ufe=S.div`
  display: inline-grid;
  grid-template-columns: ${e=>`repeat(${e.cols}, ${100/e.cols}%)`};
  margin-bottom: 3px;
  justify-items: center;
  align-items: center;
`,Vfe=S.div`
  display: inline-grid;
  grid-template-columns: ${e=>`repeat(${e.cols}, ${100/e.cols}%)`};
`,Wfe=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`,qfe=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: center;
  margin-bottom: 5px;
  padding: 5px;
  width: 25px;
  input {
    height: 1.5em;
    width: 20px;
  }
`,Gfe=e=>{P.useEffect(()=>{const r=JSON.parse(localStorage.getItem("resultsSurvey"));r[`itemNum${e.opts.itemNum}`]="info. - na"},[e.opts.itemNum]);const t=A(D(e.opts.options))||"";return l.jsx(Kfe,{children:l.jsx(Jfe,{backgroundColor:e.opts.background,children:l.jsx("div",{children:t})})})},Kfe=S.div`
  width: 100%;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  max-width: 1300px;
  background-color: whitesmoke;
  min-height: 50px;
  margin-bottom: 20px;
  color: ${e=>e.theme.mobileText};
`,Jfe=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  min-height: 50px;
  font-size: 14px;
  text-align: center;
  background-color: ${e=>e.backgroundColor||"lightgray"};
  width: 100%;
  border-radius: 3px;
`,Qfe=e=>e.setCurrentPage,Zfe=e=>e.setProgressScore,Yfe=e=>e.langObj,Xfe=e=>e.configObj,ege=e=>e.surveyQuestionObjArray,tge=e=>e.requiredAnswersObj,rge=e=>e.setRequiredAnswersObj,nge=e=>e.checkRequiredQuestionsComplete,oge=e=>e.setTriggerMobileSurveyHelpModal,ige=e=>e.mobileSurveyViewSize,age=e=>e.triggerMobileSurveyHelpModal,sge=e=>e.setTriggerMobileSurveyHelpModal,lge=e=>e.triggerSurveyPreventNavModal,cge=e=>e.setTriggerSurveyPreventNavModal,gS=()=>{const e=E(Qfe),t=E(Zfe),r=X(Xfe),n=X(Yfe),o=X(tge),i=X(ege),a=X(rge),s=E(nge),c=E(oge),u=E(ige),d=E(age),f=E(sge),g=E(lge),p=E(cge),m=r.headerBarColor,h=i,x=A(D(n.surveyHeader))||"",v=A(D(n.screenOrientationText))||"",y=A(D(n.expandViewMessage))||"",C=A(D(n.mobileSurveyHelpModalHead))||"",T=A(D(n.mobileSurveyHelpModalText))||"",N=A(D(n.surveyPreventNavModalHead))||"",j=A(D(n.surveyPreventNavModalText))||"",I=JSON.parse(localStorage.getItem("m_ViewSizeObject")).survey;let $=So();P.useEffect(()=>{let q=Object.keys(o);for(let K=0;K<q.length;K++)o[q[K]]="no response";a(o)},[a,o]);const w=P.useRef(null);P.useEffect(()=>(w.current=Date.now(),(async()=>{await e("survey"),localStorage.setItem("currentPage","survey"),await t(20)})(),()=>{jr(w.current,"surveyPage","surveyPage")}),[e,t]);const U=()=>{c(!0)},L=()=>h?(h||[]).map(K=>K.type==="text"?l.jsx(pfe,{check:s,opts:K},te()):K.type==="textarea"?l.jsx(hfe,{check:s,opts:K},te()):K.type==="radio"?l.jsx(xfe,{check:s,opts:K},te()):K.type==="checkbox"?l.jsx(Tfe,{check:s,opts:K},te()):K.type==="select"?l.jsx(wfe,{check:s,opts:K},te()):K.type==="likert"?l.jsx(_fe,{check:s,opts:K},te()):K.type==="rating2"?l.jsx(Ife,{check:s,opts:K},te()):K.type==="rating5"?l.jsx(Nfe,{check:s,opts:K},te()):K.type==="rating10"?l.jsx(Dfe,{check:s,opts:K},te()):K.type==="information"?l.jsx(Gfe,{opts:K},te()):null):l.jsx(uge,{children:"No questions added."});return $==="landscape-primary"?l.jsx(pge,{children:l.jsx("h1",{children:v})}):l.jsxs(hge,{children:[l.jsxs(dge,{background:m,children:[x,l.jsx(gge,{onClick:U,children:l.jsx(nl,{})})]}),l.jsx(hr,{trigger:g,setTrigger:p,head:N,text:j,showArrow:!1,height:"150px"}),l.jsx(hr,{trigger:d,setTrigger:f,head:C,text:T,showArrow:!1,height:"250px"}),l.jsx(fge,{viewSize:u===+I?u:I,children:l.jsx(L,{})}),l.jsx(mge,{children:y})]})},uge=S.div`
  margin-top: 50px;
  font-size: 24px;
  font-weight: bold;
`,dge=S.div`
  display: flex;
  width: 100vw;
  padding-left: 10px;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 30px;
  background-color: ${e=>e.background};
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  user-select: none;
`,fge=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  padding-bottom: 20px;
  width: 98%;
  /* height: 80vh; */
  height: ${e=>`${e.viewSize}vh`};

  overflow-x: hidden;
  overflow-y: auto;
  border: 1px solid lightgray;
  border-radius: 10px;
  color: ${e=>e.theme.mobileText};
`,gge=S.div`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  align-items: center;
  padding-bottom: 5px;
  width: 20px;
  height: 20px;
  color: black;
  font-size: 2.5vh;
  font-weight: bold;
  user-select: none;
`,pge=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: ${e=>e.theme.mobileText};
`,mge=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
  user-select: none;
`,hge=S.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 100vh; */
  /* justify-content: center; */
  align-items: center;
`,vge=(e,t)=>{let r;return(...n)=>{r&&clearTimeout(r),r=setTimeout(()=>{e(...n)},t)}},pS=({onChange:e,delay:t=50,...r})=>{const[n,o]=Ee(r.id,""),i=vge(e,t);P.useEffect(()=>{i({target:{value:n,...r}})},[n,i,r]);const a=s=>{o(s.target.value)};return l.jsx(xge,{value:n,placeholder:r.placeholder,"data-id":r.statementId,onChange:a,minWordCountNumber:r.minWordCountNumber,highlighting:r.highlight,...r})},xge=S.textarea`
  box-sizing: border-box;
  padding: 5px;
  min-height: 12vh;
  width: 80vw;
  outline: 1px solid #36454f;
  border: none;
  color: ${e=>e.theme.mobileText};
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: ${e=>e.highlightObject[e.statementId]===!0?"whitesmoke":e.required&&e.highlighting?"rgba(253, 224, 71, .5)":"whitesmoke"};
`,yge=e=>e.setCurrentPage,bge=e=>e.setProgressScore,Sge=e=>e.langObj,Cge=e=>e.configObj,wge=e=>e.mapObj,jge=e=>e.mobilePostsortFontSize,Tge=e=>e.mobilePostsortViewSize,Oge=e=>e.showPostsortCommentHighlighting,Ige=e=>e.setTriggerMobilePostsortHelpModal,Pge=e=>e.triggerMobilePostsortHelpModal,Ege=e=>e.setTriggerMobilePostsortHelpModal,$ge=e=>e.triggerMobilePostsortPreventNavModal,Nge=e=>e.setTriggerMobilePostsortPreventNavModal,mS=()=>{const e=E(yge),t=E(bge),r=X(Sge),n=X(wge),o=X(Cge);let i=E(jge),a=o.postsortCommentsRequired;const s=E(Oge),c=E(Ige),u=E(Pge),d=E(Ege),f=E($ge),g=E(Nge),p=A(D(r.mobilePostsortSortbarText))||"",m=A(D(r.postsortAgreement))||"",h=A(D(r.postsortDisagreement))||"",x=r.placeholder,v=A(D(r.screenOrientationText))||"",y=A(D(r.expandViewMessage))||"",C=A(D(r.mobilePostsortHelpModalHead))||"",T=A(D(r.mobilePostsortHelpModalText))||"",N=A(D(r.mobilePostsortPreventNavModalHead))||"",j=A(D(r.mobilePostsortPreventNavModalText))||"",I=Dh(n),$=P.useMemo(()=>[...n.qSortHeaderNumbers],[n]),w=P.useMemo(()=>[...I.displayArray],[I]),{posEmojiArray:U,negEmojiArray:L,posNumValues:q,negNumValues:K}=P.useMemo(()=>{const me=[],ye=[],be=[],xe=[],je=[...n.qSortPattern],he=o.showSecondPosColumn,Oe=o.showSecondNegColumn;let ke=je[0],Ze=je[je.length-1];const Ge=je[1],We=je[je.length-2],ot=w[w.length-1],Mt=w[w.length-2],At=w[0],un=w[1];for(let dt=0;dt<ke;dt++)me.push(ot),be.push($[$.length-1].toString());for(let dt=0;dt<Ze;dt++)ye.push(At),xe.push($[0].toString());if(he===!0||he==="true")for(let dt=0;dt<Ge;dt++)me.push(Mt),be.push($[$.length-2].toString());if(Oe===!0||Oe==="true")for(let dt=0;dt<We;dt++)ye.unshift(un),xe.unshift($[1].toString());return{posEmojiArray:me,negEmojiArray:ye,posNumValues:be,negNumValues:xe}},[n,o,w,$]);let B=o.minWordCountValuePostsort||0,J=o.requireMinCommentLength||!1,Y;J?Y=B:Y=1.5;let k,_=n.useColLabelNumsPostsort[0];(_!==void 0||_!==null)&&(_===!1||_==="false"?k=!1:k=!0);let z,V=n.useColLabelTextPostsort[0];(V!==void 0||V!==null)&&(V===!1||V==="false"?z=!1:z=!0);let Q,H=n.useColLabelEmojiPostsort[0];(H!==void 0||H!==null)&&(H===!1||H==="false"?Q=!1:Q=!0);const G=P.useMemo(()=>{const me={},be=[...JSON.parse(localStorage.getItem("m_SortArray1"))||[]],xe=JSON.parse(localStorage.getItem("m_SortCharacteristicsArray")),je=o.showSecondPosColumn,he=o.showSecondNegColumn,Oe=[...n.qSortPattern];let ke=Oe[0],Ze=Oe[Oe.length-1];const Ge=Oe[1],We=Oe[Oe.length-2];(je===!0||je==="true")&&(ke=+ke+ +Ge),(he===!0||he==="true")&&(Ze=+Ze+ +We);const ot=be.slice(0,ke),Mt=be.slice(-Ze),At=xe.slice(-Ze),un={},dt={};return ot.forEach((Vt,dr)=>{Vt.sortValue=xe[dr].value,Vt.header=xe[dr].header,Vt.color=xe[dr].color,un[Vt.id]=""}),Mt.forEach((Vt,dr)=>{Vt.sortValue=At[dr].value,Vt.header=At[dr].header,Vt.color=At[dr].color,dt[Vt.id]=""}),localStorage.setItem("m_PostSortResultsObj",JSON.stringify(me)),[ot,Mt,un,dt]},[n.qSortPattern,o]),Z=JSON.parse(localStorage.getItem("m_FontSizeObject")).postsort,W=JSON.parse(localStorage.getItem("m_ViewSizeObject")).postsort,R=E(Tge),[O,b]=Ee("m_PosRequiredStatesObj",G[2]),[F,M]=Ee("m_NegRequiredStatesObj",G[3]),[ee,ie]=Ee("m_MinWordCountPostsortObject",{});let de=So();const ce=P.useRef(null);P.useEffect(()=>(ce.current=Date.now(),(async()=>{await e("postsort"),localStorage.setItem("currentPage","postsort"),await t(20)})(),()=>{jr(ce.current,"postsortPage","postsortPage")}),[e,t]);const fe=()=>{c(!0)},Se=me=>{const ye=JSON.parse(localStorage.getItem("m_PostSortResultsObj"));JSON.parse(localStorage.getItem("resultsPostsort"));let be=kt(me.target.value),je=Fs(be).totalWords;const ke=me.target.sortValue.replace("+","").replace("-","N");me.target.side==="positive"&&(ye[`column${ke}:(${me.target.commentId})`]=be,O[me.target.statementId]=be,b(O),a&&je<Y?(ee[me.target.statementId]=!1,ie(ee)):(ee[me.target.statementId]=!0,ie(ee))),me.target.side==="negative"&&(ye[`column${ke}:(${me.target.commentId})`]=be,F[me.target.statementId]=be,M(F),a&&je<Y?(ee[me.target.statementId]=!1,ie(ee)):(ee[me.target.statementId]=!0,ie(ee))),localStorage.setItem("m_PostSortResultsObj",JSON.stringify(ye)),localStorage.setItem("resultsPostsort",JSON.stringify(ye))};if(de==="landscape-primary")return l.jsx(Rge,{children:l.jsx("h1",{children:v})});let le=G[0].map((me,ye)=>l.jsxs("div",{children:[l.jsxs(hS,{fontSize:"2",color:me.color,card:me,index:ye,sortValue:me.sortValue,commentId:me.id,agree:m,disagree:h,children:[l.jsxs(xS,{children:[Q&&l.jsx(zl,{children:U[ye]}),l.jsxs(SS,{children:[k&&l.jsx(yS,{children:"+"+q[ye]}),z&&l.jsx(bS,{children:me.header})]}),Q&&l.jsx(zl,{children:U[ye]})]}),l.jsx(vS,{children:me.statement})]}),l.jsx(pS,{delay:500,id:`m_PostsortComment(${me.id})`,placeholder:x,required:a,index:ye,commentId:me.id,sortValue:me.sortValue,onChange:Se,statementId:me.id,side:"positive",minWordCountNumber:Y,highlight:s,highlightObject:ee})]},te())),pe=G[1].map((me,ye)=>l.jsxs("div",{children:[l.jsxs(hS,{card:me,color:me.color,index:ye,agree:m,commentId:me.id,sortValue:me.sortValue,disagree:h,children:[l.jsxs(xS,{children:[Q&&l.jsx(zl,{children:L[ye]}),l.jsxs(SS,{children:[k&&l.jsx(yS,{children:K[ye]}),z&&l.jsx(bS,{children:me.header})]}),Q&&l.jsx(zl,{children:L[ye]})]}),l.jsx(vS,{children:me.statement})]}),l.jsx(pS,{onChange:Se,delay:500,id:`m_PostsortComment(${me.id})`,placeholder:x,index:ye,required:a,sortValue:me.sortValue,commentId:me.id,side:"negative",statementId:me.id,minWordCountNumber:Y,highlight:s,highlightObject:ee})]},te()));return l.jsxs(Dge,{children:[l.jsxs(kge,{background:o.headerBarColor,children:[p,l.jsx(Mge,{onClick:fe,children:l.jsx(nl,{})})]}),l.jsx(hr,{head:N,text:j,trigger:f,setTrigger:g,showArrow:!1,height:"150px"}),l.jsx(hr,{head:C,text:T,trigger:u,setTrigger:d,showArrow:!1,height:"150px"}),l.jsxs(Age,{viewSize:R===+W?R:W,fontSize:i===+Z?i:Z,children:[le,pe]}),l.jsx(Lge,{children:y})]})},kge=S.div`
  display: flex;
  width: 100vw;
  padding-left: 10px;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 30px;
  background-color: ${e=>e.background};
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  user-select: none;
`,Mge=S.div`
  display: flex;
  justify-content: center;
  margin-right: 5px;
  align-items: center;
  padding-bottom: 5px;
  width: 20px;
  height: 20px;
  color: black;
  font-size: 2.5vh;
  font-weight: bold;
  user-select: none;
`,Age=S.div`
  display: flex;
  align-self: top;
  justify-self: center;
  margin-top: 10px;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 15px;
  justify-content: center;
  font-size: ${e=>`${e.fontSize}vh`};
  color: ${e=>e.theme.mobileText};
  background-color: #e5e5e5;
  width: 90vw;
  height: ${e=>`${e.viewSize}vh`};
  align-items: center;
  border-radius: 3px;
  text-align: center;
  overflow-x: none;
  overflow-y: auto;
  padding-bottom: 10px;
  padding-top: 10px;
  border-radius: 5px;
  border: 1px solid black;
`,hS=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3px;
  box-sizing: border-box;
  background-color: ${e=>e.color};
  width: 80vw;
  min-height: 8vh;
  /* font-size: ${e=>`${e.fontSize}vh`}; */
  border-top-right-radius: 3px;
  border-top-left-radius: 3px;
  text-align: center;
  outline: 1px solid black;
  padding: 5px;
`,Dge=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  user-select: none;
  background-color: #f3f4f6;
`,Rge=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.mobileText};
  width: 100vw;
  height: 100vh;
`,Lge=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
  user-select: none;
`,vS=S.div`
  background-color: lightgray;
  border-radius: 3px;
  padding: 5px;
  outline: 1px solid darkgray;
`,xS=S.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-right: 2px;
  padding-left: 2px;
`,yS=S.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
`,zl=S.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,bS=S.div`
  display: flex;
  padding-top: 2px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: 4vw;
  text-align: center;
  line-height: 0.8rem;
`,SS=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`,Fge=e=>e.langObj,_ge=e=>e.configObj,Bge=e=>e.setDisableRefreshCheck,zge=e=>{const t=X(Fge),r=X(_ge),n=E(Bge),o=A(D(t.defaultEmailClientFail))||"",i=A(D(t.submitFailMessage))||"",[a,s]=P.useState(i),[c,u]=P.useState(!1),d=e.results,f=r.emailAddress,g=A(D(t.btnTransferEmail))||"",p=h=>{h.preventDefault();const x=Object.entries(e.results).map(([T,N])=>`${T}: ${N}`).join(`
`),v=new Blob([x],{type:"text/plain"}),y=URL.createObjectURL(v),C=document.createElement("a");C.href=y,C.download="my_Q-sort_results.txt",document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(y)},m=h=>{h.preventDefault(),s(o);let x="";for(const[v,y]of Object.entries(e.results))x=x+`${v}:| ${y} | `;console.log(JSON.stringify(x,null,2)),navigator.userAgent.toLowerCase().indexOf("chrome")>-1?(window.open(`mailto:${r.emailAddress}?subject=${r.emailSubjectLine}&body=${t.emailBodyMessage} %0D%0A%0D%0AMy Results:%0D%0A${x}`),u(!0)):(window.location.href=`mailto:${r.emailAddress}?subject=${r.emailSubjectLine}&body=${t.emailBodyMessage} %0D%0A%0D%0AMy Results:%0D%0A${x}`,u(!0))};return P.useEffect(()=>{n(!0)},[n]),console.log("urlUsercode: ",e.results.urlUsercode),l.jsxs(Jge,{children:[l.jsxs(Uge,{children:[l.jsx(Hge,{tabindex:"0",onClick:h=>m(h),children:g}),l.jsx(Vge,{children:a})]}),c?l.jsx(qge,{children:l.jsxs(Gge,{children:[l.jsx(ru,{type:"email",content:f,text:t.clipboardEmail}),l.jsx(ru,{type:"results",content:d,text:t.clipboardResults}),l.jsx(Qge,{children:l.jsx(Kge,{onClick:h=>p(h),children:t.downloadResultsButtonText})})]})}):l.jsx(Wge,{})]})},Hge=S.button`
  display: flex;
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};
  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }
  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,Uge=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
`,Vge=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2em;
  width: 65vw;
  font-size: 1.35em;
  align-self: center;
`,Wge=S.div`
  height: 300px;
`,qge=S.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Gge=S.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  margin-top: 10px;
  height: 110px;
  gap: 10px;
  justify-content: center;
  align-items: center;
`,Kge=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: 220px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 50px;
  background-color: ${({theme:e})=>e.primary};
  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }
`,Jge=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`,Qge=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid #2e6da4; */
`,Zge=e=>e.langObj,Yge=e=>e.transmittingData,Xge=e=>e.setTransmittingData,epe=e=>e.checkInternetConnection,tpe=e=>e.setCheckInternetConnection,rpe=e=>e.configObj,npe=e=>e.setTriggerTransmissionOKModal,ope=e=>e.setDisplayGoodbyeMessage,ipe=e=>e.setDisplayBelowButtonText,ape=e=>{const t=X(Zge);let r=E(Yge);const n=E(Xge);let o=E(epe);const i=E(tpe),a=X(rpe),s=E(npe),c=E(ope),u=A(D(t.checkInternetMessage))||"",d=E(ipe),f=A(D(t.btnTransfer))||"",[g,p]=P.useState(0),m=h=>{h.preventDefault(),h.target.disabled=!0,d(!0),n(!0),i(!1),setTimeout(()=>{n(!1),i(!0),d(!1)},1e4);let x=a.baserowToken,v=a.baserowDatabaseIdNumber;if(x==null){console.log("Baserow token is not set");return}tt({method:"POST",url:`https://api.baserow.io/api/database/rows/table/${v}/?user_field_names=true`,headers:{Authorization:`Token ${x}`,"Content-Type":"application/json"},data:e.results}).then(y=>{console.log(y),y.status===200&&(n(!1),i(!1),c(!0),s(!0))}).catch(y=>{console.log(y),setTimeout(()=>{p(g+1)},1e4)}),console.log("submission processed")};return console.log("failureCount: ",g),g>1&&i(!1),l.jsxs(ae.Fragment,{children:[l.jsx(Fn,{}),l.jsx(vh,{}),l.jsx(xh,{}),r?l.jsx(lpe,{}):l.jsx(spe,{tabindex:"0",onClick:h=>m(h),children:f}),o&&l.jsx(cpe,{children:u}),g>1&&l.jsx(upe,{children:l.jsx(zge,{results:e.results})})]})},spe=S.button`
  border-color: #2e6da4;
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: auto;
  height: 50px;
  justify-self: right;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,lpe=S.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  margin-top: 30px;
  margin-bottom: 20px;
  border: 5px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: #337ab7;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`,cpe=S.div`
  display: flex;
  padding-top: 30px;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  font-size: 0.9em;
  text-align: center;
  background-color: #ffc067;
  padding: 5px;
  margin-bottom: 30px;
  border-radius: 10px;
  font-weight: bold;
`,upe=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vw;
  height: fit-content;
  font-size: 0.8em;
  text-align: center;
  background-color: #ffc067;
  margin-bottom: 30px;
  padding: 5px;
  border-radius: 10px;
  font-weight: bold;
`,dpe=(e,t)=>{let r="",n="";return e.forEach((o,i)=>{let s=t[i].value.replace("+","");o.sortValue=s,o.number=+o.statementNum}),e.sort((o,i)=>o.number-i.number),e.forEach(o=>{o.psValue>0&&(o.presortVal="p"),o.psValue===0&&(o.presortVal="u"),o.psValue<0&&(o.presortVal="n"),r+=`${o.sortValue}|`,n+=`${o.statementNum}*${o.presortVal}*${o.sortValue}|`}),r.charAt(r.length-1)==="|"&&(r=r.substring(0,r.length-1)),n.charAt(n.length-1)==="|"&&(n=n.substring(0,n.length-1)),{r20:`sort: ${r}`,r21:`presortTrace: ${n}`}},fpe=e=>{let t=0,r=0,n=0,o="",i="",a="";return e.forEach(s=>{s.psValue>0?(t++,o+=s.id+", "):s.psValue<0?(r++,i+=s.id+", "):(n++,a+=s.id+", ")}),{npos:t,nneg:r,nneu:n,posStateNums:o.slice(0,-2),negStateNums:i.slice(0,-2),neuStateNums:a.slice(0,-2)}},gpe=e=>e.setCurrentPage,ppe=e=>e.setProgressScore,mpe=e=>e.langObj,hpe=e=>e.configObj,vpe=e=>e.displayGoodbyeMessage,CS=()=>{const e=E(gpe),t=E(ppe),r=X(mpe),n=X(hpe),o=jm();let i=JSON.parse(localStorage.getItem("m_SortArray1"));const a=E(vpe),[s,c]=P.useState({consent:"00:00:00",landing:"00:00:00",presort:"00:00:00",thinning:"00:00:00",sort:"00:00:00",postsort:"00:00:00",survey:"00:00:00"});P.useEffect(()=>{const L=(K,B="00:00:00")=>{const J=localStorage.getItem(K);return J!==null?J:B},q={consent:L("timeOnconsentPage"),landing:L("timeOnlandingPage"),presort:L("timeOnpresortPage"),thinning:L("timeOnthinningPage"),sort:L("timeOnsortPage"),postsort:L("timeOnpostsortPage"),survey:L("timeOnsurveyPage")};(n.showConsentPage===!1||n.showConsentPage==="false")&&(q.consent="n/a"),(n.showPostsort===!1||n.showPostsort==="false")&&(q.postsort="n/a"),(n.showSurvey===!1||n.showSurvey==="false")&&(q.survey="n/a"),c(q)},[n]);const u=A(D(r.mobileSortTitleBar)),d=A(D(r.transferTextAbove))||"",f=A(D(r.transferTextBelow))||"",g=A(D(r.goodbyeMessage))||"",p=A(D(r.screenOrientationText))||"",m=JSON.parse(localStorage.getItem("m_PresortResults"))||{},h=JSON.parse(localStorage.getItem("columnStatements"))||{},x=JSON.parse(localStorage.getItem("m_SortCharacteristicsArray")),v=fpe(m);localStorage.setItem("resultsPresort",JSON.stringify(v));let y=So();P.useEffect(()=>{let L=Date.now();return(async()=>{await e("submit"),localStorage.setItem("currentPage","submit"),await t(20)})(),()=>{jr(L,"submitPage","submitPage")}},[e,t]);let C={},T=JSON.parse(localStorage.getItem("resultsSurvey"));T===void 0&&(T={});let N=localStorage.getItem("randomId")||te(),j=localStorage.getItem("partId")||"no part ID",I=localStorage.getItem("usercode")||"no usercode set",$=n.creationDate||"unknown date";C.r1=n.studyTitle?`(projectName): ${n.studyTitle} - ${$}`:`(projectName): my Q study - ${$}`,C.r2=`(randomId): ${N}`,C.r3=`(partId): ${j}`,C.r4=`(urlUsercode): ${I}`,C.r5=`(dateTime): ${o}`,C.r6="(desktop/mobile): mobile",C.r7=`(timeOnConsentPage): ${s.consent}`,C.r8=`(timeOnWelcomePage): ${s.landing}`,C.r9=`(timeOnPresortPage): ${s.presort}`,C.r10=`(timeOnRefinePage): ${s.thinning}`,C.r11=`(timeOnSortPage): ${s.sort}`,C.r12=`(timeOnPostsortPage): ${s.postsort}`,C.r13=`(timeOnSurveyPage): ${s.survey}`;try{const L=aj();C={...C,...L}}catch(L){console.log(L),alert("4: "+L.message)}let w=22;try{if(n.showPostsort){const L=JSON.parse(localStorage.getItem("resultsPostsort"))||{},q=Object.fromEntries(Object.entries(L).sort(([B],[J])=>B.localeCompare(J))),K=Object.keys(q);for(let B=0;B<K.length;B++){if(K[B].substring(0,9)==="textArea-")continue;let Y=q[K[B]];Y===""&&(Y=" no response"),C[`r${w}`]=`${K[B]}: ${Y}`,w++}}}catch(L){console.log(L),alert("5: "+L.message)}try{if(n.showSurvey&&T!==void 0){const L=Object.keys(T);for(let q=0;q<L.length;q++)C[`r${w}`]=`${L[q]}: ${T[L[q]]}`,w++}}catch(L){console.log(L),alert("6: "+L.message)}let U;try{Object.keys(h).length!==0&&h!==void 0&&Object.keys(v).length!==0&&v!==void 0&&(U=dpe([...i],[...x]))}catch(L){console.log(L),alert("7: "+L.message)}try{C={...C,...U}}catch(L){console.log(L),alert("8: "+L.message)}return console.log(JSON.stringify(C,null,2)),y==="landscape-primary"?l.jsx(wpe,{children:l.jsx("h1",{children:p})}):a===!0?n.linkToSecondProject===!0?l.jsxs(wS,{children:[r.linkedProjectMessage,l.jsx("a",{id:"secondProjectLink",href:`${n.secondProjectUrl}/#/?usercode=${n.urlUsercode}`,style:{targetNew:"tab",textDecoration:"none"},children:l.jsx(Tpe,{children:r.linkedProjectBtnMessage})})]}):l.jsx(Cpe,{children:l.jsx(wS,{children:g})}):l.jsxs(jpe,{children:[l.jsx(ype,{background:n.headerBarColor,children:u}),l.jsxs(xpe,{children:[l.jsx(bpe,{children:d}),l.jsx(ape,{results:C}),l.jsx(Spe,{children:f})]})]})},xpe=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  width: 96vw;
  margin-top: 10px;
  min-height: 80vh;
  user-select: none;
  background-color: #f3f4f6;
  color: ${e=>e.theme.mobileText};
`,ype=S.div`
  display: flex;
  width: 100vw;
  padding-left: 10px;
  padding-right: 1.5vw;
  padding-top: 5px;
  min-height: 30px;
  background-color: ${e=>e.background};
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  user-select: none;
`,bpe=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 80%;
  font-size: 15px;
  padding: 25px;
  align-self: center;
`,Spe=S.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 80%;
  font-size: 14px;
  padding: 10px;
  align-self: center;
`,Cpe=S.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,wS=S.div`
  display: flex;
  justify-self: center;
  width: 80vw;
  height: calc(100vh - 50px);
  text-align: center;
  font-size: 22px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${e=>e.theme.mobileText};
`,wpe=S.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`,jpe=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-height: 90vh; /* Set desired max height */
  overflow-y: auto;
  overflow-x: hidden;
  padding: 10px;

  /* Optional: Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`,Tpe=S.button`
  grid-area: b;
  border-color: #2e6da4;
  color: white;
  font-size: 0.8em;
  font-weight: bold;
  padding: 0.25em 1em;
  border-radius: 3px;
  text-decoration: none;
  width: fit-content;
  height: 50px;
  justify-self: right;
  margin-right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  margin-bottom: 20px;
  background-color: ${({theme:e,active:t})=>t?e.secondary:e.primary};

  &:hover {
    background-color: ${({theme:e})=>e.secondary};
  }

  &:focus {
    background-color: ${({theme:e})=>e.focus};
  }
`,Ope=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,lu=e=>{if(typeof e!="string")throw new TypeError("Invalid argument expected string");const t=e.match(Ope);if(!t)throw new Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},jS=e=>e==="*"||e==="x"||e==="X",TS=e=>{const t=parseInt(e,10);return isNaN(t)?e:t},Ipe=(e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t],Ppe=(e,t)=>{if(jS(e)||jS(t))return 0;const[r,n]=Ipe(TS(e),TS(t));return r>n?1:r<n?-1:0},wi=(e,t)=>{for(let r=0;r<Math.max(e.length,t.length);r++){const n=Ppe(e[r]||"0",t[r]||"0");if(n!==0)return n}return 0},Epe=(e,t)=>{const r=lu(e),n=lu(t),o=r.pop(),i=n.pop(),a=wi(r,n);return a!==0?a:o&&i?wi(o.split("."),i.split(".")):o||i?o?-1:1:0},$pe=(e,t,r)=>{Npe(r);const n=Epe(e,t);return Wj[r].includes(n)},Wj={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},OS=Object.keys(Wj),Npe=e=>{if(typeof e!="string")throw new TypeError(`Invalid operator type, expected string but got ${typeof e}`);if(OS.indexOf(e)===-1)throw new Error(`Invalid operator, expected one of ${OS.join("|")}`)},Ni=(e,t)=>{if(t=t.replace(/([><=]+)\s+/g,"$1"),t.includes("||"))return t.split("||").some(x=>Ni(e,x));if(t.includes(" - ")){const[x,v]=t.split(" - ",2);return Ni(e,`>=${x} <=${v}`)}else if(t.includes(" "))return t.trim().replace(/\s{2,}/g," ").split(" ").every(x=>Ni(e,x));const r=t.match(/^([<>=~^]+)/),n=r?r[1]:"=";if(n!=="^"&&n!=="~")return $pe(e,t,n);const[o,i,a,,s]=lu(e),[c,u,d,,f]=lu(t),g=[o,i,a],p=[c,u??"x",d??"x"];if(f&&(!s||wi(g,p)!==0||wi(s.split("."),f.split("."))===-1))return!1;const m=p.findIndex(x=>x!=="0")+1,h=n==="~"?2:m>1?m:1;return!(wi(g.slice(0,h),p.slice(0,h))!==0||wi(g.slice(h),p.slice(h))===-1)},kpe=e=>e.langObj,Mpe=()=>{const e=X(kpe);return l.jsxs(Ape,{children:[l.jsx("h1",{children:e.preventMobileTitle}),l.jsx("p",{children:e.preventMobileMessage})]})},Ape=S.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  text-align: center;
`,Dpe=e=>e.setConfigObj,Rpe=e=>e.setLangObj,Lpe=e=>e.setMapObj,Fpe=e=>e.setStatementsObj,_pe=e=>e.setColumnStatements,Bpe=e=>e.setResetColumnStatements,zpe=e=>e.setSurveyQuestionObjArray,Hpe=e=>e.setRequiredAnswersObj,Upe=e=>e.setDataLoaded,Vpe=e=>e.displayGoodbyeMessage,Wpe=e=>e.disableRefreshCheck,qpe=e=>e.configObj,Gpe=e=>e.langObj,Kpe=e=>e.mapObj;function Jpe(){const e=X(Dpe),t=X(Rpe),r=X(Lpe),n=X(Fpe),o=X(_pe),i=X(Bpe),a=X(zpe),s=X(Hpe),c=E(Upe),u=E(Vpe),d=E(Wpe),f=X(qpe),g=X(Gpe),p=X(Kpe),[m,h]=P.useState(!0),[x,v]=P.useState(!1),[y,C]=P.useState(!1),[T,N]=P.useState(!1);if(P.useEffect(()=>{const L=q=>{const K=q||window.event;return K.preventDefault(),K&&(K.returnValue=""),""};if(u||d)window.removeEventListener("beforeunload",L);else return window.addEventListener("beforeunload",L),()=>{window.removeEventListener("beforeunload",L)}},[u,d]),P.useEffect(()=>{let L,q,K=[];(async()=>(await tt.get("./settings/language.xml",{"Content-Type":"application/xml; charset=utf-8"}).then(function(B){const J={compact:!0,ignoreComment:!0,spaces:4},Y=Ll.xml2js(B.data,J);let k=Qoe(Y);t(k)}).catch(function(B){console.log(B)}),await tt.get("./settings/config.xml",{"Content-Type":"application/xml; charset=utf-8"}).then(function(B){const J={compact:!1,ignoreComment:!0,spaces:2},Y=Ll.xml2js(B.data,J);let k=Koe(Y);if(L=k.shuffleCards,e(k.configObj),a(k.surveyQuestionObjArray),s(k.requiredAnswersObj),k.configObj.useImages===!0){for(let _=0;_<k.configObj.numImages;_++){let z={};z.backgroundColor="white",z.element=l.jsx("img",{src:`/settings/images/image${_+1}.${k.configObj.imageFileType}`,alt:`image${_+1}`,className:"dragObject"}),z.cardColor="yellowSortCard",z.divColor="isUncertainStatement",z.pinkChecked=!1,z.yellowChecked=!0,z.greenChecked=!1,z.sortValue=222,z.id=`image${_+1}`,z.statement=`image${_+1}`,z.statementNum=`${_+1}`,K.push(z)}k.configObj.shuffleCards===!0&&(K=[...qu(K)])}}).catch(function(B){console.log(B)}),await tt.get("./settings/map.xml",{"Content-Type":"application/xml; charset=utf-8"}).then(function(B){const J={compact:!0,ignoreComment:!0,spaces:4},Y=Ll.xml2js(B.data,J);let k=Joe(Y);q=k.vColsObj,r(k.mapObj)}).catch(function(B){console.log(B)}),await tt.get("./settings/statements.xml",{"Content-Type":"application/xml; charset=utf-8"}).then(function(B){const J={compact:!0,ignoreComment:!0,spaces:4},Y=Ll.xml2js(B.data,J),k=Zoe(Y,L,q);k.columnStatements.imagesList=K,o(k.columnStatements);const _=Wm(k.columnStatements);i(_),n(k)}).catch(function(B){console.log(B)}),await c(!0),await h(!1)))()},[e,t,n,o,s,a,r,c,i]),m)return l.jsx(ow,{});const j="1.0.0",I="1.1.0",$=g.langFileVersion||"",w=f.configFileVersion||"",U=p.mapFileVersion||"";try{!Ni($,`>=${j} <${I}`)&&T===!1&&(alert("The language.xml file is out-of-date. Please import the file into the Quince Configurator to update it to the newest version, then add it to your project's settings folder and try again."),N(!0)),!Ni(w,`>=${j} <${I}`)&&y===!1&&(alert("The config.xml file is out-of-date. Please import the file into the Quince Configurator to update it to the newest version, then add it to your project's settings folder and try again."),C(!0)),!Ni(U,`>=${j} <${I}`)&&x===!1&&(alert("The map.xml file is out-of-date. Please import the file into the Quince Configurator to update it to the newest version, then add it to your project's settings folder and try again."),v(!0))}catch(L){console.log("There was an error determining the settings file versions "),console.log(L)}return(f.useMobileMode===!0||f.useMobileMode==="true")&&nm()?(console.log("Mobile Mode"),f.preventMobileAccess===!0||f.preventMobileAcess==="true"?l.jsx("div",{className:"App",children:l.jsx(Oa,{children:l.jsx(Ta,{children:l.jsx(Fe,{exact:!0,path:"/",component:Mpe})})})}):f.showConsentPage===!0||f.showConsentPage==="true"?l.jsx("div",{className:"App",children:l.jsxs(Oa,{children:[l.jsxs(Ta,{children:[l.jsx(Fe,{exact:!0,path:"/",component:lb}),l.jsx(Fe,{exact:!0,path:"/presort",component:Cb}),l.jsx(Fe,{exact:!0,path:"/thin",component:Ib}),l.jsx(Fe,{exact:!0,path:"/sort",component:Lb}),l.jsx(Fe,{exact:!0,path:"/postsort",component:mS}),l.jsx(Fe,{exact:!0,path:"/survey",component:gS}),l.jsx(Fe,{exact:!0,path:"/submit",component:CS}),l.jsx(Fe,{exact:!0,path:"/landing",component:El}),l.jsx(Fe,{component:Rl})]}),l.jsx(P.Suspense,{children:l.jsx(cb,{})})]})}):l.jsx("div",{className:"App",children:l.jsxs(Oa,{children:[l.jsxs(Ta,{children:[l.jsx(Fe,{exact:!0,path:"/",component:El}),l.jsx(Fe,{exact:!0,path:"/presort",component:Cb}),l.jsx(Fe,{exact:!0,path:"/thin",component:Ib}),l.jsx(Fe,{exact:!0,path:"/sort",component:Lb}),l.jsx(Fe,{exact:!0,path:"/postsort",component:mS}),l.jsx(Fe,{exact:!0,path:"/survey",component:gS}),l.jsx(Fe,{exact:!0,path:"/submit",component:CS}),l.jsx(Fe,{component:Rl})]}),l.jsx(P.Suspense,{children:l.jsx(cb,{})})]})})):f.showConsentPage===!0||f.showConsentPage==="true"?l.jsx("div",{className:"App",children:l.jsxs(Oa,{children:[l.jsxs(Ta,{children:[l.jsx(Fe,{exact:!0,path:"/",component:lb}),l.jsx(Fe,{exact:!0,path:"/presort",component:Rx}),l.jsx(Fe,{exact:!0,path:"/thin",component:Yy}),l.jsx(Fe,{exact:!0,path:"/sort",component:Jx}),l.jsx(Fe,{exact:!0,path:"/postsort",component:k1}),l.jsx(Fe,{exact:!0,path:"/survey",component:Ky}),l.jsx(Fe,{exact:!0,path:"/submit",component:cy}),l.jsx(Fe,{exact:!0,path:"/landing",component:El}),l.jsx(Fe,{component:Rl})]}),l.jsx(P.Suspense,{children:l.jsx(ib,{})})]})}):l.jsx("div",{className:"App",children:l.jsxs(Oa,{children:[l.jsxs(Ta,{children:[l.jsx(Fe,{exact:!0,path:"/",component:El}),l.jsx(Fe,{exact:!0,path:"/presort",component:Rx}),l.jsx(Fe,{exact:!0,path:"/thin",component:Yy}),l.jsx(Fe,{exact:!0,path:"/sort",component:Jx}),l.jsx(Fe,{exact:!0,path:"/postsort",component:k1}),l.jsx(Fe,{exact:!0,path:"/survey",component:Ky}),l.jsx(Fe,{exact:!0,path:"/submit",component:cy}),l.jsx(Fe,{component:Rl})]}),l.jsx(P.Suspense,{children:l.jsx(ib,{})})]})})}const Qpe={primary:"#337ab7",secondary:"#285f8f",focus:"#63a0d4",mobileText:"#36454f",mobileBorder:"#36454f"};zC(document.getElementById("root")).render(l.jsx(P.Suspense,{fallback:l.jsx(ow,{}),children:l.jsxs(cT,{theme:Qpe,children:[l.jsx(fT,{}),l.jsx(Jpe,{})]})}));
