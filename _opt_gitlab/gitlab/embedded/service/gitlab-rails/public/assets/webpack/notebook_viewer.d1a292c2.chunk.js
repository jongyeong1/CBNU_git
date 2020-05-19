(this.webpackJsonp=this.webpackJsonp||[]).push([[43],{1077:function(t,e,n){"use strict";n.r(e);var o=n(17),r=n(11),s=(n(30),n(129),n(38),n(65),n(311),n(55),n(68),n(283),n(91),n(246),n(89),n(3144)),a=n.n(s),i=n(747),u=n.n(i),l=n(2781),c=n.n(l),p=(n(72),{props:{type:{type:String,required:!1,default:""},count:{type:Number,required:!1,default:0},showOutput:{type:Boolean,required:!1,default:!0}},computed:{hasKeys:function(){return""!==this.type&&this.count},showTypeText:function(){return this.type&&this.count&&this.showOutput}}}),d=(n(3145),n(4)),h=Object(d.a)(p,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"prompt"},[this.showTypeText?e("span",[this._v(" "+this._s(this.type)+" ["+this._s(this.count)+"]: ")]):this._e()])}),[],!1,null,"1faf298a",null).exports,f=new a.a.Renderer,m="(\n    ^\\\\begin{[a-zA-Z]+}\\s\n    |\n    ^\\$\\$\n    |\n    \\s\\$(?!\\$)\n  )\n    ((.|\\n)+?)\n  (\n    \\s\\\\end{[a-zA-Z]+}$\n    |\n    \\$\\$$\n    |\n    \\$\n  )\n  ".replace(/\s/g,"").trim();f.paragraph=function(t){var e=t,n=!1;if(void 0!==c.a){var o=e.replace(/&amp;/g,"&").replace(/&=&/g,"\\space=\\space").replace(/<(\/?)em>/g,"_"),r=new RegExp(m,"gi"),s=o.search(r),a=o.match(r);if(a&&0!==a.length)if(s>0){var i=r.exec(o);for(n=!0;null!==i;){var u=c.a.renderToString(i[0].replace(/\$/g,""));e="".concat(e.replace(i[0]," ".concat(u))),i=r.exec(o)}}else{var l=r.exec(o);e=c.a.renderToString(l[2])}}return'<p class="'.concat(n?"inline-katex":"",'">').concat(e,"</p>")},a.a.setOptions({renderer:f});var y={components:{prompt:h},props:{cell:{type:Object,required:!0}},computed:{markdown:function(){return u()(a()(this.cell.source.join("").replace(/\\/g,"\\\\")),{allowedTags:["h1","h2","h3","h4","h5","h6","h7","h8","br","b","i","strong","em","a","pre","code","img","tt","div","ins","del","sup","sub","p","ol","ul","table","thead","tbody","tfoot","blockquote","dl","dt","dd","kbd","q","samp","var","hr","ruby","rt","rp","li","tr","td","th","s","strike","span","abbr","abbr","summary"],allowedAttributes:{"*":["class","style"],a:["href"],img:["src"]}})}}},g=(n(3147),Object(d.a)(y,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cell text-cell"},[e("prompt"),this._v(" "),e("div",{staticClass:"markdown",domProps:{innerHTML:this._s(this.markdown)}})],1)}),[],!1,null,null,null).exports),b=(n(69),n(67),n(46),n(3149)),v=n.n(b);n(3150),n(3151);v.a.plugins.customClass.map({comment:"c",error:"err",operator:"o",constant:"kc",namespace:"kn",keyword:"k",string:"s",number:"m","attr-name":"na",builtin:"nb",entity:"ni",function:"nf",tag:"nt",variable:"nv"});var x=v.a;function _(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var C={name:"CodeOutput",components:{Prompt:h},props:{count:{type:Number,required:!1,default:0},codeCssClass:{type:String,required:!1,default:""},type:{type:String,required:!0},rawCode:{type:String,required:!0},metadata:{type:Object,default:function(){return{}}}},computed:{code:function(){return this.rawCode},promptType:function(){var t=this.type.split("put")[0];return t.charAt(0).toUpperCase()+t.slice(1)},cellCssClass:function(){var t;return _(t={},this.codeCssClass,!0),_(t,"jupyter-notebook-scrolled",this.metadata.scrolled),t}},mounted:function(){x.highlightElement(this.$refs.code)}},w=Object(d.a)(C,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{class:this.type},[e("prompt",{attrs:{type:this.promptType,count:this.count}}),this._v(" "),e("pre",{ref:"code",staticClass:"language-python",class:this.cellCssClass,domProps:{textContent:this._s(this.code)}})],1)}),[],!1,null,null,null).exports,k=(n(24),n(49),n(56),n(40),n(18),n(36),n(41),{components:{Prompt:h},props:{count:{type:Number,required:!0},rawCode:{type:String,required:!0},index:{type:Number,required:!0}},computed:{sanitizedOutput:function(){return u()(this.rawCode,{allowedTags:u.a.defaults.allowedTags.concat(["img","svg"]),allowedAttributes:{img:["src"]}})},showOutput:function(){return 0===this.index}}}),O=Object(d.a)(k,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"output"},[e("prompt",{attrs:{type:"Out",count:this.count,"show-output":this.showOutput}}),this._v(" "),e("div",{domProps:{innerHTML:this._s(this.sanitizedOutput)}})],1)}),[],!1,null,null,null).exports,j={components:{prompt:h},props:{count:{type:Number,required:!0},outputType:{type:String,required:!0},rawCode:{type:String,required:!0},index:{type:Number,required:!0}},computed:{imgSrc:function(){return"data:".concat(this.outputType,";base64,").concat(this.rawCode)},showOutput:function(){return 0===this.index}}},q=Object(d.a)(j,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"output"},[e("prompt",{attrs:{type:"out",count:this.count,"show-output":this.showOutput}}),this._v(" "),e("img",{attrs:{src:this.imgSrc}})],1)}),[],!1,null,null,null).exports;function T(t){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}var E={props:{codeCssClass:{type:String,required:!1,default:""},count:{type:Number,required:!1,default:0},outputs:{type:Array,required:!0},metadata:{type:Object,default:function(){return{}}}},methods:{outputType:function(t){return t.text?"text/plain":t.data["image/png"]?"image/png":t.data["text/html"]?"text/html":t.data["image/svg+xml"]?"image/svg+xml":"text/plain"},dataForType:function(t,e){var n=t.data[e];return"object"===T(n)&&(n=n.join("")),n},getComponent:function(t){return t.text?w:t.data["image/png"]?q:t.data["text/html"]?O:t.data["image/svg+xml"]?O:w},rawCode:function(t){return t.text?t.text.join(""):this.dataForType(t,this.outputType(t))}}},S=Object(d.a)(E,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.outputs,(function(e,o){return n(t.getComponent(e),{key:o,tag:"component",attrs:{type:"output","output-type":t.outputType(e),count:t.count,index:o,"raw-code":t.rawCode(e),metadata:t.metadata,"code-css-class":t.codeCssClass}})})),1)}),[],!1,null,null,null).exports,$={name:"CodeCell",components:{CodeOutput:w,OutputCell:S},props:{cell:{type:Object,required:!0},codeCssClass:{type:String,required:!1,default:""}},computed:{rawInputCode:function(){return this.cell.source?this.cell.source.join(""):""},hasOutput:function(){return this.cell.outputs.length},outputs:function(){return this.cell.outputs}}},A=(n(3152),{components:{CodeCell:Object(d.a)($,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cell"},[n("code-output",{attrs:{"raw-code":t.rawInputCode,count:t.cell.execution_count,"code-css-class":t.codeCssClass,type:"input"}}),t._v(" "),t.hasOutput?n("output-cell",{attrs:{count:t.cell.execution_count,outputs:t.outputs,metadata:t.cell.metadata,"code-css-class":t.codeCssClass}}):t._e()],1)}),[],!1,null,"161c3b5f",null).exports,MarkdownCell:g},props:{notebook:{type:Object,required:!0},codeCssClass:{type:String,required:!1,default:""}},computed:{cells:function(){if(this.notebook.worksheets){return this.notebook.worksheets.reduce((function(t,e){var n=t;return n.cells=n.cells.concat(e.cells),n}),{cells:[]}).cells}return this.notebook.cells},hasNotebook:function(){return Object.keys(this.notebook).length}},methods:{cellType:function(t){return"".concat(t,"-cell")}}}),N=(n(3154),{components:{notebookLab:Object(d.a)(A,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hasNotebook?n("div",t._l(t.cells,(function(e,o){return n(t.cellType(e.cell_type),{key:o,tag:"component",attrs:{cell:e,"code-css-class":t.codeCssClass}})})),1):t._e()}),[],!1,null,null,null).exports,GlLoadingIcon:n(760).a},props:{endpoint:{type:String,required:!0}},data:function(){return{error:!1,loadError:!1,loading:!0,json:{}}},mounted:function(){var t=this;if(gon.katex_css_url){var e=document.createElement("link");e.setAttribute("rel","stylesheet"),e.setAttribute("href",gon.katex_css_url),document.head.appendChild(e)}if(gon.katex_js_url){var n=document.createElement("script");n.addEventListener("load",(function(){t.loadFile()})),n.setAttribute("src",gon.katex_js_url),document.head.appendChild(n)}else this.loadFile()},methods:{loadFile:function(){var t=this;r.a.get(this.endpoint).then((function(t){return t.data})).then((function(e){t.json=e,t.loading=!1})).catch((function(e){200!==e.status&&(t.loadError=!0),t.error=!0}))}}}),P=Object(d.a)(N,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"js-notebook-viewer-mounted container-fluid md prepend-top-default append-bottom-default"},[t.loading&&!t.error?n("div",{staticClass:"text-center loading"},[n("gl-loading-icon",{staticClass:"mt-5",attrs:{size:"lg"}})],1):t._e(),t._v(" "),t.loading||t.error?t._e():n("notebook-lab",{attrs:{notebook:t.json,"code-css-class":"code white"}}),t._v(" "),t.error?n("p",{staticClass:"text-center"},[t.loadError?n("span",{ref:"loadErrorMessage"},[t._v(t._s(t.__("An error occurred while loading the file. Please try again later.")))]):n("span",{ref:"parsingErrorMessage"},[t._v(t._s(t.__("An error occurred while parsing the file.")))])]):t._e()],1)}),[],!1,null,null,null).exports;e.default=function(){var t=document.getElementById("js-notebook-viewer");return new o.default({el:t,render:function(e){return e(P,{props:{endpoint:t.dataset.endpoint}})}})}},2652:function(t,e,n){var o=n(3146);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(75).default)("c7c4115a",o,!0,{})},2653:function(t,e,n){var o=n(3148);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(75).default)("63c0f238",o,!0,{})},2654:function(t,e,n){var o=n(3153);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(75).default)("c2441bd0",o,!0,{})},2655:function(t,e,n){var o=n(3155);"string"==typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);(0,n(75).default)("3ae8dc96",o,!0,{})},3145:function(t,e,n){"use strict";var o=n(2652);n.n(o).a},3146:function(t,e,n){(t.exports=n(74)(!1)).push([t.i,"\n.prompt[data-v-1faf298a] {\n  padding: 0 10px;\n  min-width: 7em;\n  font-family: monospace;\n}\n",""])},3147:function(t,e,n){"use strict";var o=n(2653);n.n(o).a},3148:function(t,e,n){(e=t.exports=n(74)(!1)).i(n(2664),""),e.push([t.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*\n  Importing the necessary katex stylesheet from the node_module folder rather\n  than copying the stylesheet into `app/assets/stylesheets/vendors` for\n  automatic importing via `app/assets/stylesheets/application.scss`. The reason\n  is that the katex stylesheet depends on many fonts that are in node_module\n  subfolders - moving all these fonts would make updating katex difficult.\n */\n.markdown .katex {\n  display: block;\n  text-align: center;\n}\n.markdown .inline-katex .katex {\n  display: inline;\n  text-align: initial;\n}\n",""])},3152:function(t,e,n){"use strict";var o=n(2654);n.n(o).a},3153:function(t,e,n){(t.exports=n(74)(!1)).push([t.i,"\n.cell[data-v-161c3b5f] {\n  flex-direction: column;\n}\n",""])},3154:function(t,e,n){"use strict";var o=n(2655);n.n(o).a},3155:function(t,e,n){(t.exports=n(74)(!1)).push([t.i,"\n.cell,\n.input,\n.output {\n  display: flex;\n  width: 100%;\n  margin-bottom: 10px;\n}\n.cell pre {\n  margin: 0;\n  width: 100%;\n}\n",""])}}]);
//# sourceMappingURL=notebook_viewer.d1a292c2.chunk.js.map