(this.webpackJsonp=this.webpackJsonp||[]).push([[10],{259:function(t,e,n){"use strict";n(24),n(49),n(56),n(26),n(78),n(40),n(69),n(145),n(18),n(68),n(36),n(27),n(41),n(90),n(30),n(65),n(46),n(55),n(91),n(67);var i=n(20),r=/\{\{(.+?)\}\}/g,o={toCamelCase:function(t){return this.camelize(t.split("-").slice(1).join(" "))},template:function(t,e){var n=Object(i.template)(t,{escape:r});return n(e)},camelize:function(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,(function(t,e){return 0===e?t.toLowerCase():t.toUpperCase()})).replace(/\s+/g,"")},closest:function(t,e){for(;t&&t.tagName!==e&&"HTML"!==t.tagName;)t=t.parentNode;return t},isDropDownParts:function(t){return!(!t||!t.hasAttribute||"HTML"===t.tagName)&&(t.hasAttribute("data-dropdown-trigger")||t.hasAttribute("data-dropdown"))}};function s(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function a(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var u=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.currentIndex=0,this.hidden=!0,this.list="string"==typeof e?document.querySelector(e):e,this.items=[],this.eventWrapper={},this.hideOnClick=!1!==n.hideOnClick,n.addActiveClassToDropdownButton&&(this.dropdownToggle=this.list.parentNode.querySelector(".js-dropdown-toggle")),this.getItems(),this.initTemplateString(),this.addEvents(),this.initialState=e.innerHTML}var e,n,i;return e=t,i=[{key:"setImagesSrc",value:function(t){s(t.querySelectorAll("img[data-src]")).forEach((function(t){var e=t;e.src=e.getAttribute("data-src"),e.removeAttribute("data-src")}))}}],(n=[{key:"getItems",value:function(){return this.items=[].slice.call(this.list.querySelectorAll("li")),this.items}},{key:"initTemplateString",value:function(){var t=this.items||this.getItems(),e="";return t.length>0&&(e=t[t.length-1].outerHTML),this.templateString=e,this.templateString}},{key:"clickEvent",value:function(t){if("UL"!==t.target.tagName&&!t.target.closest(".".concat("droplab-item-ignore"))){var e=t.target.closest("li");if(e){this.addSelectedClass(e),t.preventDefault(),this.hideOnClick&&this.hide();var n=new CustomEvent("click.dl",{detail:{list:this,selected:e,data:t.target.dataset}});this.list.dispatchEvent(n)}}}},{key:"addSelectedClass",value:function(t){this.removeSelectedClasses(),t.classList.add("droplab-item-selected")}},{key:"removeSelectedClasses",value:function(){(this.items||this.getItems()).forEach((function(t){return t.classList.remove("droplab-item-selected")}))}},{key:"addEvents",value:function(){this.eventWrapper.clickEvent=this.clickEvent.bind(this),this.eventWrapper.closeDropdown=this.closeDropdown.bind(this),this.list.addEventListener("click",this.eventWrapper.clickEvent),this.list.addEventListener("keyup",this.eventWrapper.closeDropdown)}},{key:"closeDropdown",value:function(t){return 27!==t.keyCode||(t.preventDefault(),this.toggle())}},{key:"setData",value:function(t){this.data=t,this.render(t)}},{key:"addData",value:function(t){this.data=(this.data||[]).concat(t),this.render(this.data)}},{key:"render",value:function(t){var e=t?t.map(this.renderChildren.bind(this)):[];if(!this.list.querySelector(".filter-dropdown-loading")){(this.list.querySelector("ul[data-dynamic]")||this.list).innerHTML=e.join("");var n=new CustomEvent("render.dl",{detail:{list:this}});this.list.dispatchEvent(n)}}},{key:"renderChildren",value:function(e){var n=o.template(this.templateString,e),i=document.createElement("div");return i.innerHTML=n,t.setImagesSrc(i),i.firstChild.style.display=e.droplab_hidden?"none":"block",i.firstChild.outerHTML}},{key:"show",value:function(){this.hidden&&(this.list.style.display="block",this.currentIndex=0,this.hidden=!1,this.dropdownToggle&&this.dropdownToggle.classList.add("active"))}},{key:"hide",value:function(){this.hidden||(this.list.style.display="none",this.currentIndex=0,this.hidden=!0,this.dropdownToggle&&this.dropdownToggle.classList.remove("active"))}},{key:"toggle",value:function(){return this.hidden?this.show():this.hide()}},{key:"destroy",value:function(){this.hide(),this.list.removeEventListener("click",this.eventWrapper.clickEvent),this.list.removeEventListener("keyup",this.eventWrapper.closeDropdown)}}])&&a(e.prototype,n),i&&a(e,i),t}();var l=function t(e,n,i,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.trigger=e,this.list=new u(n,r),this.type="Hook",this.event="click",this.plugins=i||[],this.config=r||{},this.id=e.id};function c(t){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function d(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function h(t,e){return!e||"object"!==c(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function p(t,e){return(p=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var f=function(t){function e(t,n,i,r){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(o=h(this,v(e).call(this,t,n,i,r))).type="button",o.event="click",o.eventWrapper={},o.addEvents(),o.addPlugins(),o}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&p(t,e)}(e,t),n=e,(i=[{key:"addPlugins",value:function(){var t=this;this.plugins.forEach((function(e){return e.init(t)}))}},{key:"clicked",value:function(t){var e=new CustomEvent("click.dl",{detail:{hook:this},bubbles:!0,cancelable:!0});t.target.dispatchEvent(e),this.list.toggle()}},{key:"addEvents",value:function(){this.eventWrapper.clicked=this.clicked.bind(this),this.trigger.addEventListener("click",this.eventWrapper.clicked)}},{key:"removeEvents",value:function(){this.trigger.removeEventListener("click",this.eventWrapper.clicked)}},{key:"restoreInitialState",value:function(){this.list.list.innerHTML=this.list.initialState}},{key:"removePlugins",value:function(){this.plugins.forEach((function(t){return t.destroy()}))}},{key:"destroy",value:function(){this.restoreInitialState(),this.removeEvents(),this.removePlugins()}}])&&d(n.prototype,i),r&&d(n,r),e}(l);function y(t){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function g(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function k(t,e){return!e||"object"!==y(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function m(t){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var w=function(t){function e(t,n,i,r){var o;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(o=k(this,m(e).call(this,t,n,i,r))).type="input",o.event="input",o.eventWrapper={},o.addEvents(),o.addPlugins(),o}var n,i,r;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,t),n=e,(i=[{key:"addPlugins",value:function(){var t=this;this.plugins.forEach((function(e){return e.init(t)}))}},{key:"addEvents",value:function(){this.eventWrapper.mousedown=this.mousedown.bind(this),this.eventWrapper.input=this.input.bind(this),this.eventWrapper.keyup=this.keyup.bind(this),this.eventWrapper.keydown=this.keydown.bind(this),this.trigger.addEventListener("mousedown",this.eventWrapper.mousedown),this.trigger.addEventListener("input",this.eventWrapper.input),this.trigger.addEventListener("keyup",this.eventWrapper.keyup),this.trigger.addEventListener("keydown",this.eventWrapper.keydown)}},{key:"removeEvents",value:function(){this.hasRemovedEvents=!0,this.trigger.removeEventListener("mousedown",this.eventWrapper.mousedown),this.trigger.removeEventListener("input",this.eventWrapper.input),this.trigger.removeEventListener("keyup",this.eventWrapper.keyup),this.trigger.removeEventListener("keydown",this.eventWrapper.keydown)}},{key:"input",value:function(t){if(!this.hasRemovedEvents){this.list.show();var e=new CustomEvent("input.dl",{detail:{hook:this,text:t.target.value},bubbles:!0,cancelable:!0});t.target.dispatchEvent(e)}}},{key:"mousedown",value:function(t){if(!this.hasRemovedEvents){var e=new CustomEvent("mousedown.dl",{detail:{hook:this,text:t.target.value},bubbles:!0,cancelable:!0});t.target.dispatchEvent(e)}}},{key:"keyup",value:function(t){this.hasRemovedEvents||this.keyEvent(t,"keyup.dl")}},{key:"keydown",value:function(t){this.hasRemovedEvents||this.keyEvent(t,"keydown.dl")}},{key:"keyEvent",value:function(t,e){this.list.show();var n=new CustomEvent(e,{detail:{hook:this,text:t.target.value,which:t.which,key:t.key},bubbles:!0,cancelable:!0});t.target.dispatchEvent(n)}},{key:"restoreInitialState",value:function(){this.list.list.innerHTML=this.list.initialState}},{key:"removePlugins",value:function(){this.plugins.forEach((function(t){return t.destroy()}))}},{key:"destroy",value:function(){this.restoreInitialState(),this.removeEvents(),this.removePlugins(),this.list.destroy()}}])&&g(n.prototype,i),r&&g(n,r),e}(l),E=function(){var t,e=!1,n=!1,i=function(t){for(var e=Array.prototype.slice.call(t.list.querySelectorAll("li:not(.divider):not(.hidden)"),0),n=[],i=0;i<e.length;i++){var r=e[i];r.classList.remove("droplab-item-active"),"none"!==r.style.display&&n.push(r)}return n},r=function(t){var e=i(t)[t.currentIndex-1],n=new CustomEvent("click.dl",{detail:{list:t,selected:e,data:e.dataset}});t.list.dispatchEvent(n),t.hide()};document.addEventListener("mousedown.dl",(function(t){var r=t.detail.hook.list;i(r),r.show(),r.currentIndex=0,e=!1,n=!1})),document.addEventListener("keydown.dl",(function(o){o.target;var s=o.detail.hook.list,a=s.currentIndex;if(e=!1,n=!1,o.detail.which){if(13===(t=o.detail.which))return void r(o.detail.hook.list);38===t&&(e=!0),40===t&&(n=!0)}else if(o.detail.key){if("Enter"===(t=o.detail.key))return void r(o.detail.hook.list);"ArrowUp"===t&&(e=!0),"ArrowDown"===t&&(n=!0)}e&&a--,n&&a++,a<0&&(a=0),s.currentIndex=a,function(t){var e=i(t);if(t.currentIndex>0&&(e[t.currentIndex-1]||(t.currentIndex=t.currentIndex-1),e[t.currentIndex-1])){var n=e[t.currentIndex-1],r=n.closest(".filter-dropdown");if(n.classList.add("droplab-item-active"),r){var o=r.offsetHeight,s=n.offsetTop-30;s>o&&(r.scrollTop=s-o)}}}(o.detail.hook.list)}))};function S(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function C(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var L=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.ready=!1,this.hooks=[],this.queuedData=[],this.config={},this.eventWrapper={}}var e,n,i;return e=t,(n=[{key:"loadStatic",value:function(){var t=[].slice.apply(document.querySelectorAll("[".concat("data-dropdown-trigger","]")));this.addHooks(t)}},{key:"addData",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.applyArgs(e,"processAddData")}},{key:"setData",value:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];this.applyArgs(e,"processSetData")}},{key:"destroy",value:function(){this.hooks.forEach((function(t){return t.destroy()})),this.hooks=[],this.removeEvents()}},{key:"applyArgs",value:function(t,e){return this.ready?this[e].apply(this,S(t)):(this.queuedData=this.queuedData||[],this.queuedData.push(t),this.ready)}},{key:"processAddData",value:function(t,e){this.processData(t,e,"addData")}},{key:"processSetData",value:function(t,e){this.processData(t,e,"setData")}},{key:"processData",value:function(t,e,n){this.hooks.forEach((function(i){Array.isArray(t)&&i.list[n](t),i.trigger.id===t&&i.list[n](e)}))}},{key:"addEvents",value:function(){this.eventWrapper.documentClicked=this.documentClicked.bind(this),document.addEventListener("mousedown",this.eventWrapper.documentClicked)}},{key:"documentClicked",value:function(t){var e=t.target;"UL"!==e.tagName&&(e=o.closest(e,"UL")),o.isDropDownParts(e,this.hooks)||o.isDropDownParts(t.target,this.hooks)||this.hooks.forEach((function(t){return t.list.hide()}))}},{key:"removeEvents",value:function(){document.removeEventListener("mousedown",this.eventWrapper.documentClicked)}},{key:"changeHookList",value:function(t,e,n,i){var r=this,o="string"==typeof t?document.getElementById(t):t;this.hooks.forEach((function(t,s){var a=t;a.list.list.dataset.dropdownActive=!1,a.trigger===o&&(a.destroy(),r.hooks.splice(s,1),r.addHook(o,e,n,i))}))}},{key:"addHook",value:function(t,e,n,i){var r,s="string"==typeof t?document.querySelector(t):t;(r="string"==typeof e?document.querySelector(e):e instanceof Element?e:document.querySelector(t.dataset[o.toCamelCase("data-dropdown-trigger")])).dataset.dropdownActive=!0;var a="INPUT"===s.tagName?w:f;return this.hooks.push(new a(s,r,n,i)),this}},{key:"addHooks",value:function(t,e,n){var i=this;return t.forEach((function(t){return i.addHook(t,null,e,n)})),this}},{key:"setConfig",value:function(t){this.config=t}},{key:"fireReady",value:function(){var t=new CustomEvent("ready.dl",{detail:{dropdown:this}});document.dispatchEvent(t),this.ready=!0}},{key:"init",value:function(t,e,n,i){var r=this;return t?this.addHook(t,e,n,i):this.loadStatic(),this.addEvents(),E(),this.fireReady(),this.queuedData.forEach((function(t){return r.addData(t)})),this.queuedData=[],this}}])&&C(e.prototype,n),i&&C(e,i),t}();e.a=L}}]);
//# sourceMappingURL=commons~pages.admin.runners~pages.dashboard.issues~pages.dashboard.merge_requests~pages.groups.detai~130f2dac.ea891c8a.chunk.js.map