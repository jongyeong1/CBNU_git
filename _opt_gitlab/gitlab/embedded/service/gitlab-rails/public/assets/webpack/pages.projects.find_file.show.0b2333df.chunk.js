(this.webpackJsonp=this.webpackJsonp||[]).push([[154],{113:function(e,t,n){"use strict";n.r(t);var r=n(88),o=n(70),i=n(96);document.addEventListener("DOMContentLoaded",(function(){Object(i.a)(document,gon),new r.a,new o.a}))},2327:function(e,t,n){n(105),n(113),e.exports=n(2493)},2328:function(e,t,n){"use strict";var r=n(108),o=n(348);r({target:"String",proto:!0,forced:n(349)("bold")},{bold:function(){return o(this,"b","","")}})},2493:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=(n(28),n(42),n(65),n(55),n(283),n(2328),n(492)),a=n.n(i),c=n(747),s=n.n(c),u=n(11),l=n(33),f=n(14),d=n(1);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.element=t,this.options=n,this.goToBlob=this.goToBlob.bind(this),this.goToTree=this.goToTree.bind(this),this.selectRowDown=this.selectRowDown.bind(this),this.selectRowUp=this.selectRowUp.bind(this),this.filePaths={},this.inputElement=this.element.find(".file-finder-input"),this.initEvent(),this.inputElement.focus(),this.load(this.options.url)}var t,n,r;return t=e,r=[{key:"makeHtml",value:function(e,t,n){var r=o()("<tr class='tree-item'><td class='tree-item-file-name link-container'><a><i class='fa fa-file-text-o fa-fw'></i><span class='str-truncated'></span></a></td></tr>");return t?r.find("a").replaceWith(function(e,t,n){var r,o=0,i=0,a=[],c=n[o],s=t.substring(i,c);for(o=0,r=n.length;o<r;o+=1)c=n[o],(s=t.substring(i,c))&&(a.length&&e.append(a.join("").bold()),a=[],e.append(document.createTextNode(s))),a.push(t[c]),i=c+1;return a.length&&e.append(a.join("").bold()),e.append(document.createTextNode(t.substring(i)))}(r.find("a"),e,t).attr("href",n)):(r.find("a").attr("href",n),r.find(".str-truncated").text(e)),r}}],(n=[{key:"initEvent",value:function(){var e=this;this.inputElement.off("keyup"),this.inputElement.on("keyup",(function(t){var n=o()(t.target),r=n.val(),i=n.data("oldValue");if(r!==(null!=i?i:""))return n.data("oldValue",r),e.findFile(),e.element.find("tr.tree-item").eq(0).addClass("selected").focus()}))}},{key:"findFile",value:function(){var e=s()(this.inputElement.val()),t=e.length>0?a.a.filter(this.filePaths,e):this.filePaths;return this.renderList(t,e)}},{key:"load",value:function(e){var t=this;u.a.get(e).then((function(e){var n=e.data;t.element.find(".loading").hide(),t.filePaths=n,t.findFile(),t.element.find(".files-slider tr.tree-item").eq(0).addClass("selected").focus()})).catch((function(){return Object(f.a)(Object(d.a)("An error occurred while loading filenames"))}))}},{key:"renderList",value:function(t,n){var r,o=0,i=[],c=[];for(this.element.find(".tree-table > tbody").empty(),o=0,r=t.length;o<r;o+=1){var s=t[o];if(20===o)break;n&&(i=a.a.match(s,n));var u=Object(l.g)(this.options.blobUrlTemplate,Object(l.b)(s)),f=e.makeHtml(s,i,u);c.push(this.element.find(".tree-table > tbody").append(f))}return this.element.find(".empty-state").toggleClass("hidden",Boolean(c.length)),c}},{key:"selectRow",value:function(e){var t=this.element.find(".files-slider tr.tree-item"),n=this.element.find(".files-slider tr.tree-item.selected"),r=n.prev();if(t&&t.length>0)return n&&n.length>0?("UP"===e?r=n.prev():"DOWN"===e&&(r=n.next()),r.length>0&&(n.removeClass("selected"),n=r)):n=t.eq(0),n.addClass("selected").focus()}},{key:"selectRowUp",value:function(){return this.selectRow("UP")}},{key:"selectRowDown",value:function(){return this.selectRow("DOWN")}},{key:"goToTree",value:function(){return window.location.href=this.options.treeUrl}},{key:"goToBlob",value:function(){var e=this.element.find(".tree-item.selected .tree-item-file-name a");e.length&&e.get(0).click()}}])&&h(t.prototype,n),r&&h(t,r),e}(),b=(n(24),n(49),n(56),n(40),n(90),n(18),n(36),n(41),n(8)),m=n.n(b);function g(e){return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){return!t||"object"!==g(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var y=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=v(this,w(t).call(this));var r=m.a.stopCallback;return n.projectFindFile=e,m.a.stopCallback=function(e,t,o){return t!==n.projectFindFile.inputElement[0]||"up"!==o&&"down"!==o&&"esc"!==o&&"enter"!==o?r(e,t,o):(e.preventDefault(),!1)},m.a.bind("up",n.projectFindFile.selectRowUp),m.a.bind("down",n.projectFindFile.selectRowDown),m.a.bind("esc",n.projectFindFile.goToTree),m.a.bind("enter",n.projectFindFile.goToBlob),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,e),t}(n(70).a);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".js-file-finder"),t=new p(o()(".file-finder-holder"),{url:e.dataset.fileFindUrl,treeUrl:e.dataset.findTreeUrl,blobUrlTemplate:e.dataset.blobUrlTemplate});new y(t)}))},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(24),n(49),n(56),n(40),n(90),n(18),n(36),n(41);var r=n(8),o=n.n(r),i=n(9);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var l=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=c(this,s(t).call(this)),o.a.bind("g p",(function(){return Object(i.a)(".shortcuts-project")})),o.a.bind("g v",(function(){return Object(i.a)(".shortcuts-project-activity")})),o.a.bind("g r",(function(){return Object(i.a)(".shortcuts-project-releases")})),o.a.bind("g f",(function(){return Object(i.a)(".shortcuts-tree")})),o.a.bind("g c",(function(){return Object(i.a)(".shortcuts-commits")})),o.a.bind("g j",(function(){return Object(i.a)(".shortcuts-builds")})),o.a.bind("g n",(function(){return Object(i.a)(".shortcuts-network")})),o.a.bind("g d",(function(){return Object(i.a)(".shortcuts-repository-charts")})),o.a.bind("g i",(function(){return Object(i.a)(".shortcuts-issues")})),o.a.bind("g b",(function(){return Object(i.a)(".shortcuts-issue-boards")})),o.a.bind("g m",(function(){return Object(i.a)(".shortcuts-merge_requests")})),o.a.bind("g w",(function(){return Object(i.a)(".shortcuts-wiki")})),o.a.bind("g s",(function(){return Object(i.a)(".shortcuts-snippets")})),o.a.bind("g k",(function(){return Object(i.a)(".shortcuts-kubernetes")})),o.a.bind("g e",(function(){return Object(i.a)(".shortcuts-environments")})),o.a.bind("g l",(function(){return Object(i.a)(".shortcuts-metrics")})),o.a.bind("i",(function(){return Object(i.a)(".shortcuts-new-issue")})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),t}(n(107).a)},73:function(e,t,n){"use strict";n(30),n(35),n(18),n(64);var r=n(0),o=n.n(r),i=n(32),a=(n(65),n(69),n(55),n(67),n(71));function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectSelectInput=o()(t),this.newItemBtn=o()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var t,r,i;return t=e,(r=[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(t){return e.openDropdown(t)})),this.newItemBtn.on("click",(function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))})),this.projectSelectInput.on("change",(function(){return e.selectProject()}))}},{key:"initLocalStorage",value:function(){a.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(e){n.e(239).then(n.t.bind(null,428,7)).then((function(){o()(e.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&c(t.prototype,r),i&&c(t,i),e}(),u=n(1),l=function(){o()(".ajax-project-select").each((function(e,t){var n,r=this,a=o()(t).data("simpleFilter")||!1,c=o()(t).data("select2");return this.groupId=o()(t).data("groupId"),this.userId=o()(t).data("userId"),this.includeGroups=o()(t).data("includeGroups"),this.allProjects=o()(t).data("allProjects")||!1,this.orderBy=o()(t).data("orderBy")||"id",this.withIssuesEnabled=o()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=o()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===o()(t).data("withShared")||o()(t).data("withShared"),this.includeProjectsInSubgroups=o()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=o()(t).data("allowClear")||!1,n=Object(u.d)("ProjectSelect|Search for project"),this.includeGroups&&(n+=Object(u.d)("ProjectSelect| or group")),o()(t).select2({placeholder:n,minimumInputLength:0,query:function(e){var t,n=function(t){var n={results:t};return e.callback(n)};return t=r.includeGroups?function(t){return i.a.groups(e.term,{},(function(e){var r=e.concat(t);return n(r)}))}:n,r.groupId?i.a.groupProjects(r.groupId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},t):r.userId?i.a.userProjects(r.userId,e.term,{with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,with_shared:r.withShared,include_subgroups:r.includeProjectsInSubgroups},t):i.a.projects(e.term,{order_by:r.orderBy,with_issues_enabled:r.withIssuesEnabled,with_merge_requests_enabled:r.withMergeRequestsEnabled,membership:!r.allProjects},t)},id:function(e){return a?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},initSelection:function(e,t){return i.a.project(e.val()).then((function(e){var n=e.data;return t(n)}))},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),c||a?t:new s(t)}))};t.a=function(){return n.e(239).then(n.t.bind(null,428,7)).then(l).catch((function(){}))}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(42),n(89);var r=n(0),o=n.n(r),i=n(51),a=n.n(i),c=n(1),s=n(33);n(28),n(78),n(40),n(46),n(129),n(35),n(77),n(18),n(36),n(41);var u=function(e){return e.reduce((function(e,t){var n=t.name,r=t.value;return Object.assign(e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,r))}),{})},l=n(11),f=n(14),d=n(73);function h(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=o()("ul.clone-options-dropdown"),n=o()("#project_clone"),r=o()(".js-git-clone-holder .js-clone-dropdown-label"),i=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),c=r.text().trim();c.length>0&&o()("a:contains('".concat(c,"')"),t).addClass("is-active"),o()("a",t).on("click",(function(e){e.preventDefault();var r=o()(e.currentTarget),a=r.attr("href"),c=r.data("cloneType");o()(".is-active",t).removeClass("is-active"),o()('a[data-clone-type="'.concat(c,'"]')).each((function(){var e=o()(this),t=e.find(".dropdown-menu-inner-title").text(),n=e.closest(".project-clone-holder").find(".js-clone-dropdown-label");e.toggleClass("is-active"),n.text(t)})),i?i.dataset.clipboardText=a:n.val(a),o()(".js-git-empty .js-clone").text(a)})),e.initRefSwitcher(),o()(".project-refs-select").on("change",(function(){return o()(this).parents("form").submit()})),o()(".hide-no-ssh-message").on("click",(function(e){return a.a.set("hide_no_ssh_message","false"),o()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()})),o()(".hide-no-password-message").on("click",(function(e){return a.a.set("hide_no_password_message","false"),o()(this).parents(".no-password-message").remove(),e.preventDefault()})),o()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(e){var t=o()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(t);return a.a.set(n,"false"),o()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()})),e.projectSelectDropdown()}var t,n,r;return t=e,r=[{key:"projectSelectDropdown",value:function(){Object(d.a)(),o()(".project-item-select").on("click",(function(t){return e.changeProject(o()(t.currentTarget).val())}))}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var e=document.createElement("li"),t=document.createElement("a");return t.href="#",o()(".js-project-refs-dropdown").each((function(){var n,r,i,a=o()(this),d=a.data("selected"),h=a.data("fieldName"),p=Boolean(a.data("visit")),b=a.closest("form"),m=b.attr("action"),g=Object(s.h)((n=b[0],r=new FormData(n),i=Array.from(r.keys()).map((function(e){var t=r.getAll(e);return{name:e,value:1===(t=t.filter((function(e){return e}))).length?t[0]:t}})),u(i)),m);return a.glDropdown({data:function(e,t){l.a.get(a.data("refsUrl"),{params:{ref:a.data("ref"),search:e}}).then((function(e){var n=e.data;return t(n)})).catch((function(){return Object(f.a)(Object(c.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:a.data("inputFieldName"),fieldName:h,renderRow:function(n){var r,o,i,a=e.cloneNode(!1),c=t.cloneNode(!1);return n===d&&(c.className="is-active"),c.textContent=n,c.dataset.ref=n,n.length>0&&p&&(c.href=Object(s.h)((i=n,(o=h)in(r={})?Object.defineProperty(r,o,{value:i,enumerable:!0,configurable:!0,writable:!0}):r[o]=i,r),g)),a.appendChild(c),a},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(e){var t=e.e;p||t.preventDefault()}})}))}}],(n=null)&&h(t.prototype,n),r&&h(t,r),e}()}},[[2327,1,0,2]]]);
//# sourceMappingURL=pages.projects.find_file.show.0b2333df.chunk.js.map