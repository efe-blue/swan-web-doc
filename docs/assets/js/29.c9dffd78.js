(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{295:function(t,a,s){"use strict";s.r(a);var e=s(28),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("基础库 3.20.11 开始支持，低版本需做兼容处理。")])]),t._v(" "),s("p",[s("strong",[t._v("解释")]),t._v("：人脸搜索，传入人脸图片，支持在指定人脸图片集合中，找到与传入图片中人脸最为相似的图片。使用本功能需要小程序开发者后台登录超级管理员账号，点击"),s("a",{attrs:{href:"https://ai.baidu.com/ai-doc/FACE/Bk37c1m1n",target:"_blank",rel:"noopener noreferrer"}},[t._v("云平台付费链接"),s("OutboundLink")],1),t._v("开通云账号付费功能。"),s("br"),t._v(" "),s("strong",[t._v("Web 态说明")]),t._v("：受宿主环境限制，Web 态暂不支持 AI 能力相关接口。在 Web 态会做 "),s("strong",[t._v("打开百度 App 对应小程序页面")]),t._v(" 的降级处理。")]),t._v(" "),s("h2",{attrs:{id:"方法参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#方法参数"}},[t._v("#")]),t._v(" 方法参数")]),t._v(" "),s("p",[t._v("Object object")]),t._v(" "),s("h3",{attrs:{id:"object参数说明-："}},[s("a",{staticClass:"header-anchor",attrs:{href:"#object参数说明-："}},[t._v("#")]),t._v(" "),s("code",[t._v("object")]),t._v("参数说明 ：")]),t._v(" "),s("div",{staticClass:"table-wrap"},[s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[t._v("属性名")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("必填")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")]),t._v(" "),s("th",{staticStyle:{"text-align":"left"}},[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("image")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("图片信息(总数据大小应小于 10M)，图片上传方式根据 image_type 来判断。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("image_type")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("图片类型"),s("br"),t._v(" **·"),s("strong",[t._v("BASE64 :图片的 base64 值，base64 编码后的图片数据，编码后的图片大小不超过2M；"),s("br")]),t._v("·"),s("strong",[t._v("URL :图片的 URL 地址( 可能由于网络等原因导致下载图片时间过长)；"),s("br")]),t._v("·**FACE_TOKEN : 人脸图片的唯一标识，调用人脸检测接口时，会为每个人脸图片赋予一个唯一的 FACE_TOKEN，同一张图片多次检测得到的 FACE_TOKEN 是同一个。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("group_id_list")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("是")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("从指定的 group 中进行查找 用逗号分隔，上限 10 个。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("quality_control")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("图片质量控制。"),s("br"),t._v(" **·**NONE : 不进行控制；"),s("br"),t._v(" **·**LOW :较低的质量要求；"),s("br"),t._v(" **·**NORMAL : 一般的质量要求；"),s("br"),t._v(" **·**HIGH : 较高的质量要求；默认 NONE，若图片质量不满足要求，则返回结果中会提示质量检测失败。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("liveness_control")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("活体检测控制。"),s("br"),t._v(" **·**NONE : 不进行控制；"),s("br"),t._v(" **·**LOW :较低的活体要求(高通过率 低攻击拒绝率)；"),s("br"),t._v(" **·**NORMAL : 一般的活体要求(平衡的攻击拒绝率, 通过率)；"),s("br"),t._v(" **·**HIGH : 较高的活体要求(高攻击拒绝率 低通过率)。默认 NONE，若活体检测结果不满足要求，则返回结果中会提示活体检测失败。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("max_face_num")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("最多处理人脸的数目，默认值为1，仅检测图片中面积最大的那个人脸；最大值10，检测图片中面积最大的几张人脸。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("user_id")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("string")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("当需要对特定用户进行比对时，指定user_id进行比对。即人脸认证功能。")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("success")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("接口调用成功后的回调函数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("fail")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("接口调用失败的回调函数")])]),t._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[t._v("complete")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("Function")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("否")]),t._v(" "),s("td",{staticStyle:{"text-align":"left"}}),t._v(" "),s("td",{staticStyle:{"text-align":"left"}},[t._v("接口调用结束的回调函数（调用成功、失败都会执行）")])])])])]),t._v(" "),s("h3",{attrs:{id:"success-返回参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#success-返回参数说明"}},[t._v("#")]),t._v(" success 返回参数说明")]),t._v(" "),s("div",{staticClass:"table-wrap"},[s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("参数类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("face_token")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("人脸标志")])]),t._v(" "),s("tr",[s("td",[t._v("user_list")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("匹配的用户信息列表")])])])])]),t._v(" "),s("h3",{attrs:{id:"user-list参数说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-list参数说明"}},[t._v("#")]),t._v(" user_list参数说明")]),t._v(" "),s("div",{staticClass:"table-wrap"},[s("table",[s("thead",[s("tr",[s("th",[t._v("参数名")]),t._v(" "),s("th",[t._v("参数类型")]),t._v(" "),s("th",[t._v("说明")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("group_id")]),t._v(" "),s("td",[t._v("string")]),t._v(" "),s("td",[t._v("用户所属的 group_id")])]),t._v(" "),s("tr",[s("td",[t._v("user_id")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("用户的 user_id")])]),t._v(" "),s("tr",[s("td",[t._v("user_info")]),t._v(" "),s("td",[t._v("Array")]),t._v(" "),s("td",[t._v("注册用户时携带的 user_info")])]),t._v(" "),s("tr",[s("td",[t._v("score")]),t._v(" "),s("td",[t._v("number")]),t._v(" "),s("td",[t._v("用户的匹配得分，推荐阈值 80 分。")])])])])]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例 "),s("openIde",{attrs:{url:"swanide://fragment/b8fa80aadd72bf5634d3e05f9e3689b41581336772492"}})],1),t._v(" "),s("QRCode",{attrs:{url:"https://smartapp.baidu.com/mappconsole/api/packagescheme?appKey=4fecoAqgCIUtzIyA4FAPgoyrc4oUc25c&path=swan-api%2Fface-search%2Fface-search"}}),s("h3",{attrs:{id:"图片示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片示例"}},[t._v("#")]),t._v(" 图片示例")]),t._v(" "),s("div",{staticClass:"m-doc-custom-examples"},[s("div",{staticClass:"m-doc-custom-examples-correct"},[s("img",{attrs:{src:"https://b.bdstatic.com/miniapp/images/faceSearch.gif"}})]),t._v(" "),s("div",{staticClass:"m-doc-custom-examples-correct"},[s("img",{attrs:{src:" "}})]),t._v(" "),s("div",{staticClass:"m-doc-custom-examples-correct"},[s("img",{attrs:{src:" "}})])]),t._v(" "),s("h3",{attrs:{id:"代码示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),s("CodeTabContent",{attrs:{name:"JS"}},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Page")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("faceSearch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        swan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chooseImage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" imageTop "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tempFilePaths"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let imageLeft = res.tempFilePaths[1];")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let imageMid = res.tempFilePaths[2];")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// let imageRight = res.tempFilePaths[3];")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AI系列的api有宿主使用限制,只可在百度App中使用,建议使用时加一层判断防止代码报未知错误")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" swan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSystemInfoSync")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("host"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("host "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'baiduboxapp'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    swan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ai"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("faceSearch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        image"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        image_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'BASE64'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        group_id_list"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'imageLeft,imageMid,imageRight'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        quality_control"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NONE'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        liveness_control"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'NONE'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        face_type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'LIVE'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        user_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xxxxxx'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        max_user_num"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("res")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fail")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("err")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                            console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("err"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    swan"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showToast")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                        title"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'此api目前仅可在百度App上使用'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                        icon"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'none'")]),t._v("\n                    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"返回示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#返回示例"}},[t._v("#")]),t._v(" 返回示例")]),t._v(" "),s("CodeTabContent",{attrs:{name:"TEXT"}},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('{\n    "face_token": "fid",\n    "user_list": [  \n       {\n          "group_id" : "test1",\n          "user_id": "u333333",\n          "user_info": "Test User",\n          "score": 99.3  \n      }\n    ]\n  }\n')])])])],1)}),[],!1,null,null,null);a.default=n.exports}}]);