(this.webpackJsonp=this.webpackJsonp||[]).push([[197],{1126:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(42);var a=n(0),i=n.n(a);function r(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.addListeners(),this.initGLDropdown()}var t,n,a;return t=e,(n=[{key:"addListeners",value:function(){i()(".js-member-update-control").off("change").on("change",this.formSubmit.bind(this)),i()(".js-edit-member-form").off("ajax:success").on("ajax:success",this.formSuccess.bind(this)),gl.utils.disableButtonIfEmptyField("#user_ids","input[name=commit]","change")}},{key:"dropdownClicked",value:function(e){e.e.preventDefault(),this.formSubmit(null,e.$el)}},{key:"dropdownToggleLabel",value:function(e,t){return t.text()}},{key:"dropdownIsSelectable",value:function(e,t){return!t.hasClass("is-active")}},{key:"initGLDropdown",value:function(){var e=this;i()(".js-member-permissions-dropdown").each((function(t,n){var a=i()(n);a.glDropdown({selectable:!0,isSelectable:function(t,n){return e.dropdownIsSelectable(t,n)},fieldName:a.data("fieldName"),id:function(e,t){return t.data("id")},toggleLabel:function(t,n){return e.dropdownToggleLabel(t,n,a)},clicked:function(t){return e.dropdownClicked(t)}})}))}},{key:"formSubmit",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=e?i()(e.currentTarget):t,a=this.getMemberListItems(n),r=a.$toggle,o=a.$dateInput;n.closest("form").trigger("submit.rails"),r.disable(),o.disable()}},{key:"formSuccess",value:function(e){var t=this.getMemberListItems(i()(e.currentTarget).closest(".member")),n=t.$toggle,a=t.$dateInput;n.enable(),a.enable()}},{key:"getMemberListItems",value:function(e){var t=e.is(".member")?e:i()("#".concat(e.data("elId")));return{$memberListItem:t,$toggle:t.find(".dropdown-menu-toggle"),$dateInput:t.find(".js-access-expiration-date")}}}])&&r(t.prototype,n),a&&r(t,a),e}()},113:function(e,t,n){"use strict";n.r(t);var a=n(88),i=n(70),r=n(96);document.addEventListener("DOMContentLoaded",(function(){Object(r.a)(document,gon),new a.a,new i.a}))},188:function(e,t,n){
/*!
 * Pikaday
 *
 * Copyright © 2014 David Bushell | BSD & MIT license | https://github.com/Pikaday/Pikaday
 */
!function(t,a){"use strict";var i;try{i=n(!function(){var e=new Error("Cannot find module 'moment'");throw e.code="MODULE_NOT_FOUND",e}())}catch(e){}e.exports=function(e){var t="function"==typeof e,n=!!window.addEventListener,a=window.document,i=window.setTimeout,r=function(e,t,a,i){n?e.addEventListener(t,a,!!i):e.attachEvent("on"+t,a)},o=function(e,t,a,i){n?e.removeEventListener(t,a,!!i):e.detachEvent("on"+t,a)},s=function(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")},l=function(e,t){s(e,t)||(e.className=""===e.className?t:e.className+" "+t)},c=function(e,t){var n;e.className=(n=(" "+e.className+" ").replace(" "+t+" "," ")).trim?n.trim():n.replace(/^\s+|\s+$/g,"")},u=function(e){return/Array/.test(Object.prototype.toString.call(e))},d=function(e){return/Date/.test(Object.prototype.toString.call(e))&&!isNaN(e.getTime())},h=function(e){var t=e.getDay();return 0===t||6===t},f=function(e){return e%4==0&&e%100!=0||e%400==0},p=function(e,t){return[31,f(e)?29:28,31,30,31,30,31,31,30,31,30,31][t]},g=function(e){d(e)&&e.setHours(0,0,0,0)},m=function(e,t){return e.getTime()===t.getTime()},b=function(e,t,n){var a,i;for(a in t)(i=void 0!==e[a])&&"object"==typeof t[a]&&null!==t[a]&&void 0===t[a].nodeName?d(t[a])?n&&(e[a]=new Date(t[a].getTime())):u(t[a])?n&&(e[a]=t[a].slice(0)):e[a]=b({},t[a],n):!n&&i||(e[a]=t[a]);return e},v=function(e,t,n){var i;a.createEvent?((i=a.createEvent("HTMLEvents")).initEvent(t,!0,!1),i=b(i,n),e.dispatchEvent(i)):a.createEventObject&&(i=a.createEventObject(),i=b(i,n),e.fireEvent("on"+t,i))},y=function(e){return e.month<0&&(e.year-=Math.ceil(Math.abs(e.month)/12),e.month+=12),e.month>11&&(e.year+=Math.floor(Math.abs(e.month)/12),e.month-=12),e},w={field:null,bound:void 0,ariaLabel:"Use the arrow keys to pick a date",position:"bottom left",reposition:!0,format:"YYYY-MM-DD",toString:null,parse:null,defaultDate:null,setDefaultDate:!1,firstDay:0,formatStrict:!1,minDate:null,maxDate:null,yearRange:10,showWeekNumber:!1,pickWholeWeek:!1,minYear:0,maxYear:9999,minMonth:void 0,maxMonth:void 0,startRange:null,endRange:null,isRTL:!1,yearSuffix:"",showMonthAfterYear:!1,showDaysInNextAndPreviousMonths:!1,enableSelectionDaysInNextAndPreviousMonths:!1,numberOfMonths:1,mainCalendar:"left",container:void 0,blurFieldOnSelect:!0,i18n:{previousMonth:"Previous Month",nextMonth:"Next Month",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},theme:null,events:[],onSelect:null,onOpen:null,onClose:null,onDraw:null,keyboardInput:!0},_=function(e,t,n){for(t+=e.firstDay;t>=7;)t-=7;return n?e.i18n.weekdaysShort[t]:e.i18n.weekdays[t]},D=function(e){var t=[],n="false";if(e.isEmpty){if(!e.showDaysInNextAndPreviousMonths)return'<td class="is-empty"></td>';t.push("is-outside-current-month"),e.enableSelectionDaysInNextAndPreviousMonths||t.push("is-selection-disabled")}return e.isDisabled&&t.push("is-disabled"),e.isToday&&t.push("is-today"),e.isSelected&&(t.push("is-selected"),n="true"),e.hasEvent&&t.push("has-event"),e.isInRange&&t.push("is-inrange"),e.isStartRange&&t.push("is-startrange"),e.isEndRange&&t.push("is-endrange"),'<td data-day="'+e.day+'" class="'+t.join(" ")+'" aria-selected="'+n+'"><button class="pika-button pika-day" type="button" data-pika-year="'+e.year+'" data-pika-month="'+e.month+'" data-pika-day="'+e.day+'">'+e.day+"</button></td>"},j=function(e,t,n,a){return'<tr class="pika-row'+(n?" pick-whole-week":"")+(a?" is-selected":"")+'">'+(t?e.reverse():e).join("")+"</tr>"},k=function(e,t,n,a,i,r){var o,s,l,c,d,h=e._o,f=n===h.minYear,p=n===h.maxYear,g='<div id="'+r+'" class="pika-title" role="heading" aria-live="assertive">',m=!0,b=!0;for(l=[],o=0;o<12;o++)l.push('<option value="'+(n===i?o-t:12+o-t)+'"'+(o===a?' selected="selected"':"")+(f&&o<h.minMonth||p&&o>h.maxMonth?'disabled="disabled"':"")+">"+h.i18n.months[o]+"</option>");for(c='<div class="pika-label">'+h.i18n.months[a]+'<select class="pika-select pika-select-month" tabindex="-1">'+l.join("")+"</select></div>",u(h.yearRange)?(o=h.yearRange[0],s=h.yearRange[1]+1):(o=n-h.yearRange,s=1+n+h.yearRange),l=[];o<s&&o<=h.maxYear;o++)o>=h.minYear&&l.push('<option value="'+o+'"'+(o===n?' selected="selected"':"")+">"+o+"</option>");return d='<div class="pika-label">'+n+h.yearSuffix+'<select class="pika-select pika-select-year" tabindex="-1">'+l.join("")+"</select></div>",h.showMonthAfterYear?g+=d+c:g+=c+d,f&&(0===a||h.minMonth>=a)&&(m=!1),p&&(11===a||h.maxMonth<=a)&&(b=!1),0===t&&(g+='<button class="pika-prev'+(m?"":" is-disabled")+'" type="button">'+h.i18n.previousMonth+"</button>"),t===e._o.numberOfMonths-1&&(g+='<button class="pika-next'+(b?"":" is-disabled")+'" type="button">'+h.i18n.nextMonth+"</button>"),g+"</div>"},S=function(o){var l=this,c=l.config(o);l._onMouseDown=function(e){if(l._v){var t=(e=e||window.event).target||e.srcElement;if(t)if(s(t,"is-disabled")||(!s(t,"pika-button")||s(t,"is-empty")||s(t.parentNode,"is-disabled")?s(t,"pika-prev")?l.prevMonth():s(t,"pika-next")&&l.nextMonth():(l.setDate(new Date(t.getAttribute("data-pika-year"),t.getAttribute("data-pika-month"),t.getAttribute("data-pika-day"))),c.bound&&i((function(){l.hide(),c.blurFieldOnSelect&&c.field&&c.field.blur()}),100))),s(t,"pika-select"))l._c=!0;else{if(!e.preventDefault)return e.returnValue=!1,!1;e.preventDefault()}}},l._onChange=function(e){var t=(e=e||window.event).target||e.srcElement;t&&(s(t,"pika-select-month")?l.gotoMonth(t.value):s(t,"pika-select-year")&&l.gotoYear(t.value))},l._onKeyChange=function(e){if(e=e||window.event,l.isVisible())switch(e.keyCode){case 13:case 27:c.field&&c.field.blur();break;case 37:e.preventDefault(),l.adjustDate("subtract",1);break;case 38:l.adjustDate("subtract",7);break;case 39:l.adjustDate("add",1);break;case 40:l.adjustDate("add",7)}},l._onInputChange=function(n){var a;n.firedBy!==l&&(a=c.parse?c.parse(c.field.value,c.format):t?(a=e(c.field.value,c.format,c.formatStrict))&&a.isValid()?a.toDate():null:new Date(Date.parse(c.field.value)),d(a)&&l.setDate(a),l._v||l.show())},l._onInputFocus=function(){l.show()},l._onInputClick=function(){l.show()},l._onInputBlur=function(){var e=a.activeElement;do{if(s(e,"pika-single"))return}while(e=e.parentNode);l._c||(l._b=i((function(){l.hide()}),50)),l._c=!1},l._onClick=function(e){var t=(e=e||window.event).target||e.srcElement,a=t;if(t){!n&&s(t,"pika-select")&&(t.onchange||(t.setAttribute("onchange","return;"),r(t,"change",l._onChange)));do{if(s(a,"pika-single")||a===c.trigger)return}while(a=a.parentNode);l._v&&t!==c.trigger&&a!==c.trigger&&l.hide()}},l.el=a.createElement("div"),l.el.className="pika-single"+(c.isRTL?" is-rtl":"")+(c.theme?" "+c.theme:""),r(l.el,"mousedown",l._onMouseDown,!0),r(l.el,"touchend",l._onMouseDown,!0),r(l.el,"change",l._onChange),c.keyboardInput&&r(a,"keydown",l._onKeyChange),c.field&&(c.container?c.container.appendChild(l.el):c.bound?a.body.appendChild(l.el):c.field.parentNode.insertBefore(l.el,c.field.nextSibling),r(c.field,"change",l._onInputChange),c.defaultDate||(t&&c.field.value?c.defaultDate=e(c.field.value,c.format).toDate():c.defaultDate=new Date(Date.parse(c.field.value)),c.setDefaultDate=!0));var u=c.defaultDate;d(u)?c.setDefaultDate?l.setDate(u,!0):l.gotoDate(u):l.gotoDate(new Date),c.bound?(this.hide(),l.el.className+=" is-bound",r(c.trigger,"click",l._onInputClick),r(c.trigger,"focus",l._onInputFocus),r(c.trigger,"blur",l._onInputBlur)):this.show()};return S.prototype={config:function(e){this._o||(this._o=b({},w,!0));var t=b(this._o,e,!0);t.isRTL=!!t.isRTL,t.field=t.field&&t.field.nodeName?t.field:null,t.theme="string"==typeof t.theme&&t.theme?t.theme:null,t.bound=!!(void 0!==t.bound?t.field&&t.bound:t.field),t.trigger=t.trigger&&t.trigger.nodeName?t.trigger:t.field,t.disableWeekends=!!t.disableWeekends,t.disableDayFn="function"==typeof t.disableDayFn?t.disableDayFn:null;var n=parseInt(t.numberOfMonths,10)||1;if(t.numberOfMonths=n>4?4:n,d(t.minDate)||(t.minDate=!1),d(t.maxDate)||(t.maxDate=!1),t.minDate&&t.maxDate&&t.maxDate<t.minDate&&(t.maxDate=t.minDate=!1),t.minDate&&this.setMinDate(t.minDate),t.maxDate&&this.setMaxDate(t.maxDate),u(t.yearRange)){var a=(new Date).getFullYear()-10;t.yearRange[0]=parseInt(t.yearRange[0],10)||a,t.yearRange[1]=parseInt(t.yearRange[1],10)||a}else t.yearRange=Math.abs(parseInt(t.yearRange,10))||w.yearRange,t.yearRange>100&&(t.yearRange=100);return t},toString:function(n){return n=n||this._o.format,d(this._d)?this._o.toString?this._o.toString(this._d,n):t?e(this._d).format(n):this._d.toDateString():""},getMoment:function(){return t?e(this._d):null},setMoment:function(n,a){t&&e.isMoment(n)&&this.setDate(n.toDate(),a)},getDate:function(){return d(this._d)?new Date(this._d.getTime()):null},setDate:function(e,t){if(!e)return this._d=null,this._o.field&&(this._o.field.value="",v(this._o.field,"change",{firedBy:this})),this.draw();if("string"==typeof e&&(e=new Date(Date.parse(e))),d(e)){var n=this._o.minDate,a=this._o.maxDate;d(n)&&e<n?e=n:d(a)&&e>a&&(e=a),this._d=new Date(e.getTime()),g(this._d),this.gotoDate(this._d),this._o.field&&(this._o.field.value=this.toString(),v(this._o.field,"change",{firedBy:this})),t||"function"!=typeof this._o.onSelect||this._o.onSelect.call(this,this.getDate())}},gotoDate:function(e){var t=!0;if(d(e)){if(this.calendars){var n=new Date(this.calendars[0].year,this.calendars[0].month,1),a=new Date(this.calendars[this.calendars.length-1].year,this.calendars[this.calendars.length-1].month,1),i=e.getTime();a.setMonth(a.getMonth()+1),a.setDate(a.getDate()-1),t=i<n.getTime()||a.getTime()<i}t&&(this.calendars=[{month:e.getMonth(),year:e.getFullYear()}],"right"===this._o.mainCalendar&&(this.calendars[0].month+=1-this._o.numberOfMonths)),this.adjustCalendars()}},adjustDate:function(e,t){var n,a=this.getDate()||new Date,i=24*parseInt(t)*60*60*1e3;"add"===e?n=new Date(a.valueOf()+i):"subtract"===e&&(n=new Date(a.valueOf()-i)),this.setDate(n)},adjustCalendars:function(){this.calendars[0]=y(this.calendars[0]);for(var e=1;e<this._o.numberOfMonths;e++)this.calendars[e]=y({month:this.calendars[0].month+e,year:this.calendars[0].year});this.draw()},gotoToday:function(){this.gotoDate(new Date)},gotoMonth:function(e){isNaN(e)||(this.calendars[0].month=parseInt(e,10),this.adjustCalendars())},nextMonth:function(){this.calendars[0].month++,this.adjustCalendars()},prevMonth:function(){this.calendars[0].month--,this.adjustCalendars()},gotoYear:function(e){isNaN(e)||(this.calendars[0].year=parseInt(e,10),this.adjustCalendars())},setMinDate:function(e){e instanceof Date?(g(e),this._o.minDate=e,this._o.minYear=e.getFullYear(),this._o.minMonth=e.getMonth()):(this._o.minDate=w.minDate,this._o.minYear=w.minYear,this._o.minMonth=w.minMonth,this._o.startRange=w.startRange),this.draw()},setMaxDate:function(e){e instanceof Date?(g(e),this._o.maxDate=e,this._o.maxYear=e.getFullYear(),this._o.maxMonth=e.getMonth()):(this._o.maxDate=w.maxDate,this._o.maxYear=w.maxYear,this._o.maxMonth=w.maxMonth,this._o.endRange=w.endRange),this.draw()},setStartRange:function(e){this._o.startRange=e},setEndRange:function(e){this._o.endRange=e},draw:function(e){if(this._v||e){var t,n=this._o,a=n.minYear,r=n.maxYear,o=n.minMonth,s=n.maxMonth,l="";this._y<=a&&(this._y=a,!isNaN(o)&&this._m<o&&(this._m=o)),this._y>=r&&(this._y=r,!isNaN(s)&&this._m>s&&(this._m=s)),t="pika-title-"+Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,2);for(var c=0;c<n.numberOfMonths;c++)l+='<div class="pika-lendar">'+k(this,c,this.calendars[c].year,this.calendars[c].month,this.calendars[0].year,t)+this.render(this.calendars[c].year,this.calendars[c].month,t)+"</div>";this.el.innerHTML=l,n.bound&&"hidden"!==n.field.type&&i((function(){n.trigger.focus()}),1),"function"==typeof this._o.onDraw&&this._o.onDraw(this),n.bound&&n.field.setAttribute("aria-label",n.ariaLabel)}},adjustPosition:function(){var e,t,n,i,r,o,s,u,d,h,f,p;if(!this._o.container){if(this.el.style.position="absolute",t=e=this._o.trigger,n=this.el.offsetWidth,i=this.el.offsetHeight,r=window.innerWidth||a.documentElement.clientWidth,o=window.innerHeight||a.documentElement.clientHeight,s=window.pageYOffset||a.body.scrollTop||a.documentElement.scrollTop,f=!0,p=!0,"function"==typeof e.getBoundingClientRect)u=(h=e.getBoundingClientRect()).left+window.pageXOffset,d=h.bottom+window.pageYOffset;else for(u=t.offsetLeft,d=t.offsetTop+t.offsetHeight;t=t.offsetParent;)u+=t.offsetLeft,d+=t.offsetTop;(this._o.reposition&&u+n>r||this._o.position.indexOf("right")>-1&&u-n+e.offsetWidth>0)&&(u=u-n+e.offsetWidth,f=!1),(this._o.reposition&&d+i>o+s||this._o.position.indexOf("top")>-1&&d-i-e.offsetHeight>0)&&(d=d-i-e.offsetHeight,p=!1),this.el.style.left=u+"px",this.el.style.top=d+"px",l(this.el,f?"left-aligned":"right-aligned"),l(this.el,p?"bottom-aligned":"top-aligned"),c(this.el,f?"right-aligned":"left-aligned"),c(this.el,p?"top-aligned":"bottom-aligned")}},render:function(e,t,n){var a=this._o,i=new Date,r=p(e,t),o=new Date(e,t,1).getDay(),s=[],l=[];g(i),a.firstDay>0&&(o-=a.firstDay)<0&&(o+=7);for(var c=0===t?11:t-1,u=11===t?0:t+1,f=0===t?e-1:e,b=11===t?e+1:e,v=p(f,c),y=r+o,w=y;w>7;)w-=7;y+=7-w;for(var k,S,x,I,M=!1,O=0,T=0;O<y;O++){var C=new Date(e,t,O-o+1),E=!!d(this._d)&&m(C,this._d),R=m(C,i),N=-1!==a.events.indexOf(C.toDateString()),P=O<o||O>=r+o,L=O-o+1,A=t,F=e,Y=a.startRange&&m(a.startRange,C),B=a.endRange&&m(a.endRange,C),W=a.startRange&&a.endRange&&a.startRange<C&&C<a.endRange;P&&(O<o?(L=v+L,A=c,F=f):(L-=r,A=u,F=b));var q={day:L,month:A,year:F,hasEvent:N,isSelected:E,isToday:R,isDisabled:a.minDate&&C<a.minDate||a.maxDate&&C>a.maxDate||a.disableWeekends&&h(C)||a.disableDayFn&&a.disableDayFn(C),isEmpty:P,isStartRange:Y,isEndRange:B,isInRange:W,showDaysInNextAndPreviousMonths:a.showDaysInNextAndPreviousMonths,enableSelectionDaysInNextAndPreviousMonths:a.enableSelectionDaysInNextAndPreviousMonths};a.pickWholeWeek&&E&&(M=!0),l.push(D(q)),7==++T&&(a.showWeekNumber&&l.unshift((k=O-o,S=t,x=e,I=void 0,void 0,I=new Date(x,0,1),'<td class="pika-week">'+Math.ceil(((new Date(x,S,k)-I)/864e5+I.getDay()+1)/7)+"</td>")),s.push(j(l,a.isRTL,a.pickWholeWeek,M)),l=[],T=0,M=!1)}return function(e,t,n){return'<table cellpadding="0" cellspacing="0" class="pika-table" role="grid" aria-labelledby="'+n+'">'+function(e){var t,n=[];e.showWeekNumber&&n.push("<th></th>");for(t=0;t<7;t++)n.push('<th scope="col"><abbr title="'+_(e,t)+'">'+_(e,t,!0)+"</abbr></th>");return"<thead><tr>"+(e.isRTL?n.reverse():n).join("")+"</tr></thead>"}(e)+(a=t,"<tbody>"+a.join("")+"</tbody>")+"</table>";var a}(a,s,n)},isVisible:function(){return this._v},show:function(){this.isVisible()||(this._v=!0,this.draw(),c(this.el,"is-hidden"),this._o.bound&&(r(a,"click",this._onClick),this.adjustPosition()),"function"==typeof this._o.onOpen&&this._o.onOpen.call(this))},hide:function(){var e=this._v;!1!==e&&(this._o.bound&&o(a,"click",this._onClick),this.el.style.position="static",this.el.style.left="auto",this.el.style.top="auto",l(this.el,"is-hidden"),this._v=!1,void 0!==e&&"function"==typeof this._o.onClose&&this._o.onClose.call(this))},destroy:function(){var e=this._o;this.hide(),o(this.el,"mousedown",this._onMouseDown,!0),o(this.el,"touchend",this._onMouseDown,!0),o(this.el,"change",this._onChange),e.keyboardInput&&o(a,"keydown",this._onKeyChange),e.field&&(o(e.field,"change",this._onInputChange),e.bound&&(o(e.trigger,"click",this._onInputClick),o(e.trigger,"focus",this._onInputFocus),o(e.trigger,"blur",this._onInputBlur))),this.el.parentNode&&this.el.parentNode.removeChild(this.el)}},S}(i)}()},2404:function(e,t,n){n(105),n(113),e.exports=n(2405)},2405:function(e,t,n){"use strict";n.r(t);var a=n(1126),i=n(994),r=n(248),o=n(800);document.addEventListener("DOMContentLoaded",(function(){Object(i.a)(".js-access-expiration-date-groups"),Object(o.a)(),Object(i.a)(),new a.a,new r.a}))},70:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n(24),n(49),n(56),n(40),n(90),n(18),n(36),n(41);var a=n(8),i=n.n(a),r=n(9);function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var u=function(e){function t(){var e;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),e=s(this,l(t).call(this)),i.a.bind("g p",(function(){return Object(r.a)(".shortcuts-project")})),i.a.bind("g v",(function(){return Object(r.a)(".shortcuts-project-activity")})),i.a.bind("g r",(function(){return Object(r.a)(".shortcuts-project-releases")})),i.a.bind("g f",(function(){return Object(r.a)(".shortcuts-tree")})),i.a.bind("g c",(function(){return Object(r.a)(".shortcuts-commits")})),i.a.bind("g j",(function(){return Object(r.a)(".shortcuts-builds")})),i.a.bind("g n",(function(){return Object(r.a)(".shortcuts-network")})),i.a.bind("g d",(function(){return Object(r.a)(".shortcuts-repository-charts")})),i.a.bind("g i",(function(){return Object(r.a)(".shortcuts-issues")})),i.a.bind("g b",(function(){return Object(r.a)(".shortcuts-issue-boards")})),i.a.bind("g m",(function(){return Object(r.a)(".shortcuts-merge_requests")})),i.a.bind("g w",(function(){return Object(r.a)(".shortcuts-wiki")})),i.a.bind("g s",(function(){return Object(r.a)(".shortcuts-snippets")})),i.a.bind("g k",(function(){return Object(r.a)(".shortcuts-kubernetes")})),i.a.bind("g e",(function(){return Object(r.a)(".shortcuts-environments")})),i.a.bind("g l",(function(){return Object(r.a)(".shortcuts-metrics")})),i.a.bind("i",(function(){return Object(r.a)(".shortcuts-new-issue")})),e}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(t,e),t}(n(107).a)},73:function(e,t,n){"use strict";n(30),n(35),n(18),n(64);var a=n(0),i=n.n(a),r=n(32),o=(n(65),n(69),n(55),n(67),n(71));function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var l=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.projectSelectInput=i()(t),this.newItemBtn=i()(".new-project-item-link"),this.resourceType=this.newItemBtn.data("type"),this.resourceLabel=this.newItemBtn.data("label"),this.formattedText=this.deriveTextVariants(),this.groupId=this.projectSelectInput.data("groupId"),this.bindEvents(),this.initLocalStorage()}var t,a,r;return t=e,(a=[{key:"bindEvents",value:function(){var e=this;this.projectSelectInput.siblings(".new-project-item-select-button").on("click",(function(t){return e.openDropdown(t)})),this.newItemBtn.on("click",(function(t){e.getProjectFromLocalStorage()||(t.preventDefault(),e.openDropdown(t))})),this.projectSelectInput.on("change",(function(){return e.selectProject()}))}},{key:"initLocalStorage",value:function(){o.a.isLocalStorageAccessSafe()&&(this.localStorageKey=["group",this.groupId,this.formattedText.localStorageItemType,"recent-project"].join("-"),this.setBtnTextFromLocalStorage())}},{key:"openDropdown",value:function(e){n.e(239).then(n.t.bind(null,428,7)).then((function(){i()(e.currentTarget).siblings(".project-item-select").select2("open")})).catch((function(){}))}},{key:"selectProject",value:function(){var e=JSON.parse(this.projectSelectInput.val()),t={url:"".concat(e.url,"/").concat(this.projectSelectInput.data("relativePath")),name:e.name};this.setNewItemBtnAttributes(t),this.setProjectInLocalStorage(t)}},{key:"setBtnTextFromLocalStorage",value:function(){var e=this.getProjectFromLocalStorage();this.setNewItemBtnAttributes(e)}},{key:"setNewItemBtnAttributes",value:function(e){e?(this.newItemBtn.attr("href",e.url),this.newItemBtn.text("".concat(this.formattedText.defaultTextPrefix," in ").concat(e.name))):this.newItemBtn.text("Select project to create ".concat(this.formattedText.presetTextSuffix))}},{key:"getProjectFromLocalStorage",value:function(){var e=localStorage.getItem(this.localStorageKey);return JSON.parse(e)}},{key:"setProjectInLocalStorage",value:function(e){var t=JSON.stringify(e);localStorage.setItem(this.localStorageKey,t)}},{key:"deriveTextVariants",value:function(){var e=this.resourceLabel;return{localStorageItemType:"new-".concat(this.resourceType.split("_").join("-").slice(0,-1)),defaultTextPrefix:e,presetTextSuffix:this.resourceType.split("_").join(" ").slice(0,-1)}}}])&&s(t.prototype,a),r&&s(t,r),e}(),c=n(1),u=function(){i()(".ajax-project-select").each((function(e,t){var n,a=this,o=i()(t).data("simpleFilter")||!1,s=i()(t).data("select2");return this.groupId=i()(t).data("groupId"),this.userId=i()(t).data("userId"),this.includeGroups=i()(t).data("includeGroups"),this.allProjects=i()(t).data("allProjects")||!1,this.orderBy=i()(t).data("orderBy")||"id",this.withIssuesEnabled=i()(t).data("withIssuesEnabled"),this.withMergeRequestsEnabled=i()(t).data("withMergeRequestsEnabled"),this.withShared=void 0===i()(t).data("withShared")||i()(t).data("withShared"),this.includeProjectsInSubgroups=i()(t).data("includeProjectsInSubgroups")||!1,this.allowClear=i()(t).data("allowClear")||!1,n=Object(c.d)("ProjectSelect|Search for project"),this.includeGroups&&(n+=Object(c.d)("ProjectSelect| or group")),i()(t).select2({placeholder:n,minimumInputLength:0,query:function(e){var t,n=function(t){var n={results:t};return e.callback(n)};return t=a.includeGroups?function(t){return r.a.groups(e.term,{},(function(e){var a=e.concat(t);return n(a)}))}:n,a.groupId?r.a.groupProjects(a.groupId,e.term,{with_issues_enabled:a.withIssuesEnabled,with_merge_requests_enabled:a.withMergeRequestsEnabled,with_shared:a.withShared,include_subgroups:a.includeProjectsInSubgroups},t):a.userId?r.a.userProjects(a.userId,e.term,{with_issues_enabled:a.withIssuesEnabled,with_merge_requests_enabled:a.withMergeRequestsEnabled,with_shared:a.withShared,include_subgroups:a.includeProjectsInSubgroups},t):r.a.projects(e.term,{order_by:a.orderBy,with_issues_enabled:a.withIssuesEnabled,with_merge_requests_enabled:a.withMergeRequestsEnabled,membership:!a.allProjects},t)},id:function(e){return o?e.id:JSON.stringify({name:e.name,url:e.web_url})},text:function(e){return e.name_with_namespace||e.name},initSelection:function(e,t){return r.a.project(e.val()).then((function(e){var n=e.data;return t(n)}))},allowClear:this.allowClear,dropdownCssClass:"ajax-project-dropdown"}),s||o?t:new l(t)}))};t.a=function(){return n.e(239).then(n.t.bind(null,428,7)).then(u).catch((function(){}))}},800:function(e,t,n){"use strict";n(30),n(28),n(85),n(18),n(64),n(55),n(91);var a=n(93),i=n.n(a),r=n(0),o=n.n(r),s=n(11),l=n(32),c=n(16),u=n(1),d=function(){window.GROUP_SELECT_PER_PAGE=20,o()(".ajax-groups-select").each((function(){var e=o()(this),t=e.data("allAvailable"),n=e.data("skipGroups")||[],a=e.data("parentId"),r=a?l.a.subgroupsPath.replace(":id",a):l.a.groupsPath;e.select2({placeholder:Object(u.a)("Search for a group"),allowClear:e.hasClass("allowClear"),multiple:e.hasClass("multiselect"),minimumInputLength:0,ajax:{url:l.a.buildUrl(r),dataType:"json",quietMillis:250,transport:function(e){s.a[e.type.toLowerCase()](e.url,{params:e.data}).then((function(t){var n=t.data||[],a=Object(c.D)(t.headers),i=(parseInt(a["X-PAGE"],10)||0)<(parseInt(a["X-TOTAL-PAGES"],10)||0);e.success({results:n,pagination:{more:i}})})).catch(e.error)},data:function(e,n){return{search:e,page:n,per_page:window.GROUP_SELECT_PER_PAGE,all_available:t}},results:function(e,t){if(e.length)return{results:[]};var a=e.length?e:e.results||[],i=!!e.pagination&&e.pagination.more,r=a.filter((function(e){return-1===n.indexOf(e.id)}));return{results:r,page:t,more:i}}},initSelection:function(e,t){var n=o()(e).val();if(""!==n)return l.a.group(n,t)},formatResult:function(e){return"<div class='group-result'> <div class='group-name'>".concat(i()(e.full_name),"</div> <div class='group-path'>").concat(e.full_path,"</div> </div>")},formatSelection:function(e){return i()(e.full_name)},dropdownCssClass:"ajax-groups-dropdown select2-infinite",escapeMarkup:function(e){return e}}),e.on("select2-loaded",(function(){var e=document.querySelector(".select2-infinite .select2-results");e.style.height="".concat(Math.floor(e.scrollHeight),"px")}))}))};t.a=function(){return n.e(239).then(n.t.bind(null,428,7)).then(d).catch((function(){}))}},88:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n(42),n(89);var a=n(0),i=n.n(a),r=n(51),o=n.n(r),s=n(1),l=n(33);n(28),n(78),n(40),n(46),n(129),n(35),n(77),n(18),n(36),n(41);var c=function(e){return e.reduce((function(e,t){var n=t.name,a=t.value;return Object.assign(e,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,a))}),{})},u=n(11),d=n(14),h=n(73);function f(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}var p=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var t=i()("ul.clone-options-dropdown"),n=i()("#project_clone"),a=i()(".js-git-clone-holder .js-clone-dropdown-label"),r=document.querySelector(".js-mobile-git-clone .js-clone-dropdown-label"),s=a.text().trim();s.length>0&&i()("a:contains('".concat(s,"')"),t).addClass("is-active"),i()("a",t).on("click",(function(e){e.preventDefault();var a=i()(e.currentTarget),o=a.attr("href"),s=a.data("cloneType");i()(".is-active",t).removeClass("is-active"),i()('a[data-clone-type="'.concat(s,'"]')).each((function(){var e=i()(this),t=e.find(".dropdown-menu-inner-title").text(),n=e.closest(".project-clone-holder").find(".js-clone-dropdown-label");e.toggleClass("is-active"),n.text(t)})),r?r.dataset.clipboardText=o:n.val(o),i()(".js-git-empty .js-clone").text(o)})),e.initRefSwitcher(),i()(".project-refs-select").on("change",(function(){return i()(this).parents("form").submit()})),i()(".hide-no-ssh-message").on("click",(function(e){return o.a.set("hide_no_ssh_message","false"),i()(this).parents(".no-ssh-key-message").remove(),e.preventDefault()})),i()(".hide-no-password-message").on("click",(function(e){return o.a.set("hide_no_password_message","false"),i()(this).parents(".no-password-message").remove(),e.preventDefault()})),i()(".hide-auto-devops-implicitly-enabled-banner").on("click",(function(e){var t=i()(this).data("project-id"),n="hide_auto_devops_implicitly_enabled_banner_".concat(t);return o.a.set(n,"false"),i()(this).parents(".auto-devops-implicitly-enabled-banner").remove(),e.preventDefault()})),e.projectSelectDropdown()}var t,n,a;return t=e,a=[{key:"projectSelectDropdown",value:function(){Object(h.a)(),i()(".project-item-select").on("click",(function(t){return e.changeProject(i()(t.currentTarget).val())}))}},{key:"changeProject",value:function(e){return window.location=e}},{key:"initRefSwitcher",value:function(){var e=document.createElement("li"),t=document.createElement("a");return t.href="#",i()(".js-project-refs-dropdown").each((function(){var n,a,r,o=i()(this),h=o.data("selected"),f=o.data("fieldName"),p=Boolean(o.data("visit")),g=o.closest("form"),m=g.attr("action"),b=Object(l.h)((n=g[0],a=new FormData(n),r=Array.from(a.keys()).map((function(e){var t=a.getAll(e);return{name:e,value:1===(t=t.filter((function(e){return e}))).length?t[0]:t}})),c(r)),m);return o.glDropdown({data:function(e,t){u.a.get(o.data("refsUrl"),{params:{ref:o.data("ref"),search:e}}).then((function(e){var n=e.data;return t(n)})).catch((function(){return Object(d.a)(Object(s.a)("An error occurred while getting projects"))}))},selectable:!0,filterable:!0,filterRemote:!0,filterByText:!0,inputFieldName:o.data("inputFieldName"),fieldName:f,renderRow:function(n){var a,i,r,o=e.cloneNode(!1),s=t.cloneNode(!1);return n===h&&(s.className="is-active"),s.textContent=n,s.dataset.ref=n,n.length>0&&p&&(s.href=Object(l.h)((r=n,(i=f)in(a={})?Object.defineProperty(a,i,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[i]=r,a),b)),o.appendChild(s),o},id:function(e,t){return t.attr("data-ref")},toggleLabel:function(e,t){return t.text().trim()},clicked:function(e){var t=e.e;p||t.preventDefault()}})}))}}],(n=null)&&f(t.prototype,n),a&&f(t,a),e}()},994:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n(42),n(18),n(68);var a=n(0),i=n.n(a),r=n(188),o=n.n(r),s=n(62);function l(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:".js-access-expiration-date";function t(){i()(this).closest(".clearable-input").toggleClass("has-value",""!==i()(this).val())}var n=i()(e);n.each((function(e,n){var a=i()(n),r=new o.a({field:a.get(0),theme:"gitlab-theme animate-picker",format:"yyyy-mm-dd",minDate:new Date,container:a.parent().get(0),parse:function(e){return Object(s.n)(e)},toString:function(e){return Object(s.p)(e)},onSelect:function(e){a.val(r.toString(e)),a.trigger("change"),t.call(a)},firstDay:gon.first_day_of_week});r.setDate(Object(s.n)(a.val())),a.data("pikaday",r)})),n.next(".js-clear-input").on("click",(function(n){n.preventDefault();var a=i()(this).closest(".clearable-input").find(e);a.data("pikaday").setDate(null),a.trigger("change"),t.call(a)})),n.on("blur",t),n.each(t)}}},[[2404,1,0,2,8]]]);
//# sourceMappingURL=pages.projects.project_members.1fe03e37.chunk.js.map