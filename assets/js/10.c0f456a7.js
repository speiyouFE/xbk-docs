(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{482:function(e,t,n){},521:function(e,t,n){"use strict";var i=n(482);n.n(i).a},533:function(e,t,n){"use strict";n.r(t);n(21),n(56);var i={data:function(){return{hovering:!1,isExpanded:!1,fixedControl:!1}},props:{jsfiddle:Object,default:function(){return{}}},methods:{},computed:{blockClass:function(){return"demo-".concat(this.$router.currentRoute.path.split("/").pop())},iconClass:function(){return this.isExpanded?"sealui-icon-chevron-up":"sealui-icon-chevron-down"},controlText:function(){return this.isExpanded?"隐藏代码":"展示代码"},codeArea:function(){return this.$el.getElementsByClassName("meta")[0]},codeAreaHeight:function(){return this.$el.getElementsByClassName("description").length>0?Math.max(this.$el.getElementsByClassName("description")[0].clientHeight,this.$el.getElementsByClassName("highlight")[0].clientHeight):this.$el.getElementsByClassName("highlight")[0].clientHeight}},watch:{isExpanded:function(e){this.codeArea.style.height=e?"".concat(this.codeAreaHeight+1,"px"):"0"}},mounted:function(){var e=this;this.$nextTick((function(){var t=e.$el.getElementsByClassName("highlight")[0];0===e.$el.getElementsByClassName("description").length&&(t.style.width="100%",t.borderRight="none")}))}},s=(n(521),n(2)),o=Object(s.a)(i,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-block",class:[e.blockClass,{hover:e.hovering}],on:{mouseenter:function(t){e.hovering=!0},mouseleave:function(t){e.hovering=!1}}},[e._t("source"),e._v(" "),n("div",{staticClass:"description"},[e._t("default")],2),e._v(" "),n("div",{staticClass:"meta"},[e._t("highlight")],2),e._v(" "),n("div",{ref:"control",staticClass:"demo-block-control",on:{click:function(t){e.isExpanded=!e.isExpanded}}},[n("transition",{attrs:{name:"arrow-slide"}},[n("i",{class:[e.iconClass,{hovering:e.hovering}]})]),e._v(" "),n("transition",{attrs:{name:"text-slide"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.hovering,expression:"hovering"}]},[e._v(e._s(e.controlText))])])],1)],2)}),[],!1,null,null,null);t.default=o.exports}}]);