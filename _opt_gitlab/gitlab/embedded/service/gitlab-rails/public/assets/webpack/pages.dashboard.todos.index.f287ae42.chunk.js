(this.webpackJsonp=this.webpackJsonp||[]).push([[78],{2172:function(t,e,o){o(105),t.exports=o(2503)},2503:function(t,e,o){"use strict";o.r(e);o(42);var a=o(0),d=o.n(a),i=(o(321),o(33)),n=o(248),s=o(16),r=o(110),l=o(1),c=o(14),u=o(11);function p(t,e){for(var o=0;o<e.length;o++){var a=e[o];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}var h=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.initFilters(),this.bindEvents(),this.todo_ids=[],this.cleanupWrapper=this.cleanup.bind(this),document.addEventListener("beforeunload",this.cleanupWrapper)}var e,o,a;return e=t,(o=[{key:"cleanup",value:function(){this.unbindEvents(),document.removeEventListener("beforeunload",this.cleanupWrapper)}},{key:"unbindEvents",value:function(){d()(".js-done-todo, .js-undo-todo, .js-add-todo").off("click",this.updateRowStateClickedWrapper),d()(".js-todos-mark-all",".js-todos-undo-all").off("click",this.updateallStateClickedWrapper),d()(".todo").off("click",this.goToTodoUrl)}},{key:"bindEvents",value:function(){this.updateRowStateClickedWrapper=this.updateRowStateClicked.bind(this),this.updateAllStateClickedWrapper=this.updateAllStateClicked.bind(this),d()(".js-done-todo, .js-undo-todo, .js-add-todo").on("click",this.updateRowStateClickedWrapper),d()(".js-todos-mark-all, .js-todos-undo-all").on("click",this.updateAllStateClickedWrapper),d()(".todo").on("click",this.goToTodoUrl)}},{key:"initFilters",value:function(){return this.initFilterDropdown(d()(".js-group-search"),"group_id",["text"]),this.initFilterDropdown(d()(".js-project-search"),"project_id",["text"]),this.initFilterDropdown(d()(".js-type-search"),"type"),this.initFilterDropdown(d()(".js-action-search"),"action_id"),new n.a}},{key:"initFilterDropdown",value:function(t,e,o){t.glDropdown({fieldName:e,selectable:!0,filterable:!!o,search:{fields:o},data:t.data("data"),clicked:function(){var o=t.closest("form.filter-form");o.find('input[name="'.concat({group_id:"project_id",project_id:"group_id"}[e],'"]')).remove(),o.submit()}})}},{key:"updateRowStateClicked",value:function(t){var e=this;t.stopPropagation(),t.preventDefault();var o=t.target;o.setAttribute("disabled",!0),o.classList.add("disabled"),u.a[o.dataset.method](o.dataset.href).then((function(t){var a=t.data;e.updateRowState(o),e.updateBadges(a)})).catch((function(){return e.updateRowState(o,!0),Object(c.a)(Object(l.a)("Error updating status of to-do item."))}))}},{key:"updateRowState",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=t.closest("li"),a=o.querySelector(".js-undo-todo"),d=o.querySelector(".js-done-todo");t.classList.add("hidden"),t.removeAttribute("disabled"),t.classList.remove("disabled"),!0===e?(a.classList.add("hidden"),d.classList.remove("hidden")):t===d?(o.classList.add("done-reversible"),a.classList.remove("hidden")):t===a?(o.classList.remove("done-reversible"),d.classList.remove("hidden")):o.parentNode.removeChild(o)}},{key:"updateAllStateClicked",value:function(t){var e=this;t.stopPropagation(),t.preventDefault();var o=t.currentTarget;o.setAttribute("disabled",!0),o.classList.add("disabled"),u.a[o.dataset.method](o.dataset.href,{ids:this.todo_ids}).then((function(t){var a=t.data;e.updateAllState(o,a),e.updateBadges(a)})).catch((function(){return Object(c.a)(Object(l.a)("Error updating status for all to-do items."))}))}},{key:"updateAllState",value:function(t,e){var o=document.querySelector(".js-todos-mark-all"),a=document.querySelector(".js-todos-undo-all"),d=document.querySelector(".js-todos-list-container"),i=document.querySelector(".js-nothing-here-container");t.removeAttribute("disabled"),t.classList.remove("disabled"),this.todo_ids=t===o?e.updated_ids:[],a.classList.toggle("hidden"),o.classList.toggle("hidden"),d.classList.toggle("hidden"),i.classList.toggle("hidden")}},{key:"updateBadges",value:function(t){d()(document).trigger("todo:toggle",t.count),document.querySelector(".todos-pending .badge").innerHTML=Object(r.a)(t.count),document.querySelector(".todos-done .badge").innerHTML=Object(r.a)(t.done_count)}},{key:"goToTodoUrl",value:function(t){var e=this.dataset.url;e&&"A"!==t.target.tagName&&"IMG"!==t.target.tagName&&(t.stopPropagation(),t.preventDefault(),Object(s.A)(t)?window.open(e,"_blank"):Object(i.s)(e))}}])&&p(e.prototype,o),a&&p(e,a),t}();document.addEventListener("DOMContentLoaded",(function(){return new h}))}},[[2172,1,0,8]]]);
//# sourceMappingURL=pages.dashboard.todos.index.f287ae42.chunk.js.map