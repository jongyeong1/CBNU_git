(this.webpackJsonp=this.webpackJsonp||[]).push([[119],{2242:function(t,e,i){i(105),i(796),t.exports=i(2509)},2509:function(t,e,i){"use strict";function n(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}i.r(e);var s=function(){function t(e,i,n,s){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.inputElement=e,this.form=e.form,this.warningElement=i,this.originalSubmitElement=n,this.confirmSubmitElement=s,this.isValid=!1}var e,i,s;return e=t,s=[{key:"isPublicKey",value:function(t){return/^(ssh|ecdsa-sha2)-/.test(t)}}],(i=[{key:"register",value:function(){var t=this;this.form.addEventListener("submit",(function(e){return t.submit(e)})),this.confirmSubmitElement.addEventListener("click",(function(){t.isValid=!0,t.form.submit()})),this.inputElement.addEventListener("input",(function(){return t.toggleWarning(!1)}))}},{key:"submit",value:function(e){return this.isValid=t.isPublicKey(this.inputElement.value),!!this.isValid||(e.preventDefault(),this.toggleWarning(!0),!1)}},{key:"toggleWarning",value:function(t){this.warningElement.classList.toggle("hide",!t),this.originalSubmitElement.classList.toggle("hide",t)}}])&&n(e.prototype,i),s&&n(e,s),t}();document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".js-add-ssh-key-validation-input");if(t){var e=document.querySelector(".js-add-ssh-key-validation-warning"),i=t.form.querySelector(".js-add-ssh-key-validation-original-submit"),n=e.querySelector(".js-add-ssh-key-validation-confirm-submit");new s(t,e,i,n).register()}}))}},[[2242,1,0,7]]]);
//# sourceMappingURL=pages.profiles.keys.4846e93f.chunk.js.map