(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{311:function(t,s,a){"use strict";a.r(s);var e=a(28),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("解释")]),t._v("：获取全局唯一的语音识别器"),a("code",[t._v("voiceRecognizer")]),t._v("。其在工具和真机中的实现有区别，详见"),a("a",{attrs:{href:"https://smartprogram.baidu.com/docs/develop/devtools/diff/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API 实现差异"),a("OutboundLink")],1),t._v("。"),a("br"),t._v(" "),a("strong",[t._v("Web 态说明")]),t._v("：受宿主环境限制，Web 态暂不支持 AI 能力相关接口。调用 swan.ai.getVoiceRecognizer 时，Web 态会做 "),a("strong",[t._v("打开百度 App 对应小程序页面")]),t._v(" 的降级处理。")]),t._v(" "),a("h2",{attrs:{id:"方法参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法参数"}},[t._v("#")]),t._v(" 方法参数")]),t._v(" "),a("p",[t._v("无")]),t._v(" "),a("h3",{attrs:{id:"返回值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#返回值"}},[t._v("#")]),t._v(" 返回值")]),t._v(" "),a("p",[t._v("voiceRecognizer")]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("openIde",{attrs:{url:"swanide://fragment/2e32098e4419e91a5bf1173f190369021573999089554"}}),t._v(" "),a("QRCode",{attrs:{url:"https://smartapp.baidu.com/mappconsole/api/packagescheme?appKey=4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c&path=fragment%2Fget-voice-recognizer%2Findex"}}),a("h3",{attrs:{id:"图片示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#图片示例"}},[t._v("#")]),t._v(" 图片示例")]),t._v(" "),a("div",{staticClass:"m-doc-custom-examples"},[a("div",{staticClass:"m-doc-custom-examples-correct"},[a("img",{attrs:{src:"https://b.bdstatic.com/miniapp/images/getVoiceRecognizer2.gif"}})]),t._v(" "),a("div",{staticClass:"m-doc-custom-examples-correct"},[a("img",{attrs:{src:"https://b.bdstatic.com/miniapp/images/getVoiceRecognizer3.gif"}})]),t._v(" "),a("div",{staticClass:"m-doc-custom-examples-correct"},[a("img",{attrs:{src:"https://b.bdstatic.com/miniapp/images/getVoiceRecognizer.gif"}})])]),t._v(" "),a("h3",{attrs:{id:"代码示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),a("CodeTabContent",{attrs:{name:"JS"}},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" host "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" swan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSystemInfoSync")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baiduboxapp'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" voiceRecognizer "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" swan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ai"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getVoiceRecognizer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    swan"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("showToast")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        title"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'此api目前仅可在百度App上使用'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        icon"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);