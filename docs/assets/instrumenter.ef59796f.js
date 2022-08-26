import{I as G,J as H,K as V,L as F,M as z,N as X,O as J,w as S,P as Q,j as q,G as D,H as Z,Q as tt,R as et}from"./iframe.eb818b4a.js";import"./es.map.constructor.8663664a.js";var nt=G,rt=H;nt("toPrimitive");rt();var it=V,at=F,st=TypeError,ot=function(e){if(it(this),e==="string"||e==="default")e="string";else if(e!=="number")throw st("Incorrect hint");return at(this,e)},ut=z,lt=X,ft=ot,ct=J,j=ct("toPrimitive"),x=Date.prototype;ut(x,j)||lt(x,j,ft);var m;(function(e){e.DONE="done",e.ERROR="error",e.ACTIVE="active",e.WAITING="waiting"})(m||(m={}));var R;function w(e){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},w(e)}function dt(e,t){if(e==null)return{};var r=vt(e,t),n,u;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(u=0;u<s.length;u++)n=s[u],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function vt(e,t){if(e==null)return{};var r={},n=Object.keys(e),u,s;for(s=0;s<n.length;s++)u=n[s],!(t.indexOf(u)>=0)&&(r[u]=e[u]);return r}function yt(e){var t=ht(e,"string");return w(t)==="symbol"?t:String(t)}function ht(e,t){if(w(e)!=="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(w(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function E(e){return pt(e)||_t(e)||Y(e)||gt()}function gt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _t(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function pt(e){if(Array.isArray(e))return P(e)}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function It(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function k(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function mt(e,t,r){return t&&k(e.prototype,t),r&&k(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function K(e,t){return Ot(e)||bt(e,t)||Y(e,t)||St()}function St(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Y(e,t){if(!!e){if(typeof e=="string")return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}}function P(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function bt(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],u=!0,s=!1,d,v;try{for(r=r.call(e);!(u=(d=r.next()).done)&&(n.push(d.value),!(t&&n.length===t));u=!0);}catch(c){s=!0,v=c}finally{try{!u&&r.return!=null&&r.return()}finally{if(s)throw v}}return n}}function Ot(e){if(Array.isArray(e))return e}var O={CALL:"instrumenter/call",SYNC:"instrumenter/sync",START:"instrumenter/start",BACK:"instrumenter/back",GOTO:"instrumenter/goto",NEXT:"instrumenter/next",END:"instrumenter/end"},$=((R=S.FEATURES)===null||R===void 0?void 0:R.interactionsDebugger)!==!0,U={debugger:!$,start:!1,back:!1,goto:!1,next:!1,end:!1},B=new Error("This function ran after the play function completed. Did you forget to `await` it?"),L=function(t){return Object.prototype.toString.call(t)==="[object Object]"},Tt=function(t){return Object.prototype.toString.call(t)==="[object Module]"},wt=function(t){if(!L(t)&&!Tt(t))return!1;if(t.constructor===void 0)return!0;var r=t.constructor.prototype;return!(!L(r)||Object.prototype.hasOwnProperty.call(r,"isPrototypeOf")===!1)},Et=function(t){try{return new t.constructor}catch{return{}}},A=function(){return{renderPhase:void 0,isDebugging:!1,isPlaying:!1,isLocked:!1,cursor:0,calls:[],shadowCalls:[],callRefsByResult:new Map,chainedCallIds:new Set,parentId:void 0,playUntil:void 0,resolvers:{},syncTimeout:void 0,forwardedException:void 0}},M=function(t){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,n=(r?t.shadowCalls:t.calls).filter(function(s){return s.retain});if(!!n.length){var u=new Map(Array.from(t.callRefsByResult.entries()).filter(function(s){var d=K(s,2),v=d[1];return v.retain}));return{cursor:n.length,calls:n,callRefsByResult:u}}},Rt=function(){function e(){var t=this;It(this,e),this.channel=void 0,this.initialized=!1,this.state=void 0,this.channel=q.getChannel(),this.state=S.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__||{};var r=function(o){var i=o.storyId,l=o.isPlaying,h=l===void 0?!0:l,y=o.isDebugging,a=y===void 0?!1:y,f=t.getState(i);t.setState(i,Object.assign({},A(),M(f,a),{shadowCalls:a?f.shadowCalls:[],chainedCallIds:a?f.chainedCallIds:new Set,playUntil:a?f.playUntil:void 0,isPlaying:h,isDebugging:a})),a||t.sync(i)};this.channel.on(D,r),this.channel.on(Z,function(c){var o=c.storyId,i=c.newPhase,l=t.getState(o),h=l.isDebugging,y=l.forwardedException;if(t.setState(o,{renderPhase:i}),i==="playing"&&r({storyId:o,isDebugging:h}),i==="played"&&(t.setState(o,{isLocked:!1,isPlaying:!1,isDebugging:!1,forwardedException:void 0}),y))throw y}),this.channel.on(tt,function(){t.initialized?t.cleanup():t.initialized=!0});var n=function(o){var i=o.storyId,l=o.playUntil;t.getState(i).isDebugging||t.setState(i,function(y){var a=y.calls;return{calls:[],shadowCalls:a.map(function(f){return Object.assign({},f,{status:m.WAITING})}),isDebugging:!0}});var h=t.getLog(i);t.setState(i,function(y){var a,f=y.shadowCalls,_=f.findIndex(function(g){return g.id===h[0].callId});return{playUntil:l||((a=f.slice(0,_).filter(function(g){return g.interceptable}).slice(-1)[0])===null||a===void 0?void 0:a.id)}}),t.channel.emit(D,{storyId:i,isDebugging:!0})},u=function(o){var i,l=o.storyId,h=t.getState(l),y=h.isDebugging,a=t.getLog(l),f=y?a.findIndex(function(_){var g=_.status;return g===m.WAITING}):a.length;n({storyId:l,playUntil:(i=a[f-2])===null||i===void 0?void 0:i.callId})},s=function(o){var i=o.storyId,l=o.callId,h=t.getState(i),y=h.calls,a=h.shadowCalls,f=h.resolvers,_=y.find(function(I){var T=I.id;return T===l}),g=a.find(function(I){var T=I.id;return T===l});if(!_&&g&&Object.values(f).length>0){var p,b=(p=t.getLog(i).find(function(I){return I.status===m.WAITING}))===null||p===void 0?void 0:p.callId;g.id!==b&&t.setState(i,{playUntil:g.id}),Object.values(f).forEach(function(I){return I()})}else n({storyId:i,playUntil:l})},d=function(o){var i=o.storyId,l=t.getState(i),h=l.resolvers;if(Object.values(h).length>0)Object.values(h).forEach(function(f){return f()});else{var y,a=(y=t.getLog(i).find(function(f){return f.status===m.WAITING}))===null||y===void 0?void 0:y.callId;a?n({storyId:i,playUntil:a}):v({storyId:i})}},v=function(o){var i=o.storyId;t.setState(i,{playUntil:void 0,isDebugging:!1}),Object.values(t.getState(i).resolvers).forEach(function(l){return l()})};this.channel.on(O.START,n),this.channel.on(O.BACK,u),this.channel.on(O.GOTO,s),this.channel.on(O.NEXT,d),this.channel.on(O.END,v)}return mt(e,[{key:"getState",value:function(r){return this.state[r]||A()}},{key:"setState",value:function(r,n){var u=this.getState(r),s=typeof n=="function"?n(u):n;this.state=Object.assign({},this.state,N({},r,Object.assign({},u,s))),S.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}},{key:"cleanup",value:function(){this.state=Object.entries(this.state).reduce(function(r,n){var u=K(n,2),s=u[0],d=u[1],v=M(d);return v&&(r[s]=Object.assign(A(),v)),r},{}),this.channel.emit(O.SYNC,{controlStates:U,logItems:[]}),S.window.parent.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER_STATE__=this.state}},{key:"getLog",value:function(r){var n=this.getState(r),u=n.calls,s=n.shadowCalls,d=E(s);u.forEach(function(c,o){d[o]=c});var v=new Set;return d.reduceRight(function(c,o){return o.args.forEach(function(i){i!=null&&i.__callId__&&v.add(i.__callId__)}),o.path.forEach(function(i){i.__callId__&&v.add(i.__callId__)}),o.interceptable&&!v.has(o.id)&&(c.unshift({callId:o.id,status:o.status}),v.add(o.id)),c},[])}},{key:"instrument",value:function(r,n){var u=this;if(!wt(r))return r;var s=n.mutate,d=s===void 0?!1:s,v=n.path,c=v===void 0?[]:v;return Object.keys(r).reduce(function(o,i){var l=r[i];return typeof l!="function"?(o[i]=u.instrument(l,Object.assign({},n,{path:c.concat(i)})),o):typeof l.__originalFn__=="function"?(o[i]=l,o):(o[i]=function(){for(var h=arguments.length,y=new Array(h),a=0;a<h;a++)y[a]=arguments[a];return u.track(i,l,y,n)},o[i].__originalFn__=l,Object.defineProperty(o[i],"name",{value:i,writable:!1}),Object.keys(l).length>0&&Object.assign(o[i],u.instrument(Object.assign({},l),Object.assign({},n,{path:c.concat(i)}))),o)},d?r:Et(r))}},{key:"track",value:function(r,n,u,s){var d,v,c,o,i=(u==null||(d=u[0])===null||d===void 0?void 0:d.__storyId__)||((v=S.window.__STORYBOOK_PREVIEW__)===null||v===void 0||(c=v.urlStore)===null||c===void 0||(o=c.selection)===null||o===void 0?void 0:o.storyId),l=this.getState(i),h=l.cursor,y=l.parentId;this.setState(i,{cursor:h+1});var a="".concat(y||i," [").concat(h,"] ").concat(r),f=s.path,_=f===void 0?[]:f,g=s.intercept,p=g===void 0?!1:g,b=s.retain,I=b===void 0?!1:b,T=typeof p=="function"?p(r,_):p,C={id:a,parentId:y,storyId:i,cursor:h,path:_,method:r,args:u,interceptable:T,retain:I},W=(T?this.intercept:this.invoke).call(this,n,C,s);return this.instrument(W,Object.assign({},s,{mutate:!0,path:[{__callId__:C.id}]}))}},{key:"intercept",value:function(r,n,u){var s=this,d=this.getState(n.storyId),v=d.chainedCallIds,c=d.isDebugging,o=d.playUntil,i=v.has(n.id);return!c||i||o?(o===n.id&&this.setState(n.storyId,{playUntil:void 0}),this.invoke(r,n,u)):new Promise(function(l){s.setState(n.storyId,function(h){var y=h.resolvers;return{isLocked:!1,resolvers:Object.assign({},y,N({},n.id,l))}})}).then(function(){return s.setState(n.storyId,function(l){var h=l.resolvers,y=n.id;h[y];var a=dt(h,[y].map(yt));return{isLocked:!0,resolvers:a}}),s.invoke(r,n,u)})}},{key:"invoke",value:function(r,n,u){var s=this,d=this.getState(n.storyId),v=d.callRefsByResult,c=d.forwardedException,o=d.renderPhase,i=Object.assign({},n,{args:n.args.map(function(a){if(v.has(a))return v.get(a);if(a instanceof S.window.HTMLElement){var f=a.prefix,_=a.localName,g=a.id,p=a.classList,b=a.innerText,I=Array.from(p);return{__element__:{prefix:f,localName:_,id:g,classNames:I,innerText:b}}}return a})});n.path.forEach(function(a){a!=null&&a.__callId__&&s.setState(n.storyId,function(f){var _=f.chainedCallIds;return{chainedCallIds:new Set(Array.from(_).concat(a.__callId__))}})});var l=function(f){if(f instanceof Error){var _=f.name,g=f.message,p=f.stack,b={name:_,message:g,stack:p};if(s.update(Object.assign({},i,{status:m.ERROR,exception:b})),s.setState(n.storyId,function(I){return{callRefsByResult:new Map([].concat(E(Array.from(I.callRefsByResult.entries())),[[f,{__callId__:n.id,retain:n.retain}]]))}}),n.interceptable&&f!==B)throw et;return s.setState(n.storyId,{forwardedException:f}),f}throw f};try{if(c)throw this.setState(n.storyId,{forwardedException:void 0}),c;if(o==="played"&&!n.retain)throw B;var h=u.getArgs?u.getArgs(n,this.getState(n.storyId)):n.args,y=r.apply(void 0,E(h.map(function(a){return typeof a!="function"||Object.keys(a).length?a:function(){var f=s.getState(n.storyId),_=f.cursor,g=f.parentId;s.setState(n.storyId,{cursor:0,parentId:n.id});var p=function(){return s.setState(n.storyId,{cursor:_,parentId:g})},b=a.apply(void 0,arguments);return b instanceof Promise?b.then(p,p):p(),b}})));return y&&["object","function","symbol"].includes(w(y))&&this.setState(n.storyId,function(a){return{callRefsByResult:new Map([].concat(E(Array.from(a.callRefsByResult.entries())),[[y,{__callId__:n.id,retain:n.retain}]]))}}),this.update(Object.assign({},i,{status:y instanceof Promise?m.ACTIVE:m.DONE})),y instanceof Promise?y.then(function(a){return s.update(Object.assign({},i,{status:m.DONE})),a},l):y}catch(a){return l(a)}}},{key:"update",value:function(r){var n=this;clearTimeout(this.getState(r.storyId).syncTimeout),this.channel.emit(O.CALL,r),this.setState(r.storyId,function(u){var s=u.calls,d=s.concat(r).reduce(function(v,c){return Object.assign(v,N({},c.id,c))},{});return{calls:Object.values(d).sort(function(v,c){return v.id.localeCompare(c.id,void 0,{numeric:!0})}),syncTimeout:setTimeout(function(){return n.sync(r.storyId)},0)}})}},{key:"sync",value:function(r){var n=this.getState(r),u=n.isLocked,s=n.isPlaying,d=this.getLog(r),v=d.some(function(i){return i.status===m.ACTIVE});if($||u||v||d.length===0){this.channel.emit(O.SYNC,{controlStates:U,logItems:d});return}var c=d.some(function(i){return[m.DONE,m.ERROR].includes(i.status)}),o={debugger:!0,start:c,back:c,goto:!0,next:s,end:s};this.channel.emit(O.SYNC,{controlStates:o,logItems:d})}}]),e}();function Pt(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};try{var r,n,u,s,d=!1,v=!1;if((r=S.window.location)!==null&&r!==void 0&&(n=r.search)!==null&&n!==void 0&&n.includes("instrument=true")?d=!0:(u=S.window.location)!==null&&u!==void 0&&(s=u.search)!==null&&s!==void 0&&s.includes("instrument=false")&&(v=!0),S.window.parent===S.window&&!d||v)return e;S.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__||(S.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__=new Rt);var c=S.window.__STORYBOOK_ADDON_INTERACTIONS_INSTRUMENTER__;return c.instrument(e,t)}catch(o){return Q.warn(o),e}}export{Pt as i};
//# sourceMappingURL=instrumenter.ef59796f.js.map
