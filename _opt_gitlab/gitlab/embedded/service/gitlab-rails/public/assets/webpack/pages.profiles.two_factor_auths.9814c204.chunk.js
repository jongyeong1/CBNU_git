(this.webpackJsonp=this.webpackJsonp||[]).push([[123],{2248:function(e,r,t){t(105),t(796),e.exports=t(2511)},2511:function(e,r,t){"use strict";t.r(r);var n=t(0),s=t.n(n),i=(t(42),t(697)),o=t.n(i),a=t(704),u=t(705);function d(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var h=function(){function e(r,t){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this.u2fUtils=null,this.container=r,this.renderNotSupported=this.renderNotSupported.bind(this),this.renderRegistered=this.renderRegistered.bind(this),this.renderError=this.renderError.bind(this),this.renderInProgress=this.renderInProgress.bind(this),this.renderSetup=this.renderSetup.bind(this),this.renderTemplate=this.renderTemplate.bind(this),this.register=this.register.bind(this),this.start=this.start.bind(this),this.appId=t.app_id,this.registerRequests=t.register_requests,this.signRequests=t.sign_requests,this.templates={notSupported:"#js-register-u2f-not-supported",setup:"#js-register-u2f-setup",inProgress:"#js-register-u2f-in-progress",error:"#js-register-u2f-error",registered:"#js-register-u2f-registered"}}var r,t,n;return r=e,(t=[{key:"start",value:function(){var e=this;return Object(a.a)().then((function(r){e.u2fUtils=r,e.renderSetup()})).catch((function(){return e.renderNotSupported()}))}},{key:"register",value:function(){var e=this;return this.u2fUtils.register(this.appId,this.registerRequests,this.signRequests,(function(r){if(r.errorCode){var t=new u.a(r.errorCode,"register");return e.renderError(t)}return e.renderRegistered(JSON.stringify(r))}),10)}},{key:"renderTemplate",value:function(e,r){var t=s()(this.templates[e]).html(),n=o()(t);return this.container.html(n(r))}},{key:"renderSetup",value:function(){return this.renderTemplate("setup"),this.container.find("#js-setup-u2f-device").on("click",this.renderInProgress)}},{key:"renderInProgress",value:function(){return this.renderTemplate("inProgress"),this.register()}},{key:"renderError",value:function(e){return this.renderTemplate("error",{error_message:e.message(),error_code:e.errorCode}),this.container.find("#js-u2f-try-again").on("click",this.renderSetup)}},{key:"renderRegistered",value:function(e){return this.renderTemplate("registered"),this.container.find("#js-device-response").val(e)}},{key:"renderNotSupported",value:function(){return this.renderTemplate("notSupported")}}])&&d(r.prototype,t),n&&d(r,n),e}(),c=t(16);document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".js-two-factor-auth");if(Object(c.F)(e.dataset.twoFactorSkippable)){var r='<a class="btn btn-sm btn-warning float-right" data-qa-selector="configure_it_later_button" data-method="patch" href="'.concat(e.dataset.two_factor_skip_url,'">Configure it later</a>'),t=document.querySelector(".flash-alert");t&&t.insertAdjacentHTML("beforeend",r)}new h(s()("#js-register-u2f"),gon.u2f).start()}))}},[[2248,1,0,7,11]]]);
//# sourceMappingURL=pages.profiles.two_factor_auths.9814c204.chunk.js.map