(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{566:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("切换视频来源 (暂时废弃) "),a("BadgeTip",{attrs:{text:"异步接口",type:"green"}})],1),t._v(" "),a("p",[t._v("切换视频来源")]),t._v(" "),a("h2",{attrs:{id:"api-jie-kou"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-jie-kou"}},[t._v("#")]),t._v(" API 接口")]),t._v(" "),a("h3",{attrs:{id:"this.-rtcapi.changepullflow-fromuserid-touserid-domid-needplayerid-mute"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this.-rtcapi.changepullflow-fromuserid-touserid-domid-needplayerid-mute"}},[t._v("#")]),t._v(" "),a("code",[t._v("this.$rtcApi.changePullFlow(fromUserID,toUserID,domID,needPlayerId,mute)")])]),t._v(" "),a("h2",{attrs:{id:"shi-li-dai-ma"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shi-li-dai-ma"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$rtcApi"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("changePullFlow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'123'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'456'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'changeVideo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"fan-hui-zhi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#fan-hui-zhi"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    videoSrc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 视频流地址")]),t._v("\n    playerId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 播放器id  如果传了 needPlayerId，则返回该字段")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n## 参数\n\n| 参数         | 说明                  | 类型    | 可选值 | 默认值 |\n| ------------ | --------------------- | ------- | ------ | ------ |\n| fromUserID   | 旧用户 id             | string  | —      | —      |\n| toUserID     | 新用户 id             | string  | —      | —      |\n| domID        | video 标签 ID         | string  | —      | —      |\n| needPlayerId | 是否需要返回播放器 ID | boolean | —      | "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("  |\n| mute         | 是否静音切换视频流    | boolean | —      | "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),t._v("  |\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("toc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);