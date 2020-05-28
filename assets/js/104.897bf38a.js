(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{626:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",[t._v("H5 录音")]),t._v(" "),a("p",[t._v("Html5 JS 录音 mp3 wav 格式，支持 pc 和 Android、ios 部分浏览器")]),t._v(" "),a("h2",{attrs:{id:"an-zhuang"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#an-zhuang"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),a("h3",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[t._v("#")]),t._v(" NPM")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @neosjs/h5-recorder -S\n")])])]),a("h3",{attrs:{id:"yarn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#yarn"}},[t._v("#")]),t._v(" YARN")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" @neosjs/h5-recorder\n")])])]),a("blockquote",[a("p",[t._v("当前版本 1.0.4")])]),t._v(" "),a("h2",{attrs:{id:"api-jie-kou"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#api-jie-kou"}},[t._v("#")]),t._v(" API 接口")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Recorder.init(object)")])]),t._v(" "),a("li",[a("code",[t._v("Recorder.startRecord()")])]),t._v(" "),a("li",[a("code",[t._v("Recorder.stopRecord()")])]),t._v(" "),a("li",[a("code",[t._v("Recorder.closeRecord()")]),t._v(" "),a("BadgeTip",{attrs:{text:"v1.0.4及以上版本 新增此接口",type:"green"}})],1),t._v(" "),a("li",[a("code",[t._v("Recorder.getRecordBlob()")])]),t._v(" "),a("li",[a("code",[t._v("Recorder.pauseRecord()")]),t._v(" "),a("BadgeTip",{attrs:{text:"v1.0.1及以上版本 新增此接口",type:"green"}})],1),t._v(" "),a("li",[a("code",[t._v("Recorder.resumeRecord()")]),t._v(" "),a("BadgeTip",{attrs:{text:"v1.0.1及以上版本 新增此接口",type:"green"}})],1),t._v(" "),a("li",[a("code",[t._v("Recorder.playRecord(audioDomId)")])]),t._v(" "),a("li",[a("code",[t._v("Recorder.getRecordSrc(blobFile)")])]),t._v(" "),a("li",[a("s",[a("code",[t._v("Recorder.createWaves(config={},canvasDomId)")])]),t._v(" "),a("BadgeTip",{attrs:{text:"v1.0.1及以上版本 废弃此接口",type:"danger"}})],1),t._v(" "),a("li",[a("s",[a("code",[t._v("Recorder.uploadRecord(url, method , callback)")])]),t._v(" "),a("BadgeTip",{attrs:{text:"v1.0.1及以上版本 废弃此接口",type:"danger"}})],1),t._v(" "),a("li",[a("code",[t._v("Recorder.isSupport()")]),t._v(" "),a("BadgeTip",{attrs:{text:"v1.0.1及以上版本 新增此接口",type:"green"}})],1)]),t._v(" "),a("h2",{attrs:{id:"shi-li-dai-ma"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shi-li-dai-ma"}},[t._v("#")]),t._v(" 示例代码")]),t._v(" "),a("h3",{attrs:{id:"chu-shi-hua"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chu-shi-hua"}},[t._v("#")]),t._v(" 初始化")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Recorder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/h5-recorder'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化录音机")]),t._v("\nRecorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("init")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wav'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 音频类型")]),t._v("\n    sampleRate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 码率")]),t._v("\n    bitRate"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 采用数位")]),t._v("\n    waveForm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'wave'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 波形类型")]),t._v("\n      dom"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.waveContent'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 波形容器 css选择器")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("cb")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("switch")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("action"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'initState'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 初始化状态")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'connectRecord'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 连接录音")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'disconnectRecord'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 断开录音连接")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'startRecord'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始录音")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'stopRecord'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 停止录音")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'closeRecord'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关闭录音、释放资源")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pauseRecord'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 暂停录音")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'resumeRecord'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 恢复录音")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'playRecord'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 播放录音")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'isSupport'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 浏览器是否支持H5录音功能")]),t._v("\n        console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cb"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"chu-shi-hua-can-shu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chu-shi-hua-can-shu"}},[t._v("#")]),t._v(" 初试化参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("可选值")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("configs = {}")]),t._v(" "),a("td",[t._v("初始化录音机参数")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])]),t._v(" "),a("tr",[a("td",[t._v("configs['bitRate']")]),t._v(" "),a("td",[t._v("采样数位")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("8, 16")]),t._v(" "),a("td",[t._v("16")])]),t._v(" "),a("tr",[a("td",[t._v("configs['sampleRate']")]),t._v(" "),a("td",[t._v("采样率")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("16000")])]),t._v(" "),a("tr",[a("td",[t._v("configs['type']")]),t._v(" "),a("td",[t._v("音频类型")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("mp3、wav")]),t._v(" "),a("td",[t._v("wav")])]),t._v(" "),a("tr",[a("td",[t._v("configs['waveForm']")]),t._v(" "),a("td",[t._v("波形图 (v1.0.2 调整此参数)")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v("—")])]),t._v(" "),a("tr",[a("td",[t._v("configs['waveForm']['type']")]),t._v(" "),a("td",[t._v("波形图类型")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("frequency、wave")]),t._v(" "),a("td",[t._v("wave")])]),t._v(" "),a("tr",[a("td",[t._v("configs['waveForm']['dom']")]),t._v(" "),a("td",[t._v("波形容器 css 选择器")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("—")]),t._v(" "),a("td",[t._v(".waveContent")])])])]),t._v(" "),a("h3",{attrs:{id:"kai-shi-lu-yin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kai-shi-lu-yin"}},[t._v("#")]),t._v(" 开始录音 "),a("BadgeTip",{attrs:{text:"异步接口",type:"blue"}})],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Recorder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/h5-recorder'")]),t._v("\n\nRecorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("startRecord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"ting-zhi-lu-yin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ting-zhi-lu-yin"}},[t._v("#")]),t._v(" 停止录音 "),a("BadgeTip",{attrs:{text:"异步接口",type:"blue"}})],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Recorder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/h5-recorder'")]),t._v("\n\nRecorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopRecord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("success"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fail"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 或者")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Recorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopRecord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"can-shu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-shu"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否必填")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("success")]),t._v(" "),a("td",[t._v("成功的回调")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("fail")]),t._v(" "),a("td",[t._v("失败的回调")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("h3",{attrs:{id:"guan-bi-lu-yin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guan-bi-lu-yin"}},[t._v("#")]),t._v(" 关闭录音 "),a("BadgeTip",{attrs:{text:"异步接口",type:"blue"}}),t._v(" "),a("BadgeTip",{attrs:{text:"v1.0.4及以上版本 新增此接口",type:"green"}})],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Recorder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/h5-recorder'")]),t._v("\n\nRecorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("closeRecord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"sealui-customblock is-danger",staticStyle:{"padding-left":"3.5rem"}},[a("div",{staticClass:"sealui-customblock__icon"},[a("i",{staticClass:"sealui-icon-alert-triangle"})]),t._v(" "),a("p",[t._v("不需要录音的时候，必须调用此接口，关闭录音，释放资源！")])]),t._v(" "),a("h3",{attrs:{id:"bo-fang-lu-yin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bo-fang-lu-yin"}},[t._v("#")]),t._v(" 播放录音 "),a("BadgeTip",{attrs:{text:"异步接口",type:"blue"}})],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Recorder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/h5-recorder'")]),t._v("\n\nRecorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("playRecord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("audioDomId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"can-shu-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-shu-2"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否必填")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("audioDomId")]),t._v(" "),a("td",[t._v("audio 标签的 id")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("h3",{attrs:{id:"zan-ting-lu-yin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#zan-ting-lu-yin"}},[t._v("#")]),t._v(" 暂停录音 "),a("BadgeTip",{attrs:{text:"异步接口",type:"blue"}}),t._v(" "),a("BadgeTip",{attrs:{text:"v1.0.1及以上版本 新增此接口",type:"green"}})],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Recorder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/h5-recorder'")]),t._v("\n\nRecorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pauseRecord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"hui-fu-lu-yin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hui-fu-lu-yin"}},[t._v("#")]),t._v(" 恢复录音 "),a("BadgeTip",{attrs:{text:"异步接口",type:"blue"}}),t._v(" "),a("BadgeTip",{attrs:{text:"v1.0.1及以上版本 新增此接口",type:"green"}})],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Recorder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/h5-recorder'")]),t._v("\n\nRecorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resumeRecord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"huo-qu-lu-yin-wen-jian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#huo-qu-lu-yin-wen-jian"}},[t._v("#")]),t._v(" 获取录音文件 "),a("BadgeTip",{attrs:{text:"异步接口",type:"blue"}})],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Recorder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/h5-recorder'")]),t._v("\n\nRecorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRecordBlob")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"huo-qu-ben-di-src-di-zhi"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#huo-qu-ben-di-src-di-zhi"}},[t._v("#")]),t._v(" 获取本地 src 地址 "),a("BadgeTip",{attrs:{text:"异步接口",type:"blue"}})],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Recorder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/h5-recorder'")]),t._v("\n\nRecorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getRecordSrc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blobFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"can-shu-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-shu-3"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否必填")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("blobFile")]),t._v(" "),a("td",[t._v("blob 文件")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("h3",{attrs:{id:"chuang-jian-yi-ge-bo-xing-tu"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chuang-jian-yi-ge-bo-xing-tu"}},[t._v("#")]),t._v(" 创建一个波形图 "),a("BadgeTip",{attrs:{text:"异步接口",type:"blue"}}),t._v(" "),a("BadgeTip",{attrs:{text:"v1.0.1及以上版本 废弃此接口",type:"danger"}})],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Recorder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/h5-recorder'")]),t._v("\n\nRecorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createWaves")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("config"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" canvasDomId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"can-shu-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-shu-4"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否必填")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("config = {}")]),t._v(" "),a("td",[t._v("波形图的配置")]),t._v(" "),a("td",[t._v("object")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("config['bgColor']")]),t._v(" "),a("td",[t._v("波形图背景色")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("#ffffff")])]),t._v(" "),a("tr",[a("td",[t._v("config['gap']")]),t._v(" "),a("td",[t._v("每条线之间的间隔")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("6.5")])]),t._v(" "),a("tr",[a("td",[t._v("config['startX']")]),t._v(" "),a("td",[t._v("起始位置")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("5")])]),t._v(" "),a("tr",[a("td",[t._v("config['lineWidth']")]),t._v(" "),a("td",[t._v("线条宽度")]),t._v(" "),a("td",[t._v("number")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("5")])]),t._v(" "),a("tr",[a("td",[t._v("canvasDomId")]),t._v(" "),a("td",[t._v("canvas 元素 id")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("audioWaves")])])])]),t._v(" "),a("h3",{attrs:{id:"shang-chuan-yin-pin-wen-jian"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shang-chuan-yin-pin-wen-jian"}},[t._v("#")]),t._v(" 上传音频文件 "),a("BadgeTip",{attrs:{text:"异步接口",type:"blue"}}),t._v(" "),a("BadgeTip",{attrs:{text:"v1.0.1及以上版本 废弃此接口",type:"danger"}})],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Recorder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/h5-recorder'")]),t._v("\n\nRecorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("uploadRecord")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" method"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h4",{attrs:{id:"can-shu-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#can-shu-5"}},[t._v("#")]),t._v(" 参数")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("类型")]),t._v(" "),a("th",[t._v("是否必填")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("url")]),t._v(" "),a("td",[t._v("后端地址")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("是")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("method")]),t._v(" "),a("td",[t._v("方法")]),t._v(" "),a("td",[t._v("string")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("post")])]),t._v(" "),a("tr",[a("td",[t._v("callback")]),t._v(" "),a("td",[t._v("回调方法")]),t._v(" "),a("td",[t._v("function")]),t._v(" "),a("td",[t._v("否")]),t._v(" "),a("td",[t._v("-")])])])]),t._v(" "),a("h3",{attrs:{id:"huo-qu-liu-lan-qi-shi-fou-zhi-chi-lu-yin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#huo-qu-liu-lan-qi-shi-fou-zhi-chi-lu-yin"}},[t._v("#")]),t._v(" 获取浏览器是否支持录音 "),a("BadgeTip",{attrs:{text:"同步接口",type:"warn"}})],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Recorder "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@neosjs/h5-recorder'")]),t._v("\n\nRecorder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("isSupport")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 接口返回 true、false")]),t._v("\n")])])]),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#an-zhuang"}},[t._v("安装")])]),a("li",[a("a",{attrs:{href:"#api-jie-kou"}},[t._v("API 接口")])]),a("li",[a("a",{attrs:{href:"#shi-li-dai-ma"}},[t._v("示例代码")])])])]),a("p")])}),[],!1,null,null,null);s.default=n.exports}}]);