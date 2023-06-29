(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{attentionMarkers:()=>Jt,contentInitial:()=>Vt,disable:()=>Xt,document:()=>jt,flow:()=>Wt,flowInitial:()=>qt,insideSpan:()=>Zt,string:()=>Kt,text:()=>Qt});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const n=window,i=n.ShadowRoot&&(void 0===n.ShadyCSS||n.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,r=Symbol(),s=new WeakMap;class o{constructor(e,t,n){if(this._$cssResult$=!0,n!==r)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(i&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=s.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&s.set(t,e))}return e}toString(){return this.cssText}}const l=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1]),e[0]);return new o(n,e,r)},a=i?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new o("string"==typeof e?e:e+"",void 0,r))(t)})(e):e;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var c;const u=window,h=u.trustedTypes,d=h?h.emptyScript:"",p=u.reactiveElementPolyfillSupport,f={toAttribute(e,t){switch(t){case Boolean:e=e?d:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},m=(e,t)=>t!==e&&(t==t||e==e),g={attribute:!0,type:String,converter:f,reflect:!1,hasChanged:m};class v extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;null!==(t=this.h)&&void 0!==t||(this.h=[]),this.h.push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const i=this._$Ep(n,t);void 0!==i&&(this._$Ev.set(i,n),e.push(i))})),e}static createProperty(e,t=g){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||g}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(a(e))}else void 0!==e&&t.push(a(e));return t}static _$Ep(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{i?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const i=document.createElement("style"),r=n.litNonce;void 0!==r&&i.setAttribute("nonce",r),i.textContent=t.cssText,e.appendChild(i)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=g){var i;const r=this.constructor._$Ep(e,n);if(void 0!==r&&!0===n.reflect){const s=(void 0!==(null===(i=n.converter)||void 0===i?void 0:i.toAttribute)?n.converter:f).toAttribute(t,n.type);this._$El=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=i.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(n=e.converter)||void 0===n?void 0:n.fromAttribute)?e.converter:f;this._$El=r,this[r]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,n){let i=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||m)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var b;v.finalized=!0,v.elementProperties=new Map,v.elementStyles=[],v.shadowRootOptions={mode:"open"},null==p||p({ReactiveElement:v}),(null!==(c=u.reactiveElementVersions)&&void 0!==c?c:u.reactiveElementVersions=[]).push("1.4.1");const y=window,x=y.trustedTypes,_=x?x.createPolicy("lit-html",{createHTML:e=>e}):void 0,w=`lit$${(Math.random()+"").slice(9)}$`,k="?"+w,$=`<${k}>`,A=document,S=(e="")=>A.createComment(e),C=e=>null===e||"object"!=typeof e&&"function"!=typeof e,E=Array.isArray,F=e=>E(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),M=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,I=/-->/g,z=/>/g,L=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),T=/'/g,O=/"/g,P=/^(?:script|style|textarea|title)$/i,D=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),U=D(1),R=D(2),N=Symbol.for("lit-noChange"),B=Symbol.for("lit-nothing"),H=new WeakMap,j=A.createTreeWalker(A,129,null,!1),V=(e,t)=>{const n=e.length-1,i=[];let r,s=2===t?"<svg>":"",o=M;for(let t=0;t<n;t++){const n=e[t];let l,a,c=-1,u=0;for(;u<n.length&&(o.lastIndex=u,a=o.exec(n),null!==a);)u=o.lastIndex,o===M?"!--"===a[1]?o=I:void 0!==a[1]?o=z:void 0!==a[2]?(P.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=L):void 0!==a[3]&&(o=L):o===L?">"===a[0]?(o=null!=r?r:M,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?L:'"'===a[3]?O:T):o===O||o===T?o=L:o===I||o===z?o=M:(o=L,r=void 0);const h=o===L&&e[t+1].startsWith("/>")?" ":"";s+=o===M?n+$:c>=0?(i.push(l),n.slice(0,c)+"$lit$"+n.slice(c)+w+h):n+w+(-2===c?(i.push(void 0),t):h)}const l=s+(e[n]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==_?_.createHTML(l):l,i]};class q{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,s=0;const o=e.length-1,l=this.parts,[a,c]=V(e,t);if(this.el=q.createElement(a,n),j.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=j.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(w)){const n=c[s++];if(e.push(t),void 0!==n){const e=i.getAttribute(n.toLowerCase()+"$lit$").split(w),t=/([.?@])?(.*)/.exec(n);l.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?J:"?"===t[1]?Y:"@"===t[1]?G:Z})}else l.push({type:6,index:r})}for(const t of e)i.removeAttribute(t)}if(P.test(i.tagName)){const e=i.textContent.split(w),t=e.length-1;if(t>0){i.textContent=x?x.emptyScript:"";for(let n=0;n<t;n++)i.append(e[n],S()),j.nextNode(),l.push({type:2,index:++r});i.append(e[t],S())}}}else if(8===i.nodeType)if(i.data===k)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(w,e+1));)l.push({type:7,index:r}),e+=w.length-1}r++}}static createElement(e,t){const n=A.createElement("template");return n.innerHTML=e,n}}function W(e,t,n=e,i){var r,s,o,l;if(t===N)return t;let a=void 0!==i?null===(r=n._$Co)||void 0===r?void 0:r[i]:n._$Cl;const c=C(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(s=null==a?void 0:a._$AO)||void 0===s||s.call(a,!1),void 0===c?a=void 0:(a=new c(e),a._$AT(e,n,i)),void 0!==i?(null!==(o=(l=n)._$Co)&&void 0!==o?o:l._$Co=[])[i]=a:n._$Cl=a),void 0!==a&&(t=W(e,a._$AS(e,t.values),a,i)),t}class K{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:n},parts:i}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:A).importNode(n,!0);j.currentNode=r;let s=j.nextNode(),o=0,l=0,a=i[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new Q(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new ee(s,this,e)),this.u.push(t),a=i[++l]}o!==(null==a?void 0:a.index)&&(s=j.nextNode(),o++)}return r}p(e){let t=0;for(const n of this.u)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class Q{constructor(e,t,n,i){var r;this.type=2,this._$AH=B,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cm=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=W(this,e,t),C(e)?e===B||null==e||""===e?(this._$AH!==B&&this._$AR(),this._$AH=B):e!==this._$AH&&e!==N&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):F(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==B&&C(this._$AH)?this._$AA.nextSibling.data=e:this.T(A.createTextNode(e)),this._$AH=e}$(e){var t;const{values:n,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=q.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.p(n);else{const e=new K(r,this),t=e.v(this.options);e.p(n),this.T(t),this._$AH=e}}_$AC(e){let t=H.get(e.strings);return void 0===t&&H.set(e.strings,t=new q(e)),t}k(e){E(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new Q(this.O(S()),this.O(S()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}}class Z{constructor(e,t,n,i,r){this.type=1,this._$AH=B,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=B}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const r=this.strings;let s=!1;if(void 0===r)e=W(this,e,t,0),s=!C(e)||e!==this._$AH&&e!==N,s&&(this._$AH=e);else{const i=e;let o,l;for(e=r[0],o=0;o<r.length-1;o++)l=W(this,i[n+o],t,o),l===N&&(l=this._$AH[o]),s||(s=!C(l)||l!==this._$AH[o]),l===B?e=B:e!==B&&(e+=(null!=l?l:"")+r[o+1]),this._$AH[o]=l}s&&!i&&this.j(e)}j(e){e===B?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}}class J extends Z{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===B?void 0:e}}const X=x?x.emptyScript:"";class Y extends Z{constructor(){super(...arguments),this.type=4}j(e){e&&e!==B?this.element.setAttribute(this.name,X):this.element.removeAttribute(this.name)}}class G extends Z{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=W(this,e,t,0))&&void 0!==n?n:B)===N)return;const i=this._$AH,r=e===B&&i!==B||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==B&&(i===B||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}}class ee{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){W(this,e)}}const te=y.litHtmlPolyfillSupport;null==te||te(q,Q),(null!==(b=y.litHtmlVersions)&&void 0!==b?b:y.litHtmlVersions=[]).push("2.4.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var ne,ie;class re extends v{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=((e,t,n)=>{var i,r;const s=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:t;let o=s._$litPart$;if(void 0===o){const e=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;s._$litPart$=o=new Q(t.insertBefore(S(),e),e,void 0,null!=n?n:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Do)||void 0===e||e.setConnected(!1)}render(){return N}}re.finalized=!0,re._$litElement$=!0,null===(ne=globalThis.litElementHydrateSupport)||void 0===ne||ne.call(globalThis,{LitElement:re});const se=globalThis.litElementPolyfillSupport;null==se||se({LitElement:re});(null!==(ie=globalThis.litElementVersions)&&void 0!==ie?ie:globalThis.litElementVersions=[]).push("3.2.2");
/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const oe=Symbol.for(""),le=e=>{if((null==e?void 0:e.r)===oe)return null==e?void 0:e._$litStatic$},ae=new Map,ce=e=>(t,...n)=>{const i=n.length;let r,s;const o=[],l=[];let a,c=0,u=!1;for(;c<i;){for(a=t[c];c<i&&void 0!==(s=n[c],r=le(s));)a+=r+t[++c],u=!0;l.push(s),o.push(a),c++}if(c===i&&o.push(t[i]),u){const e=o.join("$$lit$$");void 0===(t=ae.get(e))&&(o.raw=o,ae.set(e,t=o)),n=l}return e(t,...n)},ue=ce(U);ce(R);class he{constructor({title:e,logoSrc:t=""}){this.title=e||"Web Archives",this.logoSrc=t}}class de{constructor({name:e,url:t="",description:n=""}){this.url=t,this.description=n,this.name=e||t.slice(t.lastIndexOf("/")+1,t.lastIndexOf("."))}}class pe{constructor({embed:e,replayBase:t}){this.embed=e||"embed",this.replayBase=t||"../replay/"}}function fe(e,t){let n,i;if("string"==typeof e?i=e:"object"==typeof e&&e.constructor===Object&&e.name&&e.url&&(n=e.name,i=e.url),i)return new de({name:n,url:i,description:e.description});console.error(`Invalid WACZ data at index ${t||"unknown"}, skipping`)}class me{constructor(e){this.inited=this.load(e+"wrg-config.json")}async load(e){const t=await fetch(e),n=await t.json();this.init(n)}init({site:e,replay:t,archives:n}){this.site=new he(e||{}),this.replay=new pe(t||{}),this.archives=(n||[]).map(fe)}}let ge=null;const ve=async function(e){return ge||(ge=new me(e)),await ge.inited,ge},be=document.createElement("i");function ye(e){const t="&"+e+";";be.innerHTML=t;const n=be.textContent;return(59!==n.charCodeAt(n.length-1)||"semi"===e)&&(n!==t&&n)}function xe(e,t,n,i){const r=e.length;let s,o=0;if(t=t<0?-t>r?0:r+t:t>r?r:t,n=n>0?n:0,i.length<1e4)s=Array.from(i),s.unshift(t,n),e.splice(...s);else for(n&&e.splice(t,n);o<i.length;)s=i.slice(o,o+1e4),s.unshift(t,0),e.splice(...s),o+=1e4,t+=1e4}function _e(e,t){return e.length>0?(xe(e,e.length,0,t),e):t}const we={}.hasOwnProperty;function ke(e,t){let n;for(n in t){const i=(we.call(e,n)?e[n]:void 0)||(e[n]={}),r=t[n];let s;if(r)for(s in r){we.call(i,s)||(i[s]=[]);const e=r[s];$e(i[s],Array.isArray(e)?e:e?[e]:[])}}}function $e(e,t){let n=-1;const i=[];for(;++n<t.length;)("after"===t[n].add?e:i).push(t[n]);xe(e,0,0,i)}function Ae(e,t){let n;for(n in t){const i=(we.call(e,n)?e[n]:void 0)||(e[n]={}),r=t[n];let s;if(r)for(s in r)i[s]=r[s]}}const Se={'"':"quot","&":"amp","<":"lt",">":"gt"};function Ce(e){return e.replace(/["&<>]/g,(function(e){return"&"+Se[e]+";"}))}function Ee(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Fe=Be(/[A-Za-z]/),Me=Be(/[\dA-Za-z]/),Ie=Be(/[#-'*+\--9=?A-Z^-~]/);function ze(e){return null!==e&&(e<32||127===e)}const Le=Be(/\d/),Te=Be(/[\dA-Fa-f]/),Oe=Be(/[!-/:-@[-`{-~]/);function Pe(e){return null!==e&&e<-2}function De(e){return null!==e&&(e<0||32===e)}function Ue(e){return-2===e||-1===e||32===e}const Re=Be(/[!-\/:-@\[-`\{-~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/),Ne=Be(/\s/);function Be(e){return function(t){return null!==t&&e.test(String.fromCharCode(t))}}function He(e,t){const n=Ce(function(e){const t=[];let n=-1,i=0,r=0;for(;++n<e.length;){const s=e.charCodeAt(n);let o="";if(37===s&&Me(e.charCodeAt(n+1))&&Me(e.charCodeAt(n+2)))r=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(o=String.fromCharCode(s));else if(s>55295&&s<57344){const t=e.charCodeAt(n+1);s<56320&&t>56319&&t<57344?(o=String.fromCharCode(s,t),r=1):o="�"}else o=String.fromCharCode(s);o&&(t.push(e.slice(i,n),encodeURIComponent(o)),i=n+r+1,o=""),r&&(n+=r,r=0)}return t.join("")+e.slice(i)}(e||""));if(!t)return n;const i=n.indexOf(":"),r=n.indexOf("?"),s=n.indexOf("#"),o=n.indexOf("/");return i<0||o>-1&&i>o||r>-1&&i>r||s>-1&&i>s||t.test(n.slice(0,i))?n:""}const je={}.hasOwnProperty,Ve=/^(https?|ircs?|mailto|xmpp)$/i,qe=/^https?$/i;function We(e){const t=e||{};let n=!0;const i={},r=[[]],s=[],o=[],l=function(e){const t={};let n=-1;for(;++n<e.length;)Ae(t,e[n]);return t}([{enter:{blockQuote:function(){o.push(!1),y(),g("<blockquote>")},codeFenced:function(){y(),g("<pre><code"),d("fencesCount",0)},codeFencedFenceInfo:f,codeFencedFenceMeta:f,codeIndented:function(){y(),g("<pre><code>")},codeText:function(){d("inCodeText",!0),g("<code>")},content:function(){d("slurpAllLineEndings",!0)},definition:function(){f(),s.push({})},definitionDestinationString:function(){f(),d("ignoreEncode",!0)},definitionLabelString:f,definitionTitleString:f,emphasis:function(){g("<em>")},htmlFlow:function(){y(),C()},htmlText:C,image:function(){s.push({image:!0}),n=void 0},label:f,link:function(){s.push({})},listItemMarker:function(){p("expectFirstItem")?g(">"):_();y(),g("<li>"),d("expectFirstItem"),d("lastWasTag")},listItemValue:function(e){if(p("expectFirstItem")){const t=Number.parseInt(this.sliceSerialize(e),10);1!==t&&g(' start="'+x(String(t))+'"')}},listOrdered:function(e){o.push(!e._loose),y(),g("<ol"),d("expectFirstItem",!0)},listUnordered:function(e){o.push(!e._loose),y(),g("<ul"),d("expectFirstItem",!0)},paragraph:function(){o[o.length-1]||(y(),g("<p>"));d("slurpAllLineEndings")},reference:f,resource:function(){f(),s[s.length-1].destination=""},resourceDestinationString:function(){f(),d("ignoreEncode",!0)},resourceTitleString:f,setextHeading:function(){f(),d("slurpAllLineEndings")},strong:function(){g("<strong>")}},exit:{atxHeading:function(){g("</h"+p("headingRank")+">"),d("headingRank")},atxHeadingSequence:function(e){if(p("headingRank"))return;d("headingRank",this.sliceSerialize(e).length),y(),g("<h"+p("headingRank")+">")},autolinkEmail:function(e){const t=this.sliceSerialize(e);g('<a href="'+He("mailto:"+t)+'">'),v(x(t)),g("</a>")},autolinkProtocol:function(e){const n=this.sliceSerialize(e);g('<a href="'+He(n,t.allowDangerousProtocol?void 0:Ve)+'">'),v(x(n)),g("</a>")},blockQuote:function(){o.pop(),y(),g("</blockquote>"),d("slurpAllLineEndings")},characterEscapeValue:$,characterReferenceMarkerHexadecimal:E,characterReferenceMarkerNumeric:E,characterReferenceValue:function(e){let t=this.sliceSerialize(e);t=p("characterReferenceType")?function(e,t){const n=Number.parseInt(e,t);return n<9||11===n||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||65535==(65535&n)||65534==(65535&n)||n>1114111?"�":String.fromCharCode(n)}(t,"characterReferenceMarkerNumeric"===p("characterReferenceType")?10:16):ye(t),v(x(t)),d("characterReferenceType")},codeFenced:w,codeFencedFence:function(){const e=p("fencesCount")||0;e||(g(">"),d("slurpOneLineEnding",!0));d("fencesCount",e+1)},codeFencedFenceInfo:function(){g(' class="language-'+m()+'"')},codeFencedFenceMeta:m,codeFlowValue:function(e){v(x(this.sliceSerialize(e))),d("flowCodeSeenData",!0)},codeIndented:w,codeText:function(){d("inCodeText"),g("</code>")},codeTextData:$,data:$,definition:function(){const e=Ee(s[s.length-1].labelId);m(),je.call(i,e)||(i[e]=s[s.length-1]);s.pop()},definitionDestinationString:function(){s[s.length-1].destination=m(),d("ignoreEncode")},definitionLabelString:function(e){m(),s[s.length-1].labelId=this.sliceSerialize(e)},definitionTitleString:function(){s[s.length-1].title=m()},emphasis:function(){g("</em>")},hardBreakEscape:A,hardBreakTrailing:A,htmlFlow:S,htmlFlowData:$,htmlText:S,htmlTextData:$,image:k,label:function(){s[s.length-1].label=m()},labelText:function(e){s[s.length-1].labelId=this.sliceSerialize(e)},lineEnding:function(e){if(p("slurpAllLineEndings"))return;if(p("slurpOneLineEnding"))return void d("slurpOneLineEnding");if(p("inCodeText"))return void v(" ");v(x(this.sliceSerialize(e)))},link:k,listOrdered:function(){_(),o.pop(),b(),g("</ol>")},listUnordered:function(){_(),o.pop(),b(),g("</ul>")},paragraph:function(){o[o.length-1]?d("slurpAllLineEndings",!0):g("</p>")},reference:m,referenceString:function(e){s[s.length-1].referenceId=this.sliceSerialize(e)},resource:m,resourceDestinationString:function(){s[s.length-1].destination=m(),d("ignoreEncode")},resourceTitleString:function(){s[s.length-1].title=m()},setextHeading:function(){const e=m();y(),g("<h"+p("headingRank")+">"),v(e),g("</h"+p("headingRank")+">"),d("slurpAllLineEndings"),d("headingRank")},setextHeadingLineSequence:function(e){d("headingRank",61===this.sliceSerialize(e).charCodeAt(0)?1:2)},setextHeadingText:function(){d("slurpAllLineEndings",!0)},strong:function(){g("</strong>")},thematicBreak:function(){y(),g("<hr />")}}}].concat(t.htmlExtensions||[])),a={tightStack:o,definitions:i},c={lineEndingIfNeeded:y,options:t,encode:x,raw:v,tag:g,buffer:f,resume:m,setData:d,getData:p};let u=t.defaultLineEnding;return function(e){let t=-1,n=0;const i=[];let s=[],o=[];for(;++t<e.length;)u||"lineEnding"!==e[t][1].type&&"lineEndingBlank"!==e[t][1].type||(u=e[t][2].sliceSerialize(e[t][1])),"listOrdered"!==e[t][1].type&&"listUnordered"!==e[t][1].type||("enter"===e[t][0]?i.push(t):h(e.slice(i.pop(),t))),"definition"===e[t][1].type&&("enter"===e[t][0]?(o=_e(o,e.slice(n,t)),n=t):(s=_e(s,e.slice(n,t+1)),n=t+1));s=_e(s,o),s=_e(s,e.slice(n)),t=-1;const a=s;l.enter.null&&l.enter.null.call(c);for(;++t<e.length;){const e=l[a[t][0]],n=a[t][1].type,i=e[n];je.call(e,n)&&i&&i.call(Object.assign({sliceSerialize:a[t][2].sliceSerialize},c),a[t][1])}l.exit.null&&l.exit.null.call(c);return r[0].join("")};function h(e){const t=e.length;let n,i=0,r=0,s=!1;for(;++i<t;){const t=e[i];if(t[1]._container)n=void 0,"enter"===t[0]?r++:r--;else switch(t[1].type){case"listItemPrefix":"exit"===t[0]&&(n=!0);break;case"linePrefix":break;case"lineEndingBlank":"enter"!==t[0]||r||(n?n=void 0:s=!0);break;default:n=void 0}}e[0][1]._loose=s}function d(e,t){a[e]=t}function p(e){return a[e]}function f(){r.push([])}function m(){return r.pop().join("")}function g(e){n&&(d("lastWasTag",!0),r[r.length-1].push(e))}function v(e){d("lastWasTag"),r[r.length-1].push(e)}function b(){v(u||"\n")}function y(){const e=r[r.length-1],t=e[e.length-1],n=t?t.charCodeAt(t.length-1):null;10!==n&&13!==n&&null!==n&&b()}function x(e){return p("ignoreEncode")?e:Ce(e)}function _(){p("lastWasTag")&&!p("slurpAllLineEndings")&&y(),g("</li>"),d("slurpAllLineEndings")}function w(){const e=p("fencesCount");void 0!==e&&e<2&&a.tightStack.length>0&&!p("lastWasTag")&&b(),p("flowCodeSeenData")&&y(),g("</code></pre>"),void 0!==e&&e<2&&y(),d("flowCodeSeenData"),d("fencesCount"),d("slurpOneLineEnding")}function k(){let e=s.length-1;const r=s[e],o=r.referenceId||r.labelId,l=void 0===r.destination?i[Ee(o)]:r;for(n=!0;e--;)if(s[e].image){n=void 0;break}r.image?(g('<img src="'+He(l.destination,t.allowDangerousProtocol?void 0:qe)+'" alt="'),v(r.label),g('"')):g('<a href="'+He(l.destination,t.allowDangerousProtocol?void 0:Ve)+'"'),g(l.title?' title="'+l.title+'"':""),r.image?g(" />"):(g(">"),v(r.label),g("</a>")),s.pop()}function $(e){v(x(this.sliceSerialize(e)))}function A(){g("<br />")}function S(){d("ignoreEncode")}function C(){t.allowDangerousHtml&&d("ignoreEncode",!0)}function E(e){d("characterReferenceType",e.type)}}function Ke(e,t,n,i){const r=i?i-1:Number.POSITIVE_INFINITY;let s=0;return function(i){if(Ue(i))return e.enter(n),o(i);return t(i)};function o(i){return Ue(i)&&s++<r?(e.consume(i),o):(e.exit(n),t(i))}}const Qe={tokenize:function(e){const t=e.attempt(this.parser.constructs.contentInitial,(function(n){if(null===n)return void e.consume(n);return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),Ke(e,t,"linePrefix")}),(function(t){return e.enter("paragraph"),i(t)}));let n;return t;function i(t){const i=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=i),n=i,r(t)}function r(t){return null===t?(e.exit("chunkText"),e.exit("paragraph"),void e.consume(t)):Pe(t)?(e.consume(t),e.exit("chunkText"),i):(e.consume(t),r)}}};const Ze={tokenize:function(e){const t=this,n=[];let i,r,s,o=0;return l;function l(i){if(o<n.length){const r=n[o];return t.containerState=r[1],e.attempt(r[0].continuation,a,c)(i)}return c(i)}function a(e){if(o++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&b();const n=t.events.length;let r,s=n;for(;s--;)if("exit"===t.events[s][0]&&"chunkFlow"===t.events[s][1].type){r=t.events[s][1].end;break}v(o);let l=n;for(;l<t.events.length;)t.events[l][1].end=Object.assign({},r),l++;return xe(t.events,s+1,0,t.events.slice(n)),t.events.length=l,c(e)}return l(e)}function c(r){if(o===n.length){if(!i)return d(r);if(i.currentConstruct&&i.currentConstruct.concrete)return f(r);t.interrupt=Boolean(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Je,u,h)(r)}function u(e){return i&&b(),v(o),d(e)}function h(e){return t.parser.lazy[t.now().line]=o!==n.length,s=t.now().offset,f(e)}function d(n){return t.containerState={},e.attempt(Je,p,f)(n)}function p(e){return o++,n.push([t.currentConstruct,t.containerState]),d(e)}function f(n){return null===n?(i&&b(),v(0),void e.consume(n)):(i=i||t.parser.flow(t.now()),e.enter("chunkFlow",{contentType:"flow",previous:r,_tokenizer:i}),m(n))}function m(n){return null===n?(g(e.exit("chunkFlow"),!0),v(0),void e.consume(n)):Pe(n)?(e.consume(n),g(e.exit("chunkFlow")),o=0,t.interrupt=void 0,l):(e.consume(n),m)}function g(e,n){const l=t.sliceStream(e);if(n&&l.push(null),e.previous=r,r&&(r.next=e),r=e,i.defineSkip(e.start),i.write(l),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<s&&(!i.events[e][1].end||i.events[e][1].end.offset>s))return;const n=t.events.length;let r,l,a=n;for(;a--;)if("exit"===t.events[a][0]&&"chunkFlow"===t.events[a][1].type){if(r){l=t.events[a][1].end;break}r=!0}for(v(o),e=n;e<t.events.length;)t.events[e][1].end=Object.assign({},l),e++;xe(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function v(i){let r=n.length;for(;r-- >i;){const i=n[r];t.containerState=i[1],i[0].exit.call(t,e)}n.length=i}function b(){i.write([null]),r=void 0,i=void 0,t.containerState._closeFlow=void 0}}},Je={tokenize:function(e,t,n){return Ke(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}};const Xe={tokenize:function(e,t,n){return function(t){return Ue(t)?Ke(e,i,"linePrefix")(t):i(t)};function i(e){return null===e||Pe(e)?t(e):n(e)}},partial:!0};function Ye(e){const t={};let n,i,r,s,o,l,a,c=-1;for(;++c<e.length;){for(;c in t;)c=t[c];if(n=e[c],c&&"chunkFlow"===n[1].type&&"listItemPrefix"===e[c-1][1].type&&(l=n[1]._tokenizer.events,r=0,r<l.length&&"lineEndingBlank"===l[r][1].type&&(r+=2),r<l.length&&"content"===l[r][1].type))for(;++r<l.length&&"content"!==l[r][1].type;)"chunkText"===l[r][1].type&&(l[r][1]._isInFirstContentOfListItem=!0,r++);if("enter"===n[0])n[1].contentType&&(Object.assign(t,Ge(e,c)),c=t[c],a=!0);else if(n[1]._container){for(r=c,i=void 0;r--&&(s=e[r],"lineEnding"===s[1].type||"lineEndingBlank"===s[1].type);)"enter"===s[0]&&(i&&(e[i][1].type="lineEndingBlank"),s[1].type="lineEnding",i=r);i&&(n[1].end=Object.assign({},e[i][1].start),o=e.slice(i,c),o.unshift(n),xe(e,i,c-i+1,o))}}return!a}function Ge(e,t){const n=e[t][1],i=e[t][2];let r=t-1;const s=[],o=n._tokenizer||i.parser[n.contentType](n.start),l=o.events,a=[],c={};let u,h,d=-1,p=n,f=0,m=0;const g=[m];for(;p;){for(;e[++r][1]!==p;);s.push(r),p._tokenizer||(u=i.sliceStream(p),p.next||u.push(null),h&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),h=p,p=p.next}for(p=n;++d<l.length;)"exit"===l[d][0]&&"enter"===l[d-1][0]&&l[d][1].type===l[d-1][1].type&&l[d][1].start.line!==l[d][1].end.line&&(m=d+1,g.push(m),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),d=g.length;d--;){const t=l.slice(g[d],g[d+1]),n=s.pop();a.unshift([n,n+t.length-1]),xe(e,n,2,t)}for(d=-1;++d<a.length;)c[f+a[d][0]]=f+a[d][1],f+=a[d][1]-a[d][0]-1;return c}const et={tokenize:function(e,t){let n;return function(t){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),i(t)};function i(t){return null===t?r(t):Pe(t)?e.check(tt,s,r)(t):(e.consume(t),i)}function r(n){return e.exit("chunkContent"),e.exit("content"),t(n)}function s(t){return e.consume(t),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,i}},resolve:function(e){return Ye(e),e}},tt={tokenize:function(e,t,n){const i=this;return function(t){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),Ke(e,r,"linePrefix")};function r(r){if(null===r||Pe(r))return n(r);const s=i.events[i.events.length-1];return!i.parser.constructs.disable.null.includes("codeIndented")&&s&&"linePrefix"===s[1].type&&s[2].sliceSerialize(s[1],!0).length>=4?t(r):e.interrupt(i.parser.constructs.flow,n,t)(r)}},partial:!0};const nt={tokenize:function(e){const t=this,n=e.attempt(Xe,(function(i){if(null===i)return void e.consume(i);return e.enter("lineEndingBlank"),e.consume(i),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}),e.attempt(this.parser.constructs.flowInitial,i,Ke(e,e.attempt(this.parser.constructs.flow,i,e.attempt(et,i)),"linePrefix")));return n;function i(i){if(null!==i)return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),t.currentConstruct=void 0,n;e.consume(i)}}};const it={resolveAll:lt()},rt=ot("string"),st=ot("text");function ot(e){return{tokenize:function(t){const n=this,i=this.parser.constructs[e],r=t.attempt(i,s,o);return s;function s(e){return a(e)?r(e):o(e)}function o(e){if(null!==e)return t.enter("data"),t.consume(e),l;t.consume(e)}function l(e){return a(e)?(t.exit("data"),r(e)):(t.consume(e),l)}function a(e){if(null===e)return!0;const t=i[e];let r=-1;if(t)for(;++r<t.length;){const e=t[r];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}},resolveAll:lt("text"===e?at:void 0)}}function lt(e){return function(t,n){let i,r=-1;for(;++r<=t.length;)void 0===i?t[r]&&"data"===t[r][1].type&&(i=r,r++):t[r]&&"data"===t[r][1].type||(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function at(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||"lineEnding"===e[n][1].type)&&"data"===e[n-1][1].type){const i=e[n-1][1],r=t.sliceStream(i);let s,o=r.length,l=-1,a=0;for(;o--;){const e=r[o];if("string"==typeof e){for(l=e.length;32===e.charCodeAt(l-1);)a++,l--;if(l)break;l=-1}else if(-2===e)s=!0,a++;else if(-1!==e){o++;break}}if(a){const r={type:n===e.length||s||a<2?"lineSuffix":"hardBreakTrailing",start:{line:i.end.line,column:i.end.column-a,offset:i.end.offset-a,_index:i.start._index+o,_bufferIndex:o?l:i.start._bufferIndex+l},end:Object.assign({},i.end)};i.end=Object.assign({},r.start),i.start.offset===i.end.offset?Object.assign(i,r):(e.splice(n,0,["enter",r,t],["exit",r,t]),n+=2)}n++}return e}function ct(e,t,n){const i=[];let r=-1;for(;++r<e.length;){const s=e[r].resolveAll;s&&!i.includes(s)&&(t=s(t,n),i.push(s))}return t}function ut(e,t,n){let i=Object.assign(n?Object.assign({},n):{line:1,column:1,offset:0},{_index:0,_bufferIndex:-1});const r={},s=[];let o=[],l=[],a=!0;const c={consume:function(e){Pe(e)?(i.line++,i.column=1,i.offset+=-3===e?2:1,x()):-1!==e&&(i.column++,i.offset++);i._bufferIndex<0?i._index++:(i._bufferIndex++,i._bufferIndex===o[i._index].length&&(i._bufferIndex=-1,i._index++));u.previous=e,a=!0},enter:function(e,t){const n=t||{};return n.type=e,n.start=f(),u.events.push(["enter",n,u]),l.push(n),n},exit:function(e){const t=l.pop();return t.end=f(),u.events.push(["exit",t,u]),t},attempt:b((function(e,t){y(e,t.from)})),check:b(v),interrupt:b(v,{interrupt:!0})},u={previous:null,code:null,containerState:{},events:[],parser:e,sliceStream:p,sliceSerialize:function(e,t){return function(e,t){let n=-1;const i=[];let r;for(;++n<e.length;){const s=e[n];let o;if("string"==typeof s)o=s;else switch(s){case-5:o="\r";break;case-4:o="\n";break;case-3:o="\r\n";break;case-2:o=t?" ":"\t";break;case-1:if(!t&&r)continue;o=" ";break;default:o=String.fromCharCode(s)}r=-2===s,i.push(o)}return i.join("")}(p(e),t)},now:f,defineSkip:function(e){r[e.line]=e.column,x()},write:function(e){if(o=_e(o,e),m(),null!==o[o.length-1])return[];return y(t,0),u.events=ct(s,u.events,u),u.events}};let h,d=t.tokenize.call(u,c);return t.resolveAll&&s.push(t),u;function p(e){return function(e,t){const n=t.start._index,i=t.start._bufferIndex,r=t.end._index,s=t.end._bufferIndex;let o;if(n===r)o=[e[n].slice(i,s)];else{if(o=e.slice(n,r),i>-1){const e=o[0];"string"==typeof e?o[0]=e.slice(i):o.shift()}s>0&&o.push(e[r].slice(0,s))}return o}(o,e)}function f(){const{line:e,column:t,offset:n,_index:r,_bufferIndex:s}=i;return{line:e,column:t,offset:n,_index:r,_bufferIndex:s}}function m(){let e;for(;i._index<o.length;){const t=o[i._index];if("string"==typeof t)for(e=i._index,i._bufferIndex<0&&(i._bufferIndex=0);i._index===e&&i._bufferIndex<t.length;)g(t.charCodeAt(i._bufferIndex));else g(t)}}function g(e){a=void 0,h=e,d=d(e)}function v(e,t){t.restore()}function b(e,t){return function(n,r,s){let o,h,d,p;return Array.isArray(n)?m(n):"tokenize"in n?m([n]):function(e){return t;function t(t){const n=null!==t&&e[t],i=null!==t&&e.null;return m([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(i)?i:i?[i]:[]])(t)}}(n);function m(e){return o=e,h=0,0===e.length?s:g(e[h])}function g(e){return function(n){p=function(){const e=f(),t=u.previous,n=u.currentConstruct,r=u.events.length,s=Array.from(l);return{restore:o,from:r};function o(){i=e,u.previous=t,u.currentConstruct=n,u.events.length=r,l=s,x()}}(),d=e,e.partial||(u.currentConstruct=e);if(e.name&&u.parser.constructs.disable.null.includes(e.name))return b(n);return e.tokenize.call(t?Object.assign(Object.create(u),t):u,c,v,b)(n)}}function v(t){return a=!0,e(d,p),r}function b(e){return a=!0,p.restore(),++h<o.length?g(o[h]):s}}}function y(e,t){e.resolveAll&&!s.includes(e)&&s.push(e),e.resolve&&xe(u.events,t,u.events.length-t,e.resolve(u.events.slice(t),u)),e.resolveTo&&(u.events=e.resolveTo(u.events,u))}function x(){i.line in r&&i.column<2&&(i.column=r[i.line],i.offset+=r[i.line]-1)}}const ht={name:"thematicBreak",tokenize:function(e,t,n){let i,r=0;return function(t){return e.enter("thematicBreak"),function(e){return i=e,s(e)}(t)};function s(s){return s===i?(e.enter("thematicBreakSequence"),o(s)):r>=3&&(null===s||Pe(s))?(e.exit("thematicBreak"),t(s)):n(s)}function o(t){return t===i?(e.consume(t),r++,o):(e.exit("thematicBreakSequence"),Ue(t)?Ke(e,s,"whitespace")(t):s(t))}}};const dt={name:"list",tokenize:function(e,t,n){const i=this,r=i.events[i.events.length-1];let s=r&&"linePrefix"===r[1].type?r[2].sliceSerialize(r[1],!0).length:0,o=0;return function(t){const r=i.containerState.type||(42===t||43===t||45===t?"listUnordered":"listOrdered");if("listUnordered"===r?!i.containerState.marker||t===i.containerState.marker:Le(t)){if(i.containerState.type||(i.containerState.type=r,e.enter(r,{_container:!0})),"listUnordered"===r)return e.enter("listItemPrefix"),42===t||45===t?e.check(ht,n,a)(t):a(t);if(!i.interrupt||49===t)return e.enter("listItemPrefix"),e.enter("listItemValue"),l(t)}return n(t)};function l(t){return Le(t)&&++o<10?(e.consume(t),l):(!i.interrupt||o<2)&&(i.containerState.marker?t===i.containerState.marker:41===t||46===t)?(e.exit("listItemValue"),a(t)):n(t)}function a(t){return e.enter("listItemMarker"),e.consume(t),e.exit("listItemMarker"),i.containerState.marker=i.containerState.marker||t,e.check(Xe,i.interrupt?n:c,e.attempt(pt,h,u))}function c(e){return i.containerState.initialBlankLine=!0,s++,h(e)}function u(t){return Ue(t)?(e.enter("listItemPrefixWhitespace"),e.consume(t),e.exit("listItemPrefixWhitespace"),h):n(t)}function h(n){return i.containerState.size=s+i.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(n)}},continuation:{tokenize:function(e,t,n){const i=this;return i.containerState._closeFlow=void 0,e.check(Xe,(function(n){return i.containerState.furtherBlankLines=i.containerState.furtherBlankLines||i.containerState.initialBlankLine,Ke(e,t,"listItemIndent",i.containerState.size+1)(n)}),(function(n){if(i.containerState.furtherBlankLines||!Ue(n))return i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,r(n);return i.containerState.furtherBlankLines=void 0,i.containerState.initialBlankLine=void 0,e.attempt(ft,t,r)(n)}));function r(r){return i.containerState._closeFlow=!0,i.interrupt=void 0,Ke(e,e.attempt(dt,t,n),"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(r)}}},exit:function(e){e.exit(this.containerState.type)}},pt={tokenize:function(e,t,n){const i=this;return Ke(e,(function(e){const r=i.events[i.events.length-1];return!Ue(e)&&r&&"listItemPrefixWhitespace"===r[1].type?t(e):n(e)}),"listItemPrefixWhitespace",i.parser.constructs.disable.null.includes("codeIndented")?void 0:5)},partial:!0},ft={tokenize:function(e,t,n){const i=this;return Ke(e,(function(e){const r=i.events[i.events.length-1];return r&&"listItemIndent"===r[1].type&&r[2].sliceSerialize(r[1],!0).length===i.containerState.size?t(e):n(e)}),"listItemIndent",i.containerState.size+1)},partial:!0};const mt={name:"blockQuote",tokenize:function(e,t,n){const i=this;return function(t){if(62===t){const n=i.containerState;return n.open||(e.enter("blockQuote",{_container:!0}),n.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(t),e.exit("blockQuoteMarker"),r}return n(t)};function r(n){return Ue(n)?(e.enter("blockQuotePrefixWhitespace"),e.consume(n),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(n))}},continuation:{tokenize:function(e,t,n){const i=this;return function(t){if(Ue(t))return Ke(e,r,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t);return r(t)};function r(i){return e.attempt(mt,t,n)(i)}}},exit:function(e){e.exit("blockQuote")}};function gt(e,t,n,i,r,s,o,l,a){const c=a||Number.POSITIVE_INFINITY;let u=0;return function(t){if(60===t)return e.enter(i),e.enter(r),e.enter(s),e.consume(t),e.exit(s),h;if(null===t||32===t||41===t||ze(t))return n(t);return e.enter(i),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),f(t)};function h(n){return 62===n?(e.enter(s),e.consume(n),e.exit(s),e.exit(r),e.exit(i),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),d(n))}function d(t){return 62===t?(e.exit("chunkString"),e.exit(l),h(t)):null===t||60===t||Pe(t)?n(t):(e.consume(t),92===t?p:d)}function p(t){return 60===t||62===t||92===t?(e.consume(t),d):d(t)}function f(r){return u||null!==r&&41!==r&&!De(r)?u<c&&40===r?(e.consume(r),u++,f):41===r?(e.consume(r),u--,f):null===r||32===r||40===r||ze(r)?n(r):(e.consume(r),92===r?m:f):(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(i),t(r))}function m(t){return 40===t||41===t||92===t?(e.consume(t),f):f(t)}}function vt(e,t,n,i,r,s){const o=this;let l,a=0;return function(t){return e.enter(i),e.enter(r),e.consume(t),e.exit(r),e.enter(s),c};function c(h){return a>999||null===h||91===h||93===h&&!l||94===h&&!a&&"_hiddenFootnoteSupport"in o.parser.constructs?n(h):93===h?(e.exit(s),e.enter(r),e.consume(h),e.exit(r),e.exit(i),t):Pe(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),c):(e.enter("chunkString",{contentType:"string"}),u(h))}function u(t){return null===t||91===t||93===t||Pe(t)||a++>999?(e.exit("chunkString"),c(t)):(e.consume(t),l||(l=!Ue(t)),92===t?h:u)}function h(t){return 91===t||92===t||93===t?(e.consume(t),a++,u):u(t)}}function bt(e,t,n,i,r,s){let o;return function(t){if(34===t||39===t||40===t)return e.enter(i),e.enter(r),e.consume(t),e.exit(r),o=40===t?41:t,l;return n(t)};function l(n){return n===o?(e.enter(r),e.consume(n),e.exit(r),e.exit(i),t):(e.enter(s),a(n))}function a(t){return t===o?(e.exit(s),l(o)):null===t?n(t):Pe(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),Ke(e,a,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),c(t))}function c(t){return t===o||null===t||Pe(t)?(e.exit("chunkString"),a(t)):(e.consume(t),92===t?u:c)}function u(t){return t===o||92===t?(e.consume(t),c):c(t)}}function yt(e,t){let n;return function i(r){if(Pe(r))return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),n=!0,i;if(Ue(r))return Ke(e,i,n?"linePrefix":"lineSuffix")(r);return t(r)}}const xt={name:"definition",tokenize:function(e,t,n){const i=this;let r;return function(t){return e.enter("definition"),function(t){return vt.call(i,e,s,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(t)}(t)};function s(t){return r=Ee(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)),58===t?(e.enter("definitionMarker"),e.consume(t),e.exit("definitionMarker"),o):n(t)}function o(t){return De(t)?yt(e,l)(t):l(t)}function l(t){return gt(e,a,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(t)}function a(t){return e.attempt(_t,c,c)(t)}function c(t){return Ue(t)?Ke(e,u,"whitespace")(t):u(t)}function u(s){return null===s||Pe(s)?(e.exit("definition"),i.parser.defined.push(r),t(s)):n(s)}}},_t={tokenize:function(e,t,n){return function(t){return De(t)?yt(e,i)(t):n(t)};function i(t){return bt(e,r,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(t)}function r(t){return Ue(t)?Ke(e,s,"whitespace")(t):s(t)}function s(e){return null===e||Pe(e)?t(e):n(e)}},partial:!0};const wt={name:"codeIndented",tokenize:function(e,t,n){const i=this;return function(t){return e.enter("codeIndented"),Ke(e,r,"linePrefix",5)(t)};function r(e){const t=i.events[i.events.length-1];return t&&"linePrefix"===t[1].type&&t[2].sliceSerialize(t[1],!0).length>=4?s(e):n(e)}function s(t){return null===t?l(t):Pe(t)?e.attempt(kt,s,l)(t):(e.enter("codeFlowValue"),o(t))}function o(t){return null===t||Pe(t)?(e.exit("codeFlowValue"),s(t)):(e.consume(t),o)}function l(n){return e.exit("codeIndented"),t(n)}}},kt={tokenize:function(e,t,n){const i=this;return r;function r(t){return i.parser.lazy[i.now().line]?n(t):Pe(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),r):Ke(e,s,"linePrefix",5)(t)}function s(e){const s=i.events[i.events.length-1];return s&&"linePrefix"===s[1].type&&s[2].sliceSerialize(s[1],!0).length>=4?t(e):Pe(e)?r(e):n(e)}},partial:!0};const $t={name:"headingAtx",tokenize:function(e,t,n){let i=0;return function(t){return e.enter("atxHeading"),function(t){return e.enter("atxHeadingSequence"),r(t)}(t)};function r(t){return 35===t&&i++<6?(e.consume(t),r):null===t||De(t)?(e.exit("atxHeadingSequence"),s(t)):n(t)}function s(n){return 35===n?(e.enter("atxHeadingSequence"),o(n)):null===n||Pe(n)?(e.exit("atxHeading"),t(n)):Ue(n)?Ke(e,s,"whitespace")(n):(e.enter("atxHeadingText"),l(n))}function o(t){return 35===t?(e.consume(t),o):(e.exit("atxHeadingSequence"),s(t))}function l(t){return null===t||35===t||De(t)?(e.exit("atxHeadingText"),s(t)):(e.consume(t),l)}},resolve:function(e,t){let n,i,r=e.length-2,s=3;"whitespace"===e[s][1].type&&(s+=2);r-2>s&&"whitespace"===e[r][1].type&&(r-=2);"atxHeadingSequence"===e[r][1].type&&(s===r-1||r-4>s&&"whitespace"===e[r-2][1].type)&&(r-=s+1===r?2:4);r>s&&(n={type:"atxHeadingText",start:e[s][1].start,end:e[r][1].end},i={type:"chunkText",start:e[s][1].start,end:e[r][1].end,contentType:"text"},xe(e,s,r-s+1,[["enter",n,t],["enter",i,t],["exit",i,t],["exit",n,t]]));return e}};const At={name:"setextUnderline",tokenize:function(e,t,n){const i=this;let r;return function(t){let o,l=i.events.length;for(;l--;)if("lineEnding"!==i.events[l][1].type&&"linePrefix"!==i.events[l][1].type&&"content"!==i.events[l][1].type){o="paragraph"===i.events[l][1].type;break}if(!i.parser.lazy[i.now().line]&&(i.interrupt||o))return e.enter("setextHeadingLine"),r=t,function(t){return e.enter("setextHeadingLineSequence"),s(t)}(t);return n(t)};function s(t){return t===r?(e.consume(t),s):(e.exit("setextHeadingLineSequence"),Ue(t)?Ke(e,o,"lineSuffix")(t):o(t))}function o(i){return null===i||Pe(i)?(e.exit("setextHeadingLine"),t(i)):n(i)}},resolveTo:function(e,t){let n,i,r,s=e.length;for(;s--;)if("enter"===e[s][0]){if("content"===e[s][1].type){n=s;break}"paragraph"===e[s][1].type&&(i=s)}else"content"===e[s][1].type&&e.splice(s,1),r||"definition"!==e[s][1].type||(r=s);const o={type:"setextHeading",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)};e[i][1].type="setextHeadingText",r?(e.splice(i,0,["enter",o,t]),e.splice(r+1,0,["exit",e[n][1],t]),e[n][1].end=Object.assign({},e[r][1].end)):e[n][1]=o;return e.push(["exit",o,t]),e}};const St=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Ct=["pre","script","style","textarea"],Et={name:"htmlFlow",tokenize:function(e,t,n){const i=this;let r,s,o,l,a;return function(t){return function(t){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(t),c}(t)};function c(l){return 33===l?(e.consume(l),u):47===l?(e.consume(l),s=!0,p):63===l?(e.consume(l),r=3,i.interrupt?t:T):Fe(l)?(e.consume(l),o=String.fromCharCode(l),f):n(l)}function u(s){return 45===s?(e.consume(s),r=2,h):91===s?(e.consume(s),r=5,l=0,d):Fe(s)?(e.consume(s),r=4,i.interrupt?t:T):n(s)}function h(r){return 45===r?(e.consume(r),i.interrupt?t:T):n(r)}function d(r){const s="CDATA[";return r===s.charCodeAt(l++)?(e.consume(r),6===l?i.interrupt?t:S:d):n(r)}function p(t){return Fe(t)?(e.consume(t),o=String.fromCharCode(t),f):n(t)}function f(l){if(null===l||47===l||62===l||De(l)){const a=47===l,c=o.toLowerCase();return a||s||!Ct.includes(c)?St.includes(o.toLowerCase())?(r=6,a?(e.consume(l),m):i.interrupt?t(l):S(l)):(r=7,i.interrupt&&!i.parser.lazy[i.now().line]?n(l):s?g(l):v(l)):(r=1,i.interrupt?t(l):S(l))}return 45===l||Me(l)?(e.consume(l),o+=String.fromCharCode(l),f):n(l)}function m(r){return 62===r?(e.consume(r),i.interrupt?t:S):n(r)}function g(t){return Ue(t)?(e.consume(t),g):$(t)}function v(t){return 47===t?(e.consume(t),$):58===t||95===t||Fe(t)?(e.consume(t),b):Ue(t)?(e.consume(t),v):$(t)}function b(t){return 45===t||46===t||58===t||95===t||Me(t)?(e.consume(t),b):y(t)}function y(t){return 61===t?(e.consume(t),x):Ue(t)?(e.consume(t),y):v(t)}function x(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),a=t,_):Ue(t)?(e.consume(t),x):w(t)}function _(t){return t===a?(e.consume(t),a=null,k):null===t||Pe(t)?n(t):(e.consume(t),_)}function w(t){return null===t||34===t||39===t||47===t||60===t||61===t||62===t||96===t||De(t)?y(t):(e.consume(t),w)}function k(e){return 47===e||62===e||Ue(e)?v(e):n(e)}function $(t){return 62===t?(e.consume(t),A):n(t)}function A(t){return null===t||Pe(t)?S(t):Ue(t)?(e.consume(t),A):n(t)}function S(t){return 45===t&&2===r?(e.consume(t),M):60===t&&1===r?(e.consume(t),I):62===t&&4===r?(e.consume(t),O):63===t&&3===r?(e.consume(t),T):93===t&&5===r?(e.consume(t),L):!Pe(t)||6!==r&&7!==r?null===t||Pe(t)?(e.exit("htmlFlowData"),C(t)):(e.consume(t),S):(e.exit("htmlFlowData"),e.check(Ft,P,C)(t))}function C(t){return e.check(Mt,E,P)(t)}function E(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),F}function F(t){return null===t||Pe(t)?C(t):(e.enter("htmlFlowData"),S(t))}function M(t){return 45===t?(e.consume(t),T):S(t)}function I(t){return 47===t?(e.consume(t),o="",z):S(t)}function z(t){if(62===t){const n=o.toLowerCase();return Ct.includes(n)?(e.consume(t),O):S(t)}return Fe(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),z):S(t)}function L(t){return 93===t?(e.consume(t),T):S(t)}function T(t){return 62===t?(e.consume(t),O):45===t&&2===r?(e.consume(t),T):S(t)}function O(t){return null===t||Pe(t)?(e.exit("htmlFlowData"),P(t)):(e.consume(t),O)}function P(n){return e.exit("htmlFlow"),t(n)}},resolveTo:function(e){let t=e.length;for(;t--&&("enter"!==e[t][0]||"htmlFlow"!==e[t][1].type););t>1&&"linePrefix"===e[t-2][1].type&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2));return e},concrete:!0},Ft={tokenize:function(e,t,n){return function(i){return e.enter("lineEnding"),e.consume(i),e.exit("lineEnding"),e.attempt(Xe,t,n)}},partial:!0},Mt={tokenize:function(e,t,n){const i=this;return function(t){if(Pe(t))return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),r;return n(t)};function r(e){return i.parser.lazy[i.now().line]?n(e):t(e)}},partial:!0};const It={tokenize:function(e,t,n){const i=this;return function(t){if(null===t)return n(t);return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),r};function r(e){return i.parser.lazy[i.now().line]?n(e):t(e)}},partial:!0},zt={name:"codeFenced",tokenize:function(e,t,n){const i=this,r={tokenize:function(e,t,n){let r=0;return o;function o(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),a}function a(t){return e.enter("codeFencedFence"),Ue(t)?Ke(e,c,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):c(t)}function c(t){return t===s?(e.enter("codeFencedFenceSequence"),u(t)):n(t)}function u(t){return t===s?(r++,e.consume(t),u):r>=l?(e.exit("codeFencedFenceSequence"),Ue(t)?Ke(e,h,"whitespace")(t):h(t)):n(t)}function h(i){return null===i||Pe(i)?(e.exit("codeFencedFence"),t(i)):n(i)}},partial:!0};let s,o=0,l=0;return function(t){return function(t){const n=i.events[i.events.length-1];return o=n&&"linePrefix"===n[1].type?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),a(t)}(t)};function a(t){return t===s?(l++,e.consume(t),a):l<3?n(t):(e.exit("codeFencedFenceSequence"),Ue(t)?Ke(e,c,"whitespace")(t):c(t))}function c(n){return null===n||Pe(n)?(e.exit("codeFencedFence"),i.interrupt?t(n):e.check(It,p,b)(n)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),u(n))}function u(t){return null===t||Pe(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),c(t)):Ue(t)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),Ke(e,h,"whitespace")(t)):96===t&&t===s?n(t):(e.consume(t),u)}function h(t){return null===t||Pe(t)?c(t):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),d(t))}function d(t){return null===t||Pe(t)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),c(t)):96===t&&t===s?n(t):(e.consume(t),d)}function p(t){return e.attempt(r,b,f)(t)}function f(t){return e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),m}function m(t){return o>0&&Ue(t)?Ke(e,g,"linePrefix",o+1)(t):g(t)}function g(t){return null===t||Pe(t)?e.check(It,p,b)(t):(e.enter("codeFlowValue"),v(t))}function v(t){return null===t||Pe(t)?(e.exit("codeFlowValue"),g(t)):(e.consume(t),v)}function b(n){return e.exit("codeFenced"),t(n)}},concrete:!0};const Lt={name:"characterReference",tokenize:function(e,t,n){const i=this;let r,s,o=0;return function(t){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(t),e.exit("characterReferenceMarker"),l};function l(t){return 35===t?(e.enter("characterReferenceMarkerNumeric"),e.consume(t),e.exit("characterReferenceMarkerNumeric"),a):(e.enter("characterReferenceValue"),r=31,s=Me,c(t))}function a(t){return 88===t||120===t?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(t),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),r=6,s=Te,c):(e.enter("characterReferenceValue"),r=7,s=Le,c(t))}function c(l){if(59===l&&o){const r=e.exit("characterReferenceValue");return s!==Me||ye(i.sliceSerialize(r))?(e.enter("characterReferenceMarker"),e.consume(l),e.exit("characterReferenceMarker"),e.exit("characterReference"),t):n(l)}return s(l)&&o++<r?(e.consume(l),c):n(l)}}};const Tt={name:"characterEscape",tokenize:function(e,t,n){return function(t){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(t),e.exit("escapeMarker"),i};function i(i){return Oe(i)?(e.enter("characterEscapeValue"),e.consume(i),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(i)}}};const Ot={name:"lineEnding",tokenize:function(e,t){return function(n){return e.enter("lineEnding"),e.consume(n),e.exit("lineEnding"),Ke(e,t,"linePrefix")}}};const Pt={name:"labelEnd",tokenize:function(e,t,n){const i=this;let r,s,o=i.events.length;for(;o--;)if(("labelImage"===i.events[o][1].type||"labelLink"===i.events[o][1].type)&&!i.events[o][1]._balanced){r=i.events[o][1];break}return function(t){if(!r)return n(t);if(r._inactive)return u(t);return s=i.parser.defined.includes(Ee(i.sliceSerialize({start:r.end,end:i.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelEnd"),l};function l(t){return 40===t?e.attempt(Dt,c,s?c:u)(t):91===t?e.attempt(Ut,c,s?a:u)(t):s?c(t):u(t)}function a(t){return e.attempt(Rt,c,u)(t)}function c(e){return t(e)}function u(e){return r._balanced=!0,n(e)}},resolveTo:function(e,t){let n,i,r,s,o=e.length,l=0;for(;o--;)if(n=e[o][1],i){if("link"===n.type||"labelLink"===n.type&&n._inactive)break;"enter"===e[o][0]&&"labelLink"===n.type&&(n._inactive=!0)}else if(r){if("enter"===e[o][0]&&("labelImage"===n.type||"labelLink"===n.type)&&!n._balanced&&(i=o,"labelLink"!==n.type)){l=2;break}}else"labelEnd"===n.type&&(r=o);const a={type:"labelLink"===e[i][1].type?"link":"image",start:Object.assign({},e[i][1].start),end:Object.assign({},e[e.length-1][1].end)},c={type:"label",start:Object.assign({},e[i][1].start),end:Object.assign({},e[r][1].end)},u={type:"labelText",start:Object.assign({},e[i+l+2][1].end),end:Object.assign({},e[r-2][1].start)};return s=[["enter",a,t],["enter",c,t]],s=_e(s,e.slice(i+1,i+l+3)),s=_e(s,[["enter",u,t]]),s=_e(s,ct(t.parser.constructs.insideSpan.null,e.slice(i+l+4,r-3),t)),s=_e(s,[["exit",u,t],e[r-2],e[r-1],["exit",c,t]]),s=_e(s,e.slice(r+1)),s=_e(s,[["exit",a,t]]),xe(e,i,e.length,s),e},resolveAll:function(e){let t=-1;for(;++t<e.length;){const n=e[t][1];"labelImage"!==n.type&&"labelLink"!==n.type&&"labelEnd"!==n.type||(e.splice(t+1,"labelImage"===n.type?4:2),n.type="data",t++)}return e}},Dt={tokenize:function(e,t,n){return function(t){return e.enter("resource"),e.enter("resourceMarker"),e.consume(t),e.exit("resourceMarker"),i};function i(t){return De(t)?yt(e,r)(t):r(t)}function r(t){return 41===t?c(t):gt(e,s,o,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(t)}function s(t){return De(t)?yt(e,l)(t):c(t)}function o(e){return n(e)}function l(t){return 34===t||39===t||40===t?bt(e,a,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(t):c(t)}function a(t){return De(t)?yt(e,c)(t):c(t)}function c(i){return 41===i?(e.enter("resourceMarker"),e.consume(i),e.exit("resourceMarker"),e.exit("resource"),t):n(i)}}},Ut={tokenize:function(e,t,n){const i=this;return function(t){return vt.call(i,e,r,s,"reference","referenceMarker","referenceString")(t)};function r(e){return i.parser.defined.includes(Ee(i.sliceSerialize(i.events[i.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function s(e){return n(e)}}},Rt={tokenize:function(e,t,n){return function(t){return e.enter("reference"),e.enter("referenceMarker"),e.consume(t),e.exit("referenceMarker"),i};function i(i){return 93===i?(e.enter("referenceMarker"),e.consume(i),e.exit("referenceMarker"),e.exit("reference"),t):n(i)}}};function Nt(e){return null===e||De(e)||Ne(e)?1:Re(e)?2:void 0}const Bt={name:"attention",tokenize:function(e,t){const n=this.parser.constructs.attentionMarkers.null,i=this.previous,r=Nt(i);let s;return function(t){return s=t,e.enter("attentionSequence"),o(t)};function o(l){if(l===s)return e.consume(l),o;const a=e.exit("attentionSequence"),c=Nt(l),u=!c||2===c&&r||n.includes(l),h=!r||2===r&&c||n.includes(i);return a._open=Boolean(42===s?u:u&&(r||!h)),a._close=Boolean(42===s?h:h&&(c||!u)),t(l)}},resolveAll:function(e,t){let n,i,r,s,o,l,a,c,u=-1;for(;++u<e.length;)if("enter"===e[u][0]&&"attentionSequence"===e[u][1].type&&e[u][1]._close)for(n=u;n--;)if("exit"===e[n][0]&&"attentionSequence"===e[n][1].type&&e[n][1]._open&&t.sliceSerialize(e[n][1]).charCodeAt(0)===t.sliceSerialize(e[u][1]).charCodeAt(0)){if((e[n][1]._close||e[u][1]._open)&&(e[u][1].end.offset-e[u][1].start.offset)%3&&!((e[n][1].end.offset-e[n][1].start.offset+e[u][1].end.offset-e[u][1].start.offset)%3))continue;l=e[n][1].end.offset-e[n][1].start.offset>1&&e[u][1].end.offset-e[u][1].start.offset>1?2:1;const h=Object.assign({},e[n][1].end),d=Object.assign({},e[u][1].start);Ht(h,-l),Ht(d,l),s={type:l>1?"strongSequence":"emphasisSequence",start:h,end:Object.assign({},e[n][1].end)},o={type:l>1?"strongSequence":"emphasisSequence",start:Object.assign({},e[u][1].start),end:d},r={type:l>1?"strongText":"emphasisText",start:Object.assign({},e[n][1].end),end:Object.assign({},e[u][1].start)},i={type:l>1?"strong":"emphasis",start:Object.assign({},s.start),end:Object.assign({},o.end)},e[n][1].end=Object.assign({},s.start),e[u][1].start=Object.assign({},o.end),a=[],e[n][1].end.offset-e[n][1].start.offset&&(a=_e(a,[["enter",e[n][1],t],["exit",e[n][1],t]])),a=_e(a,[["enter",i,t],["enter",s,t],["exit",s,t],["enter",r,t]]),a=_e(a,ct(t.parser.constructs.insideSpan.null,e.slice(n+1,u),t)),a=_e(a,[["exit",r,t],["enter",o,t],["exit",o,t],["exit",i,t]]),e[u][1].end.offset-e[u][1].start.offset?(c=2,a=_e(a,[["enter",e[u][1],t],["exit",e[u][1],t]])):c=0,xe(e,n-1,u-n+3,a),u=n+a.length-c-2;break}u=-1;for(;++u<e.length;)"attentionSequence"===e[u][1].type&&(e[u][1].type="data");return e}};function Ht(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const jt={42:dt,43:dt,45:dt,48:dt,49:dt,50:dt,51:dt,52:dt,53:dt,54:dt,55:dt,56:dt,57:dt,62:mt},Vt={91:xt},qt={[-2]:wt,[-1]:wt,32:wt},Wt={35:$t,42:ht,45:[At,ht],60:Et,61:At,95:ht,96:zt,126:zt},Kt={38:Lt,92:Tt},Qt={[-5]:Ot,[-4]:Ot,[-3]:Ot,33:{name:"labelStartImage",tokenize:function(e,t,n){const i=this;return function(t){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(t),e.exit("labelImageMarker"),r};function r(t){return 91===t?(e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelImage"),s):n(t)}function s(e){return 94===e&&"_hiddenFootnoteSupport"in i.parser.constructs?n(e):t(e)}},resolveAll:Pt.resolveAll},38:Lt,42:Bt,60:[{name:"autolink",tokenize:function(e,t,n){let i=0;return function(t){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(t),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),r};function r(t){return Fe(t)?(e.consume(t),s):a(t)}function s(e){return 43===e||45===e||46===e||Me(e)?(i=1,o(e)):a(e)}function o(t){return 58===t?(e.consume(t),i=0,l):(43===t||45===t||46===t||Me(t))&&i++<32?(e.consume(t),o):(i=0,a(t))}function l(i){return 62===i?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(i),e.exit("autolinkMarker"),e.exit("autolink"),t):null===i||32===i||60===i||ze(i)?n(i):(e.consume(i),l)}function a(t){return 64===t?(e.consume(t),c):Ie(t)?(e.consume(t),a):n(t)}function c(e){return Me(e)?u(e):n(e)}function u(n){return 46===n?(e.consume(n),i=0,c):62===n?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(n),e.exit("autolinkMarker"),e.exit("autolink"),t):h(n)}function h(t){if((45===t||Me(t))&&i++<63){const n=45===t?h:u;return e.consume(t),n}return n(t)}}},{name:"htmlText",tokenize:function(e,t,n){const i=this;let r,s,o;return function(t){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(t),l};function l(t){return 33===t?(e.consume(t),a):47===t?(e.consume(t),x):63===t?(e.consume(t),b):Fe(t)?(e.consume(t),k):n(t)}function a(t){return 45===t?(e.consume(t),c):91===t?(e.consume(t),s=0,p):Fe(t)?(e.consume(t),v):n(t)}function c(t){return 45===t?(e.consume(t),d):n(t)}function u(t){return null===t?n(t):45===t?(e.consume(t),h):Pe(t)?(o=u,z(t)):(e.consume(t),u)}function h(t){return 45===t?(e.consume(t),d):u(t)}function d(e){return 62===e?I(e):45===e?h(e):u(e)}function p(t){const i="CDATA[";return t===i.charCodeAt(s++)?(e.consume(t),6===s?f:p):n(t)}function f(t){return null===t?n(t):93===t?(e.consume(t),m):Pe(t)?(o=f,z(t)):(e.consume(t),f)}function m(t){return 93===t?(e.consume(t),g):f(t)}function g(t){return 62===t?I(t):93===t?(e.consume(t),g):f(t)}function v(t){return null===t||62===t?I(t):Pe(t)?(o=v,z(t)):(e.consume(t),v)}function b(t){return null===t?n(t):63===t?(e.consume(t),y):Pe(t)?(o=b,z(t)):(e.consume(t),b)}function y(e){return 62===e?I(e):b(e)}function x(t){return Fe(t)?(e.consume(t),_):n(t)}function _(t){return 45===t||Me(t)?(e.consume(t),_):w(t)}function w(t){return Pe(t)?(o=w,z(t)):Ue(t)?(e.consume(t),w):I(t)}function k(t){return 45===t||Me(t)?(e.consume(t),k):47===t||62===t||De(t)?$(t):n(t)}function $(t){return 47===t?(e.consume(t),I):58===t||95===t||Fe(t)?(e.consume(t),A):Pe(t)?(o=$,z(t)):Ue(t)?(e.consume(t),$):I(t)}function A(t){return 45===t||46===t||58===t||95===t||Me(t)?(e.consume(t),A):S(t)}function S(t){return 61===t?(e.consume(t),C):Pe(t)?(o=S,z(t)):Ue(t)?(e.consume(t),S):$(t)}function C(t){return null===t||60===t||61===t||62===t||96===t?n(t):34===t||39===t?(e.consume(t),r=t,E):Pe(t)?(o=C,z(t)):Ue(t)?(e.consume(t),C):(e.consume(t),F)}function E(t){return t===r?(e.consume(t),r=void 0,M):null===t?n(t):Pe(t)?(o=E,z(t)):(e.consume(t),E)}function F(t){return null===t||34===t||39===t||60===t||61===t||96===t?n(t):47===t||62===t||De(t)?$(t):(e.consume(t),F)}function M(e){return 47===e||62===e||De(e)?$(e):n(e)}function I(i){return 62===i?(e.consume(i),e.exit("htmlTextData"),e.exit("htmlText"),t):n(i)}function z(t){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),L}function L(t){return Ue(t)?Ke(e,T,"linePrefix",i.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(t):T(t)}function T(t){return e.enter("htmlTextData"),o(t)}}}],91:{name:"labelStartLink",tokenize:function(e,t,n){const i=this;return function(t){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(t),e.exit("labelMarker"),e.exit("labelLink"),r};function r(e){return 94===e&&"_hiddenFootnoteSupport"in i.parser.constructs?n(e):t(e)}},resolveAll:Pt.resolveAll},92:[{name:"hardBreakEscape",tokenize:function(e,t,n){return function(t){return e.enter("hardBreakEscape"),e.consume(t),i};function i(i){return Pe(i)?(e.exit("hardBreakEscape"),t(i)):n(i)}}},Tt],93:Pt,95:Bt,96:{name:"codeText",tokenize:function(e,t,n){let i,r,s=0;return function(t){return e.enter("codeText"),e.enter("codeTextSequence"),o(t)};function o(t){return 96===t?(e.consume(t),s++,o):(e.exit("codeTextSequence"),l(t))}function l(t){return null===t?n(t):32===t?(e.enter("space"),e.consume(t),e.exit("space"),l):96===t?(r=e.enter("codeTextSequence"),i=0,c(t)):Pe(t)?(e.enter("lineEnding"),e.consume(t),e.exit("lineEnding"),l):(e.enter("codeTextData"),a(t))}function a(t){return null===t||32===t||96===t||Pe(t)?(e.exit("codeTextData"),l(t)):(e.consume(t),a)}function c(n){return 96===n?(e.consume(n),i++,c):i===s?(e.exit("codeTextSequence"),e.exit("codeText"),t(n)):(r.type="codeTextData",a(n))}},resolve:function(e){let t,n,i=e.length-4,r=3;if(!("lineEnding"!==e[r][1].type&&"space"!==e[r][1].type||"lineEnding"!==e[i][1].type&&"space"!==e[i][1].type))for(t=r;++t<i;)if("codeTextData"===e[t][1].type){e[r][1].type="codeTextPadding",e[i][1].type="codeTextPadding",r+=2,i-=2;break}t=r-1,i++;for(;++t<=i;)void 0===n?t!==i&&"lineEnding"!==e[t][1].type&&(n=t):t!==i&&"lineEnding"!==e[t][1].type||(e[n][1].type="codeTextData",t!==n+2&&(e[n][1].end=e[t-1][1].end,e.splice(n+2,t-n-2),i-=t-n-2,t=n+2),n=void 0);return e},previous:function(e){return 96!==e||"characterEscape"===this.events[this.events.length-1][1].type}}},Zt={null:[Bt,it]},Jt={null:[42,95]},Xt={null:[]};function Yt(e){const n={defined:[],lazy:{},constructs:function(e){const t={};let n=-1;for(;++n<e.length;)ke(t,e[n]);return t}([t,...(e||{}).extensions||[]]),content:i(Qe),document:i(Ze),flow:i(nt),string:i(rt),text:i(st)};return n;function i(e){return function(t){return ut(n,e,t)}}}const Gt=/[\0\t\n\r]/g;function en(e,t,n){return"string"!=typeof t&&(n=t,t=void 0),We(n)(function(e){for(;!Ye(e););return e}(Yt(n).document().write(function(){let e,t=1,n="",i=!0;return function(r,s,o){const l=[];let a,c,u,h,d;for(r=n+r.toString(s),u=0,n="",i&&(65279===r.charCodeAt(0)&&u++,i=void 0);u<r.length;){if(Gt.lastIndex=u,a=Gt.exec(r),h=a&&void 0!==a.index?a.index:r.length,d=r.charCodeAt(h),!a){n=r.slice(u);break}if(10===d&&u===h&&e)l.push(-3),e=void 0;else switch(e&&(l.push(-5),e=void 0),u<h&&(l.push(r.slice(u,h)),t+=h-u),d){case 0:l.push(65533),t++;break;case 9:for(c=4*Math.ceil(t/4),l.push(-2);t++<c;)l.push(-1);break;case 10:l.push(-4),t=1;break;default:e=!0,t=1}u=h+1}return o&&(e&&l.push(-5),n&&l.push(n),l.push(null)),l}}()(e,t,!0))))}function tn(e){return Array.isArray?Array.isArray(e):"[object Array]"===hn(e)}customElements.define("wrg-index",class extends re{static properties={_archives:{type:Object}};static styles=l`
      ul {
        border: var(--sl-panel-border-width) solid var(--sl-panel-border-color);
        border-radius: var(--sl-border-radius-medium);
        margin: 0;
        padding: 0;
        list-style: none;
      }

      li:not(:first-child) {
        border-top: var(--sl-panel-border-width) solid
          var(--sl-panel-border-color);
      }

      a {
        display: block;
        padding: var(--sl-spacing-small);
        line-height: 1;
        color: var(--sl-color-neutral-700);
        text-decoration: none;
      }

      a:hover {
        background-color: var(--sl-color-neutral-50);
      }

      .archive {
        display: flex;
        justify-content: space-between;
        white-space: nowrap;
        flex-direction: column;
      }

      .name {
        flex: 1;
        font-size: 24px;
      }

      .desc {
        margin-top: 10px;
      }
    `;async firstUpdated(){const e=await ve();this._archives=e.archives}render(){return this._archives?U`
        <ul>
          ${this._archives.map((e=>U`
              <li>
                <a
                  href="./archive/?source=${encodeURIComponent(e.url)}"
                  title=${e.description}
                >
                  <div class="archive">
                    <div class="name">${e.name}</div>
                    <div class="desc">
                    ${ue`${(e=>({_$litStatic$:e,r:oe}))(en(e.description))}`}
                    </div>
                  </div>
                </a>
              </li>
            `))}
        </ul>
      `:""}}),customElements.define("wrg-archive-name",class extends re{static properties={title:{type:String}};async firstUpdated(){const e=await ve();this.title=e&&e.site&&e.site.title}render(){return U`<b>${this.title}</b>`}}),customElements.define("wrg-archives-count",class extends re{static properties={archives:{type:Object}};async firstUpdated(){const e=await ve();this.archives=e.archives}render(){if(this.archives)return U` ${this.archives.length}`}}),customElements.define("wrg-header",class extends re{static properties={homeUrl:{type:String},_title:{type:String},_logoSrc:{type:String}};static styles=l`
      header {
        padding: var(--sl-spacing-x-small);
      }

      .home-link {
        display: inline-flex;
        align-items: center;
        color: var(--sl-color-neutral-700);
        text-decoration: none;
      }

      .logo-wrapper {
        height: 2.25rem;
        width: 2.25rem;
        margin-right: var(--sl-spacing-x-small);
      }

      .logo {
        height: 100%;
        width: 100%;
      }

      .title {
        font-weight: 600;
      }
    `;async firstUpdated(){const e=await ve(this.homeUrl);this._title=e.site.title,this._logoSrc=e.site.logoSrc}render(){return U`
        <header>
          <a class="home-link" href="${this.homeUrl}">
            ${this._logoSrc?U`
                  <div class="logo-wrapper">
                    <img
                      class="logo"
                      src="${this._logoSrc}"
                      alt="${this._title} logo"
                      loading="lazy"
                    />
                  </div>
                `:""}
            <div class="title">${this._title}</div>
          </a>
        </header>
      `}}),customElements.define("wrg-replay",class extends re{static properties={replayBase:{type:String},replayOpts:{type:Object},_replaySource:{state:!0,type:String},_error:{state:!0,type:String}};static styles=l`
      :host {
        display: inline-block;
        width: 100%;
        height: 100%;
      }

      replay-web-page {
        display: block;
      }
    `;async firstUpdated(){const e=await ve();this.replayOpts=e.replay;const t=new URL(window.location.href);try{let e=window.decodeURIComponent(t.searchParams.get("source"));const n=new URL("../",window.location.href).href;this._replaySource=new URL(e,n).href}catch(e){console.error(e),this._error="Invalid WACZ URL"}}render(){return this._error?U` ${this._error} `:this._replaySource?U`
        <replay-web-page
          source=${this._replaySource}
          replayBase=${this.replayOpts.replayBase}
          embed=${this.replayOpts.embed}
          deepLink
        ></replay-web-page>
      `:void 0}});const nn=1/0;function rn(e){return null==e?"":function(e){if("string"==typeof e)return e;let t=e+"";return"0"==t&&1/e==-nn?"-0":t}(e)}function sn(e){return"string"==typeof e}function on(e){return"number"==typeof e}function ln(e){return!0===e||!1===e||function(e){return an(e)&&null!==e}(e)&&"[object Boolean]"==hn(e)}function an(e){return"object"==typeof e}function cn(e){return null!=e}function un(e){return!e.trim().length}function hn(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":Object.prototype.toString.call(e)}const dn=e=>`Missing ${e} property in key`,pn=e=>`Property 'weight' in key '${e}' must be a positive integer`,fn=Object.prototype.hasOwnProperty;class mn{constructor(e){this._keys=[],this._keyMap={};let t=0;e.forEach((e=>{let n=gn(e);t+=n.weight,this._keys.push(n),this._keyMap[n.id]=n,t+=n.weight})),this._keys.forEach((e=>{e.weight/=t}))}get(e){return this._keyMap[e]}keys(){return this._keys}toJSON(){return JSON.stringify(this._keys)}}function gn(e){let t=null,n=null,i=null,r=1,s=null;if(sn(e)||tn(e))i=e,t=vn(e),n=bn(e);else{if(!fn.call(e,"name"))throw new Error(dn("name"));const o=e.name;if(i=o,fn.call(e,"weight")&&(r=e.weight,r<=0))throw new Error(pn(o));t=vn(o),n=bn(o),s=e.getFn}return{path:t,id:n,weight:r,src:i,getFn:s}}function vn(e){return tn(e)?e:e.split(".")}function bn(e){return tn(e)?e.join("."):e}const yn={useExtendedSearch:!1,getFn:function(e,t){let n=[],i=!1;const r=(e,t,s)=>{if(cn(e))if(t[s]){const o=e[t[s]];if(!cn(o))return;if(s===t.length-1&&(sn(o)||on(o)||ln(o)))n.push(rn(o));else if(tn(o)){i=!0;for(let e=0,n=o.length;e<n;e+=1)r(o[e],t,s+1)}else t.length&&r(o,t,s+1)}else n.push(e)};return r(e,sn(t)?t.split("."):t,0),i?n:n[0]},ignoreLocation:!1,ignoreFieldNorm:!1,fieldNormWeight:1};var xn={isCaseSensitive:!1,includeScore:!1,keys:[],shouldSort:!0,sortFn:(e,t)=>e.score===t.score?e.idx<t.idx?-1:1:e.score<t.score?-1:1,includeMatches:!1,findAllMatches:!1,minMatchCharLength:1,location:0,threshold:.6,distance:100,...yn};const _n=/[^ ]+/g;class wn{constructor({getFn:e=xn.getFn,fieldNormWeight:t=xn.fieldNormWeight}={}){this.norm=function(e=1,t=3){const n=new Map,i=Math.pow(10,t);return{get(t){const r=t.match(_n).length;if(n.has(r))return n.get(r);const s=1/Math.pow(r,.5*e),o=parseFloat(Math.round(s*i)/i);return n.set(r,o),o},clear(){n.clear()}}}(t,3),this.getFn=e,this.isCreated=!1,this.setIndexRecords()}setSources(e=[]){this.docs=e}setIndexRecords(e=[]){this.records=e}setKeys(e=[]){this.keys=e,this._keysMap={},e.forEach(((e,t)=>{this._keysMap[e.id]=t}))}create(){!this.isCreated&&this.docs.length&&(this.isCreated=!0,sn(this.docs[0])?this.docs.forEach(((e,t)=>{this._addString(e,t)})):this.docs.forEach(((e,t)=>{this._addObject(e,t)})),this.norm.clear())}add(e){const t=this.size();sn(e)?this._addString(e,t):this._addObject(e,t)}removeAt(e){this.records.splice(e,1);for(let t=e,n=this.size();t<n;t+=1)this.records[t].i-=1}getValueForItemAtKeyId(e,t){return e[this._keysMap[t]]}size(){return this.records.length}_addString(e,t){if(!cn(e)||un(e))return;let n={v:e,i:t,n:this.norm.get(e)};this.records.push(n)}_addObject(e,t){let n={i:t,$:{}};this.keys.forEach(((t,i)=>{let r=t.getFn?t.getFn(e):this.getFn(e,t.path);if(cn(r))if(tn(r)){let e=[];const t=[{nestedArrIndex:-1,value:r}];for(;t.length;){const{nestedArrIndex:n,value:i}=t.pop();if(cn(i))if(sn(i)&&!un(i)){let t={v:i,i:n,n:this.norm.get(i)};e.push(t)}else tn(i)&&i.forEach(((e,n)=>{t.push({nestedArrIndex:n,value:e})}))}n.$[i]=e}else if(sn(r)&&!un(r)){let e={v:r,n:this.norm.get(r)};n.$[i]=e}})),this.records.push(n)}toJSON(){return{keys:this.keys,records:this.records}}}function kn(e,t,{getFn:n=xn.getFn,fieldNormWeight:i=xn.fieldNormWeight}={}){const r=new wn({getFn:n,fieldNormWeight:i});return r.setKeys(e.map(gn)),r.setSources(t),r.create(),r}function $n(e,{errors:t=0,currentLocation:n=0,expectedLocation:i=0,distance:r=xn.distance,ignoreLocation:s=xn.ignoreLocation}={}){const o=t/e.length;if(s)return o;const l=Math.abs(i-n);return r?o+l/r:l?1:o}const An=32;function Sn(e,t,n,{location:i=xn.location,distance:r=xn.distance,threshold:s=xn.threshold,findAllMatches:o=xn.findAllMatches,minMatchCharLength:l=xn.minMatchCharLength,includeMatches:a=xn.includeMatches,ignoreLocation:c=xn.ignoreLocation}={}){if(t.length>An)throw new Error(`Pattern length exceeds max of ${An}.`);const u=t.length,h=e.length,d=Math.max(0,Math.min(i,h));let p=s,f=d;const m=l>1||a,g=m?Array(h):[];let v;for(;(v=e.indexOf(t,f))>-1;){let e=$n(t,{currentLocation:v,expectedLocation:d,distance:r,ignoreLocation:c});if(p=Math.min(e,p),f=v+u,m){let e=0;for(;e<u;)g[v+e]=1,e+=1}}f=-1;let b=[],y=1,x=u+h;const _=1<<u-1;for(let i=0;i<u;i+=1){let s=0,l=x;for(;s<l;){$n(t,{errors:i,currentLocation:d+l,expectedLocation:d,distance:r,ignoreLocation:c})<=p?s=l:x=l,l=Math.floor((x-s)/2+s)}x=l;let a=Math.max(1,d-l+1),v=o?h:Math.min(d+l,h)+u,w=Array(v+2);w[v+1]=(1<<i)-1;for(let s=v;s>=a;s-=1){let o=s-1,l=n[e.charAt(o)];if(m&&(g[o]=+!!l),w[s]=(w[s+1]<<1|1)&l,i&&(w[s]|=(b[s+1]|b[s])<<1|1|b[s+1]),w[s]&_&&(y=$n(t,{errors:i,currentLocation:o,expectedLocation:d,distance:r,ignoreLocation:c}),y<=p)){if(p=y,f=o,f<=d)break;a=Math.max(1,2*d-f)}}if($n(t,{errors:i+1,currentLocation:d,expectedLocation:d,distance:r,ignoreLocation:c})>p)break;b=w}const w={isMatch:f>=0,score:Math.max(.001,y)};if(m){const e=function(e=[],t=xn.minMatchCharLength){let n=[],i=-1,r=-1,s=0;for(let o=e.length;s<o;s+=1){let o=e[s];o&&-1===i?i=s:o||-1===i||(r=s-1,r-i+1>=t&&n.push([i,r]),i=-1)}return e[s-1]&&s-i>=t&&n.push([i,s-1]),n}(g,l);e.length?a&&(w.indices=e):w.isMatch=!1}return w}function Cn(e){let t={};for(let n=0,i=e.length;n<i;n+=1){const r=e.charAt(n);t[r]=(t[r]||0)|1<<i-n-1}return t}class En{constructor(e,{location:t=xn.location,threshold:n=xn.threshold,distance:i=xn.distance,includeMatches:r=xn.includeMatches,findAllMatches:s=xn.findAllMatches,minMatchCharLength:o=xn.minMatchCharLength,isCaseSensitive:l=xn.isCaseSensitive,ignoreLocation:a=xn.ignoreLocation}={}){if(this.options={location:t,threshold:n,distance:i,includeMatches:r,findAllMatches:s,minMatchCharLength:o,isCaseSensitive:l,ignoreLocation:a},this.pattern=l?e:e.toLowerCase(),this.chunks=[],!this.pattern.length)return;const c=(e,t)=>{this.chunks.push({pattern:e,alphabet:Cn(e),startIndex:t})},u=this.pattern.length;if(u>An){let e=0;const t=u%An,n=u-t;for(;e<n;)c(this.pattern.substr(e,An),e),e+=An;if(t){const e=u-An;c(this.pattern.substr(e),e)}}else c(this.pattern,0)}searchIn(e){const{isCaseSensitive:t,includeMatches:n}=this.options;if(t||(e=e.toLowerCase()),this.pattern===e){let t={isMatch:!0,score:0};return n&&(t.indices=[[0,e.length-1]]),t}const{location:i,distance:r,threshold:s,findAllMatches:o,minMatchCharLength:l,ignoreLocation:a}=this.options;let c=[],u=0,h=!1;this.chunks.forEach((({pattern:t,alphabet:d,startIndex:p})=>{const{isMatch:f,score:m,indices:g}=Sn(e,t,d,{location:i+p,distance:r,threshold:s,findAllMatches:o,minMatchCharLength:l,includeMatches:n,ignoreLocation:a});f&&(h=!0),u+=m,f&&g&&(c=[...c,...g])}));let d={isMatch:h,score:h?u/this.chunks.length:1};return h&&n&&(d.indices=c),d}}class Fn{constructor(e){this.pattern=e}static isMultiMatch(e){return Mn(e,this.multiRegex)}static isSingleMatch(e){return Mn(e,this.singleRegex)}search(){}}function Mn(e,t){const n=e.match(t);return n?n[1]:null}class In extends Fn{constructor(e,{location:t=xn.location,threshold:n=xn.threshold,distance:i=xn.distance,includeMatches:r=xn.includeMatches,findAllMatches:s=xn.findAllMatches,minMatchCharLength:o=xn.minMatchCharLength,isCaseSensitive:l=xn.isCaseSensitive,ignoreLocation:a=xn.ignoreLocation}={}){super(e),this._bitapSearch=new En(e,{location:t,threshold:n,distance:i,includeMatches:r,findAllMatches:s,minMatchCharLength:o,isCaseSensitive:l,ignoreLocation:a})}static get type(){return"fuzzy"}static get multiRegex(){return/^"(.*)"$/}static get singleRegex(){return/^(.*)$/}search(e){return this._bitapSearch.searchIn(e)}}class zn extends Fn{constructor(e){super(e)}static get type(){return"include"}static get multiRegex(){return/^'"(.*)"$/}static get singleRegex(){return/^'(.*)$/}search(e){let t,n=0;const i=[],r=this.pattern.length;for(;(t=e.indexOf(this.pattern,n))>-1;)n=t+r,i.push([t,n-1]);const s=!!i.length;return{isMatch:s,score:s?0:1,indices:i}}}const Ln=[class extends Fn{constructor(e){super(e)}static get type(){return"exact"}static get multiRegex(){return/^="(.*)"$/}static get singleRegex(){return/^=(.*)$/}search(e){const t=e===this.pattern;return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},zn,class extends Fn{constructor(e){super(e)}static get type(){return"prefix-exact"}static get multiRegex(){return/^\^"(.*)"$/}static get singleRegex(){return/^\^(.*)$/}search(e){const t=e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,this.pattern.length-1]}}},class extends Fn{constructor(e){super(e)}static get type(){return"inverse-prefix-exact"}static get multiRegex(){return/^!\^"(.*)"$/}static get singleRegex(){return/^!\^(.*)$/}search(e){const t=!e.startsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends Fn{constructor(e){super(e)}static get type(){return"inverse-suffix-exact"}static get multiRegex(){return/^!"(.*)"\$$/}static get singleRegex(){return/^!(.*)\$$/}search(e){const t=!e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},class extends Fn{constructor(e){super(e)}static get type(){return"suffix-exact"}static get multiRegex(){return/^"(.*)"\$$/}static get singleRegex(){return/^(.*)\$$/}search(e){const t=e.endsWith(this.pattern);return{isMatch:t,score:t?0:1,indices:[e.length-this.pattern.length,e.length-1]}}},class extends Fn{constructor(e){super(e)}static get type(){return"inverse-exact"}static get multiRegex(){return/^!"(.*)"$/}static get singleRegex(){return/^!(.*)$/}search(e){const t=-1===e.indexOf(this.pattern);return{isMatch:t,score:t?0:1,indices:[0,e.length-1]}}},In],Tn=Ln.length,On=/ +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;const Pn=new Set([In.type,zn.type]);class Dn{constructor(e,{isCaseSensitive:t=xn.isCaseSensitive,includeMatches:n=xn.includeMatches,minMatchCharLength:i=xn.minMatchCharLength,ignoreLocation:r=xn.ignoreLocation,findAllMatches:s=xn.findAllMatches,location:o=xn.location,threshold:l=xn.threshold,distance:a=xn.distance}={}){this.query=null,this.options={isCaseSensitive:t,includeMatches:n,minMatchCharLength:i,findAllMatches:s,ignoreLocation:r,location:o,threshold:l,distance:a},this.pattern=t?e:e.toLowerCase(),this.query=function(e,t={}){return e.split("|").map((e=>{let n=e.trim().split(On).filter((e=>e&&!!e.trim())),i=[];for(let e=0,r=n.length;e<r;e+=1){const r=n[e];let s=!1,o=-1;for(;!s&&++o<Tn;){const e=Ln[o];let n=e.isMultiMatch(r);n&&(i.push(new e(n,t)),s=!0)}if(!s)for(o=-1;++o<Tn;){const e=Ln[o];let n=e.isSingleMatch(r);if(n){i.push(new e(n,t));break}}}return i}))}(this.pattern,this.options)}static condition(e,t){return t.useExtendedSearch}searchIn(e){const t=this.query;if(!t)return{isMatch:!1,score:1};const{includeMatches:n,isCaseSensitive:i}=this.options;e=i?e:e.toLowerCase();let r=0,s=[],o=0;for(let i=0,l=t.length;i<l;i+=1){const l=t[i];s.length=0,r=0;for(let t=0,i=l.length;t<i;t+=1){const i=l[t],{isMatch:a,indices:c,score:u}=i.search(e);if(!a){o=0,r=0,s.length=0;break}if(r+=1,o+=u,n){const e=i.constructor.type;Pn.has(e)?s=[...s,...c]:s.push(c)}}if(r){let e={isMatch:!0,score:o/r};return n&&(e.indices=s),e}}return{isMatch:!1,score:1}}}const Un=[];function Rn(e,t){for(let n=0,i=Un.length;n<i;n+=1){let i=Un[n];if(i.condition(e,t))return new i(e,t)}return new En(e,t)}const Nn="$and",Bn="$or",Hn="$path",jn="$val",Vn=e=>!(!e[Nn]&&!e[Bn]),qn=e=>({[Nn]:Object.keys(e).map((t=>({[t]:e[t]})))});function Wn(e,t,{auto:n=!0}={}){const i=e=>{let r=Object.keys(e);const s=(e=>!!e[Hn])(e);if(!s&&r.length>1&&!Vn(e))return i(qn(e));if((e=>!tn(e)&&an(e)&&!Vn(e))(e)){const i=s?e[Hn]:r[0],o=s?e[jn]:e[i];if(!sn(o))throw new Error((e=>`Invalid value for key ${e}`)(i));const l={keyId:bn(i),pattern:o};return n&&(l.searcher=Rn(o,t)),l}let o={children:[],operator:r[0]};return r.forEach((t=>{const n=e[t];tn(n)&&n.forEach((e=>{o.children.push(i(e))}))})),o};return Vn(e)||(e=qn(e)),i(e)}function Kn(e,t){const n=e.matches;t.matches=[],cn(n)&&n.forEach((e=>{if(!cn(e.indices)||!e.indices.length)return;const{indices:n,value:i}=e;let r={indices:n,value:i};e.key&&(r.key=e.key.src),e.idx>-1&&(r.refIndex=e.idx),t.matches.push(r)}))}function Qn(e,t){t.score=e.score}class Zn{constructor(e,t={},n){this.options={...xn,...t},this.options.useExtendedSearch,this._keyStore=new mn(this.options.keys),this.setCollection(e,n)}setCollection(e,t){if(this._docs=e,t&&!(t instanceof wn))throw new Error("Incorrect 'index' type");this._myIndex=t||kn(this.options.keys,this._docs,{getFn:this.options.getFn,fieldNormWeight:this.options.fieldNormWeight})}add(e){cn(e)&&(this._docs.push(e),this._myIndex.add(e))}remove(e=(()=>!1)){const t=[];for(let n=0,i=this._docs.length;n<i;n+=1){const r=this._docs[n];e(r,n)&&(this.removeAt(n),n-=1,i-=1,t.push(r))}return t}removeAt(e){this._docs.splice(e,1),this._myIndex.removeAt(e)}getIndex(){return this._myIndex}search(e,{limit:t=-1}={}){const{includeMatches:n,includeScore:i,shouldSort:r,sortFn:s,ignoreFieldNorm:o}=this.options;let l=sn(e)?sn(this._docs[0])?this._searchStringList(e):this._searchObjectList(e):this._searchLogical(e);return function(e,{ignoreFieldNorm:t=xn.ignoreFieldNorm}){e.forEach((e=>{let n=1;e.matches.forEach((({key:e,norm:i,score:r})=>{const s=e?e.weight:null;n*=Math.pow(0===r&&s?Number.EPSILON:r,(s||1)*(t?1:i))})),e.score=n}))}(l,{ignoreFieldNorm:o}),r&&l.sort(s),on(t)&&t>-1&&(l=l.slice(0,t)),function(e,t,{includeMatches:n=xn.includeMatches,includeScore:i=xn.includeScore}={}){const r=[];return n&&r.push(Kn),i&&r.push(Qn),e.map((e=>{const{idx:n}=e,i={item:t[n],refIndex:n};return r.length&&r.forEach((t=>{t(e,i)})),i}))}(l,this._docs,{includeMatches:n,includeScore:i})}_searchStringList(e){const t=Rn(e,this.options),{records:n}=this._myIndex,i=[];return n.forEach((({v:e,i:n,n:r})=>{if(!cn(e))return;const{isMatch:s,score:o,indices:l}=t.searchIn(e);s&&i.push({item:e,idx:n,matches:[{score:o,value:e,norm:r,indices:l}]})})),i}_searchLogical(e){const t=Wn(e,this.options),n=(e,t,i)=>{if(!e.children){const{keyId:n,searcher:r}=e,s=this._findMatches({key:this._keyStore.get(n),value:this._myIndex.getValueForItemAtKeyId(t,n),searcher:r});return s&&s.length?[{idx:i,item:t,matches:s}]:[]}const r=[];for(let s=0,o=e.children.length;s<o;s+=1){const o=e.children[s],l=n(o,t,i);if(l.length)r.push(...l);else if(e.operator===Nn)return[]}return r},i=this._myIndex.records,r={},s=[];return i.forEach((({$:e,i})=>{if(cn(e)){let o=n(t,e,i);o.length&&(r[i]||(r[i]={idx:i,item:e,matches:[]},s.push(r[i])),o.forEach((({matches:e})=>{r[i].matches.push(...e)})))}})),s}_searchObjectList(e){const t=Rn(e,this.options),{keys:n,records:i}=this._myIndex,r=[];return i.forEach((({$:e,i})=>{if(!cn(e))return;let s=[];n.forEach(((n,i)=>{s.push(...this._findMatches({key:n,value:e[i],searcher:t}))})),s.length&&r.push({idx:i,item:e,matches:s})})),r}_findMatches({key:e,value:t,searcher:n}){if(!cn(t))return[];let i=[];if(tn(t))t.forEach((({v:t,i:r,n:s})=>{if(!cn(t))return;const{isMatch:o,score:l,indices:a}=n.searchIn(t);o&&i.push({score:l,key:e,value:t,idx:r,norm:s,indices:a})}));else{const{v:r,n:s}=t,{isMatch:o,score:l,indices:a}=n.searchIn(r);o&&i.push({score:l,key:e,value:r,norm:s,indices:a})}return i}}Zn.version="6.6.2",Zn.createIndex=kn,Zn.parseIndex=function(e,{getFn:t=xn.getFn,fieldNormWeight:n=xn.fieldNormWeight}={}){const{keys:i,records:r}=e,s=new wn({getFn:t,fieldNormWeight:n});return s.setKeys(i),s.setIndexRecords(r),s},Zn.config=xn,Zn.parseQuery=Wn,function(...e){Un.push(...e)}(Dn);var Jn,Xn,Yn=window,Gn=Yn.ShadowRoot&&(void 0===Yn.ShadyCSS||Yn.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ei=Symbol(),ti=new WeakMap,ni=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ei)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Gn&&void 0===e){const n=void 0!==t&&1===t.length;n&&(e=ti.get(t)),void 0===e&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&ti.set(t,e))}return e}toString(){return this.cssText}},ii=(e,...t)=>{const n=1===e.length?e[0]:t.reduce(((t,n,i)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if("number"==typeof e)return e;throw Error("Value passed to 'css' function must be a 'css' function result: "+e+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[i+1]),e[0]);return new ni(n,e,ei)},ri=Gn?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return(e=>new ni("string"==typeof e?e:e+"",void 0,ei))(t)})(e):e,si=window,oi=si.trustedTypes,li=oi?oi.emptyScript:"",ai=si.reactiveElementPolyfillSupport,ci={toAttribute(e,t){switch(t){case Boolean:e=e?li:null;break;case Object:case Array:e=null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=null!==e;break;case Number:n=null===e?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch(e){n=null}}return n}},ui=(e,t)=>t!==e&&(t==t||e==e),hi={attribute:!0,type:String,converter:ci,reflect:!1,hasChanged:ui},di=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(e){var t;this.finalize(),(null!==(t=this.h)&&void 0!==t?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach(((t,n)=>{const i=this._$Ep(n,t);void 0!==i&&(this._$Ev.set(i,n),e.push(i))})),e}static createProperty(e,t=hi){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n="symbol"==typeof e?Symbol():"__"+e,i=this.getPropertyDescriptor(e,n,t);void 0!==i&&Object.defineProperty(this.prototype,e,i)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(i){const r=this[e];this[t]=i,this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||hi}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),void 0!==e.h&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,t=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const n of t)this.createProperty(n,e[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const e of n)t.unshift(ri(e))}else void 0!==e&&t.push(ri(e));return t}static _$Ep(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}u(){var e;this._$E_=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(e=this.constructor.h)||void 0===e||e.forEach((e=>e(this)))}addController(e){var t,n;(null!==(t=this._$ES)&&void 0!==t?t:this._$ES=[]).push(e),void 0!==this.renderRoot&&this.isConnected&&(null===(n=e.hostConnected)||void 0===n||n.call(e))}removeController(e){var t;null===(t=this._$ES)||void 0===t||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;const t=null!==(e=this.shadowRoot)&&void 0!==e?e:this.attachShadow(this.constructor.shadowRootOptions);return((e,t)=>{Gn?e.adoptedStyleSheets=t.map((e=>e instanceof CSSStyleSheet?e:e.styleSheet)):t.forEach((t=>{const n=document.createElement("style"),i=Yn.litNonce;void 0!==i&&n.setAttribute("nonce",i),n.textContent=t.cssText,e.appendChild(n)}))})(t,this.constructor.elementStyles),t}connectedCallback(){var e;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostConnected)||void 0===t?void 0:t.call(e)}))}enableUpdating(e){}disconnectedCallback(){var e;null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostDisconnected)||void 0===t?void 0:t.call(e)}))}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=hi){var i;const r=this.constructor._$Ep(e,n);if(void 0!==r&&!0===n.reflect){const s=(void 0!==(null===(i=n.converter)||void 0===i?void 0:i.toAttribute)?n.converter:ci).toAttribute(t,n.type);this._$El=e,null==s?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(e,t){var n;const i=this.constructor,r=i._$Ev.get(e);if(void 0!==r&&this._$El!==r){const e=i.getPropertyOptions(r),s="function"==typeof e.converter?{fromAttribute:e.converter}:void 0!==(null===(n=e.converter)||void 0===n?void 0:n.fromAttribute)?e.converter:ci;this._$El=r,this[r]=s.fromAttribute(t,e.type),this._$El=null}}requestUpdate(e,t,n){let i=!0;void 0!==e&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||ui)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),!0===n.reflect&&this._$El!==e&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(e,n))):i=!1),!this.isUpdatePending&&i&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const e=this.scheduleUpdate();return null!=e&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((e,t)=>this[t]=e)),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),null===(e=this._$ES)||void 0===e||e.forEach((e=>{var t;return null===(t=e.hostUpdate)||void 0===t?void 0:t.call(e)})),this.update(n)):this._$Ek()}catch(e){throw t=!1,this._$Ek(),e}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;null===(t=this._$ES)||void 0===t||t.forEach((e=>{var t;return null===(t=e.hostUpdated)||void 0===t?void 0:t.call(e)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){void 0!==this._$EC&&(this._$EC.forEach(((e,t)=>this._$EO(t,this[t],e))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};di.finalized=!0,di.elementProperties=new Map,di.elementStyles=[],di.shadowRootOptions={mode:"open"},null==ai||ai({ReactiveElement:di}),(null!==(Jn=si.reactiveElementVersions)&&void 0!==Jn?Jn:si.reactiveElementVersions=[]).push("1.6.1");var pi=window,fi=pi.trustedTypes,mi=fi?fi.createPolicy("lit-html",{createHTML:e=>e}):void 0,gi=`lit$${(Math.random()+"").slice(9)}$`,vi="?"+gi,bi=`<${vi}>`,yi=document,xi=(e="")=>yi.createComment(e),_i=e=>null===e||"object"!=typeof e&&"function"!=typeof e,wi=Array.isArray,ki=e=>wi(e)||"function"==typeof(null==e?void 0:e[Symbol.iterator]),$i=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ai=/-->/g,Si=/>/g,Ci=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),Ei=/'/g,Fi=/"/g,Mi=/^(?:script|style|textarea|title)$/i,Ii=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),zi=Ii(1),Li=(Ii(2),Symbol.for("lit-noChange")),Ti=Symbol.for("lit-nothing"),Oi=new WeakMap,Pi=yi.createTreeWalker(yi,129,null,!1),Di=(e,t)=>{const n=e.length-1,i=[];let r,s=2===t?"<svg>":"",o=$i;for(let t=0;t<n;t++){const n=e[t];let l,a,c=-1,u=0;for(;u<n.length&&(o.lastIndex=u,a=o.exec(n),null!==a);)u=o.lastIndex,o===$i?"!--"===a[1]?o=Ai:void 0!==a[1]?o=Si:void 0!==a[2]?(Mi.test(a[2])&&(r=RegExp("</"+a[2],"g")),o=Ci):void 0!==a[3]&&(o=Ci):o===Ci?">"===a[0]?(o=null!=r?r:$i,c=-1):void 0===a[1]?c=-2:(c=o.lastIndex-a[2].length,l=a[1],o=void 0===a[3]?Ci:'"'===a[3]?Fi:Ei):o===Fi||o===Ei?o=Ci:o===Ai||o===Si?o=$i:(o=Ci,r=void 0);const h=o===Ci&&e[t+1].startsWith("/>")?" ":"";s+=o===$i?n+bi:c>=0?(i.push(l),n.slice(0,c)+"$lit$"+n.slice(c)+gi+h):n+gi+(-2===c?(i.push(void 0),t):h)}const l=s+(e[n]||"<?>")+(2===t?"</svg>":"");if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==mi?mi.createHTML(l):l,i]},Ui=class{constructor({strings:e,_$litType$:t},n){let i;this.parts=[];let r=0,s=0;const o=e.length-1,l=this.parts,[a,c]=Di(e,t);if(this.el=Ui.createElement(a,n),Pi.currentNode=this.el.content,2===t){const e=this.el.content,t=e.firstChild;t.remove(),e.append(...t.childNodes)}for(;null!==(i=Pi.nextNode())&&l.length<o;){if(1===i.nodeType){if(i.hasAttributes()){const e=[];for(const t of i.getAttributeNames())if(t.endsWith("$lit$")||t.startsWith(gi)){const n=c[s++];if(e.push(t),void 0!==n){const e=i.getAttribute(n.toLowerCase()+"$lit$").split(gi),t=/([.?@])?(.*)/.exec(n);l.push({type:1,index:r,name:t[2],strings:e,ctor:"."===t[1]?ji:"?"===t[1]?qi:"@"===t[1]?Wi:Hi})}else l.push({type:6,index:r})}for(const t of e)i.removeAttribute(t)}if(Mi.test(i.tagName)){const e=i.textContent.split(gi),t=e.length-1;if(t>0){i.textContent=fi?fi.emptyScript:"";for(let n=0;n<t;n++)i.append(e[n],xi()),Pi.nextNode(),l.push({type:2,index:++r});i.append(e[t],xi())}}}else if(8===i.nodeType)if(i.data===vi)l.push({type:2,index:r});else{let e=-1;for(;-1!==(e=i.data.indexOf(gi,e+1));)l.push({type:7,index:r}),e+=gi.length-1}r++}}static createElement(e,t){const n=yi.createElement("template");return n.innerHTML=e,n}};function Ri(e,t,n=e,i){var r,s,o,l;if(t===Li)return t;let a=void 0!==i?null===(r=n._$Co)||void 0===r?void 0:r[i]:n._$Cl;const c=_i(t)?void 0:t._$litDirective$;return(null==a?void 0:a.constructor)!==c&&(null===(s=null==a?void 0:a._$AO)||void 0===s||s.call(a,!1),void 0===c?a=void 0:(a=new c(e),a._$AT(e,n,i)),void 0!==i?(null!==(o=(l=n)._$Co)&&void 0!==o?o:l._$Co=[])[i]=a:n._$Cl=a),void 0!==a&&(t=Ri(e,a._$AS(e,t.values),a,i)),t}var Ni=class{constructor(e,t){this.u=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(e){var t;const{el:{content:n},parts:i}=this._$AD,r=(null!==(t=null==e?void 0:e.creationScope)&&void 0!==t?t:yi).importNode(n,!0);Pi.currentNode=r;let s=Pi.nextNode(),o=0,l=0,a=i[0];for(;void 0!==a;){if(o===a.index){let t;2===a.type?t=new Bi(s,s.nextSibling,this,e):1===a.type?t=new a.ctor(s,a.name,a.strings,this,e):6===a.type&&(t=new Ki(s,this,e)),this.u.push(t),a=i[++l]}o!==(null==a?void 0:a.index)&&(s=Pi.nextNode(),o++)}return r}p(e){let t=0;for(const n of this.u)void 0!==n&&(void 0!==n.strings?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}},Bi=class{constructor(e,t,n,i){var r;this.type=2,this._$AH=Ti,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=i,this._$Cm=null===(r=null==i?void 0:i.isConnected)||void 0===r||r}get _$AU(){var e,t;return null!==(t=null===(e=this._$AM)||void 0===e?void 0:e._$AU)&&void 0!==t?t:this._$Cm}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return void 0!==t&&11===e.nodeType&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ri(this,e,t),_i(e)?e===Ti||null==e||""===e?(this._$AH!==Ti&&this._$AR(),this._$AH=Ti):e!==this._$AH&&e!==Li&&this.g(e):void 0!==e._$litType$?this.$(e):void 0!==e.nodeType?this.T(e):ki(e)?this.k(e):this.g(e)}O(e,t=this._$AB){return this._$AA.parentNode.insertBefore(e,t)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}g(e){this._$AH!==Ti&&_i(this._$AH)?this._$AA.nextSibling.data=e:this.T(yi.createTextNode(e)),this._$AH=e}$(e){var t;const{values:n,_$litType$:i}=e,r="number"==typeof i?this._$AC(e):(void 0===i.el&&(i.el=Ui.createElement(i.h,this.options)),i);if((null===(t=this._$AH)||void 0===t?void 0:t._$AD)===r)this._$AH.p(n);else{const e=new Ni(r,this),t=e.v(this.options);e.p(n),this.T(t),this._$AH=e}}_$AC(e){let t=Oi.get(e.strings);return void 0===t&&Oi.set(e.strings,t=new Ui(e)),t}k(e){wi(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,i=0;for(const r of e)i===t.length?t.push(n=new Bi(this.O(xi()),this.O(xi()),this,this.options)):n=t[i],n._$AI(r),i++;i<t.length&&(this._$AR(n&&n._$AB.nextSibling,i),t.length=i)}_$AR(e=this._$AA.nextSibling,t){var n;for(null===(n=this._$AP)||void 0===n||n.call(this,!1,!0,t);e&&e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){var t;void 0===this._$AM&&(this._$Cm=e,null===(t=this._$AP)||void 0===t||t.call(this,e))}},Hi=class{constructor(e,t,n,i,r){this.type=1,this._$AH=Ti,this._$AN=void 0,this.element=e,this.name=t,this._$AM=i,this.options=r,n.length>2||""!==n[0]||""!==n[1]?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=Ti}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,i){const r=this.strings;let s=!1;if(void 0===r)e=Ri(this,e,t,0),s=!_i(e)||e!==this._$AH&&e!==Li,s&&(this._$AH=e);else{const i=e;let o,l;for(e=r[0],o=0;o<r.length-1;o++)l=Ri(this,i[n+o],t,o),l===Li&&(l=this._$AH[o]),s||(s=!_i(l)||l!==this._$AH[o]),l===Ti?e=Ti:e!==Ti&&(e+=(null!=l?l:"")+r[o+1]),this._$AH[o]=l}s&&!i&&this.j(e)}j(e){e===Ti?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=e?e:"")}},ji=class extends Hi{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===Ti?void 0:e}},Vi=fi?fi.emptyScript:"",qi=class extends Hi{constructor(){super(...arguments),this.type=4}j(e){e&&e!==Ti?this.element.setAttribute(this.name,Vi):this.element.removeAttribute(this.name)}},Wi=class extends Hi{constructor(e,t,n,i,r){super(e,t,n,i,r),this.type=5}_$AI(e,t=this){var n;if((e=null!==(n=Ri(this,e,t,0))&&void 0!==n?n:Ti)===Li)return;const i=this._$AH,r=e===Ti&&i!==Ti||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,s=e!==Ti&&(i===Ti||r);r&&this.element.removeEventListener(this.name,this,i),s&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;"function"==typeof this._$AH?this._$AH.call(null!==(n=null===(t=this.options)||void 0===t?void 0:t.host)&&void 0!==n?n:this.element,e):this._$AH.handleEvent(e)}},Ki=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Ri(this,e)}},Qi={P:"$lit$",A:gi,M:vi,C:1,L:Di,R:Ni,D:ki,V:Ri,I:Bi,H:Hi,N:qi,U:Wi,B:ji,F:Ki},Zi=pi.litHtmlPolyfillSupport;null==Zi||Zi(Ui,Bi),(null!==(Xn=pi.litHtmlVersions)&&void 0!==Xn?Xn:pi.litHtmlVersions=[]).push("2.6.1");var Ji,Xi,Yi=class extends di{constructor(){super(...arguments),this.renderOptions={host:this},this._$Dt=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return null!==(e=(t=this.renderOptions).renderBefore)&&void 0!==e||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Dt=((e,t,n)=>{var i,r;const s=null!==(i=null==n?void 0:n.renderBefore)&&void 0!==i?i:t;let o=s._$litPart$;if(void 0===o){const e=null!==(r=null==n?void 0:n.renderBefore)&&void 0!==r?r:null;s._$litPart$=o=new Bi(t.insertBefore(xi(),e),e,void 0,null!=n?n:{})}return o._$AI(e),o})(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),null===(e=this._$Dt)||void 0===e||e.setConnected(!1)}render(){return Li}};Yi.finalized=!0,Yi._$litElement$=!0,null===(Ji=globalThis.litElementHydrateSupport)||void 0===Ji||Ji.call(globalThis,{LitElement:Yi});var Gi=globalThis.litElementPolyfillSupport;null==Gi||Gi({LitElement:Yi}),(null!==(Xi=globalThis.litElementVersions)&&void 0!==Xi?Xi:globalThis.litElementVersions=[]).push("3.2.0");var er=ii`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,tr=ii`
  ${er}

  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,nr=class{constructor(e,...t){this.slotNames=[],(this.host=e).addController(this),this.slotNames=t,this.handleSlotChange=this.handleSlotChange.bind(this)}hasDefaultSlot(){return[...this.host.childNodes].some((e=>{if(e.nodeType===e.TEXT_NODE&&""!==e.textContent.trim())return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if("sl-visually-hidden"===t.tagName.toLowerCase())return!1;if(!t.hasAttribute("slot"))return!0}return!1}))}hasNamedSlot(e){return null!==this.host.querySelector(`:scope > [slot="${e}"]`)}test(e){return"[default]"===e?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}handleSlotChange(e){const t=e.target;(this.slotNames.includes("[default]")&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()}};var ir=1,rr=3,sr=4,or=e=>(...t)=>({_$litDirective$:e,values:t}),lr=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},ar=or(class extends lr{constructor(e){var t;if(super(e),e.type!==ir||"class"!==e.name||(null===(t=e.strings)||void 0===t?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,[t]){var n,i;if(void 0===this.nt){this.nt=new Set,void 0!==e.strings&&(this.st=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(const e in t)t[e]&&!(null===(n=this.st)||void 0===n?void 0:n.has(e))&&this.nt.add(e);return this.render(t)}const r=e.element.classList;this.nt.forEach((e=>{e in t||(r.remove(e),this.nt.delete(e))}));for(const e in t){const n=!!t[e];n===this.nt.has(e)||(null===(i=this.st)||void 0===i?void 0:i.has(e))||(n?(r.add(e),this.nt.add(e)):(r.remove(e),this.nt.delete(e)))}return Li}}),cr=Object.defineProperty,ur=Object.defineProperties,hr=Object.getOwnPropertyDescriptor,dr=Object.getOwnPropertyDescriptors,pr=Object.getOwnPropertySymbols,fr=Object.prototype.hasOwnProperty,mr=Object.prototype.propertyIsEnumerable,gr=(e,t,n)=>t in e?cr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,vr=(e,t)=>{for(var n in t||(t={}))fr.call(t,n)&&gr(e,n,t[n]);if(pr)for(var n of pr(t))mr.call(t,n)&&gr(e,n,t[n]);return e},br=(e,t)=>ur(e,dr(t)),yr=(e,t,n,i)=>{for(var r,s=i>1?void 0:i?hr(t,n):t,o=e.length-1;o>=0;o--)(r=e[o])&&(s=(i?r(t,n,s):r(s))||s);return i&&s&&cr(t,n,s),s},xr=e=>t=>"function"==typeof t?((e,t)=>(customElements.define(e,t),t))(e,t):((e,t)=>{const{kind:n,elements:i}=t;return{kind:n,elements:i,finisher(t){customElements.define(e,t)}}})(e,t),_r=(e,t)=>"method"===t.kind&&t.descriptor&&!("value"in t.descriptor)?br(vr({},t),{finisher(n){n.createProperty(t.key,e)}}):{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){"function"==typeof t.initializer&&(this[t.key]=t.initializer.call(this))},finisher(n){n.createProperty(t.key,e)}};function wr(e){return(t,n)=>void 0!==n?((e,t,n)=>{t.constructor.createProperty(n,e)})(e,t,n):_r(e,t)}function kr(e){return wr(br(vr({},e),{state:!0}))}var $r,Ar=({finisher:e,descriptor:t})=>(n,i)=>{var r;if(void 0===i){const i=null!==(r=n.originalKey)&&void 0!==r?r:n.key,s=null!=t?{kind:"method",placement:"prototype",key:i,descriptor:t(n.key)}:br(vr({},n),{key:i});return null!=e&&(s.finisher=function(t){e(t,i)}),s}{const r=n.constructor;void 0!==t&&Object.defineProperty(n,i,t(i)),null==e||e(r,i)}};function Sr(e,t){return Ar({descriptor:n=>{const i={get(){var t,n;return null!==(n=null===(t=this.renderRoot)||void 0===t?void 0:t.querySelector(e))&&void 0!==n?n:null},enumerable:!0,configurable:!0};if(t){const t="symbol"==typeof n?Symbol():"__"+n;i.get=function(){var n,i;return void 0===this[t]&&(this[t]=null!==(i=null===(n=this.renderRoot)||void 0===n?void 0:n.querySelector(e))&&void 0!==i?i:null),this[t]}}return i}})}null===($r=window.HTMLSlotElement)||void 0===$r||$r.prototype.assignedElements;var Cr=class extends Yi{emit(e,t){const n=new CustomEvent(e,vr({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}};yr([wr()],Cr.prototype,"dir",2),yr([wr()],Cr.prototype,"lang",2);var Er=class extends Cr{constructor(){super(...arguments),this.hasSlotController=new nr(this,"footer","header","image")}render(){return zi`
      <div
        part="base"
        class=${ar({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Er.styles=tr,Er=yr([xr("sl-card")],Er);var Fr=ii`
  ${er}

  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,Mr=class extends Cr{connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu")}handleClick(e){const t=e.target.closest("sl-menu-item");!t||t.disabled||t.inert||("checkbox"===t.type&&(t.checked=!t.checked),this.emit("sl-select",{detail:{item:t}}))}handleKeyDown(e){if("Enter"===e.key){const t=this.getCurrentItem();e.preventDefault(),null==t||t.click()}if(" "===e.key&&e.preventDefault(),["ArrowDown","ArrowUp","Home","End"].includes(e.key)){const t=this.getAllItems(),n=this.getCurrentItem();let i=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),"ArrowDown"===e.key?i++:"ArrowUp"===e.key?i--:"Home"===e.key?i=0:"End"===e.key&&(i=t.length-1),i<0&&(i=t.length-1),i>t.length-1&&(i=0),this.setCurrentItem(t[i]),t[i].focus())}}handleMouseDown(e){const t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){const e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){var t;return"sl-menu-item"===e.tagName.toLowerCase()||["menuitem","menuitemcheckbox","menuitemradio"].includes(null!=(t=e.getAttribute("role"))?t:"")}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter((e=>!(e.inert||!this.isMenuItem(e))))}getCurrentItem(){return this.getAllItems().find((e=>"0"===e.getAttribute("tabindex")))}setCurrentItem(e){this.getAllItems().forEach((t=>{t.setAttribute("tabindex",t===e?"0":"-1")}))}render(){return zi`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};Mr.styles=Fr,yr([Sr("slot")],Mr.prototype,"defaultSlot",2),Mr=yr([xr("sl-menu")],Mr);var Ir=ii`
  ${er}

  :host {
    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`;function zr(e,t){const n=vr({waitUntilFirstUpdate:!1},t);return(t,i)=>{const{update:r}=t,s=Array.isArray(e)?e:[e];t.update=function(e){s.forEach((t=>{const r=t;if(e.has(r)){const t=e.get(r),s=this[r];t!==s&&(n.waitUntilFirstUpdate&&!this.hasUpdated||this[i](t,s))}})),r.call(this,e)}}}var Lr=class extends Cr{constructor(){super(...arguments),this.type="normal",this.checked=!1,this.value="",this.disabled=!1}connectedCallback(){super.connectedCallback(),this.handleHostClick=this.handleHostClick.bind(this),this.addEventListener("click",this.handleHostClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleHostClick)}handleDefaultSlotChange(){const e=this.getTextLabel();void 0!==this.cachedTextLabel?e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit("slotchange",{bubbles:!0,composed:!1,cancelable:!1})):this.cachedTextLabel=e}handleHostClick(e){this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}handleCheckedChange(){if(this.checked&&"checkbox"!==this.type)return this.checked=!1,void console.error('The checked attribute can only be used on menu items with type="checkbox"',this);"checkbox"===this.type?this.setAttribute("aria-checked",this.checked?"true":"false"):this.removeAttribute("aria-checked")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}handleTypeChange(){"checkbox"===this.type?(this.setAttribute("role","menuitemcheckbox"),this.setAttribute("aria-checked",this.checked?"true":"false")):(this.setAttribute("role","menuitem"),this.removeAttribute("aria-checked"))}getTextLabel(){return function(e){if(!e)return"";const t=e.assignedNodes({flatten:!0});let n="";return[...t].forEach((e=>{e.nodeType===Node.TEXT_NODE&&(n+=e.textContent)})),n}(this.defaultSlot)}render(){return zi`
      <div
        part="base"
        class=${ar({"menu-item":!0,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--has-submenu":!1})}
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span class="menu-item__chevron">
          <sl-icon name="chevron-right" library="system" aria-hidden="true"></sl-icon>
        </span>
      </div>
    `}};Lr.styles=Ir,yr([Sr("slot:not([name])")],Lr.prototype,"defaultSlot",2),yr([Sr(".menu-item")],Lr.prototype,"menuItem",2),yr([wr()],Lr.prototype,"type",2),yr([wr({type:Boolean,reflect:!0})],Lr.prototype,"checked",2),yr([wr()],Lr.prototype,"value",2),yr([wr({type:Boolean,reflect:!0})],Lr.prototype,"disabled",2),yr([zr("checked")],Lr.prototype,"handleCheckedChange",1),yr([zr("disabled")],Lr.prototype,"handleDisabledChange",1),yr([zr("type")],Lr.prototype,"handleTypeChange",1),Lr=yr([xr("sl-menu-item")],Lr);var Tr="";function Or(e){Tr=e}var Pr={name:"default",resolver:e=>function(e=""){if(!Tr){const e=[...document.getElementsByTagName("script")],t=e.find((e=>e.hasAttribute("data-shoelace")));if(t)Or(t.getAttribute("data-shoelace"));else{const t=e.find((e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)));let n="";t&&(n=t.getAttribute("src")),Or(n.split("/").slice(0,-1).join("/"))}}return Tr.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}(`assets/icons/${e}.svg`)},Dr={caret:'\n    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">\n      <polyline points="6 9 12 15 18 9"></polyline>\n    </svg>\n  ',check:'\n    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(3.428571, 3.428571)">\n            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>\n            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"chevron-down":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',"chevron-left":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>\n    </svg>\n  ',"chevron-right":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">\n      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>\n    </svg>\n  ',eye:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">\n      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>\n      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>\n    </svg>\n  ',"eye-slash":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">\n      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>\n      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>\n      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>\n    </svg>\n  ',eyedropper:'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">\n      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>\n    </svg>\n  ',"grip-vertical":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">\n      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>\n    </svg>\n  ',indeterminate:'\n    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">\n        <g stroke="currentColor" stroke-width="2">\n          <g transform="translate(2.285714, 6.857143)">\n            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>\n          </g>\n        </g>\n      </g>\n    </svg>\n  ',"person-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">\n      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>\n    </svg>\n  ',"play-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">\n      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>\n    </svg>\n  ',"pause-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">\n      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>\n    </svg>\n  ',radio:'\n    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">\n      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n        <g fill="currentColor">\n          <circle cx="8" cy="8" r="3.42857143"></circle>\n        </g>\n      </g>\n    </svg>\n  ',"star-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">\n      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>\n    </svg>\n  ',"x-lg":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">\n      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>\n    </svg>\n  ',"x-circle-fill":'\n    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>\n    </svg>\n  '},Ur=[Pr,{name:"system",resolver:e=>e in Dr?`data:image/svg+xml,${encodeURIComponent(Dr[e])}`:""}],Rr=[];function Nr(e){return Ur.find((t=>t.name===e))}var Br,Hr=ii`
  ${er}

  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,jr=Symbol(),Vr=Symbol(),qr=new Map,Wr=class extends Cr{constructor(){super(...arguments),this.svg=null,this.label="",this.library="default"}static async resolveIcon(e){var t;let n;try{if(n=await fetch(e,{mode:"cors"}),!n.ok)return 410===n.status?jr:Vr}catch(e){return Vr}try{const e=document.createElement("div");e.innerHTML=await n.text();const i=e.firstElementChild;if("svg"!==(null==(t=null==i?void 0:i.tagName)?void 0:t.toLowerCase()))return jr;Br||(Br=new DOMParser);const r=Br.parseFromString(i.outerHTML,"text/html").body.querySelector("svg");return r?(r.part.add("svg"),document.adoptNode(r)):jr}catch(e){return jr}}connectedCallback(){var e;super.connectedCallback(),e=this,Rr.push(e)}firstUpdated(){this.setIcon()}disconnectedCallback(){var e;super.disconnectedCallback(),e=this,Rr=Rr.filter((t=>t!==e))}getUrl(){const e=Nr(this.library);return this.name&&e?e.resolver(this.name):this.src}handleLabelChange(){"string"==typeof this.label&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const t=Nr(this.library),n=this.getUrl();if(!n)return void(this.svg=null);let i=qr.get(n);i||(i=Wr.resolveIcon(n),qr.set(n,i));const r=await i;if(r===Vr&&qr.delete(n),n===this.getUrl())switch(r){case Vr:case jr:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),null==(e=null==t?void 0:t.mutator)||e.call(t,this.svg),this.emit("sl-load")}}render(){return this.svg}};Wr.styles=Hr,yr([kr()],Wr.prototype,"svg",2),yr([wr({reflect:!0})],Wr.prototype,"name",2),yr([wr()],Wr.prototype,"src",2),yr([wr()],Wr.prototype,"label",2),yr([wr({reflect:!0})],Wr.prototype,"library",2),yr([zr("label")],Wr.prototype,"handleLabelChange",1),yr([zr(["name","src","library"])],Wr.prototype,"setIcon",1),Wr=yr([xr("sl-icon")],Wr);var Kr=ii`
  ${er}

  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
  }
`,Qr=class extends Cr{render(){return zi` <slot part="base" class="menu-label"></slot> `}};Qr.styles=Kr,Qr=yr([xr("sl-menu-label")],Qr);var Zr,Jr=ii`
  ${er}
  ${ii`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`}

  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition: var(--sl-transition-fast) color, var(--sl-transition-fast) border, var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix::slotted(sl-icon),
  .input__suffix::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  .input--empty .input__clear {
    visibility: hidden;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,{I:Xr}=Qi,Yr={},Gr=or(class extends lr{constructor(e){if(super(e),e.type!==rr&&e.type!==ir&&e.type!==sr)throw Error("The `live` directive is not allowed on child or event bindings");if(!(e=>void 0===e.strings)(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===Li||t===Ti)return t;const n=e.element,i=e.name;if(e.type===rr){if(t===n[i])return Li}else if(e.type===sr){if(!!t===n.hasAttribute(i))return Li}else if(e.type===ir&&n.getAttribute(i)===t+"")return Li;return((e,t=Yr)=>{e._$AH=t})(e),t}}),es=new WeakMap,ts=new WeakMap,ns=new WeakSet,is=new WeakMap,rs=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),ss=(Object.freeze(br(vr({},rs),{valid:!1,valueMissing:!0})),Object.freeze(br(vr({},rs),{valid:!1,customError:!0})),e=>null!=e?e:Ti
/*! Bundled license information:

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/),os=new Set,ls=new MutationObserver(hs),as=new Map,cs=document.documentElement.dir||"ltr",us=document.documentElement.lang||navigator.language;function hs(){cs=document.documentElement.dir||"ltr",us=document.documentElement.lang||navigator.language,[...os.keys()].map((e=>{"function"==typeof e.requestUpdate&&e.requestUpdate()}))}ls.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]});var ds=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){os.add(this.host)}hostDisconnected(){os.delete(this.host)}dir(){return`${this.host.dir||cs}`.toLowerCase()}lang(){return`${this.host.lang||us}`.toLowerCase()}getTranslationData(e){var t,n;const i=new Intl.Locale(e),r=null==i?void 0:i.language.toLowerCase(),s=null!==(n=null===(t=null==i?void 0:i.region)||void 0===t?void 0:t.toLowerCase())&&void 0!==n?n:"";return{locale:i,language:r,region:s,primary:as.get(`${r}-${s}`),secondary:as.get(r)}}exists(e,t){var n;const{primary:i,secondary:r}=this.getTranslationData(null!==(n=t.lang)&&void 0!==n?n:this.lang());return t=Object.assign({includeFallback:!1},t),!!(i&&i[e]||r&&r[e]||t.includeFallback&&Zr&&Zr[e])}term(e,...t){const{primary:n,secondary:i}=this.getTranslationData(this.lang());let r;if(n&&n[e])r=n[e];else if(i&&i[e])r=i[e];else{if(!Zr||!Zr[e])return console.error(`No translation found for: ${String(e)}`),String(e);r=Zr[e]}return"function"==typeof r?r(...t):r}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?"":new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},ps=class extends ds{},fs={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copy:"Copy",currentValue:"Current value",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>0===e?"No options selected":1===e?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};!function(...e){e.map((e=>{const t=e.$code.toLowerCase();as.has(t)?as.set(t,Object.assign(Object.assign({},as.get(t)),e)):as.set(t,e),Zr||(Zr=e)})),hs()}(fs);var ms=class extends Cr{constructor(){super(...arguments),this.formControlController=new class{constructor(e,t){(this.host=e).addController(this),this.options=vr({form:e=>{if(e.hasAttribute("form")&&""!==e.getAttribute("form")){const t=e.getRootNode(),n=e.getAttribute("form");if(n)return t.getElementById(n)}return e.closest("form")},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>{var t;return null!=(t=e.disabled)&&t},reportValidity:e=>"function"!=typeof e.reportValidity||e.reportValidity(),setValue:(e,t)=>e.value=t,assumeInteractionOn:["sl-input"]},t),this.handleFormData=this.handleFormData.bind(this),this.handleFormSubmit=this.handleFormSubmit.bind(this),this.handleFormReset=this.handleFormReset.bind(this),this.reportFormValidity=this.reportFormValidity.bind(this),this.handleInteraction=this.handleInteraction.bind(this)}hostConnected(){const e=this.options.form(this.host);e&&this.attachForm(e),is.set(this.host,[]),this.options.assumeInteractionOn.forEach((e=>{this.host.addEventListener(e,this.handleInteraction)}))}hostDisconnected(){this.detachForm(),is.delete(this.host),this.options.assumeInteractionOn.forEach((e=>{this.host.removeEventListener(e,this.handleInteraction)}))}hostUpdated(){const e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,es.has(this.form)?es.get(this.form).add(this.host):es.set(this.form,new Set([this.host])),this.form.addEventListener("formdata",this.handleFormData),this.form.addEventListener("submit",this.handleFormSubmit),this.form.addEventListener("reset",this.handleFormReset),ts.has(this.form)||(ts.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity())):this.form=void 0}detachForm(){var e;this.form&&(null==(e=es.get(this.form))||e.delete(this.host),this.form.removeEventListener("formdata",this.handleFormData),this.form.removeEventListener("submit",this.handleFormSubmit),this.form.removeEventListener("reset",this.handleFormReset),ts.has(this.form)&&(this.form.reportValidity=ts.get(this.form),ts.delete(this.form))),this.form=void 0}handleFormData(e){const t=this.options.disabled(this.host),n=this.options.name(this.host),i=this.options.value(this.host),r="sl-button"===this.host.tagName.toLowerCase();!t&&!r&&"string"==typeof n&&n.length>0&&void 0!==i&&(Array.isArray(i)?i.forEach((t=>{e.formData.append(n,t.toString())})):e.formData.append(n,i.toString()))}handleFormSubmit(e){var t;const n=this.options.disabled(this.host),i=this.options.reportValidity;this.form&&!this.form.noValidate&&(null==(t=es.get(this.form))||t.forEach((e=>{this.setUserInteracted(e,!0)}))),!this.form||this.form.noValidate||n||i(this.host)||(e.preventDefault(),e.stopImmediatePropagation())}handleFormReset(){this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),is.set(this.host,[])}handleInteraction(e){const t=is.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)}reportFormValidity(){if(this.form&&!this.form.noValidate){const e=this.form.querySelectorAll("*");for(const t of e)if("function"==typeof t.reportValidity&&!t.reportValidity())return!1}return!0}setUserInteracted(e,t){t?ns.add(e):ns.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){const n=document.createElement("button");n.type=e,n.style.position="absolute",n.style.width="0",n.style.height="0",n.style.clipPath="inset(50%)",n.style.overflow="hidden",n.style.whiteSpace="nowrap",t&&(n.name=t.name,n.value=t.value,["formaction","formenctype","formmethod","formnovalidate","formtarget"].forEach((e=>{t.hasAttribute(e)&&n.setAttribute(e,t.getAttribute(e))}))),this.form.append(n),n.click(),n.remove()}}getForm(){var e;return null!=(e=this.form)?e:null}reset(e){this.doAction("reset",e)}submit(e){this.doAction("submit",e)}setValidity(e){const t=this.host,n=Boolean(ns.has(t)),i=Boolean(t.required);t.toggleAttribute("data-required",i),t.toggleAttribute("data-optional",!i),t.toggleAttribute("data-invalid",!e),t.toggleAttribute("data-valid",e),t.toggleAttribute("data-user-invalid",!e&&n),t.toggleAttribute("data-user-valid",e&&n)}updateValidity(){const e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){const t=new CustomEvent("sl-invalid",{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||null==e||e.preventDefault()}}(this,{assumeInteractionOn:["sl-blur","sl-input"]}),this.hasSlotController=new nr(this,"help-text","label"),this.localize=new ps(this),this.hasFocus=!1,this.title="",this.type="text",this.name="",this.value="",this.defaultValue="",this.size="medium",this.filled=!1,this.pill=!1,this.label="",this.helpText="",this.clearable=!1,this.disabled=!1,this.placeholder="",this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form="",this.required=!1,this.spellcheck=!0}get valueAsDate(){const e=document.createElement("input");return e.type="date",e.value=this.value,e.valueAsDate}set valueAsDate(e){const t=document.createElement("input");t.type="date",t.valueAsDate=e,this.value=t.value}get valueAsNumber(){const e=document.createElement("input");return e.type="number",e.value=this.value,e.valueAsNumber}set valueAsNumber(e){const t=document.createElement("input");t.type="number",t.valueAsNumber=e,this.value=t.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleChange(){this.value=this.input.value,this.emit("sl-change")}handleClearClick(e){this.value="",this.emit("sl-clear"),this.emit("sl-input"),this.emit("sl-change"),this.input.focus(),e.stopPropagation()}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit("sl-input")}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){const t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;"Enter"!==e.key||t||setTimeout((()=>{e.defaultPrevented||e.isComposing||this.formControlController.submit()}))}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n="none"){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,i){this.input.setRangeText(e,t,n,i),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){"showPicker"in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){const e=this.hasSlotController.test("label"),t=this.hasSlotController.test("help-text"),n=!!this.label||!!e,i=!!this.helpText||!!t,r=this.clearable&&!this.disabled&&!this.readonly&&("number"==typeof this.value||this.value.length>0);return zi`
      <div
        part="form-control"
        class=${ar({"form-control":!0,"form-control--small":"small"===this.size,"form-control--medium":"medium"===this.size,"form-control--large":"large"===this.size,"form-control--has-label":n,"form-control--has-help-text":i})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?"false":"true"}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${ar({input:!0,"input--small":"small"===this.size,"input--medium":"medium"===this.size,"input--large":"large"===this.size,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <slot name="prefix" part="prefix" class="input__prefix"></slot>
            <input
              part="input"
              id="input"
              class="input__control"
              type=${"password"===this.type&&this.passwordVisible?"text":this.type}
              title=${this.title}
              name=${ss(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${ss(this.placeholder)}
              minlength=${ss(this.minlength)}
              maxlength=${ss(this.maxlength)}
              min=${ss(this.min)}
              max=${ss(this.max)}
              step=${ss(this.step)}
              .value=${Gr(this.value)}
              autocapitalize=${ss(this.autocapitalize)}
              autocomplete=${ss(this.autocomplete)}
              autocorrect=${ss(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${ss(this.pattern)}
              enterkeyhint=${ss(this.enterkeyhint)}
              inputmode=${ss(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${r?zi`
                    <button
                      part="clear-button"
                      class="input__clear"
                      type="button"
                      aria-label=${this.localize.term("clearEntry")}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:""}
            ${this.passwordToggle&&!this.disabled?zi`
                    <button
                      part="password-toggle-button"
                      class="input__password-toggle"
                      type="button"
                      aria-label=${this.localize.term(this.passwordVisible?"hidePassword":"showPassword")}
                      @click=${this.handlePasswordToggle}
                      tabindex="-1"
                    >
                      ${this.passwordVisible?zi`
                            <slot name="show-password-icon">
                              <sl-icon name="eye-slash" library="system"></sl-icon>
                            </slot>
                          `:zi`
                            <slot name="hide-password-icon">
                              <sl-icon name="eye" library="system"></sl-icon>
                            </slot>
                          `}
                    </button>
                  `:""}

            <slot name="suffix" part="suffix" class="input__suffix"></slot>
          </div>
        </div>

        <slot
          name="help-text"
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${i?"false":"true"}
        >
          ${this.helpText}
        </slot>
        </div>
      </div>
    `}};ms.styles=Jr,yr([Sr(".input__control")],ms.prototype,"input",2),yr([kr()],ms.prototype,"hasFocus",2),yr([wr()],ms.prototype,"title",2),yr([wr({reflect:!0})],ms.prototype,"type",2),yr([wr()],ms.prototype,"name",2),yr([wr()],ms.prototype,"value",2),yr([((e="value")=>(t,n)=>{const i=t.constructor,r=i.prototype.attributeChangedCallback;i.prototype.attributeChangedCallback=function(t,s,o){var l;const a=i.getPropertyOptions(e);if(t===("string"==typeof a.attribute?a.attribute:e)){const t=a.converter||ci,i=("function"==typeof t?t:null!=(l=null==t?void 0:t.fromAttribute)?l:ci.fromAttribute)(o,a.type);this[e]!==i&&(this[n]=i)}r.call(this,t,s,o)}})()],ms.prototype,"defaultValue",2),yr([wr({reflect:!0})],ms.prototype,"size",2),yr([wr({type:Boolean,reflect:!0})],ms.prototype,"filled",2),yr([wr({type:Boolean,reflect:!0})],ms.prototype,"pill",2),yr([wr()],ms.prototype,"label",2),yr([wr({attribute:"help-text"})],ms.prototype,"helpText",2),yr([wr({type:Boolean})],ms.prototype,"clearable",2),yr([wr({type:Boolean,reflect:!0})],ms.prototype,"disabled",2),yr([wr()],ms.prototype,"placeholder",2),yr([wr({type:Boolean,reflect:!0})],ms.prototype,"readonly",2),yr([wr({attribute:"password-toggle",type:Boolean})],ms.prototype,"passwordToggle",2),yr([wr({attribute:"password-visible",type:Boolean})],ms.prototype,"passwordVisible",2),yr([wr({attribute:"no-spin-buttons",type:Boolean})],ms.prototype,"noSpinButtons",2),yr([wr({reflect:!0})],ms.prototype,"form",2),yr([wr({type:Boolean,reflect:!0})],ms.prototype,"required",2),yr([wr()],ms.prototype,"pattern",2),yr([wr({type:Number})],ms.prototype,"minlength",2),yr([wr({type:Number})],ms.prototype,"maxlength",2),yr([wr()],ms.prototype,"min",2),yr([wr()],ms.prototype,"max",2),yr([wr()],ms.prototype,"step",2),yr([wr()],ms.prototype,"autocapitalize",2),yr([wr()],ms.prototype,"autocorrect",2),yr([wr()],ms.prototype,"autocomplete",2),yr([wr({type:Boolean})],ms.prototype,"autofocus",2),yr([wr()],ms.prototype,"enterkeyhint",2),yr([wr({type:Boolean,converter:{fromAttribute:e=>!(!e||"false"===e),toAttribute:e=>e?"true":"false"}})],ms.prototype,"spellcheck",2),yr([wr()],ms.prototype,"inputmode",2),yr([zr("disabled",{waitUntilFirstUpdate:!0})],ms.prototype,"handleDisabledChange",1),yr([zr("step",{waitUntilFirstUpdate:!0})],ms.prototype,"handleStepChange",1),yr([zr("value",{waitUntilFirstUpdate:!0})],ms.prototype,"handleValueChange",1),ms=yr([xr("sl-input")],ms),customElements.define("wrg-search",class extends re{static properties={_isMenuVisible:{state:!0,type:Boolean},_search:{state:!0,type:String},_selectedArchive:{state:!0,type:Object},_fuse:{state:!0,type:Object},_archives:{state:!0,type:Object}};static styles=l`
      sl-menu,
      sl-card {
        width: 100%;
        margin-top: 8px;
      }

      .menu-wrapper {
        position: relative;
      }

      sl-input {
        box-shadow: var(--sl-shadow-medium);
      }

      sl-menu {
        position: absolute;
        box-shadow: var(--sl-shadow-large);
      }

      a {
        color: var(--sl-color-blue-600);
        font-weight: var(--sl-font-weight-semibold);
        text-decoration: none;
        padding: var(--sl-input-spacing-small);
      }

      a:hover,
      a:active {
        text-decoration: underline;
      }

      .card-heading {
        margin-top: 0;
        margin-bottom: 4px;
        font-size: var(--sl-font-size-large);
        font-weight: var(--sl-font-weight-semibold);
      }

      .url {
        font-size: var(--sl-font-size-small);
        color: var(--sl-color-neutral-400);
        margin-bottom: var(--sl-spacing-small);
      }

      .description {
        color: var(--sl-color-neutral-600);
        margin-bottom: var(--sl-spacing-small);
      }

      footer {
        text-align: right;
      }
    `;async firstUpdated(){const e=await ve();this._archives=e.archives,this._fuse=new Zn(this._archives,{keys:["name"],shouldSort:!1,threshold:.4})}render(){return U`
        <sl-input
          value=${this._search||""}
          placeholder="Search web archive collections by name..."
          size="large"
          clearable
          type="search"
          role="searchbox"
          aria-description="search results will appear below"
          @sl-input=${e=>{const{value:t}=e.target;(!t||t.length>1)&&(this._search=t,this._isMenuVisible=!0)}}
        ></sl-input>

        ${this.renderMenu()} ${this.renderSelection()}
      `}renderMenu(){if(!this._isMenuVisible||!this._search)return;const e=this._fuse.search(this._search).map((({item:e})=>e));return U`
        <div class="menu-wrapper">
          <sl-menu
            @sl-select=${e=>{const{item:t}=e.detail;this._search=t.innerText,this._selectedArchive=this._archives.find((({url:e})=>e===t.value)),this._isMenuVisible=!1}}
          >
            ${e.length?U`
                  <sl-menu-label
                    >${e.length}
                    match${1===e.length?"":"es"}</sl-menu-label
                  >

                  ${e.map((e=>U`
                        <sl-menu-item value=${e.url}
                          >${e.name}</sl-menu-item
                        >
                      `))}
                `:U`<sl-menu-label
                  >No matching archives found.</sl-menu-label
                >`}
          </sl-menu>
        </div>
      `}renderSelection(){var e;if(this._selectedArchive)return U`
        <sl-card>
          <h3 class="card-heading">${this._selectedArchive.name}</h3>
          <div class="url">${this._selectedArchive.url}</div>
          ${this._selectedArchive.description?U`<div class="description">
                ${this._selectedArchive.description}
              </div>`:""}
          <footer>
            <a href=${e=this._selectedArchive.url,`../archive/?source=${encodeURIComponent(e)}`}>View Archive</a>
          </footer>
        </sl-card>
      `}})})();