"use strict";(self["webpackChunkchat_room"]=self["webpackChunkchat_room"]||[]).push([[504],{743:function(t,e,n){n.d(e,{FA:function(){return R},Fy:function(){return b},Ku:function(){return U},T9:function(){return y},Uj:function(){return c},ZQ:function(){return w},bD:function(){return D},cY:function(){return v},dM:function(){return A},eX:function(){return C},g:function(){return O},nr:function(){return S},p9:function(){return F},sr:function(){return _},yU:function(){return m},zW:function(){return T}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296===(64512&i)&&r+1<t.length&&56320===(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},i=function(t){const e=[];let n=0,r=0;while(n<t.length){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(1023&c))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const e=t[i],s=i+1<t.length,o=s?t[i+1]:0,a=i+2<t.length,c=a?t[i+2]:0,l=e>>2,u=(3&e)<<4|o>>4;let h=(15&o)<<2|c>>6,f=63&c;a||(f=64,s||(h=64)),r.push(n[l],n[u],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(r(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):i(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const e=n[t.charAt(i++)],s=i<t.length,a=s?n[t.charAt(i)]:0;++i;const c=i<t.length,l=c?n[t.charAt(i)]:64;++i;const u=i<t.length,h=u?n[t.charAt(i)]:64;if(++i,null==e||null==a||null==l||null==h)throw new o;const f=e<<2|a>>4;if(r.push(f),64!==l){const t=a<<4&240|l>>2;if(r.push(t),64!==h){const t=l<<6&192|h;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(t){const e=r(t);return s.encodeByteArray(e,!0)},c=function(t){return a(t).replace(/\./g,"")},l=function(t){try{return s.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h=()=>u().__FIREBASE_DEFAULTS__,f=()=>{if("undefined"===typeof process)return;const t={NODE_ENV:"production",VUE_APP_CLI_UI_URL:"",BASE_URL:""}.__FIREBASE_DEFAULTS__;return t?JSON.parse(t):void 0},d=()=>{if("undefined"===typeof document)return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const e=t&&l(t[1]);return e&&JSON.parse(e)},p=()=>{try{return h()||f()||d()}catch(t){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`)}},g=t=>{var e,n;return null===(n=null===(e=p())||void 0===e?void 0:e.emulatorHosts)||void 0===n?void 0:n[t]},m=t=>{const e=g(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return"["===e[0]?[e.substring(1,n-1),r]:[e.substring(0,n),r]},y=()=>{var t;return null===(t=p())||void 0===t?void 0:t.config};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class v{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"===typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function E(){var t;const e=null===(t=p())||void 0===t?void 0:t.forceEnvironment;if("node"===e)return!0;if("browser"===e)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(r){return!1}}function _(){const t="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof t&&void 0!==t.id}function S(){return!E()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function T(){try{return"object"===typeof indexedDB}catch(t){return!1}}function C(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(n){e(n)}}))}function A(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I="FirebaseError";class O extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name=I,Object.setPrototypeOf(this,O.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?k(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new O(r,o,n);return a}}function k(t,e){return t.replace(x,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}const x=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(L(n)&&L(s)){if(!D(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function L(t){return null!==t&&"object"===typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N=1e3,P=2,j=144e5,M=.5;function F(t,e=N,n=P){const r=e*Math.pow(n,t),i=Math.round(M*r*(Math.random()-.5)*2);return Math.min(j,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function U(t){return t&&t._delegate?t._delegate:t}},953:function(t,e,n){n.d(e,{C4:function(){return y},EW:function(){return It},Gc:function(){return gt},IG:function(){return St},KR:function(){return xt},Kh:function(){return pt},Pr:function(){return jt},R1:function(){return Nt},X2:function(){return l},bl:function(){return v},fE:function(){return wt},g8:function(){return vt},hZ:function(){return R},i9:function(){return kt},ju:function(){return Et},o5:function(){return c},u4:function(){return O},ux:function(){return _t},yC:function(){return o}});var r=n(33);
/**
* @vue/reactivity v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let i,s;class o{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=i,!t&&i&&(this.index=(i.scopes||(i.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const e=i;try{return i=this,t()}finally{i=e}}else 0}on(){i=this}off(){i=this.parent}stop(t){if(this._active){let e,n;for(e=0,n=this.effects.length;e<n;e++)this.effects[e].stop();for(e=0,n=this.cleanups.length;e<n;e++)this.cleanups[e]();if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].stop(!0);if(!this.detached&&this.parent&&!t){const t=this.parent.scopes.pop();t&&t!==this&&(this.parent.scopes[this.index]=t,t.index=this.index)}this.parent=void 0,this._active=!1}}}function a(t,e=i){e&&e.active&&e.effects.push(t)}function c(){return i}class l{constructor(t,e,n,r){this.fn=t,this.trigger=e,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=5,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,a(this,r)}get dirty(){if(2===this._dirtyLevel)return!1;if(3===this._dirtyLevel||4===this._dirtyLevel){this._dirtyLevel=1,y();for(let t=0;t<this._depsLength;t++){const e=this.deps[t];if(e.computed){if(2===e.computed.effect._dirtyLevel)return v(),!0;if(u(e.computed),this._dirtyLevel>=5)break}}1===this._dirtyLevel&&(this._dirtyLevel=0),v()}return this._dirtyLevel>=5}set dirty(t){this._dirtyLevel=t?5:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let t=p,e=s;try{return p=!0,s=this,this._runnings++,h(this),this.fn()}finally{f(this),this._runnings--,s=e,p=t}}stop(){this.active&&(h(this),f(this),this.onStop&&this.onStop(),this.active=!1)}}function u(t){return t.value}function h(t){t._trackId++,t._depsLength=0}function f(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)d(t.deps[e],t);t.deps.length=t._depsLength}}function d(t,e){const n=t.get(e);void 0!==n&&e._trackId!==n&&(t.delete(e),0===t.size&&t.cleanup())}let p=!0,g=0;const m=[];function y(){m.push(p),p=!1}function v(){const t=m.pop();p=void 0===t||t}function b(){g++}function w(){g--;while(!g&&_.length)_.shift()()}function E(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const n=t.deps[t._depsLength];n!==e?(n&&d(n,t),t.deps[t._depsLength++]=e):t._depsLength++}}const _=[];function S(t,e,n){b();for(const r of t.keys()){let n;!t.computed&&r.computed&&r._runnings>0&&(null!=n?n:n=t.get(r)===r._trackId)?r._dirtyLevel=2:(r._dirtyLevel<e&&(null!=n?n:n=t.get(r)===r._trackId)&&(r._shouldSchedule||(r._shouldSchedule=0===r._dirtyLevel),r.computed&&2===r._dirtyLevel&&(r._shouldSchedule=!0),r._dirtyLevel=e),r._shouldSchedule&&(null!=n?n:n=t.get(r)===r._trackId)&&(r.trigger(),r._runnings&&!r.allowRecurse||3===r._dirtyLevel||(r._shouldSchedule=!1,r.scheduler&&_.push(r.scheduler))))}w()}const T=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},C=new WeakMap,A=Symbol(""),I=Symbol("");function O(t,e,n){if(p&&s){let e=C.get(t);e||C.set(t,e=new Map);let r=e.get(n);r||e.set(n,r=T((()=>e.delete(n)))),E(s,r,void 0)}}function R(t,e,n,i,s,o){const a=C.get(t);if(!a)return;let c=[];if("clear"===e)c=[...a.values()];else if("length"===n&&(0,r.cy)(t)){const t=Number(i);a.forEach(((e,n)=>{("length"===n||!(0,r.Bm)(n)&&n>=t)&&c.push(e)}))}else switch(void 0!==n&&c.push(a.get(n)),e){case"add":(0,r.cy)(t)?(0,r.yI)(n)&&c.push(a.get("length")):(c.push(a.get(A)),(0,r.CE)(t)&&c.push(a.get(I)));break;case"delete":(0,r.cy)(t)||(c.push(a.get(A)),(0,r.CE)(t)&&c.push(a.get(I)));break;case"set":(0,r.CE)(t)&&c.push(a.get(A));break}b();for(const r of c)r&&S(r,5,void 0);w()}const k=(0,r.pD)("__proto__,__v_isRef,__isVue"),x=new Set(Object.getOwnPropertyNames(Symbol).filter((t=>"arguments"!==t&&"caller"!==t)).map((t=>Symbol[t])).filter(r.Bm)),D=L();function L(){const t={};return["includes","indexOf","lastIndexOf"].forEach((e=>{t[e]=function(...t){const n=_t(this);for(let e=0,i=this.length;e<i;e++)O(n,"get",e+"");const r=n[e](...t);return-1===r||!1===r?n[e](...t.map(_t)):r}})),["push","pop","shift","unshift","splice"].forEach((e=>{t[e]=function(...t){y(),b();const n=_t(this)[e].apply(this,t);return w(),v(),n}})),t}function N(t){(0,r.Bm)(t)||(t=String(t));const e=_t(this);return O(e,"has",t),e.hasOwnProperty(t)}class P{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,n){const i=this._isReadonly,s=this._isShallow;if("__v_isReactive"===e)return!i;if("__v_isReadonly"===e)return i;if("__v_isShallow"===e)return s;if("__v_raw"===e)return n===(i?s?ht:ut:s?lt:ct).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(n)?t:void 0;const o=(0,r.cy)(t);if(!i){if(o&&(0,r.$3)(D,e))return Reflect.get(D,e,n);if("hasOwnProperty"===e)return N}const a=Reflect.get(t,e,n);return((0,r.Bm)(e)?x.has(e):k(e))?a:(i||O(t,"get",e),s?a:kt(a)?o&&(0,r.yI)(e)?a:a.value:(0,r.Gv)(a)?i?mt(a):pt(a):a)}}class j extends P{constructor(t=!1){super(!1,t)}set(t,e,n,i){let s=t[e];if(!this._isShallow){const e=bt(s);if(wt(n)||bt(n)||(s=_t(s),n=_t(n)),!(0,r.cy)(t)&&kt(s)&&!kt(n))return!e&&(s.value=n,!0)}const o=(0,r.cy)(t)&&(0,r.yI)(e)?Number(e)<t.length:(0,r.$3)(t,e),a=Reflect.set(t,e,n,i);return t===_t(i)&&(o?(0,r.$H)(n,s)&&R(t,"set",e,n,s):R(t,"add",e,n)),a}deleteProperty(t,e){const n=(0,r.$3)(t,e),i=t[e],s=Reflect.deleteProperty(t,e);return s&&n&&R(t,"delete",e,void 0,i),s}has(t,e){const n=Reflect.has(t,e);return(0,r.Bm)(e)&&x.has(e)||O(t,"has",e),n}ownKeys(t){return O(t,"iterate",(0,r.cy)(t)?"length":A),Reflect.ownKeys(t)}}class M extends P{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const F=new j,U=new M,B=new j(!0),$=t=>t,V=t=>Reflect.getPrototypeOf(t);function H(t,e,n=!1,i=!1){t=t["__v_raw"];const s=_t(t),o=_t(e);n||((0,r.$H)(e,o)&&O(s,"get",e),O(s,"get",o));const{has:a}=V(s),c=i?$:n?Ct:Tt;return a.call(s,e)?c(t.get(e)):a.call(s,o)?c(t.get(o)):void(t!==s&&t.get(e))}function z(t,e=!1){const n=this["__v_raw"],i=_t(n),s=_t(t);return e||((0,r.$H)(t,s)&&O(i,"has",t),O(i,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function K(t,e=!1){return t=t["__v_raw"],!e&&O(_t(t),"iterate",A),Reflect.get(t,"size",t)}function q(t){t=_t(t);const e=_t(this),n=V(e),r=n.has.call(e,t);return r||(e.add(t),R(e,"add",t,t)),this}function G(t,e){e=_t(e);const n=_t(this),{has:i,get:s}=V(n);let o=i.call(n,t);o||(t=_t(t),o=i.call(n,t));const a=s.call(n,t);return n.set(t,e),o?(0,r.$H)(e,a)&&R(n,"set",t,e,a):R(n,"add",t,e),this}function W(t){const e=_t(this),{has:n,get:r}=V(e);let i=n.call(e,t);i||(t=_t(t),i=n.call(e,t));const s=r?r.call(e,t):void 0,o=e.delete(t);return i&&R(e,"delete",t,void 0,s),o}function X(){const t=_t(this),e=0!==t.size,n=void 0,r=t.clear();return e&&R(t,"clear",void 0,void 0,n),r}function J(t,e){return function(n,r){const i=this,s=i["__v_raw"],o=_t(s),a=e?$:t?Ct:Tt;return!t&&O(o,"iterate",A),s.forEach(((t,e)=>n.call(r,a(t),a(e),i)))}}function Y(t,e,n){return function(...i){const s=this["__v_raw"],o=_t(s),a=(0,r.CE)(o),c="entries"===t||t===Symbol.iterator&&a,l="keys"===t&&a,u=s[t](...i),h=n?$:e?Ct:Tt;return!e&&O(o,"iterate",l?I:A),{next(){const{value:t,done:e}=u.next();return e?{value:t,done:e}:{value:c?[h(t[0]),h(t[1])]:h(t),done:e}},[Symbol.iterator](){return this}}}}function Z(t){return function(...e){return"delete"!==t&&("clear"===t?void 0:this)}}function Q(){const t={get(t){return H(this,t)},get size(){return K(this)},has:z,add:q,set:G,delete:W,clear:X,forEach:J(!1,!1)},e={get(t){return H(this,t,!1,!0)},get size(){return K(this)},has:z,add:q,set:G,delete:W,clear:X,forEach:J(!1,!0)},n={get(t){return H(this,t,!0)},get size(){return K(this,!0)},has(t){return z.call(this,t,!0)},add:Z("add"),set:Z("set"),delete:Z("delete"),clear:Z("clear"),forEach:J(!0,!1)},r={get(t){return H(this,t,!0,!0)},get size(){return K(this,!0)},has(t){return z.call(this,t,!0)},add:Z("add"),set:Z("set"),delete:Z("delete"),clear:Z("clear"),forEach:J(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{t[i]=Y(i,!1,!1),n[i]=Y(i,!0,!1),e[i]=Y(i,!1,!0),r[i]=Y(i,!0,!0)})),[t,n,e,r]}const[tt,et,nt,rt]=Q();function it(t,e){const n=e?t?rt:nt:t?et:tt;return(e,i,s)=>"__v_isReactive"===i?!t:"__v_isReadonly"===i?t:"__v_raw"===i?e:Reflect.get((0,r.$3)(n,i)&&i in e?n:e,i,s)}const st={get:it(!1,!1)},ot={get:it(!1,!0)},at={get:it(!0,!1)};const ct=new WeakMap,lt=new WeakMap,ut=new WeakMap,ht=new WeakMap;function ft(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function dt(t){return t["__v_skip"]||!Object.isExtensible(t)?0:ft((0,r.Zf)(t))}function pt(t){return bt(t)?t:yt(t,!1,F,st,ct)}function gt(t){return yt(t,!1,B,ot,lt)}function mt(t){return yt(t,!0,U,at,ut)}function yt(t,e,n,i,s){if(!(0,r.Gv)(t))return t;if(t["__v_raw"]&&(!e||!t["__v_isReactive"]))return t;const o=s.get(t);if(o)return o;const a=dt(t);if(0===a)return t;const c=new Proxy(t,2===a?i:n);return s.set(t,c),c}function vt(t){return bt(t)?vt(t["__v_raw"]):!(!t||!t["__v_isReactive"])}function bt(t){return!(!t||!t["__v_isReadonly"])}function wt(t){return!(!t||!t["__v_isShallow"])}function Et(t){return!!t&&!!t["__v_raw"]}function _t(t){const e=t&&t["__v_raw"];return e?_t(e):t}function St(t){return Object.isExtensible(t)&&(0,r.yQ)(t,"__v_skip",!0),t}const Tt=t=>(0,r.Gv)(t)?pt(t):t,Ct=t=>(0,r.Gv)(t)?mt(t):t;class At{constructor(t,e,n,r){this.getter=t,this._setter=e,this.dep=void 0,this.__v_isRef=!0,this["__v_isReadonly"]=!1,this.effect=new l((()=>t(this._value)),(()=>Rt(this,3===this.effect._dirtyLevel?3:4))),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const t=_t(this),e=t.effect._dirtyLevel;return t._cacheable&&!t.effect.dirty||!(0,r.$H)(t._value,t._value=t.effect.run())||3!==e&&Rt(t,5),Ot(t),t.effect._dirtyLevel>=2&&Rt(t,3),t._value}set value(t){this._setter(t)}get _dirty(){return this.effect.dirty}set _dirty(t){this.effect.dirty=t}}function It(t,e,n=!1){let i,s;const o=(0,r.Tn)(t);o?(i=t,s=r.tE):(i=t.get,s=t.set);const a=new At(i,s,o||!s,n);return a}function Ot(t){var e;p&&s&&(t=_t(t),E(s,null!=(e=t.dep)?e:t.dep=T((()=>t.dep=void 0),t instanceof At?t:void 0),void 0))}function Rt(t,e=5,n,r){t=_t(t);const i=t.dep;i&&S(i,e,void 0)}function kt(t){return!(!t||!0!==t.__v_isRef)}function xt(t){return Dt(t,!1)}function Dt(t,e){return kt(t)?t:new Lt(t,e)}class Lt{constructor(t,e){this.__v_isShallow=e,this.dep=void 0,this.__v_isRef=!0,this._rawValue=e?t:_t(t),this._value=e?t:Tt(t)}get value(){return Ot(this),this._value}set value(t){const e=this.__v_isShallow||wt(t)||bt(t);if(t=e?t:_t(t),(0,r.$H)(t,this._rawValue)){const n=this._rawValue;this._rawValue=t,this._value=e?t:Tt(t),Rt(this,5,t,n)}}}function Nt(t){return kt(t)?t.value:t}const Pt={get:(t,e,n)=>Nt(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const i=t[e];return kt(i)&&!kt(n)?(i.value=n,!0):Reflect.set(t,e,n,r)}};function jt(t){return vt(t)?t:new Proxy(t,Pt)}},641:function(t,e,n){n.d(e,{$u:function(){return J},CE:function(){return Ze},Df:function(){return Ue},FK:function(){return $e},Gy:function(){return Oe},K9:function(){return ee},Lk:function(){return sn},MZ:function(){return Fe},OW:function(){return Pe},Q3:function(){return hn},QP:function(){return ke},Wv:function(){return Qe},bF:function(){return on},bo:function(){return rt},dY:function(){return v},h:function(){return Bn},nI:function(){return En},pI:function(){return st},pR:function(){return Le},qL:function(){return o},sV:function(){return W},uX:function(){return Ge},wB:function(){return de}});var r=n(953),i=n(33);function s(t,e,n,r){try{return r?t(...r):t()}catch(i){a(i,e,n)}}function o(t,e,n,r){if((0,i.Tn)(t)){const o=s(t,e,n,r);return o&&(0,i.yL)(o)&&o.catch((t=>{a(t,e,n)})),o}if((0,i.cy)(t)){const i=[];for(let s=0;s<t.length;s++)i.push(o(t[s],e,n,r));return i}}function a(t,e,n,i=!0){const o=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;while(i){const e=i.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,a))return;i=i.parent}const c=e.appContext.config.errorHandler;if(c)return(0,r.C4)(),s(c,null,10,[t,o,a]),void(0,r.bl)()}c(t,n,o,i)}function c(t,e,n,r=!0){console.error(t)}let l=!1,u=!1;const h=[];let f=0;const d=[];let p=null,g=0;const m=Promise.resolve();let y=null;function v(t){const e=y||m;return t?e.then(this?t.bind(this):t):e}function b(t){let e=f+1,n=h.length;while(e<n){const r=e+n>>>1,i=h[r],s=A(i);s<t||s===t&&i.pre?e=r+1:n=r}return e}function w(t){h.length&&h.includes(t,l&&t.allowRecurse?f+1:f)||(null==t.id?h.push(t):h.splice(b(t.id),0,t),E())}function E(){l||u||(u=!0,y=m.then(O))}function _(t){const e=h.indexOf(t);e>f&&h.splice(e,1)}function S(t){(0,i.cy)(t)?d.push(...t):p&&p.includes(t,t.allowRecurse?g+1:g)||d.push(t),E()}function T(t,e,n=(l?f+1:0)){for(0;n<h.length;n++){const e=h[n];if(e&&e.pre){if(t&&e.id!==t.uid)continue;0,h.splice(n,1),n--,e()}}}function C(t){if(d.length){const t=[...new Set(d)].sort(((t,e)=>A(t)-A(e)));if(d.length=0,p)return void p.push(...t);for(p=t,g=0;g<p.length;g++){const t=p[g];0,!1!==t.active&&t()}p=null,g=0}}const A=t=>null==t.id?1/0:t.id,I=(t,e)=>{const n=A(t)-A(e);if(0===n){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function O(t){u=!1,l=!0,h.sort(I);i.tE;try{for(f=0;f<h.length;f++){const t=h[f];t&&!1!==t.active&&s(t,null,14)}}finally{f=0,h.length=0,C(t),l=!1,y=null,(h.length||d.length)&&O(t)}}function R(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||i.MZ;let s=n;const a=e.startsWith("update:"),c=a&&e.slice(7);if(c&&c in r){const t=`${"modelValue"===c?"model":c}Modifiers`,{number:e,trim:o}=r[t]||i.MZ;o&&(s=n.map((t=>(0,i.Kg)(t)?t.trim():t))),e&&(s=n.map(i.bB))}let l;let u=r[l=(0,i.rU)(e)]||r[l=(0,i.rU)((0,i.PT)(e))];!u&&a&&(u=r[l=(0,i.rU)((0,i.Tg)(e))]),u&&o(u,t,6,s);const h=r[l+"Once"];if(h){if(t.emitted){if(t.emitted[l])return}else t.emitted={};t.emitted[l]=!0,o(h,t,6,s)}}function k(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(void 0!==s)return s;const o=t.emits;let a={},c=!1;if(!(0,i.Tn)(t)){const r=t=>{const n=k(t,e,!0);n&&(c=!0,(0,i.X$)(a,n))};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}return o||c?((0,i.cy)(o)?o.forEach((t=>a[t]=null)):(0,i.X$)(a,o),(0,i.Gv)(t)&&r.set(t,a),a):((0,i.Gv)(t)&&r.set(t,null),null)}function x(t,e){return!(!t||!(0,i.Mp)(e))&&(e=e.slice(2).replace(/Once$/,""),(0,i.$3)(t,e[0].toLowerCase()+e.slice(1))||(0,i.$3)(t,(0,i.Tg)(e))||(0,i.$3)(t,e))}let D=null,L=null;function N(t){const e=D;return D=t,L=t&&t.type.__scopeId||null,e}function P(t,e=D,n){if(!e)return t;if(t._n)return t;const r=(...n)=>{r._d&&Je(-1);const i=N(e);let s;try{s=t(...n)}finally{N(i),r._d&&Je(1)}return s};return r._n=!0,r._c=!0,r._d=!0,r}function j(t){const{type:e,vnode:n,proxy:r,withProxy:s,propsOptions:[o],slots:c,attrs:l,emit:u,render:h,renderCache:f,props:d,data:p,setupState:g,ctx:m,inheritAttrs:y}=t,v=N(t);let b,w;try{if(4&n.shapeFlag){const t=s||r,e=t;b=fn(h.call(e,t,f,d,g,p,m)),w=l}else{const t=e;0,b=fn(t.length>1?t(d,{attrs:l,slots:c,emit:u}):t(d,null)),w=e.props?l:M(l)}}catch(_){Ke.length=0,a(_,t,1),b=on(He)}let E=b;if(w&&!1!==y){const t=Object.keys(w),{shapeFlag:e}=E;t.length&&7&e&&(o&&t.some(i.CP)&&(w=F(w,o)),E=ln(E,w,!1,!0))}return n.dirs&&(E=ln(E,null,!1,!0),E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),b=E,N(v),b}const M=t=>{let e;for(const n in t)("class"===n||"style"===n||(0,i.Mp)(n))&&((e||(e={}))[n]=t[n]);return e},F=(t,e)=>{const n={};for(const r in t)(0,i.CP)(r)&&r.slice(9)in e||(n[r]=t[r]);return n};function U(t,e,n){const{props:r,children:i,component:s}=t,{props:o,children:a,patchFlag:c}=e,l=s.emitsOptions;if(e.dirs||e.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||B(r,o,l):!!o);if(1024&c)return!0;if(16&c)return r?B(r,o,l):!!o;if(8&c){const t=e.dynamicProps;for(let e=0;e<t.length;e++){const n=t[e];if(o[n]!==r[n]&&!x(l,n))return!0}}return!1}function B(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(e[s]!==t[s]&&!x(n,s))return!0}return!1}function $({vnode:t,parent:e},n){while(e){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r!==t)break;(t=e.vnode).el=n,e=e.parent}}const V=Symbol.for("v-ndc");const H=t=>t.__isSuspense;function z(t,e){e&&e.pendingBranch?(0,i.cy)(t)?e.effects.push(...t):e.effects.push(t):S(t)}function K(t,e,n=wn,i=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...i)=>{(0,r.C4)();const s=Tn(n),a=o(e,n,t,i);return s(),(0,r.bl)(),a});return i?s.unshift(a):s.push(a),a}}const q=t=>(e,n=wn)=>{Rn&&"sp"!==t||K(t,((...t)=>e(...t)),n)},G=q("bm"),W=q("m"),X=q("bu"),J=q("u"),Y=q("bum"),Z=q("um"),Q=q("sp"),tt=q("rtg"),et=q("rtc");function nt(t,e=wn){K("ec",t,e)}function rt(t,e){if(null===D)return t;const n=jn(D),r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[t,o,a,c=i.MZ]=e[s];t&&((0,i.Tn)(t)&&(t={mounted:t,updated:t}),t.deep&&ye(o),r.push({dir:t,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function it(t,e,n,i){const s=t.dirs,a=e&&e.dirs;for(let c=0;c<s.length;c++){const l=s[c];a&&(l.oldValue=a[c].value);let u=l.dir[i];u&&((0,r.C4)(),o(u,n,8,[t.el,l,t,e]),(0,r.bl)())}}function st(t,e,n,r){let s;const o=n&&n[r];if((0,i.cy)(t)||(0,i.Kg)(t)){s=new Array(t.length);for(let n=0,r=t.length;n<r;n++)s[n]=e(t[n],n,void 0,o&&o[n])}else if("number"===typeof t){0,s=new Array(t);for(let n=0;n<t;n++)s[n]=e(n+1,n,void 0,o&&o[n])}else if((0,i.Gv)(t))if(t[Symbol.iterator])s=Array.from(t,((t,n)=>e(t,n,void 0,o&&o[n])));else{const n=Object.keys(t);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=e(t[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const ot=t=>!!t.type.__asyncLoader
/*! #__NO_SIDE_EFFECTS__ */;const at=t=>t?An(t)?jn(t):at(t.parent):null,ct=(0,i.X$)(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>at(t.parent),$root:t=>at(t.root),$emit:t=>t.emit,$options:t=>yt(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,w(t.update)}),$nextTick:t=>t.n||(t.n=v.bind(t.proxy)),$watch:t=>ge.bind(t)}),lt=(t,e)=>t!==i.MZ&&!t.__isScriptSetup&&(0,i.$3)(t,e),ut={get({_:t},e){if("__v_skip"===e)return!0;const{ctx:n,setupState:s,data:o,props:a,accessCache:c,type:l,appContext:u}=t;let h;if("$"!==e[0]){const r=c[e];if(void 0!==r)switch(r){case 1:return s[e];case 2:return o[e];case 4:return n[e];case 3:return a[e]}else{if(lt(s,e))return c[e]=1,s[e];if(o!==i.MZ&&(0,i.$3)(o,e))return c[e]=2,o[e];if((h=t.propsOptions[0])&&(0,i.$3)(h,e))return c[e]=3,a[e];if(n!==i.MZ&&(0,i.$3)(n,e))return c[e]=4,n[e];ft&&(c[e]=0)}}const f=ct[e];let d,p;return f?("$attrs"===e&&(0,r.u4)(t.attrs,"get",""),f(t)):(d=l.__cssModules)&&(d=d[e])?d:n!==i.MZ&&(0,i.$3)(n,e)?(c[e]=4,n[e]):(p=u.config.globalProperties,(0,i.$3)(p,e)?p[e]:void 0)},set({_:t},e,n){const{data:r,setupState:s,ctx:o}=t;return lt(s,e)?(s[e]=n,!0):r!==i.MZ&&(0,i.$3)(r,e)?(r[e]=n,!0):!(0,i.$3)(t.props,e)&&(("$"!==e[0]||!(e.slice(1)in t))&&(o[e]=n,!0))},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let c;return!!n[a]||t!==i.MZ&&(0,i.$3)(t,a)||lt(e,a)||(c=o[0])&&(0,i.$3)(c,a)||(0,i.$3)(r,a)||(0,i.$3)(ct,a)||(0,i.$3)(s.config.globalProperties,a)},defineProperty(t,e,n){return null!=n.get?t._.accessCache[e]=0:(0,i.$3)(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ht(t){return(0,i.cy)(t)?t.reduce(((t,e)=>(t[e]=null,t)),{}):t}let ft=!0;function dt(t){const e=yt(t),n=t.proxy,s=t.ctx;ft=!1,e.beforeCreate&&gt(e.beforeCreate,t,"bc");const{data:o,computed:a,methods:c,watch:l,provide:u,inject:h,created:f,beforeMount:d,mounted:p,beforeUpdate:g,updated:m,activated:y,deactivated:v,beforeDestroy:b,beforeUnmount:w,destroyed:E,unmounted:_,render:S,renderTracked:T,renderTriggered:C,errorCaptured:A,serverPrefetch:I,expose:O,inheritAttrs:R,components:k,directives:x,filters:D}=e,L=null;if(h&&pt(h,s,L),c)for(const r in c){const t=c[r];(0,i.Tn)(t)&&(s[r]=t.bind(n))}if(o){0;const e=o.call(n,n);0,(0,i.Gv)(e)&&(t.data=(0,r.Kh)(e))}if(ft=!0,a)for(const r in a){const t=a[r],e=(0,i.Tn)(t)?t.bind(n,n):(0,i.Tn)(t.get)?t.get.bind(n,n):i.tE;0;const o=!(0,i.Tn)(t)&&(0,i.Tn)(t.set)?t.set.bind(n):i.tE,c=Un({get:e,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>c.value,set:t=>c.value=t})}if(l)for(const r in l)mt(l[r],s,n,r);if(u){const t=(0,i.Tn)(u)?u.call(n):u;Reflect.ownKeys(t).forEach((e=>{xt(e,t[e])}))}function N(t,e){(0,i.cy)(e)?e.forEach((e=>t(e.bind(n)))):e&&t(e.bind(n))}if(f&&gt(f,t,"c"),N(G,d),N(W,p),N(X,g),N(J,m),N(we,y),N(Ee,v),N(nt,A),N(et,T),N(tt,C),N(Y,w),N(Z,_),N(Q,I),(0,i.cy)(O))if(O.length){const e=t.exposed||(t.exposed={});O.forEach((t=>{Object.defineProperty(e,t,{get:()=>n[t],set:e=>n[t]=e})}))}else t.exposed||(t.exposed={});S&&t.render===i.tE&&(t.render=S),null!=R&&(t.inheritAttrs=R),k&&(t.components=k),x&&(t.directives=x)}function pt(t,e,n=i.tE){(0,i.cy)(t)&&(t=_t(t));for(const s in t){const n=t[s];let o;o=(0,i.Gv)(n)?"default"in n?Dt(n.from||s,n.default,!0):Dt(n.from||s):Dt(n),(0,r.i9)(o)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:t=>o.value=t}):e[s]=o}}function gt(t,e,n){o((0,i.cy)(t)?t.map((t=>t.bind(e.proxy))):t.bind(e.proxy),e,n)}function mt(t,e,n,r){const s=r.includes(".")?me(n,r):()=>n[r];if((0,i.Kg)(t)){const n=e[t];(0,i.Tn)(n)&&de(s,n)}else if((0,i.Tn)(t))de(s,t.bind(n));else if((0,i.Gv)(t))if((0,i.cy)(t))t.forEach((t=>mt(t,e,n,r)));else{const r=(0,i.Tn)(t.handler)?t.handler.bind(n):e[t.handler];(0,i.Tn)(r)&&de(s,r,t)}else 0}function yt(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:o,config:{optionMergeStrategies:a}}=t.appContext,c=o.get(e);let l;return c?l=c:s.length||n||r?(l={},s.length&&s.forEach((t=>vt(l,t,a,!0))),vt(l,e,a)):l=e,(0,i.Gv)(e)&&o.set(e,l),l}function vt(t,e,n,r=!1){const{mixins:i,extends:s}=e;s&&vt(t,s,n,!0),i&&i.forEach((e=>vt(t,e,n,!0)));for(const o in e)if(r&&"expose"===o);else{const r=bt[o]||n&&n[o];t[o]=r?r(t[o],e[o]):e[o]}return t}const bt={data:wt,props:Ct,emits:Ct,methods:Tt,computed:Tt,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Tt,directives:Tt,watch:At,provide:wt,inject:Et};function wt(t,e){return e?t?function(){return(0,i.X$)((0,i.Tn)(t)?t.call(this,this):t,(0,i.Tn)(e)?e.call(this,this):e)}:e:t}function Et(t,e){return Tt(_t(t),_t(e))}function _t(t){if((0,i.cy)(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function St(t,e){return t?[...new Set([].concat(t,e))]:e}function Tt(t,e){return t?(0,i.X$)(Object.create(null),t,e):e}function Ct(t,e){return t?(0,i.cy)(t)&&(0,i.cy)(e)?[...new Set([...t,...e])]:(0,i.X$)(Object.create(null),ht(t),ht(null!=e?e:{})):e}function At(t,e){if(!t)return e;if(!e)return t;const n=(0,i.X$)(Object.create(null),t);for(const r in e)n[r]=St(t[r],e[r]);return n}function It(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Ot=0;function Rt(t,e){return function(n,r=null){(0,i.Tn)(n)||(n=(0,i.X$)({},n)),null==r||(0,i.Gv)(r)||(r=null);const s=It(),o=new WeakSet;let a=!1;const c=s.app={_uid:Ot++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:$n,get config(){return s.config},set config(t){0},use(t,...e){return o.has(t)||(t&&(0,i.Tn)(t.install)?(o.add(t),t.install(c,...e)):(0,i.Tn)(t)&&(o.add(t),t(c,...e))),c},mixin(t){return s.mixins.includes(t)||s.mixins.push(t),c},component(t,e){return e?(s.components[t]=e,c):s.components[t]},directive(t,e){return e?(s.directives[t]=e,c):s.directives[t]},mount(i,o,l){if(!a){0;const u=on(n,r);return u.appContext=s,!0===l?l="svg":!1===l&&(l=void 0),o&&e?e(u,i):t(u,i,l),a=!0,c._container=i,i.__vue_app__=c,jn(u.component)}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(t,e){return s.provides[t]=e,c},runWithContext(t){const e=kt;kt=c;try{return t()}finally{kt=e}}};return c}}let kt=null;function xt(t,e){if(wn){let n=wn.provides;const r=wn.parent&&wn.parent.provides;r===n&&(n=wn.provides=Object.create(r)),n[t]=e}else 0}function Dt(t,e,n=!1){const r=wn||D;if(r||kt){const s=r?null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:kt._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&(0,i.Tn)(e)?e.call(r&&r.proxy):e}else 0}const Lt={},Nt=()=>Object.create(Lt),Pt=t=>Object.getPrototypeOf(t)===Lt;function jt(t,e,n,i=!1){const s={},o=Nt();t.propsDefaults=Object.create(null),Ft(t,e,s,o);for(const r in t.propsOptions[0])r in s||(s[r]=void 0);n?t.props=i?s:(0,r.Gc)(s):t.type.props?t.props=s:t.props=o,t.attrs=o}function Mt(t,e,n,s){const{props:o,attrs:a,vnode:{patchFlag:c}}=t,l=(0,r.ux)(o),[u]=t.propsOptions;let h=!1;if(!(s||c>0)||16&c){let r;Ft(t,e,o,a)&&(h=!0);for(const s in l)e&&((0,i.$3)(e,s)||(r=(0,i.Tg)(s))!==s&&(0,i.$3)(e,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=Ut(u,l,s,void 0,t,!0)):delete o[s]);if(a!==l)for(const t in a)e&&(0,i.$3)(e,t)||(delete a[t],h=!0)}else if(8&c){const n=t.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(x(t.emitsOptions,s))continue;const c=e[s];if(u)if((0,i.$3)(a,s))c!==a[s]&&(a[s]=c,h=!0);else{const e=(0,i.PT)(s);o[e]=Ut(u,l,e,c,t,!1)}else c!==a[s]&&(a[s]=c,h=!0)}}h&&(0,r.hZ)(t.attrs,"set","")}function Ft(t,e,n,s){const[o,a]=t.propsOptions;let c,l=!1;if(e)for(let r in e){if((0,i.SU)(r))continue;const u=e[r];let h;o&&(0,i.$3)(o,h=(0,i.PT)(r))?a&&a.includes(h)?(c||(c={}))[h]=u:n[h]=u:x(t.emitsOptions,r)||r in s&&u===s[r]||(s[r]=u,l=!0)}if(a){const e=(0,r.ux)(n),s=c||i.MZ;for(let r=0;r<a.length;r++){const c=a[r];n[c]=Ut(o,e,c,s[c],t,!(0,i.$3)(s,c))}}return l}function Ut(t,e,n,r,s,o){const a=t[n];if(null!=a){const t=(0,i.$3)(a,"default");if(t&&void 0===r){const t=a.default;if(a.type!==Function&&!a.skipFactory&&(0,i.Tn)(t)){const{propsDefaults:i}=s;if(n in i)r=i[n];else{const o=Tn(s);r=i[n]=t.call(null,e),o()}}else r=t}a[0]&&(o&&!t?r=!1:!a[1]||""!==r&&r!==(0,i.Tg)(n)||(r=!0))}return r}function Bt(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const o=t.props,a={},c=[];let l=!1;if(!(0,i.Tn)(t)){const r=t=>{l=!0;const[n,r]=Bt(t,e,!0);(0,i.X$)(a,n),r&&c.push(...r)};!n&&e.mixins.length&&e.mixins.forEach(r),t.extends&&r(t.extends),t.mixins&&t.mixins.forEach(r)}if(!o&&!l)return(0,i.Gv)(t)&&r.set(t,i.Oj),i.Oj;if((0,i.cy)(o))for(let h=0;h<o.length;h++){0;const t=(0,i.PT)(o[h]);$t(t)&&(a[t]=i.MZ)}else if(o){0;for(const t in o){const e=(0,i.PT)(t);if($t(e)){const n=o[t],r=a[e]=(0,i.cy)(n)||(0,i.Tn)(n)?{type:n}:(0,i.X$)({},n);if(r){const t=zt(Boolean,r.type),n=zt(String,r.type);r[0]=t>-1,r[1]=n<0||t<n,(t>-1||(0,i.$3)(r,"default"))&&c.push(e)}}}}const u=[a,c];return(0,i.Gv)(t)&&r.set(t,u),u}function $t(t){return"$"!==t[0]&&!(0,i.SU)(t)}function Vt(t){if(null===t)return"null";if("function"===typeof t)return t.name||"";if("object"===typeof t){const e=t.constructor&&t.constructor.name;return e||""}return""}function Ht(t,e){return Vt(t)===Vt(e)}function zt(t,e){return(0,i.cy)(e)?e.findIndex((e=>Ht(e,t))):(0,i.Tn)(e)&&Ht(e,t)?0:-1}const Kt=t=>"_"===t[0]||"$stable"===t,qt=t=>(0,i.cy)(t)?t.map(fn):[fn(t)],Gt=(t,e,n)=>{if(e._n)return e;const r=P(((...t)=>qt(e(...t))),n);return r._c=!1,r},Wt=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Kt(s))continue;const n=t[s];if((0,i.Tn)(n))e[s]=Gt(s,n,r);else if(null!=n){0;const t=qt(n);e[s]=()=>t}}},Xt=(t,e)=>{const n=qt(e);t.slots.default=()=>n},Jt=(t,e)=>{const n=t.slots=Nt();if(32&t.vnode.shapeFlag){const t=e._;t?((0,i.X$)(n,e),(0,i.yQ)(n,"_",t,!0)):Wt(e,n)}else e&&Xt(t,e)},Yt=(t,e,n)=>{const{vnode:r,slots:s}=t;let o=!0,a=i.MZ;if(32&r.shapeFlag){const t=e._;t?n&&1===t?o=!1:((0,i.X$)(s,e),n||1!==t||delete s._):(o=!e.$stable,Wt(e,s)),a=e}else e&&(Xt(t,e),a={default:1});if(o)for(const i in s)Kt(i)||null!=a[i]||delete s[i]};function Zt(t,e,n,o,a=!1){if((0,i.cy)(t))return void t.forEach(((t,r)=>Zt(t,e&&((0,i.cy)(e)?e[r]:e),n,o,a)));if(ot(o)&&!a)return;const c=4&o.shapeFlag?jn(o.component):o.el,l=a?null:c,{i:u,r:h}=t;const f=e&&e.r,d=u.refs===i.MZ?u.refs={}:u.refs,p=u.setupState;if(null!=f&&f!==h&&((0,i.Kg)(f)?(d[f]=null,(0,i.$3)(p,f)&&(p[f]=null)):(0,r.i9)(f)&&(f.value=null)),(0,i.Tn)(h))s(h,u,12,[l,d]);else{const e=(0,i.Kg)(h),s=(0,r.i9)(h);if(e||s){const r=()=>{if(t.f){const n=e?(0,i.$3)(p,h)?p[h]:d[h]:h.value;a?(0,i.cy)(n)&&(0,i.TF)(n,c):(0,i.cy)(n)?n.includes(c)||n.push(c):e?(d[h]=[c],(0,i.$3)(p,h)&&(p[h]=d[h])):(h.value=[c],t.k&&(d[t.k]=h.value))}else e?(d[h]=l,(0,i.$3)(p,h)&&(p[h]=l)):s&&(h.value=l,t.k&&(d[t.k]=l))};l?(r.id=-1,te(r,n)):r()}else 0}}function Qt(){"boolean"!==typeof __VUE_PROD_HYDRATION_MISMATCH_DETAILS__&&((0,i.We)().__VUE_PROD_HYDRATION_MISMATCH_DETAILS__=!1)}const te=z;function ee(t){return ne(t)}function ne(t,e){Qt();const n=(0,i.We)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:c,createText:l,createComment:u,setText:h,setElementText:f,parentNode:d,nextSibling:p,setScopeId:g=i.tE,insertStaticContent:m}=t,y=(t,e,n,r=null,i=null,s=null,o=void 0,a=null,c=!!e.dynamicChildren)=>{if(t===e)return;t&&!en(t,e)&&(r=Z(t),G(t,i,s,!0),t=null),-2===e.patchFlag&&(c=!1,e.dynamicChildren=null);const{type:l,ref:u,shapeFlag:h}=e;switch(l){case Ve:v(t,e,n,r);break;case He:b(t,e,n,r);break;case ze:null==t&&E(e,n,r,o);break;case $e:N(t,e,n,r,i,s,o,a,c);break;default:1&h?I(t,e,n,r,i,s,o,a,c):6&h?P(t,e,n,r,i,s,o,a,c):(64&h||128&h)&&l.process(t,e,n,r,i,s,o,a,c,et)}null!=u&&i&&Zt(u,t&&t.ref,s,e||t,!e)},v=(t,e,n,r)=>{if(null==t)s(e.el=l(e.children),n,r);else{const n=e.el=t.el;e.children!==t.children&&h(n,e.children)}},b=(t,e,n,r)=>{null==t?s(e.el=u(e.children||""),n,r):e.el=t.el},E=(t,e,n,r)=>{[t.el,t.anchor]=m(t.children,e,n,r,t.el,t.anchor)},S=({el:t,anchor:e},n,r)=>{let i;while(t&&t!==e)i=p(t),s(t,n,r),t=i;s(e,n,r)},A=({el:t,anchor:e})=>{let n;while(t&&t!==e)n=p(t),o(t),t=n;o(e)},I=(t,e,n,r,i,s,o,a,c)=>{"svg"===e.type?o="svg":"math"===e.type&&(o="mathml"),null==t?O(e,n,r,i,s,o,a,c):x(t,e,i,s,o,a,c)},O=(t,e,n,r,o,l,u,h)=>{let d,p;const{props:g,shapeFlag:m,transition:y,dirs:v}=t;if(d=t.el=c(t.type,l,g&&g.is,g),8&m?f(d,t.children):16&m&&k(t.children,d,null,r,o,re(t,l),u,h),v&&it(t,null,r,"created"),R(d,t,t.scopeId,u,r),g){for(const e in g)"value"===e||(0,i.SU)(e)||a(d,e,null,g[e],l,t.children,r,o,Y);"value"in g&&a(d,"value",null,g.value,l),(p=g.onVnodeBeforeMount)&&mn(p,r,t)}v&&it(t,null,r,"beforeMount");const b=se(o,y);b&&y.beforeEnter(d),s(d,e,n),((p=g&&g.onVnodeMounted)||b||v)&&te((()=>{p&&mn(p,r,t),b&&y.enter(d),v&&it(t,null,r,"mounted")}),o)},R=(t,e,n,r,i)=>{if(n&&g(t,n),r)for(let s=0;s<r.length;s++)g(t,r[s]);if(i){let n=i.subTree;if(e===n){const e=i.vnode;R(t,e,e.scopeId,e.slotScopeIds,i.parent)}}},k=(t,e,n,r,i,s,o,a,c=0)=>{for(let l=c;l<t.length;l++){const c=t[l]=a?dn(t[l]):fn(t[l]);y(null,c,e,n,r,i,s,o,a)}},x=(t,e,n,r,s,o,c)=>{const l=e.el=t.el;let{patchFlag:u,dynamicChildren:h,dirs:d}=e;u|=16&t.patchFlag;const p=t.props||i.MZ,g=e.props||i.MZ;let m;if(n&&ie(n,!1),(m=g.onVnodeBeforeUpdate)&&mn(m,n,e,t),d&&it(e,t,n,"beforeUpdate"),n&&ie(n,!0),h?D(t.dynamicChildren,h,l,n,r,re(e,s),o):c||H(t,e,l,null,n,r,re(e,s),o,!1),u>0){if(16&u)L(l,e,p,g,n,r,s);else if(2&u&&p.class!==g.class&&a(l,"class",null,g.class,s),4&u&&a(l,"style",p.style,g.style,s),8&u){const i=e.dynamicProps;for(let e=0;e<i.length;e++){const o=i[e],c=p[o],u=g[o];u===c&&"value"!==o||a(l,o,c,u,s,t.children,n,r,Y)}}1&u&&t.children!==e.children&&f(l,e.children)}else c||null!=h||L(l,e,p,g,n,r,s);((m=g.onVnodeUpdated)||d)&&te((()=>{m&&mn(m,n,e,t),d&&it(e,t,n,"updated")}),r)},D=(t,e,n,r,i,s,o)=>{for(let a=0;a<e.length;a++){const c=t[a],l=e[a],u=c.el&&(c.type===$e||!en(c,l)||70&c.shapeFlag)?d(c.el):n;y(c,l,u,null,r,i,s,o,!0)}},L=(t,e,n,r,s,o,c)=>{if(n!==r){if(n!==i.MZ)for(const l in n)(0,i.SU)(l)||l in r||a(t,l,n[l],null,c,e.children,s,o,Y);for(const l in r){if((0,i.SU)(l))continue;const u=r[l],h=n[l];u!==h&&"value"!==l&&a(t,l,h,u,c,e.children,s,o,Y)}"value"in r&&a(t,"value",n.value,r.value,c)}},N=(t,e,n,r,i,o,a,c,u)=>{const h=e.el=t?t.el:l(""),f=e.anchor=t?t.anchor:l("");let{patchFlag:d,dynamicChildren:p,slotScopeIds:g}=e;g&&(c=c?c.concat(g):g),null==t?(s(h,n,r),s(f,n,r),k(e.children||[],n,f,i,o,a,c,u)):d>0&&64&d&&p&&t.dynamicChildren?(D(t.dynamicChildren,p,n,i,o,a,c),(null!=e.key||i&&e===i.subTree)&&oe(t,e,!0)):H(t,e,n,f,i,o,a,c,u)},P=(t,e,n,r,i,s,o,a,c)=>{e.slotScopeIds=a,null==t?512&e.shapeFlag?i.ctx.activate(e,n,r,o,c):M(e,n,r,i,s,o,c):F(t,e,c)},M=(t,e,n,r,i,s,o)=>{const a=t.component=bn(t,r,i);if(ve(t)&&(a.ctx.renderer=et),kn(a),a.asyncDep){if(i&&i.registerDep(a,B,o),!t.el){const t=a.subTree=on(He);b(null,t,e,n)}}else B(a,t,e,n,i,s,o)},F=(t,e,n)=>{const r=e.component=t.component;if(U(t,e,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,e,n);r.next=e,_(r.update),r.effect.dirty=!0,r.update()}else e.el=t.el,r.vnode=e},B=(t,e,n,s,o,a,c)=>{const l=()=>{if(t.isMounted){let{next:e,bu:n,u:r,parent:s,vnode:u}=t;{const n=ce(t);if(n)return e&&(e.el=u.el,V(t,e,c)),void n.asyncDep.then((()=>{t.isUnmounted||l()}))}let h,f=e;0,ie(t,!1),e?(e.el=u.el,V(t,e,c)):e=u,n&&(0,i.DY)(n),(h=e.props&&e.props.onVnodeBeforeUpdate)&&mn(h,s,e,u),ie(t,!0);const p=j(t);0;const g=t.subTree;t.subTree=p,y(g,p,d(g.el),Z(g),t,o,a),e.el=p.el,null===f&&$(t,p.el),r&&te(r,o),(h=e.props&&e.props.onVnodeUpdated)&&te((()=>mn(h,s,e,u)),o)}else{let r;const{el:c,props:l}=e,{bm:u,m:h,parent:f}=t,d=ot(e);if(ie(t,!1),u&&(0,i.DY)(u),!d&&(r=l&&l.onVnodeBeforeMount)&&mn(r,f,e),ie(t,!0),c&&rt){const n=()=>{t.subTree=j(t),rt(c,t.subTree,t,o,null)};d?e.type.__asyncLoader().then((()=>!t.isUnmounted&&n())):n()}else{0;const r=t.subTree=j(t);0,y(null,r,n,s,t,o,a),e.el=r.el}if(h&&te(h,o),!d&&(r=l&&l.onVnodeMounted)){const t=e;te((()=>mn(r,f,t)),o)}(256&e.shapeFlag||f&&ot(f.vnode)&&256&f.vnode.shapeFlag)&&t.a&&te(t.a,o),t.isMounted=!0,e=n=s=null}},u=t.effect=new r.X2(l,i.tE,(()=>w(h)),t.scope),h=t.update=()=>{u.dirty&&u.run()};h.id=t.uid,ie(t,!0),h()},V=(t,e,n)=>{e.component=t;const i=t.vnode.props;t.vnode=e,t.next=null,Mt(t,e.props,i,n),Yt(t,e.children,n),(0,r.C4)(),T(t),(0,r.bl)()},H=(t,e,n,r,i,s,o,a,c=!1)=>{const l=t&&t.children,u=t?t.shapeFlag:0,h=e.children,{patchFlag:d,shapeFlag:p}=e;if(d>0){if(128&d)return void K(l,h,n,r,i,s,o,a,c);if(256&d)return void z(l,h,n,r,i,s,o,a,c)}8&p?(16&u&&Y(l,i,s),h!==l&&f(n,h)):16&u?16&p?K(l,h,n,r,i,s,o,a,c):Y(l,i,s,!0):(8&u&&f(n,""),16&p&&k(h,n,r,i,s,o,a,c))},z=(t,e,n,r,s,o,a,c,l)=>{t=t||i.Oj,e=e||i.Oj;const u=t.length,h=e.length,f=Math.min(u,h);let d;for(d=0;d<f;d++){const r=e[d]=l?dn(e[d]):fn(e[d]);y(t[d],r,n,null,s,o,a,c,l)}u>h?Y(t,s,o,!0,!1,f):k(e,n,r,s,o,a,c,l,f)},K=(t,e,n,r,s,o,a,c,l)=>{let u=0;const h=e.length;let f=t.length-1,d=h-1;while(u<=f&&u<=d){const r=t[u],i=e[u]=l?dn(e[u]):fn(e[u]);if(!en(r,i))break;y(r,i,n,null,s,o,a,c,l),u++}while(u<=f&&u<=d){const r=t[f],i=e[d]=l?dn(e[d]):fn(e[d]);if(!en(r,i))break;y(r,i,n,null,s,o,a,c,l),f--,d--}if(u>f){if(u<=d){const t=d+1,i=t<h?e[t].el:r;while(u<=d)y(null,e[u]=l?dn(e[u]):fn(e[u]),n,i,s,o,a,c,l),u++}}else if(u>d)while(u<=f)G(t[u],s,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=d;u++){const t=e[u]=l?dn(e[u]):fn(e[u]);null!=t.key&&m.set(t.key,u)}let v,b=0;const w=d-g+1;let E=!1,_=0;const S=new Array(w);for(u=0;u<w;u++)S[u]=0;for(u=p;u<=f;u++){const r=t[u];if(b>=w){G(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=d;v++)if(0===S[v-g]&&en(r,e[v])){i=v;break}void 0===i?G(r,s,o,!0):(S[i-g]=u+1,i>=_?_=i:E=!0,y(r,e[i],n,null,s,o,a,c,l),b++)}const T=E?ae(S):i.Oj;for(v=T.length-1,u=w-1;u>=0;u--){const t=g+u,i=e[t],f=t+1<h?e[t+1].el:r;0===S[u]?y(null,i,n,f,s,o,a,c,l):E&&(v<0||u!==T[v]?q(i,n,f,2):v--)}}},q=(t,e,n,r,i=null)=>{const{el:o,type:a,transition:c,children:l,shapeFlag:u}=t;if(6&u)return void q(t.component.subTree,e,n,r);if(128&u)return void t.suspense.move(e,n,r);if(64&u)return void a.move(t,e,n,et);if(a===$e){s(o,e,n);for(let t=0;t<l.length;t++)q(l[t],e,n,r);return void s(t.anchor,e,n)}if(a===ze)return void S(t,e,n);const h=2!==r&&1&u&&c;if(h)if(0===r)c.beforeEnter(o),s(o,e,n),te((()=>c.enter(o)),i);else{const{leave:t,delayLeave:r,afterLeave:i}=c,a=()=>s(o,e,n),l=()=>{t(o,(()=>{a(),i&&i()}))};r?r(o,a,l):l()}else s(o,e,n)},G=(t,e,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:c,dynamicChildren:l,shapeFlag:u,patchFlag:h,dirs:f,memoIndex:d}=t;if(-2===h&&(i=!1),null!=a&&Zt(a,null,n,t,!0),null!=d&&(e.renderCache[d]=void 0),256&u)return void e.ctx.deactivate(t);const p=1&u&&f,g=!ot(t);let m;if(g&&(m=o&&o.onVnodeBeforeUnmount)&&mn(m,e,t),6&u)J(t.component,n,r);else{if(128&u)return void t.suspense.unmount(n,r);p&&it(t,null,e,"beforeUnmount"),64&u?t.type.remove(t,e,n,et,r):l&&(s!==$e||h>0&&64&h)?Y(l,e,n,!1,!0):(s===$e&&384&h||!i&&16&u)&&Y(c,e,n),r&&W(t)}(g&&(m=o&&o.onVnodeUnmounted)||p)&&te((()=>{m&&mn(m,e,t),p&&it(t,null,e,"unmounted")}),n)},W=t=>{const{type:e,el:n,anchor:r,transition:i}=t;if(e===$e)return void X(n,r);if(e===ze)return void A(t);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&t.shapeFlag&&i&&!i.persisted){const{leave:e,delayLeave:r}=i,o=()=>e(n,s);r?r(t.el,s,o):o()}else s()},X=(t,e)=>{let n;while(t!==e)n=p(t),o(t),t=n;o(e)},J=(t,e,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:c,m:l,a:u}=t;le(l),le(u),r&&(0,i.DY)(r),s.stop(),o&&(o.active=!1,G(a,t,e,n)),c&&te(c,e),te((()=>{t.isUnmounted=!0}),e),e&&e.pendingBranch&&!e.isUnmounted&&t.asyncDep&&!t.asyncResolved&&t.suspenseId===e.pendingId&&(e.deps--,0===e.deps&&e.resolve())},Y=(t,e,n,r=!1,i=!1,s=0)=>{for(let o=s;o<t.length;o++)G(t[o],e,n,r,i)},Z=t=>6&t.shapeFlag?Z(t.component.subTree):128&t.shapeFlag?t.suspense.next():p(t.anchor||t.el);let Q=!1;const tt=(t,e,n)=>{null==t?e._vnode&&G(e._vnode,null,null,!0):y(e._vnode||null,t,e,null,null,null,n),Q||(Q=!0,T(),C(),Q=!1),e._vnode=t},et={p:y,um:G,m:q,r:W,mt:M,mc:k,pc:H,pbc:D,n:Z,o:t};let nt,rt;return e&&([nt,rt]=e(et)),{render:tt,hydrate:nt,createApp:Rt(tt,nt)}}function re({type:t,props:e},n){return"svg"===n&&"foreignObject"===t||"mathml"===n&&"annotation-xml"===t&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function ie({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function se(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function oe(t,e,n=!1){const r=t.children,s=e.children;if((0,i.cy)(r)&&(0,i.cy)(s))for(let i=0;i<r.length;i++){const t=r[i];let e=s[i];1&e.shapeFlag&&!e.dynamicChildren&&((e.patchFlag<=0||32===e.patchFlag)&&(e=s[i]=dn(s[i]),e.el=t.el),n||-2===e.patchFlag||oe(t,e)),e.type===Ve&&(e.el=t.el)}}function ae(t){const e=t.slice(),n=[0];let r,i,s,o,a;const c=t.length;for(r=0;r<c;r++){const c=t[r];if(0!==c){if(i=n[n.length-1],t[i]<c){e[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=e[o];return n}function ce(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ce(e)}function le(t){if(t)for(let e=0;e<t.length;e++)t[e].active=!1}const ue=Symbol.for("v-scx"),he=()=>{{const t=Dt(ue);return t}};const fe={};function de(t,e,n){return pe(t,e,n)}function pe(t,e,{immediate:n,deep:a,flush:c,once:l,onTrack:u,onTrigger:h}=i.MZ){if(e&&l){const t=e;e=(...e)=>{t(...e),A()}}const f=wn,d=t=>!0===a?t:ye(t,!1===a?1:void 0);let p,g,m=!1,y=!1;if((0,r.i9)(t)?(p=()=>t.value,m=(0,r.fE)(t)):(0,r.g8)(t)?(p=()=>d(t),m=!0):(0,i.cy)(t)?(y=!0,m=t.some((t=>(0,r.g8)(t)||(0,r.fE)(t))),p=()=>t.map((t=>(0,r.i9)(t)?t.value:(0,r.g8)(t)?d(t):(0,i.Tn)(t)?s(t,f,2):void 0))):p=(0,i.Tn)(t)?e?()=>s(t,f,2):()=>(g&&g(),o(t,f,3,[b])):i.tE,e&&a){const t=p;p=()=>ye(t())}let v,b=t=>{g=T.onStop=()=>{s(t,f,4),g=T.onStop=void 0}};if(Rn){if(b=i.tE,e?n&&o(e,f,3,[p(),y?[]:void 0,b]):p(),"sync"!==c)return i.tE;{const t=he();v=t.__watcherHandles||(t.__watcherHandles=[])}}let E=y?new Array(t.length).fill(fe):fe;const _=()=>{if(T.active&&T.dirty)if(e){const t=T.run();(a||m||(y?t.some(((t,e)=>(0,i.$H)(t,E[e]))):(0,i.$H)(t,E)))&&(g&&g(),o(e,f,3,[t,E===fe?void 0:y&&E[0]===fe?[]:E,b]),E=t)}else T.run()};let S;_.allowRecurse=!!e,"sync"===c?S=_:"post"===c?S=()=>te(_,f&&f.suspense):(_.pre=!0,f&&(_.id=f.uid),S=()=>w(_));const T=new r.X2(p,i.tE,S),C=(0,r.o5)(),A=()=>{T.stop(),C&&(0,i.TF)(C.effects,T)};return e?n?_():E=T.run():"post"===c?te(T.run.bind(T),f&&f.suspense):T.run(),v&&v.push(A),A}function ge(t,e,n){const r=this.proxy,s=(0,i.Kg)(t)?t.includes(".")?me(r,t):()=>r[t]:t.bind(r,r);let o;(0,i.Tn)(e)?o=e:(o=e.handler,n=e);const a=Tn(this),c=pe(s,o.bind(r),n);return a(),c}function me(t,e){const n=e.split(".");return()=>{let e=t;for(let t=0;t<n.length&&e;t++)e=e[n[t]];return e}}function ye(t,e=1/0,n){if(e<=0||!(0,i.Gv)(t)||t["__v_skip"])return t;if(n=n||new Set,n.has(t))return t;if(n.add(t),e--,(0,r.i9)(t))ye(t.value,e,n);else if((0,i.cy)(t))for(let r=0;r<t.length;r++)ye(t[r],e,n);else if((0,i.vM)(t)||(0,i.CE)(t))t.forEach((t=>{ye(t,e,n)}));else if((0,i.Qd)(t)){for(const r in t)ye(t[r],e,n);for(const r of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,r)&&ye(t[r],e,n)}return t}const ve=t=>t.type.__isKeepAlive;RegExp,RegExp;function be(t,e){return(0,i.cy)(t)?t.some((t=>be(t,e))):(0,i.Kg)(t)?t.split(",").includes(e):!!(0,i.gd)(t)&&t.test(e)}function we(t,e){_e(t,"a",e)}function Ee(t,e){_e(t,"da",e)}function _e(t,e,n=wn){const r=t.__wdc||(t.__wdc=()=>{let e=n;while(e){if(e.isDeactivated)return;e=e.parent}return t()});if(K(e,r,n),n){let t=n.parent;while(t&&t.parent)ve(t.parent.vnode)&&Se(r,e,n,t),t=t.parent}}function Se(t,e,n,r){const s=K(e,t,r,!0);Z((()=>{(0,i.TF)(r[e],s)}),n)}function Te(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Ce(t){return 128&t.shapeFlag?t.ssContent:t}const Ae=Symbol("_leaveCb"),Ie=Symbol("_enterCb");function Oe(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return W((()=>{t.isMounted=!0})),Y((()=>{t.isUnmounting=!0})),t}const Re=[Function,Array],ke={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Re,onEnter:Re,onAfterEnter:Re,onEnterCancelled:Re,onBeforeLeave:Re,onLeave:Re,onAfterLeave:Re,onLeaveCancelled:Re,onBeforeAppear:Re,onAppear:Re,onAfterAppear:Re,onAppearCancelled:Re},xe=t=>{const e=t.subTree;return e.component?xe(e.component):e},De={name:"BaseTransition",props:ke,setup(t,{slots:e}){const n=En(),i=Oe();return()=>{const s=e.default&&Ue(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){let t=!1;for(const e of s)if(e.type!==He){0,o=e,t=!0;break}}const a=(0,r.ux)(t),{mode:c}=a;if(i.isLeaving)return je(o);const l=Me(o);if(!l)return je(o);let u=Pe(l,a,i,n,(t=>u=t));Fe(l,u);const h=n.subTree,f=h&&Me(h);if(f&&f.type!==He&&!en(l,f)&&xe(n).type!==He){const t=Pe(f,a,i,n);if(Fe(f,t),"out-in"===c&&l.type!==He)return i.isLeaving=!0,t.afterLeave=()=>{i.isLeaving=!1,!1!==n.update.active&&(n.effect.dirty=!0,n.update())},je(o);"in-out"===c&&l.type!==He&&(t.delayLeave=(t,e,n)=>{const r=Ne(i,f);r[String(f.key)]=f,t[Ae]=()=>{e(),t[Ae]=void 0,delete u.delayedLeave},u.delayedLeave=n})}return o}}},Le=De;function Ne(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Pe(t,e,n,r,s){const{appear:a,mode:c,persisted:l=!1,onBeforeEnter:u,onEnter:h,onAfterEnter:f,onEnterCancelled:d,onBeforeLeave:p,onLeave:g,onAfterLeave:m,onLeaveCancelled:y,onBeforeAppear:v,onAppear:b,onAfterAppear:w,onAppearCancelled:E}=e,_=String(t.key),S=Ne(n,t),T=(t,e)=>{t&&o(t,r,9,e)},C=(t,e)=>{const n=e[1];T(t,e),(0,i.cy)(t)?t.every((t=>t.length<=1))&&n():t.length<=1&&n()},A={mode:c,persisted:l,beforeEnter(e){let r=u;if(!n.isMounted){if(!a)return;r=v||u}e[Ae]&&e[Ae](!0);const i=S[_];i&&en(t,i)&&i.el[Ae]&&i.el[Ae](),T(r,[e])},enter(t){let e=h,r=f,i=d;if(!n.isMounted){if(!a)return;e=b||h,r=w||f,i=E||d}let s=!1;const o=t[Ie]=e=>{s||(s=!0,T(e?i:r,[t]),A.delayedLeave&&A.delayedLeave(),t[Ie]=void 0)};e?C(e,[t,o]):o()},leave(e,r){const i=String(t.key);if(e[Ie]&&e[Ie](!0),n.isUnmounting)return r();T(p,[e]);let s=!1;const o=e[Ae]=n=>{s||(s=!0,r(),T(n?y:m,[e]),e[Ae]=void 0,S[i]===t&&delete S[i])};S[i]=t,g?C(g,[e,o]):o()},clone(t){const i=Pe(t,e,n,r,s);return s&&s(i),i}};return A}function je(t){if(ve(t))return t=ln(t),t.children=null,t}function Me(t){if(!ve(t))return t;const{shapeFlag:e,children:n}=t;if(n){if(16&e)return n[0];if(32&e&&(0,i.Tn)(n.default))return n.default()}}function Fe(t,e){6&t.shapeFlag&&t.component?Fe(t.component.subTree,e):128&t.shapeFlag?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Ue(t,e=!1,n){let r=[],i=0;for(let s=0;s<t.length;s++){let o=t[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===$e?(128&o.patchFlag&&i++,r=r.concat(Ue(o.children,e,a))):(e||o.type!==He)&&r.push(null!=a?ln(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}const Be=t=>t.__isTeleport;const $e=Symbol.for("v-fgt"),Ve=Symbol.for("v-txt"),He=Symbol.for("v-cmt"),ze=Symbol.for("v-stc"),Ke=[];let qe=null;function Ge(t=!1){Ke.push(qe=t?null:[])}function We(){Ke.pop(),qe=Ke[Ke.length-1]||null}let Xe=1;function Je(t){Xe+=t}function Ye(t){return t.dynamicChildren=Xe>0?qe||i.Oj:null,We(),Xe>0&&qe&&qe.push(t),t}function Ze(t,e,n,r,i,s){return Ye(sn(t,e,n,r,i,s,!0))}function Qe(t,e,n,r,i){return Ye(on(t,e,n,r,i,!0))}function tn(t){return!!t&&!0===t.__v_isVNode}function en(t,e){return t.type===e.type&&t.key===e.key}const nn=({key:t})=>null!=t?t:null,rn=({ref:t,ref_key:e,ref_for:n})=>("number"===typeof t&&(t=""+t),null!=t?(0,i.Kg)(t)||(0,r.i9)(t)||(0,i.Tn)(t)?{i:D,r:t,k:e,f:!!n}:t:null);function sn(t,e=null,n=null,r=0,s=null,o=(t===$e?0:1),a=!1,c=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nn(e),ref:e&&rn(e),scopeId:L,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:D};return c?(pn(l,n),128&o&&t.normalize(l)):n&&(l.shapeFlag|=(0,i.Kg)(n)?8:16),Xe>0&&!a&&qe&&(l.patchFlag>0||6&o)&&32!==l.patchFlag&&qe.push(l),l}const on=an;function an(t,e=null,n=null,s=0,o=null,a=!1){if(t&&t!==V||(t=He),tn(t)){const r=ln(t,e,!0);return n&&pn(r,n),Xe>0&&!a&&qe&&(6&r.shapeFlag?qe[qe.indexOf(t)]=r:qe.push(r)),r.patchFlag=-2,r}if(Fn(t)&&(t=t.__vccOpts),e){e=cn(e);let{class:t,style:n}=e;t&&!(0,i.Kg)(t)&&(e.class=(0,i.C4)(t)),(0,i.Gv)(n)&&((0,r.ju)(n)&&!(0,i.cy)(n)&&(n=(0,i.X$)({},n)),e.style=(0,i.Tr)(n))}const c=(0,i.Kg)(t)?1:H(t)?128:Be(t)?64:(0,i.Gv)(t)?4:(0,i.Tn)(t)?2:0;return sn(t,e,n,s,o,c,a,!0)}function cn(t){return t?(0,r.ju)(t)||Pt(t)?(0,i.X$)({},t):t:null}function ln(t,e,n=!1,r=!1){const{props:s,ref:o,patchFlag:a,children:c,transition:l}=t,u=e?gn(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:t.type,props:u,key:u&&nn(u),ref:e&&e.ref?n&&o?(0,i.cy)(o)?o.concat(rn(e)):[o,rn(e)]:rn(e):o,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:c,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==$e?-1===a?16:16|a:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ln(t.ssContent),ssFallback:t.ssFallback&&ln(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&r&&Fe(h,l.clone(h)),h}function un(t=" ",e=0){return on(Ve,null,t,e)}function hn(t="",e=!1){return e?(Ge(),Qe(He,null,t)):on(He,null,t)}function fn(t){return null==t||"boolean"===typeof t?on(He):(0,i.cy)(t)?on($e,null,t.slice()):"object"===typeof t?dn(t):on(Ve,null,String(t))}function dn(t){return null===t.el&&-1!==t.patchFlag||t.memo?t:ln(t)}function pn(t,e){let n=0;const{shapeFlag:r}=t;if(null==e)e=null;else if((0,i.cy)(e))n=16;else if("object"===typeof e){if(65&r){const n=e.default;return void(n&&(n._c&&(n._d=!1),pn(t,n()),n._c&&(n._d=!0)))}{n=32;const r=e._;r||Pt(e)?3===r&&D&&(1===D.slots._?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=D}}else(0,i.Tn)(e)?(e={default:e,_ctx:D},n=32):(e=String(e),64&r?(n=16,e=[un(e)]):n=8);t.children=e,t.shapeFlag|=n}function gn(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const t in r)if("class"===t)e.class!==r.class&&(e.class=(0,i.C4)([e.class,r.class]));else if("style"===t)e.style=(0,i.Tr)([e.style,r.style]);else if((0,i.Mp)(t)){const n=e[t],s=r[t];!s||n===s||(0,i.cy)(n)&&n.includes(s)||(e[t]=n?[].concat(n,s):s)}else""!==t&&(e[t]=r[t])}return e}function mn(t,e,n,r=null){o(t,e,7,[n,r])}const yn=It();let vn=0;function bn(t,e,n){const s=t.type,o=(e?e.appContext:t.appContext)||yn,a={uid:vn++,vnode:t,type:s,parent:e,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.yC(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bt(s,o),emitsOptions:k(s,o),emit:null,emitted:null,propsDefaults:i.MZ,inheritAttrs:s.inheritAttrs,ctx:i.MZ,data:i.MZ,props:i.MZ,attrs:i.MZ,slots:i.MZ,refs:i.MZ,setupState:i.MZ,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=R.bind(null,a),t.ce&&t.ce(a),a}let wn=null;const En=()=>wn||D;let _n,Sn;{const t=(0,i.We)(),e=(e,n)=>{let r;return(r=t[e])||(r=t[e]=[]),r.push(n),t=>{r.length>1?r.forEach((e=>e(t))):r[0](t)}};_n=e("__VUE_INSTANCE_SETTERS__",(t=>wn=t)),Sn=e("__VUE_SSR_SETTERS__",(t=>Rn=t))}const Tn=t=>{const e=wn;return _n(t),t.scope.on(),()=>{t.scope.off(),_n(e)}},Cn=()=>{wn&&wn.scope.off(),_n(null)};function An(t){return 4&t.vnode.shapeFlag}let In,On,Rn=!1;function kn(t,e=!1){e&&Sn(e);const{props:n,children:r}=t.vnode,i=An(t);jt(t,n,i,e),Jt(t,r);const s=i?xn(t,e):void 0;return e&&Sn(!1),s}function xn(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,ut);const{setup:o}=n;if(o){const n=t.setupContext=o.length>1?Pn(t):null,c=Tn(t);(0,r.C4)();const l=s(o,t,0,[t.props,n]);if((0,r.bl)(),c(),(0,i.yL)(l)){if(l.then(Cn,Cn),e)return l.then((n=>{Dn(t,n,e)})).catch((e=>{a(e,t,0)}));t.asyncDep=l}else Dn(t,l,e)}else Ln(t,e)}function Dn(t,e,n){(0,i.Tn)(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:(0,i.Gv)(e)&&(t.setupState=(0,r.Pr)(e)),Ln(t,n)}function Ln(t,e,n){const s=t.type;if(!t.render){if(!e&&In&&!s.render){const e=s.template||yt(t).template;if(e){0;const{isCustomElement:n,compilerOptions:r}=t.appContext.config,{delimiters:o,compilerOptions:a}=s,c=(0,i.X$)((0,i.X$)({isCustomElement:n,delimiters:o},r),a);s.render=In(e,c)}}t.render=s.render||i.tE,On&&On(t)}{const e=Tn(t);(0,r.C4)();try{dt(t)}finally{(0,r.bl)(),e()}}}const Nn={get(t,e){return(0,r.u4)(t,"get",""),t[e]}};function Pn(t){const e=e=>{t.exposed=e||{}};return{attrs:new Proxy(t.attrs,Nn),slots:t.slots,emit:t.emit,expose:e}}function jn(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy((0,r.Pr)((0,r.IG)(t.exposed)),{get(e,n){return n in e?e[n]:n in ct?ct[n](t):void 0},has(t,e){return e in t||e in ct}})):t.proxy}function Mn(t,e=!0){return(0,i.Tn)(t)?t.displayName||t.name:t.name||e&&t.__name}function Fn(t){return(0,i.Tn)(t)&&"__vccOpts"in t}const Un=(t,e)=>{const n=(0,r.EW)(t,e,Rn);return n};function Bn(t,e,n){const r=arguments.length;return 2===r?(0,i.Gv)(e)&&!(0,i.cy)(e)?tn(e)?on(t,null,[e]):on(t,e):on(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&tn(n)&&(n=[n]),on(t,e,n))}const $n="3.4.30"},751:function(t,e,n){n.d(e,{D$:function(){return St},Ef:function(){return Rt},Jo:function(){return wt},aG:function(){return N},jR:function(){return Ct}});var r=n(641),i=n(33),s=n(953);
/**
* @vue/runtime-dom v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const o="http://www.w3.org/2000/svg",a="http://www.w3.org/1998/Math/MathML",c="undefined"!==typeof document?document:null,l=c&&c.createElement("template"),u={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const i="svg"===e?c.createElementNS(o,t):"mathml"===e?c.createElementNS(a,t):n?c.createElement(t,{is:n}):c.createElement(t);return"select"===t&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:t=>c.createTextNode(t),createComment:t=>c.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>c.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,i,s){const o=n?n.previousSibling:e.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(e.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{l.innerHTML="svg"===r?`<svg>${t}</svg>`:"mathml"===r?`<math>${t}</math>`:t;const i=l.content;if("svg"===r||"mathml"===r){const t=i.firstChild;while(t.firstChild)i.appendChild(t.firstChild);i.removeChild(t)}e.insertBefore(i,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},h="transition",f="animation",d=Symbol("_vtc"),p=(t,{slots:e})=>(0,r.h)(r.pR,b(t),e);p.displayName="Transition";const g={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},m=p.props=(0,i.X$)({},r.QP,g),y=(t,e=[])=>{(0,i.cy)(t)?t.forEach((t=>t(...e))):t&&t(...e)},v=t=>!!t&&((0,i.cy)(t)?t.some((t=>t.length>1)):t.length>1);function b(t){const e={};for(const i in t)i in g||(e[i]=t[i]);if(!1===t.css)return e;const{name:n="v",type:r,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:c=`${n}-enter-to`,appearFromClass:l=o,appearActiveClass:u=a,appearToClass:h=c,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=t,m=w(s),b=m&&m[0],E=m&&m[1],{onBeforeEnter:C,onEnter:I,onEnterCancelled:O,onLeave:R,onLeaveCancelled:x,onBeforeAppear:D=C,onAppear:L=I,onAppearCancelled:N=O}=e,P=(t,e,n)=>{S(t,e?h:c),S(t,e?u:a),n&&n()},j=(t,e)=>{t._isLeaving=!1,S(t,f),S(t,p),S(t,d),e&&e()},M=t=>(e,n)=>{const i=t?L:I,s=()=>P(e,t,n);y(i,[e,s]),T((()=>{S(e,t?l:o),_(e,t?h:c),v(i)||A(e,r,b,s)}))};return(0,i.X$)(e,{onBeforeEnter(t){y(C,[t]),_(t,o),_(t,a)},onBeforeAppear(t){y(D,[t]),_(t,l),_(t,u)},onEnter:M(!1),onAppear:M(!0),onLeave(t,e){t._isLeaving=!0;const n=()=>j(t,e);_(t,f),_(t,d),k(),T((()=>{t._isLeaving&&(S(t,f),_(t,p),v(R)||A(t,r,E,n))})),y(R,[t,n])},onEnterCancelled(t){P(t,!1),y(O,[t])},onAppearCancelled(t){P(t,!0),y(N,[t])},onLeaveCancelled(t){j(t),y(x,[t])}})}function w(t){if(null==t)return null;if((0,i.Gv)(t))return[E(t.enter),E(t.leave)];{const e=E(t);return[e,e]}}function E(t){const e=(0,i.Ro)(t);return e}function _(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.add(e))),(t[d]||(t[d]=new Set)).add(e)}function S(t,e){e.split(/\s+/).forEach((e=>e&&t.classList.remove(e)));const n=t[d];n&&(n.delete(e),n.size||(t[d]=void 0))}function T(t){requestAnimationFrame((()=>{requestAnimationFrame(t)}))}let C=0;function A(t,e,n,r){const i=t._endId=++C,s=()=>{i===t._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:c}=I(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,f),s()},f=e=>{e.target===t&&++u>=c&&h()};setTimeout((()=>{u<c&&h()}),a+1),t.addEventListener(l,f)}function I(t,e){const n=window.getComputedStyle(t),r=t=>(n[t]||"").split(", "),i=r(`${h}Delay`),s=r(`${h}Duration`),o=O(i,s),a=r(`${f}Delay`),c=r(`${f}Duration`),l=O(a,c);let u=null,d=0,p=0;e===h?o>0&&(u=h,d=o,p=s.length):e===f?l>0&&(u=f,d=l,p=c.length):(d=Math.max(o,l),u=d>0?o>l?h:f:null,p=u?u===h?s.length:c.length:0);const g=u===h&&/\b(transform|all)(,|$)/.test(r(`${h}Property`).toString());return{type:u,timeout:d,propCount:p,hasTransform:g}}function O(t,e){while(t.length<e.length)t=t.concat(t);return Math.max(...e.map(((e,n)=>R(e)+R(t[n]))))}function R(t){return"auto"===t?0:1e3*Number(t.slice(0,-1).replace(",","."))}function k(){return document.body.offsetHeight}function x(t,e,n){const r=t[d];r&&(e=(e?[e,...r]:[...r]).join(" ")),null==e?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const D=Symbol("_vod"),L=Symbol("_vsh"),N={beforeMount(t,{value:e},{transition:n}){t[D]="none"===t.style.display?"":t.style.display,n&&e?n.beforeEnter(t):P(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!==!n&&(r?e?(r.beforeEnter(t),P(t,!0),r.enter(t)):r.leave(t,(()=>{P(t,!1)})):P(t,e))},beforeUnmount(t,{value:e}){P(t,e)}};function P(t,e){t.style.display=e?t[D]:"none",t[L]=!e}const j=Symbol("");const M=/(^|;)\s*display\s*:/;function F(t,e,n){const r=t.style,s=(0,i.Kg)(n);let o=!1;if(n&&!s){if(e)if((0,i.Kg)(e))for(const t of e.split(";")){const e=t.slice(0,t.indexOf(":")).trim();null==n[e]&&B(r,e,"")}else for(const t in e)null==n[t]&&B(r,t,"");for(const t in n)"display"===t&&(o=!0),B(r,t,n[t])}else if(s){if(e!==n){const t=r[j];t&&(n+=";"+t),r.cssText=n,o=M.test(n)}}else e&&t.removeAttribute("style");D in t&&(t[D]=o?r.display:"",t[L]&&(r.display="none"))}const U=/\s*!important$/;function B(t,e,n){if((0,i.cy)(n))n.forEach((n=>B(t,e,n)));else if(null==n&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=H(t,e);U.test(n)?t.setProperty((0,i.Tg)(r),n.replace(U,""),"important"):t[r]=n}}const $=["Webkit","Moz","ms"],V={};function H(t,e){const n=V[e];if(n)return n;let r=(0,i.PT)(e);if("filter"!==r&&r in t)return V[e]=r;r=(0,i.ZH)(r);for(let i=0;i<$.length;i++){const n=$[i]+r;if(n in t)return V[e]=n}return e}const z="http://www.w3.org/1999/xlink";function K(t,e,n,r,s,o=(0,i.J$)(e)){r&&e.startsWith("xlink:")?null==n?t.removeAttributeNS(z,e.slice(6,e.length)):t.setAttributeNS(z,e,n):null==n||o&&!(0,i.Y2)(n)?t.removeAttribute(e):t.setAttribute(e,o?"":(0,i.Bm)(n)?String(n):n)}function q(t,e,n,r,s,o,a){if("innerHTML"===e||"textContent"===e)return r&&a(r,s,o),void(t[e]=null==n?"":n);const c=t.tagName;if("value"===e&&"PROGRESS"!==c&&!c.includes("-")){const r="OPTION"===c?t.getAttribute("value")||"":t.value,i=null==n?"":String(n);return r===i&&"_value"in t||(t.value=i),null==n&&t.removeAttribute(e),void(t._value=n)}let l=!1;if(""===n||null==n){const r=typeof t[e];"boolean"===r?n=(0,i.Y2)(n):null==n&&"string"===r?(n="",l=!0):"number"===r&&(n=0,l=!0)}try{t[e]=n}catch(u){0}l&&t.removeAttribute(e)}function G(t,e,n,r){t.addEventListener(e,n,r)}function W(t,e,n,r){t.removeEventListener(e,n,r)}const X=Symbol("_vei");function J(t,e,n,r,i=null){const s=t[X]||(t[X]={}),o=s[e];if(r&&o)o.value=r;else{const[n,a]=Z(e);if(r){const o=s[e]=nt(r,i);G(t,n,o,a)}else o&&(W(t,n,o,a),s[e]=void 0)}}const Y=/(?:Once|Passive|Capture)$/;function Z(t){let e;if(Y.test(t)){let n;e={};while(n=t.match(Y))t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}const n=":"===t[2]?t.slice(3):(0,i.Tg)(t.slice(2));return[n,e]}let Q=0;const tt=Promise.resolve(),et=()=>Q||(tt.then((()=>Q=0)),Q=Date.now());function nt(t,e){const n=t=>{if(t._vts){if(t._vts<=n.attached)return}else t._vts=Date.now();(0,r.qL)(rt(t,n.value),e,5,[t])};return n.value=t,n.attached=et(),n}function rt(t,e){if((0,i.cy)(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map((t=>e=>!e._stopped&&t&&t(e)))}return e}const it=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,st=(t,e,n,r,s,o,a,c,l)=>{const u="svg"===s;"class"===e?x(t,r,u):"style"===e?F(t,n,r):(0,i.Mp)(e)?(0,i.CP)(e)||J(t,e,n,r,a):("."===e[0]?(e=e.slice(1),1):"^"===e[0]?(e=e.slice(1),0):ot(t,e,r,u))?(q(t,e,r,o,a,c,l),t.tagName.includes("-")||"value"!==e&&"checked"!==e&&"selected"!==e||K(t,e,r,u,a,"value"!==e)):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),K(t,e,r,u))};function ot(t,e,n,r){if(r)return"innerHTML"===e||"textContent"===e||!!(e in t&&it(e)&&(0,i.Tn)(n));if("spellcheck"===e||"draggable"===e||"translate"===e)return!1;if("form"===e)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if("type"===e&&"TEXTAREA"===t.tagName)return!1;if("width"===e||"height"===e){const e=t.tagName;if("IMG"===e||"VIDEO"===e||"CANVAS"===e||"SOURCE"===e)return!1}return(!it(e)||!(0,i.Kg)(n))&&e in t}
/*! #__NO_SIDE_EFFECTS__ */
/*! #__NO_SIDE_EFFECTS__ */
"undefined"!==typeof HTMLElement&&HTMLElement;const at=new WeakMap,ct=new WeakMap,lt=Symbol("_moveCb"),ut=Symbol("_enterCb"),ht={name:"TransitionGroup",props:(0,i.X$)({},m,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=(0,r.nI)(),i=(0,r.Gy)();let o,a;return(0,r.$u)((()=>{if(!o.length)return;const e=t.moveClass||`${t.name||"v"}-move`;if(!gt(o[0].el,n.vnode.el,e))return;o.forEach(ft),o.forEach(dt);const r=o.filter(pt);k(),r.forEach((t=>{const n=t.el,r=n.style;_(n,e),r.transform=r.webkitTransform=r.transitionDuration="";const i=n[lt]=t=>{t&&t.target!==n||t&&!/transform$/.test(t.propertyName)||(n.removeEventListener("transitionend",i),n[lt]=null,S(n,e))};n.addEventListener("transitionend",i)}))})),()=>{const c=(0,s.ux)(t),l=b(c);let u=c.tag||r.FK;if(o=[],a)for(let t=0;t<a.length;t++){const e=a[t];e.el&&e.el instanceof Element&&(o.push(e),(0,r.MZ)(e,(0,r.OW)(e,l,i,n)),at.set(e,e.el.getBoundingClientRect()))}a=e.default?(0,r.Df)(e.default()):[];for(let t=0;t<a.length;t++){const e=a[t];null!=e.key&&(0,r.MZ)(e,(0,r.OW)(e,l,i,n))}return(0,r.bF)(u,null,a)}}};ht.props;function ft(t){const e=t.el;e[lt]&&e[lt](),e[ut]&&e[ut]()}function dt(t){ct.set(t,t.el.getBoundingClientRect())}function pt(t){const e=at.get(t),n=ct.get(t),r=e.left-n.left,i=e.top-n.top;if(r||i){const e=t.el.style;return e.transform=e.webkitTransform=`translate(${r}px,${i}px)`,e.transitionDuration="0s",t}}function gt(t,e,n){const r=t.cloneNode(),i=t[d];i&&i.forEach((t=>{t.split(/\s+/).forEach((t=>t&&r.classList.remove(t)))})),n.split(/\s+/).forEach((t=>t&&r.classList.add(t))),r.style.display="none";const s=1===e.nodeType?e:e.parentNode;s.appendChild(r);const{hasTransform:o}=I(r);return s.removeChild(r),o}const mt=t=>{const e=t.props["onUpdate:modelValue"]||!1;return(0,i.cy)(e)?t=>(0,i.DY)(e,t):e};function yt(t){t.target.composing=!0}function vt(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const bt=Symbol("_assign"),wt={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[bt]=mt(s);const o=r||s.props&&"number"===s.props.type;G(t,e?"change":"input",(e=>{if(e.target.composing)return;let r=t.value;n&&(r=r.trim()),o&&(r=(0,i.bB)(r)),t[bt](r)})),n&&G(t,"change",(()=>{t.value=t.value.trim()})),e||(G(t,"compositionstart",yt),G(t,"compositionend",vt),G(t,"change",vt))},mounted(t,{value:e}){t.value=null==e?"":e},beforeUpdate(t,{value:e,oldValue:n,modifiers:{lazy:r,trim:s,number:o}},a){if(t[bt]=mt(a),t.composing)return;const c=!o&&"number"!==t.type||/^0\d/.test(t.value)?t.value:(0,i.bB)(t.value),l=null==e?"":e;if(c!==l){if(document.activeElement===t&&"range"!==t.type){if(r&&e===n)return;if(s&&t.value.trim()===l)return}t.value=l}}};const Et=["ctrl","shift","alt","meta"],_t={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&0!==t.button,middle:t=>"button"in t&&1!==t.button,right:t=>"button"in t&&2!==t.button,exact:(t,e)=>Et.some((n=>t[`${n}Key`]&&!e.includes(n)))},St=(t,e)=>{const n=t._withMods||(t._withMods={}),r=e.join(".");return n[r]||(n[r]=(n,...r)=>{for(let t=0;t<e.length;t++){const r=_t[e[t]];if(r&&r(n,e))return}return t(n,...r)})},Tt={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Ct=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=n=>{if(!("key"in n))return;const r=(0,i.Tg)(n.key);return e.some((t=>t===r||Tt[t]===r))?t(n):void 0})},At=(0,i.X$)({patchProp:st},u);let It;function Ot(){return It||(It=(0,r.K9)(At))}const Rt=(...t)=>{const e=Ot().createApp(...t);const{mount:n}=e;return e.mount=t=>{const r=xt(t);if(!r)return;const s=e._component;(0,i.Tn)(s)||s.render||s.template||(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,kt(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e};function kt(t){return t instanceof SVGElement?"svg":"function"===typeof MathMLElement&&t instanceof MathMLElement?"mathml":void 0}function xt(t){if((0,i.Kg)(t)){const e=document.querySelector(t);return e}return t}},33:function(t,e,n){
/**
* @vue/shared v3.4.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
function r(t,e){const n=new Set(t.split(","));return e?t=>n.has(t.toLowerCase()):t=>n.has(t)}n.d(e,{$3:function(){return d},$H:function(){return M},BH:function(){return K},BX:function(){return nt},Bm:function(){return E},C4:function(){return Y},CE:function(){return g},CP:function(){return l},DY:function(){return F},Gv:function(){return _},J$:function(){return Q},Kg:function(){return w},MZ:function(){return i},Mp:function(){return c},NO:function(){return a},Oj:function(){return s},PT:function(){return D},Qd:function(){return I},Ro:function(){return $},SU:function(){return R},TF:function(){return h},Tg:function(){return N},Tn:function(){return b},Tr:function(){return q},We:function(){return H},X$:function(){return u},Y2:function(){return tt},ZH:function(){return P},Zf:function(){return A},bB:function(){return B},cy:function(){return p},gd:function(){return v},pD:function(){return r},rU:function(){return j},tE:function(){return o},u3:function(){return rt},vM:function(){return m},v_:function(){return it},yI:function(){return O},yL:function(){return S},yQ:function(){return U}});const i={},s=[],o=()=>{},a=()=>!1,c=t=>111===t.charCodeAt(0)&&110===t.charCodeAt(1)&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),l=t=>t.startsWith("onUpdate:"),u=Object.assign,h=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},f=Object.prototype.hasOwnProperty,d=(t,e)=>f.call(t,e),p=Array.isArray,g=t=>"[object Map]"===C(t),m=t=>"[object Set]"===C(t),y=t=>"[object Date]"===C(t),v=t=>"[object RegExp]"===C(t),b=t=>"function"===typeof t,w=t=>"string"===typeof t,E=t=>"symbol"===typeof t,_=t=>null!==t&&"object"===typeof t,S=t=>(_(t)||b(t))&&b(t.then)&&b(t.catch),T=Object.prototype.toString,C=t=>T.call(t),A=t=>C(t).slice(8,-1),I=t=>"[object Object]"===C(t),O=t=>w(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,R=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),k=t=>{const e=Object.create(null);return n=>{const r=e[n];return r||(e[n]=t(n))}},x=/-(\w)/g,D=k((t=>t.replace(x,((t,e)=>e?e.toUpperCase():"")))),L=/\B([A-Z])/g,N=k((t=>t.replace(L,"-$1").toLowerCase())),P=k((t=>t.charAt(0).toUpperCase()+t.slice(1))),j=k((t=>{const e=t?`on${P(t)}`:"";return e})),M=(t,e)=>!Object.is(t,e),F=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},U=(t,e,n,r=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:r,value:n})},B=t=>{const e=parseFloat(t);return isNaN(e)?t:e},$=t=>{const e=w(t)?Number(t):NaN;return isNaN(e)?t:e};let V;const H=()=>V||(V="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{});const z="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error",K=r(z);function q(t){if(p(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],i=w(r)?J(r):q(r);if(i)for(const t in i)e[t]=i[t]}return e}if(w(t)||_(t))return t}const G=/;(?![^(]*\))/g,W=/:([^]+)/,X=/\/\*[^]*?\*\//g;function J(t){const e={};return t.replace(X,"").split(G).forEach((t=>{if(t){const n=t.split(W);n.length>1&&(e[n[0].trim()]=n[1].trim())}})),e}function Y(t){let e="";if(w(t))e=t;else if(p(t))for(let n=0;n<t.length;n++){const r=Y(t[n]);r&&(e+=r+" ")}else if(_(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Z="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Q=r(Z);function tt(t){return!!t||""===t}function et(t,e){if(t.length!==e.length)return!1;let n=!0;for(let r=0;n&&r<t.length;r++)n=nt(t[r],e[r]);return n}function nt(t,e){if(t===e)return!0;let n=y(t),r=y(e);if(n||r)return!(!n||!r)&&t.getTime()===e.getTime();if(n=E(t),r=E(e),n||r)return t===e;if(n=p(t),r=p(e),n||r)return!(!n||!r)&&et(t,e);if(n=_(t),r=_(e),n||r){if(!n||!r)return!1;const i=Object.keys(t).length,s=Object.keys(e).length;if(i!==s)return!1;for(const n in t){const r=t.hasOwnProperty(n),i=e.hasOwnProperty(n);if(r&&!i||!r&&i||!nt(t[n],e[n]))return!1}}return String(t)===String(e)}function rt(t,e){return t.findIndex((t=>nt(t,e)))}const it=t=>w(t)?t:null==t?"":p(t)||_(t)&&(t.toString===T||!b(t.toString))?JSON.stringify(t,st,2):String(t),st=(t,e)=>e&&e.__v_isRef?st(t,e.value):g(e)?{[`Map(${e.size})`]:[...e.entries()].reduce(((t,[e,n],r)=>(t[ot(e,r)+" =>"]=n,t)),{})}:m(e)?{[`Set(${e.size})`]:[...e.values()].map((t=>ot(t)))}:E(e)?ot(e):!_(e)||p(e)||I(e)?e:String(e),ot=(t,e="")=>{var n;return E(t)?`Symbol(${null!=(n=t.description)?n:e})`:t}},461:function(t,e,n){n.d(e,{KO:function(){return Z},MF:function(){return X},Sx:function(){return Y},Wp:function(){return J},j6:function(){return K},om:function(){return z}});var r=n(125),i=n(424),s=n(743),o=n(297);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(t){this.container=t}getPlatformInfoString(){const t=this.container.getProviders();return t.map((t=>{if(c(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}}function c(t){const e=t.getComponent();return"VERSION"===(null===e||void 0===e?void 0:e.type)}const l="@firebase/app",u="0.10.5",h=new i.Vy("@firebase/app"),f="@firebase/app-compat",d="@firebase/analytics-compat",p="@firebase/analytics",g="@firebase/app-check-compat",m="@firebase/app-check",y="@firebase/auth",v="@firebase/auth-compat",b="@firebase/database",w="@firebase/database-compat",E="@firebase/functions",_="@firebase/functions-compat",S="@firebase/installations",T="@firebase/installations-compat",C="@firebase/messaging",A="@firebase/messaging-compat",I="@firebase/performance",O="@firebase/performance-compat",R="@firebase/remote-config",k="@firebase/remote-config-compat",x="@firebase/storage",D="@firebase/storage-compat",L="@firebase/firestore",N="@firebase/vertexai-preview",P="@firebase/firestore-compat",j="firebase",M="10.12.2",F="[DEFAULT]",U={[l]:"fire-core",[f]:"fire-core-compat",[p]:"fire-analytics",[d]:"fire-analytics-compat",[m]:"fire-app-check",[g]:"fire-app-check-compat",[y]:"fire-auth",[v]:"fire-auth-compat",[b]:"fire-rtdb",[w]:"fire-rtdb-compat",[E]:"fire-fn",[_]:"fire-fn-compat",[S]:"fire-iid",[T]:"fire-iid-compat",[C]:"fire-fcm",[A]:"fire-fcm-compat",[I]:"fire-perf",[O]:"fire-perf-compat",[R]:"fire-rc",[k]:"fire-rc-compat",[x]:"fire-gcs",[D]:"fire-gcs-compat",[L]:"fire-fst",[P]:"fire-fst-compat",[N]:"fire-vertex","fire-js":"fire-js",[j]:"fire-js-all"},B=new Map,$=new Map,V=new Map;function H(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function z(t){const e=t.name;if(V.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;V.set(e,t);for(const n of B.values())H(n,t);for(const n of $.values())H(n,t);return!0}function K(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const q={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}'",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["server-app-deleted"]:"Firebase Server App has been deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",["finalization-registry-not-supported"]:"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",["invalid-server-app-environment"]:"FirebaseServerApp is not for use in browser environments."},G=new s.FA("app","Firebase",q);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class W{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.uA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw G.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const X=M;function J(t,e={}){let n=t;if("object"!==typeof e){const t=e;e={name:t}}const i=Object.assign({name:F,automaticDataCollectionEnabled:!1},e),o=i.name;if("string"!==typeof o||!o)throw G.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.T9)()),!n)throw G.create("no-options");const a=B.get(o);if(a){if((0,s.bD)(n,a.options)&&(0,s.bD)(i,a.config))return a;throw G.create("duplicate-app",{appName:o})}const c=new r.h1(o);for(const r of V.values())c.addComponent(r);const l=new W(n,i,c);return B.set(o,l),l}function Y(t=F){const e=B.get(t);if(!e&&t===F&&(0,s.T9)())return J();if(!e)throw G.create("no-app",{appName:t});return e}function Z(t,e,n){var i;let s=null!==(i=U[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}z(new r.uA(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q="firebase-heartbeat-database",tt=1,et="firebase-heartbeat-store";let nt=null;function rt(){return nt||(nt=(0,o.P2)(Q,tt,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(et)}catch(n){console.warn(n)}}}}).catch((t=>{throw G.create("idb-open",{originalErrorMessage:t.message})}))),nt}async function it(t){try{const e=await rt(),n=e.transaction(et),r=await n.objectStore(et).get(ot(t));return await n.done,r}catch(e){if(e instanceof s.g)h.warn(e.message);else{const t=G.create("idb-get",{originalErrorMessage:null===e||void 0===e?void 0:e.message});h.warn(t.message)}}}async function st(t,e){try{const n=await rt(),r=n.transaction(et,"readwrite"),i=r.objectStore(et);await i.put(e,ot(t)),await r.done}catch(n){if(n instanceof s.g)h.warn(n.message);else{const t=G.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});h.warn(t.message)}}}function ot(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const at=1024,ct=2592e6;class lt{constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new ft(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}async triggerHeartbeat(){var t,e;const n=this.container.getProvider("platform-logger").getImmediate(),r=n.getPlatformInfoString(),i=ut();if((null!=(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||(this._heartbeatsCache=await this._heartbeatsCachePromise,null!=(null===(e=this._heartbeatsCache)||void 0===e?void 0:e.heartbeats)))&&this._heartbeatsCache.lastSentHeartbeatDate!==i&&!this._heartbeatsCache.heartbeats.some((t=>t.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:r}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf(),n=Date.now();return n-e<=ct})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var t;if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null==(null===(t=this._heartbeatsCache)||void 0===t?void 0:t.heartbeats)||0===this._heartbeatsCache.heartbeats.length)return"";const e=ut(),{heartbeatsToSend:n,unsentEntries:r}=ht(this._heartbeatsCache.heartbeats),i=(0,s.Uj)(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ut(){const t=new Date;return t.toISOString().substring(0,10)}function ht(t,e=at){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),dt(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),dt(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ft{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.zW)()&&(0,s.eX)().then((()=>!0)).catch((()=>!1))}async read(){const t=await this._canUseIndexedDBPromise;if(t){const t=await it(this.app);return(null===t||void 0===t?void 0:t.heartbeats)?t:{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return st(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return st(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}}function dt(t){return(0,s.Uj)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){z(new r.uA("platform-logger",(t=>new a(t)),"PRIVATE")),z(new r.uA("heartbeat",(t=>new lt(t)),"PRIVATE")),Z(l,u,t),Z(l,u,"esm2017"),Z("fire-js","")}pt("")},125:function(t,e,n){n.d(e,{h1:function(){return l},uA:function(){return i}});var r=n(743);class i{constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new r.cY;if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(n){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null===t||void 0===t?void 0:t.identifier),r=null!==(e=null===t||void 0===t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(c(t))try{this.getOrInitializeService({instanceIdentifier:s})}catch(e){}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:r});n.resolve(t)}catch(e){}}}}clearInstance(t=s){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t=s){return this.instances.has(t)}getOptions(t=s){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[i,s]of this.instancesDeferred.entries()){const t=this.normalizeInstanceIdentifier(i);n===t&&s.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const i of n)try{i(t,e)}catch(r){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(t),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(r){}return n||null}normalizeInstanceIdentifier(t=s){return this.component?this.component.multipleInstances?t:s:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(t){return t===s?void 0:t}function c(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){const e=this.getProvider(t.name);e.isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new o(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}}},424:function(t,e,n){n.d(e,{$b:function(){return i},Vy:function(){return l}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(t){t[t["DEBUG"]=0]="DEBUG",t[t["VERBOSE"]=1]="VERBOSE",t[t["INFO"]=2]="INFO",t[t["WARN"]=3]="WARN",t[t["ERROR"]=4]="ERROR",t[t["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=a[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class l{constructor(t){this.name=t,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"===typeof t?s[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!==typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}}},922:function(t,e,n){n.d(e,{P5:function(){return we}});var r=n(461),i=n(424),s=n(743),o=n(125),a=n(297);const c="@firebase/installations",l="0.6.7",u=1e4,h=`w:${l}`,f="FIS_v2",d="https://firebaseinstallations.googleapis.com/v1",p=36e5,g="installations",m="Installations",y={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},v=new s.FA(g,m,y);function b(t){return t instanceof s.g&&t.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w({projectId:t}){return`${d}/projects/${t}/installations`}function E(t){return{token:t.token,requestStatus:2,expiresIn:A(t.expiresIn),creationTime:Date.now()}}async function _(t,e){const n=await e.json(),r=n.error;return v.create("request-failed",{requestName:t,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function S({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function T(t,{refreshToken:e}){const n=S(t);return n.append("Authorization",I(e)),n}async function C(t){const e=await t();return e.status>=500&&e.status<600?t():e}function A(t){return Number(t.replace("s","000"))}function I(t){return`${f} ${t}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O({appConfig:t,heartbeatServiceProvider:e},{fid:n}){const r=w(t),i=S(t),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={fid:n,authVersion:f,appId:t.appId,sdkVersion:h},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await C((()=>fetch(r,a)));if(c.ok){const t=await c.json(),e={fid:t.fid||n,registrationStatus:2,refreshToken:t.refreshToken,authToken:E(t.authToken)};return e}throw await _("Create Installation",c)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(t){return new Promise((e=>{setTimeout(e,t)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t){const e=btoa(String.fromCharCode(...t));return e.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x=/^[cdef][\w-]{21}$/,D="";function L(){try{const t=new Uint8Array(17),e=self.crypto||self.msCrypto;e.getRandomValues(t),t[0]=112+t[0]%16;const n=N(t);return x.test(n)?n:D}catch(t){return D}}function N(t){const e=k(t);return e.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){return`${t.appName}!${t.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j=new Map;function M(t,e){const n=P(t);F(n,e),U(n,e)}function F(t,e){const n=j.get(t);if(n)for(const r of n)r(e)}function U(t,e){const n=$();n&&n.postMessage({key:t,fid:e}),V()}let B=null;function $(){return!B&&"BroadcastChannel"in self&&(B=new BroadcastChannel("[Firebase] FID Change"),B.onmessage=t=>{F(t.data.key,t.data.fid)}),B}function V(){0===j.size&&B&&(B.close(),B=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H="firebase-installations-database",z=1,K="firebase-installations-store";let q=null;function G(){return q||(q=(0,a.P2)(H,z,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(K)}}})),q}async function W(t,e){const n=P(t),r=await G(),i=r.transaction(K,"readwrite"),s=i.objectStore(K),o=await s.get(n);return await s.put(e,n),await i.done,o&&o.fid===e.fid||M(t,e.fid),e}async function X(t){const e=P(t),n=await G(),r=n.transaction(K,"readwrite");await r.objectStore(K).delete(e),await r.done}async function J(t,e){const n=P(t),r=await G(),i=r.transaction(K,"readwrite"),s=i.objectStore(K),o=await s.get(n),a=e(o);return void 0===a?await s.delete(n):await s.put(a,n),await i.done,!a||o&&o.fid===a.fid||M(t,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(t){let e;const n=await J(t.appConfig,(n=>{const r=Z(n),i=Q(t,r);return e=i.registrationPromise,i.installationEntry}));return n.fid===D?{installationEntry:await e}:{installationEntry:n,registrationPromise:e}}function Z(t){const e=t||{fid:L(),registrationStatus:0};return rt(e)}function Q(t,e){if(0===e.registrationStatus){if(!navigator.onLine){const t=Promise.reject(v.create("app-offline"));return{installationEntry:e,registrationPromise:t}}const n={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=tt(t,n);return{installationEntry:n,registrationPromise:r}}return 1===e.registrationStatus?{installationEntry:e,registrationPromise:et(t)}:{installationEntry:e}}async function tt(t,e){try{const n=await O(t,e);return W(t.appConfig,n)}catch(n){throw b(n)&&409===n.customData.serverCode?await X(t.appConfig):await W(t.appConfig,{fid:e.fid,registrationStatus:0}),n}}async function et(t){let e=await nt(t.appConfig);while(1===e.registrationStatus)await R(100),e=await nt(t.appConfig);if(0===e.registrationStatus){const{installationEntry:e,registrationPromise:n}=await Y(t);return n||e}return e}function nt(t){return J(t,(t=>{if(!t)throw v.create("installation-not-found");return rt(t)}))}function rt(t){return it(t)?{fid:t.fid,registrationStatus:0}:t}function it(t){return 1===t.registrationStatus&&t.registrationTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st({appConfig:t,heartbeatServiceProvider:e},n){const r=ot(t,n),i=T(t,n),s=e.getImmediate({optional:!0});if(s){const t=await s.getHeartbeatsHeader();t&&i.append("x-firebase-client",t)}const o={installation:{sdkVersion:h,appId:t.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},c=await C((()=>fetch(r,a)));if(c.ok){const t=await c.json(),e=E(t);return e}throw await _("Generate Auth Token",c)}function ot(t,{fid:e}){return`${w(t)}/${e}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function at(t,e=!1){let n;const r=await J(t.appConfig,(r=>{if(!ht(r))throw v.create("not-registered");const i=r.authToken;if(!e&&ft(i))return r;if(1===i.requestStatus)return n=ct(t,e),r;{if(!navigator.onLine)throw v.create("app-offline");const e=pt(r);return n=ut(t,e),e}})),i=n?await n:r.authToken;return i}async function ct(t,e){let n=await lt(t.appConfig);while(1===n.authToken.requestStatus)await R(100),n=await lt(t.appConfig);const r=n.authToken;return 0===r.requestStatus?at(t,e):r}function lt(t){return J(t,(t=>{if(!ht(t))throw v.create("not-registered");const e=t.authToken;return gt(e)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t}))}async function ut(t,e){try{const n=await st(t,e),r=Object.assign(Object.assign({},e),{authToken:n});return await W(t.appConfig,r),n}catch(n){if(!b(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await W(t.appConfig,n)}else await X(t.appConfig);throw n}}function ht(t){return void 0!==t&&2===t.registrationStatus}function ft(t){return 2===t.requestStatus&&!dt(t)}function dt(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+p}function pt(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function gt(t){return 1===t.requestStatus&&t.requestTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mt(t){const e=t,{installationEntry:n,registrationPromise:r}=await Y(e);return r?r.catch(console.error):at(e).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(t,e=!1){const n=t;await vt(n);const r=await at(n,e);return r.token}async function vt(t){const{registrationPromise:e}=await Y(t);e&&await e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function bt(t){if(!t||!t.options)throw wt("App Configuration");if(!t.name)throw wt("App Name");const e=["projectId","apiKey","appId"];for(const n of e)if(!t.options[n])throw wt(n);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function wt(t){return v.create("missing-app-config-values",{valueName:t})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="installations",_t="installations-internal",St=t=>{const e=t.getProvider("app").getImmediate(),n=bt(e),i=(0,r.j6)(e,"heartbeat"),s={app:e,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return s},Tt=t=>{const e=t.getProvider("app").getImmediate(),n=(0,r.j6)(e,Et).getImmediate(),i={getId:()=>mt(n),getToken:t=>yt(n,t)};return i};function Ct(){(0,r.om)(new o.uA(Et,St,"PUBLIC")),(0,r.om)(new o.uA(_t,Tt,"PRIVATE"))}Ct(),(0,r.KO)(c,l),(0,r.KO)(c,l,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const At="analytics",It="firebase_id",Ot="origin",Rt=6e4,kt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",xt="https://www.googletagmanager.com/gtag/js",Dt=new i.Vy("@firebase/analytics"),Lt={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Nt=new s.FA("analytics","Analytics",Lt);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Pt(t){if(!t.startsWith(xt)){const e=Nt.create("invalid-gtag-resource",{gtagURL:t});return Dt.warn(e.message),""}return t}function jt(t){return Promise.all(t.map((t=>t.catch((t=>t)))))}function Mt(t,e){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(t,e)),n}function Ft(t,e){const n=Mt("firebase-js-sdk-policy",{createScriptURL:Pt}),r=document.createElement("script"),i=`${xt}?l=${t}&id=${e}`;r.src=n?null===n||void 0===n?void 0:n.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Ut(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function Bt(t,e,n,r,i,s){const o=r[i];try{if(o)await e[o];else{const t=await jt(n),r=t.find((t=>t.measurementId===i));r&&await e[r.appId]}}catch(a){Dt.error(a)}t("config",i,s)}async function $t(t,e,n,r,i){try{let s=[];if(i&&i["send_to"]){let t=i["send_to"];Array.isArray(t)||(t=[t]);const r=await jt(n);for(const n of t){const t=r.find((t=>t.measurementId===n)),i=t&&e[t.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(e)),await Promise.all(s),t("event",r,i||{})}catch(s){Dt.error(s)}}function Vt(t,e,n,r){async function i(i,...s){try{if("event"===i){const[r,i]=s;await $t(t,e,n,r,i)}else if("config"===i){const[i,o]=s;await Bt(t,e,n,r,i,o)}else if("consent"===i){const[e,n]=s;t("consent",e,n)}else if("get"===i){const[e,n,r]=s;t("get",e,n,r)}else if("set"===i){const[e]=s;t("set",e)}else t(i,...s)}catch(o){Dt.error(o)}}return i}function Ht(t,e,n,r,i){let s=function(...t){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(s=window[i]),window[i]=Vt(s,t,e,n),{gtagCore:s,wrappedGtag:window[i]}}function zt(t){const e=window.document.getElementsByTagName("script");for(const n of Object.values(e))if(n.src&&n.src.includes(xt)&&n.src.includes(t))return n;return null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=30,qt=1e3;class Gt{constructor(t={},e=qt){this.throttleMetadata=t,this.intervalMillis=e}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,e){this.throttleMetadata[t]=e}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const Wt=new Gt;function Xt(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function Jt(t){var e;const{appId:n,apiKey:r}=t,i={method:"GET",headers:Xt(r)},s=kt.replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let t="";try{const n=await o.json();(null===(e=n.error)||void 0===e?void 0:e.message)&&(t=n.error.message)}catch(a){}throw Nt.create("config-fetch-failed",{httpStatus:o.status,responseMessage:t})}return o.json()}async function Yt(t,e=Wt,n){const{appId:r,apiKey:i,measurementId:s}=t.options;if(!r)throw Nt.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Nt.create("no-api-key")}const o=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ee;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Rt),Zt({appId:r,apiKey:i,measurementId:s},o,a,e)}async function Zt(t,{throttleEndTimeMillis:e,backoffCount:n},r,i=Wt){var o;const{appId:a,measurementId:c}=t;try{await Qt(r,e)}catch(l){if(c)return Dt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===l||void 0===l?void 0:l.message}]`),{appId:a,measurementId:c};throw l}try{const e=await Jt(t);return i.deleteThrottleMetadata(a),e}catch(l){const e=l;if(!te(e)){if(i.deleteThrottleMetadata(a),c)return Dt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===e||void 0===e?void 0:e.message}]`),{appId:a,measurementId:c};throw l}const u=503===Number(null===(o=null===e||void 0===e?void 0:e.customData)||void 0===o?void 0:o.httpStatus)?(0,s.p9)(n,i.intervalMillis,Kt):(0,s.p9)(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+u,backoffCount:n+1};return i.setThrottleMetadata(a,h),Dt.debug(`Calling attemptFetch again in ${u} millis`),Zt(t,h,r,i)}}function Qt(t,e){return new Promise(((n,r)=>{const i=Math.max(e-Date.now(),0),s=setTimeout(n,i);t.addEventListener((()=>{clearTimeout(s),r(Nt.create("fetch-throttle",{throttleEndTimeMillis:e}))}))}))}function te(t){if(!(t instanceof s.g)||!t.customData)return!1;const e=Number(t.customData["httpStatus"]);return 429===e||500===e||503===e||504===e}class ee{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach((t=>t()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ne,re;async function ie(t,e,n,r,i){if(i&&i.global)t("event",n,r);else{const i=await e,s=Object.assign(Object.assign({},r),{send_to:i});t("event",n,s)}}function se(t){re=t}function oe(t){ne=t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(){if(!(0,s.zW)())return Dt.warn(Nt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,s.eX)()}catch(t){return Dt.warn(Nt.create("indexeddb-unavailable",{errorInfo:null===t||void 0===t?void 0:t.toString()}).message),!1}return!0}async function ce(t,e,n,r,i,s,o){var a;const c=Yt(t);c.then((e=>{n[e.measurementId]=e.appId,t.options.measurementId&&e.measurementId!==t.options.measurementId&&Dt.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${e.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((t=>Dt.error(t))),e.push(c);const l=ae().then((t=>t?r.getId():void 0)),[u,h]=await Promise.all([c,l]);zt(s)||Ft(s,u.measurementId),re&&(i("consent","default",re),se(void 0)),i("js",new Date);const f=null!==(a=null===o||void 0===o?void 0:o.config)&&void 0!==a?a:{};return f[Ot]="firebase",f.update=!0,null!=h&&(f[It]=h),i("config",u.measurementId,f),ne&&(i("set",ne),oe(void 0)),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t){this.app=t}_delete(){return delete ue[this.app.options.appId],Promise.resolve()}}let ue={},he=[];const fe={};let de,pe,ge="dataLayer",me="gtag",ye=!1;function ve(){const t=[];if((0,s.sr)()&&t.push("This is a browser extension environment."),(0,s.dM)()||t.push("Cookies are not available."),t.length>0){const e=t.map(((t,e)=>`(${e+1}) ${t}`)).join(" "),n=Nt.create("invalid-analytics-context",{errorInfo:e});Dt.warn(n.message)}}function be(t,e,n){ve();const r=t.options.appId;if(!r)throw Nt.create("no-app-id");if(!t.options.apiKey){if(!t.options.measurementId)throw Nt.create("no-api-key");Dt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=ue[r])throw Nt.create("already-exists",{id:r});if(!ye){Ut(ge);const{wrappedGtag:t,gtagCore:e}=Ht(ue,he,fe,ge,me);pe=t,de=e,ye=!0}ue[r]=ce(t,he,fe,e,de,ge,n);const i=new le(t);return i}function we(t=(0,r.Sx)()){t=(0,s.Ku)(t);const e=(0,r.j6)(t,At);return e.isInitialized()?e.getImmediate():Ee(t)}function Ee(t,e={}){const n=(0,r.j6)(t,At);if(n.isInitialized()){const t=n.getImmediate();if((0,s.bD)(e,n.getOptions()))return t;throw Nt.create("already-initialized")}const i=n.initialize({options:e});return i}function _e(t,e,n,r){t=(0,s.Ku)(t),ie(pe,ue[t.app.options.appId],e,n,r).catch((t=>Dt.error(t)))}const Se="@firebase/analytics",Te="0.10.4";function Ce(){function t(t){try{const e=t.getProvider(At).getImmediate();return{logEvent:(t,n,r)=>_e(e,t,n,r)}}catch(e){throw Nt.create("interop-component-reg-failed",{reason:e})}}(0,r.om)(new o.uA(At,((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("installations-internal").getImmediate();return be(n,r,e)}),"PUBLIC")),(0,r.om)(new o.uA("analytics-internal",t,"PRIVATE")),(0,r.KO)(Se,Te),(0,r.KO)(Se,Te,"esm2017")}Ce()},223:function(t,e,n){n.d(e,{Wp:function(){return r.Wp}});var r=n(461),i="firebase",s="10.12.2";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KO)(i,s,"app")},884:function(t,e,n){n.d(e,{aU:function(){return It}});var r,i=n(461),s=n(125),o=n(424),a=n(743),c="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},l={};(function(){var t;
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(t,e){function n(){}n.prototype=e.prototype,t.D=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.C=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function n(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function s(t,e,n){n||(n=0);var r=Array(16);if("string"===typeof e)for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}function o(t,e){var n=c;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}function a(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=0|t[i];r&&s==e||(n[i]=s,r=!1)}this.g=n}e(i,n),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},i.prototype.u=function(t,e){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=this.B,i=this.h,o=0;o<e;){if(0==i)for(;o<=n;)s(this,t,o),o+=this.blockSize;if("string"===typeof t){for(;o<e;)if(r[i++]=t.charCodeAt(o++),i==this.blockSize){s(this,r),i=0;break}}else for(;o<e;)if(r[i++]=t[o++],i==this.blockSize){s(this,r),i=0;break}}this.h=i,this.o+=e},i.prototype.v=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.o;for(e=t.length-8;e<t.length;++e)t[e]=255&n,n/=256;for(this.u(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};var c={};function u(t){return-128<=t&&128>t?o(t,(function(t){return new a([0|t],0>t?-1:0)})):new a([0|t],0>t?-1:0)}function h(t){if(isNaN(t)||!isFinite(t))return d;if(0>t)return v(h(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=4294967296;return new a(e,0)}function f(t,e){if(0==t.length)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if("-"==t.charAt(0))return v(f(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=h(Math.pow(e,8)),r=d,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=h(Math.pow(e,s)),r=r.j(s).add(h(o))):(r=r.j(n),r=r.add(h(o)))}return r}var d=u(0),p=u(1),g=u(16777216);function m(t){if(0!=t.h)return!1;for(var e=0;e<t.g.length;e++)if(0!=t.g[e])return!1;return!0}function y(t){return-1==t.h}function v(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new a(n,~t.h).add(p)}function b(t,e){return t.add(v(e))}function w(t,e){for(;(65535&t[e])!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function E(t,e){this.g=t,this.h=e}function _(t,e){if(m(e))throw Error("division by zero");if(m(t))return new E(d,d);if(y(t))return e=_(v(t),e),new E(v(e.g),v(e.h));if(y(e))return e=_(t,v(e)),new E(v(e.g),e.h);if(30<t.g.length){if(y(t)||y(e))throw Error("slowDivide_ only works with positive integers.");for(var n=p,r=e;0>=r.l(t);)n=S(n),r=S(r);var i=T(n,1),s=T(r,1);for(r=T(r,2),n=T(n,2);!m(r);){var o=s.add(r);0>=o.l(t)&&(i=i.add(n),s=o),r=T(r,1),n=T(n,1)}return e=b(t,i.j(e)),new E(i,e)}for(i=d;0<=t.l(e);){for(n=Math.max(1,Math.floor(t.m()/e.m())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=h(n),o=s.j(e);y(o)||0<o.l(t);)n-=r,s=h(n),o=s.j(e);m(s)&&(s=p),i=i.add(s),t=b(t,o)}return new E(i,t)}function S(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.i(r)<<1|t.i(r-1)>>>31;return new a(n,t.h)}function T(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.i(s+n)>>>e|t.i(s+n+1)<<32-e:t.i(s+n);return new a(i,t.h)}t=a.prototype,t.m=function(){if(y(this))return-v(this).m();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.i(n);t+=(0<=r?r:4294967296+r)*e,e*=4294967296}return t},t.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(m(this))return"0";if(y(this))return"-"+v(this).toString(t);for(var e=h(Math.pow(t,6)),n=this,r="";;){var i=_(n,e).g;n=b(n,i.j(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,m(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}},t.i=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h},t.l=function(t){return t=b(this,t),y(t)?-1:m(t)?0:1},t.abs=function(){return y(this)?v(this):this},t.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(65535&this.i(i))+(65535&t.i(i)),o=(s>>>16)+(this.i(i)>>>16)+(t.i(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new a(n,-2147483648&n[n.length-1]?-1:0)},t.j=function(t){if(m(this)||m(t))return d;if(y(this))return y(t)?v(this).j(v(t)):v(v(this).j(t));if(y(t))return v(this.j(v(t)));if(0>this.l(g)&&0>t.l(g))return h(this.m()*t.m());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.i(r)>>>16,o=65535&this.i(r),c=t.i(i)>>>16,l=65535&t.i(i);n[2*r+2*i]+=o*l,w(n,2*r+2*i),n[2*r+2*i+1]+=s*l,w(n,2*r+2*i+1),n[2*r+2*i+1]+=o*c,w(n,2*r+2*i+1),n[2*r+2*i+2]+=s*c,w(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new a(n,0)},t.A=function(t){return _(this,t).h},t.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)&t.i(r);return new a(n,this.h&t.h)},t.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)|t.i(r);return new a(n,this.h|t.h)},t.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.i(r)^t.i(r);return new a(n,this.h^t.h)},i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,l.Md5=i,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=f,r=l.Integer=a}).apply("undefined"!==typeof c?c:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});var u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{},h={};(function(){var t,e="function"==typeof Object.defineProperties?Object.defineProperty:function(t,e,n){return t==Array.prototype||t==Object.prototype||(t[e]=n.value),t};function n(t){t=["object"==typeof globalThis&&globalThis,t,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof u&&u];for(var e=0;e<t.length;++e){var n=t[e];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}var r=n(this);function i(t,n){if(n)t:{var i=r;t=t.split(".");for(var s=0;s<t.length-1;s++){var o=t[s];if(!(o in i))break t;i=i[o]}t=t[t.length-1],s=i[t],n=n(s),n!=s&&null!=n&&e(i,t,{configurable:!0,writable:!0,value:n})}}function s(t,e){t instanceof String&&(t+="");var n=0,r=!1,i={next:function(){if(!r&&n<t.length){var i=n++;return{value:e(i,t[i]),done:!1}}return r=!0,{done:!0,value:void 0}}};return i[Symbol.iterator]=function(){return i},i}i("Array.prototype.values",(function(t){return t||function(){return s(this,(function(t,e){return e}))}}));
/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var o=o||{},a=this||self;function c(t){var e=typeof t;return e="object"!=e?e:t?Array.isArray(t)?"array":e:"null","array"==e||"object"==e&&"number"==typeof t.length}function l(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}function f(t,e,n){return t.call.apply(t.bind,arguments)}function d(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g(t,e,n){return g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?f:d,g.apply(null,arguments)}function m(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function y(t,e){function n(){}n.prototype=e.prototype,t.aa=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Qb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function v(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function b(t,e){for(let n=1;n<arguments.length;n++){const e=arguments[n];if(c(e)){const n=t.length||0,r=e.length||0;t.length=n+r;for(let i=0;i<r;i++)t[n+i]=e[i]}else t.push(e)}}class w{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function E(t){return/^[\s\xa0]*$/.test(t)}function _(){var t=a.navigator;return t&&(t=t.userAgent)?t:""}function S(t){return S[" "](t),t}S[" "]=function(){};var T=-1!=_().indexOf("Gecko")&&!(-1!=_().toLowerCase().indexOf("webkit")&&-1==_().indexOf("Edge"))&&!(-1!=_().indexOf("Trident")||-1!=_().indexOf("MSIE"))&&-1==_().indexOf("Edge");function C(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function A(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function I(t){const e={};for(const n in t)e[n]=t[n];return e}const O="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function R(t,e){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)t[n]=r[n];for(let e=0;e<O.length;e++)n=O[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function k(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function x(t){a.setTimeout((()=>{throw t}),0)}function D(){var t=F;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class L{constructor(){this.h=this.g=null}add(t,e){const n=N.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}}var N=new w((()=>new P),(t=>t.reset()));class P{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}let j,M=!1,F=new L,U=()=>{const t=a.Promise.resolve(void 0);j=()=>{t.then(B)}};var B=()=>{for(var t;t=D();){try{t.h.call(t.g)}catch(n){x(n)}var e=N;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}M=!1};function $(){this.s=this.s,this.C=this.C}function V(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}$.prototype.s=!1,$.prototype.ma=function(){this.s||(this.s=!0,this.N())},$.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},V.prototype.h=function(){this.defaultPrevented=!0};var H=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const t=()=>{};a.addEventListener("test",t,e),a.removeEventListener("test",t,e)}catch(n){}return t}();function z(t,e){if(V.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(T){t:{try{S(e.nodeName);var i=!0;break t}catch(s){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"===typeof t.pointerType?t.pointerType:K[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&z.aa.h.call(this)}}y(z,V);var K={2:"touch",3:"pen",4:"mouse"};z.prototype.h=function(){z.aa.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var q="closure_listenable_"+(1e6*Math.random()|0),G=0;function W(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++G,this.da=this.fa=!1}function X(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function J(t){this.src=t,this.g={},this.h=0}function Y(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=Array.prototype.indexOf.call(i,e,void 0);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(X(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function Z(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.da&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}J.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Z(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new W(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};var Q="closure_lm_"+(1e6*Math.random()|0),tt={};function et(t,e,n,r,i){if(r&&r.once)return it(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)et(t,e[s],n,r,i);return null}return n=ht(n),t&&t[q]?t.K(e,n,l(r)?!!r.capture:!!r,i):nt(t,e,n,!1,r,i)}function nt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=l(i)?!!i.capture:!!i,a=lt(t);if(a||(t[Q]=a=new J(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=rt(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)H||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(at(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function rt(){function t(n){return e.call(t.src,t.listener,n)}const e=ct;return t}function it(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)it(t,e[s],n,r,i);return null}return n=ht(n),t&&t[q]?t.L(e,n,l(r)?!!r.capture:!!r,i):nt(t,e,n,!0,r,i)}function st(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)st(t,e[s],n,r,i);else r=l(r)?!!r.capture:!!r,n=ht(n),t&&t[q]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Z(s,n,r,i),-1<n&&(X(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=lt(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Z(e,n,r,i)),(n=-1<t?e[t]:null)&&ot(n))}function ot(t){if("number"!==typeof t&&t&&!t.da){var e=t.src;if(e&&e[q])Y(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(at(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=lt(e))?(Y(n,t),0==n.h&&(n.src=null,e[Q]=null)):X(t)}}}function at(t){return t in tt?tt[t]:tt[t]="on"+t}function ct(t,e){if(t.da)t=!0;else{e=new z(e,this);var n=t.listener,r=t.ha||t.src;t.fa&&ot(t),t=n.call(r,e)}return t}function lt(t){return t=t[Q],t instanceof J?t:null}var ut="__closure_events_fn_"+(1e9*Math.random()>>>0);function ht(t){return"function"===typeof t?t:(t[ut]||(t[ut]=function(e){return t.handleEvent(e)}),t[ut])}function ft(){$.call(this),this.i=new J(this),this.M=this,this.F=null}function dt(t,e){var n,r=t.F;if(r)for(n=[];r;r=r.F)n.push(r);if(t=t.M,r=e.type||e,"string"===typeof e)e=new V(e,t);else if(e instanceof V)e.target=e.target||t;else{var i=e;e=new V(r,t),R(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=pt(o,r,!0,e)&&i}if(o=e.g=t,i=pt(o,r,!0,e)&&i,i=pt(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=pt(o,r,!1,e)&&i}function pt(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.da&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.fa&&Y(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}function gt(t,e,n){if("function"===typeof t)n&&(t=g(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:a.setTimeout(t,e||0)}function mt(t){t.g=gt((()=>{t.g=null,t.i&&(t.i=!1,mt(t))}),t.l);const e=t.h;t.h=null,t.m.apply(null,e)}y(ft,$),ft.prototype[q]=!0,ft.prototype.removeEventListener=function(t,e,n,r){st(this,t,e,n,r)},ft.prototype.N=function(){if(ft.aa.N.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)X(n[r]);delete e.g[t],e.h--}}this.F=null},ft.prototype.K=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},ft.prototype.L=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};class yt extends ${constructor(t,e){super(),this.m=t,this.l=e,this.h=null,this.i=!1,this.g=null}j(t){this.h=arguments,this.g?this.i=!0:mt(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function vt(t){$.call(this),this.h=t,this.g={}}y(vt,$);var bt=[];function wt(t){C(t.g,(function(t,e){this.g.hasOwnProperty(e)&&ot(t)}),t),t.g={}}vt.prototype.N=function(){vt.aa.N.call(this),wt(this)},vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Et=a.JSON.stringify,_t=a.JSON.parse,St=class{stringify(t){return a.JSON.stringify(t,void 0)}parse(t){return a.JSON.parse(t,void 0)}};function Tt(){}function Ct(t){return t.h||(t.h=t.i())}function At(){}Tt.prototype.h=null;var It={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Ot(){V.call(this,"d")}function Rt(){V.call(this,"c")}y(Ot,V),y(Rt,V);var kt={},xt=null;function Dt(){return xt=xt||new ft}function Lt(t){V.call(this,kt.La,t)}function Nt(t){const e=Dt();dt(e,new Lt(e))}function Pt(t,e){V.call(this,kt.STAT_EVENT,t),this.stat=e}function jt(t){const e=Dt();dt(e,new Pt(e,t))}function Mt(t,e){V.call(this,kt.Ma,t),this.size=e}function Ft(t,e){if("function"!==typeof t)throw Error("Fn must not be null and must be a function");return a.setTimeout((function(){t()}),e)}function Ut(){this.g=!0}function Bt(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+l+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}function $t(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}function Vt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+zt(t,n)+(r?" "+r:"")}))}function Ht(t,e){t.info((function(){return"TIMEOUT: "+e}))}function zt(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Et(n)}catch(a){return e}}kt.La="serverreachability",y(Lt,V),kt.STAT_EVENT="statevent",y(Pt,V),kt.Ma="timingevent",y(Mt,V),Ut.prototype.xa=function(){this.g=!1},Ut.prototype.info=function(){};var Kt,qt={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gt={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Wt(){}function Xt(t,e,n,r){this.j=t,this.i=e,this.l=n,this.R=r||1,this.U=new vt(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Jt}function Jt(){this.i=null,this.g="",this.h=!1}y(Wt,Tt),Wt.prototype.g=function(){return new XMLHttpRequest},Wt.prototype.i=function(){return{}},Kt=new Wt;var Yt={},Zt={};function Qt(t,e,n){t.L=1,t.v=Oe(Se(e)),t.m=n,t.P=!0,te(t,null)}function te(t,e){t.F=Date.now(),re(t),t.A=Se(t.v);var n=t.A,r=t.R;Array.isArray(r)||(r=[String(r)]),$e(n.i,"t",r),t.C=0,n=t.j.J,t.h=new Jt,t.g=Nn(t.j,n?e:null,!t.m),0<t.O&&(t.M=new yt(g(t.Y,t,t.g),t.O)),e=t.U,n=t.g,r=t.ca;var i="readystatechange";Array.isArray(i)||(i&&(bt[0]=i.toString()),i=bt);for(var s=0;s<i.length;s++){var o=et(n,i[s],r||e.handleEvent,!1,e.h||e);if(!o)break;e.g[o.key]=o}e=t.H?I(t.H):{},t.m?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.m,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Nt(),Bt(t.i,t.u,t.A,t.l,t.R,t.m)}function ee(t){return!!t.g&&("GET"==t.u&&2!=t.L&&t.j.Ca)}function ne(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?Zt:(n=Number(e.substring(n,r)),isNaN(n)?Yt:(r+=1,r+n>e.length?Zt:(e=e.slice(r,r+n),t.C=r+n,e)))}function re(t){t.S=Date.now()+t.I,ie(t,t.I)}function ie(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=Ft(g(t.ba,t),e)}function se(t){t.B&&(a.clearTimeout(t.B),t.B=null)}function oe(t){0==t.j.G||t.J||Rn(t.j,t)}function ae(t){se(t);var e=t.M;e&&"function"==typeof e.ma&&e.ma(),t.M=null,wt(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ma())}function ce(t,e){try{var n=t.j;if(0!=n.G&&(n.g==t||de(n.h,t)))if(!t.K&&de(n.h,t)&&3==n.G){try{var r=n.Da.g.parse(e)}catch(l){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;On(n),yn(n)}Cn(n),jt(18)}}else n.za=i[1],0<n.za-n.T&&37500>i[2]&&n.F&&0==n.v&&!n.C&&(n.C=Ft(g(n.Za,n),6e3));if(1>=fe(n.h)&&n.ca){try{n.ca()}catch(l){}n.ca=void 0}}else xn(n,11)}else if((t.K||n.g==t)&&On(n),!E(e))for(i=n.Da.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.T=l[0],l=l[1],2==n.G)if("c"==l[0]){n.K=l[1],n.ia=l[2];const e=l[3];null!=e&&(n.la=e,n.j.info("VER="+n.la));const i=l[4];null!=i&&(n.Aa=i,n.j.info("SVER="+n.Aa));const u=l[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.h;s.g||-1==t.indexOf("spdy")&&-1==t.indexOf("quic")&&-1==t.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(pe(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.ya=t,Ie(r.I,r.D,t))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-t.F,n.j.info("Handshake RTT: "+n.R+"ms")),r=n;var o=t;if(r.qa=Ln(r,r.J?r.ia:null,r.W),o.K){ge(r.h,o);var a=o,c=r.L;c&&(a.I=c),a.B&&(se(a),re(a)),r.g=o}else Tn(r);0<n.i.length&&bn(n)}else"stop"!=l[0]&&"close"!=l[0]||xn(n,7);else 3==n.G&&("stop"==l[0]||"close"==l[0]?"stop"==l[0]?xn(n,7):mn(n):"noop"!=l[0]&&n.l&&n.l.ta(l),n.v=0)}Nt(4)}catch(l){}}Xt.prototype.ca=function(t){t=t.target;const e=this.M;e&&3==hn(t)?e.j():this.Y(t)},Xt.prototype.Y=function(t){try{if(t==this.g)t:{const f=hn(this.g);var e=this.g.Ba();const d=this.g.Z();if(!(3>f)&&(3!=f||this.g&&(this.h.h||this.g.oa()||fn(this.g)))){this.J||4!=f||7==e||Nt(8==e||0>=d?3:2),se(this);var n=this.g.Z();this.X=n;e:if(ee(this)){var r=fn(this.g);t="";var i=r.length,s=4==hn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){ae(this),oe(this);var o="";break e}this.h.i=new a.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:!(s&&e==i-1)});r.length=0,this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.oa();if(this.o=200==n,$t(this.i,this.u,this.A,this.l,this.R,f,n),this.o){if(this.T&&!this.K){e:{if(this.g){var c,l=this.g;if((c=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!E(c)){var u=c;break e}}u=null}if(!(n=u)){this.o=!1,this.s=3,jt(12),ae(this),oe(this);break t}Vt(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,ce(this,n)}if(this.P){let t;for(n=!0;!this.J&&this.C<o.length;){if(t=ne(this,o),t==Zt){4==f&&(this.s=4,jt(14),n=!1),Vt(this.i,this.l,null,"[Incomplete Response]");break}if(t==Yt){this.s=4,jt(15),Vt(this.i,this.l,o,"[Invalid Chunk]"),n=!1;break}Vt(this.i,this.l,t,null),ce(this,t)}if(ee(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=f||0!=o.length||this.h.h||(this.s=1,jt(16),n=!1),this.o=this.o&&n,n){if(0<o.length&&!this.W){this.W=!0;var h=this.j;h.g==this&&h.ba&&!h.M&&(h.j.info("Great, no buffering proxy detected. Bytes received: "+o.length),An(h),h.M=!0,jt(11))}}else Vt(this.i,this.l,o,"[Invalid Chunked Response]"),ae(this),oe(this)}else Vt(this.i,this.l,o,null),ce(this,o);4==f&&ae(this),this.o&&!this.J&&(4==f?Rn(this.j,this):(this.o=!1,re(this)))}else dn(this.g),400==n&&0<o.indexOf("Unknown SID")?(this.s=3,jt(12)):(this.s=0,jt(13)),ae(this),oe(this)}}}catch(f){}},Xt.prototype.cancel=function(){this.J=!0,ae(this)},Xt.prototype.ba=function(){this.B=null;const t=Date.now();0<=t-this.S?(Ht(this.i,this.A),2!=this.L&&(Nt(),jt(17)),ae(this),this.s=2,oe(this)):ie(this,this.S-t)};var le=class{constructor(t,e){this.g=t,this.map=e}};function ue(t){this.l=t||10,a.PerformanceNavigationTiming?(t=a.performance.getEntriesByType("navigation"),t=0<t.length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol)):t=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function he(t){return!!t.h||!!t.g&&t.g.size>=t.j}function fe(t){return t.h?1:t.g?t.g.size:0}function de(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function pe(t,e){t.g?t.g.add(e):t.h=e}function ge(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function me(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return v(t.i)}function ye(t){if(t.V&&"function"==typeof t.V)return t.V();if("undefined"!==typeof Map&&t instanceof Map||"undefined"!==typeof Set&&t instanceof Set)return Array.from(t.values());if("string"===typeof t)return t.split("");if(c(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}function ve(t){if(t.na&&"function"==typeof t.na)return t.na();if(!t.V||"function"!=typeof t.V){if("undefined"!==typeof Map&&t instanceof Map)return Array.from(t.keys());if(!("undefined"!==typeof Set&&t instanceof Set)){if(c(t)||"string"===typeof t){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function be(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(c(t)||"string"===typeof t)Array.prototype.forEach.call(t,e,void 0);else for(var n=ve(t),r=ye(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}ue.prototype.cancel=function(){if(this.i=me(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}};var we=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ee(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function _e(t){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,t instanceof _e){this.h=t.h,Te(this,t.j),this.o=t.o,this.g=t.g,Ce(this,t.s),this.l=t.l;var e=t.i,n=new Me;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Ae(this,n),this.m=t.m}else t&&(e=String(t).match(we))?(this.h=!1,Te(this,e[1]||"",!0),this.o=Re(e[2]||""),this.g=Re(e[3]||"",!0),Ce(this,e[4]),this.l=Re(e[5]||"",!0),Ae(this,e[6]||"",!0),this.m=Re(e[7]||"")):(this.h=!1,this.i=new Me(null,this.h))}function Se(t){return new _e(t)}function Te(t,e,n){t.j=n?Re(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ce(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.s=e}else t.s=null}function Ae(t,e,n){e instanceof Me?(t.i=e,He(t.i,t.h)):(n||(e=ke(e,Pe)),t.i=new Me(e,t.h))}function Ie(t,e,n){t.i.set(e,n)}function Oe(t){return Ie(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Re(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ke(t,e,n){return"string"===typeof t?(t=encodeURI(t).replace(e,xe),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xe(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(15&t).toString(16)}_e.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ke(e,De,!0),":");var n=this.g;return(n||"file"==e)&&(t.push("//"),(e=this.o)&&t.push(ke(e,De,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.s,null!=n&&t.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&t.push("/"),t.push(ke(n,"/"==n.charAt(0)?Ne:Le,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.m)&&t.push("#",ke(n,je)),t.join("")};var De=/[#\/\?@]/g,Le=/[#\?:]/g,Ne=/[#\?]/g,Pe=/[#\?@]/g,je=/#/g;function Me(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Fe(t){t.g||(t.g=new Map,t.h=0,t.i&&Ee(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ue(t,e){Fe(t),e=Ve(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Be(t,e){return Fe(t),e=Ve(t,e),t.g.has(e)}function $e(t,e,n){Ue(t,e),0<n.length&&(t.i=null,t.g.set(Ve(t,e),v(n)),t.h+=n.length)}function Ve(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function He(t,e){e&&!t.j&&(Fe(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Ue(this,e),$e(this,n,t))}),t)),t.j=e}function ze(t,e){const n=new Ut;if(a.Image){const r=new Image;r.onload=m(qe,n,"TestLoadImage: loaded",!0,e,r),r.onerror=m(qe,n,"TestLoadImage: error",!1,e,r),r.onabort=m(qe,n,"TestLoadImage: abort",!1,e,r),r.ontimeout=m(qe,n,"TestLoadImage: timeout",!1,e,r),a.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}function Ke(t,e){const n=new Ut,r=new AbortController,i=setTimeout((()=>{r.abort(),qe(n,"TestPingServer: timeout",!1,e)}),1e4);fetch(t,{signal:r.signal}).then((t=>{clearTimeout(i),t.ok?qe(n,"TestPingServer: ok",!0,e):qe(n,"TestPingServer: server error",!1,e)})).catch((()=>{clearTimeout(i),qe(n,"TestPingServer: error",!1,e)}))}function qe(t,e,n,r,i){try{i&&(i.onload=null,i.onerror=null,i.onabort=null,i.ontimeout=null),r(n)}catch(s){}}function Ge(){this.g=new St}function We(t,e,n){const r=n||"";try{be(t,(function(t,n){let i=t;l(t)&&(i=Et(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function Xe(t){this.l=t.Ub||null,this.j=t.eb||!1}function Je(t,e){ft.call(this),this.D=t,this.o=e,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Ye(t){t.j.read().then(t.Pa.bind(t)).catch(t.ga.bind(t))}function Ze(t){t.readyState=4,t.l=null,t.j=null,t.v=null,Qe(t)}function Qe(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function tn(t){let e="";return C(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}function en(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=tn(n),"string"===typeof t?null!=n&&encodeURIComponent(String(n)):Ie(t,e,n))}function nn(t){ft.call(this),this.headers=new Map,this.o=t||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}t=Me.prototype,t.add=function(t,e){Fe(this),this.i=null,t=Ve(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},t.forEach=function(t,e){Fe(this),this.g.forEach((function(n,r){n.forEach((function(n){t.call(e,n,r,this)}),this)}),this)},t.na=function(){Fe(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let t=0;t<i.length;t++)n.push(e[r])}return n},t.V=function(t){Fe(this);let e=[];if("string"===typeof t)Be(this,t)&&(e=e.concat(this.g.get(Ve(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e},t.set=function(t,e){return Fe(this),this.i=null,t=Ve(this,t),Be(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},t.get=function(t,e){return t?(t=this.V(t),0<t.length?String(t[0]):e):e},t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var i=s;""!==o[r]&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")},y(Xe,Tt),Xe.prototype.g=function(){return new Je(this.l,this.j)},Xe.prototype.i=function(t){return function(){return t}}({}),y(Je,ft),t=Je.prototype,t.open=function(t,e){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=t,this.A=e,this.readyState=1,Qe(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.u,method:this.B,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||a).fetch(new Request(this.A,e)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,Ze(this)),this.readyState=0},t.Sa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Qe(this)),this.g&&(this.readyState=3,Qe(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if("undefined"!==typeof a.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Ye(this)}else t.text().then(this.Ra.bind(this),this.ga.bind(this))},t.Pa=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var e=t.value?t.value:new Uint8Array(0);(e=this.v.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ze(this):Qe(this),3==this.readyState&&Ye(this)}},t.Ra=function(t){this.g&&(this.response=this.responseText=t,Ze(this))},t.Qa=function(t){this.g&&(this.response=t,Ze(this))},t.ga=function(){this.g&&Ze(this)},t.setRequestHeader=function(t,e){this.u.append(t,e)},t.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(Je.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}}),y(nn,ft);var rn=/^https?$/i,sn=["POST","PUT"];function on(t,e){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=e,t.m=5,an(t),ln(t)}function an(t){t.A||(t.A=!0,dt(t,"complete"),dt(t,"error"))}function cn(t){if(t.h&&"undefined"!=typeof o&&(!t.v[1]||4!=hn(t)||2!=t.Z()))if(t.u&&4==hn(t))gt(t.Ea,0,t);else if(dt(t,"readystatechange"),4==hn(t)){t.h=!1;try{const o=t.Z();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===o){var i=String(t.D).match(we)[1]||null;!i&&a.self&&a.self.location&&(i=a.self.location.protocol.slice(0,-1)),r=!rn.test(i?i.toLowerCase():"")}n=r}if(n)dt(t,"complete"),dt(t,"success");else{t.m=6;try{var s=2<hn(t)?t.g.statusText:""}catch(c){s=""}t.l=s+" ["+t.Z()+"]",an(t)}}finally{ln(t)}}}function ln(t,e){if(t.g){un(t);const r=t.g,i=t.v[0]?()=>{}:null;t.g=null,t.v=null,e||dt(t,"ready");try{r.onreadystatechange=i}catch(n){}}}function un(t){t.I&&(a.clearTimeout(t.I),t.I=null)}function hn(t){return t.g?t.g.readyState:0}function fn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.H){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(p){return null}}function dn(t){const e={};t=(t.g&&2<=hn(t)&&t.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<t.length;r++){if(E(t[r]))continue;var n=k(t[r]);const i=n[0];if(n=n[1],"string"!==typeof n)continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}A(e,(function(t){return t.join(", ")}))}function pn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function gn(t){this.Aa=0,this.i=[],this.j=new Ut,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=pn("failFast",!1,t),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=pn("baseRetryDelayMs",5e3,t),this.cb=pn("retryDelaySeedMs",1e4,t),this.Wa=pn("forwardChannelMaxRetries",2,t),this.wa=pn("forwardChannelRequestTimeoutMs",2e4,t),this.pa=t&&t.xmlHttpFactory||void 0,this.Xa=t&&t.Tb||void 0,this.Ca=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.h=new ue(t&&t.concurrentRequestLimit),this.Da=new Ge,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=t&&t.Rb||!1,t&&t.xa&&this.j.xa(),t&&t.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&t&&t.detectBufferingProxy||!1,this.ja=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.ja=t.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function mn(t){if(vn(t),3==t.G){var e=t.U++,n=Se(t.I);if(Ie(n,"SID",t.K),Ie(n,"RID",e),Ie(n,"TYPE","terminate"),_n(t,n),e=new Xt(t,t.j,e),e.L=2,e.v=Oe(Se(n)),n=!1,a.navigator&&a.navigator.sendBeacon)try{n=a.navigator.sendBeacon(e.v.toString(),"")}catch(r){}!n&&a.Image&&((new Image).src=e.v,n=!0),n||(e.g=Nn(e.j,null),e.g.ea(e.v)),e.F=Date.now(),re(e)}Dn(t)}function yn(t){t.g&&(An(t),t.g.cancel(),t.g=null)}function vn(t){yn(t),t.u&&(a.clearTimeout(t.u),t.u=null),On(t),t.h.cancel(),t.s&&("number"===typeof t.s&&a.clearTimeout(t.s),t.s=null)}function bn(t){if(!he(t.h)&&!t.s){t.s=!0;var e=t.Ga;j||U(),M||(j(),M=!0),F.add(e,t),t.B=0}}function wn(t,e){return!(fe(t.h)>=t.h.j-(t.s?1:0))&&(t.s?(t.i=e.D.concat(t.i),!0):!(1==t.G||2==t.G||t.B>=(t.Va?0:t.Wa))&&(t.s=Ft(g(t.Ga,t,e),kn(t,t.B)),t.B++,!0))}function En(t,e){var n;n=e?e.l:t.U++;const r=Se(t.I);Ie(r,"SID",t.K),Ie(r,"RID",n),Ie(r,"AID",t.T),_n(t,r),t.m&&t.o&&en(r,t.m,t.o),n=new Xt(t,t.j,n,t.B+1),null===t.m&&(n.H=t.o),e&&(t.i=e.D.concat(t.i)),e=Sn(t,n,1e3),n.I=Math.round(.5*t.wa)+Math.round(.5*t.wa*Math.random()),pe(t.h,n),Qt(n,r,e)}function _n(t,e){t.H&&C(t.H,(function(t,n){Ie(e,n,t)})),t.l&&be({},(function(t,n){Ie(e,n,t)}))}function Sn(t,e,n){n=Math.min(t.i.length,n);var r=t.l?g(t.l.Na,t.l,t):null;t:{var i=t.i;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].g,t.push("ofs="+e)):e=0:t.push("ofs="+e);let o=!0;for(let a=0;a<n;a++){let n=i[a].g;const c=i[a].map;if(n-=e,0>n)e=Math.max(0,i[a].g-100),o=!1;else try{We(c,t,"req"+n+"_")}catch(s){r&&r(c)}}if(o){r=t.join("&");break t}}}return t=t.i.splice(0,n),e.D=t,r}function Tn(t){if(!t.g&&!t.u){t.Y=1;var e=t.Fa;j||U(),M||(j(),M=!0),F.add(e,t),t.v=0}}function Cn(t){return!(t.g||t.u||3<=t.v)&&(t.Y++,t.u=Ft(g(t.Fa,t),kn(t,t.v)),t.v++,!0)}function An(t){null!=t.A&&(a.clearTimeout(t.A),t.A=null)}function In(t){t.g=new Xt(t,t.j,"rpc",t.Y),null===t.m&&(t.g.H=t.o),t.g.O=0;var e=Se(t.qa);Ie(e,"RID","rpc"),Ie(e,"SID",t.K),Ie(e,"AID",t.T),Ie(e,"CI",t.F?"0":"1"),!t.F&&t.ja&&Ie(e,"TO",t.ja),Ie(e,"TYPE","xmlhttp"),_n(t,e),t.m&&t.o&&en(e,t.m,t.o),t.L&&(t.g.I=t.L);var n=t.g;t=t.ia,n.L=1,n.v=Oe(Se(e)),n.m=null,n.P=!0,te(n,t)}function On(t){null!=t.C&&(a.clearTimeout(t.C),t.C=null)}function Rn(t,e){var n=null;if(t.g==e){On(t),An(t),t.g=null;var r=2}else{if(!de(t.h,e))return;n=e.D,ge(t.h,e),r=1}if(0!=t.G)if(e.o)if(1==r){n=e.m?e.m.length:0,e=Date.now()-e.F;var i=t.B;r=Dt(),dt(r,new Mt(r,n)),bn(t)}else Tn(t);else if(i=e.s,3==i||0==i&&0<e.X||!(1==r&&wn(t,e)||2==r&&Cn(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:xn(t,5);break;case 4:xn(t,10);break;case 3:xn(t,6);break;default:xn(t,2)}}function kn(t,e){let n=t.Ta+Math.floor(Math.random()*t.cb);return t.isActive()||(n*=2),n*e}function xn(t,e){if(t.j.info("Error code "+e),2==e){var n=g(t.fb,t),r=t.Xa;const e=!r;r=new _e(r||"//www.google.com/images/cleardot.gif"),a.location&&"http"==a.location.protocol||Te(r,"https"),Oe(r),e?ze(r.toString(),n):Ke(r.toString(),n)}else jt(2);t.G=0,t.l&&t.l.sa(e),Dn(t),vn(t)}function Dn(t){if(t.G=0,t.ka=[],t.l){const e=me(t.h);0==e.length&&0==t.i.length||(b(t.ka,e),b(t.ka,t.i),t.h.i.length=0,v(t.i),t.i.length=0),t.l.ra()}}function Ln(t,e,n){var r=n instanceof _e?Se(n):new _e(n);if(""!=r.g)e&&(r.g=e+"."+r.g),Ce(r,r.s);else{var i=a.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new _e(null);r&&Te(s,r),e&&(s.g=e),i&&Ce(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.ya,n&&e&&Ie(r,n,e),Ie(r,"VER",t.la),_n(t,r),r}function Nn(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ca&&!t.pa?new nn(new Xe({eb:n})):new nn(t.pa),e.Ha(t.J),e}function Pn(){}function jn(){}function Mn(t,e){ft.call(this),this.g=new gn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.va&&(t?t["X-WebChannel-Client-Profile"]=e.va:t={"X-WebChannel-Client-Profile":e.va}),this.g.S=t,(t=e&&e.Sb)&&!E(t)&&(this.g.m=t),this.v=e&&e.supportsCrossDomainXhr||!1,this.u=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!E(e)&&(this.g.D=e,t=this.h,null!==t&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Bn(this)}function Fn(t){Ot.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function Un(){Rt.call(this),this.status=1}function Bn(t){this.g=t}t=nn.prototype,t.Ha=function(t){this.J=t},t.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);e=e?e.toUpperCase():"GET",this.D=t,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Kt.g(),this.v=this.o?Ct(this.o):Ct(Kt),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(e,String(t),!0),this.B=!1}catch(s){return void on(this,s)}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!==typeof r.keys||"function"!==typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const t of r.keys())n.set(t,r.get(t))}r=Array.from(n.keys()).find((t=>"content-type"==t.toLowerCase())),i=a.FormData&&t instanceof a.FormData,!(0<=Array.prototype.indexOf.call(sn,e,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{un(this),this.u=!0,this.g.send(t),this.u=!1}catch(s){on(this,s)}},t.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=t||7,dt(this,"complete"),dt(this,"abort"),ln(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),ln(this,!0)),nn.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?cn(this):this.bb())},t.bb=function(){cn(this)},t.isActive=function(){return!!this.g},t.Z=function(){try{return 2<hn(this)?this.g.status:-1}catch(t){return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},t.Oa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),_t(e)}},t.Ba=function(){return this.m},t.Ka=function(){return"string"===typeof this.l?this.l:String(this.l)},t=gn.prototype,t.la=8,t.G=1,t.connect=function(t,e,n,r){jt(0),this.W=t,this.H=e||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=Ln(this,null,this.W),bn(this)},t.Ga=function(t){if(this.s)if(this.s=null,1==this.G){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Xt(this,this.j,t);let s=this.o;if(this.S&&(s?(s=I(s),R(s,this.S)):s=this.S),null!==this.m||this.O||(i.H=s,s=null),this.P)t:{for(var e=0,n=0;n<this.i.length;n++){var r=this.i[n];if(r="__data__"in r.map&&(r=r.map.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(e+=r,4096<e){e=n;break t}if(4096===e||n===this.i.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=Sn(this,i,e),n=Se(this.I),Ie(n,"RID",t),Ie(n,"CVER",22),this.D&&Ie(n,"X-HTTP-Session-Id",this.D),_n(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(tn(s)))+"&"+e:this.m&&en(n,this.m,s)),pe(this.h,i),this.Ua&&Ie(n,"TYPE","init"),this.P?(Ie(n,"$req",e),Ie(n,"SID","null"),i.T=!0,Qt(i,n,null)):Qt(i,n,e),this.G=2}}else 3==this.G&&(t?En(this,t):0==this.i.length||he(this.h)||En(this))},t.Fa=function(){if(this.u=null,In(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var t=2*this.R;this.j.info("BP detection timer enabled: "+t),this.A=Ft(g(this.ab,this),t)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,jt(10),yn(this),In(this))},t.Za=function(){null!=this.C&&(this.C=null,yn(this),Cn(this),jt(19))},t.fb=function(t){t?(this.j.info("Successfully pinged google.com"),jt(2)):(this.j.info("Failed to ping google.com"),jt(1))},t.isActive=function(){return!!this.l&&this.l.isActive(this)},t=Pn.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){},jn.prototype.g=function(t,e){return new Mn(t,e)},y(Mn,ft),Mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Mn.prototype.close=function(){mn(this.g)},Mn.prototype.o=function(t){var e=this.g;if("string"===typeof t){var n={};n.__data__=t,t=n}else this.u&&(n={},n.__data__=Et(t),t=n);e.i.push(new le(e.Ya++,t)),3==e.G&&bn(e)},Mn.prototype.N=function(){this.g.l=null,delete this.j,mn(this.g),delete this.g,Mn.aa.N.call(this)},y(Fn,Ot),y(Un,Rt),y(Bn,Pn),Bn.prototype.ua=function(){dt(this.g,"a")},Bn.prototype.ta=function(t){dt(this.g,new Fn(t))},Bn.prototype.sa=function(t){dt(this.g,new Un)},Bn.prototype.ra=function(){dt(this.g,"b")},jn.prototype.createWebChannel=jn.prototype.g,Mn.prototype.send=Mn.prototype.o,Mn.prototype.open=Mn.prototype.m,Mn.prototype.close=Mn.prototype.close,h.createWebChannelTransport=function(){return new jn},h.getStatEventTarget=function(){return Dt()},h.Event=kt,h.Stat={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qt.NO_ERROR=0,qt.TIMEOUT=8,qt.HTTP_ERROR=6,h.ErrorCode=qt,Gt.COMPLETE="complete",h.EventType=Gt,At.EventType=It,It.OPEN="a",It.CLOSE="b",It.ERROR="c",It.MESSAGE="d",ft.prototype.listen=ft.prototype.K,h.WebChannel=At,h.FetchXmlHttpFactory=Xe,nn.prototype.listenOnce=nn.prototype.L,nn.prototype.getLastError=nn.prototype.Ka,nn.prototype.getLastErrorCode=nn.prototype.Ba,nn.prototype.getStatus=nn.prototype.Z,nn.prototype.getResponseJson=nn.prototype.Oa,nn.prototype.getResponseText=nn.prototype.oa,nn.prototype.send=nn.prototype.ea,nn.prototype.setWithCredentials=nn.prototype.Ha,h.XhrIo=nn}).apply("undefined"!==typeof u?u:"undefined"!==typeof self?self:"undefined"!==typeof window?window:{});const f="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}d.UNAUTHENTICATED=new d(null),d.GOOGLE_CREDENTIALS=new d("google-credentials-uid"),d.FIRST_PARTY=new d("first-party-uid"),d.MOCK_USER=new d("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let p="10.12.1";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g=new o.Vy("@firebase/firestore");function m(t,...e){if(g.logLevel<=o.$b.DEBUG){const n=e.map(b);g.debug(`Firestore (${p}): ${t}`,...n)}}function y(t,...e){if(g.logLevel<=o.$b.ERROR){const n=e.map(b);g.error(`Firestore (${p}): ${t}`,...n)}}function v(t,...e){if(g.logLevel<=o.$b.WARN){const n=e.map(b);g.warn(`Firestore (${p}): ${t}`,...n)}}function b(t){if("string"==typeof t)return t;try{
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return function(t){return JSON.stringify(t)}(t)}catch(e){return t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t="Unexpected state"){const e=`FIRESTORE (${p}) INTERNAL ASSERTION FAILED: `+t;throw y(e),new Error(e)}function E(t,e){t||w()}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class S extends a.g{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class A{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(d.UNAUTHENTICATED)))}shutdown(){}}class I{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class O{constructor(t){this.t=t,this.currentUser=d.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{m("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(m("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(m("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(E("string"==typeof e.accessToken),new C(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return E(null===t||"string"==typeof t),new d(t)}}class R{constructor(t,e,n){this.l=t,this.h=e,this.P=n,this.type="FirstParty",this.user=d.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class k{constructor(t,e,n){this.l=t,this.h=e,this.P=n}getToken(){return Promise.resolve(new R(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable((()=>e(d.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class x{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const n=t=>{null!=t.error&&m("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.R;return this.R=t.token,m("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{m("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.A.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.A.getImmediate({optional:!0});t?r(t):m("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(E("string"==typeof t.token),this.R=t.token,new x(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function L(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=L(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function P(t,e){return t<e?-1:t>e?1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class j{constructor(t,e,n){void 0===e?e=0:e>t.length&&w(),void 0===n?n=t.length-e:n>t.length-e&&w(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===j.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof j?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class M extends j{construct(t,e,n){return new M(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new S(_.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new M(e)}static emptyPath(){return new M([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class F{constructor(t){this.path=t}static fromPath(t){return new F(M.fromString(t))}static fromName(t){return new F(M.fromString(t).popFirst(5))}static empty(){return new F(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===M.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return M.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new F(new M(t.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}U.UNKNOWN_ID=-1;function B(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ${constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.ie(t),this.se=t=>e.writeSequenceNumber(t))}ie(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.se&&this.se(t),t}}function V(t){return 0===t&&1/t==-1/0}$.oe=-1;const H=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],z=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],K=z;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class q{constructor(t,e){this.comparator=t,this.root=e||W.EMPTY}insert(t,e){return new q(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,W.BLACK,null,null))}remove(t){return new q(this.comparator,this.root.remove(t,this.comparator).copy(null,null,W.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new G(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new G(this.root,t,this.comparator,!1)}getReverseIterator(){return new G(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new G(this.root,t,this.comparator,!0)}}class G{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class W{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:W.RED,this.left=null!=r?r:W.EMPTY,this.right=null!=i?i:W.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new W(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return W.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return W.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,W.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,W.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw w();if(this.right.isRed())throw w();const t=this.left.check();if(t!==this.right.check())throw w();return t+(this.isRed()?0:1)}}W.EMPTY=null,W.RED=!0,W.BLACK=!1,W.EMPTY=new class{constructor(){this.size=0}get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(t,e,n,r,i){return this}insert(t,e,n){return new W(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(t){this.comparator=t,this.data=new q(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new J(this.data.getIterator())}getIteratorFrom(t){return new J(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof X))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new X(this.comparator);return e.data=t,e}}class J{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Y extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Z{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(t){try{return atob(t)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new Y("Invalid base64 string: "+t):t}}(t);return new Z(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new Z(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return P(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Z.EMPTY_BYTE_STRING=new Z("");const Q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function tt(t){if(E(!!t),"string"==typeof t){let e=0;const n=Q.exec(t);if(E(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:et(t.seconds),nanos:et(t.nanos)}}function et(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function nt(t){return"string"==typeof t?Z.fromBase64String(t):Z.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rt{constructor(t,e,n,r,i,s,o,a,c){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=c}}class it{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new it("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof it&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new q(F.comparator);new q(F.comparator);new q(F.comparator),new X(F.comparator);new X(P);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var ot,at;(at=ot||(ot={}))[at.OK=0]="OK",at[at.CANCELLED=1]="CANCELLED",at[at.UNKNOWN=2]="UNKNOWN",at[at.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",at[at.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",at[at.NOT_FOUND=5]="NOT_FOUND",at[at.ALREADY_EXISTS=6]="ALREADY_EXISTS",at[at.PERMISSION_DENIED=7]="PERMISSION_DENIED",at[at.UNAUTHENTICATED=16]="UNAUTHENTICATED",at[at.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",at[at.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",at[at.ABORTED=10]="ABORTED",at[at.OUT_OF_RANGE=11]="OUT_OF_RANGE",at[at.UNIMPLEMENTED=12]="UNIMPLEMENTED",at[at.INTERNAL=13]="INTERNAL",at[at.UNAVAILABLE=14]="UNAVAILABLE",at[at.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new r([4294967295,4294967295],0);Error;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(()=>{const t={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const t={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})(),(()=>{const t={and:"AND",or:"OR"}})();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ct{constructor(){}Pt(t,e){this.It(t,e),e.Tt()}It(t,e){if("nullValue"in t)this.Et(e,5);else if("booleanValue"in t)this.Et(e,10),e.dt(t.booleanValue?1:0);else if("integerValue"in t)this.Et(e,15),e.dt(et(t.integerValue));else if("doubleValue"in t){const n=et(t.doubleValue);isNaN(n)?this.Et(e,13):(this.Et(e,15),V(n)?e.dt(0):e.dt(n))}else if("timestampValue"in t){let n=t.timestampValue;this.Et(e,20),"string"==typeof n&&(n=tt(n)),e.At(`${n.seconds||""}`),e.dt(n.nanos||0)}else if("stringValue"in t)this.Rt(t.stringValue,e),this.Vt(e);else if("bytesValue"in t)this.Et(e,30),e.ft(nt(t.bytesValue)),this.Vt(e);else if("referenceValue"in t)this.gt(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.Et(e,45),e.dt(n.latitude||0),e.dt(n.longitude||0)}else"mapValue"in t?st(t)?this.Et(e,Number.MAX_SAFE_INTEGER):(this.yt(t.mapValue,e),this.Vt(e)):"arrayValue"in t?(this.wt(t.arrayValue,e),this.Vt(e)):w()}Rt(t,e){this.Et(e,25),this.St(t,e)}St(t,e){e.At(t)}yt(t,e){const n=t.fields||{};this.Et(e,55);for(const r of Object.keys(n))this.Rt(r,e),this.It(n[r],e)}wt(t,e){const n=t.values||[];this.Et(e,50);for(const r of n)this.It(r,e)}gt(t,e){this.Et(e,37),F.fromName(t).path.forEach((t=>{this.Et(e,60),this.St(t,e)}))}Et(t,e){t.dt(e)}Vt(t){t.dt(2)}}ct.bt=new ct;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
new Uint8Array(0);class lt{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new lt(t,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */lt.DEFAULT_COLLECTION_PERCENTILE=10,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,lt.DEFAULT=new lt(41943040,lt.DEFAULT_COLLECTION_PERCENTILE,lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),lt.DISABLED=new lt(-1,0,0);function ut(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(t,e,n=1e3,r=1.5,i=6e4){this.oi=t,this.timerId=e,this.No=n,this.Lo=r,this.Bo=i,this.ko=0,this.qo=null,this.Qo=Date.now(),this.reset()}reset(){this.ko=0}Ko(){this.ko=this.Bo}$o(t){this.cancel();const e=Math.floor(this.ko+this.Uo()),n=Math.max(0,Date.now()-this.Qo),r=Math.max(0,e-n);r>0&&m("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.ko} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.qo=this.oi.enqueueAfterDelay(this.timerId,r,(()=>(this.Qo=Date.now(),t()))),this.ko*=this.Lo,this.ko<this.No&&(this.ko=this.No),this.ko>this.Bo&&(this.ko=this.Bo)}Wo(){null!==this.qo&&(this.qo.skipDelay(),this.qo=null)}cancel(){null!==this.qo&&(this.qo.cancel(),this.qo=null)}Uo(){return(Math.random()-.5)*this.ko}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ft{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new ft(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new S(_.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dt(t,e){if(y("AsyncQueue",`${e}: ${t}`),B(t))return new S(_.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt,gt;(gt=pt||(pt={})).J_="default",gt.Cache="cache";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt{constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=d.UNAUTHENTICATED,this.clientId=N.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{m("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(m("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new S(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=dt(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yt(t){const e={};return void 0!==t.timeoutSeconds&&(e.timeoutSeconds=t.timeoutSeconds),e
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const vt=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(t,e,n,r){if(!0===e&&!0===r)throw new S(_.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function wt(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":w()}function Et(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new S(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wt(t);throw new S(_.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class _t{constructor(t){var e,n;if(void 0===t.host){if(void 0!==t.ssl)throw new S(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new S(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}bt("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===t.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=yt(null!==(n=t.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(t){if(void 0!==t.timeoutSeconds){if(isNaN(t.timeoutSeconds))throw new S(_.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (must not be NaN)`);if(t.timeoutSeconds<5)throw new S(_.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (minimum allowed value is 5)`);if(t.timeoutSeconds>30)throw new S(_.INVALID_ARGUMENT,`invalid long polling timeout: ${t.timeoutSeconds} (maximum allowed value is 30)`)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(t,e){return t.timeoutSeconds===e.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class St{constructor(t,e,n,r){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _t({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new S(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new S(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _t(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new A;switch(t.type){case"firstParty":return new k(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new S(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=vt.get(t);e&&(m("ComponentProvider","Removing Datastore"),vt.delete(t),e.terminate())}(this),Promise.resolve()}}function Tt(t,e,n,r={}){var i;const s=(t=Et(t,St))._getSettings(),o=`${e}:${n}`;if("firestore.googleapis.com"!==s.host&&s.host!==o&&v("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let e,n;if("string"==typeof r.mockUserToken)e=r.mockUserToken,n=d.MOCK_USER;else{e=(0,a.Fy)(r.mockUserToken,null===(i=t._app)||void 0===i?void 0:i.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new S(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new d(s)}t._authCredentials=new I(new C(e,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct{constructor(){this.iu=Promise.resolve(),this.su=[],this.ou=!1,this._u=[],this.au=null,this.uu=!1,this.cu=!1,this.lu=[],this.Yo=new ht(this,"async_queue_retry"),this.hu=()=>{const t=ut();t&&m("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Yo.Wo()};const t=ut();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.hu)}get isShuttingDown(){return this.ou}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Pu(),this.Iu(t)}enterRestrictedMode(t){if(!this.ou){this.ou=!0,this.cu=t||!1;const e=ut();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.hu)}}enqueue(t){if(this.Pu(),this.ou)return new Promise((()=>{}));const e=new T;return this.Iu((()=>this.ou&&this.cu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.su.push(t),this.Tu())))}async Tu(){if(0!==this.su.length){try{await this.su[0](),this.su.shift(),this.Yo.reset()}catch(t){if(!B(t))throw t;m("AsyncQueue","Operation failed with retryable error: "+t)}this.su.length>0&&this.Yo.$o((()=>this.Tu()))}}Iu(t){const e=this.iu.then((()=>(this.uu=!0,t().catch((t=>{this.au=t,this.uu=!1;const e=function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t);throw y("INTERNAL UNHANDLED ERROR: ",e),t})).then((t=>(this.uu=!1,t))))));return this.iu=e,e}enqueueAfterDelay(t,e,n){this.Pu(),this.lu.indexOf(t)>-1&&(e=0);const r=ft.createAndSchedule(this,t,e,n,(t=>this.Eu(t)));return this._u.push(r),r}Pu(){this.au&&w()}verifyOperationInProgress(){}async du(){let t;do{t=this.iu,await t}while(t!==this.iu)}Au(t){for(const e of this._u)if(e.timerId===t)return!0;return!1}Ru(t){return this.du().then((()=>{this._u.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this._u)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.du()}))}Vu(t){this.lu.push(t)}Eu(t){const e=this._u.indexOf(t);this._u.splice(e,1)}}class At extends St{constructor(t,e,n,r){super(t,e,n,r),this.type="firestore",this._queue=function(){return new Ct}(),this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Ot(this),this._firestoreClient.terminate()}}function It(t,e){const n="object"==typeof t?t:(0,i.Sx)(),r="string"==typeof t?t:e||"(default)",s=(0,i.j6)(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const t=(0,a.yU)("firestore");t&&Tt(s,...t)}return s}function Ot(t){var e,n,r;const i=t._freezeSettings(),s=function(t,e,n,r){return new rt(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,yt(r.experimentalLongPollingOptions),r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new mt(t._authCredentials,t._appCheckCredentials,t._queue,s),(null===(n=i.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=i.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}new RegExp("[~\\*/\\[\\]]");new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){!function(t){p=t}(i.MF),(0,i.om)(new s.uA("firestore",((t,{instanceIdentifier:n,options:r})=>{const i=t.getProvider("app").getImmediate(),s=new At(new O(t.getProvider("auth-internal")),new D(t.getProvider("app-check-internal")),function(t,e){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new S(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new it(t.options.projectId,e)}(i,n),i);return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s}),"PUBLIC").setMultipleInstances(!0)),(0,i.KO)(f,"4.6.3",t),(0,i.KO)(f,"4.6.3","esm2017")}()},297:function(t,e,n){n.d(e,{P2:function(){return E}});const r=(t,e)=>e.some((e=>t instanceof e));let i,s;function o(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const c=new WeakMap,l=new WeakMap,u=new WeakMap,h=new WeakMap,f=new WeakMap;function d(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(b(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&c.set(e,t)})).catch((()=>{})),f.set(e,t),e}function p(t){if(l.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));l.set(t,e)}let g={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return l.get(t);if("objectStoreNames"===e)return t.objectStoreNames||u.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return b(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t}};function m(t){g=t(g)}function y(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(t)?function(...e){return t.apply(w(this),e),b(c.get(this))}:function(...e){return b(t.apply(w(this),e))}:function(e,...n){const r=t.call(w(this),e,...n);return u.set(r,e.sort?e.sort():[e]),b(r)}}function v(t){return"function"===typeof t?y(t):(t instanceof IDBTransaction&&p(t),r(t,o())?new Proxy(t,g):t)}function b(t){if(t instanceof IDBRequest)return d(t);if(h.has(t))return h.get(t);const e=v(t);return e!==t&&(h.set(t,e),f.set(e,t)),e}const w=t=>f.get(t);function E(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=b(o);return r&&o.addEventListener("upgradeneeded",(t=>{r(b(o.result),t.oldVersion,t.newVersion,b(o.transaction),t)})),n&&o.addEventListener("blocked",(t=>n(t.oldVersion,t.newVersion,t))),a.then((t=>{s&&t.addEventListener("close",(()=>s())),i&&t.addEventListener("versionchange",(t=>i(t.oldVersion,t.newVersion,t)))})).catch((()=>{})),a}const _=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],T=new Map;function C(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!==typeof e)return;if(T.get(e))return T.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!_.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return T.set(e,s),s}m((t=>({...t,get:(e,n,r)=>C(e,n)||t.get(e,n,r),has:(e,n)=>!!C(e,n)||t.has(e,n)})))},134:function(t,e,n){n.d(e,{A:function(){return bn}});var r={};function i(t,e){return function(){return t.apply(e,arguments)}}n.r(r),n.d(r,{hasBrowserEnv:function(){return Ft},hasStandardBrowserEnv:function(){return Bt},hasStandardBrowserWebWorkerEnv:function(){return $t},navigator:function(){return Ut},origin:function(){return Vt}});const{toString:s}=Object.prototype,{getPrototypeOf:o}=Object,a=(t=>e=>{const n=s.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),c=t=>(t=t.toLowerCase(),e=>a(e)===t),l=t=>e=>typeof e===t,{isArray:u}=Array,h=l("undefined");function f(t){return null!==t&&!h(t)&&null!==t.constructor&&!h(t.constructor)&&m(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const d=c("ArrayBuffer");function p(t){let e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&d(t.buffer),e}const g=l("string"),m=l("function"),y=l("number"),v=t=>null!==t&&"object"===typeof t,b=t=>!0===t||!1===t,w=t=>{if("object"!==a(t))return!1;const e=o(t);return(null===e||e===Object.prototype||null===Object.getPrototypeOf(e))&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},E=c("Date"),_=c("File"),S=c("Blob"),T=c("FileList"),C=t=>v(t)&&m(t.pipe),A=t=>{let e;return t&&("function"===typeof FormData&&t instanceof FormData||m(t.append)&&("formdata"===(e=a(t))||"object"===e&&m(t.toString)&&"[object FormData]"===t.toString()))},I=c("URLSearchParams"),[O,R,k,x]=["ReadableStream","Request","Response","Headers"].map(c),D=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function L(t,e,{allOwnKeys:n=!1}={}){if(null===t||"undefined"===typeof t)return;let r,i;if("object"!==typeof t&&(t=[t]),u(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),s=i.length;let o;for(r=0;r<s;r++)o=i[r],e.call(null,t[o],o,t)}}function N(t,e){e=e.toLowerCase();const n=Object.keys(t);let r,i=n.length;while(i-- >0)if(r=n[i],e===r.toLowerCase())return r;return null}const P=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),j=t=>!h(t)&&t!==P;function M(){const{caseless:t}=j(this)&&this||{},e={},n=(n,r)=>{const i=t&&N(e,r)||r;w(e[i])&&w(n)?e[i]=M(e[i],n):w(n)?e[i]=M({},n):u(n)?e[i]=n.slice():e[i]=n};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&L(arguments[r],n);return e}const F=(t,e,n,{allOwnKeys:r}={})=>(L(e,((e,r)=>{n&&m(e)?t[r]=i(e,n):t[r]=e}),{allOwnKeys:r}),t),U=t=>(65279===t.charCodeAt(0)&&(t=t.slice(1)),t),B=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},$=(t,e,n,r)=>{let i,s,a;const c={};if(e=e||{},null==t)return e;do{i=Object.getOwnPropertyNames(t),s=i.length;while(s-- >0)a=i[s],r&&!r(a,t,e)||c[a]||(e[a]=t[a],c[a]=!0);t=!1!==n&&o(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},V=(t,e,n)=>{t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return-1!==r&&r===n},H=t=>{if(!t)return null;if(u(t))return t;let e=t.length;if(!y(e))return null;const n=new Array(e);while(e-- >0)n[e]=t[e];return n},z=(t=>e=>t&&e instanceof t)("undefined"!==typeof Uint8Array&&o(Uint8Array)),K=(t,e)=>{const n=t&&t[Symbol.iterator],r=n.call(t);let i;while((i=r.next())&&!i.done){const n=i.value;e.call(t,n[0],n[1])}},q=(t,e)=>{let n;const r=[];while(null!==(n=t.exec(e)))r.push(n);return r},G=c("HTMLFormElement"),W=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,(function(t,e,n){return e.toUpperCase()+n})),X=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),J=c("RegExp"),Y=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};L(n,((n,i)=>{let s;!1!==(s=e(n,i,t))&&(r[i]=s||n)})),Object.defineProperties(t,r)},Z=t=>{Y(t,((e,n)=>{if(m(t)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=t[n];m(r)&&(e.enumerable=!1,"writable"in e?e.writable=!1:e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},Q=(t,e)=>{const n={},r=t=>{t.forEach((t=>{n[t]=!0}))};return u(t)?r(t):r(String(t).split(e)),n},tt=()=>{},et=(t,e)=>null!=t&&Number.isFinite(t=+t)?t:e,nt="abcdefghijklmnopqrstuvwxyz",rt="0123456789",it={DIGIT:rt,ALPHA:nt,ALPHA_DIGIT:nt+nt.toUpperCase()+rt},st=(t=16,e=it.ALPHA_DIGIT)=>{let n="";const{length:r}=e;while(t--)n+=e[Math.random()*r|0];return n};function ot(t){return!!(t&&m(t.append)&&"FormData"===t[Symbol.toStringTag]&&t[Symbol.iterator])}const at=t=>{const e=new Array(10),n=(t,r)=>{if(v(t)){if(e.indexOf(t)>=0)return;if(!("toJSON"in t)){e[r]=t;const i=u(t)?[]:{};return L(t,((t,e)=>{const s=n(t,r+1);!h(s)&&(i[e]=s)})),e[r]=void 0,i}}return t};return n(t,0)},ct=c("AsyncFunction"),lt=t=>t&&(v(t)||m(t))&&m(t.then)&&m(t.catch),ut=((t,e)=>t?setImmediate:e?((t,e)=>(P.addEventListener("message",(({source:n,data:r})=>{n===P&&r===t&&e.length&&e.shift()()}),!1),n=>{e.push(n),P.postMessage(t,"*")}))(`axios@${Math.random()}`,[]):t=>setTimeout(t))("function"===typeof setImmediate,m(P.postMessage)),ht="undefined"!==typeof queueMicrotask?queueMicrotask.bind(P):"undefined"!==typeof process&&process.nextTick||ut;var ft={isArray:u,isArrayBuffer:d,isBuffer:f,isFormData:A,isArrayBufferView:p,isString:g,isNumber:y,isBoolean:b,isObject:v,isPlainObject:w,isReadableStream:O,isRequest:R,isResponse:k,isHeaders:x,isUndefined:h,isDate:E,isFile:_,isBlob:S,isRegExp:J,isFunction:m,isStream:C,isURLSearchParams:I,isTypedArray:z,isFileList:T,forEach:L,merge:M,extend:F,trim:D,stripBOM:U,inherits:B,toFlatObject:$,kindOf:a,kindOfTest:c,endsWith:V,toArray:H,forEachEntry:K,matchAll:q,isHTMLForm:G,hasOwnProperty:X,hasOwnProp:X,reduceDescriptors:Y,freezeMethods:Z,toObjectSet:Q,toCamelCase:W,noop:tt,toFiniteNumber:et,findKey:N,global:P,isContextDefined:j,ALPHABET:it,generateString:st,isSpecCompliantForm:ot,toJSONObject:at,isAsyncFn:ct,isThenable:lt,setImmediate:ut,asap:ht};function dt(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i,this.status=i.status?i.status:null)}ft.inherits(dt,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ft.toJSONObject(this.config),code:this.code,status:this.status}}});const pt=dt.prototype,gt={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((t=>{gt[t]={value:t}})),Object.defineProperties(dt,gt),Object.defineProperty(pt,"isAxiosError",{value:!0}),dt.from=(t,e,n,r,i,s)=>{const o=Object.create(pt);return ft.toFlatObject(t,o,(function(t){return t!==Error.prototype}),(t=>"isAxiosError"!==t)),dt.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};var mt=dt,yt=null;function vt(t){return ft.isPlainObject(t)||ft.isArray(t)}function bt(t){return ft.endsWith(t,"[]")?t.slice(0,-2):t}function wt(t,e,n){return t?t.concat(e).map((function(t,e){return t=bt(t),!n&&e?"["+t+"]":t})).join(n?".":""):e}function Et(t){return ft.isArray(t)&&!t.some(vt)}const _t=ft.toFlatObject(ft,{},null,(function(t){return/^is[A-Z]/.test(t)}));function St(t,e,n){if(!ft.isObject(t))throw new TypeError("target must be an object");e=e||new(yt||FormData),n=ft.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(t,e){return!ft.isUndefined(e[t])}));const r=n.metaTokens,i=n.visitor||u,s=n.dots,o=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&ft.isSpecCompliantForm(e);if(!ft.isFunction(i))throw new TypeError("visitor must be a function");function l(t){if(null===t)return"";if(ft.isDate(t))return t.toISOString();if(!c&&ft.isBlob(t))throw new mt("Blob is not supported. Use a Buffer instead.");return ft.isArrayBuffer(t)||ft.isTypedArray(t)?c&&"function"===typeof Blob?new Blob([t]):Buffer.from(t):t}function u(t,n,i){let a=t;if(t&&!i&&"object"===typeof t)if(ft.endsWith(n,"{}"))n=r?n:n.slice(0,-2),t=JSON.stringify(t);else if(ft.isArray(t)&&Et(t)||(ft.isFileList(t)||ft.endsWith(n,"[]"))&&(a=ft.toArray(t)))return n=bt(n),a.forEach((function(t,r){!ft.isUndefined(t)&&null!==t&&e.append(!0===o?wt([n],r,s):null===o?n:n+"[]",l(t))})),!1;return!!vt(t)||(e.append(wt(i,n,s),l(t)),!1)}const h=[],f=Object.assign(_t,{defaultVisitor:u,convertValue:l,isVisitable:vt});function d(t,n){if(!ft.isUndefined(t)){if(-1!==h.indexOf(t))throw Error("Circular reference detected in "+n.join("."));h.push(t),ft.forEach(t,(function(t,r){const s=!(ft.isUndefined(t)||null===t)&&i.call(e,t,ft.isString(r)?r.trim():r,n,f);!0===s&&d(t,n?n.concat(r):[r])})),h.pop()}}if(!ft.isObject(t))throw new TypeError("data must be an object");return d(t),e}var Tt=St;function Ct(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,(function(t){return e[t]}))}function At(t,e){this._pairs=[],t&&Tt(t,this,e)}const It=At.prototype;It.append=function(t,e){this._pairs.push([t,e])},It.toString=function(t){const e=t?function(e){return t.call(this,e,Ct)}:Ct;return this._pairs.map((function(t){return e(t[0])+"="+e(t[1])}),"").join("&")};var Ot=At;function Rt(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function kt(t,e,n){if(!e)return t;const r=n&&n.encode||Rt;ft.isFunction(n)&&(n={serialize:n});const i=n&&n.serialize;let s;if(s=i?i(e,n):ft.isURLSearchParams(e)?e.toString():new Ot(e,n).toString(r),s){const e=t.indexOf("#");-1!==e&&(t=t.slice(0,e)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}class xt{constructor(){this.handlers=[]}use(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){ft.forEach(this.handlers,(function(e){null!==e&&t(e)}))}}var Dt=xt,Lt={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Nt="undefined"!==typeof URLSearchParams?URLSearchParams:Ot,Pt="undefined"!==typeof FormData?FormData:null,jt="undefined"!==typeof Blob?Blob:null,Mt={isBrowser:!0,classes:{URLSearchParams:Nt,FormData:Pt,Blob:jt},protocols:["http","https","file","blob","url","data"]};const Ft="undefined"!==typeof window&&"undefined"!==typeof document,Ut="object"===typeof navigator&&navigator||void 0,Bt=Ft&&(!Ut||["ReactNative","NativeScript","NS"].indexOf(Ut.product)<0),$t=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)(),Vt=Ft&&window.location.href||"http://localhost";var Ht={...r,...Mt};function zt(t,e){return Tt(t,new Ht.classes.URLSearchParams,Object.assign({visitor:function(t,e,n,r){return Ht.isNode&&ft.isBuffer(t)?(this.append(e,t.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},e))}function Kt(t){return ft.matchAll(/\w+|\[(\w*)]/g,t).map((t=>"[]"===t[0]?"":t[1]||t[0]))}function qt(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Gt(t){function e(t,n,r,i){let s=t[i++];if("__proto__"===s)return!0;const o=Number.isFinite(+s),a=i>=t.length;if(s=!s&&ft.isArray(r)?r.length:s,a)return ft.hasOwnProp(r,s)?r[s]=[r[s],n]:r[s]=n,!o;r[s]&&ft.isObject(r[s])||(r[s]=[]);const c=e(t,n,r[s],i);return c&&ft.isArray(r[s])&&(r[s]=qt(r[s])),!o}if(ft.isFormData(t)&&ft.isFunction(t.entries)){const n={};return ft.forEachEntry(t,((t,r)=>{e(Kt(t),r,n,0)})),n}return null}var Wt=Gt;function Xt(t,e,n){if(ft.isString(t))try{return(e||JSON.parse)(t),ft.trim(t)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(t)}const Jt={transitional:Lt,adapter:["xhr","http","fetch"],transformRequest:[function(t,e){const n=e.getContentType()||"",r=n.indexOf("application/json")>-1,i=ft.isObject(t);i&&ft.isHTMLForm(t)&&(t=new FormData(t));const s=ft.isFormData(t);if(s)return r?JSON.stringify(Wt(t)):t;if(ft.isArrayBuffer(t)||ft.isBuffer(t)||ft.isStream(t)||ft.isFile(t)||ft.isBlob(t)||ft.isReadableStream(t))return t;if(ft.isArrayBufferView(t))return t.buffer;if(ft.isURLSearchParams(t))return e.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let o;if(i){if(n.indexOf("application/x-www-form-urlencoded")>-1)return zt(t,this.formSerializer).toString();if((o=ft.isFileList(t))||n.indexOf("multipart/form-data")>-1){const e=this.env&&this.env.FormData;return Tt(o?{"files[]":t}:t,e&&new e,this.formSerializer)}}return i||r?(e.setContentType("application/json",!1),Xt(t)):t}],transformResponse:[function(t){const e=this.transitional||Jt.transitional,n=e&&e.forcedJSONParsing,r="json"===this.responseType;if(ft.isResponse(t)||ft.isReadableStream(t))return t;if(t&&ft.isString(t)&&(n&&!this.responseType||r)){const n=e&&e.silentJSONParsing,s=!n&&r;try{return JSON.parse(t)}catch(i){if(s){if("SyntaxError"===i.name)throw mt.from(i,mt.ERR_BAD_RESPONSE,this,null,this.response);throw i}}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Ht.classes.FormData,Blob:Ht.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};ft.forEach(["delete","get","head","post","put","patch"],(t=>{Jt.headers[t]={}}));var Yt=Jt;const Zt=ft.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var Qt=t=>{const e={};let n,r,i;return t&&t.split("\n").forEach((function(t){i=t.indexOf(":"),n=t.substring(0,i).trim().toLowerCase(),r=t.substring(i+1).trim(),!n||e[n]&&Zt[n]||("set-cookie"===n?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)})),e};const te=Symbol("internals");function ee(t){return t&&String(t).trim().toLowerCase()}function ne(t){return!1===t||null==t?t:ft.isArray(t)?t.map(ne):String(t)}function re(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(t))e[r[1]]=r[2];return e}const ie=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function se(t,e,n,r,i){return ft.isFunction(r)?r.call(this,e,n):(i&&(e=n),ft.isString(e)?ft.isString(r)?-1!==e.indexOf(r):ft.isRegExp(r)?r.test(e):void 0:void 0)}function oe(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((t,e,n)=>e.toUpperCase()+n))}function ae(t,e){const n=ft.toCamelCase(" "+e);["get","set","has"].forEach((r=>{Object.defineProperty(t,r+n,{value:function(t,n,i){return this[r].call(this,e,t,n,i)},configurable:!0})}))}class ce{constructor(t){t&&this.set(t)}set(t,e,n){const r=this;function i(t,e,n){const i=ee(e);if(!i)throw new Error("header name must be a non-empty string");const s=ft.findKey(r,i);(!s||void 0===r[s]||!0===n||void 0===n&&!1!==r[s])&&(r[s||e]=ne(t))}const s=(t,e)=>ft.forEach(t,((t,n)=>i(t,n,e)));if(ft.isPlainObject(t)||t instanceof this.constructor)s(t,e);else if(ft.isString(t)&&(t=t.trim())&&!ie(t))s(Qt(t),e);else if(ft.isHeaders(t))for(const[o,a]of t.entries())i(a,o,n);else null!=t&&i(e,t,n);return this}get(t,e){if(t=ee(t),t){const n=ft.findKey(this,t);if(n){const t=this[n];if(!e)return t;if(!0===e)return re(t);if(ft.isFunction(e))return e.call(this,t,n);if(ft.isRegExp(e))return e.exec(t);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,e){if(t=ee(t),t){const n=ft.findKey(this,t);return!(!n||void 0===this[n]||e&&!se(this,this[n],n,e))}return!1}delete(t,e){const n=this;let r=!1;function i(t){if(t=ee(t),t){const i=ft.findKey(n,t);!i||e&&!se(n,n[i],i,e)||(delete n[i],r=!0)}}return ft.isArray(t)?t.forEach(i):i(t),r}clear(t){const e=Object.keys(this);let n=e.length,r=!1;while(n--){const i=e[n];t&&!se(this,this[i],i,t,!0)||(delete this[i],r=!0)}return r}normalize(t){const e=this,n={};return ft.forEach(this,((r,i)=>{const s=ft.findKey(n,i);if(s)return e[s]=ne(r),void delete e[i];const o=t?oe(i):String(i).trim();o!==i&&delete e[i],e[o]=ne(r),n[o]=!0})),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const e=Object.create(null);return ft.forEach(this,((n,r)=>{null!=n&&!1!==n&&(e[r]=t&&ft.isArray(n)?n.join(", "):n)})),e}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([t,e])=>t+": "+e)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...e){const n=new this(t);return e.forEach((t=>n.set(t))),n}static accessor(t){const e=this[te]=this[te]={accessors:{}},n=e.accessors,r=this.prototype;function i(t){const e=ee(t);n[e]||(ae(r,t),n[e]=!0)}return ft.isArray(t)?t.forEach(i):i(t),this}}ce.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]),ft.reduceDescriptors(ce.prototype,(({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(t){this[n]=t}}})),ft.freezeMethods(ce);var le=ce;function ue(t,e){const n=this||Yt,r=e||n,i=le.from(r.headers);let s=r.data;return ft.forEach(t,(function(t){s=t.call(n,s,i.normalize(),e?e.status:void 0)})),i.normalize(),s}function he(t){return!(!t||!t.__CANCEL__)}function fe(t,e,n){mt.call(this,null==t?"canceled":t,mt.ERR_CANCELED,e,n),this.name="CanceledError"}ft.inherits(fe,mt,{__CANCEL__:!0});var de=fe;function pe(t,e,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?e(new mt("Request failed with status code "+n.status,[mt.ERR_BAD_REQUEST,mt.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):t(n)}function ge(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function me(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i,s=0,o=0;return e=void 0!==e?e:1e3,function(a){const c=Date.now(),l=r[o];i||(i=c),n[s]=a,r[s]=c;let u=o,h=0;while(u!==s)h+=n[u++],u%=t;if(s=(s+1)%t,s===o&&(o=(o+1)%t),c-i<e)return;const f=l&&c-l;return f?Math.round(1e3*h/f):void 0}}var ye=me;function ve(t,e){let n,r,i=0,s=1e3/e;const o=(e,s=Date.now())=>{i=s,n=null,r&&(clearTimeout(r),r=null),t.apply(null,e)},a=(...t)=>{const e=Date.now(),a=e-i;a>=s?o(t,e):(n=t,r||(r=setTimeout((()=>{r=null,o(n)}),s-a)))},c=()=>n&&o(n);return[a,c]}var be=ve;const we=(t,e,n=3)=>{let r=0;const i=ye(50,250);return be((n=>{const s=n.loaded,o=n.lengthComputable?n.total:void 0,a=s-r,c=i(a),l=s<=o;r=s;const u={loaded:s,total:o,progress:o?s/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-s)/c:void 0,event:n,lengthComputable:null!=o,[e?"download":"upload"]:!0};t(u)}),n)},Ee=(t,e)=>{const n=null!=t;return[r=>e[0]({lengthComputable:n,total:t,loaded:r}),e[1]]},_e=t=>(...e)=>ft.asap((()=>t(...e)));var Se=Ht.hasStandardBrowserEnv?((t,e)=>n=>(n=new URL(n,Ht.origin),t.protocol===n.protocol&&t.host===n.host&&(e||t.port===n.port)))(new URL(Ht.origin),Ht.navigator&&/(msie|trident)/i.test(Ht.navigator.userAgent)):()=>!0,Te=Ht.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];ft.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),ft.isString(r)&&o.push("path="+r),ft.isString(i)&&o.push("domain="+i),!0===s&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Ce(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function Ae(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function Ie(t,e){return t&&!Ce(e)?Ae(t,e):e}const Oe=t=>t instanceof le?{...t}:t;function Re(t,e){e=e||{};const n={};function r(t,e,n,r){return ft.isPlainObject(t)&&ft.isPlainObject(e)?ft.merge.call({caseless:r},t,e):ft.isPlainObject(e)?ft.merge({},e):ft.isArray(e)?e.slice():e}function i(t,e,n,i){return ft.isUndefined(e)?ft.isUndefined(t)?void 0:r(void 0,t,n,i):r(t,e,n,i)}function s(t,e){if(!ft.isUndefined(e))return r(void 0,e)}function o(t,e){return ft.isUndefined(e)?ft.isUndefined(t)?void 0:r(void 0,t):r(void 0,e)}function a(n,i,s){return s in e?r(n,i):s in t?r(void 0,n):void 0}const c={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(t,e,n)=>i(Oe(t),Oe(e),n,!0)};return ft.forEach(Object.keys(Object.assign({},t,e)),(function(r){const s=c[r]||i,o=s(t[r],e[r],r);ft.isUndefined(o)&&s!==a||(n[r]=o)})),n}var ke=t=>{const e=Re({},t);let n,{data:r,withXSRFToken:i,xsrfHeaderName:s,xsrfCookieName:o,headers:a,auth:c}=e;if(e.headers=a=le.from(a),e.url=kt(Ie(e.baseURL,e.url),t.params,t.paramsSerializer),c&&a.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):""))),ft.isFormData(r))if(Ht.hasStandardBrowserEnv||Ht.hasStandardBrowserWebWorkerEnv)a.setContentType(void 0);else if(!1!==(n=a.getContentType())){const[t,...e]=n?n.split(";").map((t=>t.trim())).filter(Boolean):[];a.setContentType([t||"multipart/form-data",...e].join("; "))}if(Ht.hasStandardBrowserEnv&&(i&&ft.isFunction(i)&&(i=i(e)),i||!1!==i&&Se(e.url))){const t=s&&o&&Te.read(o);t&&a.set(s,t)}return e};const xe="undefined"!==typeof XMLHttpRequest;var De=xe&&function(t){return new Promise((function(e,n){const r=ke(t);let i=r.data;const s=le.from(r.headers).normalize();let o,a,c,l,u,{responseType:h,onUploadProgress:f,onDownloadProgress:d}=r;function p(){l&&l(),u&&u(),r.cancelToken&&r.cancelToken.unsubscribe(o),r.signal&&r.signal.removeEventListener("abort",o)}let g=new XMLHttpRequest;function m(){if(!g)return;const r=le.from("getAllResponseHeaders"in g&&g.getAllResponseHeaders()),i=h&&"text"!==h&&"json"!==h?g.response:g.responseText,s={data:i,status:g.status,statusText:g.statusText,headers:r,config:t,request:g};pe((function(t){e(t),p()}),(function(t){n(t),p()}),s),g=null}g.open(r.method.toUpperCase(),r.url,!0),g.timeout=r.timeout,"onloadend"in g?g.onloadend=m:g.onreadystatechange=function(){g&&4===g.readyState&&(0!==g.status||g.responseURL&&0===g.responseURL.indexOf("file:"))&&setTimeout(m)},g.onabort=function(){g&&(n(new mt("Request aborted",mt.ECONNABORTED,t,g)),g=null)},g.onerror=function(){n(new mt("Network Error",mt.ERR_NETWORK,t,g)),g=null},g.ontimeout=function(){let e=r.timeout?"timeout of "+r.timeout+"ms exceeded":"timeout exceeded";const i=r.transitional||Lt;r.timeoutErrorMessage&&(e=r.timeoutErrorMessage),n(new mt(e,i.clarifyTimeoutError?mt.ETIMEDOUT:mt.ECONNABORTED,t,g)),g=null},void 0===i&&s.setContentType(null),"setRequestHeader"in g&&ft.forEach(s.toJSON(),(function(t,e){g.setRequestHeader(e,t)})),ft.isUndefined(r.withCredentials)||(g.withCredentials=!!r.withCredentials),h&&"json"!==h&&(g.responseType=r.responseType),d&&([c,u]=we(d,!0),g.addEventListener("progress",c)),f&&g.upload&&([a,l]=we(f),g.upload.addEventListener("progress",a),g.upload.addEventListener("loadend",l)),(r.cancelToken||r.signal)&&(o=e=>{g&&(n(!e||e.type?new de(null,t,g):e),g.abort(),g=null)},r.cancelToken&&r.cancelToken.subscribe(o),r.signal&&(r.signal.aborted?o():r.signal.addEventListener("abort",o)));const y=ge(r.url);y&&-1===Ht.protocols.indexOf(y)?n(new mt("Unsupported protocol "+y+":",mt.ERR_BAD_REQUEST,t)):g.send(i||null)}))};const Le=(t,e)=>{const{length:n}=t=t?t.filter(Boolean):[];if(e||n){let n,r=new AbortController;const i=function(t){if(!n){n=!0,o();const e=t instanceof Error?t:this.reason;r.abort(e instanceof mt?e:new de(e instanceof Error?e.message:e))}};let s=e&&setTimeout((()=>{s=null,i(new mt(`timeout ${e} of ms exceeded`,mt.ETIMEDOUT))}),e);const o=()=>{t&&(s&&clearTimeout(s),s=null,t.forEach((t=>{t.unsubscribe?t.unsubscribe(i):t.removeEventListener("abort",i)})),t=null)};t.forEach((t=>t.addEventListener("abort",i)));const{signal:a}=r;return a.unsubscribe=()=>ft.asap(o),a}};var Ne=Le;const Pe=function*(t,e){let n=t.byteLength;if(!e||n<e)return void(yield t);let r,i=0;while(i<n)r=i+e,yield t.slice(i,r),i=r},je=async function*(t,e){for await(const n of Me(t))yield*Pe(n,e)},Me=async function*(t){if(t[Symbol.asyncIterator])return void(yield*t);const e=t.getReader();try{for(;;){const{done:t,value:n}=await e.read();if(t)break;yield n}}finally{await e.cancel()}},Fe=(t,e,n,r)=>{const i=je(t,e);let s,o=0,a=t=>{s||(s=!0,r&&r(t))};return new ReadableStream({async pull(t){try{const{done:e,value:r}=await i.next();if(e)return a(),void t.close();let s=r.byteLength;if(n){let t=o+=s;n(t)}t.enqueue(new Uint8Array(r))}catch(e){throw a(e),e}},cancel(t){return a(t),i.return()}},{highWaterMark:2})},Ue="function"===typeof fetch&&"function"===typeof Request&&"function"===typeof Response,Be=Ue&&"function"===typeof ReadableStream,$e=Ue&&("function"===typeof TextEncoder?(t=>e=>t.encode(e))(new TextEncoder):async t=>new Uint8Array(await new Response(t).arrayBuffer())),Ve=(t,...e)=>{try{return!!t(...e)}catch(n){return!1}},He=Be&&Ve((()=>{let t=!1;const e=new Request(Ht.origin,{body:new ReadableStream,method:"POST",get duplex(){return t=!0,"half"}}).headers.has("Content-Type");return t&&!e})),ze=65536,Ke=Be&&Ve((()=>ft.isReadableStream(new Response("").body))),qe={stream:Ke&&(t=>t.body)};Ue&&(t=>{["text","arrayBuffer","blob","formData","stream"].forEach((e=>{!qe[e]&&(qe[e]=ft.isFunction(t[e])?t=>t[e]():(t,n)=>{throw new mt(`Response type '${e}' is not supported`,mt.ERR_NOT_SUPPORT,n)})}))})(new Response);const Ge=async t=>{if(null==t)return 0;if(ft.isBlob(t))return t.size;if(ft.isSpecCompliantForm(t)){const e=new Request(Ht.origin,{method:"POST",body:t});return(await e.arrayBuffer()).byteLength}return ft.isArrayBufferView(t)||ft.isArrayBuffer(t)?t.byteLength:(ft.isURLSearchParams(t)&&(t+=""),ft.isString(t)?(await $e(t)).byteLength:void 0)},We=async(t,e)=>{const n=ft.toFiniteNumber(t.getContentLength());return null==n?Ge(e):n};var Xe=Ue&&(async t=>{let{url:e,method:n,data:r,signal:i,cancelToken:s,timeout:o,onDownloadProgress:a,onUploadProgress:c,responseType:l,headers:u,withCredentials:h="same-origin",fetchOptions:f}=ke(t);l=l?(l+"").toLowerCase():"text";let d,p=Ne([i,s&&s.toAbortSignal()],o);const g=p&&p.unsubscribe&&(()=>{p.unsubscribe()});let m;try{if(c&&He&&"get"!==n&&"head"!==n&&0!==(m=await We(u,r))){let t,n=new Request(e,{method:"POST",body:r,duplex:"half"});if(ft.isFormData(r)&&(t=n.headers.get("content-type"))&&u.setContentType(t),n.body){const[t,e]=Ee(m,we(_e(c)));r=Fe(n.body,ze,t,e)}}ft.isString(h)||(h=h?"include":"omit");const i="credentials"in Request.prototype;d=new Request(e,{...f,signal:p,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:i?h:void 0});let s=await fetch(d);const o=Ke&&("stream"===l||"response"===l);if(Ke&&(a||o&&g)){const t={};["status","statusText","headers"].forEach((e=>{t[e]=s[e]}));const e=ft.toFiniteNumber(s.headers.get("content-length")),[n,r]=a&&Ee(e,we(_e(a),!0))||[];s=new Response(Fe(s.body,ze,n,(()=>{r&&r(),g&&g()})),t)}l=l||"text";let y=await qe[ft.findKey(qe,l)||"text"](s,t);return!o&&g&&g(),await new Promise(((e,n)=>{pe(e,n,{data:y,headers:le.from(s.headers),status:s.status,statusText:s.statusText,config:t,request:d})}))}catch(y){if(g&&g(),y&&"TypeError"===y.name&&/fetch/i.test(y.message))throw Object.assign(new mt("Network Error",mt.ERR_NETWORK,t,d),{cause:y.cause||y});throw mt.from(y,y&&y.code,t,d)}});const Je={http:yt,xhr:De,fetch:Xe};ft.forEach(Je,((t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch(n){}Object.defineProperty(t,"adapterName",{value:e})}}));const Ye=t=>`- ${t}`,Ze=t=>ft.isFunction(t)||null===t||!1===t;var Qe={getAdapter:t=>{t=ft.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){let e;if(n=t[s],r=n,!Ze(n)&&(r=Je[(e=String(n)).toLowerCase()],void 0===r))throw new mt(`Unknown adapter '${e}'`);if(r)break;i[e||"#"+s]=r}if(!r){const t=Object.entries(i).map((([t,e])=>`adapter ${t} `+(!1===e?"is not supported by the environment":"is not available in the build")));let n=e?t.length>1?"since :\n"+t.map(Ye).join("\n"):" "+Ye(t[0]):"as no adapter specified";throw new mt("There is no suitable adapter to dispatch the request "+n,"ERR_NOT_SUPPORT")}return r},adapters:Je};function tn(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new de(null,t)}function en(t){tn(t),t.headers=le.from(t.headers),t.data=ue.call(t,t.transformRequest),-1!==["post","put","patch"].indexOf(t.method)&&t.headers.setContentType("application/x-www-form-urlencoded",!1);const e=Qe.getAdapter(t.adapter||Yt.adapter);return e(t).then((function(e){return tn(t),e.data=ue.call(t,t.transformResponse,e),e.headers=le.from(e.headers),e}),(function(e){return he(e)||(tn(t),e&&e.response&&(e.response.data=ue.call(t,t.transformResponse,e.response),e.response.headers=le.from(e.response.headers))),Promise.reject(e)}))}const nn="1.7.9",rn={};["object","boolean","number","function","string","symbol"].forEach(((t,e)=>{rn[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));const sn={};function on(t,e,n){if("object"!==typeof t)throw new mt("options must be an object",mt.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;while(i-- >0){const s=r[i],o=e[s];if(o){const e=t[s],n=void 0===e||o(e,s,t);if(!0!==n)throw new mt("option "+s+" must be "+n,mt.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new mt("Unknown option "+s,mt.ERR_BAD_OPTION)}}rn.transitional=function(t,e,n){function r(t,e){return"[Axios v"+nn+"] Transitional option '"+t+"'"+e+(n?". "+n:"")}return(n,i,s)=>{if(!1===t)throw new mt(r(i," has been removed"+(e?" in "+e:"")),mt.ERR_DEPRECATED);return e&&!sn[i]&&(sn[i]=!0,console.warn(r(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,s)}},rn.spelling=function(t){return(e,n)=>(console.warn(`${n} is likely a misspelling of ${t}`),!0)};var an={assertOptions:on,validators:rn};const cn=an.validators;class ln{constructor(t){this.defaults=t,this.interceptors={request:new Dt,response:new Dt}}async request(t,e){try{return await this._request(t,e)}catch(n){if(n instanceof Error){let t={};Error.captureStackTrace?Error.captureStackTrace(t):t=new Error;const e=t.stack?t.stack.replace(/^.+\n/,""):"";try{n.stack?e&&!String(n.stack).endsWith(e.replace(/^.+\n.+\n/,""))&&(n.stack+="\n"+e):n.stack=e}catch(r){}}throw n}}_request(t,e){"string"===typeof t?(e=e||{},e.url=t):e=t||{},e=Re(this.defaults,e);const{transitional:n,paramsSerializer:r,headers:i}=e;void 0!==n&&an.assertOptions(n,{silentJSONParsing:cn.transitional(cn.boolean),forcedJSONParsing:cn.transitional(cn.boolean),clarifyTimeoutError:cn.transitional(cn.boolean)},!1),null!=r&&(ft.isFunction(r)?e.paramsSerializer={serialize:r}:an.assertOptions(r,{encode:cn.function,serialize:cn.function},!0)),an.assertOptions(e,{baseUrl:cn.spelling("baseURL"),withXsrfToken:cn.spelling("withXSRFToken")},!0),e.method=(e.method||this.defaults.method||"get").toLowerCase();let s=i&&ft.merge(i.common,i[e.method]);i&&ft.forEach(["delete","get","head","post","put","patch","common"],(t=>{delete i[t]})),e.headers=le.concat(s,i);const o=[];let a=!0;this.interceptors.request.forEach((function(t){"function"===typeof t.runWhen&&!1===t.runWhen(e)||(a=a&&t.synchronous,o.unshift(t.fulfilled,t.rejected))}));const c=[];let l;this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)}));let u,h=0;if(!a){const t=[en.bind(this),void 0];t.unshift.apply(t,o),t.push.apply(t,c),u=t.length,l=Promise.resolve(e);while(h<u)l=l.then(t[h++],t[h++]);return l}u=o.length;let f=e;h=0;while(h<u){const t=o[h++],e=o[h++];try{f=t(f)}catch(d){e.call(this,d);break}}try{l=en.call(this,f)}catch(d){return Promise.reject(d)}h=0,u=c.length;while(h<u)l=l.then(c[h++],c[h++]);return l}getUri(t){t=Re(this.defaults,t);const e=Ie(t.baseURL,t.url);return kt(e,t.params,t.paramsSerializer)}}ft.forEach(["delete","get","head","options"],(function(t){ln.prototype[t]=function(e,n){return this.request(Re(n||{},{method:t,url:e,data:(n||{}).data}))}})),ft.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(Re(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}ln.prototype[t]=e(),ln.prototype[t+"Form"]=e(!0)}));var un=ln;class hn{constructor(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");let e;this.promise=new Promise((function(t){e=t}));const n=this;this.promise.then((t=>{if(!n._listeners)return;let e=n._listeners.length;while(e-- >0)n._listeners[e](t);n._listeners=null})),this.promise.then=t=>{let e;const r=new Promise((t=>{n.subscribe(t),e=t})).then(t);return r.cancel=function(){n.unsubscribe(e)},r},t((function(t,r,i){n.reason||(n.reason=new de(t,r,i),e(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}toAbortSignal(){const t=new AbortController,e=e=>{t.abort(e)};return this.subscribe(e),t.signal.unsubscribe=()=>this.unsubscribe(e),t.signal}static source(){let t;const e=new hn((function(e){t=e}));return{token:e,cancel:t}}}var fn=hn;function dn(t){return function(e){return t.apply(null,e)}}function pn(t){return ft.isObject(t)&&!0===t.isAxiosError}const gn={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(gn).forEach((([t,e])=>{gn[e]=t}));var mn=gn;function yn(t){const e=new un(t),n=i(un.prototype.request,e);return ft.extend(n,un.prototype,e,{allOwnKeys:!0}),ft.extend(n,e,null,{allOwnKeys:!0}),n.create=function(e){return yn(Re(t,e))},n}const vn=yn(Yt);vn.Axios=un,vn.CanceledError=de,vn.CancelToken=fn,vn.isCancel=he,vn.VERSION=nn,vn.toFormData=Tt,vn.AxiosError=mt,vn.Cancel=vn.CanceledError,vn.all=function(t){return Promise.all(t)},vn.spread=dn,vn.isAxiosError=pn,vn.mergeConfig=Re,vn.AxiosHeaders=le,vn.formToJSON=t=>Wt(ft.isHTMLForm(t)?new FormData(t):t),vn.getAdapter=Qe.getAdapter,vn.HttpStatusCode=mn,vn.default=vn;var bn=vn}}]);
//# sourceMappingURL=chunk-vendors.41cfe9ae.js.map