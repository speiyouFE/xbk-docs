(window.webpackJsonp=window.webpackJsonp||[]).push([[3,13],{457:function(t,e,n){},483:function(t,e,n){"use strict";var a=n(457);n.n(a).a},484:function(t,e,n){},488:function(t,e,n){"use strict";n.r(e);var a=n(70),u=n(0),o={"/":{message:"New content is available.",buttonText:"Refresh"},"/zh/":{message:"发现新内容可用",buttonText:"刷新"},"/ru/":{message:"Доступен новый контент.",buttonText:"Обновить"},"/uk/":{message:"Доступний новий контент.",buttonText:"Оновити"},"/ja/":{message:"新しいコンテンツがあります。",buttonText:"更新する"},"/es/":{message:"Hay nuevo contenido disponible.",buttonText:"Actualizar"}},s={name:"SWUpdatePopup",data:function(){return{rawPopupConfig:{message:"发现有新内容可用",buttonText:"刷 新"},updateEvent:null}},computed:{popupConfig:function(){return Object(u.g)(this,this.rawPopupConfig)},enabled:function(){return Boolean(this.popupConfig&&this.updateEvent)},message:function(){var t=this.popupConfig;return t&&t.message||o["/"].message},buttonText:function(){var t=this.popupConfig;return t&&t.buttonText||o["/"].buttonText}},created:function(){a.a.$on("sw-updated",this.onSWUpdated),!0==={message:"发现有新内容可用",buttonText:"刷 新"}&&(this.rawPopupConfig=o)},methods:{onSWUpdated:function(t){this.updateEvent=t},reload:function(){this.updateEvent&&(this.updateEvent.skipWaiting().then((function(){location.reload(!0)})),this.updateEvent=null)}}},i=(n(483),n(2)),p=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"sw-update-popup"}},[t._t("default",[t.enabled?n("div",{staticClass:"sw-update-popup"},[t._v("\n      "+t._s(t.message)+"\n\n      "),n("br"),t._v(" "),n("button",{on:{click:t.reload}},[t._v("\n        "+t._s(t.buttonText)+"\n      ")])]):t._e()],{reload:t.reload,enabled:t.enabled,message:t.message,buttonText:t.buttonText})],2)}),[],!1,null,"03f17113",null);e.default=p.exports},522:function(t,e,n){"use strict";var a=n(484);n.n(a).a},538:function(t,e,n){"use strict";n.r(e);var a={components:{SWUpdatePopup:n(488).default}},u=(n(522),n(2)),o=Object(u.a)(a,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("SWUpdatePopup",{scopedSlots:t._u([{key:"default",fn:function(e){var a=e.enabled,u=e.reload,o=e.message,s=e.buttonText;return a?n("div",{staticClass:"sealui-update-popup"},[t._v("\n    "+t._s(o)),n("br"),t._v(" "),n("sc-button",{attrs:{type:"primary",size:"small"},on:{click:u}},[t._v(t._s(s))])],1):t._e()}}],null,!0)})}),[],!1,null,null,null);e.default=o.exports}}]);