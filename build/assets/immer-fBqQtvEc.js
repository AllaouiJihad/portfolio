var V=Symbol.for("immer-nothing"),k=Symbol.for("immer-draftable"),g=Symbol.for("immer-state");function m(e,...t){throw new Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var C=Object.getPrototypeOf;function S(e){return!!e&&!!e[g]}function F(e){var t;return e?oe(e)||Array.isArray(e)||!!e[k]||!!((t=e.constructor)!=null&&t[k])||x(e)||W(e):!1}var ae=Object.prototype.constructor.toString();function oe(e){if(!e||typeof e!="object")return!1;const t=C(e);if(t===null)return!0;const r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object?!0:typeof r=="function"&&Function.toString.call(r)===ae}function we(e){return S(e)||m(15,e),e[g].base_}function N(e,t){E(e)===0?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function E(e){const t=e[g];return t?t.type_:Array.isArray(e)?1:x(e)?2:W(e)?3:0}function b(e,t){return E(e)===2?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function H(e,t){return E(e)===2?e.get(t):e[t]}function ce(e,t,r){const n=E(e);n===2?e.set(t,r):n===3?e.add(r):e[t]=r}function le(e,t){return e===t?e!==0||1/e===1/t:e!==e&&t!==t}function x(e){return e instanceof Map}function W(e){return e instanceof Set}function D(e){return e.copy_||e.base_}function q(e,t){if(x(e))return new Map(e);if(W(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);const r=oe(e);if(t===!0||t==="class_only"&&!r){const n=Object.getOwnPropertyDescriptors(e);delete n[g];let i=Reflect.ownKeys(n);for(let f=0;f<i.length;f++){const l=i[f],_=n[l];_.writable===!1&&(_.writable=!0,_.configurable=!0),(_.get||_.set)&&(n[l]={configurable:!0,writable:!0,enumerable:_.enumerable,value:e[l]})}return Object.create(C(e),n)}else{const n=C(e);if(n!==null&&r)return{...e};const i=Object.create(n);return Object.assign(i,e)}}function j(e,t=!1){return B(e)||S(e)||!F(e)||(E(e)>1&&(e.set=e.add=e.clear=e.delete=_e),Object.freeze(e),t&&Object.entries(e).forEach(([r,n])=>j(n,!0))),e}function _e(){m(2)}function B(e){return Object.isFrozen(e)}var J={};function v(e){const t=J[e];return t||m(0,e),t}function ye(e,t){J[e]||(J[e]=t)}var I;function fe(){return I}function de(e,t){return{drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function te(e,t){t&&(v("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Q(e){Y(e),e.drafts_.forEach(pe),e.drafts_=null}function Y(e){e===I&&(I=e.parent_)}function re(e){return I=de(I,e)}function pe(e){const t=e[g];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function ne(e,t){t.unfinalizedDrafts_=t.drafts_.length;const r=t.drafts_[0];return e!==void 0&&e!==r?(r[g].modified_&&(Q(t),m(4)),F(e)&&(e=K(t,e),t.parent_||U(t,e)),t.patches_&&v("Patches").generateReplacementPatches_(r[g].base_,e,t.patches_,t.inversePatches_)):e=K(t,r,[]),Q(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==V?e:void 0}function K(e,t,r){if(B(t))return t;const n=t[g];if(!n)return N(t,(i,f)=>ie(e,n,t,i,f,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return U(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;const i=n.copy_;let f=i,l=!1;n.type_===3&&(f=new Set(i),i.clear(),l=!0),N(f,(_,z)=>ie(e,n,i,_,z,r,l)),U(e,i,!1),r&&e.patches_&&v("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function ie(e,t,r,n,i,f,l){if(S(i)){const _=f&&t&&t.type_!==3&&!b(t.assigned_,n)?f.concat(n):void 0,z=K(e,i,_);if(ce(r,n,z),S(z))e.canAutoFreeze_=!1;else return}else l&&r.add(i);if(F(i)&&!B(i)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;K(e,i),(!t||!t.scope_.parent_)&&typeof n!="symbol"&&Object.prototype.propertyIsEnumerable.call(r,n)&&U(e,i)}}function U(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&j(t,r)}function he(e,t){const r=Array.isArray(e),n={type_:r?1:0,scope_:t?t.scope_:fe(),modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1};let i=n,f=ee;r&&(i=[n],f=T);const{revoke:l,proxy:_}=Proxy.revocable(i,f);return n.draft_=_,n.revoke_=l,_}var ee={get(e,t){if(t===g)return e;const r=D(e);if(!b(r,t))return me(e,r,t);const n=r[t];return e.finalized_||!F(n)?n:n===X(e.base_,t)?($(e),e.copy_[t]=L(n,e)):n},has(e,t){return t in D(e)},ownKeys(e){return Reflect.ownKeys(D(e))},set(e,t,r){const n=se(D(e),t);if(n!=null&&n.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){const i=X(D(e),t),f=i==null?void 0:i[g];if(f&&f.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if(le(r,i)&&(r!==void 0||b(e.base_,t)))return!0;$(e),Z(e)}return e.copy_[t]===r&&(r!==void 0||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t])||(e.copy_[t]=r,e.assigned_[t]=!0),!0},deleteProperty(e,t){return X(e.base_,t)!==void 0||t in e.base_?(e.assigned_[t]=!1,$(e),Z(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){const r=D(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n&&{writable:!0,configurable:e.type_!==1||t!=="length",enumerable:n.enumerable,value:r[t]}},defineProperty(){m(11)},getPrototypeOf(e){return C(e.base_)},setPrototypeOf(){m(12)}},T={};N(ee,(e,t)=>{T[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}});T.deleteProperty=function(e,t){return T.set.call(this,e,t,void 0)};T.set=function(e,t,r){return ee.set.call(this,e[0],t,r,e[0])};function X(e,t){const r=e[g];return(r?D(r):e)[t]}function me(e,t,r){var i;const n=se(t,r);return n?"value"in n?n.value:(i=n.get)==null?void 0:i.call(e.draft_):void 0}function se(e,t){if(!(t in e))return;let r=C(e);for(;r;){const n=Object.getOwnPropertyDescriptor(r,t);if(n)return n;r=C(r)}}function Z(e){e.modified_||(e.modified_=!0,e.parent_&&Z(e.parent_))}function $(e){e.copy_||(e.copy_=q(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var Pe=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(t,r,n)=>{if(typeof t=="function"&&typeof r!="function"){const f=r;r=t;const l=this;return function(z=f,...G){return l.produce(z,A=>r.call(this,A,...G))}}typeof r!="function"&&m(6),n!==void 0&&typeof n!="function"&&m(7);let i;if(F(t)){const f=re(this),l=L(t,void 0);let _=!0;try{i=r(l),_=!1}finally{_?Q(f):Y(f)}return te(f,n),ne(i,f)}else if(!t||typeof t!="object"){if(i=r(t),i===void 0&&(i=t),i===V&&(i=void 0),this.autoFreeze_&&j(i,!0),n){const f=[],l=[];v("Patches").generateReplacementPatches_(t,i,f,l),n(f,l)}return i}else m(1,t)},this.produceWithPatches=(t,r)=>{if(typeof t=="function")return(l,..._)=>this.produceWithPatches(l,z=>t(z,..._));let n,i;return[this.produce(t,r,(l,_)=>{n=l,i=_}),n,i]},typeof(e==null?void 0:e.autoFreeze)=="boolean"&&this.setAutoFreeze(e.autoFreeze),typeof(e==null?void 0:e.useStrictShallowCopy)=="boolean"&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){F(e)||m(8),S(e)&&(e=ge(e));const t=re(this),r=L(e,void 0);return r[g].isManual_=!0,Y(t),r}finishDraft(e,t){const r=e&&e[g];(!r||!r.isManual_)&&m(9);const{scope_:n}=r;return te(n,t),ne(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){const i=t[r];if(i.path.length===0&&i.op==="replace"){e=i.value;break}}r>-1&&(t=t.slice(r+1));const n=v("Patches").applyPatches_;return S(e)?n(e,t):this.produce(e,i=>n(i,t))}};function L(e,t){const r=x(e)?v("MapSet").proxyMap_(e,t):W(e)?v("MapSet").proxySet_(e,t):he(e,t);return(t?t.scope_:fe()).drafts_.push(r),r}function ge(e){return S(e)||m(10,e),ue(e)}function ue(e){if(!F(e)||B(e))return e;const t=e[g];let r;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,r=q(e,t.scope_.immer_.useStrictShallowCopy_)}else r=q(e,!0);return N(r,(n,i)=>{ce(r,n,ue(i))}),t&&(t.finalized_=!1),r}function ze(){const t="replace",r="add",n="remove";function i(o,p,u,y){switch(o.type_){case 0:case 2:return l(o,p,u,y);case 1:return f(o,p,u,y);case 3:return _(o,p,u,y)}}function f(o,p,u,y){let{base_:h,assigned_:a}=o,d=o.copy_;d.length<h.length&&([h,d]=[d,h],[u,y]=[y,u]);for(let c=0;c<h.length;c++)if(a[c]&&d[c]!==h[c]){const s=p.concat([c]);u.push({op:t,path:s,value:M(d[c])}),y.push({op:t,path:s,value:M(h[c])})}for(let c=h.length;c<d.length;c++){const s=p.concat([c]);u.push({op:r,path:s,value:M(d[c])})}for(let c=d.length-1;h.length<=c;--c){const s=p.concat([c]);y.push({op:n,path:s})}}function l(o,p,u,y){const{base_:h,copy_:a}=o;N(o.assigned_,(d,c)=>{const s=H(h,d),R=H(a,d),O=c?b(h,d)?t:r:n;if(s===R&&O===t)return;const P=p.concat(d);u.push(O===n?{op:O,path:P}:{op:O,path:P,value:R}),y.push(O===r?{op:n,path:P}:O===n?{op:r,path:P,value:M(s)}:{op:t,path:P,value:M(s)})})}function _(o,p,u,y){let{base_:h,copy_:a}=o,d=0;h.forEach(c=>{if(!a.has(c)){const s=p.concat([d]);u.push({op:n,path:s,value:c}),y.unshift({op:r,path:s,value:c})}d++}),d=0,a.forEach(c=>{if(!h.has(c)){const s=p.concat([d]);u.push({op:r,path:s,value:c}),y.unshift({op:n,path:s,value:c})}d++})}function z(o,p,u,y){u.push({op:t,path:[],value:p===V?void 0:p}),y.push({op:t,path:[],value:o})}function G(o,p){return p.forEach(u=>{const{path:y,op:h}=u;let a=o;for(let R=0;R<y.length-1;R++){const O=E(a);let P=y[R];typeof P!="string"&&typeof P!="number"&&(P=""+P),(O===0||O===1)&&(P==="__proto__"||P==="constructor")&&m(19),typeof a=="function"&&P==="prototype"&&m(19),a=H(a,P),typeof a!="object"&&m(18,y.join("/"))}const d=E(a),c=A(u.value),s=y[y.length-1];switch(h){case t:switch(d){case 2:return a.set(s,c);case 3:m(16);default:return a[s]=c}case r:switch(d){case 1:return s==="-"?a.push(c):a.splice(s,0,c);case 2:return a.set(s,c);case 3:return a.add(c);default:return a[s]=c}case n:switch(d){case 1:return a.splice(s,1);case 2:return a.delete(s);case 3:return a.delete(u.value);default:return delete a[s]}default:m(17,h)}}),o}function A(o){if(!F(o))return o;if(Array.isArray(o))return o.map(A);if(x(o))return new Map(Array.from(o.entries()).map(([u,y])=>[u,A(y)]));if(W(o))return new Set(Array.from(o).map(A));const p=Object.create(C(o));for(const u in o)p[u]=A(o[u]);return b(o,k)&&(p[k]=o[k]),p}function M(o){return S(o)?A(o):o}ye("Patches",{applyPatches_:G,generatePatches_:i,generateReplacementPatches_:z})}var w=new Pe,Oe=w.produce,Ae=w.produceWithPatches.bind(w);w.setAutoFreeze.bind(w);w.setUseStrictShallowCopy.bind(w);var Se=w.applyPatches.bind(w);w.createDraft.bind(w);w.finishDraft.bind(w);export{S as a,Se as b,Ae as c,ze as e,F as i,we as o,Oe as p};
