(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4780d977"],{"12b2":function(t,e,i){"use strict";var a=i("2b0e");e["a"]=a["default"].extend({name:"v-card-title",functional:!0,props:{primaryTitle:Boolean},render:function(t,e){var i=e.data,a=e.props,r=e.children;return i.staticClass=("v-card__title "+(i.staticClass||"")).trim(),a.primaryTitle&&(i.staticClass+=" v-card__title--primary"),t("div",i,r)}})},"253d":function(t,e,i){},2677:function(t,e,i){"use strict";i.d(e,"a",function(){return c});var a=i("8654"),r=i("a844"),n=i("7cf7"),s=i("ab6d"),o=i("d9bd"),c={functional:!0,$_wrapperFor:a["a"],props:{textarea:Boolean,multiLine:Boolean},render:function(t,e){var i=e.props,l=e.data,u=e.slots,h=e.parent;Object(s["a"])(l);var d=Object(n["a"])(u(),t);return i.textarea&&Object(o["d"])("<v-text-field textarea>","<v-textarea outline>",c,h),i.multiLine&&Object(o["d"])("<v-text-field multi-line>","<v-textarea>",c,h),i.textarea||i.multiLine?(l.attrs.outline=i.textarea,t(r["a"],l,d)):t(a["a"],l,d)}}},"4c34":function(t,e,i){},"7e63":function(t,e,i){},9910:function(t,e,i){"use strict";i.d(e,"a",function(){return c});var a=i("80d2"),r=i("a523"),n=i("549c"),s=i("0e8f"),o=i("a722"),c=Object(a["e"])("spacer","div","v-spacer");r["a"],n["a"],s["a"],o["a"]},"99d9":function(t,e,i){"use strict";var a=i("80d2"),r=i("b0af"),n=(i("253d"),i("4c34"),i("23bf")),s=i("58df"),o=Object(s["a"])(n["a"]).extend({name:"v-responsive",props:{aspectRatio:[String,Number]},computed:{computedAspectRatio:function(){return Number(this.aspectRatio)},aspectStyle:function(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer:function(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-responsive__content"},this.$slots.default)}},render:function(t){return t("div",{staticClass:"v-responsive",style:{height:Object(a["c"])(this.height),maxHeight:Object(a["c"])(this.maxHeight),maxWidth:Object(a["c"])(this.maxWidth),width:Object(a["c"])(this.width)},on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=o,l=i("d9bd"),u=c.extend({name:"v-img",props:{alt:String,contain:Boolean,src:{type:[String,Object],default:""},gradient:String,lazySrc:String,srcset:String,sizes:String,position:{type:String,default:"center center"},transition:{type:[Boolean,String],default:"fade-transition"}},data:function(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0}},computed:{computedAspectRatio:function(){return this.normalisedSrc.aspect},normalisedSrc:function(){return"string"===typeof this.src?{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||this.calculatedAspectRatio)}:{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect||this.calculatedAspectRatio)}},__cachedImage:function(){if(!this.normalisedSrc.src&&!this.normalisedSrc.lazySrc)return[];var t=[],e=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&t.push("linear-gradient("+this.gradient+")"),e&&t.push('url("'+e+'")');var i=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:t.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[i]):i}},watch:{src:function(){this.isLoading?this.loadImage():this.init()},"$vuetify.breakpoint.width":"getSrc"},beforeMount:function(){this.init()},methods:{init:function(){if(this.normalisedSrc.lazySrc){var t=new Image;t.src=this.normalisedSrc.lazySrc,this.pollForSize(t,null)}this.normalisedSrc.src&&this.loadImage()},onLoad:function(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src)},onError:function(){Object(l["a"])("Image load failed\n\nsrc: "+this.normalisedSrc.src,this),this.$emit("error",this.src)},getSrc:function(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage:function(){var t=this,e=new Image;this.image=e,e.onload=function(){e.decode?e.decode().catch(function(e){Object(l["c"])("Failed to decode image, trying to render anyway\n\nsrc: "+t.normalisedSrc.src+(e.message?"\nOriginal error: "+e.message:""),t)}).then(t.onLoad):t.onLoad()},e.onerror=this.onError,e.src=this.normalisedSrc.src,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100,a=function a(){var r=t.naturalHeight,n=t.naturalWidth;r||n?e.calculatedAspectRatio=n/r:null!=i&&setTimeout(a,i)};a()},__genPlaceholder:function(){if(this.$slots.placeholder){var t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},this.$slots.placeholder)]:[];return this.transition?this.$createElement("transition",{attrs:{name:this.transition}},t):t[0]}}},render:function(t){var e=c.options.render.call(this,t);return e.data.staticClass+=" v-image",e.data.attrs={role:this.alt?"img":void 0,"aria-label":this.alt},e.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],t(e.tag,e.data,e.children)}}),h=u.extend({name:"v-card-media",mounted:function(){Object(l["d"])("v-card-media",this.src?"v-img":"v-responsive",this)}}),d=i("12b2"),g=i("2b0e");i.d(e,"a",function(){return p}),i.d(e,"b",function(){return f});var p=g["default"].extend(Object(a["e"])("v-card__actions")),f=g["default"].extend(Object(a["e"])("v-card__text"));r["a"],d["a"]},a844:function(t,e,i){"use strict";i("7e63");var a=i("8654"),r=i("d9bd"),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var a in i)Object.prototype.hasOwnProperty.call(i,a)&&(t[a]=i[a])}return t};e["a"]={name:"v-textarea",extends:a["a"],props:{autoGrow:Boolean,noResize:Boolean,outline:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(t){return!isNaN(parseFloat(t))}},rows:{type:[Number,String],default:5,validator:function(t){return!isNaN(parseInt(t,10))}}},computed:{classes:function(){return n({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},a["a"].computed.classes.call(this,null))},dynamicHeight:function(){return this.autoGrow?this.inputHeight:"auto"},isEnclosed:function(){return this.textarea||a["a"].computed.isEnclosed.call(this)},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{lazyValue:function(){!this.internalChange&&this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var t=this;setTimeout(function(){t.autoGrow&&t.calculateInputHeight()},0),this.autoGrow&&this.noResize&&Object(r["b"])('"no-resize" is now implied when using "auto-grow", and can be removed',this)},methods:{calculateInputHeight:function(){var t=this.$refs.input;if(t){t.style.height=0;var e=t.scrollHeight,i=parseInt(this.rows,10)*parseFloat(this.rowHeight);t.style.height=Math.max(i,e)+"px"}},genInput:function(){var t=a["a"].methods.genInput.call(this);return t.tag="textarea",delete t.data.attrs.type,t.data.attrs.rows=this.rows,t},onInput:function(t){a["a"].methods.onInput.call(this,t),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(t){this.isFocused&&13===t.keyCode&&t.stopPropagation(),this.internalChange=!0,this.$emit("keydown",t)}}}},d021:function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-dialog",{attrs:{persistent:""},model:{value:t.showDialog,callback:function(e){t.showDialog=e},expression:"showDialog"}},[i("v-card",[i("v-card-title",[i("v-icon",{attrs:{large:"",left:"",color:"warning"}},[t._v("warning")]),i("span",{staticClass:"headline font-weight-bold",attrs:{color:"warning"}},[t._v("Notice")])],1),i("v-card-text",[i("v-text-field",{attrs:{value:t.errorType,label:"Error Type",disabled:""}}),i("v-text-field",{attrs:{value:t.errorMessage,label:"Error Message",disabled:""}})],1),i("v-card-text",[t.errorStack?i("v-textarea",{attrs:{error:"",label:"Error Stack",outline:"",readonly:"",value:t.errorStack}}):t._e()],1),i("v-card-actions",[i("v-btn",{attrs:{color:"info",dark:""},on:{click:function(e){t.refresh(!1)}}},[t._v("Refresh")]),i("v-btn",{attrs:{color:"error",dark:""},on:{click:function(e){t.signOut(!1)}}},[t._v("Sign Out")]),i("v-spacer"),i("v-btn",{attrs:{color:"primary",dark:""},on:{click:function(e){t.cancel(!1)}}},[t._v("Cancel")])],1)],1)],1)},r=[],n=i("a34a"),s=i.n(n),o=i("0c12");function c(t){return function(){var e=this,i=arguments;return new Promise(function(a,r){var n=t.apply(e,i);function s(t,e){try{var i=n[t](e),s=i.value}catch(t){return void r(t)}i.done?a(s):Promise.resolve(s).then(o,c)}function o(t){s("next",t)}function c(t){s("throw",t)}o()})}}var l={name:"WarningDialog",data:function(){return{showDialog:!1,errorMessage:null,errorType:null,errorStack:null}},mounted:function(){var t=this;o["a"].$on("WarningDialog",function(e){t.showDialog=e.showDialog,t.errorMessage=e.errorMessage,t.errorType=e.errorType,t.errorStack=e.errorStack})},methods:{cancel:function(){var t=c(s.a.mark(function t(e){return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log("refresh showDialog"),this.showDialog=e;case 2:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),refresh:function(){var t=c(s.a.mark(function t(e){return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("refresh showDialog"),this.showDialog=e,t.next=4,this.$emit("closeWarningRefresh");case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),signOut:function(){var t=c(s.a.mark(function t(e){return s.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return console.log("signOut showDialog"),this.showDialog=e,t.next=4,this.$emit("closeWarningSignOut");case 4:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}()}},u=l,h=i("2877"),d=i("6544"),g=i.n(d),p=i("8336"),f=i("b0af"),m=i("99d9"),v=i("12b2"),w=i("169a"),S=i("132d"),b=i("9910"),y=i("2677"),_=i("a844"),x=Object(h["a"])(u,a,r,!1,null,null,null);x.options.__file="WarningDialog.vue";e["default"]=x.exports;g()(x,{VBtn:p["a"],VCard:f["a"],VCardActions:m["a"],VCardText:m["b"],VCardTitle:v["a"],VDialog:w["a"],VIcon:S["a"],VSpacer:b["a"],VTextField:y["a"],VTextarea:_["a"]})}}]);
//# sourceMappingURL=chunk-4780d977.39e9252c.js.map