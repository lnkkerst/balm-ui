!function(t,n){"object"===typeof exports&&"object"===typeof module?module.exports=n():"function"===typeof define&&define.amd?define([],n):"object"===typeof exports?exports.BalmUI_touch=n():t.BalmUI_touch=n()}(window,(function(){return function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="oTKP")}({"+oHS":function(t,n,e){t.exports=e("XEyi")},"/EgQ":function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},"39uu":function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},AnMC:function(t,n,e){var r=e("wbIY"),o=e("QYBB"),c=e("LGyv");t.exports=r?function(t,n,e){return o.f(t,n,c(1,e))}:function(t,n,e){return t[n]=e,t}},Bvq2:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},CqEA:function(t,n,e){var r=e("pevS"),o=e("T/97"),c=e("oBZR");r({target:"Object",stat:!0,forced:e("Bvq2")((function(){c(1)}))},{keys:function(t){return c(o(t))}})},FWHo:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},GHVm:function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},GUr9:function(t,n,e){var r=e("zJQS");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},LGyv:function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},OsYe:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e("yLpj"))},QYBB:function(t,n,e){var r=e("wbIY"),o=e("d7IX"),c=e("b42z"),u=e("cWgI"),i=Object.defineProperty;n.f=r?i:function(t,n,e){if(c(t),n=u(n,!0),c(e),o)try{return i(t,n,e)}catch(r){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},RLqH:function(t,n,e){var r=e("wbIY"),o=e("cEPT"),c=e("LGyv"),u=e("pCEo"),i=e("cWgI"),f=e("eOcF"),a=e("d7IX"),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=u(t),n=i(n,!0),a)try{return s(t,n)}catch(e){}if(f(t,n))return c(!o.f.call(t,n),t[n])}},RQhY:function(t,n,e){var r=e("FWHo"),o=Math.max,c=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):c(e,n)}},"T/97":function(t,n,e){var r=e("GHVm");t.exports=function(t){return Object(r(t))}},XEyi:function(t,n,e){var r=e("oM22");t.exports=r},Y4Ys:function(t,n,e){var r=e("pCEo"),o=e("ZyXh"),c=e("RQhY"),u=function(t){return function(n,e,u){var i,f=r(n),a=o(f.length),s=c(u,a);if(t&&e!=e){for(;a>s;)if((i=f[s++])!=i)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:u(!0),indexOf:u(!1)}},Y4yM:function(t,n,e){var r=e("Bvq2"),o=e("/EgQ"),c="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?c.call(t,""):Object(t)}:Object},ZyXh:function(t,n,e){var r=e("FWHo"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},b42z:function(t,n,e){var r=e("39uu");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},bpon:function(t,n){t.exports={}},cEPT:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,c=o&&!r.call({1:2},1);n.f=c?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},cWgI:function(t,n,e){var r=e("39uu");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},d7IX:function(t,n,e){var r=e("wbIY"),o=e("Bvq2"),c=e("ejc7");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(c("div"),"a",{get:function(){return 7}}).a}))},dktu:function(t,n){t.exports={}},eOcF:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},ejc7:function(t,n,e){var r=e("OsYe"),o=e("39uu"),c=r.document,u=o(c)&&o(c.createElement);t.exports=function(t){return u?c.createElement(t):{}}},nleh:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},oBZR:function(t,n,e){var r=e("syO3"),o=e("nleh");t.exports=Object.keys||function(t){return r(t,o)}},oM22:function(t,n,e){e("CqEA");var r=e("dktu");t.exports=r.Object.keys},oOVA:function(t,n,e){var r=e("Bvq2"),o=/#|\.prototype\./,c=function(t,n){var e=i[u(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},u=c.normalize=function(t){return String(t).replace(o,".").toLowerCase()},i=c.data={},f=c.NATIVE="N",a=c.POLYFILL="P";t.exports=c},oTKP:function(t,n,e){"use strict";e.r(n);var r=e("+oHS"),o=e.n(r),c={components:{button:"mdc-button",chip:"mdc-chip",checkbox:"mdc-checkbox",radio:"mdc-radio"},cssClasses:{wrapper:"mdc-touch-target-wrapper",button:{outer:"mdc-button--touch",inner:"mdc-button__touch"},chip:{outer:"mdc-chip--touch",inner:"mdc-chip__touch"},checkbox:{outer:"mdc-checkbox--touch"},radio:{outer:"mdc-radio--touch"}}},u=function(t){var n=function(t){for(var n=!1,e=o()(c.components),r=0,u=e.length;r<u;r++){var i=e[r],f=c.components[i];if(t.classList.contains(f)){n=i;break}}return n}(t);if(n){var e=document.createElement("div");if(e.className=c.cssClasses.wrapper,c.cssClasses[n].inner){var r=document.createElement("div");r.className=c.cssClasses[n].inner,t.appendChild(r)}t.classList.add(c.cssClasses[n].outer),t.parentNode.insertBefore(e,t),t.parentNode.removeChild(t),e.appendChild(t)}},i={name:"touch",inserted:function(t){u(t)}};(function(t,n){"undefined"!==typeof window&&window.Vue&&window.Vue.directive(t,n)})(i.name,i);n.default=i},pCEo:function(t,n,e){var r=e("Y4yM"),o=e("GHVm");t.exports=function(t){return r(o(t))}},pevS:function(t,n,e){"use strict";var r=e("OsYe"),o=e("RLqH").f,c=e("oOVA"),u=e("dktu"),i=e("GUr9"),f=e("AnMC"),a=e("eOcF"),s=function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n.prototype=t.prototype,n};t.exports=function(t,n){var e,p,l,d,v,y,h,b,m=t.target,x=t.global,w=t.stat,O=t.proto,g=x?r:w?r[m]:(r[m]||{}).prototype,j=x?u:u[m]||(u[m]={}),E=j.prototype;for(l in n)e=!c(x?l:m+(w?".":"#")+l,t.forced)&&g&&a(g,l),v=j[l],e&&(y=t.noTargetGet?(b=o(g,l))&&b.value:g[l]),d=e&&y?y:n[l],e&&typeof v===typeof d||(h=t.bind&&e?i(d,r):t.wrap&&e?s(d):O&&"function"==typeof d?i(Function.call,d):d,(t.sham||d&&d.sham||v&&v.sham)&&f(h,"sham",!0),j[l]=h,O&&(a(u,p=m+"Prototype")||f(u,p,{}),u[p][l]=d,t.real&&E&&!E[l]&&f(E,l,d)))}},syO3:function(t,n,e){var r=e("eOcF"),o=e("pCEo"),c=e("Y4Ys").indexOf,u=e("bpon");t.exports=function(t,n){var e,i=o(t),f=0,a=[];for(e in i)!r(u,e)&&r(i,e)&&a.push(e);for(;n.length>f;)r(i,e=n[f++])&&(~c(a,e)||a.push(e));return a}},wbIY:function(t,n,e){var r=e("Bvq2");t.exports=!r((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},yLpj:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}t.exports=e},zJQS:function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}}})}));