(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=r(o);fetch(o.href,i)}})();var tt=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function gt(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function gS(e){if(e.__esModule)return e;var t=e.default;if(typeof t=="function"){var r=function n(){return this instanceof n?Reflect.construct(t,arguments,this.constructor):t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach(function(n){var o=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,o.get?o:{enumerable:!0,get:function(){return e[n]}})}),r}var pS={exports:{}},su={},mS={exports:{}},Ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ps=Symbol.for("react.element"),Dj=Symbol.for("react.portal"),Rj=Symbol.for("react.fragment"),Lj=Symbol.for("react.strict_mode"),_j=Symbol.for("react.profiler"),Fj=Symbol.for("react.provider"),Bj=Symbol.for("react.context"),zj=Symbol.for("react.forward_ref"),Hj=Symbol.for("react.suspense"),Uj=Symbol.for("react.memo"),Vj=Symbol.for("react.lazy"),tv=Symbol.iterator;function Wj(e){return e===null||typeof e!="object"?null:(e=tv&&e[tv]||e["@@iterator"],typeof e=="function"?e:null)}var hS={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},vS=Object.assign,xS={};function Vi(e,t,r){this.props=e,this.context=t,this.refs=xS,this.updater=r||hS}Vi.prototype.isReactComponent={};Vi.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Vi.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function yS(){}yS.prototype=Vi.prototype;function Qg(e,t,r){this.props=e,this.context=t,this.refs=xS,this.updater=r||hS}var Yg=Qg.prototype=new yS;Yg.constructor=Qg;vS(Yg,Vi.prototype);Yg.isPureReactComponent=!0;var rv=Array.isArray,bS=Object.prototype.hasOwnProperty,Zg={current:null},SS={key:!0,ref:!0,__self:!0,__source:!0};function CS(e,t,r){var n,o={},i=null,a=null;if(t!=null)for(n in t.ref!==void 0&&(a=t.ref),t.key!==void 0&&(i=""+t.key),t)bS.call(t,n)&&!SS.hasOwnProperty(n)&&(o[n]=t[n]);var s=arguments.length-2;if(s===1)o.children=r;else if(1<s){for(var c=Array(s),u=0;u<s;u++)c[u]=arguments[u+2];o.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:Ps,type:e,key:i,ref:a,props:o,_owner:Zg.current}}function qj(e,t){return{$$typeof:Ps,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Xg(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ps}function Gj(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(r){return t[r]})}var nv=/\/+/g;function vd(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Gj(""+e.key):t.toString(36)}function Bl(e,t,r,n,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var a=!1;if(e===null)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case Ps:case Dj:a=!0}}if(a)return a=e,o=o(a),e=n===""?"."+vd(a,0):n,rv(o)?(r="",e!=null&&(r=e.replace(nv,"$&/")+"/"),Bl(o,t,r,"",function(u){return u})):o!=null&&(Xg(o)&&(o=qj(o,r+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(nv,"$&/")+"/")+e)),t.push(o)),1;if(a=0,n=n===""?".":n+":",rv(e))for(var s=0;s<e.length;s++){i=e[s];var c=n+vd(i,s);a+=Bl(i,t,r,c,o)}else if(c=Wj(e),typeof c=="function")for(e=c.call(e),s=0;!(i=e.next()).done;)i=i.value,c=n+vd(i,s++),a+=Bl(i,t,r,c,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function el(e,t,r){if(e==null)return e;var n=[],o=0;return Bl(e,n,"","",function(i){return t.call(r,i,o++)}),n}function Kj(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(r){(e._status===0||e._status===-1)&&(e._status=1,e._result=r)},function(r){(e._status===0||e._status===-1)&&(e._status=2,e._result=r)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Vt={current:null},zl={transition:null},Jj={ReactCurrentDispatcher:Vt,ReactCurrentBatchConfig:zl,ReactCurrentOwner:Zg};function wS(){throw Error("act(...) is not supported in production builds of React.")}Ae.Children={map:el,forEach:function(e,t,r){el(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return el(e,function(){t++}),t},toArray:function(e){return el(e,function(t){return t})||[]},only:function(e){if(!Xg(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};Ae.Component=Vi;Ae.Fragment=Rj;Ae.Profiler=_j;Ae.PureComponent=Qg;Ae.StrictMode=Lj;Ae.Suspense=Hj;Ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Jj;Ae.act=wS;Ae.cloneElement=function(e,t,r){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var n=vS({},e.props),o=e.key,i=e.ref,a=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,a=Zg.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in t)bS.call(t,c)&&!SS.hasOwnProperty(c)&&(n[c]=t[c]===void 0&&s!==void 0?s[c]:t[c])}var c=arguments.length-2;if(c===1)n.children=r;else if(1<c){s=Array(c);for(var u=0;u<c;u++)s[u]=arguments[u+2];n.children=s}return{$$typeof:Ps,type:e.type,key:o,ref:i,props:n,_owner:a}};Ae.createContext=function(e){return e={$$typeof:Bj,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Fj,_context:e},e.Consumer=e};Ae.createElement=CS;Ae.createFactory=function(e){var t=CS.bind(null,e);return t.type=e,t};Ae.createRef=function(){return{current:null}};Ae.forwardRef=function(e){return{$$typeof:zj,render:e}};Ae.isValidElement=Xg;Ae.lazy=function(e){return{$$typeof:Vj,_payload:{_status:-1,_result:e},_init:Kj}};Ae.memo=function(e,t){return{$$typeof:Uj,type:e,compare:t===void 0?null:t}};Ae.startTransition=function(e){var t=zl.transition;zl.transition={};try{e()}finally{zl.transition=t}};Ae.unstable_act=wS;Ae.useCallback=function(e,t){return Vt.current.useCallback(e,t)};Ae.useContext=function(e){return Vt.current.useContext(e)};Ae.useDebugValue=function(){};Ae.useDeferredValue=function(e){return Vt.current.useDeferredValue(e)};Ae.useEffect=function(e,t){return Vt.current.useEffect(e,t)};Ae.useId=function(){return Vt.current.useId()};Ae.useImperativeHandle=function(e,t,r){return Vt.current.useImperativeHandle(e,t,r)};Ae.useInsertionEffect=function(e,t){return Vt.current.useInsertionEffect(e,t)};Ae.useLayoutEffect=function(e,t){return Vt.current.useLayoutEffect(e,t)};Ae.useMemo=function(e,t){return Vt.current.useMemo(e,t)};Ae.useReducer=function(e,t,r){return Vt.current.useReducer(e,t,r)};Ae.useRef=function(e){return Vt.current.useRef(e)};Ae.useState=function(e){return Vt.current.useState(e)};Ae.useSyncExternalStore=function(e,t,r){return Vt.current.useSyncExternalStore(e,t,r)};Ae.useTransition=function(){return Vt.current.useTransition()};Ae.version="18.3.1";mS.exports=Ae;var O=mS.exports;const le=gt(O);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qj=O,Yj=Symbol.for("react.element"),Zj=Symbol.for("react.fragment"),Xj=Object.prototype.hasOwnProperty,e8=Qj.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t8={key:!0,ref:!0,__self:!0,__source:!0};function jS(e,t,r){var n,o={},i=null,a=null;r!==void 0&&(i=""+r),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(a=t.ref);for(n in t)Xj.call(t,n)&&!t8.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps,t)o[n]===void 0&&(o[n]=t[n]);return{$$typeof:Yj,type:e,key:i,ref:a,props:o,_owner:e8.current}}su.Fragment=Zj;su.jsx=jS;su.jsxs=jS;pS.exports=su;var l=pS.exports,TS={exports:{}},xr={},OS={exports:{}},IS={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,_){var B=R.length;R.push(_);e:for(;0<B;){var q=B-1>>>1,H=R[q];if(0<o(H,_))R[q]=_,R[B]=H,B=q;else break e}}function r(R){return R.length===0?null:R[0]}function n(R){if(R.length===0)return null;var _=R[0],B=R.pop();if(B!==_){R[0]=B;e:for(var q=0,H=R.length,Q=H>>>1;q<Q;){var U=2*(q+1)-1,G=R[U],$=U+1,w=R[$];if(0>o(G,B))$<H&&0>o(w,G)?(R[q]=w,R[$]=B,q=$):(R[q]=G,R[U]=B,q=U);else if($<H&&0>o(w,B))R[q]=w,R[$]=B,q=$;else break e}}return _}function o(R,_){var B=R.sortIndex-_.sortIndex;return B!==0?B:R.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var a=Date,s=a.now();e.unstable_now=function(){return a.now()-s}}var c=[],u=[],f=1,d=null,g=3,p=!1,m=!1,h=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function S(R){for(var _=r(u);_!==null;){if(_.callback===null)n(u);else if(_.startTime<=R)n(u),_.sortIndex=_.expirationTime,t(c,_);else break;_=r(u)}}function I(R){if(h=!1,S(R),!m)if(r(c)!==null)m=!0,K(k);else{var _=r(u);_!==null&&M(I,_.startTime-R)}}function k(R,_){m=!1,h&&(h=!1,v(N),N=-1),p=!0;var B=g;try{for(S(_),d=r(c);d!==null&&(!(d.expirationTime>_)||R&&!V());){var q=d.callback;if(typeof q=="function"){d.callback=null,g=d.priorityLevel;var H=q(d.expirationTime<=_);_=e.unstable_now(),typeof H=="function"?d.callback=H:d===r(c)&&n(c),S(_)}else n(c);d=r(c)}if(d!==null)var Q=!0;else{var U=r(u);U!==null&&M(I,U.startTime-_),Q=!1}return Q}finally{d=null,g=B,p=!1}}var T=!1,P=null,N=-1,j=5,F=-1;function V(){return!(e.unstable_now()-F<j)}function Z(){if(P!==null){var R=e.unstable_now();F=R;var _=!0;try{_=P(!0,R)}finally{_?Y():(T=!1,P=null)}}else T=!1}var Y;if(typeof x=="function")Y=function(){x(Z)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,J=z.port2;z.port1.onmessage=Z,Y=function(){J.postMessage(null)}}else Y=function(){y(Z,0)};function K(R){P=R,T||(T=!0,Y())}function M(R,_){N=y(function(){R(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,K(k))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return r(c)},e.unstable_next=function(R){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var B=g;g=_;try{return R()}finally{g=B}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,_){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var B=g;g=R;try{return _()}finally{g=B}},e.unstable_scheduleCallback=function(R,_,B){var q=e.unstable_now();switch(typeof B=="object"&&B!==null?(B=B.delay,B=typeof B=="number"&&0<B?q+B:q):B=q,R){case 1:var H=-1;break;case 2:H=250;break;case 5:H=1073741823;break;case 4:H=1e4;break;default:H=5e3}return H=B+H,R={id:f++,callback:_,priorityLevel:R,startTime:B,expirationTime:H,sortIndex:-1},B>q?(R.sortIndex=B,t(u,R),r(c)===null&&R===r(u)&&(h?(v(N),N=-1):h=!0,M(I,B-q))):(R.sortIndex=H,t(c,R),m||p||(m=!0,K(k))),R},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(R){var _=g;return function(){var B=g;g=_;try{return R.apply(this,arguments)}finally{g=B}}}})(IS);OS.exports=IS;var r8=OS.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n8=O,vr=r8;function de(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ES=new Set,rs={};function Ko(e,t){Pi(e,t),Pi(e+"Capture",t)}function Pi(e,t){for(rs[e]=t,e=0;e<t.length;e++)ES.add(t[e])}var En=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wf=Object.prototype.hasOwnProperty,o8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ov={},iv={};function i8(e){return wf.call(iv,e)?!0:wf.call(ov,e)?!1:o8.test(e)?iv[e]=!0:(ov[e]=!0,!1)}function a8(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function s8(e,t,r,n){if(t===null||typeof t>"u"||a8(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Wt(e,t,r,n,o,i,a){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}var $t={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){$t[e]=new Wt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];$t[t]=new Wt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){$t[e]=new Wt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){$t[e]=new Wt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){$t[e]=new Wt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){$t[e]=new Wt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){$t[e]=new Wt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){$t[e]=new Wt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){$t[e]=new Wt(e,5,!1,e.toLowerCase(),null,!1,!1)});var ep=/[\-:]([a-z])/g;function tp(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(ep,tp);$t[t]=new Wt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(ep,tp);$t[t]=new Wt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(ep,tp);$t[t]=new Wt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){$t[e]=new Wt(e,1,!1,e.toLowerCase(),null,!1,!1)});$t.xlinkHref=new Wt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){$t[e]=new Wt(e,1,!1,e.toLowerCase(),null,!0,!0)});function rp(e,t,r,n){var o=$t.hasOwnProperty(t)?$t[t]:null;(o!==null?o.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(s8(t,r,o,n)&&(r=null),n||o===null?i8(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):o.mustUseProperty?e[o.propertyName]=r===null?o.type===3?!1:"":r:(t=o.attributeName,n=o.attributeNamespace,r===null?e.removeAttribute(t):(o=o.type,r=o===3||o===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var An=n8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,tl=Symbol.for("react.element"),ai=Symbol.for("react.portal"),si=Symbol.for("react.fragment"),np=Symbol.for("react.strict_mode"),jf=Symbol.for("react.profiler"),PS=Symbol.for("react.provider"),$S=Symbol.for("react.context"),op=Symbol.for("react.forward_ref"),Tf=Symbol.for("react.suspense"),Of=Symbol.for("react.suspense_list"),ip=Symbol.for("react.memo"),_n=Symbol.for("react.lazy"),kS=Symbol.for("react.offscreen"),av=Symbol.iterator;function ma(e){return e===null||typeof e!="object"?null:(e=av&&e[av]||e["@@iterator"],typeof e=="function"?e:null)}var it=Object.assign,xd;function ka(e){if(xd===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);xd=t&&t[1]||""}return`
`+xd+e}var yd=!1;function bd(e,t){if(!e||yd)return"";yd=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var n=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){n=u}e.call(t.prototype)}else{try{throw Error()}catch(u){n=u}e()}}catch(u){if(u&&n&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=n.stack.split(`
`),a=o.length-1,s=i.length-1;1<=a&&0<=s&&o[a]!==i[s];)s--;for(;1<=a&&0<=s;a--,s--)if(o[a]!==i[s]){if(a!==1||s!==1)do if(a--,s--,0>s||o[a]!==i[s]){var c=`
`+o[a].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=a&&0<=s);break}}}finally{yd=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?ka(e):""}function l8(e){switch(e.tag){case 5:return ka(e.type);case 16:return ka("Lazy");case 13:return ka("Suspense");case 19:return ka("SuspenseList");case 0:case 2:case 15:return e=bd(e.type,!1),e;case 11:return e=bd(e.type.render,!1),e;case 1:return e=bd(e.type,!0),e;default:return""}}function If(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case si:return"Fragment";case ai:return"Portal";case jf:return"Profiler";case np:return"StrictMode";case Tf:return"Suspense";case Of:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case $S:return(e.displayName||"Context")+".Consumer";case PS:return(e._context.displayName||"Context")+".Provider";case op:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ip:return t=e.displayName||null,t!==null?t:If(e.type)||"Memo";case _n:t=e._payload,e=e._init;try{return If(e(t))}catch{}}return null}function c8(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return If(t);case 8:return t===np?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function io(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function NS(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function u8(e){var t=NS(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r<"u"&&typeof r.get=="function"&&typeof r.set=="function"){var o=r.get,i=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(a){n=""+a,i.call(this,a)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(a){n=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function rl(e){e._valueTracker||(e._valueTracker=u8(e))}function MS(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=NS(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function ic(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Ef(e,t){var r=t.checked;return it({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r??e._wrapperState.initialChecked})}function sv(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=io(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function AS(e,t){t=t.checked,t!=null&&rp(e,"checked",t,!1)}function Pf(e,t){AS(e,t);var r=io(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?$f(e,t.type,r):t.hasOwnProperty("defaultValue")&&$f(e,t.type,io(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function lv(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function $f(e,t,r){(t!=="number"||ic(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var Na=Array.isArray;function Si(e,t,r,n){if(e=e.options,t){t={};for(var o=0;o<r.length;o++)t["$"+r[o]]=!0;for(r=0;r<e.length;r++)o=t.hasOwnProperty("$"+e[r].value),e[r].selected!==o&&(e[r].selected=o),o&&n&&(e[r].defaultSelected=!0)}else{for(r=""+io(r),t=null,o=0;o<e.length;o++){if(e[o].value===r){e[o].selected=!0,n&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function kf(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(de(91));return it({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function cv(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(de(92));if(Na(r)){if(1<r.length)throw Error(de(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:io(r)}}function DS(e,t){var r=io(t.value),n=io(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function uv(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function RS(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Nf(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?RS(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var nl,LS=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,r,n,o){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(nl=nl||document.createElement("div"),nl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=nl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ns(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var La={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d8=["Webkit","ms","Moz","O"];Object.keys(La).forEach(function(e){d8.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),La[t]=La[e]})});function _S(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||La.hasOwnProperty(e)&&La[e]?(""+t).trim():t+"px"}function FS(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,o=_S(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,o):e[r]=o}}var f8=it({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Mf(e,t){if(t){if(f8[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(de(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(de(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(de(61))}if(t.style!=null&&typeof t.style!="object")throw Error(de(62))}}function Af(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Df=null;function ap(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Rf=null,Ci=null,wi=null;function dv(e){if(e=Ns(e)){if(typeof Rf!="function")throw Error(de(280));var t=e.stateNode;t&&(t=fu(t),Rf(e.stateNode,e.type,t))}}function BS(e){Ci?wi?wi.push(e):wi=[e]:Ci=e}function zS(){if(Ci){var e=Ci,t=wi;if(wi=Ci=null,dv(e),t)for(e=0;e<t.length;e++)dv(t[e])}}function HS(e,t){return e(t)}function US(){}var Sd=!1;function VS(e,t,r){if(Sd)return e(t,r);Sd=!0;try{return HS(e,t,r)}finally{Sd=!1,(Ci!==null||wi!==null)&&(US(),zS())}}function os(e,t){var r=e.stateNode;if(r===null)return null;var n=fu(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(de(231,t,typeof r));return r}var Lf=!1;if(En)try{var ha={};Object.defineProperty(ha,"passive",{get:function(){Lf=!0}}),window.addEventListener("test",ha,ha),window.removeEventListener("test",ha,ha)}catch{Lf=!1}function g8(e,t,r,n,o,i,a,s,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(r,u)}catch(f){this.onError(f)}}var _a=!1,ac=null,sc=!1,_f=null,p8={onError:function(e){_a=!0,ac=e}};function m8(e,t,r,n,o,i,a,s,c){_a=!1,ac=null,g8.apply(p8,arguments)}function h8(e,t,r,n,o,i,a,s,c){if(m8.apply(this,arguments),_a){if(_a){var u=ac;_a=!1,ac=null}else throw Error(de(198));sc||(sc=!0,_f=u)}}function Jo(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function WS(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function fv(e){if(Jo(e)!==e)throw Error(de(188))}function v8(e){var t=e.alternate;if(!t){if(t=Jo(e),t===null)throw Error(de(188));return t!==e?null:e}for(var r=e,n=t;;){var o=r.return;if(o===null)break;var i=o.alternate;if(i===null){if(n=o.return,n!==null){r=n;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===r)return fv(o),e;if(i===n)return fv(o),t;i=i.sibling}throw Error(de(188))}if(r.return!==n.return)r=o,n=i;else{for(var a=!1,s=o.child;s;){if(s===r){a=!0,r=o,n=i;break}if(s===n){a=!0,n=o,r=i;break}s=s.sibling}if(!a){for(s=i.child;s;){if(s===r){a=!0,r=i,n=o;break}if(s===n){a=!0,n=i,r=o;break}s=s.sibling}if(!a)throw Error(de(189))}}if(r.alternate!==n)throw Error(de(190))}if(r.tag!==3)throw Error(de(188));return r.stateNode.current===r?e:t}function qS(e){return e=v8(e),e!==null?GS(e):null}function GS(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=GS(e);if(t!==null)return t;e=e.sibling}return null}var KS=vr.unstable_scheduleCallback,gv=vr.unstable_cancelCallback,x8=vr.unstable_shouldYield,y8=vr.unstable_requestPaint,lt=vr.unstable_now,b8=vr.unstable_getCurrentPriorityLevel,sp=vr.unstable_ImmediatePriority,JS=vr.unstable_UserBlockingPriority,lc=vr.unstable_NormalPriority,S8=vr.unstable_LowPriority,QS=vr.unstable_IdlePriority,lu=null,xn=null;function C8(e){if(xn&&typeof xn.onCommitFiberRoot=="function")try{xn.onCommitFiberRoot(lu,e,void 0,(e.current.flags&128)===128)}catch{}}var Gr=Math.clz32?Math.clz32:T8,w8=Math.log,j8=Math.LN2;function T8(e){return e>>>=0,e===0?32:31-(w8(e)/j8|0)|0}var ol=64,il=4194304;function Ma(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function cc(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,o=e.suspendedLanes,i=e.pingedLanes,a=r&268435455;if(a!==0){var s=a&~o;s!==0?n=Ma(s):(i&=a,i!==0&&(n=Ma(i)))}else a=r&~o,a!==0?n=Ma(a):i!==0&&(n=Ma(i));if(n===0)return 0;if(t!==0&&t!==n&&!(t&o)&&(o=n&-n,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(n&4&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Gr(t),o=1<<r,n|=e[r],t&=~o;return n}function O8(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function I8(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var a=31-Gr(i),s=1<<a,c=o[a];c===-1?(!(s&r)||s&n)&&(o[a]=O8(s,t)):c<=t&&(e.expiredLanes|=s),i&=~s}}function Ff(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function YS(){var e=ol;return ol<<=1,!(ol&4194240)&&(ol=64),e}function Cd(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function $s(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gr(t),e[t]=r}function E8(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var o=31-Gr(r),i=1<<o;t[o]=0,n[o]=-1,e[o]=-1,r&=~i}}function lp(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Gr(r),o=1<<n;o&t|e[n]&t&&(e[n]|=t),r&=~o}}var He=0;function ZS(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var XS,cp,e2,t2,r2,Bf=!1,al=[],qn=null,Gn=null,Kn=null,is=new Map,as=new Map,Bn=[],P8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function pv(e,t){switch(e){case"focusin":case"focusout":qn=null;break;case"dragenter":case"dragleave":Gn=null;break;case"mouseover":case"mouseout":Kn=null;break;case"pointerover":case"pointerout":is.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":as.delete(t.pointerId)}}function va(e,t,r,n,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Ns(t),t!==null&&cp(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function $8(e,t,r,n,o){switch(t){case"focusin":return qn=va(qn,e,t,r,n,o),!0;case"dragenter":return Gn=va(Gn,e,t,r,n,o),!0;case"mouseover":return Kn=va(Kn,e,t,r,n,o),!0;case"pointerover":var i=o.pointerId;return is.set(i,va(is.get(i)||null,e,t,r,n,o)),!0;case"gotpointercapture":return i=o.pointerId,as.set(i,va(as.get(i)||null,e,t,r,n,o)),!0}return!1}function n2(e){var t=Io(e.target);if(t!==null){var r=Jo(t);if(r!==null){if(t=r.tag,t===13){if(t=WS(r),t!==null){e.blockedOn=t,r2(e.priority,function(){e2(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hl(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=zf(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Df=n,r.target.dispatchEvent(n),Df=null}else return t=Ns(r),t!==null&&cp(t),e.blockedOn=r,!1;t.shift()}return!0}function mv(e,t,r){Hl(e)&&r.delete(t)}function k8(){Bf=!1,qn!==null&&Hl(qn)&&(qn=null),Gn!==null&&Hl(Gn)&&(Gn=null),Kn!==null&&Hl(Kn)&&(Kn=null),is.forEach(mv),as.forEach(mv)}function xa(e,t){e.blockedOn===t&&(e.blockedOn=null,Bf||(Bf=!0,vr.unstable_scheduleCallback(vr.unstable_NormalPriority,k8)))}function ss(e){function t(o){return xa(o,e)}if(0<al.length){xa(al[0],e);for(var r=1;r<al.length;r++){var n=al[r];n.blockedOn===e&&(n.blockedOn=null)}}for(qn!==null&&xa(qn,e),Gn!==null&&xa(Gn,e),Kn!==null&&xa(Kn,e),is.forEach(t),as.forEach(t),r=0;r<Bn.length;r++)n=Bn[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<Bn.length&&(r=Bn[0],r.blockedOn===null);)n2(r),r.blockedOn===null&&Bn.shift()}var ji=An.ReactCurrentBatchConfig,uc=!0;function N8(e,t,r,n){var o=He,i=ji.transition;ji.transition=null;try{He=1,up(e,t,r,n)}finally{He=o,ji.transition=i}}function M8(e,t,r,n){var o=He,i=ji.transition;ji.transition=null;try{He=4,up(e,t,r,n)}finally{He=o,ji.transition=i}}function up(e,t,r,n){if(uc){var o=zf(e,t,r,n);if(o===null)Nd(e,t,n,dc,r),pv(e,n);else if($8(o,e,t,r,n))n.stopPropagation();else if(pv(e,n),t&4&&-1<P8.indexOf(e)){for(;o!==null;){var i=Ns(o);if(i!==null&&XS(i),i=zf(e,t,r,n),i===null&&Nd(e,t,n,dc,r),i===o)break;o=i}o!==null&&n.stopPropagation()}else Nd(e,t,n,null,r)}}var dc=null;function zf(e,t,r,n){if(dc=null,e=ap(n),e=Io(e),e!==null)if(t=Jo(e),t===null)e=null;else if(r=t.tag,r===13){if(e=WS(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return dc=e,null}function o2(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(b8()){case sp:return 1;case JS:return 4;case lc:case S8:return 16;case QS:return 536870912;default:return 16}default:return 16}}var Hn=null,dp=null,Ul=null;function i2(){if(Ul)return Ul;var e,t=dp,r=t.length,n,o="value"in Hn?Hn.value:Hn.textContent,i=o.length;for(e=0;e<r&&t[e]===o[e];e++);var a=r-e;for(n=1;n<=a&&t[r-n]===o[i-n];n++);return Ul=o.slice(e,1<n?1-n:void 0)}function Vl(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function sl(){return!0}function hv(){return!1}function yr(e){function t(r,n,o,i,a){this._reactName=r,this._targetInst=o,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(r=e[s],this[s]=r?r(i):i[s]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?sl:hv,this.isPropagationStopped=hv,this}return it(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=sl)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=sl)},persist:function(){},isPersistent:sl}),t}var Wi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fp=yr(Wi),ks=it({},Wi,{view:0,detail:0}),A8=yr(ks),wd,jd,ya,cu=it({},ks,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gp,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ya&&(ya&&e.type==="mousemove"?(wd=e.screenX-ya.screenX,jd=e.screenY-ya.screenY):jd=wd=0,ya=e),wd)},movementY:function(e){return"movementY"in e?e.movementY:jd}}),vv=yr(cu),D8=it({},cu,{dataTransfer:0}),R8=yr(D8),L8=it({},ks,{relatedTarget:0}),Td=yr(L8),_8=it({},Wi,{animationName:0,elapsedTime:0,pseudoElement:0}),F8=yr(_8),B8=it({},Wi,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),z8=yr(B8),H8=it({},Wi,{data:0}),xv=yr(H8),U8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},V8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},W8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function q8(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=W8[e])?!!t[e]:!1}function gp(){return q8}var G8=it({},ks,{key:function(e){if(e.key){var t=U8[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Vl(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?V8[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gp,charCode:function(e){return e.type==="keypress"?Vl(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Vl(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),K8=yr(G8),J8=it({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yv=yr(J8),Q8=it({},ks,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gp}),Y8=yr(Q8),Z8=it({},Wi,{propertyName:0,elapsedTime:0,pseudoElement:0}),X8=yr(Z8),e4=it({},cu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),t4=yr(e4),r4=[9,13,27,32],pp=En&&"CompositionEvent"in window,Fa=null;En&&"documentMode"in document&&(Fa=document.documentMode);var n4=En&&"TextEvent"in window&&!Fa,a2=En&&(!pp||Fa&&8<Fa&&11>=Fa),bv=" ",Sv=!1;function s2(e,t){switch(e){case"keyup":return r4.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l2(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var li=!1;function o4(e,t){switch(e){case"compositionend":return l2(t);case"keypress":return t.which!==32?null:(Sv=!0,bv);case"textInput":return e=t.data,e===bv&&Sv?null:e;default:return null}}function i4(e,t){if(li)return e==="compositionend"||!pp&&s2(e,t)?(e=i2(),Ul=dp=Hn=null,li=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return a2&&t.locale!=="ko"?null:t.data;default:return null}}var a4={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cv(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!a4[e.type]:t==="textarea"}function c2(e,t,r,n){BS(n),t=fc(t,"onChange"),0<t.length&&(r=new fp("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var Ba=null,ls=null;function s4(e){b2(e,0)}function uu(e){var t=di(e);if(MS(t))return e}function l4(e,t){if(e==="change")return t}var u2=!1;if(En){var Od;if(En){var Id="oninput"in document;if(!Id){var wv=document.createElement("div");wv.setAttribute("oninput","return;"),Id=typeof wv.oninput=="function"}Od=Id}else Od=!1;u2=Od&&(!document.documentMode||9<document.documentMode)}function jv(){Ba&&(Ba.detachEvent("onpropertychange",d2),ls=Ba=null)}function d2(e){if(e.propertyName==="value"&&uu(ls)){var t=[];c2(t,ls,e,ap(e)),VS(s4,t)}}function c4(e,t,r){e==="focusin"?(jv(),Ba=t,ls=r,Ba.attachEvent("onpropertychange",d2)):e==="focusout"&&jv()}function u4(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return uu(ls)}function d4(e,t){if(e==="click")return uu(t)}function f4(e,t){if(e==="input"||e==="change")return uu(t)}function g4(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Qr=typeof Object.is=="function"?Object.is:g4;function cs(e,t){if(Qr(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var o=r[n];if(!wf.call(t,o)||!Qr(e[o],t[o]))return!1}return!0}function Tv(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ov(e,t){var r=Tv(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Tv(r)}}function f2(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?f2(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function g2(){for(var e=window,t=ic();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=ic(e.document)}return t}function mp(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function p4(e){var t=g2(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&f2(r.ownerDocument.documentElement,r)){if(n!==null&&mp(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=r.textContent.length,i=Math.min(n.start,o);n=n.end===void 0?i:Math.min(n.end,o),!e.extend&&i>n&&(o=n,n=i,i=o),o=Ov(r,i);var a=Ov(r,n);o&&a&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==a.node||e.focusOffset!==a.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>n?(e.addRange(t),e.extend(a.node,a.offset)):(t.setEnd(a.node,a.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var m4=En&&"documentMode"in document&&11>=document.documentMode,ci=null,Hf=null,za=null,Uf=!1;function Iv(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;Uf||ci==null||ci!==ic(n)||(n=ci,"selectionStart"in n&&mp(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),za&&cs(za,n)||(za=n,n=fc(Hf,"onSelect"),0<n.length&&(t=new fp("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=ci)))}function ll(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var ui={animationend:ll("Animation","AnimationEnd"),animationiteration:ll("Animation","AnimationIteration"),animationstart:ll("Animation","AnimationStart"),transitionend:ll("Transition","TransitionEnd")},Ed={},p2={};En&&(p2=document.createElement("div").style,"AnimationEvent"in window||(delete ui.animationend.animation,delete ui.animationiteration.animation,delete ui.animationstart.animation),"TransitionEvent"in window||delete ui.transitionend.transition);function du(e){if(Ed[e])return Ed[e];if(!ui[e])return e;var t=ui[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in p2)return Ed[e]=t[r];return e}var m2=du("animationend"),h2=du("animationiteration"),v2=du("animationstart"),x2=du("transitionend"),y2=new Map,Ev="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function co(e,t){y2.set(e,t),Ko(t,[e])}for(var Pd=0;Pd<Ev.length;Pd++){var $d=Ev[Pd],h4=$d.toLowerCase(),v4=$d[0].toUpperCase()+$d.slice(1);co(h4,"on"+v4)}co(m2,"onAnimationEnd");co(h2,"onAnimationIteration");co(v2,"onAnimationStart");co("dblclick","onDoubleClick");co("focusin","onFocus");co("focusout","onBlur");co(x2,"onTransitionEnd");Pi("onMouseEnter",["mouseout","mouseover"]);Pi("onMouseLeave",["mouseout","mouseover"]);Pi("onPointerEnter",["pointerout","pointerover"]);Pi("onPointerLeave",["pointerout","pointerover"]);Ko("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ko("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ko("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ko("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ko("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ko("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),x4=new Set("cancel close invalid load scroll toggle".split(" ").concat(Aa));function Pv(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,h8(n,t,void 0,e),e.currentTarget=null}function b2(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],o=n.event;n=n.listeners;e:{var i=void 0;if(t)for(var a=n.length-1;0<=a;a--){var s=n[a],c=s.instance,u=s.currentTarget;if(s=s.listener,c!==i&&o.isPropagationStopped())break e;Pv(o,s,u),i=c}else for(a=0;a<n.length;a++){if(s=n[a],c=s.instance,u=s.currentTarget,s=s.listener,c!==i&&o.isPropagationStopped())break e;Pv(o,s,u),i=c}}}if(sc)throw e=_f,sc=!1,_f=null,e}function Qe(e,t){var r=t[Kf];r===void 0&&(r=t[Kf]=new Set);var n=e+"__bubble";r.has(n)||(S2(t,e,2,!1),r.add(n))}function kd(e,t,r){var n=0;t&&(n|=4),S2(r,e,n,t)}var cl="_reactListening"+Math.random().toString(36).slice(2);function us(e){if(!e[cl]){e[cl]=!0,ES.forEach(function(r){r!=="selectionchange"&&(x4.has(r)||kd(r,!1,e),kd(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[cl]||(t[cl]=!0,kd("selectionchange",!1,t))}}function S2(e,t,r,n){switch(o2(t)){case 1:var o=N8;break;case 4:o=M8;break;default:o=up}r=o.bind(null,t,r,e),o=void 0,!Lf||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),n?o!==void 0?e.addEventListener(t,r,{capture:!0,passive:o}):e.addEventListener(t,r,!0):o!==void 0?e.addEventListener(t,r,{passive:o}):e.addEventListener(t,r,!1)}function Nd(e,t,r,n,o){var i=n;if(!(t&1)&&!(t&2)&&n!==null)e:for(;;){if(n===null)return;var a=n.tag;if(a===3||a===4){var s=n.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(a===4)for(a=n.return;a!==null;){var c=a.tag;if((c===3||c===4)&&(c=a.stateNode.containerInfo,c===o||c.nodeType===8&&c.parentNode===o))return;a=a.return}for(;s!==null;){if(a=Io(s),a===null)return;if(c=a.tag,c===5||c===6){n=i=a;continue e}s=s.parentNode}}n=n.return}VS(function(){var u=i,f=ap(r),d=[];e:{var g=y2.get(e);if(g!==void 0){var p=fp,m=e;switch(e){case"keypress":if(Vl(r)===0)break e;case"keydown":case"keyup":p=K8;break;case"focusin":m="focus",p=Td;break;case"focusout":m="blur",p=Td;break;case"beforeblur":case"afterblur":p=Td;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=vv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=R8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Y8;break;case m2:case h2:case v2:p=F8;break;case x2:p=X8;break;case"scroll":p=A8;break;case"wheel":p=t4;break;case"copy":case"cut":case"paste":p=z8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=yv}var h=(t&4)!==0,y=!h&&e==="scroll",v=h?g!==null?g+"Capture":null:g;h=[];for(var x=u,S;x!==null;){S=x;var I=S.stateNode;if(S.tag===5&&I!==null&&(S=I,v!==null&&(I=os(x,v),I!=null&&h.push(ds(x,I,S)))),y)break;x=x.return}0<h.length&&(g=new p(g,m,null,r,f),d.push({event:g,listeners:h}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",g&&r!==Df&&(m=r.relatedTarget||r.fromElement)&&(Io(m)||m[Pn]))break e;if((p||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,p?(m=r.relatedTarget||r.toElement,p=u,m=m?Io(m):null,m!==null&&(y=Jo(m),m!==y||m.tag!==5&&m.tag!==6)&&(m=null)):(p=null,m=u),p!==m)){if(h=vv,I="onMouseLeave",v="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(h=yv,I="onPointerLeave",v="onPointerEnter",x="pointer"),y=p==null?g:di(p),S=m==null?g:di(m),g=new h(I,x+"leave",p,r,f),g.target=y,g.relatedTarget=S,I=null,Io(f)===u&&(h=new h(v,x+"enter",m,r,f),h.target=S,h.relatedTarget=y,I=h),y=I,p&&m)t:{for(h=p,v=m,x=0,S=h;S;S=ei(S))x++;for(S=0,I=v;I;I=ei(I))S++;for(;0<x-S;)h=ei(h),x--;for(;0<S-x;)v=ei(v),S--;for(;x--;){if(h===v||v!==null&&h===v.alternate)break t;h=ei(h),v=ei(v)}h=null}else h=null;p!==null&&$v(d,g,p,h,!1),m!==null&&y!==null&&$v(d,y,m,h,!0)}}e:{if(g=u?di(u):window,p=g.nodeName&&g.nodeName.toLowerCase(),p==="select"||p==="input"&&g.type==="file")var k=l4;else if(Cv(g))if(u2)k=f4;else{k=u4;var T=c4}else(p=g.nodeName)&&p.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(k=d4);if(k&&(k=k(e,u))){c2(d,k,r,f);break e}T&&T(e,g,u),e==="focusout"&&(T=g._wrapperState)&&T.controlled&&g.type==="number"&&$f(g,"number",g.value)}switch(T=u?di(u):window,e){case"focusin":(Cv(T)||T.contentEditable==="true")&&(ci=T,Hf=u,za=null);break;case"focusout":za=Hf=ci=null;break;case"mousedown":Uf=!0;break;case"contextmenu":case"mouseup":case"dragend":Uf=!1,Iv(d,r,f);break;case"selectionchange":if(m4)break;case"keydown":case"keyup":Iv(d,r,f)}var P;if(pp)e:{switch(e){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else li?s2(e,r)&&(N="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(N="onCompositionStart");N&&(a2&&r.locale!=="ko"&&(li||N!=="onCompositionStart"?N==="onCompositionEnd"&&li&&(P=i2()):(Hn=f,dp="value"in Hn?Hn.value:Hn.textContent,li=!0)),T=fc(u,N),0<T.length&&(N=new xv(N,e,null,r,f),d.push({event:N,listeners:T}),P?N.data=P:(P=l2(r),P!==null&&(N.data=P)))),(P=n4?o4(e,r):i4(e,r))&&(u=fc(u,"onBeforeInput"),0<u.length&&(f=new xv("onBeforeInput","beforeinput",null,r,f),d.push({event:f,listeners:u}),f.data=P))}b2(d,t)})}function ds(e,t,r){return{instance:e,listener:t,currentTarget:r}}function fc(e,t){for(var r=t+"Capture",n=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=os(e,r),i!=null&&n.unshift(ds(e,i,o)),i=os(e,t),i!=null&&n.push(ds(e,i,o))),e=e.return}return n}function ei(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function $v(e,t,r,n,o){for(var i=t._reactName,a=[];r!==null&&r!==n;){var s=r,c=s.alternate,u=s.stateNode;if(c!==null&&c===n)break;s.tag===5&&u!==null&&(s=u,o?(c=os(r,i),c!=null&&a.unshift(ds(r,c,s))):o||(c=os(r,i),c!=null&&a.push(ds(r,c,s)))),r=r.return}a.length!==0&&e.push({event:t,listeners:a})}var y4=/\r\n?/g,b4=/\u0000|\uFFFD/g;function kv(e){return(typeof e=="string"?e:""+e).replace(y4,`
`).replace(b4,"")}function ul(e,t,r){if(t=kv(t),kv(e)!==t&&r)throw Error(de(425))}function gc(){}var Vf=null,Wf=null;function qf(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Gf=typeof setTimeout=="function"?setTimeout:void 0,S4=typeof clearTimeout=="function"?clearTimeout:void 0,Nv=typeof Promise=="function"?Promise:void 0,C4=typeof queueMicrotask=="function"?queueMicrotask:typeof Nv<"u"?function(e){return Nv.resolve(null).then(e).catch(w4)}:Gf;function w4(e){setTimeout(function(){throw e})}function Md(e,t){var r=t,n=0;do{var o=r.nextSibling;if(e.removeChild(r),o&&o.nodeType===8)if(r=o.data,r==="/$"){if(n===0){e.removeChild(o),ss(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=o}while(r);ss(t)}function Jn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Mv(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var qi=Math.random().toString(36).slice(2),mn="__reactFiber$"+qi,fs="__reactProps$"+qi,Pn="__reactContainer$"+qi,Kf="__reactEvents$"+qi,j4="__reactListeners$"+qi,T4="__reactHandles$"+qi;function Io(e){var t=e[mn];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Pn]||r[mn]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Mv(e);e!==null;){if(r=e[mn])return r;e=Mv(e)}return t}e=r,r=e.parentNode}return null}function Ns(e){return e=e[mn]||e[Pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function di(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(de(33))}function fu(e){return e[fs]||null}var Jf=[],fi=-1;function uo(e){return{current:e}}function Ze(e){0>fi||(e.current=Jf[fi],Jf[fi]=null,fi--)}function Je(e,t){fi++,Jf[fi]=e.current,e.current=t}var ao={},Ft=uo(ao),Xt=uo(!1),Lo=ao;function $i(e,t){var r=e.type.contextTypes;if(!r)return ao;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in r)o[i]=t[i];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function er(e){return e=e.childContextTypes,e!=null}function pc(){Ze(Xt),Ze(Ft)}function Av(e,t,r){if(Ft.current!==ao)throw Error(de(168));Je(Ft,t),Je(Xt,r)}function C2(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var o in n)if(!(o in t))throw Error(de(108,c8(e)||"Unknown",o));return it({},r,n)}function mc(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||ao,Lo=Ft.current,Je(Ft,e),Je(Xt,Xt.current),!0}function Dv(e,t,r){var n=e.stateNode;if(!n)throw Error(de(169));r?(e=C2(e,t,Lo),n.__reactInternalMemoizedMergedChildContext=e,Ze(Xt),Ze(Ft),Je(Ft,e)):Ze(Xt),Je(Xt,r)}var Cn=null,gu=!1,Ad=!1;function w2(e){Cn===null?Cn=[e]:Cn.push(e)}function O4(e){gu=!0,w2(e)}function fo(){if(!Ad&&Cn!==null){Ad=!0;var e=0,t=He;try{var r=Cn;for(He=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Cn=null,gu=!1}catch(o){throw Cn!==null&&(Cn=Cn.slice(e+1)),KS(sp,fo),o}finally{He=t,Ad=!1}}return null}var gi=[],pi=0,hc=null,vc=0,Tr=[],Or=0,_o=null,wn=1,jn="";function So(e,t){gi[pi++]=vc,gi[pi++]=hc,hc=e,vc=t}function j2(e,t,r){Tr[Or++]=wn,Tr[Or++]=jn,Tr[Or++]=_o,_o=e;var n=wn;e=jn;var o=32-Gr(n)-1;n&=~(1<<o),r+=1;var i=32-Gr(t)+o;if(30<i){var a=o-o%5;i=(n&(1<<a)-1).toString(32),n>>=a,o-=a,wn=1<<32-Gr(t)+o|r<<o|n,jn=i+e}else wn=1<<i|r<<o|n,jn=e}function hp(e){e.return!==null&&(So(e,1),j2(e,1,0))}function vp(e){for(;e===hc;)hc=gi[--pi],gi[pi]=null,vc=gi[--pi],gi[pi]=null;for(;e===_o;)_o=Tr[--Or],Tr[Or]=null,jn=Tr[--Or],Tr[Or]=null,wn=Tr[--Or],Tr[Or]=null}var gr=null,cr=null,et=!1,Vr=null;function T2(e,t){var r=Er(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Rv(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,gr=e,cr=Jn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,gr=e,cr=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=_o!==null?{id:wn,overflow:jn}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=Er(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,gr=e,cr=null,!0):!1;default:return!1}}function Qf(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Yf(e){if(et){var t=cr;if(t){var r=t;if(!Rv(e,t)){if(Qf(e))throw Error(de(418));t=Jn(r.nextSibling);var n=gr;t&&Rv(e,t)?T2(n,r):(e.flags=e.flags&-4097|2,et=!1,gr=e)}}else{if(Qf(e))throw Error(de(418));e.flags=e.flags&-4097|2,et=!1,gr=e}}}function Lv(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;gr=e}function dl(e){if(e!==gr)return!1;if(!et)return Lv(e),et=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!qf(e.type,e.memoizedProps)),t&&(t=cr)){if(Qf(e))throw O2(),Error(de(418));for(;t;)T2(e,t),t=Jn(t.nextSibling)}if(Lv(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(de(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){cr=Jn(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}cr=null}}else cr=gr?Jn(e.stateNode.nextSibling):null;return!0}function O2(){for(var e=cr;e;)e=Jn(e.nextSibling)}function ki(){cr=gr=null,et=!1}function xp(e){Vr===null?Vr=[e]:Vr.push(e)}var I4=An.ReactCurrentBatchConfig;function ba(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(de(309));var n=r.stateNode}if(!n)throw Error(de(147,e));var o=n,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(a){var s=o.refs;a===null?delete s[i]:s[i]=a},t._stringRef=i,t)}if(typeof e!="string")throw Error(de(284));if(!r._owner)throw Error(de(290,e))}return e}function fl(e,t){throw e=Object.prototype.toString.call(t),Error(de(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function _v(e){var t=e._init;return t(e._payload)}function I2(e){function t(v,x){if(e){var S=v.deletions;S===null?(v.deletions=[x],v.flags|=16):S.push(x)}}function r(v,x){if(!e)return null;for(;x!==null;)t(v,x),x=x.sibling;return null}function n(v,x){for(v=new Map;x!==null;)x.key!==null?v.set(x.key,x):v.set(x.index,x),x=x.sibling;return v}function o(v,x){return v=Xn(v,x),v.index=0,v.sibling=null,v}function i(v,x,S){return v.index=S,e?(S=v.alternate,S!==null?(S=S.index,S<x?(v.flags|=2,x):S):(v.flags|=2,x)):(v.flags|=1048576,x)}function a(v){return e&&v.alternate===null&&(v.flags|=2),v}function s(v,x,S,I){return x===null||x.tag!==6?(x=zd(S,v.mode,I),x.return=v,x):(x=o(x,S),x.return=v,x)}function c(v,x,S,I){var k=S.type;return k===si?f(v,x,S.props.children,I,S.key):x!==null&&(x.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===_n&&_v(k)===x.type)?(I=o(x,S.props),I.ref=ba(v,x,S),I.return=v,I):(I=Yl(S.type,S.key,S.props,null,v.mode,I),I.ref=ba(v,x,S),I.return=v,I)}function u(v,x,S,I){return x===null||x.tag!==4||x.stateNode.containerInfo!==S.containerInfo||x.stateNode.implementation!==S.implementation?(x=Hd(S,v.mode,I),x.return=v,x):(x=o(x,S.children||[]),x.return=v,x)}function f(v,x,S,I,k){return x===null||x.tag!==7?(x=Mo(S,v.mode,I,k),x.return=v,x):(x=o(x,S),x.return=v,x)}function d(v,x,S){if(typeof x=="string"&&x!==""||typeof x=="number")return x=zd(""+x,v.mode,S),x.return=v,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case tl:return S=Yl(x.type,x.key,x.props,null,v.mode,S),S.ref=ba(v,null,x),S.return=v,S;case ai:return x=Hd(x,v.mode,S),x.return=v,x;case _n:var I=x._init;return d(v,I(x._payload),S)}if(Na(x)||ma(x))return x=Mo(x,v.mode,S,null),x.return=v,x;fl(v,x)}return null}function g(v,x,S,I){var k=x!==null?x.key:null;if(typeof S=="string"&&S!==""||typeof S=="number")return k!==null?null:s(v,x,""+S,I);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case tl:return S.key===k?c(v,x,S,I):null;case ai:return S.key===k?u(v,x,S,I):null;case _n:return k=S._init,g(v,x,k(S._payload),I)}if(Na(S)||ma(S))return k!==null?null:f(v,x,S,I,null);fl(v,S)}return null}function p(v,x,S,I,k){if(typeof I=="string"&&I!==""||typeof I=="number")return v=v.get(S)||null,s(x,v,""+I,k);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case tl:return v=v.get(I.key===null?S:I.key)||null,c(x,v,I,k);case ai:return v=v.get(I.key===null?S:I.key)||null,u(x,v,I,k);case _n:var T=I._init;return p(v,x,S,T(I._payload),k)}if(Na(I)||ma(I))return v=v.get(S)||null,f(x,v,I,k,null);fl(x,I)}return null}function m(v,x,S,I){for(var k=null,T=null,P=x,N=x=0,j=null;P!==null&&N<S.length;N++){P.index>N?(j=P,P=null):j=P.sibling;var F=g(v,P,S[N],I);if(F===null){P===null&&(P=j);break}e&&P&&F.alternate===null&&t(v,P),x=i(F,x,N),T===null?k=F:T.sibling=F,T=F,P=j}if(N===S.length)return r(v,P),et&&So(v,N),k;if(P===null){for(;N<S.length;N++)P=d(v,S[N],I),P!==null&&(x=i(P,x,N),T===null?k=P:T.sibling=P,T=P);return et&&So(v,N),k}for(P=n(v,P);N<S.length;N++)j=p(P,v,N,S[N],I),j!==null&&(e&&j.alternate!==null&&P.delete(j.key===null?N:j.key),x=i(j,x,N),T===null?k=j:T.sibling=j,T=j);return e&&P.forEach(function(V){return t(v,V)}),et&&So(v,N),k}function h(v,x,S,I){var k=ma(S);if(typeof k!="function")throw Error(de(150));if(S=k.call(S),S==null)throw Error(de(151));for(var T=k=null,P=x,N=x=0,j=null,F=S.next();P!==null&&!F.done;N++,F=S.next()){P.index>N?(j=P,P=null):j=P.sibling;var V=g(v,P,F.value,I);if(V===null){P===null&&(P=j);break}e&&P&&V.alternate===null&&t(v,P),x=i(V,x,N),T===null?k=V:T.sibling=V,T=V,P=j}if(F.done)return r(v,P),et&&So(v,N),k;if(P===null){for(;!F.done;N++,F=S.next())F=d(v,F.value,I),F!==null&&(x=i(F,x,N),T===null?k=F:T.sibling=F,T=F);return et&&So(v,N),k}for(P=n(v,P);!F.done;N++,F=S.next())F=p(P,v,N,F.value,I),F!==null&&(e&&F.alternate!==null&&P.delete(F.key===null?N:F.key),x=i(F,x,N),T===null?k=F:T.sibling=F,T=F);return e&&P.forEach(function(Z){return t(v,Z)}),et&&So(v,N),k}function y(v,x,S,I){if(typeof S=="object"&&S!==null&&S.type===si&&S.key===null&&(S=S.props.children),typeof S=="object"&&S!==null){switch(S.$$typeof){case tl:e:{for(var k=S.key,T=x;T!==null;){if(T.key===k){if(k=S.type,k===si){if(T.tag===7){r(v,T.sibling),x=o(T,S.props.children),x.return=v,v=x;break e}}else if(T.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===_n&&_v(k)===T.type){r(v,T.sibling),x=o(T,S.props),x.ref=ba(v,T,S),x.return=v,v=x;break e}r(v,T);break}else t(v,T);T=T.sibling}S.type===si?(x=Mo(S.props.children,v.mode,I,S.key),x.return=v,v=x):(I=Yl(S.type,S.key,S.props,null,v.mode,I),I.ref=ba(v,x,S),I.return=v,v=I)}return a(v);case ai:e:{for(T=S.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===S.containerInfo&&x.stateNode.implementation===S.implementation){r(v,x.sibling),x=o(x,S.children||[]),x.return=v,v=x;break e}else{r(v,x);break}else t(v,x);x=x.sibling}x=Hd(S,v.mode,I),x.return=v,v=x}return a(v);case _n:return T=S._init,y(v,x,T(S._payload),I)}if(Na(S))return m(v,x,S,I);if(ma(S))return h(v,x,S,I);fl(v,S)}return typeof S=="string"&&S!==""||typeof S=="number"?(S=""+S,x!==null&&x.tag===6?(r(v,x.sibling),x=o(x,S),x.return=v,v=x):(r(v,x),x=zd(S,v.mode,I),x.return=v,v=x),a(v)):r(v,x)}return y}var Ni=I2(!0),E2=I2(!1),xc=uo(null),yc=null,mi=null,yp=null;function bp(){yp=mi=yc=null}function Sp(e){var t=xc.current;Ze(xc),e._currentValue=t}function Zf(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Ti(e,t){yc=e,yp=mi=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(Zt=!0),e.firstContext=null)}function Ar(e){var t=e._currentValue;if(yp!==e)if(e={context:e,memoizedValue:t,next:null},mi===null){if(yc===null)throw Error(de(308));mi=e,yc.dependencies={lanes:0,firstContext:e}}else mi=mi.next=e;return t}var Eo=null;function Cp(e){Eo===null?Eo=[e]:Eo.push(e)}function P2(e,t,r,n){var o=t.interleaved;return o===null?(r.next=r,Cp(t)):(r.next=o.next,o.next=r),t.interleaved=r,$n(e,n)}function $n(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var Fn=!1;function wp(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function $2(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function In(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Qn(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,_e&2){var o=n.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),n.pending=t,$n(e,r)}return o=n.interleaved,o===null?(t.next=t,Cp(n)):(t.next=o.next,o.next=t),n.interleaved=t,$n(e,r)}function Wl(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,lp(e,r)}}function Fv(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var o=null,i=null;if(r=r.firstBaseUpdate,r!==null){do{var a={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};i===null?o=i=a:i=i.next=a,r=r.next}while(r!==null);i===null?o=i=t:i=i.next=t}else o=i=t;r={baseState:n.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function bc(e,t,r,n){var o=e.updateQueue;Fn=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var c=s,u=c.next;c.next=null,a===null?i=u:a.next=u,a=c;var f=e.alternate;f!==null&&(f=f.updateQueue,s=f.lastBaseUpdate,s!==a&&(s===null?f.firstBaseUpdate=u:s.next=u,f.lastBaseUpdate=c))}if(i!==null){var d=o.baseState;a=0,f=u=c=null,s=i;do{var g=s.lane,p=s.eventTime;if((n&g)===g){f!==null&&(f=f.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=e,h=s;switch(g=t,p=r,h.tag){case 1:if(m=h.payload,typeof m=="function"){d=m.call(p,d,g);break e}d=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,g=typeof m=="function"?m.call(p,d,g):m,g==null)break e;d=it({},d,g);break e;case 2:Fn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[s]:g.push(s))}else p={eventTime:p,lane:g,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(u=f=p,c=d):f=f.next=p,a|=g;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;g=s,s=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(!0);if(f===null&&(c=d),o.baseState=c,o.firstBaseUpdate=u,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do a|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);Bo|=a,e.lanes=a,e.memoizedState=d}}function Bv(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],o=n.callback;if(o!==null){if(n.callback=null,n=r,typeof o!="function")throw Error(de(191,o));o.call(n)}}}var Ms={},yn=uo(Ms),gs=uo(Ms),ps=uo(Ms);function Po(e){if(e===Ms)throw Error(de(174));return e}function jp(e,t){switch(Je(ps,t),Je(gs,e),Je(yn,Ms),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Nf(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Nf(t,e)}Ze(yn),Je(yn,t)}function Mi(){Ze(yn),Ze(gs),Ze(ps)}function k2(e){Po(ps.current);var t=Po(yn.current),r=Nf(t,e.type);t!==r&&(Je(gs,e),Je(yn,r))}function Tp(e){gs.current===e&&(Ze(yn),Ze(gs))}var nt=uo(0);function Sc(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Dd=[];function Op(){for(var e=0;e<Dd.length;e++)Dd[e]._workInProgressVersionPrimary=null;Dd.length=0}var ql=An.ReactCurrentDispatcher,Rd=An.ReactCurrentBatchConfig,Fo=0,ot=null,vt=null,bt=null,Cc=!1,Ha=!1,ms=0,E4=0;function Nt(){throw Error(de(321))}function Ip(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Qr(e[r],t[r]))return!1;return!0}function Ep(e,t,r,n,o,i){if(Fo=i,ot=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ql.current=e===null||e.memoizedState===null?N4:M4,e=r(n,o),Ha){i=0;do{if(Ha=!1,ms=0,25<=i)throw Error(de(301));i+=1,bt=vt=null,t.updateQueue=null,ql.current=A4,e=r(n,o)}while(Ha)}if(ql.current=wc,t=vt!==null&&vt.next!==null,Fo=0,bt=vt=ot=null,Cc=!1,t)throw Error(de(300));return e}function Pp(){var e=ms!==0;return ms=0,e}function gn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return bt===null?ot.memoizedState=bt=e:bt=bt.next=e,bt}function Dr(){if(vt===null){var e=ot.alternate;e=e!==null?e.memoizedState:null}else e=vt.next;var t=bt===null?ot.memoizedState:bt.next;if(t!==null)bt=t,vt=e;else{if(e===null)throw Error(de(310));vt=e,e={memoizedState:vt.memoizedState,baseState:vt.baseState,baseQueue:vt.baseQueue,queue:vt.queue,next:null},bt===null?ot.memoizedState=bt=e:bt=bt.next=e}return bt}function hs(e,t){return typeof t=="function"?t(e):t}function Ld(e){var t=Dr(),r=t.queue;if(r===null)throw Error(de(311));r.lastRenderedReducer=e;var n=vt,o=n.baseQueue,i=r.pending;if(i!==null){if(o!==null){var a=o.next;o.next=i.next,i.next=a}n.baseQueue=o=i,r.pending=null}if(o!==null){i=o.next,n=n.baseState;var s=a=null,c=null,u=i;do{var f=u.lane;if((Fo&f)===f)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),n=u.hasEagerState?u.eagerState:e(n,u.action);else{var d={lane:f,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(s=c=d,a=n):c=c.next=d,ot.lanes|=f,Bo|=f}u=u.next}while(u!==null&&u!==i);c===null?a=n:c.next=s,Qr(n,t.memoizedState)||(Zt=!0),t.memoizedState=n,t.baseState=a,t.baseQueue=c,r.lastRenderedState=n}if(e=r.interleaved,e!==null){o=e;do i=o.lane,ot.lanes|=i,Bo|=i,o=o.next;while(o!==e)}else o===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function _d(e){var t=Dr(),r=t.queue;if(r===null)throw Error(de(311));r.lastRenderedReducer=e;var n=r.dispatch,o=r.pending,i=t.memoizedState;if(o!==null){r.pending=null;var a=o=o.next;do i=e(i,a.action),a=a.next;while(a!==o);Qr(i,t.memoizedState)||(Zt=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),r.lastRenderedState=i}return[i,n]}function N2(){}function M2(e,t){var r=ot,n=Dr(),o=t(),i=!Qr(n.memoizedState,o);if(i&&(n.memoizedState=o,Zt=!0),n=n.queue,$p(R2.bind(null,r,n,e),[e]),n.getSnapshot!==t||i||bt!==null&&bt.memoizedState.tag&1){if(r.flags|=2048,vs(9,D2.bind(null,r,n,o,t),void 0,null),St===null)throw Error(de(349));Fo&30||A2(r,t,o)}return o}function A2(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function D2(e,t,r,n){t.value=r,t.getSnapshot=n,L2(t)&&_2(e)}function R2(e,t,r){return r(function(){L2(t)&&_2(e)})}function L2(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Qr(e,r)}catch{return!0}}function _2(e){var t=$n(e,1);t!==null&&Kr(t,e,1,-1)}function zv(e){var t=gn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:hs,lastRenderedState:e},t.queue=e,e=e.dispatch=k4.bind(null,ot,e),[t.memoizedState,e]}function vs(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=ot.updateQueue,t===null?(t={lastEffect:null,stores:null},ot.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function F2(){return Dr().memoizedState}function Gl(e,t,r,n){var o=gn();ot.flags|=e,o.memoizedState=vs(1|t,r,void 0,n===void 0?null:n)}function pu(e,t,r,n){var o=Dr();n=n===void 0?null:n;var i=void 0;if(vt!==null){var a=vt.memoizedState;if(i=a.destroy,n!==null&&Ip(n,a.deps)){o.memoizedState=vs(t,r,i,n);return}}ot.flags|=e,o.memoizedState=vs(1|t,r,i,n)}function Hv(e,t){return Gl(8390656,8,e,t)}function $p(e,t){return pu(2048,8,e,t)}function B2(e,t){return pu(4,2,e,t)}function z2(e,t){return pu(4,4,e,t)}function H2(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function U2(e,t,r){return r=r!=null?r.concat([e]):null,pu(4,4,H2.bind(null,t,e),r)}function kp(){}function V2(e,t){var r=Dr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ip(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function W2(e,t){var r=Dr();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ip(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function q2(e,t,r){return Fo&21?(Qr(r,t)||(r=YS(),ot.lanes|=r,Bo|=r,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Zt=!0),e.memoizedState=r)}function P4(e,t){var r=He;He=r!==0&&4>r?r:4,e(!0);var n=Rd.transition;Rd.transition={};try{e(!1),t()}finally{He=r,Rd.transition=n}}function G2(){return Dr().memoizedState}function $4(e,t,r){var n=Zn(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},K2(e))J2(t,r);else if(r=P2(e,t,r,n),r!==null){var o=Ut();Kr(r,e,n,o),Q2(r,t,n)}}function k4(e,t,r){var n=Zn(e),o={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(K2(e))J2(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var a=t.lastRenderedState,s=i(a,r);if(o.hasEagerState=!0,o.eagerState=s,Qr(s,a)){var c=t.interleaved;c===null?(o.next=o,Cp(t)):(o.next=c.next,c.next=o),t.interleaved=o;return}}catch{}finally{}r=P2(e,t,o,n),r!==null&&(o=Ut(),Kr(r,e,n,o),Q2(r,t,n))}}function K2(e){var t=e.alternate;return e===ot||t!==null&&t===ot}function J2(e,t){Ha=Cc=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function Q2(e,t,r){if(r&4194240){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,lp(e,r)}}var wc={readContext:Ar,useCallback:Nt,useContext:Nt,useEffect:Nt,useImperativeHandle:Nt,useInsertionEffect:Nt,useLayoutEffect:Nt,useMemo:Nt,useReducer:Nt,useRef:Nt,useState:Nt,useDebugValue:Nt,useDeferredValue:Nt,useTransition:Nt,useMutableSource:Nt,useSyncExternalStore:Nt,useId:Nt,unstable_isNewReconciler:!1},N4={readContext:Ar,useCallback:function(e,t){return gn().memoizedState=[e,t===void 0?null:t],e},useContext:Ar,useEffect:Hv,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Gl(4194308,4,H2.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Gl(4194308,4,e,t)},useInsertionEffect:function(e,t){return Gl(4,2,e,t)},useMemo:function(e,t){var r=gn();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=gn();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=$4.bind(null,ot,e),[n.memoizedState,e]},useRef:function(e){var t=gn();return e={current:e},t.memoizedState=e},useState:zv,useDebugValue:kp,useDeferredValue:function(e){return gn().memoizedState=e},useTransition:function(){var e=zv(!1),t=e[0];return e=P4.bind(null,e[1]),gn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=ot,o=gn();if(et){if(r===void 0)throw Error(de(407));r=r()}else{if(r=t(),St===null)throw Error(de(349));Fo&30||A2(n,t,r)}o.memoizedState=r;var i={value:r,getSnapshot:t};return o.queue=i,Hv(R2.bind(null,n,i,e),[e]),n.flags|=2048,vs(9,D2.bind(null,n,i,r,t),void 0,null),r},useId:function(){var e=gn(),t=St.identifierPrefix;if(et){var r=jn,n=wn;r=(n&~(1<<32-Gr(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=ms++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=E4++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},M4={readContext:Ar,useCallback:V2,useContext:Ar,useEffect:$p,useImperativeHandle:U2,useInsertionEffect:B2,useLayoutEffect:z2,useMemo:W2,useReducer:Ld,useRef:F2,useState:function(){return Ld(hs)},useDebugValue:kp,useDeferredValue:function(e){var t=Dr();return q2(t,vt.memoizedState,e)},useTransition:function(){var e=Ld(hs)[0],t=Dr().memoizedState;return[e,t]},useMutableSource:N2,useSyncExternalStore:M2,useId:G2,unstable_isNewReconciler:!1},A4={readContext:Ar,useCallback:V2,useContext:Ar,useEffect:$p,useImperativeHandle:U2,useInsertionEffect:B2,useLayoutEffect:z2,useMemo:W2,useReducer:_d,useRef:F2,useState:function(){return _d(hs)},useDebugValue:kp,useDeferredValue:function(e){var t=Dr();return vt===null?t.memoizedState=e:q2(t,vt.memoizedState,e)},useTransition:function(){var e=_d(hs)[0],t=Dr().memoizedState;return[e,t]},useMutableSource:N2,useSyncExternalStore:M2,useId:G2,unstable_isNewReconciler:!1};function Br(e,t){if(e&&e.defaultProps){t=it({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function Xf(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:it({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var mu={isMounted:function(e){return(e=e._reactInternals)?Jo(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ut(),o=Zn(e),i=In(n,o);i.payload=t,r!=null&&(i.callback=r),t=Qn(e,i,o),t!==null&&(Kr(t,e,o,n),Wl(t,e,o))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ut(),o=Zn(e),i=In(n,o);i.tag=1,i.payload=t,r!=null&&(i.callback=r),t=Qn(e,i,o),t!==null&&(Kr(t,e,o,n),Wl(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ut(),n=Zn(e),o=In(r,n);o.tag=2,t!=null&&(o.callback=t),t=Qn(e,o,n),t!==null&&(Kr(t,e,n,r),Wl(t,e,n))}};function Uv(e,t,r,n,o,i,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,i,a):t.prototype&&t.prototype.isPureReactComponent?!cs(r,n)||!cs(o,i):!0}function Y2(e,t,r){var n=!1,o=ao,i=t.contextType;return typeof i=="object"&&i!==null?i=Ar(i):(o=er(t)?Lo:Ft.current,n=t.contextTypes,i=(n=n!=null)?$i(e,o):ao),t=new t(r,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=mu,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function Vv(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&mu.enqueueReplaceState(t,t.state,null)}function eg(e,t,r,n){var o=e.stateNode;o.props=r,o.state=e.memoizedState,o.refs={},wp(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=Ar(i):(i=er(t)?Lo:Ft.current,o.context=$i(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Xf(e,t,i,r),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&mu.enqueueReplaceState(o,o.state,null),bc(e,r,o,n),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Ai(e,t){try{var r="",n=t;do r+=l8(n),n=n.return;while(n);var o=r}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Fd(e,t,r){return{value:e,source:null,stack:r??null,digest:t??null}}function tg(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var D4=typeof WeakMap=="function"?WeakMap:Map;function Z2(e,t,r){r=In(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){Tc||(Tc=!0,dg=n),tg(e,t)},r}function X2(e,t,r){r=In(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var o=t.value;r.payload=function(){return n(o)},r.callback=function(){tg(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(r.callback=function(){tg(e,t),typeof n!="function"&&(Yn===null?Yn=new Set([this]):Yn.add(this));var a=t.stack;this.componentDidCatch(t.value,{componentStack:a!==null?a:""})}),r}function Wv(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new D4;var o=new Set;n.set(t,o)}else o=n.get(t),o===void 0&&(o=new Set,n.set(t,o));o.has(r)||(o.add(r),e=J4.bind(null,e,t,r),t.then(e,e))}function qv(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function Gv(e,t,r,n,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=In(-1,1),t.tag=2,Qn(r,t,1))),r.lanes|=1),e)}var R4=An.ReactCurrentOwner,Zt=!1;function Ht(e,t,r,n){t.child=e===null?E2(t,null,r,n):Ni(t,e.child,r,n)}function Kv(e,t,r,n,o){r=r.render;var i=t.ref;return Ti(t,o),n=Ep(e,t,r,n,i,o),r=Pp(),e!==null&&!Zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,kn(e,t,o)):(et&&r&&hp(t),t.flags|=1,Ht(e,t,n,o),t.child)}function Jv(e,t,r,n,o){if(e===null){var i=r.type;return typeof i=="function"&&!Fp(i)&&i.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=i,eC(e,t,i,n,o)):(e=Yl(r.type,null,n,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var a=i.memoizedProps;if(r=r.compare,r=r!==null?r:cs,r(a,n)&&e.ref===t.ref)return kn(e,t,o)}return t.flags|=1,e=Xn(i,n),e.ref=t.ref,e.return=t,t.child=e}function eC(e,t,r,n,o){if(e!==null){var i=e.memoizedProps;if(cs(i,n)&&e.ref===t.ref)if(Zt=!1,t.pendingProps=n=i,(e.lanes&o)!==0)e.flags&131072&&(Zt=!0);else return t.lanes=e.lanes,kn(e,t,o)}return rg(e,t,r,n,o)}function tC(e,t,r){var n=t.pendingProps,o=n.children,i=e!==null?e.memoizedState:null;if(n.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Je(vi,lr),lr|=r;else{if(!(r&1073741824))return e=i!==null?i.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Je(vi,lr),lr|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=i!==null?i.baseLanes:r,Je(vi,lr),lr|=n}else i!==null?(n=i.baseLanes|r,t.memoizedState=null):n=r,Je(vi,lr),lr|=n;return Ht(e,t,o,r),t.child}function rC(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function rg(e,t,r,n,o){var i=er(r)?Lo:Ft.current;return i=$i(t,i),Ti(t,o),r=Ep(e,t,r,n,i,o),n=Pp(),e!==null&&!Zt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,kn(e,t,o)):(et&&n&&hp(t),t.flags|=1,Ht(e,t,r,o),t.child)}function Qv(e,t,r,n,o){if(er(r)){var i=!0;mc(t)}else i=!1;if(Ti(t,o),t.stateNode===null)Kl(e,t),Y2(t,r,n),eg(t,r,n,o),n=!0;else if(e===null){var a=t.stateNode,s=t.memoizedProps;a.props=s;var c=a.context,u=r.contextType;typeof u=="object"&&u!==null?u=Ar(u):(u=er(r)?Lo:Ft.current,u=$i(t,u));var f=r.getDerivedStateFromProps,d=typeof f=="function"||typeof a.getSnapshotBeforeUpdate=="function";d||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==n||c!==u)&&Vv(t,a,n,u),Fn=!1;var g=t.memoizedState;a.state=g,bc(t,n,a,o),c=t.memoizedState,s!==n||g!==c||Xt.current||Fn?(typeof f=="function"&&(Xf(t,r,f,n),c=t.memoizedState),(s=Fn||Uv(t,r,s,n,g,c,u))?(d||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(t.flags|=4194308)):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=c),a.props=n,a.state=c,a.context=u,n=s):(typeof a.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{a=t.stateNode,$2(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:Br(t.type,s),a.props=u,d=t.pendingProps,g=a.context,c=r.contextType,typeof c=="object"&&c!==null?c=Ar(c):(c=er(r)?Lo:Ft.current,c=$i(t,c));var p=r.getDerivedStateFromProps;(f=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(s!==d||g!==c)&&Vv(t,a,n,c),Fn=!1,g=t.memoizedState,a.state=g,bc(t,n,a,o);var m=t.memoizedState;s!==d||g!==m||Xt.current||Fn?(typeof p=="function"&&(Xf(t,r,p,n),m=t.memoizedState),(u=Fn||Uv(t,r,u,n,g,m,c)||!1)?(f||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(n,m,c),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(n,m,c)),typeof a.componentDidUpdate=="function"&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=m),a.props=n,a.state=m,a.context=c,n=u):(typeof a.componentDidUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),n=!1)}return ng(e,t,r,n,i,o)}function ng(e,t,r,n,o,i){rC(e,t);var a=(t.flags&128)!==0;if(!n&&!a)return o&&Dv(t,r,!1),kn(e,t,i);n=t.stateNode,R4.current=t;var s=a&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&a?(t.child=Ni(t,e.child,null,i),t.child=Ni(t,null,s,i)):Ht(e,t,s,i),t.memoizedState=n.state,o&&Dv(t,r,!0),t.child}function nC(e){var t=e.stateNode;t.pendingContext?Av(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Av(e,t.context,!1),jp(e,t.containerInfo)}function Yv(e,t,r,n,o){return ki(),xp(o),t.flags|=256,Ht(e,t,r,n),t.child}var og={dehydrated:null,treeContext:null,retryLane:0};function ig(e){return{baseLanes:e,cachePool:null,transitions:null}}function oC(e,t,r){var n=t.pendingProps,o=nt.current,i=!1,a=(t.flags&128)!==0,s;if((s=a)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),Je(nt,o&1),e===null)return Yf(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(a=n.children,e=n.fallback,i?(n=t.mode,i=t.child,a={mode:"hidden",children:a},!(n&1)&&i!==null?(i.childLanes=0,i.pendingProps=a):i=xu(a,n,0,null),e=Mo(e,n,r,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=ig(r),t.memoizedState=og,e):Np(t,a));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return L4(e,t,a,n,s,o,r);if(i){i=n.fallback,a=t.mode,o=e.child,s=o.sibling;var c={mode:"hidden",children:n.children};return!(a&1)&&t.child!==o?(n=t.child,n.childLanes=0,n.pendingProps=c,t.deletions=null):(n=Xn(o,c),n.subtreeFlags=o.subtreeFlags&14680064),s!==null?i=Xn(s,i):(i=Mo(i,a,r,null),i.flags|=2),i.return=t,n.return=t,n.sibling=i,t.child=n,n=i,i=t.child,a=e.child.memoizedState,a=a===null?ig(r):{baseLanes:a.baseLanes|r,cachePool:null,transitions:a.transitions},i.memoizedState=a,i.childLanes=e.childLanes&~r,t.memoizedState=og,n}return i=e.child,e=i.sibling,n=Xn(i,{mode:"visible",children:n.children}),!(t.mode&1)&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function Np(e,t){return t=xu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function gl(e,t,r,n){return n!==null&&xp(n),Ni(t,e.child,null,r),e=Np(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function L4(e,t,r,n,o,i,a){if(r)return t.flags&256?(t.flags&=-257,n=Fd(Error(de(422))),gl(e,t,a,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=n.fallback,o=t.mode,n=xu({mode:"visible",children:n.children},o,0,null),i=Mo(i,o,a,null),i.flags|=2,n.return=t,i.return=t,n.sibling=i,t.child=n,t.mode&1&&Ni(t,e.child,null,a),t.child.memoizedState=ig(a),t.memoizedState=og,i);if(!(t.mode&1))return gl(e,t,a,null);if(o.data==="$!"){if(n=o.nextSibling&&o.nextSibling.dataset,n)var s=n.dgst;return n=s,i=Error(de(419)),n=Fd(i,n,void 0),gl(e,t,a,n)}if(s=(a&e.childLanes)!==0,Zt||s){if(n=St,n!==null){switch(a&-a){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(n.suspendedLanes|a)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,$n(e,o),Kr(n,e,o,-1))}return _p(),n=Fd(Error(de(421))),gl(e,t,a,n)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Q4.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,cr=Jn(o.nextSibling),gr=t,et=!0,Vr=null,e!==null&&(Tr[Or++]=wn,Tr[Or++]=jn,Tr[Or++]=_o,wn=e.id,jn=e.overflow,_o=t),t=Np(t,n.children),t.flags|=4096,t)}function Zv(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Zf(e.return,t,r)}function Bd(e,t,r,n,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=n,i.tail=r,i.tailMode=o)}function iC(e,t,r){var n=t.pendingProps,o=n.revealOrder,i=n.tail;if(Ht(e,t,n.children,r),n=nt.current,n&2)n=n&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zv(e,r,t);else if(e.tag===19)Zv(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(Je(nt,n),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(r=t.child,o=null;r!==null;)e=r.alternate,e!==null&&Sc(e)===null&&(o=r),r=r.sibling;r=o,r===null?(o=t.child,t.child=null):(o=r.sibling,r.sibling=null),Bd(t,!1,o,r,i);break;case"backwards":for(r=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Sc(e)===null){t.child=o;break}e=o.sibling,o.sibling=r,r=o,o=e}Bd(t,!0,r,null,i);break;case"together":Bd(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Kl(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function kn(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Bo|=t.lanes,!(r&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(de(153));if(t.child!==null){for(e=t.child,r=Xn(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=Xn(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function _4(e,t,r){switch(t.tag){case 3:nC(t),ki();break;case 5:k2(t);break;case 1:er(t.type)&&mc(t);break;case 4:jp(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,o=t.memoizedProps.value;Je(xc,n._currentValue),n._currentValue=o;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(Je(nt,nt.current&1),t.flags|=128,null):r&t.child.childLanes?oC(e,t,r):(Je(nt,nt.current&1),e=kn(e,t,r),e!==null?e.sibling:null);Je(nt,nt.current&1);break;case 19:if(n=(r&t.childLanes)!==0,e.flags&128){if(n)return iC(e,t,r);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),Je(nt,nt.current),n)break;return null;case 22:case 23:return t.lanes=0,tC(e,t,r)}return kn(e,t,r)}var aC,ag,sC,lC;aC=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}};ag=function(){};sC=function(e,t,r,n){var o=e.memoizedProps;if(o!==n){e=t.stateNode,Po(yn.current);var i=null;switch(r){case"input":o=Ef(e,o),n=Ef(e,n),i=[];break;case"select":o=it({},o,{value:void 0}),n=it({},n,{value:void 0}),i=[];break;case"textarea":o=kf(e,o),n=kf(e,n),i=[];break;default:typeof o.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=gc)}Mf(r,n);var a;r=null;for(u in o)if(!n.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(a in s)s.hasOwnProperty(a)&&(r||(r={}),r[a]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(rs.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in n){var c=n[u];if(s=o!=null?o[u]:void 0,n.hasOwnProperty(u)&&c!==s&&(c!=null||s!=null))if(u==="style")if(s){for(a in s)!s.hasOwnProperty(a)||c&&c.hasOwnProperty(a)||(r||(r={}),r[a]="");for(a in c)c.hasOwnProperty(a)&&s[a]!==c[a]&&(r||(r={}),r[a]=c[a])}else r||(i||(i=[]),i.push(u,r)),r=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,s=s?s.__html:void 0,c!=null&&s!==c&&(i=i||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(i=i||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(rs.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Qe("scroll",e),i||s===c||(i=[])):(i=i||[]).push(u,c))}r&&(i=i||[]).push("style",r);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};lC=function(e,t,r,n){r!==n&&(t.flags|=4)};function Sa(e,t){if(!et)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function Mt(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags&14680064,n|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)r|=o.lanes|o.childLanes,n|=o.subtreeFlags,n|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function F4(e,t,r){var n=t.pendingProps;switch(vp(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(t),null;case 1:return er(t.type)&&pc(),Mt(t),null;case 3:return n=t.stateNode,Mi(),Ze(Xt),Ze(Ft),Op(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(dl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Vr!==null&&(pg(Vr),Vr=null))),ag(e,t),Mt(t),null;case 5:Tp(t);var o=Po(ps.current);if(r=t.type,e!==null&&t.stateNode!=null)sC(e,t,r,n,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(de(166));return Mt(t),null}if(e=Po(yn.current),dl(t)){n=t.stateNode,r=t.type;var i=t.memoizedProps;switch(n[mn]=t,n[fs]=i,e=(t.mode&1)!==0,r){case"dialog":Qe("cancel",n),Qe("close",n);break;case"iframe":case"object":case"embed":Qe("load",n);break;case"video":case"audio":for(o=0;o<Aa.length;o++)Qe(Aa[o],n);break;case"source":Qe("error",n);break;case"img":case"image":case"link":Qe("error",n),Qe("load",n);break;case"details":Qe("toggle",n);break;case"input":sv(n,i),Qe("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!i.multiple},Qe("invalid",n);break;case"textarea":cv(n,i),Qe("invalid",n)}Mf(r,i),o=null;for(var a in i)if(i.hasOwnProperty(a)){var s=i[a];a==="children"?typeof s=="string"?n.textContent!==s&&(i.suppressHydrationWarning!==!0&&ul(n.textContent,s,e),o=["children",s]):typeof s=="number"&&n.textContent!==""+s&&(i.suppressHydrationWarning!==!0&&ul(n.textContent,s,e),o=["children",""+s]):rs.hasOwnProperty(a)&&s!=null&&a==="onScroll"&&Qe("scroll",n)}switch(r){case"input":rl(n),lv(n,i,!0);break;case"textarea":rl(n),uv(n);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(n.onclick=gc)}n=o,t.updateQueue=n,n!==null&&(t.flags|=4)}else{a=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=RS(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=a.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=a.createElement(r,{is:n.is}):(e=a.createElement(r),r==="select"&&(a=e,n.multiple?a.multiple=!0:n.size&&(a.size=n.size))):e=a.createElementNS(e,r),e[mn]=t,e[fs]=n,aC(e,t,!1,!1),t.stateNode=e;e:{switch(a=Af(r,n),r){case"dialog":Qe("cancel",e),Qe("close",e),o=n;break;case"iframe":case"object":case"embed":Qe("load",e),o=n;break;case"video":case"audio":for(o=0;o<Aa.length;o++)Qe(Aa[o],e);o=n;break;case"source":Qe("error",e),o=n;break;case"img":case"image":case"link":Qe("error",e),Qe("load",e),o=n;break;case"details":Qe("toggle",e),o=n;break;case"input":sv(e,n),o=Ef(e,n),Qe("invalid",e);break;case"option":o=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},o=it({},n,{value:void 0}),Qe("invalid",e);break;case"textarea":cv(e,n),o=kf(e,n),Qe("invalid",e);break;default:o=n}Mf(r,o),s=o;for(i in s)if(s.hasOwnProperty(i)){var c=s[i];i==="style"?FS(e,c):i==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&LS(e,c)):i==="children"?typeof c=="string"?(r!=="textarea"||c!=="")&&ns(e,c):typeof c=="number"&&ns(e,""+c):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(rs.hasOwnProperty(i)?c!=null&&i==="onScroll"&&Qe("scroll",e):c!=null&&rp(e,i,c,a))}switch(r){case"input":rl(e),lv(e,n,!1);break;case"textarea":rl(e),uv(e);break;case"option":n.value!=null&&e.setAttribute("value",""+io(n.value));break;case"select":e.multiple=!!n.multiple,i=n.value,i!=null?Si(e,!!n.multiple,i,!1):n.defaultValue!=null&&Si(e,!!n.multiple,n.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=gc)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Mt(t),null;case 6:if(e&&t.stateNode!=null)lC(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(de(166));if(r=Po(ps.current),Po(yn.current),dl(t)){if(n=t.stateNode,r=t.memoizedProps,n[mn]=t,(i=n.nodeValue!==r)&&(e=gr,e!==null))switch(e.tag){case 3:ul(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ul(n.nodeValue,r,(e.mode&1)!==0)}i&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[mn]=t,t.stateNode=n}return Mt(t),null;case 13:if(Ze(nt),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(et&&cr!==null&&t.mode&1&&!(t.flags&128))O2(),ki(),t.flags|=98560,i=!1;else if(i=dl(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(de(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(de(317));i[mn]=t}else ki(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Mt(t),i=!1}else Vr!==null&&(pg(Vr),Vr=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,t.mode&1&&(e===null||nt.current&1?xt===0&&(xt=3):_p())),t.updateQueue!==null&&(t.flags|=4),Mt(t),null);case 4:return Mi(),ag(e,t),e===null&&us(t.stateNode.containerInfo),Mt(t),null;case 10:return Sp(t.type._context),Mt(t),null;case 17:return er(t.type)&&pc(),Mt(t),null;case 19:if(Ze(nt),i=t.memoizedState,i===null)return Mt(t),null;if(n=(t.flags&128)!==0,a=i.rendering,a===null)if(n)Sa(i,!1);else{if(xt!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(a=Sc(e),a!==null){for(t.flags|=128,Sa(i,!1),n=a.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)i=r,e=n,i.flags&=14680066,a=i.alternate,a===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=a.childLanes,i.lanes=a.lanes,i.child=a.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=a.memoizedProps,i.memoizedState=a.memoizedState,i.updateQueue=a.updateQueue,i.type=a.type,e=a.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return Je(nt,nt.current&1|2),t.child}e=e.sibling}i.tail!==null&&lt()>Di&&(t.flags|=128,n=!0,Sa(i,!1),t.lanes=4194304)}else{if(!n)if(e=Sc(a),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Sa(i,!0),i.tail===null&&i.tailMode==="hidden"&&!a.alternate&&!et)return Mt(t),null}else 2*lt()-i.renderingStartTime>Di&&r!==1073741824&&(t.flags|=128,n=!0,Sa(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(r=i.last,r!==null?r.sibling=a:t.child=a,i.last=a)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=lt(),t.sibling=null,r=nt.current,Je(nt,n?r&1|2:r&1),t):(Mt(t),null);case 22:case 23:return Lp(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&t.mode&1?lr&1073741824&&(Mt(t),t.subtreeFlags&6&&(t.flags|=8192)):Mt(t),null;case 24:return null;case 25:return null}throw Error(de(156,t.tag))}function B4(e,t){switch(vp(t),t.tag){case 1:return er(t.type)&&pc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Mi(),Ze(Xt),Ze(Ft),Op(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Tp(t),null;case 13:if(Ze(nt),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(de(340));ki()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Ze(nt),null;case 4:return Mi(),null;case 10:return Sp(t.type._context),null;case 22:case 23:return Lp(),null;case 24:return null;default:return null}}var pl=!1,Dt=!1,z4=typeof WeakSet=="function"?WeakSet:Set,ve=null;function hi(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){at(e,t,n)}else r.current=null}function sg(e,t,r){try{r()}catch(n){at(e,t,n)}}var Xv=!1;function H4(e,t){if(Vf=uc,e=g2(),mp(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var o=n.anchorOffset,i=n.focusNode;n=n.focusOffset;try{r.nodeType,i.nodeType}catch{r=null;break e}var a=0,s=-1,c=-1,u=0,f=0,d=e,g=null;t:for(;;){for(var p;d!==r||o!==0&&d.nodeType!==3||(s=a+o),d!==i||n!==0&&d.nodeType!==3||(c=a+n),d.nodeType===3&&(a+=d.nodeValue.length),(p=d.firstChild)!==null;)g=d,d=p;for(;;){if(d===e)break t;if(g===r&&++u===o&&(s=a),g===i&&++f===n&&(c=a),(p=d.nextSibling)!==null)break;d=g,g=d.parentNode}d=p}r=s===-1||c===-1?null:{start:s,end:c}}else r=null}r=r||{start:0,end:0}}else r=null;for(Wf={focusedElem:e,selectionRange:r},uc=!1,ve=t;ve!==null;)if(t=ve,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,ve=e;else for(;ve!==null;){t=ve;try{var m=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var h=m.memoizedProps,y=m.memoizedState,v=t.stateNode,x=v.getSnapshotBeforeUpdate(t.elementType===t.type?h:Br(t.type,h),y);v.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var S=t.stateNode.containerInfo;S.nodeType===1?S.textContent="":S.nodeType===9&&S.documentElement&&S.removeChild(S.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(de(163))}}catch(I){at(t,t.return,I)}if(e=t.sibling,e!==null){e.return=t.return,ve=e;break}ve=t.return}return m=Xv,Xv=!1,m}function Ua(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var o=n=n.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&sg(t,r,i)}o=o.next}while(o!==n)}}function hu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function lg(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function cC(e){var t=e.alternate;t!==null&&(e.alternate=null,cC(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[mn],delete t[fs],delete t[Kf],delete t[j4],delete t[T4])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function uC(e){return e.tag===5||e.tag===3||e.tag===4}function e0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||uC(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function cg(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=gc));else if(n!==4&&(e=e.child,e!==null))for(cg(e,t,r),e=e.sibling;e!==null;)cg(e,t,r),e=e.sibling}function ug(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ug(e,t,r),e=e.sibling;e!==null;)ug(e,t,r),e=e.sibling}var It=null,Hr=!1;function Ln(e,t,r){for(r=r.child;r!==null;)dC(e,t,r),r=r.sibling}function dC(e,t,r){if(xn&&typeof xn.onCommitFiberUnmount=="function")try{xn.onCommitFiberUnmount(lu,r)}catch{}switch(r.tag){case 5:Dt||hi(r,t);case 6:var n=It,o=Hr;It=null,Ln(e,t,r),It=n,Hr=o,It!==null&&(Hr?(e=It,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):It.removeChild(r.stateNode));break;case 18:It!==null&&(Hr?(e=It,r=r.stateNode,e.nodeType===8?Md(e.parentNode,r):e.nodeType===1&&Md(e,r),ss(e)):Md(It,r.stateNode));break;case 4:n=It,o=Hr,It=r.stateNode.containerInfo,Hr=!0,Ln(e,t,r),It=n,Hr=o;break;case 0:case 11:case 14:case 15:if(!Dt&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){o=n=n.next;do{var i=o,a=i.destroy;i=i.tag,a!==void 0&&(i&2||i&4)&&sg(r,t,a),o=o.next}while(o!==n)}Ln(e,t,r);break;case 1:if(!Dt&&(hi(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(s){at(r,t,s)}Ln(e,t,r);break;case 21:Ln(e,t,r);break;case 22:r.mode&1?(Dt=(n=Dt)||r.memoizedState!==null,Ln(e,t,r),Dt=n):Ln(e,t,r);break;default:Ln(e,t,r)}}function t0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new z4),t.forEach(function(n){var o=Y4.bind(null,e,n);r.has(n)||(r.add(n),n.then(o,o))})}}function Fr(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var o=r[n];try{var i=e,a=t,s=a;e:for(;s!==null;){switch(s.tag){case 5:It=s.stateNode,Hr=!1;break e;case 3:It=s.stateNode.containerInfo,Hr=!0;break e;case 4:It=s.stateNode.containerInfo,Hr=!0;break e}s=s.return}if(It===null)throw Error(de(160));dC(i,a,o),It=null,Hr=!1;var c=o.alternate;c!==null&&(c.return=null),o.return=null}catch(u){at(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)fC(t,e),t=t.sibling}function fC(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Fr(t,e),an(e),n&4){try{Ua(3,e,e.return),hu(3,e)}catch(h){at(e,e.return,h)}try{Ua(5,e,e.return)}catch(h){at(e,e.return,h)}}break;case 1:Fr(t,e),an(e),n&512&&r!==null&&hi(r,r.return);break;case 5:if(Fr(t,e),an(e),n&512&&r!==null&&hi(r,r.return),e.flags&32){var o=e.stateNode;try{ns(o,"")}catch(h){at(e,e.return,h)}}if(n&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,a=r!==null?r.memoizedProps:i,s=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{s==="input"&&i.type==="radio"&&i.name!=null&&AS(o,i),Af(s,a);var u=Af(s,i);for(a=0;a<c.length;a+=2){var f=c[a],d=c[a+1];f==="style"?FS(o,d):f==="dangerouslySetInnerHTML"?LS(o,d):f==="children"?ns(o,d):rp(o,f,d,u)}switch(s){case"input":Pf(o,i);break;case"textarea":DS(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var p=i.value;p!=null?Si(o,!!i.multiple,p,!1):g!==!!i.multiple&&(i.defaultValue!=null?Si(o,!!i.multiple,i.defaultValue,!0):Si(o,!!i.multiple,i.multiple?[]:"",!1))}o[fs]=i}catch(h){at(e,e.return,h)}}break;case 6:if(Fr(t,e),an(e),n&4){if(e.stateNode===null)throw Error(de(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(h){at(e,e.return,h)}}break;case 3:if(Fr(t,e),an(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{ss(t.containerInfo)}catch(h){at(e,e.return,h)}break;case 4:Fr(t,e),an(e);break;case 13:Fr(t,e),an(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Dp=lt())),n&4&&t0(e);break;case 22:if(f=r!==null&&r.memoizedState!==null,e.mode&1?(Dt=(u=Dt)||f,Fr(t,e),Dt=u):Fr(t,e),an(e),n&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!f&&e.mode&1)for(ve=e,f=e.child;f!==null;){for(d=ve=f;ve!==null;){switch(g=ve,p=g.child,g.tag){case 0:case 11:case 14:case 15:Ua(4,g,g.return);break;case 1:hi(g,g.return);var m=g.stateNode;if(typeof m.componentWillUnmount=="function"){n=g,r=g.return;try{t=n,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(h){at(n,r,h)}}break;case 5:hi(g,g.return);break;case 22:if(g.memoizedState!==null){n0(d);continue}}p!==null?(p.return=g,ve=p):n0(d)}f=f.sibling}e:for(f=null,d=e;;){if(d.tag===5){if(f===null){f=d;try{o=d.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(s=d.stateNode,c=d.memoizedProps.style,a=c!=null&&c.hasOwnProperty("display")?c.display:null,s.style.display=_S("display",a))}catch(h){at(e,e.return,h)}}}else if(d.tag===6){if(f===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(h){at(e,e.return,h)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;f===d&&(f=null),d=d.return}f===d&&(f=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Fr(t,e),an(e),n&4&&t0(e);break;case 21:break;default:Fr(t,e),an(e)}}function an(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(uC(r)){var n=r;break e}r=r.return}throw Error(de(160))}switch(n.tag){case 5:var o=n.stateNode;n.flags&32&&(ns(o,""),n.flags&=-33);var i=e0(e);ug(e,i,o);break;case 3:case 4:var a=n.stateNode.containerInfo,s=e0(e);cg(e,s,a);break;default:throw Error(de(161))}}catch(c){at(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function U4(e,t,r){ve=e,gC(e)}function gC(e,t,r){for(var n=(e.mode&1)!==0;ve!==null;){var o=ve,i=o.child;if(o.tag===22&&n){var a=o.memoizedState!==null||pl;if(!a){var s=o.alternate,c=s!==null&&s.memoizedState!==null||Dt;s=pl;var u=Dt;if(pl=a,(Dt=c)&&!u)for(ve=o;ve!==null;)a=ve,c=a.child,a.tag===22&&a.memoizedState!==null?o0(o):c!==null?(c.return=a,ve=c):o0(o);for(;i!==null;)ve=i,gC(i),i=i.sibling;ve=o,pl=s,Dt=u}r0(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,ve=i):r0(e)}}function r0(e){for(;ve!==null;){var t=ve;if(t.flags&8772){var r=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Dt||hu(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Dt)if(r===null)n.componentDidMount();else{var o=t.elementType===t.type?r.memoizedProps:Br(t.type,r.memoizedProps);n.componentDidUpdate(o,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Bv(t,i,n);break;case 3:var a=t.updateQueue;if(a!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Bv(t,a,r)}break;case 5:var s=t.stateNode;if(r===null&&t.flags&4){r=s;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&r.focus();break;case"img":c.src&&(r.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var f=u.memoizedState;if(f!==null){var d=f.dehydrated;d!==null&&ss(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(de(163))}Dt||t.flags&512&&lg(t)}catch(g){at(t,t.return,g)}}if(t===e){ve=null;break}if(r=t.sibling,r!==null){r.return=t.return,ve=r;break}ve=t.return}}function n0(e){for(;ve!==null;){var t=ve;if(t===e){ve=null;break}var r=t.sibling;if(r!==null){r.return=t.return,ve=r;break}ve=t.return}}function o0(e){for(;ve!==null;){var t=ve;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{hu(4,t)}catch(c){at(t,r,c)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var o=t.return;try{n.componentDidMount()}catch(c){at(t,o,c)}}var i=t.return;try{lg(t)}catch(c){at(t,i,c)}break;case 5:var a=t.return;try{lg(t)}catch(c){at(t,a,c)}}}catch(c){at(t,t.return,c)}if(t===e){ve=null;break}var s=t.sibling;if(s!==null){s.return=t.return,ve=s;break}ve=t.return}}var V4=Math.ceil,jc=An.ReactCurrentDispatcher,Mp=An.ReactCurrentOwner,kr=An.ReactCurrentBatchConfig,_e=0,St=null,ft=null,Pt=0,lr=0,vi=uo(0),xt=0,xs=null,Bo=0,vu=0,Ap=0,Va=null,Yt=null,Dp=0,Di=1/0,Sn=null,Tc=!1,dg=null,Yn=null,ml=!1,Un=null,Oc=0,Wa=0,fg=null,Jl=-1,Ql=0;function Ut(){return _e&6?lt():Jl!==-1?Jl:Jl=lt()}function Zn(e){return e.mode&1?_e&2&&Pt!==0?Pt&-Pt:I4.transition!==null?(Ql===0&&(Ql=YS()),Ql):(e=He,e!==0||(e=window.event,e=e===void 0?16:o2(e.type)),e):1}function Kr(e,t,r,n){if(50<Wa)throw Wa=0,fg=null,Error(de(185));$s(e,r,n),(!(_e&2)||e!==St)&&(e===St&&(!(_e&2)&&(vu|=r),xt===4&&zn(e,Pt)),tr(e,n),r===1&&_e===0&&!(t.mode&1)&&(Di=lt()+500,gu&&fo()))}function tr(e,t){var r=e.callbackNode;I8(e,t);var n=cc(e,e===St?Pt:0);if(n===0)r!==null&&gv(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&gv(r),t===1)e.tag===0?O4(i0.bind(null,e)):w2(i0.bind(null,e)),C4(function(){!(_e&6)&&fo()}),r=null;else{switch(ZS(n)){case 1:r=sp;break;case 4:r=JS;break;case 16:r=lc;break;case 536870912:r=QS;break;default:r=lc}r=SC(r,pC.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function pC(e,t){if(Jl=-1,Ql=0,_e&6)throw Error(de(327));var r=e.callbackNode;if(Oi()&&e.callbackNode!==r)return null;var n=cc(e,e===St?Pt:0);if(n===0)return null;if(n&30||n&e.expiredLanes||t)t=Ic(e,n);else{t=n;var o=_e;_e|=2;var i=hC();(St!==e||Pt!==t)&&(Sn=null,Di=lt()+500,No(e,t));do try{G4();break}catch(s){mC(e,s)}while(!0);bp(),jc.current=i,_e=o,ft!==null?t=0:(St=null,Pt=0,t=xt)}if(t!==0){if(t===2&&(o=Ff(e),o!==0&&(n=o,t=gg(e,o))),t===1)throw r=xs,No(e,0),zn(e,n),tr(e,lt()),r;if(t===6)zn(e,n);else{if(o=e.current.alternate,!(n&30)&&!W4(o)&&(t=Ic(e,n),t===2&&(i=Ff(e),i!==0&&(n=i,t=gg(e,i))),t===1))throw r=xs,No(e,0),zn(e,n),tr(e,lt()),r;switch(e.finishedWork=o,e.finishedLanes=n,t){case 0:case 1:throw Error(de(345));case 2:Co(e,Yt,Sn);break;case 3:if(zn(e,n),(n&130023424)===n&&(t=Dp+500-lt(),10<t)){if(cc(e,0)!==0)break;if(o=e.suspendedLanes,(o&n)!==n){Ut(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Gf(Co.bind(null,e,Yt,Sn),t);break}Co(e,Yt,Sn);break;case 4:if(zn(e,n),(n&4194240)===n)break;for(t=e.eventTimes,o=-1;0<n;){var a=31-Gr(n);i=1<<a,a=t[a],a>o&&(o=a),n&=~i}if(n=o,n=lt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*V4(n/1960))-n,10<n){e.timeoutHandle=Gf(Co.bind(null,e,Yt,Sn),n);break}Co(e,Yt,Sn);break;case 5:Co(e,Yt,Sn);break;default:throw Error(de(329))}}}return tr(e,lt()),e.callbackNode===r?pC.bind(null,e):null}function gg(e,t){var r=Va;return e.current.memoizedState.isDehydrated&&(No(e,t).flags|=256),e=Ic(e,t),e!==2&&(t=Yt,Yt=r,t!==null&&pg(t)),e}function pg(e){Yt===null?Yt=e:Yt.push.apply(Yt,e)}function W4(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var o=r[n],i=o.getSnapshot;o=o.value;try{if(!Qr(i(),o))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function zn(e,t){for(t&=~Ap,t&=~vu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Gr(t),n=1<<r;e[r]=-1,t&=~n}}function i0(e){if(_e&6)throw Error(de(327));Oi();var t=cc(e,0);if(!(t&1))return tr(e,lt()),null;var r=Ic(e,t);if(e.tag!==0&&r===2){var n=Ff(e);n!==0&&(t=n,r=gg(e,n))}if(r===1)throw r=xs,No(e,0),zn(e,t),tr(e,lt()),r;if(r===6)throw Error(de(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Co(e,Yt,Sn),tr(e,lt()),null}function Rp(e,t){var r=_e;_e|=1;try{return e(t)}finally{_e=r,_e===0&&(Di=lt()+500,gu&&fo())}}function zo(e){Un!==null&&Un.tag===0&&!(_e&6)&&Oi();var t=_e;_e|=1;var r=kr.transition,n=He;try{if(kr.transition=null,He=1,e)return e()}finally{He=n,kr.transition=r,_e=t,!(_e&6)&&fo()}}function Lp(){lr=vi.current,Ze(vi)}function No(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,S4(r)),ft!==null)for(r=ft.return;r!==null;){var n=r;switch(vp(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&pc();break;case 3:Mi(),Ze(Xt),Ze(Ft),Op();break;case 5:Tp(n);break;case 4:Mi();break;case 13:Ze(nt);break;case 19:Ze(nt);break;case 10:Sp(n.type._context);break;case 22:case 23:Lp()}r=r.return}if(St=e,ft=e=Xn(e.current,null),Pt=lr=t,xt=0,xs=null,Ap=vu=Bo=0,Yt=Va=null,Eo!==null){for(t=0;t<Eo.length;t++)if(r=Eo[t],n=r.interleaved,n!==null){r.interleaved=null;var o=n.next,i=r.pending;if(i!==null){var a=i.next;i.next=o,n.next=a}r.pending=n}Eo=null}return e}function mC(e,t){do{var r=ft;try{if(bp(),ql.current=wc,Cc){for(var n=ot.memoizedState;n!==null;){var o=n.queue;o!==null&&(o.pending=null),n=n.next}Cc=!1}if(Fo=0,bt=vt=ot=null,Ha=!1,ms=0,Mp.current=null,r===null||r.return===null){xt=1,xs=t,ft=null;break}e:{var i=e,a=r.return,s=r,c=t;if(t=Pt,s.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,f=s,d=f.tag;if(!(f.mode&1)&&(d===0||d===11||d===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=qv(a);if(p!==null){p.flags&=-257,Gv(p,a,s,i,t),p.mode&1&&Wv(i,u,t),t=p,c=u;var m=t.updateQueue;if(m===null){var h=new Set;h.add(c),t.updateQueue=h}else m.add(c);break e}else{if(!(t&1)){Wv(i,u,t),_p();break e}c=Error(de(426))}}else if(et&&s.mode&1){var y=qv(a);if(y!==null){!(y.flags&65536)&&(y.flags|=256),Gv(y,a,s,i,t),xp(Ai(c,s));break e}}i=c=Ai(c,s),xt!==4&&(xt=2),Va===null?Va=[i]:Va.push(i),i=a;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var v=Z2(i,c,t);Fv(i,v);break e;case 1:s=c;var x=i.type,S=i.stateNode;if(!(i.flags&128)&&(typeof x.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(Yn===null||!Yn.has(S)))){i.flags|=65536,t&=-t,i.lanes|=t;var I=X2(i,s,t);Fv(i,I);break e}}i=i.return}while(i!==null)}xC(r)}catch(k){t=k,ft===r&&r!==null&&(ft=r=r.return);continue}break}while(!0)}function hC(){var e=jc.current;return jc.current=wc,e===null?wc:e}function _p(){(xt===0||xt===3||xt===2)&&(xt=4),St===null||!(Bo&268435455)&&!(vu&268435455)||zn(St,Pt)}function Ic(e,t){var r=_e;_e|=2;var n=hC();(St!==e||Pt!==t)&&(Sn=null,No(e,t));do try{q4();break}catch(o){mC(e,o)}while(!0);if(bp(),_e=r,jc.current=n,ft!==null)throw Error(de(261));return St=null,Pt=0,xt}function q4(){for(;ft!==null;)vC(ft)}function G4(){for(;ft!==null&&!x8();)vC(ft)}function vC(e){var t=bC(e.alternate,e,lr);e.memoizedProps=e.pendingProps,t===null?xC(e):ft=t,Mp.current=null}function xC(e){var t=e;do{var r=t.alternate;if(e=t.return,t.flags&32768){if(r=B4(r,t),r!==null){r.flags&=32767,ft=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{xt=6,ft=null;return}}else if(r=F4(r,t,lr),r!==null){ft=r;return}if(t=t.sibling,t!==null){ft=t;return}ft=t=e}while(t!==null);xt===0&&(xt=5)}function Co(e,t,r){var n=He,o=kr.transition;try{kr.transition=null,He=1,K4(e,t,r,n)}finally{kr.transition=o,He=n}return null}function K4(e,t,r,n){do Oi();while(Un!==null);if(_e&6)throw Error(de(327));r=e.finishedWork;var o=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(de(177));e.callbackNode=null,e.callbackPriority=0;var i=r.lanes|r.childLanes;if(E8(e,i),e===St&&(ft=St=null,Pt=0),!(r.subtreeFlags&2064)&&!(r.flags&2064)||ml||(ml=!0,SC(lc,function(){return Oi(),null})),i=(r.flags&15990)!==0,r.subtreeFlags&15990||i){i=kr.transition,kr.transition=null;var a=He;He=1;var s=_e;_e|=4,Mp.current=null,H4(e,r),fC(r,e),p4(Wf),uc=!!Vf,Wf=Vf=null,e.current=r,U4(r),y8(),_e=s,He=a,kr.transition=i}else e.current=r;if(ml&&(ml=!1,Un=e,Oc=o),i=e.pendingLanes,i===0&&(Yn=null),C8(r.stateNode),tr(e,lt()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)o=t[r],n(o.value,{componentStack:o.stack,digest:o.digest});if(Tc)throw Tc=!1,e=dg,dg=null,e;return Oc&1&&e.tag!==0&&Oi(),i=e.pendingLanes,i&1?e===fg?Wa++:(Wa=0,fg=e):Wa=0,fo(),null}function Oi(){if(Un!==null){var e=ZS(Oc),t=kr.transition,r=He;try{if(kr.transition=null,He=16>e?16:e,Un===null)var n=!1;else{if(e=Un,Un=null,Oc=0,_e&6)throw Error(de(331));var o=_e;for(_e|=4,ve=e.current;ve!==null;){var i=ve,a=i.child;if(ve.flags&16){var s=i.deletions;if(s!==null){for(var c=0;c<s.length;c++){var u=s[c];for(ve=u;ve!==null;){var f=ve;switch(f.tag){case 0:case 11:case 15:Ua(8,f,i)}var d=f.child;if(d!==null)d.return=f,ve=d;else for(;ve!==null;){f=ve;var g=f.sibling,p=f.return;if(cC(f),f===u){ve=null;break}if(g!==null){g.return=p,ve=g;break}ve=p}}}var m=i.alternate;if(m!==null){var h=m.child;if(h!==null){m.child=null;do{var y=h.sibling;h.sibling=null,h=y}while(h!==null)}}ve=i}}if(i.subtreeFlags&2064&&a!==null)a.return=i,ve=a;else e:for(;ve!==null;){if(i=ve,i.flags&2048)switch(i.tag){case 0:case 11:case 15:Ua(9,i,i.return)}var v=i.sibling;if(v!==null){v.return=i.return,ve=v;break e}ve=i.return}}var x=e.current;for(ve=x;ve!==null;){a=ve;var S=a.child;if(a.subtreeFlags&2064&&S!==null)S.return=a,ve=S;else e:for(a=x;ve!==null;){if(s=ve,s.flags&2048)try{switch(s.tag){case 0:case 11:case 15:hu(9,s)}}catch(k){at(s,s.return,k)}if(s===a){ve=null;break e}var I=s.sibling;if(I!==null){I.return=s.return,ve=I;break e}ve=s.return}}if(_e=o,fo(),xn&&typeof xn.onPostCommitFiberRoot=="function")try{xn.onPostCommitFiberRoot(lu,e)}catch{}n=!0}return n}finally{He=r,kr.transition=t}}return!1}function a0(e,t,r){t=Ai(r,t),t=Z2(e,t,1),e=Qn(e,t,1),t=Ut(),e!==null&&($s(e,1,t),tr(e,t))}function at(e,t,r){if(e.tag===3)a0(e,e,r);else for(;t!==null;){if(t.tag===3){a0(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(Yn===null||!Yn.has(n))){e=Ai(r,e),e=X2(t,e,1),t=Qn(t,e,1),e=Ut(),t!==null&&($s(t,1,e),tr(t,e));break}}t=t.return}}function J4(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ut(),e.pingedLanes|=e.suspendedLanes&r,St===e&&(Pt&r)===r&&(xt===4||xt===3&&(Pt&130023424)===Pt&&500>lt()-Dp?No(e,0):Ap|=r),tr(e,t)}function yC(e,t){t===0&&(e.mode&1?(t=il,il<<=1,!(il&130023424)&&(il=4194304)):t=1);var r=Ut();e=$n(e,t),e!==null&&($s(e,t,r),tr(e,r))}function Q4(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),yC(e,r)}function Y4(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,o=e.memoizedState;o!==null&&(r=o.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(de(314))}n!==null&&n.delete(t),yC(e,r)}var bC;bC=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||Xt.current)Zt=!0;else{if(!(e.lanes&r)&&!(t.flags&128))return Zt=!1,_4(e,t,r);Zt=!!(e.flags&131072)}else Zt=!1,et&&t.flags&1048576&&j2(t,vc,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Kl(e,t),e=t.pendingProps;var o=$i(t,Ft.current);Ti(t,r),o=Ep(null,t,n,e,o,r);var i=Pp();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,er(n)?(i=!0,mc(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,wp(t),o.updater=mu,t.stateNode=o,o._reactInternals=t,eg(t,n,e,r),t=ng(null,t,n,!0,i,r)):(t.tag=0,et&&i&&hp(t),Ht(null,t,o,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Kl(e,t),e=t.pendingProps,o=n._init,n=o(n._payload),t.type=n,o=t.tag=X4(n),e=Br(n,e),o){case 0:t=rg(null,t,n,e,r);break e;case 1:t=Qv(null,t,n,e,r);break e;case 11:t=Kv(null,t,n,e,r);break e;case 14:t=Jv(null,t,n,Br(n.type,e),r);break e}throw Error(de(306,n,""))}return t;case 0:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Br(n,o),rg(e,t,n,o,r);case 1:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Br(n,o),Qv(e,t,n,o,r);case 3:e:{if(nC(t),e===null)throw Error(de(387));n=t.pendingProps,i=t.memoizedState,o=i.element,$2(e,t),bc(t,n,null,r);var a=t.memoizedState;if(n=a.element,i.isDehydrated)if(i={element:n,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Ai(Error(de(423)),t),t=Yv(e,t,n,r,o);break e}else if(n!==o){o=Ai(Error(de(424)),t),t=Yv(e,t,n,r,o);break e}else for(cr=Jn(t.stateNode.containerInfo.firstChild),gr=t,et=!0,Vr=null,r=E2(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(ki(),n===o){t=kn(e,t,r);break e}Ht(e,t,n,r)}t=t.child}return t;case 5:return k2(t),e===null&&Yf(t),n=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,a=o.children,qf(n,o)?a=null:i!==null&&qf(n,i)&&(t.flags|=32),rC(e,t),Ht(e,t,a,r),t.child;case 6:return e===null&&Yf(t),null;case 13:return oC(e,t,r);case 4:return jp(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Ni(t,null,n,r):Ht(e,t,n,r),t.child;case 11:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Br(n,o),Kv(e,t,n,o,r);case 7:return Ht(e,t,t.pendingProps,r),t.child;case 8:return Ht(e,t,t.pendingProps.children,r),t.child;case 12:return Ht(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,o=t.pendingProps,i=t.memoizedProps,a=o.value,Je(xc,n._currentValue),n._currentValue=a,i!==null)if(Qr(i.value,a)){if(i.children===o.children&&!Xt.current){t=kn(e,t,r);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var s=i.dependencies;if(s!==null){a=i.child;for(var c=s.firstContext;c!==null;){if(c.context===n){if(i.tag===1){c=In(-1,r&-r),c.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var f=u.pending;f===null?c.next=c:(c.next=f.next,f.next=c),u.pending=c}}i.lanes|=r,c=i.alternate,c!==null&&(c.lanes|=r),Zf(i.return,r,t),s.lanes|=r;break}c=c.next}}else if(i.tag===10)a=i.type===t.type?null:i.child;else if(i.tag===18){if(a=i.return,a===null)throw Error(de(341));a.lanes|=r,s=a.alternate,s!==null&&(s.lanes|=r),Zf(a,r,t),a=i.sibling}else a=i.child;if(a!==null)a.return=i;else for(a=i;a!==null;){if(a===t){a=null;break}if(i=a.sibling,i!==null){i.return=a.return,a=i;break}a=a.return}i=a}Ht(e,t,o.children,r),t=t.child}return t;case 9:return o=t.type,n=t.pendingProps.children,Ti(t,r),o=Ar(o),n=n(o),t.flags|=1,Ht(e,t,n,r),t.child;case 14:return n=t.type,o=Br(n,t.pendingProps),o=Br(n.type,o),Jv(e,t,n,o,r);case 15:return eC(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,o=t.pendingProps,o=t.elementType===n?o:Br(n,o),Kl(e,t),t.tag=1,er(n)?(e=!0,mc(t)):e=!1,Ti(t,r),Y2(t,n,o),eg(t,n,o,r),ng(null,t,n,!0,e,r);case 19:return iC(e,t,r);case 22:return tC(e,t,r)}throw Error(de(156,t.tag))};function SC(e,t){return KS(e,t)}function Z4(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Er(e,t,r,n){return new Z4(e,t,r,n)}function Fp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function X4(e){if(typeof e=="function")return Fp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===op)return 11;if(e===ip)return 14}return 2}function Xn(e,t){var r=e.alternate;return r===null?(r=Er(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function Yl(e,t,r,n,o,i){var a=2;if(n=e,typeof e=="function")Fp(e)&&(a=1);else if(typeof e=="string")a=5;else e:switch(e){case si:return Mo(r.children,o,i,t);case np:a=8,o|=8;break;case jf:return e=Er(12,r,t,o|2),e.elementType=jf,e.lanes=i,e;case Tf:return e=Er(13,r,t,o),e.elementType=Tf,e.lanes=i,e;case Of:return e=Er(19,r,t,o),e.elementType=Of,e.lanes=i,e;case kS:return xu(r,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case PS:a=10;break e;case $S:a=9;break e;case op:a=11;break e;case ip:a=14;break e;case _n:a=16,n=null;break e}throw Error(de(130,e==null?e:typeof e,""))}return t=Er(a,r,t,o),t.elementType=e,t.type=n,t.lanes=i,t}function Mo(e,t,r,n){return e=Er(7,e,n,t),e.lanes=r,e}function xu(e,t,r,n){return e=Er(22,e,n,t),e.elementType=kS,e.lanes=r,e.stateNode={isHidden:!1},e}function zd(e,t,r){return e=Er(6,e,null,t),e.lanes=r,e}function Hd(e,t,r){return t=Er(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function e6(e,t,r,n,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Cd(0),this.expirationTimes=Cd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Cd(0),this.identifierPrefix=n,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Bp(e,t,r,n,o,i,a,s,c){return e=new e6(e,t,r,s,c),t===1?(t=1,i===!0&&(t|=8)):t=0,i=Er(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},wp(i),e}function t6(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ai,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function CC(e){if(!e)return ao;e=e._reactInternals;e:{if(Jo(e)!==e||e.tag!==1)throw Error(de(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(er(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(de(171))}if(e.tag===1){var r=e.type;if(er(r))return C2(e,r,t)}return t}function wC(e,t,r,n,o,i,a,s,c){return e=Bp(r,n,!0,e,o,i,a,s,c),e.context=CC(null),r=e.current,n=Ut(),o=Zn(r),i=In(n,o),i.callback=t??null,Qn(r,i,o),e.current.lanes=o,$s(e,o,n),tr(e,n),e}function yu(e,t,r,n){var o=t.current,i=Ut(),a=Zn(o);return r=CC(r),t.context===null?t.context=r:t.pendingContext=r,t=In(i,a),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=Qn(o,t,a),e!==null&&(Kr(e,o,a,i),Wl(e,o,a)),a}function Ec(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function s0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function zp(e,t){s0(e,t),(e=e.alternate)&&s0(e,t)}function r6(){return null}var jC=typeof reportError=="function"?reportError:function(e){console.error(e)};function Hp(e){this._internalRoot=e}bu.prototype.render=Hp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(de(409));yu(e,t,null,null)};bu.prototype.unmount=Hp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;zo(function(){yu(null,e,null,null)}),t[Pn]=null}};function bu(e){this._internalRoot=e}bu.prototype.unstable_scheduleHydration=function(e){if(e){var t=t2();e={blockedOn:null,target:e,priority:t};for(var r=0;r<Bn.length&&t!==0&&t<Bn[r].priority;r++);Bn.splice(r,0,e),r===0&&n2(e)}};function Up(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Su(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function l0(){}function n6(e,t,r,n,o){if(o){if(typeof n=="function"){var i=n;n=function(){var u=Ec(a);i.call(u)}}var a=wC(t,n,e,0,null,!1,!1,"",l0);return e._reactRootContainer=a,e[Pn]=a.current,us(e.nodeType===8?e.parentNode:e),zo(),a}for(;o=e.lastChild;)e.removeChild(o);if(typeof n=="function"){var s=n;n=function(){var u=Ec(c);s.call(u)}}var c=Bp(e,0,!1,null,null,!1,!1,"",l0);return e._reactRootContainer=c,e[Pn]=c.current,us(e.nodeType===8?e.parentNode:e),zo(function(){yu(t,c,r,n)}),c}function Cu(e,t,r,n,o){var i=r._reactRootContainer;if(i){var a=i;if(typeof o=="function"){var s=o;o=function(){var c=Ec(a);s.call(c)}}yu(t,a,e,o)}else a=n6(r,t,e,o,n);return Ec(a)}XS=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Ma(t.pendingLanes);r!==0&&(lp(t,r|1),tr(t,lt()),!(_e&6)&&(Di=lt()+500,fo()))}break;case 13:zo(function(){var n=$n(e,1);if(n!==null){var o=Ut();Kr(n,e,1,o)}}),zp(e,1)}};cp=function(e){if(e.tag===13){var t=$n(e,134217728);if(t!==null){var r=Ut();Kr(t,e,134217728,r)}zp(e,134217728)}};e2=function(e){if(e.tag===13){var t=Zn(e),r=$n(e,t);if(r!==null){var n=Ut();Kr(r,e,t,n)}zp(e,t)}};t2=function(){return He};r2=function(e,t){var r=He;try{return He=e,t()}finally{He=r}};Rf=function(e,t,r){switch(t){case"input":if(Pf(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var o=fu(n);if(!o)throw Error(de(90));MS(n),Pf(n,o)}}}break;case"textarea":DS(e,r);break;case"select":t=r.value,t!=null&&Si(e,!!r.multiple,t,!1)}};HS=Rp;US=zo;var o6={usingClientEntryPoint:!1,Events:[Ns,di,fu,BS,zS,Rp]},Ca={findFiberByHostInstance:Io,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},i6={bundleType:Ca.bundleType,version:Ca.version,rendererPackageName:Ca.rendererPackageName,rendererConfig:Ca.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:An.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=qS(e),e===null?null:e.stateNode},findFiberByHostInstance:Ca.findFiberByHostInstance||r6,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hl.isDisabled&&hl.supportsFiber)try{lu=hl.inject(i6),xn=hl}catch{}}xr.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=o6;xr.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Up(t))throw Error(de(200));return t6(e,t,null,r)};xr.createRoot=function(e,t){if(!Up(e))throw Error(de(299));var r=!1,n="",o=jC;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Bp(e,1,!1,null,null,r,!1,n,o),e[Pn]=t.current,us(e.nodeType===8?e.parentNode:e),new Hp(t)};xr.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(de(188)):(e=Object.keys(e).join(","),Error(de(268,e)));return e=qS(t),e=e===null?null:e.stateNode,e};xr.flushSync=function(e){return zo(e)};xr.hydrate=function(e,t,r){if(!Su(t))throw Error(de(200));return Cu(null,e,t,!0,r)};xr.hydrateRoot=function(e,t,r){if(!Up(e))throw Error(de(405));var n=r!=null&&r.hydratedSources||null,o=!1,i="",a=jC;if(r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(i=r.identifierPrefix),r.onRecoverableError!==void 0&&(a=r.onRecoverableError)),t=wC(t,null,e,1,r??null,o,!1,i,a),e[Pn]=t.current,us(e),n)for(e=0;e<n.length;e++)r=n[e],o=r._getVersion,o=o(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,o]:t.mutableSourceEagerHydrationData.push(r,o);return new bu(t)};xr.render=function(e,t,r){if(!Su(t))throw Error(de(200));return Cu(null,e,t,!1,r)};xr.unmountComponentAtNode=function(e){if(!Su(e))throw Error(de(40));return e._reactRootContainer?(zo(function(){Cu(null,null,e,!1,function(){e._reactRootContainer=null,e[Pn]=null})}),!0):!1};xr.unstable_batchedUpdates=Rp;xr.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!Su(r))throw Error(de(200));if(e==null||e._reactInternals===void 0)throw Error(de(38));return Cu(e,t,r,!1,n)};xr.version="18.3.1-next-f1338f8080-20240426";function TC(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(TC)}catch(e){console.error(e)}}TC(),TS.exports=xr;var wu=TS.exports;const OC=gt(wu);var IC,c0=wu;IC=c0.createRoot,c0.hydrateRoot;var EC={exports:{}},Ue={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jt=typeof Symbol=="function"&&Symbol.for,Vp=jt?Symbol.for("react.element"):60103,Wp=jt?Symbol.for("react.portal"):60106,ju=jt?Symbol.for("react.fragment"):60107,Tu=jt?Symbol.for("react.strict_mode"):60108,Ou=jt?Symbol.for("react.profiler"):60114,Iu=jt?Symbol.for("react.provider"):60109,Eu=jt?Symbol.for("react.context"):60110,qp=jt?Symbol.for("react.async_mode"):60111,Pu=jt?Symbol.for("react.concurrent_mode"):60111,$u=jt?Symbol.for("react.forward_ref"):60112,ku=jt?Symbol.for("react.suspense"):60113,a6=jt?Symbol.for("react.suspense_list"):60120,Nu=jt?Symbol.for("react.memo"):60115,Mu=jt?Symbol.for("react.lazy"):60116,s6=jt?Symbol.for("react.block"):60121,l6=jt?Symbol.for("react.fundamental"):60117,c6=jt?Symbol.for("react.responder"):60118,u6=jt?Symbol.for("react.scope"):60119;function br(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Vp:switch(e=e.type,e){case qp:case Pu:case ju:case Ou:case Tu:case ku:return e;default:switch(e=e&&e.$$typeof,e){case Eu:case $u:case Mu:case Nu:case Iu:return e;default:return t}}case Wp:return t}}}function PC(e){return br(e)===Pu}Ue.AsyncMode=qp;Ue.ConcurrentMode=Pu;Ue.ContextConsumer=Eu;Ue.ContextProvider=Iu;Ue.Element=Vp;Ue.ForwardRef=$u;Ue.Fragment=ju;Ue.Lazy=Mu;Ue.Memo=Nu;Ue.Portal=Wp;Ue.Profiler=Ou;Ue.StrictMode=Tu;Ue.Suspense=ku;Ue.isAsyncMode=function(e){return PC(e)||br(e)===qp};Ue.isConcurrentMode=PC;Ue.isContextConsumer=function(e){return br(e)===Eu};Ue.isContextProvider=function(e){return br(e)===Iu};Ue.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Vp};Ue.isForwardRef=function(e){return br(e)===$u};Ue.isFragment=function(e){return br(e)===ju};Ue.isLazy=function(e){return br(e)===Mu};Ue.isMemo=function(e){return br(e)===Nu};Ue.isPortal=function(e){return br(e)===Wp};Ue.isProfiler=function(e){return br(e)===Ou};Ue.isStrictMode=function(e){return br(e)===Tu};Ue.isSuspense=function(e){return br(e)===ku};Ue.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ju||e===Pu||e===Ou||e===Tu||e===ku||e===a6||typeof e=="object"&&e!==null&&(e.$$typeof===Mu||e.$$typeof===Nu||e.$$typeof===Iu||e.$$typeof===Eu||e.$$typeof===$u||e.$$typeof===l6||e.$$typeof===c6||e.$$typeof===u6||e.$$typeof===s6)};Ue.typeOf=br;EC.exports=Ue;var Gp=EC.exports;function d6(e){function t(H,Q,U,G,$){for(var w=0,b=0,W=0,L=0,re,ie,ge=0,se=0,ae,ye=ae=re=0,me=0,ue=0,Se=0,he=0,Ce=U.length,Ve=Ce-1,ze,be="",Oe="",st="",pt="",Fe;me<Ce;){if(ie=U.charCodeAt(me),me===Ve&&b+L+W+w!==0&&(b!==0&&(ie=b===47?10:47),L=W=w=0,Ce++,Ve++),b+L+W+w===0){if(me===Ve&&(0<ue&&(be=be.replace(g,"")),0<be.trim().length)){switch(ie){case 32:case 9:case 59:case 13:case 10:break;default:be+=U.charAt(me)}ie=59}switch(ie){case 123:for(be=be.trim(),re=be.charCodeAt(0),ae=1,he=++me;me<Ce;){switch(ie=U.charCodeAt(me)){case 123:ae++;break;case 125:ae--;break;case 47:switch(ie=U.charCodeAt(me+1)){case 42:case 47:e:{for(ye=me+1;ye<Ve;++ye)switch(U.charCodeAt(ye)){case 47:if(ie===42&&U.charCodeAt(ye-1)===42&&me+2!==ye){me=ye+1;break e}break;case 10:if(ie===47){me=ye+1;break e}}me=ye}}break;case 91:ie++;case 40:ie++;case 34:case 39:for(;me++<Ve&&U.charCodeAt(me)!==ie;);}if(ae===0)break;me++}switch(ae=U.substring(he,me),re===0&&(re=(be=be.replace(d,"").trim()).charCodeAt(0)),re){case 64:switch(0<ue&&(be=be.replace(g,"")),ie=be.charCodeAt(1),ie){case 100:case 109:case 115:case 45:ue=Q;break;default:ue=K}if(ae=t(Q,ue,ae,ie,$+1),he=ae.length,0<R&&(ue=r(K,be,Se),Fe=s(3,ae,ue,Q,Y,Z,he,ie,$,G),be=ue.join(""),Fe!==void 0&&(he=(ae=Fe.trim()).length)===0&&(ie=0,ae="")),0<he)switch(ie){case 115:be=be.replace(T,a);case 100:case 109:case 45:ae=be+"{"+ae+"}";break;case 107:be=be.replace(x,"$1 $2"),ae=be+"{"+ae+"}",ae=J===1||J===2&&i("@"+ae,3)?"@-webkit-"+ae+"@"+ae:"@"+ae;break;default:ae=be+ae,G===112&&(ae=(Oe+=ae,""))}else ae="";break;default:ae=t(Q,r(Q,be,Se),ae,G,$+1)}st+=ae,ae=Se=ue=ye=re=0,be="",ie=U.charCodeAt(++me);break;case 125:case 59:if(be=(0<ue?be.replace(g,""):be).trim(),1<(he=be.length))switch(ye===0&&(re=be.charCodeAt(0),re===45||96<re&&123>re)&&(he=(be=be.replace(" ",":")).length),0<R&&(Fe=s(1,be,Q,H,Y,Z,Oe.length,G,$,G))!==void 0&&(he=(be=Fe.trim()).length)===0&&(be="\0\0"),re=be.charCodeAt(0),ie=be.charCodeAt(1),re){case 0:break;case 64:if(ie===105||ie===99){pt+=be+U.charAt(me);break}default:be.charCodeAt(he-1)!==58&&(Oe+=o(be,re,ie,be.charCodeAt(2)))}Se=ue=ye=re=0,be="",ie=U.charCodeAt(++me)}}switch(ie){case 13:case 10:b===47?b=0:1+re===0&&G!==107&&0<be.length&&(ue=1,be+="\0"),0<R*B&&s(0,be,Q,H,Y,Z,Oe.length,G,$,G),Z=1,Y++;break;case 59:case 125:if(b+L+W+w===0){Z++;break}default:switch(Z++,ze=U.charAt(me),ie){case 9:case 32:if(L+w+b===0)switch(ge){case 44:case 58:case 9:case 32:ze="";break;default:ie!==32&&(ze=" ")}break;case 0:ze="\\0";break;case 12:ze="\\f";break;case 11:ze="\\v";break;case 38:L+b+w===0&&(ue=Se=1,ze="\f"+ze);break;case 108:if(L+b+w+z===0&&0<ye)switch(me-ye){case 2:ge===112&&U.charCodeAt(me-3)===58&&(z=ge);case 8:se===111&&(z=se)}break;case 58:L+b+w===0&&(ye=me);break;case 44:b+W+L+w===0&&(ue=1,ze+="\r");break;case 34:case 39:b===0&&(L=L===ie?0:L===0?ie:L);break;case 91:L+b+W===0&&w++;break;case 93:L+b+W===0&&w--;break;case 41:L+b+w===0&&W--;break;case 40:if(L+b+w===0){if(re===0)switch(2*ge+3*se){case 533:break;default:re=1}W++}break;case 64:b+W+L+w+ye+ae===0&&(ae=1);break;case 42:case 47:if(!(0<L+w+W))switch(b){case 0:switch(2*ie+3*U.charCodeAt(me+1)){case 235:b=47;break;case 220:he=me,b=42}break;case 42:ie===47&&ge===42&&he+2!==me&&(U.charCodeAt(he+2)===33&&(Oe+=U.substring(he,me+1)),ze="",b=0)}}b===0&&(be+=ze)}se=ge,ge=ie,me++}if(he=Oe.length,0<he){if(ue=Q,0<R&&(Fe=s(2,Oe,ue,H,Y,Z,he,G,$,G),Fe!==void 0&&(Oe=Fe).length===0))return pt+Oe+st;if(Oe=ue.join(",")+"{"+Oe+"}",J*z!==0){switch(J!==2||i(Oe,2)||(z=0),z){case 111:Oe=Oe.replace(I,":-moz-$1")+Oe;break;case 112:Oe=Oe.replace(S,"::-webkit-input-$1")+Oe.replace(S,"::-moz-$1")+Oe.replace(S,":-ms-input-$1")+Oe}z=0}}return pt+Oe+st}function r(H,Q,U){var G=Q.trim().split(y);Q=G;var $=G.length,w=H.length;switch(w){case 0:case 1:var b=0;for(H=w===0?"":H[0]+" ";b<$;++b)Q[b]=n(H,Q[b],U).trim();break;default:var W=b=0;for(Q=[];b<$;++b)for(var L=0;L<w;++L)Q[W++]=n(H[L]+" ",G[b],U).trim()}return Q}function n(H,Q,U){var G=Q.charCodeAt(0);switch(33>G&&(G=(Q=Q.trim()).charCodeAt(0)),G){case 38:return Q.replace(v,"$1"+H.trim());case 58:return H.trim()+Q.replace(v,"$1"+H.trim());default:if(0<1*U&&0<Q.indexOf("\f"))return Q.replace(v,(H.charCodeAt(0)===58?"":"$1")+H.trim())}return H+Q}function o(H,Q,U,G){var $=H+";",w=2*Q+3*U+4*G;if(w===944){H=$.indexOf(":",9)+1;var b=$.substring(H,$.length-1).trim();return b=$.substring(0,H).trim()+b+";",J===1||J===2&&i(b,1)?"-webkit-"+b+b:b}if(J===0||J===2&&!i($,1))return $;switch(w){case 1015:return $.charCodeAt(10)===97?"-webkit-"+$+$:$;case 951:return $.charCodeAt(3)===116?"-webkit-"+$+$:$;case 963:return $.charCodeAt(5)===110?"-webkit-"+$+$:$;case 1009:if($.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+$+$;case 978:return"-webkit-"+$+"-moz-"+$+$;case 1019:case 983:return"-webkit-"+$+"-moz-"+$+"-ms-"+$+$;case 883:if($.charCodeAt(8)===45)return"-webkit-"+$+$;if(0<$.indexOf("image-set(",11))return $.replace(V,"$1-webkit-$2")+$;break;case 932:if($.charCodeAt(4)===45)switch($.charCodeAt(5)){case 103:return"-webkit-box-"+$.replace("-grow","")+"-webkit-"+$+"-ms-"+$.replace("grow","positive")+$;case 115:return"-webkit-"+$+"-ms-"+$.replace("shrink","negative")+$;case 98:return"-webkit-"+$+"-ms-"+$.replace("basis","preferred-size")+$}return"-webkit-"+$+"-ms-"+$+$;case 964:return"-webkit-"+$+"-ms-flex-"+$+$;case 1023:if($.charCodeAt(8)!==99)break;return b=$.substring($.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+b+"-webkit-"+$+"-ms-flex-pack"+b+$;case 1005:return m.test($)?$.replace(p,":-webkit-")+$.replace(p,":-moz-")+$:$;case 1e3:switch(b=$.substring(13).trim(),Q=b.indexOf("-")+1,b.charCodeAt(0)+b.charCodeAt(Q)){case 226:b=$.replace(k,"tb");break;case 232:b=$.replace(k,"tb-rl");break;case 220:b=$.replace(k,"lr");break;default:return $}return"-webkit-"+$+"-ms-"+b+$;case 1017:if($.indexOf("sticky",9)===-1)break;case 975:switch(Q=($=H).length-10,b=($.charCodeAt(Q)===33?$.substring(0,Q):$).substring(H.indexOf(":",7)+1).trim(),w=b.charCodeAt(0)+(b.charCodeAt(7)|0)){case 203:if(111>b.charCodeAt(8))break;case 115:$=$.replace(b,"-webkit-"+b)+";"+$;break;case 207:case 102:$=$.replace(b,"-webkit-"+(102<w?"inline-":"")+"box")+";"+$.replace(b,"-webkit-"+b)+";"+$.replace(b,"-ms-"+b+"box")+";"+$}return $+";";case 938:if($.charCodeAt(5)===45)switch($.charCodeAt(6)){case 105:return b=$.replace("-items",""),"-webkit-"+$+"-webkit-box-"+b+"-ms-flex-"+b+$;case 115:return"-webkit-"+$+"-ms-flex-item-"+$.replace(N,"")+$;default:return"-webkit-"+$+"-ms-flex-line-pack"+$.replace("align-content","").replace(N,"")+$}break;case 973:case 989:if($.charCodeAt(3)!==45||$.charCodeAt(4)===122)break;case 931:case 953:if(F.test(H)===!0)return(b=H.substring(H.indexOf(":")+1)).charCodeAt(0)===115?o(H.replace("stretch","fill-available"),Q,U,G).replace(":fill-available",":stretch"):$.replace(b,"-webkit-"+b)+$.replace(b,"-moz-"+b.replace("fill-",""))+$;break;case 962:if($="-webkit-"+$+($.charCodeAt(5)===102?"-ms-"+$:"")+$,U+G===211&&$.charCodeAt(13)===105&&0<$.indexOf("transform",10))return $.substring(0,$.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+$}return $}function i(H,Q){var U=H.indexOf(Q===1?":":"{"),G=H.substring(0,Q!==3?U:10);return U=H.substring(U+1,H.length-1),_(Q!==2?G:G.replace(j,"$1"),U,Q)}function a(H,Q){var U=o(Q,Q.charCodeAt(0),Q.charCodeAt(1),Q.charCodeAt(2));return U!==Q+";"?U.replace(P," or ($1)").substring(4):"("+Q+")"}function s(H,Q,U,G,$,w,b,W,L,re){for(var ie=0,ge=Q,se;ie<R;++ie)switch(se=M[ie].call(f,H,ge,U,G,$,w,b,W,L,re)){case void 0:case!1:case!0:case null:break;default:ge=se}if(ge!==Q)return ge}function c(H){switch(H){case void 0:case null:R=M.length=0;break;default:if(typeof H=="function")M[R++]=H;else if(typeof H=="object")for(var Q=0,U=H.length;Q<U;++Q)c(H[Q]);else B=!!H|0}return c}function u(H){return H=H.prefix,H!==void 0&&(_=null,H?typeof H!="function"?J=1:(J=2,_=H):J=0),u}function f(H,Q){var U=H;if(33>U.charCodeAt(0)&&(U=U.trim()),q=U,U=[q],0<R){var G=s(-1,Q,U,U,Y,Z,0,0,0,0);G!==void 0&&typeof G=="string"&&(Q=G)}var $=t(K,U,Q,0,0);return 0<R&&(G=s(-2,$,U,U,Y,Z,$.length,0,0,0),G!==void 0&&($=G)),q="",z=0,Z=Y=1,$}var d=/^\0+/g,g=/[\0\r\f]/g,p=/: */g,m=/zoo|gra/,h=/([,: ])(transform)/g,y=/,\r+?/g,v=/([\t\r\n ])*\f?&/g,x=/@(k\w+)\s*(\S*)\s*/,S=/::(place)/g,I=/:(read-only)/g,k=/[svh]\w+-[tblr]{2}/,T=/\(\s*(.*)\s*\)/g,P=/([\s\S]*?);/g,N=/-self|flex-/g,j=/[^]*?(:[rp][el]a[\w-]+)[^]*/,F=/stretch|:\s*\w+\-(?:conte|avail)/,V=/([^-])(image-set\()/,Z=1,Y=1,z=0,J=1,K=[],M=[],R=0,_=null,B=0,q="";return f.use=c,f.set=u,e!==void 0&&u(e),f}var f6={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function g6(e){var t=Object.create(null);return function(r){return t[r]===void 0&&(t[r]=e(r)),t[r]}}var p6=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,u0=g6(function(e){return p6.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Kp=Gp,m6={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},h6={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},v6={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},$C={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Jp={};Jp[Kp.ForwardRef]=v6;Jp[Kp.Memo]=$C;function d0(e){return Kp.isMemo(e)?$C:Jp[e.$$typeof]||m6}var x6=Object.defineProperty,y6=Object.getOwnPropertyNames,f0=Object.getOwnPropertySymbols,b6=Object.getOwnPropertyDescriptor,S6=Object.getPrototypeOf,g0=Object.prototype;function kC(e,t,r){if(typeof t!="string"){if(g0){var n=S6(t);n&&n!==g0&&kC(e,n,r)}var o=y6(t);f0&&(o=o.concat(f0(t)));for(var i=d0(e),a=d0(t),s=0;s<o.length;++s){var c=o[s];if(!h6[c]&&!(r&&r[c])&&!(a&&a[c])&&!(i&&i[c])){var u=b6(t,c);try{x6(e,c,u)}catch{}}}}return e}var C6=kC;const Pc=gt(C6);var wr={};function Wr(){return(Wr=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var p0=function(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r},mg=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Gp.typeOf(e)},$c=Object.freeze([]),eo=Object.freeze({});function Ri(e){return typeof e=="function"}function m0(e){return e.displayName||e.name||"Component"}function Qp(e){return e&&typeof e.styledComponentId=="string"}var Li=typeof process<"u"&&wr!==void 0&&(wr.REACT_APP_SC_ATTR||wr.SC_ATTR)||"data-styled",Yp=typeof window<"u"&&"HTMLElement"in window,w6=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&wr!==void 0&&(wr.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&wr.REACT_APP_SC_DISABLE_SPEEDY!==""?wr.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&wr.REACT_APP_SC_DISABLE_SPEEDY:wr.SC_DISABLE_SPEEDY!==void 0&&wr.SC_DISABLE_SPEEDY!==""&&wr.SC_DISABLE_SPEEDY!=="false"&&wr.SC_DISABLE_SPEEDY)),j6={};function Ho(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(r.length>0?" Args: "+r.join(", "):""))}var T6=function(){function e(r){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=r}var t=e.prototype;return t.indexOfGroup=function(r){for(var n=0,o=0;o<r;o++)n+=this.groupSizes[o];return n},t.insertRules=function(r,n){if(r>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,a=i;r>=a;)(a<<=1)<0&&Ho(16,""+r);this.groupSizes=new Uint32Array(a),this.groupSizes.set(o),this.length=a;for(var s=i;s<a;s++)this.groupSizes[s]=0}for(var c=this.indexOfGroup(r+1),u=0,f=n.length;u<f;u++)this.tag.insertRule(c,n[u])&&(this.groupSizes[r]++,c++)},t.clearGroup=function(r){if(r<this.length){var n=this.groupSizes[r],o=this.indexOfGroup(r),i=o+n;this.groupSizes[r]=0;for(var a=o;a<i;a++)this.tag.deleteRule(o)}},t.getGroup=function(r){var n="";if(r>=this.length||this.groupSizes[r]===0)return n;for(var o=this.groupSizes[r],i=this.indexOfGroup(r),a=i+o,s=i;s<a;s++)n+=this.tag.getRule(s)+`/*!sc*/
`;return n},e}(),Zl=new Map,kc=new Map,qa=1,vl=function(e){if(Zl.has(e))return Zl.get(e);for(;kc.has(qa);)qa++;var t=qa++;return Zl.set(e,t),kc.set(t,e),t},O6=function(e){return kc.get(e)},I6=function(e,t){t>=qa&&(qa=t+1),Zl.set(e,t),kc.set(t,e)},E6="style["+Li+'][data-styled-version="5.3.11"]',P6=new RegExp("^"+Li+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),$6=function(e,t,r){for(var n,o=r.split(","),i=0,a=o.length;i<a;i++)(n=o[i])&&e.registerName(t,n)},k6=function(e,t){for(var r=(t.textContent||"").split(`/*!sc*/
`),n=[],o=0,i=r.length;o<i;o++){var a=r[o].trim();if(a){var s=a.match(P6);if(s){var c=0|parseInt(s[1],10),u=s[2];c!==0&&(I6(u,c),$6(e,u,s[3]),e.getTag().insertRules(c,n)),n.length=0}else n.push(a)}}},N6=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},NC=function(e){var t=document.head,r=e||t,n=document.createElement("style"),o=function(s){for(var c=s.childNodes,u=c.length;u>=0;u--){var f=c[u];if(f&&f.nodeType===1&&f.hasAttribute(Li))return f}}(r),i=o!==void 0?o.nextSibling:null;n.setAttribute(Li,"active"),n.setAttribute("data-styled-version","5.3.11");var a=N6();return a&&n.setAttribute("nonce",a),r.insertBefore(n,i),n},M6=function(){function e(r){var n=this.element=NC(r);n.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,a=0,s=i.length;a<s;a++){var c=i[a];if(c.ownerNode===o)return c}Ho(17)}(n),this.length=0}var t=e.prototype;return t.insertRule=function(r,n){try{return this.sheet.insertRule(n,r),this.length++,!0}catch{return!1}},t.deleteRule=function(r){this.sheet.deleteRule(r),this.length--},t.getRule=function(r){var n=this.sheet.cssRules[r];return n!==void 0&&typeof n.cssText=="string"?n.cssText:""},e}(),A6=function(){function e(r){var n=this.element=NC(r);this.nodes=n.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(r,n){if(r<=this.length&&r>=0){var o=document.createTextNode(n),i=this.nodes[r];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(r){this.element.removeChild(this.nodes[r]),this.length--},t.getRule=function(r){return r<this.length?this.nodes[r].textContent:""},e}(),D6=function(){function e(r){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(r,n){return r<=this.length&&(this.rules.splice(r,0,n),this.length++,!0)},t.deleteRule=function(r){this.rules.splice(r,1),this.length--},t.getRule=function(r){return r<this.length?this.rules[r]:""},e}(),h0=Yp,R6={isServer:!Yp,useCSSOMInjection:!w6},Nc=function(){function e(r,n,o){r===void 0&&(r=eo),n===void 0&&(n={}),this.options=Wr({},R6,{},r),this.gs=n,this.names=new Map(o),this.server=!!r.isServer,!this.server&&Yp&&h0&&(h0=!1,function(i){for(var a=document.querySelectorAll(E6),s=0,c=a.length;s<c;s++){var u=a[s];u&&u.getAttribute(Li)!=="active"&&(k6(i,u),u.parentNode&&u.parentNode.removeChild(u))}}(this))}e.registerId=function(r){return vl(r)};var t=e.prototype;return t.reconstructWithOptions=function(r,n){return n===void 0&&(n=!0),new e(Wr({},this.options,{},r),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(r){return this.gs[r]=(this.gs[r]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(n=this.options).isServer,i=n.useCSSOMInjection,a=n.target,r=o?new D6(a):i?new M6(a):new A6(a),new T6(r)));var r,n,o,i,a},t.hasNameForId=function(r,n){return this.names.has(r)&&this.names.get(r).has(n)},t.registerName=function(r,n){if(vl(r),this.names.has(r))this.names.get(r).add(n);else{var o=new Set;o.add(n),this.names.set(r,o)}},t.insertRules=function(r,n,o){this.registerName(r,n),this.getTag().insertRules(vl(r),o)},t.clearNames=function(r){this.names.has(r)&&this.names.get(r).clear()},t.clearRules=function(r){this.getTag().clearGroup(vl(r)),this.clearNames(r)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(r){for(var n=r.getTag(),o=n.length,i="",a=0;a<o;a++){var s=O6(a);if(s!==void 0){var c=r.names.get(s),u=n.getGroup(a);if(c&&u&&c.size){var f=Li+".g"+a+'[id="'+s+'"]',d="";c!==void 0&&c.forEach(function(g){g.length>0&&(d+=g+",")}),i+=""+u+f+'{content:"'+d+`"}/*!sc*/
`}}}return i}(this)},e}(),L6=/(a)(d)/gi,v0=function(e){return String.fromCharCode(e+(e>25?39:97))};function hg(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=v0(t%52)+r;return(v0(t%52)+r).replace(L6,"$1-$2")}var xi=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},MC=function(e){return xi(5381,e)};function AC(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(Ri(r)&&!Qp(r))return!1}return!0}var _6=MC("5.3.11"),F6=function(){function e(t,r,n){this.rules=t,this.staticRulesId="",this.isStatic=(n===void 0||n.isStatic)&&AC(t),this.componentId=r,this.baseHash=xi(_6,r),this.baseStyle=n,Nc.registerId(r)}return e.prototype.generateAndInjectStyles=function(t,r,n){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,r,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&r.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var a=Uo(this.rules,t,r,n).join(""),s=hg(xi(this.baseHash,a)>>>0);if(!r.hasNameForId(o,s)){var c=n(a,"."+s,void 0,o);r.insertRules(o,s,c)}i.push(s),this.staticRulesId=s}else{for(var u=this.rules.length,f=xi(this.baseHash,n.hash),d="",g=0;g<u;g++){var p=this.rules[g];if(typeof p=="string")d+=p;else if(p){var m=Uo(p,t,r,n),h=Array.isArray(m)?m.join(""):m;f=xi(f,h+g),d+=h}}if(d){var y=hg(f>>>0);if(!r.hasNameForId(o,y)){var v=n(d,"."+y,void 0,o);r.insertRules(o,y,v)}i.push(y)}}return i.join(" ")},e}(),B6=/^\s*\/\/.*$/gm,z6=[":","[",".","#"];function H6(e){var t,r,n,o,i=eo,a=i.options,s=a===void 0?eo:a,c=i.plugins,u=c===void 0?$c:c,f=new d6(s),d=[],g=function(h){function y(v){if(v)try{h(v+"}")}catch{}}return function(v,x,S,I,k,T,P,N,j,F){switch(v){case 1:if(j===0&&x.charCodeAt(0)===64)return h(x+";"),"";break;case 2:if(N===0)return x+"/*|*/";break;case 3:switch(N){case 102:case 112:return h(S[0]+x),"";default:return x+(F===0?"/*|*/":"")}case-2:x.split("/*|*/}").forEach(y)}}}(function(h){d.push(h)}),p=function(h,y,v){return y===0&&z6.indexOf(v[r.length])!==-1||v.match(o)?h:"."+t};function m(h,y,v,x){x===void 0&&(x="&");var S=h.replace(B6,""),I=y&&v?v+" "+y+" { "+S+" }":S;return t=x,r=y,n=new RegExp("\\"+r+"\\b","g"),o=new RegExp("(\\"+r+"\\b){2,}"),f(v||!y?"":y,I)}return f.use([].concat(u,[function(h,y,v){h===2&&v.length&&v[0].lastIndexOf(r)>0&&(v[0]=v[0].replace(n,p))},g,function(h){if(h===-2){var y=d;return d=[],y}}])),m.hash=u.length?u.reduce(function(h,y){return y.name||Ho(15),xi(h,y.name)},5381).toString():"",m}var DC=le.createContext();DC.Consumer;var RC=le.createContext(),U6=(RC.Consumer,new Nc),vg=H6();function LC(){return O.useContext(DC)||U6}function _C(){return O.useContext(RC)||vg}var FC=function(){function e(t,r){var n=this;this.inject=function(o,i){i===void 0&&(i=vg);var a=n.name+i.hash;o.hasNameForId(n.id,a)||o.insertRules(n.id,a,i(n.rules,a,"@keyframes"))},this.toString=function(){return Ho(12,String(n.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=r}return e.prototype.getName=function(t){return t===void 0&&(t=vg),this.name+t.hash},e}(),V6=/([A-Z])/,W6=/([A-Z])/g,q6=/^ms-/,G6=function(e){return"-"+e.toLowerCase()};function x0(e){return V6.test(e)?e.replace(W6,G6).replace(q6,"-ms-"):e}var y0=function(e){return e==null||e===!1||e===""};function Uo(e,t,r,n){if(Array.isArray(e)){for(var o,i=[],a=0,s=e.length;a<s;a+=1)(o=Uo(e[a],t,r,n))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(y0(e))return"";if(Qp(e))return"."+e.styledComponentId;if(Ri(e)){if(typeof(u=e)!="function"||u.prototype&&u.prototype.isReactComponent||!t)return e;var c=e(t);return Uo(c,t,r,n)}var u;return e instanceof FC?r?(e.inject(r,n),e.getName(n)):e:mg(e)?function f(d,g){var p,m,h=[];for(var y in d)d.hasOwnProperty(y)&&!y0(d[y])&&(Array.isArray(d[y])&&d[y].isCss||Ri(d[y])?h.push(x0(y)+":",d[y],";"):mg(d[y])?h.push.apply(h,f(d[y],y)):h.push(x0(y)+": "+(p=y,(m=d[y])==null||typeof m=="boolean"||m===""?"":typeof m!="number"||m===0||p in f6||p.startsWith("--")?String(m).trim():m+"px")+";"));return g?[g+" {"].concat(h,["}"]):h}(e):e.toString()}var b0=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function Zp(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];return Ri(e)||mg(e)?b0(Uo(p0($c,[e].concat(r)))):r.length===0&&e.length===1&&typeof e[0]=="string"?e:b0(Uo(p0(e,r)))}var BC=function(e,t,r){return r===void 0&&(r=eo),e.theme!==r.theme&&e.theme||t||r.theme},K6=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,J6=/(^-|-$)/g;function Ud(e){return e.replace(K6,"-").replace(J6,"")}var Xp=function(e){return hg(MC(e)>>>0)};function xl(e){return typeof e=="string"&&!0}var xg=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},Q6=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function Y6(e,t,r){var n=e[r];xg(t)&&xg(n)?zC(n,t):e[r]=t}function zC(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];for(var o=0,i=r;o<i.length;o++){var a=i[o];if(xg(a))for(var s in a)Q6(s)&&Y6(e,a[s],s)}return e}var ys=le.createContext();ys.Consumer;function Z6(e){var t=O.useContext(ys),r=O.useMemo(function(){return function(n,o){if(!n)return Ho(14);if(Ri(n)){var i=n(o);return i}return Array.isArray(n)||typeof n!="object"?Ho(8):o?Wr({},o,{},n):n}(e.theme,t)},[e.theme,t]);return e.children?le.createElement(ys.Provider,{value:r},e.children):null}var Vd={};function HC(e,t,r){var n=Qp(e),o=!xl(e),i=t.attrs,a=i===void 0?$c:i,s=t.componentId,c=s===void 0?function(x,S){var I=typeof x!="string"?"sc":Ud(x);Vd[I]=(Vd[I]||0)+1;var k=I+"-"+Xp("5.3.11"+I+Vd[I]);return S?S+"-"+k:k}(t.displayName,t.parentComponentId):s,u=t.displayName,f=u===void 0?function(x){return xl(x)?"styled."+x:"Styled("+m0(x)+")"}(e):u,d=t.displayName&&t.componentId?Ud(t.displayName)+"-"+t.componentId:t.componentId||c,g=n&&e.attrs?Array.prototype.concat(e.attrs,a).filter(Boolean):a,p=t.shouldForwardProp;n&&e.shouldForwardProp&&(p=t.shouldForwardProp?function(x,S,I){return e.shouldForwardProp(x,S,I)&&t.shouldForwardProp(x,S,I)}:e.shouldForwardProp);var m,h=new F6(r,d,n?e.componentStyle:void 0),y=h.isStatic&&a.length===0,v=function(x,S){return function(I,k,T,P){var N=I.attrs,j=I.componentStyle,F=I.defaultProps,V=I.foldedComponentIds,Z=I.shouldForwardProp,Y=I.styledComponentId,z=I.target,J=function(G,$,w){G===void 0&&(G=eo);var b=Wr({},$,{theme:G}),W={};return w.forEach(function(L){var re,ie,ge,se=L;for(re in Ri(se)&&(se=se(b)),se)b[re]=W[re]=re==="className"?(ie=W[re],ge=se[re],ie&&ge?ie+" "+ge:ie||ge):se[re]}),[b,W]}(BC(k,O.useContext(ys),F)||eo,k,N),K=J[0],M=J[1],R=function(G,$,w,b){var W=LC(),L=_C(),re=$?G.generateAndInjectStyles(eo,W,L):G.generateAndInjectStyles(w,W,L);return re}(j,P,K),_=T,B=M.$as||k.$as||M.as||k.as||z,q=xl(B),H=M!==k?Wr({},k,{},M):k,Q={};for(var U in H)U[0]!=="$"&&U!=="as"&&(U==="forwardedAs"?Q.as=H[U]:(Z?Z(U,u0,B):!q||u0(U))&&(Q[U]=H[U]));return k.style&&M.style!==k.style&&(Q.style=Wr({},k.style,{},M.style)),Q.className=Array.prototype.concat(V,Y,R!==Y?R:null,k.className,M.className).filter(Boolean).join(" "),Q.ref=_,O.createElement(B,Q)}(m,x,S,y)};return v.displayName=f,(m=le.forwardRef(v)).attrs=g,m.componentStyle=h,m.displayName=f,m.shouldForwardProp=p,m.foldedComponentIds=n?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):$c,m.styledComponentId=d,m.target=n?e.target:e,m.withComponent=function(x){var S=t.componentId,I=function(T,P){if(T==null)return{};var N,j,F={},V=Object.keys(T);for(j=0;j<V.length;j++)N=V[j],P.indexOf(N)>=0||(F[N]=T[N]);return F}(t,["componentId"]),k=S&&S+"-"+(xl(x)?x:Ud(m0(x)));return HC(x,Wr({},I,{attrs:g,componentId:k}),r)},Object.defineProperty(m,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(x){this._foldedDefaultProps=n?zC({},e.defaultProps,x):x}}),Object.defineProperty(m,"toString",{value:function(){return"."+m.styledComponentId}}),o&&Pc(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),m}var C=function(e){return function t(r,n,o){if(o===void 0&&(o=eo),!Gp.isValidElementType(n))return Ho(1,String(n));var i=function(){return r(n,o,Zp.apply(void 0,arguments))};return i.withConfig=function(a){return t(r,n,Wr({},o,{},a))},i.attrs=function(a){return t(r,n,Wr({},o,{attrs:Array.prototype.concat(o.attrs,a).filter(Boolean)}))},i}(HC,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){C[e]=C(e)});var X6=function(){function e(r,n){this.rules=r,this.componentId=n,this.isStatic=AC(r),Nc.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(r,n,o,i){var a=i(Uo(this.rules,n,o,i).join(""),""),s=this.componentId+r;o.insertRules(s,s,a)},t.removeStyles=function(r,n){n.clearRules(this.componentId+r)},t.renderStyles=function(r,n,o,i){r>2&&Nc.registerId(this.componentId+r),this.removeStyles(r,o),this.createStyles(r,n,o,i)},e}();function eT(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=Zp.apply(void 0,[e].concat(r)),i="sc-global-"+Xp(JSON.stringify(o)),a=new X6(o,i);function s(u){var f=LC(),d=_C(),g=O.useContext(ys),p=O.useRef(f.allocateGSInstance(i)).current;return f.server&&c(p,u,f,g,d),O.useLayoutEffect(function(){if(!f.server)return c(p,u,f,g,d),function(){return a.removeStyles(p,f)}},[p,u,f,g,d]),null}function c(u,f,d,g,p){if(a.isStatic)a.renderStyles(u,j6,d,p);else{var m=Wr({},f,{theme:BC(f,g,s.defaultProps)});a.renderStyles(u,m,d,p)}}return le.memo(s)}function UC(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var o=Zp.apply(void 0,[e].concat(r)).join(""),i=Xp(o);return new FC(i,o)}const tT=eT`
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
  width: 90vw;
  height: auto;
  max-height: 80vh;
  padding: 15px;
  border-radius: 10px;
  padding-bottom: 20px;
  overflow-y: auto;
  /* overscroll-behavior: contain; */
  -webkit-overflow-scrolling:touch;
}

@media (max-width: 768px) {
  .react-responsive-modal-container {
    position: fixed;
    max-width: 100vw;
    height: 100vh;
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
    width: 90vw;
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

`,em=()=>{let e=!1;return function(t){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0)}(navigator.userAgent||navigator.vendor||window.opera),e},VC=()=>{let e=em(),t;return e?t=l.jsx(oT,{children:"Loading"}):t=l.jsx(nT,{children:"Loading"}),l.jsxs(rT,{children:[t,l.jsx("div",{children:l.jsx("div",{id:"loading"})})]})},rT=C.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  justify-content: center;
  align-items: center;
`,nT=C.div`
  font-size: 88px;
  font-style: italic;
  font-weight: bold;
  align-self: center;
  margin-right: 70px;
  margin-top: 40px;
`,oT=C.div`
  font-size: 44px;
  font-style: italic;
  font-weight: bold;
  align-self: center;
  margin-right: 30px;
  margin-top: 40px;
`;function yg(e,t){return yg=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,n){return r.__proto__=n,r},yg(e,t)}function Rr(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,yg(e,t)}var WC={exports:{}},iT="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",aT=iT,sT=aT;function qC(){}function GC(){}GC.resetWarningCache=qC;var lT=function(){function e(n,o,i,a,s,c){if(c!==sT){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var r={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:GC,resetWarningCache:qC};return r.PropTypes=r,r};WC.exports=lT();var tm=WC.exports;const Ur=gt(tm);function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},xe.apply(null,arguments)}function yl(e){return e.charAt(0)==="/"}function Wd(e,t){for(var r=t,n=r+1,o=e.length;n<o;r+=1,n+=1)e[r]=e[n];e.pop()}function cT(e,t){t===void 0&&(t="");var r=e&&e.split("/")||[],n=t&&t.split("/")||[],o=e&&yl(e),i=t&&yl(t),a=o||i;if(e&&yl(e)?n=r:r.length&&(n.pop(),n=n.concat(r)),!n.length)return"/";var s;if(n.length){var c=n[n.length-1];s=c==="."||c===".."||c===""}else s=!1;for(var u=0,f=n.length;f>=0;f--){var d=n[f];d==="."?Wd(n,f):d===".."?(Wd(n,f),u++):u&&(Wd(n,f),u--)}if(!a)for(;u--;u)n.unshift("..");a&&n[0]!==""&&(!n[0]||!yl(n[0]))&&n.unshift("");var g=n.join("/");return s&&g.substr(-1)!=="/"&&(g+="/"),g}var uT="Invariant failed";function bn(e,t){throw new Error(uT)}function Ga(e){return e.charAt(0)==="/"?e:"/"+e}function S0(e){return e.charAt(0)==="/"?e.substr(1):e}function dT(e,t){return e.toLowerCase().indexOf(t.toLowerCase())===0&&"/?#".indexOf(e.charAt(t.length))!==-1}function KC(e,t){return dT(e,t)?e.substr(t.length):e}function JC(e){return e.charAt(e.length-1)==="/"?e.slice(0,-1):e}function fT(e){var t=e||"/",r="",n="",o=t.indexOf("#");o!==-1&&(n=t.substr(o),t=t.substr(0,o));var i=t.indexOf("?");return i!==-1&&(r=t.substr(i),t=t.substr(0,i)),{pathname:t,search:r==="?"?"":r,hash:n==="#"?"":n}}function Jt(e){var t=e.pathname,r=e.search,n=e.hash,o=t||"/";return r&&r!=="?"&&(o+=r.charAt(0)==="?"?r:"?"+r),n&&n!=="#"&&(o+=n.charAt(0)==="#"?n:"#"+n),o}function ur(e,t,r,n){var o;typeof e=="string"?(o=fT(e),o.state=t):(o=xe({},e),o.pathname===void 0&&(o.pathname=""),o.search?o.search.charAt(0)!=="?"&&(o.search="?"+o.search):o.search="",o.hash?o.hash.charAt(0)!=="#"&&(o.hash="#"+o.hash):o.hash="",t!==void 0&&o.state===void 0&&(o.state=t));try{o.pathname=decodeURI(o.pathname)}catch(i){throw i instanceof URIError?new URIError('Pathname "'+o.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):i}return r&&(o.key=r),n?o.pathname?o.pathname.charAt(0)!=="/"&&(o.pathname=cT(o.pathname,n.pathname)):o.pathname=n.pathname:o.pathname||(o.pathname="/"),o}function rm(){var e=null;function t(a){return e=a,function(){e===a&&(e=null)}}function r(a,s,c,u){if(e!=null){var f=typeof e=="function"?e(a,s):e;typeof f=="string"?typeof c=="function"?c(f,u):u(!0):u(f!==!1)}else u(!0)}var n=[];function o(a){var s=!0;function c(){s&&a.apply(void 0,arguments)}return n.push(c),function(){s=!1,n=n.filter(function(u){return u!==c})}}function i(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];n.forEach(function(u){return u.apply(void 0,s)})}return{setPrompt:t,confirmTransitionTo:r,appendListener:o,notifyListeners:i}}var QC=!!(typeof window<"u"&&window.document&&window.document.createElement);function YC(e,t){t(window.confirm(e))}function gT(){var e=window.navigator.userAgent;return(e.indexOf("Android 2.")!==-1||e.indexOf("Android 4.0")!==-1)&&e.indexOf("Mobile Safari")!==-1&&e.indexOf("Chrome")===-1&&e.indexOf("Windows Phone")===-1?!1:window.history&&"pushState"in window.history}function pT(){return window.navigator.userAgent.indexOf("Trident")===-1}function mT(){return window.navigator.userAgent.indexOf("Firefox")===-1}function hT(e){return e.state===void 0&&navigator.userAgent.indexOf("CriOS")===-1}var C0="popstate",w0="hashchange";function j0(){try{return window.history.state||{}}catch{return{}}}function vT(e){e===void 0&&(e={}),QC||bn();var t=window.history,r=gT(),n=!pT(),o=e,i=o.forceRefresh,a=i===void 0?!1:i,s=o.getUserConfirmation,c=s===void 0?YC:s,u=o.keyLength,f=u===void 0?6:u,d=e.basename?JC(Ga(e.basename)):"";function g(_){var B=_||{},q=B.key,H=B.state,Q=window.location,U=Q.pathname,G=Q.search,$=Q.hash,w=U+G+$;return d&&(w=KC(w,d)),ur(w,H,q)}function p(){return Math.random().toString(36).substr(2,f)}var m=rm();function h(_){xe(R,_),R.length=t.length,m.notifyListeners(R.location,R.action)}function y(_){hT(_)||S(g(_.state))}function v(){S(g(j0()))}var x=!1;function S(_){if(x)x=!1,h();else{var B="POP";m.confirmTransitionTo(_,B,c,function(q){q?h({action:B,location:_}):I(_)})}}function I(_){var B=R.location,q=T.indexOf(B.key);q===-1&&(q=0);var H=T.indexOf(_.key);H===-1&&(H=0);var Q=q-H;Q&&(x=!0,F(Q))}var k=g(j0()),T=[k.key];function P(_){return d+Jt(_)}function N(_,B){var q="PUSH",H=ur(_,B,p(),R.location);m.confirmTransitionTo(H,q,c,function(Q){if(Q){var U=P(H),G=H.key,$=H.state;if(r)if(t.pushState({key:G,state:$},null,U),a)window.location.href=U;else{var w=T.indexOf(R.location.key),b=T.slice(0,w+1);b.push(H.key),T=b,h({action:q,location:H})}else window.location.href=U}})}function j(_,B){var q="REPLACE",H=ur(_,B,p(),R.location);m.confirmTransitionTo(H,q,c,function(Q){if(Q){var U=P(H),G=H.key,$=H.state;if(r)if(t.replaceState({key:G,state:$},null,U),a)window.location.replace(U);else{var w=T.indexOf(R.location.key);w!==-1&&(T[w]=H.key),h({action:q,location:H})}else window.location.replace(U)}})}function F(_){t.go(_)}function V(){F(-1)}function Z(){F(1)}var Y=0;function z(_){Y+=_,Y===1&&_===1?(window.addEventListener(C0,y),n&&window.addEventListener(w0,v)):Y===0&&(window.removeEventListener(C0,y),n&&window.removeEventListener(w0,v))}var J=!1;function K(_){_===void 0&&(_=!1);var B=m.setPrompt(_);return J||(z(1),J=!0),function(){return J&&(J=!1,z(-1)),B()}}function M(_){var B=m.appendListener(_);return z(1),function(){z(-1),B()}}var R={length:t.length,action:"POP",location:k,createHref:P,push:N,replace:j,go:F,goBack:V,goForward:Z,block:K,listen:M};return R}var T0="hashchange",xT={hashbang:{encodePath:function(t){return t.charAt(0)==="!"?t:"!/"+S0(t)},decodePath:function(t){return t.charAt(0)==="!"?t.substr(1):t}},noslash:{encodePath:S0,decodePath:Ga},slash:{encodePath:Ga,decodePath:Ga}};function ZC(e){var t=e.indexOf("#");return t===-1?e:e.slice(0,t)}function wa(){var e=window.location.href,t=e.indexOf("#");return t===-1?"":e.substring(t+1)}function yT(e){window.location.hash=e}function qd(e){window.location.replace(ZC(window.location.href)+"#"+e)}function bT(e){e===void 0&&(e={}),QC||bn();var t=window.history;mT();var r=e,n=r.getUserConfirmation,o=n===void 0?YC:n,i=r.hashType,a=i===void 0?"slash":i,s=e.basename?JC(Ga(e.basename)):"",c=xT[a],u=c.encodePath,f=c.decodePath;function d(){var B=f(wa());return s&&(B=KC(B,s)),ur(B)}var g=rm();function p(B){xe(_,B),_.length=t.length,g.notifyListeners(_.location,_.action)}var m=!1,h=null;function y(B,q){return B.pathname===q.pathname&&B.search===q.search&&B.hash===q.hash}function v(){var B=wa(),q=u(B);if(B!==q)qd(q);else{var H=d(),Q=_.location;if(!m&&y(Q,H)||h===Jt(H))return;h=null,x(H)}}function x(B){if(m)m=!1,p();else{var q="POP";g.confirmTransitionTo(B,q,o,function(H){H?p({action:q,location:B}):S(B)})}}function S(B){var q=_.location,H=P.lastIndexOf(Jt(q));H===-1&&(H=0);var Q=P.lastIndexOf(Jt(B));Q===-1&&(Q=0);var U=H-Q;U&&(m=!0,V(U))}var I=wa(),k=u(I);I!==k&&qd(k);var T=d(),P=[Jt(T)];function N(B){var q=document.querySelector("base"),H="";return q&&q.getAttribute("href")&&(H=ZC(window.location.href)),H+"#"+u(s+Jt(B))}function j(B,q){var H="PUSH",Q=ur(B,void 0,void 0,_.location);g.confirmTransitionTo(Q,H,o,function(U){if(U){var G=Jt(Q),$=u(s+G),w=wa()!==$;if(w){h=G,yT($);var b=P.lastIndexOf(Jt(_.location)),W=P.slice(0,b+1);W.push(G),P=W,p({action:H,location:Q})}else p()}})}function F(B,q){var H="REPLACE",Q=ur(B,void 0,void 0,_.location);g.confirmTransitionTo(Q,H,o,function(U){if(U){var G=Jt(Q),$=u(s+G),w=wa()!==$;w&&(h=G,qd($));var b=P.indexOf(Jt(_.location));b!==-1&&(P[b]=G),p({action:H,location:Q})}})}function V(B){t.go(B)}function Z(){V(-1)}function Y(){V(1)}var z=0;function J(B){z+=B,z===1&&B===1?window.addEventListener(T0,v):z===0&&window.removeEventListener(T0,v)}var K=!1;function M(B){B===void 0&&(B=!1);var q=g.setPrompt(B);return K||(J(1),K=!0),function(){return K&&(K=!1,J(-1)),q()}}function R(B){var q=g.appendListener(B);return J(1),function(){J(-1),q()}}var _={length:t.length,action:"POP",location:T,createHref:N,push:j,replace:F,go:V,goBack:Z,goForward:Y,block:M,listen:R};return _}function O0(e,t,r){return Math.min(Math.max(e,t),r)}function ST(e){e===void 0&&(e={});var t=e,r=t.getUserConfirmation,n=t.initialEntries,o=n===void 0?["/"]:n,i=t.initialIndex,a=i===void 0?0:i,s=t.keyLength,c=s===void 0?6:s,u=rm();function f(N){xe(P,N),P.length=P.entries.length,u.notifyListeners(P.location,P.action)}function d(){return Math.random().toString(36).substr(2,c)}var g=O0(a,0,o.length-1),p=o.map(function(N){return typeof N=="string"?ur(N,void 0,d()):ur(N,void 0,N.key||d())}),m=Jt;function h(N,j){var F="PUSH",V=ur(N,j,d(),P.location);u.confirmTransitionTo(V,F,r,function(Z){if(Z){var Y=P.index,z=Y+1,J=P.entries.slice(0);J.length>z?J.splice(z,J.length-z,V):J.push(V),f({action:F,location:V,index:z,entries:J})}})}function y(N,j){var F="REPLACE",V=ur(N,j,d(),P.location);u.confirmTransitionTo(V,F,r,function(Z){Z&&(P.entries[P.index]=V,f({action:F,location:V}))})}function v(N){var j=O0(P.index+N,0,P.entries.length-1),F="POP",V=P.entries[j];u.confirmTransitionTo(V,F,r,function(Z){Z?f({action:F,location:V,index:j}):f()})}function x(){v(-1)}function S(){v(1)}function I(N){var j=P.index+N;return j>=0&&j<P.entries.length}function k(N){return N===void 0&&(N=!1),u.setPrompt(N)}function T(N){return u.appendListener(N)}var P={length:p.length,action:"POP",location:p[g],index:g,entries:p,createHref:m,push:h,replace:y,go:v,goBack:x,goForward:S,canGo:I,block:k,listen:T};return P}var Gi={exports:{}},CT=Array.isArray||function(e){return Object.prototype.toString.call(e)=="[object Array]"},Mc=CT;Gi.exports=tw;Gi.exports.parse=nm;Gi.exports.compile=TT;Gi.exports.tokensToFunction=XC;Gi.exports.tokensToRegExp=ew;var wT=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function nm(e,t){for(var r=[],n=0,o=0,i="",a=t&&t.delimiter||"/",s;(s=wT.exec(e))!=null;){var c=s[0],u=s[1],f=s.index;if(i+=e.slice(o,f),o=f+c.length,u){i+=u[1];continue}var d=e[o],g=s[2],p=s[3],m=s[4],h=s[5],y=s[6],v=s[7];i&&(r.push(i),i="");var x=g!=null&&d!=null&&d!==g,S=y==="+"||y==="*",I=y==="?"||y==="*",k=g||a,T=m||h,P=g||(typeof r[r.length-1]=="string"?r[r.length-1]:"");r.push({name:p||n++,prefix:g||"",delimiter:k,optional:I,repeat:S,partial:x,asterisk:!!v,pattern:T?ET(T):v?".*":jT(k,P)})}return o<e.length&&(i+=e.substr(o)),i&&r.push(i),r}function jT(e,t){return!t||t.indexOf(e)>-1?"[^"+$o(e)+"]+?":$o(t)+"|(?:(?!"+$o(t)+")[^"+$o(e)+"])+?"}function TT(e,t){return XC(nm(e,t),t)}function OT(e){return encodeURI(e).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function IT(e){return encodeURI(e).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function XC(e,t){for(var r=new Array(e.length),n=0;n<e.length;n++)typeof e[n]=="object"&&(r[n]=new RegExp("^(?:"+e[n].pattern+")$",im(t)));return function(o,i){for(var a="",s=o||{},c=i||{},u=c.pretty?OT:encodeURIComponent,f=0;f<e.length;f++){var d=e[f];if(typeof d=="string"){a+=d;continue}var g=s[d.name],p;if(g==null)if(d.optional){d.partial&&(a+=d.prefix);continue}else throw new TypeError('Expected "'+d.name+'" to be defined');if(Mc(g)){if(!d.repeat)throw new TypeError('Expected "'+d.name+'" to not repeat, but received `'+JSON.stringify(g)+"`");if(g.length===0){if(d.optional)continue;throw new TypeError('Expected "'+d.name+'" to not be empty')}for(var m=0;m<g.length;m++){if(p=u(g[m]),!r[f].test(p))throw new TypeError('Expected all "'+d.name+'" to match "'+d.pattern+'", but received `'+JSON.stringify(p)+"`");a+=(m===0?d.prefix:d.delimiter)+p}continue}if(p=d.asterisk?IT(g):u(g),!r[f].test(p))throw new TypeError('Expected "'+d.name+'" to match "'+d.pattern+'", but received "'+p+'"');a+=d.prefix+p}return a}}function $o(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function ET(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function om(e,t){return e.keys=t,e}function im(e){return e&&e.sensitive?"":"i"}function PT(e,t){var r=e.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)t.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return om(e,t)}function $T(e,t,r){for(var n=[],o=0;o<e.length;o++)n.push(tw(e[o],t,r).source);var i=new RegExp("(?:"+n.join("|")+")",im(r));return om(i,t)}function kT(e,t,r){return ew(nm(e,r),t,r)}function ew(e,t,r){Mc(t)||(r=t||r,t=[]),r=r||{};for(var n=r.strict,o=r.end!==!1,i="",a=0;a<e.length;a++){var s=e[a];if(typeof s=="string")i+=$o(s);else{var c=$o(s.prefix),u="(?:"+s.pattern+")";t.push(s),s.repeat&&(u+="(?:"+c+u+")*"),s.optional?s.partial?u=c+"("+u+")?":u="(?:"+c+"("+u+"))?":u=c+"("+u+")",i+=u}}var f=$o(r.delimiter||"/"),d=i.slice(-f.length)===f;return n||(i=(d?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"),o?i+="$":i+=n&&d?"":"(?="+f+"|$)",om(new RegExp("^"+i,im(r)),t)}function tw(e,t,r){return Mc(t)||(r=t||r,t=[]),r=r||{},e instanceof RegExp?PT(e,t):Mc(e)?$T(e,t,r):kT(e,t,r)}var NT=Gi.exports;const MT=gt(NT);function Nn(e,t){if(e==null)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.indexOf(n)!==-1)continue;r[n]=e[n]}return r}var Gd=1073741823,I0=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{};function AT(){var e="__global_unique_id__";return I0[e]=(I0[e]||0)+1}function DT(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function RT(e){var t=[];return{on:function(n){t.push(n)},off:function(n){t=t.filter(function(o){return o!==n})},get:function(){return e},set:function(n,o){e=n,t.forEach(function(i){return i(e,o)})}}}function LT(e){return Array.isArray(e)?e[0]:e}function _T(e,t){var r,n,o="__create-react-context-"+AT()+"__",i=function(s){Rr(c,s);function c(){for(var f,d=arguments.length,g=new Array(d),p=0;p<d;p++)g[p]=arguments[p];return f=s.call.apply(s,[this].concat(g))||this,f.emitter=RT(f.props.value),f}var u=c.prototype;return u.getChildContext=function(){var d;return d={},d[o]=this.emitter,d},u.componentWillReceiveProps=function(d){if(this.props.value!==d.value){var g=this.props.value,p=d.value,m;DT(g,p)?m=0:(m=typeof t=="function"?t(g,p):Gd,m|=0,m!==0&&this.emitter.set(d.value,m))}},u.render=function(){return this.props.children},c}(le.Component);i.childContextTypes=(r={},r[o]=Ur.object.isRequired,r);var a=function(s){Rr(c,s);function c(){for(var f,d=arguments.length,g=new Array(d),p=0;p<d;p++)g[p]=arguments[p];return f=s.call.apply(s,[this].concat(g))||this,f.observedBits=void 0,f.state={value:f.getValue()},f.onUpdate=function(m,h){var y=f.observedBits|0;y&h&&f.setState({value:f.getValue()})},f}var u=c.prototype;return u.componentWillReceiveProps=function(d){var g=d.observedBits;this.observedBits=g??Gd},u.componentDidMount=function(){this.context[o]&&this.context[o].on(this.onUpdate);var d=this.props.observedBits;this.observedBits=d??Gd},u.componentWillUnmount=function(){this.context[o]&&this.context[o].off(this.onUpdate)},u.getValue=function(){return this.context[o]?this.context[o].get():e},u.render=function(){return LT(this.props.children)(this.state.value)},c}(le.Component);return a.contextTypes=(n={},n[o]=Ur.object,n),{Provider:i,Consumer:a}}var FT=le.createContext||_T,rw=function(t){var r=FT();return r.displayName=t,r},BT=rw("Router-History"),so=rw("Router"),Au=function(e){Rr(t,e),t.computeRootMatch=function(o){return{path:"/",url:"/",params:{},isExact:o==="/"}};function t(n){var o;return o=e.call(this,n)||this,o.state={location:n.history.location},o._isMounted=!1,o._pendingLocation=null,n.staticContext||(o.unlisten=n.history.listen(function(i){o._pendingLocation=i})),o}var r=t.prototype;return r.componentDidMount=function(){var o=this;this._isMounted=!0,this.unlisten&&this.unlisten(),this.props.staticContext||(this.unlisten=this.props.history.listen(function(i){o._isMounted&&o.setState({location:i})})),this._pendingLocation&&this.setState({location:this._pendingLocation})},r.componentWillUnmount=function(){this.unlisten&&(this.unlisten(),this._isMounted=!1,this._pendingLocation=null)},r.render=function(){return le.createElement(so.Provider,{value:{history:this.props.history,location:this.state.location,match:t.computeRootMatch(this.state.location.pathname),staticContext:this.props.staticContext}},le.createElement(BT.Provider,{children:this.props.children||null,value:this.props.history}))},t}(le.Component);le.Component;var zT=function(e){Rr(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.componentDidMount=function(){this.props.onMount&&this.props.onMount.call(this,this)},r.componentDidUpdate=function(o){this.props.onUpdate&&this.props.onUpdate.call(this,this,o)},r.componentWillUnmount=function(){this.props.onUnmount&&this.props.onUnmount.call(this,this)},r.render=function(){return null},t}(le.Component);function HT(e){var t=e.message,r=e.when,n=r===void 0?!0:r;return le.createElement(so.Consumer,null,function(o){if(o||bn(),!n||o.staticContext)return null;var i=o.history.block;return le.createElement(zT,{onMount:function(s){s.release=i(t)},onUpdate:function(s,c){c.message!==t&&(s.release(),s.release=i(t))},onUnmount:function(s){s.release()},message:t})})}var E0={},UT=1e4,P0=0;function VT(e,t){var r=""+t.end+t.strict+t.sensitive,n=E0[r]||(E0[r]={});if(n[e])return n[e];var o=[],i=MT(e,o,t),a={regexp:i,keys:o};return P0<UT&&(n[e]=a,P0++),a}function am(e,t){t===void 0&&(t={}),(typeof t=="string"||Array.isArray(t))&&(t={path:t});var r=t,n=r.path,o=r.exact,i=o===void 0?!1:o,a=r.strict,s=a===void 0?!1:a,c=r.sensitive,u=c===void 0?!1:c,f=[].concat(n);return f.reduce(function(d,g){if(!g&&g!=="")return null;if(d)return d;var p=VT(g,{end:i,strict:s,sensitive:u}),m=p.regexp,h=p.keys,y=m.exec(e);if(!y)return null;var v=y[0],x=y.slice(1),S=e===v;return i&&!S?null:{path:g,url:g==="/"&&v===""?"/":v,isExact:S,params:h.reduce(function(I,k,T){return I[k.name]=x[T],I},{})}},null)}function WT(e){return le.Children.count(e)===0}var De=function(e){Rr(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var o=this;return le.createElement(so.Consumer,null,function(i){i||bn();var a=o.props.location||i.location,s=o.props.computedMatch?o.props.computedMatch:o.props.path?am(a.pathname,o.props):i.match,c=xe({},i,{location:a,match:s}),u=o.props,f=u.children,d=u.component,g=u.render;return Array.isArray(f)&&WT(f)&&(f=null),le.createElement(so.Provider,{value:c},c.match?f?typeof f=="function"?f(c):f:d?le.createElement(d,c):g?g(c):null:typeof f=="function"?f(c):null)})},t}(le.Component);function sm(e){return e.charAt(0)==="/"?e:"/"+e}function qT(e,t){return e?xe({},t,{pathname:sm(e)+t.pathname}):t}function GT(e,t){if(!e)return t;var r=sm(e);return t.pathname.indexOf(r)!==0?t:xe({},t,{pathname:t.pathname.substr(r.length)})}function $0(e){return typeof e=="string"?e:Jt(e)}function Kd(e){return function(){bn()}}function k0(){}le.Component;var bl=function(e){Rr(t,e);function t(){return e.apply(this,arguments)||this}var r=t.prototype;return r.render=function(){var o=this;return le.createElement(so.Consumer,null,function(i){i||bn();var a=o.props.location||i.location,s,c;return le.Children.forEach(o.props.children,function(u){if(c==null&&le.isValidElement(u)){s=u;var f=u.props.path||u.props.from;c=f?am(a.pathname,xe({},u.props,{path:f})):i.match}}),c?le.cloneElement(s,{location:a,computedMatch:c}):null})},t}(le.Component);function Ki(e){var t="withRouter("+(e.displayName||e.name)+")",r=function(o){var i=o.wrappedComponentRef,a=Nn(o,["wrappedComponentRef"]);return le.createElement(so.Consumer,null,function(s){return s||bn(),le.createElement(e,xe({},a,s,{ref:i}))})};return r.displayName=t,r.WrappedComponent=e,Pc(r,e)}le.useContext;le.Component;var Sl=function(e){Rr(t,e);function t(){for(var n,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i))||this,n.history=bT(n.props),n}var r=t.prototype;return r.render=function(){return le.createElement(Au,{history:this.history,children:this.props.children})},t}(le.Component),bg=function(t,r){return typeof t=="function"?t(r):t},Sg=function(t,r){return typeof t=="string"?ur(t,null,null,r):t},lm=function(t){return t},_i=le.forwardRef;typeof _i>"u"&&(_i=lm);function KT(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var JT=_i(function(e,t){var r=e.innerRef,n=e.navigate,o=e.onClick,i=Nn(e,["innerRef","navigate","onClick"]),a=i.target,s=xe({},i,{onClick:function(u){try{o&&o(u)}catch(f){throw u.preventDefault(),f}!u.defaultPrevented&&u.button===0&&(!a||a==="_self")&&!KT(u)&&(u.preventDefault(),n())}});return lm!==_i?s.ref=t||r:s.ref=r,le.createElement("a",s)}),QT=_i(function(e,t){var r=e.component,n=r===void 0?JT:r,o=e.replace,i=e.to,a=e.innerRef,s=Nn(e,["component","replace","to","innerRef"]);return le.createElement(so.Consumer,null,function(c){c||bn();var u=c.history,f=Sg(bg(i,c.location),c.location),d=f?u.createHref(f):"",g=xe({},s,{href:d,navigate:function(){var m=bg(i,c.location),h=Jt(c.location)===Jt(Sg(m)),y=o||h?u.replace:u.push;y(m)}});return lm!==_i?g.ref=t||a:g.innerRef=a,le.createElement(n,g)})}),nw=function(t){return t},Ac=le.forwardRef;typeof Ac>"u"&&(Ac=nw);function YT(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.filter(function(n){return n}).join(" ")}Ac(function(e,t){var r=e["aria-current"],n=r===void 0?"page":r,o=e.activeClassName,i=o===void 0?"active":o,a=e.activeStyle,s=e.className,c=e.exact,u=e.isActive,f=e.location,d=e.sensitive,g=e.strict,p=e.style,m=e.to,h=e.innerRef,y=Nn(e,["aria-current","activeClassName","activeStyle","className","exact","isActive","location","sensitive","strict","style","to","innerRef"]);return le.createElement(so.Consumer,null,function(v){v||bn();var x=f||v.location,S=Sg(bg(m,x),x),I=S.pathname,k=I&&I.replace(/([.+*?=^!:${}()[\]|/\\])/g,"\\$1"),T=k?am(x.pathname,{path:k,exact:c,sensitive:d,strict:g}):null,P=!!(u?u(T,x):T),N=typeof s=="function"?s(P):s,j=typeof p=="function"?p(P):p;P&&(N=YT(N,i),j=xe({},j,a));var F=xe({"aria-current":P&&n||null,className:N,style:j,to:S},y);return nw!==Ac?F.ref=t||h:F.innerRef=h,le.createElement(QT,F)})});var ow={},cm={},um={};Object.defineProperty(um,"__esModule",{value:!0});um.default=t7;var N0="html",M0="head",Cl="body",ZT=/<([a-zA-Z]+[0-9]?)/,A0=/<head[^]*>/i,D0=/<body[^]*>/i,Dc=function(e,t){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},Cg=function(e,t){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")},R0=typeof window=="object"&&window.DOMParser;if(typeof R0=="function"){var XT=new R0,e7="text/html";Cg=function(e,t){return t&&(e="<".concat(t,">").concat(e,"</").concat(t,">")),XT.parseFromString(e,e7)},Dc=Cg}if(typeof document=="object"&&document.implementation){var wl=document.implementation.createHTMLDocument();Dc=function(e,t){if(t){var r=wl.documentElement.querySelector(t);return r&&(r.innerHTML=e),wl}return wl.documentElement.innerHTML=e,wl}}var jl=typeof document=="object"&&document.createElement("template"),wg;jl&&jl.content&&(wg=function(e){return jl.innerHTML=e,jl.content.childNodes});function t7(e){var t,r,n=e.match(ZT),o=n&&n[1]?n[1].toLowerCase():"";switch(o){case N0:{var i=Cg(e);if(!A0.test(e)){var a=i.querySelector(M0);(t=a==null?void 0:a.parentNode)===null||t===void 0||t.removeChild(a)}if(!D0.test(e)){var a=i.querySelector(Cl);(r=a==null?void 0:a.parentNode)===null||r===void 0||r.removeChild(a)}return i.querySelectorAll(N0)}case M0:case Cl:{var s=Dc(e).querySelectorAll(o);return D0.test(e)&&A0.test(e)?s[0].parentNode.childNodes:s}default:{if(wg)return wg(e);var a=Dc(e,Cl).querySelector(Cl);return a.childNodes}}}var Du={},dm={},fm={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Doctype=e.CDATA=e.Tag=e.Style=e.Script=e.Comment=e.Directive=e.Text=e.Root=e.isTag=e.ElementType=void 0;var t;(function(n){n.Root="root",n.Text="text",n.Directive="directive",n.Comment="comment",n.Script="script",n.Style="style",n.Tag="tag",n.CDATA="cdata",n.Doctype="doctype"})(t=e.ElementType||(e.ElementType={}));function r(n){return n.type===t.Tag||n.type===t.Script||n.type===t.Style}e.isTag=r,e.Root=t.Root,e.Text=t.Text,e.Directive=t.Directive,e.Comment=t.Comment,e.Script=t.Script,e.Style=t.Style,e.Tag=t.Tag,e.CDATA=t.CDATA,e.Doctype=t.Doctype})(fm);var Me={},go=tt&&tt.__extends||function(){var e=function(t,r){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,o){n.__proto__=o}||function(n,o){for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(n[i]=o[i])},e(t,r)};return function(t,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");e(t,r);function n(){this.constructor=t}t.prototype=r===null?Object.create(r):(n.prototype=r.prototype,new n)}}(),Ka=tt&&tt.__assign||function(){return Ka=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ka.apply(this,arguments)};Object.defineProperty(Me,"__esModule",{value:!0});Me.cloneNode=Me.hasChildren=Me.isDocument=Me.isDirective=Me.isComment=Me.isText=Me.isCDATA=Me.isTag=Me.Element=Me.Document=Me.CDATA=Me.NodeWithChildren=Me.ProcessingInstruction=Me.Comment=Me.Text=Me.DataNode=Me.Node=void 0;var rr=fm,gm=function(){function e(){this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(t){this.parent=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(t){this.prev=t},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(t){this.next=t},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(t){return t===void 0&&(t=!1),pm(this,t)},e}();Me.Node=gm;var Ru=function(e){go(t,e);function t(r){var n=e.call(this)||this;return n.data=r,n}return Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(r){this.data=r},enumerable:!1,configurable:!0}),t}(gm);Me.DataNode=Ru;var iw=function(e){go(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=rr.ElementType.Text,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 3},enumerable:!1,configurable:!0}),t}(Ru);Me.Text=iw;var aw=function(e){go(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=rr.ElementType.Comment,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 8},enumerable:!1,configurable:!0}),t}(Ru);Me.Comment=aw;var sw=function(e){go(t,e);function t(r,n){var o=e.call(this,n)||this;return o.name=r,o.type=rr.ElementType.Directive,o}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),t}(Ru);Me.ProcessingInstruction=sw;var Lu=function(e){go(t,e);function t(r){var n=e.call(this)||this;return n.children=r,n}return Object.defineProperty(t.prototype,"firstChild",{get:function(){var r;return(r=this.children[0])!==null&&r!==void 0?r:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(r){this.children=r},enumerable:!1,configurable:!0}),t}(gm);Me.NodeWithChildren=Lu;var lw=function(e){go(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=rr.ElementType.CDATA,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 4},enumerable:!1,configurable:!0}),t}(Lu);Me.CDATA=lw;var cw=function(e){go(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=rr.ElementType.Root,r}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 9},enumerable:!1,configurable:!0}),t}(Lu);Me.Document=cw;var uw=function(e){go(t,e);function t(r,n,o,i){o===void 0&&(o=[]),i===void 0&&(i=r==="script"?rr.ElementType.Script:r==="style"?rr.ElementType.Style:rr.ElementType.Tag);var a=e.call(this,o)||this;return a.name=r,a.attribs=n,a.type=i,a}return Object.defineProperty(t.prototype,"nodeType",{get:function(){return 1},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(r){this.name=r},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var r=this;return Object.keys(this.attribs).map(function(n){var o,i;return{name:n,value:r.attribs[n],namespace:(o=r["x-attribsNamespace"])===null||o===void 0?void 0:o[n],prefix:(i=r["x-attribsPrefix"])===null||i===void 0?void 0:i[n]}})},enumerable:!1,configurable:!0}),t}(Lu);Me.Element=uw;function dw(e){return(0,rr.isTag)(e)}Me.isTag=dw;function fw(e){return e.type===rr.ElementType.CDATA}Me.isCDATA=fw;function gw(e){return e.type===rr.ElementType.Text}Me.isText=gw;function pw(e){return e.type===rr.ElementType.Comment}Me.isComment=pw;function mw(e){return e.type===rr.ElementType.Directive}Me.isDirective=mw;function hw(e){return e.type===rr.ElementType.Root}Me.isDocument=hw;function r7(e){return Object.prototype.hasOwnProperty.call(e,"children")}Me.hasChildren=r7;function pm(e,t){t===void 0&&(t=!1);var r;if(gw(e))r=new iw(e.data);else if(pw(e))r=new aw(e.data);else if(dw(e)){var n=t?Jd(e.children):[],o=new uw(e.name,Ka({},e.attribs),n);n.forEach(function(c){return c.parent=o}),e.namespace!=null&&(o.namespace=e.namespace),e["x-attribsNamespace"]&&(o["x-attribsNamespace"]=Ka({},e["x-attribsNamespace"])),e["x-attribsPrefix"]&&(o["x-attribsPrefix"]=Ka({},e["x-attribsPrefix"])),r=o}else if(fw(e)){var n=t?Jd(e.children):[],i=new lw(n);n.forEach(function(u){return u.parent=i}),r=i}else if(hw(e)){var n=t?Jd(e.children):[],a=new cw(n);n.forEach(function(u){return u.parent=a}),e["x-mode"]&&(a["x-mode"]=e["x-mode"]),r=a}else if(mw(e)){var s=new sw(e.name,e.data);e["x-name"]!=null&&(s["x-name"]=e["x-name"],s["x-publicId"]=e["x-publicId"],s["x-systemId"]=e["x-systemId"]),r=s}else throw new Error("Not implemented yet: ".concat(e.type));return r.startIndex=e.startIndex,r.endIndex=e.endIndex,e.sourceCodeLocation!=null&&(r.sourceCodeLocation=e.sourceCodeLocation),r}Me.cloneNode=pm;function Jd(e){for(var t=e.map(function(n){return pm(n,!0)}),r=1;r<t.length;r++)t[r].prev=t[r-1],t[r-1].next=t[r];return t}(function(e){var t=tt&&tt.__createBinding||(Object.create?function(s,c,u,f){f===void 0&&(f=u);var d=Object.getOwnPropertyDescriptor(c,u);(!d||("get"in d?!c.__esModule:d.writable||d.configurable))&&(d={enumerable:!0,get:function(){return c[u]}}),Object.defineProperty(s,f,d)}:function(s,c,u,f){f===void 0&&(f=u),s[f]=c[u]}),r=tt&&tt.__exportStar||function(s,c){for(var u in s)u!=="default"&&!Object.prototype.hasOwnProperty.call(c,u)&&t(c,s,u)};Object.defineProperty(e,"__esModule",{value:!0}),e.DomHandler=void 0;var n=fm,o=Me;r(Me,e);var i={withStartIndices:!1,withEndIndices:!1,xmlMode:!1},a=function(){function s(c,u,f){this.dom=[],this.root=new o.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null,typeof u=="function"&&(f=u,u=i),typeof c=="object"&&(u=c,c=void 0),this.callback=c??null,this.options=u??i,this.elementCB=f??null}return s.prototype.onparserinit=function(c){this.parser=c},s.prototype.onreset=function(){this.dom=[],this.root=new o.Document(this.dom),this.done=!1,this.tagStack=[this.root],this.lastNode=null,this.parser=null},s.prototype.onend=function(){this.done||(this.done=!0,this.parser=null,this.handleCallback(null))},s.prototype.onerror=function(c){this.handleCallback(c)},s.prototype.onclosetag=function(){this.lastNode=null;var c=this.tagStack.pop();this.options.withEndIndices&&(c.endIndex=this.parser.endIndex),this.elementCB&&this.elementCB(c)},s.prototype.onopentag=function(c,u){var f=this.options.xmlMode?n.ElementType.Tag:void 0,d=new o.Element(c,u,void 0,f);this.addNode(d),this.tagStack.push(d)},s.prototype.ontext=function(c){var u=this.lastNode;if(u&&u.type===n.ElementType.Text)u.data+=c,this.options.withEndIndices&&(u.endIndex=this.parser.endIndex);else{var f=new o.Text(c);this.addNode(f),this.lastNode=f}},s.prototype.oncomment=function(c){if(this.lastNode&&this.lastNode.type===n.ElementType.Comment){this.lastNode.data+=c;return}var u=new o.Comment(c);this.addNode(u),this.lastNode=u},s.prototype.oncommentend=function(){this.lastNode=null},s.prototype.oncdatastart=function(){var c=new o.Text(""),u=new o.CDATA([c]);this.addNode(u),c.parent=u,this.lastNode=c},s.prototype.oncdataend=function(){this.lastNode=null},s.prototype.onprocessinginstruction=function(c,u){var f=new o.ProcessingInstruction(c,u);this.addNode(f)},s.prototype.handleCallback=function(c){if(typeof this.callback=="function")this.callback(c,this.dom);else if(c)throw c},s.prototype.addNode=function(c){var u=this.tagStack[this.tagStack.length-1],f=u.children[u.children.length-1];this.options.withStartIndices&&(c.startIndex=this.parser.startIndex),this.options.withEndIndices&&(c.endIndex=this.parser.endIndex),u.children.push(c),f&&(c.prev=f,f.next=c),c.parent=u,this.lastNode=null},s}();e.DomHandler=a,e.default=a})(dm);var vw={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES=void 0,e.CASE_SENSITIVE_TAG_NAMES=["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"],e.CASE_SENSITIVE_TAG_NAMES_MAP=e.CASE_SENSITIVE_TAG_NAMES.reduce(function(t,r){return t[r.toLowerCase()]=r,t},{})})(vw);Object.defineProperty(Du,"__esModule",{value:!0});Du.formatAttributes=xw;Du.formatDOM=yw;var Tl=dm,n7=vw;function o7(e){return n7.CASE_SENSITIVE_TAG_NAMES_MAP[e]}function xw(e){for(var t={},r=0,n=e.length;r<n;r++){var o=e[r];t[o.name]=o.value}return t}function i7(e){e=e.toLowerCase();var t=o7(e);return t||e}function yw(e,t,r){t===void 0&&(t=null);for(var n=[],o,i=0,a=e.length;i<a;i++){var s=e[i];switch(s.nodeType){case 1:{var c=i7(s.nodeName);o=new Tl.Element(c,xw(s.attributes)),o.children=yw(c==="template"?s.content.childNodes:s.childNodes,o);break}case 3:o=new Tl.Text(s.nodeValue);break;case 8:o=new Tl.Comment(s.nodeValue);break;default:continue}var u=n[i-1]||null;u&&(u.next=o),o.parent=t,o.prev=u,o.next=null,n.push(o)}return r&&(o=new Tl.ProcessingInstruction(r.substring(0,r.indexOf(" ")).toLowerCase(),r),o.next=n[0]||null,o.parent=t,n.unshift(o),n[1]&&(n[1].prev=n[0])),n}var a7=tt&&tt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(cm,"__esModule",{value:!0});cm.default=u7;var s7=a7(um),l7=Du,c7=/<(![a-zA-Z\s]+)>/;function u7(e){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];var t=e.match(c7),r=t?t[1]:void 0;return(0,l7.formatDOM)((0,s7.default)(e),null,r)}var _u={},Yr={},Fu={},d7=0;Fu.SAME=d7;var f7=1;Fu.CAMELCASE=f7;Fu.possibleStandardNames={accept:0,acceptCharset:1,"accept-charset":"acceptCharset",accessKey:1,action:0,allowFullScreen:1,alt:0,as:0,async:0,autoCapitalize:1,autoComplete:1,autoCorrect:1,autoFocus:1,autoPlay:1,autoSave:1,capture:0,cellPadding:1,cellSpacing:1,challenge:0,charSet:1,checked:0,children:0,cite:0,class:"className",classID:1,className:1,cols:0,colSpan:1,content:0,contentEditable:1,contextMenu:1,controls:0,controlsList:1,coords:0,crossOrigin:1,dangerouslySetInnerHTML:1,data:0,dateTime:1,default:0,defaultChecked:1,defaultValue:1,defer:0,dir:0,disabled:0,disablePictureInPicture:1,disableRemotePlayback:1,download:0,draggable:0,encType:1,enterKeyHint:1,for:"htmlFor",form:0,formMethod:1,formAction:1,formEncType:1,formNoValidate:1,formTarget:1,frameBorder:1,headers:0,height:0,hidden:0,high:0,href:0,hrefLang:1,htmlFor:1,httpEquiv:1,"http-equiv":"httpEquiv",icon:0,id:0,innerHTML:1,inputMode:1,integrity:0,is:0,itemID:1,itemProp:1,itemRef:1,itemScope:1,itemType:1,keyParams:1,keyType:1,kind:0,label:0,lang:0,list:0,loop:0,low:0,manifest:0,marginWidth:1,marginHeight:1,max:0,maxLength:1,media:0,mediaGroup:1,method:0,min:0,minLength:1,multiple:0,muted:0,name:0,noModule:1,nonce:0,noValidate:1,open:0,optimum:0,pattern:0,placeholder:0,playsInline:1,poster:0,preload:0,profile:0,radioGroup:1,readOnly:1,referrerPolicy:1,rel:0,required:0,reversed:0,role:0,rows:0,rowSpan:1,sandbox:0,scope:0,scoped:0,scrolling:0,seamless:0,selected:0,shape:0,size:0,sizes:0,span:0,spellCheck:1,src:0,srcDoc:1,srcLang:1,srcSet:1,start:0,step:0,style:0,summary:0,tabIndex:1,target:0,title:0,type:0,useMap:1,value:0,width:0,wmode:0,wrap:0,about:0,accentHeight:1,"accent-height":"accentHeight",accumulate:0,additive:0,alignmentBaseline:1,"alignment-baseline":"alignmentBaseline",allowReorder:1,alphabetic:0,amplitude:0,arabicForm:1,"arabic-form":"arabicForm",ascent:0,attributeName:1,attributeType:1,autoReverse:1,azimuth:0,baseFrequency:1,baselineShift:1,"baseline-shift":"baselineShift",baseProfile:1,bbox:0,begin:0,bias:0,by:0,calcMode:1,capHeight:1,"cap-height":"capHeight",clip:0,clipPath:1,"clip-path":"clipPath",clipPathUnits:1,clipRule:1,"clip-rule":"clipRule",color:0,colorInterpolation:1,"color-interpolation":"colorInterpolation",colorInterpolationFilters:1,"color-interpolation-filters":"colorInterpolationFilters",colorProfile:1,"color-profile":"colorProfile",colorRendering:1,"color-rendering":"colorRendering",contentScriptType:1,contentStyleType:1,cursor:0,cx:0,cy:0,d:0,datatype:0,decelerate:0,descent:0,diffuseConstant:1,direction:0,display:0,divisor:0,dominantBaseline:1,"dominant-baseline":"dominantBaseline",dur:0,dx:0,dy:0,edgeMode:1,elevation:0,enableBackground:1,"enable-background":"enableBackground",end:0,exponent:0,externalResourcesRequired:1,fill:0,fillOpacity:1,"fill-opacity":"fillOpacity",fillRule:1,"fill-rule":"fillRule",filter:0,filterRes:1,filterUnits:1,floodOpacity:1,"flood-opacity":"floodOpacity",floodColor:1,"flood-color":"floodColor",focusable:0,fontFamily:1,"font-family":"fontFamily",fontSize:1,"font-size":"fontSize",fontSizeAdjust:1,"font-size-adjust":"fontSizeAdjust",fontStretch:1,"font-stretch":"fontStretch",fontStyle:1,"font-style":"fontStyle",fontVariant:1,"font-variant":"fontVariant",fontWeight:1,"font-weight":"fontWeight",format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:1,"glyph-name":"glyphName",glyphOrientationHorizontal:1,"glyph-orientation-horizontal":"glyphOrientationHorizontal",glyphOrientationVertical:1,"glyph-orientation-vertical":"glyphOrientationVertical",glyphRef:1,gradientTransform:1,gradientUnits:1,hanging:0,horizAdvX:1,"horiz-adv-x":"horizAdvX",horizOriginX:1,"horiz-origin-x":"horizOriginX",ideographic:0,imageRendering:1,"image-rendering":"imageRendering",in2:0,in:0,inlist:0,intercept:0,k1:0,k2:0,k3:0,k4:0,k:0,kernelMatrix:1,kernelUnitLength:1,kerning:0,keyPoints:1,keySplines:1,keyTimes:1,lengthAdjust:1,letterSpacing:1,"letter-spacing":"letterSpacing",lightingColor:1,"lighting-color":"lightingColor",limitingConeAngle:1,local:0,markerEnd:1,"marker-end":"markerEnd",markerHeight:1,markerMid:1,"marker-mid":"markerMid",markerStart:1,"marker-start":"markerStart",markerUnits:1,markerWidth:1,mask:0,maskContentUnits:1,maskUnits:1,mathematical:0,mode:0,numOctaves:1,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:1,"overline-position":"overlinePosition",overlineThickness:1,"overline-thickness":"overlineThickness",paintOrder:1,"paint-order":"paintOrder",panose1:0,"panose-1":"panose1",pathLength:1,patternContentUnits:1,patternTransform:1,patternUnits:1,pointerEvents:1,"pointer-events":"pointerEvents",points:0,pointsAtX:1,pointsAtY:1,pointsAtZ:1,prefix:0,preserveAlpha:1,preserveAspectRatio:1,primitiveUnits:1,property:0,r:0,radius:0,refX:1,refY:1,renderingIntent:1,"rendering-intent":"renderingIntent",repeatCount:1,repeatDur:1,requiredExtensions:1,requiredFeatures:1,resource:0,restart:0,result:0,results:0,rotate:0,rx:0,ry:0,scale:0,security:0,seed:0,shapeRendering:1,"shape-rendering":"shapeRendering",slope:0,spacing:0,specularConstant:1,specularExponent:1,speed:0,spreadMethod:1,startOffset:1,stdDeviation:1,stemh:0,stemv:0,stitchTiles:1,stopColor:1,"stop-color":"stopColor",stopOpacity:1,"stop-opacity":"stopOpacity",strikethroughPosition:1,"strikethrough-position":"strikethroughPosition",strikethroughThickness:1,"strikethrough-thickness":"strikethroughThickness",string:0,stroke:0,strokeDasharray:1,"stroke-dasharray":"strokeDasharray",strokeDashoffset:1,"stroke-dashoffset":"strokeDashoffset",strokeLinecap:1,"stroke-linecap":"strokeLinecap",strokeLinejoin:1,"stroke-linejoin":"strokeLinejoin",strokeMiterlimit:1,"stroke-miterlimit":"strokeMiterlimit",strokeWidth:1,"stroke-width":"strokeWidth",strokeOpacity:1,"stroke-opacity":"strokeOpacity",suppressContentEditableWarning:1,suppressHydrationWarning:1,surfaceScale:1,systemLanguage:1,tableValues:1,targetX:1,targetY:1,textAnchor:1,"text-anchor":"textAnchor",textDecoration:1,"text-decoration":"textDecoration",textLength:1,textRendering:1,"text-rendering":"textRendering",to:0,transform:0,typeof:0,u1:0,u2:0,underlinePosition:1,"underline-position":"underlinePosition",underlineThickness:1,"underline-thickness":"underlineThickness",unicode:0,unicodeBidi:1,"unicode-bidi":"unicodeBidi",unicodeRange:1,"unicode-range":"unicodeRange",unitsPerEm:1,"units-per-em":"unitsPerEm",unselectable:0,vAlphabetic:1,"v-alphabetic":"vAlphabetic",values:0,vectorEffect:1,"vector-effect":"vectorEffect",version:0,vertAdvY:1,"vert-adv-y":"vertAdvY",vertOriginX:1,"vert-origin-x":"vertOriginX",vertOriginY:1,"vert-origin-y":"vertOriginY",vHanging:1,"v-hanging":"vHanging",vIdeographic:1,"v-ideographic":"vIdeographic",viewBox:1,viewTarget:1,visibility:0,vMathematical:1,"v-mathematical":"vMathematical",vocab:0,widths:0,wordSpacing:1,"word-spacing":"wordSpacing",writingMode:1,"writing-mode":"writingMode",x1:0,x2:0,x:0,xChannelSelector:1,xHeight:1,"x-height":"xHeight",xlinkActuate:1,"xlink:actuate":"xlinkActuate",xlinkArcrole:1,"xlink:arcrole":"xlinkArcrole",xlinkHref:1,"xlink:href":"xlinkHref",xlinkRole:1,"xlink:role":"xlinkRole",xlinkShow:1,"xlink:show":"xlinkShow",xlinkTitle:1,"xlink:title":"xlinkTitle",xlinkType:1,"xlink:type":"xlinkType",xmlBase:1,"xml:base":"xmlBase",xmlLang:1,"xml:lang":"xmlLang",xmlns:0,"xml:space":"xmlSpace",xmlnsXlink:1,"xmlns:xlink":"xmlnsXlink",xmlSpace:1,y1:0,y2:0,y:0,yChannelSelector:1,z:0,zoomAndPan:1};const bw=0,po=1,Bu=2,zu=3,mm=4,Sw=5,Cw=6;function g7(e){return kt.hasOwnProperty(e)?kt[e]:null}function qt(e,t,r,n,o,i,a){this.acceptsBooleans=t===Bu||t===zu||t===mm,this.attributeName=n,this.attributeNamespace=o,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=a}const kt={},p7=["children","dangerouslySetInnerHTML","defaultValue","defaultChecked","innerHTML","suppressContentEditableWarning","suppressHydrationWarning","style"];p7.forEach(e=>{kt[e]=new qt(e,bw,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(([e,t])=>{kt[e]=new qt(e,po,!1,t,null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(e=>{kt[e]=new qt(e,Bu,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(e=>{kt[e]=new qt(e,Bu,!1,e,null,!1,!1)});["allowFullScreen","async","autoFocus","autoPlay","controls","default","defer","disabled","disablePictureInPicture","disableRemotePlayback","formNoValidate","hidden","loop","noModule","noValidate","open","playsInline","readOnly","required","reversed","scoped","seamless","itemScope"].forEach(e=>{kt[e]=new qt(e,zu,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(e=>{kt[e]=new qt(e,zu,!0,e,null,!1,!1)});["capture","download"].forEach(e=>{kt[e]=new qt(e,mm,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(e=>{kt[e]=new qt(e,Cw,!1,e,null,!1,!1)});["rowSpan","start"].forEach(e=>{kt[e]=new qt(e,Sw,!1,e.toLowerCase(),null,!1,!1)});const hm=/[\-\:]([a-z])/g,vm=e=>e[1].toUpperCase();["accent-height","alignment-baseline","arabic-form","baseline-shift","cap-height","clip-path","clip-rule","color-interpolation","color-interpolation-filters","color-profile","color-rendering","dominant-baseline","enable-background","fill-opacity","fill-rule","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","glyph-name","glyph-orientation-horizontal","glyph-orientation-vertical","horiz-adv-x","horiz-origin-x","image-rendering","letter-spacing","lighting-color","marker-end","marker-mid","marker-start","overline-position","overline-thickness","paint-order","panose-1","pointer-events","rendering-intent","shape-rendering","stop-color","stop-opacity","strikethrough-position","strikethrough-thickness","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-anchor","text-decoration","text-rendering","underline-position","underline-thickness","unicode-bidi","unicode-range","units-per-em","v-alphabetic","v-hanging","v-ideographic","v-mathematical","vector-effect","vert-adv-y","vert-origin-x","vert-origin-y","word-spacing","writing-mode","xmlns:xlink","x-height"].forEach(e=>{const t=e.replace(hm,vm);kt[t]=new qt(t,po,!1,e,null,!1,!1)});["xlink:actuate","xlink:arcrole","xlink:role","xlink:show","xlink:title","xlink:type"].forEach(e=>{const t=e.replace(hm,vm);kt[t]=new qt(t,po,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(e=>{const t=e.replace(hm,vm);kt[t]=new qt(t,po,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(e=>{kt[e]=new qt(e,po,!1,e.toLowerCase(),null,!1,!1)});const m7="xlinkHref";kt[m7]=new qt("xlinkHref",po,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(e=>{kt[e]=new qt(e,po,!1,e.toLowerCase(),null,!0,!0)});const{CAMELCASE:h7,SAME:v7,possibleStandardNames:L0}=Fu,x7=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",y7=x7+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",b7=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+y7+"]*$")),S7=Object.keys(L0).reduce((e,t)=>{const r=L0[t];return r===v7?e[t]=t:r===h7?e[t.toLowerCase()]=t:e[t]=r,e},{});Yr.BOOLEAN=zu;Yr.BOOLEANISH_STRING=Bu;Yr.NUMERIC=Sw;Yr.OVERLOADED_BOOLEAN=mm;Yr.POSITIVE_NUMERIC=Cw;Yr.RESERVED=bw;Yr.STRING=po;Yr.getPropertyInfo=g7;Yr.isCustomAttribute=b7;Yr.possibleStandardNames=S7;var xm={},ym={},_0=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,C7=/\n/g,w7=/^\s*/,j7=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,T7=/^:\s*/,O7=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,I7=/^[;\s]*/,E7=/^\s+|\s+$/g,P7=`
`,F0="/",B0="*",Oo="",$7="comment",k7="declaration",N7=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var r=1,n=1;function o(m){var h=m.match(C7);h&&(r+=h.length);var y=m.lastIndexOf(P7);n=~y?m.length-y:n+m.length}function i(){var m={line:r,column:n};return function(h){return h.position=new a(m),u(),h}}function a(m){this.start=m,this.end={line:r,column:n},this.source=t.source}a.prototype.content=e;function s(m){var h=new Error(t.source+":"+r+":"+n+": "+m);if(h.reason=m,h.filename=t.source,h.line=r,h.column=n,h.source=e,!t.silent)throw h}function c(m){var h=m.exec(e);if(h){var y=h[0];return o(y),e=e.slice(y.length),h}}function u(){c(w7)}function f(m){var h;for(m=m||[];h=d();)h!==!1&&m.push(h);return m}function d(){var m=i();if(!(F0!=e.charAt(0)||B0!=e.charAt(1))){for(var h=2;Oo!=e.charAt(h)&&(B0!=e.charAt(h)||F0!=e.charAt(h+1));)++h;if(h+=2,Oo===e.charAt(h-1))return s("End of comment missing");var y=e.slice(2,h-2);return n+=2,o(y),e=e.slice(h),n+=2,m({type:$7,comment:y})}}function g(){var m=i(),h=c(j7);if(h){if(d(),!c(T7))return s("property missing ':'");var y=c(O7),v=m({type:k7,property:z0(h[0].replace(_0,Oo)),value:y?z0(y[0].replace(_0,Oo)):Oo});return c(I7),v}}function p(){var m=[];f(m);for(var h;h=g();)h!==!1&&(m.push(h),f(m));return m}return u(),p()};function z0(e){return e?e.replace(E7,Oo):Oo}var M7=tt&&tt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ym,"__esModule",{value:!0});ym.default=D7;var A7=M7(N7);function D7(e,t){var r=null;if(!e||typeof e!="string")return r;var n=(0,A7.default)(e),o=typeof t=="function";return n.forEach(function(i){if(i.type==="declaration"){var a=i.property,s=i.value;o?t(a,s,i):s&&(r=r||{},r[a]=s)}}),r}var Hu={};Object.defineProperty(Hu,"__esModule",{value:!0});Hu.camelCase=void 0;var R7=/^--[a-zA-Z0-9-]+$/,L7=/-([a-z])/g,_7=/^[^-]+$/,F7=/^-(webkit|moz|ms|o|khtml)-/,B7=/^-(ms)-/,z7=function(e){return!e||_7.test(e)||R7.test(e)},H7=function(e,t){return t.toUpperCase()},H0=function(e,t){return"".concat(t,"-")},U7=function(e,t){return t===void 0&&(t={}),z7(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(B7,H0):e=e.replace(F7,H0),e.replace(L7,H7))};Hu.camelCase=U7;var V7=tt&&tt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},W7=V7(ym),q7=Hu;function jg(e,t){var r={};return!e||typeof e!="string"||(0,W7.default)(e,function(n,o){n&&o&&(r[(0,q7.camelCase)(n,t)]=o)}),r}jg.default=jg;var G7=jg;(function(e){var t=tt&&tt.__importDefault||function(f){return f&&f.__esModule?f:{default:f}};Object.defineProperty(e,"__esModule",{value:!0}),e.returnFirstArg=e.canTextBeChildOfNode=e.ELEMENTS_WITH_NO_TEXT_CHILDREN=e.PRESERVE_CUSTOM_ATTRIBUTES=void 0,e.isCustomComponent=i,e.setStyleProp=s;var r=O,n=t(G7),o=new Set(["annotation-xml","color-profile","font-face","font-face-src","font-face-uri","font-face-format","font-face-name","missing-glyph"]);function i(f,d){return f.includes("-")?!o.has(f):!!(d&&typeof d.is=="string")}var a={reactCompat:!0};function s(f,d){if(typeof f=="string"){if(!f.trim()){d.style={};return}try{d.style=(0,n.default)(f,a)}catch{d.style={}}}}e.PRESERVE_CUSTOM_ATTRIBUTES=Number(r.version.split(".")[0])>=16,e.ELEMENTS_WITH_NO_TEXT_CHILDREN=new Set(["tr","tbody","thead","tfoot","colgroup","table","head","html","frameset"]);var c=function(f){return!e.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(f.name)};e.canTextBeChildOfNode=c;var u=function(f){return f};e.returnFirstArg=u})(xm);Object.defineProperty(_u,"__esModule",{value:!0});_u.default=Y7;var Da=Yr,U0=xm,K7=["checked","value"],J7=["input","select","textarea"],Q7={reset:!0,submit:!0};function Y7(e,t){e===void 0&&(e={});var r={},n=!!(e.type&&Q7[e.type]);for(var o in e){var i=e[o];if((0,Da.isCustomAttribute)(o)){r[o]=i;continue}var a=o.toLowerCase(),s=V0(a);if(s){var c=(0,Da.getPropertyInfo)(s);switch(K7.includes(s)&&J7.includes(t)&&!n&&(s=V0("default"+a)),r[s]=i,c&&c.type){case Da.BOOLEAN:r[s]=!0;break;case Da.OVERLOADED_BOOLEAN:i===""&&(r[s]=!0);break}continue}U0.PRESERVE_CUSTOM_ATTRIBUTES&&(r[o]=i)}return(0,U0.setStyleProp)(e.style,r),r}function V0(e){return Da.possibleStandardNames[e]}var bm={},Z7=tt&&tt.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(bm,"__esModule",{value:!0});bm.default=ww;var Qd=O,X7=Z7(_u),Ja=xm,eO={cloneElement:Qd.cloneElement,createElement:Qd.createElement,isValidElement:Qd.isValidElement};function ww(e,t){t===void 0&&(t={});for(var r=[],n=typeof t.replace=="function",o=t.transform||Ja.returnFirstArg,i=t.library||eO,a=i.cloneElement,s=i.createElement,c=i.isValidElement,u=e.length,f=0;f<u;f++){var d=e[f];if(n){var g=t.replace(d,f);if(c(g)){u>1&&(g=a(g,{key:g.key||f})),r.push(o(g,d,f));continue}}if(d.type==="text"){var p=!d.data.trim().length;if(p&&d.parent&&!(0,Ja.canTextBeChildOfNode)(d.parent)||t.trim&&p)continue;r.push(o(d.data,d,f));continue}var m=d,h={};tO(m)?((0,Ja.setStyleProp)(m.attribs.style,m.attribs),h=m.attribs):m.attribs&&(h=(0,X7.default)(m.attribs,m.name));var y=void 0;switch(d.type){case"script":case"style":d.children[0]&&(h.dangerouslySetInnerHTML={__html:d.children[0].data});break;case"tag":d.name==="textarea"&&d.children[0]?h.defaultValue=d.children[0].data:d.children&&d.children.length&&(y=ww(d.children,t));break;default:continue}u>1&&(h.key=f),r.push(o(s(d.name,h,y),d,f))}return r.length===1?r[0]:r}function tO(e){return Ja.PRESERVE_CUSTOM_ATTRIBUTES&&e.type==="tag"&&(0,Ja.isCustomComponent)(e.name,e.attribs)}(function(e){var t=tt&&tt.__importDefault||function(c){return c&&c.__esModule?c:{default:c}};Object.defineProperty(e,"__esModule",{value:!0}),e.htmlToDOM=e.domToReact=e.attributesToProps=e.Text=e.ProcessingInstruction=e.Element=e.Comment=void 0,e.default=s;var r=t(cm);e.htmlToDOM=r.default;var n=t(_u);e.attributesToProps=n.default;var o=t(bm);e.domToReact=o.default;var i=dm;Object.defineProperty(e,"Comment",{enumerable:!0,get:function(){return i.Comment}}),Object.defineProperty(e,"Element",{enumerable:!0,get:function(){return i.Element}}),Object.defineProperty(e,"ProcessingInstruction",{enumerable:!0,get:function(){return i.ProcessingInstruction}}),Object.defineProperty(e,"Text",{enumerable:!0,get:function(){return i.Text}});var a={lowerCaseAttributeNames:!1};function s(c,u){if(typeof c!="string")throw new TypeError("First argument must be a string");return c?(0,o.default)((0,r.default)(c,(u==null?void 0:u.htmlparser2)||a),u):[]}})(ow);const W0=gt(ow),A=W0.default||W0,D=e=>{if(e==null)return"";try{if(e.includes("{{{")===!0){let r=`${e}`;const n=/&amp;/gi,o=/{{{/gi,i=/}}}/gi,a=/&quot;/gi,s=/&apos;/gi;return`<div>${r.replace(o,"<").replace(s,"'").replace(i,">").replace(a,'"').replace(n,"&")}</div>`}else return e}catch(t){console.log("There was an error decoding into HTML"),console.error(t)}};function rO(e){var t=(r,n=2)=>("00"+r).slice(-n);return t(e/36e5|0)+":"+t(e%36e5/6e4|0)+":"+t(e%6e4/1e3|0)}const Sm=()=>{const e=new Date,t=e.getDate(),r=e.getMonth(),n=e.getFullYear(),o=e.getHours();let i=e.getMinutes(),a=e.getSeconds();return a<10&&(a="0"+a),i<10&&(i="0"+i),n+"/"+(r+1)+"/"+t+"@"+o+":"+i+":"+a};function nO(e){var t=(r,n=2)=>("00"+r).slice(-n);return t(e/36e5|0)+"hr, "+t(e%36e5/6e4|0)+"min, "+t(e%6e4/1e3|0)+"sec"}const Sr=(e,t,r)=>{const n=`cumulative${t}Duration`,o=`timeOn${r}`,i=`lastAccess${r}`,a=`CumulativeTime${r}`;let s=localStorage.getItem(n)||0;s===void 0&&(s=0);const c=+s;let f=Date.now()-e+c;localStorage.setItem(n,f);const d=Sm();localStorage.setItem(i,d);const g=rO(f);localStorage.setItem(o,g),localStorage.setItem(a,nO(f))};var jw={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function r(){for(var i="",a=0;a<arguments.length;a++){var s=arguments[a];s&&(i=o(i,n(s)))}return i}function n(i){if(typeof i=="string"||typeof i=="number")return i;if(typeof i!="object")return"";if(Array.isArray(i))return r.apply(null,i);if(i.toString!==Object.prototype.toString&&!i.toString.toString().includes("[native code]"))return i.toString();var a="";for(var s in i)t.call(i,s)&&i[s]&&(a=o(a,s));return a}function o(i,a){return a?i?i+" "+a:i+a:i}e.exports?(r.default=r,e.exports=r):window.classNames=r})()})(jw);var oO=jw.exports;const Ra=gt(oO);function iO(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}else return Array.from(e)}var Cm=!1;if(typeof window<"u"){var q0={get passive(){Cm=!0}};window.addEventListener("testPassive",null,q0),window.removeEventListener("testPassive",null,q0)}var Tw=typeof window<"u"&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||window.navigator.platform==="MacIntel"&&window.navigator.maxTouchPoints>1),Vn=[],Rc=!1,Ow=-1,Qa=void 0,Ya=void 0,Iw=function(t){return Vn.some(function(r){return!!(r.options.allowTouchMove&&r.options.allowTouchMove(t))})},Lc=function(t){var r=t||window.event;return Iw(r.target)||r.touches.length>1?!0:(r.preventDefault&&r.preventDefault(),!1)},aO=function(t){if(Ya===void 0){var r=!!t&&t.reserveScrollBarGap===!0,n=window.innerWidth-document.documentElement.clientWidth;r&&n>0&&(Ya=document.body.style.paddingRight,document.body.style.paddingRight=n+"px")}Qa===void 0&&(Qa=document.body.style.overflow,document.body.style.overflow="hidden")},sO=function(){Ya!==void 0&&(document.body.style.paddingRight=Ya,Ya=void 0),Qa!==void 0&&(document.body.style.overflow=Qa,Qa=void 0)},lO=function(t){return t?t.scrollHeight-t.scrollTop<=t.clientHeight:!1},cO=function(t,r){var n=t.targetTouches[0].clientY-Ow;return Iw(t.target)?!1:r&&r.scrollTop===0&&n>0||lO(r)&&n<0?Lc(t):(t.stopPropagation(),!0)},uO=function(t,r){if(!t){console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.");return}if(!Vn.some(function(o){return o.targetElement===t})){var n={targetElement:t,options:r||{}};Vn=[].concat(iO(Vn),[n]),Tw?(t.ontouchstart=function(o){o.targetTouches.length===1&&(Ow=o.targetTouches[0].clientY)},t.ontouchmove=function(o){o.targetTouches.length===1&&cO(o,t)},Rc||(document.addEventListener("touchmove",Lc,Cm?{passive:!1}:void 0),Rc=!0)):aO(r)}},dO=function(t){if(!t){console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.");return}Vn=Vn.filter(function(r){return r.targetElement!==t}),Tw?(t.ontouchstart=null,t.ontouchmove=null,Rc&&Vn.length===0&&(document.removeEventListener("touchmove",Lc,Cm?{passive:!1}:void 0),Rc=!1)):Vn.length||sO()};function fO(e=null){let[t,r]=le.useState(e);const{current:n}=le.useRef({current:t});return Object.defineProperty(n,"current",{get:()=>t,set:o=>{Object.is(t,o)||(t=o,r(o))}}),n}function gO(e,t={isStateful:!0}){const r=fO(null),n=O.useRef(null),o=t.isStateful?r:n;return le.useEffect(()=>{!e||(typeof e=="function"?e(o.current):e.current=o.current)}),o}function _c(){return _c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},_c.apply(this,arguments)}var pO=function(t){var r=t.classes,n=t.classNames,o=t.styles,i=t.id,a=t.closeIcon,s=t.onClick;return le.createElement("button",{id:i,className:Ra(r.closeButton,n==null?void 0:n.closeButton),style:o==null?void 0:o.closeButton,onClick:s,"data-testid":"close-button"},a||le.createElement("svg",{className:n==null?void 0:n.closeIcon,style:o==null?void 0:o.closeIcon,width:28,height:28,viewBox:"0 0 36 36","data-testid":"close-icon"},le.createElement("path",{d:"M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"})))},Xl=typeof window<"u",Ew=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'];function mO(e){return e.offsetParent===null||getComputedStyle(e).visibility==="hidden"}function hO(e,t){for(var r=0;r<e.length;r++)if(e[r].checked&&e[r].form===t)return e[r]}function vO(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!0;var t=e.form||e.ownerDocument,r=t.querySelectorAll('input[type="radio"][name="'+e.name+'"]'),n=hO(r,e.form);return n===e||n===void 0&&r[0]===e}function Pw(e){for(var t=document.activeElement,r=e.querySelectorAll(Ew.join(",")),n=[],o=0;o<r.length;o++){var i=r[o];(t===i||!i.disabled&&yO(i)>-1&&!mO(i)&&vO(i))&&n.push(i)}return n}function xO(e,t){if(!(!e||e.key!=="Tab")){if(!t||!t.contains)return process,!1;if(!t.contains(e.target))return!1;var r=Pw(t),n=r[0],o=r[r.length-1];return e.shiftKey&&e.target===n?(o.focus(),e.preventDefault(),!0):!e.shiftKey&&e.target===o?(n.focus(),e.preventDefault(),!0):!1}}function yO(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?bO(e)?0:e.tabIndex:t}function bO(e){return e.getAttribute("contentEditable")}var SO=function(t){var r=t.container,n=t.initialFocusRef,o=O.useRef();return O.useEffect(function(){var i=function(u){r!=null&&r.current&&xO(u,r.current)};if(Xl&&document.addEventListener("keydown",i),Xl&&(r!=null&&r.current)){var a=function(){Ew.findIndex(function(u){var f;return(f=document.activeElement)==null?void 0:f.matches(u)})!==-1&&(o.current=document.activeElement)};if(n)a(),requestAnimationFrame(function(){var c;(c=n.current)==null||c.focus()});else{var s=Pw(r.current);s[0]&&(a(),s[0].focus())}}return function(){if(Xl){var c;document.removeEventListener("keydown",i),(c=o.current)==null||c.focus()}}},[r,n]),null},ti=[],Tg={add:function(t){ti.push(t)},remove:function(t){ti=ti.filter(function(r){return r!==t})},isTopModal:function(t){return!!ti.length&&ti[ti.length-1]===t}};function CO(e,t){O.useEffect(function(){return t&&Tg.add(e),function(){Tg.remove(e)}},[t,e])}var wO=function(t,r,n,o,i){var a=O.useRef(null);O.useEffect(function(){return r&&t.current&&o&&(a.current=t.current,uO(t.current,{reserveScrollBarGap:i})),function(){a.current&&(dO(a.current),a.current=null)}},[r,n,t,o,i])},sn={root:"react-responsive-modal-root",overlay:"react-responsive-modal-overlay",overlayAnimationIn:"react-responsive-modal-overlay-in",overlayAnimationOut:"react-responsive-modal-overlay-out",modalContainer:"react-responsive-modal-container",modalContainerCenter:"react-responsive-modal-containerCenter",modal:"react-responsive-modal-modal",modalAnimationIn:"react-responsive-modal-modal-in",modalAnimationOut:"react-responsive-modal-modal-out",closeButton:"react-responsive-modal-closeButton"},Re=le.forwardRef(function(e,t){var r,n,o,i,a=e.open,s=e.center,c=e.blockScroll,u=c===void 0?!0:c,f=e.closeOnEsc,d=f===void 0?!0:f,g=e.closeOnOverlayClick,p=g===void 0?!0:g,m=e.container,h=e.showCloseIcon,y=h===void 0?!0:h,v=e.closeIconId,x=e.closeIcon,S=e.focusTrapped,I=S===void 0?!0:S,k=e.initialFocusRef,T=k===void 0?void 0:k,P=e.animationDuration,N=P===void 0?300:P,j=e.classNames,F=e.styles,V=e.role,Z=V===void 0?"dialog":V,Y=e.ariaDescribedby,z=e.ariaLabelledby,J=e.containerId,K=e.modalId,M=e.onClose,R=e.onEscKeyDown,_=e.onOverlayClick,B=e.onAnimationEnd,q=e.children,H=e.reserveScrollBarGap,Q=gO(t),U=O.useRef(null),G=O.useRef(null),$=O.useRef(null);$.current===null&&Xl&&($.current=document.createElement("div"));var w=O.useState(!1),b=w[0],W=w[1];CO(U,a),wO(U,a,b,u,H);var L=function(){$.current&&!m&&!document.body.contains($.current)&&document.body.appendChild($.current),document.addEventListener("keydown",ie)},re=function(){$.current&&!m&&document.body.contains($.current)&&document.body.removeChild($.current),document.removeEventListener("keydown",ie)},ie=function(he){he.keyCode!==27||!Tg.isTopModal(U)||(R==null||R(he),d&&M())};O.useEffect(function(){return function(){b&&re()}},[b]),O.useEffect(function(){a&&!b&&(W(!0),L())},[a]);var ge=function(he){if(G.current===null&&(G.current=!0),!G.current){G.current=null;return}_==null||_(he),p&&M(),G.current=null},se=function(){G.current=!1},ae=function(){a||W(!1),B==null||B()},ye=m||$.current,me=a?(r=j==null?void 0:j.overlayAnimationIn)!=null?r:sn.overlayAnimationIn:(n=j==null?void 0:j.overlayAnimationOut)!=null?n:sn.overlayAnimationOut,ue=a?(o=j==null?void 0:j.modalAnimationIn)!=null?o:sn.modalAnimationIn:(i=j==null?void 0:j.modalAnimationOut)!=null?i:sn.modalAnimationOut;return b&&ye?OC.createPortal(le.createElement("div",{className:Ra(sn.root,j==null?void 0:j.root),style:F==null?void 0:F.root,"data-testid":"root"},le.createElement("div",{className:Ra(sn.overlay,j==null?void 0:j.overlay),"data-testid":"overlay","aria-hidden":!0,style:_c({animation:me+" "+N+"ms"},F==null?void 0:F.overlay)}),le.createElement("div",{ref:U,id:J,className:Ra(sn.modalContainer,s&&sn.modalContainerCenter,j==null?void 0:j.modalContainer),style:F==null?void 0:F.modalContainer,"data-testid":"modal-container",onClick:ge},le.createElement("div",{ref:Q,className:Ra(sn.modal,j==null?void 0:j.modal),style:_c({animation:ue+" "+N+"ms"},F==null?void 0:F.modal),onMouseDown:se,onMouseUp:se,onClick:se,onAnimationEnd:ae,id:K,role:Z,"aria-modal":"true","aria-labelledby":z,"aria-describedby":Y,"data-testid":"modal",tabIndex:-1},I&&le.createElement(SO,{container:Q,initialFocusRef:T}),q,y&&le.createElement(pO,{classes:sn,classNames:j,styles:F,closeIcon:x,onClick:M,id:v})))),ye):null});function jO(e){let t;const r=new Set,n=(u,f)=>{const d=typeof u=="function"?u(t):u;if(d!==t){const g=t;t=f?d:Object.assign({},t,d),r.forEach(p=>p(t,g))}},o=()=>t,i=(u,f=o,d=Object.is)=>{console.warn("[DEPRECATED] Please use `subscribeWithSelector` middleware");let g=f(t);function p(){const m=f(t);if(!d(g,m)){const h=g;u(g=m,h)}}return r.add(p),()=>r.delete(p)},c={setState:n,getState:o,subscribe:(u,f,d)=>f||d?i(u,f,d):(r.add(u),()=>r.delete(u)),destroy:()=>r.clear()};return t=e(n,o,c),c}const TO=typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent),G0=TO?O.useEffect:O.useLayoutEffect;function wm(e){const t=typeof e=="function"?jO(e):e,r=(n=t.getState,o=Object.is)=>{const[,i]=O.useReducer(y=>y+1,0),a=t.getState(),s=O.useRef(a),c=O.useRef(n),u=O.useRef(o),f=O.useRef(!1),d=O.useRef();d.current===void 0&&(d.current=n(a));let g,p=!1;(s.current!==a||c.current!==n||u.current!==o||f.current)&&(g=n(a),p=!o(d.current,g)),G0(()=>{p&&(d.current=g),s.current=a,c.current=n,u.current=o,f.current=!1});const m=O.useRef(a);G0(()=>{const y=()=>{try{const x=t.getState(),S=c.current(x);u.current(d.current,S)||(s.current=x,d.current=S,i())}catch{f.current=!0,i()}},v=t.subscribe(y);return t.getState()!==m.current&&y(),v},[]);const h=p?g:d.current;return O.useDebugValue(h),h};return Object.assign(r,t),r[Symbol.iterator]=function(){console.warn("[useStore, api] = create() is deprecated and will be removed in v4");const n=[r,t];return{next(){const o=n.length<=0;return{value:n.shift(),done:o}}}},r}const OO=e=>({configObj:{},surveyQuestionObjArray:[],requiredAnswersObj:{},setConfigObj:t=>{e(()=>({configObj:t}))},setSurveyQuestionObjArray:t=>{e(()=>({surveyQuestionObjArray:t}))},setRequiredAnswersObj:t=>{e(()=>({requiredAnswersObj:t}))}}),IO=e=>({langObj:{},setLangObj:t=>{e(()=>({langObj:t}))}}),EO=e=>({mapObj:{},setMapObj:t=>{e(()=>({mapObj:t}))}}),PO=e=>({statementsObj:{},columnStatements:{},resetColumnStatements:{},setStatementsObj:t=>{e(()=>({statementsObj:t}))},setColumnStatements:t=>{e(()=>({columnStatements:t}))},setResetColumnStatements:t=>{e(()=>({resetColumnStatements:t}))}}),X=wm((e,t)=>({...OO(e),...IO(e),...EO(e),...PO(e)})),$O=e=>({displayLocalPartIdWarning1:!1,displayLocalPartIdWarning2:!1,triggerLocalDeleteModal:!1,localParticipantName:"",setLocalParticipantName:t=>{e(()=>({localParticipantName:t}))},setLocalPartIdWarning1:t=>{e(()=>({displayLocalPartIdWarning1:t}))},setLocalPartIdWarning2:t=>{e(()=>({displayLocalPartIdWarning2:t}))},setLocalDeleteModal:t=>{e(()=>({triggerLocalDeleteModal:t}))}}),kO=e=>({triggerPresortModal:!0,presortNoReturn:!1,presortPosCards:[],presortNeuCards:[],presortNegCards:[],presortCards:[],presortSortedStatementsNumInitial:0,presortFinished:!1,triggerPresortFinishedModal:!1,triggerPresortPreventNavModal:!1,results:{},m_PresortResults:[],triggerMobilePresortFinishedModal:!1,mobilePresortFontSize:2,mobilePresortViewSize:42,triggerMobilePresortRedoModal:!1,triggerMobilePresortHelpModal:!0,triggerMobilePresortPreventNavModal:!1,setTriggerMobilePresortPreventNavModal:t=>{e(()=>({triggerMobilePresortPreventNavModal:t}))},setTriggerMobilePresortHelpModal:t=>{e(()=>({triggerMobilePresortHelpModal:t}))},setTriggerMobilePresortRedoModal:t=>{e(()=>({triggerMobilePresortRedoModal:t}))},setm_PresortStatementCount:t=>{e(()=>({m_PresortStatementCount:t}))},setMobilePresortViewSize:t=>{e(()=>({mobilePresortViewSize:t}))},setMobilePresortFontSize:t=>{e(()=>({mobilePresortFontSize:t}))},setTriggerMobilePresortFinishedModal:t=>{e(()=>({triggerMobilePresortFinishedModal:t}))},setm_PresortResults:t=>{e(()=>({m_PresortResults:t}))},setPresortNoReturn:t=>{e(()=>({presortNoReturn:t}))},setPresortPosCards:t=>{e(()=>({presortPosCards:t}))},setPresortNeuCards:t=>{e(()=>({presortNeuCards:t}))},setPresortNegCards:t=>{e(()=>({presortNegCards:t}))},setPresortCards:t=>{e(()=>({presortCards:t}))},setPresortSortedStatementsNumInitial:t=>{e(()=>({presortSortedStatementsNumInitial:t}))},setPresortFinished:t=>{e(()=>({presortFinished:t}))},setTriggerPresortFinishedModal:t=>{e(()=>({triggerPresortFinishedModal:t}))},setTriggerPresortPreventNavModal:t=>{e(()=>({triggerPresortPreventNavModal:t}))},setResults:t=>{e(()=>({results:t}))},setTriggerPresortModal:t=>{e(()=>({triggerPresortModal:t}))}}),NO=e=>({dataLoaded:!1,isLoggedIn:!1,triggerLandingModal:!1,triggerConsentModal:!1,usercode:"",urlUsercode:"not set",partId:"not required",localUsercode:"",displayAccessCodeWarning:!1,userInputAccessCode:"",displayLandingContent:!1,triggerSaveBeforeDeleteModal:!1,userInputPartId:"",displayPartIdWarning:!1,displayMobileHelpButton:!0,setDisplayMobileHelpButton:t=>{e(()=>({displayMobileHelpButton:t}))},setTriggerConsentModal:t=>{e(()=>({triggerConsentModal:t}))},setUrlUsercode:t=>{e(()=>({urlUsercode:t}))},setDisplayPartIdWarning:t=>{e(()=>({displayPartIdWarning:t}))},setUserInputPartId:t=>{e(()=>({userInputPartId:t}))},setTriggerSaveBeforeDeleteModal:t=>{e(()=>({triggerSaveBeforeDeleteModal:t}))},setDataLoaded:t=>{e(()=>({dataLoaded:t}))},setIsLoggedIn:t=>{e(()=>({isLoggedIn:t}))},setTriggerLandingModal:t=>{e(()=>({triggerLandingModal:t}))},setUsercode:t=>{e(()=>({usercode:t}))},setPartId:t=>{e(()=>({partId:t}))},setLocalUsercode:t=>{e(()=>({localUsercode:t}))},setDisplayAccessCodeWarning:t=>{e(()=>({displayAccessCodeWarning:t}))},setUserInputAccessCode:t=>{e(()=>({userInputAccessCode:t}))},setDisplayLandingContent:t=>{e(()=>({displayLandingContent:t}))}}),MO=e=>({cardFontSizePresort:5,cardFontSizeSort:5,cardFontSizePostsort:5,currentPage:"landing",progressScore:10,progressScoreAdditional:0,progressScoreAdditionalSort:0,displayNextButton:!1,minCardHeightSort:40,minCardHeightPostsort:40,setMinCardHeightPostsort:t=>{e(()=>({minCardHeightPostsort:t}))},setMinCardHeightSort:t=>{e(()=>({minCardHeightSort:t}))},setCardFontSizePostsort:t=>{e(()=>({cardFontSizePostsort:t}))},setCardFontSizeSort:t=>{e(()=>({cardFontSizeSort:t}))},setCardFontSizePresort:t=>{e(()=>({cardFontSizePresort:t}))},setCurrentPage:t=>{e(()=>({currentPage:t}))},setProgressScore:t=>{e(()=>({progressScore:t}))},setProgressScoreAdditional:t=>{e(()=>({progressScoreAdditional:t}))},setProgressScoreAdditionalSort:t=>{e(()=>({progressScoreAdditionalSort:t}))},setDisplayNextButton:t=>{e(()=>({displayNextButton:t}))}}),AO=e=>({cardHeightSort:120,cardHeightPostsort:120,columnWidth:100,draggingOverColumnId:"",hasOverloadedColumn:!1,isSortingCards:!0,isSortingFinished:!1,overloadedColumn:"",sortCompleted:!1,sortFinished:!1,sortFinishedModalHasBeenShown:!1,sortCharacteristics:{},topMargin:50,triggerSortModal:!0,triggerSortPreventNavModal:!1,triggerSortOverloadedColumnModal:!1,triggerSortingFinishedModal:!1,sortGridResults:{},bypassSort:!1,bypassPresort:!1,mobileSortFontSize:2,mobileSortViewSize:42,triggerMobileSortSwapModal:!1,triggerMobileSortHelpModal:!0,triggerMobileSortScrollBottomModal:!1,hasScrolledToBottomSort:!1,setHasScrolledToBottomSort:t=>{e(()=>({hasScrolledToBottomSort:t}))},setTriggerMobileSortScrollBottomModal:t=>{e(()=>({triggerMobileSortScrollBottomModal:t}))},setTriggerMobileSortHelpModal:t=>{e(()=>({triggerMobileSortHelpModal:t}))},setTriggerMobileSortSwapModal:t=>{e(()=>({triggerMobileSortSwapModal:t}))},setMobileSortViewSize:t=>{e(()=>({mobileSortViewSize:t}))},setMobileSortFontSize:t=>{e(()=>({mobileSortFontSize:t}))},setBypassPresort:t=>{e(()=>({bypassPresort:t}))},setBypassSort:t=>{e(()=>({bypassSort:t}))},setDraggingOverColumnId:t=>{e(()=>({draggingOverColumnId:t}))},setOverloadedColumn:t=>{e(()=>({overloadedColumn:t}))},setTriggerSortingFinishedModal:t=>{e(()=>({triggerSortingFinishedModal:t}))},setSortGridResults:t=>{e(()=>({sortGridResults:t}))},setColumnWidth:t=>{e(()=>({columnWidth:t}))},setTopMargin:t=>{e(()=>({topMargin:t}))},setIsSortingCards:t=>{e(()=>({isSortingCards:t}))},setSortCompleted:t=>{e(()=>({sortCompleted:t}))},setSortFinished:t=>{e(()=>({sortFinished:t}))},setSortFinishedModalHasBeenShown:t=>{e(()=>({sortFinishedModalHasBeenShown:t}))},setSortCharacteristics:t=>{e(()=>({sortCharacteristics:t}))},setCardHeightSort:t=>{e(()=>({cardHeightSort:t}))},setCardHeightPostsort:t=>{e(()=>({cardHeightPostsort:t}))},setTriggerSortModal:t=>{e(()=>({triggerSortModal:t}))},setIsSortingFinished:t=>{e(()=>({isSortingFinished:t}))},setHasOverloadedColumn:t=>{e(()=>({hasOverloadedColumn:t}))},setTriggerSortPreventNavModal:t=>{e(()=>({triggerSortPreventNavModal:t}))},setTriggerSortOverloadedColumnModal:t=>{e(()=>({triggerSortOverloadedColumnModal:t}))}}),DO=e=>({resultsPostsort:{},statementCommentsObj:{},triggerPostsortModal:!0,postsortCommentCheckObj:{},showPostsortCommentHighlighting:!1,triggerPostsortPreventNavModal:!1,triggerMobilePostsortPreventNavModal:!1,postsortDualImageArray:[],mobilePostsortFontSize:2,mobilePostsortViewSize:72,triggerMobilePostsortHelpModal:!0,setTriggerMobilePostsortHelpModal:t=>{e(()=>({triggerMobilePostsortHelpModal:t}))},setTriggerMobilePostsortPreventNavModal:t=>{e(()=>({triggerMobilePostsortPreventNavModal:t}))},setMobilePostsortViewSize:t=>{e(()=>({mobilePostsortViewSize:t}))},setMobilePostsortFontSize:t=>{e(()=>({mobilePostsortFontSize:t}))},setPostsortDualImageArray:t=>{e(()=>({postsortDualImageArray:t}))},setResultsPostsort:t=>{e(()=>({resultsPostsort:t}))},setStatementCommentsObj:t=>{e(()=>({statementCommentsObj:t}))},setTriggerPostsortModal:t=>{e(()=>({triggerPostsortModal:t}))},setPostsortCommentCheckObj:t=>{e(()=>({postsortCommentCheckObj:t}))},setShowPostsortCommentHighlighting:t=>{e(()=>({showPostsortCommentHighlighting:t}))},setTriggerPostsortPreventNavModal:t=>{e(()=>({triggerPostsortPreventNavModal:t}))}}),RO=e=>({disableRefreshCheck:!1,displaySubmitFallback:!1,displayGoodbyeMessage:!1,triggerLocalSubmitSuccessModal:!1,triggerTransmissionOKModal:!1,triggerTransmissionFailModal:!1,submitFailNumber:0,transmittingData:!1,checkInternetConnection:!1,displayBelowButtonText:!1,setDisplayBelowButtonText:t=>{e(()=>({displayBelowButtonText:t}))},setDisableRefreshCheck:t=>{e(()=>({disableRefreshCheck:t}))},setCheckInternetConnection:t=>{e(()=>({checkInternetConnection:t}))},setTransmittingData:t=>{e(()=>({transmittingData:t}))},setTriggerTransmissionFailModal:t=>{e(()=>({triggerTransmissionFailModal:t}))},setTriggerTransmissionOKModal:t=>{e(()=>({triggerTransmissionOKModal:t}))},setTriggerLocalSubmitSuccessModal:t=>{e(()=>({triggerLocalSubmitSuccessModal:t}))},setDisplaySubmitFallback:t=>{e(()=>({displaySubmitFallback:t}))},setDisplayGoodbyeMessage:t=>{e(()=>({displayGoodbyeMessage:t}))}}),LO=e=>({triggerSurveyModal:!0,resultsSurvey:{},triggerSurveyPreventNavModal:!1,checkRequiredQuestionsComplete:!1,requiredAnswersObj:{},answersStorage:{},triggerMobileSurveyHelpModal:!0,mobileSurveyViewSize:72,setMobileSurveyViewSize:t=>{e(()=>({mobileSurveyViewSize:t}))},setTriggerMobileSurveyHelpModal:t=>{e(()=>({triggerMobileSurveyHelpModal:t}))},setAnswersStorage:t=>{e(()=>({answersStorage:t}))},setTriggerSurveyModal:t=>{e(()=>({triggerSurveyModal:t}))},setResultsSurvey:t=>{e(()=>({resultsSurvey:t}))},setTriggerSurveyPreventNavModal:t=>{e(()=>({triggerSurveyPreventNavModal:t}))},setCheckRequiredQuestionsComplete:t=>{e(()=>({checkRequiredQuestionsComplete:t}))},setRequiredAnswersObj:t=>{e(()=>({requiredAnswersObj:t}))}}),_O=e=>({thinningSide:"rightSide",showConfirmButton:!0,previousColInfo:[],isThinningFinished:!1,isConfirmationFinished:!1,triggerThinningPreventNavModal:!1,triggerConfirmationFinishedModal:!1,isLeftSideFinished:!1,isRightSideFinished:!1,currentSelectMaxValue:0,posSorted:[],negSorted:[],instructionObj:{},targetArray:[],isRightBelowThreshold:!1,isLeftBelowThreshold:!1,currentRightIteration:0,currentLeftIteration:0,isTargetArrayFilled:!1,triggerMobileThinMoveTopModal:!1,triggerMobileThinHelpModal:!0,mobileThinFontSize:2,mobileThinViewSize:68,triggerMobileThinPreventNavModal:!1,triggerMobileThinGuidanceModal:!1,triggerMobileThinScrollBottomModal:!1,triggerThinHelpModal:!0,cardFontSizeThin:12,cardHeightThin:150,setCardHeightThin:t=>{e(()=>({cardHeightThin:t}))},setCardFontSizeThin:t=>{e(()=>({cardFontSizeThin:t}))},setTriggerThinHelpModal:t=>{e(()=>({triggerThinHelpModal:t}))},setTriggerMobileThinScrollBottomModal:t=>{e(()=>({triggerMobileThinScrollBottomModal:t}))},setTriggerMobileThinGuidanceModal:t=>{e(()=>({triggerMobileThinGuidanceModal:t}))},setTriggerMobileThinPreventNavModal:t=>{e(()=>({triggerMobileThinPreventNavModal:t}))},setTriggerMobileThinHelpModal:t=>{e(()=>({triggerMobileThinHelpModal:t}))},setMobileThinViewSize:t=>{e(()=>({mobileThinViewSize:t}))},setMobileThinFontSize:t=>{e(()=>({mobileThinFontSize:t}))},setTriggerMobileThinMoveTopModal:t=>{e(()=>({triggerMobileThinMoveTopModal:t}))},setIsTargetArrayFilled:t=>{e(()=>({isTargetArrayFilled:t}))},setCurrentLeftIteration:t=>{e(()=>({currentLeftIteration:t}))},setCurrentRightIteration:t=>{e(()=>({currentRightIteration:t}))},setIsLeftBelowThreshold:t=>{e(()=>({isLeftBelowThreshold:t}))},setIsRightBelowThreshold:t=>{e(()=>({isRightBelowThreshold:t}))},setTargetArray:t=>{e(()=>({targetArray:t}))},setInstructionObj:t=>{e(()=>({instructionObj:t}))},setPosSorted:t=>{e(()=>({posSorted:t}))},setNegSorted:t=>{e(()=>({negSorted:t}))},setCurrentSelectMaxValue:t=>{e(()=>({currentSelectMaxValue:t}))},setIsLeftSideFinished:t=>{e(()=>({isLeftSideFinished:t}))},setIsRightSideFinished:t=>{e(()=>({isRightSideFinished:t}))},setTriggerConfirmationFinishedModal:t=>{e(()=>({triggerConfirmationModal:t}))},setIsConfirmationFinished:t=>{e(()=>({isConfirmationFinished:t}))},setTriggerThinningPreventNavModal:t=>{e(()=>({triggerThinningPreventNavModal:t}))},setIsThinningFinished:t=>{e(()=>({isThinningFinished:t}))},setPreviousColInfo:t=>{e(()=>({previousColInfo:t}))},setShowConfirmButton:t=>{e(()=>({showConfirmButton:t}))},setThinningSide:t=>{e(()=>({thinningSide:t}))}}),FO=e=>({m_hasScrolledBottom:!1,setM_hasScrolledBottom:t=>{e(()=>({m_hasScrolledBottom:t}))}}),E=wm((e,t)=>({..._O(e),...MO(e),...$O(e),...NO(e),...kO(e),...AO(e),...DO(e),...RO(e),...LO(e),...FO(e)})),BO=e=>e.langObj,zO=e=>e.triggerLandingModal,HO=e=>e.setTriggerLandingModal,UO=()=>{const e=X(BO),t=E(zO),r=E(HO),n=A(D(e.landingHelpModalHead))||"",o=A(D(e.landingHelpModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(VO,{children:n}),l.jsx("hr",{}),l.jsx(WO,{children:o})]})},VO=C.div`
  font-size: 28px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,WO=C.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,qO=e=>e.langObj,Ji=e=>{const t=X(qO),r=A(D(t.loginSubmitButtonText))||"";return l.jsx(GO,{tabindex:"0",type:"submit",onClick:e.onClick,size:e.size,width:e.width,height:e.height,children:r})},GO=C.button`
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
`,KO=e=>e.langObj,JO=e=>e.configObj,QO=e=>e.displayAccessCodeWarning,YO=e=>e.displayPartIdWarning,ZO=e=>e.setUserInputPartId,XO=e=>e.setUserInputAccessCode,eI=e=>e.userInputPartId,tI=e=>e.userInputAccessCode,rI=e=>e.setDisplayLandingContent,nI=e=>e.setPartId,oI=e=>e.setDisplayNextButton,iI=e=>e.setIsLoggedIn,aI=e=>e.setDisplayAccessCodeWarning,sI=e=>e.setDisplayPartIdWarning,lI=()=>{const e=X(KO),t=X(JO),r=E(QO),n=E(YO),o=E(ZO),i=E(XO),a=E(eI),s=E(tI),c=E(rI),u=E(nI),f=E(oI),d=E(iI),g=E(aI),p=E(sI),m=A(D(e.loginWelcomeText))||"",h=A(D(e.loginHeaderText))||"",y=A(D(e.loginPartIdText))||"",v=A(D(e.partIdWarning))||"",x=A(D(e.accessCodeWarning))||"",S=A(D(e.accessInputText))||"",I=P=>{o(P.target.value)},k=P=>{i(P.target.value)};O.useEffect(()=>{f(!1);const P=N=>{if(N.key==="Enter")try{let j=!1,F=!1;const V=t.accessCode;a.length>1?j=!0:j=!1,s===V&&(F=!0),F&&j?(c(!0),u(a),localStorage.setItem("partId",a),f(!0),d(!0)):F===!1?(console.log("no access code"),g(!0),f(!1),setTimeout(()=>{g(!1)},5e3)):j===!1&&(p(!0),f(!1),console.log("no id"),setTimeout(()=>{p(!1)},5e3))}catch(j){console.log(j)}};return window.addEventListener("keyup",P),()=>window.removeEventListener("keyup",P)},[c,f,d,t.accessCode,g,s,u,p,a]);const T=()=>{try{let P=!1,N=!1;const j=t.accessCode;a.length>1?P=!0:P=!1,s===j&&(N=!0),N&&P?(c(!0),u(a),localStorage.setItem("partId",a),f(!0),d(!0)):N===!1?(console.log("no access code"),g(!0),f(!1),setTimeout(()=>{g(!1)},5e3)):P===!1&&(p(!0),f(!1),console.log("no id"),setTimeout(()=>{p(!1)},5e3))}catch(P){console.log(P)}};return l.jsxs(le.Fragment,{children:[l.jsx(uI,{children:m}),l.jsxs(cI,{children:[l.jsxs("div",{children:[l.jsx("h2",{children:h}),l.jsx(dI,{})]}),l.jsxs("div",{children:[l.jsx("h3",{children:y}),l.jsxs(J0,{children:[l.jsx(K0,{onChange:I,type:"text",autoFocus:!0,autoCapitalize:"none"}),n&&l.jsx(Yd,{children:v})]})]}),l.jsxs("div",{children:[l.jsx("h3",{children:S}),l.jsxs(J0,{children:[l.jsx(K0,{onChange:k,type:"text",autoCapitalize:"none"}),r&&l.jsx(Yd,{children:x})]})]}),l.jsx(Ji,{onClick:T,size:"1.5em",width:"200px",height:"50px"})]}),l.jsx(Yd,{})]})},cI=C.div`
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
`,uI=C.div`
  width: 900px;
  font-size: 25px;
  line-height: 1.3em;
  padding-left: 35px;
`,dI=C.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,K0=C.input`
  margin-top: 5px;
  width: 400px;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,J0=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,Yd=C.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,fI=e=>e.langObj,gI=e=>e.configObj,pI=e=>e.displayAccessCodeWarning,mI=e=>e.displayPartIdWarning,hI=e=>e.setUserInputPartId,vI=e=>e.setUserInputAccessCode,xI=e=>e.userInputPartId,yI=e=>e.userInputAccessCode,bI=e=>e.setDisplayLandingContent,SI=e=>e.setPartId,CI=e=>e.setDisplayNextButton,wI=e=>e.setIsLoggedIn,jI=e=>e.setDisplayAccessCodeWarning,TI=e=>e.setDisplayPartIdWarning,OI=()=>{const e=X(fI),t=X(gI),r=E(pI),n=E(mI),o=E(hI),i=E(vI),a=E(xI),s=E(yI),c=E(bI),u=E(SI),f=E(CI),d=E(wI),g=E(jI),p=E(TI),m=A(D(e.loginWelcomeText))||"",h=A(D(e.loginHeaderText))||"",y=A(D(e.loginPartIdText))||"",v=A(D(e.partIdWarning))||"",x=A(D(e.accessCodeWarning))||"",S=A(D(e.accessInputText))||"",I=P=>{o(P.target.value)},k=P=>{i(P.target.value)};O.useEffect(()=>{const P=N=>{if(N.key==="Enter")try{let j=!1,F=!1;const V=t.accessCode;a.length>1?j=!0:j=!1,s===V&&(F=!0),F&&j?(c(!0),u(a),localStorage.setItem("partId",a),f(!0),d(!0)):F===!1?(console.log("no access code"),g(!0),f(!1),setTimeout(()=>{g(!1)},5e3)):j===!1&&(p(!0),f(!1),console.log("no id"),setTimeout(()=>{p(!1)},5e3))}catch(j){console.log(j)}};return window.addEventListener("keyup",P),()=>window.removeEventListener("keyup",P)},[c,f,d,t.accessCode,g,s,u,p,a]);const T=()=>{try{let P=!1,N=!1;const j=t.accessCode;a.length>1?P=!0:P=!1,s===j&&(N=!0),N&&P?(c(!0),u(a),localStorage.setItem("partId",a),f(!0),d(!0)):N===!1?(console.log("no access code"),g(!0),f(!1),setTimeout(()=>{g(!1)},5e3)):P===!1&&(p(!0),f(!1),console.log("no id"),setTimeout(()=>{p(!1)},5e3))}catch(P){console.log(P)}};return l.jsxs(le.Fragment,{children:[l.jsx(EI,{children:m}),l.jsxs(II,{children:[l.jsxs("div",{children:[l.jsx($I,{children:h}),l.jsx(PI,{})]}),l.jsxs(kI,{children:[l.jsx(Z0,{children:y}),l.jsxs(Y0,{children:[l.jsx(Q0,{onChange:I,type:"text",autoCapitalize:"none",autoFocus:!0}),n&&l.jsx(Zd,{children:v})]})]}),l.jsxs(NI,{children:[l.jsx(Z0,{children:S}),l.jsxs(Y0,{children:[l.jsx(Q0,{onChange:k,type:"text",autoCapitalize:"none"}),r&&l.jsx(Zd,{children:x})]})]}),l.jsx(Ji,{size:"1.0em",width:"120px",height:"30px",onClick:T})]}),l.jsx(Zd,{})]})},II=C.div`
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
`,EI=C.div`
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
`,PI=C.hr`
  margin-top: 5px;
  margin-bottom: 5px;
`,Q0=C.input`
  margin-top: 5px;
  width: 80vw;
  height: 30px;
  font-size: 1em;
  padding-left: 5px;
`,Y0=C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`,Zd=C.div`
  color: red;
  font-weight: bold;
  font-size: 1em;
  margin-left: 10px;
`,$I=C.span`
  font-size: 1.1em;
  font-weight: bold;
`,Z0=C.span`
  font-size: 0.8em;
  font-weight: bold;
`,kI=C.div`
  height: 140px;
`,NI=C.div`
  margin-top: 10px;
  height: 80px;
`,MI=e=>e.langObj,AI=e=>e.displayPartIdWarning,DI=e=>e.setUserInputPartId,RI=e=>e.userInputPartId,LI=e=>e.setDisplayLandingContent,_I=e=>e.setPartId,FI=e=>e.setDisplayNextButton,BI=e=>e.setIsLoggedIn,zI=e=>e.setDisplayPartIdWarning,HI=()=>{const e=X(MI),t=E(AI),r=E(DI),n=E(RI),o=E(LI),i=E(_I),a=E(FI),s=E(BI),c=E(zI),u=A(D(e.loginHeaderText))||"",f=A(D(e.loginPartIdText))||"",d=A(D(e.partIdWarning))||"",g=m=>{r(m.target.value)};O.useEffect(()=>{a(!1);const m=h=>{if(h.key==="Enter"){console.log("Enter");let y=!1;n.length>0&&(y=!0,o(!0),i(n),localStorage.setItem("partId",n),a(!0),s(!0)),y===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))}};return window.addEventListener("keyup",m),()=>window.removeEventListener("keyup",m)},[o,i,a,s,n,c]);const p=m=>{let h=!1;n.length>0&&(h=!0,o(!0),i(n),localStorage.setItem("partId",n),a(!0),s(!0)),h===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))};return l.jsxs(UI,{children:[l.jsxs("div",{children:[l.jsx(JI,{children:u}),l.jsx(VI,{})]}),l.jsxs("div",{children:[l.jsx(KI,{children:f}),l.jsxs(qI,{children:[l.jsx(WI,{onChange:g,type:"text",autoFocus:!0,autoCapitalize:"none"}),t&&l.jsx(GI,{children:d})]})]}),l.jsx(Ji,{onClick:p,size:"1.0em",width:"100px",height:"30px"})]})},UI=C.div`
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
`,VI=C.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,WI=C.input`
  margin-top: 5px;
  width: 85vw;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,qI=C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`,GI=C.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,KI=C.span`
  font-size: 0.9em;
  font-weight: bold;
`,JI=C.span`
  font-size: 1.5em;
  font-weight: bold;
`,QI=e=>e.langObj,YI=e=>e.configObj,ZI=e=>e.displayAccessCodeWarning,XI=e=>e.userInputAccessCode,eE=e=>e.setDisplayLandingContent,tE=e=>e.setDisplayNextButton,rE=e=>e.setIsLoggedIn,nE=e=>e.setUserInputAccessCode,oE=e=>e.setDisplayAccessCodeWarning,iE=()=>{const e=X(QI),t=X(YI),r=E(ZI),n=E(XI),o=E(eE),i=E(tE),a=E(rE),s=E(nE),c=E(oE),u=A(D(e.loginHeaderText))||"",f=A(D(e.accessInputText))||"",d=A(D(e.accessCodeWarning))||"",g=m=>{s(m.target.value)};O.useEffect(()=>{i(!1);const m=h=>{if(h.key==="Enter"){let y=!1;const v=t.accessCode;n===v&&(y=!0,o(!0),i(!0),a(!0)),y===!1&&(c(!0),setTimeout(()=>{c(!1)},3e3))}};return window.addEventListener("keyup",m),()=>window.removeEventListener("keyup",m)},[o,i,a,t.accessCode,c,n]);const p=()=>{let m=!1;const h=t.accessCode;n===h&&(m=!0,o(!0),i(!0),a(!0)),m===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))};return l.jsxs(aE,{children:[l.jsxs("div",{children:[l.jsx(fE,{children:u}),l.jsx(sE,{})]}),l.jsxs("div",{children:[l.jsx(dE,{children:f}),l.jsx("form",{autoComplete:"none",children:l.jsxs(cE,{children:[l.jsx(lE,{onChange:g,type:"text",autoFocus:!0,autoCapitalize:"none"}),r&&l.jsx(uE,{children:d})]})})]}),l.jsx(Ji,{onClick:p,size:"1em",width:"100px",height:"30px"})]})},aE=C.div`
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
`,sE=C.hr`
  margin-top: 5px;
  margin-bottom: 30px;
  width: 80vw;
`,lE=C.input`
  margin-top: 5px;
  width: 85vw;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,cE=C.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`,uE=C.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,dE=C.span`
  font-size: 0.9em;
  font-weight: bold;
`,fE=C.span`
  font-size: 1.4em;
  font-weight: bold;
`,gE=e=>e.langObj,pE=e=>e.displayPartIdWarning,mE=e=>e.setUserInputPartId,hE=e=>e.userInputPartId,vE=e=>e.setDisplayLandingContent,xE=e=>e.setPartId,yE=e=>e.setDisplayNextButton,bE=e=>e.setIsLoggedIn,SE=e=>e.setDisplayPartIdWarning,CE=()=>{const e=X(gE),t=E(pE),r=E(mE),n=E(hE),o=E(vE),i=E(xE),a=E(yE),s=E(bE),c=E(SE),u=A(D(e.loginHeaderText))||"",f=A(D(e.loginPartIdText))||"",d=A(D(e.partIdWarning))||"",g=m=>{r(m.target.value)};O.useEffect(()=>{const m=h=>{if(h.key==="Enter"){console.log("Enter");let y=!1;n.length>0&&(y=!0,o(!0),i(n),localStorage.setItem("partId",n),a(!0),s(!0)),y===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))}};return window.addEventListener("keyup",m),()=>window.removeEventListener("keyup",m)},[o,i,a,s,n,c]);const p=()=>{let m=!1;n.length>0&&(m=!0,o(!0),i(n),localStorage.setItem("partId",n),a(!0),s(!0)),m===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))};return l.jsxs(wE,{children:[l.jsxs("div",{children:[l.jsx("h2",{children:u}),l.jsx(jE,{})]}),l.jsxs("div",{children:[l.jsx("h3",{children:f}),l.jsxs(OE,{children:[l.jsx(TE,{onChange:g,type:"text",autoFocus:!0}),t&&l.jsx(IE,{children:d})]})]}),l.jsx(Ji,{onClick:p,size:"1.5em",width:"200px",height:"50px"})]})},wE=C.div`
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
`,jE=C.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,TE=C.input`
  margin-top: 5px;
  width: 400px;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,OE=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,IE=C.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,EE=e=>e.langObj,PE=e=>e.configObj,$E=e=>e.displayAccessCodeWarning,kE=e=>e.userInputAccessCode,NE=e=>e.setDisplayLandingContent,ME=e=>e.setDisplayNextButton,AE=e=>e.setIsLoggedIn,DE=e=>e.setUserInputAccessCode,RE=e=>e.setDisplayAccessCodeWarning,LE=()=>{const e=X(EE),t=X(PE),r=E($E),n=E(kE),o=E(NE),i=E(ME),a=E(AE),s=E(DE),c=E(RE),u=A(D(e.loginHeaderText))||"",f=A(D(e.accessInputText))||"",d=A(D(e.accessCodeWarning))||"",g=m=>{s(m.target.value)};O.useEffect(()=>{i(!1);const m=h=>{if(h.key==="Enter"){let y=!1;const v=t.accessCode;n===v&&(y=!0,o(!0),i(!0),a(!0)),y===!1&&(c(!0),setTimeout(()=>{c(!1)},3e3))}};return window.addEventListener("keyup",m),()=>window.removeEventListener("keyup",m)},[o,i,a,t.accessCode,c,n]);const p=()=>{let m=!1;const h=t.accessCode;n===h&&(m=!0,o(!0),i(!0),a(!0)),m===!1&&(c(!0),setTimeout(()=>{c(!1)},5e3))};return l.jsxs(_E,{children:[l.jsxs("div",{children:[l.jsx("h2",{children:u}),l.jsx(FE,{})]}),l.jsxs("div",{children:[l.jsx("h3",{children:f}),l.jsxs(zE,{children:[l.jsx(BE,{onChange:g,type:"text",autoFocus:!0}),r&&l.jsx(HE,{children:d})]})]}),l.jsx(Ji,{onClick:p,size:"1.5em",width:"200px",height:"50px"})]})},_E=C.div`
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
`,FE=C.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,BE=C.input`
  margin-top: 5px;
  width: 400px;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,zE=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,HE=C.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`;function UE(){var e=window.navigator.userAgent,t=e.indexOf("MSIE ");if(t>0)return!0;var r=e.indexOf("Trident/");return r>0}const VE=()=>UE(),WE=e=>e.langObj,qE=()=>{const e=X(WE),t=A(D(e.ieWarningHeaderText))||"",r=A(D(e.ieWarningText))||"";return l.jsxs(GE,{children:[l.jsx("div",{children:l.jsxs("center",{children:[l.jsx("h2",{children:t}),l.jsx(KE,{})]})}),l.jsx("div",{children:l.jsx(JE,{children:l.jsx("h3",{children:r})})})]})},GE=C.div`
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
`,KE=C.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,JE=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 50px;
`,$w=(e="")=>{let t;return e.includes("?")?e.split("=")[1]:t},QE=e=>e.langObj,YE=e=>e.localParticipantName,ZE=e=>e.localUsercode,XE=e=>e.setLocalParticipantName,eP=e=>e.setLocalUsercode,tP=e=>e.setLocalPartIdWarning1,rP=e=>e.setLocalPartIdWarning2,nP=e=>e.setTriggerLocalSubmitSuccessModal,oP=e=>e.setResults,iP=e=>e.results,aP=e=>{const t=X(QE),r=E(YE),n=E(ZE),o=E(XE),i=E(eP);let a=E(tP),s=E(rP);const c=E(nP),u=E(oP),f=E(iP),d=A(D(t.localStartButtonText))||"",g=O.useCallback(()=>{let I=!1,k,T;return r.length===0?(k=!1,a(!0)):(a(!1),k=!0,localStorage.setItem("localParticipantName",r)),n.length===0?(T=!1,s(!0)):(s(!1),T=!0,localStorage.setItem("localUsercode",n)),k===!0&&T===!0?I=!0:I=!1,I},[a,s,r,n]),{history:p,location:m,match:h,staticContext:y,to:v,onClick:x,...S}=e;return O.useEffect(()=>{const I=k=>{u(f),k.key==="Enter"&&g()&&p.push("/presort")};return window.addEventListener("keyup",I),()=>window.removeEventListener("keyup",I)},[p,g,f,u]),O.useEffect(()=>{o(""),i(""),a(!1),s(!1)},[a,s,o,i]),l.jsx(lP,{...S,onClick:I=>{x&&x(I),g()&&p.push(v),c(!1)},tabindex:"3",children:d})},sP=Ki(aP),lP=C.button`
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
`,cP=e=>e.langObj,uP=e=>{const t=X(cP),r=A(D(t.localDeleteButtonText))||"";return l.jsx(dP,{tabindex:"0",type:"submit",onClick:e.onClick,children:r})},dP=C.button`
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
`,fP=e=>e.langObj,gP=e=>{const t=X(fP),r=A(D(t.localDownloadButtonText))||"";return l.jsx(pP,{tabindex:"0",type:"submit",onClick:e.onClick,children:r})},pP=C.button`
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
`;var mP=Object.defineProperty,X0=Object.getOwnPropertySymbols,hP=Object.prototype.hasOwnProperty,vP=Object.prototype.propertyIsEnumerable,e1=(e,t,r)=>t in e?mP(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ri=(e,t)=>{for(var r in t||(t={}))hP.call(t,r)&&e1(e,r,t[r]);if(X0)for(var r of X0(t))vP.call(t,r)&&e1(e,r,t[r]);return e};const Fc=e=>t=>{try{const r=e(t);return r instanceof Promise?r:{then(n){return Fc(n)(r)},catch(n){return this}}}catch(r){return{then(n){return this},catch(n){return Fc(n)(r)}}}},xP=(e,t)=>(r,n,o)=>{let i=ri({getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:y=>y,version:0,merge:(y,v)=>ri(ri({},v),y)},t);(i.blacklist||i.whitelist)&&console.warn(`The ${i.blacklist?"blacklist":"whitelist"} option is deprecated and will be removed in the next version. Please use the 'partialize' option instead.`);let a=!1;const s=new Set,c=new Set;let u;try{u=i.getStorage()}catch{}if(u)u.removeItem||console.warn(`[zustand persist middleware] The given storage for item '${i.name}' does not contain a 'removeItem' method, which will be required in v4.`);else return e((...y)=>{console.warn(`[zustand persist middleware] Unable to update item '${i.name}', the given storage is currently unavailable.`),r(...y)},n,o);const f=Fc(i.serialize),d=()=>{const y=i.partialize(ri({},n()));i.whitelist&&Object.keys(y).forEach(S=>{var I;!((I=i.whitelist)!=null&&I.includes(S))&&delete y[S]}),i.blacklist&&i.blacklist.forEach(S=>delete y[S]);let v;const x=f({state:y,version:i.version}).then(S=>u.setItem(i.name,S)).catch(S=>{v=S});if(v)throw v;return x},g=o.setState;o.setState=(y,v)=>{g(y,v),d()};const p=e((...y)=>{r(...y),d()},n,o);let m;const h=()=>{var y;if(!u)return;a=!1,s.forEach(x=>x(n()));const v=((y=i.onRehydrateStorage)==null?void 0:y.call(i,n()))||void 0;return Fc(u.getItem.bind(u))(i.name).then(x=>{if(x)return i.deserialize(x)}).then(x=>{if(x)if(typeof x.version=="number"&&x.version!==i.version){if(i.migrate)return i.migrate(x.state,x.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return x.state}).then(x=>{var S;return m=i.merge(x,(S=n())!=null?S:p),r(m,!0),d()}).then(()=>{v==null||v(m,void 0),a=!0,c.forEach(x=>x(m))}).catch(x=>{v==null||v(void 0,x)})};return o.persist={setOptions:y=>{i=ri(ri({},i),y),y.getStorage&&(u=y.getStorage())},clearStorage:()=>{var y;(y=u==null?void 0:u.removeItem)==null||y.call(u,i.name)},rehydrate:()=>h(),hasHydrated:()=>a,onHydrate:y=>(s.add(y),()=>{s.delete(y)}),onFinishHydration:y=>(c.add(y),()=>{c.delete(y)})},h(),m||p},to=wm(xP(e=>({localStoredQsorts:{},hasDownloadedQsorts:!1,setHasDownloadedQsorts:t=>{e(()=>({hasDownloadedQsorts:t}))},setLocalStoredQsorts:t=>{e(()=>({localStoredQsorts:t}))}}),{name:"sorts-storage"})),yP=e=>e.langObj,bP=e=>e.setLocalDeleteModal,SP=e=>e.localStoredQsorts,CP=e=>e.setLocalStoredQsorts,wP=e=>{const t=E(bP),r=X(yP),n=to(CP),o=to(SP),i=A(D(r.localDeleteButtonText))||"",a=()=>{console.log("deleted localStorage");const s=`${new Date().getTime()}`;localStorage.setItem(s,JSON.stringify(o)),n({}),t(!1)};return l.jsx(jP,{tabindex:"0",type:"submit",onClick:a,children:i})},jP=C.button`
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
`,TP=e=>e.langObj,OP=e=>e.triggerLocalDeleteModal,IP=e=>e.setLocalDeleteModal,EP=()=>{const e=X(TP),t=E(OP),r=E(IP),n=A(D(e.localDeleteModalHead))||"",o=A(D(e.localDeleteModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(PP,{children:n}),l.jsx("hr",{}),l.jsx($P,{children:o}),l.jsx(kP,{children:l.jsx(wP,{})})]})},PP=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,$P=C.div`
  margin-top: 15px;
`,kP=C.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
`,NP=e=>e.langObj,MP=e=>e.triggerSaveBeforeDeleteModal,AP=e=>e.setTriggerSaveBeforeDeleteModal,DP=()=>{const e=X(NP),t=E(MP),r=E(AP),n=A(D(e.localSaveBeforeDeleteModalHeader))||"",o=A(D(e.localSaveBeforeDeleteModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(RP,{children:n}),l.jsx("hr",{}),l.jsx(LP,{children:o})]})},RP=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,LP=C.div`
  margin-top: 15px;
`;function _P(e,t){console.log("download called");var r="data:text/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(e)),n=document.createElement("a");n.setAttribute("href",r),n.setAttribute("download",t+".json"),document.body.appendChild(n),n.click(),n.remove()}const FP=e=>e.displayLocalPartIdWarning1,BP=e=>e.setLocalPartIdWarning1,zP=e=>e.displayLocalPartIdWarning2,HP=e=>e.setLocalPartIdWarning2,UP=e=>e.setLocalDeleteModal,VP=e=>e.langObj,WP=e=>e.configObj,qP=e=>e.setLocalParticipantName,GP=e=>e.setLocalUsercode,KP=e=>e.localStoredQsorts,JP=e=>e.setHasDownloadedQsorts,QP=e=>e.hasDownloadedQsorts,YP=e=>e.setTriggerSaveBeforeDeleteModal,ZP=()=>{const e=X(VP),t=X(WP),r=E(FP),n=E(BP),o=E(zP),i=E(HP),a=E(UP),s=E(qP),c=E(GP),u=to(KP),f=to(QP),d=to(JP),g=E(YP),p=A(D(e.localHeader))||"",m=A(D(e.partIdText))||"",h=A(D(e.partIdWarning))||"",y=A(D(e.usercodeText))||"",v=A(D(e.localParticipantsText))||"",S=`${A(D(e.storedQsortsHeaderText))||""}: ${Object.keys(u).length} ${v}`,I=N=>{s(N.target.value),n(!1)},k=N=>{c(N.target.value),localStorage.setItem("urlUsercode",""),i(!1)},T=N=>{f?a(!0):g(!0)},P=N=>{const j=t.studyTitle,F=new Date,V=("0"+F.getFullYear()).slice(-2)+"-"+("0"+(F.getMonth()+1)).slice(-2)+"-"+F.getDate()+"_"+("0"+F.getHours()).slice(-2)+"-"+("0"+F.getMinutes()).slice(-2)+"-"+("0"+F.getSeconds()).slice(-2),Z=j+"_"+V;Object.keys(u).length>0&&_P(u,Z),d(!0)};return l.jsxs(l.Fragment,{children:[l.jsxs(XP,{children:[l.jsx(EP,{}),l.jsx(DP,{}),l.jsxs("div",{children:[l.jsx("h2",{children:p}),l.jsx(t$,{})]}),l.jsxs("div",{children:[l.jsx("h3",{children:m}),l.jsxs(r1,{children:[l.jsx(t1,{tabindex:"0",onChange:I,type:"text"}),r&&l.jsx(n1,{children:h})]})]}),l.jsxs("div",{children:[" ",l.jsx("h3",{children:y}),l.jsxs(r1,{children:[l.jsx(t1,{tabindex:"1",onChange:k,type:"text"}),o&&l.jsx(n1,{children:h})]})]}),l.jsx(sP,{tabindex:"3",to:"/presort"})]}),l.jsxs(e$,{children:[l.jsx(r$,{children:l.jsx("div",{children:S})}),l.jsxs(n$,{children:[l.jsx(uP,{onClick:T,children:"Delete"}),l.jsx(gP,{onClick:P,children:"Download"})]})]})]})},XP=C.div`
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
`,e$=C.div`
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
`,t$=C.hr`
  margin-top: 5px;
  margin-bottom: 30px;
`,t1=C.input`
  margin-top: 5px;
  width: 400px;
  height: 30px;
  font-size: 1.4em;
  padding-left: 5px;
`,r1=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`,n1=C.div`
  color: red;
  font-weight: bold;
  font-size: 1.4em;
  margin-left: 10px;
`,r$=C.div`
  font-size: 25px;
  font-weight: bold;
`,n$=C.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`,o$=e=>{if(e.length!==0)return e.length<6?1:e.length<8?2:e.length<10?3:4};function i$(e,t,r){var n=-1,o=e.length;t<0&&(t=-t>o?0:o+t),r=r>o?o:r,r<0&&(r+=o),o=t>r?0:r-t>>>0,t>>>=0;for(var i=Array(o);++n<o;)i[n]=e[n+t];return i}var jm=i$,a$=/\s/;function s$(e){for(var t=e.length;t--&&a$.test(e.charAt(t)););return t}var l$=s$,c$=l$,u$=/^\s+/;function d$(e){return e&&e.slice(0,c$(e)+1).replace(u$,"")}var f$=d$;function g$(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var mo=g$,p$=typeof tt=="object"&&tt&&tt.Object===Object&&tt,kw=p$,m$=kw,h$=typeof self=="object"&&self&&self.Object===Object&&self,v$=m$||h$||Function("return this")(),Zr=v$,x$=Zr,y$=x$.Symbol,Qi=y$,o1=Qi,Nw=Object.prototype,b$=Nw.hasOwnProperty,S$=Nw.toString,ja=o1?o1.toStringTag:void 0;function C$(e){var t=b$.call(e,ja),r=e[ja];try{e[ja]=void 0;var n=!0}catch{}var o=S$.call(e);return n&&(t?e[ja]=r:delete e[ja]),o}var w$=C$,j$=Object.prototype,T$=j$.toString;function O$(e){return T$.call(e)}var I$=O$,i1=Qi,E$=w$,P$=I$,$$="[object Null]",k$="[object Undefined]",a1=i1?i1.toStringTag:void 0;function N$(e){return e==null?e===void 0?k$:$$:a1&&a1 in Object(e)?E$(e):P$(e)}var As=N$;function M$(e){return e!=null&&typeof e=="object"}var Qo=M$,A$=As,D$=Qo,R$="[object Symbol]";function L$(e){return typeof e=="symbol"||D$(e)&&A$(e)==R$}var Uu=L$,_$=f$,s1=mo,F$=Uu,l1=NaN,B$=/^[-+]0x[0-9a-f]+$/i,z$=/^0b[01]+$/i,H$=/^0o[0-7]+$/i,U$=parseInt;function V$(e){if(typeof e=="number")return e;if(F$(e))return l1;if(s1(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=s1(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=_$(e);var r=z$.test(e);return r||H$.test(e)?U$(e.slice(2),r?2:8):B$.test(e)?l1:+e}var Mw=V$,W$=Mw,c1=1/0,q$=17976931348623157e292;function G$(e){if(!e)return e===0?e:0;if(e=W$(e),e===c1||e===-c1){var t=e<0?-1:1;return t*q$}return e===e?e:0}var K$=G$,J$=K$;function Q$(e){var t=J$(e),r=t%1;return t===t?r?t-r:t:0}var Aw=Q$,Y$=jm,Z$=Aw;function X$(e,t,r){var n=e==null?0:e.length;return n?(t=r||t===void 0?1:Z$(t),t=n-t,Y$(e,t<0?0:t,n)):[]}var ek=X$;const tk=gt(ek);var rk=jm,nk=Aw;function ok(e,t,r){return e&&e.length?(t=r||t===void 0?1:nk(t),rk(e,0,t<0?0:t)):[]}var ik=ok;const ak=gt(ik),sk=(e,t)=>{let r=tk(e,t),n=ak(e,t);return r.reverse(),[n,r]},lk=(e,t)=>{let r=[];return e.forEach((n,o)=>{let i=[];i.push(`column${n}`),i.push(t[o]),r.push(i)}),r};function ho(){const[e,t]=O.useState(window.screen.orientation.type);return O.useEffect(()=>{const r=()=>t(window.screen.orientation.type);return window.addEventListener("orientationchange",r),()=>window.removeEventListener("orientationchange",r)},[]),e}function ck(e,t){var r=-1,n=e.length;for(t||(t=Array(n));++r<n;)t[r]=e[r];return t}var Dw=ck,uk=Math.floor,dk=Math.random;function fk(e,t){return e+uk(dk()*(t-e+1))}var gk=fk,pk=gk;function mk(e,t){var r=-1,n=e.length,o=n-1;for(t=t===void 0?n:t;++r<t;){var i=pk(r,o),a=e[i];e[i]=e[r],e[r]=a}return e.length=t,e}var Rw=mk,hk=Dw,vk=Rw;function xk(e){return vk(hk(e))}var yk=xk;function bk(e,t){for(var r=-1,n=e==null?0:e.length,o=Array(n);++r<n;)o[r]=t(e[r],r,e);return o}var Lw=bk,Sk=Lw;function Ck(e,t){return Sk(t,function(r){return e[r]})}var wk=Ck;function jk(e,t){for(var r=-1,n=Array(e);++r<e;)n[r]=t(r);return n}var Tk=jk,Ok=As,Ik=Qo,Ek="[object Arguments]";function Pk(e){return Ik(e)&&Ok(e)==Ek}var $k=Pk,u1=$k,kk=Qo,_w=Object.prototype,Nk=_w.hasOwnProperty,Mk=_w.propertyIsEnumerable,Ak=u1(function(){return arguments}())?u1:function(e){return kk(e)&&Nk.call(e,"callee")&&!Mk.call(e,"callee")},Tm=Ak,Dk=Array.isArray,Lr=Dk,Bc={exports:{}};function Rk(){return!1}var Lk=Rk;Bc.exports;(function(e,t){var r=Zr,n=Lk,o=t&&!t.nodeType&&t,i=o&&!0&&e&&!e.nodeType&&e,a=i&&i.exports===o,s=a?r.Buffer:void 0,c=s?s.isBuffer:void 0,u=c||n;e.exports=u})(Bc,Bc.exports);var Om=Bc.exports,_k=9007199254740991,Fk=/^(?:0|[1-9]\d*)$/;function Bk(e,t){var r=typeof e;return t=t??_k,!!t&&(r=="number"||r!="symbol"&&Fk.test(e))&&e>-1&&e%1==0&&e<t}var Im=Bk,zk=9007199254740991;function Hk(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=zk}var Em=Hk,Uk=As,Vk=Em,Wk=Qo,qk="[object Arguments]",Gk="[object Array]",Kk="[object Boolean]",Jk="[object Date]",Qk="[object Error]",Yk="[object Function]",Zk="[object Map]",Xk="[object Number]",eN="[object Object]",tN="[object RegExp]",rN="[object Set]",nN="[object String]",oN="[object WeakMap]",iN="[object ArrayBuffer]",aN="[object DataView]",sN="[object Float32Array]",lN="[object Float64Array]",cN="[object Int8Array]",uN="[object Int16Array]",dN="[object Int32Array]",fN="[object Uint8Array]",gN="[object Uint8ClampedArray]",pN="[object Uint16Array]",mN="[object Uint32Array]",Ye={};Ye[sN]=Ye[lN]=Ye[cN]=Ye[uN]=Ye[dN]=Ye[fN]=Ye[gN]=Ye[pN]=Ye[mN]=!0;Ye[qk]=Ye[Gk]=Ye[iN]=Ye[Kk]=Ye[aN]=Ye[Jk]=Ye[Qk]=Ye[Yk]=Ye[Zk]=Ye[Xk]=Ye[eN]=Ye[tN]=Ye[rN]=Ye[nN]=Ye[oN]=!1;function hN(e){return Wk(e)&&Vk(e.length)&&!!Ye[Uk(e)]}var vN=hN;function xN(e){return function(t){return e(t)}}var Pm=xN,zc={exports:{}};zc.exports;(function(e,t){var r=kw,n=t&&!t.nodeType&&t,o=n&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===n,a=i&&r.process,s=function(){try{var c=o&&o.require&&o.require("util").types;return c||a&&a.binding&&a.binding("util")}catch{}}();e.exports=s})(zc,zc.exports);var $m=zc.exports,yN=vN,bN=Pm,d1=$m,f1=d1&&d1.isTypedArray,SN=f1?bN(f1):yN,Fw=SN,CN=Tk,wN=Tm,jN=Lr,TN=Om,ON=Im,IN=Fw,EN=Object.prototype,PN=EN.hasOwnProperty;function $N(e,t){var r=jN(e),n=!r&&wN(e),o=!r&&!n&&TN(e),i=!r&&!n&&!o&&IN(e),a=r||n||o||i,s=a?CN(e.length,String):[],c=s.length;for(var u in e)(t||PN.call(e,u))&&!(a&&(u=="length"||o&&(u=="offset"||u=="parent")||i&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||ON(u,c)))&&s.push(u);return s}var Bw=$N,kN=Object.prototype;function NN(e){var t=e&&e.constructor,r=typeof t=="function"&&t.prototype||kN;return e===r}var km=NN;function MN(e,t){return function(r){return e(t(r))}}var zw=MN,AN=zw,DN=AN(Object.keys,Object),RN=DN,LN=km,_N=RN,FN=Object.prototype,BN=FN.hasOwnProperty;function zN(e){if(!LN(e))return _N(e);var t=[];for(var r in Object(e))BN.call(e,r)&&r!="constructor"&&t.push(r);return t}var HN=zN,UN=As,VN=mo,WN="[object AsyncFunction]",qN="[object Function]",GN="[object GeneratorFunction]",KN="[object Proxy]";function JN(e){if(!VN(e))return!1;var t=UN(e);return t==qN||t==GN||t==WN||t==KN}var Hw=JN,QN=Hw,YN=Em;function ZN(e){return e!=null&&YN(e.length)&&!QN(e)}var Nm=ZN,XN=Bw,e9=HN,t9=Nm;function r9(e){return t9(e)?XN(e):e9(e)}var Yi=r9,n9=wk,o9=Yi;function i9(e){return e==null?[]:n9(e,o9(e))}var Uw=i9;const ii=gt(Uw);var a9=Rw,s9=Uw;function l9(e){return a9(s9(e))}var c9=l9,u9=yk,d9=c9,f9=Lr;function g9(e){var t=f9(e)?u9:d9;return t(e)}var p9=g9;const Vu=gt(p9);var Ol,m9=new Uint8Array(16);function h9(){if(!Ol&&(Ol=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||typeof msCrypto<"u"&&typeof msCrypto.getRandomValues=="function"&&msCrypto.getRandomValues.bind(msCrypto),!Ol))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return Ol(m9)}const v9=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function x9(e){return typeof e=="string"&&v9.test(e)}var Ot=[];for(var Xd=0;Xd<256;++Xd)Ot.push((Xd+256).toString(16).substr(1));function y9(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=(Ot[e[t+0]]+Ot[e[t+1]]+Ot[e[t+2]]+Ot[e[t+3]]+"-"+Ot[e[t+4]]+Ot[e[t+5]]+"-"+Ot[e[t+6]]+Ot[e[t+7]]+"-"+Ot[e[t+8]]+Ot[e[t+9]]+"-"+Ot[e[t+10]]+Ot[e[t+11]]+Ot[e[t+12]]+Ot[e[t+13]]+Ot[e[t+14]]+Ot[e[t+15]]).toLowerCase();if(!x9(r))throw TypeError("Stringified UUID is invalid");return r}function ee(e,t,r){e=e||{};var n=e.random||(e.rng||h9)();return n[6]=n[6]&15|64,n[8]=n[8]&63|128,y9(n)}const b9=e=>e.langObj,S9=e=>e.configObj,C9=e=>e.dataLoaded,w9=e=>e.setCurrentPage,j9=e=>e.setProgressScore,T9=e=>e.setUrlUsercode,O9=e=>e.displayLandingContent,I9=e=>e.setDisplayNextButton,E9=e=>e.mapObj,P9=e=>e.setPostsortCommentCheckObj,$9=e=>e.setCardFontSizeSort,k9=e=>e.setCardFontSizePostsort,N9=e=>e.setMinCardHeightSort,M9=e=>e.setCardHeightSort,A9=e=>e.setMinCardHeightPostsort,D9=e=>e.statementsObj,Il=()=>{var M;const e=X(b9),t=X(S9),r=X(E9),n=E(C9),o=E(w9),i=E(j9),a=E(T9);let s=E(O9);const c=E(I9),u=E(P9),f=t.headerBarColor,d=E($9),g=E(k9),p=E(N9),m=E(M9),h=E(A9),y=A(D(e.landingHead))||"",v=A(D(e.welcomeText))||"",x=X(D9),S=A(D(e==null?void 0:e.mobileWelcomeText))||"",I=A(D(e.screenOrientationText))||"";if(localStorage.getItem("currentPage")==="landing"){localStorage.removeItem("columns"),localStorage.removeItem("sortColumns"),localStorage.removeItem("columnStatements"),localStorage.removeItem("presortSortedCards"),localStorage.removeItem("HC-requiredCommentsObj"),localStorage.removeItem("LC-requiredCommentsObj"),localStorage.removeItem("HC2-requiredCommentsObj"),localStorage.removeItem("LC2-requiredCommentsObj"),localStorage.removeItem("cumulativelandingPageDuration"),localStorage.removeItem("cumulativepostsortPageDuration"),localStorage.removeItem("cumulativepresortPageDuration"),localStorage.removeItem("cumulativesortPageDuration"),localStorage.removeItem("cumulativethinningPageDuration"),localStorage.removeItem("cumulativesurveyPageDuration"),localStorage.removeItem("cumulativethinPageDuration"),localStorage.removeItem("cumulativesubmitPageDuration"),localStorage.removeItem("lastAccesslandingPage"),localStorage.removeItem("lastAccesspresortPage"),localStorage.removeItem("lastAccesssortPage"),localStorage.removeItem("lastAccesspostsortPage"),localStorage.removeItem("lastAccesssurveyPage"),localStorage.removeItem("timeOnlandingPage"),localStorage.removeItem("timeOnpresortPage"),localStorage.removeItem("timeOnthinningPage"),localStorage.removeItem("timeOnsortPage"),localStorage.removeItem("timeOnpostsortPage"),localStorage.removeItem("timeOnsurveyPage"),localStorage.removeItem("resultsPresort"),localStorage.removeItem("resultsSort"),localStorage.removeItem("resultsPostsort"),localStorage.removeItem("resultsSurvey"),localStorage.removeItem("postsortCommentCardCount"),localStorage.removeItem("allCommentsObj"),localStorage.removeItem("newCols"),localStorage.removeItem("posSortedLocal"),localStorage.removeItem("negSortedLocal"),localStorage.removeItem("currentLeftIteration"),localStorage.removeItem("currentRightIteration"),localStorage.removeItem("isNotReload"),localStorage.removeItem("posSorted"),localStorage.removeItem("negSorted"),localStorage.removeItem("selectedPosItems"),localStorage.removeItem("selectedNegItems"),localStorage.removeItem("m_PresortStatementCount"),localStorage.removeItem("presortArray2"),localStorage.removeItem("thinDisplayControllerArray"),localStorage.removeItem("mobilePresortFontSize"),localStorage.removeItem("m_SortArray1"),localStorage.removeItem("selectedPosItems"),localStorage.removeItem("selectedNegItems"),localStorage.removeItem("columnStatements"),localStorage.removeItem("m_FontSizeObject"),localStorage.removeItem("m_ViewSizeObject"),localStorage.removeItem("m_FinalThinCols"),localStorage.removeItem("m_NegRequiredStatesObj"),localStorage.removeItem("m_PosRequiredStatesObj"),localStorage.removeItem("CumulativeTimelandingPage"),localStorage.removeItem("CumulativeTimepresortPage"),localStorage.removeItem("CumulativeTimethinningPage"),localStorage.removeItem("CumulativeTimesortPage"),localStorage.removeItem("CumulativeTimepostsortPage"),localStorage.removeItem("CumulativeTimesurveyPage"),localStorage.removeItem("m_ThinDisplayStatements"),localStorage.removeItem("m_HasDisplayedFirstThinModal"),localStorage.removeItem("m_PostSortResultsObj"),localStorage.removeItem("m_PresortResults"),localStorage.removeItem("m_SortCharacteristicsArray"),localStorage.removeItem("m_ThinningFinished"),localStorage.removeItem("m_PresortFinished"),localStorage.removeItem("randomId"),localStorage.removeItem("m_ThinScrollBottom"),localStorage.removeItem("m_ViewedBottomSort"),localStorage.removeItem("m_NeedsToScroll");for(let R=0;R<x.totalStatements;R++){let _=`m_PostsortComment(s${R+1})`;localStorage.removeItem(_)}t.requiredAnswersObj!==void 0&&(localStorage.setItem("resultsSurvey",JSON.stringify(t.requiredAnswersObj)),Object.keys(t.requiredAnswersObj).forEach((_,B)=>{let q=`itemNum${B+1}`;localStorage.removeItem(q),localStorage.removeItem(_)}))}const T=O.useMemo(()=>[...r.qSortHeaders],[r.qSortHeaders]),P=O.useMemo(()=>[...r.qSortPattern],[r.qSortPattern]);let N=Math.max(...P),j=(window.innerHeight-150)/N;localStorage.setItem("cardHeightSort",j),m(j),localStorage.setItem("m_FontSizeObject",JSON.stringify({presort:2,thin:2,sort:2,postsort:2})),localStorage.setItem("m_ViewSizeObject",JSON.stringify({presort:42,thin:68,sort:72,postsort:72,survey:72})),localStorage.setItem("m_ThinDisplayStatements",JSON.stringify({display:!0})),localStorage.setItem("m_PresortDisplayStatements",JSON.stringify({display:!0})),localStorage.setItem("randomId",ee().substring(0,12)),localStorage.setItem("m_FinalThinCols",JSON.stringify([]));let F=x.columnStatements;localStorage.setItem("newCols",JSON.stringify(F));let V=em(),Z=ho();const Y=O.useRef(null);O.useEffect(()=>(Y.current=Date.now(),i(10),o("landing"),localStorage.setItem("currentPage","landing"),()=>{Sr(Y.current,"landingPage","landingPage")}),[o,i]),O.useEffect(()=>{localStorage.setItem("currentLeftIteration",0),localStorage.setItem("currentRightIteration",0),localStorage.setItem("isNotReload","true"),localStorage.setItem("thinningSide","rightSide"),localStorage.setItem("m_PresortResults","");const R=o$(P);let _=lk(T,P);localStorage.setItem("finalSortColData",JSON.stringify(_));let B=sk([..._],R),q=[...B[1]],H=[...B[0]];localStorage.setItem("sortRightArrays",JSON.stringify(q)),localStorage.setItem("sortLeftArrays",JSON.stringify(H)),t.initialScreen==="anonymous"&&c(!0),(t.setDefaultFontSizePresort==="true"||t.setDefaultFontSizePresort===!0)&&localStorage.setItem("fontSizePresort",t.defaultFontSizePresort),(t.setDefaultFontSizeSort==="true"||t.setDefaultFontSizeSort===!0)&&localStorage.setItem("fontSizeSort",t.defaultFontSizeSort),(t.setMinCardHeightSort==="true"||t.setMinCardHeightSort===!0)&&localStorage.setItem("cardHeightSort",t.minCardHeightSort),(t.setDefaultFontSizePostsort==="true"||t.setDefaultFontSizePostsort===!0)&&(g(t.defaultFontSizePostsort),localStorage.setItem("fontSizePostsort",t.defaultFontSizePostsort)),(t.setMinCardHeightPostsort==="true"||t.setMinCardHeightPostsort===!0)&&(h(t.minCardHeightPostsort),localStorage.setItem("cardHeightPostsort",t.minCardHeightPostsort));let Q=$w(window.location.href);if(Q==null){let U=localStorage.getItem("urlUsercode");U==null||U==="undefined"?(console.log("no url usercode in storage"),a("not_set"),localStorage.setItem("urlUsercode","not_set")):(console.log("URL usercode from storage: ",U),a(U==="not_set"?"not_set":`${U} (stored)`))}else{let U=Q;U=U.replace(/\/|#/g,""),console.log("URL usercode: ",U),a(U),localStorage.setItem("urlUsercode",U)}},[t,r,c,a,d,g,p,h,T,P,x,N,m]),O.useEffect(()=>{let R=Object.keys(r.qSortPattern),_=Math.max(...R),B=Math.min(...R),q=_-1,H=B+1,Q=r.qSortPattern[_],U=r.qSortPattern[q],G=r.qSortPattern[B],$=r.qSortPattern[H],w=t.showSecondPosColumn,b=t.showSecondNegColumn;const W={};for(let L=0;L<Q;L++){let re=`hc-${L}`;W[re]=!1}for(let L=0;L<G;L++){let re=`lc-${L}`;W[re]=!1}if(w==="true"||w===!0)for(let L=0;L<U;L++){let re=`hc2-${L}`;W[re]=!1}if(b==="true"||b===!0)for(let L=0;L<$;L++){let re=`lc2-${L}`;W[re]=!1}u(W)},[r,t,u]);let z=!1,J=!1,K=!1;if(V&&Z==="landscape-primary")return l.jsx(z9,{children:l.jsx("h1",{children:I})});if(t.setupTarget==="local")return l.jsx(l.Fragment,{children:n&&l.jsx(g1,{children:l.jsx(ZP,{})})});{const R=t.initialScreen;R==="anonymous"&&(s=!0),R==="partId-access"&&s===!1&&(z=!0),R==="partId"&&s===!1&&(J=!0),R==="access"&&s===!1&&(K=!0);let _=VE();return _&&(s=!1,z=!1,K=!1,J=!1),(t.useMobileMode===!0||t.useMobileMode==="true")&&(localStorage.setItem("presortArray",JSON.stringify(Vu((M=x==null?void 0:x.columnStatements)==null?void 0:M.statementList))),V)?(console.log("Mobile detected"),l.jsx(le.Fragment,{children:n&&l.jsxs(le.Fragment,{children:[l.jsx(B9,{background:f,children:y}),l.jsxs(R9,{children:[z&&l.jsx(OI,{}),J&&l.jsx(HI,{}),K&&l.jsx(iE,{}),s&&l.jsx(_9,{children:l.jsx("div",{children:S})})]})]})})):l.jsx(le.Fragment,{children:n&&l.jsxs(le.Fragment,{children:[l.jsx(F9,{background:f,children:y}),l.jsx(UO,{}),l.jsxs(g1,{children:[_&&l.jsx(qE,{}),z&&l.jsx(lI,{}),J&&l.jsx(CE,{}),K&&l.jsx(LE,{}),s&&l.jsx(L9,{children:l.jsx("div",{children:v})})]})]})})}},Vw=UC`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Ww=UC`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,g1=C.div`
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
`,R9=C.div`
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
`,L9=C.div`
  display: flex;
  width: 75vw;
  font-size: 1.25em;
  visibility: ${e=>e.view?"hidden":"visible"};
  animation: ${e=>e.view?Ww:Vw} 0.5s linear;
  transition: visibility 0.5s linear;
  justify-content: center;
  align-items: center;
`,_9=C.div`
  display: flex;
  flex-wrap: wrap;
  width: 90vw;
  height: 100%;
  font-size: 4.1vw;
  visibility: ${e=>e.view?"hidden":"visible"};
  animation: ${e=>e.view?Ww:Vw} 0.5s linear;
  transition: visibility 0.5s linear;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.mobileText};

  iframe {
    width: 84vw;
    height: 47.2vw;
  }
`,F9=C.div`
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
`,B9=C.div`
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
`,z9=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.mobileText};
  width: 100vw;
  height: 100vh;
`,vo=e=>{try{let t=e.includes("<"),r=e.includes(">");if(t===!0||r===!0){const n=/</gi,o=/>/gi;return e.replace(n,"&lt").replace(o,"&gt")}else return e}catch(t){console.log("There was an error sanitizing User Input"),console.error(t)}};function Ee(e,t){const[r,n]=O.useState(()=>{try{const i=window.localStorage.getItem(e);return i===null?(window.localStorage.setItem(e,JSON.stringify(t)),t):JSON.parse(i)}catch(i){return console.log(i),t}});return[r,i=>{try{const a=i instanceof Function?i(r):i;n(a),window.localStorage.setItem(e,JSON.stringify(a))}catch(a){console.log(a)}}]}const hn=e=>O.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("g",{clipPath:"url(#clip0_3_23)"},O.createElement("path",{d:"M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),O.createElement("path",{d:"M31.9444 55.5556C35.7798 55.5556 38.8889 51.2028 38.8889 45.8333C38.8889 40.4639 35.7798 36.1111 31.9444 36.1111C28.1091 36.1111 25 40.4639 25 45.8333C25 51.2028 28.1091 55.5556 31.9444 55.5556Z",fill:"#664500"}),O.createElement("path",{d:"M68.0556 55.5556C71.8909 55.5556 75 51.2028 75 45.8333C75 40.4639 71.8909 36.1111 68.0556 36.1111C64.2202 36.1111 61.1111 40.4639 61.1111 45.8333C61.1111 51.2028 64.2202 55.5556 68.0556 55.5556Z",fill:"#664500"}),O.createElement("path",{d:"M65.2361 77.4417C65.2055 77.3194 62.0555 65.2778 50 65.2778C37.9444 65.2778 34.7944 77.3194 34.7639 77.4417C34.6167 78.0333 34.8861 78.6389 35.4083 78.9528C35.9305 79.2639 36.6111 79.1917 37.0639 78.7861C37.0889 78.7639 39.8778 76.3889 50 76.3889C59.9722 76.3889 62.825 78.6944 62.9333 78.7861C63.1972 79.0361 63.5417 79.1667 63.8889 79.1667C64.1222 79.1667 64.3583 79.1083 64.5722 78.9889C65.1167 78.6778 65.3889 78.0472 65.2361 77.4417Z",fill:"#664500"})),O.createElement("defs",null,O.createElement("clipPath",{id:"clip0_3_23"},O.createElement("rect",{width:100,height:100,fill:"white"})))),pr=e=>O.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("g",{clipPath:"url(#clip0_2_11)"},O.createElement("path",{d:"M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),O.createElement("path",{d:"M70.7917 82.9972C70.6667 82.5 67.5472 70.8333 50 70.8333C32.45 70.8333 29.3333 82.5 29.2083 82.9972C29.0556 83.6 29.3278 84.225 29.8667 84.5361C30.4083 84.8389 31.0861 84.7556 31.5333 84.3222C31.5861 84.2694 36.9611 79.1667 50 79.1667C63.0389 79.1667 68.4167 84.2694 68.4667 84.3194C68.7333 84.5833 69.0889 84.7222 69.4444 84.7222C69.6778 84.7222 69.9139 84.6639 70.1278 84.5444C70.6722 84.2333 70.9444 83.6028 70.7917 82.9972ZM43.6305 48.0361C34.5889 38.9944 20.0583 38.8889 19.4444 38.8889C17.9111 38.8889 16.6694 40.1306 16.6694 41.6611C16.6667 43.1944 17.9083 44.4389 19.4417 44.4444C19.5222 44.4444 24.7889 44.5056 30.5056 46.4917C28.8583 48.2694 27.7778 51.0306 27.7778 54.1667C27.7778 59.5389 30.8861 63.8889 34.7222 63.8889C38.5583 63.8889 41.6667 59.5389 41.6667 54.1667C41.6667 53.6833 41.6139 53.2222 41.5639 52.7583C41.6 52.7583 41.6333 52.7778 41.6667 52.7778C42.3778 52.7778 43.0889 52.5056 43.6305 51.9639C44.7167 50.8778 44.7167 49.1222 43.6305 48.0361ZM80.5556 38.8889C79.9417 38.8889 65.4139 38.9944 56.3694 48.0361C55.2833 49.1222 55.2833 50.8778 56.3694 51.9639C56.9111 52.5056 57.6222 52.7778 58.3333 52.7778C58.3694 52.7778 58.4 52.7583 58.4333 52.7583C58.3889 53.2222 58.3333 53.6833 58.3333 54.1667C58.3333 59.5389 61.4417 63.8889 65.2778 63.8889C69.1139 63.8889 72.2222 59.5389 72.2222 54.1667C72.2222 51.0306 71.1417 48.2694 69.4944 46.4917C75.2111 44.5056 80.4778 44.4444 80.5611 44.4444C82.0917 44.4389 83.3333 43.1944 83.3306 41.6611C83.3278 40.1306 82.0889 38.8889 80.5556 38.8889Z",fill:"#664500"})),O.createElement("defs",null,O.createElement("clipPath",{id:"clip0_2_11"},O.createElement("rect",{width:100,height:100,fill:"white"})))),Fi=e=>O.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("g",{clipPath:"url(#clip0_1_3)"},O.createElement("path",{d:"M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z",fill:"#DA2F47",stroke:"black",strokeWidth:5}),O.createElement("path",{d:"M70.7917 82.9972C70.6667 82.5 67.5472 70.8333 50 70.8333C32.45 70.8333 29.3333 82.5 29.2083 82.9972C29.0556 83.6 29.3278 84.225 29.8667 84.5361C30.4083 84.8389 31.0861 84.7556 31.5333 84.3222C31.5861 84.2694 36.9611 79.1667 50 79.1667C63.0389 79.1667 68.4167 84.2694 68.4667 84.3194C68.7333 84.5833 69.0889 84.7222 69.4445 84.7222C69.6778 84.7222 69.9139 84.6639 70.1278 84.5444C70.6722 84.2333 70.9445 83.6028 70.7917 82.9972ZM43.6306 48.0361C34.5889 38.9944 20.0583 38.8889 19.4444 38.8889C17.9111 38.8889 16.6694 40.1306 16.6694 41.6611C16.6667 43.1944 17.9083 44.4389 19.4417 44.4444C19.5222 44.4444 24.7889 44.5056 30.5056 46.4917C28.8583 48.2694 27.7778 51.0306 27.7778 54.1667C27.7778 59.5389 30.8861 63.8889 34.7222 63.8889C38.5583 63.8889 41.6667 59.5389 41.6667 54.1667C41.6667 53.6833 41.6139 53.2222 41.5639 52.7583C41.6 52.7583 41.6333 52.7778 41.6667 52.7778C42.3778 52.7778 43.0889 52.5056 43.6306 51.9639C44.7167 50.8778 44.7167 49.1222 43.6306 48.0361ZM80.5556 38.8889C79.9417 38.8889 65.4139 38.9944 56.3694 48.0361C55.2833 49.1222 55.2833 50.8778 56.3694 51.9639C56.9111 52.5056 57.6222 52.7778 58.3333 52.7778C58.3694 52.7778 58.4 52.7583 58.4333 52.7583C58.3889 53.2222 58.3333 53.6833 58.3333 54.1667C58.3333 59.5389 61.4417 63.8889 65.2778 63.8889C69.1139 63.8889 72.2222 59.5389 72.2222 54.1667C72.2222 51.0306 71.1417 48.2694 69.4944 46.4917C75.2111 44.5056 80.4778 44.4444 80.5611 44.4444C82.0917 44.4389 83.3333 43.1944 83.3306 41.6611C83.3278 40.1306 82.0889 38.8889 80.5556 38.8889Z",fill:"#292F33"})),O.createElement("defs",null,O.createElement("clipPath",{id:"clip0_1_3"},O.createElement("rect",{width:100,height:100,fill:"white"})))),H9=e=>e.postsortCommentCheckObj,U9=e=>e.setPostsortCommentCheckObj,V9=e=>e.configObj,W9=e=>e.showPostsortCommentHighlighting,q9=e=>e.postsortDualImageArray,G9=e=>e.setPostsortDualImageArray,K9=e=>e.mapObj,J9=e=>{const t={async setItem($,w){return await null,localStorage.setItem($,w)}},[r,n]=O.useState(!1),[o,i]=O.useState(""),[a,s]=O.useState(!1),c=JSON.parse(localStorage.getItem("sortColumns")),[u,f]=Ee("LC-requiredCommentsObj",{}),d=E(H9),g=E(U9),p=X(V9),m=E(W9),h=E(q9),y=E(G9),v=X(K9),{height:x,width:S,cardFontSize:I,disagreeObj:k}=e,T=c.vCols[k.columnDisplay];let{placeholder:P,placedOn:N}=k,j=k.columnDisplay,F=p.useImages;F==="false"&&(F=!1),F==="true"&&(F=!0);let V="";v.colTextLabelsArray&&(V=[...v.colTextLabelsArray][0]);let Z="";if(v.useColLabelNumsPostsort){let $=[...v.qSortHeaderNumbers];Z=`${N} ${$[0]}`}const Y=$=>{if($[0]==="emoji5Array")return l.jsx(Fi,{},"emojiN5");if($[0]==="emoji4Array")return l.jsx(Fi,{},"emojiN5");if($[0]==="emoji3Array")return l.jsx(pr,{},"emojiN3");if($[0]==="emoji2Array")return l.jsx(hn,{},"emojiN2")},J=[...v.columnHeadersColorsArray][0];let K,M=v.useColLabelNumsPostsort[0];(M!==void 0||M!==null)&&(M===!1||M==="false"?K=!1:K=!0);let R,_=v.useColLabelTextPostsort[0];(_!==void 0||_!==null)&&(_===!1||_==="false"?R=!1:R=!0);let B,q=v.useColLabelEmojiPostsort[0];(q!==void 0||q!==null)&&(q===!1||q==="false"?B=!1:B=!0);let H=l.jsxs(tM,{children:[B&&l.jsx(m1,{children:Y(v.emojiArrayType)}),R&&l.jsx(rM,{children:V}),K&&l.jsx(nM,{children:Z}),B&&l.jsx(m1,{children:Y(v.emojiArrayType)})]}),Q=[];e.lowCards.forEach(($,w)=>{let b=`${j}_${w}: ${$.id}`;Q.push(b)}),localStorage.setItem("noResponseCheckArrayLC1",JSON.stringify(Q));const U=($,w)=>{$.detail===2&&($.shiftKey?(h.push($.target.src),y(h),h.length===2&&s(!0)):(i($.target.src),n(!0)))},G=($,w)=>{const b=JSON.parse(localStorage.getItem("resultsPostsort"))||{};let W=JSON.parse(localStorage.getItem("allCommentsObj"))||{};$.target.value.length>0?(d[`lc-${w}`]=!0,g(d)):(d[`lc-${w}`]=!1,g(d));const re=c.vCols[k.columnDisplay],ie=$.target.id,ge=$.target.value,se=`${j}_${w}`;re.map(ae=>{if(ae.id===ie){const ue=ge.replace(/\n/g," ").replace(/,/g," ").trim();ue.length>0?(ae.comment=vo(ue),b[se]=`(${ae.id}): ${ue}`,W[se]=`(${ae.id}): ${ue}`,W[`textArea-${j}_${w+1}`]=`${ue}`,f(Se=>({...Se,[`lc-${w}`]:!0}))):(ae.comment="",b[se]=`(${ae.id}): no response`,W[se]=`(${ae.id}): no response`,W[`textArea-${j}_${w+1}`]="",f(Se=>({...Se,[`lc-${w}`]:!1})))}return ae}),t.setItem("allCommentsObj",JSON.stringify(W)),t.setItem("resultsPostsort",JSON.stringify(b))};return T.map(($,w)=>{let b=A(`<div>${D($.statement)}</div>`),L=(JSON.parse(localStorage.getItem("allCommentsObj"))||{})[`textArea-${j}_${+w+1}`]||"";p.useImages===!0&&(b=A(`<img src="${$.element.props.src}" style="pointer-events: all" alt=${$.element.props.alt} />`));let re=!0;return(p.postsortCommentsRequired==="true"||p.postsortCommentsRequired===!0)&&m===!0&&(re=u[`lc-${w}`]),l.jsxs(Q9,{children:[l.jsx(Re,{open:r,center:!0,onClose:()=>n(!1),classNames:{modal:`${p.imageFormat}`,overlay:"dualImageOverlay"},children:l.jsx("img",{src:o,width:"100%",height:"auto",alt:"modalImage"})}),l.jsxs(Re,{open:a,center:!0,onClose:()=>{s(!1),y([])},classNames:{overlay:"dualImageOverlay",modal:"dualImageModal"},children:[l.jsx("img",{src:h[0],width:"49.5%",height:"auto",alt:"modalImage"}),l.jsx("img",{src:h[1],width:"49.5%",height:"auto",style:{marginLeft:"1%"},alt:"modalImage2"})]}),l.jsx(Y9,{cardFontSize:I,backgroundColor:J,children:H}),l.jsxs(Z9,{children:[F?l.jsx(p1,{cardFontSize:I,width:S,height:x,cardColor:$.cardColor,onClick:ie=>U(ie,$.element.props.src),children:b}):l.jsx(p1,{cardFontSize:I,width:S,height:x,cardColor:$.cardColor,children:b}),l.jsx(eM,{children:l.jsx(X9,{bgColor:re,border:re,"data-gramm_editor":"false",height:x,cardFontSize:I,id:$.id,placeholder:P,defaultValue:L,onChange:ie=>{G(ie,w)}})})]})]},$.statement)})},Q9=C.div`
  width: 90vw;
  max-width: 1100px;
  margin-top: 50px;
  border-radius: 3px;
  border: 1px solid darkgray;
`,Y9=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${e=>`${e.backgroundColor}`};
  color: black;
  text-align: center;
  font-size: ${e=>`${e.cardFontSize}px`};
  height: 1.5em;
`,Z9=C.div`
  display: flex;
  align-content: center;
  background: rgb(224, 224, 224);
  width: 100%;
`,X9=C.textarea`
  padding: 10px;
  margin-top: 2px;
  background-color: ${e=>e.bgColor?"whitesmoke":"rgba(253, 224, 71, .5)"};
  height: ${e=>`${e.height}px;`};
  font-size: ${e=>`${e.cardFontSize}px`};
  width: calc(100% - 6px);
  border: 2px solid darkgray;
  border-radius: 3px;
  outline: ${e=>e.border?"none":"dashed 3px black"};
`,eM=C.div`
  padding-top: 3px;
  width: 100%;
`,p1=C.div`
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
`,m1=C.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,tM=C.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,rM=C.div`
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
`,nM=C.span`
  font-weight: bold;
  padding-top: 3px;

  font-size: clamp(1rem, 1vw, 1.5rem);
  /* font-size: 16px; */
  line-height: 1;
`,Tn=e=>O.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("g",{clipPath:"url(#clip0_3_18)"},O.createElement("path",{d:"M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),O.createElement("path",{d:"M31.9444 55.5556C35.7798 55.5556 38.8889 51.2028 38.8889 45.8333C38.8889 40.4639 35.7798 36.1111 31.9444 36.1111C28.1091 36.1111 25 40.4639 25 45.8333C25 51.2028 28.1091 55.5556 31.9444 55.5556Z",fill:"#664500"}),O.createElement("path",{d:"M68.0555 55.5556C71.8908 55.5556 75 51.2028 75 45.8333C75 40.4639 71.8908 36.1111 68.0555 36.1111C64.2202 36.1111 61.1111 40.4639 61.1111 45.8333C61.1111 51.2028 64.2202 55.5556 68.0555 55.5556Z",fill:"#664500"}),O.createElement("path",{d:"M33.3333 77.7778C38.8889 63.8889 69.4445 63.8889 69.4445 69.4444C69.4445 72.2222 47.2222 66.6667 33.3333 77.7778Z",fill:"#664500"})),O.createElement("defs",null,O.createElement("clipPath",{id:"clip0_3_18"},O.createElement("rect",{width:100,height:100,fill:"white"})))),oM=e=>e.postsortCommentCheckObj,iM=e=>e.setPostsortCommentCheckObj,aM=e=>e.configObj,sM=e=>e.showPostsortCommentHighlighting,lM=e=>e.postsortDualImageArray,cM=e=>e.setPostsortDualImageArray,uM=e=>e.mapObj,dM=e=>{const t={async setItem($,w){return await null,localStorage.setItem($,w)}},[r,n]=O.useState(!1),[o,i]=O.useState(""),[a,s]=O.useState(!1),c=JSON.parse(localStorage.getItem("sortColumns")),[u,f]=Ee("LC2-requiredCommentsObj",{}),d=E(oM),g=E(iM),p=X(aM),m=E(sM),h=E(lM),y=E(cM),v=X(uM),{height:x,width:S,cardFontSize:I,disagreeObj:k}=e,T=c.vCols[k.columnDisplay2];let{placeholder:P,placedOn:N}=k;const j=k.columnDisplay2;let F=p.useImages;F==="false"&&(F=!1),F==="true"&&(F=!0);let V="";v.colTextLabelsArray&&(V=[...v.colTextLabelsArray][1]);let Z="";if(v.useColLabelNumsPostsort){let $=[...v.qSortHeaderNumbers];Z=`${N} ${$[1]}`}const Y=$=>{if($[0]==="emoji5Array")return l.jsx(pr,{},"emojiN3");if($[0]==="emoji4Array")return l.jsx(pr,{},"emojiN3");if($[0]==="emoji3Array")return l.jsx(hn,{},"emojiN2");if($[0]==="emoji2Array")return l.jsx(Tn,{},"emojiN1")},J=[...v.columnHeadersColorsArray][1];let K,M=v.useColLabelNumsPostsort[0];(M!==void 0||M!==null)&&(M===!1||M==="false"?K=!1:K=!0);let R,_=v.useColLabelTextPostsort[0];(_!==void 0||_!==null)&&(_===!1||_==="false"?R=!1:R=!0);let B,q=v.useColLabelEmojiPostsort[0];(q!==void 0||q!==null)&&(q===!1||q==="false"?B=!1:B=!0);let H=l.jsxs(vM,{children:[B&&l.jsx(v1,{children:Y(v.emojiArrayType)}),R&&l.jsx(xM,{children:V}),K&&l.jsx(yM,{children:Z}),B&&l.jsx(v1,{children:Y(v.emojiArrayType)})]}),Q=[];e.lowCards2.forEach(($,w)=>{let b=`${j}_${w}: ${$.id}`;Q.push(b)}),localStorage.setItem("noResponseCheckArrayLC2",JSON.stringify(Q));const U=($,w)=>{$.detail===2&&($.shiftKey?(h.push($.target.src),y(h),h.length===2&&s(!0)):(i($.target.src),n(!0)))},G=($,w)=>{const b=JSON.parse(localStorage.getItem("resultsPostsort"))||{};let W=JSON.parse(localStorage.getItem("allCommentsObj"))||{};$.target.value.length>0?(d[`lc2-${w}`]=!0,g(d)):(d[`lc2-${w}`]=!1,g(d));const re=[...c.vCols[k.columnDisplay2]],ie=$.target.id,ge=$.target.value,se=`${j}_${w}`;re.map(ae=>{if(ae.id===ie){const ue=ge.replace(/\n/g," ").replace(/,/g," ").trim();ue.length>0?(ae.comment=vo(ue),b[se]=`(${ae.id}): ${ue}`,W[se]=`(${ae.id}): ${ue}`,W[`textArea-${j}_${w+1}`]=`${ue}`,f(Se=>({...Se,[`lc2-${w}`]:!0}))):(ae.comment="",b[se]=`(${ae.id}): no response`,W[se]=`(${ae.id}): no response`,W[`textArea-${j}_${w+1}`]="",f(Se=>({...Se,[`lc2-${w}`]:!1})))}return ae}),t.setItem("allCommentsObj",JSON.stringify(W)),t.setItem("resultsPostsort",JSON.stringify(b))};return T.map(($,w)=>{let b=A(`<div>${D($.statement)}</div>`),L=(JSON.parse(localStorage.getItem("allCommentsObj"))||{})[`textArea-${j}_${+w+1}`]||"";p.useImages===!0&&(b=A(`<img src="${$.element.props.src}" style="pointer-events: all" alt=${$.element.props.alt} />`));let re=!0;return(p.postsortCommentsRequired==="true"||p.postsortCommentsRequired===!0)&&m===!0&&(re=u[`lc2-${w}`]),l.jsxs(fM,{children:[l.jsx(Re,{open:r,center:!0,onClose:()=>n(!1),classNames:{modal:`${p.imageFormat}`,overlay:"dualImageOverlay"},children:l.jsx("img",{src:o,width:"100%",height:"auto",alt:"modalImage"})}),l.jsxs(Re,{open:a,center:!0,onClose:()=>{s(!1),y([])},classNames:{overlay:"dualImageOverlay",modal:"dualImageModal"},children:[l.jsx("img",{src:h[0],width:"49.5%",height:"auto",alt:"modalImage"}),l.jsx("img",{src:h[1],width:"49.5%",height:"auto",style:{marginLeft:"1%"},alt:"modalImage2"})]}),l.jsx(gM,{cardFontSize:I,backgroundColor:J,children:H}),l.jsxs(pM,{children:[F?l.jsx(h1,{cardFontSize:I,width:S,height:x,cardColor:$.cardColor,onClick:ie=>U(ie,$.element.props.src),children:b}):l.jsx(h1,{cardFontSize:I,width:S,height:x,cardColor:$.cardColor,children:b}),l.jsx(hM,{children:l.jsx(mM,{bgColor:re,border:re,"data-gramm_editor":"false",id:$.id,height:x,cardFontSize:I,className:"commentTextArea",placeholder:P,defaultValue:L,onChange:ie=>{G(ie,w)}})})]})]},$.statement)})},fM=C.div`
  width: 90vw;
  max-width: 1100px;
  margin-top: 50px;
  border-radius: 3px;
  border: 1px solid darkgray;
`,gM=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: lightpink;
  font-size: ${e=>`${e.cardFontSize}px`};
  color: black;
  text-align: center;
  height: 1.5em;
`,pM=C.div`
  display: flex;
  align-content: center;
  background: rgb(224, 224, 224);
  width: 100%;
`,mM=C.textarea`
  padding: 10px;
  background-color: ${e=>e.bgColor?"whitesmoke":"rgba(253, 224, 71, .5)"};
  height: ${e=>`${e.height}px;`};
  font-size: ${e=>`${e.cardFontSize}px`};
  width: calc(100% - 6px);
  border: 2px solid darkgray;
  border-radius: 3px;
  outline: ${e=>e.border?"none":"dashed 3px black"};
`,hM=C.div`
  padding-top: 3px;
  width: 100%;
`,h1=C.div`
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
`,v1=C.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,vM=C.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,xM=C.div`
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
`,yM=C.span`
  font-weight: bold;
  padding-top: 3px;

  font-size: clamp(1rem, 1vw, 1.5rem);
  /* font-size: 16px; */
  line-height: 1;
`,vn=e=>O.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("g",{clipPath:"url(#clip0_3_33)"},O.createElement("path",{d:"M50 2.5C76.2332 2.5 97.5 23.7668 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7668 97.5 2.5 76.2332 2.5 50C2.5 23.7668 23.7668 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),O.createElement("path",{d:"M19.4444 63.8889C27.1151 63.8889 33.3333 57.6706 33.3333 50C33.3333 42.3294 27.1151 36.1111 19.4444 36.1111C11.7738 36.1111 5.55556 42.3294 5.55556 50C5.55556 57.6706 11.7738 63.8889 19.4444 63.8889Z",fill:"#FF7892"}),O.createElement("path",{d:"M80.5555 63.8889C88.2262 63.8889 94.4444 57.6706 94.4444 50C94.4444 42.3294 88.2262 36.1111 80.5555 36.1111C72.8849 36.1111 66.6667 42.3294 66.6667 50C66.6667 57.6706 72.8849 63.8889 80.5555 63.8889Z",fill:"#FF7892"}),O.createElement("path",{d:"M75.9306 60.0805C75.4361 59.6333 74.6972 59.6055 74.1667 60C74.0583 60.0805 63.2722 68.0555 50 68.0555C36.7611 68.0555 25.9389 60.0805 25.8333 60C25.3028 59.6055 24.5639 59.6389 24.0695 60.0805C23.5778 60.525 23.4667 61.2583 23.8083 61.825C24.1667 62.4222 32.7445 76.3889 50 76.3889C67.2556 76.3889 75.8361 62.4222 76.1917 61.825C76.5333 61.2555 76.425 60.525 75.9306 60.0805ZM22.2195 41.6667C21.8028 41.6667 21.3778 41.5722 20.9806 41.3722C19.6083 40.6861 19.0528 39.0167 19.7389 37.6444C19.8833 37.3555 23.4 30.5555 33.3333 30.5555C43.2695 30.5555 46.7833 37.3583 46.9278 37.6472C47.6139 39.0194 47.0583 40.6889 45.6861 41.375C44.3195 42.0555 42.6722 41.5111 41.975 40.1639C41.8556 39.9417 39.6695 36.1111 33.3333 36.1111C26.8972 36.1111 24.725 40.0917 24.7056 40.1305C24.2195 41.1055 23.2389 41.6667 22.2195 41.6667ZM77.7806 41.6667C76.7611 41.6667 75.7806 41.1055 75.2917 40.1305C75.2222 40.0028 73.0528 36.1111 66.6667 36.1111C60.2806 36.1111 58.1111 40.0028 58.0222 40.1667C57.3 41.5028 55.6361 42.0278 54.2861 41.3333C52.9389 40.6333 52.3917 39.0028 53.0695 37.6444C53.2139 37.3583 56.7306 30.5555 66.6667 30.5555C76.6028 30.5555 80.1195 37.3583 80.2639 37.6472C80.95 39.0194 80.3945 40.6889 79.0222 41.375C78.6222 41.5722 78.1972 41.6667 77.7806 41.6667Z",fill:"#664500"})),O.createElement("defs",null,O.createElement("clipPath",{id:"clip0_3_33"},O.createElement("rect",{width:100,height:100,fill:"white"})))),Nr=e=>O.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("g",{clipPath:"url(#clip0_3_38)"},O.createElement("path",{d:"M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),O.createElement("path",{d:"M31.9444 50C35.7798 50 38.8889 43.1599 38.8889 34.7222C38.8889 26.2846 35.7798 19.4445 31.9444 19.4445C28.1091 19.4445 25 26.2846 25 34.7222C25 43.1599 28.1091 50 31.9444 50Z",fill:"#664500"}),O.createElement("path",{d:"M68.0556 50C71.8909 50 75 43.1599 75 34.7222C75 26.2846 71.8909 19.4445 68.0556 19.4445C64.2202 19.4445 61.1111 26.2846 61.1111 34.7222C61.1111 43.1599 64.2202 50 68.0556 50Z",fill:"#664500"}),O.createElement("path",{d:"M50 61.1111C39.9361 61.1111 33.2583 59.9389 25 58.3333C23.1139 57.9694 19.4445 58.3333 19.4445 63.8889C19.4445 75 32.2083 88.8889 50 88.8889C67.7889 88.8889 80.5556 75 80.5556 63.8889C80.5556 58.3333 76.8861 57.9666 75 58.3333C66.7417 59.9389 60.0639 61.1111 50 61.1111Z",fill:"#664500"}),O.createElement("path",{d:"M25 63.8889C25 63.8889 33.3333 66.6667 50 66.6667C66.6667 66.6667 75 63.8889 75 63.8889C75 63.8889 69.4444 75 50 75C30.5556 75 25 63.8889 25 63.8889Z",fill:"white"})),O.createElement("defs",null,O.createElement("clipPath",{id:"clip0_3_38"},O.createElement("rect",{width:100,height:100,fill:"white"})))),Vo=e=>O.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("g",{clipPath:"url(#clip0_3_49)"},O.createElement("path",{d:"M50 2.5C76.2332 2.5 97.5 23.7668 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7668 97.5 2.5 76.2332 2.5 50C2.5 23.7668 23.7668 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),O.createElement("path",{d:"M50 58.3333C39.9361 58.3333 33.2583 57.1611 25 55.5555C23.1139 55.1917 19.4445 55.5555 19.4445 61.1111C19.4445 72.2222 32.2083 86.1111 50 86.1111C67.7889 86.1111 80.5556 72.2222 80.5556 61.1111C80.5556 55.5555 76.8861 55.1889 75 55.5555C66.7417 57.1611 60.0639 58.3333 50 58.3333Z",fill:"#664500"}),O.createElement("path",{d:"M25 61.1111C25 61.1111 33.3333 63.8889 50 63.8889C66.6667 63.8889 75 61.1111 75 61.1111C75 61.1111 69.4444 72.2222 50 72.2222C30.5556 72.2222 25 61.1111 25 61.1111Z",fill:"white"}),O.createElement("path",{d:"M43.5611 12.2583L30.9445 14.4833L24.4445 2.66945C23.7278 1.36667 22.2556 0.66945 20.8 0.925005C19.3361 1.18334 18.1972 2.34445 17.9695 3.81112L15.9 17.1361L3.28335 19.3611C1.79724 19.6222 0.650013 20.8195 0.447235 22.3167C0.244458 23.8139 1.03335 25.2695 2.40001 25.9195L13.7056 31.2861L11.6278 44.6528C11.3972 46.1417 12.1528 47.6083 13.4972 48.2889C13.9945 48.5389 14.5278 48.6583 15.0583 48.6583C15.9667 48.6583 16.8639 48.3028 17.5333 47.625L27.2889 37.7333L39.8389 43.6917C41.2 44.3361 42.8222 44.0333 43.8556 42.9361C44.8889 41.8389 45.0945 40.2028 44.3695 38.8833L37.8472 27.0278L46.6389 18.1167C47.7 17.0417 47.9417 15.4028 47.2417 14.0639C46.5361 12.725 45.0389 12 43.5611 12.2583ZM56.4389 12.2583L69.0556 14.4833L75.5556 2.66945C76.2722 1.36667 77.7445 0.66945 79.2 0.925005C80.6611 1.18334 81.8 2.34445 82.0278 3.81112L84.0972 17.1361L96.7139 19.3611C98.2028 19.6222 99.35 20.8167 99.55 22.3139C99.75 23.8111 98.9639 25.2667 97.5972 25.9167L86.2917 31.2833L88.3695 44.65C88.6 46.1389 87.8445 47.6056 86.5 48.2861C86.0028 48.5361 85.4695 48.6556 84.9389 48.6556C84.0306 48.6556 83.1333 48.3 82.4639 47.6222L72.7083 37.7306L60.1583 43.6889C58.7972 44.3333 57.175 44.0306 56.1417 42.9333C55.1083 41.8361 54.9028 40.2 55.6278 38.8806L62.15 27.0278L53.3583 18.1167C52.2972 17.0417 52.0556 15.4028 52.7556 14.0639C53.4639 12.725 54.9611 12 56.4389 12.2583Z",fill:"#E95F28"})),O.createElement("defs",null,O.createElement("clipPath",{id:"clip0_3_49"},O.createElement("rect",{width:100,height:100,fill:"white"})))),bM=e=>e.postsortCommentCheckObj,SM=e=>e.setPostsortCommentCheckObj,CM=e=>e.configObj,wM=e=>e.mapObj,jM=e=>e.showPostsortCommentHighlighting,TM=e=>e.postsortDualImageArray,OM=e=>e.setPostsortDualImageArray,IM=e=>{const t={async setItem(w,b){return await null,localStorage.setItem(w,b)}},[r,n]=O.useState(!1),[o,i]=O.useState(""),[a,s]=O.useState(!1),c=JSON.parse(localStorage.getItem("sortColumns")),[u,f]=Ee("HC-requiredCommentsObj",{}),d=E(bM),g=E(SM),p=X(CM),m=X(wM),h=E(jM),y=E(TM),v=E(OM),{agreeObj:x,cardFontSize:S,width:I,height:k}=e,T=c==null?void 0:c.vCols[x.columnDisplay];let{placeholder:P,placedOn:N}=x,j=x.columnDisplay,F=p.useImages;F==="false"&&(F=!1),F==="true"&&(F=!0);let V="";if(m.colTextLabelsArray){let w=[...m.colTextLabelsArray];V=w[w.length-1]}let Z="";if(m.useColLabelNumsPostsort){let w=[...m.qSortHeaderNumbers];Z=`${N} +${w[w.length-1]}`}const Y=w=>{if(w[0]==="emoji5Array")return l.jsx(Vo,{},"emoji5");if(w[0]==="emoji4Array")return l.jsx(Vo,{},"emoji5");if(w[0]==="emoji3Array")return l.jsx(Nr,{},"emoji3");if(w[0]==="emoji2Array")return l.jsx(vn,{},"emoji2")},z=[...m.columnHeadersColorsArray],J=z[z.length-1];let K=!0,M,R=m.useColLabelNumsPostsort[0];(R!==void 0||R!==null)&&(R===!1||R==="false"?M=!1:M=!0);let _,B=m.useColLabelTextPostsort[0];(B!==void 0||B!==null)&&(B===!1||B==="false"?_=!1:_=!0);let q,H=m.useColLabelEmojiPostsort[0];(H!==void 0||H!==null)&&(H===!1||H==="false"?q=!1:q=!0);let Q=l.jsxs(MM,{children:[q&&l.jsx(y1,{children:Y(m.emojiArrayType)}),_&&l.jsx(AM,{children:V}),M&&l.jsx(DM,{children:Z}),q&&l.jsx(y1,{children:Y(m.emojiArrayType)})]}),U=[];e.highCards.forEach((w,b)=>{let W=`${j}_${b}: ${w.id}`;U.push(W)}),localStorage.setItem("noResponseCheckArrayHC1",JSON.stringify(U));const G=w=>{console.log(w),w.target&&w.detail===2&&(w.shiftKey?(y.push(w.target.src),v(y),y.length===2&&s(!0)):(i(w.target.src),n(!0)))},$=(w,b)=>{w.preventDefault();const W=JSON.parse(localStorage.getItem("resultsPostsort"))||{};let L=JSON.parse(localStorage.getItem("allCommentsObj"))||{};w.target.value.length>0?(d[`hc-${b}`]=!0,g(d)):(d[`hc-${b}`]=!1,g(d));const ie=c.vCols[x.columnDisplay],ge=w.target.id,se=w.target.value,ae=`${j}_${+b}`;ie.map(ye=>{if(ye.id===ge){let Se=se.replace(/\n/g," ").replace(/,/g," ").trim();Se.length>0?(ye.comment=vo(Se),W[ae]=`(${ye.id}): ${Se}`,L[ae]=`(${ye.id}): ${Se}`,L[`textArea-${j}_${b+1}`]=`${Se}`,f(he=>({...he,[`hc-${b}`]:!0}))):(ye.comment="",W[ae]=`(${ye.id}): no response`,L[ae]=`(${ye.id}): no response`,L[`textArea-${j}_${b+1}`]="",f(he=>({...he,[`hc-${b}`]:!1})))}return ye}),t.setItem("allCommentsObj",JSON.stringify(L)),t.setItem("resultsPostsort",JSON.stringify(W))};return T.map((w,b)=>{let W=A(`<div>${D(w.statement)}</div>`),re=(JSON.parse(localStorage.getItem("allCommentsObj"))||{})[`textArea-${j}_${+b+1}`];return p.useImages===!0&&(W=A(`<img src="${w.element.props.src}" style="pointer-events: all" alt=${w.element.props.alt} />`)),(p.postsortCommentsRequired==="true"||p.postsortCommentsRequired===!0)&&h===!0&&(K=u[`hc-${b}`]),l.jsxs(EM,{id:"postSortImageModal",children:[l.jsx(Re,{open:r,center:!0,onClose:()=>n(!1),classNames:{modal:`${p.imageFormat}`,overlay:"dualImageOverlay"},children:l.jsx("img",{src:o,width:"100%",height:"auto",alt:"modalImage"})}),l.jsxs(Re,{open:a,center:!0,onClose:()=>{s(!1),v([])},classNames:{overlay:"dualImageOverlay",modal:"dualImageModal"},children:[l.jsx("img",{src:y[0],width:"49.5%",height:"auto",alt:"modalImage"}),l.jsx("img",{src:y[1],width:"49.5%",height:"auto",style:{marginLeft:"1%"},alt:"modalImage2"})]}),l.jsxs(PM,{cardFontSize:S,backgroundColor:J,children:[Q," "]}),l.jsxs($M,{children:[F?l.jsx(x1,{cardFontSize:S,width:I,height:k,cardColor:w.cardColor,onClick:ie=>G(ie,w.element.props.src),children:W}):l.jsx(x1,{cardFontSize:S,width:I,height:k,cardColor:w.cardColor,children:W}),l.jsx(NM,{children:l.jsx(kM,{bgColor:K,border:K,"data-gramm_editor":"false",height:k,cardFontSize:S,id:w.id,placeholder:P,defaultValue:re,onChange:ie=>{$(ie,b)}})})]})]},w.statement)})},EM=C.div`
  width: 90vw;
  max-width: 1100px;
  margin-top: 50px;
  border-radius: 3px;
  border: 1px solid darkgray;
`,PM=C.div`
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
`,$M=C.div`
  display: flex;
  align-content: center;
  background: rgb(224, 224, 224);
  width: 100%;
`,kM=C.textarea`
  padding: 10px;
  margin-top: 2px;
  background-color: ${e=>e.bgColor?"whitesmoke":"rgba(253, 224, 71, .5)"};
  height: ${e=>`${e.height}px;`};
  font-size: ${e=>`${e.cardFontSize}px`};
  width: calc(100% - 6px);
  border: 2px solid darkgray;
  border-radius: 3px;
  outline: ${e=>e.border?"none":"dashed 3px black"};
`,NM=C.div`
  padding-top: 3px;
  width: 100%;
`,x1=C.div`
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
`,y1=C.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,MM=C.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,AM=C.div`
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
`,DM=C.span`
  font-weight: bold;
  padding-top: 3px;
  font-size: clamp(1rem, 1vw, 1.5rem);
  line-height: 1;
`,On=e=>O.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("g",{clipPath:"url(#clip0_3_28)"},O.createElement("path",{d:"M50 2.5C76.2335 2.5 97.5 23.7665 97.5 50C97.5 76.2335 76.2335 97.5 50 97.5C23.7665 97.5 2.5 76.2335 2.5 50C2.5 23.7665 23.7665 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),O.createElement("path",{d:"M29.2083 65.6139C29.3333 66.1111 32.4528 77.7778 50 77.7778C67.55 77.7778 70.6667 66.1111 70.7917 65.6139C70.9444 65.0111 70.6722 64.3861 70.1333 64.075C69.5917 63.7667 68.9139 63.8583 68.4667 64.2889C68.4139 64.3417 63.0389 69.4444 50 69.4444C36.9611 69.4444 31.5833 64.3417 31.5333 64.2917C31.2667 64.0278 30.9111 63.8889 30.5556 63.8889C30.3222 63.8889 30.0861 63.9472 29.8722 64.0667C29.3278 64.3778 29.0556 65.0083 29.2083 65.6139Z",fill:"#664500"}),O.createElement("path",{d:"M33.3333 47.2222C37.1686 47.2222 40.2778 42.8694 40.2778 37.5C40.2778 32.1306 37.1686 27.7778 33.3333 27.7778C29.498 27.7778 26.3889 32.1306 26.3889 37.5C26.3889 42.8694 29.498 47.2222 33.3333 47.2222Z",fill:"#664500"}),O.createElement("path",{d:"M66.6667 47.2222C70.502 47.2222 73.6111 42.8694 73.6111 37.5C73.6111 32.1306 70.502 27.7778 66.6667 27.7778C62.8314 27.7778 59.7222 32.1306 59.7222 37.5C59.7222 42.8694 62.8314 47.2222 66.6667 47.2222Z",fill:"#664500"})),O.createElement("defs",null,O.createElement("clipPath",{id:"clip0_3_28"},O.createElement("rect",{width:100,height:100,fill:"white"})))),RM=e=>e.postsortCommentCheckObj,LM=e=>e.setPostsortCommentCheckObj,_M=e=>e.configObj,FM=e=>e.showPostsortCommentHighlighting,BM=e=>e.postsortDualImageArray,zM=e=>e.setPostsortDualImageArray,HM=e=>e.mapObj,UM=e=>{const t={async setItem($,w){return await null,localStorage.setItem($,w)}},[r,n]=O.useState(!1),[o,i]=O.useState(""),[a,s]=O.useState(!1),c=JSON.parse(localStorage.getItem("sortColumns")),[u,f]=Ee("HC2-requiredCommentsObj",{}),d=E(RM),g=E(LM),p=X(_M),m=E(FM),h=E(BM),y=E(zM),v=X(HM),{height:x,width:S,agreeObj:I,cardFontSize:k}=e,T=c.vCols[I.columnDisplay2];let{placeholder:P,placedOn:N}=I,j=I.columnDisplay2,F=p.useImages;F==="false"&&(F=!1),F==="true"&&(F=!0);let V="";if(v.colTextLabelsArray){let $=[...v.colTextLabelsArray];V=$[$.length-2]}let Z="";if(v.useColLabelNumsPostsort){let $=[...v.qSortHeaderNumbers];Z=`${N} +${$[$.length-2]}`}const Y=$=>{if($[0]==="emoji5Array")return l.jsx(Vo,{},"emoji5");if($[0]==="emoji4Array")return l.jsx(Nr,{},"emoji3");if($[0]==="emoji3Array")return l.jsx(vn,{},"emoji2");if($[0]==="emoji2Array")return l.jsx(On,{},"emoji1")},z=[...v.columnHeadersColorsArray],J=z[z.length-2];let K,M=v.useColLabelNumsPostsort[0];(M!==void 0||M!==null)&&(M===!1||M==="false"?K=!1:K=!0);let R,_=v.useColLabelTextPostsort[0];(_!==void 0||_!==null)&&(_===!1||_==="false"?R=!1:R=!0);let B,q=v.useColLabelEmojiPostsort[0];(q!==void 0||q!==null)&&(q===!1||q==="false"?B=!1:B=!0);let H=l.jsxs(JM,{children:[B&&l.jsx(S1,{children:Y(v.emojiArrayType)}),R&&l.jsx(QM,{children:V}),K&&l.jsx(YM,{children:Z}),B&&l.jsx(S1,{children:Y(v.emojiArrayType)})]}),Q=[];e.highCards2.forEach(($,w)=>{let b=`${j}_${w}: ${$.id}`;Q.push(b)}),localStorage.setItem("noResponseCheckArrayHC2",JSON.stringify(Q));const U=$=>{$.detail===2&&($.shiftKey?(h.push($.target.src),y(h),h.length===2&&s(!0)):(i($.target.src),n(!0)))},G=($,w)=>{const b=JSON.parse(localStorage.getItem("resultsPostsort"))||{};let W=JSON.parse(localStorage.getItem("allCommentsObj"))||{};$.target.value.length>0?(d[`hc2-${w}`]=!0,g(d)):(d[`hc2-${w}`]=!1,g(d));const re=c==null?void 0:c.vCols[I.columnDisplay2],ie=$.target.id,ge=$.target.value,se=`${j}_${+w}`;re.map(ae=>{if(ae.id===ie){const ue=ge.replace(/\n/g," ").replace(/,/g," ").trim();ue.length>0?(ae.comment=vo(ue),b[se]=`(${ae.id}): ${ue}`,W[se]=`(${ae.id}): ${ue}`,W[`textArea-${j}_${w+1}`]=`${ue}`,f(Se=>({...Se,[`hc2-${w}`]:!0}))):(ae.comment="",b[se]=`(${ae.id}): no response`,W[se]=`(${ae.id}): no response`,W[`textArea-${j}_${w+1}`]="",f(Se=>({...Se,[`hc2-${w}`]:!1})))}return ae}),t.setItem("allCommentsObj",JSON.stringify(W)),t.setItem("resultsPostsort",JSON.stringify(b))};return T.map(($,w)=>{let b=A(`<div>${D($.statement)}</div>`),L=(JSON.parse(localStorage.getItem("allCommentsObj"))||{})[`textArea-${j}_${+w+1}`]||"";p.useImages===!0&&(b=A(`<img src="${$.element.props.src}" style="pointer-events: all" alt=${$.element.props.alt} />`));let re=!0;return(p.postsortCommentsRequired==="true"||p.postsortCommentsRequired===!0)&&m===!0&&(re=u[`hc2-${w}`]),l.jsxs(VM,{children:[l.jsx(Re,{open:r,center:!0,onClose:()=>n(!1),classNames:{modal:`${p.imageFormat}`,overlay:"dualImageOverlay"},children:l.jsx("img",{src:o,width:"100%",height:"auto",alt:"modalImage"})}),l.jsxs(Re,{open:a,center:!0,onClose:()=>{s(!1),y([])},classNames:{overlay:"dualImageOverlay",modal:"dualImageModal"},children:[l.jsx("img",{src:h[0],width:"49.5%",height:"auto",alt:"modalImage"}),l.jsx("img",{src:h[1],width:"49.5%",height:"auto",style:{marginLeft:"1%"},alt:"modalImage2"})]}),l.jsx(WM,{cardFontSize:k,backgroundColor:J,children:H}),l.jsxs(qM,{children:[F?l.jsx(b1,{cardFontSize:k,width:S,height:x,cardColor:$.cardColor,onClick:ie=>U(ie,$.element.props.src),children:b}):l.jsx(b1,{cardFontSize:k,width:S,height:x,cardColor:$.cardColor,children:b}),l.jsx(KM,{children:l.jsx(GM,{bgColor:re,border:re,"data-gramm_editor":"false",height:x,cardFontSize:k,id:$.id,placeholder:P,defaultValue:L,onChange:ie=>{G(ie,w)}})})]})]},$.statement)})},VM=C.div`
  width: 90vw;
  max-width: 1100px;
  margin-top: 50px;
  border-radius: 3px;
  border: 1px solid darkgray;
`,WM=C.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${e=>`${e.backgroundColor}`};
  color: black;
  text-align: center;
  font-size: ${e=>`${e.cardFontSize}px`};
  height: 1.5em;
`,qM=C.div`
  display: flex;
  align-content: center;
  background: rgb(224, 224, 224);
  width: 100%;
`,GM=C.textarea`
  padding: 10px;
  margin-top: 2px;
  background-color: ${e=>e.bgColor?"whitesmoke":"rgba(253, 224, 71, .5)"};
  height: ${e=>`${e.height}px;`};
  font-size: ${e=>`${e.cardFontSize}px`};
  width: calc(100% - 6px);
  border: 2px solid darkgray;
  border-radius: 3px;
  outline: ${e=>e.border?"none":"dashed 3px black"};
`,KM=C.div`
  padding-top: 3px;
  width: 100%;
`,b1=C.div`
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
`,S1=C.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,JM=C.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`,QM=C.div`
  display: flex;
  padding-top: 3px;
  justify-content: center;
  flex-wrap: wrap;
  font-weight: bold;
  text-align: center;
  font-size: clamp(1rem, 1vw, 1.5rem);
  text-align: center;
  line-height: 0.8rem;
`,YM=C.span`
  font-weight: bold;
  padding-top: 3px;
  font-size: clamp(1rem, 1vw, 1.5rem);
  line-height: 1;
`,ZM=e=>e.langObj,XM=e=>e.triggerPostsortModal,eA=e=>e.setTriggerPostsortModal,tA=()=>{const e=X(ZM),t=E(XM),r=E(eA),n=A(D(e.postsortModalHead))||"",o=A(D(e.postsortModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(rA,{children:n}),l.jsx("hr",{}),l.jsx(nA,{children:o})]})},rA=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,nA=C.div`
  margin-top: 15px;
`,Mn=()=>{O.useEffect(()=>(window.addEventListener("beforeunload",e),()=>{window.removeEventListener("beforeunload",e)}),[]);const e=t=>{var r="o/";return(t||window.event).returnValue=r,r};return l.jsx(le.Fragment,{children:l.jsx(HT,{when:!1,message:()=>"Are you sure you want to leave this page?"})})},oA=e=>e.langObj,iA=e=>e.triggerPostsortPreventNavModal,aA=e=>e.setTriggerPostsortPreventNavModal,sA=()=>{const e=X(oA),t=E(iA),r=E(aA),n=A(D(e.postsortPreventNavModalHead))||"",o=A(D(e.postsortPreventNavModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(lA,{children:n}),l.jsx("hr",{}),l.jsx(cA,{children:o})]})},lA=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;
  color: ${e=>e.theme.mobileText};

  hr {
    color: black;
  }
`,cA=C.div`
  margin-top: 15px;
  color: ${e=>e.theme.mobileText};
`,uA=e=>e.langObj,dA=e=>e.configObj,fA=e=>e.mapObj,gA=e=>e.setProgressScore,pA=e=>e.cardHeightPostsort,mA=e=>e.cardFontSizePostsort,hA=e=>e.setCurrentPage,vA=e=>e.setDisplayNextButton,C1=()=>{const e=O.useRef(null),t=X(uA),r=X(fA),n=X(dA),o=E(gA);let i=E(pA),a=E(mA);const s=E(hA),c=E(vA),u=JSON.parse(localStorage.getItem("columnStatements"));let f=+JSON.parse(localStorage.getItem("fontSizePostsort")),d=+JSON.parse(localStorage.getItem("cardHeightPostsort"));f&&(a=f),d&&(i=d),c(!0);const g=n.headerBarColor,p=A(D(t.postsortInstructions))||"";O.useEffect(()=>{const H=e.current.childNodes.length;localStorage.setItem("postsortCommentCardCount",H-1)});const m=O.useRef(null);O.useEffect(()=>(m.current=Date.now(),(async()=>{await s("postsort"),localStorage.setItem("currentPage","postsort"),await o(50)})(),()=>{Sr(m.current,"postsortPage","postsortPage")}),[s,o]);const h=250,y=A(D(t.postsortHeader))||"",v=A(D(t.postsortAgreement))||"",x=A(D(t.postsortPlacedOn))||"",S=A(D(t.postsortDisagreement))||"",I=t.placeholder,k=Object.keys(r.postsortConvertObj),T=k.pop(),P=k.pop(),N=k.shift(),j=k.shift(),F=T,V=P,Z=n.showSecondPosColumn,Y=N,z=j,J=n.showSecondNegColumn,K={};K.agreeText=v,K.columnDisplay=[F],K.columnDisplay2=[V],K.displaySecondColumn=Z,K.placeholder=I,K.placedOn=x;const M={};M.disagreeText=S,M.columnDisplay=[Y],M.columnDisplay2=[z],M.displaySecondColumn=J,M.placeholder=I,M.placedOn=x;const R=u==null?void 0:u.vCols[K.columnDisplay],_=u==null?void 0:u.vCols[K.columnDisplay2],B=u==null?void 0:u.vCols[M.columnDisplay],q=u==null?void 0:u.vCols[M.columnDisplay2];return l.jsxs("div",{children:[l.jsx(Mn,{}),l.jsx(tA,{}),l.jsx(sA,{}),l.jsx(yA,{background:g,children:y}),l.jsxs(xA,{ref:e,children:[l.jsx(bA,{children:p}),l.jsx(IM,{agreeObj:K,height:i,cardFontSize:a,width:h,highCards:R}),K.displaySecondColumn&&l.jsx(UM,{agreeObj:K,height:i,cardFontSize:a,width:h,highCards2:_}),M.displaySecondColumn&&l.jsx(dM,{disagreeObj:M,height:i,cardFontSize:a,width:h,lowCards2:q}),l.jsx(J9,{disagreeObj:M,height:i,cardFontSize:a,width:h,lowCards:B})]})]})},xA=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 150px;
  margin-top: 50px;
`,yA=C.div`
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
`,bA=C.div`
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
`;function SA(){this.__data__=[],this.size=0}var CA=SA;function wA(e,t){return e===t||e!==e&&t!==t}var Mm=wA,jA=Mm;function TA(e,t){for(var r=e.length;r--;)if(jA(e[r][0],t))return r;return-1}var Wu=TA,OA=Wu,IA=Array.prototype,EA=IA.splice;function PA(e){var t=this.__data__,r=OA(t,e);if(r<0)return!1;var n=t.length-1;return r==n?t.pop():EA.call(t,r,1),--this.size,!0}var $A=PA,kA=Wu;function NA(e){var t=this.__data__,r=kA(t,e);return r<0?void 0:t[r][1]}var MA=NA,AA=Wu;function DA(e){return AA(this.__data__,e)>-1}var RA=DA,LA=Wu;function _A(e,t){var r=this.__data__,n=LA(r,e);return n<0?(++this.size,r.push([e,t])):r[n][1]=t,this}var FA=_A,BA=CA,zA=$A,HA=MA,UA=RA,VA=FA;function Zi(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Zi.prototype.clear=BA;Zi.prototype.delete=zA;Zi.prototype.get=HA;Zi.prototype.has=UA;Zi.prototype.set=VA;var qu=Zi,WA=qu;function qA(){this.__data__=new WA,this.size=0}var GA=qA;function KA(e){var t=this.__data__,r=t.delete(e);return this.size=t.size,r}var JA=KA;function QA(e){return this.__data__.get(e)}var YA=QA;function ZA(e){return this.__data__.has(e)}var XA=ZA,eD=Zr,tD=eD["__core-js_shared__"],rD=tD,ef=rD,w1=function(){var e=/[^.]+$/.exec(ef&&ef.keys&&ef.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function nD(e){return!!w1&&w1 in e}var oD=nD,iD=Function.prototype,aD=iD.toString;function sD(e){if(e!=null){try{return aD.call(e)}catch{}try{return e+""}catch{}}return""}var qw=sD,lD=Hw,cD=oD,uD=mo,dD=qw,fD=/[\\^$.*+?()[\]{}|]/g,gD=/^\[object .+?Constructor\]$/,pD=Function.prototype,mD=Object.prototype,hD=pD.toString,vD=mD.hasOwnProperty,xD=RegExp("^"+hD.call(vD).replace(fD,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function yD(e){if(!uD(e)||cD(e))return!1;var t=lD(e)?xD:gD;return t.test(dD(e))}var bD=yD;function SD(e,t){return e==null?void 0:e[t]}var CD=SD,wD=bD,jD=CD;function TD(e,t){var r=jD(e,t);return wD(r)?r:void 0}var Yo=TD,OD=Yo,ID=Zr,ED=OD(ID,"Map"),Am=ED,PD=Yo,$D=PD(Object,"create"),Gu=$D,j1=Gu;function kD(){this.__data__=j1?j1(null):{},this.size=0}var ND=kD;function MD(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var AD=MD,DD=Gu,RD="__lodash_hash_undefined__",LD=Object.prototype,_D=LD.hasOwnProperty;function FD(e){var t=this.__data__;if(DD){var r=t[e];return r===RD?void 0:r}return _D.call(t,e)?t[e]:void 0}var BD=FD,zD=Gu,HD=Object.prototype,UD=HD.hasOwnProperty;function VD(e){var t=this.__data__;return zD?t[e]!==void 0:UD.call(t,e)}var WD=VD,qD=Gu,GD="__lodash_hash_undefined__";function KD(e,t){var r=this.__data__;return this.size+=this.has(e)?0:1,r[e]=qD&&t===void 0?GD:t,this}var JD=KD,QD=ND,YD=AD,ZD=BD,XD=WD,eR=JD;function Xi(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}Xi.prototype.clear=QD;Xi.prototype.delete=YD;Xi.prototype.get=ZD;Xi.prototype.has=XD;Xi.prototype.set=eR;var tR=Xi,T1=tR,rR=qu,nR=Am;function oR(){this.size=0,this.__data__={hash:new T1,map:new(nR||rR),string:new T1}}var iR=oR;function aR(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}var sR=aR,lR=sR;function cR(e,t){var r=e.__data__;return lR(t)?r[typeof t=="string"?"string":"hash"]:r.map}var Ku=cR,uR=Ku;function dR(e){var t=uR(this,e).delete(e);return this.size-=t?1:0,t}var fR=dR,gR=Ku;function pR(e){return gR(this,e).get(e)}var mR=pR,hR=Ku;function vR(e){return hR(this,e).has(e)}var xR=vR,yR=Ku;function bR(e,t){var r=yR(this,e),n=r.size;return r.set(e,t),this.size+=r.size==n?0:1,this}var SR=bR,CR=iR,wR=fR,jR=mR,TR=xR,OR=SR;function ea(e){var t=-1,r=e==null?0:e.length;for(this.clear();++t<r;){var n=e[t];this.set(n[0],n[1])}}ea.prototype.clear=CR;ea.prototype.delete=wR;ea.prototype.get=jR;ea.prototype.has=TR;ea.prototype.set=OR;var Dm=ea,IR=qu,ER=Am,PR=Dm,$R=200;function kR(e,t){var r=this.__data__;if(r instanceof IR){var n=r.__data__;if(!ER||n.length<$R-1)return n.push([e,t]),this.size=++r.size,this;r=this.__data__=new PR(n)}return r.set(e,t),this.size=r.size,this}var NR=kR,MR=qu,AR=GA,DR=JA,RR=YA,LR=XA,_R=NR;function ta(e){var t=this.__data__=new MR(e);this.size=t.size}ta.prototype.clear=AR;ta.prototype.delete=DR;ta.prototype.get=RR;ta.prototype.has=LR;ta.prototype.set=_R;var Rm=ta;function FR(e,t){for(var r=-1,n=e==null?0:e.length;++r<n&&t(e[r],r,e)!==!1;);return e}var BR=FR,zR=Yo,HR=function(){try{var e=zR(Object,"defineProperty");return e({},"",{}),e}catch{}}(),UR=HR,O1=UR;function VR(e,t,r){t=="__proto__"&&O1?O1(e,t,{configurable:!0,enumerable:!0,value:r,writable:!0}):e[t]=r}var Lm=VR,WR=Lm,qR=Mm,GR=Object.prototype,KR=GR.hasOwnProperty;function JR(e,t,r){var n=e[t];(!(KR.call(e,t)&&qR(n,r))||r===void 0&&!(t in e))&&WR(e,t,r)}var Gw=JR,QR=Gw,YR=Lm;function ZR(e,t,r,n){var o=!r;r||(r={});for(var i=-1,a=t.length;++i<a;){var s=t[i],c=n?n(r[s],e[s],s,r,e):void 0;c===void 0&&(c=e[s]),o?YR(r,s,c):QR(r,s,c)}return r}var Ju=ZR,XR=Ju,eL=Yi;function tL(e,t){return e&&XR(t,eL(t),e)}var rL=tL;function nL(e){var t=[];if(e!=null)for(var r in Object(e))t.push(r);return t}var oL=nL,iL=mo,aL=km,sL=oL,lL=Object.prototype,cL=lL.hasOwnProperty;function uL(e){if(!iL(e))return sL(e);var t=aL(e),r=[];for(var n in e)n=="constructor"&&(t||!cL.call(e,n))||r.push(n);return r}var dL=uL,fL=Bw,gL=dL,pL=Nm;function mL(e){return pL(e)?fL(e,!0):gL(e)}var _m=mL,hL=Ju,vL=_m;function xL(e,t){return e&&hL(t,vL(t),e)}var yL=xL,Hc={exports:{}};Hc.exports;(function(e,t){var r=Zr,n=t&&!t.nodeType&&t,o=n&&!0&&e&&!e.nodeType&&e,i=o&&o.exports===n,a=i?r.Buffer:void 0,s=a?a.allocUnsafe:void 0;function c(u,f){if(f)return u.slice();var d=u.length,g=s?s(d):new u.constructor(d);return u.copy(g),g}e.exports=c})(Hc,Hc.exports);var bL=Hc.exports;function SL(e,t){for(var r=-1,n=e==null?0:e.length,o=0,i=[];++r<n;){var a=e[r];t(a,r,e)&&(i[o++]=a)}return i}var CL=SL;function wL(){return[]}var Kw=wL,jL=CL,TL=Kw,OL=Object.prototype,IL=OL.propertyIsEnumerable,I1=Object.getOwnPropertySymbols,EL=I1?function(e){return e==null?[]:(e=Object(e),jL(I1(e),function(t){return IL.call(e,t)}))}:TL,Fm=EL,PL=Ju,$L=Fm;function kL(e,t){return PL(e,$L(e),t)}var NL=kL;function ML(e,t){for(var r=-1,n=t.length,o=e.length;++r<n;)e[o+r]=t[r];return e}var Bm=ML,AL=zw,DL=AL(Object.getPrototypeOf,Object),Jw=DL,RL=Bm,LL=Jw,_L=Fm,FL=Kw,BL=Object.getOwnPropertySymbols,zL=BL?function(e){for(var t=[];e;)RL(t,_L(e)),e=LL(e);return t}:FL,Qw=zL,HL=Ju,UL=Qw;function VL(e,t){return HL(e,UL(e),t)}var WL=VL,qL=Bm,GL=Lr;function KL(e,t,r){var n=t(e);return GL(e)?n:qL(n,r(e))}var Yw=KL,JL=Yw,QL=Fm,YL=Yi;function ZL(e){return JL(e,YL,QL)}var Zw=ZL,XL=Yw,e_=Qw,t_=_m;function r_(e){return XL(e,t_,e_)}var n_=r_,o_=Yo,i_=Zr,a_=o_(i_,"DataView"),s_=a_,l_=Yo,c_=Zr,u_=l_(c_,"Promise"),d_=u_,f_=Yo,g_=Zr,p_=f_(g_,"Set"),m_=p_,h_=Yo,v_=Zr,x_=h_(v_,"WeakMap"),y_=x_,Og=s_,Ig=Am,Eg=d_,Pg=m_,$g=y_,Xw=As,ra=qw,E1="[object Map]",b_="[object Object]",P1="[object Promise]",$1="[object Set]",k1="[object WeakMap]",N1="[object DataView]",S_=ra(Og),C_=ra(Ig),w_=ra(Eg),j_=ra(Pg),T_=ra($g),wo=Xw;(Og&&wo(new Og(new ArrayBuffer(1)))!=N1||Ig&&wo(new Ig)!=E1||Eg&&wo(Eg.resolve())!=P1||Pg&&wo(new Pg)!=$1||$g&&wo(new $g)!=k1)&&(wo=function(e){var t=Xw(e),r=t==b_?e.constructor:void 0,n=r?ra(r):"";if(n)switch(n){case S_:return N1;case C_:return E1;case w_:return P1;case j_:return $1;case T_:return k1}return t});var Qu=wo,O_=Object.prototype,I_=O_.hasOwnProperty;function E_(e){var t=e.length,r=new e.constructor(t);return t&&typeof e[0]=="string"&&I_.call(e,"index")&&(r.index=e.index,r.input=e.input),r}var P_=E_,$_=Zr,k_=$_.Uint8Array,e5=k_,M1=e5;function N_(e){var t=new e.constructor(e.byteLength);return new M1(t).set(new M1(e)),t}var zm=N_,M_=zm;function A_(e,t){var r=t?M_(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.byteLength)}var D_=A_,R_=/\w*$/;function L_(e){var t=new e.constructor(e.source,R_.exec(e));return t.lastIndex=e.lastIndex,t}var __=L_,A1=Qi,D1=A1?A1.prototype:void 0,R1=D1?D1.valueOf:void 0;function F_(e){return R1?Object(R1.call(e)):{}}var B_=F_,z_=zm;function H_(e,t){var r=t?z_(e.buffer):e.buffer;return new e.constructor(r,e.byteOffset,e.length)}var U_=H_,V_=zm,W_=D_,q_=__,G_=B_,K_=U_,J_="[object Boolean]",Q_="[object Date]",Y_="[object Map]",Z_="[object Number]",X_="[object RegExp]",eF="[object Set]",tF="[object String]",rF="[object Symbol]",nF="[object ArrayBuffer]",oF="[object DataView]",iF="[object Float32Array]",aF="[object Float64Array]",sF="[object Int8Array]",lF="[object Int16Array]",cF="[object Int32Array]",uF="[object Uint8Array]",dF="[object Uint8ClampedArray]",fF="[object Uint16Array]",gF="[object Uint32Array]";function pF(e,t,r){var n=e.constructor;switch(t){case nF:return V_(e);case J_:case Q_:return new n(+e);case oF:return W_(e,r);case iF:case aF:case sF:case lF:case cF:case uF:case dF:case fF:case gF:return K_(e,r);case Y_:return new n;case Z_:case tF:return new n(e);case X_:return q_(e);case eF:return new n;case rF:return G_(e)}}var mF=pF,hF=mo,L1=Object.create,vF=function(){function e(){}return function(t){if(!hF(t))return{};if(L1)return L1(t);e.prototype=t;var r=new e;return e.prototype=void 0,r}}(),xF=vF,yF=xF,bF=Jw,SF=km;function CF(e){return typeof e.constructor=="function"&&!SF(e)?yF(bF(e)):{}}var wF=CF,jF=Qu,TF=Qo,OF="[object Map]";function IF(e){return TF(e)&&jF(e)==OF}var EF=IF,PF=EF,$F=Pm,_1=$m,F1=_1&&_1.isMap,kF=F1?$F(F1):PF,NF=kF,MF=Qu,AF=Qo,DF="[object Set]";function RF(e){return AF(e)&&MF(e)==DF}var LF=RF,_F=LF,FF=Pm,B1=$m,z1=B1&&B1.isSet,BF=z1?FF(z1):_F,zF=BF,HF=Rm,UF=BR,VF=Gw,WF=rL,qF=yL,GF=bL,KF=Dw,JF=NL,QF=WL,YF=Zw,ZF=n_,XF=Qu,eB=P_,tB=mF,rB=wF,nB=Lr,oB=Om,iB=NF,aB=mo,sB=zF,lB=Yi,cB=_m,uB=1,dB=2,fB=4,t5="[object Arguments]",gB="[object Array]",pB="[object Boolean]",mB="[object Date]",hB="[object Error]",r5="[object Function]",vB="[object GeneratorFunction]",xB="[object Map]",yB="[object Number]",n5="[object Object]",bB="[object RegExp]",SB="[object Set]",CB="[object String]",wB="[object Symbol]",jB="[object WeakMap]",TB="[object ArrayBuffer]",OB="[object DataView]",IB="[object Float32Array]",EB="[object Float64Array]",PB="[object Int8Array]",$B="[object Int16Array]",kB="[object Int32Array]",NB="[object Uint8Array]",MB="[object Uint8ClampedArray]",AB="[object Uint16Array]",DB="[object Uint32Array]",Ke={};Ke[t5]=Ke[gB]=Ke[TB]=Ke[OB]=Ke[pB]=Ke[mB]=Ke[IB]=Ke[EB]=Ke[PB]=Ke[$B]=Ke[kB]=Ke[xB]=Ke[yB]=Ke[n5]=Ke[bB]=Ke[SB]=Ke[CB]=Ke[wB]=Ke[NB]=Ke[MB]=Ke[AB]=Ke[DB]=!0;Ke[hB]=Ke[r5]=Ke[jB]=!1;function ec(e,t,r,n,o,i){var a,s=t&uB,c=t&dB,u=t&fB;if(r&&(a=o?r(e,n,o,i):r(e)),a!==void 0)return a;if(!aB(e))return e;var f=nB(e);if(f){if(a=eB(e),!s)return KF(e,a)}else{var d=XF(e),g=d==r5||d==vB;if(oB(e))return GF(e,s);if(d==n5||d==t5||g&&!o){if(a=c||g?{}:rB(e),!s)return c?QF(e,qF(a,e)):JF(e,WF(a,e))}else{if(!Ke[d])return o?e:{};a=tB(e,d,s)}}i||(i=new HF);var p=i.get(e);if(p)return p;i.set(e,a),sB(e)?e.forEach(function(y){a.add(ec(y,t,r,y,e,i))}):iB(e)&&e.forEach(function(y,v){a.set(v,ec(y,t,r,v,e,i))});var m=u?c?ZF:YF:c?cB:lB,h=f?void 0:m(e);return UF(h||e,function(y,v){h&&(v=y,y=e[v]),VF(a,v,ec(y,t,r,v,e,i))}),a}var RB=ec,LB=RB,_B=1,FB=4;function BB(e){return LB(e,_B|FB)}var zB=BB;const Hm=gt(zB),HB=()=>{const e=u=>u.langObj,t=u=>u.triggerPresortModal,r=u=>u.setTriggerPresortModal,n=X(e),o=E(t),i=E(r),a=()=>{i(!1)},s=A(D(n.presortModalHead))||"",c=A(D(n.presortModalText))||"";return l.jsxs(Re,{className:"customModal",open:o,onClose:a,center:!0,children:[l.jsx(UB,{children:s}),l.jsx("hr",{}),l.jsx(VB,{children:c})]})},UB=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,VB=C.div`
  margin-top: 15px;
`;function bs(e){"@babel/helpers - typeof";return bs=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},bs(e)}function WB(e,t){if(bs(e)!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(bs(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function qB(e){var t=WB(e,"string");return bs(t)=="symbol"?t:t+""}function GB(e,t,r){return(t=qB(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function H1(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),r.push.apply(r,n)}return r}function U1(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?H1(Object(r),!0).forEach(function(n){GB(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H1(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function Kt(e){return"Minified Redux error #"+e+"; visit https://redux.js.org/Errors?code="+e+" for the full message or use the non-minified dev environment for full errors. "}var V1=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),tf=function(){return Math.random().toString(36).substring(7).split("").join(".")},W1={INIT:"@@redux/INIT"+tf(),REPLACE:"@@redux/REPLACE"+tf(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+tf()}};function KB(e){if(typeof e!="object"||e===null)return!1;for(var t=e;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function o5(e,t,r){var n;if(typeof t=="function"&&typeof r=="function"||typeof r=="function"&&typeof arguments[3]=="function")throw new Error(Kt(0));if(typeof t=="function"&&typeof r>"u"&&(r=t,t=void 0),typeof r<"u"){if(typeof r!="function")throw new Error(Kt(1));return r(o5)(e,t)}if(typeof e!="function")throw new Error(Kt(2));var o=e,i=t,a=[],s=a,c=!1;function u(){s===a&&(s=a.slice())}function f(){if(c)throw new Error(Kt(3));return i}function d(h){if(typeof h!="function")throw new Error(Kt(4));if(c)throw new Error(Kt(5));var y=!0;return u(),s.push(h),function(){if(y){if(c)throw new Error(Kt(6));y=!1,u();var x=s.indexOf(h);s.splice(x,1),a=null}}}function g(h){if(!KB(h))throw new Error(Kt(7));if(typeof h.type>"u")throw new Error(Kt(8));if(c)throw new Error(Kt(9));try{c=!0,i=o(i,h)}finally{c=!1}for(var y=a=s,v=0;v<y.length;v++){var x=y[v];x()}return h}function p(h){if(typeof h!="function")throw new Error(Kt(10));o=h,g({type:W1.REPLACE})}function m(){var h,y=d;return h={subscribe:function(x){if(typeof x!="object"||x===null)throw new Error(Kt(11));function S(){x.next&&x.next(f())}S();var I=y(S);return{unsubscribe:I}}},h[V1]=function(){return this},h}return g({type:W1.INIT}),n={dispatch:g,subscribe:d,getState:f,replaceReducer:p},n[V1]=m,n}function q1(e,t){return function(){return t(e.apply(this,arguments))}}function G1(e,t){if(typeof e=="function")return q1(e,t);if(typeof e!="object"||e===null)throw new Error(Kt(16));var r={};for(var n in e){var o=e[n];typeof o=="function"&&(r[n]=q1(o,t))}return r}function i5(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return t.length===0?function(n){return n}:t.length===1?t[0]:t.reduce(function(n,o){return function(){return n(o.apply(void 0,arguments))}})}function JB(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(n){return function(){var o=n.apply(void 0,arguments),i=function(){throw new Error(Kt(15))},a={getState:o.getState,dispatch:function(){return i.apply(void 0,arguments)}},s=t.map(function(c){return c(a)});return i=i5.apply(void 0,s)(o.dispatch),U1(U1({},o),{},{dispatch:i})}}}var a5=le.createContext(null);function QB(e){e()}var s5=QB,YB=function(t){return s5=t},ZB=function(){return s5};function XB(){var e=ZB(),t=null,r=null;return{clear:function(){t=null,r=null},notify:function(){e(function(){for(var o=t;o;)o.callback(),o=o.next})},get:function(){for(var o=[],i=t;i;)o.push(i),i=i.next;return o},subscribe:function(o){var i=!0,a=r={callback:o,next:null,prev:r};return a.prev?a.prev.next=a:t=a,function(){!i||t===null||(i=!1,a.next?a.next.prev=a.prev:r=a.prev,a.prev?a.prev.next=a.next:t=a.next)}}}}var K1={notify:function(){},get:function(){return[]}};function l5(e,t){var r,n=K1;function o(d){return c(),n.subscribe(d)}function i(){n.notify()}function a(){f.onStateChange&&f.onStateChange()}function s(){return!!r}function c(){r||(r=t?t.addNestedSub(a):e.subscribe(a),n=XB())}function u(){r&&(r(),r=void 0,n.clear(),n=K1)}var f={addNestedSub:o,notifyNestedSubs:i,handleChangeWrapper:a,isSubscribed:s,trySubscribe:c,tryUnsubscribe:u,getListeners:function(){return n}};return f}var c5=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?O.useLayoutEffect:O.useEffect;function ez(e){var t=e.store,r=e.context,n=e.children,o=O.useMemo(function(){var s=l5(t);return{store:t,subscription:s}},[t]),i=O.useMemo(function(){return t.getState()},[t]);c5(function(){var s=o.subscription;return s.onStateChange=s.notifyNestedSubs,s.trySubscribe(),i!==t.getState()&&s.notifyNestedSubs(),function(){s.tryUnsubscribe(),s.onStateChange=null}},[o,i]);var a=r||a5;return le.createElement(a.Provider,{value:o},n)}var u5={exports:{}},qe={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Yu=60103,Zu=60106,Ds=60107,Rs=60108,Ls=60114,_s=60109,Fs=60110,Bs=60112,zs=60113,Um=60120,Hs=60115,Us=60116,d5=60121,f5=60122,g5=60117,p5=60129,m5=60131;if(typeof Symbol=="function"&&Symbol.for){var Tt=Symbol.for;Yu=Tt("react.element"),Zu=Tt("react.portal"),Ds=Tt("react.fragment"),Rs=Tt("react.strict_mode"),Ls=Tt("react.profiler"),_s=Tt("react.provider"),Fs=Tt("react.context"),Bs=Tt("react.forward_ref"),zs=Tt("react.suspense"),Um=Tt("react.suspense_list"),Hs=Tt("react.memo"),Us=Tt("react.lazy"),d5=Tt("react.block"),f5=Tt("react.server.block"),g5=Tt("react.fundamental"),p5=Tt("react.debug_trace_mode"),m5=Tt("react.legacy_hidden")}function Xr(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Yu:switch(e=e.type,e){case Ds:case Ls:case Rs:case zs:case Um:return e;default:switch(e=e&&e.$$typeof,e){case Fs:case Bs:case Us:case Hs:case _s:return e;default:return t}}case Zu:return t}}}var tz=_s,rz=Yu,nz=Bs,oz=Ds,iz=Us,az=Hs,sz=Zu,lz=Ls,cz=Rs,uz=zs;qe.ContextConsumer=Fs;qe.ContextProvider=tz;qe.Element=rz;qe.ForwardRef=nz;qe.Fragment=oz;qe.Lazy=iz;qe.Memo=az;qe.Portal=sz;qe.Profiler=lz;qe.StrictMode=cz;qe.Suspense=uz;qe.isAsyncMode=function(){return!1};qe.isConcurrentMode=function(){return!1};qe.isContextConsumer=function(e){return Xr(e)===Fs};qe.isContextProvider=function(e){return Xr(e)===_s};qe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Yu};qe.isForwardRef=function(e){return Xr(e)===Bs};qe.isFragment=function(e){return Xr(e)===Ds};qe.isLazy=function(e){return Xr(e)===Us};qe.isMemo=function(e){return Xr(e)===Hs};qe.isPortal=function(e){return Xr(e)===Zu};qe.isProfiler=function(e){return Xr(e)===Ls};qe.isStrictMode=function(e){return Xr(e)===Rs};qe.isSuspense=function(e){return Xr(e)===zs};qe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Ds||e===Ls||e===p5||e===Rs||e===zs||e===Um||e===m5||typeof e=="object"&&e!==null&&(e.$$typeof===Us||e.$$typeof===Hs||e.$$typeof===_s||e.$$typeof===Fs||e.$$typeof===Bs||e.$$typeof===g5||e.$$typeof===d5||e[0]===f5)};qe.typeOf=Xr;u5.exports=qe;var dz=u5.exports,fz=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],gz=["reactReduxForwardedRef"],pz=[],mz=[null,null];function hz(e,t){var r=e[1];return[t.payload,r+1]}function J1(e,t,r){c5(function(){return e.apply(void 0,t)},r)}function vz(e,t,r,n,o,i,a){e.current=n,t.current=o,r.current=!1,i.current&&(i.current=null,a())}function xz(e,t,r,n,o,i,a,s,c,u){if(e){var f=!1,d=null,g=function(){if(!f){var h=t.getState(),y,v;try{y=n(h,o.current)}catch(x){v=x,d=x}v||(d=null),y===i.current?a.current||c():(i.current=y,s.current=y,a.current=!0,u({type:"STORE_UPDATED",payload:{error:v}}))}};r.onStateChange=g,r.trySubscribe(),g();var p=function(){if(f=!0,r.tryUnsubscribe(),r.onStateChange=null,d)throw d};return p}}var yz=function(){return[null,0]};function bz(e,t){t===void 0&&(t={});var r=t,n=r.getDisplayName,o=n===void 0?function(S){return"ConnectAdvanced("+S+")"}:n,i=r.methodName,a=i===void 0?"connectAdvanced":i,s=r.renderCountProp,c=s===void 0?void 0:s,u=r.shouldHandleStateChanges,f=u===void 0?!0:u,d=r.storeKey,g=d===void 0?"store":d;r.withRef;var p=r.forwardRef,m=p===void 0?!1:p,h=r.context,y=h===void 0?a5:h,v=Nn(r,fz),x=y;return function(I){var k=I.displayName||I.name||"Component",T=o(k),P=xe({},v,{getDisplayName:o,methodName:a,renderCountProp:c,shouldHandleStateChanges:f,storeKey:g,displayName:T,wrappedComponentName:k,WrappedComponent:I}),N=v.pure;function j(z){return e(z.dispatch,P)}var F=N?O.useMemo:function(z){return z()};function V(z){var J=O.useMemo(function(){var Se=z.reactReduxForwardedRef,he=Nn(z,gz);return[z.context,Se,he]},[z]),K=J[0],M=J[1],R=J[2],_=O.useMemo(function(){return K&&K.Consumer&&dz.isContextConsumer(le.createElement(K.Consumer,null))?K:x},[K,x]),B=O.useContext(_),q=!!z.store&&!!z.store.getState&&!!z.store.dispatch;B&&B.store;var H=q?z.store:B.store,Q=O.useMemo(function(){return j(H)},[H]),U=O.useMemo(function(){if(!f)return mz;var Se=l5(H,q?null:B.subscription),he=Se.notifyNestedSubs.bind(Se);return[Se,he]},[H,q,B]),G=U[0],$=U[1],w=O.useMemo(function(){return q?B:xe({},B,{subscription:G})},[q,B,G]),b=O.useReducer(hz,pz,yz),W=b[0],L=W[0],re=b[1];if(L&&L.error)throw L.error;var ie=O.useRef(),ge=O.useRef(R),se=O.useRef(),ae=O.useRef(!1),ye=F(function(){return se.current&&R===ge.current?se.current:Q(H.getState(),R)},[H,L,R]);J1(vz,[ge,ie,ae,R,ye,se,$]),J1(xz,[f,H,G,Q,ge,ie,ae,se,$,re],[H,G,Q]);var me=O.useMemo(function(){return le.createElement(I,xe({},ye,{ref:M}))},[M,I,ye]),ue=O.useMemo(function(){return f?le.createElement(_.Provider,{value:w},me):me},[_,me,w]);return ue}var Z=N?le.memo(V):V;if(Z.WrappedComponent=I,Z.displayName=V.displayName=T,m){var Y=le.forwardRef(function(J,K){return le.createElement(Z,xe({},J,{reactReduxForwardedRef:K}))});return Y.displayName=T,Y.WrappedComponent=I,Pc(Y,I)}return Pc(Z,I)}}function Q1(e,t){return e===t?e!==0||t!==0||1/e===1/t:e!==e&&t!==t}function rf(e,t){if(Q1(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(var o=0;o<r.length;o++)if(!Object.prototype.hasOwnProperty.call(t,r[o])||!Q1(e[r[o]],t[r[o]]))return!1;return!0}function Sz(e,t){var r={},n=function(a){var s=e[a];typeof s=="function"&&(r[a]=function(){return t(s.apply(void 0,arguments))})};for(var o in e)n(o);return r}function Vm(e){return function(r,n){var o=e(r,n);function i(){return o}return i.dependsOnOwnProps=!1,i}}function Y1(e){return e.dependsOnOwnProps!==null&&e.dependsOnOwnProps!==void 0?!!e.dependsOnOwnProps:e.length!==1}function h5(e,t){return function(n,o){o.displayName;var i=function(s,c){return i.dependsOnOwnProps?i.mapToProps(s,c):i.mapToProps(s)};return i.dependsOnOwnProps=!0,i.mapToProps=function(s,c){i.mapToProps=e,i.dependsOnOwnProps=Y1(e);var u=i(s,c);return typeof u=="function"&&(i.mapToProps=u,i.dependsOnOwnProps=Y1(u),u=i(s,c)),u},i}}function Cz(e){return typeof e=="function"?h5(e):void 0}function wz(e){return e?void 0:Vm(function(t){return{dispatch:t}})}function jz(e){return e&&typeof e=="object"?Vm(function(t){return Sz(e,t)}):void 0}const Tz=[Cz,wz,jz];function Oz(e){return typeof e=="function"?h5(e):void 0}function Iz(e){return e?void 0:Vm(function(){return{}})}const Ez=[Oz,Iz];function Pz(e,t,r){return xe({},r,e,t)}function $z(e){return function(r,n){n.displayName;var o=n.pure,i=n.areMergedPropsEqual,a=!1,s;return function(u,f,d){var g=e(u,f,d);return a?(!o||!i(g,s))&&(s=g):(a=!0,s=g),s}}}function kz(e){return typeof e=="function"?$z(e):void 0}function Nz(e){return e?void 0:function(){return Pz}}const Mz=[kz,Nz];var Az=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function Dz(e,t,r,n){return function(i,a){return r(e(i,a),t(n,a),a)}}function Rz(e,t,r,n,o){var i=o.areStatesEqual,a=o.areOwnPropsEqual,s=o.areStatePropsEqual,c=!1,u,f,d,g,p;function m(S,I){return u=S,f=I,d=e(u,f),g=t(n,f),p=r(d,g,f),c=!0,p}function h(){return d=e(u,f),t.dependsOnOwnProps&&(g=t(n,f)),p=r(d,g,f),p}function y(){return e.dependsOnOwnProps&&(d=e(u,f)),t.dependsOnOwnProps&&(g=t(n,f)),p=r(d,g,f),p}function v(){var S=e(u,f),I=!s(S,d);return d=S,I&&(p=r(d,g,f)),p}function x(S,I){var k=!a(I,f),T=!i(S,u,I,f);return u=S,f=I,k&&T?h():k?y():T?v():p}return function(I,k){return c?x(I,k):m(I,k)}}function Lz(e,t){var r=t.initMapStateToProps,n=t.initMapDispatchToProps,o=t.initMergeProps,i=Nn(t,Az),a=r(e,i),s=n(e,i),c=o(e,i),u=i.pure?Rz:Dz;return u(a,s,c,e,i)}var _z=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function nf(e,t,r){for(var n=t.length-1;n>=0;n--){var o=t[n](e);if(o)return o}return function(i,a){throw new Error("Invalid value of type "+typeof e+" for "+r+" argument when connecting component "+a.wrappedComponentName+".")}}function Fz(e,t){return e===t}function Bz(e){var t=e===void 0?{}:e,r=t.connectHOC,n=r===void 0?bz:r,o=t.mapStateToPropsFactories,i=o===void 0?Ez:o,a=t.mapDispatchToPropsFactories,s=a===void 0?Tz:a,c=t.mergePropsFactories,u=c===void 0?Mz:c,f=t.selectorFactory,d=f===void 0?Lz:f;return function(p,m,h,y){y===void 0&&(y={});var v=y,x=v.pure,S=x===void 0?!0:x,I=v.areStatesEqual,k=I===void 0?Fz:I,T=v.areOwnPropsEqual,P=T===void 0?rf:T,N=v.areStatePropsEqual,j=N===void 0?rf:N,F=v.areMergedPropsEqual,V=F===void 0?rf:F,Z=Nn(v,_z),Y=nf(p,i,"mapStateToProps"),z=nf(m,s,"mapDispatchToProps"),J=nf(h,u,"mergeProps");return n(d,xe({methodName:"connect",getDisplayName:function(M){return"Connect("+M+")"},shouldHandleStateChanges:!!p,initMapStateToProps:Y,initMapDispatchToProps:z,initMergeProps:J,pure:S,areStatesEqual:k,areOwnPropsEqual:P,areStatePropsEqual:j,areMergedPropsEqual:V},Z))}}const v5=Bz();YB(wu.unstable_batchedUpdates);function zz(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(e[r]!==t[r])return!1;return!0}function x5(e,t){var r=O.useState(function(){return{inputs:t,result:e()}})[0],n=O.useRef(!0),o=O.useRef(r),i=n.current||!!(t&&o.current.inputs&&zz(t,o.current.inputs)),a=i?o.current:{inputs:t,result:e()};return O.useEffect(function(){n.current=!1,o.current=a},[a]),a.result}function Hz(e,t){return x5(function(){return e},t)}var Le=x5,we=Hz,qr=function(t){var r=t.top,n=t.right,o=t.bottom,i=t.left,a=n-i,s=o-r,c={top:r,right:n,bottom:o,left:i,width:a,height:s,x:i,y:r,center:{x:(n+i)/2,y:(o+r)/2}};return c},Wm=function(t,r){return{top:t.top-r.top,left:t.left-r.left,bottom:t.bottom+r.bottom,right:t.right+r.right}},Z1=function(t,r){return{top:t.top+r.top,left:t.left+r.left,bottom:t.bottom-r.bottom,right:t.right-r.right}},Uz=function(t,r){return{top:t.top+r.y,left:t.left+r.x,bottom:t.bottom+r.y,right:t.right+r.x}},of={top:0,right:0,bottom:0,left:0},qm=function(t){var r=t.borderBox,n=t.margin,o=n===void 0?of:n,i=t.border,a=i===void 0?of:i,s=t.padding,c=s===void 0?of:s,u=qr(Wm(r,o)),f=qr(Z1(r,a)),d=qr(Z1(f,c));return{marginBox:u,borderBox:qr(r),paddingBox:f,contentBox:d,margin:o,border:a,padding:c}},Cr=function(t){var r=t.slice(0,-2),n=t.slice(-2);if(n!=="px")return 0;var o=Number(r);return isNaN(o)&&bn(),o},Vz=function(){return{x:window.pageXOffset,y:window.pageYOffset}},Uc=function(t,r){var n=t.borderBox,o=t.border,i=t.margin,a=t.padding,s=Uz(n,r);return qm({borderBox:s,border:o,margin:i,padding:a})},Vc=function(t,r){return r===void 0&&(r=Vz()),Uc(t,r)},y5=function(t,r){var n={top:Cr(r.marginTop),right:Cr(r.marginRight),bottom:Cr(r.marginBottom),left:Cr(r.marginLeft)},o={top:Cr(r.paddingTop),right:Cr(r.paddingRight),bottom:Cr(r.paddingBottom),left:Cr(r.paddingLeft)},i={top:Cr(r.borderTopWidth),right:Cr(r.borderRightWidth),bottom:Cr(r.borderBottomWidth),left:Cr(r.borderLeftWidth)};return qm({borderBox:t,margin:n,padding:o,border:i})},b5=function(t){var r=t.getBoundingClientRect(),n=window.getComputedStyle(t);return y5(r,n)},X1=Number.isNaN||function(t){return typeof t=="number"&&t!==t};function Wz(e,t){return!!(e===t||X1(e)&&X1(t))}function qz(e,t){if(e.length!==t.length)return!1;for(var r=0;r<e.length;r++)if(!Wz(e[r],t[r]))return!1;return!0}function Ct(e,t){t===void 0&&(t=qz);var r,n=[],o,i=!1;function a(){for(var s=[],c=0;c<arguments.length;c++)s[c]=arguments[c];return i&&r===this&&t(s,n)||(o=e.apply(this,s),i=!0,r=this,n=s),o}return a}var Ss=function(t){var r=[],n=null,o=function(){for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];r=s,!n&&(n=requestAnimationFrame(function(){n=null,t.apply(void 0,r)}))};return o.cancel=function(){n&&(cancelAnimationFrame(n),n=null)},o};function S5(e,t){}S5.bind(null,"warn");S5.bind(null,"error");function ro(){}function Gz(e,t){return xe({},e,{},t)}function Pr(e,t,r){var n=t.map(function(o){var i=Gz(r,o.options);return e.addEventListener(o.eventName,o.fn,i),function(){e.removeEventListener(o.eventName,o.fn,i)}});return function(){n.forEach(function(i){i()})}}var Kz="Invariant failed";function Wc(e){this.message=e}Wc.prototype.toString=function(){return this.message};function fe(e,t){throw new Wc(Kz)}var Jz=function(e){Rr(t,e);function t(){for(var n,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i))||this,n.callbacks=null,n.unbind=ro,n.onWindowError=function(s){var c=n.getCallbacks();c.isDragging()&&c.tryAbort();var u=s.error;u instanceof Wc&&s.preventDefault()},n.getCallbacks=function(){if(!n.callbacks)throw new Error("Unable to find AppCallbacks in <ErrorBoundary/>");return n.callbacks},n.setCallbacks=function(s){n.callbacks=s},n}var r=t.prototype;return r.componentDidMount=function(){this.unbind=Pr(window,[{eventName:"error",fn:this.onWindowError}])},r.componentDidCatch=function(o){if(o instanceof Wc){this.setState({});return}throw o},r.componentWillUnmount=function(){this.unbind()},r.render=function(){return this.props.children(this.setCallbacks)},t}(le.Component),Qz=`
  Press space bar to start a drag.
  When dragging you can use the arrow keys to move the item around and escape to cancel.
  Some screen readers may require you to be in focus mode or to use your pass through key
`,qc=function(t){return t+1},Yz=function(t){return`
  You have lifted an item in position `+qc(t.source.index)+`
`},C5=function(t,r){var n=t.droppableId===r.droppableId,o=qc(t.index),i=qc(r.index);return n?`
      You have moved the item from position `+o+`
      to position `+i+`
    `:`
    You have moved the item from position `+o+`
    in list `+t.droppableId+`
    to list `+r.droppableId+`
    in position `+i+`
  `},w5=function(t,r,n){var o=r.droppableId===n.droppableId;return o?`
      The item `+t+`
      has been combined with `+n.draggableId:`
      The item `+t+`
      in list `+r.droppableId+`
      has been combined with `+n.draggableId+`
      in list `+n.droppableId+`
    `},Zz=function(t){var r=t.destination;if(r)return C5(t.source,r);var n=t.combine;return n?w5(t.draggableId,t.source,n):"You are over an area that cannot be dropped on"},ex=function(t){return`
  The item has returned to its starting position
  of `+qc(t.index)+`
`},Xz=function(t){if(t.reason==="CANCEL")return`
      Movement cancelled.
      `+ex(t.source)+`
    `;var r=t.destination,n=t.combine;return r?`
      You have dropped the item.
      `+C5(t.source,r)+`
    `:n?`
      You have dropped the item.
      `+w5(t.draggableId,t.source,n)+`
    `:`
    The item has been dropped while not over a drop area.
    `+ex(t.source)+`
  `},tc={dragHandleUsageInstructions:Qz,onDragStart:Yz,onDragUpdate:Zz,onDragEnd:Xz},wt={x:0,y:0},Et=function(t,r){return{x:t.x+r.x,y:t.y+r.y}},dr=function(t,r){return{x:t.x-r.x,y:t.y-r.y}},no=function(t,r){return t.x===r.x&&t.y===r.y},na=function(t){return{x:t.x!==0?-t.x:0,y:t.y!==0?-t.y:0}},Wo=function(t,r,n){var o;return n===void 0&&(n=0),o={},o[t]=r,o[t==="x"?"y":"x"]=n,o},Cs=function(t,r){return Math.sqrt(Math.pow(r.x-t.x,2)+Math.pow(r.y-t.y,2))},tx=function(t,r){return Math.min.apply(Math,r.map(function(n){return Cs(t,n)}))},j5=function(t){return function(r){return{x:t(r.x),y:t(r.y)}}},eH=function(e,t){var r=qr({top:Math.max(t.top,e.top),right:Math.min(t.right,e.right),bottom:Math.min(t.bottom,e.bottom),left:Math.max(t.left,e.left)});return r.width<=0||r.height<=0?null:r},Vs=function(t,r){return{top:t.top+r.y,left:t.left+r.x,bottom:t.bottom+r.y,right:t.right+r.x}},rx=function(t){return[{x:t.left,y:t.top},{x:t.right,y:t.top},{x:t.left,y:t.bottom},{x:t.right,y:t.bottom}]},tH={top:0,right:0,bottom:0,left:0},rH=function(t,r){return r?Vs(t,r.scroll.diff.displacement):t},nH=function(t,r,n){if(n&&n.increasedBy){var o;return xe({},t,(o={},o[r.end]=t[r.end]+n.increasedBy[r.line],o))}return t},oH=function(t,r){return r&&r.shouldClipSubject?eH(r.pageMarginBox,t):qr(t)},Bi=function(e){var t=e.page,r=e.withPlaceholder,n=e.axis,o=e.frame,i=rH(t.marginBox,o),a=nH(i,n,r),s=oH(a,o);return{page:t,withPlaceholder:r,active:s}},Gm=function(e,t){e.frame||fe();var r=e.frame,n=dr(t,r.scroll.initial),o=na(n),i=xe({},r,{scroll:{initial:r.scroll.initial,current:t,diff:{value:n,displacement:o},max:r.scroll.max}}),a=Bi({page:e.subject.page,withPlaceholder:e.subject.withPlaceholder,axis:e.axis,frame:i}),s=xe({},e,{frame:i,subject:a});return s};function Gc(e){return Object.values?Object.values(e):Object.keys(e).map(function(t){return e[t]})}function Km(e,t){if(e.findIndex)return e.findIndex(t);for(var r=0;r<e.length;r++)if(t(e[r]))return r;return-1}function xo(e,t){if(e.find)return e.find(t);var r=Km(e,t);if(r!==-1)return e[r]}function T5(e){return Array.prototype.slice.call(e)}var O5=Ct(function(e){return e.reduce(function(t,r){return t[r.descriptor.id]=r,t},{})}),I5=Ct(function(e){return e.reduce(function(t,r){return t[r.descriptor.id]=r,t},{})}),Xu=Ct(function(e){return Gc(e)}),iH=Ct(function(e){return Gc(e)}),oa=Ct(function(e,t){var r=iH(t).filter(function(n){return e===n.descriptor.droppableId}).sort(function(n,o){return n.descriptor.index-o.descriptor.index});return r});function Jm(e){return e.at&&e.at.type==="REORDER"?e.at.destination:null}function ed(e){return e.at&&e.at.type==="COMBINE"?e.at.combine:null}var td=Ct(function(e,t){return t.filter(function(r){return r.descriptor.id!==e.descriptor.id})}),aH=function(e){var t=e.isMovingForward,r=e.draggable,n=e.destination,o=e.insideDestination,i=e.previousImpact;if(!n.isCombineEnabled)return null;var a=Jm(i);if(!a)return null;function s(h){var y={type:"COMBINE",combine:{draggableId:h,droppableId:n.descriptor.id}};return xe({},i,{at:y})}var c=i.displaced.all,u=c.length?c[0]:null;if(t)return u?s(u):null;var f=td(r,o);if(!u){if(!f.length)return null;var d=f[f.length-1];return s(d.descriptor.id)}var g=Km(f,function(h){return h.descriptor.id===u});g===-1&&fe();var p=g-1;if(p<0)return null;var m=f[p];return s(m.descriptor.id)},ia=function(e,t){return e.descriptor.droppableId===t.descriptor.id},E5={point:wt,value:0},ws={invisible:{},visible:{},all:[]},sH={displaced:ws,displacedBy:E5,at:null},Mr=function(e,t){return function(r){return e<=r&&r<=t}},P5=function(e){var t=Mr(e.top,e.bottom),r=Mr(e.left,e.right);return function(n){var o=t(n.top)&&t(n.bottom)&&r(n.left)&&r(n.right);if(o)return!0;var i=t(n.top)||t(n.bottom),a=r(n.left)||r(n.right),s=i&&a;if(s)return!0;var c=n.top<e.top&&n.bottom>e.bottom,u=n.left<e.left&&n.right>e.right,f=c&&u;if(f)return!0;var d=c&&a||u&&i;return d}},lH=function(e){var t=Mr(e.top,e.bottom),r=Mr(e.left,e.right);return function(n){var o=t(n.top)&&t(n.bottom)&&r(n.left)&&r(n.right);return o}},Qm={direction:"vertical",line:"y",crossAxisLine:"x",start:"top",end:"bottom",size:"height",crossAxisStart:"left",crossAxisEnd:"right",crossAxisSize:"width"},$5={direction:"horizontal",line:"x",crossAxisLine:"y",start:"left",end:"right",size:"width",crossAxisStart:"top",crossAxisEnd:"bottom",crossAxisSize:"height"},cH=function(e){return function(t){var r=Mr(t.top,t.bottom),n=Mr(t.left,t.right);return function(o){return e===Qm?r(o.top)&&r(o.bottom):n(o.left)&&n(o.right)}}},uH=function(t,r){var n=r.frame?r.frame.scroll.diff.displacement:wt;return Vs(t,n)},dH=function(t,r,n){return r.subject.active?n(r.subject.active)(t):!1},fH=function(t,r,n){return n(r)(t)},Ym=function(t){var r=t.target,n=t.destination,o=t.viewport,i=t.withDroppableDisplacement,a=t.isVisibleThroughFrameFn,s=i?uH(r,n):r;return dH(s,n,a)&&fH(s,o,a)},gH=function(t){return Ym(xe({},t,{isVisibleThroughFrameFn:P5}))},k5=function(t){return Ym(xe({},t,{isVisibleThroughFrameFn:lH}))},pH=function(t){return Ym(xe({},t,{isVisibleThroughFrameFn:cH(t.destination.axis)}))},mH=function(t,r,n){if(typeof n=="boolean")return n;if(!r)return!0;var o=r.invisible,i=r.visible;if(o[t])return!1;var a=i[t];return a?a.shouldAnimate:!0};function hH(e,t){var r=e.page.marginBox,n={top:t.point.y,right:0,bottom:0,left:t.point.x};return qr(Wm(r,n))}function js(e){var t=e.afterDragging,r=e.destination,n=e.displacedBy,o=e.viewport,i=e.forceShouldAnimate,a=e.last;return t.reduce(function(c,u){var f=hH(u,n),d=u.descriptor.id;c.all.push(d);var g=gH({target:f,destination:r,viewport:o,withDroppableDisplacement:!0});if(!g)return c.invisible[u.descriptor.id]=!0,c;var p=mH(d,a,i),m={draggableId:d,shouldAnimate:p};return c.visible[d]=m,c},{all:[],visible:{},invisible:{}})}function vH(e,t){if(!e.length)return 0;var r=e[e.length-1].descriptor.index;return t.inHomeList?r:r+1}function nx(e){var t=e.insideDestination,r=e.inHomeList,n=e.displacedBy,o=e.destination,i=vH(t,{inHomeList:r});return{displaced:ws,displacedBy:n,at:{type:"REORDER",destination:{droppableId:o.descriptor.id,index:i}}}}function Kc(e){var t=e.draggable,r=e.insideDestination,n=e.destination,o=e.viewport,i=e.displacedBy,a=e.last,s=e.index,c=e.forceShouldAnimate,u=ia(t,n);if(s==null)return nx({insideDestination:r,inHomeList:u,displacedBy:i,destination:n});var f=xo(r,function(h){return h.descriptor.index===s});if(!f)return nx({insideDestination:r,inHomeList:u,displacedBy:i,destination:n});var d=td(t,r),g=r.indexOf(f),p=d.slice(g),m=js({afterDragging:p,destination:n,displacedBy:i,last:a,viewport:o.frame,forceShouldAnimate:c});return{displaced:m,displacedBy:i,at:{type:"REORDER",destination:{droppableId:n.descriptor.id,index:s}}}}function lo(e,t){return!!t.effected[e]}var xH=function(e){var t=e.isMovingForward,r=e.destination,n=e.draggables,o=e.combine,i=e.afterCritical;if(!r.isCombineEnabled)return null;var a=o.draggableId,s=n[a],c=s.descriptor.index,u=lo(a,i);return u?t?c:c-1:t?c+1:c},yH=function(e){var t=e.isMovingForward,r=e.isInHomeList,n=e.insideDestination,o=e.location;if(!n.length)return null;var i=o.index,a=t?i+1:i-1,s=n[0].descriptor.index,c=n[n.length-1].descriptor.index,u=r?c:c+1;return a<s||a>u?null:a},bH=function(e){var t=e.isMovingForward,r=e.isInHomeList,n=e.draggable,o=e.draggables,i=e.destination,a=e.insideDestination,s=e.previousImpact,c=e.viewport,u=e.afterCritical,f=s.at;if(f||fe(),f.type==="REORDER"){var d=yH({isMovingForward:t,isInHomeList:r,location:f.destination,insideDestination:a});return d==null?null:Kc({draggable:n,insideDestination:a,destination:i,viewport:c,last:s.displaced,displacedBy:s.displacedBy,index:d})}var g=xH({isMovingForward:t,destination:i,displaced:s.displaced,draggables:o,combine:f.combine,afterCritical:u});return g==null?null:Kc({draggable:n,insideDestination:a,destination:i,viewport:c,last:s.displaced,displacedBy:s.displacedBy,index:g})},SH=function(e){var t=e.displaced,r=e.afterCritical,n=e.combineWith,o=e.displacedBy,i=!!(t.visible[n]||t.invisible[n]);return lo(n,r)?i?wt:na(o.point):i?o.point:wt},CH=function(e){var t=e.afterCritical,r=e.impact,n=e.draggables,o=ed(r);o||fe();var i=o.draggableId,a=n[i].page.borderBox.center,s=SH({displaced:r.displaced,afterCritical:t,combineWith:i,displacedBy:r.displacedBy});return Et(a,s)},N5=function(t,r){return r.margin[t.start]+r.borderBox[t.size]/2},wH=function(t,r){return r.margin[t.end]+r.borderBox[t.size]/2},Zm=function(t,r,n){return r[t.crossAxisStart]+n.margin[t.crossAxisStart]+n.borderBox[t.crossAxisSize]/2},ox=function(t){var r=t.axis,n=t.moveRelativeTo,o=t.isMoving;return Wo(r.line,n.marginBox[r.end]+N5(r,o),Zm(r,n.marginBox,o))},ix=function(t){var r=t.axis,n=t.moveRelativeTo,o=t.isMoving;return Wo(r.line,n.marginBox[r.start]-wH(r,o),Zm(r,n.marginBox,o))},jH=function(t){var r=t.axis,n=t.moveInto,o=t.isMoving;return Wo(r.line,n.contentBox[r.start]+N5(r,o),Zm(r,n.contentBox,o))},TH=function(e){var t=e.impact,r=e.draggable,n=e.draggables,o=e.droppable,i=e.afterCritical,a=oa(o.descriptor.id,n),s=r.page,c=o.axis;if(!a.length)return jH({axis:c,moveInto:o.page,isMoving:s});var u=t.displaced,f=t.displacedBy,d=u.all[0];if(d){var g=n[d];if(lo(d,i))return ix({axis:c,moveRelativeTo:g.page,isMoving:s});var p=Uc(g.page,f.point);return ix({axis:c,moveRelativeTo:p,isMoving:s})}var m=a[a.length-1];if(m.descriptor.id===r.descriptor.id)return s.borderBox.center;if(lo(m.descriptor.id,i)){var h=Uc(m.page,na(i.displacedBy.point));return ox({axis:c,moveRelativeTo:h,isMoving:s})}return ox({axis:c,moveRelativeTo:m.page,isMoving:s})},kg=function(e,t){var r=e.frame;return r?Et(t,r.scroll.diff.displacement):t},OH=function(t){var r=t.impact,n=t.draggable,o=t.droppable,i=t.draggables,a=t.afterCritical,s=n.page.borderBox.center,c=r.at;return!o||!c?s:c.type==="REORDER"?TH({impact:r,draggable:n,draggables:i,droppable:o,afterCritical:a}):CH({impact:r,draggables:i,afterCritical:a})},rd=function(e){var t=OH(e),r=e.droppable,n=r?kg(r,t):t;return n},M5=function(e,t){var r=dr(t,e.scroll.initial),n=na(r),o=qr({top:t.y,bottom:t.y+e.frame.height,left:t.x,right:t.x+e.frame.width}),i={frame:o,scroll:{initial:e.scroll.initial,max:e.scroll.max,current:t,diff:{value:r,displacement:n}}};return i};function ax(e,t){return e.map(function(r){return t[r]})}function IH(e,t){for(var r=0;r<t.length;r++){var n=t[r].visible[e];if(n)return n}return null}var EH=function(e){var t=e.impact,r=e.viewport,n=e.destination,o=e.draggables,i=e.maxScrollChange,a=M5(r,Et(r.scroll.current,i)),s=n.frame?Gm(n,Et(n.frame.scroll.current,i)):n,c=t.displaced,u=js({afterDragging:ax(c.all,o),destination:n,displacedBy:t.displacedBy,viewport:a.frame,last:c,forceShouldAnimate:!1}),f=js({afterDragging:ax(c.all,o),destination:s,displacedBy:t.displacedBy,viewport:r.frame,last:c,forceShouldAnimate:!1}),d={},g={},p=[c,u,f];c.all.forEach(function(h){var y=IH(h,p);if(y){g[h]=y;return}d[h]=!0});var m=xe({},t,{displaced:{all:c.all,invisible:d,visible:g}});return m},PH=function(e,t){return Et(e.scroll.diff.displacement,t)},Xm=function(e){var t=e.pageBorderBoxCenter,r=e.draggable,n=e.viewport,o=PH(n,t),i=dr(o,r.page.borderBox.center);return Et(r.client.borderBox.center,i)},A5=function(e){var t=e.draggable,r=e.destination,n=e.newPageBorderBoxCenter,o=e.viewport,i=e.withDroppableDisplacement,a=e.onlyOnMainAxis,s=a===void 0?!1:a,c=dr(n,t.page.borderBox.center),u=Vs(t.page.borderBox,c),f={target:u,destination:r,withDroppableDisplacement:i,viewport:o};return s?pH(f):k5(f)},$H=function(e){var t=e.isMovingForward,r=e.draggable,n=e.destination,o=e.draggables,i=e.previousImpact,a=e.viewport,s=e.previousPageBorderBoxCenter,c=e.previousClientSelection,u=e.afterCritical;if(!n.isEnabled)return null;var f=oa(n.descriptor.id,o),d=ia(r,n),g=aH({isMovingForward:t,draggable:r,destination:n,insideDestination:f,previousImpact:i})||bH({isMovingForward:t,isInHomeList:d,draggable:r,draggables:o,destination:n,insideDestination:f,previousImpact:i,viewport:a,afterCritical:u});if(!g)return null;var p=rd({impact:g,draggable:r,droppable:n,draggables:o,afterCritical:u}),m=A5({draggable:r,destination:n,newPageBorderBoxCenter:p,viewport:a.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});if(m){var h=Xm({pageBorderBoxCenter:p,draggable:r,viewport:a});return{clientSelection:h,impact:g,scrollJumpRequest:null}}var y=dr(p,s),v=EH({impact:g,viewport:a,destination:n,draggables:o,maxScrollChange:y});return{clientSelection:c,impact:v,scrollJumpRequest:y}},zt=function(t){var r=t.subject.active;return r||fe(),r},kH=function(e){var t=e.isMovingForward,r=e.pageBorderBoxCenter,n=e.source,o=e.droppables,i=e.viewport,a=n.subject.active;if(!a)return null;var s=n.axis,c=Mr(a[s.start],a[s.end]),u=Xu(o).filter(function(d){return d!==n}).filter(function(d){return d.isEnabled}).filter(function(d){return!!d.subject.active}).filter(function(d){return P5(i.frame)(zt(d))}).filter(function(d){var g=zt(d);return t?a[s.crossAxisEnd]<g[s.crossAxisEnd]:g[s.crossAxisStart]<a[s.crossAxisStart]}).filter(function(d){var g=zt(d),p=Mr(g[s.start],g[s.end]);return c(g[s.start])||c(g[s.end])||p(a[s.start])||p(a[s.end])}).sort(function(d,g){var p=zt(d)[s.crossAxisStart],m=zt(g)[s.crossAxisStart];return t?p-m:m-p}).filter(function(d,g,p){return zt(d)[s.crossAxisStart]===zt(p[0])[s.crossAxisStart]});if(!u.length)return null;if(u.length===1)return u[0];var f=u.filter(function(d){var g=Mr(zt(d)[s.start],zt(d)[s.end]);return g(r[s.line])});return f.length===1?f[0]:f.length>1?f.sort(function(d,g){return zt(d)[s.start]-zt(g)[s.start]})[0]:u.sort(function(d,g){var p=tx(r,rx(zt(d))),m=tx(r,rx(zt(g)));return p!==m?p-m:zt(d)[s.start]-zt(g)[s.start]})[0]},sx=function(t,r){var n=t.page.borderBox.center;return lo(t.descriptor.id,r)?dr(n,r.displacedBy.point):n},NH=function(t,r){var n=t.page.borderBox;return lo(t.descriptor.id,r)?Vs(n,na(r.displacedBy.point)):n},MH=function(e){var t=e.pageBorderBoxCenter,r=e.viewport,n=e.destination,o=e.insideDestination,i=e.afterCritical,a=o.filter(function(s){return k5({target:NH(s,i),destination:n,viewport:r.frame,withDroppableDisplacement:!0})}).sort(function(s,c){var u=Cs(t,kg(n,sx(s,i))),f=Cs(t,kg(n,sx(c,i)));return u<f?-1:f<u?1:s.descriptor.index-c.descriptor.index});return a[0]||null},Ws=Ct(function(t,r){var n=r[t.line];return{value:n,point:Wo(t.line,n)}}),AH=function(t,r,n){var o=t.axis;if(t.descriptor.mode==="virtual")return Wo(o.line,r[o.line]);var i=t.subject.page.contentBox[o.size],a=oa(t.descriptor.id,n),s=a.reduce(function(f,d){return f+d.client.marginBox[o.size]},0),c=s+r[o.line],u=c-i;return u<=0?null:Wo(o.line,u)},D5=function(t,r){return xe({},t,{scroll:xe({},t.scroll,{max:r})})},R5=function(t,r,n){var o=t.frame;ia(r,t)&&fe(),t.subject.withPlaceholder&&fe();var i=Ws(t.axis,r.displaceBy).point,a=AH(t,i,n),s={placeholderSize:i,increasedBy:a,oldFrameMaxScroll:t.frame?t.frame.scroll.max:null};if(!o){var c=Bi({page:t.subject.page,withPlaceholder:s,axis:t.axis,frame:t.frame});return xe({},t,{subject:c})}var u=a?Et(o.scroll.max,a):o.scroll.max,f=D5(o,u),d=Bi({page:t.subject.page,withPlaceholder:s,axis:t.axis,frame:f});return xe({},t,{subject:d,frame:f})},DH=function(t){var r=t.subject.withPlaceholder;r||fe();var n=t.frame;if(!n){var o=Bi({page:t.subject.page,axis:t.axis,frame:null,withPlaceholder:null});return xe({},t,{subject:o})}var i=r.oldFrameMaxScroll;i||fe();var a=D5(n,i),s=Bi({page:t.subject.page,axis:t.axis,frame:a,withPlaceholder:null});return xe({},t,{subject:s,frame:a})},RH=function(e){var t=e.previousPageBorderBoxCenter,r=e.moveRelativeTo,n=e.insideDestination,o=e.draggable,i=e.draggables,a=e.destination,s=e.viewport,c=e.afterCritical;if(!r){if(n.length)return null;var u={displaced:ws,displacedBy:E5,at:{type:"REORDER",destination:{droppableId:a.descriptor.id,index:0}}},f=rd({impact:u,draggable:o,droppable:a,draggables:i,afterCritical:c}),d=ia(o,a)?a:R5(a,o,i),g=A5({draggable:o,destination:d,newPageBorderBoxCenter:f,viewport:s.frame,withDroppableDisplacement:!1,onlyOnMainAxis:!0});return g?u:null}var p=t[a.axis.line]<=r.page.borderBox.center[a.axis.line],m=function(){var y=r.descriptor.index;return r.descriptor.id===o.descriptor.id||p?y:y+1}(),h=Ws(a.axis,o.displaceBy);return Kc({draggable:o,insideDestination:n,destination:a,viewport:s,displacedBy:h,last:ws,index:m})},LH=function(e){var t=e.isMovingForward,r=e.previousPageBorderBoxCenter,n=e.draggable,o=e.isOver,i=e.draggables,a=e.droppables,s=e.viewport,c=e.afterCritical,u=kH({isMovingForward:t,pageBorderBoxCenter:r,source:o,droppables:a,viewport:s});if(!u)return null;var f=oa(u.descriptor.id,i),d=MH({pageBorderBoxCenter:r,viewport:s,destination:u,insideDestination:f,afterCritical:c}),g=RH({previousPageBorderBoxCenter:r,destination:u,draggable:n,draggables:i,moveRelativeTo:d,insideDestination:f,viewport:s,afterCritical:c});if(!g)return null;var p=rd({impact:g,draggable:n,droppable:u,draggables:i,afterCritical:c}),m=Xm({pageBorderBoxCenter:p,draggable:n,viewport:s});return{clientSelection:m,impact:g,scrollJumpRequest:null}},mr=function(e){var t=e.at;return t?t.type==="REORDER"?t.destination.droppableId:t.combine.droppableId:null},_H=function(t,r){var n=mr(t);return n?r[n]:null},FH=function(e){var t=e.state,r=e.type,n=_H(t.impact,t.dimensions.droppables),o=!!n,i=t.dimensions.droppables[t.critical.droppable.id],a=n||i,s=a.axis.direction,c=s==="vertical"&&(r==="MOVE_UP"||r==="MOVE_DOWN")||s==="horizontal"&&(r==="MOVE_LEFT"||r==="MOVE_RIGHT");if(c&&!o)return null;var u=r==="MOVE_DOWN"||r==="MOVE_RIGHT",f=t.dimensions.draggables[t.critical.draggable.id],d=t.current.page.borderBoxCenter,g=t.dimensions,p=g.draggables,m=g.droppables;return c?$H({isMovingForward:u,previousPageBorderBoxCenter:d,draggable:f,destination:a,draggables:p,viewport:t.viewport,previousClientSelection:t.current.client.selection,previousImpact:t.impact,afterCritical:t.afterCritical}):LH({isMovingForward:u,previousPageBorderBoxCenter:d,draggable:f,isOver:a,draggables:p,droppables:m,viewport:t.viewport,afterCritical:t.afterCritical})};function jo(e){return e.phase==="DRAGGING"||e.phase==="COLLECTING"}function L5(e){var t=Mr(e.top,e.bottom),r=Mr(e.left,e.right);return function(o){return t(o.y)&&r(o.x)}}function BH(e,t){return e.left<t.right&&e.right>t.left&&e.top<t.bottom&&e.bottom>t.top}function zH(e){var t=e.pageBorderBox,r=e.draggable,n=e.candidates,o=r.page.borderBox.center,i=n.map(function(a){var s=a.axis,c=Wo(a.axis.line,t.center[s.line],a.page.borderBox.center[s.crossAxisLine]);return{id:a.descriptor.id,distance:Cs(o,c)}}).sort(function(a,s){return s.distance-a.distance});return i[0]?i[0].id:null}function HH(e){var t=e.pageBorderBox,r=e.draggable,n=e.droppables,o=Xu(n).filter(function(i){if(!i.isEnabled)return!1;var a=i.subject.active;if(!a||!BH(t,a))return!1;if(L5(a)(t.center))return!0;var s=i.axis,c=a.center[s.crossAxisLine],u=t[s.crossAxisStart],f=t[s.crossAxisEnd],d=Mr(a[s.crossAxisStart],a[s.crossAxisEnd]),g=d(u),p=d(f);return!g&&!p?!0:g?u<c:f>c});return o.length?o.length===1?o[0].descriptor.id:zH({pageBorderBox:t,draggable:r,candidates:o}):null}var _5=function(t,r){return qr(Vs(t,r))},UH=function(e,t){var r=e.frame;return r?_5(t,r.scroll.diff.value):t};function F5(e){var t=e.displaced,r=e.id;return!!(t.visible[r]||t.invisible[r])}function VH(e){var t=e.draggable,r=e.closest,n=e.inHomeList;return r?n&&r.descriptor.index>t.descriptor.index?r.descriptor.index-1:r.descriptor.index:null}var WH=function(e){var t=e.pageBorderBoxWithDroppableScroll,r=e.draggable,n=e.destination,o=e.insideDestination,i=e.last,a=e.viewport,s=e.afterCritical,c=n.axis,u=Ws(n.axis,r.displaceBy),f=u.value,d=t[c.start],g=t[c.end],p=td(r,o),m=xo(p,function(y){var v=y.descriptor.id,x=y.page.borderBox.center[c.line],S=lo(v,s),I=F5({displaced:i,id:v});return S?I?g<=x:d<x-f:I?g<=x+f:d<x}),h=VH({draggable:r,closest:m,inHomeList:ia(r,n)});return Kc({draggable:r,insideDestination:o,destination:n,viewport:a,last:i,displacedBy:u,index:h})},qH=4,GH=function(e){var t=e.draggable,r=e.pageBorderBoxWithDroppableScroll,n=e.previousImpact,o=e.destination,i=e.insideDestination,a=e.afterCritical;if(!o.isCombineEnabled)return null;var s=o.axis,c=Ws(o.axis,t.displaceBy),u=c.value,f=r[s.start],d=r[s.end],g=td(t,i),p=xo(g,function(h){var y=h.descriptor.id,v=h.page.borderBox,x=v[s.size],S=x/qH,I=lo(y,a),k=F5({displaced:n.displaced,id:y});return I?k?d>v[s.start]+S&&d<v[s.end]-S:f>v[s.start]-u+S&&f<v[s.end]-u-S:k?d>v[s.start]+u+S&&d<v[s.end]+u-S:f>v[s.start]+S&&f<v[s.end]-S});if(!p)return null;var m={displacedBy:c,displaced:n.displaced,at:{type:"COMBINE",combine:{draggableId:p.descriptor.id,droppableId:o.descriptor.id}}};return m},B5=function(e){var t=e.pageOffset,r=e.draggable,n=e.draggables,o=e.droppables,i=e.previousImpact,a=e.viewport,s=e.afterCritical,c=_5(r.page.borderBox,t),u=HH({pageBorderBox:c,draggable:r,droppables:o});if(!u)return sH;var f=o[u],d=oa(f.descriptor.id,n),g=UH(f,c);return GH({pageBorderBoxWithDroppableScroll:g,draggable:r,previousImpact:i,destination:f,insideDestination:d,afterCritical:s})||WH({pageBorderBoxWithDroppableScroll:g,draggable:r,destination:f,insideDestination:d,last:i.displaced,viewport:a,afterCritical:s})},eh=function(e,t){var r;return xe({},e,(r={},r[t.descriptor.id]=t,r))},KH=function(t){var r=t.previousImpact,n=t.impact,o=t.droppables,i=mr(r),a=mr(n);if(!i||i===a)return o;var s=o[i];if(!s.subject.withPlaceholder)return o;var c=DH(s);return eh(o,c)},JH=function(e){var t=e.draggable,r=e.draggables,n=e.droppables,o=e.previousImpact,i=e.impact,a=KH({previousImpact:o,impact:i,droppables:n}),s=mr(i);if(!s)return a;var c=n[s];if(ia(t,c)||c.subject.withPlaceholder)return a;var u=R5(c,t,r);return eh(a,u)},Za=function(e){var t=e.state,r=e.clientSelection,n=e.dimensions,o=e.viewport,i=e.impact,a=e.scrollJumpRequest,s=o||t.viewport,c=n||t.dimensions,u=r||t.current.client.selection,f=dr(u,t.initial.client.selection),d={offset:f,selection:u,borderBoxCenter:Et(t.initial.client.borderBoxCenter,f)},g={selection:Et(d.selection,s.scroll.current),borderBoxCenter:Et(d.borderBoxCenter,s.scroll.current),offset:Et(d.offset,s.scroll.diff.value)},p={client:d,page:g};if(t.phase==="COLLECTING")return xe({phase:"COLLECTING"},t,{dimensions:c,viewport:s,current:p});var m=c.draggables[t.critical.draggable.id],h=i||B5({pageOffset:g.offset,draggable:m,draggables:c.draggables,droppables:c.droppables,previousImpact:t.impact,viewport:s,afterCritical:t.afterCritical}),y=JH({draggable:m,impact:h,previousImpact:t.impact,draggables:c.draggables,droppables:c.droppables}),v=xe({},t,{current:p,dimensions:{draggables:c.draggables,droppables:y},impact:h,viewport:s,scrollJumpRequest:a||null,forceShouldAnimate:a?!1:null});return v};function QH(e,t){return e.map(function(r){return t[r]})}var z5=function(e){var t=e.impact,r=e.viewport,n=e.draggables,o=e.destination,i=e.forceShouldAnimate,a=t.displaced,s=QH(a.all,n),c=js({afterDragging:s,destination:o,displacedBy:t.displacedBy,viewport:r.frame,forceShouldAnimate:i,last:a});return xe({},t,{displaced:c})},H5=function(e){var t=e.impact,r=e.draggable,n=e.droppable,o=e.draggables,i=e.viewport,a=e.afterCritical,s=rd({impact:t,draggable:r,draggables:o,droppable:n,afterCritical:a});return Xm({pageBorderBoxCenter:s,draggable:r,viewport:i})},U5=function(e){var t=e.state,r=e.dimensions,n=e.viewport;t.movementMode!=="SNAP"&&fe();var o=t.impact,i=n||t.viewport,a=r||t.dimensions,s=a.draggables,c=a.droppables,u=s[t.critical.draggable.id],f=mr(o);f||fe();var d=c[f],g=z5({impact:o,viewport:i,destination:d,draggables:s}),p=H5({impact:g,draggable:u,droppable:d,draggables:s,viewport:i,afterCritical:t.afterCritical});return Za({impact:g,clientSelection:p,state:t,dimensions:a,viewport:i})},YH=function(e){return{index:e.index,droppableId:e.droppableId}},V5=function(e){var t=e.draggable,r=e.home,n=e.draggables,o=e.viewport,i=Ws(r.axis,t.displaceBy),a=oa(r.descriptor.id,n),s=a.indexOf(t);s===-1&&fe();var c=a.slice(s+1),u=c.reduce(function(p,m){return p[m.descriptor.id]=!0,p},{}),f={inVirtualList:r.descriptor.mode==="virtual",displacedBy:i,effected:u},d=js({afterDragging:c,destination:r,displacedBy:i,last:null,viewport:o.frame,forceShouldAnimate:!1}),g={displaced:d,displacedBy:i,at:{type:"REORDER",destination:YH(t.descriptor)}};return{impact:g,afterCritical:f}},ZH=function(e,t){return{draggables:e.draggables,droppables:eh(e.droppables,t)}},XH=function(e){var t=e.draggable,r=e.offset,n=e.initialWindowScroll,o=Uc(t.client,r),i=Vc(o,n),a=xe({},t,{placeholder:xe({},t.placeholder,{client:o}),client:o,page:i});return a},eU=function(e){var t=e.frame;return t||fe(),t},tU=function(e){var t=e.additions,r=e.updatedDroppables,n=e.viewport,o=n.scroll.diff.value;return t.map(function(i){var a=i.descriptor.droppableId,s=r[a],c=eU(s),u=c.scroll.diff.value,f=Et(o,u),d=XH({draggable:i,offset:f,initialWindowScroll:n.scroll.initial});return d})},rU=function(e){var t=e.state,r=e.published,n=r.modified.map(function(S){var I=t.dimensions.droppables[S.droppableId],k=Gm(I,S.scroll);return k}),o=xe({},t.dimensions.droppables,{},O5(n)),i=I5(tU({additions:r.additions,updatedDroppables:o,viewport:t.viewport})),a=xe({},t.dimensions.draggables,{},i);r.removals.forEach(function(S){delete a[S]});var s={droppables:o,draggables:a},c=mr(t.impact),u=c?s.droppables[c]:null,f=s.draggables[t.critical.draggable.id],d=s.droppables[t.critical.droppable.id],g=V5({draggable:f,home:d,draggables:a,viewport:t.viewport}),p=g.impact,m=g.afterCritical,h=u&&u.isCombineEnabled?t.impact:p,y=B5({pageOffset:t.current.page.offset,draggable:s.draggables[t.critical.draggable.id],draggables:s.draggables,droppables:s.droppables,previousImpact:h,viewport:t.viewport,afterCritical:m}),v=xe({phase:"DRAGGING"},t,{phase:"DRAGGING",impact:y,onLiftImpact:p,dimensions:s,afterCritical:m,forceShouldAnimate:!1});if(t.phase==="COLLECTING")return v;var x=xe({phase:"DROP_PENDING"},v,{phase:"DROP_PENDING",reason:t.reason,isWaiting:!1});return x},Ng=function(t){return t.movementMode==="SNAP"},af=function(t,r,n){var o=ZH(t.dimensions,r);return!Ng(t)||n?Za({state:t,dimensions:o}):U5({state:t,dimensions:o})};function sf(e){return e.isDragging&&e.movementMode==="SNAP"?xe({phase:"DRAGGING"},e,{scrollJumpRequest:null}):e}var lx={phase:"IDLE",completed:null,shouldFlush:!1},nU=function(e,t){if(e===void 0&&(e=lx),t.type==="FLUSH")return xe({},lx,{shouldFlush:!0});if(t.type==="INITIAL_PUBLISH"){e.phase!=="IDLE"&&fe();var r=t.payload,n=r.critical,o=r.clientSelection,i=r.viewport,a=r.dimensions,s=r.movementMode,c=a.draggables[n.draggable.id],u=a.droppables[n.droppable.id],f={selection:o,borderBoxCenter:c.client.borderBox.center,offset:wt},d={client:f,page:{selection:Et(f.selection,i.scroll.initial),borderBoxCenter:Et(f.selection,i.scroll.initial),offset:Et(f.selection,i.scroll.diff.value)}},g=Xu(a.droppables).every(function(re){return!re.isFixedOnPage}),p=V5({draggable:c,home:u,draggables:a.draggables,viewport:i}),m=p.impact,h=p.afterCritical,y={phase:"DRAGGING",isDragging:!0,critical:n,movementMode:s,dimensions:a,initial:d,current:d,isWindowScrollAllowed:g,impact:m,afterCritical:h,onLiftImpact:m,viewport:i,scrollJumpRequest:null,forceShouldAnimate:null};return y}if(t.type==="COLLECTION_STARTING"){if(e.phase==="COLLECTING"||e.phase==="DROP_PENDING")return e;e.phase!=="DRAGGING"&&fe();var v=xe({phase:"COLLECTING"},e,{phase:"COLLECTING"});return v}if(t.type==="PUBLISH_WHILE_DRAGGING")return e.phase==="COLLECTING"||e.phase==="DROP_PENDING"||fe(),rU({state:e,published:t.payload});if(t.type==="MOVE"){if(e.phase==="DROP_PENDING")return e;jo(e)||fe();var x=t.payload.client;return no(x,e.current.client.selection)?e:Za({state:e,clientSelection:x,impact:Ng(e)?e.impact:null})}if(t.type==="UPDATE_DROPPABLE_SCROLL"){if(e.phase==="DROP_PENDING"||e.phase==="COLLECTING")return sf(e);jo(e)||fe();var S=t.payload,I=S.id,k=S.newScroll,T=e.dimensions.droppables[I];if(!T)return e;var P=Gm(T,k);return af(e,P,!1)}if(t.type==="UPDATE_DROPPABLE_IS_ENABLED"){if(e.phase==="DROP_PENDING")return e;jo(e)||fe();var N=t.payload,j=N.id,F=N.isEnabled,V=e.dimensions.droppables[j];V||fe(),V.isEnabled===F&&fe();var Z=xe({},V,{isEnabled:F});return af(e,Z,!0)}if(t.type==="UPDATE_DROPPABLE_IS_COMBINE_ENABLED"){if(e.phase==="DROP_PENDING")return e;jo(e)||fe();var Y=t.payload,z=Y.id,J=Y.isCombineEnabled,K=e.dimensions.droppables[z];K||fe(),K.isCombineEnabled===J&&fe();var M=xe({},K,{isCombineEnabled:J});return af(e,M,!0)}if(t.type==="MOVE_BY_WINDOW_SCROLL"){if(e.phase==="DROP_PENDING"||e.phase==="DROP_ANIMATING")return e;jo(e)||fe(),e.isWindowScrollAllowed||fe();var R=t.payload.newScroll;if(no(e.viewport.scroll.current,R))return sf(e);var _=M5(e.viewport,R);return Ng(e)?U5({state:e,viewport:_}):Za({state:e,viewport:_})}if(t.type==="UPDATE_VIEWPORT_MAX_SCROLL"){if(!jo(e))return e;var B=t.payload.maxScroll;if(no(B,e.viewport.scroll.max))return e;var q=xe({},e.viewport,{scroll:xe({},e.viewport.scroll,{max:B})});return xe({phase:"DRAGGING"},e,{viewport:q})}if(t.type==="MOVE_UP"||t.type==="MOVE_DOWN"||t.type==="MOVE_LEFT"||t.type==="MOVE_RIGHT"){if(e.phase==="COLLECTING"||e.phase==="DROP_PENDING")return e;e.phase!=="DRAGGING"&&fe();var H=FH({state:e,type:t.type});return H?Za({state:e,impact:H.impact,clientSelection:H.clientSelection,scrollJumpRequest:H.scrollJumpRequest}):e}if(t.type==="DROP_PENDING"){var Q=t.payload.reason;e.phase!=="COLLECTING"&&fe();var U=xe({phase:"DROP_PENDING"},e,{phase:"DROP_PENDING",isWaiting:!0,reason:Q});return U}if(t.type==="DROP_ANIMATE"){var G=t.payload,$=G.completed,w=G.dropDuration,b=G.newHomeClientOffset;e.phase==="DRAGGING"||e.phase==="DROP_PENDING"||fe();var W={phase:"DROP_ANIMATING",completed:$,dropDuration:w,newHomeClientOffset:b,dimensions:e.dimensions};return W}if(t.type==="DROP_COMPLETE"){var L=t.payload.completed;return{phase:"IDLE",completed:L,shouldFlush:!1}}return e},oU=function(t){return{type:"BEFORE_INITIAL_CAPTURE",payload:t}},iU=function(t){return{type:"LIFT",payload:t}},aU=function(t){return{type:"INITIAL_PUBLISH",payload:t}},sU=function(t){return{type:"PUBLISH_WHILE_DRAGGING",payload:t}},lU=function(){return{type:"COLLECTION_STARTING",payload:null}},cU=function(t){return{type:"UPDATE_DROPPABLE_SCROLL",payload:t}},uU=function(t){return{type:"UPDATE_DROPPABLE_IS_ENABLED",payload:t}},dU=function(t){return{type:"UPDATE_DROPPABLE_IS_COMBINE_ENABLED",payload:t}},W5=function(t){return{type:"MOVE",payload:t}},fU=function(t){return{type:"MOVE_BY_WINDOW_SCROLL",payload:t}},gU=function(t){return{type:"UPDATE_VIEWPORT_MAX_SCROLL",payload:t}},pU=function(){return{type:"MOVE_UP",payload:null}},mU=function(){return{type:"MOVE_DOWN",payload:null}},hU=function(){return{type:"MOVE_RIGHT",payload:null}},vU=function(){return{type:"MOVE_LEFT",payload:null}},th=function(){return{type:"FLUSH",payload:null}},xU=function(t){return{type:"DROP_ANIMATE",payload:t}},rh=function(t){return{type:"DROP_COMPLETE",payload:t}},q5=function(t){return{type:"DROP",payload:t}},yU=function(t){return{type:"DROP_PENDING",payload:t}},G5=function(){return{type:"DROP_ANIMATION_FINISHED",payload:null}},bU=function(e){return function(t){var r=t.getState,n=t.dispatch;return function(o){return function(i){if(i.type!=="LIFT"){o(i);return}var a=i.payload,s=a.id,c=a.clientSelection,u=a.movementMode,f=r();f.phase==="DROP_ANIMATING"&&n(rh({completed:f.completed})),r().phase!=="IDLE"&&fe(),n(th()),n(oU({draggableId:s,movementMode:u}));var d={shouldPublishImmediately:u==="SNAP"},g={draggableId:s,scrollOptions:d},p=e.startPublishing(g),m=p.critical,h=p.dimensions,y=p.viewport;n(aU({critical:m,dimensions:h,clientSelection:c,movementMode:u,viewport:y}))}}}},SU=function(e){return function(){return function(t){return function(r){r.type==="INITIAL_PUBLISH"&&e.dragging(),r.type==="DROP_ANIMATE"&&e.dropping(r.payload.completed.result.reason),(r.type==="FLUSH"||r.type==="DROP_COMPLETE")&&e.resting(),t(r)}}}},nh={outOfTheWay:"cubic-bezier(0.2, 0, 0, 1)",drop:"cubic-bezier(.2,1,.1,1)"},Ts={opacity:{drop:0,combining:.7},scale:{drop:.75}},oh={outOfTheWay:.2,minDropTime:.33,maxDropTime:.55},bo=oh.outOfTheWay+"s "+nh.outOfTheWay,Xa={fluid:"opacity "+bo,snap:"transform "+bo+", opacity "+bo,drop:function(t){var r=t+"s "+nh.drop;return"transform "+r+", opacity "+r},outOfTheWay:"transform "+bo,placeholder:"height "+bo+", width "+bo+", margin "+bo},cx=function(t){return no(t,wt)?null:"translate("+t.x+"px, "+t.y+"px)"},Mg={moveTo:cx,drop:function(t,r){var n=cx(t);return n?r?n+" scale("+Ts.scale.drop+")":n:null}},Ag=oh.minDropTime,K5=oh.maxDropTime,CU=K5-Ag,ux=1500,wU=.6,jU=function(e){var t=e.current,r=e.destination,n=e.reason,o=Cs(t,r);if(o<=0)return Ag;if(o>=ux)return K5;var i=o/ux,a=Ag+CU*i,s=n==="CANCEL"?a*wU:a;return Number(s.toFixed(2))},TU=function(e){var t=e.impact,r=e.draggable,n=e.dimensions,o=e.viewport,i=e.afterCritical,a=n.draggables,s=n.droppables,c=mr(t),u=c?s[c]:null,f=s[r.descriptor.droppableId],d=H5({impact:t,draggable:r,draggables:a,afterCritical:i,droppable:u||f,viewport:o}),g=dr(d,r.client.borderBox.center);return g},OU=function(e){var t=e.draggables,r=e.reason,n=e.lastImpact,o=e.home,i=e.viewport,a=e.onLiftImpact;if(!n.at||r!=="DROP"){var s=z5({draggables:t,impact:a,destination:o,viewport:i,forceShouldAnimate:!0});return{impact:s,didDropInsideDroppable:!1}}if(n.at.type==="REORDER")return{impact:n,didDropInsideDroppable:!0};var c=xe({},n,{displaced:ws});return{impact:c,didDropInsideDroppable:!0}},IU=function(e){var t=e.getState,r=e.dispatch;return function(n){return function(o){if(o.type!=="DROP"){n(o);return}var i=t(),a=o.payload.reason;if(i.phase==="COLLECTING"){r(yU({reason:a}));return}if(i.phase!=="IDLE"){var s=i.phase==="DROP_PENDING"&&i.isWaiting;s&&fe(),i.phase==="DRAGGING"||i.phase==="DROP_PENDING"||fe();var c=i.critical,u=i.dimensions,f=u.draggables[i.critical.draggable.id],d=OU({reason:a,lastImpact:i.impact,afterCritical:i.afterCritical,onLiftImpact:i.onLiftImpact,home:i.dimensions.droppables[i.critical.droppable.id],viewport:i.viewport,draggables:i.dimensions.draggables}),g=d.impact,p=d.didDropInsideDroppable,m=p?Jm(g):null,h=p?ed(g):null,y={index:c.draggable.index,droppableId:c.droppable.id},v={draggableId:f.descriptor.id,type:f.descriptor.type,source:y,reason:a,mode:i.movementMode,destination:m,combine:h},x=TU({impact:g,draggable:f,dimensions:u,viewport:i.viewport,afterCritical:i.afterCritical}),S={critical:i.critical,afterCritical:i.afterCritical,result:v,impact:g},I=!no(i.current.client.offset,x)||!!v.combine;if(!I){r(rh({completed:S}));return}var k=jU({current:i.current.client.offset,destination:x,reason:a}),T={newHomeClientOffset:x,dropDuration:k,completed:S};r(xU(T))}}}},J5=function(){return{x:window.pageXOffset,y:window.pageYOffset}};function EU(e){return{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(r){r.target!==window&&r.target!==window.document||e()}}}function PU(e){var t=e.onWindowScroll;function r(){t(J5())}var n=Ss(r),o=EU(n),i=ro;function a(){return i!==ro}function s(){a()&&fe(),i=Pr(window,[o])}function c(){a()||fe(),n.cancel(),i(),i=ro}return{start:s,stop:c,isActive:a}}var $U=function(t){return t.type==="DROP_COMPLETE"||t.type==="DROP_ANIMATE"||t.type==="FLUSH"},kU=function(e){var t=PU({onWindowScroll:function(n){e.dispatch(fU({newScroll:n}))}});return function(r){return function(n){!t.isActive()&&n.type==="INITIAL_PUBLISH"&&t.start(),t.isActive()&&$U(n)&&t.stop(),r(n)}}},NU=function(e){var t=!1,r=!1,n=setTimeout(function(){r=!0}),o=function(a){t||r||(t=!0,e(a),clearTimeout(n))};return o.wasCalled=function(){return t},o},MU=function(){var e=[],t=function(i){var a=Km(e,function(u){return u.timerId===i});a===-1&&fe();var s=e.splice(a,1),c=s[0];c.callback()},r=function(i){var a=setTimeout(function(){return t(a)}),s={timerId:a,callback:i};e.push(s)},n=function(){if(e.length){var i=[].concat(e);e.length=0,i.forEach(function(a){clearTimeout(a.timerId),a.callback()})}};return{add:r,flush:n}},AU=function(t,r){return t==null&&r==null?!0:t==null||r==null?!1:t.droppableId===r.droppableId&&t.index===r.index},DU=function(t,r){return t==null&&r==null?!0:t==null||r==null?!1:t.draggableId===r.draggableId&&t.droppableId===r.droppableId},RU=function(t,r){if(t===r)return!0;var n=t.draggable.id===r.draggable.id&&t.draggable.droppableId===r.draggable.droppableId&&t.draggable.type===r.draggable.type&&t.draggable.index===r.draggable.index,o=t.droppable.id===r.droppable.id&&t.droppable.type===r.droppable.type;return n&&o},Ta=function(t,r){r()},El=function(t,r){return{draggableId:t.draggable.id,type:t.droppable.type,source:{droppableId:t.droppable.id,index:t.draggable.index},mode:r}},lf=function(t,r,n,o){if(!t){n(o(r));return}var i=NU(n),a={announce:i};t(r,a),i.wasCalled()||n(o(r))},LU=function(e,t){var r=MU(),n=null,o=function(g,p){n&&fe(),Ta("onBeforeCapture",function(){var m=e().onBeforeCapture;if(m){var h={draggableId:g,mode:p};m(h)}})},i=function(g,p){n&&fe(),Ta("onBeforeDragStart",function(){var m=e().onBeforeDragStart;m&&m(El(g,p))})},a=function(g,p){n&&fe();var m=El(g,p);n={mode:p,lastCritical:g,lastLocation:m.source,lastCombine:null},r.add(function(){Ta("onDragStart",function(){return lf(e().onDragStart,m,t,tc.onDragStart)})})},s=function(g,p){var m=Jm(p),h=ed(p);n||fe();var y=!RU(g,n.lastCritical);y&&(n.lastCritical=g);var v=!AU(n.lastLocation,m);v&&(n.lastLocation=m);var x=!DU(n.lastCombine,h);if(x&&(n.lastCombine=h),!(!y&&!v&&!x)){var S=xe({},El(g,n.mode),{combine:h,destination:m});r.add(function(){Ta("onDragUpdate",function(){return lf(e().onDragUpdate,S,t,tc.onDragUpdate)})})}},c=function(){n||fe(),r.flush()},u=function(g){n||fe(),n=null,Ta("onDragEnd",function(){return lf(e().onDragEnd,g,t,tc.onDragEnd)})},f=function(){if(n){var g=xe({},El(n.lastCritical,n.mode),{combine:null,destination:null,reason:"CANCEL"});u(g)}};return{beforeCapture:o,beforeStart:i,start:a,update:s,flush:c,drop:u,abort:f}},_U=function(e,t){var r=LU(e,t);return function(n){return function(o){return function(i){if(i.type==="BEFORE_INITIAL_CAPTURE"){r.beforeCapture(i.payload.draggableId,i.payload.movementMode);return}if(i.type==="INITIAL_PUBLISH"){var a=i.payload.critical;r.beforeStart(a,i.payload.movementMode),o(i),r.start(a,i.payload.movementMode);return}if(i.type==="DROP_COMPLETE"){var s=i.payload.completed.result;r.flush(),o(i),r.drop(s);return}if(o(i),i.type==="FLUSH"){r.abort();return}var c=n.getState();c.phase==="DRAGGING"&&r.update(c.critical,c.impact)}}}},FU=function(e){return function(t){return function(r){if(r.type!=="DROP_ANIMATION_FINISHED"){t(r);return}var n=e.getState();n.phase!=="DROP_ANIMATING"&&fe(),e.dispatch(rh({completed:n.completed}))}}},BU=function(e){var t=null,r=null;function n(){r&&(cancelAnimationFrame(r),r=null),t&&(t(),t=null)}return function(o){return function(i){if((i.type==="FLUSH"||i.type==="DROP_COMPLETE"||i.type==="DROP_ANIMATION_FINISHED")&&n(),o(i),i.type==="DROP_ANIMATE"){var a={eventName:"scroll",options:{capture:!0,passive:!1,once:!0},fn:function(){var c=e.getState();c.phase==="DROP_ANIMATING"&&e.dispatch(G5())}};r=requestAnimationFrame(function(){r=null,t=Pr(window,[a])})}}}},zU=function(e){return function(){return function(t){return function(r){(r.type==="DROP_COMPLETE"||r.type==="FLUSH"||r.type==="DROP_ANIMATE")&&e.stopPublishing(),t(r)}}}},HU=function(e){var t=!1;return function(){return function(r){return function(n){if(n.type==="INITIAL_PUBLISH"){t=!0,e.tryRecordFocus(n.payload.critical.draggable.id),r(n),e.tryRestoreFocusRecorded();return}if(r(n),!!t){if(n.type==="FLUSH"){t=!1,e.tryRestoreFocusRecorded();return}if(n.type==="DROP_COMPLETE"){t=!1;var o=n.payload.completed.result;o.combine&&e.tryShiftRecord(o.draggableId,o.combine.draggableId),e.tryRestoreFocusRecorded()}}}}}},UU=function(t){return t.type==="DROP_COMPLETE"||t.type==="DROP_ANIMATE"||t.type==="FLUSH"},VU=function(e){return function(t){return function(r){return function(n){if(UU(n)){e.stop(),r(n);return}if(n.type==="INITIAL_PUBLISH"){r(n);var o=t.getState();o.phase!=="DRAGGING"&&fe(),e.start(o);return}r(n),e.scroll(t.getState())}}}},WU=function(e){return function(t){return function(r){if(t(r),r.type==="PUBLISH_WHILE_DRAGGING"){var n=e.getState();n.phase==="DROP_PENDING"&&(n.isWaiting||e.dispatch(q5({reason:n.reason})))}}}},qU=i5,GU=function(e){var t=e.dimensionMarshal,r=e.focusMarshal,n=e.styleMarshal,o=e.getResponders,i=e.announce,a=e.autoScroller;return o5(nU,qU(JB(SU(n),zU(t),bU(t),IU,FU,BU,WU,VU(a),kU,HU(r),_U(o,i))))},cf=function(){return{additions:{},removals:{},modified:{}}};function KU(e){var t=e.registry,r=e.callbacks,n=cf(),o=null,i=function(){o||(r.collectionStarting(),o=requestAnimationFrame(function(){o=null;var f=n,d=f.additions,g=f.removals,p=f.modified,m=Object.keys(d).map(function(v){return t.draggable.getById(v).getDimension(wt)}).sort(function(v,x){return v.descriptor.index-x.descriptor.index}),h=Object.keys(p).map(function(v){var x=t.droppable.getById(v),S=x.callbacks.getScrollWhileDragging();return{droppableId:v,scroll:S}}),y={additions:m,removals:Object.keys(g),modified:h};n=cf(),r.publish(y)}))},a=function(f){var d=f.descriptor.id;n.additions[d]=f,n.modified[f.descriptor.droppableId]=!0,n.removals[d]&&delete n.removals[d],i()},s=function(f){var d=f.descriptor;n.removals[d.id]=!0,n.modified[d.droppableId]=!0,n.additions[d.id]&&delete n.additions[d.id],i()},c=function(){o&&(cancelAnimationFrame(o),o=null,n=cf())};return{add:a,remove:s,stop:c}}var Q5=function(e){var t=e.scrollHeight,r=e.scrollWidth,n=e.height,o=e.width,i=dr({x:r,y:t},{x:o,y:n}),a={x:Math.max(0,i.x),y:Math.max(0,i.y)};return a},Y5=function(){var e=document.documentElement;return e||fe(),e},Z5=function(){var e=Y5(),t=Q5({scrollHeight:e.scrollHeight,scrollWidth:e.scrollWidth,width:e.clientWidth,height:e.clientHeight});return t},JU=function(){var e=J5(),t=Z5(),r=e.y,n=e.x,o=Y5(),i=o.clientWidth,a=o.clientHeight,s=n+i,c=r+a,u=qr({top:r,left:n,right:s,bottom:c}),f={frame:u,scroll:{initial:e,current:e,max:t,diff:{value:wt,displacement:wt}}};return f},QU=function(e){var t=e.critical,r=e.scrollOptions,n=e.registry,o=JU(),i=o.scroll.current,a=t.droppable,s=n.droppable.getAllByType(a.type).map(function(d){return d.callbacks.getDimensionAndWatchScroll(i,r)}),c=n.draggable.getAllByType(t.draggable.type).map(function(d){return d.getDimension(i)}),u={draggables:I5(c),droppables:O5(s)},f={dimensions:u,critical:t,viewport:o};return f};function dx(e,t,r){if(r.descriptor.id===t.id||r.descriptor.type!==t.type)return!1;var n=e.droppable.getById(r.descriptor.droppableId);return n.descriptor.mode==="virtual"}var YU=function(e,t){var r=null,n=KU({callbacks:{publish:t.publishWhileDragging,collectionStarting:t.collectionStarting},registry:e}),o=function(p,m){e.droppable.exists(p)||fe(),r&&t.updateDroppableIsEnabled({id:p,isEnabled:m})},i=function(p,m){r&&(e.droppable.exists(p)||fe(),t.updateDroppableIsCombineEnabled({id:p,isCombineEnabled:m}))},a=function(p,m){r&&(e.droppable.exists(p)||fe(),t.updateDroppableScroll({id:p,newScroll:m}))},s=function(p,m){r&&e.droppable.getById(p).callbacks.scroll(m)},c=function(){if(r){n.stop();var p=r.critical.droppable;e.droppable.getAllByType(p.type).forEach(function(m){return m.callbacks.dragStopped()}),r.unsubscribe(),r=null}},u=function(p){r||fe();var m=r.critical.draggable;p.type==="ADDITION"&&dx(e,m,p.value)&&n.add(p.value),p.type==="REMOVAL"&&dx(e,m,p.value)&&n.remove(p.value)},f=function(p){r&&fe();var m=e.draggable.getById(p.draggableId),h=e.droppable.getById(m.descriptor.droppableId),y={draggable:m.descriptor,droppable:h.descriptor},v=e.subscribe(u);return r={critical:y,unsubscribe:v},QU({critical:y,registry:e,scrollOptions:p.scrollOptions})},d={updateDroppableIsEnabled:o,updateDroppableIsCombineEnabled:i,scrollDroppable:s,updateDroppableScroll:a,startPublishing:f,stopPublishing:c};return d},X5=function(e,t){return e.phase==="IDLE"?!0:e.phase!=="DROP_ANIMATING"||e.completed.result.draggableId===t?!1:e.completed.result.reason==="DROP"},ZU=function(e){window.scrollBy(e.x,e.y)},XU=Ct(function(e){return Xu(e).filter(function(t){return!(!t.isEnabled||!t.frame)})}),eV=function(t,r){var n=xo(XU(r),function(o){return o.frame||fe(),L5(o.frame.pageMarginBox)(t)});return n},tV=function(e){var t=e.center,r=e.destination,n=e.droppables;if(r){var o=n[r];return o.frame?o:null}var i=eV(t,n);return i},oo={startFromPercentage:.25,maxScrollAtPercentage:.05,maxPixelScroll:28,ease:function(t){return Math.pow(t,2)},durationDampening:{stopDampeningAt:1200,accelerateAt:360}},rV=function(e,t){var r=e[t.size]*oo.startFromPercentage,n=e[t.size]*oo.maxScrollAtPercentage,o={startScrollingFrom:r,maxScrollValueAt:n};return o},e3=function(e){var t=e.startOfRange,r=e.endOfRange,n=e.current,o=r-t;if(o===0)return 0;var i=n-t,a=i/o;return a},ih=1,nV=function(e,t){if(e>t.startScrollingFrom)return 0;if(e<=t.maxScrollValueAt)return oo.maxPixelScroll;if(e===t.startScrollingFrom)return ih;var r=e3({startOfRange:t.maxScrollValueAt,endOfRange:t.startScrollingFrom,current:e}),n=1-r,o=oo.maxPixelScroll*oo.ease(n);return Math.ceil(o)},fx=oo.durationDampening.accelerateAt,gx=oo.durationDampening.stopDampeningAt,oV=function(e,t){var r=t,n=gx,o=Date.now(),i=o-r;if(i>=gx)return e;if(i<fx)return ih;var a=e3({startOfRange:fx,endOfRange:n,current:i}),s=e*oo.ease(a);return Math.ceil(s)},px=function(e){var t=e.distanceToEdge,r=e.thresholds,n=e.dragStartTime,o=e.shouldUseTimeDampening,i=nV(t,r);return i===0?0:o?Math.max(oV(i,n),ih):i},mx=function(e){var t=e.container,r=e.distanceToEdges,n=e.dragStartTime,o=e.axis,i=e.shouldUseTimeDampening,a=rV(t,o),s=r[o.end]<r[o.start];return s?px({distanceToEdge:r[o.end],thresholds:a,dragStartTime:n,shouldUseTimeDampening:i}):-1*px({distanceToEdge:r[o.start],thresholds:a,dragStartTime:n,shouldUseTimeDampening:i})},iV=function(e){var t=e.container,r=e.subject,n=e.proposedScroll,o=r.height>t.height,i=r.width>t.width;return!i&&!o?n:i&&o?null:{x:i?0:n.x,y:o?0:n.y}},aV=j5(function(e){return e===0?0:e}),t3=function(e){var t=e.dragStartTime,r=e.container,n=e.subject,o=e.center,i=e.shouldUseTimeDampening,a={top:o.y-r.top,right:r.right-o.x,bottom:r.bottom-o.y,left:o.x-r.left},s=mx({container:r,distanceToEdges:a,dragStartTime:t,axis:Qm,shouldUseTimeDampening:i}),c=mx({container:r,distanceToEdges:a,dragStartTime:t,axis:$5,shouldUseTimeDampening:i}),u=aV({x:c,y:s});if(no(u,wt))return null;var f=iV({container:r,subject:n,proposedScroll:u});return f?no(f,wt)?null:f:null},sV=j5(function(e){return e===0?0:e>0?1:-1}),ah=function(){var e=function(r,n){return r<0?r:r>n?r-n:0};return function(t){var r=t.current,n=t.max,o=t.change,i=Et(r,o),a={x:e(i.x,n.x),y:e(i.y,n.y)};return no(a,wt)?null:a}}(),r3=function(t){var r=t.max,n=t.current,o=t.change,i={x:Math.max(n.x,r.x),y:Math.max(n.y,r.y)},a=sV(o),s=ah({max:i,current:n,change:a});return!s||a.x!==0&&s.x===0||a.y!==0&&s.y===0},sh=function(t,r){return r3({current:t.scroll.current,max:t.scroll.max,change:r})},lV=function(t,r){if(!sh(t,r))return null;var n=t.scroll.max,o=t.scroll.current;return ah({current:o,max:n,change:r})},lh=function(t,r){var n=t.frame;return n?r3({current:n.scroll.current,max:n.scroll.max,change:r}):!1},cV=function(t,r){var n=t.frame;return!n||!lh(t,r)?null:ah({current:n.scroll.current,max:n.scroll.max,change:r})},uV=function(e){var t=e.viewport,r=e.subject,n=e.center,o=e.dragStartTime,i=e.shouldUseTimeDampening,a=t3({dragStartTime:o,container:t.frame,subject:r,center:n,shouldUseTimeDampening:i});return a&&sh(t,a)?a:null},dV=function(e){var t=e.droppable,r=e.subject,n=e.center,o=e.dragStartTime,i=e.shouldUseTimeDampening,a=t.frame;if(!a)return null;var s=t3({dragStartTime:o,container:a.pageMarginBox,subject:r,center:n,shouldUseTimeDampening:i});return s&&lh(t,s)?s:null},hx=function(e){var t=e.state,r=e.dragStartTime,n=e.shouldUseTimeDampening,o=e.scrollWindow,i=e.scrollDroppable,a=t.current.page.borderBoxCenter,s=t.dimensions.draggables[t.critical.draggable.id],c=s.page.marginBox;if(t.isWindowScrollAllowed){var u=t.viewport,f=uV({dragStartTime:r,viewport:u,subject:c,center:a,shouldUseTimeDampening:n});if(f){o(f);return}}var d=tV({center:a,destination:mr(t.impact),droppables:t.dimensions.droppables});if(d){var g=dV({dragStartTime:r,droppable:d,subject:c,center:a,shouldUseTimeDampening:n});g&&i(d.descriptor.id,g)}},fV=function(e){var t=e.scrollWindow,r=e.scrollDroppable,n=Ss(t),o=Ss(r),i=null,a=function(f){i||fe();var d=i,g=d.shouldUseTimeDampening,p=d.dragStartTime;hx({state:f,scrollWindow:n,scrollDroppable:o,dragStartTime:p,shouldUseTimeDampening:g})},s=function(f){i&&fe();var d=Date.now(),g=!1,p=function(){g=!0};hx({state:f,dragStartTime:0,shouldUseTimeDampening:!1,scrollWindow:p,scrollDroppable:p}),i={dragStartTime:d,shouldUseTimeDampening:g},g&&a(f)},c=function(){i&&(n.cancel(),o.cancel(),i=null)};return{start:s,stop:c,scroll:a}},gV=function(e){var t=e.move,r=e.scrollDroppable,n=e.scrollWindow,o=function(u,f){var d=Et(u.current.client.selection,f);t({client:d})},i=function(u,f){if(!lh(u,f))return f;var d=cV(u,f);if(!d)return r(u.descriptor.id,f),null;var g=dr(f,d);r(u.descriptor.id,g);var p=dr(f,g);return p},a=function(u,f,d){if(!u||!sh(f,d))return d;var g=lV(f,d);if(!g)return n(d),null;var p=dr(d,g);n(p);var m=dr(d,p);return m},s=function(u){var f=u.scrollJumpRequest;if(f){var d=mr(u.impact);d||fe();var g=i(u.dimensions.droppables[d],f);if(g){var p=u.viewport,m=a(u.isWindowScrollAllowed,p,g);m&&o(u,m)}}};return s},pV=function(e){var t=e.scrollDroppable,r=e.scrollWindow,n=e.move,o=fV({scrollWindow:r,scrollDroppable:t}),i=gV({move:n,scrollWindow:r,scrollDroppable:t}),a=function(u){if(u.phase==="DRAGGING"){if(u.movementMode==="FLUID"){o.scroll(u);return}u.scrollJumpRequest&&i(u)}},s={scroll:a,start:o.start,stop:o.stop};return s},zi="data-rbd",Hi=function(){var e=zi+"-drag-handle";return{base:e,draggableId:e+"-draggable-id",contextId:e+"-context-id"}}(),Dg=function(){var e=zi+"-draggable";return{base:e,contextId:e+"-context-id",id:e+"-id"}}(),mV=function(){var e=zi+"-droppable";return{base:e,contextId:e+"-context-id",id:e+"-id"}}(),vx={contextId:zi+"-scroll-container-context-id"},hV=function(t){return function(r){return"["+r+'="'+t+'"]'}},Oa=function(t,r){return t.map(function(n){var o=n.styles[r];return o?n.selector+" { "+o+" }":""}).join(" ")},vV="pointer-events: none;",xV=function(e){var t=hV(e),r=function(){var s=`
      cursor: -webkit-grab;
      cursor: grab;
    `;return{selector:t(Hi.contextId),styles:{always:`
          -webkit-touch-callout: none;
          -webkit-tap-highlight-color: rgba(0,0,0,0);
          touch-action: manipulation;
        `,resting:s,dragging:vV,dropAnimating:s}}}(),n=function(){var s=`
      transition: `+Xa.outOfTheWay+`;
    `;return{selector:t(Dg.contextId),styles:{dragging:s,dropAnimating:s,userCancel:s}}}(),o={selector:t(mV.contextId),styles:{always:"overflow-anchor: none;"}},i={selector:"body",styles:{dragging:`
        cursor: grabbing;
        cursor: -webkit-grabbing;
        user-select: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        overflow-anchor: none;
      `}},a=[n,r,o,i];return{always:Oa(a,"always"),resting:Oa(a,"resting"),dragging:Oa(a,"dragging"),dropAnimating:Oa(a,"dropAnimating"),userCancel:Oa(a,"userCancel")}},hr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?O.useLayoutEffect:O.useEffect,uf=function(){var t=document.querySelector("head");return t||fe(),t},xx=function(t){var r=document.createElement("style");return t&&r.setAttribute("nonce",t),r.type="text/css",r};function yV(e,t){var r=Le(function(){return xV(e)},[e]),n=O.useRef(null),o=O.useRef(null),i=we(Ct(function(d){var g=o.current;g||fe(),g.textContent=d}),[]),a=we(function(d){var g=n.current;g||fe(),g.textContent=d},[]);hr(function(){!n.current&&!o.current||fe();var d=xx(t),g=xx(t);return n.current=d,o.current=g,d.setAttribute(zi+"-always",e),g.setAttribute(zi+"-dynamic",e),uf().appendChild(d),uf().appendChild(g),a(r.always),i(r.resting),function(){var p=function(h){var y=h.current;y||fe(),uf().removeChild(y),h.current=null};p(n),p(o)}},[t,a,i,r.always,r.resting,e]);var s=we(function(){return i(r.dragging)},[i,r.dragging]),c=we(function(d){if(d==="DROP"){i(r.dropAnimating);return}i(r.userCancel)},[i,r.dropAnimating,r.userCancel]),u=we(function(){o.current&&i(r.resting)},[i,r.resting]),f=Le(function(){return{dragging:s,dropping:c,resting:u}},[s,c,u]);return f}var n3=function(e){return e&&e.ownerDocument?e.ownerDocument.defaultView:window};function nd(e){return e instanceof n3(e).HTMLElement}function bV(e,t){var r="["+Hi.contextId+'="'+e+'"]',n=T5(document.querySelectorAll(r));if(!n.length)return null;var o=xo(n,function(i){return i.getAttribute(Hi.draggableId)===t});return!o||!nd(o)?null:o}function SV(e){var t=O.useRef({}),r=O.useRef(null),n=O.useRef(null),o=O.useRef(!1),i=we(function(g,p){var m={id:g,focus:p};return t.current[g]=m,function(){var y=t.current,v=y[g];v!==m&&delete y[g]}},[]),a=we(function(g){var p=bV(e,g);p&&p!==document.activeElement&&p.focus()},[e]),s=we(function(g,p){r.current===g&&(r.current=p)},[]),c=we(function(){n.current||o.current&&(n.current=requestAnimationFrame(function(){n.current=null;var g=r.current;g&&a(g)}))},[a]),u=we(function(g){r.current=null;var p=document.activeElement;p&&p.getAttribute(Hi.draggableId)===g&&(r.current=g)},[]);hr(function(){return o.current=!0,function(){o.current=!1;var g=n.current;g&&cancelAnimationFrame(g)}},[]);var f=Le(function(){return{register:i,tryRecordFocus:u,tryRestoreFocusRecorded:c,tryShiftRecord:s}},[i,u,c,s]);return f}function CV(){var e={draggables:{},droppables:{}},t=[];function r(d){return t.push(d),function(){var p=t.indexOf(d);p!==-1&&t.splice(p,1)}}function n(d){t.length&&t.forEach(function(g){return g(d)})}function o(d){return e.draggables[d]||null}function i(d){var g=o(d);return g||fe(),g}var a={register:function(g){e.draggables[g.descriptor.id]=g,n({type:"ADDITION",value:g})},update:function(g,p){var m=e.draggables[p.descriptor.id];m&&m.uniqueId===g.uniqueId&&(delete e.draggables[p.descriptor.id],e.draggables[g.descriptor.id]=g)},unregister:function(g){var p=g.descriptor.id,m=o(p);m&&g.uniqueId===m.uniqueId&&(delete e.draggables[p],n({type:"REMOVAL",value:g}))},getById:i,findById:o,exists:function(g){return!!o(g)},getAllByType:function(g){return Gc(e.draggables).filter(function(p){return p.descriptor.type===g})}};function s(d){return e.droppables[d]||null}function c(d){var g=s(d);return g||fe(),g}var u={register:function(g){e.droppables[g.descriptor.id]=g},unregister:function(g){var p=s(g.descriptor.id);p&&g.uniqueId===p.uniqueId&&delete e.droppables[g.descriptor.id]},getById:c,findById:s,exists:function(g){return!!s(g)},getAllByType:function(g){return Gc(e.droppables).filter(function(p){return p.descriptor.type===g})}};function f(){e.draggables={},e.droppables={},t.length=0}return{draggable:a,droppable:u,subscribe:r,clean:f}}function wV(){var e=Le(CV,[]);return O.useEffect(function(){return function(){requestAnimationFrame(e.clean)}},[e]),e}var ch=le.createContext(null),Jc=function(){var e=document.body;return e||fe(),e},jV={position:"absolute",width:"1px",height:"1px",margin:"-1px",border:"0",padding:"0",overflow:"hidden",clip:"rect(0 0 0 0)","clip-path":"inset(100%)"},TV=function(t){return"rbd-announcement-"+t};function OV(e){var t=Le(function(){return TV(e)},[e]),r=O.useRef(null);O.useEffect(function(){var i=document.createElement("div");return r.current=i,i.id=t,i.setAttribute("aria-live","assertive"),i.setAttribute("aria-atomic","true"),xe(i.style,jV),Jc().appendChild(i),function(){setTimeout(function(){var c=Jc();c.contains(i)&&c.removeChild(i),i===r.current&&(r.current=null)})}},[t]);var n=we(function(o){var i=r.current;if(i){i.textContent=o;return}},[]);return n}var IV=0,EV={separator:"::"};function uh(e,t){return t===void 0&&(t=EV),Le(function(){return""+e+t.separator+IV++},[t.separator,e])}function PV(e){var t=e.contextId,r=e.uniqueId;return"rbd-hidden-text-"+t+"-"+r}function $V(e){var t=e.contextId,r=e.text,n=uh("hidden-text",{separator:"-"}),o=Le(function(){return PV({contextId:t,uniqueId:n})},[n,t]);return O.useEffect(function(){var a=document.createElement("div");return a.id=o,a.textContent=r,a.style.display="none",Jc().appendChild(a),function(){var c=Jc();c.contains(a)&&c.removeChild(a)}},[o,r]),o}var od=le.createContext(null);function o3(e){var t=O.useRef(e);return O.useEffect(function(){t.current=e}),t}function kV(){var e=null;function t(){return!!e}function r(a){return a===e}function n(a){e&&fe();var s={abandon:a};return e=s,s}function o(){e||fe(),e=null}function i(){e&&(e.abandon(),o())}return{isClaimed:t,isActive:r,claim:n,release:o,tryAbandon:i}}var NV=9,MV=13,dh=27,i3=32,AV=33,DV=34,RV=35,LV=36,_V=37,FV=38,BV=39,zV=40,Pl,HV=(Pl={},Pl[MV]=!0,Pl[NV]=!0,Pl),a3=function(e){HV[e.keyCode]&&e.preventDefault()},id=function(){var e="visibilitychange";if(typeof document>"u")return e;var t=[e,"ms"+e,"webkit"+e,"moz"+e,"o"+e],r=xo(t,function(n){return"on"+n in document});return r||e}(),s3=0,yx=5;function UV(e,t){return Math.abs(t.x-e.x)>=yx||Math.abs(t.y-e.y)>=yx}var bx={type:"IDLE"};function VV(e){var t=e.cancel,r=e.completed,n=e.getPhase,o=e.setPhase;return[{eventName:"mousemove",fn:function(a){var s=a.button,c=a.clientX,u=a.clientY;if(s===s3){var f={x:c,y:u},d=n();if(d.type==="DRAGGING"){a.preventDefault(),d.actions.move(f);return}d.type!=="PENDING"&&fe();var g=d.point;if(UV(g,f)){a.preventDefault();var p=d.actions.fluidLift(f);o({type:"DRAGGING",actions:p})}}}},{eventName:"mouseup",fn:function(a){var s=n();if(s.type!=="DRAGGING"){t();return}a.preventDefault(),s.actions.drop({shouldBlockNextClick:!0}),r()}},{eventName:"mousedown",fn:function(a){n().type==="DRAGGING"&&a.preventDefault(),t()}},{eventName:"keydown",fn:function(a){var s=n();if(s.type==="PENDING"){t();return}if(a.keyCode===dh){a.preventDefault(),t();return}a3(a)}},{eventName:"resize",fn:t},{eventName:"scroll",options:{passive:!0,capture:!1},fn:function(){n().type==="PENDING"&&t()}},{eventName:"webkitmouseforcedown",fn:function(a){var s=n();if(s.type==="IDLE"&&fe(),s.actions.shouldRespectForcePress()){t();return}a.preventDefault()}},{eventName:id,fn:t}]}function WV(e){var t=O.useRef(bx),r=O.useRef(ro),n=Le(function(){return{eventName:"mousedown",fn:function(d){if(!d.defaultPrevented&&d.button===s3&&!(d.ctrlKey||d.metaKey||d.shiftKey||d.altKey)){var g=e.findClosestDraggableId(d);if(g){var p=e.tryGetLock(g,a,{sourceEvent:d});if(p){d.preventDefault();var m={x:d.clientX,y:d.clientY};r.current(),u(p,m)}}}}}},[e]),o=Le(function(){return{eventName:"webkitmouseforcewillbegin",fn:function(d){if(!d.defaultPrevented){var g=e.findClosestDraggableId(d);if(g){var p=e.findOptionsForDraggable(g);p&&(p.shouldRespectForcePress||e.canGetLock(g)&&d.preventDefault())}}}}},[e]),i=we(function(){var d={passive:!1,capture:!0};r.current=Pr(window,[o,n],d)},[o,n]),a=we(function(){var f=t.current;f.type!=="IDLE"&&(t.current=bx,r.current(),i())},[i]),s=we(function(){var f=t.current;a(),f.type==="DRAGGING"&&f.actions.cancel({shouldBlockNextClick:!0}),f.type==="PENDING"&&f.actions.abort()},[a]),c=we(function(){var d={capture:!0,passive:!1},g=VV({cancel:s,completed:a,getPhase:function(){return t.current},setPhase:function(m){t.current=m}});r.current=Pr(window,g,d)},[s,a]),u=we(function(d,g){t.current.type!=="IDLE"&&fe(),t.current={type:"PENDING",point:g,actions:d},c()},[c]);hr(function(){return i(),function(){r.current()}},[i])}var ni;function qV(){}var GV=(ni={},ni[DV]=!0,ni[AV]=!0,ni[LV]=!0,ni[RV]=!0,ni);function KV(e,t){function r(){t(),e.cancel()}function n(){t(),e.drop()}return[{eventName:"keydown",fn:function(i){if(i.keyCode===dh){i.preventDefault(),r();return}if(i.keyCode===i3){i.preventDefault(),n();return}if(i.keyCode===zV){i.preventDefault(),e.moveDown();return}if(i.keyCode===FV){i.preventDefault(),e.moveUp();return}if(i.keyCode===BV){i.preventDefault(),e.moveRight();return}if(i.keyCode===_V){i.preventDefault(),e.moveLeft();return}if(GV[i.keyCode]){i.preventDefault();return}a3(i)}},{eventName:"mousedown",fn:r},{eventName:"mouseup",fn:r},{eventName:"click",fn:r},{eventName:"touchstart",fn:r},{eventName:"resize",fn:r},{eventName:"wheel",fn:r,options:{passive:!0}},{eventName:id,fn:r}]}function JV(e){var t=O.useRef(qV),r=Le(function(){return{eventName:"keydown",fn:function(i){if(i.defaultPrevented||i.keyCode!==i3)return;var a=e.findClosestDraggableId(i);if(!a)return;var s=e.tryGetLock(a,f,{sourceEvent:i});if(!s)return;i.preventDefault();var c=!0,u=s.snapLift();t.current();function f(){c||fe(),c=!1,t.current(),n()}t.current=Pr(window,KV(u,f),{capture:!0,passive:!1})}}},[e]),n=we(function(){var i={passive:!1,capture:!0};t.current=Pr(window,[r],i)},[r]);hr(function(){return n(),function(){t.current()}},[n])}var df={type:"IDLE"},QV=120,YV=.15;function ZV(e){var t=e.cancel,r=e.getPhase;return[{eventName:"orientationchange",fn:t},{eventName:"resize",fn:t},{eventName:"contextmenu",fn:function(o){o.preventDefault()}},{eventName:"keydown",fn:function(o){if(r().type!=="DRAGGING"){t();return}o.keyCode===dh&&o.preventDefault(),t()}},{eventName:id,fn:t}]}function XV(e){var t=e.cancel,r=e.completed,n=e.getPhase;return[{eventName:"touchmove",options:{capture:!1},fn:function(i){var a=n();if(a.type!=="DRAGGING"){t();return}a.hasMoved=!0;var s=i.touches[0],c=s.clientX,u=s.clientY,f={x:c,y:u};i.preventDefault(),a.actions.move(f)}},{eventName:"touchend",fn:function(i){var a=n();if(a.type!=="DRAGGING"){t();return}i.preventDefault(),a.actions.drop({shouldBlockNextClick:!0}),r()}},{eventName:"touchcancel",fn:function(i){if(n().type!=="DRAGGING"){t();return}i.preventDefault(),t()}},{eventName:"touchforcechange",fn:function(i){var a=n();a.type==="IDLE"&&fe();var s=i.touches[0];if(s){var c=s.force>=YV;if(c){var u=a.actions.shouldRespectForcePress();if(a.type==="PENDING"){u&&t();return}if(u){if(a.hasMoved){i.preventDefault();return}t();return}i.preventDefault()}}}},{eventName:id,fn:t}]}function eW(e){var t=O.useRef(df),r=O.useRef(ro),n=we(function(){return t.current},[]),o=we(function(p){t.current=p},[]),i=Le(function(){return{eventName:"touchstart",fn:function(p){if(!p.defaultPrevented){var m=e.findClosestDraggableId(p);if(m){var h=e.tryGetLock(m,s,{sourceEvent:p});if(h){var y=p.touches[0],v=y.clientX,x=y.clientY,S={x:v,y:x};r.current(),d(h,S)}}}}}},[e]),a=we(function(){var p={capture:!0,passive:!1};r.current=Pr(window,[i],p)},[i]),s=we(function(){var g=t.current;g.type!=="IDLE"&&(g.type==="PENDING"&&clearTimeout(g.longPressTimerId),o(df),r.current(),a())},[a,o]),c=we(function(){var g=t.current;s(),g.type==="DRAGGING"&&g.actions.cancel({shouldBlockNextClick:!0}),g.type==="PENDING"&&g.actions.abort()},[s]),u=we(function(){var p={capture:!0,passive:!1},m={cancel:c,completed:s,getPhase:n},h=Pr(window,XV(m),p),y=Pr(window,ZV(m),p);r.current=function(){h(),y()}},[c,n,s]),f=we(function(){var p=n();p.type!=="PENDING"&&fe();var m=p.actions.fluidLift(p.point);o({type:"DRAGGING",actions:m,hasMoved:!1})},[n,o]),d=we(function(p,m){n().type!=="IDLE"&&fe();var h=setTimeout(f,QV);o({type:"PENDING",point:m,actions:p,longPressTimerId:h}),u()},[u,n,o,f]);hr(function(){return a(),function(){r.current();var m=n();m.type==="PENDING"&&(clearTimeout(m.longPressTimerId),o(df))}},[n,a,o]),hr(function(){var p=Pr(window,[{eventName:"touchmove",fn:function(){},options:{capture:!1,passive:!1}}]);return p},[])}var tW={input:!0,button:!0,textarea:!0,select:!0,option:!0,optgroup:!0,video:!0,audio:!0};function l3(e,t){if(t==null)return!1;var r=!!tW[t.tagName.toLowerCase()];if(r)return!0;var n=t.getAttribute("contenteditable");return n==="true"||n===""?!0:t===e?!1:l3(e,t.parentElement)}function rW(e,t){var r=t.target;return nd(r)?l3(e,r):!1}var nW=function(e){return qr(e.getBoundingClientRect()).center};function oW(e){return e instanceof n3(e).Element}var iW=function(){var e="matches";if(typeof document>"u")return e;var t=[e,"msMatchesSelector","webkitMatchesSelector"],r=xo(t,function(n){return n in Element.prototype});return r||e}();function c3(e,t){return e==null?null:e[iW](t)?e:c3(e.parentElement,t)}function aW(e,t){return e.closest?e.closest(t):c3(e,t)}function sW(e){return"["+Hi.contextId+'="'+e+'"]'}function lW(e,t){var r=t.target;if(!oW(r))return null;var n=sW(e),o=aW(r,n);return!o||!nd(o)?null:o}function cW(e,t){var r=lW(e,t);return r?r.getAttribute(Hi.draggableId):null}function uW(e,t){var r="["+Dg.contextId+'="'+e+'"]',n=T5(document.querySelectorAll(r)),o=xo(n,function(i){return i.getAttribute(Dg.id)===t});return!o||!nd(o)?null:o}function dW(e){e.preventDefault()}function $l(e){var t=e.expected,r=e.phase,n=e.isLockActive;return e.shouldWarn,!(!n()||t!==r)}function u3(e){var t=e.lockAPI,r=e.store,n=e.registry,o=e.draggableId;if(t.isClaimed())return!1;var i=n.draggable.findById(o);return!(!i||!i.options.isEnabled||!X5(r.getState(),o))}function fW(e){var t=e.lockAPI,r=e.contextId,n=e.store,o=e.registry,i=e.draggableId,a=e.forceSensorStop,s=e.sourceEvent,c=u3({lockAPI:t,store:n,registry:o,draggableId:i});if(!c)return null;var u=o.draggable.getById(i),f=uW(r,u.descriptor.id);if(!f||s&&!u.options.canDragInteractiveElements&&rW(f,s))return null;var d=t.claim(a||ro),g="PRE_DRAG";function p(){return u.options.shouldRespectForcePress}function m(){return t.isActive(d)}function h(T,P){$l({expected:T,phase:g,isLockActive:m,shouldWarn:!0})&&n.dispatch(P())}var y=h.bind(null,"DRAGGING");function v(T){function P(){t.release(),g="COMPLETED"}g!=="PRE_DRAG"&&(P(),g!=="PRE_DRAG"&&fe()),n.dispatch(iU(T.liftActionArgs)),g="DRAGGING";function N(j,F){if(F===void 0&&(F={shouldBlockNextClick:!1}),T.cleanup(),F.shouldBlockNextClick){var V=Pr(window,[{eventName:"click",fn:dW,options:{once:!0,passive:!1,capture:!0}}]);setTimeout(V)}P(),n.dispatch(q5({reason:j}))}return xe({isActive:function(){return $l({expected:"DRAGGING",phase:g,isLockActive:m,shouldWarn:!1})},shouldRespectForcePress:p,drop:function(F){return N("DROP",F)},cancel:function(F){return N("CANCEL",F)}},T.actions)}function x(T){var P=Ss(function(j){y(function(){return W5({client:j})})}),N=v({liftActionArgs:{id:i,clientSelection:T,movementMode:"FLUID"},cleanup:function(){return P.cancel()},actions:{move:P}});return xe({},N,{move:P})}function S(){var T={moveUp:function(){return y(pU)},moveRight:function(){return y(hU)},moveDown:function(){return y(mU)},moveLeft:function(){return y(vU)}};return v({liftActionArgs:{id:i,clientSelection:nW(f),movementMode:"SNAP"},cleanup:ro,actions:T})}function I(){var T=$l({expected:"PRE_DRAG",phase:g,isLockActive:m,shouldWarn:!0});T&&t.release()}var k={isActive:function(){return $l({expected:"PRE_DRAG",phase:g,isLockActive:m,shouldWarn:!1})},shouldRespectForcePress:p,fluidLift:x,snapLift:S,abort:I};return k}var gW=[WV,JV,eW];function pW(e){var t=e.contextId,r=e.store,n=e.registry,o=e.customSensors,i=e.enableDefaultSensors,a=[].concat(i?gW:[],o||[]),s=O.useState(function(){return kV()})[0],c=we(function(x,S){x.isDragging&&!S.isDragging&&s.tryAbandon()},[s]);hr(function(){var x=r.getState(),S=r.subscribe(function(){var I=r.getState();c(x,I),x=I});return S},[s,r,c]),hr(function(){return s.tryAbandon},[s.tryAbandon]);for(var u=we(function(v){return u3({lockAPI:s,registry:n,store:r,draggableId:v})},[s,n,r]),f=we(function(v,x,S){return fW({lockAPI:s,registry:n,contextId:t,store:r,draggableId:v,forceSensorStop:x,sourceEvent:S&&S.sourceEvent?S.sourceEvent:null})},[t,s,n,r]),d=we(function(v){return cW(t,v)},[t]),g=we(function(v){var x=n.draggable.findById(v);return x?x.options:null},[n.draggable]),p=we(function(){s.isClaimed()&&(s.tryAbandon(),r.getState().phase!=="IDLE"&&r.dispatch(th()))},[s,r]),m=we(s.isClaimed,[s]),h=Le(function(){return{canGetLock:u,tryGetLock:f,findClosestDraggableId:d,findOptionsForDraggable:g,tryReleaseLock:p,isLockClaimed:m}},[u,f,d,g,p,m]),y=0;y<a.length;y++)a[y](h)}var mW=function(t){return{onBeforeCapture:t.onBeforeCapture,onBeforeDragStart:t.onBeforeDragStart,onDragStart:t.onDragStart,onDragEnd:t.onDragEnd,onDragUpdate:t.onDragUpdate}};function Ia(e){return e.current||fe(),e.current}function hW(e){var t=e.contextId,r=e.setCallbacks,n=e.sensors,o=e.nonce,i=e.dragHandleUsageInstructions,a=O.useRef(null),s=o3(e),c=we(function(){return mW(s.current)},[s]),u=OV(t),f=$V({contextId:t,text:i}),d=yV(t,o),g=we(function(j){Ia(a).dispatch(j)},[]),p=Le(function(){return G1({publishWhileDragging:sU,updateDroppableScroll:cU,updateDroppableIsEnabled:uU,updateDroppableIsCombineEnabled:dU,collectionStarting:lU},g)},[g]),m=wV(),h=Le(function(){return YU(m,p)},[m,p]),y=Le(function(){return pV(xe({scrollWindow:ZU,scrollDroppable:h.scrollDroppable},G1({move:W5},g)))},[h.scrollDroppable,g]),v=SV(t),x=Le(function(){return GU({announce:u,autoScroller:y,dimensionMarshal:h,focusMarshal:v,getResponders:c,styleMarshal:d})},[u,y,h,v,c,d]);a.current=x;var S=we(function(){var j=Ia(a),F=j.getState();F.phase!=="IDLE"&&j.dispatch(th())},[]),I=we(function(){var j=Ia(a).getState();return j.isDragging||j.phase==="DROP_ANIMATING"},[]),k=Le(function(){return{isDragging:I,tryAbort:S}},[I,S]);r(k);var T=we(function(j){return X5(Ia(a).getState(),j)},[]),P=we(function(){return jo(Ia(a).getState())},[]),N=Le(function(){return{marshal:h,focus:v,contextId:t,canLift:T,isMovementAllowed:P,dragHandleUsageInstructionsId:f,registry:m}},[t,h,f,v,T,P,m]);return pW({contextId:t,store:x,registry:m,customSensors:n,enableDefaultSensors:e.enableDefaultSensors!==!1}),O.useEffect(function(){return S},[S]),le.createElement(od.Provider,{value:N},le.createElement(ez,{context:ch,store:x},e.children))}var vW=0;function xW(){return Le(function(){return""+vW++},[])}function ad(e){var t=xW(),r=e.dragHandleUsageInstructions||tc.dragHandleUsageInstructions;return le.createElement(Jz,null,function(n){return le.createElement(hW,{nonce:e.nonce,contextId:t,setCallbacks:n,dragHandleUsageInstructions:r,enableDefaultSensors:e.enableDefaultSensors,sensors:e.sensors,onBeforeCapture:e.onBeforeCapture,onBeforeDragStart:e.onBeforeDragStart,onDragStart:e.onDragStart,onDragUpdate:e.onDragUpdate,onDragEnd:e.onDragEnd},e.children)})}var d3=function(t){return function(r){return t===r}},yW=d3("scroll"),bW=d3("auto"),Sx=function(t,r){return r(t.overflowX)||r(t.overflowY)},SW=function(t){var r=window.getComputedStyle(t),n={overflowX:r.overflowX,overflowY:r.overflowY};return Sx(n,yW)||Sx(n,bW)},CW=function(){return!1},wW=function e(t){return t==null?null:t===document.body?CW()?t:null:t===document.documentElement?null:SW(t)?t:e(t.parentElement)},Rg=function(e){return{x:e.scrollLeft,y:e.scrollTop}},jW=function e(t){if(!t)return!1;var r=window.getComputedStyle(t);return r.position==="fixed"?!0:e(t.parentElement)},TW=function(e){var t=wW(e),r=jW(e);return{closestScrollable:t,isFixedOnPage:r}},OW=function(e){var t=e.descriptor,r=e.isEnabled,n=e.isCombineEnabled,o=e.isFixedOnPage,i=e.direction,a=e.client,s=e.page,c=e.closest,u=function(){if(!c)return null;var p=c.scrollSize,m=c.client,h=Q5({scrollHeight:p.scrollHeight,scrollWidth:p.scrollWidth,height:m.paddingBox.height,width:m.paddingBox.width});return{pageMarginBox:c.page.marginBox,frameClient:m,scrollSize:p,shouldClipSubject:c.shouldClipSubject,scroll:{initial:c.scroll,current:c.scroll,max:h,diff:{value:wt,displacement:wt}}}}(),f=i==="vertical"?Qm:$5,d=Bi({page:s,withPlaceholder:null,axis:f,frame:u}),g={descriptor:t,isCombineEnabled:n,isFixedOnPage:o,axis:f,isEnabled:r,client:a,page:s,frame:u,subject:d};return g},IW=function(t,r){var n=b5(t);if(!r||t!==r)return n;var o=n.paddingBox.top-r.scrollTop,i=n.paddingBox.left-r.scrollLeft,a=o+r.scrollHeight,s=i+r.scrollWidth,c={top:o,right:s,bottom:a,left:i},u=Wm(c,n.border),f=qm({borderBox:u,margin:n.margin,border:n.border,padding:n.padding});return f},EW=function(e){var t=e.ref,r=e.descriptor,n=e.env,o=e.windowScroll,i=e.direction,a=e.isDropDisabled,s=e.isCombineEnabled,c=e.shouldClipSubject,u=n.closestScrollable,f=IW(t,u),d=Vc(f,o),g=function(){if(!u)return null;var m=b5(u),h={scrollHeight:u.scrollHeight,scrollWidth:u.scrollWidth};return{client:m,page:Vc(m,o),scroll:Rg(u),scrollSize:h,shouldClipSubject:c}}(),p=OW({descriptor:r,isEnabled:!a,isCombineEnabled:s,isFixedOnPage:n.isFixedOnPage,direction:i,client:f,page:d,closest:g});return p},PW={passive:!1},$W={passive:!0},Cx=function(e){return e.shouldPublishImmediately?PW:$W};function Qc(e){var t=O.useContext(e);return t||fe(),t}var kl=function(t){return t&&t.env.closestScrollable||null};function kW(e){var t=O.useRef(null),r=Qc(od),n=uh("droppable"),o=r.registry,i=r.marshal,a=o3(e),s=Le(function(){return{id:e.droppableId,type:e.type,mode:e.mode}},[e.droppableId,e.mode,e.type]),c=O.useRef(s),u=Le(function(){return Ct(function(I,k){t.current||fe();var T={x:I,y:k};i.updateDroppableScroll(s.id,T)})},[s.id,i]),f=we(function(){var I=t.current;return!I||!I.env.closestScrollable?wt:Rg(I.env.closestScrollable)},[]),d=we(function(){var I=f();u(I.x,I.y)},[f,u]),g=Le(function(){return Ss(d)},[d]),p=we(function(){var I=t.current,k=kl(I);I&&k||fe();var T=I.scrollOptions;if(T.shouldPublishImmediately){d();return}g()},[g,d]),m=we(function(I,k){t.current&&fe();var T=a.current,P=T.getDroppableRef();P||fe();var N=TW(P),j={ref:P,descriptor:s,env:N,scrollOptions:k};t.current=j;var F=EW({ref:P,descriptor:s,env:N,windowScroll:I,direction:T.direction,isDropDisabled:T.isDropDisabled,isCombineEnabled:T.isCombineEnabled,shouldClipSubject:!T.ignoreContainerClipping}),V=N.closestScrollable;return V&&(V.setAttribute(vx.contextId,r.contextId),V.addEventListener("scroll",p,Cx(j.scrollOptions))),F},[r.contextId,s,p,a]),h=we(function(){var I=t.current,k=kl(I);return I&&k||fe(),Rg(k)},[]),y=we(function(){var I=t.current;I||fe();var k=kl(I);t.current=null,k&&(g.cancel(),k.removeAttribute(vx.contextId),k.removeEventListener("scroll",p,Cx(I.scrollOptions)))},[p,g]),v=we(function(I){var k=t.current;k||fe();var T=kl(k);T||fe(),T.scrollTop+=I.y,T.scrollLeft+=I.x},[]),x=Le(function(){return{getDimensionAndWatchScroll:m,getScrollWhileDragging:h,dragStopped:y,scroll:v}},[y,m,h,v]),S=Le(function(){return{uniqueId:n,descriptor:s,callbacks:x}},[x,s,n]);hr(function(){return c.current=S.descriptor,o.droppable.register(S),function(){t.current&&y(),o.droppable.unregister(S)}},[x,s,y,S,i,o.droppable]),hr(function(){t.current&&i.updateDroppableIsEnabled(c.current.id,!e.isDropDisabled)},[e.isDropDisabled,i]),hr(function(){t.current&&i.updateDroppableIsCombineEnabled(c.current.id,e.isCombineEnabled)},[e.isCombineEnabled,i])}function ff(){}var wx={width:0,height:0,margin:tH},NW=function(t){var r=t.isAnimatingOpenOnMount,n=t.placeholder,o=t.animate;return r||o==="close"?wx:{height:n.client.borderBox.height,width:n.client.borderBox.width,margin:n.client.margin}},MW=function(t){var r=t.isAnimatingOpenOnMount,n=t.placeholder,o=t.animate,i=NW({isAnimatingOpenOnMount:r,placeholder:n,animate:o});return{display:n.display,boxSizing:"border-box",width:i.width,height:i.height,marginTop:i.margin.top,marginRight:i.margin.right,marginBottom:i.margin.bottom,marginLeft:i.margin.left,flexShrink:"0",flexGrow:"0",pointerEvents:"none",transition:o!=="none"?Xa.placeholder:null}};function AW(e){var t=O.useRef(null),r=we(function(){t.current&&(clearTimeout(t.current),t.current=null)},[]),n=e.animate,o=e.onTransitionEnd,i=e.onClose,a=e.contextId,s=O.useState(e.animate==="open"),c=s[0],u=s[1];O.useEffect(function(){return c?n!=="open"?(r(),u(!1),ff):t.current?ff:(t.current=setTimeout(function(){t.current=null,u(!1)}),r):ff},[n,c,r]);var f=we(function(g){g.propertyName==="height"&&(o(),n==="close"&&i())},[n,i,o]),d=MW({isAnimatingOpenOnMount:c,animate:e.animate,placeholder:e.placeholder});return le.createElement(e.placeholder.tagName,{style:d,"data-rbd-placeholder-context-id":a,onTransitionEnd:f,ref:e.innerRef})}var DW=le.memo(AW),fh=le.createContext(null),RW=function(e){Rr(t,e);function t(){for(var n,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return n=e.call.apply(e,[this].concat(i))||this,n.state={isVisible:!!n.props.on,data:n.props.on,animate:n.props.shouldAnimate&&n.props.on?"open":"none"},n.onClose=function(){n.state.animate==="close"&&n.setState({isVisible:!1})},n}t.getDerivedStateFromProps=function(o,i){return o.shouldAnimate?o.on?{isVisible:!0,data:o.on,animate:"open"}:i.isVisible?{isVisible:!0,data:i.data,animate:"close"}:{isVisible:!1,animate:"close",data:null}:{isVisible:!!o.on,data:o.on,animate:"none"}};var r=t.prototype;return r.render=function(){if(!this.state.isVisible)return null;var o={onClose:this.onClose,data:this.state.data,animate:this.state.animate};return this.props.children(o)},t}(le.PureComponent),jx={dragging:5e3,dropAnimating:4500},LW=function(t,r){return r?Xa.drop(r.duration):t?Xa.snap:Xa.fluid},_W=function(t,r){return t?r?Ts.opacity.drop:Ts.opacity.combining:null},FW=function(t){return t.forceShouldAnimate!=null?t.forceShouldAnimate:t.mode==="SNAP"};function BW(e){var t=e.dimension,r=t.client,n=e.offset,o=e.combineWith,i=e.dropping,a=!!o,s=FW(e),c=!!i,u=c?Mg.drop(n,a):Mg.moveTo(n),f={position:"fixed",top:r.marginBox.top,left:r.marginBox.left,boxSizing:"border-box",width:r.borderBox.width,height:r.borderBox.height,transition:LW(s,i),transform:u,opacity:_W(a,c),zIndex:c?jx.dropAnimating:jx.dragging,pointerEvents:"none"};return f}function zW(e){return{transform:Mg.moveTo(e.offset),transition:e.shouldAnimateDisplacement?null:"none"}}function HW(e){return e.type==="DRAGGING"?BW(e):zW(e)}function UW(e,t,r){r===void 0&&(r=wt);var n=window.getComputedStyle(t),o=t.getBoundingClientRect(),i=y5(o,n),a=Vc(i,r),s={client:i,tagName:t.tagName.toLowerCase(),display:n.display},c={x:i.marginBox.width,y:i.marginBox.height},u={descriptor:e,placeholder:s,displaceBy:c,client:i,page:a};return u}function VW(e){var t=uh("draggable"),r=e.descriptor,n=e.registry,o=e.getDraggableRef,i=e.canDragInteractiveElements,a=e.shouldRespectForcePress,s=e.isEnabled,c=Le(function(){return{canDragInteractiveElements:i,shouldRespectForcePress:a,isEnabled:s}},[i,s,a]),u=we(function(p){var m=o();return m||fe(),UW(r,m,p)},[r,o]),f=Le(function(){return{uniqueId:t,descriptor:r,options:c,getDimension:u}},[r,u,c,t]),d=O.useRef(f),g=O.useRef(!0);hr(function(){return n.draggable.register(d.current),function(){return n.draggable.unregister(d.current)}},[n.draggable]),hr(function(){if(g.current){g.current=!1;return}var p=d.current;d.current=f,n.draggable.update(f,p)},[f,n.draggable])}function WW(e){e.preventDefault()}function qW(e){var t=O.useRef(null),r=we(function(j){t.current=j},[]),n=we(function(){return t.current},[]),o=Qc(od),i=o.contextId,a=o.dragHandleUsageInstructionsId,s=o.registry,c=Qc(fh),u=c.type,f=c.droppableId,d=Le(function(){return{id:e.draggableId,index:e.index,type:u,droppableId:f}},[e.draggableId,e.index,u,f]),g=e.children,p=e.draggableId,m=e.isEnabled,h=e.shouldRespectForcePress,y=e.canDragInteractiveElements,v=e.isClone,x=e.mapped,S=e.dropAnimationFinished;if(!v){var I=Le(function(){return{descriptor:d,registry:s,getDraggableRef:n,canDragInteractiveElements:y,shouldRespectForcePress:h,isEnabled:m}},[d,s,n,y,h,m]);VW(I)}var k=Le(function(){return m?{tabIndex:0,role:"button","aria-describedby":a,"data-rbd-drag-handle-draggable-id":p,"data-rbd-drag-handle-context-id":i,draggable:!1,onDragStart:WW}:null},[i,a,p,m]),T=we(function(j){x.type==="DRAGGING"&&x.dropping&&j.propertyName==="transform"&&S()},[S,x]),P=Le(function(){var j=HW(x),F=x.type==="DRAGGING"&&x.dropping?T:null,V={innerRef:r,draggableProps:{"data-rbd-draggable-context-id":i,"data-rbd-draggable-id":p,style:j,onTransitionEnd:F},dragHandleProps:k};return V},[i,k,p,x,T,r]),N=Le(function(){return{draggableId:d.id,type:d.type,source:{index:d.index,droppableId:d.droppableId}}},[d.droppableId,d.id,d.index,d.type]);return g(P,x.snapshot,N)}var f3=function(e,t){return e===t},g3=function(e){var t=e.combine,r=e.destination;return r?r.droppableId:t?t.droppableId:null},GW=function(t){return t.combine?t.combine.draggableId:null},KW=function(t){return t.at&&t.at.type==="COMBINE"?t.at.combine.draggableId:null};function JW(){var e=Ct(function(o,i){return{x:o,y:i}}),t=Ct(function(o,i,a,s,c){return{isDragging:!0,isClone:i,isDropAnimating:!!c,dropAnimation:c,mode:o,draggingOver:a,combineWith:s,combineTargetFor:null}}),r=Ct(function(o,i,a,s,c,u,f){return{mapped:{type:"DRAGGING",dropping:null,draggingOver:c,combineWith:u,mode:i,offset:o,dimension:a,forceShouldAnimate:f,snapshot:t(i,s,c,u,null)}}}),n=function(i,a){if(i.isDragging){if(i.critical.draggable.id!==a.draggableId)return null;var s=i.current.client.offset,c=i.dimensions.draggables[a.draggableId],u=mr(i.impact),f=KW(i.impact),d=i.forceShouldAnimate;return r(e(s.x,s.y),i.movementMode,c,a.isClone,u,f,d)}if(i.phase==="DROP_ANIMATING"){var g=i.completed;if(g.result.draggableId!==a.draggableId)return null;var p=a.isClone,m=i.dimensions.draggables[a.draggableId],h=g.result,y=h.mode,v=g3(h),x=GW(h),S=i.dropDuration,I={duration:S,curve:nh.drop,moveTo:i.newHomeClientOffset,opacity:x?Ts.opacity.drop:null,scale:x?Ts.scale.drop:null};return{mapped:{type:"DRAGGING",offset:i.newHomeClientOffset,dimension:m,dropping:I,draggingOver:v,combineWith:x,mode:y,forceShouldAnimate:null,snapshot:t(y,p,v,x,I)}}}return null};return n}function p3(e){return{isDragging:!1,isDropAnimating:!1,isClone:!1,dropAnimation:null,mode:null,draggingOver:null,combineTargetFor:e,combineWith:null}}var QW={mapped:{type:"SECONDARY",offset:wt,combineTargetFor:null,shouldAnimateDisplacement:!0,snapshot:p3(null)}};function YW(){var e=Ct(function(a,s){return{x:a,y:s}}),t=Ct(p3),r=Ct(function(a,s,c){return s===void 0&&(s=null),{mapped:{type:"SECONDARY",offset:a,combineTargetFor:s,shouldAnimateDisplacement:c,snapshot:t(s)}}}),n=function(s){return s?r(wt,s,!0):null},o=function(s,c,u,f){var d=u.displaced.visible[s],g=!!(f.inVirtualList&&f.effected[s]),p=ed(u),m=p&&p.draggableId===s?c:null;if(!d){if(!g)return n(m);if(u.displaced.invisible[s])return null;var h=na(f.displacedBy.point),y=e(h.x,h.y);return r(y,m,!0)}if(g)return n(m);var v=u.displacedBy.point,x=e(v.x,v.y);return r(x,m,d.shouldAnimate)},i=function(s,c){if(s.isDragging)return s.critical.draggable.id===c.draggableId?null:o(c.draggableId,s.critical.draggable.id,s.impact,s.afterCritical);if(s.phase==="DROP_ANIMATING"){var u=s.completed;return u.result.draggableId===c.draggableId?null:o(c.draggableId,u.result.draggableId,u.impact,u.afterCritical)}return null};return i}var ZW=function(){var t=JW(),r=YW(),n=function(i,a){return t(i,a)||r(i,a)||QW};return n},XW={dropAnimationFinished:G5},eq=v5(ZW,XW,null,{context:ch,pure:!0,areStatePropsEqual:f3})(qW);function m3(e){var t=Qc(fh),r=t.isUsingCloneFor;return r===e.draggableId&&!e.isClone?null:le.createElement(eq,e)}function qs(e){var t=typeof e.isDragDisabled=="boolean"?!e.isDragDisabled:!0,r=!!e.disableInteractiveElementBlocking,n=!!e.shouldRespectForcePress;return le.createElement(m3,xe({},e,{isClone:!1,isEnabled:t,canDragInteractiveElements:r,shouldRespectForcePress:n}))}function tq(e){var t=O.useContext(od);t||fe();var r=t.contextId,n=t.isMovementAllowed,o=O.useRef(null),i=O.useRef(null),a=e.children,s=e.droppableId,c=e.type,u=e.mode,f=e.direction,d=e.ignoreContainerClipping,g=e.isDropDisabled,p=e.isCombineEnabled,m=e.snapshot,h=e.useClone,y=e.updateViewportMaxScroll,v=e.getContainerForClone,x=we(function(){return o.current},[]),S=we(function(V){o.current=V},[]);we(function(){return i.current},[]);var I=we(function(V){i.current=V},[]),k=we(function(){n()&&y({maxScroll:Z5()})},[n,y]);kW({droppableId:s,type:c,mode:u,direction:f,isDropDisabled:g,isCombineEnabled:p,ignoreContainerClipping:d,getDroppableRef:x});var T=le.createElement(RW,{on:e.placeholder,shouldAnimate:e.shouldAnimatePlaceholder},function(V){var Z=V.onClose,Y=V.data,z=V.animate;return le.createElement(DW,{placeholder:Y,onClose:Z,innerRef:I,animate:z,contextId:r,onTransitionEnd:k})}),P=Le(function(){return{innerRef:S,placeholder:T,droppableProps:{"data-rbd-droppable-id":s,"data-rbd-droppable-context-id":r}}},[r,s,T,S]),N=h?h.dragging.draggableId:null,j=Le(function(){return{droppableId:s,type:c,isUsingCloneFor:N}},[s,N,c]);function F(){if(!h)return null;var V=h.dragging,Z=h.render,Y=le.createElement(m3,{draggableId:V.draggableId,index:V.source.index,isClone:!0,isEnabled:!0,shouldRespectForcePress:!1,canDragInteractiveElements:!0},function(z,J){return Z(z,J,V)});return OC.createPortal(Y,v())}return le.createElement(fh.Provider,{value:j},a(P,m),F())}var gf=function(t,r){return t===r.droppable.type},Tx=function(t,r){return r.draggables[t.draggable.id]},rq=function(){var t={placeholder:null,shouldAnimatePlaceholder:!0,snapshot:{isDraggingOver:!1,draggingOverWith:null,draggingFromThisWith:null,isUsingPlaceholder:!1},useClone:null},r=xe({},t,{shouldAnimatePlaceholder:!1}),n=Ct(function(a){return{draggableId:a.id,type:a.type,source:{index:a.index,droppableId:a.droppableId}}}),o=Ct(function(a,s,c,u,f,d){var g=f.descriptor.id,p=f.descriptor.droppableId===a;if(p){var m=d?{render:d,dragging:n(f.descriptor)}:null,h={isDraggingOver:c,draggingOverWith:c?g:null,draggingFromThisWith:g,isUsingPlaceholder:!0};return{placeholder:f.placeholder,shouldAnimatePlaceholder:!1,snapshot:h,useClone:m}}if(!s)return r;if(!u)return t;var y={isDraggingOver:c,draggingOverWith:g,draggingFromThisWith:null,isUsingPlaceholder:!0};return{placeholder:f.placeholder,shouldAnimatePlaceholder:!0,snapshot:y,useClone:null}}),i=function(s,c){var u=c.droppableId,f=c.type,d=!c.isDropDisabled,g=c.renderClone;if(s.isDragging){var p=s.critical;if(!gf(f,p))return r;var m=Tx(p,s.dimensions),h=mr(s.impact)===u;return o(u,d,h,h,m,g)}if(s.phase==="DROP_ANIMATING"){var y=s.completed;if(!gf(f,y.critical))return r;var v=Tx(y.critical,s.dimensions);return o(u,d,g3(y.result)===u,mr(y.impact)===u,v,g)}if(s.phase==="IDLE"&&s.completed&&!s.shouldFlush){var x=s.completed;if(!gf(f,x.critical))return r;var S=mr(x.impact)===u,I=!!(x.impact.at&&x.impact.at.type==="COMBINE"),k=x.critical.droppable.id===u;return S?I?t:r:k?t:r}return r};return i},nq={updateViewportMaxScroll:gU};function oq(){return document.body||fe(),document.body}var iq={mode:"standard",type:"DEFAULT",direction:"vertical",isDropDisabled:!1,isCombineEnabled:!1,ignoreContainerClipping:!1,renderClone:null,getContainerForClone:oq},aa=v5(rq,nq,null,{context:ch,pure:!0,areStatePropsEqual:f3})(tq);aa.defaultProps=iq;const Lg=(e,t,r,n)=>{var o,i,a,s,c,u,f,d;try{let g=r.length,p=n.length,m=Math.max(g,p),h=[];for(let y=0;y<m;y++){let v={},x={};+((o=r==null?void 0:r[y])==null?void 0:o[1])<e&&(v={targetCol:(i=r==null?void 0:r[y])==null?void 0:i[0],maxNum:(a=r==null?void 0:r[y])==null?void 0:a[1],side:"right",iteration:y+1},h.push(v),e=e-((s=r==null?void 0:r[y])==null?void 0:s[1])),+((c=n==null?void 0:n[y])==null?void 0:c[1])<t&&(x={targetCol:(u=n==null?void 0:n[y])==null?void 0:u[0],maxNum:(f=n==null?void 0:n[y])==null?void 0:f[1],side:"left",iteration:y+1},h.push(x),t=t-((d=n==null?void 0:n[y])==null?void 0:d[1]))}return h}catch(g){console.error(g),alert("There was an error calculating the thin display controller array. Please contact the developer")}},$r=e=>O.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("g",{clipPath:"url(#clip0_3_14)"},O.createElement("path",{d:"M50 2.5C76.2331 2.5 97.5 23.7695 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7695 97.5 2.5 76.2331 2.5 50C2.5 23.7696 23.7696 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),O.createElement("path",{d:"M31.9444 55.5556C35.7798 55.5556 38.8889 51.2028 38.8889 45.8333C38.8889 40.4639 35.7798 36.1111 31.9444 36.1111C28.1091 36.1111 25 40.4639 25 45.8333C25 51.2028 28.1091 55.5556 31.9444 55.5556Z",fill:"#664500"}),O.createElement("path",{d:"M68.0556 55.5556C71.8909 55.5556 75 51.2028 75 45.8333C75 40.4639 71.8909 36.1111 68.0556 36.1111C64.2202 36.1111 61.1111 40.4639 61.1111 45.8333C61.1111 51.2028 64.2202 55.5556 68.0556 55.5556Z",fill:"#664500"})),O.createElement("defs",null,O.createElement("clipPath",{id:"clip0_3_14"},O.createElement("rect",{width:100,height:100,fill:"white"})))),aq=e=>e.langObj,sq=e=>e.configObj,lq=e=>e.mapObj,cq=e=>e.statementsObj,uq=e=>e.columnStatements,dq=e=>e.presortSortedStatementsNumInitial,fq=e=>e.setPresortFinished,gq=e=>e.setTriggerPresortFinishedModal,pq=e=>e.results,mq=e=>e.setResults,hq=e=>e.setProgressScoreAdditional,vq=e=>e.setPosSorted,xq=e=>e.setNegSorted;function yq(e){const t=X(aq),r=X(sq),n=X(lq),o=X(cq),i=X(uq),a=E(dq),s=E(fq),c=E(gq),u=E(pq),f=E(mq),d=E(hq),g=E(vq),p=E(xq),m=A(D(t.presortStatements))||"",h=A(D(t.presortDisagreement))||"",y=A(D(t.presortAgreement))||"",v=A(D(t.presortNeutral))||"",x=A(D(t.presortOnPageInstructions))||"",S=n.useColLabelEmojiPresort;let[I,k]=O.useState(a);const T=`${e.cardFontSize}px`;let P=r.defaultFontColor,N=i.statementList.length;const j=180,[F,V]=Ee("columns",{cards:{name:m,items:[...e.statements],id:"cards"},neg:{name:h,items:[],id:"neg"},neutral:{name:v,items:[],id:"neutral"},pos:{name:y,id:"pos",items:[]}});let Z=333,Y=111;r.sortDirection==="negative"&&(Z=111,Y=333);const z=O.useCallback((K,M,R)=>{if(!K.destination||K.destination.droppableId==="cards")return;const{source:_,destination:B}=K,q=[...i.statementList],H=K.destination.droppableId,Q=K.draggableId;for(let U=0;U<q.length;U++)q[U].id===Q&&(H==="neg"&&(q[U].divColor="isNegativeStatement",q[U].cardColor="pinkSortCard",q[U].pinkChecked=!0,q[U].yellowChecked=!1,q[U].greenChecked=!1,q[U].sortValue=Z,q[U].psValue=-2),H==="neutral"&&(q[U].divColor="isUncertainStatement",q[U].cardColor="yellowSortCard",q[U].pinkChecked=!1,q[U].yellowChecked=!0,q[U].greenChecked=!1,q[U].psValue=0,q[U].sortValue=222),H==="pos"&&(q[U].divColor="isPositiveStatement",q[U].cardColor="greenSortCard",q[U].pinkChecked=!1,q[U].yellowChecked=!1,q[U].greenChecked=!0,q[U].sortValue=Y,q[U].psValue=2));for(let U=0;U<q.length;U++)q[U].listIndex=U+1;if(i.statementList=[...q],localStorage.setItem("columnStatements",JSON.stringify(i)),_.droppableId!==B.droppableId)try{const U=M[_.droppableId],G=M[B.droppableId],$=[...U.items],w=[...G.items],[b]=$.splice(_.index,1);G.id==="pos"&&(b.backgroundColor=r.greenCardColor),G.id==="neg"&&(b.backgroundColor=r.pinkCardColor),G.id==="neutral"&&(b.backgroundColor=r.yellowCardColor),w.splice(B.index,0,b),R({...M,[_.droppableId]:{...U,items:$},[B.droppableId]:{...G,items:w}});let W;if(U.id==="cards"){W=o.totalStatements-U.items.length+1,k(W);const re=(W/o.totalStatements*30).toFixed();d(re)}}catch(U){console.log(U)}else try{const U=M[_.droppableId],G=[...U.items],[$]=G.splice(_.index,1);G.splice(B.index,0,$),R({...M,[_.droppableId]:{...U,items:G}})}catch(U){console.log(U)}},[r,i,o,d,Y,Z]);O.useEffect(()=>{const K=M=>{let R;if(M.key==="1"||M.key===1)R="neg";else if(M.key==="2"||M.key===2)R="neutral";else if(M.key==="3"||M.key===3)R="pos";else return;if(F.cards.items.length>0){const B={draggableId:F.cards.items[0].id,type:"DEFAULT",source:{index:0,droppableId:"cards"},reason:"DROP",mode:"FLUID",destination:{droppableId:R,index:0},combine:null};z(B,F,V)}};return window.addEventListener("keyup",K),()=>window.removeEventListener("keyup",K)},[z,V,F]),O.useEffect(()=>{let K="",M="",R="";F.pos.items.forEach(B=>{F.pos.items[0]&&(K+=B.statementNum+",")}),F.neutral.items[0]&&F.neutral.items.forEach(B=>{M+=B.statementNum+","}),F.neg.items[0]&&F.neg.items.forEach(B=>{R+=B.statementNum+","});let _=u;_.npos=F.pos.items.length,_.posStateNums=K,_.nneu=F.neutral.items.length,_.neuStateNums=M,_.nneg=F.neg.items.length,_.negStateNums=R,f(_),localStorage.setItem("resultsPresort",JSON.stringify(_))},[F,u,f]),O.useEffect(()=>{if(F.cards.items.length===0){s(!0),c(!0),console.log("setting posSorted and negSorted triggered by presortNoReturn");let K=JSON.parse(localStorage.getItem("columnStatements"));localStorage.setItem("newCols",JSON.stringify(K));let M=[],R=[],_=[];if(K!==null){console.log("setting posSorted and negSorted"),_=[...K.statementList],_.forEach(G=>(G.selected=!1,G.selectedPos=!1,G.selectedNeg=!1,G)),M=_.filter(G=>G.sortValue===111),g(M),localStorage.setItem("posSorted",JSON.stringify([...M])),R=_.filter(G=>G.sortValue===333),p(R),localStorage.setItem("negSorted",JSON.stringify([...R]));let B=JSON.parse(localStorage.getItem("sortRightArrays")),q=JSON.parse(localStorage.getItem("sortLeftArrays")),H=M.length,Q=R.length,U=Lg(H,Q,B,q);localStorage.setItem("thinDisplayControllerArray",JSON.stringify(U))}}},[F.cards.items.length,s,c,g,p]);const J=(K,M)=>{switch(K){case"cards":return M?"#e6f3ff":"#f8fafc";case"neg":return M?"#fef7f7":"#fee2e2";case"neutral":return M?"#fefdf8":"#fef3c7";case"pos":return M?"#f7fef7":"#dcfce7";default:return"#ffffff"}};return l.jsxs(wq,{id:"statementsGrid",children:[l.jsx(Eq,{id:"imageEnlargeInstructionsDiv",children:l.jsx("div",{children:x})}),l.jsxs(Iq,{id:"completionRatio",children:[I,"/",N]}),l.jsxs(bq,{id:"negColumnHeader",children:[l.jsxs("div",{id:"negHeader",children:[S?l.jsx(oi,{children:l.jsx(pr,{})}):null,F.neg.name,S?l.jsx(oi,{children:l.jsx(pr,{})}):null]}),l.jsx(pf,{children:l.jsx("div",{children:t.press1})})]}),l.jsxs(Sq,{id:"neutralColumnHeader",children:[l.jsxs("div",{id:"neuHeader",children:[S?l.jsx(oi,{children:l.jsx($r,{})}):null,F.neutral.name,S?l.jsx(oi,{children:l.jsx($r,{})}):null]}),l.jsx(pf,{children:l.jsx("div",{children:t.press2})})]}),l.jsxs(Cq,{id:"posColumnHeader",children:[l.jsxs("div",{id:"posHeader",children:[S?l.jsx(oi,{children:l.jsx(Nr,{})}):null,F.pos.name,S?l.jsx(oi,{children:l.jsx(Nr,{})}):null]}),l.jsx(pf,{children:l.jsx("div",{children:t.press3})})]}),l.jsx(ad,{onDragEnd:K=>z(K,F,V),children:Object.entries(F).map(([K,M])=>l.jsx(Pq,{id:`${K}Div`,className:`${K}Div`,children:l.jsx(Oq,{children:l.jsx(aa,{droppableId:K,className:K,children:(R,_)=>l.jsxs(jq,{...R.droppableProps,ref:R.innerRef,id:K,className:K,columnType:K,isDraggingOver:_.isDraggingOver,style:{background:J(K,_.isDraggingOver)},children:[M.items.map((B,q)=>{const H=A(`<div>${D(B.statement)}</div>`);return l.jsx(qs,{id:B.id,draggableId:B.id,index:q,className:"dragObject",children:(Q,U)=>l.jsx(Tq,{ref:Q.innerRef,...Q.draggableProps,...Q.dragHandleProps,style:{userSelect:"none",padding:6,margin:"0 0 8px 0",width:"100%",height:j,overflow:"hidden",fontSize:T,filter:U.isDragging?"brightness(0.85)":"brightness(1.00)",backgroundColor:(U.isDragging,B.backgroundColor),color:P,...Q.draggableProps.style},children:H})},B.id)}),R.placeholder]})},K)})},K))})]})}const bq=C.div`
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
`,Sq=C.div`
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
`,Cq=C.div`
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
`,wq=C.div`
  padding-top: 10px;
  margin-top: 25px;
  margin-bottom: 55px;
  display: grid;
  min-height: calc(100vh-100px);
  grid-template-rows: 30vh 85px 58vh;
  grid-template-columns: 0.25fr 1.5fr 1.5fr 1.5fr 0.25fr;
  row-gap: 3px;
  column-gap: 15px;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
`,jq=C.div`
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
`,Tq=C.div`
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
`,Oq=C.div`
  margin: 4px;
  img {
    max-width: 98%;
    max-height: 98%;
    padding: 0px;
  }
`,Iq=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-size: 60px;
  font-weight: bold;
  padding-left: 3px;
  padding-right: 3px;
  background: linear-gradient(135deg, #3b82f6, #1d4ed8);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`,Eq=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  margin-top: 70px;
  font-size: 16px;
  padding: 16px 20px;
  width: 100%;
  height: 100px;
  background: linear-gradient(135deg, #f0f9ff, #e0f2fe);
  border-radius: 12px;
  border-left: 4px solid #0ea5e9;
  color: #0c4a6e;
  box-shadow: 0 2px 4px rgba(14, 165, 233, 0.1);
`,Pq=C.div`
  margin: 4px;
  display: flex;
  flex-direction: column;
  width: 100%;
`,pf=C.div`
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
`,oi=C.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,$q=e=>e.langObj,kq=e=>e.triggerPresortPreventNavModal,Nq=e=>e.setTriggerPresortPreventNavModal,Mq=()=>{const e=X($q),t=E(kq),r=E(Nq),n=A(D(e.presortPreventNavModalHead))||"",o=A(D(e.presortPreventNavModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(Aq,{children:n}),l.jsx("hr",{}),l.jsx(Dq,{children:o})]})},Aq=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,Dq=C.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,Rq=e=>e.langObj,Lq=e=>e.triggerPresortFinishedModal,_q=e=>e.setTriggerPresortFinishedModal,Fq=()=>{const e=X(Rq),t=E(Lq),r=E(_q),n=A(D(e.presortFinishedModalHead))||"",o=A(D(e.presortFinishedModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(Bq,{children:n}),l.jsx("hr",{}),l.jsx(zq,{children:o})]})},Bq=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,zq=C.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,Hq=e=>e.langObj,Uq=e=>e.configObj,Vq=e=>e.setCurrentPage,Wq=()=>{const e=X(Hq),t=X(Uq),r=E(Vq),n=t.headerBarColor,o=A(D(e.stepCompleteMessage))||"",i=A(D(e.titleBarText))||"";return O.useEffect(()=>{r("presort")},[r]),l.jsxs(le.Fragment,{children:[l.jsx(qq,{background:n,children:i}),l.jsx(Gq,{children:l.jsx(Kq,{children:o})})]})},qq=C.div`
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
`,Gq=C.div`
  display: flex;
  width: calc(100vw-4px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Kq=C.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  height: 50vw;
  justify-content: center;
  align-items: center;
  font-size: calc(14px + 1.5vw);
  text-align: center;
  color: black;
`,Jq=e=>e.langObj,Qq=e=>e.configObj,Yq=e=>e.setCurrentPage,h3=()=>{const e=X(Jq),t=X(Qq),r=E(Yq),n=t.headerBarColor,o=A(D(e.logInFirst)),i=A(D(e.titleBarText));return O.useEffect(()=>{r("presort")},[r]),l.jsxs(le.Fragment,{children:[l.jsx(Zq,{background:n,children:i}),l.jsx(Xq,{children:l.jsx(eG,{children:o})})]})},Zq=C.div`
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
`,Xq=C.div`
  display: flex;
  min-height: 800px;
  width: calc(100vw-4px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,eG=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2em;
  width: 85vw;
  font-size: 1.35em;
  padding: 25px;
  align-self: center;
`,tG=e=>e.langObj,rG=e=>e.configObj,nG=e=>e.statementsObj,oG=e=>e.columnStatements,iG=e=>e.setPresortFinished,aG=e=>e.setTriggerPresortFinishedModal,sG=e=>e.results,lG=e=>e.setResults,cG=e=>e.setProgressScoreAdditional;function uG(e){const t=X(tG),r=X(rG),n=X(nG),o=X(oG),i=E(iG),a=E(aG),s=E(sG),c=E(lG),u=E(cG);let f="24vw";r.imageFormat==="postSortImageModal43"&&(f="20vw");const d=A(D(t.presortStatements))||"",g=A(D(t.presortDisagreement))||"",p=A(D(t.presortAgreement))||"",m=A(D(t.presortNeutral))||"",h=A(D(t.presortImageSortInstructions))||"";let[y,v]=Ee("presortSortedCards",0);const[x,S]=O.useState(!1),[I,k]=O.useState(""),[T,P]=O.useState([]),[N,j]=O.useState(!1),F=_=>{_.detail===2&&(_.shiftKey?(T.push(_.target.src),P(T),T.length===2&&j(!0)):(k(_.target.src),S(!0)))};let V=o.imagesList.length;const Z=`${e.cardFontSize}px`;let Y=r.defaultFontColor;const[z,J]=Ee("columns",{cards:{name:d,items:[...o.imagesList],id:"cards"},neg:{name:g,items:[],id:"neg"},neutral:{name:m,items:[],id:"neutral"},pos:{name:p,id:"pos",items:[]}});let K=333,M=111;r.sortDirection==="negative"&&(K=111,M=333);const R=O.useCallback((_,B,q)=>{if(!_.destination||_.destination.droppableId==="cards")return;const{source:H,destination:Q}=_,U=[...o.imagesList],G=_.destination.droppableId,$=_.draggableId;for(let w=0;w<U.length;w++)U[w].id===$&&(G==="neg"&&(U[w].divColor="isNegativeStatement",U[w].cardColor="pinkSortCard",U[w].pinkChecked=!0,U[w].yellowChecked=!1,U[w].greenChecked=!1,U[w].sortValue=K),G==="neutral"&&(U[w].divColor="isUncertainStatement",U[w].cardColor="yellowSortCard",U[w].pinkChecked=!1,U[w].yellowChecked=!0,U[w].greenChecked=!1,U[w].sortValue=222),G==="pos"&&(U[w].divColor="isPositiveStatement",U[w].cardColor="greenSortCard",U[w].pinkChecked=!1,U[w].yellowChecked=!1,U[w].greenChecked=!0,U[w].sortValue=M));for(let w=0;w<U.length;w++)U[w].listIndex=w+1;if(o.imagesList=[...U],localStorage.setItem("columnStatements",JSON.stringify(o)),H.droppableId!==Q.droppableId)try{const w=B[H.droppableId],b=B[Q.droppableId],W=[...w.items],L=[...b.items],[re]=W.splice(H.index,1);b.id==="pos"&&(re.backgroundColor=r.greenCardColor),b.id==="neg"&&(re.backgroundColor=r.pinkCardColor),b.id==="neutral"&&(re.backgroundColor=r.yellowCardColor),L.splice(Q.index,0,re),q({...B,[H.droppableId]:{...w,items:W},[Q.droppableId]:{...b,items:L}});let ie;if(w.id==="cards"){ie=V-w.items.length+1,v(ie);const se=(ie/n.totalStatements*30).toFixed();u(se)}}catch(w){console.log(w)}else try{const w=B[H.droppableId],b=[...w.items],[W]=b.splice(H.index,1);b.splice(Q.index,0,W),q({...B,[H.droppableId]:{...w,items:b}})}catch(w){console.log(w)}},[r,o,n,u,V,M,K,v]);return O.useEffect(()=>{const _=B=>{let q;if(B.key==="1"||B.key===1)q="neg";else if(B.key==="2"||B.key===2)q="neutral";else if(B.key==="3"||B.key===3)q="pos";else return;if(z.cards.items.length>0){const Q={draggableId:z.cards.items[0].id,type:"DEFAULT",source:{index:0,droppableId:"cards"},reason:"DROP",mode:"FLUID",destination:{droppableId:q,index:0},combine:null};R(Q,z,J)}};return window.addEventListener("keyup",_),()=>window.removeEventListener("keyup",_)},[R,z,J]),O.useEffect(()=>{let _="",B="",q="";z.pos.items.forEach(Q=>{z.pos.items[0]&&(_+=Q.statementNum+",")}),z.neutral.items[0]&&z.neutral.items.forEach(Q=>{B+=Q.statementNum+","}),z.neg.items[0]&&z.neg.items.forEach(Q=>{q+=Q.statementNum+","});let H=s;H.npos=z.pos.items.length,H.posStateNums=_,H.nneu=z.neutral.items.length,H.neuStateNums=B,H.nneg=z.neg.items.length,H.negStateNums=q,c(H),localStorage.setItem("resultsPresort",JSON.stringify(H))},[z,s,c]),O.useEffect(()=>{z.cards.items.length===0&&(i(!0),a(!0))},[z.cards.items.length,i,a]),l.jsxs(pG,{id:"imageGrid",children:[l.jsx(xG,{id:"imageEnlargeInstructionsDiv",children:l.jsx("div",{children:h})}),l.jsxs(vG,{id:"completionRatioImg",children:[y,"/",V]}),l.jsx(dG,{id:"negDivImg",children:l.jsx("div",{children:z.neg.name})}),l.jsx(fG,{id:"negDivImg",children:l.jsx("div",{children:z.neutral.name})}),l.jsx(gG,{id:"negDivImg",children:l.jsx("div",{children:z.pos.name})}),l.jsx(Re,{open:x,center:!0,onClose:()=>S(!1),classNames:{modal:`${r.imageFormat}`,overlay:"dualImageOverlay"},children:l.jsx("img",{src:I,width:"100%",height:"auto",alt:"modalImage"})}),l.jsxs(Re,{open:N,center:!0,onClose:()=>{j(!1),P([])},classNames:{overlay:"dualImageOverlay",modal:"dualImageModal"},children:[l.jsx("img",{src:T[0],width:"49.5%",height:"auto",alt:"modalImage"}),l.jsx("img",{src:T[1],width:"49.5%",height:"auto",style:{marginLeft:"1%"},alt:"modalImage2"})]}),l.jsx(ad,{onDragEnd:_=>R(_,z,J),children:Object.entries(z).map(([_,B])=>l.jsx(yG,{id:`${_}Div`,className:`${_}DivImg`,children:l.jsx(hG,{children:l.jsx(aa,{droppableId:_,className:_,children:(q,H)=>l.jsxs("div",{...q.droppableProps,ref:q.innerRef,id:_,className:_,style:{background:H.isDraggingOver?"lightblue":"white",padding:4,width:"100%",height:"auto"},children:[B.items.map((Q,U)=>l.jsx(qs,{id:Q.id,draggableId:Q.id,index:U,className:"dragObject",children:(G,$)=>l.jsx(mG,{id:"DroppableContainer",ref:G.innerRef,...G.draggableProps,...G.dragHandleProps,imageWidth:f,style:{userSelect:"none",padding:2,margin:"0 0 8px 0",overflow:"hidden",fontSize:Z,filter:$.isDragging?"brightness(0.85)":"brightness(1.00)",backgroundColor:($.isDragging,Q.backgroundColor),color:Y,...G.draggableProps.style},onClick:w=>F(w,Q.element.props.src),children:l.jsx("img",{src:Q.element.props.src,alt:Q.element.props.alt})})},Q.id)),q.placeholder]})},_)})},_))})]})}const dG=C.div`
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
`,fG=C.div`
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
`,gG=C.div`
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
`,pG=C.div`
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
`,mG=C.div`
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
`,hG=C.div`
  margin: 4px;
  border: 2px solid green;
  img {
    object-fit: contain;
    padding: 0px;
  }
`,vG=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-size: 60px;
  font-weight: bold;
  padding-left: 3px;
  padding-right: 3px;
`,xG=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
  font-size: 16px;
  padding-left: 3px;
  padding-right: 3px;
  width: 100%;
`,yG=C.div`
  display: flex;
  flex-direction: "column";
  margin: 4px;
  width: 100%;
  border: 2px solid blue;
`,bG=e=>e.langObj,SG=e=>e.configObj,CG=e=>e.statementsObj,wG=e=>e.cardFontSizePresort,jG=e=>e.isLoggedIn,TG=e=>e.setCurrentPage,OG=e=>e.setProgressScore,IG=e=>e.presortNoReturn,EG=e=>e.resetColumnStatements,PG=e=>e.setDisplayNextButton,Ox=()=>{const e=X(bG),t=X(SG),r=X(CG);let n=E(wG);const o=X(jG),i=E(TG),a=E(OG),s=E(IG),c=X(EG),u=E(PG),f=+localStorage.getItem("fontSizePresort");f&&(n=f),u(!0);const d=O.useRef(null);O.useEffect(()=>(d.current=Date.now(),(async()=>{await i("presort"),localStorage.setItem("currentPage","presort"),await a(15)})(),()=>{Sr(d.current,"presortPage","presortPage")}),[i,a]);let g=r.columnStatements;t.setupTarget==="local"&&(g=JSON.parse(JSON.stringify(c)));const p=t.headerBarColor,m=t.initialScreen,h=Hm(g.statementList),y=t.useImages,v=A(D(e.titleBarText))||"";return m!=="anonymous"&&o===!1?l.jsx(h3,{}):s?l.jsx(Wq,{}):l.jsxs(le.Fragment,{children:[l.jsx(Mn,{}),l.jsx(HB,{}),l.jsx(Fq,{}),l.jsx(Mq,{}),l.jsx($G,{background:p,children:v}),y?l.jsx(uG,{cardFontSize:n}):l.jsx(yq,{statements:h,cardFontSize:n})]})},$G=C.div`
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
`;var kG="__lodash_hash_undefined__";function NG(e){return this.__data__.set(e,kG),this}var MG=NG;function AG(e){return this.__data__.has(e)}var DG=AG,RG=Dm,LG=MG,_G=DG;function Yc(e){var t=-1,r=e==null?0:e.length;for(this.__data__=new RG;++t<r;)this.add(e[t])}Yc.prototype.add=Yc.prototype.push=LG;Yc.prototype.has=_G;var FG=Yc;function BG(e,t){for(var r=-1,n=e==null?0:e.length;++r<n;)if(t(e[r],r,e))return!0;return!1}var zG=BG;function HG(e,t){return e.has(t)}var UG=HG,VG=FG,WG=zG,qG=UG,GG=1,KG=2;function JG(e,t,r,n,o,i){var a=r&GG,s=e.length,c=t.length;if(s!=c&&!(a&&c>s))return!1;var u=i.get(e),f=i.get(t);if(u&&f)return u==t&&f==e;var d=-1,g=!0,p=r&KG?new VG:void 0;for(i.set(e,t),i.set(t,e);++d<s;){var m=e[d],h=t[d];if(n)var y=a?n(h,m,d,t,e,i):n(m,h,d,e,t,i);if(y!==void 0){if(y)continue;g=!1;break}if(p){if(!WG(t,function(v,x){if(!qG(p,x)&&(m===v||o(m,v,r,n,i)))return p.push(x)})){g=!1;break}}else if(!(m===h||o(m,h,r,n,i))){g=!1;break}}return i.delete(e),i.delete(t),g}var v3=JG;function QG(e){var t=-1,r=Array(e.size);return e.forEach(function(n,o){r[++t]=[o,n]}),r}var YG=QG;function ZG(e){var t=-1,r=Array(e.size);return e.forEach(function(n){r[++t]=n}),r}var XG=ZG,Ix=Qi,Ex=e5,eK=Mm,tK=v3,rK=YG,nK=XG,oK=1,iK=2,aK="[object Boolean]",sK="[object Date]",lK="[object Error]",cK="[object Map]",uK="[object Number]",dK="[object RegExp]",fK="[object Set]",gK="[object String]",pK="[object Symbol]",mK="[object ArrayBuffer]",hK="[object DataView]",Px=Ix?Ix.prototype:void 0,mf=Px?Px.valueOf:void 0;function vK(e,t,r,n,o,i,a){switch(r){case hK:if(e.byteLength!=t.byteLength||e.byteOffset!=t.byteOffset)return!1;e=e.buffer,t=t.buffer;case mK:return!(e.byteLength!=t.byteLength||!i(new Ex(e),new Ex(t)));case aK:case sK:case uK:return eK(+e,+t);case lK:return e.name==t.name&&e.message==t.message;case dK:case gK:return e==t+"";case cK:var s=rK;case fK:var c=n&oK;if(s||(s=nK),e.size!=t.size&&!c)return!1;var u=a.get(e);if(u)return u==t;n|=iK,a.set(e,t);var f=tK(s(e),s(t),n,o,i,a);return a.delete(e),f;case pK:if(mf)return mf.call(e)==mf.call(t)}return!1}var xK=vK,$x=Zw,yK=1,bK=Object.prototype,SK=bK.hasOwnProperty;function CK(e,t,r,n,o,i){var a=r&yK,s=$x(e),c=s.length,u=$x(t),f=u.length;if(c!=f&&!a)return!1;for(var d=c;d--;){var g=s[d];if(!(a?g in t:SK.call(t,g)))return!1}var p=i.get(e),m=i.get(t);if(p&&m)return p==t&&m==e;var h=!0;i.set(e,t),i.set(t,e);for(var y=a;++d<c;){g=s[d];var v=e[g],x=t[g];if(n)var S=a?n(x,v,g,t,e,i):n(v,x,g,e,t,i);if(!(S===void 0?v===x||o(v,x,r,n,i):S)){h=!1;break}y||(y=g=="constructor")}if(h&&!y){var I=e.constructor,k=t.constructor;I!=k&&"constructor"in e&&"constructor"in t&&!(typeof I=="function"&&I instanceof I&&typeof k=="function"&&k instanceof k)&&(h=!1)}return i.delete(e),i.delete(t),h}var wK=CK,hf=Rm,jK=v3,TK=xK,OK=wK,kx=Qu,Nx=Lr,Mx=Om,IK=Fw,EK=1,Ax="[object Arguments]",Dx="[object Array]",Nl="[object Object]",PK=Object.prototype,Rx=PK.hasOwnProperty;function $K(e,t,r,n,o,i){var a=Nx(e),s=Nx(t),c=a?Dx:kx(e),u=s?Dx:kx(t);c=c==Ax?Nl:c,u=u==Ax?Nl:u;var f=c==Nl,d=u==Nl,g=c==u;if(g&&Mx(e)){if(!Mx(t))return!1;a=!0,f=!1}if(g&&!f)return i||(i=new hf),a||IK(e)?jK(e,t,r,n,o,i):TK(e,t,c,r,n,o,i);if(!(r&EK)){var p=f&&Rx.call(e,"__wrapped__"),m=d&&Rx.call(t,"__wrapped__");if(p||m){var h=p?e.value():e,y=m?t.value():t;return i||(i=new hf),o(h,y,r,n,i)}}return g?(i||(i=new hf),OK(e,t,r,n,o,i)):!1}var kK=$K,NK=kK,Lx=Qo;function x3(e,t,r,n,o){return e===t?!0:e==null||t==null||!Lx(e)&&!Lx(t)?e!==e&&t!==t:NK(e,t,r,n,x3,o)}var gh=x3,MK=gh;function AK(e,t){return MK(e,t)}var DK=AK;const RK=gt(DK),LK=(e,t,r,n,o)=>{if(t===!0){const a=[];e.forEach(function(s,c){if(s>+n[c])return a.push(o[c]),E.setState({sortCompleted:!1}),E.setState({overloadedColumn:o[c]}),E.setState({hasOverloadedColumn:!0}),E.setState({isSortingCards:!1}),null}),a.length===0&&(E.setState({hasOverloadedColumn:!1}),E.setState({isSortingCards:!0}))}const i=e.reduce(function(a,s){return a+s});E.setState({numSortedStatements:i}),t===!1&&(i===r?(E.setState({sortCompleted:!0}),E.setState({isSortingCards:!1})):(E.setState({sortCompleted:!1}),E.setState({isSortingCards:!0})))},y3=(e,t,r,n,o,i,a,s,c)=>{const{qSortPattern:u,qSortHeaders:f,forcedSorts:d}=a,g=[...t],[p]=e.splice(r.index,1);t.splice(n.index,0,p),e[r.droppableId]=[p],t[n.droppableId]=[...g];const m={};m[r.droppableId]=[...e],m[n.droppableId]=[...t],E.setState({result:m});const h=[];for(let S=0;S<f.length;S++){const I=o.vCols[`column${f[S]}`];h.push(I.length)}const y=[...u],v=[...h],x=RK(h,y);return LK(v,d,i,u,c),s===!1?x===!0?(E.setState({hasOverloadedColumn:!1}),E.setState({sortCompleted:!0}),console.log("sorting complete"),E.setState({isSortingCards:!1}),E.setState({isSortingFinished:!0})):(E.setState({hasOverloadedColumn:!0}),E.setState({sortCompleted:!1}),E.setState({isSortingCards:!0}),o.statementList.length===0?E.setState({isSortingFinished:!0}):E.setState({isSortingFinished:!1})):e.length===0?(E.setState({hasOverloadedColumn:!1}),E.setState({sortCompleted:!0}),console.log("sorting complete"),E.setState({isSortingCards:!1}),E.setState({isSortingFinished:!0})):(E.setState({sortCompleted:!1}),E.setState({isSortingCards:!0}),E.setState({hasOverloadedColumn:!1}),E.setState({isSortingFinished:!1})),null},b3=(e,t,r,n)=>{try{if(console.log("reorder"),e==="statements")return n;const i=[...n.vCols[e]],[a]=i.splice(t,1);return i.splice(r,0,a),n.vCols[e]=[...i],{...n}}catch(o){console.error(o)}},_K=(e,t,r,n,o,i,a,s,c,u)=>({userSelect:"none",padding:"5px",margin:"1px",lineHeight:"1.3em",fontSize:o,color:u,height:n,width:r,display:"flex",justifyContent:"center",alignItems:"center",borderBottom:"1.5px solid darkgray",filter:e?"brightness(0.85)":"brightness(1.00)",zIndex:"-1",textAlign:"center",background:e?"#ffffff":"transparent",...t}),FK=(e,t,r,n,o)=>{let i;return r===!0?i=t.columnStatementsArray.length<=t.maxCards:i=!0,e&&E.setState({draggingOverColumnId:t.columnId}),{background:e?"lightblue":i?o:"#F4BB44",maxWidth:n,marginTop:0,marginRight:0,marginBottom:0,paddingBottom:0,minHeight:t.minHeight-12,borderRadius:"2px",borderTop:"0px solid lightgray",borderRight:i?"1px solid lightgray":"3px dashed black",borderLeft:i?"1px solid lightgray":"3px dashed black",borderBottom:i?"1px solid whitesmoke":"3px dashed black"}},BK=e=>{const{forcedSorts:t,columnWidth:r,cardHeight:n,columnId:o,sortValue:i,columnStatementsArray:a,columnColor:s,cardFontSize:c,greenCardColor:u,yellowCardColor:f,pinkCardColor:d,fontColor:g}=e;return l.jsx(HK,{id:"sortColumnsDiv",children:l.jsx(aa,{id:"ColDroppable",droppableId:o,direction:"vertical",children:(p,m)=>(m.isDraggingOver&&(E.setState({draggingOverColumnId:o}),E.setState({currentSortValue:i})),l.jsxs(UK,{id:"DroppableColDiv",ref:p.innerRef,style:FK(m.isDraggingOver,e,t,r,s),children:[a.map((h,y)=>{const v=A(`<div>${D(h.statement)}</div>`);return l.jsx(qs,{draggableId:h.id,cardColor:h.cardColor,index:y,children:(x,S)=>l.jsx(VK,{id:"StatementDiv",ref:x.innerRef,...x.draggableProps,...x.dragHandleProps,style:_K(S.isDragging,x.draggableProps.style,r,n,c,`${h.cardColor}`,u,f,d,g),children:v})},h.id)}),p.placeholder]}))})})},zK=le.memo(BK),HK=C.div`
  display: flex;
  flex-direction: column;
`,UK=C.div`
  justify-items: center;
`,VK=C.div`
  display: flex;
  width: 96%;
  margin-left: 2%;
  margin-bottom: 5px !important;
  height: ${e=>`${e.cardHeight}px`};
  font-size: calc(${e=>e.fontSize}px + 1.3vw);
  justify-content: center;
`,WK=(e,t,r,n,o)=>{try{let i=!1,a=!1;if(e.destination!==null){const s=/column/gi,c=/N/gi;let u=e.destination.droppableId;u=u.replace(s,""),u=u.replace(c,"-");const f=parseInt(u,10);o[e.draggableId]=f;const d=Object.keys(o);let g=!1;if(d.length===t){let m="";for(let h=0;h<t;h++){let y=`s${h+1}`,v=o[y];isNaN(v)&&(g=!0),m+=`${v}|`,console.log(m)}g===!0?i=!1:(i=!0,m.charAt(m.length-1)==="|"&&(m=m.substring(0,m.length-1)),console.log(m),r.sort=m,n===!1&&(n=!0,a=!0))}const p={};return p.isSortingFinished=i,p.results=r,p.sortFinishedModalHasBeenShown=n,p.triggerSortingFinishedModal=a,p.sortGridResults=o,p}}catch(i){console.error(i),console.log("there was an error in calculateDragResults")}},qK=e=>e.configObj,GK=e=>e.mapObj,KK=e=>e.statementsObj,JK=e=>e.setIsSortingCards,QK=e=>e.setSortCompleted,YK=e=>e.setProgressScoreAdditionalSort,ZK=e=>e.results,XK=e=>e.sortFinishedModalHasBeenShown,eJ=e=>e.sortGridResults,tJ=e=>e.setIsSortingFinished,rJ=e=>e.setResults,nJ=e=>e.setTriggerSortingFinishedModal,oJ=e=>e.setSortGridResults,iJ=e=>{const t=X(qK),r=X(GK),n=X(KK),o=E(JK),i=E(QK),a=E(YK),s=E(ZK),c=E(XK),u=E(eJ),f=E(tJ),d=E(rJ),g=E(nJ),p=E(oJ),m=t.greenCardColor,h=t.yellowCardColor,y=t.pinkCardColor,v=[...r.qSortHeaders],x=[...r.qSortHeaderNumbers],S=[...r.columnColorsArray],I=[...r.columnHeadersColorsArray],k=[...r.qSortPattern],T=e.cardHeight;let P=JSON.parse(localStorage.getItem("columnStatements"));P===null&&(P=[]);const[N,j]=Ee("sortColumns",P),F=+t.totalStatements,V={};V.qSortPattern=[...r.qSortPattern],V.qSortHeaders=[...r.qSortHeaders],V.forcedSorts=t.warnOverloadedColumn,V.qSortHeaderNumbers=[...r.qSortHeaderNumbers];const Z=V,Y=t.allowUnforcedSorts,z=R=>{try{const _=WK({...R},F,s,c,u);f(_.sortFinished),d(_.results),p(_.sortGridResults);const{source:B,destination:q}=R;if(!q)return;if(B.droppableId===q.droppableId){let H=b3(B.droppableId,B.index,q.index,N);j(H)}else{let H,Q;B.droppableId==="statements"?H=N.statementList:H=N.vCols[B.droppableId],q.droppableId==="statements"?Q=N.statementList:Q=N.vCols[q.droppableId],y3(H,Q,B,q,N,F,Z,Y,x),j(N);const $=localStorage.getItem("hasShownSortFinModal");N.statementList.length===0?(o(!1),i(!0),$==="false"&&(localStorage.setItem("hasShownSortFinModal",!0),g(!0))):(localStorage.setItem("hasShownSortFinModal",!1),o(!0),i(!1));const w=n.totalStatements,b=N.statementList.length,re=((w-b)/w*30).toFixed();a(re)}}catch(_){console.log(_.message)}},J=e.cardFontSize,K=e.fontColor,M=v.map((R,_)=>{const B=`column${v[_]}`,q=x[_],H=S[_];return l.jsx(zK,{minHeight:k[_]*(+T+8),maxCards:k[_],columnId:B,columnStatementsArray:N.vCols[B],forcedSorts:t.warnOverloadedColumn,columnWidth:e.columnWidth,cardHeight:+T,sortValue:q,columnColor:H,cardFontSize:J,qSortHeaderNumber:x[_],columnHeadersColor:I[_],greenCardColor:m,yellowCardColor:h,pinkCardColor:y,fontColor:K},B)});return l.jsx(ad,{onDragEnd:z,children:l.jsx("div",{className:"rootDiv",children:M})})},aJ=(e,t,r,n,o,i,a,s,c,u)=>{let f;return i==="greenSortCard"&&(f=a),i==="yellowSortCard"&&(f=s),i==="pinkSortCard"&&(f=c),{userSelect:"none",lineHeight:"1.3em",fontSize:o,maxHeight:n,color:u,borderRadius:"5px",filter:e?"brightness(0.85)":"brightness(1.00)",zIndex:"-1",textAlign:"center",background:e?f:"whitesmoke",...t}},sJ=(e,t,r,n,o,i)=>{let a;return r===!0?a=t.columnStatementsArray.length<=t.maxCards:a=!0,e&&E.setState({draggingOverColumnId:t.columnId}),{background:e?"lightblue":a?o:"orange",padding:"5px 0px 0px 0px",justifyContent:"center",width:n+13,marginTop:0,marginRight:0,minHeight:t.minHeight-10,borderRadius:"2px",outline:a?"1px solid #d8d8d8":"2px dashed black",outlineOffset:"-1px"}},lJ=e=>{const{forcedSorts:t,columnWidth:r,cardHeight:n,columnId:o,sortValue:i,columnStatementsArray:a,columnColor:s,cardFontSize:c,greenCardColor:u,yellowCardColor:f,pinkCardColor:d,fontColor:g,handleOpenImageModal:p}=e;return l.jsx(uJ,{id:"sortColumnsDiv",children:l.jsx(aa,{id:"ColDroppable",droppableId:o,direction:"vertical",children:(m,h)=>(h.isDraggingOver&&(E.setState({draggingOverColumnId:o}),E.setState({currentSortValue:i})),l.jsxs(dJ,{id:"DroppableColDiv",ref:m.innerRef,style:sJ(h.isDraggingOver,e,t,r,s),children:[a.map((y,v)=>l.jsx(qs,{draggableId:y.id,cardColor:y.cardColor,index:v,children:(x,S)=>l.jsx(fJ,{id:"imageDiv",ref:x.innerRef,...x.draggableProps,...x.dragHandleProps,onClick:I=>p(I,y.element.props.src),style:aJ(S.isDragging,x.draggableProps.style,r,n,c,`${y.cardColor}`,u,f,d,g),children:l.jsx("img",{src:y.element.props.src,alt:y.element.props.alt,style:{border:"1px solid black"}})})},y.id)),m.placeholder]}))})})},cJ=le.memo(lJ),uJ=C.div`
  display: flex;
  flex-direction: column;
`,dJ=C.div`
  justify-items: center;
`,fJ=C.div`
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
`,gJ=(e,t,r)=>({background:e?"lightblue":"#e4e4e4",display:"flex",flexDirection:"row",flexWrap:"nowrap",width:"100vw",paddingRight:"20px",minHeight:t,overflowX:"scroll",direction:r,scrollBehavior:"smooth"}),pJ=(e,t,r,n,o,i,a,s,c,u,f)=>{let d=r,g=n;return isNaN(+d)&&(d=999),(g==="undefined"||g==="yellowSortCard")&&(g=c),g==="pinkSortCard"&&(g=u),g==="greenSortCard"&&(g=s),{userSelect:"none",WebkitUserSelect:"none",lineHeight:"1.3em",fontSize:a,color:f,height:i,minWidth:o,maxWidth:o,paddingRight:2,paddingLeft:2,borderRadius:"5px",touchAction:"manipulation",marginBottom:5,marginTop:5,marginRight:"2px",marginLeft:"2px",display:"flex",alignItems:"center",textAlign:"center",order:d,filter:e?"brightness(0.85)":"brightness(1.00)",background:g,...t}},mJ=(e,t,r,n,o)=>{try{let i=!1,a=!1;if(e.destination!==null){const s=/column/gi,c=/N/gi;let u=e.destination.droppableId;u=u.replace(s,""),u=u.replace(c,"-");const f=parseInt(u,10);o[e.draggableId]=f;const d=Object.keys(o);let g=!1;if(d.length===t){let m="";for(let h=0;h<t;h++){let y=`image${h+1}`,v=o[y];isNaN(v)&&(g=!0),m+=`${v}|`}g===!0?i=!1:(i=!0,m.charAt(m.length-1)==="|"&&(m=m.substring(0,m.length-1)),r.sort=m,console.log("resultsText",m),localStorage.setItem("resultsSort",JSON.stringify(m)),n===!1&&(n=!0,a=!0))}const p={};return p.isSortingFinished=i,p.results=r,p.sortFinishedModalHasBeenShown=n,p.triggerSortingFinishedModal=a,p.sortGridResults=o,p}}catch(i){console.error(i),console.log("there was an error in calculateDragResults")}},hJ=e=>e.configObj,vJ=e=>e.mapObj,xJ=e=>e.setIsSortingCards,yJ=e=>e.setSortCompleted,bJ=e=>e.setProgressScoreAdditionalSort,SJ=e=>e.results,CJ=e=>e.sortFinishedModalHasBeenShown,wJ=e=>e.sortGridResults,jJ=e=>e.setIsSortingFinished,TJ=e=>e.setResults,OJ=e=>e.setTriggerSortingFinishedModal,IJ=e=>e.setSortGridResults,EJ=e=>{const t=X(hJ),r=X(vJ),n=E(xJ),o=E(yJ),i=E(bJ),a=E(SJ),s=E(CJ),c=E(wJ),u=E(jJ),f=E(TJ),d=E(OJ),g=E(IJ),p=t.greenCardColor,m=t.yellowCardColor,h=t.pinkCardColor,y=[...r.qSortHeaders],v=[...r.qSortHeaderNumbers],x=[...r.columnColorsArray],S=[...r.columnHeadersColorsArray],I=[...r.qSortPattern];let k=JSON.parse(localStorage.getItem("columnStatements"));k===null&&(k=[]);const[T,P]=O.useState(!1),[N,j]=O.useState(""),[F,V]=O.useState([]),[Z,Y]=O.useState(!1),[z,J]=Ee("sortColumns",k);let K=e.columnWidth;const M=+t.numImages,R={};R.qSortPattern=[...r.qSortPattern],R.qSortHeaders=[...r.qSortHeaders],R.forcedSorts=t.warnOverloadedColumn,R.qSortHeaderNumbers=[...r.qSortHeaderNumbers];const _=R,B=t.allowUnforcedSorts;let q="rtl";t.sortDirection==="negative"&&(q="ltr");const H=(L,re)=>{L.detail===2&&(L.shiftKey?(F.push(L.target.src),V(F),F.length===2&&Y(!0)):(j(L.target.src),P(!0)))},Q=L=>{try{const re=mJ({...L},M,a,s,c);u(re.sortFinished),f(re.results),g(re.sortGridResults);const{source:ie,destination:ge}=L;if(!ge)return;if(ie.droppableId===ge.droppableId){let se=b3(ie.droppableId,ie.index,ge.index,z);J(se)}else{let se,ae;ie.droppableId==="statements"?se=z.imagesList:se=z.vCols[ie.droppableId],ge.droppableId==="statements"?ae=z.imagesList:ae=z.vCols[ge.droppableId],y3(se,ae,ie,ge,z,M,_,B,v),J(z);const ue=localStorage.getItem("hasShownSortFinModal");z.imagesList.length===0?(n(!1),o(!0),ue==="false"&&(localStorage.setItem("hasShownSortFinModal",!0),d(!0))):(localStorage.setItem("hasShownSortFinModal",!1),n(!0),o(!1));const Se=t.numImages,he=z.imagesList.length,ze=((Se-he)/Se*30).toFixed();i(ze)}}catch(re){console.log(re.message)}},U=e.cardFontSize,G=e.fontColor;let $=50;const w=z.imagesList,b=y.map((L,re,ie)=>{const ge=`column${y[re]}`,se=v[re],ae=x[re];return l.jsx(cJ,{minHeight:I[re]*(+e.cardHeight+8),maxCards:I[re],columnId:ge,columnStatementsArray:z.vCols[ge],forcedSorts:t.warnOverloadedColumn,columnWidth:e.columnWidth,cardHeight:+e.cardHeight,sortValue:se,columnColor:ae,cardFontSize:U,qSortHeaderNumber:v[re],columnHeadersColor:S[re],greenCardColor:p,yellowCardColor:m,pinkCardColor:h,fontColor:G,handleOpenImageModal:H},ge)}),W=le.memo(L=>L.statements.map((ie,ge)=>l.jsx(qs,{draggableId:ie.id,index:ge,sortValue:ie.sortValue,cardColor:ie.cardColor,className:"droppableCards",children:(se,ae)=>l.jsxs(l.Fragment,{children:[l.jsx(NJ,{ref:se.innerRef,className:`${ie.cardColor}`,...se.draggableProps,...se.dragHandleProps,onClick:ye=>H(ye,ie.element.props.src),style:pJ(ae.isDragging,se.draggableProps.style,`${ie.sortValue}`,`${ie.cardColor}`,K,L.cardHeight,U,p,m,h,G),children:l.jsx("img",{src:ie.element.props.src,alt:ie.element.props.alt})}),se.placeholder]})},ie.id)));return l.jsxs(l.Fragment,{children:[l.jsx(Re,{open:T,center:!0,onClose:()=>P(!1),classNames:{modal:`${t.imageFormat}`,overlay:"dualImageOverlay"},children:l.jsx("img",{src:N,width:"100%",height:"auto",alt:"modalImage"})}),l.jsxs(Re,{open:Z,center:!0,onClose:()=>{Y(!1),V([])},classNames:{overlay:"dualImageOverlay",modal:"dualImageModal"},children:[l.jsx("img",{src:F[0],width:"49.5%",height:"auto",alt:"modalImage"}),l.jsx("img",{src:F[1],width:"49.5%",height:"auto",style:{marginLeft:"1%"},alt:"modalImage2"})]}),l.jsx(ad,{onDragEnd:Q,children:l.jsxs("div",{className:"rootDiv",children:[b,l.jsx(PJ,{id:"SortFooterDiv",children:l.jsx($J,{id:"CardSlider",children:l.jsx(aa,{id:"Droppable",droppableId:"statements",direction:"horizontal",style:{maxWidth:"100vw"},children:(L,re)=>l.jsxs(kJ,{id:"HorizontalFeederDiv",ref:L.innerRef,style:gJ(re.isDraggingOver,$,q),children:[l.jsx(W,{statements:w,cardHeight:e.cardHeight,provided:L}),l.jsxs("span",{style:{display:"none"},children:[" ",L.placeholder]})]})})})})]})})]})},PJ=C.div`
  background: #e4e4e4;
  padding-right: 10px;
  position: fixed;
  left: 0px;
  bottom: 50px;
  width: 100vw;
  height: ${e=>`${+e.cardHeight+20}px;`};
`,$J=C.div`
  display: flex;
  width: 100vw;
  overflow: hidden;
`,kJ=C.div``,NJ=C.div`
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`,MJ=e=>e.langObj,AJ=e=>e.triggerSortModal,DJ=e=>e.setTriggerSortModal,RJ=()=>{const e=X(MJ),t=E(AJ),r=E(DJ),n=A(D(e.sortHelpModalHead)),o=A(D(e.sortHelpModalText)),i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(LJ,{children:n}),l.jsx("hr",{}),l.jsx(_J,{children:o})]})},LJ=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,_J=C.div`
  margin-top: 15px;
`,FJ=e=>e.langObj,BJ=e=>e.triggerSortingFinishedModal,zJ=e=>e.setTriggerSortingFinishedModal,HJ=()=>{const e=X(FJ),t=E(BJ),r=E(zJ),n=A(D(e.sortingCompleteModalHead))||"",o=A(D(e.sortingCompleteModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(UJ,{children:n}),l.jsx("hr",{}),l.jsx(VJ,{children:o})]})},UJ=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,VJ=C.div`
  margin-top: 15px;
`,WJ=e=>e.langObj,qJ=e=>e.triggerSortPreventNavModal,GJ=e=>e.setTriggerSortPreventNavModal,KJ=()=>{const e=X(WJ),t=E(qJ),r=E(GJ),n=A(D(e.sortPreventNavModalHead))||"",o=A(D(e.sortPreventNavModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(JJ,{children:n}),l.jsx("hr",{}),l.jsx(QJ,{children:o})]})},JJ=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,QJ=C.div`
  margin-top: 15px;
`,YJ=e=>e.langObj,ZJ=e=>e.triggerSortOverloadedColumnModal,XJ=e=>e.setTriggerSortOverloadedColumnModal,eQ=()=>{const e=X(YJ),t=E(ZJ),r=E(XJ),n=A(D(e.sortOverloadedColumnModalHead))||"",o=A(D(e.sortOverloadedColumnModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(tQ,{children:n}),l.jsx("hr",{}),l.jsx(rQ,{children:o})]})},tQ=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,rQ=C.div`
  margin-top: 15px;
`,S3=e=>O.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("g",{clipPath:"url(#clip0_1_6)"},O.createElement("path",{d:"M50 2.5C76.2332 2.5 97.5 23.7668 97.5 50C97.5 76.2332 76.2332 97.5 50 97.5C23.7668 97.5 2.5 76.2332 2.5 50C2.5 23.7668 23.7668 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),O.createElement("path",{d:"M55.5583 36.1111C55.4055 36.1111 55.2555 36.1 55.1 36.0722C53.5861 35.8194 52.5639 34.3889 52.8167 32.875C53.9083 26.3083 59.9555 13.8889 75 13.8889C76.5361 13.8889 77.7778 15.1333 77.7778 16.6667C77.7778 18.2 76.5361 19.4444 75 19.4444C60.8472 19.4444 58.3917 33.2056 58.2944 33.7917C58.0694 35.1472 56.8917 36.1111 55.5583 36.1111ZM44.4417 36.1111C43.1111 36.1111 41.9361 35.1528 41.7055 33.7972C41.6028 33.2139 39.0528 19.4444 25 19.4444C23.4667 19.4444 22.2222 18.2 22.2222 16.6667C22.2222 15.1333 23.4667 13.8889 25 13.8889C40.0444 13.8889 46.0889 26.3083 47.1833 32.875C47.4361 34.3889 46.4139 35.8194 44.9 36.0722C44.7472 36.1 44.5917 36.1111 44.4417 36.1111ZM31.6944 49.7C25.2083 49.7 20.9444 46.9306 20.6833 46.7556C19.4083 45.9056 19.0639 44.1806 19.9139 42.9028C20.7639 41.625 22.4861 41.2778 23.7667 42.1333C24.0417 42.3111 30.9944 46.6778 40.4278 41.9611C41.8028 41.275 43.4694 41.8333 44.1555 43.2028C44.8417 44.575 44.2861 46.2444 42.9139 46.9306C38.7611 49.0028 34.9472 49.7 31.6944 49.7ZM68.3083 49.7C65.0528 49.7 61.2389 49.0028 57.0917 46.9278C55.7194 46.2417 55.1639 44.5722 55.85 43.2C56.5389 41.8278 58.2055 41.2722 59.5778 41.9583C69.0222 46.6806 75.9639 42.3083 76.2555 42.1222C77.5333 41.2944 79.2583 41.65 80.0944 42.925C80.9333 44.2 80.5917 45.9083 79.3222 46.7556C79.0555 46.9306 74.7917 49.7 68.3083 49.7ZM72.225 75C71.3778 75 70.5472 74.6167 70 73.8889C69.9306 73.7944 62.2722 63.8889 50 63.8889C37.7305 63.8889 30.0722 73.7944 29.9944 73.8972C29.0694 75.1139 27.325 75.3556 26.1055 74.4361C24.8833 73.5139 24.6361 71.7806 25.5555 70.5556C25.9305 70.0556 34.8944 58.3333 50 58.3333C65.1055 58.3333 74.0694 70.0583 74.4444 70.5556C75.3667 71.7806 75.1167 73.5222 73.8889 74.4417C73.3889 74.8194 72.8055 75 72.225 75Z",fill:"#664500"}),O.createElement("path",{d:"M42.7528 55.7778C41.4944 55.2361 40.0333 55.7028 39.3111 56.8611L25.4222 79.0833C24.8889 79.9417 24.8583 81.0194 25.35 81.9028C25.8389 82.7861 26.7667 83.3333 27.7778 83.3333H36.1111C37.3861 83.3333 38.4972 82.4667 38.8055 81.2278L44.3611 59.0056C44.6917 57.6833 44.0111 56.3111 42.7528 55.7778ZM74.5778 79.0833L60.6889 56.8611C59.9611 55.7 58.5028 55.2389 57.25 55.7778C55.9917 56.3111 55.3083 57.6833 55.6417 59.0056L61.1972 81.2278C61.5055 82.4667 62.6139 83.3333 63.8889 83.3333H72.2222C73.2305 83.3333 74.1611 82.7861 74.6528 81.9C75.1417 81.0194 75.1139 79.9389 74.5778 79.0833Z",fill:"#F5F8FA"}),O.createElement("path",{d:"M88.8389 83.8278C88.8472 83.6611 88.8889 83.5028 88.8889 83.3333C88.8889 78.7333 85.1556 75 80.5556 75C77.7028 75 75.1889 76.4389 73.6861 78.625C72.3806 78.0833 70.9472 77.7778 69.4444 77.7778C63.3083 77.7778 58.3333 82.7528 58.3333 88.8889C58.3333 95.025 63.3083 100 69.4444 100C73.2361 100 76.5778 98.0917 78.5833 95.1917C79.9167 98.025 82.7722 100 86.1111 100C90.7139 100 94.4445 96.2694 94.4445 91.6667C94.4445 88.0222 92.0945 84.9611 88.8389 83.8278ZM30.5556 77.7778C29.05 77.7778 27.6222 78.0833 26.3139 78.625C24.8111 76.4389 22.2972 75 19.4444 75C14.8444 75 11.1111 78.7333 11.1111 83.3333C11.1111 83.5028 11.15 83.6611 11.1611 83.8278C7.90556 84.9611 5.55556 88.0222 5.55556 91.6667C5.55556 96.2694 9.28611 100 13.8889 100C17.2278 100 20.0861 98.025 21.4139 95.1917C23.4222 98.0917 26.7611 100 30.5556 100C36.6917 100 41.6667 95.025 41.6667 88.8889C41.6667 82.7528 36.6917 77.7778 30.5556 77.7778Z",fill:"#E1E8ED"})),O.createElement("defs",null,O.createElement("clipPath",{id:"clip0_1_6"},O.createElement("rect",{width:100,height:100,fill:"white"})))),C3=e=>O.createElement("svg",{width:100,height:100,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("g",{clipPath:"url(#clip0_3_44)"},O.createElement("path",{d:"M50 2.5C76.2335 2.5 97.5 23.7665 97.5 50C97.5 76.2335 76.2335 97.5 50 97.5C23.7665 97.5 2.5 76.2335 2.5 50C2.5 23.7665 23.7665 2.5 50 2.5Z",fill:"#FFCC4D",stroke:"black",strokeWidth:5}),O.createElement("path",{d:"M44.4444 47.1056C43.2806 47.1056 42.1972 46.3695 41.8083 45.2056C41.2444 43.5417 38.9806 38.7722 36.1111 38.7722C33.1611 38.7722 30.8667 43.8472 30.4139 45.2056C29.9278 46.6583 28.3639 47.45 26.9 46.9611C25.4444 46.4778 24.6583 44.9028 25.1444 43.4472C25.4917 42.4 28.7667 33.2139 36.1139 33.2139C43.4611 33.2139 46.7333 42.4 47.0833 43.4472C47.5694 44.9028 46.7833 46.4778 45.3278 46.9611C45.0333 47.0611 44.7361 47.1056 44.4444 47.1056ZM72.2222 47.1056C71.0583 47.1056 69.975 46.3695 69.5889 45.2056C69.025 43.5417 66.7583 38.7722 63.8889 38.7722C60.9389 38.7722 58.6417 43.8472 58.1889 45.2056C57.7028 46.6583 56.1444 47.45 54.675 46.9611C53.2222 46.4778 52.4333 44.9028 52.9194 43.4472C53.2667 42.4 56.5417 33.2139 63.8861 33.2139C71.2306 33.2139 74.5056 42.4 74.8528 43.4472C75.3389 44.9028 74.5528 46.4778 73.0972 46.9611C72.8083 47.0611 72.5139 47.1056 72.2222 47.1056ZM75.9306 57.475C75.4361 57.0278 74.6972 57 74.1667 57.3945C74.0583 57.475 63.2722 65.45 50 65.45C36.7611 65.45 25.9389 57.475 25.8333 57.3945C25.3028 57 24.5639 57.0333 24.0694 57.475C23.5778 57.9195 23.4667 58.6528 23.8083 59.2195C24.1667 59.8167 32.7444 73.7833 50 73.7833C67.2556 73.7833 75.8361 59.8167 76.1917 59.2195C76.5333 58.65 76.425 57.9222 75.9306 57.475Z",fill:"#664500"}),O.createElement("path",{d:"M58.9695 10.9639C58.9695 11.6306 59.0528 12.275 59.1972 12.8972C60.3778 20.2389 68.5417 27.9833 74.3917 30.1111C79.0167 28.4306 85.075 23.2333 87.9972 17.5028C82.1945 10.725 74.6111 5.51945 65.9722 2.60834C61.9945 3.32223 58.9695 6.78056 58.9695 10.9639ZM38.175 80.7722C38.3333 80.1 38.425 79.4 38.425 78.6778C38.425 73.5861 34.2972 69.4583 29.2056 69.4583C26.1139 69.4583 23.3889 70.9833 21.7139 73.3167C20.0417 70.9861 17.3139 69.4583 14.2222 69.4583C10.775 69.4583 7.80278 71.3722 6.22223 74.175C11.2889 83.3278 19.1389 90.7222 28.6333 95.2139C33.1806 91.4611 37.3306 86.0278 38.175 80.7722ZM95.2806 71.2278C94.4972 68.5889 92.0806 66.6528 89.1861 66.6528C87.0445 66.6528 85.1556 67.7083 83.9972 69.325C82.8389 67.7083 80.95 66.6528 78.8083 66.6528C75.2806 66.6528 72.4222 69.5111 72.4222 73.0389C72.4222 73.5389 72.4861 74.0222 72.5945 74.4889C73.4472 79.7806 79.1167 85.3111 83.4528 87.1583C88.3861 82.7139 92.4278 77.3056 95.2806 71.2278Z",fill:"#FFAC33"}),O.createElement("path",{d:"M93.4028 9.08055C93.4028 4.38055 89.5917 0.57222 84.8945 0.57222C82.0417 0.57222 79.525 1.98055 77.9806 4.13333C76.4361 1.98055 73.9194 0.57222 71.0667 0.57222C66.3667 0.57222 62.5583 4.38055 62.5583 9.08055C62.5583 9.74722 62.6417 10.3917 62.7861 11.0139C63.9695 18.3556 72.1306 26.1 77.9806 28.2278C83.8306 26.1 91.9917 18.3556 93.1722 11.0167C93.3195 10.3917 93.4028 9.74722 93.4028 9.08055ZM33.9111 78.9111C33.9111 73.8195 29.7833 69.6917 24.6917 69.6917C21.6 69.6917 18.875 71.2167 17.2 73.55C15.5278 71.2167 12.8 69.6917 9.70834 69.6917C4.61667 69.6917 0.488892 73.8195 0.488892 78.9111C0.488892 79.6333 0.580558 80.3306 0.736114 81.0056C2.01667 88.9583 10.8583 97.35 17.1972 99.6556C23.5361 97.3528 32.3778 88.9611 33.6583 81.0083C33.8194 80.3306 33.9111 79.6306 33.9111 78.9111ZM99.8556 72.575C99.8556 69.0472 96.9972 66.1889 93.4695 66.1889C91.3278 66.1889 89.4389 67.2444 88.2806 68.8611C87.1222 67.2444 85.2333 66.1889 83.0917 66.1889C79.5639 66.1889 76.7056 69.0472 76.7056 72.575C76.7056 73.075 76.7695 73.5583 76.8778 74.025C77.7639 79.5333 83.8889 85.3472 88.2806 86.9417C92.6695 85.3472 98.7972 79.5333 99.6806 74.025C99.7917 73.5583 99.8556 73.075 99.8556 72.575Z",fill:"#DD2E44"})),O.createElement("defs",null,O.createElement("clipPath",{id:"clip0_3_44"},O.createElement("rect",{width:100,height:100,fill:"white"})))),nQ=e=>e.mapObj,oQ=e=>{const t=X(nQ),r=[l.jsx(Fi,{},ee()),l.jsx(S3,{},ee()),l.jsx(pr,{},ee()),l.jsx(hn,{},ee()),l.jsx(Tn,{},ee()),l.jsx($r,{},ee()),l.jsx(On,{},ee()),l.jsx(vn,{},ee()),l.jsx(Nr,{},ee()),l.jsx(C3,{},ee()),l.jsx(Vo,{},ee())],n=[l.jsx(Fi,{},ee()),l.jsx(pr,{},ee()),l.jsx(hn,{},ee()),l.jsx(Tn,{},ee()),l.jsx($r,{},ee()),l.jsx(On,{},ee()),l.jsx(vn,{},ee()),l.jsx(Nr,{},ee()),l.jsx(Vo,{},ee())],o=[l.jsx(pr,{},ee()),l.jsx(hn,{},ee()),l.jsx(Tn,{},ee()),l.jsx($r,{},ee()),l.jsx(On,{},ee()),l.jsx(vn,{},ee()),l.jsx(Nr,{},ee())],i=[l.jsx(hn,{},ee()),l.jsx(Tn,{},ee()),l.jsx($r,{},ee()),l.jsx(On,{},ee()),l.jsx(vn,{},ee())];let a=[];t.emojiArrayType[0]==="emoji5Array"&&(a=[...r]),t.emojiArrayType[0]==="emoji4Array"&&(a=[...n]),t.emojiArrayType[0]==="emoji3Array"&&(a=[...o]),t.emojiArrayType[0]==="emoji2Array"&&(a=[...i]);const s=[...t.qSortHeaderNumbers],c=[...t.columnHeadersColorsArray];let u=+e.columnWidth;const f=[...t.colTextLabelsArray];let d,g=t.useColLabelNums[0];(g!==void 0||g!==null)&&(g===!1||g==="false"?d=!1:d=!0);let p,m=t.useColLabelText[0];(m!==void 0||m!==null)&&(m===!1||m==="false"?p=!1:p=!0);let h,y=t.useColLabelEmoji[0];return(y!==void 0||y!==null)&&(y===!1||y==="false"?h=!1:h=!0),l.jsx(iQ,{id:"colorBarDivContainer",children:s.map((v,x)=>l.jsx(aQ,{width:u,color:c[x],count:c.length,children:l.jsxs(sQ,{children:[h&&l.jsx(_x,{children:a[x]}),l.jsxs(uQ,{children:[d&&l.jsx(lQ,{children:v}),p&&l.jsx(cQ,{children:f[x]})]}),h&&l.jsx(_x,{children:a[x]})]})},ee()))})},iQ=C.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  /* background-color: #d8d8d8; */
  margin-bottom: 0px;
  /* border-right: 1px solid whitesmoke;
  border-left: 1px solid whitesmoke; */
  height: 28px;
`,aQ=C.div`
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
  height: 28px;
  border-bottom: 1.5px solid black;
`,sQ=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;
  padding-right: 2px;
  padding-left: 2px;
  /* height: 100%; */
`,lQ=C.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
`,_x=C.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* svg {
    width: 100%;
    height: 100%;
  } */
`,cQ=C.div`
  display: flex;
  padding-top: 2px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: 0.75vw;
  text-align: center;
  line-height: 0.8rem;
`,uQ=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  /* outline: 1px solid blue; */
  width: 60%;
  /* max-width: 80%; */
`;function dQ(e,t){let r;return()=>{clearTimeout(r),r=setTimeout(()=>{r=null,e.apply(this,arguments)},t)}}const fQ=e=>e.langObj,gQ=e=>e.configObj,pQ=e=>e.mapObj,mQ=e=>e.cardFontSizeSort,hQ=e=>e.topMargin,vQ=e=>e.setPresortNoReturn,xQ=e=>e.setCurrentPage,yQ=e=>e.setTopMargin,bQ=e=>e.setDisplayNextButton;let SQ=e=>e.cardHeightSort;const Fx=()=>{const e=X(fQ),t=X(pQ),r=X(gQ),n=r.useImages;let o=E(mQ);const i=E(hQ),a=E(vQ),s=E(xQ),c=E(yQ),u=E(bQ),f=[...t.qSortPattern];let d=E(SQ);const g=+localStorage.getItem("cardHeightSort"),p=+localStorage.getItem("fontSizeSort");g&&(d=g),p&&(o=p);const[m,h]=O.useState({height:window.innerHeight,width:document.body.clientWidth}),[y,v]=O.useState(150);u(!0);const x=r.headerBarColor,S=r.defaultFontColor,I=A(D(e.sortDisagreement))||"",k=A(D(e.sortAgreement))||"",T=A(D(e.condOfInst))||"",P=f.length,N=O.useMemo(()=>{if(P>12)return 170;if(P>10)return 145;if(P>8)return 120;if(P>6)return 96;if(P>0)return 70},[P]);O.useEffect(()=>{const F=m.width/f.length;v(F);const V=dQ(function(){h({height:window.innerHeight,width:document.body.clientWidth})},200);return window.addEventListener("resize",V),()=>{window.removeEventListener("resize",V)}},[m,f.length,N]),O.useEffect(()=>{const F=+JSON.parse(localStorage.getItem("sortGridMarginTop"));let V=document.getElementById("sortTitleBarContainer").clientHeight;V=+JSON.stringify(V),setTimeout(()=>{F!==V?(c(V),localStorage.setItem("sortGridMarginTop",JSON.stringify(V))):c(+F)},50)});const j=O.useRef(null);return O.useEffect(()=>(j.current=Date.now(),(async()=>{await a(!0),await s("sort"),localStorage.setItem("currentPage","sort")})(),()=>{Sr(j.current,"sortPage","sortPage")}),[a,s]),l.jsxs(le.Fragment,{children:[l.jsx(Mn,{}),l.jsx(RJ,{}),l.jsx(KJ,{}),l.jsx(HJ,{}),l.jsx(eQ,{}),l.jsxs(CQ,{id:"sortTitleBarContainer",children:[l.jsxs(wQ,{id:"sortTitleBar",background:x,children:[l.jsx(OQ,{children:I}),l.jsx(jQ,{fontSize:r.condOfInstFontSize,children:T}),l.jsx(TQ,{children:k})]}),l.jsx(oQ,{columnWidth:y})]}),l.jsxs(IQ,{marginTop:i,children:[n?l.jsx(EJ,{id:"sortGridImages",dimensions:m,cardFontSize:o,fontColor:S,columnWidth:y,cardHeight:d}):l.jsx(iJ,{id:"sortGridDiv",dimensions:m,cardFontSize:o,fontColor:S,columnWidth:y,cardHeight:d}),";"]})]})},CQ=C.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  position: fixed;
  top: 0;
  z-index: 999;
`,wQ=C.div`
  width: 100vw;
  padding-left: 1.5vw;
  padding-right: 1.5vw;
  padding-bottom: 5px;
  display: inline-grid;
  grid-template-columns: 15% 1fr 15%;
  color: black;
  font-weight: bold;
  background-color: ${e=>e.background};
`,jQ=C.div`
  color: white;
  max-width: 80vw;
  font-size: ${e=>`${e.fontSize}px`};
  padding: 5px;
  border-radius: 5px;
  text-align: center;
  align-self: end;
`,TQ=C.div`
  font-size: 22px;
  align-self: end;
  justify-self: end;
  color: white;
  padding-bottom: 5px;
  margin-right: 20px;
`,OQ=C.div`
  font-size: 22px;
  align-self: end;
  justify-self: start;
  color: white;
  padding-bottom: 5px;
`,IQ=C.div`
  margin-top: ${e=>`${e.marginTop}px`};
  margin-bottom: 250px;
  /* background-color: #83cafe; */
`,EQ=(e,t,r)=>{const n={},o=t.qSortPattern,i=t.qSortHeaders,a=+o[o.length-1],s=+i[i.length-1],c=+o[o.length-2],u=+i[i.length-2],f=+o[0],d=i[0],g=+o[1],p=i[1];console.log(JSON.stringify(e,null,2));let m=JSON.parse(localStorage.getItem("noResponseCheckArrayHC1"))||[],h=JSON.parse(localStorage.getItem("noResponseCheckArrayHC2"))||[],y=JSON.parse(localStorage.getItem("noResponseCheckArrayLC1"))||[],x=[...JSON.parse(localStorage.getItem("noResponseCheckArrayLC2"))||[],...y,...h,...m];console.log("zzz",x);let S={};x.forEach(P=>{let N=P.split(":"),j=N[0].trim(),F=N[1].trim();S[j]=F}),console.log("zzz",JSON.stringify(S));const I=a;for(let P=0;P<I;P++){let N=`column${s}_${P}`;Object.prototype.hasOwnProperty.call(e,N)||(e[N]=`(${S[N]}): no response`)}if(r.showSecondPosColumn===!0){const P=c;for(let N=0;N<P;N++){let j=`column${u}_${N}`;Object.prototype.hasOwnProperty.call(e,j)||(e[j]=`(${S[j]}): no response`)}}if(r.showSecondNegColumn===!0){const P=g;for(let N=0;N<P;N++){let j=`column${p}_${N}`;Object.prototype.hasOwnProperty.call(e,j)||(e[j]=`(${S[j]}): no response`)}}const k=f;for(let P=0;P<k;P++){let N=`column${d}_${P}`;Object.prototype.hasOwnProperty.call(e,N)||(e[N]=`(${S[N]}): no response`)}let T=Object.keys(e);T.sort();for(let P=0;P<T.length;P++)n[T[P]]=e[T[P]];return n},PQ=e=>e.langObj,$Q=e=>e.triggerTransmissionOKModal,kQ=e=>e.setTriggerTransmissionOKModal,NQ=e=>e.setDisplayGoodbyeMessage,ph=()=>{const e=X(PQ),t=E($Q),r=E(kQ),n=E(NQ),o=A(D(e.transferOkModalHeader))||"",i=A(D(e.transferOkModalText))||"",a=()=>{r(!1),n(!0)};return l.jsxs(Re,{className:"customModal",open:t,onClose:a,center:!0,children:[l.jsx(MQ,{children:o}),l.jsx("hr",{}),l.jsx(AQ,{children:i})]})},MQ=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;
  text-align: center;
  margin-top: 25px;

  hr {
    color: black;
  }
`,AQ=C.div`
  margin-top: 15px;
  text-align: center;
`,DQ=e=>e.langObj,RQ=e=>e.triggerTransmissionFailModal,LQ=e=>e.setTriggerTransmissionFailModal,mh=()=>{const e=X(DQ),t=E(RQ),r=E(LQ),n=A(D(e.transferFailModalHeader))||"",o=A(D(e.transferFailModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(_Q,{children:n}),l.jsx("hr",{}),l.jsx(FQ,{children:o})]})},_Q=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,FQ=C.div`
  margin-top: 15px;
`,BQ=e=>e.setLocalStoredQsorts,zQ=e=>e.localStoredQsorts,HQ=e=>e.setHasDownloadedQsorts,UQ=e=>e.setTriggerLocalSubmitSuccessModal,VQ=e=>e.surveyQuestionObjArray,WQ=e=>e.langObj,qQ=e=>{console.log("props.results",e.results);const t=X(WQ),r=to(BQ);let n=to(zQ);const o=to(HQ),i=E(UQ),a=X(VQ);console.log("surveyQuestionObjArray",a);const s=A(D(t.localSaveDataButton))||"",c=u=>{u.preventDefault(),u.target.disabled=!0;try{let f=localStorage.getItem("localParticipantName"),d=localStorage.getItem("localUsercode");const g=JSON.parse(JSON.stringify(e.results));g.partId=f,g.usercode=d;const m=ee().substring(0,8);n[m]=g,r(n),localStorage.removeItem("cumulativelandingPageDuration"),localStorage.removeItem("cumulativepresortPageDuration"),localStorage.removeItem("cumulativesortPageDuration"),localStorage.removeItem("cumulativepostsortPageDuration"),localStorage.removeItem("cumulativesurveyPageDuration"),localStorage.removeItem("lastAccesslandingPage"),localStorage.removeItem("lastAccesspresortPage"),localStorage.removeItem("lastAccesssortPage"),localStorage.removeItem("lastAccesspostsortPage"),localStorage.removeItem("lastAccesssurveyPage"),localStorage.removeItem("timeOnlandingPage"),localStorage.removeItem("timeOnpresortPage"),localStorage.removeItem("timeOnsortPage"),localStorage.removeItem("timeOnpostsortPage"),localStorage.removeItem("timeOnsurveyPage"),localStorage.removeItem("resultsSurvey"),localStorage.removeItem("resultsSort"),localStorage.removeItem("resultsPresort"),localStorage.removeItem("resultsPostsort"),localStorage.removeItem("HC-requiredCommentsObj"),localStorage.removeItem("HC2-requiredCommentsObj"),localStorage.removeItem("LC-requiredCommentsObj"),localStorage.removeItem("LC2-requiredCommentsObj"),localStorage.removeItem("postsortCommentCardCount"),localStorage.removeItem("allCommentsObj"),localStorage.removeItem("localParticipantName"),localStorage.removeItem("localUsercode"),a.forEach(h=>{localStorage.removeItem(h.id)}),i(!0),o(!1)}catch{u.target.disabled=!1}};return l.jsxs(le.Fragment,{children:[l.jsx(ph,{}),l.jsx(mh,{}),l.jsx(GQ,{tabindex:"0",onClick:u=>c(u),children:s})]})},GQ=C.button`
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
`,KQ=e=>e.langObj,JQ=e=>e.setPresortNoReturn,QQ=e=>e.setColumnStatements,YQ=e=>e.resetColumnStatements,ZQ=e=>{const t=X(KQ),r=E(JQ),n=X(QQ),o=X(YQ),i=Hm(o),a=A(D(t.returnToLocalPanelButtonText))||"",{history:s,onClick:c}=e;let u=async function(f){await new Promise((d,g)=>window.location.reload())};return l.jsx(le.Fragment,{children:l.jsx(eY,{onClick:f=>{c&&c(f),r(!1),n(i),s.push("/"),u()},children:a})})},XQ=Ki(ZQ),eY=C.button`
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
`,tY=e=>e.langObj,rY=e=>e.triggerLocalSubmitSuccessModal,nY=()=>{const e=X(tY),t=E(rY),r=A(D(e.localSubmitSuccessModalHeader))||"",n=A(D(e.localSubmitSuccessModalText))||"",o=()=>{};return l.jsxs(Re,{className:"customModal",open:t,onClose:o,center:!0,children:[l.jsx(oY,{children:r}),l.jsx("hr",{}),l.jsx(iY,{children:n}),l.jsx(aY,{children:l.jsx(XQ,{})})]})},oY=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,iY=C.div`
  margin-top: 15px;
`,aY=C.div`
  display: flex;
  justify-content: flex-end;
`,w3=(e,t,r)=>{if(e.length===0||e===void 0)return;let n=Object.keys(e.vCols);const o=[];let i,a,s;if(t!==void 0){let f=t==null?void 0:t.posStateNums,d=t==null?void 0:t.neuStateNums,g=t==null?void 0:t.negStateNums;i=f.split(","),a=d.split(","),s=g.split(","),i=i.filter(p=>p),s=s.filter(p=>p),a=a.filter(p=>p)}for(let f=0;f<n.length;f++){let d=e==null?void 0:e.vCols[n[f]],g,p=n[f];const m=/column/gi,h=/N/gi;p=p.replace(m,""),p=p.replace(h,"-");const y=parseInt(p,10);for(let v=0;v<d.length;v++){let x={},S=d[v].statementNum.toString(),I=parseInt(d[v].statementNum,10);x.statement=I,x.sortValue=y,i.includes(S)&&(g="p"),a.includes(S)&&(g="u"),s.includes(S)&&(g="n"),x.presortVal=g,o.push(x)}}o.sort((f,d)=>f.statement-d.statement);let c="",u="";for(let f=0;f<o.length;f++)c+=`${o[f].sortValue}|`,u+=`${o[f].statement}*${o[f].presortVal}*${o[f].sortValue}|`;return c.charAt(c.length-1)==="|"&&(c=c.substring(0,c.length-1)),u.charAt(u.length-1)==="|"&&(u=u.substring(0,u.length-1)),r===!0||r==="true"?{sort:c,presortTrace:u}:{sort:c}},sY=e=>{if(e.length===0||e===void 0)return;let t=Object.keys(e.vCols);const r=[];for(let i=0;i<t.length;i++){let a=e==null?void 0:e.vCols[t[i]],s,c=t[i];const u=/column/gi,f=/N/gi;c=c.replace(u,""),c=c.replace(f,"-");const d=parseInt(c,10);for(let g=0;g<a.length;g++){let p={},m=parseInt(a[g].statementNum,10);p.statement=m,p.sortValue=d,a[g].psValue>0&&(s="p"),a[g].psValue===0&&(s="u"),a[g].psValue<0&&(s="n"),p.presortVal=s,r.push(p)}}r.sort((i,a)=>i.statement-a.statement),console.log("sortArray",JSON.stringify(r));let n="",o="";for(let i=0;i<r.length;i++)n+=`${r[i].sortValue}|`,o+=`${r[i].statement}*${r[i].presortVal}*${r[i].sortValue}|`;return n.charAt(n.length-1)==="|"&&(n=n.substring(0,n.length-1)),o.charAt(o.length-1)==="|"&&(o=o.substring(0,o.length-1)),{r20:`sort: ${n}`,r21:`presortTrace: ${o}`}},lY=()=>{try{const e=JSON.parse(localStorage.getItem("resultsPresort")),t={};let r=e==null?void 0:e.npos;isNaN(r)&&(r=0);let n=e==null?void 0:e.nneu;isNaN(n)&&(n=0);let o=e==null?void 0:e.nneg;return isNaN(o)&&(o=0),t.npos=r,t.posStateNums=(e==null?void 0:e.posStateNums)||[],t.nneu=n,t.neuStateNums=(e==null?void 0:e.neuStateNums)||[],t.nneg=o,t.negStateNums=(e==null?void 0:e.negStateNums)||[],t}catch(e){console.log(e);return}};function j3(e,t){return function(){return e.apply(t,arguments)}}const{toString:cY}=Object.prototype,{getPrototypeOf:hh}=Object,{iterator:sd,toStringTag:T3}=Symbol,ld=(e=>t=>{const r=cY.call(t);return e[r]||(e[r]=r.slice(8,-1).toLowerCase())})(Object.create(null)),en=e=>(e=e.toLowerCase(),t=>ld(t)===e),cd=e=>t=>typeof t===e,{isArray:sa}=Array,Os=cd("undefined");function uY(e){return e!==null&&!Os(e)&&e.constructor!==null&&!Os(e.constructor)&&nr(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const O3=en("ArrayBuffer");function dY(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&O3(e.buffer),t}const fY=cd("string"),nr=cd("function"),I3=cd("number"),ud=e=>e!==null&&typeof e=="object",gY=e=>e===!0||e===!1,rc=e=>{if(ld(e)!=="object")return!1;const t=hh(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(T3 in e)&&!(sd in e)},pY=en("Date"),mY=en("File"),hY=en("Blob"),vY=en("FileList"),xY=e=>ud(e)&&nr(e.pipe),yY=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||nr(e.append)&&((t=ld(e))==="formdata"||t==="object"&&nr(e.toString)&&e.toString()==="[object FormData]"))},bY=en("URLSearchParams"),[SY,CY,wY,jY]=["ReadableStream","Request","Response","Headers"].map(en),TY=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Gs(e,t,{allOwnKeys:r=!1}={}){if(e===null||typeof e>"u")return;let n,o;if(typeof e!="object"&&(e=[e]),sa(e))for(n=0,o=e.length;n<o;n++)t.call(null,e[n],n,e);else{const i=r?Object.getOwnPropertyNames(e):Object.keys(e),a=i.length;let s;for(n=0;n<a;n++)s=i[n],t.call(null,e[s],s,e)}}function E3(e,t){t=t.toLowerCase();const r=Object.keys(e);let n=r.length,o;for(;n-- >0;)if(o=r[n],t===o.toLowerCase())return o;return null}const ko=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,P3=e=>!Os(e)&&e!==ko;function _g(){const{caseless:e}=P3(this)&&this||{},t={},r=(n,o)=>{const i=e&&E3(t,o)||o;rc(t[i])&&rc(n)?t[i]=_g(t[i],n):rc(n)?t[i]=_g({},n):sa(n)?t[i]=n.slice():t[i]=n};for(let n=0,o=arguments.length;n<o;n++)arguments[n]&&Gs(arguments[n],r);return t}const OY=(e,t,r,{allOwnKeys:n}={})=>(Gs(t,(o,i)=>{r&&nr(o)?e[i]=j3(o,r):e[i]=o},{allOwnKeys:n}),e),IY=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),EY=(e,t,r,n)=>{e.prototype=Object.create(t.prototype,n),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),r&&Object.assign(e.prototype,r)},PY=(e,t,r,n)=>{let o,i,a;const s={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),i=o.length;i-- >0;)a=o[i],(!n||n(a,e,t))&&!s[a]&&(t[a]=e[a],s[a]=!0);e=r!==!1&&hh(e)}while(e&&(!r||r(e,t))&&e!==Object.prototype);return t},$Y=(e,t,r)=>{e=String(e),(r===void 0||r>e.length)&&(r=e.length),r-=t.length;const n=e.indexOf(t,r);return n!==-1&&n===r},kY=e=>{if(!e)return null;if(sa(e))return e;let t=e.length;if(!I3(t))return null;const r=new Array(t);for(;t-- >0;)r[t]=e[t];return r},NY=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&hh(Uint8Array)),MY=(e,t)=>{const n=(e&&e[sd]).call(e);let o;for(;(o=n.next())&&!o.done;){const i=o.value;t.call(e,i[0],i[1])}},AY=(e,t)=>{let r;const n=[];for(;(r=e.exec(t))!==null;)n.push(r);return n},DY=en("HTMLFormElement"),RY=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(r,n,o){return n.toUpperCase()+o}),Bx=(({hasOwnProperty:e})=>(t,r)=>e.call(t,r))(Object.prototype),LY=en("RegExp"),$3=(e,t)=>{const r=Object.getOwnPropertyDescriptors(e),n={};Gs(r,(o,i)=>{let a;(a=t(o,i,e))!==!1&&(n[i]=a||o)}),Object.defineProperties(e,n)},_Y=e=>{$3(e,(t,r)=>{if(nr(e)&&["arguments","caller","callee"].indexOf(r)!==-1)return!1;const n=e[r];if(nr(n)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+r+"'")})}})},FY=(e,t)=>{const r={},n=o=>{o.forEach(i=>{r[i]=!0})};return sa(e)?n(e):n(String(e).split(t)),r},BY=()=>{},zY=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t;function HY(e){return!!(e&&nr(e.append)&&e[T3]==="FormData"&&e[sd])}const UY=e=>{const t=new Array(10),r=(n,o)=>{if(ud(n)){if(t.indexOf(n)>=0)return;if(!("toJSON"in n)){t[o]=n;const i=sa(n)?[]:{};return Gs(n,(a,s)=>{const c=r(a,o+1);!Os(c)&&(i[s]=c)}),t[o]=void 0,i}}return n};return r(e,0)},VY=en("AsyncFunction"),WY=e=>e&&(ud(e)||nr(e))&&nr(e.then)&&nr(e.catch),k3=((e,t)=>e?setImmediate:t?((r,n)=>(ko.addEventListener("message",({source:o,data:i})=>{o===ko&&i===r&&n.length&&n.shift()()},!1),o=>{n.push(o),ko.postMessage(r,"*")}))(`axios@${Math.random()}`,[]):r=>setTimeout(r))(typeof setImmediate=="function",nr(ko.postMessage)),qY=typeof queueMicrotask<"u"?queueMicrotask.bind(ko):typeof process<"u"&&process.nextTick||k3,GY=e=>e!=null&&nr(e[sd]),ne={isArray:sa,isArrayBuffer:O3,isBuffer:uY,isFormData:yY,isArrayBufferView:dY,isString:fY,isNumber:I3,isBoolean:gY,isObject:ud,isPlainObject:rc,isReadableStream:SY,isRequest:CY,isResponse:wY,isHeaders:jY,isUndefined:Os,isDate:pY,isFile:mY,isBlob:hY,isRegExp:LY,isFunction:nr,isStream:xY,isURLSearchParams:bY,isTypedArray:NY,isFileList:vY,forEach:Gs,merge:_g,extend:OY,trim:TY,stripBOM:IY,inherits:EY,toFlatObject:PY,kindOf:ld,kindOfTest:en,endsWith:$Y,toArray:kY,forEachEntry:MY,matchAll:AY,isHTMLForm:DY,hasOwnProperty:Bx,hasOwnProp:Bx,reduceDescriptors:$3,freezeMethods:_Y,toObjectSet:FY,toCamelCase:RY,noop:BY,toFiniteNumber:zY,findKey:E3,global:ko,isContextDefined:P3,isSpecCompliantForm:HY,toJSONObject:UY,isAsyncFn:VY,isThenable:WY,setImmediate:k3,asap:qY,isIterable:GY};function Ie(e,t,r,n,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),r&&(this.config=r),n&&(this.request=n),o&&(this.response=o,this.status=o.status?o.status:null)}ne.inherits(Ie,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ne.toJSONObject(this.config),code:this.code,status:this.status}}});const N3=Ie.prototype,M3={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{M3[e]={value:e}});Object.defineProperties(Ie,M3);Object.defineProperty(N3,"isAxiosError",{value:!0});Ie.from=(e,t,r,n,o,i)=>{const a=Object.create(N3);return ne.toFlatObject(e,a,function(c){return c!==Error.prototype},s=>s!=="isAxiosError"),Ie.call(a,e.message,t,r,n,o),a.cause=e,a.name=e.name,i&&Object.assign(a,i),a};const KY=null;function Fg(e){return ne.isPlainObject(e)||ne.isArray(e)}function A3(e){return ne.endsWith(e,"[]")?e.slice(0,-2):e}function zx(e,t,r){return e?e.concat(t).map(function(o,i){return o=A3(o),!r&&i?"["+o+"]":o}).join(r?".":""):t}function JY(e){return ne.isArray(e)&&!e.some(Fg)}const QY=ne.toFlatObject(ne,{},null,function(t){return/^is[A-Z]/.test(t)});function dd(e,t,r){if(!ne.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,r=ne.toFlatObject(r,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,y){return!ne.isUndefined(y[h])});const n=r.metaTokens,o=r.visitor||f,i=r.dots,a=r.indexes,c=(r.Blob||typeof Blob<"u"&&Blob)&&ne.isSpecCompliantForm(t);if(!ne.isFunction(o))throw new TypeError("visitor must be a function");function u(m){if(m===null)return"";if(ne.isDate(m))return m.toISOString();if(!c&&ne.isBlob(m))throw new Ie("Blob is not supported. Use a Buffer instead.");return ne.isArrayBuffer(m)||ne.isTypedArray(m)?c&&typeof Blob=="function"?new Blob([m]):Buffer.from(m):m}function f(m,h,y){let v=m;if(m&&!y&&typeof m=="object"){if(ne.endsWith(h,"{}"))h=n?h:h.slice(0,-2),m=JSON.stringify(m);else if(ne.isArray(m)&&JY(m)||(ne.isFileList(m)||ne.endsWith(h,"[]"))&&(v=ne.toArray(m)))return h=A3(h),v.forEach(function(S,I){!(ne.isUndefined(S)||S===null)&&t.append(a===!0?zx([h],I,i):a===null?h:h+"[]",u(S))}),!1}return Fg(m)?!0:(t.append(zx(y,h,i),u(m)),!1)}const d=[],g=Object.assign(QY,{defaultVisitor:f,convertValue:u,isVisitable:Fg});function p(m,h){if(!ne.isUndefined(m)){if(d.indexOf(m)!==-1)throw Error("Circular reference detected in "+h.join("."));d.push(m),ne.forEach(m,function(v,x){(!(ne.isUndefined(v)||v===null)&&o.call(t,v,ne.isString(x)?x.trim():x,h,g))===!0&&p(v,h?h.concat(x):[x])}),d.pop()}}if(!ne.isObject(e))throw new TypeError("data must be an object");return p(e),t}function Hx(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(n){return t[n]})}function vh(e,t){this._pairs=[],e&&dd(e,this,t)}const D3=vh.prototype;D3.append=function(t,r){this._pairs.push([t,r])};D3.toString=function(t){const r=t?function(n){return t.call(this,n,Hx)}:Hx;return this._pairs.map(function(o){return r(o[0])+"="+r(o[1])},"").join("&")};function YY(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function R3(e,t,r){if(!t)return e;const n=r&&r.encode||YY;ne.isFunction(r)&&(r={serialize:r});const o=r&&r.serialize;let i;if(o?i=o(t,r):i=ne.isURLSearchParams(t)?t.toString():new vh(t,r).toString(n),i){const a=e.indexOf("#");a!==-1&&(e=e.slice(0,a)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Ux{constructor(){this.handlers=[]}use(t,r,n){return this.handlers.push({fulfilled:t,rejected:r,synchronous:n?n.synchronous:!1,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){ne.forEach(this.handlers,function(n){n!==null&&t(n)})}}const L3={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ZY=typeof URLSearchParams<"u"?URLSearchParams:vh,XY=typeof FormData<"u"?FormData:null,eZ=typeof Blob<"u"?Blob:null,tZ={isBrowser:!0,classes:{URLSearchParams:ZY,FormData:XY,Blob:eZ},protocols:["http","https","file","blob","url","data"]},xh=typeof window<"u"&&typeof document<"u",Bg=typeof navigator=="object"&&navigator||void 0,rZ=xh&&(!Bg||["ReactNative","NativeScript","NS"].indexOf(Bg.product)<0),nZ=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",oZ=xh&&window.location.href||"http://localhost",iZ=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:xh,hasStandardBrowserEnv:rZ,hasStandardBrowserWebWorkerEnv:nZ,navigator:Bg,origin:oZ},Symbol.toStringTag,{value:"Module"})),Rt={...iZ,...tZ};function aZ(e,t){return dd(e,new Rt.classes.URLSearchParams,Object.assign({visitor:function(r,n,o,i){return Rt.isNode&&ne.isBuffer(r)?(this.append(n,r.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function sZ(e){return ne.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function lZ(e){const t={},r=Object.keys(e);let n;const o=r.length;let i;for(n=0;n<o;n++)i=r[n],t[i]=e[i];return t}function _3(e){function t(r,n,o,i){let a=r[i++];if(a==="__proto__")return!0;const s=Number.isFinite(+a),c=i>=r.length;return a=!a&&ne.isArray(o)?o.length:a,c?(ne.hasOwnProp(o,a)?o[a]=[o[a],n]:o[a]=n,!s):((!o[a]||!ne.isObject(o[a]))&&(o[a]=[]),t(r,n,o[a],i)&&ne.isArray(o[a])&&(o[a]=lZ(o[a])),!s)}if(ne.isFormData(e)&&ne.isFunction(e.entries)){const r={};return ne.forEachEntry(e,(n,o)=>{t(sZ(n),o,r,0)}),r}return null}function cZ(e,t,r){if(ne.isString(e))try{return(t||JSON.parse)(e),ne.trim(e)}catch(n){if(n.name!=="SyntaxError")throw n}return(0,JSON.stringify)(e)}const Ks={transitional:L3,adapter:["xhr","http","fetch"],transformRequest:[function(t,r){const n=r.getContentType()||"",o=n.indexOf("application/json")>-1,i=ne.isObject(t);if(i&&ne.isHTMLForm(t)&&(t=new FormData(t)),ne.isFormData(t))return o?JSON.stringify(_3(t)):t;if(ne.isArrayBuffer(t)||ne.isBuffer(t)||ne.isStream(t)||ne.isFile(t)||ne.isBlob(t)||ne.isReadableStream(t))return t;if(ne.isArrayBufferView(t))return t.buffer;if(ne.isURLSearchParams(t))return r.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let s;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return aZ(t,this.formSerializer).toString();if((s=ne.isFileList(t))||n.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return dd(s?{"files[]":t}:t,c&&new c,this.formSerializer)}}return i||o?(r.setContentType("application/json",!1),cZ(t)):t}],transformResponse:[function(t){const r=this.transitional||Ks.transitional,n=r&&r.forcedJSONParsing,o=this.responseType==="json";if(ne.isResponse(t)||ne.isReadableStream(t))return t;if(t&&ne.isString(t)&&(n&&!this.responseType||o)){const a=!(r&&r.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(s){if(a)throw s.name==="SyntaxError"?Ie.from(s,Ie.ERR_BAD_RESPONSE,this,null,this.response):s}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Rt.classes.FormData,Blob:Rt.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ne.forEach(["delete","get","head","post","put","patch"],e=>{Ks.headers[e]={}});const uZ=ne.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),dZ=e=>{const t={};let r,n,o;return e&&e.split(`
`).forEach(function(a){o=a.indexOf(":"),r=a.substring(0,o).trim().toLowerCase(),n=a.substring(o+1).trim(),!(!r||t[r]&&uZ[r])&&(r==="set-cookie"?t[r]?t[r].push(n):t[r]=[n]:t[r]=t[r]?t[r]+", "+n:n)}),t},Vx=Symbol("internals");function Ea(e){return e&&String(e).trim().toLowerCase()}function nc(e){return e===!1||e==null?e:ne.isArray(e)?e.map(nc):String(e)}function fZ(e){const t=Object.create(null),r=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let n;for(;n=r.exec(e);)t[n[1]]=n[2];return t}const gZ=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function vf(e,t,r,n,o){if(ne.isFunction(n))return n.call(this,t,r);if(o&&(t=r),!!ne.isString(t)){if(ne.isString(n))return t.indexOf(n)!==-1;if(ne.isRegExp(n))return n.test(t)}}function pZ(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,r,n)=>r.toUpperCase()+n)}function mZ(e,t){const r=ne.toCamelCase(" "+t);["get","set","has"].forEach(n=>{Object.defineProperty(e,n+r,{value:function(o,i,a){return this[n].call(this,t,o,i,a)},configurable:!0})})}class or{constructor(t){t&&this.set(t)}set(t,r,n){const o=this;function i(s,c,u){const f=Ea(c);if(!f)throw new Error("header name must be a non-empty string");const d=ne.findKey(o,f);(!d||o[d]===void 0||u===!0||u===void 0&&o[d]!==!1)&&(o[d||c]=nc(s))}const a=(s,c)=>ne.forEach(s,(u,f)=>i(u,f,c));if(ne.isPlainObject(t)||t instanceof this.constructor)a(t,r);else if(ne.isString(t)&&(t=t.trim())&&!gZ(t))a(dZ(t),r);else if(ne.isObject(t)&&ne.isIterable(t)){let s={},c,u;for(const f of t){if(!ne.isArray(f))throw TypeError("Object iterator must return a key-value pair");s[u=f[0]]=(c=s[u])?ne.isArray(c)?[...c,f[1]]:[c,f[1]]:f[1]}a(s,r)}else t!=null&&i(r,t,n);return this}get(t,r){if(t=Ea(t),t){const n=ne.findKey(this,t);if(n){const o=this[n];if(!r)return o;if(r===!0)return fZ(o);if(ne.isFunction(r))return r.call(this,o,n);if(ne.isRegExp(r))return r.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,r){if(t=Ea(t),t){const n=ne.findKey(this,t);return!!(n&&this[n]!==void 0&&(!r||vf(this,this[n],n,r)))}return!1}delete(t,r){const n=this;let o=!1;function i(a){if(a=Ea(a),a){const s=ne.findKey(n,a);s&&(!r||vf(n,n[s],s,r))&&(delete n[s],o=!0)}}return ne.isArray(t)?t.forEach(i):i(t),o}clear(t){const r=Object.keys(this);let n=r.length,o=!1;for(;n--;){const i=r[n];(!t||vf(this,this[i],i,t,!0))&&(delete this[i],o=!0)}return o}normalize(t){const r=this,n={};return ne.forEach(this,(o,i)=>{const a=ne.findKey(n,i);if(a){r[a]=nc(o),delete r[i];return}const s=t?pZ(i):String(i).trim();s!==i&&delete r[i],r[s]=nc(o),n[s]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const r=Object.create(null);return ne.forEach(this,(n,o)=>{n!=null&&n!==!1&&(r[o]=t&&ne.isArray(n)?n.join(", "):n)}),r}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,r])=>t+": "+r).join(`
`)}getSetCookie(){return this.get("set-cookie")||[]}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...r){const n=new this(t);return r.forEach(o=>n.set(o)),n}static accessor(t){const n=(this[Vx]=this[Vx]={accessors:{}}).accessors,o=this.prototype;function i(a){const s=Ea(a);n[s]||(mZ(o,a),n[s]=!0)}return ne.isArray(t)?t.forEach(i):i(t),this}}or.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);ne.reduceDescriptors(or.prototype,({value:e},t)=>{let r=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(n){this[r]=n}}});ne.freezeMethods(or);function xf(e,t){const r=this||Ks,n=t||r,o=or.from(n.headers);let i=n.data;return ne.forEach(e,function(s){i=s.call(r,i,o.normalize(),t?t.status:void 0)}),o.normalize(),i}function F3(e){return!!(e&&e.__CANCEL__)}function la(e,t,r){Ie.call(this,e??"canceled",Ie.ERR_CANCELED,t,r),this.name="CanceledError"}ne.inherits(la,Ie,{__CANCEL__:!0});function B3(e,t,r){const n=r.config.validateStatus;!r.status||!n||n(r.status)?e(r):t(new Ie("Request failed with status code "+r.status,[Ie.ERR_BAD_REQUEST,Ie.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r))}function hZ(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function vZ(e,t){e=e||10;const r=new Array(e),n=new Array(e);let o=0,i=0,a;return t=t!==void 0?t:1e3,function(c){const u=Date.now(),f=n[i];a||(a=u),r[o]=c,n[o]=u;let d=i,g=0;for(;d!==o;)g+=r[d++],d=d%e;if(o=(o+1)%e,o===i&&(i=(i+1)%e),u-a<t)return;const p=f&&u-f;return p?Math.round(g*1e3/p):void 0}}function xZ(e,t){let r=0,n=1e3/t,o,i;const a=(u,f=Date.now())=>{r=f,o=null,i&&(clearTimeout(i),i=null),e.apply(null,u)};return[(...u)=>{const f=Date.now(),d=f-r;d>=n?a(u,f):(o=u,i||(i=setTimeout(()=>{i=null,a(o)},n-d)))},()=>o&&a(o)]}const Zc=(e,t,r=3)=>{let n=0;const o=vZ(50,250);return xZ(i=>{const a=i.loaded,s=i.lengthComputable?i.total:void 0,c=a-n,u=o(c),f=a<=s;n=a;const d={loaded:a,total:s,progress:s?a/s:void 0,bytes:c,rate:u||void 0,estimated:u&&s&&f?(s-a)/u:void 0,event:i,lengthComputable:s!=null,[t?"download":"upload"]:!0};e(d)},r)},Wx=(e,t)=>{const r=e!=null;return[n=>t[0]({lengthComputable:r,total:e,loaded:n}),t[1]]},qx=e=>(...t)=>ne.asap(()=>e(...t)),yZ=Rt.hasStandardBrowserEnv?((e,t)=>r=>(r=new URL(r,Rt.origin),e.protocol===r.protocol&&e.host===r.host&&(t||e.port===r.port)))(new URL(Rt.origin),Rt.navigator&&/(msie|trident)/i.test(Rt.navigator.userAgent)):()=>!0,bZ=Rt.hasStandardBrowserEnv?{write(e,t,r,n,o,i){const a=[e+"="+encodeURIComponent(t)];ne.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),ne.isString(n)&&a.push("path="+n),ne.isString(o)&&a.push("domain="+o),i===!0&&a.push("secure"),document.cookie=a.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function SZ(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function CZ(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function z3(e,t,r){let n=!SZ(t);return e&&(n||r==!1)?CZ(e,t):t}const Gx=e=>e instanceof or?{...e}:e;function qo(e,t){t=t||{};const r={};function n(u,f,d,g){return ne.isPlainObject(u)&&ne.isPlainObject(f)?ne.merge.call({caseless:g},u,f):ne.isPlainObject(f)?ne.merge({},f):ne.isArray(f)?f.slice():f}function o(u,f,d,g){if(ne.isUndefined(f)){if(!ne.isUndefined(u))return n(void 0,u,d,g)}else return n(u,f,d,g)}function i(u,f){if(!ne.isUndefined(f))return n(void 0,f)}function a(u,f){if(ne.isUndefined(f)){if(!ne.isUndefined(u))return n(void 0,u)}else return n(void 0,f)}function s(u,f,d){if(d in t)return n(u,f);if(d in e)return n(void 0,u)}const c={url:i,method:i,data:i,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,withXSRFToken:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:s,headers:(u,f,d)=>o(Gx(u),Gx(f),d,!0)};return ne.forEach(Object.keys(Object.assign({},e,t)),function(f){const d=c[f]||o,g=d(e[f],t[f],f);ne.isUndefined(g)&&d!==s||(r[f]=g)}),r}const H3=e=>{const t=qo({},e);let{data:r,withXSRFToken:n,xsrfHeaderName:o,xsrfCookieName:i,headers:a,auth:s}=t;t.headers=a=or.from(a),t.url=R3(z3(t.baseURL,t.url,t.allowAbsoluteUrls),e.params,e.paramsSerializer),s&&a.set("Authorization","Basic "+btoa((s.username||"")+":"+(s.password?unescape(encodeURIComponent(s.password)):"")));let c;if(ne.isFormData(r)){if(Rt.hasStandardBrowserEnv||Rt.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if((c=a.getContentType())!==!1){const[u,...f]=c?c.split(";").map(d=>d.trim()).filter(Boolean):[];a.setContentType([u||"multipart/form-data",...f].join("; "))}}if(Rt.hasStandardBrowserEnv&&(n&&ne.isFunction(n)&&(n=n(t)),n||n!==!1&&yZ(t.url))){const u=o&&i&&bZ.read(i);u&&a.set(o,u)}return t},wZ=typeof XMLHttpRequest<"u",jZ=wZ&&function(e){return new Promise(function(r,n){const o=H3(e);let i=o.data;const a=or.from(o.headers).normalize();let{responseType:s,onUploadProgress:c,onDownloadProgress:u}=o,f,d,g,p,m;function h(){p&&p(),m&&m(),o.cancelToken&&o.cancelToken.unsubscribe(f),o.signal&&o.signal.removeEventListener("abort",f)}let y=new XMLHttpRequest;y.open(o.method.toUpperCase(),o.url,!0),y.timeout=o.timeout;function v(){if(!y)return;const S=or.from("getAllResponseHeaders"in y&&y.getAllResponseHeaders()),k={data:!s||s==="text"||s==="json"?y.responseText:y.response,status:y.status,statusText:y.statusText,headers:S,config:e,request:y};B3(function(P){r(P),h()},function(P){n(P),h()},k),y=null}"onloadend"in y?y.onloadend=v:y.onreadystatechange=function(){!y||y.readyState!==4||y.status===0&&!(y.responseURL&&y.responseURL.indexOf("file:")===0)||setTimeout(v)},y.onabort=function(){y&&(n(new Ie("Request aborted",Ie.ECONNABORTED,e,y)),y=null)},y.onerror=function(){n(new Ie("Network Error",Ie.ERR_NETWORK,e,y)),y=null},y.ontimeout=function(){let I=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const k=o.transitional||L3;o.timeoutErrorMessage&&(I=o.timeoutErrorMessage),n(new Ie(I,k.clarifyTimeoutError?Ie.ETIMEDOUT:Ie.ECONNABORTED,e,y)),y=null},i===void 0&&a.setContentType(null),"setRequestHeader"in y&&ne.forEach(a.toJSON(),function(I,k){y.setRequestHeader(k,I)}),ne.isUndefined(o.withCredentials)||(y.withCredentials=!!o.withCredentials),s&&s!=="json"&&(y.responseType=o.responseType),u&&([g,m]=Zc(u,!0),y.addEventListener("progress",g)),c&&y.upload&&([d,p]=Zc(c),y.upload.addEventListener("progress",d),y.upload.addEventListener("loadend",p)),(o.cancelToken||o.signal)&&(f=S=>{y&&(n(!S||S.type?new la(null,e,y):S),y.abort(),y=null)},o.cancelToken&&o.cancelToken.subscribe(f),o.signal&&(o.signal.aborted?f():o.signal.addEventListener("abort",f)));const x=hZ(o.url);if(x&&Rt.protocols.indexOf(x)===-1){n(new Ie("Unsupported protocol "+x+":",Ie.ERR_BAD_REQUEST,e));return}y.send(i||null)})},TZ=(e,t)=>{const{length:r}=e=e?e.filter(Boolean):[];if(t||r){let n=new AbortController,o;const i=function(u){if(!o){o=!0,s();const f=u instanceof Error?u:this.reason;n.abort(f instanceof Ie?f:new la(f instanceof Error?f.message:f))}};let a=t&&setTimeout(()=>{a=null,i(new Ie(`timeout ${t} of ms exceeded`,Ie.ETIMEDOUT))},t);const s=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(u=>{u.unsubscribe?u.unsubscribe(i):u.removeEventListener("abort",i)}),e=null)};e.forEach(u=>u.addEventListener("abort",i));const{signal:c}=n;return c.unsubscribe=()=>ne.asap(s),c}},OZ=function*(e,t){let r=e.byteLength;if(r<t){yield e;return}let n=0,o;for(;n<r;)o=n+t,yield e.slice(n,o),n=o},IZ=async function*(e,t){for await(const r of EZ(e))yield*OZ(r,t)},EZ=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:r,value:n}=await t.read();if(r)break;yield n}}finally{await t.cancel()}},Kx=(e,t,r,n)=>{const o=IZ(e,t);let i=0,a,s=c=>{a||(a=!0,n&&n(c))};return new ReadableStream({async pull(c){try{const{done:u,value:f}=await o.next();if(u){s(),c.close();return}let d=f.byteLength;if(r){let g=i+=d;r(g)}c.enqueue(new Uint8Array(f))}catch(u){throw s(u),u}},cancel(c){return s(c),o.return()}},{highWaterMark:2})},fd=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",U3=fd&&typeof ReadableStream=="function",PZ=fd&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),V3=(e,...t)=>{try{return!!e(...t)}catch{return!1}},$Z=U3&&V3(()=>{let e=!1;const t=new Request(Rt.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Jx=64*1024,zg=U3&&V3(()=>ne.isReadableStream(new Response("").body)),Xc={stream:zg&&(e=>e.body)};fd&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!Xc[t]&&(Xc[t]=ne.isFunction(e[t])?r=>r[t]():(r,n)=>{throw new Ie(`Response type '${t}' is not supported`,Ie.ERR_NOT_SUPPORT,n)})})})(new Response);const kZ=async e=>{if(e==null)return 0;if(ne.isBlob(e))return e.size;if(ne.isSpecCompliantForm(e))return(await new Request(Rt.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(ne.isArrayBufferView(e)||ne.isArrayBuffer(e))return e.byteLength;if(ne.isURLSearchParams(e)&&(e=e+""),ne.isString(e))return(await PZ(e)).byteLength},NZ=async(e,t)=>{const r=ne.toFiniteNumber(e.getContentLength());return r??kZ(t)},MZ=fd&&(async e=>{let{url:t,method:r,data:n,signal:o,cancelToken:i,timeout:a,onDownloadProgress:s,onUploadProgress:c,responseType:u,headers:f,withCredentials:d="same-origin",fetchOptions:g}=H3(e);u=u?(u+"").toLowerCase():"text";let p=TZ([o,i&&i.toAbortSignal()],a),m;const h=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let y;try{if(c&&$Z&&r!=="get"&&r!=="head"&&(y=await NZ(f,n))!==0){let k=new Request(t,{method:"POST",body:n,duplex:"half"}),T;if(ne.isFormData(n)&&(T=k.headers.get("content-type"))&&f.setContentType(T),k.body){const[P,N]=Wx(y,Zc(qx(c)));n=Kx(k.body,Jx,P,N)}}ne.isString(d)||(d=d?"include":"omit");const v="credentials"in Request.prototype;m=new Request(t,{...g,signal:p,method:r.toUpperCase(),headers:f.normalize().toJSON(),body:n,duplex:"half",credentials:v?d:void 0});let x=await fetch(m);const S=zg&&(u==="stream"||u==="response");if(zg&&(s||S&&h)){const k={};["status","statusText","headers"].forEach(j=>{k[j]=x[j]});const T=ne.toFiniteNumber(x.headers.get("content-length")),[P,N]=s&&Wx(T,Zc(qx(s),!0))||[];x=new Response(Kx(x.body,Jx,P,()=>{N&&N(),h&&h()}),k)}u=u||"text";let I=await Xc[ne.findKey(Xc,u)||"text"](x,e);return!S&&h&&h(),await new Promise((k,T)=>{B3(k,T,{data:I,headers:or.from(x.headers),status:x.status,statusText:x.statusText,config:e,request:m})})}catch(v){throw h&&h(),v&&v.name==="TypeError"&&/Load failed|fetch/i.test(v.message)?Object.assign(new Ie("Network Error",Ie.ERR_NETWORK,e,m),{cause:v.cause||v}):Ie.from(v,v&&v.code,e,m)}}),Hg={http:KY,xhr:jZ,fetch:MZ};ne.forEach(Hg,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Qx=e=>`- ${e}`,AZ=e=>ne.isFunction(e)||e===null||e===!1,W3={getAdapter:e=>{e=ne.isArray(e)?e:[e];const{length:t}=e;let r,n;const o={};for(let i=0;i<t;i++){r=e[i];let a;if(n=r,!AZ(r)&&(n=Hg[(a=String(r)).toLowerCase()],n===void 0))throw new Ie(`Unknown adapter '${a}'`);if(n)break;o[a||"#"+i]=n}if(!n){const i=Object.entries(o).map(([s,c])=>`adapter ${s} `+(c===!1?"is not supported by the environment":"is not available in the build"));let a=t?i.length>1?`since :
`+i.map(Qx).join(`
`):" "+Qx(i[0]):"as no adapter specified";throw new Ie("There is no suitable adapter to dispatch the request "+a,"ERR_NOT_SUPPORT")}return n},adapters:Hg};function yf(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new la(null,e)}function Yx(e){return yf(e),e.headers=or.from(e.headers),e.data=xf.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),W3.getAdapter(e.adapter||Ks.adapter)(e).then(function(n){return yf(e),n.data=xf.call(e,e.transformResponse,n),n.headers=or.from(n.headers),n},function(n){return F3(n)||(yf(e),n&&n.response&&(n.response.data=xf.call(e,e.transformResponse,n.response),n.response.headers=or.from(n.response.headers))),Promise.reject(n)})}const q3="1.9.0",gd={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{gd[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}});const Zx={};gd.transitional=function(t,r,n){function o(i,a){return"[Axios v"+q3+"] Transitional option '"+i+"'"+a+(n?". "+n:"")}return(i,a,s)=>{if(t===!1)throw new Ie(o(a," has been removed"+(r?" in "+r:"")),Ie.ERR_DEPRECATED);return r&&!Zx[a]&&(Zx[a]=!0,console.warn(o(a," has been deprecated since v"+r+" and will be removed in the near future"))),t?t(i,a,s):!0}};gd.spelling=function(t){return(r,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};function DZ(e,t,r){if(typeof e!="object")throw new Ie("options must be an object",Ie.ERR_BAD_OPTION_VALUE);const n=Object.keys(e);let o=n.length;for(;o-- >0;){const i=n[o],a=t[i];if(a){const s=e[i],c=s===void 0||a(s,i,e);if(c!==!0)throw new Ie("option "+i+" must be "+c,Ie.ERR_BAD_OPTION_VALUE);continue}if(r!==!0)throw new Ie("Unknown option "+i,Ie.ERR_BAD_OPTION)}}const oc={assertOptions:DZ,validators:gd},ln=oc.validators;class Ao{constructor(t){this.defaults=t||{},this.interceptors={request:new Ux,response:new Ux}}async request(t,r){try{return await this._request(t,r)}catch(n){if(n instanceof Error){let o={};Error.captureStackTrace?Error.captureStackTrace(o):o=new Error;const i=o.stack?o.stack.replace(/^.+\n/,""):"";try{n.stack?i&&!String(n.stack).endsWith(i.replace(/^.+\n.+\n/,""))&&(n.stack+=`
`+i):n.stack=i}catch{}}throw n}}_request(t,r){typeof t=="string"?(r=r||{},r.url=t):r=t||{},r=qo(this.defaults,r);const{transitional:n,paramsSerializer:o,headers:i}=r;n!==void 0&&oc.assertOptions(n,{silentJSONParsing:ln.transitional(ln.boolean),forcedJSONParsing:ln.transitional(ln.boolean),clarifyTimeoutError:ln.transitional(ln.boolean)},!1),o!=null&&(ne.isFunction(o)?r.paramsSerializer={serialize:o}:oc.assertOptions(o,{encode:ln.function,serialize:ln.function},!0)),r.allowAbsoluteUrls!==void 0||(this.defaults.allowAbsoluteUrls!==void 0?r.allowAbsoluteUrls=this.defaults.allowAbsoluteUrls:r.allowAbsoluteUrls=!0),oc.assertOptions(r,{baseUrl:ln.spelling("baseURL"),withXsrfToken:ln.spelling("withXSRFToken")},!0),r.method=(r.method||this.defaults.method||"get").toLowerCase();let a=i&&ne.merge(i.common,i[r.method]);i&&ne.forEach(["delete","get","head","post","put","patch","common"],m=>{delete i[m]}),r.headers=or.concat(a,i);const s=[];let c=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(r)===!1||(c=c&&h.synchronous,s.unshift(h.fulfilled,h.rejected))});const u=[];this.interceptors.response.forEach(function(h){u.push(h.fulfilled,h.rejected)});let f,d=0,g;if(!c){const m=[Yx.bind(this),void 0];for(m.unshift.apply(m,s),m.push.apply(m,u),g=m.length,f=Promise.resolve(r);d<g;)f=f.then(m[d++],m[d++]);return f}g=s.length;let p=r;for(d=0;d<g;){const m=s[d++],h=s[d++];try{p=m(p)}catch(y){h.call(this,y);break}}try{f=Yx.call(this,p)}catch(m){return Promise.reject(m)}for(d=0,g=u.length;d<g;)f=f.then(u[d++],u[d++]);return f}getUri(t){t=qo(this.defaults,t);const r=z3(t.baseURL,t.url,t.allowAbsoluteUrls);return R3(r,t.params,t.paramsSerializer)}}ne.forEach(["delete","get","head","options"],function(t){Ao.prototype[t]=function(r,n){return this.request(qo(n||{},{method:t,url:r,data:(n||{}).data}))}});ne.forEach(["post","put","patch"],function(t){function r(n){return function(i,a,s){return this.request(qo(s||{},{method:t,headers:n?{"Content-Type":"multipart/form-data"}:{},url:i,data:a}))}}Ao.prototype[t]=r(),Ao.prototype[t+"Form"]=r(!0)});class yh{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let r;this.promise=new Promise(function(i){r=i});const n=this;this.promise.then(o=>{if(!n._listeners)return;let i=n._listeners.length;for(;i-- >0;)n._listeners[i](o);n._listeners=null}),this.promise.then=o=>{let i;const a=new Promise(s=>{n.subscribe(s),i=s}).then(o);return a.cancel=function(){n.unsubscribe(i)},a},t(function(i,a,s){n.reason||(n.reason=new la(i,a,s),r(n.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const r=this._listeners.indexOf(t);r!==-1&&this._listeners.splice(r,1)}toAbortSignal(){const t=new AbortController,r=n=>{t.abort(n)};return this.subscribe(r),t.signal.unsubscribe=()=>this.unsubscribe(r),t.signal}static source(){let t;return{token:new yh(function(o){t=o}),cancel:t}}}function RZ(e){return function(r){return e.apply(null,r)}}function LZ(e){return ne.isObject(e)&&e.isAxiosError===!0}const Ug={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Ug).forEach(([e,t])=>{Ug[t]=e});function G3(e){const t=new Ao(e),r=j3(Ao.prototype.request,t);return ne.extend(r,Ao.prototype,t,{allOwnKeys:!0}),ne.extend(r,t,null,{allOwnKeys:!0}),r.create=function(o){return G3(qo(e,o))},r}const Xe=G3(Ks);Xe.Axios=Ao;Xe.CanceledError=la;Xe.CancelToken=yh;Xe.isCancel=F3;Xe.VERSION=q3;Xe.toFormData=dd;Xe.AxiosError=Ie;Xe.Cancel=Xe.CanceledError;Xe.all=function(t){return Promise.all(t)};Xe.spread=RZ;Xe.isAxiosError=LZ;Xe.mergeConfig=qo;Xe.AxiosHeaders=or;Xe.formToJSON=e=>_3(ne.isHTMLForm(e)?new FormData(e):e);Xe.getAdapter=W3.getAdapter;Xe.HttpStatusCode=Ug;Xe.default=Xe;const _Z=e=>e.langObj,eu=e=>{console.log("incoming: "+JSON.stringify(e.content));const t=X(_Z),r=A(D(t.copiedText))||"",n=A(D(t.copyTextError))||"",[o,i]=O.useState("");async function a(){try{let c="";if(e.type==="results")for(const[u,f]of Object.entries(e.content))c=c+`${u}: ${f} * `;else c=e.content;console.log("formattedResults: "+c),await navigator.clipboard.writeText(c),i("success")}catch(c){i("error"),console.error("Failed to copy: ",c)}finally{setTimeout(()=>i(""),3e3)}}const s=c=>{a(e.content).then(()=>{console.log("copied to clipboard")})};return l.jsx(le.Fragment,{children:l.jsxs(BZ,{children:[l.jsx(FZ,{tabindex:"1",onClick:c=>s(),children:e.text}),l.jsxs(zZ,{children:[o==="success"&&r,o==="error"&&n]})]})})},FZ=C.button`
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
`,BZ=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid #2e6da4; */
`,zZ=C.div`
  grid-area: c;
  font-size: 1.5em;
  font-weight: bold;
  height: 50px;
  min-width: 200px;
  margin-top: 0.2em;
  /* border: 1px solid #2e6da4; */
`,HZ=e=>e.langObj,UZ=e=>e.configObj,VZ=e=>e.setDisableRefreshCheck,WZ=e=>{const t=X(HZ),r=X(UZ),n=E(VZ),o=A(D(t.defaultEmailClientFail))||"",i=A(D(t.submitFailMessage))||"",[a,s]=O.useState(i),[c,u]=O.useState(!1),f=e.results,d=r.emailAddress,g=A(D(t.btnTransferEmail))||"",p=h=>{console.log("Download button clicked"),h.preventDefault();const y=Object.entries(e.results).map(([I,k])=>`${I}: ${k}`).join(`
`),v=new Blob([y],{type:"text/plain"}),x=URL.createObjectURL(v),S=document.createElement("a");S.href=x,S.download="my_Q-sort_results.txt",document.body.appendChild(S),S.click(),document.body.removeChild(S),URL.revokeObjectURL(x)},m=h=>{h.preventDefault(),s(o);let y="";for(const[v,x]of Object.entries(e.results))y=y+`${v}:| ${x} | `;console.log("formattedResults: "+y),console.log(JSON.stringify(y,null,2)),navigator.userAgent.toLowerCase().indexOf("chrome")>-1?(window.open(`mailto:${r.emailAddress}?subject=${t.emailSubjectText}&body=${t.emailBodyMessage} %0D%0A%0D%0AMy Results:%0D%0A${y}`),u(!0)):(window.location.href=`mailto:${r.emailAddress}?subject=${t.emailSubjectText}&body=${t.emailBodyMessage} %0D%0A%0D%0AMy Results:%0D%0A${y}`,u(!0))};return O.useEffect(()=>{n(!0)},[n]),console.log("urlUsercode: ",e.results.urlUsercode),l.jsxs(XZ,{children:[l.jsxs(GZ,{children:[l.jsx(qZ,{tabindex:"0",onClick:h=>m(h),children:g}),l.jsx(KZ,{children:a})]}),c?l.jsx(QZ,{children:l.jsxs(YZ,{children:[l.jsx(eu,{type:"email",content:d,text:t.clipboardEmail}),l.jsx(eu,{type:"results",content:f,text:t.clipboardResults}),l.jsx(eX,{children:l.jsx(ZZ,{onClick:h=>p(h),children:t.downloadResultsButtonText})})]})}):l.jsx(JZ,{})]})},qZ=C.button`
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
`,GZ=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
`,KZ=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2em;
  width: 65vw;
  font-size: 1.35em;
  align-self: center;
`,JZ=C.div`
  height: 300px;
`,QZ=C.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,YZ=C.div`
  display: flex;
  flex-direction: row;
  /* flex-wrap: wrap; */
  height: 180px;
  gap: 30px;
  justify-content: center;
  align-items: center;
`,ZZ=C.button`
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
`,XZ=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`,eX=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid #2e6da4; */
`,tX=e=>e.langObj,rX=e=>e.transmittingData,nX=e=>e.setTransmittingData,oX=e=>e.checkInternetConnection,iX=e=>e.setCheckInternetConnection,aX=e=>e.configObj,sX=e=>e.setTriggerTransmissionOKModal,lX=e=>e.setDisplayGoodbyeMessage,cX=e=>e.setDisplayBelowButtonText,uX=e=>{const t=X(tX);let r=E(rX);const n=E(nX);let o=E(oX);const i=E(iX),a=X(aX),s=E(sX),c=E(lX),u=A(D(t.checkInternetMessage))||"",f=E(cX),d=A(D(t.btnTransfer))||"",[g,p]=O.useState(0),m=h=>{h.preventDefault(),h.target.disabled=!0,f(!0),n(!0),i(!1),setTimeout(()=>{n(!1),i(!0),f(!1)},1e4),console.log(JSON.stringify(e.results,null,2));let y=a.baserowToken,v=a.baserowDatabaseIdNumber;if(y==null){console.log("Baserow token is not set");return}Xe({method:"POST",url:`https://api.baserow.io/api/database/rows/table/${v}/?user_field_names=true`,headers:{Authorization:`Token ${y}`,"Content-Type":"application/json"},data:e.results}).then(x=>{console.log(x),x.status===200&&(n(!1),i(!1),c(!0),s(!0))}).catch(x=>{console.log(x),setTimeout(()=>{p(g+1)},1e4)}),console.log("submission processed")};return console.log("failureCount: ",g),g>1&&i(!1),l.jsxs(le.Fragment,{children:[l.jsx(Mn,{}),l.jsx(ph,{}),l.jsx(mh,{}),r?l.jsx(fX,{}):l.jsx(dX,{tabindex:"0",onClick:h=>m(h),children:d}),o&&l.jsx(gX,{children:u}),g>1&&l.jsx(pX,{children:l.jsx(WZ,{results:e.results})})]})},dX=C.button`
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
`,fX=C.div`
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
`,gX=C.div`
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
`,pX=C.div`
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
`,K3=()=>{try{const e=JSON.parse(localStorage.getItem("resultsPresort")),t={};let r=e==null?void 0:e.npos;isNaN(r)&&(r=0);let n=e==null?void 0:e.nneu;isNaN(n)&&(n=0);let o=e==null?void 0:e.nneg;return isNaN(o)&&(o=0),t.r14=`(numPos): ${r}`,t.r15=`(numNeu): ${n}`,t.r16=`(numNeg): ${o}`,t.r17=`(pos): ${(e==null?void 0:e.posStateNums)||[]}`,t.r18=`(neu): ${(e==null?void 0:e.neuStateNums)||[]}`,t.r19=`(neg): ${(e==null?void 0:e.negStateNums)||[]}`,t}catch(e){console.log(e);return}},mX=e=>e.langObj,hX=e=>e.configObj,vX=e=>e.mapObj,xX=e=>e.setCurrentPage,yX=e=>e.displayGoodbyeMessage,bX=e=>e.displayBelowButtonText,Xx=()=>{let e={},t={};const r=X(mX),n=X(hX),o=X(vX),i=E(xX),a=E(yX),s=localStorage.getItem("urlUsercode")||"",c=E(bX);let u=JSON.parse(localStorage.getItem("resultsSurvey"));u===void 0&&(u={});const[f,d]=O.useState({consent:"00:00:00",landing:"00:00:00",presort:"00:00:00",thinning:"00:00:00",sort:"00:00:00",postsort:"00:00:00",survey:"00:00:00"});O.useEffect(()=>{const j=(V,Z="00:00:00")=>{const Y=localStorage.getItem(V);return Y!==null?Y:Z},F={consent:j("timeOnconsentPage"),landing:j("timeOnlandingPage"),presort:j("timeOnpresortPage"),thinning:j("timeOnthinningPage"),sort:j("timeOnsortPage"),postsort:j("timeOnpostsortPage"),survey:j("timeOnsurveyPage")};(n.showConsentPage===!1||n.showConsentPage==="false")&&(F.consent="n/a"),(n.showPostsort===!1||n.showPostsort==="false")&&(F.postsort="n/a"),(n.showSurvey===!1||n.showSurvey==="false")&&(F.survey="n/a"),d(F)},[n]),O.useEffect(()=>{i("submit"),localStorage.setItem("currentPage","submit")},[i]);const g=A(D(r.transferTextAbove))||"",p=A(D(r.transferTextBelow))||"",m=A(D(r.goodbyeMessage))||"",h=A(D(r.linkedProjectMessage))||"",y=D(r.linkedProjectBtnMessage)||"",v=A(D(r.transferHead))||"",x=JSON.parse(localStorage.getItem("resultsPresort"))||{},S=JSON.parse(localStorage.getItem("sortColumns"))||{},I=n.headerBarColor,k=Sm();try{let j=localStorage.getItem("randomId")||ee(),F=localStorage.getItem("partId")||"no part ID",V=localStorage.getItem("usercode")||"no usercode set",Z=n.creationDate||"unknown date";e.projectName=n.studyTitle,e.partId=F,e.randomId=j,e.urlUsercode=V,t.r1=n.studyTitle?`(projectName): ${n.studyTitle} - ${Z}`:`(projectName): my Q study - ${Z}`,t.r2=`(randomId): ${j}`,t.r3=`(partId): ${F}`,t.r4=`(urlUsercode): ${V}`}catch(j){console.log(j),alert("1: "+j.message)}try{t.r5=`(dateTime): ${k}`,t.r6="(desktop/mobile): desktop",t.r7=`(timeOnConsentPage): ${f.consent}`,t.r8=`(timeOnWelcomePage): ${f.landing}`,t.r9=`(timeOnPresortPage): ${f.presort}`,t.r10=`(timeOnRefinePage): ${f.thinning}`,t.r11=`(timeOnSortPage): ${f.sort}`,t.r12=`(timeOnPostsortPage): ${f.postsort}`,t.r13=`(timeOnSurveyPage): ${f.survey}`}catch(j){console.log(j),alert("2: "+j.message)}try{const j=lY(),F=K3();e={...e,...j},t={...t,...F}}catch(j){console.log(j),alert("4: "+j.message)}let T=22;try{if(n.showPostsort){const j=JSON.parse(localStorage.getItem("resultsPostsort"))||{},F=EQ(j,o,n),V=Object.fromEntries(Object.entries(F).sort(([Y],[z])=>Y.localeCompare(z))),Z=Object.keys(V);for(let Y=0;Y<Z.length;Y++){let z=Z[Y].split("_");e[z[0]]=V[Z[Y]],t[`r${T}`]=`${z[0]}: ${V[Z[Y]]}`,T++}}}catch(j){console.log(j),alert("5: "+j.message)}try{if(n.showSurvey&&u!==void 0){e={...e,...u};const j=Object.keys(u);for(let F=0;F<j.length;F++)t[`r${T}`]=`${j[F]}: ${u[j[F]]}`,T++}}catch(j){console.log(j),alert("6: "+j.message)}let P,N;try{Object.keys(S).length!==0&&S!==void 0&&Object.keys(x).length!==0&&x!==void 0&&(P=w3({...S},{...x},n.traceSorts),N=sY({...S},{...x}))}catch(j){console.log(j),alert("7: "+j.message)}try{e={...e,...P},t={...t,...N}}catch(j){console.log(j),alert("8: "+j.message)}try{for(const j in e)(e[j]===null||e[j]===void 0)&&(e[j]="no data")}catch(j){console.log(j),alert("9: "+j.message)}return a===!0?n.linkToSecondProject===!0?l.jsxs(ny,{children:[h,l.jsx("a",{id:"secondProjectLink",href:`${n.secondProjectUrl}/#/?usercode=${s}`,style:{targetNew:"tab",textDecoration:"none"},children:l.jsx(SX,{children:y})})]}):l.jsx(le.Fragment,{children:l.jsx(ny,{children:m})}):n.setupTarget==="local"?l.jsxs(le.Fragment,{children:[l.jsx(ey,{background:I,children:v}),l.jsx(nY,{}),l.jsx(ty,{children:l.jsx(qQ,{results:e})})]}):l.jsxs(le.Fragment,{children:[l.jsx(ey,{background:I,children:v}),l.jsxs(ty,{children:[l.jsx(ry,{children:g}),l.jsx(uX,{results:t}),c&&l.jsx(ry,{children:p})]})]})},ey=C.div`
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
`,ty=C.div`
  display: flex;
  min-height: 600px;
  width: calc(100vw-4px);
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,ry=C.div`
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
`,ny=C.div`
  display: flex;
  width: calc(100vw -20px);
  height: calc(100vh - 50px);
  font-size: 22px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`,SX=C.button`
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
`,CX=e=>{var p,m,h;console.log("SurveyTextElement props:",e);const t={async setItem(y,v){return await null,localStorage.setItem(y,v)}};let r=`itemNum${e.opts.itemNum}`;const n=e.check,o=A(D((p=e==null?void 0:e.opts)==null?void 0:p.label))||"",i=A(D((m=e==null?void 0:e.opts)==null?void 0:m.placeholder))||"",a=A(D((h=e==null?void 0:e.opts)==null?void 0:h.note))||"";let s=!0;(a.length<1||a==="")&&(s=!1);const[c,u]=Ee(r,""),[f,d]=O.useState({bgColor:"whitesmoke",border:"none"}),g=y=>{const v=JSON.parse(localStorage.getItem("resultsSurvey"));let x=y.target.value,S=x.length;if((e.opts.restricted==="true"||e.opts.restricted===!0)&&(x=x.replace(/\D/g,"")),(e.opts.limited==="true"||e.opts.limited===!0)&&x.length>+e.opts.limitLength&&(x=x.substring(0,+e.opts.limitLength)),u(x),S>0){let I=vo(x);v[`itemNum${e.opts.itemNum}`]=I}else e.opts.required===!0||e.opts.required==="true"?v[`itemNum${e.opts.itemNum}`]="no-*?*-response":v[`itemNum${e.opts.itemNum}`]="no response";t.setItem("resultsSurvey",JSON.stringify(v))};return O.useEffect(()=>{let y=!1;c.length>0&&c!==""&&(y=!0),n===!0&&y<1&&e.opts.required===!0?d({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):d({bgColor:"whitesmoke",border:"none"})},[n,c,e]),s?l.jsxs(oy,{bgColor:f.bgColor,border:f.border,children:[l.jsx(iy,{children:l.jsx("div",{children:o})}),l.jsx(wX,{id:"noteText",children:l.jsx("div",{children:a})}),l.jsx(ay,{type:"text",value:c,placeholder:i,onChange:g})]}):l.jsxs(oy,{bgColor:f.bgColor,border:f.border,children:[l.jsx(iy,{children:l.jsx("div",{children:o})}),l.jsx(ay,{type:"text",value:c,placeholder:i,onChange:g})]})},oy=C.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,iy=C.div`
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
`,wX=C.div`
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
`,ay=C.input`
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
`,jX=e=>{const t={async setItem(m,h){return await null,localStorage.setItem(m,h)}},r=`itemNum${e.opts.itemNum}`,n=e.check,o=A(D(e.opts.label))||"",i=A(D(e.opts.note))||"",a=A(D(e.opts.placeholder))||"";let s=!0;(i.length<1||i==="")&&(s=!1);const[c,u]=Ee(r,""),[f,d]=O.useState({bgColor:"whitesmoke",border:"none"}),g=m=>{const h=JSON.parse(localStorage.getItem("resultsSurvey"));let y=m.target.value;if(u(y),y.length>0){let v=vo(y);h[`itemNum${e.opts.itemNum}`]=v}else e.opts.required===!0||e.opts.required==="true"?h[`itemNum${e.opts.itemNum}`]="no-*?*-response":h[`itemNum${e.opts.itemNum}`]="no response";t.setItem("resultsSurvey",JSON.stringify(h))};let p=!1;return c.length>0&&c!==""&&(p=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&n===!0&&p<1?d({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):d({bgColor:"whitesmoke",border:"none"})},[n,c,p,e.opts.required]),s?l.jsxs(sy,{bgColor:f.bgColor,border:f.border,children:[l.jsx(ly,{children:l.jsx("div",{children:o})}),l.jsx(TX,{children:i}),l.jsx(cy,{value:c,placeholder:a,onChange:g})]}):l.jsxs(sy,{bgColor:f.bgColor,border:f.border,children:[l.jsx(ly,{children:l.jsx("div",{children:o})}),l.jsx(cy,{value:c,placeholder:a,onChange:g})]})},sy=C.div`
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
`,ly=C.div`
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
`,TX=C.div`
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
`,cy=C.textarea`
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
`,OX=e=>{const t=y=>{let v=y.split(";;;");return v=v.filter(function(x){return x}),v=v.map(x=>x.trim()),v};let r=e.opts.id;const n=e.check,o=A(D(e.opts.label))||"",i=A(D(e.opts.note))||"",a=t(e.opts.options);let s=!0;(i.length<1||i==="")&&(s=!1);let[c,u]=Ee(r,"");const[f,d]=O.useState({bgColor:"whitesmoke",border:"none"}),g=({label:y,value:v,checked:x,setter:S})=>l.jsx("label",{children:l.jsxs(EX,{children:[l.jsx("input",{type:"radio",checked:x===v,onChange:()=>S(v),value:v}),l.jsx(IX,{children:l.jsx("div",{children:y})})]})}),p=y=>{const v=JSON.parse(localStorage.getItem("resultsSurvey"));v[`itemNum${e.opts.itemNum}`]=+y.target.value+1,localStorage.setItem("resultsSurvey",JSON.stringify(v))};let m=!1;c.length===0&&(m=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&n===!0&&m?d({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):d({bgColor:"whitesmoke",border:"none"})},[n,m,e.opts.required]);const h=()=>{const y=a.map((v,x)=>l.jsx("div",{children:l.jsx(g,{value:x,checked:c,label:v,setter:u})},ee()));return l.jsx("div",{children:y})};return s?l.jsxs(uy,{bgColor:f.bgColor,border:f.border,children:[l.jsx(dy,{children:l.jsx("div",{children:o})}),l.jsx(PX,{children:l.jsx("div",{children:i})}),l.jsx(fy,{onChange:y=>p(y),children:l.jsx(h,{})})]}):l.jsxs(uy,{bgColor:f.bgColor,border:f.border,children:[l.jsx(dy,{children:l.jsx("div",{children:o})}),l.jsx(fy,{onChange:y=>p(y),children:l.jsx(h,{})})]})},uy=C.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,dy=C.div`
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
`,fy=C.div`
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
`,IX=C.div`
  padding-left: 5px;
`,EX=C.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`,PX=C.div`
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
`;function $X(e,{insertAt:t}={}){if(typeof document>"u")return;let r=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",t==="top"&&r.firstChild?r.insertBefore(n,r.firstChild):r.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}$X(`.rmsc{--rmsc-main: #4285f4;--rmsc-hover: #f1f3f5;--rmsc-selected: #e2e6ea;--rmsc-border: #ccc;--rmsc-gray: #aaa;--rmsc-bg: #fff;--rmsc-p: 10px;--rmsc-radius: 4px;--rmsc-h: 38px}.rmsc *{box-sizing:border-box;transition:all .2s ease}.rmsc .gray{color:var(--rmsc-gray)}.rmsc .dropdown-content{position:absolute;z-index:1;top:100%;width:100%;padding-top:8px}.rmsc .dropdown-content .panel-content{overflow:hidden;border-radius:var(--rmsc-radius);background:var(--rmsc-bg);box-shadow:0 0 0 1px #0000001a,0 4px 11px #0000001a}.rmsc .dropdown-container{position:relative;outline:0;background-color:var(--rmsc-bg);border:1px solid var(--rmsc-border);border-radius:var(--rmsc-radius)}.rmsc .dropdown-container[aria-disabled=true]:focus-within{box-shadow:var(--rmsc-gray) 0 0 0 1px;border-color:var(--rmsc-gray)}.rmsc .dropdown-container:focus-within{box-shadow:var(--rmsc-main) 0 0 0 1px;border-color:var(--rmsc-main)}.rmsc .dropdown-heading{position:relative;padding:0 var(--rmsc-p);display:flex;align-items:center;width:100%;height:var(--rmsc-h);cursor:default;outline:0}.rmsc .dropdown-heading .dropdown-heading-value{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.rmsc .clear-selected-button{cursor:pointer;background:none;border:0;padding:0;display:flex}.rmsc .options{max-height:260px;overflow-y:auto;margin:0;padding-left:0}.rmsc .options li{list-style:none;margin:0}.rmsc .select-item{box-sizing:border-box;cursor:pointer;display:block;padding:var(--rmsc-p);outline-offset:-1px;outline-color:var(--rmsc-primary)}.rmsc .select-item:hover{background:var(--rmsc-hover)}.rmsc .select-item.selected{background:var(--rmsc-selected)}.rmsc .no-options{padding:var(--rmsc-p);text-align:center;color:var(--rmsc-gray)}.rmsc .search{width:100%;position:relative;border-bottom:1px solid var(--rmsc-border)}.rmsc .search input{background:none;height:var(--rmsc-h);padding:0 var(--rmsc-p);width:100%;outline:0;border:0;font-size:1em}.rmsc .search input:focus{background:var(--rmsc-hover)}.rmsc .search-clear-button{cursor:pointer;position:absolute;top:0;right:0;bottom:0;background:none;border:0;padding:0 calc(var(--rmsc-p) / 2)}.rmsc .search-clear-button [hidden]{display:none}.rmsc .item-renderer{display:flex;align-items:baseline}.rmsc .item-renderer input{margin:0 5px 0 0}.rmsc .item-renderer.disabled{opacity:.5}.rmsc .spinner{animation:rotate 2s linear infinite}.rmsc .spinner .path{stroke:var(--rmsc-border);stroke-width:4px;stroke-linecap:round;animation:dash 1.5s ease-in-out infinite}@keyframes rotate{to{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1,150;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-35}to{stroke-dasharray:90,150;stroke-dashoffset:-124}}
`);var kX={allItemsAreSelected:"All items are selected.",clearSearch:"Clear Search",clearSelected:"Clear Selected",noOptions:"No options",search:"Search",selectAll:"Select All",selectAllFiltered:"Select All (Filtered)",selectSomeItems:"Select...",create:"Create"},NX={value:[],hasSelectAll:!0,className:"multi-select",debounceDuration:200,options:[]},J3=le.createContext({}),MX=({props:e,children:t})=>{let[r,n]=O.useState(e.options),o=i=>{var a;return((a=e.overrideStrings)==null?void 0:a[i])||kX[i]};return O.useEffect(()=>{n(e.options)},[e.options]),l.jsx(J3.Provider,{value:{t:o,...NX,...e,options:r,setOptions:n},children:t})},pd=()=>le.useContext(J3);function AX(e,t){let r=O.useRef(!1);O.useEffect(()=>{r.current?e():r.current=!0},t)}var DX={when:!0,eventTypes:["keydown"]};function tu(e,t,r){let n=O.useMemo(()=>Array.isArray(e)?e:[e],[e]),o=Object.assign({},DX,r),{when:i,eventTypes:a}=o,s=O.useRef(t),{target:c}=o;O.useEffect(()=>{s.current=t});let u=O.useCallback(f=>{n.some(d=>f.key===d||f.code===d)&&s.current(f)},[n]);O.useEffect(()=>{if(i&&typeof window<"u"){let f=c?c.current:window;return a.forEach(d=>{f&&f.addEventListener(d,u)}),()=>{a.forEach(d=>{f&&f.removeEventListener(d,u)})}}},[i,a,n,c,t])}var Qt={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",ENTER:"Enter",ESCAPE:"Escape",SPACE:"Space"},RX=(e,t)=>{let r;return function(...n){clearTimeout(r),r=setTimeout(()=>{e.apply(null,n)},t)}};function LX(e,t){return t?e.filter(({label:r,value:n})=>r!=null&&n!=null&&r.toLowerCase().includes(t.toLowerCase())):e}var Q3=()=>l.jsxs("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-search-clear-icon gray",children:[l.jsx("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),l.jsx("line",{x1:"6",y1:"6",x2:"18",y2:"18"})]}),_X=({checked:e,option:t,onClick:r,disabled:n})=>l.jsxs("div",{className:`item-renderer ${n?"disabled":""}`,children:[l.jsx("input",{type:"checkbox",onChange:r,checked:e,tabIndex:-1,disabled:n}),l.jsx("span",{children:t.label})]}),FX=_X,BX=({itemRenderer:e=FX,option:t,checked:r,tabIndex:n,disabled:o,onSelectionChanged:i,onClick:a})=>{let s=O.useRef(),c=d=>{u(),d.preventDefault()},u=()=>{o||i(!r)},f=d=>{u(),a(d)};return tu([Qt.ENTER,Qt.SPACE],c,{target:s}),l.jsx("label",{className:`select-item ${r?"selected":""}`,role:"option","aria-selected":r,tabIndex:n,ref:s,children:l.jsx(e,{option:t,checked:r,onClick:f,disabled:o})})},Y3=BX,zX=({options:e,onClick:t,skipIndex:r})=>{let{disabled:n,value:o,onChange:i,ItemRenderer:a}=pd(),s=(c,u)=>{n||i(u?[...o,c]:o.filter(f=>f.value!==c.value))};return l.jsx(l.Fragment,{children:e.map((c,u)=>{let f=u+r;return l.jsx("li",{children:l.jsx(Y3,{tabIndex:f,option:c,onSelectionChanged:d=>s(c,d),checked:!!o.find(d=>d.value===c.value),onClick:d=>t(d,f),itemRenderer:a,disabled:c.disabled||n})},(c==null?void 0:c.key)||u)})})},HX=zX,UX=()=>{let{t:e,onChange:t,options:r,setOptions:n,value:o,filterOptions:i,ItemRenderer:a,disabled:s,disableSearch:c,hasSelectAll:u,ClearIcon:f,debounceDuration:d,isCreatable:g,onCreateOption:p}=pd(),m=O.useRef(),h=O.useRef(),[y,v]=O.useState(""),[x,S]=O.useState(r),[I,k]=O.useState(""),[T,P]=O.useState(0),N=O.useCallback(RX(G=>k(G),d),[]),j=O.useMemo(()=>{let G=0;return c||(G+=1),u&&(G+=1),G},[c,u]),F={label:e(y?"selectAllFiltered":"selectAll"),value:""},V=G=>{let $=x.filter(w=>!w.disabled).map(w=>w.value);if(G){let w=[...o.map(b=>b.value),...$];return(i?x:r).filter(b=>w.includes(b.value))}return o.filter(w=>!$.includes(w.value))},Z=G=>{let $=V(G);t($)},Y=G=>{N(G.target.value),v(G.target.value),P(0)},z=()=>{var G;k(""),v(""),(G=h==null?void 0:h.current)==null||G.focus()},J=G=>P(G),K=G=>{switch(G.code){case Qt.ARROW_UP:B(-1);break;case Qt.ARROW_DOWN:B(1);break;default:return}G.stopPropagation(),G.preventDefault()};tu([Qt.ARROW_DOWN,Qt.ARROW_UP],K,{target:m});let M=()=>{P(0)},R=async()=>{let G={label:y,value:y,__isNew__:!0};p&&(G=await p(y)),n([G,...r]),z(),t([...o,G])},_=async()=>i?await i(r,I):LX(r,I),B=G=>{let $=T+G;$=Math.max(0,$),$=Math.min($,r.length+Math.max(j-1,0)),P($)};O.useEffect(()=>{var G,$;($=(G=m==null?void 0:m.current)==null?void 0:G.querySelector(`[tabIndex='${T}']`))==null||$.focus()},[T]);let[q,H]=O.useMemo(()=>{let G=x.filter($=>!$.disabled);return[G.every($=>o.findIndex(w=>w.value===$.value)!==-1),G.length!==0]},[x,o]);O.useEffect(()=>{_().then(S)},[I,r]);let Q=O.useRef();tu([Qt.ENTER],R,{target:Q});let U=g&&y&&!x.some(G=>(G==null?void 0:G.value)===y);return l.jsxs("div",{className:"select-panel",role:"listbox",ref:m,children:[!c&&l.jsxs("div",{className:"search",children:[l.jsx("input",{placeholder:e("search"),type:"text","aria-describedby":e("search"),onChange:Y,onFocus:M,value:y,ref:h,tabIndex:0}),l.jsx("button",{type:"button",className:"search-clear-button",hidden:!y,onClick:z,"aria-label":e("clearSearch"),children:f||l.jsx(Q3,{})})]}),l.jsxs("ul",{className:"options",children:[u&&H&&l.jsx(Y3,{tabIndex:j===1?0:1,checked:q,option:F,onSelectionChanged:Z,onClick:()=>J(1),itemRenderer:a,disabled:s}),x.length?l.jsx(HX,{skipIndex:j,options:x,onClick:(G,$)=>J($)}):U?l.jsx("li",{onClick:R,className:"select-item creatable",tabIndex:1,ref:Q,children:`${e("create")} "${y}"`}):l.jsx("li",{className:"no-options",children:e("noOptions")})]})]})},VX=UX,WX=({expanded:e})=>l.jsx("svg",{width:"24",height:"24",fill:"none",stroke:"currentColor",strokeWidth:"2",className:"dropdown-heading-dropdown-arrow gray",children:l.jsx("path",{d:e?"M18 15 12 9 6 15":"M6 9L12 15 18 9"})}),qX=()=>{let{t:e,value:t,options:r,valueRenderer:n}=pd(),o=t.length===0,i=t.length===r.length,a=n&&n(t,r);return o?l.jsx("span",{className:"gray",children:a||e("selectSomeItems")}):l.jsx("span",{children:a||(i?e("allItemsAreSelected"):t.map(s=>s.label).join(", "))})},GX=({size:e=24})=>l.jsx("span",{style:{width:e,marginRight:"0.2rem"},children:l.jsx("svg",{width:e,height:e,className:"spinner",viewBox:"0 0 50 50",style:{display:"inline",verticalAlign:"middle"},children:l.jsx("circle",{cx:"25",cy:"25",r:"20",fill:"none",className:"path"})})}),KX=()=>{let{t:e,onMenuToggle:t,ArrowRenderer:r,shouldToggleOnHover:n,isLoading:o,disabled:i,onChange:a,labelledBy:s,value:c,isOpen:u,defaultIsOpen:f,ClearSelectedIcon:d,closeOnChangedValue:g}=pd();O.useEffect(()=>{g&&y(!1)},[c]);let[p,m]=O.useState(!0),[h,y]=O.useState(f),[v,x]=O.useState(!1),S=r||WX,I=O.useRef();AX(()=>{t&&t(h)},[h]),O.useEffect(()=>{f===void 0&&typeof u=="boolean"&&(m(!1),y(u))},[u]);let k=Y=>{var z;["text","button"].includes(Y.target.type)&&[Qt.SPACE,Qt.ENTER].includes(Y.code)||(p&&(Y.code===Qt.ESCAPE?(y(!1),(z=I==null?void 0:I.current)==null||z.focus()):y(!0)),Y.preventDefault())};tu([Qt.ENTER,Qt.ARROW_DOWN,Qt.SPACE,Qt.ESCAPE],k,{target:I});let T=Y=>{p&&n&&y(Y)},P=()=>!v&&x(!0),N=Y=>{!Y.currentTarget.contains(Y.relatedTarget)&&p&&(x(!1),y(!1))},j=()=>T(!0),F=()=>T(!1),V=()=>{p&&y(o||i?!1:!h)},Z=Y=>{Y.stopPropagation(),a([]),p&&y(!1)};return l.jsxs("div",{tabIndex:0,className:"dropdown-container","aria-labelledby":s,"aria-expanded":h,"aria-readonly":!0,"aria-disabled":i,ref:I,onFocus:P,onBlur:N,onMouseEnter:j,onMouseLeave:F,children:[l.jsxs("div",{className:"dropdown-heading",onClick:V,children:[l.jsx("div",{className:"dropdown-heading-value",children:l.jsx(qX,{})}),o&&l.jsx(GX,{}),c.length>0&&d!==null&&l.jsx("button",{type:"button",className:"clear-selected-button",onClick:Z,disabled:i,"aria-label":e("clearSelected"),children:d||l.jsx(Q3,{})}),l.jsx(S,{expanded:h})]}),h&&l.jsx("div",{className:"dropdown-content",children:l.jsx("div",{className:"panel-content",children:l.jsx(VX,{})})})]})},JX=KX,QX=e=>l.jsx(MX,{props:e,children:l.jsx("div",{className:`rmsc ${e.className||"multi-select"}`,children:l.jsx(JX,{})})}),ru=QX,gy=Qi,YX=Tm,ZX=Lr,py=gy?gy.isConcatSpreadable:void 0;function XX(e){return ZX(e)||YX(e)||!!(py&&e&&e[py])}var eee=XX,tee=Bm,ree=eee;function Z3(e,t,r,n,o){var i=-1,a=e.length;for(r||(r=ree),o||(o=[]);++i<a;){var s=e[i];t>0&&r(s)?t>1?Z3(s,t-1,r,n,o):tee(o,s):n||(o[o.length]=s)}return o}var nee=Z3,oee=nee;function iee(e){var t=e==null?0:e.length;return t?oee(e,1):[]}var aee=iee;const Bt=gt(aee),see=e=>{const t=m=>{let h=m.split(";;;");return h=h.filter(function(v){return v}),h.map(v=>{v.replace(/\s/g,"");const x={};return x.label=A(D(v)),x.value=v,x})},r=e.check;let n=e.opts.id;const o=A(D(e.opts.label))||"";let i=e.opts.options.split(";;;")||[];i=i.map(m=>A(D(m.trim())));const a=A(D(e.opts.note))||"";let s=!0;(a.length<1||a==="")&&(s=!1);let[c,u]=Ee(n,[]);const[f,d]=O.useState({bgColor:"whitesmoke",border:"none"}),g=m=>{const h=JSON.parse(localStorage.getItem("resultsSurvey"))||{};u(m);let y=Bt(i);if(m.length!==0){let v="";for(let x=0;x<m.length;x++){let S=m[x].value,I=y.indexOf(S);x===0?v+=I+1:v+=","+(I+1)}h[`itemNum${e.opts.itemNum}`]=v}else e.opts.required===!0||e.opts.required==="true"?h[`itemNum${e.opts.itemNum}`]="no-*?*-response":h[`itemNum${e.opts.itemNum}`]="no response";localStorage.setItem("resultsSurvey",JSON.stringify(h))};let p=!1;return c.length>0&&(p=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&r===!0&&p===!1?d({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):d({bgColor:"whitesmoke",border:"none"})},[r,p,e.opts.required]),s?l.jsxs(my,{bgColor:f.bgColor,border:f.border,children:[l.jsx(hy,{children:l.jsx("div",{children:o})}),l.jsx(lee,{id:"noteText",children:l.jsx("div",{children:a})}),l.jsx(ru,{className:"multiselect",options:t(e.opts.options),labelledBy:"Select",onChange:g,value:c})]}):l.jsxs(my,{bgColor:f.bgColor,border:f.border,children:[l.jsx(hy,{children:l.jsx("div",{children:o})}),l.jsx(ru,{className:"multiselect",options:t(e.opts.options),labelledBy:"Select",onChange:g,value:c})]})},my=C.div`
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
`,hy=C.div`
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
`,lee=C.div`
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
`;function cee(e,t,r,n){for(var o=-1,i=e==null?0:e.length;++o<i;){var a=e[o];t(n,a,r(a),e)}return n}var uee=cee;function dee(e){return function(t,r,n){for(var o=-1,i=Object(t),a=n(t),s=a.length;s--;){var c=a[e?s:++o];if(r(i[c],c,i)===!1)break}return t}}var fee=dee,gee=fee,pee=gee(),mee=pee,hee=mee,vee=Yi;function xee(e,t){return e&&hee(e,t,vee)}var yee=xee,bee=Nm;function See(e,t){return function(r,n){if(r==null)return r;if(!bee(r))return e(r,n);for(var o=r.length,i=t?o:-1,a=Object(r);(t?i--:++i<o)&&n(a[i],i,a)!==!1;);return r}}var Cee=See,wee=yee,jee=Cee,Tee=jee(wee),Oee=Tee,Iee=Oee;function Eee(e,t,r,n){return Iee(e,function(o,i,a){t(n,o,r(o),a)}),n}var Pee=Eee,$ee=Rm,kee=gh,Nee=1,Mee=2;function Aee(e,t,r,n){var o=r.length,i=o,a=!n;if(e==null)return!i;for(e=Object(e);o--;){var s=r[o];if(a&&s[2]?s[1]!==e[s[0]]:!(s[0]in e))return!1}for(;++o<i;){s=r[o];var c=s[0],u=e[c],f=s[1];if(a&&s[2]){if(u===void 0&&!(c in e))return!1}else{var d=new $ee;if(n)var g=n(u,f,c,e,t,d);if(!(g===void 0?kee(f,u,Nee|Mee,n,d):g))return!1}}return!0}var Dee=Aee,Ree=mo;function Lee(e){return e===e&&!Ree(e)}var X3=Lee,_ee=X3,Fee=Yi;function Bee(e){for(var t=Fee(e),r=t.length;r--;){var n=t[r],o=e[n];t[r]=[n,o,_ee(o)]}return t}var zee=Bee;function Hee(e,t){return function(r){return r==null?!1:r[e]===t&&(t!==void 0||e in Object(r))}}var ej=Hee,Uee=Dee,Vee=zee,Wee=ej;function qee(e){var t=Vee(e);return t.length==1&&t[0][2]?Wee(t[0][0],t[0][1]):function(r){return r===e||Uee(r,e,t)}}var Gee=qee,Kee=Lr,Jee=Uu,Qee=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Yee=/^\w*$/;function Zee(e,t){if(Kee(e))return!1;var r=typeof e;return r=="number"||r=="symbol"||r=="boolean"||e==null||Jee(e)?!0:Yee.test(e)||!Qee.test(e)||t!=null&&e in Object(t)}var bh=Zee,tj=Dm,Xee="Expected a function";function Sh(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(Xee);var r=function(){var n=arguments,o=t?t.apply(this,n):n[0],i=r.cache;if(i.has(o))return i.get(o);var a=e.apply(this,n);return r.cache=i.set(o,a)||i,a};return r.cache=new(Sh.Cache||tj),r}Sh.Cache=tj;var ete=Sh,tte=ete,rte=500;function nte(e){var t=tte(e,function(n){return r.size===rte&&r.clear(),n}),r=t.cache;return t}var ote=nte,ite=ote,ate=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ste=/\\(\\)?/g,lte=ite(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(ate,function(r,n,o,i){t.push(o?i.replace(ste,"$1"):n||r)}),t}),cte=lte,vy=Qi,ute=Lw,dte=Lr,fte=Uu,gte=1/0,xy=vy?vy.prototype:void 0,yy=xy?xy.toString:void 0;function rj(e){if(typeof e=="string")return e;if(dte(e))return ute(e,rj)+"";if(fte(e))return yy?yy.call(e):"";var t=e+"";return t=="0"&&1/e==-gte?"-0":t}var pte=rj,mte=pte;function hte(e){return e==null?"":mte(e)}var vte=hte,xte=Lr,yte=bh,bte=cte,Ste=vte;function Cte(e,t){return xte(e)?e:yte(e,t)?[e]:bte(Ste(e))}var Ch=Cte,wte=Uu,jte=1/0;function Tte(e){if(typeof e=="string"||wte(e))return e;var t=e+"";return t=="0"&&1/e==-jte?"-0":t}var Js=Tte,Ote=Ch,Ite=Js;function Ete(e,t){t=Ote(t,e);for(var r=0,n=t.length;e!=null&&r<n;)e=e[Ite(t[r++])];return r&&r==n?e:void 0}var wh=Ete,Pte=wh;function $te(e,t,r){var n=e==null?void 0:Pte(e,t);return n===void 0?r:n}var kte=$te;function Nte(e,t){return e!=null&&t in Object(e)}var Mte=Nte,Ate=Ch,Dte=Tm,Rte=Lr,Lte=Im,_te=Em,Fte=Js;function Bte(e,t,r){t=Ate(t,e);for(var n=-1,o=t.length,i=!1;++n<o;){var a=Fte(t[n]);if(!(i=e!=null&&r(e,a)))break;e=e[a]}return i||++n!=o?i:(o=e==null?0:e.length,!!o&&_te(o)&&Lte(a,o)&&(Rte(e)||Dte(e)))}var zte=Bte,Hte=Mte,Ute=zte;function Vte(e,t){return e!=null&&Ute(e,t,Hte)}var Wte=Vte,qte=gh,Gte=kte,Kte=Wte,Jte=bh,Qte=X3,Yte=ej,Zte=Js,Xte=1,ere=2;function tre(e,t){return Jte(e)&&Qte(t)?Yte(Zte(e),t):function(r){var n=Gte(r,e);return n===void 0&&n===t?Kte(r,e):qte(t,n,Xte|ere)}}var rre=tre;function nre(e){return e}var ore=nre;function ire(e){return function(t){return t==null?void 0:t[e]}}var are=ire,sre=wh;function lre(e){return function(t){return sre(t,e)}}var cre=lre,ure=are,dre=cre,fre=bh,gre=Js;function pre(e){return fre(e)?ure(gre(e)):dre(e)}var mre=pre,hre=Gee,vre=rre,xre=ore,yre=Lr,bre=mre;function Sre(e){return typeof e=="function"?e:e==null?xre:typeof e=="object"?yre(e)?vre(e[0],e[1]):hre(e):bre(e)}var nj=Sre,Cre=uee,wre=Pee,jre=nj,Tre=Lr;function Ore(e,t){return function(r,n){var o=Tre(r)?Cre:wre,i=t?t():{};return o(r,e,jre(n),i)}}var Ire=Ore,Ere=Lm,Pre=Ire,$re=Object.prototype,kre=$re.hasOwnProperty,Nre=Pre(function(e,t,r){kre.call(e,r)?++e[r]:Ere(e,r,1)}),Mre=Nre;const ir=gt(Mre),Are=e=>{const t=x=>{let S=x.split(";;;");return S=S.filter(function(I){return I}),S.map(I=>!1),S},r=e.check,n=t(e.opts.options),o=`question${e.opts.itemNum}`;let i=e.opts.id;const a=A(D(e.opts.label))||"",s=A(D(e.opts.note))||"";let c=!0;(s.length<1||s==="")&&(c=!1);let[u,f]=Ee(i,new Array(n.length).fill(!1));const[d,g]=O.useState({bgColor:"whitesmoke",border:"none"}),p=x=>{const S=JSON.parse(localStorage.getItem("resultsSurvey"));x=parseInt(x,10);const I=u.map((T,P)=>P===x?!T:T);f(I);let k=I.reduce((T="",P,N)=>P===!0?T+(N+1).toString()+",":T,"");k.charAt(k.length-1)===","&&(k=k.substr(0,k.length-1)),S[`itemNum${e.opts.itemNum}`]=k,k===""&&(e.opts.required===!0||e.opts.required==="true"?S[`itemNum${e.opts.itemNum}`]="no-*?*-response":S[`itemNum${e.opts.itemNum}`]="no response"),localStorage.setItem("resultsSurvey",JSON.stringify(S))};let m=!1,h=Bt([...u]);return(ir(h)[!0]||0)===0&&(m=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&r===!0&&m?g({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):g({bgColor:"whitesmoke",border:"none"})},[r,m,e.opts.required]),c?l.jsxs(by,{bgColor:d.bgColor,border:d.border,children:[l.jsx(Sy,{children:l.jsx("div",{children:a})}),l.jsx(Dre,{id:"noteText",children:l.jsx("div",{children:s})}),l.jsx(Cy,{children:n.map((x,S)=>l.jsxs("div",{children:[l.jsx("input",{id:`${x}-${S}`,type:"checkbox",value:x,name:o,checked:u[S],onChange:()=>p(S)}),l.jsx("label",{htmlFor:`${x}-${S}`,children:x})]},ee()))})]}):l.jsxs(by,{bgColor:d.bgColor,border:d.border,children:[l.jsx(Sy,{children:l.jsx("div",{children:a})}),l.jsx(Cy,{children:n.map((x,S)=>l.jsxs("div",{children:[l.jsx("input",{id:`${x}-${S}`,type:"checkbox",value:x,name:o,checked:u[S],onChange:()=>p(S)}),l.jsx("label",{htmlFor:`${x}-${S}`,children:x})]},ee()))})]})},by=C.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 150px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Sy=C.div`
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
`,Cy=C.div`
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
`,Dre=C.div`
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
`,Rre=e=>{const t=k=>{let T=k.split(";;;");return T=T.filter(function(P){return P}),T.length===0&&(T=["",""]),T},r=t(e.opts.options),n=e.check,o=r.length,i=`itemNum${e.opts.itemNum}`,a=A(D(e.opts.label))||"",s=A(D(e.opts.note))||"";let c=!0;(s.length<1||s==="")&&(c=!1);let[u,f]=Ee(i,Array.from({length:o},()=>Array.from({length:2},()=>!1)));console.log(u);const[d,g]=O.useState({bgColor:"whitesmoke",border:"none"}),p=t(e.opts.scale),m=(k,T)=>{const P=JSON.parse(localStorage.getItem("resultsSurvey")),N=[],j=u.map(function(J,K){return k===K?(J.map(function(M,R){return T===R?(N.push(!0),null):(N.push(!1),null)}),N):J});console.log(j),f(j);let F=u.length,V=Bt([...j]);console.log(V);let Z=ir(V);console.log(Z);let Y=Z[!0]||0,z="";console.log("333",j),j.forEach((J,K)=>{console.log(J);let M=J[0]?"1":"2";J.includes(!0)||(M="nr"),K===0?z+=M:z+=","+M}),P[`itemNum${e.opts.itemNum}`]=z,console.log("333",Y,F),Y!==F&&(e.opts.required===!0||e.opts.required==="true")&&(P[`itemNum${e.opts.itemNum}`]="no-*?*-response"),localStorage.setItem("resultsSurvey",JSON.stringify(P))};let h=!1,y=u.length,v=Bt([...u]);(ir(v)[!0]||0)<y&&(h=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&n===!0&&h?g({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):g({bgColor:"whitesmoke",border:"none"})},[n,h,e.opts.required]);const I=()=>{const k=r.map((T,P)=>{const N=A(D(T))||"";return l.jsxs(Lre,{indexVal:P,children:[l.jsx(_re,{children:N},ee()),l.jsx(Iy,{id:`Q-${P}`,type:"radio",value:1,name:`itemNum${e.opts.itemNum}-${P+1}`,onChange:j=>m(P,0),checked:u[P][0]},ee()),l.jsx(Iy,{id:`Q2-${P}`,type:"radio",value:2,name:`itemNum${e.opts.itemNum}-${P+1}`,onChange:j=>m(P,1),checked:u[P][1]},ee())]},ee())});return l.jsx("div",{children:k})};return c?l.jsxs(wy,{bgColor:d.bgColor,border:d.border,children:[l.jsx(jy,{children:l.jsx("div",{children:a})}),l.jsx(Fre,{id:"noteText",children:l.jsx("div",{children:s})}),l.jsxs(Ty,{children:[l.jsxs(Oy,{children:[l.jsx("div",{}),l.jsx(Ml,{children:l.jsx("div",{children:A(D(p[0]))})}),l.jsx(Ml,{children:l.jsx("div",{children:A(D(p[1]))})})]}),l.jsx(I,{})]})]}):l.jsxs(wy,{bgColor:d.bgColor,border:d.border,children:[l.jsx(jy,{children:l.jsx("div",{children:a})}),l.jsxs(Ty,{children:[l.jsxs(Oy,{children:[l.jsx("div",{}),l.jsx(Ml,{children:l.jsx("div",{children:A(D(p[0]))})}),l.jsx(Ml,{children:l.jsx("div",{children:A(D(p[1]))})})]}),l.jsx(I,{})]})]})},wy=C.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,jy=C.div`
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
`,Ty=C.div`
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
`,Lre=C.div`
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
`,Oy=C.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 100px 100px 1fr;
  margin-bottom: 7px;
`,Ml=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Iy=C.input`
  display: flex;
  justify-self: center;
  align-self: center;
  border: 0px;
  width: 28px;
  height: 1.4em;
  justify-items: center;
  align-items: center;
`,_re=C.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,Fre=C.div`
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
`,Bre=e=>{const r=(I=>{let k=I.split(";;;");return k=k.filter(function(T){return T}),k})(e.opts.options),n=r.length,o=`itemNum${e.opts.itemNum}`,i=e.check,a=A(D(e.opts.note))||"";let s=!0;(a.length<1||a==="")&&(s=!1);const c=A(D(e.opts.label))||"";let[u,f]=Ee(o,Array.from({length:n},()=>Array.from({length:5},()=>!1)));const[d,g]=O.useState({bgColor:"whitesmoke",border:"none"}),p=(I,k,T)=>{const P=JSON.parse(localStorage.getItem("resultsSurvey")),N=[],j=u.map(function(J,K){return I===K?(J.map(function(M,R){return k===R?(N.push(!0),null):(N.push(!1),null)}),N):J});f(j);let F=u.length,V=Bt([...j]),Y=ir(V)[!0]||0,z="";j.forEach((J,K)=>{let M=j[K].indexOf(!0)+1;J.includes(!0)||(M="nr"),K===0?z+=M:z+=","+M}),P[`itemNum${e.opts.itemNum}`]=z,Y!==F&&(e.opts.required===!0||e.opts.required==="true")&&(P[`itemNum${e.opts.itemNum}`]="no-*?*-response"),localStorage.setItem("resultsSurvey",JSON.stringify(P))};let m=!1,h=u.length,y=Bt([...u]);(ir(y)[!0]||0)<h&&(m=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&i===!0&&m?g({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):g({bgColor:"whitesmoke",border:"none"})},[i,m,e.opts.required]);const S=()=>{const I=r.map((k,T)=>{const P=A(D(k));return l.jsxs(zre,{indexVal:T,children:[l.jsx(Hre,{children:P},ee()),l.jsx(Pa,{id:`Q-${T}`,type:"radio",value:1,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,0),checked:u[T][0]},ee()),l.jsx(Pa,{id:`Q2-${T}`,type:"radio",value:2,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,1),checked:u[T][1]},ee()),l.jsx(Pa,{id:`Q3-${T}`,type:"radio",value:3,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,2),checked:u[T][2]},ee()),l.jsx(Pa,{id:`Q4-${T}`,type:"radio",value:4,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,3),checked:u[T][3]},ee()),l.jsx(Pa,{id:`Q5-${T}`,type:"radio",value:5,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,4),checked:u[T][4]},ee())]},ee())});return l.jsx("div",{children:I})};return s?l.jsxs(Ey,{bgColor:d.bgColor,border:d.border,children:[l.jsx(Py,{children:l.jsx("div",{children:c})}),l.jsx(Ure,{id:"noteText",children:l.jsx("div",{children:a})}),l.jsxs($y,{children:[l.jsxs(ky,{children:[l.jsx("div",{}),l.jsx(cn,{children:"1"}),l.jsx(cn,{children:"2"}),l.jsx(cn,{children:"3"}),l.jsx(cn,{children:"4"}),l.jsx(cn,{children:"5"})]}),l.jsx(S,{})]})]}):l.jsxs(Ey,{bgColor:d.bgColor,border:d.border,children:[l.jsx(Py,{children:l.jsx("div",{children:c})}),l.jsxs($y,{children:[l.jsxs(ky,{children:[l.jsx("div",{}),l.jsx(cn,{children:"1"}),l.jsx(cn,{children:"2"}),l.jsx(cn,{children:"3"}),l.jsx(cn,{children:"4"}),l.jsx(cn,{children:"5"})]}),l.jsx(S,{})]})]})},Ey=C.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Py=C.div`
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
`,$y=C.div`
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
`,zre=C.div`
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
`,ky=C.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 50px 50px 50px 50px 50px 1fr;
  margin-bottom: 7px;
  align-items: end;
`,Pa=C.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 0px;
  width: 25px;
  height: 1.4em;
`,cn=C.div`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
`,Hre=C.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,Ure=C.div`
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
`,Vre=e=>{const r=(I=>{let k=I.split(";;;");return k=k.filter(function(T){return T}),k})(e.opts.options),n=r.length,o=`itemNum${e.opts.itemNum}`,i=e.check,a=A(D(e.opts.label))||"",s=A(D(e.opts.note))||"";let c=!0;(s.length<1||s==="")&&(c=!1);const[u,f]=Ee(o,Array.from({length:n},()=>Array.from({length:10},()=>!1))),[d,g]=O.useState({bgColor:"whitesmoke",border:"none"}),p=(I,k,T)=>{const P=JSON.parse(localStorage.getItem("resultsSurvey")),N=[],j=u.map(function(J,K){return I===K?(J.map(function(M,R){return k===R?(N.push(!0),null):(N.push(!1),null)}),N):J});f(j);let F=u.length,V=Bt([...j]),Y=ir(V)[!0]||0,z="";j.forEach((J,K)=>{let M=j[K].indexOf(!0)+1;J.includes(!0)||(M="nr"),K===0?z+=M:z+=","+M}),P[`itemNum${e.opts.itemNum}`]=z,Y!==F&&(e.opts.required===!0||e.opts.required==="true")&&(P[`itemNum${e.opts.itemNum}`]="no-*?*-response"),localStorage.setItem("resultsSurvey",JSON.stringify(P))};let m=!1,h=u.length,y=Bt([...u]);(ir(y)[!0]||0)<h&&(m=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&i===!0&&m?g({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):g({bgColor:"whitesmoke",border:"none"})},[i,m,e.opts.required]);const S=()=>{const I=r.map((k,T)=>{const P=A(D(k));return l.jsxs(Wre,{indexVal:T,children:[l.jsx(qre,{children:P},ee()),l.jsx(un,{id:`Q-${T}`,type:"radio",value:1,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,0),checked:u[T][0]},ee()),l.jsx(un,{id:`Q2-${T}`,type:"radio",value:2,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,1),checked:u[T][1]},ee()),l.jsx(un,{id:`Q3-${T}`,type:"radio",value:3,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,2),checked:u[T][2]},ee()),l.jsx(un,{id:`Q4-${T}`,type:"radio",value:4,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,3),checked:u[T][3]},ee()),l.jsx(un,{id:`Q5-${T}`,type:"radio",value:5,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,4),checked:u[T][4]},ee()),l.jsx(un,{id:`Q6-${T}`,type:"radio",value:6,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,5),checked:u[T][5]},ee()),l.jsx(un,{id:`Q7-${T}`,type:"radio",value:7,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,6),checked:u[T][6]},ee()),l.jsx(un,{id:`Q8-${T}`,type:"radio",value:8,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,7),checked:u[T][7]},ee()),l.jsx(un,{id:`Q9-${T}`,type:"radio",value:9,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,8),checked:u[T][8]},ee()),l.jsx(un,{id:`Q10-${T}`,type:"radio",value:10,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,9),checked:u[T][9]},ee())]},ee())});return l.jsx("div",{children:I})};return c?l.jsxs(Ny,{bgColor:d.bgColor,border:d.border,children:[l.jsx(My,{children:l.jsx("div",{children:a})}),l.jsx(Gre,{id:"noteText",children:l.jsx("div",{children:s})}),l.jsxs(Ay,{children:[l.jsxs(Dy,{children:[l.jsx("div",{}),l.jsx(ut,{children:"1"}),l.jsx(ut,{children:"2"}),l.jsx(ut,{children:"3"}),l.jsx(ut,{children:"4"}),l.jsx(ut,{children:"5"}),l.jsx(ut,{children:"6"}),l.jsx(ut,{children:"7"}),l.jsx(ut,{children:"8"}),l.jsx(ut,{children:"9"}),l.jsx(ut,{children:"10"})]}),l.jsx(S,{})]})]}):l.jsxs(Ny,{bgColor:d.bgColor,border:d.border,children:[l.jsx(My,{children:l.jsx("div",{children:a})}),l.jsxs(Ay,{children:[l.jsxs(Dy,{children:[l.jsx("div",{}),l.jsx(ut,{children:"1"}),l.jsx(ut,{children:"2"}),l.jsx(ut,{children:"3"}),l.jsx(ut,{children:"4"}),l.jsx(ut,{children:"5"}),l.jsx(ut,{children:"6"}),l.jsx(ut,{children:"7"}),l.jsx(ut,{children:"8"}),l.jsx(ut,{children:"9"}),l.jsx(ut,{children:"10"})]}),l.jsx(S,{})]})]})},Ny=C.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 200px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,My=C.div`
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
`,Ay=C.div`
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
`,Wre=C.div`
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
`,Dy=C.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 40px 40px 40px 40px 40px 40px 40px 40px 40px 40px 1fr;
  margin-bottom: 7px;
  align-items: end;
`,ut=C.div`
  display: flex;
  justify-self: center;
  align-items: center;
  text-align: center;
`,un=C.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 0px;
  width: 28px;
  height: 1.4em;
  padding-left: 3px;
`,qre=C.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,Gre=C.div`
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
`,Kre=e=>{const t=e.check,r=`itemNum${e.opts.itemNum}`,n=A(D(e.opts.label))||"";let[o,i]=Ee(r,"");const[a,s]=O.useState({bgColor:"whitesmoke",border:"none"}),u=(h=>h.split(";;;"))(e.opts.scale),f=h=>{const y=JSON.parse(localStorage.getItem("resultsSurvey"));y[`itemNum${e.opts.itemNum}`]=+h.target.value+1,localStorage.setItem("resultsSurvey",JSON.stringify(y))};let d=!1;o.length===0&&(d=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&t===!0&&d?s({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):s({bgColor:"whitesmoke",border:"none"})},[t,d,e.opts.required]);const g=u.map(h=>l.jsx(ene,{children:l.jsx("div",{children:A(D(h))})},ee())),p=({value:h,checked:y,setter:v})=>l.jsx(l.Fragment,{children:l.jsx("input",{type:"radio",checked:y===h,onChange:()=>v(h),value:h})}),m=()=>{const h=u.map((y,v)=>l.jsx(tne,{className:"radioButtons",onChange:x=>f(x),children:l.jsx(p,{className:"radioInput",value:v,checked:o,setter:i})},ee()));return l.jsx(Zre,{className:"buttonContainer",cols:u.length,children:h})};return l.jsxs(Jre,{bgColor:a.bgColor,border:a.border,children:[l.jsx(Qre,{children:l.jsx("div",{children:n})}),l.jsxs(Yre,{className:"radioContainer",children:[l.jsx(Xre,{className:"ratingTitle",cols:u.length,children:g}),l.jsx(m,{})]})]})},Jre=C.div`
  width: 90vw;
  padding: 12px 20px 0px 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 170px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Qre=C.div`
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
`,Yre=C.div`
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
`,Zre=C.div`
  display: inline-grid;
  grid-template-columns: ${e=>`repeat(${e.cols}, ${100/e.cols}%)`};
  margin-bottom: 3px;
  justify-items: center;
  align-items: center;
`,Xre=C.div`
  display: inline-grid;
  grid-template-columns: ${e=>`repeat(${e.cols}, ${100/e.cols}%)`};
`,ene=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`,tne=C.div`
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
`,rne=e=>{O.useEffect(()=>{const r=JSON.parse(localStorage.getItem("resultsSurvey"));r[`itemNum${e.opts.itemNum}`]="info. - na"},[e.opts.itemNum]);const t=A(D(e.opts.options))||"";return l.jsx(nne,{children:l.jsx(one,{backgroundColor:e.opts.background,children:l.jsx("div",{children:t})})})},nne=C.div`
  width: 90vw;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  background-color: whitesmoke;
  min-height: 50px;
`,one=C.div`
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
`,ine=e=>e.langObj,ane=e=>e.triggerSurveyPreventNavModal,sne=e=>e.setTriggerSurveyPreventNavModal,lne=()=>{const e=X(ine),t=E(ane),r=E(sne),n=A(D(e.surveyPreventNavModalHead))||"",o=A(D(e.surveyPreventNavModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(cne,{children:n}),l.jsx("hr",{}),l.jsx(une,{children:o})]})},cne=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,une=C.div`
  margin-top: 15px;
`,dne=e=>e.langObj,fne=e=>e.triggerSurveyModal,gne=e=>e.setTriggerSurveyModal,pne=()=>{const e=X(dne),t=E(fne),r=E(gne),n=A(D(e.surveyModalHead))||"",o=A(D(e.surveyModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(mne,{children:n}),l.jsx("hr",{}),l.jsx(hne,{children:o})]})},mne=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,hne=C.div`
  margin-top: 15px;
  font-weight: normal;
`,vne=e=>e.langObj,xne=e=>e.configObj,yne=e=>e.surveyQuestionObjArray,bne=e=>e.requiredAnswersObj,Sne=e=>e.setRequiredAnswersObj,Cne=e=>e.setCurrentPage,wne=e=>e.checkRequiredQuestionsComplete,jne=e=>e.setDisplayNextButton,Ry=()=>{const e=X(xne),t=X(vne),r=X(bne),n=X(yne),o=X(Sne),i=E(Cne),a=E(wne),s=E(jne),c=e.headerBarColor,u=n,f=A(D(t.surveyHeader))||"";s(!0),O.useEffect(()=>{let p=Object.keys(r);for(let m=0;m<p.length;m++)r[p[m]]="no response";o(r)},[o,r]);const d=O.useRef(null);O.useEffect(()=>(d.current=Date.now(),(async()=>{await i("survey"),localStorage.setItem("currentPage","survey")})(),()=>{Sr(d.current,"surveyPage","surveyPage")}),[i]);const g=()=>u?u.map(m=>m.type==="text"?l.jsx(CX,{check:a,opts:m},ee()):m.type==="textarea"?l.jsx(jX,{check:a,opts:m},ee()):m.type==="radio"?l.jsx(OX,{check:a,opts:m},ee()):m.type==="select"?l.jsx(see,{check:a,opts:m},ee()):m.type==="checkbox"?l.jsx(Are,{check:a,opts:m},ee()):m.type==="rating2"?l.jsx(Rre,{check:a,opts:m},ee()):m.type==="likert"?l.jsx(Kre,{check:a,opts:m},ee()):m.type==="rating5"?l.jsx(Bre,{check:a,opts:m},ee()):m.type==="rating10"?l.jsx(Vre,{check:a,opts:m},ee()):m.type==="information"?l.jsx(rne,{opts:m},ee()):null):l.jsx(Ine,{children:"No questions added."});return l.jsxs(le.Fragment,{children:[l.jsx(Mn,{}),l.jsx(pne,{}),l.jsx(lne,{}),l.jsx(One,{background:c,children:f}),l.jsx(Tne,{children:l.jsx(g,{})})]})},Tne=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
  margin-top: 50px;
`,One=C.div`
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
`,Ine=C.div`
  margin-top: 50px;
  font-size: 24px;
  font-weight: bold;
`;function Ene(e){var t=e==null?0:e.length;return t?e[t-1]:void 0}var Pne=Ene,$ne=wh,kne=jm;function Nne(e,t){return t.length<2?e:$ne(e,kne(t,0,-1))}var Mne=Nne,Ane=Ch,Dne=Pne,Rne=Mne,Lne=Js;function _ne(e,t){return t=Ane(t,e),e=Rne(e,t),e==null||delete e[Lne(Dne(t))]}var Fne=_ne,Bne=Fne,zne=Im,Hne=Array.prototype,Une=Hne.splice;function Vne(e,t){for(var r=e?t.length:0,n=r-1;r--;){var o=t[r];if(r==n||o!==i){var i=o;zne(o)?Une.call(e,o,1):Bne(e,o)}}return e}var Wne=Vne,qne=nj,Gne=Wne;function Kne(e,t){var r=[];if(!(e&&e.length))return r;var n=-1,o=[],i=e.length;for(t=qne(t);++n<i;){var a=e[n];t(a,n,e)&&(r.push(a),o.push(n))}return Gne(e,o),r}var Jne=Kne;const Do=gt(Jne),oj=(e,t)=>{e.statementList=Vu(e.statementList);let r=e.statementList.filter(d=>d.pinkChecked===!0),n=e.statementList.filter(d=>d.yellowChecked===!0),o=e.statementList.filter(d=>d.greenChecked===!0),i=0,a=0,s=0,c=0,u=0,f=0;for(;r.length>0&&i<50;)t.forEach(d=>{const g=d[0],p=d[1];if(e.vCols[g].length<p)do{if(r.length>0){let m=r.pop();if(m){let h=m.id;e.vCols[g].unshift(m),Do(e.statementList,y=>y.id===h)}}a=a+1}while(r.length>0&&e.vCols[g].length<p&&a<50);i=i+1});for(;n.length>0&&s<50;)t.forEach(d=>{const g=d[0],p=d[1];if(e.vCols[g].length<p)do{if(n.length>0){let m=n.pop();if(m){let h=m.id;e.vCols[g].push(m),Do(e.statementList,y=>y.id===h)}}c=c+1}while(n.length>0&&e.vCols[g].length<p&&c<50);s=s+1});for(;o.length>0&&u<50;)t.forEach(d=>{const g=d[0],p=d[1];if(e.vCols[g].length<p)do{if(o.length>0){let m=o.pop();if(m){let h=m.id;e.vCols[g].unshift(m),Do(e.statementList,y=>y.id===h)}}f=f+1}while(o.length>0&&e.vCols[g].length<p&&f<50);u=u+1});return e},Qne=e=>e.langObj,Yne=e=>e.triggerConfirmationFinishedModal,Zne=e=>e.setTriggerConfirmationFinishedModal,Ly=()=>{const e=X(Qne),t=E(Yne),r=E(Zne),n=A(D(e.thinningConfirmModalHead))||"",o=A(D(e.thinningConfirmModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(Xne,{children:n}),l.jsx("hr",{}),l.jsx(eoe,{children:o})]})},Xne=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,eoe=C.div`
  margin-top: 15px;
`,toe=e=>e.langObj,roe=e=>e.triggerThinningPreventNavModal,noe=e=>e.setTriggerThinningPreventNavModal,_y=()=>{const e=X(toe),t=E(roe),r=E(noe),n=A(D(e.thinningPreventNavModalHead))||"",o=A(D(e.thinningPreventNavModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(ooe,{children:n}),l.jsx("hr",{}),l.jsx(ioe,{children:o})]})},ooe=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,ioe=C.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,aoe=e=>e.langObj,soe=e=>{const t=X(aoe),r=A(D(t.numStatementsToSelect))||"",n=A(D(t.currentlySelectedNumber))||"";return l.jsxs(loe,{children:[e.part1," ",e.part2," ",e.part3,l.jsxs(coe,{maxNum:e.maxNum,selectedNum:e.selectedNum,children:[`${r}: ${e.maxNum}`," "]}),l.jsxs(uoe,{maxNum:e.maxNum,selectedNum:e.selectedNum,children:[`${n}: ${e.selectedNum}`," "]})]})},loe=C.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  justify-content: center;
  align-items: center;
  font-size: 1.6vw;
  font-weight: normal;
  text-align: center;
  color: black;
`,coe=C.span`
  width: 35vw;
  background-color: ${e=>e.selectedNum===e.maxNum?"white":"rgb(249, 249, 0)"};
  padding: 5px;
  margin-top: 10px;
  font-style: italic;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
`,uoe=C.span`
  width: 35vw;
  background-color: ${e=>e.selectedNum===e.maxNum?"white":e.selectedNum>e.maxNum?"#ff8080":"rgb(249, 249, 0)"};
  padding: 5px;
  margin-top: 0px;
  font-style: italic;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`,doe=e=>{let t=JSON.parse(localStorage.getItem("newCols"));e.forEach(r=>{let n=r.id,o=r.targetcol;t.statementList.forEach(i=>{i.id===n&&(t.vCols[o].push(i),Do(t.statementList,a=>a.id===n))})}),localStorage.setItem("newCols",JSON.stringify(t))},foe=e=>{let t=JSON.parse(localStorage.getItem("newCols"));e.forEach(r=>{let n=r.id,o=r.targetcol;t.statementList.forEach(i=>{i.id===n&&(t.vCols[o].push(i),Do(t.statementList,a=>a.id===n))})}),localStorage.setItem("newCols",JSON.stringify(t))},goe=e=>e.langObj,poe=e=>e.triggerThinHelpModal,moe=e=>e.setTriggerThinHelpModal,Fy=()=>{const e=X(goe),t=E(poe),r=E(moe),n=A(D(e.thinningHelpModalHead)),o=A(D(e.thinningHelpModalText)),i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(hoe,{children:n}),l.jsx("hr",{}),l.jsx(voe,{children:o})]})},hoe=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,voe=C.div`
  margin-top: 15px;
  font-size: calc(12px + 0.9vw);
  padding: 15px;
`,xoe=e=>e.langObj,yoe=e=>e.configObj,boe=e=>e.setProgressScore,Soe=e=>e.setCurrentPage,Coe=e=>e.setDisplayNextButton,woe=e=>e.setIsThinningFinished,joe=e=>e.isLeftSideFinished,Toe=e=>e.isRightSideFinished,Ooe=e=>e.cardFontSizeThin,Ioe=e=>e.cardHeightThin,By=()=>{var K,M,R,_,B,q,H,Q,U;const e=X(xoe),t=X(yoe),r=E(boe),n=E(Soe),o=E(Coe),i=E(woe),a=E(joe),s=E(Toe),c=E(Ooe),u=E(Ioe);let f=A(D(e.initialInstructionPart1))||"",d=A(D(e.initialInstructionPartNeg1))||"",g=A(D(e.initialInstructionPartNeg2))||"",p=A(D(e.initialInstructionPart2))||"",m=A(D(e.initialInstructionPart3))||"",h=A(D(e.thinPageTitle))||"",y=A(D(e.thinPageSubmitButton))||"",v=A(D(e.finalInstructions))||"";O.useEffect(()=>{const G=$=>{(s===!1||a===!1)&&($.preventDefault(),$.returnValue="")};return window.addEventListener("beforeunload",G),()=>{window.removeEventListener("beforeunload",G)}},[a,s]);let x=!0,[S,I]=Ee("selectedNegItems",JSON.parse(localStorage.getItem("negSorted"))),[k,T]=Ee("selectedPosItems",JSON.parse(localStorage.getItem("posSorted"))),[P,N]=Ee("thinDisplayControllerArray",JSON.parse(localStorage.getItem("thinDisplayControllerArray"))),j=O.useRef({part1:"",part2:"",part3:""}),F;if(((K=P[0])==null?void 0:K.side)==="right"&&(((M=P[0])==null?void 0:M.iteration)===1&&(j.current={part1:f,part2:"",part3:m}),((R=P[0])==null?void 0:R.iteration)>1&&(j.current={part1:"",part2:p,part3:m}),F=[...k]),((_=P[0])==null?void 0:_.side)==="left"&&(((B=P[0])==null?void 0:B.iteration)===1&&(j.current={part1:d,part2:"",part3:m}),((q=P[0])==null?void 0:q.iteration)>1&&(j.current={part1:"",part2:g,part3:m}),F=[...S]),P.length===0){x=!1,setTimeout(()=>{i(!0)},50);let G=JSON.parse(localStorage.getItem("finalSortColData")),$=JSON.parse(localStorage.getItem("newCols")),w=oj($,G);localStorage.setItem("columnStatements",JSON.stringify(w))}const V=G=>{var w,b;let $=G.target.getAttribute("data-targetcol");F.forEach(W=>{W.id===G.target.dataset.id&&(W.targetcol=$,W.selected=!W.selected)}),((w=P[0])==null?void 0:w.side)==="right"&&T([...F]),((b=P[0])==null?void 0:b.side)==="left"&&I([...F])},Z=()=>{var G,$;if(((G=P[0])==null?void 0:G.side)==="right"){let w=k.filter(W=>W.selected===!0),b=k.filter(W=>W.selected!==!0);localStorage.setItem("posSorted",JSON.stringify(b)),foe(w),P.shift(),N([...P]),T([...b]);return}if((($=P[0])==null?void 0:$.side)==="left"){let w=S.filter(W=>W.selected===!0),b=S.filter(W=>W.selected!==!0);doe(w),P.shift(),N([...P]),I([...b]);return}};o(!0);let Y=0;const z=O.useRef(null);O.useEffect(()=>(z.current=Date.now(),(async()=>{await n("thin"),localStorage.setItem("currentPage","thin"),await r(35)})(),()=>{Sr(z.current,"thinningPage","thinningPage")}),[n,r]);let J=(F||[]).map(G=>{var $,w,b;return G.selected===!0&&(Y=Y+1),l.jsx(Noe,{onClick:V,id:G.id,side:($=P[0])==null?void 0:$.side,fontSize:c,cardHeight:u,color:G.color,selected:G.selected,"data-targetcol":(w=P[0])==null?void 0:w.targetCol,"data-max":(b=P[0])==null?void 0:b.maxNum,"data-selected":G.selected,"data-id":G.id,children:G.statement},ee())});return x===!0?l.jsxs(l.Fragment,{children:[l.jsx(Mn,{}),l.jsx(Ly,{}),l.jsx(_y,{}),l.jsx(Fy,{}),l.jsx(zy,{background:t.headerBarColor,children:l.jsx(Hy,{children:h})}),l.jsx(Uy,{children:l.jsxs(Eoe,{children:[l.jsxs(Poe,{children:[l.jsx(soe,{part1:j.current.part1,part2:j.current.part2,part3:j.current.part3,maxNum:(H=P[0])==null?void 0:H.maxNum,selectedNum:Y}),l.jsx($oe,{onClick:Z,disabled:Y!==((Q=P[0])==null?void 0:Q.maxNum),isActive:Y===((U=P[0])==null?void 0:U.maxNum),children:y})]}),l.jsx(koe,{children:J})]})})]}):l.jsxs(l.Fragment,{children:[l.jsx(Mn,{}),l.jsx(Ly,{}),l.jsx(_y,{}),l.jsx(Fy,{}),l.jsx(zy,{background:t.headerBarColor,children:l.jsx(Hy,{children:h})}),l.jsx(Uy,{children:l.jsx(Moe,{children:l.jsx(Aoe,{children:v})})})]})},zy=C.header`
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
`,Hy=C.h1`
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
`,Uy=C.main`
  padding-top: 80px; /* Account for fixed header */
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);

  @media (max-width: 768px) {
    padding-top: 70px;
  }
`,Eoe=C.div`
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
`,Poe=C.section`
  background: white;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
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
`,$oe=C.button`
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
`,koe=C.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
  padding: 0;

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
`,Noe=C.div`
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
  font-size: clamp(0.875rem, ${e=>(e.fontSize||14)/16}rem + 0.2vw, 1.125rem);
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
`,Moe=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 120px);
  padding: 2rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Aoe=C.div`
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
`;class Al extends le.Component{render(){return l.jsxs("div",{children:[" ",l.jsx("h1",{children:"404"})," ",l.jsx("p",{children:"Page doesn't exist"})]})}}const Doe=e=>{var c,u,f,d,g,p,m,h,y,v,x,S,I,k,T,P,N,j,F,V,Z,Y,z,J,K,M,R,_,B,q,H,Q,U,G,$,w,b,W,L,re,ie,ge,se,ae,ye,me,ue,Se,he,Ce,Ve,ze,be,Oe,st,pt,Fe,yt,mt,ar,_r,Dn,We,sr,da,fa,ga,pa,$e,Be,rt,ct,Ge,Gt,nn,Rn,Zo,Xo,on,Nh,Mh,Ah,Dh,Rh,Lh,_h,Fh,Bh,zh,Hh,Uh,Vh,Wh,qh,Gh,Kh,Jh,Qh,Yh,Zh,Xh,ev;const t=e.elements[0].elements,r={};let n,o=[];for(let yo=0;yo<t.length;yo++){let ce,oe=t[yo],ht=t[yo].attributes.id;ht==="survey"&&o.push([...t[yo].elements]),"elements"in oe&&(ce=(u=(c=t[yo])==null?void 0:c.elements[0])==null?void 0:u.text,ht!=="survey"&&(ht==="columnHeadersColorsArray"||ht==="columnColorsArray"||ht==="qSortHeaderNumbers"||ht==="qSortHeaders"||ht==="qSortPattern"||(ce==="true"?ce=!0:ce==="false"?ce=!1:isNaN(ce)||(ce=+ce),r[ht]=ce)))}const i={};if(o.length>0){n=[];for(let ce=0;ce<o.length;ce++){let oe={},ht=o[ce][0].attributes.type;if(ht==="information"){oe.id=`itemNum${ce+1}`,oe.itemNum=ce+1,oe.type="information",oe.background=o[ce][1].attributes.bg;try{oe.options=(d=(f=o[ce][1])==null?void 0:f.elements[0])==null?void 0:d.text}catch(ke){console.log(ke),oe.options=""}i[`itemNum${ce+1}`]="info - n.a.",n.push(oe)}if(ht==="text"){oe.id=`itemNum${ce+1}`;let ke=JSON.parse((p=(g=o[ce][0])==null?void 0:g.attributes)==null?void 0:p.required);ke==="true"||ke===!0?(ke=!0,i[`itemNum${ce+1}`]="no-*?*-response"):i[`itemNum${ce+1}`]="no response",oe.itemNum=ce+1,oe.type="text",oe.required=ke;try{oe.label=(h=(m=o[ce][1])==null?void 0:m.elements[0])==null?void 0:h.text}catch(pe){console.log(pe),oe.label=""}try{oe.note=(v=(y=o[ce][2])==null?void 0:y.elements[0])==null?void 0:v.text}catch{oe.note=""}try{if(o[ce][0].attributes.limitLength===void 0)oe.limitLength=JSON.parse((S=(x=o[ce][0])==null?void 0:x.attributes)==null?void 0:S.limitLength);else{let pe=JSON.parse((k=(I=o[ce][0])==null?void 0:I.attributes)==null?void 0:k.limitLength);oe.limitLength=pe}}catch(pe){console.log(pe),oe.limitLength="999"}try{oe.restricted=(P=(T=o[ce][0])==null?void 0:T.attributes)==null?void 0:P.restricted}catch(pe){console.log(pe),oe.restricted="false"}try{oe.limited=(j=(N=o[ce][0])==null?void 0:N.attributes)==null?void 0:j.limited}catch(pe){console.log(pe),oe.limited="false"}try{oe.placeholder=(V=(F=o[ce][3])==null?void 0:F.elements[0])==null?void 0:V.text}catch{oe.placeholder=""}oe.hasBeenAnswered=!1,n.push(oe)}if(ht==="textarea"){oe.id=`itemNum${ce+1}`;let ke=JSON.parse((Y=(Z=o[ce][0])==null?void 0:Z.attributes)==null?void 0:Y.required);ke==="true"||ke===!0?(ke=!0,i[`itemNum${ce+1}`]="no-*?*-response"):i[`itemNum${ce+1}`]="no response",oe.itemNum=ce+1,oe.type="textarea";try{oe.required=(J=(z=o[ce][0])==null?void 0:z.attributes)==null?void 0:J.required}catch(pe){console.log(pe),oe.required=!1}try{oe.label=(M=(K=o[ce][1])==null?void 0:K.elements[0])==null?void 0:M.text}catch(pe){console.log(pe),oe.label=""}try{oe.note=(_=(R=o[ce][2])==null?void 0:R.elements[0])==null?void 0:_.text}catch{oe.note=""}try{oe.placeholder=(q=(B=o[ce][3])==null?void 0:B.elements[0])==null?void 0:q.text}catch(pe){console.log(pe),oe.placeholder=""}oe.hasBeenAnswered=!1,n.push(oe)}if(ht==="radio"){oe.id=`itemNum${ce+1}`;let ke=JSON.parse((Q=(H=o[ce][0])==null?void 0:H.attributes)==null?void 0:Q.required);ke==="true"||ke===!0?(ke=!0,i[`itemNum${ce+1}`]="no-*?*-response"):i[`itemNum${ce+1}`]="no response",oe.itemNum=ce+1,oe.type="radio";try{oe.required=JSON.parse((G=(U=o[ce][0])==null?void 0:U.attributes)==null?void 0:G.required)}catch(pe){console.log(pe),oe.required="false"}try{oe.label=(w=($=o[ce][1])==null?void 0:$.elements[0])==null?void 0:w.text}catch(pe){console.log(pe),oe.label=""}try{oe.note=(W=(b=o[ce][2])==null?void 0:b.elements[0])==null?void 0:W.text}catch(pe){console.log(pe),oe.note=""}try{oe.options=(re=(L=o[ce][0])==null?void 0:L.elements[0])==null?void 0:re.text}catch(pe){console.log(pe),oe.options=""}oe.hasBeenAnswered=!1,n.push(oe)}if(ht==="select"){oe.id=`itemNum${ce+1}`;let ke=JSON.parse((ge=(ie=o[ce][0])==null?void 0:ie.attributes)==null?void 0:ge.required);ke==="true"||ke===!0?(ke=!0,i[`itemNum${ce+1}`]="no-*?*-response"):i[`itemNum${ce+1}`]="no response",oe.itemNum=ce+1,oe.type="select";try{oe.required=(ae=(se=o[ce][0])==null?void 0:se.attributes)==null?void 0:ae.required}catch(pe){console.log(pe),oe.required="false"}try{oe.label=(me=(ye=o[ce][1])==null?void 0:ye.elements[0])==null?void 0:me.text}catch(pe){console.log(pe),oe.label=""}try{oe.options=(Se=(ue=o[ce][0])==null?void 0:ue.elements[0])==null?void 0:Se.text}catch(pe){console.log(pe),oe.options=""}try{oe.note=(Ce=(he=o[ce][2])==null?void 0:he.elements[0])==null?void 0:Ce.text}catch(pe){console.log(pe),oe.note=""}oe.hasBeenAnswered=!1,n.push(oe)}if(ht==="checkbox"){oe.id=`itemNum${ce+1}`;let ke=JSON.parse((ze=(Ve=o[ce][0])==null?void 0:Ve.attributes)==null?void 0:ze.required);ke==="true"||ke===!0?(ke=!0,i[`itemNum${ce+1}`]="no-*?*-response"):i[`itemNum${ce+1}`]="no response",oe.itemNum=ce+1,oe.type="checkbox";try{oe.required=JSON.parse((Oe=(be=o[ce][0])==null?void 0:be.attributes)==null?void 0:Oe.required)}catch(pe){console.log(pe),oe.required="false"}try{oe.label=(pt=(st=o[ce][1])==null?void 0:st.elements[0])==null?void 0:pt.text}catch(pe){console.log(pe),oe.label=""}try{oe.options=(yt=(Fe=o[ce][0])==null?void 0:Fe.elements[0])==null?void 0:yt.text}catch(pe){console.log(pe),oe.options=""}try{oe.note=(ar=(mt=o[ce][2])==null?void 0:mt.elements[0])==null?void 0:ar.text}catch(pe){console.log(pe),oe.note=""}oe.hasBeenAnswered=!1,n.push(oe)}if(ht==="rating2"){oe.id=`itemNum${ce+1}`;let ke=JSON.parse((Dn=(_r=o[ce][0])==null?void 0:_r.attributes)==null?void 0:Dn.required);ke==="true"||ke===!0?(ke=!0,i[`itemNum${ce+1}`]="no-*?*-response"):i[`itemNum${ce+1}`]="no response",oe.itemNum=ce+1,oe.type="rating2";try{oe.required=(sr=(We=o[ce][0])==null?void 0:We.attributes)==null?void 0:sr.required}catch(pe){console.log(pe),oe.required="false"}try{oe.label=(fa=(da=o[ce][1])==null?void 0:da.elements[0])==null?void 0:fa.text}catch(pe){console.log(pe),oe.label=""}try{oe.scale=(pa=(ga=o[ce][0])==null?void 0:ga.attributes)==null?void 0:pa.scale}catch(pe){console.log(pe),oe.scale="Yes;;;No"}try{oe.options=(Be=($e=o[ce][0])==null?void 0:$e.elements[0])==null?void 0:Be.text}catch(pe){console.log(pe),oe.options=""}try{oe.note=(ct=(rt=o[ce][2])==null?void 0:rt.elements[0])==null?void 0:ct.text}catch(pe){console.log(pe),oe.note=""}oe.hasBeenAnswered=!1,n.push(oe)}if(ht==="likert"){oe.id=`itemNum${ce+1}`;let ke=JSON.parse((Gt=(Ge=o[ce][0])==null?void 0:Ge.attributes)==null?void 0:Gt.required);ke==="true"||ke===!0?(ke=!0,i[`itemNum${ce+1}`]="no-*?*-response"):i[`itemNum${ce+1}`]="no response",oe.itemNum=ce+1,oe.type="likert";try{oe.required=(Rn=(nn=o[ce][0])==null?void 0:nn.attributes)==null?void 0:Rn.required}catch(pe){console.log(pe),oe.required="false"}try{oe.label=(Xo=(Zo=o[ce][1])==null?void 0:Zo.elements[0])==null?void 0:Xo.text}catch(pe){console.log(pe),oe.label=""}try{oe.scale=(Nh=(on=o[ce][0])==null?void 0:on.attributes)==null?void 0:Nh.scale}catch(pe){console.log(pe),oe.scale="Strongly Disagree;;;Disagree;;;Neutral;;;Agree;;;Strongly Agree"}try{oe.options=(Ah=(Mh=o[ce][0])==null?void 0:Mh.elements[0])==null?void 0:Ah.text}catch(pe){console.log(pe),oe.options=""}oe.hasBeenAnswered=!1,n.push(oe)}if(ht==="rating5"){oe.id=`itemNum${ce+1}`;let ke=JSON.parse((Rh=(Dh=o[ce][0])==null?void 0:Dh.attributes)==null?void 0:Rh.required);ke==="true"||ke===!0?(ke=!0,i[`itemNum${ce+1}`]="no-*?*-response"):i[`itemNum${ce+1}`]="no response",oe.itemNum=ce+1,oe.type="rating5";try{oe.required=(_h=(Lh=o[ce][0])==null?void 0:Lh.attributes)==null?void 0:_h.required}catch(pe){console.log(pe),oe.required="false"}try{oe.label=(Bh=(Fh=o[ce][1])==null?void 0:Fh.elements[0])==null?void 0:Bh.text}catch(pe){console.log(pe),oe.label=""}try{oe.options=(Hh=(zh=o[ce][0])==null?void 0:zh.elements[0])==null?void 0:Hh.text}catch(pe){console.log(pe),oe.options=""}try{oe.note=(Vh=(Uh=o[ce][2])==null?void 0:Uh.elements[0])==null?void 0:Vh.text}catch(pe){console.log("rating 5 note error"),console.log(pe),oe.note=""}oe.hasBeenAnswered=!1,n.push(oe)}if(ht==="rating10"){oe.id=`itemNum${ce+1}`;let ke=JSON.parse((qh=(Wh=o[ce][0])==null?void 0:Wh.attributes)==null?void 0:qh.required);ke==="true"||ke===!0?(ke=!0,i[`itemNum${ce+1}`]="no-*?*-response"):i[`itemNum${ce+1}`]="no response",oe.itemNum=ce+1,oe.type="rating10";try{oe.required=(Kh=(Gh=o[ce][0])==null?void 0:Gh.attributes)==null?void 0:Kh.required}catch(pe){console.log(pe),oe.required="false"}try{oe.label=(Qh=(Jh=o[ce][1])==null?void 0:Jh.elements[0])==null?void 0:Qh.text}catch(pe){console.log(pe),oe.label=""}try{oe.options=(Zh=(Yh=o[ce][0])==null?void 0:Yh.elements[0])==null?void 0:Zh.text}catch(pe){console.log(pe),oe.options=""}try{oe.note=(ev=(Xh=o[ce][2])==null?void 0:Xh.elements[0])==null?void 0:ev.text}catch(pe){console.log(pe),oe.note=""}oe.hasBeenAnswered=!1,n.push(oe)}}JSON.parse(localStorage.getItem("resultsSurvey"))||(localStorage.setItem("resultsSurvey",JSON.stringify(i)),localStorage.setItem("resultsSurveyArchive",JSON.stringify(i))),r.requiredAnswersObj=i}let a={},s=r==null?void 0:r.shuffleCards;return a.requiredAnswersObj=i,a.configObj=r,a.surveyQuestionObjArray=n,a.shuffleCards=s,a},Roe=e=>{const t={},r=e.map,n={};for(let s=0;s<r.column.length;s++){let c,u=r.column[s]._attributes.id,f=parseInt(u,10);f<0?(c=`columnN${Math.abs(f)}`,n[c]=[]):(c=`column${f}`,n[c]=[]);let d={};d.colNum=s+1,d.label=u,d.colour=`#${r.column[s]._attributes.colour}`,d.numCards=r.column[s]._text}for(let s=0;s<r.item.length;s++){let c=[],u=r.item[s]._text,f=r.item[s]._attributes.id;f==="qSortPattern"?c=u.split(",").map(d=>+d):c=u.split(","),t[f]=c}const o={},i=[...t.qSortHeaders];for(let s=0;s<i.length;s++){let c=`column${i[s]}`;o[c]=t.qSortHeaderNumbers[s]}t.postsortConvertObj=o,E.setState({vColsObj:n});const a={};return a.vColsObj=n,a.mapObj=t,a},Loe=e=>{try{const t=e.language.item,r={};for(let n=0;n<t.length;n++)r[t[n]._attributes.id]=t[n]._text,E.setState({[t[n]._attributes.id]:t[n]._text});return r}catch{console.log("there was a language import error")}},_oe=(e,t,r)=>{const n=e.statements.statement;let o=[];for(let c=0;c<n.length;c++){let u={};u.id=`s${n[c]._attributes.id}`,u.statementNum=n[c]._attributes.id,u.divColor="isUncertainStatement",u.cardColor="yellowSortCard",u.pinkChecked=!1,u.yellowChecked=!0,u.greenChecked=!1,u.sortValue=222,u.backgroundColor="#e0e0e0",u.statement=n[c]._text.trim(),o.push(u)}t===!0&&(o=[...Vu(o)]);let i=o.length;const a={};a.vCols=r,a.statementList=o,localStorage.setItem("hasBeenLoaded",!0);const s={};return s.columnStatements=a,s.totalStatements=i,s},Foe=e=>e.configObj,Boe=e=>e.presortFinished,zoe=e=>e.setTriggerPresortPreventNavModal,Hoe=e=>e.currentPage,Uoe=e=>e.setCheckRequiredQuestionsComplete,Voe=e=>e.setTriggerSurveyPreventNavModal,Woe=e=>e.isSortingFinished,qoe=e=>e.hasOverloadedColumn,Goe=e=>e.setTriggerSortPreventNavModal,Koe=e=>e.setTriggerSortOverloadedColumnModal,Joe=e=>e.columnStatements,Qoe=e=>e.setResults,Yoe=e=>e.setShowPostsortCommentHighlighting,Zoe=e=>e.setTriggerPostsortPreventNavModal,Xoe=e=>e.isThinningFinished,eie=e=>e.setTriggerThinningPreventNavModal,ij=e=>{let t;const r=X(Foe),n=E(Boe),o=E(zoe),i=E(Hoe),a=E(Uoe),s=E(Voe),c=E(Woe),u=E(qoe),f=E(Goe),d=E(Koe),g=X(Joe),p=E(Qoe),m=E(Yoe),h=E(Zoe),y=E(Xoe),v=E(eie),x=r.allowUnforcedSorts,S=r.postsortCommentsRequired,I=JSON.parse(localStorage.getItem("sortColumns"))||[],{history:k,to:T="/",onClick:P=()=>{},...N}=e,j=(F,V)=>{var Y;let Z=w3(g);if(i==="presort")return V===!1?(o(!0),!1):!0;if(i==="thin")return y===!1?(console.log("thin"),v(!0),!1):!0;if(i==="sort")return c===!1?((Y=I==null?void 0:I.imagesList)==null?void 0:Y.length)===0?F===!0?(p(Z),f(!1),!0):u===!0?(f(!1),d(!0),!1):(p(Z),f(!1),!0):(f(!0),!1):F===!0?(f(!1),!0):u===!0?(f(!1),d(!0),!1):(f(!1),!0);if(i==="postsort"){let z=+localStorage.getItem("postsortCommentCardCount");const J=ii(JSON.parse(localStorage.getItem("HC-requiredCommentsObj")))||[],K=ii(JSON.parse(localStorage.getItem("HC2-requiredCommentsObj")))||[],M=ii(JSON.parse(localStorage.getItem("LC-requiredCommentsObj")))||[],R=ii(JSON.parse(localStorage.getItem("LC2-requiredCommentsObj")))||[],_=[...J,...K,...M,...R];return(_.includes("false")||_.includes(!1)||_.length<z)&&S===!0?(m(!0),h(!0),!1):!0}if(i==="survey"){let z=JSON.parse(localStorage.getItem("resultsSurvey"));return ii(z).includes("no-*?*-response")?(a(!0),s(!0),!1):!0}return!0};return l.jsx(rie,{...N,onClick:F=>{P&&P(F),t=j(x,n),t&&k.push(T)},tabindex:"0"})},tie=Ki(ij);ij.propTypes={to:Ur.string,onClick:Ur.func,history:Ur.object.isRequired,location:Ur.object,match:Ur.object,staticContext:Ur.object,rest:Ur.object};const rie=C.button`
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
`,nie=e=>e.langObj,oie=e=>e.cardFontSizeSort,iie=e=>e.setCardFontSizeSort,aie=e=>e.cardFontSizePresort,sie=e=>e.setCardFontSizePresort,lie=e=>e.cardFontSizePostsort,cie=e=>e.setCardFontSizePostsort,uie=e=>e.currentPage,die=e=>e.setCardFontSizeThin,fie=e=>e.cardFontSizeThin,gie=()=>{const e=X(nie);let t=E(oie),r=E(lie),n=E(aie);const o=A(D(e.fontSizeText))||"",i=E(iie),a=E(uie),s=+localStorage.getItem("fontSizeSort"),c=+localStorage.getItem("fontSizePostsort"),u=+localStorage.getItem("fontSizePresort"),f=E(cie),d=E(sie),g=E(die),p=E(fie);u&&a==="presort"&&(n=u),s&&a==="sort"&&(t=s),c&&a==="postsort"&&(r=c);const m=()=>{if(a==="presort"){const v=n+1;localStorage.setItem("fontSizePresort",JSON.stringify(v)),d(v)}if(a==="thin"){const v=p+1;localStorage.setItem("fontSizeThin",JSON.stringify(v)),g(v)}if(a==="sort"){const v=t+1;localStorage.setItem("fontSizeSort",JSON.stringify(v)),i(v)}if(a==="postsort"){const v=r+1;localStorage.setItem("fontSizePostsort",JSON.stringify(v)),f(v)}},h=()=>{if(console.log("decreaseFontSize"),a==="presort"){const v=n-1;localStorage.setItem("fontSizePresort",JSON.stringify(v)),d(v)}if(a==="thin"){const v=p-1;localStorage.setItem("fontSizeThin",JSON.stringify(v)),g(v)}if(a==="sort"){const v=t-1;localStorage.setItem("fontSizeSort",JSON.stringify(v)),i(v)}if(a==="postsort"){const v=r-1;localStorage.setItem("fontSizePostsort",JSON.stringify(v)),f(v)}};return l.jsxs(pie,{children:[l.jsx(mie,{children:o}),l.jsx(Vy,{padBottom:"0.4em",onClick:h,children:"-"}),l.jsx(Vy,{padBottom:"0.25em",onClick:m,children:"+"})]})},Vy=C.button`
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
`,pie=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
`,mie=C.div`
  font-size: 16px;
  user-select: none;
`,hie=e=>e.langObj,vie=e=>e.cardHeightSort,xie=e=>e.setCardHeightSort,yie=e=>e.cardHeightPostsort,bie=e=>e.setCardHeightPostsort,Sie=e=>e.currentPage,Cie=e=>e.setCardHeightThin,wie=e=>e.cardHeightThin,jie=()=>{const e=X(hie);let t=E(vie);const r=localStorage.getItem("cardHeightSort");let n=E(yie);const o=localStorage.getItem("cardHeightPostsort"),i=E(Sie),a=E(xie),s=E(bie),c=E(Cie);let u=E(wie),f=localStorage.getItem("cardHeightThin");f&&(u=f),r&&(t=r),o&&(n=o);const d=A(D(e.cardHeightText))||"",g=()=>{if(i==="thin"){const h=+u+5;localStorage.setItem("cardHeightThin",JSON.stringify(h)),c(h)}if(i==="sort"){const h=+t+2;localStorage.setItem("cardHeightSort",JSON.stringify(h)),a(h)}if(i==="postsort"){const h=+n+2;localStorage.setItem("cardHeightPostsort",JSON.stringify(h)),s(h)}},p=()=>{if(i==="thin"){const h=+u-5;localStorage.setItem("cardHeightThin",JSON.stringify(h)),c(h)}if(i==="sort"){const h=+t-2;localStorage.setItem("cardHeightSort",JSON.stringify(h)),a(h)}if(i==="postsort"){const h=+n-2;localStorage.setItem("cardHeightPostsort",JSON.stringify(h)),s(h)}};return l.jsxs(Tie,{children:[l.jsx(Oie,{children:d}),l.jsx(Wy,{padBottom:"0.4em",onClick:p,children:"-"}),l.jsx(Wy,{padBottom:"0.25em",onClick:g,children:"+"})]})},Wy=C.button`
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
`,Tie=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 15px;
`,Oie=C.div`
  font-size: 16px;
  user-select: none;
`;var aj={};(function(e){Object.defineProperty(e,"__esModule",{value:!0});var t=O;function r(a){if(a&&a.__esModule)return a;var s=Object.create(null);return a&&Object.keys(a).forEach(function(c){if(c!=="default"){var u=Object.getOwnPropertyDescriptor(a,c);Object.defineProperty(s,c,u.get?u:{enumerable:!0,get:function(){return a[c]}})}}),s.default=a,Object.freeze(s)}var n=r(t);/*! *****************************************************************************
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
	***************************************************************************** */var o=function(){return o=Object.assign||function(s){for(var c,u=1,f=arguments.length;u<f;u++){c=arguments[u];for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(s[d]=c[d])}return s},o.apply(this,arguments)},i=function(a){var s=a.bgColor,c=s===void 0?"#6a1b9a":s,u=a.height,f=u===void 0?"20px":u,d=a.width,g=d===void 0?"100%":d,p=a.borderRadius,m=p===void 0?"50px":p,h=a.labelAlignment,y=h===void 0?"right":h,v=a.baseBgColor,x=v===void 0?"#e0e0de":v,S=a.labelColor,I=S===void 0?"#fff":S,k=a.labelSize,T=k===void 0?"15px":k,P=a.isLabelVisible,N=P===void 0?!0:P,j=a.dir,F=j===void 0?"ltr":j,V=a.ariaValuemin,Z=V===void 0?0:V,Y=a.ariaValuemax,z=Y===void 0?100:Y,J=a.ariaValuetext,K=J===void 0?null:J,M=a.maxCompleted,R=M===void 0?100:M,_=a.animateOnRender,B=_===void 0?!1:_,q=a.initCompletedOnAnimation,H=q===void 0?0:q,Q=a.isIndeterminate,U=Q===void 0?!1:Q,G=a.completed,$=a.margin,w=a.padding,b=a.customLabelStyles,W=a.transitionDuration,L=a.transitionTimingFunction,re=a.className,ie=a.customLabel,ge=a.barContainerClassName,se=a.completedClassName,ae=a.labelClassName,ye=function(mt){return mt==="left"?"flex-start":mt==="center"?"center":mt==="right"?"flex-end":null},me=ye(y),ue=typeof H=="number"?"".concat(H,"%"):H,Se=function(mt,ar){if(mt){var _r=Number(ar)/mt;return _r>1?"100%":"".concat(_r*100,"%")}return ue},he=Se(R,G),Ce=n.useState(ue),Ve=Ce[0],ze=Ce[1],be={height:f,background:x,borderRadius:m,padding:w,width:g,margin:$,overflow:"hidden"},Oe={height:f,width:U?"100%":B?Ve:he,background:c,transition:U?"none":"width ".concat(W||"1s"," ").concat(L||"ease-in-out"),borderRadius:"inherit",display:"flex",alignItems:"center",justifyContent:y!=="outside"&&me?me:"normal",animation:U?"indeterminate 1.5s infinite linear":"none"},st=o({padding:y==="outside"?"0 0 0 5px":"5px",color:I,fontWeight:"bold",fontSize:T,display:N?"initial":"none"},b),pt={display:y==="outside"?"flex":"initial",alignItems:y==="outside"?"center":"initial"},Fe=typeof G=="number"?"".concat(G,"%"):"".concat(G),yt=ie||Fe;return n.useEffect(function(){B&&!U&&requestAnimationFrame(function(){return ze(he)})},[he,B,U]),n.createElement("div",{style:re?void 0:pt,className:re,dir:F,role:"progressbar","aria-valuenow":U?void 0:parseFloat(yt),"aria-valuemin":Z,"aria-valuemax":z,"aria-valuetext":"".concat(K===null?yt:K)},n.createElement("div",{style:ge?void 0:be,className:ge},n.createElement("div",{style:se?void 0:Oe,className:se},y!=="outside"&&n.createElement("span",{style:ae?void 0:st,className:ae},yt))),y==="outside"&&n.createElement("span",{style:ae?void 0:st,className:ae},yt),n.createElement("style",null,`
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
        `))};e.default=i})(aj);const Iie=gt(aj),Eie=e=>{let t;if(e==="landing")return t=10,t;if(e==="consent")return t=15,t;if(e==="presort")return t=20,t;if(e==="thin")return t=40,t;if(e==="sort")return t=60,t;if(e==="postsort")return t=80,t;if(e==="survey")return t=90,t;if(e==="submit")return t=100,t},Pie=e=>e.langObj,$ie=e=>e.configObj,kie=e=>e.currentPage,Nie=e=>e.setTriggerLandingModal,Mie=e=>e.setTriggerPresortModal,Aie=e=>e.setTriggerSortModal,Die=e=>e.setTriggerPostsortModal,Rie=e=>e.setTriggerSurveyModal,Lie=e=>e.setTriggerSubmitModal,_ie=e=>e.setTriggerConsentModal,Fie=e=>e.setTriggerThinHelpModal,Bie=()=>{const e=X(Pie),t=X($ie),r=E(kie),n=E(Nie),o=E(Mie),i=E(Aie),a=E(Die),s=E(Rie),c=E(Lie),u=E(_ie),f=E(Fie);let d=A(D(e.btnHelp))||"";r==="landing"&&(d=A(D(e.btnHelpLanding))||""),r==="consent"&&(d=A(D(e.btnHelpConsent))||"");const g=()=>{console.log("currentPage",r),r==="landing"&&n(!0),r==="consent"&&u(!0),r==="presort"&&o(!0),r==="thin"&&f(!0),r==="sort"&&i(!0),r==="postsort"&&a(!0),r==="survey"&&s(!0),r==="submit"&&c(!0)};return r==="consent"?t.showConsentPageHelpModal===!0?l.jsx(qy,{tabindex:"0",onClick:g,children:d}):null:l.jsx(qy,{tabindex:"0",onClick:g,children:d})},qy=C.button`
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
`,sj=(e,t,r,n,o)=>e==="consent"?n===!0?"/landing":"/presort":e==="landing"?"/presort":e==="presort"?o===!0?"/thin":"/sort":e==="thin"?"/sort":e==="sort"?t===!0?"/postsort":r===!0?"/survey":"/submit":e==="postsort"?r===!0?"/survey":"/submit":e==="survey"?"/submit":e==="submit"?"/":"/nopagefound",zie=e=>{const{history:t,location:r,match:n,staticContext:o,to:i,onClick:a,...s}=e;return l.jsx(Uie,{...s,onClick:c=>{a&&a(c),t.push(i)},tabindex:"0"})},Hie=Ki(zie),Uie=C.button`
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
`,Vie=e=>e.langObj,Wie=e=>e.configObj,qie=e=>e.displayNextButton,Gie=e=>e.currentPage,Kie=e=>e.progressScoreAdditional,Jie=e=>e.progressScoreAdditionalSort,Qie=e=>e.localUsercode,Gy=()=>{const e=X(Vie),t=X(Wie);let r=E(qie);const n=E(Gie);E(Kie),E(Jie);const o=E(Qie);let i=!0,a=!0,s=!0,c=!0,u,f=e.postsortBackButtonText;n==="postsort"&&t.showBackButton?u=!0:u=!1;let d=A(D('{{{center}}}{{{img src="./logo/logo.png" height="40" width="250" /}}}{{{/center}}}')),g;if(n==="landing"?g=A(D(e.btnNextLanding))||"":n==="consent"?g=A(D(e.btnNextConsent))||"":g=A(D(e.btnNext))||"",n==="sort"&&t.setupTarget==="local"){const T=o,P=t.studyTitle,N=new Date,j=N.getFullYear()+"-"+(N.getMonth()+1)+"-"+N.getDate(),F=N.getHours()+":"+N.getMinutes()+":"+N.getSeconds(),V=j+" "+F;d=`${T} - ${P} - ${V}`}const p=t.showPostsort,m=t.showSurvey,h=t.useImages,y=t.showConsentPage,v=t.useThinProcess;let x=!0;const S=Eie(n);n==="consent"?x=!1:x=!0,n==="submit"&&(r=!1),t.setupTarget==="local"&&n==="landing"&&(r=!1,s=!1),n==="submit"&&(s=!1),n==="presort"&&(t.useImages===!0?(i=!1,a=!1):(i=!0,a=!1)),n==="sort"&&(h===!0?(i=!0,a=!0,c=!1):(i=!0,a=!0,c=!0)),(n==="landing"||n==="survey"||n==="submit"||n==="consent")&&(i=!1);let I=l.jsxs(le.Fragment,{children:[s&&l.jsx(Bie,{}),i&&l.jsxs(Zie,{children:[c&&l.jsx(gie,{}),a&&l.jsx(jie,{})]}),l.jsx(Xie,{children:x&&l.jsx(Iie,{completed:S,width:"100px",bgColor:"#337ab7",labelColor:"#f0f0f0",baseBgColor:"lightgray"})})]});const k=sj(n,p,m,y,v);return l.jsxs(Yie,{children:[l.jsx(eae,{children:d}),l.jsx(tae,{children:I}),l.jsxs(rae,{children:[u&&l.jsx(Hie,{to:"/sort",children:f}),r&&l.jsx(tie,{to:k,children:g})]})]})},Yie=C.footer`
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top: 1px solid lightgray;

  display: inline-grid;
  grid-template-columns: 16% 1fr 16%;
  align-items: center;
`,Zie=C.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
`,Xie=C.div`
  align-self: center;
  justify-self: center;
  margin-left: 25px;
`,eae=C.div`
  padding-top: 5px;
  padding-left: 5px;
  display: flex;
  justify-self: start;
  align-self: center;
  text-align: center;
`,tae=C.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`,rae=C.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;var lj={};const nae={},oae=Object.freeze(Object.defineProperty({__proto__:null,default:nae},Symbol.toStringTag,{value:"Module"})),Ky=gS(oae);(function(e){(function(t){t.parser=function(w,b){return new n(w,b)},t.SAXParser=n,t.SAXStream=f,t.createStream=u,t.MAX_BUFFER_LENGTH=64*1024;var r=["comment","sgmlDecl","textNode","tagName","doctype","procInstName","procInstBody","entity","attribName","attribValue","cdata","script"];t.EVENTS=["text","processinginstruction","sgmldeclaration","doctype","comment","opentagstart","attribute","opentag","closetag","opencdata","cdata","closecdata","error","end","ready","script","opennamespace","closenamespace"];function n(w,b){if(!(this instanceof n))return new n(w,b);var W=this;i(W),W.q=W.c="",W.bufferCheckPosition=t.MAX_BUFFER_LENGTH,W.opt=b||{},W.opt.lowercase=W.opt.lowercase||W.opt.lowercasetags,W.looseCase=W.opt.lowercase?"toLowerCase":"toUpperCase",W.tags=[],W.closed=W.closedRoot=W.sawRoot=!1,W.tag=W.error=null,W.strict=!!w,W.noscript=!!(w||W.opt.noscript),W.state=j.BEGIN,W.strictEntities=W.opt.strictEntities,W.ENTITIES=W.strictEntities?Object.create(t.XML_ENTITIES):Object.create(t.ENTITIES),W.attribList=[],W.opt.xmlns&&(W.ns=Object.create(h)),W.opt.unquotedAttributeValues===void 0&&(W.opt.unquotedAttributeValues=!w),W.trackPosition=W.opt.position!==!1,W.trackPosition&&(W.position=W.line=W.column=0),V(W,"onready")}Object.create||(Object.create=function(w){function b(){}b.prototype=w;var W=new b;return W}),Object.keys||(Object.keys=function(w){var b=[];for(var W in w)w.hasOwnProperty(W)&&b.push(W);return b});function o(w){for(var b=Math.max(t.MAX_BUFFER_LENGTH,10),W=0,L=0,re=r.length;L<re;L++){var ie=w[r[L]].length;if(ie>b)switch(r[L]){case"textNode":Y(w);break;case"cdata":Z(w,"oncdata",w.cdata),w.cdata="";break;case"script":Z(w,"onscript",w.script),w.script="";break;default:J(w,"Max buffer length exceeded: "+r[L])}W=Math.max(W,ie)}var ge=t.MAX_BUFFER_LENGTH-W;w.bufferCheckPosition=ge+w.position}function i(w){for(var b=0,W=r.length;b<W;b++)w[r[b]]=""}function a(w){Y(w),w.cdata!==""&&(Z(w,"oncdata",w.cdata),w.cdata=""),w.script!==""&&(Z(w,"onscript",w.script),w.script="")}n.prototype={end:function(){K(this)},write:$,resume:function(){return this.error=null,this},close:function(){return this.write(null)},flush:function(){a(this)}};var s;try{s=Ky.Stream}catch{s=function(){}}s||(s=function(){});var c=t.EVENTS.filter(function(w){return w!=="error"&&w!=="end"});function u(w,b){return new f(w,b)}function f(w,b){if(!(this instanceof f))return new f(w,b);s.apply(this),this._parser=new n(w,b),this.writable=!0,this.readable=!0;var W=this;this._parser.onend=function(){W.emit("end")},this._parser.onerror=function(L){W.emit("error",L),W._parser.error=null},this._decoder=null,c.forEach(function(L){Object.defineProperty(W,"on"+L,{get:function(){return W._parser["on"+L]},set:function(re){if(!re)return W.removeAllListeners(L),W._parser["on"+L]=re,re;W.on(L,re)},enumerable:!0,configurable:!1})})}f.prototype=Object.create(s.prototype,{constructor:{value:f}}),f.prototype.write=function(w){if(typeof Buffer=="function"&&typeof Buffer.isBuffer=="function"&&Buffer.isBuffer(w)){if(!this._decoder){var b=Ky.StringDecoder;this._decoder=new b("utf8")}w=this._decoder.write(w)}return this._parser.write(w.toString()),this.emit("data",w),!0},f.prototype.end=function(w){return w&&w.length&&this.write(w),this._parser.end(),!0},f.prototype.on=function(w,b){var W=this;return!W._parser["on"+w]&&c.indexOf(w)!==-1&&(W._parser["on"+w]=function(){var L=arguments.length===1?[arguments[0]]:Array.apply(null,arguments);L.splice(0,0,w),W.emit.apply(W,L)}),s.prototype.on.call(W,w,b)};var d="[CDATA[",g="DOCTYPE",p="http://www.w3.org/XML/1998/namespace",m="http://www.w3.org/2000/xmlns/",h={xml:p,xmlns:m},y=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,v=/[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/,x=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/,S=/[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;function I(w){return w===" "||w===`
`||w==="\r"||w==="	"}function k(w){return w==='"'||w==="'"}function T(w){return w===">"||I(w)}function P(w,b){return w.test(b)}function N(w,b){return!P(w,b)}var j=0;t.STATE={BEGIN:j++,BEGIN_WHITESPACE:j++,TEXT:j++,TEXT_ENTITY:j++,OPEN_WAKA:j++,SGML_DECL:j++,SGML_DECL_QUOTED:j++,DOCTYPE:j++,DOCTYPE_QUOTED:j++,DOCTYPE_DTD:j++,DOCTYPE_DTD_QUOTED:j++,COMMENT_STARTING:j++,COMMENT:j++,COMMENT_ENDING:j++,COMMENT_ENDED:j++,CDATA:j++,CDATA_ENDING:j++,CDATA_ENDING_2:j++,PROC_INST:j++,PROC_INST_BODY:j++,PROC_INST_ENDING:j++,OPEN_TAG:j++,OPEN_TAG_SLASH:j++,ATTRIB:j++,ATTRIB_NAME:j++,ATTRIB_NAME_SAW_WHITE:j++,ATTRIB_VALUE:j++,ATTRIB_VALUE_QUOTED:j++,ATTRIB_VALUE_CLOSED:j++,ATTRIB_VALUE_UNQUOTED:j++,ATTRIB_VALUE_ENTITY_Q:j++,ATTRIB_VALUE_ENTITY_U:j++,CLOSE_TAG:j++,CLOSE_TAG_SAW_WHITE:j++,SCRIPT:j++,SCRIPT_ENDING:j++},t.XML_ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'"},t.ENTITIES={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,OElig:338,oelig:339,Scaron:352,scaron:353,Yuml:376,fnof:402,circ:710,tilde:732,Alpha:913,Beta:914,Gamma:915,Delta:916,Epsilon:917,Zeta:918,Eta:919,Theta:920,Iota:921,Kappa:922,Lambda:923,Mu:924,Nu:925,Xi:926,Omicron:927,Pi:928,Rho:929,Sigma:931,Tau:932,Upsilon:933,Phi:934,Chi:935,Psi:936,Omega:937,alpha:945,beta:946,gamma:947,delta:948,epsilon:949,zeta:950,eta:951,theta:952,iota:953,kappa:954,lambda:955,mu:956,nu:957,xi:958,omicron:959,pi:960,rho:961,sigmaf:962,sigma:963,tau:964,upsilon:965,phi:966,chi:967,psi:968,omega:969,thetasym:977,upsih:978,piv:982,ensp:8194,emsp:8195,thinsp:8201,zwnj:8204,zwj:8205,lrm:8206,rlm:8207,ndash:8211,mdash:8212,lsquo:8216,rsquo:8217,sbquo:8218,ldquo:8220,rdquo:8221,bdquo:8222,dagger:8224,Dagger:8225,bull:8226,hellip:8230,permil:8240,prime:8242,Prime:8243,lsaquo:8249,rsaquo:8250,oline:8254,frasl:8260,euro:8364,image:8465,weierp:8472,real:8476,trade:8482,alefsym:8501,larr:8592,uarr:8593,rarr:8594,darr:8595,harr:8596,crarr:8629,lArr:8656,uArr:8657,rArr:8658,dArr:8659,hArr:8660,forall:8704,part:8706,exist:8707,empty:8709,nabla:8711,isin:8712,notin:8713,ni:8715,prod:8719,sum:8721,minus:8722,lowast:8727,radic:8730,prop:8733,infin:8734,ang:8736,and:8743,or:8744,cap:8745,cup:8746,int:8747,there4:8756,sim:8764,cong:8773,asymp:8776,ne:8800,equiv:8801,le:8804,ge:8805,sub:8834,sup:8835,nsub:8836,sube:8838,supe:8839,oplus:8853,otimes:8855,perp:8869,sdot:8901,lceil:8968,rceil:8969,lfloor:8970,rfloor:8971,lang:9001,rang:9002,loz:9674,spades:9824,clubs:9827,hearts:9829,diams:9830},Object.keys(t.ENTITIES).forEach(function(w){var b=t.ENTITIES[w],W=typeof b=="number"?String.fromCharCode(b):b;t.ENTITIES[w]=W});for(var F in t.STATE)t.STATE[t.STATE[F]]=F;j=t.STATE;function V(w,b,W){w[b]&&w[b](W)}function Z(w,b,W){w.textNode&&Y(w),V(w,b,W)}function Y(w){w.textNode=z(w.opt,w.textNode),w.textNode&&V(w,"ontext",w.textNode),w.textNode=""}function z(w,b){return w.trim&&(b=b.trim()),w.normalize&&(b=b.replace(/\s+/g," ")),b}function J(w,b){return Y(w),w.trackPosition&&(b+=`
Line: `+w.line+`
Column: `+w.column+`
Char: `+w.c),b=new Error(b),w.error=b,V(w,"onerror",b),w}function K(w){return w.sawRoot&&!w.closedRoot&&M(w,"Unclosed root tag"),w.state!==j.BEGIN&&w.state!==j.BEGIN_WHITESPACE&&w.state!==j.TEXT&&J(w,"Unexpected end"),Y(w),w.c="",w.closed=!0,V(w,"onend"),n.call(w,w.strict,w.opt),w}function M(w,b){if(typeof w!="object"||!(w instanceof n))throw new Error("bad call to strictFail");w.strict&&J(w,b)}function R(w){w.strict||(w.tagName=w.tagName[w.looseCase]());var b=w.tags[w.tags.length-1]||w,W=w.tag={name:w.tagName,attributes:{}};w.opt.xmlns&&(W.ns=b.ns),w.attribList.length=0,Z(w,"onopentagstart",W)}function _(w,b){var W=w.indexOf(":"),L=W<0?["",w]:w.split(":"),re=L[0],ie=L[1];return b&&w==="xmlns"&&(re="xmlns",ie=""),{prefix:re,local:ie}}function B(w){if(w.strict||(w.attribName=w.attribName[w.looseCase]()),w.attribList.indexOf(w.attribName)!==-1||w.tag.attributes.hasOwnProperty(w.attribName)){w.attribName=w.attribValue="";return}if(w.opt.xmlns){var b=_(w.attribName,!0),W=b.prefix,L=b.local;if(W==="xmlns")if(L==="xml"&&w.attribValue!==p)M(w,"xml: prefix must be bound to "+p+`
Actual: `+w.attribValue);else if(L==="xmlns"&&w.attribValue!==m)M(w,"xmlns: prefix must be bound to "+m+`
Actual: `+w.attribValue);else{var re=w.tag,ie=w.tags[w.tags.length-1]||w;re.ns===ie.ns&&(re.ns=Object.create(ie.ns)),re.ns[L]=w.attribValue}w.attribList.push([w.attribName,w.attribValue])}else w.tag.attributes[w.attribName]=w.attribValue,Z(w,"onattribute",{name:w.attribName,value:w.attribValue});w.attribName=w.attribValue=""}function q(w,b){if(w.opt.xmlns){var W=w.tag,L=_(w.tagName);W.prefix=L.prefix,W.local=L.local,W.uri=W.ns[L.prefix]||"",W.prefix&&!W.uri&&(M(w,"Unbound namespace prefix: "+JSON.stringify(w.tagName)),W.uri=L.prefix);var re=w.tags[w.tags.length-1]||w;W.ns&&re.ns!==W.ns&&Object.keys(W.ns).forEach(function(Ve){Z(w,"onopennamespace",{prefix:Ve,uri:W.ns[Ve]})});for(var ie=0,ge=w.attribList.length;ie<ge;ie++){var se=w.attribList[ie],ae=se[0],ye=se[1],me=_(ae,!0),ue=me.prefix,Se=me.local,he=ue===""?"":W.ns[ue]||"",Ce={name:ae,value:ye,prefix:ue,local:Se,uri:he};ue&&ue!=="xmlns"&&!he&&(M(w,"Unbound namespace prefix: "+JSON.stringify(ue)),Ce.uri=ue),w.tag.attributes[ae]=Ce,Z(w,"onattribute",Ce)}w.attribList.length=0}w.tag.isSelfClosing=!!b,w.sawRoot=!0,w.tags.push(w.tag),Z(w,"onopentag",w.tag),b||(!w.noscript&&w.tagName.toLowerCase()==="script"?w.state=j.SCRIPT:w.state=j.TEXT,w.tag=null,w.tagName=""),w.attribName=w.attribValue="",w.attribList.length=0}function H(w){if(!w.tagName){M(w,"Weird empty close tag."),w.textNode+="</>",w.state=j.TEXT;return}if(w.script){if(w.tagName!=="script"){w.script+="</"+w.tagName+">",w.tagName="",w.state=j.SCRIPT;return}Z(w,"onscript",w.script),w.script=""}var b=w.tags.length,W=w.tagName;w.strict||(W=W[w.looseCase]());for(var L=W;b--;){var re=w.tags[b];if(re.name!==L)M(w,"Unexpected close tag");else break}if(b<0){M(w,"Unmatched closing tag: "+w.tagName),w.textNode+="</"+w.tagName+">",w.state=j.TEXT;return}w.tagName=W;for(var ie=w.tags.length;ie-- >b;){var ge=w.tag=w.tags.pop();w.tagName=w.tag.name,Z(w,"onclosetag",w.tagName);var se={};for(var ae in ge.ns)se[ae]=ge.ns[ae];var ye=w.tags[w.tags.length-1]||w;w.opt.xmlns&&ge.ns!==ye.ns&&Object.keys(ge.ns).forEach(function(me){var ue=ge.ns[me];Z(w,"onclosenamespace",{prefix:me,uri:ue})})}b===0&&(w.closedRoot=!0),w.tagName=w.attribValue=w.attribName="",w.attribList.length=0,w.state=j.TEXT}function Q(w){var b=w.entity,W=b.toLowerCase(),L,re="";return w.ENTITIES[b]?w.ENTITIES[b]:w.ENTITIES[W]?w.ENTITIES[W]:(b=W,b.charAt(0)==="#"&&(b.charAt(1)==="x"?(b=b.slice(2),L=parseInt(b,16),re=L.toString(16)):(b=b.slice(1),L=parseInt(b,10),re=L.toString(10))),b=b.replace(/^0+/,""),isNaN(L)||re.toLowerCase()!==b?(M(w,"Invalid character entity"),"&"+w.entity+";"):String.fromCodePoint(L))}function U(w,b){b==="<"?(w.state=j.OPEN_WAKA,w.startTagPosition=w.position):I(b)||(M(w,"Non-whitespace before first tag."),w.textNode=b,w.state=j.TEXT)}function G(w,b){var W="";return b<w.length&&(W=w.charAt(b)),W}function $(w){var b=this;if(this.error)throw this.error;if(b.closed)return J(b,"Cannot write after close. Assign an onready handler.");if(w===null)return K(b);typeof w=="object"&&(w=w.toString());for(var W=0,L="";L=G(w,W++),b.c=L,!!L;)switch(b.trackPosition&&(b.position++,L===`
`?(b.line++,b.column=0):b.column++),b.state){case j.BEGIN:if(b.state=j.BEGIN_WHITESPACE,L==="\uFEFF")continue;U(b,L);continue;case j.BEGIN_WHITESPACE:U(b,L);continue;case j.TEXT:if(b.sawRoot&&!b.closedRoot){for(var re=W-1;L&&L!=="<"&&L!=="&";)L=G(w,W++),L&&b.trackPosition&&(b.position++,L===`
`?(b.line++,b.column=0):b.column++);b.textNode+=w.substring(re,W-1)}L==="<"&&!(b.sawRoot&&b.closedRoot&&!b.strict)?(b.state=j.OPEN_WAKA,b.startTagPosition=b.position):(!I(L)&&(!b.sawRoot||b.closedRoot)&&M(b,"Text data outside of root node."),L==="&"?b.state=j.TEXT_ENTITY:b.textNode+=L);continue;case j.SCRIPT:L==="<"?b.state=j.SCRIPT_ENDING:b.script+=L;continue;case j.SCRIPT_ENDING:L==="/"?b.state=j.CLOSE_TAG:(b.script+="<"+L,b.state=j.SCRIPT);continue;case j.OPEN_WAKA:if(L==="!")b.state=j.SGML_DECL,b.sgmlDecl="";else if(!I(L))if(P(y,L))b.state=j.OPEN_TAG,b.tagName=L;else if(L==="/")b.state=j.CLOSE_TAG,b.tagName="";else if(L==="?")b.state=j.PROC_INST,b.procInstName=b.procInstBody="";else{if(M(b,"Unencoded <"),b.startTagPosition+1<b.position){var ie=b.position-b.startTagPosition;L=new Array(ie).join(" ")+L}b.textNode+="<"+L,b.state=j.TEXT}continue;case j.SGML_DECL:if(b.sgmlDecl+L==="--"){b.state=j.COMMENT,b.comment="",b.sgmlDecl="";continue}b.doctype&&b.doctype!==!0&&b.sgmlDecl?(b.state=j.DOCTYPE_DTD,b.doctype+="<!"+b.sgmlDecl+L,b.sgmlDecl=""):(b.sgmlDecl+L).toUpperCase()===d?(Z(b,"onopencdata"),b.state=j.CDATA,b.sgmlDecl="",b.cdata=""):(b.sgmlDecl+L).toUpperCase()===g?(b.state=j.DOCTYPE,(b.doctype||b.sawRoot)&&M(b,"Inappropriately located doctype declaration"),b.doctype="",b.sgmlDecl=""):L===">"?(Z(b,"onsgmldeclaration",b.sgmlDecl),b.sgmlDecl="",b.state=j.TEXT):(k(L)&&(b.state=j.SGML_DECL_QUOTED),b.sgmlDecl+=L);continue;case j.SGML_DECL_QUOTED:L===b.q&&(b.state=j.SGML_DECL,b.q=""),b.sgmlDecl+=L;continue;case j.DOCTYPE:L===">"?(b.state=j.TEXT,Z(b,"ondoctype",b.doctype),b.doctype=!0):(b.doctype+=L,L==="["?b.state=j.DOCTYPE_DTD:k(L)&&(b.state=j.DOCTYPE_QUOTED,b.q=L));continue;case j.DOCTYPE_QUOTED:b.doctype+=L,L===b.q&&(b.q="",b.state=j.DOCTYPE);continue;case j.DOCTYPE_DTD:L==="]"?(b.doctype+=L,b.state=j.DOCTYPE):L==="<"?(b.state=j.OPEN_WAKA,b.startTagPosition=b.position):k(L)?(b.doctype+=L,b.state=j.DOCTYPE_DTD_QUOTED,b.q=L):b.doctype+=L;continue;case j.DOCTYPE_DTD_QUOTED:b.doctype+=L,L===b.q&&(b.state=j.DOCTYPE_DTD,b.q="");continue;case j.COMMENT:L==="-"?b.state=j.COMMENT_ENDING:b.comment+=L;continue;case j.COMMENT_ENDING:L==="-"?(b.state=j.COMMENT_ENDED,b.comment=z(b.opt,b.comment),b.comment&&Z(b,"oncomment",b.comment),b.comment=""):(b.comment+="-"+L,b.state=j.COMMENT);continue;case j.COMMENT_ENDED:L!==">"?(M(b,"Malformed comment"),b.comment+="--"+L,b.state=j.COMMENT):b.doctype&&b.doctype!==!0?b.state=j.DOCTYPE_DTD:b.state=j.TEXT;continue;case j.CDATA:L==="]"?b.state=j.CDATA_ENDING:b.cdata+=L;continue;case j.CDATA_ENDING:L==="]"?b.state=j.CDATA_ENDING_2:(b.cdata+="]"+L,b.state=j.CDATA);continue;case j.CDATA_ENDING_2:L===">"?(b.cdata&&Z(b,"oncdata",b.cdata),Z(b,"onclosecdata"),b.cdata="",b.state=j.TEXT):L==="]"?b.cdata+="]":(b.cdata+="]]"+L,b.state=j.CDATA);continue;case j.PROC_INST:L==="?"?b.state=j.PROC_INST_ENDING:I(L)?b.state=j.PROC_INST_BODY:b.procInstName+=L;continue;case j.PROC_INST_BODY:if(!b.procInstBody&&I(L))continue;L==="?"?b.state=j.PROC_INST_ENDING:b.procInstBody+=L;continue;case j.PROC_INST_ENDING:L===">"?(Z(b,"onprocessinginstruction",{name:b.procInstName,body:b.procInstBody}),b.procInstName=b.procInstBody="",b.state=j.TEXT):(b.procInstBody+="?"+L,b.state=j.PROC_INST_BODY);continue;case j.OPEN_TAG:P(v,L)?b.tagName+=L:(R(b),L===">"?q(b):L==="/"?b.state=j.OPEN_TAG_SLASH:(I(L)||M(b,"Invalid character in tag name"),b.state=j.ATTRIB));continue;case j.OPEN_TAG_SLASH:L===">"?(q(b,!0),H(b)):(M(b,"Forward-slash in opening tag not followed by >"),b.state=j.ATTRIB);continue;case j.ATTRIB:if(I(L))continue;L===">"?q(b):L==="/"?b.state=j.OPEN_TAG_SLASH:P(y,L)?(b.attribName=L,b.attribValue="",b.state=j.ATTRIB_NAME):M(b,"Invalid attribute name");continue;case j.ATTRIB_NAME:L==="="?b.state=j.ATTRIB_VALUE:L===">"?(M(b,"Attribute without value"),b.attribValue=b.attribName,B(b),q(b)):I(L)?b.state=j.ATTRIB_NAME_SAW_WHITE:P(v,L)?b.attribName+=L:M(b,"Invalid attribute name");continue;case j.ATTRIB_NAME_SAW_WHITE:if(L==="=")b.state=j.ATTRIB_VALUE;else{if(I(L))continue;M(b,"Attribute without value"),b.tag.attributes[b.attribName]="",b.attribValue="",Z(b,"onattribute",{name:b.attribName,value:""}),b.attribName="",L===">"?q(b):P(y,L)?(b.attribName=L,b.state=j.ATTRIB_NAME):(M(b,"Invalid attribute name"),b.state=j.ATTRIB)}continue;case j.ATTRIB_VALUE:if(I(L))continue;k(L)?(b.q=L,b.state=j.ATTRIB_VALUE_QUOTED):(b.opt.unquotedAttributeValues||J(b,"Unquoted attribute value"),b.state=j.ATTRIB_VALUE_UNQUOTED,b.attribValue=L);continue;case j.ATTRIB_VALUE_QUOTED:if(L!==b.q){L==="&"?b.state=j.ATTRIB_VALUE_ENTITY_Q:b.attribValue+=L;continue}B(b),b.q="",b.state=j.ATTRIB_VALUE_CLOSED;continue;case j.ATTRIB_VALUE_CLOSED:I(L)?b.state=j.ATTRIB:L===">"?q(b):L==="/"?b.state=j.OPEN_TAG_SLASH:P(y,L)?(M(b,"No whitespace between attributes"),b.attribName=L,b.attribValue="",b.state=j.ATTRIB_NAME):M(b,"Invalid attribute name");continue;case j.ATTRIB_VALUE_UNQUOTED:if(!T(L)){L==="&"?b.state=j.ATTRIB_VALUE_ENTITY_U:b.attribValue+=L;continue}B(b),L===">"?q(b):b.state=j.ATTRIB;continue;case j.CLOSE_TAG:if(b.tagName)L===">"?H(b):P(v,L)?b.tagName+=L:b.script?(b.script+="</"+b.tagName,b.tagName="",b.state=j.SCRIPT):(I(L)||M(b,"Invalid tagname in closing tag"),b.state=j.CLOSE_TAG_SAW_WHITE);else{if(I(L))continue;N(y,L)?b.script?(b.script+="</"+L,b.state=j.SCRIPT):M(b,"Invalid tagname in closing tag."):b.tagName=L}continue;case j.CLOSE_TAG_SAW_WHITE:if(I(L))continue;L===">"?H(b):M(b,"Invalid characters in closing tag");continue;case j.TEXT_ENTITY:case j.ATTRIB_VALUE_ENTITY_Q:case j.ATTRIB_VALUE_ENTITY_U:var ge,se;switch(b.state){case j.TEXT_ENTITY:ge=j.TEXT,se="textNode";break;case j.ATTRIB_VALUE_ENTITY_Q:ge=j.ATTRIB_VALUE_QUOTED,se="attribValue";break;case j.ATTRIB_VALUE_ENTITY_U:ge=j.ATTRIB_VALUE_UNQUOTED,se="attribValue";break}if(L===";"){var ae=Q(b);b.opt.unparsedEntities&&!Object.values(t.XML_ENTITIES).includes(ae)?(b.entity="",b.state=ge,b.write(ae)):(b[se]+=ae,b.entity="",b.state=ge)}else P(b.entity.length?S:x,L)?b.entity+=L:(M(b,"Invalid character in entity name"),b[se]+="&"+b.entity+L,b.entity="",b.state=ge);continue;default:throw new Error(b,"Unknown state: "+b.state)}return b.position>=b.bufferCheckPosition&&o(b),b}/*! http://mths.be/fromcodepoint v0.1.0 by @mathias */String.fromCodePoint||function(){var w=String.fromCharCode,b=Math.floor,W=function(){var L=16384,re=[],ie,ge,se=-1,ae=arguments.length;if(!ae)return"";for(var ye="";++se<ae;){var me=Number(arguments[se]);if(!isFinite(me)||me<0||me>1114111||b(me)!==me)throw RangeError("Invalid code point: "+me);me<=65535?re.push(me):(me-=65536,ie=(me>>10)+55296,ge=me%1024+56320,re.push(ie,ge)),(se+1===ae||re.length>L)&&(ye+=w.apply(null,re),re.length=0)}return ye};Object.defineProperty?Object.defineProperty(String,"fromCodePoint",{value:W,configurable:!0,writable:!0}):String.fromCodePoint=W}()})(e)})(lj);var jh={isArray:function(e){return Array.isArray?Array.isArray(e):Object.prototype.toString.call(e)==="[object Array]"}},iae=jh.isArray,Th={copyOptions:function(e){var t,r={};for(t in e)e.hasOwnProperty(t)&&(r[t]=e[t]);return r},ensureFlagExists:function(e,t){(!(e in t)||typeof t[e]!="boolean")&&(t[e]=!1)},ensureSpacesExists:function(e){(!("spaces"in e)||typeof e.spaces!="number"&&typeof e.spaces!="string")&&(e.spaces=0)},ensureAlwaysArrayExists:function(e){(!("alwaysArray"in e)||typeof e.alwaysArray!="boolean"&&!iae(e.alwaysArray))&&(e.alwaysArray=!1)},ensureKeyExists:function(e,t){(!(e+"Key"in t)||typeof t[e+"Key"]!="string")&&(t[e+"Key"]=t.compact?"_"+e:e)},checkFnExists:function(e,t){return e+"Fn"in t}},aae=lj,Pe=Th,Ii=jh.isArray,te,je;function sae(e){return te=Pe.copyOptions(e),Pe.ensureFlagExists("ignoreDeclaration",te),Pe.ensureFlagExists("ignoreInstruction",te),Pe.ensureFlagExists("ignoreAttributes",te),Pe.ensureFlagExists("ignoreText",te),Pe.ensureFlagExists("ignoreComment",te),Pe.ensureFlagExists("ignoreCdata",te),Pe.ensureFlagExists("ignoreDoctype",te),Pe.ensureFlagExists("compact",te),Pe.ensureFlagExists("alwaysChildren",te),Pe.ensureFlagExists("addParent",te),Pe.ensureFlagExists("trim",te),Pe.ensureFlagExists("nativeType",te),Pe.ensureFlagExists("nativeTypeAttributes",te),Pe.ensureFlagExists("sanitize",te),Pe.ensureFlagExists("instructionHasAttributes",te),Pe.ensureFlagExists("captureSpacesBetweenElements",te),Pe.ensureAlwaysArrayExists(te),Pe.ensureKeyExists("declaration",te),Pe.ensureKeyExists("instruction",te),Pe.ensureKeyExists("attributes",te),Pe.ensureKeyExists("text",te),Pe.ensureKeyExists("comment",te),Pe.ensureKeyExists("cdata",te),Pe.ensureKeyExists("doctype",te),Pe.ensureKeyExists("type",te),Pe.ensureKeyExists("name",te),Pe.ensureKeyExists("elements",te),Pe.ensureKeyExists("parent",te),Pe.checkFnExists("doctype",te),Pe.checkFnExists("instruction",te),Pe.checkFnExists("cdata",te),Pe.checkFnExists("comment",te),Pe.checkFnExists("text",te),Pe.checkFnExists("instructionName",te),Pe.checkFnExists("elementName",te),Pe.checkFnExists("attributeName",te),Pe.checkFnExists("attributeValue",te),Pe.checkFnExists("attributes",te),te}function cj(e){var t=Number(e);if(!isNaN(t))return t;var r=e.toLowerCase();return r==="true"?!0:r==="false"?!1:e}function Qs(e,t){var r;if(te.compact){if(!je[te[e+"Key"]]&&(Ii(te.alwaysArray)?te.alwaysArray.indexOf(te[e+"Key"])!==-1:te.alwaysArray)&&(je[te[e+"Key"]]=[]),je[te[e+"Key"]]&&!Ii(je[te[e+"Key"]])&&(je[te[e+"Key"]]=[je[te[e+"Key"]]]),e+"Fn"in te&&typeof t=="string"&&(t=te[e+"Fn"](t,je)),e==="instruction"&&("instructionFn"in te||"instructionNameFn"in te)){for(r in t)if(t.hasOwnProperty(r))if("instructionFn"in te)t[r]=te.instructionFn(t[r],r,je);else{var n=t[r];delete t[r],t[te.instructionNameFn(r,n,je)]=n}}Ii(je[te[e+"Key"]])?je[te[e+"Key"]].push(t):je[te[e+"Key"]]=t}else{je[te.elementsKey]||(je[te.elementsKey]=[]);var o={};if(o[te.typeKey]=e,e==="instruction"){for(r in t)if(t.hasOwnProperty(r))break;o[te.nameKey]="instructionNameFn"in te?te.instructionNameFn(r,t,je):r,te.instructionHasAttributes?(o[te.attributesKey]=t[r][te.attributesKey],"instructionFn"in te&&(o[te.attributesKey]=te.instructionFn(o[te.attributesKey],r,je))):("instructionFn"in te&&(t[r]=te.instructionFn(t[r],r,je)),o[te.instructionKey]=t[r])}else e+"Fn"in te&&(t=te[e+"Fn"](t,je)),o[te[e+"Key"]]=t;te.addParent&&(o[te.parentKey]=je),je[te.elementsKey].push(o)}}function uj(e){if("attributesFn"in te&&e&&(e=te.attributesFn(e,je)),(te.trim||"attributeValueFn"in te||"attributeNameFn"in te||te.nativeTypeAttributes)&&e){var t;for(t in e)if(e.hasOwnProperty(t)&&(te.trim&&(e[t]=e[t].trim()),te.nativeTypeAttributes&&(e[t]=cj(e[t])),"attributeValueFn"in te&&(e[t]=te.attributeValueFn(e[t],t,je)),"attributeNameFn"in te)){var r=e[t];delete e[t],e[te.attributeNameFn(t,e[t],je)]=r}}return e}function lae(e){var t={};if(e.body&&(e.name.toLowerCase()==="xml"||te.instructionHasAttributes)){for(var r=/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\w+))\s*/g,n;(n=r.exec(e.body))!==null;)t[n[1]]=n[2]||n[3]||n[4];t=uj(t)}if(e.name.toLowerCase()==="xml"){if(te.ignoreDeclaration)return;je[te.declarationKey]={},Object.keys(t).length&&(je[te.declarationKey][te.attributesKey]=t),te.addParent&&(je[te.declarationKey][te.parentKey]=je)}else{if(te.ignoreInstruction)return;te.trim&&(e.body=e.body.trim());var o={};te.instructionHasAttributes&&Object.keys(t).length?(o[e.name]={},o[e.name][te.attributesKey]=t):o[e.name]=e.body,Qs("instruction",o)}}function cae(e,t){var r;if(typeof e=="object"&&(t=e.attributes,e=e.name),t=uj(t),"elementNameFn"in te&&(e=te.elementNameFn(e,je)),te.compact){if(r={},!te.ignoreAttributes&&t&&Object.keys(t).length){r[te.attributesKey]={};var n;for(n in t)t.hasOwnProperty(n)&&(r[te.attributesKey][n]=t[n])}!(e in je)&&(Ii(te.alwaysArray)?te.alwaysArray.indexOf(e)!==-1:te.alwaysArray)&&(je[e]=[]),je[e]&&!Ii(je[e])&&(je[e]=[je[e]]),Ii(je[e])?je[e].push(r):je[e]=r}else je[te.elementsKey]||(je[te.elementsKey]=[]),r={},r[te.typeKey]="element",r[te.nameKey]=e,!te.ignoreAttributes&&t&&Object.keys(t).length&&(r[te.attributesKey]=t),te.alwaysChildren&&(r[te.elementsKey]=[]),je[te.elementsKey].push(r);r[te.parentKey]=je,je=r}function uae(e){te.ignoreText||!e.trim()&&!te.captureSpacesBetweenElements||(te.trim&&(e=e.trim()),te.nativeType&&(e=cj(e)),te.sanitize&&(e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")),Qs("text",e))}function dae(e){te.ignoreComment||(te.trim&&(e=e.trim()),Qs("comment",e))}function fae(e){var t=je[te.parentKey];te.addParent||delete je[te.parentKey],je=t}function gae(e){te.ignoreCdata||(te.trim&&(e=e.trim()),Qs("cdata",e))}function pae(e){te.ignoreDoctype||(e=e.replace(/^ /,""),te.trim&&(e=e.trim()),Qs("doctype",e))}function mae(e){e.note=e}var dj=function(e,t){var r=aae.parser(!0,{}),n={};if(je=n,te=sae(t),r.opt={strictEntities:!0},r.onopentag=cae,r.ontext=uae,r.oncomment=dae,r.onclosetag=fae,r.onerror=mae,r.oncdata=gae,r.ondoctype=pae,r.onprocessinginstruction=lae,r.write(e).close(),n[te.elementsKey]){var o=n[te.elementsKey];delete n[te.elementsKey],n[te.elementsKey]=o,delete n.text}return n},Jy=Th,hae=dj;function vae(e){var t=Jy.copyOptions(e);return Jy.ensureSpacesExists(t),t}var xae=function(e,t){var r,n,o,i;return r=vae(t),n=hae(e,r),i="compact"in r&&r.compact?"_parent":"parent","addParent"in r&&r.addParent?o=JSON.stringify(n,function(a,s){return a===i?"_":s},r.spaces):o=JSON.stringify(n,null,r.spaces),o.replace(/\u2028/g,"\\u2028").replace(/\u2029/g,"\\u2029")},Ne=Th,yae=jh.isArray,Lt,_t;function bae(e){var t=Ne.copyOptions(e);return Ne.ensureFlagExists("ignoreDeclaration",t),Ne.ensureFlagExists("ignoreInstruction",t),Ne.ensureFlagExists("ignoreAttributes",t),Ne.ensureFlagExists("ignoreText",t),Ne.ensureFlagExists("ignoreComment",t),Ne.ensureFlagExists("ignoreCdata",t),Ne.ensureFlagExists("ignoreDoctype",t),Ne.ensureFlagExists("compact",t),Ne.ensureFlagExists("indentText",t),Ne.ensureFlagExists("indentCdata",t),Ne.ensureFlagExists("indentAttributes",t),Ne.ensureFlagExists("indentInstruction",t),Ne.ensureFlagExists("fullTagEmptyElement",t),Ne.ensureFlagExists("noQuotesForNativeAttributes",t),Ne.ensureSpacesExists(t),typeof t.spaces=="number"&&(t.spaces=Array(t.spaces+1).join(" ")),Ne.ensureKeyExists("declaration",t),Ne.ensureKeyExists("instruction",t),Ne.ensureKeyExists("attributes",t),Ne.ensureKeyExists("text",t),Ne.ensureKeyExists("comment",t),Ne.ensureKeyExists("cdata",t),Ne.ensureKeyExists("doctype",t),Ne.ensureKeyExists("type",t),Ne.ensureKeyExists("name",t),Ne.ensureKeyExists("elements",t),Ne.checkFnExists("doctype",t),Ne.checkFnExists("instruction",t),Ne.checkFnExists("cdata",t),Ne.checkFnExists("comment",t),Ne.checkFnExists("text",t),Ne.checkFnExists("instructionName",t),Ne.checkFnExists("elementName",t),Ne.checkFnExists("attributeName",t),Ne.checkFnExists("attributeValue",t),Ne.checkFnExists("attributes",t),Ne.checkFnExists("fullTagEmptyElement",t),t}function pn(e,t,r){return(!r&&e.spaces?`
`:"")+Array(t+1).join(e.spaces)}function md(e,t,r){if(t.ignoreAttributes)return"";"attributesFn"in t&&(e=t.attributesFn(e,_t,Lt));var n,o,i,a,s=[];for(n in e)e.hasOwnProperty(n)&&e[n]!==null&&e[n]!==void 0&&(a=t.noQuotesForNativeAttributes&&typeof e[n]!="string"?"":'"',o=""+e[n],o=o.replace(/"/g,"&quot;"),i="attributeNameFn"in t?t.attributeNameFn(n,o,_t,Lt):n,s.push(t.spaces&&t.indentAttributes?pn(t,r+1,!1):" "),s.push(i+"="+a+("attributeValueFn"in t?t.attributeValueFn(o,n,_t,Lt):o)+a));return e&&Object.keys(e).length&&t.spaces&&t.indentAttributes&&s.push(pn(t,r,!1)),s.join("")}function fj(e,t,r){return Lt=e,_t="xml",t.ignoreDeclaration?"":"<?xml"+md(e[t.attributesKey],t,r)+"?>"}function gj(e,t,r){if(t.ignoreInstruction)return"";var n;for(n in e)if(e.hasOwnProperty(n))break;var o="instructionNameFn"in t?t.instructionNameFn(n,e[n],_t,Lt):n;if(typeof e[n]=="object")return Lt=e,_t=o,"<?"+o+md(e[n][t.attributesKey],t,r)+"?>";var i=e[n]?e[n]:"";return"instructionFn"in t&&(i=t.instructionFn(i,n,_t,Lt)),"<?"+o+(i?" "+i:"")+"?>"}function pj(e,t){return t.ignoreComment?"":"<!--"+("commentFn"in t?t.commentFn(e,_t,Lt):e)+"-->"}function mj(e,t){return t.ignoreCdata?"":"<![CDATA["+("cdataFn"in t?t.cdataFn(e,_t,Lt):e.replace("]]>","]]]]><![CDATA[>"))+"]]>"}function hj(e,t){return t.ignoreDoctype?"":"<!DOCTYPE "+("doctypeFn"in t?t.doctypeFn(e,_t,Lt):e)+">"}function Oh(e,t){return t.ignoreText?"":(e=""+e,e=e.replace(/&amp;/g,"&"),e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"),"textFn"in t?t.textFn(e,_t,Lt):e)}function Sae(e,t){var r;if(e.elements&&e.elements.length)for(r=0;r<e.elements.length;++r)switch(e.elements[r][t.typeKey]){case"text":if(t.indentText)return!0;break;case"cdata":if(t.indentCdata)return!0;break;case"instruction":if(t.indentInstruction)return!0;break;case"doctype":case"comment":case"element":return!0;default:return!0}return!1}function Cae(e,t,r){Lt=e,_t=e.name;var n=[],o="elementNameFn"in t?t.elementNameFn(e.name,e):e.name;n.push("<"+o),e[t.attributesKey]&&n.push(md(e[t.attributesKey],t,r));var i=e[t.elementsKey]&&e[t.elementsKey].length||e[t.attributesKey]&&e[t.attributesKey]["xml:space"]==="preserve";return i||("fullTagEmptyElementFn"in t?i=t.fullTagEmptyElementFn(e.name,e):i=t.fullTagEmptyElement),i?(n.push(">"),e[t.elementsKey]&&e[t.elementsKey].length&&(n.push(vj(e[t.elementsKey],t,r+1)),Lt=e,_t=e.name),n.push(t.spaces&&Sae(e,t)?`
`+Array(r+1).join(t.spaces):""),n.push("</"+o+">")):n.push("/>"),n.join("")}function vj(e,t,r,n){return e.reduce(function(o,i){var a=pn(t,r,n&&!o);switch(i.type){case"element":return o+a+Cae(i,t,r);case"comment":return o+a+pj(i[t.commentKey],t);case"doctype":return o+a+hj(i[t.doctypeKey],t);case"cdata":return o+(t.indentCdata?a:"")+mj(i[t.cdataKey],t);case"text":return o+(t.indentText?a:"")+Oh(i[t.textKey],t);case"instruction":var s={};return s[i[t.nameKey]]=i[t.attributesKey]?i:i[t.instructionKey],o+(t.indentInstruction?a:"")+gj(s,t,r)}},"")}function xj(e,t,r){var n;for(n in e)if(e.hasOwnProperty(n))switch(n){case t.parentKey:case t.attributesKey:break;case t.textKey:if(t.indentText||r)return!0;break;case t.cdataKey:if(t.indentCdata||r)return!0;break;case t.instructionKey:if(t.indentInstruction||r)return!0;break;case t.doctypeKey:case t.commentKey:return!0;default:return!0}return!1}function wae(e,t,r,n,o){Lt=e,_t=t;var i="elementNameFn"in r?r.elementNameFn(t,e):t;if(typeof e>"u"||e===null||e==="")return"fullTagEmptyElementFn"in r&&r.fullTagEmptyElementFn(t,e)||r.fullTagEmptyElement?"<"+i+"></"+i+">":"<"+i+"/>";var a=[];if(t){if(a.push("<"+i),typeof e!="object")return a.push(">"+Oh(e,r)+"</"+i+">"),a.join("");e[r.attributesKey]&&a.push(md(e[r.attributesKey],r,n));var s=xj(e,r,!0)||e[r.attributesKey]&&e[r.attributesKey]["xml:space"]==="preserve";if(s||("fullTagEmptyElementFn"in r?s=r.fullTagEmptyElementFn(t,e):s=r.fullTagEmptyElement),s)a.push(">");else return a.push("/>"),a.join("")}return a.push(yj(e,r,n+1,!1)),Lt=e,_t=t,t&&a.push((o?pn(r,n,!1):"")+"</"+i+">"),a.join("")}function yj(e,t,r,n){var o,i,a,s=[];for(i in e)if(e.hasOwnProperty(i))for(a=yae(e[i])?e[i]:[e[i]],o=0;o<a.length;++o){switch(i){case t.declarationKey:s.push(fj(a[o],t,r));break;case t.instructionKey:s.push((t.indentInstruction?pn(t,r,n):"")+gj(a[o],t,r));break;case t.attributesKey:case t.parentKey:break;case t.textKey:s.push((t.indentText?pn(t,r,n):"")+Oh(a[o],t));break;case t.cdataKey:s.push((t.indentCdata?pn(t,r,n):"")+mj(a[o],t));break;case t.doctypeKey:s.push(pn(t,r,n)+hj(a[o],t));break;case t.commentKey:s.push(pn(t,r,n)+pj(a[o],t));break;default:s.push(pn(t,r,n)+wae(a[o],i,t,r,xj(a[o],t)))}n=n&&!s.length}return s.join("")}var bj=function(e,t){t=bae(t);var r=[];return Lt=e,_t="_root_",t.compact?r.push(yj(e,t,0,!0)):(e[t.declarationKey]&&r.push(fj(e[t.declarationKey],t,0)),e[t.elementsKey]&&e[t.elementsKey].length&&r.push(vj(e[t.elementsKey],t,0,!r.length))),r.join("")},jae=bj,Tae=function(e,t){e instanceof Buffer&&(e=e.toString());var r=null;if(typeof e=="string")try{r=JSON.parse(e)}catch{throw new Error("The JSON structure is invalid")}else r=e;return jae(r,t)},Oae=dj,Iae=xae,Eae=bj,Pae=Tae,$ae={xml2js:Oae,xml2json:Iae,js2xml:Eae,json2xml:Pae};const Dl=gt($ae),kae=e=>e.langObj,Nae=e=>e.triggerConsentModal,Mae=e=>e.setTriggerConsentModal,Aae=()=>{const e=X(kae),t=E(Nae),r=E(Mae),n=A(D(e.consentHelpModalHead))||"",o=A(D(e.consentHelpModalText))||"",i=()=>{r(!1)};return l.jsxs(Re,{className:"customModal",open:t,onClose:i,center:!0,children:[l.jsx(Dae,{children:n}),l.jsx("hr",{}),l.jsx(Rae,{children:o})]})},Dae=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,Rae=C.div`
  margin-top: 15px;
`,Lae=e=>e.langObj,_ae=e=>e.configObj,Fae=e=>e.setProgressScore,Bae=e=>e.setCurrentPage,zae=e=>e.setDisplayNextButton,Hae=e=>e.setUrlUsercode,Qy=()=>{const e=X(Lae),t=X(_ae),r=E(Fae),n=E(Bae),o=E(zae),i=E(Hae),a=t.headerBarColor,s=A(D(e.consentText))||"",c=O.useRef(null);O.useEffect(()=>(o(!0),c.current=Date.now(),(async()=>{await n("consent"),localStorage.setItem("currentPage","consent"),await r(15)})(),()=>{Sr(c.current,"consentPage","consentPage")}),[n,r,o]),O.useEffect(()=>{let f=$w(window.location.href);if(f==null){let d=localStorage.getItem("urlUsercode");d==null||d==="undefined"?(console.log("no url usercode in storage"),i("not_set"),localStorage.setItem("urlUsercode","not_set")):(console.log("URL usercode from storage: ",d),i(d==="not_set"?"not_set":`${d} (stored)`))}else{let d=f;d=d.replace(/\/|#/g,""),console.log("URL usercode: ",d),i(d),localStorage.setItem("urlUsercode",d)}},[i,t]);const u=A(D(e.consentTitleBarText))||"";return l.jsxs(l.Fragment,{children:[l.jsx(Aae,{}),l.jsx(Mn,{}),l.jsx(Uae,{background:a,children:u}),l.jsx(Vae,{children:l.jsx("div",{children:s})})]})},Uae=C.div`
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
`,Vae=C.div`
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
`,Wae=e=>e.configObj,qae=e=>e.presortFinished,Gae=e=>e.setTriggerMobilePresortPreventNavModal,Kae=e=>e.currentPage,Jae=e=>e.setCheckRequiredQuestionsComplete,Qae=e=>e.setTriggerSurveyPreventNavModal,Yae=e=>e.setShowPostsortCommentHighlighting,Zae=e=>e.setTriggerMobilePostsortPreventNavModal,Xae=e=>e.setTriggerMobileThinPreventNavModal,ese=e=>e.hasScrolledToBottomSort,tse=e=>e.setTriggerMobileSortScrollBottomModal,rse=e=>{let t;const r=X(Wae);E(qae);const n=E(Gae),o=E(Kae),i=E(Jae),a=E(Qae),s=E(Yae),c=E(Zae),u=E(Xae),f=E(ese),d=E(tse);r.allowUnforcedSorts;const g=r.postsortCommentsRequired,{history:p,location:m,match:h,staticContext:y,to:v,onClick:x,...S}=e,I=()=>{let k=localStorage.getItem("m_PresortFinished");if(o==="presort")return k==="true"||k===!0?(n(!1),localStorage.setItem("m_PresortDisplayStatements",JSON.stringify({display:!1})),!0):(n(!0),!1);if(o==="thin")return localStorage.getItem("m_ThinningFinished")==="true"?!0:(u(!0),!1);if(o==="sort")return f===!1?(d(!0),!1):!0;if(o==="postsort"){let T=JSON.parse(localStorage.getItem("m_PosRequiredStatesObj")),P=JSON.parse(localStorage.getItem("m_NegRequiredStatesObj"));const N={...T,...P};return Object.values(N).includes("")&&g===!0?(s(!0),c(!0),!1):!0}if(o==="survey"){let T=JSON.parse(localStorage.getItem("resultsSurvey"));return ii(T).includes("no-*?*-response")?(i(!0),a(!0),!1):!0}return!0};return l.jsx(ose,{...S,width:e.width,onClick:k=>{x&&x(k),t=I(),t&&p.push(v)},tabindex:"0"})},nse=Ki(rse),ose=C.button`
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
`,ise=e=>e.langObj,ase=e=>e.currentPage,sse=e=>e.setMobilePresortFontSize,lse=e=>e.setMobileThinFontSize,cse=e=>e.setMobileSortFontSize,use=e=>e.setMobilePostsortFontSize,dse=()=>{const e=X(ise),t=E(ase),r=E(sse),n=E(lse),o=E(cse),i=E(use);let[a,s]=Ee("m_FontSizeObject",{presort:2,thin:2,sort:2,postsort:2});const c=A(D(e.mobileTextSize))||"",u=()=>{if(t==="presort"){let g=+a.presort+.1;g=g.toPrecision(2);let p={...a,presort:g};s(p),r(g)}if(t==="thin"){let g=+a.thin+.1;g=g.toPrecision(2);let p={...a,thin:g};s(p),n(g)}if(t==="sort"){let g=+a.sort+.1;g=g.toPrecision(2);let p={...a,sort:g};s(p),o(g)}if(t==="postsort"){let g=+a.postsort+.1;g=g.toPrecision(2);let p={...a,postsort:g};s(p),i(g)}},f=()=>{if(t==="presort"){let g=+a.presort-.1;g=g.toPrecision(2);let p={...a,presort:g};s(p),r(g)}if(t==="thin"){let g=+a.thin-.1;g=g.toPrecision(2);let p={...a,thin:g};s(p),n(g)}if(t==="sort"){let g=+a.sort-.1;g=g.toPrecision(2);let p={...a,sort:g};s(p),o(g)}if(t==="postsort"){let g=+a.postsort-.1;g=g.toPrecision(2);let p={...a,postsort:g};s(p),i(g)}};return l.jsxs(pse,{children:[l.jsx(gse,{padBottom:"0.3em",onClick:f,children:"-"}),l.jsx(mse,{children:c}),l.jsx(fse,{padBottom:"0.25em",onClick:u,children:"+"})]})},fse=C.div`
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
`,gse=C.div`
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
`,pse=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  user-select: none;
`,mse=C.div`
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
`,hse=e=>e.langObj,vse=e=>e.currentPage,xse=e=>e.setMobilePresortViewSize,yse=e=>e.setMobileThinViewSize,bse=e=>e.setMobileSortViewSize,Sse=e=>e.setMobilePostsortViewSize,Cse=e=>e.setMobileSurveyViewSize,wse=()=>{const e=X(hse),t=E(vse),r=E(xse),n=E(yse),o=E(bse),i=E(Sse),a=E(Cse);let[s,c]=Ee("m_ViewSizeObject",{presort:42,thin:68,sort:72,postsort:42,survey:72});const u=A(D(e.mobileViewSize))||"",f=()=>{if(t==="presort"){let p=+s.presort+2;p=p.toPrecision(4);let m={...s,presort:p};c(m),r(p)}if(t==="thin"){let p=+s.thin+2;p=p.toPrecision(4);let m={...s,thin:p};c(m),n(p)}if(t==="sort"){let p=+s.sort+2;p=p.toPrecision(4);let m={...s,sort:p};c(m),o(p)}if(t==="postsort"){let p=+s.postsort+2;p=p.toPrecision(4);let m={...s,postsort:p};c(m),i(p)}if(t==="survey"){let p=+s.survey+2;p=p.toPrecision(4);let m={...s,survey:p};c(m),a(p)}},d=()=>{if(t==="presort"){let p=+s.presort-2;p=p.toPrecision(4);let m={...s,presort:p};c(m),r(p)}if(t==="thin"){let p=+s.thin-2;p=p.toPrecision(4);let m={...s,thin:p};c(m),n(p)}if(t==="sort"){let p=+s.sort-2;p=p.toPrecision(4);let m={...s,sort:p};c(m),o(p)}if(t==="postsort"){let p=+s.postsort-2;p=p.toPrecision(4);let m={...s,postsort:p};c(m),i(p)}if(t==="survey"){let p=+s.survey-2;p=p.toPrecision(4);let m={...s,survey:p};c(m),a(p)}};return l.jsxs(Ose,{children:[l.jsx(Tse,{padBottom:"0.3em",onClick:d,children:"-"}),l.jsx(Ise,{children:u}),l.jsx(jse,{padBottom:"0.25em",onClick:f,children:"+"})]})},jse=C.div`
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
`,Tse=C.div`
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
`,Ose=C.div`
  display: flex;
  flex-direction: row;
  /* align-items: center; */
  user-select: none;
`,Ise=C.div`
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
`,Ese=e=>{const{history:t,location:r,match:n,staticContext:o,to:i,onClick:a,...s}=e;return l.jsx($se,{...s,onClick:c=>{a&&a(c),t.push(i)},tabindex:"0"})},Pse=Ki(Ese),$se=C.button`
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
`,kse=e=>e.langObj,Nse=e=>e.configObj,Mse=e=>e.currentPage,Ase=e=>e.localUsercode,Dse=e=>e.displayNextButton,Yy=()=>{const e=X(kse),t=X(Nse),r=E(Mse),n=E(Ase);let o=E(Dse),i=!0,a=!1,s=!0,c=!1,u=60,f="";const d=t.showPostsort,g=t.showSurvey,p=t.showConsentPage,m=t.useThinProcess;let h=ho(),y=A(D('{{{center}}}{{{img src="./logo/logo.png" height="20" width="125" /}}}{{{/center}}}'));r==="landing"?(u=60,f=A(D(e.btnNextLanding))||""):r==="consent"?(u=180,f=A(D(e.btnNextConsent))||""):f=A(D(e.btnNext))||"";let v=A(D(e.postsortBackButtonText))||"";if(r==="sort"&&t.setupTarget==="local"){const I=n,k=t.studyTitle,T=new Date,P=T.getFullYear()+"-"+(T.getMonth()+1)+"-"+T.getDate(),N=T.getHours()+":"+T.getMinutes()+":"+T.getSeconds(),j=P+" "+N;y=`${I} - ${k} - ${j}`}(r==="submit"||r==="landing"||r==="consent")&&(a=!0),(r==="landing"||r==="consent"||r==="thin"||r==="postsort"||r==="survey"||r==="sort"||r==="presort")&&(c=!0);let x=!1;r==="survey"&&(x=!0),t.setupTarget==="local"&&r==="landing"&&(c=!1),r==="landing"&&(c=o),(r==="submit"||r==="landing"||r==="consent")&&(i=!1,s=!1),r==="survey"&&(i=!1,s=!0),r==="postsort"&&(a=!1);const S=sj(r,d,g,p,m);return h==="landscape-primary"?null:l.jsxs(Rse,{children:[a&&l.jsx(Lse,{children:y}),x&&l.jsx(Pse,{to:"/postsort",children:v}),i&&l.jsx(dse,{}),s&&l.jsx(wse,{}),c&&l.jsx(nse,{width:u,to:S,children:f})]})},Rse=C.footer`
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0px;
  left: 0px;
  border-top: 1px solid lightgray;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
`,Lse=C.div`
  padding-top: 5px;
  padding-left: 5px;
  display: flex;
  justify-self: start;
  align-self: center;
  text-align: center;
`,_se=e=>e.mobilePresortFontSize,Fse=e=>e.langObj,Sj=e=>{const t=E(_se),r=X(Fse);let n=A(D(r==null?void 0:r.mobilePresortEvaluationsComplete))||"",o=e.statement||n;return o==null&&(o=r==null?void 0:r.mobilePresortEvaluationsComplete),l.jsx(Bse,{color:e.backgroundColor,fontSize:t,children:o})},Bse=C.div`
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
`,Ir=e=>l.jsx(zse,{color:e.color,value:e.value,text:e.text,onTouchStart:e.onClick,child:e.child,children:e.child}),zse=C.div`
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
`,Hse=e=>O.createElement("svg",{width:115,height:100,viewBox:"0 0 115 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("path",{d:"M24 50C24 41.891 26.4046 33.964 30.9097 27.2216C35.4149 20.4792 41.8182 15.2241 49.31 12.1209C56.8017 9.01775 65.0455 8.20581 72.9987 9.7878C80.9519 11.3698 88.2574 15.2747 93.9914 21.0086C99.7253 26.7426 103.63 34.0481 105.212 42.0013C106.794 49.9545 105.982 58.1983 102.879 65.69C99.7759 73.1818 94.5208 79.5851 87.7784 84.0903C81.036 88.5954 73.109 91 65 91",stroke:"#999999",strokeWidth:18,strokeLinecap:"round"}),O.createElement("path",{d:"M28 75L52.2487 36.8182H3.75129L28 75Z",fill:"#999999"})),Use=e=>e.mobilePresortFontSize,Vse=e=>e.mobilePresortViewSize,Wse=e=>{let t=E(Use);const r=JSON.parse(localStorage.getItem("m_FontSizeObject")).presort,n=JSON.parse(localStorage.getItem("m_ViewSizeObject")).presort,o=E(Vse);let i=e.statements.map(a=>l.jsx(Gse,{fontSize:t===+r?t:r,color:a.color,children:l.jsxs("div",{children:[l.jsx(Kse,{"data-id":a.id,"data-statement":a.statement,onClick:e.onClick,children:l.jsx(Hse,{style:{float:"left",height:"14px",width:"14px",pointerEvents:"none"}})}),a.statement]})},ee()));return l.jsx(qse,{viewSize:o===+n?o:n,children:i})},qse=C.div`
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
`,Gse=C.div`
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
`,Kse=C.div`
  float: left;
  width: 14px;
  height: 14px;
  margin-right: 5px;
`,Vg=e=>{if(e===4)return"#31C48D";if(e===3)return"#84E1BC";if(e===2)return"#BCF0DA";if(e===1)return"#DEF7EC";if(e===0)return"#F3F4F6";if(e===-1)return"#FDE8E8";if(e===-2)return"#FBD5D5";if(e===-3)return"#F8B4B4";if(e===-4)return"#F98080"};var Wg={exports:{}},Go={},qg={exports:{}},tn={},Gg={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=f;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var r="none",n="contents",o=/^(input|select|textarea|button|object|iframe)$/;function i(d,g){return g.getPropertyValue("overflow")!=="visible"||d.scrollWidth<=0&&d.scrollHeight<=0}function a(d){var g=d.offsetWidth<=0&&d.offsetHeight<=0;if(g&&!d.innerHTML)return!0;try{var p=window.getComputedStyle(d),m=p.getPropertyValue("display");return g?m!==n&&i(d,p):m===r}catch{return console.warn("Failed to inspect element style"),!1}}function s(d){for(var g=d,p=d.getRootNode&&d.getRootNode();g&&g!==document.body;){if(p&&g===p&&(g=p.host.parentNode),a(g))return!1;g=g.parentNode}return!0}function c(d,g){var p=d.nodeName.toLowerCase(),m=o.test(p)&&!d.disabled||p==="a"&&d.href||g;return m&&s(d)}function u(d){var g=d.getAttribute("tabindex");g===null&&(g=void 0);var p=isNaN(g);return(p||g>=0)&&c(d,!p)}function f(d){var g=[].slice.call(d.querySelectorAll("*"),0).reduce(function(p,m){return p.concat(m.shadowRoot?f(m.shadowRoot):[m])},[]);return g.filter(u)}e.exports=t.default})(Gg,Gg.exports);var Cj=Gg.exports;Object.defineProperty(tn,"__esModule",{value:!0});tn.resetState=Zse;tn.log=Xse;tn.handleBlur=Is;tn.handleFocus=Es;tn.markForFocusLater=ele;tn.returnFocus=tle;tn.popWithoutFocus=rle;tn.setupScopedFocus=nle;tn.teardownScopedFocus=ole;var Jse=Cj,Qse=Yse(Jse);function Yse(e){return e&&e.__esModule?e:{default:e}}var Ui=[],yi=null,Kg=!1;function Zse(){Ui=[]}function Xse(){}function Is(){Kg=!0}function Es(){if(Kg){if(Kg=!1,!yi)return;setTimeout(function(){if(!yi.contains(document.activeElement)){var e=(0,Qse.default)(yi)[0]||yi;e.focus()}},0)}}function ele(){Ui.push(document.activeElement)}function tle(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,t=null;try{Ui.length!==0&&(t=Ui.pop(),t.focus({preventScroll:e}));return}catch{console.warn(["You tried to return focus to",t,"but it is not in the DOM anymore"].join(" "))}}function rle(){Ui.length>0&&Ui.pop()}function nle(e){yi=e,window.addEventListener?(window.addEventListener("blur",Is,!1),document.addEventListener("focus",Es,!0)):(window.attachEvent("onBlur",Is),document.attachEvent("onFocus",Es))}function ole(){yi=null,window.addEventListener?(window.removeEventListener("blur",Is),document.removeEventListener("focus",Es)):(window.detachEvent("onBlur",Is),document.detachEvent("onFocus",Es))}var Jg={exports:{}};(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=a;var r=Cj,n=o(r);function o(s){return s&&s.__esModule?s:{default:s}}function i(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return s.activeElement.shadowRoot?i(s.activeElement.shadowRoot):s.activeElement}function a(s,c){var u=(0,n.default)(s);if(!u.length){c.preventDefault();return}var f=void 0,d=c.shiftKey,g=u[0],p=u[u.length-1],m=i();if(s===m){if(!d)return;f=p}if(p===m&&!d&&(f=g),g===m&&d&&(f=p),f){c.preventDefault(),f.focus();return}var h=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),y=h!=null&&h[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(y){var v=u.indexOf(m);if(v>-1&&(v+=d?-1:1),f=u[v],typeof f>"u"){c.preventDefault(),f=d?p:g,f.focus();return}c.preventDefault(),f.focus()}}e.exports=t.default})(Jg,Jg.exports);var ile=Jg.exports,rn={},ale=function(){},sle=ale,Jr={},wj={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(e){(function(){var t=!!(typeof window<"u"&&window.document&&window.document.createElement),r={canUseDOM:t,canUseWorkers:typeof Worker<"u",canUseEventListeners:t&&!!(window.addEventListener||window.attachEvent),canUseViewport:t&&!!window.screen};e.exports?e.exports=r:window.ExecutionEnvironment=r})()})(wj);var lle=wj.exports;Object.defineProperty(Jr,"__esModule",{value:!0});Jr.canUseDOM=Jr.SafeNodeList=Jr.SafeHTMLCollection=void 0;var cle=lle,ule=dle(cle);function dle(e){return e&&e.__esModule?e:{default:e}}var hd=ule.default,fle=hd.canUseDOM?window.HTMLElement:{};Jr.SafeHTMLCollection=hd.canUseDOM?window.HTMLCollection:{};Jr.SafeNodeList=hd.canUseDOM?window.NodeList:{};Jr.canUseDOM=hd.canUseDOM;Jr.default=fle;Object.defineProperty(rn,"__esModule",{value:!0});rn.resetState=vle;rn.log=xle;rn.assertNodeList=jj;rn.setElement=yle;rn.validateElement=Ih;rn.hide=ble;rn.show=Sle;rn.documentNotReadyOrSSRTesting=Cle;var gle=sle,ple=hle(gle),mle=Jr;function hle(e){return e&&e.__esModule?e:{default:e}}var jr=null;function vle(){jr&&(jr.removeAttribute?jr.removeAttribute("aria-hidden"):jr.length!=null?jr.forEach(function(e){return e.removeAttribute("aria-hidden")}):document.querySelectorAll(jr).forEach(function(e){return e.removeAttribute("aria-hidden")})),jr=null}function xle(){}function jj(e,t){if(!e||!e.length)throw new Error("react-modal: No elements were found for selector "+t+".")}function yle(e){var t=e;if(typeof t=="string"&&mle.canUseDOM){var r=document.querySelectorAll(t);jj(r,t),t=r}return jr=t||jr,jr}function Ih(e){var t=e||jr;return t?Array.isArray(t)||t instanceof HTMLCollection||t instanceof NodeList?t:[t]:((0,ple.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function ble(e){var t=!0,r=!1,n=void 0;try{for(var o=Ih(e)[Symbol.iterator](),i;!(t=(i=o.next()).done);t=!0){var a=i.value;a.setAttribute("aria-hidden","true")}}catch(s){r=!0,n=s}finally{try{!t&&o.return&&o.return()}finally{if(r)throw n}}}function Sle(e){var t=!0,r=!1,n=void 0;try{for(var o=Ih(e)[Symbol.iterator](),i;!(t=(i=o.next()).done);t=!0){var a=i.value;a.removeAttribute("aria-hidden")}}catch(s){r=!0,n=s}finally{try{!t&&o.return&&o.return()}finally{if(r)throw n}}}function Cle(){jr=null}var ca={};Object.defineProperty(ca,"__esModule",{value:!0});ca.resetState=wle;ca.log=jle;var es={},ts={};function Zy(e,t){e.classList.remove(t)}function wle(){var e=document.getElementsByTagName("html")[0];for(var t in es)Zy(e,es[t]);var r=document.body;for(var n in ts)Zy(r,ts[n]);es={},ts={}}function jle(){}var Tle=function(t,r){return t[r]||(t[r]=0),t[r]+=1,r},Ole=function(t,r){return t[r]&&(t[r]-=1),r},Ile=function(t,r,n){n.forEach(function(o){Tle(r,o),t.add(o)})},Ele=function(t,r,n){n.forEach(function(o){Ole(r,o),r[o]===0&&t.remove(o)})};ca.add=function(t,r){return Ile(t.classList,t.nodeName.toLowerCase()=="html"?es:ts,r.split(" "))};ca.remove=function(t,r){return Ele(t.classList,t.nodeName.toLowerCase()=="html"?es:ts,r.split(" "))};var ua={};Object.defineProperty(ua,"__esModule",{value:!0});ua.log=$le;ua.resetState=kle;function Ple(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var Tj=function e(){var t=this;Ple(this,e),this.register=function(r){t.openInstances.indexOf(r)===-1&&(t.openInstances.push(r),t.emit("register"))},this.deregister=function(r){var n=t.openInstances.indexOf(r);n!==-1&&(t.openInstances.splice(n,1),t.emit("deregister"))},this.subscribe=function(r){t.subscribers.push(r)},this.emit=function(r){t.subscribers.forEach(function(n){return n(r,t.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},nu=new Tj;function $le(){console.log("portalOpenInstances ----------"),console.log(nu.openInstances.length),nu.openInstances.forEach(function(e){return console.log(e)}),console.log("end portalOpenInstances ----------")}function kle(){nu=new Tj}ua.default=nu;var Eh={};Object.defineProperty(Eh,"__esModule",{value:!0});Eh.resetState=Dle;Eh.log=Rle;var Nle=ua,Mle=Ale(Nle);function Ale(e){return e&&e.__esModule?e:{default:e}}var At=void 0,zr=void 0,Ro=[];function Dle(){for(var e=[At,zr],t=0;t<e.length;t++){var r=e[t];r&&r.parentNode&&r.parentNode.removeChild(r)}At=zr=null,Ro=[]}function Rle(){console.log("bodyTrap ----------"),console.log(Ro.length);for(var e=[At,zr],t=0;t<e.length;t++){var r=e[t],n=r||{};console.log(n.nodeName,n.className,n.id)}console.log("edn bodyTrap ----------")}function Xy(){Ro.length!==0&&Ro[Ro.length-1].focusContent()}function Lle(e,t){!At&&!zr&&(At=document.createElement("div"),At.setAttribute("data-react-modal-body-trap",""),At.style.position="absolute",At.style.opacity="0",At.setAttribute("tabindex","0"),At.addEventListener("focus",Xy),zr=At.cloneNode(),zr.addEventListener("focus",Xy)),Ro=t,Ro.length>0?(document.body.firstChild!==At&&document.body.insertBefore(At,document.body.firstChild),document.body.lastChild!==zr&&document.body.appendChild(zr)):(At.parentElement&&At.parentElement.removeChild(At),zr.parentElement&&zr.parentElement.removeChild(zr))}Mle.default.subscribe(Lle);(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(z){for(var J=1;J<arguments.length;J++){var K=arguments[J];for(var M in K)Object.prototype.hasOwnProperty.call(K,M)&&(z[M]=K[M])}return z},n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(z){return typeof z}:function(z){return z&&typeof Symbol=="function"&&z.constructor===Symbol&&z!==Symbol.prototype?"symbol":typeof z},o=function(){function z(J,K){for(var M=0;M<K.length;M++){var R=K[M];R.enumerable=R.enumerable||!1,R.configurable=!0,"value"in R&&(R.writable=!0),Object.defineProperty(J,R.key,R)}}return function(J,K,M){return K&&z(J.prototype,K),M&&z(J,M),J}}(),i=O,a=tm,s=k(a),c=tn,u=I(c),f=ile,d=k(f),g=rn,p=I(g),m=ca,h=I(m),y=Jr,v=k(y),x=ua,S=k(x);function I(z){if(z&&z.__esModule)return z;var J={};if(z!=null)for(var K in z)Object.prototype.hasOwnProperty.call(z,K)&&(J[K]=z[K]);return J.default=z,J}function k(z){return z&&z.__esModule?z:{default:z}}function T(z,J){if(!(z instanceof J))throw new TypeError("Cannot call a class as a function")}function P(z,J){if(!z)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return J&&(typeof J=="object"||typeof J=="function")?J:z}function N(z,J){if(typeof J!="function"&&J!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof J);z.prototype=Object.create(J&&J.prototype,{constructor:{value:z,enumerable:!1,writable:!0,configurable:!0}}),J&&(Object.setPrototypeOf?Object.setPrototypeOf(z,J):z.__proto__=J)}var j={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},F=function(J){return J.code==="Tab"||J.keyCode===9},V=function(J){return J.code==="Escape"||J.keyCode===27},Z=0,Y=function(z){N(J,z);function J(K){T(this,J);var M=P(this,(J.__proto__||Object.getPrototypeOf(J)).call(this,K));return M.setOverlayRef=function(R){M.overlay=R,M.props.overlayRef&&M.props.overlayRef(R)},M.setContentRef=function(R){M.content=R,M.props.contentRef&&M.props.contentRef(R)},M.afterClose=function(){var R=M.props,_=R.appElement,B=R.ariaHideApp,q=R.htmlOpenClassName,H=R.bodyOpenClassName,Q=R.parentSelector,U=Q&&Q().ownerDocument||document;H&&h.remove(U.body,H),q&&h.remove(U.getElementsByTagName("html")[0],q),B&&Z>0&&(Z-=1,Z===0&&p.show(_)),M.props.shouldFocusAfterRender&&(M.props.shouldReturnFocusAfterClose?(u.returnFocus(M.props.preventScroll),u.teardownScopedFocus()):u.popWithoutFocus()),M.props.onAfterClose&&M.props.onAfterClose(),S.default.deregister(M)},M.open=function(){M.beforeOpen(),M.state.afterOpen&&M.state.beforeClose?(clearTimeout(M.closeTimer),M.setState({beforeClose:!1})):(M.props.shouldFocusAfterRender&&(u.setupScopedFocus(M.node),u.markForFocusLater()),M.setState({isOpen:!0},function(){M.openAnimationFrame=requestAnimationFrame(function(){M.setState({afterOpen:!0}),M.props.isOpen&&M.props.onAfterOpen&&M.props.onAfterOpen({overlayEl:M.overlay,contentEl:M.content})})}))},M.close=function(){M.props.closeTimeoutMS>0?M.closeWithTimeout():M.closeWithoutTimeout()},M.focusContent=function(){return M.content&&!M.contentHasFocus()&&M.content.focus({preventScroll:!0})},M.closeWithTimeout=function(){var R=Date.now()+M.props.closeTimeoutMS;M.setState({beforeClose:!0,closesAt:R},function(){M.closeTimer=setTimeout(M.closeWithoutTimeout,M.state.closesAt-Date.now())})},M.closeWithoutTimeout=function(){M.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},M.afterClose)},M.handleKeyDown=function(R){F(R)&&(0,d.default)(M.content,R),M.props.shouldCloseOnEsc&&V(R)&&(R.stopPropagation(),M.requestClose(R))},M.handleOverlayOnClick=function(R){M.shouldClose===null&&(M.shouldClose=!0),M.shouldClose&&M.props.shouldCloseOnOverlayClick&&(M.ownerHandlesClose()?M.requestClose(R):M.focusContent()),M.shouldClose=null},M.handleContentOnMouseUp=function(){M.shouldClose=!1},M.handleOverlayOnMouseDown=function(R){!M.props.shouldCloseOnOverlayClick&&R.target==M.overlay&&R.preventDefault()},M.handleContentOnClick=function(){M.shouldClose=!1},M.handleContentOnMouseDown=function(){M.shouldClose=!1},M.requestClose=function(R){return M.ownerHandlesClose()&&M.props.onRequestClose(R)},M.ownerHandlesClose=function(){return M.props.onRequestClose},M.shouldBeClosed=function(){return!M.state.isOpen&&!M.state.beforeClose},M.contentHasFocus=function(){return document.activeElement===M.content||M.content.contains(document.activeElement)},M.buildClassName=function(R,_){var B=(typeof _>"u"?"undefined":n(_))==="object"?_:{base:j[R],afterOpen:j[R]+"--after-open",beforeClose:j[R]+"--before-close"},q=B.base;return M.state.afterOpen&&(q=q+" "+B.afterOpen),M.state.beforeClose&&(q=q+" "+B.beforeClose),typeof _=="string"&&_?q+" "+_:q},M.attributesFromObject=function(R,_){return Object.keys(_).reduce(function(B,q){return B[R+"-"+q]=_[q],B},{})},M.state={afterOpen:!1,beforeClose:!1},M.shouldClose=null,M.moveFromContentToOverlay=null,M}return o(J,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(M,R){this.props.isOpen&&!M.isOpen?this.open():!this.props.isOpen&&M.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!R.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var M=this.props,R=M.appElement,_=M.ariaHideApp,B=M.htmlOpenClassName,q=M.bodyOpenClassName,H=M.parentSelector,Q=H&&H().ownerDocument||document;q&&h.add(Q.body,q),B&&h.add(Q.getElementsByTagName("html")[0],B),_&&(Z+=1,p.hide(R)),S.default.register(this)}},{key:"render",value:function(){var M=this.props,R=M.id,_=M.className,B=M.overlayClassName,q=M.defaultStyles,H=M.children,Q=_?{}:q.content,U=B?{}:q.overlay;if(this.shouldBeClosed())return null;var G={ref:this.setOverlayRef,className:this.buildClassName("overlay",B),style:r({},U,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},$=r({id:R,ref:this.setContentRef,style:r({},Q,this.props.style.content),className:this.buildClassName("content",_),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",r({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),w=this.props.contentElement($,H);return this.props.overlayElement(G,w)}}]),J}(i.Component);Y.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},Y.propTypes={isOpen:s.default.bool.isRequired,defaultStyles:s.default.shape({content:s.default.object,overlay:s.default.object}),style:s.default.shape({content:s.default.object,overlay:s.default.object}),className:s.default.oneOfType([s.default.string,s.default.object]),overlayClassName:s.default.oneOfType([s.default.string,s.default.object]),parentSelector:s.default.func,bodyOpenClassName:s.default.string,htmlOpenClassName:s.default.string,ariaHideApp:s.default.bool,appElement:s.default.oneOfType([s.default.instanceOf(v.default),s.default.instanceOf(y.SafeHTMLCollection),s.default.instanceOf(y.SafeNodeList),s.default.arrayOf(s.default.instanceOf(v.default))]),onAfterOpen:s.default.func,onAfterClose:s.default.func,onRequestClose:s.default.func,closeTimeoutMS:s.default.number,shouldFocusAfterRender:s.default.bool,shouldCloseOnOverlayClick:s.default.bool,shouldReturnFocusAfterClose:s.default.bool,preventScroll:s.default.bool,role:s.default.string,contentLabel:s.default.string,aria:s.default.object,data:s.default.object,children:s.default.node,shouldCloseOnEsc:s.default.bool,overlayRef:s.default.func,contentRef:s.default.func,id:s.default.string,overlayElement:s.default.func,contentElement:s.default.func,testId:s.default.string},t.default=Y,e.exports=t.default})(qg,qg.exports);var _le=qg.exports;function Oj(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);e!=null&&this.setState(e)}function Ij(e){function t(r){var n=this.constructor.getDerivedStateFromProps(e,r);return n??null}this.setState(t.bind(this))}function Ej(e,t){try{var r=this.props,n=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(r,n)}finally{this.props=r,this.state=n}}Oj.__suppressDeprecationWarning=!0;Ij.__suppressDeprecationWarning=!0;Ej.__suppressDeprecationWarning=!0;function Fle(e){var t=e.prototype;if(!t||!t.isReactComponent)throw new Error("Can only polyfill class components");if(typeof e.getDerivedStateFromProps!="function"&&typeof t.getSnapshotBeforeUpdate!="function")return e;var r=null,n=null,o=null;if(typeof t.componentWillMount=="function"?r="componentWillMount":typeof t.UNSAFE_componentWillMount=="function"&&(r="UNSAFE_componentWillMount"),typeof t.componentWillReceiveProps=="function"?n="componentWillReceiveProps":typeof t.UNSAFE_componentWillReceiveProps=="function"&&(n="UNSAFE_componentWillReceiveProps"),typeof t.componentWillUpdate=="function"?o="componentWillUpdate":typeof t.UNSAFE_componentWillUpdate=="function"&&(o="UNSAFE_componentWillUpdate"),r!==null||n!==null||o!==null){var i=e.displayName||e.name,a=typeof e.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+i+" uses "+a+" but also contains the following legacy lifecycles:"+(r!==null?`
  `+r:"")+(n!==null?`
  `+n:"")+(o!==null?`
  `+o:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof e.getDerivedStateFromProps=="function"&&(t.componentWillMount=Oj,t.componentWillReceiveProps=Ij),typeof t.getSnapshotBeforeUpdate=="function"){if(typeof t.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");t.componentWillUpdate=Ej;var s=t.componentDidUpdate;t.componentDidUpdate=function(u,f,d){var g=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:d;s.call(this,u,f,g)}}return e}const Ble=Object.freeze(Object.defineProperty({__proto__:null,polyfill:Fle},Symbol.toStringTag,{value:"Module"})),zle=gS(Ble);Object.defineProperty(Go,"__esModule",{value:!0});Go.bodyOpenClassName=Go.portalClassName=void 0;var eb=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Hle=function(){function e(t,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),Pj=O,ou=Ys(Pj),Ule=wu,iu=Ys(Ule),Vle=tm,Te=Ys(Vle),Wle=_le,tb=Ys(Wle),qle=rn,Gle=Jle(qle),Wn=Jr,rb=Ys(Wn),Kle=zle;function Jle(e){if(e&&e.__esModule)return e;var t={};if(e!=null)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function Ys(e){return e&&e.__esModule?e:{default:e}}function Qle(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function nb(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e}function Yle(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var Zle=Go.portalClassName="ReactModalPortal",Xle=Go.bodyOpenClassName="ReactModal__Body--open",To=Wn.canUseDOM&&iu.default.createPortal!==void 0,ob=function(t){return document.createElement(t)},ib=function(){return To?iu.default.createPortal:iu.default.unstable_renderSubtreeIntoContainer};function Rl(e){return e()}var Zs=function(e){Yle(t,e);function t(){var r,n,o,i;Qle(this,t);for(var a=arguments.length,s=Array(a),c=0;c<a;c++)s[c]=arguments[c];return i=(n=(o=nb(this,(r=t.__proto__||Object.getPrototypeOf(t)).call.apply(r,[this].concat(s))),o),o.removePortal=function(){!To&&iu.default.unmountComponentAtNode(o.node);var u=Rl(o.props.parentSelector);u&&u.contains(o.node)?u.removeChild(o.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},o.portalRef=function(u){o.portal=u},o.renderPortal=function(u){var f=ib(),d=f(o,ou.default.createElement(tb.default,eb({defaultStyles:t.defaultStyles},u)),o.node);o.portalRef(d)},n),nb(o,i)}return Hle(t,[{key:"componentDidMount",value:function(){if(Wn.canUseDOM){To||(this.node=ob("div")),this.node.className=this.props.portalClassName;var n=Rl(this.props.parentSelector);n.appendChild(this.node),!To&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(n){var o=Rl(n.parentSelector),i=Rl(this.props.parentSelector);return{prevParent:o,nextParent:i}}},{key:"componentDidUpdate",value:function(n,o,i){if(Wn.canUseDOM){var a=this.props,s=a.isOpen,c=a.portalClassName;n.portalClassName!==c&&(this.node.className=c);var u=i.prevParent,f=i.nextParent;f!==u&&(u.removeChild(this.node),f.appendChild(this.node)),!(!n.isOpen&&!s)&&!To&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!Wn.canUseDOM||!this.node||!this.portal)){var n=this.portal.state,o=Date.now(),i=n.isOpen&&this.props.closeTimeoutMS&&(n.closesAt||o+this.props.closeTimeoutMS);i?(n.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,i-o)):this.removePortal()}}},{key:"render",value:function(){if(!Wn.canUseDOM||!To)return null;!this.node&&To&&(this.node=ob("div"));var n=ib();return n(ou.default.createElement(tb.default,eb({ref:this.portalRef,defaultStyles:t.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(n){Gle.setElement(n)}}]),t}(Pj.Component);Zs.propTypes={isOpen:Te.default.bool.isRequired,style:Te.default.shape({content:Te.default.object,overlay:Te.default.object}),portalClassName:Te.default.string,bodyOpenClassName:Te.default.string,htmlOpenClassName:Te.default.string,className:Te.default.oneOfType([Te.default.string,Te.default.shape({base:Te.default.string.isRequired,afterOpen:Te.default.string.isRequired,beforeClose:Te.default.string.isRequired})]),overlayClassName:Te.default.oneOfType([Te.default.string,Te.default.shape({base:Te.default.string.isRequired,afterOpen:Te.default.string.isRequired,beforeClose:Te.default.string.isRequired})]),appElement:Te.default.oneOfType([Te.default.instanceOf(rb.default),Te.default.instanceOf(Wn.SafeHTMLCollection),Te.default.instanceOf(Wn.SafeNodeList),Te.default.arrayOf(Te.default.instanceOf(rb.default))]),onAfterOpen:Te.default.func,onRequestClose:Te.default.func,closeTimeoutMS:Te.default.number,ariaHideApp:Te.default.bool,shouldFocusAfterRender:Te.default.bool,shouldCloseOnOverlayClick:Te.default.bool,shouldReturnFocusAfterClose:Te.default.bool,preventScroll:Te.default.bool,parentSelector:Te.default.func,aria:Te.default.object,data:Te.default.object,role:Te.default.string,contentLabel:Te.default.string,shouldCloseOnEsc:Te.default.bool,overlayRef:Te.default.func,contentRef:Te.default.func,id:Te.default.string,overlayElement:Te.default.func,contentElement:Te.default.func};Zs.defaultProps={isOpen:!1,portalClassName:Zle,bodyOpenClassName:Xle,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(t,r){return ou.default.createElement("div",t,r)},contentElement:function(t,r){return ou.default.createElement("div",t,r)}};Zs.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,Kle.polyfill)(Zs);Go.default=Zs;(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r=Go,n=o(r);function o(i){return i&&i.__esModule?i:{default:i}}t.default=n.default,e.exports=t.default})(Wg,Wg.exports);var ece=Wg.exports;const Ph=gt(ece);var tce=Zr,rce=function(){return tce.Date.now()},nce=rce,oce=mo,bf=nce,ab=Mw,ice="Expected a function",ace=Math.max,sce=Math.min;function lce(e,t,r){var n,o,i,a,s,c,u=0,f=!1,d=!1,g=!0;if(typeof e!="function")throw new TypeError(ice);t=ab(t)||0,oce(r)&&(f=!!r.leading,d="maxWait"in r,i=d?ace(ab(r.maxWait)||0,t):i,g="trailing"in r?!!r.trailing:g);function p(T){var P=n,N=o;return n=o=void 0,u=T,a=e.apply(N,P),a}function m(T){return u=T,s=setTimeout(v,t),f?p(T):a}function h(T){var P=T-c,N=T-u,j=t-P;return d?sce(j,i-N):j}function y(T){var P=T-c,N=T-u;return c===void 0||P>=t||P<0||d&&N>=i}function v(){var T=bf();if(y(T))return x(T);s=setTimeout(v,h(T))}function x(T){return s=void 0,g&&n?p(T):(n=o=void 0,a)}function S(){s!==void 0&&clearTimeout(s),u=0,n=c=o=s=void 0}function I(){return s===void 0?a:x(bf())}function k(){var T=bf(),P=y(T);if(n=arguments,o=this,c=T,P){if(s===void 0)return m(c);if(d)return clearTimeout(s),s=setTimeout(v,t),p(c)}return s===void 0&&(s=setTimeout(v,t)),a}return k.cancel=S,k.flush=I,k}var cce=lce;const $h=gt(cce),uce=e=>{const[t,r]=O.useState(!1),[n,o]=O.useState(!1),[i,a]=O.useState(!1);return O.useEffect(()=>{const s=e.current;if(!s)return;const c=()=>{const d=s.scrollHeight>s.clientHeight,g=s.scrollHeight-s.scrollTop<=s.clientHeight+5;r(d),o(g),a(d&&!g)};setTimeout(c,100),s.addEventListener("scroll",c,{passive:!0});const u=new ResizeObserver(c);u.observe(s);const f=new MutationObserver(c);return f.observe(s,{childList:!0,subtree:!0,characterData:!0}),()=>{s.removeEventListener("scroll",c),u.disconnect(),f.disconnect()}},[e]),{hasScrollableContent:t,isAtBottom:n,showIndicator:i}},dce=({position:e="bottom-right",style:t="bouncing-arrow",color:r="#007bff",size:n="medium"})=>{const o={small:"24px",medium:"32px",large:"40px"},i={"bottom-right":{bottom:"20px",right:"20px"},"bottom-center":{bottom:"20px",left:"50%",transform:"translateX(-50%)"},"bottom-left":{bottom:"20px",left:"20px"},"center-right":{top:"50%",right:"20px",transform:"translateY(-50%)"}},a=o[n],s={position:"absolute",width:a,height:a,color:r,pointerEvents:"none",zIndex:10,...i[e]};return t==="bouncing-arrow"?l.jsxs("div",{style:{...s,animation:"bounce 2s infinite",fontSize:a},children:[l.jsx("div",{style:{width:"100%",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:"↓"}),l.jsx("style",{children:`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
            60% { transform: translateY(-5px); }
          }
        `})]}):t==="pulsing-dot"?l.jsx("div",{style:{...s,borderRadius:"50%",backgroundColor:r,animation:"pulse 1.5s infinite"},children:l.jsx("style",{children:`
          @keyframes pulse {
            0% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.7; transform: scale(1.2); }
            100% { opacity: 1; transform: scale(1); }
          }
        `})}):t==="chevron"?l.jsxs("div",{style:{...s,animation:"slideDown 2s infinite"},children:[l.jsx("svg",{width:"100%",height:"100%",viewBox:"0 0 24 24",fill:"none",children:l.jsx("path",{d:"M7 10L12 15L17 10",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})}),l.jsx("style",{children:`
          @keyframes slideDown {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(8px); }
          }
        `})]}):null},fce=({children:e,height:t="500px",showIndicator:r=!0,indicatorProps:n={}})=>{const o=O.useRef(null),{showIndicator:i}=uce(o);return l.jsxs("div",{style:{position:"relative",height:t,border:"1px solid #ddd",borderRadius:"8px"},children:[l.jsx("div",{ref:o,style:{height:"100%",overflowY:"auto",padding:"16px",scrollBehavior:"smooth"},children:e}),r&&i&&l.jsx(dce,{...n})]})},gce=e=>e.setM_hasScrolledBottom,fr=e=>{const t=e.trigger,r=e.setTrigger,n=E(gce),o=O.useRef(null),i=e.head,a=e.text,s=e.height;let c=50;const u=O.useCallback($h(g=>{const p=g.target,m=p.scrollTop,h=p.scrollHeight,y=p.clientHeight;h-(m+y)<=c&&n(!0)},100),[n,c]),f=()=>{r(!1),n(!1)},d={content:{display:"flex",justifySelf:"center",flexDirection:"column",alignItems:"center",backgroundColor:"#ffffff",borderRadius:"10px",padding:"0px",width:"96vw",height:"fit-content",maxHeight:"80vh",paddingBottom:"10px",WebkitOverflowScrolling:"touch"}};return l.jsx(vce,{children:l.jsxs(Ph,{id:"presortHelpModal",isOpen:t,onClose:f,style:d,overlayClassName:"Overlay",ariaHideApp:!1,children:[l.jsx(yce,{children:l.jsx(xce,{onClick:f,children:"X"})}),l.jsxs(pce,{children:[i,l.jsx("hr",{})]}),l.jsx(hce,{ref:o,children:l.jsx(fce,{height:s,children:l.jsx(mce,{onScroll:u,children:a})})})]})})},pce=C.div`
  font-size: 20px;
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  line-height: 1.42;
  padding: 10px;
  margin-top: 0px;
  color: black;
  hr {
    color: black;
  }
`,mce=C.div`
  // inner
  padding: 10px;
  padding-top: 15px;
  color: ${e=>e.theme.mobileText};
  min-height: 8vh;
  overflow-y: scroll;
`,hce=C.div`
  // outer
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  max-height: 60vh;
`,vce=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;C.div`
  position: absolute;
  left: 50%;
  top: 96%; /* Adjust as needed */
  transform: translate(-50%, -50%);
  z-index: 2;
  pointer-events: none; /* So clicks pass through */
`;const xce=C.button`
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
`,yce=C.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0px;
`,bce=e=>e.langObj,Sce=e=>e.mapObj,Cce=e=>e.triggerMobilePresortRedoModal,wce=e=>e.setTriggerMobilePresortRedoModal,$j=e=>{const t=X(bce),r=X(Sce),n=E(Cce),o=E(wce),i=A(D(t.mobilePresortRedoModalHead))||"",a=r.useColLabelEmojiPresort;let s="",[c,u]=O.useState({backgroundColor:"#e5e5e5",value:0});const f=()=>{u({backgroundColor:"#BCF0DA",value:2})},d=()=>{u({backgroundColor:"#FBD5D5",value:-2})},g=()=>{u({backgroundColor:"#F3F4F6",value:0})},p=A(D(t.mobilePresortRedoModalConfirmButton))||"",m=A(D(t.mobileModalButtonCancel))||"",h=A(D(t.mobilePresortAssignLeft))||"",y=A(D(t.mobilePresortAssignRight))||"",v=()=>{u({backgroundColor:"#e5e5e5",value:0}),o(!1)},x=a[0]==="true"?l.jsxs(lb,{children:[l.jsx(Ir,{id:"-2",value:-2,color:"#FBD5D5",onClick:d,child:l.jsxs(Sf,{children:[" ",l.jsx(pr,{})," "]})}),l.jsx(Ir,{id:"0",value:0,color:"#F3F4F6",onClick:g,child:l.jsxs(Sf,{children:[" ",l.jsx($r,{})," "]})}),l.jsx(Ir,{id:"2",value:2,color:"#BCF0DA",onClick:f,child:l.jsxs(Sf,{children:[" ",l.jsx(Nr,{})," "]})})]}):l.jsxs(lb,{children:[l.jsx(Ir,{id:"-2",value:-2,color:"#FBD5D5",child:l.jsx("div",{children:"-"}),onClick:d}),l.jsx(Ir,{id:"0",value:0,child:l.jsx("div",{children:"?"}),color:"#F3F4F6",onClick:g}),l.jsx(Ir,{id:"2",value:2,child:l.jsx("div",{children:"+"}),color:"#BCF0DA",onClick:f})]}),S={content:{display:"flex",justifySelf:"center",flexDirection:"column",alignItems:"center",backgroundColor:"#ffffff",borderRadius:"10px",padding:"0px",paddingBottom:"10px",width:"96vw",maxHeight:"60vh",overflowY:"scroll",WebkitOverflowScrolling:"touch"}};return l.jsxs(Ph,{isOpen:n,onClose:v,center:!0,style:S,overlayClassName:"Overlay",children:[l.jsx(Pce,{children:l.jsx(Ece,{onClick:v,children:"X"})}),l.jsx(jce,{children:i}),l.jsx("hr",{}),l.jsx(Tce,{children:s}),l.jsx(Sj,{backgroundColor:c.backgroundColor,statement:e.statement.current.statement}),l.jsxs(Ice,{children:[l.jsx(cb,{children:h}),l.jsx(cb,{children:y})]}),x,l.jsxs(Oce,{children:[l.jsx(sb,{onClick:v,children:m}),l.jsx(sb,{onClick:()=>{e.clickFunction(c.value),v()},children:p})]})]})};$j.propTypes={clickFunction:Ur.func.isRequired,statement:Ur.object.isRequired};const jce=C.div`
  font-size: 24px;
  line-height: 1.42;
  padding: 10px 0px 10px 0px;

  hr {
    color: black;
  }
`,Tce=C.div`
  margin-top: 15px;
`,Oce=C.div`
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
`,sb=C.div`
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
`,Ice=C.div`
  display: flex;
  justify-self: center;
  justify-content: space-between;
  width: 85vw;
  min-height: 6vh;
  margin-top: 5px;
  align-items: flex-end;
  font-size: 2.5vh;
`,lb=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 20px;
  width: 85vw;
  height: 30px;
  justify-self: center;
`,cb=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  width: 28vw;
`,Ece=C.button`
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
`,Pce=C.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0px;
`,Sf=C.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,Xs=e=>O.createElement("svg",{width:150,height:155,viewBox:"0 0 150 155",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("circle",{cx:75,cy:76,r:70,stroke:"white",strokeWidth:10}),O.createElement("mask",{id:"path-2-outside-1_320_30",maskUnits:"userSpaceOnUse",x:48,y:28,width:56,height:98,fill:"black"},O.createElement("rect",{fill:"white",x:48,y:28,width:56,height:98}),O.createElement("path",{d:"M67.8182 97.8182V97.2727C67.8788 91.4848 68.4848 86.8788 69.6364 83.4545C70.7879 80.0303 72.4242 77.2576 74.5455 75.1364C76.6667 73.0152 79.2121 71.0606 82.1818 69.2727C83.9697 68.1818 85.5758 66.8939 87 65.4091C88.4242 63.8939 89.5455 62.1515 90.3636 60.1818C91.2121 58.2121 91.6364 56.0303 91.6364 53.6364C91.6364 50.6667 90.9394 48.0909 89.5455 45.9091C88.1515 43.7273 86.2879 42.0455 83.9545 40.8636C81.6212 39.6818 79.0303 39.0909 76.1818 39.0909C73.697 39.0909 71.303 39.6061 69 40.6364C66.697 41.6667 64.7727 43.2879 63.2273 45.5C61.6818 47.7121 60.7879 50.6061 60.5455 54.1818H49.0909C49.3333 49.0303 50.6667 44.6212 53.0909 40.9545C55.5455 37.2879 58.7727 34.4848 62.7727 32.5454C66.803 30.6061 71.2727 29.6364 76.1818 29.6364C81.5152 29.6364 86.1515 30.697 90.0909 32.8182C94.0606 34.9394 97.1212 37.8485 99.2727 41.5454C101.455 45.2424 102.545 49.4545 102.545 54.1818C102.545 57.5151 102.03 60.5303 101 63.2273C100 65.9242 98.5455 68.3333 96.6364 70.4545C94.7576 72.5758 92.4849 74.4545 89.8182 76.0909C87.1515 77.7576 85.0152 79.5152 83.4091 81.3636C81.803 83.1818 80.6364 85.3485 79.9091 87.8636C79.1818 90.3788 78.7879 93.5152 78.7273 97.2727V97.8182H67.8182ZM73.6364 124.727C71.3939 124.727 69.4697 123.924 67.8636 122.318C66.2576 120.712 65.4545 118.788 65.4545 116.545C65.4545 114.303 66.2576 112.379 67.8636 110.773C69.4697 109.167 71.3939 108.364 73.6364 108.364C75.8788 108.364 77.803 109.167 79.4091 110.773C81.0152 112.379 81.8182 114.303 81.8182 116.545C81.8182 118.03 81.4394 119.394 80.6818 120.636C79.9545 121.879 78.9697 122.879 77.7273 123.636C76.5152 124.364 75.1515 124.727 73.6364 124.727Z"})),O.createElement("path",{d:"M67.8182 97.8182V97.2727C67.8788 91.4848 68.4848 86.8788 69.6364 83.4545C70.7879 80.0303 72.4242 77.2576 74.5455 75.1364C76.6667 73.0152 79.2121 71.0606 82.1818 69.2727C83.9697 68.1818 85.5758 66.8939 87 65.4091C88.4242 63.8939 89.5455 62.1515 90.3636 60.1818C91.2121 58.2121 91.6364 56.0303 91.6364 53.6364C91.6364 50.6667 90.9394 48.0909 89.5455 45.9091C88.1515 43.7273 86.2879 42.0455 83.9545 40.8636C81.6212 39.6818 79.0303 39.0909 76.1818 39.0909C73.697 39.0909 71.303 39.6061 69 40.6364C66.697 41.6667 64.7727 43.2879 63.2273 45.5C61.6818 47.7121 60.7879 50.6061 60.5455 54.1818H49.0909C49.3333 49.0303 50.6667 44.6212 53.0909 40.9545C55.5455 37.2879 58.7727 34.4848 62.7727 32.5454C66.803 30.6061 71.2727 29.6364 76.1818 29.6364C81.5152 29.6364 86.1515 30.697 90.0909 32.8182C94.0606 34.9394 97.1212 37.8485 99.2727 41.5454C101.455 45.2424 102.545 49.4545 102.545 54.1818C102.545 57.5151 102.03 60.5303 101 63.2273C100 65.9242 98.5455 68.3333 96.6364 70.4545C94.7576 72.5758 92.4849 74.4545 89.8182 76.0909C87.1515 77.7576 85.0152 79.5152 83.4091 81.3636C81.803 83.1818 80.6364 85.3485 79.9091 87.8636C79.1818 90.3788 78.7879 93.5152 78.7273 97.2727V97.8182H67.8182ZM73.6364 124.727C71.3939 124.727 69.4697 123.924 67.8636 122.318C66.2576 120.712 65.4545 118.788 65.4545 116.545C65.4545 114.303 66.2576 112.379 67.8636 110.773C69.4697 109.167 71.3939 108.364 73.6364 108.364C75.8788 108.364 77.803 109.167 79.4091 110.773C81.0152 112.379 81.8182 114.303 81.8182 116.545C81.8182 118.03 81.4394 119.394 80.6818 120.636C79.9545 121.879 78.9697 122.879 77.7273 123.636C76.5152 124.364 75.1515 124.727 73.6364 124.727Z",fill:"white"}),O.createElement("path",{d:"M67.8182 97.8182H66.8182V98.8182H67.8182V97.8182ZM67.8182 97.2727L66.8182 97.2623V97.2727H67.8182ZM69.6364 83.4545L68.6885 83.1358L68.6885 83.1358L69.6364 83.4545ZM74.5455 75.1364L75.2526 75.8435L75.2526 75.8435L74.5455 75.1364ZM82.1818 69.2727L82.6976 70.1295L82.7027 70.1264L82.1818 69.2727ZM87 65.4091L87.7217 66.1013L87.7286 66.094L87 65.4091ZM90.3636 60.1818L89.4451 59.7862L89.4401 59.7982L90.3636 60.1818ZM69 40.6364L68.5916 39.7235L68.5916 39.7235L69 40.6364ZM63.2273 45.5L64.047 46.0727L64.047 46.0727L63.2273 45.5ZM60.5455 54.1818V55.1818H61.48L61.5432 54.2495L60.5455 54.1818ZM49.0909 54.1818L48.092 54.1348L48.0427 55.1818H49.0909V54.1818ZM53.0909 40.9545L52.2599 40.3983L52.2567 40.403L53.0909 40.9545ZM62.7727 32.5454L62.3391 31.6443L62.3365 31.6456L62.7727 32.5454ZM90.0909 32.8182L89.6168 33.6987L89.6196 33.7002L90.0909 32.8182ZM99.2727 41.5454L98.4084 42.0484L98.4115 42.0537L99.2727 41.5454ZM101 63.2273L100.066 62.8704L100.062 62.8796L101 63.2273ZM96.6364 70.4545L95.893 69.7856L95.8878 69.7915L96.6364 70.4545ZM89.8182 76.0909L89.2952 75.2386L89.2882 75.2429L89.8182 76.0909ZM83.4091 81.3636L84.1586 82.0257L84.164 82.0195L83.4091 81.3636ZM78.7273 97.2727L77.7274 97.2566L77.7273 97.2647V97.2727H78.7273ZM78.7273 97.8182V98.8182H79.7273V97.8182H78.7273ZM67.8636 122.318L68.5707 121.611L68.5707 121.611L67.8636 122.318ZM67.8636 110.773L68.5707 111.48L68.5707 111.48L67.8636 110.773ZM80.6818 120.636L79.828 120.116L79.8233 120.123L79.8188 120.131L80.6818 120.636ZM77.7273 123.636L78.2418 124.494L78.2479 124.49L77.7273 123.636ZM68.8182 97.8182V97.2727H66.8182V97.8182H68.8182ZM68.8181 97.2832C68.8782 91.5451 69.48 87.0567 70.5842 83.7733L68.6885 83.1358C67.4897 86.7008 66.8794 91.4246 66.8182 97.2623L68.8181 97.2832ZM70.5842 83.7733C71.6965 80.4658 73.2606 77.8355 75.2526 75.8435L73.8383 74.4293C71.5879 76.6797 69.8793 79.5948 68.6885 83.1358L70.5842 83.7733ZM75.2526 75.8435C77.3082 73.7878 79.787 71.8817 82.6976 70.1294L81.666 68.416C78.6372 70.2395 76.0251 72.2425 73.8383 74.4293L75.2526 75.8435ZM82.7027 70.1264C84.5628 68.9913 86.2367 67.6495 87.7217 66.1013L86.2783 64.7169C84.9148 66.1384 83.3765 67.3723 81.661 68.4191L82.7027 70.1264ZM87.7286 66.094C89.2376 64.4887 90.4239 62.6436 91.2871 60.5654L89.4401 59.7982C88.667 61.6595 87.6109 63.2992 86.2714 64.7242L87.7286 66.094ZM91.282 60.5774C92.1903 58.469 92.6364 56.1505 92.6364 53.6364H90.6364C90.6364 55.9101 90.234 57.9552 89.4452 59.7862L91.282 60.5774ZM92.6364 53.6364C92.6364 50.5046 91.8993 47.7359 90.3882 45.3707L88.7028 46.4475C89.9795 48.4459 90.6364 50.8287 90.6364 53.6364H92.6364ZM90.3882 45.3707C88.8969 43.0365 86.8976 41.2333 84.4064 39.9715L83.5027 41.7557C85.6782 42.8576 87.4062 44.418 88.7028 46.4475L90.3882 45.3707ZM84.4064 39.9715C81.9208 38.7126 79.173 38.0909 76.1818 38.0909V40.0909C78.8876 40.0909 81.3216 40.651 83.5027 41.7557L84.4064 39.9715ZM76.1818 38.0909C73.554 38.0909 71.0211 38.6367 68.5916 39.7235L69.4084 41.5492C71.585 40.5754 73.8399 40.0909 76.1818 40.0909V38.0909ZM68.5916 39.7235C66.1116 40.833 64.0493 42.5774 62.4075 44.9273L64.047 46.0727C65.4962 43.9984 67.2823 42.5003 69.4084 41.5492L68.5916 39.7235ZM62.4075 44.9273C60.7291 47.3297 59.7985 50.4149 59.5477 54.1142L61.5432 54.2495C61.7772 50.7973 62.6345 48.0945 64.047 46.0727L62.4075 44.9273ZM60.5455 53.1818H49.0909V55.1818H60.5455V53.1818ZM50.0898 54.2288C50.3252 49.2257 51.6162 44.9982 53.9251 41.5061L52.2567 40.403C49.7171 44.2443 48.3414 48.8349 48.092 54.1348L50.0898 54.2288ZM53.9219 41.5108C56.2769 37.9928 59.3675 35.3078 63.209 33.4453L62.3365 31.6456C58.178 33.6619 54.814 36.5829 52.2599 40.3983L53.9219 41.5108ZM63.2063 33.4465C67.0886 31.5784 71.408 30.6364 76.1818 30.6364V28.6364C71.1374 28.6364 66.5175 29.6337 62.3391 31.6443L63.2063 33.4465ZM76.1818 30.6364C81.3814 30.6364 85.8487 31.6697 89.6168 33.6986L90.565 31.9377C86.4543 29.7243 81.649 28.6364 76.1818 28.6364V30.6364ZM89.6196 33.7002C93.4346 35.7387 96.3552 38.5204 98.4084 42.0484L100.137 41.0425C97.8872 37.1766 94.6866 34.1401 90.5622 31.9362L89.6196 33.7002ZM98.4115 42.0537C100.493 45.5814 101.545 49.6147 101.545 54.1818H103.545C103.545 49.2944 102.416 44.9034 100.134 41.0372L98.4115 42.0537ZM101.545 54.1818C101.545 57.4118 101.046 60.3035 100.066 62.8704L101.934 63.5841C103.014 60.7571 103.545 57.6185 103.545 54.1818H101.545ZM100.062 62.8796C99.1059 65.4591 97.717 67.759 95.8931 69.7856L97.3797 71.1235C99.3739 68.9077 100.894 66.3893 101.938 63.5749L100.062 62.8796ZM95.8878 69.7915C94.0808 71.8316 91.8864 73.6485 89.2952 75.2386L90.3412 76.9432C93.0833 75.2606 95.4343 73.3199 97.385 71.1176L95.8878 69.7915ZM89.2882 75.2429C86.56 76.948 84.3407 78.7667 82.6542 80.7078L84.164 82.0195C85.6896 80.2636 87.743 78.5671 90.3482 76.9389L89.2882 75.2429ZM82.6596 80.7016C80.948 82.6393 79.7135 84.94 78.9484 87.5859L80.8697 88.1414C81.5592 85.7569 82.6581 83.7244 84.1586 82.0257L82.6596 80.7016ZM78.9484 87.5859C78.1885 90.2142 77.7889 93.4454 77.7274 97.2566L79.7271 97.2889C79.7869 93.5849 80.1752 90.5434 80.8697 88.1414L78.9484 87.5859ZM77.7273 97.2727V97.8182H79.7273V97.2727H77.7273ZM78.7273 96.8182H67.8182V98.8182H78.7273V96.8182ZM73.6364 123.727C71.663 123.727 69.992 123.032 68.5707 121.611L67.1565 123.025C68.9474 124.816 71.1249 125.727 73.6364 125.727V123.727ZM68.5707 121.611C67.1495 120.19 66.4545 118.519 66.4545 116.545H64.4545C64.4545 119.057 65.3656 121.234 67.1565 123.025L68.5707 121.611ZM66.4545 116.545C66.4545 114.572 67.1495 112.901 68.5707 111.48L67.1565 110.066C65.3656 111.857 64.4545 114.034 64.4545 116.545H66.4545ZM68.5707 111.48C69.992 110.059 71.663 109.364 73.6364 109.364V107.364C71.1249 107.364 68.9474 108.275 67.1565 110.066L68.5707 111.48ZM73.6364 109.364C75.6098 109.364 77.2807 110.059 78.702 111.48L80.1162 110.066C78.3253 108.275 76.1478 107.364 73.6364 107.364V109.364ZM78.702 111.48C80.1232 112.901 80.8182 114.572 80.8182 116.545H82.8182C82.8182 114.034 81.9071 111.857 80.1162 110.066L78.702 111.48ZM80.8182 116.545C80.8182 117.851 80.4879 119.033 79.828 120.116L81.5356 121.157C82.3908 119.754 82.8182 118.21 82.8182 116.545H80.8182ZM79.8188 120.131C79.176 121.229 78.3095 122.11 77.2067 122.783L78.2479 124.49C79.6299 123.647 80.7331 122.528 81.5448 121.142L79.8188 120.131ZM77.2128 122.779C76.1673 123.406 74.9838 123.727 73.6364 123.727V125.727C75.3192 125.727 76.863 125.321 78.2418 124.494L77.2128 122.779Z",fill:"white",mask:"url(#path-2-outside-1_320_30)"})),$ce=e=>e.langObj,kce=e=>e.configObj,Nce=e=>e.mapObj,Mce=e=>e.statementsObj,Ace=e=>e.isLoggedIn,Dce=e=>e.setCurrentPage,Rce=e=>e.setProgressScore,Lce=e=>e.resetColumnStatements,_ce=e=>e.setTriggerMobilePresortFinishedModal,Fce=e=>e.setPresortFinished,Bce=e=>e.mobilePresortFontSize,zce=e=>e.setTriggerMobilePresortRedoModal,Hce=e=>e.setTriggerMobilePresortHelpModal,Uce=e=>e.triggerMobilePresortHelpModal,Vce=e=>e.triggerMobilePresortFinishedModal,Wce=e=>e.setTriggerMobilePresortFinishedModal,ub=()=>{var Se;const e=X($ce),t=X(kce),r=X(Nce),n=X(Mce),o=X(Ace),i=E(Dce),a=E(Rce),s=X(Lce),c=E(Fce),u=E(Bce),f=E(zce),d=E(_ce),g=E(Uce),p=E(Hce),m=he=>he.triggerMobilePresortPreventNavModal,h=he=>he.setTriggerMobilePresortPreventNavModal,y=E(Vce),v=E(Wce),x=r.useColLabelEmojiPresort,S=A(D(e.mobilePresortConditionsOfInstruction))||"",I=A(D(e.mobilePresortCompletedLabel))||"",k=A(D(e.mobilePresortAssignLeft))||"",T=A(D(e.mobilePresortAssignRight))||"",P=A(D(e.mobilePresortProcessCompleteMessage))||"",N=A(D(e.screenOrientationText))||"",j=A(D(e.expandViewMessage))||"",F=A(D(e.mobilePresortHelpModalHead))||"",V=A(D(e.mobilePresortHelpModalText))||"",Z=E(m),Y=E(h),z=A(D(e.mobilePresortPreventNavModalHead))||"",J=A(D(e.mobilePresortPreventNavModalText))||"",K=A(D(e.mobilePresortFinishedModalHead))||"",M=A(D(e.mobilePresortFinishedModalText))||"";let[R,_]=Ee("presortArray2",[...JSON.parse(localStorage.getItem("presortArray"))]),[B,q]=Ee("m_PresortStatementCount",0),[H,Q]=Ee("m_PresortResults",[]),U=ho(),G=O.useRef({id:"",statement:""});const $=O.useRef(null);O.useEffect(()=>($.current=Date.now(),(async()=>{await i("presort"),localStorage.setItem("currentPage","presort"),await a(20)})(),()=>{Sr($.current,"presortPage","presortPage")}),[i,a]);let w=n.columnStatements;t.setupTarget==="local"&&(w=JSON.parse(JSON.stringify(s)));const b=t.initialScreen,W=()=>{p(!0)},L=he=>{f(!0),G.current.id=he.target.dataset.id,G.current.statement=he.target.dataset.statement},re=()=>{ae(-2),navigator.vibrate&&navigator.vibrate(100)},ie=()=>{ae(0),navigator.vibrate&&navigator.vibrate(100)},ge=()=>{ae(2),navigator.vibrate&&navigator.vibrate(100)},se=he=>{f(!1);let Ce=H.find(Fe=>Fe.id===G.current.id);Ce.psValue=he,Ce.color=Vg(he),he>0?(Ce.pinkChecked=!1,Ce.yellowChecked=!1,Ce.greenChecked=!0):he<0?(Ce.pinkChecked=!0,Ce.yellowChecked=!1,Ce.greenChecked=!1):(Ce.pinkChecked=!1,Ce.yellowChecked=!0,Ce.greenChecked=!1),H.sort((Fe,yt)=>{let mt=+Fe.id.slice(1),ar=+yt.id.slice(1);return Fe.psValue===yt.psValue?mt-ar:yt.psValue-Fe.psValue}),Q([...H]);let Ve=H.filter(Fe=>+Fe.psValue>0),ze=H.filter(Fe=>+Fe.psValue<0);localStorage.setItem("selectedPosItems",JSON.stringify(Ve)),localStorage.setItem("selectedNegItems",JSON.stringify(ze));let be=JSON.parse(localStorage.getItem("sortRightArrays")),Oe=JSON.parse(localStorage.getItem("sortLeftArrays")),st=Ve.length,pt=ze.length;Lg(st,pt,be,Oe)},ae=O.useCallback(he=>{try{if(R.length>0){let Ce=R.shift(),Ve=B+1;_(R),q(Ve),he>0?(Ce.pinkChecked=!1,Ce.yellowChecked=!1,Ce.greenChecked=!0):he<0?(Ce.pinkChecked=!0,Ce.yellowChecked=!1,Ce.greenChecked=!1):(Ce.pinkChecked=!1,Ce.yellowChecked=!0,Ce.greenChecked=!1),Ce.psValue=he,Ce.color=Vg(he),H.push({...Ce}),H.sort((Oe,st)=>{let pt=+Oe.id.slice(1),Fe=+st.id.slice(1);return Oe.psValue===st.psValue?pt-Fe:st.psValue-Oe.psValue}),Q(H);let ze=H.filter(Oe=>+Oe.psValue>0),be=H.filter(Oe=>+Oe.psValue<0);if(localStorage.setItem("selectedPosItems",JSON.stringify(ze)),localStorage.setItem("selectedNegItems",JSON.stringify(be)),R.length===0){let Oe=JSON.parse(localStorage.getItem("sortRightArrays")),st=JSON.parse(localStorage.getItem("sortLeftArrays")),pt=JSON.parse(localStorage.getItem("newCols")),Fe=ze.length,yt=be.length,mt=Lg(Fe,yt,Oe,st);localStorage.setItem("thinDisplayControllerArray",JSON.stringify(mt)),pt.statementList=H,localStorage.setItem("newCols",JSON.stringify(pt)),d(!0),localStorage.setItem("m_PresortFinished","true")}}}catch(Ce){console.error(Ce)}});if(O.useEffect(()=>{const he=Ce=>{if(Ce.key==="1"||Ce.key===1)ae(-2);else if(Ce.key==="2"||Ce.key===2)ae(0);else if(Ce.key==="3"||Ce.key===3)ae(2);else return};return window.addEventListener("keyup",he),()=>window.removeEventListener("keyup",he)},[ae]),R.length===0&&setTimeout(()=>{c(!0)},100),b!=="anonymous"&&o===!1)return l.jsx(h3,{});if(U==="landscape-primary")return l.jsx(Jce,{children:l.jsx("h1",{children:N})});let ye=w.statementList.length,me=JSON.parse(localStorage.getItem("m_PresortDisplayStatements"));const ue=x[0]==="true"?l.jsxs(db,{children:[l.jsx(Ir,{id:"-2",value:-2,color:"#FBD5D5",onClick:re,child:l.jsxs(Cf,{children:[" ",l.jsx(pr,{})," "]})}),l.jsx(Ir,{id:"0",value:0,color:"#F3F4F6",onClick:ie,child:l.jsxs(Cf,{children:[" ",l.jsx($r,{})," "]})}),l.jsx(Ir,{id:"2",value:2,color:"#BCF0DA",onClick:ge,child:l.jsxs(Cf,{children:[" ",l.jsx(Nr,{})," "]})})]}):l.jsxs(db,{children:[l.jsx(Ir,{id:"-2",value:-2,color:"#FBD5D5",child:l.jsx("div",{children:"-"}),onClick:re}),l.jsx(Ir,{id:"0",value:0,child:l.jsx("div",{children:"?"}),color:"#F3F4F6",onClick:ie}),l.jsx(Ir,{id:"2",value:2,child:l.jsx("div",{children:"+"}),color:"#BCF0DA",onClick:ge})]});return l.jsxs(Gce,{children:[l.jsxs(tue,{children:[l.jsx(fr,{head:F,text:V,trigger:g,setTrigger:p,showArrow:!0,height:"450px"}),l.jsx($j,{clickFunction:se,statement:G}),l.jsx(fr,{head:z,text:J,trigger:Z,setTrigger:Y,showArrow:!1,height:"150px"}),l.jsx(fr,{head:K,text:M,trigger:y,setTrigger:v,showArrow:!1,height:"300px"})]}),l.jsxs(qce,{background:t.headerBarColor,children:[S,l.jsx(Zce,{onClick:W,children:l.jsx(Xs,{})})]}),me.display?l.jsxs(l.Fragment,{children:[l.jsx(Sj,{fontSize:u,statement:(Se=R==null?void 0:R[0])==null?void 0:Se.statement,backgroundColor:"#e5e5e5"}),l.jsxs(Qce,{children:[l.jsx(fb,{children:k}),l.jsx(Yce,{children:`${B} / ${ye}`}),l.jsx(fb,{children:T})]}),ue,l.jsx(Kce,{children:I}),l.jsx(Wse,{statements:H,onClick:L}),l.jsx(eue,{children:j})]}):l.jsx(Xce,{children:l.jsx("p",{children:P})})]})},qce=C.div`
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
  color: white;
  font-weight: bold;
  font-size: 4.5vw;
  user-select: none;
  margin-bottom: 10px;
`,Gce=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  user-select: none;
  background-color: #f3f4f6;
`,db=C.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
  margin-bottom: 20px;
  width: 85vw;
  height: 30px;
  justify-self: center;
`,Kce=C.div`
  display: flex;
  justify-content: left;
  align-items: flex-end;
  font-size: 2.5vh;
  padding-left: 2.5vw;
  color: ${e=>e.theme.mobileText};
`,Jce=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`,Qce=C.div`
  display: flex;
  justify-self: center;
  justify-content: space-between;
  width: 85vw;
  min-height: 6vh;
  margin-top: 5px;
  align-items: flex-end;
  font-size: 2.5vh;
`,fb=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  width: 28vw;
`,Yce=C.div`
  display: flex;
  justify-content: center;
  align-items: start;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  width: 28vw;
  height: 7vh;
  color: ${e=>e.theme.mobileText};
`,Zce=C.div`
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
`,Xce=C.div`
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
`,eue=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
`,tue=C.div`
  display: flex;
  justify-content: center;
  width: 100%;
`,Cf=C.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`,kj=e=>O.createElement("svg",{width:25,height:41,viewBox:"0 0 25 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("path",{d:"M25 27L12.6289 40.4021L1.90735e-06 27L5.92784 27L12.6289 33.701L19.0722 27H25Z",fill:"#899499",fillOpacity:.5}),O.createElement("path",{d:"M25 18L12.6289 31.4021L1.90735e-06 18L5.92784 18L12.6289 24.701L19.0722 18H25Z",fill:"#899499",fillOpacity:.4}),O.createElement("path",{d:"M25 9.00001L12.6289 22.4021L1.90735e-06 9.00001L5.92784 9.00001L12.6289 15.701L19.0722 9.00001H25Z",fill:"#899499",fillOpacity:.3}),O.createElement("path",{d:"M25 7.62939e-06L12.6289 13.4021L1.90735e-06 7.62939e-06L5.92784 7.62939e-06L12.6289 6.70104L19.0722 7.62939e-06H25Z",fill:"#899499",fillOpacity:.2})),Nj=e=>O.createElement("svg",{width:25,height:41,viewBox:"0 0 25 41",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("path",{d:"M0 13.4021L12.3711 0L25 13.4021H19.0722L12.3711 6.70103L5.92783 13.4021H0Z",fill:"#899499",fillOpacity:.5}),O.createElement("path",{d:"M0 22.4021L12.3711 9L25 22.4021H19.0722L12.3711 15.701L5.92783 22.4021H0Z",fill:"#899499",fillOpacity:.4}),O.createElement("path",{d:"M0 31.4021L12.3711 18L25 31.4021H19.0722L12.3711 24.701L5.92783 31.4021H0Z",fill:"#899499",fillOpacity:.3}),O.createElement("path",{d:"M0 40.4021L12.3711 27L25 40.4021H19.0722L12.3711 33.701L5.92783 40.4021H0Z",fill:"#899499",fillOpacity:.2})),rue=e=>e.langObj,nue=e=>{const t=X(rue);let r=A(D(t.mobileThinSelectedText))||"",n=e.selected||0,o=e.required||0;return l.jsx(oue,{selected:n,required:o,children:l.jsx("p",{children:`${r}: ${n} / ${o}`})})},oue=C.div`
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
`,iue=e=>e.langObj,aue=e=>e.triggerMobileThinMoveTopModal,sue=e=>e.setTriggerMobileThinMoveTopModal,lue=({onClick:e})=>{const t=X(iue),r=E(aue),n=E(sue),o=A(D(t.moveTopMobileHead))||"",i=A(D(t.moveAllTopMobileText))||"",a=A(D(t.moveTopMobileButtonOK))||"",s=A(D(t.mobileModalButtonCancel))||"",c=()=>{n(!1)},u=()=>{e==null||e(),c()},f=l.jsx(xue,{children:l.jsx(yue,{onClick:c,"aria-label":"Close modal",children:"×"})});return l.jsx(Re,{open:r,onClose:c,center:!0,closeIcon:f,classNames:{modal:"custom-move-all-modal-height",overlay:"mobile-thin-modal-overlay"},styles:{overlay:{backgroundColor:"rgba(0, 0, 0, 0.6)",backdropFilter:"blur(4px)",display:"flex",alignItems:"center",justifyContent:"center"}},children:l.jsxs(cue,{children:[l.jsxs(uue,{children:[l.jsx(due,{children:o}),l.jsx(fue,{})]}),l.jsxs(gue,{children:[l.jsx(pue,{children:i}),l.jsxs(mue,{children:[l.jsx(hue,{onClick:c,children:s}),l.jsx(vue,{onClick:u,children:a})]})]})]})})},cue=C.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  height: 100%;
  max-height: 40vh;
  min-height: 200px;
  width: 100%;
  position: relative;
  overflow: hidden;
`,uue=C.header`
  padding: 16px 20px 0 20px;
  text-align: center;
  background: white;
  flex-shrink: 0;
`,due=C.h2`
  margin: 0 0 12px 0;
  font-size: clamp(1.1rem, 4vw, 1.3rem);
  font-weight: 600;
  color: #1f2937;
  line-height: 1.3;
`,fue=C.div`
  height: 2px;
  background: linear-gradient(90deg, transparent, #e5e7eb, transparent);
  margin: 0 -20px;
`,gue=C.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px 20px 20px;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  min-height: 0;
`,pue=C.div`
  font-size: clamp(1rem, 3.5vw, 1.125rem);
  line-height: 1.6;
  color: #4b5563;
  text-align: center;
  margin: 0;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`,mue=C.div`
  display: flex;
  gap: 12px;
  width: 100%;
  max-width: 280px;
`,Mj=C.button`
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
`,hue=C(Mj)`
  background: #f3f4f6;
  color: #6b7280;
  border: 1px solid #d1d5db;

  &:hover:not(:disabled) {
    background: #e5e7eb;
    color: #4b5563;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,vue=C(Mj)`
  background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
  color: white;
  box-shadow: 0 2px 8px rgba(59, 130, 246, 0.3);

  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%);
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(59, 130, 246, 0.4);
  }
`,xue=C.div`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
`,yue=C.div`
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
`,bue=(e,t)=>(e.forEach(r=>{let n=r.id,o=r.targetcol;t.statementList.forEach(i=>{i.id===n&&(t.vCols[o].push(i),Do(t.statementList,a=>a.id===n))})}),t),Sue=(e,t)=>(e.forEach(r=>{let n=r.id,o=r.targetcol;t.statementList.forEach(i=>{i.id===n&&(t.vCols[o].push(i),Do(t.statementList,a=>a.id===n))})}),t);function gb({nativeEvent:e}){return window.TouchEvent?e instanceof TouchEvent:"touches"in e}function pb(e){return e.nativeEvent instanceof MouseEvent}function Cue(e,t={}){const{threshold:r=400,onStart:n,onFinish:o,onCancel:i}=t,a=O.useRef(!1),s=O.useRef(!1),c=O.useRef();return O.useMemo(()=>{if(typeof e!="function")return{};const u=p=>{!pb(p)&&!gb(p)||(n&&n(p),s.current=!0,c.current=setTimeout(()=>{e(p),a.current=!0},r))},f=p=>{!pb(p)&&!gb(p)||(a.current?o&&o(p):s.current&&i&&i(p),a.current=!1,s.current=!1,c.current&&window.clearTimeout(c.current))};return{...{onMouseDown:u,onMouseUp:f,onMouseLeave:f},...{onTouchStart:u,onTouchEnd:f}}},[e,r,i,o,n])}const wue=e=>e.langObj,jue=e=>e.configObj,Tue=e=>e.showConfirmButton,Oue=e=>e.setCurrentPage,Iue=e=>e.setProgressScore,Eue=e=>e.setTriggerMobileThinMoveTopModal,Pue=e=>e.mobileThinFontSize,$ue=e=>e.mobileThinViewSize,kue=e=>e.setTriggerMobileThinHelpModal,Nue=e=>e.setTriggerMobileThinGuidanceModal,Mue=e=>e.setTriggerMobileThinScrollBottomModal,Aue=e=>e.triggerMobileThinHelpModal,Due=e=>e.setTriggerMobileThinHelpModal,Rue=e=>e.triggerMobileThinPreventNavModal,Lue=e=>e.setTriggerMobileThinPreventNavModal,_ue=e=>e.triggerMobileThinScrollBottomModal,Fue=e=>e.setTriggerMobileThinScrollBottomModal,Bue=e=>e.triggerMobileThinGuidanceModal,zue=e=>e.setTriggerMobileThinGuidanceModal,mb=()=>{var mt,ar,_r,Dn,We,sr,da,fa,ga,pa;const e=X(wue),t=X(jue),r=E(Tue),n=E(Oue),o=E(Iue),i=E(Eue),a=E(Pue),s=E($ue),c=E(kue),u=E(Nue),f=t.thinGuidanceModalMaxIterations,d=E(Mue),g=A(D(e.mobileThinHelpModalText))||"",p=E(Aue),m=E(Due),h=E(Rue),y=E(Lue),v=E(_ue),x=E(Fue),S=E(Bue),I=E(zue),k=A(D(e.mobileThinProcessCompleteMessage))||"",T=A(D(e.mobileGuidanceModalRight1Header))||"",P=A(D(e.mobileGuidanceModalRight1Text))||"",N=A(D(e.mobileGuidanceModalRight2Header))||"",j=A(D(e.mobileGuidanceModalRight2Text))||"",F=A(D(e.mobileGuidanceModalLeft1Header))||"",V=A(D(e.mobileGuidanceModalLeft1Text))||"",Z=A(D(e.mobileGuidanceModalLeft2Header))||"",Y=A(D(e.mobileGuidanceModalLeft2Text))||"",z=A(D(e.mobileThinConditionsOfInstruction))||"",J=A(D(e.screenOrientationText))||"",K=A(D(e.mobileThinSubmitButtonText))||"",M=A(D(e.expandViewMessage))||"",R=A(D(e.thinningPreventNavModalHead))||"",_=A(D(e.thinningPreventNavModalText))||"",B=A(D(e.mobileThinScrollBottomModalHead))||"",q=A(D(e.mobileThinScrollBottomModalText))||"";let[H,Q]=Ee("selectedNegItems",JSON.parse(localStorage.getItem("selectedNegItems"))),[U,G]=Ee("selectedPosItems",JSON.parse(localStorage.getItem("selectedPosItems"))),[$,w]=Ee("thinDisplayControllerArray",JSON.parse(localStorage.getItem("thinDisplayControllerArray")));const[b,W]=O.useState(!1);let L=O.useRef({id:"",statement:"",color:"",direction:""}),re=O.useRef(null),ie=O.useRef({header:"",text:""}),ge=ho();const se=O.useRef(null);O.useEffect(()=>(se.current=Date.now(),(async()=>{await n("thin"),localStorage.setItem("currentPage","thin"),await o(20)})(),()=>{Sr(se.current,"thinningPage","thinningPage")}),[n,o]);const ae=Cue($e=>{L.current={id:$e.target.dataset.id,statement:$e.target.dataset.statement,color:$e.target.dataset.color,direction:$e.target.dataset.direction},i(!0)},{threshold:1e3});let ye=150;const me=O.useCallback($h($e=>{const Be=$e.target,rt=Be.scrollTop,ct=Be.scrollHeight,Ge=Be.clientHeight;ct-(rt+Ge)<=ye&&W(!0)},100),[ye]);let ue,Se=0;if(((mt=$[0])==null?void 0:mt.side)==="right"&&(((ar=$[0])==null?void 0:ar.iteration)===1&&(ie.current={header:T,text:P}),((_r=$[0])==null?void 0:_r.iteration)>1&&(ie.current={header:N,text:j}),ue=[...U]),((Dn=$[0])==null?void 0:Dn.side)==="left"&&(((We=$[0])==null?void 0:We.iteration)===1&&(ie.current={header:F,text:V}),((sr=$[0])==null?void 0:sr.iteration)>1&&(ie.current={header:Z,text:Y}),ue=[...H]),$.length===0){ue=[];let $e=JSON.parse(localStorage.getItem("newCols")),Be=JSON.parse(localStorage.getItem("finalSortColData")),rt=oj($e,Be),Ge=JSON.parse(localStorage.getItem("finalSortColData")).reverse(),Gt=[];Ge.forEach(nn=>{let Rn=rt.vCols[nn[0]];Gt.push(...Rn)}),Gt.forEach(nn=>{nn.selected=!1}),localStorage.setItem("m_ThinDisplayStatements",JSON.stringify({display:!1})),localStorage.setItem("m_ThinningFinished","true"),localStorage.setItem("m_FinalThinCols",JSON.stringify(Gt)),localStorage.setItem("columnStatements",JSON.stringify(rt))}const he=JSON.parse(localStorage.getItem("m_ViewSizeObject")).thin,Ce=JSON.parse(localStorage.getItem("m_FontSizeObject")).thin,Ve=()=>{c(!0)},ze=$e=>{var rt,ct;let Be=$e.target.getAttribute("data-targetcol");ue.forEach(Ge=>{Ge.id===$e.target.dataset.id&&(Ge.targetcol=Be,Ge.selected=!Ge.selected),Ge.selected===!0?Ge.color="lightyellow":Ge.color=Vg(+Ge.psValue)}),((rt=$[0])==null?void 0:rt.side)==="right"&&G([...ue]),((ct=$[0])==null?void 0:ct.side)==="left"&&Q([...ue])},be=$e=>{var ct,Ge;let Be=ue.findIndex(Gt=>Gt.id===$e.target.dataset.id);if(Be===0)return;const rt=ue[Be];ue[Be]=ue[Be-1],ue[Be-1]=rt,((ct=$[0])==null?void 0:ct.side)==="right"&&G([...ue]),((Ge=$[0])==null?void 0:Ge.side)==="left"&&Q([...ue])},Oe=$e=>{var ct,Ge;let Be=ue.findIndex(Gt=>Gt.id===$e.target.dataset.id);if(Be>=ue.length-1)return;const rt=ue[Be];ue[Be]=ue[Be+1],ue[Be+1]=rt,((ct=$[0])==null?void 0:ct.side)==="right"&&G([...ue]),((Ge=$[0])==null?void 0:Ge.side)==="left"&&Q([...ue])},st=()=>{var rt,ct,Ge,Gt;const $e=re.current;let Be;if($e&&(Be=$e.scrollHeight>$e.clientHeight),Be===!0&&b===!1){d(!0);return}if(W(!1),((rt=$[0])==null?void 0:rt.side)==="right"){let nn=U.filter(on=>on.selected===!0),Rn=U.filter(on=>on.selected!==!0),Zo=JSON.parse(localStorage.getItem("newCols"));const Xo=bue(nn,Zo);localStorage.setItem("newCols",JSON.stringify(Xo)),$.shift(),w([...$]),G([...Rn]),((ct=$[0])==null?void 0:ct.iteration)<=f&&u(!0);return}if(((Ge=$[0])==null?void 0:Ge.side)==="left"){let nn=H.filter(on=>on.selected===!0),Rn=H.filter(on=>on.selected!==!0),Zo=JSON.parse(localStorage.getItem("newCols"));const Xo=Sue(nn,Zo);localStorage.setItem("newCols",JSON.stringify(Xo)),$.shift(),w([...$]),Q([...Rn]),((Gt=$[0])==null?void 0:Gt.iteration)<=f&&u(!0);return}},pt=()=>{ue.forEach(($e,Be)=>{var rt,ct;if($e.selected===!0){let Ge=ue.splice(Be,1);ue.unshift(Ge[0])}((rt=$[0])==null?void 0:rt.side)==="right"&&G([...ue]),((ct=$[0])==null?void 0:ct.side)==="left"&&Q([...ue])}),i(!1)};if(ge==="landscape-primary")return l.jsx(Xue,{children:l.jsx("h1",{children:J})});let Fe=(ue||[]).map($e=>{var Be,rt;return $e.selected===!0&&Se++,l.jsxs(Jue,{children:[l.jsx(Kue,{"data-id":$e.id,"data-statement":$e.statement,"data-color":$e.color,"data-direction":"down",onClick:Oe,children:l.jsx(kj,{style:{pointerEvents:"none",opacity:"0.75"}})}),l.jsx(que,{onClick:ze,id:$e.id,color:$e.color,fontSize:a===+Ce?a:Ce,"data-targetcol":(Be=$[0])==null?void 0:Be.targetCol,"data-max":(rt=$[0])==null?void 0:rt.maxNum,"data-selected":$e.selected,"data-id":$e.id,"data-direction":"allTop",children:$e.statement},ee()),l.jsx(Gue,{"data-id":$e.id,...ae,"data-statement":$e.statement,"data-color":$e.color,"data-direction":"up",onClick:be,children:l.jsx(Nj,{style:{pointerEvents:"none",opacity:"0.75"}})})]},ee())}),yt=JSON.parse(localStorage.getItem("m_ThinDisplayStatements"));return l.jsxs(Vue,{children:[l.jsx(lue,{cardId:L,onClick:pt}),l.jsx(fr,{head:ie.current.header,text:ie.current.text,trigger:S,setTrigger:I,showArrow:!1,height:"250px"}),l.jsx(fr,{head:ie.current.header,text:g,trigger:p,setTrigger:m,showArrow:!0,height:"450px"}),l.jsx(fr,{head:B,text:q,trigger:v,setTrigger:x,showArrow:!1,height:"150px"}),l.jsx(fr,{head:R,text:_,trigger:h,setTrigger:y,showArrow:!1,height:"150px"}),l.jsxs(Uue,{background:t.headerBarColor,children:[z,l.jsx(Yue,{onClick:Ve,children:l.jsx(Xs,{})})]}),l.jsxs(Que,{children:[l.jsx(nue,{selected:Se,required:(da=$[0])==null?void 0:da.maxNum}),r&&l.jsx(Wue,{onClick:st,disabled:Se!==((fa=$[0])==null?void 0:fa.maxNum),fontColor:Se===((ga=$[0])==null?void 0:ga.maxNum)?"white":"#3645f",color:Se===((pa=$[0])==null?void 0:pa.maxNum)?"#337ab7":"#d3d3d3",children:K})]}),yt.display?l.jsxs(l.Fragment,{children:[l.jsx(Hue,{onScroll:me,ref:re,viewSize:s===+he?s:he,children:Fe}),l.jsx(ede,{children:M})]}):l.jsx(Zue,{children:l.jsx("div",{children:k})})]})},Hue=C.div`
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
`,Uue=C.div`
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
`,Vue=C.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  /* gap: 5px; */
  align-items: center;
  width: 100vw;
  height: 100vh;
`,Wue=C.button`
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
`,que=C.div`
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
`,Gue=C.button`
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
`,Kue=C.button`
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
`,Jue=C.div`
  display: flex;
  align-items: stretch;
  min-height: 10vh;
  flex-direction: row;
`,Que=C.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 300px;
  height: 50px;
  gap: 55px;
  user-select: none;
`,Yue=C.div`
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
`,Zue=C.div`
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
`,Xue=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: ${e=>e.theme.mobileText};
`,ede=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
`,tde=e=>O.createElement("svg",{width:143,height:143,viewBox:"0 0 143 143",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},O.createElement("path",{d:"M104.535 38.0672C113.35 46.8814 118.301 58.8361 118.301 71.3013C118.301 83.7664 113.35 95.7211 104.535 104.535",stroke:"black",strokeWidth:6}),O.createElement("path",{d:"M93.7758 27.6163L99.5194 47.5916L113.947 32.6298L93.7758 27.6163Z",fill:"black"}),O.createElement("path",{d:"M35.2972 101.512C27.2848 91.9633 23.3937 79.6226 24.4802 67.2049C25.5666 54.7871 31.5414 43.3096 41.0903 35.2971",stroke:"black",strokeWidth:6}),O.createElement("path",{d:"M45.1049 112.861L41.1241 92.4613L25.4477 106.109L45.1049 112.861Z",fill:"black"})),kh=e=>{const t=O.useMemo(()=>{const n=[l.jsx(Fi,{},ee()),l.jsx(S3,{},ee()),l.jsx(pr,{},ee()),l.jsx(hn,{},ee()),l.jsx(Tn,{},ee()),l.jsx($r,{},ee()),l.jsx(On,{},ee()),l.jsx(vn,{},ee()),l.jsx(Nr,{},ee()),l.jsx(C3,{},ee()),l.jsx(Vo,{},ee())],o=[l.jsx(Fi,{},ee()),l.jsx(pr,{},ee()),l.jsx(hn,{},ee()),l.jsx(Tn,{},ee()),l.jsx($r,{},ee()),l.jsx(On,{},ee()),l.jsx(vn,{},ee()),l.jsx(Nr,{},ee()),l.jsx(Vo,{},ee())],i=[l.jsx(pr,{},ee()),l.jsx(hn,{},ee()),l.jsx(Tn,{},ee()),l.jsx($r,{},ee()),l.jsx(On,{},ee()),l.jsx(vn,{},ee()),l.jsx(Nr,{},ee())],a=[l.jsx(hn,{},ee()),l.jsx(Tn,{},ee()),l.jsx($r,{},ee()),l.jsx(On,{},ee()),l.jsx(vn,{},ee())];return{emoji5Array:n,emoji4Array:o,emoji3Array:i,emoji2Array:a}},[]);return{displayArray:O.useMemo(()=>{var o;const n=(o=e==null?void 0:e.emojiArrayType)==null?void 0:o[0];return n?t[n]||[]:[]},[e,t])}},rde=e=>e.langObj,nde=e=>e.mapObj,ode=e=>e.triggerMobileSortSwapModal,ide=e=>e.setTriggerMobileSortSwapModal,ade=e=>{var j,F,V,Z,Y,z,J,K,M,R,_,B,q,H;const t=X(rde),r=X(nde),n=E(ode),o=E(ide),i=[...r.qSortHeaderNumbers],{displayArray:a}=kh(r),[s,c]=O.useState(!1),u=A(D(t.mobileSortSwapModalHead))||"",f=A(D(t.mobileSortSwapModalConfirmButton))||"",d=A(D(t.mobileModalButtonCancel))||"",g=A(D(t.mobileSortSwapModalSuccessMessage))||"";let p=[...e.targetArray];if(p.length===0||p===void 0)return;let m,h=r.useColLabelNums[0];(h!==void 0||h!==null)&&(h===!1||h==="false"?m=!1:m=!0);let y,v=r.useColLabelText[0];(v!==void 0||v!==null)&&(v===!1||v==="false"?y=!1:y=!0);let x,S=r.useColLabelEmoji[0];(S!==void 0||S!==null)&&(S===!1||S==="false"?x=!1:x=!0);let I=null,k=null;if(p.length===2){p.sort((W,L)=>L.groupNumber-W.groupNumber);let Q=p[0],U=p[1],G=Q==null?void 0:Q.groupNumber,$=U==null?void 0:U.groupNumber;G=G.replace("+",""),$=$.replace("+","");let w=i.indexOf(G),b=i.indexOf($);I=a[w],k=a[b]}(p==null?void 0:p.length)>0&&+((j=p==null?void 0:p[0])==null?void 0:j.index)>+((F=p==null?void 0:p[1])==null?void 0:F.index)&&(p=p.reverse());const T=()=>{o(!1),e.clearSelected(),c(!1)},P=()=>{e.handleStatementSwap(p[0].index,p[1].index),c(!0),setTimeout(()=>{T()},2e3)},N={content:{display:"flex",justifySelf:"center",flexDirection:"column",alignItems:"center",backgroundColor:"#ffffff",borderRadius:"10px",padding:"0px",width:"96vw",height:"fit-content",maxHeight:"80vh",paddingBottom:"10px",WebkitOverflowScrolling:"touch"}};return l.jsx(dde,{children:l.jsxs(Ph,{id:"sortSwapModal",isOpen:n,onClose:T,style:N,overlayClassName:"Overlay",ariaHideApp:!1,children:[l.jsx(ude,{children:l.jsx(cde,{onClick:T,children:"X"})}),l.jsx(gde,{children:s?l.jsx(fde,{children:g}):l.jsxs(l.Fragment,{children:[l.jsxs(sde,{children:[u,l.jsx("hr",{})]}),l.jsxs(vb,{color:(V=p[0])==null?void 0:V.color,fontSize:(Z=p[0])==null?void 0:Z.fontSize,children:[l.jsx(xb,{children:l.jsxs(bb,{children:[x&&l.jsx(Ll,{children:I}),m&&l.jsx(Sb,{children:(Y=p[0])==null?void 0:Y.groupNumber}),y&&l.jsx(Cb,{children:(z=p[0])==null?void 0:z.header}),x&&l.jsx(Ll,{children:I})]})}),l.jsx(yb,{color:(J=p[0])==null?void 0:J.color,children:(K=p[0])==null?void 0:K.statement})]}),l.jsx(tde,{style:{display:"flex",justifySelf:"center",height:"50px"}}),l.jsxs(vb,{id:"StatementBox",color:(M=p[1])==null?void 0:M.color,fontSize:(R=p[1])==null?void 0:R.fontSize,children:[l.jsx(xb,{id:"NumberContainer",children:l.jsxs(bb,{id:"ContentWrapper",children:[x&&l.jsx(Ll,{children:k}),m&&l.jsx(Sb,{children:(_=p[1])==null?void 0:_.groupNumber}),y&&l.jsx(Cb,{children:(B=p[1])==null?void 0:B.header}),x&&l.jsx(Ll,{children:k})]})}),l.jsx(yb,{id:"CardDiv",color:(q=p[1])==null?void 0:q.color,children:(H=p[1])==null?void 0:H.statement})]}),l.jsxs(lde,{children:[l.jsx(hb,{color:"#FBD5D5",onClick:T,children:d}),l.jsx(hb,{color:"#BCF0DA",onClick:P,children:f})]})]})})]})})},sde=C.div`
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
`,lde=C.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  margin-top: 30px;
  border-radius: 3px;
`,hb=C.div`
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
`,vb=C.div`
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
`,xb=C.div`
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
`,yb=C.div`
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
`,cde=C.button`
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
`,ude=C.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 0px;
`,dde=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`,bb=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  gap: 10px;
  padding-right: 2px;
  padding-left: 2px;
  /* height: 100%; */
`,Ll=C.div`
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
`,Sb=C.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
`,Cb=C.div`
  display: flex;
  padding-top: 2px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: clamp(1rem, 1vw, 1.5rem);
  text-align: center;
  line-height: 0.8rem;
`,fde=C.div`
  display: flex;
  justify-content: center;
  text-align: center;
  font-size: clamp(1rem, 6vw, 10rem);
  /* font-size: 6vw; */
  text-align: center;
  line-height: 1.4rem;
  margin-top: 30px;
  margin-bottom: 30px;
`,gde=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 60vh;
`,pde=({background:e,conditionsOfInstruction:t,onHelpClick:r})=>l.jsxs(mde,{background:e,children:[t,l.jsx(hde,{onClick:r,children:l.jsx(Xs,{})})]}),mde=C.div`
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
`,hde=C.div`
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
`,vde=({item:e,fontSize:t,onCardSelected:r,onClickUp:n,onClickDown:o})=>l.jsxs(xde,{children:[l.jsx(Sde,{id:e.id,onClick:o,color:e.characteristics.color,children:l.jsx(kj,{style:{pointerEvents:"none",opacity:"0.95"}})}),l.jsx(yde,{onClick:r,id:e.id,fontSize:t,color:e.selected?"lightyellow":e.characteristics.color,children:l.jsx("div",{"data-index":e.externalIndex,"data-id":e.id,"data-color":e.characteristics.color,"data-group_num":e.characteristics.value,"data-statement_text":e.statement,"data-font_size":t,"data-header":e.characteristics.header,children:e.statement})},ee()),l.jsx(bde,{id:e.id,onClick:n,color:e.characteristics.color,children:l.jsx(Nj,{style:{pointerEvents:"none",opacity:"0.95"}})})]},ee()),xde=C.div`
  display: flex;
  align-items: stretch;
  min-height: 10vh;
  flex-direction: row;
  user-select: none;
`,yde=C.div`
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
`,bde=C.button`
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
`,Sde=C.button`
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
`,Cde=({items:e,header:t,color:r,mobileSortFontSize:n,persistedMobileSortFontSize:o,onCardSelected:i,onClickUp:a,onClickDown:s})=>{const c=e.map(u=>l.jsx(vde,{item:u,fontSize:n===+o?n:o,onCardSelected:i,onClickUp:a,onClickDown:s},ee()));return l.jsxs(wde,{color:r,children:[l.jsx(wb,{margins:{top:10,bottom:0},children:t}),c,l.jsx(wb,{margins:{top:0,bottom:10},children:t})]})},wde=C.div`
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
`,wb=C.div`
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
`,jde=({partitionArray:e,characteristicsArray:t,mobileColHeaders:r,sortArray1:n,mobileSortFontSize:o,mobileSortViewSize:i,persistedMobileSortFontSize:a,persistedMobileSortViewSize:s,onCardSelected:c,onClickUp:u,onClickDown:f,onScroll:d})=>{let g=[],p=-1;return(e||[]).map((m,h)=>{var v;const y=(m||[]).map(x=>(p++,{...x,externalIndex:p,characteristics:t[p]}));g.push(l.jsx(Cde,{items:y,header:r[h],color:(v=t[p])==null?void 0:v.color,mobileSortFontSize:o,persistedMobileSortFontSize:a,onCardSelected:c,onClickUp:u,onClickDown:f},ee()))}),l.jsx(Tde,{onScroll:d,viewSize:i===+s?i:s,children:g})},Tde=C.div`
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
`,Ode=({text:e})=>l.jsx(Ide,{children:l.jsx("h1",{children:e})}),Ide=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`,Ede=({text:e})=>l.jsx(Pde,{children:e}),Pde=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
`,$de=({color:e,shouldDisplayEmojis:t,shouldDisplayNums:r,shouldDisplayText:n,emoji:o,value:i,textHeader:a})=>(console.log(a),l.jsx(kde,{color:e,children:l.jsxs(Nde,{children:[t&&l.jsx(jb,{children:o}),l.jsxs(Dde,{children:[r&&l.jsx(Mde,{children:i}),n&&l.jsx(Ade,{children:a})]}),t&&l.jsx(jb,{children:o})]})})),kde=C.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-right: 4px;
  padding-left: 4px;
  background-color: ${e=>e.color};
  width: 100%;
`,Nde=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-right: 2px;
  padding-left: 2px;
`,Mde=C.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
`,jb=C.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Ade=C.div`
  display: flex;
  padding-top: 2px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: 4vw;
  text-align: center;
  line-height: 0.8rem;
`,Dde=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`,Rde=e=>e.setTriggerMobileSortSwapModal,Lde=(e,t)=>{const r=E(Rde),n=O.useRef([]),[o,i]=Ee("m_SortArray1",[...JSON.parse(localStorage.getItem("m_FinalThinCols"))]),a=O.useMemo(()=>{const h=[...e.qSortPattern].reverse(),y=[];let v=0,x=[...o];for(const S of h)y.push(x.slice(v,v+S)),v+=S;return y},[e,o]),s=O.useMemo(()=>{let h=[...e.qSortHeaderNumbers].reverse();return h=h.map(y=>y>0?`+${y}`:y),h},[e]),c=O.useMemo(()=>{const h=[...e.columnHeadersColorsArray].reverse(),y=[...e.colTextLabelsArray].reverse(),v=[...e.qSortPattern].reverse(),x=[];return v.forEach((S,I)=>{const k={};for(let T=0;T<S;T++)k.color=h[I],k.value=s[I],k.header=y[I],x.push({...k})}),localStorage.setItem("m_SortCharacteristicsArray",JSON.stringify(x)),x},[e,s]),u=O.useMemo(()=>{var T,P,N,j,F,V;const h=[...e.qSortHeaderNumbers],y=[...e.columnHeadersColorsArray],v=[...e.colTextLabelsArray],x=((T=e.useColLabelNums)==null?void 0:T[0])!==!1&&((P=e.useColLabelNums)==null?void 0:P[0])!=="false",S=((N=e.useColLabelText)==null?void 0:N[0])!==!1&&((j=e.useColLabelText)==null?void 0:j[0])!=="false",I=((F=e.useColLabelEmoji)==null?void 0:F[0])!==!1&&((V=e.useColLabelEmoji)==null?void 0:V[0])!=="false";return h.map((Z,Y)=>l.jsx($de,{color:y[Y],shouldDisplayEmojis:I,shouldDisplayNums:x,shouldDisplayText:S,emoji:t[Y],value:Z,textHeader:v[Y]},ee())).reverse()},[e,t]);return{sortArray1:o,setSortArray1:i,targetArray:n,partitionArray:a,characteristicsArray:c,mobileColHeaders:u,handleCardSelected:h=>{var y;try{if(n.length===2||h.target.dataset.id===void 0)return;if(o.forEach(x=>{x.id===h.target.dataset.id&&(x.selected=!x.selected)}),i([...o]),((y=n.current[0])==null?void 0:y.id)===h.target.dataset.id){n.current=[];return}let v={id:h.target.dataset.id,statement:h.target.dataset.statement_text,color:h.target.dataset.color,index:h.target.dataset.index,groupNumber:h.target.dataset.group_num,fontSize:h.target.dataset.font_size,header:h.target.dataset.header};n.current=[...n.current,v],n.current.length>=2&&r(!0)}catch(v){console.error(v)}},handleStatementSwap:(h,y)=>{[o[h],o[y]]=[o[y],o[h]],i([...o])},clearSelected:()=>{o.forEach(h=>{h.selected=!1}),i([...o]),n.current=[]},handleOnClickUp:h=>{let y=o.findIndex(x=>x.id===h.target.id);if(y===0)return;const v=o[y];o[y]=o[y-1],o[y-1]=v,i([...o])},handleOnClickDown:h=>{let y=o.findIndex(x=>x.id===h.target.id);if(y>=o.length-1)return;const v=o[y];o[y]=o[y+1],o[y+1]=v,i([...o])}}},_de=e=>O.useMemo(()=>({conditionsOfInstruction:A(D(e.mobileSortConditionsOfInstruction))||"",screenOrientationText:A(D(e.screenOrientationText))||"",expandViewMessage:A(D(e.expandViewMessage))||"",helpModalHead:A(D(e.mobileSortHelpModalHead))||"",helpModalText:A(D(e.mobileSortHelpModalText))||"",scrollBottomModalHead:A(D(e.mobileSortScrollBottomModalHead))||"",scrollBottomModalText:A(D(e.mobileSortScrollBottomModalText))||""}),[e]),Fde=e=>e.setCurrentPage,Bde=e=>e.setProgressScore,zde=e=>e.mapObj,Hde=e=>e.configObj,Ude=e=>e.mobileSortFontSize,Vde=e=>e.mobileSortViewSize,Wde=e=>e.langObj,qde=e=>e.setTriggerMobileSortHelpModal,Gde=e=>e.setHasScrolledToBottomSort,Kde=e=>e.triggerMobileSortHelpModal,Jde=e=>e.setTriggerMobileSortHelpModal,Qde=e=>e.triggerMobileSortScrollBottomModal,Yde=e=>e.setTriggerMobileSortScrollBottomModal,Tb=()=>{const e=E(Fde),t=E(Bde),r=X(zde),n=X(Wde),o=X(Hde),i=E(Ude),a=E(Vde),s=E(qde),c=E(Gde),u=E(Kde),f=E(Jde),d=E(Qde),g=E(Yde),p=ho(),{displayArray:m}=kh(r),h=_de(n),{sortArray1:y,targetArray:v,partitionArray:x,characteristicsArray:S,mobileColHeaders:I,handleCardSelected:k,handleStatementSwap:T,clearSelected:P,handleOnClickUp:N,handleOnClickDown:j}=Lde(r,m),F=JSON.parse(localStorage.getItem("m_FontSizeObject")).sort,V=JSON.parse(localStorage.getItem("m_ViewSizeObject")).sort,Z=O.useRef(null);O.useEffect(()=>(Z.current=Date.now(),(async()=>{await e("sort"),localStorage.setItem("currentPage","sort"),await t(20)})(),()=>{Sr(Z.current,"sortPage","sortPage")}),[e,t]);const Y=()=>{s(!0)},z=O.useCallback($h(J=>{const K=J.target,M=K.scrollTop,R=K.scrollHeight,_=K.clientHeight;R-(M+_)<=100&&(console.log("at bottom"),c(!0))},100),[c]);return p==="landscape-primary"?l.jsx(Ode,{text:h.screenOrientationText}):l.jsxs(Zde,{children:[l.jsx(pde,{background:o.headerBarColor,conditionsOfInstruction:h.conditionsOfInstruction,onHelpClick:Y}),l.jsx(fr,{head:h.helpModalHead,text:h.helpModalText,trigger:u,setTrigger:f,showArrow:!0,height:"450px"}),l.jsx(fr,{head:h.scrollBottomModalHead,text:h.scrollBottomModalText,trigger:d,setTrigger:g,showArrow:!1,height:"150px"}),l.jsx(ade,{clearSelected:P,targetArray:v.current,handleStatementSwap:T}),l.jsx(jde,{partitionArray:x,characteristicsArray:S,mobileColHeaders:I,sortArray1:y,mobileSortFontSize:i,mobileSortViewSize:a,persistedMobileSortFontSize:F,persistedMobileSortViewSize:V,onCardSelected:k,onClickUp:N,onClickDown:j,onScroll:z}),l.jsx(Ede,{text:h.expandViewMessage})]})},Zde=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  user-select: none;
  background-color: #f3f4f6;
`,Xde=e=>{const t={async setItem(p,m){return await null,localStorage.setItem(p,m)}};let r=`itemNum${e.opts.itemNum}`;const n=e.check,o=A(D(e.opts.label))||"",i=A(D(e.opts.placeholder))||"",a=A(D(e.opts.note))||"";let s=!0;(a.length<1||a==="")&&(s=!1);const[c,u]=Ee(r,""),[f,d]=O.useState({bgColor:"whitesmoke",border:"none"}),g=p=>{const m=JSON.parse(localStorage.getItem("resultsSurvey"));let h=p.target.value,y=h.length;if((e.opts.restricted==="true"||e.opts.restricted===!0)&&(h=h.replace(/\D/g,"")),(e.opts.limited==="true"||e.opts.limited===!0)&&h.length>+e.opts.limitLength&&(h=h.substring(0,+e.opts.limitLength)),u(h),y>0){let v=vo(h);m[`itemNum${e.opts.itemNum}`]=v}else e.opts.required===!0||e.opts.required==="true"?m[`itemNum${e.opts.itemNum}`]="no-*?*-response":m[`itemNum${e.opts.itemNum}`]="no response";t.setItem("resultsSurvey",JSON.stringify(m))};return O.useEffect(()=>{let p=!1;c.length>0&&c!==""&&(p=!0),n===!0&&p<1&&e.opts.required===!0?d({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):d({bgColor:"whitesmoke",border:"none"})},[n,c,e]),s?l.jsxs(Ob,{bgColor:f.bgColor,border:f.border,children:[l.jsx(Ib,{children:l.jsx("div",{children:o})}),l.jsx(efe,{id:"noteText",children:l.jsx("div",{children:a})}),l.jsx(Eb,{type:"text",value:c,placeholder:i,onChange:g})]}):l.jsxs(Ob,{bgColor:f.bgColor,border:f.border,children:[l.jsx(Ib,{children:l.jsx("div",{children:o})}),l.jsx(Eb,{type:"text",value:c,placeholder:i,onChange:g})]})},Ob=C.div`
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
`,Ib=C.div`
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
`,efe=C.div`
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
`,Eb=C.input`
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
`,tfe=e=>{const t={async setItem(m,h){return await null,localStorage.setItem(m,h)}},r=`itemNum${e.opts.itemNum}`,n=e.check,o=A(D(e.opts.label))||"",i=A(D(e.opts.note))||"",a=A(D(e.opts.placeholder))||"";let s=!0;(i.length<1||i==="")&&(s=!1);const[c,u]=Ee(r,""),[f,d]=O.useState({bgColor:"whitesmoke",border:"none"}),g=m=>{const h=JSON.parse(localStorage.getItem("resultsSurvey"));let y=m.target.value;if(u(y),y.length>0){let v=vo(y);h[`itemNum${e.opts.itemNum}`]=v}else e.opts.required===!0||e.opts.required==="true"?h[`itemNum${e.opts.itemNum}`]="no-*?*-response":h[`itemNum${e.opts.itemNum}`]="no response";t.setItem("resultsSurvey",JSON.stringify(h))};let p=!1;return c.length>0&&c!==""&&(p=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&n===!0&&p<1?d({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):d({bgColor:"whitesmoke",border:"none"})},[n,c,p,e.opts.required]),s?l.jsxs(Pb,{bgColor:f.bgColor,border:f.border,children:[l.jsx($b,{children:l.jsx("div",{children:o})}),l.jsx(rfe,{children:i}),l.jsx(kb,{value:c,placeholder:a,onChange:g})]}):l.jsxs(Pb,{bgColor:f.bgColor,border:f.border,children:[l.jsx($b,{children:l.jsx("div",{children:o})}),l.jsx(kb,{value:c,placeholder:a,onChange:g,height:"350"})]})},Pb=C.div`
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
`,$b=C.div`
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
`,rfe=C.div`
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
`,kb=C.textarea`
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
`,nfe=e=>{const t=y=>{let v=y.split(";;;");return v=v.filter(function(x){return x}),v=v.map(x=>x.trim()),v};let r=e.opts.id;const n=e.check,o=A(D(e.opts.label))||"",i=A(D(e.opts.note))||"",a=t(e.opts.options);let s=!0;(i.length<1||i==="")&&(s=!1);let[c,u]=Ee(r,"");const[f,d]=O.useState({bgColor:"whitesmoke",border:"none"}),g=({label:y,value:v,checked:x,setter:S})=>l.jsx("label",{children:l.jsxs(ife,{children:[l.jsx("input",{type:"radio",checked:x===v,onChange:()=>S(v),value:v}),l.jsx(ofe,{children:l.jsx("div",{children:y})})]})}),p=y=>{const v=JSON.parse(localStorage.getItem("resultsSurvey"));v[`itemNum${e.opts.itemNum}`]=+y.target.value+1,localStorage.setItem("resultsSurvey",JSON.stringify(v))};let m=!1;c.length===0&&(m=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&n===!0&&m?d({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):d({bgColor:"whitesmoke",border:"none"})},[n,m,e.opts.required]);const h=()=>{const y=a.map((v,x)=>l.jsx("div",{children:l.jsx(g,{value:x,checked:c,label:v,setter:u})},ee()));return l.jsx("div",{children:y})};return s?l.jsxs(Nb,{bgColor:f.bgColor,border:f.border,children:[l.jsx(Mb,{children:l.jsx("div",{children:o})}),l.jsx(afe,{children:l.jsx("div",{children:i})}),l.jsx(Ab,{onChange:y=>p(y),children:l.jsx(h,{})})]}):l.jsxs(Nb,{bgColor:f.bgColor,border:f.border,children:[l.jsx(Mb,{children:l.jsx("div",{children:o})}),l.jsx(Ab,{onChange:y=>p(y),children:l.jsx(h,{})})]})},Nb=C.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Mb=C.div`
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
`,Ab=C.div`
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
`,ofe=C.div`
  padding-left: 5px;
`,ife=C.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  height: 15px;
`,afe=C.div`
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
`,sfe=e=>{const t=m=>{let h=m.split(";;;");return h=h.filter(function(v){return v}),h.map(v=>{v.replace(/\s/g,"");const x={};return x.label=A(D(v)),x.value=v,x})},r=e.check;let n=e.opts.id;const o=A(D(e.opts.label))||"";let i=e.opts.options.split(";;;")||[];i=i.map(m=>A(D(m.trim())));const a=A(D(e.opts.note))||"";let s=!0;(a.length<1||a==="")&&(s=!1);let[c,u]=Ee(n,[]);const[f,d]=O.useState({bgColor:"whitesmoke",border:"none"}),g=m=>{const h=JSON.parse(localStorage.getItem("resultsSurvey"))||{};u(m);let y=Bt(i);if(m.length!==0){let v="";for(let x=0;x<m.length;x++){let S=m[x].value,I=y.indexOf(S);x===0?v+=I+1:v+=","+(I+1)}h[`itemNum${e.opts.itemNum}`]=v}else e.opts.required===!0||e.opts.required==="true"?h[`itemNum${e.opts.itemNum}`]="no-*?*-response":h[`itemNum${e.opts.itemNum}`]="no response";localStorage.setItem("resultsSurvey",JSON.stringify(h))};let p=!1;return c.length>0&&(p=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&r===!0&&p===!1?d({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):d({bgColor:"whitesmoke",border:"none"})},[r,p,e.opts.required]),s?l.jsxs(Db,{bgColor:f.bgColor,border:f.border,children:[l.jsx(Rb,{children:l.jsx("div",{children:o})}),l.jsx(lfe,{id:"noteText",children:l.jsx("div",{children:a})}),l.jsx(ru,{className:"multiselect",options:t(e.opts.options),labelledBy:"Select",onChange:g,value:c})]}):l.jsxs(Db,{bgColor:f.bgColor,border:f.border,children:[l.jsx(Rb,{children:l.jsx("div",{children:o})}),l.jsx(ru,{className:"multiselect",options:t(e.opts.options),labelledBy:"Select",onChange:g,value:c})]})},Db=C.div`
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
`,Rb=C.div`
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
`,lfe=C.div`
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
`,cfe=e=>{const t=x=>{let S=(x||"").split(";;;");return S=S.filter(function(I){return I}),(S||[]).map(I=>!1),S},r=e.check,n=t(e.opts.options),o=`question${e.opts.itemNum}`;let i=e.opts.id;const a=A(D(e.opts.label))||"",s=A(D(e.opts.note))||"";let c=!0;(s.length<1||s==="")&&(c=!1);let[u,f]=Ee(i,new Array(n.length).fill(!1));const[d,g]=O.useState({bgColor:"whitesmoke",border:"none"}),p=x=>{const S=JSON.parse(localStorage.getItem("resultsSurvey"));x=parseInt(x,10);const I=u.map((T,P)=>P===x?!T:T);f(I);let k=I.reduce((T="",P,N)=>P===!0?T+(N+1).toString()+",":T,"");k.charAt(k.length-1)===","&&(k=k.substr(0,k.length-1)),S[`itemNum${e.opts.itemNum}`]=k,k===""&&(e.opts.required===!0||e.opts.required==="true"?S[`itemNum${e.opts.itemNum}`]="no-*?*-response":S[`itemNum${e.opts.itemNum}`]="no response"),localStorage.setItem("resultsSurvey",JSON.stringify(S))};let m=!1,h=Bt([...u]);return(ir(h)[!0]||0)===0&&(m=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&r===!0&&m?g({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):g({bgColor:"whitesmoke",border:"none"})},[r,m,e.opts.required]),c?l.jsxs(Lb,{bgColor:d.bgColor,border:d.border,children:[l.jsx(_b,{children:l.jsx("div",{children:a})}),l.jsx(ufe,{id:"noteText",children:l.jsx("div",{children:s})}),l.jsx(Fb,{children:n.map((x,S)=>l.jsxs("div",{children:[l.jsx("input",{id:`${x}-${S}`,type:"checkbox",value:x,name:o,checked:u[S],onChange:()=>p(S)}),l.jsx("label",{htmlFor:`${x}-${S}`,children:x})]},ee()))})]}):l.jsxs(Lb,{bgColor:d.bgColor,border:d.border,children:[l.jsx(_b,{children:l.jsx("div",{children:a})}),l.jsx(Fb,{children:n.map((x,S)=>l.jsxs("div",{children:[l.jsx("input",{id:`${x}-${S}`,type:"checkbox",value:x,name:o,checked:u[S],onChange:()=>p(S)}),l.jsx("label",{htmlFor:`${x}-${S}`,children:x})]},ee()))})]})},Lb=C.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,_b=C.div`
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
`,Fb=C.div`
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
`,ufe=C.div`
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
`,dfe=e=>{const t=k=>{let T=k.split(";;;");return T=T.filter(function(P){return P}),T.length===0&&(T=["",""]),T},r=t(e.opts.options),n=e.check,o=r.length,i=`itemNum${e.opts.itemNum}`,a=A(D(e.opts.label))||"",s=A(D(e.opts.note))||"";let c=!0;(s.length<1||s==="")&&(c=!1);let[u,f]=Ee(i,Array.from({length:o},()=>Array.from({length:2},()=>!1)));const[d,g]=O.useState({bgColor:"whitesmoke",border:"none"}),p=t(e.opts.scale),m=(k,T,P)=>{const N=JSON.parse(localStorage.getItem("resultsSurvey")),j=[],F=u.map(function(K,M){return k===M?(K.map(function(R,_){return T===_?(j.push(!0),null):(j.push(!1),null)}),j):K});f(F);let V=u.length,Z=Bt([...F]),z=ir(Z)[!0]||0,J="";F.forEach((K,M)=>{let R=K[0]?"1":"2";K.includes(!0)||(R="nr"),M===0?J+=R:J+=","+R}),N[`itemNum${e.opts.itemNum}`]=J,z!==V&&(e.opts.required===!0||e.opts.required==="true")&&(N[`itemNum${e.opts.itemNum}`]="no-*?*-response"),localStorage.setItem("resultsSurvey",JSON.stringify(N))};let h=!1,y=u.length,v=Bt([...u]);(ir(v)[!0]||0)<y&&(h=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&n===!0&&h?g({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):g({bgColor:"whitesmoke",border:"none"})},[n,h,e.opts.required]);const I=()=>{const k=r.map((T,P)=>{const N=A(D(T))||"";return l.jsxs(ffe,{indexVal:P,children:[l.jsx(gfe,{children:N},ee()),l.jsx(Vb,{id:`Q-${P}`,type:"radio",value:1,name:`itemNum${e.opts.itemNum}-${P+1}`,onChange:j=>m(P,0),checked:u[P][0]},ee()),l.jsx(Vb,{id:`Q2-${P}`,type:"radio",value:2,name:`itemNum${e.opts.itemNum}-${P+1}`,onChange:j=>m(P,1),checked:u[P][1]},ee())]},ee())});return l.jsx("div",{children:k})};return c?l.jsxs(Bb,{bgColor:d.bgColor,border:d.border,children:[l.jsx(zb,{children:l.jsx("div",{children:a})}),l.jsx(pfe,{id:"noteText",children:l.jsx("div",{children:s})}),l.jsxs(Hb,{children:[l.jsxs(Ub,{children:[l.jsx("div",{}),l.jsx(_l,{children:l.jsx("div",{children:A(D(p[0]))})}),l.jsx(_l,{children:l.jsx("div",{children:A(D(p[1]))})})]}),l.jsx(I,{})]})]}):l.jsxs(Bb,{bgColor:d.bgColor,border:d.border,children:[l.jsx(zb,{children:l.jsx("div",{children:a})}),l.jsxs(Hb,{children:[l.jsxs(Ub,{children:[l.jsx("div",{}),l.jsx(_l,{children:l.jsx("div",{children:A(D(p[0]))})}),l.jsx(_l,{children:l.jsx("div",{children:A(D(p[1]))})})]}),l.jsx(I,{})]})]})},Bb=C.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,zb=C.div`
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
`,Hb=C.div`
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
`,ffe=C.div`
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
`,Ub=C.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 60px 60px 1fr;
  margin-bottom: 7px;
`,_l=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
`,Vb=C.input`
  display: flex;
  justify-self: center;
  align-self: center;
  border: 0px;
  width: 28px;
  height: 1.4em;
  justify-items: center;
  align-items: center;
`,gfe=C.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,pfe=C.div`
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
`,mfe=e=>{const r=(I=>{let k=I.split(";;;");return k=k.filter(function(T){return T}),k})(e.opts.options),n=r.length,o=`itemNum${e.opts.itemNum}`,i=e.check,a=A(D(e.opts.note))||"";let s=!0;(a.length<1||a==="")&&(s=!1);const c=A(D(e.opts.label))||"";let[u,f]=Ee(o,Array.from({length:n},()=>Array.from({length:5},()=>!1)));const[d,g]=O.useState({bgColor:"whitesmoke",border:"none"}),p=(I,k,T)=>{const P=JSON.parse(localStorage.getItem("resultsSurvey")),N=[],j=u.map(function(J,K){return I===K?(J.map(function(M,R){return k===R?(N.push(!0),null):(N.push(!1),null)}),N):J});f(j);let F=u.length,V=Bt([...j]),Y=ir(V)[!0]||0,z="";j.forEach((J,K)=>{let M=j[K].indexOf(!0)+1;J.includes(!0)||(M="nr"),K===0?z+=M:z+=","+M}),P[`itemNum${e.opts.itemNum}`]=z,Y!==F&&(e.opts.required===!0||e.opts.required==="true")&&(P[`itemNum${e.opts.itemNum}`]="no-*?*-response"),localStorage.setItem("resultsSurvey",JSON.stringify(P))};let m=!1,h=u.length,y=Bt([...u]);(ir(y)[!0]||0)<h&&(m=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&i===!0&&m?g({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):g({bgColor:"whitesmoke",border:"none"})},[i,m,e.opts.required]);const S=()=>{const I=r.map((k,T)=>{const P=A(D(k));return l.jsxs(hfe,{indexVal:T,children:[l.jsx(vfe,{children:P},ee()),l.jsx($a,{id:`Q-${T}`,type:"radio",value:1,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,0),checked:u[T][0]},ee()),l.jsx($a,{id:`Q2-${T}`,type:"radio",value:2,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,1),checked:u[T][1]},ee()),l.jsx($a,{id:`Q3-${T}`,type:"radio",value:3,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,2),checked:u[T][2]},ee()),l.jsx($a,{id:`Q4-${T}`,type:"radio",value:4,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,3),checked:u[T][3]},ee()),l.jsx($a,{id:`Q5-${T}`,type:"radio",value:5,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,4),checked:u[T][4]},ee())]},ee())});return l.jsx("div",{children:I})};return s?l.jsxs(Wb,{bgColor:d.bgColor,border:d.border,children:[l.jsx(qb,{children:l.jsx("div",{children:c})}),l.jsx(xfe,{id:"noteText",children:l.jsx("div",{children:a})}),l.jsxs(Gb,{children:[l.jsxs(Kb,{children:[l.jsx("div",{}),l.jsx(dn,{children:"1"}),l.jsx(dn,{children:"2"}),l.jsx(dn,{children:"3"}),l.jsx(dn,{children:"4"}),l.jsx(dn,{children:"5"})]}),l.jsx(S,{})]})]}):l.jsxs(Wb,{bgColor:d.bgColor,border:d.border,children:[l.jsx(qb,{children:l.jsx("div",{children:c})}),l.jsxs(Gb,{children:[l.jsxs(Kb,{children:[l.jsx("div",{}),l.jsx(dn,{children:"1"}),l.jsx(dn,{children:"2"}),l.jsx(dn,{children:"3"}),l.jsx(dn,{children:"4"}),l.jsx(dn,{children:"5"})]}),l.jsx(S,{})]})]})},Wb=C.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,qb=C.div`
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
`,Gb=C.div`
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
`,hfe=C.div`
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
`,Kb=C.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 30px 30px 30px 30px 30px 1fr;
  margin-bottom: 7px;
  align-items: end;
`,$a=C.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 0px;
  width: 25px;
  height: 1.4em;
`,dn=C.div`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
`,vfe=C.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,xfe=C.div`
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
`,yfe=e=>{const r=(I=>{let k=I.split(";;;");return k=k.filter(function(T){return T}),k})(e.opts.options),n=r.length,o=`itemNum${e.opts.itemNum}`,i=e.check,a=A(D(e.opts.label))||"",s=A(D(e.opts.note))||"";let c=!0;(s.length<1||s==="")&&(c=!1);const[u,f]=Ee(o,Array.from({length:n},()=>Array.from({length:10},()=>!1))),[d,g]=O.useState({bgColor:"whitesmoke",border:"none"}),p=(I,k,T)=>{const P=JSON.parse(localStorage.getItem("resultsSurvey")),N=[],j=u.map(function(J,K){return I===K?(J.map(function(M,R){return k===R?(N.push(!0),null):(N.push(!1),null)}),N):J});f(j);let F=u.length,V=Bt([...j]),Y=ir(V)[!0]||0,z="";j.forEach((J,K)=>{let M=j[K].indexOf(!0)+1;J.includes(!0)||(M="nr"),K===0?z+=M:z+=","+M}),P[`itemNum${e.opts.itemNum}`]=z,Y!==F&&(e.opts.required===!0||e.opts.required==="true")&&(P[`itemNum${e.opts.itemNum}`]="no-*?*-response"),localStorage.setItem("resultsSurvey",JSON.stringify(P))};let m=!1,h=u.length,y=Bt([...u]);(ir(y)[!0]||0)<h&&(m=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&i===!0&&m?g({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):g({bgColor:"whitesmoke",border:"none"})},[i,m,e.opts.required]);const S=()=>{const I=r.map((k,T)=>{const P=A(D(k));return l.jsxs(bfe,{indexVal:T,children:[l.jsx(Sfe,{children:P},ee()),l.jsx(fn,{id:`Q-${T}`,type:"radio",value:1,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,0),checked:u[T][0]},ee()),l.jsx(fn,{id:`Q2-${T}`,type:"radio",value:2,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,1),checked:u[T][1]},ee()),l.jsx(fn,{id:`Q3-${T}`,type:"radio",value:3,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,2),checked:u[T][2]},ee()),l.jsx(fn,{id:`Q4-${T}`,type:"radio",value:4,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,3),checked:u[T][3]},ee()),l.jsx(fn,{id:`Q5-${T}`,type:"radio",value:5,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,4),checked:u[T][4]},ee()),l.jsx(fn,{id:`Q6-${T}`,type:"radio",value:6,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,5),checked:u[T][5]},ee()),l.jsx(fn,{id:`Q7-${T}`,type:"radio",value:7,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,6),checked:u[T][6]},ee()),l.jsx(fn,{id:`Q8-${T}`,type:"radio",value:8,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,7),checked:u[T][7]},ee()),l.jsx(fn,{id:`Q9-${T}`,type:"radio",value:9,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,8),checked:u[T][8]},ee()),l.jsx(fn,{id:`Q10-${T}`,type:"radio",value:10,name:`itemNum${e.opts.itemNum}-${T+1}`,onChange:N=>p(T,9),checked:u[T][9]},ee())]},ee())});return l.jsx("div",{children:I})};return c?l.jsxs(Jb,{bgColor:d.bgColor,border:d.border,children:[l.jsx(Qb,{children:l.jsx("div",{children:a})}),l.jsx(Cfe,{id:"noteText",children:l.jsx("div",{children:s})}),l.jsxs(Yb,{children:[l.jsxs(Zb,{children:[l.jsx("div",{}),l.jsx(dt,{children:"1"}),l.jsx(dt,{children:"2"}),l.jsx(dt,{children:"3"}),l.jsx(dt,{children:"4"}),l.jsx(dt,{children:"5"}),l.jsx(dt,{children:"6"}),l.jsx(dt,{children:"7"}),l.jsx(dt,{children:"8"}),l.jsx(dt,{children:"9"}),l.jsx(dt,{children:"10"})]}),l.jsx(S,{})]})]}):l.jsxs(Jb,{bgColor:d.bgColor,border:d.border,children:[l.jsx(Qb,{children:l.jsx("div",{children:a})}),l.jsxs(Yb,{children:[l.jsxs(Zb,{children:[l.jsx("div",{}),l.jsx(dt,{children:"1"}),l.jsx(dt,{children:"2"}),l.jsx(dt,{children:"3"}),l.jsx(dt,{children:"4"}),l.jsx(dt,{children:"5"}),l.jsx(dt,{children:"6"}),l.jsx(dt,{children:"7"}),l.jsx(dt,{children:"8"}),l.jsx(dt,{children:"9"}),l.jsx(dt,{children:"10"})]}),l.jsx(S,{})]})]})},Jb=C.div`
  width: 90%;
  padding: 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  height: auto;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Qb=C.div`
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
`,Yb=C.div`
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
`,bfe=C.div`
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
`,Zb=C.div`
  display: inline-grid;
  grid-template-columns: minmax(30%, 1000px) 14px 14px 14px 14px 14px 14px 14px 14px 14px 14px 1fr;
  margin-bottom: 7px;
  align-items: end;
  font-size: 11px;
`,dt=C.div`
  display: flex;
  justify-self: center;
  align-items: center;
  text-align: center;
  font-size: 8px;
`,fn=C.input`
  display: flex;
  justify-self: center;
  align-self: center;
  text-align: center;
  border: 0px;
  width: 28px;
  height: 1.4em;
  padding-left: 3px;
`,Sfe=C.span`
  margin-bottom: 2px;
  padding-left: 5px;
`,Cfe=C.div`
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
`,wfe=e=>{const t=e.check,r=`itemNum${e.opts.itemNum}`,n=A(D(e.opts.label))||"";let[o,i]=Ee(r,"");const[a,s]=O.useState({bgColor:"whitesmoke",border:"none"}),u=(h=>h.split(";;;"))(e.opts.scale),f=h=>{const y=JSON.parse(localStorage.getItem("resultsSurvey"));y[`itemNum${e.opts.itemNum}`]=+h.target.value+1,localStorage.setItem("resultsSurvey",JSON.stringify(y))};let d=!1;o.length===0&&(d=!0),O.useEffect(()=>{(e.opts.required===!0||e.opts.required==="true")&&t===!0&&d?s({bgColor:"rgba(253, 224, 71, .5)",border:"3px dashed black"}):s({bgColor:"whitesmoke",border:"none"})},[t,d,e.opts.required]);const g=u.map(h=>l.jsx(Pfe,{children:l.jsx("div",{children:A(D(h))})},ee())),p=({value:h,checked:y,setter:v})=>l.jsx(l.Fragment,{children:l.jsx("input",{type:"radio",checked:y===h,onChange:()=>v(h),value:h})}),m=()=>{const h=u.map((y,v)=>l.jsx($fe,{className:"radioButtons",onChange:x=>f(x),children:l.jsx(p,{className:"radioInput",value:v,checked:o,setter:i})},ee()));return l.jsx(Ife,{className:"buttonContainer",cols:u.length,children:h})};return l.jsxs(jfe,{bgColor:a.bgColor,border:a.border,children:[l.jsx(Tfe,{children:l.jsx("div",{children:n})}),l.jsxs(Ofe,{className:"radioContainer",children:[l.jsx(Efe,{className:"ratingTitle",cols:u.length,children:g}),l.jsx(m,{})]})]})},jfe=C.div`
  width: 90%;
  padding: 12px 20px 0px 20px;
  margin-left: 20px;
  margin-right: 20px;
  max-width: 1300px;
  min-height: 170px;
  background-color: ${e=>e.bgColor};
  outline: ${e=>e.border};
  outline-offset: -3px;
`,Tfe=C.div`
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
`,Ofe=C.div`
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
`,Ife=C.div`
  display: inline-grid;
  grid-template-columns: ${e=>`repeat(${e.cols}, ${100/e.cols}%)`};
  margin-bottom: 3px;
  justify-items: center;
  align-items: center;
`,Efe=C.div`
  display: inline-grid;
  grid-template-columns: ${e=>`repeat(${e.cols}, ${100/e.cols}%)`};
`,Pfe=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`,$fe=C.div`
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
`,kfe=e=>{O.useEffect(()=>{const r=JSON.parse(localStorage.getItem("resultsSurvey"));r[`itemNum${e.opts.itemNum}`]="info. - na"},[e.opts.itemNum]);const t=A(D(e.opts.options))||"";return l.jsx(Nfe,{children:l.jsx(Mfe,{backgroundColor:e.opts.background,children:l.jsx("div",{children:t})})})},Nfe=C.div`
  width: 100%;
  padding: 10px;
  margin-left: 10px;
  margin-right: 10px;
  max-width: 1300px;
  background-color: whitesmoke;
  min-height: 50px;
  margin-bottom: 20px;
  color: ${e=>e.theme.mobileText};
`,Mfe=C.div`
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
`,Afe=e=>e.setCurrentPage,Dfe=e=>e.setProgressScore,Rfe=e=>e.langObj,Lfe=e=>e.configObj,_fe=e=>e.surveyQuestionObjArray,Ffe=e=>e.requiredAnswersObj,Bfe=e=>e.setRequiredAnswersObj,zfe=e=>e.checkRequiredQuestionsComplete,Hfe=e=>e.setTriggerMobileSurveyHelpModal,Ufe=e=>e.mobileSurveyViewSize,Vfe=e=>e.triggerMobileSurveyHelpModal,Wfe=e=>e.setTriggerMobileSurveyHelpModal,qfe=e=>e.triggerSurveyPreventNavModal,Gfe=e=>e.setTriggerSurveyPreventNavModal,Xb=()=>{const e=E(Afe),t=E(Dfe),r=X(Lfe),n=X(Rfe),o=X(Ffe),i=X(_fe),a=X(Bfe),s=E(zfe),c=E(Hfe),u=E(Ufe),f=E(Vfe),d=E(Wfe),g=E(qfe),p=E(Gfe),m=r.headerBarColor,h=i,y=A(D(n.surveyHeader))||"",v=A(D(n.screenOrientationText))||"",x=A(D(n.expandViewMessage))||"",S=A(D(n.mobileSurveyHelpModalHead))||"",I=A(D(n.mobileSurveyHelpModalText))||"",k=A(D(n.surveyPreventNavModalHead))||"",T=A(D(n.surveyPreventNavModalText))||"",P=JSON.parse(localStorage.getItem("m_ViewSizeObject")).survey;let N=ho();O.useEffect(()=>{let Z=Object.keys(o);for(let Y=0;Y<Z.length;Y++)o[Z[Y]]="no response";a(o)},[a,o]);const j=O.useRef(null);O.useEffect(()=>(j.current=Date.now(),(async()=>{await e("survey"),localStorage.setItem("currentPage","survey"),await t(20)})(),()=>{Sr(j.current,"surveyPage","surveyPage")}),[e,t]);const F=()=>{c(!0)},V=()=>h?(h||[]).map(Y=>Y.type==="text"?l.jsx(Xde,{check:s,opts:Y},ee()):Y.type==="textarea"?l.jsx(tfe,{check:s,opts:Y},ee()):Y.type==="radio"?l.jsx(nfe,{check:s,opts:Y},ee()):Y.type==="checkbox"?l.jsx(cfe,{check:s,opts:Y},ee()):Y.type==="select"?l.jsx(sfe,{check:s,opts:Y},ee()):Y.type==="likert"?l.jsx(wfe,{check:s,opts:Y},ee()):Y.type==="rating2"?l.jsx(dfe,{check:s,opts:Y},ee()):Y.type==="rating5"?l.jsx(mfe,{check:s,opts:Y},ee()):Y.type==="rating10"?l.jsx(yfe,{check:s,opts:Y},ee()):Y.type==="information"?l.jsx(kfe,{opts:Y},ee()):null):l.jsx(Kfe,{children:"No questions added."});return N==="landscape-primary"?l.jsx(Zfe,{children:l.jsx("h1",{children:v})}):l.jsxs(ege,{children:[l.jsxs(Jfe,{background:m,children:[y,l.jsx(Yfe,{onClick:F,children:l.jsx(Xs,{})})]}),l.jsx(fr,{trigger:g,setTrigger:p,head:k,text:T,showArrow:!1,height:"150px"}),l.jsx(fr,{trigger:f,setTrigger:d,head:S,text:I,showArrow:!1,height:"250px"}),l.jsx(Qfe,{viewSize:u===+P?u:P,children:l.jsx(V,{})}),l.jsx(Xfe,{children:x})]})},Kfe=C.div`
  margin-top: 50px;
  font-size: 24px;
  font-weight: bold;
`,Jfe=C.div`
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
`,Qfe=C.div`
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
`,Yfe=C.div`
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
`,Zfe=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  color: ${e=>e.theme.mobileText};
`,Xfe=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
`,ege=C.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  /* height: 100vh; */
  /* justify-content: center; */
  align-items: center;
`,tge=(e,t)=>{let r;return(...n)=>{r&&clearTimeout(r),r=setTimeout(()=>{e(...n)},t)}},eS=({onChange:e,delay:t=300,...r})=>{const[n,o]=Ee(r.id,""),i=tge(e,t);O.useEffect(()=>{i({target:{value:n,...r}})},[n,i,r]);const a=s=>{o(s.target.value)};return l.jsx(rge,{value:n,placeholder:r.placeholder,"data-id":r.statementId,onChange:a,highlighting:r.highlight,...r})},rge=C.textarea`
  box-sizing: border-box;
  padding: 5px;
  min-height: 12vh;
  width: 80vw;
  outline: 1px solid #36454f;
  border: none;
  color: ${e=>e.theme.mobileText};
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  background-color: ${e=>e.value.length>0?"whitesmoke":e.required&&e.highlighting?"rgba(253, 224, 71, .5)":"whitesmoke"};
`,nge=e=>e.setCurrentPage,oge=e=>e.setProgressScore,ige=e=>e.langObj,age=e=>e.configObj,sge=e=>e.mapObj,lge=e=>e.mobilePostsortFontSize,cge=e=>e.mobilePostsortViewSize,uge=e=>e.showPostsortCommentHighlighting,dge=e=>e.setTriggerMobilePostsortHelpModal,fge=e=>e.triggerMobilePostsortHelpModal,gge=e=>e.setTriggerMobilePostsortHelpModal,pge=e=>e.triggerMobilePostsortPreventNavModal,mge=e=>e.setTriggerMobilePostsortPreventNavModal,tS=()=>{const e=E(nge),t=E(oge),r=X(ige),n=X(sge),o=X(age);let i=E(lge),a=o.postsortCommentsRequired;const s=E(uge),c=E(dge),u=E(fge),f=E(gge),d=E(pge),g=E(mge),p=A(D(r.mobilePostsortSortbarText))||"",m=A(D(r.postsortAgreement))||"",h=A(D(r.postsortDisagreement))||"",y=r.placeholder,v=A(D(r.screenOrientationText))||"",x=A(D(r.expandViewMessage))||"",S=A(D(r.mobilePostsortHelpModalHead))||"",I=A(D(r.mobilePostsortHelpModalText))||"",k=A(D(r.mobilePostsortPreventNavModalHead))||"",T=A(D(r.mobilePostsortPreventNavModalText))||"";let N=[...kh(n).displayArray],j=[],F=[],V=[],Z=[],Y=[...n.qSortHeaderNumbers],z,J=n.useColLabelNumsPostsort[0];(J!==void 0||J!==null)&&(J===!1||J==="false"?z=!1:z=!0);let K,M=n.useColLabelTextPostsort[0];(M!==void 0||M!==null)&&(M===!1||M==="false"?K=!1:K=!0);let R,_=n.useColLabelEmojiPostsort[0];(_!==void 0||_!==null)&&(_===!1||_==="false"?R=!1:R=!0);const B=O.useMemo(()=>{let se={};const ye=[...JSON.parse(localStorage.getItem("m_SortArray1"))||[]],me=JSON.parse(localStorage.getItem("m_SortCharacteristicsArray")),ue=o.showSecondPosColumn,Se=o.showSecondNegColumn,he=[...n.qSortPattern];let Ce=he[0],Ve=he[he.length-1];const ze=he[1],be=he[he.length-2];let Oe=N[N.length-1],st=N[N.length-2],pt=N[0],Fe=N[1];for(let We=0;We<Ce;We++)j.push(Oe),V.push(Y[Y.length-1].toString());for(let We=0;We<Ve;We++)F.push(pt),Z.push(Y[0].toString());if(ue===!0||ue==="true"){Ce=+Ce+ +ze;for(let We=0;We<ze;We++)j.push(st),V.push(Y[Y.length-2].toString())}if(Se===!0||Se==="true"){Ve=+Ve+ +be;for(let We=0;We<be;We++)F.unshift(Fe),Z.unshift(Y[1].toString())}const yt=ye.slice(0,Ce);let mt=ye.slice(-Ve),ar=me.slice(-Ve),_r={},Dn={};return yt.forEach((We,sr)=>{We.sortValue=me[sr].value,We.header=me[sr].header,We.color=me[sr].color,_r[We.id]=""}),mt.forEach((We,sr)=>{We.sortValue=ar[sr].value,We.header=ar[sr].header,We.color=ar[sr].color,Dn[We.id]=""}),localStorage.setItem("m_PostSortResultsObj",JSON.stringify(se)),[yt,mt,_r,Dn]},[n.qSortPattern,o,N,j,F]),q=JSON.parse(localStorage.getItem("m_FontSizeObject")).postsort,H=JSON.parse(localStorage.getItem("m_ViewSizeObject")).postsort,Q=E(cge),[U,G]=Ee("m_PosRequiredStatesObj",B[2]),[$,w]=Ee("m_NegRequiredStatesObj",B[3]);let b=ho();const W=O.useRef(null);O.useEffect(()=>(W.current=Date.now(),(async()=>{await e("postsort"),localStorage.setItem("currentPage","postsort"),await t(20)})(),()=>{Sr(W.current,"postsortPage","postsortPage")}),[e,t]);const L=()=>{c(!0)},re=se=>{const ae=JSON.parse(localStorage.getItem("m_PostSortResultsObj"));JSON.parse(localStorage.getItem("resultsPostsort"));const ue=se.target.sortValue.replace("+","").replace("-","N");se.target.side==="positive"&&(ae[`column${ue}:(${se.target.commentId})`]=se.target.value,U[se.target.statementId]=se.target.value,G(U)),se.target.side==="negative"&&(ae[`column${ue}:(${se.target.commentId})`]=se.target.value,$[se.target.statementId]=se.target.value,w($)),localStorage.setItem("m_PostSortResultsObj",JSON.stringify(ae)),localStorage.setItem("resultsPostsort",JSON.stringify(ae))};if(b==="landscape-primary")return l.jsx(bge,{children:l.jsx("h1",{children:v})});let ie=B[0].map((se,ae)=>l.jsxs("div",{children:[l.jsxs(rS,{fontSize:"2",color:se.color,card:se,index:ae,sortValue:se.sortValue,commentId:se.id,agree:m,disagree:h,children:[l.jsxs(oS,{children:[R&&l.jsx(Fl,{children:j[ae]}),l.jsxs(sS,{children:[z&&l.jsx(iS,{children:"+"+V[ae]}),K&&l.jsx(aS,{children:se.header})]}),R&&l.jsx(Fl,{children:j[ae]})]}),l.jsx(nS,{children:se.statement})]}),l.jsx(eS,{delay:500,id:`m_PostsortComment(${se.id})`,placeholder:y,required:a,index:ae,commentId:se.id,sortValue:se.sortValue,onChange:re,statementId:se.id,side:"positive",highlight:s})]},ee())),ge=B[1].map((se,ae)=>l.jsxs("div",{children:[l.jsxs(rS,{card:se,color:se.color,index:ae,agree:m,commentId:se.id,sortValue:se.sortValue,disagree:h,children:[l.jsxs(oS,{children:[R&&l.jsx(Fl,{children:F[ae]}),l.jsxs(sS,{children:[z&&l.jsx(iS,{children:Z[ae]}),K&&l.jsx(aS,{children:se.header})]}),R&&l.jsx(Fl,{children:F[ae]})]}),l.jsx(nS,{children:se.statement})]}),l.jsx(eS,{onChange:re,delay:500,id:`m_PostsortComment(${se.id})`,placeholder:y,index:ae,required:a,sortValue:se.sortValue,commentId:se.id,side:"negative",statementId:se.id,highlight:s})]},ee()));return l.jsxs(yge,{children:[l.jsxs(hge,{background:o.headerBarColor,children:[p,l.jsx(vge,{onClick:L,children:l.jsx(Xs,{})})]}),l.jsx(fr,{head:k,text:T,trigger:d,setTrigger:g,showArrow:!1,height:"150px"}),l.jsx(fr,{head:S,text:I,trigger:u,setTrigger:f,showArrow:!1,height:"150px"}),l.jsxs(xge,{viewSize:Q===+H?Q:H,fontSize:i===+q?i:q,children:[ie,ge]}),l.jsx(Sge,{children:x})]})},hge=C.div`
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
`,vge=C.div`
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
`,xge=C.div`
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
`,rS=C.div`
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
`,yge=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  user-select: none;
  background-color: #f3f4f6;
`,bge=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.mobileText};
  width: 100vw;
  height: 100vh;
`,Sge=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5vh;
  font-weight: bold;
  margin-top: 10px;
  width: 80vw;
`;C.div`
  height: 16px;
  margin-bottom: 4px;
`;const nS=C.div`
  background-color: lightgray;
  border-radius: 3px;
  padding: 5px;
  outline: 1px solid darkgray;
`,oS=C.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding-right: 2px;
  padding-left: 2px;
`,iS=C.span`
  font-weight: bold;
  font-size: 16px;
  line-height: 1;
`,Fl=C.div`
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`,aS=C.div`
  display: flex;
  padding-top: 2px;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  font-size: 4vw;
  text-align: center;
  line-height: 0.8rem;
`,sS=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`,Cge=e=>e.langObj,wge=e=>e.configObj,jge=e=>e.setDisableRefreshCheck,Tge=e=>{const t=X(Cge),r=X(wge),n=E(jge),o=A(D(t.defaultEmailClientFail))||"",i=A(D(t.submitFailMessage))||"",[a,s]=O.useState(i),[c,u]=O.useState(!1),f=e.results,d=r.emailAddress,g=A(D(t.btnTransferEmail))||"",p=h=>{console.log("Download button clicked"),h.preventDefault();const y=Object.entries(e.results).map(([I,k])=>`${I}: ${k}`).join(`
`),v=new Blob([y],{type:"text/plain"}),x=URL.createObjectURL(v),S=document.createElement("a");S.href=x,S.download="my_Q-sort_results.txt",document.body.appendChild(S),S.click(),document.body.removeChild(S),URL.revokeObjectURL(x)},m=h=>{h.preventDefault(),s(o);let y="";for(const[v,x]of Object.entries(e.results))y=y+`${v}:| ${x} | `;console.log("formattedResults: "+y),console.log(JSON.stringify(y,null,2)),navigator.userAgent.toLowerCase().indexOf("chrome")>-1?(window.open(`mailto:${r.emailAddress}?subject=${r.emailSubjectLine}&body=${t.emailBodyMessage} %0D%0A%0D%0AMy Results:%0D%0A${y}`),u(!0)):(window.location.href=`mailto:${r.emailAddress}?subject=${r.emailSubjectLine}&body=${t.emailBodyMessage} %0D%0A%0D%0AMy Results:%0D%0A${y}`,u(!0))};return O.useEffect(()=>{n(!0)},[n]),console.log("urlUsercode: ",e.results.urlUsercode),l.jsxs(Mge,{children:[l.jsxs(Ige,{children:[l.jsx(Oge,{tabindex:"0",onClick:h=>m(h),children:g}),l.jsx(Ege,{children:a})]}),c?l.jsx($ge,{children:l.jsxs(kge,{children:[l.jsx(eu,{type:"email",content:d,text:t.clipboardEmail}),l.jsx(eu,{type:"results",content:f,text:t.clipboardResults}),l.jsx(Age,{children:l.jsx(Nge,{onClick:h=>p(h),children:t.downloadResultsButtonText})})]})}):l.jsx(Pge,{})]})},Oge=C.button`
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
`,Ige=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  align-items: center;
`,Ege=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.2em;
  width: 65vw;
  font-size: 1.35em;
  align-self: center;
`,Pge=C.div`
  height: 300px;
`,$ge=C.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,kge=C.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  margin-top: 10px;
  height: 110px;
  gap: 10px;
  justify-content: center;
  align-items: center;
`,Nge=C.button`
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
`,Mge=C.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
`,Age=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  /* border: 1px solid #2e6da4; */
`,Dge=e=>e.langObj,Rge=e=>e.transmittingData,Lge=e=>e.setTransmittingData,_ge=e=>e.checkInternetConnection,Fge=e=>e.setCheckInternetConnection,Bge=e=>e.configObj,zge=e=>e.setTriggerTransmissionOKModal,Hge=e=>e.setDisplayGoodbyeMessage,Uge=e=>e.setDisplayBelowButtonText,Vge=e=>{const t=X(Dge);let r=E(Rge);const n=E(Lge);let o=E(_ge);const i=E(Fge),a=X(Bge),s=E(zge),c=E(Hge),u=A(D(t.checkInternetMessage))||"",f=E(Uge),d=A(D(t.btnTransfer))||"",[g,p]=O.useState(0),m=h=>{h.preventDefault(),h.target.disabled=!0,f(!0),n(!0),i(!1),setTimeout(()=>{n(!1),i(!0),f(!1)},1e4),console.log(JSON.stringify(e.results,null,2));let y=a.baserowToken,v=a.baserowDatabaseIdNumber;if(y==null){console.log("Baserow token is not set");return}Xe({method:"POST",url:`https://api.baserow.io/api/database/rows/table/${v}/?user_field_names=true`,headers:{Authorization:`Token ${y}`,"Content-Type":"application/json"},data:e.results}).then(x=>{console.log(x),x.status===200&&(n(!1),i(!1),c(!0),s(!0))}).catch(x=>{console.log(x),setTimeout(()=>{p(g+1)},1e4)}),console.log("submission processed")};return console.log("failureCount: ",g),g>1&&i(!1),l.jsxs(le.Fragment,{children:[l.jsx(Mn,{}),l.jsx(ph,{}),l.jsx(mh,{}),r?l.jsx(qge,{}):l.jsx(Wge,{tabindex:"0",onClick:h=>m(h),children:d}),o&&l.jsx(Gge,{children:u}),g>1&&l.jsx(Kge,{children:l.jsx(Tge,{results:e.results})})]})},Wge=C.button`
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
`,qge=C.div`
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
`,Gge=C.div`
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
`,Kge=C.div`
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
`,Jge=(e,t)=>{let r="",n="";return e.forEach((o,i)=>{let s=t[i].value.replace("+","");o.sortValue=s,o.number=+o.statementNum}),e.sort((o,i)=>o.number-i.number),e.forEach(o=>{o.psValue>0&&(o.presortVal="p"),o.psValue===0&&(o.presortVal="u"),o.psValue<0&&(o.presortVal="n"),r+=`${o.sortValue}|`,n+=`${o.statementNum}*${o.presortVal}*${o.sortValue}|`}),r.charAt(r.length-1)==="|"&&(r=r.substring(0,r.length-1)),n.charAt(n.length-1)==="|"&&(n=n.substring(0,n.length-1)),{r20:`sort: ${r}`,r21:`presortTrace: ${n}`}},Qge=e=>{let t=0,r=0,n=0,o="",i="",a="";return e.forEach(s=>{s.psValue>0?(t++,o+=s.id+", "):s.psValue<0?(r++,i+=s.id+", "):(n++,a+=s.id+", ")}),{npos:t,nneg:r,nneu:n,posStateNums:o.slice(0,-2),negStateNums:i.slice(0,-2),neuStateNums:a.slice(0,-2)}},Yge=e=>e.setCurrentPage,Zge=e=>e.setProgressScore,Xge=e=>e.langObj,epe=e=>e.configObj,tpe=e=>e.displayGoodbyeMessage,lS=()=>{const e=E(Yge),t=E(Zge),r=X(Xge),n=X(epe),o=Sm();let i=JSON.parse(localStorage.getItem("m_SortArray1"));const a=E(tpe),[s,c]=O.useState({consent:"00:00:00",landing:"00:00:00",presort:"00:00:00",thinning:"00:00:00",sort:"00:00:00",postsort:"00:00:00",survey:"00:00:00"});O.useEffect(()=>{const V=(Y,z="00:00:00")=>{const J=localStorage.getItem(Y);return J!==null?J:z},Z={consent:V("timeOnconsentPage"),landing:V("timeOnlandingPage"),presort:V("timeOnpresortPage"),thinning:V("timeOnthinningPage"),sort:V("timeOnsortPage"),postsort:V("timeOnpostsortPage"),survey:V("timeOnsurveyPage")};(n.showConsentPage===!1||n.showConsentPage==="false")&&(Z.consent="n/a"),(n.showPostsort===!1||n.showPostsort==="false")&&(Z.postsort="n/a"),(n.showSurvey===!1||n.showSurvey==="false")&&(Z.survey="n/a"),c(Z)},[n]);const u=A(D(r.mobileSortTitleBar)),f=A(D(r.transferTextAbove))||"",d=A(D(r.transferTextBelow))||"",g=A(D(r.goodbyeMessage))||"",p=A(D(r.screenOrientationText))||"",m=JSON.parse(localStorage.getItem("m_PresortResults"))||{},h=JSON.parse(localStorage.getItem("columnStatements"))||{},y=JSON.parse(localStorage.getItem("m_SortCharacteristicsArray")),v=Qge(m);localStorage.setItem("resultsPresort",JSON.stringify(v));let x=ho();O.useEffect(()=>{let V=Date.now();return(async()=>{await e("submit"),localStorage.setItem("currentPage","submit"),await t(20)})(),()=>{Sr(V,"submitPage","submitPage")}},[e,t]);let S={},I=JSON.parse(localStorage.getItem("resultsSurvey"));I===void 0&&(I={});let k=localStorage.getItem("randomId")||ee(),T=localStorage.getItem("partId")||"no part ID",P=localStorage.getItem("usercode")||"no usercode set",N=n.creationDate||"unknown date";S.r1=n.studyTitle?`(projectName): ${n.studyTitle} - ${N}`:`(projectName): my Q study - ${N}`,S.r2=`(randomId): ${k}`,S.r3=`(partId): ${T}`,S.r4=`(urlUsercode): ${P}`,S.r5=`(dateTime): ${o}`,S.r6="(desktop/mobile): mobile",S.r7=`(timeOnConsentPage): ${s.consent}`,S.r8=`(timeOnWelcomePage): ${s.landing}`,S.r9=`(timeOnPresortPage): ${s.presort}`,S.r10=`(timeOnRefinePage): ${s.thinning}`,S.r11=`(timeOnSortPage): ${s.sort}`,S.r12=`(timeOnPostsortPage): ${s.postsort}`,S.r13=`(timeOnSurveyPage): ${s.survey}`;try{const V=K3();S={...S,...V}}catch(V){console.log(V),alert("4: "+V.message)}let j=22;try{if(n.showPostsort){const V=JSON.parse(localStorage.getItem("resultsPostsort"))||{},Z=Object.fromEntries(Object.entries(V).sort(([z],[J])=>z.localeCompare(J))),Y=Object.keys(Z);for(let z=0;z<Y.length;z++){if(Y[z].substring(0,9)==="textArea-")continue;let K=Z[Y[z]];K===""&&(K=" no response"),S[`r${j}`]=`${Y[z]}: ${K}`,j++}}}catch(V){console.log(V),alert("5: "+V.message)}try{if(n.showSurvey&&I!==void 0){const V=Object.keys(I);for(let Z=0;Z<V.length;Z++)S[`r${j}`]=`${V[Z]}: ${I[V[Z]]}`,j++}}catch(V){console.log(V),alert("6: "+V.message)}let F;try{Object.keys(h).length!==0&&h!==void 0&&Object.keys(v).length!==0&&v!==void 0&&(F=Jge([...i],[...y]))}catch(V){console.log(V),alert("7: "+V.message)}try{S={...S,...F}}catch(V){console.log(V),alert("8: "+V.message)}return console.log(JSON.stringify(S,null,2)),x==="landscape-primary"?l.jsx(ape,{children:l.jsx("h1",{children:p})}):a===!0?n.linkToSecondProject===!0?l.jsxs(cS,{children:[r.linkedProjectMessage,l.jsx("a",{id:"secondProjectLink",href:`${n.secondProjectUrl}/#/?usercode=${n.urlUsercode}`,style:{targetNew:"tab",textDecoration:"none"},children:l.jsx(lpe,{children:r.linkedProjectBtnMessage})})]}):l.jsx(l.Fragment,{children:l.jsx(cS,{children:g})}):l.jsxs(spe,{children:[l.jsx(npe,{background:n.headerBarColor,children:u}),l.jsxs(rpe,{children:[l.jsx(ope,{children:f}),l.jsx(Vge,{results:S}),l.jsx(ipe,{children:d})]})]})},rpe=C.div`
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
`,npe=C.div`
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
`,ope=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 80%;
  font-size: 15px;
  padding: 25px;
  align-self: center;
`,ipe=C.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 80%;
  font-size: 14px;
  padding: 10px;
  align-self: center;
`,cS=C.div`
  display: flex;
  justify-self: center;
  width: 76vw;
  height: calc(100vh - 50px);
  text-align: center;
  font-size: 22px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${e=>e.theme.mobileText};
`,ape=C.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`,spe=C.div`
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
`,lpe=C.button`
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
`,cpe=/^[v^~<>=]*?(\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+)(?:\.([x*]|\d+))?(?:-([\da-z\-]+(?:\.[\da-z\-]+)*))?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?)?)?$/i,au=e=>{if(typeof e!="string")throw new TypeError("Invalid argument expected string");const t=e.match(cpe);if(!t)throw new Error(`Invalid argument not valid semver ('${e}' received)`);return t.shift(),t},uS=e=>e==="*"||e==="x"||e==="X",dS=e=>{const t=parseInt(e,10);return isNaN(t)?e:t},upe=(e,t)=>typeof e!=typeof t?[String(e),String(t)]:[e,t],dpe=(e,t)=>{if(uS(e)||uS(t))return 0;const[r,n]=upe(dS(e),dS(t));return r>n?1:r<n?-1:0},bi=(e,t)=>{for(let r=0;r<Math.max(e.length,t.length);r++){const n=dpe(e[r]||"0",t[r]||"0");if(n!==0)return n}return 0},fpe=(e,t)=>{const r=au(e),n=au(t),o=r.pop(),i=n.pop(),a=bi(r,n);return a!==0?a:o&&i?bi(o.split("."),i.split(".")):o||i?o?-1:1:0},gpe=(e,t,r)=>{ppe(r);const n=fpe(e,t);return Aj[r].includes(n)},Aj={">":[1],">=":[0,1],"=":[0],"<=":[-1,0],"<":[-1],"!=":[-1,1]},fS=Object.keys(Aj),ppe=e=>{if(typeof e!="string")throw new TypeError(`Invalid operator type, expected string but got ${typeof e}`);if(fS.indexOf(e)===-1)throw new Error(`Invalid operator, expected one of ${fS.join("|")}`)},Ei=(e,t)=>{if(t=t.replace(/([><=]+)\s+/g,"$1"),t.includes("||"))return t.split("||").some(y=>Ei(e,y));if(t.includes(" - ")){const[y,v]=t.split(" - ",2);return Ei(e,`>=${y} <=${v}`)}else if(t.includes(" "))return t.trim().replace(/\s{2,}/g," ").split(" ").every(y=>Ei(e,y));const r=t.match(/^([<>=~^]+)/),n=r?r[1]:"=";if(n!=="^"&&n!=="~")return gpe(e,t,n);const[o,i,a,,s]=au(e),[c,u,f,,d]=au(t),g=[o,i,a],p=[c,u??"x",f??"x"];if(d&&(!s||bi(g,p)!==0||bi(s.split("."),d.split("."))===-1))return!1;const m=p.findIndex(y=>y!=="0")+1,h=n==="~"?2:m>1?m:1;return!(bi(g.slice(0,h),p.slice(0,h))!==0||bi(g.slice(h),p.slice(h))===-1)},mpe=e=>e.setConfigObj,hpe=e=>e.setLangObj,vpe=e=>e.setMapObj,xpe=e=>e.setStatementsObj,ype=e=>e.setColumnStatements,bpe=e=>e.setResetColumnStatements,Spe=e=>e.setSurveyQuestionObjArray,Cpe=e=>e.setRequiredAnswersObj,wpe=e=>e.setDataLoaded,jpe=e=>e.displayGoodbyeMessage,Tpe=e=>e.disableRefreshCheck,Ope=e=>e.configObj,Ipe=e=>e.langObj,Epe=e=>e.mapObj;function Ppe(){const e=X(mpe),t=X(hpe),r=X(vpe),n=X(xpe),o=X(ype),i=X(bpe),a=X(Spe),s=X(Cpe),c=E(wpe),u=E(jpe),f=E(Tpe),d=X(Ope),g=X(Ipe),p=X(Epe),[m,h]=O.useState(!0),[y,v]=O.useState(!1),[x,S]=O.useState(!1),[I,k]=O.useState(!1);if(O.useEffect(()=>{const V=Z=>{const Y=Z||window.event;return Y.preventDefault(),Y&&(Y.returnValue=""),""};if(u||f)window.removeEventListener("beforeunload",V);else return window.addEventListener("beforeunload",V),()=>{window.removeEventListener("beforeunload",V)}},[u,f]),O.useEffect(()=>{let V,Z,Y=[];(async()=>(await Xe.get("./settings/language.xml",{"Content-Type":"application/xml; charset=utf-8"}).then(function(z){const J={compact:!0,ignoreComment:!0,spaces:4},K=Dl.xml2js(z.data,J);let M=Loe(K);t(M)}).catch(function(z){console.log(z)}),await Xe.get("./settings/config.xml",{"Content-Type":"application/xml; charset=utf-8"}).then(function(z){const J={compact:!1,ignoreComment:!0,spaces:2},K=Dl.xml2js(z.data,J);let M=Doe(K);if(V=M.shuffleCards,e(M.configObj),a(M.surveyQuestionObjArray),s(M.requiredAnswersObj),M.configObj.useImages===!0){for(let R=0;R<M.configObj.numImages;R++){let _={};_.backgroundColor="white",_.element=l.jsx("img",{src:`/settings/images/image${R+1}.${M.configObj.imageFileType}`,alt:`image${R+1}`,className:"dragObject"}),_.cardColor="yellowSortCard",_.divColor="isUncertainStatement",_.pinkChecked=!1,_.yellowChecked=!0,_.greenChecked=!1,_.sortValue=222,_.id=`image${R+1}`,_.statement=`image${R+1}`,_.statementNum=`${R+1}`,Y.push(_)}M.configObj.shuffleCards===!0&&(Y=[...Vu(Y)])}}).catch(function(z){console.log(z)}),await Xe.get("./settings/map.xml",{"Content-Type":"application/xml; charset=utf-8"}).then(function(z){const J={compact:!0,ignoreComment:!0,spaces:4},K=Dl.xml2js(z.data,J);let M=Roe(K);Z=M.vColsObj,r(M.mapObj)}).catch(function(z){console.log(z)}),await Xe.get("./settings/statements.xml",{"Content-Type":"application/xml; charset=utf-8"}).then(function(z){const J={compact:!0,ignoreComment:!0,spaces:4},K=Dl.xml2js(z.data,J),M=_oe(K,V,Z);M.columnStatements.imagesList=Y,o(M.columnStatements);const R=Hm(M.columnStatements);i(R),n(M)}).catch(function(z){console.log(z)}),await c(!0),await h(!1)))()},[e,t,n,o,s,a,r,c,i]),m)return l.jsx(VC,{});const T="1.0.0",P="1.1.0",N=g.langFileVersion||"",j=d.configFileVersion||"",F=p.mapFileVersion[0]||"";try{!Ei(N,`>=${T} <${P}`)&&I===!1&&(alert("The language.xml file is out-of-date. Please import the file into the Quince Configurator to update it to the newest version, then add it to your project's settings folder and try again."),k(!0)),!Ei(j,`>=${T} <${P}`)&&x===!1&&(alert("The config.xml file is out-of-date. Please import the file into the Quince Configurator to update it to the newest version, then add it to your project's settings folder and try again."),S(!0)),!Ei(F,`>=${T} <${P}`)&&y===!1&&(alert("The map.xml file is out-of-date. Please import the file into the Quince Configurator to update it to the newest version, then add it to your project's settings folder and try again."),v(!0))}catch(V){console.log("There was an error determining the settings file versions "),console.log(V)}return(d.useMobileMode===!0||d.useMobileMode==="true")&&em()?(console.log("Mobile Mode"),d.showConsentPage===!0||d.showConsentPage==="true"?l.jsx("div",{className:"App",children:l.jsxs(Sl,{children:[l.jsxs(bl,{children:[l.jsx(De,{exact:!0,path:"/",component:Qy}),l.jsx(De,{exact:!0,path:"/presort",component:ub}),l.jsx(De,{exact:!0,path:"/thin",component:mb}),l.jsx(De,{exact:!0,path:"/sort",component:Tb}),l.jsx(De,{exact:!0,path:"/postsort",component:tS}),l.jsx(De,{exact:!0,path:"/survey",component:Xb}),l.jsx(De,{exact:!0,path:"/submit",component:lS}),l.jsx(De,{exact:!0,path:"/landing",component:Il}),l.jsx(De,{component:Al})]}),l.jsx(O.Suspense,{children:l.jsx(Yy,{})})]})}):l.jsx("div",{className:"App",children:l.jsxs(Sl,{children:[l.jsxs(bl,{children:[l.jsx(De,{exact:!0,path:"/",component:Il}),l.jsx(De,{exact:!0,path:"/presort",component:ub}),l.jsx(De,{exact:!0,path:"/thin",component:mb}),l.jsx(De,{exact:!0,path:"/sort",component:Tb}),l.jsx(De,{exact:!0,path:"/postsort",component:tS}),l.jsx(De,{exact:!0,path:"/survey",component:Xb}),l.jsx(De,{exact:!0,path:"/submit",component:lS}),l.jsx(De,{component:Al})]}),l.jsx(O.Suspense,{children:l.jsx(Yy,{})})]})})):d.showConsentPage===!0||d.showConsentPage==="true"?l.jsx("div",{className:"App",children:l.jsxs(Sl,{children:[l.jsxs(bl,{children:[l.jsx(De,{exact:!0,path:"/",component:Qy}),l.jsx(De,{exact:!0,path:"/presort",component:Ox}),l.jsx(De,{exact:!0,path:"/thin",component:By}),l.jsx(De,{exact:!0,path:"/sort",component:Fx}),l.jsx(De,{exact:!0,path:"/postsort",component:C1}),l.jsx(De,{exact:!0,path:"/survey",component:Ry}),l.jsx(De,{exact:!0,path:"/submit",component:Xx}),l.jsx(De,{exact:!0,path:"/landing",component:Il}),l.jsx(De,{component:Al})]}),l.jsx(O.Suspense,{children:l.jsx(Gy,{})})]})}):l.jsx("div",{className:"App",children:l.jsxs(Sl,{children:[l.jsxs(bl,{children:[l.jsx(De,{exact:!0,path:"/",component:Il}),l.jsx(De,{exact:!0,path:"/presort",component:Ox}),l.jsx(De,{exact:!0,path:"/thin",component:By}),l.jsx(De,{exact:!0,path:"/sort",component:Fx}),l.jsx(De,{exact:!0,path:"/postsort",component:C1}),l.jsx(De,{exact:!0,path:"/survey",component:Ry}),l.jsx(De,{exact:!0,path:"/submit",component:Xx}),l.jsx(De,{component:Al})]}),l.jsx(O.Suspense,{children:l.jsx(Gy,{})})]})})}const $pe={primary:"#337ab7",secondary:"#285f8f",focus:"#63a0d4",mobileText:"#36454f",mobileBorder:"#36454f"};IC(document.getElementById("root")).render(l.jsx(O.Suspense,{fallback:l.jsx(VC,{}),children:l.jsxs(Z6,{theme:$pe,children:[l.jsx(tT,{}),l.jsx(Ppe,{})]})}));
