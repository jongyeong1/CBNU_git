(this.webpackJsonp=this.webpackJsonp||[]).push([[144],{113:function(e,t,n){"use strict";n.r(t);var r=n(88),a=n(70),o=n(96);document.addEventListener("DOMContentLoaded",(function(){Object(o.a)(document,gon),new r.a,new a.a}))},1387:function(e,t,n){"use strict";n.r(t);var r=n(806);document.addEventListener("DOMContentLoaded",(function(){return Object(r.a)()}))},2283:function(e,t,n){n(105),n(113),e.exports=n(1387)},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(24),n(49),n(56),n(40),n(90),n(18),n(36),n(41);var r=n(8),a=n.n(r),o=n(9);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=c(this,s(t).call(this)),a.a.bind("g p",(function(){return Object(o.a)(".shortcuts-project")})),a.a.bind("g v",(function(){return Object(o.a)(".shortcuts-project-activity")})),a.a.bind("g r",(function(){return Object(o.a)(".shortcuts-project-releases")})),a.a.bind("g f",(function(){return Object(o.a)(".shortcuts-tree")})),a.a.bind("g c",(function(){return Object(o.a)(".shortcuts-commits")})),a.a.bind("g j",(function(){return Object(o.a)(".shortcuts-builds")})),a.a.bind("g n",(function(){return Object(o.a)(".shortcuts-network")})),a.a.bind("g d",(function(){return Object(o.a)(".shortcuts-repository-charts")})),a.a.bind("g i",(function(){return Object(o.a)(".shortcuts-issues")})),a.a.bind("g b",(function(){return Object(o.a)(".shortcuts-issue-boards")})),a.a.bind("g m",(function(){return Object(o.a)(".shortcuts-merge_requests")})),a.a.bind("g w",(function(){return Object(o.a)(".shortcuts-wiki")})),a.a.bind("g s",(function(){return Object(o.a)(".shortcuts-snippets")})),a.a.bind("g k",(function(){return Object(o.a)(".shortcuts-kubernetes")})),a.a.bind("g e",(function(){return Object(o.a)(".shortcuts-environments")})),a.a.bind("g l",(function(){return Object(o.a)(".shortcuts-metrics")})),a.a.bind("i",(function(){return Object(o.a)(".shortcuts-new-issue")})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),t}(n(107).a)},73:function(e,t,n){"use strict";n(30),n(35),n(18),n(64);var r=n(0),a=n.n(r),o=n(32),i=(n(65),n(69),n(55),n(67),n(71));function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectSelectInput=a()(t),this.newItemBtn=a()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var t,r,o;return t=e,(r=[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(t){return e.openDropdown(t)})),this.newItemBtn.on("click",(function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))})),this.projectSelectInput.on("change",(function(){return e.selectProject()}))}},{key:"initLocalStorage",value:function(){i.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(e){n.e(239).then(n.t.bind(null,428,7)).then((function(){a()(e.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&c(t.prototype,r),o&&c(t,o),e}(),u=n(1),l=function(){a()(".ajax-project-select").each((function(e,t){var n,r=this,i=a()(t).data("simpleFilter")||!1,c=a()(t).data("select2");return this.groupId=a()(t).data("groupId"),this.userId=a()(t).data("userId"),this.includeGroups=a()(t).data("includeGroups"),this.allProjects=a()(t).data("allProjects")||!1,this.orderBy=a()(t).data("orderBy")||"id",this.withIssuesEnabled=a()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=a()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===a()(t).data("withShared")||a()(t).data("withShared"),this.includeProjectsInSubgroups=a()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=a()(t).data("allowClear")||!1,n=Object(u.d)("ProjectSelect|Search for project"),this.includeGroups&&(n+=Object(u.d)("ProjectSelect| or group")),a()(t).select2({placeholder:n,minimumInputLength:0,query:function(e){var t,n=function(t){var n={results:t};return e.callback(n)};return t=r.includeGroups?function(t){return o.a.groups(e.term,{},(function(e){var r=e.concat(t);return n(r)}))}:n,r.groupId?o.a.groupProjects(r.groupId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},t):r.userId?o.a.userProjects(r.userId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},t):o.a.projects(e.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},t)},id:function(e){return i?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},initSelection:function(e,t){return o.a.project(e.val()).then((function(e){var n=e.data;return t(n)}))},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),c||i?t:new s(t)}))};t.a=function(){return n.e(239).then(n.t.bind(null,428,7)).then(l).catch((function(){}))}},806:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n(42),n(55),n(91),n(89);var r=n(0),a=n.n(r),o=n(1),i=n(11),c=n(14),s=n(110);function u(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};a()(".js-compare-dropdown").each((function(){var n=a()(this),r=n.data("selected"),u=n.closest(".dropdown"),l=a()('input[name="'.concat(n.data("fieldName"),'"]'),u),d=a()('input[type="search"]',u);n.glDropdown({data:function(t,r){var a={ref:n.data("ref"),search:t};e&&(a.find=e),i.a.get(n.data("refsUrl"),{params:a}).then((function(t){var n=t.data;r(e?n[Object(s.b)(e)]||[]:n)})).catch((function(){return Object(c.a)(Object(o.a)("Error fetching refs"))}))},selectable:!0,filterable:!0,filterRemote:Boolean(n.data("refsUrl")),fieldName:n.data("fieldName"),filterInput:'input[type="search"]',renderRow:function(e){var t=a()("<a />").attr("href","#").addClass(e===r?"is-active":"").text(e).attr("data-ref",e);return null!=e.header?a()("<li />").addClass("dropdown-header").text(e.header):a()("<li />").append(t)},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(){return t(n)}}),d.on("keyup",(function(e){if(13===(e.keyCode||e.which)){var t=d.val();l.val(t),a()(".dropdown-toggle-text",n).text(t),u.removeClass("open")}})),u.on("click",".dropdown-content a",(function(e){n.prop("title",e.target.text.replace(/_+?/g,"-")),n.hasClass("has-tooltip")&&n.tooltip("_fixTitle")}))}))}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(42),n(89);var r=n(0),a=n.n(r),o=n(51),i=n.n(o),c=n(1),s=n(33);n(28),n(78),n(40),n(46),n(129),n(35),n(77),n(18),n(36),n(41);var u=function(e){return e.reduce((function(e,t){var n=t.name,r=t.value;return Object.assign(e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,r))}),{})},l=n(11),d=n(14),f=n(73);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=a()("ul.clone-options-dropdown"),n=a()("#project_clone"),r=a()(".js-git-clone-holder .js-clone-dropdown-label"),o=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),c=r.text().trim();c.length>0&&a()("a:contains('".concat(c,"')"),t).addClass("is-active"),a()("a",t).on("click",(function(e){e.preventDefault();var r=a()(e.currentTarget),i=r.attr("href"),c=r.data("cloneType");a()(".is-active",t).removeClass("is-active"),a()('a[data-clone-type="'.concat(c,'"]')).each((function(){var e=a()(this),t=e.find(".dropdown-menu-inner-title").text(),n=e.closest(".project-clone-holder").find(".js-clone-dropdown-label");e.toggleClass("is-active"),n.text(t)})),o?o.dataset.clipboardText=i:n.val(i),a()(".js-git-empty .js-clone").text(i)})),e.initRefSwitcher(),a()(".project-refs-select").on("change",(function(){return a()(this).parents("form").submit()})),a()(".hide-no-ssh-message").on("click",(function(e){return i.a.set("hide_no_ssh_message","false"),a()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()})),a()(".hide-no-password-message").on("click",(function(e){return i.a.set("hide_no_password_message","false"),a()(this).parents(".no-password-message").remove(),e.preventDefault()})),a()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(e){var t=a()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(t);return i.a.set(n,"false"),a()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()})),e.projectSelectDropdown()}var t,n,r;return t=e,r=[{key:"projectSelectDropdown",value:function(){Object(f.a)(),a()(".project-item-select").on("click",(function(t){return e.changeProject(a()(t.currentTarget).val())}))}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var e=document.createElement("li"),t=document.createElement("a");return t.href="#",a()(".js-project-refs-dropdown").each((function(){var n,r,o,i=a()(this),f=i.data("selected"),h=i.data("fieldName"),p=Boolean(i.data("visit")),b=i.closest("form"),g=b.attr("action"),m=Object(s.h)((n=b[0],r=new FormData(n),o=Array.from(r.keys()).map((function(e){var t=r.getAll(e);return{name:e,value:1===(t=t.filter((function(e){return e}))).length?t[0]:t}})),u(o)),g);return i.glDropdown({data:function(e,t){l.a.get(i.data("refsUrl"),{params:{ref:i.data("ref"),search:e}}).then((function(e){var n=e.data;return t(n)})).catch((function(){return Object(d.a)(Object(c.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:i.data("inputFieldName"),fieldName:h,renderRow:function(n){var r,a,o,i=e.cloneNode(!1),c=t.cloneNode(!1);return n===f&&(c.className="is-active"),c.textContent=n,c.dataset.ref=n,n.length>0&&p&&(c.href=Object(s.h)((o=n,(a=h)in(r={})?Object.defineProperty(r,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):r[a]=o,r),m)),i.appendChild(c),i},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(e){var t=e.e;p||t.preventDefault()}})}))}}],(n=null)&&h(t.prototype,n),r&&h(t,r),e}()}},[[2283,1,0,2]]]);
//# sourceMappingURL=pages.projects.compare.6d80654a.chunk.js.map