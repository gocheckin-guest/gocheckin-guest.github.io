(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b33d6d26"],{"3ef9":function(t,n,e){},"7c0a":function(t,n,e){"use strict";var i=e("3ef9"),o=e.n(i);o.a},be70:function(t,n,e){"use strict";e.r(n);var i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-container",[e("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("h1",{staticClass:"display-2 font-weight-bold mb-3"},[t._v("\n          "+t._s(t.$t("message.hello"))+" Key\n        ")]),e("h2",[t._v("width: "+t._s(t.width))]),e("h2",[t._v("height: "+t._s(t.height))])])],1)],1)},o=[],a=e("a34a"),r=e.n(a);function u(t){return function(){var n=this,e=arguments;return new Promise(function(i,o){var a=t.apply(n,e);function r(t,n){try{var e=a[t](n),r=e.value}catch(t){return void o(t)}e.done?i(r):Promise.resolve(r).then(u,s)}function u(t){r("next",t)}function s(t){r("throw",t)}u()})}}var s={data:function(){return{imagePath:"face/0.jpg"}},mounted:function(){},computed:{width:{get:function(){return this.$window.width}},height:{get:function(){return this.$window.height}}},methods:{signOut:function(){var t=u(r.a.mark(function t(){return r.a.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.$store.dispatch("session/logout").catch(function(t){return console.log("logout!!!",t)});case 1:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}},c=s,h=(e("7c0a"),e("2877")),f=e("6544"),l=e.n(f),d=e("a523"),w=e("0e8f"),p=e("a722"),v=Object(h["a"])(c,i,o,!1,null,null,null);v.options.__file="Key.vue";n["default"]=v.exports;l()(v,{VContainer:d["a"],VFlex:w["a"],VLayout:p["a"]})}}]);
//# sourceMappingURL=chunk-b33d6d26.f9120a2b.js.map