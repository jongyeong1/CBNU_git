(this.webpackJsonp=this.webpackJsonp||[]).push([[243],{304:function(t,e,r){"use strict";r(104);var s=r(0),n=r.n(s),a=["danger","primary","success","warning"],i=["sm","md","lg","xl"],o={name:"DeprecatedModal2",props:{id:{type:String,required:!1,default:null},modalSize:{type:String,required:!1,default:"md",validator:function(t){return i.includes(t)}},headerTitleText:{type:String,required:!1,default:""},footerPrimaryButtonVariant:{type:String,required:!1,default:"primary",validator:function(t){return a.includes(t)}},footerPrimaryButtonText:{type:String,required:!1,default:""}},computed:{modalSizeClass:function(){return"md"===this.modalSize?"":"modal-".concat(this.modalSize)}},mounted:function(){n()(this.$el).on("shown.bs.modal",this.opened).on("hidden.bs.modal",this.closed)},beforeDestroy:function(){n()(this.$el).off("shown.bs.modal",this.opened).off("hidden.bs.modal",this.closed)},methods:{emitCancel:function(t){this.$emit("cancel",t)},emitSubmit:function(t){this.$emit("submit",t)},opened:function(){this.$emit("open")},closed:function(){this.$emit("closed")}}},u=r(4),l=Object(u.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"modal fade",attrs:{id:t.id,tabindex:"-1",role:"dialog"}},[r("div",{staticClass:"modal-dialog",class:t.modalSizeClass,attrs:{role:"document"}},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[t._t("header",[r("h4",{staticClass:"modal-title"},[t._t("title",[t._v(" "+t._s(t.headerTitleText)+" ")])],2),t._v(" "),r("button",{staticClass:"close js-modal-close-action",attrs:{"aria-label":t.s__("Modal|Close"),type:"button","data-dismiss":"modal"},on:{click:function(e){return t.emitCancel(e)}}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])],2),t._v(" "),r("div",{staticClass:"modal-body"},[t._t("default")],2),t._v(" "),r("div",{staticClass:"modal-footer"},[t._t("footer",[r("button",{staticClass:"btn js-modal-cancel-action qa-modal-cancel-button",attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.emitCancel(e)}}},[t._v("\n            "+t._s(t.s__("Modal|Cancel"))+"\n          ")]),t._v(" "),r("button",{staticClass:"btn js-modal-primary-action qa-modal-primary-button",class:"btn-"+t.footerPrimaryButtonVariant,attrs:{type:"button","data-dismiss":"modal"},on:{click:function(e){return t.emitSubmit(e)}}},[t._v("\n            "+t._s(t.footerPrimaryButtonText)+"\n          ")])])],2)])])])}),[],!1,null,null,null);e.a=l.exports},3243:function(t,e,r){"use strict";r.r(e);r(30),r(40),r(18),r(36),r(41),r(999);var s=r(447),n={data:function(){return{inputEnabled:!1,urlOrRequestId:""}},methods:{toggleInput:function(){this.inputEnabled=!this.inputEnabled},addRequest:function(){this.$emit("add-request",this.urlOrRequestId),this.clearForm()},clearForm:function(){this.urlOrRequestId="",this.toggleInput()}}},a=r(4),i=Object(a.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"view",attrs:{id:"peek-view-add-request"}},[r("form",{staticClass:"form-inline",on:{submit:function(t){t.preventDefault()}}},[r("button",{staticClass:"btn-blank btn-link bold",attrs:{type:"button",title:t.__("Add request manually")},on:{click:t.toggleInput}},[t._v("\n      +\n    ")]),t._v(" "),t.inputEnabled?r("input",{directives:[{name:"model",rawName:"v-model",value:t.urlOrRequestId,expression:"urlOrRequestId"}],staticClass:"form-control form-control-sm d-inline-block ml-1",attrs:{type:"text",placeholder:t.__("URL or request ID")},domProps:{value:t.urlOrRequestId},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addRequest(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.clearForm(e)}],input:function(e){e.target.composing||(t.urlOrRequestId=e.target.value)}}}):t._e()])])}),[],!1,null,null,null).exports,o=(r(65),r(1619)),u={components:{GlPopover:o.a},props:{htmlId:{type:String,required:!0},warnings:{type:Array,required:!0}},computed:{hasWarnings:function(){return this.warnings&&this.warnings.length},warningMessage:function(){return this.hasWarnings?this.warnings.join("\n"):""}},methods:{glEmojiTag:s.glEmojiTag}},l=Object(a.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.hasWarnings?r("span",[r("span",{attrs:{id:t.htmlId},domProps:{innerHTML:t._s(t.glEmojiTag("warning"))}}),t._v(" "),r("gl-popover",{attrs:{target:t.htmlId,content:t.warningMessage,triggers:"hover focus"}})],1):t._e()}),[],!1,null,null,null).exports,c=r(304),d=r(45),m={components:{RequestWarning:l,GlModal:c.a,Icon:d.a},props:{currentRequest:{type:Object,required:!0},metric:{type:String,required:!0},title:{type:String,required:!1,default:function(){return this.metric}},header:{type:String,required:!0},keys:{type:Array,required:!0}},computed:{metricDetails:function(){return this.currentRequest.details[this.metric]},detailsList:function(){return this.metricDetails.details},warnings:function(){return this.metricDetails.warnings||[]},htmlId:function(){return this.currentRequest?"performance-bar-warning-".concat(this.currentRequest.id,"-").concat(this.metric):""}}},p=Object(a.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.currentRequest.details&&t.metricDetails?r("div",{staticClass:"view",attrs:{id:"peek-view-"+t.metric,"data-qa-selector":"detailed_metric_content"}},[r("button",{staticClass:"btn-blank btn-link bold",attrs:{"data-target":"#modal-peek-"+t.metric+"-details",type:"button","data-toggle":"modal"}},[t._v("\n    "+t._s(t.metricDetails.duration)+" / "+t._s(t.metricDetails.calls)+"\n  ")]),t._v(" "),r("gl-modal",{staticClass:"performance-bar-modal",attrs:{id:"modal-peek-"+t.metric+"-details","header-title-text":t.header,"modal-size":"xl"}},[r("table",{staticClass:"table"},[t.detailsList.length?t._l(t.detailsList,(function(e,s){return r("tr",{key:s},[r("td",[r("span",[t._v(t._s(t.sprintf(t.__("%{duration}ms"),{duration:e.duration})))])]),t._v(" "),r("td",[r("div",{staticClass:"js-toggle-container"},[t._l(t.keys,(function(s,n){return r("div",{key:s,staticClass:"break-word",class:{"mb-3 bold":0==n}},[t._v("\n                "+t._s(e[s])+"\n                "),0==n&&e.backtrace?r("button",{staticClass:"text-expander js-toggle-button",attrs:{type:"button","aria-label":t.__("Toggle backtrace")}},[r("icon",{attrs:{size:12,name:"ellipsis_h"}})],1):t._e()])})),t._v(" "),e.backtrace?r("pre",{staticClass:"backtrace-row js-toggle-content mt-2"},[t._v(t._s(e.backtrace))]):t._e()],2)])])})):[r("tr",[r("td",[t._v("\n            "+t._s(t.sprintf(t.__("No %{header} for this request."),{header:t.header.toLowerCase()}))+"\n          ")])])]],2),t._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"})]),t._v("\n  "+t._s(t.title)+"\n  "),r("request-warning",{attrs:{"html-id":t.htmlId,warnings:t.warnings}})],1):t._e()}),[],!1,null,null,null).exports,h=(r(28),r(1)),f={components:{GlPopover:o.a},props:{currentRequest:{type:Object,required:!0},requests:{type:Array,required:!0}},data:function(){return{currentRequestId:this.currentRequest.id}},computed:{requestsWithWarnings:function(){return this.requests.filter((function(t){return t.hasWarnings}))},warningMessage:function(){return Object(h.c)("%d request with warnings","%d requests with warnings",this.requestsWithWarnings.length)}},watch:{currentRequestId:function(t){this.$emit("change-current-request",t)}},methods:{glEmojiTag:s.glEmojiTag}},g={components:{AddRequest:i,DetailedMetric:p,RequestSelector:Object(a.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"peek-request-selector","data-qa-selector":"request_dropdown"}},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.currentRequestId,expression:"currentRequestId"}],on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.currentRequestId=e.target.multiple?r:r[0]}}},t._l(t.requests,(function(e){return r("option",{key:e.id,attrs:{"data-qa-selector":"request_dropdown_option"},domProps:{value:e.id}},[t._v("\n      "+t._s(e.truncatedUrl)+"\n      "),e.hasWarnings?r("span",[t._v("(!)")]):t._e()])})),0),t._v(" "),t.requestsWithWarnings.length?r("span",[r("span",{attrs:{id:"performance-bar-request-selector-warning"},domProps:{innerHTML:t._s(t.glEmojiTag("warning"))}}),t._v(" "),r("gl-popover",{attrs:{target:"performance-bar-request-selector-warning",content:t.warningMessage,triggers:"hover focus"}})],1):t._e()])}),[],!1,null,null,null).exports},props:{store:{type:Object,required:!0},env:{type:String,required:!0},requestId:{type:String,required:!0},peekUrl:{type:String,required:!0}},detailedMetrics:[{metric:"active-record",title:"pg",header:Object(h.d)("PerformanceBar|SQL queries"),keys:["sql"]},{metric:"gitaly",header:Object(h.d)("PerformanceBar|Gitaly calls"),keys:["feature","request"]},{metric:"rugged",header:Object(h.d)("PerformanceBar|Rugged calls"),keys:["feature","args"]},{metric:"redis",header:Object(h.d)("PerformanceBar|Redis calls"),keys:["cmd"]},{metric:"total",header:Object(h.d)("PerformanceBar|Frontend resources"),keys:["name","size"]}],data:function(){return{currentRequestId:""}},computed:{requests:function(){return this.store.requestsWithDetails()},currentRequest:{get:function(){return this.store.findRequest(this.currentRequestId)},set:function(t){this.currentRequestId=t}},initialRequest:function(){return this.currentRequestId===this.requestId},hasHost:function(){return this.currentRequest&&this.currentRequest.details&&this.currentRequest.details.host},birdEmoji:function(){return this.hasHost&&this.currentRequest.details.host.canary?Object(s.glEmojiTag)("baby_chick"):""},downloadPath:function(){var t=JSON.stringify(this.requests),e=new Blob([t],{type:"text/plain"});return window.URL.createObjectURL(e)},downloadName:function(){var t=this.requests[0].truncatedUrl;return"".concat(t,"_perf_bar_").concat(Date.now(),".json")}},mounted:function(){this.currentRequest=this.requestId},methods:{changeCurrentRequest:function(t){this.currentRequest=t}}},_=Object(a.a)(g,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{class:t.env,attrs:{id:"js-peek"}},[t.currentRequest?r("div",{staticClass:"d-flex container-fluid container-limited",attrs:{"data-qa-selector":"performance_bar"}},[r("div",{staticClass:"view",attrs:{id:"peek-view-host"}},[t.hasHost?r("span",{staticClass:"current-host",class:{canary:t.currentRequest.details.host.canary}},[r("span",{domProps:{innerHTML:t._s(t.birdEmoji)}}),t._v("\n        "+t._s(t.currentRequest.details.host.hostname)+"\n      ")]):t._e()]),t._v(" "),t._l(t.$options.detailedMetrics,(function(e){return r("detailed-metric",{key:e.metric,attrs:{"current-request":t.currentRequest,metric:e.metric,title:e.title,header:e.header,keys:e.keys}})})),t._v(" "),t.currentRequest.details&&t.currentRequest.details.tracing?r("div",{staticClass:"view",attrs:{id:"peek-view-trace"}},[r("a",{attrs:{href:t.currentRequest.details.tracing.tracing_url}},[t._v(t._s(t.s__("PerformanceBar|trace")))])]):t._e(),t._v(" "),r("add-request",t._g({},t.$listeners)),t._v(" "),t.currentRequest.details?r("div",{staticClass:"view",attrs:{id:"peek-download"}},[r("a",{attrs:{download:t.downloadName,href:t.downloadPath}},[t._v(t._s(t.s__("PerformanceBar|Download")))])]):t._e(),t._v(" "),t.currentRequest?r("request-selector",{staticClass:"ml-auto",attrs:{"current-request":t.currentRequest,requests:t.requests},on:{"change-current-request":t.changeCurrentRequest}}):t._e()],2):t._e()])}),[],!1,null,null,null);e.default=_.exports}}]);
//# sourceMappingURL=243.bb57c008.chunk.js.map