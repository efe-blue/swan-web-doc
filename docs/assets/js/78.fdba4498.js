(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{344:function(t,a,s){"use strict";s.r(a);var n=s(28),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("在工具和真机中的实现有区别，详见"),s("a",{attrs:{href:"https://smartapp.baidu.com/docs/develop/devtools/diff/",target:"_blank",rel:"noopener noreferrer"}},[t._v("API 实现差异"),s("OutboundLink")],1),t._v("。此 API 日后将被废弃，建议使用 "),s("RouterLink",{attrs:{to:"/develop/component/formlist_button/"}},[t._v("button")]),t._v(" 组件实现相关功能。")],1)]),t._v(" "),s("p",[s("strong",[t._v("解释")]),t._v("： 选择用户的发票抬头，使用该 API 需通过"),s("a",{attrs:{href:"https://smartprogram.baidu.com/docs/develop/api/open/authorize_set/",target:"_blank",rel:"noopener noreferrer"}},[t._v("获取用户权限设置"),s("OutboundLink")],1),t._v("申请授权后方可对用户发起授权申请，可在"),s("a",{attrs:{href:"https://smartprogram.baidu.com/docs/develop/api/open/authorize_list/",target:"_blank",rel:"noopener noreferrer"}},[t._v("需授权接口列表"),s("OutboundLink")],1),t._v("中查看相关错误码信息。"),s("br"),t._v(" "),s("strong",[t._v("Web 态说明")]),t._v("： Web 态暂不支持 chooseInvoiceTitle API 功能。在 Web 态会做 "),s("strong",[t._v("打开百度 APP 对应小程序页面")]),t._v(" 的降级处理")]),t._v(" "),s("h2",{attrs:{id:"方法参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法参数"}},[t._v("#")]),t._v(" 方法参数")]),t._v(" "),s("p",[t._v("Object object")]),t._v(" "),s("h3",{attrs:{id:"object参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object参数说明"}},[t._v("#")]),t._v(" "),s("code",[t._v("object")]),t._v("参数说明")]),t._v(" "),s("div",{staticClass:"table-wrap"},[s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("必填")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("success")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("接口调用成功的回调函数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("fail")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("接口调用失败的回调函数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("complete")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])])]),t._v(" "),s("h3",{attrs:{id:"success返回参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#success返回参数说明"}},[t._v("#")]),t._v(" success返回参数说明")]),t._v(" "),s("div",{staticClass:"table-wrap"},[s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("type")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("抬头类型（0：单位，1：个人）")])]),t._v(" "),s("tr",[s("td",[t._v("title")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("抬头名称")])]),t._v(" "),s("tr",[s("td",[t._v("taxNumber")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("抬头税号")])]),t._v(" "),s("tr",[s("td",[t._v("companyAddress")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("单位地址")])]),t._v(" "),s("tr",[s("td",[t._v("telephone")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("手机号码")])]),t._v(" "),s("tr",[s("td",[t._v("bankName")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("银行名称")])]),t._v(" "),s("tr",[s("td",[t._v("bankAccount")]),t._v(" "),s("td",[t._v("String")]),t._v(" "),s("td",[t._v("银行账号")])])])])]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例 "),s("openIde",{attrs:{url:"swanide://fragment/cc76d7bff883f25aae817297814658931559043491920"}})],1),t._v(" "),s("QRCode",{attrs:{path:"swan-api/choose-invoice-title/choose-invoice-title"}}),s("h3",{attrs:{id:"图片示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片示例"}},[t._v("#")]),t._v(" 图片示例")]),t._v(" "),s("div",{staticClass:"m-doc-custom-examples"},[s("div",{staticClass:"m-doc-custom-examples-correct"},[s("img",{attrs:{src:"https://b.bdstatic.com/miniapp/images/chooseInvoiceTitle.gif"}})]),t._v(" "),s("div",{staticClass:"m-doc-custom-examples-correct"},[s("img",{attrs:{src:" "}})]),t._v(" "),s("div",{staticClass:"m-doc-custom-examples-correct"},[s("img",{attrs:{src:" "}})])]),t._v(" "),s("h3",{attrs:{id:"代码示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),s("ul",[s("li",[t._v("在 swan 文件中")])]),t._v(" "),s("CodeTabContent",{attrs:{name:"SWAN"}},[s("pre",{pre:!0,attrs:{class:"language-markup"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("view")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("wrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("primary"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("bindtap")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("chooseInvoiceTitle"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("chooseInvoiceTitle"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("view")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ul",[s("li",[t._v("在 js 文件中")])]),t._v(" "),s("CodeTabContent",{attrs:{name:"JS"}},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chooseInvoiceTitle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        swan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chooseInvoiceTitle")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chooseInvoiceTitle success'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fail")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'chooseInvoiceTitle fail'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ul",[s("li",[t._v("在 css 文件中")])]),t._v(" "),s("CodeTabContent",{attrs:{name:"CSS"}},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".wrap")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 50rpx 30rpx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"bugs-tips"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bugs-tips"}},[t._v("#")]),t._v(" Bugs & Tips")]),t._v(" "),s("p",[t._v("swan.chooseInvoiceTitle 自带前置登录  逻辑，不需要单独调用 swan.login 。")])],1)}),[],!1,null,null,null);a.default=e.exports}}]);