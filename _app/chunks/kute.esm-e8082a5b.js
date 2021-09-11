/*!
* KUTE.js Standard v2.1.2 (http://thednp.github.io/kute.js)
* Copyright 2015-2021 © thednp
* Licensed under MIT (https://github.com/thednp/kute.js/blob/master/LICENSE)
*/
class t{constructor(t,e,n,r,s){this.cx=3*t,this.bx=3*(n-t)-this.cx,this.ax=1-this.cx-this.bx,this.cy=3*e,this.by=3*(r-e)-this.cy,this.ay=1-this.cy-this.by;const a=t=>this.sampleCurveY(this.solveCurveX(t));return Object.defineProperty(a,"name",{writable:!0}),a.name=s||`cubic-bezier(${[t,e,n,r]})`,a}sampleCurveX(t){return((this.ax*t+this.bx)*t+this.cx)*t}sampleCurveY(t){return((this.ay*t+this.by)*t+this.cy)*t}sampleCurveDerivativeX(t){return(3*this.ax*t+2*this.bx)*t+this.cx}solveCurveX(t){let e,n,r,s,a,i;const o=1e-5;for(r=t,i=0;i<32;i+=1){if(s=this.sampleCurveX(r)-t,Math.abs(s)<o)return r;if(a=this.sampleCurveDerivativeX(r),Math.abs(a)<o)break;r-=s/a}if(e=0,n=1,r=t,r<e)return e;if(r>n)return n;for(;e<n;){if(s=this.sampleCurveX(r),Math.abs(s-t)<o)return r;t>s?e=r:n=r,r=.5*(n-e)+e}return r}}var e={},n=[];let r;r="undefined"!=typeof global?global:void 0!==window.self?window.self:"undefined"!=typeof window?window:{};var s=r,a={},i={};const o={},l=window.self||window||{};o.now=l.performance.now.bind(l.performance);let c=0;const u=t=>{let e=0;for(;e<n.length;)n[e].update(t)?e+=1:n.splice(e,1);c=requestAnimationFrame(u)};function h(){setTimeout((()=>{!n.length&&c&&(cancelAnimationFrame(c),c=null,Object.keys(i).forEach((t=>{"function"==typeof i[t]?e[t]&&delete e[t]:Object.keys(i[t]).forEach((t=>{e[t]&&delete e[t]}))})),Object.keys(a).forEach((t=>{e[t]&&delete e[t]})))}),64)}const p={Tick:c,Ticker:u,Tweens:n,Time:o};Object.keys(p).forEach((t=>{e[t]||(e[t]="Time"===t?o.now:p[t])})),s._KUTE=e;var f={},d={};const g={duration:700,delay:0,easing:"linear"};var y={},m={},b={},v={},x={},E={supportedProperties:f,defaultValues:d,defaultOptions:g,prepareProperty:y,prepareStart:m,crossCheck:b,onStart:i,onComplete:v,linkProperty:x},w={},k=t=>n.push(t),C=t=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)};function O(){Object.keys(x).forEach((t=>{const n=x[t],r=f[t];Object.keys(n).forEach((t=>{"function"==typeof n[t]&&Object.keys(this.valuesEnd).some((t=>r&&r.includes(t)||"attr"===t&&Object.keys(this.valuesEnd[t]).some((t=>r&&r.includes(t)))))?e[t]||(e[t]=n[t]):Object.keys(this.valuesEnd).forEach((r=>{const s=this.valuesEnd[r];s instanceof Object&&Object.keys(s).forEach((r=>{"function"==typeof n[r]?e[r]||(e[r]=n[r]):Object.keys(n[t]).forEach((t=>{n[r]&&"function"==typeof n[r][t]&&(e[t]||(e[t]=n[r][t]))}))}))}))}))}))}var _={add:k,remove:C,getAll:()=>n,removeAll:()=>{n.length=0},stop:h,linkInterpolation:O};function M(t){if(!t.style)return!1;const e=t.style.cssText.replace(/\s/g,"").split(";"),n={},r=["translate3d","translate","scale3d","skew"];return e.forEach((t=>{if(/transform/i.test(t)){t.split(":")[1].split(")").forEach((t=>{const e=t.split("("),s=e[0],a=e[1];/matrix/.test(s)||(n[s]=r.includes(s)?a.split(","):a)}))}})),n}function T(t,e){const n=t.style,r=getComputedStyle(t)||t.currentStyle,s=n[e]&&!/auto|initial|none|unset/.test(n[e])?n[e]:r[e];let a=d[e];return"transform"!==e&&(e in r||e in n)&&(a=s),a}function I(t,e){const n="start"===e?this.valuesStart:this.valuesEnd;Object.keys(y).forEach((e=>{const r=y[e],s=f[e];Object.keys(r).forEach((e=>{const a={};Object.keys(t).forEach((i=>{d[i]&&r[i]?n[i]=r[i].call(this,i,t[i]):!d[e]&&"transform"===e&&s.includes(i)?a[i]=t[i]:d[i]||"transform"!==i?!d[e]&&s&&s.includes(i)&&(n[i]=r[e].call(this,i,t[i])):n[i]=t[i]})),Object.keys(a).length&&(n[e]=r[e].call(this,e,a))}))}))}function S(){const t={},e=M(this.element);Object.keys(this.valuesStart).forEach((e=>{Object.keys(m).forEach((n=>{const r=m[n];Object.keys(r).forEach((s=>{(s===e&&r[e]||f[n]&&f[n].includes(e))&&(t[e]=r[s].call(this,e,this.valuesStart[e]))}))}))})),Object.keys(e).forEach((n=>{n in this.valuesStart||(t[n]=e[n]||d[n])})),this.valuesStart={},I.call(this,t,"start")}var A={getInlineStyle:M,getStyleForProperty:T,getStartValues:S,prepareObject:I},j={};const L={linear:new t(0,0,1,1,"linear"),easingSinusoidalIn:new t(.47,0,.745,.715,"easingSinusoidalIn"),easingSinusoidalOut:new t(.39,.575,.565,1,"easingSinusoidalOut"),easingSinusoidalInOut:new t(.445,.05,.55,.95,"easingSinusoidalInOut"),easingQuadraticIn:new t(.55,.085,.68,.53,"easingQuadraticIn"),easingQuadraticOut:new t(.25,.46,.45,.94,"easingQuadraticOut"),easingQuadraticInOut:new t(.455,.03,.515,.955,"easingQuadraticInOut"),easingCubicIn:new t(.55,.055,.675,.19,"easingCubicIn"),easingCubicOut:new t(.215,.61,.355,1,"easingCubicOut"),easingCubicInOut:new t(.645,.045,.355,1,"easingCubicInOut"),easingQuarticIn:new t(.895,.03,.685,.22,"easingQuarticIn"),easingQuarticOut:new t(.165,.84,.44,1,"easingQuarticOut"),easingQuarticInOut:new t(.77,0,.175,1,"easingQuarticInOut"),easingQuinticIn:new t(.755,.05,.855,.06,"easingQuinticIn"),easingQuinticOut:new t(.23,1,.32,1,"easingQuinticOut"),easingQuinticInOut:new t(.86,0,.07,1,"easingQuinticInOut"),easingExponentialIn:new t(.95,.05,.795,.035,"easingExponentialIn"),easingExponentialOut:new t(.19,1,.22,1,"easingExponentialOut"),easingExponentialInOut:new t(1,0,0,1,"easingExponentialInOut"),easingCircularIn:new t(.6,.04,.98,.335,"easingCircularIn"),easingCircularOut:new t(.075,.82,.165,1,"easingCircularOut"),easingCircularInOut:new t(.785,.135,.15,.86,"easingCircularInOut"),easingBackIn:new t(.6,-.28,.735,.045,"easingBackIn"),easingBackOut:new t(.175,.885,.32,1.275,"easingBackOut"),easingBackInOut:new t(.68,-.55,.265,1.55,"easingBackInOut")};function P(t,e){try{let n,r;return e?(r=t instanceof Array&&t.every((t=>t instanceof Element)),n=t instanceof HTMLCollection||t instanceof NodeList||r?t:document.querySelectorAll(t)):n=t instanceof Element||t===window?t:document.querySelector(t),n}catch(n){throw TypeError(`KUTE.js - Element(s) not found: ${t}.`)}}function N(){Object.keys(i).forEach((t=>{"function"==typeof i[t]?i[t].call(this,t):Object.keys(i[t]).forEach((e=>{i[t][e].call(this,e)}))})),O.call(this)}j.processEasing=function(e){if("function"==typeof e)return e;if("function"==typeof L[e])return L[e];if(/bezier/.test(e)){const n=e.replace(/bezier|\s|\(|\)/g,"").split(",");return new t(1*n[0],1*n[1],1*n[2],1*n[3])}return L.linear};class ${constructor(t,n,r,s){this.element=t,this.playing=!1,this._startTime=null,this._startFired=!1,this.valuesEnd=r,this.valuesStart=n;const a=s||{};this._resetStart=a.resetStart||0,this._easing="function"==typeof a.easing?a.easing:j.processEasing(a.easing),this._duration=a.duration||g.duration,this._delay=a.delay||g.delay,Object.keys(a).forEach((t=>{const e=`_${t}`;e in this||(this[e]=a[t])}));const o=this._easing.name;return i[o]||(i[o]=function(t){e[t]||t!==this._easing.name||(e[t]=this._easing)}),this}start(t){return k(this),this.playing=!0,this._startTime=void 0!==t?t:e.Time(),this._startTime+=this._delay,this._startFired||(this._onStart&&this._onStart.call(this),N.call(this),this._startFired=!0),c||u(),this}stop(){return this.playing&&(C(this),this.playing=!1,this._onStop&&this._onStop.call(this),this.close()),this}close(){Object.keys(v).forEach((t=>{Object.keys(v[t]).forEach((e=>{v[t][e].call(this,e)}))})),this._startFired=!1,h.call(this)}chain(t){return this._chain=[],this._chain=t.length?t:this._chain.concat(t),this}stopChainedTweens(){this._chain&&this._chain.length&&this._chain.forEach((t=>t.stop()))}update(t){const n=void 0!==t?t:e.Time();let r;if(n<this._startTime&&this.playing)return!0;r=(n-this._startTime)/this._duration,r=0===this._duration||r>1?1:r;const s=this._easing(r);return Object.keys(this.valuesEnd).forEach((t=>{e[t](this.element,this.valuesStart[t],this.valuesEnd[t],s)})),this._onUpdate&&this._onUpdate.call(this),1!==r||(this._onComplete&&this._onComplete.call(this),this.playing=!1,this.close(),void 0!==this._chain&&this._chain.length&&this._chain.map((t=>t.start())),!1)}}j.tween=$,g.repeat=0,g.repeatDelay=0,g.yoyo=!1,g.resetStart=!1;class V extends ${constructor(...t){super(...t),this.valuesStart={},this.valuesEnd={};const e=t[1],n=t[2];I.call(this,n,"end"),this._resetStart?this.valuesStart=e:I.call(this,e,"start"),this._resetStart||Object.keys(b).forEach((t=>{Object.keys(b[t]).forEach((e=>{b[t][e].call(this,e)}))})),this.paused=!1,this._pauseTime=null;const r=t[3];return this._repeat=r.repeat||g.repeat,this._repeatDelay=r.repeatDelay||g.repeatDelay,this._repeatOption=this._repeat,this.valuesRepeat={},this._yoyo=r.yoyo||g.yoyo,this._reversed=!1,this}start(t){return this._resetStart&&(this.valuesStart=this._resetStart,S.call(this),Object.keys(b).forEach((t=>{Object.keys(b[t]).forEach((e=>{b[t][e].call(this,e)}))}))),this.paused=!1,this._yoyo&&Object.keys(this.valuesEnd).forEach((t=>{this.valuesRepeat[t]=this.valuesStart[t]})),super.start(t),this}stop(){return super.stop(),!this.paused&&this.playing&&(this.paused=!1,this.stopChainedTweens()),this}close(){return super.close(),this._repeatOption>0&&(this._repeat=this._repeatOption),this._yoyo&&!0===this._reversed&&(this.reverse(),this._reversed=!1),this}resume(){return this.paused&&this.playing&&(this.paused=!1,void 0!==this._onResume&&this._onResume.call(this),N.call(this),this._startTime+=e.Time()-this._pauseTime,k(this),c||u()),this}pause(){return!this.paused&&this.playing&&(C(this),this.paused=!0,this._pauseTime=e.Time(),void 0!==this._onPause&&this._onPause.call(this)),this}reverse(){Object.keys(this.valuesEnd).forEach((t=>{const e=this.valuesRepeat[t];this.valuesRepeat[t]=this.valuesEnd[t],this.valuesEnd[t]=e,this.valuesStart[t]=this.valuesRepeat[t]}))}update(t){const n=void 0!==t?t:e.Time();let r;if(n<this._startTime&&this.playing)return!0;r=(n-this._startTime)/this._duration,r=0===this._duration||r>1?1:r;const s=this._easing(r);return Object.keys(this.valuesEnd).forEach((t=>{e[t](this.element,this.valuesStart[t],this.valuesEnd[t],s)})),this._onUpdate&&this._onUpdate.call(this),1!==r||(this._repeat>0?(Number.isFinite(this._repeat)&&(this._repeat-=1),this._startTime=n,Number.isFinite(this._repeat)&&this._yoyo&&!this._reversed&&(this._startTime+=this._repeatDelay),this._yoyo&&(this._reversed=!this._reversed,this.reverse()),!0):(this._onComplete&&this._onComplete.call(this),this.playing=!1,this.close(),void 0!==this._chain&&this._chain.length&&this._chain.forEach((t=>t.start())),!1))}}j.tween=V;class q{constructor(t,e,n,r){this.tweens=[],"offset"in g||(g.offset=0);const s=r||{};s.delay=s.delay||g.delay;const a=[];return Array.from(t).forEach(((t,r)=>{const i=j.tween;if(a[r]=s||{},a[r].delay=r>0?s.delay+(s.offset||g.offset):s.delay,!(t instanceof Element))throw Error(`KUTE.js - ${t} not instanceof [Element]`);this.tweens.push(new i(t,e,n,a[r]))})),this.length=this.tweens.length,this}start(t){const n=void 0===t?e.Time():t;return this.tweens.map((t=>t.start(n))),this}stop(){return this.tweens.map((t=>t.stop())),this}pause(t){const n=void 0===t?e.Time():t;return this.tweens.map((t=>t.pause(n))),this}resume(t){const n=void 0===t?e.Time():t;return this.tweens.map((t=>t.resume(n))),this}chain(t){const e=this.tweens[this.length-1];if(t instanceof q)e.chain(t.tweens);else{if(!(t instanceof j.tween))throw new TypeError("KUTE.js - invalid chain value");e.chain(t)}return this}playing(){return this.tweens.some((t=>t.playing))}removeTweens(){this.tweens=[]}getMaxDuration(){const t=[];return this.tweens.forEach((e=>{t.push(e._duration+e._delay+e._repeat*e._repeatDelay)})),Math.max(t)}}class H{constructor(t){try{if(t.component in f)throw Error(`KUTE.js - ${t.component} already registered`);if(t.property in d)throw Error(`KUTE.js - ${t.property} already registered`);this.setComponent(t)}catch(e){throw Error(e)}}setComponent(t){const e=this,n=t.component,r={prepareProperty:y,prepareStart:m,onStart:i,onComplete:v,crossCheck:b},s=t.category,o=t.property,l=t.properties&&t.properties.length||t.subProperties&&t.subProperties.length;return f[n]=t.properties||t.subProperties||t.property,"defaultValue"in t?(d[o]=t.defaultValue,e.supports=`${o} property`):t.defaultValues&&(Object.keys(t.defaultValues).forEach((e=>{d[e]=t.defaultValues[e]})),e.supports=`${l||o} ${o||s} properties`),t.defaultOptions&&Object.keys(t.defaultOptions).forEach((e=>{g[e]=t.defaultOptions[e]})),t.functions&&Object.keys(r).forEach((e=>{e in t.functions&&("function"==typeof t.functions[e]?(r[e][n]||(r[e][n]={}),r[e][n][s||o]||(r[e][n][s||o]=t.functions[e])):Object.keys(t.functions[e]).forEach((s=>{r[e][n]||(r[e][n]={}),r[e][n][s]||(r[e][n][s]=t.functions[e][s])})))})),t.Interpolate&&(Object.keys(t.Interpolate).forEach((e=>{const n=t.Interpolate[e];"function"!=typeof n||a[e]?Object.keys(n).forEach((t=>{"function"!=typeof n[t]||a[e]||(a[e]=n[t])})):a[e]=n})),x[n]=t.Interpolate),t.Util&&Object.keys(t.Util).forEach((e=>{w[e]||(w[e]=t.Util[e])})),e}}function F(t,e){const n=parseInt(t,10)||0,r=["px","%","deg","rad","em","rem","vh","vw"];let s;for(let a=0;a<r.length;a+=1)if("string"==typeof t&&t.includes(r[a])){s=r[a];break}return void 0===s&&(s=e?"deg":"px"),{v:n,u:s}}function Q(t,e,n){return+t+(e-t)*n}function U(t){t in this.valuesEnd&&!e[t]&&(e[t]=(e,n,r,s)=>{e.style[t]=(s>.99||s<.01?(10*Q(n,r,s)>>0)/10:Q(n,r,s)>>0)+"px"})}const D={};["top","left","width","height"].forEach((t=>{D[t]=U}));const R=["top","left","width","height"],X={};R.forEach((t=>{X[t]=U}));const B={component:"essentialBoxModel",category:"boxModel",properties:R,defaultValues:{top:0,left:0,width:0,height:0},Interpolate:{numbers:Q},functions:{prepareStart:function(t){return T(this.element,t)||d[t]},prepareProperty:function(t,e){const n=F(e),r="height"===t?"offsetHeight":"offsetWidth";return"%"===n.u?n.v*this.element[r]/100:n.v},onStart:X},Util:{trueDimension:F}};function Z(t){let e;if(/rgb|rgba/.test(t)){const n=t.replace(/\s|\)/,"").split("(")[1].split(","),r=n[3]?n[3]:null;r||(e={r:parseInt(n[0],10),g:parseInt(n[1],10),b:parseInt(n[2],10)}),e={r:parseInt(n[0],10),g:parseInt(n[1],10),b:parseInt(n[2],10),a:parseFloat(r)}}if(/^#/.test(t)){const n=(t=>{const e=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,((t,e,n,r)=>e+e+n+n+r+r)),n=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return n?{r:parseInt(n[1],16),g:parseInt(n[2],16),b:parseInt(n[3],16)}:null})(t);e={r:n.r,g:n.g,b:n.b}}if(/transparent|none|initial|inherit/.test(t)&&(e={r:0,g:0,b:0,a:0}),!/^#|^rgb/.test(t)){const n=document.getElementsByTagName("head")[0];n.style.color=t;let r=getComputedStyle(n,null).color;r=/rgb/.test(r)?r.replace(/[^\d,]/g,"").split(","):[0,0,0],n.style.color="",e={r:parseInt(r[0],10),g:parseInt(r[1],10),b:parseInt(r[2],10)}}return e}function z(t,e,n){const r={},s=",";return Object.keys(e).forEach((s=>{"a"!==s?r[s]=Q(t[s],e[s],n)>>0||0:t[s]&&e[s]&&(r[s]=(100*Q(t[s],e[s],n)>>0)/100)})),r.a?"rgba("+r.r+s+r.g+s+r.b+s+r.a+")":"rgb("+r.r+s+r.g+s+r.b+")"}function Y(t){this.valuesEnd[t]&&!e[t]&&(e[t]=(e,n,r,s)=>{e.style[t]=z(n,r,s)})}const K={};["color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"].forEach((t=>{K[t]=Y}));const W=["color","backgroundColor","borderColor","borderTopColor","borderRightColor","borderBottomColor","borderLeftColor","outlineColor"],G={};W.forEach((t=>{G[t]="#000"}));const J={};W.forEach((t=>{J[t]=Y}));const tt={component:"colorProperties",category:"colors",properties:W,defaultValues:G,Interpolate:{numbers:Q,colors:z},functions:{prepareStart:function(t){return T(this.element,t)||d[t]},prepareProperty:function(t,e){return Z(e)},onStart:J},Util:{trueColor:Z}},et={},nt=["fill","stroke","stop-color"];function rt(t){return t.replace(/[A-Z]/g,"-$&").toLowerCase()}const st={prepareStart:function(t,e){const n={};return Object.keys(e).forEach((t=>{const e=rt(t).replace(/_+[a-z]+/,""),r=this.element.getAttribute(e);n[e]=nt.includes(e)?r||"rgba(0,0,0,0)":r||(/opacity/i.test(t)?1:0)})),n},prepareProperty:function(t,e){const n={};return Object.keys(e).forEach((r=>{const s=rt(r),a=/(%|[a-z]+)$/,o=this.element.getAttribute(s.replace(/_+[a-z]+/,""));if(nt.includes(s))i.htmlAttributes[s]=e=>{this.valuesEnd[t]&&this.valuesEnd[t][e]&&!(e in et)&&(et[e]=(t,e,n,r,s)=>{t.setAttribute(e,z(n,r,s))})},n[s]=Z(e[r])||d.htmlAttributes[r];else if(null!==o&&a.test(o)){const a=F(o).u||F(e[r]).u,l=/%/.test(a)?"_percent":`_${a}`;i.htmlAttributes[s+l]=e=>{this.valuesEnd[t]&&this.valuesEnd[t][e]&&!(e in et)&&(et[e]=(t,e,n,r,s)=>{const a=e.replace(l,"");t.setAttribute(a,(1e3*Q(n.v,r.v,s)>>0)/1e3+r.u)})},n[s+l]=F(e[r])}else a.test(e[r])&&null!==o&&(null===o||a.test(o))||(i.htmlAttributes[s]=e=>{this.valuesEnd[t]&&this.valuesEnd[t][e]&&!(e in et)&&(et[e]=(t,e,n,r,s)=>{t.setAttribute(e,(1e3*Q(n,r,s)>>0)/1e3)})},n[s]=parseFloat(e[r]))})),n},onStart:{attr(t){!e[t]&&this.valuesEnd[t]&&(e[t]=(t,n,r,s)=>{Object.keys(r).forEach((a=>{e.attributes[a](t,a,n[a],r[a],s)}))})},attributes(t){!e[t]&&this.valuesEnd.attr&&(e[t]=et)}}},at={component:"htmlAttributes",property:"attr",subProperties:["fill","stroke","stop-color","fill-opacity","stroke-opacity"],defaultValue:{fill:"rgb(0,0,0)",stroke:"rgb(0,0,0)","stop-color":"rgb(0,0,0)",opacity:1,"stroke-opacity":1,"fill-opacity":1},Interpolate:{numbers:Q,colors:z},functions:st,Util:{replaceUppercase:rt,trueColor:Z,trueDimension:F}};const it={prepareStart:function(t){return T(this.element,t)},prepareProperty:function(t,e){return parseFloat(e)},onStart:function(t){t in this.valuesEnd&&!e[t]&&(e[t]=(e,n,r,s)=>{e.style[t]=(1e3*Q(n,r,s)>>0)/1e3})}},ot={component:"opacityProperty",property:"opacity",defaultValue:1,Interpolate:{numbers:Q},functions:it},lt=String("abcdefghijklmnopqrstuvwxyz").split(""),ct=String("abcdefghijklmnopqrstuvwxyz").toUpperCase().split(""),ut=String("~!@#$%^&*()_+{}[];'<>,./?=-").split(""),ht=String("0123456789").split(""),pt=lt.concat(ct,ht),ft=pt.concat(ut),dt={alpha:lt,upper:ct,symbols:ut,numeric:ht,alphanumeric:pt,all:ft},gt={text(t){if(!e[t]&&this.valuesEnd[t]){const n=this._textChars;let r=dt[g.textChars];n in dt?r=dt[n]:n&&n.length&&(r=n),e[t]=(t,e,n,s)=>{let a="",i="";const o=""===n?" ":n,l=e.substring(0),c=n.substring(0),u=r[Math.random()*r.length>>0];" "===e?(i=c.substring(Math.min(s*c.length,c.length)>>0,0),t.innerHTML=s<1?i+u:o):" "===n?(a=l.substring(0,Math.min((1-s)*l.length,l.length)>>0),t.innerHTML=s<1?a+u:o):(a=l.substring(l.length,Math.min(s*l.length,l.length)>>0),i=c.substring(0,Math.min(s*c.length,c.length)>>0),t.innerHTML=s<1?i+u+a:o)}}},number(t){t in this.valuesEnd&&!e[t]&&(e[t]=(t,e,n,r)=>{t.innerHTML=Q(e,n,r)>>0})}};function yt(t,e){let n,r;if("string"==typeof t)return r=document.createElement("SPAN"),r.innerHTML=t,r.className=e,r;if(!t.children.length||t.children.length&&t.children[0].className!==e){const r=t.innerHTML;n=document.createElement("SPAN"),n.className=e,n.innerHTML=r,t.appendChild(n),t.innerHTML=n.outerHTML}else t.children.length&&t.children[0].className===e&&([n]=t.children);return n}function mt(t,e){let n=[];const r=t.children.length;if(r){const s=[];let a,i=t.innerHTML;for(let n,o,l,c=0;c<r;c+=1)n=t.children[c],o=n.outerHTML,a=i.split(o),""!==a[0]?(l=yt(a[0],e),s.push(l),i=i.replace(a[0],"")):""!==a[1]&&(l=yt(a[1].split("<")[0],e),s.push(l),i=i.replace(a[0].split("<")[0],"")),n.classList.contains(e)||n.classList.add(e),s.push(n),i=i.replace(o,"");if(""!==i){const t=yt(i,e);s.push(t)}n=n.concat(s)}else n=n.concat([yt(t,e)]);return n}function bt(t,e,n,r){return`perspective(${(1e3*(t+(e-t)*r)>>0)/1e3}${n})`}function vt(t,e,n,r){const s=[];for(let a=0;a<3;a+=1)s[a]=(t[a]||e[a]?(1e3*(t[a]+(e[a]-t[a])*r)>>0)/1e3:0)+n;return`translate3d(${s.join(",")})`}function xt(t,e,n,r){let s="";return s+=t[0]||e[0]?`rotateX(${(1e3*(t[0]+(e[0]-t[0])*r)>>0)/1e3}${n})`:"",s+=t[1]||e[1]?`rotateY(${(1e3*(t[1]+(e[1]-t[1])*r)>>0)/1e3}${n})`:"",s+=t[2]||e[2]?`rotateZ(${(1e3*(t[2]+(e[2]-t[2])*r)>>0)/1e3}${n})`:"",s}function Et(t,e,n){return`scale(${(1e3*(t+(e-t)*n)>>0)/1e3})`}function wt(t,e,n,r){const s=[];return s[0]=(t[0]===e[0]?e[0]:(1e3*(t[0]+(e[0]-t[0])*r)>>0)/1e3)+n,s[1]=t[1]||e[1]?(t[1]===e[1]?e[1]:(1e3*(t[1]+(e[1]-t[1])*r)>>0)/1e3)+n:"0",`skew(${s.join(",")})`}function kt(t,e){return parseFloat(t)/100*e}function Ct(t){return 2*t.getAttribute("width")+2*t.getAttribute("height")}function Ot(t){const e=t.getAttribute("points").split(" ");let n=0;if(e.length>1){const r=t=>{const e=t.split(",");return 2!==e.length||Number.isNaN(1*e[0])||Number.isNaN(1*e[1])?0:[parseFloat(e[0]),parseFloat(e[1])]},s=(t,e)=>void 0!==t&&void 0!==e?Math.sqrt((e[0]-t[0])**2+(e[1]-t[1])**2):0;if(e.length>2)for(let t=0;t<e.length-1;t+=1)n+=s(r(e[t]),r(e[t+1]));n+="polygon"===t.tagName?s(r(e[0]),r(e[e.length-1])):0}return n}function _t(t){const e=t.getAttribute("x1"),n=t.getAttribute("x2"),r=t.getAttribute("y1"),s=t.getAttribute("y2");return Math.sqrt((n-e)**2+(s-r)**2)}function Mt(t){const e=t.getAttribute("r");return 2*Math.PI*e}function Tt(t){const e=2*t.getAttribute("rx"),n=2*t.getAttribute("ry");return Math.sqrt(.5*(e*e+n*n))*(2*Math.PI)/2}function It(t){return"rect"===t.tagName?Ct(t):"circle"===t.tagName?Mt(t):"ellipse"===t.tagName?Tt(t):["polygon","polyline"].includes(t.tagName)?Ot(t):"line"===t.tagName?_t(t):0}function St(t,e){const n=/path|glyph/.test(t.tagName)?t.getTotalLength():It(t);let r,s,a,i;if(e instanceof Object)return e;if("string"==typeof e){const t=e.split(/,|\s/);r=/%/.test(t[0])?kt(t[0].trim(),n):parseFloat(t[0]),s=/%/.test(t[1])?kt(t[1].trim(),n):parseFloat(t[1])}else void 0===e&&(i=parseFloat(T(t,"stroke-dashoffset")),a=T(t,"stroke-dasharray").split(","),r=0-i,s=parseFloat(a[0])+r||n);return{s:r,e:s,l:n}}const At={prepareStart:function(){return St(this.element)},prepareProperty:function(t,e){return St(this.element,e)},onStart:function(t){t in this.valuesEnd&&!e[t]&&(e[t]=(t,e,n,r)=>{const s=(100*e.l>>0)/100,a=0-(100*Q(e.s,n.s,r)>>0)/100,i=(100*Q(e.e,n.e,r)>>0)/100+a;t.style.strokeDashoffset=`${a}px`,t.style.strokeDasharray=`${(100*(i<1?0:i)>>0)/100}px, ${s}px`})}},jt=4;function Lt(t){return t.map((t=>Array.isArray(t)?Lt(t):Number.isNaN(+t)?t:+t))}function Pt(t,e){const n=Number.isNaN(+e)?jt:+e;let r;return r=n?t.map((t=>t.map((t=>{const e=+t,r=10**n;return e?e%1==0?e:Math.round(e*r)/r:t})))):Lt(t),r}function Nt(t,e,n){if(t[n].length>7){t[n].shift();const r=t[n];let s=n;for(;r.length;)e[n]="A",t.splice(s+=1,0,["C"].concat(r.splice(0,6)));t.splice(n,1)}}var $t={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0};function Vt(t){return Array.isArray(t)&&t.every((t=>{const e=t[0].toLowerCase();return $t[e]===t.length-1&&/[achlmrqstvz]/g.test(e)}))}function qt(t){let e=t.pathValue[t.segmentStart],n=e.toLowerCase(),r=t.data;if("m"===n&&r.length>2&&(t.segments.push([e,r[0],r[1]]),r=r.slice(2),n="l",e="m"===e?"l":"L"),"r"===n)t.segments.push([e].concat(r));else for(;r.length>=$t[n]&&(t.segments.push([e].concat(r.splice(0,$t[n]))),$t[n]););}function Ht(t){const e=t.pathValue.charCodeAt(t.index);return 48===e?(t.param=0,void(t.index+=1)):49===e?(t.param=1,void(t.index+=1)):void(t.err=`Invalid path value: invalid Arc flag ${e}`)}function Ft(t){return t>=48&&t<=57}function Qt(t){const e=t.index,{max:n}=t;let r,s=e,a=!1,i=!1,o=!1,l=!1;if(s>=n)t.err=`Invalid path value: missing param ${t.pathValue[s]}`;else if(r=t.pathValue.charCodeAt(s),43!==r&&45!==r||(s+=1,r=s<n?t.pathValue.charCodeAt(s):0),Ft(r)||46===r){if(46!==r){if(a=48===r,s+=1,r=s<n?t.pathValue.charCodeAt(s):0,a&&s<n&&r&&Ft(r))return void(t.err=`Invalid path value: ${t.pathValue[e]} illegal number`);for(;s<n&&Ft(t.pathValue.charCodeAt(s));)s+=1,i=!0;r=s<n?t.pathValue.charCodeAt(s):0}if(46===r){for(l=!0,s+=1;Ft(t.pathValue.charCodeAt(s));)s+=1,o=!0;r=s<n?t.pathValue.charCodeAt(s):0}if(101===r||69===r){if(l&&!i&&!o)return void(t.err=`Invalid path value: ${t.pathValue[s]} invalid float exponent`);if(s+=1,r=s<n?t.pathValue.charCodeAt(s):0,43!==r&&45!==r||(s+=1),!(s<n&&Ft(t.pathValue.charCodeAt(s))))return void(t.err=`Invalid path value: ${t.pathValue[s]} invalid float exponent`);for(;s<n&&Ft(t.pathValue.charCodeAt(s));)s+=1}t.index=s,t.param=+t.pathValue.slice(e,s)}else t.err=`Invalid path value at index ${s}: ${t.pathValue[s]} is not a number`}function Ut(t){for(;t.index<t.max&&(10===(e=t.pathValue.charCodeAt(t.index))||13===e||8232===e||8233===e||32===e||9===e||11===e||12===e||160===e||e>=5760&&[5760,6158,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].indexOf(e)>=0);)t.index+=1;var e}function Dt(t){return t>=48&&t<=57||43===t||45===t||46===t}function Rt(t){const{max:e}=t,n=t.pathValue.charCodeAt(t.index),r=$t[t.pathValue[t.index].toLowerCase()];if(t.segmentStart=t.index,function(t){switch(32|t){case 109:case 122:case 108:case 104:case 118:case 99:case 115:case 113:case 116:case 97:case 114:return!0;default:return!1}}(n))if(t.index+=1,Ut(t),t.data=[],r){for(;;){for(let s=r;s>0;s-=1){if(97!=(32|n)||3!==s&&4!==s?Qt(t):Ht(t),t.err.length)return;t.data.push(t.param),Ut(t),t.index<e&&44===t.pathValue.charCodeAt(t.index)&&(t.index+=1,Ut(t))}if(t.index>=t.max)break;if(!Dt(t.pathValue.charCodeAt(t.index)))break}qt(t)}else qt(t);else t.err=`Invalid path value: ${t.pathValue[t.index]} not a path command`}function Xt(t){return this.segments=[],this.pathValue=t,this.max=t.length,this.index=0,this.param=0,this.segmentStart=0,this.data=[],this.err="",this}function Bt(t,e){if(function(t){return Vt(t)&&t.every((t=>t[0]===t[0].toUpperCase()))}(t))return Lt(t);const n=function(t,e){if(Vt(t))return Lt(t);const n=new Xt(t);for(Ut(n);n.index<n.max&&!n.err.length;)Rt(n);return n.err.length?n.segments=[]:n.segments.length&&("mM".indexOf(n.segments[0][0])<0?(n.err="Invalid path value: missing M/m",n.segments=[]):n.segments[0][0]="M"),Pt(n.segments,e)}(t,e),r=n.length,s=[];let a=0,i=0,o=0,l=0,c=0;"M"===n[0][0]&&(a=+n[0][1],i=+n[0][2],o=a,l=i,c+=1,s.push(["M",a,i]));for(let u=c;u<r;u+=1){const t=n[u],[e]=t,r=e.toUpperCase(),c=[];let h=[];if(s.push(c),e!==r)switch(c[0]=r,r){case"A":h=t.slice(1,-2).concat([+t[6]+a,+t[7]+i]);for(let t=0;t<h.length;t+=1)c.push(h[t]);break;case"V":c[1]=+t[1]+i;break;case"H":c[1]=+t[1]+a;break;default:"M"===r&&(o=+t[1]+a,l=+t[2]+i);for(let e=1;e<t.length;e+=1)c.push(+t[e]+(e%2?a:i))}else for(let n=0;n<t.length;n+=1)c.push(t[n]);const p=c.length;switch(r){case"Z":a=o,i=l;break;case"H":a=+c[1];break;case"V":i=+c[1];break;default:a=+c[p-2],i=+c[p-1],"M"===r&&(o=a,l=i)}}return Pt(s,e)}function Zt(t,e,n){const[r]=t,s=t.slice(1);let a=t;if("TQ".indexOf(t[0])<0&&(e.qx=null,e.qy=null),"H"===r)a=["L",t[1],e.y1];else if("V"===r)a=["L",e.x1,t[1]];else if("S"===r){const{x1:t,y1:r}=function(t,e,n,r,s){return"CS".indexOf(s)>-1?{x1:2*t-n,y1:2*e-r}:{x1:t,y1:e}}(e.x1,e.y1,e.x2,e.y2,n);e.x1=t,e.y1=r,a=["C",t,r].concat(s)}else if("T"===r){const{qx:t,qy:r}=function(t,e,n,r,s){return"QT".indexOf(s)>-1?{qx:2*t-n,qy:2*e-r}:{qx:t,qy:e}}(e.x1,e.y1,e.qx,e.qy,n);e.qx=t,e.qy=r,a=["Q",t,r].concat(s)}else if("Q"===r){const[t,n]=s;e.qx=t,e.qy=n}return a}function zt(t,e){if(function(t){return Array.isArray(t)&&t.every((t=>{const e=t[0].toLowerCase();return $t[e]===t.length-1&&/[ACLMQZ]/.test(t[0])}))}(t))return Lt(t);const n=Bt(t,e),r={x1:0,y1:0,x2:0,y2:0,x:0,y:0,qx:null,qy:null},s=[],a=n.length;let i,o,l="";for(let c=0;c<a;c+=1){const[t]=n[c];s[c]=t,c&&(l=s[c-1]),n[c]=Zt(n[c],r,l),i=n[c],o=i.length,r.x1=+i[o-2],r.y1=+i[o-1],r.x2=+i[o-4]||r.x1,r.y2=+i[o-3]||r.y1}return Pt(n,e)}function Yt(t,e,n){return{x:t*Math.cos(n)-e*Math.sin(n),y:t*Math.sin(n)+e*Math.cos(n)}}function Kt(t,e,n,r,s,a,i,o,l,c){const u=120*Math.PI/180,h=Math.PI/180*(s||0);let p,f,d,g,y,m=[],b=t,v=o,x=e,E=l,w=n,k=r;if(c){const[t,e,n,r]=c;f=t,d=e,g=n,y=r}else{p=Yt(b,x,-h),b=p.x,x=p.y,p=Yt(v,E,-h),v=p.x,E=p.y;const t=(b-v)/2,e=(x-E)/2;let n=t*t/(w*k)+e**2/k**2;n>1&&(n=Math.sqrt(n),w*=n,k*=n);const r=w**2,s=k**2,o=(a===i?-1:1)*Math.sqrt(Math.abs((r*s-r*e*e-s*t*t)/(r*e*e+s*t*t)));g=o*w*e/k+(b+v)/2,y=o*-k*t/w+(x+E)/2,f=Math.asin(((x-y)/k*10**9>>0)/10**9),d=Math.asin(((E-y)/k*10**9>>0)/10**9),f=b<g?Math.PI-f:f,d=v<g?Math.PI-d:d,f<0&&(f=2*Math.PI+f),d<0&&(d=2*Math.PI+d),i&&f>d&&(f-=2*Math.PI),!i&&d>f&&(d-=2*Math.PI)}let C=d-f;if(Math.abs(C)>u){const t=d,e=v,n=E;d=f+u*(i&&d>f?1:-1),v=g+w*Math.cos(d),E=y+k*Math.sin(d),m=Kt(v,E,w,k,s,0,i,e,n,[d,t,g,y])}C=d-f;const O=Math.cos(f),_=Math.sin(f),M=Math.cos(d),T=Math.sin(d),I=Math.tan(C/4),S=4/3*w*I,A=4/3*k*I,j=[b,x],L=[b+S*_,x-A*O],P=[v+S*T,E-A*M],N=[v,E];return L[0]=2*j[0]-L[0],L[1]=2*j[1]-L[1],c?[L,P,N].concat(m):(m=[L,P,N].concat(m).join().split(","),m.map(((t,e)=>e%2?Yt(m[e-1],t,h).y:Yt(t,m[e+1],h).x)))}function Wt(t,e,n,r,s,a){const i=1/3,o=2/3;return[i*t+o*n,i*e+o*r,i*s+o*n,i*a+o*r,s,a]}function Gt(t,e,n,r,s,a,i,o,l){const c=1-l;return{x:c**3*t+c*c*3*l*n+3*c*l*l*s+l**3*i,y:c**3*e+c*c*3*l*r+3*c*l*l*a+l**3*o}}function Jt(t,e,n){const r=t[0],s=t[1];return[r+(e[0]-r)*n,s+(e[1]-s)*n]}function te(t,e,n,r){const s=.5,a=[t,e],i=[n,r],o=Jt(a,i,s),l=Jt(i,o,s),c=Jt(o,l,s),u=Jt(l,c,s),h=Jt(c,u,s),p=Gt.apply(0,a.concat(o,c,h,s)),f=Gt.apply(0,h.concat(u,l,i,0));return[p.x,p.y,f.x,f.y,n,r]}function ee(t,e){"TQ".indexOf(t[0])<0&&(e.qx=null,e.qy=null);const[n,r]=t.slice(1);switch(t[0]){case"M":return e.x=n,e.y=r,t;case"A":return["C"].concat(Kt.apply(0,[e.x1,e.y1].concat(t.slice(1))));case"Q":return e.qx=n,e.qy=r,["C"].concat(Wt.apply(0,[e.x1,e.y1].concat(t.slice(1))));case"L":return["C"].concat(te(e.x1,e.y1,t[1],t[2]));case"Z":return["C"].concat(te(e.x1,e.y1,e.x,e.y))}return t}function ne(t,e){if(function(t){return Vt(t)&&t.slice(1).every((t=>"C"===t[0]))}(t))return Lt(t);const n=zt(t,e),r={x1:0,y1:0,x2:0,y2:0,x:0,y:0,qx:null,qy:null},s=[];let a,i,o="",l=n.length;for(let c=0;c<l;c+=1)n[c]&&([o]=n[c]),s[c]=o,n[c]=ee(n[c],r),Nt(n,s,c),l=n.length,a=n[c],i=a.length,r.x1=+a[i-2],r.y1=+a[i-1],r.x2=+a[i-4]||r.x1,r.y2=+a[i-3]||r.y1;return Pt(n,e)}function re(t){return t.map((t=>t[0].concat(t.slice(1).join(" ")))).join("")}function se(t,e,n,r,s){return s*(s*(-3*t+9*e-9*n+3*r)+6*t-12*e+6*n)-3*t+3*e}function ae(t,e,n,r,s,a,i,o,l){let c;(null===l||Number.isNaN(+l))&&(c=1),c>1&&(c=1),c<0&&(c=0);const u=c/2;let h=0,p=0,f=0,d=0;const g=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472];return[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816].forEach(((l,c)=>{h=u*l+u,p=se(t,n,s,i,h),f=se(e,r,a,o,h),d+=g[c]*Math.sqrt(p*p+f*f)})),u*d}function ie(t,e){let n=0;return ne(t,e).forEach(((t,e,r)=>{n+="M"!==t[0]?ae.apply(0,r[e-1].slice(-2).concat(t.slice(1))):0})),n}function oe(t,e){let n,r,s,a=0;return ne(t,9).map(((t,i,o)=>(r=i?o[i-1].slice(-2).concat(t.slice(1)):t.slice(1),n=i?ae.apply(0,r):0,a+=n,s=0===i?{x:r[0],y:r[1]}:a>e&&e>a-n?Gt.apply(0,r.concat(1-(a-e)/n)):null,s))).filter((t=>t)).slice(-1)[0]}function le(t,e,n,r,s,a,i,o){return 3*((o-e)*(n+s)-(i-t)*(r+a)+r*(t-s)-n*(e-a)+o*(s+t/3)-i*(a+e/3))/20}function ce(t,e){return function(t,e){let n=0,r=0,s=0,a=0,i=0;return ne(t,e).map((t=>{switch(t[0]){case"M":case"Z":return s="M"===t[0]?t[1]:s,a="M"===t[0]?t[2]:a,n=s,r=a,0;default:return i=le.apply(0,[n,r].concat(t.slice(1))),[n,r]=t.slice(-2),i}})).reduce(((t,e)=>t+e),0)}(ne(t,e))>=0}function ue(t,e){return Math.sqrt((t[0]-e[0])*(t[0]-e[0])+(t[1]-e[1])*(t[1]-e[1]))}function he(t,e,n,r){const s=[];for(let a=0;a<n;a+=1){s[a]=[];for(let n=0;n<2;n+=1)s[a].push((1e3*(t[a][n]+(e[a][n]-t[a][n])*r)>>0)/1e3)}return s}function pe(t){return t.reduce(((e,n,r)=>r?e+ue(t[r-1],n):0),0)}function fe(t,e){var n;const r=ne((n=re(t),re(Bt(n,0)).replace(/(m|M)/g,"|$1").split("|").map((t=>t.trim())).filter((t=>t)))[0],4),s=ie(r),a=[];let i,o=3;e&&!Number.isNaN(e)&&+e>0&&(o=Math.max(o,Math.ceil(s/e)));for(let l=0;l<o;l+=1)i=oe(r,s*l/o),a.push([i.x,i.y]);return ce(r)||a.reverse(),{pathLength:s,ring:a,skipBisect:!0}}function de(t,e){const n=zt(t,0);return function(t){const e=[],n=t.length;let r=[],s="",a=0;if(!t.length||"M"!==t[0][0])return!1;for(let i=0;i<n&&(r=t[i],[s]=r,!("M"===s&&i||"Z"===s));i+=1){if(!("ML".indexOf(s)>-1))return!1;e.push([r[1],r[2]])}return a=pe(e),!!n&&{ring:e,pathLength:a}}(n)||fe(n,e)}function ge(t,e){const n=t.length;let r,s,a,i,o=1/0,l=0;for(let c=0;c<n;c+=1){l=0;for(let r=0;r<e.length;r+=1)i=e[r],a=ue(t[(c+r)%n],i),l+=a*a;l<o&&(o=l,r=c)}r&&(s=t.splice(0,r),t.splice(t.length,0,...s))}function ye(t,e){const n=t.length+e,r=pe(t)/e;let s,a,i,o=0,l=0,c=r/2;for(;t.length<n;)s=t[o],a=t[(o+1)%t.length],i=ue(s,a),c<=l+i?(t.splice(o+1,0,i?Jt(s,a,(c-l)/i):s.slice(0)),c+=r):(l+=i,o+=1)}function me(t,e=1/0){let n=[],r=[];for(let s=0;s<t.length;s+=1)for(n=t[s],r=s===t.length-1?t[0]:t[s+1];ue(n,r)>e;)r=Jt(n,r,.5),t.splice(s+1,0,r)}function be(t){return Array.isArray(t)&&t.every((t=>Array.isArray(t)&&2===t.length&&!Number.isNaN(t[0])&&!Number.isNaN(t[1])))}function ve(t,e){let n,r,s=t;if("string"==typeof s){const t=de(s,e);s=t.ring,n=t.skipBisect,r=t.pathLength}else if(!Array.isArray(s))throw Error(`Invalid path value: ${s}`);const a=s.slice(0);if(a.pathLength=r,!be(a))throw Error(`Invalid path value: ${a}`);return a.length>1&&ue(a[0],a[a.length-1])<1e-9&&a.pop(),!n&&e&&!Number.isNaN(e)&&+e>0&&me(a,e),a}function xe(t,e,n){const r=n||g.morphPrecision,s=ve(t,r),a=ve(e,r),i=s.length-a.length;return ye(s,i<0?-1*i:0),ye(a,i>0?i:0),ge(s,a),[Pt(s),Pt(a)]}const Ee={prepareStart:function(){return this.element.getAttribute("d")},prepareProperty:function(t,e){const n={},r=new RegExp("\\n","ig");let s=null;return e instanceof SVGElement?s=e:/^\.|^#/.test(e)&&(s=P(e)),"object"==typeof e&&e.pathArray?e:(s&&["path","glyph"].includes(s.tagName)?n.original=s.getAttribute("d").replace(r,""):s||"string"!=typeof e||(n.original=e.replace(r,"")),n)},onStart:function(t){!e[t]&&this.valuesEnd[t]&&(e[t]=(t,e,n,r)=>{const s=e.pathArray,a=n.pathArray,i=a.length;t.setAttribute("d",1===r?n.original:`M${he(s,a,i,r).join("L")}Z`)})},crossCheck:function(t){if(this.valuesEnd[t]){const e=this.valuesStart[t].pathArray,n=this.valuesEnd[t].pathArray;if(!e||!n||e&&n&&e.length!==n.length){const e=this.valuesStart[t].original,n=this.valuesEnd[t].original,r=this._morphPrecision?parseInt(this._morphPrecision,10):g.morphPrecision,[s,a]=xe(e,n,r);this.valuesStart[t].pathArray=s,this.valuesEnd[t].pathArray=a}}}};const we={EssentialBoxModel:B,ColorsProperties:tt,HTMLAttributes:at,OpacityProperty:ot,TextWrite:{component:"textWriteProperties",category:"textWrite",properties:["text","number"],defaultValues:{text:" ",numbers:"0"},defaultOptions:{textChars:"alpha"},Interpolate:{numbers:Q},functions:{prepareStart:function(){return this.element.innerHTML},prepareProperty:function(t,e){return"number"===t?parseFloat(e):""===e?" ":e},onStart:gt},Util:{charSet:dt,createTextTweens:function(t,e,n){if(t.playing)return!1;const r=n||{};r.duration=1e3,"auto"===n.duration?r.duration="auto":Number.isFinite(1*n.duration)&&(r.duration=1*n.duration);const s=j.tween,a=function(t,e){const n=mt(t,"text-part"),r=mt(yt(e),"text-part");return t.innerHTML="",t.innerHTML+=n.map((t=>(t.className+=" oldText",t.outerHTML))).join(""),t.innerHTML+=r.map((t=>(t.className+=" newText",t.outerHTML.replace(t.innerHTML,"")))).join(""),[n,r]}(t,e),i=a[0],o=a[1],l=[].slice.call(t.getElementsByClassName("oldText")).reverse(),c=[].slice.call(t.getElementsByClassName("newText"));let u=[],h=0;return u=u.concat(l.map(((t,e)=>(r.duration="auto"===r.duration?75*i[e].innerHTML.length:r.duration,r.delay=h,r.onComplete=null,h+=r.duration,new s(t,{text:t.innerHTML},{text:""},r))))),u=u.concat(c.map(((n,a)=>(r.duration="auto"===r.duration?75*o[a].innerHTML.length:r.duration,r.delay=h,r.onComplete=a===o.length-1?function(){t.innerHTML=e,t.playing=!1}:null,h+=r.duration,new s(n,{text:""},{text:o[a].innerHTML},r))))),u.start=function(){t.playing||(u.forEach((t=>t.start())),t.playing=!0)},u}}},TransformFunctions:{component:"transformFunctions",property:"transform",subProperties:["perspective","translate3d","translateX","translateY","translateZ","translate","rotate3d","rotateX","rotateY","rotateZ","rotate","skewX","skewY","skew","scale"],defaultValues:{perspective:400,translate3d:[0,0,0],translateX:0,translateY:0,translateZ:0,translate:[0,0],rotate3d:[0,0,0],rotateX:0,rotateY:0,rotateZ:0,rotate:0,skewX:0,skewY:0,skew:[0,0],scale:1},functions:{prepareStart:function(t){const e=M(this.element);return e[t]?e[t]:d[t]},prepareProperty:function(t,e){const n=["X","Y","Z"],r={},s=[],a=[],i=[],o=["translate3d","translate","rotate3d","skew"];return Object.keys(e).forEach((t=>{const l="object"==typeof e[t]&&e[t].length?e[t].map((t=>parseInt(t,10))):parseInt(e[t],10);if(o.includes(t)){const e="translate"===t||"rotate"===t?`${t}3d`:t;r[e]="skew"===t?l.length?[l[0]||0,l[1]||0]:[l||0,0]:"translate"===t?l.length?[l[0]||0,l[1]||0,l[2]||0]:[l||0,0,0]:[l[0]||0,l[1]||0,l[2]||0]}else if(/[XYZ]/.test(t)){const o=t.replace(/[XYZ]/,""),l="skew"===o?o:`${o}3d`,c="skew"===o?2:3;let u=[];"translate"===o?u=s:"rotate"===o?u=a:"skew"===o&&(u=i);for(let t=0;t<c;t+=1){const r=n[t];u[t]=`${o}${r}`in e?parseInt(e[`${o}${r}`],10):0}r[l]=u}else"rotate"===t?r.rotate3d=[0,0,l]:r[t]="scale"===t?parseFloat(e[t]):l})),r},onStart:function(t){!e[t]&&this.valuesEnd[t]&&(e[t]=(e,n,r,s)=>{e.style[t]=(n.perspective||r.perspective?bt(n.perspective,r.perspective,"px",s):"")+(n.translate3d?vt(n.translate3d,r.translate3d,"px",s):"")+(n.rotate3d?xt(n.rotate3d,r.rotate3d,"deg",s):"")+(n.skew?wt(n.skew,r.skew,"deg",s):"")+(n.scale||r.scale?Et(n.scale,r.scale,s):"")})},crossCheck:function(t){this.valuesEnd[t]&&this.valuesEnd[t]&&this.valuesEnd[t].perspective&&!this.valuesStart[t].perspective&&(this.valuesStart[t].perspective=this.valuesEnd[t].perspective)}},Interpolate:{perspective:bt,translate3d:vt,rotate3d:xt,translate:function(t,e,n,r){const s=[];return s[0]=(t[0]===e[0]?e[0]:(1e3*(t[0]+(e[0]-t[0])*r)>>0)/1e3)+n,s[1]=t[1]||e[1]?(t[1]===e[1]?e[1]:(1e3*(t[1]+(e[1]-t[1])*r)>>0)/1e3)+n:"0",`translate(${s.join(",")})`},rotate:function(t,e,n,r){return`rotate(${(1e3*(t+(e-t)*r)>>0)/1e3}${n})`},scale:Et,skew:wt}},SVGDraw:{component:"svgDraw",property:"draw",defaultValue:"0% 0%",Interpolate:{numbers:Q},functions:At,Util:{getRectLength:Ct,getPolyLength:Ot,getLineLength:_t,getCircleLength:Mt,getEllipseLength:Tt,getTotalLength:It,resetDraw:function(t){t.style.strokeDashoffset="",t.style.strokeDasharray=""},getDraw:St,percent:kt}},SVGMorph:{component:"svgMorph",property:"path",defaultValue:[],Interpolate:he,defaultOptions:{morphPrecision:10,morphIndex:0},functions:Ee,Util:{addPoints:ye,bisect:me,normalizeRing:ve,validRing:be,getInterpolationPoints:xe,pathStringToRing:de,distanceSquareRoot:ue,midPoint:Jt,approximateRing:fe,rotateRing:ge,pathToString:re,pathToCurve:ne,getPathLength:ie,getPointAtLength:oe,getDrawDirection:ce,roundPath:Pt}}};Object.keys(we).forEach((t=>{const e=we[t];we[t]=new H(e)}));var ke={Animation:H,Components:we,Tween:V,fromTo:function(t,e,n,r){const s=r||{};return new(0,j.tween)(P(t),e,n,s)},to:function(t,e,n){const r=n||{},s=j.tween;return r.resetStart=e,new s(P(t),e,e,r)},TweenCollection:q,allFromTo:function(t,e,n,r){const s=r||{};return new q(P(t,!0),e,n,s)},allTo:function(t,e,n){const r=n||{};return n.resetStart=e,new q(P(t,!0),e,e,r)},Objects:E,Util:w,Easing:L,CubicBezier:t,Render:p,Interpolate:a,Process:A,Internals:_,Selector:P,Version:"2.1.2"};export{ke as default};
