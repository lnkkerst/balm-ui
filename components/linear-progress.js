!function(e,t){"object"===typeof exports&&"object"===typeof module?module.exports=t():"function"===typeof define&&define.amd?define([],t):"object"===typeof exports?exports.BalmUI=t():e.BalmUI=t()}(window,function(){return function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s="psz7")}({"7W2i":function(e,t,n){var r=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},AM7Y:function(e,t,n){"use strict";n.d(t,"c",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"b",function(){return s});var c={animationstart:{noPrefix:"animationstart",webkitPrefix:"webkitAnimationStart",styleProperty:"animation"},animationend:{noPrefix:"animationend",webkitPrefix:"webkitAnimationEnd",styleProperty:"animation"},animationiteration:{noPrefix:"animationiteration",webkitPrefix:"webkitAnimationIteration",styleProperty:"animation"},transitionend:{noPrefix:"transitionend",webkitPrefix:"webkitTransitionEnd",styleProperty:"transition"}},f={animation:{noPrefix:"animation",webkitPrefix:"-webkit-animation"},transform:{noPrefix:"transform",webkitPrefix:"-webkit-transform"},transition:{noPrefix:"transition",webkitPrefix:"-webkit-transition"}};function r(e,t){if(void 0===(r=e).document||"function"!==typeof r.document.createElement||!((n=t)in c||n in f))return t;var n,r,o,i,s,a=t in c?c:f,u=e.document.createElement("div");return a===c?(s=u,(i=a)[o=t].styleProperty in s.style?i[o].noPrefix:i[o].webkitPrefix):a[t].noPrefix in u.style?a[t].noPrefix:a[t].webkitPrefix}var o=["transform","WebkitTransform","MozTransform","OTransform","MSTransform"];function i(e,t){return r(e,t)}function s(e,t){return r(e,t)}},Aqzh:function(e,t,n){e.exports=function(){"use strict";var f=function(e){return!!(r=e)&&"object"===typeof r&&(t=e,!("[object RegExp]"===(n=Object.prototype.toString.call(t))||"[object Date]"===n||t.$$typeof===o));var t,n,r},o="function"===typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function l(e,t){return!1!==t.clone&&t.isMergeableObject(e)?d((n=e,Array.isArray(n)?[]:{}),e,t):e;var n}function p(e,t,n){return e.concat(t).map(function(e){return l(e,n)})}function d(e,t,n){(n=n||{}).arrayMerge=n.arrayMerge||p,n.isMergeableObject=n.isMergeableObject||f;var r,o,i,s,a=Array.isArray(t),u=Array.isArray(e),c=a===u;return c?a?n.arrayMerge(e,t,n):(r=e,o=t,s={},(i=n).isMergeableObject(r)&&Object.keys(r).forEach(function(e){s[e]=l(r[e],i)}),Object.keys(o).forEach(function(e){i.isMergeableObject(o[e])&&r[e]?s[e]=d(r[e],o[e],i):s[e]=l(o[e],i)}),s):l(t,n)}return d.all=function(e,n){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce(function(e,t){return d(e,t,n)},{})},d}()},"KHd+":function(e,t,n){"use strict";function r(e,t,n,r,o,i,s,a){var u,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(s)},c._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var f=c.render;c.render=function(e,t){return u.call(t),f(e,t)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,u):[u]}return{exports:e,options:c}}n.d(t,"a",function(){return r})},Nsbk:function(t,e){function n(e){return t.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(e)}t.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},QnW2:function(e,t,n){"use strict";var r=/(?:^\[object\s(.*?)\]$)/;t.a=function(e){return Object.prototype.toString.call(e).replace(r,"$1").toLowerCase()}},SBAC:function(e,t,n){"use strict";var r=n("lwsE"),s=n.n(r),o=n("W8MJ"),a=n.n(o),u=n("oLRI"),i=function(){function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;s()(this,i),this.root_=e;for(var n=arguments.length,r=new Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];this.initialize.apply(this,r),this.foundation_=void 0===t?this.getDefaultFoundation():t,this.foundation_.init(),this.initialSyncWithDOM()}return a()(i,null,[{key:"attachTo",value:function(e){return new i(e,new u.a)}}]),a()(i,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(e,t){this.root_.addEventListener(e,t)}},{key:"unlisten",value:function(e,t){this.root_.removeEventListener(e,t)}},{key:"emit",value:function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];"function"===typeof CustomEvent?n=new CustomEvent(e,{detail:t,bubbles:r}):(n=document.createEvent("CustomEvent")).initCustomEvent(e,r,!1,t),this.root_.dispatchEvent(n)}}]),i}();t.a=i},SksO:function(n,e){function r(e,t){return n.exports=r=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},r(e,t)}n.exports=r},W8MJ:function(e,t){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}},a1gu:function(e,t,n){var r=n("cDf5"),o=n("PJYZ");e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?o(e):t}},cDf5:function(t,e){function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e){return"function"===typeof Symbol&&"symbol"===n(Symbol.iterator)?t.exports=r=function(e){return n(e)}:t.exports=r=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(e)}t.exports=r},gVot:function(e,t,n){"use strict";var r=n("Aqzh"),s=n.n(r),a=n("QnW2"),i=function(e){var t=e.componentProps,n=e.propName,r=e.props,o=t[n].default,i=r[n];"object"!==Object(a.a)(o)?t[n].default=i:t[n].default=s()(o,i)},o=function(e){var t=e.componentMixins,n=e.propName,r=e.props;if(t.length)for(var o=t.length;o--;)if(void 0!==t[o].props[n]){i({componentProps:t[o].props,propName:n,props:r});break}};t.a=function(t,n){Object.keys(n).forEach(function(e){t.props?void 0===t.props[e]?o({componentMixins:t.mixins,propName:e,props:n}):i({componentProps:t.props,propName:e,props:n}):o({componentMixins:t.mixins,propName:e,props:n})})}},iri3:function(e,t,n){"use strict";var r=n("kUbF"),o=n("gVot");t.a=function(n){var e={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object(o.a)(n,t),e.component(n.name,n)}};return Object(r.a)(e),e}},kUbF:function(e,t,n){"use strict";(function(n){t.a=function(e){var t=null;"undefined"!==typeof window?t=window.Vue:"undefined"!==typeof n&&(t=n.Vue),t&&t.use(e)}}).call(this,n("yLpj"))},lwsE:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},oLRI:function(e,t,n){"use strict";var r=n("lwsE"),o=n.n(r),i=n("W8MJ"),s=n.n(i),a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o()(this,t),this.adapter_=e}return s()(t,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),s()(t,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),t}();t.a=a},psz7:function(e,t,n){"use strict";n.r(t);var r=n("iri3"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.className,attrs:{role:"progressbar"}},[n("div",{staticClass:"mdc-linear-progress__buffering-dots"}),e._v(" "),n("div",{staticClass:"mdc-linear-progress__buffer"}),e._v(" "),e._m(0),e._v(" "),e._m(1)])};o._withStripped=!0;var i=n("lwsE"),s=n.n(i),a=n("W8MJ"),u=n.n(a),c=n("a1gu"),f=n.n(c),l=n("Nsbk"),p=n.n(l),d=n("7W2i"),y=n.n(d),m=n("SBAC"),_=n("oLRI"),b=n("AM7Y"),h={CLOSED_CLASS:"mdc-linear-progress--closed",INDETERMINATE_CLASS:"mdc-linear-progress--indeterminate",REVERSED_CLASS:"mdc-linear-progress--reversed"},v={PRIMARY_BAR_SELECTOR:".mdc-linear-progress__primary-bar",BUFFER_SELECTOR:".mdc-linear-progress__buffer"},g=function(e){function t(e){return s()(this,t),f()(this,p()(t).call(this,Object.assign(t.defaultAdapter,e)))}return y()(t,e),u()(t,null,[{key:"cssClasses",get:function(){return h}},{key:"strings",get:function(){return v}},{key:"defaultAdapter",get:function(){return{addClass:function(){},getPrimaryBar:function(){},getBuffer:function(){},hasClass:function(){return!1},removeClass:function(){},setStyle:function(){}}}}]),u()(t,[{key:"init",value:function(){this.determinate_=!this.adapter_.hasClass(h.INDETERMINATE_CLASS),this.reverse_=this.adapter_.hasClass(h.REVERSED_CLASS),this.progress_=0}},{key:"setDeterminate",value:function(e){this.determinate_=e,this.determinate_?(this.adapter_.removeClass(h.INDETERMINATE_CLASS),this.setScale_(this.adapter_.getPrimaryBar(),this.progress_)):(this.adapter_.addClass(h.INDETERMINATE_CLASS),this.setScale_(this.adapter_.getPrimaryBar(),1),this.setScale_(this.adapter_.getBuffer(),1))}},{key:"setProgress",value:function(e){this.progress_=e,this.determinate_&&this.setScale_(this.adapter_.getPrimaryBar(),e)}},{key:"setBuffer",value:function(e){this.determinate_&&this.setScale_(this.adapter_.getBuffer(),e)}},{key:"setReverse",value:function(e){this.reverse_=e,this.reverse_?this.adapter_.addClass(h.REVERSED_CLASS):this.adapter_.removeClass(h.REVERSED_CLASS)}},{key:"open",value:function(){this.adapter_.removeClass(h.CLOSED_CLASS)}},{key:"close",value:function(){this.adapter_.addClass(h.CLOSED_CLASS)}},{key:"setScale_",value:function(t,e){var n=this,r="scaleX("+e+")";b.c.forEach(function(e){n.adapter_.setStyle(t,e,r)})}}]),t}(_.a),S=function(e){function t(){return s()(this,t),f()(this,p()(t).apply(this,arguments))}return y()(t,e),u()(t,[{key:"open",value:function(){this.foundation_.open()}},{key:"close",value:function(){this.foundation_.close()}},{key:"getDefaultFoundation",value:function(){var t=this;return new g({addClass:function(e){return t.root_.classList.add(e)},getPrimaryBar:function(){return t.root_.querySelector(g.strings.PRIMARY_BAR_SELECTOR)},getBuffer:function(){return t.root_.querySelector(g.strings.BUFFER_SELECTOR)},hasClass:function(e){return t.root_.classList.contains(e)},removeClass:function(e){return t.root_.classList.remove(e)},setStyle:function(e,t,n){return e.style[t]=n}})}},{key:"determinate",set:function(e){this.foundation_.setDeterminate(e)}},{key:"progress",set:function(e){this.foundation_.setProgress(e)}},{key:"buffer",set:function(e){this.foundation_.setBuffer(e)}},{key:"reverse",set:function(e){this.foundation_.setReverse(e)}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}(m.a),E={MIN:0,MAX:1},k={name:"ui-linear-progress",props:{progress:{type:[Number,String],default:0},buffer:{type:[Number,String],default:0},indeterminate:{type:Boolean,default:!1},reversed:{type:Boolean,default:!1},closed:{type:Boolean,default:!1}},data:function(){return{$linearProgress:null}},computed:{className:function(){return{"mdc-linear-progress":!0,"mdc-linear-progress--indeterminate":this.indeterminate,"mdc-linear-progress--reversed":this.reversed,"mdc-linear-progress--closed":this.closed}}},watch:{progress:function(e){this.setProgress(e)},buffer:function(e){this.setBuffer(e)}},mounted:function(){this.$linearProgress=new S(this.$el),this.setProgress(this.progress),this.$el.dataset.buffer&&this.setBuffer(this.buffer)},methods:{setProgress:function(e){this.$linearProgress&&e>=E.MIN&&e<=E.MAX?this.$linearProgress.progress=+e:console.warn("Progress value should be between [0, 1]")},setBuffer:function(e){this.$linearProgress&&e>=E.MIN&&e<=E.MAX?this.$linearProgress.buffer=+e:console.warn("Buffer value should be between [0, 1]")}}},w=n("KHd+"),P=Object(w.a)(k,o,[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mdc-linear-progress__bar mdc-linear-progress__primary-bar"},[t("span",{staticClass:"mdc-linear-progress__bar-inner"})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"mdc-linear-progress__bar mdc-linear-progress__secondary-bar"},[t("span",{staticClass:"mdc-linear-progress__bar-inner"})])}],!1,null,null,null);P.options.__file="src/scripts/components/progress/linear-progress.vue";var C=P.exports;t.default=Object(r.a)(C)},yLpj:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"===typeof window&&(n=window)}e.exports=n}})});