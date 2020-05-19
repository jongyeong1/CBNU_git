(this.webpackJsonp=this.webpackJsonp||[]).push([[2],{1241:function(e,t,r){"use strict";var n=function(e,t){t?(e.classList.add("hidden"),e.querySelector("input").setAttribute("disabled",!0)):(e.classList.remove("hidden"),e.querySelector("input").removeAttribute("disabled"))},i=function(e){var t=document.querySelector(".js-namespace-prefixed"),r=document.querySelector(".js-namespace");e.checked?(n(t,!1),n(r,!0)):(n(t,!0),n(r,!1))};t.a=function(){var e=document.querySelector(".js-gl-managed");e&&(i(e),e.addEventListener("change",(function(){return i(e)})))}},1581:function(e,t,r){"use strict";var n=r(1),i={props:{placeholderText:{type:String,required:!0,default:Object(n.a)("Search")},focused:{type:Boolean,required:!1,default:!1}},data:function(){return{searchQuery:this.value}},watch:{searchQuery:function(e){this.$emit("input",e)},focused:function(e){e&&this.$refs.searchInput.focus()}}},o=r(4),s=Object(o.a)(i,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"dropdown-input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchQuery,expression:"searchQuery"}],ref:"searchInput",staticClass:"dropdown-input-field",attrs:{placeholder:e.placeholderText,type:"search",autocomplete:"off"},domProps:{value:e.searchQuery},on:{input:function(t){t.target.composing||(e.searchQuery=t.target.value)}}}),e._v(" "),r("i",{staticClass:"fa fa-search dropdown-input-search",attrs:{"aria-hidden":"true","data-hidden":"true"}}),e._v(" "),r("i",{staticClass:"fa fa-times dropdown-input-clear js-dropdown-input-clear",attrs:{"aria-hidden":"true","data-hidden":"true",role:"button"}})])}),[],!1,null,null,null);t.a=s.exports},1582:function(e,t,r){"use strict";r(72);var n={props:{name:{type:String,required:!0},value:{type:[Number,String],required:!0}}},i=r(4),o=Object(i.a)(n,(function(){var e=this.$createElement;return(this._self._c||e)("input",{attrs:{name:this.name,type:"hidden"},domProps:{value:this.value}})}),[],!1,null,null,null);t.a=o.exports},695:function(e,t,r){"use strict";var n,i=r(108),o=r(344).f,s=r(223),a=r(1003),c=r(547),l=r(1004),u=r(234),d="".endsWith,p=Math.min,h=l("endsWith");i({target:"String",proto:!0,forced:!!(u||h||(n=o(String.prototype,"endsWith"),!n||n.writable))&&!h},{endsWith:function(e){var t=String(c(this));a(e);var r=arguments.length>1?arguments[1]:void 0,n=s(t.length),i=void 0===r?n:p(s(r),n),o=String(e);return d?d.call(t,o,i):t.slice(i-o.length,i)===o}})},96:function(e,t,r){"use strict";var n={};r.r(n),r.d(n,"setProject",(function(){return m})),r.d(n,"setZone",(function(){return j})),r.d(n,"setMachineType",(function(){return v})),r.d(n,"setIsValidatingProjectBilling",(function(){return y})),r.d(n,"fetchProjects",(function(){return O})),r.d(n,"validateProjectBilling",(function(){return w})),r.d(n,"fetchZones",(function(){return _})),r.d(n,"fetchMachineTypes",(function(){return P})),r.d(n,"default",(function(){return E}));var i={};r.r(i),r.d(i,"hasProject",(function(){return S})),r.d(i,"hasZone",(function(){return I})),r.d(i,"hasMachineType",(function(){return T})),r.d(i,"hasValidData",(function(){return C}));r(258),r(18),r(64),r(695),r(495),r(24),r(28),r(26),r(50),r(58),r(38),r(27);var o,s=r(17),a=r(14),c=(r(42),r(35),r(93)),l=r.n(c),u=r(22),d=r(1),p=(r(85),r(760)),h=r(1581),g=r(1582),f=r(991),b=function(e){var t=e.resource,r=e.params,n=e.commit,i=e.mutation,o=e.payloadKey;return new Promise((function(e,s){return t.list(r).then((function(t){var r=t.result;n(i,r[o]),e()}),(function(e){s(e)}))}))},m=function(e,t){(0,e.commit)("SET_PROJECT",t)},j=function(e,t){(0,e.commit)("SET_ZONE",t)},v=function(e,t){(0,e.commit)("SET_MACHINE_TYPE",t)},y=function(e,t){(0,e.commit)("SET_IS_VALIDATING_PROJECT_BILLING",t)},O=function(e){var t=e.commit;return b({resource:gapi.client.cloudresourcemanager.projects,params:{},commit:t,mutation:"SET_PROJECTS",payloadKey:"projects"})},w=function(e){var t=e.dispatch,r=e.commit,n=e.state;return new Promise((function(e,i){var o=gapi.client.cloudbilling.projects.getBillingInfo({name:"projects/".concat(n.selectedProject.projectId)});return r("SET_ZONE",""),r("SET_MACHINE_TYPE",""),o.then((function(n){var i=n.result.billingEnabled;r("SET_PROJECT_BILLING_STATUS",Boolean(i)),t("setIsValidatingProjectBilling",!1),e()}),(function(e){t("setIsValidatingProjectBilling",!1),i(e)}))}))},_=function(e){var t=e.commit,r=e.state;return b({resource:gapi.client.compute.zones,params:{project:r.selectedProject.projectId},commit:t,mutation:"SET_ZONES",payloadKey:"items"})},P=function(e){var t=e.commit,r=e.state;return b({resource:gapi.client.compute.machineTypes,params:{project:r.selectedProject.projectId,zone:r.selectedZone},commit:t,mutation:"SET_MACHINE_TYPES",payloadKey:"items"})},E=function(){},S=function(e){return Boolean(e.selectedProject.projectId)},I=function(e){return Boolean(e.selectedZone)},T=function(e){return Boolean(e.selectedMachineType)},C=function(e,t){return Boolean(e.projectHasBillingEnabled)&&t.hasZone&&t.hasMachineType};r(77);function x(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var B=(x(o={},"SET_PROJECT",(function(e,t){Object.assign(e,{selectedProject:t})})),x(o,"SET_IS_VALIDATING_PROJECT_BILLING",(function(e,t){Object.assign(e,{isValidatingProjectBilling:t})})),x(o,"SET_PROJECT_BILLING_STATUS",(function(e,t){Object.assign(e,{projectHasBillingEnabled:t})})),x(o,"SET_ZONE",(function(e,t){Object.assign(e,{selectedZone:t})})),x(o,"SET_MACHINE_TYPE",(function(e,t){Object.assign(e,{selectedMachineType:t})})),x(o,"SET_PROJECTS",(function(e,t){Object.assign(e,{projects:t})})),x(o,"SET_ZONES",(function(e,t){Object.assign(e,{zones:t})})),x(o,"SET_MACHINE_TYPES",(function(e,t){Object.assign(e,{machineTypes:t})})),o);s.default.use(u.b);var L=new u.b.Store({actions:n,getters:i,mutations:B,state:{selectedProject:{projectId:"",name:""},selectedZone:"",selectedMachineType:"",isValidatingProjectBilling:null,projectHasBillingEnabled:null,projects:[],zones:[],machineTypes:[]}}),k={store:L,components:{DropdownButton:f.a,DropdownSearchInput:h.a,DropdownHiddenInput:g.a,GlLoadingIcon:p.a},props:{fieldId:{type:String,required:!0},fieldName:{type:String,required:!0},defaultValue:{type:String,required:!1,default:""}},data:function(){return{isLoading:!1,hasErrors:!1,searchQuery:"",gapiError:""}},computed:{results:function(){var e=this;return this.items?this.items.filter((function(t){return t.name.toLowerCase().indexOf(e.searchQuery)>-1})):[]}},methods:{fetchSuccessHandler:function(){var e=this;if(this.defaultValue){var t=this.items.find((function(t){return t.name===e.defaultValue}));t&&this.setItem(t.name)}this.isLoading=!1,this.hasErrors=!1},fetchFailureHandler:function(e){this.isLoading=!1,this.hasErrors=!0,e.result&&e.result.error&&(this.gapiError=e.result.error.message)}}};function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){N(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var M={name:"GkeProjectIdDropdown",mixins:[k],props:{docsUrl:{type:String,required:!0}},computed:H({},Object(u.e)(["selectedProject","isValidatingProjectBilling","projectHasBillingEnabled"]),{},Object(u.e)({items:"projects"}),{},Object(u.d)(["hasProject"]),{hasOneProject:function(){return this.items&&1===this.items.length},isDisabled:function(){return this.isLoading||this.isValidatingProjectBilling||this.items&&this.items.length<2},toggleText:function(){return this.isValidatingProjectBilling?Object(d.d)("ClusterIntegration|Validating project billing status"):this.isLoading?Object(d.d)("ClusterIntegration|Fetching projects"):this.hasProject?this.selectedProject.name:this.items?Object(d.d)("ClusterIntegration|Select project"):Object(d.d)("ClusterIntegration|No projects found")},helpText:function(){var e;return this.hasErrors?this.errorMessage:(this.items||(e="ClusterIntegration|We were unable to fetch any projects. Ensure that you have a project on %{docsLinkStart}Google Cloud Platform%{docsLinkEnd}."),e=this.items&&this.items.length?"ClusterIntegration|To use a new project, first create one on %{docsLinkStart}Google Cloud Platform%{docsLinkEnd}.":"ClusterIntegration|To create a cluster, first create a project on %{docsLinkStart}Google Cloud Platform%{docsLinkEnd}.",Object(d.e)(Object(d.d)(e),{docsLinkEnd:'&nbsp;<i class="fa fa-external-link" aria-hidden="true"></i></a>',docsLinkStart:'<a href="'.concat(l()(this.docsUrl),'" target="_blank" rel="noopener noreferrer">')},!1))},errorMessage:function(){return this.projectHasBillingEnabled?Object(d.e)(Object(d.d)("ClusterIntegration|An error occurred while trying to fetch your projects: %{error}"),{error:this.gapiError}):this.gapiError?Object(d.d)("ClusterIntegration|We could not verify that one of your projects on GCP has billing enabled. Please try again."):Object(d.e)(Object(d.d)('This project does not have billing enabled. To create a cluster, <a href=%{linkToBilling} target="_blank" rel="noopener noreferrer">enable billing <i class="fa fa-external-link" aria-hidden="true"></i></a> and try again.'),{linkToBilling:"https://console.cloud.google.com/freetrial?utm_campaign=2018_cpanel&utm_source=gitlab&utm_medium=referral"},!1)}}),watch:{selectedProject:function(){this.setIsValidatingProjectBilling(!0),this.validateProjectBilling().then(this.validateProjectBillingSuccessHandler).catch(this.validateProjectBillingFailureHandler)}},created:function(){this.isLoading=!0,this.fetchProjects().then(this.fetchSuccessHandler).catch(this.fetchFailureHandler)},methods:H({},Object(u.c)(["fetchProjects","setIsValidatingProjectBilling","validateProjectBilling"]),{},Object(u.c)({setItem:"setProject"}),{fetchSuccessHandler:function(){var e=this;if(this.defaultValue){var t=this.items.find((function(t){return t.projectId===e.defaultValue}));t&&this.setItem(t)}else 1===this.items.length&&this.setItem(this.items[0]);this.isLoading=!1,this.hasErrors=!1},validateProjectBillingSuccessHandler:function(){this.hasErrors=!this.projectHasBillingEnabled},validateProjectBillingFailureHandler:function(e){this.hasErrors=!0,this.gapiError=e.result?e.result.error.message:e}})},Z=r(4),V=Object(Z.a)(M,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"js-gcp-project-id-dropdown dropdown"},[r("dropdown-hidden-input",{attrs:{name:e.fieldName,value:e.selectedProject.projectId}}),e._v(" "),r("dropdown-button",{class:{"border-danger":e.hasErrors,"read-only":e.hasOneProject},attrs:{"is-disabled":e.isDisabled,"is-loading":e.isLoading,"toggle-text":e.toggleText}}),e._v(" "),r("div",{staticClass:"dropdown-menu dropdown-select"},[r("dropdown-search-input",{attrs:{"placeholder-text":e.s__("ClusterIntegration|Search projects")},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}),e._v(" "),r("div",{staticClass:"dropdown-content"},[r("ul",[r("li",{directives:[{name:"show",rawName:"v-show",value:!e.results.length,expression:"!results.length"}]},[r("span",{staticClass:"menu-item"},[e._v("\n              "+e._s(e.s__("ClusterIntegration|No projects matched your search"))+"\n            ")])]),e._v(" "),e._l(e.results,(function(t){return r("li",{key:t.project_number},[r("button",{attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),e.setItem(t)}}},[e._v(e._s(t.name))])])}))],2)]),e._v(" "),r("div",{staticClass:"dropdown-loading"},[r("gl-loading-icon")],1)],1)],1),e._v(" "),r("span",{staticClass:"form-text",class:{"text-danger":e.hasErrors,"text-muted":!e.hasErrors},domProps:{innerHTML:e._s(e.helpText)}})])}),[],!1,null,null,null).exports;function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function A(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Q={name:"GkeZoneDropdown",mixins:[k],computed:A({},Object(u.e)(["selectedProject","selectedZone","projects","isValidatingProjectBilling","projectHasBillingEnabled"]),{},Object(u.e)({items:"zones"}),{isDisabled:function(){return this.isLoading||this.isValidatingProjectBilling||!this.projectHasBillingEnabled},toggleText:function(){return this.isLoading?Object(d.d)("ClusterIntegration|Fetching zones"):this.selectedZone?this.selectedZone:this.projectHasBillingEnabled?Object(d.d)("ClusterIntegration|Select zone"):Object(d.d)("ClusterIntegration|Select project to choose zone")},errorMessage:function(){return Object(d.e)(Object(d.d)("ClusterIntegration|An error occurred while trying to fetch project zones: %{error}"),{error:this.gapiError})}}),watch:{isValidatingProjectBilling:function(e){this.hasErrors=!1,!e&&this.projectHasBillingEnabled&&(this.isLoading=!0,this.fetchZones().then(this.fetchSuccessHandler).catch(this.fetchFailureHandler))}},methods:A({},Object(u.c)(["fetchZones"]),{},Object(u.c)({setItem:"setZone"}))},G=Object(Z.a)(Q,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"js-gcp-zone-dropdown dropdown"},[r("dropdown-hidden-input",{attrs:{name:e.fieldName,value:e.selectedZone}}),e._v(" "),r("dropdown-button",{class:{"border-danger":e.hasErrors},attrs:{"is-disabled":e.isDisabled,"is-loading":e.isLoading,"toggle-text":e.toggleText}}),e._v(" "),r("div",{staticClass:"dropdown-menu dropdown-select"},[r("dropdown-search-input",{attrs:{"placeholder-text":e.s__("ClusterIntegration|Search zones")},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}),e._v(" "),r("div",{staticClass:"dropdown-content"},[r("ul",[r("li",{directives:[{name:"show",rawName:"v-show",value:!e.results.length,expression:"!results.length"}]},[r("span",{staticClass:"menu-item"},[e._v("\n              "+e._s(e.s__("ClusterIntegration|No zones matched your search"))+"\n            ")])]),e._v(" "),e._l(e.results,(function(t){return r("li",{key:t.id},[r("button",{attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),e.setItem(t.name)}}},[e._v(e._s(t.name))])])}))],2)]),e._v(" "),r("div",{staticClass:"dropdown-loading"},[r("gl-loading-icon")],1)],1)],1),e._v(" "),e.hasErrors?r("span",{staticClass:"form-text",class:{"text-danger":e.hasErrors,"text-muted":!e.hasErrors}},[e._v("\n    "+e._s(e.errorMessage)+"\n  ")]):e._e()])}),[],!1,null,null,null).exports;function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function $(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var R={name:"GkeMachineTypeDropdown",mixins:[k],computed:$({},Object(u.e)(["isValidatingProjectBilling","projectHasBillingEnabled","selectedZone","selectedMachineType"]),{},Object(u.e)({items:"machineTypes"}),{},Object(u.d)(["hasZone","hasMachineType"]),{isDisabled:function(){return this.isLoading||this.isValidatingProjectBilling||!this.projectHasBillingEnabled||!this.hasZone},toggleText:function(){return this.isLoading?Object(d.d)("ClusterIntegration|Fetching machine types"):this.selectedMachineType?this.selectedMachineType:this.projectHasBillingEnabled||this.hasZone?this.hasZone?Object(d.d)("ClusterIntegration|Select machine type"):Object(d.d)("ClusterIntegration|Select zone to choose machine type"):Object(d.d)("ClusterIntegration|Select project and zone to choose machine type")},errorMessage:function(){return Object(d.e)(Object(d.d)("ClusterIntegration|An error occurred while trying to fetch zone machine types: %{error}"),{error:this.gapiError})}}),watch:{selectedZone:function(){this.hasErrors=!1,this.hasZone&&(this.isLoading=!0,this.fetchMachineTypes().then(this.fetchSuccessHandler).catch(this.fetchFailureHandler))}},methods:$({},Object(u.c)(["fetchMachineTypes"]),{},Object(u.c)({setItem:"setMachineType"}))},W=Object(Z.a)(R,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"js-gcp-machine-type-dropdown dropdown"},[r("dropdown-hidden-input",{attrs:{name:e.fieldName,value:e.selectedMachineType}}),e._v(" "),r("dropdown-button",{class:{"border-danger":e.hasErrors},attrs:{"is-disabled":e.isDisabled,"is-loading":e.isLoading,"toggle-text":e.toggleText}}),e._v(" "),r("div",{staticClass:"dropdown-menu dropdown-select"},[r("dropdown-search-input",{attrs:{"placeholder-text":e.s__("ClusterIntegration|Search machine types")},model:{value:e.searchQuery,callback:function(t){e.searchQuery=t},expression:"searchQuery"}}),e._v(" "),r("div",{staticClass:"dropdown-content"},[r("ul",[r("li",{directives:[{name:"show",rawName:"v-show",value:!e.results.length,expression:"!results.length"}]},[r("span",{staticClass:"menu-item"},[e._v("\n              "+e._s(e.s__("ClusterIntegration|No machine types matched your search"))+"\n            ")])]),e._v(" "),e._l(e.results,(function(t){return r("li",{key:t.id},[r("button",{attrs:{type:"button"},on:{click:function(r){return r.preventDefault(),e.setItem(t.name)}}},[e._v(e._s(t.name))])])}))],2)]),e._v(" "),r("div",{staticClass:"dropdown-loading"},[r("gl-loading-icon")],1)],1)],1),e._v(" "),e.hasErrors?r("span",{staticClass:"form-text",class:{"text-danger":e.hasErrors,"text-muted":!e.hasErrors}},[e._v("\n    "+e._s(e.errorMessage)+"\n  ")]):e._e()])}),[],!1,null,null,null).exports;function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Y={computed:function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){U(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},Object(u.d)(["hasValidData"]))},X=Object(Z.a)(Y,(function(){var e=this.$createElement;return(this._self._c||e)("button",{staticClass:"js-gke-cluster-creation-submit btn btn-success",attrs:{type:"submit",disabled:!this.hasValidData}},[this._v("\n  "+this._s(this.s__("ClusterIntegration|Create Kubernetes cluster"))+"\n")])}),[],!1,null,null,null).exports,ee=Object(d.d)("ClusterIntegration|An error occurred when trying to contact the Google Cloud API. Please try again later.");function te(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function re(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?te(Object(r),!0).forEach((function(t){ne(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):te(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ie=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=document.querySelector(e);if(!i)return!1;var o=i.querySelector("input");return new s.default({el:i,store:L,components:ne({},r,t),render:function(e){return e(r,{props:re({fieldName:o.getAttribute("name"),fieldId:o.getAttribute("id"),defaultValue:o.value},n)})}})},oe=function(){Object(a.a)(ee)},se=function(){var e=document.querySelector(".js-gke-cluster-creation");return!!e&&gapi.client.init({discoveryDocs:["https://www.googleapis.com/discovery/v1/apis/cloudbilling/v1/rest","https://www.googleapis.com/discovery/v1/apis/cloudresourcemanager/v1/rest","https://www.googleapis.com/discovery/v1/apis/compute/v1/rest"]}).then((function(){gapi.client.setToken({access_token:e.dataset.token}),function(){var e=".js-gcp-project-id-dropdown-entry-point",t=document.querySelector(e);ie(e,V,"gke-project-id-dropdown",{docsUrl:t.dataset.docsurl})}(),ie(".js-gcp-zone-dropdown-entry-point",G,"gke-zone-dropdown"),ie(".js-gcp-machine-type-dropdown-entry-point",W,"gke-machine-type-dropdown"),ie(".js-gke-cluster-creation-submit-container",X,"gke-submit-button")})).catch(oe)},ae=function(){return gapi?gapi.load("client",se):(oe(),!1)},ce=r(1241),le=r(380),ue=[":clusters:new",":clusters:create_gcp",":clusters:create_user"];t.a=function(e){var t=e.body.dataset.page;if(ue.some((function(e){return t.endsWith(e)}))){var n=e.querySelector(".gcp-signup-offer");le.a.factory(n),ae(),Promise.all([r.e(14),r.e(32),r.e(231),r.e(39)]).then(r.bind(null,3241)).then((function(t){var r=t.default,n=e.querySelector(".js-create-eks-cluster-form-container");n&&r(n)})).catch((function(){})),function(e){return e.startsWith("project:clusters")}(t)&&Object(ce.a)()}}},991:function(e,t,r){"use strict";var n=r(760),i=r(1),o={components:{GlLoadingIcon:n.a},props:{isDisabled:{type:Boolean,required:!1,default:!1},isLoading:{type:Boolean,required:!1,default:!1},toggleText:{type:String,required:!1,default:Object(i.a)("Select")}}},s=r(4),a=Object(s.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"dropdown-menu-toggle dropdown-menu-full-width",attrs:{disabled:e.isDisabled||e.isLoading,type:"button","data-toggle":"dropdown","aria-expanded":"false"}},[r("gl-loading-icon",{directives:[{name:"show",rawName:"v-show",value:e.isLoading,expression:"isLoading"}],attrs:{inline:!0}}),e._v(" "),[e.$slots.default?e._t("default"):r("span",{staticClass:"dropdown-toggle-text"},[e._v(" "+e._s(e.toggleText)+" ")])],e._v(" "),r("span",{directives:[{name:"show",rawName:"v-show",value:!e.isLoading,expression:"!isLoading"}],staticClass:"dropdown-toggle-icon"},[r("i",{staticClass:"fa fa-chevron-down",attrs:{"aria-hidden":"true","data-hidden":"true"}})])],2)}),[],!1,null,null,null);t.a=a.exports}}]);
//# sourceMappingURL=commons~pages.admin.clusters~pages.admin.clusters.destroy~pages.admin.clusters.edit~pages.admin.clus~d7b946d0.cc375066.chunk.js.map