(this.webpackJsonp=this.webpackJsonp||[]).push([[143],{113:function(t,e,n){"use strict";n.r(e);var r=n(88),i=n(70),a=n(96);document.addEventListener("DOMContentLoaded",(function(){Object(a.a)(document,gon),new r.a,new i.a}))},2282:function(t,e,n){n(105),n(113),t.exports=n(2513)},2513:function(t,e,n){"use strict";n.r(e);n(30),n(28),n(42),n(129),n(35),n(72),n(77),n(18),n(64);var r=n(0),i=n.n(r),a=n(1),o=n(62),c=n(381),s=n(11);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.timer=null,this.$contentList=i()(".content_list"),c.a.init(parseInt(e,10),!1,!1,this.processCommits.bind(this)),this.content=i()("#commits-list"),this.searchField=i()("#commits-search"),this.lastSearch=this.searchField.val(),this.initSearch()}var e,n,r;return e=t,(n=[{key:"initSearch",value:function(){var t=this;this.timer=null,this.searchField.on("keyup",(function(){clearTimeout(t.timer),t.timer=setTimeout(t.filterResults.bind(t),500)}))}},{key:"filterResults",value:function(){var t=this,e=i()(".commits-search-form"),n=this.searchField.val();if(n===this.lastSearch)return Promise.resolve();var r="".concat(e.attr("action"),"?").concat(e.serialize());this.content.fadeTo("fast",.5);var a=e.serializeArray().reduce((function(t,e){return Object.assign(t,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},e.name,e.value))}),{});return s.a.get(e.attr("action"),{params:a}).then((function(e){var i=e.data;t.lastSearch=n,t.content.html(i.html),t.content.fadeTo("fast",1),window.history.replaceState({page:r},document.title,r)})).catch((function(){t.content.fadeTo("fast",1),t.lastSearch=null}))}},{key:"processCommits",value:function(t){var e,n=t,r=i()(n),c=this.$contentList.find("li.js-commit-header").last(),s=c.data("day"),u=r.filter("li.js-commit-header").first().data("day");return s===u&&(e=c.nextUntil("li.js-commit-header").find("li.commit").length,n=r.not("li.js-commit-header[data-day='".concat(u,"']")),e+=Number(i()(n).nextUntil("li.js-commit-header").first().find("li.commit").length),c.find("span.commits-count").text(Object(a.c)("%d commit","%d commits",e))),Object(o.l)(r.find(".js-timeago")),n}}])&&u(e.prototype,n),r&&u(e,r),t}(),d=n(658),f=n(70);document.addEventListener("DOMContentLoaded",(function(){new l(document.querySelector(".js-project-commits-show").dataset.commitsLimit),new f.a,d.a.fetch()}))},381:function(t,e,n){"use strict";var r=n(0),i=n.n(r),a=n(16),o=n(11),c=n(33);e.a={init:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:i.a.noop,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:i.a.noop,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";this.url=i()(".content_list").data("href")||Object(c.m)(["limit","offset"]),this.limit=t,this.offset=parseInt(Object(a.m)("offset"),10)||this.limit,this.disable=n,this.prepareData=r,this.callback=o,this.loading=i()("".concat(s," .loading")).first(),e&&(this.offset=0,this.getOld()),this.initLoadMore()},getOld:function(){var t=this;this.loading.show(),o.a.get(this.url,{params:{limit:this.limit,offset:this.offset}}).then((function(e){var n=e.data;t.append(n.count,t.prepareData(n.html)),t.callback(),t.disable||t.isScrollable()?t.loading.hide():t.getOld()})).catch((function(){return t.loading.hide()}))},append:function(t,e){i()(".content_list").append(e),t>0?(this.offset+=t,t<this.limit&&(this.disable=!0)):this.disable=!0},isScrollable:function(){var t=i()(window);return i()(document).height()>t.height()+t.scrollTop()+400},initLoadMore:function(){var t=this;i()(document).off("scroll"),i()(document).endlessScroll({bottomPixels:400,fireDelay:1e3,fireOnce:!0,ceaseFire:function(){return!0===t.disable},callback:function(){t.loading.is(":visible")||(t.loading.show(),t.getOld())}})}}},658:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(28),n(26),n(18),n(64),n(27);var r=n(0),i=n.n(r),a=n(16),o=n(11),c=n(14),s=n(1);function u(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,n,r;return e=t,r=[{key:"fetch",value:function(){var t=i()(".js-signature-container");if(0===t.length)return Promise.resolve();var e=i()(".js-loading-gpg-badge");e.html('<i class="fa fa-spinner fa-spin"></i>');var n=function(){return Object(c.a)(Object(s.a)("An error occurred while loading commit signatures"))},r=t.data("signaturesPath");if(!r)return n(),Promise.reject(new Error(Object(s.a)("Missing commit signatures endpoint!")));var u=Object(a.H)(t.serialize());return o.a.get(r,{params:u}).then((function(t){t.data.signatures.forEach((function(t){e.filter('[data-commit-sha="'.concat(t.commit_sha,'"]')).replaceWith(t.html)}))})).catch(n)}}],(n=null)&&u(e.prototype,n),r&&u(e,r),t}()},70:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));n(24),n(49),n(56),n(40),n(90),n(18),n(36),n(41);var r=n(8),i=n.n(r),a=n(9);function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function c(t,e){return!e||"object"!==o(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function u(t,e){return(u=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var l=function(t){function e(){var t;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),t=c(this,s(e).call(this)),i.a.bind("g p",(function(){return Object(a.a)(".shortcuts-project")})),i.a.bind("g v",(function(){return Object(a.a)(".shortcuts-project-activity")})),i.a.bind("g r",(function(){return Object(a.a)(".shortcuts-project-releases")})),i.a.bind("g f",(function(){return Object(a.a)(".shortcuts-tree")})),i.a.bind("g c",(function(){return Object(a.a)(".shortcuts-commits")})),i.a.bind("g j",(function(){return Object(a.a)(".shortcuts-builds")})),i.a.bind("g n",(function(){return Object(a.a)(".shortcuts-network")})),i.a.bind("g d",(function(){return Object(a.a)(".shortcuts-repository-charts")})),i.a.bind("g i",(function(){return Object(a.a)(".shortcuts-issues")})),i.a.bind("g b",(function(){return Object(a.a)(".shortcuts-issue-boards")})),i.a.bind("g m",(function(){return Object(a.a)(".shortcuts-merge_requests")})),i.a.bind("g w",(function(){return Object(a.a)(".shortcuts-wiki")})),i.a.bind("g s",(function(){return Object(a.a)(".shortcuts-snippets")})),i.a.bind("g k",(function(){return Object(a.a)(".shortcuts-kubernetes")})),i.a.bind("g e",(function(){return Object(a.a)(".shortcuts-environments")})),i.a.bind("g l",(function(){return Object(a.a)(".shortcuts-metrics")})),i.a.bind("i",(function(){return Object(a.a)(".shortcuts-new-issue")})),t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&u(t,e)}(e,t),e}(n(107).a)},73:function(t,e,n){"use strict";n(30),n(35),n(18),n(64);var r=n(0),i=n.n(r),a=n(32),o=(n(65),n(69),n(55),n(67),n(71));function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var s=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.projectSelectInput=i()(e),this.newItemBtn=i()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var e,r,a;return e=t,(r=[{key:"bindEvents",value:function(){var t=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(e){return t.openDropdown(e)})),this.newItemBtn.on("click",(function(e){t.getProjectFromLocalStorage()||(e.preventDefault(),t.openDropdown(e))})),this.projectSelectInput.on("change",(function(){return t.selectProject()}))}},{key:"initLocalStorage",value:function(){o.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(t){n.e(239).then(n.t.bind(null,428,7)).then((function(){i()(t.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))}},{key:"selectProject",value:function(){var t=JSON.parse(this.projectSelectInput.val()),e={url:"".concat(t.url,"/").concat(this.projectSelectInput.data("relativePath")),name:t.name};this.setNewItemBtnAttributes(e),this.setProjectInLocalStorage(e)}},{key:"setBtnTextFromLocalStorage",value:function(){var t=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(t)}},{key:"setNewItemBtnAttributes",value:function(t){t?(this.newItemBtn.attr("href",t.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(t.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var t=localStorage.getItem(this.localStorageKey);return JSON.parse(t)}},{key:"setProjectInLocalStorage",value:function(t){var e=JSON.stringify(t);localStorage.setItem(this.localStorageKey,e)}},{key:"deriveTextVariants",value:function(){var t=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:t,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&c(e.prototype,r),a&&c(e,a),t}(),u=n(1),l=function(){i()(".ajax-project-select").each((function(t,e){var n,r=this,o=i()(e).data("simpleFilter")||!1,c=i()(e).data("select2");return this.groupId=i()(e).data("groupId"),this.userId=i()(e).data("userId"),this.includeGroups=i()(e).data("includeGroups"),this.allProjects=i()(e).data("allProjects")||!1,this.orderBy=i()(e).data("orderBy")||"id",this.withIssuesEnabled=i()(e).data("withIssuesEnabled"),this.withMergeRequestsEnabled=i()(e).data("withMergeRequestsEnabled"),this.withShared=void 0===i()(e).data("withShared")||i()(e).data("withShared"),this.includeProjectsInSubgroups=i()(e).data("includeProjectsInSubgroups")||!1,this.allowClear=i()(e).data("allowClear")||!1,n=Object(u.d)("ProjectSelect|Search for project"),this.includeGroups&&(n+=Object(u.d)("ProjectSelect| or group")),i()(e).select2({placeholder:n,minimumInputLength:0,query:function(t){var e,n=function(e){var n={results:e};return t.callback(n)};return e=r.includeGroups?function(e){return a.a.groups(t.term,{},(function(t){var r=t.concat(e);return n(r)}))}:n,r.groupId?a.a.groupProjects(r.groupId,t.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},e):r.userId?a.a.userProjects(r.userId,t.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},e):a.a.projects(t.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},e)},id:function(t){return o?t.id:JSON.stringify({name:t.name,url:t.web_url})},text:function(t){return t.name_with_namespace||t.name},initSelection:function(t,e){return a.a.project(t.val()).then((function(t){var n=t.data;return e(n)}))},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),c||o?e:new s(e)}))};e.a=function(){return n.e(239).then(n.t.bind(null,428,7)).then(l).catch((function(){}))}},88:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));n(42),n(89);var r=n(0),i=n.n(r),a=n(51),o=n.n(a),c=n(1),s=n(33);n(28),n(78),n(40),n(46),n(129),n(35),n(77),n(18),n(36),n(41);var u=function(t){return t.reduce((function(t,e){var n=e.name,r=e.value;return Object.assign(t,function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}({},n,r))}),{})},l=n(11),d=n(14),f=n(73);function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var p=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var e=i()("ul.clone-options-dropdown"),n=i()("#project_clone"),r=i()(".js-git-clone-holder .js-clone-dropdown-label"),a=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),c=r.text().trim();c.length>0&&i()("a:contains('".concat(c,"')"),e).addClass("is-active"),i()("a",e).on("click",(function(t){t.preventDefault();var r=i()(t.currentTarget),o=r.attr("href"),c=r.data("cloneType");i()(".is-active",e).removeClass("is-active"),i()('a[data-clone-type="'.concat(c,'"]')).each((function(){var t=i()(this),e=t.find(".dropdown-menu-inner-title").text(),n=t.closest(".project-clone-holder").find(".js-clone-dropdown-label");t.toggleClass("is-active"),n.text(e)})),a?a.dataset.clipboardText=o:n.val(o),i()(".js-git-empty .js-clone").text(o)})),t.initRefSwitcher(),i()(".project-refs-select").on("change",(function(){return i()(this).parents("form").submit()})),i()(".hide-no-ssh-message").on("click",(function(t){return o.a.set("hide_no_ssh_message","false"),i()(this).parents(".no-ssh-key-message").remove(),t.preventDefault()})),i()(".hide-no-password-message").on("click",(function(t){return o.a.set("hide_no_password_message","false"),i()(this).parents(".no-password-message").remove(),t.preventDefault()})),i()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(t){var e=i()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(e);return o.a.set(n,"false"),i()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),t.preventDefault()})),t.projectSelectDropdown()}var e,n,r;return e=t,r=[{key:"projectSelectDropdown",value:function(){Object(f.a)(),i()(".project-item-select").on("click",(function(e){return t.changeProject(i()(e.currentTarget).val())}))}},{key:"changeProject",value:function(t){return window.location=t}},{key:"initRefSwitcher",value:function(){var t=document.createElement("li"),e=document.createElement("a");return e.href="#",i()(".js-project-refs-dropdown").each((function(){var n,r,a,o=i()(this),f=o.data("selected"),h=o.data("fieldName"),p=Boolean(o.data("visit")),m=o.closest("form"),b=m.attr("action"),g=Object(s.h)((n=m[0],r=new FormData(n),a=Array.from(r.keys()).map((function(t){var e=r.getAll(t);return{name:t,value:1===(e=e.filter((function(t){return t}))).length?e[0]:e}})),u(a)),b);return o.glDropdown({data:function(t,e){l.a.get(o.data("refsUrl"),{params:{ref:o.data("ref"),search:t}}).then((function(t){var n=t.data;return e(n)})).catch((function(){return Object(d.a)(Object(c.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:o.data("inputFieldName"),fieldName:h,renderRow:function(n){var r,i,a,o=t.cloneNode(!1),c=e.cloneNode(!1);return n===f&&(c.className="is-active"),c.textContent=n,c.dataset.ref=n,n.length>0&&p&&(c.href=Object(s.h)((a=n,(i=h)in(r={})?Object.defineProperty(r,i,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[i]=a,r),g)),o.appendChild(c),o},id:function(t,e){return e.attr("data-ref")},toggleLabel:function(t,e){return e.text().trim()},clicked:function(t){var e=t.e;p||e.preventDefault()}})}))}}],(n=null)&&h(e.prototype,n),r&&h(e,r),t}()}},[[2282,1,0,2]]]);
//# sourceMappingURL=pages.projects.commits.show.e6985645.chunk.js.map