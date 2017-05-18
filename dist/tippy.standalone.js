!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("popper.js")):"function"==typeof define&&define.amd?define(["popper.js"],t):e.Tippy=t(e.Popper)}(this,function(e){"use strict";function t(){x.touchUser=!0,/(iPad|iPhone|iPod)/g.test(navigator.userAgent)&&!window.MSStream&&document.body.classList.add("tippy-touch"),document.removeEventListener("touchstart",t)}function n(e){var t=o(e.target,I.el),n=o(e.target,I.popper);if(n){if(a(M.refs,function(e){return e.popper===n}).settings.interactive)return}if(t){var i=a(M.refs,function(e){return e.el===t}),r=i.popper,s=i.settings,l=s.hideOnClick,c=s.multiple,u=s.trigger;if(!0!==l||x.touchUser||clearTimeout(r.getAttribute("data-delay")),!c&&x.touchUser||!c&&-1!==u.indexOf("click"))return A(i);if(!0!==l||-1!==u.indexOf("click"))return}!o(e.target,I.controller)&&document.body.querySelector(I.popper)&&A()}function i(e){for(var t=[!1,"webkit"],n=e.charAt(0).toUpperCase()+e.slice(1),i=0;i<t.length;i++){var r=t[i],o=r?""+r+n:e;if(void 0!==window.document.body.style[o])return o}return null}function r(e){return e.replace(/-.+/,"")}function o(e,t){return Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;--n>=0&&t.item(n)!==this;);return n>-1}),Element.prototype.closest||(Element.prototype.closest=function(e){for(var t=this;t;){if(t.matches(e))return t;t=t.parentElement}}),e.closest(t)}function a(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function s(t){var n=t.settings,o=n.position,a=n.popperOptions,s=n.offset,l=n.distance,c=t.el,u=t.popper,p=u.querySelector(I.tooltip),d=S({placement:o},a||{},{modifiers:S({},a?a.modifiers:{},{flip:S({padding:parseInt(l)+5},a&&a.modifiers?a.modifiers.flip:{}),offset:S({offset:parseInt(s)},a&&a.modifiers?a.modifiers.offset:{})}),onUpdate:function(){u.style[i("transitionDuration")]="",p.style.top="",p.style.bottom="",p.style.left="",p.style.right="",p.style[r(u.getAttribute("x-placement"))]=-(l-C.distance)+"px"}});return new e(c,u,d)}function l(e,t,n){var i=n.position,o=n.distance,a=n.arrow,s=n.animateFill,l=n.inertia,c=n.animation,u=n.arrowSize,p=n.size,d=n.theme,f=n.html,h=document.createElement("div");h.setAttribute("class","tippy-popper"),h.setAttribute("role","tooltip"),h.setAttribute("aria-hidden","true"),h.setAttribute("id","tippy-tooltip-"+e);var m=document.createElement("div");if(m.setAttribute("class","tippy-tooltip tippy-tooltip--"+p+" "+d+"-theme leave"),m.setAttribute("data-animation",c),a){var v=document.createElement("div");v.setAttribute("class","arrow-"+u),v.setAttribute("x-arrow",""),m.appendChild(v)}if(s){m.setAttribute("data-animatefill","");var y=document.createElement("div");y.setAttribute("class","leave"),y.setAttribute("x-circle",""),m.appendChild(y)}l&&m.setAttribute("data-inertia","");var g=document.createElement("div");if(g.setAttribute("class","tippy-tooltip-content"),f){var b=void 0;f instanceof Element?(g.innerHTML=f.innerHTML,b=f.id||"tippy-html-template"):(g.innerHTML=document.getElementById(f.replace("#","")).innerHTML,b=f),h.classList.add("html-template"),h.setAttribute("tabindex","0"),m.setAttribute("data-template-id",b)}else g.innerHTML=t;return m.style[r(i)]=-(o-C.distance)+"px",m.appendChild(g),h.appendChild(m),h}function c(e,t,n){var i=[];return"manual"===e?i:(t.addEventListener(e,n.handleTrigger),i.push({event:e,handler:n.handleTrigger}),"mouseenter"===e&&(t.addEventListener("mouseleave",n.handleMouseleave),i.push({event:"mouseleave",handler:n.handleMouseleave})),"focus"===e&&(t.addEventListener("blur",n.handleBlur),i.push({event:"blur",handler:n.handleBlur})),i)}function u(e){M.refs.push(e)}function p(e){var t=e.title;e.setAttribute("data-original-title",t||"html"),e.removeAttribute("title")}function d(e){var t=e.getBoundingClientRect();return t.top>=0&&t.left>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&t.right<=(window.innerWidth||document.documentElement.clientWidth)}function f(e){var t=this,n=a(M.refs,function(e){return e.el===t}),o=n.popper,s=r(o.getAttribute("x-placement")),l=Math.round(o.offsetWidth/2),c=Math.round(o.offsetHeight/2),u=document.documentElement.offsetWidth||document.body.offsetWidth,p=e.pageX,d=e.pageY,f=void 0,h=void 0;"top"===s?(f=p-l,h=d-2.5*c):"left"===s?(f=p-2*l-15,h=d-c):"right"===s?(f=p+c,h=d-c):"bottom"===s&&(f=p-l,h=d+c/1.5),"top"!==s&&"bottom"!==s||(p+5+l>u?f=u-5-2*l:p-5-l<0&&(f=5)),o.style[i("transform")]="translate3d("+f+"px, "+h+"px, 0)"}function h(e,t){t?window.getComputedStyle(t)[i("transform")]:window.getComputedStyle(e).opacity}function m(e,t){e.forEach(function(e){e&&t(e.classList)})}function v(e,t){e.forEach(function(e){e&&(e.hasAttribute("x-circle")&&(t/=1.1),e.style[i("transitionDuration")]=t+"ms")})}function y(e,t){setTimeout(function(){var n=e.settings.position!==e.popper.getAttribute("x-placement");!e.flipped&&n?(e.flipped=!0,t()):e.flipped&&!n&&(e.flipped=!1,t())},0)}function g(e,t,n){var i=e.popper.querySelector(I.tooltip),r=!1,o=function e(t){t.target===i&&(r=!0,i.removeEventListener("webkitTransitionEnd",e),i.removeEventListener("transitionend",e),n())};i.addEventListener("webkitTransitionEnd",o),i.addEventListener("transitionend",o),clearTimeout(e.transitionendTimeout),e.transitionendTimeout=setTimeout(function(){r||n()},t)}function b(e,t){var n=e.style.visibility;return"show"===t?"visible"===n:"hidden"===n}function w(e){var t=e.el,n=(e.popper,e.settings.followCursor);document.body.appendChild(e.popper),e.popperInstance?(e.popperInstance.update(),n||e.popperInstance.enableEventListeners()):(e.popperInstance=s(e),n&&!x.touchUser&&(t.addEventListener("mousemove",f),e.popperInstance.disableEventListeners()))}function E(e){var t=e.popper,n=e.popperInstance,r=e.settings.stickyDuration,o=function(){return t.style[i("transitionDuration")]=r+"ms"},a=function(){return t.style[i("transitionDuration")]=""},s=function t(){n&&n.scheduleUpdate(),o();var i=!e.hidden;window.requestAnimationFrame?i?window.requestAnimationFrame(t):(window.cancelAnimationFrame(t),a()):i?setTimeout(t,20):a()};setTimeout(s,0)}function A(e){M.refs.forEach(function(t){var n=t.popper,i=t.tippyInstance,r=t.settings,o=r.hideOnClick,a=r.hideDuration,s=r.trigger;if(document.body.contains(n)){var l=!0===o||-1!==s.indexOf("focus"),c=!e||n!==e.popper;l&&c&&i.hide(n,a)}})}function L(e){return e instanceof Element?[e]:[].slice.call(document.querySelectorAll(e))}e="default"in e?e.default:e;var T=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},k=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},x={touchUser:!1,idCounter:0},M={refs:[]},C={html:!1,position:"top",animation:"shift",animateFill:!0,arrow:!1,arrowSize:"regular",delay:0,hideDelay:0,trigger:"mouseenter focus",duration:375,hideDuration:375,interactive:!1,theme:"dark",size:"regular",distance:10,offset:0,hideOnClick:!0,multiple:!1,followCursor:!1,inertia:!1,transitionFlip:!0,sticky:!1,stickyDuration:200,popperOptions:{}},O=Object.keys(C),I={popper:".tippy-popper",tooltip:".tippy-tooltip",content:".tippy-tooltip-content",circle:"[x-circle]",arrow:"[x-arrow]",el:"[data-tooltipped]",controller:"[data-tippy-controller]"},H=!("addEventListener"in window)||/MSIE 9/i.test(navigator.userAgent)||window.operamini;return document.addEventListener&&(document.addEventListener("click",n),document.addEventListener("touchstart",t)),function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(T(this,e),!H){this.selector=t,this.settings=S(JSON.parse(JSON.stringify(C)),n),this.callbacks={wait:n.wait,beforeShown:n.beforeShown||new Function,shown:n.shown||new Function,beforeHidden:n.beforeHidden||new Function,hidden:n.hidden||new Function};var i=L(t);this._createTooltips(i)}}return k(e,[{key:"_applyIndividualSettings",value:function(e){var t=this,n={};return O.forEach(function(i){var r=e.getAttribute("data-"+i.toLowerCase())||t.settings[i];"false"===r&&(r=!1),n[i]=r}),n.arrow&&(n.animateFill=!1),S({},this.settings,n)}},{key:"_getEventListenerHandlers",value:function(e,t,n){var i=this,r=n.delay,a=n.hideDelay,s=n.hideDuration,l=n.duration,c=n.interactive,u=n.hideOnClick,p=n.trigger,d=function(){clearTimeout(t.getAttribute("data-delay")),clearTimeout(t.getAttribute("data-hidedelay"))},f=function(){if(d(),"visible"!==t.style.visibility)if(r){var e=setTimeout(function(){return i.show(t,l)},r);t.setAttribute("data-delay",e)}else i.show(t,l)},h=function(e){return i.callbacks.wait?i.callbacks.wait(f,e):f()},m=function(){if(d(),a){var e=setTimeout(function(){return i.hide(t,s)},a);t.setAttribute("data-hidedelay",e)}else i.hide(t,s)};return{handleTrigger:function(e){var n="click"===e.type,i="visible"===t.style.visibility,r="persistent"!==u;n&&i&&r?m():h(e)},handleMouseleave:function(n){if(c){var i=function n(i){var r=o(i.target,I.popper)===t,a=o(i.target,I.el)===e,s=-1!==p.indexOf("click");if(!(r||a||s)){var l=t.getBoundingClientRect();Math.abs(i.clientY-l.bottom)>=2&&Math.abs(i.clientY-l.top)>=2&&Math.abs(i.clientX-l.left)>=2&&Math.abs(i.clientX-l.right)>=2&&(document.removeEventListener("mousemove",n),m())}};return document.addEventListener("mousemove",i)}m()},handleBlur:function(e){!x.touchUser&&e.relatedTarget&&(o(e.relatedTarget,I.popper)||m())}}}},{key:"_createTooltips",value:function(t){var n=this;t.forEach(function(e){var t=n._applyIndividualSettings(e),i=t.html,r=t.trigger,o=e.title;if(o||i){var a=x.idCounter;e.setAttribute("data-tooltipped",""),e.setAttribute("aria-describedby","tippy-tooltip-"+a),p(e);var s=l(a,o,t),d=n._getEventListenerHandlers(e,s,t),f=[];r.trim().split(" ").forEach(function(t){return f=f.concat(c(t,e,d))}),u({id:a,el:e,popper:s,settings:t,listeners:f,tippyInstance:n}),x.idCounter++}}),e.store=M}},{key:"getPopperElement",value:function(e){try{return a(M.refs,function(t){return t.el===e}).popper}catch(e){throw new Error("[Tippy error]: Element does not exist in any Tippy instances")}}},{key:"getTooltippedElement",value:function(e){try{return a(M.refs,function(t){return t.popper===e}).el}catch(e){throw new Error("[Tippy error]: Popper does not exist in any Tippy instances")}}},{key:"show",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.duration,i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=a(M.refs,function(t){return t.popper===e}),o=e.querySelector(I.tooltip),s=e.querySelector(I.circle);i&&(this.callbacks.beforeShown(),y(r,function(){t.hide(e,0,!1),setTimeout(function(){r.hidden||t.show(e,n,!1)},0)})),r.hidden=!1,e.style.visibility="visible",e.setAttribute("aria-hidden","false"),r.settings.interactive&&r.el.classList.add("active"),!document.body.contains(e)&&w(r),r.settings.sticky&&E(r),h(o,s),m([o,s],function(e){e.remove("leave"),e.add("enter")}),v([o,s],n),g(r,n,function(){b(e,"show")&&!r.onShownFired&&(!r.settings.transitionFlip&&o.classList.add("tippy-notransition"),r.settings.interactive&&e.focus(),r.onShownFired=!0,i&&t.callbacks.shown())})}},{key:"hide",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.settings.duration,r=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=a(M.refs,function(t){return t.popper===e}),s=e.querySelector(I.tooltip),l=e.querySelector(I.circle);e.querySelector(I.content);r&&(this.callbacks.beforeHidden(),o.el.classList.remove("active"),o.onShownFired=!1,o.flipped=o.settings.position!==e.getAttribute("x-placement"),o.hidden=!0,!o.settings.transitionFlip&&s.classList.remove("tippy-notransition")),e.style.visibility="hidden",e.setAttribute("aria-hidden","true"),n===C.hideDuration?n=parseInt(s.style[i("transitionDuration")]):v([s,l],n),m([s,l],function(e){e.remove("enter"),e.add("leave")}),o.settings.html&&-1!==o.settings.trigger.indexOf("click")&&d(o.el)&&o.el.focus(),g(o,n,function(){b(e,"hide")&&document.body.contains(e)&&(o.popperInstance.disableEventListeners(),o.flipped=o.settings.position!==e.getAttribute("x-placement"),document.body.removeChild(e),r&&t.callbacks.hidden())})}},{key:"destroy",value:function(e){var t=a(M.refs,function(t){return t.popper===e}),n=t.el,i=t.popperInstance;t.listeners.forEach(function(e){return n.removeEventListener(e.event,e.handler)}),n.removeAttribute("data-tooltipped"),n.removeAttribute("aria-describedby"),i&&i.destroy(),M.refs.splice(M.refs.map(function(e){return e.popper}).indexOf(e),1)}},{key:"update",value:function(e){var t=a(M.refs,function(t){return t.popper===e}),n=e.querySelector(I.content),i=t.el,r=t.settings.html;r?n.innerHTML=r instanceof Element?r.innerHTML:document.getElementById(r.replace("#","")).innerHTML:(n.innerHTML=i.title||i.getAttribute("data-original-title"),p(i))}}]),e}()});
