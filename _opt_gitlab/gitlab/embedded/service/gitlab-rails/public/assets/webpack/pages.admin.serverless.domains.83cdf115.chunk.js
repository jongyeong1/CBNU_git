(this.webpackJsonp=this.webpackJsonp||[]).push([[67],{153:function(t,e,n){"use strict";var i=n(295),s=n(103),r=n(203),a=n(25),o=n(60),c=n.n(o);const l={components:{BButton:i.a,GlIcon:s.a},mixins:[r.a],props:{category:{type:String,required:!1,default:a.q.tertiary,validator:function(t){return Object.keys(a.q).includes(t)}},variant:{type:String,required:!1,default:a.t.default,validator:function(t){return Object.keys(a.t).includes(t)}},size:{type:String,required:!1,default:a.r.medium,validator:function(t){return Object.keys(a.r).includes(t)}},selected:{type:Boolean,required:!1,default:!1},icon:{type:String,required:!1,default:""},label:{type:Boolean,required:!1,default:!1}},computed:{hasIcon:function(){return""!==this.icon},hasIconOnly:function(){return 0===Object.keys(this.$slots).length&&this.hasIcon},buttonClasses:function(){return{"btn-icon":this.hasIconOnly,"button-ellipsis-horizontal":this.hasIconOnly&&"ellipsis_h"===this.icon,"btn-secondary":this.category===a.q.secondary,"new-gl-button":this.variant!==a.t.link,"btn-label":this.label,selected:this.selected}},buttonSize:function(){return a.s[this.size]}}};const u=c()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-button",t._g(t._b({class:t.buttonClasses,attrs:{rel:t.relType,target:t.target,variant:t.variant,size:t.buttonSize}},"b-button",t.$attrs,!1),t.$listeners),[t.hasIcon?n("gl-icon",{attrs:{name:t.icon}}):t._e(),t._v(" "),t._t("emoji"),t._v(" "),t._t("default")],2)},staticRenderFns:[]},void 0,l,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=u},2151:function(t,e,n){n(105),n(274),t.exports=n(2152)},2152:function(t,e,n){"use strict";n.r(e);var i=n(255);document.addEventListener("DOMContentLoaded",(function(){Object(i.a)();var t=document.querySelector(".js-domain-cert-show"),e=document.querySelector(".js-domain-cert-inputs"),n=document.querySelector(".js-domain-cert-replace-btn"),s=document.querySelector(".js-serverless-domain-submit");n&&t&&e&&n.addEventListener("click",(function(){t.classList.add("hidden"),e.classList.remove("hidden"),s.removeAttribute("disabled")}))}))},255:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(42);var i=n(0),s=n.n(i),r=n(1);function a(t){t.find(".js-settings-toggle:not(.js-settings-toggle-trigger-only)").text(Object(r.a)("Collapse")),t.find(".settings-content").off("scroll.expandSection").scrollTop(0),t.addClass("expanded"),t.hasClass("no-animate")||t.addClass("animating").one("animationend.animateSection",(function(){return t.removeClass("animating")}))}function o(t){t.removeClass("no-animate"),t.hasClass("expanded")?function(t){t.find(".js-settings-toggle:not(.js-settings-toggle-trigger-only)").text(Object(r.a)("Expand")),t.find(".settings-content").on("scroll.expandSection",(function(){return a(t)})),t.removeClass("expanded"),t.hasClass("no-animate")||t.addClass("animating").one("animationend.animateSection",(function(){return t.removeClass("animating")}))}(t):a(t)}function c(){if(s()(".settings").each((function(t,e){var n=s()(e);n.on("click.toggleSection",".js-settings-toggle",(function(){return o(n)})),n.hasClass("expanded")||n.find(".settings-content").on("scroll.expandSection",(function(){n.removeClass("no-animate"),a(n)}))})),window.location.hash){var t=s()(window.location.hash);t.length&&t.hasClass("settings")&&a(t)}}},274:function(t,e,n){"use strict";n.r(e);var i={};n.r(i),n.d(i,"requestStatistics",(function(){return w})),n.d(i,"fetchStatistics",(function(){return C})),n.d(i,"receiveStatisticsSuccess",(function(){return k})),n.d(i,"receiveStatisticsError",(function(){return E})),n.d(i,"default",(function(){return T}));var s={};n.r(s),n.d(s,"getStatistics",(function(){return q})),n.d(s,"default",(function(){return A}));n(42);var r=n(0),a=n.n(r),o=n(33);function c(){"file"===a()('input[name="blacklist_type"]:checked').val()?(a()(".blacklist-file").show(),a()(".blacklist-raw").hide()):(a()(".blacklist-file").hide(),a()(".blacklist-raw").show())}var l=n(17),u=(n(24),n(28),n(26),n(50),n(58),n(38),n(27),n(22)),d=n(760),f=n(1),m={forks:Object(f.d)("AdminStatistics|Forks"),issues:Object(f.d)("AdminStatistics|Issues"),mergeRequests:Object(f.d)("AdminStatistics|Merge Requests"),notes:Object(f.d)("AdminStatistics|Notes"),snippets:Object(f.d)("AdminStatistics|Snippets"),sshKeys:Object(f.d)("AdminStatistics|SSH Keys"),milestones:Object(f.d)("AdminStatistics|Milestones"),activeUsers:Object(f.d)("AdminStatistics|Active Users")};function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(Object(n),!0).forEach((function(e){g(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function g(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var h,v={components:{GlLoadingIcon:d.a},data:function(){return{statisticsLabels:m}},computed:p({},Object(u.e)(["isLoading","statistics"]),{},Object(u.d)(["getStatistics"])),mounted:function(){this.fetchStatistics()},methods:p({},Object(u.c)(["fetchStatistics"]))},y=n(4),S=Object(y.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-well"},[n("div",{staticClass:"well-segment admin-well admin-well-statistics"},[n("h4",[t._v(t._s(t.__("Statistics")))]),t._v(" "),t.isLoading?n("gl-loading-icon",{staticClass:"my-3",attrs:{size:"md"}}):t._l(t.getStatistics(t.statisticsLabels),(function(e){return n("p",{key:e.key,staticClass:"js-stats"},[t._v("\n        "+t._s(e.label)+"\n        "),n("span",{staticClass:"light float-right"},[t._v(t._s(e.value))])])}))],2)])}),[],!1,null,null,null).exports,O=n(32),j=n(14),_=n(16),w=function(t){return(0,t.commit)("REQUEST_STATISTICS")},C=function(t){var e=t.dispatch;e("requestStatistics"),O.a.adminStatistics().then((function(t){var n=t.data;e("receiveStatisticsSuccess",Object(_.g)(n,{deep:!0}))})).catch((function(t){return e("receiveStatisticsError",t)}))},k=function(t,e){return(0,t.commit)("RECEIVE_STATISTICS_SUCCESS",e)},E=function(t,e){(0,t.commit)("RECEIVE_STATISTICS_ERROR",e),Object(j.a)(Object(f.d)("AdminDashboard|Error loading the statistics. Please try again"))},T=function(){},q=(n(46),function(t){return function(e){return Object.keys(e).map((function(n){return{key:n,label:e[n],value:t.statistics&&t.statistics[n]?t.statistics[n]:null}}))}}),A=function(){};function I(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var L=(I(h={},"REQUEST_STATISTICS",(function(t){t.isLoading=!0})),I(h,"RECEIVE_STATISTICS_SUCCESS",(function(t,e){t.isLoading=!1,t.error=null,t.statistics=e})),I(h,"RECEIVE_STATISTICS_ERROR",(function(t,e){t.isLoading=!1,t.error=e})),h);l.default.use(u.b);var P=function(t){if(!t)return!1;var e=new u.b.Store({actions:i,getters:s,mutations:L,state:{error:null,isLoading:!1,statistics:null}});return new l.default({el:t,store:e,components:{StatisticsPanelApp:S},render:function(t){return t(S)}})},D=(n(49),n(56),n(78),n(40),n(18),n(68),n(36),n(41),{components:{GlAlert:n(327).a},props:{html:{type:String,required:!1,default:""}},data:function(){return{isDismissed:!1}},methods:{dismiss:function(){this.isDismissed=!0}}}),x=Object(y.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isDismissed?t._e():n("gl-alert",t._g(t._b({on:{dismiss:t.dismiss}},"gl-alert",t.$attrs,!1),t.$listeners),[n("div",{domProps:{innerHTML:t._s(t.html)}})])}),[],!1,null,null,null).exports;function B(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function R(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var z=function(t){var e={html:t.innerHTML},n=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?R(Object(n),!0).forEach((function(e){$(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}({},t.dataset,{dismissible:Object(_.F)(t.dataset.dismissible)});return new l.default({el:t,render:function(t){return t(x,{props:e,attrs:n})}})};document.addEventListener("DOMContentLoaded",(function(){return B(document.querySelectorAll(".js-vue-alert")).map(z)})),document.addEventListener("DOMContentLoaded",(function(){var t,e=document.getElementById("js-admin-statistics-container");t=a()(".change-owner-holder"),a()("input#user_force_random_password").on("change",(function(){var t=a()("#user_password, #user_password_confirmation");a()(this).attr("checked")?t.val("").prop("disabled",!0):t.prop("disabled",!1)})),a()("body").on("click",".js-toggle-colors-link",(function(t){t.preventDefault(),a()(".js-toggle-colors-container").toggleClass("hide")})),a()(".log-tabs a").on("click",(function(t){t.preventDefault(),a()(this).tab("show")})),a()(".log-bottom").on("click",(function(t){t.preventDefault();var e=a()(".file-content:visible");e.animate({scrollTop:e.find("ol").height()},"fast")})),a()(".change-owner-link").on("click",(function(e){e.preventDefault(),a()(this).hide(),t.show()})),a()(".change-owner-cancel-link").on("click",(function(e){e.preventDefault(),t.hide(),a()(".change-owner-link").show()})),a()("li.project_member, li.group_member").on("ajax:success",o.l),a()("input[name='blacklist_type']").on("click",c),c(),P(e)}))},327:function(t,e,n){"use strict";var i=n(103),s=n(153),r=n(25),a=n(60),o=n.n(a);function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),i.forEach((function(e){c(t,e,n[e])}))}return t}const u={components:{GlIcon:i.a,GlNewButton:s.a},props:{title:{type:String,required:!1,default:""},dismissible:{type:Boolean,required:!1,default:!0},dismissLabel:{type:String,required:!1,default:"Dismiss"},variant:{type:String,required:!1,default:r.c.info,validator:function(t){return Object.keys(r.c).includes(t)}},primaryButtonLink:{type:String,required:!1,default:""},primaryButtonText:{type:String,required:!1,default:""},secondaryButtonLink:{type:String,required:!1,default:""},secondaryButtonText:{type:String,required:!1,default:""}},computed:{iconName:function(){return r.b[this.variant]},shouldRenderActions:function(){return Boolean(this.$slots.actions||this.actionButtons.length)},actionButtons:function(){return[{text:this.primaryButtonText,attrs:{href:this.primaryButtonLink,variant:r.a[this.variant].primary,category:r.q.primary},listeners:{click:this.primaryButtonClicked}},{text:this.secondaryButtonText,attrs:{href:this.secondaryButtonLink,variant:r.a[this.variant].secondary,category:r.q.secondary},listeners:{click:this.secondaryButtonClicked}}].reduce((function(t,e){if(!e.text)return t;var n=l({},e.attrs);return n.href||delete n.href,t.push(l({},e,{attrs:n})),t}),[])},variantClass:function(){return"gl-alert-".concat(this.variant)}},methods:{primaryButtonClicked:function(t){this.$emit("primaryAction",t)},secondaryButtonClicked:function(t){this.$emit("secondaryAction",t)},onDismiss:function(){this.$emit("dismiss")}}};const d=o()({render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["gl-alert",t.variantClass],attrs:{role:"alert"}},[n("gl-icon",{class:{"gl-alert-icon":!0,"gl-alert-icon-no-title":!t.title},attrs:{name:t.iconName}}),t._v(" "),t.dismissible?n("button",{ref:"dismiss",staticClass:"gl-alert-dismiss",attrs:{type:"button","aria-label":t.dismissLabel},on:{click:t.onDismiss}},[n("gl-icon",{attrs:{name:"close"}})],1):t._e(),t._v(" "),t.title?n("h4",{staticClass:"gl-alert-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"gl-alert-body"},[t._t("default")],2),t._v(" "),t.shouldRenderActions?n("div",{staticClass:"gl-alert-actions"},[t._t("actions",t._l(t.actionButtons,(function(e,i){return n("gl-new-button",t._g(t._b({key:i,staticClass:"gl-alert-action"},"gl-new-button",e.attrs,!1),e.listeners),[t._v("\n        "+t._s(e.text)+"\n      ")])})))],2):t._e()],1)},staticRenderFns:[]},void 0,u,void 0,!1,void 0,!1,void 0,void 0,void 0);e.a=d}},[[2151,1,0]]]);
//# sourceMappingURL=pages.admin.serverless.domains.83cdf115.chunk.js.map