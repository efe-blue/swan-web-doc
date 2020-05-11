(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{298:function(t,s,a){"use strict";a.r(s);var r=a(28),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[a("strong",[t._v("接口描述")]),t._v(":商户可以通过该接口下载历史交易清单。")]),t._v(" "),a("p",[a("strong",[t._v("接口地址")]),t._v(":"),a("code",[t._v("https://openapi.baidu.com/rest/2.0/smartapp/pay/paymentservice/orderBill")])]),t._v(" "),a("p",[a("strong",[t._v("请求方式")]),t._v("："),a("code",[t._v("GET")])]),t._v(" "),a("p",[a("strong",[t._v("请求参数")]),t._v("：")]),t._v(" "),a("div",{staticClass:"table-wrap"},[a("table",[a("thead",[a("tr",[a("th",[t._v("参数名称")]),t._v(" "),a("th",[t._v("参数说明")]),t._v(" "),a("th",[t._v("in")]),t._v(" "),a("th",[t._v("是否必须")]),t._v(" "),a("th",[t._v("数据类型")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("access_token")]),t._v(" "),a("td",[t._v("获取"),a("a",{attrs:{href:"https://smartprogram.baidu.com/docs/develop/serverapi/power_exp/",target:"_blank",rel:"noopener noreferrer"}},[t._v("access_token"),a("OutboundLink")],1)]),t._v(" "),a("td",[t._v("query")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("string")])]),t._v(" "),a("tr",[a("td",[t._v("billTime")]),t._v(" "),a("td",[t._v("对账单日期 格式 yyyy-MM-dd")]),t._v(" "),a("td",[t._v("query")]),t._v(" "),a("td",[t._v("true")]),t._v(" "),a("td",[t._v("string")])])])])]),t._v(" "),a("p",[a("strong",[t._v("响应示例")]),t._v(":")]),t._v(" "),a("CodeTabContent",{attrs:{name:"JSON"}},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"data"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"createTime"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建时间")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"downloadName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//账单名称")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"exportStatus"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//导出进度")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//下载地址")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"totalCount"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"errno"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"msg"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"string"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);